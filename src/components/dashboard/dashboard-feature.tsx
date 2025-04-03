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
    "2Rs8Fuv67TcWXNR7sJDuQ7UXWG3EhyW52qdpi9UHPEqUgKT16eMc68m3fJe6oABbqoj63Hzn1zgDwKyUiyjGuLTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pq8vqHDNfPikhaPV9dUfpLCawfaixXY7Emx1iDFkcPcPczGUkfLS1LHnvXcBzXfwULG2sWetFpYRrFccWPFgCbj",
  "key1": "5jSwEGCky9Ga5gyxqPGjRzwLQMvykL5vyKKj1DRmVGtoJV4t4PiBxDgD5CGSVfEKUyZxxt6vjJub7TNczQg5ZpBg",
  "key2": "5DpPcV3yB5MnZgRTrGxRfHvmC7w7smKTzcU3Prs4EQ7jSML8JpYYZqexzxsQjjm2Z6u7Rkt5ztU8oeHh4nKSWQsE",
  "key3": "4CrL5HwiphnSMZFzhXHkZQDxt6kd7yRBBENLH9o9A5o2cLCLH9NHw7uuZLTHJyiye3ba8hUgCfD2zoHrtsAH7tRk",
  "key4": "cY5GRhr53GGnUmxRo5bfw2EiZrk3DoPaaFErc4DcikyXr4T1mw4YLT6LLeiZ7A9mi92rmvegTUoFTt1rn3ws3yJ",
  "key5": "4FT1JiTwbFVoTgNSsLtdFsHqBABYSpP619xFidkSx6Qan4wcZpjZbPEC27qbtxbERKGpbxcK8ZRLs18CNAvuPoRM",
  "key6": "3cfCGcsNdjbzwFXLTLmB9zTYDGxZS8KiMMQb62rrvWXPbemgoXdUJyYHppWXKUUwJg85xF8d5dkgCcADcMs25e9X",
  "key7": "4a8wy29Hj8JinJSXUtMNZqgTqe2XUUZxAtTWn7wVu7PuRT1Q4urTfwdfk1JAt5aSnp7pDdKcjxcLjWPdkkMPsPCK",
  "key8": "1qNViyrBcgBbsoXp7f6mn5ho4s19ohLtcP86Xua8nnr89ernzMxDGSXi8ry25q3nCkJwXTQQHQymY9hoPdLFBQz",
  "key9": "4WFzhNukbEmvS3DK4mUrE8UvjJKMnmHWjpU4n47aL6WkFtkqp45A9KZs6LQjh2yeqwTmUJkKVKHqeA6BU4DxADCx",
  "key10": "5NBXXGbRFJ2DHTmYDJUJB6HRiNcaAeYsccyjNtk6dGY9cT5UZjzVJvaTTr3tKzg29ogPKXQ3vWcDiEKK5T7rnJbq",
  "key11": "21yw2Ru5BoSLJE1NSj8saFKGLvfkPU3d7ny6JcLLYGxUcQhoLzjGSXXXgoxJa14NaYqPXR5uwm1Q2HaVyTVTeeC2",
  "key12": "3wV9ZG5qNytg7tDXFZXgY1uN2VBvR8zpivwXRsH3KFunSC3dtJJndjLfw358Xg9G16FFn34Gk43BVym7ntna9sgh",
  "key13": "3UGBJQS8hztPfDMndcbyeit5wMFUJVMAdVv3YdarYhagzXMgzgesgndNdZP4WLaDQy5kCscwZvZXMS8cwSVfyjem",
  "key14": "5trNRyCYYku9cRBqMFfcsEvAF3dqZYLBHdiujqxE2qNmewqvAxDmf6VJ83dF5qyFRxcUCdbzo1zFXf11SxhY39Dx",
  "key15": "n9zUY24eJyr5ggNGvfVLUQ4HJRyLsM6tTDSm4HrSAai19vWtP9EvWTinCmQZ4PqJDyiX28tcdGAuq6deAwzGeNZ",
  "key16": "3qwD3tst6E7ZyMfheoHV1kDTe1JP2h2crbP8h3GWS6DH7XKXXrLt6QGrLRXzH572rg766mnM8FdAeGhb3RHib6nY",
  "key17": "2gsm3YMwC1ASML84mSu5zh9Sb9cuto5tjNEcMm86Uxgppa5oE6un8csgrF99MZXfQguqm2tPTLsKMq3yU4QcxCrv",
  "key18": "3Fg1ptvtZNVTwry2XdJnXNNLEYe9puXCsFGuUYYzmwexgu6o6nZozWJJP5vaXF9HFVUNEwkAHQGf25zhq2vgFHU6",
  "key19": "52cPHzawXcSJQ5dFfWr9hRkZMKbCqyJzcLvnLQe9exJ5eUSuKqwYtGmBxd3nwvztJpw1eYbDmCpY1PKEk7ymLniy",
  "key20": "98LpX1xVmdH2VfPB1Vdc1U7trzuiwUHQUnTXV9QphiEsPuaeDMixbYCPkNJV4SofXSh6RRpsAjUfboXA4G3cPPo",
  "key21": "2uUmreMnZSzMz1A71WrfGEvj6oZm7BzqhVDFJtXS5amp5Mg4s19WWQ6zeufXBadQ8JBboYJakoTName6qopHXmZR",
  "key22": "2CWtpDDVEBv6URECse7kxKfhJg2UaFNwFZs7CRnmbnuoNMwHojqBjL8nXbqbfrtFZTecpJT2NHEWviFU7ag9WDfr",
  "key23": "5u5Hjsi6xQLpNJJ9FMKYu26aeCEBdGgLDraawiT57SSH8AfcvLokAgvqMWiRUmD9H35jdAS7JmRhuhC8hrcU35AS",
  "key24": "2xqTMuuYyzSe8Qb5cohY1Q5KNTwknDFnih5SG3JiEdaW5dYd3XEAN1JAG3tXpXeotFyHxeoSxLnyKe6sSZyys2tp",
  "key25": "4VdS6P4aYSERPD97h1MZ8ELB8M9TtttG1vQE9CN6Ew3aKKuwKCneo5dCMFrNgqzDb43PHCVpdwxBE2YHiVvbJFU2",
  "key26": "42NGKn9evbUi9E1drzE1UqZgpGb2G9oA3GRJMqKg3vw9SVmsN3PJKMKcwZaxqqiwCxoEU6bcHyUL7UwEpTtsy7un",
  "key27": "64dMFJAdXXDM7ufdqf22PQNVFiYL6LvBwW6ByP26vmBU8ctZJkwHdkP8yfeFerWJGVv6Z6yyHXmQ5Kqqo8FVMBoP",
  "key28": "2FPje9zyWbzQSPt5ySYxbT4zfo4G4ib7D3PimemJocg2oukXG27mCkgh91qNg67pQotkFjtoVZ7CzTp7zaEvYksj",
  "key29": "5jFufhvsnhx5L6mYXm9ceYduwkVGLZZvwfhjvBEyWdE6u1YedJaAAomnGXpjkFhQYEwfDwXhMcWp7EDiHMuonNCA",
  "key30": "Tz3xmtH1daabuiWxXBBVaKQ9MT3EPn4mXnBzuU1NpYkjJZe1tTfYWRpNME5utfmufwMNBxdMiruchaFroceWSGP",
  "key31": "4GbKhbkskbscZN7U3187BT3mdfkssnb4yYpjhXJjBRXYdWZy7h11iaHrH3ccfAuuy2mZ2uaDMhv7HELyF5SE6ivE",
  "key32": "2ahitbtydJeb8A1dYC17Rv72wtK6jUBoteScD8EWq969ixU5WtC68NSxqb6bNEQhtHVSny7fUc5Ljkc3DY4Wjc43"
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
