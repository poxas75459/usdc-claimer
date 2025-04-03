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
    "625A736K9SPAR6fxgiDUXooj5d1vCRREf1pPeKqxcJNradP1QPaygzLn8HhVNnLEFxaXTcY1bGLn1fL4s7aWtTRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5td5KVz6navodQwYvzwwJy6EBxdGcAA8HCzzPC7WfBMkzaJ3ahMMeVBMHWHAWVtz7hH5tv93pXx27JJ6Ck1xU7YT",
  "key1": "33p2aQq33CW85HaDmQd1gKVpDoPGfgSzmtq5Zt5181Ah8CFf5hnmM88YgVNcK8YUajQKPP6sFE7axV5gAY7NMJRa",
  "key2": "c83seBMwNuSc82XNFcUfyqX5hnvGiUqJBb9nvHsS16BXot6bfGQ52sPtAs91aFE9Wqp2ejPybvScybK2j6NQ4Et",
  "key3": "2JddsNWHcrjZdELJSEFt7VicJk3CCaSuFPpVXJhaAakt19wRUf9DoM7zQegDvaBvkJUr71iHCKPRRwLV9RhmqrR",
  "key4": "57THrYXssZqCeBfv4DsEfxjjc4gms46kutu78khw21WJZunVxcxenya3JFHBWCzRgKhW3PvqDBmYTNgjUmhohNxo",
  "key5": "5SEStU7VSVFHDeBebZRNoVdfmtsx8M7LCPZnxXrBsnasVxvh3w7a6ZhFboUmnbehcdQreKZEXo1mt2osziKas1Z2",
  "key6": "4giGZYqhRfFSkzPkYLPJe677GYtUcUKQC7HwEiq6pGV9pBu9jg75RZfzNWozmxxCE9cmS2Wm85vWY9zqQXTjbrPW",
  "key7": "5BmSC3DQW96TP8aLaWaBseuAGPndFsqEWCzhmhsEod1A74n1JzATFQjfEFLb95BHx6KD3zLbsgDDksMKRwy28gH6",
  "key8": "23AUj8GNLxTDHyTWrhh1N87VfxYpR6aQUAQUKRzk25oD4hDtJFwM7wdJSCCNPEuhJXzBXhWhYhnNNtPvZgtjTy4K",
  "key9": "3mUMuyQrBwauUfUagymxukCWDkkRzdb2nNcKKUpMXSKhCmdCJXmjkYqT1hjRNzoxeT61xEzXbCZESPE3kGKfz7ne",
  "key10": "4Hpgjon59SXheYcSZiL7Q8dG4YpqC7c6ePabjBqjSUW2qEhX7pgYNQDap8NuBKpe81KWWZ65TvRrsHMKRhVS5DwU",
  "key11": "TG5mXJeWstTXjw4Ebxn3Djb4FTRpkdsJkomz9ysrB9L7HYrN1GQAu1NyXZsACdkQ68fhGiTZ1Hnn7hSopoHXYGt",
  "key12": "59rskywTGoRzDUWmH73UHRoUy7bFETYJMeWPJGURy2zBRHuyMYMcg9gmMAaTCdMEFcSaHtogDJrDkhNFZUdaNWmA",
  "key13": "BNwU1MtEqvZM4XbtV1fdSHXtrrpScKgPzh1ayL3vX2de3GUGdpNiht9yq37z6jkhnm16vfTeLRnXwysnsnxwVhz",
  "key14": "dg3F9CVj52r9j27dS5UapTXEsn5mioYrGPyfp6FaKrGgHrEHwJUHc9fdcW7shNoaMDzn5YSRsHfMYg6pgMbG98d",
  "key15": "4mnfPVYV4TydCGS4BkamqF5uhnhdKuB8ZUHEGVPwWddB7jRiGrBvePnLVGrAaFY8fCbKdLRgS9hTktTpLSfwnH6z",
  "key16": "TrvzNoo9TQZtwydkS3SJDg2PmLuHXbmMBAohket5mwPFwbjpEqxUvrCZojiXXKzyTgVZwfjnKb6GC9ts2BA5cUE",
  "key17": "33QMoHki7oPtmyzngbbRgDEZqXgBgza7Ae9u4pJQnVgXU7Pnr7ceo3EXfKwecsXR12nT3gMEqxrNAPt1gqUtL2Ne",
  "key18": "4q4b8dw5EZxb2aS4uNeNQ4YDZwDF7hqNVMBg6A18ohFdp9qqNzRkME1rvsA26R9hNSkgZSapJoYAzo5HCpLfNxeR",
  "key19": "2KgHbnecCTxcbTgjaLWKmJAx4KTozGNdfFS3jYY2MqRfD7bebKuii1EzSYKZPcSCHdMtMPymuvZSYtwhqgHZaLY5",
  "key20": "4HXSS4DbKa3eTe4dRASccj8Cn5nUtAh8hgKCxkqh9NW4EAdd5Gqc8VaaDUyVd5EpUHjY6gY7xm8SkZsTAGBvBHbN",
  "key21": "3no92ZnwuQGw3Uj82ogrDyWb6JpzejsFYSb2eigY1rdxoYPc9FkDJSPJdWe6hHeWD6tw3PJhpU7Ed1ARq7GfJy13",
  "key22": "5NfYwoi2yF2GXxG497pn2Uz3aFDTji82PPswi7hvGqB4hwGedzBTfGdmrcLwq7JTrFysFdnf4MXHLvQdGn5C3yzo",
  "key23": "4NpDBKwFv48KsopKGo3ufRgFx2Tp3vcHeh6oQyjdXeau7kbC2F1ukyqDigVJVTsoq2ikNpSAvebWhHHjQXo2i9nn",
  "key24": "3wX3RveYSeH8r91Mci1w9xkoJNof7XzPpNVsYHTemogFRg5DprjNuYgVcg6P1bauKfj3gEbNrwjHzevUX7EjABDW",
  "key25": "4YuzCnriCpp42cYmokmNFGJVtA3EMpF7pEwtYR3WAE5UiSsHVanHFk83Cd5zh4kmjB8qrzFfNHK5WsR7fpY7Xp7o",
  "key26": "5zobvWtX9VEh8uSETGneA4UweM1xHfdSU2f6QB9FxSkQdyRVcMHcKh22Y1wkVVoZwzBdAe1oRTnw2wgQYa8cwjDG",
  "key27": "3qzjmsEWvUYBiEWgFhcxakjrgho9MXETfZUNqciffVrQ9wsXSpNV3R2smYZognMqhD9F79yAEFkMnfj4AMn1WyhT",
  "key28": "4usoGKwfmZQst6jd3HxscLWoLLzy2jvHeina2wwG9EMnM65kGb6V5ddFTLKaTwgZkaLmSUyfB4yULzU1fySdVBDo",
  "key29": "3N7dM2hyF4Ve8bijhPEJunMm62tZJ3xHana8wvyTASTksMtdviuujJFGz6WZLcz8Sokhtp5YJNzmSgBWB6JHiS5U",
  "key30": "2VjssJV1V6GD4zRScMiQVZu2bnW3sCK7JEUKrtH3M6wM6KV1x3p1CtkGJiYQjux1B3bcmMFm3tz5tWcPoZtM2aqg",
  "key31": "46LAURzo4MTLgpQgV8VRT1yDYSvyBU3sKL1pj4jopX4bRMPHaizgKQuqKKMktx6A2nnSaHx72GkX9WJAqQPaJrWX",
  "key32": "2BkQPrZfuQ5iSzEA9PiLFREGNrkkQAFt4siDCFXt8ZfjLvPj6pS7P9a4Hgfg9UyFqW2qmH7q4RfTjsWzMtBfa47t",
  "key33": "Sh8ewV4P7chiH2CoE5vZtf4bynJs9UqD2hvMqPr9cq4Szkvzt9xRztGTiKg9AfjpjdFVBpojf8vPUkQhbbetQfx",
  "key34": "45udwsnmWopbjfq4J9KHoVS8FMscw1eGf55icNzNnLUZgdGvA2qSiLA2BrzAnSaoqdRk5hr71v2GgMTEgUsS5N9N",
  "key35": "2hnbqEjQHH4HeZ2UotYMe3gb69vDHM7jwDyGk1ApY5nu1Lv4icrNDQ8EAAxtc6mRomEgUi4fpr1GDD3YqYMRCmPd",
  "key36": "3N5a4Vch2D9sxyWbEpo4U548agPvNmeMUBFTYJAagFDnHzN48rUFE1WYWh38BpbpFdKs6EtRszR2k3Xx3bF2CWCr",
  "key37": "3m6MgWxPk9sPZpZHqoWEhBg94Fw9mw3u6zZjKidGsCU8871XGvtdxmcSoY3iNTgHUbHiF4ki4DnTrRxW8D1Rer4M",
  "key38": "5dpeXFemUxw1am1CCrCwXQNCFT6SjoYoA3BFFaXuyxi6SyK5gU59Me8aS9uy9aiXvRLtMaE9RVjfQxyD3pkXze51",
  "key39": "5dLyCGtMpyo4MKRGqJq1jsmzJgGiqpYAt8jhXaJtuzDC2mQCWi73K7K5e1uopk4WpYrE1u4oh1r3h2EEfg9nGesU"
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
