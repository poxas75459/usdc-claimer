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
    "AJ2jpvSqxpijfgkhrGekgr1CmEmXaiguJ1dBNdzSbszJGULhzjHm9XRzx5U6cCKQzr5gbCzEQkrXtP2Zunnfg2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vy7APfukUoKbQQGq3Pah2QzA8sixjAmRPxuVNTnorqETcihaMps2rYJCGX11AMeC9QTrrGZCJgNFnBdNr6RhQPs",
  "key1": "5ydgmzLrTNBuSkQhUYy3WHEttvKEM4a6QQ9y47QUw2Nx8iciL6YR7F56yzJsozngr7H9Gjujge91uJNc71TUQsmp",
  "key2": "3j7NytbdtL8BzX87pxq2GvAhksFDZG6TttReTLk6EcEcK9UVLcpb6n5pYTat2zZo8ZY1ngBfTdWgyVYYyqnWUXHH",
  "key3": "4ndveazfYRKbX2tmeW5cQKqVT9W8DPad6GaqWZrR2N5uRKnPfpmV7x3spCLtXu4vtZEefa1EQbXSyJQXB1bwJM2n",
  "key4": "2WugdYnpGGydbqMBkWVqnQtazRTyojskruXU8FY5RwN5dxw8bEJFXNyMq9Vm4CHQpGH93F8BTgzo8Q5jYTmfnqr3",
  "key5": "5AY1uurDPCBZiabiEJhXE6affUH3yjMxki92RFKwn8jpx7RHEYM9Ryz6rk6YsHLL4RL3vJsJWjmWXS4cPWMou7Ce",
  "key6": "5xeALV948g7EzZYUXmmr3SpVqMnDp4Dr5tGCMcBR6Fsw8catKYrfNxtMdGgHHKarDdmAEAdkDMMm8nyA4R2g6Vff",
  "key7": "3M6zGRbASVdMthSaZeDRNWs7G7CfATGw1RZZ3s48zqv7VbzFdnNPwVHJkrfKcHaBWFzwFLQuQrm1sapjz1P3HoyC",
  "key8": "3es5bjsEdJCPkssNSq7qB3pzBmRy4Vo2Q6DkrYXret9poLbCF4A1MQJURu8nYQgJbQmPXyCpdqR2YDFNvNbzv3PH",
  "key9": "55EzL5P17bYxC7N8BVXRNb12YoVo4586wMJTNwH7MZRtM8KSN79aPyi1vytQE6YZEZycat6Wy8mK8oWnb7ns6gbD",
  "key10": "2JjeTavYWAdmrQCguXzbqq1S57Zde9Qhaieenzv6HK6ieUng7q6gkLaXb8L6m1gkdtV9J1qsNXpyWYPJkkoX5cBL",
  "key11": "4iTXfyYpjo1h2HqvWxm8DdQUUz9re8EYRnzGUHTk9K6KZZi3xS5XRuB9RvHYkbn2SZnVSF6PxDwkNNTHWCtQM5xQ",
  "key12": "3Pi7SaraTB9E2Da1Ebd2oqod92FGnRNuTBZMoQbrhymLHRgfgfCLj4sa4JP97m1Hv8Wu9ijGLmY9CPvJYJcWmcQe",
  "key13": "2GT9wvFbv7aZUZ9xnu8SdWh3NZgb8kHgjm3vYiGVg19s6HgWobq81FAFskrqtvRdRYgcaov2pQVa4p97k4iNnjmi",
  "key14": "3bG2L7LR88EBKapw4vmaGJ8Prg6j6oZuPiT7WFzZFEzHaoFc4zVznhHyoSV39Zp5u7qhCB95N7oL2ZVrxqofLUWY",
  "key15": "2YZMYGMBeKktVRh3Q1D5GLa58VFsFo66ULE4Q8N39f2V7qUgGgeYTsURej4J74MXgHtms4kfyVESwn9Xk2Qy7hsb",
  "key16": "4jHPdg6ELBw3ysf1YbDnGKnmhsV9g1uFyMkkxJZsFvKfYcDhJiVH8oYSQiPrsDASAEzt1bErAdZBXhw42dRYN9uv",
  "key17": "5eEi9qtnq6m6YLn7yZY1vrwC4dVmxDA13bsH4kZ2T9VZ2L86ergmMfygozH1sBd1DvtWsnmTZA1vSWMCvurSG8m9",
  "key18": "3XhieDCnrXRoY8c2nVRTDif4fvCWj6y7qiJuDwxhkYj7dtBCVfjgzYFbgS1BkhhnMn6oEYDeKz9q6VSLMbN7iKjt",
  "key19": "32vvstCKbR7p26q1ihy4gegWpbFEurBEYKVPqatZZhQPYzLvLC6u5xCMB4A1CT3V9BVyAfxvxK5pc5CPpFhbFjaz",
  "key20": "3FDh3NgxUKpaX1aiKkiEuJ3E7ba78o76Zg2oLTyUJgN2Fa2y6bUG3kJW96gxeisKAU2kqzSvVnD3PkEAbzgxkPoE",
  "key21": "4K6cvwNp9ai61axUYnedJSTncFTiYSi3vSV9pvsgpgJh2fC8WUNAo8xFBaUGVau8KJNXxiMx7WGwnYd38BfC18SL",
  "key22": "2mAgGJPsdFgrjZobcVNvoZoaiYMoy3ZngfDPDUi8ZrrXTJ9FF41EhGLShnSFwhiks5BPgqVG5GKypuzwS252J7MN",
  "key23": "3Zv2v1ysPhkpfN4G8zRpaSd3CNppaiUt8asGDp8cvjLF3SiM48yCP2RK3NbP7829epxT8Y1gBrGaHddTJnUQyULS",
  "key24": "2QWzZS5Qy8YmipwxQcwSFiuovoJ9ip7JjpvG3FHqqYtsPKyZeTDUq9miFGJG7T8s3cbHRUE1vDB5DgeuSjbfvn4G",
  "key25": "3NHxAHb7rrc3sGQ5j6ENPg29LgdyMHTRDDQSudYsFNkWY76xpRkhSzQGb9GXfXohgMixtsKBW9qWiccdzSWuLsfF",
  "key26": "2Km65WJerkNTejKc6NtAKaJbv2hvZNnWtmLd2e9mLtrZzgVjEuhbsV2sL6EsAk8qm3D3rtnfaZGZHxFknWZnidGR",
  "key27": "64atE1ypYQgyVEuTHPbL9tiZWqPDqexxg6YMkVoLovS3ddKatxDATGCyBMG3VfzUDkVSpuuTX31i7ctRKXLvUSAu",
  "key28": "2v1D4NZ7bdGdkGjUcfBJTFhL5Uuw6xBWumGcNSC4AeZXpLKtSobJBkZstT2iwWKWMBGMZaepQL2ZK3ozMCyoFTmp",
  "key29": "4aLoiAdhpk4hqCjsbEKWFRnZByE73K29tNb6nbFRGeuZpTLcECEv6KBWnimD2MRznm2qDVbCD7cn9Zoux7B83Qbn",
  "key30": "3WiMjV8zp4bT8XR48PUf99vKDZfk7Ciprvo5BC9rQXoKNk9CBMZae1p4Rm3LE8pPHhRGRoF66Zc1bnkycsrD1HQA",
  "key31": "TvQ7YT9gAR2KEMb4D4J2e42SGNriTyCx8QMKAPYvAKwv7rkeXQ4GR4NQoyvUYBKLVyo51ig7PhRMJGohdVhUHHY",
  "key32": "Y76B8nPw9KLr2nPVAk18NgchkZ9RdfPcroun6ez8YfUkPZaAkhxLguwCk9MkM5sn4ZFDwU4vUWGLRHLofP8Tyfv",
  "key33": "4i97y3pybz73dqquo25Ssj2GhmipyfGt2gam1iuagPWRDgDrH7AvEXeJVDnFkB3veEAD9syQq2AXBGDRYN24MYBg"
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
