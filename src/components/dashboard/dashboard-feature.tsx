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
    "5buzZoFzKTe7hMRP9er1F1YuKofCxvWWk5y3XQ3XguTprU1XcyxQQEntWYhpSeB5aDvrer5CY2AkHnFoTjnKrftA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yoyb5hFUkuF4SkuWyRcvhuN5PEMi3UcodPKa1ZbVDGLr3FLATZT8yLRYt4CqsKrEZuweEMeiZ6tiWsd5jAE2j4d",
  "key1": "3GaTU5bdNeRQvqF4d5sT4GfPZKGfYzBkXnkhBxysPPosaPG57MJRPvfYwy5Grbn4RFgcWaVHzPLKhm3cpoeJgXEa",
  "key2": "5bbeQU6fDkSgKvDRP7Ws9k7WzagWKk7YJ2JD5GDff4BnqEfd64UREKRZHmAkAF7kwYV2zpiD57KoiAw7iqGY4XHc",
  "key3": "4yPakWPCJ1ULgAQZ2gSX5z7JBvqb2Ca4XzZ5NEMjd6ewjKKfH4AgH6rNnyS6JQeZSM452fCD3BTTgDfZWrqiRgEp",
  "key4": "zj7tMHdJ3JsgcfqMDtJr2Gru71tUo34HDTxb11hYFyzYjbm81m6fch4St3GzoRzdb63ZGLVr3kkpC9PN6q3VLGJ",
  "key5": "46SNeR5GZFyWUvUzfy2e6DCGfNVoTXWsg9EHCNf41bhj47kFeswj3B5X4VdcEtSgm94Xjq4bfL8zyrZFfqM1M5WL",
  "key6": "4brxQm5a633MRCgD5uzgW5xc4RpRrTo6EXu7auDZrVSg7makd2cPuZnBp7aw17fNZfYxqcDaXtbxMNzAL7NcmJpA",
  "key7": "43Ue4Gdd6PbxtT3JraFf7VRg5StouL3aEfY3StQ64DAeyCWBCYGpsf4ufv2HHxcSjp9naNbeVG1vXMnB73f9JBUe",
  "key8": "3VASMRrRMjfnvWqzfFcedkYAP5q9YawNX9cM8MRfx1vwBCiLL5XbZttFZmU8KesYLxXTwTxArs73pQPMwMgHxByd",
  "key9": "5yiUaXWTUfKeftyDdjdwBcKY3zbaj8LeWTEV6NKzS8AfL9wSfQHEmE9C2vp21kvGdh5JD99NszAvZv7thW8KDYkF",
  "key10": "2ps81tMnAcQu16KQpn9pimTBr3Mxo9B8g58T7JtY1Gy8Ev58B3FMJ6uxLPdpYztiza4EdzuccLD7JuancAExCc2n",
  "key11": "4Cb4dLm5hWAQncKdSHKizRngB4mC3mSv9pZMufbfyuQBqa21B4uPhQGBY9dxi6GyJ3V3ZWXGCKsHnnkofz3K8Wv5",
  "key12": "3SJJwTewSDyuT2skCR55SLUePX7jKNVCzJ9wQ2tQVzw7VdF14MAYNmATkDvMRwiDWNXw9wT81pRnmvrgJC6VyhoK",
  "key13": "2f67kDvx6K3znuPZ2NRG544veLoihC3xKNyGPpiDv9Cjj6iDDjzcHgfPcsKAQgjqHUgCR2GEpHbz9xDZpoAFmK1S",
  "key14": "4odNyoXdZeYqMrjmKr51XsTJD5pyDGZCSgFuGmtuerpmc2BZobmNYr5NWJ3qoeo26S3hXwDbdERADrheAgCfawFA",
  "key15": "3moJARE7kSYQMfSy9p18hc2jth2poAqCdat2vzHLsxbrMTNBPEpPRj5RckA7qNgMZxvbENHGcbncr5Ms6R2UbJ8D",
  "key16": "4r1CVRoGfbUiEDD821TzWqGUm42yVoQVNrLb1KnF2yFML9pVnm3h9YjCkbkuYqKFAweiX7J7e6yLkRZ7Qjxio3bX",
  "key17": "QRZJVM6H9JX3qcAf2Z1vGKjtgexJ4Fgj9ndHXdzbjdkNQFZYFtyhmNeTPSzVSAVH5Xxd2c92bG1AuXsC7wqzLxu",
  "key18": "52hA2R6mWHtr1dXC6DTFCHgi4MCKAmbLj9xxeZGPxbyueEbBsQHvxJdcSxns6w6zne66dKAq6NBwAPp8tp1WmrjR",
  "key19": "3Jc4KqEoiUvskS92z5qAT32LBcGKFijo7ovf4KmcdEf4Y5EyaHhQKUyJ8US6UH9jR8wLCSmn3U5q2KTRwAy3Xp29",
  "key20": "2nyyJaZciYQJQWZq5MK4KsiLwmwheB6Wi8KS5txJ5BdUWz8VBiaMNsfhkA5VqQnJG5UtY9R7XcYyMUhmssynPEW8",
  "key21": "5t8cYD6Cqstr4DZjn6VeuDo6wmeLp9pWdEHQwp6QWLWjfTvScLFcK7Rb89WbY4BVWabSiEnHAXbVj4fz7tyD78Tr",
  "key22": "2UqoWEKyMbzPXgdtCkZmadcf5x5KxAQKQkYMTr9fwxRdDAGUP7KxyUwhgUWGcD9woH1bhQiz7f4U2vdBDbFYGiwZ",
  "key23": "2jkYSHHEWNuAXS8t2ragm2YSgC91PaWkukXXkNSpAuTS75j3iWwuVA9zigkAZ1FCEk2Rbbef283cT7Bsr2yF7q4z",
  "key24": "6W4nGAJYMHpjAVfSGU3WoUWSVs7fuKi45SmdoiQYn6H8eFtPcN2UeqNELXdNskHtqmrYcwgB7UR6tiJuAW1LGpL",
  "key25": "TnVhef2XgkHR4gxbVEvTrBRFaAnjLDSWFg75q5G7tmUJoheocANe7N7nHcQqEWx7pwL7ocjJzECC33TWbD5EUAZ",
  "key26": "2K3MbjqRiiocSqQQouaNSpiHJ3DFA6wq76b7tCCUKJEesyLZxWwvWesJRFsLim9HaDuBC4FRHcsBY4tdrY9L49m7",
  "key27": "3NmQLxBwCSdwbDvVhrSe3gWjoifdDFfgUWqXtV6ytvW3x1kG1cpupMaFrMBJKfYpQaK4BmjG1XuEULBR9dtP8aw9",
  "key28": "2CPwmUk3JtmRCdGYjX7cmsdy1MB6aBLFBgqdoFv19sTJJrzkUwyymicWX4hh1izL1F4Guayg7V1c6HrQVsVpGeQV",
  "key29": "2M6FZN5gZqDq2Ty9ySRri8KLyEMceTbuJVABMMBok6m7EuQ6xtnAxzjsdoFof3ARtJee9CqDK6b6Jibe2aL6yGqU",
  "key30": "2TB56iL2Py1QV84bb9YuNUBhgJwoKrnDAk9Tm6Sy52RH3fc41CLjtGNBFFLfXVcts4m9hA6X2q1RPBMEgagFFm4n",
  "key31": "2145qZKFAvA24fEnhbi4dzWbmVriwq7BpesxR3W3hyMH3uZMBmLgoC2nQEvQAvZs1QNEg9pyx8QHdB6Bb66oA2Le",
  "key32": "2Rkz54nYdDzUQBaNctHSn7q951KR8aZoTKEK5XdW3K4eXQeaKzzRQaDVR1uAj1WBV5h8ShmGT4nJ3rpt54JvCCn2",
  "key33": "2RdWRdr6bYQN3RjrQMRMPw6iVvMCF2jiX1NNhXPy6gLccLYsd4AagWt4hu7B3BPfaH4uDziXEdVs1FRTbxZWwjmy"
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
