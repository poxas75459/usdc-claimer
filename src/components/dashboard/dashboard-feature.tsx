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
    "3VzoAvxnTuZwxTawG5ojeWitxsnqLXRVPGFV6g4vd9LVoUxwuyPPLHG4hT1dNwg6XGGbAxsjtYPzkqsPzafpbVgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nhhH6ggcqiQsop2rWVfVPhx2YVBgyFWyTReCW37GzzCo4dzpPDsHNhQF5GtoM5pEqLW1m6TcU4x6dCWXwecg32g",
  "key1": "4wFVagAjTYqeiUB7cPK7vzJH2uagSjVcGQHsbfaBLQNHV5GYxNMAVHuNVWQf65BmGedVHR6Vki671nqadW52QGRn",
  "key2": "2o3hUFMayE8Sc7X1EBd8kTBkPYsJTfrtTvBwZUsvUek1CjdBzBEAkR2UKg2Ltx2QKsF5sUJbXrbPL1yMayzcMNma",
  "key3": "2njGBX4w6X1Dic2X54kNdpsJf7p9Pt6HNmSSnWX3ReieAeAVuR3tNTYJyNnDb6nsHuw3457kMEPyyARP9a8HRE9W",
  "key4": "37TwBSKC8ZEihHH4JS5KVAFfDebDCfBxn9g3rXeXzUs1b9xzJQzyNhREshdK9munH6LueUwjGDVVWFS53vqkpsJk",
  "key5": "5htR1H5ycRFvqjoSds8vL6X8R6Qfv5MfGUxdTFu3XEKh5Xu1DN5wmkMvMLzraFqw7sp9rEeYMoALVahcnntpMuiD",
  "key6": "3yfnVjHN9zzfPVNA8AFfYMJZEAfT4g7FR3JPYFf4rR9m6KvjcqmK6k1cuwuEuPKx7tsXYY86Dh3dzWes6kBBap5d",
  "key7": "2Uxf11rVuUMY2o4AqBV5tWwppXSRpYUqPevRs5updxCKarvaThqKc4xTh2gTXr1gMbQDzRtaT9XC4aaZZ2TRSJmJ",
  "key8": "5iqeQzjWe5KZfk2Fd8abWZypywaUJ3aXnzEPDZWyPYezstwQKZHoogux4m9eNovw35Z5WPzpNVgh1RnkdtrXLXgR",
  "key9": "3DfU6CybT5smnbeWVLASioAGEdfezKz8T6FrGpmyX96fSdZkjcfh4iJVKGPobdGBQs8BthrDhZmvztziYzBHbcRu",
  "key10": "A9WYFaftWD3fGqLAjbUHxwQmfk4gvmcTQ81tBponF4Xq3wC6K1rYJCRh9661qV8YYZKz72yF3ifWmaeVvw4rGgE",
  "key11": "2THEX7asJ1qYKFxyBv9XfW5Hm9G6VBFF7v1spyj9JLcw8drtrrye95d6qNrDZT9H56GAkyR539M1dZyUQoEZuXCS",
  "key12": "xevaZkeWtLis33tCWhnJawi7GdJqyrf5i6x3W8JfDmBLmpquz4c6eUjucRvcbTPwvoU2rGVoFxHUTDTojTuwczC",
  "key13": "2c378t5YNUaRv5kX5ehsSuyuScKcwfpi8MXx4gRDMXG6NXZC8HS9DoabmXZLXoq5FW3jdQc1KfGWMCPYFdL1dfvH",
  "key14": "3CpkBV5NhV7Mq3FMeMhh5MfLqfPhNVrS5Y5H1vsJypHznUxBWQe8D4qD9ZBtaibVHcpAHaEZLqGrjz7Hu6VKxGir",
  "key15": "4JG59foBygF9SsH7Jtd5XuHtTixsZssCAs8URnQpQ9kpXdzeDg9czuPSX3kDB57td9g3yNC3Rghd27jGqWVoDKDM",
  "key16": "217GCV5G3rEXo74KppL6EFT3Uwch9fhk57hqkkJshD4DzEXsLFYgafHY398jGWasGGVrcNaivP9VCXaQVsSd27FP",
  "key17": "281pV87FSdxRYY91L1gUKsB9GUxDgziBuEtTPg4oPuv7RJYLcgNXKmZDqaPDj1jksq54u3HJnqvcXSYx3Zbgoasw",
  "key18": "U24p55A2d9Y5QRuUupAzwMbJjTuSW6ZbPApn51FDEXg51AbF1aNJnLYJn3ZaVmeVgGuVvAKVEUjQBmRTCdLF6oS",
  "key19": "59TnKizxcQSrhpaos2YD2SxG4eTEvhoA4nTH9c4576XWtAXMr88yUQvFZPfVrXnuyafrVEYiWb8gUa6nhY1gGCp3",
  "key20": "3Qb213hES5dUiroDFDWpPgLDjiR1Qir2R2QorfdDAqQ3NkfcbV1bx9QjcijZVCAWFj18Rg2TdMgKARhSHJ2CDebh",
  "key21": "4SZaZovfT7tRmjC5MUsoNpmBqcDVN9fGqGD5WQo9hsG55mcagPJ8VfLCzywwgpJg8nbCVR877aEWoYx7STY2vSUz",
  "key22": "2st898RZ1ac39cq1QCckdgFAVGatw4U4LRVpQJzAMxByyFAWYmjaiyFTDAth32ifFXR12HUv2hvYDqNDgpPSrSBn",
  "key23": "32oydQ6yXHJTuMg65ui1dz6gSVLgRQtvgipb82AJD7YgNjHN6aZENYeZdCEiEaaVRDACse42ENa1XSrUmDBADtgx",
  "key24": "2XZETkCPymtf4smKDWkwoBWWtBTyu5Ps5GZC3wKfsE24oMdtXhQzCWV3d68tEWrB9J5YJ9n7AGTGxcWmoAb1JVQp",
  "key25": "61P2BU3XamG2qN6DKsL1LXFfnTZZYiC7hD341qxFZbawQNKXEefE2xyEyBhGpp5MRUAtCMcBsfeBwZB5fMXiseUC",
  "key26": "4QAmSMBKs4erR8rFeg94fRERHVCJ4cQ4ZfVyoHtGWkE4Wxxftvpz2pyAmtvAyqbee5dTwG3uzvTjvF98qUVYante",
  "key27": "33RVXSSxsqNnGjFCbPkki9n6Dog5RoJqF6SFwqhWtH3oyrB2BCWppykeKQ64aN4aY1Mpj44Wc1md68VjfUQRmNcJ",
  "key28": "2iXt3yrKZSCF5fEDtqRkVudfnKyJpC1aiqe9dWaj4v1iT2Ur8jvLjQKmJjiojMEk9LiJC24PJK5uZuZYkZMBQyyH",
  "key29": "5R3eq5FjDEh7cnutyL1RWs3byxVhRr7Z7CoM3aeLUHkw5iyyEf4Fpw78TcszFGhuWpg8RsXBkkpU6x7RX4xCwtdd",
  "key30": "3rDDzkfA3KrT3xPYBeHhUwvZJuJzU6AD1vLu7MjEjy2BXLcA4ThFhCPqK4hZrAZYrqY4S3MuTFMGAYGQ3hfBeHVL",
  "key31": "55aJJ1zNhNDAJqMeA4eeHBrk8cjpdgSsVWfVSzs6ecqykRz1TAb8M9MfTGbgAjbhRJrTC7qWMkWkhbB2Q1D7X6Qk",
  "key32": "3qmuEjDpJ7oEhAm6ZpvkaL9pCzXrJfgi9dT3dh51AYxqfhC4pRVaVUoogriWpivWwcLCm7PAcEWrhv53d3y2tVTP",
  "key33": "HGrtCtten8PZsBcHNSvHbnPQxA8RhZPguBhYY2QEGfSWtjXpeWNDyLGuTVjTyqeNxWVnvyux3EfbcAFqjTBtXhG",
  "key34": "4N3gq2a867GrMCapYt6Duu7Kfbg8esFJJWcuvKadCjETNt7xCXKU8UmKiNuejsd34uhpT9NJQk2LjvJi8UpjGamz",
  "key35": "5vK2SwqHDuPrkd1ZQKBmP7h5FeH2KZ55gkgDjjqcGMxXh1ncRxQ7GVNmV7E8xoiGBjn42DBUaLvQ2S2im7w5VkTB",
  "key36": "3c6gV5tG1vRYrg2seJJL6eKJz4hYjUQ67pGgXYEfZyFjKQvMcUKSJE12qJ7rpu4jK8PKG9bMBqTSoq9Y5HP6qdno",
  "key37": "GYeNTdfyh5cvKWmUnrNfzx8T5jpisSLY3SRwud9h2y4x1bqecwJGcu4Uu5hcgSgye88HFp7VUACKP77ZXrU8ApT",
  "key38": "62Not3baxJdY4k9cGVFfvLFif23hKHkEExzYJSQiAXHEGbWbzfKJLfhhX8vb82W7ZwYuK6ra1ihr6qT82jsWT8i1"
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
