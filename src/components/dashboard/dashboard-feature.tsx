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
    "3gwxTi2BSwo8Lhy1WrnptYLjoAhuizahrvo9qHMbrJyabGfSceuR5HW2RuDqfjD8moXCw5Pir2ox3qbtSm3gWaVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VdW7UJdtGVkdz7kh8vfwa5h78MtFoePUbe8NkajsAbRUUgeQRsjevpspueMGrbVV3Se5su7Jsvfez45MNCahGge",
  "key1": "cPDVsbvzdZtBcBhuLxAqvamDcKpST2U3Yf7omU8pwehuunRwDB4ro1EbDwWiH2ipUjdVFQqxX7VMBG9ZqLZe7L9",
  "key2": "3d57qQYLUTVHzsrcDwQ6ApyTGZQif5XCavP5r2KRebsaKwX6B1D7MtQ6yoHwKVS2FhEeNikiQyxAiqboBapPB56R",
  "key3": "2EtyhuVyhV8zUWD5ki9Dc79ZZLn1aBYcwT6G7nLHYLityazLotiQCcHYqik523QcSnuaGezEr6zieszBCPUuyaAA",
  "key4": "5N6bB82QabCkVqQPknPGAs9gGFS4CthMXkmu8No4DpHTrs9Xto2pNGFxcDfKYzzPC4gRYoegdGgoHTeZwk2vWyhw",
  "key5": "38NJytWtqaYU384hxr8frjVxuUv3boZDHyLtT4grYd9NizJWugi4W2wzSPoXXbi7nvYeGA4wV1781rWxyVDKzNzL",
  "key6": "3LhdN5LoUzbzDa9X5PMdqAZVABMLRv3vSFmBDziAZahQUShuovvz2w7erCJjSVoB8a3T5uACten34Z2iPe6JgWMV",
  "key7": "6p4QFmL2MuUpg12sfkXXx4odDjmbGHnYCeEWy35RFhntiNoT2z28UsEsAhLT5NDQDtRhbQ15W1XKjW5vC344gMY",
  "key8": "fuA251Zgewqwt9wRQnfMCwGCLg6Q2xhq2o7qrzrqw6fsYQWdqvk4vCz43jTFPAe1YEc6F1i8xbQKZDJJnkaNjUq",
  "key9": "2Ns3Loh4D52uFtuScgG1jPmTBdaskJxNZXjQsXu8ZjhDtHqmVV1kQYjyGnTtAkkS3LsLp4K2BoeycLdjJtfoN2vC",
  "key10": "3Fe2pkYGRKRTqvbcFegCJvQrkiLYSjNSudiFkYg8XrmgkAHby8JMmEqUAcAcWiXWFVoErZQV4LQFMMoCzSM7ToTJ",
  "key11": "3jZUfw6DqcMDXtabWEPqScy7kyfZVANgjh6BCRnqdsw1BTZ2iWdXmVUwXG88Hry9YXX9oHLGfKY4AF9ZbLtcsRVy",
  "key12": "3oCaU4rpdxzC5XqaNmh3eDcQ3vynYGv5kWcu5z3X5fzStZfZjDEn9HQu5JbAQT7mGm4enxMNf6S26SHCm8KaVqzV",
  "key13": "31p5Yn1r84DYcEiXdBZHR8T6CRjHD1pSRdGbKGWHyw5CSS5rGX8XxwsJqpxWEPua8oXzJDEKCvPvjH29EjD3MHdp",
  "key14": "3rJYASwq3sHE6U41zsLGtSv4NN98BAHRp57Q6ZJFCGDJsHhKuNgWQzigjBhGNcLFPoqrJUjUdHf1AoYDayofDAUG",
  "key15": "HErgf8gaThqFkrxo3iZSF8KUSMQwvQMuVR4yvzZFybZu2QuYCMG6B7D796oBEJJAZwJefXkkKV4JXGwF26XsECU",
  "key16": "5qcBVyJ2PAbFmhaAcCxgH2dAegazSsCeEWeahiF58ZqBAEDD8ubi1c3pEC7WX4Yq5VC2FXeteK4phonKKfcGqgqx",
  "key17": "39BJYw6pMMxQveK27cbCScASNZBSyLeATbk7nq1WMavq4sRZCWZorv2kX5VQFGwPcd34SBf86ps8ft6tTggkZ7r",
  "key18": "3FgpVoD48Sjy7aAcFM672AJT8aVGaHauTcbuhsrQuob29puMCGdm1zXFyta7F5MMeMSGAU9w1MjPWqv3Pjgmh1XF",
  "key19": "2ZXDmHqCgUp2y1abbeLAaz7aUPuwWpNsQPP7HFitbxM2B6CjG87qf3JEx1im24jNB4mhC9oEsnxVzX6SFxr9JTDB",
  "key20": "4gApCWH18TTJE5cD6z7CBpNP96Db5eEA8XPhaLWyngfYFrmDvQ1sSMMcp5YC8v363jEvWfk9hoxet1p4jQAxK4pD",
  "key21": "QwoMtMsrK5iTyjqSEadBFye429b7vuvyQ2QBSgcwszbGTy2nDeCeWfcymdbSySavKuYBG5cwyrYneYN3hGpFEgx",
  "key22": "3icLNHaLtki6XGzRNRUEHiZDYswDsjXhZQGvTJGfmFevSwi5t8pky3hD4Bokrxzwfq9boR2c8dD9k7PsNiM5tDh2",
  "key23": "RVn5xgwJCpMnmdkeXWHbe2BEUMs4hch51kzwfGKjm5RDvP2b1SrzJ8D3yo9tRpLfqeGvjBb3kxkvWqCBxs3pMZP",
  "key24": "SVX4Cbe8tVm7oSs6K1xA2s1VYih6B2WoQGLLDgEHxuTQH2BSYPyerSxLBvypmHr3wTytMtKgBUP6tgwQXW2shU9"
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
