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
    "4PgfMKwkieAyYi6F3EphfFhsaAUdmVqrkGuRJeNu5rJQyNDpCnf5jgy18NX1xDMxSPQAZkwcgr4s3Pz5SYNQyFPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AWP7CfHQzytbhGpnwvz49hgWBhV1Rtjdry94tGsTn89JeyqHtU6oYqgptjKnFhZHVS2g2xyZyTzpqLTdqeffaN1",
  "key1": "24aV2xKVQdbFUzsSkNNeptLLqhB697krJwV3vLgcbMxPcjxA6zmdyrrxKbDtnotRZuy81uadDqJsthCb18QMGynk",
  "key2": "47svEvKsV6uGURqa7FgggAPyZGZXSYK2URs5muGDkLY71yrBEW1J2vzwrVnv1nk2LuJswtci1Xg5AJFrD7aJCBpe",
  "key3": "49RU2DqUozPR4hkQrEh5uR4112jvLTg72ntW45nmF8qYtM69edAegpzSAoQZZ2fpiE1uuZKKC9oCPghXK1PbYG8c",
  "key4": "WyR4N3bwrqpbEKvJTwVEwg4dPA8e2wyQpUYsPQfHCo4KeJ6yu7cW8yRx5EexqJG3m2Uz7WeKQeGv5PFPS68JDVg",
  "key5": "3uCCiFtLthYHbF14dkdkE5hu3uoubLrxDUqXdmCadTU9mNpjQLpnWGRMvpm2PtZpbVYRfrZw9ujfbw9iEiiENAdT",
  "key6": "4RU4LL1th1v7QDs9gBH4juq3AjQKFBpFTLkX5GBhqfwDiR1FjBWunz3SwPHsbtcTLotkSxp3B4w49bgCL8yG3z33",
  "key7": "uYLK2v9wF9eTtq6NFijNX8UAmqNtedeJyfCMj3L9JmzJERTnnJUfrSRGKj2pd7F9E8AjB9HCSSvb3SodT6qRt3V",
  "key8": "3ZHr14ECyKnNDMGL5LE4Mm2r4EyJrfiT14zFFa19oaF77ynZqXMHyUL8mFpCyN6TZonHfCkmwYbRPp5w3TFkDYSk",
  "key9": "3arNLgFVDQj4MjUVng65PaV9uSgJekWE26WnGzMn2Qb5Aw8Bur2x5KjnYhQ2QGAYZVK3ZThFAAE4a23bjfZh2NE1",
  "key10": "4etc6MYBh25Ev8C2XJ7rVzQFZ1pTn5nmzzyGgbUjxUMDvYN6ib4wDrCUanLpqpASjMA2dZsDwqNSo8qupei9zLqP",
  "key11": "659E9PXJawfwmX6NxUDDseARCRg7aiKmxvKnnaAJTJJqKqUr7xzpkhtt3BvwKfMJtHz9r2nzg4wk1LmaXdsnyGvW",
  "key12": "5wybe1qe5LWfygBzni3K2umA3q2E9Sw1MuExbewmPTcNpUJGGeswzqGyomPUjUyHoMnz2qbPMZAvTRCjGZgMjAjX",
  "key13": "RKsLmLUhXKLx6TMVttDLDM4SxgryEaTjPCkiiP8dBCxLknRDjidPuxPy5NaHxhxnrKca14T3zobxnf3yA7eLi6R",
  "key14": "3nghhYf51u3w7vY1KyCkaB4if7fvH1qZhiJAx81kPDsWWP3eQRcMskWcCo4dgRox6VL9ZDuk3LPsFqNmeHivAjtu",
  "key15": "2umG5it85Pqtrk1s9uV4BN2b5ihhuPLLGYbFynW8fNyE2nZS5W1qWZDe1eHaNu2z6Fojh7WH1xwE3xcfHRNUqqWj",
  "key16": "2RYPgUN2y4o1ZyJt26Vz3okYAjxWaoWb8j1foBn2jAn5inZr3sF7cQaJCehhE1dPZPMDFkdDwkDsdEKvxrWzfqMm",
  "key17": "48eDHtkSFWUBHzxXDpd3uGV8LeEwZXZa9MAqyBJ8WhGe4CZX7Pu8GQJNyFyuXVdjDpTh8UJxtYHWHRu8UGTGJqXv",
  "key18": "4JVphcrxj5V1DEXN4fkRE8fJUnW3vbThZ354DGjazEyTxbhFjR8dLp8jnvpv3RHKyeVEPYja8bL8GsHPCWRK9xdQ",
  "key19": "3R7iTBo4EvLkcdCfS6vrGo6sCriddqvzQHot7AC1bDHe1fr58dnWX9JYXgaqh4j6gLvzPFkug4YsuAr9vGCKrouN",
  "key20": "3LPma9YtRogjdSiASBoWbTCa82kXvMkpNHiW2J7wFyW7NXSzv6uYiXHow18fN4vuM3ubhRMDx2kxJ9qvuibBQMf2",
  "key21": "4m2Czx7MhS9Ki5vKdzseKZDCwS4ukwfa8TX3qA4TmqEzw9XMejcx6BxeLRrJ5q9V2Si2h165KdSy1wNrCoTGnyAY",
  "key22": "5DJprBzSNtSuwezCWiDLq2VhmAVBeGvNRuEL2eqfw1nwgfn3tjctuAp6ZotwLHohmR26CH4cJzF4hMBexakxJqd1",
  "key23": "3PtmBgeHwjtBmPxLRRqJkb54voBQJGmMrqTgnPpKSPSExv3ZLKtHYysD3SArGmZ8uk6eXEtz5tpGx6FoeG6MDXS8",
  "key24": "465GtDu21SxrQEZjxF3YXSq6e9y8UptnEdB6QnLZjDxhBTejFAKPsPqABPwV6dkp7zbXTuoD6KsSfiQyNVhvaKTW",
  "key25": "pJxWgRteWtp29A9Sn1ehjdsFuGS3VrBG1ZYQJoAoujY9Mgx6awfd4r6MTPoHjmHx5ELpTso3HdLE7QEKzVgW6zW",
  "key26": "5r3iuk7Y495ryotWDfSNv8eaj7Tgrs1vdcPEfHJs6AiPbAQQne5vZkF1iVvkz8UqkS13pNhEb1cBGwmGAZoXET61",
  "key27": "4gqoEfCY3nL325rGzzQXDENHcShW5rxKy4BmVpvKTHkAJXpAhhgqpX2E3TncxCi8tfBs7w5MkcLpWWb5dXFiNHvQ",
  "key28": "4MziU5diH76QFkDjhroUoyZPZTxpwMHkUfeY5wqqGQ2QBQT1RosKy1iXRwzBzxRkw69FVtrF5CHktEy1sAiAW8Lf",
  "key29": "KfrqkmxzU7tpxtu59Uz3Wj1vG2vw7ntLdcXfzXc3neUP2xsuCy6FvtFvg5H6eBkvTBnm42evfJ1WLtETcnvumm1",
  "key30": "2g91DhVM3nUedx7f9gYAEthRZkfyPGRRXrnU6XodZEPvu8LRrRCYHgrkk7pRgmSgmufoi7qZ2cNzKfgXG4EeyfyA",
  "key31": "4dwWHfSRYVtpuGHNu2YzYzYHHJBFcoy5KRGSaN1XCFTas6GES1YPSF6jf2hiPQqtk2ecBoARvrKMtPvmBvbahm1D",
  "key32": "5NzushKJZjCodEfQwqz1bJwRLjcgnpo6jqn4mtDqgnwbLgMCsmZPb1ZQ3EZUQmg9Zy73SsrnYAqP6KaMNi4b6Y88",
  "key33": "ggFE6H62kowVLVmxNdVbj8ChW83nbzvpV5m9AJ7XLVPYjgnezZsPwUJwUHDT1SRUKX9pJkcWdzrZxpM32xhd1RJ",
  "key34": "2zJGcFaueqGTXdWdJydSkhwotESJEM8z7vMmC7cApFwKfJuHojsNaNMPANpKUuVEWqprT4EvSir1jobbgamctcu3"
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
