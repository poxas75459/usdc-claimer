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
    "4yhbu98fCYSJuLBPBonPBxCz4iW92GnkEjmkoijcNfSPHN1nqoYcaHTmSPRthr9WBSLkw38MuL5xTqURvFNoHSMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZcjX61AFCRtMgdscYH7239jWrgwKXXt2iL3hhuS4vrTRiC4N3GtCed4TEjt2sBbpW7w1fkn8mon3bGLJByHzi6A",
  "key1": "5LqoTE7oXfXj9nEh8z1Jj1dUVqfEYTpB3T8vHgmmzZWv5CnM8QUCKVRaNmNn7KrTDamECf1UmgA9nsgJhscNe424",
  "key2": "21eDH72Ey7o5PLWDYJKHQhfpFWS8gy2h5kbGZeZ853TwMi2suvi2RPdiopyT2vtVzxd1VTiutwdETVgGUAE3ygkc",
  "key3": "4m9Qy2qcq7gKTqXfGeJy7MVZhdof9PhBX8i3JeZLYTGNtRU9tjvJDnxN4hMy6ByzQ9GcaGwvnsSeLJ7hW6Z7zNjz",
  "key4": "63RCAKRhstAG6G5AcKfFBmpe1dvrac1kCG89RvKQi5zMjHTB5c2svuuLPrPCb5trRsS5fjwBHH3s3ug4hMyPRd4J",
  "key5": "VdJowJDkaQdivw5vTbB78yrXFMS42cXYVTuBCHX46ybHpYCkiVCZh97sxuogsWTrjiyyTNhNTHhVqqU9ZsZLUP6",
  "key6": "2SDARNS5hmF1a8vbCq7dzhcedtA8nBFwYNp5WgnyjtVGttjt4jXbJVsB4Lz5Uiq33Ucsg61LRJ7Etg2EyAhrqVVV",
  "key7": "3k8F1inuP63iVqtkvvgHKf9BzdUiCRWKWoGfnMc4Q9WKPchPSBTnBo8PPBEQ7fPoMi2MZgaXWcXKWbzSktLQSC2A",
  "key8": "Upxk5nUAyPc8Df1zGJ6pBdembFFvUUn3hCx51sgEDjY3d8RdWS3TcnPcySHPbownyVLYnVjRcwghbqgNkmXedvE",
  "key9": "4Apc9R5HeTNGMYRhPD5CuUFLcBL5a9JzFAvxCh6XD8TBKwM6vaC9bWGhYA1TTrahXsQc3km9MwjSbFJv2rnVaBQ1",
  "key10": "5pRwDsYpB8bPCsxiFGmddhNAYwouAaSiWivF1EWMvXd9NF43HjiGuZiPdbyZ5qZfUgwmDsNb3ebmQqqQcz7t5QeC",
  "key11": "3wQQFoJx5WZNyfFN6wTkeqZTsLQf4Zy7cAmJwoXTHXQz8yQLixQYwyrTsC9Q1FGoLyseuCF7cNAZfj2QbdMFv8QU",
  "key12": "28y4QwSUNXv4wpE3v3258b93nQYYwW7ETvbfkRuRP5v4t4F3nEpbaSfor956dBeY61UMSMsmEDR7Y7feFrDGPbu4",
  "key13": "5GwGWsdiSQ94J8h3m3bzbHcoueXE4FTn9VcdysbNVUZSvHGHkmTqkX6EpvAERg84UnTMGeEWi7i83R5h3LuJWhZg",
  "key14": "2sHQEq6ATUvPaKevgE31fEngEjwc7HeJMCc6thaA6ViHWdBDXDpvdFyUrVfJdisXW2c3k9mRQgpRJFSNN2tM4rTS",
  "key15": "33Jy4Ua4vbQBgdgqoZwMhAUh2uz33v6MJscSB1FaxFntXUQVRdukWmetjQMTPsXcVVMFLnDd1xrgmRyEBaF6EG6U",
  "key16": "5xpPHYrSQEyu95CEwtwqoVVZ58v64pjJJ65Rphdtq2bDQ2Xaqe77couxjxd7o64NHk67qkRi8nybAnoBW2pXgoMb",
  "key17": "48kWfZgH7vD1fNNGnQytDReb1484eQSX8BJAfHFTHS1vcUX8XSxy83DLurDg5t3FcuEkavJTyxUNxbdHy4k8sG1E",
  "key18": "42U9Nn2n8HaLnEuuZXSTg2rtd2oHiViLnwL1i54N83nw5LJDppPgoNiqJwJLWV4dU4Jhb99MZexUFg6rDnKgKv2r",
  "key19": "3EYqJQk6S4rEisoSsJoRvrN9ZnkyGdQJsFVH94ju5X4H2SfcPjivUxuY8jEiHNHviLJw1GdaxZVDWHxaQrDnJ4uG",
  "key20": "31iLLkz9giUz1CxyKKykmbYy8wkiq5CFnLZWbks6ANXZxwmDggXzZ2MqRFGHRNPSoXSmLdofRZS16F4jt7keLS48",
  "key21": "5aH3f8pAMi5JZzTBwpuVQNTpxfBSPpLRJ6479rUehsMXLyxCVN7eJMEQWFu1ZT51QrqgRc1MwscgtJKPsQSiFfoH",
  "key22": "287gAmzAXrQP81rPuBjJqiGVDGPVqCSD14YTEtLdx1pGCotPmn5UeJmLJuwroW5ut5KZaKJQarNuemmzPFDG1BSB",
  "key23": "2UBHZDgDRGiRMCbuxfjoZpgPbD5s5sKmLXRELGGPXostJFfAKJoq1MmqbTwHYsCjLgjtRFhLmofWDvUA83SXgype",
  "key24": "BwtaqiyHfJDh6Wy2UaEucKohEzt6QaE3QGZw6dSxMKLqat59zJbifHefEVv93Ha3TNniCvoyGeKoCohxgcccQ7A",
  "key25": "51G6JDAQQBbgWhHRbwsnoBRx96Dm8hTMfcuDRkhhu1ZGeQpXWqgjBdHtbHkut4uKoJiroCZ9w6b4gkH515uhe3t3",
  "key26": "388U4TFUUHHqwVwYjyLAGV8PHBfvjuoDdGHuhT6mcgxtmzkBPvmyhgyEyHX5kPhnBmjmVafqVbFuiD7LTGBsGm8C",
  "key27": "4HVUGkew6FBnUq2MsuVaq6raneGAnEJrCUPLuNJmzoxvp9zo4LNwsd61fyPi8PjJdySdVzkWBD5AswgCWyBRF3io",
  "key28": "TnSCNjUF8mzSpWtNkDGLp6YSM3tmPTjbEkvFaJbngq4xD5j7yggYjaKCTVELR3VoQbJh1hc9EYR6k7gS78QoWsq",
  "key29": "5YBHW5hkggTWoXNufzpZYFxaQgrEyhXqJ6H8mBByMK175HPt4aoKc3a6FmgB34wVtC7gdNpdaJzL742uXdYfpKhe",
  "key30": "3AgQwsRhH4gyxLHP2N6GzdxaLVV1yEbTD9t6L1t8wtHDaSKXEuXhgUXeUzCsB9u1pFYDQyTjxtPcNcxZRaXbbHTQ",
  "key31": "Dv622w3scB1jiqFLHd9bCCipD3gVk93SqeP64vmSnYSrr3fnDjsXjKovnwTwUPat93G9jq9CEx1dz5TRKTgu8iZ",
  "key32": "bzhBKnQswRJ57RLQmuZp5og5bWc1EqdVoBWS52fEKpki3MG9ghhrJMymxXDXhTBQrREnrxBsHK4uAMqr8QbMNPw",
  "key33": "3tMHYw8ryQ9Z2QnoQirV8F8N5WvQJdyevyV37keM9KFr1ADEUPiNi1qoyVJ8bS2Wz9zmr1dvby2NstsVmQuyJH6L",
  "key34": "3katNS3X5kzJ6uTq34vbmuP54BYEw4LvbZ6bJj2zN6hBCA85JsLuBBnw58BkE9HqFtkeeHDKQ7baJ7ZXDhoWiLzk",
  "key35": "2P3okDTyPx9F1PE6359bAZczAbBGgt4ykzinTZTKUiguo5wWVAm1kwbGJtPbfUgVDFQpz4J3aypqaK5ajDTrH6Y1",
  "key36": "5esbdEXX6RkY9S7L5qN6Ys5wbJa7yVXhj297Z6jHjvjfoxn8GekFrVMKFnU92Vrkc3Yjmka6DoS1rRo6Rsb16Koa",
  "key37": "44TUsFApDd8SB3pnv152FXXVGk1ZGaYWGeSw2cCcWKFuQtSRpLMyS9vj9ARbk689oX4M9p9KgxPiXPA4FxstxxYh",
  "key38": "FqTcwANMAQVFvSosgDW6m63duKhC9h6Enxrn96SzMM1ZkSD8BLXhJpwARnDaY6NaW4UkqooLUurbrrByz59n4CU",
  "key39": "5oZD1JJT9wAfja55aDhzu5TNAtBh6ajQhMmtd2V7F5L7MJFkcYUknhjmv2npWDo6nGAPhtGdgaN27scA6WAjmCNj",
  "key40": "cLWMpY5S7e7ZvefVYfGcmMiT4UnBVUSWKpKwJxdLWiNFiNVLuHwdSLbKXRPrBNjLBjzovj5kzTXkzsSJPKSainH",
  "key41": "3bkZP41NsxzAimeX1MSx2rLnNg6mRxdmiSwQGgnndWz82UH3SF2CP3amixtLLmTXsNCewEwHqGHFi41Ugg569VA",
  "key42": "2CCha9ejzJ6X5Rj3i56mkdXtjVFg6HCimPYNWF3DvjbP9nWz5jVBtnXhnipVAWwZbZrEAjsvLkyzV2S5YLCHy39N",
  "key43": "4GaksrAcqLPrBZaeYp53jX3XEmzGKbG2S2qbbCQdV9YBFn6bqzxeekoWsPSNgnz65FBS2NW6gkrugH96YxyJb1gd",
  "key44": "47fG2aWVnhyK8WgUQnybiqMEhWRmHtoPczVYgffZZxNzDxot6D2sAWJQR4sCQDDPx6eqo6joAYMz6AabzeXB8JM6",
  "key45": "3GUVndKtG67UbTWEMgV3TbLBVFcS2gZbqnxR8XYRc2GMBDFvVk3mAWJar7fPb3suJGQ6iiQUo2daAzCacB4cJsT1"
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
