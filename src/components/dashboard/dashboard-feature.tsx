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
    "2rdqmZk1e7RG1W5pZq1tFfZwFBY4k62FMv7aRmeF8BLEe6K3UBZZF8J2X3JQcRRQGytcNtPUMdTbhMXN1BWbF3KJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XH9ShTNqX3MGssQwdxwTBHFhgZCG77YtbndKw9HozepZGpXhtgdnR9hFiGEJV8tHQoKqTWqWdyVtiKUmb8GzXPS",
  "key1": "3EkG7q8hTAmiY5w7UsGwNNkTVA8CDmotjecMJbSfwHJPu9drhvKGssfw6XZuXcK8pU95mYfLR77tp1fqQNLpYY8",
  "key2": "QChbuhaRYPRTeHaSFPtSNcVBWvStj9DzFquWt5VXd3LJ8j5s555Ppe1rmBHv95aU4z8r5rRf1bq4G3pdS7EByuC",
  "key3": "Ud9f2pRbLeSLgjWEVvut2YV8LmFV3Wa3joMtiAV7BGEgvTDTP85jFR3HCBCuvHz56oFax8DEF5wB5MFHxB9Jurf",
  "key4": "AiibbWyaCgjvuBiPZ8KyqffR5nsv4rxnBcT6foRbHSkrUCJfMxDqyT4eeCgCgkN3NcAxETrdxkWwhfZKZEv5hmf",
  "key5": "euZ8kRvbkQJasoCagh3EPvuoPG7D1x3hcovqPgevv9enLRQQqRx7LKtdifZvakWfgBHxsU4ESoNZFcKWojz6Q7u",
  "key6": "2yxUmo6e1K1NE7pLz21usXco4nTu2jALemrvF8fpacipbDNqgGLgDGWF14edvfw4t3yjBPTEJTG18pqVNy31oopZ",
  "key7": "45J2kSx6CFHxXjyuKrTfABzszrBSRPa6VXxRcYPPhBPhsMGWY3fFtKLMSERp5pe3o8heyeFhqB7W8UpHPi72pcct",
  "key8": "5Lnszi7eR5zzRunW9qSTKgf4Nz6Xz6TBa8nTEjKDUm76dhSTLrBGq9j9rJVkFWELpYHXCdLzkHsKKmJYikAqQhEC",
  "key9": "2SLvm6ejmdEBu6RSkjVAjmhgQuc8yHiRf6JBmuDqgeTv5WEiaLoH39JjLakF9q3WoQkxpiEHm2Pn4nvHvNiTP744",
  "key10": "2EUFZjz7CEjF6EyUyMSNW7ADXCxj6RDtdDj1mQNNgCev8hwA6PqSf4BAA8Usv421kteUvCpVG9JoAAcThLm6nBJh",
  "key11": "2y2ekrNeHCPWjHFkKKwNKBiPw57LQ9Z8nvK8SEsWJE1zoVao3XbjctWRn6FrMuzue6pm9NEXu9aAbsbbGkMr9mMQ",
  "key12": "5G6g8V8MV8jZJC3A7wFRD5bs947xEtSBUUgvf2ksoer4twDJNBuK2kxi4t9h3K4QSRV5k4DFAEjkwbpveeDGKxk2",
  "key13": "3Zvp2dAKVYQWxKGj3gaCwLedJjiuCySaXJVeaKTTXsCvGwLSF6N1KdW35MmJEiP1MPEJkBWKCyf18rCeK3Q53HtL",
  "key14": "2nnMA2KhSc3FJ9GT2xuhzDtXAzvKeY5bo5m7hEdQt2Ed9DqCS2rdvHxDmLQKorq5SW91vUMtpdPXnAEAEX7XUzGS",
  "key15": "39esaYY8NpjEhcAytrgfMx3pzWGefV8D2iHY8evCgwXqptPMofm2G31vpAHLJXq3wNEkgENvXfhufyTMrY28vztP",
  "key16": "2JBVTnVRxvxxzzyMXSyGmWn6psWAhkQLWUvNTBxrYWnhH2LeLkqStXPUMo25sZJRf33eo1r7w4aSYmnJCwuQmo9Z",
  "key17": "67iEPUm3h4spJcXiCnLHHbVpSecsW6Q2tHeCESRdD6XfGotdxqBpNjw1RDuq7G1hMvrRFNVrMUYbVyrFuqLbLJBP",
  "key18": "3ghuJvshAxMEU7jQGRHUK4L18XroLxjk3aBzhSTCjYYx5L5h4KLrAwSmnjrw6bMtNwYCAPqEddwKrELNYmw8A5Pw",
  "key19": "3CV8KyByMdpsz2oZ1fdV8FSnLm79MAxWMn66ZHDeX7DpZDwRjudzTmN7HxoDZrHf5gZ3d1ShwioBDfHjAFtWXtBV",
  "key20": "2gdKY67veNaCuQE2KdeyURYkKQBy6fcqAGzWwDHMvmUPQPZQnEycWBz88PoUYYsLoBDg3cNHERPAto2EUxhr4cww",
  "key21": "QKFh2XkmEpXyBrRY1ZeskjuRHZhNrLKGXz2vAvgo2EhHkLiJqRxXtDjGKWHQNzRdAR9zjhYTkCnDPhtG6LCLUdF",
  "key22": "3h2gKcJg91Xkai5Ksz5oGEX5U3bgLwE89UGwTLVo9QDXVsLFxycjhTZGd2TdGRVxGLBoFjyki76nUWxr5SDaxAjq",
  "key23": "475v8zmbHD8LrFv9wL1hWzKkcGYdxDDSoiV487CSs8nBSAyLxJv5xi3T2yDNwovxUx1wjAa5u4oW7auQs18irHp4",
  "key24": "2W7Am9cGYjxx2qmYFjvdH52N1kep1F8c6BHUUGoTDYXmy9Xxaw93V6q1Ke22AYgmasNR1vLs4Xf1rhFs48HwgTF8",
  "key25": "2SpspgTxAk9uajqP2ZdadPzBXeGZmSsXMjzxRDWCM9wSLddgtTEkDoQfL4e3RaK5daRFjcnEmvYWxA8zsfxXQ1KY",
  "key26": "3ZYDquwwUtbH21vEYTyBbBDE83zw2MjmmFAYEzweZps94Co4FurUgHFbHHaU2P8b5zp7WWvxxwURMw4PWqPewEh3",
  "key27": "4KzmPiG6UEfxf8rGsAW6yzzPDNLxZpagpJENNmwcCs6tmk8cEjvPeizxR4cC7qHmw31HArfw8Th7btsVL5FUufLk",
  "key28": "7ZfEd3qA11BcjzYn4BLZNGEXUPm1KRAWXXSenMSWpZGgAx1DWAX9jRu8NndfzaJwHDuWFtbHhAUkRM7fAGUUwFc",
  "key29": "2hRokD1VySvbYnBMDFMYKksLjmuxovYpxFArMadTM9tsyE1881hDoyeqvW4bw5sF3WbkTRVvShgm2Eg8MSKYvFza",
  "key30": "4R2Pjyus3S3NHe4tqpoJ47b2ogrirtC4thbJGLujHXkj4XKLPqyXiTcH6VK7fTyHSy4zWoMhXDesUsicBD3Zye1S",
  "key31": "5eM95yv1WB2WwbKemwdtJjAnPMmcJ9JvvfCLXSJTcva8k757ZjsEz1RuDkSaBb1bAqvpsPRSbQitkuEc2jfSeKEx",
  "key32": "5cHTfWxwstBBirSniV5U4tcXwYFDC39L5f78PfMW2jnbMfVPaQL5Q6YooQWtr7LNds6h5XqCpzUc2Ey8nyBeTvSY",
  "key33": "Fp2UxkwbHzqyaAQr2ztemey3GrPCqMiNMmGQHry2ktsDp1dqMc2aWx8j1xBKH2q9jDUppHxdgyoGab5MW3pZ69n",
  "key34": "2DiBukER1QygEzu5xVACPAWTyNxCPceGSjgQY4bhXZzEZUUfWjTziyD2phxeaZcfpsDberkNHJsgHRQoVf5YhdcJ",
  "key35": "41R6VFJWcME8YvkbgxazhGsFYTsrtPimnAZGAYSS9m8iny1o96w55JqtwRsVDGn7Sb8E433BRhYQiBXNFXbeqo5s",
  "key36": "3ui7Y9TiRFEKgEbn2JKUQXeLNttryknPbbxeCLv1V5W1rgjgW3PiSTZibre5h8CuiNr9t9jruYWpPADqWCsNeiAu",
  "key37": "2apE2hDPtxpeQszcLdFqzYJs5YdXyTb8aUk8FjR6QrBmNZ48KZuhewjpwifuehdu6av14FzqD9fQz3yKaMx8Pmfe",
  "key38": "232SJnByPvUd5Ci4n4h9446VUMzu8afnA7K9YA7GzQ2NcbjsxLew6ygrMiWe9XQDKhV8Tui7eFUy6th9sYjGReKM",
  "key39": "24sMu7BvfdM2NnJ325DCo2Jcc55opYeJnidRprpSmkYFCG4ki1XrHdeHHngB4bzH1tbWkv6e1gp2igu1j8gcpcDn",
  "key40": "S5ogPH2Yii8jRVAk9Ef4reJvo4QjMFKwTcC6yYbdEjFuViREexhsTQBErbCzYfNbFV6ags8yFxCVWkfWFhJRGyx",
  "key41": "4uqQ6d53mfN6hkbZUHGLFivax7cmQwA8fq3BmRTVYbVYFaBALyxDc77vhz9D3F36pQcFS8rvWHierDvSMbNksHWk",
  "key42": "mgNAwxPtk2Hijc84SFf5mHGbCuShdA8LjZ1YSN6j5YW2VWXgLJGC7in3v8ZvZUkCxomhgaMR1zAhyfhhPvHYJNQ",
  "key43": "3xx7Gk89RaQhYmxsFVwP4jg1gr6z1Tja3n8Curc9nHRW6tD9E5BdTMtXxJinQnsCKJ8B28nwRpw6ub29sExkFHMs",
  "key44": "4T8uGVQ1UREHHryDpnBLAp3TbjFveT5YxvmVX176VRDqg9tLNG4AW7zaVx3r8ZyowppTkLyu7tUiunuqEoKqLjMJ",
  "key45": "E3iPEj8sEUMSJn9pvmC8dhKiAhK3JxehrfeGkRDh4ZSFCs112hsxa5ugkviMGijF7n7byWdmnX6fxFAV5Aqnv8u",
  "key46": "665ePhMT4q5axqzc4hSHuQ7YYsCNKeqYhMBDy7FdA6spPT2kSxCfwfHFQodbBNEKdJ3Zz6vyizhKbGoTqnA3wkcC",
  "key47": "2SeEgS5hXhkKhb4jtcLkfh4DBdpmWZtwQFsAZ8RSjkT98nNa3VA6SduearXEzvZgHsT9KHMWRtFtFCdXGH3SVKGn",
  "key48": "2w5JGsHYbPuoe35DyBunN9FGSMEZkM94RSN984Z9ZWvWwXDYci7siAtmGKgeiGeB6UreThkMk2e3LgPPsNZ3EmN7",
  "key49": "2pZi7enLbEQ5g5x9czBLczRLAb1CJfv873Bogdvw1ATx88mMkgKLVZ7FuFSK72ej4CnZJ5uErZR5QLHUMnqkLadj"
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
