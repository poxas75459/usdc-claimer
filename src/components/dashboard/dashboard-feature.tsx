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
    "s8HinvozHeGtoBiMQ6ivVpZKsMRRcXYMZtQZeBHDSorUTnvC9of9JNuEeYqYdJauQS4KKZhPQxByD913sVntpbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KyNdix9Yq9M64X2MeZw4QafdrTZeXsmtY5RzBzUEdxH7rrUJw5fdkfVn2JGV5J6A66EdnqWcDV32yW78SvNNQUy",
  "key1": "RYU8QF2Njx1BWWt12Epy4Sv8q7G3fzNbbCXFYCW6yiZzCiquciAXNYgFJBYVqedTmMyDaR1tQ5J3A8XkR6tUB4H",
  "key2": "38h3itVc5XYB1qMP5G9rKGKbBwfqGqw5sW8TKKxkccarKanEcTJW3YX2d26JVphzTd9vMPxpzNXJNvA4eS4Fm5Mn",
  "key3": "zX3J6GHjB6YP7zeXLnNXDtjcrQTcNoytEUZLSy56o8pUCNVQjBPMQs8a7AtR1eTkSNdKi2yne3AwVEmD9gijdgz",
  "key4": "UWdJ1VASXAEL8Qh4q4Gz6P9atYWGGGnYAbEGgEWHRWy8aGfWvqmbEkE8T1hEfyCSnrfmGLrTYXhCQF4BxMeKVH6",
  "key5": "2qa9K6QNMu5rbHsZgKEunnZoJrnZQBBzkHgjXGCNm7QPsqb8Ldydt5nitQpPRH8JfJZesLKnQKmVZTERRXPD68ZD",
  "key6": "U3jEkkSXHPByv7qtByRDETRAxMQqTg7wNuCFPnmR9xuZkDyfaDvSTMHvHeyh3j1ygNCHmDNSS2qiEkqznRG2gy1",
  "key7": "Rm23gdeTTZpzXWQwc8FhKTrsipTrSQ7kbAKeeM3xX2j5TWV2kP5GBVtAA1BopH19hTg4cM1UdeEZ84JTF6PotRx",
  "key8": "2PATh32pnwQ9fwp3Z4rNSnwZhUDrSs5KcYrLezXrtwENiJzUEV9ZNVkwQ9BjTEDg2hfe69uh1PhReLpiaCvU2HVt",
  "key9": "Pk9n5s9xAwbtzYhHzG5f7UrNRau2w4VAVrqs9NuUTmBPGZeN4PMBu1BTG7Br1FA9nrEkoyULbUNqwSmHE8wGyEX",
  "key10": "2MqgqGFwbwG7mgw72Hv5GKYamv1ht7AD4mFFGoeZRfrgiisGHCDLVpYscz5h1R4GYYQy17vDjNbotkkZZ3uxnRDV",
  "key11": "64yvdSxdy9fjEFMWbFHvLVu47LRMMeMZdT9H2YDZnkDFkpAioWKLq65qRSoHA5aDgrfkZFyvz7oymMVi7iyMpsvT",
  "key12": "5gMo7sT1reghrE3RRFEptFNKzNhyJVTUwWMLhdTb6JTg3Q5TYyWeNTkag3ozNhm74uLeFGraEc59tWsSkP3F565o",
  "key13": "ynyCguqDw8x6dS7t9vN8ADsBXnXJgCrKh3VwutTPtzgdn8hNh4VyLjL9VCVwyWHnRYvGM8UJ5V4gx1D5ZZiY48z",
  "key14": "3DsjYAxX4Vv3dE3yktJXh2aL9cx27HmQXAo2EzhCxdSceLZeVbseVSEjKxWRRcEZ4yi1EVK9uB8UvcrHNUGhTT4w",
  "key15": "48r8nfFiWMoJJYcJrfoXLoN62Suprncpm8vph8TiEyPdm99JDeDeKEJRPDhD8Qg9X9PrWTuCchJqGa8cY38BuLi9",
  "key16": "aoptepQ16g1ZPLKhhyuFoKxMNbuUws9P362XxfqreUXCKbaigaRs7gCtBLFAZXwwBLikdUMJMBHjeWGqtipt8KY",
  "key17": "5PfoFuH1de2hvbL1m8kEN2B82BZKEyVecMp1XmjgPjLRK34iKNmbxPczUCCG3L63YW1HC5Q1FU3eRxdPoTNWGQLB",
  "key18": "2beauVCbX1sWN151LVS4uFzyWYhTm6mhRRPgaXKj3bfoVWJDLcKWCjkg1aySJDQk9KHLpUSMedskPtvr1i4LcEtG",
  "key19": "Y3594aZwCUXtX1SEpYbSeLhmSfrMB1JU15hG5zZw57kDXQGfDmy7MScF4Xxnde1PEDaj8tBKW2MyDPqCkhDEJ8j",
  "key20": "2Dckv3rbZjMVQcfnRWvmwqH4VcKwZmYhfY8uRjQKvsN3v1dvD9CRg631BxVtHiFTWQboTnjevLaEvsNupC31QtTY",
  "key21": "sbUSWC7dMRSMU6883kyRJvDPuVTkTmDbQhXGprqGiYVyERfKaDFHoZT6bJSyo3ymQ7aLES6suXRaRYgjZNdmTpp",
  "key22": "53vPrAaSaQ76rTvfBkJnSCwvHesJjq4K85dZrEN9Q8TTpqyrTJ43LuEys5H3QTvTL13c8MGVZ1WdWSMUumYctg3j",
  "key23": "345Siq9XSkYeqsfS6zEUUPyRd2enqj6ifHJY8r9twTp4SbEJvefKyYv2dZNKayun6Bkeugne9u47LQATzU6CgKZw",
  "key24": "4RjRvhu6QfYYiwXArZ7NhL6PASwrBRqxwd2kku5bsscoRLQnYuWcazHT5ujgnidwbx9NhPieFHGmAnhcoZBLzCT3",
  "key25": "3G4P2hbndvb5FS6gkVdL6AsAKZVMxzAN86Uh6cKYDCfkTYrjhUit8Wv5NccwHLPxqA4vGuc4nuRvB4pHwp7nJa5z",
  "key26": "3Va2Awo3NYqpVkssgdB31R39nFCd23WJEo5zMX9Xr8BLyVBD62YPN3EpoDxdfre6t8uzqdJCdKzHYmkpkTUbUp3F",
  "key27": "3BTTTDWZifxHmekA9CtEv2162C18Wpu51Hs5fYnJ1xexpgzep2hFqJmYxcJuNSTA5pTTPH5YQJ6RWmNpyERGuxL8",
  "key28": "2vZTSAoTdmmNxRnUzHXTfTy4zvJVmWNZXm7KFzRX3wNdg4wK8iPgQKK6VKxJkyHFxjPzPnyZgr1RF2MXCoo6mKqk",
  "key29": "2DudG7UDUwtArxZmJqTyYxymRNoG2nGHRHqoLxxeCHddN8DYVRWZuyLuaFzQVn2y17uR3K5DNYhLUtm99D1uo8ES",
  "key30": "26m7Tf1MKoNYL1Px9TxWDoaGHANh7nZcMmXQxwPRjY6NjV4wkqHDd254nA4rufLneVcuViVVYVM1t33KeCB35sj1",
  "key31": "YoBfC5Ms9jhFRw6LiPX2Tzu6MW4Pr8MqfqrtXf2AXDHLv8ztZrkpRCqKK5p9cse5Tfro5TNTL23mKEGrPGDAYZ8",
  "key32": "5rpXeiisCLQqRCwDNDmUQmvCzZcMN14HTNJUAyM3xLj8Pm51rDxMjCvWkFLoZvy9bhF4WPR12HQAp2b5udpzJ7UT",
  "key33": "3gQdyShmEadZxrnyJatBSoszjmhqaty4PtGMke37Tn2JLxsXRKHzBpKVAEaooXhnYzzdp6j3MUxPjoEehAoL1MuG"
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
