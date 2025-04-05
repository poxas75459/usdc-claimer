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
    "5bx4B44vpxfi58Jb84cspJC387vZ8vyetHuGX9fWZtZSzD2959AoqHz5aNbEuBZZHkK79sFBRSmxBwUgWJQEnNWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DzPfxrPRtvM4x7UQgQHrJNXJ829sw7maBWmKDYUQaAdDiHGWntwdHsaWbf4C2XqAuBP3rrZJr1we4UY8yQTQQzx",
  "key1": "5AuoyvnXVDgYr6VhRC9sNvB2GEU4Vjupaopw9n1wUD4BfZBewVqWjm4pvpiw6EHLQFrCCFHBFmARBAMgQaNfjtFN",
  "key2": "5dw6WbD7q4z8VYyWNMX9ZE6HxxdMRPaPaZGn7Lq11pr3TKtsrP8GaPHtEjrjj5fNYCJqVmWfRJXS9SaRhC5wnH28",
  "key3": "376mMfHfjdoFWJwRGo5PU2jYEEEcYNhE12c9CM3o8NunDsDDRdzNC2ut7LYKtZqphygFxMwXn74vs4HXKWyDrpit",
  "key4": "2khhwonXJURGGbEJ3MaBDT8MHoGeKs6MHNAedRaAPqwypTEYA4BtFieikq9i4uTTUuzV57Cg94TMX5ztsSkUTtHj",
  "key5": "3SQaLgF4EHo8gfxBLtGqAgvkMwHwokaMhGACdYRoHoqXxjbTDwbMYiUXh94khjKLByCoSAEDGDjYntC7jbaHnYYK",
  "key6": "2XZ3mSoinh5fGAygxQwQkKCuch69JWNeMrc6pH9oHPBmq31De5MbLYdXynzsucK5FytKbAJqVGLLNTCEaZBqecR8",
  "key7": "56R8fpGkPA2X9557vENgcsXKUQgk29F9Lc4ByZKiT2Qu5qse1ivkqGJV1U3ju6GH31NHckCttm2uJkMQKo9X3yjw",
  "key8": "4CwgrP2jupb2v4RGPKhDqjJyyPmBoF5NA26YBjrNsj2TWLPmCMi5nEP28xkwWVUHh11wjVzBxL9BijTm29Z2qhxY",
  "key9": "4GKYb7tqFUdjMc8DWaTM7ypcvEkUxUNFrs7F2Mgwuv75u8u37mpeSNjg6wx5uH2NDRgFQEt74QGbfdaL1NriCSMH",
  "key10": "CWQPCPvVm4vC5r2nT3UcF1vbBmZqKebNc23ZJ8YfSD99523eEDLKs8464HhGzb4NDMcjsjH8fkGxCHp36FpVcrx",
  "key11": "3JBCrFGr84t6dDKfFsJqntiZJX5wcbVDuw4oEBpXLmWjezCpBTTryAztnoVK53XSz4oqnAKTuD6MsYb3S23ZE3ZN",
  "key12": "4NVn6xZbrxbKUoZ66XUPKpC3R3KG1skXb5MNSmEK3LgPzftz8v2YqV3sz5xPsCV2nnXXBqX8osqws8BbffrUvBNi",
  "key13": "2QCtfVmcDGspvRRChBboELQ1asF19ukB3prfaiRuYuFcuAchSCESvQ3Hf4GuddMieuVbmX3QNTgnB3Kcuf2W4TEt",
  "key14": "2dmnWPdvg7M5eMbUbnZ28TDtKCyijLmSDnSnMuhRWXdVPwMTVij7Ay2N9FtphFUdq57oYej2gn7BzAm8XbbAnuob",
  "key15": "5hsDoc9RitD6vQ9PLyU2XMT9DHMs2Pwt2jFKQff7duEK3gv3A5tyfdyXqvxWC5Pgqap8BKLwjqQGsKMR6p6PCkS",
  "key16": "2wbjG4cMn1Y3FWhb5t7mUqyXDKsyzBmFzW61Nw3fZzUVsvyYeBgHWVPtUAxUaEzNjkmJk24MZPLsTBqoNNGYtWMw",
  "key17": "4CjxgwpF7DuJ3GioZmkLc1RPDKFnSmWuV4PQvqEtx9XRNchbpLLxJYPFVrVBWC8ZUtGHp3gDLxPkFpdaYqn5XJ1N",
  "key18": "2nYnRvZdX6Fguri4EZHK9BEzCB8szaUtbegTaLAFj97vVCBEaea9phLagJyPMnEJ8Bi9ec4iLpSbhe74teZhFfYC",
  "key19": "4ssmezn5eYLzzmPUAssFey6WKKUUwJAyeBQU63XudY2Q79rLG82YCCcqE3zhZxgVim4Zbb3dHdUgJXgeWudzZwtX",
  "key20": "3sS76NAyrY7EVh51geZtkQrqi3DKYJUiPCKPHXGBedMBnrvcx3R95EhTY8P7qMeSg6jfJiujTiJmo6rBq633VkH7",
  "key21": "4SWiyUHXWgHgx6v4Q6SfobZRLmL2jxEK5ZfjRpQbmRmDPmD5ApGHh465ebFZoc5knCNbay5F2UWWsTLNvNrnbFbS",
  "key22": "2gy6ngR2yBXDKf5omwPVh8mfRnZR7jYVpMWEs3oL7q2ymWo866QMT4H6etsYWj5YPeJRQEKWvjRj9jiHZB5ceHbo",
  "key23": "o5L3HjToTg6dXrxpm3GP3t7wzWPiXudvheEwFmQVG1Jd3Uh1xkSM5g8ZoTmRTRWaTtM7XB5kExgUd9FmHy1Tgkw",
  "key24": "5LJy63RJvK3x7CMm9D35SLgXB1ma7CRGrYoMzUqJXq8WriHyju1rtj3x4aQJvuT7wewywD1DYtpb8D1gwEyyhC3g",
  "key25": "5JRpRE8Fofmqjy2p84SVk3bQBWLXg2TDkfe1ZZmLHgMFTTeP9HS4dm6aWsRSEG6H7QzknfWB1b6WuWNsM6i64N4X",
  "key26": "28TsP8nzHP29fQqDQyMg3X1zoLdjfwMtfL7geLdi9sCcQ9sm8bSrPhS8eT75Qwv123aALEFKRTRhpMFXZHdpKoVg",
  "key27": "4EjfjCF8GyHW9bzkDMtGpyGaTdY6YJ9X9ocJn8MxYxG8AM3UERQ8ZiguM3Px1qPDFFrf98HS2U3DsSiuoacXck7e",
  "key28": "qomwsQLE64WQudeqYpN9hGrEq17ZyeALxsMq927R2XT7khQ1GBhnUrsSbwU8brTKteYpbfaXRk8QEPMQbMTHAoC",
  "key29": "29Y2CvjmKA9kkjYaPeADz3fXGuhW7YXLaQpjmX7TosXW2b3mCjsRL3U2YBLaVmf4BqZRL7WEbXHPBgaRyE8Zp3pP",
  "key30": "4VM6W7KwSviqBDkDh1DFfxkQU7G3rGiouEX47HZx6vz7opEUP2Na59YUJs81RX3RXVpTCiVnQ2UZ1j9AzqujDaf2",
  "key31": "m8gUFVZKBS8fmr8guuMvFpnNcgF5WSbmoptihgUEkj62ndk6Gttt3NFR1a1o5jAcJAuAg8C1grGo14xUW33D4ov",
  "key32": "2phn36vdcCH7egYGb8nvbj4CK3N1E36VPpaSkh5bhJtVpGcW1cfV68fSBHTJFxasvYR3q8T6DB7iQTa1WDr18Uio",
  "key33": "411PgBcyRriuKrzSHTqcVTduxHCdXWFNxf2agwRnHinV1kw3Kcppz4dpyhUba5URtuvWvbp7TNPfHyE1hSTw2M7z",
  "key34": "YredxMJ5nthEkKsZ3VzeKRC6f6eeR78H4DXLAVwUPWWvnGBbjNdchgH2BSe4yp2EuYiFJsfqG4rM24hwb2Px1CB",
  "key35": "vSozVEetfo41MCud5xXQDhfkrJzjuNoc1z2sT4v9X9tQz8vqzQH61s2UdvKjkCjgnUQuu7tRDSL3nMfd5X6YE5x",
  "key36": "3MxtBPRGvY8fLCwoG9G9Y5XmC9VshGBjSjGRZQoMvUM377c8SpLrSXJd4hcqFsenHB8kXi7TWpoP3F4UXQJKm8ah",
  "key37": "4Tqtinir33PE1rt5cmJUwxonmoKK7CuCxwP6HuRFZVB1VDNsDtTTy6MYdw3ac7vTgu6yqK2S4tSwDKrVhe4oxa4S",
  "key38": "RgEVqiXHYr5i41dMhTHWWMbzUcvfjDJhx65PnNhxDymRwCUdmBg2qqUKrT6KGqVpphDLJAfd7cSzuJf7m2zLJYZ",
  "key39": "5k5QK8CnUYhyb8ZnGeHZCviWi4MMXDrcSb45SR4V1vD9ioEAWdd9deXN5yBzD76KmTQNVih2kQo5JDHomDpsHmoy",
  "key40": "2mWF6BRJgjPSQF8RcJnW74Xhh3ebFT6NLAUKoVvWD4dzsE48YhFNYvZfmaJkX7xZNJrTJrj2RbxJJyPyxB1ZidzK"
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
