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
    "43mPxUS2uHQ9zVzJVtQZmeZmdA31zuBJ7BNyWDdiEpabdk1XNE9o2yStoYPdZHBj9XWLPFzMhnE8YCZXyHG4hGbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62FRSFuGXwefcrT9EBk6tBFR3z9ozmGzZTAGmT5X8YK2rmRaS7PWDPauqK6m8E2iGi29RTLucibq5QmQHY83Gvqj",
  "key1": "3hXQ8iP3f8HrS6yLkTQSbZSawpeWjv4HzHVV9tkYSEpfJhBnJSDh9VtpS9sJUeEZY1dSwtpNmXLn9Asi4q29Xq6g",
  "key2": "3jyZQ88MwuotP2iscBt1jnT47uPBdh33yrxi1h3Xwr41smtigyJnpDgdiZUUZxt1pcCk247sFzm8HYaGsidQtCHY",
  "key3": "5a7R8UQt7vAJWL31VJRkx2rBVgsdDo1JrN1VdKtWvp5iXhhmuQVcyhpd2HLeRKYhrS2rQX2vFiDcUHAcwSqSQCuL",
  "key4": "5Gfy4XkDyn52actiwmss5SkwnripNHaEsgnE6Wfh6z7PdH1aEWemPDzt5dQY2J46cuBdSqiZUUEXwpVAMDdhfad5",
  "key5": "4QNsXktvm7wmtzaPvQAfdYoSfz2pfFNqucFuJsA7knxU5mMTpWcvt5SPzpa1oZd3p2FcF92zYpa4KmYcbPLkBaNJ",
  "key6": "3ye6GX9QGKXg5MCxxMnxkEh4poEU5r2qBLNcMaZu4ccF7hiYDFjeJWaKKVHj6VtrDLWGbXNzWKqL6FpqDYNPns55",
  "key7": "55kWhA66UkP5pLiCH2rJCAeMVcg8VN848BvpoEMQ1dUyxfK1ymmWgBQeEUrUUbX83wWe3FEDbv9hkNUaDZWauiYp",
  "key8": "5FhRmVbSULY3WmAzUdXvCqVrfN6YkrvsksT821rgFfodhYLtCZgCvuyxXz6gmUCzm19c3YC1ewfUdKhUqyg25Edf",
  "key9": "5m2ut6WY5rPJ24udkycZAsY2UYUkPBdLTtCrv5Ec7mX2iBuJPDbWNhtEW2FMrsfhi7vxCe6a2KU4Y2Q3H38NPPtT",
  "key10": "5Q5QpwGC5MCzPGbaKQA6b5dQY8Y76xRCHaTSjnY1Ch5RYsLoUtSfXqm9De4hV1wWXQZ2Myfa9NtXNfxH8B7iQ17b",
  "key11": "2htM414mSRGpFZUUM4kV6BdXi1ZNcNSu5ujhKyQEc5mHV2L9aXGXaRBT7WmT6NgYnCDHdJmZUBEJuWHJqygjx7Ha",
  "key12": "5z6K17U1We74HASVnRpDZxa5CMoftevcVrE9wPEyrw8dNn43ngHPL1WoPPkCPqEFg7jz5byUe937jrfzFr8RVD5B",
  "key13": "3PagEdU2Ne2m4VHnEtKxpnqnyUioH8cYLPUis59Mp6EokfaYynUYqdL598pi5eH8ZLp7zx6m5W3CNM8nKRbpxcSb",
  "key14": "4FDNJC9rmU53hvt7wnu8dD9oHRX9UBEc32FAoudEFZUh683LBKstcLrGPfY347EDSTJAtm26KPoHYDy99XBC1zSM",
  "key15": "YwMTotnckXV4BWNrhGSvQSJXnczSoBkoCayVVoFpPicGw6UaLVNzTKqxnF1XXfkhXdMMtjcDsv4bfFiFNBbZfSa",
  "key16": "3pUVCN461D8U2N44UmYWyHH4AVbqdKaRRFBo7j2YM9jDpJW4Z1yBmQYrrqXfH4WmyT2gvPkfE6aCunA73TwU1FTq",
  "key17": "4VJdBnqRUYfkp8ZXDvua8KXSBetWjqBvwFwtaimLQbAyRfXXEsRGQBxV2M9sEgXWYPFuHHP9KRsa7raHzKwK6Vut",
  "key18": "2SnsmEY27GABZhGps6w7GgoJEHm7rPVcjWdErwpKeNuU8zyJCmBUgTFdpvywA8WhGNMxiobXubJavFLGcKn1NPnR",
  "key19": "63V77ZAUG2TZVah7cbtz64kvwdn95c5NQ91LVbh45JU5CTxA8YeFUGWypHLt7hjedNU2c3Ex1enrtVUYBfKsxB4t",
  "key20": "5i5EJahveAJnQuwBaAppLJJKPj94JsQwuMfBz92TRKB2kzq2Kuuj7Ee6eyq2Kv7vuMK5wyYNi57wkY2S75MMqoGE",
  "key21": "3BQM9Z1UBnzc9Q3Xow2Pah1GeKmU4bNhCmxgqMi35KdEByCk95d36mB4Q7gvhQWPzrFHWzZsUDwrYM3W6fVYjzk2",
  "key22": "3obyXWmcuFwGdP2Nyq9PvyGZVLJ1qeg3mPvd5tL9UzkLyW4cQRD7z23RMyxSL34BAShbRGVfDquvhsiKzGKk9xUp",
  "key23": "4M7npEzJ51zXXVbADNJ8uSZzbMmryyyBB3GYhxurV7jXWLgBV5fNzWFwbj7kWD3YWBwJPDy5sskHvRb69r5QSukQ",
  "key24": "2dZ6bcwPxohU8Hk2b5n4urBrmftNhM66SYVa4uS5HAeRjwN7Tw2v8eG6WJV2cJwfjcqU7Q3zeNQrkG3SefiSB2KZ",
  "key25": "5vn6t2hSn9JZniC4dE8BjpujFqEmabT8MmZD3r13uhfPQcUrtv9ur51zjUdpJfYPPt17Xj6iwKkR9WCsBT6BNFnp",
  "key26": "37y3wPYzRnSytpKEneS4Rp84TrxxUUiWa7UDY4bEpEL5Fma7Uc4xroN6vdaY71nhkJYJwopeGCVt6HS61tCr8wpg",
  "key27": "3RL8egWxCdXrUuyeyedFoNHaZTuTjtXeXWhpVUA2xkmSiSxcdcfACrG2b2PioRAiuJ3mSieEPNRavXc7iL3cbkTV",
  "key28": "2jR37CGBomdhf9M81FgWpsG9aWkPR8ZsYDXkbt2WhXQyW8sCf3ANyeht6qJ6ZcHsGEGuPoAioPjgDaJWhGPc6iry",
  "key29": "4ENZYLs1SMw9HYRUcNT9Eh6ZkjPH7S4Wu4nnAsMJBM4KuH6XFiZGat2sR4VUx3bYWgkMmos5VDGUuSKruxbmUUV3",
  "key30": "WaBj13N5EpnQy2sstZmokWQPfhFs5EjyewLLEumrzwe6ieaAFeujEHWPfudb3a7etTT6EP7ER4PMFsYYsaajqPi",
  "key31": "2ke6DWvJnFDHJicYt1ixuFY9n21BAGCPscv9VNDL3gHTzzF7DQfD6ynMp1R5BYkm8fSVPkZbx4XPnadQ6pxJc2YL",
  "key32": "2Jjm5yF9r1YCQzP3P99HPoxLZanEoXhPRrfpjxQt7axsrJXor6Ninkf2erEwxSKsXfvqy3mqPfxuE4mTVWDqmoFe",
  "key33": "45cvwmoDLWALREPCXdWGXWtLthwbUv4bumczfGgwVySTArfrZVLAmu1atY1pcT2sgbsG1M4Vv6TrfzsSCVwdBXA1"
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
