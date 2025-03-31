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
    "5jfJdLUFNCz4B6RhakEdjbc86Lzvb88nssQJGGTCWKown9ZzgsXcNCz41YPq8RgLrTMfp4fqU8QhSCYu6Ej3A1Ms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cVACcMdM3HRiC71fBQfh4P8fkCyu2y59p1QRqijajqfTvD7H9BbWJbAEUMxaNUFfWN89VUswtKJeQTrERRTu7CX",
  "key1": "7eRRR7wpmc5TLrg3DyHYPkznQTgjh8YDtuYmCQuz9JD3R16s5AcgZHD5czoWFUabchjmcXDbEshM4fFwpoWEW5w",
  "key2": "4x9wGU1ecgLbrj83Y9JkFLAGHJe1MuNYgLUmXBaW1ESpmcGmhtwMqP78YBESe89aPR9aiAKbVoa7SbpPCfMxhfnn",
  "key3": "Eu4XCy6htNMz6a7hWMrSUbK4mNpG9PhszFsF85dyVsUxJ6PapNTS8TcfvkYji5ewHdtahMtkLmr8WvZMqAKDMr5",
  "key4": "32YuAtQsDsX9HN3ohZsbgAAM3jA7rBgR3uBbeTJq5KrQgCdzdCqPgzVSvih66WcatoHZQircVm5vVSFhLTozr8tK",
  "key5": "3L6CHBmHZkgsF7uo2bwjjs5vf6yVJn9jGNCF6m3Lk8H236uEYGunRmRha8scMf4xC4RNyPdyMCor28hrgpM5skSo",
  "key6": "PfX6wqZyDqQW35BcAewx9r6Xt6yX6RbaVYh9ixffxtCvXtFyfDeyiBhRe6wrUdPKYz6hKpeYRiTs4wcnShRQ7LR",
  "key7": "2gye7e1WeeY6PptFw4r9y21atfGeRfX4wespq2CrH8333ijr1UK3aSN1aTpiY7tmahjXcixM45NRzX7EowsUngwV",
  "key8": "49msnEPwan16Es9QNTrX9Z4kP5ZHcDZ2z14FcVfBpXD97AX8JmEN7W3hkVYAT1cE1UBohZJjfeJ8eAoZqgJY2DXJ",
  "key9": "5n27JckaVxH7xcwhDUrwRP4JhoBsj5thVFBqu2h5dhHqSuT6C4Suie7X1Yaj9TgPLZqYVFjX12bCBEEDQ6PhmQBJ",
  "key10": "2wyUEf4JJFTpPDCyEPtc7ekV76XmHnJEgnpz3Z9SuUXgBjF7wCWC3kjNYfecUHpB94g2CqX5sSgzdKrEJXiQojb6",
  "key11": "3gV1suRx6SUbAyDoSTjGk2Xr34qiHQZ3FL6jCoZJTMd3UdjjSD5aMkY8U4HmDphxsbQvzF3xP8zQN83qrMy2kVTG",
  "key12": "3jYqtAsh5WzsdffpeWKDZzTTrYU2VBt4hsqxZMJaY9udbm4YXDJ23YSLokST29W3exjoRMsucC1a3i3Foh9GXLdY",
  "key13": "hoDA3VxVoCEP9ixE4yge5Kg1WAhejJff95FHqtZnm1xMzHSRAPGHGXVCVgFXm2wNBH3L6iruwAAxrDSPTA21pkL",
  "key14": "5Hqym8Qpo9sPGa2aSPpoe6vgcnq4qKurwmnZzfCSgxh4bxUV8G4F4XhG62mEiPxoewRNJ8nKeQAYCNUVmqgqAjcw",
  "key15": "Hn44bamKQaQMP1jRGU7FfhN9eFWC7wVhFjtR6owkEMRDZWxRt8KSs1PCCKnEVYfAhBeitqCZcUkYoXSpgyD2B89",
  "key16": "66Ydm9PhJg8zw1RpcdHnpQBbNUsBeaCeZFwoKpgkteTtMbd3QbBWg4Lv9B9ygNNBfMWKRMY8ays3CmZvoGfj9QZc",
  "key17": "x5zmRYf4L9NceuKHCLKC2SWdPn66rqKQuKV1knxkcewT6yfmKRhwQiJ3EhRgY6Df1psLxBRdcKSfU5TfTACtJry",
  "key18": "33VaSARzghxYdhed8QDA25Dfh5JbP5vCKUZcHG55bPBdJcSiF2d1EP4rTjAU83ZhyzqniALbYjhbwn6YeSgVPMkQ",
  "key19": "5dEHXenEGEzWLxVAGy6YqE95NfQCn3yhim2pFMuGRMMYJjgDhUhpbcdnckRjwCa5sck37Z9YyZjsCJayxDAc6A9U",
  "key20": "eG4Szkvq5QHinDFPupNWvRJ5138THQN4x8M4ik2mCB1LZoyNg3TZttBw6QYseMcEfMe7fT4G3cp3j8KgmgUGdDW",
  "key21": "CMjC2iWM54WPvsesGwd2dDzoomcVcqZaaGUi5nVBWVQee7XYNhxrP5a8ohtm5A5fCm1mVrFnUGVeZMx3qvBAeM4",
  "key22": "636yGMTJh4BYLiLpUT9ouwHZxapEY5H3sfRfpkcgSe8oEvJxBK3LttTyoK8MDdpBNDvuorw8WxvL6bPneWCdCtCW",
  "key23": "3LYeoRjUS7PZ65Mthur8iDrxvfmHfip4DbjKxJz31rbiAC9kzePrEVHtoEduHKUFxNy9iWH4A18nUhtsNe74gmwS",
  "key24": "tg7VAaff4Eu3b4TbtdTYCR5ZVdCnqW5y2X2tGVEKfqe4P6ZNX7iN1fF7Q4R5GEh3wMSXHp4p6Z2XTyVWQ1WSZb5",
  "key25": "5M1Efar6rJEALNfsrK5mNqt6afotxSPsUMTpD5kN5HFzRSE9C7FrHchRdVfXUg8QFmVqehsDGL5PN7Qop4hmMFzR",
  "key26": "4XuExvvApqtNZNW6Jr6ivjXFKwQKtyTxCSEVj2piay483MAaZQokWVRAbCEjgL7EtjR7crJZ95mpu5Q4XYjrQHtT",
  "key27": "3KizCT8AYNLizeCAuKcdxJ7vaZRhqi6Kmuaoe9b2QxYof1Qk1JzhPCH5oaEjdPYiA3TwC28mZYs2Po1t4C1zESn9",
  "key28": "5wdhZQCrNxiksUEdf49PHv7RYs12z3tHHxYnwu8jbD2AJZeGWpq7SwvVemRNMptRAccr8Q7ZUrVMdLxaPBje53pj",
  "key29": "4E94nxGJEeVmZQ528S5N3PWm6hubBzZd4JNAD2zVXTujBVgkYzDHqfwotQkmN1xh532q41itdeFX2hzrCxqHZzE",
  "key30": "3dzdwyxTFA8uzkFvvhj8aRGi2ecSv6HqheRTGLDKcpbjy57ukvz1twtXWLqEFZvZraigZPzEto56VEp9YgPhjHJj",
  "key31": "64G363b4d3WF4xmVR3hJxVs4kTxtwVMMyJNG4vQhato5mudRuBPouxBjksq8adLrRHCVt5265CptNb85DcEbsyoj",
  "key32": "5zcwEgU7nSgz7PYn4hKdyNkL9a8kd5Us9Wm6DxZPMPMgKigppF1TWWps2peYimNyBGrgR3yPtJ9nj7vMJyiiokgU",
  "key33": "5zEnPD9qKCiCYaWP4kprWzukRHuDHWDxAznuo8RM37prqS32eGzXCBBRV2S4fYnuq8wpQ5vdbDS9W3TxvrThB7Pm",
  "key34": "4vkevaEbvQxTzUtuz5UDPWvSSxduEqwoMExZYr1UuYugVdFP5uEvLAM6MT813ERfVD1X84SRtCUjHKf5cmqDEfR8",
  "key35": "3oQWz7F76rnmTqu5KLCGLbbfjkmPnMf8yX9AHjBcTUSw3cfgjPsir4uSaFaYkCSkcTm8oK8UyJwJbYtxuxVPhHPi",
  "key36": "XGB4vRMjQSfZcF8gnsiTZK1TLz1MrV6Gv7scnHJCPpCA1dcWAJdJKt3vNdcPqqxZBR4CpgKPsa77JQmJpwqj3rd",
  "key37": "5M9JBJ4uRDn79r5YNi1VwFn4FGLWNhRseER5NXa7e4BivQGxVGZKSCkg9cMygbp6bwqw6g1DcoKB5q5jp9fyDWES",
  "key38": "55nhaJzxaunokkpU8wJbWpy5aNLZrqwh9ohfupwQDkA3gdsXBexyDMGuf8Z4LCSq48dVwDmobehFmN17szUrjAJS",
  "key39": "3ZRiTkoYX224AfoJ4L89fWaXg25JAr4VJMNzF1BUBm5Zh3EGD7iQ6zeML3APdLhXMjiXH1HEm2YEAHo7suMU9b5E",
  "key40": "JJdFFrjxhmUvMKe9b3u5xaW11b5C8UEc5Zh8A2x9QbvcjAyTCDM8b8ZZjm3GAWHaLPR5WFqeLA5k8CRHP2RaYm3",
  "key41": "3xw6wJevBAwxQsdYZBv7vGb85RwGTSFVnHkoMmkqbWYXj7pnUM5gQNAVnnKuFn7Tyxyw91vcbJT9869Rki5C8K2p",
  "key42": "2swxZYNw9Cfk4wYwd31MgM7PyF1p4cPoQKmmuiDKQ3o4u32G1q9qYX4gapUmXF33APsAV4VN2c1uLM7PfSbFBRep",
  "key43": "2ZeynwZ9MJVZi8dLX1hjZYsgkX8pPWK2cYJ3BQNDhhQm9P2MsENNBFY8bmvFKCFx3fMwvAabLN5NVQ4TUZjLDshs",
  "key44": "4dxduDGtqLsuP9ijSVZEfNgYMGjanL9saWTBKbYLjfdethakJzjiGLxQoRqExFvm48jEYsjZdD7qscfCk2FBwFHR"
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
