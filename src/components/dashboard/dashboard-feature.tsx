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
    "3R1hcrpsVfCVV4314asT7Fyv9nJ56UqzteMdvQU4Ucz48dVUnxSoP66o8r6ZTy9DAb6GGWswaLbVoU812wMfomFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KEeqoXuSSkVqsmoTUQx3e6Gcp4aE7PuQwE4Zu7MbZcNm81YmhkYLU43RDpJzs63J7MMzEpMYfPcfZgQ3ZGddcWr",
  "key1": "2W5cmYuBeAMJXDGt5QctZn7HemMfEwhFbBBKPq8oFg86ryxjac4oss3Z5ApepvWMj17DnLibzTcnKXiCi2sDBqNJ",
  "key2": "49vhv7DfDfLR7Y7ynJo4Z5pioYGekqiwgKtBQ2L4XbkeXpoPWprwWpVZFXhkMhKRz5jFQwDY4GeTinxMz8xnEmXo",
  "key3": "2wReQrPb9PEzrAPEYJuCigkDe3jtpUFevEeAoPXD32UzxbcmorvDwJQS7AzwhjcSJV3oUJhPmHhYkaiM3KVYWYhZ",
  "key4": "4bxZyYjwGwLtzQBNkW9G11QX5ysYNDsuru9RQbRHvhEzTdyTCrbMGeRn8RHnJNJ5tvis3BBRyrCEaFQ9gKPLE4CL",
  "key5": "3pEVsaNkm2GDvTQQn3gQ5ZV8yChQgT1bAgjozgxNCwNjNH9Yi74ooSToH6jZvc7uRuS25kmnZNyoSrtNGBXbgxpX",
  "key6": "4eePqEe2h82GVnLUq86xcmvRZfmFyPnDinSfYZjGy4oqhtgL3HeWTpgcBp3PGPuaEiiAoBc9AcSGA5sK7SuvbJKg",
  "key7": "exFsShL34RYzT1P3Ed4bed7Ly83haE5YYwgsJdxoJH2wVDYs2bWmzuK9aVYPJDxpmP8rC3aNbQV84SGcRCSwUfe",
  "key8": "2Vu7zUqCGyuPc6AduhntKWPRn8Xn6SPKK9bUasUa7Q4E1VfK2nWwFwf6H2Uyz7MmPiRZSC9n6KXic4Tc31HdsQJd",
  "key9": "2fn1pRQRWQb5tnHyoHf9ZMVxYQ5KSbG7Mqg5jx3xfghtDANhDrgNzgsw9sUvi1tex4LJQw5xq9C1FuqYcD8LUo1v",
  "key10": "DTbmeNNNLXkECQFr6qJyvE1BVJdMVeGc68oS6evfSzDnUeU8GiaW5RYeVgoonaa8Hne4aWkEhSQz95o9cSoecUe",
  "key11": "LvZzsdFvZUSh99myBgDjDgeaei8EwKZgrGftVZ6apB7n8Upgufw2m359JJ9GT3A5i13F5BJd9PPq3VQquVqzcNa",
  "key12": "4hip7Cj1udAJeL5qPPa68WmsF8zJT9Ju1joGLaRBWU1TgcAFby55uBtUkFfVBW7RkCAe4ppRJTwDVu9dQZkQ2P1",
  "key13": "5xPxVuwT4ezbCKk33aNw4ys6ZdpG5QCesNc9euwmo7YHtSJqU1efD9yAVUz8SrTicXXXLQu5FmauRXx97Ptbm5bU",
  "key14": "48yfqSaFSKb3jFNVmSFTqMWJSD373ad51QYwDgRQWVLaBQoDpdakAdu4yMsyoDFJXetoiptMDUdpjNNNEjPawFV",
  "key15": "5VwDY4D2J9egM5heL9jyEBrteLgLBnahirCLYp1JUKr2bopyR1pZozw2SyFzZSeJhr3TQkEUiHubxYn38vGfix85",
  "key16": "2mWoM8dfwa4nSsR4aN3aThrvfpk5Ei1QFKrVwnvZ4fmqgT4pi7XDoFFyhRUkZfap121p4QXtgpLY6vWTsBMkKx7S",
  "key17": "qQVCc7qrVg1QctEuQo2JJ4nbnzy5V6TNNww4oRUno7qMvPrZuhhfJ5hTzi6RancprDeP1ZXBCVeVwoBAJ95fcD2",
  "key18": "451dgMsdKfpRicXQNkyZrt8Kek3oVZanmCnK5T1zTfFrY7vCDUgXZgoP1jRwokvtJyqR7CNCsbcagjsNBm5ienqg",
  "key19": "2TwbBj99sqkeupp1VH7keEvUUi8EKPSKXgXYk7ZwJnpbVY4z7Ne1xDhUcVhrdXF7rUuwrwNK5dNaMJHyLm4mjWJu",
  "key20": "4MjP66Zh3ZDyd8vAZwtRWKm8ARxzbYqy7zmeRJpgFsJmUrSq3a4z21CnDXwetTmmrpipNALYfhkuiNxio5iq6kZr",
  "key21": "5rHLbhiKBTYixBT7XhVaz5bPwMBptyj2L2A16FEGGAzzrUbuSnoHyF4sKzPPA9ws8xo2e1ymHfkzdpSZf3k3wLpT",
  "key22": "3KS7gAwK7SLftFY7dKHtziaiFqReBQJDoyKP2BEpBYhniNBiW2JHUHxVoFvef7dHXQL2gJx2ChEJu33d6B4tfpCp",
  "key23": "3cHXHSQdLDqhAksCqUNTyQrW6fzNvp5w3fMqsSQtqYyjtQDZZ8HTzzoqk9HvBwDMKpTjMzBbeWQZsizdeL24YjgL",
  "key24": "3W71eHjAFST5VB9N2D8bFWpLWaynMTYWk9GtJ8MFQjV2USfPpA2SmdXNVUXMcxnXbzEJ9V8P1bxQCShYQi2KsfdS",
  "key25": "47Loe5A5mDj5dL3cB9KzMDrqVZmjNJQmq1RUb34wGJjQTVY854KQth5yCkMj5onmJ3iFhvtYxNnArF7CCsu9mYHA",
  "key26": "4nFfLz5fbLrHfwgihWTg2QeWcKLhU3uoF8g6vPs4wd9DfKxgVA8dMbGY96Zy9i7hRgw4AJEMMsgQgQLawPEp2cHB",
  "key27": "dMfdytVB3xmzemKzY9PXvCeCc52StkCBne6ze4wm1SXk2Q1cKj9UQcJjVe32NznLtr5E9o9tYqfDZiryFGbbNkV",
  "key28": "2g7yQnYYUNibW9bmnsaTHpVHCxWaK7veEgxpPYxJvR4erN4g9J1bLn4uEjzQ4r978ztobmMKz2Jh6jqWV2E5hiVA",
  "key29": "4mni4wrqsKsBfzTrDaTAEyj7csu6KoYcWSCYYV71SRA4yqdQV9nzEeSUphbmohtM1yykeMhGN2bdxZwqXhn9gCvS",
  "key30": "2VxvCWuZ63x2c7Evps1pt37XNLw6Mchj5yZSShanLPaKr235RsJc7QQ3xXwMwukNdExhSFJdNDKQzN29NPcTXmPR",
  "key31": "651euh4VJCB3zEp612GwJPChFAvdPd1MrdSc2TNPuxaidZohHeXDb5LV4UNi5WTfhDMxqwoXqq3RhJPtHSf6wJaZ",
  "key32": "4TfurnhbMjRGtHdSbECviyZHwdYT4ddSxRocvEDhgyKPXbxxebD65j3hzcCCMa4m2abYtUoVaZfNmZsam6zyMP4x",
  "key33": "2q4ky6V2iUwpaQnHzxBKqqgCsW58Qa8MyaSCm7Rp5YPL3gDT5AXsEQuMQ2pYEoLLCJ8niPQGiJ8S218wGQvjbopM",
  "key34": "4342nD4sB27mYCYJhuVPWeAow54GnJQRduLMdxEQ7cMgS7KXyWbSwChUK8B5WvqwdZu74XGNCVbYNcR7n7bGaZeH",
  "key35": "4f2ByqdUrAwZEU42EKGTvaQzJGHfspTKXea2mTvt8s8fwa6wHHgeSZJvDQUUCJoXLyH6ur7eHrmyJccFiD8JWCDV",
  "key36": "2mpTpD9SRuKAyKj7YscSE883RvXgjN8gMSTtLTuTBox5Ex1Su8eQ5biXpbfKAPCVhrEGtDc3sGfpUt5Hf5NLDTrt",
  "key37": "XbUqssQJN6dG2o9TDJmpXQZzhe5GjnaUFUHuRWVRhtg9MUswoWDiyJ5Z46RP3TBbsjQgiJd36XoxmFBjpyoJiSG",
  "key38": "3v5G51bLAkEETmyKG3fQA9AjqHYwnRJNmatwxtyCTDRbp1gmFEKbbazxaapNBNHo3SCFKVMoqKskk1ZKuMFZc748",
  "key39": "5Gm7hxEefeaccFYwsLMSWGpsx4Ymd2v6TPUorjJ6TWAvtW5cZUv93N5YHNsVuervtZ4WCUU6mW4eekDwe4XGej7y",
  "key40": "eJC2i5PViw4GjtVPoPKpgrYz4bmkKp7BDuexfFw6BPKDStd7va3MW3LsAaF5KMsy664H8xvdfBvwugUR9Nsqc37",
  "key41": "422o9hZQiQWo73hK7k2AhjWHTD7eYkA55SWr5wPMnueVz52Xzom8xWcaeY4vEPQG2mCWcPVzaaEiRR8SdSCSZnJV",
  "key42": "hUPyrDNtAkNJJw4Ufr2WJ1f3VUdZWozk42Xykz6cE3oNAb8LCm4Hc6HQe5pTadWpc34Ke1qtDCiZRXKTGrQB683",
  "key43": "4QBk5grh8TnLVHSyantfJ8fqGiMUzf4jsCzVF5UWP2bkP7DwhKhC3h14QAsJWnxJ44ys6JBzFXbH2H8gRuzCToGL",
  "key44": "98xJBAnxDaFSXWBqAcuwwJHKtgMPJ99FLjHhHqvf2GqSR5JXkoYay1iMnENQapAVVu7w2NRDEX3gk6dKEokN9nJ",
  "key45": "5FgFZJ18uXPTDABkHaPyemKCvwCWuJszpo6Tpfj2CUpGC5DemhBJrK27umMejsAZf3tYSSsoqzg83pZBJJM1HTgW",
  "key46": "3CbDs49S7GGTvnehU8f3Lzhv4swXHU6TqXiZpsm8ZKpPYfVAHZexhCingfPgE2BMZg5xon63prD17BLuvQa7dk1W",
  "key47": "32NhRij1KtcdAcauFBx5RETnXR2SsbL7bD4NnnPJvRnpxiGadS2aDnaBL3GudAPXbXB6i7WdZ7qo1w1LujY2ge96",
  "key48": "RFT4ysh2oRDFqPMrKds4jBwUaQgndReyi1BXCeve3FPVqZvDRmPtXCiMbvckNbYJwRhhvtpvHytJgCZY4LQyrUa",
  "key49": "5ZFiSPSijNdSkie8HRphB5DCRLosqRH2vUK3QcuSosMfGjt9W8TR9UBGRMx2wVXi3DCowNWDtfPAFejYj4juoYah"
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
