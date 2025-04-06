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
    "3WEfwSg4TnfA9FbMPh2JMnC3HNot4qs8QeBFRCtn49hVHmi5MEJ4ecc6yBPxw4wxB8AgwHQFcCUJNYMmGQ34cjjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ui6Zk1cSRHU4enwvTG7YgoS9i9H1Ft28h22vcUBjCSoLsC4JomsDD67WhrBsUYCaeyD2dFWexCikzfpF9e3jip1",
  "key1": "2GSkPm6e8hQjJEZGJ1i6dFrzAkfxRP2g1cy2ajBu8hMn74WT3ZVUezMs3aWr2PWnDLUx7eDjYoGZ5dJuHVyvYHn3",
  "key2": "5WQxtWvPyMyCgsF2ScwcwHQ4bfcyz6Xe2NXW1df9G5kcNNm5SP9GbeCxLQQpV97Aj6r9fBX7RNEM54oKvtpwwZLw",
  "key3": "23mCxjt531KNUoAm58AGpsZTrvvFfi5RxRNWaegT6b2hgAL9ro1wsB6bP9iqijVuTmyp4Y7c4rMtZqEaxTyshv97",
  "key4": "nownhFVwqsL6nnmKwkVKzGhNqvaamFWVqqTbztty9xYq81ddjSnDJrx4wXB4RSfyPXSxQhjaUCKa6avpK8uakPX",
  "key5": "3xhLad3ETkJ9KsRo8MQDfqWcuGnMPzgZZFdzzuaYujvGGz8BbHiXHxkt4DgTtVRihKX92Gp51VpVHtWWyC9ecbZw",
  "key6": "4fVpiBTcrvK978iQySgNPnQD8CH6rYg4LyLJqomi1yC39Eq49M4fRaHqpzJ4VWs3Zg5WvjBjkW23A9Go6AQrC6EF",
  "key7": "4M9c3dBAkL4oHkjxjtVVzQWfWpQHXh1sFmS9ZHgCJSzAUCR55SypwTGxXXRhpYz6QfygmoKt998kESWQ2PFFJ8MX",
  "key8": "5GHBCNkxVCa87WuKFjwraXcubYh9JtvLVNaVfVHdggfL7eVFRQuFF9zRbNHe9xhP3sXWgwerd1pdJQXQKWaK6ZZq",
  "key9": "2N4gkQ7XRk1RkLuLUiUYdLwAmkLatFDbeo7uMByNZQKRde2XYqACdFqYaEEPNtxwkKQYVkU2EvxVFC2kATQhkQFq",
  "key10": "4SFeEpm2U7bfteCZ4NVXPDcethqDFwf3d4uQSeKxJqskm3NPnKHBMgmScp1gR9RCx3KgWTDYPNcv99p57LxLMkWe",
  "key11": "4qphTDUa4ypcZKGDb4cV6kzdfL6d3z5TtbFoC5Z8KEnv6RRuXr5U67qrWw96RV8BmLwvXpkfKGe6X84FZjKRzhHm",
  "key12": "5QEcrYmrU3cv1WnSLNSYrikRLXtBUnzSrLVojapvFMXjMHhGssrcim37UmFxiXkiw7rd1f9q2KnZ3XAVX3BYog6j",
  "key13": "37ZCkkM1xxeWaWji4kfHn6D895ET6LJcytXN7Vs8Dno1AFR6rgtVw9rSKEtwW8gpEFTaTEHdaNBUXHYw8gVbpKYk",
  "key14": "2yKcvt1byzWKGofMeZWwBWHuaeAoha2RUaHc28VUXBwV7ixMmWXQvA5Qi5CheSNQGf52Wzb1TRpPoGi2wiJWNb5L",
  "key15": "2mQrv5KeTTbyXozaWYE1xNDpfaQRAbSmzBR6KvpMD2w9LgDdm8yK5tGmn4CjEHGQXR57nSoAvB61vFuCxe1mGexr",
  "key16": "5MrPUfDMQrDVSronstpYk6LZKTpd4dacGnTc14bsXjzTqLACaKvkKSrneBfS8prRSsqvUGkd5xGDZxXgDNm3qbCw",
  "key17": "2Wm41MgH9BSEL2tLCV3F6Ayj4wzWhtEwGegRyS3EFjnmi6p5EUtdmdwqo5nCmdcyn2LvBsqccgKgN6RUV4FT4mvc",
  "key18": "ed7gwWDbaPfFZCorzCjhN8usuuQWq5APZMeW7hTrxpC534KRdyiq26hvr7cwXvmA58yFMpg9EmBByGeHWyWBVnE",
  "key19": "X5N26mNfUwHYCPt1eYVXJ5JwhW6E8sx9Tm5ndXxvpibHCsuVZR1h3dhuH3KqmFxhR7jeTUAtfu32nHscMo4LPy3",
  "key20": "67kGLgRm4WJLjPF3hyFy97NDr8Qmnwjmie3B6B9E5YzBDE4UeieYS5xrxua9qPqR7MycV5NRFetGFeEJwxdKAcdh",
  "key21": "gsg1B79vYBCFXzYkMuXHt32Fo77KMmjmp2mmxsYLQa2GMHoHsLCgdF75dCXA5h5YTXveNdUBZzPsXHPwKjKUHwd",
  "key22": "3QvtNV1jhGdw2JgvDvGH2p1mhZMcSDhxoVZrwfEoYAjZGG8XMWZbRvBr4kQXs4EvE5rt8F32t5wAu9YpWoCNC6va",
  "key23": "4FCz3GXTb93grjcdFiHGNNgtvGAf42YH2PmTDEjVVJZhPszhvjHZy8Y1BQ7Fm3xqXmxoPZzJEv6SwMjEX6MhLSrb",
  "key24": "2ZjurB8kPAjYadzD2i3b5jCKkfw2w2kP4hZg88JctpkEzGCipvZNqbMLXKPss3rrhCakpZ3QrVNAq2MkM3ZRX5y7",
  "key25": "GPmvDmK1wNPHuxXGLsuX3wfpPaF4Ua1JQdHa2QZityyEkfVQDFTaqLwVcPyeK3iRKVg3LENv9qdhtdvS6vydZ7U"
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
