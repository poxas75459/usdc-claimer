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
    "4V4gijbZbscNMsX1pkKq6sWdzsVM8w1t4RSgPkoTGyt9f8UyaVJaPsqogPfAp4vtQSWyqXzASZER27pv1F4suDTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RnPgWrAxmr8NzNknNoLiCCh3kT3ot13G5nii3pjyWUuV1PmzJQ5BDTLeSvB2gkeamFBdQwNim8jReBKmCz6Z5GZ",
  "key1": "2rXU68Ly5BhmvwgfymzHBvqbgFoBhAEgjRaFTT8UYUt7UFSfy87J7qiqeWW5kHYA9FYvanwJxrTWZRGmomeYJhsv",
  "key2": "i8Qh5GwKxCRvXpdzyqpSKtPqayz4bBqe5RMCepPPZ6yHE3KHQZHviVrkiyeXngEkNwVRg5jCPHNSP8KSSumXxib",
  "key3": "5p9r7y6Z21MAz6kPG4KR4oRzVYD2krb2RZePwM7LgDJAyD7gHXXQ4NvF9YuZCm4bsVYHSSwQn15sAfBtAJmVTY8",
  "key4": "4csskbm5c8LdD7HbFQG3T7ymgmD9LgsHgQdUf193qduMHYtY1gsZewBQSBKw5nhAqzxz9zjojJksEaV7MZhXfXD8",
  "key5": "UkqWsxYifBSBLT7zweUpkZZWkMr7FJES5t6i8q4PiKpiRqfdp61qZwsHK5CxPuQLDgnooEKg1S9DdRq4AT3p9bu",
  "key6": "3cAtjQxwk6L66M4zySv4dWktyzYxogqwCAGyYgr2XdUyVbANU2J7R1nEeQqKJ3L2NpRsDYTXuu3cg2CtXLaGt5EL",
  "key7": "PZpKpBkbYcYEgCMaN7cnt7oXC3nBZWppym3qgzAEbEV1tfY85mhc7KCn2dw2TULHxtAoSA3AJdkCorEAigeCw6Z",
  "key8": "4uJ4X6qtXTU9qfhKXwuxu3cGuRhadKiNfpK4a8x8TcHiaATGssy62MHrFvKUJnZj2t1FgqwZESVFXkzUHmwL7y4Y",
  "key9": "537yM3CLFS5CVqfYcKyCor2FQgTqjpian7hYAF983QyvuazrKtA6LT85CEHFxUH1HwSMdBgdmEkbb1bQdothhm48",
  "key10": "3yxNnLFvYCt36Eszs9ELX4P6SY43NTtxzo2k6iMks8mHH2QqHsoUFDNYBZbWJZiAhT7xAmef4yudKpBxqp4RageH",
  "key11": "3jS7aL5EcRfgk5rEBn2DsWJYie1vXgJcgjYmZj4KUw7MV1jpqB2YqeVzPDDDq2zCYrkyruZXuLEPKhBPg6aUwqT2",
  "key12": "2QSn19bCMeXnUZtBvXckViDd3GVUGxpbPFsBsrptEMEHoZAunmNvXBpcuNfx13rrWmdRdYmvDmRzhc8EfgqGwnig",
  "key13": "5vqk5hFNEoSrdGn7pxikaLidgLDKnDCvghg65AR2foX4GtuTLBS6nakDdDsJq3ZPPyLJhR1LKq9BhAbBWErgbYch",
  "key14": "2jtLxjMfgjXnbiQXCVbQPo4yaognXpt2ZyxNpMGCVZnT5wQWukBzEWu1Bf5n36wLdEgDebRTTdkKBDqiNTL6ncux",
  "key15": "5v2TAZgd357YeaR6xxphj9fXv9q6vc4VN96oocGY3UMfQmNzCpSTnuEHjYCcTNcq1WnyGvF2g2VkKCyaoJqhBMEE",
  "key16": "67bNaQcJKyohqfpCEn9nkvunVciJgV9trBkwKrLKKXvecBwv3ihwEhrcJMKDsXNXRMqMegA4um1r1Wbyp51eq7AP",
  "key17": "4t8EGLRxkPwv8yMSaBA7yftGNdDd9W63RM2PzutDLgbjTV7XFNVpNyj6pfYYdwcDKMerS425uao3biQo3TKS2mYY",
  "key18": "4GyuUDkmLfKhDH8EqRo4iov9LQ8L8uvGfuLBkzCsJNK5YBVRNsXvwgmpEWjjpGwxdrg3JzkHA3RGeGkxZ7YKpRiX",
  "key19": "3sbeDNwqDwNXZ8rvY2sVJ1gya27CH9ghYW9xZiJAFAC4hSjgDeVrYdmarj6FMFTP22sA9azdrFaX99p6gqj3mai3",
  "key20": "55DVdSi7c4336yCmNTC39Xv3i4RbfuFgFMw9mHEooZEDZ7VEpmhCPGh63z3uyzZVNv546qJde3nU7gADQAWM4CHm",
  "key21": "37bPkXb4KHgeC7JzTt1mqa89k6EEbS3peRZjcBiGDaVpHzCVp9CuYMkUz1RupZ1Rr633pkUXWespb6XTUp7PjUTm",
  "key22": "3N7hZuusFcjQzTLq9y5DBFCKMuE37PKbSDSCPDUEAjqn4Y4hrHaC9BmRJnN8VvXzGmy94MZFMu5yzPorbheQNNr4",
  "key23": "2mwwENB3eq8RPCGi5R5VkPRGCNcASoqZKbPG3WAccqpwp6csJ5VcschT34j1deAK3XMq3pGWgRsMj5EKkYvHtcSf",
  "key24": "666LF5DqSaXL3vDVXWbhK7x5MuHTREEMKa1gNhLX2cUrQvDLaKyiTKkYcjaZ8eTJm5dLCroqkEoK2qBkAVoKKu9j",
  "key25": "uL6vVWoeE7C8USUkKqdBhtuHv9pwxGWFRmgcLBkUv5e4dBydytMtY96NtAHNKPDFh7iVRALMGGRnjZMWtxvhT8z",
  "key26": "37y61Di6jWAM2Q5g6JrZLUevaK3vKnnXaLmCYregLdGqCp4ak2cXrYYyEFffsfUytubeCWgzbWZxrzWM5541QF7r",
  "key27": "4Lb6dTxp5j1Bz9z8CV14DKSCEhSEQArmx1L8cLrS3iwDkiYoFsyCzsKEm4nMF3rCyDds2qEKD9w4R2VXqNnC7nJY",
  "key28": "3Cu4Lh6heY8xuzSRii791kHBaGjD9RXtxDkChbhDtiUkE7qgESKt51hR1qG6tZKZFXNyaNVxUwQmePi5fwSxGMQY",
  "key29": "5JYfCURPp6po5kfddoDdWZvL8SPVmRhPSdo76DzBWSgAMn4hNAf4b8NP8tEvmzvHDvScC4a2iwCcaojDvGHPDeS2",
  "key30": "29fRjA2kLY3fGdXkv44fBE8JhR2oNiCpooC3eiV3AjVrw4nyW3JSiZfohTGKPtyxS3uWD2mrcPGJsHAxELEDPaqV",
  "key31": "A1sQaqd3kYjNjFrKsBbDcd38Ru1DvoedUDb8RmNo5An9RiPZuzYN9BU36BpKmw4z4qUykmR7rCzwXwmsn8qBxHZ",
  "key32": "4FFsp6vroEGMCARnKqssLyfo7AB8qhCM83Py5FybFtejF2d8KWbvB1vEXCDea7XUnVaWxM1nQkkgoZWCWYt5zQp1",
  "key33": "HH8zLWCKn7kXCJEYaWCDQ3yiQzXD5UG1U9bS7Z5UJtZwW4ZPfJMMna8vvUK8CTVAfT5nRzjcorMMjart7V4D6Uv",
  "key34": "3FF3c4pveqow6Ux9KAU5u5X7fyvqzKCYtnR9TEjgzTTkrPKuYUG5fGEffzeCDdMPMjJw9y2M6j9gaehVnnQBUpd4",
  "key35": "2CcpSDkf6W2WJcBzVu1ZFgSfnCLKFa4b7rS8QS1mqFacjEEwhkcSLtUEqWHPE69q2aRMYz4yxJwdzS3Nja2CGZEZ",
  "key36": "4gWSnDDeHVLc8AWyqrDb6EFBozJ79HP9mUtaD1Pj2PVLdVXqq9htmQonPFt2pzSrJF3kzQCZS2ATDTc4ZZqn1ZGR",
  "key37": "2u2bfjJqLkBPY52M4p15EfZJe2VYNkoBnJ9PUm9igJiRwX2BjqULdkMwcafktW9mocz2gdtgUTmfnY7od3Yu3cmm",
  "key38": "cU5pYjcgjC5fdxn3WYPcstFy5MhndMJREdtnd9yPmd8JYmrN13FkZX89WSSuGAqe4rbdaQj5hCZVQFFSVivURgJ",
  "key39": "5DGdaTPG55eCuC8uWyfBbVKxvkzEPNS4EL7zEKRyVsFzTUh5DvDnLGXFHiurG3NQ5yHrEuQ8nsPiWSnrG6oCrM51",
  "key40": "5ZtDb6ftfqiv7ioAR1FC5oXQERrwxuGEJKSfLMEEASpvmBjZ3j5az1tU1jGoD9WquCprpDJkBUeHuZgmXv8H5W4K",
  "key41": "433hUZUh5qcALcPPrzTJXCkvUVJJzHsfPzcog5pM39m9PzzPg4k5tnpUiRpwhtypWSvaXpoudigTyRd5H4HtRNPs",
  "key42": "5LdwP5zCKZzcE1cnyiJGFU2fNjwyYBMLvyRZJDwtH7XJKEhesuTfpUSPD2MthxGVVDcWTiQvGAhesc4sohDDAU85",
  "key43": "3rXcDZ6Xdqvi8Cm5BSz1MeiFHLfTcFCSbfv3svUpChz1honLn3Sihiqrb18xdaCfcCZZtic7gwSMkRMpdPUpLiut",
  "key44": "5pUqVSkR3YhfVBUtbwN3tD8xfwmcf2ixEugQpoirMffQJVEjVfrACi7KgHuGw5rQNWCsq2QrLejBgkVNaTuDrY2Z",
  "key45": "338NskCFb7qaFRFx9UQWattA3VPzYp83ejLTGxG31zNfmZNiL7CevmDCpBTinAQF7rN97jnuExHns8ik41cSvSju",
  "key46": "4RfbjkyGcguaf4p3Z2RHyQVtFzZCXX3BzCRrNj881dtVR1VM36wci1FWobA6dmpG2mrVP6FxF5eRjBXHHQP824pb",
  "key47": "4EgXokBVDxBpm3RPJMC2fA7JxQTZV3aGv4Lt1iwE4JeraNkZLTJ3MT6R4Twwq6pDjXDQZornc1w6ACQp36W2y4ui",
  "key48": "5eNqkoFoJqqzP6WBGC9m7EJGkT92RkTBidTdDuNbPgvvZBsyQGccc6ocgrgqd1t5K47dfZqvEUC3PJfnKmStxnLz"
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
