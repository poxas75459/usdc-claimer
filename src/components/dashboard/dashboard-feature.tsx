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
    "377WpWkEQfu9sJ29xu3p2W6fJXcvUwD6ZkeBqX5pjrDyzUxEn2JS54qkrRhQ4yBXYcnXLTE3QNxFJxrATjCNMQMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2En7FqJ6JnM2zhWrosEKEEjwbixgbqiLZS1YiT7H2Qhdz7pf1r6jVsnQihKyxd5navYZ5jx4U3TvA1TpmiccatBS",
  "key1": "2rYxtHJKobYBDNgwMCh88NpW54jnRwu7RwHgP3tBdphYWVtfryDJX96mGEdrUeSZazzHfGrgdianFBpxLMe8yniP",
  "key2": "3ssCFjsUjgTLhgPzYo5XeGUWVt3tPr2ShCZrMUQczVyWKPo1358wRL3SCdVS5VnQFwrsQSVY1icU6S7ckvkFyEyE",
  "key3": "KYLoQbPp9n2skNmM4kb6S2G4s3uF4JhSitn22ffWLeSSnLNNHxbgzC9mG6mnUo8oxNwSoVAUFm3naqK5nHBfHCi",
  "key4": "2Hdeq9wqr7pESYAAhi6G8PD2Fmz5Vcd5rjBFF79MxdcgAZXoMUyZwxq7S1NXAmWhWz2N7Q8vfJY97J7WwPHXXg4m",
  "key5": "4MPAfd85MnvBrDN1JnJU9C75tb62Kk47QU7waueypV9ExZSardAkrcXfWN4NqReCJknQeYc9EKAyccKr7QUmFccD",
  "key6": "3tmMqL16kGSj4uG1bPmPgrFNfSCXfC1H9opisqvB8Vo2s2KkQDjuL1FaDUufyRYovqT4iQVLuwrXyER7r5mBx843",
  "key7": "2ji7wYvj99jEtwRqnidH6mVV8YcRoBUU3fNHC9XL72NCSkmCsLBJte1wbEJ1zW64uFRgQKWjgLSREDMLyE5qry3n",
  "key8": "33G4PRE2rg1FFbtPmBZ9a8xjwBD2zYBw8BLFbDmwLY8sCCBdEwcW2LNGXXDsmhBrSNKpHKnjyWeiqFNjDy24PjaB",
  "key9": "4Z1RRj9GtUXigZUPNhn4CQEtfzqdg54165nEsAQExmEaLrcyghjS1HHM8aWuSyAZD5poqwgT3HRVHEEpjfntBiWR",
  "key10": "3VcFtKKKHaTfrBCXr73ahzFZJommRH5Rrgqw4BQMLkaxiKMqekcVurrnNPoPmXyaKBBWXZc5cqoHohWF82mvTJTe",
  "key11": "56Jy87b8kzKMXhvoJZX7be62vDPstzrznT3XngA1ez5RE12nw37hwCbfUyZKww9XaKowXbA6bcPfxhqoQgSwwXna",
  "key12": "5dercdGD6v3JZsLrJEDPQynNnyRCqUik1ZQcKo1a1b4799X24SyFHMMaFFVQqoXg8UDGXGeAU37vh2GGU2HPHLYx",
  "key13": "35rBbak33aDiKngvaoBMHt7Bmqx2vCxtc6qjEnSZFJr7o9tWkKmT4Pt9LU1xJkEy591QLDTYuVsMwsreCKLCqVd7",
  "key14": "4rdwNP7DXZRzf6h7zhydxNLDrDRg6Eky3iU4AoBWrCP2dSNaUDtQaJLq9TJJB48XJ4az5DkfCi2tLmseJRC6BYWr",
  "key15": "5Zg6m9L4xdxwWrR2JUSHNJCkss4dLjGuQ162x2hW9c1AdNX8kV7g7VYaxhYgLL3u5VzQxJCDMPN25Fg3XCGeGtpo",
  "key16": "4uAZiPrPe79njZPCgezyNBedBy4mJPkLYSSU8wkLmdym7C8kMfgk893TPCDvx54kV5QMdNiR2hzFojnLsZPgSPNH",
  "key17": "XjmkuceCvc9Uhr4TLu51iz4PPgscjZZDQjwDQuHDNQthmePesEBgHZ1ZYLVt4mX3SjUVVuAidoaZZuX7fNJTtjP",
  "key18": "4K8GRmxxRpN6etb75Jmoorf89oAMCDfCYFMTfG6ubP7YDP21yfmWVj9tLJzvC7ygkof8McGTNPt2LWQnaLXCjH6n",
  "key19": "4BiejZ2dRhSe52eHrCXEwN4ZLZYTCExsivnRyACJTCih8nEHhWEcR32NoT9A22meq9AE2mW8JFX6nWJPKMQCzUZm",
  "key20": "25GkzKbBZ8pmX5X1hDan8jiowHKEV1mEYGcgUkbF4FrqNBoc7PrJxv8bBxpz4736X9NZ9EebQbta65TvMsB71Nzt",
  "key21": "c6rvcgpY46kRx5XnyBSM4W3KQ1a8eKEtDfyzzJyQCMYGps2eMkp6GXdp5kvHrvHRB4YNvKnwhUandpcbydjMuVp",
  "key22": "Mseka9Y16ZbBHq4DYDCxsYYAEBe8KurUsjMHi1u7RqFV2BPPG3szj9B7We1dzw9WsLbxELXyQooD5CRQW8jq27L",
  "key23": "234ktQ4U1jXq8ZM325orykbMSEJSHTvz7WpFTskyfJdzPmVVYTBdn2rnBCMoTE5imVQpzhq9ATKMedFrYx2xH2Nr",
  "key24": "4SsMaJ2mppYABSpSFGpv4BGsexro12N8SgyKTztidwwow4g61niCJ1f4opPfnUYwG69xbjXkVJCbjdnJibZ86EvW",
  "key25": "gXiC3N6ukktmWkh7ektspoEkYtc2tiypFZkgmqHczAPquX478oKKBgo9cGtJd3Kbhb9wcmm8J61d2EVX4JtAXfW",
  "key26": "28GVPKageR2Cd8ATFUooFNzo7nmnWkevwyXQpcQjWo4s8Vtm7voKMd7HCKtrcr65NPQg2FkZDXH4Sxmd8WZaHq8T",
  "key27": "uNYbcru2TZNwmKSsFQwjc9pbk6o56y8oDrafjDMzNJpnrEHtURNcUdSjYM6979AsNpwLNEtrPTgWjS6WpQkT5eg",
  "key28": "3Ftg1hwmmfkButxRmdpZuZJGdgXcK2jcvWVCWAyx41gHzh8VYKSVfXhC4scH4qNzDcrMjFfGxP9AyH5abmHpKMSS",
  "key29": "52NUc39UY2MwFUYKSqrAdZGFBzPTNBbF4wLxm4EmSshtnjMaHpXGJoBe9sfGQeyehvLvKyeFqrRDRVkRqHf5iyMG",
  "key30": "2SN1hc17XZQPCpNGgjSkW4CjPdC64iHAsgmM85nWrYcHbaqLwjVuJmE3nPQAZNrzgWSm6Pw1EHrinDVfUzib6gFt",
  "key31": "3HwbTpAi4tjKUTrjERuvYNnPrQK5VJjN1CtfY1Z6VDQLJRMoPs8V2ssCQEuWd5CkZpbTs91sRgab5Bxoo1DPHaFn",
  "key32": "5ESRvVLSSm2RoTic7DzhprebGL6UGjks4awG4ZazbRSNLbS9MvYT1XWRtsXCNcaicgXFpMduwcuW9SrrbMKqUapV",
  "key33": "sThRXzPVwqRQxXLznmy8kJLU8mJ9E3i1vTdB1gE99XdUk1kj6eCaHDgoSyGWk59wuPJFtMsEhLMfEhCY1JqHNpX",
  "key34": "5uKGLyYUZH9gYKVdgVFnkx6cpm54hhk42JT67MjY9q5ZifSFTRDPjtiPRVNRe9LneSBMykVKXbtN7pUXgp2CQXCE",
  "key35": "5jcfF6S67rDp5LtrErUU2XmfZxywZG3w34SWjiB4dgV69hB38AmnWz4CkKVoGZYqFYvi4kBbkfEsp4tNNRMZaMCn",
  "key36": "4iwWrV2Y6sAx2S37g71THZDSkauQfMS6ju3xASDJ9nekLNwZ5NPXE9xacYAqwA9vZ1N97saHSbuvFwfLQjbnYdzt",
  "key37": "FqoZLMibCyKqpz4TT6492oVAQUGvGxGcW6FmjJKUJu8hBZ52gwaaE5gA5cKqAK7Ha79tHHqnBBhfkgmueKstXGC",
  "key38": "7csc1E7btZYyFNccZ2T5EcCJMvKHWSpSFxk6AySMvA4fh7QUfr7tKb9eKebsXf5a7fZt97f36rsF6oVbBkEN8Ww",
  "key39": "rijWtHedo9mnjDCAy6hH4WQZneBDw9qYto8CgpS5E91FpMmKk9hEZibo9aLgtGRYup5DoF48hGnEeUqABwENcr3",
  "key40": "4myHue3N5DWv2bZ8mheDvmKxbB5nNgjdQZs3orJfFdssQvnfHXFt2xQqXdzt4aF6yyUUU2hJYGBwJE6NRV6pSwVd",
  "key41": "2jXSWmpCPrs6jk5DTY3gXkw8xbRYjcVRauazy9aKZ9QGkeGaUtXPUjDwtEEcWUAro5ZRvVnXFADdEEYoYNPD3vGD",
  "key42": "3LtFvTjVmaRh7RfFSqMj1VsA2FPA1467zZgSMbG6hws7JxBAnJB12mGEk6adeLEiWioYsh7YsfL9qB6M6vG1HF12",
  "key43": "4W4mCB8EQJfTFvhWkzR8StdYEY43BEMJx8jf297d7JK8tyGgyKusESFazXZa2wpH5EXRBVA25J7W2hkrCHRZyu3X",
  "key44": "5ckqstptg3FbkDzuNumh5YcNnzKtev7Qz9eXb3sTgnkYZLGXVQ6FsTq1brKGhNGX5S7fCZsTaWcHVYPR2wHxqm3F",
  "key45": "NrbXJVytjNZ7ugAVuF2Sh2dpX7V1eR8P99LbU9JYj2RrKb2YejQaMeKFtmdMPzUTGUMkYRmZhgDY2W3EXw3TBgz",
  "key46": "5sc22oUxyGkPY1B8kvkC7BKdrfK4P18HDYZMRdmLYjcZvSPDoZiXf6qQNR6kbNtzkTeRx3snsiTkv86G7PaUB76G"
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
