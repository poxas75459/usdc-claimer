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
    "2ubdt9FvS6jrJRoxtBvcuUVxYZR8YWYZqAffwYEHjmJgzX4FnA9sL8Uzg8nTxwMiHQcHZNEXoTx7E7z2WBrdz5Rq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TMVGZQ26R1oTFkeYsvAM77g4wrRkdsB7F7yFi3SMjS2Xr7xg6QscDjJZDTEFxDYForAeu5XzZBMqBeocizXe1cs",
  "key1": "yooKUmgqw2RrsX1GW5MrLyPf7L313UzkkY4UJ8jfHkQjvVcrRyLTixCUFkMi4z1Pts3JcmCz5vVH7bXEw2DLU4J",
  "key2": "3DgWAC89N2PFqd7A4792XhvsMafQvLePP1UVuE9TyWtDYQn96HJvYhNSGj1VeHWeVJV2PMtxhFhimDNZeCPQaGzC",
  "key3": "3U2WCCMeqQEfpCtVtaNEcZRDtuUmH31F7XDbE7LJ5fP3DQ6GaHP9eXLfp1FddJDETGufZXGKp91v7gK8PVUzoP5S",
  "key4": "5iSR4TCxRw531qNJGV3zRdxNLLFWGmPKDywsdD56C67962x888HdTmkEmfLs8P7HdUjQaWFi6Am9srvhtMSWKvqu",
  "key5": "4Rpp7bXeCubq62VSQNVRUrzX77NgWNRGQdquFsiDfLnANqJWrswjg3NfTurf2L9FzuPFCRaVXYgh5qV6NryY5VJR",
  "key6": "dcjpcMDA9CcYCDTyN7VQrPDmtoP4jrqDaS4FrBhXCK6g5Kt4EUZHwhqz1RmLNUFiaevEg25P91FJmetUBwBuQSz",
  "key7": "4PoARrdv2BjAxVbzmFZNJqVwvAuTAobuQM1Lo36iEHPwnrdNoqDESMMJVCCap4nLcj61WJ5fXQJyBv1EWTeSy6Pe",
  "key8": "2QTZD1f5cC79iCAYTXGHn8b97pSG2qez8kt4u5NX3QtAczixWomzjdJz1PdxGeQGZXSEmm1mthAXhacgUUJHUxRJ",
  "key9": "2z8Rasub5y7vW51YXYpjU8Vr1CAGUz9TAzYUMpSsDhJh5NJCFvkdMzyhLgJSCqgMzAS4exNADqNcVWd16GQkRoCS",
  "key10": "3qcKHMYGNj8mJSADE2bRpBmDU1XRQ4Ah3JTGnb6r2jtaUJXfqbhMzbpERSKD4VGD1cQyqfBRMHKUcT4Sipnjey9o",
  "key11": "5evSSfYGda4B1QhYgM27PBCbLYAVRfTrKLPhwyDPWEzJE8z32jd4WLQ9KcFXqYynfGGZwc4c14t9eF6P4YHFJSey",
  "key12": "4sG3e96f4EbtwASebCpL1x1RyvdFDet1nrDvyzUeaN7EgQ9SYxoDULvCZrZSCYJZrV53AARGhVM99s3NtpgPFQu",
  "key13": "38x3VrdoSfkVD1PA5xcLa9Jxyrdt4GahSh8aXXcfEZPVrt42HvgBzVq6JompGTFnGcHL7TMwx93M6tN16Wms7zgL",
  "key14": "3mu9bbXFqiZip6pnqAdoaoQo3MrGgzBhHwSHHj2ioj3EhcxAyTH6m8ir92Kt9TxM4594pQdzoaMnw8hkT87HFryd",
  "key15": "5DMEKAwr17N4ZUDA9bRq22sChjHBUXVLPVqYQovuVkRTHPYjkWZWSj59VMw2JZAqh8KbAEJX53BboXeCdHrTHsuA",
  "key16": "c6eqiyiv5MTri5effbzQoVdR99jNcM8JWfqWKEx3wnD5EWYNihtUBHNdF7hmqArP6heWn3oByN31qW1bdm2gLs1",
  "key17": "5H7MkCvMGJdf3QronDE53LQQxJ98Zju9qjcSnZAZiV8JmtHQ1YSCi7FgV1wK57UCv2MHLfcBkifWQqAzRKbhWkC9",
  "key18": "xBwF5uGTZRMtkMAFSbPbxiwTyowJCobF8Y2DKmWKahbABHZVAJh5LqzDj8P8fpKWtpkbetKBhpnrRy8SYP7dbR7",
  "key19": "ke61xNyeUadpGeXASpnAVucEoWeC7WGLg8khH4XuRAy77XvJYiw9N9sYem8HXK3yjVVYka3RSmdPUP9Mkcv5X4w",
  "key20": "WHAJSCC9uEVr8bvdCCs3NfXvniJsuy7zobXPLVSEEF7Qg6JJk4xQY9xMCyzTsGzm2gm6VzdrroTRjWg8MUNADkF",
  "key21": "QXqqTwCRXZ4mXGdL3Ukoc9TXvmcnMMkRK83T3dieR3jtk113kyja197hiV2iMc6QVF3Fa4mBHyxuNZsLVb29HM4",
  "key22": "gp7iPiQV8VYrPYRg1n1PHJWqx3KFzFywZmeosr9JsDkH46zHhX4ZCwr9HRhPXLFyuRPA5MQk8e79q1jtqf44hJS",
  "key23": "UHVdvMPTbDWCYqhKP4U2MsE55kmNwyCLgV9rLikqZ5U8zVFFKS66ohKi1znzuMW64Bz3xk1BuEPuhATxk72Fhhq",
  "key24": "2AxCjUrQajJazPxVvq5ZkLqjjCSFReKMi1EJ2DhnUdSFZiiZEofTLdLS8L2BLUHMCDTLReh13P8Kfz2rTXofFHYp",
  "key25": "44T6VUppRzMQoiJT8isiNejZ55Rd17s58oaPYZMvMTYZ2mjD4bYFjW3nsDeaZ1odj1SK8cXxT84ueX6SU8hMJ2Az",
  "key26": "43937TgJ4zJdzz5bepJpvuxWGCQ7nvGSMXmBU3gHYC6p13bH9JDjAoTNwqZ5WGsh3K2Erwr3N4eUNzCVwG6uCKpN"
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
