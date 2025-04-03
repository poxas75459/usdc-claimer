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
    "34beYg494AYCnbCifxtKL4tvKHsn9Bmkb2FQikzs876X2oy9HfzJhivEc9EUeUah3Tj5KzwW8BKpDEHZExBeF5LZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iZimm33v5Zd7zzT2aX2d3u5f8wcsjKv4XmfHv2msj3a7LJBh8AuncuuZoGvTk91BrFW8JaeRrcWSrSBdstUpYwH",
  "key1": "RQ4dCTL5wkEAR1Kt2DaDGJX8GcMiYLFJELkCt6x9ratLBU5Sb9FDyHCZXL1CxTZBq2kZ7jCcaKF3ubBSnMcfudc",
  "key2": "2jxxLGSgLQY8KYrMfX7zPahwXPLHKSZtdn8KepsVrpH7Tfu2vWGnW7wVutRo9YAENWPVzyi33F7FRLkmMaRh86o4",
  "key3": "4ovw4awYkKo7qHUQzxLv7Sp8uHuyzhaA1jKX5YgMx5SA93j6Uo8smXxLoN7GQ3EDHQkQAdtHRSmsB3w8RftfaM8g",
  "key4": "3fa8VGkiddgydQ7hqwdoHk76J6xVd2RxgmXitFu8hgQpb3hXJjJmWjQ3PAjQwWfdiFq2Q17dSk9kwmpto8GSA6e7",
  "key5": "3Dbh3KbQX4rjquhMLP4uNzwT7wMjkpjRmmMv5LDbE9BQjPjBH2rbFG3CwreEW1FpHNjiAS68TvcSkxhJf6UqjD8B",
  "key6": "2oZtgcpaB9g8pKJ1WHSrSk6LHyExJU2dUxA6oSC2Wgtq5NWKvH2FidqRbBnYz9BMJDvAWgy4zaE1gf41eWLkmwsR",
  "key7": "NKVEhTFFRAs22NVxsgorG1isecf65xMMuWdT2Hff3fCJveQ2XcAQo3u3NTcvx1beMR1iHR6MaAMg64Thiho71BV",
  "key8": "3j6KEPtLkySUJaU7mjgujsgopmXTggPRhgKVtTx9MdAHJUQoyk7oZPmnNnz7Hb6kMnfHsAat7WNAM7k3jxdAVn6i",
  "key9": "yFhh4wq7LvBEDd6Hk9jq7Js7mrb5rgjcnjA4YZ3Saxw7abh8W7P4fYMhnBnyfdxdZx89B67Y6eD3qfRACSDbXqR",
  "key10": "4Tq1sM3GXdgcmwLW6ot53Up3WXsxwxV44PnzF3GLD5tG4Qa7PfGbUrmonFkZaHhcn7HrsU5k8WMwKzrBhWNFqFAN",
  "key11": "5LyNZr2ryAJC6ggXsZFD1J33iKJjkNrBmwDKbfRzPxzAWpmSxVJHGcU19jx9dXBrb1Ta7bafm9oWwQEUYvXZF2au",
  "key12": "4yEZBt34pF7CRsh5ydjn5zrLgVUVmqCkQrUf93874143GHoMqNVk9EnzXRrPTPPVihad7baD8NUzAqFT59zSMRyZ",
  "key13": "4W4ESKsMHTTwo8EHDLn2uxTZsA9xKY83M7xguRFBPGca1i9vZZ8QE71c3SahhkaSMUdcAK8W6TreTwBa2xTWhrsJ",
  "key14": "4UwQnwyuvFCF2XenUWnQ5hirEgsB9Hky6SpNhubi7XCoTpchcEagw5341pQyymtTReMPgziSs9AhXqNNJjosqaom",
  "key15": "4WqZuhXuxbNRTy7cgbFCeBMdarwQy5LbwdE3CkkvDdCudzXfRRMSXWfFQ6KRSs6maZ4NcZuNcWz5SKjk4iEAhQkd",
  "key16": "5tKosEFJFJkueEmbjQF5GcqWT4zPPv12xs9na6Q2fPqHLJw9tk3cEZ1PWPvMnnZ89uhVMzEa4o6mCQGyyhAVcXKN",
  "key17": "4n6txMbaGsTvu7MqgRakoiwgpchJGNsTceeXubqTLxSpswg1BRLT7RpcNVL4jSbEUbR6Jq6mUfnZSyLZreq3ibp1",
  "key18": "3rVmZMQmkEUTpXQbtRfFohskSk3W1NHXraBNzLMcgMHfzj8gg6Y9kkpBqHqHV7WKSeDfJy3zbpd6sWiZDbKdhExm",
  "key19": "4sx3XXeH7C4b5ANtZFn4GmL3KYZodggvmDmxmfWY3tpnv6y77JHK8QDVZwibDfJ2cQK4EkMvXtEEzfbKNitWUbSf",
  "key20": "3asB1TvCYAMy6K6mTVaC2biULDLSrfDM5YvwsGuyC1yhBr8nQSMD2r221cTGWtDUYiSpk14FdivW73DEgj3RedB1",
  "key21": "5hJprxjNr5y79NjwT8kMoy3TgM2gftT65HgjjnMD1bxbm5ywZY4Qze1RYgvNJub8byZ1qfh5eKE3ucLfUJV5Jz1n",
  "key22": "hkaj1eATxf722gbTxzsDCjt9ALFxSyt5EcDg15uMAPETeZ2YYiTxKUbPH6MQYXqfcFLskkKJzG9yYZ9MRVHaA2B",
  "key23": "5CfLPin7uekh3PbW4ba7oQ4RazGjLkFZLeaqLJRXbY4DJE5h9f1KEBRGxopGr5Bp3N9xZmKiTiYiQM7KGQbrYaqP",
  "key24": "hdCvnMc3qd79GF7De5hr6E6zHAoPBcCAUH9BCs8uHNgDQbQKJa5KpbZxwyVAZwz8rWr9WHZ3YNe2mJ4xLzdWWQF",
  "key25": "QEZMhSpEMhxSm6FGqYfiYobz4LVV2kyfS4JRXX16xK54xnU1HANDsg684eU9igkFi2Zhcwqv4XVDA1vqPGxP22M",
  "key26": "4Nm5fgvNYXxMJKTGur1BWx7GKecGqhNzxDCwHvuex6DWBAj5bdZWbWEZRtbUaH2qhUVvuKPo6Hf74kmbHshCBPLL",
  "key27": "p2Gs2ZNWCYGg9gXRnvi5vQ5BdonTYqKBMro8kSCSJPrHpX92DN49Cy9riGpoY7TEqNH88HCWuaTeQo99x4rywrM",
  "key28": "4momqZzAHZvP43zJTpJBfLV9wfrjLYoP45YwPA6ZpdNPHR4JxtXZXE6QtunjHWmdW5MhcyFue1W5eBXyo5MnSueP",
  "key29": "5h1bAkJzen4BUefrfZQh1Sv7HYt247mNvTJeBox3oygfgUbMTt6LuLsLadrAuTarKE66auAs5awBfqzc7bzaFCUd",
  "key30": "5r9meUwqeS4uFffT8RmNPR241xZiy6BRNq2tHkohh1byN2xw2Ysb1WEeCxv9zGi7YRNafXVgfFPDWzPuS7U2Crav",
  "key31": "Sy3iVsdcwPeQGayW6BX4N2HmC53G8ttmXVQf23UZdn3A3s8WQa14A1EAckytqfVaQTM1eS6NquXoeybjrdtnaHC",
  "key32": "5ELKrKZze9T139R5UutWbbJMuoU3Mr8H5WndGzHC4aHYsWgkR24KfbHaSz89sJCbBiH4MQT1E6DVrCV332peHWYK",
  "key33": "2WqRRuZZQ9HtXvegZHZrLM5QNX65YcuJM4miCZQCMD3qBJFJUASWoj6ZL2LE3bJSJpuH8SJfwYeYjVezB96oHZRJ",
  "key34": "4QWug749rg37FKs4R5GzkbAWxMePgyRFnuhsUidzXH2zyXuBFjWgxxhiHDGKPCcjQBqycZCRKtevpNCqnNDp9rqu",
  "key35": "jUbQoPMkXAi2cUuawWb499vSdzb2rAFK5V4StMqCeJHWNtxtnHJ7U6csntsqFHV3qv2B4eAs7bJATG4bQCj9KFL",
  "key36": "3TPSBqiPRMLc9UvrZUVwUdp8XVX4v5id5DUst32YZV6dJUGZhUY9rRriqPxG8WuELQ2GzZjHV7JkDypJrnk5mpa9",
  "key37": "3h3VqsCtc11PQ8QWyevcth2772BnfqioEd9cfApAhM336ggMSP55dKrSfMHKVyc6Q7bNrcHAGhVFUuTJSBnqDis8",
  "key38": "3d5VR5ed8LazLxQ1ysz7okoTciaQAm47fG9u9oQbLHcey2n9BaohkuNzu6nfRuvKkMRTQQihKVDjKEN4FGoPCEpm",
  "key39": "5WPY2AoaV4D7K4A5EBM4rRLWF5mzxvLumFTqtAs37c55aGK7tVEZgNZysnB6hzQuDo9bWBehU8GBa62uako3pogc",
  "key40": "3b511yckwvkhhS7LJhyHch2NagpXt3TwjoqPkY5iDDEqgut4kb2XuoUhBnPoUrGmz6vsNLG9pS6ZSdb8BtSXwqqR",
  "key41": "3YyXQFPtetTboKkZk6kZWTRBuC7yvnM8CZNK1BD2ggdNZ3ytfjQHhk6hyn56wbWeL2XE5TZPUGwoQYLfknkztmJ8",
  "key42": "55QkhPzfWeoD8i7fMUPi63gpcTrtyZFHghg7XXRPXhvGrWzCe5wz1bEgRsEZ1T91NVhMXRKmpu9qANvmRwYji8B4",
  "key43": "5qdn6uDggHbYrUYBdFHiFovK1VjUWi17TfMKVsSyUXhjjoWaPLH1PHoLG8nMkk8UZTGTz9KYMgAyL9wcSwtutH5R",
  "key44": "5gHz3RbZQ3F91Gc2gZEdM8VGq1t36EqNfpKqiSdA3MZM26LNHEu3KctV8DmkZXpPXsdK2k6BW5GQESZvyo5nEC4X",
  "key45": "3VQpV9dSAEzDqEwxR6vfYnq7hhkM4ts3M5P1FXuMc6e4U7gkUYHUsmwb1zNUt6fBikgS55v7SPc3KkpdpA7UfWrZ",
  "key46": "3RJekjZzg5kythCem89owW76xUzvmRjMdsQ4gjBLyqaozGvrstWorjJ15Dvyc51oYcpjcytd5AHofwTnH55VKgxx",
  "key47": "59u8DJswcqyfAegBnHPouF4KGtJcgYdoG3nX9YdznmYHa8gtA83HvwEQkU1Gue5UjoPJtKEQdWcgjrNR6ZVaWGiE"
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
