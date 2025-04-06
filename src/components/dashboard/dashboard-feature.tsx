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
    "fmWUWeSwgRj6x7YSa4iUsnvTqhwjsUhfvYzMZJCKoo4Jt6awkkH96MERA3yEBtTuXfdhwpoQA4Mc8xhPt3NxAbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rEVoJeFzTwTQuzHfn1CVmhSddHsD2kzz5XSMaHVtJDMvH1fcvVNd3uxbKck1mmytsQkparJa9SBFCsEwL7fGmKm",
  "key1": "2e299vwBoBgXTg3WEbTxGZSnGoTA8tAgp64z4u4U5A4nRzHkXndSqYmBc2DLU9LVRKnSb3SBJ2vvQEiizqiH1P1k",
  "key2": "5kXEspgHFJJFQzhnJbb75xJTDK5jsAP74j4XfeSQhPjofrLBwpd8ifB9m7jGMDHD2pMT1WDWMMk4qmCWcWLacS3A",
  "key3": "5vgoW6qFunCEsVXiAGutgDhMy4rApXitaXs8nswXpERVUDptdvTcUtP3opCDRYUdT2Yj5uUzHm3htNKNMM2NA35j",
  "key4": "53oaezLPisxidydLeNUR6JDYjve5yVpwxx4PsgURoUE3ACeswcA3nCbosRX5fTkygMa1jGMFBef6aFFqBfa8MQNA",
  "key5": "5LXCH6iLBZ3UCnvMdTgXLZGXHUKsypJgnPaRbwzab863TrfCzTx5HpGjm6i4RvZgUyCz6Tb5EAom3yFEQDvueYHX",
  "key6": "25TN3XzSMd56LTDsq99pVn9TUHN3ADRtBaQFXpecVquumTbJQfjNc8MPcwG9QhUAWyTtmnatPpSVqMtz3aF7hDh8",
  "key7": "4abDMtAkiyFwugSoHRDNoU25P7HSyLuDhENAEuCPSixRRtFU2ykUJmNgxkaDYUhWkR9dAd41P8x9JB6BTfuVdW1y",
  "key8": "2LPS7bcffR1zNQVWhU7bbJEkW9iye8MBQHGQz9zatptHy8c61CeH8mJ6dLFzYHo2ZqWcZD8TYYy9ZQ2MNb4o5MJ7",
  "key9": "5QFnqcHS5TGioaRoU4jtJaawtBGxU5mYih7oeM4rUfN1GjyvhPyHJkHuN5mVvAmpyVvvpLuNdXKZg8WTv83gNzr2",
  "key10": "2U9ovV6TYGTh41UDU5W5BaRRvL3NpEK7ujYW5oeQLQQoFAC9fDy4ZVUAnzDK3oS3kweQpG36QaT64vVZ6n1gLiRY",
  "key11": "5AC223fxrPdsyvRQk45bow9Eni9YVVeWubyx1rbMtFtkqjUDkziNr3wX7nCsDL442a6nrvumukNUVdRVSyAFQjEj",
  "key12": "3yCaAeYKziUtwMiLQdqSWxmY11WHVHFxBcBfq5aQz3XfStge8KmR9MNC7AdJSgr8ovBB5bQmitS3W1MwWsnP3gZW",
  "key13": "2Jf3RtkV8iPd5ufuCnbezvvvEKAp6UcRmgAwYLsvz48tx5uKYMh7VVhNV1wVyS1CYE5xXKN7bGRfQHpoKpByByjW",
  "key14": "JcUS3PBKRDVfZhhrkMFGGuvPhh1DxYaBbp1T9F4s7wcvnZxA1soedZamUd84jURMSC1yXsDtrRxSeSoB92So9bf",
  "key15": "5HiWK6NhzxYazAtWyVPaGpdcFSyC2BcBTLgVvuGYc2ZWzJ8jg17w7NYqMyUuks3n47t8KTJrApVDVWse7tBputTQ",
  "key16": "nutJUEovDbaAHWkAGHwVyQBhHnGFraRgwQCTNV4zxVZMkE7WfeV2cyrnriWMm5qhyiv3LuVD6oVBr3ASeYakbcU",
  "key17": "5GkYuJHezuWF9oTar4gwuVXNm8sM6yRd4MccunuP618PMLVuNSTP71UjUJDCLjAx21GYcyjXbcxCvJXmS3C3cQfU",
  "key18": "4a2Eq43E8BTxeDFX3Cikjtt9cqywHe58voCukHrPH7zWjzTkX2J5o4ksdkghg4Jr3E63HAF4hZ2YKXYrt9t5Yu32",
  "key19": "4ecqcbQWKRQyeQ9W2iXk3AC5SXLUh88gj6ygMypuzX9DY1uJqC9RBDNWhz3WAgDPGYZGsFPRst9Fbq3wCYNM3maN",
  "key20": "2FDkk74YqSD7giah79qszYptaoFh9Ft3wNzMcs7AUfXbCyTGp9Untdvwxozdape3nA2FYuUS4RZA7WwynHEk6sS",
  "key21": "28Y2XwiUgGawySqmzvjMXiXY4qjLiFCqezkYNcPntmAaJXk3dnxZTFFwPAzJAzuBSHgjYjsjFo7pecnabEqUU5GG",
  "key22": "4wKe7RLPQGCRxNKmeXhxKa5ARjXSrJVuk7DaK5J74w5f2rYTVxyPsDSYZhou7z1SE9nQNrRmRMLr2TbWwZPWq7GX",
  "key23": "3s1VGmEdqt2itwX8aqC3iGSoMzRc3EtsdP1NxgUeq4qacDbvJpLiMpy7qcuniKZdVbGo38An2LZ4aRRMr7W1hWK8",
  "key24": "59NtYRDSDWGqeL4kXXrJUZaZyyRMBPaeWB6x1thAR5XQfnDSerpy8fsYGsU7nGu1CNDmDD7Ly1tE42mWGaJR9SCB",
  "key25": "5NjwsP74fQKrjoXnanxAJDRVUHBACLtyJKhYqUt7uKHM5bokM3prkMtSyaw9Ndsccaw988qaR8SLfDfTvkTtFr9L",
  "key26": "3F2DmkbpAxxK2ppPqkvNbANSempnjoqSCTgVe5z9KboRhqtbJVFsqYeHzyZUW8jRZJfYey11V5p8TC5sWo2ZPDBa",
  "key27": "28BsptkboyUnxEUB2BV4vYcp4a6Pu5wkG3fBgrBBuB5SZCemVpsHZk6aWtz1JzBV3UBvSM7s2JG9Ad7DdaFHRJi7",
  "key28": "2uEg4VedLspAShkB6EuNEJ27hcy1uSwmdYuQDqNn7LT7cmvVxNgEh7hSthpP9T6d292AyqCi5Z6hN1DjE4a7wDMV",
  "key29": "4hq5MgyCeakvLwZt7Z1kWb9oNZ9475xbHUAMDNffaKmis7PxnX8F74PfwkLe3HvWjkqixmmMbBb7qb9xUY1Psp3W",
  "key30": "5Y9hRHhsTjLL9Tj54pSiaGgKTHCXtoSYkhP4yNZ64usP1aEq8DgNTRWzurozCkEfLAyzpFP9mCJ1HiKbFeHewjS9",
  "key31": "4nUqmBHsrNNUVh5XEbJGZDeNCmsY9ogingDoTdS6ZhY9kiQxjN4B13ppBVrNUNp3mXtVVp8bp6axCRhVjSitUvhV",
  "key32": "5bTxjZXv2rTGqXQPmNEwEHzwKiuXYQuLRgTrdTKspwP1bRt3cpcVFqDXEJTALFn4MNdWBT3seiUkqyQVVA526RES",
  "key33": "64tX6WLCX1mRH9Dz2VqRjvGokaLHDNLUAL4s89VTsSHLGV2nwizjJ7BYaonNbcToxRwNbz8h6MCMcdxKQ3r5mb1W",
  "key34": "4uJh167owDSzUHZTorFnQ6garpCbBCs36ppuKUKLWP2t9bbckvPMKfUo549bcC6DhybpLvpF6gvYUepp5mPPUwDu",
  "key35": "33VZf3JfLRVmY41NEXnHtrDK2FeyHEnZXTayc1imcAbk1LPMUdf43bGSG4zAKhNjacMUSkwDW9TmjzWwvDuLy4UA",
  "key36": "2wF12BiHFa36qEY21d4n2gxQXoRjzGo187e9WWTphHGcH8yCngGRi1rw9ddhiAtzmnAFNbuGQ35peQerjySZ3xbw",
  "key37": "cyH3CDtcbANcqWf4AHH2aGQL1vQ2a1M4kERpLyq9jwJfRWUuJoYinzm5VgRC9J8pgGavKAsaanNnZri5TwUEQDF"
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
