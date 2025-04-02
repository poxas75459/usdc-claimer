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
    "1YD6ypevppkPJHkQwFym4XiwGrq9EAa4TmBwRoK6Mrobet9Xf5nwDmuvcJNjGoabqnHUs26EYhmLTPhkkQhkHzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sHj9d5QbnX6YTjkAvkQSiJxdGGYPjSWviuAsUTZCKkGhXsCSRUESZimUkY2FDihAujcPhjddj62BvG8aZg2ayFz",
  "key1": "3Gjjd8wbH4sJwTsgjteisjRWKKLAcJ4uJfiSdJQRTyejJwJ84cWNXFsE7heg8KxYg5ZYQSUgTmtibseYWcotVquz",
  "key2": "2Fga1peW5s6dQ74S6aPX1sGwTeJK6eDmL773Y9ZqvYm3obgUHzoeHniBwMjqyiTB9USfgsBVFhhmJZctiRPbA8XK",
  "key3": "3oLw6bem4vFB1EVbqEdqHHwVFKpNDKVbxGmXtdvSwMR6XSQJTxJnfxRSfzDcBdorW8GH3LoUVKrZrkqtZqVNUVxv",
  "key4": "5338XscqfnEDBQ2uHJWm8FStzRCtq7xKLJwJwdbukZUQwZhZ8q5WcaVrdihVi5SRYusFVGMRcb1hiEtdecb5h8es",
  "key5": "4EMqgiSKukTmnbXgqRtiHPcxfcqhpzLwZQW25z6yym69uw8iUxAamzoY641d4d7oHJG5PnX3U5R7PZ67xJbNWDC",
  "key6": "6CvJDUqg9EXUXpDVS1Q1xHw17ttiW5LeMALv47EVEfAc7NDZXdy7C1S79QgKoxowFtk7huDwLHHDcozf4QVqoey",
  "key7": "9hhmvEdBDWP8W1xVJbK57J5U48zfZSq1oq2JFrrMhhb3U9puQYT265o1Apy5g7aVgXQipL1WGBWAkMmNEBAWa4h",
  "key8": "TJbzG2pg1xo1BBsiHaR37M8KzKNZcsaD9bDcEYmtvsm9wiT7q8JxYL7yAAg8fNx76JuYGEoZnXPHn4AmNHNtX6j",
  "key9": "4PLpRtbbDNH1qxLEZontqteH85wgngG9W4FTUYLx18yKhMa7eWGFiwFCDgfgxSwQsKCRPeDPnk5gyobcWhSam7hM",
  "key10": "5cD4Ha9vpG7pgLYid5DJ4vV3Vfg9DduaWcs7X8z9y164sfMia2LWra4zNLTEBghJuoZfKhssePWJdi782kzLm8kz",
  "key11": "25DXVurMFykgRya6Pgf5hK5yWPYbKudmVt8LKEPKVSvehLUQY7TtvkoGi7sfok1XeLyxzF3AB2rHgRfRfKW1teCP",
  "key12": "5Dv2Ym2CPKD9qFeRc3VBGscmCH6HVdX4KhehiysSR2ZMaNdbdbgBC2QbtjVcXYCiLGjrc78NdjBvFVmXijQ9vFtp",
  "key13": "2w7bUE5tMKAs5gkrN4PeQfRf5FyfTTTZbzEmfkmQ6dBiTANt5hYYMsqpDiUghmSuYRLZzaiGwsbADjNVefG5J546",
  "key14": "dKSNJ3mh2qv9TyiVj2sy3pcnhxjbkaQrcK3ZvJ4m3vfo7Wt1fMs2MQpvsA88saVGRxpWgVMmJuWz5gM6E5o5p2i",
  "key15": "55HCCoGGkNy8CfU1MAvrJqL9iKGdxwfDQyVfGJ65JCmfQCyun3DEAXiUC5KKa8jiSdJoSidY8p9Nyc6coxHmtCuw",
  "key16": "VudBK7wdRRFjGxBVVx49yKKm4LTmCQMMewZmuHn1Mehjqv817qG5CHNRoKLgBGg5y8P8f5nKtFzW6Bd72qiEdHB",
  "key17": "2a1PbevugBoRt7JiwvTy89RHwwvJrVrK2m9iULnVnV4mKuvj8soMfuvJXmtxh5aN3XzYfXxfQ7vdJYXiMcjuhC34",
  "key18": "4nhBRBndHHx2hpiZ93fwezhygjwR5LoSJ3akqfQisi2MWdYM6pU1VfPzt8PTUa3HtPrkhk7N8dvjLNN8JPmVCW5j",
  "key19": "26LCg4KyEbZ9ZSt1hVQ9upBF8MuisDSSVBYQe1YXnWTRB1tU4HY5jXwn1AwyFGT48sD3Kx2bodDkRaSm5qTkbPek",
  "key20": "aJZxc7WXhGkbwrQzeNwqYuZn23o1qJTNEfTQLCCmTEPKbLqJ8nYNU2aafy1BgBW73gLeysYu8UHxXSWC4RJsgHA",
  "key21": "2NPhSCZru48LKRQDFLG3x2TB1UPME8AVEQ5bpzJwVYzmmeQx7tBkZ2qMTZy7LPKzAKxHv6hCKPjWFWaUErozCkB7",
  "key22": "4K6HmqFYLeWQPbq5Lt1CgCPHbRRmdZvyYXz7Rvixq48J4VwGHmQQ2LHtWrirGVhbSx5Pu91jwUXfzRXznKRiBtbm",
  "key23": "5oTaVHY8dRf2RRJ32R6YU8r35Td21p9K7PUsaByD4uPiAReHocEEdR1Mv7eq1tmXAW4HvbteeJ3NDSE8RQzFfLgA",
  "key24": "2WAsGa1cMXh5PwHuwd6VYnT2SNKxcBihSPnqrUnf9srMuKmPtkjwAZdEjzKHG9wFa3NSTKL2b9qhMH9rdXmerKdv",
  "key25": "3jqnZ4veyp6oHXmZpumSZ7YdpyazWjhMTbQHApHFMnQCmTDErwrt1igbrZHyhmM1LYSXyUBv3MmjEjKWQXG26MaR"
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
