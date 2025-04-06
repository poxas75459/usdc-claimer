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
    "556k6uK1bn8MtE4V3uBHvV4XP3t95FJ6zwjVRydBseyr2mLRkuuCDK9tmfyBNJJxtMy7pgCiYe2fCL8HJPowuR1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TvAADdAJLuj437Uxv87nGFxWDb1iHJCJ9E8CehdjircGW3UrYjmwDZnpeqXH2m6SFBTgPwK7SfNiR8XPLw6ZF2B",
  "key1": "3piYCSQFTqasQ4LAMfBpS6WUVJ3FsKMzva3AmimHDXzGryEiVsi8bNFTLdH46b7aQgBKRKVeXjGtshDycjtprer6",
  "key2": "2UZC4NkcPXBLBqhFDUkrhefM2P2fZjNszCt3M4C1SRaayEL6M2KAvTgLzKMq1Q9hnXz8MCb9Yi1kwYzQy8y5xqTB",
  "key3": "5YLLez8HcYSCXBD7yGGcgnkr5uKjRoaj3nMFwE1ovVFx7Se9UUnMFDgRTpxwiQjZzC5gxjadnx76td6BhVxMsVDm",
  "key4": "22cGP91CD1sC1BPgAS2JMVfcHamwJmgR5kJEtHHzfiWDfTo5i1grM3ptUTZna84S6KQw4vxG8djtpK1VFWBe5zSn",
  "key5": "2SHCz3oKGP6oYrBjFGrBQPVo1W9avE1HCAAY5Nubv1wq9g3zqz3HQ8mKmy947WDh9bMX7hwMXV1ZaYpjUSav2Rm7",
  "key6": "4WGHhBBbv6U2C3oZdYnMKLaGAbfQTx7cQiG2nVh1vEfUWrZrc6Cpkkd8iMezZUDy98D1jqg477SZuKhhbFuEPpE5",
  "key7": "48dDLjpWivcDB6SsH8CFqKmsEokhp1ySoNn66QazN8oYJy3ofNeZ5A9fmkBDhtBVYbc66triXNZryqTa5KyAyLiy",
  "key8": "2cwLyTwykGveEdDqz4pVn79sETyqBqsjGHK24n4Uzj4YaNCmLoj9YryiB89XjjbC5Y9ZExL8FzU3DCxnU4Cd235k",
  "key9": "hjai5tuEgma4iKnzSoZYXUMkCkVdttXjtxpJRhy5oAVaLALUPsks98g3LSr9ECqxbWr1U5ahHiWS2nYJpsEsKUp",
  "key10": "2uCGXtkAeJjeXKHJ9GigqUnRSjWnpjkUPRMKLb64cRP4FVN7sydyhsbG7KRRf9zqQ4gFjirNHdb6g7UdBQom88U4",
  "key11": "vvZvKdBywMBmyfCUgDfwoU2FNDvaz9SEkmpGSxmp3c2jAhE32PQmSNReQraq3YCJ7Jfd4kMu6cSZiYm8W5NXwTR",
  "key12": "49Abgo2RBc95a7t1pWaTaX5QZQuoHMXvaSJjqBGux6bNFGsa4hB1mEgyUTfKSn8fYw4C17Psbj3tYYgCe28iovFy",
  "key13": "22jJnzv4Dh6dT6rTJtczCvz3szk5aSrd1P6iaaSJjgWwE1KgCJtucEDSAoSXr9a9iJHHg44QUxCQfDGW3JkPt3XP",
  "key14": "45jYG1Db4r8xubPV1XnieLNTEWwhaYXj7bCSptHiDoda2X8dLjHZXjav96RJr2ErdddhbiaXzyPLXiZCZRaCZy3X",
  "key15": "3xy9fZwpoKHwNSP22GVerjof6vTeygCKTR4vW2xoMQV5FbmUnYpKDPmNteEXvKbFgnju6MhptADEzbZ77n5zBJ6d",
  "key16": "67Da9hJoU8keexTfDLL4yoQGMwiNfSMJiQj1SVRvRno5AFareJeJ75DakwDwa3C2FfCtoPxxa4yF7sXz25KLavg",
  "key17": "sHYJ6FwgkE5SFNU6VSWMxj7FCZuhfcPL9MUgQw277XTRf3gLkjmxmdJRPptEWmNiX9i4UUnFF2amoHaWyHf3hMx",
  "key18": "3qGfPbGU8YbKyGCC8Q1EhYrQHnmXN9ri1ZjXzV62odKQuC88coikBHpUTbNbPJQYLy1KzN1LarjuznvCtrtiNNod",
  "key19": "3sy3zdYU9HwMU8K5HkF16EtaV81Z7RoCQ2ZBNzegXHMjgF96dxs6gBMvoKCoF5D1iX8Yydtrzr9hg2YTVhk98U83",
  "key20": "5hBTLDDkuY3KysD7ResQeGkng8jsBCyec7eByHHiXp9yf3kzSgp5asbcc8hNmPaz92QpqEaRdyCptcxoC83NGwCe",
  "key21": "35195Em5ogyj8r4jE5NwytB52bjQx9RxjSZUD5jyJfz7nofj9j1c81XN1qQvpLkSxhcU6vuvt7gwPvQssBrEn6xw",
  "key22": "67FotrQnJPeRju7XriQdQM6FA45KTng7zdKmzckvpovVCEewaAuDqitdiCqEwWqaUqcX9rqadmdJMEQVuX2hy6AE",
  "key23": "4Lc8rCEejcWM9zhRPqm8StmJM6Yvkxkk2unQnHUDd53ZNXvE5ueommdsv3DvXN9ybbBvUU1ApfP799JisHHXmch4",
  "key24": "F4iiwGrjkkBStGJuYJf44F7f2CsDS3WpTsAZMVahyHhhZdzGiv5VLM34ApEaxWNawt8PdroWmWDhPMkWw4rawC4",
  "key25": "21zy5GrgV6cSyvW8fdEFLUVunUjPTjWSg9ps72Lj1ESG8AcXRde8G21dL8MgeaUi1KTjvuzG6vbMU33KG2h4Emm9",
  "key26": "42B76xKSQVe6nqGKgMZbhyie3jyoGBphjrrMErcQHHSHVcNr5Xho6FMjPXU1UxnLTYwUmDKB7oNB8mvrVDxCDY4G",
  "key27": "VRV8KSbb2tAJWfrTyMYah9kJCqXBiZfAMZDZgJXuPY7Ru5dm7zFVAUZvv6bMSGicQC45c9dCJASMUpouuhv8aqs",
  "key28": "MBpHYi1jbxSDhHzo4yvUhqkzEurTwJDNimkHW6zfUfgSbzMzGthssh6DuWA1gR6e5zDYnUZncu3y5meJ5qgWt9L",
  "key29": "2nFTiJ4WaYG6dSeUmku5XdEm3ZYRy52Z2XJrYnnp5nup7HidVKsL5gAeYqSEZKThFH3nMpMFa6Qevm3ocFY7L5L8",
  "key30": "32RzqJRMdMVJbZ3mgsJyzmmM4nuVxFoYc3dF9crEDUwJTMJTTH1CPAtAMr3w6pnGHsA5xK3NTbMGmnQywLEx5Ger",
  "key31": "3C6ttdDkfsc8k6yUnkXL2RzG1qWswL1FSQsikxP6cbcr4VURyPWjMDfKqoZLRXZqdKCorXma5xyaTHKRfgrG33x5",
  "key32": "22Sk6cwG6kfs2Na4S4DVjthriy3Leynnaoydy7UzASbbGvqppyMrFoudt7YQ4F2hkXr2mrPoVwjq49ALeKuXWjNp",
  "key33": "2Wi3QvBvWmjshnxFaF5cxUC4khE74Ex2jvFh2yWfdfBBHgN6XLmu1QZyaZhTpDcfrpxLdF8uaJU4K81iN5J2Gew5",
  "key34": "4x8KP97CehHJs8YTXi5ahrzWyxPYz3rgQ6QGMjMezg8Ty5C23tmq7JQzZdwpWjfREArj3s4pZ66gz9pHru9zUU2Q",
  "key35": "4Vi4ps1cQF5GhjfiykVNNcyaSZSnj852qGevz5GhRX1knqXrqpPQzVwPE9WZsxRzU3qvdA4r4viVHXjNWraLb1ig",
  "key36": "3c4oQdMJnFbi3axeEEEatyrQb5VRbDjnRviNS2QfGX2vGjppjpRB2A5wvXNuc85SRZdM92tCrE1H79rTvVkWE4fq",
  "key37": "49srcT435Y9hU6VAGJZNozzvZgGxb3xrd1p1VyJtHTt45JuuLFRNkvjF78tNN3ww2tGtH6qUvKud7Yp41r8KdbTG",
  "key38": "ErdHHM3raeuHumu7XCmpWZmqH9WzMb9BDgn7CN7Z2NzPQibUkm57Juyiy474u1epe5JbnfxZY5uPgqwWGttTvQ5",
  "key39": "2wKx4WiFoA76giSStuon7uEMYLwZQxG6WvKZUcy4UDWLRaAuhY6Z44j9nRE2Ad24h3Uoi8EKfJHFYremrqFLugus",
  "key40": "4KFzEq7Q4UegAEfyzvr74jYPg1bo6Ea7i287ie1EJcN2DoMKCXMj3Um9DNUYwr8zeDWS7JNTAPWrz71hvedhy3ia",
  "key41": "23XfSYyJANdcPuBcDVHB5PAqqjtE3JXU3MBhhEAqEGkumDr5uXVchLpmPBHfzQVowDMdD4pFV1o4GzW6iSdPnMfk",
  "key42": "VTm96dVEJ1y8emSNSr8JDteRWQqsuym1hc1jECZXcjqPye1aGovd4U3CUbVdCn42r2RsZnsiALNMvcXiCaZi6sP",
  "key43": "4TF34PsWap6oVTWufRYS1oJvZwkxSf4NEL1zBMacVEe1Ua7uWTvB1TQ4V4GjtbJ7aNb7mJ8mviTET16cpZ6XGSk1",
  "key44": "CZEu4XBfsk2dNKSMJwJNeNY98N3akbwwHXTbJXmWxJRvY4WYX4uRxaqqXFM5BhNvku86NgknQAnrgZH3ziZJYjU",
  "key45": "4TeqPZKYFsQ27BTgtZ5xhG9i754rvLmCkRaBxpL5HALSKBbg35EZxJ9MsXWeSJ4u3EYxBiFHhz2ckGwQt67mLcWF",
  "key46": "4uwUxDNtVXeTANBtFJnAyWDv2JYx3Y2ycJktkWxWA3on2dnEan2rvXyvonKLhFrd8EZyCGrDtjygBV9m71ZFQoUE",
  "key47": "59eNXyr59u18NotmEPC9hHU6DGsj2HnwoqsZNrneHSWmscqZzXjifPxWYQDZKxf7D1cfbAT1zVHtS4khCDnziocY",
  "key48": "3ZA72ftZucJb3pfRpzKgSNQfCp1NwjKeqCgZC8dVkQd6wavvnyy96kd3WjZyEbGcezFHV611rzkAWSQNNAthvdow",
  "key49": "2GCbGQMtnDmtJmfVtzzPkt3dGWNGUDzEDndPG6xuMUdFETtMp95Q86xtVuKiVAKYRJHnyvZBNFRezJsTcAdVWnq6"
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
