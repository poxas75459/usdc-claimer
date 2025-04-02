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
    "2vGj1Mm8MX29EFesZ1vmd7MKVugVA46xxSEKGhxLuFgKPU41p5paU1d7UCiW7PyE5rH9FPiJoN56jVhBQy6RG7mq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kWZDnNuKJUCVu8UEqEGyJKtg4naVfPiiVS9wHqJiZ4NQg5UwDmiMssa4kyerwmKgNPyowVY7Nh9WKNWdk2yDHzo",
  "key1": "mGa38dHRNx8muxdLTAV8N4NNSYELCJutc27QRdTxazUZt9KSRrbgrDVckwkwtgkSgJGyhpz9tB78znAJu14RtsM",
  "key2": "4TfCpEr81ezkoAsBTFhdP3E8Hk7qgWYgLFVNfTkZ64vpcZm9qgie3d9UCi9AhivnfMwaMjiqhHGCvnMaruwvs4go",
  "key3": "5L7m4fC1UmnKGYF9eXSm7enYr7EAFwSNey8Pv4SnKfayrXB2E72xjPfFQmamXfq4xdq1M52rRy9EcyR235KbdRGW",
  "key4": "2HS5h7yr2yk9sGwmEvodJkJbUfPBCy6UjNnNEc5VuvFaxf66ZVQkQcMowRUUu9TPqX92idyevNz6uxf8RusHHMBJ",
  "key5": "3rbtibzUx4pixJUGqzB1rawKsyqwHgQyRdg9W3SYsDiCPHg5BH42ev78uLFAvBf1Q9hydN65G7NLUGj3uQtCAyfq",
  "key6": "27SiAG6XFfmFTe6upgUcGK8izyHUYGYQYrrx6CxsuVAnMf42RKQ659yybo4taoMmFbrtSa6GTvABNQx8ii8Ftv4N",
  "key7": "5VbtB7dWjCdnPEBidFgHPDaMLyPZVAoYxyVmpYuhCKQrbL8RXfRjupVCh4sz1A3g1sxDEDRRFjE719tWyMSbYVem",
  "key8": "fc4DzV7FVQe5L78ZXbwVEaRPgMrZMH97msB2QTyVqFxNSUuJ5w5ZHFaWqDLLLyb8QTrUSLhSvSHZE75PvViZ1G6",
  "key9": "FqqCNjaHnf7JVyka7cs6jNd2H7PX36S5cPUpgVnNi72ef23JtXHsr853PojRGAXXXsm4sHp3dAHzrsev1ijDpUN",
  "key10": "2uVCobamqpVWFjkwA2ZcTZ3vUPZTvvGtkZhPzq1aZYnXEWdyGhaunDH1BSMaDgB1HKV2e8QRHa6mCjGpBzNV42qG",
  "key11": "3izrTHRSK2V6QXJQbE8jzXA2NDhrrMwyhc93vwxydRz56S85ij4ZU14Su54mNiyHPWEw4KKjmaJ2LnzWydXdhTHT",
  "key12": "44djpGuzDa4HTVECtPoQNsTgZny1qXU4BbE4nMQUUSwQKvYnBUkt8DCMvYRL8T1EMWtYX5SV8xjMBhyHtroWFA5q",
  "key13": "V1cosGtcpMMxhbVJZntdn5Qh6W5VoTmpNR2q16t3Rs5yHU4pWLuYu5BshUfgbkuPeSWtUpG9LGm7FHk9XuXjYby",
  "key14": "4oFTcyeS5JtG4ZtSKz4doRyjNNR47v2dmERRSk7zWCNAcvmxmrJfR5cAYSHrULCbnu7Bw4Qi19qAKj4YhK5hxDDt",
  "key15": "2xCCFq4fE9NedyeSweBoanYDc9s7jNUwyUyJ42CxjzaYnNomDMbbmtWSTRqaAchgMjEgf4JRkFyBekbpH5nq7zh9",
  "key16": "5w8NxMLKYT3oaUpKfSkWHhwhdJ6Y8t9vNQnQUjhGS63fuzf2j8DFJpQRfA1JZMzg8RD9mHCFgmMwhFkPabckSh4J",
  "key17": "AwXQpmvdmTyzYc4VcyUfzSwCshTgaaA8SQ3h7PwrvK7kRvF5Xe7xjHAbwRca9vwhxbu3vLbbXwDwcSE5VaSURKV",
  "key18": "45KT8UKHYLppSTez941f6PxPmuS5a78VSgsPGyeNQpnyNAKjyQa1BN2nmZUuw2bvXL61kK2PXqM9fzJAD1bVQ2Qr",
  "key19": "5VcdH6iJGPybwsmUAThfJWFFr5H9Nn5giSQh6rEeQEzQMnpGYVy42m89EeUdbtox21BDfmX81A23DKCZZgvW3nv7",
  "key20": "4VFg33jrjeh7L1tZzzg48ave9MVxQbmoPWeWYtjno6oEEtj6iQDVoHvQ2xzz8XFQJv5skMVNQVUzYHGxoHbHQbjZ",
  "key21": "2E41K6q3T18dJSgDFpuiF5u2exYFpcsu5BKy28PFnTTD4QSPjB9gZx3bKnmwZW21jGkdaLFG9KqudUkvZHz4mqeE",
  "key22": "5qfX5NrwrztrBss4MARFKe31WqZzNN65XMSHB2y8P42z4Y51uYeqCJsNRMpo7sTKDPUoA6eKk7rrcc5Z15Sc2PuP",
  "key23": "SrTjFGnaXRNwB6oZ6pwBzofuiMu1fL3J8R2NXZoqvo7QyRZCzafTE94DtVuTp7GLXsSda9yzapQFhWKEoSdUBZg",
  "key24": "z1b8qbSpQfKFc2spKZKmZ1sRU3inhokzzHWZVCVQMp6Ax9sEzUCZafw4rGRbRae2RZpd3d6o2DtEry55Zi4yUL8",
  "key25": "ihRbkBLN23b9WdrP4wjjS5nzCmmmLXovmbDdDUGR9bSFG4qe1eHiSgXYqUS1sAAWhvd88ytrYkMe29Q8una8p1c",
  "key26": "5Rewm8oq3ZTuEMrz2ui7nd79auf5ViqQUQNMuPFhsmtx6FgWh7FK66YDYiVchTqgS6BC43CccY2wCJAPCHea2Usb",
  "key27": "39fJYatckmfK1y9fXad4YUzpffJmFsSsa1ibSjEmGe1RTmnHdzUNdsP1xTh8dkYtsVGi12vVapFkXZ91HEL5HYkx",
  "key28": "4HPj2uXinJZsAvxB69jVnFZNMVMScxo4bptCRQiTotsikkVJsKFjfRLQXZMWrFHB5GEpYoovceYNmKLdVaaAGPPs",
  "key29": "483ZDFNsCqnTApanj1Cao9AJ7UTCfyChq21mFTdGdCmsrFokXNhfKiBQBkkusgUgm28bX9EgPTSXS1KvZ9JfpxmD",
  "key30": "2oayfrW7XvyrjmBNT1v81NGViXK87phGLuxz3d2BZTvYMZgd5DycqBgSziurWJzxgNGJGw7RufNdh7AwbpMDZkEb",
  "key31": "sQHw6zFnjJY49kzwM2u7CjcmSurfr9BCdAyVhgshsJTWmoCTUW4682PeY27m5dR9ndcEgLAaj8kjY1ACw65KV24",
  "key32": "34bkb7PvFWb36fZuPn1dQF23wMWLG7hg3LkefHRBxJR6ZCpyeimfTQdp7ifQdEjSxna49ot54XD9bNw6j6H6CM3D",
  "key33": "3rYeLNeK9pLtsserQAkVa2b1XTF1N8tmcPsTSWJw6ChFyXRHkB7AdKuqFiwiVE9TEoRNbhXfNFSxFS212NTabn7r",
  "key34": "4srB1NL1jHMncEWDECi9mY6gpPP9ZwVuZMfUhXQ2u4Dhvk65nA1BYSe42pMJFgywtJT1guaakCm1chdYKU2j5WGq",
  "key35": "2EgdBbutdNEWSSPHUhK3C9dVrGxmju96qRG1kiZUC8Raf4hmNYuPDewdnazYTDy2qd399TMLougw6rrkfwhR4qvB"
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
