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
    "5eE1ec2sLTE1TBAzsBYsPmLt3AeCo8vM7RWYbJmwzccyfVvgtnVAXGFJn2K24Ai8WbZBZ6WKEG3yykZPcikwQzBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tVsT22XbPSmA4HP3cbQMxtHZb3EAij6xP9mqz6dMgbXjvayaiQ5u6rvD2kRQpUBwPzWR471NmBzXXB8apZ2tMJp",
  "key1": "6AcSMVzvQu77H3yreK8eu19o6iWvyDeiDZEYfkfRaWdVDvLnYND4cPkF5Ant2F8ZHC7mUwFWwPV5JidfjJbBofH",
  "key2": "WTGU7kS76MxudtKeRnw3Z3C4PnKj1fL8AtfrKtFRTwKEVeJmHfoZ5a1k7HtZxSGDh7rcPaspzocadMpuZfjEPy8",
  "key3": "5E1TPLfxD2981RHoGNLRsQY86JCSJuEKnGTgWeter1zPVgsLXJHZpC7Y8ArpZRBMUgami2fLHjGrsDJGQmzHvjrA",
  "key4": "54XLai7km6cgwAeEwdciALfZKo4yavcNY55wtMXBrYTnDDR8gBMBKxX2bdJBLxAXtRvntdZgLZP2t7DmgZtBn97b",
  "key5": "4PKGDiCRRD8JWdtbjqN1ucB5sqw1nuuQNKp57vU4DzKtLz2frzrWqq2vMBzEPfoNFWgg3GSDK2btNCGW6bDpXQBJ",
  "key6": "3sGiH5rYvAmefSXhq6xLud62jWJHiXAVtMnNGr3QASv3qkYy8mB7G5rNywYVPmC1ART8JKLifeapYAV7qzjNTAox",
  "key7": "65THD9wCtF6vNEav2x2EUEN1UmjrqK6SqLTXVvMW9LVL31m8HU9eS8Me21SNeY2Y4JrJoxn8FPkJ36V99oXDqpGB",
  "key8": "34CWQMc2zhaPgdovXe2LVHycgC9mhPGaSbCiW4R2nJpqi613v73yA3kCnYFNRhti6iZ9h4Zki3h8BQkAGatx9YCt",
  "key9": "4W5xPzNGzgK3N1rJzDY4BAucy1K6K8wZpTq3APQSSQmZ2HBGASR7ryB7uD8DKoijzSpBHR9VEHL1vRneSw9ra82V",
  "key10": "3hWPjLZr1xLybS3YkpbcPB6RQSsxUfaezRAyuPkgXnRReLRPJMQ9VhBG133jWUiUhWHjAK8zocgQbDxwM4zwuSFf",
  "key11": "3rSoWzXPMZk6cuEgttEzM4cSCXVW8awZgV9XiP4PhNu69weqaD3kgRyokQbFQiyhSBYmuqjcHGw6L3d96xwG1Gcw",
  "key12": "3GLZ1CHMhzQa92pgJJdrnXnVwaUEyYLG42ptWqxPGMmRNpaMhmEFrhCTKLLNjMWassGFt6nH3sm2nPRxMA5zHwgy",
  "key13": "53mLSMzL6ik77EX9ryaQ1NCXBpxSzsvyRCBbyznwh9kuqdePtQBWS27XCwXXuyjcAfNfskRPS1MgEkqqK5hCdviR",
  "key14": "36LaQJzxFn3S8wEVMNPivUTb4iBjpxESAYB2zbbkah9xzFnqJG15CNX9yz9jY6Zv4PLTNuHmqkHJ19gYSvStvhbR",
  "key15": "2T5ioH1aU1h5h3WzMNkjV4o13LWVFRwa2Vbr8xFD1cFfmRyXUjVasqTQbYJMVEAUVdg5GF7yKDaBaWsM6cY4rrdu",
  "key16": "3FHCg2oECPSGFweovGD3akaZ5WtpeFnhB1wtogsFDfNViZvtZuigRwr12yiAgb93yKzoNKKB1bwz5bHqKtLMD3Mu",
  "key17": "xAJd5ii3d8mxaq9T8WrY98hkdNK6JTJpjkQWooMwNMBwUaBnJbzYJcS153t5fnTre633DSxKySM6et23ygWFTXj",
  "key18": "5q5g5DdKqUoPXW99VESTAYufbUuKvYXCZTC7QxxQbPJq2diKoSdFdW81ZL4eiGodmbEXtaiQ15GBZu4f7ayUzUMC",
  "key19": "31bS3TTW8U2EjBj1iGvCR144pdk6K7pNugUMWoJDYx6RoaDqybL3CVyptHx8UqgqnzdnH5jCoBp1Uvf5c2JbXhsp",
  "key20": "4ExUkqMQisH6DCzFXuz5LZ5ULnwfVo2gaYQzvbg8ZUsmhy9exmLrZehfaeGPZEYmkdzKnK4p8xgG2xWNE3VJnbmR",
  "key21": "J8Mw6uhHdDwnZkxSicPW7L921ms9Q16s1H56qEbip1anSHcY1edFN8TtYYbHL65CFJ3Ymvf58Scmr454MRNFdwH",
  "key22": "4D6CdXa6srVniwQKQ2x2suTD9KfqjuyvSmJEJz8RcwQ98GFZmYt3QqzWncbATgBX7tdXUgizPANbStrdmakPH2Qd",
  "key23": "5yuqonqa25X2r5V6ihDDCWAjsACw5TSJp2gMxWXHoyYWevm6YXLvVoPMfax8Z3dc2tctSyfp8TtqGJcdiLRA28A6",
  "key24": "4G3euMuie3uyChGon6Yb1BMbFmHpzeirMQb1dV6oSiDT3TzsZWuS7uXGCJq6xMdRye1Ybv8mwJSTpkvC4ik8eaUX",
  "key25": "3w72gQHu65a935PxYGVWQQ85Mumn3Tji9uc5a46WxC1q5JATnxRHhEf52wHs5rJj8aPd8zNPQJt6CgJ1H8NxFf16",
  "key26": "5hQjAgPLz23gC822eY1yhr8Jy6YRLrCCqeLi86wCMUd7dTsUZCEidfSuRoogr4sB7GEzZNdBLjCC1e2TY8PjZaob",
  "key27": "268fqawHveX8GXjNT6tiS7h4pPxj23SP8KQLhjbXUAb24ZEjzpvuS9zTzndrDboRKoDjcaqgghyF7jXMwahb4V16",
  "key28": "4KRH7ZzCSw5GoGZagFKTeCKiwyYzJoqGkQB1gYSmNm9ysT7jGLBKfrZDAsjG18hc2eVzxDrBwpg6SB3GBGGW6qd4",
  "key29": "5c8W8ffrKdF3P1xxU56NJvY7NzD449YeTFQ7eXdQdiLTHHZLWJ88hW1C2nPqEz7Dv7Y11cAe58PjiYCmU6dy9f6B",
  "key30": "3siPruFaobRF9e9e9TXE5v3FxEcWF6TTEit7T4x9YKfD4Ny364GbiPAXURBuCPj6thrWEKmuL1LWug2aneGWiYqJ",
  "key31": "bEGpZTP7wF6iqz6V3c2mphUARmdm5M9JtXv9zJ5s9fCPyK9sgdzR28mWB1EkPbFGVhfANVQLipndo9bx69FaWad",
  "key32": "raUK59isZ2nJxZMauGhZwNLEzteDj9BeuiFVmXe54TgP8zi3hU7gQGAQhTNpiGczWGUDKgsKX3kS4eHi5TjRiJ2",
  "key33": "Keux156dvU24uj42UesFtNogTU7A2nMuBms1Rpzun6G69yiKkQjr6L9jpKjk9BnYfpWBksxCSxkyNAMG55obZX1",
  "key34": "38LCS9Xc8cr9MFeYCDgxMHvh8otr72Xf88MFVpJYvsbLk4sEAFoqEayeTz5PcdKTw9b461YaYt5YNWexUHo9D1RA"
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
