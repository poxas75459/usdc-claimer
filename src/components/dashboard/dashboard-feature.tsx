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
    "L4WYNrtcRq5ZRXpVd7gbnySQHtwjFDs4hdcGWVH7amTNiGfG1XoFvmCpX21dtF8uJvC2CCwontkMcGdPgL8UsqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eByKNbdENbHRSBuUm6rQ8Xo5AbzNwXKuWpFBCfQz7PjLC8zcpcSFh8aqxwyB4xg6y4EMRtZUJJeJbk9oPuNCYFN",
  "key1": "3KqmzNpUL41W2fEntj8KiFxBAVuJizMMf7rVTqZqDDxpuyvM7j1nU8VyCHA6veX5oDJPUycQPWPUXcDrWuf92Bqp",
  "key2": "5Y43BBZSCXDNFr2oBnJ3hzyqxwWHRYGkCy9UYHMCY2Hz7MKN1HrTHvHw1CUXp28o2JMAAtB9oTCjrxWHhc9M1ZPG",
  "key3": "7W6QAgwHZX15aBWkZcHsf8UGpMk6YhHBd58Vx61KwnGGLW4Ae6SQt4AMjMU4ykXJfVgQTov74aJuhxR5b7ksvXD",
  "key4": "eTQTCd74FrPHN9HKQizm9fKrpeCCBwHm4GjTE2h5FuMrqq43B77GZfmgBhZEbaCwPsuUWApBnBTS4X8Wr1rsphL",
  "key5": "5rtpKiuaeLGL1DoKqrJoY3EkRzAafvkSYmNfBKAThxzDsFZnWbydPwBnt3oTSChXdvM3kiVy343hV9b7kmjDgXyx",
  "key6": "44K3TGreNHQWVpa2H9Qw78WZNP1fmDoy4x4W948ueFA8yBzznced8qKpG8At9pYX1qZYUVk4Ag7nvBovTUkTcvEC",
  "key7": "ch8bQoTVeKWinLm7UyuUJURSEqnSaSY7C1BC33cfLap5LMWDGpjno9RMQHXBGTHwXcAscFSb59pn2XFBWPdSzsv",
  "key8": "5Nu4h4D4iq4xyAeVzsfEHEKNeFBghzzfWUyMoUtTwTe2s2RASZSVgWnUyp377QCPGRtfe2RoGxoMx2CdPzkdWb66",
  "key9": "VDQYtbgeruXfbPj9m63CgfHVm559khAoHHJDdDsi4F3TVHMTMTKUNP7gHqaugqjqFUF5JuoMhJJZ2cdxBjETy8h",
  "key10": "5ziH5a5NSwSHuhzG7FumhZqN231FEQ8WnwSBKcoucrojg3uCgtPan1FxWNcW24a2yW3vb1BoKArvqBnayqDREmzM",
  "key11": "2uKAa9ZmL2Vtaw2dgdnhcdkhxJGYCahrP6VPZJ3snrPMVhWTWvFxLnYztAJQTDseUqMzj4taQZbRbJxPfNYSPPAk",
  "key12": "4kvbCUArfmH8zQ4jzDDvCP851ya59xwSURm1EH84pfqHSr7DhbkSvLbthjVauaZVC3ReJX9ja3n7jfiAqxh4xXWM",
  "key13": "4bQouXjCFxde5omXYdpNj9tmJf4Bs7MVjhHdFAV4b7jMbFVu7uXbBmji4E7qAxxc7HkQEv2vMiqNXoafRwRKTutJ",
  "key14": "jBHFowX4UEqJWSrp4XAnpE2wzLPTHKnFHJUoXdotqXU3qGegPCr7Gyu8AotrXESKojsEbf15d2U4Xs8jVRj1A4X",
  "key15": "52B6KJVRBFGwTW9krufhiwDKCaXzriuFQrCcGmJyvYSaVMxti2P3GTTS1bMDY7SDuLcjLtS9mKeCLfdnCkysHs7S",
  "key16": "3GXXxfaAwqoLe84UwCDeSxxAoidj1V5WVGrVvbfZDKC1wRABh1Pcvva1XzzAr6iU17Psiy34AHxEbqqVkTzv1VVy",
  "key17": "4wmj6WjYctPD55Sx2SiCaTaKB2K7uKEShCUiEX1Uu9tzWN7wGU99mraZx6vnHBK1rKShjy8teHRmn6o9rjFphhUF",
  "key18": "5ByD2QwgBAYLXmRbMe1tVcDbtM7fw3pU6LmRw4BVReKc7jFrcLG5qCb3g9CcEhvw5uzFocXACodtWn4XE5Y4oupK",
  "key19": "KsPGu1cVvJzZrcyrcPwixmK98496kzSDBMeqeVBzbVFXwVHWTsvm55a5G3JJXxHByTKeeu4ADenBvFMTgr8y3ns",
  "key20": "2PeixTA7mJGoBZo4aB7dyupdkfJ1cXCGkiwnxpMvacnPfNLyP7bxnJ13x4ZLFNzZoLzr3gXq5emmnUemdq6dNbpa",
  "key21": "3HU9GohVinJWwmQMhFFbfLz8dUYaZsMxZhDDneMp4kgnHKpzWF2yg3BTFuvTq5eUbcTKhKtV52y8U7TGJRBe3eFG",
  "key22": "4pXZw2RcvdpqYxHWomBCpjb1XANGakZL7t5L3tTQt6DHpy8VmeBiVgPn8GDnbWNdMT4CoP61SiyV9iKKmKpvZeGX",
  "key23": "5mW8TLghWkov3PGqPzPurj7eVnQUVwkn3kbfjhkovDsQwW9d3nZcnacCeub6tjZztVEDMrXVrVmDy8A2ijvy92Lu",
  "key24": "5mjCQpfRr4xSneQswgvr9w1XP1hyMhz88fTCNGU9f9KsCCK5o6UvgXJNQMcx6ewePfJLoJQdyNizwxu8TRBwWnpy",
  "key25": "qLJJmtEdRoGdRQCXCMunVaLWo8VV1J1ZKgTvxXSq7qDmtysWbzzC5dAHKDDFv5nhbZnQRDpd6NZ5qNupXuTc6nN",
  "key26": "38Q2p3KfXLvsKKVZ8gG2oxrxE2Rm5V5ZRopDY1oqWS8S8HxcHv5U9ioAg348RuShQU3GexKbtdAJW7pjt7bRXqXR"
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
