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
    "2qFrsscbnRywqmWk16P4L5khhcvmmp8s8rpJmxy8AXBJg2smVQKszxWtQzHSP2MfALbTsWiTiywx2ERRP7MdTpL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XP6jWzM7w5aiBrepL6c7zmQWqnMsYVR2ByQknvUavtKnYYgshjokAsA8vZVqPFmseWHF1odLQXk33TkDsj1Jh6u",
  "key1": "3eHvy5BEFh4FgApmQd9Sprs9ZiDDFi8daxjCqQPv3Zo8mLSYnF5PQ9YoDxMD6fLPV9pejHCLdeaNmByjb7Rmtjkb",
  "key2": "5CbnYaZx8wW8T1xELBPUYzgQ2byGDmCUR2srSMMxkiuineiKUkrTDJYxCyNz86vLqrzLKNMtdwKVffZQ4Gv3w3F6",
  "key3": "9H6xLQgp6khjRM5rezFEwUxVye2TkuhkBriWFKcHGPgQCkBRxxU5QSgXvv9NhvdJYVkUmx22oYPJNmGYvrJVj19",
  "key4": "2HNUkaHtqMSFbuqCBhKFLjE4Xk6a8g4QxE6tL7wWkxpTsVVYPVRNSRuWytDr4pMZhxzdMnavrEjdsf6fnZ7ebgV4",
  "key5": "3FafdPnGhnFZ91pbzxseLzrMMrEVnsRp3WUmVdZBWBDBQfa9is2eAtQRsyQUHsxzJUjaiXRi1sKxJjx2GHcCVpDy",
  "key6": "36HzYaoWCGQrir7nfwJRXEgQytnCsBPj6eVMPtWLJJH37mbqRaCViP6SVf9wPVH8qM1qucHCfNa7a7AA38auqSik",
  "key7": "2KyEJuba9AYrvrviVXXvYs9iMeXjEQnWVzpZEzJ1K9YHdWcViqxvBnAJoa3FDmSeChoYVgsNWMvTFh7GiyDsR5zF",
  "key8": "4vB5kRHvYv417zAmwVfEs8iWh99xb1boAJiw8usJ2e8dZhJrTe1QTRM74p8G4oi8aAnfkSAFTu3GQRyGxuVFGVw1",
  "key9": "5VhSUyzt9aoo6kJkHyeAXFxT2t2UEPkyffE2YJgYmc3PPx8yk28B9PrfbTCFxjT2MaxFrYsAMTCyb19uQnNTpkRJ",
  "key10": "3ckePfjVnf7o9Y6fZJvvZeJwsxPCBXsEyDtE5RSCxEujZvp6RqYqMDPo12daDtLwyax6d3EQDKbHcCFJBhYeNwpc",
  "key11": "5v9eryHbv5VcH998Gga4LiUhhbJCSoNhik2Nw1psqraznP6S9M9hv772xjduf7G3W1WhzW8pcPzRuHBcaHjrFRni",
  "key12": "3WYobkEGfQWTwQ44D3DQtDFdo56uKYv4zKC23qGxXQvhWpAkkK315okwMCgk7h1ypGBEArt85ov92ViXZJKDiLEg",
  "key13": "psXHgBkAgPG1Ay8nKqkx37Ly53ZjiR1HXa8AZSbC3XHp5F2DL7HB5Va1GguRrbRKvfqx7AihvntUtLDJYVTWs84",
  "key14": "4XAd43kN3Q1Zp99gfsnj6GY4AFpqQ9axmJoYUuPdAtthbDC5N2ZmMqZimbiQqReaT6bsQaVAuQdaU7sSvJNaq4zK",
  "key15": "2yjDp4kpPm3pMw3PQoGt1uKWDiKhtgQ2KyTK2FzigbSYhDxTGksuJTcTg1f4pDFzdXbYAvzG1ojVNHeLMdqhQkqR",
  "key16": "4PqgvAnR2eqiDHj3Zzm5qDmXMNYcEJS6DaJbWvVNjQaZz4Lrm6rpssrbxwQt8NGKcJB7KueE8X9MmNi7QsqLLv7j",
  "key17": "2SCGzPviUU45AijKoD9x3pjcGijRDhVP2ipCYWrxursGu7ThhtuNhtG8d757rve9aJ6aQfparFmhAnEKUN7qYdab",
  "key18": "4nTT7iECCZKXYpuRfSVwhqjUn9KnioU78g7iq2PDaxsJk3EvXFEQdYser11UH45yrGSo7fEtQRfgf3DcmtFfbDB6",
  "key19": "568pgQWkx3bBRkboaAtSvGMsV2VDDnHEnY1ZCeDQZQuXGmfmLhi7uJyAcaXShZg3FMgBKvycwy18LxnvH1jG9fXF",
  "key20": "4ZPhgSr7YWerk3PvPiwqiK7K85DMm5EB7WhATnRMFNPer6zrQGrLxYxiUGnrag8K2qoffiUmkEuK1QeLZz4s6evS",
  "key21": "w4Lv9n6N1Zvhi2vG8cmqgnLTSzG49wGXVAeRA7DjwnCwUswQYjUSMKNeW1mve8uDxFgUhRo35encES9hDY9Y6ap",
  "key22": "2BY7niAz9hHC2CszZyd2JeopbR9QSov4NYJf5Qri6faWuF3mY6GT3WywDRZes8rU7X6cWQ3SSrxNgCxzf41Ai7re",
  "key23": "285ci4RVnUELngiEWp8pXg8wVKbq2Fp4AHJKDjEjdJb7ny9FBE46FxpTqFShTEDKLAEc47b7f2mkAeQG78imi7A4",
  "key24": "5dXhsfdQ6jmx1HjwpEzTxMP8VuvJeykn2dPkEBJZAgAbAkjzkRtTTd7UAvDE9pnzSwsXpeuktCrGfLXzLSEpiKQG",
  "key25": "2fxiLXzxdqSPiUqYH4CMd2vTDwmCyiRR4Q1D7YWUtS5fzk5nd5akgVuE7S2ocMw2TRGqbYzaP5B7hSPUNga2wvnr",
  "key26": "zaYvhf7fUyiDpg3QGYiLZ4NS3gzgvzuUV3VHidjdXs3Crpyh8SDmdkiUfbNSNhuoaadEKSGTDD5GzoLBMWQgKep",
  "key27": "5N4T5xKUFTywRKeX6Mike1MAD8LkFcDfMfFjg98Ffp8oHLF1ZBGjhjDcUcyTa3yE2Xgkbtrsp7KDzS2pcmgFWvrq",
  "key28": "JhmDQrJ9AojfuWyX2Qhq9oWXSNbvappPLsrPocnun9jAxZWL8dXPDDWyrQUTdYhcuhA3METJdZrPCNA1oY9ebZX",
  "key29": "TtZf5bdqyrDqscCm6Fj1MskkUJAaeqwH8EDWXACxuxq3KLJL4AVWZt3rzmVRVQm8UqNorPiD9ocn4RL1HhKpaQ4",
  "key30": "5Gc6EEg4z7S6F6q7ABT5NYFXyxq7r9XwwAiSAExor5DxhxEnBCa3bxF27AjGXDzEKQ2NUGywcMzxV1ZXNvr62TAL",
  "key31": "obYbkBLQ7vydonaYJvh1B9j4ku7kCdrwPbetnLKVXWiYfauCfZ3ALzLpvGQwWzi5ncgYq18TF6d9UhjW3onHo84",
  "key32": "UMRk8GVmDrEdZfejhrW4HgESdF6GdAen6PbcopNKksQEN6mzA7uQ5ok95dw9jguqaVVLwBfZSgR7cdSjaWZ6D21",
  "key33": "3kuFDa2FLm73yUicn7W6KvXq8F8gkUsQcHLxz5CELXJnCA1hWQN9ZACLoPwwNB59i7bGBm6h6iDsnhRyDUUGa2C",
  "key34": "2dRGie1BwTnpMsJNdmp8cyyzvMRHPBzeBnidbu8p2tPysBw6EguVczAHWNDH6vKjN4K1Q8zS8rvgWCHEo2o2r2aQ",
  "key35": "4zKF4fxK1SpSbg5bVp1LSSF5eALsbGjvVMwGMYWRa1eNLLWVR4hxLhwfHRozn4jHJ4uSJH3fAzKs6fuE5HgDicgh",
  "key36": "EyCS8PAhCCGY3JchcrFcdiGFkeEseN8N4XkNqostBHF6EmA6w5X4qBdL6SEFw9mT3Z7mpasHYi4L8N37XWBTU85"
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
