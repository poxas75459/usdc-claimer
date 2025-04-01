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
    "4UaXM5Lj4AzFtbbd79KH5i9LzRiBDk9WNicicyoAwjJUV9ofALKUWHJ3gv8X7ugPRKMj9VSvDiawqPrRfQAMet7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49HA3U54LGdN9LKkyQNzickBW1YRdQBp7BwPpdpt6AKq3oHx2KtcCe4H7yMsf99MmNfxSxKCgnsYw2pyG3MY3Gtg",
  "key1": "3tC6MQTBdWv3AjpVN3CqttHzXENt4UGALXEomBfYscFoqBnnrythjzGQSAd46CcHogXP7E4WsmMkEpQvp11LvehV",
  "key2": "4NejaEZwgdiDXPwY1iX5Bjc3by6ZPGa6Ev8f8SJb7dp8NAhzoX4rrfp6MgSV3s1M3NBJNXyzYuQokBJ9JNBQ4dso",
  "key3": "4Az7YvHQQrZpqQ8i7gJ2BCnNRqQewFuVHiR2dLHpcehv6SDTmUSNHVjp8qa95rMzEs78o1YY8QpUCV8eeiZv8nxV",
  "key4": "4TqNkeE1NvRBN11UqbFfBNUYKxXWR2e4yXSpKdxWmQXrTC3uDCGjDzMZ2BXWSo8YLuTYsjS42vmoicrSn7SL3pzF",
  "key5": "4kbhr5K5FzU57312JienFqpkZvxzdWx45ubEEWirK7QvutaC6Q9zrHCkLHvWJZh9oCh72UqWm6XhY7o8vQyDPMfA",
  "key6": "5ApaFrZLeooMhnxVSwETrttcq3qKZeMx4G9jS2upvQZujBB8vuEWxRZc1d56ZJNYUy6aLa4dRsSBfGX43dVN6gBh",
  "key7": "AxjA6xAAzwNoK6uGtjFmEUNnv76jWhhT3wwqPQh6nTumgKn1bepbz1cRhseHtFThD78SHWTouwXFsgShwj8Zhqe",
  "key8": "2cva8RYtaLNEZ8x1pHJdR8Q91L39a18Sgh7wPB8YSkiXxegmU99nhwyzKrcU2K2GgYVLTgUyo6zd8Z2mx2fzX2Hu",
  "key9": "r4zo7Xt6nEMabgr4t4bwnxXv4y5xCedvA6uvMHkoXdTw9Y3nP9YX68u1CoPUtYcdFXefnsoEiXoVYkHF4RfVcbQ",
  "key10": "67dk5cCrddVYz2oxivbF2FUG8s1ZEjDBagsciCQMp3x569JujQh281Cj1g8mhdSoabL1H9rQj5Jc33UhtPKY5Twr",
  "key11": "58BK1iLV2wFa7URc2PEcmLanLJTVAiERpKQ9NVAn8zG3jTEHmvwQKhkpXHDo9RW5hKEq3FZpzVSJujLLYBAbg26R",
  "key12": "33e7RoLD1AqaDw5nxpX1sU8zRmB6ZGVYLJEnVS1qadfJVFg1P8evfbxWgrbTCPC4dsYVxVz8M6fqAWTKxZDvddra",
  "key13": "2sEFwG7fHHD4vs4ePcYiVxoj9KwDjPzN8ZJn19ZFvkDjHWJqiPwLudhbJPLSnAL3NUjYHsLEVK7UVmjtwdEUPr1t",
  "key14": "3F2j4tAoDSFbE54hwXr3pcimYcDXZUf3T5CAd1orwQBfxdKFrkg4DM7hVVau2c83T1K5w3A8qZsgMMit5ZEKFR9U",
  "key15": "2KxKWbxTYkPUU7zKVeCnDFEz84eNu9rQ9dkbnNq8vawuc4JBb3t998hm29McY5w7aN6fKrNSYeZHotd6TPhWqdwv",
  "key16": "5Eb3AMwsd79AvtoYiTCkN6bghPPdBz1duoPHZMutMrFxWzfDrjb15K4iY3vAZ58TJwmREyadDMJN9NCtXQFKEjUm",
  "key17": "2qiTCzwAxW8Sk9HvogKJSWReGsyA3dFJdvfRZxDqYgEWmUQEKgfKvFn79D2txtu5x4DsbbhegyKUJKyxgRdvL4wr",
  "key18": "rh558v24omzda58X61YNwtUJHefFoZHzeatVRubyWm2mg9hXfSvBzpJPUKt4Fvi1uAD1f261jn5yKYZ8YuKxoTV",
  "key19": "2D8M77C1PJB9M5kkopja9rduSMy5ps3ESqchtJ9zyAVLeeAnCMqForjNezWWKvetXBC6K62vAUbBykZCSSwdpAy3",
  "key20": "Lj2urQEqFHAHQAxX16XPQDNKFdZQ4gE5jXbPkkExieygsYE2uVeqFRuTd6mxgTz7wtP1rBe3s7nshNuyWWqAiZZ",
  "key21": "2dNPEeSqzdq3qSZ1FJErxUyEjLGNgmNjvRcf8gwbRH2CsNv7QTskaCJ9Ba9HRi4t8rRHLMwib4SB8mUcwoZMkayU",
  "key22": "3K7zQhVGmPJcGoRBHeHqx8NVdiT9ASRfoYKMejEGxWSmgVBirptKDzuFKecnDBEyT7Yet4hgjpXK8UyWEUfH7iig",
  "key23": "3Wz7y8BNr59n8BxKcjjEM8FzNem1dVntPDJ5Lvvv2iN2vBob9Q1pJmsZQNWV3kacK4PTiiu5sFm8T7KwFUeFABdQ",
  "key24": "5LiGLpY8FRfJax3ki4YHVfmGzGQ6xqWchkrogJik67w4SCLuzdHWiNaDtMecqCuMFjfdsoZc9msGq5Qo2RDqS3kN",
  "key25": "3WBVWKSauqCc9ELfKbxd2tJ1rhCD1xz7AgjNFNh9GvEMfxH4hFHPdB9Ky2bZFfjzGUEiMeghTYQ9ZNr2mQdMR24h",
  "key26": "5Cj72qpNVBi2qgcainJAFRgKJyYjKQSJEDnvyxhbctXrE1BYMNCTP5faoMeYrzEffvmsZyCDtxQGrbgx86L57i4c",
  "key27": "T6aDDn51MkGN51iY4HHqUV1CPkFDt65cWb8AQGWxdhLLncD75p8taYZQrsYZKD9JNcUBnxKmdd9rwAPURyXVnYF",
  "key28": "5N8LvaJhphYch5wEg7LcD9Gd4Q5WxUTqwQFPJYx8fUPApZjeq9GhoPWkJmRUVdkEMALU2GJMzkJeYJdSnN59WN5a",
  "key29": "55vcrQAv5jwRKLZkzorzq5wXtx6rjAgWXrFK4c2uxj4N3gXhZaPrkgF7c8mBiXARKU4Pn2HgXBmYNCKHrGNmvSwn",
  "key30": "5e34d7xYMzkWMYCRzvgGvXiuuB27LYnrxPxDTxxH3eYUpukNvUYqVzVCBQJxnZ2c93qTPqbS3NG5j6cD7GXUyXfE",
  "key31": "daJCc5oWodVXvQFs3Y6M6V1bZv2EFrYwDSo9o7btx7WaYZHwqmvQNCpif8LpF2TbRwSsF5H6ZaBguSVZfBi7Rxa"
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
