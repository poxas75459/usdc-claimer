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
    "37xBXTJQM4Bodtf1vuvqf3oAaTGpc2qibGRKRBekojG1pn86BvY6DvHdfwoQny5pgaeT9okhevV7wkB5LyaY23W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uoXQKw6K3pizG5VAx1jNGP2Gnq8FmZgMDPwWRGd7M1dtg8ReujMv1qxa9vmKMDv5TENx9gb4bcAuayEL6dhpGdm",
  "key1": "3AkLmM5ETF9NQjdcPPyuFMxNdK4EkCZFLnCKwJrfjd1x3hQdmWv1ekzKTbWab7AgdsbvYLvyhXkNvjn5w9eg5dfu",
  "key2": "EGqF4EM6oENjAEs5DzFwxSD9EMrXERvxJyM43WFUorLhxsd2Nx7iSCuHVFiDeSua4gCNpot3NypkHgMtouVpoe9",
  "key3": "2NJYCSt7Ahzg8oEibK3dndi6MTCRxkJe2teBKhEA6f5rUXNdEquX66iMWz19i4W3Eg1KeujSqN7nHfyFnuZsg291",
  "key4": "3EZUvjzWcuHApC5BCAtqhtMs68kNCJESQH4uptiRx2fDRxD9vFosdBxNa73Awirwzco43VTFqQfyiya54jvfDPMa",
  "key5": "uoQEzrbPDLHuzK7ajnhQLvNwqrRRQGHzCYufuQMjFynoABwBSjjkvpQjs94BURBfpSzcndC2bVLSwUYibJqmRX6",
  "key6": "3vdqs7WEYcfGixhh6anZUmpYQb3f3TkUoYBv4zzKi1A7aRFZ7N4Bp3CnQPkYAjpcPP7qwLVC9cwWFTr1HHWziPAL",
  "key7": "EhYo8qaK8s6ZqobwEnuvarHiWbLkFtgtKmoH2s98a8Qkis2w63QdDiw5HLT2cmLuaRUqVN5BaW97vzoXZnWFGqk",
  "key8": "3hTSaC5t7Ve5tRQ2ARFWF2dQBhWAaQ3qoGyzxvzWMMKiTgBpNqUFEb63e9ayTCSps3utwwxS8DFXSKuYqoXqGXoF",
  "key9": "52VayjYsZR1xRGkUsEVKgQTnYvc68m2oSWZZQEp92nhBG7ZY1cq87PmJuJufmR5ocYSZ4MtkdCaMDe4aSuDLXZnf",
  "key10": "43e7ZsPybxxwBeLiKZ3LYGV3gk6CNamwV7Y46XtsEzmMgjqgCY1df4q6VwWJMDKJMVEEFBaDftJug772L3sTtaY3",
  "key11": "5zWpYHHjbEDd1qkLLHNrEk4HrY1Z3aaqh4mJci6QfYdRNxZeT6yr6LW3xdE9PTWjwYipZ77CJNkNgXNCnDNkBGRq",
  "key12": "4m81REg9HBFSBhurYpdxCgnoqmSP8FwJTQ2dkaeDJ7vPEhUWTkRaRrbJp5r3xebGS82xBh144jUm76KJz2MNTQJM",
  "key13": "4bsZ7Q9iCeknytCgpmuFsM3t4tPZCh6GrJ19c6qtANSJWLzwu5NRicoFvKeqcFvoDSAKZQwWnp6hvVbgvsJtxztM",
  "key14": "456EEbPXAQX53dVmQZMDuUPFvkDnc8Amk2xpcUohMSrzMhhnfZhQmqbLTK9nHtwDXvvm74PqwazodxhPosMvCmpY",
  "key15": "4tssvRFGEgtJRK4UpLxBfCY4JgUivpV2xvVFmsGyxvz3hvpqGq4oPZMKCCrrXEnGqofdbg9cJoZv7NKPmAFPcDBv",
  "key16": "4T2TyH9xJYNu6bSoLDQjtxroPQyejngf5oKUB2peR8hzE7ZJaEvDQq8pvv9xzRTjU5u1F54HS47oxTGmPQjNWG6R",
  "key17": "i6W2kcEbmE2j9uksHtYwAZ1SXccHjC2s3NzEJeEg5d7Afcakq6vC9Dx7kAzpnyhGEbdhPbY9cTKrU8J9BTVL6u7",
  "key18": "54KK2hcmXHNr1BDAvWSWinyuPUn1NnrYktfekZjimEAQcwGPsqhTSzmUxtPi53eCYU4mmAztMu9dbcowJYbutuDt",
  "key19": "377c3xJT14qjuwiSztGi51hx7SkMbCqjJmcLa3miWNs1e14NYua2zcQUGufSEs6kTehYnFV5bNJV8WvKWQtve2Ja",
  "key20": "4i9xFUcPkHme7M7nwghMUebDVFbTAxAKeXG44i8jwTWm6JYSc69gYe6686Hfh92ovQ7CrqrMsSPFRnZ93a3Yyb73",
  "key21": "wuZetgQYfG2SuPDLxgPSGttsG4CeAgCzZHGfPPDDfqyfgeFWc6Cp1wBcSt6c2QTz5ipiQPGpzyrnCXfDSihjYyd",
  "key22": "KseUT1ZTT5L8gYxSy3X1rjMDzwz7AhVjKYrGdRQQqRgz12erJDbp7MUc6zhU9DWdKPJ6TCCyDgT5a5hr4DcnzJu",
  "key23": "3P9Fp2HEd8YUcLrkFUQuvs5Sxt9Qmb9b6TDZt2g4rVgEHF48iuMGAoyoKPjL773AhEdWPjnsy4QE8PE2UQ4Zuz5c",
  "key24": "5em8Y6kKfeXUvt2rs3N4TKzGKgsJhWzfcNSuq9XH5PaHUkQ8FguC8mVUMQShewawyoyuWHRC7yA3CY2eeqxSFYxM",
  "key25": "3XGs5Y1211VvPJf8DAYPQs5N74zydG3FPrXZWKVbwACZ5WVs8AGtCYENWBZuFKj1iFXajHZHxBWwRfc7sSThonzr",
  "key26": "5Q2xfn5sFqxCMXQmHFpBfqrSTixMu2NpJhmJF7sjKvN4crpP1eqBA3sxv7K9Wr8GNCgrdirJaLYB43mpcQWULz15",
  "key27": "3TNkmKS56gEuh6inyod2wkVNP6jJu3AvmGFiH4BmJGkdxP3BJsfS1A9gwWirdM6SUztAjEhcr2xyew3jUjusSoxu",
  "key28": "5hh96RAhmxawVeCXJm7meQGgfh2kxYx6bCZ6om18SHwxiK1tVB3tN4ymCTFwoNbHtfPe18KtXJgxUD93oQetcTEi"
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
