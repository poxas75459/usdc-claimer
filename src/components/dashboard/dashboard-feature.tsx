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
    "5v8DRXk8MDeZpupFK3UdRUkdkdCmsBtonPonbk25cqNr3UsHEHysXSiL3UBHMmoAxsTBijRA43wKGJrvNw5PV4J8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hpij7wkSxSE5nmLD8WMhBncJWkzxwxDJYEabzicjUTnitv5jEhL9qCxV3XcXwKRbLz8qNzzww7XzzPDosuicMHK",
  "key1": "2TPRJzF5hGHsURkLgeaNpSKjhx5sySKRfCnBqe7vvbqdjPWL6mkUHYWjVLWpJxJngABr1HU6UeQv9XZgy1y5JCzK",
  "key2": "48PNxC2svGn6ZqohJ7k3GuwZFr76EMsmFvpiX1zJTdR4rxm8BW1bbZ9m4eknqJWNQCuCTkaMkpBGbJZ3Tm3YeqET",
  "key3": "4sJ7hSm97np2REpYpqHqrx5NXaGaUJTuiwqAYR374AzFXoDLf6mm4tEy8V8WzkfazrzJ6XsY6U5Uy9kpQqHLGVWw",
  "key4": "NK3WZEaumzbUh7R6yQoAodBw8QoaNfSW2dRbd6av5Xs9Y1jsYVKCHaXCUiNYJwe84Gsapj1odo7A9ChkYDNnX8c",
  "key5": "3x5kUWqU3aEfq9GGR1jgMtGqiQadVZNrQTERV8wuAUqfBc9z4wMNhGyZBdkXSs94PgoVizjwiaTrcJDhesBKVJx6",
  "key6": "wHh1rD42HpV3uzNMVNBBTHXRLmosKEh7ZvrY6185tVuAhZYHMyzu9gUfKo3UCA7NEzkJm1C6DNN8jCLaFAn1WTq",
  "key7": "5X3xHgomiL2XE7SvZccTtzeBWhCvGKro9zQHxjfEnTJL58ExDChq9vHNAJBc128XAKfyLZay56KKhN4o7UajyUbb",
  "key8": "HUXwsCZ2zP3kFdTeqMch9JAhQhyoqbL3PCgof7nDJjdDVZMf6EgrUm8a2qtNaWgYYphhWDR2kUtdpX2HA3GDfv8",
  "key9": "4rLBVjcaASMR8NCk6KmtntdBL74admykkTvAzUix1Um1kVTGeEZsRpeaxDZDv8STwdPGMVN6hK4PKMFSBeo5M62A",
  "key10": "4U4WamJCoysxLBvdekb3SeYfLjE1F6FsyDkrv9W6bvu3WwaATst3RcfAmkCLxsJqwrnyxXoJJe8XpoRBQunBzehD",
  "key11": "5EkwsLs6vfKCjM2tEuZe2cCscNfBFneysYfHERCE16PWdMpCLmn2QGZgYafe4ybyq62LaiQKLkKsjwEYg6rauMkp",
  "key12": "3fd8G6tNrBtGgpS1zwY7Y5tNPUhpPT7UjPoZCPV8EgR8eAf6zi9Cbd9ce6wFK3VEx6knuBof6QpCsNeSdeucCC5e",
  "key13": "62orfVis9VJDgwcihSeiv6KUc3uZQ7F9kJ53TjYsfuAkvmejrKxPEmRkRSZe56Fg2M8XawfRo5pc5CDvKTxvweL4",
  "key14": "pM9CpJRGTEXpKKrXL5yPiBeEk4tdvhBpesQSLZBNn5YUdYmggnq1qRcxWfKkaEm5Ubp11SHrs3n55Bqp3BwbHac",
  "key15": "2opMFvyMSVnUgzDbR657u1AcLy7kW4aBBKm7KY4UYdA3dDVV1v2jQUZBPMYL7cZhkHo2YJAqCJL9a3kZdc8Lsyny",
  "key16": "37wSQuhcu6idnkMxoUuPqZvvUH3eFESSh4Gkth52tzEYRhFczPXBXk3ffitih9VguiChRcrnXq6WC5wq4tDz67wF",
  "key17": "BxVac3v5qyFK8w1bbSq6VioozwKbvoMEoSczXrG1w3shx3gKo8JMTrxBABRrg3T8e5WGiFnj3c3xwsruV5cEa3p",
  "key18": "vePf67s7EunCEZPF1HigcvixgUHV6keb5VE7rzoUvn4XkoqX3UP12CWfoNcjhbXAqc3X8Wq3EWLagVeC4Lu4yNb",
  "key19": "fpm9zJGN6BJsNULRUQWKo1yPieTUb7gp2Acy8RYL2Smva9WozMbMXc5MFYzhnVUV6zrW5PSz6mD2xmJjUgpdFun",
  "key20": "5b3cSZPZ8uKUcTQbpL4D6ZpUh88qN1CzRD8PvpTsrY4q2D5wLksF6rJfUAxMdvnSw5egsMqG8ifDoKukk6DsGvfM",
  "key21": "DpYCK3LuLe9Mwx4pTer1Si3Tvuad2F8dTm8FZcANe6BcvdbPTGZdAMnZT8k4nnL1mkrPcxREQ2xWEtBhDAYNk9q",
  "key22": "45LQq5f6RXfP1DMLgv6iJPvwYdHEVXXVd3UZ4DXefYEhjakE7PpMHdtZk39YdRktontWmozm6B63JrD6GsDoDV6H",
  "key23": "2EFRvoENpmKD2FN5KBz6veyhsoJZQN8ZH7Jp8SSok5eijCWt17v483pXPwLjMAAnrGjXMxepci9QurAJoDkXHb4w",
  "key24": "3B5dxTnXwLiFq61DsEpzMWAEB4WLRWnfn6o3FZeLXNzEmpkPJmtnwcyjpDfDxuQtfoCwptUr1CYRFqpdKgAsY7xL",
  "key25": "3rNnFhViopBdAghkk9wFwtgx1y22s8yemCQePK3Nv9YnXgoRRypZrhSTYitr1aYvREwRU3La9k4vZh9HEaDcB4ce",
  "key26": "4BsWpEpcPWqiJ1mS6zkDfazkDLCeti6152RNnjVD4i815ZiTTaGZSjHBKdwN7cKH64NAFLWPaAwJFPJVDtuPgmH8",
  "key27": "QL8b2P1pgtSzTJrY5BSnDrb2eYvQLsrUrNqV6dPWGW1ViMfaMa4b5MkKm8jPh9sUJ5KLzkJauzLWAcn1DBbuXz7",
  "key28": "3h4iuyTvRWjbBVftQKqX6n2r5rXJtcztTiXM8xaJ55maD8SVQDPnzuAhuub6zuhCvYzJpw1bg4Nkmw24hEPEijuz",
  "key29": "2RrnUDEpPPh5d1tQ2muPdZQv6Ch2n4cdpdqweEqcJecdLTpqn1yRB1WauMUTZ5XCeUWHQX9ePmcJrDdDE9cW4GRs"
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
