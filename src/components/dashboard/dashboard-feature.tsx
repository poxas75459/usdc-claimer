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
    "61wGAJSi9U5uhfd8XvXwxCir1YbyGxvh7mcjTMytRYc6q3wStVQC9E4jwqkbFR95wnc1Za9XqfEwCP6vMrGJGvt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LWTo7nX4CHX1QBavxkdGr7zLgKPxWFrH43Mg2NRjaN3wcWSNgdjvuedGY4J9752kck8LRvc2LD9QE4fvfwJTFW5",
  "key1": "64jn7fKxpvhqo268vsqu7mbcb6yq6KPd5c3HoxmYVhc6nzdrVNYFW9J3wg2Gyh2Eq2S8D41TbwZtmSv8JpoUZfRR",
  "key2": "4EMv6KzQUK6qkfp2vw46ZpPsUoWFi6VXitWyiRQyRAdpZRL2nnQpP6APX3ebdah71vmG122knxWKvD4uNSpqfJ8Z",
  "key3": "JLZmzSwzeRDnLPWt1zM3qnyrHVyoJNx12ZzHz4Fd9ZnVXYGpCnZZv2FAMJG6LTmHRotN71yy7jnmBo78uzhvkT7",
  "key4": "3NRR4V1SqtW2LSHyp3QD1k5sgXKq63Rm1BJ9MbDLcmYMLEwkFuigRaZm38LLJEPDFqWRsVp4H2RXuLqhJf3esx9R",
  "key5": "s4wWmwKWUP1U9v5QPbnfKqm4AemFKPBH8M4Uz2Msu4aXSJoFWiBy1yNAtojzERMqVo1rbNBf2ixTJLBDG7ZhUWW",
  "key6": "zei8SA6KvBAaBbsobkLvuMwWpCjzjfBtmiYU7JAyqCErF4ZGEGyL8FuJzc35YrACYwBqwAft2vWrdY1EJCKFvqg",
  "key7": "5Dp5oHr3nL411qKT9hF7zZ1KTinfakmqJbH2URFtxMcmeSmxc6LW2934JMKZ5j7EiR27na7KgjTzuEEpCP4qAMDF",
  "key8": "SWv938eqJr9W9Lk7kDEiop3T3TntXz2FETFB8LWw7Kg1wwWRwFZjWwFQ1zMUZmfpC8TnUwdXb7veMqAEvPo7XNj",
  "key9": "3BBhvFWBRWGZ8E21yUrwDpk2KTZ1FokKPKtCNgvb7bBoKBYEPpHHBJ59EqMCTbSFWSjy8bDCS2TJ7mjF58wriTkQ",
  "key10": "ZFT9GNko2PWmzagFxV9aZ9pX1fJcuAs4u2kqzooTq2UuwZFbVHRuLLhg7JupVTm8r6Gt9yL2MAY7JqA3rs3MnKb",
  "key11": "5WLkrYwwfYKNF62fyPBKfo6nuca94QKDtjjGnWHKF4Fm4jDvAr2gF2GEJuaqkMPEwjyKNfgqJcrcb4rhXdXDJ8kt",
  "key12": "5DvwNcpP6NQLeq6FK7KhEPDVgP3Te3kPpp2KmdAYomnZM473wJZNxsR9JhJ3HrjJSsFHB6YeHEZgfzKHaNknswc5",
  "key13": "2GG3GALjfdhZJ9xY2iFqCXSrM9KGC7pbiXBhWb3bWHDrBfzhVLXcxKU35Wc2ytYxbh4vccD6vpNbzjwPQ4W8P88U",
  "key14": "3G44HM4pNarEbyRnuQ3iwZwAgkK2H4BtqUugYVrdHpGSdQfHHMoDjAAku4TpWmLYnMBnBvXTNujgTDAB1wjCzPuQ",
  "key15": "T1J2smEo5u8UhnNZcg1wX7ggne6tiBhAGijU81siuHMToaawJbt9C7dPptkQ1zJuKZHnsUiwaCFwvH5No3RY9du",
  "key16": "5XakLcBs6ARa7Db6W3UPhEEG7bq5GRwb6d7YQsZMd2RmnYpBvv383i1VQodZc4FsJGwmErAeATDVoHxHkc76AQqZ",
  "key17": "5v7vT6HS4C8ZtTQw12sD7AnZ1aNwhu8tfNz4hWPSRZntxzcqoaD8tCtDdyUE9215zkbCuSchFQEKci3Eo2PPChdq",
  "key18": "63eX5eSDNtfjwdCa7qYxeFokWRZJA4fQWSrZcYi2UwgZZQpr5fykhzFMKZBBW83RJzWoe2Z2CPHouYxJJpQCMenz",
  "key19": "2jbdy9cteb9rVPvd2nTLbrXyf8rSkGpAF2WgYjN3bpttE4VX8t3jajGk1rzot8hHWCpuqNb4g1uJDptAJgkpHwW5",
  "key20": "2EhDSquaZZEuzD12BZ7q6RAGJWq6X39wf1MvEcYzqXTxcBEvLFaFgaGG582JuwKwFBJSB3AygpZghRksEQRZfe8G",
  "key21": "4hYJAMwemjYUzHP98ZXxNsr3o5haGSmWWzU7wNwGLxPwax1jqZHeyAXe9Kr5ZAFhuJbmMw32HaDYT7v8kD1zoNCZ",
  "key22": "3X83H1a5sE5DCRj1HtmhzB8Hp24MeW1vX3ejTQ3uFt4WJpBt2f47WoMPaYsmUGni2KmM1WP2AyneLjxdv1z8RFVU",
  "key23": "UgdnQd5xDnhfqVMAJgPLHy1CTu6Pb8CEHMRZ8Jd6FxVMcf8beDgVr2LbDkbzf8oA6uoLSFUmMKi4SE35qZhGSFL",
  "key24": "4hB3BoFTHZ67si2ko6S9MPAETBoPh8jsWBmacegwP9h59juxhJx1cKguux6jKxAwFYoAeMQWf9Z2bryTSa535LiN",
  "key25": "5KNQ3bKxWhbKRVcPLBscctw9iC5L3LetgyPmDatiRAFhMxhCZSR2bUQiG5WNd1ijckzSiC7C6VAjBMCimzhmDuZH",
  "key26": "5SCehHiT1srpQ8Ppm6MxRFTPTpfqA3gHPXLUuf5CtKgfsb1HHQuiLpnHRab6wxGQnxCELHrBdRNbjCZAHSChe37D",
  "key27": "2r5pnTJtpW1UDaFqo9jq7nRu7QrdS94WUCRCXohhuPmEan3cYPnzdCW6LPuKEvRBCNLNd1DgFT6fKkFFWB6gu87q",
  "key28": "5dDz4d4cucC3477hfZgS31JtmrCRcBEFQjXo2VpbDjBjBE237eAWQjwV4Q4hSqnaM8TDg9QKjUFPyEPNBZBaZxsV",
  "key29": "9pLMHvDbkYq2NxHG512doaJQjWknFy3tmpkxrjutHzrrAzMnYCqrjQrBcxRjMwKwofEgcg3x5EgGUSKmbJhKPuA",
  "key30": "4b1DMp3DTAMbGH9XnJStb2YEYgbc5wgmY5QS8mtr6P74MhS6uVcStvtL6ANgAyFAEtruDBQwREqGXMuV33B5eki",
  "key31": "4TmXG3aW3otvPDUMnzkk46W7dsArYLySwX9QvtuCKmMig7jHCxpbEBgoa1z4YuWVoeickFywvKizJPaDBn1VyCui",
  "key32": "5fVpJzPeTF69H87t4qaHFQFEbtRd4dgRjxqaPXhkVwBdzPiMVM25AhcNSNerGoAa1yGiHud2Ry7brFGH1dZrp6Tw",
  "key33": "4EK1yPhCYcwbM8AuWjhXXzgGybfDtKsgGSxRg3pv7n8cfTtitPweBrVB9QPzuLTefACSWPiL7ZEgsc9UrFMqgHGq",
  "key34": "5VbjKZXeRMSEUjp3uHZnsxY9aYWEdLyMCWQaK3R5qwxeUYUJMmDixcreZZPsUCsJ5Go3Jqn1qu1ncpzqBfvF1giH",
  "key35": "5XyUNRzHpf9ReigogGoygqMREC3NVfwikYyV84622RjNcsMQL9pGN1FGXCp4iTUNuhvWyhDZacv92TnAufRx47vm",
  "key36": "2NLi7zUP9an2JKJYnCtUQJis6EtzcLRpc641mpVNpgLemZiZMTDtUFhSWgnP3KJpemiqAaC3NqXo2pUHg33b67q2",
  "key37": "5rNqkbzdqV5zdDbBfk5rUV2TSVjkC3FBMKT8bZRqLjY1UovjE3YqVSFtVS34mFoaDXJisqV4Mep7KRK8vnFu4jX8",
  "key38": "4GhXiXD9sjJt1ceoCiMib4FV6JdCgdmnmABLoYuQx6k3ESjHKNrQrfCkXhpSJ5VPjTub7vhndQfqE7dJRnE8GafT",
  "key39": "xD4ddRsHANMtiv67yvcHyuqZ87CBYcce9uUmPxF7ForZoupFS5Dmqyz7dRynmiDjugP7DtFY5UJuhBbxU2Rt8Lb",
  "key40": "4FPYih5tE7cd6TUQXBGc8bxts1zrPQWSFx6ZXkJCFcxuzpeZ7H4C9U91sf1LyzDqp4knXKtEAXyMVYCPWHLCj2Qa",
  "key41": "5aoTrzYJEbD37UzVybDHsCfqxmaxL8H5QoN6DnwekdDNF3quXhw7ck6yago6FYuJRuYfGyW193XsN7AALLtcstWr",
  "key42": "38dvWLP9TzhTYoNePGuwonYPgmRtBn5UnhcNZJ8QmQntzSu29fdhT7d9HebWLnYyGaL9dLgyZoTZJuQPc3omYc66",
  "key43": "5Ma8Qg85w2PCkGx8pVVMWXB9qrsgf4qboUj1J81mgyqk9VVgpQ4Pu9cLj9iirFwJZYUPQG4fYEkVnQ7mJ6kHw9xx",
  "key44": "1H8VFnBRtidJAty4NWRcF4K4rZ8rFdT27j4NnnQHg2bF7LPt6yZRv7JbT7CJPyVAz3o8oXbipg8Bp7eRUxb3u22"
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
