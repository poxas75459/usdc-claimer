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
    "5spHCLBaxbwMYZr3fKFNWB4brQdC4NWeQRj3eDb8a5XSzibRwpJqU6Bzy6iz6KAWxmfUnSu1LnewyfgEnzxanm6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54pQHpAAuw8CV8Ws831enNAFgQxdfmFhJTCqj86fisTeyXyWggWa3BMGw4eNPWceUr1Fhkx51r5UFF2EXqUJEht6",
  "key1": "jdLAwCRp6FLBtyGpr56hJyq6bDLhjoguZ3NBbHFEHKiSZuU9JeuPZ4gzGY7ud9hEwWzUErKaMAgq48VVuxo1UZH",
  "key2": "24JuxnCksJkZNrJBkbJZ7UHEfSz4VS6fUFZtaSRQobdVNs6aca5DgKsgAzTKYRk6w26QCC8nBLyQn3P1zPTHnzKs",
  "key3": "4UpmAr6S3m6FHWxtFiYEz992EJ5KqQt9dN9xSk1Uq2TdE79BWofgp1TsnmqXK9Ya1Pyj9vqdh6WEgSpnorvSMdka",
  "key4": "3afXy4xtunXnD7b3Tsv1oDTVfNBahdpLTK7XL9NCueW4nw5YdzwWfrer5xb3kqh6rxgiva7CPetPjDR5fjyaLjda",
  "key5": "4pfMixjPepZZJX9ScXrtaxFi9rfdF3EYYZFkXKnmkKeKhzHZ2dHxBUHp9N5m2GfaxNz6MTnpAyhMBpbdKKB5adMx",
  "key6": "4CqxSTqRf7X3SyYJuHt8f6K9eA9UtZHpEG2L8cMexLZfFrKwMFvtD5JteDKfVsVqS6DTV3Yhw91YnfGSpWX9aGqq",
  "key7": "2HZgrZENNGdmteGMpihYRPDfBkudXXjg8RnUAyuif9YCUKTms2RgXQ4RRtn585Fyy3T9i7refmPyK3f3HmAJC6wk",
  "key8": "5gN56wUw5tj9r9zv3TYCLidMfXnfttuKu5PgfNS6wvtwi6z5H5mg7ufQmaNESWYNu6z1thoXPKsz4rNULSexeE1m",
  "key9": "4GLtUpj5Yhch7mH9TwGBGH18w9XrCVzNk5x1NKgF4R29ee9JjECYbdFBu8UewYFtxLw6d6yo3asVMBKUsoVM2huq",
  "key10": "5FHEhBL9Z5BNg5sUzyMZi7yst2hDuMK5ZLcpjzdhz8x3uirw2JukbLJ7ZwCKpTNJay9gR7tenPbexwrMDMGy6bb9",
  "key11": "37SfvwNj9yR93BvKYxpJguXcnMfLYkxretQdpFZPBQgMxS8ojHa7yYiL5vPReZypN9LgQm7xZ18WvE1zcGeXGEXE",
  "key12": "5k87UA1PLPvUrLB2hA78vnmjJH89c2UBBURuE4g7ohSoQD9zcrkHDB7JppVYh5LNhdKDY6sAcKdc3bfB4P9d4dBq",
  "key13": "3SxzW1C9BmWwqyreRmyfwMhr9jtDWWpCrJo2G4v2UDRsEZKXjQW9eoP5zq7m6n8wRKAz6o4XF8wFMC8Qsk6oCMtX",
  "key14": "43eG2jrehdY9DGjhwqKjf12vaLSG5zVVaNHEF2XsVE21m7LNHkzVue9h8Dxu5Yw7mczxy8tPVNmDbtqu8LXQ73fx",
  "key15": "2vs9RD77buqgbN7qufGXXX4XLxQhwc76fAdxd1oVC2G1e3GvAA2hQFHFiZswkNMbJJ7HEeHWNe5HVS5522ZE8jfX",
  "key16": "2DBKmZqXwZ65WLoUTDBYe44wJDN8g6QfMGJcA5vChSaLHBHcdeoRGTHXD676WNLhgXpiEDpUHrK4KaB3bfHoFXhr",
  "key17": "2Ua94bPReRZRi9CUUjgAV1gGcb2dasAFm5PrxGm49Ht1Zr88hyE1W32YztyQMhX3TRh9KwfyDtutuMHEr7fDYaJa",
  "key18": "3YJoWCL5T9MfVPXjWVajmypDy9rgpQB43hvudPaN4vaNtZovzSUx1bkgDnM5zErw2HyhbCXFToW5DvAPbVregAN6",
  "key19": "5XXTZ1P132rDhQ54R19Vhvq48NMLiza9k2wXWGqDTVVc61ARg6DL4MNBFCyqvRzeU14N3oYFJuPZHKf8sjWSFjDW",
  "key20": "4adHguCobad9LoVWULLAX1SsLWZ36uhcBxSUq3eVC9boG7Kek4zp9Jkf3vCvm5q9jkGM1A9swATXKZAhksKhPjXt",
  "key21": "5ebjturYnHwYqphEHSVoXjQ8MCwge8gYdB1Bra4zg5AQKVLz6NChMDthmeci6rjbUchiNgCvbnt97VfEgjbPiZgy",
  "key22": "3VgSGSZuAp1akgKcEKF6obbeYunMt3t91MqE7DbyaExjK8T9c7Y6bTrmmXGzMpBnHJQEo4uhdYpsPBrj2fzqm9Hj",
  "key23": "4JpEmkcjwQGqxAZMuMkedYXozzsbqdqVJXjqnpFXXViWm6xMrWXRJnqbhsjvJwUXt6txT5kgBjBkUZv4TjyzQcEC",
  "key24": "4eSzYgwe3VTY3kggNnKYiddhg1H77ahQ8NUTmjzGCgnxghwJ3WFKGAA7a29GhkQfWewDF7YBnNbhvnmPX5eWgcji",
  "key25": "4r34h6XULkJwjGfFb5Gwmo4tnFAK2uRe8568DGMVEuT3bcJp4UwLFBUc1C2xj6BrZnQ18zdrZPiY5HswKrm4bwUN",
  "key26": "36AfdP8qmpb2BS9eYmevXVcJ1vTfcBx6QNn364CUVc4uqAj29WZBbsSL6DdQgWJN4pm4xxfE61cteSXQg1o7vpS6",
  "key27": "4s4sQuBmZM2zjR7vB3n5Eaxuqkd7Q3bKjt5tzmoFfgbcntz87pUGwmZaFosdWBhd5x4nYNVfe25qh3AXBozjuTCj",
  "key28": "vxnnDTKA7gm42vdJJvrRXxSTCFomudkkMywoN2WkU7HvZGFZKpu611NBL3seGU3bX5YDBqemHTpExjP5AkgUGZw",
  "key29": "52W7whA64sPkP7eusSkvVEzpoQWzMZnGrZx75YRrYCHEWjFs4HBZr7y2ddELpi2tApv1FN9FYrMyZGEwyhjqyfRK",
  "key30": "5TXgimZU6NGRUrohg3AbBWKtrTeJJM4F2g94adTjtdmWYtBpCE88QNZ3dkP2Xvwc6hG2hKx2KfWsQ58SYYJJhJtr",
  "key31": "36mGpiTUzfcec9bysJsSApLCKKq2rA4Ds1zY6nAWWnYZaUdEbAGdp5HeuFnxdu3baw5Rd2ZP6e6CcRxSAbzh3Usd",
  "key32": "5cdZ17Bw19rXu4JVX8WazNSqPbTmWfRJj2RbisQBK8uxtWZVHV6ptaLjtaDVHgLK7rtgV7GAGktKnBYnEsJEE2JY",
  "key33": "67gR7q4TCzGm9uMd2ChQSsnxTdbho248m9vtxMWhhjugswLbudNH1rkV32hhE4WJA69dbcw6EdDuk7Cd9YRKi1c6",
  "key34": "xsrWMANVrfqDvDihx5L7uMenKAvXyc7K3hEGWEawHGikMjjxRa8jysutsSWvaoD9uM9ehpSpm7hnJFh2W8P1zR2",
  "key35": "3BHCrh1W7yLRJ6zAGTE93Pnwm7MDhesfj9xJgJDRVeAg5r9rASm1AY79GnztbpPGP9rLsd5yHNMcr4uiFV6Bef3u",
  "key36": "5nLdjrj1AKowwF9DmEUniXabDRHfWjumQFVtn7w8pzwDgovKd8253k9vwSH6eR8JDovy5zkQZNMmozVvi9qAKSeQ",
  "key37": "w62xENv426A9neGRrdsr2moStU4vHxN1uRTHNaEXqKvac84ZidG5pkKWf7RNR6jD4NQVhVsDo56a6H66bscvsvi",
  "key38": "5FLCMrqp7J7yYC9CCMsEndV2nZF9AQXBewzwftZunjUgZYY8MMZgAsAtV1DY4885Pmb4QiQ6x5zjoRQtZkf2ae3e",
  "key39": "5EZhSKY3t3ovJPvGPD6sCdZKYJ1rgiitqaDpLbms7k9HDBEbcfawURk8ZCQ78QMox5WwjbFB6dQJ4iSfPAC2HN4w",
  "key40": "2Q4QTP6qAEohV3FY26wRxisFjCTp6WE2sSCN5SXebz6cFcmKuTtBt9GkRn8qDpKYEeNuF77KnavxSzUFdP8NYKDr",
  "key41": "2WEUjezuZa8dimS7DwequjUfLuBrtjvGqWy5Eyp9ECSxzsZBewssw92fth5tDdshpj9bXehVwW9rjkLCYEep2Z1y",
  "key42": "4hjnb6ippzVgtsBy9Z8d8ZfZkj6ZuTT2bYUvh9omgb8PaYDCoTnExg3sJfs8kUteifdE3DyeKuZ24ZWpkQgtXBYG",
  "key43": "GvMBWAMFFaVrGJgoKifBpeyfEe5FazoyBGdBiutuKJgW5CXssZEo8imcNjoKUq8TRPpxqq12GMc1nEZ75hoXSRj",
  "key44": "sfiZwGFMtqypaUczuLv9jE3oifZ3eiHEL6Kfyu9D3uR6Gnz83NaS9qgKhizk7mWMj6e2tDsUZMAGY38in6ifGp4",
  "key45": "2bD5GgJbMHeFsMj6KiasTNAKyFMRErND8gcm8d3FegJVvdi7LV1V5gbUtoST7Cig3ZFYigbokGPyqtM9iXL2Nng1",
  "key46": "3AgDfpfifJHX9DjwBuT4mj4Go8Fv6dFWAvgMMCMt7h1ZZPh4S7ziG2VmshKzo8TQPqv99HcJgYvcC6U3vmdDDsUH"
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
