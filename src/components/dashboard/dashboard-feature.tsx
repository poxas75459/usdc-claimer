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
    "5fr7wiaWMSHeuv2GsoseMMr5rQBSm1oHCXgpeC82dAgFXx8B39psnueVckMnvdjYmgrcdYmTx2t36GSGsNnQVLU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hEhiFWoAavQ2EuDsrto4jjwgMhxTwM7nsonNfMyMVa3pYi2ryrQME6A1jgqU6VtMUYf6Hc2h4JqsMyuFZPaHCKw",
  "key1": "4aGtoLJ5F9uoNgmbaLpXZ3sMUcBnC9BetYR43ZP4xZfEExMf9txbP4yyjHSzyN1YQFdbPgU3DGCmaAbwdo1GUpYX",
  "key2": "5fabhot2U7fojWwe3dMhJHDejQkk5SGP8QpJB97knxMGg32zHnd1iiCt7A3SCGtFjcL2bQP2XGQ3fCMkT8KAMKAT",
  "key3": "x1pLa6CG6dUJ599JpNDmABLhqyc1NEon8AN21ojbukiNsZGQtefzSWXJQb2nteJ7EDkEC6JNo9RemSK32vCd4hJ",
  "key4": "55ugNY2bGuYfEijQnegJGm7TmrC8AWDTcCm23iUvxTB12Mk2C1TT9EsRCesVha3ePckvpDafrv8uhZyo1HDDLVmw",
  "key5": "34Bm8g9FdszDzE4gMgGv9y3Pwk3vimb6uqjvM9yj1M2oZU5APTjFyovbgg3LnT3X1RN5gv8AQsL9XxsLPs2HNg4v",
  "key6": "5g3dHgJb4J1d42fLk88rXWdJwcd6xMLaseQAoRoHEpQ2iaKD9vSXjB4HpdMP5xzxnMMj7qGefbRSvMD2FhFgYJYD",
  "key7": "2xSrhRNU3q4QHheTEcT77QJx74jM5qQvhuYeySDrpD8duSKp2Rt6tCEBrLjzMCyF4dtPECJiXTHTgPZjfEYQD9Wm",
  "key8": "eH3YhUoGkvCBCzQ4heWBfWKeghxbNtqsenj2TmmCM9z2uZfDR2rPjUJL8hqPUN3EfM8Xn1LWAmYeHfE2fZacp1X",
  "key9": "h1aVZPxDaKML8fRv7pXRKmLu44w2rEcwXv93R4k45a7tniwZqZDG36vsWU5jy6yf1251B4ekQ2q6GTktW6Mcz65",
  "key10": "43E9QWEbvceddGUyBRk2UqQy9qvtscxZDJxnsvjPgzw9XcMJFQxKLFxKpL2mPpTeYBbCmzqePGq8QbSHeYuvLexV",
  "key11": "2tuwo1N88G3KE9rPkNvyvL4AfYgJkDN4etJhaFnA3zTJ33SYgdNfNky2oCSdURJTBKASdEcu9dRQ6e21Zt8nUcFr",
  "key12": "42ijaQ1HhT4a2nB3igBErp1Y5Ex2dPzLVcMcTm1icon3Bom5EZSsF3GZvQrryvG6hbJaTQcCMEvS9WLTpVwjgMzc",
  "key13": "4pJFbey4YeZiJaGUmokXaQ4ct6FUtXdAk6hjKTVkHS9MV6PVcvK4XxY95sk3RCeJi1rjme1kESzUmRjheDz4nt3A",
  "key14": "3JoqdJYNzhWgcrdF6PL6MfoyHdpaogWm7LF8eAbj8onRde6KLmns4iX1mPZWhU8co7QRz6FboRbtCNiCMSudt8gk",
  "key15": "28QtJBJdERVzwGGzeaRPQWABnWURchRH4HUvpEqZzhgtg8rhxbSMYgerwacvqFEuWcf4FALYSYnkPZVg6J7HC5wL",
  "key16": "hoMovSnsoNaHPdA2EphB5KTtWqzLYCteX2UAn6iuxedftagZTMK2FL8eR9JtD9nAqd8AzpYLK8whB2uKkz22TXK",
  "key17": "NUP8dJqb3bWoZ5Jzwe953oh2yAf2yyrPJr2V2HZpB8fc6SXBU1QFjKkRHRjH1uzUaNDimHFT75mHKMBRQPSsehJ",
  "key18": "2md3URgKuCps1NXKjfvdJAr3po8JvRm1x5hqU3j99654uzKUjE8djWudrMQa2chrPviwuvRHi1i6MsMsfU1eLbwT",
  "key19": "26MW3EztyHjAEGbmbv7zreHcCevL4UtNukAaAvt6Q58NBa6YW6yLtfsZRDiyMRMMTUjB9PVyYMbFvQqNHfdkYZbh",
  "key20": "42foFn1XNsSABJWL77FiRakSjermEpa2uuiUQj1JR1pzzC2qdoM9vNhXgHe8BKr78ST4mHjVCxyR1xr8VqxZxCJS",
  "key21": "24wjYRPnYiNK91VqPwmFDsXG8YDFAbMv4U5hP75hT417xqLTmV88QV8KTvJCG6LBr46VPqfNUkFsJRGyU1jGDUff",
  "key22": "oQ27vySkURkaLfAPK8Ygt5ZU9S6etAdRHoYc8or3s5vmR3mnAS8DnrK8smBCuLQtsWtHcwCzFc1Lh9qa8RiVAjX",
  "key23": "2zpk62akoK7hXG3cTenS8DNt4G8cZBdQprQpZSq9ee8T4fpnX3mwuaYUBBqjiTJSY4wsTXCWQm4UPuNHDMbEpQVw",
  "key24": "UGSB7caan5D9GDZ9dFwczQ1DUHswSPRMdofzR7kxiks2vnUuaf4ezHFYxvPgLht9JgcRc8VJg2K9JHJWiFe2Zu5",
  "key25": "42bwH9VP9YhLdsWAjRwhJxmr4xeRgJLQJwX7qqrbEaHVw8nWcJBi7WyZBTqEsGRkb7h7txHpugiDcFGPB393g1fS",
  "key26": "4gsrbrWEBq4PTNSuS479Nh51oF4DA1jXsALFhEoaRT3xfcU2eVPJ7yDerEQGBGEjfHUt5wyeReRDjAWtMkpg9iub",
  "key27": "5EtdC1SqErgZVuogUmeaJmUQ4nTCeqfzvqyvrS7rnL5wKaRVA2k9QLuTn5CfPVqkFCFwEySntfrYg1zEy7FNBskE",
  "key28": "2KSLQE8AcoEMRe5gs44HQ2tjPfreraUEAMv3cmonusdaGU1E7nufq54J8CFdgUNX2Hfuw1K6jJrbZjpP1nX1AtJw",
  "key29": "4u69UoqhJiVUit1j6U2kAjjfd3muBhQZrGJrrB9kq1GFUYzUuPbC426Eep57f3Ly5RtasgM8Fbh5jvxKfzQGo4xF",
  "key30": "JQEDWHbehvBiWSTVfueJjRc9N2RoX2YxNuERTPFcT5MNxL1RMdiR1MsWG3ReTXkvGuGN5vyiFCg2oBm1LCBgdbJ",
  "key31": "2gEcokUEArtDxBUQhqzdSVqovX28R2rQoYLxarP8oobT1qLcBfU5oA6uz5wgJieByyfE6okMWDemDXp379c2taLG",
  "key32": "4JgXcJHWW3K1h5YXWPrZivwfXvxm8juPjgepaRXMGhLEhhrtzCe9fzccpXvheVEwN98ibU9LTp4HjQtjN7ZthLEM",
  "key33": "4Wsv59qgoeTzdgYjvGCSS5WCHNfqQjDw5n8r6Cnf2bYK5wG9bkVc276QH1yfqRPgWkoymBXEWHdKPJQu13245eHg"
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
