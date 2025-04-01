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
    "4PV83wSnctCxKc3KASZrt3N1SwAAmUZtTiLVuWsugpj3sTPjPz9niRrsqtxtCct6o4BJjK5yPN1tZuDoYpf3weP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ce18Mx5e4A5aMeJXweQac71S1eDV4mEqkcXfKSfKXZ6awjazpTbNDWCZwxrGgrmu3Sp9WwCGc5akbdjjncb8HDm",
  "key1": "3eT7mXuC7FJhYsN7Mu2hRiYRWupK1jQNemrefdzdnrpt56esHbiPjC7LSPMogzs1gfAQ8ARCj9GXzipJzb3hbwzQ",
  "key2": "2rGcomZ5GSu2CRmUCcz8tYux6BXXRRWQC9hBSjuSaaot377LCXD8VPsTpb6XaHAWnFTECbchW51YtacKzcq85EAD",
  "key3": "DrgyhqKYXxnVPeK94tjaqNQBAQarQHohVcMyS2aUybi4dEQQkr8T97Ry8ms7eMPdcrzwB237j3cmAVbQYEFNPaU",
  "key4": "i78xeQcqLPTuPCzZkRK4RZij1hKybHQUaDShGnnTAqHK87gzxPqdNNvigNokg9UGXH5USZ4WAdFkfhzj4WCMUSs",
  "key5": "5XNxG5RgktTf6NeGPcQLjXGvcdXsnHCTv73C9Z1yVRa46j9FUFq6Dbc8T7zftsbLSkjo6azZJGaYPaP3NFb8qfFJ",
  "key6": "2wmA12AG5DNZG3AGiQj6geLLSzZ7Lx8tu5bYaevcVepBHKn1jfjRovSU8SEGAEGW1qqC4ooHKGHHEsfMgJpz7wf8",
  "key7": "3qxBj3eAiGRYJ6r8FP7VktP5mfcRP4EmoZT64B14ttKs8DXV2KNZDkg3uQb7NNFqQyukWsLffhN6KhhpBmxB7UM3",
  "key8": "4Ps5sPo6mHQmLKGeC9Zyvcnz2fCSW5MYpm3FFqG55sEpRDu2UYDAJcqFk4SCCxC1pav4qyiQ5t5Ti3HpxKhRMu4u",
  "key9": "4oo6dS19ae93JhyuojdETd7iXjszWYHmdDVcCR6ZMaxY2vSNHUabRw8CXAhprdmT3gC95j5eNQzGR9Nt4h64juo4",
  "key10": "4Kc2T3qD2ZcLngt5tEF2nJnsaXqQRAkJzVi5qcGpdudU9N4VDSDja6cP79AB56ZD6EJxucfpBZ4xepPJ635ybKo3",
  "key11": "mkGCJnQS13yUjaX1DMZf5LBHkbWzGEMG2Tcf3wjVtVxNcqnYT58QU1Wzps3dgK3u4jBmJvEdQXzr3kTX63wzcRR",
  "key12": "3GEmNsM584FL2kyQWLkfLoZKWqd7NDuim4t3AVUfDnKRcCYy8GbCS7HW4cn8RhEy37wtxTxY8gtVz9g8TUNPbw5G",
  "key13": "4avkcYwAr9i7pWSNrSmaC3mh1AFE1hAMX6swv5ebesb1BDJQSx1YLpxVnWYJhLPNu1dGmYkVHoauCrmSfskp8rkX",
  "key14": "f5GfNt6a37unzyhCBR8mRP219weWeSSofY68SbHfDvxoJEAQZbGzGDKjXQoFP19DBVf9Qiv1dhyuq5TDSLMxQeB",
  "key15": "3YqNJZh1sLoJa8v2hpxhVSQ7DkW4s8F4xuCLK1kq3yANRqmeksRSyWSWN35Lk6SF14eaSxc2EZo2aZEZzT48N3cr",
  "key16": "tfXcj4yHGZYzyCm75WUQ7CZDtuftLCCtBKCCVTYVmpbQrB8zS2c3dYnn7pdwr6KkN7g5vQAYB6mfL8qoQL6Aj9i",
  "key17": "41fUPxTCz6LYdaSav3z7vVTPrxzRN7GRtezM7zwiNoFQr79djQntZcHB1kL6NTepcd2L5SgPuJPHfT8R8Zxov3hY",
  "key18": "2rr2Xd91a2wF9qrDj2fwdcXVnSvBAEU6WYGTQ1VY8rgLhmEkcgBHpryfPY8fG2q9qqYxA9ko4wnoHncKKBgK1X1B",
  "key19": "5sm1Ayzq4csMNfPVtn9r7qzNv1T8oEx6xvApNRR8sofd42aBXGSfWmxyy3wopfseroCySFRzm6NkwHLNWx5YxyP3",
  "key20": "fR2kgU36fLUGqikvKkZQNAeQPU4XSXbcuQKSGCQ25QScAq6xBSMwfVMmbJondXg429vpsUEcSYTke9u95mGqU12",
  "key21": "56gnfsnH12vH9kf9t1J4LAH347cA7neqRBKhGsyGGzo7Bo1p6ztZNxNtHy3V5S7FKyquyp62LKvDP4wN8eqURGnZ",
  "key22": "4pbnMya9i56DixegLFcMLpo22WqwR6vkwSgXkwtXvPumPwCU8AJ3Nh92xtYDjsh5Umh9tPynx2cxBmcDMuZRXUZ4",
  "key23": "28q7uhPfpQRwNVZAfDspFvQ6frtjarGqxPKgBB2jHxGdeYFJRRrGxMcH8UTSRTz5yG3mWDMWVievXW1bYVMSm99y",
  "key24": "ZBTrKdCfufansHHeXfdF4cFGTfzXdZpLnuMTzXVAURwicuJYHk6DJT7RuqupjxoQBN1HBqvpUZzGyanGjLJ2bDZ",
  "key25": "L6K4uVE2gPhMGZKM2XCywnRW5r4ZiizMdTeKNVedYtAKWmEDKymyWHczjqUvnnMxsEGAaCrgijKdGmmh8oKnmFc",
  "key26": "cfbDAcBHeMSBkPmcCPx6Gc3ABp4qx4oZssUkfKNMvXrRuwt4AgTbSoPyiJXhHt8kQJ8d4Cmy9BdM9AN7H9PCjEF",
  "key27": "3LDE5yWKe3MnCqinGRq5cD1AL6JaioM6MuYWK92Ew6hGnLYdPfjGg25HSgmmgrLVvnT1yafnQQ8LTbA8DmpTuGEX",
  "key28": "3955mi4DW7rxiMpGnDhajKsqRayMetzC7AK4EpSRk6LWEFv4KSyeJEHwRnoNeAsCqydove8B1vNSxi1BXFytXyno",
  "key29": "3U3mBS88ho8AiEb2V1S7B95eDQbxccg77WpsostWxrHb5E9pdc2mUbz26GEgY4PXqeqMZiyUdNTWHvhDdU9PKkio",
  "key30": "7AkRpiuLLAwxPVJFGePiWTKXdvUbFmnexWCWyF2GjTttBn1z5v89dPconfRfgCZH5oHsVpZ3yMWHGAZztLXcgFy"
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
