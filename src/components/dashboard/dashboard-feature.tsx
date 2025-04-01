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
    "2Y8YiNpC19nwg92pfoD2aBi1y4b8gEQEArNCc4GZ9bHyv3Agz5uXrMNVE5Pc4jva1jQGw3VFhfebvHiPuNwxrUoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AhUJXxuWThSdio7decn4EKPcxAZm4ouu6sn43DaHRxTR6WiT5pDfgt7tgvsk8PnfXsue5KEw4mdhoMttjpMRcsp",
  "key1": "2uV1rBbLc3mCAecxaR7kX1vHhXczcVJx3cnhs15tUFhaENw6X2g6sYJddPtbwxQH8WCTCYbEDQp5tPDLg9aGdYT",
  "key2": "4rMk2asouCop4ZSztagiApSvQrcLZuqyTa4gdX3ivgfm5Ydt4qXNEW9AmeEvGsCtjxXpxt8PMpMKMNPK9mQUUnXr",
  "key3": "XtjZyNS4mhvHwDwfe9MSZSGYj8tLhUCm1q1uxS1pqVVsJdjZKfkB94g2g2aLndT9gDEy8dTps4ymivWHSTFZVgy",
  "key4": "55RGtYK4KeZ7KpZTXyL3khtZMXTkrBksKzqWVNXaooTMy2hB9N8iXchCKjFzTXnk6x23ZXVpfgfrW4XpcXtvxcQ",
  "key5": "66AhkXzCZEvckEYE2soL9DdDar8VzieLKQJaaGXUyPwpmmUuT7TVyXrhdKf1vh8SMeaLfbhMcWFVDQ5ajxcjsxtJ",
  "key6": "5RQq7JCFhsKAA63txL3PZe3JHBP2VFh9pVaK5LEUhkZNJW4rAvcWFjKbYV4zJbDXzJQJcFKrZXeRhVNpm9HHZ662",
  "key7": "3AnfLNvmCjXrasTNPnyiSxRbxLpoK1gyM6pCB3jJYwxHhudHKqDgkpqAB1Uz2K1KptrddpimceWF2QeieNBoB36z",
  "key8": "3caDs4Bw7rBjDGyUTRBmQ7CzYJ4ggyF7AdXG668SjZSLyKMh8V4kTwG2UCRhwz8RQpvMYDpmwAnq6F9JDtxeRx2a",
  "key9": "F5jfbr58cgX4YeYz9fSDK2HHPbwt7NHqM6YVQDtPWiDwsCekNGhW1AzGZRifgKmv3TmHpTMWAHfAVYrZkVpX9eg",
  "key10": "32HyF8TFUVuRAsUNjAwqF2GpskxQHnGzsumcytSfZabyniyphp9sYQUu99fz3UjycdeRxUS5ncecJgZTdcsrrVoz",
  "key11": "5ZkaJkhQbfBwSzBXdVNeD64hJd9y8B5uwnGFKMT1C3gBTvCXnYQDEzhFfHPQEHgvpY6ZaFfX7pz2VWDFAChTY9qf",
  "key12": "7r9o6yi44DbiyFDyr1FAwTMiDWRs13RX1P67KAj1NSPCaTwuk2wGQJ8N3UEtw14zDg6eWqUgVHRbitajRf6tLhb",
  "key13": "5zx2JAjmxYDtnMaQxv6sWsKddcA95PAufKzceCad5BLt378HGUy3prCZeWEPfvPMtjJuTyBAXZZ47AAqsjrfcJtC",
  "key14": "47YUxc32mRkEeh2jQDL4HBQS4Gq6MAWAWN53JywCQiNF3DmJDRQUnkCf42qjFsUFtBZ6Ar6P8KTXeKaAfzif1R5z",
  "key15": "4Kepv4TzAjyZShenncMxgLASVnFH8Z5Ts4wQqhNnjoBnUY7hgMn1ojGywjQzkLse4xpasHENQSThpyhKE2Z5YT9k",
  "key16": "2WezmeGE8tqvAGCGm3jfZpEki5WfFbCjDsJUA2pAV42Ui65qxYbW4jqpvscGw54nJE7FPWbucEpfbEbVgj7JGoX7",
  "key17": "vztPn2FaZSt8e9h9tNvsrtntEn6rrpQeZNiEMzzFYDnZfnZKkF4m8TpBvKUp2R8PJY2SdLXoHY7PjurjTnvtDef",
  "key18": "LK1MLJxzy4eKA3ehs78mdw215wku6FvyYQWtnBTtfNDU3S97f2izkNdp7Qdmxo8v1TUhk5eXveYHAuu4d6cVKqS",
  "key19": "4kZrvF8ASRTc2Hv4QDstZjzqcEEeaSL11QrYsQovNkREyD4Va9aVipW3anoz2SBDmzEaYBJ7hsBYvqspJred2mPv",
  "key20": "5rf8b5xfrfKcAhyA9i9aMp1wSnd9Nm7mEFrRUxSvcmLmfW9yctb3xPiwoRVsgohvAS5wAVzDNbEon7YggZqT4zqX",
  "key21": "4TWHkk6NwgYGKXnEQJviN8MX8T2PAKUDGF6eXZowgtMdnrgX6i7rbZhBW8YyRMgkDdCjwYqbCde6i9WZfBZNsgCQ",
  "key22": "4FyQGoGd2vBoQFRGDywvYr8DQk1h12SK6CS9BbDFkmZPkW5pKpH7YXreFehXkuBbBC2QxYTA9oSDvUwwjvfW7zyQ",
  "key23": "3BFyn46kBepzfZvyogDUyj64dXFNepwoP5S6AjShYrrQHY8VgYPntqSfEdvSi1pngR71yAnQrRY1N62f9cMmesdJ",
  "key24": "2Z39u4i6bYotxQiZsYy8PEYf8CJnhiURD5Wbbq8sMpg9ot8eyAqqv1W1dqzn3QstHByxon3qqvUNfXsYSrwmkaJa",
  "key25": "57q95LPx2w7qzoi3JW6g89WLe8t9dymyi89LpZrkQ9Tqi4fag5xetXeK1mDES6412eeWZPym1cCaA8XQE3EH9L3s",
  "key26": "5tbDJg7yHAoyXJZymVcXtiUsGzepqM6cHRYCAPdui3iTid9ByE9NVvR9iL6veZVTLsYHw72TS5two6ikAUjBiSdd",
  "key27": "24fZdNK2Ew25MFsx8UohbLCb7SNzBP3yqVGRvcEvKRSZZAGQ6FQGir2rQ7XPY5h8GDCXbejSdmno5oCCL96pU2aE",
  "key28": "3xogwYFz4UBunMGesjFxZLK9M8M75j1V2TrGgeDQ4YB7vq6H2rdJL3PykPhPQeSt8H8YkQDMccQ92487m2zBitMT",
  "key29": "3WT5rAGRH2AM8ym7SLZ7yGseCe27YbWTrQdsdEBS3V3LRGYp15aeXTvuB1NminVYWSqGFf7L9AxpyB6LH7bs9oh6",
  "key30": "2qAaAsHgtv3qWAf7Q8MRT4dhDhfjXR4Z5qBBtsh9HK7fz9b93qcoHgHn3QevEtTg9zpfPutg2UD3jthFfKHBTkeN",
  "key31": "4mmhSJG8XEzRU2sfh8aJV9qrRU3itkpmAu6waLxNWL6XstcC4fojMFVVpJ7btPtU29dHaw7LBt82NoGsESFddgHT",
  "key32": "2g4SKbhxcs8pfsi7V1eiXkmTvE8g9Kz15muWHbVdzHMHCB4iV2MGw8PPHfj6uV9X15JcgDm3htkXN6TBhLqKh4tk",
  "key33": "uHRQkKE8Jnwz5GtznoK2N5pK8XiEah9kdYnYkvfu3TVQfdZ6Fni93BYMfSKX4Nnc6pG94jv2D4dDXuP1fmcciQG",
  "key34": "4YfrKb1RYMLErsRBmMz4FWoQVjkdzjtZPmr9wyntzgw8yJpK7oSWh8psmgR77pHopXsKD97Le3kCRfQVAtqfpmTr",
  "key35": "2uhwfVuy8YnKduFfpGcgL8sY6Rj6ZuUx1yxP2GBaXPQ9s2eSuQyDPZqXaUmkA2j4Bnd5afepQbxHKuVwBsAFyrdJ",
  "key36": "3vFVaSBY5pyY3dGS8bGhQZGnAQJpG3aRvuzNZ8uKssb5rug7kzs6LqjQnSDwRug23xbGEatDqj4f4Q2MdhNB56Jo",
  "key37": "31iFQ12HHGdWZF8UmiMQjwRLgL6AKBNDvebVvnkGUj2BU6tpvbFo2kTNzPvXWVMjEMNPDXp9uL9LJVvibKJwazP",
  "key38": "4DS448Ggk4r5Yt55nNbv1L1YYLQ142ajiwdMiEUHPyap9x4NKGR11Brspbv9ZkbBkXtg5qmWL2jkrudWLAuAT5Cq",
  "key39": "3uURev3kNDHbF3W5Gnru9NQoobm6VZUyirFerG1mTnhCtx1knH3zSrxcdqLGpYgNvueKvZAhRBN3exwsCb9cTieq"
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
