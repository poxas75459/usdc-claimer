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
    "3LcVRGU9R5vkM4KB9PeSYidum1a8BbXisKTA8Lqf3vUNpdkfWu5K4QfPkaTBaBNMqu3ptM5BNzwLRrCZpKKd47Bn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JpQiKMNE39GNC7EtvZtJ7FiqocgTrL2aSqota4wrbPPBMWe2LTRirV9THbmGkkaHZ8W4UvekgR2hhrYNN8dXJ9u",
  "key1": "5FocfA3R5LPtA7G8S58RmFTqRQkEyPfhb4PYnA82rtMxCue5SstddR91pQxXe7cUzMr9UcatCZ2JeYDBtCiDPe5E",
  "key2": "5sLBpSu5oSsc985yCzzjUWNzMcawP5iUQqUGcSp4GY7QwVuNvDfgUbQ3MdDUeQ243khiTxSR3tYkU1sLfSBJt4qM",
  "key3": "5vhGxUxZH9BJ1UaTDM1kET9PABR6WHGiCjPcf5AWjjeojspvYqAZtm4jqLLzK4Q3HUWDf6w5fhQt4B6N8nxZy8nF",
  "key4": "5tNaQSEpthHV7AfMSh59NX9d74tx4wvaFYTfufvxgUbEnisbihNzocz8oXQVt5UT37XUncL4szsse2MfVd55D1nj",
  "key5": "2fpfWh3x4fjYTsB9PqNt4xEbseQA2W3bj4GWXa3zu5X9AAKavRVGQwngKdxpu8WMqHoQmRwkeii3WD65DibJYcBi",
  "key6": "62WYT7tGamAFsRCETCVtmcMmfX4c8nAS2zvmU2C6xrrAFupDG5LQdhCxYPX2fXdoEcTP7RGCMVuFkd95cHVDDdmf",
  "key7": "2Vc4gi14ZaFoeEH29Z1EYphq3UZ38ahdXAoHMhzUvkTgeB6WhqdFSvnF6ZTdJh3vxTf4gysvosWgicLEHBxaNHim",
  "key8": "5YaipLMEX3wyMoqE6RVEZ7wLwPVEGLCXcBZxfcj6wDcFv9i8Rzsufyj6ugq7btykmnKoZsN2ZyTdY8zZyw77EKuZ",
  "key9": "4cbLHWZPy8ygXgSAwA6cpeYqH9EW6ppXTNxm43gyLoE13iRi4BEZiM8BSwisPQ5PFrbSycHmxYiYTLkk8Ks9xEh8",
  "key10": "2FK9Lfix8WfxZGt4kPndtDott4Kx9XUJ7KRQdtJePmUFQykwk1ksvaxnjNLcTeR6MDFgERN89nmcM5hpSV83UQiH",
  "key11": "e6Sk3PJij5vUvSDvvXm33TnDH8YeStZyozgpnvaVXb3H5MNC7RfcQGkXSYKM55xpQxA42Bo5NoLvhYeEwcQLz3W",
  "key12": "3RRvoxarmDEQompW934uWxLEX4mE5xydbk2MBpDjxQ6gWVYRCAC9TfFPhv5pyRimgsXpjJaoucXYsVCzT6gkcGZF",
  "key13": "KHDbyerbG8bQFNY1efMCE1pLFYDfFWuYnRcyKShUdR8K7nzGRDwGYQG1agy3nM2eNPJ3erKQs81EFBK3ntmN1Ko",
  "key14": "5GonKRapxAGMMKPLaV4ggmS8GwqWiWSEBPdnyFK4dSistk7NvveAPzj2SNyAh6aAukcYqLt7EusADBEWfZyabwFZ",
  "key15": "5b8HCC7GiqKJ89jyiupkeQJAYkv87zLnu2VFknnUqoH9g9cBcHeobMayMWgDGy31B5PXS1tr7EPt5FrVQhtsC3Fz",
  "key16": "DmsYah1bTNVcYPZwsC2NTkgBKUEzhZxawVuvFYrrGc8w6faXh6Q7rmo7qXrcKTbxQupwWWRS94kF2gbjk38G15A",
  "key17": "3JCtMwpwYoaDUzbct44MyC6U7V5cizR7DyEyWxzmTeKq3FVbRTLvPrKjzHpahgqkYqzLGYmd9iqeEWPPtN8nAJ9G",
  "key18": "J7vUuZVBFVjTQdvhhm6UnsF8C4yBeEUbemTepavSTe9csPmEamwAusiZDijukKn3Loi821PRNq73sNJdfgQLUWE",
  "key19": "3YwwGBFGJ7Q7Vz6SHknWWozMCZaaQPkHvrhYUyFhkpGp41DnRyJD5YRcsNU6eGZQK7kiJMvupDtMWxhBDmCLhYZL",
  "key20": "4MJoET94wWi85Mxy4y4VTUirf9LKu113XEKHeyPaLdwv61utK6XrbpvtAGhCbcCW7XfUJMP25x2CFBHPtMSdWvSv",
  "key21": "2hzMrr5yuXXf7dfVRBgqZguAG1eQHPVmenaJTwJq48Vg6BmeZotXEFYosvRJTZF56Qm3ScHqNpCiXuUfJcGchzTi",
  "key22": "57rejdFjV5pt9AQA1XoWsCFdyASqmc8f4zbbohoSyzWpE9gmzGamv1iMp4rgSXaBnDhdKENJJXUjFR3uzwsquS9D",
  "key23": "3ND38976HnMzMandps6fWYUwqXGQFphZhYxNX9QdfMGeUzNhF9p7NSiPKThtEJhnzdRiQvCKFC6YXQpGkVqC9nww",
  "key24": "K9FVs6kYoEWGv5qvk1Qpd942g5LfVUcbEGrB3vAvyCtXh33woYddR8dHENPKRCNRfFoFpK8tkwjR3e5G3Pou2Vk",
  "key25": "4hgj2Y834NtrZ3TR7LUbsG4AyG7t4t835S26giceziWtdLRDiXSeacd8VYmazYjTttkXY6YhLL9XrPJdv9Aj1onY",
  "key26": "4Yn6YaqnHG9RuaHd5YWzMUmvZyezrPxmor9jVu21GyoY1m4NL7mG52hjCdwKHs3o5N2wUS3hzWtRSKtxjdyLXux8",
  "key27": "2F4y2nQd652oex8XfYHR2gYKUfJ1RQAS1kHANj8NqXgEwRQehoGQWPQVMDSMpDzXf6XMztb5ZtBY6M3gSbiWrYeS",
  "key28": "5zsuucuZqpYvULZWpqWSu4A2aRzugiCuz4rLkMD3dyUMFtyRQf43xwYbxDyWhkNFBhhpuMEcqUXqCu7PbQS2PPVa",
  "key29": "5xK2Z9dUraAqjPgB4ktxsCLkPhUs1Zn3KPFf9aHmoK7tBd4Ucdg9RJS7Z6sbmNSjAZvX9pRLh8nUAL936CUVqXSm",
  "key30": "3bwWYQc7rSeYx8Xo987cZF33wt42AiffgSMnwhdDk9vKn64SknZDxNCfas9G2S3RGxc9sb6HZrnEsQ4nmeCRogEX",
  "key31": "5cBDYwzVX31whXNeZidxaBdUd5Zi1wW3MH1RRDP6Tf8sD6axCXDnQWRf4SveAA77KETy6b5k3chyCHkdsWWhn5nH"
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
