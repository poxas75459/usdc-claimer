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
    "5oXaua9x8mxAUqysAt4d9XXvah2Uf5U4cVRtbicf3HwThrkdZ5f6gCBGmaPbzEDbQ1tNsBmD68yje96fKyfMPYpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fdvMfdJFZpEU6uYWfaPECVdmFas8fYpdZ61s7oxrqRRuAUo9E8uM2WhCaLW9EG7qAzcZ7rArVfu3WS7jxbvEA4g",
  "key1": "22HDQFNG2CVGR4MyJEsEcy7DcRTAmXaHGYYysuZQ6PQj97CfTE2tewgmMszoKdbaJXUAif3VbJN4uJ1upr3bqpnt",
  "key2": "3VyzUDF57PVuo852ZGYnT8ysqztfER4DxRVkjSyGBHpS4wnYRhegJyRHPXSCBrqvBnvn8TmB2xA3w5a8KUfHLkMG",
  "key3": "26VufR3tZsckSwjJm7mpVdzqPJno1CV2fa3kJd5mMFRJq4b3G6VoqvtrJGfEyQB3pHbvbKcuSRNhwwGPTFYa6dAb",
  "key4": "3Ng8d52WVEiwZe6gtP1gqfadrqPwE61bcmyeRGvnr2UxPXvxFYukU6njkrcAjpkFHKkt5A6oFRCTTt6noyYp4ka",
  "key5": "9vp7GzfeNpepHmjxjNZYWS2h69aNVumT2kXQT5nKqFHif9VaaJMuWanhUfxtAmQJ2ztn7jUQc4qYCyBwRGziuJY",
  "key6": "5fGmeB4Tzurd7kszmGztadFss424EWpS3Z9ipe3j4JpASQWtMUfqfvK7vDEB1n1VPeXp8afuGsfYrWUhuraZ4mt4",
  "key7": "3LeCtKkDVry236ERDEfNjJQAdL9KnjAiVMX17BHvqmXTwfmYprJCQkDcg2qMMU3UcQ58yaKxmSWr8Ma21UsM3DxU",
  "key8": "3SdoUsihR4suX3DRrLDVGeR9ov6MzbojaeUQRmJkPSvFCZAsPH16w8KNKtLHvoXgLMwRbUAKs3GYqrgAUXRrdouL",
  "key9": "8eUPvqvUy4LaeQY5ETXWQeCCHNm6aUvDqyTBJNMRrmsdwrSAxWVyvduyJrpqwpdAg3LLVeaw2L582oN19roy8hg",
  "key10": "5KDHz59MdpzUSB6ti1DWupyzpXtU6gi6H2qXry4DSd74R4xasaThiHgxi7oDrh3Y5Hu3BqVsFoPn6hYirs2CVYkW",
  "key11": "2RwqaqmPbK5HgCTC8Lf2ob3uYkjN7ULsKDZBYTvpf6d5mHmC4AkZchpxhoVFYmMyXgRodyDFPaghesztsFwJBW5f",
  "key12": "z8wHW2eZZksWg1Mf2aN8oaVtXSoFLC5p9AHq96J8pPynaP4QU4YiwKq11wGmyASd5HEkz6K2B9fG4PvPpMZF89K",
  "key13": "5prBE1RTBQ9fnV7xKbk346mkuVRM7zYBVo2XCFJdstST7FX2nQeRPDFXni1rEeKYixqQemSrSVzrTozC9MsgzRCq",
  "key14": "4c7Cmsay4KZSEQbBTGYSywYXkrJadcAo9GLUZcwhFHMBNK8Pf1jxX9TPMXjAiMAKnEYE1TSpCwgmNtWLBFWmwKB7",
  "key15": "4zTf84kHZ2bjXvbRuTaCbi6juYQFSC6RBb5jo8ghLdGLeBdnbqyqXnfsNBMonhWt2uaHuPdbuWVNhSsDT7TV6NEz",
  "key16": "2dJnRdiCD8ibEeXZ5nEg9YMwjLJyrFBWws6AaEQb5bmtk6KA2RaxFpfNiafx35s52n7vP385vwnKnFqpMZfYUNK1",
  "key17": "38LZgpPnhN9K7yoeSijMH3c7cqGk9NbeyMFGr9esVWr7Fkm6M1f1dJn4Kuz3JtBQ3nFQReXFW5fwDxLPCJnqgHPx",
  "key18": "3GDp4au9nWHFesKmvpD6RHQAzTkpwGz398TBAqp36peY79pe5RZ4zoErGRd2Ui33WQcK9mDisMQqqDFNkiZZBhb9",
  "key19": "3dzX97e92e47YUTkETnMRfEXveWFfW7yyrAsLCjojJ2PmdG85kaNcoLhcmhJZyFptBLncrFFvwbBhTzyEr4kNM9d",
  "key20": "5hiiH5wRjaJM6aTKJSZgn1WQazCGn7cJNpZ6jZ1GjyVrn3TgeJdFmPT7K5DT9tQbcZ6cup72ZQFgzju1zyEi6nYR",
  "key21": "2ULcsbuncsDtD2x2cvWYxpq9QHeU3tih9crHjDnvH3YfCDfuiPY71uWm8jFWn8UtDmy2BebHPAaUNwpYcCJArQRN",
  "key22": "61BA2eKnUmkTC2B8a3qadARaiecr7nwThcA6KUQWV4TnJTBDf72yRWAdpwWVADSeWNjuybrfwsA8XAsEp1ipVtdJ",
  "key23": "65doKscoqcnwovn2c2qoG8qHQcVMLivtEpE9iFNWaMhDHF8UMwyadg8QLGAT9T2T3g38YtYfRMXvyBK9bZNLfnwa",
  "key24": "3t3kpudoKEVRb3GnLgfySLxR7WG33fx12fFpAJgVW2XnCJj8JLep7iiuXTmfbiETjnoLn2yg7uVYg7jEbAG9Apoi",
  "key25": "2TsxDaYrv6uZU94EZSWELW3ELyvBWjmkVnhtdzYMSibk8E9SkJJwKm8LQsHt9uJZpLbPXbweqhpFfUmYnsTdKzN",
  "key26": "36jxA1nUkcSLYvpRe2xw9iSVBUL5G2ZShsnjhFFzpnYKaaZtPKLEf6kax4TmYQEM765pQ3FMDDSbiJ94S9FzAWhN",
  "key27": "67cM4NcFAJGvxs63JfV6iF6wtbVYMnUHZpMVTC3j27AfAhYyRvPwh9KY5oP8uj57oQeo3u8HSmd6TtGc82PrUCKX",
  "key28": "K96bME7UFoKn5fBU3f5cAzDYp41ZWXZFvfH44kZzL7ge3fAZLxeczdAY9KyJpjPP6XHCdbEERt29hYAsF2rqq6P",
  "key29": "6k6PzMsVUHEsadKh99vJAhxGTjvn7n3dF6iVsYtTRXtk16YyDoQ4iNU2ifjaPDEqENaEGHsjyXcd6z3KzcxGvQR",
  "key30": "4NWLALePBgNpg13H3yF9RnvJ9faHp3pHHbkDf2YVF5Sk1Fa2CUtft7q8ZUSFMbsHq4WfSFMwL9UbXN1sunQVRx8M",
  "key31": "3MdmJTjVhuEzRgjotbmSDP7WehVQiAsyR3dP3LtSE7umSF5rqmvQivxX6Xash4EbD3oZD3F8pa6KQpFgjYtjVwVB",
  "key32": "3ZLmQRCaSawJXxb6PgJtLgoDjR3Qb5i8NGeCmpQnDX52KfRmyrf4kbmM1fx7EhhpfrYKB9QfQJh25c5WeHqCSe9E",
  "key33": "2FSSGQKWg7iQKjHayW43brKefxWxNqXPx9mKHP5DotiDtwsbhrBU1KNu8Nk7ab4ndYSfhV9Lg7xFN6ULnX9BLBZa",
  "key34": "gj7zAidAaLyCZ8GgZefaon97zRrKK4rGDMNTXNMTKU4h6GW2juK3fV4RTuJxm9e3jx8pLrDj2uXYdigvXKDsw9z",
  "key35": "EMyoKt99h8PgKE6MNqNoYE56P1ifU72tgmdBojwBEtfcRmFrKfuz4BgaifAu9xPqR1rqgRNpXQXhRFSXrCYM61k",
  "key36": "KiGsb9BNz8MmvVt5TdKHBfySGmvizyxgUkn2vbfSYiQ2vXUrNjyq3Tef2JqXEu3k8uHJdgAwhxAwG9Nfp1RahU5",
  "key37": "3pESgT7qvTYrq6ap1H3Z9UG5h61RDfTGsZpXhHkaRHuYVqnAXcAvqMGCiNrakfEh7xMBr6E33X3XSJDfgb4VcN6S",
  "key38": "RHLgzMus6sRWLLuQd9khmhbD7dtdexnH2m11mAC5C2kCHskA15HkT9PkjrirEWiGC7EDSxwYEtgBwA5q3dHVS49",
  "key39": "eqhqs1dA5ac4UgcAaXNKDVRDzFvnkK9DK2acU9FNBbDerDijMr1QBqv3r1ZkFYZBCKyJCZuJT3YARwGCdbfSUbF",
  "key40": "4pt2xkFS3E844AtrcaNteakDgcBgXEiSAcZzMNpvKUzYyGN8Zeotd9WgXhHL2EzHzGaJGgg9yZMa4nq4dTi9CZBa",
  "key41": "4skrRLsEQiHGfnUkZbz75DY1jeNtk2qj45QBCfXJuMskCbKsFgYrQLR7xywxVrvWxNwZrVrwnCRgniE3KoBXygYP",
  "key42": "23uZJMECH84LNWB361BiT4Du8aSSJkbkMLPSrvMZmB52NznWXD9mxMihdfUYCs776hwfqAyPgRDXuKrjg5ue7DZ9",
  "key43": "3yVpfnyHTkmMQQK49qYhSvEzEmowTsRKuhTe7Y9vTiwnmuk6NLKZiGWsmuPALavfS9VzT987huWS7aHLTxTAjXBk",
  "key44": "2f8rEo8RZ9ykbMitD5kF1KHDrr8sAXMCQUjyvQZaPs8x5njbCVN6ebPPCegiXsbsxjAo7N7Z71dQKxnDMG6YsqT2"
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
