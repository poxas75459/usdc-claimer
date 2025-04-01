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
    "Foo292dMt3nSZ3J7BqGibG6bgRxEp5Gf4aeQHZzhVunXbztDef24Ays2PNPqBsM21duHe8WVsy5ZvrvgLkhgXUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xJRQQrM3JgBeMCBYPV4Dj7MYdWVE7Rvo7A8hHxBqKXM382ph34idkFmvUj1G7mqEacPh8ZxJU1zXCbxtHepe9ts",
  "key1": "2pfnhSHVJukmPrce6mS2hNGMLop7ftrF6oRwUmNLya94D61Xo31Fgep5pz3TrM1DrjtXDZE9vB4udigti3CiWoid",
  "key2": "5Rhmtp7nQuJG33DzsLAMvLVJuhs6ocMq4exMnZvzMgyJNtNkAYq5Zw4ZmcZcPNZ3jg4Y6ZDScdvor2nMCitXe7et",
  "key3": "366c3thFaygeNt2rRqRCm1AGWBhAiLDk3GrNBRg5yGxZE9rngqc4nXbFwh2ioX3Hq1FEt2Z1DyRMj9UrB2qUxsxy",
  "key4": "2gAEJZpqRmFAfgkoFjmo5r6iCfFybsWm3FgT9siWZNDnWGpsCRUWzAhsoq71tHu94JBUjyZAAy43iMDnscTHyx5h",
  "key5": "3a2MGgcUDnP6bZRVDrmXJ9ocMGxkUqLWanLu1pqwW1zU8giwMtmMceb36DBJ4YWuSMfSog2aYLkDLg3Nts9oyUx5",
  "key6": "2FvcU9xpprcmEc1evLKKJsCBh77BZUS365fQwZG7KjSgdYJpUytHC5swYPf31dn8Xs2NyUHqxg8QJnhK5szC8MdT",
  "key7": "4AXX9j4CGzy6RrKx6UiB56uQWKYYpxwC7b2GR13p81scUbfR9h5fUmnetPsR2XLJZaaNjCyLjbSr5evNSg4ERmkG",
  "key8": "5iwJuevNikkAK1TNJDyAc9KojmT1gJ7S3cD9bRyrhnAA1LbbXyj4fCD77HnUG98sEC2DdHS46opBMyoHrD2dxPUE",
  "key9": "2tgAqhd9Kr1HdUvSH6vfrbuqWQAoGMGdWViJh9Xp9TjYPACjoDvvbfpmaM9Haw5dZvJkQmkhcvJyrQxWXxPA3M3x",
  "key10": "5WM1iQywBw9pxTfTr8KwCcja3Ya6HA9mneZSFsajF1qzPBatqdc2ewMLUsLN7Bjz3XTTF5R7P4AEL4c7SsA7kXhE",
  "key11": "5BaUVJKz2gVGShKmwuoiC453HbrcS16N58SZCiUSduTnYYd533knavvBoKzLoePS9Pu6vs8nzxonZECXWgNMZMjt",
  "key12": "5r56vkucuzhzybsuwWj1Zh3Bb1paBnkxMWoHanDoKLeBtZnWZpQt22cE7iLZtkEAc5J4njosSfKr5ghzc9UntTaT",
  "key13": "3DLMoe1bCvyauEaE9pJ1d8cfr3oxuZoLkjbqQnKCkprjh7Nqb14qkEcdN1p4WygndKRx2Y2qifdTGMYnjw95Ab4c",
  "key14": "3rHGvytWDoXCunXrDFHNS61Fp9Dq3bxv7iXxeZeYRjGADbASwZJCPr3QK5HwS8YKc4GMhQNPMfiXGXRS5vTJmPTb",
  "key15": "394ZC3P8ssetdBgs7aFqa4kdJ4R6Xu8t11uN4GdrwZPX2aCmcXDnGqnDeNDQXaoXmt3Bez7sLRFAW6RTtsb6rLCM",
  "key16": "39y7U7BpeWp6r4uVQPBC4H49dh6ELhUwEmGKUQsW9PnL15fmtkYLH7Zss3bopQLTUfcaFZn3Kq4sGA6XRLeZ1Z8T",
  "key17": "5NzcQiweoCnsKSQgjjhGdBsp1TpusumzsE8tDKnBCsDa67XjL7oy2e7BDotHt6TdNQAa89jtFqFh2ApMi8imTajM",
  "key18": "n78AB8gBi3AD8AzFmmRRkDe5LwsYyc6aEXe7mXe4eY6WxX6DqDqPiEUtUqMGCMKnpd1wFqL8eBQfyKZncMUxT7K",
  "key19": "22H73vUoL5U1tau3bq6SV61W2TDcSuH3NAX7H9x5JCkRXMwcqDed1kGLT2BSyvELC2TCL4RkgrVowZDGAVCUBbib",
  "key20": "2N1YqJH8HWPb7UejtR4iLiL5zFZcrWyszJqXUe4uhDXfY92YaequQ7TkXWHJNRmKYTQCKeZ3aSZU59qdqGSJetKw",
  "key21": "46EoD7Cux5cG7czZUrYS2FeRMnLtkATJrHKp9UtkuTdcFvpGx6CpGpcBNwdLZs6g4SB6jBya1qrhEhidz1veFmp6",
  "key22": "H3aGJbCx6WvtwriAztfAGHrcBn4THgJ5c6X6cEd4V49zcJq7H6nTJASs6zspC55WaDSz8jksQHV86qPVsDkTNcJ",
  "key23": "67JFd2k72SEGgx2Wb7Y3CmhHmftLRgCb9FyyhGGJxWFNSTeZHvE3PxrjM9NqTGJtgC7FQQCSfhWHNy5RwaGEgeMA",
  "key24": "evkyoFoU3DkSHTD82xq5T2NzPuwJQ17eUwUbnTU3AAgd5AgHkHyLzhh9s4oK61Q299uGjwVt9J5yDKsVN4pqAUq",
  "key25": "5tj38XXhZiAgpMou2gHqps6MqRgxHRM1mb4uWfbburYbqEXa9krjEdeZFtUdzX3ZRGjWfaYRaXWYuSqGrP86hDmp",
  "key26": "BBE6iJJ4JoSNzxM1BF6UZYrrF6ViwCEGQ5urXKZDCbvCN4Ys15GodKwgCvJKEL6u2mK5or5oAWiaphVBnhkNH8z",
  "key27": "21mRym1NbmnGuo9Scttimr7WJ6ihLuS7F9dWSxuUVr8n3KjT1twwu9hySo9BocXE5BmA657L6Qw6hZpXWkuP9GNo",
  "key28": "YUz4hKFdSiXmknoH8d13BGivWpY8eQpttCCrYiD5FBE81TgHMCM6m9NVpE165z1pbnbGGtmZfj858fGvnBqK1Tj"
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
