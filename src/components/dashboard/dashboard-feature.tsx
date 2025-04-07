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
    "3beRbAW8RJVYdmGi1WLyAP9vDwcPWMP7kndLJUifPze4QLP7aqGy7oMtftSUKqJYw6Rw4cDHgdNEgpFHFbhh2T3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31kWe7fWFyFMCyDjVr6TrxAiXXPeCLiKfknfLYLCCLGrB3DipCv7mdEgenDpNQtGK1SmsESdZ5zDRdvt79rwxVvy",
  "key1": "2Kov6GyZiZqiaRvj6LDW6UfLNyfJ7HwcEc8w3qUXji5ieQ9DBqCMb65g6co8SkUPwD3Jzh7HjkikvH13o6sHa1SU",
  "key2": "2GW5bzbFp1maW7SssQW3cCx1UNcxj275XLrqFYmxUzZWmHQVCof56o2kZ1Cyq8EKDQfP5qqcYqvuJ1oaJfpBvM47",
  "key3": "3S4Agcpppp3UJinJCMGPCPhNL6oUWQSUFp8V47rqEWp7ai1ZuCaQWrov7jxR7eLQiap9LwCux2qdXjwy7c8hUWW1",
  "key4": "4RmXCBLZDhwyosfULjBFGnQNJLvowhpcmjsDLuKxiWJsukdZx33vmN18VETFxz9VjFTadDmuDMpoMyMvs2sushVa",
  "key5": "3smAePGEWiiSV21JWftHuRfemfjp83CVd2CZa1oRvquUESJZmJANrrDdvVVtjXxQ9yPdrQFhnQz5iKbNsZLFa6wV",
  "key6": "QcTN96Rov5XuvU4rnLQWF3zZDCnSAPYrKsDTh3NBax4oaGWmEfMWUsCLZQUyCvx2aGFcQ1sPskrUCoxu3qf1Vd5",
  "key7": "2we8W4M2b5kyHp1RHCidBdcebX1WfwPRVNu9j9Fqqqst6iQqiNBCkPiW4sVRGhr2WsgZCFxXt2LpwbMFEbdTYSKd",
  "key8": "2Q187RBjb6e7SroEv7jYgurGH8NCCC5MEYG4dv5g3n6dX28EvV7TWGybHGfCmssfzQbipeXnwQwvea7xM1AHs6yW",
  "key9": "52NnMDQvpTfNMPb7T33ect5BxkUc6Lijh5rXyhtJEVA8k4Cq5CA1jTJySsCRTdbXBemZNRCzXRwG6Jj1wpt4WLfE",
  "key10": "5VxGefd23bYA92SsamspSJEodrtMsqot2hiV9pqd5d9P6dfunFkKu3nkSfCTpjSHRXf7GZLeegm5QRjUz1abqf1Y",
  "key11": "4tXmfV111oTLjtwFrWuNZRfHsdxotsY8ny1yCDWo1HqmytfHJCrxQkVsUv9a1TLL9mb5R1AY3jmWpuhPVx4bE6Fg",
  "key12": "HAjfFhHUDBBmbFp1pnAig4aejm5cPZXY7pd3xHqubj9GKNK3bbyMikc6SV3XCuTwXH4pEA3SGKqyq6tizspfFEq",
  "key13": "TFcMfhsJVTBtGuUMwc4YX2xEunyZSdfkz1c24e2DwCs7LN2gmDu1PKiEHTA5wqqJuVg8NJ19GCb6mj3c2ETgcc3",
  "key14": "3VT7oESHR41FVnVmUqfX6YZutrB53K2ak6Btcf8hvqFcnvsF7ir4kgKitUA4czgt8YEypMLTh978gN2WrKaPbT31",
  "key15": "3MVmqCE3P5qAiZuTToKZgjaPHXzkUHWzbTnTRj6Hg4An8cmwJB4unTnBM2PXkU53sxuqNhcEHbRCeW7meNcUub9f",
  "key16": "2JkoF18HCMTcCqzueH6sGWRBJweRqiqdrZZ94AarPDrMfvkU3bFkAac3t589TPJKAojAbbaqbDjHcpHNL3BLQHez",
  "key17": "2oJtsU9zCMgtD44fz6NWgTPA8C7B5RLpvC3qGPjAX1M4TQHCU92GuqiQTuT7fRPLVUi6do8AswjpUuSRh4PxbuHe",
  "key18": "4Y2JCwkH4pxMnuxv6ufUX7MENGZo7ADtj7hHkGfUGpqY318SrwzT5p6SHEhfHHyd5wdoEBFDKmdNFv3yEKCcjgwd",
  "key19": "KAwUbbLusUF5d8auf6A5eY9UAzYFoF8GWWufTZarX79uaFigV59iUbSY2hdDF5TWrD3HcpqTp2kjoxgw8Tn3ydo",
  "key20": "3bVTda7V3L2TdZvidktUQogdBYRHgBdL3QnettroEowxsPbN8UEzz5uAfvmLybsWZPf7EFmkTvGtbcTgNUtxwTqS",
  "key21": "1u8xCkDS5L9jnKQSYs2edfQJAf9vcpsVjHHeTxDs3z574TqnC7TJbLviRBa9ZMaWcqcbZr8rQDGnDr3K51NiNuC",
  "key22": "2eNj7rbXAq9qN6tGSXj539dZLbdS5x1kKMfzHSvn3LZCyrQHmbFcdWuf3CgiiEsrcGHwaZeBCVz9HaWVcaB9GinD",
  "key23": "3UmsuBtJhZWWJU9P3r64RZZCshawTu5vQfwzD2F7d5JawYyfbE7oenNBf4CbzECZJa2t9VtLpw9W5jX7VEgVGQyo",
  "key24": "vdffYBjJadCFWGk4LHNo41Ca9bQ6aTAqxa62VTLokzpPpR1VMWschXVuBAAz6V4348YinPk83eYcnmuxmieTYMn",
  "key25": "5mT8Eav1LpzNdiftogrUDV5TkTkxTJTtv3KuELXgutMoaYFrZyZhYm2PNkfzBtz8zXLhHpowmxF2c6D7Hssdd4xW",
  "key26": "BpB9EFm1SUNWDh3R2Tzvck7fHrUqdUpaRwK7rTidQzRz5Dqxzm6eSQZWMf9xvJx1LhysnMJ131y4rhGtzQVLf4P",
  "key27": "2fdN1zTgHBbhvJTgNB2vQtzmk4izTgZ2MB9awAtmDwYmLawrLjqcPzgFr3fDBbfJhYHYFUm4E5GngrUpeKpujoAG",
  "key28": "5vkTBm8FvHGKommPb1zgya3egUfL1MWwQL2w3uFpa8dKQDkvupoSjRnMfB2yDXka9q8uVkkifHgTGzKSVsoWksqX",
  "key29": "3vH86UuxEx6mcNkjcrFcroMYAgRLqQSGbgSEKfx8V1W4BLiEM1dWb7p9oVWzES5WdmFqkdGAPW7YGhV4cfLJKF9S",
  "key30": "byGgDsLFbMb5j9n3gRpDhem42yHSc1hdSW9ZaJ6fRNU43mHdAKZ3Fk4yYoBeDNu8tDaWv5G6jovzPm9GB3FCCJH",
  "key31": "2rs6LQ24G4xRCiWwUBuHZ43ej68v25DHbxXigk3tUGMtYWHvhnhuRXZi4NcKn2qiS4ZiffptJNKnnq2Nh5kuZicV",
  "key32": "3FWoHnuF7QLyqrSkGNtajGYSGstQMu7XyupmxLfhmFTJFJoxWvieS978LpAs3AjsfwWZsUtWy388wDpXYLfJANgA",
  "key33": "4ADnGgeoB4gyouVoe71pTRgiCYKYRJxzMQNHyg8tTK6L9FPY5VmW8RYz6uiY9X5grD9pAo5AXCEfRtmD8egwYTup",
  "key34": "5QmjaqRovX35R7nya1yKcmCKRwNfubU4bKCHmay6efsLd8Kr1vZ67AuxBFZVY54Y5dddP6W4YhiZdmJNPwLB2Gej",
  "key35": "5VCqnE2Mjkf375m8hLTpDknhAYVDKcmiiVhHDox7XrMy2sf4BKad2nj9uLeu4yL1crnSCWP6nv87BgZqKud9TRwf",
  "key36": "23bmoRsGjFLZs6JX8oxYpQFNivmb25sE6eVhEgmF7Uk3YefMUDCFvFi2e7tQuVnfCaVnqzduvDL4fXxqk84nLD8w",
  "key37": "4fabrZvjUZDaJM5bq6ntrN2Y3MLf6dKfw5RV6bCHKrN16bRxMTL9E6L1ZVbNHtRiPSXMDC1Aro5mEg8YAjCAtFoT",
  "key38": "5qJy2MNttz7fGqaN2FggW2uync9ZtLCNviEKavsv6RGFSxZtJWZSzaqETTFohuQyAvav8tjaDbLc87Ye2Rro8i3H",
  "key39": "3M6UYUv9H13dnmHcHfYFnbnzsBHg1RnLwtqF4bu9AUjNj6sA4SFuazfvqrsF6zGrPP2QMzQY5zZgT6e7tUss9dBv",
  "key40": "pCaDiEe2dBuvxc5Sjm56naLb3zFwCLPgfuy2tNbr4ywNimPkEAkgQsqtHSAx8LyXvTh15mgm5XhNHpAEX6JMRha",
  "key41": "wg2S9Kodscma1esBMoUkd8AnDyTsLgSFXJ4uZeA8UhbUaP6F744X1zy2HxNyeTkFPh7d91FvfGmvGnBHNdUCXyS",
  "key42": "5DU2vfQsNL95L1mFiaMKvSMUjejQjGDNPWAxkEe7aCrn6dLNHT4eV6xwvxL6bauRdhxd6meLX82d7F6wiewnTY44",
  "key43": "4zgGN7TBeL8dL3QGwkHU9H87eVdfGoe82CPaTxYzrunU4qN67c2G6nPt7JXJUQbvUEefGidgoRAWQ4vmUpiY1DJ1",
  "key44": "YRKnWEjZZ4VwSkafLq63n8hrGqa1uD4DXwrM9huZMbWjrdZRjSKFSLwUnRGSeKfc7HAnMwFgKqTccwwsqMe7nBf",
  "key45": "4tRtxTUwmwynRbtd9RGdaRcFMCevrfsgH1YXDz1fDUtqSispuape7rBrUCDi7Fc5GcjZ2pQUTLHjCRX7kgCAWUnu",
  "key46": "3DtRf3E2hdfu1maDLdotuWGa2XKQic7WDSYL4J2MQwY51pcM1LVd68orbspCewdxRowhe5HnLjgZBML3JMdBpkBv",
  "key47": "2hGY3LRcnou8ayYe6nNmpThAeBxsm7kZjQ34bVsb1FJmUQTwh6GNxxLi5bWUigvv5JcngWLEQ4GVXW2LAwfebtcE",
  "key48": "wDEMAZuPomaMq6twpnTHVXXWj4weFtWYYTxvAxtZJhFsfd71ej7Kb3LXwB9FqV7vkij6u7CREpnVshi3aYU7kjr",
  "key49": "5LroKSpgvCiPpgRPMUN6kFoQ7mQCPWRbkdQhKdKdDeg1X6kjtsnqeFAnmwdpTDsiGLgAdkzNakpvtshvrPK7ZqdZ"
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
