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
    "3wcsY2qMZ61xthyHNoMgMndAqHEkHMffbE1tjxQYemk6VZS4EXV7WkBB58TJ3y3LBHF6nnUXoiUBHVWg6YesAnuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ud4bnrmLUkv3JdBerg5GY5eYCR7JQJxB9it9VjcdZLExHsJcw9LUQBDDEoFyJJEifTo7x8pa5iTcTnWYYjH3zmz",
  "key1": "4MP8Chnp6tnyL8yMwin6AdxTmhpn9Vn3hTun3m8kpbbgiX54PH2aTDxVKaQpvGtMzNGz1JoGkHDYcFBxYxGibEdC",
  "key2": "f5edV6oDGTU36tD64nPgbkSjnrqEgadLeP6KDFTUM6qjWsjkTf1X9oxvPbjGhoH4QkMd7SFKTnPXzf8EpTc4iJQ",
  "key3": "rouRTp2V6fmETiYaxsXAezGA58wyUKjGKEnhWZvbEWCUrCTRaKG1DbCZehMGM5ZxQ7CFenjEnvM6NoC8iWu56Sd",
  "key4": "4LQKc1cRjA847Eo5MB5TtpojsogkHQZ3rWd3yHaPJ7bFPrW3mg8SCkZHFwKs2etnJUbU35dJEkymd4Y2UAkY41u9",
  "key5": "3Nk88AaM6zTQopdpPuHEm45wMiKM3caB6yHYNDvQoESXMx3cFcAQXv3pFNbMXbMjDojqMA1Av3UDy7v46MDKPfad",
  "key6": "3g5rjEtQadcCvM9h811pSsxcKapUTfUSRJmj1KhnfoHFiGWWF6gKdAHK3cr2zbrJv59szFovqe5fm5MXyGQ1BWZJ",
  "key7": "3cUTGtYkvZFh1xmwbw2XTU2zvXt7CNY7mmCYwbGsytX7y3Dez4RbACej5nTMrogfr29RG5ekWfD2EeKr7RQXpJQZ",
  "key8": "2DRZPbu77eazcW4ASwojRuVrhBgsr57KP48uKHpeae9Vby9vyix6P73pi3Uj16tA4VA6dB7wP6n5tJdcnHhgW55V",
  "key9": "msSDsvwvuvc4YcLhH3f3jhwq7RPNkxnC1SvwBqw2Veb6fRYZqu3SdaLAF3RqPLuooxXFkXiSQairVDZ27GaMAU4",
  "key10": "4r1jM4TibJWKNe1ZomDKWjRN3V8RkevGqNSULHuRpzmQEDVVQAWdjKR66FK14bND788EPXYfCVNWQu87mvHCXYK4",
  "key11": "4GMzpDPDqTAgrDDYnu8C47BDQUC3d2jBQDDnJXeeKLJT1Fz7Xzih6uzg7TqJwwgdzsgSx6eeHgw5Np8r47SsG3Hz",
  "key12": "2AhkdZMWePS7PybBuv48EXdkRrThmmnfycKeDmPddtJR9iP5qADBJQPdbAbrDRFveLrAsBjdiXSwQaYKMoXBYmT",
  "key13": "4KUECN2Gvh1AK8J2sjrkTHxFjvJaEnqEq5PYxWCdJRWryydgNuphALwC52q2LU3u5EdwsWCk5jHd8zayAz2qvRs8",
  "key14": "4X2a2fxxFFkhmsVp8fTNcqutjmQskFZtx35qZGmRoS4YhMM18wBGWx4XwMBzCQurJwUNbdT8robCrUQteAghrzD5",
  "key15": "57eF5i3eCNK85ucm8rH97bcG1pKG7GmLvaDj9H9NQ3AwQmvZDbYadBYpi7jeEr1GtLp7XMDugQzGLRRx2bMY4Wqv",
  "key16": "4xVdDima1sW5Anr67C5dfLbUeY7eTTyamx8xXVrni8KxNraJPW6SEwgaXZmBtMaPzAgXY4qp9PpegDdpx3cR2rEi",
  "key17": "5WPVVdakyeoK5dx3QPtBeewLEQteVvd6zRCuZ8JnrFcBZo1qbVR8YRrzhMgCG6bffcasMGxdEVbUFQ5idi8MG4sD",
  "key18": "45R19bWkVkcHpH5vUwuvQAX9y5iKhxruryW9hLpNYej4guV3Y1xNw8bEJkX99biidZFUjxstKqLASVTYfHqvkteP",
  "key19": "3Chsx9ZPiSyaXFiisfSqDPxAr4V3kKoNkp1iz8qh1pd3Zu56s8bYxpc6MUfXqg27L9eVbnADUuTPTf9VmGr9UDi1",
  "key20": "5veWAMQVKCquoEL2M5ZoKZfq1wwgFT52oLLUfZf17NHphp9fwMY5dt8Ktiw75QNfyjqNPeK6rrpqpYW2Z7gvfGQJ",
  "key21": "3mafTgm4YpjAg771hEqap3XSnbvtYdyyvWMEr9gyJ4W8Byjgk6pzjubN5N6bw9LHiy2vDypEbvKDx28kdMZ7XCd",
  "key22": "3Lja3WMByL2TN1KG5yqn639WhhKqkPeUiNuwZHWNDA3Sk4VKnZA1JNNb5sWApFmqscdPSWjWyjQWpdDoL3hqUpHe",
  "key23": "2ff9w9JqujeSQ7ewT2uH5fvCdzjbg5914pmqvw7AL3CNXBwW6Hiexi43qPFieoZZJi6avhrESNJiHLcsaDVAyzXm",
  "key24": "4rbFUnXgZfhZFXGtpK18eKzKvnoj1DHVmAPxk6hyaLaeBt5nNqo5A9kPj1gsF1KDvNRgoX91YHcXosJrk4Pszhim",
  "key25": "5gSUtWohDLvcPBNk7chtykGsiKCVsM7wprt8hzEtSmfUewf7rWDZ6U1Y4MWdVjvM5VhQweUiZyxeSmZ2YCXEk7tv",
  "key26": "2nPvEFf3YYJVsxgb5wqfGMMcZRfq5CW349dMxSfPm5gtUS2YUBHoHcMJWUMYMFTJXCaMiAYivKn73thrDZanXXSs",
  "key27": "4yjKfyR4iM5NNBe1S4BjHdmMbSCWgwRThF25vaTN1fa2qoQpxGDQHsgD1e8fsCix9cQGEDswEq39yAS8bfhCsHYW",
  "key28": "4kiYs7oXBcgkDpMfMedH5uVqidWFzV3ygcLDNFQ94qFb57YPRGYwwFSgaSrUR8wNcuzQzutDDZxNRw94uJwEjQmB",
  "key29": "56zX5XLpYVpM2oLBxfWW2j39jDgvmc5aXTbvgEPafBCafjW47oxhp1GmMgRi2rm34hxpaCeDwrco99m2DqBQ5tz5",
  "key30": "44HZjGm2DVgJnyLFVZGuHrWDxnq3Zv5zVmK3MM1WMZR675LAgvKU1DtjGJPp9nhW55tL6JSwCr7cdhp4QjVZw4HR",
  "key31": "3BW4wwsu6XqkVZXPQQXSmcTmE3GAgZJRfxXivHCMs64RGeboBKHsjPqAvvC8ZBMaqdBF6bn2fu2NQHZDfgjg8VTW",
  "key32": "5PUGtTghW5CrXfpZpJYyk4E4wEDAWxnc9z3Cc4vPdY1CHBGooe7Ybbikfgb25KNutvPozcwSoH7FneurzZEcFA2Q",
  "key33": "3VHj72HgXqf5GFaRoPNADSWxWLurA9VR3FpguqXhdUemLifVL5SvesA2KARZmaA3vtRU2cEDrxE2VRFZhmYRTu8h",
  "key34": "3iQFQwQdjkMG4oRH9B8kA36zr7sVdgiQSKwz8zKBxs5MzhJe6zXcVQrMS5mJs2VssrgEa7mnPwKAYGW3oep1Gk3",
  "key35": "5JDXPJfpfdfkiMXV2rrw37ApTv5FXVLjFVFGjDDMSxNJn7VssFD6seYREjnccm667FhJCyiMFRKoAEYEZ6F3Zxd1",
  "key36": "5kjDvsbsN8qzN59GYKawJocrLZTrxeAwZKKHZUybskHSc9qA6sucjK237sJopXYg1mEWmf86nHHt47EvnsgwmwMB",
  "key37": "5q2i6wuMbPfMpzzyvqUziMqaRd9ESWCrTNe6x6dXQ3aALmWbmB6vEohmejxymi2edXfekkL4UK6EUweVpb7rzFms",
  "key38": "28JemhouuYyeyFADJgPQykkgBatUyTRRKDLxDKQsLjrvgWCMbcAMbMcXqAc7KchehV3nUZ1bsUiuMCiFubHFC2U9",
  "key39": "4X3LruX8DSRDVE8MR5UCQevtuoAHQBeoGUo6rSxSbry9er2B8kv7xWAhndsGR53B6m8jRJhhVADamNW7UQzbXu4n",
  "key40": "4V2zQo6rTauS3vpAFgVt2ASvKKbSEwRqJGMk8UQMbtXTah5vxitNWReN4334QasJJu8GME6n5YYRLhZtFbN2GApE",
  "key41": "R5qMzqjBBZQ3ByQ9qmosfXpcPxDoQXCBYzYLkBoDnnJPSBPEHqzQQHpCdwv4vcNKtZxb8DZ5Zpfaiyy1zviLi4v",
  "key42": "sG5CAQXNThNAQ8K2qrL9KbdNEEKdfV3bwqxf5JbqS1guc1GNDWAxhDG6ASXX15oJiYCZwHqev6MButMyN3HL82K"
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
