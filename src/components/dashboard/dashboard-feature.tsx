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
    "4SVgVMsX1wnkpgArhXEbk4HefoYPAHUHakfnXbqQSo52imSQYxVA8XY1uVrfRXTwmmHmLUWkStj1rog4316JmYVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D7YhVbG98dbJAe2QLLQxRrFXZXJUTbcBJ5SUGHkjR7wifqjfwbJb77PetFtyeEbxwawKxaEaehpfhQEdmiz2e4x",
  "key1": "34s5kAMd4zayE57TMjV8ojLQt6XtA8ot6zmV2FskWdwnR8hQzEaYDgtaFL2Nbi9RemxUaHJzcfWkBPo8yPqwhZRP",
  "key2": "22uDg7wQRSXRdX3FKJGpMFrobjC9zVyRLjdUSATZXZ7JdpjdZRqUxC5giTThgudgjDHmi7ZuxADY8Pvt21FH74ij",
  "key3": "5e2hQnd87D4ASVWZAwJjGKNhCjdwmAHzoRGSeHjSaFHseY1tEueh4rgx1vK1ktAfuH6BHZp3qfygnkVqgLZxdVms",
  "key4": "cFGwE8LVoaFD6KQn2CPMgnCByz3gph6FmjFMNV3oXYoiri2B3gzihgoD834QYZAJoPfe3bjDtewbr2qKVPFCbko",
  "key5": "5VjSTtS6e8MAhQFKLyp5LPCCs655zMu9xUzqfKHbDsmxWLmcaig7hWT86RhoPMmGACmu7LZU9spvYmgHzfefdxah",
  "key6": "2eodJC1hQMxAqpDzipDqNrtipJ8XuqaCkGaA1fSrp6Kx6hwgJoDDzQu8aE74fBno2VKa7SgQHK8ZKXrutV3EsecQ",
  "key7": "2bJE8wcP441pUXgLaWUEYf6RgAvNzW6zSDvy7UMH2icVmx1pq8hjbpPj7ToC9EVVAVv4eFwSeZoV4CgYZWwRFV4B",
  "key8": "4vEph9m9gQfG8WHWPvXtaWYu5irz6qcV8kBqmtBY1cixM6nRdKJUsa4D9KAQPL8Tw7cfLSvP7xVf8dGifz1SNc7b",
  "key9": "2YEz47b9wypSnx1eAyHzN6ZWr3SuJy2PJFYNEx1jbjU5nNn8raMEB35tVX14q1VZivtxjBP58Ai8uGkBJGLVyP3Y",
  "key10": "3owAn78gVN55SqqjwUNmLfx6rZZ6KHeB37c1v343Pm8bSdF9Ah32n9cYxmmq12Ydn4KaRuor41HV9cmgKCrhFWGh",
  "key11": "2mrnEV1izPDmTFLK5gEL1UwuUYovweVZogUZu2dyFbATTRXWX1FehR6bVtiUj8rB9Q2Dj2GZufDXTczYRQZS8Ysv",
  "key12": "pZWz5A4bixTjMFUocFurDF4FRmWsU84MWfYmA23Dm6cfKwX8vHiEVMsfabyf6G9orGGd3Sj98DeUJzvhQTuPi9P",
  "key13": "aPqayxGZ6uztcY9eTtJ4HLdBbsZXRA9JLKnHtmXH1eJZk3t4Urq35m2BWmVeESu69ZmNcRo4PcBtvbkWxhprjYj",
  "key14": "2jZqfsE8us2p6hpBLAi3NyfrT7HMAaGLbyGFywq5ax7136iBYhjRrR7GSMiQv6JMFbXuwUB1MknseBBXxLb15AV1",
  "key15": "34k6spF52vN5ie7tucCeZ6gv1uXynKgaxwi9gXDPt2qJntkj7et49WCSdqhmZoTdyPTURUgEnfzevc2peVyM6KAR",
  "key16": "4ZTN3KV4adMpstKg6cbDBZ38v9QepdL4K62D9yFM59qhd2qdU9HeqHeVp72cAffYgz4EPMcqb8VgAaF8Gt7Yt1ia",
  "key17": "4Ajx38Tc3TBtRhi5qMYtwvSTf3GM7eycsB9q2U6btRnHG1N18xVyY9yU9wcLtmtADqdhArtzBYUkDJcK24PmrG5T",
  "key18": "5EZcn59S13v1mz65wxEQ4CiAsMmN5cCEhVN2WEkMtFoHn3S1dQ8mRZz6S2nfSd4fvZisjquTTzoe5xnBsQVkK9pz",
  "key19": "63VCbczAzsQ6ewUVQeGV8UWoCBFYCAKiHjYjRfvm3hT9SGL6rYseTxrvp1bprkziK6ftXjo5hJ2vC6su1wCdbajG",
  "key20": "5aBbQWXy1ZqtwQGNMrT93uadfswUVLxtCUiuBCvdCM7gQfy6Ysb9DkLmmLYv7Wb5xBE36psRXjTYATzcPyPhMdkZ",
  "key21": "3coM1QmyGEqV4X1WauozfFveHxHjpp6mq2uvUK3AbDq7eM7zudx3JnW9mqa4w3pPPTQgzbGAXvuEBNRpJaDecuHc",
  "key22": "3DwSFiX3mMZcdxmSTp1KCgZ8eN3Lt2Xn9jf5s1khcKR37mJueYUvqyxqABAbsC1zZje7nRZKwnAkfFYpGwcG3Gbr",
  "key23": "4UPBcUrACNTAosdFRQn4nx1GVYkdaCGaWGSEErqxgtKVoAetAErowjXCrbPHzXdxM9ZYqqBqK8Gp659XiWku7Unu",
  "key24": "4HdsgpQacSWi5BFTGVZcEphhsPRohageshTNbTDDXjUo1BALnzkm2VxBMzB1Tq5Ftkjgk6iK2u5M3hRrkUFZ3j2n",
  "key25": "2ycmSYtEkvJ8kFH73ToUuQWsrtYnfcdFUkq58qUVBv1j3TF19wVeDnWftdGK2Dym8noqNFJ7DCV7PdvRWV6Dqc8B",
  "key26": "LQJ6cN4nHeyCYsVpLwyfFuPJLzg9MYYeeNgEdVQGf9QG2NnJGEUQXrMiDarCLcAo9qJmgdFYwUPL94JvM4yvpFV",
  "key27": "2ikPhYsvnionaFsZ2TyQu29YPLqSRJjdpbvayAsXruMMZa4WMRd2tApj3TyMXdwcdvEMPPhMMj6bYKdCxsvVW5Qz",
  "key28": "24aD1SFGtf3tt5akF57HN51Xn8LFr8LrASH6b4gNnFLpPWaiu7iBSPbEEPFRgdsTdxv5dWKSu9hv1Q4aKNAR4wsC",
  "key29": "3t8Nh1yu1EWJxwc4xd38tkomjQvsiDBVHriGZsVjJLWuRn321GkT7e2PWosXdfEE2MkF9GZuDPRf8fk3q3RNy1Y2",
  "key30": "5oRdS3qCSBpSKei8N22w9gAWR6zGMFz85D1HDjN5CZ3pRAwdJaJ2yGatX5imadg3oNK7uZSeDfm8BUZVsPvWoScN",
  "key31": "64PjXh2sHQ58jsy4N73ZuDA3ycNhh5i61WERZkPRSgWLA7CVM9cgfSFe7vRCMozREppmbeDR2LTmqPzoHnUmZPB4",
  "key32": "52jcwGANewgmzAx5emu2GaQ2AN85xf7EYihWx49zj63w48YVLNzfSiwB17TMa5PR6Kxm9GsuFNJh9yV2rTPfJnCR",
  "key33": "4Huf5Qt36HrWp22p4fiWUJwBjwKJEVbv9Qdi3Vq2vS5r5S4NRXrRhFzdNm7yAgbWiV15Ss1Au9EJXcprJ2n6Fsjm",
  "key34": "31dequsGB8dJCRGVqAFaAgU6GYKSso9uVwHCPFZ1rsNGG596Rk1uhZZbWVhKwmhkQpQWqUuSPxMzy6tqX9wxDRtb",
  "key35": "2pyMQPGcfmjNKBDHu4dWjFWJ85Z6dZoK7uz7aiTmpQjKBgaK3M1Lmh2XsSvcjM18GpmSDfHzF2B9G39Gd9KStiez",
  "key36": "51B9kEbaNt5SpvCRR2rULt3Vi6jr3DfanM7thrEZsdja5pxm4CQfqgCipxGauxkudBjnHcEeUjJexaL1zPKtUPrF",
  "key37": "5w33cbsWpza1UG2rtjp31YDPd5MvsQa7xvF12iLeaz7SvPgdwCrhh7m43CBokr6kibvqmAnALLB9q3wMVf551M6d"
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
