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
    "gkdBJF5rRq2qPKmf1UApsbgVsWKkpQ9QBAYc3b8Zij4YKzhURkJJUP7rG4KwPh2WCR8U2rePWRrwibinGwqMfiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RDXhNwPEFvkaBKpaASTqsfASMUQDXidC4KpfQhFHQGK543CpYvJdhh62B9Mr8jLmUwRQ23bxTw5ckTFUryAgQL4",
  "key1": "3ojQCmahEU786vXhizmNMGkMjHRomVcpeEgWjGgfEehdhXF3UfxVuTpfSjwLoTVBtSJuZiCQXLxury6EfzVMy1fo",
  "key2": "2jrBq9EZTusokStmSgsNUr1V3UotgGtx2w3v3Zys7eS5sMzf4Vo392YdxeR6NR63wqJCdsUg91fhsofnfapXksqf",
  "key3": "DCqFsAcPjqUniSWyphukFzfre1DhPGshRdjPVKK6unZbmfrN7xBZfYNBrJPXJB6LsJ2Mb8Ah3rEQZqxM285HyJH",
  "key4": "3AYKoGwqagqn1V6o4s9Xn12bVVb5mdmteoyAnB9wvTiNnSh6tgcdZkbA9mtGWQq1HUQSoUDkojFMAtEzn5MxX5PZ",
  "key5": "3KCzNpnyYCgyqeEF7WP6n7DeNJLcJBe4ouQe9MYdostqgyreXUTTEBH4RcEuzkqYHQFQpEgy5qhjrfZQmk1x5aJE",
  "key6": "5scoScZZ3Z82vFd5EhK4DARf6T74PLXC3VnjxyaTK6QrYopY2TRiXyKFV9KYKWB7koqoJQRuferhgzSFBGCM4SJe",
  "key7": "4Y6iWnEWTRZ7zLvpfRemnVSFFfH5PK6sNHs3Hxg2gQwQfv32hB5Hk3WSV8CEf4AeA1zMTJksnai5VMbDvhKggvnF",
  "key8": "3uXqCPQtyoGvRoBnfaqo5yBeupBeVTym7FcnaDVuo8nPCJbexNNMvkRuvf7GLU2DJxwVg9ZKa7BcZDrXtnY6SXPZ",
  "key9": "5F33hLi8VHCHWhXHo5xCDHwTaYvYM2W2HheaHuc1F638Nh2W1mkqQVTgfonvdvw3YtUyLSWyAHJJxTYuuVRno7P",
  "key10": "5BQ6J3uwZqde9bwTfP6QCFbixmrrcy1fL3nkbP59FmNTt23pZwhmebinjeaZG1RMyF8grJVoB9hptizhszPuHPiy",
  "key11": "gvtywC1Z5tvXcrkpx8c9S5HTESCqJYre6YNsJod5Z8oaU3bEjeHMA3jc9gEs9jwYmENinmnYGyRxTHxkuCgxgNr",
  "key12": "4xhBxY9P6byeJQYAMXzSCV9WDsxtLHHc6jjukUeKpgX83vp673vGnmaGLcQvH9bUzYY5PuKpH3VgcwP6nVPyCKBx",
  "key13": "QdMc7REkdhMzuaTbnGuVRpdKLb1pCYfhxJD7JdCMFXsPnpziU8yemBBoNSUSgX41RGmgFSVB5deAKgm5CTJeXpD",
  "key14": "5vYUnCRzyhPpjzdmdBXamU8ix8KxwKag1HH7ZydUAmFRmhiJMWntYhpB5k7fX8xxsGoFF2iD5UJNDDF6vZpfP799",
  "key15": "4TYUDZxwsxrG6nVBUqmeHirDrTyMRWhnfFKdEqe7Ha7fqN9Yo4fwdH7tiyr9h8vaFAqHFXjSS5ivQ4P64SVrrFBt",
  "key16": "5VqjzsLFA1CCyzY45YetzqGZ2FAntGqUpfbHC4SP6YvsupAAn1K54tQtNnFDaGZXnP8ayXkm4LCFyAfj5tiAXJ7r",
  "key17": "4K9ext4RZKTejUoa3dB14Yko5jEUjqLBQcQG3eH8Xu3qdDFAHR3UZbW5cw5KeUNsfAXb6bw3KvtxzxcdyqmqoFss",
  "key18": "qZTE4iQCzmoAYFhrFjdmsggL8k8HTND1Tz6mASs5b46iyq4t8yrPxiuWFZAfJaAw9TUDi2bBnzFAVuWJD3teezR",
  "key19": "3cwgdYcjj9mFheAYRnG4uN2ihsoSgVLwzsJ1dbsBegsYQeM1XLpy8fqJaQaARWHhDQ8dCQZYY1HMRZQ5ToJYSEEu",
  "key20": "4TdW9bvecDPdzmcnxnpdT3N9RMMKj8g8eWnYWR7pjg8Kx7EriYzohGM4aCbkBkoYP2Q4U73PTU86rVMu6o3bWYjc",
  "key21": "2B4m4cTNNGRvhs7fkP4AbdN4T7uZy7aGtfHkGZ8BUEiR84WSj9PNaR7jf7y9wxaV1ypAdXvYiwi3uDuQP8LS688W",
  "key22": "wNp4BVoUpSEoj8mfVXNW4tgY4XMbu1mnK9XRJUhoKsfV4yiuSK14pKwygTazpmYaBDZ62wVsadYeLo5z2wVo444",
  "key23": "5Rs6vXu9o3UZeNirym1hsQqnFYa9x97mdyhQBsbMYCkWUUZeLCeFf3Y3ivYnjq8xi4vcUCpJLAZSy4vVZfLonP1w",
  "key24": "5zXFjjkFwWKEo7NCexu7ZrSCk3xm6aszZjQADGNVDSstFsK26AYeLYuerYk8xNURcnrVdfmgkgMRRP8RGA4UusgN",
  "key25": "2JtD1WRaatbyQQYgVBfZf7HNcwdhmuxcchpgYs7uZX5zNvkfHk2H8PjBYd2tqu6kcaHFgyi6LUnajhx2CRJDMutb",
  "key26": "3xy4pNSDuDUyogXYHPEhw4TANcPqmwW16ikwm5LMXKb7gQA9gg5WwmdXLt27RTkwjvJq67MJTLQmitvaF6wnSCyH",
  "key27": "4eLtDATLhHVkNbyJxKLKuHrCGtoeWVMwKpNCWJ5hMwUHjUS74ifJjLdgJRup2WmwzVL368PcGLyfFrK4NBsHYK5o",
  "key28": "5oEBfma87c7HtK87DMmxXi8ndUxGqZW2GHnphApCGAumvvXfheM9ZtiZeAFFKeyirtz5jeiUS33w4AVQquQZLXUf",
  "key29": "hZTVsmWJRmsJmEqApgbQM3SS96gwYqmvdDUZkY7bfbgsRn5xJgGp4sVigvZRWZRf2HrXMVo6QtkVgZW6SXD5Hcm",
  "key30": "2wVDpaqpEdMHzf37rHbC7oYD2FncXKAVwbMYcLoieZTugqJwJQgbbjEhuo1BbyCCMzx1RVEmgfP7M8J1r5TV1vnL",
  "key31": "2sBmcWX52hARaBLmb7QchgWmVorydX74HeZ44nzkCo7AR5UtT8F3RbDQ2d4f9EqKDpbFmQx8pTxejTW13SLcPCaV",
  "key32": "3LSaPmy7eQnnNPPuziz4sWZGfWnDKayFy7v8oKf5XXhB5LeD5ZjMGh7tumvNAcV1Giw9j7i63bL9vV1zRSem2K4o",
  "key33": "29s16UFGWWj6dqPA9yS4aAahSUU6tYoSCGUqnDLePP9PMXecehfmYtVjxAZAoWBZ1Ke11SkwfBSDmin9yNVjihTu",
  "key34": "2aBdgc356ZcDXpkA6GAHZyW3fbmmmkRmEppME5uj9kAbiubkRG18cKZHueq7V7pcvEEVoBc4Eicborhnujkg2nB8",
  "key35": "5kYUFxUT4Ju3D3zqBthCqP3PrxXq1C8xhzu8MY7ruZtqAzgPfiibyVxWKweGVrdLFNVpMnUzeYsU2ySv5ckwAqjz",
  "key36": "2tL5GNwMGuB8AabCfYTogpDhAQCpGmAgqaAg4mgLKxpNY9qxMWMzKqJFKznFK6MBwgzL1NQ9pdP6bvFcoUbffLHs",
  "key37": "46TdgvmriBkqRLZ17JzxUEDmgHMQfKb5zyENcpsCtST9X5AL8H4Ng52K6R3Y6yxXEaHRbqaqVgHFhGdoFcTRtLsC",
  "key38": "25Hf9sU8sBUXJKyR7DT7vuMnhp9CguqHDBP7MUc8UMRnsS88gm8zJvVDLnV6aMJVrPSuqXBjW1hn79sZtJ899JhS",
  "key39": "E6h9dH5BxzEmkMupcXkSBXEGcqnNNuGhfkiUxVDXDUinosFGKJ9mWaR6pyGgiQoCQ6GwRqwmb3gW34Pyz5Hbhzn",
  "key40": "4ARnjQH2PVthLDNdsUjbB2XAqeeLUwHy8KrzZ16oAjuEeyyQ3mp9zwAciZKjoXmDchgeAFV2JM9bGQ2P3dbX7ELM",
  "key41": "xaWVTShotaegNRpMBzSr4KtUeg95jX5APmi7TPceXDamXGJyUmcrCzhpVRWsqPrWLcrUo2GGJCQNe3WRd5EFAie",
  "key42": "4eWWJZxwGjhDVBuvmriyMNuzrCqcxxMyQNGnDuE5LLWbaCEAzS3M8K5PYR2VTTEkkWASStuhZt1p2X2KScztReRW",
  "key43": "9gb4eGyqVPwUZ3U8Ap2nVSJdwgZPKc3LPdrj9ZUgizUDyc6DsJsiApxW7ADKirzar2EFqh9jzS7xRZTx9qg4B5R",
  "key44": "3J3EJo2rsyh2AXdV6CfUKPf6MYrtLKzBpnPdT6mxCSmruxpD7bPk8aqsttYUmzpez8vJVbEaSWTUipZ7AeUAZ82V",
  "key45": "3TKXC62hKKF9c9riGoYV83ULSGT4X59WBC8rwQDMqKuB3ELuECfibio8QyVYLQx1QiRu7cyoRWnMgmUUDLj1kQ37",
  "key46": "4EEpbCbJjuqsfavkrNWt1JkqgadFkBQ3zUUQidXEaJZa6qHYEJUVb6CXVz582vUpWQUuMBY5pVfQELysqNLEKfCX",
  "key47": "5ky5iNMLBM7EvuhNuxQQeNzNMC8QQ5TYcaDP39Rh3ZjL9XQsoEvEHdcST7HMyxH7HdDAs99j2D8bo19rYNqJEqTT",
  "key48": "4AeE1AAQmYdUHKa9Zm546sAjZ378Fg99M2W8fQfL7fiwn2DDQyBSg3C37AMfkW7CqJLz6HqTYT8ZsQscbkrqwfkM",
  "key49": "3Wue5xyPUePUL3JhLXnmGwYfe4PYCftgicUZLGApryeHzhegcPTERCw194X2fiy9JZspe8tZuzj3kh6FTygg6un6"
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
