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
    "4QW82As2QjT1dKLCSWRuZTgZBu2BfFjthApwbqh9vdQXGhHeXg38izGV11vZtFqjXGaGED3ybD6gEKcaTyi2zsBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8s6rmUn5P997ivZhCmZg5MypspYst1NRkGLBjCqiu9urpeayNihinU8XUR3HRnUNnBGdXnAwoo32Apb6pk9ARsk",
  "key1": "PPGqZtX1WP7TSh91i7RNV7S14RcFZGSuPbjHgvuMwXkEURCmUfwVmcsKUiL439VXiEbPgDgyeSxFhaeYCQ9Fzqi",
  "key2": "42WWKjZ16kL9A8FohvfuJVuVSD5cUf4Fi3yXimdwMD9o5Nii3UWE42AJfre6uETG9JsJ2uf9vN6sdjRzPUs3uqrP",
  "key3": "4wZwcQXsGGZrfe3vL2muAncitc3SwDQbZSxqnfGRNb4hytN1Z4PGCmD2zy771LGamUHULWXRm7o1bH7xhyvVZBri",
  "key4": "xBCV98S2aL4ohBmsLWMWmh862jubFjCkWLSrcWAjCGkRu54EujTGwt5QTYmptXR3zKvQaHvVd3bDNJng89Uatgu",
  "key5": "2axoGRpGdeJ9spPvFVTLLZi887d1UoWLCYJNxXEp1gtZg318VGKemjRYUebMzovbfPtws7StkXUgeofSZSiM5tka",
  "key6": "4R3KtsLBFFSsiQHWnAKQz3ngz5p5SXD4F1sUGG37teEnmuW4aGyQqTJmiubQygjTht2R4ZmMGGiwarw75EXN8G3j",
  "key7": "3KXhziCjCXPfjwewz92ehkFtgTz53aaga5ds8BLKpN6SdKfwYropvBeJVpzAMsReYy42aFM7aQSQWAvQ9LmYNB1r",
  "key8": "M6fMg6QP5EyvGytUeqZhU8XS9gjrG2CKF7M7FASF2XTvu3aALvN8Wr4u6uffdDncaMra7dauRTcwNeoNrkY7xvE",
  "key9": "BrXhZBeUwdpfcZXyv3qC9LaAQPxfoJaYLRu7X3ZDzPWNFmRxn8nmMGQNutn6KC8GWoCPu32ABXfGoNESfmb6GyQ",
  "key10": "4AMT25gk4bGb74VuBsobjvvjyU85GNaKgVvWvR4G5E72SEeJEBgZochEVoHQXYARc9CLZZosczDid3rQfe58vpzC",
  "key11": "2DPBh4XUyxuAEpRNmSDt4ekWCWdCwmt2N33sEHG4S7WYCaeMrUP8Sq5WSpgh5ZtSfAVE386DTgzc6obavDeXDeDd",
  "key12": "2zAjKumLC38hDTWABipTU4XoiUAEv798zkHcPcQ8DQCZqxtsdYPQ4zcHf4b6jcH4QDA15LzoyEUh6t4n4b6F3iN",
  "key13": "uBUZVAyK84YMSUjxBpMWhG3a6561bAjLBbEomWVDUzJiYF52HkVha5XvqnDpBnyzHshGLdjKMNYaU2B79GfsjZS",
  "key14": "GQsP2JvS77hY4rJdPTSmCsYUeY261mWWsqCcdBcYGwEbwf1PvAQhjiCgsVdzGqKWc24X4oqzxjW1zMSbDb657cf",
  "key15": "26NPTSQ7bbmx5S9NP6LwnwZD7yLxARW588bQL86iffkEj3Z7g5m6wF4qGWmxKqo8wq7AXYoNnhqYS2KGLh1E4QRm",
  "key16": "4CyHNsjRUyFVpxPQkFej8Let5MkoFCJAF7KvfNKGU2x8kAfBW936BYGQz32CggNT6ud3LzCZWjN9LByaYBDhXZ96",
  "key17": "3QaWc2ASypFHMP6bUCqEAAhg72yj6XGr1kZXP2Gc7ifiimx9bEgtRkyQQjC93gQQhhnvLJ8RVnRsjbJhPLirfP74",
  "key18": "2H75zAc6XjrAnSwrrb3PHUPz3f6KBiwqxsT5XmumFXAih9hZWurdeUdBJsaTpYzvHXFHDojRNAt6WAt9i8jzjd5B",
  "key19": "33yYLrLJjZGqbaksBrcpJYtnqKa7puiZTi47mwSR8Q19EoF48b4qnzaZMxG6gz7gzeL8aqbDLHVVFTLaAS59iZqA",
  "key20": "2Y1euNNBawrxBeFZypeamLxmJAmg9Umcj3s8dNi8hKcLWK2Sw5jKGTYKXPpH6VvpN2PfJtXh28JjgtDA8b9mdL4t",
  "key21": "3zZLF2S9Z3dJWwxNUeP7ZN8jvQrJwEnh28Pv1isPRJauM5rzMBxSdHxDTSaxTTkg1HYgXULMSuiqpywES42BMxiJ",
  "key22": "523BXnFPdCRqJ2akcYABiiJASfCnMGYvem7G6g8VSrHnZj1H2VFSuNdrfdCCb3UyttoFDin2gWjpE3skG33ecd46",
  "key23": "2g7bNqK7rmYfvPpiLQBoKTnPMDTQCYqN46Y7vrTifcC3HWDUeMxBavKXxd5a3hRuVBuVPZcPS3wDQFeFSaUCh3dr",
  "key24": "66aSgsZ2RQPwmZB9fgCNhoRWkYV5RYJaqdxn9Pz12dM5Lx2td1nkGLdPV6RsrF7turTQFSHxPSgpfAWzSWFcPW8Q",
  "key25": "81q4Gv17jGiiDjBABwgZForiUf8aqQ6xaUfRHzTNLHvGoPMYhmdwHb7eVjg2KYjy44wMMn8LtqLtRc2QZzwWTPS",
  "key26": "4k6N1vbCg8FVTzh61mUvCzubCRgn4pG2acba1Lskc5omrQUUe3zy4xqWyMXJ1zPB8xwx2s7JgDAiztfugQBnQmBx",
  "key27": "2Yy29BSHGHHphrDtSwBPSJYYkXHdnECaPfr1nm88URH1hZvoxomgsEneD6GYMCmdHbDNpb16Kfa9aJ1SXM77CNU5",
  "key28": "65ctUpS5LE9hzrnbNwZuK9FKxECaSM7AdGsZsGVXSriB4THRy2ivqmdZyRdV6FcKK9EM6mgReNcdHywt73vV2UqS",
  "key29": "3FudsGJHkNdwM5zuxPrwD7AZNYRDDFWuT8c3SHgUJighPNrCfNLvxaJXqmUFUsu1XbQfJpwMBFqAEWUUMMek5aaj",
  "key30": "5u7pHfJrgjRjpDVQ9xzGKGpN9DcWhtPeX7UkWzcJb7SBUTJGgLMGYSSenBsGA2GpPCVRazX4bmqBMMY91EHTfW2K",
  "key31": "3gkAVP5jDw7DM6NEuQk9QDNhHKoH1oTxEpva6AvT8whX94UPRPz6DmFzPse1f32dKpaK5AGvt7FCAhjPZC6UmYrk",
  "key32": "5J2UPzeGzw57qLDX4WTwoennuuy2nh89tzQhXbC4qw4zqGCsy9sPX5e8M8K8LW1zUyv955VECJoVPE2WQznK6dma",
  "key33": "23YTmxuxyuz1afsGDcjqFqZVJJY9UMSuDKwzpe3C6TXx8n1Sq3koYSXUfv4EjAUvEc1wPkYyoPUVxkYWQPKv7bzV",
  "key34": "3Ppt5Pmy6et9mGdmja1Y2i13stMto2rKZfyAoxv3AZuhC2jjciduogsdG35A8mHcJ1szkysaugeuFLpcuf6pSQCJ",
  "key35": "4cTmsSJ96HEjkzsCtNQntjULCzNm2Ntk999dDtMy5EpmQRvfevYQ2wrAaBQ2G1kBopdrLE1EnQxnhtSaGhmkFDjJ",
  "key36": "5SLC9s7BXFikQWp4AKhj5zMa8RWrYNGZ2s55xrRsWc8DtPSanChEhZPEwxQ8Th3C7H6iLu2ZB4aiEkyyyQQWpbL3",
  "key37": "GTmjzPqyRw123TAZRPoiFxhwqh1cXVxsRNbZLr3UZJZkoZwJqT1TxY6ed5M1eqBwiaveRectyh64vk8zvkArFAf",
  "key38": "3aeuW6yfT68ycLHdCSy2F2pWqS59ka8SAf3td3579foCz6BNDhX8oTbMbttkSPT6pfwxTmBeMGf5YeRDi7gARCrq"
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
