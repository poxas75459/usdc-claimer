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
    "4ifkkveCqR8DSswKMAH5wwUjUg3g6gN6yEgS94LB7tWSY2YEHGFjcXrTv3b5PpLE3Z7oPdvzgyKfSzDjmGDmQSsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qTbCDjRbhn5yf26jWjeGfh3yvLt32mb7v9cb3pXM1QgTb881qCdWYzuxi77E1dQy6XefuUXxRRwmHyUirSYokQZ",
  "key1": "2R9aDVfhyPRtfAYGWRuyVVE6eQdcKgPaaG6165QaUCGZbBYMNfjKwzX7Kt6AJ8nSe5qtEvBoxBh6tzCNd1mFaimv",
  "key2": "2MgfMDKBWA9CK35RiUFC1WDNpWnggwaB6DnASJtBLvPvUbEJ3jH7vBTrdsoYkL3xUjEw7dYZN48t5N8FeBTZrvRY",
  "key3": "7ofnv1Lxq1xGd8MtqhHaQFYnQgD91Eyh5J3PiafPaxsi1LuDqvHyHyGdBPfrxX4ebNvo3neDjyFb59R79qe4wUH",
  "key4": "2pbYAQSdeLQfdSG6qzBCjh7LRBA9bokRLihPYNU7Mej6Ua1GBDeRefSWU6yHeygnL18CWBJdUhKkgMvdquNevpc7",
  "key5": "5dApxrmWAqCmYtzM4i3MZ5QWXMfY4tgm9CYRabVnGBauUhGnFqH8pMX345nsgPJoK2ZQm9pvYpm6QFmuXRx1fveU",
  "key6": "47YHDwsJ1wQhNaVZfxX6x4vZ91ZYZSFmAvVSF3Ziqzt7tHJ24MTpkYryiCAs7srBsS2VaBA7tJpQMHc8z3sVMw43",
  "key7": "4YQAPgiBSt641md3kHzXGSHLW3Xp7B54x8jg19yB8np2RJqohQw9Kv7c4HQHXrv9kYU2FAZzbvWJLTduponfQCBh",
  "key8": "3ghzPSkToxNJmW3hSRiSpSzpCk6vbKMQ43Cfsgk6y1wCvhmULzHNah9THdsnSbmzMNc6wZQnV2YTTifEhVceHyd2",
  "key9": "4HrBt1ZwwDApWyhDeW97caTixHaQh8Vp778DgKD4G4r6c3VjmrdiTnzMXZVUAyDXotGn2gkuScgN6SNShnbajbhi",
  "key10": "71RvfjXRf2rDCC4uRWZxEXKJwDWTgdGn945Ay252uBAwrimBAx9ssSdSdk3F9sLZFGoCYTjCNWWmUwwK4tWYw1J",
  "key11": "5pCHR35GaezziJ5kDPL6MV75jVy1HqG5JMAayTqLb1fSZ9aZbr6rgcsptxxSVcbS7Tr6xYFQWENiZw3UhYbiGJSF",
  "key12": "2MHDp6cQXXDKcstVHQyJJh6H4rifE3NA2ccZMxTV8zZoyUWYjvinVKZTboTFqCBaujTNVsPnmNha3Uup62sSneAL",
  "key13": "y4qYJXhmYsAozJ7qkSgippkYR5CQK2V1cyk4C1R6pYqSWak9Up7bc1iGKatAjnbGbgrrbUCxD1BS389SXipDshT",
  "key14": "cdYLtDXUEG5dx5SWD8vMTxeb5wU4MLfMQkptqSnyuinGbevRHgZ3HyKpy4un47kRWr4K5wjN6Q6s1RU8SsoE3J2",
  "key15": "56N1qSK5crGSMxVUnirqhzzpCord7gvMEXqXdqVLQPwxsooL2bxjUspDhsedWGomTjm7UfRWXgp7fNj8KiT4goY4",
  "key16": "2Ur5JLYAPrm11Qx7kj7ZQ1F1Z47NmRTsvGz3how2CURN8FFKYwnTF38NJ3MCu9wxLxLhScQGHYAKVUyktsrSJCpB",
  "key17": "5LNH6ZyLsNw8CfHrStbPhVvAUXYbahhouo7r8P48FM8Ty9U6MQiECHoT8cso2qDDfQz59Fvv4ura8qMkqKkgRjVi",
  "key18": "s9LyuUW7gaA6fZLDZKvgr9VKNM4aEFYJx7GyRPYdtvwxEEX7hL5g9SdFkeXx3UYJygihT7DHgnCCSptjmZEGZJf",
  "key19": "2vc1CFehA115XTV2pA1zCMMvSWSdJAP8uHYTP6LVKJqdFYRa4nGbu2Pb8PqnCKNvRaG8kStuRxS1GeHNiZuL5rmp",
  "key20": "45woeGWHqTVg87Wp4vk9LNfgXQq81roq2AcbpGaqf99xc5aec1AcGkmGM5a2kh7dMno7kdynTygLVwsMHCMntd6s",
  "key21": "3APodvrDKfCGcVdJs6ZpgzYfGgfsKshvJygPorqGicqyaqDvDk7YrCQVn7JpbphR28nrncak3NbvSNATEk73Zi7t",
  "key22": "4U5Eg8id8ArdzRef7tR3gsWM73dBXGM8YxcmJuiwNvw3PdwHEyVAnUuJ3ZCbAfXhAnAzrpqj4ie5ZnFXuEKofx7C",
  "key23": "4445urX6xGSp52TH7ned9EAiz3nG7PtGPUxwtyQwDUpUWAoxc1RXBTHfw287XVvD74vxYxFt8boJFg3hXSA4zKUv",
  "key24": "4jPDxs6VRdSYZYdHhbYH17vdVA4pJbygbpjgojWGHQMKUPESRXLxM8oZwVmnMF2Dye5QC34DvpkmB8kuR54FVzm7",
  "key25": "2vhqRpbDqS9uSD9A4KD4hcupQZ1uyU654Kx23qaMzUf7yYMrxf7Jp2k8KefuszsbUynDfsxNJFxfUJQ79MioxLGP",
  "key26": "4U6k11WoSjsXq7wLyTm5QCWymepbhiPeiW3U3A9sCMn2uWqfzb8r9ownRgBnCCXS1wTLZ41C5T4Ubt4DA95WopMJ",
  "key27": "4dhrZEW4AfsRF31WitLp2tLXfDVHb8YznK3d65tmjuGwWMZBTYfo6phfvicsydnFpJCHtP939JdqGPmitow4aPjP",
  "key28": "3RjrNvv7hVq77ThE8FS4eCa6Y1vXPQ6ZxS8RN8R7n8y8o9ZrZ8ph6zqtFJbcYkXW4gdie7KiwpRADuXZVsk23XFF",
  "key29": "44rvWjPECuGbX6zAXXYeb5aUp1L5Rbm2PddKdb8SYgwJmc2EZPPUZh3qB1PNufAnuJpzjWY1Ag1drxjjK4kskmsy",
  "key30": "3nDfKf7EBGcjSE4CxamVY6Q2o86Fq26GLxK5VPbxmUWyhWeQWgzwufQALtvYcGyAHhjrU33rFkvoZST4cK5GDvhD",
  "key31": "4Q47ZXXz6tgNH6RKE38uvCGAArVMz8EmFbn8wYwheDcuDYLS7RCuBB9fTnTobPpangw4fiSp3Mr7pUwjYbqcppak",
  "key32": "4yJNToDK4THp6wjppmcsm8ta85XmLGGbFAzLS8nsWR54C7BNGy1WbrARWrS2yxogtYb15TmvB7QMMB5bVB4sPwCh",
  "key33": "NinzyCaeoX68w1rVF6tRAzGVkfY4W5VH8Sy8owpw9Nuuyp4asWWuHx74eJNztq1Cjf8umCY5u48Ya5sAbsUcQKA",
  "key34": "3EQ42X5yoH3nayijsffGpxGdcxVWz27kP6nhaWPsUNuhMjeCHp5aPp7TnUDMdpGvHJWyeBMQHjJYikphQ8BML1MZ",
  "key35": "5YXwqKMtT2CXoStDXBkKGqfE7u7pBu987n1Cu3XwSpfTCzcyWYWDa4bSudeKcqUd4a84ftw6SJYs5Cwx1cgxk3Ei",
  "key36": "5PKSLBXRohGPt8KYZHYKTPLwn8BKjgHWPcAJqMUKLGCaSMnV1h6Jo7iSSVg2d6W362Ag8ADKnamhMRBVdkWQemjp",
  "key37": "2mEUyyEto4C3t51DG3vZmkxdrbn2pT2DjkaP4jtkBCdxFAFWEZGnfAwhRfcw3bmE6DczjY9NeJb3Gt73aF7jckDN",
  "key38": "5ZhJ61jyDqHdrdryfZCsbxjNfoCeT6niKrp34m6zUJxsmJntbiU9awEe4Yb1hqihDC6n51fnnMRXc2LifLsehrdD"
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
