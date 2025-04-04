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
    "2gFe3xtxu7av1affBSyYk4sLDsjcseZdr2j1R2mHnMowTtfCMLNySniWvACf8zAcgXs2it7334iXyzoTxNkHTxYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SYXTgFvqXTRsHZGX4i9zo8tSbykAyMVeHScUTQy8eM5x6NuD77sH2MfyvYSXezUUvQpYwsmA2GR914FM48KG6Ey",
  "key1": "Qk3mU1AH2SUrtrAJfjvpH6uRQAv5xeomnS1cQa5KSEpRP9khEPZiVL6FmqwVyeaAWT4y6Dym5diS2C6AScnL8rt",
  "key2": "4RQ131cm5FRSQbtiVAsZXx1q4tgutMfUyXR8GarF6pQGQCi6iuyVm3z1ymeFfK2Gyi5V2LpmksLsZANFx2RvBNR6",
  "key3": "5hJNpKWk3KKiqJYowMyaqMYGxiJp12JJ2EnwyzUXiFm2m6JsykfPnGMQ8k6WctG8b1FgpPEmZD7jA4oUHN5d2us3",
  "key4": "4uYB3KQ3Bb4RJdRJY745KzbAPkGd8XfWUC8LHGJ6XXDvp6FmJfsucfLdZhJRy3oZSjny5kCbu7vC5yF2hKEZC7Lh",
  "key5": "4UP2aMERBPyoMv8srnH5W5e434Ke7RjxujdJwt3ckHcmKCDHHSkFzH87jv2cDsLbWych6FKMmYyf4HfzxdYXB36x",
  "key6": "4cMCPeX49PHjmXnmCFgFJyqTK7hzhYwf5j64hdnhQ81UQDScLakA3CkgCDxGmXGd5DsJnW3GmSqQYWhGJCMXqeP9",
  "key7": "4js1Xg31MawaESyNRqmQbq2NtSmt6SykgUGw1njUuV1GGENh1honbcEdSTYKrCuaYdEYVz2Q6k6Qzbd8TR5BZ6wz",
  "key8": "4TL6PZ65gxi9nZLzJkdTwMgstWMG6Z4bhermit6uVaMsLEF6uaRLYNyb74h9fZgP1FFLWAWmxHdhDUdCNV58Wm64",
  "key9": "4jJTJnPUW8fQGWNh7biZVtjp2mDNSND5pSBVgRq5QRw9HdxVzEbsrjBbhFVxf33ECgbDywxN4z61i7ec6sgK3iHb",
  "key10": "4swQfqtMbXXp5pVGYHyWd7NtsdbjEZPs8ZmPKbzjV5XxZgWqq7Pi78vECQzEvMfwRTmfhYL8PMgdzueDkW2VLoKr",
  "key11": "2UvzDRyH3yYiEDPX41UqKQe9JruwBAPoixg2e8aLWatYfVFgn6X6C5B4cytpwiMi4bMxCRZcPwTrKa2XjbfSZ2sh",
  "key12": "3c8TatZsV28SnwdivAJchnuB2WDhFGVDE8SRz27ErRXKW4ps79gcQdBoc93JvGgQhij6cvb3a2fU1VRjAJTACDiq",
  "key13": "58hBak13d7q2GpijRiYCgQhuHdh8wCAdiFcEh2GqpmZmSYaP81XzDh1dRqwphq4cdQQCKnmYSqDxsrGq8QdLvFSs",
  "key14": "4Tk3vzRSijxwimcoQbxXv2V5tJsAAYv5Ji8eMJ9utU8DZD4bEBD7s8Bbgv3TAFGHwtfjgu55dsXE7hfp1Em9JV5c",
  "key15": "2nYqZWLcUog16ta4Gyp9Kc1c7VTdL2QNHE1nqVqQXBozFPUZAcsKg5j3NzRGo3e77kivvnv6GYtKCR3avbhAGjd8",
  "key16": "5CQ4Z3Lzw4ERk4VmLaTC86qm2RT8TMqAreKgRJRHGoLncrcnW2hVgsqjtYFg5wPc7xtdUiWSnF5JAkCTp5GdNb6c",
  "key17": "5FBPAEjhKrwrFGMWnNz1V4Kig5dKA11gwszr31AmFLksJbchQDiefWiBsKWpkkuL4NqbetgRq1QJ1Ybv5E27CxVE",
  "key18": "3hZwSyGoynrMNxEtS7eNPFzpHSDUPWUbeshgprfrRwDvr5ULfLe72SwC7ufQQ81EEoDaaCi6d2zuJG18dtfKz3sR",
  "key19": "4kK8YeYp5mkjD1b3rS1LsjsseCCsBEkX64MpJGPR1HMxXHLif1ZQDx7T1Uiy927g8v45xoi6TZo5NzYbgpUue9yN",
  "key20": "9Z9L2yZmMybrXDUwX8m2f22WoSSrnRBSV1a9yz2nYuzqS9s6EXTDeadRFvGxgAsU2vzHewGTASaXf3XwyJoRCoy",
  "key21": "fjfqUqkmfFRGEo8P3iVEfhUhuHrFKLRNBybGoNZ8KTGStRoJ2HEQdkSbSu3UGXozcVYPUYnHvGFz2BKqNanhwAZ",
  "key22": "61UqEbjZ8utXvJP6NuqMecxXCM7CF39dtTNd2bSGSq2Xkrbp8EvxU8bhk6s2kJhYFEu6ZXCgQrPUVTtdvZauAVyY",
  "key23": "41aJ87KWxMQexhsAga4sEg8buWoJU6Gr2m5AtUBTnt42TQ4drhUzSVmRHouWfMtYAu28YjcgRNUTbRjjr8tmAUc6",
  "key24": "5bSxEtXkZrz16t29B7oUemBK72XFyMvaxPhaxGbueTmJQdoAn3Sp42VM9g1j3Emmi97zdtnePoaNBgZ15QrTkYsG",
  "key25": "2s2pUwAtrN6DByHPUQVcsi2WeTgFSycgEuFb5U2of1BSM8AjPsumkZPUPszURWoQSWE8DW2SqEBrPujq9GuV96yo",
  "key26": "4XwmhGgfqcW9HyKnQbwK1FRs1oits7adHCdT6NTg71wiDbv51ZmTRTrmozPkaTHSZi5iagH1dNmtsDhE7deA2aZ4",
  "key27": "5zP792nKtNNsUu2RdjYnvXnHU1rmaBCQp6Fibdv9gaEAXZB5NvUor8Bm9QzAWPPtjM1m3oh1enUp9dDrnBP2pK1g",
  "key28": "222rGR1M7AqSBNE86Ua5mU8snMNdyC6hRtwmSc9pv9rujdm1YaVR4EP1NVDWsbbKMbAHbBxYYx5T5LHrkRGxUdVv",
  "key29": "xnSCFsMfhRXcQKhYcCMP9GGG8qfx9sKa97ucYAW1hC5uS3G2LVoWSnn2ZEnYEbBSVdW2a1A7LE9aoo9mTnKYsAE",
  "key30": "4ASN5zZMK9xT97VvAhd7VndxCnGe9UeYHW7SsSjpwnxpTKA5tw7cbXoNTKXp5TFLSVquck8oKaRioyvTuGtNTPm6",
  "key31": "3Nd9BJoysUy2gZmzHnibihZtcPeRM8fYm1PCNPKnQKEeEFKX7Q6excwCwWVWDjCZ7jQ2iASATpFdhdaEJ8wWweik",
  "key32": "3NXtGhSWvAiiG5qeZ88AgrU4YgAuZrLJbiuUSzDve65NRecD35ynzRUemooC7P2wGiwge8mMdvaM4NgUEyeLSSJE",
  "key33": "4uqZMTiC8qaz1879TrHcx7KhJ6q4EyiRtDm3T15z3zfHcA2tsTcehiN8c3KeuAJv6ScQDzwSzBKeEyLQTD5xHPoE"
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
