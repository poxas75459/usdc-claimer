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
    "2xxAJa9Jg5sBZ1cQPrCWkKpjenHktiBuRb2RgFw4tj7LHfS4afw4vKo2QRec31Zz59xo4rdE65nTPeJxZWXEm3nP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xLHgjLF3LmMwhutcnjRN8tTHzAkmH5JxsQjgAu22puiYX4EtuJXRdeLmLMgLkqsw1wFeF9Gjg6sNVrynv4XTjJG",
  "key1": "28D1Pij3HKHMsdQKbmZ7C2cSoTd2X91Qsk5Vj2NLtjN4MGzuh2yB4xxEbjybUk3HhrMfQU2tHbVtvL42uJuctS6o",
  "key2": "4dcMcvoEwWNhdaAWM7rFNQJ7XY6YvMTDHnwsm9L5o3WGAuuiEmCaohiGM2GKR2L24uno4j7vpzdFgCRD6eCVfx1P",
  "key3": "wURjwgNUtxbHm48f8WQ74gEZGhFMFTXK91mZmdzV6dbBw2iGcu2UK1GteiXdxzEZXaXr4qKwcJ8k8jUMMPv5SUn",
  "key4": "KBcQHGJo9Upv8trV91fSaM5GfzgqvxJM6U9WhLTsDUBu1xpDkBRr5LgXe7QdzScfQ8e2Hf2mez3DbPaJRc6DcVy",
  "key5": "mvFjM1hb7w4sBUhiqeLd3mSJoFkPE7dFqinYQfCQNJAeJB8LakxeRrGssYHrkt7KZ5kSseiXczKL13uu8MnBfFi",
  "key6": "5S5wRLrFp6KveiGqPX2QabbxsrS34ourwLjqcCjnP7Nwr1WzHGBKCddtwbtfRfGz8jMzsbfVb6CVpRSpJnjemcc5",
  "key7": "3UaiFZFQm4CgpGcg9dknxE8fQo2S8QLrdKMyq7uQfPw3ipSYP9UkQ5DPTMj5yTEfMTaszG8ndPke3RTzJBcXkf2A",
  "key8": "4USJNGk99LpRkkUY6Zcu6d8qKHApgRe2MXb4mSqRj86qEQVyz7eMHbNRKTaqXWNN1Qbz5KkKdhd4iA9ReKttG7Nk",
  "key9": "Ak5Rx3QrCvwb9LRvaLhz1RCBJrW8hHfzmmNZMbqHBr1JJEAWLPiN1Zrv7EqiVoBUhFZiVeJHTiSAVeE1hNFFPbn",
  "key10": "tob1L16ZvaPU7G2LcNWjYrWMLeYCNGPPCtgzpmPCshMnjyjZxNdLRiMNVPY4Y2sYYttCzgSLXVp8x17XRWBVQsS",
  "key11": "3QXmiXbgKXgZhzg6eqDa9VmJZ4QzaMPsFcApqcwjGQmaVF1iUz3PQ8q1dgePzCsqiJXmsQgsy2EkFbQji7q1r5Mk",
  "key12": "2rWkWg4aK6uYUGjh6v3ddgJNLzzDALUNVReVt7qeFgbgSeUWspsGTJGnxQErQnbmXNBbcTBXnxpfLmxfnjy5avhF",
  "key13": "4o3EseaBU5HbBLvqYsNd2igvXg7VEqjpE1Q4LALyjPhpLt5wn7CvKATbqC5qLGS9AKMBi8DhQagdKMTeBgPxHY6Y",
  "key14": "5Hc4XCsr3V6JRzi1f6gRd1T5Gi3564cHZpXj48ZV8CUbnwMGHV12cQnRMZkrqsTbWWNXK858KtbrWugedfx8MUjW",
  "key15": "5H1TWx4w5fvuoBzrcTNCzvwccPKrRTsGR5Ga9J1aTAJxWKa6aSsLtdxe4YSZZxUMxiqZ4bMPWonA8hFU2HwNYyQz",
  "key16": "5FD4nX3LusuVnsqJ6vAjy4prnsT9Fo6KYYmCB3FVPgDUcVje6DyFD5b9fP6TvcR1Z5RRQMw7QBPmBbVCw2dqAfnT",
  "key17": "3fLimCTEvMhTU743nVLDzrGp4CHyTnwAW9ttyQfV5KJ4ZjUFWswuM6Mxvt1h2gKRaA6aY9DVrQ7uWMhM1MLgMXFB",
  "key18": "5dfrQUzbKY7qsm3qGcjeUUVruEEGcD3NQbxVwv9EUhFBaHui1k9HVh4HKAjc1ZoQocBxsoMz1jxTjpR7QRUUVm1z",
  "key19": "4pVixRj46uF2tx8qoDKtj6p8e4inSHSZFEUVNfXyw8mGprwHfPhhSGa5axbSFFXGK8tvxGKWQ7viTt5JqwEexQtM",
  "key20": "3ofqeUATftLoyiS881cLtDLgp2FuCKc8VCjoSgGRbfazihwSt6AnVZEsQqSVsVrVFnynzr4PY9PDHJxM7TSF1Goe",
  "key21": "551e7BFVF1VezWMw5haGn7nyLjjvk9fbCCFsVt2W8fHzNSkB1VvdA25BfZ6Y8Lfmt7T6E4vGE6Lqei6XqGTWyyp2",
  "key22": "511tQfdZhcj4f4PUB2GXGnaGhYmjg9dWQKy598jzdjZhVn26cwGTcC9mnBxcUJbZ5Z6AVQYv9vrZdt38LUSCPX64",
  "key23": "vibMnSzz9KExFMRTgbeVkZQorup5gsvt6dybBaaZxK5Gm5YZKeTkXhJtp8jqxNT7RtCTUg8yjwVZN7svpuYCauv",
  "key24": "3EQyF6wvL11TseyZtBu4mmvXTQysF4sXistSTC1B8za4VZ9AEt7bmiDLQH7p6vBweAheMN1pTqNgVZV5qPmRL59W",
  "key25": "2ofXVoMmb1MYmRvErYPkQtKYTa4MbGdMFX7ioEJ4W2esGMYdwb3uVnL4ewx7RgFty5E1AvaNEbiDsc6qTdcKhXwH",
  "key26": "3f12FCZ5fUY44q4wJCPybAWUtDqCEYd9xduWwhAvQnYMAXwC4xuEabQAztmjeZyC8rADhnLVyXx9Tnh3H3WtuYqg",
  "key27": "2bByiywxVPRWGHVYvL4gfuMpXuUTZ628MPn1C9w6G99Sy1npr7jQCX5UtBhuJjGAwvijjyukj4Kps1tSjhTRN7zx",
  "key28": "tTZZHwMq5kxt2UfYi8iNYwC29eoYAmmFfGUbDmkWQsEH6g9KZHjHEuTJ8uPAQxD3ypSug9eUTgYaCmDwWGWZgr3",
  "key29": "57RQAvK9yTRWtYbxGQJZYWKQt3JqdTbkh89VxBWjCT1nJC4YLtWVDh3yZdeLrJuqzbyag9F8Xt4bUmc6NfKZNfqk",
  "key30": "4YdgoBthnuhWZ8xsHuEiJJKCUBnhJviof8fLHAdzBcamSrXhRZtKuheeCEtpuTreGrqsrmwQCLUuuy6htiGShPAa",
  "key31": "Z5mymMq25MRy4AyseKeTfHjTp9e88hQH2iY7JFQNq2ELtVRsoLRuSwKJJxKuGWFHxDTZSP9GK2egPhFBf1df7YG",
  "key32": "26NR9JLL8gJg1PvBBApxtB2ryuYmb7pZySzrfVouptPRm8awc4mqZivLsd6BmFpU1FamKbYa74e3w5rYLRfK5d3L",
  "key33": "p1PMegu8LDbDYqB7vNiT7uWWpUaCYfTUjrCu1SeoTQ6qbHG4WF4Ef9yinFHf7wQukw4LTJt7Dgzfd8eH5N1fGmK",
  "key34": "3ctS3AtHP8mqVcemCwVGYk2GKPw9wjKuRjTTNxLsBmdv6zz5ttXukZyDV2ZbUndAofBbbbsE2LUvs8cDjR9spNXM",
  "key35": "2zP3yzAAE3zLLYqAcqbCqQzpxqfjCwVSZ8zejZr9RVK6xiSBuEhSPEx6pbdBqoqg3rYFKbzMT1bV8DUD94j2TW72",
  "key36": "5TCK9qdKgybbn9NfXA6BJvuzx93Q6C51v98m5zCitgyngsw6cP1Yubq3Y1V9hfhugjLRQpYEdEKoRyrRrzixCHTj"
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
