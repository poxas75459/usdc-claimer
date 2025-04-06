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
    "29mGf8zdPHaKeWt6qEZjV9go5TcStVafcFVRyx25ohEyTpAR7fr7m3rvudDvFR8zjNQ41KiXpjQ4S2HWaVXzgfwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EKihMMN4BZdhXyH75YYTxiAeAxep38F9s83zE2ucaAFDpuWsHC7FN1ZqhXEPw4zwKDfkqe1iPmt6dFxcfu4XWTg",
  "key1": "5Bu5pUCFEGkEunfcxHxHtduz7SGWxH3xAjKSHArL7y1iNjqi6DSUwSX6eJLicok4cH2QbPAvYc513uKe7kZfTnJY",
  "key2": "3wF4diy2ruuZDTDe1iranMk4YSemW4Cbco8q8RPyfY7H2eiuLCaJDLHc6UrK64jQvp59ry1YRbJtWn4XAHtRzkMm",
  "key3": "3rjqdn8PhCXsTyUw1nXYrdESeuRJQQsU25G7RPUuZb9V2YEz6SuKcE5RgFz5LbCjKSSEDzsmrPLfvxPUYAr81tJ5",
  "key4": "2N9NkowoNwFnb2t99VMo597MZLZvNirwV5BsyDMJzNRXs8wSGZqGvxCw39Cnvm3un5ZDGPuoZBNfcQMs7bcS48a6",
  "key5": "3h9j1Yk3vrPUMxhsLnbYjCCEzZM8A3H2bEt8B1wFQizqWjYMzQQpUWNzYnFJ61Yj5WAeeJ4beGcRjo4DPE3RY3Cx",
  "key6": "4hii1Q1MYaXy7q2bubhCxougM98gYqYAnHJjAqkKBwMDyW6GEFixZdoGoU2n7x7YkdTqCMBXGhzwN9psPrK7RBgq",
  "key7": "3tdn7Cia8My3BjDz22E69Zwzn6V3otusz9QZC1yMUPNGtQjYeZrB6BNjo2bDeHDeMaoccHKW2MPkQzrzQWjm75Mz",
  "key8": "YSjwxQJv9fXhrZmpmvmvmA8Cw3EsPgxZaS3Q9nUbebKpA1Vu7vTSpp8Nnr6MA8U7Mb3r4J1yupdCDqpKvPJr6Sn",
  "key9": "2Txhf6id6uE2zdqwZuPQiGfTtwJ1EQWF8Z6Yk4bVU8BbQL9EhM589uUxDknNgAhwkSh4VgvekeKV5GQWYksq1wgB",
  "key10": "24Re7pTAhL1ExqcX63jSEzAKv6rx9cSyKcKgMztdobkrEopvuawadYvhcX2ERwmfBDx3qqndTdL9XveRy1U3H96k",
  "key11": "3y5N1vjwp78j2zCkDmm4kgQNwUbtq61AQdMqBTCHrQomG4JVBKpa6qf9csdK7ZaV231emQ6gNWUw5W3zcL4gDHWe",
  "key12": "4SQAKmvgYEQCn8sGHxGaB8djk8nxBaqKLAhwiGkyZKByMUmECvqWtkgXZ79JZ7GZQ2S78ELQXr56A6JpXgF2UWL7",
  "key13": "2R9dk4fbEpFzXmkjbyzvMP7md7Eu1HY6WHo5iTyy47YsHrq2usUWuwwWCSMeY5quk3K1BCMhXk7rsqxns49Ehjwj",
  "key14": "4QyAegayTrVug1i2g9Hk5rq2KXMP2zn8z5joXxNnkFtdUu9JPvuXY2p3XFRFsr4KaD2huiHu8ERfP5KviH3pDizU",
  "key15": "9CyXHuAzdupfFL1Xb5HhwirxxN78x7AwVztpVnNeoaXQk5RsSsFWsKdQqRRiL5XNyGizzQzQQmD4W5sRA8tNTDs",
  "key16": "E9jcL2M87nnVuFx7MUdGDTMi6eNaBLMmNww7VaXC5NheKGGmxX2SNnpHM3UtdcS1zKw8LCkMnAxa298159dWX4P",
  "key17": "4EGhuprQikFqForbcYCFjpC4M4XVkPG2vQiNtFsi8u4XuDJzszCXHrGHF5vb8uSTMnLk7VeTg3GqGEWiDQQVbyQR",
  "key18": "4LNXrLVC6ftJcjWrRXmHpTaRrMPj4RCp5juLTy2PdQUNNpFeLUbof9qvJgH6bLHfq8LiAmASz8az9CXeQ3rNfssw",
  "key19": "3HAaP3BGURBtbsTPtSKGEKdFNR5UGbGDtg75NMMTGECfKkhZ9c6BEZEWWebxJy8kkabF9a5HChRjrPTYF55rGG6i",
  "key20": "diXmrhwVwoKBui6fqz8TKbdukx46FcZkSsckWNYm9kL268BrF7uzvMP1S2PfTJA3cKaWJ6AvRzNoaamCDZMYydv",
  "key21": "25PQWs91TVx85Rt6Py62tkfVszxqUCJFnhf7M6mJJZrvtad3GgAJMuDUAXqrBUMXBtFe5ezZ7zYDbuWXnqzTzEH6",
  "key22": "3ZsoZTCtUYAQPsXcx3WnXpBDDqoScSrtUcJuP988gnpYhhw7FkLhUgfoXwLcB6xkNpzTkynEwraVopweu6vdq3di",
  "key23": "4ZJewekYsuGoUxiW6b6FVLVEwqTd8k5dD9RoyRLnbgSZDzhp7HkDQ1pxGTVyogH3EZVG3FwumB4SsKDkq7gt17ck",
  "key24": "2hMD1ogsGFLUFqmcv2tVLQ9cATfznYWFJcV6U2TjTvaUGnE3UkhM7GhZBRjnydNt28oQ9V39Nw4gbCXLzFGnCD82",
  "key25": "3AsLmWKutg6GnYLW8pSH3P6nvfztaA4j1AnhLWbqUQDNzaEAv4G7BopwvcXiwQQCeKGxJbBe51Mjia89m2vZHUz6",
  "key26": "37hwKV2S5SyiwQ4d5toxdaf43bfCAYcw751tzaHpuFsotaK1dR18kL2AtG9xxZ1d4yQW7cxr1rc7GoxMCfSFrmN",
  "key27": "G2Mo2f7WgmrdDLNSgBGqMzVuQMCndTBpew1TZi4rSCKw9zofjq5vjDjxn458wHPwm9eNccX5tR6w3BLh5J9BjWK",
  "key28": "5rGHqYwjM3bXaEuU8Bq5tPCmNcn27zbZocdfYKnXrJPzqSoNJNDAxC7NgrFZuaCBzNDiy4QfG4EbGphu8hTM1fiy",
  "key29": "2EHiiBrNmB8BYxyqxQEepNXgciQ2XfysinsgigGs7o3baSFLMgCFeVFvtH3bQEvSrzjU7NoANRxaEMNXPCrZCDGA",
  "key30": "cmFfNUCJ3xgrjTPeaY7FucPQTymFJtoeJAYaR3zWUL3kFht7KZNmkTPUiphWvKcV323KWpXXgqPjNxF2WjysNX3",
  "key31": "5ocUoKLGrexAvaU91iwcDtiMFqKcrmSdULKLhskNi4ZnLnLwmoigburreYS4erwhHXNf1Vy3BrW9NZMaG9VhYhMX",
  "key32": "4RTB9zz8seZ8682TV36AWNtKHcPhS3z1VVzfBkn5siCSLNPjX295uLnwXc2YJg98ZRcTtDFe97f7r46PBPuq8rsR",
  "key33": "44cVFaoZzKhE7vM9FdX4tqie9uxizCHN9RXLm7gPanQkocwvRTFZXK8t854KGjAYyyv8pkNgZrNedNwbmMChghvT",
  "key34": "37WbvbQD5taDfH4i1cDcRzuw7JwSmis5t6CguBJ47qrSJPbXMsfo87TPaXq6LiggQMA1f3aTZqcDcYvEDXujV68i"
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
