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
    "XitHkNydUqW8f4VmEgY4qKAqF7dmWHYtWnp1raWrd58ntVCHc9DUMg86zMVNTgVCtm5msJTSpZjM8pWTd8ucuLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FCgnL7EP2nxYduEWnKXxVL4TGZH7uLKtLcnWDZyByYyJmFkZ5MnbVznkYqgKPMVbP8MQRyqi1TTSF8NNKdHPqCz",
  "key1": "UqH9H2ZzKHS38KZ9YPRxdwmYA21udECZkNN6BbbpRW5aPLrbFyTbpnsiJPUgnHHPwpqbXRDEURCJfCkrVtqu9w6",
  "key2": "494uvdAcgiNTPZRujMBzSePAUGXqnMaDJ1Xa5yirhmZvTmS7LGkcgAppwRwCpwd3koEt5a6mMbC7jWddbEWDAjsm",
  "key3": "3fbrBveHYqhQiNMmpgowb2MmVrmTtT8x3TWNmPxMCu1aZraVgys9v4QvXRMqEH7nhLKmr1PP6UuE6FRoqzfnqGBt",
  "key4": "58EPCwZxmT9Vqrqg5Nzf6jjARwSJqVrAPnVYqaDrb6skADXHLbmRgYF42EDUHPcBwnnk18wws4S3ARZaP9C8SwF4",
  "key5": "3BeiPfDtKSzQDuVnEtebYJcxYQdFuvEpcjFw8gTUBHji4k7mXk5TRXGZtwJnw2M6BygxwasaNARA4SYqdkBzLuSd",
  "key6": "xyS3dNnym2tLazKUgw2ijvhZSSrikMGerPgFxcMDE2KdPiq9ocj5vf6h7F6uVED6LvLGkDgft1pdzPWBLC34Wm4",
  "key7": "4AebFEEkM8vLFnxdGQvAhsR1r1aURyajhuSt8aUSaeYc3KbFdK1tG4ZiKA9wQbokdSvruvpTCoHNMDKogQp29JrX",
  "key8": "42eXYnvewSCGDKP997Tq6LHAP3CMrjE395pHhY3Rg1a82Vexn97AWPJpKRKaJfgD5XGx39yhbxFdQi5j2H6Cs2tf",
  "key9": "4FjpHr2rpgHre98ckPnFjYptkwLPnUMALKyvVxWLaewHrgs7uUgAt2fWLoUPn3TiKv3dgMwc8r9qG91vT99D6iUN",
  "key10": "5mFFEdHCHaYRcgqchyxkj7zRFFaeTtvHKKzin5cMnLbE7oRz4KdGKuwbQWUjN2CzH31UjErDagVgmf6aYqA45uz1",
  "key11": "2gFj5JuLKbPV8cNj74zjSXRM3EHUPN1HEHbVkpX98cxP4oe4c3H9XUxduhBx4N9SQFMwo4PYeFbbLWuF1UaL7ZL4",
  "key12": "4ertGdsX52qRd4sc6UyjF42Ru6mvgZKYTxpq73dWnS8Usut2cHijm6UfJ2ffJdrhBw1BzC4n8DxG5sMd3FQJZyNr",
  "key13": "44xSyYLcebHdifmp9KToH1B1KRziKii9ggYvS39j49ZYzUsFfj7Vata4YY9PM8iiHuZii6VUKN39xhnAVU3FMf9d",
  "key14": "4kzmbEc2hJThyJjZAjN8ebWh6mx9SeV9PZt11JsefC9cxMZHUmFKfJefXcNFxkXbXmQa7sK2qqnnJ4q8omf3NZ98",
  "key15": "2AWVzurtPxUenotVC87Gn2NXMehzxKqhLgYdPTb1QkscGsGQuqcoC79L4qdRBhpD5YM8R7x2FajMdd4yDqLdwbTz",
  "key16": "5AH3s3nFmxLFKXRGZdMYyUmy1ENYZv22h9PXaSPZLQ1iZJtUzYy7B8crRndnXi1uh7exUpb2hRK9wuLncUzDcqC1",
  "key17": "B1r7Jx98oNzvzjNX7XHYQQ7yAsB6oBQb3Lm7aShMYE5DUGKt83zTB1HzVxCtCA4npAxiurjVrUi86tdgAywchND",
  "key18": "5KnQjwz9BVvZ8wfinGeEeVXQpgQWptoQq8MUWCgVSZNwba5vnggwfPZenwzTTYugbFdVrvAVfSVzEYgTXvH5rjjR",
  "key19": "2XquB83F7YcRHDL3UAAQPRZ373bFK4eKrFjbgTnExohVxZDmAHAU82eyZQDzEeAS6XcZDnScuunwEZzgp69pBT6b",
  "key20": "52EJpF7obUkBtD2bpdMxTRnwp43Ltg7MXwcEBVMGB8xMPFEBq8Bb3ZwxNCxJAs52dU4eX5DZ8HbFnirmkkUegsXP",
  "key21": "yC7noyYDjs8mHxdDyuERnSDRywkXQcrQfaB1JsAGSieMfSPKoG8iKd4rTD1ngCj8QrcQj33B8qX4n523G3CvtqY",
  "key22": "38ha3gMtEmBmxKpZHcGeqb9CcgSfo6eQYEyG4sYBTpV2sFbUadRmfR5RkrdQWLKVKAaYXZ2x5whcTYACtzHhD17D",
  "key23": "3E5Zq5gVEVGsZiXSzzRfiT8tXisgPnsvztCf1aA6cg2cCFGVvS31GTvKZqSuEYQfykdBbnEFx56Bu3k6AXwsY1gp",
  "key24": "5TCDxuotHtHi9h8CHZNHV8nUs5ffUtc5r2KavpHhxRpx9Wx2V6KTC3anMhubxuJk8YEZU9Qix9oX4bCcYEsKEdAM",
  "key25": "4Zk5rw4VXMJe9HpsUBGgU1CWCeZcqaPWTurt3yZuBux8t3YcMgVBvpbNHLC8QBYTAzn4jaHkDqxiGcvoTRdQHCGC",
  "key26": "4nnpjp8ZuU9dxKtGygGJNLQng86KFxtZZvbGJDwuGbaVi7u6W3cNyDLP3S1CKpwrmbLmY9MtH8ksvtGw6DyMt1Az",
  "key27": "5EaZjgVVo8FpqdWi8T6gYypQyArFHjPebbMpZ6SCBNQBdG4Hra8zGwW7AwyV4ndfpyj7F6vqBbm6FY9UcQbt7FQJ",
  "key28": "3Vn19nRfrjfnDAtXMbJRZuSnFJ7k82GABqe9XuL53rR1fECxtWwP3GQ5XymjLKcXZnHog3npeSmwUoMSrHEuvTj4",
  "key29": "29HpYLuUTJUwjX1hM1Zkfc26D1dJ8wbhi3kUdfj2SMQKM83rmM2V3RLVZS6yaevuaLGR74UynGvg55mwg2LSA24g",
  "key30": "2AvBNEvE4AbwVSeYJjb2UNQfdqzSvQKH4Mz6d8QcdSdC3faKhfnTEJA3exju18Bnktz2zWBz5mMbdRhMHzzZH7uY",
  "key31": "5CczgH5vRtPVPJ4aiaATpSjzQVV3wVae9SscAsXvKXyJvkNAwyqPZmqewD3JPhmG1bBt8eA3dj6EzFfcGksavrc3",
  "key32": "3e13HNHv5iEdWgdvmwELWM3MaghnhCjsny6xmzbGew2kEVZvm8729LbGaanRTvg6wwKd1vgzmdSNt8oWnjbdwsAb",
  "key33": "fpDhcbknX37L9Y376EjBL7jCeSX1nXGgD9HaUUbrzPUTDHMxhqHWHWvCS11wr3FT3YqCuar5ndEBCqHH7LoRSvf",
  "key34": "afEu1qPeQEFXtsr6DVcPGtpQkoxPwnWkXgUipUkTurNzzMNXGctbAh58NsGRGw25ivfSDg8YDFmgeDCfYefBTt7",
  "key35": "5YsyAVsNzAbj97Pu92QRwZWgCwR9qZkF2YHscH8bndMh2BpUAkZLgdGzUqSayEiq5yUr1jLiDxyWTZbpKdEjSqHh",
  "key36": "McJ1c67a1Ww5BzqCXg4sJ8Gtz6HewLxbYeTiXCeU457vsB23oN2nqViaxdVndAh9i15sDraoCA2ck5CZBp9u83G",
  "key37": "4HN4R8buGQJYABQDnmiAZ9YXDL9prqPY7VrzL4Eis2KnnyRj5Bh7AZ4DzgMQzPKyB1SZAvzS1DcKWAnkwSZCgTDr",
  "key38": "56jvYqriNh7oXjPRWzoAwANyFQMCRkW1adapAZnpZE4Jzz9TdErUQqom1g3kMS6mGQ2N67fAWcs3DjPr8xaFs7Zx",
  "key39": "5iopmGN5cUjR1fA4bVRNdbpW7y11MkK4uZoWmgALo558UcVH1KCaKEL7wRx3boVhSqr3AEUe1Ak5xY49AQqpVJyJ",
  "key40": "3eHyk1sBGQWBMjsagDL3rD4goBL8LrgXnr1Poe9DKtzMpQX4PUw7PKrdrWBpeThfus9UsG9x13YUnHWZ3CKyBmyL"
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
