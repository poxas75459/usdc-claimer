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
    "4qFg8sf5riFN5QPLtGCpbuBraHi5QS88J7XXMfrfwjpQVizX97A3psSykMY3ssjgtmrpZA5z5pCVGfdzhxaU3uhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DcJPYtUECm1Ng1kGU8RHZuiEa13w6WyJjEfmKGPVKoCfRmVdGJeXWiYwXWFV9y6UtxNNCS8GqQgUMw8WECmh5fC",
  "key1": "3agb5SRfPJ2pBvkxMNucJGxQ5e9wUEXVLEgNF3QKCDjVH7rXNHN35w6SNovmz2T5dUnGH7VA2PX38o83JbsYVGqq",
  "key2": "4dYirpWRJhmCk2pQ8fvZg9ypcknhTvF8xD41dBj7N8xrHVh3zhPj91zRAhacAJwughcmNoVrKzQ2mRoWFdnEXu5Y",
  "key3": "j9BNVshPWzUqdX82ZVJSD1BPAkmzQoEhqKLYb1NqaoE97ZVWcK9fPQB7cJo2U2knCFtt6gBMDaPmEh7V9LUvBV1",
  "key4": "2phnqDh3iVJVF6pMh6K4QpYW7ke6L6QLpGwUkKxF1mu97caNuG42z9ePcVoq9zGtwWoZubes9e2Qnv8q9t95P3hx",
  "key5": "266KcufAdPG2cZLrrt7sgw1wZrisNKwbKxyT2BPSK3E7VA28brrAUn48qmjY9ZaPfnJyvVcnQZwrGf5ufj4159vP",
  "key6": "zzjXVtxSDpTfHG1XCxe7eSFDSBaSnHtbJ3QXyCBGR6LtWmnxmjjdtoZqPZYfaZ3wHN4PC2aquX1iYnoaufytdYu",
  "key7": "528Vo5ypRdJS71d1FHAvDv5VK1t7moptF5GvCzQmZTcyCrzJrS3DHQpsRhvTf9aPqZtP5EKphaNXuYtGDwUoXsD2",
  "key8": "3sL8cX33pE26pKaknx4DPhArqoD3BU1FuPJoiXrndFhshLvEDXceFRtT6VWLdYVyioFN6mocvnZFBpNEZJ36Hhte",
  "key9": "5bXxMMRoLYaF9cXNtGejmfn6yX5ZvKCTa9LCgqw9eFWhFqTchwpo2LheWWB3xGygUXd4i89N5B7Er6wJaupGDkRo",
  "key10": "sMkPHK1WchJLw1W8VLcvP8mT9AhQa1R4Qt4Tpm7mzHmygRjDJHGmqP8A636MRfDvwcoWArUSdUaGkyVSv8H6tte",
  "key11": "2QfXCEYGYxD1DXE7LkpqDpm5zU8qBdxKSampnD993GmQ8zCKVjedaFLVnJSJzApbXdm7TLbh3yrUyb3x3NXjuUbf",
  "key12": "42URRvE7tFwtMRPYgTuwrUkANnk81oHoMUuSbdDirz3NSe4oqWJ1Aq647aGdb7aSMQoCHMNnj2daKZKXp3HuBbnK",
  "key13": "44bpCoPXkXzbr7a7ZK2JcUu93rjsthofpWyMipdRvXJdN9T6esxL2dj5PoL5n74iDqksTxbegw86ELQsXqtjPBSo",
  "key14": "3YpT2KJ4DJQows66GYkg8kCUDmniyFV7Sdms2XUP8AbNLbYNzKi8fYpW8oXPBVAz1zMdZXaiANaginYE2dxVfACA",
  "key15": "593smBKg9M2Mc6kxfc5sTBWcynA8EPbPNWiuhrK6cvBtLjftCYxswWWSRGhVzf8EPEtMWazrQoYHU2tqa4JpA366",
  "key16": "4dfvNCVLhoVwCbPewBBVLb4jvTVjVyY2juSVTc1WyR9jMY8oLiHxypvGvyaXSzDDx65R4B7sJeTdcXRp6ERm7Rco",
  "key17": "rG74F8ygfQkmjinhYVgEorpAvyjERKWrbbr7YoJoG9ggwEdwSTQQqvii3TMxh8A5MefWotgnQTH8dkLUyC2FqhC",
  "key18": "3cKkt5shzNr7Zfb4UyTi6dU8qyDkyvzjdduTAKpiJgCJtA13j9AGcG8CZ7zFr8HmczFaqBHEVaPsWBwcxAcQtrU2",
  "key19": "3bB72EowmNhoxofDRsKtMbUkxVG85Mwvkdiyv14HGU1WGggF96dyw3uWmbLmRKhkR4ypw15tAfxNHMuzhX5mf1ej",
  "key20": "LaYWYHRD3tfLCQ8fviQBCcTrAiaEjrLBznX2pJkZYDs8azPv4UJu83gac42n34kM7ejNbomgQ5ysyMdKSqqToKQ",
  "key21": "664bQDcrH8RkJfjtEtB4fU449qAXxaiiSQPsBNjKXjHC4AFGmy3FQbuE2AmcZ9GKzukZLULNFLcy1y2GPw9DqPYD",
  "key22": "5Bxci8sR8Lo4vF5QnYbYBS2cVR8ksrwEBEfNow9iYapaJ5uwoDKSrzF21Kbu5hrLGSeQb1GTPEUEDQaqwqiJ6g3r",
  "key23": "5hbUp3aBfimir7NonzLs8ALjhSDjWdXfU3NVCDrE7BQCWkRPjF72wtnFFko6CsThsYBDpE6C4NLhgmdNmhcjyJLk",
  "key24": "4JwkAR7BaXuPUA8yR8arER67hA3LEntmhdbJdiNxhpB4e7fKxARQwL6CAtiXy6pbYs5t7MKnf3sMKz29NcYubUF",
  "key25": "4RhKo4WqEx2UekBwFTEL6AiXgWi8EtM44e2rFsbuYiivG3aHgm1nLiUiHdkQohfWz2ZF7Nffes4c8ePsF4w5cuqD",
  "key26": "5miMZ8G6t1zcCfKMtdszwb3KWynqvk7DTqAeA2dxdPs2nfFjazsGZhfmi4xgTUGa34cnx3qteoZ6MNaGwV8eUTap",
  "key27": "5RkuiuX5vfV9uHtG9ohEcpyHqaeY7svHb1XvJXjH58FQqHd8Rdeq5uMmaiahcV68Caib1U6ZBGBV4q3DCAEHHRAV",
  "key28": "3ULAAThtfc4bxGLGGBjRorbodZcLawddqS1dnPAjEzydFWA2U6fXVt6dZYLQ7v1XSSnxrAtWRKM8jC8qCymLGLUy",
  "key29": "626JKivbpYAwuhSgN2yT3751iF1z4hPo6YxmyBXnCnrEYQ3c7DYTkVG88jTWM26qyyHYZFiJiwDTC9vrJ2bu5LrA",
  "key30": "38BqcWSnSukzX3Kc6ChxMDpQsWK22Rj7kKqBeaovzbDvW54SAZNm66jRETHsrfQjq2uQ5wNkfP3vCKfaEnpZEtzm",
  "key31": "32t45C46RoUKiQTc9BoTf5HgUDCPaP2Lo6pQQbViGTuUN4UwyZyyT2EUrH5HUPJWVpYENVK7FRfpjS8jDV2HT4Ep",
  "key32": "5cCDsgx7A2YTu4v1C1aHPksxCjbhbV5rxB34TuMZUqrVN32J1BHqEDq7pBHbXRpqS2H3ZgHnsH5EZZGwWbbq1MN5",
  "key33": "EztV2LHRykVMFcUwe1VVBG2p4VcZuQkahHvUkJid5h91gnbdEg33rasBuipoiJv99Q2zmrHUyQ2kG8WkbTaZJGg",
  "key34": "3Sp9Ktn3gEY4LWCfyhc4A1PFre4nrDsFJSFzf9rJ6GehKgYNQ69iZg8XoF9BoQjCzdxrgPrCq85Ag5mAnebQ92j8",
  "key35": "3UZFSyuX2uNGYm8wFzqPkBij7PzcVqzH72utc9V6DC2btuuUAnKJ1kTf1ujtn63Kqtz5NohsyNGwoHybqh5mFj2F",
  "key36": "pGLxW8DQK3t23x8ve8jVQQh9SX4NTA81EimBFfPsJoM167gfVK4Jvqbm3XWV9jmzouHpGkFqYwjK5cY2Et3EeR6",
  "key37": "61HVftJXQovBrY475iWDZNvcUcT9DQwtzyHyNxpvxZ5Kqjx9PbNRubS6gqExJk2Ejq692N4ByQmEySPXqM8RiXph"
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
