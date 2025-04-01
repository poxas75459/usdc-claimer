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
    "65HipiRkThp3pMiedSvVRxS9bM7zMhjp5nym88vXFas1Unvr2y5Gj3hXLPV9Gqu7Dg3hZxBhYoSx1m8hDxwo7T5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ch2TrHXZ9ZubduNSxae3oRqf7aVo8BCZntVukMqyFEuLGtGbAuvHJvv7Sj8L74LZfV1TcrXVUE1GMwssbQ9qJn4",
  "key1": "5P7cH2N93PAVicgtN92mU2bbc5fNjPPCi6MCFD7NVwrfH1oHUX3Bekf8oCeov1sE9u95P5far8ZNjhpxxJZ1tmSP",
  "key2": "TQbFzXWBpiNAZqpzgwcpY6RoDw29HZcehxFkF8vw9qL7iVQUobsqD47e4PZMEmSQnka27ARA5XEAPMb9TjRY4WW",
  "key3": "4fnoybDY67g6HobZoCG7HvWPrwExSLzgKHZ2neXVsFGB3D6U29BzEeCTy2xK2b3CCQUtuFSJo8NBGeHcqFBiAv2E",
  "key4": "3N8A7Jk637fhwNbRhJPoF6rYMMustz7LmoVZCKNDp4hSgtiNZPA6C5DJxqdT1dM3zgYCSirXLPJE7cfyAuhYQjsL",
  "key5": "47somADkN3eStA5jQzD3gqqkDLm6b3dzN2DEkWWfwXj8EJWRRsm6cFoGD6LRrpXizb1hFhMXrEDoquR5JVxHSYuT",
  "key6": "4GRUY7modV1bu2W5KovfUtQJwA4mtRQDgJSGDzagdintMt4xcRvc4W7mshwnWuPCQUXYFpEjp5HAGZXkcSSQyymj",
  "key7": "pLNqe8g17V4H6FPd42pYNwG9zTfjwJB6G1DmMW7bgGdyivtwFpRvYD8USmNBVYJZGKDowuFgu7sjjMJiLb2mx75",
  "key8": "418HSrNJWTDrXCrtxkCuj6HxUjyzjPAkKaSBtd2g25K3TjFT6WJ62ZSP5Fv5XryH4q1XFQrure85Bva2aNaLuQMj",
  "key9": "5ASveuda12sj7rTRmGMvwZVxRfqFbKa63je3iLDRNmttNeyzhPDzNQnWAkYNdZwddAbHkcqr4xX2QqaCbMHjij4r",
  "key10": "4xCNiLDjtVXkVjx7TofjZhhcMqDavzdRGzqWgTUZ6KSV5TwfoYQjhpCMu51oU93zYkT4gCQ2BaTrYRfGhsmsGUd",
  "key11": "2gyM9RUxEfHfbX6bZQPPSAz8QBriMwjXGXG99geEhGv41XJB85G4h8NHy4gqPB8tqaUUyrffxVKZ1We6ACRxNn6f",
  "key12": "5TLiuvNz45jhC4H8y3z1kPKjKWhUnM518RF3g9GcV3M9Sb9dMuAkU6kfq2NAYPZ4XyoGfJetw6uqGFahcsAcUD1m",
  "key13": "5yBag9pA7ZC6gLk6a9DSrMqgydd7HeeF7GWxEZTNZqyY3FJtfRNoZg3P6bCp9RMmA8MtibScqn9ACsW7QSzHpMkB",
  "key14": "w3oXLMbxpk1CUEN8ChiHykAeEhCMARwAktg2UKrAogq4z1q8CQFYDvKHTAnz6tqqCMdge3kUQYszZovjrLpCXjg",
  "key15": "5pQCxaWAjZxPoZxmNeh8Rh888jUeBifie3JzgguvSfXPJ1iLYZHrGu2R9C8q9xkLrZg48rqbDYeTXowCB9y5HUyF",
  "key16": "4dBAPZiaqq5VU53xX9zVzQKUeTwwbcgfiUdWnpmjm4hqVUpabhcHZuT9a2XSpz5gF5dsbpJhicaFnobs9bryakca",
  "key17": "3fw1ZoCip8K8fg48JFCp4P4W7sRpGj55XXTNsnizusHtKqjX77nx6XfFBPPNyL19SzFDKYSy93xqW7EKoAXne1Rk",
  "key18": "4zgCzcHLodLwDhfYALizRp9hUDKaKey2G3GXW4sa4dh4gNiMhxjmpTtQgDcHnSzWkeQYy8h5EepB9LFmYCdjWibS",
  "key19": "3QhaCy6tPYRzEsAP1vYTgnLnPfsYajkRpAjARDYELtumukNXYdjoyjz1ASY79fYceBVxd3E7o3Hvv368aJhQwafC",
  "key20": "28pAvXJKh7Dgv6UUcnpszRqojt76qEes4JsLYxPBugWUZWiqK5tg1aZTMmHLdLjjbQEpbCjHcVhKGGDGrAHx9Sf5",
  "key21": "45PUoDTr8Gcty4bHgNdvrRzBu5EzWwLUbFwY61aWZGQTGg8dpFoQ9h5gKP7Uu4AebeGtNBdh1j78JecvZ3Ukr85D",
  "key22": "31ptw3qEJZH7qEzNpBARCS9xevGLwzF1ix118o71G4Htkur1Vzb1YZuJrgTtPtXSgStFiJKDzPAEhycnw78XT4r1",
  "key23": "3mg3WCUwPeREyTMDuv78vFM8Apc1AvHKp8csm9hpFy3yLn2PRjLXzeHAQotTSnQpvacYJ955efRZC9D3NDiZkwD6",
  "key24": "544tt4rkQuwYLQZzJfvKkFwtUxLES1Nb22LoxkmXApbZdUUX5CcSfwv83m7grwB9pvj7iwEYpUCgq8P7htpCMrho",
  "key25": "661vdQcbBzRgvrUWso2uCZdUwYHaLtscU7ZK1PuBDBXY4de6o4mka43ftBWvU6K6x2TWwuf5mWFmk156Um1ysTPA",
  "key26": "2ir7yhZHjZ2j9J84WDTFd4r5egyf8NEV24GEUH7zQeFCwtajJBHx93SqLPYhmcKLm934et6DuGPnbuPVg6afjZdm",
  "key27": "3cfr7TcfZ8dynV8g7i84JVtk1ADwDv5rxT8XCqRDQwTmG8jd7HETi2RMFPyVGpoaCNLikRtESP1AQ6s6o46U665H",
  "key28": "5z84EbZHEp49qxcmwWzd6XJCE4eY6Ge2XYPMtqQVWvdKv7Z7QvycqGBHNGuuq7jXz24StSDFSKYLtkTVGrhWCipr",
  "key29": "4TL96Tjcyskkkzxah4e8vzqYw7WioqNTVw36KRNoNwuZQHJKJtcvd6ZmvBGTmg437ZJ4pXfTVBbsvCwc3ivGufus",
  "key30": "66ENWPoXbVcYp9ptTTKu7hoVX7Kt6bVDh8zEAWbYGpAshWTwoyu4q3pKbYDUjCMkW4Ecftvt7ptbdQoQA7UnZbYH",
  "key31": "2Ngg5xSS3FR1K41y52izzUu2GAzyaC9kNBZoWJPN1Dz9oohKMGxftVSghFHpFCdJCmTh9aKgJpT6ZKsgoMqgyHah",
  "key32": "3TeMiRftYsz2UmXzk29YVQ7bDTtG2XEwk8DpqY6dYEfo68RbRvQotomFtWsER9UJ3WfmxV9GTovrHyfdvY4EGuGu",
  "key33": "5N1S1kMMJ6vQpkWKfJDqBC7PHoHsshfchJEehAfBR5aoJfJGMkKpES7sfAxZRtX8cfuwA6WiNkKj4RLhFeUdiyAa"
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
