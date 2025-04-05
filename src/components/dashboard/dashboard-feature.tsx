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
    "JJcekJzjiXoPDZxeXXpQXE6qPXxL1Ws9eABdtnhzpkzfXKDSu2bHgoPEac8Qk4T7HKq2jmgGmnnkLSopYbe4LKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iWekiKqneYN6m7CtnFjE9H8NR9xotiAAE6cd2DC2mVvh3uP7qJv2uctbszjoyWjC3Vj1oJ6ob4dWccFZbqMUSrh",
  "key1": "2M5rb47tDvUM2NSjGbhQySKfiSWZrEJHw7g6CLiBGK5N6Dcen64rPcBfT1UipGm15CzQQJFLGkULArzYirzgWis5",
  "key2": "5rwPTz6GQ5eo5ijPR5LEMfdJq6Lt6uwxLv9HQ3fiBbxpBZXT7cFsm9qNPStky3TjoeNFUx4hbFTK2fvJhoQy2vLH",
  "key3": "4pdagrHcDCEbEtimt5wpQUskgVqX82XNNEhi1nSWxc5iEqdRd3vnvxwY2XPYqkDQi8aYDQUXWAJYJgwFpDYDQWba",
  "key4": "22e5kQbNboSabCGm8gfpG5bEsVcbSvCX7AKmiLLDVFqX6tpTMQRYGF8qAfKUkLKbf5APXADTx1j8JxeZiAPTo91j",
  "key5": "36egJJxyqGkvQ9j2Ynf4eEHncswiNKx3fBC9uhdrsUZUju6QzWiC1iy1TFG1V6bnBkMDzG3NunguaQVGSEdMfwZ7",
  "key6": "5rtXPYH3pko7rZJJeDEduYVrHyQGj3DULqTkt5B1kfGPpPP2LbVvpGheRobnkgJoVUbJh9faH6mrhPiSguJWP1dr",
  "key7": "2h6kPmiSQHUBqstextq9XwCCApap5TwgZgtJSiKfWxdxjxwqzYndbCagmjA686gPYoZmsMf1GVvpWX3Nx7z8PoQg",
  "key8": "57KNDFbkAapKV62tSG11PuDYQnmS1X85bPuzBq5ihe9YZJumJKdBTGdNQXWH7T9XKnggdEbxfHwPa2JZyNN7WrwJ",
  "key9": "4AzotBtq1Kh3Wy6hk4z7ea2gKdsY24TH7C9BYUvM91UuoVyPUsEFNebwJXF9uM4LDrGm5zA17zKp7JEC5tciyWSq",
  "key10": "3uRwjQBpfRPHVM6yD6nAR9e3LFGjzi2dgbjYanQHhkefqCtv4Uqtf2CQRDvZfWpikQNtgEqUDaAuY4B6trFpTP2n",
  "key11": "3oJEPJ2YJjjnBEvLjFJguGakCx51bBZTwVYQHpzia9yHiVAbu43qHAQziFhdV9DftBvbzv6wuHeANGdkYH669nPt",
  "key12": "YV9mpVEFwcc8BFV1ufBNLHsnbvGQrLHYfJcYMhVMhHufxzE2NJdTBG7q9fXvnkDJG3ouqz9F3SMpMMpAFY19ECz",
  "key13": "492ozbPRV3bt9KJ5cdiUv6F6Wzi2f61LUddSKdnZ6QwzcqU6cRVVREtR3YqUtsFBcGEUwpUGqYeUnoinYgh4EFtd",
  "key14": "3Cr7pvvaZm5913Uh8iTPDZ66QiHNqrfRLek6CeQb8TreTh6Cw4JdKJiY1fRGHVUBmsn2Aw9Dg8gcegqjMzmkyr1i",
  "key15": "545xfKBYTjs7gMyuhkG4LcP5cpJLcKgujkF9Bs2g5SyEyk9oDuXJ9c8E5jpAKhr3yVeAqKZoFTJHudSPHRh2CijY",
  "key16": "3ajfXN6Rqm92Rf45UN2atKfiFnvDa8Dapj2v9ani5w6T51vP9qBzim9QZAUa9NsxuFJikbepB3KMym2X4hsmWX5G",
  "key17": "5cAc6aF5Bsm9YaL39kvoQqeFmrS1QoC1huH3Adjkd7jFfa8nPnCdwPu6PLvsghddcamCzkogaZxhStYGyYd9whLK",
  "key18": "2YDbqpjSRaRdb4FGh4pr75Y1Gq8H2KLJarfDvHehE6K2mFcDuYDR2EU3XWdHs2ujugoewhwKJpTBaGVrYGBJTNCb",
  "key19": "5JtVbcfMPwthfLbTh26QjJDWKVDMCk9kALEStxSxeZSN33Qtitj7Ln71tcfStL2MiqsfjrhvCW2qPAn7PpZ7f198",
  "key20": "fxcqLSs4YqABWkFHYnFVVCkHM3yYVvJCcr8sb8TFqvWY3ug3g5PRXn9mQDJYHuSYMpaBzzhejCsVDekW1Vm8r7A",
  "key21": "3dG2quoD2NpL7nrWtvYUYPa6QduvxXY8DgpeaK4rUb3rXFR5x313eBihBn58TXEq9aRAR7taChMmRcPGmA3JZRxR",
  "key22": "65xF8yyRLtEj8NjsZzpCzen222BApSQkAPVmKFCyGXCwqWfsE6MfMrnvtnS7FgRwXaDBapGerSg36PG3291FMa9P",
  "key23": "2k14znTUBt5fhizJMXXSV3jAeREHmvASHmfxGaqPcZqyrLWDWd1V6JztvjH9N7LzbhsWhMJi9f66GtFQnrUqGsDi",
  "key24": "5dbA1Mo7RdewaJZPTwafk5XR9yE3f8Yhar8hSwGLqavqhhyp4Hiq69zCczbw37Z7WiPaECqbkMWkArnJ2p9SLPmm",
  "key25": "4PhPsAf9VGL2aG7HviMEzQhoLZ3cvDdGL2zMfiVpVVi2oeHoETkam4TRtb6RdoRKBnuiAUTjjcLP3wkHGQWi6RKK",
  "key26": "L1En9GeiKF7XccBZE3b6uA2a8p9LdBp46RjZL8N2rxxawZP2tCFGfCn4zTbqGyqgvYTVaSdjvYUj81T9oRW9Zsn",
  "key27": "5oCapAmALCcV2pAAhhjCuieZ6cC5e52SYccyUENLKCkoA3fQ6jyBdJp24J6YYvGN8TpjEPpKB7SKCBndTkqVDvAq",
  "key28": "2zxxPtptRkD4DnyndF9x8MhF6TMYenEaYxhoEVkMQNEdDQo7NBrBGwmuMhCkz3pQ6ko1mnbp9dVFs289VVKxgsVr",
  "key29": "3uU5Sdeyrbj299UZqPxacpwmoa12RG6Y91aCBrwkY6FL228tWFTru3bHAh1byjJ3Bb9QNLFTakH6AYK2K5VqBqTG",
  "key30": "3zjC28GQsGoSYXvVQd2HuKE9XNC5xoTQkgMsiYCFDRMTvgEyy2LJz7kTmghyoqj82d1sLXpVxYQaujcUnso5s2fe",
  "key31": "5idwecmYQWY3kQdp4tQCvr8WsmdKWE6oWC6ZjTXa836oB7WQAiU18yoKJUwNuuNpepDjAJ5iQ3kzLF16nEWxHbuR",
  "key32": "4LaeCGvTR1Liebf1uJDN9qqGLrF3DWfEMMHUdupa6hWQyw9XAw57UT9D9YYGC2gbo7svtb9ayyfoZoMCVxpnwp4D",
  "key33": "2tEBdXxcXLepbNHH5eG9hdJSR8SfBXUnwtpEXpRmYjacwDwyTvrdbTjuJZkUDSDx2xdZzFKsJW24xWEcUqZ7jY1m"
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
