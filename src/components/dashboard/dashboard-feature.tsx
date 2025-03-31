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
    "5sPPm6YXCYEVuFQFheKvE8uazfxHsfu9HvRJBRZs5UbG8p34UW7k7ak7AVr59q38iVvdEQoPpC568oQdDr51o3dZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WQmBrkZze2m8ys5ZmWLQ5LPJZqCF5n5wMzvTu3WxdN1udw84FcBdV3KZViSZ73nNSb3dWRTPr85haRwfNSTqKdw",
  "key1": "5XZo98L1KgPoPVkUfzqMJeiuyc9E1PNpViqeByPZPQTLCirZw5271ydXtMAZxkqUJjb7tUgQdghU6LhCJjp5PwEL",
  "key2": "VdYW8iaYc8peFpG8Rs7YnBW3vvh4HV5i6X639NM2gaMF33Vop6hfFbCV3wTeX67SDqubHF2oZkkphAFjoHHxz7B",
  "key3": "54EqMyj2689Mb1fR7ZziCu9eRd82kfQ8tDA68VRpXzYGLQeDNSWfcyxSu4jHHkW6dMWiqAt1F53v24vQuHLFWPoz",
  "key4": "2twkLnLqBamV33s5tDJ9L6vZ8FhjgGL1xWjALxGN7eedMu2dgu1kPz627wmb82gc2isV6A2TZwVfFew1Bh57Heay",
  "key5": "YyKJvBYu1wfNgKexp3R6H7vgnTHTgjVx3zFqnE9T4aZEAs3YSu2gqzgpq7XfzEmzcMVwtQDsDhD5V6QBnzz4NCi",
  "key6": "2aRGgeba52B3hkvbWQxB9uJhUkJHopGnKUj27C4BJmPdk9ZYVHy57qnU5AcpVpHKmeU4Wx3xd9SZf9sSF3T6JiUr",
  "key7": "3WSySFExqkMps31yVWM6UfVFKHqivCtiE6Umo6Eqdf3YyUh3URqXMUane5SVbSonf2prgeJzbHD9pZQ6iUM2fsMM",
  "key8": "BCt91FWc2kw8kZB76P5LPVdLFCnzUSrxEPXs59i2muTTWEJZdXHZZJjQbAN2bxMcikmx9kcFgXahyQyhtk9VbHv",
  "key9": "3eXVver2LDA7za6YUy6NrbXqJyGYnmzVrcD548dFba51RfMa3VBv83LSPgkByN7u3Vy1Qp8E4qG2soqxRxWfg7eL",
  "key10": "3FUxP9pe7V7Wui6SCpoAgpoNSkHaLCGzRY7m7KqjZoRVoNBQ4GjpS8MJzkCWzwTTRgfy7RsCnEYHXA1uTh45vbMo",
  "key11": "5H5DNPPPrtAeqUd7ZgkedMNAy1Qwk9KCuCxWKyEMQ6evZXhgtreVPvH13tgJgqEApnoF3Z81nArPWbRbVhWUfi3A",
  "key12": "5tFriHdhuBf53TAkhTJXLfLHJC9YGLDNJAaozyF4xecdmmAk9dX1MztaKd9V6SLWdps9Y1WWLHm8ZqzaT896nzpu",
  "key13": "so5Tt6qyCTfn6PdQeELeWyP4zXLTFXqDbzuqvwmyUU3Zb9e2nktf7hAiDMQKecDgzo1mcXcrHHjLhcjx9yt8aBs",
  "key14": "7vbM7Vyu1zQV7EAZpkTfhjmSK9XjVQKZPFASmmMvnyJ7sphekXWMXDWnMhYZS28neubjQz5pNiDqtXn6pgQz3a2",
  "key15": "2vA8AKuAxzGvXTeA9csw7vWZ9yt9CHoHZzwtruTMyvRyWsKtu89RvPgyLQq72Zv8SiUVNP7oF54wK3ZNRwBgnoAj",
  "key16": "2Dp9XBHgP8bse47YKSeG3xG2UKrDS4Mm5rDxhb3h3zG9XD4wVrkyhj3kuEeWZLX15kCwUyg9db3rc5JbHph7vHab",
  "key17": "SVbErQNBCmUrbVhirTkAgNXWPrSMG5cSbs59p6ZmvTQpb296qtpMuCujtCZCjrSt7CR9ueDdHuUWaRVXNCiHzJD",
  "key18": "3VLZZLjUUwJmxeAkXJPKYcFTw1yH4xMQHR4GrD63zgxPQrjokfmcqEgNeYGjbv6Pu3arFAo2x2ubLPCGxbrSbJfv",
  "key19": "5sj2kqmQoknUwfCnJhZAiZagbuJKgbXEnyrKHCggyknsCGm6sNpT3wnEAfhWfKVM9GtfyhF3kRaqHnNqPPjZUv35",
  "key20": "29JdrGvkh2mi6N2tRqugt9CNz8Vz1yUffT7fqK65Doikj1itRr7jM8ePajV9YjDhuo5fThggTBThtJoAQQMexvDc",
  "key21": "56pJ7vc4WR4wAA7Q6qgJfrSVTpqUKMvK6BfhjH21cxsu6f24gyQ7aZW1JZJ5vSe6fvQxPmQCMZhzvwdra1wqSFDe",
  "key22": "3Y7EqUUFAKCqickakkG1ty6KsMP3HFVqVi47D95H1ygRyhwX915G8bqDf12b2TxNtuPDnH9z5WxCftjmUMDvHXEJ",
  "key23": "3JkNto7sXVRwyFK2UxDVjPhnPFvCcToiZuJUDFC3PfY4y8iaLjhMaaWeuA1Y7CbcwSfgN6hRS2f1pK6k5PmsRz7F",
  "key24": "drN4NXQ9L7W4MdUJmfYgRemkRF2KTELobTPmpTPpNi3jEVMVRZPhCTrRHod7rHSyMxpSTW45zGMKKaDw9ruhvpb",
  "key25": "5BCogPhxuAoSKSKTzeyanHEWeendouvS1xs5vMqXrLAXBrqs9dYeGUeDV4EcSFyhWMwYiXMtUTc7HaeKBisx8Cjo",
  "key26": "3LrAhGha1LYc21KjsLYUuhtUdB1sn5rzeL3GNgaZoXVVMZyXsMB1wFs9KMyW63xxFEoacWbAG7tHgVdfZCK8khGq",
  "key27": "3CpiyQdvVHF6gYdshcQZ3MiMji48hK83TQ19BLetSBZApGywMt2eG1RZqGBpasSNFTWMXQwB84WLa2MyEP6ftio1",
  "key28": "5LrANom625ueiUE5h8VQzZBXBLQtjtX2X9evVDabEhKWyD7RBYYnH1URNdqhaN3boBpSqF8UzsS7nGzspzQxTwbT",
  "key29": "66QduQDD9M9JHUbfNwN9jnh3udeAuasAHNRVUSWzAGn6fRcfUm1xtZE88d3FN5cESUX4JNFNNjHngrALVDv2kn47",
  "key30": "3LRdUAGhcqJHqygSocLZZTGZ3LFoG1Ca11nuWG2w5MJw579jz5L6tc2VpAKythRxfFBPGg9E8FYwwMjdcxyRY1Ja",
  "key31": "owPTh2XXZEK4ymbE1UJHz8ub4vuQ8wyA3EQ9vzhVh1rmGQgP4vANqqK2wFhsWLPbMxrb6RNzUHQEXctmnFBVNFs",
  "key32": "5sZivf3gd1JXvDCDrfS7QSD589oAu2MZtZ2vSRyD1mrukDgnnTVwNqH3gtkp6xyZ7kpr5zqWa7LAXrChxDqcyTWd",
  "key33": "4iLx2xPuCGByJtwJH8W2Us9ShG1WMyAgrEKiKKAig1EHXxjXEtWLJ8KgLMcCYY147MEjaUv2ymYkiXrBpzzYNVNS",
  "key34": "knHdo1sk3czpErsdaa78thh4p4PrZYHUEUSJUtgt216HWUyZ2CSeNr5S8z72g4VkCUnJ8imqqUwngsoi2GWkEDh",
  "key35": "4SAjM6J6dwMgrKgZDZU4eY4catWyw27MuHBfwSbpWw82CRdd3SBwhPks7d1aV1djCMjD1aVDXZZygDvKdQQdevbp",
  "key36": "zUKnUR3BKBpXXLFuGaWao2husXRuKWcoVdQLVM7uegyF3WU7j1rMpDh35x2oZ6j69iMAmKiyqzftNBKhxXvUor3",
  "key37": "5oeBmiZtggqsDeajDuBzNuzFDj2TjA2Nj8187EL1tLkWGjDJ4k7aGnfu17tkB3afFmq3goEHpvv3Nv3po65de5Zp",
  "key38": "5CrzYK4mTwov352s9MdmdbjXmt6K7rfHYhFtdd2ZMrQy55NVsvwWZEwgTiEwuhH98U3YcG1gf5vd4VAAdHBKPeYN",
  "key39": "5cR5DuAAP8VPjXSkewrgij2EaeH8yznyEdVqA8GumaceZVtdY11Egem6sto5naaTGHzwT7hEQ2DPLJG1HhhBQmgu",
  "key40": "3xW4jbpLMn5SNYnvkL3JSuADDjNNsnXosyigbgDgn2QdcTQ3C27DykNnfSE1rDcqBt6LtrMQCjwWW3R87dYV1XwM",
  "key41": "4Y5gkQcobZ7FqeoNHRsccdBzHYvpcLnGANagur9yRT4CqFAgiB4RHSFm46GZYEBtYNUwR9BELnkUpcrX8bUzyJnJ",
  "key42": "5URKThgyvxHfme22Pvv4cB6YZHbBDETnH7vcwmZVPUKPyoqeDPKfCHaRpeNRaf3qSTm3dpEq53RyrnCi5vVAdhS1",
  "key43": "jxwuRHBspx3qprfwzdCifRQrpUkwLJZ9f1s6saJw64JZXAGHuQMVckzhqqWHCzavnfdpKiot98hKMkDYekDwhf5",
  "key44": "3ufC9fzsa2q4oS75arJKJX1yfyaMTrLFJkHEEBKuS4336LFqfJUqULSYm3MnPAVYeHWNGJ6E6RxaJyPaRBkZ5vD3",
  "key45": "4EpPNJ1RxR7o1g5pwcHWu5E13YNzVdcCkhycsE2CMmNVns34dBBJsKTSdmoEEjaWBWbfDWCESMUEw1HbagEYYftj",
  "key46": "2BDk1hdY19unRv6LR5gfM4N4VPnaGvREuomddeKM6ELqcAdoenxyWLbxg5a7dVmBKuGtYttCmbZkkLfDrboSUzhs",
  "key47": "4L1tr8LLwaqemUrEWMjCppDc7W7CrAWrGHMnExPGocZGTjXjCxG81g8Ned79bacNrDXB6TtAmmv7xBLwGQ9XKVA1"
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
