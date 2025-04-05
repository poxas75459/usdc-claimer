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
    "4PmsRZZ8xYimkATtKij8zzc6GLGi3nYSR5XM5YTA5TzMxukG5uEhSUXXG7VXTXvo5U9oQSXFHKpjjpEAG2JR21WW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23utyqXMVcLUn68Nq459SUyKTNeitukaQD181Cga74XKBCWax7iEPka18o2rb3YcZddsigCw9xYZzKvnQaBm12mV",
  "key1": "3XeEkLFJLb4kA5JS8JPTDZcwwNzXbashs45Be24xuhxMcj1PCMywaSEaSQh551FkTJ4LxeftfA1vAZnH9cLiHbCe",
  "key2": "Y17iiWjRqFMAkrHQp3EdTi7Lj6scThpE7quiNLC76qDc2Jc4njV61ECEh5ENv2mfTKQaW16WJKxfW52sz4px32d",
  "key3": "5LrgsCQEGbjCBWpBYetiDYhoScDipRGY4KioFWPyDk81C5ygssk66bLjVdf1TzKB3VjcaBmpmNy1jGq1sKWx9XnC",
  "key4": "27fQocBQmz6n4VmPX4k4KUYXyaVs9GLrJgu5DozSd115oEG6HRL3etxdQFCXGDyrCduQpMuQLp5kDNYtMTdsUtVX",
  "key5": "y4ZAsce1jJ3tEcepMDLtQCHQ2cKmdmBPFbd72SLp2TaCNTuh3ATDz6qNueE5DsymiTUuXbfhz9JHznHtuVZj731",
  "key6": "26HKinDTA4aSVZgfmn1JAtDkvLoW4EN8XPpp2qkhJB4yc9caioBYofR1fxiXnnXJWwTc5vm8xt2qd6wmws2tAYkb",
  "key7": "51guWL78CNyeV1b9bUqGMVRvNqozxTBHuCFpvk1Pu4pbFHx6WdLRvoYcCafCWJUj8xJWFdfciL86d5X9BeZzVwXq",
  "key8": "5VqdBYHXc2XLu9XYUydwtLVsMTa4zuMDDtaSpc62azkgKifbsQxuMmUaCZjzFdxLQ1vEUq9LTG9S1LFnxRRQMmcN",
  "key9": "5hWQ4PWMg7k5HT9kUBnUffPa7tT6w1CWtT2uxtp8n5wJoh4RfdjzrLpWYGJxpi5fSEFTompdfitEBtJMscPiFqKh",
  "key10": "5vYJdA4z2LUKhhtxJwCj5HRpV2kkf41A5hW28U9qVWuKyhN9bsZy5RjRrL6zKJgV5hgQRBMV1175GiwGVMqoy3bi",
  "key11": "gLr6hoe2bS2UwRaVbuGD6Jr6f8VdeSZUp4PP5QoDhzZMD2TZkYM6oTaUDJsfhhLNJXrsVru1qc6ai2zPuvyHRag",
  "key12": "5RUTWnJzGE1KYGnPev7ibT9DjNigajikHM4PcqodZ6UCF58LoPPQzxLw3J8W5UqCY4sarJJxdscBCj8aav8f6D9x",
  "key13": "51joL2ndu5Kh8vb1cpGwzG2RXLghfPj1UWK9RDkVNdnY3GmHgNrmE4jBfZXFYzh7yWNastGfVBVDaEDy8yybhwxo",
  "key14": "2CyD2hW8zyEFm5L5uU4rjREATR2yAZ5ii4tJSmcrgoLyZcKqNFxEqQMiw9UggKFHCd9gM35MtruXnLvGvvRH1EH4",
  "key15": "4MQqrr7d4pVzYbDgi3uGfU2DHQrR5FZtzzkwvf5joSsYNhLaRutvGhPAU9BCmHDagVHMeGxj5ZvgB5bKizVxBLVM",
  "key16": "5ZXvgveGAzrNvWwNo91M9r1Cu1taPWMxAqJyA8Qp92819KaqBp4y23zvB95oXn4caybuLQzrma5DWiJPT5kf9piA",
  "key17": "3PDQnxvimGxm9RGUZmuY3wUyUCpZEV8MKRHYZvo3R5fdigwxSnJ8Vn7yfWWS1gbTXP3pi3YVbQEG47Cx8Nw3QGY9",
  "key18": "qe6jwasP9Xhz3WXdfj3Vp5u84VN558Bh7y3cqfN4KNrgEYzsqagQWe56oSRcSj14diJygDX7wzDPgVWhHcoS6sd",
  "key19": "4JyKR37aWkBFWjxQMg4kmqpFWAGfs7dctwegwSZW4TAy8VmBefkAPDFdyEmJ2f3UUqD7QHsYiLWoGtkss8Wi8j9m",
  "key20": "5aq8WLocivfLrKwxxytX88YYygzUykNy8dxcL1QhMkRGBujAmtRj8d5SeKiHqyeco3SvUsoEt7FTxiNjpcTW2Q7m",
  "key21": "5bimuSjLQyMnBuSQhyoNhT1KuCy4Jb6EwqdpKb3SD1JzT81e9wHRAPyAVj9qr14w5bkJ5jpdtPAPo61gsCHgMHg7",
  "key22": "61P4seiKyJYk5Csn4che23BjmphDFDPgoALv5e4MhqGvMnMy5U6a2oKJqDtXQMuRAnAYA5JVWiHoKrE2M4BY7PqK",
  "key23": "4U33QdnVJDBhhTWJYKnWobGXKPDekCg3UFEAVytgu5cDDyfbJd89StM54kVjqKUB2e4aqL1cHXkepyL3AmoexXjg",
  "key24": "2yXmoBuS6kHLhKHWkDSKGjkQsnDXYfzrArLptcCAGmhfCBkPEzK78KhfVRy7tByLVcUXqgVqFWww6vjo2DKzLdhU",
  "key25": "4b5DibBsNnCb2Bhj8TZC7HXqg1jiFMmhtyedJXvMUwi6B55p4pZH4spd68KkARhiVdMM2ccRc2SuwKHZeHRhC1ab",
  "key26": "KfQNyLhNMXKdVeRvPswHLPf1NqE6JUKD6kV3ajaMKoJGfTtPkKJJzJV6QyuPnUYnrV41TxmoVdbTuWRAZRKAk4Q",
  "key27": "2GPaq3x6vSfkaUL1CUExsxL8fBtwASyUSpGSAfBBurArWYW2AhveowyQptXzrg7wwHvk33BuqyVPwVQwqMwo4FFt",
  "key28": "4Srxd7gPtjerqJhHZt1QzNZM3ck9oaZ7zZjgcJYZZabGQsWxLphS5Wf2JnFjKEhAV6y6KuRaEmfgLA1bUBxf3mPc",
  "key29": "5ndTUn8uAeQS2vDhrNWJr1SzLtgFZh4TYaTt5tWasv6u299UbNYvb5B4cALCAWBxmqaeXHUFSKdB2hm7mYNRJWx1",
  "key30": "efwVYhd69KKYw3xvHPHqp3rSEDj2sL5fAV2rmVx9UBuNisjT51Aq6jwQLPNLeNG5mi26qm8fyFpQEeFwH75CArp",
  "key31": "4rUbadoyoRMJj1dB84iFHGkwFWHDD9cjG49nwTMwDwJhJodijHMjALYQNfsa1W3VuSKDocUMFEDDHYziPkg7FvuQ",
  "key32": "2D6Witmj1KycM9KNGFEBQSrfovdUy3tMJcVbR6iwX1vH6mf3oVaagmTosdA2UMgfde3B4Tx1jHEAxLvsMNhbJ1Jb",
  "key33": "2kMY2BRMwJLaWgVZwdQL1YJrkztsJHxk2JuZW684YYVnKDiX4sihun9ZLpKFerQmgCuRbuq79r7xcK6t8uPke8wp",
  "key34": "2Eoh56frzYHH6wBTCT1ZuYTssMPqjhdjdtYegcZUK5BEsjEcXBtbPEg8JmnAshhGFrUZv2AoKhwgvXMpXqBv1reT",
  "key35": "4TMDKbhoAv73cqdUZjZLV3rcyiqi55Vwt3z13uP761c3J9uDw7s8rfTrd2aJ2S2ff5c3ZSTNRAZqc4A4v29zLsht",
  "key36": "5ui6rbXDwfZYofnxfCNh9cYicQxLwo27PXoNTRJ6hdu1FCjbNnp29RNXpxD9n5beYPKjk4CNrfYYVLV13ZXu3bqY",
  "key37": "22FUzjbdFt7TU45r52SENDtzdH3Nf7nvTtmyAgRdMCFgrrPK2PnKhDCfdefo8YmTFwd7zoZraVEG9GkJ4izsuZPw",
  "key38": "3i8CZDHKU5Kck8HMPFKxVRxscaJESfg89WDUJtRMeku8wumg34jaKt1mqmmxfFmBqc7NRaPWn5KzB88ZGkspkiUK",
  "key39": "22E74xfzWn2hRPpxQkqR9LXQik1ixbLjMAFmPTdcC1DovWNWbLpaP6gH5eWdTKyRv9dFBiweVdGUsHVhi4RDDCwm",
  "key40": "5nLAaQRbomorpCYqF8eNPRZ214TmdKVbyvhFQAjDpD3dzEMvk1u4UPGXXNSB4qXEtdrHZq5uBCRZHyuYuv5Y7whV",
  "key41": "5zq3m7nnGDbAZnsw92cQDR4uG2h3H5ZYcTy4cs73tzu9ahCpwAscySTHWzx9e9khqAFvV9zkBbsRdgqfo1io5CRm",
  "key42": "3rsbwfGLWbUipCU3kyUBjMtMknmSKXARZRWFn2r1GBdPh6TUU3Me6HSqxinephrLx39PU9HvUjD8pRmBxTcs7MN1",
  "key43": "2W2W3sVKzGLFYdvLG1xVugNJ3HP2Qj49QbvXxPCtVyKxDXtfkGZXFtvZvgx5SVrjgbbNM1h7HQyZEN7JEo1Zgnqz",
  "key44": "3BtmKWXqchRVn3rRaRR75E34GxyZpcVo3D3YjYG5FiXMFWKi7bGpcrGGwuM8XwCXageF9SSx1UX7ixvjj4ug3mVS",
  "key45": "cH2cRPsGDCy4zNzR2bqiBxVgVPGnbSVAXjRdRXLmzPeWNRTGqBduGEFCNCJGUPeqUPcDz7Wg9G5skC6ndN28zAC",
  "key46": "45ZzWVt1XoZ7To3V4gBWdtjLzitV8vyhpFiYRzjQHbPgfWf8N1bJ25gB213vf3SEnm4TRNFYczi3ABkA8k2HvrhG",
  "key47": "3T6ZZfcSPBqPGQ93LacQRm6odSR39tHUSr7JvBVjMQ2niriH7BZuEzRyvsdZXRQXwCa45nhpaRzhjJJ6UDtjCBX8"
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
