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
    "2Qp3Dr3mgbWHzXBNYiCuh83uCJupwrse96PQz2zXguhXnUALmq3NsHnLJTMmow3Hw3PJ8WnnTzf4jQzqHXkihR63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UmoWeGKEeKBiVCus9sKJe7zuigGUJiTd1cUvACPRdHKDFwF62QuSNFiJYb7ib1KmT9DipQF8CbwvMZk3Qj5uLuN",
  "key1": "3zkvrvZXAp1uygvshd57jfRbdxjQff58XHtfJQiwP7T4mgxgtiqrYv9cicUNjJW23FrfNX4NQgKCDgKRnvRc3XLk",
  "key2": "dHpGboiLmC1ud9mCvKPnB3BQ1se1NXcfehuwxmxMskTqwk7tAtFKfebHH5SzwZCtpSsDXZiPRsPwEi5Uo8NkcSZ",
  "key3": "49e7DsmYRhHvbmku8Fh1ZhVoNUe5L4ayXS1hiixKSqQXTW75KjdMtChnpAonRGic9ZvPq99NJTMXRXtSoHNFsALj",
  "key4": "dP7BfsUGVpagSDVakQeDNtYT2SSb7HwkcKWBtx1kHvYRFojPafJAYasA97cR2fougKYDL27idZUcFYzYyKpHfD9",
  "key5": "4CcmoymP3XFZbbpiWNzdxpx4hfiVV5AB4u2EXddsJKD84yA4nHC5MSmWiPv8fzJCaaFSrvmkj6Yi4VhGCKgi6YfZ",
  "key6": "5B6CYwjKtW6hMK9Jm2HiiXGnkUDU7RNAyc8MdnLmtTZ9pcXFTpSsdEaaohCXVfzP83QouQirQUQ2mDrXzyHzzTKM",
  "key7": "2pzzPh8fLbbfmT9YnwdvvpJ2v3KwNABf8SJvJwtaeM2ejGzrpE4DQ4rtGjBmR4t93NDRgAy26vS48QCKueCNMBq1",
  "key8": "jY1Y2efvSn4zPv5xWAnUHDZetwxoh3RQmpvogcm9WKfLZfVX6G2LLAqUEDzhpkuyQYyQCNTQQ7mgUqht71AHSLG",
  "key9": "3mu78GhcZCVZBnhaFjWv6dQ7NkdenjJb4t5hZMTdrnxFZF7EqtSJxeV7177aeQa9cEetmgsRHgonRhesULZ2ZZT2",
  "key10": "3efH6jMzezwktzwyVPCLyqufe6RfyydhDDvHAno6aNXGCPCNP5jmYqPyE97KX6J8Q5L2pJ85hEVq8hW8Tzz7VayT",
  "key11": "3MK6XV4oxQsviudQF3TKkTqKLK12v3neK6Gb8qs5efbRDB2mRboMg38o3Db9ah7KJ4ohmkmvxWbGqQQQGUuuJfea",
  "key12": "nnhsxe8dWaVN3SaZFj64NSHVbntniXjgDvDD8SkDVCmAHFyBardnVMUiFk8mHcWS8rnvM3VUQrmQSqR9zgtYpnW",
  "key13": "5pmmWXLc2zG8P8vANn85tv69dpKJv4ueHHzyJLrntMXw3ZgPHeE3wugGnxiTxsKSRkX85o7c12sWi2rC7Lv3jGn",
  "key14": "X1Cju9FCthc4s8bB6Av2RLhKGTL9RsAbp9XdjSq8rhPMCAi6jZ9faxmp15pw3hG43vnfRbpLSoQM6Shq2wxZF3E",
  "key15": "5vLG3xo2gyy1N63977bWzEmHt9fahQLJkGL28U6rc6seQQzupT1Bi9K5LLsjn3oFsVpyfpi8DKpNKVhkepMUoCfv",
  "key16": "3zfNip4Cf6DZ814AnqpKA8MckBJLaYNkg8y8HJaozDhsgd9m9Y6YLrHisbueVCF2ZaX22bwaxNfEJb1YfrFjd8Vh",
  "key17": "3AvZpCVBiejeCYGnpbhd68W9zA4vyDe6LFdrU4bBfox96zhSF39sKQh5ADFygdzNDEkb6wFHUYLAHunZR7Vb2Nnv",
  "key18": "kApooTEViairVXDU8vpHzyBpnEJVuFT1AtCfgpjd3PubRZtNeoCs459ZUyRWHZYLzMsqdcHhfZAfbED6yi8wJzq",
  "key19": "4jXZsP7ZYQ8iKXU8joz7dNtDSRTHoiohF1enAE72BGhTvTRHgyGqRzcc37XGvCw8jrbX9cnPXi9VXkxhTupTus6d",
  "key20": "674WaeT1JJu12gX3xDN6kofxko9bxdeFoa2ePB5GvqiKp4xVH9Zfv38Vp1Tp5xB4uW2ZUEkNzHBcu2wTG7Xt65yP",
  "key21": "2HQs12k3rayoP2Q38Cvr2pbVvCjGQnw1ZZhDRuNxH9QToLVMJPihHJUQGCTBgpVfDpMLhM92NVmfzL6Am3TJ7DnB",
  "key22": "2gmK7osagVQndd4ZTMvH3gcbsh6UFV1qX7s9uTnATnzRqZVUHX7x118v2SXttKD7L7o5GapiRo1EcBso4oHykvLN",
  "key23": "2xJqL1Qbuj93WS6MVTd8dp6K8pfHMdweVS18QarKwXPvLzznt3P2rMEdDtZVCccDymsUPXH5HuG9VdSiHJzX69AA",
  "key24": "4U4Bt3N9GZQY12BzuUJAXCN7gz2ccfaJ1mKbWeKUS39RVceMd7yLHUtVmFjAPNk5bHt4ymK2XkTf4sVL1kyUs1S5"
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
