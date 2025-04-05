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
    "5otB1ikvyYeGGko1Jg4pEDMZTQCvJVRJwDcELzcVJCRqPgos3bVXW7rVrAt3MGncdRefN8Y9CgRZ2pVYaTaf6JaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sumHt13cD9GTKQtySwkeGctxJajaCowNAkVzueQopfAaLPasEmNkRUQxUT3yniMCMaMbNUPkkeVaT5AUzSzyGsF",
  "key1": "4W7AUVYUrxU2sr8f1VmJxNhXaiDQAbz8nVr39dEGCZkxLTY5paYq8v9QZakTwtmDeDNvnYsmZGKC754g6Hp7VyFp",
  "key2": "64qgMC8EVEx4mBBFkG9RY86kjhUUpR4seYCwaSqzen7Ak4fBy2D1wDwz6aiV9ZrABNySSR2YCjCeDTZJX9ZigJV5",
  "key3": "5aJ9BiAhbozfzyczpUrpojos2X5xg1fjfKwkS9SDPTJFbpZpcFaR3g923Hcfd5fnJrM5mZX1yQorzEik17fv48FA",
  "key4": "655M74mxYzAwbtyV8NSYGnLTfjumcmwTMgvkshMqmpn11TukgjXRG9gR5DZWw8br8cBMRERF6gSpUrFHPDBkoNuP",
  "key5": "9V6HHLrgKE2EoKasdJv1DcHSdZ6SEqiQQFHKBdZmxNV3AAvhQm2Yt8we7UWo2AZwK55tQCtdoyeU5r53Ce6qxB4",
  "key6": "2u1vQJarCw85DpgqYoYMAJruKzNkmafTpH6YfghfgGV5t9uyj8472DCvxoabCgdWfcdz3eE9yzUB2xmfV56pTkct",
  "key7": "4cj8oZxg9BTAuc6opwMQ1Cuweo1zq1RVTmA3kaq6NNRhyidaDyDgsQgYXaxwb3qPziJdNXrWMMoW4tMFggDvZVoc",
  "key8": "wMekoVYVmmMtU8aFCXAS12iqgMcHf4AtjCbY56o6ZLeWvsPtBWY2sR7N1tU7XpVdk9QwGnuWU4dzSnyjAGvsBSZ",
  "key9": "4bcAuC2EQpZ8P3UXDnxERCCcVcCKRLw7NR6m49QGAzBfL2UN2rzYWQpWxm5qizB4EGXRMkrf5X9LjKPkGnEmxmzd",
  "key10": "53BbyovRK76vupktDpJ7NUmGCr9sw9q744XpuXGxnxAvsbSiPvdzyKz2jtAXbBu1RwF1LfWcusfsK37BY7RG9917",
  "key11": "29pw7o3rxnUJtd8nHiFdS9KpMygn7zM9qRycQCUabGc8Wj1P2iyPzneMRmLQZSrvAVqqjf2mwm2gkFeabSb6GfDf",
  "key12": "36RszmLHzkThvtrKgJNrissd8s2u55ZAqYfVRP45r7ujZqmAuyx4fjPHmXjYSZiCfVqg7HnggNxMVC6QY8ZBhQGA",
  "key13": "2LBpUEsLiyxnXmn8qcsGYYkvppgunmKKe1t8wjQiZTRwKeiixeXFA3t8z8HWV83SaMjCxvSb4MyoffyRGxzFaphE",
  "key14": "129BdrnZa8wkjKwkm3iWTmBnHV7ymFqHKfnwu6EKBGmnVH1UnC4aXFCQ1BRbddG6HpCCWGwb5XzaiSLHoyDRjWGM",
  "key15": "36GPPu1X23B33d9ZoB9TTX4YFb8m1UMmUHdUFBZtFPHg8ebzgSZkpZ7dzpzfebBHojmRLxN8gJMMw2gdL3ZmVNpe",
  "key16": "4KjtKgbQ4HUybzvJCzkfPQPZ1VY7v6UJMBhSKsHWPfgFNerPZCqDB72hqHNW9yQUXjEcnohAACqecZo2En7p7EZt",
  "key17": "4kRUvQCxPEzoyPQKZrzD115b9h1P9Y2t87ZAzPFoTJeiR26WQ3ZQXHs3bc3zf11JkisZvYfqBZpJXxxU178qUt3R",
  "key18": "3ZM2zL6Zbh3uMX5MZfiXkcKBFqigxUJNQJi1VKyeynUJp81x6TJjRMqPikYFFECWYerhpqP6HWnNPxesn1VMe8Yw",
  "key19": "gFHkdmVh2cN3KgufY9soPYoRwoxPcv7hzAQYFe2Jj3KAwijEVc61CUfsdvMNEWgB1p11XJz7LuUrsoKYZgrdPGB",
  "key20": "2CPmx1dY97EcynhZqDEkDwFH95neur7JEhsrG89e1K7vckGoSzwsiarkzsfvm818AtyXVESrxLkkSwvhyrvXf3GW",
  "key21": "2y8JN913ZywpQV2gSnJ6fqT46to1juLhUEV9RPjzAdoyiQoAcu1raWiV5ogc1hieN4pep9NBGxVX1KrMoUPtEoZ4",
  "key22": "2XeaAGSj2XUiyeeKwkwxGp3p8FKWcSK8VzXX4TsD5EVU5RDdNfmCYCQCp1mWue6LiXrKuq231DyNtiynAXWG7Ayz",
  "key23": "7zn9SGR25vmJ7jq77Jn6KXeaocshzgzN9ZDrUbUt64XMBhuvjBg2PbpEA22otL4uuUbiCFupKmqMYYdVv4Nrb9T",
  "key24": "oWFD1a7BADVGm1Dbw9FfT4PkU2SezUKCxyxpwkpe3Tjh7Jojsr2XoQrsVxrccZgAUs9rcen5CCNLRWjQpmf1HF4",
  "key25": "5tif1prDCDxau3pQCZSXWZgViyBJQHtZttfriGaYjNGQy7c7D454cKN62c2KmXPka7sDfaVzpdumfpBCRri2raAH",
  "key26": "3QnraKFVWUUL7kLKy6ZyGKZEJxzWVP4e45uSadxW6h1sTauBzpL8kT9UCfyo5bX3w3fbnyLgbXcWGuRVCXbUAwr6",
  "key27": "Q9jS5YGR7QTeuhhdKxk2zkdXzuXXKCQyr2HorbR1bo4tRgZu85uJoFASEGxdgoDEuwzq6Kiyg3UFQSL4sN3jTC9",
  "key28": "3stZy6NHusA3QDAZ35okATuxue3hJULQcepxgp9sD3LQnHUUb13PLBZLSCkaJfxMC3n5EpP7Tm17D83LRECmUmD5",
  "key29": "4cWm5v92p9W5urpV8B2crfkaEcR11AbvfEtVcNe9XkfmLagzrcWMHy1Y5BkDX4h4eWQb8pUdbJa2UMs67iVvL7qx",
  "key30": "HH1CA7H9WzNLgy7EYpG1thXJ4CQbkVLhMrWrmAS5RCt4PdxUPRNMzGQjJEups97ZtEUdfB3DiP72kBqcHia27pA"
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
