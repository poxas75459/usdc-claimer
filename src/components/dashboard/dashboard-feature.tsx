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
    "3XLasafg7hEuAwuBTFp1oZtqZh2p9yJf18qm3YZAGNtvvFtshigtsaPkJSo4zc7jpJHzQeBFkPZLmDXJd1TxPGGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b146bcK5HszhwHvorb15qMui8yP8uZtGfpwWkxRhNReUCjPiDYFnFAwZnL6N8p6p4G6LKvz8LcJR7hRpY8tbMw4",
  "key1": "4Ew3e15G1YLrF1NVmxqJvotLYWBjGfT9xwXckYVaa6AM5p9ApqnhxsQq59wLXaXupqybfkC3JyKuC1BNbnSA1z1e",
  "key2": "2gRkb5d6draHNNdixvD2QTbnTscGV9er5iboGZe7bGnY5fDFVg2PFeh6FjW1H14BB8doyZ6cUM7vdTErApGyZ8BK",
  "key3": "SzD4RBV9QFyF1THRad8JJiBppjkrUfEMbYotXuN7geGKZDgGsvRBRHnc53rycPEFeDCW33iDx6ySNuRENSWcCvT",
  "key4": "645r6aUaXDAyNfEX1JAXXDqY2j3rzFwfdfoKSpmcd6TKmrGCTx6Bkqsj9k4Ccu56NMBBg1D3TXycNEuDmG7YhNMT",
  "key5": "4LYUCXd4jKUkPH1Cn17M7mkpB6eez3i8tbL7d2puAfE3LxjBw4DnpvsLXfBuTyRckGnkAnVzjA72eKcE44oakj6p",
  "key6": "2YDJZrsSp21oLN9Dwoc3xXdfnKviNaFNbscU2mD9u5gfowHXXAxriSKcsCHSTxZmUxp1v7y5BX9PGZgGYWNT8Lw4",
  "key7": "3DAqNqNkaV2J9VfN8CPLBozNgAMwwun7itWX8zfimpDRujb1jgxQ7M7kEaWoB3yzsAE4BWvX5DhuzeENZohfgC4T",
  "key8": "4ttnoQXodUVSm9FYGX3UCrq9PWkXzbhar34xRyokXxPME5ThsCzUrXd4ckh6zwFJ4Bt7cPZve3N3cvWwZH3axUjn",
  "key9": "37q7EYebMg2ZPbSULcfn47x4sERxZY3Qs9si34CJWzhpeYwMsxe19bywiTUdNYUrCo8hdY1mKUUWJ7TNr6vNNbfe",
  "key10": "5ibfn4jBUzVgeLBJYn3bXnTgAvngKXgd9dqLyn2fSZ5fTSGrYKMzkFVWgCfaj3efTN51uoKVastJjUYj1ndLom8b",
  "key11": "3mticz4aTkwf5SmF6a7mBxRtYjUynL7cfFEs9yPXrJzJSM7JFDLNtonRsW4SY6aXkNubttTaxeU2e1ACk6VvTEm",
  "key12": "5ryhZ3RhkoFX4AZdoevhn1bMK95gfohVHdvKHKmMj3aE42GAFqKkRSPmS4rnFpyh5J2jF8u2NXzEJJuGYNCquxWu",
  "key13": "iZDSoib7LmveW1Lpemi7ykWcVMzHthk3ZxhhLk5F8w9bhNkGhjUQBqzkBQgPp58u8tCj83nYCXntPuxRDvZrY6D",
  "key14": "TJTZ97boyyGVcYrNfAGzWwX5ipbAKau3pFCQhHki541VGGBpWvVG8c6kcGd7k7RTnBgpGRBve22NsuZYqFjL5zc",
  "key15": "2gMF9c66uUuuNonToxHBYJTk3r61fQCMy9HAjXYS1nscjiRfiPQKyetQabrAv7Ut6j3SVQotSwb3pXssSwDuHjZX",
  "key16": "3ftHwkpvJhj8wyR19T4Cr2mdfxLoUTZqqAVdoaHnqmPVrCDBLR6MJymccPS1XTS1tLWC6JrtWVQWhUVmTJoAwsRN",
  "key17": "5TgQHMhyVD4Dv3DtXMM9YUYu3hfvntGnpUdbnNtDeZPbrZ6YqJ8TVhATGnZou6TwaEpnvVLi9PmoQyL1bKJsL6Wn",
  "key18": "2dTRzTrmiRWAC7VDtccjFzcosMztcW41azHcq3jx9GGae44AQfdeADdw4dnmXhghZDWLtzkn99oitSDyXzq25s3B",
  "key19": "25JPmpr7GYdqKjJToLb9ncSix8Uf7v3BT1GaMdERbBgWpi9XskYhRa3BqUk7SDTpmthR3CJkmEbg2M6VLqyLzZiE",
  "key20": "5nEAGyngJqdmjMmK735DpGySHKW5EjNnFCpEJAMfX6Hk7npm5aMAFR4aVXuwTghMuEGRgHdCx8Tj9ovrNoWrYk6q",
  "key21": "3dqjiXYu2FfjQvLDFMb86AGJWBxfEeqKd6kEF2Fjj4M6VUHLVo6DTHqRyFQTA8U9X5tKeyQnPrajzTVwPpzDxJCw",
  "key22": "3ybbY97NJfooMyx24PJvzJpvakYss9qv2jsaCqFcJhruVmcgaqZkp7BjnXHUWD9c6p2q7Dhs3cWN4g9vghHyFuuy",
  "key23": "3WCzDgportrUFMzZdhvyQuFxZMHGNcho67q5fCnfRxVgEVMY15h6waPURk6r3c7H7rdesebugMBzZrZ8cgmWjUao",
  "key24": "5jczGbrLXcQbamz2riMW5d8HYqvewEt2M2RdfdN59Rwgb3nmfHGJK5Wv59r7DKeA5HhAdg6chwLRzQSpxynNseZ4",
  "key25": "3aXo1JSF3qF2j74EvpzexisngnBYPfVRUbX8Yo35hhBZj5TwFcNE4hyJMXFWH1kNbGhSAAjDMXaXyF6WVZEzbHHY",
  "key26": "2Bp1x76Saibzpnyb89L24zMchihScJsJrjwUEMua2WN2sG3vhUabsEu8Wv6ofrRxrgkboYZgYwgjWhRmzyCFsqQk",
  "key27": "3Dmnc2cBeZPwWjL34MFjf6YDUt1QMsMPuzoyhRGYJaCSJdyPDHsVmz6v4xb9CMr4uiVPDafuRJuq31uu62rq9mZ7",
  "key28": "2ZGLrbrZkyLMZXjhU2x5xU3zBBGdLdoEaKTFFgA9BuBhC6FTBwVoyDc4sWFQogGfnUnaPWfaWEfjhWn1gmgqkfuj"
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
