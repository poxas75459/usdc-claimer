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
    "4Zim2eweE1L1gzqNGuwHufScKHkge9g1FMk8Ut1tzB4Y3oFQntGAAFQNnQi8SFLeqE8bdQ9x5Dko5PkKyixvLWCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BhrTf5Zn4zwDtaKTbKhMPN9BfwKQ3giC1YkCgryFa7cM94WzSi8j3LKs5vTtof7MHNo9KKXiQiwtFCvgVCYeuPz",
  "key1": "2p29SVTFcHt282o49exyZLSv1vmC155aVYvr5MdiTzBJpdgjaFLpXX6hcU7LqucycY1sjsfhwkRG196h9pfN7mfA",
  "key2": "63JA2NwjkapffhaivY64FdqMEZopjo7QeRFDmP4aAHA9VRt6XTdMrqxuUG6sRpKde79QrhJuhYkBUymm2EZTnULD",
  "key3": "3QMqTwEzz5i44japQF1E1nWVV76awZm6ZYoXbTMyCCXBuuvmFU7ekE3WUrynFo4c3QKBZSiX4kcZwk6jU3nKwZnM",
  "key4": "5xxdWUht81DgmNAPbQ5rLrLyS3BNZxBakReLZMi9M5FDG15xQC1GLyaYPRMWK5ZcM4gtvqhnUEYuHgTPG6pN5AV2",
  "key5": "3Xz3q4e4Nz9fjD8McMAvCPKCg7FQR5CaSpefWdZDZsbgjez6odg8gp4MXUqLUJapzy5gUiLpM4t39axKQ8eTytPU",
  "key6": "5P7B3Pr3KNoqb5AdkGqXnHbBx9tpVnVFTiSqMph1MYgffRNnCHekVfaHY2juvP7vrc6yB4YSUaFMuwGdGxmCqm8A",
  "key7": "3LhCxHktUHrjoujNHMqFofZ726zo4egRYY2T2nJwEL1rmAGZ4RRnEc47ZCJFPtbMrhBYzGPsL64Vh1bzj3PW6j2h",
  "key8": "5pzRgK4SmSFHPsaoUTEJKZ4bnks2sxEwuSDtU2537fNiVyyF9XZmA9touQRBebEqzXqDdbAFceVyDdq2nNv5453Z",
  "key9": "dX5gM3DDxftkTN6KFeX2VNewL46Zxc9Rowd4tJn6npSDYxLNWNBLPHUCyudg7Tis19RYrnuqU4t91xYzdoFE2eT",
  "key10": "2Aa35FVBqToeMYR99gSBRLRNDegELgN5BUGqge9WpP4qTZFGS1sYnU1wmknJ2acCKc2Fqn2Cd7TvYTAEEwGPbHC6",
  "key11": "3J1JPThYgAuB8YNXBqbTsDmd7Kn1kqCbDS24pgNfW1yneNrLPSG3WawvUHafKefH8gD6vAbMJdppT1vVwwmr47pZ",
  "key12": "2tyt3TCSiBSeYXbtZav8otjTbMJjr5ieoXSoPy49XcZfPYqvSK8jkv9g1YF5ncJs2qFJhKiHkj3UA5LNyXr1ERBY",
  "key13": "39dZFsfaN5bC6duKSFynwaDwUTmgmEF7ZaLomsgYpFCRvUn8LqQQSThpw9ngxgGifV8qyvpGU6BSxShzDuZm278e",
  "key14": "2ZCLCHcQVVYKWcz7V9GFrMFSZS5FF7ZHH53rpd4NSsAPpVtYvjZD2VbTW8ExEVyZW9tDgepfS3c4RZVQxjfmBeRK",
  "key15": "5iXcfQ4yJToQtnaqZ8s8Ybc3JkMzFg6tUzuYx1sjtcaeeYGtxoh7hVRL5SuJsPG2nbs1orZ3CPf8uC5GoKPBVqvY",
  "key16": "3iktFRATpy1AG2yPDWc96VWdv1wdCwNyxwZ7PWrADy8mt14mBQBjTaaqsm2dcgj2S5yyFFaz91L7nAU2s4PV9CR9",
  "key17": "3RDVbR3c9CLaRpwkKMFKm29RDcFYxkuVxPWGfWeJHHpw3Ld3wpBNZa4xQ3aaH7brvkMog1X7stqEzC7AgiqxbtzF",
  "key18": "29EnEQypLsfRWZTL52qFRUjfZ3Hvxnwv2RVd2MRDUepLtWgx3Lr1HTpoQxtG73Xf1GDrvRP99UjPMqFqu8kWETs2",
  "key19": "44WPYj8y8C7TFEMAkPKSd7dNqn8FBA9CpnyRNE55Ub36GnRqskmkM3hUu5217n12czcHNks7QuM9desA1f77Qe7c",
  "key20": "5HkKTH6JzFK4suNDFXNCYFCcUxr4mNxzJqvwGBMBwGtnw2zurpL2oj98XZhVGdr2hUDTYWwRUvNUvSfdZggdzvv3",
  "key21": "f51UeDbkMPz81sc5f177Y1bReoTppUpRM5NR7UvK5w3CXhMm8VNUjTC5QschLpEnRwuPG3RgiYyfhKLJiii5Kbq",
  "key22": "5awJ6uoefccRjcAyLn9GH4ZBBqEuokATQr99jRMP194nwQ3KUh3nNiWZ4bN8Q8sQWTtgVbfkLdQBFfzCyjLp725q",
  "key23": "5grfFfkEwVwprWMwSA1Fc9zsL8Q3MYjiqTyRtihopv2NsWn2e4PgPcShLufVvRDs8okn5VnLYeXStNmbKA4xZs9F",
  "key24": "C2rAKHefUctUhefLocVWdhJPsXASTJBjCqsR5BJB1XP1FCWV6CgRgsSXGWXNZESiWbnpVWB3QK13uYuASaeXfwz",
  "key25": "539cC4oM7pudgc5ZeYYgCbH9zJ6a88UeiTCfak348ARUNdCD6ojobsxyK2WoeCnC4oTxbLcMJPJqRLbgJR4WY44G",
  "key26": "62464PuuP9GbQfqBHb62xLL5Vqd7vtuDyM7xaxerCvthjZQwMhTrX1CD29CPqmRJZze5hH7BUpG69xjNZ9gBZqtQ",
  "key27": "2JyXcwX7WerSiySePMcjtW6KQn7RtDtGqQjv1hq7xz788Ckg3mE17EMNXaxnCs2VtBZY2WHaAKkgTP4rTRpjf4zP",
  "key28": "5Zyp1uT6L6P8vnrtYjTcjD6vyj6mthkvotiVt2NWs92eATMZP1C9Rg7TQyZsvB2CcYtZgfazSWgLoH8hSrDDjND3",
  "key29": "zJbobuzqHKQVsaLV7CxyQeHbTNVFci6EGmcEKTLNgfLzQrfn65iyB6xXTk34MVMpwwRysBUytMGn5rM3yo78g5B",
  "key30": "rEaN558Hap1gCLffwF771Rst3nZM4jKYT4qkehL8afXwX8pYMWsa9hv3PhMgLvCAWuouBjHFor1d7brzbKg3Zzg",
  "key31": "2TfCypeazfJkF9MQDaUg27AhsECut2b5HsvNYCDsLq5vEk4bE69DmdF3Z6CWYpZEboPCFAeP7RFGDh1F96rpCo1K",
  "key32": "5g2bzxDUZ5YwqgnxMkefqSL7ZDmR7zWbK9DfNV1QP8tb2AJkvMonPvE8oZ3jRYvNb6Knp3ijJqUktb7DMWM7H6Mf",
  "key33": "5F5MVVwbekJw1Q2drFe3cjfhXjnuAEiMHKbNgJdwk8eRKoFvVWnnW1x374UjLFoorR5biNcRjCvdnPxmNrWE1Tes",
  "key34": "4yxtyHcyXHLoPkJ6mq8UwC5L5TQbxKEPUHoNixgn6GTzF69fs5SzpTtQSUgCArXQhHr43o9Sh79kpEjRhvS4q9uk",
  "key35": "GkpC8fXQr4QZRY3meRXKVM8Vojh3jpJmtHcFbqAq88hucaXeSsLQCbp3hQcXtJzFRoN8GY164kCs7ABHsE29eLC",
  "key36": "2PJNX3wSY1FvodHZBpfdjXXoDSF7wSVa5fHzQecKrvLqMDs57fMxo3pMivEgf8Dcr8FywjEA4jN8WrNQybenUZPd",
  "key37": "28LmPvJDP1jsuVuT6ueBMiKbfUUpd6zKapueFR9XW5AKciJj3oftvHjVKBH2vQAS4FGdzLbuKovNmXGZ9MUovtiM",
  "key38": "427PNDUgSS6GhKGeJUjmjt8EAZ1x2RhXaCLdKn8pUStcoDoybjFCagnrTFJtb9xyfxfSGeXKTmbTe6buQDCWBKMT",
  "key39": "3VpQNyRQUnyBBpHEm9GxfdbMdmyDnZGmhKE9oPst2wxF8L7NTWMZZRAVqqj4YnAnU9h6buDg5p8cL1z3PX82Wo3a",
  "key40": "4pTFBBP6Sk1ezkDuoSty87pg9PLp4CYLkQMvGZEU9Gt3ZLPZcksqy96PiWc4jpYAjMzKapTvaozZbCV3rEYhZopz",
  "key41": "5bBi5BBLHf7SgHrYH6vVVoNCmejBvqQ8rYZUR8F5qcEbLZbrkGYyiogN8tMTqJTpD8HngcqgXRExVReHSqto2Ygs",
  "key42": "4y9URNvAmGUq5F7TS84a3mXkBtAH9a1yGouBhqrNQiiwkFxPSBAPuubTvp48fvCpttdZRg8YQALmdZ8TgsEs5Fea",
  "key43": "5aQU6o7TCS7sWjj74sLwEhjQ5F1F5XhNvpWTHkMPnubNoKEuXUupGj3yVbk3T8dECD37TpBHeVxVtQtgQH6kD8ea",
  "key44": "4wAKjQ3bui6LZ51owuUgBXrx4BCAxxoaLhXKneFxjzK3PNbmk8PJpEC2Rmw7jxxFqqdkNfvsDpVuAZ4KbTbM3SMG",
  "key45": "2dXADUx8QzwrKxprTvJJ59fEEWNvfRRY8pCjw92FRSPJ76qoC5a65jA6qSuJPfdgKEya6xc44nCwit5nc1dzUGhk"
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
