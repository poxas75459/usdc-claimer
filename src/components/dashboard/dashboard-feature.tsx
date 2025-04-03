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
    "4JFdMCdxTU7754GvgDF9W55DkkQ24t7SR2pnini2op1GZcCK39HBFgk5yzVcYr2B3Tmcd8KhpVL2VE4wpk3q4t1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sfPVF92oWyo2dWz8Fqk2kMFV51RMbj3EyWyhjp9LDFpngGS1dYzUgQeS8uxUg3xUKLKPKgyrhbMkkMwpGo83tPP",
  "key1": "4x4t1X2NaTDRzxMkinPBs8kwn4gaMBh3WwWEZddDGN181sAF8ttwr1uSJRxmqzGZS2W3G1fTgD797KNefxecyu3v",
  "key2": "VemVnW6q4JoDgubiGv1BgrFLfvPPcZ7sdLdHZUu1J2r1ctgNztzzQUqZseN4RMWGsAPS48AEo1yPnG2yGicKqig",
  "key3": "22jLFGEbYV3NeTDMBUzfh3EteAga7VFc413gJhTGoHymREcDiET1PSpF9yDfVvzPRdv7frjXejpKzEZ2pzdUnjmN",
  "key4": "2Bw3vHfugwr4pP6JKwUzc8LDZJWSstPtHYxkeebXB3DwoXBviB4muQzmonJCGLGe4VDhW72vCSW8P5K59VtZT8DZ",
  "key5": "67QnTFW3Ffz3631VfPccsFBqPnGAwSbKeAfmwWrKQuWJZaH17PAEg3Tnc8rwk1E8XUnaEXAapcxgoUPXhJge1aEu",
  "key6": "GkhxwLrX6LBXHpXLrvPH5GTGF9ZKVLqPU92kMvhfpTsavsQfiTi38tPJxyEnjbuTKcYJQqxV5RhiDwdjMSKfQPJ",
  "key7": "3LtRNCEywJjZFGyZAKAQye4vggpqur9yoQAkoPHToiSmnSpBPyyjG2Gos9KrMrCFZxTC7pvGi9E5t4KdH117V9nH",
  "key8": "2CZcjcKvFveKuhjQ5c1fg4DnA4W7yxVZMQpCX5Djtv1SVvhxWu8BttXDt5axBTYqTsZpCAFvSZfPBq5vqMJY7JTC",
  "key9": "5YQdfD3SfY8V6MGbZFtJZh6SUAXnmxxTAdrtr3Q2Lme3HKRtMV2THbXANmrKDmT7Tpa19TTjZkuhMk13Ffn6D46w",
  "key10": "2Lxw9YGSgq61zGGc3qKsWArCJ7UYQqsHmQW4Xe8zYPpAeqb2fcQj78K3if8aCrgamJdpaBX27KBkAFYD3uDeV79n",
  "key11": "4SUyBRkzVcscbZx6G6SZFygaE3WHBvzRZCxf4784GoHaZJ39VjgEoh6n5SF4bkxivxVjeks7xshrPdFmzGbdv8Gt",
  "key12": "4p66K2bLuhGc2qWNvP2G3pArewwrDqtdFZ9QAcP4iYWmbBni69V1q6TJRwqMVjdo6m99ypgjsdCGVaZnvAXtGo1H",
  "key13": "A39cMJPdAKGF7NqsXpsgBRxTHXn8p7R6ez7UHAEYfSvJVFruVfUXH3KYjzenYGDRKG9B9NzQJjy2kxZBbpUgqj4",
  "key14": "g6YQa1GK8k2gZngVMhnnVXVgDPRB4EAUMF13yJzDk9BHnjVyGXfMZ7JvcR8hPdh8vq1zpgrZUAN9J9wJWCBTB7o",
  "key15": "J5fAviUiedZQ9eCEDDpiFwRUh89VgdkwPCHNkAnsKReiQh3m49YfnVbDZG5qYzuAufqx81VnY6iMrrNFkHBABiS",
  "key16": "5nfsTMYKDnRrMMhPEG5fDnFEJ39VcE5ppVN25KHjVLrWeNfVQtwmH8aZSH32kNfjAgMLTzujzSXYVpCiMnxMMe6h",
  "key17": "51fn5FoBPycMR3ynyd2SKtHMtm36cfiQXYsWeXN1ntVfXDqGy7zRHFMszbw58qbyF8FqPu8aeDwjWXTn6onkwUdG",
  "key18": "5W1ACLNYvWSLotLaEyobJa3ztRehyZNakRrcuv1dPFxTVhBFZUV8fo7bKfTUkvWiSFsJ4n2vQ5pcexiFWaecGajZ",
  "key19": "5SVAaAVZiFVWfYwojjoiCPibetmHbytTDyonNARM13papxcQVo176cAsgeGmi3PMacXCfdtEK64rkoTKRVCZj2FM",
  "key20": "4fWAoxAZ7Uptq3RvBWGMsXNNnmy1i3X7tkvgyX58KaN4k9M9FbrBBLzC4BTm6n2Ywdbfb7BjJJANKKpWF5nxcJW6",
  "key21": "5Mt52semhRmPQtweBZdi9zDDzDtPvvJbKH1twNH5xvSXqCAGTDdCoHH5pN89hPB7ZksZaZk7LwnoK7ruq1Y5hDCz",
  "key22": "ZdXLcpZysFcPJSGF5dc5aP2mnwVgMim2PBW5x3mMTQoYoW647sDGXzdzVMNScgP7uUJUqfWh5utezo26cn3vH6e",
  "key23": "5Fkafftg4zD4kbC9ydAubaPSid1upsU2rN2kPhfGEC65h7WWyDLyqWv59m9oRrRfuKayPb27HALvLr46HW1GEaUg",
  "key24": "5Ryc1cQhf91dKFYDgVHzSR5mLitqEq9NNHWwY6raQ1jr4zw2iBwHZrZPNnFK8XZ6YgdtVTybvPMhPBBxtTiGhX8S",
  "key25": "MhyD6pjmHnPFwp3PPy8UuQnL4eGJHvwja8Fw8M9J3CvuiRtBwCxhAMnGpfLyqjDjNJjaXa4SqfSvEWy1jPYschE",
  "key26": "63chCKGZTnKLkJx6YGAyhh9ZS3TrhCJXjELs7mHBCMNMEfu2qcougt9L3HrZApr2t4DkGZvKTfqgKhmEGWLb6hV2",
  "key27": "5uCoxUzcGFXEqz4jVMYGLJyoFGhjtZdHPVUXTccqYNY9nkNKbA69gv98GMxhHYxcjv8k9BWWSmQ5uxSsLPH4Ftta",
  "key28": "4w9b8LWSd3C6d2srnrvCU85M7d58atWqoAVkbN5Ywk5Ucqqq9ubWs5cERZJgNrzNv8ZUS5YXofcTx9JCsADXRViS",
  "key29": "4u5w9ECU78rb9NrhJTLxWb9Doam83fnwpxbCWiW9to7WF1potg9EfA1fCkJ7dwdZ72bvQbZSCH9k18gL9Z2BCLi5",
  "key30": "4mzuULKWkJ8GHo4amDhZca2R45dj1M5rTpXrKBkkMFRxV7w1csp9kRHaYpuWt5Q6kpNQLwJUBaFBa9B1fhJvGVRh",
  "key31": "4tagL2FgMxaErAkxQ5e6b6FNZzdvnk6bNfx3vyFNEJr8xpmG1KaNRQTYZPYfEm3Fx6o3P2GAg8wvYx66mi6TXztj",
  "key32": "5VEXFz7YjuiB4CBYi8fkQP6FmNXuEJQuWwvMgj3gnmrqWJPwjsXpyXgQtxGUgXFNgjo1x8duCUcsuZZfAHHvNdsc"
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
