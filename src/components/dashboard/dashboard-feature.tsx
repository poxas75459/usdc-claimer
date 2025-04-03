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
    "3A7yphVSgXemU6YgCSJXyy66DV62SXvXNEdPebRYWq9sMcSS6k7Go5baGQMqbTWX7oKMoxPeVZwtd3zWUUudjkRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B8uNLbj23PwHUj8WhgdNXFWAy3ny657Ug9JdbmGudRrpG4zhYBuPUtAvzSzmxw7RHhZTMPMp3cjwrNarmKZ8VmC",
  "key1": "23S2ohAjWKXie711w2DPy49fL1rKE1xbsHXunexQMCFAU8vQiHhdMPYBNwtAKLjgNUgeLgrwHUEcdyY1v3BPrN7H",
  "key2": "3QsYjdCFr4Etdk53qhvbrrQQnqjAFLySEUFFXjQpNr9YsebTPvC5A9aHH7CAZAAsw9Gfosw3rfUBTJeLj6k5mkTk",
  "key3": "eJjXnCj3Khx5uNg5i3WqxWHYrV6GNVA4W5bXt2purFGi2wiCtWUWNHR2gwrHQsef1Sd4s8sE2kN5ewq4NsyGbYS",
  "key4": "5Tg3KMmJRjL9sQGK677Lcq6HpNEhERhHG3odGrhxfkuLQtvKkMW1pDKv4xTnJPYkJTcA3FwfFzTFzSTxZLXATaP5",
  "key5": "KCGo7U9GSxqjnST3fCu6ycM6RFu3ksVCYWW82YHXSt8YwJD8WoTMvcZpdNSKeELyQ8qg8FdafQVNwrVgySVuk5x",
  "key6": "38S6MVxe4wtMqP2nSuG4uXc56SPdsKuu1vK3kxmVSJsvAAWTuKQ4asVZYjhfAcWePib4HZH43iPFUsVu9ZbWyXRL",
  "key7": "Gav7quds21Z8YiyWXnCPWQmcziXfZ7WzpU7jTigTY11BMCcWjErAvkAoHUuq6bgmqp7S14FTLskAEGaeHayafFZ",
  "key8": "2wmvuEN8CscQRczG72wYRe1NqJotzQXd23rMishC2KiEQsSj4rE2CGDkaSkcs3LCmE1QBngDhBgRYSWbqHdve9XP",
  "key9": "3oL7PRsRJoKwzVgDp5VMsJpDcSXDr8mHmterfEfTmxHnjPYKwePxN1T5qxyD1UQ9p6BmXtQX5AxgJstdVsGbAJZH",
  "key10": "5jocCnTVFgrNcntu4zFaiPzGt617cTdve294kvsJudMP92QUo3KjaHabL4GYvJ7bkEdF6m3QMm9RMsEdpknVNfWF",
  "key11": "4LkD9wPPgUzq46WBobC48t3ya2p7Ujz5iUUUGgHvb6JUyJrxURLCXypvHC3PQ1bGZExSMuJaLmmzzbuLTAQzpHKY",
  "key12": "621Fg1kHCXsQSWYLm7FMcZoS9n1Ltxdz1hyuxmzKVXcCaSnxxqjLDCjVAHPRvFM3PtgxvnZjEY6zMLj3zsr4vSLf",
  "key13": "5qKxPG4gCwYzxvWYyGtstfuQya1nGJYBM4DPZUEmvu16J9WBVwFJfsy5X5tpKXiTq7YGhMhKXqajNDCfgWaj5vk",
  "key14": "ntLGT1urUPHgtpHb3L9mZ6a7b59VEwLicFM3d5J2AwsK4KLHdu8z1AVyfuM72UiVVGUYtya9mVwYXmP2shM6VSM",
  "key15": "45dVTpfJvLs4yuvaDSithBi7c5EBBrDGv3T9kCNU6hGbrry4n7fGZDC2JvTNufWsc877G31EYWFV4Nsmkmq9drci",
  "key16": "2SXCXccfJgsBUfLfpZ2h9wCFjMLpdVN37MmJFXnMhqYgdCwXA7QhrfHobozCRhinNfUVyLZzv4ym5kYt6RBeQEKk",
  "key17": "369L7kdUNNMUk5ZM6zUz9j2DTDx5Pdi16PKMh2M6YcXb5SQT5mBVDSpQ1VQCEtY9bYQ68Mxa6A4wR44pAA9Nncd7",
  "key18": "279UGxiqXrZvs1HQdeDoU8ptuUqn89SA8zRN2KLxVR32kh6d2bifd9jpr92ng9utSnLySjhnqor9LnhV5noyFnEg",
  "key19": "5V9qjKEiCdmSXrqjN7sHFY8SKaKqoDUgHfiiLrStr9SJkLTe21cTDhfjBWUUG68EVKxCJtc73AgBrScK85QiuQUN",
  "key20": "3DpeiUBVEa6gywL2GYW3zkFoKgZ5TM2s6pYCbLyr8WyKmY6HfjncLR5qBRw9TQ5TZrKXxNNuuGQ5fjxbR7yhXoms",
  "key21": "4Qfam167K7G2mudVNaVAs8L3WyP3hXjhVsDHTwtPEV3V56zBG4AtSmDLqHvBLcC8eKQmgGu8XUNTucS9ZTJJiece",
  "key22": "3PcwTzCCEdAcqiG4UzNk6EZQe7nuAAaB1ysVdaVsVHTfqm7qLBRPFV9Rkj7hRE26qKWYauZC2WaEpvejYpwyCqsA",
  "key23": "5dMEBaDamrr5TqJEqgcVGnB26DMYAp9vSWfXyuKqrtQLJzkZRSi7yfkR4ccEHkCRGSCuyf6oMJU2XhisdkAum7Zx",
  "key24": "5k7hBsEvmco3whnAyWeWp7vyEz16MYFNUDLHNdEtBQUkU9NTfT2gQgYsNJPu5HMdRhJJS5KLzAc4DyxZkuq6eMsZ",
  "key25": "2jRtaUogqxFoZ5Mwpy3e8MAJVeU2yqwBUMbGbZKy9sLc7ffCqbYCWVcvRhacsT47bKfJpxsNbxrgaTN4yn2vdKQm",
  "key26": "25dsK7fB1jkXTq11WVrku9kdzm3Q5JkgvLXEFhG9U11t32RFPNRzaQi58C4q1i3BqNNVBQwGaM9EBtRGNqxwykbK",
  "key27": "2tHrjQuJBVcWuHoAvXENWe5WT8nMaWs8tWxybaAEXhuV1r91Wd1EpFSUxkYXMVgtFuGqnPLC8Ty4pzdidsAmV5Qt",
  "key28": "2yCmNcxAticD9Uqumg2aS3PR4XnGaVgWJoCoGxRLfukeipgZxbCyNvNMSPFhxdKocMBpZvc5cedVLqZdMLT9r27N",
  "key29": "4VDzyCJ97GqKffX7BoD4wqnuDwanVF2fZvoCRVsuPKVrrSZ2M1pZNPEvVqKKogVTwhKQ8h5YqWiB5eri5EAS4s74",
  "key30": "NxQdMkgdcHhCjmkiGjwUp7vSSG8CGtk4F7LrdtAU7dTzhkW9x3zBtdUgHDo8w29439N236jGfrnE2fHnaho5PCS"
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
