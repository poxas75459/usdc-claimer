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
    "2hz6QPmQyKHc45r7V18KgTcBT8ViBs7NoQsVECKpXgmV2bmqoXD93L3kebP8RNkhAkWisLuxBR4WtnuMZ2moLYEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UQyxj9HNUDUDs3V5uMaZY3JPiPN7fG34E1UNj2dRososj33M7HCSRQXeauZ4r97SA24q2Y8pFm8rsJhFanGZYpm",
  "key1": "wMgZFtks3pGf7RQYhFXH8Z8uNBe2mFBdektzaDKMF2TJQzjTdnWZ8k96Ub4BspijpywyjwbugRST5RfmfTEbRQh",
  "key2": "5ehy2n8q92xgAdQynZn1jWxFsHEYbKY3Gevp8YSLcAjzYtN9kXeFQxtjTof7aWRZFFkBrSvwJNjYjwthCKWcbMni",
  "key3": "5Uw2iVATvbWLh3CkQXJfYQE9rcBTxu1pY8HiTQCr54yvoSa1hpNc5qu3Xb9uXGxGcMUjRi1co99EVSRzjE71adcq",
  "key4": "2VrpZSEpcGZkQQVohjMBy7eMvkza5ebNyte2oine3oM7shbimsr5BiSFmRujemy6EFihmkGuoDfNH8shNseWCP9y",
  "key5": "22vwvzEyp4a3zBUuSTpiNCEEsqzXW6PWVbuUu83HJrWzBtXpcHVkm8k5DykjZWyYp63DwMnN5VCie1sMYHff9jRr",
  "key6": "3LCrWK37nL6rTWK9FjB5gcDPxfNr3eNdB5Gepb1QXxY3nrgCDVKNxysovQdCkErQjzgSttA6WQCgdTsHkpKSG3JJ",
  "key7": "2MvDU693EvT8zaGw9fGKP2Gza92KKx5dbxXPpqKUmNnP1DutSQsjAzurvjpjyDWhq1XwKiF7VEzHDYG39vPwNE8G",
  "key8": "3qsQAHZ3RPun1z8TyehPDJEyQnCdYwqV8fg8iXrfBq5qMGFFYDie2dtusW9uYXoKgFbmpDGn5QmuCgJJTPdz43nH",
  "key9": "2HhTkZ4EsQRt4Dh71d5vfY7uxPkA7VBA7Ysh4cJPzWjwFdvH9QcUYqBo95K9YK3TJ9s8wrNJH9NC4LYvWYLw8gXd",
  "key10": "5etdeUF4xtHE84TYmUG8Hxhh9B9ubQQ67fQ2LPJ48RFLzGvrUjcEhB5r4LPcPnTThVaQmZuKzZ34xgPabqVXmReN",
  "key11": "5zHAPUpemXU2zpgqJfadbdSCSKRneoczBcVEbPYPiutZbwRV3FYkQ7WQeSp1uSi2DLy4G2GvaYyJVaj1DpnDJnaz",
  "key12": "4x4sVxoNRCuJjMxisUCuc6bKdVV55GBMHZooHgkVTAgMEeFNb1beEETiEuf4HK3ER8QWDGxujotBgVAqXBy83KP9",
  "key13": "VjFFZpZpWrQEmjCgb36RLCzaAnJyPxSrxMtef8oconEqTFdxdPQryCoBCrGgDTDvuud8amtewJ4ExDm3EU8nvpQ",
  "key14": "2Tf5rP3VXpzv1Mts8nz86jFFUJwW56T19VVZaGQySWVVFRXaoLi2412NuWzhYLKDkQkYkF3Rw6D2hJdeH36PonyY",
  "key15": "4UNmci9K5fygwa5ENK88eQUaKcz5GHVip8jRuTnL2vgnPfFNE8rv6bnzAK48EgXpAnSwfzzZZnfS8coM3hSrLGh5",
  "key16": "59AVYaiwc8DYMQeHXz2dABqb7L49YyzvWx4SpFvZwBdinhSTnG2PwZRrtexRVXw1MECSwVhrpvJcizEyQ9z2j152",
  "key17": "5LLzGCLGLXMrTg7iQi845iD7yksyVUXRgZAWDqD3jPQ7D7WRW5MTN9L1ZQME7EbQydNemv7jgrMMQEGHTcwmUWhL",
  "key18": "3dzcJaJEYPaqYdLfWqoBg826o6ZPdWe5Zpg6joRqzfrNJpvXe3JkeFjTJGVxuKKptangaegCMqQWhh5NKxkbD8Yq",
  "key19": "5GQMBAnAAnwhtdHhaTpcMfeXTQAhzXHjo8tzAM4c9d1TtVBXKnGuDFNqVkVxDQ37xGtA3AFvTAGzg9EbWcNYa35N",
  "key20": "3MLFeRMCzAk8Sf3yPsmsFhrzeWEGkSZUDKVDSCM6Y1nfYzqxLp9fedadTs3nTRcAJjMRLE6H3kK5sB74kYLQb8Fg",
  "key21": "3t5DYep3xP9WYXaQR8AVey9xtCBRJxqQinQ4QCZjmfjBzMB63Wjd6Zss3Y4iFkJ3PYD66hgu9LYSWiCfZx882C45",
  "key22": "67hZ6d4dQYTsDYzkNvF6ZJPv1piQY4G3moJnTxpAKGDAT7PLAoeCwZkH8oGh4FddRx9vcbzp5jsrtwzmB6HJLJ8W",
  "key23": "5v21yPDZQWNqvnnRa1SfgYUseoNHEH8Xd7BHjTKLRdxmZYpQ2CxCtJbjgem9wZQJYWEXpN3ybZhqwFREZSjFSZMu",
  "key24": "5qTtfKhhsPREVdd9FNo9wou7kNxw3XEkaqM1o4TPPd2FyoHjELoa8wZ6VucBYBvUiDLn8VYDqVrqczpcqUUAM6cN",
  "key25": "25KdBn7YCjQiFpFrDWHd6ZHZ2gcCqnbTS7kNfVKHiPyhpyK835zgubAzcwomrtYVnAokYEyBZvW1TF3r8BwMeCr9",
  "key26": "2QH1NVH9Ey4FtdnPQsadWXuAKU1SqR12BSCqJGRZo5Gqnq4rxzoCtqB4vaT4p8pVeMFdi6mksuyn1hrEeUmS1p2E",
  "key27": "zxyvEcaTWNbZkRVu3XVCMBUdiqPbmKwY9ERuCkXQLbD5KyxTzC1Z3WjyCAZTAc7AvQkzVD6pewqMGgzxgwWqui2",
  "key28": "4rKV8QPRfaZjMKBNmc4h2H7hePPn3D9fiefvLZ4uniabEgeNKnuXiSqYLTBFhRNNfCAKw97aS8b71FSUSX8GADyu",
  "key29": "2FZuRRAuVRNLZ9HrNMgdE6tPoQ72hxMpsf2RJtXW8aAozSsfQmJMVxZ8bvy2xUqVE5JryZqfXZqTk9ac2BFHWQpT",
  "key30": "4UevErp9F9WJv5WEmFRnLesbh9iUcwnyVvkmcthpLUc3HjMgZq2oX9AfYwEvn5cBSSuRFwQ2bGAKEySEZg5vf5vS",
  "key31": "5ghDd4xFVuVDePjDFv9KZpdqXPsrm2YQoM4kQRMsqytZHLVHxjaDwKAV4SjXKu82Yf7HWtt2wXzswMfBCLqFix3a",
  "key32": "4ko5VAZuDCcyNsFdihL81VKYSCYBYmP2xyjwaXN3SqSKLRMzTdjBRQ7Y6w1tMfgsuBRpuSkBAGAkGFNXGre7bENB",
  "key33": "4bNTTQXG7sVueNGacgsUVNzfpqBS1MF73hiDm9Z7w6quRZKn6C5nw4bQ5QL5fVeHe7jAHSDLHgk7FZX6Jee5knJB",
  "key34": "2MtJW4x6KguMMj378RD5xS4n3FBgj5czviQbDo9H4PJ1mCKqWyMnmMj5KoQt2ZeXYWc6F5dketMn55kYkY7wBwDe",
  "key35": "4BzTY2YBYhYbtabcjTzbTKmq5FWnjmRDuUZD5mLdwniqk3cjjevueyskBSUEaaGaULEkjVjSQbS71xUCNF4g9Lf1"
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
