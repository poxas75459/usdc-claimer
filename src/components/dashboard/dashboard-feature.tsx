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
    "2icnX2fg7wNBdnkRvTyniypvsc5wLNpnfVbi9f3EZuLUSpw378zy4G7qbeKMgHgzKUS4iY5LDn3x1jjC36gFWuDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63QLoKDp6dpBdxQgtC9xGmrJfjQKdKBnmwV2jx5Yf9fDysnvhzv95CVYHRWDQo2DuuW2Rs3yKZr9GjAgoLqpVbH8",
  "key1": "27H93Br3XCyV31L7j6RbQqK9U9j3pVydFtMGtUtXHc1qZsc6PPKgNQYACYdzjXErDaXXuy6rYPmTvHthRBSrosh8",
  "key2": "5uugrtcR8G9UwHqWTzcU7otPVJGiZpkZfLpZBtDdWFR7BaexzmqiruAnjksXGGGySRE5EhyTrE4mjsT21QPXJzDT",
  "key3": "55dhymnze326ntMynTUDne6UTCKSKWQiWMFN7Y2MtWvMxz4TsmSBdbfzZzUieusF3CpjHVAc99Zfw5vd7JN2y3Z9",
  "key4": "2TGHiywsLXfrsJ5dUiNuvM2J8wpAGoVnYQCjE4CwhZqSDSyuNqVJF7JJ5bdrx7vcRV1Fd6riMYbRB9Ye4a6SrKDN",
  "key5": "3jFfjTqPK4CRWUTzXP9xWTkjYSGZCtodrQfxiT2Pa1qyNiqf8LaVomukvsEPj7ueZ3qN2o4g2uAq7gowV5oJ2Djd",
  "key6": "67Ec8GiyTJRs7r9Y7R2g2n2CcDsLW6vUN56nVi6ahXjKZvE1ovExnT7QUo5XCU2A9rqRZD38T9FzBZkGfUobyTzV",
  "key7": "wacWNtmRyz772cb8RLvK2h16UWnh2zNABMMB9q3UAofb6jstDkwcB5AKFA49WjsmU2Sut2y1pKi3FBqR1SG2Cia",
  "key8": "2d7a3PEXRUDeizN3iKoLMURM9L1LqStF53wbPZwFia3YfSu1rKgCnwKKUUwcga4tChBsExzKmjs5R54dXTqgZpMG",
  "key9": "4YjRhWj8iSdmRFzkXiktu7mQZ624wUiQyArPPvJcgtsjyfVT9iXHhf4oNUNArDCfUXDkG7wQdoqfn4awyGbRxMsW",
  "key10": "5qtYwevhbzvFjNcgmmWUfgy5HfVZRscur8EexcHSXcnAPvfRXL8tmZH7BKYnyc1iCgeEaPjGk1TUq7tcSG4csAAw",
  "key11": "4piYexQoGCTKvV7dmkDtcaBA1TJgWTxedcyrrHDGyiaGVuXzySHgVgryk7segGSmdCmy31uZVBeHbwfXtVszYdhq",
  "key12": "2wvA942juMPqEDrrQuFmqXzBTybbQza4H1iQoRoUgnNPgxALL9aCdxK3Krq7pP9Te6A1jiv3oXRgU1j1HdFxJe9p",
  "key13": "5JSe98wCn4cwyXSrb9k2B9iMjayiaQMzHNfvJAjy9ASLzegYvQqHEnWSg1aoFVTyJxDsb5sLynZ72ak6e43feiva",
  "key14": "4nibxqs7k1MZKj4ea4iqBz254A17yij8qoPhqxhfwGta5R8AwTVNFoD1Mk6bFGtrPWE4Z8r5qKrGwb6jFN3BmLZu",
  "key15": "MeB4yazfANRzr5cw7T4M69VrB5e8NPsm4EyaCAakdbyHTZW1JBZHQHyXaMzo1WjDxxAW99RqaB3ukxhaEHAKGaX",
  "key16": "3NBrgFKpYSwtnrRvV4jsU5usgZQ8nJWAf5Fwyv5WU8SBqZmAp6x5c4aFCJz6iW5Xtn399mzHRkesnyGtFCyEtooY",
  "key17": "4rJwjZUeo6wMfod17Tio2i92ZjRjmq5VRyVVKYDrvgjWiTSRfaxbVM6A9hLr2qCrcSkRsCpKuaYAnVFRG8zrgLwK",
  "key18": "2DCTFCXjLdH2CAqPBBzqZU1voMTBrXpvqc65ZjF7M6fyiLLWQRgiHH57HoF75JdR5ayc8eYxToHa85eRA3SqUBk",
  "key19": "2Avepmvx96FihztqRqqWWBs4oFpKLSoRi9bbfNBEJWUpALM9LBZJAEwKW6EFuSMFBJq1dgk3AN6ivDg4Zu7qsQF2",
  "key20": "5QCP7bcf3QM2A53k7eL8My5b4S3G6nEdvhYg6Xa4Jj6abAbz7YWEqZDU97z1J2JU3Keu131LgstWzS7SPW1BGqx2",
  "key21": "5Yze4jLxKxxWM9wdvu8Wz7SQ5xfeyzpGGt2btwLe6E6TNcG4fc8BEF2KNj7B7fXbZbi8i5tGvVsNEK62XbqV2YqF",
  "key22": "2AcQn82d9Rqh8dtcPXduyA7r1n7T3BWcFekmay7kja1GGeNev99KGbrVEzwdXC1SGZu1Ayy6DhfZ9Nmya7pporS6",
  "key23": "5YbGoYiABZKETB12jXpCayWeohHn42Hj2pcCWRthLfgiFcgCPMiJNdiHpk88TaqW8c1ag3CAHLEq5Z87xN6dGDRb",
  "key24": "52wSP8YFAFiXReVPYFhDPGqtbmKA6uv5EKkSYK5pPr5LkeEeQQaJHQi7t4fdEq4q25S3wuah5YtLWxiGMC7Kqxgc",
  "key25": "5M4jfihSuXg36ZSc7AzZbbr1Gr1uBDuky92Y6fzMryrzvXhw9NNK7gtZRfx4wCJRX9ae1hiGjVPmyJEsJV3wPdJZ",
  "key26": "2tFdxmuFvVEX8DsfZFJFvzBUYcPrK5xwbqawmNTvrxUTQ3GVETwXwFQF1vMAjGj7uph2WrzeyFZuPXpWWyB4BcD",
  "key27": "2cjFrfoM4iynU3pwVrWTRejTBu2Y4NjWcB9N67MgxwZ6BZRopCFnLPTnnynBYAE8vDnSVnJnCL5zsetiTfLezL2L",
  "key28": "5JXKvn6bM72789dB7cChfBNyV5hAwX3pq2WdRHYLuMZznEJTf1Kte5j5ato2E3yJBQnS8b6aVMfo6ARyg15tZXg6",
  "key29": "3Q9vSSGfJA3MCFQvLDuFm2dsUAj5fqBU7QhYFqYBjksXhJEB7aiGwLKJ6epUYAD19Pc2HxAAuvULRSKeUL94JXbH",
  "key30": "3k8qza5m6Bc17PNC7ie5SatjTtebkxbSQTxoGECgMCSGAX6VGKH9ebAaiqcUZAR7viGms45sBjpWgaDDwQWpuwqT",
  "key31": "2N6bcSohGeHj27xtksN3D6i5yApNXHbhQU7SzzRRVaZ2kQGVEFLUj57JS18zNbwei1KwETa4KhbcZUyamhP3oBJk"
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
