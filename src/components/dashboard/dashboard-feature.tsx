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
    "4RfCZ9u65wZoKqPRRqNKUywqGVvp9NX1UV3igPb2dHuc7EWrZLzctgu31mmi5DphC2nd2wiUgtCR3Q7iQJqQnHs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1rUjrtUY2HvFFx2zJty7QoBN3cVE9xBJDBiwrVcXo4FSSbHMNtFHwBw11TYo9wQFMsxSkuyLo2QgoCTQjigUNxh",
  "key1": "3DZs6QgfJisDUy2K6mFpTbmRFeFHLmCPLiCbuo5EVsc6E77q8QtzWuK4H4SWbFJNxy9stqrG715zhKLvVbXpd2x7",
  "key2": "2LNs7jfWNXffYWyrT6rb5or1zA8UcDSZq9YqwTCTXM94twbfD4GTYHeivXEq8XiHZBmzZJEHGeQczMhZtWwd4ydn",
  "key3": "p8dXSsEpvsTM78NZ1buv2mqNuFUNTeKi6Jb2icEytZ6FodLt6y3d22EHDcPdkX3BYYzQPa3aTKffQx6z6Xn9mZK",
  "key4": "5DFiDWRnBuig6oU1Xi3xUdUiYA2eBoo6R1suuocTqhKHhU4vUGjZhUf6CoSFfEwrT6vzPZahNGnBt6pi7tDxkvFU",
  "key5": "4gaTe3Vm9DZfZygPdD8M2CbPZyDasMTWsgwv9kcheVVPd2kNzcYRkayTDcwdBYxf5SH4H3yXDQhRqj5Z8wfDgdrG",
  "key6": "2jArunawJnRaUne8sEWmQ8FWbfNaF8zF34JFaozemXYxJPS2QWStgr4s5o3y1t7vfPXyTvQUrDrLM2CpG6PuccVk",
  "key7": "3DyL65UrC6ELpaq9oEjVxpVxts2jD7Mr5TjNGNGRPqUaz6eebnLpQKofjcK9kqtVdAKVg3aCCL8YPANphnVNpiMZ",
  "key8": "2fbCFYWQYoYsRKF16mUEWdPCPR3LHpPG9e4UJ1N2jJcEwgbPNuWmQMSBgxmzGeSYninz3JGYhXdJwCGJNPBFiJnT",
  "key9": "1hzfLg76YPs9x2QYSUJKbxVhxzsdYSUkrBAMktuBCyxEmFWJLUsd1Td3NXkwgBL73XEwgeKQwsbUqeaEheeLGxr",
  "key10": "2wuMdg6dCghz5wB9b5nAUNW8bresPaSAdEcCLvTP9HEVqRgwHDVpPLPM62WsF5HjWaj7hNVLW45cXR9eh4127hzS",
  "key11": "2GUgQdC4mrL66tWwGdhnrPayeTHU4G9gmyERtfzx8qNZvwxoviun2PLRctt5RERdZNPNTkobhhb8jMbeuwDUeqKp",
  "key12": "51szRF5Epfmj2o3CsAhTGPjg5WeR4gLBxHkpNU5L1K81kaThPn56z1t78jJ49btfXLJpAqcGa2hKzDEXqb6RMtem",
  "key13": "5pH4cdDaoXhzQcnhn2BM1mqXav4FxBEN8WQXXwhhTVcnnN57EB76UtRwLu5yYsFiXUZcC37jmW2XLfB7aEnbMBoa",
  "key14": "59zBnwowHRXv6MkHxUjYRZdMP8yAKv6An27AKeZBXGbeqb2PKgvR8sWo4Y5zT95G5EqQKNStdjc9HHhv7DFw2ja",
  "key15": "2Wu4QbdDF8D5KxTjquXbVSRzfXtEZGgDvaMfzQzdk93qrvtV3DYdVunWyuivJwwbEiuJn7U2JmKmKQKYHq8Nwnqk",
  "key16": "4EZGTvcDunmVZ2QwcpaEGsFwoJvy3S1TBDZi68xyLz8krWVBZBXW9n2zBDZAsWm5n9AtbXsngoUVn41zniCtiQub",
  "key17": "5Fnmm4xccgKwnJWuNALHWdQ6aMFXJHFg7XA7ubZvBvDsZQiLUPwgc4dkmgwFCjmRWUA8n5L3eupH5ktRAaoAtsXe",
  "key18": "44Fp5As3dHxxrX2egAbsztC4msNC4N5Ksbyx68ckTbgw8a6JziK3V92yfXbukJhS5VR7h8x8FXPWKgw1YAi6vwk7",
  "key19": "5RsUQ4D7YSwuhTmHyeTDgf7Q69HgrJcRULTotxviBPVgZkhXG4nco3ssuZNVwDkvJa3ayDNSdE8HYQrvBM4aSFkV",
  "key20": "2dRy6ucKnTVV9yEasp3rkMA8L9Ub3S7mpeG6PzUBgZ5BWTeGqHjxcSDbnCBcR4PJbpusFoip3nk2yCXfy61ctqEg",
  "key21": "3xNa796PBbDFVGaYF5zh2UbNYep63xH2VUd9gtwN5LKiwzesTAWNvAF3bFv38sVrMMzNnozqbKpYR7BLn9zpWK3B",
  "key22": "546Wma9ydqK19NcpYNRninoAXPCZksjoFFRbUb9AMN9QrerNN2tLVYgqTFoB9FYpGFMzCtsWjxKvUHXNgu9B9BRm",
  "key23": "BBrsCajWdTYvAN8i5p7GrkGqhmVesFtHwh7madE22jv117X5f7JsRspgRz41vHbMFf1aCpP27tLyePDsqs3yUXg",
  "key24": "51kcjXT6WBdKE9FK7HnDZFcMVzmdTdVC1AQutGLkGEcDCpkcWeppdw28cgBuEQB6hEp1BpPdEjT87fvZKeb1vCtM",
  "key25": "3L9x4DwxxVM9or2wyLNxBxtEYUMBwRLwuBpJzLq9cTeUt1JwUEpigDL7phkWCN71sg1TMTG9XucWYFMhaxQnk6dC"
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
