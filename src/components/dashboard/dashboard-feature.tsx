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
    "3twKSF4Di8iCa1tUyqbowcCuSenYScdehFZszjDZjKuqxDpuY8LTeRoGajMpTDssRQSwCdacKLnfbMD8o7GiQV8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4byzFvZ5jmBcuDyUeZGg2hB3QDx49vfdq55wpJW2DUZsqK98YEZeLXdvL3DEnXgLRBX6oDtcTjB2B679jWtrvaHz",
  "key1": "3aSnujjYWEH7YGYWvzkqFeiYyvesgFByH4dH389B9Y1hretXcm4MwsXQsZ8xGSsJ331rkLUUEBUBoyT7bhck4Ggf",
  "key2": "4eqmr5ZTY8vDqWMaYAgLk2Awef6LSqmT1RrzorwbeJACKngnnds51MZPuVg6uXanyvncZMTpsteQVrVBj83K5epe",
  "key3": "5J4DKDa2QnTT7eZHPYKW2mwThadjpyGDxxF2TfaoiQk4wu2w27nJePzWzYFJmucu3PYGqELBZ4enmsA3XaZb5NDg",
  "key4": "3gr55gotSPpmhkyXDHCceDQjBQwVcbLgDDX3wX9QRRk5FUkQcbxin5K2YiwwBjJt5LtyaFFV2Jjaq7NdtB35uGY2",
  "key5": "4L31MjXdMZh3fHqv7WvAdF3V9wpWFTzhJcoQGwaivDeQ4A9GxfoZmi3YoKG488kQsVND8VBCYkvzkMkmWcoysfvD",
  "key6": "2sGC2J1NrHArdWb8qDVfexzvQSa8QiDxWJhKNtTjxbVgHzZ2pQLWMjBVMZAdUf8XazMXrZKezn2qqwD2xX6ysp8C",
  "key7": "5ybKJMhrzbmdHNwtFT87XJGmj3DjcQtDyB5pov2DyptHsnEmAo4bNmVuyDUpSas4qcDbJivBSVfTo8ucemdJVAbA",
  "key8": "5M2usMjHnUZPKRSUU3ZEVK9ewAUoRefKZgb2hjP3bNTD3it68txXTPV2SimjFuLDiXrYoYtpVcB6EiZN6oPbUiCj",
  "key9": "4oZsaZnKxGhi81s1zNJxmfdRdh9jfa6r2Bn79hS4rEeKpkPUzBpKxdbn2YN19uxU7ZHJb3BQNQGqiicSwfQ7GARL",
  "key10": "2JpsjXyvPEdUYskUxpMvTchS7pQngeqyftZittcb8DRbZVBgZa1fkwEph8ycDeKdMmNV72b5oqqyiouMyWHHTpaq",
  "key11": "2rThFRVAQoCQ4ibQCoZriwtZctVQMS3bTiYdF3wamFRA4ppCwg91CCUzxmJwMR8NB1gtRNdwgfk7iKCQvuX4fNER",
  "key12": "36katsibpvLQ9QmxN5MUWTwGUDchDpvxuWQMkytBsYY7wXTopMTpCNe8aVJVJTfw7WWeSvwyPMQFoByctTcbo2fi",
  "key13": "3Muj4HPsV25FwfgyYf53VbVoLPByCiYhWuLio6b3MKSL8xFpiniNgPKASpDMFKzbgrA7m8jDDJBuRZSGrDMXZZef",
  "key14": "5h6Gcky4wrEQxihJjL9VdNmH5BBN433FQXkZRLDpSotHrE3g3AFYSSXz8uawqgbD8wJ3NHpD47snwD3b1M2yUd4k",
  "key15": "2CTroJUtDFpwfZMWLBUouGmxMnV1bTXtDb8N3cKQ7jFcmYwMRcHVDWyR5xM7KF6bjLhgmJzygBRrJkCTqxUm9E4T",
  "key16": "2KGga42fCxUKPYx5Z8oSYgNHMmv7hrvJqnEK4yjEETP5kbQJtNBSwcL5qTgbJ9gR8quWcCfDdAgWVsVXMLLBYEDd",
  "key17": "5zqZKsmmZ2wAXbdDLWjjU6Q6R181HjudSxjzfSgnPzkrU4jsVKi3ZtWkXC5bUdwfakWZFoGooCKuSkBygtJhnsDQ",
  "key18": "3sRyhVQwNrsDkg9ido8qQp7hf1khDuSg7AkntwaMddutwouEkohMnV7sRs4CPnfvrSg9ffTB1A9MhfSHd8XHoeuJ",
  "key19": "2JVSdcTPAzsjQQnd2GcZY3tHRDzxsMEWdruFmxHHqAYSLYAQjKcU8z4bW3o9kcW7ZYhzpC4ReH1DiM1QegyNs7WZ",
  "key20": "4ruWo1XEoJp9FBjj4bt3q3sscWyZsG7KdHnEXiS9BSQazZc9SjmnoZR84Xv6dg1VR83VSf4xLErCWB3s47pDS1QH",
  "key21": "5NiJPNGRPgr2p5EHHDM8PQ2smUCptthv7fycvkBSD9uLHUEvSSwNXSV9cMKMhcHRnJhbYh6A4wwEmhZRWA4Ybgt2",
  "key22": "2Th1q5Bvia4EFBLGd2YRwzwzXBsFNW59Ly1UY5BqD7XTQFRkv4icqNV3iFZH4KhoPgtaPADmb3zykH2Xp7ZuqoXs",
  "key23": "51Bfh34vAN5qq31SaEfkG99kGBqCR8QPdYdm1h4BRTtg8crscng1Tb73L3R9eoMurqiAAmh693ZZrxDABU2qxWU3",
  "key24": "5yCcUw6ZP8BoEFqCmA2DGD3pvYBDgdFpxU7v79xrg4qU28yzdv6kZPa6KJQBK7MycD7WCcUrQUMYczd62xvDMvsQ",
  "key25": "4AoSse76oUDzTnzKZ77Hrnqogy5v8SS9Bx6yFriqXcGkMigLfrMxi66rHo6NMsfYBem7QueGWzBJZ49zgGN4YjoL",
  "key26": "2pe7mmmtBTPfdbDdoZ2E3VJ9Jw5LYNZ3hzMcgua1QCvsfQfMimc1mLZdhAaiPbwaenp5DJgXeRt1vsWf3rFa4SwT",
  "key27": "4XXYFR3iTyssiAY66aGAd3Xz5wdF3ArFEKFXzEm1FjHGB8nSH83453YCKxLN2iwJa5MEJTyCwrHiEy1nGAVP9BWq"
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
