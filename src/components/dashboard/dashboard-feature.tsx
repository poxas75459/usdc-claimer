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
    "66yP5rS5ENMCWED4tTjHHY1fasMr9ds26GKHwbj8K3sM5WqiskQwcz41P7MPAN2GCTN84KFzHvZVgntP777jDEBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VEDNWz2yv6j3jxsiVDKHCUUt4ko3vkNNdU3PqdhtF7X2dc8gmFYYZP8ENq1ZBMYmbD9w9ub8X8nZdRgk7CUae2T",
  "key1": "imKX3oCfDE7qT3TCBBEAUxuD1ahHodUiomJDEQ7dWrCJh3Ymjf8rJYby6h6gkPhvvJNdTwW5Uap1uuEmfU532jE",
  "key2": "3NHUshGMeXEq1nmPEg4XuAFYMpfNmZeNwZoAgNedJ7BCU6fiMeJ4BFWQmCdwDhhQA13YRrc9av7oaTCcQ4kmGeTW",
  "key3": "4nm3x4XQgeieucrKfDJAMgt28rKuNQgRer461ei5HRqwLB7wuKv6W8f1L7Mij2K256MEJjqtzrKXRqeWC1hUAvuF",
  "key4": "rAPP6CJu7zRHLSq8DXPyJSewZ5b5VKjqd9vTbEdtK7Nf5JW8P94Gm9wbTxLExqeSQBzpX4hQY45DXHjzXc5ProX",
  "key5": "3P34feNpP3VHmivcvPK9hVgX6qwK43D2FY6HMkqyL7xtfhG4fK4mgdmR3Sc3YiLQW32NYKb5VHhSmD6DMxfZR24Y",
  "key6": "5GHCBDy4mnvjcbc8YMy1znS8v8uuEqfn7uFDWnFgcFQujBiyermMN31CjEuaV7gU4NnyXHnudtB52MqGt6eXJe3F",
  "key7": "21UVWX1XsUZPSQKw1MbLoCLtRAPud6rg13fhTN44oqUoXrwAEFnzBGx85UsEfdizzHumbDDwxV3ZS5Um2tGgSNzd",
  "key8": "32wFsCoqnwkS5nJU5krCBQ5ZkwGR2tY9GH5fwnivst1pUJSwZm9NirEKhw2KJjWyGW2cWWNQmC1e3V8oECCye8Mk",
  "key9": "5d4LXpVQzEt7pnYarttFesoWME9ZsYJEecXUu9nPLjcEUj4JuYAKBc6owMoYWokQVrBGWkrT46QsX6oDUz7oQPxK",
  "key10": "372sofr9aTxE76cQJiAPgRS6nRGHj2JKs4EuFw1CWCRbjRhMvVkezCxWQ2vLJtcbbsEKVTmPVYRbmPgsvWbXePUb",
  "key11": "27uAffn83J5qPLJ23prSwWY4MMQ73S3hbVrpK5X4QktRpPZ4sgy3uac7TaGjFXzSmyzHtsrH26GuFtSRdY4AAfJ8",
  "key12": "5zRujPxRtQSfmLNPkuPZwNkNQeNkh9UXRW2D1zBT96wSjphtDdd7afb3DmwxyegSNAsdvRAzeFyzj3kAiDFBXPMN",
  "key13": "2gUeGg5gKGxiQYwd9PK9P4ck1tQqcaG9d1SZc38vZixWqvahB7XpB1TT19ccsTC8NGygYg6JpCNF5zjHiiDW4K8Q",
  "key14": "2yTwKacFQziVeP6TEeEjPPhRNb71DrH4N3BVCJFtSRdszy8BFsZouXV457Efy97dDRhLUNUGpW9XiACdaxsC9RT2",
  "key15": "5Z5WkkhfVBk3CUvxZbsTNT7CCDkCneis7si5BAGpofo4zVNQEfZRAeKo7HoRByfpPHV2V7VxbJSMw6cUnVdygL7U",
  "key16": "3DcAH4ufTRMjYi8pP1KQmxQHBZCrQBGNdmWhYXBJ2ucAMZTbXZuxfouoNU6b6FLh4RGrEVyJSpNbLuHupwC6FXsT",
  "key17": "bSnCQFxHAFedNjrsduyK6wFZDKXmyCmjD76X9A7y9UhgRfgTsb8GjU3imgJAMVKUK8KCNadH4J3MSCFhrBycaPu",
  "key18": "28uAY3Dv4VJtgxXqVHPKc8V173bZKPt1N8GNET8rxtvo3ZkADX3GRKLERu9m8bgkaoC1MXmiBazw2Y7WSWrowiDX",
  "key19": "5u17y7MRdGhQnQfp1RWeo6j8rqbBTQTXxqW4xKTPkYZueFsrVpLUpZNzUmwhu5cqU3Ctdjde1HxeCnNMdYWkbN28",
  "key20": "2RQ6kPq3UeTtFBWGam1N72NYq9nB7gXKkjwZm26U82ewg55xi9JJAVd2HpagwCjih7d7Gr4nxsY2Li7H78Us4dGf",
  "key21": "xNsSYFYZ7QfVmxEeRYgExTxdrnWBqHicnkUgD2ajoVheFdQNeRUmdMopAvyaThMiqigAKhWc6MjbT9cZ7U4oqR4",
  "key22": "28i7Ar9Cz9r3WgdiULQ1kjXS4wqrpNfAURXV2d8bgnTfYQq36oxbJmWRhgqqeHc2bDKTqMiedMtMW9B5eEmSHu5y",
  "key23": "4FQPDtRgZQucDTpeqy7ovn6EHz37zhKUcLoG6Gnm2GZmJzmfXySgPTQoZtGRvXhvSuTCjAPjkxpTBxTmre9e9B35",
  "key24": "1huUsGCDvAwpPxWB99wWo1bqdtGMQ4bPCoNM4rE9eLRJ4s5mPXHypE6dnDcaNmR9wptdjuJ9b9L6ufYhZfnkzRS",
  "key25": "W3RFesyZtDRJ41vkp1Y1CBZ5T7ZNh8k9vtM2qELSkVhzcrcm4bJkm7kqdPKERsyd48J65qhLezYvHVt7rZvUfpz",
  "key26": "4MKafBQkdS3J5YksQm719sEunpaBy68AVt3qaQKB2wzbzXa45qdnzoWxcQAJjfXnyG5km1UnoPwhPdWoDDnHcAki",
  "key27": "5iAPEhZhJ2gRkVMaHyqEFJhthNrMkwHcneC3AuitY3Q7MS8G7ZcWUFziTqppUtKw5azftZgE84Q5WDphJ1McQb6Z",
  "key28": "5QL5796p3XpKenKLC1ja25eQHdXKkPdhQCR7d8or5SDyQLryYK2YP3Dz9mTXvGgV919ZLFxgExCufwrrYzHdPzm8",
  "key29": "CkMqNh4tW2X64LUAUdPzRPNjPeFmfsqJ3tvTfYqAFN7eQFC5stgD9cAFqT8JB7WgsFk9ug2DSSYgt1zb2irqA8T",
  "key30": "3NYNuGpcVuWFThvVKoCfbkKnt5Mmtfavrf9p5dmbXkjpKvEtaaebeueVAELtvcmeCPdWiGs5yTnJELAMf1cUE83y",
  "key31": "497gjcmj9KVHe8bnWGMm3gNKENrSLDEYzREpeMBorxThE9YzHaqkrUSqRH3maPVrJ7ag2bYTfT2dj1An81YLvCRG",
  "key32": "22hopmFoD6YxwoR2p4Xot7fye9D1mwnr9imFnp12ZWTn1phCfVF9ETa2tsdmkx2P94hDgx31qoTD5kkXWRH7mq44",
  "key33": "57CXvaA9KMdpdXrxkfkCTc8U89SAgg1AqwKxNb3Ase7tnP779c7JDZbTGDMkdR1KRB5mkoXw4knEL19qACsekbMb",
  "key34": "4CyDRUqWafPvrCE6V13TMWt83CKVJsURwa3tC5SnnkYeZsVcZzGy8F2xfi31k4MKxEwVJhGx7jxWJ93R42c138rG",
  "key35": "5t6jB5bnaSjuFZRGw4b8yFQBR5vXKbKuqnqrXpRHamfp33MsWYsbmSQY71WP45ABaBApp9dXjFZ49ZF9yoGoghWr",
  "key36": "4Zkt7P1Epd4AEAgp8m8TLQnoddbf53AgUbQcFLSbsHGkT3ynT6rMZtRgFk6xwJunJqX9XTtxMRu6rvjS3rSUrBeM",
  "key37": "pVpgE5DEHxF2qPeFzxKuWNXYxQbKK6TCcxsfUbRZMJ5EgT2AmgKPMuYzJUYgLT58GP9TCzXy9Y5aGHkPsFatTLN",
  "key38": "4ERWGKYsgTLADsuGhkXryUroDpAeXMHd1JhV3XKwEtjreSGm4iHFxwZoLPy3whToh8YjVErTJdm4Ac7i4VCLj3Me",
  "key39": "4yMTRYsVKPMHgb1q7KPktrCYv1uToyrT4YYgEkAqmsagK2QtsiwJuv8goPToUU4exfRSWQsg3KHCAUN8fja6ExAm",
  "key40": "4YCydd3QaEz3E7thALzsZgAVZiSoZ9Me8fynrVAmeKFeF2kWfeqbrJDZvvzLmcR6SBSjm9UygsW7gnf3tTPgtNLj",
  "key41": "5uFqefDHwtJdLQGpctfCUCmgqnwMWzbvrraWgiubX2XoERzzE21L3p8bH3pd5N8fXNpXyRS3vTMynonDxT6L7kTY",
  "key42": "5ewj3zkx36A4MzJGRufFJ4marmipwF16LTyKJYM6GqvVb51oyV1StgdrqqQtS9kfwPvMCArazCc3YTzeuSCixuqG",
  "key43": "2J8cXJchEez2S2yfqjYsWvNcHL2WKiggVvX15fDFqC1XnUaybY6ZAaDaqK5Bg4CsG23hSY62iUQmun3atFA6NSXX",
  "key44": "2kUHBL7T4DQ7LymAS5mxbi7AYEhVvZCWj8Bh5sk3WL34VNrxKd9UwkaNq3eWkBmyvZ2x7r7xEQQFrjVPza1WdJG3"
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
