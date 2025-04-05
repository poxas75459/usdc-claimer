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
    "516kp35y12YLkFvR16tmzqUaZWxKEKCYWnYXYKy4bnJQFZaYsZh36DbFneUTAd3Uq6pDwYF7PSpSWw2H8vaquXjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YZxsB6V5Lqn1PQvHJM7RTodVBfPtwjchubQntazcpChgLFfSZ67jJVr6PHDdFVqodvnABr9RX9KUYNeJYdqjS23",
  "key1": "2d3DkUSsewCuE4gEkXC73rHPiBSTEqR9z6WpbgKCoY1ttQRQawaoHtvuGykYRWWF8iaNZ9DNewNhk57nFBgGntR9",
  "key2": "4AKTSgFbhUZKTXBq9HhEjH2u5SfNVL5Vm38AyBDrUFir2Wccw4aJCDNVE8rULoWVpkoJMsgVbRyGcVmY5zzhKCQF",
  "key3": "3mFBd2kJV1ERFFZYqkxBgnXmKVCjZrdPcz1KCbibGjEFhBKVW9Frwjeq4kwEUfcGhNy5jZqfcG5Hyp96eYEXPvGA",
  "key4": "4zss7ozDbpsjbdvCkbm9BgVjjT7aZBhNMYaqBwAutKeEGeQMjL28dTS79vinCxJnzeRmVaSVWjoukdVcZyy8ULgu",
  "key5": "5cXpEVJAY6e89g7RT1XxsD3fmmpQ7tSa7CBbZzM8rWGEnvZ7jeyk8HupusHRK4uBKEgyCvtD65kTBFuYJhkdAJu9",
  "key6": "4eJFi8v7DpNkPZs9GUimRYvj7VMgzeWWMhpzW6NkQvDk3FuDRQgX2gyA36MkLCdLbG44ms2L7YBmBMQ5nxgFujVC",
  "key7": "4w7vxiz8kAgyMQw1VT7F7ahBzRfh4Q7nN6sLrd47xfG6byFgyzjfCw9n4hPDMHfYhAp1K2DCwtqcvmSYL7UhQ1rJ",
  "key8": "2U1Wgnx8LP6aHnWEaJ4iW6x6GksuZqGsz4PEPAF51Jbo5jHdvCDHwckYTyXwznc8Sb2QW5fHgvFrh5C6ZSkpBRD6",
  "key9": "5FawEEjSyEDCkwXrNfX6QUBhNQJMR5sEd5icR6UZ7Niogv3S6G82H965rsThxpmuzGctAjyMr2TzQzcBte4B1jQB",
  "key10": "5hDC1syCCpYANjL3kEF7DaP4owF3qEffUSc1uFf8pTSeeZquMX3DmVnf3GuNpXyTJPhQM84fEtxC8MHhgBtAB3ZY",
  "key11": "5KCx9A7zBvpasXc3SAWBG9WUWuSNnZvJQy12w1w6HMKwkhNRhB5589aFgHryf7W4wtupaoZ4ESHPFyj1vZLjDP99",
  "key12": "5JUWYhVQDwQRzVBJYSzyVrNCnARV4eCnBZUMmNFMz6gzoBCY4erZgUntUSjF8KPGMfmxAWqjHFNpzR2kmzbqvLGj",
  "key13": "4h48yh9qRrxfoGYrJjmDgRdD6P6jGea2hbV6BAsY31vX6GimFHZ6GNp471mnHagF9x1yojjigzJm19LPpBEbd8zW",
  "key14": "3ydM3gcWqoSqi53Mr7EtDR8JKDmk37Wiak74N3Rpaoajz28UoCRckz1rvpt8pDvAwUdxWrfkmKkFCxbvTikbE7tA",
  "key15": "4YgJUpXkTuHEzm91uevrWL9udN4Zs11E4yw3WeyYqbjQuHBgYdCGM5WdpMzvgGQ4YZ7LYTDoh7yppgFJLvcJupxZ",
  "key16": "edjcQ3z7usQMvLFzeUmThTrt6NrFzLEmDu7XFYavVDdtDAqXTyr9A6asNB88HZdD9EiCQ1Vv7vnoH3psSRsJx5G",
  "key17": "56hvZXsRwoZFR5KWGNw6Ya8bxRzEwrPaEyaN6sz6jLGSQRUp1zdmdk3k2y2Aocy829M5sHiHPnf67yGGKZqPX8vB",
  "key18": "5UR89HM2ZYoQiffmo3Ey6faQhWYBm2Pkb5ZYjRM1UuAb8zR9i4t7V81cazAHiNYdZJxQps2tr4TW8c9qgEiTnRBA",
  "key19": "3mgsBsHry5hZwbbF2PqMKes5a9fT8stULUcCJ82uwiA7DuUGnGfvhXHnnnuRPTGeZhjU1wQ3pLW8M2mjjj3ecGYv",
  "key20": "2BJjENP97pzU8V91MPa147dpQW2FRcs7DMNuUYnYf5w8nJy4Zq2oRsT4UoC9CYnkLzPcfcGTsb3EFVZ5C8fXRPym",
  "key21": "2fSHNqmobKZvH8oB4eR8a54374ZXnYozzsGdVJc3EBjgVY5oCar9T6hjCZkbvf5UYVqpNJNRaZLarYiysjQe5GYr",
  "key22": "HnuaxNmLughqdfDCd5zU7VCSktgTCFqrhgai5zXspjhNt3tASk4Ah5QDRSdTeuTfT7xzPSYLBfWQaFQ8R5NS6CF",
  "key23": "2N3RY19dVGSd6RVhcmzWTvz3uUs7yjnZsmdXsJrFHppXZyMB5VEoV6Hn9G6Hp94oWyypqGCBUYDrbP2wzQJuztKv",
  "key24": "4wYrSVSJMn4C6cRmCP3JwEp3DYg8rrdxmwkWsyS69m4NvmeGZ8JwmBy1TYney7ik1uB7TgesNjwmHUhezTHhxSCx",
  "key25": "2NP7D7Fq6JktgmV43kW1S4uBdM4y7qwYzFdPxPjpGDDsMJPV2aDGvEteMkgPc9mUBcV87NuLHR2oSo29f1KbBEZe"
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
