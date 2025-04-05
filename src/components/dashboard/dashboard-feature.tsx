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
    "3EjWYp5kV1yCB7C6zJigndKbTBWxEFgxhA8bNx47MpV1Ft1ifPcayPAUX5R92J7CdQrZzDVPGK331csfhjKN6JfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pvZzddhzCDzX8mNzJV6JV2aBDvCG8cWHncTmx3iWKLAvm7f4patkdfwVMeWJfuNWiCMuon3LbsRX3z9maQKrz2V",
  "key1": "3ABNKmVZ41vKyDpigRAxjhfCux79T3H7qvYxhSGDuuC36HPdXVNufFgVQPboW9uV5N7RUiP5bqrjxL9SdKZhxnQY",
  "key2": "5TwcdzrcfAKLrRB1vKcXD3YgbQKvD8B2EhUDdnviS8yrEJTcqXVM71cis6fC1bhpM9bwNJKbFNivCRDM3o48N4Xq",
  "key3": "bZTgMamRcBwaDfAjajRz94cgCvFD1hKeeetNF6uyx3kAZaWPy7Ec5gFBEbVa9AhHKg5doUTA3SgpnwpwCDPkEkt",
  "key4": "4R7bC9HEiDgppDNRHurczkGM9Ucmaim2ucDqAZjgxh8XSPt7sEGFqnHrs9QvGQCxfGhASddBNQZBhHsDGK41EcVM",
  "key5": "2Enopef8MdsA8UdEvtZzB1SrH7Hj4wNNBDLnKvPJpYCvUi1bGLt4vxTm7VteEeYrfxiEdQsNEQiYSWofHemVeyp4",
  "key6": "3Ln7svHXW8fbXegbGxE4SRN32TG3ZFF5U12B63f8kTUFZokGU1bjkUhGzRiG6rykv8rJghe2nR7NZsv7zkiMZqTY",
  "key7": "thoWNUTagEs6yTvJoRVn3KVovdU8ajjeee3zNnbFTg5FVsh1cwq2TezJtNhCswZVC7jjuGGth9mnjqQUqxLTiEn",
  "key8": "2rJjq7QNPYn7jCAMdtLYx66pcK79J4bwq2p2rJX4Vfuos8zA8eH5Upj2M6PEBWjXStr36d38jMAjxg7NqpLyYi3o",
  "key9": "9QqbCFYqwBJPhGR5pBphXKH5Qx2LVU2JM6SdwwA652VNvtp1T4Ekttp4WSos9sJgF57jZi4y8FD7oN42cQMzxQL",
  "key10": "44Bq28B7srJvM4eQFziWShzkZW1mctNeesnqEqdpgzX2WjbtkCSaFZzzS7VuoZNyDc7ix5JGXXejU7sQc3ZrbPRj",
  "key11": "4qSMhEycvSFJbzfdR1qHwgej3hnFf3K2vJVz8pUgqwyz1mYEgkk4etJqvcFLgDSNA4XGiSNGBFVCszMN1CvsL2Wv",
  "key12": "4agTjHcgQJjSrmEvunBLrQ1TaGf8Pnb9FLruxFGVeaYxSSRyMXCEZnk2EnhCApkTauNaPuYjk1YaSs2gVz1BdLqX",
  "key13": "58w8KLGzsYFdTSrk5wgqg9Fh1QRRMhWujnTebBkep9Sc7Lx5qKj1GMTk7wQh7VAm5EGvaRucUuzEiDhM9k2Gjw41",
  "key14": "4VV9qgmvCnbP3ynqhQvSHLbgdC5tTA8FYed76q5KfcmuXW9qT2GodRC638JSvjxR4A3uaDX9DnngMBSUF76mLNZp",
  "key15": "3asPp52C1R1ajcqZ8bTQQ6RfJqyE99o3B1w9S9fpCcvX3YViT1CdbMfm5YkudZL41hxNc7He3Camf5cr2sjLmNP",
  "key16": "333sTPxCDy2oiK6zmKeJTmcoJtRmAHJSYZJXFQkxJzAYv3GMzhs7AG9sjbNeYpBQB92TCpNhPrmCv8UoCWokq7Ek",
  "key17": "2riqi1T9tRP31oc8YFKwsiKPP9H8sRhqE5zYrjbCpnyJW9rAMi5NNRuiCnCRAq2irnoYkE7as9gmDtndRSUSipuk",
  "key18": "2S3d8QeAfmQsbfEL1urqHsYeiSMusUeX1KRD5W5muoi44rL5K81rsbx6mVnEsB2aGQhxTJGR2mFaiFJrKPkueoSs",
  "key19": "4QQyFRtaNpsqcPuvNuFoLnaHGdAzz9D3RJ7eH455BqK2F85BnZrkLBsuruy8KTrabc1xRocQTa9jExjFpsdgTdXP",
  "key20": "3domVk4A3Wftq4yKKVcnbPR7vFpHxygf9T6i9F2XsmVwXzoRsnm6s2RuWgNncue7A3LfCPaeZr48LJWNWYYaijer",
  "key21": "61jradiTZMPx95o3MFQdRD6ooXbFQVtefZ9iSUzdqJTHD96TRtWHEbx9secNUngXn2bNvK9DLch8Et31iu6TP9gy",
  "key22": "4MRBbRMJ73ZfVjScg2HnWQisLDQ15qLVepnmtsjiGBfZXyK9XF2bCdQUTwgdjMnm43XYZ3jZEedB7XT7KM8NgHQH",
  "key23": "4vyPTSszh9Ceo8QqqZobYmjUj8oya4y8Dn5WBdXHygSgy1gguyioEmxMCmau2H16Xerzj3dTrrdS9FqSXcfonpnT",
  "key24": "3KUApuXwXkc5YshFg8Dw8Zx5zqXhJefLDnAJ3NXSdmvw5yCg3iWvcUNehwDwWyQzvGuW6sdK2THQGkWXKZ91nGoB",
  "key25": "2Mx8cnsD6fuLfhWAA51imwyFkAAgBicdRiGDeKr1T2vnvHYkJogopJDnjUSuZMK6j1kUMDtbs1wbiDPK1KsY2rFL",
  "key26": "4N1XRKaf5xa28r6QxSkEuXzWZtYZqb9Ppqcm4Cg8hh8hbPcPkU4iZ5djsDUcjGHS4i56oQAgVisrbniCrT9EZvvX",
  "key27": "5UeDWRY3cQ15iZDui4SjHEufjKNhYQgEWRMVReT23ZMDrWX86XDFTzt7zjYEJjZii7kWHrZGKvhwoGD3ZX6suWKd",
  "key28": "5W6hkqTLDiy85yHYekjUHRx7UUVGFnBP8MadX6aSuGdkfN4CquztxMtHMQbc6eHvFJbtxRaZkpjKPT1vKJKKsKxK",
  "key29": "2pNJih72UcCuVZm9mXPFbXBgkHrx5rCGhRoSzdLcDcTxiRmdMb4mTkQv63hYSFCe7U2roAPU4vgnC71AHn4A2gCk",
  "key30": "3tBQ8Y64ar4KbdMVMZje41142iHfozoGtqxWwLwc9KGhJYdQZLnhBttjdkK6VHgoC541SjfWM5ZQbXXjpu81j5pP"
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
