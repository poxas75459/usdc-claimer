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
    "3ZyMVuT8WvXGamVqTkHCRRmMZYBJaGXk1KmVL2ecPXvVq9u8BvGHZW1wf6Xu9Qr5EP7LB2yMuxPcTiZ8CC2fCBuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23X3Kqn9Fw4DdDLypR1SyLTzW9WCR2JHCoG8hgRqmsNKhqoeiWqJBg8jaKP2JK3uQSFevGJbYemabYo7z8BK6xNw",
  "key1": "5iT8EZpGZabH5YjEFJNMBM8UbMiBE3LoZp4i17GaiVMxhdn7FzQXxDwuGTuYGJw4rJVEuBWbj21uiT3jmKii2reU",
  "key2": "4DD5ey1Xw2PZdVtcTjirdpvvWwPoZVvd7ZvhifrAWGwvhtfuoao13NcfnWU93qYkYP1hKLmDsChdcZnDM7LYPR5s",
  "key3": "YWAPZGd9HuBhCZkA1sCEeY9ewRxyMzk7PNcsdwJw7WTTKCe9bz2n7KRB5Tab3Rmk8zkp57x1tZEgY2LcfrHHARK",
  "key4": "4k5H6JB1ZByXmR3iqL8yHq6f7tYBJHKEq5ycRoQCSWqVLHB7WkFei7tZUxFyiBZ543LEb2tACxkS3gZcbScDAA3P",
  "key5": "64asUywRKsAyuFpim2z8FjpNzAGcNNwpYXbccEEWvpAeEo52igBAEBeyXv19bqejBZJHUBV5LjSmzrZUVvh3MFMs",
  "key6": "5BZTiYCuVZAsixDwtuR23z89ExpVagkqCVSQcN9w53LwpnM8osXwsAknLnsXfiPhH5dPZGZQFvbN5tNYcAHR9Wnb",
  "key7": "4zYzfRphf8eYtoK2qB6XoUVjvTPksuX3BEhRin47MvKLbsJqhcg4Jbr4cHxuRUnbRWGwUQPVdFRiouwR8hz5koJB",
  "key8": "3exuxLx1sS4KS2x5UM2b34s3fsXeqqwuGeWwwrYzayFprKU3pC1EnaJhvJhwk7LF1PEAMFxkWqNiTHsWnvZHj7Hb",
  "key9": "fq3sioLfBF4UkV8tKM143w4qvhK2ioXAHpkc9wtcuwMkwfMTrwHeVNK1JdZWFqT728JhcdzawFCcGBAUcVTAYoS",
  "key10": "WE8nKeUksr3JUUk1HfXZj4i1rH4pKcwYJE4dqybtPxADMwDpbdtLfMW3BJ3x3Fk56WfEoP8v5deUuhJS2P7Ef17",
  "key11": "3s5wBuzmVAFtuQD2BQJxZQRzYcowPBezDrgDfoiJc2AGEy7c65mHWYmx4fGAv7jvtxBzSwXfbrj7CdPQje479pDD",
  "key12": "3DtGZsomnYFcg7XduCXrMCBdfiopfQvt9pY9cyXojWPDkVbHygAMU4AL3q9BAe1tTvceW4RHPkNHBvarBgGQCgh1",
  "key13": "3Nq1CMRcZE75ZN38LtAa5YemiiuCB67oYf1VFy7uHZx73hdAKg58ihdsJFqihnZmhKHYNiCGki2gHorBzXHGKKZi",
  "key14": "2ars6CNHzLATdAMPSnrUFcb5Afvnc2td8aUEAqvE4VGT9v3pjgo4xgT5GNxTnnjeGmqunFzgJP284QHgd9b18VFa",
  "key15": "5jzNhtJGvQTEEkc33CevMxhAc6naiXXivc23QvabUzRzvVds11xqToP6RdhhM9PwQ9LNK9kBGXnvtFUrckMrr8G2",
  "key16": "4k8t3SW9PharWrLgG7AczdD4oVDLgMrNdteKPGLjztxHv65YupSnuC6dTQUB1GLmvABJ1P6qRj1MM8GAbg2cGwiB",
  "key17": "4iAsyL16Ae7DPCTJoT3DSxVs74rvPD9mqAnBVnhYYvHBADZYLuMfmapoAW9RdfQLCBYM3bxkcuD4cC28MAzQ1syZ",
  "key18": "4BeeoLds92GSAgbtqY6bDyoEpDcz94RdhjSRJo6Aq9hQiRb1zH4eDUAxMLnE1Gz7C9Ae5ooSWvg51eK9GQTRM1Jr",
  "key19": "TW9uUVi4tiAndppobkHwg43zorTzfNTXRoHrAwWZE9YGXZvgbCXgqCnwrtH46x165PLVqMTnKEJHsc9hv1hkwd2",
  "key20": "4vFu1ZCmpA8kfgGcF6Z6E4u13HFqFXrjhHTrfJtZsEt4v4iUsnp3i32gxKAwDsitjLFvmhiyrMBbkZhUfB1vySSt",
  "key21": "3rYKrj7EToJ9HBRGit2Qp6aXFxQRzPkCQHjpAkwDdQJq9ouD3EuQqBFjRM2GQ7agew2dLsvGWDNq41Nmi9YLmMTT",
  "key22": "4rrJ94pqN2tpmkhgXNJ2athxkf1R1FtbibrZxqL4cCy43Cb8U1nsezKDW6GEdmtSKbZgQ87gsYs3rEaaoxN4i4KW",
  "key23": "Lmt7dDfmbK9CzaX1uECG276Kph93dKbpbV3nS4xu9poDMHRNg4EuwMaHNMfuuqQTfsv3HDGUpDEYchDurCStcVZ",
  "key24": "5jtJ5WnPZH9ZoCqifZ2xCUSfVNnWhi3ixLN3CsLdZs5B9xWABW7TA4eCwWNTaAxgvt6y389XrNh5TyVsAXcFPbom",
  "key25": "3EDB2okFLpjgTeJHvrSE3C3kTk4Tkw9ipL4DgeSPmySzxtBkiAu6MvkeWDHxDUmhk8pWKCSbSJbb4n7eQqxQkDDG",
  "key26": "5wkZy56abStGqAs21BX3jexAFyv3yeHSFBVvrNLtNUbvGLW7M9qS2HKoakvHfmndfkhbWZHqFEJgQtcGB3g83PAk"
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
