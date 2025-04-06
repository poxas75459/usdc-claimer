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
    "3cCRUSkP9rW9kcZ2yo3HPNt7VUNDWZr8HF3scn3YbZxu49NA8gmjMmXuAjktzeQACvTTK4JaUfgPyH59GvuJ4wr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E2eFZjUu1EjM9ZsAZ9vGFr5fzX4zAgAZUUZXuFmTqhqkaA1kCGkk2kg1NHRi8HgxwxbU3Ro8DKT4jozpAvC2DWc",
  "key1": "4kVtAyvtwBfXuRmjSbsL2EcDo8tnPktbtxdEipXNrMjYjG5Q4o6ywkBCumQxi3KwWChdxMwvfQywYL9STBFta1hT",
  "key2": "5YUkBqXUufVjFLdwXMoWyLLRthTEKsg23wfPvecxTpvVfRrTQMgJvbwHpFKy5C3fu28Q4c6jQUFu6TZbX9sAYcxt",
  "key3": "4f4BM4SgQ9f8YPEN7yQbAJK8xCcHyUuTRFsy9K7nJdMMabm8V7V7hReWWfyTTDv8wpf4QxZpXKXoggKQqnT8VW2d",
  "key4": "47i6zRS8A5vnD5yPYXDUV2aMuQbPSMS3yiQ5VMNiTrCgMkxuVrSkpBAkB5grjTk3Sa8fAYXEvR4GFNNRER6hPUyL",
  "key5": "5oyj1CL78qCUUT3wVCwySAP6no7RgN7yyn8L1oUYyNqTqHq2Xu4Ycwztr2kRU9e8YL676XY6nqMpwDFBTbStZ7aV",
  "key6": "2BDtTXDKNd8L6ivCmGGv4Uq2XsQjTUGtSAGtA2WgBznmQoncobmVqJCWRBRkKYd4KQrTyyig6k5HGtW63ySrfjCZ",
  "key7": "2A9uhsrSrLxyb9bGVnPcTJuKUKxHrxF4dxcyRoP9xX9HULJrcD47Dfgp6yPRv47Vn6tsAsumzuGdZ1rtB7vFo9Ck",
  "key8": "5v22SQAX1KtHYAgyCVEAT38JA4LJLEzbqVGPdgUwNXEbZ6G2DQkwewqNJJmk8YDEtrFofCjGfPjMwWG1T14JA8sv",
  "key9": "2jksgHRWtKP26LFVmjtDvg9WJ7pabePMGkry4gaCjdUQRovCpcYVCXa7QoPvLcx3s8vHTYWfQeQYzZtUoBqPtqTE",
  "key10": "5y3v8A8UTHs9J7DhVafdNLb8aazPYYX63h1k9ZyBusszUmuGAT9e8dKmmPQoZsocdgfHhnBVLn4BXSeE6ZTFAiqy",
  "key11": "568RLEZeSoERXqxjF34yx3LQ32r1D8gQZ4gkYa2dgJhdYwXQ6uw1E63fEHDETFC254zMursFHJJhUYEnTe7m4CrM",
  "key12": "3t5v76jeqmsdQenwpFdWVo5eKpzmUqQ7e41Vii7jakWpt9nszXMVi2uANAoaW7ypuoxq9SqkhnNBofaJWYNpKwZi",
  "key13": "5fKMGwXv1u3AfVD9un8sXyNCHdrgdUtvwzaLziKYAyn2yYPhERaAyfCjLh5i6VaWQRzEykhzNp2RmM29pBu7aRLa",
  "key14": "4T8geyfZu8MLV9K6E9pK1xGKg9V1Tdt24MAXgdNtv5QhmknBWdRFS6rQUKjUqPPzUWM4um33c8VpegbJPJKSfTFz",
  "key15": "2zE3axkZ62qTEc3uzN8udzYG7AHsTGAh6uVyzUaSeesiSwP7yWA5URFbL226nkRfHdW3g6eYUKfz9UcFfHkFvfgV",
  "key16": "3Z6YCP3Z5ygiYc1CXw8P2HpD5R8uKqx9jzuGh2u22LcwaJFb3BukSpo1PVbE78YiGkAAp8mx2gvgdaP7Emsb3oR",
  "key17": "2voNRvi9NqJu9qWYmyQbichnB7dk59k6khDMXvzQAiLs6iYgKKxFtw5JJuE2aPzoG4djXNTPiUVnixgqmFedNWJd",
  "key18": "22cDMRrgc3PrgV6nUGxGnL8H65VwQjjjHEq6QKnEC1Rf5Va7QgrERAuF5MRtNJGk17V8zW3XmUkoHGPN3ZUXgiPX",
  "key19": "4pQHzYdT1g7mtFfY98kpnzxXBwy2RJYD592pBatCL5GdhW9wRx6H3niQuyxcB4pzCgC48vJakn4vxwh4D15WnU5e",
  "key20": "yS6t1M17zKWu6tx3zwSxpEzK6jqptjusE7x71xuhm8HuZaT8Z9ifKKFvErWa4fkFz2YNGPLtVBLVCUPnMN53Zqh",
  "key21": "4RptKMbc1S35WYfXBFNyRu1RyxkmA325uC3Ehc2a8SZdYYRQH3LQEsJxcQhtR7FWtP6TkMmH1dqkKV9dzYbK7MFT",
  "key22": "4c2yLUXAY1wFUhXoL89G6sCuqRJQv8faAqYYBXEaQVH4joWuQSJsKcnUbdMwzwofbmHL8VjPdy8asEYNdiUZqeDK",
  "key23": "xN5ESYcUidJQQf4Ng4ePpdqVQmUnTB5BAY5HqG8sG8pqp2XnKxm9b8Cwi88uSAENayt4wRu243pUR7ceUF1F5MH",
  "key24": "23ovoRHt2QGmveoFaDeWoRDWJfgszAi5LELS2ttpL5fPhJaar7r215ukGe3mvMvfqnJRfNo7PhSu7ChBiXqotkm8",
  "key25": "568RM6vaHZwzvYzUycuCL1ihmKkCu48Tf9EwdCLypwsmnhqh8HRcn1NRZBExABH6ocfJVjiD1psUYx6zsd4hh5r4",
  "key26": "MuQMxmRSKzTQ49CKjbzRUyNpmn6dBN91S2sgJdwX224QL7wgvSbhhp8cL9JzVAMxrzUULnN9ESvnkthmcWNvjAC",
  "key27": "3eKR1zTaWdKrKtUFp33Z1U7k9Md8THbwbAnuyhgGJEjNUkSMxpkWBW7fYKTTiRxS6EjLgqdYdC7nKGngZC982gSw",
  "key28": "4sKjKPajN9xCwHZdK87CbMe66sX6bNdXQconirvFf5jaLVL3FP8oRsZ1seVjYg6yiDb8S5jkU6aQmczfy419n8cr",
  "key29": "27ddJFqR6WZLtxcrtrQ44NsSwsDT9JpuqHk8gHiCZkRtXMtkQbnv7K8DDiiYqndCLXyyLRTmdPN2Uw8j2vtU5mp5",
  "key30": "5Zkp1yigMDgyeFEsadcwmNcPNteZ9hbbLxfjs9rLUzQcQ9kJYq6h6ndCvLrvnYRwvu6uQ6ugi3DuJTU88635DghA",
  "key31": "3SgoiT4FmXQHNUHcFYAcoHXg939t1z5Ugc2vSKj4HcrjQzUpMWe1ejr1RdrqBJxDY2mVjdgdFZM6LhJpHSGESFNE",
  "key32": "48ryNNPuoHw5Rk6YKVJdAPkkkF3eQofyeEimMcna8Hw1hRXS1ew7tKvYdvH5pcw5mjECP6bCRidxtJ21sJBSxfpi",
  "key33": "5mAaDXLEiaNro1bFWVmURRpCAgeYZJwT795DTe5JbmfNNXtgSDS1xXP6235byq1ZH2Tw1DrwHfSPxthFpVqfkRdK",
  "key34": "3xDSpf9J2Z3eoqiDt6oDFjLDxJFRaXk6EFJL22W3EYJwRzUWP5DjR9yr27NfisFWMJn3E7HYM5uhU4ADdyom4g23",
  "key35": "2oiErNAeSz99kHYXpKQkychvg71y1gGnDaVa5j4e69RZGrBcerADhjuobrhwyovGM3NnCrJfpDdaSVtR7f4deW96",
  "key36": "4LbGoU5xS9WDNqEnkpPpFsHfookhxrYtFafp7WjCLcMEozjqqe5CveNdtTM7LX2gipFCx5A63k4phsj7HAa48r3G",
  "key37": "W2LW7qbJpYTY45dNwsHdeqRipvhC1DwejS3kH6eMcDpaqbN7PBSzMJxd2aPD8wiWCYZM5XxPNuLG2c884tvcWjJ",
  "key38": "4xG3zsCut7wWNZTVoABFsfvaoUpGNAxMbBXfG4EEFSnFcQjg88Vk2rEgBwBtYBwCYTKkmhi3kZAcqbkfziwH3xwa",
  "key39": "2ZzhhT5WLep55ZJRgpTJnPK4Q3LmBv3tiVJe8e16Je7TF5aXLitznk141yBQLFqLVETp8926WH6pYPpULv9mg7s5",
  "key40": "5Uc7HY22rfUTMdErnhuC3h4wc6Ci7kJM4qdbC3VMtM3HT88qz69TCTw9UNUyc2o7z2bCcJ2psK4doTFdQAB9YWmP",
  "key41": "3rcrHJHtz4AUSMT1c2zKogZYxSNXeEqvfjpsNpHKQFJN5juAkGV7M5Cy6xnbVc6rCnGBeWFG3TnqPv3GbhL9E3oy"
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
