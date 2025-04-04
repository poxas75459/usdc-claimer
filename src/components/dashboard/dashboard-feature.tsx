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
    "zqMuGaqG4zjKDDb4DPrwNScMSMewqtcVpKKwDRZx15f7xxGhA7VojFjMQStZnKGHXWZd3qxfRq8dLSS35ADvso6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sDpgnmZiDMr8c8bn2WUPShAYzLadJGkti9n2pfgDZJJirGaiTjqW1D1VpTMNLv3VyQgJogB1BG5x8UwHEcU6Rki",
  "key1": "3NhP5CedbKrUQhsWXvyqaGY5NDpRWW7at5DB8hpztfoqJ93RCCVtcRnRHPqs4zRGnrQn2m7jZHHTpxmVhaDZKYyG",
  "key2": "3aA92qDVGwCpLyRvLPjxnHp7G9WffLQYbPRWPDBMkXht3x78W24nUWiAdWMW3VMXMmWwcedY2nEAjDUr9paig1xC",
  "key3": "5uhq2aZBdmzTDn1YbftNqZ2BkjReBXKSrTLwvjA38BiBkSfLKQS33Zg3J2ryGfsiPdrdWuShE3wq6gvbGvyYrzut",
  "key4": "C4BVGJ7RvnRpvJT7UwV5ULyhNLaLb6aYQtuPgoBaLPQ1cqQChEVzLVvcQ2AWAf7twyNBBKK7eoXsx822etKEfRw",
  "key5": "LYhzAUTd1G1vXDQayYFPYWg8kqdkSh12HnMggm5n1m9Q8cYhTPeVaHFJKqgooTT4ZgE2nik76EueLc66S5MeidW",
  "key6": "5CvGrMhXTVkCqBkMcEFXYYNs4zG7xXGBqe1wNqEPVHNbYq8yG4nHcEBa3BhegardBnQTC4tUfzqJiPcY3dc8RiMZ",
  "key7": "5Jd1P9BgfbHVhCJZ5VYb17LEx23trsNtV6sKjfoGhFuqKsKT73HzmeFZVPVo4AU2sF14E6MZq3KW11mTp9dr7EDG",
  "key8": "25VNgwJgjs3nishe7EMSwCeBkgCa3GfUugo8qEYUDeHHrxC4Sq16PtmAPnSUPmEN2XSajqu9sMLHE7ADYhdQ6UvN",
  "key9": "bh684vTbDsJDJeeUZhPwptLXuXveNiRr7j5yzSN5KctNV47XuMnHui67YNgJtFSfdSfDrfbb3qi1VpCzMdACU91",
  "key10": "2HZh6JJ4t33NpM5uKFZcxuZ4xkLrV8GFEnbehJCcksA5yFqw1ZQzdVmaQLd8iERQmvvNxnPZEqbctk3sJhyvj78E",
  "key11": "2bvS3R1iLnT2WVCGAigrdJHaoV6yufpr36M7GS6fwuQ9mAfsrgx3P1Kz8pS14D8gyU7HSuGzp9JPU9MsEaFbRhR8",
  "key12": "eD51ks7yfp7Kz3aHNCmrNJWUZFfeXY2qq12bY7TpubEqRbmQwh4CaJSiMmV97ihLticeUXVHcyyXXtUfy6tRmnC",
  "key13": "56WNisG7yVtX4VCryKN9UgU6yCwqCD3sMJefEf8wBBZzeGJ6iLZ3VfiC3Nbr8tKeEXeEvsFarzMmzUw1yhsUuQet",
  "key14": "4y4uzrWZr1i4QSbLc8swkA7aVDFp2eDN88UMsP122LC5BAddYXgLH21L3E5Lcs6vWxTSRqmBhFbZgVLYJQFWBMze",
  "key15": "61BLZ4dTjTbM6kEbwfdFYeZqjWKYtFD98BDryfUpdVNveLHbSzTTgf5Hn9SZpNQRuAbfTskk8Fu33k1HrfNk6irg",
  "key16": "55PMvVdUjRoaDPhDaJq34CgE7Lx1Xtgx1EUNDSSvnsDYGr7P4ZA5iMQikjj66AG7k2oF5FMGf9wm3FJQzufKfh7i",
  "key17": "5pDvcZ6ao9XEfPE6gF2qtp1w6YxGSVTLEguyJPfG2Gk29jbpaEZ6KyPWHw9b119aWUrbAKbBYepoT54ccxCq2Rpx",
  "key18": "AUorb3VCCenboP9UgbzfWTstKu13x2RXnNo4zBYZbAspMDHiR2UoD7TToumJzGpu9P8F8QQNAby4Z2MNiJqa8PE",
  "key19": "3cbmKcGTmZZcyoBF8uCafEFrSThjgoE5tygxj7cnh5qqR8iR4SVfHXT1Bpx2gZwpEe6H8VottV4ZbeEFwHjK2Jac",
  "key20": "2iifLrYCVH8FefSTpyqNmdeTHSEsa8Qgokc46LoYP5uzjnRDLa4nZut8n9nHAeYjrJmCESUMEetJ5NMkGAzu6cgA",
  "key21": "qQeMvKHC5AgjaX22imEv3LgBhNcikTBRNVdXzFPB9GdWjNZ5jtGCVG1pLft145k9Ufh6dD6D5oRSdzdwshdF4VF",
  "key22": "5aqJcsXvVR8WQf6Mcww9ET3rCmkCzMgzqoHBNHu2nkKWTtzsx5AsxAJnbs6Nzp9GqTedpQTEbpoyJehAf5su7Shk",
  "key23": "2DMQ7RmuysEXq5GwqN7UE2xb8YQKtCoD2hiuhfEu9gHBJ4FobNm5mrMZZCAwPSCgEEaiqZhDqJiYYYh7CnhjABw9",
  "key24": "3Cf11vmeVsTJaNfhjFioS4LF2bALPs4BbDDTkNdaAXmY65i7itDjaCXGpUV8B5bysgbRUTyc6G8XU7D4mMMcPDB4",
  "key25": "2KTK9TzQJjpw4n7LiYedG8yx3EjKRmRKtoactVJG19qJXZa8bA12i2ndHxhibThzxwsQRYi87ATWmhhvSpVX44nr",
  "key26": "3FSmzoAM32uRjL2ds7XZ5dQgzikwKqbUCQ78r7ewkYCZ8Zv9dnF7jcQKhAyFNpmqCUtZp9LXG9bKS183hdfqFTfF",
  "key27": "5ZcP2oBXceoj68DyKwcF7zsemAnhFbfeGPJNL19zVXK3ydpZeq9hnqbTGNFBcuKfiyUrrZkH3RUxGFqiNS8qwTs6",
  "key28": "2n9r53RYiC5mh7jwBYiwAHpB3uSVpBwtCEdFtgqPHiKyEDqkrMpVmYukReUgLDrkVxQt1MWr5KJfWtMberomdaWM",
  "key29": "4fWsUg8wuXCbdKUKBvfP4gDCTBXYsLgv56gVnFfH2QBr9wmBiEvoaEin1X9CWFadtu27wgHSKPKDWPzoixzvX1Lt",
  "key30": "36w4TJeP5oxrTkfYWbfKVzj1qDpLW28GiZR22ugmTVaH19M6hs4FYG34gJMgcwwNyAJtpHH4K7fTugkfMu3DyMfh",
  "key31": "66qVYLB1VkzKq9cRGvmD2dwTnS6uP8p5JZhmzUAzKNNiQqYY5WTVtWUpRfZemnfRM6bXt2cdSBqNTNCxnUvGsxLA"
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
