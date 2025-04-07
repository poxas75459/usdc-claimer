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
    "5kMHxy4utEuzyb9vX5CrGbX4dM59YgGB6e5XEwjDk6TtKXqoZ6v5sy5xXEpEukDv2EKNosMANkwsXe58EQGN6FtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XVKJMpqXtGnK8zGxYuLoZ1P9iHs5svK7HJHPktStwNs2yY3Hq6f7gHmyXYxBQDpCii4DezNuz8YcNvyXHCwkvQ",
  "key1": "4iNhvUzTf6nppzvhnyYQLgRmdF1mBvWyxNwY8Cm3PenSQCLq2J4P6gYd8AvRVXyHuSYh6Zm5Z29ghVCcGvQ6n5M9",
  "key2": "2ssEWuwj11Q6K3sR22NCtoh8ruC82hXhTaomzYeLyiSdsu39Nmd3WXTbszKbkfJQuDUyCwGjte1xR32wwp5Uv2gR",
  "key3": "54MAHuzoiSWweCZD6sBJuz4Y8BDy9n6mk4nz6Uu2voCVAK7UksQ8YTsU7UHwpb84DsSiAUMjRyMic5aU3TJqZRZ6",
  "key4": "3E2CuR5DWprzXk3ntiMFNRY7oP5V1MPQVmFmuuyC3jkxndkuGo6swzRNjnrdS4MWevc16Txw8kKYfJE2ZN76r5s4",
  "key5": "5YkNLAr2k1VoMFG1UXJFDifsJo6hL5o8PtHRu9cAn4odhCne8X9o1GkJj4K5Yg8kToSt11ourgFmqvVrLCKkx517",
  "key6": "wuXs5t95MTVPFi8FP5Jzpau4ji5HHBm5mzF3piCBNzfiDPFMmPRxGdALtFW1XMS4Bp1Jt6gQaNexV29yE4MYE6k",
  "key7": "4KzhZNUSaNuj4SqPXNLXSXppZ4iGYULe1x2ivnz7S4TYjqRxv21jV1ghA1NDdGmUqotc4PJgeQM5L27ascGgoZoh",
  "key8": "5K6T9qAMARkATLgRwP1LLKWSMUHPLMv5PnneZTawoAKV98oeRD9PyuqqeNiQesSNwGjdnjiACWjfNN3pwSQoHMPs",
  "key9": "kdHT45iwsPx4DvidnG3cXtbqgSCGzu8vc1XpttD6f4sbDNpJ1MCXwKCNcFNjk3ysEMZ3dHXMPmnpTcMPexpGg3Z",
  "key10": "5GPq9iXxVYymrsRJqDAe3A9iyrAuk3n9tbJV21KMqycPpkPfpFdL7sMiPGpkjSdTPYu2wUp3nz3SnamaVa2Ttq8U",
  "key11": "5SgHvTtrd57qLyBhbC1hv8Rvz9cutYLmXwFSwMQN9B9HhKDVSxTxQ5DRMxWW5JVy4H2zNbDiNHGZFo6fBoGFkfrv",
  "key12": "3md7sAayzkZm7L7WXShJLa2yeyPxHfQgUidPqU4uMocich5UrEA3Ap8w3ui8KAQYLK3S5DXCBngPMP7T2JTKCGAA",
  "key13": "4TRQC4iiHgTMfx6arpM4apz94kwgqrdgoYKENEp3QVQuMMsy4McMwa3AwwLq6ZckGw3kwrdNMJJcEcPfVsB1gmtQ",
  "key14": "4cjNNM7EzhJuHiqyaXKay9GeYnt3D3n5aJUa68fPx5Fe9eRmwLxjstvBQRaUhnrYwM5ksXsWijGTKCWmdmWpxNXS",
  "key15": "56YSXit7iLfjNXi34isuTjWFgnd5qN8KGejqzhyzBaF5Y13oS278PwebezTSinU7nhkSA7qDNtNjVFtaUB76sGBj",
  "key16": "5WgHxUWSd1XW8uQ9isTSTD14qfyu8jH6R2ztSyz9e449gWRXxdWbxM6YoV4QnZF5f6oSRMUWuuyFodZx2hmnQNkF",
  "key17": "4FedWAAUXn1KFCAsVDk4XPeehm8ykgaj4MSFWUBAc8RQwqbj6QhoRzdWpaLGR2wG118STuko9gR1QAqqezTZgneY",
  "key18": "5R8pirouFcAhZ4hafYRKFgVih7MhhB2q5BZsayFxMFj6x652a5YMYrEbD4ngSK59Hrgt3R2ALQzonem5vQqjfNui",
  "key19": "4Br1km6YxvDL2k2z97JkHSkkFiW6is1iWW3Jed2bDLbNUtYk33XSnskZYh4rsiHVvGTS7Qfz7xq91e9fELYuZzZB",
  "key20": "464dPXQTVkwDN3wzUt1pXUSqRXATeH5q1bLcYBBYxHhwvKbWLiKU7kZBQp97p7G59qCD8rpLbhczp5mVeL93t3gg",
  "key21": "2ceuJEADSmkKxoYxQfhwNSYtcrf2kTevrPxsxs3JbD8meKnbC2JrhRmo34EmcMtgV4aUsQukBDR63kCufU95ugB6",
  "key22": "4Km8vD4mzY7yVo3XY9nrRn4TeHRSvyuPo782Xcx1ro9khbyeGk2XowLq913PKeaEhWm3DpV2bTkgJckzRgjPurqj",
  "key23": "Lvb5ssvv7nixU9fFAsxFpnZJBtoFELuFtUGRodKMHpNr2axCTg8QwXuDBuSByNgKiiya8cfmh2qAW4dYYmtLTZZ",
  "key24": "3U14XwRnziGaPkah7qTCug6Ud54JfLyCUnjGKGz9WUS1magpQ4c9WzEnxiXa1XsbbbyA9WiX2H7QE5vCxAysErcS",
  "key25": "7aG3S59QbUUZrinSYoLv2X46dpnzXWqm94ZLdvS36A98BEA97xki1eh82ke2YQabAWnYi7vUvVkvaqoRKtDm3VD",
  "key26": "2EMhjmnRpATF1c5TUFKAUhZm8MXBsr7h9JbHgWr72v4xd8JW6eUpRUJB3wgXrYEbyLcrKp7biHjL1XK7LWdokGVp",
  "key27": "2KwVfM6AczDCLr2KUnSQeJSH5r2n7ZByq1hR8AQAXSmGinU8VJpCwUPtzYi5NgdfNAKVStCtgRMEaFsiyrPdGNgB",
  "key28": "5L2AH5PBf2CCwVPLKeihMqDBbCER6MDTZe4nsCLLHq6e341bXyzBVi6Dg4PCdxdqZnBkNeUpKhXrVpWZp31RK3Vs",
  "key29": "5LoYxD5rG8iqGmMq3o51amy3akjx4gQdGSqHPMMsoY6xK2r6yEcTnLLsjtYHX6LGcTHzh16fUMy28o4d8qvRfBBZ",
  "key30": "dW7CaB5toVaYHfpKHdvtVsY2FAJrhBhfXAHE1zv7tRVKWMjPE8DqWGstWJ5jRGk28Fg4a9KTBT7qk4K9BdQ9YYs",
  "key31": "3rGT4gaFXd7VVg2hSgpy8wEn21Yw11U7MkYyEagEpnJEg2JLwAgdgTR8WjDoqMrq8ioz2UhywmMPZjJ4TsDni2jN",
  "key32": "4XKtqy6maag3kJBhnW4fgKhEDMyjkToknir3ETQjUJ1x1RPJQQt7XFEwHBnLtKcvxGxkdFqj4wezCo9dvJ84a11n",
  "key33": "3qgk7KYwcvAdPz6jLHQZLAKpUvqmKWzkwYhYkFAbY7iWyCYC9VTnLnnEpqga74vLYXWDGwYxr1yjZmRVjX9f2EyP"
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
