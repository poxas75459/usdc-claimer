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
    "4v4uobJmdm96m5Gn1cCtc3Vdg61ugoHSu7wZVMmXXqRdsYTwTdXz7a4LVbnrkSP4ngwCvF4xqunCHHPmo7gX691K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AzLMQ62BdD6Ue9D33m9Axfbdp5xhKsNTJckBRcoHwHuexa9x2Y5MwSffGxdVr6s2wnDsCDukpiDDwu8anrqkDkq",
  "key1": "4B79w2XHNUx8b3hRYqg3qqNqN7o14fgocvo95h2BfEiUBkbCPkKhbAoFVPdcVBvVDPZBTLpQcRJ2fJptjytpyNkk",
  "key2": "4Zaz1g2dRqww3donsrBDzEiBGxu3rXCtM6hvc74YpcWPHNxq6m6VekdBcsZ7RFNm613c2jWC1fpYuBfEJNmXiUrt",
  "key3": "21aagWXZaeR1fX2cb8Swc3i2q7icKF7ijbmZQutnhENJpeNZj7Lxr6V15xcvTrm5yLbhurByxB754y8YdygY98wM",
  "key4": "5hd7A4EWATdGN3i2EzKLyZTbZgGgSyLqP6itzn6Xuhe88uwmXZqwqvRFPn3K3cKbp6D24ccH6TDfJUndEiDSwhYc",
  "key5": "2mz1VkrzRxudaXHCRWXjd9DByDtZNvcFjhNJWwPqwqFuX6xMoKzFHCpW489UWtRoJ6Dv9AVnup9dkwfAFb8GRMLW",
  "key6": "4KWbP55oTqZpU4FvjsFcQc5cRgwzEFsHJuKFTskTpVpD5Kgf7NQWdxxjjVsjtt5BcUmzKDjDoYjBTaYAGKdpythJ",
  "key7": "3AdNJWXEp9CiBsouwmtsCFAdkSZKC7QWRrCvimEvXUW84ecdNqmqYitX9KMXFMU9j1TsVn6pCUJW17kdkQpjG5FS",
  "key8": "3WeeJoZBpppfBB17HpPgV4hRLCQJuiKaB52hepwrXwvkxvvryNRQsWWdEuZrRVMEYxi96P2if8ToC4AgE6WUd7Xb",
  "key9": "3y35MHtuc2F5zNtBpmQk2drKycapDF6UecRZ5G9JeZgjbuwCs4ZNq3Mp4HtzaQSMdx8vfHBnA7jebTxKcP7CasvY",
  "key10": "3mXDDqjsSdcZdAuZ47HeyXB14sZd5AkBtvgA5F9S8QgJ4QY6xSiAVd4KKboPwP7LVMgaxcmtuVP93eJ73j7tTTmA",
  "key11": "CjoECTqRmbk8odng8ySDzzPcJirYGSyZAV1nPQP9PJBfKr6wG2chNAdsWmQhTaiTxZCgUeGmEQcsikhPxJQvDMK",
  "key12": "4ddkAW29HomVqam1kTWW8Q6TcPfMBTQFbg9oX7U8aDvSYXA66SVD6FnHGsJjXviLXw8ZhBRX6ateXJnHKbSmFFU4",
  "key13": "MxMGkj4zMZX8rVtb7nAtjjoTx5njcRMLiKFthQKQoTi4JpLcE83SVKduutTjZixpqS3UE1Pq7Kna4Rk7fPRwmrH",
  "key14": "5xWdeqdgdDCT3S4UP14xtADevyY4wDjoMUpn1jwVTozJAVWihXHT2iKu9ZMuGXhYt4QYDVqEwT8K4YjA2ePru8xQ",
  "key15": "5gLU7qEG7UX1RCDFnq65WeDV3FXqm3Cst9GTtCJ9p46b3bsYDqPHGhUnR7r9k1yZof7hYeBKNpKZh8FgaE4M2qey",
  "key16": "5hjMtGjthPEw4MMxdbv5ozoWJvjQ8YEie4iuNVVAhXkTav7qqCropx5A11D9Cp84taxjRE3RfaPJzU3BtQYzX2YF",
  "key17": "62kJgD6y2gaRproPxMqmWxxBSxUxnQsEhZ2Np3KAXhFfAcueRiT1jYvNQvyoUZdUWDsV5dgPGQtz6gG1yUVAmgM5",
  "key18": "3jDkbq1bWfNxzuwZxhR1oAhcvd15AjHb1vMubppaPfvkiU1mVg61p8YT6iw6gNthishpjdyNHvnGAbfjofZvsyRW",
  "key19": "TYwtLFXJ8P5Q3T4GZ86ia4Fk4Tbf6VYefW1wm5rxiwc1AgM3ZQFPGr9j1xzL7mceDwHi4LggJLf1iYJXhejRfQU",
  "key20": "4K76ZDULfcAFVMbt7Aia9g4gHDgQsEPiFBX7bR9fAMzFCYPPNbhxdGZddgDbFeqNfXJLQW23Q8VryMbLePCjTspq",
  "key21": "2R55aCmdkQbrZksFbsUMY5u1KNBPtiADnssskSjoXFFPmEupDTkoaXWDvukjgea7R5LFNVa6uuMS2TGgFgwLdv31",
  "key22": "3hYLperGP4ZExMX6oVR9mhgqeCAFgGGPqsgs5Ve21UbBs7UbsPyWk74qgwMEw1K37cXYY48Hd3E3mSoX2ByD7dhR",
  "key23": "3yrwL2jMiTktssuFHRp1PLwPsZaBrCdescaw5VKfKD7HLcYT2c8YbJBttSKfvGnAdPMVqirk4DC6W84HgsWUiG88",
  "key24": "3g7TwJFhtAMQNFAEdsfg5TZDrx2qAgNCoiBtR3LApE9RYL31yxWXcgvGBXLKCej2mzjk4fmYYU6cDhY6i2ZgmMku",
  "key25": "2JNh1f4Yzvja81rxUnAJSuwTkMr7EEhrRWcCwyTBEQbBByqAFY62KagcK4TFd5WAF1E5rbAfbrZeZ6CXbN63qXiP",
  "key26": "57nbSmq75fge6vxG6ygvo8EKiYawniQNk7ZrTXu1Tr7WfcsDGECDacGVSMG1bCFZJd9L6qpq648jpCEmasEWPvf1",
  "key27": "2a97LSZvxCMD4NB16uyFCrfCLpBVWEZhvBYJqM2v6GjYVJfTJ9d2maDWCuQiFL5yv31HPR3e9U6qxVkiZoB8se4S",
  "key28": "KLgexWX9Aa5EzrQKpJcqmYqeNaQwEhKfGmoWXosEWt8KufWwCiov6Wr7jVUd4wS7GEmRxzWFjavHhYqAHoEjb3U"
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
