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
    "4pJn4Wd4VJ4FHfdwBN8vgXzHVKoz16FjnTjLkRbXYPFx5wskZDbwwHH1f9URqFKdwQqDJQv3NWTFUWqWZdkicRSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iypp6oHVdSq3bnszgNZG65PCqErjgSM81SqEYvE2pjF7y6fYmEu79U1SttasGN6qcVX75v9VGrpWSXBytSyg8cv",
  "key1": "4hoCZpUtxwkfXkWxq26ijuz5ZftDDVwGu32hHHtosErUXHeEkzQCFaachX3iz2u1D6BHE8xs23v2C7WhmQPV28c2",
  "key2": "2GyUfdQsdbeA8mRQo42vw6YXRH3aFek2Py3qfTZsZivcDZLUv6zC8QVn53VgmevZAv4kQnji39ndtZVmhdqg1Apu",
  "key3": "5QeRVG45hjKkBVdSLARstxEXCNpPRMVGbahnDUAet7zSLBUzw5YqzGX5Jww1wxu3QteCStkvrdp6XWpKypXzLGBb",
  "key4": "5N8PKASC6HD81tnsP8ak4k9DofEUNDqw1dLE2CFDw7FnLdMttjEJEMZjXWyE5d2nLSnJ4C5iT7aaKoHizzguhxoi",
  "key5": "5j74AqxCeTM5ebXkyUd1nPtYTnvFAbs67Fn3eBegj7TghVyb9hqvv4ejrgmPXbMge2j5DoLXEstQ7x3LyemZ4twS",
  "key6": "4nzE6QJTG9oHfJaWFL8a7bZYfubXAcGpkmvPSgi3Wpf8ky8a219WAYVznJk3nZXEkbiCHUPuo8qUTTK8HV8GB2Zh",
  "key7": "25k9W2WHHMVBVn5vvf55Bt5ZD4s9747wKZt7xXHWLrUoeSvSRbAGScqAJPSjt1DYwt4zGnVZxwAvzeUzh8V8N9qj",
  "key8": "3NtERRbYkpmj5oHVHhNjjTtymLeyj4zRuCKQ7XjABgspnbEHCF5PiGngt5SFVthGBk3VmbdXPsvXC3fpcXKXQ8DW",
  "key9": "28DipWRSDEiLeHE8or4UJspnR61gMFDQaoSqet497HCtSrT2xJsGSs2mR1HihUtba5VrjkBk5WLzNjRcYidkfpT9",
  "key10": "3rc6UFG1x4z31jSKzHge2ErpyQrfLpEnjEBqunbnNjk7Ba3ALgpRraCNjE1CcRfADWx99DuHks2icKsw8VtrcRyA",
  "key11": "62eN4xArYoharWGCThfHzaRYaoWMLGom9kGePmJixDCNxDEmSeUywnwpZEYNmwxpn3ds6yDebWY75eaWu1SGsVH2",
  "key12": "4b6Wmqzawbb9iocKPMmu3fucrD1m6xMibL6Han5dBzg95ai3MSe6EevyiVVQJZZyaCEF21swiWmcxBWwpztJdi9s",
  "key13": "3HAgAyVEZb9D4bJh5D1vdGP9T81UcBQVzBKUWPnqnhKn2GLGvyYLp1rD1oLCSv6daJRyVMYUN3PxpT7KLSRV8MrW",
  "key14": "4NM5ESf45Rph7rkMXQEHA5wkWg1edAuoybmLkfDDHwDGpUoc1hHEoZMJ2rw11Bh9biw5ou66nRYj15jw1LzBDvub",
  "key15": "648pZVyEtTjiMq5rmARmR1uH5mw11Hrnso28f4UhdqHtFKSQDC7n35yMdftqBSdZSqoxTwW4Ek24mfBTuZjqDNUG",
  "key16": "4gLu74feSVPR93EsdPLbxWZ4vsEHkPtSCy74krwfYNir92dZqWmuYXA95B8wM9QDiEasZq22za312YBDLUQNCz8P",
  "key17": "2kjtKaFiAf7V42u1NyPLpsuTteZ7RH7vwJKm3R8LXV6WpB5vzoVCStfBfcZwWHbgubqpzoSHcgmDwipjqW1KKwvA",
  "key18": "4t4dwFKukUQE95HcbMaY9n1CZtC85CXkQ5sYSq7E4e3c8bHKAeqP5UM9TzKhuTGH451aDogw3KCACi13APV16Xnj",
  "key19": "BTpDk74qYdrK99XQGQWmzWhZekW7D6dQcrQpxcKbsBhTNKhaF3wVHL7QfH8TFjt9BcqMXf9SCmbWCCw8uGqWZFW",
  "key20": "4RPkxRSpuBS6QQZAAjWsxBNXMT8fPw7PAgpQcMczg3EzTDNgeFwPjqtg2fVVwwhBNNWbdmiaihB4mK5U72SM43N7",
  "key21": "2Feyzmdf2sVocLMvFxurct78MVB2Qyhnfiob6uQZRJF7DmcYxa1JTHTizmxyk6mpgWBsMnUKkXeZjk9CFxYxB5kL",
  "key22": "3fiKEyqEh6nQWwTGk9XSiap4iTiiJxYNM2HnyRmyGCub2KL7xr1LBjCtJQYKGhxwWW2aAZQZ6u8wWLs2PDEwNacF",
  "key23": "HJYAh5ZcLw5bdwsxNMhh7E45euBhRnAbxV35ECuCxr6URBi5R7JAQJEetaK11fQS8FWpzELtvbFMCSmFhz3rYKt",
  "key24": "2xTx5L6zEZAdzxP2iHWsxTfaA7LVPvZf6CYM5SnfxTgtfT71UUaV8xobhB6iadDRzm5XuAb9FBnHoehyjYXEueyp",
  "key25": "2zRGEhGUMx2wkmt9jkZDc3ngLihr9U6m1fBm1kY3kJSfXZDN5NAamZg1xjN3guXrYeVE7tLeCXPcKnCSdaU91YJR",
  "key26": "2uW16gLVGLSV52xhcGinHGNoKLgbPvHMvVu2jSH83cQiN9myYw5Pd2CnG9eNAokreWfPrdxPQBYRKqp5CTEwguTf",
  "key27": "62sWbvzcMtqa3cYLn79Qp5tFS28L4fb5BvTZ8FXL9xCnpyQ3RAsiTStavVyQWtjQ28iFoKm66NKPtfzeaCkX4XyM",
  "key28": "3drf4GE3Jn6JkcQCoNbJKihk36rWxsWv1qEv7zExHRYmazJyArQpvdgH5dSKx2QjtGXMoutyRZkAE7wtRpbhf7RJ",
  "key29": "5JBnt4jyArrWtaega8dgG22kUJWdk8f2Ejvttgey6M6gqitrKgWagCpL4rngo6K7tRnGBLFq8acT2r2fHZWrkRcA",
  "key30": "2yBhupCwCQdxCv72stF4TegwXY5eRGaUqopYmW9ayHKFbvnzig5dA8rMKDS9DozeAzZYuMat4GEpPBS7QBBYSA5T",
  "key31": "4SdpkX6X47ZweWfiiZnR4fsqhjvaRKTxZHEaTAJy4z6XupT25AmkS9gLrkP67T9ySFvh2keWdPLgZmXpuhrtHBPS",
  "key32": "33nE5vBfhL9XiVZX1XXCJMbSmaFrwkywcvuM4q1SZYTPvXRRim5GaZjWskqPDTNpiPmzsQNkrRykNsiqEbzP1Av6",
  "key33": "2PZjTDxRmVvq83Y9XwoEjgict4A7L2g6jdm5DntdZxbfvyixTm8uqS6RmBFavQxWwwz1pxPhKRUe2Gpb8sjQqdMp"
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
