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
    "42hCqpDmhDNAN5gyw8ewKGCKLuf8pkNRntD5j24u2djy9gSDUkexcp6B7hmXtWgW3jFAFAJsW1iQWvYYCnp4aPfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qwP3sZKagnJbTMA9sktfj2aLcHPvRxz4Hr2bGELCZHewB9m4xgtYK7MgBjgbmTZKTD6JHzYe8YPAN8iMh9TVbwq",
  "key1": "31XsAEGtQLNq7pKZK8gXpZuoyrzG9fMkxYM3xrg64DopGKo2cZwtbYEGTiAQuXmpqMqVXBUj2VPYDuJjSjqkRUbt",
  "key2": "4hYGh7UXrdNDp8s1RhTT9cxKzYVFiz5CVAWzBMR1z2tc9SAdWtbTJtfE6LS6qbHaTCxNLWeDACJ1zh6qGn4d3BbL",
  "key3": "4GUEnmifDwFfy8kXD9j7nv91JQNWfvaSXhtzmCc9k8e28PaER5ZgvwJAxbhVvgTMnqzD2BqWdiGff3YQkjDqa3P7",
  "key4": "5qsDyRYX7NjNTPCExXZSaa8V7MtWnLjnjVXf81eBKAfj73XvFjyn4mhu5zc4w7muSQqXrRCFPNC8Y4aZ3k9s5Zb7",
  "key5": "4GRM5VmeGPsXGkSiHj9MUbVXcBjBTdrP6yrQVkq9YdfytxV9XR5tKDPjVFqcwEWX8s3wY2qP8CyEyzf2xYRdSo7w",
  "key6": "5WBveN13G4XxK6nRBTfXsWVmBpJxSYuMcddmVcUpLZKRUP3tZ7APWxExgi58iXPb5EQYAbS3cUFtR9HeW1LoM47S",
  "key7": "65BDApWLGHVBFTrxjkNyvTS4KsD6TQ3VymBbXTtwPib5ZDGCnKv92Pbg79UHZ2R9xk8g2DHoyXpUhndkzMi88WWz",
  "key8": "DfPNX7fBb62Bw8uE2LfJtoT5wohCpxpQ47xcSBYGMFRm5GseCmhgn5b3mvvnCdygTathW9Wq5HsLE5p8iVggxyD",
  "key9": "vSDjpw4abf76AjcbSfLggAJYpKguiCks9eGRC7zq6cFmLUbQGN7JbyT2HPqMVuVb4Y9VdJdnTCEbabWi6WwqKBZ",
  "key10": "51kDukkNVHygtg9qMG5nKxsrPjDxY9JtGv2yqpa1KB4Uxb6Dd3gdAnZf7qRKAeKinsnPY6CyzSULZ7YPFWsGaJTR",
  "key11": "3UVuSr3h8CHJeT9Ujka8FYkPwhpdWYjfzQTwgjT27McSGmfHxRpjttSUYaG83YRpftY9EGMXpDMyywup8Xk3dehz",
  "key12": "2pN3SprYnKQEfHtyGPTVTzqqR6jcprn3XozQ3Yy5KtSLCE2oo7dVXfCYvuSADkXvGQfx5tzshCh98qyeCaUYF7Jg",
  "key13": "2E3D3DaRQzZCT5tckjb9atAM9Cwuposkp4HLh57DfrBue9NxQfQCzbeWsVeMaAeCVxKVNK7oU4U7byzr2yZwZvaM",
  "key14": "5pAXd1hH8rboA3fE6K4bGWRegsxobKMxvgYCKwguU5QqABLB8BxZmdturSKzXpPgJobB4EinAHvDMhg7MveSsj6J",
  "key15": "4vFFHCYrBHyZUFhGUFhwVwKsJX68mnNEPHk8KHWDtrtx1R8aPdUJS6pZWXyXLLrVwA7SQ8RA3DTBEBJ4VmWS2G5M",
  "key16": "5oHNYadHegFAQxqZU8fz3p1Q36wVeTZEUjtsW1y8VxPh9D2Yhm81F3MJiVLeQnJ9BrcUDyJ158NfxqZ6CbMG9Jzx",
  "key17": "5b7wFp1AhBprVzFd8kbbFHMZWMzTQX9HaxFp5USgfNwcC5hzUw9Ab9DcLF7kpjUEnzvWF21C62aDBYsCtz1Cq6yi",
  "key18": "2ewT8BP5xmzXM1Y54tmGNrrVk6sChzmY7J24gcnectHFvfiPK91miso3EqakPZBiSYnstBYahizRVuA8yresBDWB",
  "key19": "2MUQmBD62nyGyzqWVHjfnDwhBitwvJRnQdiEDis5AwX1RfgDDHJ9gTkRYSzWgKJSJTA6p6VbrF9J4KU7hDCv1Jr8",
  "key20": "4MahB36ddGAsXrPFmTjcs1XB7oj1ZoqATCYHxE5rj5hmQRG8By6BkBUt6fv5dRQPfPENkp5DVcLGRr1rvc4FWJrF",
  "key21": "3y7noXf7u7LPpveyv1hQAj8AU31hMpsv95xsbQ3FvLVXeV9iei4UDkhFmVz4f96G9KoGV4bJ5jWMLF6pYq2ZMfqn",
  "key22": "323hh4rYSeLhoBnjEGFcewPTkR2wyVp6D53rCWmxiYMxVPQFMDMwJ88TUnaGSrSpeEsWx8TCtHbewKMvUET7pgn3",
  "key23": "uhWQkM3v9csWVnYsi5jJ3z6jHZw6iwGVU49u6j1P6HqbRqJEgVygitbaGs527AXgw3da1XWYNaJZSd8X1eT5WA7",
  "key24": "TeRQuKoy79HrRYBqETPSKiSDXPoaFE3sQLJwkwGWLqAjnGbfTbu4cgnB6pFrUjjBntPeGpnUpdegU1B8kQn7H34",
  "key25": "4xFTPvnbSpHJxXNcKtK6hSqTe8fXC8ZyiqNMG2pydc83DX5YpSWBJq9eJppaSjAdnNt4UrjBkKhPKwRMLC75X9qk",
  "key26": "3yoKzPwQ1DHHjYmzudCifB6dE9NpSay1QwNp3Tp3bxXk9W5XCFiak1PvuQhvRRY3xYwB2vtckE7pUXHm3S45Vgtj",
  "key27": "26kxD5mat8ut2NbEEcQ9H8HNfGWwjjdVoWvAhY4hAU6EttbNBqiqCLos4PVywpYHvJyqZET3oL2L159oT7W58TVe",
  "key28": "hZ84uqN2FbLjoRF6AHHxYWKkDBY2uj9LFLpFS2mwEUoDPfDPyns1sbqFBj8MUeF67Y28dCpFHM4Nxyqm17TzW9C",
  "key29": "4g4LCLmeEWvwzEcLxBcjgmdMd79Vfu2tbp5VMEsWCaULNeXot2E89ehHHSJu4xDtjsuYFcELdpuGi3uewy8xqghR",
  "key30": "41fnVtjsvjvYjahzEkxCRhvZttaYaF1Wbf2RUySUZyTf8bjbmEtLYdAxBRQ33mK2d8WGsENj7f7D3vhDYELNBkk3",
  "key31": "4QCBhF2EjgJvWosDCvPYwCwF6nhS6NbuLqt5uzbycgjz6Fs6wpXorEA68eRLmU2S7Pe6MUW1EmTeKC7skCcBHA9D",
  "key32": "29yRb872MdmA7cnKwCa2sn8U26xpu3TLKZHAHMPmVbP6nWLFULof2pXBsYSNoj3c4umuFSQAY9XaShr9vnBdidUf",
  "key33": "tJPoUCMEY7wpMT49pT2fLjum2cuD1rn8o5bcXe93vHSsbYv9J1ix9Q1dC5XtRbaSwGrGVLtUvYJtr6PH531DeAw"
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
