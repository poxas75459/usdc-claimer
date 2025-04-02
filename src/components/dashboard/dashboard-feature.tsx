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
    "4L4pYFF6ZvqGfy7qGVRhaVdvMtfvj5EJUvPPNYduY65MvXHcTWgqjb4NafSK4LDosnTAEn5BGfnqx8wGqy4TR2hn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uoLty4YJpPioXyMe5jfpSzKYvviNvVronxA81DQ1VVnZwpFndHoXn5rZ8TgeWV5eRBWSZhZk99qCy76SqMfgQH7",
  "key1": "55gf7pmPQ7gHKDndzh5MT6wmW6LLGEqgD9SKSShddhRFJSQtCmwkqNfGrwjQvGiuFExSupkSuMHvjzU3p9jYYKXn",
  "key2": "3aAkbk7mu7YPnfZEZhsaxqwnV85iC8HstgKxBetCnPnCZV9jc7LNxb7A2zmeystrTkFjZtGrAtapBZWa18EZEhmG",
  "key3": "4V8DFHQbhzsRDzz47yWNoZoJx8Yr5tFLiUqXE17RQFRMY7AUAktAmJqZFgf6KBSWt6uB9j8b3GCmc2o9gNoYc3UG",
  "key4": "5NhVYQdo4BA18pthj517xJEqeyFmzSL96zBXUknGfzgqJn4YaLZVRNwKh8RGqd3NSF55s8YPbdJsaH2yXUGySY6Z",
  "key5": "5Gd2nRUM9RZn6rh2UcU4LCmnRm6rTBtxNesZMijsvVKrQqrA1NaXccj5fMLdGVfFuoLvoP771qyEnRi6tXfT6KbM",
  "key6": "4xMH1gdMMkN2t1RPaRRgcDdfwrPx8YbbWa2C9Q5p671ZzwRiRjjZGBrJuiatevb1G5tg81arNiGiLc3DxRFoHYYj",
  "key7": "5GfUTKJjr434gBkt7Ax5NgNVnMgCVrdz1QDfWmHs8M1NwNNoKzuVbUMrfoYUUZMH8k25BLB9dAJvKE5Ld9veFBRK",
  "key8": "3YwSmcnmeczF56Hr27McQfGYz8zHu9N9P6RM39Zi5h9nTYXr1Es6r4bVpdTHCmWn8jBFNe9MVcoQB6vgSDky4iFP",
  "key9": "4pxqpQKygL34TP9T8mVtSeiqx5gP86VRnAP1co1144qWSTMkQeCf2CP7c1eYwq4LardiCGfuRcV2rtzpDCTHPYas",
  "key10": "665w1nyYnrP4yq5JfaLgJFEiLWCFUuWaqjghW4vfACbzRMHT3VcsdQ4vEVfdMADjxT9VWA1qwasDLvnUSrfapWZ6",
  "key11": "51SUrrt7qX91fnLRWxuqSjDLvNw78s6vkijaQdoKLR1fVFHsGRr4j8Eu59oQDX8mCti4sEJ5BQFDytD4jkmaqJeH",
  "key12": "27dYzfXcBuHuBH4ALFgsdAKhWsyceeeAr4LiVgHyBUyZe3KagjXkFBNn2wYG2S1Nw2VT2Q693NbPPrvKSgKwtVbh",
  "key13": "5ZZQVnpDBeGJYVcvewrDhLywvFVqgSSbu1CrKitwu93AVGBuq98WudjZp4ousrv7z7GiRxsUi9zhYTeKmybidTho",
  "key14": "Pic3DLaF7tDvweMb9NPJc5T1uXcxBM1ZcHnYBPqGiXSe925hijZQaQdiqheczQMKGnmsVg2Y17sSLH84Kub6BcN",
  "key15": "3KirdwtZiFzmDDDE4g15dvAKozfNwVT4kgeGhrHToaf4bv9QKKFqatk6ZeggMGmka8yy7NovCrAWphYnKVdJoorU",
  "key16": "5uGJARDWk6ya1uatYRtQ1htAZqSt8NLZoRr2FraMU1MWYrWB75RAEdhwy2eCxsAReKytvvdWixw3egXfDMVxpuSv",
  "key17": "3nGLuDdgZED3bpdwJk8k7cKA9f6EZTr9XZ16vKitZM3wmcbMJU8tXpHaMuB6Q8AHMgKuiH4pmge9MEmocTzyV2W1",
  "key18": "5bVxPtRFfkwXpc9mBt2BHFaqazG4dUtLAttThYKRGuo7KXx87ntnvWnQ2emizKXV6LeFeyVCXqqnaRHNhUTd7u25",
  "key19": "3KNeGRGbfsgFQdvsLN1QJHNoo5ZEQeXNciHBtHm4fc7ryzLj8i1uqZQPRecQU55gDzVrt9LaCU411zrxHytCRmYz",
  "key20": "2NEoscsQ91NfnT6r4emZCEojA4a5SV2qCTPeSDsayQvx5W2vEKHdVrvJKXE1VMrpXe1wnNWT7G9br9DQPYHod7Wh",
  "key21": "3CGRKovXtK79K8BYXaAEwSGvfsgi9bfvYaeZsffpTzpFGEruvryVqsxnAc9Y3NaapW4esxdZNyzuvmB3jcxTEH1d",
  "key22": "3ttYyk6JdZ6DJggJHEnPBxSVJKFxWQfB2tAbdJXeBkXmgjS41Ad8mTXm4gQh6wxX2CWFoKYnDZpMRQrT1Yriisb1",
  "key23": "3eRiwBVtJm8aK1rSQvUtSANqp1RhnPBEgM99y7bHyWFhgR63DEMXDuGpKfJyj4NPumXuGqy2c9StMhoC8sDvRKEq",
  "key24": "2geJWP42jTwyFM1zWE5MCq1Nn6Q7z6tg4bKa7DpVoAnSb816VrtSYdVaxVayMks9VCZfoVdWr4LiPvAM1KwL7gW7",
  "key25": "2Bz81iexF3yePojEVEGCTXsyviw6AgawgJHBr1JmJWfhVzqj9wFmtrMnLHfcKTjQyh4FSMYc6jhzSktXoyY65vJt"
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
