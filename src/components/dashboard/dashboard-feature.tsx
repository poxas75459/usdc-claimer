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
    "5dHuneUXccmMShMJoJQvE2aVbtvG5nQpnAc3KLYPMeHqJa2pBNag4E1XERHtRCLg3CVek1XWSrZixo1FAbQLvLYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DUytVpcxAvd1bY5V7MaPjiKPpQwn6xhQVcyYaaLNkegMYgpy3TyhNpCoqYBxgXVAqfm2WeRDoxqi3C2LQQcw5FY",
  "key1": "26UCFJXxyJtyemm21LD8ktgJgxNqZGdTaBYB4YCBBd2Cdaw9jGh1QqBfYFzMUkqLYRcMrLt6GWhnE8joTGunCnt6",
  "key2": "3orLm8abjMgWZLQ4HWZsRwBj74p8mDMDrZQ8LhFc4rkX4bmeQyGfc4nYD7cC8q4kZr6e17HLDCBzWc7no6mVV8Tx",
  "key3": "5fz6fr3yhdeg4Csewtu4hiKmQscNs3nTQzrrkm3Do2B6jcXezqWHhKEwGTsHr7soPxubcf2GiaFg13VscvZSPEmu",
  "key4": "2mgiN6d8N7QWsdzcApNSit6FXuR8dsrV6uT42bLD8XxWNeoHDQhFH1nWfaySAGUF2szQZJgmXMjGSNaWYpgrSoB7",
  "key5": "ugJKzBmUETecsSL74cmcmKEHUgkJ8HmfEXoN5E7WjuWBqgHRg8A9GxssA2Xe1QWchapP9fkUyqmPbYQZm1vyoRG",
  "key6": "39AX4dLoLQtPxinWV4DmajZTtyGpqm61uoCo2c5FP2AnKozdBgsu32uhZLWWY4jcy7pZpQ7f8No7wxjFynMN1hMt",
  "key7": "4nNsqfFKigqPEns6ZSEaPhvbYZaT5wshXvJdHSRQ7G6D4vdtgWAnFRxCEtJadjYQt1cee7Y6Fj7Ej6MkB34Ao8jX",
  "key8": "67dpjZCUuE8vZKse69jgRPj1xQs431Rtn9JhVpGkD8wyMHjskBUL2U47CPpDt7hMiRh7gHN8t2TbmABuXu8fMrCN",
  "key9": "NVgwR1Py7dMpxhmttBHQngNsE23AKgESAhwFYHajty9NnA9o4VQbRvfMzZWDYHwVLkqRChxyD9vvLvm6upd9ypr",
  "key10": "2ApTanaNwjvrCxEwGgqA4Lwbow3vZ2wAsEinEbeJv1BZeZhHfJM664xn4Uo1AZWYCFzE7ze4icjWqiAwvHdDHtzb",
  "key11": "4rGvMtv3VkfizuQkLwD2YeC3C7LLRLqy99xUEb8nerBDoQZHrZRsZ8aQqRKBCjQFPMrpujukgHeBtGGQCj4mBcCo",
  "key12": "247sbVRwfbCQvA5ATC8C5Xd22aYuzGDMMdtouGC65Smbpwddvj7KAqxGVDcB6zcnw1k5jdKWYBixBTWdNefSLkbu",
  "key13": "5wRJGySt2SzUDHvE75qgmTxdziS7SUUtaX7DuU79NvWT3Zv4d9QnvxEoHjwiipFoqc5D9EZrX9BL32jGgYZVS71S",
  "key14": "3rJhf5udxWiMmLzPC1P69FcddGjSxyoiki2wuatviyLrZWHpa7WyT7nfRaXevbjJH3KM6YbyLL4DKu1yC5M6QThe",
  "key15": "4YPETEUHwvq7D2ScoBShKjGNuC7Y26xhUpyv2uMwa1LcULTLEVgJy8VwtxvPYKNuTL9CJp5Gzbv6FyC4ZRiuGtqk",
  "key16": "4PQQskHajYiFUbB3BeQnRdMGxnULaAjX5d2MZU2jM5E4DoGafCQGKjXQtWa7F2v4nSRJuKN7RxFvRb9HDcYWT1FP",
  "key17": "kR4wHrxnRBNV3pMAfGYHjRjsLCcxBK1qUwP4xcVixM1fyFSKGSX6dchFAw7eYDQAjj2Ec76k2kX5tx81UpYdcWf",
  "key18": "3prH2AXcFDuTK3MqGiYr9oB2iMJNRthAw9R7MTghiAnbChkKWzX3mLRkEpnCmRPAvgWDqkPsYXYv3CC6UNWWYtPK",
  "key19": "5L7SaJ4Kr24qeg6FmiTiFibLWPZiyn1axC9fVcyLCQiTZPscQqFMoQy1ARwCC4EEK71qBoxWNX1uCN6F6SUZ2WWK",
  "key20": "5A41WUvUfxeQvVkyWfMqPDYTo2BGKavdSSztafCb3nwRcaJ7y6rPeJt5Pp6uCAZdAN5bnR5m4FRwxAvexN2bXTdD",
  "key21": "2LDPe7L3XYpCsKbH5AAo64aSTiD3YD6JMhTyf8EfamrgmCwjVUEVxMWKVzjKUKkYrJPeN9q6HWVPTcZ7NAd4e9G6",
  "key22": "pvac9YkHL97xVz6ExztWbQQQv7xEUpQYJCkr8tNXxv14bQE3k2T5Vuh4j5eA9iPGk7UemL77hDzW9jdf6LyStY7",
  "key23": "3v1uyFzQbVcFxu3drc5Eh5t7PrxLhf6v7ngPCJYWHSmGHX8x8nuFLJFk32SDePo4xEw6JnbuzYvZA2EBQinnM6A8",
  "key24": "6C8JNvkNLwF4aPTFXtjncSaHqNbXTqmXe71AgFgwKbeSP4VjMiR1Q9ibTjGXxEuCtXz5Rfrt3Mhgasra1e5RXDX",
  "key25": "32YPk1RtWkgKXr751HE8SFbyS87CEn1fVWHijTWKpWgmxjDXgUwbuxWJqoouLJyCE6HAQVbKX5Bop1HLqo2c7xaS",
  "key26": "48LDPy2FT17PKmUwcFLvrz4QEcPy1oLNJ7yTtsjGLqaA8EYAzbvmr2oDc1rNGJ316X5uynUe7jG6EmU9bSjjLBxP",
  "key27": "aTTLo7wGY5Rck11A6M3bmLGyySj2hxhkLz43rvmUQRaE8aD8YvpAdDn5pwj4qK3h8gvoXSXgB96ZW7McRFccu5j",
  "key28": "2FYj6uG7Bk9hX4eM5ysD4rbFsPK1ogweTBJbDxEYH3FUzwUdNSnZVCJTtpRMpB8L6XnRtQHYPVz2Emcx3vnzuz62",
  "key29": "213BkMVvkbCPKEFfJqbKD9FAJ4HuTdWFqCpfXcwhsyHLYJ3JsWWJkA1fgs64A4Js722WKvoBig8o2bFVY85wuVur",
  "key30": "2ybiJ3kQcJqupYuo47sovVAAQAdvS7caRr49h1rsHRFT6jBts9LNV2SjH38CbmyeQuThLECDYN1MbxTBLPHDDx57",
  "key31": "3eTypdcUds2wswqPyS33uwThMg1tA9NWh6svj2D84mR5Y8ZcZvRm96FxAv9dTvjuRaZRCiiSEGpKmzngRPe9WwGg"
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
