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
    "3VF1BkDJjNsaHvSByofnKGYM6dUFfVhtmQnGk6D9o7HVPk7PMCS2KBgDC8vexbzDdCkYABDsLTDadwbUwvPSLojc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EyHPExfKz4PKRSdr9bYznZmCYN1E2EA4gpZC5m6xGEJXLyAPN1SJJ6rYwVjoF3VXgw7FRFRdSkMaHoFi4Zw8vLL",
  "key1": "31pDrqzEEPExVL68mEncAD2dWNVWQ7xZCURwUdZRJ18u83G5YwG5KJDLst2frmZuTQwF1K6nmVua4MP9HQY3FGZE",
  "key2": "nzbYrxnhX4uVwqfVbtmgVVTXukLUF1Db2KYaENLfMFBoqeasMNbsWMoKk4mNvsscjFFC7wEvxk24xQA49xeSnwF",
  "key3": "5B2Nf6ztxQaivPNrwq8jsE9hqNoWaLfXw5k9dmMPpTtq47Vf5TpyzTE4xo8RZM1uezfuTFUQ8pg3suax4pXMhSpD",
  "key4": "3GFgCCbMhyVwLVCAfNWtYTgYSPqJtwLzMvF4M2aGUK1o5JYga7dvygnTojX4wTP8cyYQ1uJBHJcrTf1kUwL8aMSu",
  "key5": "3WHscmE1CEfX3ywCm4XVQ2DvZN8cutB86XwDg6ZzLoMwHRnMYt2L6DhJSkbBm3SCfcaBXtdn4Djvm9HhAEVR1Y1S",
  "key6": "38UAJqk561E7bvgfts32n2a9nrFujVL3HgHUyKCNS4TRTj3D6TmUk6Z4UfyyN7pqWN5cBs4KQvzzH6B9J3i2UZjw",
  "key7": "3n5yXJkUGABnWgy9yY3NGA8XzdqvKNoGQMroBjuNS2rDXPiNuseVa6LXWsEw7hroHekAh1Vj8wLGwxfu774efr7S",
  "key8": "2LeasaaykY4LhpU3iyNP5MyBFR3BLb9iEW19S2RekKs3YJAGMHFEX7uZ8V75q4WoHUSrgFoS1DgqNXkgyjqw512G",
  "key9": "5YR4uLqHF89siZrfMmbnCV8JZWz7Tvjk6fZuoWsezaw2cRsY9mBqDgETdCxdoVGfGu4mhDQ1tjTGvW4XNTpHKJ33",
  "key10": "43dLsSZWak4SnMVW6B2cgFKXerX5Yw5NKXT95rEEx2Jfg14CTY142dv6sNejXsb9gXyqxBkkoFHmb7aC1jZuJtJm",
  "key11": "2wrBHX9vmjQXam6BRion1qWe3ujLMKXTw9eyTnDXxGDJcAZACmDqo71djFLJsFUMorbeRq4hBicgovNsWRSdaiYL",
  "key12": "YS6GA9JGQqirpJBFzDVMwAaUq7eBEkG87ZMw1YqEUYVEmkALjybn2H5gVVqXNRdtzwFeFzXB5ui5aayjoZ9ufz8",
  "key13": "TPG4HYJJm1vwu7FG4xBU1FCyixC7rofvAJXpyMGdVomyRSqfwYp8BBJc5DxQ7Ju4v9P1cJaPetjZykXGgPu27pn",
  "key14": "2u64nD1qi36fDwaqBpFBeytmvBEaApLizrZtYdEWYpjzffLWcXNggChZiTA3UYLJLjkvH32J46JmviSbaAnD3f5B",
  "key15": "4ztu811Z3vn84hdxADkqU9ziwKB6FYaUqk8822bhbNPX3x3EN9LvqbBYzJuBXVp5iehcXAQL182SR7HYENZTgNvR",
  "key16": "4wszd5Chsf7ntSL1Uf4LWKhjVhWAwwzKGdh393xrzt3PhfwR6KGQYggf3c434bfYYLf4qnHP654M5cSTyN9Yx1qB",
  "key17": "5UhtyCF6XTYc9MRM4P47BYxtgvpU3sDR1nwh9tGiAvYPNiBNssfYCUnhCW23rn4ojYTUZHWJSmBTBdzDQ9AeLWaj",
  "key18": "5TrKRGhakMer7BzBVwYSWu11cA2SnQueSMpyKx7GYHfFr5JSTewnJat2DbKA58R6vustR5kBVfWqfwZ5TyoLN2sX",
  "key19": "5yngF6ErHiVLYv6Xvuu2Hm9cHLSgZtJYY4YHM84fRcBpNfCcwPbV6B9TBjK1poCDqEr583VNGJdRX6vDiLDWf9jQ",
  "key20": "5Hu7dmmvw3r6sHpofKrZrWU6H999XyrSz2amq41eveAQhZzHdJMU2vqJbkkhDf5ABoNpZhK1fGtsvHJggazRUeR",
  "key21": "HUooJwoGaNnVS19WMdyhTeLGPHug6d2etVu6S9fkQDXdHmmyf5XseKKjCjR17jc6RyxqtCVxddLwXg4ihymHXDT",
  "key22": "3XHRDVSRuUZSaF1XEiVDcJjHcSZDFTq3Mixd26mRCEnf8sL1NDy2mKnEG4mcpWzGeDMNSXd2dLz3MPDKP32q9C4j",
  "key23": "2i9qQc96dhwpXcioRBg98X8doR3N4gn1HZ57GVe2HEmJF7iBomieVr9qLnppJJScyVHXKj2aeJR5LmSexPDmeQB2",
  "key24": "43L31voqve877VFFEGtp7qRhGxwoyGUsgBjr8vpidP1LwyWRFzts7x2d9wH8McR9BNAXNdXg8j1KmoCGnkNxh4FW",
  "key25": "eXBCApDJTqLko2Y4QzkJF3JU4P58xGgxiq3JCnZz3rdJ6HeUgbWBy3vYRPdS9hvaPd4jdZAxpkuF5DL6SGPqQ6i",
  "key26": "5NrzEjwgyWJu2M2bzRUeESu1rNc1GBZ4hVe3yuJjHnZ7ShFNwwo2Db5dx9XmxWDyWpfLDgoXAufXgX5G7KR2rqTZ",
  "key27": "5x4emaURPTbM7yBM9UoqVYTNtG3UuJ8ktkb27oLQd5gk1f3weoe6Gqm6CxKHpLo8ib4WPy8eWbf8Aa7kU166WjiP",
  "key28": "5J1Uz5dBJjvSLJxqsdVXMT1pggJFSo4H7YwmDj7aa5wGUnzmkKJ2hXbzhEdn2r6YjkZYPTpZiE4sDVmQBN6EuyLE",
  "key29": "4T3HpvVMGadTtqKPT4gMbMvxxKis7ycxxVRGqwKMdsBmpTkcXshj14HExJuuFEG19iEvAf6ijLRhid167ZtjKB3J"
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
