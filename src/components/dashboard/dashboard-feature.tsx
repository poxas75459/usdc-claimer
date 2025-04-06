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
    "TTqAp13bTcW3Z7ag2YZqz4b6Ja5d46g6YcB8GZGVtwgV1gBKsPKjtZvGKt8RAJh8j4atr3e9TMHTcHLuPdF5Ssm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yJoocqJuP8XBXFUsny2LCFTaRfTMvVbZMi9C6Mg5pYGXC7YJh33qYeY6UCQrpuWTqs1tLNqdvWY9sMhGDAYekm2",
  "key1": "R4zBS7ae5tFvQnWmEuaXs1kSq9q9VLn41gecLnjHmfYAnQgCkVRoAMj6d8bZXcsj3iUdW9aKMBH35XncVrV1Jro",
  "key2": "21y8k8Xw2MRnzsqwsdPJMRH6sHegvPC7YxrWPy2pMxUbkoWcK2i9GyNPeX3mpWSzF6C8Zu4FA595JEgj88mQweeR",
  "key3": "3fFjcPsGNeMKk1SdVpgU5Y6yVSzvDaSno39Mq1avkSMwG674RHWNCvHgHuYoiB1Z7mEJnxLrz7Q6iWKUiBLb3nFa",
  "key4": "5rGnkFgqajFzSbtQsAoc25jCHj7EATbs3GdnGZVPvC7V22YHtyripkN54WudhakSZK2vrRofRCgWzW9Xj4spR8YZ",
  "key5": "2detDHkEH2doR1DzUgUoTqXhoR2dhcT77ZwnheKM53V9CUu4op9pWVHSejTZKj5sRTNN3KSFwmYZJwrndJCiTa1J",
  "key6": "2DGL8Pfzf73bwq2r3iZ8V2Eabf9Ltf9oTa3rPe5nJFwwxMnFwTQuiqLiueLq6Dr449Puy4GatfCTu7o9DXq5KRmd",
  "key7": "4zJTJvaYQ22AXtt72AWQrHjccWsnrJh8S4qQ5b9HJ1SQ3rFimbzR1y4czVsqun74F5hUysqQ6WnmjFNhuyW5QS5Y",
  "key8": "5gavuR6UNGoYbvnRd9iHs1qbBZCLom9AD4ChUk1yrpvdxuMM5XLDV4DVk2Gf8GZBxZSq7VYnRsyxdhhwUpyKNHbe",
  "key9": "3aMWP6HNu7Fb6d3eivcnXRfa1ioEbPLyRnVGHrxvb8jcLpJatMeMxD5oQYReMLpUA4PbECXTcoxXZxJNzMoZRagr",
  "key10": "2Mm14PsyfPFwoJNC5evgWqtL9tccGoqLghx5pdCSqwkT3W1MdFGWvRmD3BDM2rZJDJUQC4m6dC6TCaHedsWSYBPL",
  "key11": "3EeSsvDhw8CV9rLCwTdC8fUj7kM43f39wL7KFPbFBLbu1L6yBUpEV6FsSzKPphpjsW2mNceji2r5kWmY8tq6qeZz",
  "key12": "4WYvHbTm5okxWxadG2RBw2cac5cR682URboctUzEaQEB4dat7KYcB7UZPMSJjb8QxcbXm4o7DnqDrY5FrPbnWvS1",
  "key13": "3CvNH6UqtuvAwFo2VBDGXyxQ6DQ9NyQ9tmvzmZYtJn4bEgQMBq2MKksctfYomhgYL552CQvvTDkH8ySwwsyrF7b2",
  "key14": "5semB976wCxT3CJtd69Xd6ibmQxLZuneVEF2czqUB8DZDwW1A8GT4GgrmiL1kcxdea1rf2cXTwhQfoyahdYBmBxS",
  "key15": "3YShktKKQXs94D8YXQqsVK4B2bxd3Fk77J5i3CCHod1NJtAwYBia1PT6iohsZ5R6KWUgsEhieTaewiAwb64osfe4",
  "key16": "4naVV2vDBYYE3r8LmRtFNACdQzyWFuXwMmhD5N1yzMEmuJsKPLtuEnSqDupWxpoVdKGas4B8taoV6GcgDKPmvs4w",
  "key17": "52WurVMAHSKWLEy2PBRWhjcoR7Qpknt386qxqTvbCHDVJZ8uxVkxRFvVaXbnuGvvDLTtZ93A1LkEhydFL1LSsaVe",
  "key18": "oeq1QJd4NauS1ugCe1SaDDPWwo4a6ai5it7JKodiikc3hD7GJdC6xSUUCqwFMQYCHVfNHfvFCFnJTmPK3Cn65M4",
  "key19": "5UPj6t9SACyodVGrgEVx6EzDYsPB7VTy2yzqr4dZBAwaUCHFBeZkTvHFuhN8MCq4mfnEC7fSCXf7Bz78iKjFuM23",
  "key20": "2zunvm2C6rozGfAJpgU77iFqVaCCGgUAT4B9qL483MxUzaJicpk7bNbaKMLNzgVkY1abjFwowYP9UmadUgg8abwn",
  "key21": "4sakRc8MiaoRkMxbWwm4Xk7xS9D5MhiZ92Z15pkV1ZWw49cjczCjnwVCXPuPt3JmUEKStCJ3tnLfR2EN9RTLDGge",
  "key22": "4YBchaEG5nVBUaLBXMywjwSmzhVLoDbonR26SRXwDtRjWcuZjSRQLyuyagMdQX7y5fk5J71UYyaeokg8fFU3h3Bi",
  "key23": "41M3EbfTcbSRMBZx4KtbXKu76zETbBQ4jvcPgCpzicuw7H7y18htsHUinADPEdBaSxVTKKFhhfVpTnpaB1i5x8H8",
  "key24": "2nyg3VhJxzfgagzphtQ3Ci5hc2zJrEpFfriRBnxCPXvrwEPJWq3yGBSfL6HSqv7u86fSneZ5KhY1cu2qLWxriUmF",
  "key25": "eroQWMJ4HaQgVQBgrCKXThHVcfwDbeJn6Utkr7BrjS6vXKJnHaw6aKms3uC8nctKLtupkDXZABQgYpn2woRUcHn",
  "key26": "45tJ53CAEBW2K6rfsg1nM1Agcvv8gzticcShWULVuUxwa5V2jaNJNLJSPdykTbAx965dundpsHYGACms3XZJfCyX",
  "key27": "3vijqdQZ7yCvYdQGDHk2RqEr6KVqsFKxg3ytz6raEUT5RfQRPtYpSe2x1tSs7AU55J2u2DJborMe9aiSAg4RYMaR",
  "key28": "2dQFm6vGEfCz1iUnjTMWMh7YQ939VZ51TKq8qJJuYu6BpBxUB8dtAo2Nq22Vu1RA5nDkrpY2R8BwpTWwoLVSvCiv",
  "key29": "34agf7RGLRBpELXeMrfuNgicAALKgnENAtzBe9AMthrqohbkcDasSWtatVVru6v3Un5Vf93FHCPFmqRRCDxoPQJB",
  "key30": "n1P8u8V5FmZghHvLbZpJi3rwGmqdXXdaJ1U9bcg7yH3dSHDMHwAy2rJL7YqqGuvr69L5gkXGUN1zWx82xwZc3nH",
  "key31": "3txd3upS5n7BPbw8WbAwih9sUBaxd1ijcFKBVjQJLAxFmW5fv5GhcTEJqLLuz99ywZrXf9NkUDh8KA5S2dHHSjEE",
  "key32": "2qavjV3atxft5gQpWVfnxJvobHUaaojuARooi3LqTyRuZ4EDRRQHNcSdVunq3Zm7SF5t1v5L8p1BSLP8nWR8Kmmv",
  "key33": "33Cjfj666ytynDXGsZ6aWLg2XwS2Qg9JN3V1nA4VeM28UJia8jPLcxxpju7zUK4ZGW4n3CKmyqcDwNvq4cN6mftP",
  "key34": "7FTDimQCBKCogVrnf3AzYqUNiE28tgEzLz34w94FMLBZEAVbEjQE4J4hUfoSWj9JEM4svnZhe44jDn64TSUSYWm",
  "key35": "38PCX5TgnD8kRrgMce3ASXQ8x1HAyo8813fWehLRred1Hp2KRse74y3BALBDxHs3rvaX9m6pdMC3dPth5BYYEAq6",
  "key36": "3cKFTWJW4zxRAEQ3bjRQ83upYzy5mfcffqfZtpeJrReVjPMW1r7rb2MJpBpiK3cUEYDNfKexpbiKsT68EWF389mx",
  "key37": "5tFcuVvQrioGA9Mro3yHpWe65118ni8ZLc7Re187X1ciL8qC6dZQdh6tfSqv3zvdg1yAyW2my2bLHyx8n9SrjW6s",
  "key38": "2G1vrjubMvbczUDXLjYh16fsiBLV3XMf5scqr9KqxGK1YT1ryZcvrQvCZXH4QSxfVqNANvK6Tr2cGmfeDet8U5db",
  "key39": "2xuy3JmCHQyAZpDNjAqyEhxSu6mN6Ei3wfdWaQmQVeceZ1EAspkzTCZEHd53X9ZjjdLE4qd788kjdbJC6JGtWy2U",
  "key40": "25zkQKDumACyAbZbKSxLWMNSWmGTDcuanrWw4Z9ytBZJUGUnGHk7C3kMppcjPURQMRjcdtzZKhocNSE5uypVnDf7",
  "key41": "GyMHS7adn98zbBuXbyCEUHeT9crKpkBJU9heMdQpQhnipb84azwTqrjq3Z9b966nptTWpWytN53GEQK7gjS5Vtf",
  "key42": "4g9XBAxJbxewgXsEY3wwvZ2NemA1nm9oXoipTYjnvnNbtVvwi4rZ57caXmccy4XjcyUzs5So3w18hRGPGu3u4xcE",
  "key43": "3QPLBA4zJCZN1wJeWaYVa2x7e3oZ3uWqe5LfvJetKXgEk6yDJC2NJivDCRcmhZgpSYAN1JhMftV4ys7Cqe29UeP8",
  "key44": "629gYUVcK11r8ezbPULRdSLaHQnWoN3j33AhvFzEa2vxog44gC3Ls3U5EkCin7huhaqaWJ3EkxSYrqTArXkmeZF1"
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
