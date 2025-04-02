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
    "5kbJrzKX5K5ZESwEgSTPecckHM5w2BPnuM9w4EPZSe4CzLGysSYSA2DQYj5HzyVt2fN1xxnYW4Qy5ddoXL5XvJhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1BKM52eMZUKVJtgqWCZxPos6krvrbW9JsyASgNfB7XtNPMZtAPsFAuMHDFHVbWWvnQMFnuHVxuBC4QbiXKbV3FT",
  "key1": "2A4DWM6fjQh2C128XZv5E79v4nT1vbt4DbTa8hVkE6iSP4jpKsuyBhupfdjaB6a5bAL2BpczGxSW5NyQzNzZ4BrK",
  "key2": "3XU8MnbEB5azxKu36iqkWSHmNSqEd1NUQ7cJeJ5Gnpc9NFiWS51UuqM3nErcbRhqxsqNmBFjomu56sg8YWK4DFn5",
  "key3": "2EyUSToJzTwoCEweVVJdMYU6tL3pdqMufnacrB5Yzb8vk9MdtmyN98URnCxRckCLDZyCtedpQa6D94nNbvBxpueZ",
  "key4": "5aEwMtoaZSbsKg6jdBVpExxSbA8Lk1tos6YExbeS8K8BGWa27wVvB9eP56PUeuTaqRktizSNPDF148XgHSqhohPR",
  "key5": "4g3zMM2e2QJC6ppwrF4k1GvMNVrzBgCfHJ7XTG5E8zXR3ghyH1RjYZ9V8SjVpZxe6M8LNSyqEDE9mhwpGkgFPEM7",
  "key6": "4R6ndZpjDMqp6vN7ftZFBui2aAVdMdcQL2PU34Pin1C1x1d2FL3jgsMZvzUHiCYfLi3y3ZDhysRG4zXT8WJuZGhg",
  "key7": "3ng8LiaoEkV2H1p9kvmXexQJnrBnLffa3QytNSru2y1bYPnGEGroiD72m9nSvnrjEpjw1b1Ua2FStX2FZEm1AZrW",
  "key8": "66fRLoZf4M3QyabPCuvvuKcgUyWiYFpBz2J7i9kG2ybHYvfT6iRKq3ZqT2mjnNYYsZg9txA3gAFXKLVR8gS57zLE",
  "key9": "2rbdBrcyGZjEzQLZGb91DsizJUXMAazcHDP1hiipxV9PaQNwqHtwjAcp2QsPJWx2guvCUaPa9dUtfb1B1prbEiic",
  "key10": "5Gegihe5kEx16gXpPMq95yttrqNt34gCPBg9swBtSELsRc3qeBtRwznPTSgEdMW9mpV95jgmwWpxN2swvaPK7BGi",
  "key11": "oxcahb8nKJApSSJjjr3uRcNmhr6dgTT3qR9HRTWjmbYF7wLGxqfA8CqeEUyS5ajxo2jW8YqNdm1uuXA8NjYs2VC",
  "key12": "4z2Mvmtm3mwfkZ7qWtK81gmboBThBa2m3UzsZtTUeGHhP2EFmUKjervjnKp2LyN3a23w4UUTciwP5QgEjKLUroJV",
  "key13": "59ChLs7iJjhJEqXrRfC4siHJ5pX5n4vgEUx8qnfgYkLDR7QJjruidwKyqNzoe4jbzZcKAWbpHFXRqddY5j75ZkRj",
  "key14": "C2hoVQkWHux4WKFkWowivV76bKtb2oChZfLa344j8XZBithTN9uofYVZPpfa3JHYDd6sH6Qh8r3qWcGE3Rs3JP8",
  "key15": "4qawNicx2YGvQm7MTzwK6FUx52XvKtAxiNwL5sp3yEtHiChATYeCnaHMuW7sDRTNvr5TdddoAMDfGhtPw6mSriFL",
  "key16": "5cta9dHhKE9ZGn6mgyYpDYLFhaPUFEHfB2KDfg3CH4NfbmXAYpcYJDmd9RDNgGZxFETTBP6pwtfsCpTKC73Hn3aE",
  "key17": "3XQi8hBMg2Y1QQzNS9FCXTvKzEgt1yBGQX2jsHkkyfLfshimdnQgt4u8E625ehfsdBJ2JKJzTG5YkRFRjQqedTWn",
  "key18": "4MgKiKwp6xtGo4XyW7AD92wA1MbcxF45pysRV3jSGMKLwwcb4tbUMMutJW44gyLeCt6wW8LXHmqSSXSjk9FBhN5a",
  "key19": "5XVHkV9izKPP2ae4uCNhEvPaQDBPybsCsvDq7NuyrxpZyJzeNE1x2pWH97oeq23BrBjJ6QAy8ihoxP8eYB1MjriX",
  "key20": "42hLaSpvTggkuGJcEWpS2PgGyAZaFEd9PFswrbvmzgm45Ad9QuB66znx9oSguuWNDsnaaXmMxkRvgBXpsHz6NojS",
  "key21": "dbQjKE4vkgjn98RizPn8sPxK4Dx1pJ4DyzVg3xXwCrWTNGF1WxwoUAgZzTgRkn5VRNobjg84baJhxCEDipMyMh9",
  "key22": "3P3XCZPVy9iMUX6q4uetRu9DjT5yCFtLVHtxm26QG4SfdtJL4ZE5Rdx2KoPQzQeJjZJio7LABYAKb9QQu4HTDgZs",
  "key23": "3MMxTJ5FKSLz9nhUvUKMgKjcp93AcKo4dsLbAdiy4Uh7KaQJMHjb8uG3T6Xpw1ekivrZMfbRdYnZxY3LWCWJ5don",
  "key24": "5kWxhB2iw5nGpUN9K7Wr3WCLuuEKD99bxzTcdsRm6qHNW1VdgqsU8wQcZrLRsZ5aUqfricirmcVy2WVHwNNkBQ5v",
  "key25": "59EcCAfrrFmKxzMv237eHNrh2bNfrMAfNsGCXqN34kcP7MhJGZWLjvfujKzwJUGddurzgKEkQ2C2pL8XhDtbu5tD",
  "key26": "5tYhP9cMiCJ84TtPZy9d7DKMUV4Bk7y32ty8d2KZ5Lcuki7Xp1UATyp8MacQzLWPFXBNjQyx4eDKD3SCuNdzj5ST",
  "key27": "27S1kbT7Rz1Sh3BhULPSiGYZVeSZthWW5uwFKiDMYjMsTzm5kCRobrnFUZ9orpnC76V2bxdGznwMaBdnW68ymGmF",
  "key28": "4Z5perYkVRarUEg2MK3oeYGgNQo6NjcrVBCLcMxfD4WCX7iEci6WMbz2zzYkSqMJV3jDZQbzyxTsmFu6rS6xBkxr",
  "key29": "GorCR6qhRWmLPgpkmyNVtqQD3zvXsedLgLZy7vVVzjMum5FPsnXuBx71TYjUhV64tokHStK2qe7LN1KFJUtrTsG",
  "key30": "2SVpUkeEpxpG1aMZFpR8ky1rwcjH43fJ9ZWdG8o3xKMgBapp1YrYit5bajC62CPiRkzxNrcSpt3EyUrx4zbb7268",
  "key31": "3p9WEPaTvsTTDgRQSAFF6GWDsHbFqrfZD95XcamRbcNr4ZpDQMmmWULF1YrkXZXwevCB9ubQ35H2DSNNnLzm9Vzq",
  "key32": "52HzZexqNc8wGG9DKpZJbFHdETBSdSDUyFpq5Yhu6fbF3eHA5rB7BZmZr5jUW7objMW7AgoEWd2bthjia22FWrZ7",
  "key33": "5J1rhBJn7B7sg45Fi8R9h6HkvAytvBvvkeTT2aRGq2xquWbyEajVakEst7gmjKLWCQ9odK52quisbSnvVZc7nTmq",
  "key34": "Mok36FzdmLB75hEMAap8ymXakjvm9ZD17unHH9pwuUXtyhHusNiiVJqSBVuy6wn84NY46kxYJLo5FFm6U8eqn61",
  "key35": "5nbwgzWF5j1Cvi6KjPfjL7ivmwGz3Kvxw3rSU7f7VJXJv3pK2aK4RhN4TMWr5fZ7UGixmMjT9vget2gU9ohhamjW",
  "key36": "5nJbLusuFEb2hcaMgKijPM23QM6v81etrvUUy8LzmkV3qcNL5EqMEoYjonsdTtTRk4S7J9fMwj5GWvWoHVu7V4dS",
  "key37": "31rrgsecTvKS4yXE1bDdpgALhpN7Qrh4vxB4GDRXhG9WdC6JiVVJVQpkRvh5nuoxvzt6shwg8gjeYWw2QZKMtzUX",
  "key38": "2P3szaBb3RCSX4BJPrGy9yBiqziv6vFVvn1cVStRcNXc4rZ6swxnEv9HSe8DmQcsEWj8NTxLWfzcp71Wa63WdGnS",
  "key39": "2rADCVQFu5YTHCkaJ4jJ5koYfN8Dj1mofFRrWjT7XUfSEq9z1MtPzxRbDPviEck2KSmWazwCXYs9bo5zzEeAm3uF",
  "key40": "2wtKEonf6r6X8JpN24dCAZgS4ZNFD4AMSxDGWXbn3rUYzji8823ezPiXxAJ5ic6vf1xHpYy3CN3WGgWiiuJC9xi1",
  "key41": "4frrUte4V7LDBaY82A2JDdwJNWtATK5iKbDtSgnk8ABRbh1mp9whae56XuhM4GVhz5CGLVB76Y5PW7JujY7hnvYN",
  "key42": "x6vnvS2bU6HzFbWFFZcPfXMofZ3pA9UN9BD6TU79kauWGtQFn6Moft4gXRREGHjA2MU4PiEEbWAs5t8EeBue3jp",
  "key43": "4sEzrwduapZ9hmPSbFLqr2ZrcosYVsLnyWdn6X5sT98ZGuTmxDrwCNR9h5a4euV7hsuaYjQ7Vg5QMuDyCf85nzoH",
  "key44": "3gBuoxrTmocouhYToT4vFe4447z7eMbHoE88LFAcuibnVvysCAURtoT2rV9tb589aieBL8ZdvLUhh2AsMKcrZbwd",
  "key45": "2qJ78rJZSktndr1NQraAiMwvEQWed5mRHpL1Kn3B2B7gkgEGvCnKiF4Sv5QUKqWnatVAyULRpVfoKrMvHHFkMYjq",
  "key46": "Qq2QM7eLe7cBtCQhp43FAtnCRcwSU9AJDPascsoP73QTLVVacRSWK3PRTWqY2GTdVZUXu46zwj6pCGM3cuiMabp",
  "key47": "N1FF8CfVGbWRnY24tCKVez26xfCZ7UMTrnVqwZHUXj9QnSmyo8qVLown6jjHrfss4gNckbTmvRiHVrDzaLhr2f5"
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
