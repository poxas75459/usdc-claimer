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
    "5Csq6w5t7nhVfYFk1Lgd93v5oJQkSePW3p6DnquZ4d4TKhkhdgqhH9uJgxpiTU633WrGU6Dv4ZWedLHayvZrBtCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fXgQwswCAe38SmeqQPqaK2wcohi3zp6z2561dsph7wqhtbZ8KwrBYW9koBNpLDfdzqjAkRZWc6payR6xXRySbXD",
  "key1": "2Jpf9dnEGeBQRBLqvLjKstmYrRwJgs15HhuuTZy9RPxkSWSVCfxujnX3ct6HehkXwTi1HHGg178HY7LtxcP1Zb2J",
  "key2": "4mtQWRs4ToFV3BKTV3bDB8yjPTz99Bd7XJjjuLNJcmUH9oreCYEjCFh9HE1fWcxmxnu8nzMZuzRYsm6WAHU3C28x",
  "key3": "3YTD4wsxxxz5v9M4y4K482yrjyzyZUBcgWa4QUDhZwSy1x5BooDiskHxPyH7vfG9sfC2CyLCzjHVHWmefFiycfvE",
  "key4": "5Q68z9Q25zVVTmmNpXf7YSdm7ioYdpU4wsm4Z396qW9UUSptpVXZNqo2tDXMT1ChgTHtgtdcdRvQtrSv2t7uiofh",
  "key5": "YCF69dvUd7xXUzEKmnpfAFehHe2Nm6U2rntmHZ6bLHtSHkkxjwfm3houSCZcdcF4vnhs7ZCQoLRjHC3cCrTYqV3",
  "key6": "5nCPDHhPwKs49qp9Zc9kduviXwsntXD9MbmVeGYyXapyhhApminzn5ypTs318sB7y8XY1DVyEmw1wDrvPUaaWZie",
  "key7": "4CLQ2Lvjfyxaxza2TNCKgyo6FGBYgMocUczCgrCH9d7Ami5pGT2ZzRWLUfxHtvN69W4yTwR8NqGyoy9BzzLHg8xL",
  "key8": "23QhCXrcEiS63nZuQpdVzaH8veQCvpRAkEmKeNKTXde9dFthoLiLtqRx9wmU6hRwFazX5U9rEjXyZosHDWrzhGvu",
  "key9": "5Pp2FDCepYp2NWDZMNZy2Bn3Y4TxzwPpVTzugQcYk4TBzVFiNFBBuMXueSaxe6QF7ukkpyhVpaUUvg9ChMhTq9gf",
  "key10": "3MjB21U6pFbR63A4sq5vkn6KHBjMPfGUaph6pf6ypQxZZeE5by5gdKg2vPgWSgmSBFzRroTvvsdVZb4G4yfHJgRg",
  "key11": "4un7CqEEL2c17QAi8Pz4FH3pkBYZjDJGHyuzQmy4urxcamvks8E3gTt8TTsiS7k1vm2MdmMWRXwyXGvTdN4i5b8A",
  "key12": "3B2t3LkkXdXziwhbrBff8NzMPW5h7thVZJB7nULiHzYEgnP5eSx6Xdu6pGojtVUKkG8wFMztHnVFgiBwSC36eEtv",
  "key13": "222JqJTLymeBnQFpFwR5Nkj5wxiqQcWyq3uYn4advHhCiQHwmAV6AF285PktdN3uxASLVUan81KZjyj6AqQGJeBf",
  "key14": "4NHkpuyu6wLde9wh3DmTg4z2Yh2AxMZthsMrUWGvKW7NZw3H7KLLxgQhWdgqmZegvwd4WoGsAFRvQbvXNXhDjAP3",
  "key15": "3z38VBP31kG1iCGk6Ljj7PgK6K4yVn5GshCKsMMBF4Cpxd5pzaAp587Y3wrbVA28aZbHpbSnhC12e2JKYCX5xyxM",
  "key16": "2HzvrgiRKMTweKh7Xj1omx3BcT5evpuqAbdxT3fjNqMqg1AAA9Aq9ygLLPYkQ3FvmdutECYF2g5GqzZL78v7jjwa",
  "key17": "274MCM7hK1jBJnfEX8sDZdAJYdLpwG1abEav5ax5FPBfqiSM2L9P29Prhe31mNcnBRvZ7gvgjC7YNwdaV7YS1Rc8",
  "key18": "3aa4wryMhvwyZ4y6RyW4KdnFmPcDxT6gtYwXvrKQ5snt6th46XWVoXssaM1sJ3fu2KsRYhi16ABM9UmumzXngZz2",
  "key19": "5PjE9Bdf9r4mw4pWjSpmTA3mJszVAFL5iTsXiwFadiGvMUiSMpR8ayCPnjE2WTcJXWyrorR49EPMt466brgQSdBx",
  "key20": "4XXYAogXBbs9dXHuKRxGqo21iHGuJyG3SyDf3FXho7C5e3DBX9MZDs2VcheesKihaUTBchW8TZoWbxMKo6rP4SD",
  "key21": "GH4UQ5jzZfypwg6hJyTw2eoum5u1zLZ6RMmoseJRN8Z2KZedXhGdiZpDVMg7bcH2VfY6wxFMkXPxC1XTK6ry23s",
  "key22": "Rrqmq2LG1yiL4wkSJT3NeaSzMUkWFDfiA4Q8eWnckmFuLrGsYoi3iJYXZrNhPefdbodg2Mz6TLwSf3PACctGYU4",
  "key23": "4SYREnX5BsERFTcdzcC9e763XhMQaFqmnCPaBrtX7isTNijeVDqfiXnibkrbQiz1RjGFpKtWNqTiGhXr4E4XahHU",
  "key24": "3nv5jFc9QAAPE1D3G9iucRwESmCqaxabpEsQVB6wUWv6RznmuHxqrGD3VgDxpxK9jtTqmE4EkXHpiwdCYsjEdRzr",
  "key25": "62WycMmmVXNk1cR1sf1GccpH2b4fn3iDFeZa4UEGRCxDHFaoVFqsxmsmfQA6nk8fXYVumcTihS8tA95Rxk76VzbU",
  "key26": "27QpG7ygBVeozZCgoW6aaMdcgNU4ZHT86btMSbUaKhSxihNDyALJjXHxhQj2AESvfZNFnmgNKAZb5dEvg6qfJRcV",
  "key27": "2cPEVXZMwFoLwfN6sbvLJXX14yFMY6Q5x6DdP287RCnnXYU79HJbTbEAXaf6EjHoVL2Vi1JyZ5AoQpRVFm92mtYK",
  "key28": "3qxYyrTNT5W6sVRzYDDz3pksUgzRBWfeFmQLMi1c1r6NFyf1bVkE8RGHQFAr12uGfvtFNHFVXqskGSeL8ZCLBiQu",
  "key29": "RQt9fZXcYnyi8yvecj57uASqhh1pS3pfAfu1skUzCeP9qHq3uqCeiNCp7XXdRDEUtWoYNqzxXAhhi88aXLWEE1c",
  "key30": "5ho1K5yswgF6YTuJkZUktGNxVMAomjGyYPVEESY5fLAQNkAe1KrV6gBPPDNoBnotHqFPu4CnZ4aP1GspZteDyuze",
  "key31": "5LLwEdonzmnqebkaXkcr1iRMXvnrd2Zs5G16CqxT8dG9tPYi5ZBjyqKtAX6bs9ft9t1fEoLRAG5KWUN968pNTm92",
  "key32": "3jvHoLMXXnDvwpXWYyk3DXGUEzPhwPukH7KV8iRuhr1CsAXhJ4VX5nugoxDx92fCBuMX78ctKXzx7kD5f1U5oqxt",
  "key33": "45uk8wMSJnicJoVfdRksK68sqP2UYfiCgeHD51HRdanusfiado9E9VdVKfgbv85byenQ4jJes7JN7ag4NzNUReQc",
  "key34": "5dWLDGZjtLYMpriYtHY7ergfikEQEnkszgAVFgdEixuM4fmytm1PARv7kXoLzn1HtWCiYywaJTcGkcRbNfBxKqrt",
  "key35": "36LLaTZfQmgWdgTX39LgmzNRT9BtNjXQVqdKQ2SK4LQocUdEqdERiL8b7YtpErwEPu3TA9axbvGmDSRfZyfL4BM6",
  "key36": "23FuyhaWoEo73988fujAxkwtxErvHSBECCtudhv7jSEWhebwsjLgdyRCPAKhp8k1B4uzmZ2hvK1fQ6cCV89AntCZ",
  "key37": "3MVsmYQxoHiQW9cVQZvsL8phkz6xU9favKceiXxoQ1srB68nqE861G9VSaTbxJQTrkfEnAGvEZucxU4NS3fRpb8t",
  "key38": "42GTPRqQMfiRBo4bG2FwoTwwRNrzjpzJDB6CiYjCb9B5u2Yepfj8B9wmPLE97SxG8rsLHmETXQw6qkb3YYA31aX9",
  "key39": "fS7jcEj1nSDfy262UbFpegp3ZhsQVoQz7gBseo7NwLAMRZrJaGRUDy41m3ZbCDUWQBbdc3JU7SaiRZkFZEis4pR",
  "key40": "5F6bLBuetyh7ECWXt4KoQpNMnohFC39GbbBNUwNfdqV7nMEJaB2adnVcLuTg1cyPE4eB56U8xKuQhQMPmG27w2nd",
  "key41": "5aSJCHDSRBZburT9e1b6DPLfKzss2526X8Qxmad5BMrHWMTZMFfCgXjajpSnePHGaS8RTjuSYFET8VfA2AkCuf4v",
  "key42": "GCzeLn6WUzC77QKp9rHA3fYKBKRDBmymkL96oLWfZb2Z5PseMVbKeb7jyqbMav8k6tuKyjCfvPegwNSPmv6bepA",
  "key43": "3eM9EJ86KeAxFzXUq25xiv826fKYGCfuSm3SsZc7Rrb1X6Zy8sxVQZVNYbhBkLoXP4M4nygAaq2PdEzdNWbVBjCZ",
  "key44": "4FHcpq98GpQh7FizLMSpypaqBaoY1QMRQbHCaDbCDcGfEu9oCDd1Q9haCGzxfU5tcSTVAybD29KKPizzehQ2vsUq",
  "key45": "52n24nhwN5k29hrm7DLfsU2LbLmixv5SjqzqcEQwiffdYPyoEK5rZ5166hpRC4ni5PhCUUPQFwTaxrnqFQmgXgoy",
  "key46": "5QPGQQVnyDpFK7a84WVAFS2BFV6kv8vs9arstkPpZFx6MN5e48Px52hvKamZzcZ2CUuN8dqKRN9jxzqwgDTuVkxA",
  "key47": "3i1dkSHiDzmj7nQ8RqvmqzKWNhtkSjdQ83aE9H5NfSUz9TF6H1TzMHwVjgQzGz1YxBKQ25paeY6uCVYgnJAkcZMu",
  "key48": "4Jvbekmef8F3J9nuiXbBmjpiFpz8V4pD5wHbiQrZNPtA8N8xDPwMXPJMF7X7vUrKFSgKnxcWNrwb4eborVwNF8od"
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
