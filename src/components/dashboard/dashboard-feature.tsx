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
    "tvbRPh9Vdt68tG3bDifL3vEAWcLnCNoK6o2hW4tLyDtKqJSJ6K6T6dUAQgz6DiZqzKpYgHAx4GgXuubxtu3kjM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PG6bnf2Qfd6fNyMzRsNa3uKC1d952ac8aRjJrdBU4nG38isBsEUi6k3Hw7AN3DmNMdbskdUoCFVJHz7FRbAdVzh",
  "key1": "4HxLQLQsKVQr6b4y5c146yo9YGBUToRZzuHGLYud4TjEbhmXbe7BX36PZCiBWihPQ1aB5Grm8vV9ecQR8FUDHZ5V",
  "key2": "5FygZrMRoiwRuVCut6Mvnjww6WatArbCifhVFP4H1axqk5XdQEHML2NHqdLmft6Ezzq6CiW3NN2GZ66Ed7Y4gMvt",
  "key3": "3GHHLmcgmZ6u8MFhTatx1GxZVGtXFTZDiDKjWx7eYuh4fD1FMFTfeKa4VkJsaP9BzHkV9StvXo4NmkCEj4dN6pKB",
  "key4": "3FZ1Xmwc4J8KXxwZgmCx4wug5Y1Uik7Hr3wNPaC6hgBsw1C3rZz8PGEtWFYbrmTHJMuemF1TuoXoV8fpeSYJ88Fe",
  "key5": "52iyVLQP573zqQGEUkrRGiv3Dr8fBjcGpvjUr9gKf1ZeyF9SwHaE6bYNXYK7NSy77uHmWATaPoVQ85oT4eANHY44",
  "key6": "34wpgUupdF7vMQyvtJS6UJZGF6ydmfjzovxQZhvtUigCUVbrtVVwr6Be4pUuy8F4m2vzKYR7mzE8pqTjJAKB7Js3",
  "key7": "5CbL9D3jdbvfdRm541CQimiEN9ZQnCnpLHnz8AQmga27QFxAuz1mYVf9kdbXrHeLoAY1a6g6jSRCQjzGkaZzTB2C",
  "key8": "GqYkDmYfUjqkEvZCAydF8p7RDtda5mA3dqDJGMRiwhfhK94TXp8HmQfjmYAZ7YYo2rXcQViY4oWXEmxYYDUDBZj",
  "key9": "WQYaGzc3CTV4bU3cngA6qasB7b9p31TWUAEYyMMgagomxGbBCKKYLQ1mZEUz3Bbnk1TtrobQFxVVL5FiTAiQvBQ",
  "key10": "CTVjsmu4i1PZR4dXvVJxyJvYMum2L5Rb9Hw7zQqpXmqaRxN4EJudi9StyKePJ3RzuP3nKTD1YPzNmvfv1z45JAd",
  "key11": "28AdZk5EjUsXdcoa7qG4cf1xfTJU1WQULws5ieGCRvLFVAWj9X4g5A6aMRnUybB3sT5BqjJhc5kh6Jt9w2g9f9FJ",
  "key12": "XB2k9pYsQEZgiVYoGYje7fM4ktSqP8CtSbF6dp5nXa4ViGuZeRwnivdS5xeb5PDB2P2NymDK5Jum1ikf9AT34uF",
  "key13": "3HTwnoLGsVx8ZtfpUAzb1PP51pcWBT1bR8Nm7catozEejVNhDHZosgRixjRJLsstzutSnFbV8xM6szDCL2Xdw7TK",
  "key14": "5rtTvMKmjUfQdsHHz5uZmUM1mbo3EL3QAr5aS1r55UVrGKFU9HQfrffeUPiKc6Wsa8i9EGH9i3ioZDYNxykQxqnR",
  "key15": "43tYRNhAUNvxQApQkF6n8RBv6V1KGaJvT9ruGWk3H6WHhMY678K33QAZVYLtzKjQ3hhTURtjTs8GBJfK32SgFeL4",
  "key16": "49t4Ta9tWizgaGkSMisJRZ1TsK7E5EicxDcn8g1KEV8PWCHWequju7ujdfVuB8JW3MgwznAMZ7LfwEz56ENNH8ne",
  "key17": "3fPFHfzGahuBnxpoTQSQ8G9hs6bAtEQWeVVNiazHUQx15afu97Rfkj2sA2a4tAVC4tev3hEdBKCKHFxTMmuxPDFo",
  "key18": "4mPycfKgvkda2xyDdmggiRUqBAGQfLidcBm61nCdo5GT3V5vZ1dDkWGHJyJh4Ki2YWrHTt68ztzCNXRP7bLUaEdm",
  "key19": "iwRGcoxh73W3mxDrwBMtYrookKqhfLBgt6Rmdp4YFjy85tA269RA4NgEJ6LbwZLU4tBFCPR5v5sxv6X29DcnGSe",
  "key20": "3u6UFZcra3QLJmLpikJZD1wysCEGPko8pMp1NfL9Lxwzd3yXJ7oGzU1vGFLm48vsS3BxLkiGd4C6G4dKvKnouo75",
  "key21": "3KFRtKmDqk8eyF7cAttUYDDYQoiz8m32QwJZe5UyRMyDfUB2a5bipBZ4bHUbbkBVfXjgdYE1bABXHQhjLRFo3bPm",
  "key22": "6sSCJh3dREJPGTj1RpGwxhZkCcxitzFU9bi41JEYGki1KmmJcsTzDnTHPh2SHriNMTiAvX1Pd9D9uCDZJdBNGZY",
  "key23": "5iBNbgoxp71zT9zPTzxomniyJQhMfF1HUwiEK2myjZGeT1chCA5UxzaUJVX7ZYKiGwqjBpUfAGBVmVFzEy8TMg7d",
  "key24": "2XNSRyAEWmmYVw1T4P7YdwQASdgrfHno9buwToNt9kaJPjfLz6hs6zfaCV7qQv1N8txAReufj2Y4SArYjGKF2zsi",
  "key25": "3o5MHfQsMZfFd2o41bUaXGhW1jGSoQFtaW9LQGFLFkdUstKVKPSzQ9FFLZaijUDEdRArRD2Hd1uzt5UPXsg7B9Rz",
  "key26": "5PVe1msxGfWvDK3xpiDxp4X5DSzP73pd2LZ9UpYV7QyLnxHWxJXbFE1ts7nV7JwzkEAayi2S35Y4oQMnLfRFGpw",
  "key27": "2ercW7XdDxZh3wUwMVW1NdSgMJiU1ddJ9bMyo58vceKph5Z4cS27E5Kn9vksGF1wyMY8hC6Cz4KiDNB9Bf8Va622",
  "key28": "2k4aLyfnpNL1jGp42s4quPxRTAnuL2VUifzyRC6aCeDapyEQTLLyxHqNjMShwVdNZcmURmNtBePqkoQYAWPTCHmY",
  "key29": "2DsKptxDpoUH7oV7d2WXf97qZ9EzmVh9kauqxGsuqaG1khzmtWrMJ3174ggpysKgKMjrYXr6bW582hMmwcfVRT6h",
  "key30": "5e4GTnpdgmgXb2veyVtqipVUiPASK9wF1DNvFvaEWsXGF4tKCL1sEHSk1UXbpT1SwjHuaGjhULwZLy9mr2s6Xid8",
  "key31": "Q8PtcED7w2FSRi1qQdVwFer7XBtKytmSHYzZooT12TMnkfzAfY64ZUrpuP7htxmyjzjFimbQF7B2u52NmArMHhX",
  "key32": "nfiPnxD2cJN9pyQy5DuhPgK5VU9EN2BChZvPEhydzNgK73yaU3QG84ediw6xW2UiCvimDJmTYfUsKPyCpFgNhnd",
  "key33": "2A2eGNScaQJYgMKoKRustMoYrUkfkZefrqpdDzhiwBGr2mDX7FpjBN6fw1TobPQbwBJ4gfgWwRzeHo9xnXYTdgBf",
  "key34": "izHSiGefpkBqHZFmGkmPiWKswv5wJs7P1zHEPPK76MzG15WGALowTswkVWi5Q4YDtvLpQCeaR2ZTEFvpgYqiZqg"
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
