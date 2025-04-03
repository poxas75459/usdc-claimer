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
    "5m66uo2J924ZfVrdLiqYgLUqGcDq6q3FiLKNeus8gd9gH4zqyGzVZw5zzQkM5ypc99cpjTe85PV48NDjVqfGTZUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JiPJzFxGN6xrWewzHkebY8s1ZJ5fUmQUG6CbUAtemiQuj3Hrzr1vZEFrEjkjhYjhdKrCMa365wN3VVi85mg9XNS",
  "key1": "2YiF5NDZnDHXhs36cPvo4vrcfrDxkVeDXeLeWnvjPGw5FNa77z6kaS6tNxe71vwYUQHVvKxU6CiLx1byrq27uxv8",
  "key2": "5GYE4MJp8GY9KiRa49NYk7k9VRQfcW88jX3xQoTbzCGTsayx7k2jt8px2auqJK9qThEqBTphG85JLrrBDv9V991J",
  "key3": "42kWsruZZ9pvC1eQQd143xT6tKQ19rMk4F4wVpvZar2eoJXxNDxcRLnqqZXuUHhZnvQGFbnBDWd2KAqcBYpe1ENT",
  "key4": "42YZ1mHjmQ2Kz9YNACmuLEuwtkwL9TYtjhoXGKmBW8jFmmGog2zYZNPu1fZaEtFFDeLaA11TxwTq9893sUZtVMzu",
  "key5": "2DDT15bJYE7BmjfoAivt3vRzkAZYXmi2G1SAwg4QE5mGFkzXR9idCduufVgnLqckj28KSZDr4d5RzbZ2zUajJxZa",
  "key6": "3orCsP9jjfVrG9PiiXPwLQbig8uSf3zEAVzfWrCnoHWMspHvGnSThRKcUUgYzhWgs5P7yHnw5Rzv3G19aFBv1T6w",
  "key7": "5aeqP8mr4rkns9QixUNrR22sgcj527ceDjRsZetyvnjbTV1kj5pTCDtPDVc2kUNyqRsPiB13kEc2Se2DVthdKkrY",
  "key8": "3KxJkrZ86qR15QirtVssYev3YAXTqAijzxR8mzcCf5aGLY2KNfrKVLAaK1m8vWj3kub142ZPjnANQLy5XkQHBnmA",
  "key9": "1GnXqifvk6ofdBByw59hDBL62B5URFhbdxAmNR2eNuqXWoN9XYB8rQUrAVBivYSYoBKHH4XPgsZNdFYwA9GiqNu",
  "key10": "4VASFmVrBZeTaBznTtE3NpjFZvQwWRW3BZfBkKvY11sWv2NYTDw21dznYaEDQmQUBxmvxphBNCvhLRJ7Ge4uBHus",
  "key11": "4B3wTY1gLn1ePFMHKPSMPKCtFhckvYdfVbjxYVu7g4Z7uWWA6WC9JS9YNT1etQvB34qH76r12CaZBQFDEBDXpmvz",
  "key12": "3BAqJEKpHChZhATAnYH341GYZ74hCRYDYhmPK3kwgzdjd81JQzeWYoMA2NMRZ9jRZNLPkWtN8mCP1ZZ5qfUcJCJU",
  "key13": "4YDpeaQJ1zZGfR3faDB6gqVfRiCDpV4WVY36qRG2GLeSwNrpZGAQgAoNVounruDBgUG27q5ZrSRV2c8iuirirhLn",
  "key14": "4yJw5VGXEQmVq7kkqoMYb6NVwBFKx3dyHTXRpk9WsKVesJjqNLWcTZGYUFfGRcdzDh2a3FLGEhKoQYKtHEi1brS6",
  "key15": "5rqnaygz8yvXhEjSb4DRRrr8XM8mWq6Bh5Z7omW895iBcNcmvf3utn2kGYHxXHWjLeN5TAWwvrRM7f2krS5pEtR3",
  "key16": "5hyUjfwW2HmcXNrLBVVkguk8fydSa1sk8fHNZRLZmdk3Vir387uoWgsfXpJzG6fAcyp5juun8Ya1LQcvhQdMXc4G",
  "key17": "2oQwP5UZPxNvXytXn1FwzAThNWTb1xSR7Z6H5MpTomPGjsTKkLPHXNUMWHn3hXPxj1mNow39cfLv5FidZuaZizss",
  "key18": "5tXc3tW8yzNswKiKnumxsx77BFMWv6inHryiW8U56yq7m9nabjExCoyhTg431ArrQLf72CqbmbMLPYKpo2jrtwS",
  "key19": "3US2e12FDZmTwbhrJjL8QAmj1zLpz8TFvnXGCE4Vp9ffj6Cbv2RAo1n81H4qyFmfKw9SAfReTRGm3wXyuymeYiJM",
  "key20": "4Bki3r3E9xnyCsVJVRybuKNyRhfn7GQMKcUaRDeCPc5oEQgkXtJxKogVMhCm69ESkD8g6hpi3HZAchfxRuP8g6cf",
  "key21": "4DBEZDhLBPC2heJvgAGUgXvRjbYkiaamNCzRYDscboRC5JQXSmhqbxqQKYsGLN2i2us9QDHSMeLL1RcEN7A6DmDN",
  "key22": "5NJopJei6vZqUNhRF7sLDCBLAuFHfAdPGjqJPwm84iPdAFCswhPvGFUjktXXfVPXGEXH4C8mhumPnwMs9xcppnAd",
  "key23": "hzXexZdFg1YQfTy8QxJ8vUZqwXt2mmhzz8RbB1fe5gACHUPyZzP7w9Zsc2u2AmSMQg2mv83BWxN2zhmDiEvkLXz",
  "key24": "2AfjVLAQe5Sm6N2naenBJVd5rYniyQp4HZtVgRdgZRD6F5HMjE2f5s4dUQuCBafWXWGSLK7Wor6XAYEgkaVrs3qu",
  "key25": "4ifHkwvQapfLdXQ8TvM2biZSgiBW9eFZzvZm8sVC1zKMerVPTdnWkrY1VRaGjYGocYvzs4vTzVABCkVwZKNRzo8T",
  "key26": "2yasqJ9AFqBVWLvYJgaJP7b5UZYgeh5XxxjXvTcMSbysMPCzuC5pqCeRGGzdJNoHoQzFaz6qDrnzvstyywxMk9WA",
  "key27": "4PZCf1CTsStFparTYXDoFQ6q4vNNhe6RGR7A86H2A3kunp6zwJjUAnbs1g8EdQrhh4YBkXNKntVcTNbTet1ZPS8Z",
  "key28": "2btGQXJNBJyRnUbSdfcaPJA7WGdWAJ8XrYMRzvsgqTH6AAtZmSLULNDnLAjrRdxXZqZRRPGb5UPjYJMeWGZVCrSL",
  "key29": "2c2kcE59PSymphbBKvi7V2o2asBgUSrXyTSrAWehQbDCYze5QZH48RfJJaNGXNovoDshJNxjRs6muTgVfzd3fjGP",
  "key30": "67JbWPWRh4bUiby3DJSiJ5m4SnDat9RS5uDVPeh4jYZeUVeQYmp5FvCQ3zde2f9GVFWSvVLvRbGgseM8xsBHocJ6",
  "key31": "3NiwZ1CHbG5nKv9iYSw8LtCw1yw3R6uS5LTvf5vMAvs783zXRnWAYNqdkWC1wkzMpiHknJ6W6TAGxnLAyWsurYz9",
  "key32": "3JCzgyCTUYtB69TRy7eJHzvCuC4BysYSBnBYA1wfQrzfppv8G8gf7EGv6cC4MvXzXp4MkKUyeH5uHdqyRkd6HFwp"
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
