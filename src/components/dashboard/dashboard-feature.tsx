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
    "4xNq8UjcuEzjPyGZXZDtKTgm9eZKXjkHYwMaawH5PX14NpedqUQGyoa5knGoh4x8KqHXhspSj97NTGTDdAb8AnRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z94zGe9biQHREUsc9b1deGrnm9yPveMHSuTj15sHrhdJZD4npWV8re8Jyff4NTc2G2LC35rQ2hxxfJNtVpji8tV",
  "key1": "2U7Gtx3uKA7ZFHfkW24J1bBftvxYATpzGRQoaqiHJd5FmrNrjrctcj99WwhD7AURzrECUKLdiph8LnUDi2rZgJ5j",
  "key2": "4Xit747GvzHdSK3vxJ9H7q6qcvqy25uPGAZm2rsyUDms9o6Sqdk6UXGpYkznvXcA4fGCkRG7vKGnCnTzT4aBqNGg",
  "key3": "4aUG84vRtRgKe1YeFoMmzwQNCoCVwfjAHCcXz9RKSrCTZwpLEE8DWkcD72AgvaGCraKeshNtghMjuCLqHsY3ibqj",
  "key4": "4phwPUqYZNED6nZCSVDWg1KAGW6HM33Usu4Y2D4cH3TAJsAN2TTH2MgU1jtrcUwAciKrYai4fHfryNFLxdJaiDG2",
  "key5": "5d9UXs7q8NmTeFUkQK51WsJGeVsd8UHL2n7sqgtpzxMsThWHuZ64tNw13muih4qkkVe15jU4ydTMZeHLDEcwZB2y",
  "key6": "3zM7MJ4iK9gt9auMdc6DHq6GszfBfKCyzFB2GeLjKLfsk8XyBWnbrF4bNRGEz9JcZgfCfXpFh6p4K6kXZidFNgGT",
  "key7": "5tKK9AbqZZMuefeMwU1g4r5X4DuMKB33GrbwDLKcX8seLjTugytLou11pqMjti6PJxVpszueT9GHYj5QCeyGm7z1",
  "key8": "5ayqUbPGE7XFpy3hnTi4vxWg1MLVGEByKoaTndFfGFKda81vvgNaYtQp8CkJ4S38qf8zBSc5mukjimz3613ay4jV",
  "key9": "4zZSau5tN9xAqYTdtPzfs9xjkeVj2C9q7G6fDPLdekGMkpKSvX4hD46wmQZTZGedsyGPxBfpfLJy5V5CUah3WZdX",
  "key10": "5TMhmjvntq9oqtpsvxJ6cuziYFC17vqSmfXjK626L8ag72uPLq51LinUnG22TZWyam7T4XdpVeHcTdc1qAyTeRxq",
  "key11": "anPyJy5xnbDKYdNdGDWQ9NBSYnrC3FKxtxVVKTvQAK7wMkRwXca9gu4fPFy89TJ5DsCvUzHiF8QdzPwd4fQptpS",
  "key12": "4CDoP2XQchrkxbJHc9kEeCAt4CsoNKtaCUQD26p6scnTq5LZCwnuTHT7kRKXWYZHEAqHPDUHxscmFGw5DSsiXtJ2",
  "key13": "2NQyUZHEpvs6XsDnt16REsi4DcBHSiFFRjuos8A1YBnPXkbpyLomwAm5sNqkAGHbCn4oDKvunc7jYfgT2EKWu9nx",
  "key14": "5s6rf1fcaimVTeY8G1fcDj9SSKo6DQPv3rTNEhjgjwsC1WcqnUB8NfaQZV92oTTYx5WtSPm5uKE9KdnUxchix3SP",
  "key15": "5xk8Jp3RfMzTkr6qrs2fbiZpqzaXvBidN3Wq8A1skpJgMnEwz3HxKFMP2mRk5WMoY3CrbnW5YWuXPuaGmEBeSkZp",
  "key16": "tZEsdS4hLUem5UdBMsXHRAfWEkvm4X6nFX5d39nx3daVF5vorfajQFWBxTPVZZ1fegZVXkjAVFQg1udossV2prB",
  "key17": "sqDFgjUFd4nzJR3mP2j8xn8Trpzx2P6Bb4HV7w36eA8eS13mEeVoc2wx8bzaz2E8NuRy28b3jeKDBD8j4kDxLxq",
  "key18": "3zZPNrq9UAz48x4C2CTw2yAQYv26HoDoXDRugV6yddGoLYonTsitu5qVtUEiBwwBRDsP7iVCYk99m6S5UNqTR21y",
  "key19": "3gRvi7HyDWSUEFXPsM8P2gsjn9iH6VGYNsAWc81gdee5Dm7py8yEaq9fVvurbQ3h3eZweELEvgMW5HDUZjkh2HdK",
  "key20": "3e1k3MrHFranSLijj1pxfkavJJNSWVgLCMnx2cDQsvkKmvss5nqcjTPmXLKfphtooNy2woQDmnKSc42WYvtwaQ1R",
  "key21": "pwjABvkVQEmuu3oBjZXWyweUpF1hE2zjWGL5PdHYoosNLRev8ijFwD5cEQRYYahW4vppRQwpMazd7w3LHdC4XeV",
  "key22": "3DjELQKUadSJeA8yfeXPKTXDZ34Md6Cx5m6hKxAPk1GBip5LBsAVjUdK5tHqr4M7a67FXLH7xTbsHrRzoAuQTSRK",
  "key23": "3p7BZgfv7dspn8wfh2Nxp5yFDsdmmurL5Qs9f1EX67QAFMMose2WiBMZyhNA3CsM2uEYvzV4wEbCRp1UJKEuphR6",
  "key24": "2bfWfcmDmJPb6rcvsQFgMdMPGF59CmNdDmKo8rbhx1Fh1X83yXJ3cPydyGZKP4XTDoSSgCo1Ew95mnMELwdHw35e",
  "key25": "5oeZY4eTVsivsMoJFKxDeUXHtV28V2BVpHaTqynHfmZqixxcN79vrnh4ghpW53VaTYcwapCUrXu8LDsD7GHruMum",
  "key26": "4tAZUQ86UgWjbBdGMs299tfqyZ8WgE3qrA6J1HnkAga9AynShbvh6WhzvBGwFn6762usj5rKLBxs49NB1XEUPWa8",
  "key27": "3JbZ2DsJ8rKeXscBvQNfRGhBL7tv3gyKr3B67P7Stj31Rg2oRJfqm9i4sei2cbrqQxJpMBtv6EYhc22MJJhXQVPz",
  "key28": "57GtuDpkQaRDX3uAPGptDwBqP9my7BUDVjRwNEqbjQLXp2P4WuovBTMx8gMt2PDiGZtpJwFqGKGTsRCbMGRsnYZ5",
  "key29": "7NCyHxskHogpnz1SZ1Acg3iuGRMSR54uGLSp4fiapvGKGKuxrxphwnFFTh9x9pujB12CFnT8U3SyGcdTEuMsrVy",
  "key30": "2nud21GZMZNmavk9f7FtsRBuNA7VNZPprHcb2HZkU4ftLe9V5DsJf2JGqHWhnbErjd6GRa5TyLhFVhWBp3YoTt8f",
  "key31": "3SSGjboXJQHFeb16bFcz2m2DUwbYrFoD7odd9YV72nJQd4A58FSG117KQTXTzo9d7ZWKCcued2Ak39DhbHNTCFTh",
  "key32": "2nkPJr8EbWzRBWf2JZcLmzZvVd5isH4J8SZisiND94DBmjRx65W547srhniYMeSrpiNjWB5iXsh4jL5ncViSrbHc",
  "key33": "3uB4WtUteW7uipboXdyD5We78r13QhSbiq3EdffUg8iycoQGNUBcCad5xh5hLooMmdsnHdkhn4CNLenMRhCwsfsE",
  "key34": "3Xn3611zfHEpnvsik48jvx3iTrmfrDhZybQPbLa72UbfVpQMvnREjqGDAPasFAqch5t3LuaxdX8gxDQmGnv1xpbT",
  "key35": "apVasHftwGjCkyWkPm4TgTdLmBSYoj5EwQBig8638VqSnfDr8fQLWSryHC72qySe3Y3xJsRoCtjRm1UodTZ58x4",
  "key36": "j1U5vTHYr1bSvSJ5mXZhpKd1e2RBDrdZ7AadhKsNigbw6Ldr5RnHxPC3tQekhe8SK2xqUompnbvZ2MujXu8zvhH",
  "key37": "5d9XYfEF33L57n7TBofthCn6psurhazMG92gqkQXr2ywHGrn7pYE9voao396aZKig7xPGs3WiL68s2Ertw8mjZpa",
  "key38": "7trq4ujBHv19e2r7K1x1QLBavyVMJiGatYCoU1Y3JaBd9BzMn8f64WDS3Z9TfonZki4JkjyqhgAZSLtqGMdyemN",
  "key39": "2vRh3X4UyymjEGHEWGu3HAbhsSURrm6i6ArnhtJsGf3UbAmSpePCg5LbAyA5xwT8cb47K8kGypw7icHCh8bSeT55",
  "key40": "2z9NkkpW4XoBLxXvr6JkQm1YryRgzpwf7jaP4BYdny6XoKoPBSkLfSWW6DgX2zEjhgcvgr58F36VpTA4PoYQv5Xm",
  "key41": "5Pu8USbkNTg7ayqz5zgrPAx9DsTbhbm7naWQXzLMACSNJ67PhnVSojEDJXZBUdznadaLkYYwNN55aZx2zS9cnFVL",
  "key42": "Xf69tezSNDFkfGhbFSDUe2CKriutjTq2Y7DpjurDH9Xt1gXkyMpvD3zhcom7mT1Q2FHBza1FJUaQVn3CP4o7PHE"
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
