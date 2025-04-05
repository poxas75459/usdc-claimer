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
    "25bKQ5zng8iKur7VTpgo9GUPdmcbqtMBVTd2ahbLWwLD8PmhWDT67q7wW5LvtvQuRs3BHdFn4FqVFvDoAU6rnaBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9r7feC2WiJiEUKA478Rz6Hyqzi8RhBKgLiiaF2hxijJDwyLSoGFXxvmxdFZnqt1NPbCAuY7DBrETKjTmLJeipNf",
  "key1": "3MLvwAytAxcncsmAQFZJx7i6iSNFX8UFpeyH7QomavMEYp99GE9nDHRRkqNCaBr3PWyBMWqHAV18osqGTMru3CDg",
  "key2": "2Cdr9ZqkTsMUK8t8pxjazJZZH9ELsHU6pTbwFnyBvguDWiCpnmtFfwiph8wgEuBAtR3yFqH9YP6Wi9PiUDeofmjj",
  "key3": "3Q8R8G4b8P4L94M8HjhmQKaBLVqe9Tdri1X75mtcjR6MLLvMn9eonHU8qnGCWVcvhgfunBLNJUtwxjW4iPRxdfLH",
  "key4": "pMYcrdBzgWABa5eF8WWh6io6xyKGVitPXFVf4EmcLzVzsKpqoYJPKRExBcBLjXe99oiTHWeQzCn6XQVLqjHMRjT",
  "key5": "2KvyWcxPAxLB9mYKScYri3krHFu51VyTbf5tVqwx35jDq9qvcBwQKheny8Gk9eUTxJMT8K83NS8441K3QoTMBTHm",
  "key6": "5B8fyBWBokKgkVJZj93cKMZuUyWJdiCPwTmiS56Nr76wg5oZ5taB35UGKjGYkb7F2zCk1KN48VeypmJVtyDwCqAe",
  "key7": "5XULoX3FBD25imN6NErh7i8wrXMt9NduA6fndzXKTLhAEdc6QzG4Dxpk79A2Tet63S8QaYwrJegAZzqsBUpxYmhL",
  "key8": "4vUb62enpLfX4x7Zn8Kke4e8HxPNiMrEw3su5ecanwct7GxEpY8maaFgHcmZoMaiap5rV8TYk3Du3PYUQnmNhYfv",
  "key9": "4mFjJHx99uuj625W8rksyW5crGTiwaw7TxuchY3SSFYXh7xui4VfeRvonoAQAytn2BrhujSu63Vf4SWzGkWsC2tK",
  "key10": "581YbhHcZBeYiY1aU5jQm2i9EfQiVVFTfyvxhkqoLeRFe5Comv27rKtKJRgA3Lesowuske4gVCzj3V4r6m7MqThf",
  "key11": "4D3Gec7g61KNo9qKYymc6HRXJ3hvRZWYFZ37EN1shi6GL8TDi9oPoxHsCySmjdFSpkozyWtMrzGPmdYenuoen4cc",
  "key12": "24avh45ET6kP6iTGohrw1DMkSPtSQELEKZSeY11nCRpc4pTjgsrBeNFcdQJB8P5XbkejCwjyQpkrK3PgGWiLXn1g",
  "key13": "Q9kv8TzaBn8HaWNTsuWsbgvY2TzTRWyV1Xc3QvBc9ZCtLuVoFDdp2oJZs4JA4d1T8qEdHJbtcv8dVvadSTvFXg2",
  "key14": "2qe4UxKYXDfF7ps8nccabmkVTHdmgPq54gBFkpSikUj5UqX8wd5T6r9BZkwxHE8EuerdoniSRCny1uRESEGQR26x",
  "key15": "2QUGcqubaRScbusxixoM86SRrHi1YnLv79HL4E6GBMSdomrLKVmrw3bkS6P6iQneUDDsWmus6fpe8SKfv3uYJx8S",
  "key16": "3ADRQBwzPKe8gLSfpNp9soJjYvVksa7AdfwkhaA6pqBwtRExJgeMJbpRA3XPKJc1Sjm8TxcxKgzgf9BqNRbJMR2H",
  "key17": "5ZKAFc8eq3qRoBQo99zm8vYNFrMALAfM7UXmxmMV9jPUWGnTWTrADNYhnB2LFQReeKu3tY2irYSwdCANhdcXQD4W",
  "key18": "3VBTxaDqVhhJgFrcwmxUfnPJ9DPE38DJkwUsocrxVQF6eDLJVTQguNyyJdPcYNVwmcG4K4kxmCoAbgNmG1649vqG",
  "key19": "2TmWuU7P2sVeg7qLFRQbc6EmDowxFqXrpfcLcJztyvanihWNnVT38AjZRNfokDQWG3yaz2p9KQ3dRDx2eq8pKHLR",
  "key20": "5EGEfKEjFJeo1sgYye14yJBLpm5BgFufiBTs9Av8jerXTYWas31kvnff5VjYL11Fq1xgxYSkKr2KFhenYRmJmVG9",
  "key21": "541oFVzCQ4jPtw2DPSEVMvUQ63bRywyKHJzVXBND6F6iUitP8bEAfTYZ8TaExMyMsb7HTSHQc5ksxNaE1MXcdqVV",
  "key22": "5SRJ6G6bfkBB5JmWg383nDeQmBB7eM9k1xQSXtwXSp4mX7kdrZhqMxP1KyCZTrXUhMMhR5uuXMX6jFMVkAZn318j",
  "key23": "pXotdeFxeNWHwGJinpeSYebUbqMowFyTQHp4LsfQAGKDFjXH5mxNsE4AdWoziKwV4uP41cea9pV1DQwHyXfwKA5",
  "key24": "2bPfmYNjHVJEq6bcgrjQZLDijkYWhSufzZFpkyvNLMgVuXvWpWwcGuw5aGdxw5bCAyNPNAtvBZkskNiPdgSjfEdT",
  "key25": "25stVncx91WWHNBJTTsg3nFbtd3gHd3XHFNm6AwkVsW3dba9AgY9DCkCHrMJfWBVyEbCXAQiVxf6GacURyWihqcW",
  "key26": "4WewyuHZAXu9oSTb9gA4eZ28eF5m8MrW32gqWmRz4z1b5L6CKR52V37J7CLq5xADkfJxzBkqvgLkoh2VnisgSGaK",
  "key27": "4ynCDj9iFir1Da1gSoZ7uZTnUY25sAKvPgLmxHn8PDEjLKqDHmTst9noDDBjpUjysQC75gndFjwTX3Yc8fAHuWan",
  "key28": "3xpGRfu9HZAXXhrkyrKXchVghecTYxPjgFjgpVLDNbJG1Q5mhFjD8fQTwZqHi6NXRvPAuJy33pQZaw5BCcrst5cD",
  "key29": "bgTbZQmy5zche8Dzz4d4QiCWHh2qm783jXodYnbFY54koeeegsy4HFUvegjudpWrdP6e79mS8L7xT3CQpX2ebLm",
  "key30": "4Ny58HjXmtZWQqio5yfBpqdUXUtwjcudoUGWx83x3HansWEmt2yxAsHhwitukfjKS5PJuFctJrgaT8Gfe3Ti9srh",
  "key31": "5rSXGLnMDiRt3vheAbdYcYRrQ9UVrXE5h3ZEMUCZPQmibqgPRe2zVxaSH9uxHY5sRuDaycziNEnkuXcrds51arqr",
  "key32": "2D47NinkrGJYHETPg1woF2NCtthQ9r5EW5EfDXMuj66XrzVt4hDNrsE5xPJVx28NtoSZBsTKNCMwSXVzYGtkDSTT",
  "key33": "3mqJePsuzWv6MZF4H9MMPVizwSypdtnXMFGq1i8CtMvSt1b3XVjNRnFYYEQQn79DdVcPW4PCQ4n31RrCVYCcNmfW",
  "key34": "4mmLgiGRmUPpyNinKhrhbyiUXaN1qQEPLi2yszJomrRxNc7bbyPmtwMtGDvyBmbRtLKMkBGZy6Mr38VF1gJCPDRt",
  "key35": "2KdiPBsMr43fdwUiNaKdfBW1AHAsBUTQzTupDMzdLcvyPnFPvEHgDQBGPKceK1swvixXC8TN977Q9zegcBq6wua2",
  "key36": "5xVGvXvFPqGSikuWXXhiQfjvfEk99UhZLBCndxyXAXSeG7t28tbQU3rxBDp8dh6MyGyWAZpAgMTKpYVRLMhirAyK",
  "key37": "5xX1pZe3on8hq55LMUt7UfUVKTif2WsnQgVcuWkY61zUMvTCXXX2AhCeGTPUHgLKPcwYqZyzxW8Vup2PbztPYJBz",
  "key38": "41FjdgCh1xRqFDXhRUsrg6hHYKbQPTuW8BLwnUUhgVywkSqBvEk9w5vTyD93jxWqZocgv7JPuGT2phGrz8Y7VJef",
  "key39": "EbDZLcWikZWMHVbXDNPWwWYcsYbdd5b8x5b6kAixicErLvNnr1eZnSbJRwCJ5GKhPLPUnGRvg3o6wY3xrZBJpNV",
  "key40": "kXV2AEU24ATGYiAwJtByJ62nghnxD9ceS1hoPtJGVnXkHt6sKnUjEGmDkoqNvRfGVueEze59VPn96qK4CB3KPd1",
  "key41": "4Y761a7D8bEgEVaGFYWuHRrAiMUGxHgTgnhXSDrrYhEEuugE6JUKpWLsEeRo7Yc5uAAdaYPEtBiB8RZbdjcK3JpS",
  "key42": "uh9eFrmz9hMnvoViACbU1NRoVkbPKqz6CZgRz3Yh6kufWNYwztjtBW9TCYBBVjGuiSQKR5FgA7wFyNBpcF7dERT"
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
