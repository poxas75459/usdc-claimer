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
    "4LGscqCVwULPbNxj8GKkQczEsof5oWDTuDZQik7tHF2T1qj4y45eJfeXf5UC5JmLXjHmTvK9ePcsscmG1siXTtAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qazfbd8nZnwQpwzbMCD4PvRJqGgBJJywsmmqdLj2rnYnK8xw8yrdHoDEkDHAMxuuhUQ5tBBkpb6Dv39WTL2HhGx",
  "key1": "4e8ah1UquLKYpsR3ZTxicEEDh5EELhf4sjxjtsFfFjJJ7Fr5iq9LUdR6uTTsJfAmU2etQrbrjLMR4si3nNsoDo6S",
  "key2": "622kf78CoH7QTVpXbBQNBdr2mvJpG5WfZrk4iWZwXRGVG5SGY834hwvenfzbwvz8xpupV86t2e8doqwPDvbvC7ad",
  "key3": "489uv7LfnKWHajvAFUbKNrhvikgDFw7DJzHJQH7c8CkdUwSFqXrrrcC1WzjkB859vw7fkAKTNeahCbjKKFJyWEbj",
  "key4": "bBP17hxv4snNhRKoRQZe6RiJrqygMNyPwMJsg8dAeWf8fh7YJzR9A1BNPmxs8xcY39bpt5aiHXS1RTAHPBDBjfN",
  "key5": "4uAXEEzbR93S2CyzNnSmn39TxZVH9FLbxZcBM9e7qp62cCG1oYerr3VZQFNmvPSmrcuBJx33bp6YrFfUzprWzPP2",
  "key6": "5CpFmnPAxz8q5YagdTRwSi8rYg1nuUFMppXYQjNiqFcGdgoQar6a5vZdPNwtoz5WiPF4SriYrcj7utgp3TPazPHp",
  "key7": "5rzc8btQrf2aU3BDYywChatqQNambSVxJGmToqC7Tt95dHSxSTX6uQw2Lce9kyDmDAKtBvzDWn5U6gZPd9gDieUq",
  "key8": "VtWX8ZqPJKqtu8zpnQw81GWHKL3MGRcbULHU8vRjXKyGDeKYcXdAKVcCNWpnPAE2p3BpSTzZ6CMis1wTUrFk1HQ",
  "key9": "C1Sd1uNad2Ep4GiVCzYkTBWLuHYzcBsDdi1N6j3QkLswCAv9YDK2eeybjKArzRM65UZZXpNC9S4Wj66gVJVPXeC",
  "key10": "5hq6nB8hKxvcDfmMAQhSR2AeNk3vkro44n7E6HaphsWQZdWVt5mvGWpDBSipy72LGBvy2U1dZZvQqMsWDSVp3DEm",
  "key11": "27C3pps3RBZzL6n268JcboqMBWdU6yhv5m8qsLJdfTZ1orRZydzgPsHP8S7rX9Z9iRadTPm9UvfjBGuLWEGUM4Lb",
  "key12": "ium7DjxzvEgGipbwoEMbyQngJFGDSYeNz45HLxzHuDsxskFJoY5WHfPpVA1vrCDodL221Z5K9QXKC9hRnQ6VbK9",
  "key13": "24NV9SDZxvgWboZn3L9yViNf4QSdnH5ADJL7P8UjVYkdvwnAgiPEiLes3NWkFtFSU4aPLECqvYysKc1HzAqHmmJC",
  "key14": "3sPnnyvY8Q8F2k9kFX4JcZBsAz3t9A9KDCi1MNrSFE6cz2jA3st4zyfkKvfc92GU2WKArjXsLMacMK8MPk5yGfqa",
  "key15": "8s4dqcv4J3UCGjk4dxRuKqegXsXrPDDXdG1p2NiRY4cgrP4RYH51Kw3dTyhvaXs6cGuGnkLVRvmE6GM3tYrnW88",
  "key16": "3hUm3SixFXkyLkkLQk4sqC8tN9vKktkvhDv23xMb8z5BhR1V7qXoV49CEvYjKgnLK5vWyonNbXATCNFLD6ejwz55",
  "key17": "4pHQ2MpcMxZqhx9FsZVdeREm2onykTb9wyEPVyHFcL5y9E9aWTzhFeaYBeMeKfV77JozvkVH9Btq5psmQjXY59h5",
  "key18": "2xudZBhnwTpEZUbHXcYmY1Qm6b8yWcio3p9Yac3x1Cm8UeQeejTH8fZYA21oJS6ffLq1tqBvC6V1mSgRH6kamaRq",
  "key19": "2enUXCsVKSMqemB8QvVZkKEezL6mVjGYw2HKGSpMWqN7auBFsV3ZBpQZkwjV797pdVRyZbH6XSNMknM8AiYKkHse",
  "key20": "5MeHKb8nhtWHZgNpEurWhpBQ3cx231y3Y8wSpFLtmvwrEpNVhKwMhFjYibbxfHPsbhrVpS2ifo2QbbqjpjZu1a2w",
  "key21": "2tD5heaxQ59KesEpVB9jEYYuAtStxU58DSpK4xRHddDPRDv8pB2ssFVMPLQcQy8TbXQCeXj9nGEvC4uJctYg5gNB",
  "key22": "3PXmccoRgp645ZWx8c9jUzt5323mmsEzAuT9bCEcZtboaonMVbQjfjf7CcuT7k7JJYjENPLBWiWfs71AHeyXUAwC",
  "key23": "5B6W6dGiC9CGdkPYWLGtunbTq1vz3SMGMpkDFjPuwtoiSNRsTkkShQEfhJrmxq33npKcJZL6XKZFBxmpMPFrr7uY",
  "key24": "2mmZkGBLhgkNv8BnA4tsq8X6xiAXabwjK9hXA64XC22Bf1DcyuDMBngmXGs5piebvWnLjeQFbMo6wFzu7ds9o5eM",
  "key25": "24XbqtG6PX9CRBnBeWGbwfhAJ1z5VfQSj4y2YMM1Xd6J2AxArbihKEcaiBaBYznr6dC9g7AfG7E4LHLDJbSeTAd4",
  "key26": "3WC8RofNU6RGn8ycCQoHBhjYSAvcBCF5jW5X1kSeK9aR5yoVtj7QwFvqBKABcjvAQyM1LEVQA7Q1fRDwbWJJr7RQ",
  "key27": "2YaY4aVupK6bhZFEo76p2s7HcjrEa5kLhjdB5DM1EZwQta6rXWKSshq9L2MFEoMc6DztFv9drVd2w9vdCiECVzXs",
  "key28": "5VkuMVjf18xtJfQ89wvpae7YrApd6JVpjToSfkwBwfXysrWP8UHYh1VNnzGwXnTAMbPJuCrsSJb8HQJDyvpiAZ5B",
  "key29": "3pncPeuAVEkugNQZoTwBidVacrS1duG6gjBoDbabumF4dfSQjfeayptzsku6exWuaLq6VUr2NkPD2caTnwPVsrzN",
  "key30": "3Du2QLTeMN76tvJ98Y8dsSLbuhdsdRoNPHHgL75q5eqoazUkzoMU5VLNW9B4cfF2MkVo6bCmRZfbN3rLBDcwPKH8",
  "key31": "3CPfukMcjkJnJcEkyHcEtSEkehB6VX5tXPJu13iWGKzgVg33hyyqYEfYhkDqshWoQuVRSms5Xs5bhrdgKT4Repmr",
  "key32": "yFA93ZAvMhGYMACDwV7W8VrHyni7uydYaWd48CesN3wkpWczXAPY18cAM9aAA7ezr4DXCkNHGf6rYb2p9NLvov4",
  "key33": "2ba4y41Y8F6ij1GaESjBWUbLztSsTptbwgvTX1N6xiDHHab3oBMmMKf3oUcYQLcGz9UKoWPhPhm5GKjDAeYnxQAU",
  "key34": "4SyGCqWNt4i1WNhimD3yJxULfEoXYsdFZpY7GdarDDY3Syx5KYegmZUb7k1CqWv4jaw8WzvbP9jJvUAfuEtETsqk",
  "key35": "5XYkc93EtJA1ds9CwyjqDZtcJ351gMNMuNjQQKys84NQMYC3waY9skwiUKUK6uiAHC56YUSiSixNmQuRLFpGeY1H",
  "key36": "4yqJHu7txcSgtzkPNAHvj2SyG8BmDY8aZwYYEww6ocdJXgR3yUtq6fPANFo8GhiEtTW3pqndXYq2zZ6BkukBM9rN",
  "key37": "2Bj85orsBTrDs5ge6d3SqSrRHSAyRBdn42iZUEWZ19c1miTAr3SqBjzvnh3GddUshSBChHfrZDwcjyLZjqX2q6ww",
  "key38": "5y4C4MbPPmPVCPiup1TBVBhLghMoFWt2RvwTi8bf5yE5rZeYuLFWzaqmiP4PXPMRLZfPbQdgmvRZfiDeRvkza59",
  "key39": "65pYW26Wcfuf1xS7sL4JbWeTB6GpXyNGpqF9tEMcNG77LWD5DtCQkL9T9aGSCyg21XLbiybsQUruu8sGj8VWKf4K",
  "key40": "5axcH5Si9PU6RbeZtameH3PmQpZHhahNUjuw8djgWfixDkJZE9eccftfWQFnhqZdG3nMYTDYhdYikbnth5TmZjWr",
  "key41": "5tHYagYcgZ5GXNr82FibX6r1HcCKCRNwhbF4VyWnFttgW4ESxkDJxP8oddvdT1TCGnGYeEJuK6Bg1hS16WzvkFHK"
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
