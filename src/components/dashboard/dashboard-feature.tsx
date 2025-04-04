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
    "557tE36timaPduK967ncKs2mJk8Dcu6a5EA3s6Er6j9oba8Et4S2im12M2q3DrkYYTtktkRUNq5TftkX2gwgwNHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5stSTmRT1CaH4DRs2VDdwNxnBCeLGim5JbQhUFsRM2pjTNq77rGTabtun8pNfu5rHXXJ2cTqU64SoKZB6YK5iWDH",
  "key1": "4ig55paBVZEUqnecHt84Kk5bhxzc4HHURzJhbPBSiS7hztnpt4fQ3NC8kSHe1omvQABH5epZhQnR4LwzeGbWpmzD",
  "key2": "63RGs1U3Gamiwufr4yPE4ih1ejvcwbKSALTZg1H3KQUwVdZo6BDxodEufT9dnpgDmrLgVco3DyfuXm9yzZ3DCvBN",
  "key3": "YGuCJHYjjX9benAC655BuPSFXibUNXfxrgJeydPWzRM1E6zCkw58okEQN9dS5NbZRjtfDyjfmjCNBMoyadLRfze",
  "key4": "2bkqdot461cQEHv3eR4M6DS6kd3dAJudkUvM7k9bc2MdPo8BTiYaqXpMwEjcRiPx2RftZhicSwHzBvfjrgjaV8Rx",
  "key5": "KyBLk3c6QzPDXxmv1muJYPWfKAHZQWPA6rSBokffXDJm95CrPNPyZ2Mq17bNUP7k8oG5qSeiwXXxWA69Shs6nof",
  "key6": "3wTaa1uxiMXfyP175gTFe79jpWtoZs4mH5R9h8tNVyQzhk6iJoVHhoya1rME1G3uTZ7djBggrjSuVBLtDH3ZkxvC",
  "key7": "3bFnqUSw76gmsEQCRox3JLaQPZcMf6T4D1TT751BFUZHTkkaWS9BxD3cm4RbBYutiqPCAKhb4MkApAcWaAuhCe9b",
  "key8": "3TMmoqwtmxzzSbaQd3ovW7VwrcfoBGq1tQA8Zp61xgGMURQD1XY6qwNigAKYjDwnJtyq81HTc9PsideAD7xGM96U",
  "key9": "2SgiczJHyaRbcyZDKkEjNDvhWstJ5ZtUnwiTa4pu4pHnSfUEVjV3C2eGni9ARY5FFfJQHHJ8CgQ2SRoi2JpkicJj",
  "key10": "2G14ivUGHk3S1EeE4YyYEHgAHcGgMmTNQkHoKuirhRe8GxuifnABQ9GgxXBuGaTyyj1VrSJdw56J66LikahRG7if",
  "key11": "56H9eR7m9ke9fVX7nKCqqVUKULZ1js7dewTpQyc19Ea8HtJNdMjH5msFp1jYQL4zkGr8X3rFcJDhu9hXx8B27Qwt",
  "key12": "4vyxLeCmtAutGgbCdxtANDZ7FMUDBjDsNyhgtBLZMe2Qg15ahBE5itrhjxxdCvmQWpvw1sjRm8GjepV1seC1kcW4",
  "key13": "2KJxE52dMgTtE6S3nVJw6xHFpyTYact6dLARdoc1doFfSwWazmzvYN8KjVNVZHU21NniDATr6yQLGfAiqkops7rr",
  "key14": "2SVPDm8R3qKpYqaNNzx7ASmQcozhhEpnckgbDkLEfkT4MGnhXjn6ggawhJzfBtXec3f8WKD3riGvMAsLx611pFu1",
  "key15": "crY83YT1YQvPToL21pEP7822NV8YpP8KR1DFvdd15MEZ3ymdmUDuMBZ2LNpPTgrr1fmdw6oBtXgeMa2aLp8nX7E",
  "key16": "qaKirfbRLJU7tkahX1t6Ei41dc7q4jhCyy2Kf7siP1aVBhGpn5S7DUPtcjE6TP4XLnDAamtDfAfYe54ECJY4gCH",
  "key17": "3ZyTQaKMyBRGAzHRnGBpfadas81zqAq8x8AYgcTeiL6Ut3U747Q2ZAfZHGqd1W3W5W1v3WnLWvtj1DAM2bdHd3sj",
  "key18": "2aBR1hG96nZYuU6gfjvH2yr4qzEhjsjJpw7MBvqGNL4gvj5hvNTejKeouiBBKk4EkUnyaj8v7PPHyB5XyBqZbrYm",
  "key19": "U6tmmT4qKv35KFtp4mTuZyAP5bpTbhF9DaaZNctDSm3i8y62CCeSAbWirw6my88aoQ3Th9AL392irLc7Pdsrutc",
  "key20": "2cesDTKYPE6oBok5wDqSkRfMjuDGQeiifBbef7KMRRoatJ6orvobAns3rNteVCTK5VJXo8yryGxXP3m9KA2bauji",
  "key21": "5rGoFLyNqAvdN1VJMxHE14feVqjzY9av316YJaHRK47V3AWrejJuKKJPfZSceYXRg3yecVmqPJdAxXTEyCvRjpqK",
  "key22": "5u16UBt9WVsGbYCd6yaEC3kJdkoMRmtmdKe3TH2yq7pNQb2isqKKmawW1uZkcY9XoXLHtuBpnJMva28fFEkCVKNT",
  "key23": "2ogYAso459TcHzkcxX6CgKVBtQnr8X53jsaje1udBLzSkYAxyLzmb6WNBztrVbfjsdwj1fwFgu42xZ3qzvuW1tL3",
  "key24": "5tiatmyL78nvpGtFDZUbWrzaNPBp8je4ARfMW2XZ2XC2LuC45GCJSQT4xU6M6Xik7TsP3v5SbyfRnzvtNnU7E3Pu",
  "key25": "5Yw3S32LZCkL74U9ADjtuZDLTYnfxRTF78PNey6b4zkZa6T3W12wSNddN8DiewhXCQoYCVeQPiVUaKs9artscqSY"
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
