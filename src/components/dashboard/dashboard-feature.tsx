/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4DcTpnTt9JRpWmyrD2Utzv3uMc1fYaSu1Mtanz7tGutEy1xxusuhLVX2GYi56DGEL5XuqDdJFWbRZ7eyRHBgTUkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RegBVWS4aYWnNoQcYfWyWQruv9TtJmCreFsqYQex386DZEogQZ2PDibakKQHptQEkxjzH81dkLtGSPKrPKQ5tjf",
  "key1": "52xYo91y4mJXN9r5gWJCH2UpiGCw4Qw3Se1QmnkjEcR2B6WqJTKwQtvGNMuhagR3EwMKZa8WHVDAi3p2M5NypaWj",
  "key2": "uYWJZPRqBdaz2w6Nxkro7cirB2dxGsu47sECpaj6moVyJtuK3ZZuhPxNA38vvtvyfqXtJif49cqkLpPzyLMu1Sg",
  "key3": "4BHphPxM1PS65Cw1QbEG227vPaCucMD84LugqWhoyNmHhHAghGZsWLm7Dj9mvYJAwDFpe9VWm9x8Wj2cYA8BBjwL",
  "key4": "2dfN7WREV2PtkUMpF7DHHtcNZF9c8qTn7ixDMXWew3aFWxZjH4Zb8PzKB4sN6mZQgYpXNbxyFLw2c99ydE5SZFPC",
  "key5": "2CyDpq6JQzjSaE5JB7gDNp5zEXxu6TAvcdgyvjiwuk9Ak5E8ENEYcQCa4XpXmYVUev9HAyQtYaDoZLKUyJD4Ehhs",
  "key6": "2mTM1jqsuFkknfwmkJMcR7P2pvyEUrwrKmeUhSMxN9affEAihMfdoRXXxxSViDF4qzcfw6LE4aL8kKVc4VKuimgH",
  "key7": "5ZanqZCokrG3xQ5pKkk6QnCMfw9yAADnAh7gCZ33fdh2qUaH71QpNqDWUCJMgd4woTLCNFFgxWzkCdJaHVpox7rT",
  "key8": "2YHttEgoPCYu4o1GEQjcdgUBg25UP3jSds1Z4cAvMvKD2r76NFSxPbgBsJUy4UWod4pxjCT8fZqfPRxemeVzrtGY",
  "key9": "EfCfKhSaMQFZ8TdPDywxcgBJsxZURwnvmgnP8dGagBPfP3usUVeg6UzdFdk8mvEiGDonUqSpDdLtb9HaykU74EQ",
  "key10": "4wMCaRKWrmV8gtktNiyA7tCgBjfEYUfo4sdJX6D2FJLHtcPbu9T3rbHqQFE69MeUH2NetxWAyMSctJxhujh7Apju",
  "key11": "5yqn4s8bV4A9qMGkp97bzv7o4dkTeGEzejHGMABBD3pV887AEY7PH669cuicz61fn8z35BVjWP6oktmT5fvfvah3",
  "key12": "XQ3vA1WZuF7UNA3HPHtfJbSirdGSSFAudZBF4kwVCVnLnzDyDqgq54JoAq7TTho2TbTrsQBk2UkmGgQBHRYkuVR",
  "key13": "3J7R2SaSPRWhDxKcoeE449q81A1zPmLthbsXfWUSqP1zYLdzDteqwPgw4mckztabhsBUznsyvCykJhcnKEWdiT4M",
  "key14": "4A8ZUDwstKDttJAqRUjFP1AY29R4bhimroSUPvhJGVwrhtszpQajxxkcTsPfV8eZyDuYrFWRReoJxsQiHKwcmaZi",
  "key15": "jj8kR5Qtp5kcbHid1USa5Dp9MwZFK4QFTRvjpiBwyCKHf9QaDevCueb4q3ei2QsEiQ7r8F2ayQTF8GgEU8U7KNU",
  "key16": "2eceNJ9AErEKih7q6QEmb2egbNfpeKHs9ydJ3X4AXt2Xb7Pp3pkhWh4bc7ACjLpZyCfQ2Dp5fLH6q2kLKBBU23Tx",
  "key17": "66Skxu4SSrzWNDVh6eRqy9yLhE7dc5SNtZnpSxACi8BeF4dM3Sv8HaYtpSfSpF8Fbqdkh6gWYovy228yZssJ932o",
  "key18": "4otAsnaiXrFkYLzMXwquD2fpQhxaikZY7VMRjo6gNPrDWU6tRgycFn9cfTcncRkRHN6PzT48RdmtiinAomGEQXQ3",
  "key19": "MAAMqbaeRSecchdJ8FVsxX8kiF5YNS5KhE56goLx8wML7FYNd3nnDK37fEpqzFCfUU6k4LHtov4nEx719g8pojv",
  "key20": "4Kv8mgqUMDoR2Vnkpf4xYQHXeXbkcRDcnACxTLEiLSpUQkvfCcqH2NegWZtPNR2ZrMVoF1bZg4bMmdbV8oCYZNeM",
  "key21": "oNELz3myEBm4qCeco6Z3etRpGmGVwYSHSMVosXHV2UW6cvkWKbCdxF1zzHRqc7uQEZRBE4K695jpcaENaedXKPp",
  "key22": "3tF4Xwjs7sV3szPFZQEZBUh3MBX7kztP7Dr46o2TmGV8QjDdJWeoDRUiHt8rFdCNWHJaxgqubHszYUs6CsCe2rLN",
  "key23": "2sJkvCrA9opk66RTjQWWwNkdPJGuEKvtWYbZHge749HYiUimW28ZvFvJQNeN1752dd56kDQsSyvo7TzjTYGpX8rp",
  "key24": "5jFB6An8Qr5pzdUTKDNGzKzfuURFuFH8zJnuATx6aSujTDQKucwKrQeCHGvihg6PLAixoLZjPXWUKF3BetQXBWYV",
  "key25": "KySdrRfBvRrgwwXE6FCh58sCCzp6EgEKMU2we8RdiMYdnhqqvUmxZiQ2QwADtk99DUhExFT1tSehWDZo6XrQnxo",
  "key26": "5hNpiMgYs9kb5PdzYEjqKrThJjy5UsVh2js1E87Q9kpd1CuVTFjzHpi8RYFGawrtyKmtTLwzKui3AaR5Ytvp8qpK",
  "key27": "3jKtooPwdVMLvZLf2UwBXCEkhGvLYmZLiVgamGQRFAjLDnaaVkkqsKu2KajxsmDnTqqyv5nt4eyRYvogU9Z64s21",
  "key28": "3JyJf6B4kNppg3jHP3s6ddizVmHTZ1Sv6vY7DTFX86UtjEJrgqUUZx3wjdpzjEQr11ZYsKs292PCc79a4Vc7kaRH",
  "key29": "4jKh3mLEHtM4CGRBjKjufzU2P1NLXSd7PdmGBa5ckQwFbH4U4H9u2v2ZuAzm4NpAoQ4yJ22ixc4dRcPe1LMWbXcQ",
  "key30": "5MexXNPSw4A51abPufRRkVGKCtzUqMvWhG8vG5hsN53niEgrUx6AAEsoBJRbai1xpRXt4roiezEHeW9HbkjuGDDY",
  "key31": "Mce6A9FuK6pxxLooxvvpQdAxZp17VHfx6ck2K2kto8CtFUAicEJP8psPMMbxp64uEHJLmzNmY2oUTE6WaVVwaPC"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
