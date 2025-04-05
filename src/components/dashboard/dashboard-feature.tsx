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
    "4ChF7U9WWNYmCWPMkYzrSbpW5asour3hcSFPmj5wQEywmkjkzSaVe3idFNNr6ywuwuLeS7123nB3UuANTQjrLH1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NErftPv1xdEEjSWGLNuED9dYS5bzLLDjiT3dkgfb2yaxHSpPruyumYJdetgRKBhip1E7ZvAnEzEE4B45Vxoq7hr",
  "key1": "5SnvZtdHw39zubEfjwpc5jZRc9Etr9YhD6PDH5jBh6uRADzn9mE23yKBhMCmbHpNvsDwfzc7exDmJrhAUYjjikoZ",
  "key2": "5hdSk2qTqXaUT1NaGQFtSVnMpPAXtRNVzr3ScWZq53vLZWg3aJ1oPNKRmoZ4vbYMjXnPtRx5NeJQY833EvyW2oAn",
  "key3": "3NvmX7gzjmCsKxqSzc5wpF1q5vDg3sEZFcNXvrv669rTWJ5iaXPncYDxQV2zeRVRESdu5ezXkk3nNaf7E6tt6DP3",
  "key4": "5pSs6dKXDCnSLEG2keAGix7JnuQRQYdQVgWFFffD8Fk8aW7bCUj6A8FNpioki6hEL6ZWhDmiibHPvuLB98YWd97E",
  "key5": "5SvRARJvUjxcbjk9hrYvwxN5WsUwMTsE8HGY5DZ5joyYDj3YT8nmraDJNWfgTPscvR3tuMfaAdx2eWgBvveC3oJn",
  "key6": "2hxq2vzu4mUL74saAuczFMgeguhBrQYVWbcxTqf13jwc2cX9orwQAKdLkixgZrHUpVyfYZjXUgKkuAeMrx2uYGqz",
  "key7": "9QyJoBNjsk5mzeJ5XJWakHVe4jNnpiEG1DgxfXkBc1sDSHkKZm92RBx5RDFQTtJpFXKgk8yLMMdjK4w1KcCX6UG",
  "key8": "2fWFmbbQ6DR1xenYaegY1pJCpRjJnY7voc3uLWZwKHF7bWn4LRUihrDoxC3JBbpAVLSpXMdZkeHqRnUpNk5Vzhsk",
  "key9": "5k2qLLhQos8P7oCxfCK5DFCkvSJNtChjVvBJqdWaUCMixDZB66stY5AXYEyTnv6hAXU8BGvCqh7uDmvcoE9mXdYZ",
  "key10": "5vKD5XfsdDQcpA6Q5PR2uYBaYbpzmHdA5UguZCWVBnAQKjBoax7Qi98Ntw6x4TU3qZgu1EU6Wp6G9Jw73e3gFNEj",
  "key11": "q31YrGR8pQNnJE86EdA2qpoEo3HN6bMMEuphhG5dVv7muf8fwJ9SWa5G527eLHtC2nPbE7a1gevtBRK4fkDvvDr",
  "key12": "3KHWtBiMkV2pA7mR99Kb3Qdo1BiTTmnzv4BzHj49MY1st6z1AfCikHa6ASqXyWT4nApdidTiSFytWhqGoCB4ksdg",
  "key13": "5aHMdzjB4KQxLWqfyTA2GAP57kgAKifjYtq3h5SKriPYzsnsrZ3TCaTUKcgexhXbrG6BsFXYiTGZ6LMouBgkMFam",
  "key14": "4Lw66FcK3CjCXLQZQoiaWK7wyr7y3q81pGA2BN9LHFSReD9ik3f5oMnfwkb1FzvQGQDgF9N2hRjkF5qbTjav8vY7",
  "key15": "2M8tXQyZHG6utZPL5ybNFpzZdvJSXCUwaRavmQhTnyEc27iKuJJfHAWwMatDGqwHtrHbpFg3z3KhYnw14yw9Kn9c",
  "key16": "38HB5eHGLfqRXpFMEfbVGCa4Z3nzBQPuUhttSGdCga1AgMdsh8jGSHf1jsCd6R4FWiMtuDooFRXuBvsq9tDFMVux",
  "key17": "51Kiz5UteZ87mzpq7mq8QD3Gzcp9JCiLW1Wp31sKm6zpBDQ4gRTqz13fBqEgcKa8eydkEmiqZaLtLLNSuFGfSH34",
  "key18": "5Wj92KCgrYik7UW74pMHmqvQy3ojgG3z2mGBvsUYp9oBSa2CsehWbrvJgd6vUUrfm4RKfeYeMcMUMFZLW1E8tadC",
  "key19": "5ZHSzodc9KCbDDS1VPM1K4Gk5EhJZfrd3qKt8WugmGYt6uWa9ojf34DgNBc3kwbi2HGV5e2mmawoSVFsHQrEB2SP",
  "key20": "4ganPen1LWXFwALY9vbhyggZJYATHLw1ssUUjJj9g9Z16eyydH2M6ur2FwUJr3dbyEjt26VKvuxJaTRYg62w3ke4",
  "key21": "7Qy6W1fv1uWk6ddBna8x3u4HiyxcSyPWsuWVDqabzAGe8bPXoeos9U4mdfaB5Ph2edjPgX8z6sBkuy1FBPVrLBC",
  "key22": "4Qx2icJoNNG3gF3su4rDD961P1fZXknw2SFFx5hPb36Kj31SnRT74LnoTaXMmw9D4kzrSxHJ76ST7pRjd7y7nGaF",
  "key23": "2vn3DWo7uWinFNra2XEQnrG1n5BPErYv99QjmdZof9XSJsBx87i8V72jgvKKjdcqLyBYqga8TshJ6vBytjDsGGMc",
  "key24": "2gbnGZLdYbtrpvXF7SHCE35xs6tzppQH8pHpf2iPA1iPfMpJF5SnpiLFdYdQAF3Xf12stj6PEWsuJgF3zDCckb1b",
  "key25": "QATZERSwr1PUmKbQD8XL1KZUTcDo5DZ1NJiQnyPhPVCCwW1u9YdKseVtHC67uuiZYutgkAx97yunGRoD4ozc7hc",
  "key26": "4KczvH3BwN7iDY5hPvDMUNXaQeYYXFJ6d1rzQ8vy2BgT98BkX799BnaaDZnvvvtcrdpgj2vfuvNX9hg6ePmTafBW",
  "key27": "hXey43t88KAeJCFbvGYqTpJHMRuRNX2YUCkivTMrW1UthRJRMiVJ6vNyc1cXoHi76w24zbiSKXU6Xt2goXQN1XQ",
  "key28": "27TgqGDDMpQaT33CFTLnF4HWvjw4Q7yRGEb69yx4WEu189spLceqdjP8UYYcNgAF2hdxaxbJ39YekKydGAeqHUXm",
  "key29": "4EzeXah57foA1uVTiF6Rozt1K4HSUCCFJztyqNpJWt2yXatRJzUf4mft5uMhco13cPWQJG7ZjAsNLSA1iBJns1zy",
  "key30": "2Twd4dXnuQwFadQTK9GP6amgdD8dQvKuwpFDQJ3aYUzJdSs2cvg3DFk3wBPiEbwTXh3FbmRm5HWUMNENFEh7hfWX",
  "key31": "2kCcNGnTmt8aHrFLYjrHkDgpzXoA9BGM1LzfrZMeA9yXhyBt6GsHZxYXP9Fz1jmPr4XiCuBhuauiU8YEuAsLeky6",
  "key32": "4KVFVhW2NKjFHydXhLHAsDGoGDJ4K7VjDbfERB1gz2AbE3p2B1bxmomHQGJL8wZXE9TiojhFLduZsmPEJDKkruBi",
  "key33": "3N3rFCcbvgh7rkw3nrkP6qbPEEUWjB4vSCjY9Hn6kFNjZ9JbcBGakFqzzENQuEpRLz6TZR4pzXPqwybPtx9HDuy8",
  "key34": "4WNvPk6P2wVgiLETyLgXPChpV3L8KmY5GSk6Cvgj48hCUazrWzmPJVoqdNNCZKd8aDV641UNVT3CTPhhyLmYRQWk",
  "key35": "2Hk7oy6hV2Ejudx5ryKLfE26NtnTmm5mPJ13oo91s9LcfSB9s8hK8LQA3bthc2rWUumQNKPkyfsszi1CHosXAwYL",
  "key36": "3ERtUjAyAfPgVRJHFsm2w51bHku5yDPb9GCkuFFnAdCeoVpgpvanWMwKNoDCWQD2qg8Mw6iM4BYoaM3fkoSR4zx6",
  "key37": "5n8aQGnwadTAioWk4aY5G1sbt5KxY9vnNfhVWbrPqbGvzA9vEMo5YupkyR2Uu7DiG1q5BAV3wz8NmiWUqNwVGufx",
  "key38": "35ADY2X6mW4dkMJLzd1x7hYnnmbMcHF9PRbqmNZ5SuQ9j1HQc1UbPAASMTcoVGsnFd9ZxxX97iuFHxcZ8PAcvRdY",
  "key39": "5BKc4gcHUJqH2WUrRakdK97ZXZ2ewzL7Bg1yvBFCXQwxty8QFbHZLNmhdQmLtxKLRciXJTNbZrrr5EUXseWQJ1ss",
  "key40": "2Ht2GUsZUkUUncyAAL6LkjoMuCMJJTCTk31JeeR8twYbBNroQcHJTrADj7YQ6o24d8EQuWgN3zvVCKDDsFrMFHpp",
  "key41": "3oVFkHYvAzqCFXHnUG191onBoKFYtjP6KayG89ip8TFVjihmcnLSb4DWBY75t8Gqyp6ef1WK36GSX8GkLTydCHyA",
  "key42": "2z8C2XQhExCdL4fADopzxWGyRYkycYs68LYy2gaGrxS1vJYbVutvSEpBMpRhh7WVxBVraCTW6Eb1yiQ9qVA1gkV",
  "key43": "4kaEHawNapcVVKPVGJpB8xMxf4JMzSnGWoRxjNR6Krdh6kW5PUiu83pnRn7kWXfDoZkHSapQqLKaeyqZ9xrt2oJ4",
  "key44": "3pr5P6AqhoDuL46mhtmc2BDpBiUZ6SFbJxtTae9zXPw3cj2meX9ysUg9hhRCaksm84fZbmen4rgq51yYdC3zUHuC",
  "key45": "3iK1P1Fsj6Jz9jbD5oxP2R8PiZH2W8D7DXo5ezfhKGSRo2pEEf7jFUKDKf92YXvXqUE8svQRuRgL5KY7nRrUfHu7",
  "key46": "5kBZXphJ7oBrT2tob6bqxof5vSFoMfF2aKhwcWYR4REjgEnzwL7unBkJCT1KDjoxwA2ZrMPpoJghdUuSQuvqPTx1"
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
