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
    "5dtifGZu1EUb81B95KP8hcK3CGFcfcmicKqCDFJHRLoyUDmxUMTnx5h9LttHycANG21YRZYDAjMK2ZJ5g3rRHLjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TRrXxaGBMBWR1PgZPMFYJ3sotHJ8f74msE44nDZNnLwGDTvWi3qSkADwV4L55SgpfrsYeQvzTqDbuqLfrmPtVD5",
  "key1": "54ZGnqm81c1gMAui5Z16eAt2JES9w54dW4RNvr95Xic4E6MiNaszrPD4kZjn29WkV1WDykXTdKGPttGi3ZSno9qv",
  "key2": "3x3ZjJCmGwe3rNYaMwToXMJATpP12x7wjgF7iqj67pkBFaeGQNjxhjBGQcx4k14QTpxAw64uPjtx1BzTbcQRd9qA",
  "key3": "XCrM99ASYyV5jXccha1Lu4PcXPnyerpWkqopTaddGDfc9a7q4wx8w4A7exP4rr1M3LVSJhCemASN6Mx9ARRMLu7",
  "key4": "oiPfwPDaFjBXeM4xPxLz6a4KLo6pqq7yq6UggUZ2KB46xti1puncJBaPSgMSBwaYPTTf1C4u8wLawVv4PQvBZRa",
  "key5": "5Z1AG3CCgx88GoK9CzBPJedNpuD38XLph2Wo6aMHvBLfBUnkxKLGneY7Pd2g5HhmhafJqiXLqZnrDFrMs4oTS6bV",
  "key6": "4RSFxCqbUX2Bwbvz91PcKZvHcCX4dhUrmdSNz7a6VAAHfAjH2zzYq1wxiWu9WWQkCRXf9UYt1tYm7AugapvdXUiz",
  "key7": "kwZKbJr27tqCY6obBpWFw9V8xUKxEPMfndhogNaoHuf8cCybHyjQPnfXfUsSSAHj27kdTZp7h97aj1iYqL42XrP",
  "key8": "hkiubTL1W1P9pubS1nGxTm6kq4ZqtW8i8G6YwHD1r2Lcf32obfkT6XyW7hog3ybCYUaCeGXam7ExtKfo4p3uaFM",
  "key9": "45GTqBa9s2QkZMMHSDGqh59zWxyLJAjKtnnvxAdobk6auqrtGm97qHt3KyRxt7HbezknQiFphzPy2vGbpgEmJMDu",
  "key10": "3AS2xU7XrSPfST5CdGsEzgcHN3YCFWvUi1Gy5jXEJMhL1kotaJjK6yUAMGT9kKscmL2aXjvpGdRYHA4qG3riExC6",
  "key11": "3wgL3StR3iYYVTKhDksYr1gAUxguayHffH9Z8A9P8p6AJk82uKSYwJ5utyHcyozTNWtEkZxJZ2ynPMm5FUCT2Gxx",
  "key12": "iWTHMqSVhxfB1m5AyzYRTpEfCmUt8HLuiTwayWii1NUhNS5W1YurA81uNo9t9JTPQ8RXDADDWrhwg9ESXBTAze7",
  "key13": "4cXVC2J32RugfpBHoBKVuq7CfQ3h6GBGNXvmUoZi6BsvTcCxAtvudrPnAXLg3MomVuxk64KBMyFegfEeGEj6FjuK",
  "key14": "5sJVMsp3oLwH7SFyPck3FdpZri4nZh5oTVGtmyFA5E3aJ8a4MnKY8j6U5BWWpmudpno5k4V1PwUhEuD8nCiEPJuz",
  "key15": "urK2pkWBCuYViZ4RGijvxgZi559i9nARH9DMSYVVsjfnYu81rs3PJnCjHeNDnhkkhad2TSSNMK9Z1eURMs3cC6b",
  "key16": "3vni2nLvyY9Qw2Tpv4aU6g1Fyd3cch7rBppV7MYvPakuPusD9cms6dqAsDPPHhpHuAANF5pTpdrz2XtaeD9EZK8",
  "key17": "zUZzkSdD7vthR62vDCoTZnSssjz89yYRQbSVEz499sFzU5WFbr955UpjVtiWtqzNx2rM68m5W1x94pkFqvXxRLS",
  "key18": "txMpDYqicLHD65tCjzccZ8iy1ET6E97im6NQzDe1wWDWZTypEQpFKPZrgMVYf98a5UhrypUgm8fonz5j3Vg5uTM",
  "key19": "42Z3Wn87pqdP7tZ3w4PUU3dginjaoWwpB3z4PTCHWFeEngjHajEUgmwn8kfFbgfWP4RnWpQsyJBMbcpJAb7ZSPH",
  "key20": "1hcpbQZcfRn8ULE7NEVt9GPLf1PoB6mBUXhUDT3UkvbNhsSHZK3gdCfuVNuv1WzgGfYMNZ5yMviTuN61gLkm6bm",
  "key21": "tJxh8BdX27j147UGaivaqrrLnrYBj5uhsqtdK5mmJhEB9xQHw5Ja9L6pFGBg4rUF87bUvA1NSzzZsksc4v2G2kD",
  "key22": "fV9ryqdFC8zF9WE42eeUejpBycdSFP47NU3A5HENHA7kdEQ7Cov4F36WjaLcsaRr4SuHZEEUNJb4mrXGvTQt2nb",
  "key23": "cj8E6YeyMKVYq5K5JU5cK2GyaMYY3DimjsMNzfCoAdTMVFUtBqXHBgZRL3kkVRec9fWQfwihjtjrk4uXZ82NKWx",
  "key24": "5DEGN7rG3fPRazA4xDU34Ee21rSdAzFw2ZrJVgv1JXnsnGAqAXt4eyGWn9FbWW5kNWa4SgrCHuTsrWPLZeLygzkJ",
  "key25": "48Wj9iahdjy7Cas3NA9YFhpVAPo4N2ix9rgyA79LtkpNt1umji2Hw8p1XkB1CrxhfT9LDrPBsqSa8b8n9M87UfLE",
  "key26": "eyYzfxLLQNZVD1cUjZXiihnHoKSLs9Viu9tJPBVaaZANBaMkE8HggJuZZhqH7qhaHfVpTzxnPUgRwq1yRdCdK9G",
  "key27": "uGYV12aM6TwSggUvji5AzoRr6KSJxvj2PnprKVBruYW19TCHVW4ixuKiMF4dhKNPCarGCARQVDneW714HjAUkN9",
  "key28": "18kCE6KcfxLRGDUmQ4dh8BQLfydv1qcWd5tNXcuLiqUKjJCmN7oEFpeBordhrWSoypwShVPt6ragrdBxP4Jh5W4",
  "key29": "4ksRkkoijJwCDsWc2aN6LsfUcPrwFwkM7JH5iTZgUPHhzHDSuejGDk7ZcopV3ub3V2EeLwqZdCGArmhoSath5Y5H",
  "key30": "WSoaFGiviysu2vaEag2gWK21Vth616E9BjRvY4GyF2uirXMXkZiRWabMpmmBzk396HQVWuqmABy5wjnhsji482z"
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
