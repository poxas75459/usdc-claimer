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
    "4MyGADJXz9oN1YUfA6QpNLLsTVnDxFeYEr93DDf3g3JzkHjVrAN3CT82ZuC71YD5bz7sJbcH84eRZQjgBdJSo2hT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BXdQA95YwxFWqBLbB5dfTSZdPHnimBXEkmWw1zrhYsV16UtVS1M8w6ezFedaqxqRS3m9NuCBVMRM3FQZan1PhLy",
  "key1": "gAQxG8RCQGCvDZwSyDbzpRyWNdh72yoo3RWEWEqiC5HM9CLuY1ARaYSDAuGXG75W44czwbS4E9PkSgBYTv3NNuD",
  "key2": "4X8sCobUozv1uB6uVWrdd1DFZQAu1JDXzZjKMMSD6bhFjRJUMZcHszKSbXNjCWL7eBj5kQEuJegcSZLxGTYM9hhU",
  "key3": "62iYYbdnAWttF5NmeHUAzE5ReiwdPzkacVdc3YL9z8QEUPthp7XFBiTBD2fmo4Mc1AyEqVSFjGhcv6buEFDZq6Gj",
  "key4": "5rMpJUKpYi9426qFte1pmV1WtpiZeUrMqB3GEneTVrFYWivQedyptF6t2VgduN4HKtznMPRmBrNFHvmwWND8ErvR",
  "key5": "4DemcxEo9XHjhJEptANsmcTXer7YJue3iJqcuyCxeCpwrto7bRCRjZqsaCh3LjTpk2tfLS6uFWBQmsMzBsCubQTZ",
  "key6": "2RFfFooQoALZi4A8sSXb9gfVng3HGRqeFXZ3EJsUHXQKgNQJKoNbVrtNfSUGFqfFodRdK2HHQmQvpt7MPFyBUqrQ",
  "key7": "U23PTUANkQ2GBMEP9dmUKZ7KwBZhoQdfsN1mY1xEgQD2sc3kAGr6M5795LnzCdiYnkLZ9h7HcZ966wdCmB8Dgo7",
  "key8": "2RffwjzhBV3FZxR2NA9qAxMn2gzybsQhgUWebgdHPoCB95TC4CYfBbX4v2gPcQqNrXbqYJci2ovDpKS3fpNNtbrh",
  "key9": "Yj7BMJqxVXYaekAUcDCG1VNkb6wJ9HFdaXuQPi8TGPYVhDZsuiRwvonEoH5DvpF3vWcwbWRCAPVDhh1JARGHMfz",
  "key10": "4pR4Z1zWZt4aVPMj5rnSy1QL8QzQQegLUtLHvuEV5FPEy9DKAHYLv1Jk1P8ZbdUK6zKsdNqLbhFYcE257WcXgMH",
  "key11": "3s4Q7cX5gxBm5HWYiEgDhPC9wRBmtUr4nnQYnmdnLWLYJoBpdxn4QnYt25u6QkFTsfFCmVmCC1N1RGobJdQEsmku",
  "key12": "uvG1hN6rJrtdKZAMbDAKEHLioXgkFx4VRD8edkcDWJtBFXerC32Ln5FuKr6Vb3QnyVoCjgRwXqWnddKswKiLsXk",
  "key13": "5JuA6nXkLgeZkWyaABkTA1yyCTMT5nXxMwacozs3M76B9GisbJy3ngmt4NDmkkzEPdX45AEkiFbZeeqJMECXY8UZ",
  "key14": "3xpouuDghomPMKWc8S6NcwGmumDPVTjXJwG9pmPNkkxV2ThVhZzxkA43QqfuAVB2veYTP4k7mSpXdzoHYYEtR6bR",
  "key15": "E8vvwxkRQx7rpGi1omQcgCGnvEbzXZtDwadRaTUDhM4BrSwDtNGHrGTtG2XmFd1SBRHnfbtMht1VVqPVrZcYERc",
  "key16": "54dNvLx6nGPae5s1vyHe8hDW445mLzRjrcWfwp1RDkrnLzCP2HuRXKCE9w8mH8uHcMcEgT61642GkMeeciFLPm7j",
  "key17": "5EU6ofHq2ZYKJQgp8rn1eDf7LURtzBJxQ4ieTkNSgh6aHGjzkjxGb34FfV8QHBcw5PpivdYu8KX5hm8FympQ6Yos",
  "key18": "2yakTN4zgoZUD3pcFPEGdqjacpHpJqd3FYhnM2DSwFYRh6SkkmByvb5jmS8N8kkePBtoLGDUxwof9V16HL6EsWzV",
  "key19": "44bZvqyrTcbhAG4jvX73SqeCuz31PCbNTLpVkBpwRAwEmpyDAiQmLg5QhX9HjxayanDgYrS3M5DiknMZ9WqL8vMg",
  "key20": "46HytsEnDGmVUwJq6C8zPRitgyxxC1adrGTp2h23XVNyunxjzC9rzQUet9xr1FgL4QYetWFeoVmSZNSZk72jiiKw",
  "key21": "2jfjDGxEDxW2jDjXdoDaQRdQ1aMvQSgWYBxNrGhuy6M6kBkx61zZw41D4PAr6rac7giz2mggsGY9S1KxnfxGPZds",
  "key22": "4rvsyJ952vkdVcRaAjDmF7ajauUi8qL2FroeV3PsAj2KA8B5KrzqsEAY9CkgQSeu6nr3hu6tUGvwMGsZGVHmn9Q6",
  "key23": "3BqVMxn2vcwu7oxkGW4qzRypQdNKEe3CEiFZVeALaKW419XFGnJtwK9bYQNczWCwG7wPkPGsz87Da7ZRuDovm5oN",
  "key24": "3oSLsXbNY9Z9wHrJa7VQUZx8vH8SCVTfNTdF1n7FakhuVzqTUzF4CX7VHzynRPqYffkMPNL1QmcVSVUNuA1wn6uP",
  "key25": "2LGPWi7wKQfMMWHqc1m3DAuvttdjM57LH91imN79hjzq5m17QVjoMGBndii2ZG3akT519D2iUziCZ413Giyrmeef",
  "key26": "56RvvsVxEiCcb42q9DSSny3tXEJTNKSKcZMxArniSaYgVMa9g7gk9riKYDnG2v12gRceJEZ4LVPzBVHJpfcLH7sb",
  "key27": "2PAAMZY4au9GdPJFNivUcZGvmqUtTadXXy27PH93UsB3D9PaxmJtwM6c9izcHsJCMPfkBtANcxzAkqeWAbdFiPdR",
  "key28": "5pYDTXpPf8N9b6kkEpGhfRkvz7KXse9o2meExjcZ1AbL8Uq4TtkCovCKP1hM6SHBmFuasejrQmqHh7nfwrVn2ZA5",
  "key29": "3f33X2zjQXKY1mxDoZZ6fA8jLYDcLh1i7Uj7Q5cBamFKSci9ifthXmjVukbvkkTG5FtfS7z4VWQzfM6newtoRHHo"
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
