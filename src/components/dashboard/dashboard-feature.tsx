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
    "vjnvgPMdGmBJqc7uQtkEq9DwkyJZi8AKypcvWHWoFHEeQV6tURZXYgp2i7ELMNokV5Gxk4nvwZzmGwFVuafCt9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28QBopHeYB2nVNcUWv7iWScn6k5iJCBmTmuzZxAbcU6nhdMZMuMAiAMcpDoUv12RXv7GNbG7vsfpTdfXuTXdZFQZ",
  "key1": "62PuKKBVZBUenXsvhXQuFx84EiGKxKVmnnWxZyPewWCxYgjjuC4wmGG6iJoJFEb6kxHHCCu2CF8JkvXgyd5AEREb",
  "key2": "5Ex3u63vEQDM4F36afGzP1EjZDX3EVzcSJHaG4XD1H6CtNWwiNoe7CTmmCz2QMgWrXGjafHWFt8caTnwzebTEub6",
  "key3": "5d1zkmXKsMLDeeDVwVVehyCvfpioxV4X1CmwktAdV65ebh2KfdBDK4Fne4Doueu1tsMxceSm8EXPNh7xyrYGYCmV",
  "key4": "3LVPQ6yw4DkqvheyC4yRfB1wogzSz9qcNroHyTGQvwa6DyD51QUr47cNzBshhiv2hHvpULHRJzz4k4MRkmeUpqBr",
  "key5": "61Ah9rtRbLVAAyfu2QhcBRnrnrgGGMHAexgxmQg48UGBuch1abX9gNPB6kZv959z5Jz9WanWpcJt9uVCMiBuSZQP",
  "key6": "3LZzMAGy1J3CqkFFJTw6fRyECB8i7syNcGjFiG6WopWfaPNG1iC3tXa9C3o1ENuwXrCFcFKYf5ANnz7EhoJf4ccu",
  "key7": "sJktAX9p1Q2Qbw8UZULU8krBNW6PU4Uco8dp2yXAJTV1JrMuKr49BHsdEvFN2wdFdPFmZ153AGCrcFfcBVDtocw",
  "key8": "2G2HVjK4aHyeYrEwmxU1wHYHE3ry5nrQfVpPncvTEdqQzYpztFxNncfbGCwkYaJLrbXteXj864WQsvqDGGwryPXp",
  "key9": "2C6umsdtTb6mJuHYxJEo3CGuruQZfkzJDGGsfBy7hP1u4Y1tEUuvbwGq8odqReQQs98C924T4NDdTKCVTR4NWsgD",
  "key10": "56WqLQfFfUPL77uLZnbGdp9XvkXu6KScgeVidc1SSbqwc3jfZd3pjM1qjL5zLEbakjdFjey4DrfafpFN5kqDAe8Y",
  "key11": "5HMiSFSxj7wy1S7JoMhSi8ap5MLGdLUTEs3W5D5mQrqcceRPYb2MBp3csDDiZnFJBY1U2zjwYVJQMkVTzjSd6Ncn",
  "key12": "2ZsGLvic2NLRcLhzruBFQ51ZQP68sM955gMThaCLf52CZu7nAvRFWKD9ayMSGLn1ZcXUPxMuivmmd25No76Syhay",
  "key13": "2f98zw46UPWeiQXcnStw4ATeeTRgDQV45yg2PQwnhU65VLS8XPDVfze2DuDk3fYGF9bgcQuAp4V3vMvA9QsAm6qw",
  "key14": "LEeufHRT97pa88CpEhhegqVYqP7hNbxsrk3yZQjUBNtn89yNTgoXwttdVHCqYwQgWftvjvTG94fmXwxAyM5AjuS",
  "key15": "4ghFG438yoafLFDjERPbir88uqwcLLEJqRqUY36U1mAXtu9uJoeHr9tHyXs1VHTYFNyeKMDHLkUVasGoMqhmdiSS",
  "key16": "515tLLjxeKjM7mSuFJtgnxXafF3saXmPPtTzKUyRuzJNrELKWYvXqPNm4ktWzRoLzQ45h8AvjpEKrRjXeKwJvNHf",
  "key17": "2r4y15EwYNvQLF7mtvAKZ2PeQ9rUa41Khsj8EXbEpmSFjXZihJjZCL6Kt7uHTAHHA2VQzMbVVonU6w29E7RZH98b",
  "key18": "5MYtL7iXbVZx6QqnJdz9t56HYMpCXVTEFjHypoqc6UyMpZaWKbaucYJ43R1NGCrPEtdn6cG4dmNL1pWqshz6ksdA",
  "key19": "5o2bGiQ5RtmKCJBzuUQ4uvBNvteFS8Ss6nHvY7gngMHuyXUrsD5jCgAxZbCVYy3YPiarLwGQSxgtVsmgECjBfEMF",
  "key20": "5RdAjh38Gz4fS6Mi8eCF4bPtmJQKs1qvSovGqCrxH7qT3uNLfMVFr5rhqVdw4zPXVLTRY7SePiK745KXtSf41QjY",
  "key21": "3knJQdcqbEyVWLpAipZbToW4945gSrhJJeVAVq2vSFntic6MBn1DB8trMAHXxckfXRauBDxmjwbCkdqYyyDpFAmw",
  "key22": "2SDt9n2WLj8LBXeU8JHtnNzWwwsJ2UbrBE6wpa9rANPDCVGvje1s3Tz8CuVUM9yX4FXK56jUrxvLiHAuBZcF4V28",
  "key23": "ErMt4VeCoQbt4j6n5gFUCciF3epvarbGQEYgNR45xuiFB3Xfe52bNo1zRKXqjXegZ1quanRokx8rzq2feNw43Mn",
  "key24": "mhHW35m4kCQmjGm3S4hm2m8V8mYFNfDg1WoDYNCWuXdk1oJw6YgT7ApHbEUrtqwpDQdZYoPmx36RyKaNqNaoqhY",
  "key25": "43QjLd9FY4B6xg1UCWw1RzAsDA3fJsWsJEk3QVg95NyMYJ1zgr4VgkRFeSnvrJj4ZnsTuLSpbAtNsHH53229NBk1",
  "key26": "2PMg2TKcMcPeB6GVbpFEcy3Vh8y57Cu7rD1gKvPkPTVHNSAJXGyC82z8Y4WUeUB4ydLV8QE5bzJgPUSkWibJksox",
  "key27": "48nJK2TSJgkr6YsB33aRUWNWD4SXHBKdJdTLcMkbFjDw89z8HSVbRCfWdaVxKcRQsW5Koeh4fadddagMAYsvxT96",
  "key28": "5jm4NYVAzuXeiSEduKNqgpXknfbwqaR1wa9DMUuiJSgbdPJC9XAUuDFeviuuAat5wHz5Qp1ik7vcNNNSbndmsjhw",
  "key29": "2eVFRA2wsN8QLFdJ4WJ85h1E6AemvbYJiN86usy4EUscpZswJsC2vRgLMHjw6fgzGsHeMfXp6odWScBXS43M8wqQ",
  "key30": "3KWUqEUB4nbk9fNqb16wzjAYTeAY4PLx9QdKHJbebrmoPBgofxxx8gMoYBdqRqcEcgVtRvgZyiR8D4RoGnpZchDR",
  "key31": "5gK6FHwAaA6pw17jRQgti62YemzmVruQYazwBjgqK7Pe3cjC8y5ivYXzk8YrqmZDXEN2LdQW7rNm5cHtfvgrRoeC",
  "key32": "5uV8LcRPbffGFQwFxYtmA3dM2e5PfC1iTUFNXe3tP7EFFYHgULCRg1gNXVvwh2Ba2676xfwqhDQ7diKpmP7hT8Yo",
  "key33": "2cRE6bjs7CFxFvbWUaFbBNxmN7rtri4Ve3BwRuD2e8JD4g8MBkDNrnhas16xnxnVcJN6Z9rVDBkc34kjxP7o9Gu",
  "key34": "5xDSD76sefaeURcq7ZFKe8XivWX732t7GTFF8j2gWJwp56KWdEHDK1pYL8E6jGfcPvfKSuwvq5G17GCKDZy6YoWi",
  "key35": "657Q5q4ZmPrTKjFCp9Je9XRpgms3cjqUZKiovJKL12Yu89wCt9usDnxXK7CG47zDDbx9HyK8ubjQ16rMYTG6bqSe",
  "key36": "4xtTptJB9ke2TQaymfDJKP5g8oVkTFYWdVzwvPVAPJkVLwKdiMim9XZcfxio4gAx9ntGAN4rRcV6MxZU2JKQZ7tW"
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
