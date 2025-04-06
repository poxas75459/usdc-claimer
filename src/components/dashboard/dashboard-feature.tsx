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
    "4BF7gMchdq34TMve3zrDJ3HG2pThPfFNCMjHACeapkUyGYjm6TwbK9Mu1UtBeSzN8NsEsv8sWu6qKGCCJR4s5zMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WwrHcB3ir4QSv62gJu1ktGN4DeHoPtR3Y3QPQd32Ca2Na58FdZhVficgDpfpYNxMMh9MnYCHv84iw4M5hq1UTJm",
  "key1": "4pM4qHgPdKBJK4DtF19o3hyq3UCW9PkG4LvZqna1Q2rNm7pPxTo4eYzcHyitV66pxU13txab4HXmZ2TqnufnKewK",
  "key2": "53TzE7TiUuWPEG7gJ2xhAb9aWngKELB5DimQecoukHcTWMnt4CbvosxXTJ7Dx4VaDBTRXAaXNGw4jBUXJhQ9w9Cg",
  "key3": "52ayQZ8aiMo9PmNYehrU8JE2R3xHmiRDPB5fnNLJ6K3omCHN3NmrkWCysNJiuq4KQPrZZB93i7euUweDv83ikDe7",
  "key4": "2Uho4xkhvRHQGmQdDiNX41apSMeKWcaTsNJ8zbABVp8y7YNuN1okKbXH3wizwkSehJnEvXvo4UmnLuoVV2waBwy8",
  "key5": "2YAfe9zvYKDNbDZYnCmWiaXAD59TtgNr2tMNLLxMMX7fdDT2yx1RvgQ5rL88g5fAWVSDLEBWfyiUbEsAStUGpTf3",
  "key6": "4pf5AZuV65KviBjbE6r8aedZQ5jLyREurnGDaj24TfujZH2kehsnQ8drfsjUnJknqsFYFPgxFUtkUDL6t2ZNw6do",
  "key7": "4z6eqn3iKm3ec9Xc7xF2vQrYxV1PysRnpKmCUYmuUNZNaGGwwiQGHCwjFoVVaH4Suke75RXyW7mnrHyoPPqpPYoz",
  "key8": "3TUnL6HsJLyd9ZX4ZahKmHgXZPM2xQ9SvwCPQFC5i5SFFgkb3ehU5tN2C8urwd6QbHyaAXYCWG7nKwJNoeQjaLAq",
  "key9": "5KHkE5D98Xre8DjYQoYw2UX9Gnnn5AWBXahrxNFfmN5JRR116Hf5a7aPdZaH9ZqaPZsbnW5b9Eyg4AmaW8ejq4me",
  "key10": "2j7fF9fQuhQqoYcJ6JBA4MidyEJJM5EW2ty3X8odTd37QEenUq53qdCBbxnQf8nVKDTcpYG1ADyXARNJEGnz6ocU",
  "key11": "mgCeRDJ3dNe2Zw6yBgN23khVmGwa2PKzcbHTV7zvtpL8s8RpDSDan2jBqDiVF5dQC9kE13kUBjuCJaJW6kZjvMY",
  "key12": "3MKtahzjuG9r2ZVsaqfnx42aYfVSj5DHsCZzd1zmYpUkcGXN3KrJ7wsNc1gw6c8Zn9oUG47GFRxwyWnMBwJn53rC",
  "key13": "4ojn9Lewn7ot9AZpjEvSLhqPYBYPXSmfH3FLivNxTXXks7y5N3tTBGdDRxhH485DMZSiYzSXwVWx8DfKwmKcxMwq",
  "key14": "27z2UVbis3mr6e2Z1utw8TweUJR6jBBXdAy68AdCkWQK6htPg5ri77Dv1FVSsytQGpoKN33pgC2abYVojCNj6NTQ",
  "key15": "4pfRU5tEM2efzJpMCBWSdEmjWGkgptdTdLtX2BkSKt4YnLRTNs58f6vej3cedp37cxWQG9CPag17DFLeHhR8y2aX",
  "key16": "5T9Gto8E88PyqLL1WUJ74kwjF4NsDa1rv3zx72T8hy8JdoJK2u16XHgocg3PpePjS7jPsMPBhHN75DQYyxXXWeXo",
  "key17": "2nn3v3iFBWcCbH75x4aCz2HfNT6sBrj8GwnGBrAXBUZtqfM9AvsmwmQKBdhGT4uX8P97ojaHkGK9J6AXpcaf6eyw",
  "key18": "4RATbStch4K7CDedP6hQLAJW6JjhnoXxXhzVkXbbUMfLs3NFaj8sxa53zAgs8Jvff94uY8vtVU93MCNVu48CxDEE",
  "key19": "4jWRtr3UqSodM27rpUMktMC6QzRBMnicVVKtDQ3YiaLxKEnBLdYtfihMMXvAiuBVAXCU7hF5nxLbWwKEyVsCQPxK",
  "key20": "2Zc4M93iRYs3BJA5X4wNco998XR69NMzNrsWEcygyB9EMUeCPeMJMRKx89gySTBwZtDkafdYEuQioY677Ufz9R7u",
  "key21": "4euSwXzK4uAxDUDW4fWL1nk4ef7iZGgMdAaxNzzcXmdVyEwasH4xKH7egFaJ1ZHk7RuLGNUjY6aJiJobPv4sfnAj",
  "key22": "4jT1ho9Pn5TbdknaYq3ZQ4uUQjp4qeHCMcpNHoxyMKKpVoqHqnrrr4oUJa9kKM5MhoPLLD8xzjG7qGxRai4iEdfw",
  "key23": "2yGkiVgfgiYaa7gZCFDHAbqLCRcnGFz5FtcKNjeSUNCFtgaAxmBxm9nUgm2TLxPKVBLQE2b9Gy5qVZhkmnbGUwGz",
  "key24": "43Wqr43rLz3wakmNJEYz9fv7xfjNLgdKguF4UyrxnRVvSAKGPfMjAsChS7xiNqN9pw1khqzZdazVWMvQAzvDXgvY",
  "key25": "36b7P62wDK2Aqq5dhWYL7xua1kWtktLgfKzMoGwRzi4aESWcRxV2zji1xLju4FunLvhcQX3nxC9eHM1Pn6pTSXCe",
  "key26": "2rXzsu79mrJmWCjcDD93zMWazVUEtPEkhNZ7STPnEEwyCBvfVGwKasjgaix1WB8E6K2RipxWwDaMDHqS3Yh2c5Wj",
  "key27": "5PDiz5vBo3E5SsDk8kfuMu8yeYTvNM7ruNFP4pFupS7Zu2EZsYRcQfMrmfVWoD8WR6eAKhw4KA34RX2kyp1BSDiC",
  "key28": "4eY8V5moed8dD85j4WZqXCbYcKfukCd5BDJwTpRR4pRWxur315M24qUQuEGPBf3nFEo8Y167gfpzFH6qJNVSGDR7",
  "key29": "26DNUPia6TAtgUyUX3WPUw1wF1KMNzvXc9JSqxvsoJ6oGA3Msg89wjjZdi435MQ37juzLqMC6yUfRm7PGeR62EkY",
  "key30": "4mirNnKHfmZSmvpd4jzRXKMUjbZrVfJibtB5mWasESibJ7TFuFCLGGn16wZgqAVzh75ZCai6EANcrmmNwrBFYjvD",
  "key31": "5iW5uPvtkA3CHRgkpdGiDCdjTufGy3pD3K9STQxhdWD2gNrfX4ncWworGKQiJ7VPYRXtK7YHpsQ5TeHuPBj7Uk2k",
  "key32": "3TDekXS3Cfc3HvfpPwkvPjG6tTjdMvokRoVrsxdhwTSnqFV2AXU4WKmwsnpZV2x3bdJ7bc15hQrwrz2TP1fBBmfz",
  "key33": "2ddjmjx9p5Dt1X4bS55UQGuP9Wocuu1fhphonRBZHqtrvXHHNBY7YoPUVKixm3ZeSNYNbLsK8hMp1HavjPUwu5YJ",
  "key34": "HE72pPypNTcV5UGbPwhNk91VCKZPoANe9HANuL1w6rHgS61pNcMucvb8dts3eeSZi4U5eH1iAwSqzb64iNWSEuh",
  "key35": "4br7TBpjM89uDTuVBmJVFiyTjbFoWdyxS3S1s62qN9A734J5JQbxrUfFx9cTCkVVnydUiAJMT3ecBqn5zjhYifTB",
  "key36": "5PSt8PLXzBn7XNPj4zqNdbw2r325zYhsdNLnGM4nKBpBz6VGNzgzVirh6Di8LMFL7ZXvTjXc8kijnPGwQGxratAU",
  "key37": "4NjuJrbnKndS48HNdmwdWgBWXjqcqyXsrrYohGNsaAXxCnq3WsFF3TozWYYQfkf9PQxvDb9t79i2Uh3aBM6fYmux",
  "key38": "3K2ktp6LmHvnRhiV992Fiy9QXkho4MF2Nvo1KyNxyTt6Dy6EcHeVjJ4xfjCXq782WYyXXiCvi9aDSikJ7jQeWT27",
  "key39": "4je4SCxsRxcqZA9h9Y4wNLEA361tcZbSBsSmjijheWvsbbGiNjMQTyVGmNWDNDASm2zyStkXCWdLbv5GcxCWWZPb",
  "key40": "487cSvXxsWKoyzSoCm4yHoVFtURD8gkKqtCkCJmc2V3WdZRpJnJk3JfNvDVovHUS6B9QCBdfMEtg17KAESkc8ZjJ",
  "key41": "4ZctykvFnUfFyRFPCPHqRF2Py4pM5uURcRiuSzTXAeyyWsLbJydng3TGUdvAdK6x1A8nPvyDs7Q9cixHmaWMjDRT",
  "key42": "4h5oCc2GqLyMpmHj23czHUSmZjTeiPBPuSgi6z3vdeFQVmhipDKeFAy8CyMvF2ivptFgK3PYvihdqTtrmNkL6MtG"
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
