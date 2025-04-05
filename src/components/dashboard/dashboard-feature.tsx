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
    "2NAv1thkTozpgwghT1Ar49EwA425KrvCUXpajkESpCznYSAd5fVFVnb79P8sppewJhCpZKbpk33JSAcqyhL5qfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vmX3VujCNwHmRntpt4uahoidorCmv7FgfWZmesASbisgvurwXbBMTwWShBAaojzB9oaQsupmNoPVjbvJohuQg2F",
  "key1": "vgSytfy4i9eFDkD4YgjMmGKRBj6uWABrH16TXmLnPw2AmRDYnT9WwryzzENL3cTYbDcPTDguHA5dGoyjmecK5bw",
  "key2": "M1LhDf6tewoWPTuF27VxQyGX6APDPuXVVZxfM2fFVXso9hNMZr5Bkw1V48ESwB5Y4XxF8BjDFawVrnU4fA3rJ5d",
  "key3": "5FVMc5UZdQ5qfBwZ6B8z3Mgji9oAmZnrCR7Xeajv35Q4D57zYJQnjunwTN3xefKv3osFZM6umH1qAYJBtwmSmKW",
  "key4": "2x3oxJX6kjdJV2FCegHWx7PwZAWTyxXzQwYXtzAAYG4HAxNHahCwEc7fapunorpfjRjes61e7tTuBvzPsAqR6RsA",
  "key5": "2bVDu7WdrWBw6dQfjviDcS5gXUsB25Q2gapLMbFtTe2zmsgHwfvpg2CNWXnkmRB1myBF6Mar5AMCu3eSCzEsDCmF",
  "key6": "42UE785TJ8hdhvkeUcpGKssmKfVzjwC5zbsZEuhS98WpZiJReMYTexyFFXuC6HzLqQmiGXE8t91ebeF9P1tAEFyY",
  "key7": "3NeQrx5qNYExp7mxPG1bG1d6fbAmR2uuCDkhUEVSLN5CPWmL6Ly9RUx1CHKNg5Xnz3nBE7XQKpQa82GEofEb45bQ",
  "key8": "4gvRqE2GrhZQYUtgbjBLhJiyoJiLjvVv5S4ws1tk2fNNxHLrY81WtCBL7xHmUX852ZypaZ8CLVRrqo1bsugzzUE2",
  "key9": "3RxX4umnLmx4EZKCcAx8fMzQa9N9K3yFmy77zyisfTaQjoZATzfCtmgAXd5sG8utYWehkY4pFS6YzPM5B9c7fT6N",
  "key10": "51Lc563pddVAnrjWDRDA35PhpSFNaQ8WVemYiAu4QTDDejHBjsmqtkuEdnxA3WPmWb8k1K1NdLPUQuYxnhiYXdGr",
  "key11": "3RKYmWQAnBwEtCy1QekuMYjhx3Ft3hSjTbpzbfKYceEAYBQzqo2vhYQx9T4souLQiafrJVX9NyUESKw1EL42mab9",
  "key12": "2fbsAReHkuY81gY6MsD3eCUNRG2YV9QAEeZasyG9EaXWtFT44fZtTjFtgcZ3pVYc6i1oHHP3is9KKAhHAa9jZrjY",
  "key13": "2STSBoDRTVebLT5ZDxDTnkZMW1hBD6uopZyvLddTx5YuK6g6icspNTwz38SDSWrvF3U5UQEEQhqk9D7F6jokGY5B",
  "key14": "4QjANhV4wkfDQGRZP3ZFBCcyBjQWGt2vDzJB8Qj8kMqHvVN3ytWLJGMXCSLxFn7Tkav6zBUg67mZe8QSUhQL8sd7",
  "key15": "pCjSCRhaSkxbwUX31XGW7ZvM9zznKaaNjWKt6R6Q11e8G9R3KEYZDvR2n3CBjr3Md3YMhNHazfnFGSoZUkpQSfD",
  "key16": "66hYH4nUgkmsUgfRaMCxi6UirpRg3YJaX5f9LosFJZrNE8H7vtLNxd9SUrgswByuqDRAvERXEbDg5zQxDvo9fp5n",
  "key17": "TedTXMfnLs9uSs7vXxf9xjRS92VmGE5WWXKLsveq6TZFzpf3hwJfjDKVq6B8TQQ2eA66UzpQNwKQfVEdmfQPKRx",
  "key18": "5y7Kjq4kJibQJm2pqQsD8P2yAUv6RnCGtNtR37Vq2quAbZ5twyYerkkD7HLVG9FrE1HrtiEHF4gg11nK5hGcAeQy",
  "key19": "4MvdMY5hZjbsteD7o6rWoVeN5bbbGqmqVXJuGmeMvJmx6tgV3JAVUiXrE68rdo3Yb1jzDbmEQcHjDJMCvTsPN167",
  "key20": "21VxXE4PfaaZ7qQB1wD73HxyveJbAzhUBkcTRGcLZaRgGxT92EoQHjxqaASjfvktSpW3e8dMiFGo8LusuMkjxiQa",
  "key21": "3qX3kcfRWSXj4io5shonmQwfEYLkfDwHRVP91c4oPi29zpnC5qun4fUwh4c4mQq7KiEbqfSVSQZjHuCefh5DxWER",
  "key22": "4DDj4FGSvVw6obHhejdLASbQF5NmGTTVbFGnGbiKRAZ3AHNUPjqNVmng85f9iv4Cb1kAgR5o8uFfzQ8P3N5hv5mr",
  "key23": "2kSBzks34CcHWuL7um8GZcZ7Fas15a5dazE5L5WVFxXE9NSccnDfaNujsZNKeJgSmBnVUNfMFD31oYThiwbAnEfj",
  "key24": "5X6ExntbfV8FTCiq9WSFTmFVwfSoHorCWDufkYucDZduPdf6wUZr1EeQYqHJ2qmWVQK1x7bsNrBsNoDadbzKMKZF",
  "key25": "54tDmNGH55soC1Ys89oMM6FH5qnwWuxAD7AyT9o6eLGPM1adj1b3pqpx9GUWgYhqSkyAoVYzV2exDSMzLxrv3WUX",
  "key26": "2sp5y6yxMuFXUjd9DbM4thHP8TaPorfi6dc1ezEpQxADVDWtWbjjW7Hqt96ev6zLXQQBQW9Sn6xfcvMGXybYkxGx",
  "key27": "9TVzr9okA1GW9jE4RSkZzKU77TnyHLMHft8Bi6L5UCBRRE15xbedtgkgH2HCYFEP4rY27ai7Z8p9nJbCx1FWZ64",
  "key28": "4ohUTgAZk82tvKQbpqr8Y1sZ6ZawSA2JYckMiMSSScXGVjiRBhwTPQa7QZKuB131bzmLghmDiSnNgVaKbYGo1tx3",
  "key29": "2SRWz1qhbqi5g1ktEYt2om7kU1g3GaniirBPcCyDsV74QhKd7NtGDNBCucvNbmFUZQTiyRyYz1aukfV39LekQDd1",
  "key30": "2cJfwrGRx5XjtPtTFki1fvb3zh48rTr1bHyck8LbaUEYP7k8zWjUJXuQuzmAgdxPKr9Np98jQ3eSwTcfduYdbx9y",
  "key31": "3smtpQScU16JDJWStWXKg6dsygXw8Ln48NTNNRLhp1fGM7dVPEHfCQ8WK6LKws7tYxeRWgc1NQVzyw7DoJ5L165u",
  "key32": "29D3LiN9iqjx1Q8BZR7VZMySB1DXDoQXxcmMK99pZbtJD3KJ5Q8wT9n4Vok4Gpchketg6x9Mng3d4wNuor9ZRxuC",
  "key33": "3egS1K7nCfrv6nGfjtyKHV5opMy7ATMxhfNCbNnuDYezq1253LBEfzSVFvFsWeX3rY5Nrz3jhgiUzEVi6Z6gtsXE",
  "key34": "578h9AGcqbJNWrDiBFzeiUqNcP81HcY7Y2yi6jAik6TEwdhtP5jFhGzBmZdNX7aNPuK45Jeaim3d5aMrt8nurFtS",
  "key35": "5ER5nYFuNFChXBcDjANEAospW6eiHRCfYzsmbWri5L8kE3RsDNDPWVaJyGPM24L4tydHT7vsnugpMULW1rQxKpTk",
  "key36": "ZBwzTSQbyzeqtu5pAk7NwA3f9oUqBpE9BAcer1UVbCP8gH5GgV7fvK3sXASWvWewpvitAneW25fEZ39zgBFwybs",
  "key37": "3kvZPgaRK3NXpBsdpb1WBuh55UnxJg49LfMZm2c4q6ibTeCTRWxxb7yAhqvbWzKic66ZASEUfqTbah5L59HiqkJg",
  "key38": "h2et8yMKALS1n82D5K5X6Zqzhwg691gq76jiF2eh95N7eYBed6Btz5CENgAa2bwTXjrYmwZMpFXpvsysHH5X552",
  "key39": "iK2FGbAHmikzjhJC26NFbtT86BT5sa9kh5kPTAWE572CQn9novvWZ8PVYp7y6b6ug68C627ThJtz6yE48QJj2i2",
  "key40": "5rMxVhVm2qw9iJeMkVgBdscF5ruQw9Se6LDbaXoGNgwwtt4CcjGJokN4xSB7NuqAeKYwqVCaWboZwqHWrD2zuKE4",
  "key41": "5aW418kuBkpPbvdomDC8GSaybwywVMe7x4V5JVwvue9iM9ohfo5Tkw2JbnLg1Vsyk4DFbCDMzvKoqu8qZumKyYpv"
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
