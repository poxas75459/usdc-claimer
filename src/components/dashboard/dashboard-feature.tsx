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
    "3TCcJhwrQSMxdBb9zfRrwZvuL6YW6yMZKnZ8PkUaPTJW9jQLf9MvrkWME5ay2hn2ahjtyhajjH9Cy31Qe5mxDbRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21PkRkPuuyiEAnYKFvYhn3qEaB6GCttJjJ1pz4KhEn1ywTgwparb93NTUQ77AY8RVAD6dJCWnJ2VHEi4zZGV8qjs",
  "key1": "4cTqf2pR1qsMazoYLrLe4yGpGAAj5ewbhtVZ1ed5S4tHcZL6WYiaMtWR9bNUgrTEc6LU7RV381hpER4wMH3Ffq4N",
  "key2": "4wGzvMwpBvEeTSPJS2CDxSaBcAJKFMsBTSounRZseoH4ftAiHsyQF2kDxKiKiGaCF6r5btZNFB3zg1j8arauikBW",
  "key3": "4nk8CApeALMbx4CrsgSiC8htESB7uL15SoCPe7T9yeV62bwTo2ddJbCjTB9Tuw56iCPHe3fhGmuotxfKUAwWExHf",
  "key4": "3W8UxTxih3Yu5dKYGTiW5ijWhbhB6s8G5E2oeRRxp9wKjqsE1kuXTzKJ61bCiDdnHqrcDpJAfm5KfegxrvCWmomc",
  "key5": "4w6WEKS1ZQhXfE6UigZt4mkH6udoXYCbqrnP2pXJPqShEVnTjTV4WyVv3s5931akbkXfpokgCANatj3HQP3CjVf",
  "key6": "4VUAe768zveHoRE8P46uusfkwzQx7b3b2UcYVt5WRy39AphZZrhJCSqo1TEigVuhbfXaZgmkXt4rZvBWU73ty7Xg",
  "key7": "3LSBMWYN7dD4SMP5a6e1HQSAPtr5FuDLLKxaLYR8UPffxSbsCahKiRvb2hSA4nLAKGJKwRV5swFQ2FDhQ9Yz7X23",
  "key8": "2Rdw4n9ZZDqSg9vALVzwAuqVHrYb8irMNZ6Tv3wMh4ADMBY2GXp8RdPjoLPHtPDFMMAREeEQS3WDyG2f1yP7QqKY",
  "key9": "4ua262K1JSezH55dCRRYs1Pgrc36V1uGNisf7EWgV4FhAFWQFJLpGud2mp1Uc3YarGxJRJijzybSsBnoG7wims2w",
  "key10": "54wACHUZLqWYtf2uRGKhEMUscMd8KzaR7kfxYCz1ax6R1SdDFiFVPp72ncuukGa1zDTvXu3BwPwnYT1We5VSG7zB",
  "key11": "3KzwdPJWqFr8r7ZLXJ6T74n7DVaBj9Yybwydz4diTkqFRUfx7GEqPksMq3ocFzbtVCi4pK31rmZQzT7ZAN2cAFMY",
  "key12": "JYFLP5Azu2qT8sKKiEjw5TxKANbni4w7x5TQsNMAnd6RVDuTacm1BfBmjw3ijmftCY9swh4G7Umwp8oRjFiXvfQ",
  "key13": "42KGmWbGUAerunPtqk5gDxAm6wvbb2pLonJPtcU4sXyHCYzaaTkb6eUZioghHmEjbnZyrg6RYgPyshAkKHFuinmG",
  "key14": "37SqDX3YidVDRuRbksV7Hi7ufELZwUg3Z5r774eP83LiP6eXpe2sfUxJqcokoNmrhnpHxca6QzvTxF1RwJ97NJ7r",
  "key15": "4Js2JyDqpH8A6AoAwE8QCgJR6ofdJ8om3fnnEWJYvDip1W3KJ1kwQ2XCStn5V9cKRvr642dhBzHe4g8UeTQnutPi",
  "key16": "4giUcyDKqcnqy66SqSHnUzFb7ARiB33nRVYrg67yVPKbCPUd4RxwrWUESUy4EsVzLFowcdGww3pMrJkRvU2TgyDG",
  "key17": "t18t1NuoxAHaBAprjAbq9gMb9ZRc1UEUBDKqobjdjK32jHKwU962G5JPiyuhayj9DqawcVwQmsyqRKtYEF3y9Kc",
  "key18": "4aPqNqoQrTPVsog6G4vNzH1muAenPBRKpke2PPmBAfW8G5SkCv4nsRw79ktAokaqGGwDCo37CpoEkDaDuzpvN5cW",
  "key19": "pj6V1o7iiCFD942KKmDknKDxFLJJFVQJCLXo6sDPJ4dPU2KtHQaDXHZUiNL8JF6cZAzTcBBiTz2zRFmfmHVjmGZ",
  "key20": "2z1EHtJe5SeHn4GjfKjfJiWKTanburtvebKnKvQP6qmUnwmMts7xXxUEDNchWZ9bXZoXhwWynZe1Q47GB5Jq2i9d",
  "key21": "3Va3Ax288JJhkCa2od6i6N6ysSvioHQijKidAZyjdK2rcyKF7JVi2LgFPp3uUt3PmimjdE3v669AsTaBfBw8TxsM",
  "key22": "2j6hwth8ibsNuo7ZWGRmY61HE92UPGEAjRpK2XUXJJzXreNdATQSd221k9egMQn7d9akLa3wQkDdULUT9vh17jiw",
  "key23": "5VdYbyUwDyc8egzD84Kdd3hxbjo9SUBFALy6M3JJLaPyaoWhBtvrzFx7kQSB4kd1mgg32gunCA7qwZTedoEbEfDX",
  "key24": "39by4ZB4Ru67CD5zwwysfW5BnJCCtUJgxDaDjsneDPH1maFTS5kKTV8Whv5uLtiCtPyzCT22ySrZEXcdpBeVoqJR",
  "key25": "5ezu9iYRkS3EsWtQzfxAdpfJNktaHgUrJbNXDvSYdyBgqnzQbUbgCViAvLaiQrpY3xukCnLJvberx9rfc6T767DT",
  "key26": "zJADdtr8K7PyrqTmE2yaT3KDRVNz159Lv9XRfxcFgoj4acxkCF91jnE85Vjq2Ec6uJ3yqxjx3TDuXXxQq5w3X6t",
  "key27": "znh5Hs8YEgEFd1mb4keamS6NM52AFTeNT4nuPHrzkAfsg6NoYiPe3Fneim8JZNHjWezP3JGAvAi7GL7yY5MwHBH",
  "key28": "4jnbj7tQJ3KFZN9b4PS6BuMYkRzjafDUUqiAeuKi1UQtW72hmxF6tJvYoUBt5B6kSSoZRF9VeSLu7hZnv8yNaGra",
  "key29": "5e5vhpbhmRgySqCcVQuWQLFkLjW9XYhg2EhvDXPEYCt4HpWJL34qxgtbzYeEY1zRhYAE8qwX3fhM54ceAaGYxJmc",
  "key30": "2FYx5RtvEoG5pXAFam3SH7tiUnRZQRz3SABvnm8ftKoohv9C7u38C9DasP4jjbEAJbZ1ZDxH7UxpyqSCtTmkamZS",
  "key31": "2HaV6ra4HrvQs5ra1dx2AJSZyJiyNiYdgFvzXY3yRwwGtmCJvUvWkKbSXTaYaWDHEUPt21yErPdDX8JvNqYFBrmV",
  "key32": "4LNTqvRBZYKZHAvkdbZhm1i6bEeEkiQcBugAf2WrCEoTfeWFZsnrF184kRYSytb26fXL5AKUdz1cJ4m6QsapZGB6",
  "key33": "4pLp2pVg82EUTSQbhh7FCuJccEGiiAKB5UwPJUD2EvfqvUDuUMcVrvcywcmCwRNgVNSaCoAaFypdLMpSJmvBpn8J"
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
