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
    "3BmKPYsNyZnBdd1bR6XtJwWMJ3ujPsLZNLKd6E1bCDJAknNfKXdwUFeH43kTqiVcMNQmm4RisyRCKwp7QVR5NZtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32f4wo75vFjuWSN8Ga3PGRzdmHxyZa5SQgDAJB8hJMmdy74SM9B4B45tcpEMn6ZMGxzb5G5FeCDRVqfFoB8oCasL",
  "key1": "51uPpDB1UjDfWUvcdxgq2xGArbAr27pxc1dfTVuScNMMTgnCBmQKmtmWaGHwZqg1yonwFCsARv9oX23xH5Jma58N",
  "key2": "5YLCfN5UHcEJtxMLLMEk1iKMesyPgRD6wkTgWaz49F1bazLgyfWTQtTWUv2KLABL3isCQYHzkeWusCDEwy8nWVWM",
  "key3": "4QLYzM6MZQ3ezwndWB6iVFmJD6XoeAMDQs5yVjZvq2qG9njLT2cRCWcndPJ2cg5YsDxeFv7A41QZ2MSmvZp4b2QF",
  "key4": "46Az1LANigYKzu2F2h7dwRTXvC4o8ychyuWc2ZVm9wZZVfytgeW3beeF83vsrF66fpqsqPjZpFj8Aq6AyaZ5t1mr",
  "key5": "4dA46xerSBA9SQVdsUkJ9ZnU9rTNR7B3LJnTfYpZK2uXVaUsWXonQfd7ZDEcqV3nvxWsti4GUXfbX9q5mXVQMkku",
  "key6": "5AXMhNxS5H86DY6fZV9EyPmTMrKPTMxNjNVdKpt8k1sYHADT5gLqyvyx9jPPzX1NDNtoEy2HVrNrj592vSTCTF7j",
  "key7": "5vfKwvesX2aP2U9CeimsPSHCiFBbP1JymTmmxecLueXR8prnN1jefqjstR2SuCqZnYzKnrnpyfJdabsAZZodE33e",
  "key8": "3Sr4EDvP8jbZi8JNccazcZKnEdKzmp8zKSJ2V3m7xNqTeqNhG6P3nPmrcR1q9LB7mif1k8HGDJzxDRidfanMDUPq",
  "key9": "58PG6rv26nqmxEEWZcp25sqsauWWHswMRB12f1EeTNZX1Jc8ACCU28TVx9ukAxFdF2jJcDeWtTRWrzCRXkqKTCz7",
  "key10": "4GySEGSUByq2onEf1NkwZqcsYtxFjZrW3DM1zkP2SS19rqMX3CQb7ARVE9PnEfAdBQU18FGb1BwtMKec3ibB1nWY",
  "key11": "3Uu8YjDiBURJXbLeGmZjQBub8rdQrJj4ngBvoQUFwsuPaE6gcixgmES8YX7GJqc8cWULzz51yNPdNruKtA1nFW1r",
  "key12": "3fJoRZZ48WtQwvpF46d5ai6ktbBXPagWV2JLsD2snM1hgc9vo16wq4W538bmqZEMcRitGepbQ2wwerATTai9JqFC",
  "key13": "4fCNZDVkzXEsY3cTrwNZp3yRrRd89i9jtjyqUCucNmJKHrp7QyiXHujovtxebQs4erdbYoMYcuj3CiCVVCs1UDHa",
  "key14": "4r5NFsBY3bJH2NVD5mEYiu5HZoL4fvqWvGRrJBTA8zEtxwLoHCazQZZvYJRnyHsQxVZKWnow1F1bhve2vwqg1Ry7",
  "key15": "5oS64kjpTqMCJFJ29MQTkV4vQMMQVEWAvPTsaozjRZQ5pSwmb8YBQYAnwLCWxujZ9G3m5kJNXy64wfLz9C3ETU8X",
  "key16": "5aAwb7uidn17LLZcZPxjAUNmT5tjpEqbz6XUgY4QPe2MTiR7vCd9L5z3JMKTvne3FMaEwHfPqbTWtxLXDkHWyu2V",
  "key17": "5P1S1HCXJJSv4sCXD2niQQpRPjkQrUUfERmYwNCKGRvuCoNcFWmCWzqNPrwMQbfRBMSk3mCpNLtig994M19skVoG",
  "key18": "3HrnqoLheY7XaJEdhzDAj1r4QcMYxhJ8uj3sZtwKbGeTFxFfNpmeGMAHgqkD5JBfKBkp55UuLnGt3q33WUSEzpr6",
  "key19": "2C9JBLVXH7o5W6DcRGWARpDixwD31NbcH1spebhYf91M2RQp2J7i3pvz21mkXCoCaUUBQTJzqhJKs6oEvkuZGp3a",
  "key20": "47GA2hPUqY1C6imytA6FStRdwK9NQWPiJx2ACNptkKmkckUUiL1Yw235byDd9WZXgAPdE6wT2G1ZQ1AHYo2cA8EK",
  "key21": "65wxGQG77gEpGsHCXy9mkhGFqk2ajDE1b7pgzYG5BJnrcYLNFvJLAqETZ2KBAviYc9scfDLbCNHTGwWTv5hfgVeb",
  "key22": "2SMJw83P8K964fjhDPt87y9zRX6KY2b6HAo9kB65wi2CeJQgHsgvFvWswW75PddUc6QJJwEAUuy76bs3E6m8qzes",
  "key23": "37kMp8xsZxaAURvDxZJeHo9JfArmtCfd96cmzXYjUs79oU92QYvYV1TTahwUbDdSjX1xWPAgkivuCZaGDqv8LEKt",
  "key24": "47mbbph6XKnzvLTsfRrLjWtbUdcua6PqPT8zNTzxLZYTDNhhmRZE6XCrco8xyTha6RjuDqnqa9JkcuunxMVvALDf",
  "key25": "2Hgwb89SrvGk5WxTUyVUejMByujtGQRETj5RbAdj2tpx5kSoVY8r4oNW1pXpiNAKrmEnwunp1sGZogSf9hbCferm",
  "key26": "4VFxZPLngCW4fW9gJdoiXtjGDTCEYCw8Sn79qxmNGHWjc2vQmkWthM8gR6Z9WeeBhxfmhyrBoTT3J6saefJEFgrY",
  "key27": "5jphha3E2p5UB7VbfnZVu4zTNvGMU55XsSvZiZCmXFskJskdQL6MuB3UDEu3eSPxR3JngTUKLhgFdgsXReHU9ydE",
  "key28": "3ZDFPL1rezLoSNTbpnUpzSoiDX3KLBbKodsxfdKpjzyQBYjriWLM4AQkWoJfjDmHCvyPa2Db1B48WEKTQ46AjW6S",
  "key29": "5HtTtR7636u6nYFbxE6Ba44bFp4byCK7bWxT9RbUzDqGssPAcShTZs3dTFj4owpGcYNNrWLVDaajXSqWiQh5w7uJ",
  "key30": "5mHVjPNnC9Wswcf7BBgtXDmmSnC8MwYjvXPZVbzpNKLXRT4uoKtT2qMnQsCwXQ9tpRVnHQxVR2imNBHuMqTo5nv7"
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
