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
    "ZMuAZKeGJKwxop8hw1gdFtwxQ9mFqAeJQ2f45h7i6NGPFBcPP2xNDA8K1rgVnj462ZyA2deyDTyYRMRKEirvDgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LfBUALr9u6Zo1mcpW9sD7cDpr2C6p3VsFCUQz9Cbs4vVy76apX1Lnd2bSZ8xMjviqhagAVG5tBnGozKV3NoTVS2",
  "key1": "2pEKcq4Aw3MHEaNtJKduxyvBSzeGDAMJCSZNN8nL4C2hKm15iQWgjibfiiWdwtbefTS7aJbxUSUNZpiHSgt8jViz",
  "key2": "aBanjw3CZ3fdRGhtsmcgCSPjrsQqUjvVPwC69EyUH4dYh4GkMbSmnUm2mdKeZaD6fEtz7mbsvmNk2Q4gxcGRbd3",
  "key3": "fX5YVEPYoUz9rEu2VmkcQgirW5uaeTq1kh97BeEtXNWJh6qntZKEnu9DRoUfvTk7dEjti2WGy1nEeiRG93d8do5",
  "key4": "Tqc438Vn85MXURpBA5S868nZWqhyzyY6JeGF8C85Wgid3ZQkKyVxqhCRUUVRUrugB8bN1kXsfzY2yJpvv5GBk5B",
  "key5": "5ibvVTvWtZnX2VsnjCJEsv6M5d5AjYR9RLCnWTST8KvZbrM5TMk1QdXMjf35REr2qCKb5eAPm35NHiiQAXcEGhBf",
  "key6": "5K31eXucYWACUr6Ttgu9T842172ja8j9J41HZ3TcRfSUP2crkik9nyA8SaS8qt5dxoTV7NZQENwUC34CRjyD5GR7",
  "key7": "5T8B5sSQU3Z7d2sdbK8aBwBRB19XUUzbRYFo3MLTiF1TcDBtRBbfB4BTKWxPXTGBWF2EJAzXdG4eZT4nnF1aRmjK",
  "key8": "TJ8MU6KP929CicxvU2xz5vV4xB9Yq8wr3LMhh82x3veUtm2JzCnha76u8buz7KqzVc3gngWbyrfj2mVVzq73ASP",
  "key9": "LNnrmqs2nP6wVMETKoEocqZGx9DH8EV69iKkdwHYk54Pf4iHYsPSBVfJrS8VVkbY3SzMyMZmmitpVVhWz5BEqN4",
  "key10": "24v2zypz3EZBUz5MMhnKmTm8BwD81oRnpDU1MH3TkNJA3B71pMuYepRpBAc9tcrQXoawA8VW75Cv5b16i97ssdXF",
  "key11": "3mRLv5BFnZ5ggzf4WA6zSRhUczQu1S7qjz1okjm2JSiscQpFzFL8bXESQHwX2AVKhEwVeABoMR8uta88GwameUsx",
  "key12": "5BEu3BvAp9FdAdAzYr9csNDzejbCrohHCxKda6Qc5PAqCmnhUFckkm7zfN3awaDC4gXp9XSghRpKgRW9qbvDMotM",
  "key13": "7TCEKMCXWZcrSoSdAJDF1z4WrZydipk1w212aE8kucY1TPorrVQ3ZqKevL8z2aCiRvYsBZ4fvYWstMRpprrJkTc",
  "key14": "25mgfN1GPyNeH1cAMKgrkwc42fEY3dmjWEweR7N44yLKtSLGeAkjCcU3UgeLEEVWU1nVkjVHV6SUksgEXrUbTFVm",
  "key15": "62sc4naqAqd7cMAZvBxVnXUM8YVu4FUeCG3NhgmRUuZuN7r9NLDfDuWJ3UHQhp2LjNaecfCF6ouqVEWexb2bHwjN",
  "key16": "4RgSnyffESfE4TiD8i2RBh7hBBinkchy2zhzJXfLUUvUCGBpzFnS5oZx7287kuX2pw6onbJzxNuDxwMVWeJqx6wY",
  "key17": "3eEhC3b27fwhWD2fUqVpEV9QJWQ34rCiyf9Dw8J3KaexZVc39jFaRnJnRrkde6SjoztU8ZmCFo9wQRb5JV7xrA3y",
  "key18": "36HCXC8pbfzttufU7ZcTcrSVZ8qcwR5mFCKGzjFK5hPPQ3Hv4kuUf7iypcKzSYWxuy7Wn8sUWud5qRv31wJT9oWx",
  "key19": "5q2TSmurTEg73QiUmZYXRBoHJZvsrzKCrCiBM6y4vhLqGRwV92QpyuRpkHq4dmhSXGqEM7nRteHaWcSb1zrxvurz",
  "key20": "RsUzgGbatHRdg7sx4im7CgoeGmEQR546HEvZH6832e2va8KEgzsZZ4Jd3T4zUbFomj3Dz5kDPhXki4NysjG83Wu",
  "key21": "5FGEnGq4REJVruCoRTJ2KQxBA5iDhzxhUGYkDiaxmmsyeZmXnjy7MpCsCW71PnBEn9dBUaECkkym75G7jNmWdbYc",
  "key22": "5gDzzusMEb2zVrwoexJVoc5Db4oYvfcKcv94LKXQt4paLw3YhJgavpERAz9FtTDzYrDWiWyhdew6VinKcWoWWTyn",
  "key23": "WcuiTQTBsnftQsMPmVcWuesW6JSJrGPiPzcqZ7LHXecwfekDX7NsyG8Me2mM7imwU5KfA9uL26wLN2ciec3cfF4",
  "key24": "XSdCPJaD8VL1hPqewiFw9CvQfAgme1HpvJyirdXhbpJqcvb5wQQmKB9bpijwxcfcD5RTVqJsQLE2qFMCDrrnEwJ",
  "key25": "2Rxx174bSjU8X4hUfzasnYANTYKBwyWgVSoR2bX98XnxSdKWnTzKrVGmD13v3n9T4osW8798wqXQtWWVicJEamun",
  "key26": "8ASsL8LJnUxSgfy6yS7QtooE5uxqAVMUFabFMzn6X9g4iYcZGNpKoVcpEhGxrvJBqQpFzHQUy5KJQrAUsmpHy2b",
  "key27": "2wzcHM6tE2cd8s8zGwQzvQBdrSKibWSVPZifTXPpWSkaGSWTfgGTT7nEFUwPb5rGonxmMXwsr4S4NNoTcDVVKkGr",
  "key28": "5ZCVVoREmWvxuW1GQaLq3K9KrfgEST42LkuRXB38Fnthwx979D7RVxpGGGQC44eY5KZmH8nmDGv6cEnjyqQaZ2uG",
  "key29": "4yrmK9gJd8cnyiM9FDnk87uktW2azN7eDmWrAX6deteiUbyTn5pbuLxEkncjXtnvdaep1WYQ4ci5W4UxGhYYyK25",
  "key30": "fWHhw7H2xhM5ThXTJFrZTceESeYV8XtkwDX9U18zrMi6QcKJxDANXGoMvSCgbjvYnDZHK4E1hg8cW9pPJ3Nd7rD",
  "key31": "2bDm6zeiq3YY7GECQZBQ65pHrUB24xGvUrF7UDbSzNy9w7hoiVTnCP1Vvw4PYZ5s7EqxFJPVhw6SnpQE3cV3r3wr",
  "key32": "627sjPYGcXCdQV5riVtG9An1EJ7CHY8TpiURNncdT5G3MBYBdPt2tJD7j2KsMBFtBh3btk1vb81aJQMeFzwq3UBe",
  "key33": "2c6qd1Uo6fGxiywdfBx54th8XnkLtWwHhepSEgCRQbdDZjZYX1YHBbocZ9V1F2apFTRm8NHu2NbfHd6dFtu2e6kk",
  "key34": "34LoHQvBTskf2wMUbiLmhTLKvx5aAGN9wt4jo1519uKzekmeHxZEif7hTdehzhcb6p1E2yGMnrYupgfoDosRohD8"
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
