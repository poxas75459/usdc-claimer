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
    "2ztue5rxELq41AuCFUaNtcQzkzunDV7BixtxoANsPX7sMeuzraMwhQPXRnthYBWC1inKNQXxxn24pbeVq5MNf6ko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57F9VnpyyeqSZmsmWrG781ZPkCE9C9ptdwpB8SnWwdTZDbFPHyFKE2EJKTpYiG2ChaCzkGd6qtzJ5jqrfEz57kFa",
  "key1": "39TRrhF3anDtQggZ9pzxjVHSEmCmb66BXSNZfkQAFU28P3xJSvexrrMKdncFE8zt6JcRiSYRqrr6DEC7w8YNgNt9",
  "key2": "r991iEKL2P6Py9PMJQwMedEfHQ9juAYhprzACjfTAqV4fBUmddQLxKoQV4zQT1h3oJPn7AvfGDzKRW1JMomAdci",
  "key3": "hHks8SMBesSyVMRspuxF7Mt98bJ651UA1rEfuT83iEoFqxH4dBJFjhEoM6wcVVsmGqyFpx5ZVAHKiJDwGuBgNBx",
  "key4": "4ufQKQ44ZepPmCY52Vb4KiZ3kNhcKaEsQQc2kibu1TGzMjq2qFy4cYtEjgCuW1iEJx45hxATJyp7zFVUgAfShF5m",
  "key5": "5PNpRNJmrzc5NzjhcGkEGpjyjVEcsFR1WaoXxqizQY6zyuumRt6G6rCjgHAtzwStjsHk9zwKsNFAiTRjUCGPz5Fk",
  "key6": "2ejhxUKRa7sdw5y9gFjBk2CnCbMNAbZTRgtzMsCu5XSxeoassxYMQrSrVaVX8xoBDPFPgpAFQJQyNFssDKDYHGx1",
  "key7": "2REQtavT1HDBGMK53frwhiff6NnV3JQxo4vB2vzp7FZgAY2ykv7r8e5BcqA1HZ8eStYsZJqfrL5BQSsuJDL7usxL",
  "key8": "i3MjnvR5BsN69ncvC6RDyWW9jd83zrfjsZrEWioo7qTsHDPLuYBiTCcsMV9z1ZzJMJ7mBzPft12Aob7QLnd7vPk",
  "key9": "LrSgEXu4rh1yc8YdLmKr3TVFzv7kZndn3ZAFx1CQhUQbCBHBkr5xfeKNYruXkwJAH4hrrJhCuBqLik8a6ptRybj",
  "key10": "2xFRnLL9Q41dSzMedXEgda4ZpsMTaG9vcBMjrsSNT87WvgGnryZT3XZ9aETyjC5NjzDqziBGkNYPumSMsFEvuKz4",
  "key11": "32HfW53VAHSwujfUqHeKjqq6jsRCRsKsuDtxWUswqfY6pHrmMJjhiU39CymkFPyeTrFUJym4GkJfjRisaz6isYeb",
  "key12": "2BivRzXz4zbXy9Z9AtaU3WGaSwPaXfkQ2BNXcnppfvwjFv5rzm2iuGwxbSQhkTG2TpJehdQYtkqd9Wq2UVVE2XQA",
  "key13": "2z1tMSJfb1txnFvGvbXZrUbhk627DaZuJp5fFmH8xEtwT3K562dSPv2gCgzavjm7Q6ZY7j5LJVKu76nmDrUhisxn",
  "key14": "5AQM7uNCZd764YRfP5UjSbYMiyHWnZNMAYv39E4TgUzGmsfokfVBmikPevkXNsBiuaUVaRtByfnQkRRTevoBZpGV",
  "key15": "vUBw97KmNXm5fuVZXEZgFAy548k59dCFzG4SNxNEWWkQsq72KDojcZssdcjRSFKdtpw8T2zvEy2RQVbYPDSx2bj",
  "key16": "ToSMg4gMNdkmaxCkakdBJPL2LysgvhBHhP5eG89TQmsaScbefCb9rs2D2jyrj7ckNSQVNMDLPwygbsKxCugnqx7",
  "key17": "62fhQBsCZHu7HqKV1zYX8a8zWxWPHY61C67ypWicQYLq3TVUBmAiKWhv6PmqJkXTLXGqP56zvpe6Xsh6b5ydwYML",
  "key18": "yG8RKK8LLV1Eibg9GNF2zswyZHZxaFh6UJ57FMpELA8mrBYjbwFBFW7GXxQkbfWLQVYS3guNp4529VeMNdhE8Hb",
  "key19": "49x14GQGWtu9rkZ1marHgZNvyNStpc6d5Fa14GyAkeGjaYYoTvsMQhHDwZCcMGw9Kva7YqabXsYKqoKL85DFFVvC",
  "key20": "3EsrJYjFGd5FPr6SF69d6Kk3uNWmVpYv5MaKdxVYKQ6yo6DS6iNconEHPqkLbRYwUdAt87xgRCnVmxQVMxSbHyAx",
  "key21": "2xuqnRg5qtZ5YHraX4f2JzKu9uP5pNpBSMJe14KwvqWBuLsf1JZmhgh36jejBpqhPZba7FNjBjz3SQ44UXoWHk6s",
  "key22": "5xfF2KiYPf182ttmZLQJ8Wd4xHdxR8oyDW3HEVpt4DcA5wdEpevwWxdjkZq3PFY286X5td5hjR78mESysHu3mNaq",
  "key23": "3pfco3QYdk7B62ga61EF5uPyBvnMEqWttnHxyK4uzbbhAJH91CAesnT4RNvhkcvfRGeRN7DtjgKoAHy4jdLAxh75",
  "key24": "2STzhDWyRT8bB1SZ3cKnr5qxABuze4bW3pnocQyK5BiTsF4ZDoMNyEkU7T2HD6Xutp7M2zeD2XeJt68EtALCGhoo",
  "key25": "2vuQjrikJbfsUF8rUwMyrvHjzovtiSdKJPwvPaaMWyjg1xASY3uVsUQWSFshJPAtP3TZdceo9L4i8S2aTL69Wk7u",
  "key26": "4LkuEKkUBwgFDMZaBGPek91QenUXyvomnhZ45jrbFpzrUNK5xUruESdAkKgUZ8Zv78CKna5sErxQp1rW3Tj7t9zn",
  "key27": "2jAbNWePNhSzzLviu4uXZiq5GmBo2tJmFJ3ajQtemRDm2yVseF1NAUULbDw1vxB58S1hNBW1KEuzxiAgyzdJHBtg",
  "key28": "2AcCSwy2mC9PsM6hN3uMPfhFRUUtj3K4dzh7px69nQtTBCCmQ83hzewY5Y2xMEqJB6jC3WvF6qinN4UFib3zDrKi",
  "key29": "37Mk16vptmhr1CxN2WkPsY4dt6wdEMQB3kjbXhjPUrqrYV69z5zMdYrXUV2UocsWHjXa9r9aSaiA94LcM2g4pThc"
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
