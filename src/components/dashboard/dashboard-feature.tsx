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
    "5y2NnKQ8C3v8dtX22GevCPNLowYrDPYfJm3DSNkWg6gTBzgeroSY44CKpyva13hALVmBnBDK7HkqyU2cNmwCy844"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Upeif912di8qqVD3mBTKZke9BdZmEiYJrXC8hM5fjY5aq2tHzLPNXo8FR2oR1hd1Bv4Yhhy76Hiyanrs94N7qfH",
  "key1": "3GBxjhcSTC81biH9vne92iYisT741yAz9gR7ivLJci48u2hCPe1piiHXvtif7drrD27kXyucvapnvUZvdUSN8evu",
  "key2": "r8Vz6dgbtkFH5wm5BFwxPJDajGMk7ZhxzbaZ5Py1dABdHp34PW4Yh8PNpdyXhMVv9EN1WE7s7muaHwrtq4M2qCh",
  "key3": "3AJzhF8BeQtDxWa8fCe8WFU69WDL6JdpWXHoEwug94pQcQuGzugZhiMMA29j5MzECghVHKAPsYbkaVVVgTAWKsKx",
  "key4": "3WZVjTfW3LeofPP6HV2dCuefNZtqc86zp3Xw7971NqmKGbyxhnVkir4GYjAJ6Y3rwvTBnxn844j2fqABuen5kTas",
  "key5": "3sBzjfhoZhYeZdLHTDc2PL7fyrko2r8HdjTZNTJXCgTgJoLhPhCGMuEMjMG9z7cvmnWXoZ3PE2B7aSsysX5vnZGr",
  "key6": "2qGnWwKcGp1yz9AAHSrkoPpz9QNZxPGKFfLQtK6LyCjTbPhUcE8cqm89ymheep1R8b6Z89E324PoTDfRpZNywNRQ",
  "key7": "588mXzj9k9MnJoPaExEvdfxFtDL24NTPMS49MvvynDGF4vyQkvkRYp1v3AHkmK3Tnbu9Zhw6PL9d73Vu4oprpMnD",
  "key8": "5G3aaBzjHCo4keVXYeTj1RGcUAxXGY4dhMkZr8FNjKwhr2VeQa1vC1QrFM5mA6knrZgQMWvoPwagaqpbqYXnj6zn",
  "key9": "21o7njMAaL5XtTarzPRdpetQJEDKum1WE7WCM9zt8Xr9UQoQ3P8WowGoauBtDWNtjQqfxoReNshB5PgcDcYnkGD9",
  "key10": "3BRSpBNUVuU5JS4hCu9wfy7dwWZZgeyApRwRifHYSTSdqbJRXJwcWBtMQN2wFgsRb2X2zEdsfAczrGEC9WK4Jr8K",
  "key11": "5DeqXd5CJgzeUaSH8CwNfyaeYhrg1uidEwxMe2hMXHmubdMmMsf8XW1rTwEbdLRc8XpyBVcYpErKn9UyKu5nKty9",
  "key12": "t1WQ3AwTJMJaJXBTkfCFPGyrbZiVZ6b15tCiYJGUW8ndyWLQVELYnMrykeK3SCd2ouupJt3G2oZjSn4Kfc3iu1t",
  "key13": "3fTMLCueMJ3Q7fEvRaVg2JPzKSD5jstAHF4e16XYmc2QWeyre1PGrZRJeum3RVEbCyQKpn4VNWy7cMBoasttXYoV",
  "key14": "4yeCXzCb6q3GoRyuYLXZPbCezwdWGfpdoawmGVF5CoAssiKRnAGxPEnYvbM2hd8fujMg1pZAZQywzazNgpnDmwTC",
  "key15": "4YuV2ihkAF1Bjo6B4WgkvJbaUZWTmqNbAoUPjDoYhV9wfzdyPW1CdW7KucMDt9cApVifzwB47ihD71oqciM2G6wp",
  "key16": "gFpmvMCYeeGZapDFBLMRjxeytX2HZPzmCNMudy7rwTnjb3wpw72Sm135onHHtAGowPq4MHET4XF8mZwX3exvLxP",
  "key17": "5LHi6F6PHyvvdMBN1AiwHYQwQxE4mGGNmjHZvbaAh4yUE3U4mGMHkhSCF1RfZXTTqUZSFUawobqhQD1rsKdrBYVF",
  "key18": "4u9c6ZTetHGAD9bsFnWk2CZEe7aHShRP1VpNHnFnhvTCVpFSshSQjrgGxC7YbSJJ8vt8N5c3sCJXdrsChVQ5s7Jf",
  "key19": "4cYgvjakWKDqmNkHGUNLXLt9dFuXPLwCUqteGwxth87eAMiCoiwK4wR5cXnnVgN9eMdd3R43AgZZxQXY5DD9xMuB",
  "key20": "5akH5nAVfgzLcdJxxeuDt4Z3VggFCUqYSR3g7xyhmZ5Nj3A4y1qk9iEpYWstkrphrKZ1A8CLzLwg7cZQ1PcrxmUn",
  "key21": "2paGRKo4oMJFFZp8QbcLSqDwaWYUeFzXbbFmEM1NYHjYa9HkudcWjAv4UttMkdSDUUYC9G1edqwpTtLxmbGTsCK9",
  "key22": "o7Kz7baviN5cezSDmUyi4RD3ubBm1Qw69L2mAd88H8YwNrUUB3b1xfzR3d8fZSES6KUh76CQ8ZyrfokC1oHRYJK",
  "key23": "5fSd8KBEZMA7mgrcxGGjLRMg747wAkxNmj53Gr27h94UJoK75KqvtYAoXNyAnVSFcz6Ak3VopWmbX9Ve3pLRzG1w",
  "key24": "4xmmQHA6pAtGvcRLBRWqiqyVmNRdKcn9FLLESFUkV6bXXXCxXgnanEMq1DAyKnsoBdTxFntBCo8k3dwd3g2PBMHP",
  "key25": "4cZLQnHaYodHvoLZ4GHxgaQeX4pQTZYeqRr3Q8M6MX8N3V8K6612TSHUKnAqU9uwc7P1zBjTciStSx9hukeHW4pw",
  "key26": "Vbiihxn65zzoaM1jETSGjWAwNxXSxk5M6Zjts7SLQBfvtptmsAPeZsyCZxNTffyKSYiHi81bBGKcKrBzsbzGk1c",
  "key27": "oeZc7X1uqMKQpnNBMM6541KoBZJDU9wmHwG1vR9CX7vSS75K8uNtKbRJR1NQUkFT3GCFhhkJ9QvceLiQB9aWJao",
  "key28": "2gzRAmms7mZhfncDJZw5FtKn2Am96qGAWkpnRQYrfmx7J4EeSVLJF5ZmgCiDkZPSNh11Jwx9S4FkycTyWbruvJVh",
  "key29": "2fpqSbxb21QHRMTsc9krN8C49ejjb83yZAQuBEFdgoMEoHnBgfhZFmYd3YWNnTCopFgvgkHMfsWTwr4Wx13gVkoi",
  "key30": "4bivv7iy1ywe6k2qf4H8pSXnaYELBZ8tqds6b4aWWjDTsj7AC7aGVpumSay1DWw6REo4CTondNq8UygyRAAZceQN",
  "key31": "4WNQJQ4nfiLaQCnRJ1475N9Yx4k8ZqZpMKSDH1iwtZDffBPsxvcwsKTtnCXRRBgpcBWuB2B34aqr1FELxcTzEMRJ",
  "key32": "4LVrznRYXEYJQmRkPCgSdwsCLLEpYnms4fcqvjebcnrKJSJN7xBdaAYKb9G51xsgnE9UWVfMoEYkK3QxRXkfbH3f",
  "key33": "4cUp32i56v6aDwjxSoahetARtxVUGkyRujq528cufBfc1W3wqkNq7eUwHwAny9YCPYjQfiyXC5Td6bDxHEY6YLik",
  "key34": "4jfN44SopZD7t2rWKfxuHstu6GhVH5WBuigqgDX2diLvXqG5YoLxqrZ5Q7SqgxTW8ACDxdXMRHdmiWp88uF7RGG2",
  "key35": "2JTMzQycxdGvZA9vvmQ6wVYifDxsoAn751rKXr2wwxHDGARz1DdijFMQaSo25QReKwi7S3oEGP7JaNMUHx3knpxW",
  "key36": "25bWy1XLUbKhs8CgKnCLPaBCJwB6bKmbv4KxwSWxSqYSRg83fQCNVBznsqtH53Nbf5HpTRdXtXDVoXKtD5LT2KVR",
  "key37": "2FBHKBXATmbe7xCPBYBKDzBZNZKoG53S6yFsMz3AATbZnBmbCRz4eFjEP7vhhVekRPdNXrMAsSSjokVt292YfEu1",
  "key38": "FZqaCnbZ7oUbJzmbxKNKpHC4uVh1rVktvNwjMSSSxiy9nEfaV7v8XLEtfrZLaggrfVTMka82rDvfD3URSKydCSc",
  "key39": "2QCuociuQPRrBtJfPTYUuWxVgFXYVLDeseAid35eGNSW88jF8rQjKcKpruxphakzCuNEyLKmZtMZdjq6eiWk82Wc",
  "key40": "3S2FAKZ1hXSfgZecPiGUkj3ASxYd3jx5pttnTHpzQSPEGZDLTxMvqfYjnQD6u8iT4YZDh8jpMZQrdTMJCE2QVDb1",
  "key41": "4XDhN7jSrwJ2p7b3jrTiKu3pG2f5oG9QHUdMfM1QwXEEmS5jLkCHXdCw4qchntGV7qkBGkiqPPSrxHiASGHQsN5z",
  "key42": "2uTkyTkqMnQdqdJtcGQ1NSuggCrA93tgrS4xnyzECniZv56tEAXmZXu3x7J2t6ivm5VyjtYgnBpPPhc7VaMDbjbE",
  "key43": "2iEx7L6bCv5NW68CuyiiKEexdq3hCQKyYNdLgxHhGUn8aALuSAABr6kEjZRVgWFmpoTRKWCzbvwwvEfc1Q19xrrX",
  "key44": "XVFzdC4PkHXyz5ubqdG5Xa8kTJV1gCy9r8WxBRCZuYVisAfbf1dUMyJqzmhnsL6MqGjWGKfzAGz6A2c7qBL1XCL",
  "key45": "9EjKLTfpHWuvhcPr5MSCTRvdF1rbWZRT2ehLappTG7hEKQmuyV89SRFaJ5bAh19HNEiyNRuRWhtzvnRBMK3kJrW",
  "key46": "4Wso1KNe7dQ7BTzJ3FgiGkivB7kEjAMLAKxofB4RkeKxB5GubSZZhG77swkq2o9tXgYxAbedy99eSByU8HbDqn13"
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
