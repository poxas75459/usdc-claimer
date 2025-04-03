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
    "5cFKoaXT1QpYXgrVEow8BDcx9uKb15uuc7Q4Bcq97oYXC8uUz2JA1xZKaRazwSUaHtmnycdMqYE8HMCMp7JMrpCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PeBn4wiCPm6KKXssXDhAEFfDWtGLYvoTixnkNrTZsyz7H2pqA2kbA3wwhXi1CShk9WVsHULrruqM7owTQ62Pfc2",
  "key1": "3HnrCEfYwtLwZqMg9SC7tJmoHdBHuL3ahemagfZku4bEQpvnKGRsGXEpqWYqcZsyJfnqYrpiyfsvKXksDwvBej3d",
  "key2": "4qNLuCeP1YdStzWGsvrviQQfsrQZDL8EcY6k2kAD4wkSqGVFHf3QDRfVp3W3ucVsM7Eqd8QsgKao4VKBPhwKKEAf",
  "key3": "2d7vHvXMbNxmWvnmNVrsysV7qWpD7rZTnAS8JWyVX73DcGHaX6jsCGAhyJhhKkTTKAyVRj2YWZ89h9ZJgbpKxfyu",
  "key4": "3oiJd4Mj4pHGEph8XV5HVXWcxYCbsZ4yNUJuUTMEFvpAz8tyXhXtnPCSkmP9FtN2NEaXyxBMXQTq3hQymst2T2ZN",
  "key5": "56KDQEYcpcmanZKaGHpkBrpG6vZyNbYdwzLVui6JF7imKVncEUM1fEJ7HRTrd8BxiVKTbAdJwp3p2nzgGM2KAYCD",
  "key6": "2Yf7eVDRcycN2CfqHm3KiKdzeYk4UM1HAE2NGJpjbCLLzPSvgwfke6sqV7aDyzog8oZYFcs8kruZjdVMr8ZvHs5J",
  "key7": "4CMWSvjrzeHLPsNTgiS2NVefkRei7tDv84enF3H1aeD8Fjk9PTUBVrxYynaXZvnbR2f1iF8ha49DpTjMFg2egEWX",
  "key8": "Y2Lj632Xd52p1o3e2EMoXch1djJQUdQQQmi8r7em3p1U3uQjs6vWqHCsn5qoQxkwW3Vw2g926DMhUxjg7qR7MdL",
  "key9": "4ZWuedC1jxrsxSd7yTWGhR93KARCf9iTfPgKu83BAtF5U3qxhv2iY315Xn3V2xb9iqCGjH8SRBVC1UHov9gdJTRN",
  "key10": "4ucViaUwnuRieoUYkP8wDfXmYSsAwtYKek9jHWYoV6rdo3bJ7UZbRXTZNr4f2afn9PexRJQLyui8SMKXFDjJ38wS",
  "key11": "4ePgsm4wZ3ph7pxaruq7Wgf1E6k591y99ViGQno5pt5iQLt4m4hRqnDEye7BNLySAUwCNtzVW359HF97MFnzjWzz",
  "key12": "DWuF6ukKnKFw9dwBxFFpvQpCGZ9Cqv3yXgtQvBpQNg1AwZhWqeHuxx8aZgM3twCgsiw2hZ9qLdStGH5ytNKe938",
  "key13": "5HFz3B6g6XZUgAva9AqdFXJ22cqgw3Lqhkb5i8UnGDJBSPPmx5KrBr9UZSVYf34n561gCbuirpM55KPcgADyXVNc",
  "key14": "2HgLJDEroCxbyp5fjZFtuQ483RomPaR6fyBRP7WkikX76Xu3FP3iapajoNxBNpXDL3vV8wEt98qApPCALgL35nWJ",
  "key15": "3Z6vJQeFAKP8j5j5yfykFPfijoYpKJ79tKdjn5uSC31zGtPwsyTooB2FKmkMizzNguy9QpbtmZibhbaaYQKHauAC",
  "key16": "1qBDo5t6MPENoCMxBxKoFdhYoYwwThZoGeWQLuNLrNkub6rpU9PzMbFGUbUtqzPkGncD8nycYPCMB7Dh5dtwVro",
  "key17": "4E8rLWUGRvqmTCMojxnLpyokr2nS1CQVAhxUFLPrmGHzyQEu6MvVpJFkHKoeah2Na2sZtxputs9j6HSThQsquTJi",
  "key18": "5NPKQxMneh8rWZzGtf6AkSguvpY8qMURsBNA6F5tbGph39qs1jyHRw6MtWdSa6BY5K8sXusnwBztfBDidP58gK3J",
  "key19": "4K5sTWTqnKdhiT6yY2MJDh1mXxrBdLeAo78CYTRFd6HhMnR3j6eDJrhvi2c35Lc3A62kmxmv6M9adjRrFmfD7ZnF",
  "key20": "2gpqCnyLFFV9BQTPV1bjSgaPc4M3Db6RstnsxQ6XK83S58Pq2B1FiTfYmHf5k5zbd6StTjmWzaZkcgSkM2as6vje",
  "key21": "4s1ZkoB1pv8XQgKASAQMfThKdJwMdPE4dpXDA9PK5RTqAnKfS3txwthoaxkCqxgJiW7rVk4Tzxyve5iQ3jzUWLQH",
  "key22": "5wuMRxn5DRx7apcahij8DU6qkCskaqDXknW5ET8azfhcvfpLMWqi9B4L6ZAkJEHgjofFYPwry3LV8JrAAbjnKyZU",
  "key23": "2MB6e26fmzCKYP1nKUE3JH8PX21DuaPEzDxaBmD2Sgh1TvavZ4AfHq5V475RtHsohyt6tPJ9iCyodbNhu6F6SGra",
  "key24": "2DJQHiWN26wqaZ2qf8BtDtQqBvn1vcqgwQVodAZTBk2srLx8C5q1HHVBCzjo7eKARCzuneigojs3rGoawesW6id9"
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
