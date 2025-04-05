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
    "B2Y44PFr93DVSijSpqVxhtCZ6YrsjMRSf7wcFBssrtqJwUYFbGXNHamJf8EiCSrDnWZqHpD5Junrk2WDxqMzKKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ydMYUT3cmsLB48Dw8LfKuUBjdMAixvm7u8V8PsZ2UHagCuTMw8VU7D7gaaH4EoMTzB3Hm3HRYauLTXSPGjRx4sx",
  "key1": "4Hun4JEMeS4nnAPHYzRKfMMZrQDkvxAKXXEgGSgd6GP7Jk3fREZnU5CZsp814tXYqageurrMXBtYGNt8qXapMVpd",
  "key2": "28ZDTMSv2W5b5T9m7cCNWvBxFd5xujF5KSjXUA9trJoYn7buAsfzerwhBMBy8kgKWft2qvAUcK6qSTHHMtJNjA9h",
  "key3": "4CwT9TtQL5ThTJa4ttAPDDVTxF2KsinD9Y6rJcLGuG9fC91tZJJB5XNEjiBwwurkmaEwshPMAPRT3dh5cXCcCYTS",
  "key4": "39qvWXHfRqhpZfqGmn8ZJvG3fkjNw8iRpJPLWZCQmMhpiiW8vKSHuYH7RT1ntmKZ5kuTygxrQV1S7pD9bM2TfbAu",
  "key5": "2yPGLo1hEKFHBeymimxPcQFu5uYNLA9oW1KwmxPt4JhAT3qWCZew9tSoK13BZkJmzqWp5jSTmD7bNGar48PcX3Wq",
  "key6": "4tfZi3roEuXR8Gyz4Z3j5RnwRaZT3CnPUr1govGTqmZwpP2aPMbv7bDMqip1rCzoWDCETvufV8Dxih829cozfwJZ",
  "key7": "3zMa3U1o5v7aCME8bpYqS7AWMonDFn5FWyr3WQJjE75FKQMbgNA83aasxBrqQ4dXp8AHpB9kUGhbZ14TBq1y9Vue",
  "key8": "aBwg6A3VCKoymYqvwoyDoTH4HS3HU5rR85fZyqPQprwon6n7VYTxz43aTu4FVUUt9w6PkUf73DWrxgosJopehMZ",
  "key9": "3BVqvakiaPkLXbMGkP1BpBPRvEY1nrgUDNXkHi3PQaDEpk5ehk1TaymmMSRUcwV1xnGPhkkjyLW2sr78pBX6Geyj",
  "key10": "29RosBTCWrWb9aK5fowvADFLpvQ3GQExguJjq275evtxx58MX7CnQ8v2bY6aNV1fNftYj4ozQzJJPCKcrwq8m9ci",
  "key11": "5nTU3RqMaxudfXYruqV3DTuVp6EpUzZhSPX3FYFeq6NNBeDGntSpA6QTxoNexsRfiVJmfPBtj1YQfdp75ipRsF4T",
  "key12": "rMXjPmS4A1NfWpBCHCd1EvfiFFP7xCaewaWg7ELyVHCYC1ueeYYZoaML5ipQUwduGGpWeVwX78Kq371DbQe9vtV",
  "key13": "2DijS9i2GDv9YxRmJCN7mXDQTqLhjFMbw7JHREaQ5rsj8Yf1qzqd9tpJ7p2FnTiBZxCd1wM5ksgsdbhjncQf5Vk8",
  "key14": "3DoXY8ybfHnk3YQm8P2aUx7JWBnfng196ohwXArQGhrxtbmXmERkYCaRMyAwsJydVhWzvzi1S7WyMkTpmoePgAUf",
  "key15": "2kaE1zpdvEnMPDFYGV7bTB4aDtDWTz18b9JBTNYcnJueERnE4A9TAVn2W8wjhpn5ayxPbbzDXtHuwbanRooNqfWU",
  "key16": "zexMsa2t1kt3eszpxUjD4KtKrMJAZWJUKdVgctYj6wEjWR4L77XY1NKEE1jhaQ3K62QfNDotivtq4X1cWyWgbR8",
  "key17": "2nMnsJ3F7HyyfwXSsNA8PFmBcSuoQBk8huGRZFDzriHqwa3XRdKWhSfo2T6DhZTc8B1uxPECbeeXpcHh6fXyLhYQ",
  "key18": "FXwZsPuQs6sjyBjdA1vnmaaZDszbXZJMmzD43UKaRLjjd6PKdz1oNUhuKXEL7LSR7ckNbhLZdcy6JdEm7gmnSLE",
  "key19": "vWHq9iBj7h8E6RxE2FpxHwx5eD9Jmt9WXy5nedCCQ19CsEvpaY74H5nmDxWHww4URHfEEPDFXq4r5Ue9MmLKLhq",
  "key20": "5UMJpvoTAGJfwqvZKbPN6h28GoB9G4nijRe7o5Y8gpiYTJ5y4vbhBd29vFFXEwnMmBCugv66BTZoF2m7ziKiUjqS",
  "key21": "5YifoPjP8cGELkKWFFJoAAVPoCyNHDVodSiwdA3U4Dkym3aBtAYjks7e7h2bW8wPSFiur93mJoAtXobB6vKxF27J",
  "key22": "3WmCNR39pJ1Sqe2aHcWjdvC7iPoE8ZF4hZFyher3Msvp7uogzBdJ4SjKNVvRC1UjNnv7KTEsv5QpV8kvfttKnvUQ",
  "key23": "JtyrdqrwY6t9PUiVLvGqNeDtVDhzk5m8D9dsZBaxtLnDU41J1jabKLxx13bqmdRthnCDtpFaM7P2wBNAZwJhx8L",
  "key24": "5A7JFeTwBYvNvzNf7t5XQCwTBa6L3poWKzNbUuKpPi6yHbxw4TbHc9h8nmc6eumhRnhSqyfUJsgnuuUiWF2qDbEJ",
  "key25": "2szZbjUHyGPjjn3f4mCkjYYaMkXFfpuTeqoVUtDsTWmRwe27qfSiDuqxmayJ2LQeN9U7JjdbDip3a6Bc5tFJvzpD",
  "key26": "5iCYJsDHNu4eurUBcK5YXvXdR8abc9KmdGoEtHkEQkesWvraKDF2FwjvZkty1emY1ZcfinofPPJGpaa165dwgJQ",
  "key27": "929B4DPgj24eBM12RdJdXNb31khHffD1DNZGdXS8Cr6iij8KNGZmZez6LccSYRaew81oXYYwtrxW5RkUdPKtxmo"
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
