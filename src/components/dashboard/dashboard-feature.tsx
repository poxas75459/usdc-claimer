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
    "5MP3JiVj9cGiBYDAkhYkZozhxh9ZH53qogfWmhacvAVeqm4TmhDJqMFVzki1Z766ph2b9fVV34cBqVztnHcsbXjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3miAD9p2QjrUYvc8GFsmkVHwQUbF5hHLJvRYkxKWcEd22y4VgouiDJ3JfePs5h1p8iQH1743Wt7RGEEYXcXqC4Qv",
  "key1": "ixzejfTZF515ko3gZDKGqnhpZDX4LThKqcXzt9z4XUUuS5AfjXq7JUcydvFnX8YP23yf3mVW3htivBqv5TfjWTF",
  "key2": "4FdNusgj6Amz3pyJHMQ1oSPDhdStYyDHVRTTpg1BT61HekUyoGSM5RXVuMzSzXAAUPrzv9omC9PwNKjmB1mJpt1u",
  "key3": "4CD6auE5cDVr5ZjcMwGq2cwnU7LK8Ucd4zY7GSQVuFZAwJkRH3YU8sUbpwAD6QZW8VWECeDPd5GgKLep6pvcpZw2",
  "key4": "41S9WShpvKKi11NcVRTUt9zsBMALzDdgTfDRd4wbGtrn3bXqsx9bJmZy3ZY9KWNbTB9FCFAK2v4LfGxry2HqaAU7",
  "key5": "3uuASKh7gLdKbuEVAtkLhqrDoJdpGuGCy4SA9V5zVKB918dxQrsJQ1pHZWQRFx5z5xurUucSBehNAc8vGiJ1jCAS",
  "key6": "dax3hLtH4o8NMvgBmY6NfBXtkPv4cVVYqtkVucTgw89HHNCUmRQsvDWs7xCtqDRKnVrry4YK3EdTTo3c721Noqr",
  "key7": "38TEGfwr82Ms5igN3XHUWcbtZDe6hKyKji2HCFnyvrPLAfruv7DSpVa42VLB7myev23xp9bdNac4poKgvhSRRj5T",
  "key8": "64ATNboLfcyBy9Xj3Dxba6icHWFhiEpJjAUQk8ZwpUvHZGru3o19j8FUs3h7nx7ihdYtm1aQC3s26ardqN1oFnUe",
  "key9": "3KC5kt8niFTFbFf7ARVdLWSbQCqzGgynRbd5nt3V1AoUrCrxWt1TCB6Uy4v23my1woFhJ8wXmSQgK1gAFwLJmcWv",
  "key10": "2iAL3rYMrZV8C3pMnX9Kdcy2q3C7mjrnFrVuEtx6ZEq7EujkBYv9kC4VeJXMjMom6Dn4pt3P7Sw5TJFB3NPUv3v5",
  "key11": "58qPPudXf2DJY9mCWvwcUmR9D1UFSYDtFeRKVZ5BUucNGNuTKRwceJVriXbTtgGCX17UVPpiavxv2dwLmqjWRcM6",
  "key12": "m2nvnnsZa72QodxpexiapA737GkoLpeJWJTe1SdhiAscJkhwRKWpKzT1te7HBAwPUknuqV61AZnvSfBVpf6evLD",
  "key13": "52i99JGfGGKNfb3xuAiPcvrYWrmzicvDGiJ1XrzDAXSDfKjouYdVk3fYCVLBFgtDwn3odKR2oveCX1RghTarN57n",
  "key14": "4xcYkn93u2sXxNnKWaJy8Z9SPwex4uESY5JGqvDdt3gNV5RDN9LLm7w8Ysextqgqgd8aXvsm4kqZg8f5DUnd3kHm",
  "key15": "4ABfEVqqVtxy5uM85jW9g44oVRpVry8arEdtJbMWApybyTwaSvCz5nwZebb1KfiXUezi6pdQuR4vyfgww1Zmp21o",
  "key16": "5SBxBTGo47Cb71qZ3tRjzomJ2rjkckyRfCYNKryoixnFkV1Aadchss8Fx4jfqCzi26joBEgD9YLLSggy94P2xQL6",
  "key17": "uvZPhYXsGAutL46qzpjwi4MVG7B4tfv9Gwv6VvGRKVUj4JogHYjMcGYSgpJoY2XLu48WuRkAdnf1F9isNLU41cg",
  "key18": "Syf7Y2neVouVpXaG9cWetVVCbskJEBHin6ZmLYpwJfrRqhwrYHfo6KL4ziUXMD8WHRwaPbaHr4mbinRhfVS9Jzu",
  "key19": "3U7W4mTR6p8zmx95y4VbKEHCooiTBny6h8LqnSQEaPfrLUd41wwgCDuLZuWTZSC3qeBP6rTwutCnh42YLvgSGc8v",
  "key20": "61JxbJM2dVi5C1C3PuTdSppMqNphNT6XWzL5Rxtb8c1uwQcom14shqAHHGz4ESjw2h9HRzYniikiXNvfTqrnt8Ye",
  "key21": "5y4d6hPVq8dHXgLm5MyR7a4GPNH4wN8RnwC61SCmRjHZEH3tX1qfrfqgvoMx8iQAZWRka6u2RFaqdVtp2R1X3hJu",
  "key22": "eJvMVbH2tQQahdT8rBjjgKQfdZwH1WnNUsnc6NrrDqoSQCvZPetn1AebiLpxkgEiaXzMMFob9rfYoJLHzhhdxGa",
  "key23": "38NWcHZmupGwLvyh7Ab7T1NDDdUcUtgbBeBZn3sQvC6Hf3adr2mbs1djw8wT7tmjaxWZVYJAe7STZxjhd3NPm3d3",
  "key24": "2FoUev47QABbNHyh1qoD7GGPdz4GLQZaKL4irJ5Ebhvp4b1YjB6i2Y3c4RWB1X8mj83d2BPmG6ua6wqnfTaaiirw",
  "key25": "GDWJGmNGN55b3Ja1aRptptS7DyYCaQiPYLTg8RwH7WPQquwN798F5kpTUK5Wx619Lkt5uTZReFToZqw4My3VuiF",
  "key26": "5dbf7M6YbUUZ1VcjFCf4RBYkD1EJK9Uh77ffASsYs2j6GXv6ftcRbC5o1aLeeX3rjuJTHsXfcxiJ9EiJJPBfgM4F",
  "key27": "4HyKSTTjDNWP5jRxwViwtRV62rrgviCZmJiAc4vvJPV2QxrWfUWpeesez4YCCGYMZVfMqqxiTcVBwTwhrHgBBAUx",
  "key28": "5BC25o131J9T5GdxKe2fACfNK7tt36P2vWg3Pgmg2RbvdJkvsGX8FJFppXYEQvnWNotMwznbhZ8REuhPjoL7Xrdz",
  "key29": "2WS3LeCXwXuYM7uMTAwrHHWgC61822jRWoeVXAoHvbNkrgQxddAd9Qwvx2o7zaeogo58rA1GSMxLPKd7izYVuALq",
  "key30": "3a7yLgYQvLJuS15daVFNXB3sQuGFmAFttHkiDBMskttBZhchLqG6sCyTPRRyzrYzUxFMKy9X5HU3pJq4uF31EUS7",
  "key31": "zBVxhvzArBX3b2NX3BzRymkjkywAV9ai3LJayQYc6KskujazcMWoeuFgqHmmkc4Nsfi71YooSQCh9HoJeRRWT3o",
  "key32": "XUPcDVL2toeBzFqbJoSMtBpzHF5EeWb42ceE35tMoFzvtKRgmXe4P98ogXSaKakURqo1dHBtA1ochxGuPC1hwEh",
  "key33": "5mdUEaVzpbNi4Zbn4TTQruYa1esJqorojqTCEUsLjuqPe2daGGFEmzsDyeHgNsZwdfa9hNeavRx4WgoZdQ64pW27",
  "key34": "24xUZiX2VQ7Lkr4eCBNsCZWRmgV3SkWKXTCVjB9gnB5crnzBJsKE3UaXj7ZEmUbnjfaaFV8Tt1St9t9XkSmix8hP"
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
