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
    "2afcEsndxrYkAxstTjY8CfHrJZMpt7UQNLc7ujiX3tx7U1ocfpByiGZ5DsSBdv5o55WR2g9ej1xmHfPnWBBf6eqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EYo6LnrxKiP4TcU5FXvaMRww9bfVtZbPmMZD4qika6pzhvam6tGYn3u9LufUtRp3K3Y3TLGCbvsfSD8cbGX67wW",
  "key1": "5Pav3dLGz61Zb3HTw2aauG9YDxryzS9upvZmiiVpTMmfcKrS7crrP4FbSwRtNC8BfengaaVeLDRApgVq95qcPpuD",
  "key2": "67rRbd5JEp3MkhEwUAf3Vux62iNN5UcZ326yb6SnPqQeHDgMcBahR5hbuNXeQVhPPaYTqWa46fWYWD1cpT1Cr766",
  "key3": "ztxMGwoDsuXxA5geymNgSr6XpoECGMCnNdG7wpz5KXR4KdzpZDfktyCs5tjzWW4Yn9VYWwDcVfenwGKAbd4HQys",
  "key4": "2yXTdobUrt8mRWszijmoZ8bmu97wnhSg3NCyhbKgWDTDqGKsjoBcgAawbxM1ZNRzPDi83nAHojJi181KqSn1cJ6A",
  "key5": "5sMppumfjiUxPZTFBSTKsr69VAek2mVenMHfL2rWpmQ5Z9ERU5ssJvjaL6wUmmk9pnKWFwQwTJ5UrJMwbr4aotVs",
  "key6": "4HhhGduQP1hRQwBJZ3QumsY9YDQFvRHhCa1RsBrtiQyNutdtQ8jjcbUZf9MHrKhLR1D5ZYYqSogR4RjJHYJpC2gE",
  "key7": "sXYywzWhvtcJicz3R8nbN2SL3dg2bhBcwQvsGxPCcL3XAsecPYTV78TuMD9RycdmpHXS6wtE8iCc4rZtFPC715u",
  "key8": "58xPfR6JWQ3JG9nWk8EkzsmeXRCmHjPMbBWJyoZgtGrxfM11LyWG7D6ZrRh86JixPGy4E7ntKmnkJhZdVMSbdVFu",
  "key9": "4mEHemankkvUasmKFAursPFpKkKtKoVQHqMb1DFRqtA7rY6uSSZaCUtR6a7KvMTuRUbW94aYh1kwxX7cuZ3WAPoZ",
  "key10": "fRWv1JQxJ6dqRpuBb1PgvMK9GNoVnGGTZXWcx5sC3DrsYF9MzWqc7J85N54KKVXRKq2CPwhXLzXdWP5bXLrLEdz",
  "key11": "MUqAQZcHdpCJjpBxBd4TMDLKA4LyJaSWsT9jaU78HMWHd31AsLPthxVj3qwLeZvce3hSE9qga3UaLPQWehbohXw",
  "key12": "5C8LtNriUWaBiaHkfMFo1xpGpCLrvYdJxPoXf9VHLnHEjx7usDpoiBbJhjzU32FAX6XyrSk71ytfBSh4eayyaiSe",
  "key13": "4MhUr8cEsyRSjYb8W3hJhWLf8p7rGgRc8QpCFkPGS1MHLhz8A6EyTZbPKEkYstfDaCins9isGuCBrW2Xtvq1BgjB",
  "key14": "26DEsxagEvN3cY11wBvNHYVpQXurTY2YGnvLQ5nsXK6izF3oZ8L5U2FtVFZt3DRbA4i68QW6ryAbJcPMvvSdmony",
  "key15": "r9Hibh97TBryWX7PS3CAeaCLrN9GaGs3dBq6QhoxqXmaVdmhPr31CvxDcDuvty3s8ZhUhMP5roGPwoJEQhjyCej",
  "key16": "2Uzx4DPVJxXzSxQEF37754gaFTS3w6YeHPdrBkWqekLgjt9uAPUCBxatLeE86ah3UFVBdb4N3yrzTv3vznqT6dPu",
  "key17": "3HhNdKW6q6om8gsL3hfrtrEMGWv4RTnzePBwyQ4Aw4UnuSUVhAMe1ivuAYnF1UqA3NsuMENsGsmEtQqpW7Scyyyr",
  "key18": "3pNcuqRsN4DRQtC1j6T1dVhYmXGVs844KtR6tK9NyZAsrMJLvUR5DNmmf7V5M5CaBSpyvfrS2Njs12N7VWTDgX1Y",
  "key19": "2KSFs6EZfiUg7CrkKzTdsVafXwsQdfo7m6JucuASVD2DngctW959BGVftSuSEHPGAiey5HyWXv4du7RUpoVsqfYQ",
  "key20": "5ZBFHfctRqyq2sGjeyWTAMw4v3cAhBpkrEA4vL4Ft3VNLHJy1y7v2RtV3Luv1quFm9nfvG4RsSrpGTxFkFXNzqk4",
  "key21": "43kw915M73EHjtB35ZQF5Z7DYHS9CkRj3KGqPp7ycUhhZ73QWaGymVjyAXCi4yrQX1i2t88LjRc8bQBSMDpcHT2Y",
  "key22": "4MayrHoLQGJhfNsJp8g7UbUDtGeZMdL92DSKQ7N6nySdQbZxAxotvrdAkbGBxZ5cPrsQSXawEWyBgsLkyGwPRtER",
  "key23": "4CdpwKikXqbTdMgchdE1yKeoYx7VJEEJunBYxXE76VXurZrw5EJkw792Y8utAUDqAHZmyTgqDxhsSJEsh7jh2aL2",
  "key24": "5uv8iwwvdbyT1CmwZckQdNLzmWsj9gaZt3sn6ad8uGhQajLrq6xxLaf5swcQScnJ9BtYXBGhTZaRvFMGNPDZkRZP"
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
