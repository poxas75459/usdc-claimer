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
    "1mwaXZjKiihcmy7kYPuafET3iRrthQSQFyC3jVb7MN55tQmpZ2pWu5VUwqKAei3NnpF14U575ybjh2tNuEcCwet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R1X1fYTUVUeeLbcbpMo21dG94BxiZfW9dyTL7rk9tMirHAahG4YkZkxVqAvCoKFgR96AMCa1Cp1kAEo4dMtEZCZ",
  "key1": "toBzgTY2igQrWzyMWUC2dm4JCQtXxeYoEsFFJqbQiG3E2oTWrfraHvFzFRZepwFvShE79ds8Cd4YoG6Umxmk1Lw",
  "key2": "2rxQgBx4dmTJ5uU8eG4DibxmYXw8ijpRVsqrtDohJ4Z8sFkydjr8hsnG3ZrTBrXtqDxBt7XF6Wkpzt2pRKGNJ31Q",
  "key3": "5zGcEydqcEtoq1sHZC5oEwXX7QZ6Mw9xdGxNFzLFbR51Si6wyBToNPYBTURgtcFeboaffxn7QGVNPtj1R8ZLJ9Cp",
  "key4": "UhEcWHo9KNqnrceUtVv89rbcAMN6nov37CpWGphuZdK7nBzxxSkBHQQFo2HqTEwB1aqu4P6qe7rBSfH7Rj7JRWj",
  "key5": "5i26GDYUoXToBZieURNa6dRCycHJevNPBLcKpMnjX2cDkM7EwU87FKt5nfnHwoyUWJyiYPWtYEVQPqLP35uyPQ2Y",
  "key6": "2LTs2zcdkMnENo36LAngFJwxSEkEcDqPnrHsDQBHaDvTmRYk4XJieBo5RDvu4oVb9KGnDAnPRo5qesMagXA8vBty",
  "key7": "3PFdESCicTM3z5ELmPbzT6T9Y1adQ3oAvLuFyTV5A6fER1daRUdcK6YRnFNgZ8YZ7bt3XYLcxJ6jpbxW5Qd3GLd8",
  "key8": "2QjTEaMpZXDLccCL8RZRg4qkncT3FXN79CXpq9oYaKSqqLJxjmZ1rM1S6hKopewBgevjs2SEsR2uq4TNX3v46rMD",
  "key9": "4e9jQPTqk8z5e43H49oUQPrq6Y94HFQbbhnCsFZHtUDHN2JsbnQJtBi2nHCM1QJyLJgm1QyZBWtCLCNh12zKgZeo",
  "key10": "2FfE5WNj1fyEkippCMmgLUyAyYq27bcCpvWSMhy2Mp8gZp1GagdAWC4hFuo3cVV9ZDcQSyffPzZvfj4Nt8v6WvyL",
  "key11": "aZeYYtUrokPy9sGp3bU4twRyRzs78U3FAMkcJ2t4JeGxfFtQzEGWLfRonEAFdNmgVoiD1cHQpihxBgc4jQjXBzV",
  "key12": "3CFXRqGx4Fq59PfpiT2pZVYZaw6JWFrPfBfvScqQyJnJ92RiHAzbLBxch1iDkSfaXbX7jNfPJmB1ed7JgmMRfv2K",
  "key13": "5WdbSccLj82vwR242BiumKLdA3P78AXibqNqVWHSFPgV6rXZWHm1F5kRUvY6FL11Vyk6mLQWUuK52TYYMmbZQduD",
  "key14": "HDE6WkBvLGhM3UUrTEG6tyZ6w9pNsiomu84FwxXm8shvbNZnWQBjqEAAckthtW5oVN536uL5EyZuV2aonevfLro",
  "key15": "gDHmE5oVnzxHSi9yk5TWA1dckgVwJj3BAqVmtDA5bXC1UDzsMSmYMiHeEPwkt4jRBr3oJynipcneuSqk64dVHxH",
  "key16": "3wkHREt68Ufom35HtXSfNiBLAKkauNGG2nJ2c9RxCVYkXpP8FMiGmsvRSi3w4NgHJeYsGr7jVmrCS4YKbYoKZiHk",
  "key17": "36mnmAbut7oZGVDYwik9EbwcJiWmnYsNwYpyJcjoZSQFtcb5WoM9PLe8Qgf5Ccuaqa6tVviShBwL8jpUgFVdmrhS",
  "key18": "2tu2F4dBX1JrRyyT7gWdrNW3RzFxWXRzr1NVNx4AD2okgj7UphU65prUzPpes5vrfisz4teBAh6vSZuEXFbrXNCH",
  "key19": "3VdeoR5uSEZpfHbDkwdFXtTiJS7uB1cXwdqg3WkdcNsptd9G1HF1Um2ti14jARJjgRDBiavUzKka8zegxqWF3DXp",
  "key20": "3Si1EdxkftEs6qh7L7kGrBbydycYAP7W4BAknyqyFMTNRtPZL5FFLuDftUMqLfhHBySDXX43UJJC9zgzVsW2T1Je",
  "key21": "59x7SWtLFRtZmXizFc8xFJvRt9n5u349ZLzpgrSQKvqgEGDCPmkNwo8EV4gTTmTLsFSeqMGkGdsdu3wxRP69XVxn",
  "key22": "2Yx1zhGkRMbCeTLW56p13zUcxJgWCLzENDqYktw9TyHkApLox3zGiGynup4MgLmTd1L95Kt263rX3eW1F38taCdE",
  "key23": "tSiqKtAVzRry1R6D3PaLueNHQG3yQf98Vawiw5HyC1E5xjs3BmnE3rWmgSXkNpUmAPdAWkFVn6YwfBT24BotqEC",
  "key24": "65RZqWsQMh7patULt4uwato2CLtJLTnD3wb8wwx8chafkKKa9TPRsQezPPtgMEcksipibmMUGywErnjahi5zvY5n",
  "key25": "65HLBimsd3FEMzJDzufXa37uyVYiuQgMDcMNwZiqUeX6qb3h1Pvi5YoVKaiM7Fi2Ao2f1DNUm3qYMLbPP1kNH1K5",
  "key26": "51HtgqFBGLd4ScXuDEgVJWTgfaKx3NwS2J7dtjc1VqVrtsLjqLZHmggKrc6TwukU3ttDeAw1t6NR7iFzsRZvKh32",
  "key27": "2d64KpeEyNXPwfLVMKZsSqMfeSVJUw2Jx1w29AUPWRuyzbtx3TUnCWTqrPoYbbf1zmAXpEVnaMJnH9xzxdPyEL43",
  "key28": "5KmLDwbBcVgThdNdMnUUzuse9n4fjP5hmURBL7m8uRdQTYYYqhmK6aNMkz7E2k57uYYKNFeC3v1Spcgbg1M2uyp9",
  "key29": "JSU8kSfnGr3cK94DkRjQy6kdDuFw8GiGRAh2F53EssN6XjckSF8SfyHfgUiY7Nxq1VBNZsNxTS2U1KbxywmGbtp",
  "key30": "3WqqNZzgKnsCVV2smvoZrABkBftZejNFWsDAf6B6c3K2RtPs48P6fVN6aTakpdCUAZGewNtfddDSY268bvM5Uzyy",
  "key31": "R8Kgr371wa8m4xbcn45gQzvwGQd2xQT73AdXpbMmaDgppCPNtpjYJLTAiJ5vhxsoewDShQJfYQdrEBZoXkcVynG"
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
