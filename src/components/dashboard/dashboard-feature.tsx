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
    "4a6iCWkdkt5FgyBc8D11e14fXtU93VaPEve7EBQrBSBFZEBXxHeC7KtPgWc44eyPMe36BVLYHD1acGW1Mhj7iiKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48icZeMyX49vdBVYBkMePUY5qbhAjx1DAbQQTkJ4hXLJMZ1kzibtPxLmaNbqxDFcFBXJj8BkP72HvjYBEHVeH88A",
  "key1": "33Y37REbngy5mj3XCkFnmL3YiYdX5ahdY1kKuwTqBtZbbSwyU5zc5eNWokzK9APNqsa6dVU9hCyy4uPWZRoZRW1D",
  "key2": "4DJk3spsPk8jQo3ZAmmPtNxh9h9VEhQd8BBw6YTec2iwnSmjJXY91X1TEjqiMQKhBXVwQPbfkNDyX5CPx2E6TVWv",
  "key3": "2SbLnGxfJqFuVqPRqh5TafRbQjMZCvoqWLqAoxDFNG1a385cMdbzd7DWEiHrmSd9tGWuB9J4YUzaKUGqH7y8eW4Z",
  "key4": "DHmE3KVDgBeZSPwa5fU9wbczryDnLunEHWzFTPZBEn4E4oo6EGrRe4N3cRTQMqfnNDZLo7D372B49kSCDJBodU4",
  "key5": "3XJPNqiXvnVzue4hGUyrjBaD5qjRdbSkbQnZ3aVUvZHn2NxMSNYC9JTVpMLLAUUy2c5FLbvhuvDqsmePvCtz982p",
  "key6": "5AcVbVnnaEAek2dApWgRaYejhtZZf6fhGMcGjRYaxDxJLFv5eqt8bo9dxmzTtTeSwHUscrZ6kLrzDFHqYgexftzE",
  "key7": "4vkLy2a9ewqAQmUKWJNh7jyhtQPSVgXLg7ne8KT3BFkDs2kst67rvdj2xAFgL1rZUrroN4szNwfvGy3rcK5zqLZo",
  "key8": "Hg5nE27zLRe8S3Z7gtZGdx95d7CuFdxVAG6NLB9h5MwE352TcGa4KP3HNDLNeBjYZKdN3EJWuw8VAGiQDtoCqHw",
  "key9": "2zqUAzeWvASidXmS14rUfJeZZ43mT5WEmxd1KX9UB823vWwX4wxiASuS9BYFxX6NWMXhJTWfw1awXT1wdXjuDfsa",
  "key10": "3pNiRpX9X9KYK7mkG93WCVRpyVqXqdFHzhsLCgmKU6V3DTK3cgEBFQLDSFeJBm1yEWpyj5GPKXX3WDQcJZGscktJ",
  "key11": "4kRu8ia8rALtnoVKZfrsFmke2a3s3xma1JEoGQ1dzg7HFcSKDoUZboqFY6ckXaztUBAgKw2hRzhiDmm2FzTfJaSf",
  "key12": "2xEdaYeKBSWqDnHQ9uKjr4eyrMRB5K4UfuGK1ZEmAirK2e3mGAuzXPievPqck69Vmv25v4yMRUNKNaV9FZKbSRRt",
  "key13": "4Scau3hmz7neFH1uGASi8HCDCEE1fzeSmTNFtXei4FBKnuVSntgBUvQVmHJNRkCqMiVSXoLzfD9hJHMtfFG8v8EB",
  "key14": "56YUmXGbV6GLXaLkhxA4sZpju4ek2aUjfS8yDsCpAg8h1DmCxBbCFiWbXgP7s9UqsURtzGp4iMzW2ugoFLQVJfC1",
  "key15": "2fykxM8UEorDMavtdVXBwcrXyAKvEj6FsEjXeodw86rXS7oiALokL9CMh2aGF9a37BiwvW9QPnJ4NRap6TpyZi97",
  "key16": "4i2cwx2qBdwdgchNdPWtLRKs5TX5wnV5AgqKgaEM6NtPqQgVGNUeNSR3QTfgA3hFgAauapZWc8rWsnHE3RLTGhdg",
  "key17": "4muQwL6mXhDxYQ6tN7AsJcrm3UNyFaAvy1zQpkAv1dEikXAXGsuPVKfMN92qaVfmNMshpVMTZ3gTyWaoc9RqoCSE",
  "key18": "53ikAtHYeNtigtVopk8PLRh42zHpXday4HCTVAK4jtXqB3yUfLBmzDuGgctnjZd7uVXRoDoFe5ZgqM9vMF6eqB5w",
  "key19": "4XJME5PCzvdnhNjWzT8dVZ2qnJXS3Abj1vW1hMwfNaBusCFNbwgGHxFo5yqHmjPy23rRjKVxkmJBdYHmgvoBawCa",
  "key20": "5ZbU5Yfnt9yGUd6Pbi3DTYvxFHf4aHCETdbbEYhRXhR1SJHt4phmWbTvsXHter5G48zsEK5DCRJt4LhbbcmfqXY9",
  "key21": "3neQdQR2AW291kaLyg9QoeeEcnRJLBaFpq4RUFsAQ43iJNndgb3FKLdNqmv3gtrD3ZXWYS67qV2YwTrsddLmTbuS",
  "key22": "4aQXaQ9AMHTMu3Zqrqcw1Je6Cx5YxfN4qSm3t3Zzu8RYnsv3sNr7BKcYbAB8RucRh2NPDz4hJ4HZyeHidw8C5yTf",
  "key23": "Ev4iXtFnPEn1igHeL4AkFjctEGPMX3oi8ykVRGCTYjhxFJ4RvBPDCJiA3kxFZNSpCCSiMn47oZDW8UnpNJjTFeg",
  "key24": "2HfuRZGEhU3wRf4Yu6GjScr8wTHZQdBZdAsZ22RJaBExTf91k1vpMCeSyB3z9T9AnecAGPv4HiU8Y6qHzUmkBLjy",
  "key25": "65jr94273y5F73TRxYd37WunxQ2shWaJYXbtxCj6gAfoSQzE1eYFomJ9PmseRE67ijqzBY21jGdu3oKuXVSY1WzH",
  "key26": "3ASW8gmf3kc2NUUPh8MB7bNPC28VZiLk3gbTanjGDcivtLP2ZVogS7CLauPzzdccou4XSLeTAKgjGwUmhRypA9Mo",
  "key27": "5Vn4TUZcKiXB4NKfhEJRHB6EFqXrBZbV7Du57uBy1khQk5PWc7UggJAcTQL1TB27rqAesVDXw56AtSxQiT1cq1U6",
  "key28": "3f4pgVoKdxQMPweZKnkkHrQJ9NrZ8hWqgcViUy5v7aXM3Zfi8wo2AZr3Py8UVHz56X3dcwfrCP2XUFJrVHcdsysW",
  "key29": "5nJdiuTTLLwaTmh99nrUdp21ZCvujn1pCk3uM9UqRwkUyK2mbJAH2CQhv2WriW9Kht67b1FGBsaGugjxNUq3hxNR",
  "key30": "5wvFHTntV1cUJLT8JtcywYF7UejzFREw8s7rvx1GzqNnjKrJSA16ZyFhhQGnAgC3UKekUXck3bx9fYGsPi1ZcytJ",
  "key31": "21pPo3gRfT4mX6pvivJX6RQX3zZP3vN6WG2DMknc9RDdtQ133ECdBEBNH2ufi2J6GtL2A315UGGXKeHF3SQfAutv",
  "key32": "5YbqfSzYPhAMKMuUr4rBXeqZT3fkpYYLLtQF6qbayP1ZWeaeAL7KNqmnUepditY3WapxNpdjwavDfFMq15vzXAXf",
  "key33": "5tqs5JbN7qwCdS6uLZU9PES4Wgo7JCgWC5NymRwCU3GB6AcqRGHWJx5Ds3ppE8X48CrgKJjVHUF3QUuksJ3gVf1t"
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
