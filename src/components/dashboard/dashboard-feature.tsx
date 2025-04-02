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
    "3j6U24EoosrqGS5FaGLYvH6DveQZr8nrDwBXD1wsQ4NFL1kWMBZMAnTRresJHBS9SwhSLToN8NLT9TdNAkUSGcjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q2kUuFAqCacLdXbcuUN8GNxETpq9szSWDmKXhFNkzS3LarsmtEzCj2wjxzbY98GVLVZUYJBJamXz7bSj8GrfHFZ",
  "key1": "4yMW8CdEeN6ckiwbSx24HYAkvNvynFSD6Vj3qUnM36j3ysV3XESu3Fy8RexpiKykdKE2QmPnjEzUEhWeESxFnirq",
  "key2": "5vCaJZxJNeMVVSNUdK7WFwLtEyQQcKh4DjUt8JHVBjCHmK55ACiPVx5skUVJdhZgENHvuwocE7iwSYSnJAneyGxv",
  "key3": "4gbySGNP2BK9WrsWuX8wJX1Z55CxftD8pXVWHURiyhCDRnqtMeazFDVeWwcNDbBPR2NgFovyEh3NWosc5A32n3ob",
  "key4": "9VSjwKo372EPNdXTpbwDyvfS6LAzXF5eXQyz7D7rTviQgpLRJ8i4Hd1xnAzbzS3BnZysk2YRjia7vYCCCMJjii1",
  "key5": "4ymmoXbFgH6uRQiAPgZFqhFYY7mxZy9RFggjNweaVf9nZWgqAgNDwZJgSgevTi8Egg1T2brk2oN7DQTqqFzcyJrS",
  "key6": "5t9nu2TrWUEop1gD7eoT1KFerqUMb5UgiXiyucpCVcjeTTEvQKWAvUM6ZucUnP8z7p2JSMMuSAZcXfeAEDvL35zK",
  "key7": "5zH9AJCDscudiKGVBKQRDmzBtBEEhroYzn5He9yi8QGKHL2q2ypm7RBLqAeLmF1BGTXePWTtGxyd8pX7reMYWSTr",
  "key8": "2858gNiR1SLWChjCBj9HWc4UoojkrCHxRbT2KNmieRWmJC37pJmLdJp5aeqja8u7RVfwG5cJ14pgB7TU2aXm2sjN",
  "key9": "aTX98b1vEfVuKS522Ax6vzVRWmQiizDqG1yHGodDumHozVVYYNL3qapdqSxNwU314W5eDGmZStVcTQAW4n7NWzT",
  "key10": "4xJkCviKoT78aJtLQtu66KwCkXVei6eFJDAPMX64z8KfkW4uRwV7P2DrqVzYCGNqCQJ9m233kV5i1sVdT7d6tyB4",
  "key11": "3sA5Az83Lh5gxdtj8wJZfnAGWK6X3jw23S5kJJ2PmUx3b8QMB3upmjNevofixnYTEFcrwn2hkoyANa5TqKX2uvGz",
  "key12": "33XTyeoBiu2Er8UYvm1Nmba9f4dm3PyLh4sMRPzekfsWj59CWyirSKXUQk2LffQ9h8rRzHtXd9Yf7t6ADrdjGB3P",
  "key13": "5n7nDFw7StpJ48cFM2NB2uX3v637sckMcaY2Hb8xzNpRStuL8G1XZV6Js75MLpFFhpLrbVmRdMotjqd9gfHSsEkz",
  "key14": "z4jNFHjgcgCbKoTm52mNRjXd3BCb1nvR4mqMtwzMiNvKz3TckfztoKE1mH7Twgbuy4GkAtPwAhkM8jtMYcw7dY1",
  "key15": "2Jw1zso4eaU2KJXGspvkp47mjsYSLMXz8erHyhqSKoS49d8pNkqFS3R4AWkJfMJukfQNmvpi72GjHo8berypqi4N",
  "key16": "33faDZkXXPkkDELku5Ga2dg5ZwkUzAqUAMt4HeVR7SbJejqeohNQik191QnrPKUwLSVdPpqHpVxwBmF9ihSLyqw",
  "key17": "3sX4aEMJm2VUaqMccvwtZjTCS7NfvDgNN7hz7ZBfYubXD1eu2SpADEr6jLSBD4D7JPDko6VPphuvAep4LFxjGxFP",
  "key18": "5sx8eKrdDyningW7VR78A6VniFxnWY6PGbtKZ9e3skUn6VxP9A7Xyz8HCzCHoKZeeyTseRpRbTN9NVEATSwqELbs",
  "key19": "2NUGA4iTiGTartUmSsCLXdKY9yAoFXy9wggxBXkjJYshJUB22JGyVq5EbwtW1o9xE9Z8XweTst21VrwLFjTVDpRk",
  "key20": "4f4EUrPn9NfKzLez5r81wFWn9eVFyqoUAhWx846pnnV8FzPuc7kS4hqYq3HQEHDf3gNniivPv2iLsXFRzU25K6uT",
  "key21": "GsoEmx8ANzKgfiVqZbLsuGgQ5sfYrkX3H4ZqAEWcc8D6255DQL9QxiLxBFvus4ypc3ALZr1x8w6FWW5QvoxwrF3",
  "key22": "2bMkWA7hGV8woV3XubTJ1MRT89mknziwRkEQhDNzjSeMRJu7GpbkxQ8JzYN7yBm4nB1fTTK7ygwg4FEpiEXfrgqg",
  "key23": "3yPiMKroZHKNWzp5VsDbCaX7uSrzgBeqQmAztejBTbFyNa21Us7k38Tzh1RgmDWmVTRt45g8p97ZT91RVBsPwqjJ",
  "key24": "39TZV3R7h32h1BYHJ57VH2Afu3h9v6J8gtoSnRmvUgUNtrveakTkMbtMXVgBE22bnePGq1wceTCxakDVAN2vLf5k",
  "key25": "4HQcmo7MNRG9ocmrTs3A7kZpnpmHiiP3nciRvrrXPwuJhes43zXa2y8CJGhLMZk8TSQDHFvefbWDA3ZkkCAFSpw1",
  "key26": "2a6Tgm7Bm1Es5Fp9kvTDCzMpmWaKi4CwcSc4GRat5b9YiGga1SRrXoQP8hyrLhjnWEuHy4uMvz11nUsRVt8PqmHb",
  "key27": "3yNpbHPvjtqY6po1u4PQHScNUcsdMFecGPd8jH3Vpjx7cA67UpHDX2arwKU5hphEMrnnAFLQLfLM1ztZwzFx9BwU",
  "key28": "5wHNa6HwY7NHHfkFbyBBA2eDUsNp69y12jKqmqbMD4M5nFJz5fT5Qi8mQRKpA4sskUpBFL16nAvFBBC1wumQYzai",
  "key29": "5bbcT6uJxtdrQpR5bVnYsaxGnvMFx166XzqMkzZ1LkDEzUj43uYjvcVBjs8qWfDZA5n2EA3ya4nQMabLtEQvFdV",
  "key30": "2DEwd2yVmpso2GXAx6wd83D1LB5zBfE6pU4wCD15W5NxYxdmTvYXPBiZAF24WsFpqvKQreJAD2Ekc1PAhd5L89K6",
  "key31": "T2yErd7PfK1fdRwNojPYbrMcSsVSuoSwxmidnWKPzeApdmHftg6efgB5wMz7cAZPJfNW7o3jFyCbCi8CSUHUAXf",
  "key32": "w6tccNCxgKKwoMPyr3URXtAbcS1Rvr2LFbGLP4ux4mfX6jBW2KzMxyFjuvt4RNmJbhGFh2N1FNUUFgLsuxYwEsM",
  "key33": "2aXMVd8Dxh5JFQu3pHofVTdKAfcLsvEjEncEgjvZVikofk4F7zpe2xcXTEpHsGHjUipMRGXWoE7Q2FT7DDVcGoXA",
  "key34": "65ug4wxcBL2AZrTw4eV7F28WP5ah1kkWxf7az6b8VM6BEE2f62nnjjwNBQrGVzX5tbPUW2XcXym2jJRmqtUc1gsG"
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
