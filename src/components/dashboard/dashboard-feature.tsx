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
    "3mjx4RZtbWkuGP3UUTyUP3qeT3eKjZqrKowGDWEpvZscTmqs8UiHa6nh8SqP2aomJojVWWxHkrAjwW932XgggGfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "epgWLP4hWVchqmDLj5gbdmMv6HsZwH1cre8pfZTkQ55dEou2k53tx3ZLtjVMeERK8CEpvGmZNqaEzhHmi4yYzEY",
  "key1": "4Z3mqa62WZLG54MPK71vEqQbaynr7Rp7sEXetdLj7EuGwfiiQkVNqwDqifN5wVSasRxkRgbfaZadtwLNT58k8dv8",
  "key2": "4iSoXL8LNs6UokLPEkA2UQJB91f7Y5FTXkHWZXAPTYbTvKvXGJAxadKRv6wg9cDmMTtK2PT8Bncz2NZ6EKJom4pH",
  "key3": "5vRwFg7bRYDBZL47smZtiQUF1Nwmjdz3XQv51e6JJDMRVLmyFJj2pw4aENRmgJigBpu8ZVCpULoPWN5Kq6NmkNKr",
  "key4": "3HScjEgMjzWqxs5AbBAJDtVNRPXCgrdVogkGWZ7LxCJHUXzrXPuzL6LcUpxSSWv4FhQEJqVQADPW5BwZSSjsH9f9",
  "key5": "4NWGfC3Eye8XDsFAH5W5Fm2XofKUxVELdy8G8JMTTjvB4puSXUJzPNSPAxGciDjK8hvkJW7Q4NQSJDJz7aspez21",
  "key6": "29sgenYJaL8oNcvkVznUpYqj5brXwAonSbydRJxPfFBbgZGG5TN1NYo14qMh8M4yeJM2QHmz6oo4MJVhieR4c2WL",
  "key7": "sEgGgXjv2ZJXCCUX9uJUqoDrNqxrsfzNTFfG8kmLSHvJ8v563j2qoEc55PE1MqCmRWh88Cx6pBa76M6wajaR3mT",
  "key8": "3JYBAPsGK7MhRqugcbzVtXBJ2aFqTYJMpB7trTg7Zn1qV61GzMjCoEtAXfUpS9YYVcHSZczyFxUEs9o8KMoLr8jd",
  "key9": "nK42vKyFzfGxyJ4a6tdJsX2Awx12xnMZ969evwZxY1ZUiq7w5GZ1cTyAqWnb6oHYfz7b6zQHbep4Ndw1gq9sNYo",
  "key10": "cF55zRa6127miFbekSawEmL7y52JFZyzwr1ZnJKTDwummRVZLcF7G6V7N95a3mr96UhM6uasX9GokQEVG8Q8K2n",
  "key11": "2V8gyobrYDUuEXVt7L8FPRiuUMpE6SsWJvGRGDKLwKALByhsDA7pSKkSrKq8uU2Bmd4Wffs2gpr8JYj23w9nXbcY",
  "key12": "aZ2ddZPkCYCFGeYjmV8Jf9dWgRRw7RtrBBCsWa3H1K1yacZW8rncWRxckVgmpdA3YJ1SXnkA598fb94HwVawwfF",
  "key13": "4wgD38rv1CdBtUQdm3QPgraTaxbejnTz53sXPeMzrJy5DT5cKhUoSABCdnzNd3Udju72RzDsSaGLafW8kgK14WRB",
  "key14": "2A28XWP28H1a3Vtu5pdH6oCKKyyi8RCgfYVZecyRYYt1jtst37HwmjWgKiWfV5wkHkSnpbKRdJ7tkS8menRi1qs9",
  "key15": "55ftYMSdhDXwyJjx2oerLu3RNZBZSJmBrt6Z619CT8m5J7bcbQ8grwzRkPVs1eHstczE7LE4RRQMfbmSkonAtyBh",
  "key16": "5pbUFSqKcsxPMapcBXfcGRBT6hAuXcLZrHay6LLeKmwCi26qEPxLrLMby26EQsjTbH4rJEEpjTBfrm7tb96pDcT2",
  "key17": "63CGDuXQbnVBjjHsCotCHU3AkBMxWoTdqYntjGpVWPEGcJ3Ccj5HPepdQ9Ubu5WBjUrPhHrCTQAJ4Q8AqAQnz9jF",
  "key18": "25QGAcHKqvMMLn88iGBkd6xb7gTvSjbpiwv6tT5Uv6hc4CMX3jPfn2ETLoRvZu6xF1vCVkoeUk4dTwmoL5hzPUM5",
  "key19": "j7xHPsweqhAZAFTRTgw6TAMo9x2D6jMJxS7YCdnGqjfG5KBE6ke2vWbCBj9rhiUv4P64nSiSANBcE9yVpdrwQUJ",
  "key20": "2ALyHo1EDCvtDEAnmYynT65oHUsuk8xDYVZVGA98vBYfTzZuuF7qj3wh3QHwUjdcT5eNzUVYtTf6RhxJ6Cvgwedh",
  "key21": "64nUfW1UB3a55WVudDWaT6PuNSctRU8WBVXVvaWF5Rq8XxZSBshmCun1wypiACDeTVLetv31gADgTxQ8jXjuMx8n",
  "key22": "4uiEW4t2ktD6uPcuEDinTC3iT7HVqXEg6VpBoDeZqz3qCmUzHuFNEv5czLLPxozxyfXbD3oCzmCN2vdsjAfjftWa",
  "key23": "57vFjR5c1NQZ1sNdD5jAZ7NZ2dNRtSYjNNJFTwounFFHXFiudr1xHDBf54mJeBH7976dBgL4bkQAC1BNWwetAM8u",
  "key24": "5aixLvU8WTYMYWU4z4hTt3GQWjsBr4J46tdPaiLpG6qyEemA3pd7MVaJDbDCB2XfwGJmVEzNsGjSKB4PVjV4aKPX",
  "key25": "437osGu35RUkt9Bj9fqCADFr3V6cSe1jC1skERzM8mquX88ectXmXZHZ7PgFKfqRHrSXykQyHjF3dokzzUP543yg",
  "key26": "3yaMc6nWmGgDmNeJ9ok1PCs81YgsMJfLE3CqeLFCHnvfpy8R7LAerAZdaVqknXgbS6adbobsmskbF7abcYZRK98k",
  "key27": "5AaX8z3eShY1f2qMxTbCjjLx3FVnHucnMkfZC3CxGNftvRnzCB8BycSa5ALPCMmarKH7JXPrpLEhEcAKz3iNXMMh",
  "key28": "2jNpaN6ksmjd7zoLqtsBCDEoSTn7RLYZwHPv7ohbiwRfZ6fSmB5gTv7ntKBLt37zvqBGrBrNB4YkMn5KZVsqMQ9T",
  "key29": "3fuK8G2eHd6tWbWFZnFkkxNMfULukPXN591bjZ1tRx8z84UhjWv8FEkESUM5DGhfpsVbonad539UR85hNunEUrdY",
  "key30": "3SwR1HnFDbXUQvmR5vTmSFxc9QQG5fiF4QCFZTr3LcPaCQp32qfhR4GuKSgwo2yTHt5i1kQDxFxmz93rwUn9tEv",
  "key31": "2N6SgE7Mkm9U5HH4Wq3cwfczBGMbVRJYtKvgUSEb5D5z3cPC5PiMEvPpbrna6GLn2Rp4CggTBrEPrLMaiRWqWoMa",
  "key32": "F6uQ89FsA27C3gx9TXhLRZFwJe3fDN5zgHjnaxSsqXMupZ2R34Eopq6bHt2Vjs2YJdk4P7x3gJJrBxKyJm1Wufu",
  "key33": "34R1sV5RixegwRfRch43hj9ffbArKM4crvEaWLTbhKbYVM1hY3cijmTUx5GKHWHjSPxLCij77YKe7YRpceHXmTbN",
  "key34": "2G2B2qsYgG1RutafZHcE4uEEcFKknFcwRQKLzHd3Hq1pHJpqy8asSqwGieV21PXEbcCXdz8ALGn6FHmf66r6kdsF",
  "key35": "2EhJwB9YzJudm8qTrG79SPuXC1NCnxfnXXNLeQEUCXpcwCaxntx8ruHKUs9bwvDaU767319PiAkfp7bUHShxbbNr",
  "key36": "63goPvUNhLSUzWnEHrKXSbmMNNa5E5KELpsSjg98tZgXV6rQxaLBLkh2YS8SncyZrEeAYbwQHXzNDWFztvqj59ue"
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
