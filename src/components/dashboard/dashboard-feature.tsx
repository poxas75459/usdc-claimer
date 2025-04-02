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
    "ctT5B1DE6YHurjBDpx2p1xPSQpXsCXYg75n2L1uN8nvdy2eNCEotto8EHSnDHirP7ro4riwGYUqqcszzzF4B9hQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ne8y5uweLmP2Dc88hcpSoNrhiq4TQi6ASJhbCTAZ52iHzGE8AVSBaWypqXgqPUR8vsp9rYPCNYTVnNRUoVxpM3X",
  "key1": "3RNs92D5e7SYSwYKyRjC56ijD7XMPUx6dxZ1VMT6EisGTpEAAPwkVRHZQkNnAphkU1JmjK6aPbCMugMHeMSJyF4h",
  "key2": "4RnbHsZi4rkKCdpxqMc1irM9E2CJAYtnNM1eMbkGbwGZJyPmXpXbD7C4QTjnqsWbT7MUv7aTaAQf3H3XgdfvbYay",
  "key3": "2tfWeM9xXWMy6QAGk9CyjUy7XhMT2kkJ7YVck9FtUpjkxk5nSTcJhhYZYDmpshUHZD8nTXNrLN7Tmf15xPS349Ss",
  "key4": "4UsGA8Rxc496zgSw9CHvkLCMJZ1rWcCdtgdaXVrE9SbTF8EBKhdoRCoUoaN6JQaMehop3mmNAsP6PPsoEv72vMpF",
  "key5": "5TEUg5VV7b1cCnu9aPLov4keV8CXQgVqZmxFiPtEcarLDXj4vkZYEgSqoZDKEg1Nz1uZcmtxN9NhhmBbptkZsf8S",
  "key6": "5T4XRnXPFAM6C84r3kwEGxCwJS1s54abXbUdmVWeTvYTyA1Y9J2KBX8zjY3BnJBN1yHnWaJUDHCdMMtQtM1QdhXr",
  "key7": "2bAYix1FnaTXCmhuZrU4Kx3AT1BqGDPhpJVD73UVN3AHfSj2PY5CaGwMvQHjERTvf2AqcTHnyqUW1HGBYJFghCQc",
  "key8": "4YwPSy5jmdBtYJcP6vPWDYX4os29h1YfgHDFsSnzRfYxcPKDymDmHtv9yHMyKMGr2PejYbUZvmRcqNmeogyVfZar",
  "key9": "VS4Eiyuhxecyn4bDpbCGphass3wjHzaqj9SvGYitvhq1Ni8roKtdC69yPXeygnZjeoLniL5xLdqr6f3ZtY3uqsA",
  "key10": "5j2wcJwmjfZhn3hu7Z3ap2Y5HRUYaW7hqnJzuVs2TFQtfJayrjdYLtKnyVC321qqjJMSU3hADP2rntBfJRXYo1wn",
  "key11": "4TNR6avSNtU8LGj6u87NCYHAmzZw4AZyqp7Y93zxvtbkcS1Z8e8729JsvTnFBSTpK1ArsJAm7bKWArqXv61whR5v",
  "key12": "5fizpnYq7TGDU9Les1Wmh1mxfnTM39d61Ctbfh7nHy4tp3DubHtb62FFidZCXCcPZphJREEzf3qU4HX3SwL5surK",
  "key13": "2di6F6ypfnCQ9aSacc5PQPTS63cHGBRFf4pXCyBj45ZesqoygKPJg5JrwqXukPpSHqLjePJzfp4FitnGaC4C8CZ5",
  "key14": "4r3SeKMmaAbGeJ866wx9dk3H9F7zUr3THKjMrJvWBAvqphFdzYm1H44LyttMwUhDgZMDG7qdiRwrSFn8YBJoECNH",
  "key15": "52kCSUhpWV4tesceh2wcHcTB8NJB4D8gYyG7uwKq3VQU33Cse1BKG8R932M7WvzgfesrQ7BvpcW4wbahJJEgHiLF",
  "key16": "ed6XgDURNf3A2NaSjLg5JnsUkaCe6eV4dhbv6o45knH9gPQKKgcwmRi4woe4sFsmeTrUSHQ4SU1SDGtZwRLM27v",
  "key17": "4GzNnBZxiNqs6PCc6KkAzTkgnCnKmRESAuLmdDW6gXM8ot1UQ5gqdXaWSR1bBRQHuvVKTQxE6WLSEt1SKKjuEUFp",
  "key18": "4y6GJhfL8dXkUnNXA4xvAP1mD6Webmp6CsjQQxXQhfBQk8bi6MJCi24t7yChY93uut2DepWj47BqCqCJgiPfLvBA",
  "key19": "2FAnp2WHfe9k9J6bxjvRwavyiBR1FtN2XTgKsap1WGu7eGhYYiwZBMjsBNQ9VZcRrf3fTCxuvXnrWiSRggvYEF78",
  "key20": "28f4Lh35RgdCtu8qwWX7MdcJC7gSgQP4FQmQpuTTL3iphJtrPpuMoNL8mfreAaQiD3LDx3fmZ6FUFm6Z97G3xuuZ",
  "key21": "26YQNnrPgttLJjiTu6oGQWLJqaJHjP1dsSTJCoXHzNyjeoxECninNWtcAgJXNBFxJdjUVfXE1zDAFYtSvgeoy7oq",
  "key22": "4yGzxCQVEjSL1cezL4HrfSHGhZZ5Ny55pke3cwR1JAd6EDUDasv3zNin4mEfdrsZuFifnCAFatE8LSQwkRwxaHJ6",
  "key23": "5GNjSCb6a2B2e3wV8JqNhr6CzqisHS7CrfvTTHdYMuRMC8XZHH62ow48LBcoQgyeP3pkQ5vCCSpGFveRGVWH3rCi",
  "key24": "2R1VzPFkARRfBcY59pEZn7XYn2A8MEZ9ij5uqhJeMGALuqgbZA43DDs6mHUS2trCiHwtNXqswBqzyPsF8fgueQPX",
  "key25": "3mxcdAsFKNXEHDcbgiUVzSvNVE8iYwqhwZs4JHxmvgKrwHeWpKC8aJppdqVENqY7WjL59paJ6BxGv2cV9WDD5rG2",
  "key26": "2KJ4MGFtGsDC94ec8YzM6WTKVm9Pr4YuzzbDpBV7o9GM4sNtmDbhejjjHANzdsqn2R8JhXRqvqqkascESEd5KG4w",
  "key27": "471fnG7sybQ2yhidfYJZjZotgctV1YxxUaUgpfFRxeQVkuXpseg85MF4YDLZjZS7wHNtHNGVM4s53EoSackDC15c",
  "key28": "3z8GZh48uRxaAhYQBLP2B1zWe2V5gVbeJBcEYGjYUYXeo7kB8iMrg6TntoD5LtKFSwULDvpuRk4ZzFAtRt96DypE",
  "key29": "4TeBMFPPe5R1b7bYf3gFri7orRHDJ8Jv8ufuLN4ecQgbPNpgcuvLPQjM12ZLgUneR7CaNj2CzZEVsr9tVfYDcvo6",
  "key30": "4L4Ny9Yg3Ybix5b2CfsTG8HgTmFYhn4kNyHNr5FedYLT7jpqkCFXDUH1rWepULLmz5bHEq7bXHGJpUtjTFpaAafP",
  "key31": "4h6iQftTBJTN1SsbSC4xvE8gr4mqeJnXzVgXQZbQ7Y85R93PWRzLBDkgrxMEwuYpdD1mLeGesnod7RBT1vHV5myL",
  "key32": "4fBa2CJuGyPnFamw9bqHv1DTpiqDwj61itt5VxLoHzct5gkMswKj8xxU9u5Be5s3jCteGq5AxrW6gbtJm2maEBnD",
  "key33": "Zn8a1nioaCtXDaEzskQDsVUgWS7okJBcCrJct1nt5taXSgQWNzMQFUMW6cPpw4uMKCCXWahf66wSPZN523AdbCD",
  "key34": "2731NrBG12TT8V1kPsVzgfHkkUqtQ6FVL4mgKEQZ5qYsEc3QB7dnszcUEFdpZVQDw6yv78ucnPbg4fvHFP91FbHu",
  "key35": "4CcTwfpcA74CsYVtpmb84h46pGyL4Dh9natFb4P6V8BAFKvkjgh2GXgHUTRrahkqoQBsQs7gitR6vwq4SS7SFvHK",
  "key36": "43tDLSHzyH9SpujTgAzQivc5gLo5stAxfsz9aqbQNE2EM2gnE6kyGzMtk1k13rYwWDs69FpqcrjjtLJB2r6zgcTb",
  "key37": "4d55d6pKHWDsnwXE1eoJczYfbbwgQrgcwS7eRT76VdC3yHhCbsEctQyZKu5iRGpt99p9jzX5zynkJxoQ4QeEzQU2",
  "key38": "3o137uSWDSg6ZxzHY44e4k8mJrSDAYGKaSErcUZDPKaGsDzLHxtDMH1qf1VtBdBpRebAo5Ag5JuPCq6JLEVkqG3G",
  "key39": "4CsSShqiCwsCBQ73vePZexHMNVNNTfUNNZCNi5a8ExdcNSmYLzkkn11QC7JhHowKmmkN5SgjPnRt6UHhvSU1ve1J",
  "key40": "2GUoBHsgeLvRKzbbBNQnJQzHm22DKfjK9GBZSjSrmZvQZ2rn9ZWFjpLw77BaGmRyLkqZCuHrHc2zQgpAQnrwgC2T",
  "key41": "2tipMrZSpEMexTKvAzvDp6xArxSfK61oynSxD57Md7gU7M7WmvaMfk5oLhuqULC15CYeRL3K2phqDrHiaieAzP1v",
  "key42": "PhZFXkxNUyWEyBZusxTjpDLq3XfLfyyshDQQbZXtfAZ2c6bNJUaj1xTF8qN3nLpi6AiHCzyX52M7UisYetanvuE",
  "key43": "4Jn17TNce1ezYnML6seJFvK39dZLTRaWwZ82gVi34zFRSpmHUjaVknd7nFtqQvPbzx9YknAq1BBKFs76tgFHQE4D",
  "key44": "2TAcTnYjsTRdktnAT7NoJn3JnRFmojqZR1c296J4YNWRgZNCmURZMnqr9Zuk8gVuUMHHwgr9wPN2MuG4sFj7pP2G",
  "key45": "2NNVGphJR84i8rCKXPHLis85qH9UUxKhq1dYfBdctvKEJpV2wyvNqkNW6BXXccixn1YNs4Y3WgfDzij3EpURkTWH",
  "key46": "5rq76yMqfYH3oMJgCG63vxcfXPZGXUjjJy6DSuQHSUDYeArzR8rPya8rJwAhrBiVgqjRFB5CmaKHerYhXegJUsSp",
  "key47": "kPCxm2c4mREMKyoipKdwq59hvCmjz3YKhkrdnKHBRvYv5kVsHKYquioLAgHyr5yAidtV3TAgWALrv5z3qBDrhAT",
  "key48": "ZKeoAwhtVcDfZ6gjkvsZwCX1dVP6bPSQ7ewpuq1gGeKpXVAnAbWJiQFWXN1VsNfa8FGveniKHtUwPsjV4dEdZLc"
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
