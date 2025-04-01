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
    "4fK3RtYiqAC3oCR2RQKPLJj5HogFCB1giy8Yr6N7jTLEV2QJjU5PzbV91rcYoKQTDNsCBpbsusTVZKvshTUJsboH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kTjYYb73FkF5fNUVzCCkuh4tbLG1NS9VmDdruK3Ni6z92XxJu8gmoejcUdHeZ5RZCMKGdvgaQ2Mzb5uQoE92utP",
  "key1": "3mSC4GfXR3REUqaJ61XghCCab3Y1ocsvuabApD3rJyNLHVNCprmKypnskhrLtxtS2x4uU8zryHVWfc3dzvixzx9p",
  "key2": "41RRJPJSEb2LnbLKncRb4MASaxJo9k5AouAsX9g1Wm2y76ZF7uEHF8JwfrAW6SA9yKUjxbws27Q5KuwkaXcvCLbm",
  "key3": "5vpxk9aGmoY35ntxTX3uXwxrekhoPNEqpULiu3axGw356opnFfxegJi277JL4Pkti5sKXW8QWAAmN7615FAyGMMQ",
  "key4": "GYwbLVzDuTU85dYpBtVQPdUYbVo9FSj3fhHKADqgBqpanZWSz9JpxqoH97W1iv22KVpAmPgoorwmj8jUSiN1CgF",
  "key5": "3xKp6D7rYstdf9PtCMAi1T7QvhiF5g2ii1SPmf5QqArUyKuMWNpxvhpit6Hn3Pv5bH9yKhLaVzr4tuBfZDyVGw4Q",
  "key6": "67DmaEdPE895XYJAmoNeBWowEdUHi12jSVyJmgQS8Pjogv3hkVm8W31b57fT3NxUk46MFHe9Z2oyiqUxnK1ajRsj",
  "key7": "4CYmn7i18yiShpFN7zWk4KPzrdEGLR6Er1W7zBH8uWGTPHPLZBKuPVde7PGNPpAjyWM9KGoiv8T34SNw59ZQ3pGP",
  "key8": "3KSdjDSUXSZJWyYb1qnp63KC4Pe7jbLuGCP7nf1K2WVattYHmirh9nxjnKHdNj5aaEn8yiRsZAHfNsvyqFmk66NL",
  "key9": "2ipBvD3V99rdW1k9zfd1t7ksQXtYEZatgV8tyY7msPxq6xv42KaNL1uDEqaUC1bGVJC1Ec2LCHHedBpyh4CskpCi",
  "key10": "3AHFoTcmjVeqLKL2cTptvx9Zm88gH1vRyeu5ffZUF6t3efC68mXU3jFWjm3egZjjjYs8qajCtuuHiVMqQkntLVXy",
  "key11": "2AbaBUUL3J9dCAHKSQhFJftR7uaZF794iJ164oYHRB8vV5m9C41X9wYeBNcCVLJiFp8Vz29Ardiq2FyN4xSWr2rz",
  "key12": "36FuE11gbcMWtsPhHEj13uVfhkEpfn37dvocNW4NDHTUiS3zKxuCTdopuxhFpQJ79FoQoKnbGK4BvaduzSL33X5y",
  "key13": "3ED4a8qWpBVmxJALu7dwvfTEHGGmb9gVYYksbEgnQ24zvCBp4BFA9NFWXfDpa6PyyoccKhJT8aYseY6i2P86jGZ",
  "key14": "mBHjBK1VzpyYRB1rNDzU9trBGAcjiBZthXmHe2WSsmYTE2ufMfprWsb4999mqnL2SqKR7i7iraGwaJ4QHZ9XpLr",
  "key15": "3hiEV9bUHF2Ai7kT86pPMLaKVKyjMhdY5VwYRYucwQvdcgjQfEbcmahnsoZQrw4dMtsDa6jRRovhXc6D9T6prQY2",
  "key16": "5Eb5shkqMqkVspkCkkS5swD716o81s7n81q9YzRJZYEjwreahfCEC3hmCwgTLiRJxBT6K5VXE5BLsBUZGh1wUpTt",
  "key17": "xvBiryUz75xmrnizY4g7cmKBAeBXpMPGWCf47wzGJxbtBFqPD5JJFkVtZPXgnWtidtiyCjY5bi2xxyzaPJTFfCS",
  "key18": "qMy7StzkyFtHqQMoEsoakDgwhk3dxNamqbeGpqojMHkSu6pvA1W4sVGVtTNTWcQQMFT84RRCAoPkjxq2iJPH8qY",
  "key19": "4DQhNebYiN6kQs8FgtRhuMcGJt6NSx64w32thUgMNGAtMcQYqis3NhN83tXYk4wiUL2nc1soZgPySSAPRq5ZHiBj",
  "key20": "qrCL5sN3memptxnXEY1G5LnJdvEZjkJQggaFCQzN39BsWN3V6arkUN4XZ6GEYPHayn68P7FdUXrBj8eLeiytF42",
  "key21": "2kWxSKxUjXnqy4VmyfRfWVBDxpM4QcXKEhWNpums7xwwtBYyTdWJrSBVP3SAPyBZ1r2qsZdoKgJtakisknuqmQHL",
  "key22": "2eZgpaegJv4VHg3DNeoBiM4iHSkA1ERLBFBqw9F2f1Df9binLfXzvmC4V4fVVwy1rU93AuBASL2Do9BEbvP9at9Y",
  "key23": "qikGHZY6Xf24cLGX9wLPBEgkdLysn7ki99twjmBrtrzBhZQid7yQtgkJRsV7ckA84DX5ZPVwGrTR7eCm6mhuHdA",
  "key24": "3eLJfQnkv293PnbArjzdvsRzSc5vjMCSF1XVf1ctLTdGYkibKhKNqY4rCg6bnoUUwR1qmyDV3QEyFcAKXosHPZyT",
  "key25": "pGxYzpfu8nb4mEmpjKmAk92Fcfi55p2eML4rKbmPuGRA9iYRmxN1Jzm5xSMfL644q3MqM7G8th7GmZAkHNwu2oq",
  "key26": "4f4M2kNR44qVVvHq8ngn62788XhtXPHVsmrKfWfb4Ec7c5pKp19GcpTo24idMX7HWowGNdL9mxy17KzfD9HazQ2N",
  "key27": "35x5sMha3RhWhdu7kib7JmGPdbEshDejnxVfwYsVmb7qKeWNK1bncDm2ud5f9gP88dnr6kc3RykuBJ4LiooBZkHN",
  "key28": "5vYky3dgkp4CSfQ8GA93nv3Y3jdSXAYTc8gGEN9AYqZvM4TWLeARMAp3Qvqgc1gdt17NajuVzC4hoeY4bAKqAVUi"
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
