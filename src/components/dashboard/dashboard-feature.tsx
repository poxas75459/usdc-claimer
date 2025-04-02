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
    "64c4og1ppbGnUvSzxZvq5s8nWJ9nyZ2xbYtALk2xJk7bEyFaDzF1ivBFc3ex87Hj2x3divKN6qQyvd4L1J4zFQ23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52RRsqsuqrB928yPktYKftVp1Td8y8mDUoDyv9i1cW6jhxGYGoAYJ2rxC1ed2EhJzZZo133fDUKZDcvNE3TooCmp",
  "key1": "26ppjXGaibWFdtVBPpubpurs4JJdFJV4FzCcfseJHNgjN8FMvv1A91TuuMCUakrnv5FKXWXX66zuHGpnYGhvC24V",
  "key2": "4zpGk6zWKouu4URYFUcoZqJgsja2N1RsrhRQwNcKoAuj2tkpkiPkQqR9MmGPXkdy67wAZ7JyJL3FVnsQ6cnd6EfD",
  "key3": "3mpR1DPp3xYwsTY2nccfYp5zkb8TYKctbkMEMUZmEGiWbn4u4y95teuWNBpXfTVa7Zqvzoc1uTyTooemC7RGU6xo",
  "key4": "25a8jpGQcJdu8so96ezsS74zQDxkqJLAbxcFsAwULG2igHb3onbZzbis5xDtSEWrnCgxDvMweYwShZ5U2W7h6xn7",
  "key5": "2zqd3YJ2u3qQzDzBFJc7ZjGBrC1h4LFVuTyw8qPd67wgaZ5TGuwyYrvfVe1BWBd9oWDGShGXJtCGXMvnJovF5eWJ",
  "key6": "2AyuFXC7t6Tu98tN8yB44bbXdQC6edETtnCesorr1rvuWcn2amzkoBSz16H3gfzdTCjn9wx2orqoJqUgACjxNspN",
  "key7": "2UD4P5L9dmGXEJLtVYG84Fazma4QXAbpha1ALyNMktvcqd5xcdHTFC19dM6h85qwcLmAvY8PVptkrLjmzmWoC32q",
  "key8": "268C748PAyvF4rKRurCS5isLL12374gzkVv8bse1Yc2iUxPWVraKwarXBAAmVbYVo9BYpYe2fZzKUSqMkNpeAwyP",
  "key9": "3vGkXQbtmURLTHePTeaCNF3ELZstzcLRzHXd6GUePwiYAgut1pBN9h5gVLXsh4M8Gdm1YtVdYyGMB54hQujxRbSR",
  "key10": "4r7r77sdUT1itBKCPu6gu5QL6xN8b5XRAJmG3cuGrEYfUUYkjVAFtQZxpjBc12McAM1BiYqtCWz8981Qmso1BheF",
  "key11": "4wEwkHdsx1qhU4M53Ecsftew1ijy4DEPovXvcLa9aQA8EFEZ74mqJTyPtjx9y9wAbLXmNNbStkmkeQE67iRMD1Cy",
  "key12": "5e7qC7QRtC7q8q7fcpBceVrvsLN6QZS7kn9x8W9UdXTJXSNPrP5iRP1NKAbvF6pbh3sVHeP9vY33yJJNejBVmAQb",
  "key13": "5XFKYD3ygtTnq6vEdbXAppLayHe1nUK6jTqCW3FDZ8LVXxAXxxncQioadVEts2pFgkYZhaT2G1Lj6Y7Qax3UwRd9",
  "key14": "652rzBS8VV1A62UQ1nZ4P7eZaWV3Jpgo1ro5iggdDkWT4PWTZLXGe779xZ2XoFFkeHZqHRiEqtaDXtQ2962upPWF",
  "key15": "4B57yHsWL5XjNApVKjiUXRXuP9Fu9QFAXZL71ogcyUohfQeae8UZApk2C4Hi9ZkLT3tmw47Bs22Wstz3FuAridpy",
  "key16": "5JvN2EtWEmSFT9aNNMAF6yjWLxBFi4bWE19sYpoLwFG4ygS5nQErV4Gr9Yg98pRNaUb11YY97YVm5ViYNcvBvjCv",
  "key17": "4s8Am6nz5h6T9w9iEmVjvoZFpBLUZYwC9bNZtkkZ55enQTPuca9C7bp55FbvTWQ3D1LeUBXSWxqp5Z9BUfybQegh",
  "key18": "65sYbZ6rJLf8oioupnud5rYwAknFa7ZwaXnw1MtyGBG19QTwKbojBJEB9HNvg2miEipN6bWDBFqt6B2ofSjdnXLe",
  "key19": "2tuWBMXXUGyYYBTCtSYPyKXRV4oEmWTym8A6WRgjMcrvyvzQxFDhRTTHRDd9yyhSFC7GzRLsvHadcBc56Pt3xFu7",
  "key20": "5vgmSBQvxXqoCHQ9Y9GsS3hbZgXseXqdGt4BNF2CWkHWw4K5cUXx2kyvehTnZm5MeAWNdNLfMBTVtW9PQYjh4qkh",
  "key21": "4ZqxfAPx8kT9mkGzntfZxw6BZZyhnTWsnUQQ8L3SQZawaejDqJvAADmkbM8dxjeDBRD6uHUdLp3RiMLGe9En5eUX",
  "key22": "2FDp8UmJFuwJaBcCRVSKi6hMVEeES4zuEVV3tvxzaYgXEuc1rTwoSKvf56HmQz7Qhk2SyLzu1w9bJsq2spmYfVeP",
  "key23": "wTQV9qbfc1RLKh7DRmDM5DJq4a8tcvifcwESZ5RmsfUNeuDDjC64tjMTQ5MCnwCAu5wtcuKZLUfvjkF2YSnoENd",
  "key24": "5sAcpy47tEaftVagA5pFBdoXG7efxLWNB2fACX4xKb1uFRCxxeh1uNsQTtw5ozGi3BrHxkCqc4abL2o6iDiS4Gxv",
  "key25": "6eNt6ZQjVzMmQhzFwHXixZTQsyzwMUekXYHWYD4juxcfskcMSDLSwvfyip4Pd6mftfDYHvytc5zWMpsBzrj8jCa",
  "key26": "5cdGXBDY7hP3m8W83pMrV4vmese7CQG2RyevjuzfPtw6VnynVty8oHi5BJP3KLAAWGHi9KevquskpMLD4vK5PNYw",
  "key27": "4KoSYUBAJsyUBKNq7u7pYneHAeehaTdSKGHcqGWPbTFWc35VWQf7wvDwPn79zd4nfPqUjjbA92mVXkyLW7yyDnLt",
  "key28": "uDxRLGoEDPmagr7ZHSuou5qffDj5aqqMrNRzTfAsUeMb4eq7VjcZBGexUZcTNT63huPFVS9QNK5XV6EYk8SxJha",
  "key29": "2xb37JdT7gy5uBeRKpy8nKDZdSo7bhRVSzJKRq8DiYNBY3ycMes4HAXMvNcRmmmRB54JDVJ1VTu5VBN9LMc99Q6m",
  "key30": "2nqPTrWW9zSX1JhHGxT7xxj19VmUA87sewGx8nMtTdmg8FqeE9u3jKacw9cbQZ4fpvrzsN5e5WSridZQuYXVshkx"
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
