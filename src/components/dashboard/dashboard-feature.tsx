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
    "MPhHHUHAAMQZzSPBah4pZ21LidLKyEYadJF8yocXadHkUVWpf9hQ2ergn881oonFnFqHf3ZhuqmpvhMir3itLZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36gNaTqCqdmjwnz3wqgusHuezLvhCevCEF5fAyWYJfSXnWxajj9RBjyMCupmhnjS3CM2ZwiyobKyeQ4DohTNuRJG",
  "key1": "5VnsYk9sfu52W5uAP6fSYDSKsLCUZB6UgTEGdHhPFhpCBzWJTK9nFRmAm7Cnomd9yqCLwMcBYh5T1LXCSVtCq4oW",
  "key2": "5gNuqPchBrMsF6AzWxPXxUkYaCznqhQMz8X3BLccRPmBUpNmeAg2EYpBNAVXy8TPA1yzLMMVRz5bPTNsjbmpu3Jw",
  "key3": "5yun5dy3ioUn7yZFiQ3TomAXs2Qk58b5jHfxG3KA3fGzy6qYm5NVA6tsNL3Dtv4aDn4kXs1TnPu8Q8mAeq6QDFNz",
  "key4": "4dgqDaWGMeWkR3K1sY5WNYuNLAQL4KyWQN5ixbcSf1RFZrPXRYZ36aujwat7QbWV6bhtPp2qw1JTgAG96bzewJEv",
  "key5": "4HPjWXgR32QxaUWuDQ6o9pMsnw38v79GMHDJotsWmyqX25tXN6BVaofdxwgQJiNmDHuTDu2sAp8oBFE5QoyC12zt",
  "key6": "4PHNd75QQ5C2dgtk5apx4jYDLbNZfT38QkvAMfRKCr8HB2MNa4QMPXnLmK6oHEakpKTcJmcwf2PfUff6jdLJrHiv",
  "key7": "tH1K4Rp5HuEt7SPMcgY1ie5cwhSWCXnxY3EQEsZ5CaGQFPHx8QUymw8Dn6CGqZPgQyfBLRxTZZksQDqVLEbH5sq",
  "key8": "2H7FUonsTBadqSTKs4TqYsPjZp7uWMuMLhk8QjQqBfWWLQj7QWHaGhNmeT1cy1uHaouJprrkRr7iGzNJA2u2yYYv",
  "key9": "3hskbCXMoCqHedQLwB7FQjuHSDRmxJgcKWR2kpSj3g3GENWCWZ3dYhjKNiYNWT9Zt8QL5jumg8tETAc6wgLYyJWo",
  "key10": "4SMcpTVp7cfR825oeCcL7CqEmZPfFnb72quMqswdcvYTXCTx68T4hoQ6NiJhovyWbtUjhELQRKae6btj1dHe44Md",
  "key11": "2XR9a8E6o4H8GXXpEi1eqV2Wb4AJ6WCcpykxkKDBrAdprw4ng7ML235rmMVCZnBkrfNtWes3EYH37AqxZ99vCRRd",
  "key12": "mVuXEHHWNdxVPXKrUNXEmqMCdB3hkfGGM5zfS2t1mfYKGuryneqN3PVESf5VVnHF9uPzLdfRYTENvfXjSREZhNq",
  "key13": "4oJUUFdvHnEc8asbidntBEcbyeR4qhbivXuQrNymXJrVToZsZeGduiE4ija9TwosED1W9jyrkuajsUQraevM6TfH",
  "key14": "2Bc3UkDXoHhfz55isib7JrXv6sP2jKPPs95iE5mKNNj98UARVgiVJwE4UsiLWjSkVYsGXvxrSNyT5TF4QM3C8rLs",
  "key15": "3Bs68LKjbDqeoJrXpwxABF9F9MB82XCjnDzD7KrG1HeDeXHzrFkKiaRhcLixWADc3uuA35VW7NSA6Q7qCDiz446L",
  "key16": "EqddzC68ibGM3cPQ4xEaQ4E8AxtcNmLN454Qb8R4L5m8UBVRxhrd9bi6SdbuQZVsfkqPzvWg2d2Md9oCeTbtk7N",
  "key17": "7JCuxzuikxsbs7d6pYR3G9UbTP7dq5uQh4c6NLQY7Jab5LT48kMLCKPcNC7uEQieRK2oWukCY1R9xSJvpF2qpE6",
  "key18": "2ULR5SAzkxhnip6yG9q4jGTVY136Z9PSg5gXMv3u2BJNXwu54Mtzf8uYsZn3uWxrkgBnMx9LJPAEt5WQCqeUb2bB",
  "key19": "4bGqVjynTQznS4WwEDmQ9whXPvtuT8ef53ETpq1bSj6zSoHizeNkKZeQTbNvibSowKTPVzBBtyF6XGPQjqH8knRv",
  "key20": "J1zgBm3TXJjD7yN13twvLSmq1gzZJ6ByszV8pbz3NXmUL1L49gHsU1FJc2V2scM7Ct3rFoqW87j3fCUo5EA7aqs",
  "key21": "2SjedorcJGmRBRtkeqH6K7cAJ1XDfAmvbbLzhuQqs5mcHewf63pbkYEZ3rRbHD35pCRVxZsJXFMnLgzKzCbRxpNw",
  "key22": "5K3z58W4tdooLf3pH6rFWYa5GqucYmjvt7EtTUk4vajF4YsrfZSjG6E4krxMgHhCqWFzGFwVG4Jv2BYhJiCHngBe",
  "key23": "3C4dHpHuZckkmCFxoCiKaYJhPCE4LeHM9CYGnPVWVTbRtUqsj1mkzeheh13QTwDabMcFwys8nAopoqyJUQzYfYb9",
  "key24": "2dNK6LZNtJ81ysd3qEXULTDndpbq8C9Cd9nyGBoN4ZGfChoPFPnHfQ7awLHEyRaDiQL3c6TPgyH7Xge5uNGJFsGi",
  "key25": "2sfjCA13xtQwmuiCU8LurV4vcKEiUQfFJmLoG1BBAAfTUPNccUA86867XjZhxnvUgf7Zm9DAD4ZPRius2nisHU7K"
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
