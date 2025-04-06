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
    "xGi3M3kM8NGfcNdWx82QPANvdDVbKZcXUzS48yqfUVBcdVteoWaTe1bDs8DVJR4phbK4JiDMQxDKoMYzwB6jENZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kPAKdZP1KoDfk8iy9mrTNrgskPD877K3zhFt7SmR3XGMiEEtSj4wRDc6XG3hkDnJVfnB4SzMUDcnezVoZ847Jff",
  "key1": "3CF7kXdZ6taGE2o4PeCHSRHBN9eqBpxvYv5uBqV5ZVZS2oPZnpbdXbekYxAuh2tzj1y3wsTdcHEn5Q7tnKVoctud",
  "key2": "dHmwi3QiTqXeQRu7VAZbWeEuvJWMELpMc2tKgRCwsPQAUu8HX3yauwaSNhp4D7dpUwN28cMTuXGjRp2k6C8cHvw",
  "key3": "8uZ99RjqcGigCn1KzbCN58nLJv4XGE9ejQtDzvJcz7VwMVvhcEtHq5jnjms849LqvRRRY1vnpigeszGLuHJ4wzo",
  "key4": "Lyttw7uwgALKL52sEuXn6DDF3sYQhSnX4h3ki7GacwRh2Qgqn37Mi9AAZWSvFrCB1RJwXFGZaxqvLKHdtG895wY",
  "key5": "2hoYhrHykqWpBbuCg4JY5mqmSjNJSkMkWhGfVxCuARCCSVmMeHAhBLhQqZ7wBA4xcd8F5wd9frRT1VcZbeeveyXw",
  "key6": "4A7ByvSRm3CMTCosEPbgQJqXR364bsPSEaSArt9891gY1hTg2L78c5GpzBxV5V8s5eWC5xAkySwZ6bC84FTCMX51",
  "key7": "4WnKTaPPXTWtVPSx7eUXTkvMek9xnBMzd9LSzQanmLTezRTGPmYn4ZtUPTJKCDxSC4E6FbETCefy71H46eYiPLQ5",
  "key8": "3G8dpt95RAwQJqFAUveQPqox5nA5sbrgpPgxGC2LwpRgFcspr3G1J1QcH86yWDqnDXcuigw6tYMLh1N1cn96xGCW",
  "key9": "3juDEg5emTmLxS45BLMCmtau1SA564h74UY2N7YXBmB98ERCCqeciZxjzyuts7AdfSQzTSTcB2JngfW1aJinN3ji",
  "key10": "3vbxjHiFFphPufMc8y7TeeGWJD3DpoxFQHDzdB5LDpadDzTJJgw5Eo1iasDfa1ZgtmCaya4DBLCMskLxUu6AUZP5",
  "key11": "37u5bjRPP18enBjjhevBa47k3rdTK9GVSpDU9RpQ4ig7FsHfycmQfYFbesEUw3ErsD4qJSnkf84gh6Hg7HCzmEvv",
  "key12": "2zjYfNMdCZRtnev9B2PUtiZuumzYpvQBxJbsw3mkEqSjaejKNfGmkCsJsiuijZhj6tFZVCcDHpkQxnq7rgPJtgZG",
  "key13": "s3JggpMcPsiSD3BsBvEWFj8LdyjQsb2ESDE6WJ47vc3ztBJ1RDLA19HgCjDrTm3WF9aDFxVr4mwqQu2gNbULvCJ",
  "key14": "2sX9vzNvYhR1YSxqtNvAwWLmgD1fBJF3ruGQUv8SwRGY4N9Db5hWsGPHp2mDofBuBPFjJMtugfD9QPmA55iC4vkN",
  "key15": "2rntae6rptkjR5Zd9SE6bXmvZRoou5EiYT6PctGWQ5t3jX2f1XutcDgHe7kfr46Ckg2PTyc3wRq152mzTagYoZMi",
  "key16": "3MeuC9yQywSb19AwZfAfSPYqLHRN7nhjsfnby3K2iMFYQbj6keGhZobD7UPGLYgEExPZheeuo5BMSv1sMdtjbxER",
  "key17": "3cjxgFzQrXFCj4ufEc3ZzpSB2XHKpmkRxN8kxpHvgzB7hM21SbwF3nZF38mvzzBb2HmNxF5LdcEuo4hDst3ibdyG",
  "key18": "67Aa3cJDRRajG5CDAQG3AuBGbnJxFDUfbh3W1ACmZahXLhfhn6FEDooL4Pdtbwb9VWcZcY7JUFQE6HsEsNhGFtFo",
  "key19": "4v2L7HTghEQQgZLuSBbAKjUgMYe9RGuyYFJ3zMiAzm17CewP5UUf44J7ksFSbnXwyBtpiisrA3shpNsurE8DfN35",
  "key20": "G8hyfsZkz26Bo3V4vd1jPoTxZRmYw38yrf8h9tEx4HHwewegs6QpkY5e5ddh2vZdbNNzD1SKYAKsLegFjVeWyTq",
  "key21": "3m3dinXR8Sc6a7ziseNtokmJSHQoUhFJdc65PLMHzJ7asXfjDkFf97ofcqZw6apyk2hcztXRTo1cCcfry2EM517d",
  "key22": "rj69nhEYMi59FfrTvY4HVdAzaGBk6cGDzXaobmDU9nTUy2yPY8fFYuJz8NqpgfEpWEeNXE9AcmijxLmMFt9Pfwj",
  "key23": "3ujw6MJKcNPN4wNYboBpsYM6a9E4FEYKujvSRVFYcy5temJw4c67Eof9HVzKzgZ5Gy9aacmAsYv5JcrpSBkZTucW",
  "key24": "41vay5qBYZYuiUGQe6uj9tJATU3JEmNSBkpVisiyHgwFZjv5VevFXfDbUCMZQtSW88nxk4tJCragdmzRMtrSDTS2",
  "key25": "5p4HaTEC5DV7iZ8dG3dS9vV1qvZ9KhoJ4ib59sJ9eeeLB138EpKKhtVmBT2tUjaUd6tTgb78H8V5CyEE7hEcvxEM",
  "key26": "33oSomC7iECU5V54RcjkqWrZSzqKRj2RZ3JADZsRbXJ9jLTbZA7Evp1YkEaJMuHBEov9rTGCqBoveYAa1yfqbdUg",
  "key27": "M73TxzFtBNT7rKNBi33BYfv1akgUnsLjfgk6H6e3Gtc5pZvAv9D5Rj7dgxVUBYp8zqFkYWNJ9LSSt6Ub5zYdHBq",
  "key28": "2vHiHYsop5wgQzsm6ayiq34k2LJz3GDeFoTP9kwzdHPaUBTVak5v7oPZ5xj2isFXL9mQeHnENiaaeapJBBysesnn",
  "key29": "bjF7gJPPyDQZSuS9B8hjAMRSoLR4urVRPtFXqAzd35TeAHxiSxpo99Th1rEZNhXuskQHrjC8QqFPxBJjorM6iYh",
  "key30": "4ngtQmhms16NkS94Cigvsjo2QTXEENE6cwAmGPRhtcfMYDTbuXxuJ9jMPHgFY4QBR3GNTbsLs231cWyMGcnoiUTD",
  "key31": "48rFUBC981WocjsqVyeZEQ5noUasxcbNnDLHqsToBVqUotfHtDFjf6Yk5rbkjSovSEVzG8pWHDfjHWGvEjP14VTi"
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
