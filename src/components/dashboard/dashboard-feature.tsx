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
    "3npfHpUVHfgg2AyHxvheUU6y2yKhbx82hU33XxqbfSuUxuJPbNAVo9RSVZrDS2ecQNoeW8dBy3463RdGa9iP8k2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k8cNZxQeLscepazTjDTQzs2AHQ9ZrQRkLf3BvnpuGQKDGCniABuKu1Kj37atntkQtaW765saJFPwPVXaFPPMSpJ",
  "key1": "3hf4cQW2sYLgrVSYTexYCNuh3QvcB5fuZaCeExwNzkTeD9L6Afi9uzTxbsk1CcbS7Gnw66YumtpsuKYXKU1vjocp",
  "key2": "4AVNoQXGQXysPyrUtwffRftSREbDPB7vZTo82jtknw1RP55HrTpgs6RUxjAEd6KZYbMiosMN9fNkST5SQhMPR6fw",
  "key3": "4QzH5TJF4PXam4zBdXbqfB3tS1TF4U94kVtatEXUchiE2bpLq12uRPyopkNmDQMSJmaAWJhr5JbcE6pAjAkJhCj8",
  "key4": "3qycVTs33SX7EJqVrcj92ysvRHrkcaQTo4kfFbCpfUWAmFMWixcpnPAHhJoUAVm11wbFeZc17i48s8SEtTkr34cX",
  "key5": "4ZmMgznQabZxPTvLWqeE4KqPovr7E3J9BLhhLWjrTBZodstT7LoRJ36noyzQGujVTzhS2wMXwDmuq8raNHsnAgvp",
  "key6": "3SGYPwoALW9JvZd6F3Maq8p4E99Xm273AQRibx7PwHdPT3eGsCinuhQ4EZuu5WxPpfhnH4WdMNyxeYokTTEzC1cw",
  "key7": "3cWXeVSwjZE21STq8NZoAZ2sbNwFm3i3mxHnzj7F5QVV4r1HVsxZBNXbgtgiGmmsNXYYj3c5bPBWFJNY4uHUiFhE",
  "key8": "5JjD62hkZJHWwU4A5YDKJLvwQKduXaES5RBP2VdGqMDWzMGPxdT8KRScMTpeLcbrCH7AnJajnAYqo1AJESyTTqau",
  "key9": "RhyugNdgqe7cKDdP22eS5reMGmXQL1Pmv1CULB8oHe3z1bx6NzZadjcL5wHPv967RHWifNvRsToiZMGhcvEFJ6w",
  "key10": "2UPqSEHPq1xpLUhpct91Jfkeb77hFCerRq2pDKQpyBUtxkDMfzrxMfAujqPGRecCsQbpZGZEaq49Fc7g66nKsN5f",
  "key11": "41cwpD3ahAbVBDTaaJpN7n2XWvFCQ2X2vuQsEZLhGEmCoTZJz8zqKFYkazn92YJBnsTzGDpGnmVr6ru5sHoA6HgL",
  "key12": "2DS4ZXoCpPE1RsDNmygZvEK6VxYp8aSERqoSHX7jVnAoP53mT5CDuwj2X98j7p4bhVxoXfpaDBp8RvTtjfqNbvHC",
  "key13": "2PXYy7fHDuBsPtegg9tpx3FYgMthaSNVMu15tXWN82bxtusLmWzBeJx8LuFc97NA2wMNwSLp14xX2QJwVvB2qMU1",
  "key14": "fuzKtUErBP2p4sYFBfnbh3XReQLHDTq2aJpMiuFxRrC7YFz2n7UnUXr8BJfNxb2N4bdyCbFd8cnSvVwPZETUSJ9",
  "key15": "326DzJDZTgLXSL2kg1VTWig6gsk2TsyfLwE7XgdqCY8YhqjAS1Jf69L8tQNF2hq7F9XYXt1kb74MxS3DjiXeBovf",
  "key16": "5Qpvygu7GEfLDUiMMS6ZQG4Bd9fJK7HWBMGPmzydL17ZhyYK6BwkgxPYuXNJAZDgzGsPXjV9iJocE6q7quaeE9Nn",
  "key17": "44m3ixXw8j2Ap7YYEwucq3KtytGie5bhud368sA6J2cHsgXpwnj4X6BaF9YWH7gTWQ6jWTx1TDv9tuqaY273B9Jp",
  "key18": "4VQLKmebfvTtQqeHvxygibbDS4dSX75NY19ea6cACF9UDGsquMVfP1BcoL7j4EEaT3BHrwi4YMXYTTzcrFJyU2um",
  "key19": "27Y6nwy13iKfVqu7EsfBqogg5cUyFstQijA6iN4XUFKsAbVipbH9CFMsDnkAgvDpB7GF35KSE5M3dk3yzjGRja1m",
  "key20": "5ACy9WfVpnkJQFiXoF38qy2mALNtn3tDjCWXwj1HkCrCxxfLV84x1ES4sJxyYtWbQXXe6Tp7E42pkxfwJXyRRY5n",
  "key21": "N3RNxFweVBJU1ECxupG72G5frk6D8eh2uJjon1Q5akF5X7GSBaTKhfg5KARYcCYdrARrt4iDQ5NzKJFn5uciqvh",
  "key22": "8cHzdpe6voYLFcVu1CrSi32jAy241gsswPqNkdjjQGQpd6E6iWeC5pWWsbG3oFV9877Yg66sTmjwGXyP9sGDB7G",
  "key23": "4F5xpuCRUgRNpjth1ac82oqNGT3qXSPxhzqa8E6yxyKdpnbrV9SKmdAC9j2wkyJsnRpHsXtCgnkf9URzQJTZe2tw",
  "key24": "29wQhL5fuB7NVLs2cGmqTc2kTVnJs1VxF4ZGskzV5PBUs29TbUL8ibCRndxwRz8d8g1gzRfCrkUTdX7hyxFqZnKW",
  "key25": "2LGje21B625vjHZJA6NCDRoNZK5YsKxZzyXYeF17KmpPParyQD2WyWP3WaXRqrxuoSZ9fF8W1qLeG61E8HwJt1fw",
  "key26": "R7G3mveQVWKqEWpDGrciudPdUHTpL2U6ytbqaN1mzEh8jWDfJSeSMxrjG1dJufr6RN3MYv5NzdPs63nPruHqXEh",
  "key27": "2nBWZpjfKinjDnuzSPNRdX1deFjn9qJmTSNx9qj8pJrpUQwK8FYTt19ApzyfRvF5xSiBVhUrioeCGL43fdgWXAym",
  "key28": "5MEbqk5dQyRh9AXiByDBDPy4ZooriMVoqcGnn7883VBCCNrFv1MAcyaWZdsq5Ny1zAAypustQzn7L1rL34oh35eD",
  "key29": "2rkUTBhB51pV3XAkiNWAbVcpXDuSGzdrBrKoLFJwyJfGSZKWdKMWuXGtkxMKRThBxQrZ1z2Y2iX4TXsxmrrgawW1"
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
