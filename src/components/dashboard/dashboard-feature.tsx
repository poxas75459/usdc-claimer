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
    "63gVemaT7bEAUEcMzP1E6x1aCrsYbekVf6Lg94LMxuzGvQuPwnkYH2Bup3RN5YDXcdwkrFWeyJtwXd6qkJprKVR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ifMerCfs2aGVpmPY8fmG7CtaS13Ygrd2bzgN57gFC2qeG9z9gFFXirnEiWkS7qe1DJy6p6ZfbNZ5RX7rfJRd77a",
  "key1": "4cnLR8FsTqPJnQJDPeHjUL9Qo46kr28kUUhku9aJSmA9W5vaYr4ZzcDvadw3jRku62HGE4Mok62sfCnZr9QjfNPs",
  "key2": "28DfAo3dFqFWNZ596jytSextNFbLpGFCtgYxjuTLFnHRjUkZT3tSi9Hyjxptb934CaYN4bPfCijATYbpAZYq5aV9",
  "key3": "3x7WZXvKokgJEW4zQC3mm7jmnkjZHQ3E1YiiK6enw7XxXNP4KRMgXZRUGq9XY9sL3CuG9WhpzHYDXsmHw2J9eVvL",
  "key4": "5zvx9fPnkncqLZ3x8dHE4DRaenPhrDiPopJbNq42cqrEa6fvXrwGUGZRfG5t1KXdWg5yfJacpVoXMf2RkaBv4eqc",
  "key5": "511ZGqBCArSG1LnLrCvj7xXwEGRz15EX4fArjEtAoigQ8ttQSPVKSxGqMQK3Pqc9ArJ7VKBHsfBcNmaAMVBAypvo",
  "key6": "5pMYUX4SmzVGfoE9EbJakRsRbZ5NXNTqenT5oTs7KCRCF8KQpFdg1sXcjkczmEAJNooPVgdgB6sZKHcETLJtmxab",
  "key7": "2koSfacKtxE5geAWLeiiGHoRnb6uMYTBeVm2Xpe9chJpGjGAPAw94uwD8hPjwcUhN3pRzyjBL1oaWv5gWAkTgXUX",
  "key8": "5N8SwwC5HSHGvvRiHWQywQVpMqLdxmoEaChJ1kzsWM6yDEbsavyJGvVC8HbKwCdFYGFT6Lv4XCMSmm2aMZG4WXdc",
  "key9": "Rm26dGWJJF2zjXy7ABoZzoy8McZa6kRQrxT5GkX6Q25ejJaWxEb8TFvBcUq9FEpaeBRLMtRkn5hwuHTTdhNZEhC",
  "key10": "2T8Gq8DcyDPybRjaH9ooz7xePXjc2ARr17T1ChBuV8oekUdezHLdNWH54q35xnLuW5EaxFG9yAZjWrJkvivPyw88",
  "key11": "suybNtgXxR3dPQFajNJo5mFcoZSMQdgR6ueayP2kQ3Pfk4it3CwKo8MxxsYw1H5hN71jjiZ9zzUgHjFy2A3Zt4K",
  "key12": "4ffxhGo7g4ZvdUWmW89FcXcag7ZqCvtVtLqkQ3EHnWeaMk5emRijN4UgGNkxcD2fGmwpcXJV8qGUChbBC5kwh58g",
  "key13": "3araM1dHe161KqMTU3r8BNkq91KqyoMBcXBAwtmwYg48pqBgEcwsLJzxEwxprYdcoyZacGpJR51N8LiXGRDMhWws",
  "key14": "5gnwEnH5S2rKGPNMVcB33FQF7KaCsyh5qeApGaUWgCZfJ4ryNreoMRyydZHBisX36E2V1nrPswyubekABsPQ44bJ",
  "key15": "5GZ48E3kfToqZRzqEHZeYhqAMmvh9qEf2izsdi4mjDKrAaWdDQXcDPAG9PMWtnepcwqQjh7tPG3R3Zne71vGf2Yd",
  "key16": "21YKe8cCDCkfiRGPaeuK8xs6aHXPsXG2yaB3rvPmZ9ij15XPCPM3iNpcdrujQMrCEmXQ79JS1VAeEnCsCZeLKhYy",
  "key17": "2S2rPzksn8cGj4sSToetMj3dyw7zemgM8m6KGoRL1eDCMLWtTSj3v3tNXANQL6FUGcbCEyiYWCVWBrhCJdVt3Py",
  "key18": "5MZ2EG7zdLzUyo2n5B8o58dDagvabg3uLGmBcyhFSG67M9VmoZ1HAGoGN142PPtiUNF6VLddQPzkeH7MvMDAVzXJ",
  "key19": "4P8JK9AVYco7n3cuXwwV84YmCZHbpowwsUdTWWrG96TJCoY8aUisrutfsJWyFgo5CdPUxtXU3XP88oFHXHs4QK2q",
  "key20": "42Mew4DcdVX4vSPU6qC8awybXXFGgc4RfBzLXutnHMqVJHHBHnT3628tZUiimFBcDPBdkoiLAk7s7dPMnn5Adt13",
  "key21": "3Stp2T9UVtZgxp26axE3oc3M1Y5Auq8gCqZBZUgponUqRmJjjXVCGhR5Q3cuokGCX1VQBndAkXfgai91LhXw3cGo",
  "key22": "CPJoB3BL6aNi9YWWdtnch88HMrYoyJhVNPNBKyiEoyvz78yAVbHSSAEnZH3qQyYD4PpxJiKHVfhv6xzBsbkvBRy",
  "key23": "2uysgGwiHmzwqXz7hCCFGRnxQVTzYg57Yf3HNbV23UyE528TR1FbNwuz4kfd2nKEA8t4R9hoLG9o49H6K8wfNGHr",
  "key24": "3Lqspz2B1TwAxpPJ1W6BBoGokbAK4RRhiEMMXHpo2HKwBmcsDG7p9yFNMgnz1tUUgJE16xvh7EUYtSunnYD8JVTo",
  "key25": "2ysANTZ1Pk7urenKkmdWdBMLAqKwnP74F5S96itriYPsu7U5bYHgvbFJpkfcprevJ2S4Gm3xSnh8kGZzw3iMz88j",
  "key26": "4cudAS2R2ozRr5pjHGchgDGdXZccxJ2WRQd2BGMBAbzhC48znyYGyxw5TPdPwSksWAGSyDWaCrw9ePm8RKe39Kt1",
  "key27": "2Enf4ZTxaVjZezPHsgNkuZCzDuCg6abQ39mT1mVA38sY42WJ4RSxwygK5zvf3aSHaWhEWePYDmfeddLgnHrxfZ75",
  "key28": "51nKm1rR6yEnHezrheBvoiabtaX72aBb7LnDB4RTVkPie9Zp5Wbs46PJSBjUFcrJxVRNMDhusioSt93PBb6UHFNq",
  "key29": "4usHt3DKjbzFzeCVL9zzfLDgwQdNJKgjiQ99NNiV6xsGDXtjS4pBuT1VDodPpo9oCZqi7FRv2RZStTRSw61zFWL2",
  "key30": "4LMGQ6ESS2pYh9xh1spZqJuR3mg9RFxzjUtzue7Hm3aPZ7y756pHNU2Aq94Wuf4Rdi49HcmBnYnQgHube3nfTqLf",
  "key31": "2ZANvamYE7XuSV4qNzusP9F2dH7huVNCaf7DQYPsD7pCLCwmbDtwRChJ5rzD4zPt2ySuoZ4nvUTZEgjW2fE5RDrY",
  "key32": "5J35yBb1q3tKm5FfNdmgak1mzf7erkAV9QkUhTwBrQC8Cg1ZxXZt6RxFUrpuar3uiiMZH4ASZrBwENy98652zKAq",
  "key33": "3xx5hkNKFrBt2Bms5mggEaNM2upQBusab8FGD7vat72hURbUrkmK2gKgmGzEx9zJjaSAVj86WvLd9DnVQnubbQet"
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
