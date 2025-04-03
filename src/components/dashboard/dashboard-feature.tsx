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
    "QP6vdRSr9aLmmNiYNgdwbctP5Q3rsr6FMQZkNtr85tkSmqtGSNdy1ABurzbeoTCsA84uhAdvEQxEqCtHCm87sGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61sQFotqK9GhKD1EFWzvSkSvWj4W6PdJm6Z6CEx44FPaWDmNsVjGMmpwL3wmdw5B3tC9ArExpiutKjD7sCG7pBto",
  "key1": "3SJsSAEyzvixsrZVW265TAD9ca6ehg9HwDCsTfXnoaJcD4hs4BxaSEU5vKCzz8zgaq63tgXzaVL645eHeHxo4Upr",
  "key2": "22o9FpAGxuSwiLBYwvwpFQYKdhxtS4B8yi8PrZ6yz2iccWBJAYrpEpYNWG17WPdKcYRwUApgZPKcSJuw7S27Mvt4",
  "key3": "nex1QkmKDoZTnPdB9VnJdVEYFc9VsWh8DsnmGdtATrNeuJ3Ak4eR5tVf3Ur2DfeNv3pn7Yo7BceGBBsRVPpTdAb",
  "key4": "3rjgWYrnDBfJpd5U4rAhm4VEcqtCQpGqpjAcgcYe6noZP2FcAAmjPUvhZeJpY6pNb43eeZqsSJxjrsc4m5v86wh9",
  "key5": "64cNmJ6qGwbeou5z4onkn8vYmFKxbJZxznaV4De65GGFSb4eohMQBm55SKW7RcJmDyF3MzPUBkxLw8ijaaus7ySB",
  "key6": "hob79s32Co6jPHXTpXxJL8f7dKKL8ua4iJWDU7TFWsjBBkQa4e6XDnEfPV324s2mwWATWHswsPNzrLwnovEJ9jS",
  "key7": "5LRgwpWLyq2j6Q5yzkE2YjZEkwHPD1oxoA4pN7KsYQCcoXAnt5KgvaJe49QYooa74ygMj3W8s3yrwVv5Y338j23V",
  "key8": "sNtmXQnGUwuhsuRbX9gqAGSKHUeAyXqrTJ1vxuaRH2rgnaUHxvaUVFDj1LGo3BAbycL7n7zFXaER8iw5FsDXUJC",
  "key9": "2eqVT3mnwDZahphCwZ598o8ZfokfvHiedTzSKETgBhX3Z9cz1UStifKNjM9jBm3YiinQopNNEPPF25x8UDfE5VLJ",
  "key10": "2kGkYQFUYz1u415hwSw2L51kDTULrgvbsz63s2WUfhX3two4bdE47nDYUFADwT6nw9CBh2vjVi7PT551jd4K6GUJ",
  "key11": "5QvZeHqx9QSoc87nSDSqZ7gTJVCdXWz3nr6btndBrf3dWpW2rdx3kjbCLBrMqwchrrcQc9EhVyE2GXx4reHfcqBG",
  "key12": "2FpUFeFiGM2RfvvNEn17Lc5KRJmScsbuexftvfT3HBeW5X4i1qrqFxVbX69m41PF7TFzysfshYE2T9hcfugFMowj",
  "key13": "5ZWJ3aCx1Sg8hATXpx91HSoW8kNycvKPqw2XnrRfs52EcTxggxSVRXd5Q1mFjCDEAiNmMyzMiPPA5dRC54nKa8ee",
  "key14": "yXbaCPGHhm6PA7RzVEHCqSQhMcWrx6RBtddfd2Mqgw6EyWFxcvTpnJVdR9NV2fnXGuFgHL1NCZbj73x4kxAhLRV",
  "key15": "GRAd57dpWaM9dZP2pnUvATsk6MKb1Zgj6kBz5H4HLvSy1ZC9mbEHLULjyq6JqHBpw9HfmzcJMRasjzs5dVRh3ik",
  "key16": "64mBWnG7yNLbK26rvjK3LFbav46pgfYDomiRoaD1Zx2rrMrcFuz8GNMLoMXLkzaorBPT1DpiAYCqyr2mub6uEjUi",
  "key17": "3jMoztaFj9iDtKtV6HyArVTLeCZg9YGRSMxHFBwCSLqpQd7HE1HfpNSsU8Gm8k44YcNZYVKYGHnKf8GZUsnzHYuy",
  "key18": "4nirrg6EpMipT5E2bGoc6hWwGiXfGhu8St7PkuLgM9tzVxpVZVxMiFFJ87krtZZLAEMVC3tj77d89yDVACpuaLV5",
  "key19": "3KbQDaxATcavSa7XZeTPBisb1i7R1AVc6mPYgqqkjtLj2SybS8EYJvj8CFBDqWaMXKWx6fm5tWbqycT9vVQn11Qm",
  "key20": "2pQUD3FwLzknKUFQecefdFWhLiAs7V1e269Fsz7XdpuUnQ78qnjepxjzuHVqNZf4qhk8crFxdfmBhTXWbNeZBWsA",
  "key21": "4c9C4bEA3Yfky5tq3G1VqAr5UhxmzeJuWbz7WfYStDVJEPiqD2JvzN8vDUn8uR61CyhxdBTf2HFj67tnNGw58jFY",
  "key22": "519qvwusz2fLe6ANmZZbBMDNE879EXh5sjqspxSYboXWfYR2judGQLBBDJrQJRb4gx3cfW8BG2AkNdmm5Kg7Boo1",
  "key23": "2sbqhSyjJXrSTwVcXrH3CNmxK9eTe5M36Hwn7CNryzkcJ4HEtmoCcmEjf72TpJMyr43g38sPgRwzkNvSpsXT3r1Z",
  "key24": "EYFRKrrudRd7aTYetUTEwKVQARTkYjsYGGGg7TJGhzE67Kh7N9rMJGvw5RePGritwY1X5pz6TtfncmvCJWUGomL",
  "key25": "42SqmwXMQup2xQk8XT92oeCDYwefnKcauXFxy6ngqpiugZmgbqcVjn83wXTnFMvuhCYih7NZf1fnhrPQ7JK4BGKA",
  "key26": "3JQKVkuxKqQpKfEXUrwxdhxW7UrS2RaR4LZS8SJ4MYXKuafprjromYx2Ujqwqm7UkyHTKsqfLpEAL2KZkobjk32g",
  "key27": "2HZ8GnpqJVUuHQabEUGxJmRLUawcjrSxotM5hrc3euWqR32S4JgAraJ2gDvFLf669WTv3V3njT4hqPCnyJd31TZm",
  "key28": "2emZ2bXRCZJUgE4U1SPJHpvn2wkqnuCwqcWZBWksBnnwAaGaXVotyKgs7kpS4pQj52S4pzFGJGHbi8dZ7YnFb9F5",
  "key29": "3r2Nu6zV5LZ9pHgyxvB56gA1Npte1BAxuyqX7Q7QAq6xC1WJ1hgb6KrvmTrrLTAvqfqRdv3xhHpuFQGBkfbzFm8K",
  "key30": "255M9wXKrwA45VJb5BsieQaMKUtu199hNDb1vEuA1CswmVH4A8ApgXArW7n6r1oT9h1dhDWqBmVofEiAjhG8BBwt",
  "key31": "3tkLK8MZPQh2vimUiApyTTeg3e9MppxEZq7Avo6gBKjNqTHbJqTpVecQktNaeEGyDEf4Dd3VpBrCsou2a7KbwHAB",
  "key32": "4P7NgyopeBibK3yqvnWf6mJ9QNd2vQxVm3j6EeEY7J9uneHUnn9fUWcDoHf3mRiYkncGAV4pgvwdrHXRA7KfoHS3",
  "key33": "36trGrBSRbGF11dWa5hRtKbDwZcVUF7BY5sgmvqTaFTTp5vsitrpiDz3yKziU5mHHpN93Nx1WwkZmV2RMSrc7Dnk",
  "key34": "dF288KUVo7AG5LDMToJycFgApDL6D2TuD68v1kM6ZSNT4PA5RSqcfTrH8zkAPk3ab8dMzt6gtUFC5nE1Ph76v9i",
  "key35": "3uT4RDGqZBiQKBS1yeg7bSkJ5c2ZXTzirZVihFEayW67FuyfFC5MLGf9k5H3W1D85rxnarhtbnCx2b1iaUm9nTgg"
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
