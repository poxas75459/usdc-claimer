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
    "wJBLnJmamMUaGVTisNoqH2LGvqN4rBEjBzT3vqDsyQENcwEZh9dkiqC6Cw8ZaCLRL98MuUjTh5qJv2Efpqz7vaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AKEfWft2vxj9CmEC6TyWhiTDjQA3ofq6n1p35zoo49hUxvFcoJ783aZiJ3kddLLwg1rDfKaZe6AkdeF1NXoUtdG",
  "key1": "5Ho8zrCeqKtfMAoo9Pkq4p8MqpTd1EZrZqdE5J4ztE9s3LgbXFxiooCmzr2NB5dVAnZge9tuxmngNgAMe2xfPxrn",
  "key2": "42JbvYbhzu2EbnGaTvANsiKygnZizKFNpzAwdpa3Ztjie6ygk6pvB4MeYW9UW2kMTjqdJpNTSAiTXMgXXgJ687WH",
  "key3": "2JohEejCZoLKCxdntYk3jxBsZb1kuUQAsUtR9WZDp3v9VhnWkBp7qdEkdiSbgx29MEq5ooRbVL7oY1WyJnfX7Zsn",
  "key4": "4CEUHQ4Mc4gBAPfJXNumo8v4GpTCPJtHBWHYf2wZrHqbrhv6Vkyx4uDHFqTJs4U5vdMcRANCZrV3jY4vNZrNUXwv",
  "key5": "ehKbLNdfG8m2Ru8fEcZPUMyu6LuzFZ9hkS8urtR4YYSxYBYc6XP2inPpkewd5bnWL3q1nMDfBURBDNuRG4QYv4B",
  "key6": "4buaQCbHWWFfHBEW48MMZG6msw5SGewbH6QwnJFtnF7AeFAiExg6wbHRhTrYxSNiQSxsne8MawKJxcZ2xLGGYeC1",
  "key7": "3PRNWybBwkEJU2ZJzjc7xZJ4QWpfcAUVuk63syi86ChrUosFtwSvr6KPudzRTYMwfSsWHE1Nw56VQN4Yy2D5Qf9j",
  "key8": "58mAyLFtbiGDpJXCvUuE8A1nqa8SsV1M7NJmVcP4LWC3gs1ejbDts9dsANtMbSbBxwqB3v1bRYPL1YbKqUBqD84q",
  "key9": "5sz3tm8yQhPrsUHJdSHmcnCunvdGdBb31uoXKw2gsuF55qnXvqwjsSzDmYgbi9AyVsU6ovB5JmbiAmPE4ohbTZAs",
  "key10": "48oo9xe1Kefu94qC6ALd2WHYe9CJn4GvWK5h7K5Sq32TA2F6yWLdU54oppHHdhpbjBjbHHYifVnr1CZDYrQobrGr",
  "key11": "2uupaiDkTKAq5BWJmYpCGMB2xeRJst9noDAwAjzfBTDZaWJCqrWP7MsgPAh1E7pZXs5WhGLPER7d8FdUbfeqAHw",
  "key12": "aGV4ozTcH4zsYNttVn1XNZFL87gEivaLzM2ddr1nmJxQxFAvwBqdDBUSHGqpUUErwmpbjtwckbvpwL991QQPkdD",
  "key13": "5ZvA8QqjKXmJC9ESAR8SJRT4ibANEVtnPSwSrLNRE81aE45MFiFRS8edSRxLkQ4BTVkQsDh7Fg1LAMLBQ3wa7QRt",
  "key14": "2dAt33J7pZfzw4aH1KkRk7Jx3bmbWSHcCyTqQQxWx4k3v46fGRwAgXu2Fgw2L2svmsA84ssYPjeHcKreK8xiUEbd",
  "key15": "i2e88bD1vTkXTzJJ9bDJbzg245VKpsCz7x4XKz34Gp76L8VJq4gq5URX7y4i9acripwwaVoJCTYV5k5hstpbCJN",
  "key16": "3r2jA8pSsDj2YvUaRLwFLNAenxxZ6uCin3ALt1wNTVFBRsLygCXU319wW5T1WtzDSxShhVb6bDHUBpg7VuDYF4Vi",
  "key17": "3pmGjKxkyYTaVWKX7xZFNApD58ba5ozdxBxKc4kDBhSBFGCMvUvrBmv8yJXRnr2KY2XtoNdsCb4gB5ikVxd3a3hD",
  "key18": "tt34sD8jPwCCZZtcAAGtt6J4VcB3UzJV2MMbybj4dcqmZNYJY4SAtBGEotbmqEadWJwYsHHzdRddPK8B1f3KcAe",
  "key19": "5Ju1ozQzD5DQcDLXuhbsNiX3soaXvfZhkuhU1Epe8wMFrK3gu57vmJH8ZLdV6V3YTBUofQ8MxbggF9uiQg1VsHte",
  "key20": "rBQWwoKkbtZgKZj6P4rjnaoi9D56PPv9WQH7aA7P2TmZHSkmuKx45Picf3APGmWALT2aEV9qE7UfP6oj5GySmau",
  "key21": "2bWuxGk937k6hrML4K7Ay9hH9d2psAMzRgDhscoAaKMcvL3t2TdiTkP7L2fCucEaxfgWSJBBPRCu63D8myoepUkL",
  "key22": "2yfKmKT2aYQ2jhHUTuzR1RbUgPSGLadoxJAzovph2B4EHSBYigM1vXutwwWW3QoYwpjWcTgRACRruPbMXCYDwE8M",
  "key23": "5zx73pVdQd9wnFKDGXXwk9YaiNAFBkXwEd6eLbhoZJjyBYpcDwiY3fW9XJQhd31gvMX6XQyrnBWuzVeZLcregcAj",
  "key24": "4P3Ja3nSB5cJJRMdeKHV9enT6j9uRuHqj2UAjqNMtKB5bqtR9WAg7so8H2H4usKhDVHsYGT6ye4U5Y8HsUChJh9V",
  "key25": "4fFvPy3RbdXaZiNVSgHHhUVTxDPbR8yMgUrNsekEb3WBtK1H59rZKd6JVnHNuqMrj4nSCjPr7etMu5bWHMS3y3LP",
  "key26": "2PbqSXo576BQtrx6RZp3W8fWpLULWn6K6J3bnFNwsXX9GZbQwczVxGR8vr98mLf2WqvMWxdi1bDN9Bv4q6eNNTiw",
  "key27": "3247JekviBHT83ANzgQhoHiZ9igHPap84BXSpYzfkJ9U8UknxPs9HYGTwQZi2D1axwy39VzpcJYrxFHtmUPnmpMa",
  "key28": "42M3opz2bbVC1QXjCwWNF3GCHoBypow5cqFGyY6KFdEcp2dERPVqX9zwyxMfgdmKLFaiff29xMCfSgXcMdNiTkBM",
  "key29": "5vbF93MCWogwyiWioKEwr1SG5XB6fT9UBhERht4fLursJqPTfhfXG9vceYauzJ4gqSUaksocZgirXPmWt6odELwE",
  "key30": "5fmPKkhQ7ZhSB5Ymcd11SBdyV8kgUCy3az3XohtWp3Vo6rgUCp4zCvDDNb12nVRTYnUiZKpgEZF6CcVQt7qVhudi",
  "key31": "2ELMH3HCNZyivBs4NwTpKRWEUMkrmAZJWh4fHRJGWCememwxshqG8WbVzk2oSkvwYtec38xkX6G5DShMXNf98dxX",
  "key32": "4BcbkZUvUP2e7Zd6HEUHDyfH4ZmAHtkjpDNLrXDstHXhs1qxbxsmP7dU8Vh6kAghmbQrrtHhQQA1P6fLyMfJy5HT",
  "key33": "3HkV7age2kbguf3nXGan38DdFEWBGtX6YTzgUcos2prwpT9ta6aXigQujfZuiPFY8uin8tgX4CScbZ4epCW8oqSk",
  "key34": "5sFVJZQqTvkCr9QrLdwkU4ktcw2XzR5pNbofzEyq1en9FY7QHWMgUp6NSVPaMU141ks3G7V8mATBwYerrw4Bxx52",
  "key35": "5Mb3CX8E17SWCcn3yZR6tWLi18FSTijMtSLsQJgYNG8Zsph7zfJjiEm3UDx2Vi4tZRwNaGbMtNaGxyEtgmKeciaf",
  "key36": "5FrzDMLiSobUroP8EZNpFF8MyMAsRmdGUfxM47qUSzDBvgjxnsT4jaiwhPLD6PWYHSZHfKjB38PHtYqhAqRhyk6e",
  "key37": "5WHVTwpJWwq269aGFiFUrUSKBYFQ42Toxo7hG4Xq2qZaAobctSEiuyWA7WnmZzkTJwpkTS2DbszTs29gSoaXm2c9"
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
