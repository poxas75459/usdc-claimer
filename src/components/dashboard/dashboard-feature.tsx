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
    "YyyeghL5BV7z9ge1Y2o6mYcJqZd6vUmYT8XrB2D3M2dwYyQm1Qny8TfgawEtUfaSRuM2WrX2qCEGLAjt824xdmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x4aFBiE6QosQDXsQLau9TwwUL4qKAyQCfYeVk13UoXzQMMa6NN97c3wY3u7BudbyiXZZnr5Si9hoKEzPXviCH25",
  "key1": "5P1JPtD7yuVUtfs9BoDYebSQtnvfkE7yrWNwpUXFcGQsYiwnfkh2u7Pk2ghmpRrvxvgAxWDvjckGZaiGEUWMHWQv",
  "key2": "3Ssvdpar9tT5daFceFwi3TBXKBD8wuhL4V6228PyfPtEtgKJEG6ZuAu579B6HpMTo82XZA9bsTXGmna4JQiquZmY",
  "key3": "5i6CLFnYWZCDxnpgTko6PaLU6AUi3VHSPuToC6DzF4hdcPLPM4jHCDrVDgV6CpszRpWUBw3ESUWFDALBPkkEJxF2",
  "key4": "P3NsZc66vsFJ7uy1NU6jCQF9F1GcXv4JWmEja12g4JFC7ZkazkdZTbCr2iwL6vy1mGEz5YLob1Y7qxv6rWQFhW3",
  "key5": "5tu1YqSKLGtD7diNdRe3kRTAvv86rpPGbjnAvsKtErpnNq7UP6muMQQLr8vuUkK6obv48Qgwr3Ra1MSnGiaLza85",
  "key6": "3PRythup4yfDv7CojbhTLYToERJuXuUhNPjkSdCSJ2hX67qgmZ53XZoqEgckv1mLwkVWeQfQpbb3eX4gJwsxtUtb",
  "key7": "2x5YRfr2Pk1eaCmFxDEdwWTYVXKx82wn1hyvDhhRq9spk1Y1oy1BsFPN31vqZmiHMwdBE6LeRueqAUf41HqD35Tb",
  "key8": "33y32RN7RpZa1MZpAJzMt2AkoJmd5vf2jNcE66RYNUuEGYdY54hJeyMHEaXVrnrYLtSJd6Hqgd1RNSeufQRDWfEe",
  "key9": "3RXhhZ8YqWv8h55UhgFT2KiLe4psVAbdZTN8qRcgZV783WhELbadBxAyzDQXA8ykX3vYqPmdWtT83UTqiyBQqdDt",
  "key10": "4GNJiZ6JGzUq3FfkBNFKhh5HWiCkzRfiZNo1jjdAS2qRou2CXeLGSTii67akpBDu5Gs8kvaS5a6xxrn92zAUPAor",
  "key11": "5MF8p3obYRbwTTCvsT4hbJfkKB4FiTh5VYRGMiQesK1P5mE4Z27VRj6peTZofLyexqAUXaQeR3arq5xKVPjVTyp2",
  "key12": "favpgGXzWAUVq455iLXpjheFcXs4t1WsPvGFVkB4JBFEzs8MuNgr3hS7kYxko9KvbmyoX77cKZdLnKyzzRAc3J6",
  "key13": "2pecYgLU4VffqEYmtFLXTeqRKY6YbaUWGfC7uZcrPeRjwr7cF6iG6tYyWcox1o7kEHhYP7KyX6rHQsJPWtdmFjFJ",
  "key14": "5LdFo4CtrYXAWuWBgTZsoBXjNs9KDrFcVUqVqE2HoUJJsXtnVcXPDURBPKgrEq8TF4jEtVGRV5G74KswJ8E36wiA",
  "key15": "2QduEXmi3SKVf9wnMrTGMvGeV6BBWqxJMbHd1xfw253UfBVuQ8GhTGSTSzVtJWUaUeYkJ2ETFFRhSu6XMXyLN4oA",
  "key16": "2eKdNciDdovfvjapwrVbNGsKU9YaDraBTM4iYDgHjiU3ayd9dahUmBP6duzZhv4JtunEvCbYZc4hY8QnY7eAMrv6",
  "key17": "2rex23bQUahVqWTf3jN1AZRreAdo5JjEAHwpLavKS9HWaDad3CSrdhF8aQP1WTgaixgmzZ85ChXWT2otFEqmWRRk",
  "key18": "5s2pDeSBi9XVKroKGbKAoRi4D7fX3yrerQ7V6Wxvi3nSy4uiBvaufoGkGchDPTpLa4NqMFPftDHUHihypRQXAgnA",
  "key19": "5G7AKFzR1SFc5S5ZGiHjEq3jf81wNxq2ywoXRicXbHd3NMz1bk4FVQBt2uTJzprvczUbFqvCG5fWoN4rvArVSjpE",
  "key20": "2TvxoDhEYvA5oaaL4Ae6HhybyK9CgkcQi1Trwgika2wMZV9Fi8HK2cfQhMqPCa4nZQ2XtQcrs55zw3sr5nTccg75",
  "key21": "5h9EnDT1cnr7HTmWZJkmP8sn3fhV7H2jwg2UC11mS3pStsp5WYJvrBpc6fGJ2bbBiLL655GGd5DLTR2TxLiB7864",
  "key22": "dHJ12d2bNenA1tUwXJJXXn1Q28ca3RyfQTShZFz9PZQtMmubH4g1bNpKduQkd1WWw4RacCYbRvxhXEdv6pMWMPp",
  "key23": "28xQbguQ1Y9ZqfPK8kpZeH9pJ2m8N59iE9i9utXmzzjb7rrHuSggWrsYTXVpm7j7Ciw844TD7VMwnS9MzGPjUtGq",
  "key24": "3ixazQEq8qy1jnxGRqfcLjRPj6pNS2mLscBcXx4YeymbozPTQsjCtp9KytPsi1eSZQ3SdQqQjhokzR3nv4NsRhCc",
  "key25": "53WJSBzQv7qAP4RXYvG6AiC7zMugxAQPtagwkTULDDnMFtvNYXkgfBPs3zZ5BRBHfpA6SY3ospFyAtjYjpERShUV",
  "key26": "66yZqqr4PCmpec32HwnJPKqxwGBkrLQftN5FBxGCWD9VuXxx4iZLZPyQ8fCKiVhpktQkkdTAXjwu122DPcnaQTJp",
  "key27": "34qJtSGS2ZcJETtzK6mhUmmn7Dwu9xNers6scZ9WK9NnzHurA7bw2aFytpuMtwg3nBE9EQm7VNuaiMQFB7EHbS2v",
  "key28": "mAtuBDzAuKBwMv3hprCBicFKbwS7HRQsC4Jdf1gD4mWqzTXpttheNWbJ5DyCya91QwvyC6XfTnoMytAmp7wN6V5",
  "key29": "aCjavjd8RjoXVxSRqKD7RCmpYkBbL8DP5878siHSgMP3pdfmaNoVASxoVGfhFD7kXS3wrScSYtrkDU7Tgzf9GVi",
  "key30": "3WWZ3vFrqDLpEhhnPZb1zXkMtQcLmhARs98cPXPz24ybrBnVx6bthnguvExGAEbELPyLDyQbzHHadgnUW8pVzpEF",
  "key31": "4suF5t4n7KxaNxHqQYcssJ5R9dVsTQhjwiJ2cANpFqeYbmuCNDYK6XSMoedmfDKUCTqR2GMBWgziHCVCcyKibpn3",
  "key32": "4tUfUpWq4xBqtiLwZgyhPX4vN6oc3sfLzTubffMnhDv8S3VYZGVjQLdRperChFtyEVqRVB3TNimRAEsBT7z25ZbZ",
  "key33": "2sG2pGesiihrtiqQ6GmVjTMTMXW4DN971ZavsmJCV1Q3zChg6BoMS1LRywp8UNuDZBoQdeTe7UpLBdiEgijwLKxR",
  "key34": "2m1JEn6PCSLw5RyY4MBGZiiFpwnLTMoqpertgmyj5rjEnNddLJEeSS543fvmUPvZpXWeD1joy5TYLXv2nNwwG9o4",
  "key35": "4zmQHGTWsQChdvPdy58bU1wncqMKYZ59iR1HwEoEMdXQZNuvoA7orKPtV8MRwitzWwbrdsnKZ5iztJZQqRcQCcft"
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
