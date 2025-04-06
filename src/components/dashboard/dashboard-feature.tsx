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
    "5YoKsnZY2XqTqWMH8VfqsSGKsGGdmTw7JjfvNga8Lp5hbKR7Ak7SrGGmBjLyuhp94GfWgYCafNDXpED4dkMWSreL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a3rQ3p7Mnp7pKTZkhJoHPJ2i7WNsq8q2cn8prYD8mfaPswuoz9UTqAR8THkc2aicky1p4PYibUfojm9baHvsgZJ",
  "key1": "5JaeKYFPim1QiHTBrxhH5e3uBxww4G2beH3tRxRRV9QhS2RmSeQE7qTYZNQk6tX3JvcqZppcR4aFydwqV6a1ZwZk",
  "key2": "3bEetzjkx33pRzBVuFy7dbpLkWMj4c1t3cV3ipcauvpRcb7L27vgRebuZLktFCZdkZSM8wiuHMfbzsDzraPeuPey",
  "key3": "5rNU3j3NPpTiufukpLJ5c7KTJxdGgEfLsxdf4Zh4US3jQ2j4puySWsUdAz4uJD7xg44M66UKLoAoBFsB7U2HZYPG",
  "key4": "434dfysgKi395AcQgb5Lm6rtHCUnuDX7WowWHrtmu6J1Ntuu7m9rJunXw5VHvEijtFrnnhyRHJDAo1chcsm6HgdA",
  "key5": "3Kou9V1wsR6poU23XUdDW2wKDkj4PM6TnkhoCdYKKdTLRJTsudGQvzfeisdBvS25e13qqG7cBDaKXnsdApcspdMW",
  "key6": "5UNGrjrZcJUzqJbuKy28Am39Br6f7CZDigQ8xh4UfD2Z9oGJgZPykLSHNN4aou35oe6r6LuvUC9nFWSXbWS6eYpF",
  "key7": "57MaE77d9mEvX72Yb9uNjQ6sB9xitxPevHshFp4G2CUVFKDbdaCT8bSvb4yvRE6eHzAGM2jEB3nwZWP52ZSorQEJ",
  "key8": "xW59vMq7jEZmJwg5wsTHiPJVSByXYhk3dgXmeHFk5pxkyqWHxeuJs7s3bCv8YSpnRjTJXcDZLX7dURpuUmiYF4H",
  "key9": "ZXrHQ5S1bUk75AdoghGqLtAiVhRkdWyguQvPDPK9BXxyHkk7yPA9drDT8AYHbgdpepw37mvP3LBMXJJeKAZbF6E",
  "key10": "2MEwmFaRyvbpxPE2k6g35noMNnrwXPH25tbmdYy48foyKN9hSrD5Jct4yBxfxtig6RnBSwMNu3TguurF7VdMj9iB",
  "key11": "642QGN3fuwUyVU828G1MagrRrvB7ui5HLGokjSpu1VK6ARcnbWkWAydKehdfgfF9bdV3nxaXhvDmg8mRKRmfFqec",
  "key12": "786YiqCZgHnofWd7RZNnMuNLoUBG9skf5F4rXVzEiJHfGxX9TEiGhksnZi2YXwg8bsBp8uzLTrR2Ek5k3KTvfs7",
  "key13": "5qyKJLkLpZtCaKf22TUdJcchfCR697QpfwLxNsLsY6ecX4WssVgbcgW55aARC6DyDQH3QGAm8Y7rmb3NXBiUgGKV",
  "key14": "2UQRbyTwXgaSbNfpvKEBaiFBcBEjjSexriFCdAT5qorKFP3pkvrJNqSZzeZqnafArCVU7KLrdJbGbYU7aP78petk",
  "key15": "2fy1yQqEy7zVSGKTJq32X8WpaeiarSVNW6KBqBb1VgtKZPLiYVSqzchStYiXDxyaGTf9SiUbWr2eKGnyWCbnGCJU",
  "key16": "4uqi6LKRvyDFL3UiCn4hND5nJKuaxGBoxixepQme6qwsGupzhxi5WuBXvHzpgSFu13VbYnCLJb2HMK9e5BwhT93h",
  "key17": "FACzBQSN9rBoW7A2QXmnepWrVV1Jv3FUrBnAMxkPK9wysyn433Er4m5hsP37b7cPQ57Mu2zWYMzUhXpw7EsusXb",
  "key18": "31BD5s9874v7UPkk7KSQPg1P7yuK6kKDciwACVTXjVEt1rhDqaQ8q6R8UM9oLVcccrM11EQQLKTzuaQQdJhfFCvb",
  "key19": "sSfapXgqUwamYFLepxcymSzzsvSiYcEuQCJALqCs1RqKHsuEKgc59nAhkPoURuZo3mc4tg694eR97UdYB33bykw",
  "key20": "KfoT4PyjYbBv9EwDtbzXT69BeyJmjnEjRbgzwcD3n1kBwSE6HXEEZLd3mxvrpQj5FrXsbyMt3Eh4zruphKDwRZe",
  "key21": "3hdZcQRNNaCHNcn9r1Z39e24z3c93P1kRoEYny9Hbv4ozWh5ForGWnH3Pku5Mi3hShd9reuSw1eDUKTZ6Pvoizs7",
  "key22": "4SSW9J73bASpF6w6RG1K9Vc3xDRUBedSK2oU99Rj76BVBEZhnnBJfPzbS34gJBkNpahNZeg2k4xaYbEfx8T1tyBj",
  "key23": "5mrFTzsZaSr2LzmtckF53t37dnxDFa2ZPUDqvp5Yx1v969txDABbhcJkiceFVFKCRiicDkCRUEim4qAvMMKja33k",
  "key24": "PK6YLAhLrwhujjoyKukzyWGbhnV4iNGshce8bkVxwpawaXpBWS2QBWnSD2oroFvjJNs73qtmq51QugM2LyVv6N7",
  "key25": "2mFmGLGiT7aXro7XR1cFcJGqmFDFh6NMQjogoTFoCmNwyrhvZcNTvwx9o44RNE2omvw24bBViiVdSLkMw28p52mW",
  "key26": "22q5bcU8fv37v6q3iJqHaVRpF4izbkVcUmnkSAGgvWV8yG3GTiQ8ZJZtYsYqRHuMU5o5HKeiwkT1X4TiqdY5uPyV",
  "key27": "5TACr5U3k9AeVDxP4QW7cXNq2MX4VbpqADChMMRcLG2gNkm2RCYNE9MgXL4AWditaHQ8VxJy3x6kHpf1ksw6iMze",
  "key28": "5KgArmt1iA7K2qfcPDQrxUGdXCXmnwt6hJYYTzjmXTxgpYBMZij6btoLdWpUJBU4jvME1brNtRusr5gtw7ddJ5ek",
  "key29": "3WEaDjqSejf73pd1ANis9CXKPnT7kcmX7hV5jXf6nktGeqGMGeCi8AvnFpgBsUihNYebq54GQkiWsTyfHB2GC7RD",
  "key30": "SSkZsWb8ZXRJytTy5otaw1rTKxvi97mZjiDUYQJv8aiTM7qyf9SeUkq7bJF3BCFPPt8AUHJjPdQd5u54gsrHonZ",
  "key31": "a4bF3NqHNEtUpMzsi8cBvBJe6RDJ9Zdii8mi9dsahwWA99DgRRnXfdDLsfQanA3qBjCbXAp4YwHcqKo2sAfMn27",
  "key32": "ybyuhRBfTW2Wx8MRnzh3LYyWK4cc1HbpcpNwceHkXcUQ6e7W63G8dnK1k1Moh2KCUaDxuCAFBWFtLUzJ4tqewgD"
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
