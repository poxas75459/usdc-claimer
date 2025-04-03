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
    "4YpMUJ2KrUgccV1mHKvtqhgKjGxWatG3vKy9J61hLegxFRxgxjFKnEB6jDTeN5miRQsR3veyeXq9mXaiN6us49NC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a36ZkP8Z167CwW4r36vcCU3PQgLztEYe4PC6YkEDiF2m357akX2bnzaanXDuZwvJCWz2vf7PcWaHs6ap1J5YB3E",
  "key1": "C4FFaRaT3buwrEytRmMaRpNavCRZBj3MAQzZevLNJBBHEAZseWCrgMuQxaDY2kntULhH6aBaWCNhrT83MNqpufC",
  "key2": "sj3MN58ESptEHbfj8kQRtvZBu4WbCDQB4F8eFt5vCmE4DQjuaD5kXHktPrYFxbS6CQGVdiAgBb7QmkqXLJCxgU4",
  "key3": "3nGKbjbW9NHMaqPiuKHY3MJqiWnMXPrhBVoePqz1HzZ8JsKLU4mm3W6J8FF54BKcZbwKmFAJAPznmrEqRQNH4RLa",
  "key4": "2aUdV1FFc6gx1x8DxzDf1Rvri2Zctkpy7qNodwuxjR448fh6QznGmVNgvdJFTtKhDEUj1kGEG3gfeMpBTjMMYMzV",
  "key5": "4D6bs1chmYytYcTFRdveMz4kUtTsG7pxLe87ZPdLviaYgM5u9dGzZXx4v38tBjtdyeAd7VbCN6dJKEM3VbxhyS29",
  "key6": "2yTLk8YXLCHwQaaNg78EB1RZDvA3sijkzapLzrtU2iiA2aMcEytduH1VZM6QByHfyZzFmM5WC6yukWRam1svVf8t",
  "key7": "3DUESvaLyAC5yP1Cp57GEgFz8QTegd4rMQdegGd2X1o4ijLR7Vuu42auZdCoTuasivqDW9zKPGaAh9qxjVdsZsJo",
  "key8": "3eLPYMKmXrMEsuN5FrSeUn6vZZ6jA29TEHZsVw8XbQtz73fiQGny9F596RcUhJyv3EQyxyj1RrcfQ6VMkN8gZso2",
  "key9": "5JLSsMiCGTeS3JGVHtsVzmfHSLTstV9iv2zYo4HXcHocCaAkvKNBh19nfWZpQr1T8wyVhwD1ReZRzpwnCQK5vxtd",
  "key10": "5utUQfidWxew6hDhsfjdt33WSDXpnmvzHrt8DJStoWjhtidb9Mz1Bgy7GxKifPKo93nRLY9EEqtWTPe9ZDo6ZcKm",
  "key11": "5W8YYpg1CnseDxs4NXwprwSTUM1CmcG2wkKmcywtk71N5JDyTa6y3GqyntVhUahzU71xFn8gHpmxS21Px2xFo4Yx",
  "key12": "667BqKmqV3tfoMKENhXYRG1qAdbwdLitwxYqRMGRqubCwRELhKT1JrF3ZLWeLNwZdnmdB5wZFjBVvyzm5LhcFcom",
  "key13": "4roJDWrvRVEsyDmgNA6BUPWJPoNzqBPZdFmhdT8MfZgqtQL6h7ea4XUQHda1RbsjfK5pyoRwjHkJJkvQEDX5RDb1",
  "key14": "51GXmKRea9W8iZ3LAVBViExLn5Gn1rioLy5CtmnPu7cQh6YgNRSdaCFk16or8zwTo3u6MPwk6XkekfWcMmLZcHWJ",
  "key15": "3KpLbfePcFfJzxEuDbnf2uzgmmxPPtxD7EssB1rLq8jZxEsfTujygz2YkDNftXmEGMHtGm9ANmgMju6wDgzeGKTz",
  "key16": "4rmX7Eh9CVcjhkQrT457orC5LNdrVcGAH2yhc5cEJKYZvwyFHbB1wNQUBGzPdH4B9MLUXcyLfV5LsC9b8TPqbT77",
  "key17": "63ytexL5QLmC6PAJfwbUK5j12Dq18mKzB2yeKvsXLGFduGr1TioBLC69dwMdWrGQm5aZLkr6vVfcCZNxST7JZUyp",
  "key18": "2fRmChh7Mp8Dg1umMjGsfbd8cGCVdXWf6A8i3RDjddKG1FP3KkvLoHQpwgVS7YCfskP1vJKiZqn5kobNbJrnBTfC",
  "key19": "3c9ANWvG4kaBxJdwRSN8BMsG1hLFCdbct671bthwjESA4jKKVKJjtsqv98PHHKswcghj2z9NburWN1ME9nBpseVN",
  "key20": "rDCy6qtsXPZUtSMZiRCxsYHuKb87T4wYzVN5QCEicgDWpyM65C9WBJyDUvSKrfNhKRatStR1FGDKJ2VMvpeDWR5",
  "key21": "3Fhjg8rXjjWeMaV39ssbK3wziB2jpn7fKtxX6bhQ17qW3F9TyUKNRXeoDcxhnyK3ZYcHgHPfb1rXr7ojRzPqBnx2",
  "key22": "2XckGGsUAAfR7CXjrDEanx3j33gktfKXWKVvcq9BXVeYZ5zSmKwSEwfMNrV5uZAWDdpyV4xfUqf77wkph3F8ooQ7",
  "key23": "4S6bTiGW31ipPvksu6KP58VKiURrPRiqNHiApkuM4t1gMimcykpeRJgRBJXKMNtEqHRq1Aw6t8hcKHVqDzZ35LwH",
  "key24": "2HYXsucPMb5KSj4hLcSFKgjcJCSPqXB7NFgL4vF7UQt6RcGbBaz2pQBr2NDT7sFpWDhjAV2ix77mgqmjWMcM1uUo",
  "key25": "27nwVxLhrEWbkkG5fvo9ybQVXBsrmP6kLtDsJmxUwSSVGDWJiojwxeVpmu64yATqtzBNPJJ2aD2raTx45a7zjWQE"
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
