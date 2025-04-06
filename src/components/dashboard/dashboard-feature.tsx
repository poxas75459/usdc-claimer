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
    "4JvzqD5xbzthsrgP4uJBDWBnZjr8mveLf3Nz1dbn1KZUqf8Wtq19nP4HhH1Wxhn1DqsADHhGC3CNq7PPMLuJ1nvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ux7MqmVW6vBVw8M1TifPeEckXRakYEVMwSrPEKUSKTwjnAberBgbi1wFhQWjtxGnZRpvejvEAsPNBMkq2GQJ5bE",
  "key1": "4tvWJFgy6zoLLnkupYvBAcC1a9eZZnUjURafEQpmR4865DUphW1g5uomVq6uUeiZRm58Y5GeDt7T8NN8B68V1rrs",
  "key2": "5DqYv3w9otsm7UgXoZ9S3d3hkXXPa8CvDLVURnykLMZSaXnhLjFy33zc4hkC3W4u42qRx5MCXWhd3LfQYTy9r24T",
  "key3": "3udRDthxja3atdoU8dvdiGHPJ8rygZ1JWjfsEPFEnShCBFGLNA1Eqq18N84xhqa3mhfXWAvK2Jam6V7RiqRGg2DH",
  "key4": "2xTAPYBNCr7vFjBWLDn1uYQ2q8csS1NYquG8ZheN53SjykkftgiFRfkhgMew2TJSMv4QyNqaGYVxZV1roGLWPtn6",
  "key5": "3R7HiL9ytB75LEPWXWUF5gPpMnMkYerNhnRRgVwTMpUWCGDXdhrR2NNT7Lke3EcskFPDXUv86YsH9GRac4zoTnKc",
  "key6": "5sFTADy3Q7cZnLWki3AseJzAUTN6GS2BCFRjmRz7XoQxpCLE7AXYgE8epPGzEfMsHp2qjMPvQjzKu2xSQGFgK6H9",
  "key7": "2rtYZTMArNvDSmnoFpehoq1brTn33XtD7syLSytYGujSDJCVGhDYfjvvywhna1PRotFpBg5zWJLp6VUWwgxGyJbn",
  "key8": "2KLgeqSAvTEUbqz6ra9nijFRK12dqHZhWcpzCHCerhuoYk2Bfduy4wuDQhmEAAjUQTu2tzPgan3WFBKfNmYhQ4Xs",
  "key9": "3AzoqfmsQDuTsqUsANxRBpCX5U3FtvtibFuQMA8AH2vrujDnMZQC1qTVJGcvy3gepU7YEvVjMFkAP14PnZPCzitQ",
  "key10": "2y58NcfKLtB3x6u13Yt916iBQFaDB6BpLXNAUksdv9vjBpuvApxUb6BWUSque13g3WyG1yEqtT8Kr6eg7KdFD9yV",
  "key11": "EFdgv57PAwQ8TWuNWjakCMHftJ79G7TfLgkNpx5pu6tLZZ3gnrn1pXCRyjEQzdHMcWfkF893WzT3pyUs9dKk15N",
  "key12": "3wnsVtYs41QcMyVLeXMKQKyGqQD2UmZY2oy6ygskNMija9x6V5LKBMx2dXMkgJNESAAZbmfUH8n24QL6p8UTprDG",
  "key13": "eKfEgg4rhhGtGiFrXb3T1kXBnrmBCNmzZYzvEjANEn75gigi3HhdjECnjfQia4yLBBX1LM6Ke1T8TQbooMm2tRM",
  "key14": "3qzU6JfY99NSwbTejRzzKFzFmGJN5truoGtHTq4axkGEb2JagyjzSwtxiZG8FBd86MBpH73f3gddHxDQ7DpMQJzS",
  "key15": "3PFnR9jw29whtgjwUiswRPksPwtV497DYGgqL43rUH3Vev9ceLUzMhNgnfnnijXTRZhkMXX2RJ7QK8BLvgqVsE8M",
  "key16": "Nx81Ft2PXXGb19qboRmaYYeDYNCwX9HeYDsEEdoySZu4wYy4xm7kByMDkwQZneeRrFRivDJoykoejavo1mCGmtN",
  "key17": "3oLSeJ7uLozPRAgExokzEtdZpVuxPGhFjRpPPerH8yf53ou6CCxQcfZa1s76aVqyiGS6iUMoQW5wc6nqHkJVRuvn",
  "key18": "35edxR8tAPUE2MfpZP9sWM7SzHcZpTGXNjv8vCaTg18BRcuZ3SAuUfDckWmjKaPSny2Urji4tnyKoPuyJEyHb3A6",
  "key19": "4Ua7yjeV4wfaWsK5yr8TZCeQsJMtsvaBAa5NngW6soRxDghxkNWNvYHoPEFquN81vqTc33AnVRCX7sNUgHKjXwJY",
  "key20": "5mNZtXFJoVewnsCeW4C9acjiqz3qCwCq1QkFG8mHfXKjNG4CH3znxs8zhJ6jXSDzfJzMNbqzpGUG5L3hY8Nuro3T",
  "key21": "46Xsy7eZuZyakky1Fho971Ci8Fxr76M8ad7pHqJG3zGw3WV1NZszgeQDHN9n3KvkiVPmyaiyWGXNNB5s7uAdFY9T",
  "key22": "iTrnPHXXxzvf5QbZXpdaHSf8Hiev3VA6KVKJTjpWb6vFCnbpAFuRXbW48raUVyCquS9bCGLMCq2kbVybccCC6HN",
  "key23": "3sKNocdvou35PamDGF8e98GfQE3h2wAfdfKougVfe5rrJiujyyvUoakGh8a7ifigK4kvPYChBr4ey8fZkHthjtHg",
  "key24": "3YgTkYg6q5bTP9fJv9pRG1K6aG6S3Yx3bYT3zBwdRQYczdw23jJp59vt5XZcUFaKink6d4Jz1PYAzjN9QGtE4Kpk",
  "key25": "4istsWL6KNBSkqKynAExSwGFXSvoGarbssApiFaRJrdZgqqx454cz8dhAMVj7xP43Q48zFtAxwrS9LQEuXvpfiRE",
  "key26": "5izcN2k2A2eELmWjzDCgArzcjQta6w7HoP5kKewAsRg9eUhyUEaaNGwR1aXkoamnjZAZikhz5HBorQHoiBZhoTQz",
  "key27": "49Ays33mrx8Pwf5bB6x7VTwsM8titMbdFdf9bgx6aosYGbj2gLGPdBRJhkqEQuHKedTYDMtENX9tn8hXV2SvyUSX",
  "key28": "2wBoVeE7s8iSXxHE2ETpJWBepyAXgPaiHesjsYr7Mnzq144oNDejrUEQToLeJj7xBK5kmDjCRSDtQzsYruDtwQ7e",
  "key29": "44HD7NrvQPQp4Jvh8M5q8JR6v2jzw1pqCFa96SZm7zSawcGkpDMpYtDEYuVNTBM33pJvnSUgbAPiJczooNi6csPQ",
  "key30": "3DuiWJAMmUjQ9hU7Hb4nF2yuzd8SJmVKkEEgZfbeGSiESBMARtwnfHJs4ka7gqCMTxh3eZFgKMcZywYo8NKe9zsm",
  "key31": "64H2KdScHUrTLtBf1QLFd7ipAE9MyXfQWsCBijC3ELYNAGvJSAmXFe7msUaw3HSYpG1enfjoj7Ur4Lt5sEEztDPk",
  "key32": "BjwtChR4J2c25Cqho9Ug6DMiyuMiokwJ42pvbodRWh1kGVVFN1BcZaib42ktWmM7Y5w9CgZAkA3exz6buYa1e3v",
  "key33": "4AKdP6rdTWCuF5c4MUbw9wP23QpHAR3gjhmEjeR5Z2Mx1cYKhw2m736xezSiyJAgLqDWQcrqzVnFE92kokZMzt61",
  "key34": "48qFFGShsWUhoNPWomdgNHMpXx6Yk7p14PuaLXABPsg2hAihzzRnScunuFfRWh1XEVTJYk6s3bPB2MqU4hDKeDtt",
  "key35": "p58CiFXzmZk4362rtHDb7nLUG3apM2qMSptEH3z1YmSierVkdiki21wzhPLQiuB261f3RbzvYorTmk8uPzzZQsC",
  "key36": "3TVcXQksX4CfRUxu9tCTUVyURNg9DAbSc3AhDqs1rTknvgRmHXHyDPkHLvDytfsuuLuKc21H7BZ18pRGNci5FeDF",
  "key37": "zz3QAqz2n87ZQQVuh2wz51hZAXya1T7pJvQTWR4mxXW8RCCKSQ8Q1AYmQURzGkJqMnRSEAqNGKw1izC3XYjQXHa",
  "key38": "39r49s1oxEhG3dEVRTg77kupMjQ6aDJEsMfQULj1yZKcSWGCKTGwiHvHkHHhUqR27RUPC7uYYDKzJz8soq7zMFSd",
  "key39": "e8n83dyb8ba6ciqV3oSZPR74F3i9s9Q7RUUV8wg6WqzAbWQL8tKkrH93gGYG2X3p3RPEqzpUENEvKrhv84wNZqk",
  "key40": "YE2bBEw4JMozJi2zK3964itx5XWvfDAVgReDqs8ZPrFZhWMbEcvc78ASY3BGPwtPTra4JveGCq4oYF9rqSj11zZ",
  "key41": "3ezPzdfyszqVmnZo1MkKuuZNsvYuA9RcQjgYtFaoXwWQBbxo8piDmuLmocGsHYfdJLz9ck9GdjZezfTEsd8HPgH9",
  "key42": "3g4xu66tg8VFi6zwPbeePTUeP22ts5M7Vpd25mvf8w5Kdd13spgSuYBCtpZrRJvPkHFRSyY8hEzeWco4oQ3Siucj",
  "key43": "4LQUtX6tKiLsMc1crAb82VYp1DNuySiAXQPZgnWghxSFeZzEo91TJoUin6d4EtZ6B9zTWkaxhBuhqQQUHxUMwyXc",
  "key44": "4sLo3jxn68sEhAw7U3YRP6inMMi7cxqCovhSLA316KmpZifhLgXCiNf98JtzZfdKHMdPt25njLMUWHN6pw5eD2SS",
  "key45": "676KixLxkWhJHjxfsbnWjRCSxyVnPThnzzgqPevLiAPSJrrBt4Uz72ae7nHo7Wz1oZjZo5kysum384Mufh6FiT4X",
  "key46": "2CSuwDcFYothyi5HG4dE7udAHJpkkH24ELnag2hbDMrcEmaH19UJiVzBwNbCUnVzBncaUc3zLzuxUF699AVH6GRN",
  "key47": "3vmwFxnkpPcNjKNEy9SRh3ios5ysdn47KQLYhLktN6BijK4mxknkcvAJENrKWdH1e7ELzujmNM18oYjngWah9KRp"
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
