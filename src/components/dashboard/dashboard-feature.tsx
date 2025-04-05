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
    "ojwUX1118wNsyLFzRBwy2Qi3cfhJqodus6wkYWtCmbBu4sw5FgYfgpjo1C3oa1TaoDEAVe2JqZVuVUdTSBe63pu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u2hPWonAW2YdEF7MuMd8i7ELA322ocTLXWhzVJ7eb3cMGbUTy7gYNjYzSXdw4Jf3JNumZ6pUXQd4tNgsL8hzyZu",
  "key1": "VGdcUJP5XcnjFDy2Q3bzgjfFXKYQ3feKbdY4AsogvFZYi7RSztVpSEQ9tUvPb3doqRYbLMkx1skSTcNd2ZaYnSe",
  "key2": "UyAAydJLPiq2XE5rScms4BmFYrRhUsc3HpSe18uZQT3oNsyUXJv1ezCiQ34b41bBDYkPiewtgrR3FB57o1S8ECD",
  "key3": "wywyz1KqdgJSRcS3ZkkLLSKwZF3aaeqiK8hcn8AbJrB654hJb1KAK7zaTgBKAZmqYUynkPVpfcf5QrB1P9j4j3p",
  "key4": "646huf9ENB2qp4yVQ7wZ82QRGu2ZVXg7eGSGM9zPrkpA1BEi6BRP8QAHxfiGDUMtumXHe7Fx6kqqmbjLBU9xjDch",
  "key5": "39EeCqddv2AZ2fEmxu8UAnW8GdnKXMeDANbwpG5ig4L5ePHpYEnnUVdCxq7KfrxNj8bfXVLxrrvhuWY8HiizAaWi",
  "key6": "5zGw7rVYV6ss6JzG7G62vje5Zhhsdp1VV9urHNQj4nCwdQe8tRQQruz3c8eYRFp2fGaJzhv1K8p5Lx7gQmubHQXM",
  "key7": "iCA46g1a14o2kjhxfFBUzDaj41wcVZSZ3YDZUcHm63VAebqwqdr8D4N8cJMCmpmshPB4KYz58Xf4UyfLgF3XVXb",
  "key8": "6d56qsipBEp5U1f1pe7DtKzrGVvi4NCSV2rjBjdweRzKpwZ3aAKi6CPKEhGFKoZzU7y64wKTfJLkKG65z4zdyav",
  "key9": "2wYQtUYEtpRdnug6uDAUHTV6rW1HsxEUzZwRR2asPCKC8yyTJtF8dHSuUz8v8SnmeSFrCPjS3iqGNA2rCHzjucJw",
  "key10": "58zdEz7JVbSktwkogPTku71vYk9voBNa1sVz2h3166HCHik7CQ8VQ9ZkYBPgsydL25uSQeuGaPRro6rLKHHM1PJi",
  "key11": "46RYnuY1EVVawgkSq3CDUXmx1UziJG61R73vhoC9jhNSU5XbbTqmn1v2fXR9gpXzKFManBdXWrTgUZ5To1ANY96d",
  "key12": "5smwyKLw5MFG5KzxPD33ZsEHk4Be2CXGYJ5TC31gEPvUHixdybX1w74YhsdfBiqgayMWECUhWyGuYCeNACxfNr7Q",
  "key13": "45azuEJsS35ooZe49sG1krvxAkrTxjcRBoKgbazqfyPbSQKzmKUFCX6U1pt2Xwuny51pJA2ijd7yDJvo3Ak8bE5N",
  "key14": "429NV5ZtSCqU7pZmDxZWeE9TqceNX32hk1waeK2aLKFsWBASqTPP6oUeXYApjyGSiCvCz5DeA3XkTRaz9pjah9QV",
  "key15": "2U3ZeddLB9xNdoxyA6MVQPHkLanBTvmUzbUpZN9usD8VSfJCx2oJymGB8MT1aPfHpwnTbMbzc4Fh4BEXeR59u1xX",
  "key16": "33kuvSDFqFHSMyGHJgw258PZX7ujLsYrX94o5mQxELi3e4ZqGbJnKFCh53YAcvTAUg6tCqucqx3rJoQAqntu6Qp",
  "key17": "4CyvrXXCDGRqfpiZSVEhMLVP8nW6vkPeExyYgAHKPQzxXByVbpf7osVZciidyWRKmHSf6Mq19USxK81rR9Z3WRte",
  "key18": "5515VDacCU4iuB2QWiqJ6oSJKYxesbiTNGdUZchUjfdRJBHP37B1KrT2Y5NMi7XPFrpsZjBUuVpTfpKeNxGUyPs8",
  "key19": "2oSSDXhsvsNYBU1UViPVTZsh2WH2SF1qjoQtCCJWTwzoB9CEsDp3pG7yek24aJns2yxKVMtchViVrxFLZ9SnpwtF",
  "key20": "586bFQ4n4wHSGyJtNVxG9q7xunfYHyviKRxVKRNsBb9z8gBnrsrXDg7bcVBG9B6n6oUsQhG5TqaWyBFLZaWAnvog",
  "key21": "33xijpPBWsQgvwxHX7EKMwXKDZWAze79nU3YsThHca6NLG64xPthVZ1EGuPojfVMNpmVpt9NRMjCWueFvH6RkQov",
  "key22": "5HsknPJGmsyC7rrv9VUq2gY27xyL2gn8FSkWHiJ8rXPRXzsWpdtYYVz2oyH6U7oKFbC6YwAbt1nsjBxJPPpDRu8q",
  "key23": "5pMNqxBoRtbCFQC5QMsUjUsWbwquDcoMU8uujJy4yQV2nFQjoHj4vWYYEu5uzcyULr8fEEmwZh7rbH7Ly7n3eRpV",
  "key24": "4R5gyjEjS2rGz2L7zBTviRd8JsFwjetotvcQ6h71B5CxH2fKHrCeKtjGzA5c5fVZnmFFPuUYThnuG22x5pmofLpV",
  "key25": "5xUqggwfscUJs3if5KrEZC16Vruv1HwogYxmoo7A3UWWNoF86qQfFZLksi7XMEiJQzaqKPuC2hrbFCVpzN6JNMwf",
  "key26": "4mw87YMyv8nsQErN29cHBi28b8Wev8CmW6SqeQ369T9eqKgTPJcxYJbYb9EFEZ7iXZE2RNDYe2Vc3896ndMNCUiN",
  "key27": "37YxT76g46UwgCFfBhV7ckgkJxMzqQWZgdrhUTSzpw8Cn11oCLKaifisTfsDJXAWCog2Pp6SCAhQGqyHgnxXdDfT",
  "key28": "59M3LKEZrQRhWQsqvwpzqFYeNKDx2w4gv7p1fz4qy6yY2fREMKEBzhNBro8DG4jMw87JbCTyEAqCSsneNF86A1AT",
  "key29": "5YcM4chKLkThCDcpmoCTtyjSWh42a5CkcNAH99fE1wHwuAJKZF1Vq65dhVjWJU5vo9yAacbvG2h2y93aB3UYHm7g",
  "key30": "3vkVW4QXesQkjbbE12DZ7HbqHXXXuztStKFQbUtW791Yq4qv4FQUv2EiaHYaN6qoXFNKG8X888bNSGUFnRxUUwnp",
  "key31": "29buLioKH2Zm4RisDjUuu8YCULwAYKoKkGmvtSFb9UExfPEDN5rzNjDE9TdyYviD9oFcwGyksea7AFRih6zdhq71",
  "key32": "3fQ93qbT8jUmZDDVKQSqkKfaA57ecygENK2kD5WVaJqm6MtKRbKMo3VaJvkw8mY6uVNWXuKy2LQDSDjGfszFSJDh",
  "key33": "3wunnBEUzmrzYhviZKngeqn25NpR7CTu6UZHoJ8S3oMp17ZGM4Z8gCvH4r8ECg3a538NPLZpo4gdHnTBjzoZ94G5",
  "key34": "oDKnU8oWgG59bqNMcQF9JZyAu1iDwtRjD4qn1RwwZ7N7QaTUEj7cs4PpxUhJnwwrrXGzK6v4AxqvcEX68sRs97V",
  "key35": "4PW2LcrGtoQhtNQ26hXQTpA5gj8FAWRYYSB5buwpfGxj885RM9eCevCfNXGo6GvugHscyquomRE13RdktcNbNUgJ",
  "key36": "2ZW5ivBcjV4JxdqaEiNGmEntMHuYYxnkqgAvhQiZ6kfZt9mn4QxfXEuaRW1VFSbt5k7MF7iGZKf6EHH42GavgGZB",
  "key37": "5UFD5WMVABoEiEU4wH2mRBWYFrSDhCaVKdLsqDTkecBLgFETyQthhzWxSMNVmPNYDPvM9hs7uQ8ASrxWFsvE884o"
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
