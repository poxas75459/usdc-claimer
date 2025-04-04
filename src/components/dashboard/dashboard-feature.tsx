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
    "5XFewWf6MsUZknJ6wGzsurjq8FFsCzBtn42KPVR2zV5aVytXE1N8fqehxBuZbmavw5ahShowgbswVLeuaaFQxifm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ShrhbRt1dCF6MABKzsjgXTEz2TXKofgy5mbBhy2ohM7XnrNAbqK1r4xw3uMsSiiTw8Fk6zPSFmKAKwsVWbNm9od",
  "key1": "sDFCopGYjsNoxmTxwMXDMa7Jw5yYxcYr3bCAcd4boRWvGxToQnVSJZ2bfNSMhxD9AoBbhSJSdxtptCJqCbETaDh",
  "key2": "5e6JwKCSpbrKxNPs9zMUo2muwthFbgyZUyb68ipkKTWS4iXLKJokv9xvjEhf9uaP62aQxopJjegvn6Zfjb9dQbxb",
  "key3": "3GvLRQJkAw99ZnCmRPhWfgf6zC2mrccFXpH1CmWR3QRVe7LkX1w9LKY9zgGpv6PBJf1NoV47RFTGoHxv7vSGifJ7",
  "key4": "3miqsYAmYrd8TkTMDiUHMRgq3oHiKeKWp1t2cj1iNVZhGh1FYZHvggSjbper28vHjF2DWKecbf4iZaLZcS7cZ6dr",
  "key5": "4nNuGU21tiaCxu5FTpDDvwbUx2SamjTPL961wifXVPAAtV4475yHKS5a6cL91RJqn8g9HAomPkiaX3Rb9reKvaWh",
  "key6": "QpoaUGXkJJyDNzjxGmG392WyaPsD8e7vv17Egjuam2Q8NVy9sXZqL4CGwDc3Srmvx8jebyMCJYRDvjYBRU6VS9s",
  "key7": "2Yp5yCS1Qe8MHAdCzaYKmvkTFpzyGAn27jfSsFNAG1cE1mHFYtTDrc3PFSsZnpLGE4t6FEScgwTQ2fZofDWGgu4j",
  "key8": "5wVwQFYhzht6L6HLxtx7p1McpP8irSXbkj5nt4zeD6bHvqQCDHmeB6iqhYFTGZQQU9X8hpLjW23sZG5wSyLE8DMv",
  "key9": "2HTVb1Axek6XxPqH4hF7Zf4jY7oZwQUWw1dMdrQduh7uf3Gr3oRpyXB3yJt95NLNyrSq62PivGYFXroWE2728Dxk",
  "key10": "3Bnj8B7ap1EseUMr2eSvCYKmL6XM3uCV8n6gzTb63g1v6KiDrdWrzY2LQK6EL94qN3sLf8YA8KgAZz5UvUAChqXZ",
  "key11": "5XKsUwCbxNrhVR9DVK9mgDjD1Fz8r2rr2iJFtQyN8Q9MnzCY7uDebfVEhtRQb3ZtaR8g52ceS3JVG7S9N4b4D5aG",
  "key12": "2bbxvpZSpeWQxxgsP2GZm3hFH8iQ5RKEq1izJp22L3zbbCAah7q6zVGUJLyJvufzuWGP6KmMQMuqzmKgtpAs9zgp",
  "key13": "3Vxuaz4qeN6KGEWGvvkCRqp4Kvp7Fxi6UpnUxJBgf7k2TBfCEcWr43MjQeWtCS4KJ2Hns2NpMA8bWEKXiQemkScf",
  "key14": "4H8EgR8jGRKCP9qRwui3S1tD81vBKRA4AFXxrvACUdXKdoHzz5E1pDYb242MBNZKE9S4C63jDXuWguQgkmgVpAbw",
  "key15": "3CzrXDTA6VTQTi93SW4oojL4wWUhu1kEHgExzHzwU3ajjudXQpF94LA9iCY1z3j8piATh9CBApqViFrasAj4EHig",
  "key16": "NMZ5UEWsBcH39GMot3c8UgezqR1oK3azxpFQY9ZJHVpjk3EPUFjYkmMqrb1hi4kQQriVQfKsce2RGURjU9gWnKF",
  "key17": "3cEMeK3oouVJUqUiPFGmevpopQXEjRbPEmDRB9Nwm1NSe2UdA6kXQ3iUZB22VjzS3TDhAhd6ihSAJVXjaiZUaN6j",
  "key18": "61BM8BbxDDvVxubTSZysJhWRvEJFARzsnjjpSGVugQ179vriZGoJMA4DrE9QKsuydsgHttSgGqPZXNXHVC3QKL6A",
  "key19": "2VHBB6GB7fSSY9en8WCNcVgJWMCGoPdxA9NrauesEzpKv232x2LnKsgrdKKCwsYcRQbNWeh7MUmr1cecNgvvdngL",
  "key20": "3WTbj8SqwbBtN3w6Fy1hGZ3LtGVWBa8xjQDC7Pvp9vSqjNTumuaxqwgvFY7swbjChHjD9TXr9SrSeRUNFqeS9nGR",
  "key21": "32mwffBuBo59zQXMQRznufmSkfjtRJ8qmNnHL5gVMX7tPwaSEJrjJiqsV1VnLLW4WbPFYHAAViY66tb1SzTNFEXX",
  "key22": "5PbTyKZjUAJK2SntXSKnXq6becfdEv53FpNWVPpNAqTr93EfmnyzjSmnNAaLQ5kv8cqfeRKRBp92SE8wkH1cgXr1",
  "key23": "2JsyH7Q8DL1bXXxWGPmjTfzPvKNpMtNsE1H5xSXy1U9AZgf595wEWDit9yvupLW2WyGXc92VP8pLRyiiqbz1EE7R",
  "key24": "5NLh26sSFk9JgBzTE94WDBzj59N2euXoqw3xhuXVF2E1NR1YhM2LbUVs2XuRG5SxVgMU4W4GjgKcQFrWBxiQEe3M",
  "key25": "3UGjmGW5orKGVJ8YRhY1jgZRvwG6prJB4gSK1gpc8x9sRSFKYj5FxpZS9gGFdGuvyus8bqCAFHSQwvT9fyJtjZT7",
  "key26": "JeiPNiKXgpPTRNt7g2MW4wnAaE8PVziaFj4RP1V2VpX9GceYM5tXqMV39Jxy5nvkQpCx25JUJqre6CpRbTCstsp",
  "key27": "5wz953cRhmNBxmEmZdCSapPCs1o5fSUvT34NXXiehJvDrcbXp3aczEJT9xPzBDLXdnosfcS1LXMfVMAfuCHDtgSG",
  "key28": "4AN2mNhTezxHqhdvhaCN58ZJWwAsCbkb5EGmaoW4vGQ2JhWMx4X5mS2rY2ejBTbWgXwjdDhRhMizkfiCAXfKPP2S",
  "key29": "34jpWTzBNEcHq4PJdk5VxfTQyC6qHjGj12sRZVgP4ZdYgTt7FZC76mAbUDpupSqu81c8vR66gxErJfq9kquuSHBT",
  "key30": "65LHNWPf39r8Ng3ZtdTXZKfPadYSwWUXVkpcj7duzBQh1NepKM7ejiRBusZcyN3TNa1mAtGyqK3US6dkpc1aMZqQ",
  "key31": "48updUzvFPJhzvAYFp1aTZGXbMdKQiTTFKb3Mh7Z9cMPWNjbqs9JKkhvRnQmPneoQwXgDHLq2WU1HA4QUHfSZBNM",
  "key32": "5cfa3gAU7pEYJEQynLWGmGrgjutoL98Gob1biGZpnrh4NCA8i2EGJoCSCLzvdFFYvWDA2hM1VBkskRg7zuf9XebD",
  "key33": "3peArJGt8sbaq63NNq2ACkksbrHCAmTFBMrUeLUjxwy6F3DCkR3WtWQNrAMk1PWfNiWWHQh7fWgXop2jpfrZa9nC",
  "key34": "5or1XcviHowBNdihcce6fUtLhjHCunaysiveSGrnYxC4enMUcPP7JHwhcu97V3Swob8E6BivMoQY2SCPNgTxM8xh",
  "key35": "62Knrja7WqosQVxfiQgYGbTG9vTdrAGUL1ktT79nsZGSa6kPNDVN3wi8X9G2HKKG633t3XVzs3nJ3p7Hm7s3tBSj",
  "key36": "5Lfqz2jvWd1vDdQ7m68AQ1H3ZWwK3yFYo4r1U44kbbNev7QmBL4YTqod5cpfkox21WK5PPa6C5nKssRfZRE73DTX",
  "key37": "5kz7xVPQQa9oJH4eAZD48AK39KzT2Rzg5nV5ENxaGkrajxqbpyhg1LoSRiiiNSfkBksc9FpQepV7p2DoqWgoBrE8",
  "key38": "3yRJcbwcf6rjNvcdc93H6oU21iEkvxHAgNQK3L2Ev5s9TgPHk7P6vgU5nrTMk9P6hcmyfdvqM3FKuAYf54XTdemY",
  "key39": "4EduzyVh39y6cH3BroTm2D38hBY46StYfpdHN1s4gemfjv9rzk72MJUWhmZKV4UARWAPV262Cu4cbHvwrCLqRTEW",
  "key40": "392qeRGuMFj8z2upbpM4pEuspyrxyqGJgLZBbQCDFpdqBGnudDYWB9R53xG1C7vRJUx2M57NFfm84a2uzBCUFzat",
  "key41": "RyrQYpVheSy76jmnEWaxGoEXvD4ato4AN4YPaXSV2RjJmKNWsqdNU9BsxjGJkK8SR2SJMCP952ZJkwHTer7Xhbe",
  "key42": "2GyA6bCUQZVE2ZtAbUSwVoGJ3gLnk1s5zYhWDwLAr1R9g8cgQSb8yKxjUU4SUUWNpLVCAN8FTpXkAc6Ur7GPKMHR",
  "key43": "3Hotxiu1rmsyzmYDmvkvzwiFeQsNFo9h5MhpCz9aVLnVFuVyvTd9r14azHCNWXfkPEbgkQqeYhuVJLy42RmkUggH",
  "key44": "2o6C7pBYeaytUZJGP3DJD4ScvpdEE9TC73KTY3mjqFTE9usiwPFLPps4VnCapKwVFHq1jEsfUyh3yNQTkyV3tw76"
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
