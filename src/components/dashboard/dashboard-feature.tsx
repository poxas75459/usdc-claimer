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
    "4gq2wSAy5KRRzWQeNnWK1Ktw7yKPGVHHiYhHcrsAUTDmWTEeibejfoZKXUb8FUTpQNJ4bP7H1bRp85M53qnuFB9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DBRk2wfW26wpi2ua9js44vXx8Cay1qCiwoGF1M8SJnoogc41RaR28RdFeHJN4TW6rpz9NMfCAXBsudMxCr4u8ga",
  "key1": "54AHQveWJNwQd2HESoywmRdbM8fXDYyD8W7oyZDrMSm1R61NG1RGj69mYqLe89V4Qoya9DtkY5U9uC5ngsXnbsQw",
  "key2": "5xNPggPsjEYLrHyAWqSP9yFqb8ETSUuU3JwLkzBvwvVfpetWeyXXo3j6eHTVAtzSKCE57MraS5x2dKX4RpKZUZBj",
  "key3": "5kGCoCftdE7rmY99rzmavGUNfvsAHieVsatR43Tori3nVE4TGD1Q95DG2dc2swoWVt5DEhP18tduzt95rt2BTHt7",
  "key4": "5KGjLMAFaJjukxmnS5uU2aqw5zQ6uvEMx1mXY3L2xeZ4uzxiNiAbU9CVJLvuQ25fxoTJysnYToFYGohWiHRWz5sU",
  "key5": "2bd4G7RjR3d6V1A6nEqbfTYtq5xFYjnzZzrq54BAD5FgmZ2KJJuyz2sSq6UQYfQ3Lm2EQPtSMSyw3Behq9yaWAEz",
  "key6": "5K7x2su5V7Rr9KXemYy86Uw6rBDQ3aUjBRZqV2yJxbot31aG7vNtTbpSujLQwhPF5qZUhembbscaHDR9sgXWQkge",
  "key7": "FcfBDekuy1FysdPLxins9nTn4j3beyp8rvnwa3hF8yZKpH8JWhsUjDN6RLFm7omcg6UYsWsjXsXiW341FoDiBPj",
  "key8": "VMZjuEmhRs6XaiWmwamSC9GEKiEqRUmfHL8ZLMrHCq3hfkhTkUBEdsV6nAqNTDjsAPg6LWAkayVagRcHT85WLa7",
  "key9": "3Q6WFTJfeSVqwjhUXZZzyu9qCmY3ATLq2WYYQn893i9CyiezP29BnT5jT8FobD5bihvaBAmp27GqEjW2F4UKNToc",
  "key10": "2w1i2qPQZGAUNPNUDnUMf5LmQW5c7xnapVxiLATEKLU9GZKVaQTodcVzaRYBHUokJo6mvXZv6gAUA7ukd24Paj1U",
  "key11": "4wqGSBqCjRwgYgrNATkv8q3owvuD5vGTxQgr4E8wboWNjsyKradH3cbpfqKe3gbku2wLybzVcaMGAsHyH4GqfWEX",
  "key12": "3yoK31KJKMXhT5MnnKQTTM5QG7CThUy91amGgmkoSUv4cB1xKs9CYijnQFvkF8gUYoirMDwr63Pap3M5aHo5wb9y",
  "key13": "2BeMzVYXJcznFWvD3cyMjVvAWwTd3XdaJEvd7EYry3bSAZ8pUE7EmMoDNuqys16WDBmQ8LoXvEddEXDXMaAUyWeN",
  "key14": "21czDSXoSzKo5QoMotTTLb3wSkiJUqVKMUv6XND26cLMVGv4keDPAfN3fmaaAmwkCkcjUqsG1d4j1GpyUEHNby5Y",
  "key15": "4goeG9DuKEkFzQcYzyqrrfceCRj3jhQdD5Ttoeg45YWyJaKkau3KMAMhfAV2BL8fNW8eu1GcRh56DGJ1BE9u3Ped",
  "key16": "4418rPjuLJDLoAuyfjPz1SoMcyd52Yg7gxHHXSEyeLtfxBcB8o2sy47NSVSHXmtomTZJEsXWiXEMA5GBFEvS3TLK",
  "key17": "7RnZ2bQREk9MA7An5gcMqMM7ks5rJVqxLWtQrvjnRmkLU6ZeMCRzunDaK7jrbE9S1xMwqDeeRih1ZGoiXhb8b8n",
  "key18": "3XG3zYv43jv5MCNzQDtV8ubEeYg16nEpQK1iyc8mJJLptPrchTisC6LVuZ5yNFDotzmpFoxTxiekq7aeh4NuZkMe",
  "key19": "pX26Wju2TnwcXEaZXKq5T6utHp4qcTfjv48NtVRbALaQPtRHbN4A8tUcV9DjnCFsm4sHufj4PZusyTuTXJzPxnf",
  "key20": "sedraU2fQiL28ZRHsG9RrXBh6JmAa43vfp97MhzpN1VTKWE53CpYMkaF4hRsbGMYKxPuKELeoqFBUvkZWX5MUTn",
  "key21": "612YvFuxpTPLVrMkxysfj1RobeTjSX4GQrwYMUK4niaoyW8DjA2SiCYA6ofnSb5YFPX1cYjQ6jNS6JTD65U5mwyP",
  "key22": "whWdeBVFLkJyAPAUSPTx4AJjQzHJC1Bu6FjGwkK9uA5JMmYZEFA1w7Ghs6vmYQa6jknsWpM522n8PywPJzXw7dh",
  "key23": "2VGZs8gADYL2zZYKetjqQmgst7KHmq87gwR3EujNkCtxz9PtPzk9aVjLyHw7DNcGix3fXNjUvxahLVWX8CW9hSu3",
  "key24": "4WKab2fbxNabC8HABLuLkXAhyjykSP7CfxGGDs2AES5tJgrEg2j4yHWeUx3MgBp8fD6h99kaGuaXXSGSN6bTsKZf",
  "key25": "34ani3NaUYZfJSUSjaZWPKwnJuWJYKeNMLDpx4x3DhR5kEYAG2DwADBMNvTjZaH3TWuzYBbC4Mj8P22CnUEmXq9J",
  "key26": "2wXP3JF7Pmj99h5dWPiZKXu753o1ryxbvGiQBqhei4oBc7j6322yxMjPGoqeVj8rhFR14zVjDPo2eJ4518SE8or9",
  "key27": "4YeK2ANhCuEFf53MonCPP8nNvaL93KHJnoAsLFTQdmFZHeKS9aZoxW5SGzMv5Xyq1MbqheWvbHFVVQFLD7G6QEjp",
  "key28": "61iG6xbpCSBXfPszwvciEyx4mTfgHgJR6DJd6oj5B9gfobSSx3pxs5d1w4VcAfPL5eCLiuBHvbFHtBQ3GqNmQczp",
  "key29": "5zqdWg8wuXrLmbYLRA4VNQcXwZshHRvVQTyqRTUxjvjFF5anTW4Fe6JMbtrh3xArwogr3wbhgrtL7zrktPXRdcoN",
  "key30": "5jH2mhNBaym5KoMM4DGK5cVhDr2gutiedw1MGWhzELTGR2KB7vAXxqtxijTvLkGBqYqrasgevmmJ3qD4gWWM77Jd",
  "key31": "2J82ERkKLnNVwAxmzhCwFw7s7hfxdimXyoWLY5NoL2NAKScgm8MwTunB2BQ9igcdEwsNHUH3UwcyYNuSmXuKZNRW",
  "key32": "3sQ6ExgFL6ercrjcGkEqXHefewH182BxYAW3fNvFjh4842LbzuwkzAnBVhvCNuphf71Yc1LqFN5otaEMxBgJUgTN"
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
