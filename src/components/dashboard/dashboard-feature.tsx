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
    "aCQQBmsFYNmhJeEEdzAFcMmcfKwFZM2JPKxQ74Zpb8v3xzbs8jbaMhVdNtYz1ZnJCFNcUAs2xVyPKN68yGm17Kk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kMFYaw9XFtFNBZZ64vrSqaZN3ug9ANst1GxxHyAzbjvjLkrAKXStBUeu254tA1UTJLPC8r1HDR6h2uixQb7nLPs",
  "key1": "2EKFSp5eqekJ5wB2skxHxXcXAt13KR4wk5csYJDqGHnHn5bndAzrRKAhUaEmp8B8Ehf1ZqREqdM71i2YewfpqQ8u",
  "key2": "2bQJrWzoqEwuVzThotnqv6Zxv95shSMjKszZyyo9Uqk2vKYiQ36z1FweQnWXJJRh9s1U6xFLPT4cxsqUDRJx1x7v",
  "key3": "3RWeaLo4QbdDVu7o6p1nenoE5iC7XacuXzB8qHp66GvoVwBRvgbqS1LbgWJU8EdUZXbSbRX5fxW9KnqiYdLNNVM3",
  "key4": "2pCuMCZ7bKDAFxoxjEZmPTPunhdd5ivvEn1hpEEKwiKfYQ5Tm2Fq7FViSEBGzQMGUawYgHoH66jcTJoy4iMsSG4S",
  "key5": "5b4t5XMuT7bVPnbKeLUeJLmxYUnkKhJGSZaUBQz8p1npRWmQFbV1X9CTdMMTTt22Qi6dJiuuBuLB4V1r8cCjPrYA",
  "key6": "5LgVtM25JkdMVPivq7b84JUM2W6Yu2ag3w2dm5Jghqm7PpTage2ZgDhVZowgfKqQjNqqP7r6yaSU83zzogvUQpv1",
  "key7": "3UCKv4YAsmJKhUJiLhFybdA78iMREWH6vivKxYKSdnLPCqxvHvSnCc3qGWfgBZCWM2Jr5Wv56h8QBQ23cZZvqXue",
  "key8": "4SfL1am7VXHGaXtNRtPLxgEcWpbe6PDTcASZD6SYZ2xxStn3zdEJ2twvBnUfyMZD5XFfGEMPYUTSUs1EeUFkZz7R",
  "key9": "u2rQDPFuE1pRKbP6fYsL6ftUPLJ3P2q9mE36423i3Xnv9dYRLHRon48x8FiFGcx2Moi8xzaPBbihBkuQFMdWuWK",
  "key10": "5HuyDQdWQonpnUQktDPjbXRoJWmc4LjaHNqsyhSQUoLM2UirTLYyxbt3JBRqpuBiBfjPDLfM8TzFZ3cWRJsyicTn",
  "key11": "4EvPmmbdkkb2XqToUW7qPzzjBQZFvTYojH2dZQdfGcdJyZ8i8askykPDw34hAcag3UYv2h21BGyRhaE1G7Ak1frx",
  "key12": "MUYxjXxg3U9SLFTPUmrBL2W6yAYLgnxjxVSgJKa754yfKJ2mVvuf2psZLuMJ3ZURKev2H5TbMkHCRMdfCqvaDwf",
  "key13": "5okNX43SJDpAu1UmNvPADDJHtTmyJP44ba757X5Xp1Zr6uhGJUsaRexHWbXi4TgpCz3Ee6cWfU5XfP4fq3ccmYTx",
  "key14": "5apXMvUTcCdqwW8eE1azbViBFVL3efmKcnWySabhthSJS7mpsUoxT8HSTjDJ3dbqB8nSwUVB5pfhKxUFL13zsp43",
  "key15": "2fa9ncYq2wxpeDPCv1eEurdv7iZHNDiKbVgSVcQoxwZsV1YzLhve45yCgBVMBejQvAeqtPnu2f2MJ66GfcV6gBpD",
  "key16": "EcAcinDPLx2DBtVw13B1rAjKp9wA3xwScFig2JLJRVcT8GQxAtShBHaqpkshKw5k6Gg1q1XRXoM1DzWENXfU3YV",
  "key17": "4ysv3TDQfs4WEE39vKbqW6jpyZawfaMZeqh31F3QmodSJNeUThMm11df4Z13R4yTfRP3zUGEpevuM5yMUMkMMJCT",
  "key18": "638z9776XA7DsYdetVtKiE2fakno3ChWLtBujw8Kq6pDWBfK87Tfsni1NgHBH1yUdiXegkNAf4TX7bdDFB3LTd4A",
  "key19": "3dnwdV4TiCBZbUT9Dq3apz4gqyqC2o3ntdniL6vJ3hcZiXMtSZQ9DbBun1LzEWMtYcDsmMm55yi8EcmEjo1N56RJ",
  "key20": "287QAr2iERWn2rWB9mCMLCzwnFMKMqu96C42nrmr9Nc8uMyxtgFM39AB9F5EmtkMDGadaDx1iovRhprrrNfWV3yA",
  "key21": "2mC39GCvfPp3aJcFZ1wiFRvtjHb4Xv8UGZ5d3VonLgzhr4YkaxxLtvPWUBBRmB1Sf8XTMBUGF8n1nSYV3g4dWZas",
  "key22": "2eSkM9MFevLJ75oXJfFoFJHrQVX27ZFFzehc8yGEYrzMAR7yWeSZQWFaD6dmTqXnp1GNcbBY44uNcujaFTeoRzNS",
  "key23": "53tVd1gsnVnoV42gkCevf7D6ZQkJ8ynTCqkEmJuaEVSXb1mVi3R1ZTnqJR85g7zPSmwMgM7nkaXJBtoXkvYpwLsk",
  "key24": "59PCnik1Fibr7Qtw9GuR5iNBEsG7ZgyTLE5CVWjBRtdeYkDK1m98AZ4ZBbCTBY3qsQiFftvwEkEenFRTDaj36TTG",
  "key25": "frjXRGVkfcPc45tkzCwPXKpVhfNPKpW5kWHSi7AXe4P8Rm7hwiX9hzRAdqnLgMsgvjmPkVbAai9gVrJwjg7joxs",
  "key26": "2MfSEZGCMY8sQJA2UCbusgCfgg3pQbFV1jxcNUNDym2sEEBXKW5et6SyJx7kFEkZsM1tBQknVEM1ivrfcgm8MCVe",
  "key27": "26VHsGWnnfi57CnDzHyKpXB2Yxfiv8epkur9W9bLDfUZNgvbQuAvvsoWkuTFMNUCDzXYyhkMkb9wGYJfkZkpNp7q",
  "key28": "4SgyheF6N6tEE7tDKUJVipVAow1gCv86VVMowj7kwGogCRSi5bMFkQfyGHHS5yD1hopN6jZkSy71qx81bkgePbET",
  "key29": "5MnXnPtNZR89km2H5xmtZhtMpGAYPDPEMReezjSAFcGvHpFcubnC9z4Kj4mWVyhqQwrXLCBirTJb9MmzJLps9mix",
  "key30": "2iFAQMw4fU7JqSuEcEa2YUz8mgnZEWXn514Uwb8T9JbMgswkTXnKGnYcgnwS2wddvjYpHqfkse9jSYUrCPAtUt4w",
  "key31": "4H1QeaWmzkn3HXuGuom2rk5dADEW8yCDcpS8RbtUH4pcvNXDTYJx8LnC4JJ69ojQnY3WPpCCmhMFKv1RReD79PPY",
  "key32": "dEk5v5px3CE5bBEwLGpDt7Z2KXFBKq2Ui3qShSyVkUhc9cxwFwxKu59Hczt9Dh6UWwqgfpfJZjwJ1FmgoMQUzHM",
  "key33": "3H4jP4ViByjebMpt39j8dGGbFexwXg4XwKBhNYpDbhSGJqwzwkkuoehhciG1o1A7jHV14kZqMWn7LSJnYNswDzL7",
  "key34": "2n2x673jbQcgM3vkjKWu5gnLPjLsrHtBcsgsU6Z6dQDMm1swGoWzhLLJPNaskXWXX5pK3UGCreGRTzf1fkBtDnQM",
  "key35": "3rfsJ5kCfAsnoV6pBZK38oTWCNjUebCvfCKayKzZuHKkv7BC1HDkyWqT1Pwe4V8f2Ju245wL73vJ3XNVk56qQVjz",
  "key36": "3TNVCxY71pmK3x2Qrom1iCUQPQ9Ld6ERoUz3xskkG1S7ATain5DPBH8TKhr8ZKdxqoXH2M4rjHqUZsSaK79CusZp",
  "key37": "sjZQELfEsPMw7ThgCxSrAL1x8gcJdYHdZScPrswpEvEENRKJNyYqZtcUhBB8GTGjSbu86uJXsL6irttPwfpVZEN",
  "key38": "54CQcejdi7LVFPDT2T3W88ANa6zZcCRjtmA39raWW72mVzSmzessQnAcdoqXYBm7XJThDsH8Vd4xiu3NmzZiK4dZ",
  "key39": "2w7zStZcSLhioJm3NcLKBomUwNcLN4mW7QomPoWGQ37Q1SqEBhEcsVLKAzcvDE1tQzMZ6xXHCERKsytggUCoWN4y",
  "key40": "2JmgKCNuPxLw6NXH3PXP6TinnGRvKxMiEDTLRwR68mPPrY5Xb9LWBvArhhQyuBzEdyGW4poDwmCEdtVyvKmkX2V9",
  "key41": "2PK6P51BhN1oPFz5ABV7Gzru8wLeuybmEcfn4zYByDdvrQgfQLJX1buy2iUPZCsuDGQmhztbi2YStohjb9RENLR4",
  "key42": "4NyGhiaskmYud7Nrz2ygyW8JTQvDgm5yJ9e41n2YnngYmXiEcPwhTnHhh3qDYF9vvm6MPcAYeNJVgW1nMmjJvcjG",
  "key43": "2M3FwrTMHFM2ES9teZTikX5hMQrp6K2K4v1XF96RHb7PraCtF2UP9UA6xArQQTCKKj3qGhXvQbDxwpoSri9JiL9D",
  "key44": "wCdinpNy1b5Z7kecpdmX9GTf1ZBZypnZ7ygHPLBjNBXHfS8b39sfzEn3Viyf3vHgFso3Gf5KGjDnusVwGM517NM",
  "key45": "5SD6BRVHuHWjXnpBJN422XAkJXws7q4NczjHjj6JrgR8ZdP7XJEbZuybYso1mDX3PYK5S23fVUZ1WhCi7mMAPCS9"
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
