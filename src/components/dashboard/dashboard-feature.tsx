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
    "28RA6VxKwcQWw5ViLieLCPAVVayjVnHwWMPc6paGC7u5x44Yui2vGC3hJxJwd9e2igqjKG98KsSzp8zy1Qs1ssyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2otC74zwXxMJNhwvpozX6JtwXbGskdK7CBPyU1bQdERvw997spkDcnwxtXVa76e4cVRA9dwKzptMAC7c1A7jAyhv",
  "key1": "3bSFKwY4tPwg6d6wL6QjU5qduYs8tAYdA3yN9MW11czqgSoWVzrQvzDvAx9XGBW7tX2CmXimiHCRq7rAPp8VeTtd",
  "key2": "oLAwUHAZtrwVmBH5zXejpJQVLFoDbBZvwTWNZ9KdCAgv13NLa9sHM75rUdfY9G3Tbbfmhp5nu7UZ5xb9QYHxQZK",
  "key3": "noREd75bzepuXATzPRP46ZHTkZY8od38y8FWE6WyZLA3zmMvziNgiu62qtHYm1gDJCRxYwYqE2Fb23sfBKRYPkk",
  "key4": "XnS3i84Z4MZ8yG1w4DD7N9bJaHNEcwpuhR4nDpDCeM55U4PbbT3ELBTQKGH28Y5aQLc4q5WQvikt9c4iUy99e6A",
  "key5": "4hFy5i8mSDSCzNKUAWaQi1n85QeEeqxazyZLhWdufTBmmncJreLctDYCbkr2VJ7VuYLrJNu4f1vKXt5rpEXpLcHt",
  "key6": "2eWCfqq6GX2QBULzC5gXgYbfNVnUSqX8RZ2crK1vJCGT3FMV39Z7e4bSZ2QuftBjuQqY3Pop7QKzXBU4sXoNBfWM",
  "key7": "4cFDoXz1tHWdXDzZy7cHU26mmvcR66z5yiZrf6JvnGvByKev568vBDTstyrdbsst2ySJ8RjDwtnGwV2rStJq7Gud",
  "key8": "g12LaYaEbVCnPZ2WiUYU9vK4RVhom1gPgh7RbeMoa4ZkgqNP728VoNo5Ug2CBhg3oyvp1sGhMEZkrWTYUxkjk6Q",
  "key9": "3RpySGT33EDEF8HjKVAth73Xv3968y4ybtHHVMbJiXREtPbofB4cXeD16wrKsmeaj1GBbsawqVEmEBHyvPNEnia9",
  "key10": "4ebQKzBEy72ZDKB8uQSRFWbKQqhDYB3NAk6XA17RuMcWZCqgxwUeCrtSGp6DpNR6rRG4uyg2PPcAJRJD1ef6QyFU",
  "key11": "3xrrHLapRnqmvUFstjRVNv1kgxeeKQyPmwhmPBBtRbjii8VyJijYLp5HZWCyfh9BRHFvBXtjcbVKmJtwtp634Q3U",
  "key12": "5cSuHyVya5n4XWPUTJb5pCbL5MYr29cjXrZfbpYbZ2tDXiekbFjWXj4PtckNu8WwS2jZnzB8MKXRayuQzZzLgDak",
  "key13": "452j6Vh9SpvfGBC6tCtV1FR76PndmPTn9QTQqzmovQSn1Mn1sRvUtkxCbNsDeVN9ArzZsUC6cT3e4WsCghb4fMUB",
  "key14": "5zc2jyZLzfg23TcCxDpfugZmBsKFQio7yMTM19QVooS5JzegvQwZoBa2o6JYcUFPkyynovSMq5TUDxdw4g68av13",
  "key15": "5Rw8M99vV7rp3PMvuBBYiH23wZzeDmLdMFhJf322zR6sGkxdrYLn9fKbK9nsyAqhfue5JXibhYMfoS7BaanaDRvj",
  "key16": "2iN4wn9j9tSjp8fUQPJhkBxDWaLHdrLUQXXjbFceuKKJGnmrHrgNmgy1ZyyYFzwbzTGk1e9mXkePH8uLWbCZ5Y6M",
  "key17": "2g3zfsPb4PWak3V8PURJ7jYhjxNv7B4tTzjfSw8w96A8X2CCpNFCfy43NjS9N6rtskjY6stJk9uBbA9cW1R2Vmnu",
  "key18": "2uoCDMuiT7m9yJmHjWfxNDUcaG7cyETktZj3G3gPLEgU3mmzUgr9NgX8VwgKJhjjjDZ3U1Gx28nbNV3Tg6URmyTW",
  "key19": "4m6opeqqVnhPDe6BPyiKWADuae64noQHgVKEAkdwBXdgaSv4d2QmkU5JPnA5ftfGf1HHPEmZHkdfDA9muCRvfJB6",
  "key20": "2tSHjnBngMZ7NLCv6Qx8kdCNpq4M6qqH1eybi7H5KivohBPpc6QDSrCQXffmVSdRLoN87oAWr7kvZZzVmAqveRjD",
  "key21": "3iXHeNGbNXgqcsiVeQjQHwE2Nf9vs8ivvPUUfWRHH8PqLRD7me8PE54bhERhgXDjqrEoCEggG6u74n5NLUonNWuD",
  "key22": "5WYC5ghoyfY3u3B9JFjWUtXJ1Eu8im6hZVW2MskTmggmCfwM3ufRFfHP9NF7qDnmRuCpiGCKRSSdeMSo1TevDApJ",
  "key23": "a477FbAdGttSpTAFB6z45KCTtgh326PdrwrBipMPZGRmH1Qqe1F6VN3hYBk7U9tRaJLfxjVNHwQXoxj365d2pjQ",
  "key24": "2UW5ZMojiGc4Xipx31YTSUC2WRQt1S8LwmbLrSZmEnqXUHdA6EAUh4t6D1zyxBBoLBdHC2pTuFzBVCSTqtwbTEMZ",
  "key25": "f1Cqp44cGAfGmoQHyYhaqNjyfqLtj1CCNZFT61jN2kJ3kisCv24xAyjTFXy68X6rGU81gMHJLWeizUqaVmoK8z3"
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
