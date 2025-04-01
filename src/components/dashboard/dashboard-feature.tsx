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
    "ddmdSC3GdYteJWtA564tMtP15DQYXgVR8D6wx7Dpvv52seiFHNm1HYb3761RMHXE5p88WN7g3dNHK6dk9hh94WD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cxNXjLvwPnZYoD8jJqz5fJJMnFwrY6NRDSRYB9LoUFaY2UmA263Au9hsHJmaiw1ZbCachK18RqMEL53oitQP1Ks",
  "key1": "5rGEeXwQ6Dsb4x5NsAHuPza8U5tGBZQ8XUfiwWtMpHb9Gf58eDW7FbNA17oK1fH7oBLNmFGEPJWBgj9oe5q3fPiL",
  "key2": "3E8x3DfZTH9HSbr4Lhy1K1RKzN3rJiFSEULXCkJa58Jf7RMf2G1vgveJnZn7K9ss5nGvnZ1Kjciek57uwJZLvyTc",
  "key3": "3wx9kGo322M4boK5SonaQz3JXh97USyFZscXxvPW3kBLKH6nVpxraaMozvQRLMNakMHq5zmiYCPX22KM2xeEWQ4F",
  "key4": "2r9QKtx1jHRn3LDRNzbvJvXe84tK3i1deTLj5kXdSQmChFVRM2bs1vrGBHCi5u5ySd3CMKJU8v99vb995AaUdZGk",
  "key5": "3RRAh87JeSabK76hJbvQro1c4P5tD27XUTeHWtkxQ6MZGpmiUyKeihYNUJVUS4uaKsMtYwSA4mCg1BwgoLEfeASD",
  "key6": "5cdZ75rU2amZ9sNEJHtNLbswYYK6Ypfpowi9B4B2y753FhTpSCSNKv6bm55jy5JfuQfNc1fEE3fz7FWQNRw8CXYq",
  "key7": "Bis5By8Hr2k2npxuF4GayiaCGBcDq5TYh7RmoHNkFU26sDWrwvgC5szczkkWMcLWAoa7YMaNiFu3zaTxA4mqXQL",
  "key8": "5PZ91sx7NV7mXkWwGq947Et7usvkmNdhEPSe41q9gPEzrqK9z8D1AQpry9XJpJvt5ZCstTJuP5vMGYwgcUNsqdSf",
  "key9": "3QbBBWr7LsjFwRGn84SmSxD7yhviWri789sHh2mz5sfKf3SRhKXrPPE7AVWZwCkn8NjqAXPL8Dfyu28vpNQDEFfn",
  "key10": "qRrCviX6pRU7eknvBdcpqY8RQqqUnKsZGECoWUq8gEuhC9Kuq1j2QkXmwpAYHvwoyPzh3MZQQXHL8mJryzxnTvE",
  "key11": "5HLXGg35FtH4KSS77DymuQeBX1HjfwRkrzi3xVGFs4Trn5DwJBqkA4QaBMSpZPsUogBxadJ411ERqYuNX1zWWALg",
  "key12": "22RF2RW6wgwkrdbbyDSNZGC3EcFRTQV4nQyXfYaJd7oZ4D9z1oREk3bzkNfkULhM9NTnb156iTWJjrPvqfa6gs9q",
  "key13": "2hoduVraAiMqZfHH1FvzMQYsbBfacVbXPpCPsMazcFM8YuwdT6kPWsFSZPkzyWwaqNroP89ENTQykapZCoUcQgtb",
  "key14": "2DvpXtmmaAZH9kzo58sZka7B6aN3hmSWYeS823d8eSD6z7SquDQBtNGwuKvPF8mxF2FcJBcLTdABMYEiZc8YchD8",
  "key15": "if8JfvntfxbJYpZFeZp1pmjhVyA9CUj2VH3ntsBRSZYLmZfBazvbuk3MkE6uw899ZpCbANR7CVRMDNurpiaQr5K",
  "key16": "WhMuh4X9huFPSMTwK21gda1K5kdPvQjsWEgjdumdjPpPwu6hEv5XW9Vo7Hku7b4yiYcc1WaXTXNX3m7Sy1VDdGA",
  "key17": "22L1C4vrX2MEZFoAZZCoG4DsXLCdLdspKCaDeF1X5yAeLmXJG3gdYSDBsoPVFghAUrqV6bxSgyUhFW8z5XsL9Pa3",
  "key18": "4q6x9eCahBbtpxFCjDUSxA9evj1aCr96AbhRdFYLJQZJ4YYew7ac6yoScTGrqjAbyQuK2KkzV2H9wNXayyP3hBUe",
  "key19": "64R4fci7PzqVVS48uttAXbRdSGx6nj7k8cFb4gTWxhujJCARbztWN2KS7MxYmihZHtAozNRUdDcrPnnZvbR6XBHJ",
  "key20": "463YySNgzp25LSyfyB4jPAnaxP8qXkroK1arjrcSDr1rgnqCtSSLe1UBNDHC9fjkoXhzRYiEfUVsNnvtihEETP6E",
  "key21": "5bwJYFQzv1V8HX153GzZ2sRhB18EtUV5QvxwAFzjuGay3s6HwUCwKMhtY9ienskZrY5U3hqPcqwimXqzCubj8h7S",
  "key22": "3ZZqJuZ7786isB4RAPDMHRiYyShf1rtU5v1fBity7ppDYsxnyhMRHGgVat5oSoovo99xSvcnB4J9K2bRWS8oQt4F",
  "key23": "5FHuLoZWbgxtxK69WVLsmimx5qfepGV7VTxznENzXUUChwhVjUAaWTVwZ25SqfXc28RrdQTr9NxuKHTMGAnv7H2a",
  "key24": "2WuibeYiRVH7YsJoM35wLnDTcTkoF8DhhHjZJfSyy41VNfTxqpXfUHSRqZvzam7sYD6WWu2Hyf1Ry6fAmTg6Gzcx",
  "key25": "5wvsY4yje78qMG2Ftrvnw2picTBEERGzHL5GXzQUWE6vD3mnbWitDGBzyS7LPmDDeLkRbg1J5t2Yqpq42rWYfGMW",
  "key26": "4bCsJ4QCEz7e1NVZKRoSxCoXNNfKGuyh48hTpMRcAh8zWwSycFuBAvc2LPhEMqxssCiDsBFtTvVXVH7VHFPhxSY3"
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
