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
    "5cJ9qoNfCFRvZEYuwgdRf9f74WYcfqZRcA3z2tpQ6PMu6A33s89jLsEYZd3EqMAAb2HuPTuaEmwCCW4JCaDRxu1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k991PBzPV11jLpwr7gb747V7iBqhHQubZHSCXtYL4nodh9n4ijVrhen3qLiEHae5yjLCog3jc8FqrTXnVqgWJiA",
  "key1": "39GBHBtbZBi5Pc3DC61XCziRPppG3KtvJ4kctQjJAHUHp77yJras4zWzPD7NM6SnP4yV3CQLHfUR1jgHxbziBz94",
  "key2": "4ktQWEV2faku3VgpTYcUfASYEmQrBdwBBYuXpNNkRcEv3AmajnJLVCeEY1g9uAuPUGUpiRsKmjPSmS3KEFSGLr9z",
  "key3": "22rJeixdPQwXZr3zQ7eoBptX5A4F4ejSXPVw2gebPxtovGm8mnF7uPUyB68gUXhW1WQdDsaN2WeQ2EyKJWanmvgX",
  "key4": "4FXEWJ9hbNbi1seDULAT5xjFMPbzBXUU1N4DKoifx6PEPUHoHpHJwazdbjpErEPSbDCbB5ATvqB5agWFryY6WVZ8",
  "key5": "2bkasLLMMbVMWjzmLW22gaCZkLJsGeyVnCrAwYZtG5RmSnK1tsGpJzyxmgKNXEeVcQs9DU6JDWonKFyZYxyRGdvi",
  "key6": "52DWLGwvtJqraJGatX3z7xTzqkMLo5GEQN4NTUYtDNq5MWjizSnHvcovJnJrnPnGei8ADUYMV34gVqY62VFzWVj2",
  "key7": "4fg1eXSFCYcxJhd4FPe1qYBCsQXEpP5S6qixH4psVzDwFa3nLt7iHDYudY9QCDV4W8MdmadxRjQUb8XDkJaHAd3q",
  "key8": "55Lj8teWSyBeU3n5EVgMdBxwjM3AaXNrNABJTfdyB7b1fuP26zTvPNQ2pNmseWYEJNCTbL7vvnPBP2GALwvipsE7",
  "key9": "2ZYKHCaUceFU2mQRSF9w2ENQyUSvmof7UoohDpza7T2kJen2JFv6KmQx6oWZjMWy4cVajvZ6icZyuKBidSPMyT7M",
  "key10": "2ey1ZPH57nWYS3qpiUvmK83h5K2TUcy7L9R71kH9XJhCWottfDCVzCQ7V5G9LDM9KHceNcdUUwWVUF4BQKiqyuUx",
  "key11": "3w3jHiN2kg8mMfCYkGewUDcckL5AenoU8MUVPF8Ytg43x1H32FpGdzKuhgRNK3deLw6BMs7x1CvfBy5n8c2MDLZ6",
  "key12": "3vkhqg4y9Cew9a8CCvY2Eq6C9NoQGsgk2naE9vXDhU3jf99L3DLp35oGgqUebEvVmRKjmvJzhdjeNLZrZHZAiWAQ",
  "key13": "aEvsMgXx6TVMLuoB2nHinjfxYsnx2xUooR5eyThua2zLiUrWx2YtoSffSyXdudqfmEizzEKHBGfynxJw2vxBFKp",
  "key14": "32Nofje8Ey7xJnZy68Gbo73LUFb6wMKPGxZLe2B7Nfrfm7oPpoeLnD43yXHwjrVLtKgnHRanqfv7CATQVJuZdNv7",
  "key15": "5ZSwoZMbpEA22PHaqKHkqaMsRyf2imGWDojZdUfCgpxCFM7Xd236hfyzXyrDjc7cbb3JHTHFZUhQyrrbrz8wtaWS",
  "key16": "F9hjJ7DQ4YN4hrrsddYv2nHa8wBsRHqEYXznn9HdyZt6RSuWV2Q4FaEG9A8o5L7WXHz93BWqwHMTahvGcVL1yzU",
  "key17": "2y74N5Mr14tKyJ4qoHeFrE1nZpuHUJgQScc3ZuFFMxdK1AwxNW7joYWq33fAKTZEoDEovQnxWZMgrzRz4dWyj1A4",
  "key18": "3u4LtE2PQuXVmh1wwqMPUcwKqsH9vN8GS4esb236jF9TnYXzcJyiFjQF4XeW1NU8k9UWuteVheTHLrT7QqBnHDNP",
  "key19": "C7vvzckFVk65at4YUhr2D6zEU2Z9jqeD57vatDaBnKn7xorEW7ChSDDErSgZQEWF9jPiqLLoMKzTP6vT8J9fD4V",
  "key20": "3WJPiZ2xFLmt7PVgNrLxAN8PaqgCi9jQ5XwFnCBep8FA2ziYPScgesmDjJFzbfoNdd3pzNQgAfnGa8Y8L8xa7qE8",
  "key21": "QvxgUYsmkHfrbNzWsE8aFs3LFcZe2s7DrprhUid2ZYjn634U4U7L1xmF7m8xgDMaxJU7GNQYZPkMzpG3ACDrs9J",
  "key22": "2wL8xua4ksvA8VFSQQxduKCwpqxoVkgmAq16pgbXQmcvbSHt8R8gJBaZ57FWbZnkoe4t11876PPmyobnNSU8fPAK",
  "key23": "4MJFciwq9skHdD8uhVYSS4XuGTBjz7BWwz3qmZBrcygBT6L4Go3JkQCL83TMkAgPWVzsvZQxvUdnxd2mCat5fsci",
  "key24": "4TVnV41snDht3py539HGG5uqm3tanAh7yRR4Dvn7RupeyJqrQgqZswwc8hHkhKoXM8mucpEnLJxUMMm7siiYRhDv",
  "key25": "4BR38Aoyy9rVVnZHJaZ4fyhvXHsDGQ9tFRkg74V9u8FqLesnQ8VKDxjUAYxZudgL4LnJJ2oLUaWABmfiCC4Mfznt",
  "key26": "1uDed9XDWMYEkLPAU9FyYupfe8iBJbuEsWfmQy4EXdKQubxg9Xzec48x4XMti18sz2aEzkArVoDWSFxSaLxiket",
  "key27": "5kU8jnu2FAM7EStyNJFsFgTQMVgaw3gsMFavaXD6rNX37SPnrH1BEoCGYToHQVkx3F28L9TioH1LYd6KXDGLX3MD",
  "key28": "35xQDVqSjgMKJr3evHPLhbqCuq4Xu8gKSs6w3QCyKHLJKSdwrAtZub9dvSBX5PeEZuPJN6oz9JY78Jxdcqac3YHy",
  "key29": "5tWM582xM6i5cxxFhVncftK946Qo44XyrkyqPULwd6r9q8sSViMz9ArLY2UPkiPb1MRPqFPoX5W2Zj3Lk7ibDDh9",
  "key30": "dMYkgVYGx9XE1eCHoS95TTkXeHEok9UiFDK5yMCGtZcuUrJzQyLwW8Xa24ApfbJgMPgxsKrrKH1zPqQB6t7DExJ"
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
