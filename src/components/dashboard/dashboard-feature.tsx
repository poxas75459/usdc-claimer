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
    "4RueasAj86QNMY4NQ78b91YBFEKSpyQxi5LFFpD38qYdPgN7AY55XyEMr5mTbi9eTPq2zHqm136kvi8Pbye32SDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CPT77hs8xoGJKHD3fdUC648tbKwkFhEfyAsTyyG7a1uFAjmJXXDA9ecqY4gLcWDxaV3A9JC95GFykZttk818m1u",
  "key1": "4skb4K9JpPyKwQAZrFv63sH6b4BMxvGTDD8khsPRTEnkQCP7aNiKRQn49Wvc49VyBwbmCuKNxufMCFvtuko9qqsM",
  "key2": "MtuSUSZpgpmPk5QjmnLFrShMD18unv8xf28G3HSTiJGX7dZoqBMsbRzkPdvVWE5wLqfR1g4jBB79ohjyizU2kN2",
  "key3": "2mcc3zx5MJ3shgrJynyenkJ5ZMvKkVBEySphebYPhDU3xNWQvFb1jCWRuo1adq3AhZbNHi2BrYt84FxjigVchw3W",
  "key4": "3EhnuTnGfW2X5qpJDE8wZZSk16YJxqMpZ9TqACXEnwonNJ7aT9XMmkHrYQf6238L647ZskALhutJ3xUcP9ciNH1X",
  "key5": "4juQuqqEB6wPw7ndTHfuSoVs21fALpEUe17uXx5V4GiN6dxKbduPVnHykBLaeYkRSVvgHccjWqU5dnvtBRdQVpFx",
  "key6": "4m3CBQvhzDQ59ErM1MeCbv9fx26du5AS2K2XoHpjWqDdjWLqsTCsDEidK73tFcaqsJb3fSBuf6TKLJVt3Pj6MHoM",
  "key7": "4TvNVL6SQGeCesBDGCxZpEz9ZJ2q8ChGzLUJzjkyLMRd8LweioJRzhyBg76GyxBsiQESynqVnDpVg6cns7P7rbhP",
  "key8": "4YhLPXSed24muCd4psj65SdbjEXBtJLKxPe7Z67jgHpRC6Um8cTNmA8S3pjihUdyGh7291SM3MLKpGhpfnEukunH",
  "key9": "34iFynqj4BukiUbovZ8kCmyjXWCwHN9gFTuqs8PtREq8mEzbnHwzFjnuAMoSv1oupJ6TtGcjLgvHZpcwZYL89EP2",
  "key10": "C18XaWtJM2KtWF1ZBhxw4AGrMNJqSS8FHVDERRSe7SQVMvqU1WJdUePZHi45qtV1jyCypRf3XACzbyiaxuDa2EK",
  "key11": "uBsxAp65ozwrmMQLBuWB2zfmUUGBRk5HtjK2e9S3A8UqEGShoyZqTs1aEY96i5MGUHnhtL7c4GBRB7GqBXyGjiE",
  "key12": "45r2npGgRuJRuQkWN3GTBSn1kwNidN7TKe7XNFQ15S8J1NCH97m2ovrpvaY5Mimc65UmRkchCBZQhcEeU26zt3um",
  "key13": "5tLeAMjxPgy4hiJMP4GhBAQksXpqzJbHkTLT5B2oxzbgc9wgLkP6zab29hvKZwWw46DCatKguSHx4xMGuYHuovJH",
  "key14": "uH4SR6FdQbJpGMeyidSSZnsUrrVbeBKqXFBttNhDYEFS1xAqie9ZbqX4ULRe5BWYpEyqMyFymzo5SYwrTiyYMgq",
  "key15": "2ASefruGRohDnKxGnxHtDfBXb8jtoPJaTZ9N7wEUAYgAhEzdDRPSDtxJex6nQEoxayFc37N51xqBxERRUVUHg5vP",
  "key16": "3xkgEexhScSRDkDcU5jcEuhdoMEFhYntuX5x42a7crtcfEX7FAbVMMfqprg7HFG3Q1Y2DvjTknKFkbUwBit4KWCz",
  "key17": "3DEgPm8YLLX1FfMCEGnZqUwnFiFL4C33CvagZEVEV48cZrWNtT3fuZZrQEufY2ztosjtHijXzwz91BboBFF1MThA",
  "key18": "67HVzFzm5wgj3U3itSyUDBjg2xu2HRVVjBTmi2bdhQ4BjsTWL9kVfecTeukkiBt1uMe4vCZiMbuiH5Uh2Poks7w3",
  "key19": "3jCNYkETGYu3zkgMZJoDtZoPwWttwj1QXsrrTHErmNkCxUiyNWZ3NddN7ij5rJBAEPWJbYwDLPjL5DsFRWrrjwf9",
  "key20": "5ns6aUbmFgXrFw9s7qDCarevE7Vdr7xAY7JyX5DJJ1sX7TMeew1EAo1FNRytHpMUiLFp2sCQFFSmsXxDyDuPz4Js",
  "key21": "22R5z67mwu3tnhRvZGcMHdiNvbxhRD24vVYCbMKXPTWwXeGQH3yyMsDKPh3v9R8A8Y4HaY3h5DEsWmfvGyb94c9A",
  "key22": "4vxkzyezwUyXd1p9THZ2vnrUSDaVQnZzu7eeQhLU8Uv6xifezTr88hyohiJfpRwvR1YPFJMJk96UsdjbPPmp424w",
  "key23": "EkL1FpB9jd6eNgZLsxCHWooNFX5LXH3m5vjQq13EwTZf21QBDAcXGZ7BxW9E5d3aAPAk9YYo4jKDwPkoHcoBJWA",
  "key24": "5fPMyU87aJVLhx4RoUUJqHhE8vUypHMpnfN5pWmhKqWwMeLm5ksL6F5NoV4Q58SgsJj7kLbvSaEmFuz7L1Vx8YRk",
  "key25": "5H4Yo3V8JxA3jrDhPv1XwVx4ZXbwmq6CYEvzshPQf8s1ySjNb8sBG4DPBzdNtMUpUk2C7eupHyKGgjH6SuxBdepH"
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
