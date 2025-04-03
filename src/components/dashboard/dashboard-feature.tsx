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
    "33X4PTRP3jepaU9VzkUStxAbh6YQXpHYmVMKsRPyL38xbYVPkxMPyh1U4nz5fqJLGj4o7vpnzZC3VvDQFJ387Nm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S8W4EVqQ6Loe38qYxsvZexnMRcTnrdsf9Fn6gSA2ijdxdVBipGfD1TBie38YdD9hDQAz5NDgwuctfpfoa8VhZcv",
  "key1": "2nwYLY238dKCHuDchV7j44TwWbNvNLxDZiEYVFqF2fSeM29veqzBACuUEzVNUjDRokA7jjWXha3uDiTCPk6PTr1m",
  "key2": "34fWUxnuS1Pyed8b1wy1fxLjnFq5zPNJvAdTqvtcA8a6RiSK3jzdzZfSkjSHJKH3eHZPtMmYiNE1HSHN2etU9ndm",
  "key3": "2VXBUG3vyANcvqMejSuyxv57ooej3j2NEyCVBctVy4VRU7EeB3fVy4vkppSXQhprV4A6EKsSWzCAv5CLZSoJMmNz",
  "key4": "63cWT6fR6NhAMHkytDZLGL3LM3cDSq6ssLZjEaPcEVvP5FHszUZSp7yJp2qbabYY7JAhmBLhRuHWwnVycmHRmjq8",
  "key5": "3ENNuwZqRiX9LU3U9HG6vxi7weyLh6FQLRjSTvnLJ3fdcECro16WHCuEmgG2BtUjjuji2CYWS5w3SuTfCmTXiBEz",
  "key6": "4WybwoUNktFDourHq7tdRXeZBbrJxGPizT3L33mfnZGvkDAWcgdpo9cdskx15cLcsFLBTP8G8kzF3osXdXXjiU5k",
  "key7": "5pKepi6r9ThCiPSqmZzwHyCctwTkLQt4Vn9JeQTxEgEgey59ot88PKdGiczTG3C34GQfjmRx6DB2BFmdaGSpvURZ",
  "key8": "2oCcveCkf6MbXYiP1RwdPW6ahCba87SUh7btfcexE8ZDLZfmD4LFYf29CSC2knB2Cedsn9t2nCBuRziAy7ZcuzQw",
  "key9": "tboAeBe3kD9j7L1Ge72LEgeydLKRUdShrxzfKA9x2G5NXdw6y1tYwgm7YamhzKoTGTb8yVw4Kf7iQGgV27hXxwM",
  "key10": "djc7mrQCpymHdh97NGKv4p1bZoSNYmXcBaNfjnfekttDhQseTg1aaWUDEXJwUTA8Y5yc1CNoCwWsbQxXNJg8fPk",
  "key11": "MZvpAxQVJtjBspAjpkKRz1ksSmSYsyzuE6TjNSxW18HQB95ybcpZ1tA5xkEeqw9GUD3HWP4uBAjJ3bXUCmgqpgz",
  "key12": "4q3xNbNmxk7AcEvdD75kPW8dKboshsdtkPQjY2Tpr6UNPai6sETb7MVzwUoabSCAcb3J5ULntnAuemGX1j1Qtzqk",
  "key13": "o3s6PN8bYLUAzcs2P3LnSQWpnws7Ka6cKcErNDqn3GNKT2EdcRGJdjnvsyb5hnEaMAedPoc9AFdG68EfsRaMQXT",
  "key14": "a8SL4jwwcm6f6Bvby7paEH5AXQ6AdokkzYvXRdbm9caduQSuwXTCLvPyPmXv1tpADGeY9zWiemp1wa51Y9zzjmY",
  "key15": "4b7cxPuJx7vvLZBHsnQuovoRt6mC2acNHFZVEjS7dGpg3h8sQcoK8SLAxRbuibafEkEWJraFFezLdxPBqoQTZiaq",
  "key16": "45iD2RFw9TDZ3yMqk4ZxyxFEC53aGbkjNkF88KrcfKVNPzMTUjN31vZSs7exHnugpxSzbVaGaZ9qVwYz9GgQWXR3",
  "key17": "5d6aafg4eCZm4JG6eFufkvYGmHv7myQkVgea8UbgAGifkf8FWKJ7S8r8xtK9qPeQHNG8bPP3FQA2vxNJL6U41Le6",
  "key18": "tjrm1nmAho3LvL7sEBSJh7KLBDXG74QGm8TMcTx3qzRdusUjzQnZUZsgpc24txtZZGQ8LiT8JavwWnYfpR35Zg6",
  "key19": "5h4UEZmjYaQeLWix4giUJedPUvqsekFYp5u6CTkHxu5Ddu3W1r895fxyoMHxdQC2LJExTDZQif3gigMpPjb37UCD",
  "key20": "5KNG4vX1vBoTQWHnNUfGgvxnPENVVWZYyKrNyeBnz3u7RMuYERjhVEiY56LFEqGNJV7HKHBvLAg9jbHCrtMAeMRr",
  "key21": "5os5gMtkBRm7iSkhvcDsmDYcUgPzg4jfjoiBxmGXmFaDoRRtoSH3QqvUG8rFkfNcxLNgCPe7NZNeGv5xTDFZX8a9",
  "key22": "4Z95qjTkrdH2vSbCPW8Px1cVXhvycgGDZeHJiR4tXrZy98TKr5TxW4GuLXv8ACB5GTywS2nGeV8Ujrr2BWq7i5j5",
  "key23": "2ZHqzf9cA6cGXHToFRNmKpqQvYXHVJhFTQb2GcEo6FM58GNmo9VccaCEEt5SovuveGp3bNa6XMrqpKQEcGJisATi",
  "key24": "2jLuyVPmWac2tRrB7F3W3wFBf6NfWM5bAUAFMCKoxmyXnth5svVKDZ9RKfKMtCAss3ikuvufvzU8tTC7JAaGgHDP",
  "key25": "3V8ApScR4YLpQLPumPxZVkU3jUhXxDoqcM1DmSeQ1gfBT3LWeHJDTeiGf76Ai9c83uBb69YdMMZwMkET21nbRBJN",
  "key26": "2T4FcK7mBEcw4zAPbMs9Vo73zvuxST8kv7Hm5PpLxhfgiaPW8Pqw2Qjoa27FMb3vhrqX4kf8Ju4BFT8JbNDeaDY2",
  "key27": "331E7eQp1qdigUWivaYaD55Ys4un4MwxD6xPYmxsrahYwgMk6ecpL4Ph9Xxwq3ByedPcTtWapbwBUp2mE4ESdPTN"
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
