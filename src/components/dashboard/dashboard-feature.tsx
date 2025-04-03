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
    "216N1DnnozFwxunUvZT1ArcsME7E1rTCwT4iaViGD9caVSaojXj9Zr5PnujmUe5s45WndfZ3oNA7K3e35LkvfsCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ngKR5EiJDnxA9mSg1NFgHnCdcRLGVRwc73xZuKqM1E4SNV3dvFNcr8okD4W79EPtYpxceCoB3kBWYtx1ZBzw7Xc",
  "key1": "4NhCr3mKFmknCsWs8NVqtmmbtR2cBzuyUZ9pWq8SXmAZvad8umQ9mxS33p1Ao9pXPUeHS8zB8m92V7KAh88W8ybm",
  "key2": "3KQusCkWxnjFy7GTNTXPjqK7gyvCM54kq1fzHWRtvgdXqgNPvi8UohNttnZufwz943sKoBF6Di2bKQjy4WnguErp",
  "key3": "54Tb7sNX4YrtJQbrZoM9w71aHEezo4jFUPBkPQCGRqyZqt4D3yjSfvq8RXifMAxX3Qm5osKUpKYbegt5ucuFpucj",
  "key4": "65riCQjZcamEpcydVppfsJsJhjC4QrahbFwrgaRG5bdVhW9495C96HUhrqFd68hKHzfLjxfxdP8ovqSppkTcBNsc",
  "key5": "4EVeJFdgYhE2igKeDWbuKzx6RR4eePXu9riNYrG6eY7uN4ToavKp2Pg1B7jhTMbWPmgtmcGqVKGi99Yu6Fa9vrCk",
  "key6": "245xawmF3h6UFDdUQTqUkMDqRdRdTZ99FfAhMXqjeR9NaauJioSqk3LErNcL2CupHj1BLeFoP1rWsr3dMivk3aEY",
  "key7": "LjCefaXM3t3R1ADUvHh5Ai8KoRWoaVhLC7EoFSbfWs6EMN8wPUPKZAAk2uNgCjgJX2Qk12zXpcWMKdWvb9UBSK5",
  "key8": "4J9UgeEiiMyeCnk7dtQ2pEWuTRfFt9vV9BnnUx7kUum4MhKnyjy8XkbsX5VPwVZDrNAWHe2PsvKp2KNFVsc2xayk",
  "key9": "3MRytTvvoBPpM58Cs8ieGvVYh7mygwPsu8uEG3ddcRyDg7v6Yb2a5MEYui7GxEw8MhAk2dJre2d3YsnKGbLe45a2",
  "key10": "33yTGuNR75iAJofuoB8rnYprXpqBKGGemwC7ZYJJtuAdrqbRs3QiF8AywF6iA5b94LNCkcSGjUvMqBjNRv7ybexK",
  "key11": "5zB8agXU4H9ss1h2ZghTcZ5ZHF7kSu3kRKFYBWyzYPEbqmXnjq4dCMWJVyeUFrQzVESpPAQK1AhZrK8JZjGCxwxw",
  "key12": "67Py59kfq3uhcjJW1q6TRPoABKsAZNka6EUqk6Mtqcj9X6medR1ktuLimAPi3kXLFwfbo53FDn1orD4VEkcp6zDn",
  "key13": "gNmNktHJdRgW6PnMMDvxXffR29HQqf9QEtUqRBdX6ZqQUrBvxB7xwjbU8ihkkYcHuvmWgfZQv7xdHAhrDVntoHW",
  "key14": "5U8xjGeEicytswcfAZQxWNeT4sMawcqpbPkXJBfNodw93WN8v4eyT785nSEr3uRWVGrkKWpVeyWhq6fvTobTDTe4",
  "key15": "tsFmp6wM4ZpqWMaiviMoYBHiyLNXmk2mm4sUHCzRDJSLUecsSAsXnifxhxfH51WVvwJHTQ3zGSMKZi46TLAdufR",
  "key16": "3s2ErMmGKCG8ibEhLqXnX8DzPaBvFM5k9VFYRyey1KGuZPSo3TMwW6aB1LHnknZVzjyJPSqoTEBa1smDpHrnKGXg",
  "key17": "TJmJK7rV9p1gH35weDDcsTTr54yRNMoNBWAqdoV3A7JwM4r71UVssX1MQiEat7jf4D5d1XwJczMZYZiJq81Bwh9",
  "key18": "4Q9gHoFD9WspoNuW3M7MfrYK15R6rtDinBiFFNgSvo36EZWgMLFSHhWuESBaJhBqHz1stQp9npWu1zPy1NbKAuVd",
  "key19": "4YmEwvZfGQEyMCqTtsXQuAqDyK9Nmb4z5qVLFvJpB33iyvfGRSCeApWdKtd2owcD3GBDCLuZAUicSyBVdQ5EGjTN",
  "key20": "T8MNpcoGtB2qEbB3HJahvTm5T8ErfaUFUDwuPnXS6Y4h3mtMFaS4pa27tDNiogtTRpN18XH6YscRsmvHdsYmaBG",
  "key21": "3BEpkCZW9xQUiRgoa5m1ewK9xysf1thoXo8HLXkxad7SqT4UN2i7xC7ztLgUuE7R98ENEhrvSR49bnTojetqnRPq",
  "key22": "62rTm4PX6uGXpvBvPctJjBE4rHkyatEFFEUNBNwPU52hw5rBUmSCpaJ7mci2RkZ9CWbwwGTsEqgFTiVu5eW3Aj3R",
  "key23": "2J6n1miopzdrTN5mb2kpYmhL4BrU15PsoevFhGTwbxngCaYEgWmtAxp7fC8RytLtbGmM1cMNgZnFLzpjFb1GeTd3",
  "key24": "4AfV9yEkFgqDE2EhqwBaRmQyy4rwi65VgP7iCKcyMFcsUCJRWyZGtHKGqCqCSMYZTKCRC1ebfpm5opPHBMqJuMry"
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
