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
    "4oqLFHi7Ldv9BhzdPJooMfQnUwut4VxA5FJ5TSKKV4zjRcypbgxo8wAyfDCpfHpPwiUVaScqYP9zY4PMmTUsg5s7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WB4Qyaab9Hb2SqeLyeiPNExNwm9eXmXoRMrJjmNxNAUHrrqtVADzdL1ewgkMtcuztNPjdkKMo3AnaJMogqXLfUC",
  "key1": "49gUJDFBs76RiRLwk6A6joVnKEhw9vow6K4wCnQTTh8L6v43diqBAdtDFGhhvKDEo77f2gBjPUTjVtjH7775BjW5",
  "key2": "594QrtXbsR6TzgLYGUWmGzPWimnW8rNsXoyApyLVkjRseuaPBmSY4LP3D9XcWfFdqCmmdnpfU6vQF1hoRi83oBed",
  "key3": "48gv1sAK6JiM1ueeHUo8z9MDdZwPoQFyxAQwEiacvPUobFHrmfxgaaiC5W7W6jwMxvu9ASpsa2AEM3x6Np6Z1iCc",
  "key4": "5jnsnfwTq7Sg36Wq7jJCa6QEf6B2Ao4HxGA4jyjLFhY2N8sZD5Ar9XMvaaJMxJUt5P3boutzp38gRk6458msGDKF",
  "key5": "4Yx97BYGcMe5iqPCiY2trvTbcf256pd77nuw9RzfW4n83vkKYZ8Yw65Btey57j6KWus9LkZ4xbUGaibM4YFniM5c",
  "key6": "5kEayMSAcHn3cJwkQEGzgiKqtQgywQ4MeCgPPJiYtuFhUx29icWjXJFcCUiFFtPZZgNofaJXfEvfqcwAjF4DcDQa",
  "key7": "2pVZZuxcguszxt7rxnu2coPPHp1Y6dGtBSHDEPfhXNYkG8B4LdfYq1eTzyydaVnD4jXYsJ3HQkpS9zkhbDD9eekh",
  "key8": "2SDs1PwgncYstTEaV8QW1gtugczCtZxzFzwbVXKFS9FK8x7JLENZBYMBcoc2wf9HQm14QhfKDe1qaCJKniiYCZBN",
  "key9": "4s9vtPCdgX5xgpjVj3TwtEsCvxUvHCMLTYo9BTMpeDkZoGkZiw2CpxvxVG7Y1MbqEv2qtyqNX6dMd1LfycyAqwzh",
  "key10": "9ebgsPWvj5k2yJSMvGXpX7qzWDPxppy735Bjx7R8m7nwSnbE2hSSxBTgCmDVptFGFfokyRrfWXWHQ9KCe7S5LGy",
  "key11": "4pypb8opyvXw52XYBpmzfAZqZ7oHQJ4FT7a3yRP3BKrKCWcfFMPZLVXagATajRAGiU79ZLyydJMxJWBQizXb1jou",
  "key12": "3vQZ4QwZdpu7bZDcXLjcWqNQYiL5pZ1KY1VdxC99SRpRVvQDop1EDUdpKSGsbf698ZT9enDQDWwTb5e1VzjVnAGH",
  "key13": "2iSNSETjNErjamBvpVQHE9teyYssbRMdqAtMDoeA19DHAJMU2U6YVwr7oorAfkNfxFohLWqhMya2rJ6Mbe2r8mrG",
  "key14": "4vBfZZFpjarsr12gDtsehwCqNhb2z5ueWATCvBBHFRP2WCGP89MT8GwVqECasXNvmdMyBnVfmx4ej7KgGEBrhkj1",
  "key15": "4BACrxzraGKxHGTD8zHoA1Rf1DRWN7zoMXPRwPyfpnQ9NNVpdSzC3FMfh6BhGjcHGF3ZnZwB63WMHT5D7NwZ98YB",
  "key16": "2pcbEPrhUE7QX3nSzbM4zcuGLp91TYxjpY9DGL6WRH6Ly8K5W2fre7wT8TwitXUgKwNpUmNPA8tPX6ePNSGmYGy2",
  "key17": "2HjGJvHZbZsgXY9d3pZdoWNT3kRfeczMQZoZ9jRfTsUY3Zj1XRbZz1ms1wwWpNcHcDtFbBye5H495zgaKznbkg3D",
  "key18": "ccrtQEaWf9Y1Cz5JoALjyB55guucKwai1PvW76ytjHBD9CX4bL6NXsqYd8mWC363pqsVj5ZQCsHicREVhsuiJ3v",
  "key19": "2MX8oubEqC9jXLEXLmFGiprWtz8h2gUiyEYGfeYW2MekbaWxpZzHkypKPwTQqf6hutbA7ZK2RS7VmQPa7CJRpVrR",
  "key20": "Vsw1prh4u7djqjcMo8yQstHCnRhcnFZGxWvdLbi7PpFVjRtaRoxGirR6uitHEdS76cKEj1FEpZHRTTP4eQSavZF",
  "key21": "2X2U6wR4SkFoDxfpCysqXKH81SyeaSEeMsBegra1AvDecZG7kmvk9H9Gh5QCfKSRGsHzhfuCGmy9sgMeufzw4jHT",
  "key22": "2MUcAQY6myUbtgh3n7tbT7ZgFfzjSd8F2HxDuC8GueCV26pTtrsS7p9w1rVYKpDy7ZybJGNSPSKTZoFgk43GH6oU",
  "key23": "5nvgFaKQtp6coiu6rGdp1J1ZDo9MD2vyeNwFBnYPTLJec8j6GdwpBVDYPCwXznsrrtA5wj8qYr8CcgkQ6EvKjRhF",
  "key24": "LbjHPF2cteLyQG31xaizCKtipCBZ5a7a7GFZvAyXftHKsF4noyDqWDCKmkimRyDN9DgcHMeexjasZ2uCtd7twaB",
  "key25": "3UYim98KQZ3UgMaYHtdVAjEDj3kUc89pSRVXiSBvQtzYDzdVqLgj61V5qxAjABYs5istyDvmL9HyBDkhNopMixJu",
  "key26": "MDyLrqygvGaeUGPweGPxCkaQueUhRGfDiWzVTobbp9YPk8Fc67bTipGujQvGF9fobWCbJWvBa6X7LjvGuuYERG9",
  "key27": "4SobydKkz54jDKNci7ok2gguZBEKWkVKhx7kLiVoJd5ebyhnF9ht9x8As36fXRqHosAHZFn11amqtw3DWJPGqtg7",
  "key28": "5bcTmhn6h9jFNWsXBmq3KZ4pFW1FvVPxBqvehZrkgH4VgRDYxxGfjsTuSvQrWoxFJ1CGdG8nJRJzuFYRLxFvPgyb",
  "key29": "DUuTZJXDaMTgXE5fGUwdmRYykSC9c9yeXtxxRbzifGG1eWpzgDb3662UAUwx3LJvwZ2wjZcX42z2QEoG76YUCch",
  "key30": "39QU8q8gqokfz9MtrJskrQshTUKGcwfUHbJAxRf5ouHfD54kMg2Bxy2ofA9mPy7CBNk799X4cheEUqbCDscuThat",
  "key31": "556MndDMJ9Jt5cfy2PDsbrH6sDZVb42GhNzzogadd3mTL4xDLKW3X3E76r28hE4DRqtkRkZvXJMmvVMcSpUieGjm"
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
