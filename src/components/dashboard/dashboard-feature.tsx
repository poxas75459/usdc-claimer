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
    "4RF9RXq4RBvZMb6s6UV8ER4uQC3GgGGmQ5g8hy4Fj2kbCKd9kjjJCsEDdjk6oAkYSZn594gu1KiQrUcFRnDqkAMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yTqrcodGLuwUXrHqP31jhzzX5GjepfTq7sepq6TfpCL21UkA1U97CefbCozo2L5dpDS2jk5SW52zpu4RRL8X25g",
  "key1": "3RSGWheBmJYDkQwqeSPwJ6XJHvTnKJnFaEbYq3bMnmjmFXEq5qWUFbsKXPbckQRpZur143CoSUYeNCNrBQeYmthf",
  "key2": "3w6xSadZv9RwEcchjoCpqzMkWK2xV3fU2bKU8chqvcr2YFoCt6pXfGAVWwgEgeJW4DPKmx7WYucgd8GQyQaWi3L",
  "key3": "A6FE4PwoLtQQH7jHRW3BxP9GkXw2mCBqD9SfQo43Xihvh6PAv1Qodo8QytKrhFiq3hmUx44P3Fa1tRpwM227tzQ",
  "key4": "n7b5FcGFi6jy7hL6sMFfeBirsZjF4EaQ1bCxqfF78ffarEsb7gNxMZFADvpn1X8Xw2a22B57FxML1mHLZiahBar",
  "key5": "61nP2QY2nB4qZr5UFQsxk8nAJFzKirt2a46HFo2ZpWaib95MzfCPvcHkuFYNkxefhA8bpNwoXdoFxQhuj7ycNNoF",
  "key6": "61Wv3uGKtgr6cHURQHNccBeMfrJquDDdQDAkhzR7ePkx1xL3ndtCtVp2Rvt4SDUcLMyszdiAtpVdpQP8oXy8GSBB",
  "key7": "3e1QbMQfmoSnpZyJySsBS9t3fs8yJkv29p28xzZw2qaNfeJY8ppC5UA3y9vPNrQo5oWCah3u6ZN6Q2Y7aQ6itV3V",
  "key8": "2SdQXYaHGtehcuLHSTSQ1pwisvUem3gwTj2NbRkQkDbPDJzndmDkKwU3QRnRtLqp9TKokDBcBCmUXt9pxbpPgdEJ",
  "key9": "43UXNdEESLzv5DMb16ChWQYYnSsifhv4QVQpKjeRVEKSqsUadSLTM4WDYdNQrY2KCWQH6LA4ywBD1sPVVsQnmXef",
  "key10": "4cwDe2kEQRAyiUVhwkYQZ2Fyu9pEhCFYa1K5rFixXTd7pAmkxNGbdh6awUAWtXEYjfHnpqUVr2iYFUzRgX9nLaNW",
  "key11": "4PYB2XPUZDBLqSxff376a3AU9ZGio2SgdEVZwVommztR5RCvssiNFoDGh8BxPQfa1SJx9GkDyoxd1ipFbuy1GsiC",
  "key12": "31dte8EKh9GvGFWmE6CKYMgAh9h4ZHEuKq15XuE7ueVusdpyxCaCqBnPQxLzKqroEkQ4YhoadT7hhawnQukXvndz",
  "key13": "bhSLKHRuxkjakXG8hy1poGLyEYBVtaQsRPdv25r66cFz7N2MzUkfeooNEDewCVZtTnuUMqjX3jsXqGguMBTD6mg",
  "key14": "CyWDjCpw4icNYTia4juaC5hUwx8sNoPGoaKd5woLQYkszikhx4471MUkvsrB2WdLyfcLYTeWQLeRbirFRiPRt5d",
  "key15": "2u3hSwVagz58hXfw561q3wg4fyHRbW7hKVZj54G5K5LunhDHwAr2HHmFhY2Qru9WveHe5K2g6dPp6vsGL1BvPs8Z",
  "key16": "35dcmHZVcD24i4YAPfiybxUCTYyj8SFVSM1x4c1jwQDnCZQjcaoc6f7utq23Zd2yLrLsMDdYJf8dZ3yZeL268e8A",
  "key17": "U92Uacivm4Tnry7uLSqQkhoRkixQwL1Nut3CevmNPh2VtK9xnoWQVCaNEFS3vAcA72uzb2v4Nc4oERU91d5FPoQ",
  "key18": "28BAJQ74D9qMd3niqTVqBUF6jvUcgj7dnaTsBkjjXWgDZndgUHBwq2jZi8haYabhmMBC8CAbj3pyQB4oGQ7ckKCG",
  "key19": "2haVBorMYqeCmqYimop62fnjjTz2GsmnBVoxrB4VvWwbopWAJEVHVBSbVXtYAJMDu8ApQNnnEhQ8vjBjNxaSzHdo",
  "key20": "3FfHjFTd1Ss9YJbszqSc74B7DJ7pE89yujx1ssBPLoKhrkf5vEmsaVqmYdS65v3pnUHxEqaXnZtnJ7Rfm9rUrP3V",
  "key21": "5bNkJvs2jANtSWQfgxVAk9V5kqdtJXU5k83SsCRDkAxpErbJ4WWrZk2DxJZba4R1VhPYYFiDxf81WyMdmMLWu7Q2",
  "key22": "4C4VbSirtqU1uRTTZUQPJ94worhowtfzeckL6St3SsY3B83vEhBzRKcR6drYoyaHFGjcPKoTgaqxWi43cgtA9dDX",
  "key23": "2apgG9TuieuQUBuoQJLMRkjkbUDsBEqbJCTZaZzQfteiE2aNTTzaVec9LQSSdDN2ZJ9mVmcUNk8XST1SCqSWgBmR",
  "key24": "42rExmya74pLU5VLLM5VugZvAdz5xSxAkCjUrzNZAEjdbYDMQhJHDTbzDQaYSJDZj5cwYDBTcAJwuLVRCEmirptT",
  "key25": "3mZWxiDz6i8TexD8HQKroiwofhqxJFQ592LZNgaU2hqZ2Lqpd4vvQGZHaUy1uqDt22WPHhqNB4QsXJYVxUr2zurK",
  "key26": "2cz9xe9xj7Ns5tAPcSmV1LcPFTzbLKV2etQ16yPCkcp46m2xvevCqsdNPUgUvKYzpU12bPNoMS3R7JepMFJzSmjU",
  "key27": "5B7B8QHE49xLQcLxTp6fyMaiRnPQSG4NAJU4eKxEL245sSiRGcQ3voPFTXz1kZMHHWgvCQUkGfXK3DQuv2Hxd5eT",
  "key28": "4Zi3UPv8SwGbZ1ZLNx5RvFNyxgVYFL4KP3Z4zZYgoNoLZ2v9LfPxNfDh2czNvffEBi9mFhdEeUWuNM8ysNHYBYFt",
  "key29": "5xpu9YDW6roZBz6frvt3CWPWdiucRNKebnjhcDwutAj7XJVk3Rx232X6S665kwKT85rPZ2FynRpmhA7DyyQ9BwLn",
  "key30": "4wSvnBfKffxMPqTYpsKvnSSuz3fSAf831TSMMyBT8NNFu7v7UuxxQULe9ZUMWWABX9JsXEyV43kjbpxWhJhyr4fL"
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
