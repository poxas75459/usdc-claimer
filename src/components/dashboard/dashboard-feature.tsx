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
    "3i7e2GyAgY96paAM469LHvkmKAmq6Xr4fCVijqpoPTz1AmmuNnszyCKkQff6DP3TSkZmqdcSkrxxDAhuM6EzTHzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fvQsNwKwXWuoRWMA2nH4CCF1zjNYAffZS1kj5mzKb1TT4CSbrXApbsbjCQyuyhiY7pR7PeWRXhciJsJ82aitGib",
  "key1": "cK3YQbVHtF7dYZKdR8N2sTEoHpU3k9yAbJK46TbQij4TxYFvDWKKP5kyxSy2wZC1VcxF7HVz98LZ2tHmrtL797a",
  "key2": "5Qjp4Jea3usKdk6UqF2GFCecFEzjth8JTzJhCZhSFanuXJoq4ygR9piduZWy9ZUQkCpUp6j3W7T3R3dmbYvHP1K6",
  "key3": "3QyhMjLPYV9hVtpbT6qt3KSY9XYaFXMWJkRdB89YLGWe74RYzf9ETyF37qPH7GXEURny1SJVvPK1V1PjCb6NFoZp",
  "key4": "2SWyuFKa3qx1NtiwVYuywp3bBwPX2vD3XpdcVWmBziSqBjjsJeNGYaFLCMCwkdUVZRQJ3w8zo2gYzhEe4yUnpKBa",
  "key5": "2bAhsKtLMBZ97i3nUeEkRscQPVM6haLqyaNxVQAEzheCqMEjsVRaifD1KW85tyvxbGsKfUgMQrK3ArJ4hUqoJsQn",
  "key6": "2t81qWrZ3NsnFPUdWNX9jwFz9E29gwZzevgQEW8mBRwHnawTG2vQkD2wjL9AqH297bQBvakJ4isy6QTWEmujAj26",
  "key7": "5AAQCfsehqqj4byKLznN8bwyAHiEPbQjXQVsHZ9t4zLhGKN9iBmriR5nZ2BqXbsdUMuR4DsScZyCLzBXPxw2Jn7o",
  "key8": "7cy2VKpDBLyx3wvNKb4PsM2GaRtpSenDKoWPQtzwhEiXfnmb4mBmYzaHUMQ7crULgoXX39FgfggVR7SgxYufsM2",
  "key9": "3Ay2bPr5JNWsHH7fFMZrh4UGbV7skupmNrKSJ3MyyZ3hChghfwioWZNnFDyAyVCtWL5TBXsdoofMNFV7fvkds92t",
  "key10": "43gQ5Dec4czR3NhKZ5w1Y7cXcR6mDn6DVmxjCJ1bnCiUz5YkBm74VzmeUXDtj9n6iGKyf97GsR7xHFmnJL1RftPD",
  "key11": "49umkU2mD5S5ehsR4JgEHGBcykH5xD8tJ1J1NJymiAB56hBqAnVCjb5izYJ9K3zyVV1GcohJ6aJwSZxXhEk4o52U",
  "key12": "z2XQotor1fG1JxGgnJuCtuaXcYbbrcqTXt5uFcSSTpEX2cqkXrTq7kGfXgcZU8BVCXFVoZAnh9CppMYodv4A8hf",
  "key13": "5dTty3KZ7F1QeHJ1AChnbv59KbEXBUzAKS8SoyGUygYQ3xyL6ZJpBaqqwfeL1Zm5VHC6UX7gUB4q6d44qaXTxJdo",
  "key14": "5XvGPEUVBBf6p6Uc9vyNXw6uLXugC36PfM1Ljau89qbXonyaWZvT41XdqchspiSfRhsACAnXrmVZKkmxRPMF4qhb",
  "key15": "4zM353NKYSCrRXDBujkKNG2BERyXucw1hy6fy3P6hDd4FEZjy4HPA1EtCDgV7cAVVXkRMNc6xRhwXds6PqMNDCLv",
  "key16": "3zS2Tje2HJH2hHhvaXKkLPMvoD4ySK5TXTACX1HHmUgJv8b91FKz9yVGcGaYzurrJcWo9PZaNR6GjC7beWYxbgma",
  "key17": "5LYzx56VLrPDVFod9nXWp8CmN6pmg6pWUve1QL5shV4LmsJjK9qzZfKPbM6xZn7u6XJX8F8XW4RS3NFBp16WNRaw",
  "key18": "4RusSiTydpQqgWhxGQr5zFcmHWuW6JNhoxp3JJqNCHFXrTVuCdq6NRq3nTCRT1DvjfTAZX5Pxp9yEctUk8hGR6R5",
  "key19": "4emmrHPkwpWpwRMeHwtKXn9JcKWvRRPLoAtmnYpuErNcFFJJ3un13d4m4MsaUywdQZpjP9Zp5sMB1BBWVZM7FTNs",
  "key20": "YNZnmdzVTzaimKCWmRPXCfhjmpjAnTou65RXunYG8HBkB2jMVQNGQmCfCnbyEBhTroyzaYQWBaL9DPtrj7K5uH2",
  "key21": "pCyewZpkrcxLbQDhyH9Z3DXNXaD5ERenGqyp1DF2uRUFSBTjNcrsDxgMaSNn1yZyPsBa2u2KpznukQGfLqXwxjh",
  "key22": "5YqGR16oeNuUZfKfmtvphBmr7XfSxUP8BdoWTZbErGLiSEhmLXwb1MxMF3vVuSdQZ2M53W1GipLEyGqkKCUd6fER",
  "key23": "3GC7KCq9MeSEd9ijtoRx7qPjQerKtHg1LZnPQA6j88Bx2RcMyUMoY1SMHr8EDFmshZeeze2Do1TU4GWDLogvHHzF",
  "key24": "5pVFn6am8ZgXRWDfN6pSGJ1Yh8L4LYmW8CDURaMPVKoDR9iJw3DvwLfA8jqKQoLAJ97HxRtwfjGvjg2EDW8SbEgU",
  "key25": "5CFaiHBbULRCSr4Sk7zbH1iumJ3a32ttsbNo7xEWoFeoDP3prWzESU48WFjz56dJfe1x4Q6B7KKzQ6N8dfP66gJ8",
  "key26": "5ah2HvmQXHtTp97srrDEyNpFGg7oMaiffHc3M81DGZoAUBgB8NPSqsSfJQnLoWAS1PANNf7Ay2u5YTYC6shXWiT1",
  "key27": "TuDZyZ3MxUcXgdVyKjSZcZ4SCn7Fjs2EJzJwJ6JxQ1HLYv84eQjL9S2A4ZiJFTuV3g45Ca1k27Brekg7VYxZA3p",
  "key28": "4dzwNUqCdBvd6shGucVw7QXZukaWa74qozZ6XhTupeTp3xpH47Qa274rhLaxDkCoJ1QN2HvCyQDu25GG5y6wcqPn",
  "key29": "3U62LpATrf8HAo2yG8CZkDVdutN9b6fNr4CUnZ7bQoQceCL61cXsUGU8TdZquXEHiZLDudjehSCFReoUCaD6rm7w",
  "key30": "38MzsbAmpA35CJSZ3QdZLtMKhQVvtuXpQrzXuEiv1KKUnC3qH2KWchWvqkadbBW8EUjHmCgyyp75Tow6BW4QkAfc",
  "key31": "LdiLjG4e3TAHUMzkAMoimoEpxQs57rK45sFLYiDwEPNCYAhMM7wfNXdKBaEXt2JfjLLoYYRDJy4o3WgPSSH8hJX",
  "key32": "3mCeKK59ddsLh2zrf7tbcZN6LYrrVw9bhE3GYrw8YyLMM9ZeUM3A1vdHhJnmg3KQsa7EMroaRuBtdfG8LD9RvFh3",
  "key33": "35UZGybwCFdwNVmuZJk5bwhvybJfo1P7jkhquC8J8vKp93ceo9DUbD4gTuo3UDqHxSWMA88uuJ4yR1VeDP5YaNJF",
  "key34": "4PV4CxS33K6xtkrhKhZmmvQcCzQPXVtH3SLEHPqqKRcX6uhgek6NKVFB1HRqYgT8B7mMdadvZULBm7ZAFAtLi46H",
  "key35": "51vWXd1okyFnjz7J2hngUnN7phKktC6QfhShL2hQHk7e4vXRYBu3KE4emjbSKrxK9RiosYEuAq3STSTBait49ZBr",
  "key36": "2vmtD7Edb6trcEMrqZqjQs34HspLMKDMzq1hjNvR31Noh9nhKW1XdGcKc9cedmCiwDGqYZLrXtfwQ3AcREpCEYzS",
  "key37": "7MbFfdDzcW9xzA5huezv665E4oHwJgYQU5CfLbSfdmXF1bS68ckE975qRGGX7bnU6Guoo7shQLa3rRi1joGtJys",
  "key38": "zKTi1uvEyrfnxYQTNCogwij1CTZ5MazRck2YSJDxypqi3bdLh8FA6SUUGKBWao7VXSY3KZd1b1ESMriNaNSp9EV",
  "key39": "3bey5KHecJec7TUW9bSCu5ZjNdrkst9V2LXfZn3g3wSSKEdtayb3gKaKC4MvFhVxRbr6k1vHxu7AJDs7FQWBngeM",
  "key40": "BTTpHv44fY6ZqBXDu3KJJMf1J1avb5DDzvHjjDd5Bqmvjtsged4oDFN98D9P8Y8v5tvFEHkvX9Q17smZfFXcwD1",
  "key41": "49Mha4HAhrUnzy5NMUvHxyFyThQRHp6g2idLS4Cz73PfwFiT5ak77GEzaJmcvpB4bNiUsH82H7dVH1deusaTF5b",
  "key42": "YP4rnaMeiUD2SQbnhJyrZhKqUdoKGM9yiGUH1JHnSHqCcSCBhf3j6wJrRqpZwukvPa5baJc6fxmRYfyEZQR546Z",
  "key43": "2BPL6tnVKt3iReXzRGT6m4dZFoJDuAzaCc5LNngnastGxVBiT7yYnpUzBqKwvDumHaKDNoSafW6X174Uhje8kcrp",
  "key44": "4cus6VJtqJzhZLe3UcvrR3GUMdM5E2mJLUvCzsujD3un3FT4HD4RpS2udvYy58xwNf1mk45SAXaH4Mrw6Qv9UpYS"
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
