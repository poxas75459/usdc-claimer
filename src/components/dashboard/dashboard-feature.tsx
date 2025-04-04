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
    "5dsHpYpteVdynUray7vvzP7CfDyTgmEEAQ1kX6Upu6fg1KsRr1APyKhNYJJ2FyUAiwtcuVnWbNPS4rdX3QApwTxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55vRtR8uckk6MpkVyPimpkaunFJArZZ3ZWkeovbnNVG91rBvrRbzb2jgc1o5ak7PJrGC4awUsAYH8Dfr3zKd58iy",
  "key1": "2XEY8LRnBE3pie7PuAVL7jAdGTvzUhWMjGtMH37oGYFaBAiUgpgxvebQsjeBWi7CbFNfz1iDVTASwY1L4ZMu49Xj",
  "key2": "4CoH2ZYfuLFdVkaaYChgjJ4c5iRThphyRvnhXS61U89PG1mtgZeecvHwZXeKpGTbGf8vqDQiPzm39GMFdQngHJut",
  "key3": "3UecUVwHsLxMKbKXrXUFWA4b3NXBsshuhG2qsg9mbXEz5hncRhqTyXGDcpEcXiQNPkRvEHyC7k14gwxj4kFLMnx6",
  "key4": "4j1W74snD7nwowQPRvUwfSdjhDrtjPJY7AsuW3GQ69y9DpRAwqbVMMNwcvnESodfQGGSohXEmNxbrSqXqpoE48QC",
  "key5": "c9GrPMctiNesJ7RDbfAJXD5Gu3YaHq2SxF4cx63iDh3GqabkfneSVPDpAsvTxDzm7ZmJBYSYpEFzaxZvoYpiCAn",
  "key6": "64usAnogii8PyFwXc5ivDW6fs83nLXvEFVLujyjSHbauXpxonwzLbG2jZMRS9nppf3AfPiEygfqoCxMNX317FAf3",
  "key7": "63mKzCkzSoucW714GMYeAoBHhGVNfrc3AQTQfsm8ut3uTkPMkfnFP9GiXs1evsQgGtwXyu1HBYsHY7U33TYAjv32",
  "key8": "3eFkqDwnnuxHYENuYgtUd3niB8gCsdzctA6U1JWyJepPpL4dvbeec6sj9cfAhLPd31MLCJKP7s87K9eVLhsCJabM",
  "key9": "5CL7KrtMzgvg8CwbADcKCSg67QeomCUBLy7ZPvPwUB4qvBoRvR9YnbbrUJb5bDJoDBNtMbtraFguzsWqQXvWNjt1",
  "key10": "5B67ETJDxorhqyu3ezi5goMLhZQNhYFewFtwqDo5JgasRLRoBgbnPiDkk3VykzTYAXCf8TevasdGXyxTKcoQ9ugi",
  "key11": "3C2QDqZqmtthSnXYFyx8AFo3SawvXwCbUZeCSkRkKCRDRrd1nJuT9LweJnZMXnaQdjK9o2sSMYTESqeE54NWF5VF",
  "key12": "5NEHcT2FCRD6AbVVxgd5EAXZ1aBL5updW6YwK3FXEFGsog37Uu6qT7hT6FmN1aoVCMYN8pYqVe727o65K1DJwbR1",
  "key13": "HjnWdCFt2Sp6wyys76YvhVDCdcum7ZB3APRjF7KpHJLT2nvpTrqug9LpB2V364UiV7GYmuE58yVvseirCTegbAp",
  "key14": "2SNMn4FsZAPBMmhdhfeEVPN12AHXhNr6Wov3Tvn1jdLKq3mw6Hd84o96zDxuC2izW2tfWnAixwEZE3fxpT2Z2QsE",
  "key15": "32yRACSZ6WWHJWiT7XucADUKjFcVMR9kCJV9mLwccQgheuxoXwf7vtMkydxoWnE19ZmS5bdZUTcJ8Zw6fKFgoErk",
  "key16": "4ZUdXnXMJam11iHy8qjbgFwpx4ciuSrXjBdp9m2VYC9zjb1DpCUos7cCBPLR8Jr7M9FmPAeDesgWYj8cV2z8wSsH",
  "key17": "62wdZDsjDsBMPKRrmUzxNpMoamcRfHCXQ4jc7bwdiQA2LDnii37VDN3zQRNdp7K2Xos3cP11aHfvg2JDc2BiYQQj",
  "key18": "5QUuaJrwhekqPAqoUJ8aNeNPGuxzY3VhT9e6c8iGfK4heY6ykFp3xCgz2fU6dqXQJ5nCpgenxRJPPveC9MFqWFDF",
  "key19": "2KmLvcRAhPsWKqCsUyea1jfscRV7uFKAJqHemxp3BypXUsiidMGFGAvUnZV1zfDBo1strguTr9ygvwUejtY1PpDe",
  "key20": "5W2go7amt3cYES5BUCVZS81phXARQqhEbpRVZQkZRK13ANr3rynVW9mtosxUeaj73XhRud4zvhobd6yQ8zu8Z73G",
  "key21": "3mjVKwCiX3Am21PWTfCV8u9ptRUKg5sGWnPnUMrANg8i3WfRsZJ6T9w6fSTSVNtPand4RXLfFuTPYjhebbymGc6Z",
  "key22": "2dPHF3VDZeTWzQpCzwoAucJvmZKCRkA3aRLvhHh7GHwouog8HjvbaGAqF4gCeQ5r99QXQ2rY9yKBGBTHAPnzsbP7",
  "key23": "2UdrFG6nVxTKD3gTWp4SPibv1boiQ2gS2tHyEeMcPUo7Zjn4BN6c7Ai41xUVBSBw4mtQCKFV4cHsm9bEGzEtnyDb",
  "key24": "3f4MRDBzSwoPrrafdVskeH4T8QZWbkVhwzP9NcgUFpYS1zxbmqbHW6MnRi1EQYcr3ssnEtpR9snJRxFxsZHtkff8",
  "key25": "4AP5NyY3JepLRG7TmPwa5trmmiAaE5b2eTWAeswteYchvwUn83kRasxMv8sip2GmzYarFXMtU3q5Ubh6KZjP5oJJ",
  "key26": "4Uicsh4g3hhcsNBjDQ3kxaMHt3ULxnp7LACJ8K4Mf7dX6vL7rgEBhEjekoZCGwXNPALa2JY5DyhoCxpJ8iuTtuTr",
  "key27": "65YcVhegQ5sH2b3yFdpHVHfvS6QRuGsTpavgGWNVSapgDrDMAPom9ebVY8DBqVTnVQVJr4h8FtiJrfoXA4sRZ2bW",
  "key28": "474YJqtgr6gXzGyGj2NWvyPWGYMJosWVjSgd5JwhHotUCGkwyfWQoNpgPckoYQTRAeGhLdv72g69mRxowCkKUJv2",
  "key29": "38FsZgSY2yQqVL3E8rj76baXg1KHfMYyxWCEF6B4bMLD3M6LqeY5EdV1igFvkQX4eV6rAXFBY9pzGmkiSjk4hSXf",
  "key30": "3H4sfVJP6RNvsLrv7MWCirSyVmcn1tzKLfUu82FwteAWvqmxaLziCHRDCZW74iEYpKDBRQko1ajJetNBQoZNrxXa",
  "key31": "4Mk9UxuNHQ6fa6HynTZLK5rq5T7ZF4dvfDr7XC8G4PLGQpspzLwWuaAcShHQkrAH5QvY81JLBKXrFZrAvgo3sF3U",
  "key32": "2Fpz7R3opFpbbnLy25Zm2iC3wmHSexrTMRPEuhnZ432Dcx9WZ444bgrGMe8dZhzgsLNrA8AADBs6xaJZznYwff5F",
  "key33": "3KvhTvb88yBfAgs74p8vA77U4snK8P2JxprrSMEkLShQxmQdP7Vki2o4CrRRzViR5cXsdS7HJ8DVZyvKXRgcHYqj",
  "key34": "44NPmmsvjU3JdF2YrpGsembj4ayWqBGFtMvKzCxExgxWf5G33Lepam58TXzbFHWZrG8ox6W474KaPZSm67sa7fVH",
  "key35": "32SCs1EwqwPQJJM8zaNnbVk4At6zpqAC8U8qBhQDeEdo8tpTLME8QZZLJgR1t1xZjSAnnL9UTPaehTRe5Meju2zq",
  "key36": "2x2UUDiuLYYYuDXAbSCBJUgJejF67iaN7EuMYuXqvDX6U2vp8huQUdpMo5N3nbC1yUBUo7GtfvpEhXrE5Qw5yJLf",
  "key37": "5QpFmnufSG61x78chZ53dvxbee1njnpmWEmJSvQfYN1idPaY8DUdydSNMVJbfm9ekBpdu1SLK4Hp5EQfTTcHDWsX",
  "key38": "5vMKzoQrVX6E3G6io2ebsPF55YVnZNyqdiebS5EVugUpDJv8mSaDQFmBGZfTNSmuzrg9pwtoK5kKsn8dXS3zhT4X",
  "key39": "44TRTBM9VPbRNo7Gf6fjUHkexrXhS1owaySoQ4vFRfJm1UARbMsVGK4Gm9QD9Fk1K41koHUPMAbhPGcjtQBbaDAh",
  "key40": "3wkWHpK2VmvPRkzWrPbXN1h55TWCA7j6EThfvdEv7BqkyvsPqrX5ffHxktaosWt8WCk6dpuEwkCAqnzt4qHycwnd"
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
