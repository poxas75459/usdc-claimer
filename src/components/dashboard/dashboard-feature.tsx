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
    "7ydmDbZ1NGWSxBaZdrjAvuVzm3QE3J6cz8CWWG4eoXaombvEwXDxWbQJWMY9295BjAySZ6ABXwqFbBVdhcD1Ks2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34HUAjqoyVLZ87hKqhUTsrsfML2XxCPUqTTERjPtzH9HKAvXSukAW23dxcUEhbnEZYTyAg59eUEkA4nX3KHVuBDh",
  "key1": "ZntWiSiigs4GWiGSMo5vknvvLGwWDjKxkMUhRFzT82gVngGt3hQTh13ue4q5ppByPJNYsv1P6Qnjxvp2uFSVMHN",
  "key2": "39amoSj2GTBBtAf2wCpjf4bWobDWsSUK99BmHE1ohKr1JC34yNrq3PHUWp6ZPXBCGM6BKP71Hp5XntFykB8xLB23",
  "key3": "47pVx2bNoNKwmmDKbucKDxGskurK63P6KYDGF8g3qNtWK6Wt8J6FqQz5XDA89cFqtMDBJxuNMpYWr4kA2CwMAJ8p",
  "key4": "2oyRutYHpzX7HKuNfReWbMcfsaxhpAMQReXUvL7wyVXuWKdT5NiNysdNKY6bvyJkknUMEnU7curMQmYQFNHE75LV",
  "key5": "44Y1MS6o9TEfb3ofu6SrydWz1Gf7NsjWTTnLMsH5ZJ4RhRWEgV5kU64YPZBqFxzRBYuk3e59bBTqK8do18trjNFi",
  "key6": "2hjdaPC3rQ9B3xh4TUd91qseSVNjnJHtGv7uxLajPwL3JQBKtqXGEQVQZWKVfUDm8nZA1BkTNHi8DkzD7911AeQ7",
  "key7": "aohePEMmtZvxbjj1mexWe8Ms2fYV9A8iKridWptCvk28PUj94kRsQs6FaLw4SxxMNibcRVihX1eCy6EHUab5PS6",
  "key8": "3jxzFb2JFf38bnP4TtmcgJzEzF4cBNenZ7QsDjR2L9SXMH1UuK8xZMx96HDusM4LTzDMKZTmGPEMXnrVB9Rp9gxD",
  "key9": "3JP6jDNdqdsM57un8rNtYRTNRu1aVAAqCo5ufxwHM3D476t2nenwKTJWoTitVLhQvgsKZECyxd7deLnEzTBBP7VA",
  "key10": "5GZaRdViEYZPvYP4zdrWwAiteSmetXcpFP2LvPjEcMBp8uHuua6YxkDyr5rbuxCxe6b8e6wZBYhsUEJK7DfEwkAD",
  "key11": "3UHJstnqPVaScVbVcHuamvq3thshwi4WFkTQLGHwBDmhpTh6oGC2rEhSiLF3U8KBSxSNXPFLRHYuWmiaLKxn9Rce",
  "key12": "46F3k9WudT4FFQ9aK9MM3Lt4ZEXMq1ZmZAVLFxvtTFmW3po1TYLrmqHmf9nk5Qr1JYoza1BGbop6AeKZhghxvnA9",
  "key13": "5M3c3djD9hEVSmwJ3Xb3djNYZ9y2ffDPJceFQdunVZzUioExiBEMEUNxAqdSdo6nQNQPrFJuSrFQPmHNN1dMuG5p",
  "key14": "5G8gEhh655MJwQtsg37ndiMkn64hgALpbWTJjbQzJLyXQj72ovC7DeX3Juy7YE1dBWGUCjxPkFGc2vefQFYLHvzM",
  "key15": "522CtwQeVfxW5e83Rt5YKdsoL6v7TnZNMv11HBXcpUNCFU761fGataTJbYhst9hedzYpbUrgqsbcvbtJNEZDWLT3",
  "key16": "228fbnS2P1YJhJQHnvTHcVNzo56FcvH5SGQZugCDFerEAyM6mutM6soFoReFH5rWJMDs3xJ6pyA5Uk1RGMB2L2zH",
  "key17": "5Qbejjn7UDDUn5uigRSFbt96cCK885pG7JqmbRNAo8iG3d2SyzgVj3zzHTNsk8dtSY4C947EmqyP9B36VbkDuHeF",
  "key18": "pwUvwPerABNdudMxa2y8Txntu9dxTGWPKDSV2zsZBxpTf3ybU2EDL9W5BGRnmiiHG4yM9Q2Jd7VpxeCBs8eKysk",
  "key19": "4mXph6M3xXr6GRdy7kNGrDELUdN7VyaBdCXbTiK25AL1QkaXn6ZemDnfDJ9ALtT4YAES9auPED3ou6coBcP9Nn62",
  "key20": "3ZhkoviKA8ynmQrKR2vtToxgboKffNac5eV7sFnH1pJfkpkeEJKYB2oLm4dsMuXqU2Xbnmzom3MNYtiqxeLsM6ix",
  "key21": "45X7aDw5G9uU1jbsHXc5w1vVeUkfQ9Ms6ZLeeqUa6GiFYJJvZ3iWH4spLPxyJEMTjDngLFMHXhuzMqhdLGPSbed6",
  "key22": "HJEB3L6TZBX1cJucMxeEmfWd4cZBXBwvBkaW3vHczDt4HQxLHQWfE5icq51kFyV939QkM7LhFyz1pjqvg5apVak",
  "key23": "5FkYBiUV9wd752JYY1vLzBsUchX9MS3YKfjuHjNRsYwcRRvvz1Z7LkbHktXrj4y1UnU7uDvU2ndhCL5uXqVuun21",
  "key24": "3YfJfh8Rdg9eb94fUNuPoBtL1NCnEimVDZGkTwq2k5WUkdREVJkMkUfqbSu8YfcsALFe511CM7ctxtgqVLaiEgvz",
  "key25": "4Qri4iH7D3uC7WVbjgDARHgV9tA8HYjVE3m55ps9onMisa919d2SsrJxeP1YV71KF9diYD7mB3VWhRUGYqaHnbZW",
  "key26": "5a9sGTXTyeLy2JL2c3EPFxvodBGQ8hG2LeemFFubAV4Jrvy3EjtfTiUDsuqMXHawdPRpEdVS1oaA3F93vdqsvWR8",
  "key27": "3fVyw2fHdh3VEBHJjaKAKXaEVxccLiVR9HjU1cHd4E8x9Ci5cCkzLQZbzqp73Ku4BMR33ozHomXBBunriG3NhScW"
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
