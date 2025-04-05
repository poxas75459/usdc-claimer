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
    "3JzZXtEEveY2VvMKec4XHGe1P5m1BGU5RdDNYAGfsFznwnxexo7pLR8G1CyZtbGMyGQfraSuCpkFHx4EkZo2n4a9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4omAA4iceNeCCzeVguqY9Ej2fiLXPTEW1YkNsNNUvkMex5sx2FKPFDAZSSYLARxvfQCBJ1vR5Le3pnM4HzM1jhNs",
  "key1": "3bGzdy8hdvagb7EjBVsbZnYu72eAQQrfqHNotgnu2ZD5JnKq97ocAZRMte7H4qTgS18i22YbswXPSin9Zgin1CHi",
  "key2": "3Rj8VU6XD3fkRst9L2bSLTiDAsHBg6j4s9n4Bm7tcuSvKnzQMDc6mHM4ET9N39Yq4pSdgNX34Nbr6rGDg82AVS27",
  "key3": "5Cxe3U7dN6tUpjEwNntAETjF1SfgqPfr5NueWUZVKfPqGLMq5Xja2qswwtUWX2uWUoNLea6F1QwDQbCemz9X8Cd",
  "key4": "2fPBTUkR4MPgR1HNk1onLqqvfQJXnUm9RrJBbwHStkXPNaEqhqoN2USVCk5vgyjKZWv5Xh7aTJA7Lmra2iacCMpz",
  "key5": "5cEnTYiUVjAHYbhfBp7tERBUw52J9nxLFk8MhWfM1ktfWeX18jA7XdmPnWgmoTy9PJ3HvpNNCaM3m7ogarUAdWaV",
  "key6": "4BQ3RGH4KcBdjvgKYr43QwBP7yCtiQuKSbo2XaPZFGC5XJcdW7g6Ph62WaKDoFGSjanwqaqgkFVge7KgGMeKarkq",
  "key7": "2ysPKQPQTDafyoLqacgs66m56Gd5QFMtjxeDpRXnnBCJ211YnUt1s6MvpvwfHka6esmVDiMcVg63JEfXWB9rqY6N",
  "key8": "5f2tE3wjpT7uKrxgf52tFuGwTroC4UeM1aq1D6y1SQJCjNjHGqDVfDer3EzLhTjzj8Vj8fqB9SQpMQn9uYDnEXUb",
  "key9": "2tSrZ3g1ipRGFRUDayL3hbNWALCcML6vxL7bGECfefKsBbkj3hiwg523fuXRkuX6kqZD1qis6RMF4a5DegP5hFRK",
  "key10": "5hfT72jr3VKErMAo7bABBnTfZ1S5vrvFwpi5DmQgJYBrgpgvbekSkqTrj1KNHV97qna7zZpfSdxYwoHF1yfV5rBi",
  "key11": "3f9U5s5g8HA5gAQ4fQesQHGJRFhtfYbTKNsvBcDHwNTp7B8E1Gs9wM4pVEquURLm8KjfMjQy7kNwiEaAekZF3hZN",
  "key12": "4jCojPhzZA8aUsLE7fJcZHkzwWmM2P4es47sVYK4CTfQXWZaWzMPYfoCmZWm18XKLstQqphdKMzx31j6Btcn9KR8",
  "key13": "9u3a69oGZYbgKYLi6yJ3PtrUuSW89uJ8abb5GFdUZzScH3yB74hyGmo9FSo4Eofi3QHtqr1RJVzZ5fVPSAV5edG",
  "key14": "51G9qfzDRKTGEMoiCG3FmP1KciWoLxpA8oHAiRvWJJ8TrU8MqesTpNq9m4jaFevBxnQw1F7JxS1YTYsuEtQqQEfq",
  "key15": "2i9rhzMaWgbLdPyVqbSAs77xGQ5QaYLckeKhso2RfzgfVjDTkiW1CA268Loj9sqEsZZfx7shBULHHPdZ2eLzzFCK",
  "key16": "BD6y3t4Uni55amxR9P2texX1yCjH2ybXKuJidKJL77paQBTAPriJSeBKx2jUx6h4nnXUo6pZxrcYzj2JxHVxpgm",
  "key17": "5U7aCxwFcxM2bA1NBQoTpvrTXt7Z7BJzeXcetHDbfFnURnha8Y9TmBsNfcYT6Z7H5eA98qLZ6AD6bX8Y74TTJpQa",
  "key18": "2PWSmktEmZno2SoREvBFxhK8pJUtTA6fQLZrUVnFdiFP7N5Pqf4qMjz2HtWC1So9NRi7SrnBCG92AqYABheKYZpL",
  "key19": "5jRv4hREv6G6wQ2GdYvR1s5spc22VJhqNxqtWVrnU6ucx9KSmeheC81bLNEQe1vdyoEj2ecucqJW1pYUrpe7wsdP",
  "key20": "4nGf4FWxqPmBDtp2Mpcr8WSXJkkvLCXkE65ZPvT8Zqn22fZV3Wxqfv9jiUDG7hcxAqCjQHmhsHsTWFCEUx19Z6Vo",
  "key21": "3viSoPn6AfxHyaoak9HgSuip2iLfpFdfz2byrDv5hFwGxu7EsGup126XVqnNSnjSgb5de8ejdiBapz3rgv87wbgZ",
  "key22": "2sABDjZbcYgC3YPVGsSXMjArskvV4cANof4DtNaZV4eXKc5oddgAwULPuG8Q4ipKZmaFB3mopPHbu4wEK55yd2ZE",
  "key23": "2oLPxAGXBA8AC68nz9qhuCMKbdFX1N3gW1qYi9oZvXveiBBFNKH55gPeHKEzV4h6mKQpgrNHv3MnQLNBiMLBbCZG",
  "key24": "4d8ct1ysvyWctGPLPJH8uz3y5KJeKKtvTP8Rsezrtz6icPwVGxNLVztWw75LboWQNuWhK2H1Tdqeu4kMKkzbaDLH",
  "key25": "2XTiPSorP9ukXrRrDsGshjzsSmtJgTnL9Gkqg549Hr9sr2ofppvYuntasigP3zU9bSCRij9f8GHRXRtLHjVyrJ36",
  "key26": "2AQBvK459pHSZF4m7BGQRkfE4m2z6j7zcQFh8s8n6aoFF5dmGgbvKNKDkFctwVb2Px1vFXQSrWiJPRmyRoRGQap6",
  "key27": "5LN7obHeoc5gwr2T5AJbFgyasu4EGzDT8PkCoTLZEWkQ8gKnRViSfrsdy3uSALtMZCZyJqibrwUczc3MHppuAcjW",
  "key28": "4uG3XFJZKk3GwuZqEJjSBT8LVgP2Jg11G4KhaeUtBhvp514f55zpR6yLEAN8hciuGX4odDSmuEca3csf9VdJHcqA",
  "key29": "3KWwRFKLjCEgGDTfzNu4ww2eBsSKctJBmTmwsKA1zWi4vDQMsW1uRtmvy2f1i5JPWA42jNdAvT32yFKtEdepdpvJ",
  "key30": "2jUnjguSFZg9WDcmzCSHkxC6UVXRTFcTg7wXcmNrjZw2HVKC4Qn4Q9QeLWzWGgtsgQm3akn9CbnQ6EGiVVzmZYiV",
  "key31": "5HBjNraJCkNr8aqAreD7mekSHdN9XDwuyH6cdNzz7opmgYaATyTpgrQ7p87fCs6tfiFbQFUjwJdVWLZtYquUE5dB",
  "key32": "5dcpWJqN8qN7PUh3zGifw94S2MSHTyZYWH7sYUetsfKYg693tsLjA9xZr3yHxKHgZwpRiGMMvh4uFFgAuujaE9YR",
  "key33": "44Qtw24tsJjXomd3kNEjVzhGzTCvHEDd9PRHHDh6ZTXZZsyV2pVsNiajnMDenzeKWcrj5KahCZ6Vuv9ZEqqPmpNM",
  "key34": "2gxMeVZvuuHzeZXNea9i6MfeU7PGTzBE6HtsacaCAKXjCij7w6EQtTku54VPd1KCe7Eic6fvjd3VxZHyspseMjGF",
  "key35": "2pesbcaLT6oymxdQC8i2fWu5n4rqVwuX2sjFeUN48KFEkEEeZhA2U15EgXqPE26825ZSRPDCUHESQsKeUsM7ScXZ",
  "key36": "4v8Mi4Xjp4PFBEUdjxPSv8ZqRvqeEwNRbpzigg7oCfwYXJX1o16ePZkakJHDyQ5zDJ7iUHk46uPjTXYWGzRBLEk4",
  "key37": "3ymc41bcp55um8RWBi97htTYVy12ixLqPBf7Fr2YvpXnQftncE62U7uocfHweQQtDCcdeAvpjC4fnB4T2dR8XBy8",
  "key38": "KqnuXR8yfmKH6xHenZxCs9XBAaaur3UtYZ1vaSuSPrSrhgwcDwBu6VVjyZfuCqSs1xSV97zCG4eAzFnS6JqnfoB",
  "key39": "4kruq68Nm1tsLZRY7bg9htsZ8aLoheHecJzpaoEuQGBGNM2aufgq793xcDCVwPtXTyeeaThm162NzF7CnX5rSLBp",
  "key40": "ryej1NP867W5XkzBJ8iMi1qJLUkQ72cbqprtUnXqmBwzDgERw6MKg9JXAdwA7GUVGbNbzygGb3JhxxLCtgHp55x"
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
