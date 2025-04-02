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
    "5MFkdvDpAt1GNxVqwdaLACRQBiP2ocCy2ybeomZx6HPK56gUM3yKqdWTssBomdquKhtSeQ92RjbkxV59r5CxJQDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jy4GTTGs7BrsUEgeepapMP6ZuLaE36WXJ5LgYP33LApD7tpHyCNBpd9Gvq9QFTw1R7QeNkz9mpcgr87PnAYgaBB",
  "key1": "3tsmTT7TKvzLcARSnMjk4sB9sZf718SY4FkFPwoNs3MoTCj1SJDG6uyqhz8wCnNhPGJuujRBVJaARzq2vPdCEer6",
  "key2": "21c9E6LjjbGw6iSdbWs7NBb34etToDNeUtUjhiLzpj2fTNzC7HdPTUUbNp4JRdFjovU3bu7Ky8XSXfkQpYq7uKJq",
  "key3": "Q3Xk6Q7esKjMuLU42V2wtQX1W23eBDWKTgh43BWZ941FHdAshQGvPcz33pdQpLeaNfptU7kJKJVdHvcdAQ9yNqn",
  "key4": "3mFmw2nQDLvBbiYEpaMMniLhGdtubV1jp3BHinPXJhXP4hJf3bH8HikLPxA8zBjE7rxx3Av3q864mqTkuMHKjUcp",
  "key5": "L9fHSj8kY7H3q6UGK1jkh9YPsiQKiJWb1RrQFqDixTorH8TBZr9FxYnWLznggN4EJT2jSrRHBaWFZTyiwHZYg38",
  "key6": "5AgsACsTsBgw3z1aPQ1VHZgCTCjJLUcQAQQYkV6budrNGFGF6PG5aoYU167mV67p7tVyDnhNaiDumLL17GNDhjae",
  "key7": "bsnEHkUdqso86nJ89yD5WmUYt6S7zULQt8DSFoijoy1cCKtYFtDPFMF8zvwU6pq9Zebf8SEpjmXSM1y9iYrD5NK",
  "key8": "4XdR3JZm2zFSQX8GpgDJ8fB3ym6VTFBK1A7ebfMtYnz53U4pvZukjJY5fEeHsbxYQX5yqYZEX67ag8H54yrPWWfU",
  "key9": "3BCjubePxVHFZoTwRStso8YPG7adGxgWZDe1XWQGw9gVrkocZmdgcnpTE6dS9U6cytBfmppF3NLQBaJgCmJLF7Fa",
  "key10": "313ksLZicytTXksYUVfXFyZ9e5cQR6G3Mv4DNmUe2MEAq9Fh49vmNHzdydKunfD36hPPnApomLpVdFKnUmbBxBKh",
  "key11": "uaZU6hZ7kBGZmuF5xN8zh12ntLEpCvJxXNkBBEyRMkDeXzwEUr1zvD2HfH4pKabeEdBszLosUyr13oF8KpnQaKd",
  "key12": "575Xo581jXWymKHUVSrec5iPnYrmjAsqML6h4n3JRCjopabRpdZJ1ZSReugKSumnP1uznt8xhMjd15tNQiNr4JX5",
  "key13": "28sCXgUMKS3bDBRfmnoDKfoCoSUozoAHNt8ZexbsfMZ8AkmpDXkZS4ac9bmkHP7zRbBoDCwMKzvaZHcx3VgnF3aB",
  "key14": "4TrbrH3kxGEKa3Fx7YHcANRBnjRc3qEL5KzAGfXC95819ckiyrWLmjhZzaUZWyzr9ErRgKQQjQoESvLQMV2JDp6m",
  "key15": "VY9TGGE5de4bha6JsJ1jj7mTtup7gFd1GMcdxKysL3fv3VN8STJyytjm18U12MHQ7PcLWX5CvuWtpU7UUiv1hAM",
  "key16": "32X6LXYQReV9aMNuYHbxzS5R7kfy8uRRcoivjMBj7FgycuJF6ouGExUGjagff7oCFW6vTbrryyLqorwbDYXqJusM",
  "key17": "4Ubo7AvZym87bW5vykd17oW92PTD3u7qBSWm8eWQSDsf2cD28YV6uqqv8MsaHXoBMeps1yF64yLWhdRooXGe8UX8",
  "key18": "3inUNYWZzyAzjfCeStq3777JTocFNPwymcNNMChQ4jMQvB4f6Gs6pg3A6ZfwCJVBuunvv55tkH9NCgFZTBn4BFgr",
  "key19": "3kusiC3CP32La2kpkW5DzJszKahi75rB1tY3iswyvitAyNzYnP7aeHcLk5xdweMaioHce6CirzcJbqcjSGiV26kk",
  "key20": "4ECWqDDv6wA3xq2nhrf8YKMVhcM1Gjhz9BYGQzM73TYoaGruA596ySQoBruLvjTX5UebGYdR1GPcT34uUyE4JWFG",
  "key21": "51nadYRXGVFwRFZKGxXVaew7dgbpC6uCje4cxJDPq3tzenzij1goqgkNqiUihrFwpU491zHay4S2uCeRqPPmgGgu",
  "key22": "Spa6gL9aF6ZwxKVKy8YKVpkgVCW9yce5wPxZiQkaESSP5ZMbwvAZCeWSC3EYs7xUS4osXxC8x2J8nR1NRmMapoe",
  "key23": "4g4rUXe3QkRuBwCzYGFDcX9ohmwUhqZhx65wgwC9cdTA3YBGHHn4iFEtqtrcgoSTrTFN5FwB5uVj1jbcMVPBBdMf",
  "key24": "41sVH2n6BoM9oX7vZc2dfRNVRYHyrPKCRutWNQ4SyAZsqqCpqVYZU6t9eAow6VgNNoMUvZ7ujKYNDxzUPS6UnMho",
  "key25": "ECpnetqSUGfx4Q6zWRCusoX6VjTbD9MJXFWANU6YrPHWzyyRXBiBGkTxaUC89AsBJyR58kCRbpHtkr1WWyEZyqn",
  "key26": "32KSag6K1ZuvcZq2g12Zs5UHZkY3rq2UmWZTRZHbnN56yXt5qeh2XcQJBHks4WkwjfTpqQVSAEe6B1TBVjddPyZ9",
  "key27": "2f8urkQQEAdosF9tKTXvTNr9nQB8VfuLyrQyvYEgXQNvbUuHAeji8DQd1WxypKt7S1mFRMKqTsXsoG6vT88QNxCh",
  "key28": "49Vj8ChKmeWSBANSPEWahxGhJqjmro7qhSqRgbgTsZmjvoeYcKakf84V7R9V4TGAK81RbpSKZK8Z7kLJNLfB3gXW",
  "key29": "2S48oCmebW3kknp2JYsybRF1gwC8hVcECGmbgzAG4u3mrJqHz961bubp8QMP7gKJztCokpxoGQ5nqWNkVcJhLFVg",
  "key30": "xbGzNSgs2SDN4Guzy668i6iSrqnXs78DxPfGNk9W2EKg7xNjr8R4JRREJRMd1bQbS8MKhS4m3TTuw7W8VuZPqzM",
  "key31": "39rMM6Jii2hEBY4MYWU3iMFww5CESVkevJMGjvGz2huhpgae3Wnxa6hAijov5oWR3Hvp3yzh8UKGwjroN3AfSDjD",
  "key32": "5sNdzUZXz1Gw42pAxBwfxRH8U4GRvSL6gK4JyWUEsRaVRrAgbSdRjqb1B6zFg7mR8eafX5YcRb5qUazHCXGCi2MD",
  "key33": "3tNfMzVKUBWPuVpoY7fgnYNB6LAtLocqFAujiJn8kcuTT1RMp1boytcUbr5yfAadzaGXumPyjTrgzDwNndDXa4hF",
  "key34": "3JX9J4SZ55WkUwNet7FbFvipaJvz1YnAXkKWg9ruptCBg9pKosyXLq1X8WMUeqtuMq2v6kwEwJuitVgEawauvngU",
  "key35": "5BgmskooKa3R8pJQKefa5hPSdgGbmoYBVi7dakQQmYEkntZEKnvRvF1dUo827ZaPLT3nvWitKpFkyVkEGJgeynt1",
  "key36": "4bQAbQmnwR4rh8akFY63BMLwxUtCP4euNj5w1mRBxj9LGNZuxLNUQTTYW8Gxc3qm4yBVPy4uTLws7yVTRRownmUE"
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
