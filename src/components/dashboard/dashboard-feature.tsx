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
    "3nev6swxRGiv1BeVHEzscGtjfkUm84xVnEdBSASiqitzd4FVSKxe1QnUg7Pk8rMa3yQKtyFjJsH7NWGAVXuLNXrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hyn7eYuJTzNhrcBbDvnMwVfghuSNxCS6yrjWKATkfCfPUCbbSuKPhBP7FhCMLLBNdj2c84DthFCcjVHa9KaU3ah",
  "key1": "32RW6i6vc6JLDC9t7DEts13iDRZEhKj3cQFjMXowviUZgtgG2KABaB4A9FQ3VDNXKos66u3m4Q1jkdiUPQub3JXL",
  "key2": "227GUBvKB281HwiT3yujCXymKkBKyhxYU17D6XS7jJNUZKBoLWPDwDVu6xULKCcUptGu8cH8LJtsY84PwQF3ze9d",
  "key3": "3dsrVMiNLCf6NU18qQH3tkMZ1FiEVbzstTuZCcPaFdXJ8X4k7xtaFMDroEcyLANffqGPggdEPexR1MV4pNubdE6F",
  "key4": "2QHYw9ah6Hxg6RopEjDp1WaECKPB1Cn8WnSWxyMZPmdw5GpuA6kJUAKWmFvafn2YFAPHcujBYuNLF7xuBQ6UiqT2",
  "key5": "4fV7AHxMic3bYW6b7PTJz6zZkH8FxzqJgCSHkcpS4XYiT1pbYaVqczgbqZESAaG7N3679WZA4U1qPByXyDDJS6yR",
  "key6": "L8v2Cc4ZC3Cj2okvYSFcMPsp3fC5T74ZraxcPQZGyLuSHY86EfXe9JL7TxdPwhi1AJr4jmD2RaCbh9UeHrrVhHR",
  "key7": "5JrxVZay1MYHGtGFo3iY1zR772vfyUyriHEVt5XGJ1gGFHtvqUCWjPoT8kYct9WdsQkG2hoGSEgmTVjcWP3JDZ46",
  "key8": "NWTL7UgJzqWd8CWH4gxM5PhEnR1ftKjDoHEAKv31GVooysu3QsKHXzvYadA3c8SH3VTpg9vjcwnPVggL8JXCxZm",
  "key9": "5sFA5W4nhjuB2oeUevZbhsE1it4Tibq3hvxRtSMbBWvQkBaemDGNjvGo8cswgfbH6FwbdCaRd712PQubPSG92C13",
  "key10": "2J3bZawgMeyYxHqP9WE8hiPzu8FxsjUeRgQjjK8yL9vKcSKn8CAWJPXuUG2RxKtFJzquiuTCtP3sTc5L5uviR4id",
  "key11": "2yjV7zAAQaJZvRTAa6ro5Cm8YxaqojP1YNtJCsfrosZnDhfrtyQ7oumEWvxwHUi1xiR3mAVZ3QVdcodA25EiFnsj",
  "key12": "3w98AMTqen5GByEhs9NkEspATWvjsENfN3ozAcu6isr1YCxpx4gDf539mh9GnbJifXJmhwF4T4c5sVUGuSPG3xiF",
  "key13": "445fXCLZytKxLLkJARf1obzsXjdUg7CGSNNBDg4Y4qPHY2cdtoBni1BgccArxh56DzGqy5Hw38kCFgGU5TMaGKzo",
  "key14": "2QukZ46vNJcVfsJA2c3CwrrKvv3Xhxr3fmU1NjNgd4BUgw93hmiCPX1tRKHTA3GKjKqtt6icLuUPhYv3DTKE5GQU",
  "key15": "gp61DTq7Zw4pfcC3yHqXt5ktC1BnfiGZTqw2RP2vwJnrWtdraW4EQaRFF4zntngCLxBz4oHwpdFdkgoP6Fhdnsa",
  "key16": "4Fiu2hoSLgiB3quKtQc885wXEawSb7yCnABGiCAq5SoeUBB578ueyubdnFyiTxtuiefkfFJbX4tDRrBoXhYXAp4R",
  "key17": "5cEjt7h6jurpCFdjugeayV4oAS15uo4pgvCxD9rGAA3ieyitqr95qUb8juXWJdVynCCa98LtDhgUmdz4wsmbVMgK",
  "key18": "2QN4AHE1kuZs81EYJju3JoVSk4eL1NzSaJcbCWNeaariHk2Ks4JVqK2MVeL4r2ZkNVMKoSDrMrhCWZfkQET9FhQf",
  "key19": "5zUFXMs5YHdJFJnzHVm4MEei67taDgngYCVt2GchHYw8ocVaVNkukbyduu75xnLFis6N4GttXZonH9dnemnR4Q2k",
  "key20": "5agD9XcxiQUP7ExrM9JvqaLyx3N2mYLrANdmjAR6s7DuwDBtkwjqR7NGwi7hrugHtvWMxb9EAa4SkmrhVbZFbRD9",
  "key21": "28Rvze7Li7Ukad79pKqomvkT2zwjur8v8YbPP23ERk11VsawRAXufi9CAGxsXQX88CvJUtiaQoKbYCQStzpjuuiS",
  "key22": "3L6E3FeUtEoWFN6zDK7jbrcpaouNEhpZr25JzpvbuCTbjnzLGkwBukQkjuxGqtPYHY22KT2CM6z5BNkLk87PB2bs",
  "key23": "5eHzm7UALYtwq31p7myEiMHpLhPf9fdFhAAyGs7bwEmFXHcJ933UBvWqZLH5qBbwUMsTRs6dpEUhQHUUiPHpYoZ6",
  "key24": "2o27DivD4cGiKidKMMBQCC8hMxGUbk5DvvDkZEyAUEZr7ZyPPMsDg14sc3ybxCWnUAsH6KNepikXWy3mxd1N3HBk"
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
