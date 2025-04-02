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
    "McJDiZPgFfCrAwYxhesRDyEF5TeFsLFTAPefmkGZC4yFxkeBpLYLDJDCg7bydcZreaVVhZwkSVEwacGV2N6tifT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bsDvn3x4UjVZ5zR2FNMkCmQ69T2HMaTUTDKLQNx2YqqmsmHBDHXe7PXfzNPBJ3oDei8G7E5L5cfxwz4xnK4vANV",
  "key1": "2vZWHea7LKaBp83Btcxksn3fKUuuBzE8bbpzFz3LDj99bUctsz9e1J46xJtwNXdiJNFwuQJ6qGj21ps8Jxc6QF8U",
  "key2": "XwEZroQjQFM2EZn6EVDWeh4tnBemEfy5DASH5bQYnWZVpw685zsazwr7h4BiW13B3HYhhgH4rg2yPwyxMbFHT5b",
  "key3": "2Kd7JEvn69UXj6x6zKMF3fyBRpwDzzfeRyhBrg3NEhXe4ayLL3HnCKSQHrMF7A5TjZs58YB8sRxNcwzkqVgQQF8G",
  "key4": "5yx6jtJxpkD3YJ6o2Hh5CpWYz5jBanboZZ5RU5A7SpmSPjJA4sfNBekYvNfZCZ9MBbkcw6FrBdexvH5LgtJT8WV9",
  "key5": "5CYSrCF83dnMG9gsH8CdDiJ3SfCPQyTQ7Txhk7kJSvFqkzLkHobj8dNQjTQyFPk9AauzJeCCP5BXTx4guFGeUvws",
  "key6": "2MRAcRQfLusuhjuTy9FjFopz2CPX7sFBLvCrqjrdacXdar78x4xKNJ7ZYw9rbxHqJN8JfgPr6iEsn85dqwM1CCHS",
  "key7": "2SAngLkJKsnH2DjCQuohd4rXGwjFhwfDdoF55XS5djqkSxcmeJGxp1jk5T2M9FXMzZ3KM9RQtFQLH7xtorD784o6",
  "key8": "yoUTnUACYXwQKWSui6h5RhDhmpoYEuxJHSH4r3kjeHWhzCth1vqU8QueAFzgHnatdfAhEBpZLxjksLGVaZ1kYSd",
  "key9": "5JvkebsfKdXk7a1kiyyaFSiBNKVvcgqM62XfC9VtUVqBXE3xEYdHCkoJMuYaWf6Uc2CedvxwRLvmYB8gcwFsTF14",
  "key10": "4wkQ4rPZHEfk5yjXQ33dHQ3TDfGmKVeQyLZH4VZ7P7b7uJZqUTxRNwURgw8sr1Y9WtLwVHK67RikHN5uN92y3Cyq",
  "key11": "5ay5NwSFAbpgJjEfJokxjNQdmfARP4ShounGwJojzqG1trTajiZQfWse5kxFGUfWmzyBwqfSw2Fn7swLFPuAPLoh",
  "key12": "28Rsc2GQZYAkRRmhpmTPB86iA4SgqDCKVTynPzL728sfhTyiGQPbtwy3eNxtxWkq5TQ1h4tW3uXADLBEr3nCfFW9",
  "key13": "4xNE11JazNyWyYvc7TFy43wEEwSyidCxYvm8PtvWJKa1c9cjCQSnPPfmx7W7dXMdkNiwfsCqLMrH2Nff8hC4TW59",
  "key14": "5o1xP5iwTyd1SZxiGrpXmvYyn22UugppxU2QEJLQ33fPusdGvYepgk33cjM83B9tbPVsEPbHeif6Q2WLazsN2Ngs",
  "key15": "3JK2f6WHb1FuKSL7ZJJgBPPrePwLa5wps9ba3K2UQUc3gAPgCQPPwcRK1K9Ab32J48t3jWMtVBFfc7sXCTXTzNhy",
  "key16": "3oxjA6H7GMSE1iGDZeetebSzNTpgcxtXYxoAnke1txeFjx817c938CMvBk3NZgy8x21c3Sop9A3Sc8qm9oueA6RU",
  "key17": "3zU8diQ4LUaT796RUrT1y1YkvwKuZBg94THq98Uq4yfc24t4dvtgdPbhPQrj9mjRrP5n7WRUVyJXdZXJSX2N7pgK",
  "key18": "3f2LZNs579qtr7wuZMhgcfKNADrLFZdnuJL2xFBzS6NXB3txKZUej5P8fVXT36UbAkY7iLCfCj9XmSaksaQT6q7A",
  "key19": "4ugo3sZ729S8yG5moGuUr1DJ9oxLSJMNqbnmrHA6bqhgjhjrxqfWuqorSKkyhzZya2m2r9W9YwC1UoEwh14jiNdN",
  "key20": "3rFMTu31s65M7CGuwno7kEVFWSM7DUDFWsiyWgXTvCxysrcuGHnZ5kkQw4zdKrRsgdqqPzwUacYLsRMf4zFnV2MB",
  "key21": "4TtKdvFHhHZJgeneFMMonf7Nm2WrjotpLbtorFQ1vXnzvHcJmjcoJG54PWaikHbfZQnR9pseWLgexJqHwAnwSSCw",
  "key22": "3WGTsXmx3cnDF4dYRRfmdx95vUZ5AZn1sJjJ4w54jhGS96nf8FYLn35taNHAV1TFKAZDgsdHdgCrtd5YUXEXBbkk",
  "key23": "BL36kHNmRne3nUM4SEtJSSyDCztxXkRy7SsmycF1vaKdwCwcvvcPEy4hawvdFBZsfj4Q6tHZzU7fXm6cqeMraM2",
  "key24": "3cYF2GSvdGDHKZkCZm88EGZbAJFg5Ch8GbGB6CXhMVowg8qyrbNgZh7EkSERNoweCwFcCZHPBnJdESx6ULeQZtu1",
  "key25": "2AtQfJXKwUPUmasBxnD4DpJWeQWuidmyFbKeNFza8W7pLUkqwvSFMcrmjhL4KTVw5rgcTi61N7obL7U3fy3Pj4eK",
  "key26": "4XrfiF5p2KjwT6UoSvhauboeEj3Wn4723LuvBWgLeB21bshSQz1yVJLZbenR4YjFAAuurcRTFYRf3Zm6FR6emo6B",
  "key27": "5gZrfbsoYiH6noK8KzF1Luzxqipia5yM7ZKJssYZPY33WwPJVCZtSqrZkR5dxU9U29mCfBuUpq25xbvQm5fQFy6r",
  "key28": "4aKaQBVAmQYQUKrVsjSvCxZreZPHAqcfzQ1gPWCX7syvnHWcQwPppo3vxqvke3iq26nXaywrFX4mZgcdE3vc4MYb",
  "key29": "4H1c7ZoM7fgjTg97gDrb54NcHVJu72ZQDhpES4MFuW8wmTakq4nY4eUKz49KPKmVN1NELBCZGnLbfDVkJKXhuXu7",
  "key30": "3MUmMv5wHJ1n2ACMmkvC5SjxipPxLNMXVmggRf4oVZLLXCt9pGmbTVSNkjJKqgV9uHTeGEZLfK8wGKXpFGRkdswm",
  "key31": "3MgTk6Tt9zdbQTNFUGMVSXRX1GmJK5YaxxGdydLkqwEg7GbwK7apaQNd7nZWq3XSDoymPiMwNPWWo47ZsXDz2H6K",
  "key32": "28Uxf72aqz5TopxQpwaVTLtUvE5MctnRwoReEg2L6HwUBhurJa7X8m6ti7ncvy2QXkSXx4iVWcpMDJdXx4dMXxwb",
  "key33": "vLYgkbuDcM4fELrKfPLDHvM6iPDq9x1PL6jfimaErCVCWw4DuJScVGQnBrXX2rG5P8sJx7NP9dbgkG3fmXxKXVH",
  "key34": "2FzkZPM2E3ZnkvCYmGhYHXC9QY1bTxTYQ8M7wDDrGSiUqD8hwrqetmasZ96tL87syY64vkEuSpAxevCfTk8m9mRY",
  "key35": "3NmeLkVgMRqcPXTzfgoU8yrZXju8x6GxKbu9e8gztH7CsE1wr9rKvPgnfoGxPzWe5Y8MNTNCN9xJRWaTL8xZWPSi",
  "key36": "XeysxoiZSi1hCfBvJ8yxM8FZYh5JipuDjjSQhNhEWdD3CugRz1UyJyABBeQGbhpJgSbcgrsv9s5Hmh75bsK33A3",
  "key37": "3CBYpDVG8Htbv4t6hotfmi8E6dXsgY4Va4uuPr7GQm2endkDnJJHqpNgCSXWGj77WWKFmdcxtXe1XVAVAHATM5aS",
  "key38": "fZaoHzc9DjjW9BEYt9xvKchCfBduJ1jrq3LmmhmYymH9rDUs4iP2w5oY7RGnKtAE9VTMRzxjvowYzd524oTSrMc",
  "key39": "4jhJVUUKpiWAN5rFEm7VidFb1MuUyihiPhZVaGAhuYFdjYrm3R5nKKwU8n4beRdb2eTFTuk4DPKj1de5aUpBr6MC",
  "key40": "3Tirkdc3xEdXAbSn1yBt6eRHgJ62BE8Fk8d2nBt3A8zwPUCqwuH5ZXky4D6GqePMs9MPYwfzsAksYMMgyi4mxC9r"
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
