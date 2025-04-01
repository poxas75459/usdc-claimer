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
    "5oSycxR6DFtVSqKhG7DwkWyP68f4UCM7F37Mg54yJhhKsoXkMgg2Jv625ywcW31YRLDCd2TcPQ4tYaucLRYvs3Yb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SeUzSibmZ17NjR7rgvomcQgBV7FwVqWiTtBFDMKwNRsQLGzDZboHnQ5XspjKMXvtxndEQYNTPjGTEhU9xRW5qcS",
  "key1": "31Vzox95STw1xAfi6N7Wv7EeFFgt4Ch7tCka2j6HuWeJ9wr1aRK6nUQhdTPzWGxZzg1j9219xE9KmNB1fvmfsPUg",
  "key2": "5NKne9sJy1Qe4FoY7bCXxPJbryXMb4yiYReCbPHUFZBQTMiwumYrT1nqVLQSAY3v9WFjjbSGTNgNuueA36GMDBR1",
  "key3": "26RUXpCE5G5MTY9CmQBCbRG3ivo3iSo2msxgVsQW22NW472VDD84NqQzMLT8oW7WKNy5SbrX2fz9dGpZZcxt3rzm",
  "key4": "21z3YZXrPzArBLiUAMemf2isaZ46eCQ93d4Jk49YEZzAWZiEkKSt9KNerfvz1Fw1GU8MJzHsM5UA6AuYGUVaFYvt",
  "key5": "3Hh1j4NnKSjTfiokzb8dqbwb54YqZzmNZXyhEJzDYxC7UsHjZgXr57G3riuZWbCuKbhmxvtztXVcGAKS7EJsdsrr",
  "key6": "5HX2wjtJeMiFVryndYDEcVr8peD38BzH41unMrfEmf6mjpBt94CNwiZLxVBXTZBUa8FUvgcSBLV7bZYLeQ3pZj4X",
  "key7": "3Afpkj8kybiXsVJ2KUutLzh8eCaFZCNvftYPckGcDhwsi5MDgWchi6x1JnLWbSAfxHFJfZovYgSj7XzeYh1ExZHK",
  "key8": "rfA13rKaFhemWCVgFfNivqBSGBttnULYsE2rTcrcNFssiY7RdMpU5zu1GTcT1G91uztxnUHWfchtPW2ZM5YBcvS",
  "key9": "h3Ys3yveUccp8JmpEA69aJLihmrUR1NcR2SLSMu3BzQZjxVTaxCzffHnbqtF2d5RN6wQGNQpyShxnG8gY1BCaxN",
  "key10": "2bWMF2jehpZAbTxgUxqYUw51gxByYDro6SNSyRU9PNBoNYSGjXu3iSBt2ehRvvPxGGjrqy9oh94ZV6yWJgtNHgxH",
  "key11": "gjiW6HPdxzTzouAivrEaSENmYQmwXeCY36Ea3MZrXvhvFeBX5SRJ1qF6HnsGWrxEoDBMrEtrLJLfb1L1AoFLMhf",
  "key12": "5ahgUm93CTowJtuhETZK2FbQUpd9Xndpai1ozmeaf3g5i6QJgrFMLbGQta8Wm6hqkntPcipwwzsZETn4Az6JwGTL",
  "key13": "4soSy4JwMtU2Wo6t8cA9nxSbys7CCmCpum5MfV2ktk14RzGL8huECNavFVdXiYe22CM2Jm2woyvgsfg2fu3NCXQq",
  "key14": "65kvPCJ5MDnetWFDfB4LJtYGRLDxsNsNKvgbphyqLS5fjPdCAKBS15ZMWURcyjJcQMmJ6bpKswJgmjgzU9Q3CJr2",
  "key15": "2Y5UCJduKaZ42mNvzAHzPPfB2FaFBRgzpqHab6st89WxarUcGU6PFejxEEu46oJ8i34aPNzQBphgZ5VRbw2sXUad",
  "key16": "2fLGKvM5b4q74XhA3wprgQ3YAt315q8JSRUvyybrc43yPwWnhLfuJeKCzKZB2HwTsqijKJDjfBcSMN29DaPDZJS7",
  "key17": "2TinWWLC129zVovJ9JgrzkTf45yyZh6kkCU6MVT7ZaSgFgNJiNgJoWs5qk4MztepfSGyjUKnfRFUGmpSWhneoc72",
  "key18": "3TcctpG5ccS9yxumyecnVnx28Ub7jp7suYk2DisfyTkXrGUEkqvjSuRQbNwmBHMJXN2qG14Va5wYG5cpiYT4iKZZ",
  "key19": "qWfDnkUwzoC9RY6KTqZ4isgfq9bLe1V76qUjjgxR4e3wRRM3CP5W8hrdN98XZ85jAai7Kgc25sorxftJLKTuPzt",
  "key20": "zuzFVp9eYN4gQdnK82DwzBFEmnTGYXRxV3kvLX69t8U3Z8Ke4NYNwPx4Z1JZED3EKyPthoEAgw8QKCgi3EvUZLt",
  "key21": "4eHM7SBPBPgZi46vvTxw4S2PdaYRSrtq683h2EzTVvVxor9icF4bC8Grv1ojLi83FReExaqDo7gtfYnHa5eYvNaL",
  "key22": "41vXb7o3xLCUAKu4Ne8RGYE1vqoBeKVy58Mef338jxsNTpbukNmqdu2Gu8PygucJjk1FKBqRjHgAL5XBfac1qocB",
  "key23": "TVWLqfPxpUCZCYCwf5P5nC7Z5oDVsL1FfnPtaYZ3v5132ggUPDkjuhjV3KeF5cTh8FhApwjA8F1HjRbVGH93pCy",
  "key24": "5WbCG8nuQocVoT2Kb6LL9UU2KWJndFXn8psf5Eu2BCDBu849QyN5NjD36M7PhioLLwX7pYNeWAFvrXB9NgSM4Ukn",
  "key25": "4R2DS2wAR6JoVb2nG7ywmwVc3hpxFuQ8TwPLi9a5KhSbepmiNPbQhqAU11Lf3vRFCxVGrtvxxh7hNfXAzzePzkEK",
  "key26": "38QKUoFYoB4UASFhvJ2ZoJw6mg2YYM4d87FfYiWKL2pJEsZrGNs1o9AxWU8pGTACNp7FQz6cibftsYWfdNcNny2Z",
  "key27": "28FgwRa8GPuFbB9pruXzrLQ17bCbtFwrMuEAFay9msmag44v681Nmk2zE8Gou8GtzwN2oDvhs1nGxr4tZzWUL9Ph",
  "key28": "EYC6ktjby4iFqWGo1Fa9rZmjYbzUoy7FWDNs7zMoyCsb82S7gA2yZNzeRJuChRB7eFasrReHzVm4xHDSpG9xTsz",
  "key29": "2h7j6zRVnyNRkfKkznfgeDxASkfPSSs1smU243zqRt99BXYzvXtgNW1iupe5RvjDpPzfsGLrykmFKLzYF9mjUvbo",
  "key30": "4mChbPFPfrE3jdt5v8nANwmLqxJRAEjJCwBhzApuqnYHngr1bSRWwf39b7VooSENkKyYJ6mQzbcs4qvT2cFcYSYi",
  "key31": "43Hcr6MAYCiPhstu414zAAUCrx3aqnPrBwNsbcnsmDFcG5ki3eSfDW6TyyEyiXRKNmHRgeRQN131vsK9Jq7K1n3c",
  "key32": "2RnqBpxwFSUAfB83cwP2aM72iF5QbfcwY6ypguo6gQ1H4qhAKJuhDzCstANyhFpuJNBDEsYmjPCMdGNtztC3hkFs",
  "key33": "524kYigAuom3f1K9jjaJZxeLMKYnJzeKVefMpJwRQCkZKX7B1YbpUJVs19k4kNXxBVJfPSHuonTTV6P7LYKACLZ3",
  "key34": "33qQMKhJisUppQyGC6AvneqaUBdQbXnfZzFsC7g97ydmtCkMBVL2YNcEpkj34AF5xofnDyhgTW8NqtnoDreTXgAp",
  "key35": "tSHMgE1i4eKfrGjaxg3n8ezL4Vv7uq3efHaSxUXE8dckKmC2M6AbEe9bXNSs5QmUeW4SgFJTBCmPbVgCigNJ1Zf",
  "key36": "33eWk1wfKVvxv1JWZAux4Kktig8bsUHgsroUdUJZqsMEUjdbuidDXYbRhEX87XHKXfw7mADpt49EohoXPzS6mvfc",
  "key37": "5YmSiLq7EVh1u94iCRDNwybbS7D6xPX4ZYRy5EyYBH6J9GWwh5ebJYzoYetdYBWdTfvrX18bCM9sfc53CpzLq458"
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
