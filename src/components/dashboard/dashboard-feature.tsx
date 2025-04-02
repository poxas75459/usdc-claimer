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
    "31PoSRfRMYmLVywakVURkDDySYhEvr9ZBPy23WpqLyKqYN4Ssn6KbCSkDvsee6ECAJWLastNgLdsPPRvU7MLUZwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tWRNp1FZ4uErut9aauxftyjaRUiY2JxfmPgxedttwJAR5WYFBnGNzSXs4qagTFCN1oZvEGnj8hkYNYfsk5ch1Sn",
  "key1": "BF8mUozhfjnJUFt9j8qS7jH7bCKfUqDRwUpBgTopKnuVGwumm7F8pUMkBCGhjvK4h5Q8BaHrWAug54gat5XkjeY",
  "key2": "45224rNaSvwnWt2Av3M5CuL7DtTpfWrYwpkJFJovXsMSvTFGxhTfCZJSForqtjgf68XsQKr54CXQyBqevmZZLDAa",
  "key3": "55ZtStj6MFRHqYkzqfCBZCzjP5mYNLz6kLRxctDfim1M2MPv2GqkximMppJRu2X6EktxUchcxSGT4FBXMtEDykvs",
  "key4": "5JWwWcr2qacusYwhaDhNWKCGh2vYZHse9JwcxYh5SaP9HMHDJv5EzbdN9BHkeUKUhHtGMY9mmJFRmefsLkaC83fE",
  "key5": "3nRDh8CezMqyxeS25kffeE93V8TqK4SaVyqbBrhKBSubmkm2a2cvwHVnphxn4PyRKJ6zaFCKUdW5fG2JX1x7qnBp",
  "key6": "33LB48FrQ6N47fRoRcBvfF11P73GGyiNP4raT3qAkzPoh7519ZT3JrLTyiMFespQSa4y9Z2kMNNru5gCmwcFekNF",
  "key7": "5MQiTU7Df1LY6Bb5FtwbgmTvDKWkYQWJ44UiE7EytBvz799JHtdGcRunBZJM5bSsd96rMtTurjRE4ZiMPoYiXJ4g",
  "key8": "51tHVXsxT5zYtt6vRb4BQexdmxqY8dNub8ZwZv6bhCgkMstkkQNbHq6h7NWtWcVSFhTNvjx36WoUUyPnh8hRFtcr",
  "key9": "4ASYcX2mgtdFwcGBBEsss9V7DPci7kuA51gcx186E7ecZz8Z481HUtmwBnkB6xkhLxqCFCTUE1tv38stySZ2q4Vu",
  "key10": "2FRXyXs4qVF3Ykeio8CchmQhqbHaCqEgDqUV6Po2MiBYnsp3CxGuz6CNuwX8NdQwXYLALS1rTZueenaWKWQKtuDw",
  "key11": "3XmvhLrm7CTzb1JjiJY2FKpVxjpihTr48UoZraswXxsjPPtbeSzcrYgWTKqjknKioSXZCNYeEZ67FUv9mBvrEhj",
  "key12": "5Zru9PC195swJAVXtJNcw5urXRdXG3e29XFKC8ys6NufxS1RY5uEoXNpbax8NsWhWjtXsevLYvvuF3s8vthUE6qv",
  "key13": "3own4grTo3o22zLhKhFungrkmgd6rwAAH3XBPZRn3rtRyVMtAtpDA1EkUaqBUHWHuMBaDNXCbUWykBUyCGjNnFvB",
  "key14": "cHmT3RHpV7FdCcKqFWySAGEUSqa9zLQVJJd8WmK9E1YStPH64pkWfrdzSmQRLYsS8pNXVyEbJp3PQAdZduq7iwc",
  "key15": "3DYWjLhFXesQVbVeNebETDSLa67NvKTV3d13z29wbKGM4mgeR7eyAfcEh1nuyoC15ewUs66GfWvdivcCMifVF4Z",
  "key16": "574oyKhtojTEa9UGsNwjAtg9i4juTWSxyYx3QT9nZvmB3uoJrcTtvn1Y536Xi4Q52ttfXkdgT1VK4e5DhvyfAQY5",
  "key17": "2RJZJyfaCnF6UUopMtujgRamYw8VDM8nDV2sCsV7v9ar3RwXdjopfdtdqpK9MXSEDJztrGPZi3wgSF2mPiDT6txN",
  "key18": "41SyXKSazVdm28rbXxukicf61GhRH3eNN4gS7RDku3CBa4CZyV8sR7sG2oktci8kGej8HtR9HLEECens1PamND5d",
  "key19": "3TpZKUntggQkAFnoTpU1irHv86cz4wP1Xo6uNdEpfR2k9kUEkqCT1uq2iNS9vG4PUKYGDLMn422QFEcc5Ku4BJ8P",
  "key20": "31WHPNoJtNg4LSvvtJkmhZAhsweYr7QsvVaLCY5cUGVnRq83fKpVaUBif8Y2T2aPb84tnaJbxhT1gdHmACDiMHph",
  "key21": "2xFu9ab8agYp8TbXxQXoU5e9L7Fqyxjq7prLBxJbLaB9Vgjk5nUyDkVnmqb1m7rXWp6XTh8F2sXUGzxRcPQoPYew",
  "key22": "4NM7YSjaKf8o97jX1qrpWzx5e4t2cKep5MuEfRJyRJWwTnDRyD81dEAEKUsvx1goqU8GEFJ2ih2vKRffonKKKBcg",
  "key23": "5RA3AATMJVq8PLgoFCqsk5tVCu4Z1Z7V37Kbzht89DxgLruuDRKpgrsAmsQoC6EXXCXvLvrsJeJjvF9NKCYFM6YQ",
  "key24": "29KdqTqj4NGuRsFqC3RvKV1f27DfwgXVGFRymyp8KJhdZubLQv4KHWY7Nw1hVKpRYVYKVh34RU1KhrvRe6oaueYx",
  "key25": "4YfbkrSkNDggcdKDTBF8gp9c3VkAtW4EvoMEcMExK5cQXDofRzzmfsNBj8yDkczyGhBUXrfhxeBR4Bu5SdSpSdXs",
  "key26": "4Av8yXz6o7GxwyX4rMM2m6VmD6zUo9yE6dPGWBK4V6JDsNi8A4guXRb6JzWQRNBsWHEY4wuE5jBZdLTTh9xioDmL",
  "key27": "4z4JLSV99Jx8agPqJVaECXx2vxnVrjaVRxYz4LHBSbdCoHyfNYWWZNVQpuDNvt51xvownAZ1eakRn3onv164vvNC",
  "key28": "56KQNMDcrqqALNyghtcmJS6SzwcM69CHpaVvajYw3hd65jKrBpCeYpauxKtXdb9pdkZFC39B5BnqpdiZj2xfSwaL",
  "key29": "BU8TjC6zYYRBRgrxGWGDbsmB7LXF77UcbTcMPaqLx2JhaH9wTFwphbwKy8evw4EZgC2YQifNwiZrAD3XyySGErZ"
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
