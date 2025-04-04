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
    "4u665yCBwCYtVTdS2rQXP5g8X767hH1swe2QYjaKJubWEVS6z9R8PwsZxa8efua3zNyrYpC94cpmdQgknHoCYfjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W4MdoSk2161S9pk8ncpiUDb8181VNLzDUStxdEPZ2XyjvBjxYacEamyfVhtUWmYdpafmaacDHxYabfXZr1sBaos",
  "key1": "5rK8jfr7vsoKWLShyfvJ59Lk9WGYnBTSHpvMD3zczPup2PnBMpqaDyBZPPcf8YrwpsPHW8cfboSCgXbWqVGphGSX",
  "key2": "4TnZiyRLsSLgRoWsapMqUe2WBZLUapSGqiJU2ddeBJnV77ix6LhAY4Q73zutCPYeSib9D4cRT4g1dciTS7f3RyiS",
  "key3": "P3gNxhUKb2Huivw2QG89SBKy5ViCPbg9ZbuPwRFbgdMPTDKr9NRLNTHEcGSr8KSE8Fwd8KzxKWBhf7ymfAD9KoH",
  "key4": "25CM2pnp4vQuTLKxgaJ2orJ19UXSY2kFbVUQybD4ZjVPWgMS9RTzag8un5K1v2oKAUJqiomAPUCvwn1bc8xnTdVw",
  "key5": "4XN1AoLkyuUznTpCu1gzU9SaheYxrmb5uPN65U3XAcHgmATyR2DHYY4hfTsq4D8R8dkQ2oUonLGFHCqPwC1EVF9S",
  "key6": "4LqBKvhyhzEog9Qk256Y34YJ7cU4yvFSDGM4fdMSQa8b4MpDAFcmRcWYWQfLufuc4K4tKFVzW7Eby5B2SYyKfZmW",
  "key7": "3Kgr6fDr8Y8pu9vgbk3VccNp3V6Y3Bm45oudUGkeTEabkwdg7xV9QHvCbSaqrbJhYzr9c1JaBwuRSkmW2tMYuATT",
  "key8": "3pYnwqK2aLmzk5hcTHvdRACbNDKaKKMPs7xCby7Efpq3BXjNeADNH9JSnLY2MZZ8dUPBWWHXDAAMpMxiteSQp6Hs",
  "key9": "X5ysJP3ayhMh5yKtALAaTRkkoZu86DAmU3w6abiWZ6S2ousqbqiVh2UZwCAmHdonRG2j7JaQpc3ka8rpbeQm577",
  "key10": "4RTeZqMyXycFc9JNHhkieTCQ1x1xAcRv4VfVJ1dZmETe9dtCV9VBc4bMUNpSMWqQ48uCLysMqgad7GSFFEnqbkLh",
  "key11": "4t5Tmx9jwYp1ARMRkYa8BQUV89GvGbkGd3nVQVKkr8uy2UjCWAWzi8nvWYVkLojqgUrzhC673LxZ8fEyGyWAVGWU",
  "key12": "5mkQ5DRZetX55cGxGPsn3D36FTtx2WTpJwMpFBT8wNq5q4aA3VwE6s94KkPxDnNPj5r51o4pzTFuiFNXLddKuEHo",
  "key13": "3zKT8M8bSiPzSQ44DcCbXxGquTaot9bje68h4J16RUZnMxM8xxy4uauvYF4CLZHJKmY82zFw3cXTGDkTSy7g55TP",
  "key14": "cVUYZzrajavxwg9CwkihADDH32BrhCbZ9Vux2P1LVLRiPY9Mk9efyVqqm7xTMKQr6qpqP3mVXr2DLCgJtDP4cnV",
  "key15": "DANxETiwhGViabXQkEfEzhR8SW6feeKs7tACrmXmbNxuaZGYpdm9bNjeq2rR3D4YUsyykSx6X7oGwfhCVUvEShA",
  "key16": "2eujbxLrmepoyL1JE5HUGPkYkU2y112K1ywVC4JHjnDnkFy7S1LQpAwavQuSrDTTSHsHTTqhcrJZrTSRR36Ajrad",
  "key17": "4B5ByHueM1jp1hvcWoiJf8SjrmyR89JNSj7Tu5DQom5Zgn3uyMg9yD14LWGLYXT3q7eAiy4vx13vvfNqYE4GAy9A",
  "key18": "4KdjKvmxAq9YvisgVZQnfxJb4Y1PmVwcVRX6ovPkhbvnyuZRLjPbeJCMcVich5Egw7reEZvKprGCxuvWGcdYv8bz",
  "key19": "23xGzCAPgZ5Sc4SZk61GMR38UAbGu8TMqqEr3ba8jJLrmQYhswAf5MqMoA6oka6k25tEwePzSmcpD72FrKd598Gz",
  "key20": "45iKC92e6NYbEh5UMJwLhnkzhnKf9zGMxXpXdwxMyKjaihSDkN28WchqSpJs9SZhQw8mkHr1pWfP3AwvgVHfYkoA",
  "key21": "54B9rrukH3zGonqveqp8rSzfytBABfEfHF1XCmz3gGvuiciMMNHzSVQ4fbMbpWhYpLs7799WDYCLJNnFRYNyJAJC",
  "key22": "4TRHwUirpAEzDqFWrg8wfzXAR9VPaFqYpJM5EmLNzmvHiAs1rcF2veecmhvS3q5nqRELJohDFmPoGL7Frq7D7H7u",
  "key23": "4tPW9KXwPpBFpKhPsVHPECQjW4yKk7Zg6Rp7FV3D8bBjstRjxdmpyM7o3rNDB7wP5yDQDizaV7Sa61pN9SwWXJCE",
  "key24": "2wbsua2ePzcQy1BEAbBsZCTrakAFAPiPvMi1UnSLnpt4EfYo3cF2WXuTtvXM7z7c1HWUx6chSKMh7Vq7QsTBGvas",
  "key25": "5EfQa7S7Kvf66SthQD4XSWcmcWRUZrKYSCw1R5QpLFmq3w2Mee4obMXuinJPhgpvBDFB9eWz9JCBDzuc4WRVuKMV",
  "key26": "67KckfQQn6xuYaQCkZriMabhazD6M9AyK88WhCL8Qq6kyFxWVamS3UzrV9fbLKGgQjASaoosuDrNCh4864ZNVeAY",
  "key27": "5pPwqYhLBdTSb8GFksRUxrfLe4v7TFCsc8k812EhsFLMXAusPFaTJrq66Bj5Nfgta8GR5rJqNEwzhYK9bVVKNjNU",
  "key28": "5kLqZ8JKrDkFXNN2nDeDWnrufk6dURrXB4ceY1syDXtSEgRYdoxxj4Nf3xD6ub3qrgvTcZUUUQYpcBJxuDqPTMq8",
  "key29": "31r7vmzWYFuLwnLZSfd1fKiXNSuCB92VKL18hK4wnj8RDzaotsJZo1SdLZ2xX4XBhsFEU1UG6TTqcWwfTZ4ReXKi",
  "key30": "3FchHKtNHqJJLFBvCzRA4yXo1Z5iSf8srf188pkSkMhwYHXG1vKrCcRY9ECGDMeXCXsQtWi426eEJNCs86fpk8hN",
  "key31": "5pAXz7yhn9jetyv7b3sSn2dMTCQK821SVPoQiGdCsK8CmQ2VpHwxsqbx9Da3xCL42sHNPiQELa4k4CG9nuQvVkBM",
  "key32": "3jAgkEtj38FFZFJAttZxMayJTdeVkgQXMYQTtdpao4S5EhvaR75jxXfUXN22E96tjhPAhXhHFGYxxyQFrZzXpQTp",
  "key33": "5oozYJzP64jGQFjyoEYKppWCrGpfopkmxTnFS3LLv3x6wWwMUg4y8h64MXSkvb2SgcamrbAtw6RTuqVr19vMeNX7",
  "key34": "3V6naxAegTtrdU9oXpzNEqjtfqgcHpiLeHN3xhu3Qg4AMXTk9X8fAcZ237rBMmAa1QDcSyTGWDD9jGFSDLmP8f5T",
  "key35": "27kb1GvmC94Mq6nApYcBbyPZ4mjpQKtdzJCat7wXDb6wYfaE9UAmezjqXL1sGQ9Yaxidbuu43UwyCjpR6HQHT7i1",
  "key36": "5REVNKtJ1K3uag2kDDWbsD7aJEY7o3J1rh8ins8MsUbpZ9TjjMrBVpDth42C5QWJunxVFLQe17Jx4FMrTHd73EGb",
  "key37": "4o6etF133EzpZVmGAMXVcrTbSDfsQAcMchkK3YaY2c3qep87Y7j7eQZvYBzQB4pWeWRqg6dNK8GLgWg8pB2THsgF",
  "key38": "5eGEeZ3ArhCaJbdT6gSbdoegmUaghz2TxbQhwG5wsZK8CKH6TN58w7UKoiG4THcwKZmeek57hF2qSUwgLHhtC5e6",
  "key39": "4b3WD7ZAavB53SUGH3r3L1RC2yiSHVsYSju9ShLCp36csJPfE1MJxQBwWmWkVtUk6ufRk1sxrtBmBYoBUZcs1WdG",
  "key40": "396937xmH8xxuMpemLKX7SmyTUFYqPfsWM5XFdn35PfviW8mS14DHLH5px7ABTCSgGPFtamBHX5rkzZCD1Y1VNyH",
  "key41": "37ximoLmPPi2SnejS1VJvUTP5TJfUEjCQ8fWm7Hv4kVPyym6xS2jhFG6GaPEPQ3wCxNLqtTimdyUA7QvTz4ZhDXD",
  "key42": "5nurwGtHSGtMGmvTJnq48412DNnSKVcV7BesUUaeGv7YHSnhBthyz6NqXFNdBBGzY1gRpSPCnB9UD93cmVtR6hL9",
  "key43": "5EGs5J97SdpfS5LrwpQZQjK6jHAX6CGhxidBgCmN1Ps5vC4fE6LhNZDvvwKuFMuxDtR5HrmVvKBabALsgpBVqvXV",
  "key44": "62zJLJkg5cdt5cN25EhQa49dF9z6HyGrtmX3Pz3xrmRHeenmjt4nvSG6ZSjAjtdYuachZAGm5x61JLc1k3nZHWCx",
  "key45": "2ETkxWpTJUutXUL9fbdVrwD9Tmj6haW1upuV7DqnV9k1qZ5gYSLJbMnduinmZXxXFiHvSszqPZb5Q15TufVQiEf4"
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
