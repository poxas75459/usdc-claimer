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
    "4DLmeV7kGzSMWZvgQ2NXNuG3vzY9aLBhb3gzbQA7h5aTqsApskaiVNofeYnJd3WPWQ9CPSMWmutXJGiYnTeNuYnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66M4dNqMs5k9pUQSjZuw2XNpnLTjGuDY2WTssKj7W2dhBfo6o7oAFziF9SyCZEBVczMs7BhBede1f4VFUjnemgRy",
  "key1": "5zXRfuM2oXTYWE8nTQABwNhCfzg3RG74pTftswGVhLNdyUkioPHTCReFgzQ7hQnTuaJ4nEDuYHkAjNV5amvcnYim",
  "key2": "3DAD762ZMQk1pZE9igMYXL687GbaSfFqcb7YWKQhZDBgvrBoPbVhzDatDhyBDui3wLDJWWdeWowsmMFhFZb54pc8",
  "key3": "3Ym9GRfHCYDBwmiKXYv3GMPrvMUMJbtnC6ELNApGudHiWXne7WzamDjNEWamgdyAgJ2z7762ofo9dz8hoNDVy3bx",
  "key4": "4Yq2V64qjYJDPRTC6wF2iTmwsp1TprUCdnQwjDYPVCPRSrWyQoU4tnqsBmhFBckeX6F7qPwYg5H6ejUBDFztobTS",
  "key5": "5VvvCYSzMXpx42FWGYN3WFGPggh12mFrbsGppLZuwxctfzbTRB33dMs2nc6i2pYSvjCb55vehoXnQRLLVBwhvH7k",
  "key6": "HFmTwuajpdR9m3WLethpD5rvbN9NT3rijNyGPh6fixJKw2M5oSgrx23JqXsnjWnDtZhL15eTy4Mex9pXK3whb73",
  "key7": "5FeFLFhWcfVCHucpZvYvt7Jbv7xaGDLDC2cDz8Cu3NHLoGEmp6E3x1rB4NGUZT2vB4v4B9MT971VmxEkQyh8Bf1p",
  "key8": "5VJJedp18ypoFxGhbosYDrcpkASRNm8hsskdDTh1NJ72V8furbr5qEFawAFW8cAwzc6FkHhbhQHZPa2pzQjxR7Yz",
  "key9": "4aC5RJv7A5ksWiSe4PjnmEKrCsNRhQwDeRvZbpubutUaQREzhKPm4wwft11mLYw9ZVAaQ9Rgrdvbw7aX1617fgYo",
  "key10": "49rykY7zSWAYJ8KS96XL9xvzgu98L9TTrhGZiCEf1uKGghg2MdWYfsn1Cm9GHAWAg4LneaU1uabYPjECrmhT5HzW",
  "key11": "5YEa7My7eBuGcGoFbE5Rx4ko8Su8VGc2FDSkRmbaZ8ENJNo483CyDgZqJraa6tuFpqzeVDmuzLjFemr1njHYcAmM",
  "key12": "37i94U7ov5G9mMhz3BKK9PuaEE8UbiA7PtgSmGLxjTxhKXhnJgDYFNhm6ULZ2PrJ7SYRBn42mjGx3x2T4tUrYSkz",
  "key13": "33gx4vJCZ7y3LVfB3ofaQoUwmSQyVVPEpseM6dmkyrswLwSVpAcwK12X66a9pxwDyG3V3iKHjwbHBaJjpAxHBuqp",
  "key14": "3xTe241bn72NdapPj1a3QakLjfEqZLZUCji7boGEF5EeM3m6kCfAuz9NQweYfnsAR2wUmyY8mEzkTiuNaGyKvPBN",
  "key15": "39hxRRiwHf8Sbg8cUVbvQDvAnbpZeboK7UdxwtQeYegpAnjHztDfg9a22mFZXqp6ZBJF1Q9qGyq9VbC6D4qHHxdx",
  "key16": "5hgTV1nFZJcvHzAQMRk2i9kEy2tsiaHPcoUk7r6n2XooG85yk8RToZ4qbwXA5FNNjtfWtUEhVgeZf67SKgUuw5FN",
  "key17": "2qeTQ87LbXyRiyw7T2spL29tusPLGetsjsDW5CrND5Qq5ddGRqV59quPSJJgK9j4DSpLmN9g6f21dA5gqGNDSvtg",
  "key18": "5iCy9xd8JtaK64C6b89Hf3x9wUtDYtr7rSEReJ2t2NcDDuRmLwqhr2Yf7U1UwskDES76v9AJugbAZe7wFhRT9J24",
  "key19": "32yk9D8FkKomEY3W49LLGaZ1xYZVyhWnPB6ggPNroEmrc4SNNp9SpZziCYyNrrn8wKVFknvSkteGN6bVJFfmFuXC",
  "key20": "4xNKRJuf9V5QVsq2CooYyJBFYWFZ6eqw4Nz24mCDJNKp7Hve7U96jE3naWo93gyzhifBquW3bCjGrxjFTTr6XqYJ",
  "key21": "5khm6TFkaXtssDmrmMmgmAz4BxeAeAxhjh7cPbEjPRv3SMRynAEGcbxQ8sunPWxAp1K6RWZV9dkE6YGRwKnitRCo",
  "key22": "3dVaY6grq6LoPqmRXwoqg7GSU31YjADmFf6mcMeCjdjFn9zqiUYyjLqdZUVvxUrpU3HpHQXqGiB8saiHArRAWjde",
  "key23": "3rNRzhiZyYbp93qmguz7MryWW2jHJ8QQjQLg9NFyBtF9QeU86FJ12YY2n1TvhNok7NXbDkUyGJg2prGQaprnKBex",
  "key24": "4i5rLR9dparBizoaaCZ1dVsPtgq7AVU8aLCioTTyAsPzePVfNRL4v7wxCnjZpRxWNEq4G2QZiumV3mY5Vn51Fn7P",
  "key25": "4BkFZiqT9bVRTt9N4187WfWmvQhZQceyweKJvMRRPgubT5KwXj7D7W8SmbbCZDi6SuG4dYRMDGarkiai4mwW6TRi",
  "key26": "4CPTBeffE6QEHPAwy3YupuQqABRxwdxbPn3xZby1KKQrahLivHcGHiB1Q1NwJPECMgS3YW5Azw3EVUYK4NpWnmzv",
  "key27": "4qSxDMTVKkeLqcbqSRVikT2692APC6HW4dm8VN3z6r6cEuRZ3Ty9BPU7J3JrXKBstVFxqvX5JNXr2nfPYA21uqou",
  "key28": "cGGkL1d1PUH42MH5gATZzf49kUSABh9x1e3AJEZZM24wrHhiEzRKgBTfxEghRCDxG47vPRVAgfSCkUhtKx1wc1F",
  "key29": "63RQPUNtXixurSkHzW2APmwKeDUMYRp7U9Bdqjn568ciWH4UHUWXZcDbMPACVxhnybnraWRPJZLvLRtCsF9cLh9e",
  "key30": "5rkMe6NzFd4psbRrF8WYfiNQoxkCz4j2gbcGZ84gtCJ5zMYYKuYk7FwcR5ZWK7aWadTpUwGhiUeJLt3nSwQCvSw4",
  "key31": "aCiA8cLca3RNW3m7g7Ny9bEAcrcbTNnFUhpiRKW9H2kBwodc7KyqnnXuz7hQGj5ZnPhzvuF95gZoHFgNQVHRNUh",
  "key32": "2zJAjS2u322MY3MXzJ6qgSuK1scRPyHNWJWoUToXj9csJ7Bsmip8fYzJfP5rbPMYQGmuvywNEX3yzj65pB6yh6mk",
  "key33": "2VnMXFD2MpaHimv9GzESykpDkf3A63VNdzK7J9Mnd9FQSyLEF7wYCbVCgtNQvwYJCZDRu31UhHjnumLcmuyHPXuK"
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
