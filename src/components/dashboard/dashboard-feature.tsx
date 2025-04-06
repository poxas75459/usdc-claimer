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
    "2LgDXtGeu3NmKr3TnyDH1HrvZAxCjQEejYXPDmwgJRc2rbDoLbtwnK9co8UvP9zKyeioAZRNRZWgVW7uKpKFrBRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "287SE25376M2ZoA6zbbvtkKaWkk8ZALkDJcKbaR3bwBCoty6aJ2fw6cS4qigFGcuuuFo6EmGbdTBygqCgMctyAsU",
  "key1": "4SFdwGwjtaFgW18z1S8DsEf6mVYqrgLz51TnHonDq8Zbo8skB9NyB5XRjEvx7T23b2tjw7qTofNycu8DgRHo7UfU",
  "key2": "4wmCcGKFwimsGsGRuD1FJywvjQgnunHZyoHP33C6fVmrRJAJfaM8sHgVwumzPo8n74bFFayoGaV2AdsiKRyTBsiZ",
  "key3": "49BVY2nyNFQXLAb6uN8L1Ghfjg4DTAnT21tFMJDtjW83h9WNrf9hT1oYiBsTU47HjGaucPabUGK25sgi6zGz6JUA",
  "key4": "3u7A1C8kg7qAGQznyJJJ3W4uA3o1PzbmFJzQg21Xx72pLfFetoe5xyFFbZtaTHWDKNwFmUZRcq1mKgcEq99hcqob",
  "key5": "4ZW7tn6Ce7pg486sp3Y8XsUhLWsga4zKP7bwVUJu675gN3dHEP331HoBBxz9zmDRqR8Jy5Y1VfxKVgcVu4CGoQmG",
  "key6": "3gUHbprsXW8dzbZ7aVHM1FxsbdN3Rmfx2J3hAKiDo9zVPXM7fw8FcAyRV7pCgzwtAMQbd8v8RxqMKRAZbkfy5VMK",
  "key7": "3tTLtQfhvzcQPKbTYi6wGZK143tQ7mzzscKcx7XrNPL6bxu1RfTE26HUWaQdFzsAk8Ew49tji2JzUjxJxcGan3hR",
  "key8": "g58GLZS96jyvUECuRxV9aQr2VtoGWZBwpgnUYsWS3cubkbhdd4Seuz6epKzxNRcNu8CXyzuBQBuc3hWbKKvtFdM",
  "key9": "678SQfFxS9yKAd6gUQAkdMEPFa5b9cRL6FxENXU8FvDSB3Pri1dmwmuzNKf832mYTCJcU58o3joCHdC8H4HhwgJr",
  "key10": "2kAtdtD6t6SQfPL6MRpRRAHkTZqgBbQLXFdPX8bFNnG6DFm5ixgc3LNerUsPmAb41CCNVkcEfH5Abcssb5rDRVBn",
  "key11": "4RMsVgCHPqJn2BTKGAFys61mPerzNsWTFoW5cX9DjynwiM724ZuUWUeeJSXJ2zajkF4xHFuJVNX4fcHeiuWGcLNa",
  "key12": "2tS3jAWY6DfXMRNuaUZ5m1xrNzefc5rVwWHdjj7emBG8w88ARrRLHyhRJURVM3sMrw2Qm6KrVQ2RKFotvjetZdij",
  "key13": "4UCpybuSatLUWfHNXBTBELpdtH96CZTzAzvikJsN4aGwUKaKBcKPWRBiFkb1ENv1Mm8VEYk8xFoAAqimiaUntiWh",
  "key14": "4tkbuUyFgWCDU8gw7YNzsMNpWRf1RcXxwVLoJNCQb8NHCwp3uyHioQ6YvjTk6ZoJwjxDJupBsk25ZQS44gB9bsVz",
  "key15": "5ymV2NXSD4SZrW6sC5zJ8uP6SgJxJ3axbeBqXSkiTzsxMGQKTV63mWYUG4ew1mdyqhBgkPh99FKD7yD2pjpPP8xt",
  "key16": "7JrfeLmV52SwQLDBBBo2WiahvqyjYoSdM9K2sH74pqU2NvsZZ9Yg7GpbBQPYFCE6zYKYu8UD9HsemJjKbvKS9om",
  "key17": "2rbCtQyKw33yxSSV9jVwMwaXMiHTytfjBSvtW1hFmmjVpcE8y5nZoRUFJ3kossbSQV42VgQGSGSrXuLXpBYUJ6Wu",
  "key18": "3Q8c7QggzGabpT3Ccb2efrv469SSzUWRrdvv6qbahzvNLtn7J2v2PK9g3HJU8VqCC3agxm4Wa1sxW5dpiJP8RBb5",
  "key19": "36QuhHwUQyzBs38NPxYbkgntnCgME6qQVVqPQUHqik498fa8wxQpMP9vstrCjsJghPAsVU79VXkwYnxD8ri6QwNP",
  "key20": "5vjdsGKH438fSeKBd8t1NEhhRjxy8pEmMNHCQZkFCG1BXbm8gLGUZwJ1WSJUZcBXpgh7QNdnztApsXiPtu5f51dr",
  "key21": "28t4BsNGmrFuWCwoURznhS1YdaGpapjoJV6fZ2MXPQhBuuyi6YKMY6xADTPeShZvAcswJeMMGLbWfrio3KRK36Mj",
  "key22": "FFeVNn5wJ5wkLArwkqnhKAJy2xoJznPLRH94trwUFgxnuW6jj1v5TXzs4sdGaX1eMwoQDbBgkToU1xV98KGeXLW",
  "key23": "5o5A8wLnTbSwf8SE6aiMHjV3MbdCrucNV35EBG6YBdXxejvGoAzysePuNBaujn7bNK3i29oqXYsCWw6stXQwYY1z",
  "key24": "4Vy4THpYKkz2Ms61nWRFMxcy7xQhuDkSns1SG9p3kzebyzeSD9yxKjheCziMJ46rJHnbWTTyGMRU3FKNj3Cn69g3",
  "key25": "5E6FgwePrrY4p73JvboyRbyZzMXnYkWLPFJ47a2MZEr7gMuKbicSwAAMPTd1TmtAYZ7h7T9rCk4d5H8MnXnUcW92",
  "key26": "25FFtoq5DuPUsre6kCYhEmXfs6SVmTS4FfM4UcigVMaFGqGcxtdhiqms3ZULBMGozua1JmbSV8AhTAWz3Nxe897h"
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
