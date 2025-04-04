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
    "37UhGTQ6pfMhLpieHKnETpbUSmCPpqueYQWiNCnzkJqr3ZQcFuBYYcXwkraGZEZhVx7P45Ah1cY3kkcLpCdTbuxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EzxJcVQeVtDVtqh83FvBV4EqJCQsFP9f9qetzcVSuWEhCCnhYpTkHCK3Sog24H2uk4wzevyckxYUHuE64DvE5nF",
  "key1": "5HkdAFMVdc41XRwNtrYJdUi7XFSEFu5aSNxmpzKcAZWtZ7gLAqYr3fUyY3VMuAPDU891oUV6mu86vL7QtD9Zqz2c",
  "key2": "3jUVvRofxtHTzitjcEGSaQBTuMDuB16NSUBUWYYLUyKuwrUiTFzUYLBgBXxeFx6o674gx9BfbFhpTLJYpfC6AQ7j",
  "key3": "4VfFEPg4Vd2CZdN2Mqq9Q3Hd4nDbSK5ydf9wSXGXLJq34yCv4do8J3cuQHUpzmaCg1vUvPmSUc9WkUXNuL9QDGVR",
  "key4": "5HsoPzf79FkEzE5gS5VNrZGxwBVP2dT1hQ1PM9bAGrBFTgH9H32zXyp38K5ZANsb6n5u7AMDcYRDeeoErRn1rimi",
  "key5": "2vqbvgmtd3ZRo3VLsSX25igDYS1D4PUbXFBWDuKcEZE7tqoyZK4ioZpNSUifyTzerN7w6g1ChsRZdY72vqLKJwDK",
  "key6": "3n6hrvEc1CLvQxay4XbNPTYXjajGQzgn8uvzsnVTgBeabJUsn95Yr8CNJfkLdzTCySpjaRGwJSPL8o6eozp7yoJ8",
  "key7": "5X8CTRsFRyLebmh4S5MJ3imXeZJD7YsqjhpPWxzDYh1oTeV2yyX6GzRMKSvHoCBShSm9CyNVANDX2PMqYAmvxCiy",
  "key8": "5dvLukodkzmhXHvgiySUsKphoK4AtS9KQarifnU6QPeMcvT4Jt9bmHQA155y5Dzg7yMvKv5Y9p6rmw7FpXYTLDVg",
  "key9": "3qFDi6nMTYc3zCRhL6oyuTmupaAJevQGuqZGMBtJKc1YChV8s5xhqe6BomCUUEjEg4jzVyUzmrniew3vfhpk3kxF",
  "key10": "3axKY5j3aH6m3iYRU4sFVxcPaz56mg7MED5zDYhjMNdi6AYZkBCQX1nM9hsSKQN7KehvHk46RdDBEchtMtBsDmZL",
  "key11": "3R6hvX2x8qNoaPLGHYkSmT7DF6BiV4drubEHziPwZcB4hfdpxfm3Pzj5RsViZuj2rGSehc7Ai4MEGw8yxJ47zERe",
  "key12": "4FXgKkHo7Ta3uBk4E9d28Tf1Vb1DXaRXXSaMTU1vwzHxVqXyuPgd9ejip2vCNLU6Q3rTAcpzJbZryZL63RKC4zcC",
  "key13": "3DbxexjUVLNeLYa2ejHE24veXRXGsbFR2SDT6zgkLdX7T2KQfcGQNmaUBRVhWCYq88XK5UhkjpiJnSiAAiP8tH4L",
  "key14": "3LDdkJCVnjri9Sm4E25nYd2gHZXbHChtd32zis9sYuYnv6qu7iqrbtNLtHdEu4nKDu4Kf21Br6DKW2FQcEYsFi1b",
  "key15": "4auAATfzng2Ggiyqbu3mJtpzLrLk9LbyYb9GG2g8aWaMNLwEXw7rC3fK4dKoQr2G59JfY92iWr5usH9QVqg8F2E",
  "key16": "arp3yb2xfhfHcicGpHQcZRZiXLn9XBZWWF2BTpynDJZXQquJJTrtmmNG3U85UFsRHXUNPBuGWUZWNt4gfnRfKaa",
  "key17": "acAb5n3PFxthM95A7YzjXFVTei3tC5Dm35rpTDbYowaU8nmjLELtEa4LYiYdmyYDZ5FZsYv79BKyR4KxvKAcPZv",
  "key18": "2RJPQjUk7B7HdbkisLFQcQaMdtiKvxuCAw7G4svQxbQrqQzMAQxrXmv5FFkropAxZXBmopUVGGX2NWdu17YpKhBo",
  "key19": "38qjNu4j3rGvoEa7uijbZK1YtVpoVRn5VKQyf5YYLPF49ty2MwofMGvcaBukz1iVXyiLgHzvuFNPN2hXsKK61HRa",
  "key20": "3qS2C41TMpTwU4e53YpFnVGQMEuB7gNsizcWzZP429FSmaBXq4mwkN2A3evo5arJqb4gF35cE9FvP2B4RRjCHFJo",
  "key21": "42wL1AjCYmDWivU5HtMvajsKyTmViFtWVGye77Y5BVCrrmjrtHWWKBwEBuJYZMeiZNf9CTmKRnDEiyY1kuM2czLL",
  "key22": "2F5QUqUjiJYJr3RVLgAt9S1Npj9Zoq2R3CNPmJdRD8nbtGayK5zHeYr5zUSYQ9TF8cYjR7k48dq8ZVYckr3sThQf",
  "key23": "5QuMjHsXdP5cBUGUZmTgsPWueFzmAaW4S5hhj1Rf6p3We4mMN9FkhBYymE4LPgg4g6U2rJMaDMXsxiqtNYB2NcLJ",
  "key24": "6LifRPnxieZWRtvdx3F4ic3HJjBWG1u8avnYWcUnz3sA2ANL71FCT7mu7EUZu3ui9qq6XZyU9cruParXrZ4zyXM",
  "key25": "4eR3xfi5CGc3YLQ1eo8XC8HgmAxrnXR9tEMzXpk7CfpahGnfyyQYAR9J3Etp19MLZFvKBCHBgbtCsqFuRj3wSWFE",
  "key26": "5uroVr4tHoybNRNgPDR6crrw4tBemikdSXKNGxhkHjuXy8wKq1At1u9EN3caA5Edqav2kCtw8qP7xLFJWJbHvdnJ",
  "key27": "Ds1dyHed2jfRT7mvEPqPhSLjPTxr9KVbB3L2CtxGqMkwLoabHg78G82MQjZefkhzd7vNEJ99ETeAum1GqTxbzUF",
  "key28": "5MiMKj6WgN9WiYtcu55stf7qxkqCsbEw9AQP3fonxWcYnen7WnboajmChYub2TC9rJhgZoxRcB41K7uo29JXJJsf",
  "key29": "2Pxnk7Yho6fSaFmH7oRieVRfFANtkBvf2FkirYjyM3KNvP3sRJvbCB8Rzkv1ZWCk2WSyUG7VRSUsjS9ZWDPR1HU7",
  "key30": "2Uuu1GSjSLgCauQsKVZEJgV1GW5ar4vcQU1tLAWvmCUqaZbbPzqvJXTYHTCGUExueRuxaNZ2WGqihpcH5BnVNcdN",
  "key31": "P3bX4q6FLEFKfF26RoP3LYVaZBk9KRaBznQKoCNwsMdguBUVDiEw4vXYb7LEW6w47ptmh4h3dZAWBe8YqBASfAy",
  "key32": "3L227sdZSduJvLqdsvyZGdH8w29H1Aw6qcFidiLQFVbN1eRdx9FZET7H7W3zwCsY4U1axSPzPFrrAaBPhha4h3Ba",
  "key33": "2nAJvCRKs3Doib6fySsSe4V6TNK8PMpcqWedK9Q4oJPnnrm6nQoCPE1u7MgfyxLd9khZ9bonQ2Rx4EuoYM6n6Luz",
  "key34": "hZXjZCugvvstX9kfbMX6LdVngQWYgNHRuTKoCNRud4ApBZuCd9MbaN73usweyER5DfMZWKdeZc2okrYozKCzBsF",
  "key35": "Vszvv9VTzr1d7WyjTuA3yLbduFSgbEukvzp58U2zhEVYxaDxvwJQ4RojcHvZGZZC723fZycN3wUW25KpGGw3JYk",
  "key36": "41zbTkcfTXrrPGamRr1mJhLUykWyrUpWHuAFNw4hQVuroBqDaH17xhoTrDN5yfrVqsxj6PNYR7uQXZ3wjLbUpcmV",
  "key37": "3XuwgdzrbWQsdwm78EbM38TeaLLFSmQaL7SquW7dQLeHnCbJfZKSK6Qst4XGN8iv9PEa5FB6bzEBtH4dmD4JAwEu",
  "key38": "3aFoj3a6ocBMMKZMHY8hvDeUmK3LFdUPtwLZxLLihXZHmjLcXxxeGZGSMHKvcjr53CQWcJQFRXGbH2KabuvMohcA",
  "key39": "KZSw1aV1xhds7sZye353LxWy5eSCySuCa1rQYtJVZWWCnCYXyX4MFtiPbQapyHg3ZCFEZ9BMc54UQDrydeCQsPB",
  "key40": "56efSKay41v3uJVpyF6SwMpeSpkdJJLxZGWZiV5AdJ7a6EH9EzptuE69cz7Sx62vY7WUbkqgYxHvzAw2fEGVBrRZ",
  "key41": "5rA6hw2fzt7gvudXpMZA1SFab4FstPuGFmfD9WGsSZdhhZSQrj15A95HntfmsDea17TmvGMNxkr8w2HjMJtKQh8z",
  "key42": "3eypb7JpEhTFd44t6E5D2NVVHh1AuAreHuko5oHDtw1JYGCkxzAD2sWZDSDaSXcykTNvcS5NkUc2xfeUSj1KL7Px"
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
