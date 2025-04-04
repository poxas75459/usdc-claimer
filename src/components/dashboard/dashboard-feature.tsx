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
    "2SU51F2UpNPkb5xS88YBgKy4v6SFzgut9rsX623pgWfLr1xbUKA3kKr1CgbJTqXLdU5dUAXARC95a5bhscN2W7Fm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mn7k7iQVYZjsnUiNLXsM8nQvyeMhLsZjdkFbgbyNPKm5FUReJg9Y5FyuFEZKxb1fUVq3LnMme7zNLyak6YHvLVJ",
  "key1": "62eeKP9f2ZRj4zPpuAkjwnhDHceVajM5zPEoTpwjgxK47XyeGk2QN8YwCPxm4bYPAYcA4UyKoQqWoMdmiMNzFLTs",
  "key2": "4qwJiwS7Zn5aSSwGQesUZrxz2FKwPaZAdMPM6btKbmdFu2k3k9J244iTm2kFiea98kfryYrmi8sdRyrvYvvemJVG",
  "key3": "4yyJ5Be6yyStGredRHuMCsyqLbCaKe98RNw7LjdgGWxw4dSBcMrRJENstiZ8srDc2LqzvsvsTTajXyRythBi2m5g",
  "key4": "5XUXRfLX1CXchqWHnubfNx7pDKCw5APVmb3zecjpqXvUPKw9wWkxoQQX7V9BieEc2QytJxEFCb7bKbhMtN4TvVR8",
  "key5": "2uSiqng78vNYGQckcpjBTTwUGsyJCe2MHtZh5PTnR1TJdBKcxvoPkav3ChovSUw9nBqyjuSXtVWbo9jmgJGjTPUV",
  "key6": "5igmEdnDA37m2KrZbHMZvTgBDktT2YKs7hPU8vR8yDFMXPQokReBRQt93syuG8KSEtW2hucKczJtqGdEbH6YJd3T",
  "key7": "33D6qKCvxArxdYNTL4QnzMDcZYKWXRMweAMwb8v5UsuWKwYKF3un93sPFpvT4YPDg8z5uUkEqQmQquvAbDnMmScu",
  "key8": "5G9Jit61aSvBRsDAuXkA5ra8dXY9CkJ6W6Zghg9zZhcRdbeCjLvo1iKyfGGR1tubFHpBxEWWnxpBf8oAjAti9xcx",
  "key9": "BENoYVY9XLXSY6sLqAT5LYNkFVDTHQyi2gg9FzsTiQ1q8y9nDtRYeqWapMBv2EekPeYCEUNbtSMuZBCTKqhRE96",
  "key10": "yreYsAwW6uh9CW7wTfae7tKACKmxvihF1JZHoT6j3KYLZxVxtQwjrBc8ukP4CFM7BrkyKCUuG3YqcRuH9X4Dx3J",
  "key11": "6u5U2RzbgSvVWRvfJQj42zz2MqHp578GUhQgWe4gnppAnCKcsDNRLwspXxF9Un9b6NaXELc9unqkmpSjvVLuT4U",
  "key12": "22sfDgYpXxWkyQ2RAEDW6nptBKeXu7XJFpfYp5K5q5GsYhXk8wZXuFpvypmQEpY18pydQa4rZPMDA99d9TsUyLnU",
  "key13": "byaYtsgfQ4Sb2ogQjHSehUx73kinHR19vJu9XjTRwe7U4HUCVpywV7UkzfDAucSrpbWYVv5FEkCpWULASfNKNzH",
  "key14": "5a7ETb5HzdnM55LSkuVKtVCWgqQx4rkexuz6mjRKJUBtsyqet6etnLPvhau6N7BqgN3f7WWHm8SDJy7ZpNp1yumv",
  "key15": "dNn9BiDEBj9M6XxnEEaMtArQT7dgeHNbJt6tufFU28w7y45Tas1HLKRDtiG486ovD42jBbVzJnMnSH4SVPgqWSu",
  "key16": "SQz52fxjJEwY97VkgJx2Qq9we4Tq91KTZZxoe2tMtQoBy1ChkAXPXxRybadWPsfu5VEirGChTpknKKXKXS7ZbdD",
  "key17": "4A7DkrDKnvuvd1GeiLTBAHiWCMCHdMhcaeFwhbCiVjY7oxK4ze9qJtsL5LYST46kZGjotNtJzEwfqbmzZ2EsPf3F",
  "key18": "2kXaM1nsNHuht8UwhyS7ygCEnfo4QUqgXDAjQ1ovEt9rQ8KkPaDjdQkGX6rvqyjgC1wvBnntND4ZpKdCURVcMGc8",
  "key19": "4dLC93F1ZGghB28TXTW97BoKQ8UMUu1NuHc4mCpuRvUJWZYmBpYWhMSzxdkPF4pTXDbNFWVCDH1zpfxoPoy3MyPS",
  "key20": "3wHCbLvPkodqKN129Niczhr9867QVfsfV41s6sQ2xGCX2vuTjuEK7myCT49kqbjT1XTxVyZXBPV4286YDf46hzGZ",
  "key21": "2QD4S6NqsftqAvXoRipfXXbTAK1RDUg3JsHnhevCiLYbChm33jLF1Wi4Ko7wNaAafoWMD9nY7qmj1hZ6ykGc5Sfb",
  "key22": "5temJE9GwUGv3ZqrrhudqtjVs6VRXa1kF8JCnPn9e955kyCX68CvAk6o4GQ6WpQhbG6pRddTYdrsN46tWVY1zNTg",
  "key23": "4RuDzCUtTg5bTp96xqoa7DqrjiRAFA41HgQGkb9WmAq2BNYrWaxXqn6VwHqGWLN4sbCiFfarQ5tWZDfAZvNGPPed",
  "key24": "ftXciMwewRuhXw5EHULnx6etihpQDTL7j6WACoz3D452oeRzTvxcXuaZwYEmAQHVh9tgDWAyyvyqZCVVvfto3h8",
  "key25": "21cEjQh5EsDzhWZ4c2NWoBiw2hp995FHucNiTXZTp5k78iuyyQDpizPZit5EWwmWcm2WSp4kjxioVwBXi1KiXBXr"
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
