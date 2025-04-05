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
    "5m9THe7MYohKjr6XaNQvuqeLHPqhTqJch3kUghgcYEcLR6vC9hTVvddejqZDvnDCQJ7M86RvFGVzQmbjUa73bJuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rGrdwyVV2Ym8163nXxKv1KtnKQCDo7HdF9RYjvosGZXB7GUPZT7obXtwTbzvMYY4Xm1aeykQ24WDehZPHQvQ15Y",
  "key1": "Y6XgNG2G1y6okizyhzwemqT8oi66JuMjkLuzrsHAfx1soXY5TVWCvimyagXKqC2NVcqxMGLKdBc2XMzZ9NDVajU",
  "key2": "3HYf2c6cSpw1vgN8LJCd4y5ssFKzoPtxjudinCwm1HDR94p4zDz6FvawBpfgt5vne53SyGsrTXrz6xnpkpb1cn9s",
  "key3": "82ZCuA7xGseqpEgaMLxKXx2XFA4U3ct41J4KZe8SX1LAXP3vuQhstWHPFbhTAnHae2BtkQihZD88BtVexAzvumk",
  "key4": "4fnrEgfofPKbYHpAie9oXDPuwSHf7LrGyh7r7Zcw99RVwapUUk3hdai2VbBedtgjDd3LEHBEYos8Ri6mjgFyT3NC",
  "key5": "5CGWGJdb3Hyuy9q97XfxDHHBL79kaN1jXiSE2BjbZpsCpfRdBQhJS64yCyKt6CkB2894T2NzCQqUChkfJfbbgdNW",
  "key6": "4Zqj7RdF7brGVd4RKMwcWWusfgLftDQ4WHcMmqa1zLKHyyPoHHM2zzVEGZfztHbPhqXZrgKrfqEh6oE1aKD7zf7s",
  "key7": "53M4M8K5vpqtU5bDcdtan75nLNYhLaGC3QggS61sZ368T591WbQFMQQoowZ6FAmBzX2ysJwddMozpZPkB93pj8KT",
  "key8": "4R9zmeKD8fTDAajE461iVMtcZrs8oQ98Kcbc4mi2kJaHUdhwfQoUQuGeSUJPStphHYFyNTib8eAKni6qJhCSbAr2",
  "key9": "45PtiPFBrisob6uqbnwAbZcH9MpKNPAdgmF2vPcZVEjpGGzYAtv6HraFNGRh7dHfsPUZYb6NSZzAEvrsAavj6owz",
  "key10": "4CFwa3pmEACeqDE7883minSX33VxMwWYnyBmCxV3xm7383DcwH2jfY2vLbytZsLwRutGnSdHB8TFKwyyQ3oicBC",
  "key11": "5DzMS3SYsuC1maKPmcvD8y7U5JU7dA83BEe6Rf1VEWcjqMYwA1SwTKDnXvLC5XLnhY2dF3fW2fhCPBcBo3tJH1xa",
  "key12": "4DjG2tNkrVsx57MVrSTn4gBYBUi5FEGMhBDNdQRWM1EUWcL9Z5cteD2Yi7phAe3ePgdhgXWo1QJS1EBXJJYFd2TJ",
  "key13": "2Bh8RFuveet48EKZ3Cf5YKU6i1q5adL1QAtFYsYhMcvz2ei8o3VxieajL9DwvT1tWTvSuH5qi8R15rR2HVToSWV3",
  "key14": "4yr98w16r8sFf26p73Wh4ETAYLiab5yYFXMJJodzZMWveQZdsh1Upz6A1StyVPhsgE3PwMeAzMvEtLByBpU9RweK",
  "key15": "1guZ3YanywS89vb4iT7DNy6tnbQmXAhSqndRJQHK1aRJgP2gBT4gnuV1ZDwCoMyneHwmjR2vesbqBtiKJvDfhEf",
  "key16": "2F7KUxap5BGPnVyaqnBt6T6jEauaw3YDEfsqAkM1jYGJei6oe16RxMjgJX4CyRuJokHb3ZoodheAtxzHCRTSPU2n",
  "key17": "44d8YHKMUKxw39CHgzRamsfJnhLvSDRkDrfc4aA9pAXF2D5EZ2XD3B6Q8WupgDCfaBFCzUG9rRhin397zy1meN2X",
  "key18": "4ntmM3kTMF3GjYrUFiiTeA5sScarxdbZFWFqbDPTPnHTVvQHhBDJF9SYiyLzgqxkj5y5gntxLR6g4VMHdtxyXrmx",
  "key19": "4YToA7zsHeSjx5oSQHoMW4d6JGsximjWA4n6gGaBUFFMRXg1VdxZMpjVZpzkKminC4AC9ogssQ14vANnixQKb1gR",
  "key20": "5CgEcwiJU9X7CUEMCnwuoxUvvccnSFBsTjmH7iEW7auwbngvhfpcebdyYWNqq1EhkNBwPCQPvrz3CirCLqWidHLE",
  "key21": "3TnCtJEb51Yfu9UBEBt7XEWkRLugcdtDgqVDeM2MPnsrUQwwxBNUo6Aeh9JMQgVwYuUSy4uuZhUBgfX51YrKmFwD",
  "key22": "4HKCsyBQR8gP3hkvF48nvjGRrdG73qr5BjAYmgURVKF9aW8UDkPPiYYTsD3Ha2U24JEc3hspHRCEPpN7NpiGYdix",
  "key23": "2EMNVsdtzLPAPzMsKCzeG5GwEVpyWtdb2ukpxEvxuvpPD9qGXPZ7QVQDtxTLcVSxcjKkCh7LBCp4zmKXHivnjuCo",
  "key24": "5BC7EM7DQFnJ7gvUFs155R7K6eHMztDyVV6xGE4CZMZFHCh7VAkTTfThE3T2GJLCYRKgsDqG9thx9M7hS3zF5CNE",
  "key25": "46gxtLaWE8GWn3WwPqngk8gCZAFLoePcbgTvvByG6Ym47KMqmgbDG5gxaykM2KpT8X27EnekV8EURR6F2vDtxzNK",
  "key26": "4BWnJyUH84gb6sjZV9muegnkGEJShLoEJRy8FzrSkDi4mdgdWTPYaBgDmKHycwHzanfaLb1sXi7UD2Jksyfnrauj",
  "key27": "ppg7i9YY9fk8V7ks8PD3GDPMUoxw1UkadBRdpTF4uCpax5ZqNZShQHnaRNVZDwBi3j57X2cYoznMQxxeGVFGVkJ",
  "key28": "SZRy28KL36ryHYVpkrte5bH6n9UvWsWimhiHbkBhALzEVEpSBYb1KdN7RjKetwfFFVd4G6gRvaqy93mJ1yCxkJ3",
  "key29": "FTNRUZcS59jiL53iAz3EHjwdnYCtoY6ZE7sw7TfBtVEg9Tftp9i7R6o1MYY3joNgqfHEksYKhDCnKXBtKn7c2Lw",
  "key30": "4N3FB6kFw1Yg47Doug75ueZEmkfGiawtVZc3FHtXBJJSta7nBa4KLpZ3oB9ruRuW2oTy5moyNc7EWdKscxPrVQf8",
  "key31": "zz29m9AuVFa81Ub55mJsyHe92BhSzevcjHQcnTUZCDfSvRAcB7bVhaBnaq5UQuTuea1AT1C7Tjjz9izUv29S6kc",
  "key32": "3G8o53TLP2V9y5eiBRowHfZSDQWVCGp8WtJ22L1z8mwW8tz3AaB8zqQ4D53U4C26pQjYnm9C7r3HNySv3kyLE4P",
  "key33": "3eQaTHVeU9D4WmEchCDrZgRapneqjZShENUrUn3nYLaZ2SQF8qNQ42LQxLJaCa6XiAfHcEp2e1Zzf9XsiMSp7vxc",
  "key34": "42vigBPpRdrp3L35UxcV4BSebWstmJNFASdx2ykVEdujpn1Zrrkf6aAQrMT3j8HSs4jsM71PqbderfT7SbTjtwqe",
  "key35": "2T6Xh8sdkKJAjokt41X2HWQYtCT6yjnspqkXwhgkrx7yLw9NPiRHqWKhNjaWW9wSv4RA2UjSupcibZGg4qqjwAJ5",
  "key36": "4JBRuPwnHCZdPFLehMFCort6NLJjF8bLWcvNxjjTUtyjdbSdyiAqTBhWYurNywjHXLhvKWEgz4mqoD6uuamY76ez",
  "key37": "4r35NdtAdaiZKKDFATgnmrSJpfoKyctH9WXsuoUg4S1ZBPchWrJZZKbuR5MDD21BiqDhqyh7JiyZgBHHCc7PXg7Q"
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
