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
    "567J243uyJyCmtxznrhePJWGXn2QaHWb4NeaxxRJwZpcpquwJepEy8aNEXiVFomj7cY2M95imS47pi6QumhfWLVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R3wHH23PmXPQSgsQPvryNKNdHRNrvdvN2P8benh4APNB72J83ofqpMK9mnqfVf9GREVGDxuEhw2PFwLbj5PUqGB",
  "key1": "2ryGbBwB7t4mk8DbvNyvjHSx51LtAZ5VcFDeuZxUy7R8T5ebhbRKVszuP6BTwAhh3Y4SAMqZYL1JhV87eenS6g4N",
  "key2": "2mQ3wDSCFjGM1FoQAXXzhuVf2YUFFs2ikLxogUnM7dAXZgFpNhdCMa8N1UmvEtfz9NRtEBPCdr2d8VDuqjXbKTh9",
  "key3": "v8ACFWMNEKV7mSYNJLUhyKQvdf6BcPrC3srwzruVVb6Lv8wb53NL6F2jZckcoPQULWTsC4fhhyQQjJNx23Su5Ju",
  "key4": "3szetQKvEkTceVmDZz2xsYsNQ9GwYHc2Yirrjf69chk7QRUqUCCsCBd7Sk8jSj48ymVKpJY6pkRA8rs6Ku3sk9xz",
  "key5": "3iKpJrWMTgjXCzoq6k5M6xPeT9E3yVWy7p5o3vVuZMu5VVBdDbJMyswt3gwwbiUVtfQcqVPoARKPufpnJqSvTqho",
  "key6": "3Qo13M65onpN9htohkZv5sWsH922ETyAhFCbvrq19WXsRTrhFaZ4veGE6upGsvM61ruMp5NXfYEaB2EGAm2jX6y2",
  "key7": "2pMw51DvGMLUtncLTtp7XjVzDTgP38MAzAt4oGLbXzCqUU9hNac3EwLhG8hFcbcVTKaUZ3awUR4eviHcrUxoDefZ",
  "key8": "3PA2uHKaub2axMovyZEubQd1ZbUDPBfyf3BLE2DmmXv252awL5xvEYUdJicjdaEnSmbg9zNxY4iqyUuQ2n4VDUUo",
  "key9": "56BM9gHmZr1PRDotR7Hp7cWoYkTwWvKdAtmiZMU9Su26C2WCiyZthBc3optpmHKjVu2yEZCHaPz4KWLxKauRisEN",
  "key10": "2Rs8736Y4SNghMQwhNJwGTRn4GkMXdnznPhp2jstxChd8zB8SdNCV15ZdspBNvtuBvbd7B41JLRTKxxERFFBivVd",
  "key11": "2qbbZrsurLxY4FBwyv2zSZjpfYTPuF14k55SiesCwyXQN3uNCWHjigShmsf8iGgY7vnJfSZzcBkBu6r5GowFHXmr",
  "key12": "4eNEJ5BzJiXKmprMQkq1M6ESvQaLJWAmiKX2wFmyRKKMwGPCVhupKx7UFX4b5j1DhT9LkGuuEiEHY5BeakAnoR1a",
  "key13": "7jT4GKT7AcWViyjBGZuWCZN7fyZKoZVAEji2KvQkCaipmmHRSpVoGVm6gvghRq4FN2oEBb9ce3krteuW3hAp6ma",
  "key14": "kJRXUJUNXe93A2vXnLeWNQGZPnwRvpqwKXn75jp9qgXvFnDRvgbj5m2V4UjnA7zU3tvtgwWuNAut5PAowYtC9Bg",
  "key15": "3Wpr9RzSS3qp52LyJpMjqf2xsU67PjqGEq1G5JszeyhRSiNnhDdbnEo1fNqXDwnV8KNBTdjM5sqXQAm24UsmrfvV",
  "key16": "fb6FSd769V8HeLKsSaJNXw6uL74QGyDrPvUiQEaLtm4FmsiK6h5nCwN6sjSfhgD5YxabkyPKKYTJquvd8RQTZrT",
  "key17": "4scLLomSWZFnNPhjUm1Ps92UsaSDw9XJP2WgDiw6qaHUv6Jyay5D7YMutBBreJV1WVzetmy3bbpTdJnoNifG4QDE",
  "key18": "3BQu1d9aD6d7CddY2mzMmxpYHTLUTD5CcL3A3zGGirrGtZPCekYKGe4LhMBqbDUtEiRCGBfVVZDhXyzodGph3eku",
  "key19": "2VPQQdSKWfNVKa3xcnaxN8kcN5iNDzrDyKEKnFaAb6boabtQHe3vFdZKFChzot3eMr2LsDGgoAqq51DMNFTo717H",
  "key20": "4GXW2NDJUYNhj7gvJ3s35eVqKB9grg5Swy7bj24yAzTFeQp9L9L5BNv1pfE6tYhJKgP6bhc9obvrWZx3qaXg2grN",
  "key21": "4e3q2b9V6dG6XRiWs7fQ5yCnhLPifJQEEvVeyiCtWvMXgajQmtirNF4xHSX7q4xDXak4mSgHKkQBeEEcLTHC5qXS",
  "key22": "4voySp73JKk71CvoArjAqGrXhrgtbLp68d23RipqizzMkm8xE2iFwVKhywu7Nx4TzvuLDNhYSSCMExCKiAHXryEu",
  "key23": "53Qz1VAQQ1rCi6hMjzuphATbgXxuQPt46AkhUecKK6Fi9CzJvHi6ASRC4xyABSnVj7gbDbdBbBkxP6QefhYhRFSz",
  "key24": "2gZSf2gYbX5snioCQsiBvkbEtBm6CoyG2w46UZB3TZ4zzY16rSGadMhbfc3aNugtBti5aGiv5SC16MCeagy5PM78",
  "key25": "34wcboA12FbC37yb9jjCDwD2HwzFGq9x71U5BRckU2QFzEczKcKb2MPEYSxXhBuaWdeUabSLKEDzEYq28SpgjLVh",
  "key26": "3NmGQJ3CzQJat5U3F1LFXyHKFhqegxcPrzwyMrE98iqXAaX6cSgaUPJ5mjCgtFqLmgEPCvw3Gz3c2pUegynN3FC7",
  "key27": "3YEJXtveLLqBfvatYUdsw8FwF9GUx5exxQ2k4RWJTPrHm3e2vWZyh3xq5vr4A1qNRJCcVgE4CW8sSxU1b8ziV2z8",
  "key28": "5MGzfRTSVPWbkWEwAjjdeqnrAWTKavj7dyCDJDHb8DPAKmsZnz31bix6guq8YNcDv7qScpLkDob45iZhhTbUqtU9",
  "key29": "4RwXwxSscB8TQiLdK3psLo8CCZmSs3tWMSyKwzojVXDGzV6HeWNywg8urqGgnHPbe6zXNC1D5dfgPdLBKEztGyt3",
  "key30": "5VFYqfbHdkssqgXfrtgiGfUboS4jtHNgGkhJvfWdBXy2engQAFc1bPFjjbfSJ3LrBFGNxvdSG536ydwESATq3npU",
  "key31": "4PWq7w3GwnJx9ijE3j2sWuodzH33RGpYQ1BHeBRwgCSq1gAKH5xzBFB66q6rGje7D7LBgb4rjw8nJAn1exdq2HMo",
  "key32": "5rCWTq3CPMfv6SbGF8m3FBdLJQLyWijexHAQBC5JjGQBA3f54D7kbBNxYeZ9yD8MbWTbQv2bqcg9EAwr18uhrcnT",
  "key33": "3NkXMdmQuj5ivGxmrtxHSJwjbsyH2kPth9Rw1fdpGYPNUwLv43XQoARzJNV5eAEUNSYxwvVYdP8kq4WPYLJi1TLX",
  "key34": "vTzkZi4STUdPJ4ng3ftG6jM1XkkvEYj9GWkmqiHQFpWkmVqgSm1ZSfYQj3Hv5wqpXwrPgz2oWzYkQ4o5RZKpotX",
  "key35": "ioG1NSDLYBkurkbSLrP54ruwP9qZJCEsSUq6cPL9wgFHFPrhhR7kejRzdPX8hYpHfjJk2GUvQqyaWhCzmt2bWio",
  "key36": "4zuAngSkAfJs84GgAciwPmyU9cd2jrE4homHJfPnV6iUH5CtfyJNKNV7LMrgkNUX9WoQq45Vutz7RMLY1S34g3n1",
  "key37": "36ioop9HXT79HuWfBYWu1XhYttSdTvFNFY7WbaD2Vi7b59LFQm1FDLcNk5UkUsYcV3nNKgQrh8Eyvr4W3gtZfWEx",
  "key38": "5Cfq95ms95KkYNdGQjp5EBexbhHnGTdANmgqwnh6yeupfd1y4FAVxCV4T86VeRdEn8MZmQs7GMrDLFViuFh4Uhux"
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
