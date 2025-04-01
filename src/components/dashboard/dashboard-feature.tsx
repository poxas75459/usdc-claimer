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
    "39tDBFyGZN1FRyxcooGdzspdfuR2jZ5h7iV7tBBhL5zz2wXBxD7JabXeDg2iy4PfHJVvYVXCyTct674hGFSP5t97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nG8sZ8WpsxgGMS4YGNQGhKZRPZZCudd4zRHsMYHBatU11zcPhUfvTPY2rJjCo4rwEeac7ohjWLgVdXG3M2dovWa",
  "key1": "379mFoxTiiv5ApDnuQ4FhUqy7JU2kdaq2iXQA747BKVWrhtCUj1MsnMdLLSi7bZZyRrqaT3dR5xr7wVe7mhY9ad2",
  "key2": "5uRJhnJZZQpPmda97Xmc8U7CnyzoRBoVphSZ5GJdiVVMnFWYa3GdC6kiyabk8RQ3Mgn68qeE75KMEeWzQnDAnvok",
  "key3": "V5Wabaf4SVdmoYCxLeCQfY8t5MPH2YWwT5PmDwPhESoJzt2GSajtLbRx84F3fLC7PsLexArb3BCbo1GhrMQhqFZ",
  "key4": "4racWJyjRyYgB3bMN7uyoW4SfvUxRW3QhcYDyTkRXQDshmZsB1xcgw8vjfY3CTYDti8x5KfYEprmGE5ftLyQZZPh",
  "key5": "4LEpzbVRj9UhRyaHfNfvTYtxKeDE2AzdgF2rNTNDVkrwepGMRpAw8oKMwfpSHX87XyFb5dk4qSNAG1Pk2yQ5J7tv",
  "key6": "5GzVaJtwY8s84zZyKykBT6oakVLz5ywRpixwXetkvfS5pfghwor2Fmt317aQe3f3cNBtd8KbGiZP7npSS9sPmu6b",
  "key7": "323ZV8VWTeLnC34SfCedKA8bJ4X5Nmy6ssV8FhgXfxxWAeeqjA8sU7tkuSKTzJ8WGLDKmrfGUvmWSpdibnB49Bwc",
  "key8": "4goAqDHyxauKonLLEeAUsqndnBBfE9dm244WoSzueM4UYgfmNcVtQvpM7UDCHSwQsN6sZivxi3yUY9NEJhs68SJn",
  "key9": "28b67yMupfYDy2u2LVUoSCaDKrA25z9ZL98Tqa6G1aAAXwhZCnU5tgg8h69cC2WVEV8eDw9vMhFmRyYtP539xLqq",
  "key10": "mn3a11RZopWNq9AJnvgQEpGoaKxG88yWXKXa49S8NxkaxtPQgnttcvUcZgkyGVD6pFhf1zv3PoBrukj8WhM5J2B",
  "key11": "3HLEjagQPtAiyfTYhbPf5xjBy61V9iBEUZvvPaCzVr52jgJ3KD1tADnMR6VDw339w6QHKjLWd9bkrdesurJsSqTh",
  "key12": "24gKm3fdNsB5rCtt26mGZsLSh2ZHDCHdcECGuffwgVhGLeUAzdDMDmKXzgNprB6cPeAyMFRrznffvasovPp8JzS7",
  "key13": "4RkZ3EYPid4UtPZXJ1hCG7TFcKiJTHBTg8chpM32u8sT4SCTuFEQGpooeextfGRH4HEvLqKdr9tfkqgaooFoACXL",
  "key14": "2D8HBsZYRDoYGtPCcAJwg41JyuPGFKFU62ww5HvbTa6SDBawNUWQKowfNj7GbN9Jjch9H7DUhAhy4xiKTAaXUHjU",
  "key15": "pN4CgMpDvpr5BQ7YfcTWfkcsE7okrN5qgqhzeov4zGqjwo1E9jx9sB9vepJozXfGYQ8oW26JFUcPWQ5ANWNLE9Z",
  "key16": "32pqdNzFU1YsdCBmvRJYRbfPHpQHzpTQ8dSuT9YwwQNAS3LhcLizrU4tjKsPs1SugYfhBvb7541d4BbGcv2ifoHq",
  "key17": "4USyxvTMw2MJBTP1FdRWcFZa5MhZVaNHkSdGN97NJ81vGCXLQjeMw2zhU6Kek1E6NueaDidEn8LfYfRQCRdKGiyZ",
  "key18": "2qXMQjdYHLoAyo4KeYvzhQjHjFACAco9XynV2W5Lyd1dYvcFBDDjvZDk48vdi8wutLWMFFdxAvMxzFHmT8bXBzSA",
  "key19": "kpnV6SBrxF4Pnx58L2vBBZgm6a7iobytpaiCEscmkNfZg6KPA2gWx2CiX4ZPp56uAfiz28wGQ4QsJkneegNdkAn",
  "key20": "pKJryfirygoNjq2qStBnWZ2PbjeW4cLf9xxZxGAq6oAJL11epC1BGFVXTBfynDu5Nbp8shQvh4J15w1Gp6kLWC2",
  "key21": "QEVgXW6M7m9WRfK7tnzsS88sqyBkQGxBW5oCzZR6zLtdjWkUoCkuC7MbaYaLsc4etvWXiyKPsiVswV6NaPuhEMG",
  "key22": "46hqrx3dAQUmXDmdLbzDBpk3yJXyHUY3ngTqQaug53Bu9ywcPFbCgvc19uXVZRkzGuyY2Dhpwb1WQJux2Ub7wkUM",
  "key23": "4P9DgagbBm2yLxik8vdsyYstdYjwHG4fhFWYKckKnAUYWPoxMxdfsfNEGUGoFsBsKtTpBeVoSgzCbAxty84guoD4",
  "key24": "4Vnd8DisRYgNYT8mExwQdjpginQJHT4ZKNwfxo4nemEeh3YqTww23a72vVtVi5gj3Z4dHf8WDryNZKiiHdXLvVW1",
  "key25": "58z4N81DGrpkrm5CTES1M3Av6HEudqadkuT7D4UeR78Ab2nrs7yrqJW57LC3MGEjfXfip9MGXhj5nhRbfSeUe4aW",
  "key26": "51up3y5uPv51fDH6A2UFoKJze58qSB6RE39DMe2TPbCsqGAvWCNxxKzS3eye2aiTAUpQzeKktbX8YuF6kHDA5AVR",
  "key27": "67BUEP4ALkWFgQVBpTkkj1Gm6Pkh7s7t1dXgydi1GBSawEXy41wYvB3aJcpS2b8H89Xi6GqTsred69MHcLMSwVCe",
  "key28": "3b2pgqFp9xRP37xCHEGT3gfXEhc6khCknXDfijFuAF3rQEo3CaSU3UvbLY3qBc5oMZfMTCQ9f7EAXh4YoTqbR8AK",
  "key29": "uL49apuD36uFTUdKRiL24NUisp2qLYEBR7aTzUbTXUcHFw5dpD6QKCe7KmLofVdVduRJhMxjS7a2KY6nMyBRz2o",
  "key30": "2iyK2m5t6E8EdxURrG1ppUiyKxqfvmtPV4HLYMVcX2yamr2nQi9krWUxsqKAFLSXvZHKbetUbojNLUE2qAAZ2xjc",
  "key31": "5pAG5JV5QpReH9A4NroLmwViza9qTCstvAsq3WXGdwNTZo8oELbu2Po2bzH7pms4zegkC3REY7VQ4vitjY3pJ16V"
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
