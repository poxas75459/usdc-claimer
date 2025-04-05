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
    "5tSW2Nswqsmqar6U9a7cCZvY7EM2SLem25KQjZgvNVgr5qoh9MsQNoPzF4RkWicAxkwUyrkR5TdeT4jztA6dkCpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25bUPdp3qqMPukgaT1gfS942YJyPXQBeRoqWjTB2Lc7cK49q2RK8xUfrXmdbF8uwDytCEVbKQG2rZtGdmvPbVygi",
  "key1": "4FiPbVQNAzgzQ5fXj6JTdMc52yBrLEYsTLevgksfjWxTLbT6aVqan1MNYPPwYnBwjaYtg9j4wCSJMJ49XRGHNjh4",
  "key2": "5fCDna1zMnCnSfpn8dgfrPHkrCP68zxRwEyAAeSgDBxJ4cJCpahnkfg4j6fKVDKvS1TVsYiiuPcLmdowGsazAYeZ",
  "key3": "Z8fvn9p1jHbX1SoTXThpZNfC2fGF9sptw584wA9ifxvuigvnfL3EJeSXyvebepQP7QiQrQkHoYkv8NyGxWpDpjU",
  "key4": "2zQaGj3eR8oGgeakNZxJpyZYbiY2teBGnJkQZuJW5jsYmeWsFEAxmqwbz14USXrW1K8ijZoxD3HxcXhAESJG153W",
  "key5": "VV1GyJzeXXeav6SCgcfqZa3uLj8srGcCdUXGbuz7BD8D8iQhUP5YhcDnPD1XQFrrBprDX6p5XTYwrwEtSww55Ge",
  "key6": "2TmD3qNf43NJ7QHpQU8SGgqhNuBD1hNdxetcTMvgGCTAoHxxuk31ujG1Nrsy5UUR2sMLYnZG28J8LLSHWA1xc7vQ",
  "key7": "3PSMuCV8ZqaxNzjk5nRUNCmLreHLm2uKMf7WWXZKLqUePHZ2JEgc2uW79hKAxPDFfAm1cwftGLV3jjUhicQ32qAV",
  "key8": "29hygumMktPKTHiHTDckWZUeZN6TuJJAGsgSFBx1aZjgBQtL2QQsvGzxLtP4w8zebJmMmxHTfjkPAbFdeZh6QhzK",
  "key9": "4dL5HSbo4aV8nmAtR3gDo2ByvHvxv4SH2Qf9Q96bCddYjQLa8k5eL1Nr1toeFFVSoWU9jWZzjMhxfx1E8zgwWo9X",
  "key10": "5XrJV9rS5fue5sVfNNTPXVN1JQqpk1zL17h1SBYxE9uxg6zx5EAbNnwPZBRaqtHPQu6ayAU4pmf1zvGUnpu9T5N4",
  "key11": "5mKr3eshfXoh8bFnNRR3yhwoDC1eXxtZf5zd5pSQGywLFxkdaqyowyfVYJ3PFWp8EekPRCGp4Q2n3RWcgGZ3ZL3d",
  "key12": "43P8fZhfNCmcoR3MoVnTZ1BynK9JUixHE5CfCwTTRgzxD95rRGM7G3QiRjJ8Hky8Y1RjeiWiLrH123k4k3gR5LKm",
  "key13": "H1ujQpsrgGARmQENU838Xd5hGXa3VqkPf385MmgVvns2SnKhH3GQKt1KUiUFgKPFBBkhnWH5o5fECoasbGm4mGH",
  "key14": "qTn6ZdF6t8ZEdYSsjmxtvkgfPmUqfMX2CUuVfT7FbSZfVozYhKEAu4e3ZMypegH3tj2MMTM866DpKi7CKyarbKK",
  "key15": "EKKcXYEnSCkrdaWdcSZyvyxmtEiRb89Rpq7ZLwfQSS82vMjWLxhevMA929DpnjVKuj2opQMDPR2Sp2ePWm86E21",
  "key16": "wJMWGAvwivnAtbQkPQbEFELFhJpKZQnhn4yydEeLzHMJKscmL2ytNhJWKct1p3zyhq1L41UysmhNYue5XrMx9DH",
  "key17": "5nQhEhjYKg6WdY3zHb2qQ1JnffFU77YGXciqXs2MKyqG1uHavtF6RiMujoJDWqsTrosi3QQ3em9Tdx83orKbjxRL",
  "key18": "yfABonfANQgeqjsX3q3mggC2MxTzZyzxm8ZDbm5eybfgrgkJ7b4F7eyVyqJB36AsdBHHbqVPtPPittFFSXo9cuX",
  "key19": "3VzDvcWRk3kib5R6CEvdyrRuqSeUgwCAT9fz9mS9gVme8KC3Sb9oY6SzxHsuQZefW3LQaizwXWthZxYgfnFWwLJx",
  "key20": "3vZmZJG5HCTDbRMeDYsbpg2AFLTcCdXTwoiPF3vficbzAWmYY3yVzWdFsSRCm51KNkMJ9XHLRgELKwcMro6LBE2E",
  "key21": "4ypZmUSUVajVsSHECWHXL2EFiNbP9qYxtYgi2Q4hGZDqhpZGabkcXh6ZzrHo1RXPjXqHdak2nSeN378L1qcnxiCG",
  "key22": "33eLqFDbUFpRnhC3YjvK1KzXDfgxnjNvCJTMmiLc3Jg1A9eabvS23NB2iyPo4SmjhTbaz3QQgBZ5ZrurRyESEKUw",
  "key23": "3yEPcu9UyYBnF7q42sy2de1zfaF8dq8YvFzvGPpXQP4QBR8oxfqGuXkPn3aEY89FFJimqZfZEQmsSEk2ug5Kzsox",
  "key24": "2a8JaDYKCZwySmsccpMYpSYZrBp6LwqRvQAfswTV8dzKLsEk5sDu6H9oaDffXJuKxyLz2yC98nLzsqYZwfU9HBPt",
  "key25": "2aVhJdd6hzUKWu4turmXRBiF224gYNqXPZVxFpKqtZPm7AmGLkc1d7x5wg69BciCLC3UaSXkbibKswzcwg6YwTEV",
  "key26": "2GokaszFpMrhCp5dpzteUMkvkxqVPuBLmYxN5Vu39znWvU8Wb1f3YpSdnpnzNyisv7zkmFqeqnHL4g2Z1Tpf84wo",
  "key27": "8Rn8ofM8ubHyovmfyazL2Dx1BK4X3d3P233D3QYKXmxLHN8FuqoGxW5DFgTz5144SEtoh38BwiRPwq8GrmRWjB3",
  "key28": "QTta1vSUnUyBo5LZaGsxBBq5qFRuH5VhdanBs9EUivCfLGHvW5Snr2rgznBbMvSbvLdDxC6wqfVTYQwRo7BLtCG",
  "key29": "5omczqhSbVXGXK9pE8XqMDxmYoJCr4i2Dy5xdxYf9hpPfHYEVH2igtHruyUvf9t7ESFftZqu2vqzgTyoqcfuvvMK",
  "key30": "kcoMVefNNp9RMUUQe866Gajwq3A5x8aK6CjEExbdvohj9YFYzJpLMjU9iXV5bDdtopEcpEKS2zokNrx5qD3UX9R",
  "key31": "CkkSrhTLmTwHjkGX2dVuL2gg2wy9ErmE235e5h4CEynrrqez7t2ABaUVEKqKR15RYGnkq5MK5kjRcqeesb5MdRg",
  "key32": "YzeJMRBZfjvdGpBHYovoQQADS7372tujBVgGaveGUaiRoHESHomTAGUjdfiGjaMpTX7HDzSKY3qAUbDZEFSVN7a",
  "key33": "2AbNiWs5PzvYQGKRP4XnPcFKcp9bDsVpCKNbAYPAdzWeWCdz5jPMw6hQ8Y6HCtxKLtF6DvocGr2EwE6P8Lzx53ct",
  "key34": "2sw7hMExSaUv5Ky2exHMMxR1gofXSok3zigxxrJF5kyPphtdsvKM4sjJLjY49QQEiHBxque849h7wcCR4YhGNraA",
  "key35": "5Yh5JACoQvaJ3L96PYrG9xioYkRd65FfWiTqSKSjqxMf1xQjPj3v1jS54tQ6QsCUXGscvoEYsR8fqyj5Jy12f3tT",
  "key36": "3KEEUbtyiQdCwaHsngMAWnAUKbvfbAbw14PcGk74MEFxWzKNWpiuKtUPQvFHaCa1uRm3ScnyYzHAorkLLHJvz8Ap",
  "key37": "5w64zcBaeVYBqY657jyt8x3My5JyHSLBCGgwWVbmRMXpNisjKJM2Vs2V2AkGvx6Rcd7yZwjqotVVAux1i9KKAphy",
  "key38": "5DrjPiBAFHh9vp4HP1FDoccY3ACVtr64fqsRzrX8S35bt8uSSenhCneVWKQ6JFRZPUhivqD74biFdAzjBpuEWT3s",
  "key39": "3tQEcr9iYxkksbg2WwP1KNjtFEGzNeZaoVFyzJzsDWgVwBLsPxbbiNE6rpdXtEvtuXGb4FKHRx6cYe3BYymVRDBA",
  "key40": "2vwHN7TphvVtoZk85sx98SVuUAKwbVWP7PwzXKrSgX3quzMQdXdg8ccXJBeH132QZC7T6TBmgJKBtVZMs5EzCiY7",
  "key41": "2CxXCrCWoFe1dQ8mJSwW7Zy3J1tixd9hEUJcmkjhZrMPmaLDK9esxR1DbvgPBdsYZ6xjLunbvEfTP3eHi9VUL1NM",
  "key42": "3q2HJKMnG2Md7PsecZ6UwAd6A2N1PefK3gJ1Di7aX2wNBobh2Ct46BTWy59pBYFP2HWguztLkfnHS7EJYpVLPc8Q",
  "key43": "58sLJfGdMjQ4rs8RDNtCsiLL4kxhR3x7iX8yta4p2Nd2iqBUkH2QiYSkU2XNA6hQCPjLZvgrqKj43DepHiBhiyFs",
  "key44": "5Z9bJRWPsnypoPrcEGLp9CmtmUyieA9wMz7wTWCJ94STsgkgkKZGtCG4DYn2Z7f4UuW6vKT8U4u4YQ8YkLJhHKvL",
  "key45": "2qfD3UKAtZoAY7UK2DisewrW215n9PPEa5xjyqQg4gXB5LMNE7fFvSQeG3mZcrKhv1bG9VF4XgrEAy7DZk2zrsou",
  "key46": "e7rwZcPxkDe71wnffcAULwFpM2ESV9VFowBHF1RJUSexYX55PGvTKK23jMGgxsFwK9sjCQFqB7EeCGBayLi76Fh"
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
