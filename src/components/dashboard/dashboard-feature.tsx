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
    "37PZRnjxt5yjAbuPVDgQ8wSmd9BRQFBhpg489gpbhp7HmMF6FVt3nCCH1JQSqDtkTDFURCikTaSKywNoLmBNTUhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e2oEQHPLRdCfWxoTdeNaupv4p7tyXoEUSdHRGdqTv4Qux1Cpp9ddsW3hHCVdRXVRcJqKqh59ZPMFMtnkGGKdRnC",
  "key1": "49hGjJwVC1N5sXJoHQWMjHU5Jx7xy78GEeTJ5aFcLscw7zBB3LmvvKoxWqKPE6ZoAZUeRDXdeQeRj4q2kffD5bUN",
  "key2": "3Ceaf4LMP9QP4ivv2Kv7EYDueEhVubszbPVP2jAsrsTJC2fTfw9AiwE5yVKr5Gh8rodzatuDXL82Cha5o9z9AhwB",
  "key3": "2YzrJG7Dgi346knBhskzQGhr6WAYsEfoPzNEhyyeuTpUAkLFewYvEga9JpLbsjfUpQfjXNnHRCjwWmav6NsoLJa5",
  "key4": "2wb7ub6xHScVpBu3McStGRXTr41zP8tS282zZ4dCGr7gb3MvRRkGhQXKkXomPjjK48fpYhveRYKkvQpKW7Xw7eHD",
  "key5": "5G1qgZ8HGscxnmARdzYmLvpquz44cVDKHYPU24QYiQYvg9tXAU4dxSBJ72yMnQPUgSeFjkN2RBBaqLa2jeWtVAge",
  "key6": "5D57K9H4Vt3FM5cLXFPCUC3SSjjHD9ebKmt7RxAJvtaehcHJzSCBG4ZZCXh6gxtoK7qsfUKtfwCGJZy2zPzA4VhZ",
  "key7": "3Rm3BWPtaxDF7mquzZHRc3nZPpnUnNEVkV7AnRJhjDGQhdPYFrKPJHYy2UHhCRUaqbNaQYqB7ngt7NrGSDWQMiyy",
  "key8": "4vvrKbKAry7Lg7CregK26rkuG7hV1WCsLERsQ2qP5RKChXh9zXzazneRzK9rJvXLEBfcZrA5Kuf4dvwBkywZgZps",
  "key9": "3Rzt6nXo1XNrrr98H7XcqtG81NTQ16Q9rhaz8ZC7DgXLcXPzQuff3z63YzFKtvZcCtS9Uk8ti7nAaBc4F9JTqmVy",
  "key10": "2MZrRLzaEsJvbEQGmV9QT2i2FnFin6fcz9DRiBkJWqHjETetVeS2Tg5sQZL9gpVQdrAnH8vXWbrQwFK9oSmpE5Jp",
  "key11": "5piotAakwu6DFjTKGt5QLYd8XqpLydPXJBQA3k7hZgwsFGK2rWq71wLfe5k6CkC5C1dtWzjsFAm36nmLQCGE1V1y",
  "key12": "2ZjNowJDGWC19LV4LgCvMhvXnHZUsMvWrfDS6pk6YGMEYGkGWvCAuK2VJJ9LagdQj2jMynCCCFXRqV5uuQAch7hS",
  "key13": "ZH5uDmGojGgZQjkUGkTBoEDdWg5RPMuRMovwdAL7GsGqoRS7mk4R1qo7Dk81zcPUGr98VQNZ27zN9rKH19oqsrA",
  "key14": "5k1ewqjfjPo5MEk24GRZY2ai7x7yzfKfiZNh1XnrG3J1XhddXTvG9DERhrJBkPkiAkLskBsnzMXsbCA3j71Ftkbe",
  "key15": "2ytXqYGrk8ZXNnRUm2LHFXTsR9PTBbFsKDN7uRKgoPH22YzvMEqtML5uh79nLGdTmPcDtxEE2X2J5zJr2zC6tP3U",
  "key16": "3Jg6Vac58hDConZng5BVXzyAgGjnXjkXqZJwe3LngWzNQHHVQ9piEwqFPLTwDSoFmP5dR8wRU7ch3FKcgyrJt6Qa",
  "key17": "3GMVit5Fjf38mEBXMhLAMrQB24HS6ybL9gXUADduT7P9kSyv4dGxkpeuoKErAqd59bNVYBtyDZ5s96PcyPY2jWnQ",
  "key18": "3hrfLR7TneSj13hArrV7TZAYqYZ1tJmY3QXpwXd16Ns6DunvwxKwMUDv5tJa5PHyd8DxEZDPbww19f6vFB8LsTgh",
  "key19": "47MzGLf99zHJCwAo8YTqm7vgsb26WAw6f9DW3M7efhPfFHnxrv14PvHzjFxEVDgfd376chPkKnHEzTTTqU6A5HtV",
  "key20": "4N4GXB3bSWEoRCLaTkzYThD3Swm24NTHaDeAKUuNBu1EDmiC8wQb6FUY5iDPa1DWyqkCoe6XJBYfZXoAQ4dqmw17",
  "key21": "4zgf2vUh6D3ZfgeoEBE8bVYiFe29GdV5tU57UGhv8jwZV4azSZui2ALP4rKTqT9guUuQVWBdgYJ97TCLVaiFC9Rz",
  "key22": "2R8qZUtUpVdNuwBX7zZu39Y6CJ7A8SghiVVGzztiBezKaDFkVzGskxTdGYa17GxFQc9kuYmvYYZdegV1BP1mWJmW",
  "key23": "2AuTUqTfcqaXTPcUvM8hq2g91vXVECPHwt42MuRpGPgkXfnwB3AkBgrHtoRd5m2mtnLXygGP9KJffWrW72pZXLPM",
  "key24": "4WGYsYn9byjULd7MN5pDu2mDVoK4jnge18RFLcEpwK6nXNqPDZLwEoqLUCaGCYtabkWPoZa7XdXctZi6GnpUYTjv",
  "key25": "5R3a7tvua1pU8vA5KkniDyFsYzvjCXDBWPLGM4gXYm7ZKbSn73fnxjsJ2RBqURr2ks2FZAhhoo5wLdKvZm4y89jk",
  "key26": "2eoSpiyByGaoFRgrkowtucSzTmzynyXb4Bcu3Cpihbs5zPA7Uua1FMzUeMLgqyrRpx3LqN2cxvmLSKgE1VgVddYT",
  "key27": "3nWNBa2VUWmqgu4VRbcQxSCmwWzmVDkb1eYASBPLzMWhemt88YnrsfgsUVdzE2Af3ReaLPd73Ux1qD38XQTFYKuH",
  "key28": "3uPs1jXdfbiuTZZpoFWUSQ5wQbUYtecMbmrx7MLh56UaVuWyZfqdwwGRRTzcYnLck3g19oE1ztNa3W7vK9QzWay1",
  "key29": "dhRMpTXsb9eDKpFPA2juXDoj6Jf79F8g4xPBTMw4LC8tFa6WTB2tj19NwkCxhx8JNH1sTG2kBAa6astjDDQGPou",
  "key30": "zvDKrKnLLdtJQhamKRni2wgZGKex2L11WXperXK9KeN2zR71NacJ78vvEjeXH58T16ddMgcybP4Uar72owQgoV5",
  "key31": "mDoiwwr7bJ331hBQkaJZgtm5y52frJpSs3X5NJm9x2hKP5BswsqfZXAaed7wvBD3bUiNgMs3tAUxcKjmXkFMBFW",
  "key32": "29mYdXYbWM6X3TeqS2ECzaYZvFnetJRHMxEnPLmZyBZYN25mEHHD5vHCXjttY7hmDC5m3RxWohT495ojcJhYEcfv",
  "key33": "2eH121iPs1kprsS7vt8FWkQgCtVmMJuap7xUXCYbTuAUnkUrbb7PHPgRWxj5cYeVKx11Jctxz9zRD9JnB2FpJufS",
  "key34": "N2fysxKVaQgeCVeWwchcN9JqpoaXXbQDTb44jDUhwLX6fdCCLfdb5xjMr6dq7jrC5fVZLLYbVHhit3eGH68kX43",
  "key35": "2xm2RBk2QHYXSZpAaDF8Dm3c5nedhR34aPmcUACwo6CX1MjzxZ5F2mND78DALBYkDpXUHhMmYcMnhFHYipNcfnh3",
  "key36": "3ao9CRKsaZRJ5ctNf6Xz7DQ5HffajNg9yGJs4CDYfoZWdbeP33XviBv2MJui21o65H7yR1ZqXJ55pGBHFUB67C7U"
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
