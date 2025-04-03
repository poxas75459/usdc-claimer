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
    "e1A1zjRXeo1VuWL25MQginXig572dQpfFzauSvCcYcuayYXeGKkWu6uf21Req5CGmXbrupUcD2HksnQTH9GbAM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jyMXc5v6nRETPq246XuV92787LEAwpQtG9qAWWEZtX6GhxgqBn42UAdmuGXWF9V9FfjF1sw8z4g4VL6u75yiYWm",
  "key1": "4LbbQY8qkTXWnRky43x1KN4cRLbAhUV6MPvgnUAZo5VnpyPNL1G6h9DJhZeFJmkMeqwqqS8jQCLckrgQq3xdkjYX",
  "key2": "MgQ3EECVGs26Q8b2AsCGhurkSYc8NZVAABqKWe4q7JxoNorKYkmVwdytn7J9NuqGcUoBVD2KgmJ4GHegWZHoF3K",
  "key3": "5H73kxcBp3bGqnpYFMwPaZ7YjK4czyMasrEKiVbBE4Wp3pdgxBmoXdsp61re6h7hhSqwFEz9jYTUTtMfTj3mtQUK",
  "key4": "2oVcJXMqZKx2zkkgcQZBcxdVuTiJSG69AnuWhHqZemL4DPyS1mgcVSxLaQNMUVxf3Km6BfnNZWnyswU2fCQm7Yx2",
  "key5": "3BWvKncTkut1SrKW8YJc7ZaHLGHXcyqN4FsW2kEUtM6Qe4NKAEx3tmXEUUKSW4WkyzEb1jnVFQNtjFqA8xbAzQz8",
  "key6": "2m3Xhz43s7UP4JWC7sAXhyb1A6L1iDWMR7ACDjfNZybSvopBCtwrRsZ9jgTE3YAzpvUVTs7RF8LeEwqv7ri8fQjR",
  "key7": "5bd5sGCNcC62Bvao2TxMQVY9sHNMmvUuqsgF6PHcnSWdj2zM9TaE1XpamZiXBebni6aCme3Rnzyu6dfkE7to41q2",
  "key8": "36284XRhqGfHvezsmn4usheC9n8jWjK4KyTQBHJGQhWsJX9fkjpnG4ySPjXSkWCZwFHkSiPru5j5LFDMi6UrUXB7",
  "key9": "2t5cnAnDou9mqiv47wQaDEzNi5TZ9PhNWzhyutkKqke1gJp7EtrzeR3AysSJfGTPHDdoWjiZBnTpsjbKua4xNV6b",
  "key10": "4rmoW44k84LGJA4qsw5JiJa43udU6Y5PsLMWTSVqTcmssqpNwZa7LxmDVJ9Lr3y6urFYrjFH9duNfVvKioWCcDED",
  "key11": "2obkQgCuA4g5ER8U7GTH5r29fYNsYYooDJmBVEzdSJryd3EAVL7RFqkJKXp7vHnWJf5bipURo2rpMyi9iYyvux6F",
  "key12": "52CsbAkLTKd2o56phu2rxSZTiiuh9qYatQgrHh7QjxC1G42goKXXyNRTu2AQLtFiM18weas5YdEQHWvUbUEyb7xB",
  "key13": "3m8jFVxXrEziFVPzr2AQa6PT77Vi5soVBTU28nReGBtHLS1DRTfhgrNZpwzR3G4d7kbojM5piQWendL8UkDWDN7k",
  "key14": "mwFdcJnWXqaaoFpNwWUy8TpgcETraXciR94z5WnuerUuXdbGa1q3dV3qnd1h4AjnNGZMja6ERA38kgyK3JL1jjn",
  "key15": "66BkpNr4SCFjTJaW4V7irkzvfJGXEycpkVRx8UfMZbzSuHF3uPRrs5qNrgVYQn2Wegs1a1wgcAUze5ePkKSFNqFe",
  "key16": "5uFLqxCsD3X868U6xdKsRPZ4odZSwb2oYJAAFxwgDeXpmhkn9f4d9a5dDdEkeavtJd4z9XGXE93gPfAdxqxBv8UH",
  "key17": "eaTLwjwmUrPfNLsFZi994JJRN2k8LvFTzvAYZCrSz5ZPYUwgcD15XwdwtAr2ZrrvL3MdHwJrVwX1UnaPhZYHCxn",
  "key18": "3frRXFwSS49rixQDjnygzjdkJb2xQAGChz92h6hM8iW2U2SWa7qhxLSjU6f3Zz88hynQ5oA6TFtrrw3QAovJ8pAf",
  "key19": "5xTCK7GiujWfe9uNm5BHLeDNCY6WYA7QasXwAg4SXRUnqzPnR5po1Kyzuh3xpr4o1p79QZs7cGPnJxeCwbn1t1u3",
  "key20": "5sKsz5MEguPFM6Mwppv1Qv3h3mMzf8HpvxkxVGidsoJCkq16DJ2iw6DoyrHZKnGnx2yF2U9SErMbrhenk5eo8vFD",
  "key21": "2snBRqD6ZakrxWheRZefZiwuFxxNfca8YeqW8VCzQrRcAHrfr6vFqT6wy67BnfJLfdrJJm53fNw2eHmHw7PEEaVg",
  "key22": "5xYtxfcWVexU8purM58UTn43uD4o24yyngodYC51vRmyGrBg4yvj3rnRz15YY9B78bMqBQVRpXXhHKhoDLJx569M",
  "key23": "4iWuzZDHfc25Q53cT6TBpGX3JD951ML35JEFLLdpPuJWqE2qvggTcH5me3LSNyTHosp4RXUyjLc7ec1zAbK7X6di",
  "key24": "3pRaNMSWGoME1BAbL14ctucVyfezqW5bNTaMsPSJrPPEnRKDEv9bVFQu3KhncLDJf2EK8JvCDoabj7Gj7yjvd2Sk",
  "key25": "2xHZC6M6MDyzQ8E7hwdWBxmoAbvs3G5pmxGL1wGKu2QgfPW2FD3HXTi1nxaN9rmbhrgiiVWc74unrm8DfaKxt8X",
  "key26": "5UqcVoU687HXVLmv8LkU7X51YsLjFgBSmmy7sEJBYotFMXhB9nN1Za6p3yz1NdomdZ8c6qc3SGT8JuyXuZbGoThZ",
  "key27": "64cc2PF4Hrc4Fep1TSkhFvZvTvVJtu1kXHMZenAEQ5hNDQ3hcdwtcdok4kFMH1X5Q539DUZTQtcEEVDNQZ9FHm7V",
  "key28": "5SpNPuvDvfmxPnf5t3UPWbYQmo3TjftxPmaVvS9JBKLfZVeKLQdJ1UYJvFij3FnVjAFtcMZ3NHP5gyG8KmRsHLfn",
  "key29": "ja72nhV7ptaTokbd5h2mTQKZqGkwyX9uWasA5Giqbb1FAwMbqhHpksQNohsv2rEkKc7SSurCErfNBKGGVxntDq7"
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
