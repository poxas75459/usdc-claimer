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
    "c1siy3jMaSnaEEjL68rCHqTXdy5zuDTyp9RpycfP7QjUQpiCoUFC2b1wGTEZT65byigsxBhovfpc9J3bW3NbmZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GfZEkLrEkqfZuqxEiKcMYMTRsrUGsb9zsnQUvJyL5VwsF42zc3tfLoa268yiY5QFyscbyCZVjwNDR4T3pQDk9Xt",
  "key1": "4vNTVbxU9qwHptKFSRJxfGWDCYbz3MXivWSqdjbvRbFm4EEVXv3oUDi7Nwd8HMpRQczhh8ZaCW2Hqy7EufpEwS1G",
  "key2": "43g4hjQuQ4HhaYS6UXPkCQ1W3qc6oUnz3nrtbzMWHJ9fxXeW434HEDZKmbVmATTB3A7eiGDgXiSk73Nx9EJkpLj3",
  "key3": "EQ8SFyefoeWi3uXvdicm3SuehebLxCoAy2NKEcKasMCXbLG1wfvg4ksmdshVbi8P3a6XvAwugJdoP3LrwmSvh71",
  "key4": "5xJkdzBMAy8HF4hcSzwd6SyhJrdGXSkW7aL68mV2ndwAkoxjqr8V7WJsU77PGDiTwkgX7nSZDitzTWTe6WsqsdCx",
  "key5": "5go56JdGk4sJzktHVLMfGb47v8nUdbz5yiozwxLwwa6H7vCFGFXDSpT6b5exMCMK5PYhqpq2CPtoUhYQN5tiq7jC",
  "key6": "4QGpN3S2qXwy56AC4Upa4y7DyLQMjtSPxhH9CmfRopJKaLNvTXrAswgSNYNiz7dr47KZFTMYRAVswk35WjJqG4Y3",
  "key7": "3ZpukE5FricDxp3zxYpG8cK8K6Fm4D22hEjUxSZWCaDbwNcm4A8L22sBSfgJ7aYqLCQQBgUyAap7vtHrurAcuLSW",
  "key8": "4ctDMyQf7TAE5X8jFd8V1gj7imuq9Bea6a3wTY7kkpz4nC16RnaLKJXiHxBzsZS3GkLjeguorPiw97E4aG6pcjSg",
  "key9": "5a58dg6swcv45Y5EN6Tx2yL7gTr3k2tRaT5T1Xhw2shkrSkiWoWApva7pYDijAQ6Ys3cNwdRi4qg69ynmgkyBXRd",
  "key10": "Ah5QU2SpUCyAutKshohiKdQbsPjusPTgAi51m78yKqNyCcFQtk2e7h4k67KJGpoJuPQmCoow1pQphQL8PVaS1x5",
  "key11": "4ggzJaiQeqbUcz2GN22SVfAXvLZxyR8gb54VEv59RQKY8zxL6QeS62kYTKSr3dT2zsEm29inYtRgtgE7UdAj9ep9",
  "key12": "1zAC9FhbWjfCmrgQB7Dqwh5FcxSVGMKNM8Hs3gQVT8jaNWRec4acaGuBcVkDhLydd3ADSZvNWaKMNY5KXJk7vht",
  "key13": "S4PdbSa7hQF1nsB8REJ3mb1AFWdzdxmnzupXt7yYwGWwfZ1pdubP8VwUcTF4Tw7WoVQmLuQ8tRLtThzp2dMqbxk",
  "key14": "GGK2wrDFtCt1gWnJDRBDvQzVcpPEYE2jAVMDQPH8fhFKFRiQStkmrgfFDiK4RBcDza9NpSiv8jHCXbXUgWkmyrG",
  "key15": "5VmMxfNcdmDDd8tAzLNqESC71K9qE4MsDPCVzKLBAYNzYEJjUSgXT4nBM2vDwAXmfQ6F5YGXYZPn489Zamg8HNm8",
  "key16": "2t7bjxwHTcMn9msubrKXPWhnaNo4L1nCEWGHQSQB9uJUGqJmFEsD8jaBdj8euKcUshc7722mdquvxvrQsKuNinXx",
  "key17": "4FgupEnNw7WV96HvenrsCKcCTgbQSiTxtLpJnkWrCJNy7EZQwxqYhWGPygkv929NGq9wC9zZrjB4ishRuhhJcgcJ",
  "key18": "3F8qGwfsbCro9vNARPG6BKed57QYfC9BUVYFWpM53Ebm94qoRPw6b5URLzYoJKht78fxgRPW2obLFVXRQLzycT3E",
  "key19": "2v9in25yuCKx1kpUwZUni9aKP49VnPCtvd3ZwhEWYZKasxFaZd21SuFN6h4pa7ddP3HSuLiSY1CHVSSZkxmpnKmx",
  "key20": "5gTcrjA2tGLt9nJuqe9rhe9X9AcRabZvC8pYZNyNnkmnjerdx4cGwnJyz8YpZycuvmgCEbHzW6TP4E9k2SKe75VQ",
  "key21": "teByBzpwepWKtKsyB1qH3ZzTKwHxMB7AxxWHe9H8C6zRdbUCrTqQmp2vS87hUxcjMrhm1iY7Kog9yoxtDYDFnXM",
  "key22": "2cVaBxUhXxRjGW9ae3SaJ8kvZJUnvgQWjpc56dCHzQXt5oTCy6K5cGNmhZVYzdbK81EczpbKbwtRKPd15vviitbj",
  "key23": "2SmqZYKU5MbUTbJGKUjCejPbBbBT3i5Nv7asoWopnpVDZJ4RtyeEpcD24ywPqChA6Jnqv6mdUEXWL8392dVWUuZf",
  "key24": "3WM8Dxeak6w5W43yxsW1UyQqW6ozbBctEWzpEJqqqt4qDNmdCreLK1VjE7L6FE9q9qAZK5EsLXu6QwrAtvVHgDXi",
  "key25": "5yqQnh4m3znGkTQv1hdY1MCCxGvxjdnagNHZYtEHM1UeDGRfjEni5Hp7zZ2ZF2crwYcjnVDmvw8PTpw1XgjzZN5y",
  "key26": "G3tAPEtu51S1yvHrpWGRrFLUeAkcQCJwJWHdUJwMfVv7xgX925A27GER4MjqQ2n1NunNyCum5EJrki4pBQNcxcy",
  "key27": "2NZffXKeuYQqfvCdemnQAWFnggk6mj47aM8N7NQoWaeUwPhZCwJBTicmG9UYbuBbdtkitwHabXsicR9Gvfjtgoxx",
  "key28": "4F6VL8WkxRmz8xmqvZcc33xsmcBk55akk68n78wfpDKLzMkRRZSjaQ83hH9gAj27qJPWSSTSV2ju7sUXtgNF8fcS",
  "key29": "33yY1PqvjBMiF3yrDoyh2YD2WPL1L682drqiiK44aWHEdNUByv7kxceEPEKe9Ua7Uf7jeJQz6F76t2dZfqg3mZQa",
  "key30": "3i8HkfC2gfrqnVTnuHRWcLgrZpyf3tLLSGTTpb1ZABxdM5fge1kLxTgYAu45c3NkhJLeWVxxqk1zHRNMdjnkfNbM",
  "key31": "3qqJxeqyXkBkDjFC8YJZWqH1r3QKUVUTZvpmpACC4kvGJdrVCLsuqTy4x8PgbjEzqQCg5BoBUizBsTxZoNyp8PmV",
  "key32": "A4edsWwpQz6n1Nmq6qbWG2YWdaTxn3ekUUws5g2rrx7XgzZkdogatKSPEGjdGiKNrenpuwqq9S47sPiRggVtLe3",
  "key33": "65MGHcsgs8j7zgU8pK1kpqjmAamoSooyrq2cfh7QmyZpbGsWT9ESXgaUMt8fcAvuQBGqSvfioG92tkv32Ucpu8nF",
  "key34": "3vq2EgjcW4UFhp5JUW7k9qR273BKq5Yn2djrMxWzyJZhEU4QtpeGPCqLjMWUdiGnkL6jcNzBTPJm3SaneBtbZcfQ",
  "key35": "65vKYy4iBt8wHsc6kZcH817PVENujECFBGxuRYHwyz342E5kL5DyM7E9pms7WqKVfPKQsWkYM61NvrkuJXSXovb6",
  "key36": "4caZ41dMEP6ph8GswChwLQaCcaKbtyG4cc9wsnW19b3DYKcnLVk8vbsoaHCosJWwckA9DxXeRniYqiEyrfohKJaj",
  "key37": "m3Emj3m8jp5jSvJVgegwt3GofSLk8moWF3sfA1VdFhPvrDTDLJ9C8Dq6KH5FzFDr3ADENKqCDtsYJv33VoeCmUM",
  "key38": "3MThNotMhRzyAK5ieTKroAmGyt1arqbrmFEUBJLsbWnFcXJ1WByZ88LhmUtq57kihaNgFKUmFsExphj91mMCgiiJ",
  "key39": "3bA4Ykt5a2avUzHSsTgVxW4DoexfLcUSqhmcqh6jhruq3ry6TTQKdFV7G86THE1dumMe7ijjTQRA4Qzwjz1XfQsQ",
  "key40": "5bVBENjuteKPtPy6QRv9E83CrgbobNWPmuBk1WXRVxvaAVnGrbUkzvuS9rSaXMr9a4up8FYdsuMKnjhfaqVjTCRp",
  "key41": "3RH57AtSTvS6xVa7czpKyZRAne3qb38rN7cQCusQvoBijdew14ssK4AvfVrZFwrviLv49R2CkXdJXzthZohRofVH",
  "key42": "GpjKNZSTMAapfVVDGLJ5GAXrorGALMECH3GEmbgjLLxfYXp5Rz263KsJXjWw8agAsdZ3BSN1yryq3QLMPZaZHSp",
  "key43": "4MkACqFc6by4EoY6JMFqvZmm3gAbUJwBowyerRExDCjHbjBExApxRG3sRJeVpXASCBfdpPiu8KzeMNejXirM8WyE",
  "key44": "3s7QEjbXY4UAk7YtATLQQnf4soGBXcPAEJPhSZViLUMXYA7LA4WPcoCUc55BwheSX8FPVkHQk4x5ox82hLFzzT9Z"
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
