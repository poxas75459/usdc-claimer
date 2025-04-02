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
    "2H8dzdV77DZtfVU8J2yqo9jYFTtSjHgqSsExDbdgX21R7PrZikGEwb28tbBcKoFshmBHGnbMZYmy6MMkfL4WS6SJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EFfGCJv9bo4HwWB6ideq93wrgHj2ZxKPLgVkg2CVvmWBqjjTMDrBTPgaEtwbj886VKdeRrC5uSM6uaCGHyGzR15",
  "key1": "5oaMsQBqdLYUqGzLkeqUt1vUG5dU8awmUpnGA4fcifDELoGV3fd52Xt4VNa4s5RZCxqDBjKe3Kz2SVjKuTZosNed",
  "key2": "3t12tNyLT18c6DzwV3bWEbo1bBrcAbituLoV3USfH3bFXsQWen2Mvmiryfr5AHWioqMgXDShT1hbK1JYm6Fp6wNE",
  "key3": "3B894pj82CoWHfwaaxtwXohXoX2TqCAiNfN8JhtA8JN6RaPdFSNVJyRQ5sDyqL3pVunT2VANfPyiQGRW7CSycBxU",
  "key4": "5zbNaFMxhBotbW8XtaLihMkQ12cSuk3Lbv2un2CaLH1V8isyaME7DvKHeVXMxKTgjZw63STrHJvGBCa6HtpvGRwm",
  "key5": "3PRNRuTnxRn2u9wHLiawk73AvPAVn6sZJ4PzE4W98RD2pnbhBWzipX2DKSm5qn1KjQxH6sxzN2Vn1fKYm3wvGeZS",
  "key6": "4zB6frjRzWb4fXZmfoY8FG2fWRXaWacLpc3KWBLWHtYYcJLpAdTrn7WgVKfyQCKwFxMpNMBUyHrZry9CM1A5kq9Q",
  "key7": "2H6eR5Jdi4q7W1QJyf8Wai5vQ7GujnPGn4SBismFzrdQXRbKRMFa5tkG73QNhggSN3hCjf4aJXvEQGTFEeTYw7uN",
  "key8": "2ZXhN9SrvzUbZAmZk3rost5jsJW3bXxXfq4C2mYn91R6Uc8DiXD4VoTPp3eFabMiBNpq5cJ3eP3WyxJF1fsYRzWQ",
  "key9": "4ZVBqdDtVBzTgLdzLHmGPuixRZ1EQDCpxxH4Aon3LDHzjdTaUYHwMtwox4y4JZCqhrSuaVfHQUXwejrpQcAK2v84",
  "key10": "6GBYowwn6NK6japqWSVUcWBt1kYDceffz8v96nBeHMJPL5WHkwVw4q3aHNvgssuHqoVphC63RYMwnozDACCT1Fn",
  "key11": "2qK1iptRoXD9t2s6TdVxwitUikeNpg6W7Uxz9jN74H6CDzKGz1Zm5NaA59pQdzw8PFAyauc9Dkqm5D8FwmqRqgDK",
  "key12": "XcTQT8bXb8LmaKNJmgWErcUvj7uGjTNanpNcrHa6tA28956AgJBxWC2W8vK9m7n9R8bBXqdFLK6fKfxtAAkSmu3",
  "key13": "2vi2QN7tUraJKpjyP5RfrKeVJJ77cwSzdipUqDGgC9EJczP7ek6L7KPVDKwLbp5NVPWwadZAu1CMiiLDQHg3b5A4",
  "key14": "3By1rvBAkBbFgPQZxXGe2BSBdRJrATL21SKXBjPBLwZ7Hzyd1AKuWzUPGmTgaNptgmaboNcmweSBeyeorsePNmfb",
  "key15": "2byK5PEYXS1KyQLrbUnM51sXtVTVvNsNxSbd1yb7owb9M4b2dxd9AwS9cTgwiHyEA2DXAbHwXLW6TyG7xd7HiR6j",
  "key16": "4TaApWQdd2C4bTMGKGyi8gXF3Enr8yHRHffUVQkqpgMwNq6ZZNiHUMBBQFCTMk3Lb5vUEaURXk8G5wtvzw71sxGY",
  "key17": "2xRwCQWYrpuqWdmArsUNxLNRK1Abs3g6Sc11GXrpny76qK3YTEyzAgTNFLng27hCT21YmtCBuW1DKDVgTRUzM5to",
  "key18": "51UKumEc6JTHBRWdyM6fnvkjTMwt4NiqpsMGnGs52AvbWytu5Rkzykf4hoLu6uHQ1XXCwE1Y57wf1adpE6KaFDBG",
  "key19": "5PNLJ77nKvrhZmqip9tUaqVPZjvXszxZg51QLsTTS9WanvDpx9TSkzkwdMxgvSCbRJ5dueKiMwMyR1u9ADsqEijY",
  "key20": "5Wnq6UzSxWJykotDKMeFhXfqpnvJ9JGcbwGedptbPVmais1ja9Z7VUcxEnCSQwi8vzj1hrxmxnL6BpBYzW9C92cN",
  "key21": "ocGTCPzFpZbLkQ9p9VdayC2Uwm7GL87FrvbFmdo9wqKWCyMfNpFzCT2LpvLLpagd5jszRvkYadgd2UdRgVVbWY4",
  "key22": "5A68uXgwGjvJ66rKgQisDvC6iPm4ZZHwqTkdcmLZK5rGuqs1qZHYwvj4kBbLQc2CEAeQmwGr4aDZaeDvzNnWPncs",
  "key23": "Mn7WsinyX71zR5LgwBPCqs9DctAtqG5MyZtp4D1T1FEuwVMdXyseaRFxUUaRsTKGtKrBqin9drMy4WrHQiJN24C",
  "key24": "4P5GLAwZz5nycW4RehiNBAqEV6dZch2yuV8jV3TUfVrsTAaRniv5oGCVMqzACX6TnWUDwb5hoUnm29SG6PQdpKg6",
  "key25": "2D5AxGQrEZ86VuBBNc1SRopPWsvw1QB9aiPfNgTYurHxdCYGo5A3opMwfurvCj8wCE2Adwm74KgKr9kuY3D7rYLt",
  "key26": "21f9WMbZc7BgvUPcx6BWDQRdeWmCYjyAjApvKWY5CSVdkUHhKfMihLcfJfGrt7sHNxUQ4KRDkPACyzhVgxKQewa2",
  "key27": "act77sDAYqh27pQEJmGvSxwMcV6tm8R8DL1bCo36SZqNFW9gkpCcTBUCBR4VutPqYctJLnnwPU79pgz4YfprN8W",
  "key28": "CeDStjYsGx5N9y9pHy9PC3fEu6ib6ZYCjbxLZ9A8GmSKEc1hEhvZHfVzpPVjWduWmGQ2k2D6Rt6TL8YXoGNnfXo",
  "key29": "4L243YjLceBSW5tmhAQC5hXaZzWmxYkJSnz51dC1eT3EtifDfyrk21U9zokYMczQg2e9AMPjabVUnzHzxmrs1fLP",
  "key30": "31aXxbMV5QGr87xHsrkNijAVtvGPxEZRJpK87KEWvpchUJnA6uKVGoacR5dDcyZU8Suo2MuiyBCzz4ecbi3YA161",
  "key31": "47pCYw3mX8mjYBnJHSHeEKy5frCPu2bgsmq4dUQ5Vu5jrtBf1DoHzHrCcPUKDB35di6G72pQSg3JNSpJeepPQKUi",
  "key32": "3kNrUDTLR8xVxvm9C1CYdoxs6eBUhwCjQ8H2bME6fmN3XsyxZaWNWEusN3HQb28bT7ZeCPiA5wzVKETu1EjdUm8S",
  "key33": "LfdRdQ2MuKAqvrYzWkF2Q7bKJByzJcdi36Aa4jGPAxvdBt2TqRsnG4ZYfUk4GPN45CjVuxQQRjKJ96xhJ7s5L2P"
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
