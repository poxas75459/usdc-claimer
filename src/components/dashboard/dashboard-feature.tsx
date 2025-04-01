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
    "2cXQGXMFpTpWjsNSwN3TfhucfAeEQQi3oGZdq4cN7dSRagdzcBQ1AhapTdiVXDKnFkqAEfEFbeMkcunqsvm7kKgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fYWDMR61x6ZStcSgn6szMgYHTXLR6qEXz3Gdpqpgr2GW41yxVo613egoLsDAiDg7VdFzJXK9nhT8XYfUyCE5UAX",
  "key1": "5YhwetCCtmqYW63DqsRzQ6ux9NbMG11xU8GSFvVZkLnkwnYPcuSa8sWgVEWwRkGUXRoZsxpqNkQDfs1vmAPwWaZ5",
  "key2": "Qj8dhKXSxRP7qT2gcZ5c6ch36RHY9REyv5rChNcVcfumXyBhuTezRmCvDdRNEwhpx2M8jy2y2sX7zyJX8rFSAAQ",
  "key3": "z65H5VAd1NeHb3pk2pG1g7BQPT2gqd1M79EBETwtcBTycLHJbszz7huRAYwW3p2FMMSTuDM5b117QZPhdxF9Nth",
  "key4": "3DdixkNMJVosD6jpWxEzJXgSaFR4kYSaeoLwrZm3VeB9hArRT7mo1kozbU23MyyLHzXB7cTnRxnXCazuXWYWa8YA",
  "key5": "4CmSkaZMwoXMEbiQw3VrefY1745Kh8U7q4oejEeyP4GYKFM2Sx3uWLxpxFQWacmrJvzsFcFydKqU8bsEBucpkrE7",
  "key6": "5nDqv8e8vmyoDZnYoHbhZPA99sHZa6LzZkNc68N3KRw9ccrqoFgBLnpWEEWBxBhSM2Ns1JDc8qhBjDpuTHYQBWgF",
  "key7": "qNkvBMMAWxJToUsRL2foYWLDSfye8EQNn3dtNJaa5xvGzPrfhcfck9oYkydGH9TCgw2LipHSHmkyJukEcAQuG7t",
  "key8": "4FQiQ3TUQnPjgu6hG1TdNbq1YCT1tYfLmfWjxqjmcFrMWMfUUmB7rkgwvea8CQqnCGu3TshWpEP9JsjpwMeqHWZ",
  "key9": "3syuB9BGWARTKtfp2xnFpxze59tucCGqdTL7BFPmwyM6DGnf5S6Xe12TLhctGCCqvaoReqNiMFU3ZNP7Uo9zascA",
  "key10": "4J2tqxvKfEoXqiBGADqah3y9EjnJ2unCxkdJQgHzoWN4yV3GEmZAfjN4gNCk6YnMahjZggM8jyzpzh4o4pLU5U9T",
  "key11": "jvAoA7k5k8Wo62GyoqX9w38pP3P2EANyxMDAc934aZDbWVAdqvAV2XwcEZaxwbD7GCx4QNpKP7mAQuicyqypbPw",
  "key12": "1fwx3BzDvnuriCCsZWUfY2jgQsKHz5YGZCHRB29zxvfkTgue1rMaDd3TTv1uExkZuaZgVNou54MHassDyvVycZ6",
  "key13": "4Wtzqy1SWBYzHEgfod67eY8qgx1HKTcYc9XfRugtRNzNHDftTqXkWQeLnMYhwaThYXjm8JsZHb7sCYMVg6E3LVAf",
  "key14": "4P8suret55g8WuDHE8Sb9V43umrzASwYNjbQfCeqhnyN4WyAZEk9ag6PuL8UHu51eG4QEeSozyMT3zV92w9dt92Z",
  "key15": "yXAqkyftG7LPWceVvmzmgxvToMfxBnu5PU52GHKkEx7MCLXy9ziCUAbNbtqrGtqwRUQSusZcBUJZwvwacrYGssz",
  "key16": "2rP6kiBZrCdryaFxJSYwXBZpY8o5Ni38DjVkqvbRD8WvrsdysxP5XbLwxBM2ebHZ6pMp4AdnPc2X89dYyrTK3AkL",
  "key17": "5FmYGeM4EGE6EWF2uTRgZFRBrKFC8EPxhpo45kRaGeh26pAscidoJnrrWACYZQzW2QMEL49UySe2FGtW6sV3dvRy",
  "key18": "5oNgiX2YnV1txRwHVMjfWNfZ3414xRMkVuAhbW8nWL9Nw38PMNiPoEAiiDmRNdTpzHpiTFxw5mLiFa3wz2gYGgRi",
  "key19": "3LSNxdaXzWntsc7776ZHcejqLoJ4uNaSmxDXL2QZcd2rDf8tNSJbNjs8HP66mBniYeMHAzhcKbdQcVdFS21Esdfk",
  "key20": "5nkHQdAXK2x8jkAjq1pHienyAwfg5Kbem17ntyGRESEsqSqB5ZCpZcmRfXxAKrz3JHdtTC3BuYoxr4daH5XwcecK",
  "key21": "4ntt76Hc5QvtQ4ZMVopdbzEswoBZPkpbgLjzyFbnaFBVUTJmH5E5abGRiMMo2F3VtMoh2N6GPen4CDwkHk1GT7zm",
  "key22": "4rmsQoKi79xZ176Qdzd6AKisTmdLhG3hmvtJdDdtGqQV7129oN5qvmyzzZs7c9N2F5L9aLYbFmYhD4ySUKCXmSPY",
  "key23": "4AL64vG7EWFp5hepGmfzusBjxjrvxavmiKoj7D6y2BoneXavQSkFPpe9roLKzCRpWJtorLdaH8wmhwod4pC3ZaNb",
  "key24": "2qNqR8TevFWzhnATp28UKu5MB93ZbiXoCU4QVua7VekdCutNYFJW699Hxvzs7DvzcsSVxRLbSGK2uBQTKWHUvWUw",
  "key25": "3AjJWS2rXkCC6SKk4hNnoYdvyCL5jAYNsSECWKdAc6eH82zstEvsRZmWMLcU9SHNgnHD6Eh9iKFwzb6DqgHNcXJo",
  "key26": "2SFQ4Zdg9Uhe8uU1m5NMWsKWjtWv63hGn2xb4wfKFZqw9G6dbMnEJqt7sBavjJYehpGDsxrpcNXgrGMdreMBSBcX",
  "key27": "LCTiYTrdjC2XS2KojuiTAs8kwTPRZ4K2iucQ37TC5uwfK6e4j8gGXbpScETFN46JdrRohtWrSvB9FeDGQ5N7rPA",
  "key28": "3jdDm1VM72Tqcd9yeMgi3XZNcxxfiVJzvkxtYwzN1ojfHz9TYq98sARyehdc21ipUmoiy3KvbcXSbgsFKZFWeU3t",
  "key29": "5v23hMJ2FqY5LZdvRQcGcYLNeKfqzuSyQJrTSyrQnknpgtSrcQ6keToz1249BqjaFJAayXWAADMjDLtdfSXYGyGE",
  "key30": "2huf9Btw7sNWzvdC1ZHTHVeNo6TcMwxMymuNKUrJNaUjN3gLay5tYDtGgYTjcLaqKq63AtKoBtmK1acUNFEfuUfN",
  "key31": "3c2jGJwBYtwamW3yhKq9gFWkGbvLDALwEWNptjMJcWN5Ec7G7D5siMtWyUEfCdZV7m6rBBX9g8s2e4erMa6Bi3SZ",
  "key32": "2GQ8hD1KKt87oXRhtFTn8b289xoRhzAkHtE9pETHDWqD6hZRr8KoJ8pueqZ9bLD94ZqYBVTKQ6Y71cnmfwN5xSw1",
  "key33": "qpT4ho38pkLKnY1xidk8atBLgjye3TyQg7LYZ3hYochEKgbaVJPmDBfreAetMzxzKGwvzZprVbDwv7aWfFW8Y59",
  "key34": "3NJhbEbWfTxEYVbWgNMnGKCPpy1ZfVdUeJF9VRwc3WBTMNw6Eyu1AoVqWpUHQQ9xmvBvU13PeAbXWPTxJssX8YGG",
  "key35": "5w3f1LWmvG3t9ELVUpit3ErHyFvJ76jtPQGy14ALBdPoY2wixYMeh2K2eqkM2BkbR4hbsrXAoecK6Rmd2eN379AK",
  "key36": "5ayQJ7PGhyfkL4VN31ps5X3PuxtgiTpXx8Kmz17VxVH2YirXaTc19cgBXDtexuQgzNdxvhfeH5dnEi2i8kfcjCt5",
  "key37": "5vmitUSNsj79e6pBwhVBRa8HTn9EPgv4hSiqKSx57i3ScAWgkmTx2Pyb6SFfEwi2YBoL9U1D9uWMz4NMBdjjqVTE",
  "key38": "dXLTHm5N9rZRTDoh5qLUsPWrhgDrA4d9d4fsRMK6HL5H3pDywsD7pMwxQvbbdSV2prGGhn1nPPoX5S2u1db9xaW",
  "key39": "4pML1vDSQyg5qb1hcq543zARa8YeAqLGDFyiq9xJakXmNCbte1kmXNP1hsu2YAhKLjd8Z4nbhHdff2AsCwG7pAmh",
  "key40": "4GyxZUMgpJzLTgAPzpD4mux1RAQov24XAcEfBnhLMD3Vds6jhnYXBgS5cBzAdmAY5uoKQXMEZNv4NaxUvptNTuJu",
  "key41": "46GxBbKmZe9Mp4VQsTD4xkWqxigti858zhS6TKFHVCDbpjuSnbZCCFe367NW2pWEJEHJ94B96EiBjK6bnE7efkRR",
  "key42": "ukS6pyt5gvnUzwArzMwnKSuFGgWGM7kbHSbYa8Yg9MS8m5r5vpenWbWQLVVZfWP9RrqzgSEn2pAtLoxQawfq2sX",
  "key43": "4dX2FoHFQDAzjsgeePhhSCGNbfgSWr9GodjvzqUdZywgP5K9RCoJfqbWoG3sRQDTkAJNZoyZAyeNot7NtXSskb2w",
  "key44": "5jLupd59yPKMBwwf9MmVGvzSzbmDVv5hrQW5owMwBYy7VeCEUZZFQYU2FT6swZ5tA4LHSWzGEPv9a8fKpE4cBdFd",
  "key45": "5iJAS815wmiULXSP2u5vZvkPAcYvXhEjnjSXHxMeRfMwDdufHb3t8uC5W2ZVy1ANbnxXTqvW5QhqTPj261aFvf8v"
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
