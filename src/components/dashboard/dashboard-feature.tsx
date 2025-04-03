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
    "t9h5tK2oZjUC6dYS621FbU113dPdkVs8ij9urwqKweefHKGhsASqmVjefYDpVZtBVcDgtj1Z7sBQZJZ8QRVkfPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aFiz5vBJUMZPqksohqwYBRYN1Hf2qNbeprDVoSaBh6cujMMGRtxrgs4SkVm3x9HenTZS331wuWGyqJM5iAbuiYe",
  "key1": "2eWLFXXgfzfXu8PYTamHRvjH4sd8FYoaMJFPciczYLwE685ZBuSHq5RRLm7dNkneE4DaBdy7Mvw8TEb8uWQPo6nP",
  "key2": "5d8pmshWgmFkn5AxKYbSK3q8wURujwgyatTRVD1RurVjrGtEeJPNLpr1mxFiAzhZcvk7LwviGc8ZhziuZwWBsQeu",
  "key3": "3Sqa1Kj19PtJq2wqcJJc8KYpaQcTyW7Zb8NdepGYSTB9uuMR17tC7b1dtQR7csmGo9TaBAHvFS7dxwbheZGiaJfc",
  "key4": "2Sk7h6tq8JrpA9G2eVhqHDEEk3WPbsuuFVDqh2CBTJp2AmaCr9nbHUSieRY8KnUBRSctRLos599PBWKRLCBPoNxc",
  "key5": "4BebER5kgaHiGSAzHSBra3xTCFcm2MtL8tCLmykrEfLXiMjYSywgmwiCNRPbphFwTCUhTWcAWiFU2u7NJbkAZdjL",
  "key6": "5PxQe2EftrVdyQ3Z48QEtstYXrYi2vv5gDsvMswoJ4BaWx9KjgB3fySmFfg4hCkiy4TuHo6WQbAp7MWykJTk7gCv",
  "key7": "sBbD5954CWi1cbhn1XNwtPwFQAPxzE2ELe8kXAfyuiGzkGbcEmVRS1b6VSNHGWF6UeaNFFgVBBTxcVRy5r9pRjd",
  "key8": "2s6DBBMUgy81uVZKnYW1MqYTfQvvAnCeapeW9W6UoN1qKYQ54BfeU3cykw1NwZ4KMiDUrvA7YgH7j56QxbqxoM7R",
  "key9": "5Aduutu6SMGZaZkB9sSNqXDe9KGp3cEyAfuXdopCa5H7hrM9G3m4xSFJa2PGZqUDd7XCMq9zj5ACPwEweRLDsSmK",
  "key10": "3oKsiEEUeXCNnFjvGYg8WE5V335VHxn5g6gHgZCmxz7aNoh5mzPJhXsnAhfKLfF1G2Jd1jJN4RWXFFiVeJZqwq2J",
  "key11": "5Bb9V7oYjKDmpc2rLiHL9xYNGzKRMstwSBFyJvC1Sm5oVqNJKuTeJXCBiXJAkExwogwo9pfPfNzqk2wHpuaWDu3M",
  "key12": "ruVhgR8AQdnt5osxz79Dhix6skaFb5DRS6Vh3NQnraVHxUz7bCNsGhuYJYmU8WZy23CNrgkgGkX96KwXjheRaDa",
  "key13": "3Zd7dRNTSvCMqga8GTSLyjKVuk9xTtVzJYvkrRi6ckVtMsHqogE4wTPniUougXWPjRC6ymdW8FyRQLuWiW4bqFBo",
  "key14": "4sXNdZWffxvXTDxDJ5o1amC1t6bYQGikU6rETjG6Lu9WN8fyAxz9Jiakx6PXKKwDv99KtsPca9guCZPAGEKe3JzR",
  "key15": "2o32tGkEybxewSoyshCHf9brUThLKrjCiKompDvdoahKxu6hqSDrwZv7XcBeTjo2uU65aB5knjzHCQjS1om8ai2B",
  "key16": "MyrrD8XkxA46CEY2i3q2rdzPHe7fszT6BhU8AVj7jVMvPPtqt84Qd9HA2FojAkozcx4X3h5WYXvxeswCcUJsUDr",
  "key17": "E848cqFYnt9gZZfnpu3oniv6HzHJJWMy5HiynZ2i2GJP9BFUKVE8DXPVKyrrBF54Sw9mhViRo9ZE5LZgSyY1sLV",
  "key18": "2m2Dw5acReSnzDLUzqKg2HRniKWLjTkqvFunBAaGogM6XijptdeBvSY69PMydKnXnS6XrCeoYYGD9gg1Z2SX6h6D",
  "key19": "2rXDwx2MNz2Rq9HA3R4UwN8X7jbQVmgFqzJSrxe8fuFW5ru2j9BKKUHPDxhyWRw5aMoESPe8usPMZ19Az53MfMHU",
  "key20": "3XGni9utQC2Y4nqMBmxkhkhmSdgyyGG9B5GwHHEcw6JFgNDGJYnnaxq9gnEPPMHYeioLm3w9EKvtHndPcbSs8XpD",
  "key21": "4NbRG6XACsPUfM5aV8Xyokh2DWqUJ3FWyuceYNqwvtaiRszRLmUAmupPyPT122ZpEAxPjbfeVU5ZxfoDzK3MStqh",
  "key22": "3igwXaVkXtk2He5j8KEvyBJsXnETYNpnU1269tTznagb7J8PwR9wbsMKJdS9H1tgekAKp7fiWZN2G6GtacEu4k2x",
  "key23": "58ztZngdVPREcosrCezubAvDFaeJtB8xZsxBcM8ffgLiPMoZcLK3BcL8X8ynjJBAMPCggUgrVDeneHxb52ipxuyg",
  "key24": "5QxQ73q4QsKnyT1asif7UYGA2o2baMXtSnQdRiDLC48zXtS1dWYiUG3eqmUDvKn8JnarrabJ9wTvci8kfzaaRxn4",
  "key25": "2nfdQTWzBmiZoTnqiAkmNmNgXHC67HAnfEn6Z3MSjVueGdEzwKhzAntckEU6WXResQPoVU1LTDqMTbJkE8W5RQXS",
  "key26": "222KQYmtzP2tGdYCKRKSzFND6LTon8Q4VNRyJvVwYCafoGJSkP7E1ZDcAh2Ms5jwDPyaMWCSk5JGTUCKvuiTUnHa",
  "key27": "bsArt4XBXAvuMtotLsiTTNc2XppL93r7Cvnm5ry9A7r6qp9VhFQwixP2horozhNBBf9ZAZ1zT6UQLRFH9SskfFJ",
  "key28": "3wVnsHiSXUT6Q2ThPTVmKNJgzjbZCBAYTQEUFR6qsYBJCJSw3P577j3qJJSwQv2FGXE7pCH1sL8MDXa6VpEUvctj",
  "key29": "3H12nWBRXpFuXZLWGRdE2Ti9SoobWJ3iAWzjmp7L4SLogzbUVvtJp8N4ff2UcQsD8P48PyviiLHmxYkJMAoTzKwj",
  "key30": "pgUJw3rywFWovpac6p6Q93MRe4owedrRwks1DTfrqhU2adPx5URivf2dSgim43GjDePt4F6pCSoKixk437dK8gR",
  "key31": "3dDJyUWAixLgStmrSjgjQxEpDE1Kw4zqx2jyTjRDEpKL1Kb6gYf8cCbFodMuHK9qK94Sf7syiVRkr9wPEisF6ttD",
  "key32": "3TwirXzHngY7wzCccsbdWQpkhggTcCgD37EmQNJbLSdBfamv2oqvskmsQ1juBo7UjAAXtrP7RxRZcoGctikYyAis",
  "key33": "4foJ14YsMGhMsk8sTwg5WiUmjBgznMp9DvGpj5BeC8VC957soqJ45AERUi1a397cvdqtG7aBAF9qLF3sTo4cVFqj",
  "key34": "2RseGccZRgo6SAW7TB2ZeaBqRcmzk5jTAQRUe9c1xw5urWiMsGthnrqhkfGXff6FYfj2ZHw2QHEJQsxQS2RFL43d",
  "key35": "7BoxU4Mw7ngxSLWk3Dxvs81i2dyKmv4qdJmj52jimJXfpNsSbFBN29EAWBRRZCC4BEXZdadiZxNdaXBL2Ymh1m3",
  "key36": "pzFsx39t6wWSco87dKM3nMp8Cn9kwGo7bXA3HzJGTYj2wY6zGiQT6C2svfWqHHwZN92N76maMCQgr7p1VJvvdVr",
  "key37": "4SePxwhC4a7ypyFfHX13tu1fPNPT9KpTd6PHquK9DVxgroJLsK4Kq32hxyDKCCsTHD6VxVLBTgDaDrcurKDdSVmb",
  "key38": "3QQcLWgTHZe4LrJVKVhMuZ3oCZvZrfmQwL4LgdLrXdHiJfoE2Vs6rw6fhihJ65ZRUYJamQeYCw6pRpSMnRNZqhSe",
  "key39": "2oRrJ9V561G7mmnYt6nuRWSwFFSsvhexKdEGFMH12foMTS6koBT5xsfobHCKMRvSxXPNZzHnnQb8HNEamqJMwEuK"
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
