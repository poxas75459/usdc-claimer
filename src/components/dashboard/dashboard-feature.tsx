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
    "BJmGnqAubWeebTwPKuxCwoiX3tT8rMwwL6osc2TCoudH3TBAoasJ5oRqxfu6YjHYF8tFqe4DZAmsir9yuZLKFd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wva9MVoGYmsMMNYZu9KKfmYGce4rfEsrXHmFsNaRzL5P5umNcbiKi4Srhf7SirBH8MR2hXXRumSFp4eEkdS6HyT",
  "key1": "3oUV79qMTjwRuuQjAQbzjXxf29m9YzQZvHDHAkx5KHMFSGL3f7Qh3FfoNpoiN9Kb9Q6iirqekeuPX7wbwyv2wY8t",
  "key2": "2bG9jHSo9xDrr7YnF6UDfBHjT7ZoXpCoeRLGUyhQjcDE3SZFMZRQpyCnEbY8aefqPrFBHeZnZoo4CvUEDtLYurjp",
  "key3": "5B8ZYQcwvtfBNnR7gtAk4shv6nNa6yhieY8ziVkZFuHf6ZZsM8HokRavc9qQKfn5iGM8gxyjFhK17WtyzQ7pT9r5",
  "key4": "eASaHzoJJkGdf5ULNE7NQh4ehXCuK8f2C6sicuhkhGJRtaV1uSbqt44cbfK2PNu9SLZzk5LD6BN4MvUAeCqKnoL",
  "key5": "NKSD32LGsB3LQiPy2nzcsDUDPap8oewhLAKdX29ijuv7YK6kS2n2FZnR4U6RWh5TXKwhurEbGuui1kAY7xtBQZH",
  "key6": "3yGUdn8UYHGk1GziGt7MCK3jSwf3CKZ58jmx2XkNCWz9Sp8RXAXFA9jnGSVCGebp7Rq1fbJsZaKbkc4N43bozWNL",
  "key7": "3Sjwyt3c75nbs3oZqWAnaRJKkV6Lvk7iW94q45qfotERKZPVdd2vYNe2qTczcX8QZmWaftcgPhCtnVXRju31bumq",
  "key8": "4Jp57g8AE4BQCNThGQV7iWB1V3DPeqEcZqBDHtm7S8bj4Lehr3RTckroWcNAtPzgmgy7eSJa9aQyA5RjVaK1SvDw",
  "key9": "2WaR1o8obp8oBjhkLyDvuWkQVvAtT5mPkvpSDZrZ3wpdVddLyDeSj9b2NZnDrJKC53ywoAUZNEzAYp9iXvBDPey7",
  "key10": "MK7s3ocBBCj5yDf879tufbtNYnR9fLjaQtDaYqNcSo8LRs6QKAFMgemwFt5oRNoWkqsdh1s3JaNSEgrHDuGMXJX",
  "key11": "3NuU9386oUb9qzwjHZJSQBS8XMGbFhME6oq2WxPCKck5yLP9Z9GPMMQjG7Nu41TPDVa3cD775Z4eKM7VHY9bDAg",
  "key12": "5uu43HcaqbBMFWy19kE99ZNppbJwq1gHK9P5GV4rEuuEUhAj1PQ57yb54mcuSEkRKQkAhNameHhbDM3LpNYPRszF",
  "key13": "5ESPuV5pYVy7197k1wCJionL5y37C471AjPLd6Ay8DDs38BqPG2XuhGhTpsWR2zoMn9oujAbsXwRNBGfuzrPQCwu",
  "key14": "33MHzNzErSYA5aU3Qk6gJiKotfFJq47xVQsZzdW1cYHEEYWMiK7Cm6GuVPTfUemWjfkhNJcA51ToLL7gNFVPWZaK",
  "key15": "477zn7Pke4vsuhUsFGbVQzdJ9WbYPLBpKxbktJu8gU7hYufLhLcrpDrrECVWiMsEo7v9ENp6CywihvaivyTYBhBU",
  "key16": "39QH6pPfb4n3u4edEW7hAfkjUeMqoaBcnKwgoiUf3U2o98XesJTbaPmYVWkW9GYxmxZxJC7g5S6PpSd9pGLJ6x3t",
  "key17": "37PAw9UAf55WUvqm7Gi1EBFsJQG45iQtX5Rh4ygBD3k9STSHe5mRZrXbR4uBmXrDqh51Y7am8DZmnfhTm1WGviT1",
  "key18": "5iTnnsZvz5ueBP8dBYnNBAoWZ4gUiMCYsH5yZAa8XeFpTGcsYZ2QnxVaxcy6tdCCdrV8xjtdVroxemFdRZbyn6jA",
  "key19": "5Ap26Kk8P5pbyL15cQzkXvqSBANQp6Pyripxbi64p3bKLquVtGeYmYxqpDt3XxbqNYdejbUtwpgMv7KAekQjEVs2",
  "key20": "3yEXD5Wct6PJeozyEGHqLo6TCn2sPF9My5deWHPXELbYMGNWQSgxXSvdaSW5W7LGnQwLvHLcm5hvZ7DeZFygodLS",
  "key21": "5ETuJ4w83oZxR9NiSU1mwKL2yKDCZN5FSQZjBBHhiDrqkB2ZgTWh7HdBPjRAEraKsBww7LNTkpAW9aHjzJxnFETj",
  "key22": "3iYeSuEAs9khR7CiUyJeqSqNCohtDJVrNM3vJnERYtWwMBThNgyjjkmGeLtQQ3Co9ER1RksFvKqsXmDgnatnj1jj",
  "key23": "3RA3EHZcMFEBh2XqQgc6Xd9AD1ceuwDzAvwLy8CN6ruNur9PCrbjQ7aJQY5mLSsFG6QHvtQaCUCEdvhXnpQMdq6n",
  "key24": "3oPxhzbM5o6DxUi9EUVZTr5BwtVq5saL1UchBuTvK68FUS5mTPquUor7ZqDdqDHcuurKtAxi1i4X5V72untEoJQY",
  "key25": "GiypVPpJwZhC6oWDpTssjFPkFLNk8tTdrdEHo3VxSKPMqHpTmNWwMJVtowhJ4Jf9MZcatHdKQbh6yvQV2pxLxBp",
  "key26": "3hmxc9c9cJBr5TePpKpq1jhzrKwx8efrD8pcSNGfAYabSyWRi5tBatgv3qTmVFkaw2yGUXNL5o7S7HAZ3XrPFnv3",
  "key27": "2BY3ejAj2KQpokDqDKb8NDqsWvgxHaFDRWhQsyVoHjjkPUYQp29NY2QgBGJ2ZUb8mWvU3hnQ44n9r1jiNQEMpVHx",
  "key28": "EHaZhD7o7yfNyDq7oq4hxm118AJf18RKvkPXYYhndfp31n7avscypVcHQ6ihYrDU1eqmPPbch1oF3EMCcYKxua6",
  "key29": "h11DfF3i8fhqY4mTQUpLWb74kd4LMjAwWkH1SqayvTZAD3BDZ8EthEKNyfQ9U6LyZuhaX5sosJ7HtXgveTa6aWp",
  "key30": "4bgPTVdKZ7mXX64abfpw39fkxQbveJNDArFqeX1cuT2xV6wcNSCRLKu9xdU2W1sz4EquNBfHUbQjv4XVAfCHG8Cz",
  "key31": "4gc7nQh6fXr1Jv8wyEnVFMosNmvVPm64TWuBhR5ymV6uy5SqUSpMKKZBEsG1AZCTZppLU56GTLbZRenrH9o435z1",
  "key32": "5aGbn1RpA1tK2FNc1DFjHK9nQKqQyiGQtsQkoGiKdbXK9igEeVgBV1fQzy6RMh4aEAsQykpwr5v851MSz4YST31s",
  "key33": "2mRgEuyFxMMrjy9yWLpULMGJdSwj2ju5eePnzTaURT6SwC1GCPw1kdaZUMX8o82Roc979MWwxpnsqL6domNV4DXU",
  "key34": "5QdKjsSvikx1jAupJJycE7wfnpLcJkLDmp8VNK3RJcQJKJY6wZc8wofPE7g1CeT7aJDsqthgogZFXEqhr9CQP3n7",
  "key35": "vCthm8Gce1t8NUVRcbUR5DCTXaNA47P6kaEzxaawgiGrrbY2acUyVYfK8oxJA5EQhU54HbVpypRGQbu6tDZj1yT",
  "key36": "5wJAvpEmhtWWQgmvxAHQNbM4nmeDBLZ5PR89MqJyhqHgGirgevvK2iRL8Berwacfw2rHAKiuuCtPe5MHxhMrKQ5z",
  "key37": "3hV3X8BN1rrWhEB83ctE2KnHrbw2Xg3inC6JFqzGsqpW8MwYh3DLrtDrBJCXCSPA41gpRPAtntEpNerfEK4ibtAA",
  "key38": "Jwewzjw7jCki5cNC3s8LRyCSUvWbzipEoeYye5BRG63mCygsR461rkN2DpHu62nqndX11rBRbiPxut3RoAQrRMj",
  "key39": "3DtqsvzVoUqrch9hFdXN6G4UDQ7aPtPmBYizk5YC5rmZuDGfqgcfZXRoDtGoVPz8gRY3dob1tzggMKyucq45Bp5b",
  "key40": "2C98DnaWFTX5Pg5G6RWyVYZ82rNnc9FW1tgAsJM6GttPDbcMMgswGQwX5rdSrJ7YbVM6dkrQiUJWspmYGhzgmB5V",
  "key41": "5gAyrwHiZmAerm5RvZP21kJUTW8MEE7QeZHoRSzTR992nksQB9Rg1PBF6zrj6aJwAKQnGHmyfLqnhLFvv9VeAF1z",
  "key42": "5cgFt7xWBYzeTqoEEwdpHdigEfUKuJt1TceCt537mQJAFKPjPX5916bswj8vD2ontsYA1zM7GqD9s7Dtxu3WnczL",
  "key43": "2PbfD1HZuhPv58QM5ZNyfM3KUL3gUcRt7M7vNt5ukQ8UjS8DdgWiXaTFqFKTM2HpmCH9hweV5DtUPSZExeCaZJSA",
  "key44": "63WWUgdRmwU4feuggT1mQkn5VYytHn7jatTxAiW3EQ2dAGPWsemF4jcSJtcoxAFjLYZR3KHRZjesXoZKq5vqVA2q",
  "key45": "54qurJ9MWjtDCHc9MfrBECSJLL1Y36n4mc4vrPThGyZEUcD2bpbYQX3zVqYrdK4VKSGsZiL2hTp5joD9T7tfSAYS",
  "key46": "3pM59id2PHi8PHF96b9kButehGXaP9pdywcFFEgAg8bibBoqbbkvNhbEjx7RUK93NrDQLeyeMjwt8kB9cSZo3V5D",
  "key47": "3QTMci452tJj7XM64WrMdfJM9neMHAhsqxboXyFR3bugewgM5x5Mc93XRThseUAYiUKuyxxfnK7kpPion5Zjh4wQ",
  "key48": "48uc3crRwhpETVqXhf4bhAaPMhX6LmBrsZRx4T1KA7do2Q9gJ1rqTX1B6HKKnPSR7UFT5XiJuX9Aa7TTMy8gN8Ea"
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
