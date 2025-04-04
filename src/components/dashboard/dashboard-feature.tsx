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
    "25TBe2qkX1gHLkXwRGUQZer2U39nFX8scmHXBHvZxRXoGV69suWnLeBKkKswbcwyY8RBhwfMPjkey13d2eei3XuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WKgHWGKQ52c4DqPc7MykxJUkrLv6tnwfvVMJSjHnZivR8ynFefjtaxCBZNq7pGdUXpGi4rVCmgdnTRpuyuGmLN3",
  "key1": "jRZYiMokUMUJctH82waKrPjvbQYn7dv3FATySDJZvHP3z6A114kFzrbJ1i3UXmCMysCRReHVz6mndCcFkKfcddf",
  "key2": "3LRU3gxqCikqLYHA1qMTUPLJnN9RPFewWS5XRHMjZoEwr75kAE7KEFbeZeVykDzLzpiGRZ3ARAuFm2cuXekDfbu",
  "key3": "MqZ3jvfrYZCLqCWofK1bcC2bm4rQ6anP4nTfZWLsV4bH72PE124FKKMrWKjiwCeDVuSHKuy8tw7KqWyt7yipfZZ",
  "key4": "2qLES9VqXXdo6TENLe6tgLkc46QKzhaBi8TaTUhiGJHNaMXYaLTk73HzyC1qMs5ZZQdxnnwGZpNdEM6jxpHWSazU",
  "key5": "5uYGExiZBvEsGto9KAd775xUcXxZRLzUEDoNzJ6zPCscCT2Zhe6MQcFBoVsB3tSx1YYDK2k1RncU11t9Q2Ws4bhm",
  "key6": "5RmzH268eF7vNUp5T22JSgMuT5U5B13KQGtGqprw1EXgzTZchUbfnpyMhpYSNGMac1GG3kcNhW3vrr5bgDm5eFj6",
  "key7": "2Dfc76gZo36ZeTxU3GFY2HQY3DxX8iUMKpnre5Yeb6D4hM7BH4eXu26VFNTCeScG6Gtdpz7mZxL16dbyHeyfYmjZ",
  "key8": "3xkffpjV7wwrBbRAVGiXEMueCn1hUxFVvY7PBv42BmgjVs9PDvHtQpf2Ny9zLiwAK3MfdzA4uLmmPF2wsKaxmTfH",
  "key9": "4qxmGYCdanuXTMf8vyoRCjdAxYEiJuBTFYm1QovKZ2Br1vZ6b3n1yMgB6pYpiAPZWEV33EX4YLzpmrKK6qqaqdeG",
  "key10": "4wLbC8fNztSpN35ADxpTf4m69yCmR6wSzM4ezPn2qa89fAxTMAvSYxPh3ea2s5H1HxXSja5g5VoPe7G8ZbYdKkLA",
  "key11": "64fG4zDdANtrxWUksV72k29SqzXLHL2MswjGNU2zKgzLpJDa7N1UtSYrumBkW5PSNWg9TznrhutGePR2SbasX7Rn",
  "key12": "4WeJVaCrm9psJVusoyGaafjUE5W4arpE1FHWi1GVuiqGTTKLnv89STjnVAp6bsHgeRdeZYHKtJejaNxaWCShH2Q1",
  "key13": "3fm11SYqWU1uvJViquqv9Eon9n6jEXxWeV4kZX5k7nAPgDxUHeWbDsbtYfxzDUhFPMT6WgdfLqJRetuebw2Hk54o",
  "key14": "rNUsXoAtvU8GFcEFRVLT1E3u3ZAP9RwpJ654K3GxgVQ2tNdu6U9jGdM8WY78Jj8dbsCpGYnVYvXdssaY1fc8hN2",
  "key15": "31NhcNuBhTfFkfhn2r79wr7ouPRsAje9Nuj4L2wjrz3we5BcdaLmCnpdpWwpJhmv5DneytoZW6iwiiQGENxY1Tb4",
  "key16": "QGu8Rp26h9fHmMyXPuDZygDkHSnzsL3mmxiWzJTWqFRvN7kCjpXSvmRnFxvPir6HdKAMtZvfBR6S1eve6LrD25K",
  "key17": "3PXSh7jRZ2VfovXKGnYuTNQruRNLBhYc9RXwn5ePCtzduABbsBYuGTGLKZo8ymHXHYYXk2sKyempibQXXiDeAj77",
  "key18": "2ifxEVZnwVxvCBwH5pGNAWrnWRaiqNdL2AJe76M4TL1wdFodEUghQJT67xTnpiH2CeRdXbenPbUgKceaxwn8ZXCw",
  "key19": "2Vnr7fcPdF9iyHLT6kPeCNikvcrABVtqZ3ZLekjBeXTiLSWTU11bvzxtT7aC3e3dMt4aQNznbdsNQpXNS2zEJwu",
  "key20": "5EXbac5bfYQxrRA89sD4rVzxpD7g1cYFpnq9fUH8Puv4DCddQWy5ZwjVtQ3Swz5ZeL9onAkJ8pvuhMv5roGE6JeF",
  "key21": "7goKrgjSXLJ6NKUbiFoja7ASHmKKt6bRTTW3TquTpYSW6HMHAjQtgLrQwNbDEwiBrSz9rLceoBHUB6UnCh2dP2L",
  "key22": "599BjxoHCuydpdMaWceW3enBGYJjVgd16a9zLdKT6EdVj8FnYfHJLTh6wzCg2nuvrjXeHE8hTUi3ToXAkXyWiR5m",
  "key23": "2pV3cPkw5w4NTPcNDJqJ9fMXJbRQkwNDa3gQrHZ23xmXtrai5TANbKcyX4z7nAFi3JYpPpWDBFAkXUv5JMFaWySa",
  "key24": "2tSQJ3jiKUkDD9vrbxm1aPXCNdQA44kteakFufkMGPWUy4HpT9vn3mEtfDtGEGFNTtizdUR4nQVr4X5wuN8X5KTn",
  "key25": "GQ32bjNz2CZ6bSsujivFRXXEsbgGJkrSVbibEUCZGabAn2xxwq1twhrGe2QMRMas4d2PF88gjYHaJGoezhC5RM2",
  "key26": "3g6Bqp3FUZWHKGPzU18UrVPqsv258mNtoghgwvpWCqiVZWC7D6CZmT7ZUnVu6xZmPU9fxd7rcmfeqBN7urDJp3mf",
  "key27": "3uyq2YR9nYzkCRmDC5aM7HCegXG7SGba2vFqo3ZsSf1bnTFFBEE6Mmg41E7pFwQ5V7jSYoe7wBXHePCS46ijCwmw",
  "key28": "3aD8UefVccQ4QitpYcd2WZ8No89dDeHFJsQ13xD8JGHqHp7yrcbByCZhYWL9jTJFUXtzcLWvC2ZvHDqHpmJMwrq2",
  "key29": "5utAQSeu7SkkJMfoVPX7xjSsMnFzbrTCY54faSyiv6bCwyZLP5R2QyERCN4mCFgh1dKHhUiNPmycjarrzVv6X4sB",
  "key30": "2t5opc8LRWfvo6dw8yiQVsNm6u5GyNLQaY1Va6UhcojexnAcY1oQ8x6Qdkk41JLzE5Ebn6uXvrfGRYLW363hDvvm",
  "key31": "3RXgufZi7nWtLL8UfjjQSf13m1dnkjMQR8uyPu3FxnFZvLMMfYWceVctXLNVhxo36QWs4jmiYkYubAHgUEF9BJqN",
  "key32": "3Qau2ttCqUDA2pT2PD22M2NoMqCLkT8UMq6E5NjzWzJb4rJqF4MLmapeymfdr9jZrTH1Dg1Pauvaxq4fbEA3nE43",
  "key33": "3TDz1TVmo11ZmFd1XYsfjFiVDn2dGG6eAGxFuERVG1eXFG73AxakaH3M5K3zNh51f9YsMcKmcuMDZwcHB9YpHXE7",
  "key34": "5uBBBDqxPa4xcb3mSHF3utwcTZK9ypf1NPfTzVZ1Bqx1KBbC2Z6jSFCZMGYhACiSUhqQzRjxmGC4d94fufH2gp9v",
  "key35": "AJkFk27jgiJkz1Erev5Adjb6JFoVWcyArfuhhCP4bWPkmoQYCirbrGFJQJuLSDipppWNvtpKVEEWxZUgZELJ4EW",
  "key36": "2UK98fiyauKkqLmc5AGsncGsrj7BCQWvAyeNAxj4BRfchz8UoB5CLypw5r7qrVo9kyWusxVdhwfhRmmn97nK4r84"
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
