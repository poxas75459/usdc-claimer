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
    "5G2ocQk64bcHgED9iFZPchvQQ9Www7fmZBNxPf2cq8fhXTKkXHsESghiYbUC5RYfQDPe9zEjoZeuQ4g3Zecch2gN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rscbCJ4umEEPJmuU7RvkAQWWAuYHSa6cPZntdA6TVsNxrRJpMFUeXtBFWbmMpsh5Mmz6C2UD9bHssD5ef8Xq3nu",
  "key1": "y75omQqZr5JTRksTWbk8WWyK1RA6WE24mJsEymzzDZEt41BaTTDG42ghu4DCJDi1eqYmkUV5poeZvHVKxuKELGp",
  "key2": "2D1P3RcDSrRCt7FSi5ztQz738BuW123873rqTRxM7ej8GMXJCD35DDpcKpeFy8dc7K9Z91YnEpvP2V7hbJgj6tea",
  "key3": "GVXmPBCe5j8FKb3PxyHPZ4QJv3Wsxut7jgTioNhwYeDnBNVhGkA8LV32a71dkkFxSkbsjyAX4wKUnyZN2J96KeB",
  "key4": "5c73ErGjXFk1jHRJzMMrEQ8drxnSCxX8T4V7BmB9fhsUzyY59NLucH4vD1EJrXDVme6En1dd8grynDiVhbm2Qzkv",
  "key5": "RM1RZJ1YYfbWA1rcFiYXTK8SaJPYYtANeiYwbaEB4wzJ4PDVrVN6NBLzywarSrhXPXbRBumUZotWryW6HyXu1sE",
  "key6": "5mai7FLcUnnhXRAMLqQbFTrj8cMo98kiUBMMZ6AwxaF8uhZcBmgLSsfDSpZ9uKdEDEhnCu23n3RFRkBPpcpAVit4",
  "key7": "4w2ZF2xM3uf2tDAThiyt1w9mUB1ex1zJPaJjxZNCei1Rmha6GfQmkUYBGKNxHkPXp9Wef526cZFXyvUZUvhYeKu6",
  "key8": "5Vipr1mXpu8QD3CPU5grnSnJZThNdBcrzQWte1eci2SYrJrdVz2j9G33HG6buGkcLVuszgYa3v1HQbQhtgtANRmN",
  "key9": "31AqVU4VvPmHSmooVKErvz2r2s2aXqLqVgP9SBcs86ZkdNSFazqEcafjbC6cxH8bpcDwV5uarqnEKojwFMkZaJgJ",
  "key10": "23shWWHZQmabgywLTZoMBmqXPw6ERKstQHFA2KxSW6RFmV8ubdnCrFFYdpeJS8pNrWT8F4taDpKZRQwMHJNdMAuw",
  "key11": "5tJUihzNW44hAVX7eNuLDWzkeDwsL4wBmNjkEjTMJtJ7dV1DDmw97FGoWK3GVnzXMa397Ci7pKH2SZp4WeJ8pb3m",
  "key12": "4oED2s9qF3Z72oBBAG2Euw4qAdVe2Q938C2496WRpyrRCz5QsEFWqhvScd7hfS4jvXnLzEmzeQy3bb7rxHeXJaGU",
  "key13": "4UWsaZTCsw4v2ZutCLBhCv3otWLMMZm1pMqhd11aRebqf2coY5Czq1QUuPcpbDimM3fxsmPuimGGVkJJzGiT815b",
  "key14": "5rmPq4a1dNDFgGP7aPgCwDVNqhvxpiuk5DDecGSEwZeZDnYAWVQnh7iBk6TedB8QWdzQZVWzNnZXbrMo9i5pBy63",
  "key15": "4W3FNLaFd8TftqP1eu2TU9wXe9o9fncmsBspU8TyMMU3mRB52ALhkehYSSPguvZGaFkDQNGAzywMyecZqusVexg8",
  "key16": "64VwhEn63J2tGQG5bq79wyjj7DKmtnVeiSjy16b6qsTbnNzD6R9vDRBiGBtLXYQkE3NHp2MvvUjd4A3EoeQTAJRJ",
  "key17": "5jV7oLnSFrVhSW7bCxzu5Nf9bVFHSNh6A6Avz5ZfMtCwp8vpMgFvgA4kb6BbGKGH6UwZZZpwVdoTCdQcAosqxbHK",
  "key18": "2DmrtGnfKtf9DENmZZptnv1AZYhZQx6FspUzgwtsijjzuF2ka39wTLxfjY4c8LTA7NGDSwoXoNptEmNpznNSjXeZ",
  "key19": "23LCwAtztvxevsPGoe6KiQsRMr7x9Av2Y7yDj1B4isqojAftyUAKMUkVK4emAqzcKSbMLvdEqGuMdbd2pXn2yCKp",
  "key20": "452J7e99Vr8e1GcUGo8dbKfG86KVyJxS6pLiNQgaobRpj4pBR8tmswwyuWdhYDYvJYCGozekLvHePMot4eoJgrZ8",
  "key21": "2v4qbrck3fJLigsrKTzkb96oBnTfHuoJLkgHsdRzejXVwHJfiB6kZDnbp2FAyS8i1fBa7se7Dik9iAGRqsBSveeq",
  "key22": "55wSXB3ZrBYRXjM7qbznGyYKtAtgYwLTu69Go1gJPVYDaD62jEsZ4zMwmzPL9MyXdMLujxAnGk6zokbMoGh4qzT2",
  "key23": "21bTGgk3bvgNhR7m6QEQw4cLmBqgpfywuh29m49AKSYKMB3c2ApLLetmDnEbhnkRaKWbZcgfy3t7HupZrSupPGwf",
  "key24": "492mEXbzsjJBTYWVTQWLU5WUCBr9QPJqh1GVUw2Af6w9xac8WjkKaXN7Y7RBZCowDvL8r1TGAe675fTLUYPxrLVj",
  "key25": "4EUv3nziyVsRbuvoUqKDAN3rK6re8UgHGMY6tvDvHUdTggDY9oGDpr7SYBcwjLY9jxsrdQoJjt8ghDZE3MbXWD4P",
  "key26": "27VugC7GjrBQiVrDFoog6mVnqFa14FUa5YDPNLYqSGG7wXgbnU4Yab3R5xF9oHtSEbaycUXX35gTbCEmmZ2h4Xnr",
  "key27": "3nkgxSg6VeEf39KTBo7ZBn7tfKQtmCFcLtwVumi6kpALeTTFVKhKugVUGCuzBBg8fs4qpfTMNFFAAupV5QCpeFRR",
  "key28": "5pdbxJv14UPi82m5M5o4jP4PbKQBYZm17VRZMg6vTbBFTPXTCZEXnubQzbKLAsQ8ezzKQUnJziMcCuApHvJNrU9s",
  "key29": "4HFTST9KANX9i7QnXg5HuNiJXTh3txjBgdZWcroafFpoGFzid8mFo5EkQPWaCXxrg9gbpWm3oVXMeqG6zWpgbWmA",
  "key30": "6gSTd3nr2sv8nW1dC1hZAwBB6vMBVwTg8Gmi5LR819Uv8DQezUwTMd8VPPj5gs6sJLXEjK1ko5kPptHAZt4guXF",
  "key31": "4aQsFW3dCHno5eJTrMBj73VsSCTZZgr1TJy66H4TU34ziTmJNZZA7w6noUFxcmt9eyP9p3QRSpGnpJHSCGQqRNrU",
  "key32": "3xuHR3gkvA6uHsDZLnBRKWzxuMgVeWkTy42YaYAoQodQKARWC9pAEJEPNtT3WnwGXUuTZ58edWQp6PLvSm4PQdxt",
  "key33": "65Zk7tbJc8T8a669abo4ozCsNXk6uCj5sbCx58pJ2uKChkcT7HCYVF4LbRFXx8ZUhLCnd8a28XjSkAfJ9YkP7evv",
  "key34": "2KKHnTcczmh5Z2NU94gp6ybzUes3NL28ahZqtFzaYRzsbbqNFhFiXfNDyt9F4xaKrWckUThgpB6VQBoGKStjZr19",
  "key35": "3gFfr3RrAaiyNRsPXhhKXG2muALgW1u9As4AqA12VFqAQsmQMk6zHuaYSPqYPhF4WJSjRmjbTWCBiV9mqWhVxomq",
  "key36": "5ajmxGDQaC5kSb3BKerFWPe4tQ4RyJ5rDZEhjjiy8vgrqwUBAzFjTXVAEQyeMdj43qrZRtyURRbmPH373tAG3AWd",
  "key37": "8GiPBWxkFt837jFpmNj72YohW7SweGUBZHqysvfNdnKQ5tFuB4KM1vTefGSpvrmYRnNQAUt4G84TvSbygnYkCnR",
  "key38": "3xfpg3UKftwQZwN7Y8PnC2zAwbD3zvA81RCKRTxicwq3ZkuBh2QjZREuhRhj7RqUixm1MM6rSgcjTpYxjyz5HaVq",
  "key39": "53Bzan81Fe1Sf9e8fksdySWYc95Kx4EBuNyT2jatB2MYXWVrHR5t8QEyPmLCVyEHZu6ZdqCXXPkog1Gi9UKdxugR"
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
