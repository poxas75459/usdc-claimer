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
    "2ct2w3NCHaiWVmdvEHGrasxMEZaRauutPc4gXtgzrRTDuJNcXeHYwyUK29NrDpvfpGsFCEXLm7xbahH8JtCvNw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48i7PzvJ5ipiJE1GQPqa88bj9fFwfKxUJY4Sa5LbBiYGDiY9uGAMMg1XWc1uCHKXMvTp9vSPVdcmhPsmdepk94Zj",
  "key1": "4W89trtFgmMPPjQFJficeUP16GsKyMnTQ6onZAxEdkvxrGQCo7VayTHvzPVpdUgLP26rJ4Jiaam3CNUxzExJFQnQ",
  "key2": "4HgDTFYrxwYY7LgfLz9qwDQkSqfEyEzyUNTz8P2S3vrjk4Djn8QhjWuiBvbHV87CgKnj6hksCQkpbJxuRNLnoJiu",
  "key3": "4smi8zXoNwCidaaYBDouWwkFhVQdmG5QPcihHcJdrY5tZvncfetW2AePjQjbQNuUmHxA5uY6E3o5U7EmAtmc3RLX",
  "key4": "2eXen3b3L2U3kRBytyvYjwroUv6dxu2ca2KiTLGKdVnfr2pzHUsyEYhH5QmyAUoLk8DS9dTPojdwLXcmTrGPDDdB",
  "key5": "2mQYHCwua9cfuE8dbu5ph2tc3o1XV7Zs4cj8RQK2iFGx4sJyDQnSQ2DM9x5xo8tqj84eNjQ1a2YxZ2gJp9NYYcqP",
  "key6": "46ERd2haJ8yk5YQtbH8eSUyiMcXW9QCgb1GWxTri8RqgZ5CyzcgHKKgdZTdK57eSLPoSJj3z16TuNeduj9vMbACF",
  "key7": "6enKg3TDki3Kc6beDSju1Juzeh2A5s4ckTY6XJTYcJNsyXR64ukBwGZr1w37wyG8MwmQP59BCPyS8ixixp4UNKT",
  "key8": "2UzpS8zDfyrwVbwz8KDGbpxpknRE4pdcBuEaFQFvw64kDTua45rRagDi1UmLDr9yadmgPaM474vTCc8BzEVJgqhw",
  "key9": "TZNmqKY9UVVfd1Zs27tJbW5t9GR4QL7QSTA597BdQKHzKbSXXZYXpfE38zLKavVxomH3rytbBDcXF9EF9sp7kFU",
  "key10": "4UUoAGgKFrbp7sgLRfLCdFb1hrVGw9eEuoQryfFm4PtofQY65MjPCFBXgojCLw8qpUJRUPo1HVqB9rAJ2UjViQYV",
  "key11": "5UgVLvA55sFxvmcTfUGPbgaCS5aLHZvUmVChz6epSjRTRsQSSVUEZdYovSWDywT8hgN3A5zgy27WfZ13ZEf1yD1k",
  "key12": "3jMygVjYqtqHhTKviXfmUxywjUmkLYDpRqpcRpykE6XQhXMGZMGj2FjvLae2sEve4FQKa4HFae73h3Gcy5NPjagm",
  "key13": "58i8cvrrJGQsx1dps9dRLTxmt7997fyhUjuQ8cbbDuhxJYwoVvkFZKfURidRRw3FhSXpj95PeK6KjKaLn8cSE3rp",
  "key14": "2GuSnRx5U6oLV5DQWi1NLwTbN4TwTrUYAMWc7dvdkcP9zjKpweN2jiU8iujM6iDgbWeW25C4x3XGcznC2R1aCKPB",
  "key15": "57c7T3AHvZGejXvWZMTCKmAY7Mk9P3xQ8vwXoDo8Mbm5CojjhVczGU2M392pLUuA9wBYGdJmjiQTo3ingKRw3jJi",
  "key16": "3gPfX4EajV5XrREQk3KizppXQ2ZpA9W9yW9zqrDkTcN2AwjieGpGe1w9iEnEcL1Fj2NTt7wecE6sN2ZD5P13Fadv",
  "key17": "331ktxhB1Bjkoue6hNGkxsbmZKmRs5abdLckvHt6LZqLLjSJex2eCLw88HZdUVAvmS7gpF6aY9TgAHNj6xwjmMBu",
  "key18": "4tZv5htWDcf3BXfPNHzMsa1j3zy8igmMd8YwqH32Xwt8KV8eGvGMK8ZxLNQmru8QuE8mKfS5eGeuwP7jn4fT9Kq5",
  "key19": "3ScFGjYSJf7FUpeXrm3DZFqtqjx7pBMmE9ekZnQCqWnru3jEiGWR5tvjP16Yi8ygw1B3KCegZmjzJWSCN3SAfgMp",
  "key20": "3dUVhzsgbZ4euXo1QHnkvJ18vzVdLqnoiuSLwskxpF9C6DhDhjPqv8LyVBrvZSya1PWF9anVnrx9NmN9t3ZC1Zpt",
  "key21": "2N365x2ViWC8JeifJpRWPd2SB5ZPTYFQLPnPYhzCcfr1GpNKz7ke28AWropwcPnHv6AFQtPn9HkZ6trnycfis2eS",
  "key22": "5gXUBrLBhpH3wGs22UhBxUqEbhHbHASPACuzjCebrf3UZ3mk92r5vQmiERtSCwDx1qdxPvWAKhT7LEohxefVF421",
  "key23": "4FBRn1GHy4EMq4xLkukH3eEQ5KYySZYURbSGULqVNJ8UwJWrdS2mCWoKmdoNTmfXkMVh9SCTKraofLD1k9pnaVoe",
  "key24": "m9GRT63bD24qssW99QL8HtTHjzxjx7wbkUnh953PgPXEVfzNsFrLtQuA9tuAbcrGQJq7GHDJZ5jAVoXUBPH4zoi",
  "key25": "22ssGztm622HH47CYmzbkpv8yC3K33766jv43rduHT3xxY3J6KSfACep6BMpdDSKWsLwiAHJvEggCJ9JYh3pxgm3",
  "key26": "4mZKYJRXWsMRnqQgobrvwKe9YD3iMhdBQRby5EsmgjWBpSBCxm6x3FZGuXDGhsCYHxgaAbvFGchfkZhXDPvXNgML",
  "key27": "2uPv8PBurLycRCQfVg5sZKumVet7af7XNRr9vhN2jdQmzpT6AmCuZ8zAvCUQKhjR5mq7hNfmp6FtmXjVJ4tdab6c",
  "key28": "2pVD2bRgQbYc5eibydungZLLngkYTQ2CAGnQCWw6c9o3MLmJ8EAYNYujUGUmNeyP1RRF5pYxZgBwQXbJ3XLiJXPZ",
  "key29": "633v6MZosyEX3uYhm9zagTK2Z3PRWVt7weWTFtpbai6TZSMwA6Rqh67FjRxZLh8nkpLrRPHs5CD7wHJc9pz6KCJg",
  "key30": "26P1Us5tTXDopQxxYhtzNfH7cjb51ZrmJUsAG8NstUejgb3aqLYysqyQBXbDoj28oGLcC98DCNg7oKq7rj8ciVL3",
  "key31": "4ki7pNpph3UzmXjat3ezPXDrRtfbaN6i864rBRCmZLmnJuunncPo4p1SxikEQZUHy6PHeWAEBvTxvQadfcLExCor",
  "key32": "5Gp5H8MLFiL4LqMevJQqZRLwKGYnecMebJLMwTL4JJy1H2m6dF9HLKCSEL9A1NLFyxeeVM7BKTs5HHjuFDN2D2Qu",
  "key33": "4WdvrZQFu9rFSHkb2McNEKtXBgJauAouafn6ZgRDVWS7TgCwEoLs4XUp7oZyUV8L2hs6f7yvu6RQsWVYgVeovhin",
  "key34": "3UYqYWCV53DpHtMGu5669v2afJ4fqpgkTtgMAy5279LM3yD4ZC1LugEpVS5zsFtHnfVGPnUfHyi82kUrsfQuGfyQ",
  "key35": "5TxT8SoxnxQwCoxtYRJeMbab6Kwe74Nta3ju1RA1aVRdRxhhiDU2vRnYXrKZK8zBUWLDE314PoLcTSEQ92FuEwbm",
  "key36": "ZusELtWDHfM5fa1QDTv8qcCYAgq5tnSu5GdmEyd5aFMjLJtKdAPgMzs4XKPWMC14BEcPgxz3abHrWXu7DgbXTnA",
  "key37": "4RGrq2f13dL5xdSicqwvyjRZBLGpzpStrMfjDqz8Pjsw1VpG64t3Pv6rYx6KVjXWnexhHgnJ4wKyc8nZxEix7Ccf",
  "key38": "2wwN6m5tYy7PrAmN3s3pBoudyHMwJcnfWXZrPYdAw3dZzYyNmhNSrZnmJ7ghwJK5ePJxXeoUdq3BzS94SviuVLdY",
  "key39": "2ZtsZZaAzxj9e1pJ8T9tyjXY1ceXddWwWXaBghvuGCup9PsVyKA7dMS3AqwhcKTwXeEHdfp7c3drWEqmhsD7i5g6",
  "key40": "37b35tvjzJ1SXHpYMgEe2f3dfQVVzryVXNDtG9BPQBCpebo9DkmXDjW4NpvjQCX7ZLrSkPWuncUZPeGXB8KtsWNy",
  "key41": "5APYHijBnGSK4aBZLcyAkjysnCJzL1zRS8Jxnf5yjGEyjLURAH2N5YekDrGMgRNyLWTuFAEdDn7GHQvtfF4vB54v",
  "key42": "4AWj2NfvNF1s7Ko1NJxc1rhPdSjNcyyiRZAqcumVumVax48eDS5rEZX9tZ6RJ49pUVnC51XVxd6jDJQhiLRnwxYt",
  "key43": "52azAWpcRMwoQSTkT37GgLLgnA6xRq366bP8Vtk3C76CugPhx448fpMnjjFiNsWpoAZ3nSBWaH5DXewkoH26EAPx",
  "key44": "2ULCtuygS3iMqcU1cmBwfSy9N6VhwmJaPpAh16Bzq7XYwQPUUebFV38gy7zrNXLRBDqzRraxtGbPsHyaZpqtX4Cg"
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
