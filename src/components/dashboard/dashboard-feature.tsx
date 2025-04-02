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
    "2uoXMyJWkARLymQ4rwr3Gup1RWBcvXeJG7BzUHPutciPytgpZost2CK3rSDa36nhVb5W7gGmP7mzkeBRqVTMBtxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BdcbDC1PKsUJKKBwq6XxSsxvRdBenuDdAVezpapmk6hot5jRQ3h3oJZq1WG4vN6BGH9WXQdcL1tMZeXTnq6NiXV",
  "key1": "2FNnTyqgz3AdY9NFNbci21bhtkZAyoGsZdgpMeiNj7Rq3MeMvAh1VHXYQ2u19yY2FvNihTcHXVqqpgRbqS1oemYp",
  "key2": "4DfFzDfALKRLkiTA2RR8pedue9vkwJw3wkZMbScDAWJrFkfoDdgBL7hTB7W72b5EichG3ifSxryUwPELKbrNiPG",
  "key3": "4xHoR4pMccpfrWXoKE5DSQNmZiRQ8bcJrgc9SkzEo7op2Pk9JtpKmna9kdjF9cxhHmkBBS1fsLssk1PbSnhvAeNA",
  "key4": "3S35QkjL7iXUf3szF28vzQHsGqxSb6Js13z25H4MQtvjmsxhECm5ATG5MavTuDGKEA7FvBFq9ryMRcDQKNGjw72G",
  "key5": "2R1zGAbhQshPsSActS5JUPuCAoudQ11fepCfsH8HXWAuyyeB4YTg6Z5hJ2fcVutzbsPZg9fo8kynFW1S3QYbRU8L",
  "key6": "42Ua1fSVPyqJdSZgqAzUA8A5k1V9QvnZWMGiCGzk52bb4HnCv9GZ5XzCMHLzdwFhnXZMmRHVGmUiaqSFfitKXeVN",
  "key7": "22pfjtxwmWZmKMs1s72mNHUhFGG4KrivMFAEUbU7MEANykAnio2nWnDaLmohJMFP2sbxbn5qWSayqKFm3HGQSa3V",
  "key8": "3JccwpDjFfxsxwdteE4J5HaJWG2fHDygkYyxTPB9DXXT4vJYKerJWoqFJH1Tc3m7VFbkMetDdqBpvPU9pFWbZKw3",
  "key9": "5hSTDJwvgzTpb3Zj6iVjr2x7sSzUgsfc1nqmfCH5SzuyEymynxCNsMLmHdT1aKpYPdxuGj5Dvyg1hbv2c9JwvaTm",
  "key10": "3osPpQoQirxHgLvYqpRkpv9wYqRowN2Vb4r9rjZHtmJFAsgKPY8BxLhsoXmS6YgLVG7tNLvVZnqMKp8qafbVnRVM",
  "key11": "3w4KVKr2XTnptnpQwQ4eYadyKWz9VuchFktcUtyQRLJAar5Rm5QDqeyrtvP4U4brFFxEN9rJfYHrvwQNrKJ29edG",
  "key12": "2RsYP4gxyBzVLdZ4SoZpyBtJQ1mGhrFhuoyHTnvswHh5csfCNx4FDim9nzixm26T12LucuhSB22XzKGioXKYtd2P",
  "key13": "4c3WgJc2HY8a9fYsdEvwQuEMiKxSPaHUEYUvawTVNX1wn8VJQBAjBwo2bTsGqDZBonhm4Zy5qTBTowt1z2rEcz9X",
  "key14": "Ui6mv9qdFL86nkW8bHgCkRtZyZbycFzZiYToe2iNVXDJqHAhTaqN1uxnjHf6E8GyzgoyF7B4Ts3urX59RmdAsLW",
  "key15": "3sZeRZZo2QQx8FTZBR2uiyNjizs5MhRCcNwWdjJicfwd4Soev796mMkr34h6voc7jDJvBi5FxqZ9ULfppcUbBL5E",
  "key16": "2DoTzscrStfkKQcspsgimkyfKacPN2ttWWKXSv9SZrAixq4cgY5qTSM47R63fgYkyh7AHbsaNydhPmij2dxUKr7E",
  "key17": "s7z94WcXL1jPXWWteuXSoSxax7GbqE6Cpx58GmXjPoGQuCYFdTNnu1b9KYYaLDbhHdfLB19SduGV2D6eChgRzCk",
  "key18": "37yJ2SZN5aL4XKkvMnRihs7mZzqj8YBE5cu9sAHwfg4pNRM3PSHZoaqA8VDz7p6T4KDocjQGjt9mHWMDH1Ja51e6",
  "key19": "3vwJwsC5BKeqssVxKFbCeM2spgjbm93goMp3UUBW6bPhevVK3WLafRz8hiE9A5PjLBKVoKmqdqM3QWRXJgtRaE9F",
  "key20": "HbMAzzM2VvgB5rQ1JWsfakqSPJuohKDJE2YXyqSTByef6zQTC6QeEfoirSfBbRyg8QepjupcuKVZBdZCB5kGXUE",
  "key21": "4yyCgoMoCooB79E679kBwgSuXNC6vkEPDjU5VZR5NvV4Ntenpykp3sDm93kP7PLjMm9VQfdQgDV4UPYfKWrdtCZ",
  "key22": "2dqQPL3QSzNWywBHmyUVgZuPwUnvUhYsaDyfUiQFLxYBDGqi49FKvdJA2eMRgyY8fBX53ifPkZE6b1ZqtV3N94gE",
  "key23": "5rXTe4z3UgHndmKetWhAT8WVujiMEDtSB7faHXtzzorQMsg2SSMAKXTcdnSKWyzbDbHnMYsiZHffwUZN6vPifsuQ",
  "key24": "47J1HBHsbTcmrcLYgmd6z5656jTt256NoABN75NMzz8kSeL4rdpeQMUJbUbpYz1YSfQKs7yrx8tBUpgPdZfKkqaT",
  "key25": "3fnG9Jatpe1jVeyzk5QbZYY4YmLPbVXSptLQ3UvVbi7sBo6QAHcpJSNpbAh693huYhKboz9nQz1GBYRbPLrq7ayb",
  "key26": "5v37AfTAD9yjch2aNC8MWkfrJJUApfNCFrpAMvpbNETmLeNr2J2uxKfbX8tX4yoMLbttpjHrUudh6aAkJa7Hvkry",
  "key27": "UR1mHxyB5CT3zUtBhLQGkhsneYyg6wVXAGPB88DoSoy7AdSYHMXWuXgPU8xKHGis3xHqrsZqdVP226pGTgg66aG",
  "key28": "nDjYQy4AiG4RTgmj7hXmKX7XTZy32chDRz1ZBE9FhrTyaZPUjnmeX3oMh8GNYhKT3LBcnLbTe6usE8CkNSenkSN"
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
