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
    "3ikQcVubdQp37Vkhb3wpt3tz592dBj4gGt5kjLbzW225ubDqYdvMfT11fGPpTNgNeaKSqwAYBzYGhEoy2MvfYxpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yZXvuAcM3GmMdjEVbejGu57VXV4A1dzG4UZXDZ5zd8bjYor6RV71BmdckFHajgbkCMdwhqY5NSBMHp59nCApPJp",
  "key1": "61iCN8a23Dah4WiYDM1G7hrD2qxJCyJiyqp32nG6NHdXD4DVzCtfpNfXzx2pdY7dPYzCphm57Gsz8S3hF3uvYLjh",
  "key2": "mu2vmcayk7UK93VZEgQCPRjz2pCCT8KM5Kz7F2qWAd8Wq9TXDYFxUK84TvKysPH9NvEDqLEvfJprnBfL6Bxy2no",
  "key3": "5bGoTNC3GYovxNqV1UzmRskGYsMinbiAsDczFK3fCaVkmUQc3PB3HMUEmsTvrPwSPLD7MC1vnkUsyH6HLVkEfXYM",
  "key4": "39XGxgc3LJiNvLJVGVMgR4t7nvy6qKszuRZu74SBSLFEcMp2C9jLEGyLcLiPYeEvtuA5aJnvbhFbtKwLrPLfXWaH",
  "key5": "2f25CmYAzKS52gbE3X4jvcdY1ATnZWJeU2cbDaKFSiVEBGGXd8EKmVoarn1NeK8Jq4qDzucM9dQAVbVQZBYPDs7T",
  "key6": "499meK2T18191hkkyJRjk6mzjVLcqN48fVEH3V4dzwRccqUhag4XfQbekr3E4UYFm4H1ruvwz6m57GZDAubhjKT",
  "key7": "4tqFjDDZvQ8qPbnwmVrsX7YGD5mqYhbuwEgsddXdNpjusB36vWvsyLao7Nb4co9brHMc1qMhTXxD2dHBMD3pHWUd",
  "key8": "dKvhD1jqCFw96iCGsYhCdjByeSLkTHNqYLxExHCGZAC6XWcWr81sZZaqqieAXRapBmddXhvzuKj7C1DkxkgZCg3",
  "key9": "5AqdpYUyhM5Ed5EyxApGRJhZ99bSDAkw6EP7ntPvHwwiBWF3g2y2J5Efsk55LUuUoBTCeNMCwChSdHdES5hkmw8P",
  "key10": "61T3T6qSahDFypXwkUgDCnUUSt66VmeqTBtxMSNXi3YtH1iujU7DayNeXGFsjMsnuPA6hJChzqQzjPGNds4o6SM1",
  "key11": "3LWtV4wdjfr6hxzxbhSwTJDTvCT1QxpK1V371juZGfxGP4Rbi79hESEGwS13kMGzsgP8kMFszKxoxA1naa3YRB97",
  "key12": "4SBAWnbcs3TAhnjUG7MFJ8fajw2tT7ARgEH3LsCXAAvvxWhZY2MXPWa68wUUiV8DPPjN9yjuDiLgCjmtM6D5posB",
  "key13": "3vH84n3BEjUMS4TgoxL6GUWmV12ZKxWQWXVMVyrQ9nBG1NM5CKq7wBpffBNBiyoFbWG1bBtmUF3vcBrCeckMuMD5",
  "key14": "4xTau8SqRhf9tByvnvnaJMQtL1PwWx6J3qPiGqEDLH7p4u97i8waeucNksdMd6FA5pabxTRxUXwwCGuW3y1zeQ4e",
  "key15": "3HMDPFtHjCPyhGbtC4p8JaQ6EQcesL9Fr97MigTmFfvnvfrLE6a3SVuSnEMNHJ2kQdwfycQuqpeHTsadodYSaT1F",
  "key16": "55xyXciCfLTiGjREeh58tQ71wTyCFtDfx5BfPLw8AyXrx5XddWH24e1EdazLDByTMJFHaYNozVRWyW34LxPRzgV2",
  "key17": "4V52vexpmxbZ35rC9YRhrA1QgAu7ZpsxQiGjk3ybs9x9Jn9hXrVoanRLjJza64wcnQTMvWikzUjNKMA1NvUznMfX",
  "key18": "2fjPvxAp9kaDJbGJBAxgakE2Jk4yKsBSH7aG7hgVnbrYSxS423d4VUwkuWhDYzcLgp5Rzz2wD8tEB74mDKviwxQ",
  "key19": "aUzfbrabWunm56c7VKBvwZYBkHd9zEonQjfSrjWgZsPxY3iA8pwvF56s8CxEK62GCXLeKoMCE8StpHKupt7qsvq",
  "key20": "8GGQxKEK5rJ1eZxS3ESo52Dqx8TEtty4tjiLz3a9RUkY6XAxiTYUEKvmih92KP5U82rxbDpLz2EyCeFaRi1hpns",
  "key21": "4PKGYh9FXE8dEXBDwxB5UfaXud11D5A7oRBejNGhCc9cc1Puw99VdRmrsn65TF63XgLFATKwby5peezHiBAbCFbP",
  "key22": "2sSMePfxgg8KGhKGPvS7Ak5TJaWj6Q88ij4xmKW599M9XBESCCpauAtHMj5mUGfQAZLjDFLQc3q2YYhyCmKNT1GD",
  "key23": "sHsRtpyWHEZvfbniJc1ih21EtbfExprJLyQp8v88L1bXtXQbJmrY5cQzLcedrKKYqWJg1TRZq4z9GiyCLit5UzS",
  "key24": "33S7oYFpQnH33HQLeSRmV5mDgkdw4E6PpmjEFid7XJK9kRRtCauyHX25F4eGifjWKHbBTZ24WqnWcenB7Nutagfb",
  "key25": "5N7e82Y8JQHKjG8xhNUnxzUchuoKvDRCnopS6jbwtnpWMmxTcH1XwoiCmkdhmvs7z879VMHcFH9FnQZfQwF7EtSA",
  "key26": "4EZPKD2ABPZGDDfbPRkyMBPmYdX36WfoWyxP1QS59KGmsfKat4XhsBAyYttALuZ2gNe65a42JPzMK7WBzdnmbX4A",
  "key27": "3Qf55ARkpEY2LmBvphnwzCHCgzxbVnxoXRE1Nwu4L21x7Fa2X5y2fsWqCE4crPh4uvyzF7juSfbnV7FqUr84RgZm",
  "key28": "39zYNSj3KdvCjdWHom77Jbkpaj5MWMQqfn68arhqex1pBeriB4vKTQHLkGE81JBtMTGeS67WqCQc6zEMzNYGmMrn"
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
