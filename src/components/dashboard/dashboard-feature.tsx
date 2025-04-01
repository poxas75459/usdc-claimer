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
    "2sjF8dxCE3s1H3CYzV3NXbN6P7RbzADRvCAGBhKKUWaGaM6fMEMpZ4NhBDrQCfi4zz2nGvremseJtdqLby2KAjSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35x2XvHvvoyQgEqrGYdZZVSfJn53pEruJHKBtzqyWrsKafRj98MMhQEzbP7H2fkUsJZKUnVduuKshWCLLiEj5yBU",
  "key1": "2bFrRwCCSWEymfhmxGmbvahV1uDqybQWLQEj7agXWCnFXxPVFyUU3GDuUpFXEV7uNNvCP44euAzyKEqar9t6ifcV",
  "key2": "49UjhRM7rNUKTedWz7gCikbKG9FNUfjjGQUta5U1p1efecMB6cneeRMtiUAZ6KDxzzfwQQapfKZzkbzifN7EvXxm",
  "key3": "3k5YDbkFDoDt8Va2gutG3LXvhsgYQYox92P595ngwEiqowqKnrf2CmbBwxa7bt9HZVQiimP48U2gmEUZs1wLzNG",
  "key4": "DhnNjwa5jAmgNnuwoXmLud5zeghCEcztZeqj6PLLyH4LssndMzABL7tTLhGSE73wR1GdSD1LmM95HtqFWqzRsEL",
  "key5": "2tqDoycKUBKAy6AMnAeLC48PbcaeGbU8wMh5WJpDAjezxgkhvmEdHyGWW5Q6njdhnui1GUbBEVu1LG2tutPQcgqC",
  "key6": "S5WGCAGtVEdcia6EJui7LE3hmy2p97a98oq97aCEoLyVyn5nkndgydrEWm1EjBtnAnBfTzzvbbkT4vSLkZqukrc",
  "key7": "57AiwZNpWQ2MpgRUXUks7d3UG8r9FqAjsuS4xuUbzqpmWy494CtHiUW1MaDySJh5SLm3MkgrZ2WfgveSdz1fEhKo",
  "key8": "2Sk58D1np8TzosnLNNLYoxK7LiFLPeyZwGoR3Pnp3jv1r3co36gTmgwzYJ26CsiPEgU7xDkwcPThFUUqKJoJKuJC",
  "key9": "xnEKCVUpGj4XKLfJi6Vcm8p9jtjv4Ro6TZqgy1NLEWysYY3yps1Qka9mXXuAqBruySNTPoUnSZKicXwjPLTFsnZ",
  "key10": "4qk9BLVfm21DmLCXTaYKjyuMMHoa4g3kdxsTyjqPiygnELJwWv2KWExoPn9LMCJacmfNhxESEsynrKSLSfvHGyBr",
  "key11": "2roYhBW6utMm76iKS8LwXefGa2WLPjc1Pvii2oCSMh3bunYPunZNKX4KG7TDbafYgzGHTTyvptPHG1joCC1y9g4k",
  "key12": "21mgbTY2ggSwxBKDAyZTvwyAqnLkWfUtRwM4qn5aHhg7VvPj9Rr73DPr1CG6pRsBmSanhWHkCCax7pAgXc7npDwW",
  "key13": "3o4yDxyqzPPpsYJ7ovKLYJpJnJGM4AEQBbghh9VW4zboJeuFQLCK2LmCoAgypDG5V2WRWGZk6bgdaB2osLHNg6Hv",
  "key14": "5BkYTprYYxPu5ny73jvPT3CwPcsWM3yzWpGF8jF19MCnQehK5UbmLkDKap2QrGTJi5wepCB3r3Pkovubrs3q2iEe",
  "key15": "2TwDpViFYN3L8bAyWAcEdQf7ptC4h3qFZqnfnayw387S5JY75KrEnrnYuXUimos84rLP89p429c9zLTDYMEgQ6KN",
  "key16": "595cf7sKbPJwAMHKZKV8spzyg6ZVrCQka2MHBspAL935Qnk1HRR5BMAcfV9m8T3nBaXJymARwEwgJ6ARRoHug2GG",
  "key17": "4nvVLjBkJ4iYihBsCpRwqPWF9hEatRGbXocpk6eto9To74i2ydjbLDHmhKYyxqzFbrSvv19NALGwBd4ri1A7ehay",
  "key18": "3mXQbNj4mforQZpFpeGQJZ6Md9JcPmk1x8c1br94dxFyBgskg67RsDMs8y39Ur27KYicc8fQWvVbgwjpwMATzhU6",
  "key19": "5wtTpicUDi2Anfg5J8Eqzw3BbEKNjWQKRjq4cYeDtq1LP8mUP1L1atbwa53w7cBQnw9MdKcdba4SxtZDLhgV3QnP",
  "key20": "5w1DpxnW9Ksi8QPVstoejbL5HBJn9egfLKwsHX93EpZXSumBj9mfEnocDVYTYmpTg3zrCk3v4FvTQpHtzzZGnfQ1",
  "key21": "2DTdTuUbHKWUe94byfiSzNYwVFrbXZJZhNViHA9khaF74SYdxraefSTz4VwsPhcQWomx2MkiNnkCjSvB7vXU8xPP",
  "key22": "5x4AirLHPBMu4tkbxSbynv19fw3n4aiFWuQWMp7TjmGeN9VNspFDsWeUGYJyXfyTesDvXGhJjJpuo7cV4SibM6B6",
  "key23": "56UvDssBTJhb2gdmwVwKvS1Z4o5nagvKRdsW5rPK3ovJ512Z5tPruh6XiSJceo2gWer4KWMXqgMtPKBForQan5Qn",
  "key24": "2SvsCcYfE1fJtRecqcKR8WQYauxvVKGSjTVdotAGjafTGKiGxrxT5XkP6tej8PD1acyzC7ZxSSmCcoVzzjSmg1MF"
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
