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
    "2f5w1VH66vBPdFaRv4EDuYyHz74YFdS1amoutBZ5WRakuA9wSLfrcmo1MRyT2creMi9Xb7cm7jmbcKssHYBeFbB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gHhXHw4HtMzjMDSThFV1RRwYVDTcTShMFm53udrZqwGxPZLdrBpio1NnhFQ8KzX65DZB1BByRTQd1jaj4nEA2qp",
  "key1": "4pen2P8Foo9Fw6ef5mjdgskfbTYbgimQTPmaQagxnTiXo9Y3LFTaRpoP4AjhxiAWQXJacHLaVnYREcQQkeQYMXqM",
  "key2": "4JKHnuBzWi1FmpLJoK6uVW9pM1HVP7b6sZv7SCk7yGgkdkyT7AAYFbbxNEZDKzGz3RX6Z6qwKE6uEMZapxq7K3GW",
  "key3": "3UzaUikva3t1vfuWjaVsvkNBxYfVk94nbuXSxm68kkrPvgBbR1xv15N6jVKUhNH1GKoeHWo86869hearnxEE9KGY",
  "key4": "4qBgpr7xDsaar3cDCyz9ARw3VRGzCvNMGSxmGqbkWzC1e1rfEmhDBq9WkgZeKbsFgd4kjc9Ddx8j2sXeLXRGQB62",
  "key5": "3Grk5mr5ejBuzeuxUXfd6fL92ubiAgoH4hiqhoRWwNtcanGx9kGjhvnnSdAwUDMub19JHachcUiR7bWcoyh5pJpt",
  "key6": "5XtnhbHWzN2dDeox113VqjDBo8vkc28vTRTfVpRRHcp7LcB4LxXxoquPPCSLjNcDcpW45YeVCCaWfm9LnDBBGP9w",
  "key7": "27xteJFaXaAt9WmdqoxvnX79Y8A5sxxuQrv6sgVr3C1kKy3YJNzN6BoDb6NfFXht2x6zxKNgHQTKmgbneZe38QSc",
  "key8": "3wzfmuU7s5ixdtHErGqkBrELJRtgw4CFCGgCpXd29WZ4nrE4G1xcvXS9HDU2tRoSX6BXNiunQDbDbUgkbtA1fkW9",
  "key9": "4pNokuLJSNEiZjYot7yNHemASTv7Rpm1N88qfbGixKuj8VrEaWfz2zTmxXe56PAGHwofq2w4Zk2ZCZDqj2SM6wf8",
  "key10": "2DTm6Pn19BGcKp7csEGuVzNDPEpJX38Zrp9zZtev7EesvAAdJfZvW4YW7xASFv2jV4jQ5TDae7nhmMYGM4XqHVSn",
  "key11": "S5KfgK1wutGnU2WQ19nE1MnXpCkCSCMfpjqaraMJHtwadhGg3rptAJii69tufbdYYYaD2wpAes2eg6ueiWd5Lx2",
  "key12": "3LZEWgLChXmg5M5B93uL5La2GDvGzsRBgBaH3en4F8Dsno3rPXQZnHbpGvgSmsrMhn3WtFBTC2FaFy8abs2UdPpz",
  "key13": "56MMRGwJagRcxFPmKzg2tSoKZ9oG1sn2HpbuEQQbedjGafC1HDjeMvZErLLAeTmsL9PRSM7HbewBGQs6vREhXsgp",
  "key14": "3dmKe6SYai1SAkBh6iGviEdDJFn3MtrRXiqXBsq4nj3eaohiD2eEhuEnQk1F1fuAwtJeXFW8ARnoYympHQJWnpG4",
  "key15": "3xF4BcXVYZRHXxmSbb2GcXH5mvT9QY5QK2S4nvrYnXALA6DMZriTU88RVHMJxNvnikjFqWYMdxyVKhgSnJYoUn22",
  "key16": "zeJGpyqAmYuNTT9ASPWg7RDmq4PNgaQVf1SuqNQ2iDD2LhjLxErd8dPUTPMVAyzP12QYyxzgW7N1FtNq8B8ifNa",
  "key17": "42BcVEVMV8sG1Tj7dos8G6JaZ8AhFeg4BZVikiJeGJuqqzAD2z7QqJ4aNoNvtwfUdUj7k6ahY1sFm7kyxPenPsDr",
  "key18": "2GKWpmy7a2UJEJPbAPMmXjnjdsYpUpXmEsjuQo8wH6GgH3X4Ccz2cRqwBRV6DUWVCn7ZTEA7esEHGztGvqZ4sx3L",
  "key19": "2jv4eMohsgTT7Nzaj51r1eWaF3LzctUgn2My25aieyD4Y9tVAGT9YadM5DtKQYuys4iKAGjcYJWtvKCX831mdpcS",
  "key20": "4E2d8gE1qNDKnohSdtoeFcih6VqGtPti9NiqDwcQ5ueJPkcDhKHgXUzaKdQewemvYeEjuLxTSsG8HNmiCDYHQmCB",
  "key21": "2SxHHDjxhBsCNoGApPBCQcAopAeCFva91V7Kpr68iVH5ezb6G2FQp6yyMg1DCfMY8JoAJFQ9Z8NYCA4Dc1pc9BrK",
  "key22": "3YrYiWCqaMBDQZdoxTqCY9biihN4qhi67V69FipdJJGDdewiNYda8VFTDXeX9UyMp6mUcpNsKgvJc2HGCg2Hbnqr",
  "key23": "29wHSQur98AfVFYHU3mzuJjd5UtL1C8skgSUHv5kkY29wdL8vkfMx5wLp3z4yfkyBFpAebEB8zyb8diogazQcLpG",
  "key24": "2UX2Z9cBWoa7EJBKR2tRQNinsxSUquf9VE5aC76zik34MNFFY9kMqkLfXJNfeGEEBMf6GZK2eELtKrhuhixMtFbN",
  "key25": "3YXixH4z345iCayeB7D1xgdUzkejo5DjnfQS4Hz2ig741V22unXyw4SttADP9iHFTgZ4EQvQR4gEgedgeVeXdv8r",
  "key26": "2j8sLyjCuQ3gz7NFxiuFk8xhwiNe3CLA5QvE4CF91ZjMV1X5fEPE4wpAAZRqmmxVnmofp6V55S314jYJutAUsuVg",
  "key27": "32Btk3nfDzvamQ788nntQjPXAMg87k3mmtBKdkfQwXMj6K21Pq58hyMgK9LqLLAC69horgzCPTfk1ieBGJdCNeK7",
  "key28": "5uVAWZbfDkPxq9mWxK12iJnPLhYEoWvgqWZrdm2VegmfKmdwiRL2kNFe6jnbTk2y4Pri5xrxTyrCQhpSxj8m9HLT",
  "key29": "5csSGuF59VA88dE85KPwhFfKnHbNn12cVWraSnFEaLp1uBctPBGAiFbUmNwViQmMTmeJVJhYS1hX4oURD8tH2tQV",
  "key30": "5gGW5DiqwrkV4kQ8H7NKguad8fQArqKKqW99Aokb8ShLB8ozSXB2hwmB7Qup9d3gPLuW76sRYdyyh5KBEDjtYUKa",
  "key31": "3DEmSWmARKfMzvJaMwveyjShugVqyd8P8VkMokhGmtDyQ6M2UWLgskH74e14R88M1SN8J72VvhEL4zRFvWASez4c"
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
