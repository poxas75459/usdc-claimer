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
    "2wmJuhe889cFyVQ8Dw73DwfzCFB2z5uRJbr5MFCzPoQhoKGAK7ifbWYa5VcT6Nt2saK2fw5XX3ST9rTHWMSRZky2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V5pQRn4gDD32vGbVhPmsMz8gPiGAqaqaAtewbuYsygZRTb5AvrHsRS9obok6chgb9iZMiQpAYPuz4HoqTHMWf5T",
  "key1": "3VCcXHM655kxMwYcYwpnGimNQzL8TH6MdcGR1SC7MvksuSjnrS76YLCAvBXMXM7MWC74AvS1toMGrzKUA1hHiFTc",
  "key2": "KyAT2ZF4P3h18D3K6sS8VX3r83RjYvqyd2DUHpdGVWQd2criLvNA4gBGPHrrdjRmM8FqTLWNv2TkVejyfLyXXVG",
  "key3": "vTL6d2mLfHZxAxgWYNgs8LtPGJdQ55cRgVBr6XuNggv84KjGBHMrPZWUpBJgjA8yRnijzv83oBr1jNq3JwZrrTa",
  "key4": "2qkkgC4XxLEZ2jMBgpukHwtR8hYJ9DrGLoLJypmQBjvueYVQitjLaHQauiudmhS9DshsZRKzYQLSiFjujbuQ8UU9",
  "key5": "2ugP5GDddKY6ukZz3jZ3WzmegrbybJ8h5XGm2ZJoswv5kMtd6rjXipu57VnmpTd5yJXWGM57aq3GiDTRNviCQqtH",
  "key6": "4hj8rJuHZgLkTsSZcZnzWp7pMmLtnt2DJkqqtXxPYjWz1a3UyLFNZN5ZV2xRaFfjwMCLhCYTq7tojgckhSLAMYMV",
  "key7": "SNbQzA1NfZSLRHA9mptQSagpVNnx1jUt7vmH6RYe6vCPAhmak9cSzdMZx8KbKnshL6vC1BrNR9WhjKqM6dSpYEQ",
  "key8": "3Ka3r9wcExPEszECQNAuxXW75zyL5jnr3ytLr1VdcsKWc9bxNCw1bBJPcdqmCH2ZmUqVm7KK5cA3yJrcWfsRKUPJ",
  "key9": "ivoXvNHUdvCpVCnHVZTtNWQUTnxcWs85MaYH2hfhyGamwoYPkQ1up3uiqLLGWhaLoyZzBwsvdde71XLU4VeqaQk",
  "key10": "4tQy94T5jSnMnNUb7X1reHKbvJkWRkitEjMUDEtxnqMxocp6pYrc8yY1TYAMefi1JtVrquPvjUKsHvAbb4h6FZY8",
  "key11": "3UmLJz7w6PgGSNrgzsQfQ4kE5i5h4X4fmigyWwwfxppFXV2hDXtYcp7Xsw2SGNm9sEazW7fhSaifTVQXhv4fYYWP",
  "key12": "3PPGynywGXKZL9TYhYYXFjVv7yaWcrbhqJeF9ojre3M2C8beCGrqogKdVNWk8hhzKurmn92cjtPFqaHGwD98p61b",
  "key13": "3PmjSGPCmu2rG55zafimKUBBAhfJA6jEvaiR7J4BH5CSU6qbpq8c7eTqtZZFvT3kfbUUKSzFgB2ViWZtBbTV65bi",
  "key14": "5uEWjNFExF9UAx2YRogDgi9J9K8srQdnTeMKaJmxc3ep21kkY9ZeFNL8aHcAPgzCpBtYLHzx44YuY7aF3xjeZkfC",
  "key15": "Z4tGLqmPnHmy5a7zfNXNJm7pAnQBizgvs8jftwapryuV414rc8RXbU2Yw9CJASLGCanu2BRFR2sTiUvxbGWQNqN",
  "key16": "3CHtFJG8Xv1Vkj6bnpKir2R5nDwNrw1uoiyzob51BYtEwteTe5v8srSAfDkZXgwqgMDenLE7Ct5KMTJepJtE79io",
  "key17": "2udrWMMKNLTLX6pxFyyaNhqZMeWwAFkWemeAqUhkFKkSm12neE5smbVntXjojcNxeeagiryeH7VYF1C4k6TNHekd",
  "key18": "1n8wgAh9HXSCM7xdkYFt6wDgs9k1AB2PWzoKq3fE4854mBGM4F2LKRHe1KxggW5zhm3jre3bhcnBwpKmoru9PwW",
  "key19": "3nZRRw63DERLf8zVkx6pThQMLQdaNH2hx8JKsccGp6kgTDXqurfz5228udXRZtz1rqcbau3P1fs9qXzDYcuECa75",
  "key20": "4JTJpz1RUtLkxuuadhGJ5CfrrpcY5J9hsfeuH35DC8CJBvhYSrahi8ENVTqQqWwfTiumY3zT5qcGZTaoHpWAeSvq",
  "key21": "2haMwZjLABRfNoEQ2hUi4UJHuw47ye1CfpPJKXd9Gdkjt6yN33pFeZrZee89tQeSJmcyCrhVvEPisZTbKVzddZ73",
  "key22": "4V5PiW3TvzraL7waR6ExC2YYzv5jrJZPeLoQu9xRxaqvTSyWb8sBNWaBNPkhREzVKzGJGDpg6t29WyHDLYAyhLzx",
  "key23": "3bPPQHDmGtghvPonYH2rUpSjQUXMJ4AGXfmYqU2MaH4eZ5ZnQm2am4s9EQbLWsdtnuG5J7PfmstNSehdBV7C7uko",
  "key24": "4kGZ1ZdUH9SvLqqXDeVC4xNsuM3kfoQmKLd6DA2aNjhwj5fzNhXGDbbdSKZVbNxAXudEpAZcSYpTgkiYu6xKCWLF",
  "key25": "4yQSxa6QwZHyCfcHm8rLnc4cnJusHbjJF4o3yXXEFi3NZXiGcH2zfm49JapZCcH5KfWtsL6J27QLp9g4uNnxTz7K",
  "key26": "2ZSCYTchWVUaC27PHHPFiGNqe56YZ2KwGzEAW5uP24pNxD5QWHuybK4xWXH1hD1fLauSayLt4PTknzVpKkJTp6UC",
  "key27": "5AGSTS9hyW2aV2XrMaJwnxPwMit83vVGG6Fu65C8oBtp2cEsQxegLzCxypZL1VDaxSp8UykBHnjZ77eQF3zXUy5e",
  "key28": "4WcT1gHy6Qxe3YK5cunxyqBZzjN618T46E6qwwjyYhMRnd6F1JiUZ1c9MG95gEEcEeaHoVkraeNko7UzGoCZARjs",
  "key29": "24hRhoSgBgAokFZ2PU2s7k6VMpASgpAgbRLzmuWRRBeNPwqvj4ghZYMLmoYXd1BU8yTBTGVYKaBavfgZ5sZD1FpF",
  "key30": "3fEKXRdj9sMdUF2RigAHoBnqPTJKbbiSh8z7FrD6iP9q6maTh1tgTkhinJuQtuGA9YPjMaVDHx4Ld5NeU9Sei8Ft",
  "key31": "JqxuLfVmddaudmc5qdEpRXWk7QdVr2yjU44iQncMhq52BpxS9tjfAqsygieHL2iaCojo2CgsJhHK3rzi1dodiVZ",
  "key32": "5maXHNFUK1Dth2x37hAybe8yr18XL6CBJYkC95ig616c7EAeT359TDacMxzJfYtrD8Nn23qe4ekQkZjqJn9i5m9F",
  "key33": "Yu6QAfGJFZXxfsUQBYCzSQAiFkUqatSPwvTugdZMka8unCmH5SS4AgHFuC1xGxmZaSMHJH3WkkBfc3eJdBD7Ajc",
  "key34": "S9ST8KurRQQuVFtQvK74g7GF56hkpmN1JTkQYwpVGBNSiyh53mxHYogS4ZY38hGYREirVQAqwgWvEw15UKBjp5N",
  "key35": "52ihWAz5n3FA8Mo3mQ94Fy2KtwvjmBER1S96d8kSVA8XPBzAeQNh2YQjFjXYsuPTmQrYB8TU1bj2BmgzQmQyQ6Uv",
  "key36": "5RpoYgK7bkdTuF3tzGNLm3HRgdCc6u4RQGshPkyHREfHpG7Fj5UUPWpScHUc3xfN6vnvjLZquRfuebVm4fZWZPPt",
  "key37": "2NDqgyHdNziVZ2Ca9aKVB3WXz7who5xawcxMfayaEtV9MmwGMzTBKpygRZxjTbYNoCdXFb9Bg3j7onobnyAwcBxJ",
  "key38": "APH9oaMXYQyUrNugALcfPDCQFs1jGL1hDDjQSDG4o4dFwm9diukBBqTCEdhwJuxTDaF79iAeuJh8dSHdCZjqWAy",
  "key39": "624B3NUMqL6FZpB1zXfe2mZMwxEFTFveqk9qAr9SyUmEeTQuqSwpe1xQ16AeiVBMxvwCWD97ub1y7wrM4pyYr5mz",
  "key40": "5yeUGpktsTgLesaDkyJFohV23dRXmJqNE9tbQLBT7QYtd9JnFZgGD5FRK8GYZBxsnTq14sAySZomgSTZ77C3ALnG",
  "key41": "FDqJNvvHcooHjankGAgNRBRxFycSEGq2FwwvtPVbd43CMGuiNH8R9wyWXxxVLRCdzGUFncsQUi9avfhp2k9ooQF",
  "key42": "4uuivNQfUygpSBiTR9MA3XxAkUUUJQG3yWkVyCKTgfKhHqrC3cfQVEuoxuHLPnJXwp1Mf27JoqcvzGwP7h461wsw",
  "key43": "2eke6y4EjdqCfck6WpQTzNLGQzwHT6UQUEtuYGH58CZ5oVcTMKvStKykxWRA8u2o5JiiSFPhDFDtRgVy2VeUFkhs",
  "key44": "3VUPthoiJovLYtWm5MiyzVUiiSr99nxnxGfxWemFRy3V5VBDbPALmH8KFdc5jQaoFYPHTdDtF5saAQacywk6fE2E",
  "key45": "XcY8UkCBfnrxvr7NYsQ7VjV6sRiznCeVdjb13f9YHKAHyVW6q3TfLk1pVsg6DW4wBHRG6pxkWYR1arwT8GAt5F3",
  "key46": "2xjXHpcWrPCh1gEEZs2Xb1M1rkGaK3ZaXu4nxbCXxqwAs17n25mEtrP3gv9n9cGod8yPTNve198CgADSuNveZ7qE",
  "key47": "5ydCQaxFEQymx2iCvmJhpa5jRiBaRfK8hVZi5svRMwTo3bU58srTZfbrimjZ627W1fDYMF6uZGbQHLNm2od56ooi"
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
