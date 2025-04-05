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
    "5avDqkCcwnavMQ18FAJ56aW9ZD6sHzrQMd9ke3EGfr3KNLBHhYr73pCpc4barghTKxnwx3CuoMn1JZykLCorXzoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4agGpBjnYynHK3i6mCbJiPyHaVEQn5eCZg4cmHuyP1XFoQPUTUhG4xTQQsJYmXGpHK5cPdrZ4P2KtLBzK5sjx6Eq",
  "key1": "5kYpYpKBpiarWEwCvR7TVT2QzCyZEKBPgMbGUyEN795FBhqV8pQfG7BAwZMfnycMeSeRdvF3TPEEGUtcxuzJ2cgA",
  "key2": "2NyFKNRrZtSqoTYRS961dwBkamSUVs2TwSMb8tDuN3suqUqK3LyAh2YoVjHsV8QjvEzqydWAUkZwNndvaC1cxLWC",
  "key3": "2yC3mNrF3AXJuEWyWgs36JbdXGe3Jt8CkWxyWHTpsXF4TJmvomEB6XP5RBUmpLkGpmKAn3oRn6vUE4gWM9ioFLh",
  "key4": "33yU87hAGC6rmc9obvoAAEp8Fohg1bZz5G4FxsAge9rEZF6DLSrgsX4XBDyTQeLKhNk7VwS3pGm1kHYhT8pav19B",
  "key5": "2wAEjdka3LfxQ6T8XVA9XunDpenFiQDL4PivyMYPKPaMuUxLCowDWF5znuTErCchbuEf6Kxw4euhiLAiy2R7rQNv",
  "key6": "5sRBKPcXzG8ADGcAAvWn7qFY6xpPHLChdEpCv6Z4NhfoFfdCKh2zAy9UhkppwRAVgv424FGoNKa4jzbdiU6Htm6X",
  "key7": "4EMBVzkdQNbjccfTgn2rdr2BSb12Q5kXpb4TB5rqrQzEMxkCgkqnqtb1FC1nZ9ht6yNKuZ7sX8Tx9RAM9WGE9SfU",
  "key8": "4JSCJrkZ7mPJXsEcRXofsuoSAqmhcU56LtSG86JHYQUZqtJ1TatkBQaKs7rDvNAjYDtXXtuQ2uPEGJTqzQnWeLCi",
  "key9": "VPQCEa2cNtAvsECGZ4LydarxSgzehDgDkVKWJbPMNSFbLXyz9GKQRXPcScsWAUfeFrTZiMT9gE4zBkAsBD6K2Wm",
  "key10": "33H6WUZruatSw2PeYQcxpfN9D7yS35tCGumbN2L74JvW5kXzeWXtw4RwSTE5AiVhZujVcz9e7ezHsvkWeTwswMDE",
  "key11": "561Z2NVH29Mub1m1evk8G2PrbSN1WXGfUBzQKADZ5gxWhJNBc42Y1BUWXvEhtGip46nNj1kbj5Ro6J7Fo95fEEQh",
  "key12": "9kPod7LAU6cocGTLNrwvE7WzWz4xp9LFM4RvcVcWMTJDaVqK5sWQUdS4SMVnhErCPc87VGCNzaPh8NamoEExYCj",
  "key13": "fjbfbHwY5vMAvgeuSjSm9Piz2kPutZHTkTPKY5XBDY2VpDZqhuA7XTRSJt6fs9maihBqSpwrnwR8FUUm157Uanc",
  "key14": "3BFwxzjj7M2cjFF3TwFDVEkzGKtNbFcpnKwdMtac6QweE97kSMsgQ4CjLiVcpCaQHEWCjAqJnbnrbmKrWiK3zG4L",
  "key15": "ttQuEY6gPNuMaQh3js1roLfzPPZWgc7twnXrWbh3t8WZ5YQr7ELegbp7iwNuVp3S8Roh3MJPQazWbiooHMnaLps",
  "key16": "mU3msugvrpTiDnbarWPPNsPEjegMFckrzZwaXF7XDwtRD9Q3kHYeeTHNcEBaQE9GaDejpknYWgPsFwuG28gL5NQ",
  "key17": "wvxxMCSjwZXN6ZJyD9rG6LDRqQikqR5YSX6peiiYFhQpZ7k3HA4vAcj4C6vEBJryuwJs3nTycGt6r4Vk8szkYs4",
  "key18": "2paz5LEB5EN8CY2Qnj8u3FQR7gH1AaXTaSwD26j591mgxEcgnsZTyKtMvVULP9Tqghs7EE2usFtBNff6S8eYGUGd",
  "key19": "dcFsnQM4nPPP7HW7uKTNuxqiBcuFHbURagtq3wcjkW2XB43B6C3JeKsnCnCzXcc663thSf8AQHkXnPqMYQ4mhNK",
  "key20": "5S3xt6bwAkrbgowQhFzRZpux4T2JVvWa7nNFFtnfivWzncjeDEsx6wHDTkoXJb7qsQy23qfBtX7KXQKQX469UNTR",
  "key21": "26pwCWsy3EEtJj3cW21F2Y9XVPGeJtnSsawqPzJx9MGkiqTkG62tbkSkehhbRc4YtzoyxsYqxw9x8JTirnLkYdgj",
  "key22": "5HyBBFcmeQQfE5LUJ8aT5isoJSKJ92WADt1cb2D3FdXByS2PFJreWPQC5ghNryjCLVJB31XS7xxG7dVmU8MMM1qv",
  "key23": "3eCp6qK6bKUppiHfgbvWjMenuHggcN13PEXvXMqGEu2YjDXYXMEV2tJBe3EExF7atTTMFwLHmic1o6ktb6u1SyhT",
  "key24": "KA1E1VDdwCPrT6S2cL2LAr2AQ3oidMpdK2HTFFB8KLDPuFqptv7hYpbE461ScYHqE3mAaZpP1vinTErUsyXMgYj",
  "key25": "2igLGhpUgKdZuYfGWy11CGE55kWP4SXbu58Y97ih9NYoTzG536qHWc7ngadxS9TJA8kNojVScn6v5B8HDvGFkZXD",
  "key26": "4zDNBNBhpEVQtmMzTexJMiPPMv1BYfTYoeCoF5EKo3Ggnnf5n3AaRu3JmmQnsUo2R9X5gai8BM4yoA9ZUrJqiJjo",
  "key27": "W2UxgrBpV3LvdYw7HV6TGAy6tmJTohpTZj2m7DrUpKUK8YoxwiEKHBqta5xniJ7YVqX56K2hQqCHoCVr3NgeYMq",
  "key28": "4FKd3EzCpYgXB5fxBxC5sVJUmttkma3gKYGYjbt8gPoaHk4MgUixWeGg9AQY4KEdA4tjevYXz6Aw8CukpoxR8V1D",
  "key29": "3vS6YEX23V7P52tcgZh3phJiwdVDfevuUtMZc99Mi8Mbtdxqe2DNA2HPvH8Ywttu4BRQqB5zvdPe2CDFd2X3mwrB",
  "key30": "BRGbPRuWcivZzMAYDsNo927xrU6dBS7EfgFo1q5w5qrmhG8U4HreErvijPBSMUDA1XNzJ4rs9nDb3ecb17VyXay",
  "key31": "5cWfVnFfiBa1j9D1BdfE8fokTQ5Cjz9bXXzk2mr4DsMW2SDtAQip9wk8eAPKu7DCNrCgYkg4jPmLaHhHhTWzuhYX",
  "key32": "67cmQp9fUd8KUAZ5sQKr6pdwJnH9c1MdWJfBS1EJbW4yW758zW8tSbgxrrfes5AeztLxBEB6fHTEyCAe7dudL4LM",
  "key33": "FCLxsBoq54Drd4gWXcsH3UDg9qskEvfy2UrfXYivyGUziakaYEMdkbKcGbZ2S56YXMSNpNKGWTW5CzX37QbcEV8",
  "key34": "JdVTREt63DxPNo3G7CQZK65FG8WpVdnwt6sBXQDE3Znf3f9wGidVqsmDsGaAMJwMNmYDUvqb6oGcPJ1rXGLcuhJ",
  "key35": "9TmKiEfjg3QNAr6YGW5RqV2UZn8g1KhqRDsgFzo8BSEUZQiLzaDoNgSY17xqUxJTFADyjYnDQBBTiNUhc2nwcPg",
  "key36": "5xL33AAevBT7urkhhMm3zEoen1o5nZGb7chnPBPmxrebWXNbv5Xk7CMhxDnxeWag4wxa5apiks1iznswKykiU6S6",
  "key37": "2qa9mbzgwrTpigzj1bDaJRg3zznHh8bSkKju1fdZxmj97g15u5qxNcq5aCodA4MQ5rqEEtWuAv1dordHi2aoxqgM",
  "key38": "2n2et1tqGPDSv4Joiz7Uk1czvA5SkWvo41KZRBDqiPBxGG7fKLLnBaJfrv89fMciqzBhvXXr48RPXDexdNbsoYEU",
  "key39": "3ScahTwTk2D4yJdKC4i4tvLhWhq9CtF5ZzfbkJ1HDauzxTDmkZu2YQ68rdDCXPt7msz5scZT6NPWcEk3t7uiRdse",
  "key40": "3T5dR3HMGWsGppVfN4b92CapPeCguNvjQth2WSV4Hd47774a4ZkhWNvC9AxuDAQbaNg3oLHdpCxcFZUY7QxESZgA",
  "key41": "4pqyxpPVVUABTG522YmYUEtth2XxDNSa1YVdvUarzSkor5ZYpthdaF8R1n8SwdQ3TKQc8tZAgEphH8hCWzLrrdSP",
  "key42": "5KP4uWgbcTRKFbUXf8DZtWniXae87XeHZkiXR5jevqtiVKtHWup5TxaC2VV1sEjcq4scM9iUYErjcR617WtXN3wY",
  "key43": "3fWKK4iDsj7zKquvXZk9baDPpDor9ojAiC55GwwTmQ7NXHjUwxN7zPFT39LCC5dcWCVotLUNafcv7zgd58cSYYCG",
  "key44": "4JiVcyM4mupU84YBj4W5XDfeQhkFxcenE4e1RiBf89qvBq13RBkiNmuN4hh6KUchvaa5rQWf5KqJTszdnEgRFJiT",
  "key45": "3fbL27SU9hXvanYAt4VGFB8txe6dDdmB4jdLH2HCi9ANQpef1jR91AL9VZGe7FabNVRLS2mE6dxQy22jCAS6NJcj",
  "key46": "4q4ibh2pgs5QbGMMXVJ6k4xdd3QP4VuEs4GYAN1ai8hVtVCvrZMtTtQZtTSFvVswFe6Tb3gVNiYpVVAqfUCTNRHC",
  "key47": "mdFTqbn3JwYhXQNfNdA64BTdwqEtpcxggKZcjyttmoee9549MrbWVCg4ssHe6HuX9Gz8v9AYZuZE3WSyKNmVsNk"
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
