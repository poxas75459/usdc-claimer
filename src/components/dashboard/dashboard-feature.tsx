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
    "5bYJjsQtDZ4jnxVzJaw1AB6UnWjQ49ASwCvdd9mn1oh3rATBWZRfYJfSQxQKu3GtZHVwm3rCjCpXgW9nMdAnfkMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SPgvnhroHcFJbXUA5HicvWsG4YZz4WGzD7ALjFvs5SSn2hsCH62kzBW5qcJe8QL2eAkhQ7knzTqMdbAaNhQZyky",
  "key1": "3b3TSNUDf5SbVhvGfvcDZWSkCC7BJCwiNWVvaT8BnUz9zjWbKBRRysNZiNxdrMRpq6Pc4hegytYRreJjuiK7YKsB",
  "key2": "2iUhWPZQgk28CpT9ChduFnCwguLYd4Rv6qEJLMnzkFAnGWp5B7niCZyRXCj4doZyWa3XPqDSuu4QxuQPjm98DU4g",
  "key3": "2if3zhWV1TZDTKpAkzSDmzALNkyKEkwGNixn6zXTuxLuuh3zKYmPMTsMkBHFoTxwTmkLd4MjV4cusTMFnoXB3rGP",
  "key4": "4PHXg6UPsGJuZvgNwRK8Zff9JwqPvgbboACzojGACT8h4wTBU4SxUhrb1eGUPHxUCWrPHczDTeTFUvoBbNurLLBS",
  "key5": "YpNHEy8fDqSf6bgVnM6ouPHaMNbKHNEqiowBubVxCNnJwtPGYdKsEVhRRNsEwJu3akoQKBti3r9PAbE66zNrCZi",
  "key6": "3MzeGKjd9ayNbtQZpDHkspu1Nhgf28axP28k9Mbdgnig9qZGBd5WbC5Kb2mqHXpZk379ygAK32BWZir88vr6mQ3p",
  "key7": "2Fw5x7zJwUR1NeoSf7SFjBfo5iRDAJD9S6gksWAvhwaPbrwU7m3N1HX4SqB6H5aNZ416KQEMf2vLHNvwXR4j4duh",
  "key8": "2GiuBj9VcLWWns1879LQC8cNb3TfpVzKBVwAnhDUs2a2TbGRjJSh2KwPVXPnkVkwZhpiYGvXS2ZtZiadUG7x3cfK",
  "key9": "4n9FjUNJo3q3gQCKCNvEc8KqTuQE6fduDsbNP38gh9fz6v78qENpgdmnLbMyFBUBy2qsWT3sECtK83uKXCceBow9",
  "key10": "5ag33bQceeWXrQLHNo8GVwT44KtfyHjxsvNXuAqnBDMuE1Wr5pzL5GgYyxskcP8N4MZWqQBLsYpUeKuGUvGte5RP",
  "key11": "63tfipqxCLRztrVX53KMu844S4mR872LjSyuBnPD8ZNuVnGwsq7dD1N2FhgG41aFhbrd8JnDn5XHiwztpvwuY6y3",
  "key12": "2d967YhCMrrZd5GybhdBwEckvwMD39XBRtDzg9tK1AwLKpck5pFj7u1LJnZQkgdrfNbDxEyRjbrKKzK8gSLnRJJV",
  "key13": "3gteNzMMXp1X6xmehxpg6vQWu9hYcyQHgjSEMm21PVyfidGsyWmBeh8aKcoy4be6yRDd2sqcjNaXzZFzDQMC6tEF",
  "key14": "e77BhPpJbfAoRvCCZvWqbNbGfD1Bpdp13KBpcrcfYNQNrUy9W7hS4iUdLfYaCWKKGVxQaTV6ssEqzmgAutnjRCz",
  "key15": "1s4mbrPianBYgosw2jAZmfkoGE1BekD5sTUJAHEgC12dRSc6pfdvuWiAk2qxZrR3g5rRefybWhnMamk83dwcCLS",
  "key16": "3Nu8x2YvHegtrWtshBCY9sYETdu5ZMCps7Uwm9XJqGpjKJxj6YRePG1j2EkRk2PiR1wgCCdUEzis6xbfmS44cZD7",
  "key17": "2Gdx57mAJUrLED9awpbTyBo9Q87sNXujYV6GzGNnASsB8vDC2epzruDQxVNm9U1y869ACMPtCWE8pTRjUw8GvrhN",
  "key18": "3ntnMAPJ2RTg81oukbgehdGnCVmvnxQ4srKhk7qKMcm6LnCX17qNgPoTjJXiU3sAHLUub9bEXtMFHj6q6D5Dj98u",
  "key19": "3FhaPtNnTCsR7KasShdRYuf8C88dzXPqeZW29JygyG5UdUqphxsjDtPxNH2mjaHGp5yemy44NFvYZ2AJ7QwUfQGR",
  "key20": "24C1LDwEoFBkLZn4gs94XH4pBjiSK2h3Hvw4XLD3F6c3oBBRugMJ2VhVwnXCARygUSkhZATtCFSUUop17zk36m6g",
  "key21": "JUbK6a87Byqi3wCix5YEc7Tz82Rp3omCXpGwozxJkt3XCiisB2f8hyLwa2GxZrsoUuRyJnYjjZEfPVUtgDZ15Xa",
  "key22": "25kazYPPixyj7irN5FiZy4qUCgPSXFe8pdFFnNeabqiqRUjh8ow2PWUHxxVNXGzKGLu47VYUXK1AncCtdSETfEc5",
  "key23": "d3s1WZCSCgsZMVzC17nZCEi6oLkW3ZENQYa7BGgiwiakD2rLeBCxaaKM7WSQfDCkXGAm9gYitD5gYvTJ1MoTH6m",
  "key24": "4vJdZA3oY9BokWPGCkAKjj4cyHpJgQnmgweo4Z6y7hFa1gM38muhuSPrbR5tLtGRVXJaFVxAGATsDBuYxkbUGkcm",
  "key25": "5MNyvhEZyLWuWNZcbzbYJ2WnLBXuvfMqtewVjPAnwgDHfP9isVRhZM3jrxcPjZHXmTY6surrKTmiX9XtNh8USgmb",
  "key26": "2LV3PkrP6dJ9L9NM81pixWk74sJNayiBATSyAGf7aoKjXLQPxpo2N6BPn5fcLcY3YzVUwHv6YcuJi58cFAsrfLYm",
  "key27": "4hNAXwGa1MV8HizHfePM1kKNJPor1GCmK4jzhTYBkWMyGZ1t71oF53kR5FyGjMVBPCRKPQ7wJEmwmCYqNVCDb2ke",
  "key28": "5vW9DVd6TFVpuJ6nQPKir8eAaHiW5Re9vePdB2hJPVoK13qSsKRDt5Xky8Dgim74QY1ywdwwZUvxRdzMbwCRaggB",
  "key29": "2y51uoDmW1Jr8cnmKoQQb8RWozgsp6zrpwpxRC8rkZZva2Y7hyn5tBzs4GzU5MUJVnPSWDLJaoYSLFoHvMmymVDZ"
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
