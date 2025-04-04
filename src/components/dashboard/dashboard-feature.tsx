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
    "3VyEstdqDi6oSv75VCCPQrNFZg7m2KZ879qSnqTgwdXUKd18EhtGh9kKWVaX62BTPyYL3q1Q1cZcKZnqFhrVNG7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25eF1SN6c3iE5ZMUshfWYsAXYyQ3k51Zii2DfhszLJmmHYd4bwK2tJ8mARmwNtW3FMWr1Y2WcAehnDvPjU93euTT",
  "key1": "2Sq9YdXN7DCs8UgjdyuyUpGvMKeFVorTx7BiGF9sSRKiHQ5xsCtPfSxFHvsPKEf2zntLUpdj2KDxX1er8uxNPUZm",
  "key2": "5z2TBCV5W84v3LTzsWjSzWureVDPqK1FeNm4zg6FJ4wXTz6WdHQrAoAx622g5KW9pieo81vGJyqLAvuNH6saur5d",
  "key3": "2ymEYpHJS54jGKgkXxjVoNdno84ekBjX8HMhAS6RFiU24EV1pTfVmMUfpJxXnUUCpAEmhaEbX71Wx1LukpSZACAq",
  "key4": "LkMzbB9TALNfAKSiHftDL32JzYppjT36ucjHXy1RyVW4sioGNQqcmmX3sCxbyT4qNm9Rroa7zvB161SB13B4Wne",
  "key5": "4m9hFqXikheLgEMqhBNyPs8Hy3fTKj5AG1mr33yPxjhoSLEU7MhbPjHaxVGPYYSQiBwURaWGb2K4hYbWrmw2xip2",
  "key6": "SsPGUGbhbRZxExMWYvaaomtVtZGnm2tLPvcb4oQj2MPhugzrQEQFuqGz9Aqe5aRiaoqUCNMrY87eybcBukVcNAp",
  "key7": "39gPk69D2YMZwLDeJxLaRpjBYtDAYFDbmuBpyXGBR7BFZw7w3CEP5tBGrgtWLVhZAWP6jBkgGP4Yc78UphMxqfbr",
  "key8": "2HmKmfWMQ51SSfqysp2j9cN8Sp3xW9KxRNC1V6ondzG7Vt7sD5Tx7NaxTC4HKXEginErXRQQ7DCzcbud1pL6XXPW",
  "key9": "3PL9JhJhSN12JJaWJL4C4iHBCxT82qcwEWNSJTVAsvUq84NhYQmKXFinX4aFbZZscLgZpz4tEWX5PTLrm4xoW9UQ",
  "key10": "nfGGTMjZUtzhHMpLmVgpns56ew1dEnmBm6YDNpfKXLjKL4kH8qUdw6Lcc4mxJquw9qQSCT21t62bPMCQjb5knWa",
  "key11": "4zVChyr57waNhnejAwioESPM1hPJ6B3QrgBBFh5mjDoKqAgPwKFGs2goJHFTR3yt2B6ffAAmazPyiZxGaN3RiSKF",
  "key12": "SFiYKFQeQ7D7SQeH3bWkqDjcrScpALQLC5MgvZJLDPKxtM47s8bTtcCnCkHLef9921ReVRxQWKa9GpCxaeSxL7a",
  "key13": "8EjhCxuCqWozNH1wCMcG8U1FxkWdKueMCNGAETip93iyELJyxHcszZAVCmqzDpzhZwVkxG3ah2vKanvCvKepisX",
  "key14": "kmAghy1HgZLwVfzp7qHgvJaNoAqdwWU1nakzziurh5oHqka8gmRstb2dz2RVa7cywS3SFixmVmRHMFPsK3nK54z",
  "key15": "3xs8Jz8QVhJZbfuxy1Dph9zLLDWtVUfrAqu18PwwYUsTCNzFBD375faVSb67CKqUjubLHyzMmFbBmBVm5hRFr2w6",
  "key16": "3qaVY5ZYvWo8kxphQz1p8t2wrUDkD7JyzVtmmBvGJZT2fyHKPb4kko94t1hReSb6CykMDjZdhiWGdbxkbtxfKGgz",
  "key17": "5T2cnAaft44JKHhPzDCCDGhBV3fsnvmXLAaCtrovsr5BsTpfzQ8St5hHy2vyVW5e64VatqqGWk7qgfVnBsmGgxZv",
  "key18": "3egXxdbE6jFfss4LqjaMxZUTfid62RNU7zNaSvsp8QHJGjudTLyWrgmMRCtUrPURkc8YNueA5BmEoZNMTrj2zHnU",
  "key19": "5EZpJgez3TskMWky86VSBmqxcKnbdDVWAVkFFLJpQ2dKB1egK8EzdzRVeykRSLFB6dPrBuukh82NTK7mnnPwoBri",
  "key20": "2kAeZNTnUoQdjqxisM8djNM5QaVeqVMjhTtJeCv3E9rBiBrGNqLxUCF6iXN7DfMC9MGrM2TeiQShjYohnVmW4FXT",
  "key21": "5VJSRrSE9PEr9toaW6oTf6Ynf7PqQJrJZWNTsWCGBGGvrqqBQqGqMG7qpaNpfJb59ETwCtuoukCCzBDPhsNeYuDv",
  "key22": "4TRo9fv7X1JdSRkvArkh9LMUmGNVGn3tsTUnTyKbKsTZeky1SczBUERstvSBK63FVaquMLrV9Nc9SYz7EqSSXeid",
  "key23": "4tkrCTvbEr1YZYj5yGcWobXNJsNFV1WVdpQfbvC4RUc9E7ADnMNbD4NTGLrCKhdhGbVKe3ytnqV4XsrFC8a5oNCk",
  "key24": "4hnEpUWM8EtYxhEpezGrrNXMyE8mvZRVkH5X6PF1887HMqMCY3SYe83AhGvTnwmJeHgTmicTp6acpJFU6Ska8oZs",
  "key25": "3iuH23ZbYTYLkZaUFvtQQp8PB9hv2HjLzNj4oMh2uVrQeuWAGc8jKrTcvHfWksSyexYH3dNRe2mgDdKVkXMrVfUE",
  "key26": "8nMwuJPn26fYwo5Ly4Sy9WaJiLYKpN5E3LD9RA2mccBc19hRtXXbg2vWkAz74Q4YcoStkT2S7tNc8cfxNmtHfjr",
  "key27": "5Mp9jqQFUoXVy4zU4e3SENv1n79KpxZqgrvzfVfgSivWczwa6pD7p8N6ceSPfbpqLxuftgHyyE6S4Mr5u8Gh6QVK",
  "key28": "52MgWNAnGYReN8XeDUnsGwCminpu5nCSTvnx74KygTqn4Ua4taAH2TJu7crm9KAjK8iR9GZmXrgc9GXbDPDkdj3w",
  "key29": "24Q4MTCuY8o8ex2ezwcwsyw6upBxZGp5DBcM29CWLBsptq57iGafgKdCDfQ6KVN8N3JX2YWdM4mmfjyR2n8LzcTR",
  "key30": "5tefE3L9VjGkBTS1W8tFXHSrJstw4Qj81mT63QoeAxH4kmwGWBeoAwrdCChbbRB6ciZ6YySqGXdmsGkpy2HAtY6j",
  "key31": "3KWY3LHe1Cj7nanaL2x5Yb31QvKNctgRVNvNaZk8FcEQvajejHP1hYXsi8Kk2AYVuS132hPwAz5YMe23dDug3a14"
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
