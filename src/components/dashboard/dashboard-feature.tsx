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
    "4Sc4j9rqGFusZQH941WdLYLoCt4cwxTjmPWUMPcxFhQVHsHSJtMC42SzKyD2bAx7QwBiu75uNmJtq1Pm18LxrY1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SqR2i28CQ6VJFFpkP3utD2S3ZFRf9Ac2tgyy1qYcrzoYeemH3FQYsoiwNhAYSzJxgR2LKPz1fDJjhzf7Lqt7pa5",
  "key1": "3YexcRu9rXKpJMLnG7BLk6mfdn8yQWnUn5gAG7sHB8D8vrNxvcvNszZGULBwDZSC9efxCtcGPG5a5zxx8hapjd7z",
  "key2": "2KnmACvm4GBoog17r4xRhavPt9jsFjPkgT7bP5tun1yrUhrpwFmSNBaRQvdZbZC3GrpT4awPU66WziBpj56ruefN",
  "key3": "5CNv9nPkVwXRx4s3oh6w3sCG9tZJ7oovPjLW3s8c1HhsGSoAnUVDB6bY6rzcKSK63pvbZyMUpAxVmhdY2Ywkkzej",
  "key4": "27n1rqzLQW3ys6ba5cdzynkA3nNwqgJr2nfQVyvzUAWDPNu5xWY8k7Q6qS4kjNSPcWpN5JSqp6MiQFFpoGVhtfBW",
  "key5": "55wwg3vNK41UCJytB8ky9QAmkWhvadEfx5YhXQKXfRqw39dv5vN2C77thxWnGg7L7EGXzbJpSAqCWEvzW2H4gTf3",
  "key6": "4JRrwq3YjUa2ADbxd74a9dEAA34iMNRkbkigKJbNTwsw2qtiHWiCzyXKa9j2F255AdRGyGyA1oky1gG2EXTC5hqe",
  "key7": "5QmLN9CVmgyMZcxB2mjBtuTBcDpLX1XVHhm9VptXdpYCqqr5iPLFBcJLU3CoeSkueqUDJexUJWTZoJTnNG6cbbR3",
  "key8": "5yyQmRWEVEPVtx1bMiGP6f6KMkEBX18HWkNczHHpWSnxmp1zLg8NfFrGStVULurcv4SqG9Nrn5bVwfNpjUWDJ5uj",
  "key9": "9KbEbhXe3gRJpiqDB5fwJMKAv28haCmpm6sonmLiu11HqmwcURN3Lvdc8vVzJ7aCf1k5pK56jpZKDKWTRBZVmez",
  "key10": "3voVqqZhgc6gRHpu3d9pBTNocgQ5zS4wMcaQnxkwzBCmGmDUvwgavHmJqJmo18MkReYNtd8HTmdwWVZ9nVieTUqQ",
  "key11": "trZVmH46dPLHuSofuDiLZtdvLBYvAX6jzHEcQaU8Mkp46CE74MuEvavRCsdHQuwnwNubiSDY7STD8i6LtKHJbT3",
  "key12": "5BYosQMj7ibpbgtCMrj9ipsvuSviNd8geQSstQWsTr9nhBc35SQ5SGUqXoKTG5hpFtxZjx9rtSXnfSnbzqjvEiM8",
  "key13": "2hu8b4nVrs21JxtFEikNpTWb8ez6bAgkMJcb7F1wrtx2MYQsPw6mzckBu7BMr7H11ou5Tj5Yt8yn7GsBroYpwRsH",
  "key14": "3Ri9NJz4gyevriyuNiwk2e7r16W2Qf1sFpoWvFMHn9iTsceVChtCtGikJWSFZFqkSr2AevbNe1WPdxqb3SNty71b",
  "key15": "3QDQXeaPVpC12e6e4iFpDRcebS5DVktyFk4cFUKhqThdCbuLeSWq5YJiUKDySYYudZiJQFMgHXdJSHEWztezqKGs",
  "key16": "RDjFxbTYChfDQX88mRVzoFttTqA9V77QVHSca3wd7jhs2atxnP9FuSueTxzoVhDU85diA33FxKzVjG2Zfo4ZuMF",
  "key17": "3CgFTErtogdit3NkDkfdMgWAMAmAp45M6HD4Lw6gY88Bu56C8Efd3KSba7eS4mecSy7yxzyNq58iJtkciXus1hNV",
  "key18": "4adNmNqqHBqCjsHKvwSM9fFHnkxtqzRp6ab4zFEWG6qUZ66c31bNqSC4MKxyEuxm3DGjeqhchHMyFF1MTEsrNZss",
  "key19": "35aDChD8cumDfwoMLLzasDhH9rJBvdNk4omq2gCv4He7LYMTNiMzGtZ7nNUxXG8eQEFPsUQ4VzMoW8Xmgbor2toJ",
  "key20": "ePdfPFP1PFwuk5yPRikLijWSoPuNWxEZXqPnMZ74Kegpr4JNr7PciEopPHSArhxXxnDz2t8qK2Gjf2Fp5ex1Ad2",
  "key21": "3heWLb46A8e7aDakjV9tv1Wjyrq9Yd97owhKavHvKxb9toW9RuLfBUPCP9QVouHwz6K5DdE6DrTYDq4Wt6tGJKVK",
  "key22": "2cgAYNmuqBuoGnvA5HujcT4pbgF7h7fHoJhERz768s9Y9DECJRqJTTKWVGGCaVCofEqt4ym82HZzSJX2mNX7sEn4",
  "key23": "5APzyJuy67Ro5rcaWj4kTN45zQpoQaLBEuWPdoYk6pGYXWALfmXBdAEKhDLgNA4ppQJJf4gegrn7HmnnnB2hefBd",
  "key24": "5mCc2YFHQsoT3YgV2UCDze225WJz3uhNxHsSpYw9TU93qcGHh92p4Vuwy4cgtj3NceYVP6u4cP5NuWmp9gNzG6Pd",
  "key25": "3GQkVNqP5GHSAVFoUVwFadcP6sXhVv95AyD1jEXvvC9GbRtzRc4xeebVQfdp5iCrFW6umAoXxfC5EGYzu5bWrc6c",
  "key26": "3Wr2X5gR7r3XPo7FbQUvFunmRy8jGX5iXn9KVUSz3TnmZS3SNvDfuxQfGG2WJ1jbHbqB2JXBhQhfSAtakShcLLB",
  "key27": "28zkybWx3aaR3QiNs3USymzLAcuBWPTXKngJmYozSZzfukr9n28vW2aDrxzd44txKEfNCS2zw8tgZbvnEAhvX5pt",
  "key28": "4pPV53eCpQKs7PgiypsfBvFhYtKt93pRDusm3ofCLcVXiTnNHECU5BjauKnYG6d5JzLFB59A1gb9xbWToGMtDKnA",
  "key29": "gf25aaEML9NbLdAytpovaxe9R1eujdRkq216RcLnjyHDdikAvJUNyqHDrZHUpXntCTcYvh7dgFssy2PntNtnYyz",
  "key30": "2QbgpF7E6TqR4WGB1CxU8aZrveY4BTiTjg4PBZnk5JDVnHCcYHG4hfyZGzzvNHjx7dWKKvB3UtfcufbshM8y6bUY",
  "key31": "ttJ6imuPrGRjG7N5D7aSDN3kwyidqpD4Xj1WVvWdnmGYfxNd4okeshcLBjbyTV6ym3V3WcQdFUjPK4jGAKwphdH",
  "key32": "4r8AwTvqcx5wxq4J12mmRGL85xTGEfKqobqtDEgQzRPu6SmmXb2AQAHoKMagAUxJabKU6rTAvqZ4kCyBrC9ixqd6",
  "key33": "2TCeq7gPo5ssKzQa2hndmQg7mYeGfwK1f343a3Z4TPDrHRNdTkUPGqy7HP3UjKqmwCKjTUxBezykREEDacbaEsVA",
  "key34": "uKca4rCrV3BpWAcjq3JQ9XxRYMhFdArehcEneQ7dmpqe6BAhemDk2TmPdypMGwNHtijNYcvckQSYD7RqzpCmaAG",
  "key35": "52HMayqCytBf2JKUHB4rmHjipduSSCNNe1MpuekUjyUNpUi6C6z6EyHKT1Cs8K8gtdCLUCZk67ch7PSCE1AE4Yq7",
  "key36": "3eBmTLu5jxehQiCdNVEyZVqajdDoVcFq8YQtpCq3NGbc4WiXLjbXsgnLKSiGYvBmdMc9oNkss3WArXJPazUgQ46a",
  "key37": "49XNz8E1Exjaj8iNKPv6NyrwgsxyZ8PUt64NEpoAs3g9w7aSbq9qHtp2dbVUF6Uw5f7cK963ReE9poN8BjAomRK7",
  "key38": "5eDpwnPWKoVsS1BkvbYCzso86Z2kuKnPAQTxCk9pxGZZ4xzgZWrnfQ91nbpCeyzxhGdRYELaxbhkihLsicy7gCdK",
  "key39": "2w5D6Hjeb2atGxpH2dbSVm4urmz8PzyDH6tWCXine6vcser1KzWkmxbwzT19QY3RjkUBMixfBVnNRyno9zTyCdHn",
  "key40": "4imLLuaDVoxvU71eBhkwAWLR1BuYVveXszNLonM6utVzbBMiC4KrtYLu54Trqu6tBB5XbMGXV7cV7LiyENHVCKyr",
  "key41": "33tztMtVTsdEaAHtAKw8FVH1rxGpKLP3HQWQ9emqrKg297XuJS2qpGF1PH1Apodq4dUNH8LJMzxMH5DcbEt7Z5zi",
  "key42": "2Fg4VCC9MLBxW1cmjfXGdc48vChiUbuke7yyBXyy2rZDNu3xgXKiWjjNhqqhpKBeCzJ5wx1xXyTuoFvfnbKZFLN2"
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
