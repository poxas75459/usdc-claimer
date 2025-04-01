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
    "3i2uPJV9oQY52PR7e2bAUwYiKQTAYitmQkxQrXL9XXYJ4sWLr8ievekAW1bteiAbScXF2Bt2JdbBvQzL9Y2vGZGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WukKqpUnKZxF78UE5Yw2tC9eYQN6Vhnm8QVrqx9dU87YfahfzEwqaRq3cvccx8YLrr6t4C1q9gAbBPBnfVGtA4u",
  "key1": "4mAXkbTFfzHtPGbed4d8ZRkUqVdWsV4MzgCMjtavfh7ynCauDtUWABfguKZwLT5VCpoHqhnZUuGWQQwLHAKhj8Ae",
  "key2": "2ZbnZ6Ub1phjQApCNruPQU5w9kBbn4EdnMzUGMk1s7g1c69Sj5SasYZHC8wJz97XSUMdDya7wqLp9xd2nBGpnkLb",
  "key3": "BZbCcKrkrxD2i8SpxQ2JmVoyudKwzYQeFAE9UaobmGKvkUtpVgcyoNXfRrduPyjnUjz6PDu967ZmErNn7DxXgSg",
  "key4": "8nRNG7kTwAWTzgQpJzjnKg9UYXkNsR4ac1woSqvybJHTrXZJQ6vgwR4X9rxD7XoVxroKubrSZ9F1Q3dDJfMEZaP",
  "key5": "Gx8Ug4GY9J6Md7VpfaYVcREkuF2WHSFChcMnWbGnbgo8wFyX83yb8rCCqNBPj6di4M1PqHmxbwtRB3sq1RDJNTX",
  "key6": "5GZP7B2qN1VkmAzSyhutKQBntUAD2uemiQSkaBBEt1UNo93mNMVBht82MACDivgk7EyVhwFyLpHqyvN5tYpReqpp",
  "key7": "3gWaiXY7SADkKJXbNDixwxVzz7c5GZ3YqqGcfqMGeEsukQdksXYifFgT8EmKeZa3Pm2pTAFztPFTaRVWyo9JqWuc",
  "key8": "3aSpE7qHHSnkewEd6LHfzvhyituyPJnbSsPkXLotPGKb4aCPFnsbnHwQfAVQfSzW4wFDViFDZs5MnKK3CCUhBqkH",
  "key9": "wG1ToutLsa1iN2D68S6ofs9fv4nSacvymGGKLUFNqTTWP5CfK55zPwta51U4vNMHNxFCJeDkaz8KkS3wpspDbo7",
  "key10": "3pfhqFjeJeB7RVs5CJuV7nRo3x2J1eoWBshBN8wZgjn5bCNPpctrfC3AFgPyasR53dWBSG22Yp2yikoZ2bn6WR9o",
  "key11": "35Jb7S6vbJYYK32PvFCgVbr3NGd118V5UkgVz6tHNNQWkEiXPT38RkQhhfT6tH2Z5MBJ1yd2WnN4qAF29L6trD7Z",
  "key12": "2SxYiz8B1w6nh7yaoK2jieTxKadacN5pGfGyh6YkuvHLjL4C1Tv9xqFXKmxPEQcJwDXhpAwGBPFAsyMqpbsYKd88",
  "key13": "y96s8cBkdZgJbkGXas61n3K6hrRpStt4Jfct3E4kJX7aRNvwxv7FVDXvmwWZFqRoGgtvNEZ1XkFEuCEqKd4SXE1",
  "key14": "4AwHj8y8oUF8oUCfJzsrLRtrpiPikWCcbB6snhAuX38bmzAm14RKiK5EKdmtLYqXAL5tcckxawvyGiWQVZCqPubj",
  "key15": "5ukpaF348Mb7FbUwgGhPnJ4gDRGVtDrk8guMWqDyWeFyA4HFPA5pUpRiL2dR1YQdd3gphAtEukTnJApV8n48pvfh",
  "key16": "4B8eoYHteN2NymsztrDi1LnRLXBSm1TwyWbQioMpdqU5uHAbjMJpuqVowE9NBGQpVxjGTfw2UZwqmmz4M4faMA1b",
  "key17": "niWBPkftjXRdzeMdCxkjGixfYSC4jzTC99DkUtrJsSk3fu9r1NwTJ6GTYFkMeb1deR1GQ5qJUX1MkZkB2d82YHe",
  "key18": "2ZVCpPHAuhXr3b9kUQ7YcY61UU6nCpNL9KSqGzeFyaubgb9sjxkiBo8A9vuy5wfE7aKsmGgYLAtGtjFAVxHC7oU4",
  "key19": "3XfbRigq7w5uhcQB4G16L2BdpfZ8xWWR5SmDi2MbwsVQ7tA4dZGcB6pu9ymKVEKHmTamDYLEgqexuPBuWvAnLDWm",
  "key20": "5F1T4txEt8aGpQEsTtPUsh4MnrLSbiFT8SEj7vP6vpsd81Vv8hzD2YYCjmBvrccREqaoVCw4qSnrqbCe3CRsd9Ez",
  "key21": "3w8fg1VLouvH771hbZaccJB3a6AYZYKZkjcSPaCkqhmW8yiHS8QZVbAwfFe2QqJss9nuQZFyvp5j3TrCVqY86SNK",
  "key22": "31LZzZeU5GsL49KczXjMzwy8NVjNnEZjidpeSh5bnh31udtLS6pZZ6iMSF8KHB8KwBriv38ALmTWjrMJZkXQgLjy",
  "key23": "3mmpJxRBtju44BCticGNk2zqSvmfc8jT7ySnDUjXoTrf6TyzQvRofSbXyNFtNqLNMvndphUyjZ2uyKvSiWwzANY3",
  "key24": "5iFCGUFoCf29KaU2h9D6us3Zg1E6syDJdrnMPFNSp7Sd4j2MMougsTihEWzr4K8akbEXTSxbbuatx2aRxTMkDzMh",
  "key25": "5cjv3hifaimRYpXshTDjZcJb6gyww6Y5KDT6mtSRxMdCy4qBXdhJKjSz1wmUiWbX2yp16unAxGEawebMATFav83R",
  "key26": "3438ZLkA3FDKu4RfD4NLfx77nPXyLmjLoaEUycFxWKgUpiQaUueWhyhCiZQ7mCRNY8q4h1ug5B95H5yoMZuwEmT6",
  "key27": "5mThrHcwV8a8AP6QQ3tZB52FJtMUPhj3WWf5m5mXsjacTivtMAqJwRvTGchqQNys5Na7cMQ3yKpBxH6P4dTkoAGV",
  "key28": "3yb7XYBoU5gt9wLWanMFQcDpnd3RC4JyTXTvXbTULfobiWtx8iV8AqsdfiYf6aVMN92xUP6SoJ45pHzQr7JpubZs",
  "key29": "64KMEoxy8fZ1CVSVJgWDwdGiY4h53w188NyRgZC6FLTL9XCbscR6x5Le7Y4KcEPKEmX2pncYgiwUPWJ3D7ux4vuk",
  "key30": "2nENMtmVYGsrVhhDfMtYL7KBVEG3rruqJsRaSiMQ73GEkkLumidASJ5fBRiSJ4s5pRPc8XVemCNih57mrZfd8bGF",
  "key31": "56G5MfkW6MwZUAtMtUr6dq48hxprcYKccCdc36dAxSRoJcG8cfXMf8jdYUkKgAGAL5apaQKPyKHruwEDfaRLqvpb",
  "key32": "37Ffbk7mz7M4xfejdKdzQRDwMbR15eNubDGxPqwUBRjGLqsyrWPNSNDMATswcsqSr7PGtMnje2GBBpEZcSVMooLz",
  "key33": "3otZZ5t8hc8XAzxvGGxfwD7aq1HW13ZWMtYu5qBYBNi7k5fiRhHmmUAPtwkRYgBabdwmbidfxnkjtfXkv4PFEprB",
  "key34": "U3s5n9coNaGYSffTmZZfT3CsJ6EZKuRSKZbLBf1Yk7tPtTnzGWXTZiwtnJ3VgEuBwVMQ35vqJz121r2jxSHthEw",
  "key35": "HEG3QJs481QT7xMAwYgKD7ucDUVc9QyxkmUnBFiHuTtYta3XTeDAfXqc1ijFyUEmurfshUsQ8jAG4e51xa5BxrG",
  "key36": "9U1bQpTijTn2x4cymatFK3k7ZbGxf9NKGmRhbnCL977FH3YxCCuF2TR5irohK9iJZz8N4aUQuu1c8Lu4DCyE1aF",
  "key37": "4pFtyt45F7bzvMWeQ83RZTorjw2wiTTUk2YzfhXGwMtt8iFNea3D81vjSVVZhjmPRUY2mEgV2vNUFb6ijMBg3kiu",
  "key38": "323wHhQ4L9A5iU2NtvEw9PxkEowSkDB4q2rTH9ZDtLGJEgyzXpRxWiJTMEsqFcQ6XMHSvL7oMZ4Z1ceEcfUrmytP"
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
