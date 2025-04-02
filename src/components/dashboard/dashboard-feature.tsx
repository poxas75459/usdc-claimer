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
    "2beDWj3ZTStLM9bRxsWcddiR2j7QDMKcgVGrnnLw2XVcXq9X1jKZXeRmFipvqW72dz1cqVYVDcQr4oomS3pZskBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ko1hirzTh2DnmjFV3F25U1nZSBa121PEUeubkxoy7wcfxEcT9fTTnq3VHQ2NfhFqsYd1pTJnZzzdBJ2AFzV1PJv",
  "key1": "464uZ4WHi3WHzeNHaXD1HcX6fJf4zCSavRn39VTRVoGP1YNHohV2q5Rjy4MtxZeudLmAKcYj62R3hXvkWBhJTMse",
  "key2": "62LaGLe2kCt9MUvZJfhhhksEE7effkcj17KeK5Hv8nsaSPpTAVV8vvuLkdXxFsT6qFoyJPYHYzyGKpdM2jJyzknA",
  "key3": "5bfKf56kKkjXJsZHLut9QTMLkin2LSPprxRQuf63gVNegoMDCuTg6vBr8inEcnqNdgDP7BCqUpEUhAkiwkxD9sHj",
  "key4": "64NtFU9ZMhETq1fNXHQ6VVZWqJdscd9qtt4PmgbiBoM54MxFVbX1jFsRtJK2tcnD6fCW5tSxew4Qw1e4u23YdaZn",
  "key5": "3wrpFFoD7gZvrc8zTQwh78Jk1sJgV4dUUo9bnibtPu4f4PUtDGvQPEsjdJX7Xd2Vxe4sTDtKMXdLEpDopk1TCDnW",
  "key6": "2Sqc2QFxQzD7Y9hdfYxpiyRh2a86RYDqzHM1SNwvzeBHRi3pGMRL16CPrh8vq21Ebgo9odJZZkpsLuJJC7EeQrf",
  "key7": "5JbKQKwWx1VuxFWjhqc3uzmMZYkFDFTkWjHx9HrBGTsEW5gPn4wHNrxypBTqNXM3g8Fdd2v5ieS7PrM4jbww1gkR",
  "key8": "4uvzLtC3yLSKd4dN1dHkMFjKvM7kU2k91Zzt9Uz1z3AYexTQKc2HQ51ybRh4g2SVeSpfBJHXZdDFKLt7ktA1hKk8",
  "key9": "26FMkWgHs9vn832RapYXEQJbF6SCmDgafP7HPQCP8Tc8Ea4FhVuoQnjkEudPSdc5JEFrmkDja4WqSJJgXq65hrhr",
  "key10": "5VJDnw8mxWPx5owKvjogjqRP3ooqUpYvXwpH2Wxj2faFaGtRuYnYth6wobuHQv7jukscQShxnUdRgydyhmuw87PB",
  "key11": "47B6uFaygPky1FiYWRVxZ1XskgiA9ZESzq1mHsLq5mvcmgmANKB87TERs7SCuWiEFXaniXukBcJfPWbRKBHbqhSw",
  "key12": "63tZDoinAMfxpDXBtKzUKNheGe5Gf1tb2NprtUsEjeU69whbqRVxhUF1TV8NqLG4mUV6rgmpAcB3ZQAFHAZi2Ekj",
  "key13": "441JhTDexNDgYofj1NnVHxqcLiCLsgQMYBjvrkeqbEUa1nQXyZBJeAC45Jyp2rBY1UGkvN7aLKUDB6bmHoh6d5BM",
  "key14": "6775DeYjiNnZPzQN78eK9FF8HbpEw2tFFfXj99cFQD6BLe1UuTtQJZpyqHKViPG8HqnY4YNPS7Mt29HmtofysReb",
  "key15": "jmLZ5cJ7HviEAbLkrwz1goE8JCgKWzeCSExWkq5AYDTD7WgZ1xZ4D7JuQd9BJLfTnedB4bmXnZFiTUyFN1bAbQY",
  "key16": "2HbNQWHwDHZSpyji97wqiSTPPdNWry5v6k13N6Ay5h3Ue88some1S2cSd8EWiXFMppENHAVtUMDrv7BSrjiJFx5a",
  "key17": "2eexHUD9wRCiaDFnc5HwuvcbqJsTumLrNWC5YFcaTRbR4QxEfkUUgxUuNif6ra4de4pWhsWgTCs6StmeroiKMAYy",
  "key18": "512vXUzPxLhbV3FqLrpboaEsvZqX8J9y7J3GmStnqj1ZtmHN1VGxtpgrEABqrrjiqWyCdC4Qp99ZVJ3TkJtP6NDN",
  "key19": "5AbCMBNpV1ES2So6cC4C1FYU2wjd6JM83tyu882W5gbi9mXsWgUJBFWeGARzs5xG2EWDHx62tDpVuiwMZDt4tfP3",
  "key20": "4mMTwh1bvZEvJ4pMGGLgdp7XCrZPt6zxQwcGjEfxBoJ8SUVCS9fZXW1LKnZCsXmbGqgUpvjsMpFrm9imyKWaNMe2",
  "key21": "DryUVqoc7BxA625QQt3W46P64SnbUzXcRndgoQzGMZJCoznHJTECxEmNGgbyqfQsGiQM7F2CTqGpQ9psjKo6jgS",
  "key22": "5qEpAFi9eneM2tV18NbFw4CbA3ncaU9eX12qsajjzEUhQXyKJEJLqZD1TncgEpUfw4Tp6j2hxFcWZj87no6LVPna",
  "key23": "2u5y2TiBP1XDkMvnzBQAHP8V7Jx4qHY2ZC1ZLCN8KdtddTqudrfvUiDhrQK1D9zaoZ2EJD62AF85xr4eJV8nKYEb",
  "key24": "jqqWpMG3nwDJFYyGx6RQHAitdQ5ahaFXThwAMBS2QQ81CRphhmP8vbQcLbH66TxRWHARsU8rC489yaoX6P9W1r6",
  "key25": "2AabuYNYzmYFcYr12CNYXsUKxFqxBEp7xrsS1jnHn4rN863UCyLJgqi59N596MZZkCP1w6yaeLm2KT3tAQpXZTvZ",
  "key26": "5UMaGdvwwYs1LiuGnxetThz7PayVBCCPUJuHWoUJ65vySNUR7VfKJctpF9BkocSHSLAPDTkaL7m3bGKHKGBuQePM",
  "key27": "4m42Q8LuDKUrfKao29Ue3PJihgcc6WJezbEVp2x6jF8qrCYbAGkWvvEiwd9iNyHP7u1B3w9R821M3JHByKL65PQV",
  "key28": "5seATJ26KkgqeiMmw7x81dNZzaRtPP7CzqRJnbAJ2W8C8dPcBkmnowkUipUUhrNb5wYyiJ7Q1qJ2kUFuJRMt9ntG",
  "key29": "9HHgWjCiZBn6bUeJJdy4xAppbZwQSrQqnAj5yT2XBMnsdyMYPHPCZCBKUzKNwzQYBvyK9Brejzpc8XRZZnfAmC8",
  "key30": "4cp5aVqix3UurDrgze7AUvpidk7atdnt6QXy1sawBqLvyLGNfNm2hGYBq5E1mKJXrncEoxrFrgobUrHnvsQCEBWY",
  "key31": "57Sci34R7UMYaX1dtGyrAFqL52eK7KjcefeeDSaaBbuWwEqV271kGdXX7b953kmZoV6Gxy3P6fMxReJh175HF4nR",
  "key32": "55jLSsG8754npPUJmfZcUh44JqvDFXKjE22a3o9NA4jqy1taDH7r1MPvoNZQfrecRdzQ1oVeVemKX3m4K8Me5dTu",
  "key33": "2Ve4hYXR9o7Joi2FRnJBBeW22zK2fPnzJ5GhXKb1tqpgZPvWqqip6VtmayKvNEuUYBXrV4vqrhUYkK4L4Pckamhw",
  "key34": "5TY5LpdzhroxUN8DPUREQBrerRykH21SDdFr7S9atszfV7mRstZPNKc53FeczvMka3xFEHY6q3oiAJNqTVP3kJRf"
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
