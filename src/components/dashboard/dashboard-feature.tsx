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
    "drE14AppkfMKhw1jV51rNpYKo2YFQ5rGJFMgxDAZJH2EwVBVYFF8ouN4HMRkvyaGQ2pY211kqQ4EjQGvHKkc2Gr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JH2xGUCsDCkC2CGR5N4joSiXYGJQJyF16wuq4MiTXWmmEoJ7cGxawpFQjNYK29nR4n7LKDrh3mB98uauCXkea3g",
  "key1": "5U2692eNQHXNHrzEDTZT7rFKbseMj2uSKzG1pUAXEjjBbRDKwzMjVpK3c3vvNYsarMnNjWTHVVNEqGwdvfD1GtqB",
  "key2": "5zQ4PB5Mtma6JEGVhwGCgeo91aETCu1ffX5piqVa33HNPmDJgPHSK9tTbjb6Cg5teLHgfe1Bg9m8XKjK6zZYCF6u",
  "key3": "4zBFNZeK4wLuDuzJu29y5wPgj5Qii7s5FDJvcxv7LtJBPbrz3FR9yrpTYCqkedxeYAuASHJWtbRCXoEZ3qY3U79N",
  "key4": "2ygPxBgpY53s4wSc5qdBvtvBpML9ok47LYEaXRXUui3m6joQh7GKSAfapgc4zp6QsHixyjtA4KkCgdQMWmXuvmNm",
  "key5": "3ANMvbRYvZt2MV8Dk1sZqKPnWFv8ZUcLFNyQpGq3z7GcXpoiycHz5iRcMo7127tRBTxaDuUXtj1YsgCXtCWuGfS9",
  "key6": "4yXhfV2fHo8tu3ZL75pPijGTNKJpYu3UvijBYJKvYn5hewjNiJCPhXPcbgYRNwsNjQCjcdoxj2wPMfuAoAquGKLi",
  "key7": "exrbFQHFApU6ErkoTss56mjdPiQvoNUYvyHvzGNqJdZaYonTcXXt6rnQLrndjYJN4obdALZMK7wJWmJKmSYfDwV",
  "key8": "5RnCRVynT4aLfEms98bqfDm4NPuXuTgPNSHi5VrLBLYVVQM3kp4QEjAfXwByUM7jTD3FsohxZv2cNs3243Z8Ee6q",
  "key9": "4GeHMG6ZtgzmK4UjaZ8yzXN9cJJSqo653gRbCocHhba98avNbZDnCQWhTFtXMgAHp6xxXaf5sJEkwHyuseqmrFjY",
  "key10": "3ZHXsjz8ttGqLeD4LEhwLWysMvvmv12mW2PaQS9MfU747qtUkrtxL2oHCQKDnJmzmWFpoH2WGtbinQno1pZ66Av1",
  "key11": "5ag8Za5VetzkxRqX7YCNLLBgquHQRjoiqUxSZ3QaTg84z4y25Up9TEPmpfuJKbj3aUffqPijSSAWguzfJLniyDC5",
  "key12": "5Ruzj2FFBbEZDyGVsGJbL6m1GmNg92FQm3oD21h6wnpBcjnJQXHLvgXWnTiXxqHkTnZBrwAbKbZCiirrvGX51GVD",
  "key13": "5idMzhAY9CSfoqdxA8NdEPJreyGNAX3PQirfH26qwsj7LUtk9PjkGoPqAECHjmpNFZkNANPTr3BoptcCBUtD1e5X",
  "key14": "66fZPUfPx3Rx6JwWSdbkk3YH7hGSrGc74KFm3XL7eFwL5uaN5yz5AFyRk132aiUMBTUB8rpgRLs7YgWa84SzH1nJ",
  "key15": "3uCsQidt3YeXPsnuRtt7quoH2HXcGf8RLGEyRq21h1kU9kDRPsxNx2A14isJXnShjd3wV9oRgnozc5cYLY5Hg3CD",
  "key16": "5nHbnkP3T2LtAo1Wmouxt7dsYiCr4RSRiZarxDzZfj3yydnQAMbXovHVCh2Vm8muWWuXdR5X4YYma1uyXNFfRgjP",
  "key17": "KWoLpTTjEGWLaN93Cc82fvsqf6AD6paa7oz2YJ8nTx5kvuCkJKyKV7J75m4M8fZ7dAzcsvuvEGtzeyoD6r3t391",
  "key18": "HDjvhNcfEaWo2JcGWswhSdSLdHCeRz3VxAJbt99Y4Jxz3WQv2ZbJXswfCsHBT22bJwanCVHddz7yGz2s6DTqiSZ",
  "key19": "3GezijFueGW98AkKaUMsBkTak9x97FutCjSHTPTGFhTH7BU1EoL8pVJcce4Xw55RZTqbPDrNJxUqEBuZwHn2Ym6L",
  "key20": "5zY7V87iT8WjT1pLF6NNH5SaU1ZbEpRDKLxD267GMRdvHpHcHWb5rMStbNAUyrJ3L3KiLxkQySGJYXsZQjZycV4R",
  "key21": "3LbTawv7bLeBWMd7Wei1J62y32bE2N634W2rHtRNwJaemmc5tEDwxAxdnJqk5ZJW6jmgtqitUh3VFPCat9zbuZyq",
  "key22": "4h8FLpstGQqTC9mRC6u8MsPsMG66sdqPVUhJoPkdYCqQm9BtLkFeG8yPeg2WHsF3edSVwm6oKJw3tFhn615jdKHu",
  "key23": "vZvEmb4GViLuw1tKpiMjWB6b7YZVnHF1Kpftxj7J55RT4UdmiYrbxcAEk1ALkvWgwmanoBkWvz4fDFNsMg83S2K",
  "key24": "4r2s9EgER8qWYBJ33hRKM669q8GNUvJvdNCNWNkEX9JkwoWBVMksrGBzSnew7TjZKF6jmMMLhg3effwMKL92oo76",
  "key25": "2L2VAZyLZMuMobam5kgbJgmv4k4V4Jeuy9YhFwFW1Ub6WjRmsHvd1n32pBoc5fZGW5WdFFs49VxSfUZvDQMWih5o",
  "key26": "Qoev4Ja7YEPcMkCo7PExavv8rPFxAjvzHyjekaBsLoArb2KvFiXBWNuBTv6cGkYtE2cgvactXEgh9PKtch6Cavm",
  "key27": "4zFEZ4UWeiycifsSS9qTDUr4jjDrySKytwN5AQKAJmHvmwsJANSNhzfutqhwk4j3MHN2zZCLH2ffwNpXBCZfx9kD",
  "key28": "2cCLmnDAmG3kckfdGtMPoaHA1LRWDqm1PpatvddUwyupupvocA1aLjjjW5LY6aoGRp4tYi6v8gWftpDcTcdMSqLW",
  "key29": "4rEeTLaqZgiq3V611gdfpaXuLvssRKuRhZR3GwoxG3f8icxFfdrQJuYM6fV7xF2sVdQSfQde9oRvduWRiKJm5yDa",
  "key30": "4Ko51hSsTwwWo9kPuJHbRTX9XL7rwRG2ZToRACJS4DojLgD7Rkxkchov99MVw9vq4a4TCEZGEmfffxn94ALTuYDb",
  "key31": "4QLYdE6abrWegsBfQ6o4BgxmHkswPKChGXkYgP6QLH8CJo4eExBBm6iMpJb3xuT2Lgu36CnR9xh5vnTXAjjK8PGm",
  "key32": "4xmPyTyc4nzuyX3dC8gPDBGjENRtciuMkeEo2UYVoMQZaLAbeLe41K7eiv3wC3PrPtuRA4fJUZ7dQxzL688Saejj",
  "key33": "3fQMqeftpzWLh31nCzEgGqQyahAbT6WoYCoxnxYuyGGSgVZhRRg8huQh1p82hoFxQMMYkJLAt3MpEBvkdJunu2Rs",
  "key34": "5HhfpwDnAattjSKb7idK94AKkw2TZZJ7E8daQK3Pc8E56qveTaph3mD7M4E2p4JhYe2z5Sov9rGkHV78A1Y1v6BA",
  "key35": "5kuSQcsGYprTSftBfBDtJZiq1MxjMAthn2AbEpkoeRWgYut5XKkV17KWMBqPA71TDZCmCbvZi1UoZ9ESof79Bdgn",
  "key36": "3zdYgZu7EHkQX9rMYNLLTaBmsj2hEzWkbRPGZts6wZcFX5cshwdmPxKc1ZiZxrRGxsLxx7KDTi82KXgzoFqRKDtb",
  "key37": "3k3a39S8MjqmRhgm6kceQXDhwTBbkfYxSh6Yye9ntEcMe3cw7A2HfrbVinyAUmjXzSGGRCCR1oLPJCi3TNFwsiJC",
  "key38": "3M5whm4kJPx9HCwB8qJ1Nvk8igwPYMqcRJcj2oP6XPGYxjTtv4VQPVXCeVA9mhRFC4iNgSswrsBqNY6gq7JiMwk7",
  "key39": "3KwzmDZ5nRnsARzAzUySp5ojKzHkeViW9ubUg3NPCm4KLBYXC86dkw6M7XwwjU3L2RyjpHTAMXiADuaY4nnvPiRG",
  "key40": "5zjGy9rzMujyju9dqpFD873JDgg4wiowCjZ3hLm8u9VRd1vGFE48RhQHffZZuAh9bWZbNV8CNc8rUoAAjbQYqRik",
  "key41": "2ojwgWEJG2k5GFgrj8rRMXv5L48jApAwEnrbNsCBEep4Q2aivPNDp4o39LG76hMq3ubnzEA1hSozQEJt4w5EJBzF",
  "key42": "5chWZLTjsByK1UhwXEymt9sDoYQoUEWqrJkx8GgFz7mLmT7cG3pQsSbgYvCB2s4JiyU2w2Jc21yCQNmouuiPMAr1",
  "key43": "2VmYTH4hZEe6QooEiJxR85dqXJ6eUpJA8tNUF3qqJQoZAWVE4UnmoKzVyeaWVgC96rxcKcWGFiq6pXSwrjuDvr5c"
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
