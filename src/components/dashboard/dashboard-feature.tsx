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
    "48ULdwt5DPq4puPQ4RCePQKDTHMa5wqXE5uhKMDnBFyur912RCT8CgpJwpRXWXzaCFYPV29HpnDmBxYhUpXW2wtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s9KAhTX8tUcJqSdwqsu9neLwjKaZHZMXUjV5bKCt81EpSaYUZFnMYzvVYM1Xcc7P3yuVnsntAboPEsjqKEx3Zgh",
  "key1": "64X2Cr7DeGbNWZPsRoe9asGJUp2kKXGdPsC4sCHC6pyKzxY2DgVSiQtgXnpcZf4p1HipHgGNnNeKjcL9EJiE3QBU",
  "key2": "3nDHnwcSVoiRSrLW9Rmx7hV8phtrwTtM9cfijoMtkuz4NezsL6fCm7YytZgPGHe4fN8VLEuQxio3HcLg2CMYhQHz",
  "key3": "2wnXpQBNBuCXPjYSfDZmuvJyND2J1doU4qsVDbRkx3dAYfS8U2orojG3BHzPEBeMzknPub6PkXBX8QJYsvnoJo7B",
  "key4": "2sLdCPrmtsFZxxSHMwWeLQDPfh2HvWZFdsYZZkpSuTTgnTpVDXsccaKoya5Vqv2dTMaRmbNmPAupZBwo3v8gALqY",
  "key5": "3ZfV9YcxzrbRQbgvFvcWSpX2c77DPp7PWCnogdKvJ1jtiC53wPYARJSNibYdpbBSf2gk91sLH3aDpFhitNKYdNEy",
  "key6": "28RUwsQypBz74qTQZKGc5bEJvUFJwuLbUevtkySzjp3XdDUQZZKUXzxSMvc344WzsmLBEY8BNZ2ToAsniz9r5oQv",
  "key7": "2PM8MZsPEBoGvUVMTY9ZHZyLLsGJsQUpdGL1zrriMQVFGxaDzfDXGqeHLVEDd8T4uGeb2YsVuJZCno621VUFZrTc",
  "key8": "EHNrvusdZhpiR7fAe6ezPrsSRbWCB8FjC5DxE6ALdKqDdoS6HAfEL6u73vaynwZ4szXZ3bRvffaJkX9CKJ2cgHt",
  "key9": "vEn3xSyFWRqCAh1HpLXXp6P5p33DzxqSwKCsWkkn84qmxmUVpSoxhe295GaFKH74HRcmi5pL9phew8khtwMWA1V",
  "key10": "4kpHgLvqVqY7vcodf49ZrLYibbYHzJmfbzpH8k4W193DddRGLPtYfV7UuS2gEjCyUya8Y78P28hAGA6arDitLMN8",
  "key11": "2xH8hqXtRoUaX5UVHTdMxFd4RU261xkFYgmg8eiAC83Sc9PGLvk6tzRz9rsMtYi2P56cGFoMHYo6UQyZ3FyviEd6",
  "key12": "2u1hfF83itdau3ZfSanFTHoJJSXNkaU22zkZDjrtziYwY14unZxiJ36C17V8wnGVFgHBi2CshZKvWpTQGVuLXmGP",
  "key13": "3eGQB4Mw6kLPEiG8ydd3K2gsXPvBFN7fZfHx44HgQpn6y7SJ8yRAVdyFHhN1TAjcUtGPmKmD3Wazqv5HZXJByG5X",
  "key14": "51jhsUEdUTPabu6LRU7quKqSoDuv3rigVccyF9aBF2VDXkMqTXFAyD3xkgaRVeY5Pq2Z1WU1BGnhaqoACVjK5NJY",
  "key15": "63Rd1UVReH41J6Fy7Sz25s9ik7SXYWTuMKkVx3TAhhsjojceMhQijVSRpYdNVRBDLLV9XdJb5xcDB79u3SQUjNe9",
  "key16": "64WSm5KosejCxyomk6uxrfzcW3GPaCV4j7Wnv8vE1ZhUtn5sY7aRPRYrghMytLLFkQQ2tQZFFksdHiAWHja3r8iE",
  "key17": "XvPETvMQuNwrSbpBaZ7b883UXeot1QqzCRpVDpsK2tFitjvFYBka4eMguk9bq1VxSfYX3BfwFtY8NtewRCPtgoj",
  "key18": "5gVXPNDiaotEsmdQFJwL3PfhkrPLXPn6VKQ1ko2gXM3SmTjAyDkihfp8Tguegv2Sxbz4xe9TWfzx2i6RXmGQMF4G",
  "key19": "3ZThX4yGT7sArnGZzFurmNMf5VJdXtavTGbrdTQKF1YF8stQyiXGakMfeirEHe9N8dYFkYx4L52AbuiyzRrdYAsG",
  "key20": "Z4cC7F8QwtXQzTnZEpHiS1d8kQ43MTYSoGfaWDfax6QwbqdiHEUkWKe2rNPRvZPwK5YQabzEZ2UE1ifP4perR72",
  "key21": "zcswdsyPYPXUqBuGcBUutTUzBSRVoRzUG6QFhCuG5fNBQ4eyY1PhWvDp5WkCoQmNxar7oScNnUHJah7p4egyRpb",
  "key22": "5ZivgmsauGeXxmJqNAr2suW5akp9AbsH4td45j5iSvXQCNZjbxheoX2MaU5XXgPviEevZNcng1xHkjDS43wpM4vx",
  "key23": "z6iTyURZvrQZcW66q2LnGYVJbu1zfWN6v5HbWkdiHepgsxmnECxkzYYNjZbQmo6UsRFqm3Z4rABiG2hPXZekTY2",
  "key24": "3RZ2BHpLeyySkWzSYUdcNzMV7DWsDrU4ivrS3x2hNRZQbAPZUoZwJMF8Jn8hAnRNsAoFNMSGbxXcwfdsBBPEUpqC",
  "key25": "3NsWUF9o6cgdseBtMnAR2yWShG4fGFoEpEFM47RgVrFCdpysbeJCWNp3UNV3KKVDnGh5qt6sktCYGzmp2fLLgeBg",
  "key26": "aajdX6kYfSmFfuMqnTi31CVrMa9MKPjTemJ75Y4wKwoq8NSXtapsa165JGhXBaFY8svwLMDuzk1Z8kGS1Dx1yoo",
  "key27": "2GPUzStMj1qCYZjvxWiX7q9F4XAHxnoduKibkWadZ8bmzKgL4h1mF8tT19PVeWJZix3gqXS5eBTjvSR7DCz5mHB3",
  "key28": "5ex6eEWMDhg7oPx4iNSS4mqL2YPkQ7LDobsAWRiumWVHXTE2KZYjnmyXMCGegsWZfz73gypSQ9vEs7x4xX6rFqsF",
  "key29": "5z4iKZ5Yt38G44SmWK7TqcTqFCSwhbCH3wN4NKw54CdBXxhY3aVr9TAHf5YmqPQ47gE8BQuBjNZTKcJMKJcSJUN5",
  "key30": "53zGAUM55PHvhPpsCt25brptXXXpfw6152y6KKEspSbsYesXSYXjth2SN92VznxzcqpPPSHGVV3XfDo7jbQKhti6",
  "key31": "5nF5oFPyUHRfZ4q6BCF7TBdTyhV3WgySVHWNpNsPp1dB3sJ8aphUXvV72CwuMDob8k1oTA2a5qKTqZf4FaXcVNor"
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
