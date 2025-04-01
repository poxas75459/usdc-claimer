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
    "62kaVDNedMk7wCymoBCEaaqiAeF7gpdCwiWKvELjjG8HhBxF8y6Gm4gJ5kjWYvfrLQ7pPJLEbWMHWfKpHhyPrWch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GHh6H5bGbVs5HPhWNgmqjnUwHyQmRzB9BKCWwA7SianzYbibJLTYURMUaGGwtzvcSVgLjgnrmpj8qAK6tPKzKLY",
  "key1": "3Uq6aYLKutQfRxX5NmtTPfLfxtjXdVwuJeY9GjvJeSqRRsyARHoByhcCB7AEVMc4NtwqR3v8AGtSGqdcztfYvCGr",
  "key2": "2a4u1KPRqXQpVUkS5tqZrEX6tNyomBAFBJ3b87m17vWkv6dwer91Dws2yB6NJVc7WqnC95y1bCittEVbiE4NNbCp",
  "key3": "4oxZosy8V9japWqCbmriXp4qjv9r7PdZ1NqUbN1yd6Sne2zS4BLM5QaXDenafvfnZKp5Cmckw1EVdxZPwQ18Nh6K",
  "key4": "3psY5Y8bdgqshMC1pbfL8DmUrNRYA4xW9gV75ko1qdJEi65hRNeLHSXXkQnKHnu6osP9uzppzvkEjosirJYyLmRq",
  "key5": "5F6S57dvhrkpoBYGujpnGY1qHNcoZywa9px4HsS9mN3cpDPAd4XbbiKuPybgCQBVy9qRSc4DPwA9TdrWBNHHrNoX",
  "key6": "2K7yw3pBJVXDXuhJLa2NXT6KfowRH8t1KoA55EtG69WVhhZ8rVm2hcf2pRL4qsavweyZXLwKatV3MXtgnzX1Cz9t",
  "key7": "6ZQyLwYFRm7gHqYS6ZhwRuB3n5aDyn75LnEZVt1aDhDzoXgAVjnnSj8VjKUNPZK5wsT3aeWJvN2gQeqoHqhkv2a",
  "key8": "53ahnxneKXNe9FfcAuyy8D8phDPVBR12gttucg4syAy9HNadcmqbpsxxkppuhP6j1fymwHtZjZFY2mffYAUhWGx8",
  "key9": "5ejxKESnxQopZW7xceioiJSE4HcYUekcEDuJra9XGvewmqbNXZWqncfAH1pBpLjgJ4L5odqCGE3oebqCYELALWGK",
  "key10": "5y4QYjRGE8qLuQPM4GzQ66zBfYp16A9yThzPpVaiqRcxa8Kh1pf2tdaQCStbBkeVMzgfJ4tPC4wiZXUVMAZoGJ8T",
  "key11": "2PydtKhrSuyqTLjBTrBBMVm6nvSsiLgkTXiUFDfHKWRwJWdrPGj74wERips8Vg29VhgM5tNWvfX79PZVFshPtNdm",
  "key12": "3SA4NNgqTzBaktNUJTrZydZZdLBqkgzc3QxTmhbnrHCRasmVGCy2asVqrdccYKvueTiLRvjhs5P7Pyw62EBC7QpA",
  "key13": "561PBwgv9u7Jfy6AYcZaaLMoyYLsDnQfvLrkBZRP1PhKnwY51JuqQH4FXBob7NnX3AieQf79Jr8ypJfJaVhVj3GB",
  "key14": "2VKZh6dm7vifDQ3qUuDj1oFQfFT1fRvFoj6499t9fapSVSvfKjGsiE7LQL58r81HEaHoTskokZB5Le7LNdTQQKmD",
  "key15": "2E6YuRG8bzCctQqg1etrSZu74WedxYSoZiyH4VELvdyMMgDB8MfBNHsCEK9omD5ggSZpURKc5KeypW7723YSogDv",
  "key16": "5AvhaJDciRAazbp2yEDx2eZ7iS3iT9cHTxsT7pK8YiSvPh9d7mRqrLcRVkdmuYLcJFMg6XKWW3abUo4WQN1qTqnM",
  "key17": "5UCxwLFFyWCEv6nMEYfdF3wkLPLdqgD52zr9cMVQck6jHw1tzkxVo6unFMXrWBY9B5VzuDBKoq7YAp1CT7Xj5kCP",
  "key18": "2oTBwHqnerULe6RhccVtrVJNdjVBzzUTN69GijF58cTs1K2x9ns8RHiMoWCmMBhM2fVapdFwzdH6vbF4ir85Zwfg",
  "key19": "iPGsYZGYViFj9AXKHCyH1jqe2ihDrcTZJLpZn8jovg1Rpay382ACWaToZMASX8tvCGPuCntZda3kPMesp7LcbwK",
  "key20": "5QYWsM6aMyehM4K8Y3kRh18ChysNHojbdmww3DwMfKnHktLq6XB9cd1MmBx9ytyvKvDx3me1YvsNM3CK4rnj6qHg",
  "key21": "3NE3ZB8kvXgAaJpBsDuQSNfWx8MiBngzdvSax4XteRfpnn1CjNxngEENdXtXuoTFkEa53aYGtrc7PK5VyGTjsyTv",
  "key22": "5NcNwzF6hXVGLTRsEX82p4cUJKYvJKE7Tuwv2oTY2H7xCWQRMsWVThq97PiijSpU1Spk25p9jVwoVEbHRq1meze2",
  "key23": "4UWJAhDnZnhuWkm58PqJH4vNaR2gX2LiKKKkmqm5nhG7BZKhpQAt8jfwL79a6aA47hx1Uh6Jb2QoaPcvMUeV4wYB",
  "key24": "3LbeHAKybwSQr3BSgtMtEzwfV7fVMpLcgugZYVtqbAHzkxATe9KJizBkntK8PrBUVCmfeVc3BDSPmJmwHmTgwot",
  "key25": "iN5b1zFYXYBT7GpyJ4QeZNtHuK2an4B5cJwSkBT33twEp8LKpTEhoe74R8i9ooQT1xdDhrj6vnMx3XvXEoX5tBf",
  "key26": "4AYaBo7XDzVhesKTE6AxetBrn8dE5FBewANDv6CgqLNtmmeJJa39FSRWE6VnEj2z5w2AsVGbUTwAq1fukkH6cJeX",
  "key27": "ZMvhDAeFLBsdmbb3VyVHB1D8W2HbxG8EcHQSiBcmQxDakuU299ZeXkWM3Ur4YsAnFp7DzvXxTH1WnmbUw49GENs",
  "key28": "2wxbGeNF4FqB1ybdYqr7aWGM1Kph2djonertczjUKypJWf2AkRgrn3AXfzJ6xveCZSv1p1dVyU1UTz2Y1s2i3yov",
  "key29": "25sc8g2U3TyonsRZh7ujTVc2pjypg4LyJXphPJL9oZrqK7QWokKD5QQcD6QnEXVXuLM1nw96SueWvZhPKioE5v7B",
  "key30": "ZzrdSVygKRpiYn9TQApu3d2EtB6byF6jZjMC8f6mJP46coECJjZZ4FByZjxHqxxNdQzzGgrJJQErDuBpgWrBsKN",
  "key31": "3noYqj86XKiMHaXuKHfQGxAdm9ScP4bNkGFrG53maBK5RBbodiBBe1EPv8oui2fbsnhpREGPE1VK2CZW6MG4XQQb",
  "key32": "3iHpzMwr1jZ9DvZ6xkzZ5oJbEu3soGajWPQHXfLZBarM4X52omNHkR6jTGva8pjdXBWyX6KKKevf3uFQY7ziv2Rp",
  "key33": "5FaJpqiUzFG3oswEMrohBDydtUHBH1zVvNMkirQ9VudN7xWfwwiZCgPfyEkdX5FAVNNE3hXNc2r2Zd8jpLQDmkAt",
  "key34": "67VvxZHVtwiwSUA31127nhuSyvuSEPkeGDvBC33bckpMneM8kb3XkL5KHYVCAtyNN7deNZNFUw9XaLV86ecftpdn",
  "key35": "5VwSCMgRPqRBiAcR8HoXYrEukQtg1Qe9pm3S5AwMbH5HfhaTVm9ktVdLnnweQcWaqtX27JoUt2ycaxtFB4gQZkr9",
  "key36": "5YPUYJqAmLwKJdu1hHT7x87TRt7wefZSnYCYh7AB86csgkfABdfJ3odjS1GNsPKKYPTBRjZ25FgAmCD3Q8qhoSaV",
  "key37": "2p2qYQXshfsKVmw81mCBNuS8iXJHb1AF8T91enqNXMdZaqRXJagxipYZpeCLQqAokatUs34fFyUPPuiy5uRM9eVS"
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
