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
    "2Zq7Mxrk1AfeDkYWG6r1UnzBYoMReyimQKQZLTebpQiGkmucy5QbsvJvn6twrY1Hgeevv125xRm6xvPwpSwqRMPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XBQeGuMHSzQFLDL8jNV2BM6ctqPuiPDqwMxoY9zz27cWoNkUfRJr39AyPaydXu5FwMYKjgLX1SJEJ4mnB7TogEt",
  "key1": "49dpq1m2aHJgVHnPKJQrnzaYMLE3dTpYpz49jAbvAXnmRmFTnPxHzaQf1ENUkpuemCTpLNAjVLWSp7CmWgQoBDvc",
  "key2": "31hAUCbcwov6RcBccz6kuHmnJY9RNWSk5ZvauFNY5sYh6W4qQe5CMnTNWgtAt4upabvBn2yGsWUi1BXDe9V9RAys",
  "key3": "3CmuBVphpz4SMm9THHTDJsgPePaKQ2cnyAeQc5QTGuR7jyknL91ado4779dE7ZH1TvXFKu8a5X9QhCZRcSs5jLTf",
  "key4": "3MRqFiS2MQzBxRCQ6n7RaAH6VUqCEKeM5foUiBninYhGmozLJw2qBAFBTJMeFpEfRkeqKm9PSA7ETm6NAuxpmYYY",
  "key5": "4yd91oRR46h2ESbc8Cs7ek89gcYeSmszVAnGtuwi2VaXf4BXJEDrohshvW5nq2ZXXx1cLSh5WWSjCA2fuWZvREAo",
  "key6": "54AsBbAKhCtrc3tdTWt6f9fwRA7NGDKzRg1RcSPSxaa1JdZqPMSGFsUaxk6PkKErJHsmKqGeGv9dxmHDaGt1HRDh",
  "key7": "fW8ZwBDa3244vifMsUtoSEiHFJ8ioZeYL7QJa4zDmKpzKeX1jWBdDtPDd3gFxyakh8aPB33Yf8Fsy9RTHA64bju",
  "key8": "gZcSJW5iy7c3NFpBzrNFoqdHycrnyDQEpQ9t8a7KuaA7jCJgHQcypwxGqu8rQRUpioEFLpERzeS9D9pUoztNbjU",
  "key9": "2Ma6VYWNzkqCp4pVaLJo2RpTFRq6mtQzpKEjNf9gwK3joGzYf1p2P4uZRJr8gLK42dH6ruiFLvHHT7csuhioDH5c",
  "key10": "3Kpf7V8TuL1JXbyfS8g5venwUAKUr4k9hakrJNJCkSzrZ2zpudBdHLZA9KJQi3Vy3dteNoMUuXnCj9vfZNjyZCyC",
  "key11": "zeEyGGnmef6uqau7WkiCWqkcfe52p7SAK24Btrmap6B78VtzG5dcM4Se7TFdVk3Bjeg7um1hxwaymPJdyKoMXfQ",
  "key12": "5VbeahJ3KqEkEdMnKyYk2Nr4p7Xmhx8WAUJXx8mq674rNAoDSfwcpwuzFqYc2EkPrpgwmJzvuRwGvNArxVJVu2Xg",
  "key13": "5cK2FmpxWzCkuaTW2ewgJJ5m6JU6h93qvnrceNtknNWqjEUPVT2Yy683BWyGTsfenPH7H4hD3iLKemYntiuKz42B",
  "key14": "2Jdre7DZKQUnYPv9JZdQ6Xd1Vim3ZeACtdNL2VzDQ73a8UP7ZiDRfzHS2c7Eb9BPDmChNmPFTyRbSHM2mFquBsVs",
  "key15": "nmFg51AQaae98BWZb33eShKaSf8cAkwsBTcHRPXvnYXvY2L3wpa4rwYFswqmv4U4eZZGW5tbBaYKVtACxXZariP",
  "key16": "3zqWg25vUegm65QmwVjPwWYmNSSjz5Qv9btpqSLUt38UKBaEKxu2A4iGULw9CWjJL6TBeAMfBd7vnvsaPxyoyaoC",
  "key17": "61YXLHYbzgzyvvb8BWVHChmFSu3sjDh1b3n9AUQ1vgav7saNWVmie9jvcUQ77SzD5iUJmA5vBopobgVSTVYm2jRr",
  "key18": "2i582iQDnSvjmNRHeeMUR5wMsqymPVC1tZGdzjh4mfmAE8F18nqNa7nVBPpnqtSJt5xTsN2kETKL2t4MuoVAJ3ux",
  "key19": "ZibAPB5YT8PHFdoYNBe3ovAfHnqiFLqJMU4AwxNfnMendrBxVQbhFtU8eQF8dpX3Xnag6EGYbaYYfXAoeLYBRMt",
  "key20": "44i5hVFHGijKY7w3x5gf5W4bZGiobtYt61JK1RWGAEinAH6JtUqjA7KfhmCuoqu7xoP9jseZddEYcYNzTtySXpDh",
  "key21": "37RaYBpaHWc2WLyXhzsUoojLVFDsc6HswTbf1Cffc7XkJMhTDW9iohZjweRMzVEZG8wgy9FKt5F3b9ixe8pwzzui",
  "key22": "3D4cytM2KV4hKMYypRpyDNjGvmZDniKyS27BmDvQ3pWkdgY22sKVzVtiVxEsxFTgXnKhabj6CDKc7mMHR7gMpEFk",
  "key23": "P4JkU2vyLA4CmKJWHXg67EPkoLPHdNTX3Vfdb6C8wCGWNPDBWPTA2eHDuMtZagj61PQ4Ytp6EhkRpYFdNncSmbr",
  "key24": "3Z5wHuVAY4HfJoB8ftsVS8zWyhZhV29hxYDaoXXnSd5L3FTMKxvmfTcg4yMGdencGVg5Pf9P6WNeEaCyq4vyFYgw",
  "key25": "2AyXGjwv9cu9Zp7PXVucfrbH7GAgNHpDEQwsCM9voyJdk58xA5SCSavwJhh9e94n2jbSC4vcDtU6AEiFmzEAauWY",
  "key26": "66BEnPdptoFwMgkVfsoM8D5QgTp3eFFeCUc2fFaUQB4yeYSUkzMuCFg2HYvoJ7fmeHFojzfYpMmRuy5zjcNCNu2S",
  "key27": "o5NKdusjescyeEnkk7Fk4HdkhXMLWtK4KHZuY86CiD1j2qomB6XRJGpCkX5pY3UZ7mzrqbS8YK1XqrGQcSjWaMz"
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
