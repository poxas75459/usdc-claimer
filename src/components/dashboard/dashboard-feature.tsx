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
    "4Ueq3FESSENQWfStMD5GEJ44ermKfe6NAg77FzpkjK9iR1p6RwzFq7mXcBT9GpUYkt4gbExSYZupAFiLYyH1cpYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ozeQjnKDaKZM3Lgy1GwFHQjodn8N5SgHLj1geCFYm9qkP1Afgc7c1dDg2avZmoLVVYbrS5QEzgV4yfxa7DuKjQy",
  "key1": "2R2wXEtNDVEvu1sHZ2PDcy9v6ZhRqmryWWgAj2XxmhHE1CN4x6ZViMu4MxNV76DcGWu1MUzfT5D1xMFM6vSWMos7",
  "key2": "3ME23SCA3HJYKcV2nZj3k5ERMVg2WNF3QdPNf61pGBh7ywsE8spByuQmgYCL8Cu5r7Cq5nTm9nsQreyLmYLQyshw",
  "key3": "Tr7SCRSxqz7dWLr2VZrPAUk41Scd4WRyzcdz1Eo2vEvsMQ47nhdwyWSY9Cp9eydqzV3mm55pJjJosfEVMkSYWa7",
  "key4": "54hENTjx3ub1ZoQm7jgq3Ajpruen6RZr3kY3LXMWb9yKHAuQgWrEV6myKZ4TCRMeb5EztLonWK3e2T12vb6JZiRR",
  "key5": "kifTauoGpFsxU1Zx3t4AERPEHS1WmjAcs1Zx822U6ZgQfpkywYndKxVaV7SKg3kyhrQGEtrKfqDEFepnAK8HevH",
  "key6": "yxF7yQrPFCz4AT4YvEdyrk4hjV3dWhGPBMfjjKQcSbzzsHEJn3evgf39oTikvqxzyAjmR5yAaRbaZadAMpP4eko",
  "key7": "ypSCCf3p74oEuzS9X783rp3QUU7B2wpEXYNNtpvicPXwRk3FiX5Uf8EjhwHwMMWeQSvuLowpLGwCv2KBtintqui",
  "key8": "2Sau6qAH6Qk9pCk8TA9aMG6LBHff2dT5ZFmQFJZFpki5vYW6Rm251zX1Nfb1qbHGDC937RbdZdCad3LM2oK1YzPF",
  "key9": "4W6LdH7PCH3JB3rGTgwiNEYrxSkvk15zch7Jsd8G8obv9Eo3jDYdyLqYuRRbCmhChERv3eVmpmaRTRxvmSi1iywQ",
  "key10": "5tcCpn5Xw2H8L1Awh7c7ufSZvAw8eUpJu8MJoztM4eLW1CUK6oWEY6UyFmjJDSSFHuWMj7EqDw3zcHCrAnV3tCwS",
  "key11": "3PnrUpUMBodpjWEJobRZiGX6fHjyBRrFsCWJQRQgKB7MjztT1wpy8dEWWes9vSBhYvPoUVKSyFNWaBRB4Rq2w2zF",
  "key12": "3Yb3iTVRSZv7XsSAt45e7jUzTuyFrVC5N4b6W2sQFsoVJtq1DpzwyH7jV8ummk41rP3QFznL8Fxf2h3jPSPFag3B",
  "key13": "3RfcQUeLxg4KndGcD2iWxvoJYEpBsJdE7FNDAgPZxaeq8xkYyeRhbFB5yRtzcdvHCK2bkWKJzF1ZV1HAXuhhGY3G",
  "key14": "LepkerZwD5Km8TbyXM6H2D8qcHFmVoNBdF3aJRaBJtkKgDEMNUQRTAuN98E2XrfwVWm18PokKVx5K129K4QSoMT",
  "key15": "58Mnfa2RHjrNDvMFVmShG8RjetRPHdQqiQ3NMfx9kqu63csLxkD6entv3Qnu1stNroUHK9Z14HrdcGw7gnqEaPAb",
  "key16": "25Y5XdC2DfJFJRRF5ciNiyzKS9SC7DqHLR7N1Ti3Qt5yAsRFoD6pDk7f2DLtFSSQ7xZfT7ghiEr6bwGCUkD6oDZo",
  "key17": "3KUPNLVUxrne4UgqDJJeENGx4mKd2QnYKybhYYZsXsuZhguqo2zFjf59gvrhfsgCquTBFWSVGAg3CPUn2YgePmT7",
  "key18": "375JmozPHL8MuBFhVzraZrYz8GL7WqyhcT5MZr5NYy1rMScdaFKuNtm8M3oQhFWRGF1eYX3Vw2DVKuxsPD9X5HZc",
  "key19": "2h6b4nQ7vs8VVzf589HD2A1HdBGSrQGZnz8haM44tKR8HxiA8zQtbf1wcSXWnD496QVWWGsuYBULzpkqnwEQXT4a",
  "key20": "5f5YFkGL7Wtqa4Ny5siYx8NYZbLmSf9ZdCSpA9C3ksk9wC1fxNjgFg73TdRjVuMHEVn9jMeeMi7LEnQ4Y34ydpWP",
  "key21": "4tNnqfU3uExeN36depAg4ES29QBFgpKm4acNWJ6WvLfH5VcCNAY5NgqZWkyYxT1j3yfF1aeaLa3fUU6Dd3JuMSAn",
  "key22": "3CPwAbacnFj4sG6zaSRpZGDKAkvTwL9iE5asWxUgKeBmZXjRYyrWAQvjEajHEBs59XYFMpTcmfnwHbMFM3QwCBbo",
  "key23": "4oiTv2UQHv8LAkMZbxDahT3hsJjT3YzQ3QYoq2are4mMs2yZS5VTmSPAoJGBS8QW8E1jPvXVqw9GvfbEF3uk1ErV",
  "key24": "5ffWWMpGi2ZVQKUJgyxLsLHRJT28J1AFjFcf55tCwe3MU5vghdD9PcSXb41NvrMwW3wt24dZ5dtX1KnTn2pBYMvT",
  "key25": "5vQGMMMFEy2YguJtj2qdyr4anaAJVfsn954Zjz8XSgY7pxzey7faKrvxFscom5azZ8vBibtXtJAoD75EAJLVN5XE",
  "key26": "5MgWYThuXH37ozNrrfuge48ttTaVhLWQiBnuANvzExpx1DVdEHcms4LikJpZojV5utMpdrLZAJrDq193sugXiwsk",
  "key27": "MsgLL1jY5XJSPMB3H25rHT2kK549cNXh3xjj3m2C7EcjroaJqrRpbzSFEjGEXkSWHT9mh4Be1nMs7h13e2CXFzH",
  "key28": "2Bjeh6wbhEuzuZhBVrQZGxE6EKgsBCAqrMkQ9a5eGbdLi95indFLYX7UoGvzEzaav7oHzZLYs1ddSg3PYgeY9VBQ",
  "key29": "2mwDp14cUrQuNJiBRLSRm6UowPPJaBArtwpXVVyrsZMJon8VCncsSHghZKkbtMivJi595MuxreruRQW4gbXuCfwy",
  "key30": "4N6YqSbVoJ3MqmygHgSBWCxowyTG6p7PjX29oyqjhu1LJcnSKtxoh7zJox7niM7MD8jBVK84q5aFBpxCJeJJjsmb",
  "key31": "4dgEXmQF9qPGKQchuTixHSqbD15ZZazCzQr2oRwUULxtnjPSmtbkwCvC6HUAbhbqcZ2Zo2XTj3crdeTFs2UYhdpt",
  "key32": "2scEeuahvVJRfqKeveo2CGB136FbuQTkZ1WyxxkYYA8nyA8JwDewqyw4oR6ucSBQNvfM1PJzawiDKcQj5VBWE5XF",
  "key33": "BhgTeFeHwtMZ6ZmFAEghcmio3YtN6uyJTdPCUMDLZw3w8hHzVgYMshVWmyXhDaSiBH1QaLKYotWPWbsXaWJASJ8",
  "key34": "547maUjbqec7C9Tzu5pGPs1zBER6vRLwyLCNhqQqF46JBjWx9vzYshsvH7xpB8nCGyFwMJFYG9JHNnahciz7tz3P",
  "key35": "GnE15GAemxsRxaW77Jw1b1jF9o6Uo2K5KXvwkB8zcTiuXwsicJLRtFv7mw6tyrqqo7GNMoaB5QpoGyrRNoWL9Bh",
  "key36": "3g1HmcnakdPuPSJ3wmDH6R2NHJKqikv4ZoNsxgMKC83VWxqPFzHptt3FX6Dbh4NoYSZCxQvoU32ThzD8Vx7stwgE",
  "key37": "2mNPCL3jrr6hc25veaCZFnoyHsypMQnv2RqizrgPdy2RcwDETJ5o6n1jvFo6gX5CV8Lqk8KZ6oFATCha67zNwFmU",
  "key38": "4yTggepPU4XpjmdSuVa9xrHG5R9XdkhATAHCz2bbMva3yW1wJPvnz5XPK1Gscg159t4opCUiZ4ny8nE6PX13NDff"
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
