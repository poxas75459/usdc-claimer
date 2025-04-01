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
    "5pDu8VD7DhWL98bSwHuzhqt89XQh66PBGpg2wE8JN9K6h8k9SM2E7CFr6xsGAjJzUhsEKSKR4ad3zFL17kzQbyvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57fvQzsjy2oekkEg55WXh9W1N1cHB4kqeYkevZoRZtbHmXLysSZ8pB5gZVG53YKEXZQXxPVVMtFJdRW4neSrcxhh",
  "key1": "4o2nYDcpaSkPDJNm5NY4hjBbPdjQUfEG7Kk4Tut2QQaeR6sMvfUK2W7L9ukLeeoapLGUm1AZeafBdbizNFhfogiF",
  "key2": "4ikDWVf53gSKpTSycTraCDAQL8XZ42dLxznDFu7Cnh63YtjEK7PELokHAkdMCG2ekSGTSw52k7f6NXttwhgm6yFb",
  "key3": "67FJxGeK1TcGAzK1wbdBKZSmVBE8MnYBmqDkuZhbhZLov3q8eCr9bQdT7i5yikLjNfjmKkbtKzxnDsY6WT4BuKtB",
  "key4": "64W4yARP1wwLse6D2muRfm9cVhJuC78jiKjwUVh7oLAAi1aode7hPSsmYQfms4oaVK2SaP8HzzqF3EtewWHNA6LZ",
  "key5": "5xE3uS6vAqYxAwwmfKSvJuiNHbhKVUHpkJGbNADs1T7hCjqroRXAH86vYhGiBS73wgety7qsK98kDHWK9zmmM5by",
  "key6": "5rPN5oWJF8wze4JCmUYauoNtxCVGt8vvMWMWmtb3LSrLdRErKm8UYhAZWwj5kf773EahotDGNVFuWxV4poetHibM",
  "key7": "5kW1bJ19c7kVWtK77LrxricWVwHZMSSLsm7wLvKQL7iAi5eTeQXfqxSyDaw9V1NeKWDFfJnUbMyZQvGzsx7UmTct",
  "key8": "2kHciJwKRLW18b55scXMpNX17a9YWVmHZka6DxpiL7ccJR7K4qUT4B3PnNBJ8hLMQWPCn28v6qD19wsc7EgjfEzo",
  "key9": "5FsfsgHG9DN3YsSvFrcnH3E4dmY5qXzuQmGeuULW7THVFEn7sXnHdturtWPLukaTe2Rna9MWLotiiASihYQ4gkFA",
  "key10": "3crDWW4vxmbrivtjmPosZPdYrC9h2oGBar4kUAvuvmTNdU2WP2Z3EQexFBFStpWdbT8AbnGmiqFa6UvCE398CUZe",
  "key11": "3AoHZzhkajFb3nRBhceH1KmMgVD1buUqHdpKWoXgJpPkdMs1gu1dWwcBhuD5frw29SL6eF5jyPDuJQR577Mf1Wd9",
  "key12": "2B9D2DQaYRP1vhqxkCwrzVomWECwjtR3oGuUweYqwyLGkXBawmB2deG66bTnq68pUcBPkZoT7dXf271HyBYWhgr1",
  "key13": "3cCuBD7gN6AcoMK9VuV9H4zqMgUugd5YyAGUaFpMAitFVAmVNxm97QiMaiW82toHV29uiGEWYS8U7wRdz9HAYjTz",
  "key14": "5X3HxPu7iwSH7H5dvN898v7sVbmU6ruQbLVUSAZLomLnCy7TcKJz2yZQ48pquPGSTfNxFsiXSNu4Gsb2PQ9X2dY6",
  "key15": "2ohyA6Za4pstG2dEqYr7qeTLnNBATDPs8WY7kB72ocC6x9Ai88bEXjinXXU2SHj8ivWXo81BZ8JWwJPt4wbJDDyX",
  "key16": "5E6qvFNTCETG9C8duiHbw7HS53Nr92hqPiCnMay1FgTaag9o46SQPiomysungY2Q6uA2CC1xzxd8YGAKcPcAv1iJ",
  "key17": "2Mzg69K2VHzjZaE3T1rKBwvzuzMqnu1bTiJX2Yj2qZZYxtwyP2b9UjZyUNuzq1dhAmXhjKiuKMmg2oRVRBhpAQFc",
  "key18": "3DGKGcaeTnFB4Q5XDPkcAx9rv4wW6NMBaS3MMVtYUQNzuMtNXSGGBFpF9dCERBe1HpWUPVyqChoDeEwyYdiQSAHK",
  "key19": "2zV9DM2edVR2XgFj183WTe4NkaasGEYRzZ9qQJQRDVpJvttddPEA2GttJjymXMLG9L2cUpwv1u1UUXXcRkYRVPZ7",
  "key20": "3krqJBiVopPfL6EgTAYMmRMutwDCE18eYdXfuh89sA6tukTEHUKx6uU896vSURhe51xD222V7epwZPpbnEXpeXcZ",
  "key21": "5ApYmG4pYU8fMtW3HFXvM9ouzSHvFnyq88ZDqosW72L5Zwg5ngxHd5B58g3RADQdYZzh27bZurPLCibvENMQJWjw",
  "key22": "VjSD7bHiJrWjEXtWXWGRfbyhinVnLjzFLRgo5cqzb6ZASqCdqmeWTyRqLxJKdgDzvJ5KPEeyeRigXdivHkfiA41",
  "key23": "661koREtYVGU7yeH8Jinb2eXCeT3rFkZBbFi3mNQRpFLXyrXGwKqYBt3gQ8a724suPqvURJzHrn377f6W9xbMyXw",
  "key24": "33DR7TJJUa4kEw1SYSVXZeom1pfZTGruABbibRAciaTcmdVQt7dhxm2CW2WuQaaap8R3hm7PzvJiHP42YdTNcau6",
  "key25": "3zRz8YPiCzBzxRhMk5VMF1QGjx8fA1UVDK7MwE4nt7ZLsY4ToqtR1cYZqSXNEHDautTULenoRh6SrK84PXG5Rv9C",
  "key26": "6gksxuGMdZZWdhSj1eQjB7MSQSkxaPPidbL42o5sptyLHyoEX1kUzy6uEhQpigonRVed9ftc2dYGPK9SxJbutqf",
  "key27": "5uAYZTUbeC4zZ7xsXnyaUwge1py5kZUqVdoL71MWqLm2MJc16jzcv9FYmchNysL661eAjhNjvoTbigocgQ8GBQis",
  "key28": "4RyBXTjF2BpsXZsS6WuNMXfYWpgDDG9echcZ22xAAFC9C4Z7k2WRcZFfTKmu1cRq1CHDFNZwT43Dxk29nQ7i6Re8",
  "key29": "2o4h6G6nTDfUtx9VN55Xu7NvMPHhTzQ1nkU6zxUs4J6PpHJKMXwLNVzCv66Z3pTmAPZtUQCMY5MzocmcAT82dMsS",
  "key30": "2e7u5eksSqy783VG2otC4naB2r7g8te1VYjTsXFPdDNC1qG45cWBvjAtHdXQtCgJ1pcGeCuuAp69w6oRsEFH6FwJ",
  "key31": "4x7gzXPNHMdtxSP5iZZ5oacn7agH3nww3Bp833qBdgXdqW6vkMk1ZN5yMwFjyK387QenqKbzPqHapgGHMXw4wHcc",
  "key32": "2SVd6fZ6e4kW4xhcTakiCARfCc7LJ9rdUuzBa2nfbdoWxhMzQF4MVVkmz7efthUyjsPvDUejoA1ZYVtik9rxC7vH",
  "key33": "4EANin5cWtEFYU489mhKB1ijoz7KQ96Q3AvYAE8as1Sr8v2C4gRB2M7TvHyE1hRXnv84e8mqaVxwJQak12iYHaWF",
  "key34": "4xeVKSR2QxPnpeg9ciBS2ei6qy77jaYKLqJ1uL5MAxBa8s3GGW8x1jeTMjAUkmLhS8Etnx2YhANqNTJqDfjxGDTB",
  "key35": "NWwETPebLKMhmWhfnU3zcPivm5MPH8XQzvm6eRB3CoZ8gZdzZfdgJxbcEcULpbbzHy9TdMB7haakKCDGqDkW2KL",
  "key36": "3mDjv9HDjH9phon8ipF4oXj8FraD1MYZjkzkQZp1b9brRNvQY9wEWC8ZrmhZYTTtPEbZdvnmeC6LjDSAM6jkM4pm",
  "key37": "2usW6v83eNLtYZdFhm8tbVCCCWAnbLcoAznj8z7rPAAQF8Kxt7F7fXcqLJ6tigHiE96vKS34ncicBtKZXBzBdadU",
  "key38": "3zpAwf3tA17841D4KamNr4zn5kMZxFzTKUidAJTPajA3nVRTuXtUi2vkDb3rexn36w8CpvebYBaZs2DaaZdb6TnL",
  "key39": "r1yWsV6yUrtZwTuJKHEd6WUbreYHkw6esCiKkzmsisosCvrasTV8AiY7KHh4t6CiZ6b74A2Wcm7c8PKubU5ax2e"
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
