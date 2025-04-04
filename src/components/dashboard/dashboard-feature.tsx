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
    "286GHbC92gWNKSYzviqL1du3c6vMLz9U8KvozNPigiKTepHvxbBmzgdHPiYConskyQqyMDZjkTtp6BFSxusvsCPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TujhYVtxZH4AL5mrFdBofPwSAcXm6bnpf17pLcX8nREkY8vMMLzi11WFbrXR53sGvqbFKFUqpvzSqc5pDV5c6E2",
  "key1": "52YCUdchBUtoGr1b5oJkhyV5P1oNgoGJnovmHM7no6Qj5pZZM9b9ZRjoKnEjxjTeSugqQbaTL5Yg4C9Fmc8fpsHK",
  "key2": "5nMHwNFhDJAd2BFncqntbi7jRsSUc57p8u9kiHqKcpaewRAcc9w4T6WwQqK3mCg6JBPRNakEjPNgHM8yZwuRo9m8",
  "key3": "5W5PRHHHvHt2WhQqUobDVrWzs6Bgo4oRQ8rhFHhnn5DeZz3bnGTcCVRTE4jU38Ve3nrus3zFHawkroyiqEn7whVT",
  "key4": "MivKyxT6eEw3eDNhUutcxLiB4Gd5XnQjD2wW2DQ658Dy3TdDbJvG3qzuFHDjwHfF5yki6GW81icxopnq9t8tuhj",
  "key5": "3JGFrsf3ygPJBygt5TgyMmnsUT5Q27JtbtmJxdLZrbGA2LFtjRJTQwZBeykT8feQXxmpZLbdsaZdk1GtoJEB4V1G",
  "key6": "42sECtPGZXZXj2gGGEihBTJ4CNAAjxs4dATHtwvAuoeGHrcj7mLogrUaM8GdinYUgNnuW3prkBmfqrmoKyGE194f",
  "key7": "6JwVEhVjcB9jJWmWjJ8XThfdQkjqfAsx9tgdXH54v3dv973bKNtrKdA6FTDYX7A49PjH2iMorDmqZ68J7yc3dZv",
  "key8": "281P4VmfhY6r9ueWh4ajprNidX1JtCR8AEetq78UR4mDrZnHSFAg64vFz7a42c3Uitjw3E4LzptoDQPY2QUyxKYv",
  "key9": "2ocovop23bEf269p5PuoSGxP1Gv2TSJHiCf16wR9cwFsupYSn8rZxbuJfDDVVwEs1TpzAdBfkiz8CoAkEBzNzauP",
  "key10": "xkyeECzYzJPMLpc5eeX33PacWfHKsovRM5eNjTVqshxekYWwPeNY9PQ8EBbdJhY4h7dTK4K6EYf6P52CVeeQFCn",
  "key11": "4vcvrSyHCgWs9ujXHRjeRUGuiDFYq7ethRWiL6zqvWnK9nDrV3U8doic9br5CpYpPyq893uV7hrSqbbBhopTYuNU",
  "key12": "FoxJJ2axUZBuBqKdmceNzRHkhK75Mqf3tcgk1a1G8Dkpy9Sd3wcW6z7GqzpoiLJmgpQM8CUT2DEB9VSic2Ueygc",
  "key13": "4tezF697XFH67TU6o9HPKVzRQ4pV1wGinohJUtyAzJronDPdMTWeK2EiNACcyrT1X9LoQiHb91tSLGps89H92Mq4",
  "key14": "5ukkzQHp76q6PQgZLLW8bhMQR3euAZbHJg8uH1cdvDXr4BZZyEvRVnPnYGpPWovqHDQxGzkfnsxk3p6RxoQYe386",
  "key15": "3hY5vP5DMfybB9iUD7kEEeF11vuSUph9geNRLSYqQ8oYAxBdTM2zN43JQAWwwZekWeMbRhDBCFjaqU3X4jCNLnNh",
  "key16": "3cApV3Lwfiw6PYZL4jzvZKkP7KbXRxtpHdP5Hh67T7oL8AVV5SFoCZ5ZTsVQzUmcuRWQq6CdH4EFWX2TFKxCe3gv",
  "key17": "2dqeSdQUsb94HG8UPEVq3dvHVgbfHjxjrKGmg4os5VH75nVVUmDoKUnXY9ZFSjTpZ4iFajqB6n9hnvrXgo3NQesi",
  "key18": "4c7xPD1q73dYMJn5STwceqHvmzdDTWjxggajfvqHpVarxD5XwGY21p52dt9gH41BS9t9hZsn2Mnix8mGU7HBVwhV",
  "key19": "6axasZcoYUj6MPJGDc6gdk6HqZvQZ7n7w5NywBexN41sy9atuk4WrmosrfeK6nPfQVgqhmLJWJywnKmSHMs4Nm3",
  "key20": "4umhGyE715QTbL2A445QmVtJjZn83gR5dN95vjYwviEnNaMfDnUAy3esyEG7y1Ak1Dvbv11MbS8doGZDPawZzmG9",
  "key21": "xKEQvvHiAJFjhjGScxBGQyawcJGGCBkLP3Rw5pMfDkuMVHod9NRz6FnfFSvTe6ymR6mV9fkzFQtPXitCjoxLUMV",
  "key22": "29CLMkSQzVDWz4NKWmWGaYQkBK9U1DzL4u579AGZ1kMHk7jHN8dMaoeV6KK5QBtciqpd5Rf6TjNS3t9gTXDw1yzv",
  "key23": "63wQANWyShtJGcxmfxLW9J6CCGoCg23v85FPMMX6tx575VtZVh6pKAiCaxmM2RAznsirzLVLMGK4ii4VEQ3HMbdM",
  "key24": "48vDeJgiMLu9g2Wiccz1TcUTBaCFpMXnv1462z78JuVfjqq439KHsb3BGMthWffWH7M2SEb5oGrKfbmjm9pwHxhH",
  "key25": "3oc2Y5KM5XYmg8yhet9MJWNXgrZ1HFxdFGfrxp7DFiSt2G3M3bBVkREk2hwp1PbvrvdaPTC9p18jzoNfCkPGfAxd",
  "key26": "5vb5hz3sXVy55x5A13Jw7AVRsbvxiiu99vWN84UQ8nJoo3k2eQVED6Q82o2sfv9oxR6UXb6NfHRy5pEdtk54JhVp",
  "key27": "3FtaX7hG2nXL5Hbaxmue3yFi8B4hSXrBQWD7debrv7tR9PkhJ67UXrafQT42DKk2cvU9yjKAG1ruw9RYnMAnm1dW"
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
