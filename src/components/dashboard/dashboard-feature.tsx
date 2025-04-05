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
    "4ui3E4rZdY8bvbnFKTUCuLWvYsDSdqYKbvvqK1fK1Hgbr7DZNkNtB7GnCVL1ATeDB8nyFnqtXudDbBgRiRv7L4Ew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24CUfqERoR4xEfbLuLx8kCZe3x52mKVLGT9PZ9pPMznoHgWmjwFvy7VjkmLMxdhqCgyLL1gAf4wpNebyaJ7gskUc",
  "key1": "42Cd8doY2dpSe32h3ous8Sfn1QZp81kGuWuo6QJojemVeG81yAKrDW4GXkxXagmX7ftKnZHF7h7Z4QoK1Qrd339D",
  "key2": "3A82tWf3QFhs4Bvkmkvuu6w11n9J4QLgRhKTjfaTbUifqn8wHWrZrKNaEE6mvbGX9rKL6zZ9RpJdyu5nE9mXBh6J",
  "key3": "5Myu8HuV48LZAE6zZFiZhyeJxjb2VLFiJX3YiB2mTb7JBVNzqmhkRYrCXyUejQfos5tuJqDB4LnH6PJqdsSF2Xaa",
  "key4": "2rZRBsLkFDV4CfyEvyoKPFwiYN7amxvFZYmwqd9fNx1LWAAHmSGwAMi68YpTSkGwjMmYA1VCL6PLu5qVQMtWZRXE",
  "key5": "46vwZFPQmuSdrAqbtDFYSMCj2418XbnmuPARFn6yaZ3P8Nyt51kydt28aEwRkQsxS1egxHfLg2WhrMWYRaKVDukP",
  "key6": "3UxuGmrLgzQYB4xTi8o66MftcGtxDkTnTzqnBFJKdfDXBzWkx2kKQuxbcbypMjNPEHVjQACzSN2pBsjnFdoWwbMz",
  "key7": "2d4BgvqqwQ841riTxqewHjpoBnDvdbUTFAKputrSDsuRbQ7EvCivmwaiH2urz7YNpeYe8KdYAe9pjcExnrPShnvf",
  "key8": "dVPaifPqahTuAHfHBLbyy4YsBhjZo7Rj9kFcphpQ572ULuGWBRKL7ZNEV4NCjjYqFvJuqAXq9ztcYXhHf4v2Fzq",
  "key9": "3f4tdt6gAVY3tEojQpHFR7jKiYtRw2a7qNz7KY7AbuTGCGNV82azuFGKdQa7vDGEPbQtmrB58TZAFj2PjKEQYrCi",
  "key10": "3gmoxjR1RvqVWQWqo7qSzTAmrURiqaJGtNK2bsaoj8PEPEgYwKXH7CjFQ7yGr1S82DKQ2YKZWXb8Kjfgepye9Npp",
  "key11": "4LNiUXQfWmJ4UyKruZbRC16AKzmZ1V8hKfser4YFMD7m752f5vf54yjzQwnSkMxaCRNUEJAQnVBDWT9zH5QnNbzj",
  "key12": "4tjT67hwvoYo3F3FQGM7AqCScNY8UbvQ3Cmc1Q5WYS13Uwfsj1z8jMNE6stvsjmfqNMRudGRtopRj4Rt65n26q6Z",
  "key13": "34Q3Php7km5BDCgnGfsYqkwScdVwisdbNhn9oP7Lc3s5djk6sg9EPRCJeaeDVnGzV7MStcA3kXizpBae1vN31r1Z",
  "key14": "4sqm2nhmzJYfScz8W9kQfR6BanyfmKt1EZeX12Z13jS3QASYKnQQ91Sof1RtSiDuBoUXLxb4tHwgSRLS2hP4iCp7",
  "key15": "5hgU3c1BobLh799VU7ARfVG9bWtGbdPzErGtJyZMDxkwp2TK8YqoQzjMU7w9j3ET5oDQ4sUDFPpo7h8Vmwi3UEK3",
  "key16": "45iLDGUU7pHTPqyMR4XRa4oWi3tTRTTHncSUE5YXDnyy2Topzvd6j6M99XjNipXnRdn7BufuU8hbfTdHfgstAwiA",
  "key17": "2oBd3mPSQzKmMdnoxbmfpHLexh76WcjL6UyND3HZQSeNkihfRJdBLQkvrxMsy2een47yLdGFZW2bvSH5vWLy6uhT",
  "key18": "2MNMZdYgu1GNSYQmcx7jooyNF5BUyT6x6zWkQSVBehC1qhVuoMLTYj7dJLBDAEosVmGABwsv5DbHRRiPCUZtzi66",
  "key19": "2satLBQrYWqt9N4WbcWLNpL7vXKa3mbipJyypfaToYYeJc2rYs8bg3n8aEqZQfeLsSRmZBJWjCpPKr147xVkLtpr",
  "key20": "2v9wPKjqDWGmwuHpwNDvUhdMXexBS8W78H4AkwsrSBjJdMzm72L36tMZaCHyjGduWtUQURrHRnSp5YPiJKkkLWpE",
  "key21": "3U654kUarB96un8EGXnaBMsVutFFbYyFCjsNSH2hrYeDTroxyUmz1D7isVL6mYhpJPoj8HQ7Sx3xDGw9hzThJvLH",
  "key22": "UDY4rVrgTphcruowrxXpRx164jyxzvbKL7yMFGJbGghHpgwhDXqCMwLidaz12TTuBGFXDFcWD7fCozqtzEbWrSq",
  "key23": "2wLS3BDUzPmBNfMJcmiPG9MhzxbmYaZJAR6kPScxKmPJwevmzDsJVJC9vsdhKGCXX6Vz635vPHdZ7jF2RUpWakh5",
  "key24": "28sg1hwA8cvqaTMXrBrbUgzRfFKoZZY6sPKr9rbnvv9nwuNbDcPjt49bkmgNtGTDcvwM9soFFbnCPUo1NKbM1JNS",
  "key25": "k1KxMym3p8UdeQVJNwKoUUr9G9KVoDYjSeVomzC4NgbgT4ZmuEptJfG25DdnEWGGuk7P8yVYiWvWFfrCBmD8anL",
  "key26": "5pw9mvG7mNNDxMXGkGtFPw97Diip7ZoZuv6yXJi6QzhTExBTs8j7YpwKsCmECpXd8bFkjjXHxk4CyR5bsVZKWkPg",
  "key27": "5wsRUYsRdaijHW58dfpyVGHjVtmygWMp5FC8YvUtUfbb3eWxxCoCpXfHQFQGnVnSuZMuLDcL4TyGsaBWET87XzF8",
  "key28": "4ZH3qkESaScjVDvwHN21ddULco5KyA6b31dMh53pGEhehCt3m8Q52ERM95AXsmtCx14kZTXGJ3wGbEYyzibMUaNz",
  "key29": "3E4ag7uhHR2d4r7dC69qVDU9JGCSajX9evcM1vRixYzoF1ic6Rpgqzm5vfSWLbs4iqDvmGoxZ9LGh2Lh2TKnQJ4R",
  "key30": "7yNgyzsk9f8TWfEpmpjoyuCq21kBmvfULDUSWsAEUxnT9W7MA7FD4fHbSuG6CwguzhFH3egyKTb5rNwLhKDQ9Co",
  "key31": "Qbuhzkqc8NCKR7772cVaqiYSjjF56DdnEs7vk5NnU6e6WjnhgumbNPPAszJRqybAyZDMBb3hsTCNXoiS7PZk32T",
  "key32": "3RzeRfivZdnNKJ75dTy8mTuAk3ARxihFsVxsWP8VoYTbntfHHvMD8KPdvCeQbeN38WW6hMeZWzjf7bXtbdcyjPNH",
  "key33": "EqtgUdMus9c3aC4YGCWEGauU2ReZauD23YvNp4TWvPz1XBLatnkBsYKE4GFNLBXC7m3642yB9ruX2NqHVEdSLMk",
  "key34": "F5Ht7BouRimNCYhSaYCxMEK2GQUd9rC3rKtvd9BQmNaxB9neZeGW1r2uD5v2SPEqaMDqC1q4Bww7zuMRpgc3AvF",
  "key35": "22qxNeKaKTFEXoxq5MWmNEt8irCfL9ZEFNDWzZq9WSrhwxVDsHK1ow6WzTVNKyQiMMsrWU31UC3BVdYEKfEenm3H",
  "key36": "xm6y3Eps2D5ARWDMmqW6F8XxUEpV9qSbNL1buM44xh38UvCjptR2TdG3aE7ZKnMbhExesasn4PLzWPLo7FiGfdB",
  "key37": "2KM4vWmwTR98DjHgjzYvK5iN6HrnWnKzTaRKFYrzb3kaDsXry2rZtBWnM3jdb2h5dAV6orvVwLS6eHJGJMQt3Gb3",
  "key38": "4yZxSmNauQQk7jhZAA3hRbQu4o5LsF3dhXYD7UsxfKsXBg5WD4pSHKLbVnny9uaXPN1QREfA8PYWUk63VRqzwRbX",
  "key39": "5TuzRi5nTNirgCRktxwRFhZB1K1GrVBHgoMzEp9rgazosmJRLyQPq7Rx3ggL3H1aXcX2naikbw3HaKTSKoLHvWzo"
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
