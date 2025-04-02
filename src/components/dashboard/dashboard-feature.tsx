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
    "5rXG3ZetqLBYkWTwfssJnrMepEyvmTJJwN95K93AxLh6MhvjHLTAwpvvrLFm9z1AwvNCSaQqqiK4mwTQnnfwFJ1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Btv1gwTQpgzjgeEFjDqE84ajjzSpq75DfjUkyZoTKZwGezsa9ymeQiRsCMWCmyvFeYPtBDuUeRCkGUJrhTa8PQe",
  "key1": "4bpKVXYWEzoaSUQDZo7H2PbEQkJ57tMmhe1xtNmHrFxVR54Q2dzjmQFn4joF3nJj9SREXaUk5MwFAWSWqUndMVqH",
  "key2": "hJmqRPwQGC9ymoTf4T89KcDJ1Evfx1qT6tTke5Qb61wmmbqxKxFSRzh8TnCM7tk8pDWJCxihhHhn2wbPrERoWe5",
  "key3": "vsEBqYhYhpaHzzvk2EKfZjnS6xtP76a85HvJwEY4tZuKweM5k3iJnbcj5UWhecMnDNcCTsH46qH2MpmGpBKjDNX",
  "key4": "371h9eZm9XJCvPr4AxjYctQvUz36wd6Kpa9XTz6MvmaNx85mNTYqwHPo4nZjwSdgciQwfvbzQGVUAd5uYsGfMZJL",
  "key5": "5FBJ9fvQg4aLkdkq56fYtaDJNi2ZfMfcE5VsQbYgtoa8k4sk2fG9edSb8fXCErgTjsQ87fypheYtEQpTbQ7NZP6G",
  "key6": "2ojF3LppTvQJowdJAUJb5p4JHSei9fd2eHiWQRbtjK1kKDgnzYgamMKvwivdX5A4Sf861UX5aNL97t2pXeBpQWM4",
  "key7": "5xPUiWXxMXPExUzGc88Ytx9aNhQZRgYEiK9tjANkLDSE1KWLus8DKjRyQfLBd2KRLnWXP8BH6PHaVBgXbfQ68Cj",
  "key8": "dcv9cbQhiaoSo91BmRfGc8GK12nLzADrL7gg9tBRRXpd5EQZMLDfpuABBVVuBCu6p3uctPdb376hAEkMpW7g3iT",
  "key9": "4XmzGhNtCUz5QKJbvKTWJhLTmX7wcWnN3iyDFjZs97YC4wkFbodZfdmn1yadDC5LiU1ePzk2wKFpgwipyGvwWuaH",
  "key10": "4H9FswUFLxSUBhmhMYHXFHUeWANeLWtWo8cJuXcKZQqqvycbtct6v2FDMaM2uejixLWRgYjCvXBQXX7SQiwTz6VY",
  "key11": "3gGmG5BRkKQ2zmqFKS95y1NbvTpLVKLFpwShVt7Hxq9Z39susUuxR5mvFjKmetLPeUqiwSKHJevzfvWVqFq79K7g",
  "key12": "3udPWR6oLsJ4mdEyRFw8ZDcj5HwDQ3tT4NuNESWQJk2CVVw6ff2JVXpnMT7SJ52AhYVewWyLXVCYV1PZg7gJLWYn",
  "key13": "5U27aBtMLpxoBpzhfUqb7zqh1ps8vvdPuHkDKg71QzgpESynA9CUfTo9bjdgvJaxR3jEaYP2PDq7BBYwvX398cwf",
  "key14": "4VJS7oKpueMKvA8RAziSm6FiHPVMGwXKmE8AvCpeLgzsDXkS7VR4u8HXs38uyrZD41PhkBasHeexYiWNRYKs3kQ",
  "key15": "4npDPrvjt49kCDVCC5kWNEhUQHt8coUjDu9gia8aCCSMiF7DPqyT5oqZ6cikp9WM39uUVyv5sx5ZuQ3d6J8H9RK5",
  "key16": "2G4Um1HAzbWp5jwDc1gQYFLvWG6pwUAAJF5jtiqmkuNS5dwMJFRXnYTqR3avThhTh5zErFQCqVBjsBmvn3XXhw5G",
  "key17": "54xcrNMUy7BzxPVzikoXmCXgieWzTe9aZ2PDwr6CdpbbWJe6sfaFchQgN7bpmb6es2RaPBLBy159pcjhYZU8x9kw",
  "key18": "5G1HqqSUB6RkeG1keeG4YU2VMqN8D1t5HuLUz84hyyd9Kecgi1FQWmcV9nqgChHcdY1rcR79a5QRmvfVJNbyWBsi",
  "key19": "C6WY67bvLAfwVLpY3Zp8U2raoYXtRrVV6dRAWtpKMDa6pQHk2zW1JwKLBmDCv7MUL26CMf7fJGtCrkwHVYxgvF8",
  "key20": "4sVex88QsSJa7VJbMog8fSNZB5Bxn7qb3Tv9QEmNbuQkKb3S8tUwMDqzWrKqCTh1kaveLVFjeFK54SjSwESbbAgQ",
  "key21": "25Lujs3oSqn7eY7mtfJQX7V836gJFxFxA3uc6TxKHDf4EwaiqZGP2Txj5HM857jymDTsXtwLT4JTEKRQF1eVUbUK",
  "key22": "WekgW9pEFShThd6NkJTDLKxyzYWfDv1qgqKcXLgu8pqgKpPehbZrdspnR1gn38qY4pxmxpGugrdBKnCrn1Nr7av",
  "key23": "3MbyKKMxFrQAaqbbgTDXXyT3LsbX3ADhprHqdcFpqMg8zTKs4k44mqc95yKas9SUy3drq8bN2QEj7mnkzDGiYcib",
  "key24": "wYZgAV1nXzKQ3RCjSF8aFzAPmcPDMuKpZyHCu5LTEg37cneA2FFWmZYEvvbTjRUvNdhYxdfpajQc79cKcvvftC2",
  "key25": "2LeBpDs1MyqUD5UWG3mH1XYp6twwjzEb17LywJsQUhMcFTnGQbxjWdHExYcZCbBmcos13DUD4rEEJa7LtQDuGwY1",
  "key26": "4ntfEfSyXsQn8AXRSam2yBy45BNGGFdY6qqn4VWbpAXjeZCowJ5Ku3cdqth5oK7XTgCF1Q68qyWFc7X5a9tJJ6ce",
  "key27": "4aSohGe4Nf9dr9qgPF7LceYxYTo3kyuKuP9eh6384goAbTaGt8s37hYXjvM9tpRbDvZTYusrN6EWvkReBjtG8uBY",
  "key28": "4URTrPVuZDFYZJdsHNtZz7ATEmzj12k5fd7HyHvMVv8QTfHrxvjnWvsJNWuBEVBt75F6h3LB6A1DLtZRXB1jJPTy",
  "key29": "2DYwnGAVi6Uf1HaNbaZtFyJj4R18EaEp2rncvcYbJFhGtsy5YrT5jozvYg5aJk1XAwrRS4QYaeP6MeGJCywCSBnw",
  "key30": "5Bs1eEiGPf42htDbp3AB34KJEQgjPUdAbVvqJ9uNtWMhPhhNfMfYjQzvbJX22bHNB9Bt5H42HGf25yyMX1Z5vL8G",
  "key31": "48q6KV4bhsbeSHJ8XdTVUJ31GxH45hJvTVq6b4tU5zMJ7TSvuTK5gsF5K9t7RofCuZPSkp2hTHFaeENgBjHPHYqT",
  "key32": "5vcG8sfynhABT5qJvLZEMEuEzjCzghbfKJE2hKFrYhAoyGUhNwM3Fsi8yRtSVd5mqHURzuTooE2zW6kXuPiotBbk",
  "key33": "32FqBQS583msYkKLHV2PA8sKMtMGK99vDPSs8yTFm4NXqGqTnSuzBkREoCg8AqE2q9wb7tqDe6QJLfMLS2SgzAxh",
  "key34": "5kK4Fxnd5xirfYhSWFruGyZUfwVUMsAgQt1jDnLHEcqWh7ABnBgWCpuHL8E8orFHjQHBQW459ziKDKRNj93CmjAs",
  "key35": "4wWWxBqGRwrkFvm67vsmEaQEoeAADJ9jUKmW4TXUEhhwcCzuPZTbkb9L8vEtAtCHhCpHmUFLn55TxPFZZWoxBd73",
  "key36": "59UNozjK4kFcUgNFMhQmxnydJZvpFTwkRCDbhXztSfvFDv3VWjCi5AfmFjyYpD8FQHfatkqansCQrCEJDdLjJmcS",
  "key37": "GgopPQpFQC9pufwMrsXahi5D8cjdB6JsykBdM9XZWfyE4fvs8jZv724vqkZNvgRB4bru4ffh3TrVRNEmWA3agst",
  "key38": "4ngVfFf6xmCtHGuTFan3drKXoSQtoWN7cAu2Zoog9PAoSw5XWTm1KkTbqUfKsNMbQNZZfc2dSmV8HnYXmdurKaTy",
  "key39": "351H2DgGWifujta9biEUpV21jSGgtviV4TTKGKnKqr6wLraccK1zTwztbKYkWcUDeFbo3RHsZiS8eZdPeh181vLx",
  "key40": "2q6Y9qShmeF59X9qRfDp85TpbDkP7JkoUmi9kMzMRMkX9RirEVpkbvY1EKDTM78nF6xMFD78a2xsDpHJDtp5Cwvq",
  "key41": "4CWJVapM3656XDLuDrHgbuQAd5LLM3bL4vjUovTcRvQPXeYEUQ9WUMrxoakTkuzofPv5yvTWqs1Q9yXx6n1vhQRV",
  "key42": "4ZeLMUjtenUs1wKXMMcKK3pywkn4T9HA1voW9X2jRng6B7W4RrzZKjNEt38enJAE38whSDcwtGuP72PQrU3CJweQ",
  "key43": "578diJvcVmSStw7YtVQbzH2bHfbmF9jHabtoabEGeWpmxgkkbFnkwvvxoTojSF2CpuQpQQqWi8WMV8SbC35L6rjK",
  "key44": "3AZjVni39ADRpaw7cncbTLNy9iLy9HmUx3FfbWuyHy5pQB54G18jfxKyVkZz1Wo6m93BuWY72iYqvn2C285x9Rhh",
  "key45": "4XrJcnM5ky1cMEn2LygtJHSPLbs2geLdAdwvNVeg7HsQxG3rL94gNnkTTFLwcYNDUKfGqF1mkrW1NFK3oPhNTqzr",
  "key46": "5dxvkavueAsBSipiPz79dRD7fKqJgTW3A5LFXSsGApmW2dhZChbfNQWTnokgJ1ECiDn5U18kUChKF3Sa6sJUDzyg",
  "key47": "ND7qeT5nifQ4bH7ZuZFBgHRbzkYmWyWZEjTQqTEP63nhHdwUPCb8C86bRGB9qZGWq7pmspKamRo4Y3CS2FSYhLH",
  "key48": "5edwXpCuypJYSiBKyY3YukkP4Jpbj6ngB2XMjKjm7h64SbdMJjGQnSk495eZcJ2Egt7W5D5LkvadSpa9uGXRYVrM"
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
