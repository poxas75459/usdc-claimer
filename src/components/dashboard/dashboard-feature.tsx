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
    "67ouakwpqfVjbH3w6yq6uyq7xAuHkmD793hkN1AUEnCbwdXSkmVmSy9Lytc8ABhBmhYxvWLWEymZFPomePBJrgmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cPfwTDP1YY4DAYaCZjWeRCeyNDGG2BDv74Rrc7CYovajtwUchQPnaP8yKQ1ee6ADgKv13btBfNgee5WXyPioXyp",
  "key1": "5FopouwCF7BkRWEiUPgUHnPY2yMWgCEvMgk3a1ot14Pr22oBod21mdff2h6epY7dqDmTFxXd2twLH6W2HvS87Ffj",
  "key2": "5dr3rBT6GVuFHGacBjv5kXnp9FqiPLudFLdoRF4VjuH88YHRHoVXrK9pT7yMuqP9Lrvi87hTvXSTc6jiezKfxwcN",
  "key3": "5BNqzQCMbJR381SFK5jZ1dV2QwXBh8QXiT5FJvifsJAKxN1vAKE4QUcLUYHVoDuWxgr4cCXUSvUpDHozossTKYeD",
  "key4": "58z6oNficj4WjQmqs7ofABPUwFkjG6xwTCqUdmPgXAfWFVvCc5PeTcuhTCiZWJVFgHUzDQSGDc6WJApivqAk5u6R",
  "key5": "HaWdzxyefpiScKnYzexCo4MTJpJMwniwZt7iApDtqhN9xt8nRzXcT2ovvpeULaqcZRbMPTtWQyUPhLkZGHtTEZT",
  "key6": "3JT7C7XDL9hyn9xRXRdSr26ZoZjAmo1ckXGGfFaKskw7dFZ2EruMm8v1ZPeAcUEyGwvDuHKH8w4vJsirNBg2nZoy",
  "key7": "3vbCY9VHsp6251gxoUan2k5i2KZCwVmdL7AWd5imn3tXkmxYUsrvCF1ovNhSJaYq3kpvbiL5a3aQj3FH8rUbjGTV",
  "key8": "4JcmCqgV3hV6pxWsNyKCDsuq2TQGpK3i3jfMaMWM7SWFZXhEqhDqRUpiqo98LL2yMtVFz2jmN26d9xNQNf6Gmy2L",
  "key9": "Db3TBvw5gqFuaQqx3JfFLBqUgybEEvtUouqKqDuwrdfvKp8rx3Jzuwd7eWimc2kkpXqmiJ5C19eYEh6z3ii1Wxq",
  "key10": "2zGbfSw6nK4FuhKhXmkqxT7EeMcF8fNSc5RFrXDtgCtgPdFbJHocN8NYW3vJyShQWmue37aT5M8pZ6FNoz2QMYC2",
  "key11": "5Kn9gaSxjhAwqJ8runqyntXxiTj3ShhqjMWuLXLghd6yxZUnUpp2ZFf37w5LHzz39js9yUreFqqCtqpYAjVAgpbE",
  "key12": "4NTM5ApMA1tZ5EF1JK1u7ANY3hKJBQUvuJQiTaeBMvjXJeP3C1JAgMz3pHrEpwgjiEfeDwj5jFyM69LcpzfnmiQw",
  "key13": "2acRNYjhvmymuMKsgMzpECiPeUc7b6NG2rmHS2uDtRg635cddNyuTaidv3v3ct3V5k9Um69w9AqMBAzi8bu7YZcz",
  "key14": "5tDKzTQQiREiNgWgGoarJ9priRBaMWa6XVktBmxRTY1fQimi1fntGxnW4Yd158cmNnceQZ1S161uZh5ihN77Yco6",
  "key15": "vnTJ9vhVvHDRMa4nrfMsLkdW2D1n522S3gn3sR8bACoRqjRMvBmhHSo5TWiah8gXfLWgbxzxwRDndy71EVjHV7V",
  "key16": "445gWbjQDJwUSCbP48QCNTsXmXzRHrt1thpove2Q6RABmyNQ1UW1RKYTB5349HcxMecFQLzNtbNo4kZSFzpVWWPr",
  "key17": "FeQ87WoGqB1oM4BiKAzx2WXgVV7TjLAJEFUXVqLd99BDQFnmwKLoam5CNk2DPgM9tkZDYj8cBL1ieC849xFPZHF",
  "key18": "B9t5v5gEdxDqBL6bVJ2Ht8Cvc4FK1mzSK1vK4T1nGSPhtEdFxeZN8EaUEM9Dt4GFakFNBWAzRWhNjSAWBKHCwxN",
  "key19": "3cLNPEtTzQLWYT6FbePK2bA84rW4LcJTFkvhKfQy2RmdfELrPhT5Q3c7cnPpLpfpnQVwKjmLLjBiGLjzGsuCJ7PC",
  "key20": "5TmLVCAHbMZyZ4KUYXBj9pUCHRqSqEvFMi1eppo9RWNKqwMM4zMk5zWjw5rYggSU4Zqzv6Zn57RCAeYaR6PXckRj",
  "key21": "22p2H5uTTQfASGUMm6s5uwaGUPc6yLcab2qn1tAv7BzMyZQETo2ZFogBw6v2aSAm9Ju8kUutv4teQQfnmobT2YnY",
  "key22": "dukkH95f85EzFwdhJr7tNHz8jFZPs4WNMGywSPhct3gwL7D39c3gn1EhjjXDyGLfHQPLxTg2awknqu9VYaGN6zn",
  "key23": "4XMGrxWK7FtFJfa73cts189hYZKEnUYmzg98PN5MtJKAcSByqpYhoJodgGyuB8FKt98gLaiEW63h5tWUu987bCf6",
  "key24": "4sAVinLGGQVBmHPCSjfZv7cY6oCbTwfGR5XuKqdCgEZmqhYunECtujkUrA7MwfdjMyxvRc6ApmqobGuQ6i5Nj3Kd",
  "key25": "3a4M7YyBaJSWqSxBuFjmS2xeVUPs5rFDvbQYxUcdxksVVWpyb8rsCZj6BUFjuEFuxQvQ247WBc3o2JXeaFq6zBm9",
  "key26": "4jkxe4GeRt2DbRfmqTfqpnuM5NJAurhknX1NoJ4DrwEfqTYBQUKFxwYD2vxsJ2iw3tQtXPbKpLWt5kr3ccMQ8UXS",
  "key27": "59Na3YGFqfQQKGb5EiFt48LRK82xN1P8HUJKnqUumT3z5ibtcaAG1Qc2sxkivEcXb8vKSq7kBbJUg4UkWqKHKFvW",
  "key28": "63LBjQvidDaopmBLkoWegnbmKogAZFpyWMpYinKAR8K8kBJtiuJgkZhvv7w8mgcq7SzM7QtoXxeN7quss9qJog8w",
  "key29": "zBMQm9H2K17Wi7KdE3XzV6E8SqyNgENMAqq1GuowETTqmD4wYtqsdZDLHGuBa3rbYcZWNWZt92NyjxnwUWhc5U7"
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
