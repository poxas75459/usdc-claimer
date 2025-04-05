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
    "kpY2BRux9SV4dny3TMbFzQKsRdmEpWqnhqEzBK1UMkqBLJesCcwUf3HnTLbKHuobRBGCZzf8fHwt2xb9N292Usb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WVq1ZiiTP5Z55DF5K4vGaPjDjnNG1TtL63LJV1SnDD8pqCT3rcm6wnvRZeBRqgzyyJd4ZydHpWBp3NMSk7k7UiB",
  "key1": "2BsA7upXoAtrShrQKTxkzRdnz7f9Lrw8ogDh73GPTGL24tf9YMeMMj62fRqaKaK2xo63wmSUhwC596TjjWtzSdi1",
  "key2": "3LRPMuPe3tNUEV665BNV3jorkEK9KFxJKuV3nHBKQ2mawA1qXfH9CoPJELmqYLjcEEb9evh9mrdMmak1EdGWKsZS",
  "key3": "2KHd9VtoWKRdoZBexAHo8PUHEDP2eKfNkHv1usjRg9L5wJrnrGX2yRnNWgWvRzV2yANVKfpJVECyhrYtQhYTFud7",
  "key4": "2WQoqsDhG7uJ6ibaTEyJW4RmMgeXZ8ufxgALUWrFgW5UHoEtw13gf8H1kFivDKAkiq6RbwjGShi18H7RhZoWnN6Y",
  "key5": "SCrXhjwXDdMet5LWQK8E7JoDehauYfTbrEE95zEiJkAHAC1BZ5erDZEcqz5B1xCvHidziTN843Q1yNKWABnWmyh",
  "key6": "2KtVh8JwkTKAWsuPvG8e5ERsXeEpEXMBvTki3DzY3EM31rxzbvJ2DVocPb5LNXfLkvthujcMj1BTozYoTvMqeVxZ",
  "key7": "21VyPSWRbHTrx4wCdvxuFhBTuFQNmPvdwTYCokRgFWjcuHwPQB2zgEoJcCJ49Xv8wp4MjSWrj8Fh5up1cMg7CrVm",
  "key8": "2G4af1QkRDjCJuzwUAsvHbCHi8vuXgGKz9axG3FdJUrfBWDVpey8gjGHDS95R6CcPRrhgZG3uXJvFQVHWenVrWLJ",
  "key9": "24Y6oVQ5Efo67i1Vi9J4UfYV9u3TYenamS2npCgXT86TBZBNQhrzrPg8fZYFKRQtMHknSePAjikebtEBu9ZZqDsb",
  "key10": "t5u1yE3KQ4LtNtXtAsAcBcyrjKfCkFSV7Le7qGueLAcRC7nms62eVLgkeEE7HSPGZygPahZZ9wQGPeu6KwWjCUF",
  "key11": "3Z8cgi9M82oFzNnuip4yn1yMBkpuhMiZUXahzHN3TnhtCmeEDhp9VQyq8aJbD5qzrYaHDB7Nw9C2pJUhxH1Cb61S",
  "key12": "5Wg8mf44ZtU9HQ5odRqbWBYguzpzZhjrHS2kdZ5FeTDELyquncHaW2tHSpLH9CDPgEjCqEYxz5rwKWJPdHAk6xWi",
  "key13": "2fkR6LpiCNCBBRUFMNCcfhPsPJ4mns4rjaJkDsD95MjRRFXe8maqTpD8YAaGp6dA63nKudx7KNGdfmQu3mfw34rg",
  "key14": "4amEMxHnxns1oXnHk9ZqdMYHmUzGxiX9MY222JZLdceAt5XNpbQCz4SED67Rc2YmK5SEMUoJ3SZfpv4q6i7wrJEr",
  "key15": "3FRtBPpG1BjbajJD3BwJ2QR3vt5Sv7ARDXeScfw3K4LvmFrNo6yDQchMjWg5UkLh2Vyox5c4fR36mueuUWJpGkcv",
  "key16": "5k1xAJUQAgXkeUW1DoHP736PCXtXVXydBS1p9r68PZ7nbdaZxR8V7Ey939yN3ozwPbfTQS8DbsqkEGwY6aEkFKF7",
  "key17": "5BSQfvUKnRWGPsjYQS8ryrFkQcPqySVKtg9W65KgbnS31CFShBz1y7ARWuzDGTTS8oV3PkeshKz3GwkRJ7zGHYp",
  "key18": "5BiaAvAm9HU11PwsMUNxzcXLbXCDUtBxpG588wwjjhnWw7rAMjCwWh6CtsNE3kQULdMncWG7KuR5Q1AP1t3JaWTp",
  "key19": "4sQR7nThq7GBtiEmjWqEzTDV687Y25xthed59CVUJ1VSGbAiABZxsCYWnQVXvjS3ziZgqT6VaRXD6PyRemjiKaV2",
  "key20": "G7GUh32A6Cow5LiJMhBNvtmV8FpnhoHvCEPH6rr7kppD3AqbkUA6kCNewGcRGVuSd1a3pfLb4rnHHBdquh4JSDe",
  "key21": "2G7AKTSJ4xTnm1GGG7r3xcBDoV61T2xBsVXwcSVFjKUD91B5RrR4NrxJapvoGqCnjCLPWNYYDQifY7X3B7JbycC2",
  "key22": "2iwZ2kZJMjb3p1tMUHsKetEGo7Gc3ZxZamr9Ek7uALMETNMHyo2FzCaFqFWPTwPAxGFEPYUEbf1ANpGRXF321LNi",
  "key23": "5xZ4zQZUp7BSVS8knzUQ7VZjN799wvYPbMvVSd4woU5xzgxEKbZJjoUm7nbSAu2WFrHnoryrK4UprYFjd2V5HH18",
  "key24": "5VcsSTVRBgVU5yG9W9vUNSgXzUojQuzmmcE6DsTHbmmyEYfnD7N3sV388EX4WyEyN4gxQDBjQfkzrisMNiwjgm77",
  "key25": "2DFMm8pEUVzBrG64FDKBX4tYBPjDoop6YYCujqRArNLxSFpNpecftx8f7xH6fUM1rDqQNNqrLbXTmYwTjfLgH14b",
  "key26": "oR94NsnWiSRqea6N21QwKW5RyPdiZHQoLRcw7ZxCmxLuiUHADrxAtuVoEqJrDhmrKaQ7KqHYmo5bFqiTRz5BA9J",
  "key27": "2Wgcq21UVotAiz3UxHqsmtf4vSeGeL1oNBdxqQ7jNCzPbokSGJZU82dWkhky5Je6NJPw2RWNa8h5UakzMRkuxHvp",
  "key28": "6216MYHr2FJXQAJpPHb1VC75rY77RzcLj39MVRADSPjnE2HuDagpjH3q5ZRqBV7pTJM8VeaqA48uKwPJRBTpjtqz",
  "key29": "5wXQSubZGpetWuNYe9tgp5Yf4cE1jw9GpQ99MHNTEmQbkVk5e5irDNr2BfEw4A88C8v3GdAvtVoPXtiNBpMTD8eK",
  "key30": "XbjCoLHF2h6U41pu2pvt5pZkzwqB5XnjVaq7BduTqDhKma5dosgeTXEfkwnTSeNd7ff5bPB9QxT4CWZqmXrKjtn",
  "key31": "3JSQ7Snp2j2i2EyQgjdgRAAYhZM3rG6g9yixyVr2TH1cPRVDbq6zbcmn7hXH1LsFt6vB8wbn9sFVRU6RDG7EQnbd",
  "key32": "4MLBnJgP2UdA1bP8QXViGQY3FoSpaxYoR7PvkQaGRWWCZ8MH1fWmgPd55wXgDPj9xhFQxjQ8EeREURVKv7HyziT2"
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
