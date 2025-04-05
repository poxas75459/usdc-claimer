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
    "4zzWGpM8AG8vpPZvuY1hJLuNuEPs5z3NkgyXBkvTzbwCaGfZPKpVSwwwv2RiJb5sh2Ceebfedi3Bz8q3Zj3tY7cc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3maeAQyE51firLJ6woJPW1i93hXvuEw272ktjf4LhXikucU7eKVXwmqwmG2ZF1hkfXgXrmj3Boc16EC5TRaUuv1d",
  "key1": "52EDfkjz5eaYzANxdk98E5ZD5Lp8eAmogoVkMWWbzX951nFovAw3spNs6pRxmnzzqFyDnr8xN7tC8MaKk2uNGnVn",
  "key2": "21gQRm38gqxyVZYVaZ9r51WrYV8hVGBCnLj617R6DFTfZSTwVhfsr34dTfUHCH7YYgLczTyT1DcoqQS9BAN2EYxN",
  "key3": "58EW6fx32oecBzjqi5prKq6Vj7tNf7ocC6b6sPtAA6UrgaDwLaLTXhhLnHPo1zYLTndDCwXSSGtun3525KnkRxLH",
  "key4": "4VhkACatZqi1mLBH1TjpMDgiKX5KYsr1LgPUMvBXGQ9QNUnNSYSPbo2EvKqXq49VHKfPM2qVxCaCRBEddYupeT9",
  "key5": "5LMGMtndQaXL9gMP6TpvGCCoYvz4eQbzywXCTHLFiUp17JCij2NmdUN7421zK1eBoKWDA1MB6RH7kJcBAgUVuCCD",
  "key6": "pUhcGFDZX5KwHu3ZNfUeHH7AVKATyvevFKKZ1awCSfrdvCDqcDKaznEBjKfDhZn5BYE4jERMc7s3c8Jzp9w7Skj",
  "key7": "5ssWitqu81Eqbom4Ga3SJLG6231M1Ez3Tfotf4YD5UqpHkxPcMLadBoYXeSradRk4Pekm3uZWFbKbfdLu5Gxz6aS",
  "key8": "UsuNNsV4bqtpyWjXuuJdbfqUfYT564o1E8g21DnMR41wrAa8aFf95CUYDkZqAE4EMX6LeT76QtXNwXuXDnjRMKF",
  "key9": "3p11q1mY5g21BcQpMGShng3wqjMFhey99F43bnTQoS9YgcESGweAvTWrKw6kYLLC4mVP3kSLyay2juLavmXu2nkZ",
  "key10": "2a4Ejrqs6ULaqWzK943dFoqGEz9GC8gery6xAyN5RWKV2Syw7Qe6QedQwesCMampkm5ikuZQyiUcNnmYhyojGuu2",
  "key11": "4GL6nzLcpcddWLkzdnJpko51SyhaqNNEvq35dPcJDdRBrdUBHiLweMRbi7SUhWyS22JdUUucA3qSb21f9vijf4gN",
  "key12": "5u8CRveGaLbtSDpEgodB8coF99E2388oP79GYDzDoUyWK9UHHvY1AtVdKaMgXWxzpJ1XpBEaikXeapFXCgyRkn2P",
  "key13": "22ZiKiUAnfJ1wQR75EH5V4GLU4JQfpWTq9zETmZK6TiQrxyDPdVRf7xf3ShV1zHEg3z9gNQQ86T9NN6VvyJmWjmt",
  "key14": "6463VZfehGWS6orJV6vWmuTU6StsNg53XxXPJds9V18nfv7nm6esmxgFmdH1U1Qke1adH5nAhCc8cBnK4L5yYViS",
  "key15": "3y8u7fqBJUqUew8x7Xk9aQc8gsCNvmYMsh6nVp2pdhgEvQQqiY1b2HFipRsFEmHW2ED2vm6o35HxjzfoGXnEikrK",
  "key16": "4b2Q5G18LxQXZZwzYzxE3kGdiVu5TGekYJkiS8sTiCHhsNSqSuHBN6gmmNvBrjmJSXpF5Wp6oGQEdtghhDLCCai",
  "key17": "2Av6xdigT9aNMxb8LVw2JAfSQfDLMjtDVTQmz3LfPwFRxQBd7YuVHnrrkdQnWedhzPVWZF6fnyhvpi5UfnMxSCDN",
  "key18": "54wvNVC1yWUbotNxcTG3Mb4EWhC5wq9qfdFExQGsht5WV3WS5JhAVa1vEL9BMVc5k15amgpChh9YwBrpayh6sgvS",
  "key19": "4gnD9t6aaVQuBmozegPXxJR2fN6MRp6k5n3cKF42ae83K8sknUMZGDvKoSiKsWQV9rBqp8SUae5EpkD6QuerKKBs",
  "key20": "25mu2VwnbyZkZG3Vi75AWWWpw2US5wcBPKdKkoUDQDR2nnW2eZFYLDo4teZfu5sbtUUx5eigfXCus7fsV3XmDc7S",
  "key21": "3dz9vN8LgCfezhns6Tia7HDVCqYm4N7WeDiNTy146PmSB4EcfcWUbmFA4oWhbRzsk2jvZvutV75iF5CmxRbG7sZi",
  "key22": "DCecgzBFETwFN7i2yzRLXY4XPQ8K6m754f1NYQBX553ACHsJCcRzHTjMeJjwYPvMhoEcmRSjoryrTVKxcqqizuQ",
  "key23": "2xC1jXUEu7F3n4uHMTe5ZzntkbMGE9UTyEbK5jqEXJWsCpddwgvGtWS4y6TLHR7RkMBpeEeoe5AUoUTSJV5oetNx",
  "key24": "gmXTEB1rCdXZM4kMYn3sHiSBMPHB4u8dyKwwmQxiDN9Ghj21ZTASTjdaD74fpwhofBEWBokyU5hLArf5Sqmdwgy",
  "key25": "3ry3Pv47j5FHNuvoNBjA4q4FxLMBYkJxNymn7xntHCrkGH42Yg3xLtVxPU9HdDtH5163BzgS74h4yWbegZjEWZJB"
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
