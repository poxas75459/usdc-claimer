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
    "3yAd4X2oL1F4iwhCYTyZd5EJ5qKGtwju8aj1G7AfaKHJbUix7aw7Wwks6HHvpj9tqNcXQXzyVUsTa3Hr94LHvu3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KRx7aJHDMitJGaguYQwaEnireEvZE7VGA95gXmQoyNiLTi14CdLKWEmDXrGjFnCsFzWTmUuD4TU7vHTCc5fEYAo",
  "key1": "4U78TDGkdS2aypsosYPW5bz5LfwUefGR3s3bPBrRCwVNd1YcnK17cVrxEt2A8kHdF6cqxXXrA7P2DPHCoF1QZSz",
  "key2": "2Kdz92JQRn7BXTG71k1G4akbtezuMqmwQe8dmd9aKRNeVQMEGmYsFoHUdwM4EVbD6HoKNXKL1Tr4azsnDVH6KPGQ",
  "key3": "TjtFWiGAkfPttYxS1qAYCSbBMibcj9WzKV2HKiZ5o3JVkqE4ue3tgSLyLzZDDiV8wv3DNgYKA6bYDSRtswXkEwm",
  "key4": "2STo9gzB5AvN6sdn6V1BNwPLiB8YHXLfQ8UcudSPfdm5WFkwsoj6SNBTaVCm33PsQkTQXXyMLsyTNVfP1SAug3bS",
  "key5": "2GNE4jaDMwAd5nis6gWp36pk7bDkLrR4GNqDWBLrbgeuAM71swWWUX9wfefy8JgnypambwVZfzURyjs18D16qjnP",
  "key6": "3rWFG5yaVvTUywhDokh3TCQb4KdYjoMdcBJkic83wNg16sTquPjuJozmJSDs35tJMdd6RudRNLGJ5ui31gB5piTc",
  "key7": "2tW9HS4rgP9WuUp6d2AFZvEkU5ggpyg19jxaLtXhe2xnhQL7KeWGgbVF6GWx9grDLh4fTMmNv67JXxeYTYCYnhuX",
  "key8": "3YNz5hyGNjVPayKAv4Uj8bWHeQS18z6Pktmjr2T6c38EDCL3vE7BQprNAKy1hq3T29PT6ZR2Ecxp97WJdwcsb4rz",
  "key9": "4P19iKsHfuRXRUTmFin1fPKPAtjjZbuLjbKDdzAd91afVbC6j7BQUsAicaR8dUL5VRf858oExsiPhXejUiwZ8pHu",
  "key10": "VHAwTeubLCXXZMTRvpKoxk8XTX4ZvhqVkSx4dtyazvbnM3VbEwwBSXcEAKctBJPPozc4so4irR8yzYWd3nrs6q1",
  "key11": "DVbx3d56BjVc9F3khqCxLyazx9zwAggBTYcTh3rok1Ai1RNUyiKNsPWY4LG3tP2pkDkn3ysbK9mJUZzxhsPfjmH",
  "key12": "2MfGYAahkcMvfDcNDTmG3yXs9QsJA4z68Q7q4fwfBT8ddYZ53fQ4FmjMjnbiDf4c9uHea9vHb9MhFda7fKFUswUJ",
  "key13": "5k45CzXUuy73LeqWEjMtWkBApsDnyZRMR4VjmanR6kjNexo4CGX3WtaiTYYCdXdBSWcaKEB7GekRTzDqkbXVjNsE",
  "key14": "4Tp3hJHLizquiFoGQYTDuy5v4GrshKDjDYY1i77zagUtxdLaLpDeiUMi7G7ZEwhps8CFMLfChqMJChB9z4kFyw4p",
  "key15": "5SRZ51Y2FMeMXZDw4EnqHkR9D3gr1T3RWAZpfgR4eLi5XKzoBDGq491kw3onTTA4J9fcXqo4u1YdYJp5JLaXm3tG",
  "key16": "5CK4kHHJKmoNe9Shru8J5Qem4FKKRAqbrer7xXB73NwexrGwQoeUQK1CTGjzdA4qu6oNga9gNsxxt72MFkmAQiQ4",
  "key17": "o19kJWqNdXWZ7bN3vYBnTNwNhJpVagoDre7TmDgsknGwvFU95SqHmrdtr2BnpzH8pcGyxonJJ6tze5rMp23EwBJ",
  "key18": "2feZbC6CbD1sjDZ4qjhYx1X23PwnzYCDUtc5uFSbgSAoteQ45NU8nKiZ8mKYQTYfMd485CHKNTGRUVZXQ6F1xvHo",
  "key19": "5DLUDNjiJ7KRhFecj4Y3dm9Hxr7pyqvBKpZ8kqu1HyP3KcQk1vFP7dBqUNqryEkSBxmBGiiVa6QsKwVKvbzprzeV",
  "key20": "3TwAGCFXJHcEtiguR9Gd6zBeawMeVgAP2vCLzvpn8fsqpdk9vd7V6CErfi9GGq8TTLW9kk44ctB9rBE3fZUf9MiE",
  "key21": "2ziq1DYwXixVGdoVVbG5g73oAmn4viWUUkntbCrj2vYLo3oUcJo1nfY3E8W2Pp9dWiSmzv2hg46RvRAxP4ANPbvd",
  "key22": "56ssseVdRkGz2hbXy14qPmorX5XNP2WUd6821WgtzrZYNt3J9eomaBpVPAmzXApa7G59c49FQBCibFAWKToFYaBV",
  "key23": "vSCRcoYsMPzrqgygisMfC9UrcUGZzv2j9azErZL8WLKUgsNXcpPW2GTmF92Vat8DMJvPxiViKWtjPEZ5PRRkkWq",
  "key24": "3MTBpd6JNYdE66iv6qjhAUACR4dJd8YQ88Br8AYft7G6AHjvS3VWcGe4qSwYadiNMYTBG8ikPNiCPrrxFbmY21rv",
  "key25": "37X3sx5G8pyHoU6qBmfD83xmC4Ay7Ucgf3qXY1RfdYXBcXS1RJ6MoC5Bx6WrtJhTqFgU5wURmkt11t2qyzdEKvHb",
  "key26": "3RsGuxGhLT4osuzqSkmbpyQ3izHpUEuBTSGxCXoaeXBCDE6VoVDZeWyiiG8TR2vt21v16MyCPxtVe6jEoDnn8Cgz",
  "key27": "Uf6oumrfxBvsmmvZhKPLTKYnqbQXoS8K7ysmqWF1QTEN8UEDqZUVz8gWfqkvyk49gHeCLPKW4zZye3xH6wxoFw1",
  "key28": "3HEW7nR7i9j5fbtsNd3tDLsHgyWjUwnaTgUFnLbt6pzAfia5GeeQZhUcaPWiqiQiFSSNdDSz6ynCcnk8NjCEKY5J",
  "key29": "232iyVCeeeVCDcLnekGJq6DhpNDXonszGSh8PFzrgWsHDMyHrHejro4Jhg5mqf6dg5Fn9kGX9y8GDJvYk8vHLdp9",
  "key30": "418UYz9yrWvs1zuFvLU2oDLhePhWqwUgPUGL3E4wLCGSRZavCxhPYsM6eL5vNdtsS83CpYTALjikyuBq6BcXjvSG",
  "key31": "4xLdfq8dT3HTJrxqfv7Pftq1qr4BQmHasZtsZUcXcHSkjPApALRXG6HikKqv6bN9rPuvret9niJJESbo8nd5UPX2",
  "key32": "4taaC9kxVYMzqYjSwfqtCF1KLZifDshYgxEJJ4hVyTSsEX3PupPcUz7vmE6RMb4vqUsjcnpzhsSJC1v2T6bt3npj",
  "key33": "4WX7YcCg6o6zZjG35cYhLjChrjDa56D4DHPanvKPj8bUKqg9WpyJj1FkixvpcfgJMMALRyWuFAfneRFsFh4AFbir",
  "key34": "2o5wtKQzV9McJBg8HQ5RMZbDnuPhGPxyJ6RbmeSgyv4u6h9rebdLkrnxv27XssgK2RVg1Bh2QHHiBS52C8JjRi1",
  "key35": "3kcNRjNkY3hZWmu49JuW8uu395zDhPTKaep5kwVrDW4jU5GTM8i7aPUhzFMztD8KWKyWfNKjhtJGMM2ZMyoSsTAA",
  "key36": "4UGznrznbP2xyk94rThsEynCUUcMVsQaaXDbHeott13EmBDW8TyvAa1meyxmaSmuyJPJXU2Jpus9iecDmmb9h5Yk",
  "key37": "3kPexa8iyg7JoWMdv7XwShqtKhDmECFFow3JyEP5E373wFvhZfCz1EedXPsR2RJeyBJfu1bB26WdTqMXVvD1gc4G",
  "key38": "4XMmttSQXXrnHZAhjG1amreVbiY5ZcY1L4ksSYMqDCGfb2kS4yJ9X6FMDmj3iugRyUmGLbCmzDS42wQSYyYSaRnE",
  "key39": "2rsHfgeEKv6VsugYvRrNEzfG4dH56AaYaNN18C9DUdjHjdUrHTFkLoUJ2DkJZxgQ42sq5xRCwPZooXgh5iKwWKYP",
  "key40": "AmDy3VPcxrnzSTowryRjrHxxJ6WctzKqrPVyG5ZyYnWmFoT2Bs1WenV39q3ryifQ9mqF8NQDDDiqCjSV7mC4bVp",
  "key41": "4JKqz9L1bJBS7G6JVfAoiSfVrPcQtv5tooTyA6rKoEHZFPDKimrDPSZSTQJ1iQtPGZDUuotjQuTXfimJCaqAEfAj"
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
