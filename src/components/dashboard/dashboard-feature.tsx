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
    "5fPtn7vQpZSz9AVxwdGK9g5VhMo2NVSKHQe3siQVMsY9t3ZQCLh12ZoYUZEsDrhp5b4zLAN65sioXszRkVywcDBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ch1dhg4vnSzVbJ5JCPvRN2kzsWeEHpHpJnNCEY4oGqSQLqfcZLYcEyBb3Qfu3GPNx8Usa5PfM7UPYBXvkNti2gp",
  "key1": "4nCh2QeHzdUEBVeJJYRwX5JoWss9GV6CZxQWGRPfmgwHqEZF2Qj3no5RLwfPMsvSXje8a2B556AgsRgGV1EdaiLg",
  "key2": "2JYvoF3dgbPXd1w5X2vg8W6hm9JPVocEHfSEaxnEg6VuyzTuz6ThZjDomVxdPzeyJLNTu7kjE3nD7xkuo6okggmY",
  "key3": "35SnEU7Fdd5B6xMSTsu5uDq8YoqWxqQgA3KYFN3Ct4zHmb8n8bibDd4GpykzPQtp3CrZ4gxbNdJuh2sbrhgrXyRe",
  "key4": "37Qg1CmxkWEMx4a3opBjJNVs5hDGCFp6oUJKPQN3PCoBLqbNyscGJrU6iQuMEFSoQuSA58bZdNR1Lsk5Cg8GGwjc",
  "key5": "3taTPfY7bGRBB5ns4GfRHCN9YyDVhA7DkJWUuUaXh9gXyiFwPwaQgxe3ytcWJJk5cQsZooeh2P7gyrQWGJhaokKu",
  "key6": "quo3uywytQxw1nZbnovPUTLvvYmFyJDt2RZkEi4ghRMQPEMNUW44EcnxZzMdJP8zPES2x9JPGHNkxUvgaFyoUMH",
  "key7": "4obKBNbNKkCucZiUL1vWmS9XsQie4cHAByKpNdDwyFM2iMvjf7PHgH5skm7trDdFFeEiQRGkkArxeCS7EuA1wU3a",
  "key8": "knyPFKzq44vStLuNAVU8MELaMddvBGPN5ms4TMmDZTinsDCkHqbWuyPWNSRKqr4DUjwQzFtk9iyjjofVGWN6NV1",
  "key9": "sqrAt4CgCCAUnKNKvgKy9bRHXsxkJW2wD7iXEsP4EcDoghFVFHnvZj4E42MkRSKjDgxnUyCqcfkhKRn96b8xyL8",
  "key10": "5gkuWaSjMZXhgQpXxGsztMn3iEFSHgALRehiiYPboTFe7VHVZYCosaXUTouNHAip4mZTCXoXPZjLnr5D2bVFDQYz",
  "key11": "2KAstFkPxitJPgqU1yvcwosWbi6Xwd3ytZJNfoRNR5NJbrVE3jYXks1yiJLxwrUQPcF2a8Zdx8b8ujMayXBoTXTg",
  "key12": "5JGoYbkhxMVrAydfR5P4pLyjt2ZzEJSXW3hZWPeE8pi2UHHtQgPFrBNrsJpf9iCaEKaFWmN62afcyWN5HtiLgoA6",
  "key13": "1283SHA1z9Qts5gFys1S9bTcLt3gcCxogHkvx3eCe8NdxvNHWES4CHbZAhJhELzoSAoWd89hVhLhmJcMA8ZjL8er",
  "key14": "5CsN2gwXgQ4NNohHtVntj4PVMVr273G6uxKoZRdnUmtQK7tAaNKfhJCjodq9bw44p2qNYEocHcEa7cqvPA1XETF5",
  "key15": "4arY8n6LEvaA2aVNqcb4MjKJ6aebiwVVfujRA6uo876rRrmo12jHbVP944FuZYKLbAPvskLnx3abQUa9SZDHZ7Gb",
  "key16": "2pibBZhfVLPnA5tyqDLUuMpTfXw2yF5SYhu7kroD997hmJa4nC5yqr3ecvLxw9xqR6NvYonv8aby6vqwG26zn39k",
  "key17": "4g4yDajRYK833ArEF22kXp1cLwGiHefRVbV27gQjRFmrVjzCD76VLT2dVBbGFE2L5vueszSDmByu8Cw7LEgDxiXN",
  "key18": "32pbhg7VN9LtWksjiBu9e3LKxFW86rU93jQpWeo9evPt9GngkisPGaWCgx8xk3hthLbEdqeHGbJifj8DH24a6dbJ",
  "key19": "cHTNwBZsGAtaE3jzGATQqGyDpEiW7bivGWeUS4iLEJwvL9WqwVcdP85aPiwH93diZx98V4tea1ZQkCsXdfY599H",
  "key20": "1QDVmr1CHxFjvoDoY9wSosBjG7tKjAkr69uRFSra4KTV62NsV9HFSUsiescBevzkNkhGKQeeGviVkbUrwtjvC3J",
  "key21": "5pinssY6jEeb3GDnMygepzZD9utnVfeuZSBgjy2KonCFP64UiYKVaY2tyYyxdAn62GmzTgC8bBVbT4hiVpdtPMgQ",
  "key22": "RY5mSD8HrSUaLKfS3xhCEdU4mh2STcrAgH18MZvRNiqnXgFzm3PmVgaZiJ6ow1YHB9myBzjUBpFviBNRom7bRjB",
  "key23": "4vYQDihynSbFxMXnrwUwdB1TJ8RBAFv7wM2AEfRWocDSjQusncmxXXh8uf5UJFd2iPjeBnJpWJfR5PtpvV1LH7F3",
  "key24": "PpDQSwT1ri96NdbfeH86CYCCWvZxSTwvSk3UtyUCbqA4nvPZEBKrxgTtdzADkY5xTinkvYrRMxDdmDAuLa7iCkc",
  "key25": "3c4Hs6gg84X7u4BueMdYTG2HeuxjEgYqBbt9H4yYztNZZmY65P4JF6QHchM8JhvLD8oUj15auBFPXwQduSvpTJgW",
  "key26": "4W1b9ubqif6CCYWmXG6jUYPinmH3DpdWjaYRijZ79cVUUTW5cb2vicyyJp4UnbRwWNUkA3UMPKdEr394Q9HLc61S",
  "key27": "ZV9zJNkyFecEPTurn3dqyZj76hifePjdhKMR4hYnga6Xtdc8wf3buhxm6J78XXnjkMGmVQHQ71rkWHCbYb5q2mu",
  "key28": "3bSY7zNLZUWdpeFVkmPgDC9NJQMyRNFp4etPpjQcST76nRshQJV2UaeiyqBjteCm8Py84k7byR2TeXU7dtpCzDCG",
  "key29": "2iMuBbXXCYMYhvG9VSe7tDBBqm7NW3fGBLz1NAgFbybZfSYRo8iqXW82cDtQMWfuec7kRArDahLrKDS2Z8cZ3J86",
  "key30": "27vqKMwviyRRHjEvJRmZGVV8q7Dc1BKhqc9YjV3bTgAufVQ6CCtokmsuHScq4LhtTQRVFckVcfDLDkmZGzWPC6Tb",
  "key31": "3qjyfvGtT3UdXaq7dXs3A16zs1Y1KrzHZafq4GBGwjyWxQHtBQ9i5mtEu8vddA6dkZaLZYdkQnXAAVudR1o6BWDv",
  "key32": "26yqkUCCY3ytL1vRCEnFy3T5WzGTenKnXbUafcf1a2Z91KHFyksoe7mK6J98jP7b3wTgriDRKccbMinMgHF95EBq",
  "key33": "oHTHARYJG17TwpLP6Uftp7XvxdNLw63gmyvKbBvnqu1VnmLKnhrB3fXDpnH4gTzP6UHF8fFY1AmcX6prZzHa4eF",
  "key34": "3nqG3124C9rk729CkFZntAVKeUYupZAfHhPXpy63vQfFvSU7DUPUNRaX5eNTnxYXh412H5ENwWxKXgwVTdzGKjBr",
  "key35": "5XKnALdGkAaLuAxusuX5znSk2otVCejvoqe9SQsHTw8sKBeWCWQRv8ueUcD5cjXpAyuhRuAQ6Gp3HJ245Y7gsGiy",
  "key36": "5yb89cwXSQKGmMc81ZwVPALTzbLvbUATxXREdoY92cQMe16CQey3at5Z7s3azR7fe1wtt6QqwWzcGhsCBNNwLAja",
  "key37": "5Si891ujCYGsifESERMd5ZLnjJEYDLeWLJYfxFNpMkTM3RTbJ8oLSq874EETLRt2Ks6JzhE2PoaNRQN4tcJgY4xq",
  "key38": "2mtkwwKP4AtSbYEVHisUjGTRJRPDgbws9rpYD6P5Wb2tEMVBVJPZ77eU9eRRUvcnJdqrPcnpG9cXZcwRRZmL1VgL",
  "key39": "2ZFBHq9BvFNSKNEUtXYKyL99527aRFWv4PveWV6ut1dBa3pUUvoVfyS4yCFcXBHfQ489wUhc8cmEVxFJD6fciFXT",
  "key40": "4KDa8EP6zkudLMnhiLfn8MEZtNuKxDw7Ne467jbiE5yWaBE4uRiz9BuFU548Hv2VUbrczqLtwno8Lcyf9mYpnAY3",
  "key41": "2B3sVLqmLLF2aqJiFBuZYAzAzwqN6VH4WcXg5GCWQ9oWRCSrREuHF6m7AHMMweNQoNmqbvrLofargVdzN5ftP9gY",
  "key42": "2x2ALdVBshtxm1cMNxxZcPP6CXfNFrQo1eyQ99Qqg315AidKnqQL8ZBST43kXnTVGiWmxxVY71zrzJUBrgFfjQZ1",
  "key43": "5wpG5Apy6v87VQzhw1GWzE3AF9VAmgg7TeAjULRQPMkA4JPt5HZuC5KFCkDvuzkhGxKJSDvvDxUuizkXtBoZa9uQ"
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
