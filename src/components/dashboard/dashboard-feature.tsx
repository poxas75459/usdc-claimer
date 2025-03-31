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
    "2Wo6jZFs9aafxNW5F4DqQbi9FkHDo67p7w3pP2HsMcwTGVnJTtrmDvH9wumdjDi5TUHikhRNJQmbykUw8jEFfAux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DbZ9RZptowbX7pxY6AHjqguy51swJsqbvNqCUmAmFayc7AQqhZco3GPCEJG1UC5JbMj52CRrnd3wUi2P7nuHBtb",
  "key1": "5pXPcUcdRiM7eyTMem7n8imrXnA6PCDuwp2L4576cCM1UGxyYNG57qhVgtGByjia3JJfsRQ48M1JsKNKCaohK7k7",
  "key2": "2tyDguTFu6RcMh5bWjYFsSK2Btzq899CE3oqtcK3oRKffHwmK3CprbNm6GaP54bE4FCumrpD96c8YNTcVuaQuLKR",
  "key3": "375j7yNr1BMUk2xCNNuyYk9QgEPLoub3f1JkdeDUA6PcVrGq8pDZ9GXDzushyMv9KGjT9k4ANZZ8fuJQ13dSoQtR",
  "key4": "3DChq3wy9TKfequjsyGc3JSH8R4FJtqgwSqn9aJN3LZMV3WmamBiWjU8qf5wz7eFBHcYQPiujWsD8PnWxeBK3nW2",
  "key5": "244fNEa5MuSBDvPZ7ZXfCbrBbkq87F5A4HVDTZqxQbPHRkECFZjCWUCzErBkuQUehcmt4f7QryWDY5VTeKpycVRc",
  "key6": "5KyLU8Mh8KtJ1arcaeGqzpdZySfc4Fb5WwsxgvcnChcrv3wrKtzwCXbFdVakLfFj7PSTq77tdymdo3xatbPs2SJS",
  "key7": "4o3DwnPFwEaPac5NF71X1UhL2mMSVpUkk9RqmLmj2wnFqW1nmTT2wbMs2z5KsVNG3zkfz5kmAzeqFEc3ndHHDi4G",
  "key8": "34uekL4fATzZjURuaqaPjzScPxvsv4XsaemQ9H56AYF1CZLHt87jPQ7MyHdv1oVaYeighpuc23Uj3VY5j5sp1PfY",
  "key9": "28sF3AWcp4dNAmGPmrtqWZvd9ANSGK9xD6gmsiP7g1kwxzUMtT6wpKvgCYPQ3WJcEECFTpU6putuS32eNsk9u4ej",
  "key10": "45sc4FArjUTADMybxkvSZQGMBuBgJCewinWPHr6GtiDWpicQYjGRMHV93tgo27HsRotDEJcvw9cKfZT6PWCXSMY8",
  "key11": "cj5qcHTobFtkYP9YgTwzSRQWzCvai4g1SCUAqFpXviym2XTwEVRvL15QukzWchHDQjRyzykpigdLfeLFRqLvy6g",
  "key12": "2xQGy7g1hVx9Aj7svZz4MEZkChNebS3oZBiymUbqJqsRMrHvsvaZucBrgh91qS6oPbS35WvaVNQMLY3sskSKJjcd",
  "key13": "4w9UhL2w3x7SK1udiCkuHUS74TpYn2En3FCYWsdqXEcdGcDk2CDTXuL93rGMXhTAEhmqCT1hjdwK59qCru8FdFLd",
  "key14": "2WkG6NvtEipZYvAq2mjm9H5yH6hJ3A5fNnRTPXnuPUj64C2vsuAsoqDKHPR1o8ferF5caRv1uUWZGifEVse2Gbmk",
  "key15": "5oqt66Mzq4dL79zX36WZzFRpo6Cg35Qek3fUeZ2vbJz4T4moUPj199VdsCwMEKqi4XxF6X4mfuwdTsWNNG9EZ2NA",
  "key16": "ZevcrbMYb9P4SkfW12E8CpewudMqPLYdxKWsPbYSBHM1JyomfAugrr8PMdhqTsK7TF7obRfjscJrkwYP5fiQX8Q",
  "key17": "5THennazUmcbawyW1NSomXpNhjb1fgmkAvVWPcddhBfgHByRhancMXVYdnRzawUuurzLzS22PMJqsqe5BgsRSUnf",
  "key18": "3mjfuw66PdFFhfZkdSvA2tHC98YZTBSMrSnz18obmTZax4TnvBwDEPdjzywQekVN2xJXVwAdjn7ccBMY8zmyZDNV",
  "key19": "2UJufFbc5aPSeNdZoT9hxuiT2LKLkBhJA4VoiCwvbLjQR47uxJ9btEJvcLgRZAG79Js4ocYyihtztLBLD5ae2yFX",
  "key20": "2apkuNmhS6wfd7Nzwkjsvejzvzvt1ghX673fX5D82dqdEvUrae7qEWffovjRrLxBG4wqNZRWuG41gzmkE63oUiGY",
  "key21": "4AzzEP5nwQ3LrTaHGX3rffVgdriccW3WFJHQHS8JUH2SDF9xCV7dJCgAhqvYiUWP9pCwsdmi22oQuNRtWYVrK4Pr",
  "key22": "bMhVvczxDjrz8kEzSnE4mStL2zPNU7i66oRG5VnYa8kcAv4oHuAhXuu2t2Vo3ztbxkDRgegRECHxzpPk1dtAiRF",
  "key23": "4yVpwG3zSANXdBTg3j27ENJds1rUVoTQUB9NBppveAfFp5wrNUF44Hc1g6X2BaJoHZMdM9h4PycuKuC17BLwsbR8",
  "key24": "4Spj7qpLZDDYFRrdiADAqMDZAaR17JyP3PfQQCG3HgTpHducdNBzmarKAH3gA7U3cRARkxMo9PBJaTTFLhyvijdS",
  "key25": "2gYAXxPS4kstEseQBBXfaDfmQrqhm4eo5S9EaoARiQ74ATfqxujXiCaYNu697Czm9e1Lo94Ji2rMszBsbJ8mnQzv",
  "key26": "4aRFAgQfmrNpzLPWaA1bPPYiuYPdt6r6ZWwG6BojP4MB9fpe6rKpgwvieGJeoXQ4QVPttKRhGzYxYjpkULgdd6JZ",
  "key27": "3uDiDJ2eZTQJYgGqXAQgbkWoBLDbn1dtCSv7SuCoHW7ybTgc1PsEFtpeaTi3dN7xcgQNGYtfR8PDoAvBJWFhXGuk",
  "key28": "4Xnh3Y6rFWUEsYxv1YR6gGNBNxSiam3veE7k4WCFpREXytSUcVQWswqKChAesmLnG3sYDFSEuQutTmfATQbzQ6tP"
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
