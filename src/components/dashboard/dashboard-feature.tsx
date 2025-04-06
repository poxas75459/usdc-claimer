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
    "3PDiCnKWbgvmK3PyD48JNRRtm2YEhF1ZgxsJpZprkcgamwctipqsdPgfbcwTj8KFekqAuX6gWr1MZX3zwtWfL6QJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v3PTSgeahvmLHBxKiLT8DX9MVQdBGMsJQFKCiAipgKtmbpciCHo8EVxianruz6mXsC1qpUd1EHZvtvBVvEj1WPG",
  "key1": "58ZMApwpe42EbDnF5mug1Yhgmnyqt7XFxU1FMzRmbQYkonxu5881EH74FPbrFbegMjrTg3dNHxL1bhmN1c5qF6jR",
  "key2": "534c7q88iSuz2CbpNfZh1dSRBQ4tKnfPyM8EoMTZ4xoPXAEBaUH2XCTbGGPfQQ4iMp4pY9raieF8wmYreZMb259H",
  "key3": "QoAg2fuMBpWFVwiFqrhbkpae2gtPJ8toFMVoK5tS3hNNr1QQUWiiJ3CRCCty12Xn2cJcJv6KLrZUoyPGgEAyLAo",
  "key4": "3F2h1onWFFMdV6V8D8LENeSoQCkVjwT27j6Mg2LNxVMhLERxRXWw3qAQhnpZbtLjnUjUdQWYJoDZgiUdiW1a9fEE",
  "key5": "3f38FMeehc4Ed2KpzKY1uAvjUfgyyqhA4hJBwDQwPxsVwsGFJ9U7QiWokzaFr4TY6oisHEJUGvFPEp59seg3dLhj",
  "key6": "XXTEkM1CGVdNQYsMJncwhXyZD74WyqUySv9AttXGGP3UV1fQkQpW2smbyAnCwizvRvF4iKtnyND6CyoLX3bsy1m",
  "key7": "3DMh8F4U1rkPX2LuUuswVkGZh5ecUGWUXWsJPNzwA6tmUD1AQamKG1k524LzxBwwUu9Hc4AaR5DsGU8byFWvBURF",
  "key8": "4HB4wRg9BgaufWktP8jEPAGLsNSMTWrprLkCs8YDbmTmk4rR2MoByEDRFEygKS2rngN1QPei2YrA9sqM3M8hqXVH",
  "key9": "5wvh9SirQEJK2XaLmX684KWFJRngE1nDq8kaDAoUVdYkQCoRnG6ifePAWQvq6uY8GbskrVZZqrEZmmXKYZwjXahJ",
  "key10": "UxnkcJ7tfFpuG7dmuYpq9nMbePPKPyUM31wgJsoc9pCTU5s1LhVFDAeNXWvhr1pjPtepkFMuNW5KxfYmji1h1ao",
  "key11": "48GKtdJ1T6EJ5eTHz8LWgXA9V3z4Paabmh2JLXEjAAGA6QRdJBFgYhpH9mM7vm71z28HVkZdbTpvZqJJq8ERRnkN",
  "key12": "2J2NQCDSXiz5hii69KMt517sX76Ru5ihgyKft5Q6bz9yWoRsEw7vJ3KZFVnqsNnyuExvWidCBuw2JQjwh3CdSzUP",
  "key13": "5K72JMfn2Z7h8fwWZJKuVE6uXqqosar4HAxUoDSY3tazJWGyxBpBS5nEzXu3aLa4zCXAvFxkRtnNKSVkyPrgNPGp",
  "key14": "4MnGHH5GXnY6GtDffDxE3XWncDMJ7XqPPARZU4mPx25bZuCismQBEhJ5YDoLKvBUTZVWrB12WN44zaVjBM2re7w1",
  "key15": "4hFDateogYKEtXAHbGRZAxBBLEKDbDHM3A6fbi2PDe6poauTZbi3GGJQWmW1fGHa5748svcRDQyE1KXzH5jfB4VP",
  "key16": "2stHSkBaktfLURyZeQ4y12gih3rTyprF18pQ86Dq1i9BKBDeAJjABsHGGvNrY7z5N4DSy174VLNEuTzE8ZBo9chA",
  "key17": "5xNvr3Vi2rX4be4koskUMiZsN9yJ5GqdmVJD1cyDQPd7B5UXWr5pSHq4kP6FzLodth17S3sCVzmexJ67279KzWAX",
  "key18": "4mxQUtojq9HdBUbmE4qbq362QgPuqhpydbK2g7ep74CoYJqhc9Z7JkQReTgexMZ89iBe2LYKVnQ8dAWXT49xd5nw",
  "key19": "2tymfXWDMM5eRDBY5f34rPnrAWDJzJG4CT9tZo15aiDc6kjCc46M2CHhLdHzpWtc5TT8dPS3nC4VpvtpvXQ12N5A",
  "key20": "3ZZVa8cFyA6RqnYjuRF8BAmRW1G5qnCA6kRWSwLCm7oTprmiowPbwyaThxU5ym7F4xfYLWx6RiAKAXNxsYYtGwYF",
  "key21": "2NP9RMxmHVzLCKuQgDYoMYNtUDeCc3GMRtBwNRf9bCGeBKwDccpd1ZBDASVTwsqjSaFhzgU6A3saTwmGGnTsng1G",
  "key22": "4CVwN56CjYFbNUPiJsTYnngzn5JD9z16t738fy9eCYAJSJnTck7R8JkWX58cuvK6gkqbz2xCFToQrLGn9wWW27uj",
  "key23": "5i7kqZZNBiBeifCFp6DT4JgZQDe8sfj4uUNJbLgRbkPKY1R3wBQEy7oeZ7DwfEJGnme8ixLFFoSrcNFJiL2po4qZ",
  "key24": "3TzxRdDXjq52QGNhymcYPyc8RLbHyJw4vAsoNFAExr2wG1FqPYAWtuZtNNgbUvacEFi4mnin46VwxNoXbfzknFyz",
  "key25": "4ekAgtLfd8y4JFhhBg7XNBbZeo83eduUoxNYH9uvaZK2491xmSQbVXFiqpiW1bvVDp1sVXYTLe68MrQtEEyZ2kSC",
  "key26": "4ASKfBs39xyS1mn14ReU1685NqxAQkkELwh2XXYRKU82yhqHDtQjALyG35KijrAxCLtptwGf8t2bRNjWjRxob7ib",
  "key27": "4n3599rSR49J7xPo1TzJTuqZEmEU6aTH9NWpu8t8VExbkGBgujLjWA6N7Xb4oEiGwXiJ1mCNbqGBvJ6yPt2Ypeb6",
  "key28": "Qor7MfUj9Dggkx2mUqaZ86TkayGaurh7sj8qzLfiwUvU4uXxtSSfkKxT24vTdQrJoEhtDcS2r1ofaNFFhpBCTjg",
  "key29": "tvczFxXeu4L2E7zuaA8AbJfaQ43zMcSDdA38QNQqTdRkXDXxYK7oiJAwwb6Nd1QJPzdhyzyVrtdkGifxE7uVr5k",
  "key30": "4sXJT1FLAJZHD3YPCnpRS6EAdTHvpRmSEk8MCnY8BYjdjSAzuNHjGuPPFaKfNmADSNbxtLg5eRjexpP18CnNEeZV",
  "key31": "WxLzmsdumsEg727wczQc8tBjVZrw5G8BP3dfPqpbWvyk2sVo13xLELLrtq1VeU5ZFm4M8bhgMJbr7LYeQSgLUJE",
  "key32": "4R7kEzcdHsMoj1tuyPgtK4VtRW6QTkZdqfQFLqcqekVBcG4XBM5Ng2d717fzRtGUF7oh8giQ88Yxo5gmdhqgAomn",
  "key33": "xqSEX1KgpKnHnxWj4BmSzqTmyJMUddCtZfqwcD5ooYLEytJmqMRnKGxm49ZMBPsn4ZbZcNS1ZDvD53HYyesUPfE",
  "key34": "3ZnLx1JU3ZDdjbgE3QWamFwYFB4ZAp3jFGzVxQ5tf7cCwfRmBCKqijqas2DjS97C3JJcqB9dabK3Mi61KYZFXmdZ",
  "key35": "2kGWCjQ7rMpp32EiL2hzT1rPnxSDhY9kM9wsteJzoJtGFPJrcx4eHJka2GRi8YM2ng3uKVzZJQH3ht3vjvobw7E4",
  "key36": "4NMfcqnfoCyQVN2J2bTuBCWDztrpAzejPZte96fqQ8UGp9fLp9hPdNJaYQJEkForxu7kcK9c6TNBxvJU6d9LtQmU",
  "key37": "c5vBzNdcoAdc5wZMufBt2dCcsgHKzk778cwAqcHGUBDonvBp4iFaQYnQ5WvCmQJY4FhrDAEhJjLV4JJn64zKNU7",
  "key38": "DwDGoYVWmk3kQz1zuEtQ4QKx8hMkaoN1k4TPHQZ3kq7fNYwrmMcz5Cofo2yT6TFnzAssGLLfBmvQt8WS22MQSKE",
  "key39": "Tjdb9WnaCzZvqmGDfm377N2qXCSj6UTHzEZDwwXdHfcQxKSmag97XG7MvjFrELfL8FvtE7yAP4vUWsbVui9cfzS",
  "key40": "5s7uAFxokw7LoAjm5bJxS7C18duLJ8NS1Ngc1o9augquBg1nx1PEjz41B6uf9oANULrpMBLsTZ6wu4uN18376Xi7",
  "key41": "3j3PTF3Gobm5hihJ8Avt2QGK4rAA8t9YRDPu4AihxZukdn78XxdtDcVhV3W8Ce28VYQ5gXuXV1x5K3dJ4BwN5Szj",
  "key42": "4c41BehrCuaJV97C9P2GNA4xQNjXj8FKVfgw298PLiSCeeT2ZkofGUUwyfd75wnjLBnVC8CfSp1Y7hYZNzs2EocM",
  "key43": "2iTjHJSjSoKDVpprvDGQ8PHfnJw7sKSJ8tnX91xWekQdo2Td7At1SDXie3DJC3LxqFanDbsFkSDzhisUvo3VqabJ",
  "key44": "4SED7i3V8KGKKzXTZYbeUENpDRNUaLGgYSEQrdFeRnemiAgUB29dx6wEJyXHT3RNgKtxih6nTLnRQM2tzxSVMHc7"
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
