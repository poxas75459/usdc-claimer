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
    "39sXMhZCPH6gPcFTSu5QP6qQd1Scg2iiiV3qMR22z1o7dbhHX5rPRR1otze4JdTSNH4xWsi8z2GeBYNWTDuPXLKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DuActTDhRcgimnTFr57wMT5XUzc7ZXeRG8brcajrUf3XmW8S6dFMokZdT7SdZFEbBK4XmpFScYtPsTcCFc3y2kK",
  "key1": "5ySBoFJ2vCDPpuv16ZEhP9pjTRR4Jmk59DcmEXK4ESrhYAdjnbr4cj2nNws3vLJw9PGjV18Njuc2uArJUnJkEBuF",
  "key2": "2xLtQmDkR8a7ivsbGwVetg4pG4wigzmERXJbNndwp82H2ppdySxFbZiw2vv2wYLsmGuowcnivp789dXj2yjw2G5A",
  "key3": "234LrvNv7KcQmVEMfBLhPTh4ndwUq9sqUrwwMJuXGJBLj7GbC7KrNth9ByrjQU83Zh8wpSTEp1u8ekeqtmHau8ms",
  "key4": "5KSJRWKa8mWSo5DBu5MZah6yQzi3QjsUmqqXcvpevbgSzVm2vHTmrUmjVd2GdLydokpNaELRtpeSLLAfQB6QwZJr",
  "key5": "4o2kvD9f8hQXnnBBcJ75m9XT2cRwchwTyFrMcGBpKTbaH2bUEPGHH1ouvmtfpYJWpz7Wug7uBxeG7qHvgtJEnXza",
  "key6": "62HGM232JbmfwyLbsxFCY7xGdujugmD2V3NxQndnXmbojKG9iTAcqoPHs9PEQoo31yNZc86RCNedbLfXNBDRW49N",
  "key7": "2YKE5w1GCJznzx3ddkamjWM7g91PMe1J1qip11mjji2qsepopsSjiodFyq5UP3XNizGwfi1sUKjdbU6dnhnmaonU",
  "key8": "2ScAFR9CGuyPaoXWFA2DSVBWoAfEBenojGxBDiS35HmfK4xtKWAyWCRQ5ComR7S75gezgVroG3AYdCpKqd774Tip",
  "key9": "Kh8FHhmxC2P6uKoapzwkQx7kCzpmmjN2Ch9emXkHPqgdFzVv54p6AyCaifpqB2iQRABpJPhrf78djg6s8Qsg2fV",
  "key10": "tK5S9o7MDem21g3sZBmG8MvzbqAgfv4hs21PrJ451Y2xsvpdWYDyZjZSNwUxVkUWkfCQXGB9Fq254e3wyb7MTHH",
  "key11": "24BQcHFv1tHUYbiPWLzKh2j65QR2HCEmvEHvQtSjAwSjkwh6bBEc38Gj8DyrTrxRceUz4itzBhDjBmARdZAFA7BS",
  "key12": "2yMwHdPKtGCopxNgBMzRoEQUrurt5NC35yQPwVupLW85jADvNniJ6JHcwhYKW7Yk5f1GLjWy4YiJnE9erhV4VcBt",
  "key13": "2MjXuxh79zLoYSttQQ5j2iAjirubwnh1TAipaV3krL4r6SMpitEiJkXUyWvwSoMfhHXUFk58HoiEdZDxGExsLvUN",
  "key14": "2v6sx6daJ92T79PACfGn2JixBe5ZmVuZxjBKECMfypX4SjFxqDJfdBfzuZSdgCN7oMvVyRitDfsEuG5EG96gNrEA",
  "key15": "BzSTFeL2BeZTqf99rzexqXtdn12z5PzadMeXZGLiaXhGoisYZdPvZMBqFEjaqRxnFXo9f8Yn8hfBTfcB3r1v9PN",
  "key16": "5PYsdL7V9DYQTZhNHQMijamH45PxZ6cxSBLtsJndJXCJiH13ED5ckUciGseADk9cyyKn1LyNnaiUUbw7vxjfdoEa",
  "key17": "3NtcHGotgxZ2gyzUHrMnuUq4bbeaXxG7hgRMVQUCwpanNm5BDTsMSz3mxPizPErdjHUb4B63MC6UgmLDy3ZVbiTN",
  "key18": "2Q9BS3TSg5xyCGeudwMYiXmGeJ6M7x11y8JC6zPXv3Y4gg56BjPk6NEAEHEzTKScnfKQAT14Y5Hht7jur9b9z8gZ",
  "key19": "2cpPLMRxNfU3WF3wpx951TAmGA7CwwUpHmpteXLq9KKiy4Efda16LCxXDKxngs6NnZGa14vArMAwpz9bPMW4PWqm",
  "key20": "4VMdcjHLKepfkaPEoZ6scpTw1LhMm8k9Wb1jNDoZFEdoq3mUZa633t2axsE5Urv4rRW2aJzd1aV4RLc1c2jzaXc5",
  "key21": "64NHcjgQ9Q4LPFmhV7LoTR735m8VMTBco7D2oeVQy2v6GUSThWubGhkyfDYxEX92qHBQwD1nvptDpSaAXp4ZvDgq",
  "key22": "5qHWXyp5L1UxwHsHNqSkPaXRgqoTDWEW3achMpyhULBYP1k8yvsUoMkV7d3eByJwMLsGAon4pQs5J5V1AaRAmrWp",
  "key23": "4Mi6Z5KGEThCH3NWbEsFT5v8KRFpAMmHvqSrHad1fcVz8Srze9tufiKCWeG3TsCxUrt4ca536UTvjDywhiZyoQWk",
  "key24": "3VG8aJQTvk5szUadJVHBC22uHvSmTkNZCvRwbbUCTGkuwEkN6aeA432xkVFTt1FGUyEBkB3vrZ5ob9jLD8RTu9yf",
  "key25": "8USwcsaDv75Yg1zYccRTJvXbL88zLMkpw2mXsgapidzpwEgs5EAbbC7BrLeZ3P6DHn1WTAQTLvs3vXXCKmNXfCd",
  "key26": "Lnyv3FwoPXBMzWyLxeuZE4DhYmcsJmSFyLdvaoAEkqUfu4TEWkNXw2N8QdkXswHit4YUsAo2mGHZCWJyj2ZHAG6"
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
