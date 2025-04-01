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
    "4Zk8WBF5oWSZYbgSRzTa73Az5Le3YZVFDb9XdxQ6ySVgfmPTW3eSyXMwX7VXMCLadHayUuVGomuFFV8yz7wed5et"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k86aQHHrH2vC22tg6zVVGbXKnTJwgaiYqfWsCn5chBkoYzka7QeFa9EmQ5Z1Dw6EVRZHZWEazRTMrYmkMXuVYmp",
  "key1": "4nhhoHdCW3d9LJEV1RUwTgh8NHrVaLpDNo9FhVKZK8bvZtsHyfb2NPQMq2b7Z6sCoxzU5rBGy2TQE5VE82YqZ84e",
  "key2": "3EcDBpiMJ7uew5CoVaMA2A8gPxhDLv73A7QeUj4TVFcZnGAUB6jkBtuqfqDatRmJerCeNj1tM1z6HF9MYjP1FXY9",
  "key3": "5dpCvXKXpPnbMSKxYuGL74jc8Lr4gjy8XZz5u9kTvkNVcKFcTD7rkvL2RynxUs5MWk3qD6rVjarJvGZs5ts4VfqC",
  "key4": "3Qd9WVG5GCVUDpzTZaCzR2Ba4YdkYNK9sGmtFyAkgkentifYr98UY15AbpbBhKT48AwVocMPHoUZ5UjU7nTRvhkC",
  "key5": "23XWiFR6fLTe2aW6FE5n2Ut9NxSffCrqRLWkFSknDuzDEmmpcQUoe16ECk2cSLx7aPBbXjppuNNWA3moLESmuat8",
  "key6": "NCBW8wNssGPDPwUk9pMYvenb1mDRewS4xdM5yGpre6x7GL5CBSBHX1yvmZHM9FFptqaCosBK9G2ZiBsdrAGug64",
  "key7": "z9cpvzAzAJFr2giLVJPmqW6H1FAWdvQVKknArpeUXCkEQFhwxLTFfDUBCdYJUvEbRBShDG4EXnGyFCvHLGiJqVA",
  "key8": "35J3RVvg3B9bLctBzV9y4aGf46NtdqUevxa62L7mstakQhpu8qgsPD6kk3c5mcP4yWPdTXxQoqg3wzdPY9ikxoEz",
  "key9": "5w39j9wG3sknu4afrtysU3KaiZyMt7LnHfSrSzLTWTnKzHLuPRkk6wh4Yd78aB8kQzyNQ6t7Pkaro1N1yB2nksyx",
  "key10": "5GsfvgWNq3kZSp2ZEQEKQFLT2uWVxwqJJGCkxh31KWFKZbJYDg6qvh9ESRiK3ZuRSbp6sCuNPdWKdmJTxpK1pMb6",
  "key11": "5o6ZCYdNYt91gVWBDvd9yHBPhAFjkipC5NWSkFc7pmgVzvkr6BuqGvdCqkCJ6t4ZYVgkNUfF11ciUXPDRaTWfKJ4",
  "key12": "2Wy597hqPYaK4UzjhALHWQ22i4BaYpCjSUPNvpAwHLRyGxdUR2RYJ6WocaDsG1vQcq92uVvpZkmETYT9KQ8gfbBy",
  "key13": "2AWyqWjwx6QiMJhY5wj4oSbX1hcJxuCAaQqRUYuQc5jwudzyX1JG6FUXZHYfNcac3GajMrsnGmZRCpr2KUckMj59",
  "key14": "5QoAB7JotCUJUa36Tmaug3d6gdDMQpzBqZWyGNiDEay8Kdog7YXNLY5cLrDFqPk3GFA6ZiXFKt64N3dDoG97AJLq",
  "key15": "4XpxSMi54XwNCT7RTNJggLeiza6wuFkwv5toNHBvev2PX5aFwYoNHSUHMiDmVYKndqk9g1Be6jSA5QWbCkkheNuN",
  "key16": "nH7ofXJjMRcvKKHtyobQ1YxB5AmJxdisGnKa7fjd2V6RoiFWHHoeMoa7eZikuwYJaPUoXvvFHBtoaQZrsgaNAXT",
  "key17": "5xQWGfWMYYUeA8qSwipDSEiZYe8BYkjjFpGfj3criBrFjWRajcw6JU6MfAvG49bSVcKutYUCFMK4nVpBZoLMJjP6",
  "key18": "5u93figCyizL7AgX7EYKxxNusEDRQZMLAEHupQYgdDA3FMvAKsDpNSnyJPMEmio8uokbnwCibnnhe1ZpiVvUsqpo",
  "key19": "NijyWeFWbZCejB4kJkDKSVCyw4zp6jKgEhwCAuze4qaNTNQUfzP5522JfKmoKUmc2wxSX4UFvMUZgk1RRaqZJbc",
  "key20": "2NpEtzA354nFqqCbeSACdCKryebr6Umhnrpia9632ezG4bWJubHQoJkLPDiJQeyed8qivbCiZzVs3ffEeK6LnExA",
  "key21": "5SgyTAHUc5gAPABfFTNq7qCFYeFihVmCWQXQ8EpNqhRpi6dHnVQuxTCUD4FMFxfb9NSUabY55hXyFh6yjnydZ1Ha",
  "key22": "63CdXaZujCfgw79WRejStjZZN8mVPoiHFPWUy1wuuQhWxobrA4Aud2eVJoNtGcdRrNrBNJNkaS18AXe1g8i95KDJ",
  "key23": "5SPTGXeLNZUXdMuNAu2ZFaZY8go2X2pmapVMoc77CMk8mifcAoqSRQ1z2EgSkcLwSoPWZsZa4ciYB2FLDEETgbo7",
  "key24": "4rPLHXjoAVAgwtjbejTByedmS7GTYyYM2zdQk6opabwkPXM2NJYVk8mSC238xf3jBYmLZFZj2fk7hhZS8Y8eB6F",
  "key25": "3bVLRU5fu5xyUwdLX1yZpaqiYCtVADp7bcZBeQHEjYsex5XMKcpwCPUi3h1G5CqtHeHBjzTJqzvwo3VTF9VYC3Kn",
  "key26": "2JrjME2gMj8BEa7hFZj6kdhvRZXKupE8pM5Ezzq4hCWkZukUk8bvNeS1DSvRjKruiZgNZTb2wJtrRBoeZmBNxUTR",
  "key27": "4XJcErDNvnpV3G4ru9X7s2YmP3D4bC8NveYhYJpPknSNbkEtf2D1EzQAb5hZijFHXURMLC5XJSzn3y8cwsLKekm6",
  "key28": "2tvbZ2xwvjSFskWdtXf27gKfKSaKyYvPiQS8f3mvYAH1bR5rHoZS7TVa9SBLTBBH3agHh7DSbWG34f77RDQAKMv7",
  "key29": "Vwv6jEoh7VR6dkW3rDefLZW26FePSeDwksdxhenV3BX4ZTJcYrNPtcvDhqD9xDmW2LXkUvFVQwqJ5VSVKqSjpLP",
  "key30": "3pkWcFUomqHYbvfTHA6dE7AdNfHhtPY7VD3pg1n9FvD6UpRmMybry8DGg1ia6bSg5VugdhWxa83YFsTmWiVZd678",
  "key31": "4iZqj8f4PzN6Cf68uTP5FJtQf8xjqP4hophajC7JrwAY9ozesGVXYz4kjfRKx6RaVxKS6L6wYxLEggN742C8JPg4",
  "key32": "2X9x4VU6zYBKRziGNLf99T5NDde9YM8845MyhCUkKcPeUZu4QZhSdFNab9DeiHrmGxEKT8RKiufAraPuSTbdT2LK",
  "key33": "2E4Mk5d49jX4iXcQvpBZF1RRUKDP8SKyZPxjLJwPizGmJgo7MCiApbzi9R6rEaHSEA6tXuxWt2r9G3r4Ea4ya46i",
  "key34": "3sM4vim781V8qDamKgXt5QCMnU1D6WT8guz9ybe4udKPW99HaPJy8R3PmRa8FtrZzDK97toepWCNTUTDavmcY4Km",
  "key35": "4BTtGYPsMZCrNhxMfDrwBZKkTH48rJvx4ktEoGZ83rmMMVTVV1AVBwUvWjaQUQdFQ4K1Pnc8Jej4Sjb8wufkJGBS",
  "key36": "5tfFXBYrEV41Yc4TDLgfnTYoLfHjQcpdBTCdZQnUKZS7JjLpSXxEvzQGMCZ5ediyUiPKjFjzHXCTMW9wfFwEZDYP",
  "key37": "LbixpAbk49YvrD3QbF3655n1LFHrh9KSbJGDdKd5Gk7vjpdGpHv8kzq9mggLhqRBABCWaH6nWrfLB46HizKknAC",
  "key38": "32nDWXochrBhqmn92sFGmziJXZsgc9wo9c2tAC6KahckeWexJUohs3XWdGwiKk12QXBS1CdC9R7qHgFNKidu45Vj"
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
