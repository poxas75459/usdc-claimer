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
    "4FysYg1GcCYpzYejUAVKrXFLgY26k1jxTJkJHAx2SE2jHHGaPSkE1fR9Y2GJiSNw2K8kit1CXerr4oGPjqgQpXCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gk9PZbPTLWahjc6hT6m4MAf8Quxnawkq37cN9xkrbbV8ai4CaM45BTPt3PNQ1ZrA3kQqXzdZ5jY1Yg6TgkLbKJ8",
  "key1": "3mzK43VYcvvVJE3Zd7ZGNZC4zDCo5vniJ9giWZfpA8LZh6X2GdVHpwFZTHBmh7FY2McaFzujkcZrzeWU6fhjnFpH",
  "key2": "2FuJTmwDAX6RHvCehs2MDtAvESdbG3QfQwCH84pLFysDvgbEvEouQCfyjHGzB2Zg6jVkPnEwdk2Z1JoLHLYQhNGC",
  "key3": "3BavUX3ov25K7HALU2McuczpVJnHWG5sTw5vUsnY2ohPFeb59ZJtNtg4ch6CpjdrsJoSostWBPzzAR24ggUW5Kr6",
  "key4": "35uRJG65YT83q9SyjYnMQYNnHssF3Ntuge9WjCEhxYYWJxrFYgrQP6vf1NF4UsPcaMz5p1RiHaq5NvuCkNEZoxvk",
  "key5": "q4qH2cCgrgno725CvJmZmpc8YyYLo3GxZHkuyzSkd13SdX3UnDQEW9pucRSGHCNp23SDPZAS7x3j4BpCXg7AjbD",
  "key6": "4YuCpNbWHYu4gD5h7as3BoVK4eDLsGaJXg2W2o7HU2WXP21t9ugEgGW25zWEjLL2NZ9fE1ZumVgteL1E5aqmkrmM",
  "key7": "5hGyaWdcxXTVSR6Vg5tHHoQXxTPcwPpF1pbTLfRwphAbjHCZjQp4YouYQRQugqzNeUrfKRNhPdrLWQbbfaGAqR5e",
  "key8": "29NAVm1cS5S748PNySszrULXVGojQ3g7MbP1y5Hp9W1E1SLDQvoR2bpjwj1Ssnz9Hophqo8tmGTjqGrcEpJeE7r4",
  "key9": "2PnGG2vbYfBrydmdKquf5UG1qWkyLUiVEK41tgSW4jkKMmv6c3t4sfbaqSmQ7MJfgrLh3Y3icee7oyJiZkeB8Xsp",
  "key10": "35pncNVPKRRcc43F843gfPhhfc6eQWry646tjkPSBM79ASPtBwrys3AkpBx37Skxo4u1MGPgux9X6UehGjmqRNPU",
  "key11": "358n19inwgXdvAcL54DoPzWyM43RBr3ttu5j3Jok1baqepuyXdmKfn3TLnaKJJgLAaujTqejkCPhqTcQAXyuvvfz",
  "key12": "558MwVdC1LF7NsK2x4xxfuyWEsVXfUHe1cnkxvWASRa3MTXRFmTDGXz1JiMAwTp3yHRbcZGQUw5bZQqSvPX5vtvg",
  "key13": "t7mmvYSxSmkMpsj23XGayDH5Qc1eq5ftc4aoTPKrz9pkpq2E6AXGcUeusoyLkcYNyUXJ3pKPwkzqKd362TW33GY",
  "key14": "5i6yWAn3j9YgmPe6hmUpDbMLnT19dmG354pS6hog1WgCgkpWewcqeiDuxsn1QK4k3SjSRGDbvZ8pWR5Y2gJyU5SN",
  "key15": "3NNqeJeQXEMG2XkBahhvS1y3FwJr4ix6eVMFuoWdsUL4SMiCrwyfLtJ8uXRppYnq9f3S3k6gADdhcs5SFsSfzZLs",
  "key16": "2NdjQELnzbp74rpy6W4rowTtE2pynAFn6T8BhY4QgssNedDhw5BRqi4ux9qw2CYfQN9rc6aUcd92D5ovPKRMyeYR",
  "key17": "24ufjvA6TkoNhWbax28cr1qs4PuwoaTLyaYcpZfBxTSxLii7pVHDrpZ3a3cFtwKvtn2rfumjNzWnH6GuDrTEQUgS",
  "key18": "2JFCJReQhgPFXmsrSpaG7nBd8bf91vGv7WvSJQThxZrLkne7Zpu8YLPTtztZeq3oLxfAabT2ZqHq5SUe8A7JT7Mk",
  "key19": "2wD7Kt5Juas1YtvZYoLojx6reZaFo2xgM5fgz9wLefreimw9PPnfRz7GT2975pYdEmZwzEhDM3dz5vvhaDCA5iYj",
  "key20": "2gcgAhjFCT7M3gLTmpcpmGTz8UJWyvdoYLjG1sZGVfcZS8QVwwNodtxroW53ygNFbx61KBMzQVQhauj9atcVkV6n",
  "key21": "41CT2BEjSic9KP7oDovTg97PCs5iUH9qcbQyRooby5uS8CU5LKYvdHoYCLyY3g3J5vT8cqCWrJxoHUZPMv7x4d7r",
  "key22": "37eyFfE2DY72a5sHUSNpUQzB5imTyp7LWxzLGGmw3Q9HBWDnokvwqwiEVUuGjtfQ9xobaVvU6Wi4vqjEPJsU6KjG",
  "key23": "2it2AQpXM1dQkSFzRGtXLZSmTn4FWnC681uA9u6dj3cmKd7XKqXmXxAcDdkTnkLLFeHMpdsfRWeLVSTcMdhwQ8TF",
  "key24": "3qi435GZJtyburzkUvuzsAd3saa5b5EByApsmawy4DmUxck4rjio5FKhXNnHfQWaCL8fpz8b3z93RU1SquBbZW9J"
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
