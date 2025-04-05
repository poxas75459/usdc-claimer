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
    "5FeH21ZTYCw1cf4RtJZ41fbvejMzCh2hBm2UuMJGq1ZHfwZzw3RzHZMWf8z8MuuXDFCT1vevGCyMVySK8Jc5QSNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qxDkrnNJws6oM4vPN956cZzPWL2H8hE8MNsR6j34c7RM1esW5sHQey1AC5sK9nzQqwcHRZAti7NzuaPfp3FHc2D",
  "key1": "65jScFjybwo1aNeMZJqq6K4dxN9t4V4G9TfRV4oNUg3usGKRehc1XXpMHguS1uiSBo8fzDCyy1cCVg9XYs81WaUH",
  "key2": "3pxy1Ux6GT3gye3NUeMJtmWwqk1qV9fsmnF2FvG1piC1oEL2a3ZZX4GV8kbpHLqz3JSWQFhuaPQBWJB5PqN3nesN",
  "key3": "4ABViF2sidpTU2y7XzEdN43YSkeLDLLpitbQz6XenA3hyvMFgg96bp9P5yKdwCDnfvaNf4oUaeZZNcM8EMNma4YB",
  "key4": "2gKWkaPnX7t1oCoYcFsaxtXc9tvsKKH8EAcd44A9s4dmCWHki54VuWDj8nL4Ks7cXCfQUnLtTw8HKW6TXf8hvFPz",
  "key5": "2vJWXUBnEF964BsHkFmj6FHpFvJeptHavzp3t9YYReNPm969EPHf4tUHbjVp5Q81QWgfhZ5rvid33XMn1xEXAsDZ",
  "key6": "3EZNvCnihxzrKBdNrFmxGhFAdwochSR9rbnEEPiMuGim1ZLrHT64UtikWYUfkC1WT64fuGDDXtc6F9EjAtfEMdTM",
  "key7": "Dh6LqYLLixnGQ5zcS4Ra3GHpNKc6zb1BA2ghVH2P41gjVaF9D1qcYFnET1YNmyWaH7siEbf6ahQewiK5eY2KTRc",
  "key8": "2GjritmCV2pNia2Df8LoaLEyAXBoTLRcS5ytB3mGnxvSmjeT6cNobdyMMomtLXtmvdSrAo4viSTDhbAf8CaMBzYn",
  "key9": "4X23yp5RhJ9LVcMm5oBt7BigiEomHgqhuziR2ZtT8LojWQcF3QKniWe99eaGpPPFQpLsNJPAm4ipGK9s4RDJbtvM",
  "key10": "4avY9CZC2ZUvkbBwMTqsG5KhfNe4EZNnErwKTVbxhLYUG5PmQUDmYmvUSoqy16AGnY6WvgWewcTxzc3nmgUQnj7D",
  "key11": "4TzKcQWzs7FyJqsxQBmsdxbV5gaGiMp2aki8q1aqMyACrS4DRM9RCjghARbaN5jg1AGeK2RyGys54XAPxjCmYmQm",
  "key12": "3Vj8Str1VpDwDzd7hRkjYMUWPQtC6qfKXQUkLqn1rLbZUkzTbjciNe3FknQJNE12qAVWPuPX8asj9zAERF5Gtwfg",
  "key13": "4ByTAJf6ZWVZE6Q4r3TeMTpzqmMsLtbMtXBn7EDTFvmhoYC7Ubfgef8Bcw6UBCMoRfsppcxPYYZBofCXN3TosV4H",
  "key14": "AC71mq8qh793SHrPWHsLmzKFFG24ps7VNHvaPuBdZHwsQcHbs4hMG5v34EEddFyx8hWcAjqNU53WCLrrANHnsFp",
  "key15": "57MVCddMCgTnG95KLZHNreevsNwz7cD6fbjhojvw1KRMPb14Zh9pPLQtynRMJBo9tTrEAuS75n2UwfBfd6VAjmiX",
  "key16": "33x4WSErh1C38hZ8C7ZgW8jwsDQDSsciuEmbDHNFEQU55cxHLijfbSvEoVYC7ZcDjGmGq7T1zjMvLQjgDjsFN21B",
  "key17": "NSk7T56WM3f8dxrYWiGYnmHsoboHPKanndfWehvT9s4jAWK21n349dvBi5oiiogjqEsvAhuLwX54MN46sqW58kq",
  "key18": "24Yq5VsgJUZFth11tGpNQqsoQYfmsCnFnUg1zLBfjamMc1emD3HgpPDaEXb5zwTg8TjmUyiTFYYhc51xQYbjQcTj",
  "key19": "2P3HsgTpEYyzjJWsZGXhbEPkvsqW2WSerY8ZMuabvc8v4p9UfsCMnKEXvSt6hdJmAkxv2GYvbQ5tSRHUfZhTthoY",
  "key20": "F6W5EXs2tNUCws9VfUh9d4rpyNVNDjqp68g6gGRmergQiYXxzUXGJoqo9X4vvTe6HHNhMk14DZZ7c8adm3P5v53",
  "key21": "2fh5C4hKSabz31g91ktJyPazCbbEb8sMSN5JeHfDduLVdKq2kQkULhLRApzQDGEzJ5zHmK6bUu6MNXN6b5FdrMHB",
  "key22": "39ZmUTF1K6VLKJ5o1otELxFkK5ew5SS6A5VgL57A7XeRtm7b3YHyU2uKhSdUdEUaY1eKQjqXeCepht4UR8qKrLav",
  "key23": "65oU7JWMFKjyhvtr76d6H3NCnBHE6gP9RUopcUDdL398B5ZBhxatX5eBX2omZhDau5yYVNWRQVJtZ1FmNwmfGnCb",
  "key24": "3fegTzhbE8AMabQKTMzkrCaqLgenu1YL6HsEia14DM3NY4SMQEGwyteESPUmVkYq7N8QYdf8hfzsRHPyW428MuXK",
  "key25": "3aMk3MoCGrrMAVrzHRKWEMUiNZnPvTviupKgWnexavZ5wZsG41SLHr5pkcEJdDpSJdCWbHPDRx6FoZDPjUx4Fgbq",
  "key26": "5T8o2WzGAFTUTeh2KvnFphiZT2u3A7vnM3fKt2svjGZ2m5Vb18JA5UZncufDJ7nSss9dSEXSFAaRdmtK9fiU2FWE",
  "key27": "2VrNXamFpfFUimhzT5N9yKWAHg4goHfVfzR5eTeFpZJactcf98stMYbcrAUSt4YFtvWsvUk6FggRKiGT4g1NdApN",
  "key28": "333sBN5qg9Cy4oj7bWfgWdaLJvRKwfgAZV4gukyUszT8inECgr16P2GjFWE4LE4VRtFRaDpNF4ztv6jGcApJnztE",
  "key29": "nKahzahUdZyUFhkMLbJopDRkx8LNjb3XG3xtbXGDDw1VLwX7ThMPBRmpd7bU2GPk21a2HjEGRxCzBqmXCPS1Y8V",
  "key30": "4ZKqcobV2y9BqUeyMvp7aUk1eT8UuAUK1tBjxFmyWje9zCH4JpD2cGzwX2HrFjZ2qSiseu5nVXtsz41AcyiQojpp",
  "key31": "4ewajEXnFQfcTCUHxkEdyxSWEhmFRgRXpPdGee6fYtBwBjE6EwfKpz7zSHZVGCyvhy6A2G4bKWAhoe7GPGkkpgki",
  "key32": "4PuZ5kdEHr4PoA23mBYJkLao9T8FPaqt3twc4p77xbmURmCbxWzQfyH2TEW9KatH5wdFeZMaY6yvCgSsgBmQDroK",
  "key33": "4Q1ZST4NieK5m4fJqsnEkyJa4WbBc4YQDtBa2B15jniTWCsKjopiWhYqGVbsbSKgbywKC1vi5KMgiW3fSySEBbuZ"
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
