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
    "364avitaE4QDXbcpyCwEuHUEUfTVgGTabRhLa3iPGRbHQJS2CCmoSxyGtpF8LSZnxtFDwikBJdeD8af2PnVBP4xe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sdfrybUAE7SttjkPcMdsUjh4ePChz6KDyqu5wdvgAhZjD8MFTsgifWxNVV2AbJcDsQ2MSxmjfvRn1z3Do8viRUq",
  "key1": "39DxdnDeW9LigV5crUqU4ntC2Y7Es9vmHMMbwyHPpvdTEhGZcpiYgEk7sDih49SypF8z2HwMLsMXsnvMHsvzTGhS",
  "key2": "QHow2DEvTPE3DKD6xuBtcX7WvrtgiKdcQC4GbHJ69zatAeiAnNp32NUb9fYG6ppvQL9VAGo9fbvEWEQFyDF6MGj",
  "key3": "2MRcyX8RovdH2AoXxpM5ZP5jW7LsTQBDR1x3PWxjrSrGxzhSuMyytrJov7XPPQFRkDkr2uRFT5RbLykMSCPoWZ9E",
  "key4": "3pZzHEmHMv9RFEV3k2irNwceZDRJwfhZ84DvxBhp1KVYx1NfTrAtdBSq2VEZDGiNzrGFxD6Ai6VRY3MGw8JFANoH",
  "key5": "2irB11RaVriZsEAW8NHqeswSU3oUqGVojM36hVStiDpJ7Mhf2DV1u4HYpBbQiNnHsfMGkmfWALjuTrsNXYmS63D",
  "key6": "5Lg8iCVsyeS8rXFcgNCiPEiJNrdYsn6DY4UkpuKQgiw51pEe9nT23664MazcTAgNTEgMTNhVEKWheRk9QUt89NgN",
  "key7": "23r5gkv9hmJhbtfBbtZQVQLfrKpygrANK1WRN2Upm6zj1ddxQLfwJf3Z1tukfvYooF2hh2zRmA7n92ti2v2xayZA",
  "key8": "usq8Pmv5bGWV2PTkH1xcKW77JBk1h8cKvPXo8jeB9pRjcRztQ1CbQP2DLJ6D3B6WDvJvtHWERr2Yxv8hJVyXz3E",
  "key9": "4zLwkMWKUapFJRk5nErWhWdwT1WNYZWmzU3Gszt9WAnC3V7cf7bHBf5N94Df8gcrGgFj87AGBBJToJdPiChqGZc7",
  "key10": "7aAcmJrc54yvgv8mejrAijJ1qYCiJQD4vBp7v7WhPYTHA7S5D1ERBRbrBXVQF45gkXVhBRBQEXiXwPer2156G4J",
  "key11": "22TBo9MdhwkLJc939o2DC8cQUnWJ2mePpuayuPtKqXJPxBnJ3KAhoH3y9n5MuT1i6H5NgGqkpaLYU8BWFtid1aA9",
  "key12": "3MjgZBFiFSL2jXATKL3h7jvAtMM46rtY64SRoXKPdVohvfeFAcdsv1VTtN3qPsNkvdgBnfxEFixjx8n3QkuAsNoX",
  "key13": "4cUJwVgjSZNhnNNevAkQX5ekxbk9BomHwh8m21whZdBKU5YV2YERFWdvUsatj9db8m4h8wC5oZhmoDT6XLHy5hNS",
  "key14": "3JGJNvyiRaLVXwgvvAF5z4SKBm1YoPcdiePWDqeD7ZsHfgVS6U1y5x6zyVjxQFugSjn54FXHzT2u9N5btjU5HmTv",
  "key15": "5owAozMo3qUmDc3CJoSKdmwrY4ouRemerakiFnxHggfXzf7B8NdePteEiTBdo8fUL2qkBnBgnf4MiLKxtaSXTpfc",
  "key16": "4qE7t1JaN5PXsUXfWGaeSRFwMnadT4SWPGgEB45MWt5UU4UrhUbYnfVEXcABWVNkx4mBvaDBjv8wvGkDvAFdvs97",
  "key17": "gpKgugi9FYzjirg4G86WAQXVQBnJEArfaTyY7QLFZV1DozxnQ71vJjcgVMSRuqZq2ViAq77NjhV7JoNLvm94Y9q",
  "key18": "5Qjj4SJV7g1daLGFhWSowQSwaFx5ta5PhTWgyWneM3JZmXgqJwermATUZvgu6J8B2Q1D58gMVuyeE9GLC4hsZDYA",
  "key19": "4FuNcfG7yKxbiCVgU2dh6rypqGko1zRJqoMTwRE5o4RjdGHs5t3MeePaxMZ9shWS5WCgEYrKF3ZbSw2PrR4VddRV",
  "key20": "oXjXSVE5MLMSRMyQ5iCG6njzNGGWXav9XxxKZbtDsL5ZAcyMpKXxRvNxwPJzKMpzLZdoGgP64PEjQSLVSDn7j3P",
  "key21": "5aRcPBzJm4HsK5ZtiEAXg8CyUypVaGbfBjX1y7z1pwSKpJnvCzgJr7FXJ9beBTRDnoN3KC6YvvN93MYo4nAVxiQS",
  "key22": "3ZK68wattfN4EX6YWZY3e5uENvrqgYyjw3YdNHhjZZmdDyszoJ8oqnmWspzmgpMSqtGxg3dCxWwuTZK5Uiz5STtC",
  "key23": "2inCgB3L3oWEnJyb5K8aJTtkRUW27zbXDQuov7ckmxFcQ99CsqU3xdUFqGdthA7UCtgJ4m13XmZqFKdF2oM6h9g5",
  "key24": "2KSbK1sP44zBtK21q3Fp4cWmXBQYxBqHJn1isSbDvBpGftBeV77EVXdG9WFmThNNSYytx2wkvP92LZMSe2kGFHVm",
  "key25": "4SgRDVsr2J3BN38Y6Zk891UPgvrfof5QtHTRC3wjLM28pMqLt4ibwyg9VDRxT37jcRmbue6E3sXg2CS9Rf7t89xP",
  "key26": "47FbQvAooRyN6bLz1DtGG5fxpGRH9t2i1C3HneSzJvq5S8Mw2nK9sATYMsdSb9oyGSJ1iQjKKYaQKBZxRjaiRWRP",
  "key27": "145b7JzvF28MD6v86derYEqAe7ZVxETcPHSQtgLRk9ZCbPNjK76HcLXMXA2EjDzjJ8BJnQCZBHCKmHtADcbomZx",
  "key28": "4DngCaHdcMFibjqahxmVjrjEidDZjL1A97h5pWwn8ux9hRrpp7iwKV2gahbF8U4Hpnac639UreKWF7cwyQy8azbg",
  "key29": "FwKBRZAuMtCjdqcxB8b14qaRUNkXMuwSUkpBTvMkXjagATLivXtF4fuCcPdZmcHFzm6ubx7gVFaLu8PCcUCgsFG",
  "key30": "3RaPz3t8j24EMRBxvxUupbknsaf3KE94TGjgzMfEZxyhMQnjGZ6HepbwD5jvRaQv5E4Ermwe47ir5RXhRcGfnLye"
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
