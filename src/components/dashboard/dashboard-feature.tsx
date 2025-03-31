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
    "46kdn6sgqMqL3savZG5pejS6CX6183AhVE41a9KFA1xAwNnQ8v73qTic54PfvLem3vinbh4zGUk2jtpZRbR4GVFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SVUWpLQT6ipWtN9jZQjffRjgcV7WJKDHMRJSL7ajXyf5CpZzEfmsaUwKe8EwUMy1jK8DwSGc6imxL2he9Zij7G9",
  "key1": "4pLZLQmuEzrSYFxNFq8SfH856FKo1qujUnBnmEwr2cYJCu3uRFMmHZXFMZFudHMuCk93AWEgNz5t8oGcAxcptV9x",
  "key2": "5K74HdhFVw6UwS2yMxVKkn2neUnmxg3fmNQbVaeANki7i9eeRBucYXKLScmMJEDuerd4A2F4sCFCZ5buX6ZWPpDr",
  "key3": "4cw2jH2PvCva6M1C9FuwNt5cjmGSLdY471fufLvRW29dXcNz2cvHKQKgWQSHUM8uo61unNDS29g7XcpSza9Vg2Xu",
  "key4": "4fcxF7fyaznB3PNZDQjukyKA157N12kCbZJJ6PNdxDowRkt3LgRfUYH53Tti1qmkyM27CEVuMjmCGfXaDbSqswdW",
  "key5": "a418EMCaFUjggPsLCTGZJM8nwWw1u44GhAEirMnSjupRXUR1anPEZ1w1uFKiMC5uo4muj7ax2XL9XgVHJSCsUTe",
  "key6": "2YrphcygrUz3nV3h4zzNn7Z1ZbNXVx6GuMyYbXoFYtHR2Xzevupz7sMmucZjPMSxarYz2zWvYiCVB1Zkkw4La2mY",
  "key7": "2ZHdbR4gbwUG7f1wxX1xE5CQPLKKPTAqj1zbPLobXVAYTkBq3C8mmy6M49XVZfEvhpXobi2fZpuDAWsoP9GqqU4c",
  "key8": "2LthAnNDLFFqY1qnSaDT2xReL37VyP3HhbE8jVLz7yCeDma8PuA6y9LNQuAUkJMXNMiBccRS7uf3YNRhpF1jzqJG",
  "key9": "45tpvUGHGZLRnXKK33TZMsnbYWcGBUBoKHAKJhET3qNqUqAoVPqJu4wZVcBVmuwUZujAzZ3U9BmivSrebhKA7hx7",
  "key10": "za9nYz3Q8rGNLyVMAepAybNKA13GHnCySUa6U8jkUzBqAdMBkuDAxMdqjyMQ1dhpuNigUzSiGHv7x1GRVuegMCy",
  "key11": "Xjj9h6EQSZ9CPNM4XYMdnyKx6CcyFznoLrCVokwj2LSeVa4WtRtEMM5yLQuufAXQCmr8S9EpFPYQn55wxCfAWwR",
  "key12": "3zn3CUrW99GGBq3X32mLouUeX1DYczbxeaChc5WLek5HntiJQJrZrybQ12wv3ZQduTVDfwrcef9Wc8FgfSZPXg8W",
  "key13": "32jBWyU2jUg32QZYhxo2cw84WPCTr8rH6VmXZspF1MqLWurQgCvWyjYE8Jhm9LSAcq5AKUuaPyNX1jrfUPWkFh4h",
  "key14": "4Rckn7qxLxvAn37rLvCgpGk88sPJKPis7hPFJPR4pMz7QsvPifgmURTkLLGH4MmxzQCp53fDF21HCusqxm8ovScn",
  "key15": "61avtxcCUV4zChWxrvX4uHFt5suNgVurZt8p5f2fe4sDmZ9yiNX1Hck944dbwLizqFoJyykorgkKjeJ9TVJC1cgT",
  "key16": "3gTjCgqXGAzc6bGnQ5Rbeg2oDCkwX4Kj4XeHco8FLWhxkckijdE3EEg6jZF778LMUBzvVpB3wrrSLjhTdL84mTiN",
  "key17": "AsQjFcLp3WcE9hyTPQW7rdaXpU3qe52g7Euva5pVQHPfGrTnepoCfvBhgS2ivaXvQ4ZiVubH8GfiQN7MBUDJYZe",
  "key18": "2RPPhkFCfwS34UYqbt6ZMGjXf79bQVnaZ4c4f4q3Advw9iMszDhbW6PEWpYxmf73HghuCRYnQhkfK6SRNLwAgNwE",
  "key19": "3cj745EfzCYNgrWkgw5EsoaboQnTGv2dhyq1LzUKyoEuyrYL3BEqWNtwrTRz8uMpxX1EmLT9BpGbRGV72DogRXQf",
  "key20": "3yiffJJFntc7WoERbMqeUtujgCrKAu8APcNju94FYaeaXCydSEdDVbeR51bM5sL9Y1bD9Eh21NbcjVYWBi8T3Yb7",
  "key21": "DLg7aNLinZ3bk1crvy2NFQgdraWmW91YNQURh1BbisJQmfZrrEvbWU2Mk8KGG4MFjieJVPEeR9seQb4RYufzGma",
  "key22": "5ssptGaKnqbnaYz5djfxrixPjA4TN9WT8rV4NN3ogSanH2UrQCAfrZyfkvFMR3NKLWBfhdVvMdobtWTC7RuiF7Yj",
  "key23": "53AxYUfDgu9b7jAqdMhb7AWajzss94rLbwRk2iCVKTu1EnLX5oqBKP11NC8cxtUcichFnUkzMiVMPEHzLpgjdfNi",
  "key24": "4dLdqiprFkjBjMybki8DbzH5PFacmSUvuHukzdEqMSBXe4zGho8k4N9MCJbvyJpNMCskm5XCusHPcTTmyj78oYDQ",
  "key25": "4H735hFqsBdCFtVbr5tDV32USXJXKv9PMCdzHyWfjEjigg59WaKAkBSoKfz7bicsmW7CQQtvLoWaj5C249xwJSCh",
  "key26": "4oc3GfrKTnyk9eJCgnM9Cu9Bnf5krfhLBpBC7G13iDdLdVK9Qv7BU9LZr7HtFAaMDrxHhDnQv5JfZvwmLCKw2CBX",
  "key27": "5HebkP6CGndGzgpWiMxnaATEsYigxEiLwo3SQ5tyadGjdFep9ub1kTzacFE7J3R3GwVG43pFJ1HxENtuUaF6u4pE",
  "key28": "5j7BQPHoLgExS7MCcJ7eJkQTcp6qaNJ22ZG1UTVv4y5zas6XnHiGzNUWsoFFjxs2HFYfq8h9pDA9MtmK9Wh7XcRc",
  "key29": "d54AwqfuLxFarhcucK43ErVTSzW8yiGmtRyRNJ7SmucWCnnbbaueiN66gXvse7pviLZHt2z3WjmJJHDPrf1AYu6",
  "key30": "2Wuq1FCTojgsnyn9DKBonPRCFCXSm77VX3DUeBqi15dzTGdBeqqGCybw88JgcRrpZVJts9nJYkifdMJhtDs5yaoN",
  "key31": "2nok1y9b7NEBc5N9GTTANnghtkQ9kyfzC8pbSYmaAQedKLSNUYTisZroU3YJehiQXYDQ1LXsRFrdQMSTdAmoBwNz",
  "key32": "5jFDzXA49k1fsSoRGn6vGtrBtD2LQFDiGf2aYN3KVYWeTbJ24jrNUcoBkECqXFgjqmPnYVerDRA2463UXABVYUCw",
  "key33": "5byoNtxzAzeKjNf97qap5k9N6Guo71jwjoNFbxatFipXFqQybHetKrvvdySZB2PP5F9TD7fDgUaRj1AxaqMXWmmD",
  "key34": "53rQ7Woxbr5s44oDQCFZynrFxsN1fy1qVE5dLsEHtB9t5uBzkVppvqSGUYZw7XU7G3Lh7vutaSXaxrcJyCqHLERA"
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
