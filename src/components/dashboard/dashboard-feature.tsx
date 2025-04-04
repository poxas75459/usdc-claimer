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
    "3VWpf7AFeZr6nRr8iaRUqo8LZSfnYcuADun6dmYtTmuLvThNe7N3sHDuTeuEg5K1JubaJFzZCm4EWKY9XXbHQDuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eCLNXXfNNowxqccgjv2LWxDs1mkBcTLSHH4BMBR6LgLAHuomN7DdKDUWCK1TLigpd15F17eZJV9HMCrT21kaPos",
  "key1": "HwA6fwVGm9i5rTTfzfXysiY5T8MYU2zjYfTmrh3wnn8oufPdTMiy9uABt4MEYexAYfrpkiVrGtBfRph93iHbykG",
  "key2": "bBwk6rGrP3UcmFuNBA7jRTQTC1P3uHZTXbYUVwCh4Zb9H9YGmcihh7hGtPJ5d2dzMAhMYirKkWGip7BxitCVG1B",
  "key3": "5sL3RuKooLJjepBYzQsMm38955c6NH7fY6QCaJHnkxzn5BAwFh2fxUo7iytrjmzCY2qVH3mEUgeBgHQWHLr47UTD",
  "key4": "5nYppMTphiCTZoa6hVs9WuwbDEzrXFhJA9tjUJoZxGoec1B7K1dHJZAcYqtBHkf2FMrEHD2GUhUKV9mMGbPq9F8Q",
  "key5": "xzS8z4v4riViVJaSsvLY4jQjiP6WruLBhzu5LLSBbeHpwp89HboCTCu5uzpQmhoi4F7Pze2ADEj59iQWgpKNamC",
  "key6": "2qdPUKCK52r54ZjQjxx9hsmsd46ABac4ndLWZ2seRNiz9PnroSBRwafMQd4XE3Db2q7TP2BQu8USPqhyqzuFs4bW",
  "key7": "2XGQK84xDBZqWu1BDD9rAwWenrk8UmAVfhZmBAuCAez5MkKH13RdUq7mSiPSfrE85SSbQdvNWuhWXcRrAAgENR61",
  "key8": "4V2Bqyc4Um6ZiQQqDvhdcbC9MsLxNCEEXLFZvA7vwsA6ptikLFUba1ArjCEXPieQ7DBfcwjG8f18FjkW956bS6nS",
  "key9": "43AWVrPPQ3BHY58JkPU3CPK6Z2Lhq8xpGJoMK2DvVAwRUT2jtds25rqoXrit1psvHPioAHDS5oufRHmSndEZV3zm",
  "key10": "3CkPQBhJJKg2L7Z3YVsRAghU6v2qWxchGUQxvdmz38wS8WSAFJmocQwSYCmcHswwEn5MRvj6QuFRfBXn5GDkWc2R",
  "key11": "27ViM4kHwMj66oXJjrCH2wx9Faw63qbdSGEt6ehUwBLLyDVivN9cK7WjaT94QwrbGSHDw5xL2mRn6qyq6T7v3Jks",
  "key12": "3x8Mzgrte5bDRJ9aS2fPLjDMSJ5QXBhmwJ2A6Pww7bK1h1Ut3KSNaQkVbnC8ZFcqfFHiPUE3pzuuEW1kWzofGPYW",
  "key13": "3mSVJZrbycJ314XsstwgTCwBzpbhfED7HoD1vuKgdR3mJvrAsrjANRRuha4hzB716fJfz5BCtVCHqsZXnN86ChmP",
  "key14": "5KA8bD2bsgxxkVzhBUfDEnRZ5UfwEwysMmcdJyRnURBPbEDaZWxtqX9HRcMJXTx71ReTpMNsHXR93ALxsMAR3exo",
  "key15": "33wzGSQ41goqC1Rd6qP8D2sWaQzDBirZEdrbpLcE3GRj6vuAza2GvdGSD11VhQCDxHyJQcBwDYSr46zHSBsFhJHe",
  "key16": "2Nc8JsnUWzF4NzU8navdwDCf2fHAxBmVFwqkHe21fbMH8ppN3aV91fpHUsEhN68KMnHrFq2dZVfx3qQ7CnfgAUWB",
  "key17": "BS2dYmbA4quV9mVjGfJCivunudzsM7G1JuBNwLoJjF667uXWUsE1xke7W4BnE8HnYJd9m6AWHQKD9Ct4YgagdEu",
  "key18": "25MJZ6Gnjq34tHiTg3YPmk1qbKjP3eyzNGNkPm7VCszQAToB4Jh8ZyyrQoR9yHDrJ1TmaA5Uhx5HGmT1nFQZaNUR",
  "key19": "3WZcYyRHBk1QBvKVxzpVEZjMdH9ArXjig7CL9NsoCq2CVuZXNwphubnkAkHjh1zEB9kABfaDrGKgJ3p7WcrQRoZh",
  "key20": "5ttdNk8swXrkXQJqn6K8xm4NFpeKr9ivL5T132B6iAF9STUB9kL3kWd5ENUt9TdRz9amQzT37XpCwxpCT8Fmznns",
  "key21": "3YxwNSHTn1qwa3ZFMQjC2XUGsLAYwcBiGteV9DBDWyjNWReoBc564Fv6GVtstRq7tSiH9FEvyA7LUhLnnzxLqHh2",
  "key22": "223TjMWmXtuMB82kPVE8ntcHrVPQFrxfUNhCZzo9vGz3bi484zLw1DWJTHkVqn38PsvxeYvGZKKCiNQZef4wfspK",
  "key23": "3rxV3nuzuv8idsJnCMd3BBitg3nSooT1XXsAirhMXoGd5p224NbJBEoJcJG3oM1khhASUBajYeeyf9MefrY3HT6L",
  "key24": "snSnMkHsGLYeRqThNRjCec9w56qJ9eBxEQYocvxatMZnEYzziswZ957cKvXpAHNwzu9DRhqV5xyvipNkqb7VVKa",
  "key25": "urYCefCJo1TePNiCd8tCvMcF1QSeXGY3HYZ1CPrghJGrGGGDKWdsxfiZjXucu21JXc3UfFUFNSF2g5SzhaTA3SY",
  "key26": "24s1KnhwuzSgU78SFJhUEYtuuqrbmmht52FnSr59VwMHo3dh6M5fsfhJBxjjsAABSwNJo7aMiPspCpZDH5BYSNi3",
  "key27": "27CiALdn1NSEbPKBUTYc4v7iaMgXNtiEgEC8U566c5MUPaQgv2ZLgi77d3VhGksizpkKkNaT1RSzNf4LDbBJ4TnS",
  "key28": "5GM5WKggxtAXNtyFe5Pcdyct9fG2EuhEviozptBBVE7tz2hxphS2dzqKg11JnGMDnqbB3fKPYFiJVTHQwHWLRYDU",
  "key29": "5zHpioQ9bjZkthGp9ZLuJkZTVCLy98peeWjarCcKFtep3WLa1D9Sj7KwRPHBV9Af6xp6cpwpRo3h553ntNCxGug3",
  "key30": "5uxpyUwon2KdTs9S8e5gN4CT9C7sFejto2qBcufGmS9QgH6wAERmRWWCZdp6EJq5X28PzKrdkx6GPXSbjMJ5Ttwb",
  "key31": "5KAJWJEEMkH4cprSjnHpqYs447cjCVPE7XPDZ6Y5GnAVRyRRY6gJsam9nbZrV8cuqmFi8iv3jXigfoneoXSXNfUc",
  "key32": "3DnwvDM93aQSMPbXRt7aiTG1JrP2X7GpAEsxi8Da68aLXsWkUfb6kHrEMSALNzxYK4tugYkKYiY7M4CSXxzMnVQw",
  "key33": "3gPzPV2FkAYAjL6Nzo5E7iKMkfsqa9p1fjDanSyaKyaDTLwP7uLGte9doffUsN3uFrdxxjXi7uNg74vqDVN3ZJEq",
  "key34": "5X14rZ24G2G4FvYiBefFCVa2bkwRD67XtkbmYvYFo2pEHfyYYrNJQ3fvGHz5gbFSu1XcXLVAqtzw79sG5rjxSRbG",
  "key35": "3wHg6otov84ZboWxvYcGDL2VU1rFdwfBioUCAgMoGqeWkSMZRRZremVFz7RDa4NmfZ9Qsy9Qd55YmYKNpAhbWtLn",
  "key36": "HFnj61Bc3jUPHN7kXpRGTvKkcnEghxtFXXqFHDTZtAkN7efrdoB4U1ZtBVWH1hMv6RXLWF73TVNvLWPSAAH6VzP"
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
