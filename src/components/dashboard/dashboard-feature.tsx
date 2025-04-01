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
    "3hGtqoLswxTvmq3bFf5Wmy1xheu7i1Lhcz3DLgXbZAJRBQh11Evibjk4Ue2TQLPuybxjbhUvpSJ7m5LFgHQguQEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cjeu3nPLDacyBdZ1AZisLN489pJrZp1UuypQj9NLrHsTpdwpWXD9kAgR4Lv86XdNcP9DSjwVvTh8hzax4CKxuzi",
  "key1": "5wBmm7cSbsnUbk5fq1oZqjr3wzm4WTjGTLWBwDxz33PfXuhg1CfpKzrrxJ7rU3vUNcccMpKeHRncvQBQra4R8APr",
  "key2": "4fpwfwys1mjfvqhhRwJgSHTf9mfJ9SBVHesndYjm2VbhnNkwJq6LyiAzodvX9DDwiwM7Y29YQbffjrvwcjHr6S85",
  "key3": "2nBvfSJmPBkpkXevwMMwJHG7GcNBEqqwxYzm7D7c8t7YCHr9x3jFoytWLQa6NMij5pVGkYw5CaWnm1eniv7M5Rqe",
  "key4": "28oQG9isFDQ3KNXj9f81E1vP7u7tWztMyaLUNgo5SrcZefzHVo4ufgzv9Vwch1AenkE6vzMNdyGMs7i4beQAD7ip",
  "key5": "8bcuVHC4F3XzWndQouWbqotjzZDwHHUqPyMUcL73UAhBpy79NoZ4H5Lw7jgpmUm8okdtmCrxDBo9BhTmVWq3NZh",
  "key6": "4eM9vQYGCDCSHdLxAW2FnpeKdupKfbxddU46X7fVb3JSiD1zKxAAuWfcjRD3tekYQdigudY59EPkfTXfMRwzhTqw",
  "key7": "4SV6MeRkmY1Ns2t4UQC9VDkj5tzboXc74pX8BwC4JA6EvCx1THfkigWkwifBhmyw8onvGz4A3En2cajoqN4hEjug",
  "key8": "2TvSngq7yvZms7ZJwBSHW4EC7v6nEHMtjmEvaCQcAAUfRteZZ4E5HraetHG3mLf8jAFWYjKVEpuv6H3GgbS7DLwG",
  "key9": "2RN1sC8uhEn9gYpMB2f8upByuTFzUybsexEoUdEkoTzT4M21DE8bfQtrE75uFbGNfVuZdv3ZRf9uf2Q827GwjmJj",
  "key10": "3JuZNZjdUyhVRJcVaLhhppoYZfH6dUwSdWipgXhmtP5yKj1GAdfPFVQKAjwq8WnUYsr4kKhnD8D9Nrs4ejyptCxe",
  "key11": "3aTer3sEKR86F1oZiHBMVQZ4fGSH16WXnX78hDMcrwpvDLgXkUnbiemShcqXpc5JKr5wXMXjwpfe4SAiKQzK1GY9",
  "key12": "4QA8ERKDLUqwgXGAuyi1bxf8A3zyWvsWHySSqvsTgAncEZwyepwLySVtFMNw1xk2dPUK2XiCsUBhnYfiMRLXVav1",
  "key13": "4FwpjWHYpZoKxMDgSEeo4yyBTi2EfKf89ivZUNM59X1ZRbq6d1M4d3BA31exD7J8y8WUinS9UHc839oPZpWpqs2D",
  "key14": "jUdcqsDMEUWRQcfEvDjsorETEWiYJBC5tdMNtpLL7mpVAGjddBB8JveuLKfiRMTjWk1UuoNaaqxb2GvJgAc3Ytt",
  "key15": "5x4tuQaR6cFHKRsCuc1CmgiPjqs4p7mRoqYc8JdUcMJbDXrQhu8R825sjzTP6u6DXnMResNqaogX2KudJEEqTFAo",
  "key16": "YqC73v2FDEq8U6CyznK5ydE8stciSYC1CeYhRguZHPU85myy916jP4CYuNY1gxHuUdfKi1mgyR5XXvjHJrRcYmi",
  "key17": "34vSZnnBBZUBDcS5dtiJczsenUuQEcC1oQK4Yqfq1cj7GV1pVVNmkzUXEwFp8dYkjedNpT93ucVc8ZtbXNnNez6F",
  "key18": "4kAgBsJA6gJirfDDhPSRLiJdfNVXSKSePdgk9BpErZ64zT1K5WxGVjLYkaqnGWL6SdyJwz5wmALwfUArD9t2e2Z",
  "key19": "ysq3EGETxuBBF27PrdmrCiTZ549F66DmteRAgfRSXCL1wFFqXvhBBQf1GAk9V8Qz5ZRX1Mf1h7wk2eUU2cFbNNw",
  "key20": "3hjPbaYJfquTXpbPhpwpLFYYiFieTzJNW3yFryDAK7Rq9PQ3JtSS83TiosTQcoX6amNSsok6RFTLq8ZArURB3G8f",
  "key21": "4tznzGkXWgi5iAAFA3ifDD2awUd8L2QevqC8UUfMh6KzAou8jmtaSvbmM6ajcEBR66Cc7ZnXbaRaYVMA3syiUDPg",
  "key22": "63GBsR6APaRBWKtMcfTXGFmxTTJLvCiK5H7NvrP8fiFU1VeXFy1qUdr7AXxE7vUnyvyWEmTXZX21pSsJ65Di4BTM",
  "key23": "XS3rEuL2oTkJVeVXrVZ9gjSmepPDT3RoNFjoJoUaBtgWJoQ7L7SWe5hUYRikuEmy3KahfhK2LrEbbLofKCq8Tem",
  "key24": "4u5NRGusWnikXuRzvXR6tJmFCdwhUFFvynKLh3ZETwiusVUQMQJW9L5JEyypVxM3sEeuwtTx9CssVCpSPGUiHyeE",
  "key25": "mLBnxVvfcYXzuyXvoXoDiLgNX7USzaeErPWW2gqYgmB1SmgBnvmxKbZAbKX9n6AGzmYweprpjRcxKFZ88BuJoFi",
  "key26": "39ZEiVBaz7ExFqV14Wdr49xN2rmds6AWBWSS72mzNPRmGKm587oQMafE6dZhGaACrarUHUWQBasJnCBMnDP3ggkU",
  "key27": "4V2WNMo1CctREHUQWFRDW4nyxRf75nLtEoDED16RpzPPbWwcc5teApqCXdnt9W9v6aQFRGeekmaCECrVxeESWAL8",
  "key28": "qyvXq1sfc1UjFPteUintckJR3S95rDhBSQeAvNV2HBg8mS3VmVWFpNRSQjQkD7z4ruMZAdtWmBnEtGHgw8YW9Dy",
  "key29": "126zRhrp3K4BBazGAkbP367FYb9dvLNTLkE84JJDDMiJV66VqC6wx3jfMG2UyfSW7fsdW7RCB3ZtXJBiakRXijUJ",
  "key30": "4dxGxQx9gFkH5XpEjZaCfSPx4TvzQ1RbKMXWWBYV67Lyvs3c2pJBdnm4RgxHbfWqxkUN8D4dLNQkDwCRgst1QqVV",
  "key31": "4dovwLeXGugpGQb9ruMHuAHS4irhcVCLKFZx2zk4RtGn3Z9Nd8W4RCCArChPuKvbvW1qrRW3hQ2qW7BxYsG74cCU",
  "key32": "4SQfXz44AooJiGpQohXNB6aekYT2rQqFtvRz49qNUDYDm83YvrmehKKfCT5wNoCz3EHPCDkJWTBFBokSkRfpc17Y",
  "key33": "4vTRn3w2UEdu6qGeavL76UwuGMFfx45bkk8mLF1j5NhQYQu8S2rBGiCv7DsREgLmhhZEHdVnKSnXYbFGtrr8iSe7",
  "key34": "61UzochCgFeca6GNNs2TDFFgbuFCwhFXzrd7g8oidahRJUmNAeLHpN3iNUPBJ3VJ9BmneLBjHxWLoE4NLpC6f92a",
  "key35": "aCmPX3iwwnuX3n21uZY58J4poQq9JDATXfpGBGn1LSPmF79a4VnompGbJeZ7Zg4mDoBQ63azeK44ZLH5VcoKxm9",
  "key36": "5N82ghMVZAkxMnre9xCL3paWVqmGd8pmaEmwaQJeLMtegHLktqaQD437BRXWf6RnAz3KoPeWQTbvtJv6QWuajwiE",
  "key37": "3nC9UBAFXWSY5jDFDG7uE7dcAzQUjMpfsgk8TyLdN3eu7WjAPHaaaCbN9vXHXuCqQd4aEAJ1pQUnegqeDhuePS5P",
  "key38": "5zTe9BbEVGDa2rCzZwNoehSi6LJ7DzAsBXYs7Gq3wgZe1JLmka2wDFj24HMFwWppiueMuYDbHCq57UhWESacmVcB",
  "key39": "4Kyfr3L6zybKQxGbfVkwTAmC4f6qq6XdX5x97CD3rFnnsw1iij57bHXNfBvTb5yENCbiQZgBnwECSYjkatFWX7xP",
  "key40": "TrTx1Q31ujFvaGC4t2gKfHnHjfxKw8UJeT6wWJh6Zgo3upiDjmowpZtikd3z2YcWuSFPiPGhqtvJ7pA8VcEbxHi",
  "key41": "2dCAxf5hdWqmsmGyBsygrCc2qLjnmQmatbDRQvNsrLGrrKwCLSXwDaU9L3AZukQ5wD4mQ8ebrvVLBZbmUHxgRo8z",
  "key42": "LmdNiFNsFhdttCy5Gj8S89iM6oRq6Q6nQx3AN6qkWxRg8TRcbpdcVhmQKXsAbCuprY4Zz62tvHeBp2H19ZRrK88",
  "key43": "27WQeCeKZfkpVX3j8LMJdvNUMjNRHykWZb6VVzyR8uUuVu99Kuo8NjjYMNRyxkDRV9Lj498q1KxEApUfCqZfW9vE",
  "key44": "YiH4TmJbMTfMyPYjikXDMQAg4b9UCx1yP6X9kW28WX889bC26CR2kU3VdhtHzRfsWNDT5B13tiHJriDWaKgakUV",
  "key45": "NLc8eEyUmuRsvkWeVSY1H1imfj6i3BZzpdkzhLJZuSh5Gpsb9Qc1yrrgFLT2R1A2wAwnuTgyPYkzscb4oo1z49b",
  "key46": "3F7aERbF8ipxXXGmzGsBBFFxknCj8RnRr946uyopG3CdcbF2TobsvpV5vimrxz7Lu7BDxzYcxYQqMZaguF591fJg",
  "key47": "ZieEaE2vi2m7Skn5Nb9Efy5QtsGiFPTgqJdYcxXxCamr7aTRZtKdrB1uJcwd7QHeu6Z5vDqQsGzT1UjwBXxL5QQ"
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
