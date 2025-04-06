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
    "39YHkhws6fpmq2DzyCDJtRApk1gzSnWLuZFmx5koR9z8vWLQmejGcitAH1FUFKpLUNfrWzpRaM19SyQgUgrq7RdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CLBPomXXXgYNr6X6ZdQtYPH6W36UoZ5uuPbpKWMUtbmrxsdJ3sPyFn4jrzdRqMzP7neMN1wmi7dGkPYF7Xk62Ur",
  "key1": "5ECiuij4vZNVpFMEzPzjZRm9gbLos9KpmpkAvD792Ci8b2hXZ3fa87nNSs3bZzYMTxBVuXZM6w7JBxUEsJf8mNDf",
  "key2": "41Pw5xephsVhze7CX4oX5NqJaDb9ur4Ly2Fgp2L5cikaTESf371wFgspCJFX3ECFCaHZ4GcWxx2KEVw2SZfQpQ1p",
  "key3": "3k7ZUkJotcBKCW9esQfriCpabmYUdMSZZ15KqK1dRVxnx4wP8r8Ko1DYXa5zKZuciS7tX6PTQQEpu7wB6hCzQcUP",
  "key4": "4wS3QUydJAbXWVdXEzMFszYgM4ivHzEQ1y4vNAYBW6Ztnt1SiiM6MBM4ungio2mPRZjQqKGve963etk8jnGhfmSt",
  "key5": "BJnqCiXzSjGuugt9QemAgqxtFTLyLAyS7tkdT4pvNJfHd1rQGkrhmtFTfCazyHhN91eCpcRAiCBoumh5rrGh24H",
  "key6": "5FQ1qBNHAdbhS9C6R5vX3h9KoEyJiF4WhUToL9RCYydkMkVeCD4pSVZdvr5gLLbA5WUMVweFCR1DPPg9kMFNvzen",
  "key7": "2jLWsBtAKgFAckRkshwPRXPGT7etQyDMzTa3ysAqjP2AxbeSa1x8hjoWJzZFKxvSjk1Zdp1DqPcwF3MKyvYfeSeH",
  "key8": "5iCJPod5jE3npZwe7oDqdnJmHdeHqXrj6WXDagrjknKc6qLttKRzAWdSTGvBMuPFWXSBbmQyTmwqaDkhn1cSUaFQ",
  "key9": "4tpPHTHUeWhXZ8dJT8nXBtSMqUv7umFkGwou42FjWgRf3897ETAQTeDF4BRK59YV26bUoPhxzEczdyX6BVuowHSm",
  "key10": "2iX9pT5uzLtMWCavgnrGrq7cMZRaEjX9DKbss6xsKMcgDK2Ee7NtBExHNwj5u3khpwDbjeyGd7BPJMQmw6mjiKWR",
  "key11": "61By4FyZFiWkrFgrV4xRvMdpk3823Mrm1mxu1ohZmYBrTw81QdmixLauhtGjqpxhUAFviwxPKbMJ8T8Jd6XkLbvf",
  "key12": "2mbeRPGUiNEAJ1CWsWNdKtUGYgYVvQqrwfc8Wbb6X4r3KmwZ7btWbGM1RRBafKjgao1nCEFgRuwc11zpLoApekt4",
  "key13": "XoE97gVPT6vPFkwDUhNco5Ywep8wkaxyL3vuZxHhvXhECrYmmPXnftaPgR1rwQP6bQyJEfWXoKoY1Ck7zVUQd4R",
  "key14": "kSsvr4e8T4jkvzjbbrMq5kegnN4zrK8Ta1yxwrt5RCTfG8qa66YrhiJCqZMtEi3sdBvXbG3TCfSEygMM4xcKxZL",
  "key15": "g1u84X3ivmuRRKbJZqdnN8NVBa3q6X6Pizjh6Tb9pxy8mpDwGw4yfJDkjDTHkofwKnEuooMbcsBdMX2bAnAZLfJ",
  "key16": "5dZGWyadVYcvCx3zceuq35kynakErbkScf1zkWhJ2xYHzmDbieJmmwSo8K6SLweHVCYMziCCk8LZAHMtDbfmZry9",
  "key17": "4sNAUUT6e1mZGyQJEdbuM1j5Nf3w1ENnzRQU8xfX66DQZsFVcc7PyMz6CRvNNiT5sCk7imk1tmmu1HR2CcK8kubC",
  "key18": "4mrLDifkEDnQsm9iYRkkrJbHHg1vXGhcEnrqyKnUuWJmDuDWgj7MGsdg1eQMUMwju1Ma5ph6SNrBvzzJCVYJd37i",
  "key19": "4TvEPWwPAHt6J8NFLohCXL8vsNXvYPni1QPq9rCxdpqyjY5N7PEsB6XPXxi2Lsq4VpkdhUL862tRfKJC8EALM43m",
  "key20": "2vkawfqZdpNF5ru7gLfV5phekKfHg1TU4FQpouXTddGin7rjHqBckMCq3EnBsj2a6eGhBcd2T1pRkyDhix48ZorE",
  "key21": "5igwmJrYiHmeT89c2ftjTUZwbfvbpCnLP9awKVDw4YdCRqdbAWnsY4zgwF8Zred5fSo2pzkwQGsc45Hv7WShwjfr",
  "key22": "4iwakkjCMSVAKaph7bSUT7U2SXB6MYHHT3WhjBZgVdWzjKR5sjnbjxGM1BuGzH2kn2dQAUjHfNhyNcHKxKfGEn6x",
  "key23": "5x3mUdADMTQbwQUhjMaqYBdTMdbnXBgAe2qUDYCXGtwbFPtHAhw52RVCcJBzQrEGTUNYDvouvf46PJDEaxY3fxL5",
  "key24": "2Yym9oaE4g1YEcA8w2HXLGh5qF74KjHXGMaU6kAcrb4BHwMNUs7mNW4ta6q8QvgSCC2an2r8H5TvbqzZ26V44pTF",
  "key25": "53bb6sN9tk99qEbwo3tSjoaULN4iVZExNXLfPaUChda2JhkxEgv1ksbCPy9feJoKLuwepzYheMDUXbVGRA3QhNH2",
  "key26": "3yiS1rcAGjmrMiWPYJdV3UXitmpXZi1JbnTAdV1aVUvjYmf9H1J5z9bQc1vCYqFpoYSiKxJ5BMTy97wiWvrk9XaQ",
  "key27": "56RcVbVDSv24W3Jr6q1C5ajgyAJHs2B5Mpis1nQt7ks3dYFbzNzuuSceBZ5QBY54rLdhXnHhJe5QM3ykAm9Tmmxb",
  "key28": "2K1uFD5FtkYQKKAgb5iBsapPaMbioGM24dgzyX3WP8BcRRCj5JZWCy4Zg9Rh5QkX2B3eyAanfR6KGD2yF8sbF1mj",
  "key29": "3h4geTLcJsrUKThDPGFDZ1unFwgr3vcpV2YszeJZRh1J4WtTEBfjdgaFFABoUfUDQT6WudTZaq9TeF29JvnoBUH3",
  "key30": "gEE5QafkM5JCcC4KcFxK5qYhae459cKTo5Hiin4titfsKQnkcBtQTYsgDkTUCJJyzHFwWgPL5Bmnf4iuTpb8kFo",
  "key31": "dW4vfh68Az2eHdFauwfaHn2H28yzGiXWztavbu4xdHN5Sj6AE5FQtH7C6G2GdUEboQseZASjPTWmBhb7b6SgXSH"
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
