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
    "5tM397HW5neRdat4Q2q49T5efUdRmsw5bkb7zd3hbAtfuaCRdiuJBaSfSNif3gWU5FdW3HsvuCtU24uxPdt1zowr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k2jRPwr5PmucG6Eiisr6qCfV1jRax4FZTSYyg3ud81zU26zHbXKokTVBGs7UbQxDoeEDwLn5Vj5A8y8jzj8zKDB",
  "key1": "631PxFCV84TCMBZMSTweezjQCRR4mrKLaW2DDgzwJTgTntCBCj83Djs5mFADt2xW5ZuuroFvovoWuxxG9XaMCcBs",
  "key2": "32GXVpLdWoFVkj3fJQD1dk6c8axSWZXTak9j7Ljs6oDusPzUDX48ibeAZ6LMzUKpp4i4NS93Cd595iT4ktoAWk9e",
  "key3": "2zCeTew689DQLokZkJUzMjUuYHyzpwdrMbjGhoB9x4UyzG1R2CLVSUwT6SPSzjaw4AczC8NUptkSqFn1EtjUipzV",
  "key4": "2PEjpTiA1aZKRpzN3xAjXNP5iNQQR6SgSkHnGZnBpJTxLwo1bLGSqhH3NJZcz2bSaL2pxF3FXDHE3EL1GRdMJxSf",
  "key5": "huHgouZJUjnSMfb5uK4aztvRT2GoRsjtxTG2zxF6vc4CiLuJF2V5tLXg6QrB444P7i5tLAvvTu7CTnUxDv8N6X1",
  "key6": "4st9fzebyDA6RjC5qVUfX2W9mT2w2aZh5592c31mibFgNw5zrSpU35pSnuZR27NeXaMo9v85BjLdoESxoJcQwQuR",
  "key7": "3ugBHS4NfR4JEmBArMGk8upnWenW13Awzk5tN74MRPonXYBzTNnta3zwTGJiPpHSgUaWVsFkdwfpVjdusPHVDkRa",
  "key8": "5n5HZ5f4qvT9hx7UoMbYWDAodTqePKsZdyjqCZh42WqNYvvMytnAidkzBS8cPDVbk1VxhMhdVertToEzFWVBdKUp",
  "key9": "3crQFxss8Rf412bM4FmVXUhrc2hQB4DyENgUDXERZMoxkBDxSBnMEiFxhLkH2WDNHfpWsobiyVW8KGKNDzPQNDfp",
  "key10": "5WXWyueVa8WwWDGDgAxzS4Jj5eYK56h6LDE2a1HY1ddqEpw5PV7wBXaGVxA8nqPQ5QeawBDDq9AsTf76KMuSL7ib",
  "key11": "4DByk8jK9ZEPKyu1jcNNkbfvjkM3VycNzt2aB5SYGspi73ZXvVdv77uQD9q1RtPCuV1ZbeQspP8hSJHyVtQzjiDZ",
  "key12": "2hVMGeoANRmTxS8uecCzXwgACc5TxXMZVVsoQrv2psqwEtfzjmr3APYveNH5KmuuNLeqDnPahmE2v5AwsYUmAuJo",
  "key13": "3kkj2536wGkXBPHEUgY3d8HrSBcdZxsLCqXUbAFzxpzkgicp7U1bBw2fxqrJSq6mzsxFdaqxKQ9cxxSX3RucfQDV",
  "key14": "3Vbs79DxyD92v7YHMvWQzb1oU5gfHHMdvaBLZ7hojGg8Nx6pHspNbwMiWjkGDnpZPxYzoQbAfvxXiqYu9ia7XBnB",
  "key15": "31bbU6rxoMdJFgPSfreACQoNXVUruHDxe6fg6ZKsXk2ThMRgMQ4DLjCWiMZJ8WEnXfeSQfbnRmkEhf5CdsJNc2RP",
  "key16": "4ptLeGWPmNqXFckzJrqXCS6LfWBgbgWkVDpA8kH77LZcUng164TPehuLyw1UYayGX6FAiawoXpUUi99VA2PPgigV",
  "key17": "gkPeUg35mNY8udajH6gLJYLzGSQBb9wrvJe5YCzAbfuvPvao3cawbkVeNwY5FmSbXLbNfWitqiMypQ2J3H5ssEr",
  "key18": "25vRP5hrHyzMjAtUABGCxJJcQBD2o9PPDLnsVMv4RnVnLT5tmkmYZSw3A7RU4axdR1GcL3MEZywQLZeuLcAYZAz7",
  "key19": "2jjdRt5fSHHLEF5KBh2nZP4hguhMZQcfndCdAPHwthT6JGyWnpYrvsU7hr4HirV37LqsFBKGE2R56g1pKtVDaGNw",
  "key20": "Sa5GC8K2zFoBRvgQfweGtoG8kBb1XyYE1dL8YoSDDgTVvBsFqTkmHHR3UUqHYYpcivUaYKPdXACiijXSAYgNqrX",
  "key21": "4DBBL9t5kWBKUTsKk2qcuuy2U6kTghvJmPVxTpxpzBfzxbcLYagcbzb1P5cw1pgrTjU8GqapmHJR1LnVxUjqwg6r",
  "key22": "5KQL86tssKJeL1uDdcaPUuSybjCHEupUmTBJBJf5MMD57B6yj4ZwQXLNZfNbqJSYazkPa8nU53ukvKAPCXvmrhDD",
  "key23": "3tQKvkCnyeUMADa6zAgkaHcqrHoixcP4rHdF1T29yjTJBZJniV7zmkYdwCUarj5bQnWd5TLoaWVNEWaMKy9a8x3g",
  "key24": "45LSDkgqo3QjemtugKD8shqChugbTboq6SM92iGZj1UKwnr7v7N6mq6yWugUWcyxHQg9J4Ty7Nt4iaZ6seyDktPC",
  "key25": "5cF5TcwqWJbRn5nbq3SzHoJhvDfpc1Fk6qy5jtQDksb7uiS8t1Fx6odPfxA9bynCKzRN7kQ5AzunEtGDgHvGv3NK",
  "key26": "2d1ZZvx6fBUbxH4EFUNKToP3aMH1dm7Rjgfo5p1wRv7NBxuNcEZmnGmQ4ygHR1QYZYFhaiKY5Cpg3XdmcWs6d5VP",
  "key27": "3ahqY87kPHagdMSapRZgN8ggQ63dVChjD9Ed2JUc5A7oxq3QBvRoyZf9j45dQMYBH61zKEtduPddeCeKj3hCPozs",
  "key28": "3Ps7ZDuJPfUT2CqqWTv1ehxQPDXYkEr9GKiE4fTBsw5jgspCA3W27ULHG49QTsVJwAkCuFuddQzCxqMGQCDAJxoe",
  "key29": "4uQDGBZ5AcvWZXa8ovo4E4dq4fyUdTcDoDL9ecG2FcWXJUXY8rLJFxzmqMt9ysQXTW2ekR68cT7YzSFw1AAKKZy",
  "key30": "eGq8LYPgPCWPzSYPGSKUP56eizhbNhHRU5H6HQxVC6QehP83XR6sbFvoM1ZDCttkBje5MQfEZJSzPwafFSDSQQX",
  "key31": "5foPRN3ngnyh4e2WDskcK1Tpu7z28PuVdV64B5gadpDdGxE6pGPVxzoJWH6WwXXnWQPtPAB122RkGKSo6Ydb2VKf",
  "key32": "8SnoYKcSb5q2fkwBfY4E57vskag3gEExNFJdrnk2Pq964bFJVhVoQMryTwsjTbBVCZtz6pBS8xjR4Gi3qZTgRbG",
  "key33": "4ULosm8pGAac5FCTFHN1oPGAL2sB5AayEhkiJuaYvMw3v8Qdj4D2e4tXD4W1Rbk65Gioqv4to4DixCTQexohXwuX",
  "key34": "3F5aA8sLLNzP4Ms3ZKuQ2z2DDujxGAVUNySDCCf5GFRQs2Dzr8xSCyW4DW74jo6s1MrhFNHL5A3nmxBE16SvNjt9",
  "key35": "4ECJA4gqBrYFVZrRJ37sxD5vVZfguXWazDei5D8ZYE1SFbYhG8znNeATMwFbWhCupdaEj63kzdjefc9JJoph16xm",
  "key36": "TR7cBq996bmGHcKT5KbS3xN9ZwKs8fzFC2e1hJNq1Ji2W7WRT3CnLbCZ7EUVESzwXYVJZqxN3SPPYypJBNHWy1r"
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
