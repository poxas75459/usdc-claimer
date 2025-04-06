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
    "5MFB4vS6MFLXyGdndY2J8LR3nUhZcp73wnqk2sFRcHuSVt2XztaNWHiqVrPoiJnJDCUmuKndH1LuoNrqzKTzqKPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mgks4TWJADbH27eZkHf7r4xsGQRpymUKimEy81tSK61DCPHHUd4CxxutsoyxDyvvST265J5CXeWq9JenDRJ8iCW",
  "key1": "41ejGs1vM5bMpJF8CPcdmMJCew6MmhoSheXrt9WP3xPN55KiQVY9eYGotmu2qpKdHNU1GGqVaN617BYjxX2LdvF7",
  "key2": "2vGUbQngwtoBc9Xo9X61hRbEYT2KwMFyAp7yZxpGcA8fb7sMh1LPgAFLRnfXYnXSgaVoqbmTzbBSV4pGdSzxPzRQ",
  "key3": "4j5jttWNb7KDEtEjAfFSNNgEue4uBPnfTodQsuRH6CrSrvyNmEEFLzTUj13DUaeWhomrDzE7ywTKZnLjcFe8Lebr",
  "key4": "AADYDU8vsUtCjZvp4bwZPSA8Ng2T2b2koPFy2xcbksoc6ciSpaDKJpucLbLKMXYpY3rekcdsZ7EqcNYoT4v1bD3",
  "key5": "B1SNrazMcbf44KabB4jCEYso9vX7MkstVBFSaij6V9rhjiWLx4fzXNvQ4Ms11oHQj6gnhojAKKSz84TUUkHjWzW",
  "key6": "5CmgCooKL8ZvssEbERJRZzgK7wdNumcDtXhxjXX9WHwfwb8dUD7GujnQebQ3o7Vo679bTuNcyjHwsL2dweyKXv7u",
  "key7": "2JvZZG7onX2VcabxQGHSo9sZev9ciRVrpN5oCDjyk3gjPUDjMMGVgCAYe7AD4HhP17331rWggQYzKhxM4Cqms8us",
  "key8": "54D91frhGyfgWm1eNrtM9QF5KrZzY93EjdJ9pSFVsMET1gZvTmk4fBuQBDANnNANmDEnpEcj2qbnQ9FNTxZDbSUA",
  "key9": "3s2HvkGVnXmFFdRzHPhP2ZRWaF3ow99wjNS2sEkdZTJwVhvsehXGiMykaA2YBwEXBdQAKdFV61n2AHJoGXNfZiKi",
  "key10": "4CaoaiKWrGyw1zvXmuaCeU8byMXQCkUa3onVmVa92rcAo6f6zg5v7tJ8YmabdsrdwCX1jrpFx8oWq8ung1ndJWq3",
  "key11": "bdYhqENjC5JKfwTBPWtkvovsLpeGpppQtTW1ZkS7rNGPhTMbxRdgydqppUNpaouLPCX739y22zSdTJPdhjtvw4B",
  "key12": "2fUtZLeua2eo9fPDdagL5Pdg7UbgHG1KD91YdUrHn1J1dwDnjWxFyzREm38DXajZJndjVVw9Qgq8FeYwghWj4Nyn",
  "key13": "5wV8JMdv61AGTz3Bje4WG7zSPyEXYExJGyUMxW2MBXu8p2Y4VXS3fscUggzkLAwQ7M48JzAt85uJX4GygFWAFoLB",
  "key14": "3jQAebdSZWoLVt3YL8jSdUEHfjoeqRyRbjHAYDQvrGq1y2sKMiG9J1Q26RsGHYnShwHKYBVtkv54Jht99d8WMjXx",
  "key15": "5d3PaeKs8tdAd17Unq1BTYMhRaiQDXdJRhVdfE9o63n51UbS67NjbVfNq5QiNetyis7mV8sW6YmrFJKVXLg8ed89",
  "key16": "39RsxdLbdp7r5DERYf8o3KrbFq2n496d7iYUFnmazTWJtg7gH1GEXsCFd5QC3yjGU2iU66B2iTnawgPdCeqZHYTC",
  "key17": "NzmWwGWpeT86xJVAGeDwyMm33Mmn9ihXd5EXjdd3aRWCo4ovHcuYWjgTriGhXBa3Vv8PjBv4AwQdcxmFtdyaaNc",
  "key18": "5eKXv85dSh2yJtae3QnC53Gyh5Sm8U9eAjQNaGw7k2B59WL2WZvNkbuMudpZ5er2WoNup2puJxximKe9Nm4Wd9zg",
  "key19": "4JtGmFauSxeEseioACKuUdpY7rPtCD6qajXEwx9KDyZpoWDdGeJ215Sa9nv4zQj5JfDaMxsydrxjM56ujiWBZUop",
  "key20": "PPs65VhomQftdwMTxWLVBZgQCWYHZHYcRFEEXUhTfN2RxSL7ajuencWCZMy4xVq58XmfNcZttS1vNgfxSx1cF8Q",
  "key21": "32SgXvkFyfuUqYjAMXVZNM4Kdx4wZg4HH9ALovME8WaaMt2iQSNKsraXwvjY9QB1zJ86RsEFYdGTdUzddTWq1CWC",
  "key22": "4UQrDiXakMh53sykWHxCN7bH1rAMS93YKnCz9NDVd2BFZRrG1zLwCSFQf7XGULZUUUdyCVwBg79mfY3tRijL4VJD",
  "key23": "66njf9SvB2enEuiWbuDLaRiB3ak1maZDEXneTqnr4Ms4hNYeP3BNnQgaxYze2utjKwjHiYVASHuWtkagHoedjZJb",
  "key24": "4EFpgURGLgYJFwRxWLsX6H8gvjyTHwzERXX26dnNY3CtfKwy7SawjP3fJ4jCBEvrAfijHvYAH4YEi9VEM2BYYNxh",
  "key25": "i1v1K8C7JHWmpnAHDWYUGfxNSUpCtatSBP1UB4yDkpAmJ5P72f6GVe7CBzEV5Q3ZbhVeERd7a4poLQQfNtLwvSW",
  "key26": "4McgiVYsZXRfRAXmcUSoWqAGNP3SzcZActXBftbSUZkWPxoqJrswQpfRBvqSfBXE6FaosmSEeixChgacKF6A46XQ",
  "key27": "3fDccfjZrEGv5PnfPFUkSvb4Hs9rLKpWGTwxugFwzHjMZ24F2roTnRT2NVfPgjFtLNNH5FiEQgv4jtutMuE6jm29",
  "key28": "2EEpNpH3RXPm88JCjU91ujzjHDgELys6YAVjuGPZaAXBniGQkheMuvkCJSDvA1sswZ1y5zaVuoxKWhwECbkN7HZj",
  "key29": "hxteCMRErSZsgrXdWPFCmdsSPWy3cgoM1r3ovoenbs3peUJAq1Ve9syDJsMCYFpsfzZSb2aFkbfWxsMzxzZiPf9",
  "key30": "Homry5e6Yosn7v8MomG7U9vJ5zfUCA92UdKf3eBy2ty39WwAztjPxXT19LxkienWLoMo3Y4Bb3FQrDvzBibdZMV",
  "key31": "asxVHPfjL1qcgk6RRLvvJD36iLFCsZdSdH7x9Tvxfdm62MoLZd4EanSwBB1aAJsxGMMC46VzQ8zERmok5frwH3b",
  "key32": "2XvTQiJGCbAoDNFS1k1bv4p7NTozP4ziW4HmqWRU1snCtwSUhmds8Ak9XxNgs443CHftujvsXrtb7A1SnaB5N5wd"
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
