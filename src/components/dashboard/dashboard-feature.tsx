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
    "4F8RLL8tBD49GYkJwdDV4okxV2A3ieUemqmtnUzp3WtbETmHWgM5deS31Ak7J5vY6ToR3ZCtNiLMuyvkREXaLsvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XUFYn7PCPn1mTvXsKB13rjkqPHkoQDLLudyhtfCLmqvwRbMTFi4DQFdwkASptXn71hwWBXsZKaWNhqwpvDmK7sy",
  "key1": "5tqcAwJLb4ah13cMb5VoTttRCgHf5xD8DaeKDvty3LpAgKuDnFXdmx37M29hgDaPoCdfzdE924KPQfYuDt3mXPsk",
  "key2": "VXxNH2dq6Ar6u8QnXbdFB12ihXVzUTe3pje9omMvdwcjNUhfTR8UesisvJRVrxVCo5U6exQ8J4cgnLk2Hvakro7",
  "key3": "2Yuqzxm77JpZjkmiDNn88GVA5hoRtjRjvpALCmtjXHgwxAAnm4GaD4foSe7roZKj8Ffg7AMQmLPs7PtEAD8oRKPK",
  "key4": "wjdJ6cKniQXvjVaCYyjPm6g4LNRJajc7CDTURJx4mVaft7dgv5FcM3Uv73PMe22E8wb8A5MfGSUaPjZHeYfso6z",
  "key5": "ecfjPnJpjtMjuVoxC8eQdWWKR1pzuFrV4MU3R2rQ4gwGpe1NKcKsaEpfHfYmN2SLwJNrEtmLL1jetGLZanwN1zc",
  "key6": "5tNa4xSjb5BsuKnLTFaHw61gkoSquAsKQ3Bjt2zW7XqhroK8LNo4iznjRy533cJ7TnMkKvgsjXgTLbTFuyYAWcZV",
  "key7": "4pFkZCYMHPWvVgWwUsPmgJCF4TyXWsSYHnwFGvQ3EEjKq3WSN19VDwu4WqrMicN1SpgARXcYnEVpuCPYpreBFCW5",
  "key8": "4TsKdqcgFE9WHXoW2m1eSNjbWVLkGap8uYDS2iRSCb4scSYGCdhuYNUZWkfWb4kuXMhFVQXuXAS7bxn1Ze9PdoCm",
  "key9": "e1qpNPyEeUP4KPQMFgfMnCkfDf4hAtQGzXzVAEGC5huaPZP2g9EKnqxgK96nyCAx4iML2GsmWZmmB5KsCxScaSE",
  "key10": "4VkjxUwqd35BzSCxxHDjS5code1bWhuf9a9vmiLW7P8zvCjZzt1sJXLC1dDtzbqkq6BAmxaspqdHq2XbeLbUNakN",
  "key11": "3t5M1ga5MPWSNvQk1YVpyoRdzsMDymvtXU1E8ng7jGifT7uMaRDaWy9Hmdu9xqNy1GGhZcKLZnzv48MbqDJ1QUFW",
  "key12": "3bTUZMN3PccUEvpSty3aVSA3Ax8gpxpVJvz9oszKHrqJhCFhj6kVrK8CMXCDma27vSWLTaSTkqgpDPHDjxGsebWF",
  "key13": "3Bf9tFLagTMyZSUnzZF8gKAeUcSJd7xy4r6ArKdU7CcVEyeMkLQJbBEFJUn1DU2XsCk8d4K3vr61ysWF29FPau73",
  "key14": "4U4jM2P1vpzLgMnUEvh6XUzxpkasz2h9QSXRmUbk7F2qnUyZpye9byixMsh44Tp8uNZL8idxVyFFrHZ1ZqbdWNM8",
  "key15": "4j7jV9MafqGKb45tLeEBqNpu6tjNCXtZDryaQ1vv8RjJJwtwE4HvvU98EdVSXeTzCtLvXAhGjXcqW3AXSAXijBsZ",
  "key16": "5gbhDi3jMFEPWAeCXe8ZWw4U4sxZNe8yhUqziTrfeboJN6iCWNXpMq39amVnYLDoxXhNvsg1TPVZz3Hsovb3ZR29",
  "key17": "4mSMPBq5iwEm3cwJf5muBpp8d6Eg91ehL3iUQw7fyXANXJb6NGiDK4gPxdqLtJyeRXV3T3BEfu8nvBV75CtXLQJp",
  "key18": "2SoGVcSYcXvxdLjuq6KGwby9BkD3ywfHpcQwkWdGqvQwRnpoo6GKq3PGoTrsZJ8TA24ZD4UivUbqkmKS5J1H7QuY",
  "key19": "2RaAMBGhbqcBfdMyALJWg6RiLrn2PDrrRMhugTGNqdUd52fN3VFQeGjZLyd9c7sauDDpHPKfDdLEH4o3yPeUuwVA",
  "key20": "3kZ4c9x8iATzedJnMeyL267rBbuK4tsXTXeBVv9sDd231zm3bcuSkXhZF5UgGscJpCA3KDjMgmY7cN1AFZ8mr8qy",
  "key21": "2mKfdTSgJfh5eRSZGgM4q1vbVCdATh5s14S8xtmxDHHUSKT1wpHMnRQ7SghtoSP97cnXygPc4cYiHK4EgTXykBHL",
  "key22": "5PyVYiUNftkGPuMTw7wE3gcwg6jSP28Jhd5N3uFLBq29tc5fFbeEsriqMPCAcsBjE7QLhKXFYYZz9m5XcHiYrjze",
  "key23": "5a38EzURUdvA4L9QHXuHCPjZxXPz5tMEJbrgBEo7QTccRyR8PY3ycJPSzKhrLYp2w5aMM6vG2zrvJC2UqXYTQXAu",
  "key24": "48m2g4XGqcN6vzUhSZvQtx5fsAv7NQKFq3LPuvQwYZmnzdd12Aeu2ycUaN8L8zuyvkrxiVkptzUwJgRuANpseeZh",
  "key25": "4HcQGeNS2ni3iuMLLAa1ebbe459Y36W7Pn7Edn8QFo4AHzSodiYXdgJfxvPFvh2boQHiLRaXcjGKQzvRyR6qHg7L",
  "key26": "66zmkhQv33oJDSJdpLSfb99PnTfr3yfqbNfN8x6MTQbi7ZzUXWVFdeZEDyDmp68FEhUktjz7ZagS8TbhhUi2mQ1m",
  "key27": "SgA47k9hNPNG9rBKRxb1M3Lk9UTNj1KeURuyprmBuppBrSKn9kk2kdBpr42qAoqhUezxchLyWCxLT2wtW8PZzf7",
  "key28": "5bkgDakyz2BYe7uDc4P17PwTZGWodSyZK4V277qc18FugaZHJ1UHvVZwgWfVnqv6R94jcRqXjXDr9TbAXf631kEc",
  "key29": "2apfSQFLUdkCDq76nQxojdUmp8tf5TTbpvuyNXXNF4AMaz6cb1c6xsKkxUMixqARByTVyjfUFFhKTLqBQXWwq39Q",
  "key30": "3PVbT22f842S2cLxfcNigx4cFhoQ8LZ3DsJdL8gCMKnjF3Ntwh1LLRBG69jGcPDWDTjeo3cbVKwKwxA8ukjYCmbH"
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
