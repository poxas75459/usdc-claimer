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
    "319FxTme8VJn4Rxbj7LTjzM5jUC6u6LVHugqwi6kBVHBFGvCfHyNwsy9CQ6riegc1Xv4w3w7yz8tN6vD9cLsJZEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vgq2Heug9a4BtpTGfaGFL2kLTXkZe6Hzi4aazKm7h5XRQwJ2VxFexFLk5aAWxdLjGRBfJEGuaNFzF9HPuY7AtHK",
  "key1": "597c7hVVv4yTjLaHLmeUgWRrBi22MQSt6ezjQuV2G6xHdWiEe8YJ6Cz3Q4kCJwdrTXUuZ3ctRRox9AwHtGL4nbU2",
  "key2": "4ncRBCc4rwobFqbFyjAte17DU3UBAbhq6LRDwoiz6Xo4sMMh393tmKUDP3yMyUAoKF7gx7wcAxtRkN69aUVDgKuq",
  "key3": "2VsqA5aoeB7zTp9oothmwqmdytd9EhKHWmwGs1JnPtYT5xHvikuAqo4bg2aLJRpfE4RgPaofH3nnERoqEbkh8SbH",
  "key4": "3XNmW9DWF7cN2fq4iFraX9D3d1PTyB9Jz3TiW5MNjoeGV2UowRskyU2evXHvaCwkx7KjRSoQvc1CQ9LAqx3Dfsar",
  "key5": "2THjDrsq5gYQhAGUsUZdFGAxupnGoRcY7d64uTw6J2z1nicaooAFdxEXApLFpEcuwWJG7Wnd6VFTHJHevz4Y8e11",
  "key6": "3DEknrwPdpumMoYNHjxJgerim4nGD949SdPTH4Dt51zweg2KMxjQLjsFMrJ3QQwYx68UAmSW3ZDHtJaqs6Xr7v1f",
  "key7": "46WVuWBxnHipSwNiitmQqiikdnLFZohkA8jiiiZpuLDfYgY3d3Rv8uMhsw2sqrv5yDJ2NAuVoCuSEqFzAeZU9Gpu",
  "key8": "4tYf1zQ69h4HDqHLfuTvJ4NobKy8k5p9K5BNV4SqzgSTSJFqHeucQDuTNwt1AFRC6hJRiVeAbbE3DSKkZD5a3ATE",
  "key9": "2Ktu5mdE9tX9ygAZ5rXWFDnUV6UrDnnAoBro1E1i8KmMLgxaNhmdiSwfurmrtkEZpd5sGBWPhwZ6mmUxm73Z7M6R",
  "key10": "5yd895NcEuZ2nopPYo4RARA3EhpDCtj3LL1u8vJQJVA26mUWDwDN2ez5mjTeNi7tMUfVaHsvssdqLbgTdzW1TCLH",
  "key11": "3eZo5q8K2qoAAnbLhveRwADXKwkNHtnTdDUYGodenaiBxDH4WK2p86auErm8PzEzUSRALZtfL5KVeRE6NFxxzEja",
  "key12": "fVd1iDSGHhfZQmrADjG3AabL62GNPkHzZ6RUZnHqJQttoetc5iJENY8BTfudy1ZjwZqVCiZ5JSzP2RceYNE646o",
  "key13": "43X3DLuQHsGJpaHYRcQmAWijt48QiJVAG8qFeu7cojBTNvHiugP9Daxg9iuf4pPMFpePHa6VeisrSJPcYDoGBEDU",
  "key14": "5dU5jQ5XdVNBJixTx1QHP3eWiBMCysfpW4kinWyKZ7cfw7RU4Wy5Tm3D9zLLL88fhzUci6a1R2JQgqT4xK29JeHr",
  "key15": "2dnArtdaTseqcxS3oCJbVwAEHFSJzU68EKwwzvVscsFNDzKNfAyGEdRdz12oSTo7ZkoPETTLFXHzA5PWyBmQnq98",
  "key16": "2gHoWhDwCofDREVQFXsP3waJ6rbjpNjtTuaWKairKu2XpCftv8xuyRAmHgDQsNHfVsKD6g914tXE8E2RayL5JvgT",
  "key17": "65MrVwCS4nR9gSd8eZVxjRMMvVgYCUQtjb3QxdATnQUD2kBxDVCsRA3fCR1jE8Q3FBRjgaWo9xTu8SBkQKFECBxp",
  "key18": "5WkxTEUumiDoVaTc6ng4LUfLXCorfwbDXhSTS8mLaM3rfXpuirY5fZ9ML9ukfRGX2Sr2CkLrnALFwXzq791wQN9K",
  "key19": "3cxz1vZEV33Ar6jmhYf6ZDTfTwQDHNgedRQrUXnhmR5bpTHzurennNft95D5P32MKYwqRtDJBfVKjpnxiKPkcsCA",
  "key20": "Ps2Ef4LGycQoQyMs9qR4LzV3GVVRNx9h2MJJzzJ4b63QsNfd2PR8SGhbSHfttHwz5wtLUmST3YVM7UY9tBkhpox",
  "key21": "29ju1C6nLPtB6fCHjyFPPTuq3jA5nQR3c9EdoaSY4eZKWGEvsVUFbEPkKHc37JqQLkDqSFcpcHTWWPNWkxqm6dyL",
  "key22": "SufKiLtqYKgXFzWro9zHDZojMhLmqkSa65ic6XxBDyVe6NLewLZRaAWuNyLGnoLNBZpHBuWaLsnwFGjvdEjRSox",
  "key23": "uFYBEJDR7w3AkHVMKd78qZgjD55ngFmR4eqpoVrJLQpa6Vg3f7Sy7DMzB2mKtf8aPW1DxH3ywzBwkCK6sAzxghp",
  "key24": "4xx8PPM2J2Q5ZWF38gb5WVR99VCdasDazC9kZREvGz6GeV6zJKnRYmW1MaqK1MPi4muSDt7BdYwbpv1jnaVSaYHB",
  "key25": "3QJPoQ57htRXCWWq6ESXH1wG7kFy6vCEBzcF37Dksy6z288JBXgF84qkro54gTWVy5TNAMnNeYDSCPVDmbG8rjbi",
  "key26": "4NCmr8xCxoLshrtiWDoMEkVu2MHvC6Zv3C15BMt2eyN5SJZqKuww2PTieFqGFicyDMn1UTT4bDskWyZJzyCNkTgM",
  "key27": "5mspgsnQE6zNCfrRLDAD2DvjZeuvBMc6HWdtnx35SvF59Q9eP8GAYxoUBvQ9BiA3EeYmPp6DbQSiDrQfogQwSste",
  "key28": "mfJ4Y9bszqxCaiWdmmz1iC8c9iLDQg8gyXFdc9PzX6pMz7r1YPo8F1zbJeK3eux8yNkxoytpvcwZ1VRZmmS72Wg",
  "key29": "2pUiwtj2V6g3vkLvdVuQFihpMHLbcUM36TF5M5J7PJ2G13B32iuq4pMWvq2nGSzKTJhj7A4VtPi6T1SjESVENadu",
  "key30": "5ociv7URjRkRfnaBYyGKkH8uUkVvHn84wbBGRvqCxyHFtnPFJVUyPScvYH3NYDg6uM12BgoSKRoAScKn2GjcPt9o",
  "key31": "2AXrHHcS2TDov2sfZMQ38gYwvx9rDJBjaBTZvUP6kXGJi2w7oVVJMiYD6QNCRdysnjgAoj93KwXHxfwcoktNkLmo"
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
