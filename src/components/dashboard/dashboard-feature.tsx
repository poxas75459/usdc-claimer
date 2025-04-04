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
    "4RdVh57pYRcYFcKVPmR5bnZiBzxvRevMi89XE7fEjaJ2kW6RLqf3tmb8So8Eipax9eg27eqy867TX4SAbUDoQoTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sA8vjLf8dcj3TZSCYEEi7qgXCNR39LSrTPUexrj7hhH7spYbPerdQ1hZmyyme6oLYBFKM5tBUqVAnbxtbvQM7Qy",
  "key1": "hDQ1uRWUVSX6J8fJVKTW8TDhQXULfSTsHNNRYuVp5xfVPSt6BVYvp3JefG7C2QCfJf1Gkwpj64j8MppXcKrDhDW",
  "key2": "5jKamXXSQ6X1dWhhphJ7w7vPNeWv1m2ixEEoHeKQHTimo5jYgXcwFeyhDgweduYHpauggD4v8CV4se5uUpdHZsBK",
  "key3": "4Dq99dVS4eobGaXCS7cj1gvTomDYPBqy44CzNdqvjJk56dYXYWUcfGSofh3tYF2M7EP6UCZsTmVvRR5g4oq5o9e1",
  "key4": "22NnCSi52B5eSiQF2i3NDenSfxesaBehAWPhP3B1LC5fAbxsyvg4tqkfpZngYxCKyCAeLzUBoNt3mHeAD79sVX46",
  "key5": "5R9XrPmmBfTxiR44c11W3pks5MMor23QDCawXF9qAqt11r83eoDKPPCZRsmcBknJ36CTUYPp7cjWCV95xqTtfnWc",
  "key6": "5gH2enHzSSEE4e7KcszdXoaoziLxicBCNh2Da9e37SND1QGWK16TWmPE7DUpVm6DwsdjNVFx3RddHthtQFfHPT4v",
  "key7": "Cq7cmiBUFgak9JYaP4Yv3BMdHts5w22tPyuucoz7fqKjNn46L2qZP1VkFJr5wrnTMPiF46GcTFCczzrQfaNdAFr",
  "key8": "pkbYAfxy4aF6S7DgigaVXRPPWM2Y1wiir9hU9swHSSwX9PjGfoG1dZaj4P9pp7n9owBZEF12tzaHTv6Rm4csDrR",
  "key9": "4akhWr1tdSDgLuzLdZUjwdwbmRjAsmnxN5cSUXeGKgme4B2LJ9uEpa88vNZMAU4bhCMe3EKXdevrz5L2uwd98BLf",
  "key10": "2MxprLWGdPWruVB6pYx3CPm7qkmLJQP9h96MJa2DEXiGGQvbgwq7RwPY9dpTP7gfXk9CntwG5tzRdxc7Tds76d6c",
  "key11": "S3WcU9uNuRCnw5zhsP4MeeE3QLkNocX82ZJa5fUoZov4tMuyJgV57Db3JT2FaQJWmwQweKXYt6ubbnNmqQ79p45",
  "key12": "H88W21QXgmuCZcspYqQPiDR9kRqECywy5hufGbCs6GFQTTFbYFFHAxTuCerJhQRxdXD9WKsHnjyitqbmnjrUzTL",
  "key13": "41xKVRWg1DstsvmZDDLvemsfJH1gssa4U3wbVcWQhuZRviYzu52tDfhw9hJML4kSiLLoZMFQ3XAvD6zcPrUcSEFo",
  "key14": "3FV82vmUcae8HzTMuoYMpUYSXVqnAy8aMNMKisWh9b93h8tVdFYod5t1xQ9sg6c3nAP3prCP1fxsNkpckAVduL9r",
  "key15": "63yMCeSQdP4otr73BHRbsx9akiqfFNZ1KFTPQCfe2ctm8pqj5RJWbUjf18fHzrpnfVjY5jh5rahsdgT1H9wFyDGD",
  "key16": "5u79TFBUY1BD7w9rf4SAeYHNZTSEda4K9HtfReWiFAhfqRkHeAHmHY2rm7uVyrK4d4nTYtSYvhqVvTFia3hzBaFe",
  "key17": "5CQPbxXepyptNATDRPfBY9PrbxxEPsiujdNEF4Tin5qiqsBJMqC1W9HihBQnM4LPuaNKpdc45QDaU2zEaL8X2uSK",
  "key18": "M1bcPmcdaSXnSznMesco4mrxp8zRRu7iGuqQeDDQ8K2KZ3LRAKqExi9eSfVB51CmQwwbidBJXCFUAyiDwtDgAq5",
  "key19": "2cuAZBYBTugAcHGYwgkXVjvYFP91rsh4ykCLwmcmRUBwap4QZyftA1Xns8qwXpUNxKyGyqawkg97HHLQH4NNh3JW",
  "key20": "kwWpd7sdh3axR3vbZHVv5s9rkcggY8UHR8JbWrA8nAZMFJf5Gik3qGGu7fCsvabfmF8tf4keh3qBzmN1p7tCpFT",
  "key21": "3BaVLBBUjvxsxbN8F51eAC6j3CrpnutmEa6UNosv13BxBSgCk4E3CQpEq7rUoVCqL4G55nmQDqTCZgvtERCgvUym",
  "key22": "4ChMdw62dijxRbV4oCKR8sE1fm8w9BkwAB5ezWidEiN1WRFA3rJ9cn4jndjEJmMKfi46QfUUQEZe8rGwerwHSvEo",
  "key23": "5x9QrvfwYxxx43Sx5aC1mUE9KuwsE54bFN3CLXWb2EDyVh7E3BNKQoyPY9jg6reNETkCBMgbGkgLyWc2Ccwytm9N",
  "key24": "4v5dyfexiA5fEEEeg3aacj7P4bv6bBpKGwENAK8yrGPx9KnPSExKT4dYw6bUaRFcRrm4xhsuZAXng44gkFYQUEJe",
  "key25": "2uXQkwikJBFT4MrkRZ3Z9ZEwpAv14j2bQLLB9zFXgn1C6mqEbFNqHGQaah4xXndXC3eCskvZ2eTkgjwydUMEsSRa",
  "key26": "2SQSVnn4rMCtgMstCYJaP6LXVuxJ3nyreeJ5fzwJyrDqiqz7zW9WqoT6hVBddDJiXM3vdRWbGUdUwMrWGesDQSc6",
  "key27": "5XDcNa6GiEmRZHp5K8TTmoueJ23pfaq4jfSuMmTQP6PXdEb724ei5KMRkB3JoYjbbwLf8MMoZj33Fo1Zctc9j8g5",
  "key28": "rSVSzrvvZb15qmQjnYf63efcM984RrsFAwrCdUfviuhTzJAVgkzk2KVD8hrHSmrYHMzTtfvYuJ18nWVKBF68KYo"
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
