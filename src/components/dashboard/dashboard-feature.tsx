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
    "59q4GVvbjMGG8fux2cNUfqezKHmAzpsVHDEoZsQra9fhKGfgUk9ZNjvarSWk4Cfj9PGCBxxP5jmotr3dZTvUGuTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5As6rQQWtdEMJFbXSRExWtAG8fXmKQspzydX9sX7GS2H1TkUAzhtCyMqoWjBU3XEfgFW9k1tFzi3fKB2LVAzrym1",
  "key1": "CKhfvb8BYnAb5hZtEdpF7f1zeNzT7gtMBWtNJBcjioBFQ4fEgFVc6aWTcHHiP8k9ybDnMEcw6MxMGSxyWyF6fVf",
  "key2": "5BseGGkUBQTq8Mg27yCLHs9JVt2273pAe1NmYYDTC1qaxQTh1557En2z8nwESurPnsuH1qcGLZLxEYyyJk1GUV16",
  "key3": "4JZm1hsy6THs9H6QN9UjMxfcLSPPptuvz6GVQdaHxXvV1J9hxYHPmFQkXMSVmHHtBCbwtCrNGL7xHvpRww4e775z",
  "key4": "2M98unisufTTZAgZkHrLzkm8WVeCf9fp5C6TRSzPJJ8eWPbdMpSekvWjfrYBReFUoeVejabZMCqgtBMEqJ4h3kdg",
  "key5": "5qUyAJYSD7JLeXmedbQhnnKwNfTgGPQYzvwDxkuuX5MKkhTKaZB8iUSHpScnxo2svkH7qXdQ2GKsisXAMqQZD3g6",
  "key6": "3Bw6tNX2rpTz8MAH6cRmof8XMaLUaY2u4Yv98JFrxZXugsW1H4ttzc39C6ywMR1uoQZfuVyS4mGqxifJhhh92xqP",
  "key7": "5A6VXPUVVkjzw7GXBPyF6iaC7DBWcZvBJduQvCYvS4Xepb1Kgeuy5fvayyFponsbRrZ6WjxfKE7VLXEi9babjr8n",
  "key8": "3QrpU3amGvYiVCfJHHYuyhuHdDQ89qQcHrY6Ej3rxJPJiwhb7D4LmYs2BGNni3nJeBGjKbSp88Si3EiTWEBcLdaF",
  "key9": "Mxn5dX4Aunipw7x4LjAoS3TxEFf9xbKkaW3JK3XowKvrirRDRNuQUegSdcr6rer9k7BuZC5EPvKu3D8JB4pd3kn",
  "key10": "3gANs9EcB7vgk5aoyrmX39DkPw55jqb6bCrE3MZmQFaW5boRQVk3HsWRWLPEuKscjSAZvYTKPWYtMBKMUonQqudY",
  "key11": "42FzaANDMwCMi3wgU7xUfre6uZHp7gWp7kq5mqaJQja2RAiyAZPvTLvS5J2uSypf2NQpFw2WNuqeUiWQZ8ieB9qF",
  "key12": "36PHgKRrk24F2j2ZzJsQjctXm2zbJ5tLpkmFbRqTFSYP3gksrtjrtt1MSSXn2vjRQktxrgUKxppccwQU6Qs9DhXB",
  "key13": "3WiYKUu3hNmT3vZYvLTHpgvt8R7uX3uW3nNGNjVFPZWG9TJyPe4Bv4k2Hu1CExGKQ4NVhHCFbXifNJMNzD2vats5",
  "key14": "64Vckkx8ZBJFzAQhqZDR4z3TVX1YJJEVp72jXbFGCLXA2beRV3Up2yCX55KKWGLGuax3iPXfybTccXLiefP3k7NZ",
  "key15": "4nHLReR4demaP9cYP29ZsohFjcUEgHohp2bXkx9AzXmgW2aq8JMXp25awVx7p5LjANVETfsEhNHmNT3dRRVpD1Ck",
  "key16": "4U3Z6EKyMX1QvP9NeapZ1AJD6MiK5UwGbfkdYAXXyxewVUqKNGS5GucKbBxritYwf5Ub3H8iHQ1DUYpehCPmzkCG",
  "key17": "59zJ5itRX6CuLETefGd1DTEFEtppDeFkuHquvLZqANFMpEczgGpUASH728gxvj9sDXMHHrfFXsirgBMWqTJv6LkT",
  "key18": "3DXG4vnNz1YoPFsmfSLdcNPhMztXKAjy51wCvcwBtvgouiSESJemsnmG8HLbA9dGb52U9TDhVLSFKUR3bXSk2ZVQ",
  "key19": "2PJMTQhmdomu5vpk7PnsbX1txoaDz2BAvnxJ8KeNLij8AB5TzXDd79yzUvdautqXcnmKTDVQK88mWhbdAxEZRTRA",
  "key20": "46fhyHjsUvoRv5yh4ifViy8hXWeb6AdX292AxrnNxpEqf8tigCj9LJdiSb3dBfFvQuLDib6EasyXCUx1W46YP3TC",
  "key21": "5QwfkZdwGARAqWakWDEUcfBve28m6RULHQPhx7gBF8ht4PiLfH1wjWv6ReiohA8ic4wzqtGpwJD8tZ7mFgRFVMQi",
  "key22": "3cRgHQzHgUmgeWL6b2ocUTzGfiVDx9Tgkok97pNaq8iwn7yuHWHyiSeWkLLtNX4ALYgNzUQ5mP18BF5ci5Hg8qZn",
  "key23": "4nHNUdjaAa96fXLLXNbT85yqRgxLu5KV5fZGYmpHg5S4vpQe4Ge1SYxstaCvzqBh1DS7VKBrVrxtW4UotV2zLEUc",
  "key24": "595DUepvrd7DzKR3qkKmTmryt1BiDHQfqgSHSsJ7dxSL9qguqghnmUE3fcG2F2L7ef9BnCNKhRRQBvmu5rLREnYp",
  "key25": "2T97KntM6CdxN3vAm2YC3k56NRZ6m9awbvaMAbJ2iKrAZdtJUqdvBAdq2SkxsJ65TDmwW3dwgxw93M8Lmj7TNbTQ",
  "key26": "52YUuCRPK5228PJPKGLcDZ65AggGUhmHMov678LyDDPFxJqz9YhshgD8XiJi8Ew5BoVDnTYW9kTvBXJzWYNhzjxn",
  "key27": "8EnWEeVj8B5Vxx55v4Ro9QGnot7G7Gu6gtiUPd4TG9QNDr4PpiEwduMhv3Djd7d6aurd551j1BTreLGbA2mGp8h",
  "key28": "4rGyXkDbijbTVRJyFu59b3STVMfeNuzPsaVSB3HE4NsiwKtBqqUtf65UefNdfCE1vqnJPDWws3KxeibvJn8tWgwx",
  "key29": "ps6WBxekQ1JZPQhU9AT6dGQnPWyqqcxvp4jwGFTVy6WX1UkRDMYYaBeE9JENgcs4mShrZ8Ex3ZyudtX1V7n3iC8",
  "key30": "4xKZEaTCJ5isCoK7tdFYfr4NH8SvbBKb5CzqAEyDrMhSm7ZbvohGYaGNkZjgJu5FwhjbdXoJBt2G4asPhALH4o15",
  "key31": "5SrRA1hH7pYCvVmseuVuvzRDfrobFFqy728quGBN7MwjXNKmfc2gsa9hGMxUAJsfhWDjR4dex92uqLdmjQZA8Pdv",
  "key32": "Don945t6VfMQ9QU2PiPRNR2LBoJG1cwqziYuXzxaDJyMySqV2hv1BdymR4zJtaVG7UQZxPxaE71SG1zUK2KF9ZG",
  "key33": "5N71GFaX7b8EDFq3ftQTYFeuBqd5Gi98cUkcC5KtigAeiXyLB8AW3TdKUewuKCEh6e1WCcegFAq4q5Mbu4oruUrj",
  "key34": "5cHHNk3A1PcTXhRZSk6nR1dRV4838aXxCxxiAFVkmRDpbHwKJenAgcCxqfDWXeh2uJwxSaekKXbJhrLSjN8B4Zg1",
  "key35": "5gViSQ8XyoPecchB11vkmKFF9zY4mF4BLudh69zmgE7tsPbZDoTJoBsxV6qcYmE26zZusgcprEZAEPbrLmEDJR9L",
  "key36": "3N8acmqkrGd6YLEmi7ApfkJt8X4q5h5gofsAzD9sepuP8hvFP6HdY4qUvDp9qYyXZ6iELdsiB7zmiBfWCeQzBeZp",
  "key37": "AWWp7W1exz3Q88rUmteeiUQ4V7Wft36C4QwS3hZeVyubhsATE9BSYUQU7rme7qZFcawzQNGgXNNchrEYbBtdEup"
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
