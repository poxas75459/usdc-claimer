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
    "oeRZ1GVYmBjQhoi2tp9WtPuATxhAS4suWZUund3RPLQdYMSg7WCUpehCEFzatkxKkhpK9cYxnBPtK9hGovXeTSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8bqv4Q73CNpWmeQUWgKVuNiDXnCFNnnG8kYpzTptKYhgj2wWAqqsMi3smSyDQiFuSN6oEbQNpEwRzjweKqzSE9F",
  "key1": "49fmqFZHvPKRHL7pMw1WEVcTGbx7E7DDcCY2AyAJDYCZwzvebTazc7cCJ1WcKUjNPAdRCw7ywW9kTupF2fvvAkyf",
  "key2": "78qZFFeWDvt6F9LQCXXwRxQYfsToSiP3RHTYL1D34gBRDpWnFPNzuJQvgePZWJpVbGJSjPmR1gfFa4DSf7qRc3y",
  "key3": "5naTWyGV5P2bC6gr542C9KNqpS92auHP4ZB5yxUwp1tWMztccEueM68dYsyW8u9mFnUmWtAVJMqFe939tAqdQj3G",
  "key4": "q39v9eFYpSdGuHibg5nkszHXin6ixfbo8CBnM4U3CVVuwYkY7Bhk1XgjZUwpVkJ9yuAy9aa2DAmWAVdny8yQ3xm",
  "key5": "3V67A2DGH44DwbWeiyWERafn8wcsN6g1jkyNkGtSN3VJJq6NvnUjCtSvxk6TMNDah2t5SqQJUahS2S3X6fCJGHyZ",
  "key6": "2yRdG9AvufsbaHFtq1kynWw5VeT5s6etFqNYwBtXAuhcXpc5QfVBZ8RpujAT3vp8fmtGWVus1XP4Fy8FdFxSCeb3",
  "key7": "4vaemiqF17HAbpWugd8F452aE6mexjasNuaGRtYMoEJeLM3FUP6FcfnAygHjcPrw5NRCLu1vcoDJUT9GFz9bK4H6",
  "key8": "2SRBEsUSU9srnLhWcyR95ECPFHyUdP2Q5antG45epEA6NVNv3zBqw9V74TuBxp44ywwfxDMqp4GS8GhBaw6Jxsd",
  "key9": "5x36jFPsnT93gVfXzoB3XD6xxdep9aLkQ7BWGGsU2UM18oQz2jA2pYaga9f1LGNP6uAMz92h4jAs79YBGiefgEzf",
  "key10": "id7mDXy1JMmyiVJwLfT9qPS6vWg52RSoSBLAFCJmZHGQNuE7x13WaCMy5ABfgZVWChPQSqXjDZXxtwJCGXUo276",
  "key11": "3hNjyUXCjdybNjufCvrEGiqJYnw6xkS9jnvfmKBC9ujVqJuNrdTR5aV4xWrex3VNwZDH5nzW3djmwHiZ9dy2zxcP",
  "key12": "61ttKFrxs6eLd3USm93fUXXjnbScbn3wcef1auXQP1NyRcmDcuJHnWoxTq7dvLW6uo4mgUxFzpdEzvdzRpsYFT3C",
  "key13": "2uVbuUCRRUmvYC8S4jATHGNJxbMa5Lq5heK88YibNqJhvvm4YNT2jEtCpt5Pm3ShGSKXDpH79a7zv9Gt9KsGbpqJ",
  "key14": "X9b1mGDQgEsADSPcE8RWUoQQnCf4X2fcJRv46dgjZm3Dnk8Q3KieJYj896UCCLfWCpefD2JDgoJnu8b5LPkbnAA",
  "key15": "4EJhm8yzYo2KtQ56mBUEVDpRestpVeC9ndXRgkFoGaKZaZTQHckYB2pFhQXLN3wGy3wgBaifSZFnNGkbTHM45QYb",
  "key16": "2tKUq4zv56gMuMr9xHebJKcvsJS5PkYRJxshSiCZ4JddxoZ2y2Kd8VVreWiXfoNQh5NUbWR2Uuqq4NJuNzC6yFur",
  "key17": "1AEo2SdexoWVJUV2ZsRVZACmdBP6VHSmqEqmwZ1WvCLvumUFg6LRPPiVzFkeSKBreFh9VJwaUzZcZCHoctEgr2Y",
  "key18": "LFq5g7BDu2DdH5Ym8s88hFto4svCLYrYc12JuAEoZ6fiSHg64xsD7sUWQP82s3N6N7nEbhpDrYDXaGcPWgVYWgY",
  "key19": "QQMFP35C3YqbfAqQtRkLoELnWgQuEzvrkQNykCofA4VrLq6MPMnEgyeM3TM5S86cxrowuZ3n1tK9Kj3ZmvPUvZG",
  "key20": "35HMLpUFmbcZHv4ujrWCjkHDMsRe3jk6R2M69cgsMrQgqeE1pyv7wTRZtHXaJ22N1JYEXCDpw2gNuq8so7L5FD3o",
  "key21": "5HYW2cS98rbXyY2UTzvKEdTmqFLniSfycaocEJi2LvY61N36AFt1CB3aW9AVx29mjGq2egj9V1hXbDasTuUNL1u3",
  "key22": "4fQsGL8Gb4nbodVLWB3krjkTWMhf3dEAv43SPKfye9DgPSEPL1KkGF7oJzWyutAKqFbmrMWvAm2Mj6NswRgqrWJ1",
  "key23": "2iH31GMDCEyB19dcSeMi1cgJp5HYWwDVP6DXhkRGshCKyHLQdPzaC68GaabNFuwfY7g2UkdtNGrM2uDKB2tkb6iZ",
  "key24": "3CPGe6JriAg2wZ9q55MARPnjRaUikDTKMnM89i2TU64LoEe9ABsNn4ymm3ebDBpA1NGKrrjBLMBjQxk6HdFSEFXr",
  "key25": "3AcDZnVCB7hB8x4g8vKwRNdsPD5NG2ArRPx87WwgDrcSF4ZA6MvQN68475jDGho1j614Gdy7P9t9iQvHk6Rhq6X7",
  "key26": "38MEG8SA7EWCaxifXtQXYLEnx6TYZBkG21xbYZJkmMB3JKgyMnoim6uJopY3ShPQA6iS9oSFN5C4gZvWDtuEP9kD",
  "key27": "4bGJ71FgdosfeTx4Vqo5JKHPdpN45fPvqTmYVAPAsrSDpGXuCmgK1ypfnWRqwwQ2EV6pj94PP1BPvC9hTUCPhbMz",
  "key28": "5c27z9Hx7mM6VZM69dxrZJDBwHUupsmPbXvDEX1szQPu9CfBsjEnxgN2EXJJkF5Pu5fe2ijtkgP18bCfGY1siB27",
  "key29": "451kZ33g3uVWRzS8guQw448RuCGD1PcHedgM94r6KocRv7GiJujmriJP1YGkj9BTK98wfdMNfcFUjwpJA3sVNyNN"
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
