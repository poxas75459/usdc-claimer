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
    "4pqAvtji5NbvKyFCT9pwSVQso3J11TSfS97fpQs1GQp8p7oGytuxVdJofJFs9XDp4BJxrbL4VFF1uemHhudzGSEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jRve8eDwjv32YRnXtGWh81jwLGq9kieURkg1LKvzHr3LvqEs1aarRL9aTtFiPiKpEYcvVAddsCcnibsMHZgxM3s",
  "key1": "3iVz16B6gM6vL4Prcdo4iaMVeyzDT5o65aDHAVAZXfwMcfcYzgS6YuyfRiq38muLQUwCgEJBspA9AcordUHmy96g",
  "key2": "2MUSLXxzVrqsxLo83iyvF4NuSdB2tb8C8V9Z4H2SEhbqjA3HaR3msXT2eRDcpHxwqr7wak76K7stE5HuH9GhfEYz",
  "key3": "2iYedJRkb4GDuBxTjxbzouvaRwv5BV5aHSnpVqj9pdxxwNK8XArY31u5kfifYquscdJy8TMfxZ5aMKzpkgkqJ8DL",
  "key4": "4Cywg2siLTMTKuJA6YiNUcacr35fr6s2cQXTsyoCEeNnFQ9gEqWoyjkaGqhRncKc4Qf89R6WtHMTfLZSpQ4qpT9j",
  "key5": "ALUcZLJURJUi1RT72ssSbs1gVnfgp2CJSLftmgd8Qke9wC27VehtEJD1ZTS3SPgvZnFzYTkjQwETEAjJCckMUMs",
  "key6": "4S8K68uSumzhXh9EkdwCRQfxdkcTuT5fNQrAbMCv5aSDyFLAQZMK9CJYTLUwMAxNucbU5JaUJsY7s2qxtAAKRHXb",
  "key7": "3C4RGQq1MwthgnyjD41X5hpt4WYAMBAFsRVxVUWAaGXwT9hNQ6jXWbNgVr1TpncQ642E6uMxXMdpSpnLi7LTnxYr",
  "key8": "61NmzSEe9jxChYV3aYD6y8xH8pcUKBkgMKX4sF2dUYA4w2jYNa8sk4BGDToi3PfTfQtARnfSspfWqmFw2FcnvF3v",
  "key9": "5cKZygo1CSf7KNU54reLkS6jWaTeEhTk9ZyouQDWkdjAfFrBQEDd1pcJzucCmhUdm34jWGc4JWrwQHrnB6QdkKDQ",
  "key10": "4ppFva6qdh2LFRN31qLy7ukCPXR4jBwabVarUUkiwTr2HNZj9XCt3jbeYWmGS89Y2dBBWtY6V8cnM7j7aDfxpFPo",
  "key11": "3v2hm7pJ1g6aztTmsxZsxYK8AVzVQX9FCAna8ALicS7dDN4mNhi42hiy9TJQKfZhs1nehSGUKgLjDMAQVwr5fdPN",
  "key12": "Xf3aZxc6tVLbugUWsPSBknurySs8wF3LhMm5zWFbxjTLPmntBn15EmUSiHDL5r8K3mT87RGTJ6ak61wS5XZyLbe",
  "key13": "4FqdvnqFs2nws1rfTRGTArYHpL7ocfJEvznQboeGx3Rm5sop7WbPxpJ9n6XTopeF3Bddj9FUhmbE742NKg3HNBR1",
  "key14": "67Qxez6qQSCPdgXwtSLN5snfcHSzv1AsK2kdoWCMjqkCHXhnobaVVpYo5LKBGsBHVK8zTj7YDNhYspgaD1gFkHyv",
  "key15": "38PNCLbgZAawmXiEnEPQa4X3VTfGhPYU8PexULjx6H23ncNQ98eWBuzWE6fMnCqCzZ7aqgeaN1zvDiSma6N13Ku",
  "key16": "xthG1MKKt4qPAbm2tx9eDo752pwAnsECRGR6dYu6H8mu9hfR3KA8zpR92BpWE7dr6vq4iU1WctQhyvv3Jwgumwg",
  "key17": "4PjhMo9khDQiYjXSVAqw45L61AsxFrurwCcPZEiqQX2yw6YpPJeetXBjXtU1381sutryRccxQfLMTvt7NS5eMjrc",
  "key18": "28RsK2nqPAVh4WCjfMSF3TaZVPJ1HhnLS3fGr3Gbv5a9rVMRevKcEYiAgxcUMgqfBvM1iDTXjMueD7MEdcqDibdJ",
  "key19": "Wet2TKbRFVpmrChe8P7XsY3C32MA8R8xvrznRAWgdGqXCyLFrPG3HEAwLzGuAycgcSn3P3RXpabgrPUgJEDNGS8",
  "key20": "CJLrT8gwCwVmbKSNmiNFvbn7REkyGPSt6ehoi199apLjVVEoUWUaESN1cF2Rj751SBJN6LRFPzFzCULSvZZ4a5H",
  "key21": "gLGTuZVzCB2R4pLuNemxwdqLZfL8CpvisJdJVwpaXRYGF3zb2Z593uEBdCX4CwFHiCUauXYfuiSMnDd4v8ggqHE",
  "key22": "5unEuMAQCddMf2BkM5854RuSCmcxibeF8dYspTCqAdpy5LynkeBNY6jmfkwCiCtbAnV1VWs2yBUbhE8LijsgaENT",
  "key23": "m2xAXYgvWvG9TFcp4PjkfTSzew9aPoW8JLW8GQVtehv1qDNeiQRYke4ZVVvd1VJfBqApaE9GpUMxbJ8BYKsCDaw",
  "key24": "5pdPNgWjxU7xHHxKdoyREVrDK5CoSxwypET21vLZd4eXiKLneUmnQBUbhR2RqwwTTanM6dvXYSM7b6qtNYEbQB5m",
  "key25": "2JTBnj5kp8aNe1MwWwMGVZmBqASRyAqSeNUsJbnf6NgkqHFWqzpcGTvkv8vdSrYtC8UboAi4h4NnmhuVSf2Jtjtz",
  "key26": "61C38W8Z4M5cd1HZFiGvz2Az8WM5jJ3Tv4gyw6UXa7QuLVZy1PBrC2ySyCPU33uTMQn1oySWgi7KM9sHfyvqezXA",
  "key27": "38hM11LnZHSSxo1dpvwKyY9eqbDS3VRU8bkSEwBxCxeCSBptzpcKatGgkViuapoTquTc8t4aK7dMTBmjhVEjsnS",
  "key28": "485KH1eCDza1DMYLKxLK1pHe6RXQzf8P2Ls436SBk6jKbq1qVHTemUGZya38ss1i2dCbJHXXNzvh9j1vrVSTGbLF",
  "key29": "9JjckgXG4xi91mPQRCHg4w81V7oxVjGbUyBjM3pYqVnDK5fxWGnmSFSLetPQgkRChfVLDseMMb6ozZ2ExxuviPG"
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
