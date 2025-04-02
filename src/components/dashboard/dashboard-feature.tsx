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
    "64JkSU3XQRtS7kVYrYfRfqroCEk8hsmGZ1XhnWdWfQWoEQa5beyyn4qj8VbF32BbA3dvw2UHnmysWeN19HrGbSBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n5TqrB9cVeU9x7VdJtLt495FJBAJ7f5NnZVa1DoqXNEJX5unCZHX8APkyddosW2ahxLiMrt33iJGA7JNU7xmX5G",
  "key1": "4hMMfPdDLhiVzSA9ktAmEpZ8Q9XghanVBVMJC5gciRHdzMGQ7oNy3ApadC4bc1AFReFcyf1zm6vgHwna9LwtquGw",
  "key2": "57QHLQsxkcXUWrehcoJYt2XkHbR7UUjV1MNBHJLBAHdH42nHfDnbjRJGMeBiPUSnVLqQxF5hfaFZ4kv38nzPvUtQ",
  "key3": "2ntfd1vrALoAfiqGRSX9vfguz1iSP8cNBEtTwoYkLw5JJaVSExXSGW5SeUk1aDRmbZ7mcETGXEmVeNQgVkrp54cR",
  "key4": "R17YAKhXsFpgD36cRVHTubDypaMkTEChT6qutvvnGvGJ77YqsnGhNEDXfywwAXFn69PyQZLgmPTHPzu5moHjATF",
  "key5": "3LNbQbuN7t9gJF37N628dBaF9Erm2u8ns8e5dAT6SinQCb18Lt4R5C3wZQgLdDZjUNLTxuDMzrEaDh3r5cfiAvA3",
  "key6": "3y5HS2C3JmehoXmq2bv3Ng9u9eHGXBjhjawYQTkZSoj2SBSKTMpivjWAMfLAvGsAVnUAbyhrqCE1hWMV6XEuafZt",
  "key7": "jqVgKtJKohDZt3VgYPn2CvA2CCKaHnf2TJYxJsfUbpwKcvUSTtAQbzvhU71BUQboych79Wd1aiHShgux2nBoQvb",
  "key8": "3LZ4ksE7AYpfckS13D73wNdxCzxS7bLn22XAimwip6hmSV4JH2KgzwTaHMbZc5wKTkZY5ivPJr2coJYHPLV8Zkhs",
  "key9": "3j1QaLXyujPixhhhKy4nTHUnTNpNmyvYqyYD4rNQkS1vMh6CAzyH98x8F4MCbH55z4HgaUKvPpeTThZREjWivduB",
  "key10": "TeRB81UhaB9wuW8GdRgoanK6PAduWTorNDxwhqEj2H8GPFDz1TQX1Hhke4czSYJ97VHBNzXZ5dqZjoU1YDSskCC",
  "key11": "3BijRaFK4WoJo5S1ebjmynoAXunQmKsLmhFDBHW2sUWR4d6SGRBrfYeagMUFHSayGqDDkEczD51ZTuRceVfcxEdr",
  "key12": "5hZDz53j2WyV9Waa4UbKyXvXhdpjVGqFzd1F7nEP9kumAgV7BzsPUoJDKWmMVgrbu8bJZtfavTuxYtZ8nn4aRDEY",
  "key13": "3Xzi3yFEonFWhjf6dGTvQGEuJGLNcsFiyNYWnT38SuUbniYNCi39vGePTe1aBAPEgbSC9Mgza6M9dUurV76tqRUG",
  "key14": "3ozBisF3tEpyQUqVuYZV9d1g1etZpHrfUatJw8ZRwddeJngoTARpBX3CaJTubqwbnpAePMhkimf1z3fZcu497Xnh",
  "key15": "2GVFNaLMPkDthEnoRu1SgX1wjyuGHN7CnQqxnxnPHWYgYvGkHFYJZhgemykekNWtxPhzctaE458Ank4XLg2KAwr7",
  "key16": "4aAEwCXGLGQwQtWoJWu27pDcKijBykH4JP274JdB2JCF6fiJw9WHzS7KWWaeB5t2n5io1LRFb8RnbMerBVqZbv8d",
  "key17": "2k3oy4ky5QnmkizrS7eaiQQYFzVfxhuKt9AGyvnzDsHRjSuaeucL6EBPUSSTQDGfqToVdf4CGVtuo7qFZSm2pXUE",
  "key18": "5XmUAdNz9PQo2tQzUhT4bmjRZuX2CJnFrh1pKYbezeXsG3JQVA1hfKGURJh3TX55DKzgYoTC4tA6ANbxx44H7GNS",
  "key19": "3A775S2FdfHBoXSCnzGyVEXA7n74TBh5V1755gBJGmX65GenLaHDNKVTrMG1YeDpoTHg5PVU6Jc1rwSAy3kvFUXS",
  "key20": "2riSK8nUriajLTEa6wTg1mspXNajNES1GzZbUUf6k1k2W2guDeGrfedJEWSMzijWmAxFyPq3E8YbFmXywA3pZHXX",
  "key21": "2zggYAUpL1hY6LGKTMm38X1XqJnaZzZNNYH5U6WgSFB19aYzt8i5vFH3ouGKCMMdDGvh4xCwkuuGfdBT3Pg3pZgJ",
  "key22": "62z4mHjDv8tUAh2tEtk1L8XHBBKKU9j6iWQFBeHquVEzWaZb5XxauRmgiaUfoAEg3nY4yaBBWHAWkfDPgdggEXj1",
  "key23": "5PpBVZpNMY5qTnEhwHQ59HGbn5tGWdhcSdgKUAnKcQ4zngvxtwquZ48mzpXxmbn8fn29kHDFyutywyyPgGEg2ovZ",
  "key24": "2vfTjtAEkRcGP75L4g3uHESipcvPAjnfPyoErpc1VakHnMYW3JSarXT1KS1LFzNzjLYof18ksjT6qKVVEYY6q6wg",
  "key25": "3wx5EYybSESAV6aotb6dkwztsicwgFziuBnr7J3Jd9tqeh8bnGP35FsFqfcRkBiZvnWn9hyCxh3DdMcwwe481XP9",
  "key26": "2efBKTzpw9oRGZ2u3YfEdzdCz3fda8wjKPK2ueZixX1H5Pg4EPVqxdHDrxmCX3aPfCREYMtTcHseEoSHfn3VMMXJ",
  "key27": "4jUpEroi7Q74gQ4LmGppxCA6smScY7zq4n1cmyPwDXPdc85E5fyAWhu1c6nerqYi3XJFM9QyLtJtq2bjcKTbAo5i",
  "key28": "5DLbTWeWZ34dAR8R76CRjEDPFjmCbiYSGRSszAyJvyJvEztHkjFFvwoCsZ8qkq47Dw1FTdG4jBU2zTib6po2USNf",
  "key29": "2KgKkUJ3RsURmWicfEoTxJG434bBNy6G7FNMB27TEK4ptuM9ZvCvHv4gD96w39NHzhUJ7JUcLsctbfMTfPRQVRwZ",
  "key30": "2nGs4xF29EYBjGEYoVcis8g3UW7KoWHbkFwqNy5f5VxfoBft618MqNeDCUPijsUzkG5BtVeWf2LeccwdF35FWQGC",
  "key31": "51GKvVMJMz2KjHNhwzFCZrdcosoFs2xP976F7n3wWGSnunubmHdp3iGeXaggx4ALAtJgpbxxhYLiuinG5gLrE7yg",
  "key32": "3wuPbLmXq5cdLEAo6DMijutmfYH3qeRmv17NcD6WJq9RqAZgW9NpLjatd7qC845fmhAnPoqkddN8zvN2hdide8Q8",
  "key33": "hSDZzqgxZrX28TAdjtkWmoL8CP6JDz1qTFLkJvRSvqcefmhwd2aLtJ1S9EVKtepu93YBRCcxeJ83zwhdYx7PoyD",
  "key34": "pemEYzoo4hLVFpj5vicpijos9AbjivDU21Fcs3NU4kYkamc5qeWCmo69Jv9DKftdzhy5NfZXEjS7aYAgGy8HCPz",
  "key35": "GmJXnjha4gAgqQpQhXviaseZhhRP2qA1CNqm8CLywDuYAHqWQWdTj5xbZN7R2QdQDi5pwqtXfaSzXVHW8hbNPsK",
  "key36": "2N7HY9jrb8pWC1WCXZXTkKLRhc8NLhDBUVdVjApTMmtgjJRZwgoVQHM2ZdvGWXoY4j2wJvNB6YU7NT4mN9UVY4a7",
  "key37": "5GmGHJqhSPpDQ73c2jNwzR7NFrboveMmzrq32STWHzRd1qCEUyWgFZmB64eYndJrdNDq9phZo4z3gDRfZFwYy9KM",
  "key38": "M3Q2xTNz1Y9gEqn4vyUPJD3zXAJ6YXpLeE7RXT92TA2NuPuRRgrNhZEueVAyAvVUn1j4NCvCQHbrDW4uojgGHsq",
  "key39": "4juU3c4mx6XYNNcS4FkrEh9xM6XeS4kq23UdRsRWN3ZbH7BP46DST58THCEhwwDNNCnv9gc6eB4b4CnprKr3XkRP",
  "key40": "4EgEVTeUShFiEtwujThzAgQyoT1AphFvkEKLZCK9uVxPvdSgqTDmwQowcNtM1MFTSnQXaZxhRjWZSbdXwGtYVXak",
  "key41": "4YCt7AYndQghQVPoJc5U3JhSsV74xBxWj6gdVqnAMoK3fmhXk4eNamWJ1HN8MSPQLjHWATVvjoXbfrFi1qBZwRWJ"
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
