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
    "464m578DpnPJwbXgm837viM1NBPx7MZtzwksdGRynWnHZLD73vy9Y9ktQmB1hqmLd9Zb1ibfjBxyjvyipukQ4Jtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cijTNyS3r27hdLhisxErP8priDjEm6YGsVsDZev64yZqDJdEb8GFW52jVDiRejjJ5xrPe6oow5Mb6u3Q53CNJhJ",
  "key1": "4rrBgjyMpRK51t4tU1RnWQ5aTRLhHj7dfFwqtMNDKB8jUTUDqdpzSJks2cLsNvgxnev9yvLFjAfr54edGL7rmNxg",
  "key2": "63qVECu1To7j1Vcmo2RaRC4PcX3MCNCfSw1FPTb71SDiZ2W35sKTbSD6nzZNzo1kRiEjuVu9mcjF7iciY8xF1qj2",
  "key3": "nnU9WXcJ2gMYtg5ejUCxaiZcBxnd342ruPfYaNQkZsSNb1zmBS3n2B33neWbtsto6GyeSEea57SkDjTmKVCCTVk",
  "key4": "2VXM9i24WXpdvyan1E5H5SFKL5YJGv2aMgsy7m8i2hWrnT97C1gbsNScR1SnALfuHsqwPgVMuQxG6W7GbhNLLtyU",
  "key5": "2ckfdCzADHs9QXxtr443kMwZe7SpespCaJ9LL9Ex4iqKerJm4XRaqPfjS2nfkQLMBbdzUXm1JphiBgQxLEYbwvWZ",
  "key6": "4ut5VYdpsupx8ez29HmoQyYgtzYuDgea4sBgH6LFoa5AoQEfzBgS6hkcAiq8RWQZfzmimEicVhCMDuvaUp3q8uVR",
  "key7": "2fgzi2P6A1AA56HrGP1RY2d47wv6M7R5Q63SSbW9CTGyws6LTPGxdgzPRLiJD1Q75CjW96CePacagmu67Mpk4Zk1",
  "key8": "2sfvZLZzTUwemQkF9n7TALNTuQ7kHuhkmpkjLG9r3RLvvGVW4FjydXDwxz4uKwvoAnXHQGy5D73r5sE14E5n59vG",
  "key9": "2HovbxSmwEmsgw5UmxUU1AwHfFwjowPXNpY3SzdVTAsaGcyMNZ8gbASfKiXJpacoQk1cZZYCCsrb3pWqpMHHY9A4",
  "key10": "bV5GTKctMQDJEyiaVMY7BzTnEA6zvj9hBTWdoi8jTywqRPbJmYftp6rpHsaE8bxmY7BD7VXJYF9yd6yYwLCKqow",
  "key11": "354p9Y6qa3pdJeoQcQ4hBhMxGb8EAWUwgYkiXAH78Tp4X9L4Pro6mucRZaEtEKUzXrhTUGfHWhtNToFpzBVtegAh",
  "key12": "3raGSVqdMwdXBCytYHDCbomzEFFjt5auF7sqFMCrbAhyNBpFKpMRcj5EZuYboaJQ6JCcg5zKnsxXJfrdwWJ3KqJP",
  "key13": "FDhHw6k6ApvSW7r3br69cdyrz4x1dQbWPf75SJd3WKhM2r6bwoz6eCj5gePcYNyaYXk6SDukqvwdwz6Nej9w7WY",
  "key14": "5fFy1w36RL4QUwJ2QtC485GGmVMx3RAPFwrgwkSgfiBqJSFo7UqVrSKJgEzxAhYDdgu72pjgePBPwY7j1jBM77kz",
  "key15": "5248Y4BjmsL4SGx8q5VhQWTXwBCoKaQRj8JmC7RmiZ8ipmYJeYQKsRXRFQsqyemcH9fDfB5cnG5avB5nzj5obYGg",
  "key16": "5JubCjW9csrME2rrwFegJt1CDd7VHpZbCnPbLdptxDgAbB2GeX56YZrnjCvL9oVHQ1uJXXLcdquPcBE7tiNEp7Yx",
  "key17": "3YqB7RyH44zM2KCHNMmzVswbHYf3Br3Wjm6zidGAejmoyH85FJaw9yrdJnWfFmGovduAeKqFZsm7mGorevLF1L44",
  "key18": "2fcDGpMSgNKZQHhaMDTKh5FFtSPgd9vndrZ9Ek6xbBePkCozBAqz4DT3URGVSnJEA9PT4CwAM9fbdSwNo8MDjyQP",
  "key19": "2oc29rcjBTruF9BbjXchvRmQKrcMVCWgtQznhDPKTr1piaauwLhgrBNWpA8mhpSUXx2cSV95gHAhJCjQ6Uycrbvv",
  "key20": "3eWLpqUqUJJNWpUJbqYX3J8KvJujHoMDDmLsq8izmY2uEo1oaSijSd8bm8zvMdQBVho8Urb7TS2zPUTB64SGdBAm",
  "key21": "q6LHsMwb6SSFW63UzUNoCDHiFw61iVBaGERymYPkCWG25YPn18d2qXatDaAcermnPRE6TXdb5xb3pz3dmXYCgcW",
  "key22": "2aNXrCAvK3CqdWHxuHFmhhRrubc9q4HtNeGw3VmMZfC2MMn1W8vUVwkLFSgXMxxAZie4KboJXz6yFfLz1oU8uWXb",
  "key23": "5MWGBqgiRtt3mfw2S2mnJJakrx9Cna8RDkXGgA4xA4oFQqUGgaKPCi3oGM4XmKWjjbZJexCYjYH1Dirjh6Y4AGk5",
  "key24": "2FJspNQYptGTJybKLqZ2hFHzDMvEx2CKYD3yRTvXqgbwTFRw83xyJ1c1Q559RvQoj3kXdppSGVRHVPDkLWVpr8wr",
  "key25": "DdRmTMwG5D5iTRus6aqDCTuSkjDaRNYc8RCNRoAFLGWwwR7rjAUmpZyjQmiEXjyaNHQBmvUeQQYASLvhEWfpVtj",
  "key26": "4BWPTiiyXJmYau49Waj3wkZF5G33n13BAzcpyTHc5R7onPNrkZhKRZSMNPKi8hc7Cqe5bZnnmiQqsU5kLQFKhsPz",
  "key27": "3eHPuQKZyaV2KupU22WKcE58LFk9Wih6cG57yBNm8fpuMeqRUCSdMqQvqBFSrtYiMiRrwKeqbxdCh9Aq3pFFMqiK",
  "key28": "4WGnpk3bRPYBGt86mrVAank3Zr94X48mQSjekiB322SoQNiJUF1JkiTqQsHjV3ebZ9wkkxwTepuUaC269n6F7rtE",
  "key29": "2uP2kgk6FPS6cFsUmjNhr7k9Kvh1X2CLdadBnnZ4Sdisb9TkpHM1Mw9ci8m5s2fvpdyAqQ6BjUg73Vt5D62xofi9",
  "key30": "2sJ2a8udoGnizpPn2HYAx2rDt7owCGWZrCqtc8xx8j5eqVxZVnNvXmh8G24jd8T5FuN721x3nvGjF2AdfbWsvN9V",
  "key31": "2FPXcJuEL6VqLFuWuExvjUtkj24nmYSZvWGpXN1yHxxdheC7WvcseX5968DDYnVmNPWxvhtvmmLD3UM2ZnHJB13P",
  "key32": "5ouJ9MKUjbfDkKYHdgU9x25zef9Qtyx62nxDi4h1NqgnY4k1mYcoVscBsvVHRTCUWjoVBZqPJpgy785YLgihEjpR",
  "key33": "2o36jeghZurBYFS2p7UixyV4NG2aE9MNYqTRCrL8kQo43PoKpZAyg4N93u5DYpaWeUmyMdCygbXXZ7CdoDcd5hjo",
  "key34": "2ymV61Uh9DzUCpUKxwe23pJkttXeiThzZtYe1ys1LgcSxYPXwv33aEkDopPSQdmEqufFu1tfLvaHm1vRBsmDh8m1",
  "key35": "231719p6PXi1TkHkdQLKrQ3VjVk7ehPcGNM5y2Xv62CEj1JcbTHmchVy9UzY8usmE2ubeWVywQwRJDgGfHbR7YFH",
  "key36": "2DMkb1wyAJ4C99p7yXvcAGx8stQ47qSeCUjtM8tLyctEDQa2kFxhj4EaZvg1SZFkXDhAQ1JZcS1pkVk9ApM9j4qj",
  "key37": "2YocVxjWkWCwjUfNgme39n1XxNqokoc4RVDLit6Azj6mbkjofeAWdwJhGH1WGp8FaBbZaKa6tRk2qyNqE6P5HM9a",
  "key38": "u59dpshND6oxEQSCGv6PVhDGseyyQPgSfwM1H92x7tSkQZNz1vQxjhnYxw7fqCsThQjQwK6YhMAEpsUMSW4cDwt",
  "key39": "2ZAV8P4C8f37KNDJ5rHz8SDVtXJcK8GkK7NAeXMUXx5sVu7iV7EP4vmsNVPeekncRo82cSjp5AVavoasG1XWTezL"
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
