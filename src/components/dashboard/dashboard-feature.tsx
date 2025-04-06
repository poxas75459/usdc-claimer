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
    "XeBp1R6RRUhwjt3iBjqyGmwCEAtZrQjwTo82fdmjHg7JH19TfBKZPAze3HbgLaUU7VZypVy5BaDc3bVmNk1iLS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59sDit398UMxvFKgRnbokkXswQYQvvMK8cJFB4wM7KeEBD2Ss7ANtLF8YbHKe8y5iYQJaiTraJjEDoEfQGkJPodx",
  "key1": "3Z7HDyvqxsxAemnAhYiuhEbH1mxJViZCn6Cho9HtntZpMjA1pVxUE5NXWHscbE4wMVDvA6qLsSBtys5jiVjxTGRB",
  "key2": "2uoT7Nb6YovdKbvNTL9T6RKXnhdnwvtW9WXwurzGekm3oapSworMtP37Qw7ZgAK3GkFsPgTimmBA7WHtVSzW8Vmp",
  "key3": "3EEjYHKbQsoAtBQoDZPzU88siWSKk8av5sU5nhiQCMi4ma1UUssjkhNFnMVrAUhQwmdqb45g5CUkdBwKWja258b8",
  "key4": "2rfVK5gNvzzZ9Cj112Kz5Dyem6p4iutZjaRrVrJEyLWCx6aLXFGetZHgGexwvWYz1eHVcnmNnfdaMJ657aY6xNyA",
  "key5": "hA3YHfJxrVETfEQjb3rk3M43FY7bNehPGuiFcXdj1w9vwxWi8JbuovBW55oBDfTzX96tjgwhocwdtzBLLqG5eRm",
  "key6": "3d5u6DNDquQbVhwvvRyaNNTDP3NDfpRkviiFK45MiegQZYektcwTHc5s8HdHwM6ugUEPxjr7UPNivoDpeR3kcvjn",
  "key7": "33x66Hbq87NEqDeBumA1KzGWMDLqhnwEfV2KnuHzas8qdfTPXM7zVRaJg8gxR2ex9MTr1ugrGxiHnfLtbhYxMYcj",
  "key8": "2F98ACFYE96xnUhifWrwJxnSpn1PdyY9E4kJdwfDh3BFF41kYrYzGpA43giGf4mATi8C2JC3v9ygy1m6criVAt5c",
  "key9": "8yChXd8obz9v6ncceeH2ESyrUSeoEKpitssnuyobjArPtnxVfymByqmrJrstirg7dxXnvPwJwe1TqJzFiXBvAKx",
  "key10": "5Htr8dxvu3UDggy5v9LQPh3D4e2FywbTyBpxm3ivFgE9NrFvYENFssFztBpoqRC2MTXsJ7m8qVsj8iK81QCRMoBa",
  "key11": "2HnmFTf7MVuwjsqxt86YYhrbU2C63nPeCoRUaPQbanzXk2KrMg8aFcB5voPeBe4QyDHCJc2WX7cDxPJ1eYJgFj3s",
  "key12": "2ZPtAdFNdiBEdWexJPvFaSo9zfMFkfM5XXU3VaB2nGCdeZTVij7KVo7voMG2SXFE68gm6SKiH28a1q7z1G2C3Tgw",
  "key13": "3UyTtYY6y8dLoT8pC1h7sPqPEcLDWxTkTXkeDaDEV1xJzkC5ES6qKTeuHrJ8nrXN1mnPCeTezFhu3fhMtem2xbb3",
  "key14": "4yNezgjW5ow5c932Q8HFX3ukiKy8x4xEJzNWYmjrPYVgwEiJK2eK6xSsFkHzn5oSgy3ha8Z8adYDdSH4ZDSDtaAx",
  "key15": "eHwYaVac5mJHsqq7zMJftc2yngiDoCrU6DyCkgBNd3zNX7pYLBsv4CRna1mptkL3SkAiiofS7VeB4pL4cCtkpjA",
  "key16": "5CvsoFUAHxY3Jnk6tcNuuiGin1dD3YCMkUzynyfVmyrZqiVGgQ9b4LnsN8EEBpXHcKnQsXbQjPhcwcqJjZxdaHAn",
  "key17": "4ypNDb1hQ8cDeEmc6jR8jP26sbZzzBH1n2QFQXvEZZYADymExHt4q6UkpJDenxqAq8CEGUfeyeLFUDHqp3ZyE2Yp",
  "key18": "27o6XRoNJDyc3VVWMv2j8L6QDpEUarZErJxmdPE5ytP1nSWmxhyEUZDMwj9F84NsLnvUpKm79rqf6fKFaVebALww",
  "key19": "33uMPTaGfaG1vqTNG9ZzA5F2uxM51cxVQCS627nnmGZ5rknSHKsz7baxAeYCs1SNif3kyDpMXQG2E7Ko7rnfxvu8",
  "key20": "2Pk1YGWYsESEmyydkueKdNbtSc3N2Z8iGL4gfxfnrtGC4Gpm9JyJenH1U2hZAUWL7DzCztdcP2Ukb9aSdqjgyehY",
  "key21": "4R3bQg4W61X7nXUPKmJ69HsC4LFZLbZpuxi1ANrXrv7Bjerab9ASiYbQPZxKGDSHWAJ6jAWBJZnYG6jfuLJF1RGD",
  "key22": "2FadZJ4jkPpmnMTWgDMSTvfF2GYDGypz2LkpV96YQ8gSAtq6jyHgkFiZMf3g9dz7j94R3S4Xa4rgBdoPvdTPHsR",
  "key23": "5s89BfMfBac2UFb7uyFskM1N4a3aD8MXemPUPxVKxcjLqvXZVcPJ8eiqc7SKFkA5EYmtnk5SnFYWG9emt5xTAhky",
  "key24": "DYbwEg7soDQ3pt8ZPk9QDnME3KSXEdwMFH8SRtgzTGws1kdec22dCsTtydentadxx332iFQe7KcMMU9EMDZopxz",
  "key25": "3pQ9HZ7wabyEKURQG4dBJveq9eGtUty9n3Cwx68sskvf2Ud9UUVwRzTBQqaEZUoSZHeDQBBCh4pknRvFT3Cf7z5u",
  "key26": "2RqaNnbGnJ89qRTUi2wiX6P2P66KNkn1PTwz3zRGPgxunbARKBqWvXJZeW9rA4eKt4KmixuNhHz7vg6R7wZwAu3G",
  "key27": "4m3DwYMWCzKP2VAY1mh7Z4hRmxpGKR1gFHfiuGGBCyd5PU1FsXjeTfjks8isnbcnNEZWUJzFqUG9qqBaCvuzsFKE",
  "key28": "5LdbK6nF1K67bibs45uGZsbcAMhEkvmQC4bL1MWneTrF2gjTeHbs2gGWHqrzeWap2afXmDoscrVktDzXpxJUvjRH",
  "key29": "5HdiWTdnVptHDQtYFp36GKcSAn9DP2ms7rsfWSDCv1fSbH3KN14K2yYVJHnDhLPuYm9nCaoHCtN4YRdbDpJfKZih",
  "key30": "52DU6wfJRc6sC1Mtx19qTQcAYanaa4uPezdQGgshKWqbvBGe1Roq79BzcULWyi71nd9zEpxiTL1ALrDCNh7nWy4w",
  "key31": "3V9DNjyFuhgx3aQ91TZtwdKvJCjzyuDitb9TjaXgK3kL7Dg7SUin419gMrCJ7DqVjjDS8JvUAcuhFRiQms5MXvku",
  "key32": "5cMPwgZ7wTujptN7wqLp6KjzxKCqCu88NRHRmcsNQGsErxWsEoid2BMPunyveBjSnAAzx4fVqYvPenSe3dPvHmJH"
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
