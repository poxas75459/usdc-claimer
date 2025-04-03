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
    "2agCJ9bJtjuoZy4WCyt33De2RQnTJtqgMnPEeAuLiRSDCvhhAKL9cSCav988A3nwPivnHme3VS6Si8Cx8EJr6MBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ST1o5sSHQ6pJqHKzi1zBb5sMwkLh2fRKa5YCeEvKhQTa3r4YLpPRa5vwaKzk4MKACUJB9hxL7o1YkZoF8P2khtF",
  "key1": "QBDS6cHQtoEZNUEZwtjmQfYd3DfuLGLHUc2ofDCibEKevnHSYVat8ZTsFHhT2CNKqDiuJpuieCDeL12S4x8wst3",
  "key2": "5VjLH1wTvA148twKH4jsKNxqXumqpAvHD4Ett6eG8y2BNWhDqTTEzTJaZgpT2yn3ENp5pMmUxg38jZKsf8D2CSEY",
  "key3": "2r2rzLyYXyv5Qb1ZNWB1rawjWp9PaHbSP354QwkH4UyKFjGeVHm7Q8UfPdJP8oXQV2Wz5QTiwizc6SJjdnWFZB6n",
  "key4": "3wNm2yf8Br9E8bQb2WU5ztHQ1jqoCmKwTTEBgf4DBRnyfnBkTjqKuMZpsLgbCqUfUWnSsoDTC1b1Z5DbYtMxWs9E",
  "key5": "65D5648kKm58PaLj9fLwk7cSUnSSL4cYz6w3NVJNPtN8zbFZFZYdAcHwxzyU5VoNvWmALTNYNGRiGzoGVesM3Uzb",
  "key6": "2yBdaS1e3QrXdpS93aFZYiV9ykeGFJxUoEqx9xANtsFKS6TtDu8yg7RAvKpFdEXeuzTNLPzrKkvnSD5KWK24ZDPd",
  "key7": "4V2JKqWSaRFQyuJUsLyxmWoxx8tsbCo2g5G44W72jfx1kdh13gjKEZ27G2QqTZahQ1F5ehhtkDs7qJPLoELg2o2p",
  "key8": "EnrF1Av7qxphvgX6CWdiKdKnvePf4wxGQRkWQiGjpZEy6vMUt97P8u6ceFDJF9w1JLb4Xaqo8vqKbJcqgjnnJtF",
  "key9": "5pmfzrphMhQJvDxXckQoQ6pKFaUAw1ha6dWfVQx3Q2Tk2WYxJoiBLhJJ4PAyCZuRwwg9S3UGaW2yt41a2frQawX4",
  "key10": "3dbFewgzrp5BppBJ8svyaziAjdszPPoNEPFEmQVrcGDVoHyQh1Ju71yzuTm7dtaye17ZxjvmWcGPSoqQMuoUu8V7",
  "key11": "3gk4UoiiE5KarxUjH8G6uQZzJvBuiDbvEsW1UWTs7D1jHVbrK4At2sH21NnJR2orijdsxkUkvrq3k7baLdsFgRHb",
  "key12": "2QhZ4rJoYDNxnW9vs1gLgeZUhfA3ATvapixx1FV8wR1XDMhu7ENDVBc7RzPAUTRdRpKMKXQASDco1gsKCa2t1zur",
  "key13": "3DCaKJbyxzAb5TQp2tT8TeTardnBJMwQijYHR9aaHyWhFLypSxbKChffRDEhQU1iwFfecsbYGMk11UitXitdG9jY",
  "key14": "37RGqdNmeYzpvpEkqAFb1aJqdUpqb1LfmNnqCWoZXzCefnHJQVVusMthLtUe5GXbyJazKp6TYrXFnJ4qP9163PhG",
  "key15": "4FhqZqRiqxPydNmFZkQJjHTq8xonNgeqe8tgQhfN9fU2aAR4FSfFWrq2cxd695T6DgAMMuY21se9hWozcSADZwja",
  "key16": "3XmeZsNR8otHo5ygiybTHGQet4mMkPLmtrRikNrazmURvTeRSBwZNL2yaJAaMorCSfAQGdZNPgj1RStkMLQrcWoj",
  "key17": "4EoSbpDvZ17E4DY6Z1TWQaBen7euwzvePsdYK4gwEUnxMJ9kmowt8FnJFj7aL8MnQMmP7KL5gkHLYgM7FnHG44ED",
  "key18": "3vrbssCh7rxnwp9Qy4SkDr9yJu5mrDihdy124P1nqTJ1mayJZBe7Gh7ThmiTRBtsWCipCGSVxo83EaMEHdpSdUeU",
  "key19": "5Xojg7mpHKo9SkcGiKgVBoZCEmSdQ3ihZt8Yvjuu4yBAkiML26gtuRZjVG3gjdQ8SMZdzRcrMayGfPSqY5A1sHAc",
  "key20": "59CguGost9JiFAsygn6hYQ9ay6djv3rwTpDe5tBWqjzFXMC25a86ZYq3ucgCj7Z9e6GqvqizkD3PkWvYBq8WRKeJ",
  "key21": "3DVBB3QvZTKLz4BBzCwcbJvQkoh5S64C2EZbsvuSCXpZrnP1wqREpRkXq85GiH9GjtYVgNY7ms47CrdQchiMaWMV",
  "key22": "SNLwSYwu7SAZrnr2zhc9tHFzgj8tx4JNdVJub11TP8GSXCvnFdeLj1fUwvEvvGjHRo6m3Z2XF16Wx9fWeJ2Tdz2",
  "key23": "3aBDRXunVzSMnSQgZqawrtrwoWZdZ73qLXr9k3pAWHk6CF1B99Pcd57KTtxCezDGzk8GqF71FAcZVpgZzp56GMYc",
  "key24": "2hpSq6nVh3C6ZWaeZcaZFqGWFSxDBCsH466LqGCzuiCoxauAm1GWk2d5xT7A89h2x1BvTyCsiTTV8hbBMTzHo2w2",
  "key25": "264SrYkcsnp48MKEkYzTUBrUQmQ2wgn9hywJzJAwEgSrwrjpYNkSMTAQyE1BvMpr6pH3NVHELC7x3cULZiTqyox7"
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
