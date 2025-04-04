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
    "5nwYTcbNPG1XFgaN45cTk72P8GeZ2TKjhMHafizvprdNF4Taag22P4JzwVyDXNe3yLHEcbcGpFQMR8GGBcX46whg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Y5DoHZeSowKGvdx9W1LiFg4N3yaAXv5Tgop7iSzKGEUtigv5k53ZuKQdLcoE2S7oVSvyNpxZFFmArbq3usBbX7",
  "key1": "3pyZ8rqoKKyFMhJX4dtB8XcPYGSH6Pik448KgMvnXTD8AogtCa1unLaWTaeESTj5xHRdMw4oU1FXLMYNLAYD8CkE",
  "key2": "4RkqkLpsc2iezV2ruD3DQCJdivjpCgeHV7JLca2GEdq2TBnnuFHadwWCzjf3zMpormmwabDSHggzYJJAUHwZTn3x",
  "key3": "45K6R3qUgeK7duSS79AsVjFzDArng9rM6EK74o9NUVAn7zSQKXsL4cqjjqAFL5Gd3Vz4jG6HmbV1bfoJWi4dnWVB",
  "key4": "3A9BZ8UEk8TR1G4t6NC5kzBMGuFF5JhX2QcL3hZ6va1FXmAVgLsp5PjE5bU2yfgsHC3L1rAaSrapYwSaYvasR4ZL",
  "key5": "4vrjbEMeFTVtSY5nHCEefMwU9a1TSBcXLAdb7xt9DLVwfAAWgfxr1CJbmp2zRkfTd8NJQZ9XHCrGWZuLA3RANjit",
  "key6": "dSS6HkhpGNacdDXHGxgc9XcmGXSUEYCYYikSthqoo3Kfjw3AWEeZSdS3kX7shPFqrMdxqdoDFqprjcKPa3SZnJe",
  "key7": "5UcnrRs2f5SzxUZKnt99KHifE4HjxAN89fiwzUKNQUNAas1W3SR2A4r57VtZRxNSJpDTpniWA6KxC87v9CrgUtqr",
  "key8": "2G8iomFKA1KZyYUh6R4JKQKXxG4tWDWY9FBmhEpBwXXfUYAXaxBGoYnRk2WUJFJQg7Hp5QgbMfoy5WLr7gFT8BNb",
  "key9": "4sHH8x6Hyvt9dukD5tzSLfaYVmqYZ1NtHzKMdL1aTc7VdSX9gfHa56EyzauPHN12L7kQsAS6axBUiZBZHdm84MCz",
  "key10": "3NV2S1Ur18mSjpkTkRXwEYngUeqrD8kb3DgQ2KJb617ixQVgmBEKM1WjvWiFmpCcipeZLovJdd4cFzCKVLbdEUq8",
  "key11": "26HwS7GUVQh9j68BPXBXUgrdWGoiVH3htdTcB1kNdwAgqnQwtjeag76hvQdNsFLniRBq8cdCoYcnadxpWyESfBTp",
  "key12": "Wuf8i6rABpeBuwhWodvSsBv68Bxw3jYAH9xYBPVvLfYiNcpXZSFbDdCs4ooh86BpwPsRLR1WM6yc8gbJgcGSwrs",
  "key13": "61ChX6hmb2p3piDxPe28Tfz6uPXtDnQLshUdfdbESCjXfa79uohyUAGC3FNXAEaKxTSdgEYhz38ugvs47CdVHFHB",
  "key14": "2PSb6fjWiTBDHtp6fVfL4NrwNMMZTDtPm4ZtJ5BzEikzWEkqTy1ZoQYQMGYYG9AWCGZnxjY4U63Y8EETbNR84pMY",
  "key15": "MF9QJda3tKH8XeLpbDxhaJMHpyWGbkKET9fdmoV7ZoGwSYNQvgpj8brsqjN1Y4hvFYchY5HmSkyanGWZr95c4eW",
  "key16": "4xyKFazdLz6eajZcJu5vPHzdieeJEdPATb8xH1VyQawSwKY1XxBvq6ZHJaJUv236LFjwNcfH4LRTECA2j6mE86qE",
  "key17": "5iLttRekscfAhrK6LasWiUgBYyX6F6e7dqSk4VAsYZFDhCa5n8npnLAJPZnZjfEUtDNnpLyt9vEhr1VYjufzwvRz",
  "key18": "3teyAwie8v7gpmSodsH5zcYYBSEFL3KcwbdGFdeVdVyByMZTzd7xsAoLmMijtuxVBxFLMCBunqvVNaxFVC9trsuJ",
  "key19": "9K91QQ989DbbNywUKAx8YYgnRjrrpHHGbadVsuR3nVA6yofBGRs2NUhSV7jpPAXCiRrEXFosbf2kEntYDx2pBLe",
  "key20": "5Ape3aDZU4GfR4bKr3WhCxKcujxihd5DkWHCvS7pw3RY6wbn163UwMZVGmb6YWsdSqoEtM28LZk5ZVup2enFr8sd",
  "key21": "LG1KikVM8FwUquNh2YLyJ9vgPBjrR2Jjq51VCvMEWNDX9DWWsJEoeQF7esvjcf8SCwfGRS1WeQTBC7pBZpYv1s2",
  "key22": "5maQzHbyDWxHWJE5ptqmefhU8kE1rWY4epbU44cP2pKRVniWSW8r7uhNFWi9UWpMfBxRh7Wh5gegDPrgMtjPAduy",
  "key23": "4oZjk68dAuDdhC2PPGqy7Guhv5RvRBp3vNfRcXwvU5tXHgbypPTe68WaXt5QLDSBmCosCbCsZe9JxnoX5q9b4JXc",
  "key24": "51w2Zi7bBS287za7mnaqHmkv1RKaMkqJwnR41DhtSJfhH5tJrDYJ71Gkh2CAB3mUWjKZ41pG5knGWHBoQuTaT3U2",
  "key25": "3pevd9nzADfA7PDBK7GWq2zeHPU5fBfvPkDer6MUVQHCpTYhDAMhKLR8P6QUxpwzAjwEeanVzSDgedq9CQQndmeE",
  "key26": "4SYVfFHFE6fhurk4qEX1U9vVQNAfFV9qsXDHrGewzru78GB27V5WTsWwiEahudHzLszQ8ohVuS1twuSAqMk6dpP9",
  "key27": "5EsCJ7d5VYRaTzDy6AbWJWFtzqB8L8eT6YAXvNjGDyyHbWg8YAeQVkGq98KAdCQ3t8MgLiw8Mq6qK9FXD8zzimET",
  "key28": "2ysJJLAHJZALpc1XSchbbbPH81ASis26G2hjWaxDAuu3kfo8LNj1kfNF8otxHpNfKv82P2WhWYnMqfRStE517vVM",
  "key29": "5PqdSNii3NZDcxLfJd7obW9W6Aheq1jRrzqCYQnPpm37K2YLJ7iFz2rw4mPhQHfdceqiuVYLXsgWVagrnDu3QFUY",
  "key30": "23edfqZTJF2wuMbADzFpcATp5fadKV2aW4r8dw6nBQb4FcvEdT5ejxGBYqY8bnYbykzCzqH1fiT1mpgHp7Zj4Vo4",
  "key31": "4EGRpzNFMbZFeJJEGDDKDNNtLG1gkWQumDbttTPcE3xnPZdkGjDkguHgmj5svCxTxG2RLs9MxD3VNceLr8Uf2vW1",
  "key32": "2SSSu1uuzbvneRnmMKCPBbGXznRRV4xi8wM1yWarRoZyKejucHEawx6zLn1XvJDvjUHEuy84oEASwpy8aUnRCUDn"
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
