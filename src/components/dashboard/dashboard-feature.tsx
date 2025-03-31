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
    "3xbwtjTSnT1jyxt1txGbZPKRJm9azSFALZbm4TjhxNCPpczTksmajthbc6vdFbS5kEu6o7u8L5B9WRp2Ey63Y1W2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N8DyW9ScthRnc3H4DbX6wFXXKwiQDD2rZb93pzTfPzdGaiad3zh7XsnWMjYKnTpTsPR5C2p8deRAni75yVKGBYW",
  "key1": "3NWrTKN4H2o9W3hdx1yoxsHiKC3BFfQG1QTfaYPsuRCYMGGuiTNrEj2zTQfvJxCC1rFvDvb1K27Z6B6Rwpzusj1G",
  "key2": "3S46PVbrtTDYbCQEp7SD4VCiUi4iPgYA9RcWjAwAuikZ2djyxthJpBXErs4aEDQ9z6qTa4y1q8r69yAyXZuuufjj",
  "key3": "5ca2bacMGxgdGhtFKMGc3vr7tSHUpVvQct7PCvcRWmoxyJLqNmqWioZip3cZPtYKE2nhPis2w1qhfrdQyNZgLRps",
  "key4": "2zTc1DtnAeCoe4EUTmvwuc6g5jJhE8cgUTvesnAAFJbfrBhAh2FXjRKYk8Jo5ADQqcivXAhA3eoDEuykfcGLgRg4",
  "key5": "4DKeXsGKoScqHg3c6TpuEgz8C9JcY6Pt8tr8qihFn9PsJxiBjzxAF1MfBrABP7sty5ELgStGHWkSD2hinivVRFKg",
  "key6": "5wUESmAtQEBqZHrDnoEJFfpAxBUvPe76bZKLVcgqHEPJziqLopSbbChJpZ7iQxDgzGUSCGMLy7r2s9U6354WYunk",
  "key7": "3KbFG3fBLrxBeVors7HnUsMoogwSoCENpona2ub6N3jRjZ7qrM1Yn5BBcy7pJP8dhM6Y8ii9sWxJXEFqjwqeBK1A",
  "key8": "2nuRwP2MH1hGBcjrCYG9qgkmj1M6PxPDBbUrpHZZxoXYM39ggB9ikEgGr8Qcdda2UuLGQFdsyH6pUq6RJrWbkdky",
  "key9": "2ycsYJdWhwsYiPekUsBHBece6YBm5GxTAewTqVTEhSmYE84kEW6ztimUhqDqmE1EsbTyDe8EoeBA6yNCzZ8UZhY4",
  "key10": "4fNYfYNmZ2x3NikXrWaQiKVpJZjKY2KfkNV2bEK433bRzUfb1VjDezoebvAXmMuobD1X7Gf5UXZerJtpXi9diP6X",
  "key11": "5GvJLtUFCbBC7pm4ToBbTQuU1nRLmKHYh8RuDaEqR3wa5hs4mv8UM761Q3SKG9g9TZViKNMATjYZ3dUKZ33NsvSn",
  "key12": "59Bq9BvUm7odUYXFchDpZGPhu7zHsuv4aeP2EXCT6R2XhuaktVbmMQuTQLoqKq6jvCbN6c7u2w88DMHRWzbRcBqy",
  "key13": "2q6TsnjVKJMHakKeVJnidg4SiGGBozeS3XoY51RW1wRUJsRetTZEpKuyHbKxSrbKYz3zZGPrzmr6YdvApk43fxGA",
  "key14": "26FyGyD4RLVZFZMmg3r2R1T24uLXKXJPuw9vwesutvgWGnrvBWsT4pVyntm2rYZBh2tNr7s54K4ucBXCMDjB4wfD",
  "key15": "5YcrFtSwBNHpNZTuDHN5bExGuzt4iUXZF6UaU6F4CSYTBaTHPaYkFgqYggn8aNiURHtrbRmK7oZXYPHwp3QYDk57",
  "key16": "4uebszJGuyZ8wA68PM5axfbxEdgMVbCCH2NkefDZejbDy6PoEL73tR5Ky3FZbLq5BdRinL86g7D1tU1Z2Z9orK3",
  "key17": "4mTsTxzrfiwshL4bnGBAumkEKGpsnnwPiMkq71i3GvBFqNchTXUvBREPLM6bCCccqJu4SvfbKZDrPhie5ao6ehJx",
  "key18": "Pg83im6csXrYiLrm6s2VtQkUxGrk2QF9Q2u1zGgP2gsver83pMeEEcfvh1H6tgZrhoF9XasxfkByJB72gxhB3rj",
  "key19": "5NFiQKcL1A6qEix7wPDDmPs62H4545BkrgMMsGNHcXv8YaDiPipt4pRv3DJtq4qW4bKTGMoh6WgBT2HPzHZjJNUP",
  "key20": "5qWao7awX2SqhzHzDFvkqoS8m3ohEzsxVe9bLwqaMT4NkTC7mjAvSGVtjY6MCAadXaDYB1VkXpPbQM29q3wct4aG",
  "key21": "3RPvPcvqpsKvo4kDxBcGucoybbc7zLZZ5VHWVYQc5tjhDeCZCPkFk56bRqKe2F6XxUaCCyx81r4MN8qN95FPq5qh",
  "key22": "3qbTyEx4kB9Nbt54WxDSeuVsS64qc3udrfRtJbEW9YkY5kPvuL8aMfPY62Lqk23VgcEaR7ULZFPfRRqsugyT9v76",
  "key23": "3Eru4nekCaUsuK7jBruvW3RzDgVpyD2Cihkv2q3KZdhM2rzTYzP5XS95zZDuVNohJeThvLx6dQxEkZeDbGXp2ZMK",
  "key24": "4jWoDbT56s5yoxWRAjKwgzPtqShCDxqqQ3dSgn19G3hj6Nm522fbjx3p1RszFbJkXb67n63cNMYaxh1ckDSdakXA",
  "key25": "3JkZBgPxypqevLc9DXpiEZfDPYKFXnRBDHCvDigWV8Pyftq1JyZhqMDDwAGGLxoav6K2XBjUkG3a8GDTHXCsXv9J",
  "key26": "3SDycprMvmyMNzQ8znVbasAs7FrVs3QXRCkTfU4n7KabhFZLbvCr4eJMzn8SFagZLvxaC33ULpmqKx343JYQMuad",
  "key27": "2e4txPAkczyGw9NArfbLaoUtUoMrLYXnAkoJRGZdjEPAnf6M4HPFaRdfhDm8q3dN7trpD14GqTARNsxdMp9v8rSq",
  "key28": "4pABTopnnK2pqf4rA5WALBuVeL38ZrnWgBRv6nTzWcgMzsbHBjfxZnyNtbkd9Uennv4CGos91QV2p8MJ5Pimbpsf",
  "key29": "2iS8p9s8zXXCSKLJ9kwNA5fmUJNY4vwVTKK8HrkTpeD5b7FQeH326bgopyjQp58PYLQ8pkiPaPootm5MhbqbRB5t",
  "key30": "2B1LNttBhMrDkeawjjjZDaRCHUPj4rLHh7M9diHr6Ft4Yrj46ufKpkPonLHzeiBRShtxZmRXAkz2c9kxdr5rH6Gz",
  "key31": "4GvETeaFGVzkqdCtPXY8nAKQDEvn9748azX28z5vc9oWjaRgqopQzDMvj1Dkd5gUrqo5TNXGm151gH1gd481LkcC",
  "key32": "4f4z6nWecNC6hsvdPKJt1wQNousMNemDB1LFqQ8aHDUAZPFiYzvyiWuDexZCHDPvSPngP7TuQeMFaWpdk9DrfsXs"
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
