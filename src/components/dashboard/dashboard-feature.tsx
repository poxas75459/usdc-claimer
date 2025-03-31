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
    "4vGtB2kEuX4GNiYPQqbiKkdWgUhesJ8nizLv7bNziczCszhBSFGLk1uQx2zW9d5maQfWuxHT2ZPciDgCHtRWwskQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AQ2XAvoaAyZ1trAYB1RyHDz3HX87zYq2fABTu5tcXjDTUjHsfV8DYXH7cjL2bHwBQR8ZZPBXiWbNNWsPLQKhpiL",
  "key1": "2knhuKj7t6YNZvkWbbfj7A4TtsnFU7Kh9fLapuiXMriNVPVkTQHvZ7rBreKHMcYwvbzM5Kd8HNBEECpA5uwp8Nza",
  "key2": "4zrUX4tDaqqduBtMnsRtQRJtSxVQDPUFqHCEYHoLDaRGZQCEaBmFfeXHo2JMPoPECRK5yxAjemBSmKTa4Drq2XWM",
  "key3": "46cTVgp8nreXuAxbsAucXMhF8KV2wYBQ2sshHzEcYguX4Fo4HifndS7cWTUCbKsFCz8bWcxL5JjMF3HF9paC2AMD",
  "key4": "3s1ZNTD9hXpZVedjMQRy7o2fmZ53QC8yjbsrkfBtsfhLFf629hmNA5MWL7uJs1yct2pLNzRr4QfKtYw6sRJjKqpq",
  "key5": "4oJPZHQw8UrYvv8WDMh5Fie8FQoN4bUeFBcLP4KrtLktdM1PKXqdCCBZyufQmpqBL9WjbV7pSbqq8h8ALkcz9nSF",
  "key6": "2bCRUYeEfw56Jc3DXMezAWgnMJkixbATDzimoajP2XToBNWc1wHLEEzUi6zS6XeHJNCTvmeHh9f4tA88PSCm8Uir",
  "key7": "41R1W2fBZ7UTzuBTf3UsbyF6uFFfDe5UcSGAhouTYbwW45evWAmbvusUibAiTaQ1FE8oaFDAKCe2Ky8UGnC8BNxB",
  "key8": "5uKLocxBrDtVKXaF6UQbzQw1W6tWVyMyUnn146yrUfsbhqLQZ5AvYVU4ogMiBeB8Aj2GKn2Ux6rwpEn5UJDfqA8t",
  "key9": "3AeGPxyGhPVLMF8Brc3ppbMXZREvYe5hg2dEtxDWwDwVrDKS5FVuUSWh3HpZ96tL3qXrdVHtQhgWiJaKYNLN5z39",
  "key10": "3VcksunoEw6aa14Wg5nj3YYnLK3NNbDX2rbz5rYt5URMZErBakUSksmsZ2m2NJZE8Sq1JX9SMjeZrdB2GDmKygHZ",
  "key11": "GtuDW1HKFPJjKKgL5WUU2zG86sWaWS61cNdqnVyD2QLcnyjZvCe2Uz8bYhJ7FPdDYSChy3wyfqR5WSStWUrr3Qw",
  "key12": "3cFEf54PGjEJYFvyKaFKL3ogGzYBrdUH3zVhv5fXLS2LC8kfCjn6noY8gNvB149bB3g1hQjRJP73XMUadkJAFZYa",
  "key13": "62WibCgnRBXLmtzBZu47n5Bk3HYvLDeL5fYF6wYMk3Cp9WF4TAJBAo7Hj9VDvPuvrcUNU65M3i9EwUGGAqCBbo6F",
  "key14": "3VR7Rf2t7neKa7rsJDZEFhJpXPMr442K99zGVtRXEgF9TogAbaoPsDBk7w34GKCuGBtu8FRBd9ET2yq2SZ7NLt9F",
  "key15": "JpCdafC4HeCX6Th5E6Ti7mbCbUABfSBYZKHAfLd2vt6zcAYWYDR3QmncFCxNWgFsQNRCSubutbL1ogHuoPHHaQ7",
  "key16": "3k7bonzn8XmP4aFpW3Etg4uRGhexRBcNESBwHRDsDp39kqSuP7URJWnf4FRdkwns8eaXyJF5xF7oL7jotrFR1DE7",
  "key17": "qs4ttzbKFKpPT4WP4DhUisFNQJgKSDqKdbitRXdYxQ5kFtgX9Rj2gyi3nwVFPiE1pcR15VzHMTzdnZGB6JcCML5",
  "key18": "3nUFtUenCYd44HLpBCh6DcjWn84PEr2Js74n21hJaYR6uxwW7DY2ZVRe3gcyBSzExbYiYMa6hzYAHgW2GP4i5Mb5",
  "key19": "4BDCjpAei3Wu5iwrhcAMipAFZ2XBomFwWMP3Q7Cpu6GL7pVH7VTekpvu3h4kNxm7DiWQEw5SAwD9YkJf1k4Szk3K",
  "key20": "56caCtpKDcjpGENmM6RVxMZTtM53VxfyA7E1vRuu6cuTJHgjMqvvGP5F82JKF8iMLzo3sTEnVRLnUE5R3n8FFgQ9",
  "key21": "5hYHkksXFxRHtk8AmB7h8WXi8tG6QrKEC7Uv8wKrYRPTUSjPPuV7hMxhg2DmcLPysPtYKxkjr5a5M8jYVgUcbcPY",
  "key22": "SbkPZszY2tqvMRZpu1PH6CyfguqJyE8WPKL5TCNwyXi7Fx1SuSt7vo98uwep1zthgJcKy94Gsvj8dJMcWvE7BDx",
  "key23": "2kYvscnazdkgxDuDZDdseXci1jGMVwCtvwBzVJibegrZYXfhDaKhxHoRKB6oMFmm4rhyxCj1Nd3YGMw8qCXzeZKE",
  "key24": "FYctDbFkb9dURZYFeNADnXtv8hA3oUVYYWK6LH9uCrgKRLJuoKf3F2NEdQbAsbjCUUYmyLQTeh9DX73qj4z4ZmU",
  "key25": "3xLfXzgC5s4oXa5dFPXxCjdZfyxTrj9zQTG7rPESGMQeqzue8x42rURXPvDga5rQpXDYgrtwPtMmqJQW9yzHQuex",
  "key26": "2m97qXUYeKSGH46kfprF5VgzcUjSF6yB4ib8ZRTzeBPfHbwjF6HFwBRocRJjq8edPkP83u91SqHVYk4hVu6hkLs",
  "key27": "61o4yW5it2pme5bdXD1rb5Bx8r6mS2GsdXFuAhBvJsvUT1WjA8PpKtGKHaY1BVbKxgQ129gPk8nFQeYJtjS5pEhd",
  "key28": "3qa4Wdb7u8ZshJmBn3ovTv97ZWcWFmvHWZx73Sp9LZMXXSHtRadDcGyaJi7TUxesi9babg5zH7PqWt9RjKy31fx6",
  "key29": "2V9fFYUcBDi6DnWz4tBmgpcPAse3UfYVXVsQcw26Wro4sggkAbq9ciynt9QH2a9pZGXbyhDmHaUeAfSNeuKCHh17",
  "key30": "2Jynhejp5Ebbe5X9PnrqDNQQjUQXgWo54FTJGXD9SotAc2CG57o5rpvfaZPzGDhdMjE2THU2mB9XEatM58BGotCm",
  "key31": "5GQzxyaoa6NfxqpBbnP2GKNaYjB8XQh7hmC98zNFzZomK5DiPpfRwVdeFxqwbBjfSZ2M9oWtLQB45eYbVdGihfXs"
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
