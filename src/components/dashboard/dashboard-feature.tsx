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
    "258cWBeA9dhij6ojdEr1k5JmTHqsTHRRmeeqyE1jcFiKw33BWYzARutuU58yAdHRsVrni4jnB1fZssLiT7aUJ878"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zMXpN3GephgXzhd42q1rvhZ1rGgYaEvBynVTmM7DdXbXDFQXXhGrMdCDayCFTzWgtomGSrwV4vsr5KbSQu6WJF6",
  "key1": "4TCuiMP1oYi27FTQDJaaUBiYEbUkvHPUkTHhZRBczxQNkHrrT3n1SYNF7nG8VJzphm4VChB65hiAgcXChuvmjZCo",
  "key2": "3LTzCxeYWzkmR4rpTTvvH4xXz7tCyDZSJRZfCEMe2HyAvf4ppZvW5Bx3GZ2iTEifywbMfBUjYCSr9r7nq6D3fZw6",
  "key3": "5G2HG354fPJUARWgaVZkjerCfMQkSdWZ61XyEL4H1xakbDNbotiAdUBdCShUoSPSDa25kpqVe1wZZWSV4j4ADJoT",
  "key4": "WXNaK1Vhvuwm42U32wDgqDSx9X8yxGG815YnqRA6uqrAHfSQWXmEHkFDBFVfFRnuD1Pzn4Bau8nWk1wxmjESFeW",
  "key5": "4U9cxDJSEbUn6L6c5LZ6uVv6FTyTTqpfN2UUhySXGQyrDzLjZRLS6PQzJad7be4nYnqkYjua1b9HgnRGZYzvLTLA",
  "key6": "5oPeqZhkajhGaZFxbDDF8Uj444cEwr1qtd8tjjWkeueK5dEf5Cg57YDgkXjGDxcjr5FiSuaX7B1tDTWJP3xVDsk",
  "key7": "KHL723Bp1N9nnwMsQ5Y1a4Qro8gtxjs7y1GsDiJ4ConbP1gAzDu1KLht3mXLpDzbw2qogQm1P635ESastqcxTpC",
  "key8": "9CrsPRcUt7V3Xr8zssN26dpBMiSwijEeGQAqynfYt9wxfPcvgS3Qvrvs7YsgndR2SrSb6fCrT1MQQY4MduWJZYe",
  "key9": "2ChmLzmquBfGbBZEFSVraWBZrsMEHqUjoMngCJwv3HVfUGirZ7kPwvPoZi89329ESEtUY13d7E3hQnvxuDgmVH8W",
  "key10": "XMfnHnA4VQgUCVt73VwzhociEsgnyVHSzqXgiyGc3wTaHJVVidN74tvuqrjq6CXTbGJqiZEP9NteTj58ZxGTEEn",
  "key11": "hscbfEmHNDVFhP33ZzRsehbVnFp4ch6z25vYQjEvHdn4D8DRVQAscnr3Qp7jHRv1ybEfHhKckp2YWZBMNDiJt6m",
  "key12": "5kioBcWWzcbZc5mBXXAq8yCc2JV67nw4LEJYW11jdTbUkQdD4wufrJ2W7ZRtv15w5EZqDCr5XTeNbWz9pcBEkwtJ",
  "key13": "2n8PMyJfuxy1oipZHuex9aWXWuZrDSkbf3Btu3qntv4QXsNjZLcktVPUBfAKvqFupTe2JMd8HjzFDbqdYjusQcp1",
  "key14": "xpmJBhYCswrwMucNGgzzZDQRfqYfwVAgMbEG2dzRWrhG89qshZjcybfNZ6UZTksYdNBhCS8cTCh4pVtc4UDR14x",
  "key15": "5ZCoJZWZz8H4s5MmM2HzrbCYxnxrbTT6vkfLyGZd87XoAmwedxyKoXLtbXPCtozZyHusRupDSFR4yRD7pj1qBVKy",
  "key16": "2E583a1RLUXEWiuyjuoPtgAjjjQtpHhcdc4Qh6aytfKPn7YZ7tVsq6ukujnumGbCsFpTDhR5Lzd2XyNHPBgdYLee",
  "key17": "c2ves7upPAkMgb9Avcji1CeXmssTcCxiCmmiys6VJBecCB2Y2SkPqFQygLXjc3J5oVac9Si8vyCfNdA2F9op3Ap",
  "key18": "2Q92dKufQ7Qg83HVA9o2KeWaPF6Hyg2zTQnUhErDjq41EQJ8Q1jz6jiYvZkPr5dZ5KA6nui48o9EMptbqLQAtiEw",
  "key19": "HYJAWfYXsb2BcTbT71WHDVLKh4S4BhSTDxDvqbVi4nWSm9UQA4B3hyxdhDkb3tbz47DuNXhaC6iWZY4xtR2ZBKs",
  "key20": "2iXrvYJ87TcoyKGZSLQK8oBHnXVSRykGR6MKEz3pDy4syqhTgghCgmcGSNTWhyLtFkxHsMK8AChNXNCQniU9uEKj",
  "key21": "4j6owVH15y555YTd1gkrASUo9poZrZBdjXTmU2sQPdp4wbazwEhW8ssiwFkpayGK5j7ikRdb1T7ZAsQRmpEi4PBY",
  "key22": "36wg25xJi5tr9ojCNxTnFBCRb2QEgZMgNWz72akXiTQm4ZuWrWVKpPz7qAoHawUYzPXyx1iSdcWLMuvgXxwU9Fp1",
  "key23": "55RymWjY5qReihNBnUCkPGupZZkHTt8TxT1m5gmmbb3ZQQY5c178DChLQcW1hsBoPHEgdNpcstmV2TYhNkE9jZ5Y",
  "key24": "kYffUFzEiPkhWnLuYY6kDFHBhbs7HLcEUhTNjGu86Rc5N1RkCW8ZWA9QXgmj3muU47FYVRy6vwfcgDDPFhf2YCz",
  "key25": "4sD3GbCd45b3zvNeyBnuqbK4JiXnPFQcUnpvUUiZRPktA5fMrmUybbs2ph3YdukSHpgj9GYRcwRMxPoG9ChSQoEc",
  "key26": "43YYgNEEUy2Hej8RBGrSYoq2kVWpvCfVPugjBqsx1NoCu9fu3DA5XKCVg8w4DVcuhXMCbgFKvzdCMsg7EyV64oMr",
  "key27": "5RmHF2U3dciv43AS65JNhVy27fdgAsN7pCFarfeaaTm32ujevqKWp2BZcpaqMf19tF6YLsh23Nk9vXQHDCF7SsBH",
  "key28": "3tEgPSiFs6mrRkyLndJQ4NnUJ1kmg4ZWTrJJuyTvniWnprmyq3J5BSHdQVEfuguYacNLdGpcE7j7AspZG1zZDAis",
  "key29": "61shgjB6r8od7jeA2SyWDcZNMAg8rKDCt8L7cPG2R5Ck63H6SvGmpXm3D1RrYdc79hGhAPaatbuYA9suJXLH7ZP8"
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
