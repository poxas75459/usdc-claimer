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
    "vcpguaju1W8uH5SfWd9E9wu5z3XqpWXCgBmW8UujgsFCdfMx59tsvX1KaJpHCbgtiyE2Ch1yNyPD6R1VoKkNBJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M7qzJmFSEeHnLd44yz1PUjybwo4LW4Zj5WRmmgDuzrErSkY4ZgGgH37ENeG1vkfeWFEYgLc3WhcVFY5DAX949RK",
  "key1": "47AUUJMAhdYWA2PpE3keyqy3jBPenwP2dGE4tqtsh8UwcjeRrbawmzgYBWkDNVn8n418qjGroAyrZrJ8EAX7TnTf",
  "key2": "3SXBNh6HseFWchnLaF3vv6N7gHqmeaPeeZ4Vs9DtBrmMwYs4N7GuJkaVktwqwHiDjzP6XaqhZdNLQGn947Gs7bVk",
  "key3": "3H2Am3k6vwpbaN9DHCaMw1kGfrieXswy6FQTcg3DbHvazKoebYHXa3YeZ1oLvoBEf3AmpVDzfxTzp6sspGYDEXHr",
  "key4": "xDvQgms7ebwYgigqQLCFVvCEd9UfLQdB7dAJ47mJ7sjCNgh2DcSKmW8uEeMN4ynZqZKrK5M8aYFTUZ8YLdKPdGW",
  "key5": "637qwvtyyjMibP2yNoDuVpAwQQtZ9Xg7matWD3ReZBdANvrPJjZ77FR16Vyb55EQTEH6ydoKNdrj1EWgt1q6um8a",
  "key6": "2CSKhPHPr95f5xDZ7Qgv3pZwYfVQFoETLeteWhbRoF1a4U9B3ZwC3u5AtxQiMA78CDwZ5Wu3C4unmXRvnpXUAT9Q",
  "key7": "2wVqX3Dw8kWYQYEdNK23s33kZscYs7RFbR2aGiBziLQrpM8PdxeTzDFJNicNbt1jiiJRePxyjP2ZxLFJ6emmcyvR",
  "key8": "3Vqq5CWVQwPLpMtjFu3MJj9VYACM5YPk2eULCgvNpBoAbR1rYVxWyHXS5qc96Nn72n78nDJvcDod46hAXw592cEi",
  "key9": "2H9urKsE4WkNpq2LEBtbX8HTvQTY7if12vwuqcZqY1mNXyPDvZFtPUnjmT5ympYYJFqLme5Y3R8VFL161Y72abhC",
  "key10": "5U399YRRPEYHMgSUcDYn9x57sF9BgECvjxCmzwKk4LoAdUAGqRUCbyG3yYC4f7dnYMoVds19i9mm9ae76YYSvJaT",
  "key11": "3B1ubozbCj43UGvHVFaoF9BSxVADpWzQHXSD9WAFUxiUZ9URhxyenCXZDHnxwEihCUpKJnrUj4pWLzfH5W5rds3S",
  "key12": "2Xw8jo8vuScXrq4XL2DGhBSi6uW8kuvftxNabMcxp8yUappf8HuJS4q1E1rr3bvxeMFr1wyjXFKbh3XnU9mYiJnh",
  "key13": "2fmCb6vHpouyQHLikdd1KUuZ53C27rJAyi8j8KL5eb6raWwonMQrG618AfAosLfEFfrotB7TSSRNQp3bSAecUcaZ",
  "key14": "4q8FXDd16EFCjrEXvqaJWM1qYiDNoqqmbMA7tGe6nkhxzCts5S3BaA4vpqQSkWh1YY26SxhNrLhvtG615y6DxVQK",
  "key15": "52BtvHi6diy8iuA7TE8bvSKPzsUpSRgDD4b99do4Wzjgu5zFBm51MkYs9bRZoSKK66RekVkW4FjtiQawnMzfjGDQ",
  "key16": "3fiZXcqNggPozUzsCYGiRwG245TDaa8fASwRLmunCHuqSTcXXvD5rrcWjQ4iXtqmGspB8zo6LWMoZGQeKipdMVbi",
  "key17": "3gPwkMxBn84fg9av72b9Bs5LRDQzgnah2aaFufKLKtyAUqdinMaeowz4AgZ8z7kEXRnbtodBMLvu6uoVt5ZthHK9",
  "key18": "4uwo9KQ1TTcvvnWvTJAdyHK6VAKMVYgoxpWZBBBXY9cN91Er6qBvZ232UqbEeyh7ZHo4BDAxTR3eL3Pf1doXY2zY",
  "key19": "291x5jKcrZP3XMZZZkjPHHAk1TmGUu4gABvAYqif9hNywHCmvoAuctsgLB7gWVX28ZsvsFeDk7ohmfj5yfKSxpj1",
  "key20": "2RP4FPjKRwcz929c7WRPGpkDpDYEs7vGwFtvdReQ2UHhd45tA3a4qaDKsDeUmG8QTpZccBZw5SmvVEky4ctUSs79",
  "key21": "5WWA4rHHHD73u4P9WXHqZNEkp9FsB7ZBn2RQfH7ba3QHhgJMDMyfnmyJhL3j6dcwu2PU8qHQB6cNTRHkwgg4Lcga",
  "key22": "2hcK5jzCxkbNYMLJnPvp4xojyjmJZAb2VzCegS8QsiJnufdczLgdqfrsfcUGKSCobiXdhGA6MDp7qS5texgq74nn",
  "key23": "2CzuMcYHtQBxhuLypnVyfZS17KozFiwJVdnFdzUzzjc5eTS68LgCmnyNkvmr35yZ5sfEDBnZNTtyMXja5NbJiGAG",
  "key24": "41N3146hrJGVgmPEwUfpoRja6Ypo6fA4N4nZ4KGVEV4eTro3S5v6EQFfjCUwDCUt41rap9jwRQ3mAjBMqoE5yxeb",
  "key25": "jkuqRUPSGCDWLCv7nWKnMyJ4J96X9XE7UJ8JiyHZFQkDn41bkUr1NW8uVmviriUDLzDQymWkX2p8RtZjSpAJ7bs",
  "key26": "5Xr3KFiQpekAXtdp5KWym4GjZS72TRtSQSfka1jjBrftxU13xq4Jdb9copZvS9FS77jQTm6FwpcUSHQbP78FXH66",
  "key27": "5SM4qPAb6UX5MEGoqZDS8Ej46yzwxCQmouefjP3P4KJzYwiXZeBYpZ4q4X8g6ZyWqbodsLanEHBucyes4vDKY2T3",
  "key28": "574swnsvY9XtAnKNP8xxXtsUmwjNJUZH3pbTrG97zanyzScpVmPgQr3LFi3RP2DPaN83qsVGXptZehhV4dTKSDgb",
  "key29": "7KbvhFRWsNEckNAsXr2RwaxD4iLq5A9MXyWDWX36y6dqkLGnikaVLNuG8vXrrkqz5Wp5Ncb5dwjjwczFFQXTnvE",
  "key30": "2MSzAPDJcMPRBwP6bSpXPVeTiTvPS9nTzpVpYDM3t5UGsD4nqK2om8MwLuPq15nborYBxfmTtTebdU4EXTscvbxg",
  "key31": "3KL6u3LsRUqPWTT9AUfSyihsShgXtZg7XSGCsy2LDgf2ud5YHn7AoP1Uv8ZZtUTh6kUBSmgxNmidafcFNQ84g3m4",
  "key32": "3NYdiVdKnASBH6XKdiTDAgDf4DWv4uuxQfyBBAUimqeomz75q53fMJwx7qiEpc7PyLrJFwZeqm1LGfh2BWiBrmMZ",
  "key33": "vExe16DFRuTiNpyQKEJ9AAoWDe9ZHBUp66WFHyR9hG5Ge4EWNVcCNpDHtDm9aL1GUSDdKev83sxrfhLuD5NSzyE",
  "key34": "GqKkadRwL7wYovWVkDm5PffyqSrH76ZmNaUAAfedWskjB4QjFWPHvSHFuEzsbBCXF8SEVZtxXHkJdEbwLCWAkQk",
  "key35": "4PiVqXpU1gwfE9bJNG88C7iRVcGkXW1w1Ej3tsj2vW63Z5yQsgDueENjinxUt3qjLcXTx5gLksCaRAaNwJw7Dbah"
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
