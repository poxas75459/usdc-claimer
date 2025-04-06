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
    "5NtVdZCMFFe6sTu8BSXBsR7LHSj7YTdXBzwQYYydRRTYMnFnvophhLAZr7zYutsfXvLoUs4iYoVwua2GVZk9kaxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "434Fw9gT9meivtmGQdB2vd1hRVobwc4mKxGtk9NBCqLfdWvqWwX6CYLQFb2DoA2kRsXKvH5R6Hm1dAGLgNUpeUaB",
  "key1": "4LFAYMG81knVv1GJHxkg8B3yK5CtxzLpLfboQ8cZUmU6XfGBf5SLAPC4ZJ3MwuRKwAXoGTcnNcwtK5eRusZvn7XZ",
  "key2": "RZv9tq8iMMyArhpu63C3d6c23aWN41VRAMpxX5szTzyrjJ5Qr6fTwoYa5bm3pErNicZ1XVUnQmJVVzhcFduvKfk",
  "key3": "2znbofYAuKEkKNytRBm5Q7Eoiqg79NhvqsLY4qnpY7VEUEiyM6HqbjauD21a77JpNENJyxPikubmRDntxYaQ2MkY",
  "key4": "36YcnfrkGyhyRBRNKLoBdVoiQA2V5xHmC6xMNEKwjwXRekRu58vuFxuXiKYfYUZRJ2jBkMP88vn8HuYYSca7UoHw",
  "key5": "41MxkQoLUp5o4Vht4bHixvB9mPcT5LwaUAAJPcFJa88JyvH84t6HMNorNAM8Ut8273Cp9ZrmmccLW9JCGuM36vLU",
  "key6": "3Dya3twFFVgFevkqcQuSnXyzqpNe6uCYLdr2BMpzshp5Frvr9BtRAs1osCmN8rFtgyt1AvvRSAKKgoK7hhvfhufK",
  "key7": "3EBQiQV3hhPxgJZqZtcPoGah6AYH51J1NxUVndsnyv1vaVZiVw7k9AGffrmVYEYFnBzYDtWTn5J7mgYChofSdGr9",
  "key8": "3kMkHc68hGdpEFcKZzE7SQUg8tHRwUbSJEuWkJbk46mBemJFDRTGSttoSY4Bnd6VAvQrP358tyFUti8Nc83hDPAK",
  "key9": "439GwWNk2cZ5TDz6VQu9kN7V2C3jKp3fZ5Vimyig3kyhwHDyDCoh36nQbmbrHTc8rsDtqu7APkXq41obNYEM53jt",
  "key10": "4Bxntwto3WD27Jo3Lz8e7xtGVWcwjJ3NsKZRhVBL3yKFzqtEmJQYdh5VS36ozMEQabcZhheAceiGUB4PBjdfrW42",
  "key11": "YrmVCEkWZ4FWPqgVHbVL7MSE6rywiVXDvUDvvimbieq5kzGVxFeNWfvrGkX95GKW2ztUSZbgc8GEvnffUg5ACVj",
  "key12": "626bktHXtLdmsnriWv7khtJm41Cd92ZvC1NqBsuUU9z6mXCFe6ntVsqErzhfbBogUb8KXMGNU3WVjihWpCVjZQ4R",
  "key13": "3aZnxui32tz1nTQsbVtwg7R8RMQsWJYeyuTv2CSqmLmpTRQZjhRQKW6LqfALLS9MVKiYqtbQDpWMgCfREJqgnzfZ",
  "key14": "5uLdqgeRzU2aT9KPvk7r227QEnAvFrSjbWaH78hgwpWR6jkn8ZG17LNLfSggpijZ73HcWsiuXRhBkb7hcnAztSRm",
  "key15": "5gezgKPxNaMW8avXp5JDK3fmnHAVdnGo9qAhH4oAFWUxd1pjkMf5KsRM7J8aWRRCdekLoSTnCY9KrzFQqCFwhsc2",
  "key16": "46hcK4VLikrcvbBScmHdFB5MvhCEMtAwWM54omru2QyLnLG8bLA8JTeDftNAmT4hDcmvuQtXxFs4o1eZJwnJUCMn",
  "key17": "3wm8pUAvz8jNR3ocsT15XEiGPRSdWYJpSgzSHRnFpJVnQ5dWVScrizSrXVvEeEp4YqU8XqL2troWugSPbM6mshRg",
  "key18": "4CxqAYbMyXbNeLmyFbX6eFXePZEX56c2ByGziaBBBmdQaPST2Mc4T19YB1uWjmdDtBYgFikf8hP7DHp1LgaFbUgH",
  "key19": "4qK8XdKmTjsLbBvkKEm3zhfQD2dhxcXRemNjZWtweMDnSrbzHi1ScCtQ1x7qNi3oZerV2ayT2eL8cajNKgNCkwDV",
  "key20": "5R6mzYZaMeDUgpBfdFEHRNo5wYD4aszD5UN8Ac5WeFtiB54tFCQpLt8Figzg3P5pBKNRFG1D8joCLTXa78UVcqnB",
  "key21": "4AHMtuUfjdxFqVXfEPVVW6sYQsYR9CrFKSyRvfHEdpcs5HqNYybA13eV49zcit2MAdqBJ7bb5Pc5HaUVcdqFw4AU",
  "key22": "35jrZg4zFic4idZiqWpjkgvWUo1qspVy5xLSRWSoixUJRoGSnHnsYqhSzPgEQ3opHtxa5HS51Jm6TiBPadj2XrEL",
  "key23": "ph9SU7oXx79pSUqdZx4pjP65npVDkYmgHeDZhssdGbkL39TZLbQhKRFoDrbztkcK14RzvYQDYW1sovFA9S6TrK3",
  "key24": "4sSnaq2z3FRwwjyEWMqSa7cfa9ZF2JyfYtf3KUXUFazBcLzLw8uiJrHQW5xHEoJ1kVHBQWEBUgw3ntA3XfwogVpp",
  "key25": "42fCVbS5iqazVnizuMjw1ALo4MnV1Exq3HhbeBcFYYCRnDwd2R3zWwuN7EiXQQmKyPMZshkg9oamsqKMPQ7X5jKd",
  "key26": "58KiPJCuzGNcDw3n4BWXTV3t1RaUYfVTmLrFLquNGW2ybMxFxQzuUBUG65H3tWsBqkacRLckQEtvD7p1rcNoFqbk",
  "key27": "5cjSuiapvK2pZhFnGXGBRD96rdSaNeZyGKmrdRDJmsuFU1r8hqDc4K5rJiSUsBzufdxhBViqfLah7vVmQ469GdhJ",
  "key28": "4kSe2FJyTSbdWR2butWtV1Gq44ApHD18sWTyfoFxj8XTLbSZy4Df5HgJdMCaoGLAF92vqyisRAadmyh68MamjcXr"
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
