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
    "2N1QbWeK9eGBxhW2cJpzC77bHX76GL8YiBRB8Dju6wWzjq3HJ772BWPkXzr6s7FEEjKMLBtu4zZeahA1Lh1VhN1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MBkkg8dj3bVVFfcH3v5NHCRQbHs5sQ2etWNrRdCmDG7P8K3oa3yMYQFnNUgcSH2Bw13hxpv5BaeXxgtqt3cD4Lx",
  "key1": "2VAXsNtqvShzGZPxED4uWycA4H1kRGvSaHMcXa7eBipdXKgyF2gDcavpcS3HBHEZfKFKGPbFgU2LtT3oSnMCHYxx",
  "key2": "5jShBDaNc76p6Vamb9XcmHrUWWKa6Rcoe6Dbs5oVn4MSnWBzirW8Xhx89Wc9ZuCKXK7kgV84bwyXphQXDoh1jC8X",
  "key3": "5GbX3BY6xC87TFFvtjKjaHRzha5Bhn9J8f4pKuoD3VSVUEHwKyfs9sHRCMRThuxBQkLBM2uUjZMB8YQseM4wMfse",
  "key4": "4QQFMdXDt59gyHp6WFwssZZAtN4tJCtfPBGF8tU9E9dBNk9LPgee19qNyHqa7WZd3tnPZHC1esUrPxpRRq4wtGry",
  "key5": "35LqZTNAvHrtK6muq8RzrQH6GMgqqTJp337GXyhiEo1v88rexwx38pu5m4yP2cqi2pTqihydsJMZcuSbBSjk5UVS",
  "key6": "5jjZddRryZwyf7fuLnAg65CUQccG14ZwPv9ZP5cdGZnyVSKSnmtM49mJGvjqAGZZDhSKa9KbJa2QsW9gMegS2zQd",
  "key7": "3uraGXANEfUazDyiyoLYFp778AXu3QFMWxYF1iaHZerXSEFHYPoiQkcMewFqeMFSUqTFGGcHZNCx45DFC5kEHsq9",
  "key8": "Dwp4rw4hwabKHqiVL6hSCr6jo89xQcj6MbVCbJTfQGq3QMfkzU6oEkPXvoJcs6KW3e4NciLm6NNHpqMfcEtYF5P",
  "key9": "tdtjhGwbHdiorCMwJxhjDzDujHGDm8T1HzS4wH2ZDgYaxGJmsrxKNoaKeYtpJy6QGR3BCGCnzzQ6T9rWkSjS4tD",
  "key10": "xk9fCJ2j4a6UHnefyi575CF7w9W3MLKCMP8PSGkwV4EmwsDgQJYsK6DWRnuEDPdYqkJTAvfL7mDYrFyz3238wqR",
  "key11": "5tisJiKELGK5iBQVJcfx2YuVDZFYBuwTqAwM9yGFf2kMeByepDvUDg6TwVseE3KSr8AZW2EocAdNZgXG15Q5WG49",
  "key12": "3WqSCtPcSJmD9NKzGNu3jw85rhx2CrhMCkLuJZdUV3SbTWD7pyUn46dRNHFA8xnLyCYFWFeWnmxrsRgXx2rLaz4D",
  "key13": "u8L5wTYSdYcdcTy3wyusUq8sUhqFJNf7zRAnEDZdRJnFgQVgGERucR2Lncpq1ubMzgnb63fLvv2ACcX5XpRugQw",
  "key14": "3LoSjDnndWqVa8yiosZc2gon5sEUVRSaXRTUzC7zB1XK9z8seZKiPj1UgassXaEMas3maGsDgKvEqdkRGnFAEmEg",
  "key15": "62Yj5rCNn1BL3dRyjMbaTpaQ7NeQ32rtVqZzZcEDviaHnp2d2LWtXg18nX46fvepZ6XHftyCfQdJ6eFKpxhu5WgV",
  "key16": "4Cr9pBuvz7pq9rQrpc4XpyFGq2jqARp4zTZB2xQUzDkehvWmkbErCPWqSVspGDMUkB4AfVwqYBPMhjweVYCzZunb",
  "key17": "2g5AJK6xY8apJkWVVLCoeNgkbSX3hwYf2oMsT2sWz35U6JXxHyoMqca5RZ2LSyEFvdzSNd4W6Ejk8FzcuDZ3cx73",
  "key18": "2fd65denjaDrBda7JoZDxUtTEHTTw5svBCUjFP6RfyTxVTaPfTg1fCDxHGvGf6DEu7Vrg2q3Uq3qUMN5dULykFHv",
  "key19": "4sHWL7dVou2nBaQBbQhzzTcqSU4uJgHpmUS1ir6kKmpUGjN8nCdEVgyVuYXfz6tgye9m8DdQDL8VWUUd9L9L7vq5",
  "key20": "62duYzeQE6RGygVqr2MoiTbcxaqxkTtvVvVZgDtCsxGaYwpqxQVvw7ke1gnbsjxQ4ct5xTgm9f913cSYVUtpQeLm",
  "key21": "35ykeNXEb3sEqHHQFaSVGCBxj4e46wunAAGN3BJsjHYkPBry7ciKevo6j2bzmAymWNitJDsMSCk6GUYbapLTAKNu",
  "key22": "5MLmwKrd1L4ZzQcnN3MSDuUAMpYFViLPrrWxUCyM2ioEvUm9LAaxPEdeTf4BiZS3yK1miZLvkhU4cCpaKQG2wLy7",
  "key23": "2EXduAKRwKM6wAQ1gRyNsz9cycXhMbonjULZL7eEm1r7WjosaDCbCfvHgbpzEZKadXwXG86VGoaPJrnv9E4p1map",
  "key24": "qKX5NbYQCSxty7QNR18CLsM8iaipnxEMVniS1ShcdyvGAoL5Sa7WKq4yiRKQxKotsQ8PhKzw2MC7fJAkTJSGvdu",
  "key25": "5gn2ywKDMiRYpN2x5qkgW1Twdc4TmFoRtLVoJrHbEdteSGWeaqmGReD73TZxU1ZgJyctDFcyz6FGbxF4e2bzLeTH",
  "key26": "32PY6ANyXaoMxvJcSUg9xCNoEnFAH2nnJJRVuwhWGXyJXGNJ1ycYWrfXKe5oM44AmMEDAeJzXyYwDe9t9ZuS39x5",
  "key27": "25QWnjWtr8PaB8EpRv4hFBDNsL75NrW4zFT6cdKXq4eijY4TeiU4aDhuvNEbNK1sfASsrsXBjSMib56UDDeHuxz3",
  "key28": "4C7EpaxYYhjmpxGy8qajgSi7C2SiVEgHesJXdmLWsJVk7aZbuxYs22Rg7Zg2HmH2TX5a51HHA5mDBXaNFoxQxus9",
  "key29": "vveajPSUdfN4LS1E46znEvsYyf9hFJ6YpqdZSvmDtTteq735pu1ACiE5zTwQjKUb9HrHMagmg4dTBHvnGXyLaKU",
  "key30": "5PuH2uZRrrzvMTpfvjtQtBcezWMrqRBDiGcqeVZ7LMdghX8KPiDohnC3dL1T8oqVxhZpNfCtZNuT22C4b4uu4d96",
  "key31": "419PkYz5TaHTkZcZpq579xUnBs5RcUCaQ1NxsdpQd8C5ZKGpaPaAMpvom6bzPbBEa23imfgrndmBHeUeRanVRpH8",
  "key32": "4CX28d1fBemR3PjUvwgmNDRV35VanRc8oH8No7QC3zrU2ib42EvFuHXym5GNKDXi1DVc1K8zVvZVZw3cgJELo4oe",
  "key33": "561mEWWBqcbFUQL13aZdHkrrrVgBrLqyfPUmmPUF69JFEi6Fg4ZMyXtcjdto7mdnynQgJDaJuZWLLhjwXmqDGXCc",
  "key34": "hWBAjvBTNXPYLYkUQGn9jSzQGX7mhGc6iv5FBzSV2RpnZFsEBrB83SrABH7qQ95gkpgiuwApnHGJCXcBkKy3k9e",
  "key35": "3FWWkRoEBLq9GYXuZQLxNaatzXZkJBWKKZ9MuJsAQzNP2oS7ahBRErRaRtEagP6MGJhL32K3m9qHUtiXRkGQbksy",
  "key36": "5xTkbRoWxyx8UoBCTMPXEGUxYdgdLLB746yJdxPbYZLMRs72izcuLzBGHp5Kzhtcqkg7AgmSUn53KuQknarN1M55",
  "key37": "CA54U76gy8ZtvsiMbHJ8E4xxzTuzHz1c6GupFujjmYvf4YzjUxsLHsUF5Mx6he2VkBuCedRrpejEq7VKqjWFaka",
  "key38": "5UbzxVZz5SwnkZKwrhs4fXLi5TXuAmi7Z7K6r94kNtqdJa8GTehNB31xEVf2F1uxH7oWr6geA5LtRh2yomXDDuwM",
  "key39": "5cEuUwX7dALwCygnfP2gkAXkQmHVotWBVHAjEt9e3vH91RgCLd8KPEsQXWQXzVhLFKfrpnN7BiRepp3wmMk8upcd",
  "key40": "DgrSHejggrPuBFJGYtT9m6LQVm4pVV5mwZN5VFjHnMFPtsnbrtyF4NBR4f23EmWDtbdJUC7RgBMAWyWeMhe8Tij",
  "key41": "5dXhBS6DkgsMcxVyhitoo5XXifvbRu7hAVHgEnZm9cKWUzsTkJ5A6y99wRLtgHScSyyMq6t44WHFhvsYEQJ37NGs",
  "key42": "4TSb1ufA3ZQFofoUoUq1XA6TUFJiKLBSNzdCZHBfkW64Hi5unsJF9jnkyYsoQzqkhb46iXzRp1Jwu2zCzMmQqrnN",
  "key43": "45uU9boAVREFGkpx7KCBzubwwQN4fbs4hHgkirruU4VBEbcLvB5xq5KqQ7zSzfvn2XsZS6FGXgvCqtE4MiSMrdQ1"
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
