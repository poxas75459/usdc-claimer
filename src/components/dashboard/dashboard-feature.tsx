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
    "5Keifg2FVAVDTVBLyGK8FmEWQq7A982FmKSjcJKTAAxLuVdCL73yjR6wEe83CCtB9fkPxXyT8Xj1dUyz1hnrfnvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dpHeJVFGNSUM2dn385CZFzL6r7NyAUCao1e5XFrkbfRUEb5889WSph787xjqEXgPuVyERA9F6Jv7pTyPkQN9aL8",
  "key1": "3LPybazgozTL1LLesbHy62waPz1KQEE2RAp76rvusynCEwxNUJbKBvZEPXzyC6XSQufpxrFfC4H2eSkCCvbGaVYs",
  "key2": "2UMz4r9yxyUDZoG3BYB4RW7gyczLYFSrF5F4GnjJi34Mjomto6E89ZyHhe6XRHjD2RnW91qoZEJJjpSLW4GRqz1H",
  "key3": "2QNx1pKkoo1rVEC6kbkhFTAFwTZdEUykJv4jCzEjHM9nTYzDMT9mi6XaSqdUJS9cvGJ6kpLvPSn8Y7mK3gpbQ1vh",
  "key4": "47362zjxK1DqxrKgvXNxqP4CL5XvByXzgSnbuQCq67zz2xnUj4CVyERywjtygN9kZN8k97rm4L94PDJTFJeZhmyf",
  "key5": "SJqa7Rr2i8m1H5zLGyu8V5LEN9TmsUUdxRD69uFCsFPzEC2scNrAEf8xbJnDWMrdJ83qiPBywfkT9P1Ry7zTUyt",
  "key6": "431kppMDC5QsTnF1MAXejN1HLF9jnvpyorSxGcAnZa4QuDosbW2DS9Gj6nxX5eXSZpi1vsgKxyWkP9W72ds5jKSz",
  "key7": "67ieTfTXikkhe75VzAXAz4jD3M39Hx5gPk1XqVuXuiZSYXsp4byitW33xN21dt998mWkPGiurAzkLqjCo2fmg5D4",
  "key8": "489KzNXnbVkgDVgYMuWW3zXV3LUNM4mZnZ6YUKzFDTpJRN3otf3RWZqDr823N3gmZ6dwDyd5sAkustZxrtRgbSjd",
  "key9": "2Ma9Eg46S344nkHB2rXyNysZUx3oi4vSqMjYW4qW8PYEMnfpi4GZ1UV6aZtk3S7jbQoP3zc9deWn3cPpzNtpYruq",
  "key10": "2U5RheFmKu1VhZYoLF8Cyb7x2WSQmpPPmj8ae5nj45Sa1RY7FnBCHNpyyQkY3PpibRSmfLrxeDC4FdLpfggFhGii",
  "key11": "3myotzbua98uQqj4Hj5yuZqSxExPNyng3jrKnAedd1UyqMqXVq9XHsKBhyWq7UwucQTbcGuP1veD82qZo9oxATSu",
  "key12": "5douPMU69fQVRH3BgGGsWSk9r2pFXLBiMXGYFYypgFuLHpEzq9ssaewm5y25fwwWxJF7yEgMLocXHBpAk76WkPN1",
  "key13": "1M8K4j2yLvEoAVB8WbwjXVZu1iNeBmuFssk4AHq5ciS5dzeaFf2iTJrAvLVQWtoZB54UKrVeqs8bWA3xdvogmGQ",
  "key14": "43eETUASsDAo5jB8bwDHLQcjL8D3HrSJmSWnDnALn4jJYyDoKYeLQ8BZNoQTYg3pWdVELPhn2oQq2w8qH8ZZD9tn",
  "key15": "2d7ZJLFzqkoUZQ6afEt4AHS1Bi5Za2yv3TniEAuCA9xvJsvT5qT9JRC5HzFsbA44aZbKGoo7MVMMm4X4QFjZRTW2",
  "key16": "S7f1yKozmPeQ6Jp1wwyT3Pf76yFHpsiUpdGz97ztPqxYxmo2t3Pf5Ytq6TxM9kKoy6Bab2CHZDcg6hVUsHwhQut",
  "key17": "5WHm1fN3hn3q3hChJRfQB2f8BF2iVbtBN9oG9rZ1kLRwRFivBwkVf5hhgPiWJFyarPdrDY3tUzYHjir5yUv33cvS",
  "key18": "4j5rxjABnqiqQPJSW4e2CCqQKx7V9T2jsVgFo1Kp5WG5J5Kg6CQFofqkgTJFZWqe3wG5bbWSK6QwGamQSYMxdTfk",
  "key19": "kDEdcWVgFLp16QikaQb2Xjmr63aGqhpuenKRgx9DnL9rbGaM8NBJEmZ6dcxJrEW6EU1nS5KNJDhag3PkvmKqZ8C",
  "key20": "3dsytZWaEjmeR1qEuScUyGReiiMb36eTjgRbfqKLaZr394wfQ3AJvbWxfDHafQRamuGakxkUBSLtwJLUceSBSedp",
  "key21": "3AK17c7GS3Wy72nA9tKhLFvZ6E5tCTWsvtVW3W6h3jbiXH64iJDjb6xk6fMaz87oWLQwqtwHpxf6461GPQ6hfDrL",
  "key22": "3tyfjsjKqyzFhhNXg7FwFKjToi8vKgcAGDNGFuGYWfRCT6SdTsmgVS9dRPQkMqFqzMYUb9kQEKHR1oJ5GCyEUDty",
  "key23": "4oCfyKjND89DXeiyKJYUGLhnGAAQwLUSUR2Q6dLLKcXhbGX83sVQwES41iDAYwGrJuguBnGYoBMK94XqVpErwaax",
  "key24": "5j9CtyZfmyEQqYVWKMeB15LHPFrGFzTFGhZwLJkLBTALmdjKZfAPSwmuBGHUZMhMcuvyQDR6swtvUndBnU4hor1q",
  "key25": "oNRPppDfMHonz6TiD967SnowWS6tJW8JM13gSC9YUnwsSvQGL7jzaEEguEjATMMzGFjW5ovP7tfGiryjmqLUbNc",
  "key26": "c8i77fGBfsf9ZYv1nT99H8DVXXdvs7XmUEh5KgNKYYSghXGHVQPHCYwuW5hnHi2mX3RQwZ1kZghbJ88ss5hL6Tv",
  "key27": "3xRxA4P9utpU5dTeNRmvW39vrgVxwCPDHosT4Tp7xkywxTpgMEBoGRSikKBdAMeYdtKVR4N37kESe31XKwPm6pbe",
  "key28": "5pkT8e8ygNGdTE6kpKSXVHJPJMXAUJjsJ4ERhaiSETpUuSatHkGwkBX4kqjPWQDuAhzfvCTLy85S5sLHc7TjgbPc",
  "key29": "9r2JJqVvt2f3UH8UwJ4jPPsPAHV9Rn1u9kMLvVhpRSWtE12M199LNutEhLJyVt467JeGFpBdsrTKZUj1cs8JpiF",
  "key30": "Czxoz8eH6S276TGQ8GtvqceGfqvwXZfeceb6RrCWN7TisgDWxufyEyuDj163iFrTFhojcWTdhrEXLGEgPuMASUS",
  "key31": "5qZa7fpLeTXFPa9SRNJvWZiHZWu3UYx6bB7eiwZM5RdKShKoEbv4pPXbKHrA5UQyMcvKVfm2cXHEoUcV58Kebqz6",
  "key32": "3nj9fbsEkKKzH1mHpU5aGGuoTF3iBvfMqX7EZQE3KFeqd9zFbfVBTySfoGQQVjuGGonBQXB9UGF3MTudXPY897Rc",
  "key33": "5LGAjrZJqY6yHF7GL6kswJ1hbAWhGDCUf8dYi767VVrmKeau2JL42WnSULuuCNbcZxnwih1yd2W6tacducNF8w9j",
  "key34": "2zM7suGs7SJjt7rpfq6jSbdjKcrV84G5Qh59fteSyqccpECXiZNc9U3dcAshKeQBWDFcuUbrDCtoqdK1zh6Ve9Fi",
  "key35": "2dSBigPdcUJhMwEmBRFA2Kc4RZ33zNTPTabD2sjZ964kExdt2aQZAStgbCVuMVcpvw7jGSRbXg3r4FYoPWtW7Jq5",
  "key36": "qp6cRM8Dvf33HV3PhkHjs4CSgd56C3mvxiMo9wScmPp1iy5xMyQ5cv2ry8hBavgC3oojLwmTZkmwbNYo9KYnw84",
  "key37": "4Afu4nz3enF6u9VMMYRn8jjhCQLvBGDsyNRLqxuA35xBkuVJcJkYgR7EsRx2Kqt9AGq4uRfvtLhHFooNTVKK6gfi"
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
