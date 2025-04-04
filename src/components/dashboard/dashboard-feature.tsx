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
    "38GaogewNtNpbL7LSLpi99vm4p2TaiQrkpVz8EMYmDTViT77zekL575mvL1oxSDGixPHqP9UPCvLYoVaqqnQjsf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33B5h7Et1v2NbGs3Wfdfg5qbLTqZBs9icGr4TMK6EvipFcvmSNL2sA9e2QAEJLgyqCRGVMKTo7CcQTP6EKe6Dmn1",
  "key1": "4y9Agi3SDmP7skJZNHSiRqdTwSQjWpV6WPgVRJdsgsi2ReyzCEZnYqDABHqMA61TUvxhLX6fBkJok3kd9Z66nRfi",
  "key2": "4Ccy7Naz3FunekepeX8WfC2BX7NundXnFL4wjg7NKkGCnDYJMUsNvVUQ5WRYFdmTfBisKLShNoQ5w56UAGM84dN8",
  "key3": "4jHKgKj6cTiDEXjLjmMpaVy8DWL1919s4hcLCoQxXP6j7f6d3c9HakAiWW6t382WvoLWLcbPna4njGvcNiwMyoGJ",
  "key4": "Da4iAEuUSi2TTawnMnsF7rfqXLv8bvsL9FAzeHvtUYNR72eVPjceirvkF9vWxMkgSWTwnYhL8Bp5Cst6gAuVBDk",
  "key5": "631oma5hhWowNwCJYPwAhJHVfdoeFQuHNxvUNnBcNDVa1NVnffd6hkRFjbqgysr5ddKVDzSfh6xYjeoGNZzXVj7t",
  "key6": "Degz9emtrPQvnPri9F2wm3vibdg3WphCYTwjboFzR89Yi5V4U2XL2rJGtTSMp7hx6JUHX4N5Rr4qVJvmEsDCdvS",
  "key7": "3C9S15yKUiStc3DgSVN3w7di4sWJBbZEhCbbmkyYvgbzUuR9bhnT4WRKKzcR2S1EC6nwGuG2QwaU8dEgkjcdnWbA",
  "key8": "4bhXo9daeTRVZ5eNhYbLkdpaAe49VJsSnmg1mFr5R7nqbfjMQhCYJP41G98zoq92CMTHr8M3uSBvb7o1HmtEZZ8h",
  "key9": "5WrhqLvi1A82zK3r3Bch6nj1dxjRCd2hrXt6WG5tie7DtEKGsaKRkBFjFrBBW7hVdjYXjfEb4Z8naTvWhPBBcoep",
  "key10": "55RS5hymmaG2UiSRbhGes21kQvviCyKmsC5aP4qCmbxqs7H3UDS3NaTxZ13UTjthxsXNNgztKat2Z6fnM2Z6hC1H",
  "key11": "5Aax1aRZkE5nEktdvgAg8pGb78vpGkcqkRyfr2XmFnFdcnQunfJQY5fzWJKgPqebjoB1PzTzrTYghqU3QWW2Mdrx",
  "key12": "5kmGm3uqavp2d87FpUKsWRxUxWkkwv5Z2fJo4KvN4fidmBdijGm9iybtDjtJfMJ5mGVBVUWKWfp82ewejSK14eAf",
  "key13": "4BjxM9znDQPAa8tBxG6bvz62gYFETtBCD6DkGBqotWgzcG1vDpgV3xAqPoFqyz7J4oQzmRLfgHSSEFKMfd9gje8Z",
  "key14": "7u6YkWcs2PQ2xgrcqSfo9m3anahosV3CtMtWbLUGzZCPNa7F9zqDQhWi3QiW2euiVZAAncebz6eAUEJXgR6nazk",
  "key15": "mjsS9s3gnYENQ5SmHm4e4uCVa5MhgGiuTgrUZDMX6SdRn5HB96EstdCPxzvyHcfzHE2MafpPk9j8p5Gyzh7hMLU",
  "key16": "4c49FACavbAPXF2tKUjPvRTZxGn6BVtviMgzVZFFKxVuPUUSMDsFywFvYWDGad4m3hcFuSVDKjm7hiXejiyEbnWT",
  "key17": "5LJSdYX3Zz633S65LP8h9oXW7DhJVsAqjb16B6SPZoHegPFTMPyzDqYWu6CMH12A2FxvbBZXGL881PrMhrZxi2b2",
  "key18": "2PmgekiuZ3gquTAWVWT2EbapD7iJik9WmAJx7fW3pQ4FSfiDYnUR3Ajjw8WX2wvZmm7Hz2rDgX2tsYmYnzscdqXG",
  "key19": "469wFLCfabQfWuM3akwWWNHkwZNF9isSUzzHPFZyxAww2UAnCXGBucHQSb88mXAFigM48vXfAeRx526WwG7CJTEx",
  "key20": "3YHHfRd1ngaA9p9W2YhHNq2ghZHwmxQdgL25BK1186EBhXGB1J23bxziRQ7RWxSxBU8JsvWav94rusQwqdZ9GTo9",
  "key21": "5v5D9qBFqPdHyLDpYBvdi1SHfmR1PEaTuj1MdFWbsptPcWUo2eF11Q11KvWFt7FVuLWwi2QkX5WedqoFLmEeKjMv",
  "key22": "4kLkNscpoC7EyHK3tCb2NfhL1MtbdAovbEun1PpHyRL3siq6y1ToL88fKUaVMyWJPV8F9axYAsMCuDbKG94J4XDH",
  "key23": "5FJD7YcMB2miv835eiQL9QqrFPxGaViRFBfrws6e2nfKMFCWGnXXSSjyVGWNReJJxTvwMSBc66KrxHFNTdXZkrGG",
  "key24": "3qSAveAgMrZACY8y9dUE5vVbYbfscLGoiMX4MCA5PspdPw2v62bm7MFKKQ7aLx7ZXr2iwP6QgSdxL2HuxcGnqWEU",
  "key25": "rhLUdtwHw9if5DYLfxAojUZf3WjpYqGZ85svBduPfjAr25egYmxrM4iQsz6UfkwvUhhZF81kxhi6HmHAQkEeFuv",
  "key26": "5TSrYy75R5hGGBYPiHhEFdajm5wmfoBP28gxQRKbQXfR4k9NtkqQgffjH3A95E7GaSnoioNkv4XpnLChnfNRZSvm",
  "key27": "5DhK8f9PKrKXxm4o5VN5GPUdCeZURU9crFFwwFJBAesGzKV4MeRR4jLmgy33L3xia7ALTKywyyiCf56EFBFVzxBy",
  "key28": "22yYXTTqAgXhyjWTe28RwQ3uC9ogMqzFhNTyfE1F9jG9id5LGskpDe5yQ3XJJC2b9UxMtBbBeTsGVKdrJT7jZmVG",
  "key29": "42WFLP36nCnWEBB2Uts7HQGvMnMwCiwMkrWJuyDJREb3QVokwX7JVVg2BQtMwcATGnKfMAtSwbx5mBmP7a3WaMHD"
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
