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
    "4tQK9Y1QPh4BgHSU3qeUQMy6QvvWnrDdqXhHYTHe89Mjvqf3SA9WwrnJiXSe7oS1LQhZJuNyR9rZK31dwKSqpPLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lg4u7sQw8F9LaGNvU3qquJCxLZnfm6wrGa489Srqv1g9b17XM2JWcmdLaNAjfpbBvDgMccW5cs9Nt5wJMkBaiGd",
  "key1": "oWqUK6cuLxNWBkwxCs6hAVweT87mJYUJdREqf1LMSLM8qEvnKzvEU4XA948XZWPB4ogoBMXFkPo1PamSXRrtn6d",
  "key2": "dSqnZzvaiUv1bzSs9YCz3PdAsQ6h6y44rFvjtiUN1Y3iKGiEFPT93xKBFZ8jv4WuVUzKFAkVtTQwNLRG1QS2eaw",
  "key3": "331PSzLGR8fjdXt7Nrk89kUojF5rtJaoEQnq1PfQ1s5jM4w2NYwNDC2dXryEKHrAoqJf1N6MBSjnGJCFcKSJDTUe",
  "key4": "WGYW4W7oZkpDFJatKGHuy37GV9sx2xzqz2U3inXdoeruBuGpPzQWwRMAFuEXWT9bxydxFwF38qr25LF4XBuiZDL",
  "key5": "33KtnmDidi16CsR9icUrbNMBVumRGfMoGyHYnoya9FFNbn6B1WUAEAxEteTdpRhLeUUBsnwPY6134sqPWomQtj4D",
  "key6": "8su1gJdUoDHgJL2q3mLCYgbdE2zUS177xemWcXHaQQMHDCXoWGhfjCRSTprJtE5Fuqdv7NeCXspZHRDFGLcyLeh",
  "key7": "2yWxXCr9geEEgSRQ2fEsCEJk2WnKrAFhr1CtM8ddPM7UMWyku1JVTZG8LWmVJNFbCAbgrWjXSwPRYnLzBRFx8YC7",
  "key8": "2k1Yfr5nFaJ6BrCpDWEzKsQCLyxNTFL1CXCMbUKoSdirfn2KqFFxzY5FQrz6WvBmvGcaT5oRdSnFEQJ5iTdM1dd2",
  "key9": "NRsoyZoR9s7vbWQWzrzeS1fQGJ1Jo1m3LhGpdy2AHEME3fz6eojgaFeMRGNhG71Gpe4XGeEw1d4P7XerddtVwyC",
  "key10": "5JLdJNzYhkcjfkH39FZXka6pMufRwRsbq6W5Nz8uk6G5ZHDfHXLUZ4Z1v1LgZ9rLagU23hMsa84KqfEiSY3ZWSFf",
  "key11": "65ZyTWBfBr14AkYAD36uadqZobSpq5vM4eVHZ2JNSz6qCGLYgTHAwGGjioG9wrtvJYuxgucJcKqufjBr5HanAGsg",
  "key12": "4SnF8gNSVvc9PsWygJR57NUZNPNiVS8n2baemsgk15cDVo8DEiRGiXbtYJj7mfv1xPWZ4J7hsutuDCWzm9SBzcb2",
  "key13": "38c8AgXLm3LsWcgJFMR6dtnMBqMMFY4ZZQxhoWcqeoTd6ydxzp9CFBoRKpr9RjhptEZSskE18AcUKVVLhzM3TY3B",
  "key14": "27UZgJbuBGZeLFwXbvALmRir1SbufBwqHjiFrTMMdDaL35kU3Jt2r6eatFUU82FLeiU7RGWGeUSukwkVDM46Rj5G",
  "key15": "3cDSNg7yBpqsGEW5WK7U5PFL8QYe8J5ma4LbWbS9C2nrvRKhZpuPJwqYVnxZpDKsPRkQxj3SMEhDPZqQV7PaYELa",
  "key16": "bomXvRvGhGDbn2yFmBCcYXUVyMgNN8b6pMXXn4XZQdTNvtqHgFNE5QxqY5QWEXnZLAF3Sgv7pd8aqkQKU3qGtTD",
  "key17": "65KnowBxubs8xCq7fPpXV5Su5iSdtPTnM8fquMDUZgDYa46dDZnFLMqnkfz9emVF2aQTnH5VDhVdRUQv7HAsoMEu",
  "key18": "5tjboyqgHMDs6FnovR4CfpZ4xxBHK39jPrr1oH8eTiqceYu9yCLTMStp3AUJBSBEd1kwNxJdZtit4rhWumVeCqpv",
  "key19": "2oQKm79NQ9RY8m1xdLfeMT7h2aa3vtoPi2PnHbTVw6Nr85rcBw16uJPLfCpKg9nq671sJpjaxspE5BdLEq1Qvecw",
  "key20": "3GYZW96snaLR2nmRxuhqpQAfzWaJyMBoQXV5AN3sFcGKGQiJc3R7cAaXnwgkGMxzuecG3rv9do3k7qyyWXFYsaVM",
  "key21": "2RHPwMuv7Mv8S7oAVdGc68MaCEBmwU8ceUcQdtbBLXJymCGUEmsRyy9dgRriGgyZVtNympK6au8Xk6aUENPqwAqQ",
  "key22": "567hPVhjk6oLoAJ7MbXMVFBP41q4s5vCTYdhzGmdC2qDSevGe3qWZuNrix65Rxa2aHH5H3ahng6og6zND9oyxLep",
  "key23": "5E3mmFNGrduF7Tg6vAvjRsdC237CncBAH8K1Sgjm79orPYnkpRM3uoLiwLP8W3p5LsSzsCEB43sJ3LPsPigGN9yd",
  "key24": "KnTK8mNXJdYwBjuTt2Rf2TGEqajvgwgGsjPT6jUELgKqip1uzBqueUoP5S4yvACmP1K86d2DGp45bKa85mM9ouX",
  "key25": "3chgpeCw6czGy1MfpNN2May6FzFhRi2F2TDdx5dZv3duDDmNRZ8xjwfdzjo2YweHJT14HKcKBWQqXnozBQjVGfUV",
  "key26": "6jxtNPtrit3raDjVmz27G4W9jtF72LWzsWgWboETctqRBKQEzmPE11DRoDszt4dgYr8Byp8Z8Z2nxeCn79fJqLU",
  "key27": "e7jAKjRCrdxRAYJTnP3j1zzqypxvmCLNHFBxv7GhHd5Etdxihzfw2heRnB88tfKrawx1a3vovNYSCEwxC5yfQr3"
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
