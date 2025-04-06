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
    "t5ScpAp4yDoFQXx7CtKfJLMyLLMc7c7A22S7m4s9G4LUtG9g2vjuuWRCPXccqZxZSJTTPpE2F89s3fFxGSuWquT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JKextq6jpFzjJTJEQVkvHCLpc2gypkRZZozBfFRZzcfQUgpzz2eccpneRZsQ8Fe437emY2J9Tw44y3Dsd4FxgwC",
  "key1": "nkRYqLGraPEhZuespBLeWYmnoJzV7NsJPZzHcagSiWFGEbgfHurxtwZzXk3DkpD15WB5TWS4wDnpfBHnK66KTPc",
  "key2": "2vhksGXxexCUmwX2WEaF9DCbWw94qXzxMp8Hjrd9smVv6iHJTH4xS3fTw1mHmSnLMjgu7xi1xiNpEmd7YWnyRRca",
  "key3": "2W4z1xo6j7YYxJdzJg4LFek5mFzAyMkKcdgdFkBs6ZrpEFRZEiJt4rxzfBCLvAFnWsvQ2fCFEwVKJRwsf28K7MoF",
  "key4": "3aPYe1Sxcc3gHBcXwuKLS1Fwicbig5vK57N8bL2gLS59UPxxUfqz7kGztV1q1i4MVBzc5sv2uBKt3iHUHV3r7nWP",
  "key5": "4D3s2zhGmQDFkGdZhhXWritDQ3mj8ib5LB1vmsnSXd3Rrud1qWikwBVUrWGoV8dwp3JsBPtReExCDRphyGvWMG1n",
  "key6": "3V3D6gGQtyaNeZX2yshmvQBRk45QaCT6McU6yf2LX3TNNo3ij6DECiYxa55AeaL4jcGWMT54k8DJ2gRVoe7EgZa4",
  "key7": "573zkoG3TEjzPQayfShY4MwB9GHPAR7nz93tWyAkmEsCwZwMPo4JWFgddeZDQ9e3AQwjgVSYB3VyhcPnQo6iPBjj",
  "key8": "4x3Nu8E6MZiSRVBTMez5oabLoczEwosPtR5XrRTCYV2go85QBrw7i43cuQy3mkzNJWoidVhnrAVFwqDrqoqfz44V",
  "key9": "2Dufwf8S3WEyj7v9vB6VgPxjPzJUq37nmkTNLTeLBsJ98q5mFZctnkdB5GXgw5KH1t5gPvpwZh6pZB4NeAgTT3yv",
  "key10": "26VVt9H9QfRCxyXVirz6aqSvfpt7ZKTekQTx1Cog2omABr8TnsgitEMZBrap5TEk5Z3UjK2hptn6gRvhNfp7p3DD",
  "key11": "3R1sdwhBVRXcUCy2R98Ai7BHWCQ74WeJJpGw1gpixZ2xoHEforp6yQSSWanBCxHvGa3cMaCZWuATBH3CMGezE8pU",
  "key12": "2TA6T1WtWXbepkMWn3f6p3PrHkiTaHKVcH8UbKin77vd7kGAiMRW9td1gXyyeASqRBp4EPiWVJshEURWpecq5Emj",
  "key13": "5xCXRuUT4TNMrXhLmGhswbufDKWsojkuM6maGscbpZR5bvPBiKrQL5CZNgqaZEVgfD3AFzFhd4aRDwJafo5M6xT1",
  "key14": "2yjAHpXLgee6VAthwv38ZuwbeHWeN8VMbtZve4Yttu9hQp889EBddMjZZtnHocnpJQst6dampPZQQnrcrYMXEYHQ",
  "key15": "4FQBKihnBMekJW8QSqxGB7uHXz3GjcBEydC4b2nHHHnvMhueQ4yrvdyH9QcDLkY9Xf84k3D5kwAtYfSLkYq2ytPK",
  "key16": "4EmZtY22jdcGRScXjfMeGDYMKbrVrPKEqJUkvdPNtQherjzSeN9ihgeoasZSemkxTZQ1wdnMsay6o3WQtyh2YkKY",
  "key17": "222fSerifxFQfdXDnP9owbePGYBGT4vpnEzEdQMRXiXVCCm48qfKzKDNxg6eMeSdKwyqaSir9K8EHZBzhZFTcHKm",
  "key18": "zEiKfqY5hfTnEgr2K81QVQyxcwgNs3YUoyX4KBhbwQBMbeXu6ZGaStzg9tpZn3cApFJdMRL4VMgRCpi8JdMkPyJ",
  "key19": "rEbtetUT94fJ348Yhz2Up8qW1eANiHjvs5R5pDHZ7Vvadh8kGdSxECzyXHQoSA2dvXZZcgaFL3ALLNm7zsc8KSN",
  "key20": "47HqHa5DJP4oVKEEHRFMnjHKPUnAju6Rn7na12WTJ6JNEw2CChNpenWmkxJ342dqeTbiWZrCTvn7uMavqpoU8iuB",
  "key21": "3kYbNGhSjxcQkJm1hM1b68E4wVmZobFCQL9txJfZBzpKTaegScgcLZQAfSxH6GDbAmtqcNEmu2eAfPKrnsY1Ujzh",
  "key22": "3KRPFp76uWYZK12MAwcJTEx7mrYCyMCFnBAKgv8hUu2b9PVZS4g2TBiE5KeunLm8xpPcxNKNN1Harpt4VXWmyV8f",
  "key23": "61b23HHJtR1o2qShdupgiUPw8Uz4nenT4ve1FLtm1WXjLExoWiEB9V8WtBTtjwiN3y36KPUAdjjvFzbHLXvSHoo7",
  "key24": "5PArBgFWtfwoF3mrDQnLWmwxgkMfGrrVLZJomoz2LYkaAFUtKhfbrZdzzJnxPKPmFTQejYnWwMRv65efWFKPsJ2K",
  "key25": "2gQA2PsqYfDqsY7wC2zsVLsuwGzFgWa3v6yKEiWZVi89AckE9WRoCw84FCcmTN3HGoGgPii8Un481h43HSkwBQ1j",
  "key26": "4mRsEnZyoXAyuBxixzDd93fBJadysE3CN3816bPemwevPBQ2XuCDk9VLGe2b1QAhWRL5xQJaAwiYLqAr6gkiorbr",
  "key27": "2XELHxF5t3C8zU8WMTrUTNpnNjcwWKkMmiy7HWxg8GUuaKphYK7ckXaLRSQkizB7LvSVgZYwMp8hFtFceuqZLG2d",
  "key28": "5SZdSeihxq7zVs12eCgbQwxqjzk2PqZNPBcMzcjrKdsn5kJGyNixQgECyTGNSJZqchChy2kd9wEcZ6GSiUQ8WNwt",
  "key29": "3FXsNjLgMffrqh5mQif8gFqqZv4EXzqH2DY3zfhUaNPiPDnE3TPu7DPHvdvPU5jmMsskKLYC37seRUGuqjcQM8Wz",
  "key30": "2TYCcdJrzcMytEtzsZQYXQJ52XaJbjJwvQrx67QJEMXKQxGvujGneUHxcq2p1k47ztBUTzXHneo8xaqQ8uqazqUe",
  "key31": "3KC1J4mnF9myWHHu33iDgGQpSGyeQwKchmjb4xy98E1BNB58AnFwJTzDQLUHDb1tDaYFmDRHtiQJhVmx7zjmkYa7",
  "key32": "5jQLPjBDgUdKtHB9ZGiRWjSqHxuURNskFr5qisDDcH22ETYbcsdZq6XTyXWhzqbbtydpvgB5LkuXLm4wUaJKR6BD",
  "key33": "5U1q1GvUnqLCE1YfMBnPna9bT574J7GWX37RkCjHU9if97hYucEJK9tXM9jLBVFTPaSDv13xDrCC8P7AJKFhpgzt",
  "key34": "2J4oqfT7dszJ9KWmxkVhK9cusToHFS6G4w5Gs54V9fprvvPBmQ2u8eqaUpJQG6mEXFPCpoGGxz8Bo1grcAGM1dix",
  "key35": "5CWseqFFH2cQtmXEpZYQgFobH7MNVW51YM52dz6SydqJAXUaftZqqRFptWzm49FFLafuWoR5Vhe4tPB5xnCcezsY",
  "key36": "127nV4YDrq2W4VR9TTD4kThGgsuEUaeG9ciEB3AbMkrktYs7Ntn4pGttx1D67yE2AR5MutD1pbS1TZ6g4cDwq7sJ",
  "key37": "4zXD6dycs4xurdAk3bbYFBgPwsvSQyj1CeRxjZmCbezG3ngYcCmumAVLqSrkQSQEvS9HKbfzVXsT7koaTDQrwYcy",
  "key38": "3YVih3KpGq6QjmrYY9dqbLf5uF9gk3GjGpVW7n5C7kwGATbHgMNwedThAAEV2CBfNnhRyn369RR2hYzEntLk5XHW"
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
