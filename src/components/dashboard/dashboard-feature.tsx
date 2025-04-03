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
    "3Z8n9DQs2n8KsBLiijBJmf8VqGQeHSLppsB9dMwKquBtZYgKpXMV3pAbLgYXK9EcHJvLkbSucQvakkLzcWyYNpZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W1QpuRnShUZj5wuBQyKo6c7ojFSX9TXZxQGpuGNyV2nP5XH47p67yhZqaESVsxXpPKxB9zkYcdonff9RDMghmDh",
  "key1": "3CW9t448KKCjvzw8JCchpfdmg5EZKoezUYWrUkPHJZevscghbxiZFbCBi3jczEh9xqejfBShoUD8DywZh4r9Tf1u",
  "key2": "2qBY27AiWKQZMtNzMGPLhjWFnBmEs7JAiz495g6hMGWtRzqEvrcr9wsnYQf3SRqJqZjwmFgXkRiQATBasK1vuBwP",
  "key3": "5SGEFQUMT92JnFSgzBZqSiT3dZSkhrcJV6vFHVfTZymnn98kX6hoVMR9nwud3oYd4ZgXHTDwmWznum3vutaSgF2a",
  "key4": "5x6rCwN5sPb2NyNX9F2LMsaTZdBaZAHr6P2egYhdSshqq68F46g391YHXQQ8y2QwrXTLAxRtvmuee1eUKoehZHm",
  "key5": "2RRXKd5zWeo79uaVd9DbS9zzBqqq8dupTin3vPfTak5fp8VuEVXCDgWjqnaJr3yAJZrcMp36eqbxPs9fEM8UdZSJ",
  "key6": "266voXPPumBwPKoPdU5964QPZL8ii4BT28SGARiGyWsZgmx8meU1pmrY4pSmfWM93CsZU3HZiJwUJCCwAVpHM5zf",
  "key7": "58Dns3MoEMDsbHQfpS2yJqDxEba82Q1qAzMimXxVmtPeSW1c7dLWJ7wjvQ33QMQ5Sqh1BcYfZmQyTzQvnBGiei22",
  "key8": "3Q6zTHZ5PYSm1RdfdoLbXtxLvjMNhsGymFvqZieBmgPWHf1D7fU3DkA7ToT3ksvBe39i3WThHcb7xHyfHtkErw1Z",
  "key9": "5vdVr5Wk3nzQQuD7hnwZckBv4QWEyJCvMnWWE2XEpYrPXcqYKdVEWidw2JgKrJDYWwQgzQWqizpkf9twnBUbdwFC",
  "key10": "2vW82JjcYKxunbi6BnuNbJXejKaNtQSAMX7a8yJJxQQ7d5po3kLyAKJfi5QDMoLcHPPYHD9V5v2zVcDZYEc2rkxS",
  "key11": "5f6rfEQTKFH1GDaB7dCVBZFqu5ZykxMKsV1qifhN8CArDzpA33iTyVZ7xsuehsqyTftx7NNZmTTrc42ki9ieofFJ",
  "key12": "51Hb4LLwFuhYwvoDsM8hVtCQooEZv8FohjTGTwzBmJSTR6cgYYNgc3YQUiimfpSKhbvJnyGDTW863FhS77PgxJxj",
  "key13": "4r7SwgdEqPbgbDA5Epnhv7a2E9JZAPmX9zhgriNYSDwVnyCrG2ebdMjbnScxY9PMsFdDxpAGRKzxBXnYt81YP9Gn",
  "key14": "45oJsKV6HxaU6WKeg2rMZRQpFanGBm6sxzf4EKo8G7rswzA8VmcepUMihQB2AJX8qR4cVQbAdXr6UGj1ja21WmH6",
  "key15": "348robwyrRePTsEWSnr6ZYKQDB8TXFdG78AhYRA5fgCatPbve2BJZEaLz9GP3Kz22JNagHsTsRp8uwVEJ8dMcr9C",
  "key16": "EjCkzkf29ucnGt6PH3cqJS9s9UJvcUnsu6r4dqiqcmEeise2zwG2pmEsudpgaNaAnEE3KcqLbTJpxC1CGrnfJgg",
  "key17": "4gp4EeMHnqQiNyuEZYu6unLqEhYucs3yaATXNvGRugCFzRcbX84mxr5rX1JdKgXFyMvfmwWcDpwvYPuDzu3KoJHV",
  "key18": "3yy9eG4qamZEyuTaMqT8yfPJYKuybpE985irCxmt26Fw9zHuNyyY37eVy3iuyCqoWkSVbp6qE2daiHZDvanBKiWr",
  "key19": "wTjVsJVbmpSMyKnZFjWyPc8gm1WjHtsqhsX2WuCTjHfwFqT9tJo8LdrbJ4f5XFDtgGaidEpxvcpU2wZiJwXUtXt",
  "key20": "2ELyY8GQyKE4ym8QGuWjed4NJnQwxMstGXpNjD8se45i51iNVA8LPgweNWFTW8koEeSq4pFWDMhX8r4BwPq6Pwih",
  "key21": "4T3GP3vNBrhw51XMwrkwcosqnvBerygbv11Ln5Xs6EDva26wD1UEihSyhW73mHYArmHVX9Q12txQBJJMMBy12Aur",
  "key22": "5rx4tnzxA3X2CRJU1jN1H4XiATDA3Tw68ZZNjHFr8Lrgng8fke2JqcfTTeYgeW7LMEVDMKMs2RKNER9C9VuMRSVM",
  "key23": "26rRDWw5qDfGwEDfeX7DoicZqPKdLP3C7xwkLJrQaCnapU4kLyvJaTv2Hy5spsKfkx4ecw6PBJW4af4VDotrayvB",
  "key24": "4Ae7no5QJB9fgU3A2QDDyDYJEJHzoV1WKgf2gHHdxBqQf4j825aQQfg6eQueRcos9NRuJNdmzHbMu62Vfq1UyVt6",
  "key25": "48os93afKbmVQ25TEMZc3Pr6aPQPQQEPF6E5zfmCH6NXj585kFNT2Y2T5QxZ33tQPy37nW2Xom7vtEzRkyomkZ1k",
  "key26": "66BQSzGNGyzRrab12hHHRzZQ3FKkKF4scZEwzdPJz5PKyjaYHeHVV4ChvANLR8FLe6bNKwhfqGwN8QZXW8yxUfcT",
  "key27": "7he5as2LownBskwiyYCKjU1gEskNVEypixnVMdEouLbJKJ3wweDM3MtqCmehpxHcnCCsrUPmEhvsyujVJwxVUzn",
  "key28": "46DHGVY4hmHLBg54iaxFdG9nuFnkyHYfPT4TW1DaLTPCMtsup2Mzhp1MxDgVwQMnpsQBgsApX8SyAESMgPX4Ezkf"
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
