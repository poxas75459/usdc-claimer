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
    "9E3vfxPFMy6sSXiVqQChwCLpwceowKuTC4X8keaTD6rYKnVEtX2QAYviv1AP4AN9wVSVxH4ecfhF2NERHLhhgH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p1iv42Curasp6KaZaZveY7QqQiHY5Qat2Pgxo8iPFFCZcsk6NoLxfcQy2vex6DJyxhFeuWAMwTV8dRKaGGMSpTU",
  "key1": "SK5hhvMB8vZVsE3hfT8pZyMzDrbk4FHSxWZUTXqW41m7UWjpny4xG8pkTJ8AAHN9nui9WpZe4jc8zcpeWaYdwCD",
  "key2": "5MWZsEW753gYJVTbAPQkshtEtarDTMAtWYcMwWtaJto1sUyZvFJVy4cJkc5HWw3CV8cuRVLZuTQcuXA4S1pqaX7P",
  "key3": "2EsQAsXL8vEJkTWGtjadiBpDb1Rozv9vH8gJ9TdK6RCvAvD1f3HG8kWVuHMEjaG5XGesu2RufMNJ74jxZZ94QS4",
  "key4": "8MFqBSZz7zE1kZytvEncdgJrFqfg4qt4nps7AWBJ3B12SBxLJgLtyDsZMLwR1ZhdLyPL1MhnFv3UgTmiiCvngsB",
  "key5": "2WKK8FGzaUG2wt6XK1d8DuBjYKUjh9W2UAHZv1sPMVv7YUSJwu91KTdVEjUpS2QVT8Rkamd7eoxy29dybRa3NXLH",
  "key6": "132V2TDZxgJPQztc5iMi9ydmSXFJNGFL9vkKWuNambKCTKYGgQQwtDkiQfXPwM21qiA9UoxKDkMVqHrqP9KiQXo",
  "key7": "337XpUQDJ2tfmohrZW9M8BdrJYP1NwrDUVPCY5wai9zGK5snR6HfcYanNVHqTt7WfmMF4dg1NNbCRLbxPJYRYb9G",
  "key8": "5z1Luhd1GzDd2xSg5NczAEZFzW9YiqcTAJ3onpdYq1Xeg8TbvxxXmgZ4k33C4TssY9WcQJGwE72RHoVUcur8sBnc",
  "key9": "2ugpszpFryCwcAvF5on7CYnNK3prchRL846FhyFGd7JyXBTe8Qmzs4w5dLqzMo9sw2m4wSeJz6pHsEK1gHxiFTtP",
  "key10": "GuP7KeYD2vmmvaFujtXQeZ2sNC1eE56QQFS8eszVqyDaxzZC9zyC2RUxNMbn5zvi1aBmV4E7haz8ZrHPpMza5hN",
  "key11": "55h4gzd29NySo44y5j5RBXHifhLM1AMisAebaKKsngbWW6SheteHGZA44G711FmKNJozqW5iydHgihybjT63FwYK",
  "key12": "213p43s7hMC4SHAF5hSar69HFGt2wx12YvaxLYyPL9QNYeoBnoKoeXRT3BKjUSPwv2h3jtrtjNTPkYttuScKSbzW",
  "key13": "3ieT8pgimUnwCsTDSKrkj8Aa2dwC7B9AaDVnM89stQjf9RwwYs1XpSTCMa54v9UtvHno9mTozvftg5f3EvhWC7dz",
  "key14": "pnE97XKb5u6MdrgKnhFjYZ4317uirA9xiG6gQHBHmZ6WPrVEqAvGimfAgJo2Bx61RrQf5cxB1tFSwBCuSdRhLCG",
  "key15": "4USf7BdLRRUsiUj51hGirMCg7CiDiUJHhLup9gv35mJFU8fU74rwzBpVEJPsvXcbYNFjozewG2U4B7fiUfwYE1Ny",
  "key16": "5qm1L5KPzAP6fWisczqh85PSCQNg1HMHykJpWeg7cFaiTsVjuqrywoAs8ZFVWZU1yjgnD3CXnpvLqyeDGqBAaHBs",
  "key17": "2tfDKKDDKLCXRrHuPSwjksTsQNq2HNycZF8fukTdDETXqTa7rt8SNuJB8bfLLtPm7zQ7NbZkMhy8Crvi2PGM9PU1",
  "key18": "aASEMXoJRFVgB5YiURgMtzQAs92JfhVbkMQLwsFYxBdeeNTJGr3h3C8rRDB8gKPi2MndiNJGhiKnfn6GprHx7A9",
  "key19": "58F2DjCgUu8qbXP4GLqLsvvobogmueo3DVsZ5FJVTKssBeibWTPXjNG4Mvy2YaC3AwCv9v7VkLMCd2o8hUW25W2f",
  "key20": "41ZaeMX29PFMssKZTRaFFgtbY8RSWqoPZoabN7kYvfZVc45eFXx775hJxQrhsFC91wgfxjbyjkxuayUm8SHctX7U",
  "key21": "4e5jua23TaKmLBzUgoTvTjk5rz9YMxC7HvaSnf9BFBFHr6KNtWnL33sWs7xcowGcgzvmXAXqfF57PvyN4LURzEnb",
  "key22": "5YmXYEccNeeJGLqa1KgrkWCoRqyoisNqoN88AcYuws5EFoxe75XVAcXqesKcKzhxQviQzup9jABSANWX6gw2kbJ6",
  "key23": "V1yQddppQCCg22hZUp52kMA5KMermHQ2X9pmH8B8TFEnmuqu7C84EvpFag6HyxquHbDXvCvS96iMkccaqrMZ5Jp",
  "key24": "2ivbLjnMxXbThb8D2vq75DJgCa6zxpJ9fX6DoMc8DfJvEJSi39McUVmFz1u6auaeoXRVUE6fg2hyxtaLzAtpDN7d",
  "key25": "3YEEFmF6LZSEC2zBNE9uJRv3CGeAto6Pm3J7DrLKYrQHQoairAgQe5464kP7kM8zB9ovcL1rU8VMLA393m24yx9f",
  "key26": "4kdiwWoRsuAxegUnstZu2yWgebrrKP6HtApe1EYgMGxYS8jxpqXgVPSEcVWap19mUsM6scvBet4sCdZGwPVVTvDj",
  "key27": "21dDeA9saCa1aHXLFaYUVKdvWoENyadtXL3ThgHCjmyAHxieJd2Rhhm1pErpETiubrSA6fCE5z3sTqYhF2741uwK",
  "key28": "bPwLFKPVHw8jH4RTKrVXM2fTiEs59dVLzoRT9NX9KUEY9XctxF2dj7DUtrknx8e5ASTTQhpCV9FAzBnRGrbe7fD",
  "key29": "2GhYzj9qsW7XuYEqtBfMZUpYKVGgffjGa9ia7prk8dELiJVCefTvMtahB4KAkp2j1Vr9UvnmfvvAZ8wGyvoUM9Rj"
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
