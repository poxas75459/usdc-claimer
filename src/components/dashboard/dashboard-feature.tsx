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
    "36mq3vLntuV55iaDNgT7px5R8yomwwh7CWDME6SQaB1QHB5Sc9rtPtWMCnqDnbAg83UuyPFDZC3fFhpG5Bh37qia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kA2JmXSSotdL3KswagtVDgUwHYELN2TuyULCGjEjx6TbeZruVrXT1wVedekHZGzDUvTvhHB9cumkkKRn6S94cei",
  "key1": "2xWHR4h2FEKriaeKk4hdyNDFikrQUb7c2JtveqzphgwYba9m69LLqjjkegcA8ULZM1UWGZxyyPDUvtcgqYP8mgcg",
  "key2": "4W4v19dKwnrFbSKoaGinuTwX3QihCXVE3ZRDDXGdLQgiQK8GenEVwT7qUkbsXzQB27id6T9kPtrtc4uTYctr6vdk",
  "key3": "2abAuLMSqiqohVRD65S6Gfr8FPkA5JYC8etPM8it7cYUYvDQe5aieb87HkpUh5mMEn65piRPpnbj9xFMbJxvmKJg",
  "key4": "4EfbRYWvXjMRvqWMfEogo9ZnjaKcCBCC3x8j2WHkQE5oH5uTBwbfTeqxHyVArvBNXRoDpJHXw3YJUK4aMSA6zHba",
  "key5": "3FdrhncG7U8ffbcgFJXhEeKr3K5k72CZCaqJBBvGBTY4afQdHjFk2q9ZAowv7wygo9MN17bd8hGRwiYTaixwLvZM",
  "key6": "5WAX1QzpEfVnPKP4DhEATPtaP56joE4DYQgyee4bfYtbNEDcmnDusitNSMHKTACpNUzftshPW2y34BhBGvr8qbx3",
  "key7": "4nwPRGZSL4y2ywLg65BLLXcYoEomYbKpWJzSJ9k3hKZJ9rEeuNFffkodtZt1FvqfNUJay2DoXsnaGFVypbDtpMZk",
  "key8": "TPKnvsP6QneTG1YRTyC27m7iGy1AvMGi8SPLUvW11AQ5WLUNRUH4WTDjEt2otXyr6NQraTzumbJUhuT5LExR2C3",
  "key9": "53eDDBARGUyZhfg1bumgaJxzxVVutyGH4XNiZngkMtRHREEXpVUNCo4D1q5QwnF9VF36fL5GhJ5Ys5i4f5SZ53gC",
  "key10": "4NpUSwVRT3awv89dFCJXFGZ4qdvD5pdFzLHedTyNS9sc4cMN9rkrgBzwk5xxFPMUJvg7VWLXmapt9pgYAd6Yhuqp",
  "key11": "42QXs6mr6iKu74xBkcidbXsgCC5UznLUa1WEMwe6jt9csCzCnnsMcK6WcWvQgEsUcHUXkhkjHWLXSZaUuj9Mo8Vd",
  "key12": "3dsQZHFqZTRDUR6nKzYku9MpNVfUfQqd4pHe2vCePXhebxmxaL5HE3Bk8DXoroDXw3FitTV4bGEUNPTNYeYn87Qi",
  "key13": "2Uv8PhDLfWndbWqYeuuiH63TCzAccK7o6ok7NJgYCdwF57ckeMHmWmiaArRmJbZBnAD6vJBTRcUcdpY9Dqv923MY",
  "key14": "2hKPfWLYionW9BpKj7PqySHaMGiM6emmB8Fdu4jj75ctZ1CgmwzvnZgeVoxYnxpLKT3zt3cgxkJWiqssZmqfau9C",
  "key15": "5nxLZkuxbwXVmuMzhkqswx5xSHxoP6B31YgHT8NuLe51MX5AEqJ7HE8JUhgeAdNyocbzUjxHfe61WMd7E3Ywy2hy",
  "key16": "2Yosnfx5wbG3VAqVdxkz15rArn1wkwTEkTaKuSt3cjGir1d56P6U3yukA8UioLnrbHY8y56Hi3FwrjMQx1cgUR7i",
  "key17": "4YHBP5FHhZxb5qwrkVx2pH8diUnot4nev9NGY7WFeJedXSBnyJzEk2rhJ1DFLdKkxAVtVSQCBATLaXn3Qbew5GLW",
  "key18": "44e3H5wQ8GMcKM5cW6a8EqJpTAhGYntpDxFYSTnSYTCnLRw5AuCXgreZ7rQnh3FavymcauRxVyMjozUCQch2wkiV",
  "key19": "39ojcRfJTqQPMyx8dbPKfXo2BWahVjg164jv3upEDnSVhKshNjEvwAndFpkBhBv44mrJSR5CEXivk3r1sddHVmQB",
  "key20": "4zD6srjnNpzt4mQUahiWPqTm65BhS47Sbh3S4CrfNHuJEjkG4iXCoTpyg7XL5jZku8epsx8xUcejiKZ1Lt2L4Waa",
  "key21": "57AdG4Jjpq21w2teB3u8JAMBntRDpwjGULo9RGnssTrtaQb3EPonPmpLwNttFxDQcQEYVyG9zUcpdEqjeR83tup7",
  "key22": "4cmFNso5A7MBZFVSeuu6jPMUoFb86odXNEGM5V5DxUCbLeXsiKivkofnM5aLkPXs1LTh2icUvmAV5tP83YZwqScV",
  "key23": "5zMq9i9yuMxkaRzb7TVFodVVvMfsmaqMFk7QRfqTzvj3vYyx8jmCLz1pcN53dJMnohbMH64LhjZhcXGUqW5YZBYC",
  "key24": "3oE4uRKGos24dHxqNb9N2qEor8vZA3ui9prWcPkHUjsSLvnveMSNqLSGJfPmC2ZzwVgiSEUPRHwmWWL5JtqzLF91",
  "key25": "GHgPYb5RXrjdynvSKG269xZiRNFG8At53rZVpv2FGkMFeFZoWsrTuXHCyBR9DeiLBCMUe3CxMhQiYUbYx62muZH",
  "key26": "4rVZ6ZM94iWKVDrNasQBLekNPLCPxLMfXHLadsNjpkmDG35HyAZNsMVrG3n3LU3SeZ85QGWogeYkbTJwoBd85X4G",
  "key27": "4CpbxGy5xvszetqcHFBS3GBFAZ7duRfHQyUsjD5NjLeUTBVAyZzDQNBLpZnswKDgvuqEX2w3QpbFs3i7gv4vFBrf",
  "key28": "47CyB5ttKAHf8RZcANvugbamFmN2N7YD71bwtJDmuU8WrhrJ4p7ddL8v4QzfAnV4jJDq3WHbmxhuxzXiy1ZRc6nP",
  "key29": "4ibSvuiuK8XdatT93gRUo6hCqDD4PebGAe7VE8YC2Yz9pN22Gyz7GV7ZX1Q26nPkvKvNZwwGT39vzLCLfZ2Sv9q1",
  "key30": "Lg9gKtQVwEXaVUp3ECVQfDk7u54V59m8cPKpeeUi25huaVvNoamvgDkfc9EockFTtiFKRwpArJbk87uVYKM2KLx",
  "key31": "xotB1opGSxWuwk46XVQqVz6xNeZZabLY6Th6QFt7PbUvjZP7uo2qfi9a4XNM3tDHkw95SkqPBZbNg58PhS4P9gw",
  "key32": "4LY1pCYQgKJQRmNWhBnXt9LVmUQ3DuM2FQoQTfqoL9jcj61MNyDgf8b6bteik4SfzEEZHQ781MusH75YRabtxjJC",
  "key33": "2ysZeYB7yXse9fvn3qho83oigwn3NfVC77reiqKmsGgc4Zbdi2HH1g8guMtsLk67ChkcUZS4vNcsfX59rWwM7W6U",
  "key34": "42ik3BGi71jjQKQtW1PEvrqmo797HH44LunPCnUMW9uZapd8Kdu12qchays2PLk5N81HV4FHzDWg5adTWpv63LPn",
  "key35": "3ADu3fC4y5rF7j3iehe6AVgmALE2SG3KFHboTQi3cVE4c58F934E4GtvVoEHbVQEJaERkEdUYVmJERFYnsLJJg6m",
  "key36": "4ttNaEW6TjeLLgYwRbtxabva59cc3YTL5KvupKbwUshKNJLTazUEA5Yu2jMZNS4EBwNtJTeJwvXESs738Kw1tRBH",
  "key37": "2eQfetPzT6DTZZfSghL12sCXaoggf7pXTw7VcXAADNJ7b4teppXu2gWJ5A3eLs5yADz83cskaRMsS59NzeFTBpS9",
  "key38": "8hn2XoqDyzwgFT8WWMtYwrirBRcurpC18RJQYa5TWX2dSv5SwQSvx3MwmabCgKrEwc9HiJLayaxp1sPePASwqZi",
  "key39": "n3UpZ1s666gg6a9FXN1NaB8ZqpCezpmrdsj5vwUL3bHYFhJfsrZqykBhFEZ5VxDMo64UkMC5EpjypxkpAVPKsgz",
  "key40": "YTRfUgV6xGDMHexBg9YmnaX7ogHt2Xit8ujpH9NdMbs6nqxiZLMDCZhbewu5xg3MUkMmmhkGSHGZCb12JzXPLxt",
  "key41": "47Pxho2d5Zcte3yGJTcBM7nY1NqiR6LEftbyr6LiHWAaMRDukx1SfApxxmztPBT52kVeUGH9wmagRexrLfC7eqjK",
  "key42": "4nCTRQkX3Y55Y3CQATSfaHkLenBWQNS8c2yQQT9UJ8HXNZ6J2Sq4FL2omNDkZERYygJnWxvmzWmnwyFmUBH1qZSQ",
  "key43": "5hrY9CwwbfkWvbQWedQo2Ebp3q4FJgC2KqYTZQ4g3wQZzbPMgJctpe5Y7xrK9ufQrDzXLDoL4oLP48KJ3D5GDSMC",
  "key44": "ChUNph2AVMnRU9DsDvad73aso7uXWJ3sKz5XbYPMAj6mLjnmyvPUGXhwLfGSQfLTx8BJJfk66KaN9ttNp7SwTDb",
  "key45": "4E1swZxp9QtxAfadKp6i2cJpYWjzuZT479RARarWSVoXfWM53g8DrqSN5XFUKrYLn4XFKvptbX6onHaX2jezYMFm",
  "key46": "4K2WNCT7MT14uWxABEUTmQcRKZJYfqYHLK3FNKiG88jP9xQX5zoK9E3VA8ZRc6WLfAoRgEDC9DHYCN9h2E3obzAL",
  "key47": "22MFZV2GU4S47Wk2gRwm1aBf2HuKsBMEusmnh8CN1EnFvxqaTxFbCZUjS2p3iWtuqPDEkR9wHwvff2P4W8mM9zZk",
  "key48": "47Qijsq2UA6LipCfJUZW9ut88o6GBCWWZDbbMd14wt2VwBCD4rzSBzMb8WTxAeMERzKEMAmoq22X8gtbitnTkG8U"
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
