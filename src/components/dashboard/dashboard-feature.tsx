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
    "3dYRXqsDo6NhxbCxs5j844BD1Cq7aF2sqqjpqqqhrqBJZGsR9dLgKPGVhcZmiPE4LKJSJw4kDT9JVA4tinKgGTaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QXUK2ioRd1p6aRv4mZexTQizVuVojbz1SCwpDPZWQnzTTSgooFiBCQDCX1rko1GAh3uHctBNzcEgEcbuEwNhNdc",
  "key1": "5CksArmbXMk5Qvodgyp5AwNfY7VefGJnPXLEB62mgHmBu1xmgPJtv35hRGi6qGXAXwx8PBApQyXU9KWet7uREbUq",
  "key2": "mrPbwoLnDUrSVQrhjVfaLRdZ68FKH5yhdhNFRqMZivr8Jsk65fU9VryQJJKjSRK3w5ookAj6uDrr6hxCSntkgM5",
  "key3": "5vxqSRqDyiueVdSoJ3FUJU9sfTNfaX1CjRvuBfuTmK1us999e5d4kopYXZGwZCNu7eTvtxUqci82dmRCvDPaqVAA",
  "key4": "WJXnGvi3cYa8qiddQcWPwUXn4h9JbUkx2MyCTd234CWDKFWdEb56jncrmeRKFmxKcKqWofD5iEFmcbrp5JAxeXH",
  "key5": "3LJA4gmxfJx63a5yhauxhFwMtj3266bv6UzakaeKyKb5EnNQLQmENVdS4xM8aDJLdaQjVcnCCGVzGntfWxSWWHiC",
  "key6": "34pYxVR5ZYDZ2aRYN2CuhSbHL3dZ39HXLvePxR2FrnwNQvYWpf511W1Do2cZdqrEcPUMXqymYeJWsnrSpd5WFTWQ",
  "key7": "3xDTxz1BEHJWPDtMVRm1xUXCK4XaSw3LuFJD72jkVUsYQnhop6QHgEtVkbD2jexLmHmawX8zjgsKs7M9eEGjAjhL",
  "key8": "4BELCwJSRjo6kVnNUBSisvHBRFmQabL14mAQMPRo4YJmpEin9y1N2R6eHvDZnypr18syiGNqpv48TAPrGoRvefK8",
  "key9": "RB5gVUwuWCEdtWJWWQ8D7UNq7Vt3RwpnhgbXaEMUCKJat2doSPtiMZCcz76GDqPGEr7JDbgkjjQeMbE36reygTn",
  "key10": "4QkxBsKWyEE3QEEqTn3qufnpKkBtaGugzU6w31KUnMNgMtidLNvW12jU3rNYyLnaAhRPaYjFhPMXUjCUAJAMTNFu",
  "key11": "5Kjy3F2CBWVd3eBnNzS4k4EnCnQZRcen27pUvp6advJtc4sUy8tMjWU3LhsRREN8EcN3UwUyJx1VJVByPhdbMKx8",
  "key12": "b4rjc4Wvm2yNMQzAVLBZaYZueWSC4ccMAqGAw4Ms4NENKRM8JTdmzubsLUekbWoPSAmrFYzM7i1aVVHEkCwcDRD",
  "key13": "4Mxgzwm57w3NcWibbhjifEq5j78STb3Z58oQmkE25uhcwpjtqC5KpyHhUu93LVYXmSAMjeNNfTQhxtt1CGg9Yfov",
  "key14": "3uKhFF1DD4qKLBZi1fifDEqmUu1i5JTvMDXEYAmQxLYQfpmfSJbsWbNKLf9Nv2y9CHPKFjvJTPxtPjWKduv1mv5a",
  "key15": "39Kfrc12pnDJW1EPWmFkkESj4RntAJxJF5k4879b8QLM4to9DrLjf2GyssqHjbL9zkJex5qFWNhRwmZdc81L6H8a",
  "key16": "4VJzufPpnYh5LwFmKgWEobGyzpdMp3YvY5NqFf6u9o7w9hR6EYfKd6YtGsepzF6aE1VqCzd8q2FmVcpjpKQakddS",
  "key17": "4ZdhoCj5UKdcXXNmwB2bgx9fbyfq2jLrJevJnhReiTVejiwtvVhgMrS8L6FgZCnj7v1P6V7VqWdLqXHJKR8inWtC",
  "key18": "5iQsu3JZvaQykqSHEQgwe4tewGLunXvoca29vmGS4crpXZLJqC8gRAgrN3VYgzxzsjMP68VkYEVKNhetERGywU4o",
  "key19": "5c36mixtmpn5bUmusc5JCLCjxfruWfTMmNKgWgvjkZB9THqgUbC5tH6JoFTpaYWCVcyCWp83joV7f5s49Tm8n1iy",
  "key20": "2TLttsa4LPK7LVKr5PtNjb8y5yj7VxTTqko9TS5vj36Y7FbtA95LGJMxGyBkowfCEja7vicwX3GC8dQkXD4WjzY9",
  "key21": "4d16H9ijeHopD5V37DACvmpFBrr5RuBrBWkz8FPS78gbNTD7Qeq4AMwhz7oeingPkdunWXGkXpt42PBNbF2wPo6a",
  "key22": "3oE3SSMagSioB8SaWJjbbzNMgDqLhBFjuSi1Jc61pizKz8vwC9uy7YNHzPoUySJiP9aPwrwgkjJKBPudtcCxSfxF",
  "key23": "4u4f5vysNJ9f4msxeJz4od6WXd7ecU3NTkxrT3ykUoqcxwBxppx4s1a7PDEnWZ9FNn2mFjurjkrNGu71Fv1BQgk4",
  "key24": "5XiX2jbyCHXJN7UmScofdAGSfD7Ja3Pts1zmcf8oVofW2nhVunUBvhSYUgCu72bXcSidnr3HUhRSyq8ngpAt35BV",
  "key25": "2kVWqEWqTjAjWiXgrRo3ZB7EfTN6hXo73Bx6gM42egvhgMSdEG3SFWAojmivC89GgqbjQuw9LgNzxrPFCkwkdtn4",
  "key26": "4MQc8pNZ57PvUnM6uG7vRYNVD9ftVZpPYgiZ9c2odFaKGZM1MEY6yRPDnXXu8JDzMoYqrLof442RtdmsYGwBnDfS",
  "key27": "4ENnXaGgquhXimKwWaVf5GhFsoykuEdjrqC77xJY8waFFT93rAuodAqxAyPn5QiQm2rYiVGDbMFEBdmkhHtM2TQf",
  "key28": "5zMeTwzvv2ygRwEMXuyLsZLcXCXLbPmyXrQGrXxDZKxsJw9Uoun36Hgu13uxH4RHJeA3ocr2HkmVtCqVVJSmaGEK",
  "key29": "5CLt4GAiXAV89hW66xMPwLpzbdwyijR7buUP6ef2LAwnhGPccPcDELWwFPSDcQr38cwJGAxGAKzLnjKwk3uRgP7u",
  "key30": "5kJZo6r4KvWPGBR6qiHjnNqUJEirqJCudRyVkWZabJYiCsAQN1W9jfH4fuyvGXoXGzRKx5ND32EKcacTHmwtMQ4U",
  "key31": "3SGbc5r1MZdZRXuF4hVf2JTtW3snZuBattcM849Qfpcd56qmkBUZLcSGadQrx7eNaE98DgRtKcay7GGfWLtJtNew",
  "key32": "3hKooa1vFYE9xeCTTZjBL7ia5cz2uMimkwSkxi9YPNFEvonsvYBdqHqmfWtmRknzPgW5acuhSf2wa3fz3v83oKq2",
  "key33": "4td3hhYUZSFwBfmGPDATEyUxvVuFHom3hmwqPVtBb62131ne4FviJs5cJvE4qGX1ShPGFHNCW7qTb4cnnRWZhdoV",
  "key34": "3ncptrnxxDW4dLCPtG6nTzQgUnYy14D8yEwS43N9rrzxbr3joWmEKw7kUw98CiqShFUx5a8N7nRvFNBoebEbGnev",
  "key35": "FsaCN9WqetxVFuvMvd9iMYsMbFqjfXP8RUKfwzqg9ECFPw7GmD8cPzW6WNBeDUSSgRvq8d7Z5UdFTxRkvKqYWtZ",
  "key36": "5MCiaGLFArEvQ3TR1D5DrAZBkdev3ZjU1prT7UApG7g7bcWouoTGUepbytoCDxNcgkmwA1UGpHn4P2KjtQ3tBdsr",
  "key37": "4shMXuTD6ssMC9GEoHbi5yBhaYiz9ofLDXKqfXVjZdMBDz3mQJ1LzkW9Us8xEVds2z84fmnGh3i4zLJBQx6da2aC",
  "key38": "5ndhGZtpcJyKSnJHtjVmLEczyx5xQahBiXQ9T8JkVH7idXYYWH11NrUuZVfR7JtB6Wk15aJ3WjxuHHuknBNfCCUS",
  "key39": "3pnU3GzAWLg1SwJa6MJALcEKzYEQJexgJScrY9wMhsLuYkHUEevHqstkL8BRRyecgTnGogavfQAejUk12NQzdPxy",
  "key40": "3v9EAHvHdJSxP664X3RJ62teobSDejB3edsvHDyBAeQ5eCi6ZB28SzMHAL1eZg48LVfNps3KRNepJDeLqFvmzo1F",
  "key41": "61HQw1CS5KZZ9TG9YEXkQTb2WiBjeQaWrF1iqLgytRrZTJ8eKRUceExWVMFcA9ACo1psEeLudPQiMBo3mta1cHMY",
  "key42": "5s4ebC51cKJmNwwC5RpWA5v3cqvoMsvx67WTWcuaAp1dCKQ92Wo6DcKsjQk5kjVuypueizqqgpr26i7aE12VksiH",
  "key43": "4zY1QyMMbBTkp5D46k5pynxUAp2nZentN2ATWc99UNA91zrmNdsaZFA8F1SgfTSz7SPbNfa2nVRu6QZJeV2CWKhz",
  "key44": "4BsWcvnnfKaF92vDnrmUxQEt2aiwqbSqZ9qLZAjGwH2NYFegB7i9oNudW98yJQKCWmFFBorY84mdqFQ6bJUhgLQi",
  "key45": "B8Mb8NjB4M4ozS3Rqb1zRE8yTrWMWPFphet8GdqAXUyVZRqicdLcFkNQRhijg3JjCgo38kocvbxAGnA4TxY5rGn",
  "key46": "cAkLchHwJiquKXDdSUN96JQMorUPoaQ6wrN5sKbVPjFwT24TfJ1mwqDxXWXvE5t18zgQ5qx6Q4rDWfHMM8Yqsdp"
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
