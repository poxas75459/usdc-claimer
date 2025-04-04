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
    "4pDu7TG1MpqgaVgFCYqLTU7pJsXnB5FKvpCkPUxxVHYNKs71mjnX6WuS4hvCZXuuinKBBXMiuXwvumFojkp8T6tr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49X6Gd7Cc1hRRGQvLD5VcrhhVNjXnDqHVrwtsKGuL28UR54MHh1GToVcuszdpcpKmRwzgyp7qfXayNQy5FtRWMGz",
  "key1": "5e4FgnntQswrzZ9szfpzGnegAj8n4tP7Js2DptMy84SUZy45PGXnpL18aPkoeK5Gg6JDJwtYPGgzExDEhyN1Juqd",
  "key2": "7YPNB68ZzUsn1yPYcEDJH2hVp8jBNWBUHgCnr6FiazwjNocfG18F98ffPFDQybYKkxTEVp24ABpRQt9UKZMpJzB",
  "key3": "23RMkz9WVTmg4FbWYMYWdF3TxVv5QcAZPo4z3P4jfDL4reRiBHmm5Jj3xheGA3H3fUwR33qJq7moTbHqAXPbT9cs",
  "key4": "2qHTQq8ovdQZsWgw9eA9FW6UE9yF7z6Zzck8PhfibW8BbSsAJKwXAqp3PowN4zYK8b8ZMnEcLcZYgabGCN2UEx8n",
  "key5": "2tRppxxjHTxxAkwigzYChV7qsZRWssBdY3SKwYwowVLzM34uL5WyNTA5gibUpWhxLDZs12VPkXhk42cmdCAPvNAJ",
  "key6": "8mbtkNcRCNqnT8JrTFSsYYPma1Voq4h1wsdRUy6g5HpMkq2wwri8UmiW2ztdvDuwfugGqVjpnRvveMXfjsgjbUc",
  "key7": "fAEMo9KXyAjvLFR6dt9wuUDCgCxfdLCMcaVebF5o6vQKqeS3Ebc81RzJ3CFi7zu77shwenkQjH9ySSxwTnLCKTU",
  "key8": "4ZzNH8Q7w1vvscCiVmNnqDhFwkDVDLPDX2JFcP3pUcepJkYSi5SYNJox1vVvzN8zExHVef4f5i1PGoDyrwKM6KqU",
  "key9": "2gxs6o7tyfnZp62QUZFx48tENMZBY7b6QE48qbw2fxwGJNHtvLA25qsxn2NZ2bDA7mkktWNjYEGEPSpz6RybVXsD",
  "key10": "5bwYb4hGYJu9DazpFoR6dMTbiXpfHEDbh7D8E5LMHZ2MmbFnSxxRDSfL3AYPnpMPpKXWGHKkKHH3hxumWTJgDjPs",
  "key11": "42grVcYLpfFP4XHNL7wQvCsDcvyAQRgiAHAqYXXxk1zzqsftv4uziiEFvEQR4UTZPWJtTjDJFAQPAGd7ynLm9E7q",
  "key12": "4F1FzjVnCBL2RrutKZxe4YGKv9hfBmwvsmiSm4M7ByGZgpnDuQWBp6hZENHUs2tpqrGxVG36GAC4WakW6SnYAqqS",
  "key13": "NZZKXF6UAcRtQi4h6ddPDgKncUeQuNUhFQdLCvRXHePXheyTgMFSmYWg8MfoPYgyUZCW1WyNXXdjrjdCbgjsgAD",
  "key14": "9daqEorBm48EMG2QPAsiaysyY3xPkJ6Yf98EhtPbWNtvPqQPGQdQFvWivmVZFVdJkByBFLnoHgGrN7qosA3pbt2",
  "key15": "5gpRrpNyh9Cenv8VZdfhBHqTearFAXk74ttVu1aeqB26dBtLywKk83TXcHXhACCMGxZ3HMZ6tGK4EnoYiefgzQSH",
  "key16": "3e6CMmgmoG1XDu4TVD8Jo6bGemitgtTMQuJj6jLiGWgv46EHNjzJMt3URsfYioDAhpX4SHU6VcDzB5fJpzUd36AC",
  "key17": "5hyHeNyFy3M91f4EGh5iM3tcKQVkKUKy4uVoZbbNpLEjbNdbJnf3DZLBpf4QDezEfD5oEqm64GZFVWKtCJySzHcB",
  "key18": "2JeBaR25adgMpHkGeQLrJ5Sqizcbh7Cbe6fQQBxWprQLUci5pquGP6oHo7FDUV2kw5ctuGBjSPcZGnKLVGKFnskD",
  "key19": "31CZmQtrRG13cWgTjJnaAUVdg7LNBN9NSH3JmV8F9uEdfVouJiYFB73Zh7ZHUeTGv6VeqW3URrGHxbSMEQZQ1Sj5",
  "key20": "XVCAPPqkZDTd9CHByqo8MaBBquGpHNYBux6LxQXYgu3uWzdLc9cXA5C5yJXGyCR2LfEn2MqiLPXZAVjE124hGfk",
  "key21": "4cUX9StgVW2hX8wyrZZ3SgxrRKyMEKgn8PXhHNmoFGD3NR82niXRyqXSoMEHYTANzyAcQ7ZNT1nfcDHLRwD5A6vT",
  "key22": "5iUVjJnkRpNnGtPTM26edzuVtQFvc2AeTH3xKAqFUJe4VyoAXSfUK2aGGjAqtWqTmG1WeM2m7eYYqtEHnaT4P67o",
  "key23": "5y3Gsiq5mkqtZvvDV8UyS6nPUKTpa9A6kpJeP8tvGr3zsPrxWGTbwMWtQR4SF6CAVZA4JU2AjMspMqAm89J2trPd",
  "key24": "FjVKWcViFZnH3hHaoyMPAZsjSaWLG71KABL2Z5HXpHrKoRQsiPo2PL5BfPJZnJzE5U4jtBKV9q3gKyStVLRotL9",
  "key25": "3RrYFVi1nDWQcfNjeGASCX9KdYF8GwgczMnJ2cbTZe3n6uBxsVZNxgMFuEthAyivrj9jo8gFNArPeFfwSwVVzr1f",
  "key26": "3LmYsKsN1aaMW4YayvqqdwyYddKuwRSBQGkHJV4cT9QrLY5ziyd6QgM6FukgJ4nkjw4RgCHFrDEyrdejCp9NQdZ6",
  "key27": "56L4cCBApLqhqV8aZz8mW3NsiVeY2Soh3XJfdwDff4dhpjsaoV9cNrjaNy1YSEehTiQrTtYx6GAvWyucLK5ia99i",
  "key28": "4vqMEsaYqDhVph5kA7HB5esdbwzvYgVcg16N8wZaDGiCpyHEbpNcPivSDoEQ8nX17oDcCb1ofG1CtWBi5TTFFdcL",
  "key29": "AmKNa26pVpeYm23gnM2XE8BqfiXgU3riJBRg92f7h2Cd4zN6RRowVXgPFps9Ag5YyQF5sq48hY64yV9CufRY54W",
  "key30": "2U8ML4iRZAV1SB18nNW5EF2FxsPwg4Yb1RR2CQ2R4jespnP3jeziw6URjQ2B8P9Q2PQ58nBXqrvXPRa91yumHsRu",
  "key31": "jS8yfCLEdeMNprBrQZoV9FRCQjUcAXP7CTRXaiLGr2cpzkMJ8KvniqaRR4DrAtcRSzY9ZcLEpQ4nHPAcMZRjhMB",
  "key32": "2gmzYJXVb17YJ5vpskXMyWAEGc7ToxonprkvE88zTVBZPqDVuUfWKWfLi8H4Mq8pfJjwbexDapVf54X7Cj1kWXDj",
  "key33": "3kLohZjzgPBaJkep261keJ6Y1dyycAQHMQyFVwMW6W3k9JRM8KnJL1hr5oaoD1EYbPTiASwmfo4zFzz1fvmKvLQS",
  "key34": "5mwAa8uEnoVQ2rcXgS22pb71KQmyfDtoajEQEHVRgM5aY2tXzBsaCBj7jQYqAHTUFNUC25Fsp83Jf6zri1qnTtaW",
  "key35": "kE5ogCUe3zJHuNKdJHfq1KaTvXzjpGzARCtjFTsAcmrTuvdte3pVrQ8WHMLHuoKcqzWPkBoB9xizKrA9xXoTpAS",
  "key36": "25eKvA5nsGE2rd5QUMERVsfHXy1tBTPMfm7BAJ6aLKhGRjM955pFmpp2Kxgi4c6tguvxAFEej54eQy51sWT26hK3",
  "key37": "UugqWGMbQRaJ3hhSv7eB5yHgUBv3DCCD9JEaT9fZ5zyNpdB23PYsZmWAGosJPizKD8UDYsD9NjbJUwaj4mF1tp1",
  "key38": "415Z2AeVu9x7CxpEsueeWQkYCH23TB1Up8nShKW1L5vs9jQqegmQMaaG1tox6EKnMAsq6gJkD1guMCaQqR5PmMF1",
  "key39": "36XBpPdUXd6uxi2Xx26dbwmX5TKemQhztJkvUfwu6Qe1C76cacZpQA5do62hxfxqasGxzUKLWSHuywzLKcfY8spz",
  "key40": "5b1kwGsA8EeFjLooNFKzT1weny4eYn3oFQiNfM4W3XWZwaicvqDhtJ95HAGHPVnuMNnWbGwRhqi81XDNfwHkVSje",
  "key41": "2n1nQhkqaMxxVCvvSQvVAe6Z1wbW1ybM5mqkb76KdKMoDrPJzZ9f9eWKZw5ju6R4zemPkNcTMfeQUp9hdHjQiP1J",
  "key42": "3abaeB9maYBZxoPuHnMvnVXaJbDkmDTMfrdpPnubhykprfsGAsKxaq1mscD4ygFUAaKdMQkAkf5rM81M6E6fscGz"
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
