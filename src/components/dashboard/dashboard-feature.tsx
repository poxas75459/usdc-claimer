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
    "1C52SUNLoFYtkyngwHu4x9yhLthgQBYPoZaCCNfdNTBCNMbWsvH4NvsKHjxuKpajQ1TRtJSzLw3cFaM2WWUK1NK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54BudUBhSSGBZ1sJyndZzukfzuR1Hah8SkXm3TEbd2hT3Zm5bdfK6av22Z9B5638uB7KzQyzuAA5fJwi3F7BRGTp",
  "key1": "5c7TQNLNLZxgbvhNo7wNZMoYFJXU4J4UoAdyfRk8SjPbTNAXbSPPp1E3NASeJYUMizBHojaf5Vro2d511AxGvdTX",
  "key2": "45dAyY4sZpciU1FvgB1qymneGYvQYATHCM2dHVdoXSUjZpm3L1NXDTqbUkwUMVv3p8mswY6NDFkRZLhgk8rqrKnS",
  "key3": "3PGcYpr9jj7kxhRVDL3GzFEPuqkEsfKhUHWittQXedCKM57YM3FwNeYmhJtJbxss2XinjohuarFvYkcyh34V2Gu5",
  "key4": "4dXsBmTaKnXLfbqEGmZ53er9vFyrotMTYuPU4VLLVEYUKKGgmrXkBgJTquSwL65Y3Tzf1TMcS8JbBx6Fhs9wsjmH",
  "key5": "yoBg8RAFSHuNqSgZFvTwXTuz4TDfrCe2Keft9UCoaeyPQ322UHVgBsvR7FU1r8MGUAaNwsysUPc2cPKUTqofvvE",
  "key6": "3Zgq2Vx1ynoCDMhFb1dAxUqQFWvcPF1qADUeWzLBPY4YexfZoAUiK1e5Kewre3YK67HQ8RtqqHNr4dtfyLGzFXZE",
  "key7": "5Fz1GfeDizdT1r9fif6Nx6JtL8JU2S8uWE5tPwJM8KqtAyzy2HWjgFE9NQe2oso9eAvFrLXEwkw3uyr8fQEjM5qp",
  "key8": "2uuJSY4g5NBMkYxhqn2t4duZ8kMqz5P6APqeGyx8r9gctaYb12jVGmLZXYXiWWvGnPDHo6mmEqyZCjy4NeDZVS8Q",
  "key9": "LNvxjpZviyJ9f5E1BPiohxDsTxGmT7UBg2RXfUcKbWCKCyoXRQRUcqbRShbfGh37k6uXjFsvCzFa3WtC2QXHTFk",
  "key10": "43V13frbVy8GsxYBCQ5ENtnZaC7n2SQV8E1ec53GZrj8cr7qMwMhha2nrAQZnYACVBLu3XJpZVuYWFyS4UmNq2xa",
  "key11": "4oJYHNPtTFqTRvNVFC8tt8u1WSvbdWGvnLAgWN4JE4jM8RR3jYP1w9nH56M1mrPwiBUReqb84R8nbPLhcZhFZX3F",
  "key12": "5sPEgV4SCCe6dZMak6Dk5uZi7GLq1T3BdPqTyKmJBD8WsaHGv8FQukuT4bDJNp4mbfFK5aJUeKmp16fEHbsbGSeE",
  "key13": "5PaSaxAp2gkdvG2GMBjNAk37EEWiEomXCuqKrW3BANNXXpkWQo4tYnnjdccwfZ2yh1u1s3Yx2wwVZeFPsUd4wzGT",
  "key14": "1QK29rqC5Zgsv7APHuYiPpzRV7uTwtuGGTcP4qf2Y2WNLbxzJbbQ3UdtYP2t63QwnZ1VNDF56ZufH9AM39eBBmx",
  "key15": "5QgbJKqPo6LUimLHE4ThNSpVf7PRqwYt4L1BT8cquWpb8YicSKqopRKBa45sGuDZD5LRSSSxp32uXYwrETVMHvbZ",
  "key16": "5AT8W6mtSV7fkcCpLRrops8zDQ32G1iNcAwnhFGQooqFWsLVvC8UEVqzeV8GQqrtQsYXCFtfZf3dTh5W8Gdv6T9j",
  "key17": "NrSCfm9ZzZEDwAzu3xLkPvxBVPArntMGrELwbjnrGN6SLyFK3C5xDCwgXzVJYPBgWNNyV45nUCmfvsCnvndbWVW",
  "key18": "5SUCYAyQqtxp9amvoC2RZ9pMto97MzdiD5tkUYfu5Ugu5otHv6n9RLh716nfbF9kkAuECZF7gijTih3CfohjGYsa",
  "key19": "3WJ2Sb6YGSVxjK5mdVc4zeRuxHqp6URWzS2RdMy1D8mKf1z7NDBX5QNNzSVjye8iVy9BvUaNVwLCq8CJZoHyoyAb",
  "key20": "5f5VzQK2SGwzAgoheW7vveni7pNyYrEmJpT8N2wPnYsS94mBZn3QH5VoyE1vvofcieLWgWpL3moV1B6mEWbpH3Pn",
  "key21": "4JqipRwCB8EGtWbGCQGmQkttDb6WkxAor3zsPLiSLqSTFVwCihXum4Y64Gy4TCXpz29fsp4oFm3JUw3PLGiYtVrZ",
  "key22": "2thhQZR4a1FKwGJbhd5aWh1U489Ga1WvvArGFj4n8MzcSs6kNnJKT4QKrrX6ExNZaEKigUJnuLWKamxXHrsuxyZZ",
  "key23": "4HVEvi3seALzTKroy4N9LhHN2a3AwcyrWUYdpMNJLjyPuTsDf29bvQV2zDBusPGeNRsUeUxbiDTLiTDea6bLE1Tp",
  "key24": "3tGX7oLwfddbs8w2nFrgEmeXY4WmVBSRQwEioi5a6h9eCg9TYoABAUJZUCjyvUvWiWru43DzmBJ79WgfB4nxg5qH",
  "key25": "63Jwgq692dFgs4pBGYe6QNL3QsxZQZMunZb6cBSLK1jqaEhavSCEyNbcjU6DuQqojWcwYyf4Hbux9jKG7pXMto4p",
  "key26": "4EYFjNzEVjKs3AgdemqQeyvfTzrhkSsETfBmPiFCanc9MqLwDoFTvNJjsFrDnjBmjW8XiDsQGsRhwgDkxMZzDzTB",
  "key27": "3wRsa9ySznUVzLqTwM5pYnwpJBv4YwGAxvb5Q34HEF9C2bf6BRrJbxemzGBSCWgLk6RpLSvQBqTyvHB28wWaGkzU",
  "key28": "2s2PdtkZStnabN21DGuTV9JAbbui3NA9Gv9uohEc2rtwirAZmvfbU7F4bpd6JqDCvTDfjrnjTjYbL5i5GjS4sKSA",
  "key29": "zHye2hmnN3VUNZEkSmYrNEzD4i8iygyrdEgWQt1tLiVvdfjFvigZcLHGjHB7HjJGixkP9TgRQAcpGJsqqehdTyW",
  "key30": "64tr2rvBkUD9FB672vnhkXiVCFyQLjfxLpSEYBCc2k4bheqcbAzTQ8x9Ci3RhCpf8jfngNKkU61ANUfBjMTBfvpY",
  "key31": "63i5abj9Qx9dKiAuYxVGAGNREypmAtFKJPdptxXav6yPpUtrJWGazodW58wGud6ZvCbH8AuwrMmaJQzWk81Te3gx"
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
