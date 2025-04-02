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
    "K95fppiFdy7sTMtzKssjvCmcAJSCmKSpPe8gUL9QiAdRYRGMvYUsqTmevDnuL5UoCRg7TE4PQ8HkQx4ztaAQZ4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sWcWpDB4U5nnkaGnCy4ZxwsrSp4o6A8sGF5Za4qrSQmbpgLVux5YAnrt2zZ9yRXGxzzq6T15Gm487yowTaehSG5",
  "key1": "4Zto8dUhKnXvCWpTAkA1iKX2kpm5PqcCwjRmiaYsshkC1FhaCd1yv66qMBhskafgZ57me8zdUzh2cBQD4hStCiNv",
  "key2": "2Au8RF2r5Rr5yPU3WSyficxFN6E4SjU5oDh1Eidp9EyztmAt7iLF3uRQA5LpPKjrMVFjK4PUFrNRziNfpExZUPdv",
  "key3": "JdBGNendktHg9v2yqwSAgc2AaqjQ6QJ1iL8kd1mQkMHdxmRTEH3ewAJS2tUN9G7AXe7HwC81qfV1ZiUnBfzKJKL",
  "key4": "6qLNvE9Pq6yR8rYZJtmHbHRqUPF5UecJD8UM92AvtrWJMJF4cyPftk7yG14wVTbv3J6LpoLSbUZvftXkxUFUTTS",
  "key5": "xz7QCZJtC7KK9SW7Tx72fojYJKg6b4myscMDzrNSnUNLGf5kXZ9GeuUW7cQDpV2mULqDy4dJtiTqhNTFoUFLfYk",
  "key6": "HcnD5gLv7vTr8UCc5FZFU6asiNQMq4dUHWe8j1aEkA2bxJEk7to11EQbuzVKtGLF8oo4SpaQ3wbVNp8gKccyVqm",
  "key7": "3r4ADBQtDBwpYNgth6MGh23yMxNX1LSeTmWFcJWCy4kJ6FD4shLDUrciFkfRorU1UTtCt3iLnX9VbHe834Q8Z2GL",
  "key8": "5HBZi4ob6pZ6Rk5TMLpyzYmAtYb6mvmGgmvBJhcBcZMtFRZDF52gdyMzSN9tMSThCivQUePeUDydpKSaY7iSsXkJ",
  "key9": "2aniDyhZnZZkYrzcEtWSNyaXjDXCtCvU1eQMxh5uG7vqNo1jbn7tscVEqo8m6PiWNzYaSTNW2GLc5Tnh1Xe9qDWG",
  "key10": "B1jDQP3T4PkoUbuhAhDifFq6cxu5TcZohyYxh1DgAbVz9yum6bM9i9JqzG1dcW9iQtTcyn44JHvrifc8kvAYGj1",
  "key11": "5VHo3WxAT9bt86uwv33JDM5D2eGb9TJBa3Za2HfT9ZJMW37RPqQvF1umyjxS7xgxCngMUu7iQCa2rsNThKDpn8D4",
  "key12": "5NWMotXbbio5W1nmdtSykApskj23bjysyNKY9DuCsYztNi4pXfJTu2YAszCXSLFS1GzC7QvUeV7zecFXwKYzGP2K",
  "key13": "9Lz7PRJsUFwba8YRAZ7rLFh5KU59p29azjKU7SL89tnDq6tz3uZgNoqkkLbCqbvjCT8kKT5VhXhaW8rLBjQUFMR",
  "key14": "4M8hNGGFBa5DeB6EeFifW5115o7CGwUpX3KEPsiYMvBYrJ9u8tXA2vVWiN8HzriS1ujK3qiJvGNogdLbCS6rGJGU",
  "key15": "JyFA7pBLW2SM8NoMXpndnJoWcTu5dB4wa5BHGZ1hHjQiPAF663uTo742EG6B8tRJaRnJnPt7TDnkh2W3tH3J3cy",
  "key16": "2kxRXpQ3M4pkoRUTCC3BdFmc8Zh5pKRCkg9Rx6sVXNEDq2R4vLsMevnJHZ5bREDQX7oTjFPpqinCgs8m45SgzVT6",
  "key17": "2RPEJQetpQEZWU955sZqoZ4yfjYxmkd9ZKFByVkk9Ey7HP6gZ1wfmDYe9nnjvCSSwMainRru3MS9qgEQLT7voHUv",
  "key18": "5oMEHZvYhFVjQ2FWw7oCNmre1ziGdn8Yn7vBrkizKhtLk1XmWeFwSr9eqkXSuWwyskkywcrk1zCSWiFRnskBh4vb",
  "key19": "212FjTEqCu2QwADVqkRxfG9u8p666tDit8knvPJXoAPKyJqC3ojdRuRPB4ubBACT7Vp9RfdMzUNVxkM7wjxp8HSV",
  "key20": "2Ne1wvo66fBqYQvwVeSaCRxudG6q8CFNjTxtLKKuZKEtEuR1XTvafjbYUGURdbyAxnd76k7zEwqWoJFB2cWuWWny",
  "key21": "5Vzn4FE1kzZj8sDkQQM18REpeBRvsrHUv3bP4xsM7ubfvFVH3byaeb64gyCvSs78dpEW65T9xCDPNibzu58vttgq",
  "key22": "4ZydSv5158QHsG6B9zNXqfHtsgTqNpKPWRA8zuZ5HqmGmFbWSqxRhdpbA4X5HjWv3WPychcpAoiPWcxya3j9giNz",
  "key23": "283Xg6sedkeeUukaUsJj2Zp2ndnkYYzZzXiyd6yKrSV2Cy3mSLbj9m4rC57gfC312TcdCBGgraeSod1JcbjSPjkb",
  "key24": "61dpHbS5zZWP7CRQ68AZcccBDhXwhYt7UBVT5sLtYuU7vZ9QoBxXe71TfdfWveeTg8UjGQ5cVk3PhoqyGE7PCJwM",
  "key25": "5FCwshKoWjxjaHLm2BXkXnCazfdmLvZv8YotbFpiGjowx9KMgK2P8bLYQowBifNGrBwkipHwbAV73bajTnsG2iYd",
  "key26": "3Y4T52sFv6mZEZwjGMdwh7eLMfw7gAxhGHHoPLPSurQ4T8XZQ9waMjNgZNYuRm4bKoFePXpFLb7mNSqzqXdJdw1Z",
  "key27": "4MjSLSXXZRFdqvicuAH1GEypGi93TY9Cn9yFkdWtxYQUkpp43RSnEaCn75bn1YvsrDYXB4fVAbhddpF36Px98DBr",
  "key28": "3LdJbQEsoPfTSPPzCirGf3H5cEY54TGPRfHhjwnNAEzEG11jykXhPkbJvHqJeRQs464Evz4akhSMwYnhiCPtg7qU",
  "key29": "3k8dDopXpWYi7F6DnNVuDp3t7Xr5DAbPASF5HZ7x9yEfC8Zk8bHUFYSBbG698QFkKqdQyP5WmjrDUdGQh5SCnqfg",
  "key30": "Fy3vU1bzKTqBYom6FG8Ze35hVpGWEHhQ1xMeHUffuJgptuz4cmFbnZtYHzvVWW82HDwpx1ace49a58asqknMwQ5",
  "key31": "2WWnDXQe2K8KagDb3A6yzrxmfRHSnJyFobFi6L46uHQQh46wMP6ida2HpEVstLjsEXLLY3ximwt6oH7AVuWeJ6i8",
  "key32": "4HfcFYCN1upVKz4vqJhoymnoELNuQ5E4LwteB7tsYoJiAxDNK3qVY3TvheYEituJaPkpirYC9uQFj58aZMeqvpP2",
  "key33": "5U9EfvB2XMAkMbqRCEaKmVU7DTnDB6uvG1v7SAejBg6T4GL8sPDtvVQbVyXd7qJMhfMAxiirPQrQrTdiqsE4Ajfi",
  "key34": "jaePEaxZzms6ofinkCNdbyXxSa8CWcb8eWShDUnLVAwr8XfdpsagrocCY95ehNfEtkLu6iSisVAwJcZPRBdc1m5",
  "key35": "BgacGAAZWiEDW9Pg6hmjNJqc9Lv31Ur6spkpsNUun8ZeP6uY3u1mpJQynsegs1aUAAGLYZZTgWZUTTWqqwmkp2w",
  "key36": "MbquBLEmA7dTB8qscwq4oPwjbbFe8bmjpkWD4rGpbPBdqvkBXxETUsQsRjfJJHfp7d2pmV74egnJhScP7U8fxRN",
  "key37": "262xqcLMhmPyL9XxpCEHX4YtAbX1vj1sBqmT6FEcuqJTge6zHvS49fQ1bg6JWwMNC3U6Q1sykLySapUPNiECCeim",
  "key38": "H7kF8FvBm152fWW8nnh7JWeFxK7CcWWDadWszY3KbXqPQxPNyAVpr4DmE9KBQj55gWv3cVMwe4TxtM7pxqw39vp",
  "key39": "4UaKvv3YViDKPArZLtidLZFom9xXCMhyhMbaTSCZomMtxMf6zj79UYKCe7ixdXp9q9bt9buW2Ay8GeDkk48bijm7",
  "key40": "5t9QCNhqgNUJA5a912fWq5sLqCLtDDRMPu3aU4qcCfx7bNXjwdu5GekU6n6dAE1JLum3LnrNNmUCzknrXztoEdEB",
  "key41": "46RCjwRsgXYFq9Lqe4iGDtimpsJftQFJiCAiDmntyAbdUSUkZKfgKZGMHEmb1kUcq9KDLQacXns9nAxcJmDY9ydJ",
  "key42": "5Gm4yxMbm4RC4sSTQaVtVxt5e7SRorwMCUYwmTgL8aKJ15AxiAeCiSUHrLF5JX6QNE1WYTumGd3Nq9WRhzrT3Ci8",
  "key43": "48ygWCuYeVQFUHxaet4zNRsXLGVknVxJSsWHTnRjWS4wP2a76vFSJ794Hp2YjJDNYcjSsu3evhCaTqt3WvSteXkz",
  "key44": "2JEyJRQUgqXAdq8ye8ZfTtA9AfdaRvRGmtRUWnzdy1WoucyqqHR7AAyDR2VUYW5pkRuFcRJs76XGHyDgVCpHb1BH",
  "key45": "4MwV3vjEjw6KcwJsRP94H3gEQBKnkTP1UpJQgNftMq2xKqdPNndhcgJYQep68YBVVKsgYPjGpiffuz1CMiYJWzS",
  "key46": "3WZwMgyZ7FoeAdXUD9xkczH49zJbv9kzf6AUytWLdSPYC1pFF6jscXvPrSSF7DBi1nZXrCoi4trGcUEv6z1wshQK",
  "key47": "b6fHnTo5ViVfk26LsL4Y1FgTvAZSpVa6KRZoKqqhLRiHVReuo44ig14DkztSF1Gfko13wj2i3GvVsPW46Z8L9F3",
  "key48": "RUPy31ZTfHFtEj6Pyw1HpTC1SwMZ29AmC6NvQsHzq7urQc9sx2Re88YQXv3bp7zVSSsU5sbL4fxhrA24FffdMLj"
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
