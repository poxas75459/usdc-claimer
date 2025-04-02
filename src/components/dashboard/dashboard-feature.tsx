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
    "331ujUb4JMUSFDtwWeBShzo7AHpoWse6Eod2xBY3Mkyx12qY9j4caxtpmP8CzTqPdZMZYRBeAadx9tSBqabWKRQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4obc52NyEzxb8i5voXiNgeHh1hZQnwfKzzrSqtMDSqGLDHYfHv5J58MahXou1EgYryerAJygdWteUuNCLNpsqoJm",
  "key1": "5H1YknDecjCg8zYieWtHt1UKfkB4Dq9yqHEsiqMk7ZGTQGEoruLzTQHVcJFu2RgvtpU6nbD3jKKSU1Bif5DRx5ki",
  "key2": "2VVAALwA44EkyBiFiQPEaEuaPD2oxyWMxUkAxdCXXLqX9QFcyY7hxeG6asYAsL83ywQRh3TcK73mmKVoKsbNvq1j",
  "key3": "3xTWVB2GVo4cawAjMAV1xh19EKYHecwqg2PubbyC7EWDKdw1ao6wL85mqNA4kHz7KDAyGrhKjknca8hVKBPkgTNg",
  "key4": "3PR1eWhaBNEZWMfwtJBKjqJVEDZcrYaQgu1oK4adtBiYiRK4cooSn2RrLzQwfNSXHgJGDxEbyi5148wRmUbVa4NH",
  "key5": "5G5Vb3WpQsYjp9uttgUtbLLnLb3otyKq8xMz3DqFx7nMGjCy4PBobfUyQ4MBTYHZB8osGNEZTwzfQijVLzowPjYW",
  "key6": "52sneyTm4PvEX8h5SyvFpesb8HW9BuYBpAdJdFCiBfDCkVLp7rkuh3ygqnDyJMNLtwgvTQR8TggEgYAo9nef5MDB",
  "key7": "LNxDXJfu6pS2KZBUGLGecKsspHhMfzXqKbsezG5TKJgd9Z6b9xbk5vpXNQ4bGXAf6fQREc16UiKBQgBaLDgsNXw",
  "key8": "4QYbKXFSbcvdnZnJu77Wh33iXssfg9oGNvARtZ7hLyT8tkRPzyBiZpzBfTDCUGyCBGMxjPnvyQMJh551XD1MjCUx",
  "key9": "5MingzdTcDKg4AgAH8y3UwfJWJD2zf6BiAepVAupKeoQwNK6AsXGhnu6gtwmb3fswAGigHVmLYUiGvEn1cFL4wnw",
  "key10": "3pBxogwjW6hJ5r1gC5V9uGt3MHgrQbVT2zAwo55NG4KdCSFYPUCpxpoaDUR7zvVi3toADuDJDxQeurBKFoUnsga4",
  "key11": "3DeyjsQjPK7pj6gYq5K14pDrrRS2J2zYsK5orF8LtHfobcgJsnAFVGLAWAyamMXWdzLbskVad9FNjzhMUXJfzTtb",
  "key12": "t18Z5FuiFy8aaTDPS8MzbSbC3SNN8tkWXhQihHxbFk1tSeDyrh5NsxGMWbXLoFWqfx1VnuWCGQ4hXFcydYn4aGq",
  "key13": "8FV713fD1Y7rsHDNriPRXa7BPNpusEsEaAhVcyV4b9NtBsDsGn5ALata9sRmHrnWXMPuBbUQKU2LNDq21W8bcPw",
  "key14": "3xURZvsL9uFVkka66P6vsZGkRh5ycoeVrDDEKSgrMAj6PsHKuhdmadTwL5fiGm45DHW4S1APJicWAmzmtJY6yit3",
  "key15": "2d6ZavXDPRY7Q7Gw4VuYfanX9FbMDsQ4XPY3bTytq2XYcpo9BPXPRxtyNGct6pyj9a87S5NuoVbuTyoi5C8beLGQ",
  "key16": "2szzrMy3XXEHiGmAPLTR9cB5oraiSTBhWCX8a7fXn5oSs943PmKvMH8yzQtmhw6cryET3poPcWBJPFTh7Fws6B1b",
  "key17": "3HB7DGcPdw1icyYZpbZUMd3FGf9nGWVSPX8U9xR31XntzzAyzmisxDkTrdpdXytpSaxrq5nptiSg6wU1dy5bhbev",
  "key18": "3JXEEeFnaX4k9hm6fML2VSCw24m7DAWWGxUQRYT4nVu25eDvhEYFj5zEn1Xp94SrVNbhRtVeaDYNg3MnJe1eJUnD",
  "key19": "2Pr7M7Kg32zERg53eHSBWW8fFvMejXKPXJgyccMxoHiAvL8CLkAg7cuqedRqvLt8jVAvhed3g8crV8oQkLNN7Scv",
  "key20": "8RGMY47mqcjTC1wDY9r9VFP2wsAgTZkFUPb1Q5f7gag1VUVSXRdCzXBCS5GxkPtGifeNGWd783dnW9f1VtMNb5K",
  "key21": "3uZBM1MxiooouFikdeTEwLRQguN6Nswp4cTKAjksFoageeZWfzsdKC5poAgH4PQ9vL8WAi5wx5dQUVLEqUsvYCRU",
  "key22": "5ZKdD5nggKsWJyCn3i42A48KjaUbsxvyfCycQy5EKpmHbUirL7i1h8ArQcwf6G19Yim4LwqmCsHTUwYDn2bt2dGv",
  "key23": "4LbvWysfdUQ2LAHXznprL43EDumgaydethwGXKjDjfNdeM7CRWRb6V912DFquwc2MrK8HZHFFV37UWwpGoaRKsrb",
  "key24": "2DRoz8xHuveeHCSduCwVKroCHfL4XPu1mvKQmQP2HckqyqL3ZQaDiQKVitRagB6diqefhzKZjwrskqD667E3wiET",
  "key25": "2wLDU9AkVS1cUf87xf5nsUz9yMJWvjUkeZuEreuTQijeWABKgZW7GEujT5K2dbkHpVMh2dbokKZN36p8qUsC7cx7",
  "key26": "4PYzCiU5QbnFk5GN5WpMaeqSLgRMb35kd3ktnZEQkXsbuasrTiKhA3iXF58HJcJUPfGQFCXVFsranLJ2KBRTTCuL",
  "key27": "3wCMQca8cALuWUQj6UgRhQxzRc8bcMraDtpLnUSbsAybkd5EC7JtPoBYTS5yguExVfMmQfFRp78tcNyboAkSJxsB",
  "key28": "55S2D4XzYXJdtqMxjRWhjwgzSJSgdfM79YK6hThTUf28wjMfrEyzfRTTFJTP3BqbPepS8HesXsozZ8arcyZiJCcE",
  "key29": "nCooHfoxb6Xf3kreKWYLJssxP5d1eWvAaEjVJ4JuZHkuKfU8TfcqAiuNKcrQAUZRXg8itDQ9go71ViXpHxreQpJ",
  "key30": "zfSFcVjjPs2N9h4sFZnQFYrBaSKhsRAABbXTLcMYTgLyN8Eer6ugYTcnAvzK3sn1qZVrJaqtK2xtJpzhb4EDYBN",
  "key31": "5SAuJbe3FXRPG328aVtE8WLvrGVFPhTsJukbGS3kqSvGBnMVEYYawX4fstiYNraZCBAXYjhvKZyC2kWf3rikjMwj",
  "key32": "4tctRbhBV9S28NVkkidPhjarck9cGk7wRFUqK8jJKRPGTe6WTqTiNxy3YNiRZy3Qb2oTnMg6KaaD29mKNvwCXdjs",
  "key33": "5CRrNn7H32wFqp813abi5trVbeCnQgsWUuyhpH3uh6UyPHC64So638Z8nHEHYPBgiSvtxH9dYNicHMNdCqGSvPzA"
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
