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
    "4CE4JoWPexv7yVYc2oML1ZjHbGwXfqrL4pYh9sXR2T8aBidA1onzNQQYPyd5pEUSg44MqCxCcTN2cWHkcSbGv6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Q8abs4P9EjymiEjBrv8Wn7qte3PxS5eSPwn1XntqHvwxEomEWHf7FjWDh39JmCqCoVWmSsqRMYiBjSywvv8Edn",
  "key1": "5PtRHBiMANv1LBntqBVeMXe5cEak4QeNbasSdNsEm68P5EUHF2qAAXRChAkWhw4cmGbonz44bPS7DmMkvRpNUKhs",
  "key2": "4SMVvnmmzQnbJscNnZTiDXbA79YRv5dxh2Ss7iy2yxvSuzJJPFRqf3ytLVW4ZSes3HdxfumkQxKMghdsMHvqmj6T",
  "key3": "2wp4Jrtsy8hvNHV8MxGAgrSbbhywHWfXaSgQPbtNqQC3L4QNNzDGkCAMyTWUFdA1KtkfQ14sqZykQphRka4F1JjT",
  "key4": "5ikqMJjBpYDWxDk2FxU6kusnCWGUNVtbhjj56kBJJpvXyg6ngRsMysNp69nMwj4v9DxMAgrc2rAfxGi9T9A3yHUG",
  "key5": "5v9SLPLjHu9i2mDwA9h5oWc9vzxPAdD8qFoYqiB2EbRM5DCCiNcnMmQKgCrUDbUkNrKCNhxr2FMXXFcunPPkrDVn",
  "key6": "4hUT2D8B4tThEaiAFPfVTJygJ3VE1Kybir5aWSV1Xr4vMBDt1x5xUqCmMxVYEwkn4hBHD8X52cgEA1HJksNX3H1K",
  "key7": "5H2Qaxc7nbJR64L9NsUBgqEPdsBgAYdP5hg7PCF2rk1k5JmFVuDu9XnpSRuwiXeqocGFVsyJnVWJDGnfgET78ngj",
  "key8": "2VD7bkHkbSMs51NScobUdMHbKLPuPA9qe7MF8JUFT9U7XVJfcZw9yHyfCTDerT8LwBXGoeoGxTXcCKDQF8mRRrzq",
  "key9": "3ofJaA3rUuGVYqeiyY16pavRn6LTG66Qfc2KgdMXhqn36EPpFwtFzksrzfqa3QsGm4knYkuboUYWfksiQEKeBszt",
  "key10": "3rHwDRhSQaT4YqwQpDBADij6Z4pASFB7eMpTBUQUd1EMh6RpLUMkxQEUrN7Dds5p7o9bXJHuj4yDey79CuvXnF3E",
  "key11": "3N2XoqZzSfa69Z8f65uD5mx9dydRdzeBYJtD5M8syaiTwApRCoC1ApnFPN7RJRU1gNGU9bf82jzo6CEsmxCPV7MP",
  "key12": "4vqNdwg7cs5x7J6BVUMKC4EYbPA1X26kSFwAkvGbhPXw1FGQeo5WcUbCrw4vozFL1ZKEztQzmvXFsXZvDXGuAH5p",
  "key13": "DjWAD4FyacHwSAU92dMp94aGxPgqKUsFFZMm5tJfMqXdhG2jwdEtJgYXWZPpD24hXJCEc1aebqP321ydXSXSjzq",
  "key14": "37F36zidBDfoVNn1BxY2Qc2Wecqd8cStxcJed2iVnztGRATQ7DTF9AHUiy1Kwadaghv1ncgp8aSPXdYEQg6PBHUy",
  "key15": "3jrVjmMcXB9DnocK8GF7wDz2P9aYoAm6QRvoWXt486EK5N9zK571ysZnKoY5QDFYs1xZkCCo4VVEdYkiVa6C2Ue7",
  "key16": "3rZ2f5rd24NvWLmbUATjpEEeeY8W8trfJmZSUkFHc9KW2RryKiRaYS81Nb1S9GyGGb9oCvarszP95KW4mpS4N7nm",
  "key17": "wyN7KSyiRPqEWQBZcFh9G6U9n4KeHnZ8eRxQJ8u8smqsf8UpjcfrksMUKVKNHjgxRteyCxT7xj6o3KaoY8nX1uy",
  "key18": "3tnQDzHrjJNeHz5RMAKwHtEdVrgKMX843Rv2xxGjyfacxUHV2ba5x1BVovtPhkzaFDmM8yCniUWHigidGvhe8rMd",
  "key19": "4LhkeQ1pc9mmzCtqs9ArReJmrdicE3NEcG2pfHox2ujQqmW2tZywRMuyu8yPRLcppAKLhuqeXkozSd6fwDMpZFfN",
  "key20": "3R3QBH7nWaDkHR1MNx9ty5soc8jwbc78VvdKJsk3MJ2LmWYuxtP7nLWjihbSwXo6R3vTgBjp6fbkWKYyYm68EReZ",
  "key21": "2Q5Wf7NsQjm1k7gP6MKnruwjGqL6aEhn6gA5WMLEvnSRkEWkmtfX7zuF6CtnSa4hVCVHuRvcF5D1Y1XYJoT6T9p1",
  "key22": "2XbFy9iNVgqaCTJTgxRzPT5Zk6oYAPi15VwqMSZMSwJKRuhNrjfgn8LzPuR8mWH3PiiCjAhtJbjXZ7gxs4MdoPoG",
  "key23": "5jrzEAdv2pM798QH5UBF5PPsfdw1UaEuwdpPmL8CpwBqtzWuMQGMr4Bb1NtvFwyrFKzmrNvxPjb5vasEnXaPt4k2",
  "key24": "3TZYvBzDkmmWMkudbvh5ytLxxYFM8N9V21hjfR5j8jt2NKodLrsMUp1zxmzajnunDuAtoDWVp4mueogUozUUgh1v"
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
