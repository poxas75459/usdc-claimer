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
    "5Pq1gUyu1uD7g5W9Pf1rBVVMP5epJwWFEojmGtrXXR58F5cTkq4Dd4ogD1wFbiqEEaqkK9T62kaeXb2FvaruWZWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24GBYwrYk3Zm1s3qaS5nyRi8ytfyraqTgfc8dD9s5G6M8dBPVnLwDDowecrKZZ1YKthYpju6tZd1vFquWKAYHsYQ",
  "key1": "3RMZLVe8GK9zonKDLUFGLPpbLTK2xntMZHgmYjAGKh42JUqPs4i2U6Z8L4RKQ83cz5f2BU4MrfQkHiwEJx6kmS45",
  "key2": "3B9xLBmQ8b84kGbhRdubr6rmUraBpi4ttnN8NUGMwkrDvyGxWGp2QfoWYuxtfFWRigAN3Yg3NNadEK6rW7qfDvx9",
  "key3": "2A9u1A5N4aW9UucNWv8SjuACmoyxG3FDg24HggZYtvnWE3evz2iFo9bjeuLtAeG9dFCTGwgwhtQ9xapYoDGbFLPn",
  "key4": "4zPTg9o7maX2PEvJx8RpuTQMx24SR4y98nPvaVaJqS5tvgMrU6jsRh66jUbZcaoQfzEwSWVZ4NYAg4cHYjpgDYy2",
  "key5": "4itNs3WwGhhvJMmXY51J4xDSnZSPM4AEvUnaUVBsmskRrkSdMTic9QH7Ak1uCbbjRuqJaJXcsodHsyepNzbrciPS",
  "key6": "4ngHrGZZ84Q7kYqGA9WYctoqG1eCNm2kRQcUi6UyPU3RXngseDcx9U4axXfmeFhtjRiV8nMTYASwwGuF36PWuSXC",
  "key7": "21ooY6ztvaeCgSqvD66FTT8cxG3i2WWdm8adipJQa69Kf2GW8mbXx1fMwNvumK5YsFqBEhLUiUHGNmDXemBVpkzh",
  "key8": "5N1HjzJND3BcBTfLShH7pQhq7aDz8F3FFZyqfG9DTYTqREd1SDkXA9FaqUuMa71LZhbjcxAwQzMK2jWE8AN5qZmJ",
  "key9": "2YmA3JPN51Mt7C4S3VHP5xiDEx2hHHrhD3AUgicF6bSvc4g3mCpKYdwEu3pDqyZMHB4hC29eeuUYPSdQVKgbFHCe",
  "key10": "GQoVkEYgeqU3FJVKfBBLwqkZWCdqJhfJ1jEoyRAsJVphrco3NAKNgkFYttELYgByymh1ph1NzuvpfNQApw8ax85",
  "key11": "2sXy5MErpVnzkQep1CUf8Q7A7D7VTe8G6ghPyGiHQUvqUdBA2JcX7pJBJqWfCUUcvmgrggs3iRcWs8xcVgkYEFqL",
  "key12": "DR1Gro2XtHhMXcvotXWghiU3cau2uor2H3fA2sxpPar4LTGgr2S9TfqCKhycc1sfqyoyMR5Y9z7tkcuXFMvwNkh",
  "key13": "3Yoj16weHcatFh68enhqXP67TNPXtpdS9teYePxCkcXDnZtVqj9WUAT946DfRe5Uz6rpRWBs6cr5F86X1iXLNYrp",
  "key14": "62irXJcBBrbo8SejTGXNor4SNYwv4SFpd4xz5yVqR9vmEWxcQ1ugECZ91GNygftqup5wJdTGonNMbFFyTqafShr7",
  "key15": "5WUz3LJNWFE7HKo89jg2Ha7vuDMqujDQLuhhFan6cfowT6H99ZCZ7jodSzZK4gqS4ZkYgPNBqJE7EmeiCFujJfpG",
  "key16": "5ZqpMFwPNu9HNo1fzsMjeVjCTiYwgbsNmqq197R2265mZsNKT5a62UaMM1utfdoeWg56N6mERZbhMr3MgDYgGFmj",
  "key17": "JgrQwwPaJ3UyQtHTMyJBWU5C2zS3uceXPwombXj6DZzbijT3j6caU3sAtDU44ru9PWEqSmGrP1Di1keC3xqyMKA",
  "key18": "ZygssT3CaSQgWaXa3b3sUViDs89V6EedmXEjYnUgxY3nq2PRxAsN9rws5uXXXkBXvXh7EUh3H3MaKBEjPnXyqqp",
  "key19": "2SiiFpQcexagjMEEB47nKJxNmgXadWnVyQeiywbri71sCvtZ6cuttyk71MNzWdujT1xjmoRjYAHZc4J95txbGNYX",
  "key20": "4BtpFDp2a8bEAb44nKDyRiq5fc6A8S9HXNKkZxbpjWtPsrD3wfmcgChukgiudF3u7FKFWm1BHXKAaoJsGubppZre",
  "key21": "67peCkitT3q9Z97NWAv1FhxkiYro7JernaUNM9NWfFxTWQPLkvLnhMrjYC9ZFUZRzLty2CPCm1Wr2Jqc9DRXU5hB",
  "key22": "4BywNKZhLduVKBRQkBbogrG5WHqTavo5ssmYvZ2EtCQ6iEyboJRSuiVwNJXMbcnCbjRSmXQnw4Lkd6YFFtFL6FRU",
  "key23": "2NAQczDKuhyP2Hu7FrRapoeGf2S5kxbX4GzEYkSiMbCcnTqCYB1QEjGiHSRGa3jUB9ccDxQtidLmB2eG2m8wjMDh",
  "key24": "493X4275E6xEMyftNW2Kj9ngBgf9PKDhzVzfiio7969oUUTbKxbWgC5EBRvjaqhTJwYNvLRrYuxUmXEPZgV2Wa4i",
  "key25": "4xizHp9YgxqP3u3jiZRiFXSNcWdpA9NoecgUSiRcmc1XGwzXnWLhPy6eseBnkKVrw1MgJSWQnNEWHxyT3CG6koYu",
  "key26": "4Tc9V3GmwnCBfoKiDdMTpqEh1E7bsgSZfvn5zJ1ReeYZ5uf5zQH9EuV82tCJ5UyzyGnBhWPyo67qxDQDaHvtHPMs",
  "key27": "2YnnHBQXGBW1LEymQJKX2H4iCcUuqyYwzifMS7XNbSkBZYVYYjxgeP3g4oqyQ73EnUqWkmdRgFTCH8oY9werez3r",
  "key28": "d2Skju4bEuSbmZfTFf9Ctpupq4XX6h7Tzvw2PTMcUP9cDosonVXpnkxB2g5FhRAbrcQR79iitre9KfZuNXVs4m4",
  "key29": "2fuM8s9zLkurTkVpjkiw165iFHQtUqsn5h7s8r9YfxdxYB1X7ejk8tLW1h1NMXUn3t9BhpZmyuXYvcuuvrEFLS5W",
  "key30": "yQVLaQ3FJPxLVYJMJTRMzRS24uD3M7G6YaAtPzKZt3bZP3t25edNbAWx7aZAZPPGub6eoT5DvaJPscAN4TqSHbu",
  "key31": "2ixNqDqXmZJMb9KREmAMAaL6VCGNCcXA8bJWanFTeXnCZuczTF1aEqhcXxLLDBuvExviaVMKfq4WRdK5mweL9VWX",
  "key32": "am1E7XAGJi2xs8zyeYMzviVvAZAe1mwasK7mgqBGNEJSnN4xgdLnSdzk924XTSM7QijDG19kwTxFa45DvCX5j2T",
  "key33": "2MJfGJALGF7RzgDeBRUA4iLSjN7r5zAYQewpgQpYb41RG87ue5z7T7eWms8tk24iNaHgLsGFqk1VGYTFACRyTXrX",
  "key34": "2sJ7ZHeKMrKAiWN4JLXNKW26Wjn5G1TTRB6XxbrrBP3WVsrSZcbXyBmtphZoS1nSatfx3PMTRgjqG61XNGcJKzoc",
  "key35": "3hfnnEYZC6divzFb75nu1H6xxP2s2WRBAGWJmveBTu2yMR4ZErnAXBMjA6yWeqkAuxTSbPwUB4kGEALiuTw3ALKj",
  "key36": "BTi7DtfH3E6CWAUrtmMaMXwCkzftWtpVXdham9Wc8x32XdyxxocGf1i21vrd5hcR88HrYUvMeLH7pdWDbQDscjD",
  "key37": "2qBXJXbMojUYoQUf2qGdQKvCkoCw2yoiV5y2ruy3FrUcDB1zRBGd4qcGQRuaYtjR1ikzf1sskDLJnyRUcbBAukmn",
  "key38": "5AySXXFyL1zyQxR1A8Ka7tCgDJxKTSTead6MgNUgSCrcNNNQHkPyQkEXuuxdNkUw3MDykvDNH5YG4zWMUtY3tjEa",
  "key39": "4imcRKPqgXVW5AqJeXUWh4pdxPhdcF44KDDVLtgsgasf7sSmqjCm5j27E97wBkUyaGpYzPUNe2cnRMxksEFU2EpR",
  "key40": "2TSwA5A9xM8XnaUKZV13sdvMuRrVggKW6a7e9LbZZZR6TSrvKwzDWooU1fMG6skfpYpe6xrYR8iLQfxyj3gPMx6m",
  "key41": "5gKA1bXt3Fww4Hncttae98JRaGjXSudkz9gBXxWuL88uLZW7Fbw4Mhy7uQ5jhbLda2C6JhnJoLSrS9KgoHEhDJPv",
  "key42": "3XYotYtuiwePFZNHprkqBZkCyoNAjwyRLmeRVR2gucD9zu1YBaXBjM9vZ5Mjbn5u5XD8oDDTPGk1MoRvNiCybFba"
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
