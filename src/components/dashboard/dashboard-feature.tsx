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
    "5bkwqL7pDUMm6DuU2Za4nm3xHkBAKL4iuZ5HFBQMafE86ZMpqs9qeVg9eVuUQkCGJ485Ri4zKvumvqBUvtLC6Gxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UotCcZR18wcxCNaM95H9PmLEmfZ1zjHRpeUaUypdU2B4C8Jd8dwDh336bcviFTAahvqms2Ftp8nMXmmCqErAftU",
  "key1": "3FKUjp9uABiVzf4wRxg2JMSVZxkT2bt5nGGcMZX1ZLeQX5W4JN3s8qQ8tfA4SMGuLQAFVDGqxHmtJZDXmiiQGuJU",
  "key2": "2Nv4KvfHcaGEo6tTWLpJmxRC6tQGguGxgAERYbkaPKQd7A6BrLPQsfwxD3Mh1bQu4pQiUBcvxV8x4smcmY52h9QL",
  "key3": "64AUhT5Djdr5X2aGB5rk86WxwBd8xZxpkrFuYiejWgGkM57VPLkNfvq9LppMgKiwWcivFXnRAYQ9GDRhwAfRFLP5",
  "key4": "4XvxbNSTJEEw1AJesNayzNmdGBSV6gRfWKTQot4HS4Wb8sg1FWbr1nFpcYKm6AAJexTCEUJ4HSRgG8JXRyzdgGRb",
  "key5": "3RmUUE669oBq3CsLC2QY522uMKrZQvCcw1H2MVA19RNHX671eJ3x5H1o3DEupZqD34U3HcYi1STUiAjCYgXoTC1p",
  "key6": "3Z6qrqdjB3vKKQk4aNKLS4yqSpwfja8hedfUQV1GC9MdZ2sSFnoH9oPctJJMf8Sd9JYgtXjSNoCUSp6R2Q84s7zv",
  "key7": "3CxmVGEmofbmtWbQrQk8rGHhkZvWocaS1SWiib6av64afq3C1Qy1CQUSby4LZ9ZTGv7WyYd5n56uGLp36RF7KmYu",
  "key8": "59hhPUvnYsfEDkFxd8HgmzKLKbgwhYxPbDANixMgCi9wxZFgQv2aVqPYv9jLX2hyUCspqNXMUPMu2MxBtpix364j",
  "key9": "Xewro6G7CmXj89VSxtQ8YokA5PHJeBgbMZYEt8hcEPYqgFmQqRtmTgG8LDEsgnvjP5Nh3yp8dceTfvG98EicqBH",
  "key10": "2FFJauQ2ZwNgFMkHT8xNTyz42uWz4zEDynpqUmzNkuPubeAQfdooyvZ95ppHx6xLwgm24up4bB4du4XxaSarc2Q6",
  "key11": "5wdEUNUfChvV2n1V6PcxQzTVnJNgwfYkSzkuRCsUkHcCC4fGrJukRL13KYtngtt8oaGmJunykH5pcPtZpsgMqJWk",
  "key12": "3kxLP8TcGqPuiPcqVLUxwvoXF7a8W2AqnmbLtKz741Y8NXsA7AGMUfsnFa6rv16bJxgDfMKEKRsPQvxTGX1N7wzU",
  "key13": "296VvVbtwSVhRydMokUmTWaCtHmSdq3cW6nfhTQc8T4QaE69sUpUHLEu5NBzVuPFuAepXJkPHS4iVg7ipFmvDEhJ",
  "key14": "61Vrdkdi4KTLPxn7f67V4uz2HjbsyG5GcjkxR5XskeBCdSoFpyMijcQDdezENuFJHUhNwimX9TQ1wxA6cUSEoEAB",
  "key15": "4bMgKsK48cAsT86UDzjEJSxAiD1Tz5Mrj8iTZwebU54feUTGngxW8R2EspCH1LgmAtpffFzzYVGHdHbSuBrBCsKh",
  "key16": "4rVeBV1UTjDgqQ4MNecFUmC3NaHVffR5awbFwPYD6Qr7N4KUVL6XjVuJEpZvLUDC4z99UyoQayARMcH3uNqaJn6m",
  "key17": "4q5UXh3EMx3ix1JdRDfaMM5up9LKWfpwtcTnwTvR1FsgPPaerNbxvbugjx1SbpD4wpA5shg7eR7eo2qkLvkocRpx",
  "key18": "5h4D5gTABvS8fVXJwLCRdNwodQMrDmoUgYNfdF22ePn9mcH2f162QGdjYpELB5g4bhbDFq9LRfNr1QXS6WNMBYdq",
  "key19": "3zPag8pAuCmuReD11pqG791oioJeKMp4PRy1R5T6C7zDV4HA1ADVAtdh9gfe4uWFuY7NmumRwpWE41cF85tNRQRj",
  "key20": "3VtbNsAaszpa9PvmqXVhJGg6BcHyjC6i7DdUFCs8fuEwfqYn2aoVMJdoub4eqgE8UHef16ZsVHFR8zFYsJ5cAf1i",
  "key21": "5mDVaMrNvsWHpcUqAhYh1H66HoNpMQqraAmWBE3AzZdfz12ujLHjCpottvncXJ9NUpVcAd6zDc1w4r6D4LHCbCQc",
  "key22": "2dCtJfnFWWuXJHjFdvLBuEZxLBroP2aGJg3UM55mtkFghYzpDjrhV7aGL5eA6YzV5kNL7uHwnc5X8PNo9He5awg4",
  "key23": "54Fve99Xd6qeiAeri32bDgWNCg7toGK8RZHMDoX991bp3z8uwwnaskbR49ywBxXe7ndpBchoT1jNm8daRU1hNuAU",
  "key24": "2Uvant1ujZYjMytkCXX6DgSJUEtbCrqonJ9P6snUhjihBJchDyARZkaecGCyezt7jgMwsDtbwLTU4JgwHncih4Hq",
  "key25": "52GFH1tR8JabcZgz2UjAmHy4pzxQe9jsoh5fsiKT7UuNKtfS4mJgWEL4iMNPeFzzhH171Ti96hiJCcaTcE8Bo6rW"
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
