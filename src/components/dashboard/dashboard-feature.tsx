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
    "4pzrKpuCiqVE4yVKoWQAquMe5nY2KKAYybhdWzNGMXwwffLcv49daF1pPyGMUR56EP94n2zxvJnx1vrYnbXqgvPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NmcRwZHnyRm5rntjKvQUVnqgmZ85b8S786DyULhwucVNhUB6VaxY1A3ot4rhxXAz9ep3XKknuqX7JcF2JVsWw16",
  "key1": "4q5KMM3J52P7sUzrBFUWum86oS2aSjyJwcEeYsfSAfZzM5RdzRkAS9vc6ATDBKCtL1MRduo9AZxMW3YxuHUAENQp",
  "key2": "3rkkke9QgMP4issfYohZ5dZVWcQkUnVGouw7dmmqXpaPvArSW8apcV6x2w54o8DU32uzSxFysG2G8SCVKyN5UBz3",
  "key3": "2pbWWdnnrXPJJ9CReNX8a1nVHkGWwiUFNTCiZtSKLw8c6ahoJLS4n2bq7LHkCwKw33XAeJpdggF2pf8aEQyDRhhy",
  "key4": "4E4vo45DoQHgimVQS9Dffj6ixeL3FdJ39WASr7PgBFNia1YMCQaR9odVbjZnDvVigHg2jvCnLs4FGVAJa6z3rvhX",
  "key5": "hu9hcyx5C6bWjysdchYBsNfuuQnySZ6rMER3r3CwoTxERSmerqotQoZaoQrUaRJUmqNJUstJeGGbL6b7etBYizb",
  "key6": "wiruZAAxoMP7mm2iWTeWUZnbnJRXLoaQhQmXY9mPMVF3prYLjxJq2yfzjK8JfMS4Cj31TNsM7WsarPgfXG5yWMu",
  "key7": "2XUGJKCd4x4q7SzqourZLEowerafP8SmuZ5wrgeHTyPm8pXBkP4VFcrQtczKde6q1SomCUfCCBsBw1TGQo47vb7K",
  "key8": "5Gu2sUvhwh1Ydzdu4q5P5hm23s538BCjtNfdnN1JVPngdjZi7ND2kAVBkGYNrkyVgymkjzs7wTKR5PCDtp7mFV5Y",
  "key9": "urw91bayTZmPq8Mzyc546UHGni3yyyTjkF61Hiqqx1HuDLse4Mvdr1upg2zotxawGXv92iwX6shNX4xd16zypuK",
  "key10": "3fzV4KdToKu1gExvJzWD2zK6XXvefMmTEFrWo6ygeXy2WXfUSKLKyeLXQCKqHqMdeQBrcPzQ1C3iqFfN9rGHFSc",
  "key11": "Lz58BXthTcBPJKCD9XMzCK4ERchcK6p4yVSKr4VWoi7AEpsDytTyqeKbfcpwpLLN4ASdjU9BxyHVsmfqxqohbEF",
  "key12": "J97sbN1swEdW1H52srAaNAC9t8XPjGazNRUJnadrxgS4o9JYhicCPmEkG2oL43aTsVo6Ta8zyjdbFnsMMsFfUYw",
  "key13": "4ZoiLKdDobfvhkntk79kTqY8mzDiq6oaLiSRV3jqanEfD1qDQSpyMHEEzso3tLVw6Z9XpC9f19mPouPHwmUQdZTC",
  "key14": "4Vd8BovsHAaTdE2yLXKpQPDMxbvrc2Y1NC7FPPYqncvS1SDpk1MV5HdjEVmmjWaKfKYonFeDGVJw9FeRve6FyEZ6",
  "key15": "381fqHmndNpKhdRDTvsU9EgeNnTmzbZpHJWyWwwhFtRnWwKyZ6pzHzHT9bNPHgLgGbAUP3B4uE1p88XTftCirTgw",
  "key16": "67GbqYUZczJQdNMbEwvfCXgEJZke7wqwRDYhheqqusmPyhBr5XAuyRmSBxSKqtgCsVLKK7KLstM9TxMGgepYvzpw",
  "key17": "3AdRLf44JQ7qmQELif9RzhysKMUVvCygZgcpBuDUPE2tvaVFSp79zaBhbdr84deTSQW2YgVrrjnfTV21VE4ndGAo",
  "key18": "2cxTL2KWEsV52bKcKNTjmtgzCC8HR3yKhBpAMPFENB62NnAdHuLXjj661YmWMiTFYrXvb6M2Ds2MKAtdn2hxwknr",
  "key19": "obkWnhEQqxpWM4M1rkyqWePvpKgT8RAkKQZiskcr1WvSfgvaqiqBvuuHMiR2UdvwZyqKTU5GxmKiuWBxAHFeHui",
  "key20": "5VANQRwbBmaZYmUtWDFEDdYyJXxVh1zSTKNj7sRt86dQAM6HaURqBFe2s6D6srTeXdb3NP3G2MQ9arQXNs8a1GAX",
  "key21": "3shTsGVPLp4dHhsAa2e6R8iZuc5qUcgQom23k7JAwhEpFFhpw585ajFcdkLAvRrza4dWkumZbQL93zah5FJM52ZQ",
  "key22": "4i5Jyicb45LuMfQryfnGo3iJhoUePBkS3qYkQaBMjdZYnLjgXiQVb3PwCrsrLaJnnqcT1s4BDB1ctAforbNi1ste",
  "key23": "4XsVFirmFPsiXbNShSoi39WhAsi711aDqRRPmiM1jXGZZQ1jiVZwCfgYQjWUvPcsDYJFjGKHeyKW8drcsBLKVZnC",
  "key24": "2cPHy7M3d9JtTW9XQ8PRiRJ5Kz5VLHiQD4hw18HUC55b3bewfq1Mh6HmsoYWFAkRueg8vTfhFYuCwM5RKNLPXgek",
  "key25": "2PMVdqAdGg2H4RayxvVFcJ4adECS8qaLa8TpQL8NtXD8BDUT4syocHnCkN9qpmU8EusLeADBy6HeG2G4spJtaAHW",
  "key26": "4qNuaRyPsV5oKkFsbK5oYZsSiZPTxDRtrpUQciA7Aa9F1qLNDpGqXhh2kFetZYBTaC7m9yWk2VNQEFHJEhWzikM8",
  "key27": "5sJ5ezYvgJLbG2v125oWmgdDkqUr6PSz3PKhechNgiUawYqgMQh2CERpzACmePdDrZHAf1PjZEKfMzbL9kJ1xSh5",
  "key28": "5LW4in99fDv1Y9uRvB1qzXnHLDPE6yrAmQMtdtxVM6Ysz5SEKC2t245shCvErWHLcGpcvwjWDyVriLasZ2KBpzwc",
  "key29": "5NcasYVL37KydsTZ1h8SFmwsjxdAAPcwAnRP7vFzuat2WHxg2hhkyG17LQTVWURG3CiiHSGyeoAD5XgEMjbMZ784",
  "key30": "2ziCBJ8CjcDE6W9taYdcoYtrXYE3truSSw6hwedmMgBWc84Ko5wffs75qvPU5kq9EtdtnW2vgemvm2UbKkJJ6nxT",
  "key31": "GkSYQCAJQeWnbyrhgyUW1yrbQZxhLnFUPLo3qXUF56UY9iuCLA6avoAjxHFfEANmLmWtN2QbcBkzt5Yb7MVr6co"
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
