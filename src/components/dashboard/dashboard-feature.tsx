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
    "52SrVGMw3ocLGfVVDA3HNB2u36kozXMQfUg85EJTxpURrnBdmMoJDVQ4cXxb3Nne7PC9tNq1mphH4vpqDB66WWVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57m6MRHsvN7w1C5LSxiLCc7sWcoadZ1rk9w3mVDwPvTzqUrXEKy6fGBgZGUdeuRTC8eZnfXM36uScmknpifVHdce",
  "key1": "4asUyzquJnUxW9qJgobpQN8eJBC5boTdq8Nuu6eWXfTFpDCrEbeHrKaLyDVVW5JypcwxpKZpEmaD7j8GybeZhXhc",
  "key2": "4wcKLDJJh5xD5HdvhYPpQ1fXQYF6mhydBeLYd4KBkLB7NkVAjRpNgswpNjJEfu8oj1d1HWFZXSzXxAB1bTiY563U",
  "key3": "Po6V8QfBBub4zWWPLExU2vi3aNX4T5NF2DxExppHh3StLP6T7yeQpcoXSF3tcJdpZbPtPfUMFm21WyrrNeGfDVt",
  "key4": "2GfSJVQKSAAAKhQLMJWy2HDmA2ofr7KPtqVrQceU2UZbxdin6GHf53kmbkbBKn5oDYKUSxvfP32dCASGeUJN5G1F",
  "key5": "61Xgq1FNPXHkNhmvccidDXdZtY8XibSDo3sPexoo9UKg64abovyeG7MhY7nz1CMvP9soA6FdW9Ua4cv1pi8iDHUb",
  "key6": "2CcRqVmriRzGjbSz4vVhHw9XmRhUaNWHSw5UjnuJ4EFkSRDm8YixjRZc5jzgxAv3XCFdGtZpzCzkEAHdg2JM7QPc",
  "key7": "EF8hb22kKS6iad5ps2TvDifPG2M1DwZfkgsPSuDfWS96En39qf3g7pempU9mxr8b4Yi4NqFTtUE1ea4ZXXNkhfK",
  "key8": "PUH994F3UAqRWV576Vz2u57oYX3jnPpj5Eik3fhCVTkfXqSay9jUyh3gyK4oisC8dVrwzG6mfUugEPf65xMXMjz",
  "key9": "4zXMNKSmxD3SLs1Mk7As29pmFtjJHPocWAenQ44tQDmvHYcA1WFuuFG6ECCRfeUjCJK13X5bSDTDDiQhfW6EQ7Z",
  "key10": "3naqmTYqeJHZgVH3VN2G1gXGFtND9SLfg7KdD633ThCKUNi39DV4U5a24vS8ogW5KGF1mzByekuk2D1HEoPZS7P1",
  "key11": "2Pj7aKwmwEinkjeojyEVwYWvPXa2KhUZHjksF86oGyzGQQdL8khP5fi4jbEbCmBm318RXkaPTVAx7VwcdhS77dbu",
  "key12": "2EUn1LW8Uo4QakRR6VUDmPw4zHzqxUG3SRRqBVAT4DJd4ZyVuyerCmqCDqwYErafF8kpbgv24vyXdDxmZmi4KTdJ",
  "key13": "ikJnLdBa8fn9PCWDw6kV9vhWLWuqqigF1bovsqXzoffd9mp55asF5tLLpA9ZExV4wvDFR2YTPQ3f8cY42dbhett",
  "key14": "21X5nUQsVZHCEDgnuk1TPxfP7ZttwT9qvp5PuH98XMT1nq82Ykc7dRJqViiWMAjD4AqCAycR4TGiWUSoJoUTjmgv",
  "key15": "5ZvsG17RJtuVAdTttBDcxm1XfYQBVU99H28QKKwXCFSSPPTqbiLoGkzmsU5KvbhnxSPGJXJxVBJfLZpAa7pKoPHH",
  "key16": "4QDugB8bnwf2NYhchpyu5hQGrGUbToEdMU6bS3XPCC9xii5BV2qFCXeJdtAyNKPc2F5GZXXWKdM8ra8P7ZeVyQpu",
  "key17": "3f9nwykCDf8hCkMx9TRzxhjshFNVa99pafZx2e9fKYLszswycU1mj1QTRvMQFuEo4hUhb9S2PYPnx7mLcVBwdBNu",
  "key18": "42jtEd4ewfFKoxou6vZ9T7Bkwt95dWLHYs5HPU5UrsLi44dhVfejD9tULsit498rqB6NF7AP2HyPj3XTtKGxBRk",
  "key19": "zaBtJeo52EA7tGgE5KZhkvL2MzKCado3QqHKbi2FqBugp2cveorGdpDeUG9hqcsLq1aQ4T3tp1m11L7pF7VDfER",
  "key20": "32Y3sFqQG9LmZSFZSmWQ9hZp4dxr5imY4nTC1RF296WHc2G9pGLGCuS67tv1VtsKha2YHPt4rK7pyHethZkHAjim",
  "key21": "Lb7zgMV1TKziDckLwqVoZxbmt91GJDMaoyzkwHZQF6MbonviNnvKdZgB3wAEFntzvinVXVwozLRujmauybnjcgf",
  "key22": "2XFRAMJ84RqVY2R7TRm6BrKsDiowVdNvGUKd1nLT2ioJAnBQad6VwC7AzvrxAgxvA6An2syGa8t7LiHsvaQ7uxk6",
  "key23": "rDp6MaF2y9NLCNGG5vKyputem4zFV6CWnUARNthhPjLci5QsyLKP5ojQgPZsBJsENPaCzcDXVjmUjSKHSQD2Keh",
  "key24": "3qrb1dJiYzYhPm7ERFDqukRHQsWV7FBASHd4ha7eRMXJHdttXHSb6XhrNmqGj76oY3HzqDN8EcQgQ4HQtJUYqrNS",
  "key25": "SE4ca1efwqZgKjevLgWfmggZUekHieoxczhjUVzD5iQRiBR15X1zFR7mjd87yjnRMMkipV3jTEUrGAEiWVmrHup",
  "key26": "sEX7Je5xAChEEMWkW7HsRCupzTPaqinvgsMwu9GqFGHUR8bBcffu1YEnoRkPcNpa3pxG4vdLrvAKxnvs8pVAHmi",
  "key27": "36K2v1hc98DophKwRnZ17hr1X9DvoLqsQTifiGaz87LaPMJmcYYF3K44tQCEbxoDpThcNpoR8nEFA1oy3MeBV3uU",
  "key28": "31ZiMH282KyTUmtr1Hs2xYDwxvGmGQKPWoGrfapL7AdSAMSGxEAmbGhVzPfsoJRRG4F6iNVUggJLbyFCYgT18nP6",
  "key29": "C1F3jq69HFVYUEgR81K7ePTZNg5qnWMH55uSsH6Afh4BQAFe1ap1e6SzfK1S9kHMHrP89BFZ5MB7kw2bPDRyZE5",
  "key30": "2aAFQCT5nkf3QKn5yDMzJVSvuZMSgC3QCFhT4E6CMiVCxTragsMLeuj9rx39onXvqcuommvMqjP2ppmfqPjC63hB",
  "key31": "5pKwHwZrG5cCFwpxtjqSUQL2dHAesvxPUZBKDWZCBCEKUCw3S34k6TGHy3XKnv4YQ6pPb8FQu4AgScozBQi7DSxi",
  "key32": "669nxnAab2qKxnKvNNZUbgHNrz2UQsHyZhmLC9ja2WaqWZbLiyYDQEDkuNpiT8qxeohE6mb8Lc6D6e4jSSM52juk",
  "key33": "3wB9tntSAD7xYxqSvbRMj5DFB7xJD9tiXBmg5xWZUPb3iroyuaQXizf2P2XENrG6aZ6YL4iWk4xw7j8hNjJ5qPEE",
  "key34": "4xAE1qoS4XbWN4N15BovU2XkmLCrx32dugsZxHA6tFudXZVbd1RHarfdfmy77bqbsefM3jY6zkERUJaV8DistgYc"
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
