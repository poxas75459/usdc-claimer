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
    "3rcU5aJLgNat1Uhez8eHpCu2iFcKgBrLc98j4YTazZb7JJaxecGWKXNDrWhY1vcG5poveEV3i2p4eMmkuuZBbSXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZHqXKKQPiXsbU9jvd9d9ss5DnmEDLEhQnEfr1pN4JBwMJriKmWj53KNBLq3obD7wTvUvbuRBSLqnRHtFEXRCb2q",
  "key1": "4Ypgkx7G15heLxDD1ysGUtpD7APUnQ6rUjBDfUWkS2xD7H2j54LgkMa6JfeXnDyu6B39CxpYrW7VGZboC4dHSPgC",
  "key2": "4t2xjHUVrgFDvAi3Uo7FR92WhQBvM4vs8P1YVE8EsBuf3dZ6bss81zDwzRLJUDLxP1hRy4R7HuV4W4YkGaomcERA",
  "key3": "48xf14pqpUneyPEsa8r4SitVF8o7hU6C3xwTiDyjnpsjwntQXN1dhmRbYick3trZeubkALniMQ2Unjmcu7gZnpCt",
  "key4": "2hnp9QpZntH57u3hh5ZJvaFCmGFLbnZXbgdtXzik6CRvshgL2bitiA7T7NqC93d48HDwkZ6JF9ASUiYMj2JizdaB",
  "key5": "3FBBHEibW5ur1fWdSVzCEGhhDAMRjJBuBP22CWwk61f1NjQJzSmNz545md9ktUuY5bFfKt6c9ZawsTHmwTs82csL",
  "key6": "4QjPacNdFQ42eMEn9VxWjt9DKKL1onGUYdWd9GZ2DqvBxpTS73WGYAzMNwFKE3kNh14E8Q4MLpmMAUbxExmE9uWN",
  "key7": "3NB2CBUkLsdsseqKDcsskjx1yt25TY8CjSKAMeqK4zV5pLWkeM9M1VTtoqtKAzfQXAWn4UfyTPXeygCogXpEuqvH",
  "key8": "3KLFY1meSw5xJmUCMhS6QPGY1df7mVX1d5Gm4xvennJ2TGBsJMQu28Ds2d1kcXH3vLwAUcY9Hpvyki7ay8avDc4s",
  "key9": "3w4JPoRA44hiBhp8yB2LtRbW9ZLdeRW5zKF7buJnjEJFDpsnkUydoahLCcSZv7P1cHeRegffHoQ1BMZLvaxXgzxD",
  "key10": "2crNrGB4WAat9i8hiPR6Z3JrmB3dKunXf2APTKsPeAFEGbW6Y5wYpPbKX8jjFWYkQNmvLThzmcNZfooo6BPhfo1u",
  "key11": "2wn2yaDZnQTVF7iMdRWSpEWzxKpCT5q5BrGcucT12n8fBWP9uzjGs6wSixgneToZDsDzKEeAs2jesz4UjmSgtycC",
  "key12": "3QzBf8mFCxENq3EfDxUdpswh3urYD17vRsYZAnApafUQVmZBpX3pdh5AjbyUJrJkAfiLu99V9GmPCMXeox3WiuCr",
  "key13": "5A1ndiDDfQaUeNbG6HtJ7X7H7Q4nkTxfpkeCHfU1q2rjvcy3SJ6pXQVnk3sQnAWfRpJKBqnVzLBqdshpgpUNrPSv",
  "key14": "3HYSCYoh4PxChruFZoVTtLbkjGGWgoTpg3NprztjD2XeW8HouHy1Rn7tNa6jKwKRGazn6RWcYMkhRCofW59Jse8m",
  "key15": "dt2QigMTsEoL5fqJDZQF8MwEybWftLNnojS6grGx2EhQTa78LYv6VBUb8dxuKmXJkJ4brVLpYxEX6fdvstuyrhM",
  "key16": "3tqDtUyNTiZEvQULnF1ue6L9GCuzoudGMfYHGi9TDJNJTXamxUDhqYgYPdJs2t9nWJma6tbnVsFs1U6eGZ2KH7oq",
  "key17": "29CdhG3jYLcipu8rBFZtLDNrvjkeEBQFBEGP4bFUEq2C1xM8fW6qBPMxacy48QKp7XZkb5uPqKLoNLGj8iaC4pBe",
  "key18": "4n94ygrcHTyygcAKawYKDRNrVzze4MaRNKV29vemV5aL3cTB2A4FZs3qqmWpftp7f712KyRF4QgcSk47X4oWdf4o",
  "key19": "4GYusEzLPeXcDM3WSRHJdiLDpMmvBSNLnXe34yaTU9KUxZS5xiSdk38ehWXzcNS7i7sJeFX2PzHsYKqBZo8hk29s",
  "key20": "5ib4iY8RSUayW3MgQjYpfdgvuhpUH3KvW4GMxqeeuHv15fqQjhziniQGEHU2a7NPTs33Aar6Vx2UU5sBdX352sW9",
  "key21": "2BHCFe79h2xMwFy95o9d2BgiePPHwmTqBMx6z3XsfBPyyCZzf32BwjmvctR8x4wjv9sgEGg9scHmii2CEVDjBGA9",
  "key22": "64sjSEvhjp8FkQARQ2hPn9nG51LCVixHn6cvWBvkkstHovJqzSLqmq84d659H7Ti7E2Tmp6nAoUpnvKRmHaygWvd",
  "key23": "2nN6BLreoVjr6EWD63idAQSwfk2hj8yMugAZZJQxrZfexyV1kYqn4WPzBvNLWQqM3UNY5XBUxf4QGa8i6six1jqt",
  "key24": "4naiSLYYQ6ebo39gbPW99rNpBTbptgFKJk4vnPz7JuRKAQHhzLiiKGjS6aKodNiYBRUbqYk4iZtzXxeo34ngZUgX",
  "key25": "3Ze1Yk11N2RrWHyCJPcdboTM4bwHTs2T8bJV8T59sLdpNzZDgrnExa5t6JcKwU6eqPq8PG94V5mi73TTWrTprWPL",
  "key26": "2dnSdzbYDKrfVaYTNBka8Zwesx32eCDPXkfttoqZTArtTTwNcUqmLkM49a8agYPEZojJ97nAAQtGosKEtkWfaSHT",
  "key27": "3w1ZMFoijgGpcjL7GSvs7zta9siJ7oPqW1QzQHL3FJgLGNj9sTbt68q69nWUegD84GXSqtNSPER2UP9hcc3h6MRS",
  "key28": "38xqAFJSU11tKVA5EpWiz3Qit4Y8rvkzhmNtDycRfPAyNAUKmHsH2QgdXp4cJk4WHUz4dio3kaW4vSJ1joa18j9e",
  "key29": "5eKcV1rfYqdEkNt4pRLz4BMFwJczdUFULdRbdWGwfog97Pd2Ve46HSiJBJMG782GWbqvqhtE9i2k93Tdc1v9vTKP",
  "key30": "jWoLVrnzKJk8CzpH1xd8RAXFDfGKqWg3LP6HUwJXtrCjaHNZgUzQrn68EYfdusnMZiNk9ZJKLh8phMinS2h5deg",
  "key31": "LMLDvBojJEpFWSEp7FKjP6ns8MZkKebdfyW4ca5BckrXZpxVa6qUmUwfxfYQdVHKJrdPuNTfASM5yr7t6oWLPC1",
  "key32": "5qjfjyCdRoGhTrECKWA2VgZP8yrzsW5p3nFfhBr8CmPreXELrM9YBQxbbDM3SUZyMxyrD99DruYL2F3GhtHAxoj1",
  "key33": "4Tnd8kQRKaeH3sTojy8Um9dfCe7A1S4rHtuyrhy4Tj6UvEwQbunExanbbguVufJgmTX9nXVZx98Pv2J6s3k6N56D",
  "key34": "5HJuUu9yHM9qHK4tkfzZCvTedyM3EYwCrzHu33had2PsxM9JNiTYjxdgMtddUtJnvwZrDv99wn4HFhYNNFUVqMTJ",
  "key35": "4nnz7SevFeP7t3QdtwEyrn4b7j5antmE9nRY1fz6D4WhTduiPpbUtChCrPezKmBhtkQqzwRzMY3vPYPka1P7ZhHa",
  "key36": "2oFzAKRrLhwXbhgfav7vnUvgdJ9zAXfvomu8rw7hwB2YnB8iBp557pj9aTMLn1Q11ZTciptZr41hwo4vBxPLQD2B",
  "key37": "2y8d4aZGqAq8SAhWGHcjw4rMDAY7p5SAGAmcyo2KSy2WogXVifm2WvsUkUG7RcSH2A48eEtDLfTN92udLmxetqYx"
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
