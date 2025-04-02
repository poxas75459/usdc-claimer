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
    "31x2MLYPuYNTECe4VcBcajm1S1t3AqQ8XoxDFj9ycvKx1ZbG2cTuYcmXJ8hbWR5QTUkDEGpsdgaUZXDY2v7QhXLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YsqLLArXE1gJz9UfKyqxW7bmELg79ds2ZoqZNLQpfft49XtKo5tMqx3hmsQppKYfWKZjtXBYK18umcAHmT7BfmU",
  "key1": "4UrA8sWuZgi8SVyVPiHzfy9gc6eFCYwVPbnf6jqdedyhPE3NWdFueds4MNijmTiyv7VvmqRJKGWQ1q4t7KAkxpEv",
  "key2": "4eXFtgbMzje2qtn1zDN5hrwp7a3CXusRWUpWrD4cf5y5PGojYVUYsR4eG5E8sNVHPtse5TAWbeuHCJh6YeBaDAiJ",
  "key3": "54JVomminyR8e7xmAA9m1QGM9FY6aE27JmLHEpJTVHsv9Du8r1jzkCMnmaieH1i4sHjYBXGKZdziHyw9dk1JqXx8",
  "key4": "2zSns5hahiBiZ5nYz63y1fJ9HnHijcVjysEGgrz3t6EsYvNhNXNA3suVZttonFt1E14CyHAGaXSaccQY6gcwrRKU",
  "key5": "48mvbFyTsDAREzaaLvTgHH7zw3zxzfnwuNjXrZKmd3ptTGf7Dhy2s2x2eKjEKsrvQ49rjA6eXKtNwYVAVQBvd8EJ",
  "key6": "3G343AnCeTnBb6eN51LKoB7nNWVdAnfGENs3fwhkck79G4Q7KHUCYfGXiPanixySQ8cwxvqAadMjiKCdSFsnkpob",
  "key7": "iCoRoyPZjpN1yH8WpD5xHLXcdA9TeT5eMUby5Q8cFFokFk7qtE8P4xNkZZKDDQ5vGTwKAN1XkVk7fetTxvdcqfY",
  "key8": "3NNPRMBWGSdQdoim9isW2hWzg4Ufs1hPe4L1KzzXScaBQnpNiBpswY19wpWagAGZP9vSTsLYLiMuvtcYmPd5PVzh",
  "key9": "47CFQPLNEC42FdN233B25VtyukJfUoxYNCs6nrAPkKDBK2JYFbjKtA9FFNcZCXYzLzt7g6dgu1rsHxytZdSmLtzi",
  "key10": "2PSuqowvGP1mBtUW5Eufn7mGeWBcfSxnj4dKcVbEXfuS9xeJ4xeC3KHP6vMQDWQNy9WCThZ7TtTgzRcWiDFYHHyE",
  "key11": "3nMJgMDWYHoDAVEJM18xkdhNrhmrTwTZsmSd19ittKCKHJsSphcQzMs7tCQk36AGtQMQqdN9nwtQbp6SzcMRo8oo",
  "key12": "4Y6YZTMcsPX19r8tuwzvtGHj8kKKYbkzRSVaWbb4AQvDzVSCuakuESTMPUVeXvZX8ZLvfBPYqo7BFjqD99gJGswN",
  "key13": "4GR27tssw5SU9TXcTXnBvoRtfKRy5Swx6mZf8aTvbxvCnWvAhWjuTNk9hSqGmFP2SgwpgrKZPYoY5LGpipkNaUaZ",
  "key14": "rXFThu5aVpEgpatb8MXHsGasFytHr1nUgpEgLpgNnvFnMWdCGJcJPptbcwrgSpAf62KBJqksehZGMFk7eD2u3QC",
  "key15": "3UKMr9gd89RGUTGdKhxHyqh3DEEH5SmDwKPH3YxTP1ABqU3EyQ5ZCP1qdhRMBu17hctw9JJrnS5P2vmb96xV4fTt",
  "key16": "5yNeDcDt5axBqdjYJLRByepfBh7tkQaXuivsxTWTSAPimS2ZBbpUoBpTvw7kbQokADJ932XQJtEcPqATZT4kiMbS",
  "key17": "U6FjcZBXJeQejoeQSixYL7ym1P4u1EXNWpVgPBM2ZEGLX2aFmM9MpVbh8TV8WCqGiRGQPpVtjbAwaUpeSvoeA6W",
  "key18": "RnXNvwXP2nTiGV53juPXeo1acD5S4JxKguqYqjMhk4BUYSeQqBcWbwcWvZAf2oMwewZgvofEMW5uYFzzw7ULnZb",
  "key19": "59KbFwvFVDjAQSU8hqUtHmAVHf1iKBS9MQvVpxXDeiXQ4q3cp1fFf6R481YFd4teexWRfE3tvPD6wT9kqZpbZ8tQ",
  "key20": "3LMaMNX2gsEaiRAMEkjT8kRSEPb7BvUYghkCXo3kV8m8SBuur2ZuCMrR3xRaSXt4323y5izAhdumKxYDgzSA9ZjE",
  "key21": "57FW83TNuHi9DWSUiJLbusrABXzYxC9bKkLkHrPnfrRtMv211xoS6GJLHCAWyi4gpLziTtDvbkvgoNHbdLJ5YH3Y",
  "key22": "3UZMeZmcT57uUdeVkKGQVAG424TBAzEdqS7RT78nbULRLkBm39rogERbCsLzXst2tohkh7aoWufX8R1jHK2r4SQs",
  "key23": "4S34iGdY21RmfrgULjTHNGKP7PtrVBBACryrkhXx7NRPCNv2JzvCfMgmHXtmtQ57Sjhn6iZ17twwhzhGUBuFi9v7",
  "key24": "2t32jF6QAP4EmV5KmRzv7U7XoEC57pJpz459HUiJiefARf7ZPTAnGEUs1DoYFCVJQFJmrq7BN8fn9qaS4CiVR3bL",
  "key25": "5GHMherxiU2LVkex4jmfzpFBEFPSNyEHL88GQR6F2f32bNszow6aJmDfNwMAjvs4g5mUWnvY2b2MB6zqSgqjj1A7",
  "key26": "5NHaDjSx51UZ28eRPrAdDFusXiahtE492qXoNYbZtBCZXuVTKeedHc2DMRTn4HhkSDky8i3ty9QRQg14k8pUqQa7",
  "key27": "2wDEun6xsAPdZfACbtuxAUg7VnEfQpX7cwTTFg3nTvP9Cs3oKZTNrMCvNsgwVVk51mnLhc6XF62vBAmRAZxQqJru",
  "key28": "2ej4W81RiDVWnm81DJuVNw2ztE7t6Xsenn9XXNJifxoYzHTJ3ynuSCUtca1zS9xuywjdLFZjwjNPpgSv5bRBD79J",
  "key29": "5ozGwH4LCBBDjzXHph5LS6doPX86Hsdegkbqvy4n1zCTbZmgUpsSkRY7x15JDNgEcyKyugjaNWGAkqGSCrzZkdCV",
  "key30": "5aEmVHZmoDGaJdhg88K1StEjBkpKjzc145w9jbSim1XpsWXtLSRXvbgLu5r4nfaYrdMuNQy3XEdEuPMyjKugE2QZ",
  "key31": "4Rey7PijUufxxMDbBp5noyh5NUyhTyG3B5aLBkqv2rj2zjFGKhTahee5pAGNSK48XCHZYBCTJpFe73vrUNpPzi6W",
  "key32": "4AS1L57KaH6y7qRrm5pA2Ty6mq18iepWcLJLSWPTtt5155ziTdTtAGvNgf8fQ93AqNCgALmHcrXcWKVcD9Pwij3w",
  "key33": "5QxZo6V9NgDsF4GfbnNVFiXbDvHhah6WwuDJ6oehxw29bxrfdAZr21kg5porqKkD3zY5vqVtQz44jnsKxyobbLYh",
  "key34": "gd2n3vCPzZQ8fWb2jnJQdrmY52yi57sNBhv8xzKkKQwnXDXtXk1wCF1896qmQXsAzp42nS6chdmzpewe9qcA26v",
  "key35": "52E5o4jhSDeLMZJbumTM4ybALqFHydg1GWzQGJ7Pj8JxfbXHUMELNqYBeBEPw12LutG7DgAJ5aZqyU4xPLdHf5ZB",
  "key36": "2yZmFmQNXq5qxAFL8cUn11E1961tEWFfpxuqU6PHYFwVyeBDWvEjMWwGViChRJeL7DPbuK9rRq2g4QubUpyQCeBC",
  "key37": "22VDHp6GbhLA5SCSqPCkXBpNvPz8Vm8g2uJ1ZKERayidGkvfyiFHEdUqXMMHcEAEmxVcJLiFhT3nm65UyfMxFZgw",
  "key38": "5V9pqtrmqGDaiQtZdVkUUbV35UdfCvb8k7nLWvUdFzPEuxUZBe7pbeTwArE1EJ8DJfgaA24ZKVt7GLTn2XgoHZkx"
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
