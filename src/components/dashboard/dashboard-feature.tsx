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
    "3Hj24AEXbJyPrRT8yoXDhVTedsqW6ueevx4P99HnU5Vp7gGfBw8KvGMcftuRtJoEdybP5KfRNV9qz2nHELGHLqc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j7vdiqSdMwGE9djw9scM3VUYYC64AcEFjfW78Y18iHjFypcjwvEXCvvUH5iWNmNWTnVMMxsgjuMkdpy6wbV1B52",
  "key1": "2Bd1h4hNaWd24SLua1UPYNt8H1Q2Vq93CDfgA7WCBQdUj32sr54dzVcVhroPr2bncCAnE7yQgmJeEfZQA4FFBzX5",
  "key2": "2sYPcXatEoUKMh5kbKAoZYmEaJ1xBGPfVnuMpegXmgNBJoJk3S9gdN1KhYZq6mMjGcRVd8YEUUQMbotRXaTobaG8",
  "key3": "5ntCNiSJPCsJrYy6jMJK7BE2mMgTMaqUCX8U1i65jihpbCmX4oAuHFd8hNZ3ckoTp9cNGBUKxWsui85j41D39Z4S",
  "key4": "3BaxG7Gr4Mya4AA596xZ3kX4zpoMEafcDJEHGZdwrNwG5ag6k9M1nGvGSwLkmnQG2FAEabdBqUtZfLrN1jyMbHNp",
  "key5": "3AXBxMHpikSD3GdqwhEe78kcTQVZT522xUcwXBv9uP289R9qv6JPThwDvyB4xdXFradquDCBHuvTRJubMwHX4T5",
  "key6": "2GMeNmC1rMEK17hR2puGQe9umYexiEA7hXY5uemu6Gr2WKwYoiFSkioGjvFjZTunN2jfs39ysQ71jPufUMNKJKgZ",
  "key7": "2Ntn9NgYy1SNuKZ7w1cBcRWk3oi5ejPxiGEACyDuZr6F9S2vEipcAcf9CzmBZTJjVEwtmYqcKsV3U8sEvDL8osJs",
  "key8": "56jDa36ihYWkKadrGVsxPRQqg7CRFmkExd166T25yFEm67kfgKYYLVDarWweDkijpjUzpsywxHQxARx6vLMdLmkx",
  "key9": "5QiF44uoQNfoEk6qCzrdZrY88ggPZzWcK257Cxstiq1V7kn1o7WYAsGpjFn4zJJY2yPN7aSqubuYEh3UvEhb8b8q",
  "key10": "3qb3NRiwgTmpDim5oJxM83gUbRQFEHREZyGVEiAWggQJ5CaQBxmGMyCoiPbdJoAJ8tv73VVArAoeYhiBPqh6Auxk",
  "key11": "Ji3L3cxxFCKpsKhYAE9RqD59SxRyJau6zjFb7DiHmwYfJ6uQaHqmE9VHJxH6KqGkwNAvdD4D1X6MuE6e4xuozAw",
  "key12": "2Lvignv3vg4JMeBXAFkGeZxD6WExN4ZwVm48Ywzbtyqda8FU3s1Zs43oLs7PgWVnGae3AguX3UxLL5XgaWKJxaa2",
  "key13": "3HuXTjY5XwMkGF1mB5G9dWnQkTKqrckaNqVfF8jMVqxoUSEbsw4BcRnCKTJw9nw8dMcTfyhzxH1q7nSk1S5WUSSR",
  "key14": "5Guz59Repta48hzyboki9XeyG6j5MGGVbBmNwv7FJBsKKbh1FemPNCe5ju7MAkbTMYzJhEDMdbtAVRTeKC7dXg3a",
  "key15": "4cPz4ABxuf7tSJMLArNVnYmPdXZNKU9Ag637cYN9zum2wXF1EPcnnjj5cf694PUuNyfftU9bssKYkmMDQJXgozA3",
  "key16": "5EaQZGKyrDWNCaabDCSSijc2ohDTkBh2cxNvZWMu3qNur9QfMtN32LEkLy7WJY29ygPe4wuF9MQQY6PuCdy2W5zp",
  "key17": "2bbKNQNWwcKFujvZ8KLZvHP16i9kQAzUYncTtmqv9a3kdaqgX8pB5sJN66viT75oDvcYPjM78YqpenhvCtrRxb51",
  "key18": "4Yq3yaeXLAwR499a9FZA5DBEjX2ba1yPSzxpRM2rkRXGBeekgcx2q1FVnsrKDrKThVShR9nXsyCSGLMTABL1WWRV",
  "key19": "55JLoV7Zd4e7GeKsD1zPMjacewzmDaWHk7ukn9RAjBnjyUyZSvhbrb4NjPhp5VdmZBDsF9VRjEwkCHFePH6qi6y9",
  "key20": "3f58kvCUZaYmQNiok3LZvakTdTizdKtBS3V3kuUF5AKkxdRiYgU18Unp4mk6FMhMzt8zGV6rsthiGGgtZhsmM56z",
  "key21": "43WsP6TwYbADEnaLyuz1esaeekkvNzLDCRHt4HYiF6aNE4FJ1F7PVEjiR1gdmHu3R7pueWuFqMWmcWG7dN3mQNij",
  "key22": "2kunUsVh4uEDfVGDJgz5Fkmu5mTkvQgyaBxjpwn8QtHN9mX33A6WXCaAgW8PFWhKavSEKr74Hchfs91vBNCbma3J",
  "key23": "54m3Ky7UkCJKMjC2qbCpgygVmpXrxMh7cBnJ9cTWuog1yk7NgWk8DkHp8xvDaoRjGoPLVWf156EzDeq7DYicTwns",
  "key24": "3EmW86FXUqc37LSBYmoHJf7dfsE8nD3q1uVJrdaqVpEAwEp12aEnwSVRoZwkseNug2SS2JxbM1wSfeZWZMxv3SSk",
  "key25": "2qvDi9DR4UB5Xjkso1fxGqcHLcBnFMPHyLfRYQFpcaKH7ZZTYTMAKfPhkmpsvCB41konocibR5ZJh1yHWHU19tK2",
  "key26": "4Zv2hHzANWCxJ6RET7C4uEwfchgPixCemBNJ3xp6fUE9zyXyrS7pivGPyDx3oqaDJ4uuLjjayGaUrRArat7N7kf3",
  "key27": "3uuP3swuu51s4ucqx5MUDqLAhG35Uin13zgamQdD4T87TsUhSAxoHDg3Bb24VB52KEAtndSAL64YmaQBcsHUCx74",
  "key28": "ua8QsaFTsVMGusQE2npRFhQADCXn3rrf9xvhF1ENbG6DYX3zEEZLZdZ2XtEdXTvxM6Pzk5oevVnHuBfcmvh5rd5",
  "key29": "kvPNCfek951u8CcMebhuTXmqutRGMqJACFzcKpp3ua4oUDzhf2Hak19BzK2tg1QZSJTUKGFQQU6GK92wSB4tbKi",
  "key30": "5HSgAzRZBAL4VvY1ZaLVisq4hJKfVNZkucMTgHqK1Yy6Qkx2aifRwGzZktE989RXntYRUBrh1f8zQMQ6pFg2gVda"
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
