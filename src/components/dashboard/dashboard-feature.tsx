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
    "4muy71k7kArBMvSyjeimzaSgQvKeVZakX18SKWbzDyreonNFJjh8w2NammoKvpbx2oqUghzmcfsv3157ULaqcieE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xptThKjSYiVoRDzkqVuZyRFis2LJEwkiGbV7UTLy7NBF1Px8ij3M68ckHPCa8aBGkhzRzVHZ4wZAUD7ykL7DKFe",
  "key1": "4iA75QbzMHRXDeBV61zpbX6z7M23EznqySYdjogr5nEWKNFGC1du7G6bG8Gu9BQyohNFbSrFRYnpY43QLEzkyFCF",
  "key2": "VfLNRVvQDXdZTvCyXaM4Re4TKkiWE6fEsAtc8jhnxeTSbSpvrT9VAXpJwqVsVHqBk6tEidtHtxG84taMiedmBPj",
  "key3": "2QahtU9AXbFobkGRZ6dWVta2GCYCff65wBvcwhCwKpshBk3cXiz2JLUfmWPyAYvx2hZitVi6ngPpsW8Ct1j29GtS",
  "key4": "4so6R1EdFAP4dEAyUE596gSUvnexwjz9Y6qJntYivTuDko3sB6nZFe5xY5eGoAtdJYeshSnjHmMRyoXykvvDWhac",
  "key5": "2FCuy69UhGSumKb4ZEj94hb84uyftMP6u3oNigkz7c9mgdafobSWpWVqEuYB3d6ddWVovYuDdv3bZoGhprYDBiBk",
  "key6": "4oh6qVVuiJenGcTfLyxvsVCdQgD42KzKzFCDyG7zHgegvtxfEURoyqnTus5hkPeQFg75MFFK4zE4XnSVSnpntHRL",
  "key7": "5PUvtjQt9qNyaScqSNY4N8G5wT82c6gtZhC8MZuESjCriWoBcaxPrj7a3P54NnMhXBRfCurAJP83WQoYsgE9MhbN",
  "key8": "FdQNNC8bgZQFZQi29benu1Sa62coteDf5YQr8cZM4zMgKXiEU26APVuwkmkhPNSNnTUzpa68n7KhcSgma65ChH6",
  "key9": "5quunFGwvuiBT5wKf8V8tRCMN2oxrp9mLo64uSmAdT11nUc6cC2xQbkwAR8E3mGf8eaACVEABro5jJiXcniuNjYD",
  "key10": "k9QePAMYn34tdjGWJXm2poV8NUPtFD46rbckZ51aNuBSo5aa4CuR65h2VwBqtMNDh6TFUpib961pCi3ShN1yGVB",
  "key11": "2Z38XoubXnCk2grktmjUfo6sA9unBEdW9QeHg3pyZYGreifu7rqJ9BU1kQJ2f2nzCf4J5sH6GAQTg88YrS6TFshZ",
  "key12": "6LgH6nuA1wakmUXt5QxbEfhALrpi7tc9zAYLm35bMjoYRhrxnV7ShiqQgQrkJvXUVpRjnukMD1imPJwHp9teFAt",
  "key13": "2ebaiiCMm3Bz8ZeqeVFznPQGNGUY4H9opR2rr2733Wb7C7fb5MNLdefqsAE8VrLTiQ8hCPnFkTy3n4k25yMiDXaf",
  "key14": "3Jgj9EJNuSuwcDnpvgE3FFEdoaGfjnZ9CMpaV8XqNjBbjSFLyxgnwUtvqTnTGiJvUnR5nGnbrA7VBh8SPKHJWHHp",
  "key15": "25cfJe9DxuZDTVrStUanP9d5K2yYkgrkhCgVjA2d3Q9muBeB4SyTkFo5BNyhXVHk3PDA4AukcBVnTP9ovSUdodZv",
  "key16": "F2X7uTymzPCArvX7jNZZ6XfAgkKQgJyLjuXaG1yYjnQ2Cc7Ldwxv5CvdZYCEUz7Kp8mSsp8HRHgueK9L4apPK2q",
  "key17": "5ojAbNUhfJD65ZDfkLdQPB5tHgssidYjpqHEmPPH4ApgQRwHZba9iBt7XxD4qnRgh4UVabqoV68VgrACSj6vX29i",
  "key18": "5vVqidWGePK225w7BWETVckLRm8ux3RmRh8jBD7Z9G4qABpJ5amtgiRYqfTGthEj6STi1AsC3rEH7Yngpczayuzy",
  "key19": "2ryFQ9oq9bVtE6L6MLkTwBQxQt2mWdBo6xr3HTyRaQgQiejf2ek86UzaN6gm7uEGWkRGW5Ws8SfVhLJwpLNniCF1",
  "key20": "4oJ6AG4KACtSQu22tiNbvaeizxHxayWnc7RjLGwhzirrTpS3zZG9o9iACCYPaPp6Nmp66FfoEKWXqPu9gZ5m7s5F",
  "key21": "5e4WZWDWxPr1z3oacYsSx5PcSTKBGLV6qDZpuhBT5QUernmK5E1SuY96UJ5bydwpNTKs6DjhrDcUN9569VQh3qcr",
  "key22": "5eLU6PSpLGLL8rmY91Rdjc4bWhvCv3uQ7i6at5nnRYCcz6nUREDjb4iD7kXsH7nMZ1eJL7Ao5K37TATF94qJrVRT",
  "key23": "4CKybc1ENMpkjpegtF6ofqz8DhWG8ZPMgYR1SSoEeLprC4SWnWUYTDuA3qyUNaw46HDAFmSnhmgp3dd78SpVGuqR",
  "key24": "5bVgsj8AoT3VWtmWWX4NWDPAvejRixyLH6nQswK9mZL1z6FdRryGt2wGwEaSEyQMNTfyGHYRUJWUAvBn2yJAMsm3",
  "key25": "2CHctc3vdpE6eSUCTkCkzbgVvxwRrVCGfK3PZHeJTkSfNZXQ5eHZh3V5WUBpu7pt5mUNw3dHmhvAypFbMFpHFVgW",
  "key26": "2d1wFWd2fFC7DXf2cXua9eUsNLb5rFCEUFC1RSLhSYGPsg6N8K8CasynHxYZMKKbRwQRmBLhwayTeCtJpb24uzLL",
  "key27": "2P9Lm2jJT54dtiCv2VtRUPvunMe7mmHdxrWx6wG4HHvpzVGtR1UZ86LgH45anz9G8NnN9LyoTxTuPCB65mZUnUoy",
  "key28": "31JcDTnBmJgZdDopbkjaFKfNdp1XZPCimBNYUe6qYMt3h2RHPWLYdQdusisLNzzXLEtFMdVXaYsamg9pj5YGJsPS",
  "key29": "RPCsVZULRmxTSsHjXdK64NDac4ESDmB3paPnStD1tq4UXcM5GFd5DepxLXKdu3rBm6urBN4XbtfAcZDteda4fkV",
  "key30": "2JbqgKyDZnFJJDPdTrx6yWfbGxztqbnu3SRdC2o6ARAW62ZQ16EgtNo1RSYrcDfHHBXALgSsZZMo8bgU9p2MLGJd",
  "key31": "eXirQxvTh1GkUrDKmeAmSS14QBeYj8rUUwWD4zut4ZXwLYaaqrnuxYh9kJzRSUkT31UP2coWfSSz61a22ZJL9aQ",
  "key32": "4jjYQMT6RNjskaRhDZeUcKEXRxQEHAZ2GGLEpHFhuBQ7er8e5D2kzj51p8h3CA5PZxFrSV921ZKGcw6AWPArh7T5",
  "key33": "2DZL2JnuDxFE9Tvi7jxYAGG5MyGWDD9wZvSB8ERmbkMX23W6kxBf4ibWsjqHFA1zhsdvwbhQdQcF5L63iPqMxpux",
  "key34": "3ADVtgDEnqy6XZnkqNEx7csfrt1ku61wdQTLt6tGVqYxgy2ZuZGRfHQryuhLZMMUqSAVB84Do6jNLm4qxqjBYk3R",
  "key35": "4DUTeuVQwHA1sWS7X2kB56kKRPpn3Pb6ADnX1hxyQWVb8BAkUgvWaQz52W4fffK8Zua8cVWST2s4cQpyohwYWkQY",
  "key36": "2ip7QZUkDAfLkkpmoB5SWvdiB8zbGQyAaUUKNbakwdTn4ZZ1ify73jqr4vJZK63991twwGx3s9Ai8ehw2a5Lk91e",
  "key37": "4iUB8rn5rBUaANzm892FoRCscSSGHpS2n52gqasgNYmds5Bw2F4XpVTtw7ZrQcFgtxfnagHejT5P5t3Fj2sxbZqE",
  "key38": "E6Xt8Ja7MHthFJ8NgNNp527hkQYFx5UWAdmiLKR55uwyKUMD1beCSxHhjyKptLSt3HDvuMhWvZCK1mmQu8LpVY8",
  "key39": "2UFdNP3L1X3xnxstHBez4RxUhRHwx2ick5Y1k55oEQuypP4c9KrthDvcaZQUtpb2SHb8SLT1vDsi1jba9h6onjTw",
  "key40": "gkwCug2RFEWHRu4Hz5BkYaixLxg3ta9rcd1AUnZ8wJAcUm4DHkQJ71oJnad1qajuenYoUFcMCb6jn8kYkbJsQit",
  "key41": "4Fv833pNbcjbaDeMeec5eMtxDKjL4dz5hdAsJWLHFy26zV6HSN9wCtjDqLdb6NZ8AscNCL71cyoApktDDEU4wB9h",
  "key42": "2WKjY5QKKuMRENq9tkGyQbuiytFWRsYHKX7ou672epizp6Xo8ZRcyb5xKqstRUoGXw2wV81oQHGRv3jopa6QqmKt",
  "key43": "5kYrkQ6cjMEjQr8SFVDwRDHL6WfEzYNyciiGeBf4hUaS8nW2eBqwoqhm4oQgXmkD65LEFKBnF3d2A8bKQeWRE8Su",
  "key44": "5jnpEztK38fsm7HhRqgWBtiyLSUfkbYC4ZYEtzD4sNiuRm4XgdFuK3kFrsD24msTat9nBsN7of1tn9ZrCbcJgxiP",
  "key45": "ot6aq2Fu7xLP4Lr6DJP1zguGB2nBSYzw9iWgDzy3Gp9A89F6T3i7ouhFJ5Q3zED5gvoJACXquh4Cze4hb3yTzqp",
  "key46": "4eTmMtDfANwUzJi8JnpGPGT4Gcryu5gaG8XNb23aje7AUoUfacSAagaasR8pEWGwretYh3iFuYrsPUrGqroLyUAu",
  "key47": "123F6cf6S5yTXURqVi9RkFzFPca4ZjrHWn5s1mzcuvSX4peaBRSSGyGu5bg49GYNKiQy1ZyXrgJB1WW9zKShh3Jj",
  "key48": "CHZ8ThUYDLKhwC7oEMcQrx3JD3yXFr9BmJCNJcEfrm2Zu26vbANaCvPgNN77D9MNvAniqZaMerymL8hDCKMZYsP"
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
