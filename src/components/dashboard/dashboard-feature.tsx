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
    "55ZnkoDBxyZuQqTWpxCQKBweWkYqWvLCxqZAA4zef8Hu1dxVTYDhgNuLHJPS5DmPetv4ZWJgYd7XeRNekWCCnuhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TMkABgAUpSDLvT1YvsQmvtddSnPzt38YCYgYjaS8Xt3x7jbYhJsxhNH7tiaThdTiV9XRpJ41oZaey35NxinnXqR",
  "key1": "52L1By1v3gFCfhHaMkq47bSuVKx3RNrhvo5rb1xAJUBQBtQn764zfTbXv5ScHo5byXyG5SVxWBAby4Raq2sT9gXr",
  "key2": "2Mij8Jpv81yf1BjGKThUfYKCecaKRYc2j7ptsUNR8pAVo2jceHogx4XFE7R6cA1wynFFHDUVbh67a85qvwfhDAuk",
  "key3": "4KB9SYQkazyqpHnovbekRiU5zw7LwPMisHJRWhTQxZfjfaXoFVUCBTszTLf4Sd92mcDuM4WcPMW6CSpxi8dsAh3M",
  "key4": "62fCusKCXvzBJhvZL6XgL8ZAwpCq1zEct5C4s1EvN71xBraoYTFFxtKDs9EVVk7QAQVT4vpqAzpT8af1CMErpd2G",
  "key5": "4MzomxHC13zu1QX9tJ6tKiWtcWcahqDgtPPaXmtuq6Tq5iGyj8AzjZpfCV3rRpzSMsP8e3z88gxLEnD1AeagQXzw",
  "key6": "kVbDX6efz1H43GgQveX154zUTJJv85GUvaELSsCHMsiyfDRX9kqqcr66FiThUiWEmHmJhw78nSMaSahLxS9o8Dr",
  "key7": "2uCWsethsnGxVrKfh2orBxVb1T6M9YuwkwWjTd7Gb5UXW5rrNYgtNwb1oMNiVGeFwDRnDjoQqxgyStSvZDd9wR9Z",
  "key8": "4pd57yeMr5MuVGzD1XwxY1UwXVnhySbePKiG45xduHcgkX9FahCUJEN3uVirdzwg9kDMiquLjDJZMnH1yMe6Ufgb",
  "key9": "24jySTN16VZ21cByd3HPQ4DHuHa5NNyJi6NqNYozKbw489FYX3UcZovfZhdofyCRupaa3WznNayAwQyt4Mq6hChH",
  "key10": "oT7T3CC9BaWT1VireYQkmZLC8qhV2DVWWWY5yGTyzVdZ4y3rzkLtj16hHUqcctcX6U813JghwqT8LTsVPXXvdp9",
  "key11": "mNygdrAhfJFufwK6CdQHKi3Rgj4ymgHnEhstsrhVhGTF4ZcKgfeGxZxWfv5RpDAECbCe2BcXfhfTBx3nPFeqwdc",
  "key12": "4C7qojHv5YYSxhc2dK3tqQKa5mc1fmAgmc7HQUfWkdzFnyrCSvRVUNXDwexnNxxHFTrtKesSGyWMNEQMGR8EPHBC",
  "key13": "38HTnihFp9qHY37yJu5i9nwP9LTNCWDCbRJCvnkL6MsnCeGFSBuLtDFFr4Jg7QKmnPdHgYH7aPDn3QaFLcza2X6J",
  "key14": "5e4g4pRVuFc1m95rUR93uT4y5QWyatKW1n9YWkAYhzN7ocbsAeVjQK5UfXN35ya9AjRZ6x53dW2fcjycSvBLWhYR",
  "key15": "3sPgmQp6Zf88Hr1khSbqECT7r4967ijK7yuPmgusD4F2eLE6XZvJF3fQG9Mx9vMdvKY3Bgrv5kA6E76wqeoaN7pn",
  "key16": "4qLDzEh6Pk1PbqtEjrKCUjtRiq7a9swVZn6GC1qtRLFY8uG8kPbaxUzfuD3FesCsPdEZBan1dRXhvjjb5vN7BKVv",
  "key17": "25pkGfg8qVQ6pg5Sec6Jd1YgR1pQ2mMyuukQ9RWgDAKCdU4reDH1axXBifhKJ2GWRxk36rLLrtRVBTWaZfnmQSPS",
  "key18": "3TkbUeuuDw7kxx8ko1CvtR3QwGkK7u82QxrFHj1WmfwE7xFpFoNxTrNFNxcPG283xqbdiM3yQXpQW2oUj8Sc4nUG",
  "key19": "3N5B3384wgA3GN39vRv9i3S6hGuf9pqmrqWpCk6z1SZ6M5jEaJUi7nL8b9udqu7nsAsyv69qPn5cSmMMtpMfGZme",
  "key20": "5dKfQrdmE2eFLSTBgtfKyaFJSnKmwreTZw2ugNyYckamiDezEHwomgNxUN9ivvbCFbRY5aYtGakTCVjwuBRkbDpE",
  "key21": "FZh55sEG5vAzZR6CV7eRPmkAcRfWcRzBtsm9s2i4G41mE8REspLzjcZUwUFkeG17n1xhfzqpRGhoBvtA3mNYZMz",
  "key22": "37NAtDU3AMjFE32nzzsNdGBTaa4gq6kHQPESLPc6pZbQaPNsyRBZEk9gafsAKoqtVrCdR7pTx27sgnD8X1Wnq5RU",
  "key23": "3ovXD6itQshAbZg6LRzYcRXQW64JvfpqkyDTtrWkK4SwEYgQgkjyiKFwKbc74xJnszFnktRhnxgy8YxgRQcggCbJ",
  "key24": "8qjy8EnCc3KLo8DQNe25mMVDDFYJGPhWz7LuVc7XHk5Ucgt23eXgoHvGisELUahkdAi5o2rVMP3jnDNmvYg4FTr",
  "key25": "33wvaZszYVwCSCZiKgfRteXEBX4nZxnpnDuPpm9rrz2z4suFkswSmMJSc6t4fy4hLZWwAYX2ra88qqBhWeFfZL8M",
  "key26": "2hph4vcoCkCrQx5o5euKmnJou6f6dU65G3G8xmVhGjqURUzr55NjQZFRUS3WEwuWXJo7Q4tTv5zsv5daamEvfpkc",
  "key27": "5FcCLvexXvQ9S4kUzoj6ow5RofmP5oybXhJDaKMrTua281zwtiWnweHV826Kzeaz8VSCKRpZmTNdAvRmXitx2o9s",
  "key28": "4vo2ubrZzrajd8kZhAVqsZie5gw2ZMs9c9Sdzeo3vtMgju2tRFrsRgsx4WBV6xcBFneqbwVFanSYWEZp7dqNCzG1",
  "key29": "4AQt7L5UmHqPcmLVUPWac1BPoVAQiFXsUcn6NuWsvQVtYtPuWqgcCu6MmMgZdDW3ERzHqMQVH4X5drrkk1NXFzYo",
  "key30": "5gYKxiLNAerGpLnofPtgZWC5uePVTKNz9GpxVLqEdhwSuuzXTW2R6qwTEftpKGtmmVDZUVMrP6y4D5XSfPV8ZC7M",
  "key31": "3rDRsEi8gv3cxC7X8WLJCjp98zojyFC4jTah5MVVD1vBbMCuQatyaZ9jUD8wCkgsrjdkRqbte8ggGG2ny4BGsW35",
  "key32": "3m4RDkdrLj2ZhoshGJgj6jqXVXnjRCGqhDTT9fNFY95Cepm7RQUHN78yNH8QDdhdUnyP4M7U8zcKPVjzkhvcL1se",
  "key33": "2gjYAevDvtqbC9B4dYgvWkqMnVNRkq7mA2NVrB5oQoM1PwVnsDqVdkboiTwuzS2K76suUy2ktEvRPrgpUBFkKrgm",
  "key34": "2ZWfXyQv335xeAuffwxxus4Bb4ZHR9DTUycdwbE89RpexEPjug1XkM8ergfBZHumGv57yJhB1LUfmi4BHQVw1Xnb"
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
