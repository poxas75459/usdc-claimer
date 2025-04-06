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
    "4KmP3LYLb8XAysbmk9HDZrKC4VKCG8Nor4x3jj3YNpoHwDyqeaeGgihnR9qre8Ht3tp5xgZYNaRPvH1Np4grtyTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fjQhXyrMXM9TQqhe6SRJ2jSHdQ3f3AXJJGo5zM61C85VwwmtHBgSxbANYxaXkULCyfwEdCJLGe1pDV8SBnW5tYY",
  "key1": "5urDLCNyvYkTkVcw2okixvpUCdmWtpa3m2Pxq1rzXVTsyLvksjHDFJpzmeCxoBfi8cYw7ZSeZiDu5QHESNkqVUju",
  "key2": "4p2stk3pEUoiaD8uMjp8uGfhhh7qCQyWY1mohFV1cbftMYQybpjxRZ6qvfrUXE6KjTii9b3vSRdmBoBwKTsBzNQW",
  "key3": "4deC5wWsj6eJZhbxzQ4Ub8VMtK1rmm7mhywfkUxMonF2bYJLS8RS4Ewq2oZGoAivE7fbsgqpZhqxaU4V7Se5Ecw",
  "key4": "ZL1BsBULNH8vqszq23mjogG5R6msTyno44UvusaJR5YfUG6k6gf2MgJJ7nY4gmn86iKLKKYcGLbeRNtdhvUzQ4H",
  "key5": "53QSFjYvYPzCC8Td5Eie7c9zdu1B7ik5oXd8WC76w7PGh58PrixFRomhys1EqjHpse4fEB8ZP11QXiajtrLmdbWU",
  "key6": "7sXBoQqA8Dejz8guR4TgMwV8EJHajFNKhFXfdiyfiRE9DZ6DWXGbm7cQeRTYeFNAkPEAAB3CtLg59Aq7T6JCZGx",
  "key7": "2HLe6Qqvj53HRZu7ATBiiqUSF9o3MQozmNCMSjDUJw6koJyhVQb3ZBntW4Jb4yz8ZYMzwhJpaSDamL9kh9xgvhRM",
  "key8": "2EWx83asK2kbkqXGu7NgkWurcDudeKUN1pZsn9YZe8aUxPwxo6AueTJ6fbGnED8g1GSUBjiSQJomb6jdV9PFApfe",
  "key9": "4AZfrtGsgfXmZTWawxrYiQE8EgLcXhMJuWwf3KP1Xu8UWgBAQADqyYefpHs9h8eWTB2dVPCaj4K4XHjrnJvag4qo",
  "key10": "4efzaH848bXAdGjWGpdgRcgogVArikpmGW6vH3V6UmijERQyCJoBQfuM6hizy8C5YSYYiGMw6SebP1c3k1d2kmBc",
  "key11": "3KpyniaRYs6jLhbEU8nw85d4RaV4XzVxZAyHdTAb84W93cXo1sFhF3uidX41fRKMZsfmSowci5X8CxxtE63zKHkp",
  "key12": "VmcorTfgXPFpDbYarU2zf2ThmEQgEPEYFXBvmwEdzRMqLAEy8prwoCsE1bNr7RCk1sf87oVvjMB41AJZntWxJpU",
  "key13": "4ZEnopLRrboX71ww5SsQHTYCMidy6dPHfyYQrNaUAuVJ7eHHUWodDVgTAqzjj4pQE7vsYDt8inW8RauUjzxbG4tB",
  "key14": "JMQeeV3x7MpRN2FiE2RJ8ukdPBPaxt85Kfi5GH7TFywUQfEqooC72BbtVFuhP1eXEDBPKFVdP8e3fioihrrjaQA",
  "key15": "5wbKJX3L9EASmxroBqd2TeJXDm2wKMwy8uBZRB9eidoZ7XsRCr8KBYAqPsKampALcBqzRgJp3Sd1ywZVnUGFMhXw",
  "key16": "fangvwUxFN6WsC9crCmnGcBPjfBSrTGCK1uftyVjZ4BkMhDNLLL95vDaAKr2rjgpYDEEZhQxBmkHRBXF3WUwWKu",
  "key17": "U4fyRkZ3aK6Sf9VRVV5jD8kJZMRJNS2FgPvrdbYJ4mGN4N9L45CZniAw5JT91nfadAD3wWiFTCK2zeVEUAkNWy9",
  "key18": "zm1oFWXqdCcsDP6JeTnRcq29PX5bWpimLWancR2vpGAC6uUGjYPAcZ4hoBxsYE844NY19s735xg8iVipd9h64uG",
  "key19": "4PyGc5sqbqXPM1HVo7WoWtkY99EXERTQoMBr4fxfn9QPpG4u7KKYThPKbZF94kvdSvKLqGebYTycPfgZTuCJPC4B",
  "key20": "5nQGBXHHEe9YjLstzYGq7TtkbE7jFx8VPZVT3bbg6Aq7enspuYyscWqDFpgTTieXnavXvvA6Ek7B3RdZQnpUxze2",
  "key21": "36eihCxXk49fCyejHRLqo35XKSm1Cieo3F8HhS4XFtsFQrCU3kkdbzEYTUL4AwsmSP6H6Z4P5AbWiEdv8RtRoP9j",
  "key22": "5V1naWu3Uuy1183gS7WvcHsn6toT9nVGd7MbRoth53ptYrV2cPb1dWCARMQ2tdMwsio56X4tAZsjrRhrGWw2dVB8",
  "key23": "2hcHCthphSSYwbGkQMut9QFindvugiFrtBrLD3YKpo8rjYQyFugxZaHjvD3UVBK7vR61ykAQgLbsDkMNgH7fJm4M",
  "key24": "29q866bZmwHRFTPgVdZoBYNmRw22sayE43xAZhwPuCBLxmnX6uRS85RJhGwKxLVmH2ZKHGhbskqefGqfLWmzVwX6",
  "key25": "3E6qXPBbTiET1mh1mAcEt5zHmdRduXaFVeCguHcV4xwBtsja4qpef7LmipuqHo9SqHgrDNEoHhCAD1WKG26gsAGa",
  "key26": "2oqZEeM7ACMxJzwmLTJ1bwtHnT6PUDSqnATxxj1Sux8uTjYCfUcU6eKJHpyrCNkmkLCnff8CnYf94fm2pjXf4RDP",
  "key27": "3TZ2FYWrePLvr6bqChEsCMYe9SgtFYaL3sS9o8JVxV5usSaHAzrUinaRydyejXMmSTfj6L8zFhncmz99tRv5DBUB",
  "key28": "2UBKdBK5EWphou6CdjYqxBLoHjYfP2rXwtbqPYQumqzPb5pMa6vCYrZWUsX5iqUr1iHUwWk47bwKcG5ECiw5omZb",
  "key29": "4ECiXZhaSvGNt4WuKpLTNSYWA2qTjCW61rezS453A2S54sDx8ELLXJUfZEdSGNzhMGVVUJPuGVct1cxcY51FhSen",
  "key30": "2p7pag97Z3vH63fYq7waUiWXAATWessUowoN4FqbBuSfv9ZCULbijHSvYddw3T4vzzRgvnkBEQg2zZGXKXWprJF5",
  "key31": "4niYLzqG74ikvUj67tVzzF1QmKDmExQjw3UkEmebxGMxXPNEAbMfZHXwQNJuu2q4CNhqLY6WkGLDu6dx373obTHg",
  "key32": "58gG2MzrzaxvR8Kwm9bAbEK2vvsUBFT6Ref9m21GmhULzbz7ZFXGEuV4tcnDfgJMuwbjFjukgg8u85sV7Zui6mks",
  "key33": "zDVjSHpzzU6GF6w4rWwfmUWpnHq48hoeqDmVFMDCHog3FHUfHjwuJvUQj1NacMFnFGQ3Afcebg7fqTFHjuK5kAR",
  "key34": "2idXpVeLF1LNBjFXntFURv7LYLNFZGBgFziaDPe8wBwJddH3pzNinXEZwwqrh7fLGTs3YjfubXkm1pYiMXVY4U7C"
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
