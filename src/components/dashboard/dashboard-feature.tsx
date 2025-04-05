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
    "5r6AHcvkFVviZdhvWoDL3wTa75TUEpV1J33vVcqijt8u9VTjvxgrmMhQdR4VCF5oBpYsBk1kdroDpeCRQvxn6wWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BuPj6mQfJSWkX8o1s1gRUT3ECoEm4u9f8m2spVUic8ZUSoXUgjbS1jHFviZ5eH1PKk8aEoMEeCR7YjnrkVDGTbw",
  "key1": "28snj4jtW2xZHsxoAqvSVjfcW9ZGz19hvDYxD135JALWnVQ2uiizfbWo1LyP5zBx1eedoZi7v6o6rPaWJp5uzoeU",
  "key2": "5yZq37LdNiCaVCP3vr1d559AvttPYDnyxT59UvL3SjZkWSv9YKAbgqtQQugExwd86Y4g2BfXB2q3jdtVMwJBeiRr",
  "key3": "25G9ncLnhYiLAr6YyNKTtx8fow7iemyMBHqg22Wg5SCZ34oFNeZV3jexPdhBCvtiWdYJ5ozFcgqD7kY2AjnWGtwC",
  "key4": "2ovZFroF79prP8q8iFFJd2FqHe1NTcPs9vSz1ETGXjzzBnsWGPhNE2iDgvrVnKTr8oiggTBRCaD4aC9wLbw3n6eZ",
  "key5": "5hFCbJsmScT8VCgBKeYYwx9y3dfvfMaqQAtxf2ujJDmJTrp164GmDTDEFZqRFwNkGAyJYCDaWDSJ7A944322HEzj",
  "key6": "2WBBXBuiYd54dahq2LiAbjGeW6qkGKQWaEdgcUtfdmFvuKKuLxLQFvTbPPTqES9tMCtwkKgdeKTJ3JPrnvmJ5Wp8",
  "key7": "4weuXvgSowmRJdseooRdYQA2iiLTQD3YKrdT5m4r8v3J9wqw1bsQwGc7LiuPGPwqPv6Xccb7qA3ES3Cbp29GYpby",
  "key8": "3DGqmF8Hu5CVmPAsow1ToTo2XxowcKdtSYwhV5kS1oGwZdDhtEq6su75Fy2y1arYAh91nDKLm7ZCwatWxJqjox1e",
  "key9": "UYmwwNzbkPJyKzt42D99mAArbJspjD6Qyk41ZBJohc2WxzWcYn1diaDbVg9xTKpryN8LHeJpCtVdzYR8twXXvxZ",
  "key10": "2BHHPToDtLqKHFmXizU4rY6X7eosEcMDhrRoLDb2WyFtN8RpcFRkfK2n5h5ghDNRmHBsiUDe6ktuPLpa6AgTWbvr",
  "key11": "3oe42RgsqyARaLYcqQ3cPaw9yyUMuAW4tsoxsAJZzaJisDiL421NrBcf7eMt39zTw4XQh5vr2vbndJGBHU76DnQ4",
  "key12": "2Mh8MB3dNfcC4T9NQZUG4suKECuyex5cs3RCeDDz2xJ5FE69c4PGKLYnEeTfBY9AbPCNXL64RQxBVZqaaFXhDtcN",
  "key13": "E2h4wAs7sHAKgWZ9RJsE4yVhkwPMQ9PrHtXtn9qJ1SZhYEudCeaGsuYdfemk9qfvuXsHwkx4Pqs4iDs7GkKpVUx",
  "key14": "5EZGQwAKbVzeuWeVAVSCH7s8hjJ7WhuBmC3SurVPS8zMsk3xKqxdobveY3FFFjBesFWNQSLp32o55jTUVkkZE62v",
  "key15": "5qxwJVEDnxrtbEydgCnw43EAwqapz9cijvNWeFZtuEbf4eczoTzBWvRChpWA8eAzHQ7YkY2aYQKCqcsb8gkY2CUH",
  "key16": "58zsvdtd8x5jtCFcdj9Su2X7SBt5Co6ZcbCi6u7AGJSiUNueUZMZ2gFUGeViXQYEzzzD9CYdTBs7j4p4574Bm7bw",
  "key17": "k2L2tTHzxDrMBiWs2WM726vWZXqcAqDTwA7Qrjzu7ZEvb9M3nWuFiy3YDyBhBjqqyCV5n9T3pQJ5sNR135BvJ16",
  "key18": "2KDacCSzMDJGaz4vJXi86AbKyoC9arXA8LX2XTE49MgXWevqU8aQxAYSS6jQsvtzAYKbTW5ER2t39N6rWV3hpHPj",
  "key19": "QH3Jw4TcWHH1J7hTcS6x3zmqMueu3xsizDwD2NKhShzCJwtUthBaYs6nveiSWEfZNXC2bxUkMXaDNkQknVtuAwe",
  "key20": "2UroVmsV7VoVNYT8DaTJS6vDNHkZAvNfGZF6iurcPjU9kvzjsAexYsu6hmTTNaTGuqNWejJhuBwZHXMfSXg55iE",
  "key21": "b9bRTfbKiFxtSQmqxWngYbmpVjrbFhX53nsL7EmYMUNTwANCz1uPK38YEg9uxXR3mjdX7exvUN7xTfC9ZoW9vtM",
  "key22": "64xFXkneQNHgGsjWuUax1LVPtZz7z8UiH28x5nMJTwT6b1egmDhNQaY1eyYKMrPAEpRM4Pi5nJFrtNF8QMsvaPFq",
  "key23": "eGGkRpFFLRhVEdmDUsgYqeQiuwbnzs7u3oyatniNWfWwmBaQQACvaULzN3vzQFD9wi44RuZUxii9mfjn78qfCcC",
  "key24": "3izfDM38dgcbPgeWttvD35u1YRnMzifE48xeZ1xLL4dRoQ7vHpBYnq68rcLY4TRDYSxhDfwXSEfpkZq6ghAdzCKF",
  "key25": "3Zk1v6mciwAgxkzYrmke12yEad67xzu8w88E5yqddUYptfeZf5yTwuFdEoHk2qsYbThW1D1TmmCd15p7HQtnig7Y",
  "key26": "RUvZZkUKSMzZLpsJXqPahkNLmvxbF8rvpCRb3UQJGniqo4wmZUiRRo4c9gwkkAsXmtDFdgEaidRnLroQUSSvpDp",
  "key27": "5nWYz7cCLBQjyUMtZmXekLLw2Bf3WCWF6unmZDvbCBHALSutpk3Zz32HYfw5LPkevNRXz4H2TzmmKjt9BLj5CTgW",
  "key28": "5zarco6WtigtcREUR38VspePEy8XZL7febC8xV1e6sdWTjcazPpv6rhcnEyTQjwv6azSuDkfruJFcN5B59VrDNNB",
  "key29": "2eVWj16KsqXRShFWbVY7yuLNYMLnWhu8nXvtFiKNi8ZE3cy6jijyWFtgYiYiJGXkXmF4EDqpJ96cUUFZiwayxXiu",
  "key30": "525hmPjuMTh5NTAbMbtR8wGGmHaTAwdHXkWYs3cTzs7xNCzzWpMuprSDxVs48NDyxLddLww7PouKgPxL8CfokC9E",
  "key31": "5FaPx9Mki17EE3DkFgjSPJXpjS5qNfsThkLSYEubEJD8qss3ZxL5kX9kuDzHazHuVQYiVfvXRUfAZ6Xs9C598MfK",
  "key32": "9P4feAVjvJB6UskFhe9U3PqKPvQ2QrxgnnYGG6Aom5gv3v9yFqqb3ZZpUDsaR3xMhNpwhRq64ZJuLTUHN3aFZFS",
  "key33": "4HSwvyFFjpRRWrh3D3JWxBU7XkPfbvSRP3MPYFrx4Lm6Nbo3Gmemxh1G3qNwHwXFJ8tDFE9qb1LDMtmk5ZAFEHj3",
  "key34": "4yJydWH8j7bC7uqDin7iWbY5AJRvndSw5W4DgV3Koweuh85tsCvHxYE6qAGPzpS5Q3w6i7Gx27gFZPdcug1PW53u",
  "key35": "LiGW9gHmrmcSUdLo43UbDqT2Fq8ixyKNqJReJy9j6w7uV13rDNe8EBVpwALsL9ypR4ABjnUen2Bin4xfagjbotS",
  "key36": "4wyiox2wpyuYEjKHPQuADdrFvFAuaZ87xXdxfcfQgKrCLNonvZmiPvjxkYDW8nmQ37rrEGXQE6MotgYm9vtat83C",
  "key37": "1zyYWMYZQzqJpy64mmSpAmUVRzNZxUd39pdJkGchTGD92EXohCtspEAKJyrhEuyVEY73VdhZDFqhrJAsKvpgsAX",
  "key38": "g7Sqe7aL52ZsUEnFoLYpS8k8KhKaHmUvJrC1npQMCYT79v5s1d3KKT1ZDCb73FfuSWbudAgsNLvHj3Kzkpo7kp6",
  "key39": "sEYUau6oNzkXYtWSi3aGZ3nfyZZGFKQUTpcjy5kFvTCpJb9WU1oveDTxzrNT7NJdj2dbz3Xvu5rqDxhYx953tkS",
  "key40": "gbXCcXj2UQUxhiRwnGfWFemWEfsKpSUmwH99w15yeyUwv7UWyNTkkLkXbffagY7y56qACz41t5Z6wMxh7ZTenk8",
  "key41": "LDFy1idXxufnrHPAvv4qDigmZALeenJ42GnGPEr5zLUeLWLvcugU1LtYA4VnkXuL3BHUQguLGjstij4ULgH1tu4",
  "key42": "2UbPjfhZyG5LhBdsYsT5JoUKTjT3e4MwSLn1RDPBjX3Xh3dACVJN9MoEzYmzWdyfnCnYTyofYYnqbr7eeK54XeNj",
  "key43": "2HvzFon55SErsvrDXXSvPMkmxVuSacx9j2pBPWxwFjGgaFWs77uF7iDTdDHB36P4SvLs1D9S9TYCfjK4TBgmWatz",
  "key44": "2b4ZHcpsQxXj48HE23XqpKCSLF5BeKYQ23vfZAVRcrfqGakQd7UBf48WdEuPc1kt5CPonfvNccA3yyv9X7ZsFC6M",
  "key45": "2QeknNf1TchTZeTXXXoPmbJvDRAudtyoeHNjZwvFa8KUHaJGUFRPcv9AwwLB1HnPfWKFpAWsSVc76xMFJFdMZ27A"
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
