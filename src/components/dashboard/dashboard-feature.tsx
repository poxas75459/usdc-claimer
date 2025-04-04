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
    "3DucXTaRyfkcjrC3iWrBf3k453q9kVmuigujsd8aGpWTfnMhFH951ZWdZGAN37tNRDDxGycaySYPfzueMwEXakJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gox9e3sEgvYAphyuScKMMyiXFBrw1dNDLnJXxC61S4yjveHDaFh93DrXNXfV6WMvWXByS5n6obMUACY5P21fGaB",
  "key1": "268m78ihZvRfzKCWWqxEAGnyqjYA2XP1CY74X1aMsqhgCZ85m5wMgnJwg7Sc1NMURjWzuKdyFeU7z5L2jmxZvjVe",
  "key2": "32J8gwJruUnMuAkFWPHMxBmM5SvhaepMHvLYGHDufuqLWdyzJuKTcbu7ZvBchFFjfr79NgN34wef2CdyWUQBnkdP",
  "key3": "4iAXcoxdaC2So7ErAcydDXV5CW6G7ck6MmjVUKmddqmqPNpoAPXZJekb4kSNVuf749G3CqB9fKLq96EoNwPX9bpZ",
  "key4": "36N4S2u9yB1JtPbS5QgYbcYA5ebcp8Rh9gfTCmNUAS7ELedp5CXBwmcUX7P4TKCwKNHarJiRSbutTJQGnrELG2QZ",
  "key5": "2MGFroXDtDD3wzDicLdf3WjyQ5bkiob5aZzgMevLdkSxsd1fqgRtcLY6JiWgNdpXnM2ifJncq5ZWxo3qTbgnXRmR",
  "key6": "44bDorzBBrvdypmW5b3YwSsxFJr849geccmyuPpHDaFquV4Ch6jHiRF7n88skW8Kvm7FkNsVV2HxZRjTKj5baV7T",
  "key7": "5YDXcaUxUaQ45mp6PYkUqvKk19QbXKuuoHeh5gZPbbM6bArLsz75HzHPxd3h7q7kdC4sve7XJAATLiJG1gzfFwPH",
  "key8": "VN1gFgWwEPCzUPHzfoMF5YZXpwAhvLEXdB9JZxeBR1dETtBNwR9g5sXdd8WYVNFGF2GD7iPqc3S2kJtJsFD3amn",
  "key9": "4ZQ3mdLTWxGt3jauN1L26sPkBQ8wcJzfYTchXvN3VErZzUHZVXK81WTiKTksSh61JMz95CPX9wdMQguPrTsWqcNT",
  "key10": "5NeG9bRoRj24PfvkMS6sE9NKTiUUp2xR6d9KaEWeGu3JrTNsZeFeAgF7wzGFQrFh6pk8QW3Cr7VPcma74a7Umj4C",
  "key11": "26vzhqnBJNcXndpTgPt9AtnsvMsHRcQ6gfiRE9u5QU4GnYdBcuTKzSXkiVop1vbpwVbUqQaN1K9Y2i26JZNKptq4",
  "key12": "5wQfSCBBaWfm6XYEKyTctuFkMVGTPuqdrJcwC8L7ULq1PWra4xr3xtkBKDUYXVks9CQBmueDqXRgT86bTKJPrX3k",
  "key13": "4VW71SUjiBV926CC6XZAou1XPHDmrSMFgVvzPy8rb6tW6Z38D9ppqhCDHFXGHRcSmKLBscyaajJtLQwLWdrqNbU4",
  "key14": "5Te8dVnCmddEJjGV3YPnjN9SJNKDEgMAfvoCRKvMhf8LTJo5AC5Vfu46qdsLYj8T8uetRRt171gJhmkTRUJa49Us",
  "key15": "54wHC4KGb6vMg4E99RyF5vdqhBvCmK8ARqZwD2d27KkTWZfkhxjGAAiRG5e4hySD8zNK1AAwG8UYy1v5xqFyVhPV",
  "key16": "4rWtTEUczQdPmkEXWGV9jQpXy3cyPWXM681mRQ9njeqpiuBRa8YChTsd1AcKFe4WBd5VrPGiNkBVYs9QKPu41L4n",
  "key17": "jicykmk5shCW699LgZ2nHh2SxkoBiJGnRrSfxD5LDJJF1RpvXpgDZkNo5mHzRjM7tvpcZeXEzDRwTVXaHqHMjV9",
  "key18": "4MMqppjVutJErUo5rpxY8tTPqHL66p75gzr2nX78bGMBjLPr46n6ZU3xwmndnztZdWiLPVFcDkqxjWCVRTHHrsdX",
  "key19": "3RyG2DpJbC5FZ98p2HBJ8M5y52da7Yv6yzPMzDE77schwTg2jJfWixvGkgDhMkudH3gRBDgzyUZBGv5KV2smxH7r",
  "key20": "2pEwgEYNUR1rLaL6cHigWuiF5LeyqatEtUdJ3xb2aLWMmYqASzBKJyxRm87oh18Qithkz37Lgb4xqv9E3bi6rjgR",
  "key21": "4HZfkyao3BRLbmCHbZvKL2dKTTfU8BDkA7WwP8WfXPFVPZDMr7i43sw1YQKGA5XPFKw51C37QgMoyQ9jG5iuTLre",
  "key22": "4sCsV9VyAXr2AFyAzgLeJ6CthGM8MNr1p8EnDk743CjDJ6sXNayfuo3UgEaQNH8j6hT7cuLzfbFcsTLw9cgLexaP",
  "key23": "3PDYBh9Nr6mk9mvoWxeFyjgdFtv65A6ejnjqMS26fB869d4TaSEGFhNRYuM97b8G8BQRbQKc7nwCemUrqxaXc3N8",
  "key24": "5YB3CZxuhQjRFb3MGw3Pf8UzZVmMK8mvayU2rtDm4QcQSpp9vYfzeJaqDbT3mJqwwnMGJyCzKSWJh7NdNowDdGd",
  "key25": "3StT3BpWsiEoADeuni2REuwjMC697USRPnyEUWm9x7nozKU7KpjNDHHUrkm9TRtuq2Mezckyb8Bixuop4YEJgeKw",
  "key26": "4t1ezwfPfjqMgPrEA2qr6yi2kRmQAVjSfYmtsgXJxj6wvjgxCwVtAxo7wWr8grAB9CKhCSukhXqguNHio2JZTKAc",
  "key27": "26mvXiPEp1YL85o57rPNxgMo9DJacHqLZQdVzsycRBeATvCQuSoGJTUZwZaUBDxKi36A6pevMHY68JrnGL3fhsju",
  "key28": "5Ma9Bgr5fKm42KdZzfCt66nikxodA5usAextKjgzkobPCs3eLhNsS8W6BbZMQZFJ9zboPQMAGLZ3Tq46Eh8z33r9",
  "key29": "2PiCJJMRvMiKvPBe72FdS89geBbR2wymfEE7sAQ9BqV9q4uLQLKigrpcTDT3Lqxv5WhCNw3DcKezEohEiAyqJFXT",
  "key30": "Z4pH2wc93sYqeDFj5jDf4zskZaSV5m6UPTwZdJRqgRtRewqVyx1yeaihBWbxZuFRUXtiEuu4tN3nW724SQ6YN6J",
  "key31": "3HZ1FWo5RFrNX38Q8EoWfWwdPJstptPkssAXftPfCcXxmVRqSJMV2HgJPNhghr46qxgL32rMkJ4L46bnNzU5REJf",
  "key32": "2mbsKMTe46bpSVJB4F9eqypyM6WQxjN4jq8wkwNmqfnqw1j7mogBtArdRv2xqNeYY4hrjjRBXEVqHr71G2YDXGKo",
  "key33": "5GvG5RV42Qg3xPVUTh9d5eLJidDSiPTg23oZ8FtuE26FhYMvYpFPQU9WjfTxjSABSbr8G58CxpQqJme28E1FinSH",
  "key34": "5rXxEojiGNBHssPXmRsv5LY8oJ3jaGxYXuAMkpxEgGQCbFGpgWpndsPkJYyg4jubpeEDjn29DHDh1Z6KhbAVvoSV",
  "key35": "35ASum1j85dxVncZ3tZEbmcSZkHYSXLmt2XrUBzGNKaojdUbMVsrAKCKUUfTjZ44yXcBiRD1M3MH21tZKeux4bcZ",
  "key36": "2XuiQWPwKQ9kkLNLf7tkZdJ6ebZB7NqsKbob6wsjn6NL2X8hzX3nYd2uULmLYvorkzXNVrpn3igbdYSiW7vHT1Vm",
  "key37": "5ditGhRE3W2DDDSfE1684zDVdKLBDKmdAc1UqaS3GW5UTPSKbdVjyzuePrHi5joJtufBbJ7AcmLxBhfGHV6dTNJT",
  "key38": "vLzhgHkWRkYMDk4uqgBG1DpvDPrpE3VtA4wZn5Ys7sjgPjiRisKJSNoZkZZ1ZowCTaRvBypVTgPQ63pDdRAvKhh",
  "key39": "4MCGphYKAiqG7zkLWSnKbXprG3A6SWGxk3EcFEu1BneCkfvKQFegxDJwayGDrzTn816TNYsGTh2bLSoZ9LvFBmc5",
  "key40": "3QPBWCxYyiEvRyu6PXiRFG5CZ76ZKsDjkxPPzW26vW1RaoffCxrfKSbTSoTpuRJYDFNMD2k9fLTcTH7Z8Anayw7j",
  "key41": "2HJdc4rsxre7H3m4UnqHA4byydnysWFteFjuuqPg3ybNgejV6r92vDTqCNpznSUqfS9MuWjaMmvfxNSfhvdHaTDV",
  "key42": "gRZtf5f4zK6i4V5RdHZH5M1ovwfCP6xzeesRnvShkpmH1UCDRjxqyfcz6E1BPi1oFbhmeZZCieKoyEhBbqpsKk5",
  "key43": "4y33z5tciMZ79HnA7HQsqV4hAyEVziDVANUvSX6gJq48EndHotufQUWv6kRXk2to2WVpS51GN5QeUACqeV2ARMfo",
  "key44": "25D7R6VctZiwQELjnAp1utyg1CcZBsYET6878kXK89ddyUokw4bmF67mRmMNAvd2qHXnyTENR8TyQJNU5TKU9Yct",
  "key45": "4Bu7H2isuvn5vEzVVQS269XjqXXNkxbqTRpQnPWmt5nJcNM1Q398fNp8erHbkU3ZG464pqRjhy112J9kwJsQwGZW"
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
