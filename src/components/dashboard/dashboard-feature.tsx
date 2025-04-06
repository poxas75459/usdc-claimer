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
    "2BiKDAGNPw3PMocmA9TAwnGxkL6xyBMk5uBYVN7XpK8cwpr68aQyNtHQV8fjBxs7tQfsaVdnSd4X77tgTEW5FMhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ijqBJQj3PPfznko3RGLAwnTd95WrwdGD3YKXjFE4JQDWbaqUKAmxuEYYmjBxWiuvsgMXpf4TTLphvds2oZPjNjt",
  "key1": "4uDTZkNTYmZWfHkPMHtKuGFpumbioikQKRicVdgPKvwY1xCzvrYjHX5Y6T46CKCeX2u6NNkYqB5bP1H5D7ESeYBB",
  "key2": "5rdYKhEgurW1NMc777BnSBxwMPukc2ZSaVnjUMjVyRmnbZ5tsQspPG8vcfrQcGsCudrRvRC1DTzE6kHU7kj4g1iF",
  "key3": "nmwCur1RUu63ttZjC3WepwYhk5LqLco6RXndpJkH7U8TNjo6M4ZJDsLvcTsW2vhyvf4uLf9h1QBGAQGu757kd7o",
  "key4": "5JDY3SxcN68tsQ9HMnmi8KuoyMmtssQfER1rYyeuEhKQt5hf9KENrx964FjPyocbU6FdA6iD2a3gqQXHffKGFBj3",
  "key5": "YgAAEU86SbirXtqNqiw4og8aF6ku8ESemeXe3hHeXKwE9TCNrXuwZyJcZJqvCPEC73yKQuGxL4dGFpHp1xSkFBM",
  "key6": "5HAHoC5easF3LHTMe5KW2Fm4gbwZCirvujDKonjhQWesS8sGHzPwwnNV6VM5kJgi9eyjznQvS8eu8M8ggtKx9aL6",
  "key7": "4CXTc3PMEg5Ai1EJUSXaKJVuHbXwazvLdXA1TgVyoQrDvpdduk2Et9abGGX4gmER13i6h8swqtK18RWyy9KuAZER",
  "key8": "QKGdFFqaeR9dNRe9W7DnaVTucjynmqfrJBtLErFrCTnAUj2V7JVaYs8CdTNVMxWwdFkMD7Fxvk2sBvihN8KVwqM",
  "key9": "E6aEE9rTUp3ZfeVx2mNa1yafwhRTjm5NrpPdq48HsnbrkEfHfu4rFWtMSQt31BxmJzq8q1AXGEN3DJdssyjR4uF",
  "key10": "qjozzxPHfskUkebhxVZUqtn1PaGi3qgGajtTpmm2KQevNY9AVUAmenW14dtooc553MgPTnYQuBRGiRbHGoVpQ5R",
  "key11": "22ojDjUyfAHzEjrGGwU8RBjresFRws8QChr7iKeSPsQPFfFBVqSstNGgViDDz6UGNwrXSDJrncvbAcKcPx8RmN6u",
  "key12": "wTGVeva3ewqdks9Pe6sorb5qWPJZNEPiZxAu1uwxSTBgdNB3b1JA5q5npVwfc3GZv2TppHE3hVfXo1j98TJEhkw",
  "key13": "3au2GrHRDkU3Hvd8b6jZwK9VfFhSyTJJR7RV8obz1f5g4jNLGS5DMKunA4Sqcd2bMcgDfEmaF3qpu8jGCNXEQUM6",
  "key14": "5c5th3Yh6k8um8r8KXS4dW6xwBpbbfWZCztmkVdJUVAj3fYMeMKDRC5A7NrNFYagRQDQzFJ7yp1bWzNkKDTzZB7X",
  "key15": "3SwSUcNcXLtDC5mUuJCuhg3nuJ3dbYGsYSrLkY7NaGKBnpRFEsV8udLBvZXbkT2bkc8NZAJ466sLjv611Q3vNgad",
  "key16": "4oNn16eiRb7WrQ8YZMrvUCnuZBtg1mo7bna6KgNT1eu6beXVLbcmdwqrjKNWrfM3Gu6tWWihxGrPyaxfWWiSuPQi",
  "key17": "5agokL2H6heKSsrG634vmFHkYpPgGwXCEKvX252YcvctaPN2AV1jKUcP45gDXSwLHdxQBMA9QhSG9UeZwFCALSBV",
  "key18": "5uafY9tuarrjevmK4XVnR8QXhVgZfhDcDrn6qVzLAcYvhFwmMHe8PJi57UkyMbS52NkmPPRjNUXUhjnw36BvBLLD",
  "key19": "414mtbqjjX7DTeuUUddGMdMWZX7saGPekKVpC9y4JytJswzzF52xgxBijMKix6J3vG1VEGrk42aLjiXiptQBBbEu",
  "key20": "3v3fvTqgN7HTXmhgQSEKbTGA1kpHJ5aMfzVKH2J5aS47s7BYok2Y4QAk9cqtUknwprt3BeqxbhxxDjQrAKn3ioBS",
  "key21": "5XAkum6PRf9pUSpUZ88BZoqUvfiZ3Hmk6rN26jDaaFTrNYnASy9P2tcGUWLrPFHdLd34jmstBprhgNnK5bcHYCCR",
  "key22": "4Mw5tKwQTvV71nRZh9DKY5jYiu68Lb7BzZVWjDs37muv5SJc4vNi5RWXndVSBdd6ezSzy5bz6oGSXq3skkcuzq6P",
  "key23": "2Vrz2F8hzT6Cg9R4MfADdFfZ7aShZp4AVZQosG6i7TWFZAE9vKL5nhjJBP5HC9GeJBMXtvxThPu9VpWoZxS4Kdk3",
  "key24": "oz5LTRT8quysz5oar2uHU9qtR3dKWSHYq2XMPrbmB9no8q5YWZiqTEw4Zj3M1eLanTegMtCij9PGpZjsaMUSP6C",
  "key25": "5mVehJQ5vEadcTKti3FTJfcnpXUKthcGNF9W253EKSJsuvHLFjbHLA8KgCfRcSPaYC2oyRVdaFzyVhkcmDnj5Rgx",
  "key26": "4xdWTsTFvPpx2rrP5FS5JxuFHaWBMkiA3Tv8s5M7py5PP4C3dWJwe6k4ir1r8Htzh68PoBaGBqHS2ZbXwdVbTDaW",
  "key27": "5XRVUuXGpmT2uaRJXatJFgk7ZzTQJs53L6SUzapse2UCHE1psU3SydHDJrnteQt79bYe1MZvvqyPoNfP3mWziPgQ"
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
