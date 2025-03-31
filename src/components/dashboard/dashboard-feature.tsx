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
    "4Qpa3Bv6WEwgEJHSyviKU2mJhnkZcp64sEMimMS6aHZDVQA7jCZhuyMPWMPfm2V3K4sEN4Acz6a5GEAiQdGthzYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26pgH218bLoay3zJknEjA53LArnPjsBvJq7JhCwRR8yVzihCBCGEgcTDEULtjBT5v6d1yufeyYvxeJzKH94i8L3k",
  "key1": "3g25LsiGws3P22kLkSGabFkaorMuzoX5ayGBjvfBg6Yd7kFx2ZodpCVjrXhPv8dENaEVDheSEoq6MA5cMYm8TfGM",
  "key2": "5iaqCGdQBCi239g28gKBijksizaL54qchHnF66FGznX9hsDxXHh5ULzgJvbB3TwvdTc3sB9empBKdtz266gs6iyJ",
  "key3": "VNwgriajQxPiNZh2VRo9oxoFrjSAZvXvf8eAG7BEAzASe5dfmerJbvFxwBKxQt166SoeAJvae1gcej3s25kmZDW",
  "key4": "3e8oCcK8hGX15ep9CyzT2URMQDquSG6baYHZoEBbrmZU4SHkZLsgyh2JWwtiEHrLWCq1HkrSXfWsJoEoWDaRS772",
  "key5": "2xqLuwehB44Mv5TGEzakSPtjCtP3WTgWxGuU1vNuTwUNFbLUGEqcFa93gHaJgChgEK4qk41vD3uvfGYBY6chzJR4",
  "key6": "64EeUxM9irVem6G3t2KJ8gWusVfetqvSTsPM5Ds91a2uLwj2aSYYr5frgZq9g6TRsVuQfGuibMJMtTdVpzKb6Vam",
  "key7": "2y3Dcwu43n6NdCFbEuJoTQAWchYF9LXsjAtyt15bhXC1CZNnu5DbBw54Hk3fprRdAMjy66ABZBSYoG1ERwKvWttp",
  "key8": "3UMkysa1kTtVi1dKcoYxCDz1agtfXUYCc6AJSWus4STHVv5UHB6u5Cq1MCYNu8AzWnhQwuihcttfVKkPNn65BJjC",
  "key9": "5jcCrhAVz9tbcunhFxSu9gTSNXiPeEGVVosMnYn9TyERkiqK4h6g8ape5CdqN2DPUbgikGm8avDWSeAFvvU3Uy5Z",
  "key10": "5aXfEY4WyoTiUTgSLvaeNpbVfBAtsP2JS5KmsFLtsVNVbAASZaV2VkokRtsprQSpC4vZY3iviYaLWYpog2LyajwW",
  "key11": "3VCFuZzMg4R8uSGqrKPSk4tEeLfFGPEYxjBE37ZNurcKdNKQMRo1zicQsJBDj5wiJ3bEHWtM5VaxD2QsxkYob2A4",
  "key12": "3Cnx393FUxo5YXYddLfftdbmk1AzivSk77npnDdte1mqCPNugsotqQxfCKvdbveA1HMTLFr7DYuixxEPD5BYDQcM",
  "key13": "446u1Vr3exuMp3XzBzZXVgRLz3iLcJL8FxNdNjP4FoYvQaNJTwdqniRwPGHNujusfsRXT68YSaJJWRjSsH4NCXov",
  "key14": "33asN7PhDNUJJxbnfLdSn6Fu9onGx62BRstfRvFpohJyT35WWVN4sT8b8e9yiST7tE1XXwZyHaHpAA6anDa2Yg1L",
  "key15": "5AybUXWdr5e1sdDyY9nkzWGQ4YvpbGPpeFoqfB19WFxxgH7pRryiSAEQfbQe6gYLmWkRFhhN66sAVa3HquweSgZC",
  "key16": "4f1YHqQ5DAuKSRXDDcMLj1pomqGGmiLBJQjFtNEmJcRbqhLYz2kaN37JpcSx5yanv3Bmw772LKfxQbrziVhW5trg",
  "key17": "TWwPQhnkXLkmu3QYzZYYC7aGSmRGqUwaoq7CJWMg7ugSFLAwyEYzrbR5cWMqk2P8RC45aSyVDoPp5FoRRsiHrHs",
  "key18": "3EktD3icxMRoqcatPdoB9yzVTx4bCre8vF3yebjH1YcMcLMgaFMHGBhVX2N8AYMoVm1on4nFdg5YiiyFWwxaFEGs",
  "key19": "2JubriR8AtpupautyZqvj2yjBZ8YjoKA29MAhWxBE5RTkSiJfcgftWLkoTZ94f4djk8EWXygRCULx4ULdq4Jpog2",
  "key20": "2ZqgVCuvtce2GgPpFo9w5KsR2CiqbTF8b6sdC3pqFaw6BeihcVrbyXLk6E7FrnCXp2HJ75C4jSVRvK4YbuvoLBhd",
  "key21": "2UdUyNTSMjwuE5oTkdYRmohykLJB7ngMHP3T2XA9MDzvLkfsAKvJTyF19inNbjVYtdKZA4MtYdy1hNJihMjzrAmJ",
  "key22": "nBVePLYTFo6uSu5mTeY12PJpHJH4ZZJbqhMSpNDYvLrgsWAsKG3jwZW3bNY213AJKrLJf2E2QGfBv7NfQnMriDc",
  "key23": "mejqYLb1MNNwGaFBADwRELXQDyMV6Rx6VdaxwnDBaJnPYjtorEtcmxmsBBi8N92bazBjZSoVBwXbV3PfsfqiYWg",
  "key24": "3ozF3MqW6bZbiy4zKTGRV7FSLwgGsRJr1cNypGRMrifF9ZyhMPv3TCr8yix2XW7Q5vEDm3Cuy53aCe7o2JR5ud72",
  "key25": "4VjTaC7qNTqrQ6pXhWdBgsHUQvm1Ed6BLmuXE3u98FACCGUvoewCUgHhptrDPJedbt3R8y3bwynUUKDAA2tmFEYo"
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
