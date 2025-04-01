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
    "4tX4qsvMWf5mRbXbVjh9FxGFhNbpyqVrWpAEJ48d4DQHgQRbobGYLAabRSFeYxVjNi34L7hoG2T52ucwUfeKcn8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WrGsnHZ2ESgcj8dQneHr4idCFH7GdWwqq9jjBWADUPQkB6Gp6Zv44SPsQ1wZEzuP1GQ3bSPx3KBHaidvfd5Fhe2",
  "key1": "2EZcc3ygwegHDAuZGG7dFDTyqyL8sQJCnCpp1NYYCqxTHfQydNejjhN1HiVcuyuV1y4Nxc86VGAUJXXoN5dcNnUo",
  "key2": "4zQqVN6aewV4EhYJTcuFicRU76aZmTViNN7SVyD5hj1f5njU9EztWTzrk1dnKAGntEzkWJa3sTz7YzEWCBjNCf3T",
  "key3": "3YescMyVPaL7a8EcQ71zNhyAqU7BzG5okbKDKaJ41Ey7nhdpoRkU8uFz1ZgZ4bUNFzukvfF4SFTYMcoxZNz93WYr",
  "key4": "5JGT9Mgg1RVxrzSREDZBmNq3gtCXHmR3MfyQ8PTwhBZ47XJhuagJ6ca6HD6oCC7q6s3FG5KwDoEcvuwVcroK82ZD",
  "key5": "4WcDrEYiQ229dTYKxvobviGpkJtdMB4KQ7Yi1yEJTriEDTEs95uz1Vwex5Z9NPksoA35Dt3NmabyN38rY9to2PRA",
  "key6": "26YoGbTEVja3JpihiPbUkWho3K3tVKwizFmuKx32FUcmcsbyuqEYdK2uogVrWtjsAngnGsrnFa9yWg7h5dm7N9yL",
  "key7": "5totqaYou4c29kSX6HnAUPZRWDMXcxtSJ2KoHHgwiCER8Z8TEs36eop9zvSdNXeMn7UY8LZHJL68ERK4Viqvr29v",
  "key8": "uqddyCR6hbkcLaLrYfsmcSNPp5PgNtFR8zyY23bYT3VcUebeNShqWGAZnaJofKh8u3F5yRMBMrK7WPYnAmRTZH4",
  "key9": "3dRLcYjRtrFcYH5En2kPzJAgPQJ8jkhHvc16yHSqcaDcWcB3PTHvFh2e4HLTWHkS2wzzVh1VPuCbrutq87byobfu",
  "key10": "4AHK9zPhPkmHWnL6capZUfdhVBWyHkkgwEmAUYw3cMS1uqNRRMooHdZFq9xurJMAkrnRfkcn5mTFUJmckVWGj2EP",
  "key11": "2axxNKhj9rnuQAbvPh6yScWgKGJ4GqHTqs3rzj3JdHekrQweYyWAPCbRdbVybMMoxFDFHGrZQhH4qFvg48edVG7D",
  "key12": "WcTkNd2JtGmTqdMztQBoTtPSjb3VHaedkNHsVqdcUNku4Yd6Y4KNQ9Jw6Mmqz6R5qbQ4bTPkb5kem4xvcFMW7pe",
  "key13": "37ZPQj8f4vbDgcfzJYVJR5YY2byskJz4ZcGHGxkcGRkVZuHxvdiGVYqutN1s7ffMcj8dxoXjMA3NwKuQJremezgb",
  "key14": "2stYG3ucpMxgbc9VhAsUt4bmaizbkwfnVRPu7GPTHULb2QEYrsthbr6TnPtcCVkTwUc5gS79Qxo7BW5BfEU5iPRj",
  "key15": "9sTs9HcgbiSyoCCdgAGmJUTjwxjLoDxX5CfQVCEQm3S8wh2mhNEV83g2hfgtiB8xtAUepMzNkNQE5oatjkT9Tzz",
  "key16": "4abHcmYNaBqohzTjxSqNLVAxHeb1M3FphHL22nkWQJs4HLun2XTxKb1GAouPsMDFdY5kH2ACWhjwJ1mjJtEGAh6",
  "key17": "4bE6kuiSSzsFi6ErM2NU8e2qUeR4T1dBoP6EYSieaDdZNiLdM5CRcWzZm3LEwjwUirYyRGJS2eWbTTAofMHKYFhu",
  "key18": "45Q6hKhzjq6aUReFUfv8utDrm6oRi9pScKqX9DgS3CQaLkWLXFzYGAzHkRnTHGVKQSfTEweERZJ6UdNFBCrmV5k9",
  "key19": "2MaXuT9fJbuzcgRNhy74nLYoFfWFrAEdnkUFwU75WYNkFHiXynv62H6jX24JStukYoEtJZ2h4AiQTmeGXwZKb6aF",
  "key20": "4WRnnXPBhhcaqrLBCajNMqjatMReVQY6hrBsaxX3jVZx1TyiTLNMeEWyGELkMFd1xMbtpfgNLDoPJfK9CzfFKURa",
  "key21": "4SPDsGzT1YbzdtzyTgGcE94jV6jifoDJk1AKDPiUVov2kKMDEYhxxVraavjHsaJLAofUAa6q4x6yFhpc5kJY7wGJ",
  "key22": "5AD5woMRVuaYLFvWHhJ1Gpm7VLVHeqwws4AhogymmyRYR5nuQ3exKyS2JLz2fryAbByZqzsLKKMpSxmQnJoLGjyS",
  "key23": "2bJTVFEX5WGoAuxCxdN7w6B9CQNvc1r7GTcFBk22sbPmjqPbPFH7v1qF5trFZwJmuLpZRgguWJckFsQ32UD9esXQ",
  "key24": "23NLJsA9qAU2qG6LBnun4YAd6R4zYkY3x9hAv6Ghtiq9SFakGwHQnNQMN7nrE6Z6qceeCyfUp2SsCFh3U69p9zqU",
  "key25": "4ePFiLgEZwXUyAL9142Qg1Q6dG8KMdNpPxwdseHASXADpeaqhf7BuQdP94AY3HCusYhiyqYNqnLMLcd5umQynXEB",
  "key26": "2x5ybfQK6gRDeHcESFFkRKbDtFFTvJy32Au5jJV6q2NUtxRF3swDZPCpkubB3xrJiMSYQY2GdSiSoatcHGDRVU88",
  "key27": "4EkAcjFC9DmNXSHX9wcrgTNddoL4niXkRupmutQiJdjnJ2cUMJJMnTRbZBb7kFHp41NsQGi947Dn2QPdQSQgPcLo",
  "key28": "4uQs7a4wF6yEpxy7hUfPVkPSEbWChDgeuNep5B7mMTaJrKHRKAuu1JwUCkzFGRweDeDfxsHqykYtyCvc5uswmmRa",
  "key29": "4fQoTVfMyAZUuetYFDZHkRQqeBFo6fnX2512sCNr2afeosqZDRThwTakGygprarUaRtmxeonKLwm152w1MUoU9Kn",
  "key30": "3Ykf2z6QGcUmq3zqYuznpoG5faEAnV3AwkwsYyXXaCYvSYe3zbD6bhYkkYiGokDF1Jow9pv3Mw5LmauDYjiYStTS",
  "key31": "s8A5AQBUdLxi3b15cEWxxiNxUemKRPiWC1aTGxmiSMneRbqe3eRtFaqF6NuaJ48jzWM18QwmiVxxPtnkVGUJNsY",
  "key32": "4s9RTKkK7cw53RrH3rrG8osRJtFcND5eMGkVJFmdho53qW6A4t2CMe63sdwFpcj6Wm8ezgAKXhwfUoFx9o5bf4ej",
  "key33": "3koTdvzgjk73h48xH8NTBJMn4fQ7V66r367tMMAJhyFhE2o9LpXiuYGD7xV7YK2y8zrQhrDXF3rhmyVS3DWsuZuU",
  "key34": "4KqsNL7iAY6nKYeYn1V636YNkMr1rBsWi1ddvLRymGcHRPG6uQytbavvz3tF2a6GYnj4udLM4CxWQyMPh2goMoPi",
  "key35": "4so5hPycwDRh5Firb1BqVVjJi6ojeGFAjNxSM8j3hzxAnbwJU2ibHv9pRs37eVRhKdnd68n34qVuYd1S8F4Z5c7",
  "key36": "28bp8H2JYWhZR83489ATkC745FxLQp5oekAeqzuTNQr43CcwRvDioWTjjDniV1tdsPSro4gwD2HzyM3NhUq3LM35",
  "key37": "5V46RTeWg5WcQUbcqkP95FjvgtamGhUaztn2KAr15ZRSUpgVceZHdDee2AELgYXqKi5oyLsgDssrmrx9hxFDPuNZ",
  "key38": "28xGQJPqkGYDLPNRdkHN5neKZ4688JwTzkJCLBtcp5gzcYdnDZ4fth6znno7AEfehcBKKp44kJDCTuskE2Nf7qwG",
  "key39": "47XTTNVQ1ytNdkPfpmkyguM5gDJsJtHebie2SXtx7hXC7NfzF4G7aWTwvKbZfUgMswhVVfTySNE3rEVLB5xButq2",
  "key40": "2E37Sw1kYB55LXBsL17jvGsq6rDuFo1n9iotHmkymk1WFqxLUk45r4SPrMvjUA4MZo3PWf3ryFQ2ckG2MHjX4huP",
  "key41": "4Evj2SwdRfWb8fMagMkH6MdBp2thTYob4MRK7fw3pYby3fvCQZ5Udk4fLYRgPDDZMmksT5Rvhd7Wk2oonYpHFie5",
  "key42": "5w6VR3viJTyPSrSpUSEzMapBwSDmjqwz2nAfLrKADPj2ffMa6me4BFsM9MqLPqMN4F3cRTuSdMTSx5Koy89B3hc2",
  "key43": "49J7RL9nCosarg4sAVJtJnV45pjTMaYSrzajfwjHAFuHCWEgJ6XKAShbz8qXMkC5HwuTpEQKMjztWZ35higs4xxN"
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
