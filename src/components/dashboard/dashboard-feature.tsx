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
    "eHR6996U1GeUVx9gzsYjTaWMvPGjrneRhq2QpSyHMD1DJPADbsiD8wkbMtDgW7Jc1bkoPmRvEsnNS8E55A4KZjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sEr2DCyzgqknD9kYKgtsJTkv41bM5EnFDWAb5KLCZ9nMBWc34XN4KPuJpgCSCmrZJ9KJu1X8tPZ25fzhmYCTfvK",
  "key1": "3rewrtEWt1JzKVFDD2kFfZzUgxn5SUv3MmSDcM1q9sAUmo4iuYD2qZenE51WxkXDBjoMsBJukUNrJqv3vz9XuCN2",
  "key2": "3mVvDwbuNVRBbpwHsfsW8MXRg6Xiaoe5AswMRbPUXy3BcFRkYLxW4g9JDoj6k4SFD6yqBugj611kfkVPSBTMm1xr",
  "key3": "3v29pJASUsYf8dPktmHkABTCGtK6jr9FJqHfscBbud4EYk7B4M91bKwKcZ19E3a8HVGdcLny4mkbocJFUhmBJrSx",
  "key4": "4XuiXdYvNxpxtAoBUh7uipTBwVJJYyS1qtGigKRHS6GWN8RvEWdBJ29SxEqqq5z226z7AceqeHtf7sbwo1QmCWpP",
  "key5": "2jZPEozhDw4AFobPbCPYLxW17JGLqy9CDr9zz5ZV4zQxNCwyCZTFg8ikt6evBwXW3mYdwrtPUo69Kbn8fpP7QSnF",
  "key6": "4FTohvDgWdBC7NoxfcBLGHZkU9gVKeBi8WzUERao96rPvuKSV8UNXExJzoQGtE55ycKyM4C1CiNZ9MKxY2BoUcXW",
  "key7": "5z61xr1iYJuZK566aRVwB1eUHboYs1zkKPLZKX7ZHVHVnpoSihzoantcyWKb5VXSSL7JwLRf2wMjLvv8okkJwcYM",
  "key8": "nUeMkBhaxNjjiUtzB9e87MQD3dwMbwEen6onfD7bTYKhkFNrWrrw3NGLf6po9kjgCFAxe6S5feVrDDX7pLaWA2U",
  "key9": "2VdDgZaAWS95o54zWxtGqnBC6HrsGHzxcm7opvRZbhvdy4Zn313GoqrTf71DPC2qAUVgWwKg2ZmXomxVeqAWWUXS",
  "key10": "2jd52Yeqii23Ki8X86VKmga9b7FgSZZGs6mne6FzLMSdk4YQbHifDAGr336r5J81afuhua1zGQCxTtCSVtmhdmww",
  "key11": "njHZ7vTKP8muxwvuASyVWHx3btmYTGyF9ugp9m4w4AcdJSorAqz1kELcgyXVDzZrNaU9iHCAywD2Ndbpd6vFmG2",
  "key12": "4yUMuoynY85eiETMyFNiNdTH9ShEHz93eVmpRhwWoHKuP3eKnzNL5AX2Z3wupiCyQxUdLJawzyyc4wBPJ4FskwoZ",
  "key13": "4bPmmcsjvpc4agDQ9nowqtuiQS4HP35jmoBnVDNkiba86kUp9MCR2XU58MqQ7mvdQwjEMxuxan9BjXDNEW77R25p",
  "key14": "5kVbkLyjxqCb968PsAJ8UC7xyf3wpsU7h1m8oQVKvNfXZkkoCeh6WXosXUzo9a18CEN1wh3zEmJL8qW3Wy3E1Tu9",
  "key15": "5Ac8VHr9ciCom7cwvTsGJ7RQejhRYcbynq3r8wiEqzGJctvkC6TKY6ghY7uuKz2fpVJCuohPNvi2iJPngsN6V7qu",
  "key16": "yEenSpY9FogRZWY7SdfmduS7EDvYgRBrE773cxV6QvuKNhino5T2kaAN1HjuLCHX2NnEvUf8m5Gq859fFHoCaYp",
  "key17": "65hVHBCmDrwSyjC24ZwcHeaJSeywsfYbYhtdnvsu5JcNitQXCua8CSn6asiwuyg1vbGRZh6fSgx2tZ1HNkKy4WBQ",
  "key18": "4rdaH45A9sBgbPF6JeAt3nxVfzEHd76gGbVJ1XfkXU9XNztVYHtqPHuLyykGA1KrH4zmkuBAREXT4CDXGfZJ6eNP",
  "key19": "5LUW5SbbYT6a8NWiFVGSSWeQkY7Zjszka9Hzzgd9Jv2DdUJe3wWQa4FqUgGsbdidN1RDsUD2Ae6aj8BzPeR5kztm",
  "key20": "2V9rPsZrikHWouwZBzvi1JNZpBk8rqY8MkZHvrhCJCkax8PdUbgb2tKUw23UnFx9ZUGV5NBiP1rj64VkMPMmK2Bf",
  "key21": "2nxE8H55YfMfmibuK1YgH3LaSaKqEgG5Z1kLNejVsYUM2qbo7uYt9UmR2kApc7s4PYT2jLVb55WUZqhiuveGevub",
  "key22": "5v5MbrveShAJp65SzivkkDpwd3XyrM4kxm3NWzx1vwxz9KfEmH9u1SCEeNXjZ1ayMwE5fJ2eQy3a8CfpA5N3RH6d",
  "key23": "5e416PHH6Zo47k8BeR3GZcm4k1DXsHKhSPTEWz7VhUWNNqbQReLhV74GmHCfzjpddDocVuvJY2acscJpErJUQgBB",
  "key24": "oWaSCmzg3N4S5VLM1nbTxuH12fWxUZjEtZ2mvT6qriUDLwHkF9kKgTHoXnCYRUym2TfNcEBpG71D3GyLMhTL5i4",
  "key25": "5T1Ud3m2Sh8EX2DLqgfK99ZQBx1SbVwk9FvmCrtkArGgBVvSh3XYqvqB9TPQpKiR4iRF9nJoqpvrWKH8q6ccyhwz",
  "key26": "28ZuomKgj32PA1XN45ciz3kY5b2HoRa9tqbu9P6eQksgPw9eCxKbgXLmHB9hyMDmgh24rZshAXUuFybmHPzFTkhV",
  "key27": "58A9rSAiLBcGFt9at5c3Fesx7QqHsp3qG7UjU7iDvYE47Y3bQLmL3Z4JFyBQbsaUiMAjfGyBZKcTqkXEEirUe6cm",
  "key28": "scJ5r5ZMabru15WvqCmms9tfmWbpBQ66teA6UPGLh2yfbykY5r2tkdQpo727psfJegE6CxAyt4WZN5mQo1pq7uZ",
  "key29": "7kFCTV9rUtBBf42w3yqtJrU72EiEykDYKcju7mv4uisWSMdg4xUNhTGejmRtKbRQLb8oHn4r6RY7KNF6UMvnKCU",
  "key30": "2D66Du4orUjiGmQNBqBtcvtPGjEgLaVqPY569RqMDiSexaWF5jdswUpM8mQXcfwdzU74raoda111wAbvq1PWR8Tb",
  "key31": "NWxuJYJyNMnMqrsoMLpiq2jaGTk9cfwgB7XARLxzZSN3U4mGQtcKBUkhQMFMajoFwcaWUqRLvvWJmZL3LdYcnS6",
  "key32": "25nbvmv4NYN7YzbCUNS7aaEERUkRm25QeetEjxw9SpHzJyDtm8o2tb6p1ZQn9Eo2ZwP5D7wV6CMcgPRi4V1LXYm7",
  "key33": "5WxWg9fqxLEr6oACm8t2sB32vDwxTLBn5ercV4PYxYNX9oJTQVjEgZJ4XvYoop9YrMGSRJE66enBWRSL4yK3qjjH",
  "key34": "4j9bgjHzD78UXDyiC6Q93UQeuVFct21EU6nZ69yioqwYowomtHViLDYRChAGff4TMwSQJLupFo8H3wgFVvgPijoN",
  "key35": "5ULLRD86A1NHFYhTpoxmgyB3jjMmb5FUQQ7VNXrzAYD1ZLQr6vXiM7GpxG3AgdbGmmVToY4jxRKVG9VSnuwJHnFs",
  "key36": "66VpwcXbuBuf2VEfcviVABrpzEAzwYpzFt9iYkZYgRLj1WzMPchStUS8fnwnirofATvDKC5BmSNBeXYtnV9oQbst",
  "key37": "32t6Ug61CZ1849oAiGd6BfoJ9f2b8AZTCvdWi3HQYDWHZPJivwkKimKakoxuySaBs19twQNYPY9uV7owgoWcMEvC",
  "key38": "5tT4Zoe96N8ZumaUdvE4Jhr9oy2S2mT1k34Ykei1FsAtXiVdaRsza8eMe5aFxmVwMVgZiuAhe68mRbfMvDidiY4D",
  "key39": "3aKWXxdYE6AGoSWUHqdspv2ViPSKQeaxpT57Qq7YYYg3WuW1T88GtjyigZe4xoYYEy7jN7mgng8ajJRVLCLChbMs",
  "key40": "fuZbEdse1Y8UN8HgudYtYenmZCeHuPPZX1TG8m8LrFdgLXxK94Eosae5aeQFB5nKpJnt4PG3eBNp2nPXzVEpvSH",
  "key41": "3bvS777SimbtP7q8FrSa1fmiKC8h9d8zqZpFvEiMvcMQ3s4diSet6GrzuVCgMboDguyjQhoBDYVCNHxnu4mYHBqa",
  "key42": "3PzTjXjbC8Mao2dJ8zEGYZ17kdXHRysyMSxWQn8dHZZSDgEwkCXbZ9tKQAXPPVnx45bLCPZCPp6jwDhVU4rXsYqf",
  "key43": "AKu82y8MfNY7BmgGjMnfVFrCQ7Fh7sPtCqFxiXnKsbB5Js2orwA6WZZa2cSjuEcNqvtTEeBwEbmoTcKXgCwhcv6",
  "key44": "3X3ubzrgdLY98RM81AZRDeYafSQBvBBXPy6Dh3JmmfRY4pS5GArAdyfsjGUxirCq5zMpciqGh6NZ2UD1xcVicqcA",
  "key45": "5QwKqg1Xf5zo3793PpUYahFo9YTrX4hkTnPPgYtpefiAuuV1JQyuX8GuW8KVYanz6EuKLHR3b4SH2NhEEof5jewy",
  "key46": "56Dv45A477D6PCcazPGTUacAAFtMwRj3rrbJJfehQG4QQDg7UDdoTTzkwCu5sdeNUTjUnPkb7eEGT8FMJ6wAoScL",
  "key47": "37g5AuwqQrqzxbPASNaDQokdNetCG3gpq6Z49wP4ZRCw8KG81eVwzVhQMVEYcCSyaSqQNNg817baqdQThQtWaeCG"
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
