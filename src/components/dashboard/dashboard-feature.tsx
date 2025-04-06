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
    "2Q2U5jW2Gdp7fnNaYWmJZq56GgPsKjCRQkZLUE1uRGEEHzcheNQ8GNJXMymu6sHdLuHqBv5ujgjYDYC54QGLovTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jecHrn1TbtLfheZvn3ABqBf8HvzR9EiZxzXx11e1T8sDvjNuVxZPfu8eMVELBYDNnBmy7MGdwst92QBiseFgH5s",
  "key1": "4V9UFk3Hq9UU233xJjse1QVNvJ5YTvfN62NEA6DhVqjtzRDwbTCvgph56BUnWXiak3weSsGySG7CD9HJtNjrQUwj",
  "key2": "2CgZsvagV9rRstkKgL64zMcgd37DMVJMhzV3qccsnAafEtztpZBK9XVfi1L9EhdacGJpPDjX55K7eK8E3bwVYXb1",
  "key3": "44ziUgHnyziYHtu9zmHoCQuizREhxtTZzPCvQcBajT7fr5JPMX7dWpC1rSM8JW6LVoWtKGhUw9urtNiHyEMT7Hyq",
  "key4": "3QAhEwwPfAjW6vnbEwuiUhf9HyoLVm2dwZhkC6Y3SNB88bedNT8AKXbndQCnPpowMAninuF8SBLwXm8nyhvjd4wv",
  "key5": "5NPvS3aWE4mtDhpViy5UW4is9qHcYHQPDcLfjHgb2wPdg4uWhNepFrEGypL1WFFC5Uqbm2NHftWpvcsAsGb8SaWp",
  "key6": "2prbwsEXCpkPrsWUysGF3rjbFaYmf5PgVdfhd4Grpzsj6ua56Cy2owY84R47sWErQuHoe8EdXejBi1VuTmDWPBtE",
  "key7": "2VecbmccQZt9j7jTaXYvJeg4an2tnZUTg6rdSvkzUVWj1cRPPULAhEyant5ibBhwb55Hih9HcY476JSoaQNqZC8V",
  "key8": "22hF7PjtqnVb8Yez7HdyMjQd6qDSQJ13gCTJgr5LitupH62psQSPUxTT7b9dNcW6RbyxuTiBCxv7RUXHP6Qimuf4",
  "key9": "2CwyAttGxAQwwiGT8gA2oeggEec4GvwuzeGdhHGqJFUDrUcmENXFZcuKzF844RG8RGfBW5zBA2nm1s68wkToDPW7",
  "key10": "3CvbSmLmtCYG1ssVmRemgbtQdKS8hL2uKweNowRJ63MFZQrmeAA1WUgzpBMbisB7oT7ShfjAFfoX5gmXZGxB4X4Y",
  "key11": "34tBox3WL6SahLej8G7TqvN3NMGewRDvnvZ6nyp5t2Bz4LtzkATGE5Bp3tqaRqtJcqhnvZtQTefxijEgRZKcofPe",
  "key12": "cGavDy5ScPnsdLRxn9ZfCHv9KNDqGYW7mummnub8e19oJCN4XxA8yP7p52eUTpBTFyDmRtQyhE28UjA4LFrUZUs",
  "key13": "4XRLkexGvLFD1ptEcKtZtqN55sFpURVvA9NXkg9nsRLwP19bkr1djXKovdfrBRSQPSCK4W73EZQHJxMsBcNjCrjY",
  "key14": "4KaCjTPRSCUsV9BH1fGtik8yZFGTYhPY76CiHy95gNphSgaAzkb8CjLytdX2qfbHCQL5nx9MZRVEjN7yNpvKXznz",
  "key15": "3fTDo18tXUBcTvqsdcap8BTTvTttjbUNPSjnRt4XFg775Lq3DjLo6MK7tX57veNUhbomVPabep75gEgHuJkAKxHn",
  "key16": "2hRh5m1h3FxX8N5S1423dJr5H3GRDHQyBPbHqq3wixV3MoHtR1JgfN3ewykeLWduAcw4NP9WCoW4msAQFUb9fuDQ",
  "key17": "3PtS8byRRrqBWAU8RfBs8uDY2vDUk2j4qGZbUmTP2134yeNfikot2hJVufN9bKkrtnVB71ZDpmdR6UKVBSk1vnKV",
  "key18": "3TET5fkVVPZY4cnMDM2tk1XXkE9QZtVnMKhAjZNqugmQTmauuW5dcJAfCU4m5ak2BJj2v7H1MQuopVLnWoeWqr7",
  "key19": "2vAAMmdJFDK595zATThhAcWXccTeoXjh7bE4Yw3Tk3wusP2Uz2o5CjfcLac3nCQoWhy3Mh3uQMFmiFQXETUzjsp4",
  "key20": "53o4HSsuV3c2qPgumaMDnMBxqDHsupBXenow5LwusRySvyeYGBod12J6kWDhZ5sjbZV25aeRCZF79s71SfHoquff",
  "key21": "2PrMPFFRYKgTRdwYmzXcCsDLSrZrDprzFyjb8HxMWyMAVTVakEVwCjHfoEd8FiLxFEnfMJYbg8pnDCBdFj6ZnXxp",
  "key22": "2Vcr7Q3mgqEKBFt3KEyiDbpceypNUujiScRB7HZ2HwT5nwWT1Gmop459vMFeV3BFns24jfU7rAnfdx1f3yfrLKHC",
  "key23": "274zNmdJ3UCrr2x161Ko4QAxNaR1mSKMhcXueKDTSQfeXVqf5YrhmhQWg2qGppQQMQf6efVpzzBS58Qz3uxAnkbL",
  "key24": "42EcLH3uaBq1KwmgxNEnbGWXvhErtHnRVmUgLLaAqoH5zSvFoWwko3VaTjWogDsLWLyiHmqAPPC58EUCu1CxJ8QZ",
  "key25": "2nSdXVyWSFKke8PyTBTt5FEaksk5tyurfSjeMXoG21v2fD7r1yCLohNamxhaWg6xX4knsNwCmBHxsMXQUWomQUQj",
  "key26": "4ARnCA3FuhLzTaKPN1Cq5fso24XhSPsAVFbW6uDTPipwdQHVNqgQRsThJFRdiYdU8rSW3W1668C4y3xv93sNmX6H",
  "key27": "4WxDcv5wevnGXdhdPYJRCvmRVZ5BkGiVGx9B3QRxYy7yM1ZKpi3j8mpWmcQMSEUeiaKmjemzdFnqMms8KQD8wYsB",
  "key28": "3nGwRAaHe7EdV8rNZGYLLNUe8G5TtTdoCsXQRxbbRJWmQ9ZU1NDKYMz3sB5EXmj4ytdmM36RaSW2xYdZGfMTXoiT",
  "key29": "2yTXQVvNkJKVhFnfFFYJgqBLqST8G6yAawej3Y86kJFZPFgMUXDvMSbeBS1ESJANcc6dJ8SkKqguA6Q1ZaQdkZ9q",
  "key30": "2mR7DFXu2ms8NFbDmjzLrfiWufBus4c1Ch5LTXwZrZMCiLfJW2rPxWmMtiLuDQe2Ar5SW37gA9XyVM9VZnoRsxux",
  "key31": "2YMP3DLJ3BYY2MFa5i1yaaeBT1VhUphWRXpMBssqeNTedJULF1sCy5siKBFNyCd2FiPS5HT4XAfbcPbJCu6CG6fK",
  "key32": "5gyDHSxEkFNzqKXPSqsGf2HvrqFsKe579yzuEw3enRLnLBz8WSzEwjAtNFLFjCq7otY63UfKtbv4qvKc2AGU7Y9F",
  "key33": "5FRyjxCsQUDStJSxiBxFz7YLj7uQsjmeEsjSConzGKrziisxrpxeQaMWQdoYHfb24uJ1zQCzoWhYEckdQPAfjhNv",
  "key34": "3W2XdnxyQrZxk3eUP97HyP5EQTS9PPEBznaSg3AMEe8MsFVkAHbXojT5Ukn3cUFKJFLiitHhY8uDg82vneNcNTxR",
  "key35": "4Weop5Gqh13KA8GSgdadukQWvTyssHqJEjs9PNWH2w5QtsnbYFBL1Vkuy7BLzxRuaKnBErzBtfzkJRkMzpkDqFPR",
  "key36": "2e7JXKv35q4juGn9T4gXDC9oDaVjRBmDinECQepDQGyJFxxuPc7s2fubB451v7TrkyGT2Q9LiNbZunB9zcdvKg4d",
  "key37": "3MEHgz9J9ST8kFhGdcSy4BKTQHpymFfwAdDvGsJtJUXe7RqdRKWLh1cy6RiCYtJXayKzfWWfLYRGRmej3HGzcNc",
  "key38": "3xiCv4NE2FewD2w5EbiwR81nNDqZpLGpmaq2jygL3VQMK8ZhXqQ5GpSPcgZHhECd8uz8hd4zQUVQ7czc5qPUymCu"
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
