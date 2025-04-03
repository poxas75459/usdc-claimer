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
    "3MmLde3NqizxVnTpRrf3RBtLr1BRN3j446obVow5MBNUddhgscquiBmxdvirnWewR3pMZ27ui99a1ozQZdwLRZdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rbA9mE4r4BJrFbSMrvBxo8k1451FGUpuipTNDY57QdQAbA2LdP5PU4rEY5aRt4jYfyHnvyjDYdW7RyZnJdEWKY6",
  "key1": "5EruUB5hGXxcNBpkdPFScrBkE92ZxEPpth8aRaL9H5X1eXHe7n1BDGWK4BQui3nxT25y2x94WsdVoNBRfdkJ3zNb",
  "key2": "3PXCSjDEzatFdisingqiFthsnuaWeNbSLV4t63f5D4uJMwteq9M4ZKhrPyRY1FipbE6GueQ6fJWF5Skdcu6xeBAH",
  "key3": "eMyp1wUeSJEt6zFaH8ir1MKDG9Z7zwC3QUjq11Ecox89owyyY9EVBwyqJsevp268qVxaj5E7vnUJ1Jv2WVzdcs3",
  "key4": "3Au1nZFyUXgfEARZT823RXWG6qLcKn2p36whvpraHu5iMqUjZGARpqwtHCJncgM6gK4PLQxhsdCk8Q9uJkfnJ62m",
  "key5": "5pGrY5p9atQ4rKMvysiRmZ3RdCRrLMjKWr4LgkumrnFdzvatZppZjwzbiyUL7NhYj3TjaBS4Rjab7meX8uXmD7cb",
  "key6": "3MgFGT47eWP2uxC5QvBksgKoubQgwevFgfVQAsnLyaMZPBEQ63co3wRMCd55kfbisNhPEKx3Nk68zfNf4Dt6NKVR",
  "key7": "5wvWMWHM6fDLBvJudYQP9Gyhx1XFrrXD5MyhgTS7tVgcHjBoumdp7jpuYXSTxeJ6ekkXLigwyq5P2tjMBYoysrJe",
  "key8": "22TnYhbkG7BSC7hQ7GQDnKeicfV6Zy4q7jd8EDqTAeBMXGd57QtxfqTAsngEUy6D8kahPWWeAUGG2af8rw4YBSqH",
  "key9": "537qGngJfrc2SWiezuF5LdV2LCvtozhH2eibcoXKJkWPpYASM13tQjSCSdA2UbvgLwuRY2TnSN9W6u4og85NTwMj",
  "key10": "64LAxCLJfc3hS3BvnUSre3KDzqW2bEEh9JbQXadMbg9EYvSmfvqMU2rVSgH7fgMgj9MiCB47BB9b2bhCMx5XmTgr",
  "key11": "UjP6gBnykErkDp4M8b3AyDWEkZ4XKLsJykyLW525fD6xnByyL46oNmNYfjqVJuqy1gZBxato2Q25sfWjUewm1TK",
  "key12": "4WXNuxBstuvR7ZvXohGLEo3pugWmv3zgoQp8Kkb5uYAe1pMmvX3n2HkLGntTfM8RHSLHy64efR1yfnBeJroUkVw6",
  "key13": "2n6WBafCabT8J2MeCiMfYakWqzeFQ4zHxRMF3NtcizoaNmsWeXFYCQ16jULZM1wtdVsYFhoADgoARvbH9BNWxWst",
  "key14": "UYpCqaek8aURGFNxRswb8p9GSp8GwzWePQDx5KUkHWYPxGbvm2wELR6ARaudCNgVTFa1ejRD6BqhoNRatVA76GX",
  "key15": "4pVfkq1WNHmTSFV11Rj3oFaepvbfUGsiBHUy83JuBhhRrDYNp2TpJeXnVkbtK4R3Hx3e7cNf19wgs5rrzEmjAzVm",
  "key16": "3p4JwYJqaa8M345qxNKCeW7AdAVBJAULi6zKwRZuUQLUVATabHwM3z3M156kxPAfdVwYgy9UrTQ1ZFEfR7TWfA2u",
  "key17": "2sUBjuVe2gNVAi9cUwJdiAMEYSfmzHbpgyUfdVb5uS85vfL95HfZynHBNkYWi6r1gsGi6Lyf48bGSo2h1fpbFaez",
  "key18": "2P2nSxU4auVaZjX2mLW7tLzo8XBHTPWAqjQNY3ys3fpGS76HF8Zt5nLf5EgFwBz2KMzPneLchzyMdgeFH4EiAzSv",
  "key19": "2sYqDCpw9e4H6dQKnMBH4L4MQyojg4gDS9NZqHXAnEuqrUCkdRYFkZCk5U93Mva55emzuczadp8qZLXF64tvpZZZ",
  "key20": "2K7dYEiWkoSeZNJ786FkRKwRsPU4q6aMucTzZ6uy6RvfAfaPPPYVU2nuNmpjF9Y6szZdy9aCJX28biDZMvqZpmgy",
  "key21": "4qwhQQG3A341JyKidoAoGWHGXDxcBjKPBb3buBW1m9yBPg5ouoK8unv6coBhEcJyduZe8qBHLhhURpLGspS85ALG",
  "key22": "2Ez35mcJKmQcRMDm5XtT78kNsUtP3jWLReHzQwUuLqr1U51sUScjZ4V1DhWqY3eX7QSsfTaYSTmkWuWtNJ2VM7Rj",
  "key23": "5wpHZbUAP44k2WeT9YKJkHSARQu13WJxGGeSzwJ3xDaetriSNRbChjQF476LJyi2X1UtzxPpykZsiQg8NHqLkuqP",
  "key24": "28qfgjG5yy1SY8mPYNop9eDFhdQSGSgYvRAxPvNFn2JobAdZ4QtUYBfqD1v2MZ2juVTUwp6eMb6GgtGUNEVbLye4",
  "key25": "4VRy2ePfm3uvHMXutWABZxBv5Ej7wRhepxFzEhnE8R5AtcjQdoJuvC9bwf3vz1GuEfPBnoFbYhSbibtdN8q9eRYC",
  "key26": "4SRUyuGtt9Lg5fsd9j6jJ1sxUF76KXpj4kDdJVpvAShczjnXg2hk4QMNiaRBMAewEZ65hcCwCkrJiG4PYDE8SCpk"
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
