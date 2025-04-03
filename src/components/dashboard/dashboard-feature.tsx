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
    "4FLUgWinYbgCBDdCE4ZMY6v6vR25eX9t6TT5yvzrPipQevgXCn1xuTgKmdnR6c6F6Ld3bvwPCgF6Wb7aCvdPBKCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YjNAZHAyEhgcVkVdQBT8cgCEN4911HwzwBU5jdAUBCcMmXg5mLEbYB8F7gHmKwQwQ4ygx6yDQT1vDJdzRpcC3sM",
  "key1": "5WLrPTRVU3MrBgfWgpeUnhM6BkfYWnUTHRRrDPd7AaiZdm7nES2ZqTqY2m3sq9Qt2sigQUoxctMW5BALhhpMS5cW",
  "key2": "4J3SNRYh8vHhceviS5yqhxcUd2a2uNWyYVhw3LgCbuYgmZtZKqMZ8Q7EWMstfnh7z8y3cXqdozwBKsmXtGkGeEg7",
  "key3": "5agL9mvZzqrkMfPFV4bVxovpMEJRagtqK3rXiDATozP1X5sGjSt1NxURUkbjHuhvjZGjSnZRAs3tDfcGKnnJiatr",
  "key4": "42QoeyUDMqqaopcJedKSnkoPAVisKYJhgqBwBb1SXz6AW2ZErfFXqq3h57SPU4sovFoxbvEsiugmPp4nkXk3eufk",
  "key5": "3HT7HzcVk9ekA2H47LtxnwV9EKW7CpSgu63HYFzj86REXEiDEtZPhPAK3o6TgQCHuj8dWJbzNuWYyyEfCuD1gM6",
  "key6": "3jUVBhQZ5V3xoeGKxDZpn4F17DMTtzR9q5ddmzJXAPWhahkAewRnPNnivB2WYZFYFFjpqRNqcsXCUTjtgk2a1Lcd",
  "key7": "3P4o8W1Cfvoz9F6vJFZZerSKLT2aqvwVNepyJzoWDq8bSaXRLTTZxmvEBvVvUZLyNNc7i9N36CZKn27MQT8dVy7Q",
  "key8": "5pCEj1VkB4XyQLHc8uyRqmxi3SBjoyRGx4FspDt9QDJgzZoVH2a5FSPGiiN2NshVsbpAtMZb22t9dPAYvviVPBje",
  "key9": "66S7ShjBEmwBJDExh33nG8qJqzFC461dEPXm85icW7TCBVAkq9gNRcSW2nAASY1cVj8F8fL3zwU3vLijYu4frzwJ",
  "key10": "5eSzz4X7VKF8MrZB3oX5ipCeCtPtuc6DhLY5i9nSq4rLDGsKhSstNi8sYkcYJmn8jomGaEQHDKYByTfcEEo5jvKi",
  "key11": "2zDZNxtWjeRLNLUxiJtq7CmNrhB9ib97mq28HBHYyycDnEAMCQ35SiRPuiWvrtjbzmj3phSkxdekakBsmQRtdhzK",
  "key12": "5UFesoYrf9spy9E1JCAMgGmuPBsD3GorQkz2B89TZ1cbgARWRjeumt2bBEKmdDo2u8m2ahEVi7E7uiFVu3Z48Hnj",
  "key13": "2nFfX1WtztfWpMiTt4uc7Gw5S4c6yQXVKtRGBuukDtWaEgVmGBwkbJFSd6zwDT72udSA1nX6a7c8E7ZL5iAkgxDT",
  "key14": "FB9CfygTwZMigQokoddVAa7xZNmWQQQ4ojkkmvGiDRHop21p4iS1ZKer5UExcr1KtWoUPf1t3JdrdtAwvVrMKfE",
  "key15": "5YYdgjHNHNhPDnJCohtUGq9tm1wzLiFwntJ8gYsNhur5z365YZa1E57MpsfvsHkoSesPeh9C3SdcoyFKsjGd2cay",
  "key16": "66XULeoA8v9dmER1G5YeL1Y6eHVBxFsBfVBmJBEihFyfuXb1BCcyAKvufCKxw2ARqUaUCbdY9kNfYjfcuLyJrb4P",
  "key17": "3GbZUGw6yeHb57kGdB597nsRh1thDyLBgbeubkmjyRL9cuPBf2z1CCybnC2F8RM6babLqykRL1RrcsxdhVUZgq19",
  "key18": "48MPQ7Z7nRtTQh71E3Dk4aZRVbJyEq2wtx2c42hvrnwVYXCp5Ecs7fsJMCE2tNzk7tcpSCaZWqY7qA7sdSBC9w7w",
  "key19": "5VL7zRtvJM2sMoaDDVX4Y9F9muDmNAcM97FaBedXu7PstbnYxiSR2eMyhgY7WfQb73o6wJao7o63vSy6135dCUCQ",
  "key20": "599222RRpngCWEM1raftmrpcadm6dV8ccXyQjnrqQRBc2qpqy5M1yzT3Hh6qB28u4V9zehCrnUgcRvPk9Zz8AEfy",
  "key21": "xLA9U1yQ1bmbrk7XuZhMR6EdoKnsQovhbpt7nac8mXBQyiobjn64kwpD5dvznfoswP2SkMLkHvyYRZyV4PjGFzs",
  "key22": "3bvLeD1ydxwhAtsCBxjwqug2ZErLY2LdkNjYkHQArVDvyy8iCSDVmPuC71eD5JTucjWRo33D3Q92DpRJVv9uLEFP",
  "key23": "4EQud6e1Hau1Zv18srmrmBEhhX3rDw7YUpTyFd2SCBUoLbBDzfjqw4F16i2uSwfypSb2d9EzRMDkD1c1jyJWef26",
  "key24": "63RcRxUDd3FEbj2mdH28Cs23X4f7mCsytSij6Hf8ADbYLXfnteysgo7kGtoomUGAXw9p6pJVcSKacBEYY9J7FfF8",
  "key25": "2zTfvpdhPNdQ7nBLWB2dKbAeza62bcsTfhTYJyMnqPAjN1oUF7zRXYyQj4xdw468UePb9JavQ7msNtL7hYVUVEHK"
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
