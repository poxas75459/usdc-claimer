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
    "2533SFz7PczkMxmPqsPJajsFqm9pBuNDQ57PhtgPq2kazsEys1MSiyEK8hzumkvNn7zTebcCzJUB9MMh6kGQutxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ArTNHiyMFrkMenBtQKUy1KDQ23mqkzLn4G83ELoiQDjL5o4EbqopK4q5HnXhcRPu2m8JffVxuj3JQn5EDgXhjPo",
  "key1": "5Qw781yV4hySgcwSJrWMRb4rcNYVofJU9UeZUwJe8jgAq6yPe4t6v4Q2TVstUdyCTDMvoiM6a5TxpRt4vGcojqM",
  "key2": "423WGYGgkT2mgBKNMUWogydDGeTAww5wwfx46ht7X2NW2BtAn912HrVsbeAPdAeoiWgpC1518acej6Ly13zDWevn",
  "key3": "4qL2P51cJWeQzUqMNi5A9AVs3fPKUae9bw4mx1c987UzLqHKLLM5Au5qAQ8YGXYdqo4QqpocFsSV3gecQJnhgenS",
  "key4": "5H42coEFEhprMVxx8nTMPfXvPAF44EUvgFXdry4acSJGvXn2Msp8jcEUc9Ya7mau337hdpVeFHnXiKfgJkddnv4m",
  "key5": "25Cp3uKHJsZcLLHL783zSb53a6Mfz3XU5k853HwTWQWZcag6NsBD2QN9RLxyxiDTHco4DC8oVfuxVXbykyHFJpUz",
  "key6": "5yo7r1aKHDETw5ioXBoQuLsjWsFaVdhEFTGtGndvGBZm5PYR14kBWEmHqhZmwtT8LaK2QtUzfMF2wmPCwz3sr1yn",
  "key7": "3KdjMnrVuXssX7WuswfYq9GD37q3FEMwjqWALAr8NYARCS1SwqbvBhoP692RSZUtnyQf4R81bpvK5SCwwpSHQca1",
  "key8": "4dCu1Y5qPx2scUUVdmJYaH3DGHdc5svnatVgEUvPzE6CyG97MmZXueFbL4dikeiQoUMhMwiB8qGBAgnT2T7BDRMx",
  "key9": "LNWn4Vr2mnq2D1nFAvgoshPpVRU4WHkGoAbVX6Gk2fm1bUf4BZLBrsT4Ai8bKVn7DKeYAmTQDmeWFd5gQjAzsQQ",
  "key10": "4GerL7VXRY2gZ414Deg7G52nSQ1FqyunnwaEexhCNFigcB2FLrdxgEyv9Jr6yGz3jBemKXHjxJ9kesM1K9tr5j5U",
  "key11": "3FoyuAwjT6EkV1TCdQ2a3HLfm3nuoC4DSF4rYLdw28Lv3tM5wNyZmquP8mxhmUfApVYJNW1VSZqRJTuJw8Kb1RDc",
  "key12": "3TY6WDQvCWu1AHancGV6Jc2KCcL54HqvWC3UGV87sbty2g61LJYJWVzFwDfzVSpGipVS4Bw3ZARRtMRgGXsPLj58",
  "key13": "49ppQD7ZoPtMcYX6Udhke7ZF4Tg74KijeiR7bZmn3YuT6EKYenKm2QhTtNvX4A5mnwPiCU63MoQhLs2UGsCCfApM",
  "key14": "33ZPR5geXeQ6kgfJfo89ooeeSweFCJDwL3VSe8pRYwX7bFH81zQBFxyLeUCw5wHtfJwaNVk4rwYLeuj29RSaWKjd",
  "key15": "4nMrapwQg8kQqtcruc17CpRHK2uUzq7Rh3r24E7w2ZHT6dZgCce1URR26gxLMdUu1BjdhuGKJhfxUZf2dBWim2Sv",
  "key16": "45C28kCSCMXRcPZvmCJ2XZhd95X7tKbR4cwqujDsy6xxyTBv9zXjiWPfkLfDjd9HLi7eJZTbvm6R9EEq7jMs6Pty",
  "key17": "T6M21y1KSxDPhHikJKvZXEEgNkpcGSct5tsixokN6z8yAavqpAQ5NiPqXZm3uWKntTRdgph8LwN5ffxUoKvXrXf",
  "key18": "446Ju2Fg1CWdzPaAAG7xRWVo8EbAW9ZiDeGCxUkLWn34jvgbSEk1tNT6SzRT2SBeRCUnS5Lwf3NaMSjBUPZu2BBY",
  "key19": "Sqos76YDcEWpvVgJV3wKPXaiGFBVYMGdGnH4tvqskMkwD6bYZWSumrSdbwo3PZRczBrLCz7DMRDgvGnD5dpi5Dw",
  "key20": "3U1St9vbF1pCJnh5j7yLPNBMKi8HjgfeQuR6cbuZLzZkVs9fGQXHS5NNY2jJtWSxE9WmFM2nzxQ79sNsSMWrxxHe",
  "key21": "5wMCVxwk4wkcWQMkXLVqwSgUw1RDnmmN3NmM5MJf9ngYtCiqXpAMYGMH8SRf9bUqmVucPhE9GsmiEukRjEMb9Bs4",
  "key22": "rBqEHqetcbV25LzQVXqkdiHjLmsoor22iybrfULjM53BaehSfYWXTzVCziLXSsPrre12Gf4ei9zbMRTmosdTgr1",
  "key23": "2BXXwtkd5zQpwzuPbZ4nuFCXbGCt7xoCZ4utWo8A3ugbK713aFvLpmmpC7bsjz5XA3TgxfvVxkWL63vuTzY95Sz7",
  "key24": "4QDK3yeCeGPKapFaNKv8H4ZDuCC99Nyxu4TfJyxexVHwAEBa8buGkZvNnzaApJaEon5V9CUY8MRh2S7c1yFkttyj",
  "key25": "5HqXr6674DhAGuFCLbUwnufkpNVJG5RBPyrvyJB635C13Stycode6BpNM5nDXnRqkUtjfGJrfvyubNcdfRJqYFwe"
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
