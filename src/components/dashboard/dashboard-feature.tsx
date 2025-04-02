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
    "3xCtH32BfTmx8apPXiA9AfZpgpDek8GKXCwHAh5YqjBASduDitCY5ZaJHLeXVGyVRxbcxHRiuqyRvuruGbZw8VW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PPmPz1m4MUm3gd1PdZLCK1HwMrnCTb7mEyt4CTzbtcVu6Fnj8jXCRPfZ1K8yFd96irHNppUfZrwdD2bnowaXQ6s",
  "key1": "2suxEk5zcjtFmhBVU7bDsTgNUSeUNvfrchSfcC6z1ecqGL7tLLMtHW71hMAjo5ByYngp5NGMzmZJ6CZaf4ShrG8",
  "key2": "vEJG95jdbgVQVQnxnM1EonELLhXpNDPHaq8WJo2WP3jEAj1Gn3nmfVQeCW87AEsgBJQXC8v68h1JC8eWGfeTPKS",
  "key3": "3vNUzZgYMKkdigDyAgNqVK84tjpfCNVJDkYEVtUoKtMFjNVh2ABLzftKibNyEY7aU7koAJqG4pwNPkZtTH4pqWBP",
  "key4": "3d6i8hXen23UsxntyjDwi1YkB6iZtTLgWQFrNQ9WjLkaavP9Ub866zq4xZqxSYi67z9hxTcdbKw6AzKTiZHC5urB",
  "key5": "3vDTGzFH7BsYtbFaDENWSddgjV9ten2CKGnvd2TRi2AcVnNEPJnvd1NbfGXu73Lf98pmn5oiCatfq2UUkZ9VE6B3",
  "key6": "273JBgHMXHqABtpU4XhRQkLvSdbicftQn3weMBVbppSxmPe5mX2TsGcU4qK8tKEZdw69fQxkF6KFkd2RT6NV8HUw",
  "key7": "21ceU5c7XCjDHwVRpUJbHA1b9RcpCoN6yemu73BEaUk2SCS32W2KWY9JqcZ5rUDcSpz6Ba1LvMWNgLkbAsdBVdg3",
  "key8": "4dduN7fNVxwCQCCNsPUiGpUYjoC3dTdmy8c6h68AdWuBhyA2RN1oowb1gTaaZUZBhuTg8f3xyA2vGKK5Qw8yWwyC",
  "key9": "5ogoQcZtP36i61kbBCsNc8nKtdhRXR7ZKMaAPN1DL8vUFEdAnQcVRXjDF13KTTG28j3n2hS6ehsQFU3bpNvfn5iY",
  "key10": "2qJZb3vRJQ2RqpdqgCT4JsKndYZkgA6X5SyxvMUGaefeyPHZtLKqxYj7mMMuGuNXzx271GgUKMvH6wh8GzDkYBLU",
  "key11": "TMioZkCX1G6UN6RJhVqTKVkaZfzW58LcNUoy8HMZzDEdrKwiwNGmEbgnX7kRzz7bC2YRFQ5assHtf897J72brY5",
  "key12": "5AAnHnvhBbGcNViyQJp9ewrZxRYHi4fhSCvjAnhoa7zN3HXHzS2PWAJtjxX1zCAiDLSpotxyrLea9wcwUz1CjPVk",
  "key13": "6449nZkmtq3EDptuLkpAp8aK435C4azVDyFh88SYFvaZaD2MeC7VUcXcjXZS9Vrx8yUK1Ac5R3ZRVhHfnhvaidV4",
  "key14": "38V2pf4VZ7KFJ1TBPkAuBMKyZsyKxtPXvPVVEprngfAnVTufRoTEiYtGZ1ToHmZtuZPKVwyfCBpwEvqeBKwvaV3B",
  "key15": "4sBHfirvatB3ogYQjqJDrw2AWmmV1PWSSRGRSCA27czcWifzhVbnmEWyqC1u2FRtGGfWMUACzSJiDYQ3A9bz3xGN",
  "key16": "66rM4T7fZwQVRXgPhUtcJXp78SZNRRqyhD6n1q8JKfKUrZLqWdGxwYuQb6vPgDEmwGaM899FwPQJhbkqvm3wBYNy",
  "key17": "2xV4qSeygtzhBffZWvv6yY5JqEdcKLN2B4buZWEsDy2hqt7Z3LVVdwbKe36ss9Yfoee8spKzvoyWVY12vndsZkPA",
  "key18": "4KvyxdhZRuexiNziX7HJ2V92T5XDfWGk3CCgtKaHfjeJK7MR25FrdtZX6MLz3ssUERQXMoSU2gojDiYDQyiXVkR2",
  "key19": "oV2YZAvNVgZ8q6z1qau1YQBttPsSsF9XXFbPxjPu8ahKFLbALLSxVtTpUz2srzT3sPhrnUeT47EDeJMrjaN9N2F",
  "key20": "2aiVGgZJ7dNPvqcjGkRiQZ8zE91neFasR1Y3XxDZTPC7Wn2WMD5nDsNNpmm2J2z3pyDG5HvdYniNXC1KoTcRfXaG",
  "key21": "2C54DU34e2XDumDuRCGm1tucMgrCBpr5xS8DnTnZCzEW9CbZzRFqRigCGCzSqcmnzucSmTY8Lj4a3vq61Kb4DhD5",
  "key22": "4prbYw4ukqzricfoeusqdJF2HSRpC7myeF8mCFW6sbtEpY3NdGZBXStDfEMd3K339KNUk7fdZ9nrGuyACfJg4Z56",
  "key23": "2YtfxYR7VtLahkrw8G7MQeiYfkttuLRz2ocDcHd2HVTS9uvQSHbBECSUX2uMGJny429r95ogXKZcx7DYY4XNMKtj",
  "key24": "zfwghgAui3jNrcNmGXUHJha8WFb9NS7i7pGAKNB3zyAqaaPQUEQHNwUNbhdVZWcWoQfSEtSeyX7yZnJyiKaaUMP",
  "key25": "rtGhg6RUXpmQXjCfUvGWRgUtZJG2aJ1QVFiMHSYQ1NkY6JyKNu3ypRs2wwaXF9xoh6kZ4vMCokLkLpgRLAX4WsY",
  "key26": "5nZQNVoCHzEvkg35LwQJLv1zYiYkhtR6vZqbGgo9PVhbMLRG6h8ZEZGK8c1tucA5Ym2JkxQsGYBeSNceprpZwcWB",
  "key27": "2aW3NfJysZ4RpXaGauND15vGVwQUXj2sPCvT61rDDiueHCJTHSrrfuwUPAT2crobhqtbWDhmF85kzYQ9wCU6f466",
  "key28": "yJ5iJgYhAGVSsXzXr8rcxwGor75hUUtRRJUMUsVngyMBv37q97R2egcwxFJgXCdh6eAXcTF2dYcahAFpC85vnio",
  "key29": "2M34j7cbrQwqEFzMh5Tdie3A52Zf4U13H7nv9FiwTFYQj5DDxsm4TPBivqf1TAbDywSihUjofbkdi12toqQDwDVL",
  "key30": "XsC16mFomwXBvfSt96sDUUJmmP4hE5sDhCFE2BEjrLr2pqDjUfqymu5QYXKNwVRuuzX79yPj9Em5hoHNjR5JWG8",
  "key31": "45w2h2BAAWZ2kudCw6tPvqnWVrEn5obnNBrQHBuGi6mhzxPw3PotE7ou1tiw8MDvfkakuLPMZZH4TcuRYg6CDs3w",
  "key32": "53a57Uotnc3Ueg17V5CSVgZvGbxHdoum4VmSbaVRX5ekcAn2P8P8SwKWk3NPvwmTqUjgc7KNtEVEuZnwYgr3rLW1",
  "key33": "4HP8YvUTVKeCZZckRVsej1GPiRjVNwQspiTKzBM2rr45ZYgbazYdBw6MLcKhFs3g5QQ77mQnZ7f34XLeJwQu48sL",
  "key34": "61Sh2fvSQWDaDvN56Q32VwyNowUbRwe13ZDuAeMKQ5x97x7xkmtVEXvnvgkXy2uvxGwWsxctTs36U3Y3ydCL2dSD",
  "key35": "5XuC8E57ntvnxEDNzeYyJL31CGMnJyMCn8qymhkB8eT34jZR1uAYnc57a3nWSr95z3gCGiFHRDNqZx898eghv1Z7",
  "key36": "nJu8txTaoYW2K4cQeZf1vDtjpdKfQsVAWaS7jjmzFnHNNGo7peBpy6Fdxns3tW9siqh3JR6PucAfySwCajUMNbL",
  "key37": "5EjQ43UeNzstDAHHPHQLgKfJQdBjmdb5ZjTpKhSoZSiSA86FBhLnGQwfUucSbjncoggd73tZTcKmkFJRQWHr4spA",
  "key38": "4eAFtezMnrpMoFBjnx5RdGYm6wWQHoSB6y8AoSUVRK9NeLJCyFPA32NqTYg31C5XVvjMFag7Hk5tCi3cYMUkp86t",
  "key39": "4wVUN8RGjSNjhtu1nDKstkrFdz4x9KXwTLo9gmyj3uJJcqq3G5YMqhQcmRDJutRkibBjZzkuWbrTkuiHLrZDv5T7",
  "key40": "4VzVyKNwt1nxQN8K5iAezsQDjbpNDffqYf6eeQwB38vzbwVmSsy5xDsFX9a3NSbiaAUZdcqm2MNLqwfcjoafoVKh",
  "key41": "xkB4ikKuhZWsqts7qjLNS4LQGBHTbSze9QAbUSTDTYhYU9mUDGBF2rp2Yv7AaEZff9ysrEKuGjTXtSE18ZmdGSs",
  "key42": "4UciTro7CYwGK5AUns91Q4EMELhzW5w7j29StXVuVKaYhuzftxKWQ9ToEN3nY4mrXhWWWYso1bGtYoVxB6ydkS3Z"
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
