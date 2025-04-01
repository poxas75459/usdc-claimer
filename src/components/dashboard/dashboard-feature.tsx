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
    "254rL8nGt9b5obigu2xcACcLxYYkZo1E3D9UoHHLy3SN1AXLMmu3FtXtqzpjrPQ1F7Gfw9xeR3wk1oktHBf4JVKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gy1amVkpsK5edYvpNFKw6HZNqNTwrEaQuLTfWrAZ2a4sBTnjy4XnQ8ijNCJ1eb1CtUi1vaX9zhHCVtx43EXZn3E",
  "key1": "dtjdSyPzqRkZ197HBhpdW21JHtfftKVm3MeYe8frBMABg1S5WpY5gFBJwFQR4Q6MrxBbJeh9kMZ1qLMn2aTYLbq",
  "key2": "3LV7ywTgCrskDQa8ey8hZPbDZWmtwXj932bAdf6yqwpFeGZ41C1wbKpnALEo55xNSiXbUAA3gXX7RZhTVEohAHmK",
  "key3": "3U2uZHwZmqttE5Cy4o9MTr5f6CzvjYLM3DGHTtQxrJvt8ReBGU5Q6SAbx9NbDMtiEBbr4aiDegxmWgoUGTANmA7R",
  "key4": "4zzEYg6hRuKQDDQxEuUz2DDvskmZuAhkLNv22RD2jHGbnsL4xekm8kRCfyyoTaezQrbZLpcuS7EgE5qQ3Qod6k6P",
  "key5": "2hZg3EL5eX3ic53bJs5KeoLPRmVmaKmTRrqruPawrvm4NuPcT5kUnCGhQBpgCwDDb1ia5ZdvJRDBn7DJF3drogWx",
  "key6": "4knWF7AhqXjfMjsXd2e9FXMgQkfwVqMVPDBvPLNhWL5Z9MPTQyz58ek3mdaXEEkw14RtvxBQk6pLncav6wAwHGaN",
  "key7": "52d3QoPNqh1PyJLJdvftwBkdbsG4MTSyWMkS2rFPxxcTLghZ2iuTRenZEnnNxH7MP2s2JNvmJ9wC48pftY23ae7a",
  "key8": "3nLmFm2pCncN1tdLQHyVF7hQZE5DAu82DJvJX4SKVNQtDjLAQiA6tMNs6E8bNdLyLaShXkXAntoEd1uxsHBuPrHB",
  "key9": "2tazRJt4HBsMfMpaf7RuZgahzEDWru7KMML22Rn8onFSspK7bELgzpffhkRN2JopKvE3h9DXV3CtiMWciFMaBj5p",
  "key10": "4K8fT1U2mnNivcRkZuXFN27RCxH9EERZP423wmaEvW8n4rKHmPhhhtZ1jsHXqbx4DofEafQgsziVZEDuY8VLq38k",
  "key11": "5R614N7H3kMdmXAgku7hDgCiVnpRof81mYEZpeQrWgYYkrbbGZKhBfxp2WmpURn5WSewe5jfwfVgFymvSdMkFoPm",
  "key12": "24w1k7zgTkcWm111R2o8dQFyRiQmWBpMNnXQ6X9HuEuJFGcZZGPHLoFZthissgaAaha6ChwnUqgcvyaevVDWYVhx",
  "key13": "mNtrbfzHPwVrLQktVPysRPRTEMX8dy3mN5R9p7mMqB3kZXrxDGWC2fjGLY5YurJo8X5prUGUd6LEPyagd8XVjhD",
  "key14": "8GXRo61E1zmiYDafAFreEotBKUT2q7CPZTEmepze1vhvViXbPWUsGDbBab7HxX5Ub6vTZaCcsGbkTaHs1P9wRbJ",
  "key15": "5aXrhMBLEvXeCA2riZPtJRHVuxXfKzdNo4kfwhpj5VYU2V46QYegyGnFrXP774NDSWYAVLQEjiYZ6BLnLPHfFgvd",
  "key16": "3YqbDLkxp72JSnJ7o4Y8jGN5h2WEPPdrhjEnoLYAj5CnXqhfdgNpDmVCsPET3saiTquUVBgDcJgAD6ESxvaCN7vC",
  "key17": "5x8DijhZnGbUxqKYjDZNmeLuynK2EyAco1eyNBdL3JXXrvF7CsSDXQfJoaCQrChRZRSBKPcKaKmVhirQEvDfgNnb",
  "key18": "4crMCWU2aqNqY3itqLuhmhkyDhsmHBGrghEiiWnYZLgX8cs5MZ7b6DVjtiKVeJSZfcBBj38w67xdyyRKeX8t1nhx",
  "key19": "5aTFj9R7E17TMjVo6rsmz4fwnSNQ6Yzw7mrKK9VaSK1BfZEHBhN3392Pbipfuy3jT4d9Zz2f8seAf6hg8KMvBWYd",
  "key20": "5NdMtPKR2QNDBKSfgJrb6uGZGtJsq4pBL3BVSBhbKmKonsxuqgA4jTmbYSxWQcWKgvdKfH8mYaJxNnqzx39LpUFN",
  "key21": "322CTBELipVZVezV2vYuh4oNcMBEyVPCGaKfZmhJJW9FV4tgThTcpHsevuoYVFMcuLn4BnB5g72Qdd3bxzm6VG3A",
  "key22": "2vg2a9Wm3XYL9vmd7TjFUXp4jkNryyerdUpb1fMKTktU7q5gyQsxPNqjBjLG5xPHP25ASBzJTbdKJoXgHZ3dhDWb",
  "key23": "4tNrFPyAxnVaTDMDeVBnGqYGkLdZB2p9DvCJ8KcsWxaagwWVutiJyyfg7ZBWTnPpwoGJsefdDs7vAzPdz6LxY8UG",
  "key24": "5WDMXmB9G4XaHuzLPa9YdUeTXG2u5sEtKJUhcVBsT6SnMD6jrek3XbwXFqAPew34PDBKVpayABzD8pQVNif7Y1QG",
  "key25": "2ubdRbD88ewZzbWkcd2XEufMhKNDJMhPGShDU72eUyKZKDzvWoupHCsX6tGjv2X2n5yVgBxRBRzDB8pBdC2g2bCS",
  "key26": "2dsViGbyaASKsr9RwtSStbNQTtPmwTHaXRDBKEoNB7GBVgoZy4Z6oNipAUzjrXVha6NitAtn4wUsczmtMGcyVYrT",
  "key27": "4fnMEhVUshQGxa26rK4JPqzeXNWu8GHUTB6Fa1Kz4UgxLYyr5KZmbokqwWD9k7vEw19YHsGroupq13V8hPWsgjJE",
  "key28": "ddqNQXwZpkXXmhjcDVw1126oUpPnYB6mBRHJdxV8qXBxSQEmj7HXQJmxsY7Vgqe32rLTAayuwPjR5T9zwS2UGmz",
  "key29": "jAcePFzLc7yBRXXxWhvAFvC1kwDKcK2fv1KBJUEpqRwxnZtatmbKAiA7UT9XbJZnk2xSvzXzb9UbgJmEsCueX5Q",
  "key30": "36B8fT2PYDdja442JkuWruBLomPjAeW6UKBgk19gCb24sFUJhgTSMB3eyruan8bfXZYmxMiuF8LEp9MEDfLg2Pn1",
  "key31": "62XdMGKuV6fxHPjz4N44gd3sfsh1xHYkdYNL366v3pKY4nuaJQCFouhvFZupmXqW4wA1jFFBqikAuLRHDqSnXi5T",
  "key32": "3poWNU5KTbkfS8EMHV92v5kQxtZUpGnno7me3xDMBb4gLhm3yTFLfWzn967CGFwbXSTbeXP1TBJRfQCkj5oePueB",
  "key33": "5GDcSa9V2ZgCfs56UQk6ce63AuNYRvHRU2rBc9Lo76GyYSB4rRKwStBuQYy4o3dxsFjL8XXm4EJ7tZcd6cCgc67M",
  "key34": "4SJZxgYd3CzKd6SYj2eDjgMSnxAncNEGCWASYweCH2w62kRRy6w6rQRTUussPdEF9avBF8hPP581HkxuALqkCKmS",
  "key35": "4uD2A1J6S5NUif2n6DHyY559832uiNyDBAjJCQz6f717bTdEAKWb6CHxAa6CENZGrE9sAs6hkJ8tyjHX6uHvC2Wb",
  "key36": "5o6rCC7mCi7vD8kaLRFxaRrnUritiU6jS5SBEbtwv23bPjafKYLZbKEcmXX7AYGpeoXZnZEuNoQHZLLTopsRNWvB",
  "key37": "4K6t8DTDskoaftfb5uDWvYuo1dbNPwCyJ8ywDA92REHwHd7xE9qCvRSsgSNtVmpw8WufYzerz7wzaMUvv5zgfwUZ"
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
