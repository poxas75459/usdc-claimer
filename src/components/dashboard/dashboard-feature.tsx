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
    "WdvQFZgrhpUK8FzcwDAuCyQTtKJNhQP5vuX1yEZffAzXNrRUBc4d3bXz4ZU8dYNAJJKjCYSwi1d5yfEcaVj8izd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4byB3Wssrgrtvhca62b5zvA6FyocPbp1i2rGq8uMqw4rkeUY2NW78iNQZyqNcHG2H2wJ9FEY5tE7arsv1NPSX4qo",
  "key1": "4XUzP8dVfTXN1o1aQ6pb9wdZ7eQkEDdKz8Ah96d1HdqvJFotahJPEu2JLYpR1B7efpCP13zkXTiUivAByUy2xSPU",
  "key2": "66sFZWqabeB6cSszjBTkaUCBex4q2ugKiWVn8mLSuip3ZV4wsSXxf6ibLXfXFjG6WrYYyWYrCb13UCDam5iYvsB4",
  "key3": "3hLRwerbbrsrxu14GZWoUAcWNrvEVgqcEyBMDzEDZ9C7bTDdbQJ7iQkdrPLtSyUu1fxzKWN6HYDfFfxpFhsVKHHs",
  "key4": "i7FNdhQxkVcnXvv1t5G5toytdrQDk66Atwvbu9jn7zd3pcrhYTw3ksTuUJPEy6irYcMVqwsfpoEc2JYx1VA5DTd",
  "key5": "4L7xtxeUqxMNM2MMMuoYaC5zapxowwey7eBDhwPT7akZCYNo7e29v8ytBNqJK9APUDQwCb4dPwg8VQcWz1DJXZiB",
  "key6": "6ZCoGPFaZ8tRyQpLoASq13xVZ2rTESUsq92A1hiqgaDUq3WTPoqwy983NTfa5zhHdcreb2vgoHsrhHXUW2mueDM",
  "key7": "4p8QuSj4wXsz3heuVuLYM719zbsBXDUSfCUGZFmWp3Dqy1gzEUbBnAZd4hnLmScfQ92HzhrRp5aQKQVd66zQojQY",
  "key8": "5X5atuNGH8cCFmEumjpHhsD8H4i96cL4MhU4xBb8vMTi4R4ABjPco5GrRY1yPRn51p8okoYYWjUFMnQebpTB1WB3",
  "key9": "2fT6SdXYchueV8Zr3hRqcLBCjVJ6ktoZkUza81Hgg2JsuaTwspe9yaE3N63YrCaUfu6egCZm9D8qFqdXhjpzui54",
  "key10": "2rDa72AzYgN38ZYmE7m5cPgTJyE86BH3TCMkqTuqxCPk3eAF3musvT6hsnwWouBN6qU2JTRWSyHeRPZAAnLmx5kE",
  "key11": "2GkVsKe37c3rMBZV3knMfqArTkpKrAmzqXe1BCfD5QsaaJWpbYZMCkCgQQKjxASHx8SNh3q8pdHGrWFvuD74atvf",
  "key12": "4XqdWniS6x7LL6vTnbYqcM1Knz4hcKjKwMy9uFQu7J5zPZ2Lvsc6rkHVFMZMrfUBQrNiTdNgsq878uzbHATPL9Lf",
  "key13": "5TiEnHxV6R9hfJXa7e2kq6SvGpPGbMrvi3nZ32cbmJfYUh8EfRHKtuvwBRfcXgsDJZb5gLGdSF5wjr8U7G9eCfhG",
  "key14": "5ihBDSRj2QccStvdK29g7mXWB6yuXQRYd2j9D8WqqtUUEEHPEJfWM3Btb6REAzLRJNeXdLmpBABH6Ykz98CraJK",
  "key15": "29wTkZzpxA9LYLb9puhXGSc1kqV2JubJ2rD1ZnS29e61j68nYuRrE272xh3PLoCCXrhGvuKoXLMiMC8LVBr9YHkj",
  "key16": "3BSAGtnCdNSo1o9h62hGou8sfUpzHTHPeTT8vGisckzMKBAuyhSza2hW21PxnKoyMnHRjJhpAWiEnoETULBdv4am",
  "key17": "5LdUjkPED4N41EsfFHQefjNSjs4BPdTLiQmRd8x2cL8nh2bD5vdBfrjHHRRHbuAozLsoDSFePDGL3VgTvykHggA4",
  "key18": "4zYMWZpMPtdc2fPrhKS8abeuJHN7ZXEtV2T3MVPDpf2cNe3azWX5SaCdDAs2rMrqDvJzWw9UNDTriGGqEWwmcroH",
  "key19": "3ed2Gb2aUJYfeqZb5K7G2tqKfUsFRuHXC7kcakQzxGFATyjG3ve14zygWzo1UKZERtYhSXcjCn2XXsZ7wMzWxoG7",
  "key20": "5LoFSAsQjVQ6tEiV6hMa2y4K9DRvp9XucSKRPa69yWRZDB9TJGpWP1qkP1QiD9vX47pFio6GvEhMyb2QpKKyud6B",
  "key21": "qUXPQ5wt6vSbtx1FGkovrJSA1Fo81uqSNaRnMWmmNZgKg3wT6uRfZJnVHJJ5axEyB8BhX2VtDAfAxXd4AWwECfy",
  "key22": "5geYeJ1hcXeoaxUnsDNAveWVPCQyEi3Bitv2C3nfTvKJpeVrJkgMeHHCSMxdALx8JkEkzLTeKrDrypwV2BWNkTfa",
  "key23": "SoHFKeh9r5rkXZH9mPHo2bW8miHjQ6twJNsxSsUFt3SbsV8VUgbfGhy2Ep6WtAx5xRNeGEbUURaygHxBLn4RGsQ",
  "key24": "3dx8EFyhvZNkWVBdPs2kyh9ze1HXbmeQd3pJTAKCxdzSTGaZcYV1crKN5YQ667rkKFz5Ywq4k97BuE53Brqh8BGr",
  "key25": "5nEzcnSk7JKbst7Qf2M6Baxz4MrmgX8JAmBwfnqHCDaWXErFiPSaEBvzu4YkT9oWdNPMdH6F9zKX6sppaBPid8a5",
  "key26": "2yRgWBaWnFeKZ5wRYtxSp5H283ehAhV2coy7oEPYxCkxS9iEAZAYWMh92pF4tW1H7Wk49Kqpp7WG6Xi3CWJWA6WD",
  "key27": "5Q56Na1LZ1xvZ9yHmDRrRhwjDJcVtgSmLksa9wKPwFZmoCaVXZ5ttf2QUhobBbcKWYhxFqPr9CwfLqCgdJ8KWZXU",
  "key28": "vChp375aiULQYuT9JcanXUQSH4qJM1LfBsEairursqUaFifrazComxJeHTENhFiAKRaKqZJBB5KqDwVbPWK8SLb",
  "key29": "5KeNcT7GLTKFfwaVjDWoqhMukx1xQjN4k5cTaY4SrsxMXnSdmSEvLBzHewd8xRBbX9Q1mbTam4cwG7XSU7yJ339V",
  "key30": "BSrTqRXX3CLmBqso6VtRhEnV9eh8HcjrhQt9irU4e8QwZ6PQHC2nHVQ766cojfWFRq987JgoxQoyXBkeVTshLJ7",
  "key31": "66CvhamSDmrodCygtmjQcys8vSXKLDvJG5SRxx7wdQu83kHkRtZZ5HgZYSgMfyYSc9a9QTswBsyqqRXuZqUXK799",
  "key32": "4Dw72oRH1L7Htpf5QiaUc5t1S933fwUvQhV7Sg8PTbd4ZV2VcRj6Wh4pniREY1o29aX4hhWjzF1zwUKNkdW2wMth",
  "key33": "3S2fZThSU7AtY1sgPzGNUhRnt8k6beLa6VEqpK419RvygigF2kxV4bhZSBsfKtuHuQ4LC4M1GE9S5cTLqV5bgWtb",
  "key34": "37b6ycg2wNwq8Mm2uregK8Y3ZJryTANgPQ8j6HqhHv3zXYCgZ5j3z1bvi2Z6sTFRGzUpc8R7e1dnroifnL3YEMm8",
  "key35": "4nUjGXJEcJ92Y45SrnLpif71XY1kQccbN39Vk4nmt8M2Amj7fcq8AxNoPQD5MZbS3sQZjg1RgsPueLRZaXWUUR4Z",
  "key36": "23Zd7awcGqqyCn8RSMXJzuU21r1vfB4cuxNVpVEBoER63T9V5gp6Fth2zaBE7rEto5i29yvXFEE2uEtxQf3pxRTd",
  "key37": "5Q62p25jJwA2yRRgdm9qrQe9YjmbbVqGYGVjMjCwUqC3ffwdAYWLvx1g4cVSSkwywxnuTcVxmHKi3TMDjRpPoocM",
  "key38": "4waKgYcMSYto9txeNz9Zicmjrp8opdCtvR4MCv4dYcsqdWheiFPJJE6zufPA5HQwp28jcp3Y1UzUbzSsXHWsFFCa"
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
