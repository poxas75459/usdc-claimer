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
    "4siSpuEsCj1iSQgDC31iL12dNqji7ttXpuN21wrhi7a1js1eg7faLabN728t2yrRFbfktPMHc84rsaJYBLKLY3CZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bnhCcGF3sNs2pUYRnTCuhMRd5VKztFYyh7jMkNh1jmZNuicFiiHbpT9X3HhjULtJcQNU114c8UAzwEJyVQLynXo",
  "key1": "54NzQ3JHwaVFicfT6qTUKXkvjUNe2hcK1h7fEuqVy6HvLe4Skr8XovAiE8g5wAuMS4Dmh9mvRXXgELjwHhPPcayi",
  "key2": "3G51PL2aUknxXyHn4esayQnPqzfyaKemWbaA9Ssp3Pc11dBPbm6D48yFEKh41RZ5wKKBBQGQnPJZhCr6z3Uqrmbp",
  "key3": "4D3rjvKn1XBrLuoXKUih1zESjSPt5vAgm2KeTZqa4JKGGEW3B8QhzacPCjxqu9cC4d5aEYzPYoTRwzgD4omHANaJ",
  "key4": "3g5HGF9RFCPxvZqquvKSAPuB4wNrqJXXZocmCpQyKKqhC1mjrDZeR2ZicwBQjv54u6ooPXU4dCoZ37jCS6vyhWD2",
  "key5": "3tfkJZoUYRGXiKxoTs88VMUe5Sh8DPPGnFJU2mTLpYFDjvj9kf9yLYWsWd4EHay4Yj1b4RYFo6sLgqEMhuhweWup",
  "key6": "5Cun5zz98in5Sg82a5HU5WJ6ZkNHBbBZKycE3EroEFTe9BjtZg3Xt54LmY2zt4QjgFbMaVNkpchQzPFnJbW56utd",
  "key7": "YRJfyhjRNwMQvper7sZqPuE9jxVPzjQBuZCdULRyqzEwYo4kENtqtVduegEroDXfoHd41PbNN8JrthFpvAHyf5A",
  "key8": "5cTaDRKpTi3uoWwnsSA8SXoQnawp9kvQKAj7xbDCd5xDaKYGhgkxHRCTpzSSMwxe21B83MMTgZeSzvTAo5QhrTWZ",
  "key9": "3gNEwPp6tAmTnLEGsyVXd5SzE3UrnnLh2g2EbrFdzzMLruJQRLSTx8L2qybopfDAug4eQUXAtsoy6chibSkGuvVw",
  "key10": "NtdsE1TLnGg565ULPDCxBkzGq5heCNCWEwMyki1oS51KdASdUEwy2Dqo7uyTWCuWXZup8sVh8QeB5PPNXd2F6P8",
  "key11": "2Xq4VWvvcjuE9rgJV5siUqSULCZgWPzir5LVMdM8SJGNhudva43zLd71r3DnhbDmWWMVHXG4ANBWHvQyMu12UhL7",
  "key12": "4rmrEF6f8e8fisyvm4TAVeks9DcnRKgKiAdmPrPvJSM5ap3Zu949YKQxXcQG4DwhZbg9fbq8GLpKxTx2qZXha69T",
  "key13": "2RAkLtGLYYbzMYKTTRqV9UGM8Mp1tvAVpxbq76AnnneqFo1TY7KDQqb8HFLjgdrUea2QU1jgsHNjSa8CMan3RG1j",
  "key14": "5bNTFhVCkXEWMM9oFmj2G9LBfGsVKqyfB7MjpzZ6WPgAA4D4Dk9mEvRETtsko6hj1G6gVwW8i7REW7EMMR58A8Zr",
  "key15": "64yLFfMeRvTUYFQRePBeV2yFPA7ibDYRshfMXKhkid34frmHFq9AqwJeGMZH5fa2QaoxABBCv9SML11YUwiNaeJg",
  "key16": "9xnUArZsFNE1eLE4YDgKkAEDCYUR9Qb5K5uH8ku1bQZpJRz9Gfnz3yfzgdZBNz5SrAhV5r64iWMC1j1bjstpCqN",
  "key17": "65Caoh2s9xNiK15nsYCWU7tgD4BeH4pt8MwPtAVMyBrDmKGyQUxuRMiszP3n3NxpzGduEWZ5zALC9UqerwShEJPd",
  "key18": "7cwx3XsANNKVESdnvVcnRDgDuy883X9wiMYoNZ77obRQPUjaS2TcbWUsbvfHRibHG3mV11XDvTvjgaQ1qtz7Gpe",
  "key19": "4cAdDFRpKoGJPF3ifLQctwnzZiSGTDcWDcAJJge8ZQDK29BgJ7Ced3HEKFWMx9aUtUupSHhuZjpJCLmFZGfezfTA",
  "key20": "umd1d4U4UEYCAK9eFgF5dvYPJo6VUMjBdAE3oG1dDLyW9U8Vc6fDkafJko8GkQxP3VkMV95wLp3XPdznTkX6F4C",
  "key21": "233rSh5SXLGSveau8KUjsNijNkCrubt2m27mAovHacthXb13MT39nD56VeAwsq6TdUsgNhFZCCSuc37RqwDtPTtk",
  "key22": "49fbtM4uFLfcEkiL3TwSado9RvfrvQm3bxyCpdAcADyjZjgoGRK8D7vguYiRMUWxVjVp1HN72ATtGjd9GLKEMv8z",
  "key23": "4BChXVxDJ2rahAvDgmyo4cTsMTHujkAJGpFfHYuaNm669grUNHQVewPDc9J2PrWExEbciunjdyPJc93m9XcrNehA",
  "key24": "3PkwAtfGymz85oTeYDp8RfrBSs7uL7QUYCfJt8ec7AMH3MgtuQ9WNbbxyToAUGNaF15bW6K6KMK28eVc7GCwZgeJ",
  "key25": "3zKQXyMhWqVmJySDEFVdatbT7rSDwHJtBotZVPuT8L9UfNvD6YyyZ5U4p2Vfvi7Ayo73FsuWPbLMR7PSMd8mKM5i",
  "key26": "qELDGicLzDPPXBZcVdrrU3rWiZPuMdA7sBsLFURnF1n9adJh93YVP5AexaaksBBopjhvpzYHAc2zxPUDA4SfJe6",
  "key27": "33oi5QhJkWVNvBPGdHBETfWncZymGHDzvggLDNTbKECnL9aEueGrrug43NR4vyAsoS8cLNz4s9HmmNqvfBL2gDyq",
  "key28": "3xQpqq8zyR8cUwtyHYUworqwJJEWJQy1EBrRukLxRWmMATxt1bzwkjajn3qd9uoLUPPY2TyV6tJy4QPkoAmtm4C9",
  "key29": "5UBqB3fNYCDZvrXZpqPNYMKvmAwwSQV3AWtN3CkvkachjtV5Pgu7N5bCgUe5pma7JxLkLjq19UsPxRCwjgWDa92y",
  "key30": "2j66edfusDnfKGnh7k279HDEYBeCWTVEDqKYuKLhbQ6HEqyLAhANei3522vtVmR1qpeyBmGgHX1KTfiMX7Hr7yL1",
  "key31": "4mrVau2ymjViADo3HVJpyexYyy6ee5PYQ1Hb3j2Y1jD65JG9n9iHc8LRhwPfLhuDPBCJzjCv5AELP6Ebe8Esa6Zd",
  "key32": "5SQTwJYTT8fWvxBEjm47SCUHLg728oYhxdUByhSqo28qeqFfSsrkr5h5AZu8U1zoBubKwxEXxQnTK91oYtSqYPgq",
  "key33": "2bF6LgdMrqmLgGZEPp7EL2FJcu2xugjmMFiAjtkWsBbHsQ8uDFDyukLxpgsC8zSGpMA7vN6ibLywpowmdmCpScKg"
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
