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
    "2j5KvWkn2dXewMZfWv5XPK6d8oLsXjYEBeBbHdxQVfQXKAfVPCtwNiWnAHPYqQR6L7AvjcUNWHggqrRMq2RHspFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xweECjAwcd9WFdMFJaX1oVUGtzf3hfEZmchJCsv8NipryHfn3hFYbTpYjF3e9Y26CkCxeQwgN5XaxyhP5k83eqN",
  "key1": "3SFqS2morfSb4DLugyxR13dJDSC27PMEtrQwFhzwGhAkYAhqargYMwFPUtFYZWbBFtEouZSUZPqxKGwQJAtCWFH1",
  "key2": "41ho3BgvZd2N9htHqY8QkP3vroDdFhgrrkV2SQehAbDMbzTnx4jhEsKSfce2ouHFDrrsgeQijGfSY2s8DVMjkf9g",
  "key3": "3Z8i6EKZwsJkK3jmnYCCKK67bL35Gf4njgKeUVjtn75aGfHtuYEGMLzkc3oUehihD9YMwkzpfjagQkx1HDTRkR6b",
  "key4": "2rQwu28rDV5XA6hgHmPkBHQrG6JP1eff7dQ3JcUdnNALFXntuXz2cynfhy5oCHKZhT8snrrNLsB4wF2dzmggqeNk",
  "key5": "48Ay9maDxjecY7NbC9PEkPJG1ZtTL4LTxyUvthTsATNhD8Jw5fFo42HNHvWXtCd9MZQE7J9DGSbM72LNA4NMa9gT",
  "key6": "2enMecDQAWGPDkNYVJBYJ5hVmCrJg8H1vo1Bj1sFSYmbnk8ytTPDL1ZFG4X7TjnmABgV9wWHUMsguS5mt4K5vzr9",
  "key7": "kGTKMzABKorwP3Lxk9oUigaaoVEpHwmVFCAF844qvKBp82p7vG96JNd5tqYsXrbttyMKSaPuoZaiXj3oEBAgnKP",
  "key8": "4pGi2dYBbwSW3yrP59EYbKvsp7TLjQ2Bm1xz1cou4MAtoD6NYtanyZW6Nx6BAs9QfDhSei67BbLwZhtimcpMxwf6",
  "key9": "2seJ6ymPy2hnLgwYhiVX3nnvxM21URuAKV8zaRGXG72o6pNSxjz18LsYSrrM4V8DJwF2tKiMTrzwE2qfbcS1YQvt",
  "key10": "5b4fWhWqVsgaoQNbvdBwoeidzQeQRqurptipPXuexjxDpbMcb59z4NJAA5j1c55aom8ALyuDM9XK8GpYf3jmvSrW",
  "key11": "6t23jwvwjk9iJbtxbiEtxEckv7rgbGpwjYVASHqfhiyghFGJiRj1xLwMzijKMDUG8326pJEhUAMjFBQsp2Q1sCw",
  "key12": "4iwGDzrc5zjCPrcWNDCoNTw963zjL8TfhZrQApPPq2NwuB8UgW5ucvujL8oaUYgkg4Ejr71AVhp91hNM8uSHhdr9",
  "key13": "41xUPtt2evq4SJAGuZ6g37deLDwUpfC5Qiff5FyRjE1bGyc9ss9pNQubdKwf8x4a6c1bRWv3aJ9UWW5KwUWa5JG7",
  "key14": "vQ8XQJuWdspiFXeMCtfrHYWVgwUZdAx4buPUgi8E1yaxYAWTwkRfHWT8pph9SJu6AafKpr44vuLGefxEf6gX67M",
  "key15": "5MzEpF3oyghB4E14XNHivyx6Mu2m5hexPdbVNL57bCsLLS8okcSRWQ64DoeU2mTKYQq9DcYX17QpeicmHgzsEQAr",
  "key16": "2M2FsSbtyZNXtry4h8MEzpU6NZfHMFgFV335HpdPH9aSVpLriGARdHzxziL6oEwyiYDqhTyjVq2oAcFUQ89sYuY3",
  "key17": "5XV5DyLaGfnNaTEUTjSMuYbCz9fQwXFD3C9BinZdE9HgLhjLF9MBh2jdWmR7yGjmiPegzMpAyCUQ14dfmRixwqA5",
  "key18": "4tR9WCD2VGQpuKDTfNqeVUPbQm4JL1Ax7K4xCbY595tpQJYYZn1kwkNbqwkK2sN3z7LypybvJosvM6YtyWPSWkMN",
  "key19": "fXT9ddWXBpnLNwLhgKbwQE6sbmmoLnjFNVbjjWtsjCsd4aQXD5AfCcnceog72LfQUjGzJeVBdGPvpKD5aATmfp5",
  "key20": "ba583Mc5EKzDD7CZvtyPmcmVJvepk3zYmd5yrtHUDjAK6tRQwduCTfxuEndAoWc6eztxTdW2ZPhaaKLsxMxYpYD",
  "key21": "2DbnZu4DTQXWJiKWTtgmW3RBEHeyt36xSwRWj5MenY9HqFC5oxpMRkobqAxV3MFUiK2ASrfuzXJFzgfQVnaZCi9b",
  "key22": "21vrGKd8KwdBrTWCCAT7AvZxKeTGZgPJUVojBC7h1HNX4MMUs8pAezCbgCeQoGDK2g9yNnRN2aLkrXgeXXqEgyCM",
  "key23": "2Zu8Z5cNpCoJE8Ve9ti4jQ7ZLz2JvE8twTkSLwwoa8rcwEMvQF9jpTqUWySsphjVFfmXWbSfgSUxiJFVuBhye98P",
  "key24": "2kS5zrv8j6ufNyEZa6Rp2k7afE2uyN8Gf2HsfrveozTTpFk1ecWV9HSJ1WcgpFzAezehnenT8iuktK4U7XgasKL2",
  "key25": "2NkQDeeaUpGiFQfjEyGD1EKsZm6ZyyHYAk7LqxpHHUgugHYLAXx1ecJNmDnkD3x5Abrbs23tB9X5sQrW736DJn6q",
  "key26": "5B8ys4GWhPCFyXtdHixKUgdfMZ1J6BYH7iN9X4BwhYAUNrWrUhwbNDiKzke6o7CRBupVBe6U8jZwsN3qn5cQ5J6D",
  "key27": "43h2uaKAMPnUDw59mc7h48LLuGAyXqMt7AkN6Q7ZptgbcLjqkef7UxqSXgVRriQ9bhbiPviG7ssqrd9D9MLQkQPS",
  "key28": "2KnTFQX39duMdfXoU2tKaPvhN8Y56aZjdczym2U8JY1fiwyrDWTAM9sTKrK8AyKmetJc5Mzwyqs2AVcvrH7KTDRS"
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
