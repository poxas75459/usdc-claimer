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
    "4ryqUCNvffxbNboHbqFT1oEad5WnhXdfP87Nig6tXoFPwqNQddhBKUvB1PC5AhMHAUkcQ43JwssZEXnNBd769aNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U1JLbUXJGd8w1oFRG3EFdDuTRUNxFV95wxxEJVPp8RG9ASDhXeMzPuRzz9kUq1VxXTuYGRY5A8SL5WXec2RMXp6",
  "key1": "366vhknQomWNTy2zKHdXzWRCzFXa4THimBCRPu3actQJ3inEs9xVvsbDJs5BCPzfozYxY156udnyPGXeMs4EUf3i",
  "key2": "4kVx4eQz9Xw2kzgPuiPM8XGVNq3F3nJkuCPyKvDnsJmKpRwY6Q54oJWAnMEYCzv2iM4KRZCxDfEYeFqLt8YFh4pM",
  "key3": "4rNVaGHDkTAfuiP4tVJbxLoXMbbYWojccCrHaBg2x5iW9dpy3Fu9Zfv3H5kMZy5rbFvvwLH1RV7ncPDWdL1nsqyJ",
  "key4": "4kFUPctsjVimy25k57igBse9n51RLpnKQSrp72f6vMoX1E2WFftU7SWLKztzVwbmRCc7ceu8Ewah4bb86tVHocne",
  "key5": "4yF4muRgJHjiXG4TTT9QAyPMHVmHgR4HTK8qsGb6kncU97GRdPXVhW4DQMcfFczbtZ9dQ2yvLaK6M6JLun4AFcBe",
  "key6": "5nvCK1eAvdEKRYUohHMpDTE7MTxV1QquY4QVQJ2WWPZD1koGf36jenVT1YgtdotfmpsqCxZspiNz4r9tcTby4ZEE",
  "key7": "3Y3Y6WTEYxZ2VpCtRhawWCQYKm6dQ8CFu6Y1u6YacAmd9G1Vic7AE6aFYdqSn9XS1H93URrLjvY2Y3o7GmPUBHig",
  "key8": "2p1yNqmLHiH2FMU9nhq5mNMPVb9spagCxQoQqPrvDcLa4MPJw2pnYRrowwYUwAMmP3vHoeeZ43gvqPfzbnXansuD",
  "key9": "2YqMj7KHSjMZvHBDBQdNhx5d8Z1Ng6EEeeM2yqzhon6tfPQyNLV9CdJDccJwVhb6LRSXH8XSpdaUwfhC8cbyXD4q",
  "key10": "2KwNes49veN3GscS3sCA8seS1c4DyfjPSDAp3eRJru3Hw59kcXRhHa4sWmPVdFPZdeGXo4w6hNbqjfpVH1YVXmy1",
  "key11": "5gf7Wug2TPC4vuTYnYsGxi12SLypyREi7uwoyj5fXesdoHvQupAitEhqsvA9jDKoCYrwtYqHkk8cEhWrdJKjoqvd",
  "key12": "3a2dwYWm6FVXnsDjkWNrNsLZiJ3bu8H4Z9VRRZD1oPxyAkG4eCfazDPKGbr6EjV3dF1cNPVQdmMQ2kW9wQQXSM46",
  "key13": "64mawo8gdg2pUM2wF1DibkdQHMNDkMCyyuDHKMhjPyQBr31ex3527LrNbwuHey9BqPwuzTrKK9uru7BKKKMTbuyL",
  "key14": "5G5m5rZGte3DXnMPBmamA4TyfxdyWFVoaNDQdcRJqS6zwHW2ruiLAt6d93PKcy8gPR4XQEttNjSgS4H3EaHK2R4z",
  "key15": "4agieUf6Qv8bYxdfAun1ritJag9CzhNopzuDbP2jh6enCWUiPeLjzCCHns6adPUF66RnZCnnrVDSbD9jRCBMnTGf",
  "key16": "2jrgY5USnDrmbUhcvcP9X6nxaE3YvdF1mKKLKGRGWshg7ikK6Yvg8MEDsD8pr76Ya9TvfAzvAxX1kmQPJCeEEmAT",
  "key17": "4RwXhroi7ZdmRdmBLeR4Hb6dQvdnEwZKSTbY5xUBCmtvUEuRb3jfgoM2xCMQ7E7WKYdbYA9RktiV6bWTroxmn2RY",
  "key18": "3rCdc1eLtPR69ZzjwTs6vK9ire4j4WtAkcFkEprDkwWQerWoMX2y2Nra1xqPAk149cTGjRSLapiBtQM3xjPsEf5",
  "key19": "kHFzPHUvz6K8nhA5ckrieNTvPLG5j9mEmuxsKCHBVorbDu42DowLGz9ECdoBsqWDhv93cpGr679scuqDVT3swvw",
  "key20": "4M92aNTnMsAgxQKX2PMGsGXgMKhPZhFSNtuCJyaaFKnH9Zj6km4jMGyeXzTwjeioFCy8na7AWA3NdPuJAXFNZ6nW",
  "key21": "5YuxwgmXzyMtoM37qYWuyNmPPezVEJXjQgmSJT4MMThmTtrFTtishCAGstcnjk5wrQQGUPbWSaGLiP69jGnWnDgj",
  "key22": "5EPv6cZ66S4ocJbxTLSzfqeKP4tgWvK2nw6xp5V9xE8vcMAF6HA6MFfaWmuGdLGFYihJhhML4KxDWsDgV48S4Lnj",
  "key23": "3owzmSC1eHJRVE9K1PmYDE7QPELtxbTJGmj9kTjPbxKBkSg7VjsFbRoRXH8Q3qBCCQL7AuGDE8HC1HeXMgsp2d7B",
  "key24": "qbzasPPz17d21FpHcgGyedbGG2TaAQTCYLKpgJya9bkWQrVvEoSz5pjQexxJh7cfbMAWmWXAc67sCb3SEU8BZoP",
  "key25": "4fFsfExCgc9J7GJJG3Naf3baUSeNo5U9BVBeURboTRbx157YRR19NgoMVM8FU9zpFEB7eNZ44ye11cS1MN7WjUoa",
  "key26": "5rzAV59RxiWysWSfY4hpzS22xzVv1pXzUTxA3pNf9Sme8PfFqXktM4Hccq8nza4w7TF527VzHkYi34WuRirPAvS6",
  "key27": "2ShrTYd75R7bdjxDQtKyCN9cucS9Tmer38PgLWN9LVSpVRB8JC3sFfeoNxpmxoKHLNdzpSpaXws7eoCEb8Goo31F",
  "key28": "3ZRi2MRnAvESVM6WPKpcxNZoJCNdZgtu3Jxwvs5a1QBExUb3KYtNFi6gxvCvN8EoCrq7BU8LLoHJpBt77CvVuP9p",
  "key29": "iq1J4g2Av7AvTCXZDprwy8L3SdSefK5qUKDy1yvx8NRUPCupq8n7PQXmgwq4KyDJ1Q7ZSrgrZpTDkKEwXiHBPiE",
  "key30": "3mNBMnUzHBouKgmKkSTuxijmHQVpdWvfng1ZeFSUTLydWDtKM21FM3HrULHoY5gaWkakURtqaNEaYDHFaxfptTvg"
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
