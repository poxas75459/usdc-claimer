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
    "3SmYtjB1SwGaDKa5V9EsyBULtxhn1kzbKQKanDVBRPduYBnPQZjUJjpTcm3H7rqVgTyj9JQx4k9vz7SPxUypt5W4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22nddTD6z3sdvzKNXbJrhXnTu3rRdd3AdNKHqZrwtWU6yaSkETkAADLF5mo6oj4uBXjfK4GSTCKTaahdK8ZSExa9",
  "key1": "4aup4veQfS7sYEbuQRwKZP4VQPRSHSRUaKn5sT4NoJYbQhayRZCsGxQRs8C9XMvZVSnABRgJnP7hAtMba6LiT9F4",
  "key2": "5wP6kPwMNB8nCqWMprmtYjox4TQTaWcxYu2QB6htcvajzDYnqFVqooRKtag5oFpijyPoUw2YDjDAguJ2UEfYKq4Z",
  "key3": "5dP6TrsHQJL1FTQCX96E9ABXtDJ2Kg38z79k2QfQaAAGiu8Vz5zDceRMhS4piynD9LozWgKM8SFHw7nk5mm533Nq",
  "key4": "3ieCE4tGuq2ErM89HanaatPiXpZAvnbWRa3WCtsQC22hCqk8Xj4VckDMeSgsY9fQJWvtDjY5JY2gEjvmSuFVCkPj",
  "key5": "4p1nCg9iVtPirgaQxq2gA2PMCWxE57aE1VbdFzFYLywQv6C4HQcb972nnxz1o7mHwMv9BEmPAYJzHn1Pem4hCYgS",
  "key6": "41Cppk8obggDwm2BbA1sTWb6fhLDrAynmhw1N89ki4LL6dM84JuShjoMzo3WeBjMVmZFRW1CP7MKhFU3Jd5X8TJa",
  "key7": "4Y5bRczTko6BUwh3GTknYfyq7LDpM33yXBCDHcUwF8ba5MBAXZxhguwZeRsmfNvwGnJKYzSHpyxGfZUF7iE3HmuH",
  "key8": "TKFNMhWLS56ePHUW5VJDcJmTeyvqwp8V7YZVy1H6rqPCk4HTEXmqzKJWaWY21BWjdTNbfVRX9jAJ88H7bS95xXW",
  "key9": "3zmryWS2FktyPG2LrAG9Zgmwy5DsvW2hXxBfLMUyjuccSkP4tAykk778JTJirCyGz7dVzeM8pt5Xp6ZrK3bjtvxq",
  "key10": "67NGW13cZbotpF4ig15napBnwcCPvsQHpzQXR2UdhMBPCP27iSNxqNHBZiRAnq8XsxbdrVNCtkR7hh4LqkVJqQLF",
  "key11": "3gEfVaPfAUBFJjbUQYXHVW2s6NBrctZ5FSJnCp8jsQu6GUPZZ6BVwPsrmn8CLUr2P1cvfA7HHu128PMf8NPXMWrt",
  "key12": "2EgpVDgS5p3ahVXpnyT34A2CPrdabQ3ipbRitqy31S4zWWNob8r3xjdD4XztEeqV5Njr4rLRuCyMwMvv9gYnjxBa",
  "key13": "4S9PRCsJC8zjqgBnVEH7DByw7bm3P4keaP219WLvEcQoDsiVhk9J4QrW5jtw2eXxRMtnbnckpntgwf3LEWBJ2LFE",
  "key14": "3QBeUUxTuHu7NsfCttprNr1YVsTLK6EyWgfRPRGA9PsCaTuebwo1t8VaGb5xc2TjG5yfLSQqLNPPHx5A3qAwSXMj",
  "key15": "2bcKQNJ3pdgY3YHgUSbdXAtFQJRQvxVpNzoNS2Xt76btUD55Mi9TtDdREcPbDmntLqB7tF8bpagH7TcergZEovBH",
  "key16": "4FgA3wFaDaarKHPpGKRTZ48RRJP86Wg3mGCLFr5iDpRDAXqrLxGp4zYpDiGy7iVdT6TcGZr7Y1j4QN45rqf3CAkn",
  "key17": "4AER9N12X7fYpoqo4BNiXKXrm34wsi7zAEYNofZvrYv7n2ik2RVnXy2t3EEy4YQFLFVMRhtJGGBPfwAXyvjBoSeZ",
  "key18": "2WyZ3T5DKXvcx5kHLCw91oFXFNvN9774dKbNPDtva1YS8vTo6vXU2P6aX7sHBAN1ADTfUDmehHLfivVbJpd4KSgu",
  "key19": "5GbHtNVSjwrfuoj7tzhp41G7FwNeaBebDGeVFcPjBqcCkENa796Fzhq6B3rLygVwFSBAmgTfbXCZ3M5rsr47G92G",
  "key20": "mWRDFYroaPo9G9XUyeW9WTszrssG15BgsNCuNEJTsNrBCrw2n83jtD8HatmvXyyauvTsF7MjYsbxjCb7Eoxg1Y3",
  "key21": "3diniYdtnHy7xWQVtAyT9Nyxsc1vRe26iMvGUbsMe1VLBTPobk9sqmEZnvRhanVM2SaiZ7wWPsYG77baigVCcfVP",
  "key22": "57k7wwJM24TtwkbqhVGs4dXBEH71nyA5r2ckmd38VkTcKXJYxqzMgfSbNrvMoe8EM7vZ4tgw7FetVUJReQ5LCXsL",
  "key23": "3PPqw7eSzP6feZAcuotcFzTUUoniq8YY27TVufVR78TrhvD7WTFKUupecr43RHsAiRp33BevoMJZdzgUbeMxhmVe",
  "key24": "555nD6i7qHJiivUEyugg8egS6DAfgKdJ4bJB68LKvtPJFQrZ1tvhbFdBzhxPP3SPiUWAQNDicUsD3139CcevNpx5",
  "key25": "4LRtigZqaoSaMBCSMEb3wDS3bhjRfZf9Gx29e4ersM1HLCG1SnBeDHLrtUkbc1WWe8ZE7WFA7VqT9HxFamc6whWH",
  "key26": "2DQu7UY8g9oBFTfdk642oTzS8UzMZqQKPAbzVAB89ampouyMWD5qjrFrs6NvATaFgFrnG6tQ2ftoQFzHo674evEA",
  "key27": "UYvZpotMZxJ7vTNY8NmEaAnQnWLrCqmL19RJQ8Mouz1JRZPXD4fVse6w5cTCXBa1pP2GyW4HYEPqkHEwnR2qE8p",
  "key28": "4v4HndQBsWhsHdL5zUptDDBFQizDbxssoiRXvUfUjq8w1ayTikTzz9yrRZ7j8o8eFYPFPFBg7thV2daEEZwwRYFk",
  "key29": "2XQaWPJYXKG6UrxuDsrVMRTQ7YbAXCft99kn86xNGhJvV1k51PmZnWoL8oVzwV5PaEwBGKiw2VWZ9kWjyhfzEH32",
  "key30": "2rw3tAiMC7bjhxyaKdEW1QxG7J4TGxSMeExVwvsBLxmYLwewnFKqGqsdCTESjDLrHBBaaouzLR5fdkqCWJbbbPVn",
  "key31": "658RfvtbrcaR1k9ewDnY9YzQ8mh2uvELFyMry8kbmKi2Cp52U8tcwEc5HN9SvonZ3WAowKKjDfvxEJHemSZx12G",
  "key32": "4Z8eSNo7C5sjEHFNPxpSoaBpRQBoiB3P4oNePdM7GYBqBYq7ut5RWNf5N89PfyKqPWsf5VMf1vV52RVJNkjv8qNV"
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
