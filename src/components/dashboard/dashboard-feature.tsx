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
    "2yEEFKzt4G9zYbnU89EmpuXi1VZfq6auPxq9pJwwNaPSCruGGHZLZAEaiEyTFMCVnBfTUJD1AfcxWzqp9Vb2RhiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p6nBjyzgagA8GobtG3c3sCVH5NYmUbG1YPLiL4dYbQxctgvzck2yLfXSPaycAcu8CJ2FxWywhkkiZv9zvzkVTPU",
  "key1": "29fFnqJqxUfVUP6YQnJtDoxtwghCBpqkRsJDr8MzaPWioQZJwxPgs8ZuMRLGg94wbKtL1XmzrRcAneZagEL8VWwh",
  "key2": "3xzKpR5ReMfjmojFjwwGgwPar58WSnZeXwXydntDq9Lcor2dTEWf8yPjeLNoVcsme8odU4QvYkLd5GwrgQvdrhtS",
  "key3": "2LbwCnBgXfT7hVUiMzDAotutmNk1Vvzx6YHYLYHgxY7z1ZmEYQS6xdzaiXDoFxaNSzxU9NZ8Zv2tYpv2PUqPKKWu",
  "key4": "3wTXsVUbEFAkz8FnodXgYWSjx4fGJL2n3B5MHZW1FoBMxmUZFpPKVmwjTYrGdtMVgFrVhdSQdXR2WcjG7b6NhYiY",
  "key5": "3qRLLov6x7UUM4kgwasve3RCXMWmevuGrENfRN9vGSAML6dRGwdRTGdgA4dbzWzoX4x5LVhEKZsh1gkwqw9m1ugU",
  "key6": "Mj3ZTX88a7rTruttuMC4YSQAiRFDyQJieLmH13A4WvgiNEboknXcBA2rS1MbDJKTW9GAGh8Gtjns5WX96ktgtqo",
  "key7": "3kqJHRamzZNyo4HhKWZXYgD4AjrbNqUw2otFA1pFjgh1eLprByHes2S7i2CqSaM969K6siYzE3hKMZx8LQiGjVRe",
  "key8": "3Bvt5Ym7R3QKdZbMJsEVU6Gk6B9mC4z5YP81cGHpteBay7XiqHAyFq6WhKYuuN9ejF59N4zPUH68Sex31n43pcRw",
  "key9": "3q5dVJEHzpKrTKkmu4Y8KCyqbhUTS1DjYyvec7TyAniySbfTn2gX83xR9HFcRBHDNXDZGqAMmhrWkwiS9DU9WeJ6",
  "key10": "3DeR2YNBNZChre55abvBsSFTXpaYdzqdEqGTGQA6C4SuyD4FueJ3wd9UJ22gxYR6Xk9BnKfUJpzzy5ngovKpSv2y",
  "key11": "5iAgQ9gsmota7kcuNmjsP9ZC26opEHvZ4D5bn1vCivnZUSSfFpcnzx2yBQinVvGVsRX4iSMfcEQbdezUEu9CeQc9",
  "key12": "Wxst1Tkg56Z7cZ68w4sYuoqVvnyg3PAY5TMPQ5EMzmGA3mjuY8Y1ZdC6a5CDeG2rzW2B7XS43WUrKcMZ1pZz2T3",
  "key13": "4DVEKZUDnARgQYDmKnrwBv6phv58hPm9dxqUFA71vHhXWdoAvzFdqsUrPvRprP6j8K8uX6bVNq2W7h6wzgshsaei",
  "key14": "3V6rMrz3ANbeqNGersBrfaSJGwr8xRnmN4sMNCvsWwKXAfmDeBAiXk2qXoSsQiBb3AVvCYAbbJsjv3fa1q2mJina",
  "key15": "5VKqZCkM2Ji94aPdwtRWAbu2JwWTmjiumVRYw1UuMUadVvR2xfpRdyDzyYSyweHCaCoiKZ7NaRQxcaJB1AAKkTpV",
  "key16": "5N1NW3Wi7SiKB6BMNX5kAJjF9KQKAZsRnCgx1uqnYfJdbxydhroS66Bs7s2V8RSD7MWRCeBeMzsvVpfWRHkqowzn",
  "key17": "3oKPhPKaN1aMcDRJSuWqiZrqaPRQXNV3eWbnjeTpLv8pxMzR19YKTTpoB7Wx5AZTpTCP2CNhatqWAEUCBibQkhLZ",
  "key18": "3Aiou1EQRmiwJTeejoc71SnGJiCtL2JJrMYsAGHhbAeKi9PExj2CjiEF2tSxStgft9aQEmKW38yDPon85jvPDs2R",
  "key19": "3i9kDYtfpVWBzfATQ7qxtN7c62jFPw5VD9KMzKkQb6sUbUuqYFLyYMR2WvVaXMjZjqAQ1qh5x7ULapZ5QwMNoGiA",
  "key20": "2YYZGomDX8Fju2fqR7idM7pX71vfYvABUGdN8wPRoHM6Wv4qf7r2k4D2j2ziJC1AGUGxm1Nyf2SGnr65uEPdVJjA",
  "key21": "4rYJuLSuMbWZCmfn3dxDWA7nADWNZsbmu91nKcyJiTGQw8b3xin27KKDLQs3Z6wZyp8D3HfeJJxdtC9ekQ2aftFP",
  "key22": "28tWE6VotNFX2yntJwdtKfZ6dmUCkzNumfHCn7Qnf5cj4DzRD56tCB5UMA9Qi2j1h8CH5zny3Ubj5UVBg9iHMizB",
  "key23": "CUjBieLPPSnU2uf7pKgSspuQgVzKZupJJK1szuW9pTYWQ3NsWr59ZugPJ9tVhmF8u5wySSr872JwdrGHQ15eHbm",
  "key24": "4V8cCKR4jeFCU5yyXr8T8tBXYRb5CW75gvdZJ3iJ9DNtNFxtymuCYiNR3Kvc6KVTXNdNwWe9rWJWce48Dnna1jd6",
  "key25": "4GfCswyPputFFF49bfdkXUjqJ3H3ezmwohh3HyGL77XbiRebw5YXV4RSQQnypyT96qoVcXeDGESgrAj6FL2t7ar",
  "key26": "5shakwxgch22CSpVNWf8qGuUfqUWSChdjQReMsJ8ssUrvgqjByo2WT2JKMKXsvaGdCSRCBxY6dLTw2eiMSCBaUEf",
  "key27": "31EfatQZL4y5d5nzmncotjctBTWwGouZYFdCEu6JL7V3Y9ykufaVzuixwY3iL5uXPghKK2RtqPTy8KjFEuBzWxTZ",
  "key28": "66via6y1n9FCpuNpf7vxfjUk6ama4x4nirDca9BdpRLb4hNNyAqonP55Uysmzxk26KieuqWbrehUxuBFpYUUS65W",
  "key29": "3gibtZNUFiHk6KmGQ55kmVPoBwLecyRxguBSqALDXntQKP4dhtGryS7H86bmsfX7tXAA4urin6r793J2ADFFgVZx",
  "key30": "2f4VAcPJLDq6DG62emV7bDpvKo87afoGMhDsPpi4cBqAgUTz2jb2KCcdY6rYXTRVTzerqzCxJBDzBEYsZfBLMeiu",
  "key31": "5c1NatCgCGxmD8WjP1jDQShXviiF4US6XVtdYGUXxkLG4HtsRe2zBnKPbQCJrLjkqzPSM3Etsqs3T4R1WV5aJdqx",
  "key32": "27EtJuVSQu1C22LusPxmaYkyS38dn7RYykCHmf993rUMxbb1xL7Tm4JugvehWTuzy6psfGgQFQTXCMQheZsstpQn",
  "key33": "2eZKBxxS2rgLsed6rRSRQhEjDzWkd69SxCZqieE2KeEjZFBzkaJz4GZSmxDNMS1EoFKDxRGRbMwxeatc6vWzqG1L",
  "key34": "5SbanC99aWi9M99hobYqPQfhr7xvG3HuUVKvdLj1waYJ1yrdkXgtaLgxryQyY9KG7uz7jVwMu6e5aEuyaKZMeERr",
  "key35": "5ucHFx6EQrxe7k4BSpfEG479So4EprNdskxzpV95rLacnZUYDqowF2bc23TUa8xNWLaWyhzTvwEgQPEMbrAqhHpv",
  "key36": "fbkudmE3CMxyBo7LpRLK1jprBdzFKr3EGMFYXWtDawr8Yc2Tn3TX9EP1m2ZtBPiM5Nei8yQSmQX6etJ7r44WB3u",
  "key37": "55GZJDDSb7LSRBjywcX2vs63GNsqk9Quj6gfMqpp4ZoivP4KnuZE9M6vR93472jXbNRugiwPpYhqZtNgS7g4fDko",
  "key38": "3G7n5nHCDmKmhFeHYcczy1Xo2rzR5N45VZg15jtAF82xve5CZE6xqWV7vFvWvRXxo3TJGerPryLTJ6Ed46Puqask",
  "key39": "2yXht3FgCxie25gEfoQ7iFkiGTqUwSCRonZufn2TnGrJKEwxgZms7si9xRzPrQ6RGfrjyA6r4JRtQ7kcF5dzZM1x",
  "key40": "wU791N1pt6PQaEJVkwJ9p428mwYgtchA81eigWqD7PCtdXJJzwsc5UAHCcgEpwCQ77XuiXShFFfH2ogqh1PeN5Q",
  "key41": "1GBwPUcc8BRQPAAQeZohZKzXtMSjQmStnJ5G6s2jZuHEy6b5UgyyzG2HrtuKKFpYxQqhVZHkrkHUgZ26Q46X9pU"
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
