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
    "3W6PWseZt2MfnBDC2Rho1PoK7vbAaMHvBsHzyNBMsqw6N1wpL7UmB3BpYGGqFmt9WAtCKsdDvrURjpU7JDYde5Wy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JSsFnJ2YdsqxzMc5XDUjLzk5D5fyL5zcK8ZDGVggQrQL8g9HUu7ByQa2t3EYQ7hWYEN41VbHAmCVGVVwmwFk47k",
  "key1": "2AyX91wkNDavxieygbED37pmGJGtYfDcAfnawhtPxEVnY652RxnS7PE3k5Nw21ktndQyBaSGWR4h7kxMA2Q8neHn",
  "key2": "1UetGZ85kPrHZ5BXdt8CKgkBiTSsKvV85wwQFenPZ9L2PzKxhECgcpt7ULtthGJh7B1hEGrDBSg83pXmRgwLeMm",
  "key3": "3jaA46w2GTPTQfb1hgD9dWb9JCSbhdQXMx2KJ3XmeXXCqDdFynGEbHFLuZZ6L3S5bsrfy6XJsb2GiBA98e7sEnxY",
  "key4": "4GPgEXN1ULWtSBWfobzpRJLsJuazD2Z8ryMCX8RfcdJghnh5p4P3DnniKmHBmXSFbGMFUF1VyDaTMFyPgzgirHHq",
  "key5": "5kapm23GmZbULBx2BYw7YbTVVevKgKBNFuUVTRac5MprsTSnHVkgSBRXb6fDa7dpJFfpHy9uoMAAHkKZDr1NjKxY",
  "key6": "37R5VDEDepUm2jj7UgZp4NFTnmWxsHw8XwrBh7pixfvXyaZJ8i6a1unUD7KeidUe6YtPEiXmZVzxiQhwnQf3ABoK",
  "key7": "W4t6wjFJaGATh6p45uxfqj5anhFZZQFcc9PVDyGJYWW5DUwj8k9SspMsiQep8ta3uG1qdvEswZv81mNMmfy4c3J",
  "key8": "5tHJZoVf7aRs6ZtxTC3TSiUxjKK3srZX1VRpvdS3QQcFsDYPEaz6TdMFQMAnoScHm5JhjF2agAvuqNvLv3YPeQ88",
  "key9": "2LgvFGGhhgddjpZAhS1pds3FyK3NP4pcZqXyy4iiZYH4XCBPnNhR8KG5Vs161NVbtECuMZEH6hkhp9YBHj2gKkNZ",
  "key10": "9nXcdraYP3Bw3SZd6jvgFAacdQwZYGbQ5KUCJx9cVEb5JYaH5QvVuuYSQT2RjSzSjeCxExdQKXnHDgGaaYidg5J",
  "key11": "3rCT7ptDTRiWuvYSWCE7fSmQQCL1oiNdaKiUuN6FcZkDS4J63XBpYdKRhx6LTyJMHTPaP5mmopT4NdniQ1NDDf4z",
  "key12": "5omikgnBcBeinUGSxp2fDNpTxXVRBm5dTiuBpbqTqqmR3q6mYdDrp3x97nXBY6MufqQEWh9NJfBWmcN7PjTGg8eY",
  "key13": "xBJN56M4p9x2hUSNcCQhzHdGHtYmyntGTuLsZyRj4ftgvvgzNYN1GUz4KbrPzFvvug3Pe81fKANtF3QKhEiRTrp",
  "key14": "212fPX9UJXNhdtibQmLE82E18i1tRW4HzUh25s8NKu7J7fxzouRiTdyMa52pb4WxPu1gNNnFojpqBK46j5WWfKxE",
  "key15": "4DJjCkPwjfVstqAN7N6wyjQ7PL7cCKsW6JmqELaBKBsLcujLjV8aRYwM33ZU2e1wVzwRPAS7n2A1zY9mybNr7GBD",
  "key16": "5XRZoQtuc6Bh8CuzA37cUbcWGedUkQkGmeD7tZJQD2FSS74JCP9uer9hkTZLtFtF9DrfsRFhb4AKZZudKDeDEpZN",
  "key17": "5pYGW6xnZDRs9M9S68HXKWkyMwa6NoqAoLbsCLSaH3CL8k1TgXGkFWUzCK1UT5WeyS4sLN7UDf4DwRTMYkZ6MVXa",
  "key18": "2VgMCc5Mcxh6JCbTEtqb95FcsSCpFsCZeCZTXmnwhSd55N98uVJ3JVbAkhfQSPweWFTcPi9VegAP6sczSE9aasnN",
  "key19": "RJV9wv5YeurY5Df9cq3Dck8neiiX5eCP9A9ugtTaT1bu6rZRc26wqcmAcAn1FCe6j1MvKvjKSUtgx1gTJMGo1Th",
  "key20": "5dLgeHBzKHHxtiQ3beqMHsRohxrKH1bP9Fk75fVCFa1KWLFbbc7ZZ4pDJSWbcduW9wzjQGFxiP42Z4LaCC5rdnvG",
  "key21": "474jdmNxSp4JhoAmk37rxmNs3bsR4rSbvSyaHkCQRaVKmdu2n1oPj7B8Mp2151fFEB5rsh4FcyWauhqu8co4XwFu",
  "key22": "3y89F4hk1fB2cLcEbAdmoQFETc3zH94TXYMe2pCyHgHDV67kTrmMbYLKMF6sDPEpJbWpd9RBJnd9phyHTBJYzMHZ",
  "key23": "n8eXfkYAjhNAiizZqMZRDywG3hXeGdZo6YMY7PYnNxtWxUL4V1uWgiBnXvqhAf9gHxQyZpWauAUEs1DFKVAfQEv",
  "key24": "3YNNTgCtZw74h9jp73vjcZ81Gffyq5J4TYYC2DgHYLvXBMA6uAe9xGg5jFpQSmSw8wWKCAnTTFfpk4WoJmZbbQd8",
  "key25": "5mnKtm4ELgptZTqkNsrUtHuv2wFQAmwpCLDQFLpiQ7YDELxG8tj33tE689xhz7Np1W4RFNkFMcjLYkdxjSmohgD8",
  "key26": "2iQ46WbZfTSCjF8HrWzYfSSyjj5Jnwv7DbEHCb8DxDkB7jj7k3ZXDYcHn7BeuvbNPR88qEwvr6VGPAkb2v5VJ3Yf",
  "key27": "4fxwDXReQsj3uvUmWrhf53wjd1g1kp1HyrtFjQjfqkD5k1i9MQJnN56BVAxCiMRGpqtBqVc6mVfB5aUcrcWTUsPJ",
  "key28": "5SJHJnAghngaKnxiaBwvH7AkrWnk5SExdDWyfgkftDtaoMV46sFXY3ANqwoyLytRuJAFxYTEggoRbq1UJWDYXg4r",
  "key29": "4wEddUQ19wCZaLCc54cySH8kydbaVaqJdzxWbhwTJzZq3hY2qdacuPG9QTp1L3sRYa5aV1YMrZ6d4JEChsTYddwM",
  "key30": "4utxptZDpWjxSeDKQAJBJdrhcDA7DENqK8s6LLNqTb5CLeHRqRVcBj5n433AitfbVNRTFsTHxAkJkTUzcWMEbYpP",
  "key31": "4eTN3WPoVTA4Xz4KGfsJacvGAxmkbA3QMqYkKPPunQe8smBBzaintnJE5NbyQ3e6EaATgtHysUzucEtihJHBmjm7",
  "key32": "2Y1aPrnyyBgGWxgzzy5eiSmKDZkXTtHhMRVLT5KdE1jLxeaJBqAR2MFvnRSMYHL3REFJPMDRh4g7sNNbF4ZNACxK",
  "key33": "4nue7pvn9BH1GMFzUEkueezahNXkggr59hYRYBABZHZ17SHttybZmokjfhjiq1kyn2JFZ4fUUAkoKejReCar25Xv",
  "key34": "3BQXqTiTccH6qjcgBtXPTJYC1W3urbtbMAh6FuG3RUk8e5jGsMx2Np3bWHrTeWmWzY8fGLSHjTUjeKcUGQZGkWpc",
  "key35": "3oispTq3mZz3mEa56B5kcqbUr6RQjAFxt5BkEXmJu9vP2cAg29afDUfPMcUCBSTGsjvhnrDsTemKxZHs9SNh7dfx",
  "key36": "5siZZPQnmpCYXuQvkt8hsdnzkWnzFd1zUV6j4i5X1UJVi1RbqojNvAZEUBzVWsaRKE3Sgv1ffcPo1knULfsyC3qz",
  "key37": "4fXpScLfj73HBGZ5kXYiCp8tm94dz6Jv1VFvobUjAQSeEt2mtHK8w4YWKHNPEDBcErJBjqqZQJAquTn9UtcMSMgd",
  "key38": "4LKWKWWc8o81Uvf9sCQot3pJUiJU4o4XyuhZBJnJ823Sb6jshnR4aQxXx9fFha9HpVKh2K8PL11KaSiZtM3sWU3i",
  "key39": "62ux6vWK9SsPe5oVMfpEudJqMbov9GusvPzVBmpVJy7z76QLS2BatqT2dWqSMuPw615EVDbLmJ9RTFrbQymSy4xU",
  "key40": "4jvP5uNx2fPTKVepTxgKyekw9CfHjjAutf1uWeauS7ByeNUxomPS3iPVZxD83gXsntwEZktzd3okasaYsiu4ZuVo",
  "key41": "bWsg3V4b6v9ed7oZ2g2xsBfJ5X1oYzodLA3jTv3V1DUN7uT1FVCUuzqfatfeYFfR7q4z7VCFt1oPpZhb4yLLAmm",
  "key42": "wPPgnYDMJbCNrVkAv8eRUC8S5LYmBWdR6sL7VdHmy4bh63rmVeMxiisFrePWgDJErAuo7WfWCrsLaoF2Y1wrrMr",
  "key43": "3n9EW7qDvggGfxFSakDKLzbE9MEUTatbe7PQgtMdKurbCtisnjF2ZQ7mQQynJv5N9m7BwwgwDZ6Xy9UJNpX5deLv",
  "key44": "4bYmgr3TNpHH8a755zRBoYu1ozLtXAcY5JqqezwYSY3WB9HgiGRoDfEzPk4oeLj2bR3QMBW4fTM67DTDLVuTPwXF",
  "key45": "4jwTq9WmNqE4rMy3ugSNS575wjrURzcri44qX6At7AWSBgTKFe6F5WaPwAHSRhrPHqBGEbYAqMM7fVcTJLo2q1Hi",
  "key46": "foYpWHMouoFgm8Zho8B4XP7C9rmQWm6qvoXMcBTu2A7nhmG2scEoJr5yVSPSkMkJeMevNkEcaoi8zaKozvBNyRC",
  "key47": "5ynNJqdfHgiqZpo4MpXDdnPDCnJqRv2ACWhvQnWVm81ihxfVL2ubGk281W8Cx52th5LyCBLz3dnuPy4cTiXNZBX3",
  "key48": "3pPGb14GwwCtgjxPNRxADGHgCruXZ5FGL5vKRitS53Cc8TbM6ME76UWSf36z36CpNv5jp2CtCfudXeLjncGXGf8j",
  "key49": "2PxXY91y2WopUkm852QGFkfQzrmSqCzotdwdnDHW9N7yhsLY6dHdL6auzgj8s5Fv3m3dLN2F7MqxhKSWK1ewdJLM"
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
