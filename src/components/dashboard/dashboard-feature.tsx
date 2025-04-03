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
    "4yPRYLSeQ3uktpEdL1S7Wo5EBWLPsP2xTj4bmXMx3stKvmHYoc421JsJg7pv6qH6wdpCTPSLSDKCDEXjYqYmy2jV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MJ5uX8LF33spZuSb7MyrN1hcMH3tiL8yTDaSW7N31QodLSRVPnHrnCVyPYETvHptTkgxWd9Uiug2GZyqRx3rYwX",
  "key1": "uxyfArE8RQjZyhf3sToAARwAvEDRQXrQ6SDTGpzqnMmcxSc4epppUSQEQSNCRs7TANb5zfMMh3HogiH9xXwK9Fv",
  "key2": "2A5BhkyFJsT2LPGao1G3sojYfZUnvgQk4pTwrqhbkNKj4FGjYRrHFqu4nJwiUjv7frWhQLKLT9xNJcBC33nRsP5y",
  "key3": "5CFKf6CMVghyZ4MhGmvKJCc39b36vsa6RNh8TUGA74YMEhGq6SwJBoCNaaq7KLGSwcvMeWpG5FbNJD49gHTvGgNs",
  "key4": "4MHe5vXw3Qjj4bJD3EM9ESCADyNzqu5grHHrArSK8SKkJBtdfgeZwR64FpmsixxRTgh1ztKh7Me16LCQ1nSP1ofB",
  "key5": "4ZuG4NcLRSrTAHHgnFfBsw2VXjFWbBwiTo93nWGv6E34fHR5EjUtX5DALnmLu9PG26KDpXMGXQTZFE3fdAjaKXsJ",
  "key6": "5PecnkUrx34jYcJEgP7PpwpD7Hjs5RiPpUgzZ9UDUkScTktjhmmeFL5hMSm6D35EFNAXgcqfJy29wKKUktRkQzpB",
  "key7": "yWUaMSXWbBcVRpjBC6yHJLn7dwrvhnTRbkQywhY1KqaekCKDzS8HneHKUj46aNwu1bf1m9fWmYhdgYKukTREihC",
  "key8": "5X62j1BUvQxhG5VzYZ2bKhLdguYRm4E4m1gfr7WujLH9XwYYJYZBevnQQMqYCDMjUfjUrSfxBHKW3qZt7f2UzV1g",
  "key9": "4Buvb2b3vXdxMpBSxmoLvGFkCYwLQtRwNoNTSoJe4nkNUptmTMEFba9HvS7oqGq4q5nPqWsV13tow3wABx1Hkqan",
  "key10": "3oj4yVrBsyJWeXvpUYhFpi2v7aLKoQRRgxsuZRWKbnMrk1doCeahSd93koXDPafbxsFfeK2rJUsoHAsz74cBwwuf",
  "key11": "4vGQWjwgUVYxR5TvgaxbT1xRdRSMjrQAtSURJnVLrNTz6wPh568M2SLyHwA7CtKsvgnzqMJ38zXLa3gY4NFM8V4D",
  "key12": "5nHEQmR16apcf7VwV5wZGsv9bfPHFuHzbFyMpY2ZCTX29DJj4ZFmMJgPnmL2La3AV9gkTgsJjzvmob2tNUwg8sm8",
  "key13": "FjDEmtaYxRMnxFb3p6kHdt1E3oCuuFHE2cNZhjJC4zbbLRgz5J1NxsfFGrdBEzjt5vWtPHgprjXKJRGU9YnabEW",
  "key14": "2hTa4rEQWvGZpb6Gdj9rEh3yJHsELeLwfQKbXq2rGEiRRD7MKfH6FVABifHuz6fKXPCznpHqiiEWaWDRxpzJzEcd",
  "key15": "5p2hvSWENaVh1sGfyPQxvM9D8Ck6PsKfde6D1AnXCRZsXFM5yeS6YRfGA4jtX5B6vdTPKLJMCR9DhYmh4RsBksou",
  "key16": "3Eqa5PD5Qb8vKAj9HBsMdqdiYxqqzruhpSWMe8kT3fMQbEiZNL1hJwWf8TeWeHreceiFV4Ysyojzune22pqZChwh",
  "key17": "4ztEBmbozg9nVCbQMYP8dQhm1Gr568ygY1h6oiqg4SJaT4SvU85VBkgiMwGbwokQazZjL3gwhvocTG3WpbAkmFq4",
  "key18": "4ZHh7sM3dhMrLHTLg3cw7Cu9T9GgfasLhQKmeRdLZbkk82c7wXwzSNHE24CYbVsNgGwQeNpXpeA1fUJ5AUunb6jk",
  "key19": "2YBQ7z2U2yR9qpj6VTJwiHwj1j44wmHX9pbsqcigiMCB6LFMfHAxPTMmT61xmvwzFb7hUVCE67wLjQzgQgdB3irA",
  "key20": "2452Hr7e4cZPpTxpGbcRPKCLvimEigKypbkhnuTBNVMzGSya2j3jhUTPvEDSjBrJQsj5MaS7VDET7ikjxGwWLzGg",
  "key21": "2E81LZdpZNrNfkWwqLrNUZAxc2H3m5rmpmK5ARxzaDxsjzMmThQXHZNWUQHyjhDuse8QTDobx4ti6qjFUiuaM7Ns",
  "key22": "xQahR5LWmkz97Ufh1RvY7vtpHazofZ6tKFKxEmS2AmaCxw5dAyrSjUBUbta8e1qz69CVg7HKqUzg2PShhjZqg5u",
  "key23": "pgvqchoUKxxdzDN5ZXH578tZXScahPMQBZPJYMXTyXqUa5YCuz1qiFFLMDmJP1nxcwM6goJWk9hYC6kB5cqkLg5",
  "key24": "4vDo7D9rGSCDQgzdD26FrC67oTQkDFBS2hTJGPbsyLsdSwTsKhp1kyCwJEPmRqz23yJEoFjaqoT7ADTSDiwm97Rc",
  "key25": "5JtN37nbhSZwRzsVvxLCn4X8uSA1i3TZqrwvVBZ1pKGfsRbxoMtwoiYeKBLonGbAjkA7P8AbhcazXDqU8L1sPZWc"
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
