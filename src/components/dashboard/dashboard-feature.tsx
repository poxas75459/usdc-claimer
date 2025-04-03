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
    "wuJ1bECTRgwZw4S8Zm95iVAQAC5EKZo2YoWfFyroKHBaYU7JhSJbcEmAMBooTCZDzcJziWzVaSiAvk3eRNuGiCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pqRQbUSUiz5Rw4qV2DKEaSq6HJNFKUYtPr68Zg7RzFGmtMmqXK5oZRLKjdzkh5sAJYfv9M4hJSHtbkk9w2GLF8A",
  "key1": "54pWgyFsgLiX9c5TvmEYhrhGd9G74KP52oYmDCER7QZpJmkVGWbqunbgPh6f2hsJEc1GdL5NN1k89Z4NzSygB8hP",
  "key2": "5P6Mz63twZXLjtvcGPbBbgbQkTUykpVGVfw86iN98BWhtDAUFFtmnEgc4ahXsuGZ2yaHNHg4vHw2VmbHTFxMu2mL",
  "key3": "3Pke24fdgGjqpEVaLnxce2dMrjE29TGWUbXY1kSv2h6bJVpCaCxPPuqTVSWFQxe5W7cLUwhPXuNtywanVzxuTFYJ",
  "key4": "21e5MgJ5H9LqRRkg8YuYGKfNAK3k6JeZrcVYvyCsU3aTBkvUGmADdu7KKfGemF5Q5maw8hjvqTgk8Jhpq2zJH3vt",
  "key5": "4YcuG8iDUgN9TDRy2YCL1j3rXamjJ5WypYZ2kM824BUFHgG3wZEpjo91hxA9VuHQXDMnvktSUmez9ASesfRfy86u",
  "key6": "2WTnEy7bRfmrDr9b31ZqjxJxzsdrZAc6sH8rnLPPPJVJ36WuS1tJJ7xKcQt43v1twndhqTG9ffAScdN9wxLz3ZCr",
  "key7": "36TyABp45tZ93VLyQu1im9GSyzD3ueCJ2M7CTiQbrbeUuZMShBsQnChUfBgHhjTdByUtiKNbZ4NR1DNHfckkZrJ1",
  "key8": "PQNGtTnUfnW3A8zapF3yHnYhp2X1SAREaR5BvRzCpT1XDHfNSpJ6nLoNLnBvDytLQj6gy4kXtNFQmtn64duYyej",
  "key9": "44YkEW3JbkmwPm8846A9Cu7y8SZCFpUkw2RPFQp26FSTYxMweiUxKbTDSx5oZBkfKvYECGob6kt1GjMKLKwe3ce8",
  "key10": "29vpZRWKeCAeJykg4NCK841eyCgbhGm4jap5kRo4h1EXd6mNeWEb6HbxcFRgAzKiZdMp7sVYSZwu9ubMWK7ZWj7r",
  "key11": "5ayQ1wYPPXaC199FJcQKvH3FUW3LBgvoFCY3e5xDGTb7tcMCoYqDxSdCXKcwGfR1bMAm7M3SM7ZtQun3QXMDLGsC",
  "key12": "2z88xT446RFSwvcq4LYb2pzygFHBXgNqY8jbjsbtc2ZMvuuSJErL1NAU94vKMbLzxPwDxgCTABiLmtGYvk6ZkJo3",
  "key13": "2V49KFvpZWdjKtn2TQ2RJRTQ5eYyJLAhJqeKJv8s9CrqRaREvsvK1f6X7Ep53ptPhB1amnBUfS9awiVwrZoPyxZs",
  "key14": "4TPgzj6LxAGp9TNHexemKaLxWjfwEKc8pGErRh9zWNSz2ttMD2Ar8JjhPKRP7Wqyp8rxLFGGUt1DC2gaa4P6uRzb",
  "key15": "5Xs7Zd6A5nv3vVHuvWJRFGDXCuhDCsDRFReLPXGth6Cb3cSy2GARnYQ6fTipzojGGvyi91FLFL5fGFVdZ9nsgTT4",
  "key16": "3VDQCZ9vWU7U4wBoVc8ystCM7FwS3dnFf4X4RSnjubuvsp18wqzxHPu4HYE31NqsCjtkHqHpJXZwcuidm4PRYVUi",
  "key17": "5GJGQtcECRpx8pR2fv9ax1uHqofzUpffTfPR4WRevMqE47gYJG2x4NZfpiuwi8STZYJrpi3GHbuUtQ3sy925Qg99",
  "key18": "21uHdKmJJDmwU7EGcCFG4kuZNXcpq9Hh2FYsnCotAcMQzG6vXjnejHt99ixsH9Dt3aAB5AHrEpLP2JArqpeDzoen",
  "key19": "2MFxLDBiPgkVYwG5aV8hiUqze23ZQbw9u5rxkLWG1X323VikVGTu1yEVD8kLvU7xgQQyFMBwkzjoEhq5QCEZhHqU",
  "key20": "4wiW7E2LuBUyjXDZDKjrckCffKKZ3Vf7SkGnYB5dwMZK8H82gCStSkysBto4SZ3FdUjcgYYD1PwrWEUfj1twM63J",
  "key21": "5fgaT7YVLtuP5yNvpuvdvUNc2d61DVzrNqsvrDBryfJyH2Ce31YPVEvBrvYJo13qLv1B3ZgaeWiWxavCQJ3ErQFX",
  "key22": "3enryj4JTrLeGJvoN48Pq66jTrfxkVV3Te7jEY4ZczEAVowZowFaXz2uUFTBzwn1PHdkRNscuM1BR2DhfQ9UVLZb",
  "key23": "2svsPgY4Kw4wgQ7Gi4FPbMm48BWYKWnRVQRG1rP77q5pR9hwtvxm4qmu7XbSgxYByZaFAyCcbqkqcJsRZzv57e6f",
  "key24": "psNNvFFwX84GRVmBETL3Yc9rT8pAhLHNsp8oBVaC6Wrbp3DGcH1Z2dzjfWHT9vu7pbJg87sHT5zJuBLJs9pVkSF",
  "key25": "2g1vFtc6HMBRALqkt6F7XAomEEomRFThRKpzZHU9Z5zXYg4K7aXSFuiQF1SWcAT2RshWYXEUr9FW2wPfbV1nMNx5",
  "key26": "5j1EVm2KJfcXGvvCRNbRHoVG1q7Av5bvEpxsrbdV6T5kpyuXCQEahYX9HoAbGhrUo2pCLmeM8gApLPkEnwwTg1yU",
  "key27": "uzdy1b2yAyWm4Kgdz8cn2UqFYChDaKBaJuoXLG5K9kcEegHzBEksn6WsWifVpZ138L4GDrXR8nQ9Vay19pw7BDC",
  "key28": "4fNpfkGGdCjFxCtbz5B8RcoL4fDd7mmQs5JFSPiMJGUj5irZQf17isZn42FXQuxUZTm8mvZpjRvVhd2kfr5KqyuK",
  "key29": "CV3F7gXWtpDUqQQxYsoBHjY4zDAmZQNVMa6qA68v6QScy5YiXv7X6vMsmbwJRxgNKmByVuvF3RR264odZKNX4Cu"
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
