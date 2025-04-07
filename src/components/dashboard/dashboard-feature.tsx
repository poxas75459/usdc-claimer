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
    "SGS7PZS2L2eCwseVBEbaVZH7Y7pcnjPtEhviUgGB7xe9184kD9woiPpRwnn1yCbcGR2CWy1s9oR3uA6hNAzgZvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kpjadSvzEY9hvVp1ChWL7hZxYetHsVjgyWYuTv6MXL3JYJubBJWJJonD6UNCcXUEckMrZvYY1tSnNtrizSM7uZN",
  "key1": "4eGiCwn5RUti7SDd3g5AgoZnhqzASeK717D3WzjF9Jz4AR4i3wW92QRzdXrFQtuwy2CXxjNsVZYWhPieNWLyjxcU",
  "key2": "5twZ6YXjwAdg2bvM4zFdLPHvdefxM8JcwMbW49Dccf7MrZZCCrCzFg9kcwWwmJN3KaoXWEYu1fpFfvvya56Aent9",
  "key3": "4kEL8roJyByZnFnLcuG1p6PYHfphDzScPVTibYbwZK5vP16irxM5stQt3TbY6ZdAUL53D9Tij1PpmRcq5x1gKsLf",
  "key4": "JkL2psZiRwYcQUCv5AkoZARshW5ENvqkUNxy3GwG39pp5KjUVftb7q6xgQLwHtz9gVkqx5gnwyg7wCZhuSuuz86",
  "key5": "3YFu8wm8BMH8xqUeRx6exAf39ARG8VBwfCHuiAkBVePm6DFuxUy7ebrPEgfZtuZg6296DPDurGmRAgYAP5Ueeakb",
  "key6": "2p2QUhchTfLyfxifVX8LEkdQJG1TtkchCzMww6dPru7F32SHfbxiWYUB1KbJY2SFyz1hhyAZaa6i46yFrB2k4paQ",
  "key7": "4dNAqCXnKgncQSfMT6EEpuu1LQfndaQvCcKtK2NXoPhL1w3iFFg7VF5vyRDKhSPvvZDGzo5i74P8xoDbYfx5Y8Jd",
  "key8": "464dVgCFnEUcAGUgZ4BC4yJxe9GUS7AAspYgjRDAYyeFTptLfyBLkTvCjhQDdVHSQneZg5rcttqTbm6e4tKjfVvW",
  "key9": "m8fM7L6ZFHP9yLtNehtRdSQAw7iviPNxGwurBK3z9wWMHPLL13bwgd83sydC3Zuw9yhhzHaK4ERcfykpxEU5o4Y",
  "key10": "46pBqXxdcQWacFNSETVGYinrohcAhc4Ytk7p7jZT1UJUC9YMxyfT4ftVqcyXYN4vkJu7544t7qKAPWF6VsWx1Gw6",
  "key11": "4ENMUjczPp4jgGWPPpy61D2mDAKRRqwzqCCk7jiCAAzewRvHUgZkdRg3Gr1BYyovshTbhQkPTpDyrvnPbzX4vVr2",
  "key12": "XZjz51bcf2s8q8dnQbUUKS8CmHyoE3DJhr2AyWB8ezjcQzApwjFvcPao5cCbyEi6xJimgjoZvxtbZvDBPgVyjUj",
  "key13": "5FZStgtxmcemAcxeE1YPPSfXdgAXqHj5JvCjMXEWhBuAsyFvc1njmvgDAGfMLZNWSz2rTVPHm5r247baQ4GwJ7au",
  "key14": "YbVU6GJCongB3nm2qqvj81bAgRr8JjsRii6pgvxYRXfHNP54V4tPWSr63LRpBm8xcaJjG6rktmuuGmE2jpGGEKx",
  "key15": "31iVQKMPDxoKMcBHe49sf7ShGkPmf4geWsiZNQ5rfWuThU7hDar7uCiZwSHSMkep8Afz4MXTUV8bkcu3BQp7oP4Q",
  "key16": "2P1cVJitFqgneUUc4Vjkgvw8NWP24yMTVzkJCHdJ2xYVRKyEyR614DsFGdwzw3L5diW3uJfBZrbxY6XGB4mNeyxX",
  "key17": "3b9rDjGQ6vRGoy1Q66zovo3rbJetBLc6pEQQL4EbcgWi8EBrsTYHGr2JucDdNbSQQ6YTZqjdnK81pDggZA5pAK9t",
  "key18": "4rHoBdaeavug4DkN4x4GFYKcfMHfyKgwWFr2LumGRuLyntuJfHYJ1btan455eyHNLzzHPwECcCGRrubftiwKv5Bq",
  "key19": "UZ5F1DmfudEv5rgErDVAbJahM4Lqz2unWfkso677d4HM43V2Aso6EdWocCgDxGn3usiimHRufRoK1Uxg2bfuQj2",
  "key20": "374U5UDHn8zBtGcSe6qa4avkgouyWV3Umntt2DJw1qgw6P69Fy4PjYvee49papbuUYSbusy7TtYykupni3XpQHMV",
  "key21": "2mNDv8C8eDZL9pDDEmwRLKYkHVzcYpPK9ngB3GLCD6PeD176zo6cEm46ibT2btLThhdredTqBQQnQYkgenm58Ci6",
  "key22": "5sK1fdGcCP4PgG6GheCSVwawtMPJXP4LQNv2CM9ZwW1EmjY5oMbP7De4jgEY7Njqp7Fj3UokZi9f5VjQpYNEMzuX",
  "key23": "2n8CkzDCtwToebnWKL7Ex82DwoKPpNr3VEEbTpQuNt4hWnb7vm4JMgJNwCR7Zn7ngvUotuAvFRnvG98JiP8qweFq",
  "key24": "66XBhCoVQGbfUqPTLnePXsFNf1Pax4DZRVVDoMB8VhiJ2vWjPvCQX1D84nBtbTxWEyB4mfuivWPViS7SLcyYk1qi",
  "key25": "DE1vWMVwPiYxxAaNXSP1Q5drHpV6r5DhJQRiB3bmVyMsNE5pq364jRjEvh9eUvZjUyz995GMJdhUJQ5BgqHFrhc",
  "key26": "3CJh5BvmGcRma1b1PmTgU6m8KuD3VQ6V8xwvMMsemhPfVbfsMZde17rpgBPK1wSawrp9YqBx6T2pcaff2iMHvfmR",
  "key27": "2KKSCsiKxf7VNzNJbMiFFMD7mWwBiMFd1MeundtYx8Usy41tzuZtTFT51eTTcQh4qypwgAyQjzQCum5fzby4tSLD"
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
