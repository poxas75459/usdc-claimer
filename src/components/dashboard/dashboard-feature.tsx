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
    "2pvjfhDxxGeBS2gCLzrxrS7Pup24keZWbig5L9iUft55yEr9pF3Hq45qWBgHWUgxSaiMxnwt7nvkSWEFsUV14ZVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v6QZFXjJWvdKH9QKpwH9gvu4f7cqgAsFp9AQaPUsmawTT1GmXzbmpajdNzzEh2Hqww1XAxbSQEhPFKwCz3RE3E3",
  "key1": "57o85WbrtWGb5z7NxQDXmsgmcJdTPjXoknmtLbtoAdFU8aNWDrsf6gExfAnGNLiMPczAenc4tDgZ4wAzhHfTydL3",
  "key2": "4SP1rP6LWV3yYwCcWbA8woWZptiJa5qSENtpKAoQVw2trpawH1rECpXCNWHgzMKn46a2aDa8YHndTVsa2Z6yNdHM",
  "key3": "4BCy7Urf4v7Ra6iyV4QQCSAxswgpc81xCQvh8YhMUJc3XztWzBypxfBKHziw73qqaBDYHc6kN5LHELYuJH4in8vu",
  "key4": "4wxYy6gtg43u67MZSuo4cm5hjqnqnDPVcUuA6XMGnMj7WFyLT63Z8j51UHXRfVQnzaxvRsnji4LkbwSCUN4yB9SB",
  "key5": "21qpJFW4t4xEiE6eVUJhczYkLPULsCi8rvghHSYvFydoqCoJQa3EXYj3Wrzrth9CXyQFRRMx9yZuTgwDs3vFAd2S",
  "key6": "tTbLb2ZR5LJcsbx3y8C4nq9srvunqMo7gB1QA6v9WM478jSSdwzbGF7n25d9wm5HFyF3vj6TpegFNLwsoQKtJWC",
  "key7": "3tevvtcaNrRuAT56A7zPYdM9NnP4wy4jpm1EdgaSB7rSp8b1ZKbvQn4qEbbAkN5wKBaZJ8fAxQ9MV2XFpkLNGYJo",
  "key8": "3kfZ6XaAPVLA78f5dK1BmtSi7sHR3KpfVkGTqviSNiZGBXMCG2FKMVcVDJggjjqMPjL9UqZR3AX7qYZjS14x8fzr",
  "key9": "5sNMNrKBpjhQEAvAnSpw5ddQCGBBhm3ngt7s8Loc7FyQyWQZrQ5mvNRdtbQU2qwvCnWyhrnc6UprFiJbqLSifmrC",
  "key10": "2366YLF8ZpvoRSME8eSPj1WnB2qb71Kj5ZbLkp5iBFRiGk3uNRPHKWWVBTpYn2b7ci5MEhr9qyyPDtMYtMax3E4B",
  "key11": "Luv51TpyVYbVopDx8vpmcJRtqqjBs5LBBt7Sa3gSuPy288M5Wp2LA3noSE3tnAzZHAyyd5TMh8oBgewKLpMhh6Z",
  "key12": "59acxrUPFBBXscwuo7oHfjReFzWy4a3As7QVUQ5rwX8fu4ZhU3EYnF4V9vxbKmrzrtRrzjdxgyVaWsrcsGutBFCy",
  "key13": "223eiCtFfRN7Z3k7EztkQhq65q97MXWGDzhkKLzWKPCD9qoJun5dBXXcHxG4hiZVHqQiXXWrpdotuFUwQkvUnT73",
  "key14": "wxW2r4cnaWyGYxt8JdDhGinhpQBKTEt3T5TwWXE8HMJvUGJQ4ynDA7N71fPWjrd68uGy6xCHgvQGq1zZ18zTToB",
  "key15": "35nzwEQgJbEoZZhd8B9FNFhafUWh9GCeCXS66UUR4wki9n1TpL7Jncq3FNB4d4g32mbhmsgKwHLLXrzcV4S1VpfT",
  "key16": "3BpCbtzJhmhyMqAnVaTBK5arPcFaCsAwhF4rmHQhBDg6nesLZa2d4xZ94rG2YWkovosmoEEvtf21DaDQHu7DNfyP",
  "key17": "33JH5yAMby2JsaXUfdMBqybyaZ6tWB8nYvU2Y7AYy7hmNLonCq3LMu9HmSLGtWXzre7x7A18SkKwoD9XcUoYjUpS",
  "key18": "5nw6XxMGwMDVuH4ZMesxEwuzNpejbxMPwMZV7qV9DdL8gKGorkqmjBoUGnzHYoHAazv1s4iCk2o5Tp6xJAKrxL1G",
  "key19": "22hxA3fHWcfs8z1E2XktqQxjNRydSfYPyx16PUsctj5XQgUyzvAkh98Z3u5dhbse21YWrd1bRhQmMyuxE7VXRTqW",
  "key20": "Nu24kXmAnnTgL9YWQWJDTANEqf6Qg4FMzSoNXiJco2DKTdgu99FoBzhhyN5b6C5BujK2BF1vauTt3iJ5Ax98nhi",
  "key21": "62mQrnnYcBSUSkmyDQsj3mzZt6L8TsMciJVFSkoDTi7uUatsqAaJoDe9hE3mQUi6k2rFtufqM1rTFVyq25YQbJxg",
  "key22": "4UzXRuLoGQAyxq3qe6yaKFVMgXHSQcCC3DiV3uMLg1tRWUzVgbug7b4V5SDXnLBP9Dq8BCG5EfU3D6QUGDsLnLFA",
  "key23": "hL22MjXX28kFh6qc5qsqSrnQQMzhmXQx2yXssfBJAVY9mDJMWWrQD3dtQnEhe27KbvtctvAJ7Gdzu9La4GNywWc",
  "key24": "2cQ4vRddaBgoE1jMSaXYn11fgkUtwjvf8AUshvhaakEHkeJbnp3AfALdYozis2tgYta3c5UEcEViLYR9316vzWsu",
  "key25": "M4shBBzihUQEEHemvmxfq5P5HT8DSArUzHNibeNdAeZTyLJUChaY1L8UDm2WniFt2Jwco37hEcDtnEUdh8vgq6F",
  "key26": "2u8b9dgAK3DvjQxg2CZZRAPpzuPt1NFfTB1bmatrJKLK6g4PurmR8zRGVSVHkvYzKmSJJyYuXnT3C2pNH3VHYW6b",
  "key27": "55jhz5ADu1xhmLqhw8s7y5onkJsEQZwooPAzi1gKJH8CHVMFuKMAmb29zjTQpNzPd1kWAafTQmwWeCvFwsVCSwXz",
  "key28": "384yZYCeAjzL5LcUkTnr8TWUBMg9vPDcKfLVpoyuRZX9ggVHgiyCQceZjUFe8gSNdGmCwAfNkt88iAjn7yL7zHfo",
  "key29": "2AAATz6ni5ZE51uX179RHoWcwBwTKoEASJ5fbH2xUnHderNyTQUt24zjcN7NVYEzgrbx4p9H3XBAfZ4uKpKYEEyN",
  "key30": "3GevxMERhvVqAhwXypznN1bs2ok1YimmQkLJBAWdZWEoGh2BHZygDgAahPyRcQvKGtBiBwUb1KtZDJFmk4X8PhYe"
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
