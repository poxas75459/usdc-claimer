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
    "2B1YmqPrxCoJe8fkEfpkSsHBxxgMkbuc7NK66Bdd7XbaiBr5jfNNP7W67QD31rxJYUUBrwAGzxeBVk6UVrXzHPEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PeqoGX7eDWpMjDbmBX3JmCT6uuBS2tBJaNMMULVmfTBWxKsuMWj4M3QiiP41VAJTnymHQiZ3spDW4bFDc6jjyPN",
  "key1": "2gg5rPLNQwT5Bj2cAq8Zs1gVPHCM9sJewTfHjeghayiKStyMj5UCWH68A6uSAitnGNszESAvxjtQ7j7hkGDmAERh",
  "key2": "4kk8Sqt9ERutNn3vuYUUcpKvvMeef8fwnEc4uDJqvUKJjXtUBWr71zrBntiQZp18wkjgzzvwhR9vP7TnjfXL5oVv",
  "key3": "4exHf5YikGhWJdSdXABh6gjWoZ22NK361u8XCULZTQDzT9zJy3hP4WGCD5ZHonzpFCJQMVac7eKRrHMPQzZU8WvF",
  "key4": "3HgcxrUfcPmxshr8dtUNp18yEQN4Tzcb1mJ8ZLLeCvbERESNSFQTupQWWXbFxE9bY7eyy89Ayobw9BfVKC95Ahuq",
  "key5": "4KCHuooQjL8qPJnQnvinMbz8boxMYHDSktWtHcBn5ADwH4kN5Hmfa8EuYkVDNx3FDAnjUNoUqRctKrXu5SVn9zqP",
  "key6": "4Pprm19aQA26VXrUXSLrcjvXuYttkJa5N9Yy1oPg4Czk3DhvR1jNEtWySn9oaBGttuFsUCk9kAwiJDBrNALahEh1",
  "key7": "5wV8ErdUNrmRFsFCndEaPsA3dhNhkXzVgTgqa9soAvPbsgVEdZskDLUHYKrXPZT3juE3WcYezVYAHg2eJgvVg9Jj",
  "key8": "TrKqrfDsY4kn7DyXKQsf8jGmsVSX2hwEwUfJ5WVGruHmhtpEeTELoSfLC61RmAv988rJWYqkwXR7oGJwxjmWehy",
  "key9": "5tVST9Ks89TcXXpU9FdUKhnfLqqyQToGmbbGGjPm1Q8teyyVPFW766HbNAEQ65r6JoQsaSoSsoqHS2GkQgkaCvsd",
  "key10": "4W7zwMybrCFebxWM8DSnZHvCP3scwHgWZUp8ej4YA5GDGKZYWvDMkWe1kM4PQS6YQqek4ywTiQ1JFUj3Gk2Bsz1N",
  "key11": "4CJqYx83WHN9agA3vNbdQQNtjmMPAQDT8V6W1jcaPUofjMRLFnEPTP19eeQtF9xndgU7H5D8rB9ZcC23odpZzYZP",
  "key12": "3Shse665jPy9M1bt5E4gZgUVLrDZKkbS7K5Y471yVnNaEs94XAo4RbAZ1XmuVoS63Ub8bXcpBcr5xNQ7rbxTqcKt",
  "key13": "2g5DfuM2GKE8rBgE6yHGNYxtXJo85Mb1N5swVgdaiAdHhxTb2v5FJkwcfUtinEgTSpgTpZzt92EqMRoSiyDswRur",
  "key14": "eYZ4iDFnLsixrW1r74E6csPXt7g31vUQH32T64TMGRAxHyH3Y9axmPGPf8ywZMohrkJKFBHvUYnuiHJzEB8vRza",
  "key15": "4Xp5QmJepUjFZ4YPffCNT62wzrwWQG8h5Ryd57JtnGppyLfxTyCG2idSRto5o2hVb2KeNfyHBivSBBUMdLt8U4yF",
  "key16": "4y81in69bGHD2QNmioSJqdHUa1orojDHr3PHU8vaax34FYRc8feRMcJkRLrHKb34nUJRYBXpR7JTsKwzZKqYMMTX",
  "key17": "5NBPd4Wf55cTsBybFvtfPi1NnPEjpS53EKxrUzVW7tVeTi2gGUkFe3NQ4NmDFoyHLXuFvAzGMifkSa7jeKgnmdHc",
  "key18": "WPG3zbgzZFdF1gvDDudmZr9QN3sv9TERVomuvhW4ceXRmsd9G6p9a3LTXHqwJKgD8PvkHvZk1fXqrHvTmHcZSbG",
  "key19": "35BBSyBz9V8MPHTnPKVLf1ehpkpRvYPNAUtwYAo4KLok9e8gCo1vfQSTA4owgPa8YmEdvcVj5iKjVYDE61Xbyox6",
  "key20": "3yXNQqhih2mnTVuzxYfUbWrWGcMvActszr4vyrqJ39J131dmupNB3RYzUsz4iPotRw4SCoc1TMYH8Pv43yzVVTED",
  "key21": "nXCsD4JNzJSm9sngairows6guipWxemJbnjuEEJTygPFhMigwcrmVRvSEf2wTYJaMFGmLGkFWkGxozifzuAFYyD",
  "key22": "5vg8nV46wBuT7ZBYqbTgnucW3MuXAVAk9vsodrY48KYqk8Um8UPyNakbX8Ss7FRzmVUM6iRasdptQrKBsheGYaio",
  "key23": "3R8vM6tWV9ncAbMq1MDLYr8hqhGTL7jSPeYC9JSi4wYm5shgYk4DCopovVGjpxQZCiLizAh291D6CdkSQQYxYcDA",
  "key24": "QbrJ3Cp77ZptYfWemKMkSYzAqbAM1WuwZHmGtzfKEXGhyrZyaU37XAgWREJCqNUYtvPQBe57Af42rJeNyYNe623",
  "key25": "ypmXtaNM1Sdr1YTK7bch2HsyxuYZDn5R6VpGxc7AhuevXWfVCZsSgknR3GCLbSXbgHoZ75ArLXpVzUQKtLxrdPX",
  "key26": "2ieCxK8swpZzYK9vDxgQLv3CScazVemERMVtRzmd2XRCUVugNuKwKsjgdMJxbc2TJcJPY4ZDfScAmY7AGEUQaMGq",
  "key27": "AxA4fEnQfjd6z6jxoupEjbpD3EnumZkJPMfesgz75BihCAvVTYqUP5BCbaBqTMvgm2rNVd6QWmjEHGy3U8rmizb",
  "key28": "3kDMZ5wDex9tuC6wwgjZ1vrbpqMdksqTHBdaeovZK6AjdEuooXHZaLSjgpZdPc48frt8bhPwDk13e6gGyzBpgqGy",
  "key29": "2ZFn5jireegS9QC5x84jtegZVoJrha5EdpR8qteR12zrRfHcZkxYSNCYqDCUmQd2qKkZBcxb62SgURdBWvbwqEXx",
  "key30": "4xPywHXH5M1RkR1A4gDr4XrKFWpL7w7nMBiEsatcWjZYrpexTRLsN6ZfB4ERuDTcGvM2UdZrkZyiAhFzpdvASkJp",
  "key31": "2CahGittk9jVZvreajMm826eV8Vr24G4SzX5isr6CZPn7rmPy5ZEAqeqQpC8Q8Y9rnWQBt8w2NaAntaGrGbUWbup",
  "key32": "4MDsii2xYzhSkcgzSWnF3VZGppSMWydnCFvrwSYK4FPYnXVV8sgPoRKshnK8HHcjxzSjThB3m4VyanTkZsUtpnKg"
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
