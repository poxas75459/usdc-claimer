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
    "aGC6YVXM5ag184zg39uuHrS6TbkgYBVAD3zTpgThKGgdoA3pRUwDWgo6P2hF6hhN2mpiNv5U8mffmwoernpBL81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ln99xXfVT1Ya5XWcHkxVvgneMAuzm14j2CK4NGNcwXoA3ZNhx3D9qApQgFGo2voXy8dEx2svsbC3ye9CQC8m8jw",
  "key1": "3TFaEUUdP7RLuDwHg3xtf298yvHSKPgxV6SFmmf17usV1kJiNztebzZYGmvXyowMdDJJ1hQK9zMjWtJp1WNQpJaQ",
  "key2": "4XuerCERkmsgQWsuFdEhdCZ6gRYNFXcY2qNX37ovbzi8Zdcfn6aYEBncz9YAeUQwVwpvqkBd6WmoovcBgwLRNZz3",
  "key3": "5npaM5QhVLbuTnRJufKsGtFfDiQsZNcpHWHKf1LDqfLKjQTeCTw8p8QcqVEk9zjowwH8DTAXP9byQLUyWMzBZXyU",
  "key4": "e1nH3d6CfpcNBtz77byBSNiexGbgL6ADzJ3zy6eDXbKXX9bAuLTWfYBhgpKMvpYsatiVeWZnkw7L3axd6qkvoTc",
  "key5": "3o6uHBXpcWSMcPPRCDPrVnxtntJZqSKPVaVdJSxt5aDNtVBEtrygXWiLdCFE399vmdhhmGGXfDofUQQjmqSHmF23",
  "key6": "4jJMzxfmfyDqE6y7WbUuQFUvnw9xQ7ptf13cpaasiigT6pkbA6TnNWpsCtWb1G15pZSsZNCkGhvbPwNmtkDcLTeN",
  "key7": "53wWRDuAMPnMgxdF5biySH7eiwPwCetNpTAjRpd98gixoMrCFSMg9DNsKiRioUp3mt9rQ3QBMUg8VW7V15wJBv7F",
  "key8": "4BnezegjFA62RSxgdg6Tr2sTrQ1Nz6uXCYFsYZN5dQQBRrM5pkeKLgxmayvn6u3Y7V6hTch9iCt8c2MwxXRTo684",
  "key9": "9TmDaRB6J5mmJLHZ9obh7MH3onYgmVeAyWGShgXf9yy5mhDHvn1oWarbsxPg9vPmir5XxYAENmE6As3DrS6GYvK",
  "key10": "5UZH2mJfbphfJdGnHLujmv6fd9jFuYMcrb4U7bVBCKiv66MNzeCcsfXV8gLcCqZEp1iozPcf21vK2EuSNaUa8nLd",
  "key11": "52kf8aSeRUwgpJKuFJXXv8isnJ1PVuFE5XQXuCuZgGnb3RyM1Pq5z6DTSiTMJntvYWTCx1EtFCaENLmQCRMQa87T",
  "key12": "MCV2HhwfXNsUpdLf86MGwaFku7xUe8G8Pz3t7sqrVa1bch46KmwNHnvmrZYte728uA93MMRP2G72DmfR1oXV8Dn",
  "key13": "2GLUuwaTibMSui8h5QAQeaXCBtGYKN62w7KH6fWdtupzKGqjgEK9U6WxZUpZShusXYZubGCamt3h1iAUWf7wzFFs",
  "key14": "22W81sUGPKCaxM9tcRQdEiE7y4cG1Y4zW4bu8Tkp4ZnVZ32qoTSGB7sfe8oYmiYKz9zPJP95T7GNB45fycovN8Rt",
  "key15": "w3jM3QACWaoeoiGYbECPRXEoZDSVsVwaRa8CCW7ENd43VypgbKKtSNUzFZ62kSMt4n3nuDig8oVSmJea4pPnK6G",
  "key16": "2WSENn3y2LbFJurfQDe3dWCM9AHKtU2J6piH6nsQerURjaFmKyPWa7u7pSdh4rgdEDJBvEAjViATLZCrA74tEVih",
  "key17": "4hjcqyMUiAH71gCWeER2dTogJ2dojjWBJntmVNnqFYmKXnuyC9BZdGXdqZkuGeftCw2AFfp6GPmUxsBeTeUHtfnk",
  "key18": "4shS8Ay3crXVCUY5W5HeF38nTf9ozAxiboEUvzK3MsUtN712Xt6CGYJvsqCgGFQpQKCbcTnTmWYws27hnDzSZVn6",
  "key19": "21K5EfS3BoLb3ZCBaBctGfCZhYUozYBDgPW8XoYzh6S1fETDwiSRNMmVMXSTqd3uqCYm4AJitwMvqepi8o4dreoS",
  "key20": "3UyH99DXDMYHTX3BXrxkKuhNGho4FMs9BLcnTaL6wWC8nxWfr6hp9L37Kk2dM9Lbbd5mPPk2U6F8v2n58YEF91vH",
  "key21": "4oSZycxXTFwqCYrrEFHXrQsBw1x4yzhYh4BpqkpW4BE8jL7FGrG4Xyq7TBBvi86ASgKNUHoB2XfMtYEMq3uBrsgk",
  "key22": "3fhGFRkW9JrJ7efN38CginYSH8rU5mT7ApFTXzMLvK8rAwPHEvZXx2KhDFesRBHZM2sb4tkQPLxDikYaJJR1PWzv",
  "key23": "qLGCQGf41q48ekf1xhY2yACBbpojWy4i8dnSPvSqgT4MGT5pSQ3jsvithDBiEMUd112iLc6vzkgtbLgESHv884D",
  "key24": "4XLr9UT2wWhHiFhN9SLB5EXKHbFZvQXUgVYv6CTD4dt4pepyhNAHC2wstTwxxduwGqFysouhUwz5ci4KAbEUF6Wo",
  "key25": "4tEz8YXXYryZsfx7A1wzeULoBeg2BduBn61Ak1mDBd9H1jGyxqy9GRpPWpbmx8LahxnmCtngBfdxs7YHjdV3hmKd",
  "key26": "5BT5g6pW1NFChT1PGFwMmbtSxfn8VPqj3ytmY4fEkYWmb7BimaAEiHjAZ5bRSjjwWvcAiwA83nqnYYSxvqS8rTv4",
  "key27": "4xEZcmURtZjCPSZDtckF7aYrXwBr1vFVzm9nxvTLpUW8wjh5TETNUd7p4UUVgei9nwL8dtf6EZjmK8rQJYts6hGe",
  "key28": "2iDjLpZs9dQo5ggn9YdZXs8uUuWUviavpA4cRe1nCEbXMe6DEfhd3rjY5Lpn1SgkiVFurd5eTiv2aeEFAqcNHXrJ",
  "key29": "28Y4jbRBYKz1ZSX6oV2x1FbFwDtdeazeayYqeWqQCQWGLT9Hd7CoZi9uMUrVCHcmjuvjGQM4EX5Fbsv847LfqSpC",
  "key30": "5ty5uLknStyVTMjyUaPTMkpujfsjn53XzjWGJ6FyQreQUy2zpkA71M7EDTDtM78S7LQRRuQh3ySEJEeAzEakXEse",
  "key31": "3eugeV3bKaFJdYEnDpEbiu6aM6wxmUqsBLmgsc5PMpTAqG6BrYxTWiHPrBBsDsASJAKtaBWhT5K6GjmF3DG1FJRc",
  "key32": "5vK85wqZDvZFs2LXksrwQH1MhHimfaLWLea3xv9LQ4KxWj5knztxcdXKpgTsSEGxuCzWWt3RGPuu5K752U1g2V8T",
  "key33": "3gmk7YL4JFRsfCG64yTmjaPmZfYopXxaTtfmoiq4xVTyiN2BG1PaFh3AbAiJUTbM3fgH3v2V3evP5phJnqH9xf9r",
  "key34": "XTwu5tM8zunoDj2uQMB18jYdTkAukAX2EKRx6rA4rxAwccapd5WPErMjBikuMYUHCiodbCCb5XifXvmFCf6SqzQ",
  "key35": "UMXkkEE1242tbh5Ku5mHq6RugSz2KRbK8XzhKxhSgQaaWwoffWPt3bhQz42iHBBxpnePwT3KGHygbjECGcBNhuf",
  "key36": "2dPLTVe2sCf287KfGbvm76g6NJMkq3Fg2EaavFMEK6vM5Ytfy68r3LarBmnFu57TVgexAnstHEYHnVP2nzGLmZbv",
  "key37": "5wEWka1ZBzfDVycHxvAumfiUPHr8fbzt92WXTYzVhvuzJgRfhpB1b5PuevnJe8tp6GzPukekpa4PvWgK2Guk2fhA",
  "key38": "3jZxtWFz7omL1WVXjWx7JQxpmQsFjtTepVSwNaT5B8v3kUa96HfWvX3Kbg7ZqKdmPfJhPQUaEDUMpG4rfAFQDAAW",
  "key39": "3ZMcQwEuGra1wtpq8W4AZtomfAdj3jpyktc4oNowJBE1ngMyr6FsQPw38UfJ4oLxVHhdv8qQdWne2LMoUZniEnM7",
  "key40": "53o3RGq5SiQwPzTs77omLqnSm1irDCjWXzZ669sYHpeYVNPNccEnapFuYfFHAETVJj9dyDy3rJLrnphTfpe3FV9x",
  "key41": "2mzewoqzmXW4fvkwB2ngrhe6Qa2gcfNPqAmPTTAdG6wfttgKCDVHjnxwnyoyFk2xijrqJVr5bKXqeCR9ZTd5Qsh3",
  "key42": "5CkyuqHFAn112sauhz2jpgdxoAaBZSq5P5NHwG31mNZfH1ZfyL2ntSxd3qQDpSC5GHngevWwrkSwWvB3rDEjp5Z5",
  "key43": "4YiBPqPxVPQtENmCU3A7SrBtbjhxhJMUriY6ZMzwnwTHd2AzDCsFBin1qJA5NcEK6q4f9r1a6z6MXU8PXLgxTdkc",
  "key44": "2Gf8V8ZNcYsAb7B4EtbQ3B9YJ4UEippsUj7UUMNAe56Fd1NBgc5biVLMdy6G116ukLv3pabf4fSt5cJc8Y8BSrWn"
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
