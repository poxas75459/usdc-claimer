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
    "5n7HCAGEu2bc4pGuYEoPQXxtWqAsMotjePu4Hzpdp3jyT5jHMCsjBJzu4uLMqnHgx5fLU5HmRYW73pZvMb4T3xut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eotHZuzgE5k3JHbU7dM769yrxFYx34Bz5B5o3vZ5yh2jYnedJ2yHaNRJPcudmVbuTvL9Uw2fjEhCmUzqGT4UEbr",
  "key1": "3ag4zRwQxHJHoGxFALATezpTJtj4xu5tFgJiWSztP1HAb2Z4bYZL4rHHkSuj7vNrpUnz5FPCC5NAWxLg57YqhTB2",
  "key2": "65uVQUJZYx78ex1KWz86oFfA9nCu9UvJF2rddxBvD5zDaaoMETD84BgpWoqNEKNg9yf3Qd8pUUkRsSJYTXGbBYVM",
  "key3": "5UaMeGrYjVVBG5SNGVBY97vxufj14VBMoBFb4PHJBb8dESMeTeiqjNn71sfc9BGsEecqJX6ZzXy3H7ErS9Qm3Pit",
  "key4": "r6f9Z2GQixpgbfzPGqw4PiBGsnhvoZWie9wYUW3kSFsNHakoi9gRSeTpNRfy7mEQAoiSmi8FMxpX84fgDLgPphh",
  "key5": "4vw3B65nAXQUrqweSG49Pmu7akv5Kb514HNyf3UGaDA6KqaFQvgKUXrr5HUKyy6dDreXuEzLjSFQiMC6QS2raTbT",
  "key6": "4E8va3Tm1UxLUiaQXMFL89DT8NMgKhtufXWXMWEFzRuDUGsoWgoMbwDnpcGBfXyZJYCqmnuBSdL6c69iLhmLRdPh",
  "key7": "4oVuCqQsavpz9whMwfTob8kDoc4nKRNghUHAknjk5GmZm4speyEAcCbyhxiZa3AXFzz8jABWEHdvuBnEdLpPYdYR",
  "key8": "dVMEQJhMeX3GZJmpM7FqnMh9A4qtbVPDqSVN6e7UxntzeTEoyz7Yvv64DjEkebRKSZCD1vsDasm3cofFz5vwgnz",
  "key9": "2LZFANYJhqviUJ1dDHpZd5UCXD7xcnw7PNSvsSt5dM4XrdDHSrsVUq9Z4s5iJEwaCzpuPtQecxAUqu6ye26Wgukz",
  "key10": "4fG9ZUUCH2GBPtq9K9WFbYhgnEVir6GrJCCfdX7G5qf9iBxT8gWvoqhaUigQC3FeDGwRPrDcvyRXkiXDnKaBE8wS",
  "key11": "2dabzFKnDGhZE2ZjvDrJLjoCQFrhntozbAGBTyoNgAj14pB4L41qe7xSky13GgrzD381Fv1oNbycff7AyEnq55kW",
  "key12": "2UDbeK3pjJvKfvzG9JtBRUybSwaNzank2KPiPDMZqYQUiCQNz7KBw788cBzRKCCJhSxp7bFURCBmqmV5z1j1sNHr",
  "key13": "5qC5KKrs3HsvxioFHmF88nsSXkbB1yfLf6BE2dkrfwpR9CZyV5HeiwmXs3VJgVQnmSmapC396YFC5yveGkGCPfpU",
  "key14": "5aTQrxS7PWgpTjhtivW4AWqy4ar379YH9ZPZvxuSc5558eYsQiStvafisDhe8XzHygH9xaFAM2SkSLrZhP3N5Zd5",
  "key15": "4kZaVxhktjVGqZzJRt5Su1mh48nVUau7MaSdbUXEBq8VYcM2e8TBphXprhavXkv9uJQL7Gp7ZXnV9t1ybfes9HyK",
  "key16": "braKKYb7kVo6ADUZEmFBzHzpQ7cWYaa5PJjZ53sk1T2q4kAtvE4kupPz5912uDTJDPe8yPhHiQa7who6KHAuRcP",
  "key17": "Nj41QJHf3PPb4mocY68U2qwZiQ6XPwgdFkf1QKG4wp3xPj2DPgqbZzGZBBzXYqZkhZNDULPFWofKDuPbc65GLCF",
  "key18": "4bsNBPBP6kSN3gf9Ff5ND5SQbeJyVfjJu7n5doDNtpwq6UccExPBB4QEbh8uNojqJdeN8smrjMuRgHY1uSm83Ftr",
  "key19": "419omf3ai2vuPzdSk8j1SLFAKLVJzzX3D5Qbx5ju4g9DAC7BmJGkm9WQtBMPAdNYJUjEjuExBgs8qUhXx8eBZ3Nz",
  "key20": "nihp7NGA2hVUXMsgZPcPhmovLB44rWnZL1Uot64ejeWcAj8DCe9zyn5QUvrQnkpMgVyJoxbTDsMtwDaCUX6QhTm",
  "key21": "4m9w5hR2akeWoeRHzwTenZa6KBigCfKcDsFPSmao5Vy4VEiztjUdYCPcvTBP3qnCZQbQsorS1RQYSSHQYRbwLJHB",
  "key22": "3uh739TCJQSg1WCSURWm9dcmcaoF5EB6upwPsZuppCtvveTAD3djTRkG4vZ4xzKHHUM8vBkU1yyVZ2YaPybVTqBe",
  "key23": "2SQNS7JKdk5RWXxE41j9DMUTjeMGRGxZScX3TSbacF3wFBFBrurRXY3eGvFNTkxUzmLQUsA7pBKcjAtoT5aD1AJ7",
  "key24": "3W5MVSJT7Ka1TGcJuLa3MegV4A8m1hGPfhK8FR2MtvvKiSFahwg7uAicQredcaTm3Gc2kbQiFEVt2y6SFUBWuPBW",
  "key25": "2MLtKZJ6jGsa4JQ9uY7XtjGDVGtrJC4kmwZYtund74jYrwEjLh4JSSVyFQLN4YitBksGvqeXaBDyJ78YA3fyi639",
  "key26": "4Z6JnTV9wJt3BEjWKYpbPQyuLRiFmFxXmefNMZSv4eRS9ofof4LjnEzrZhYa9KiZmRsx13zeuc1ZdrFnu8sMBWu4",
  "key27": "4n3gHSw3tiDvikMLhwg4g4j68p5MihadNa1nNEERvuM1N53ujiFFHz54yet86aMDCvP3gv6aZE2y158qwusQrx2f",
  "key28": "2oyAmHXJrChngGaFCZW5oBZYrGExPvzKRuGavctaQZu2ncSJKAsaye33yUth6eK1CDsQnf6SfyZ6P25nFTbwwGd1",
  "key29": "5tTvGPqL1iRuFH1CmjtW4CMkLM92VULNAkqJYfRXff4uMRDjg5HZw3vcsChRQuyTzMdMg78wHc4h69zj5TB4jQiB",
  "key30": "TaziuSQCYCGd4kmmsn47wvkHkoDqxZdYQNHYkPG9ahhMjSa37bRmuT9SFHmvSfBDYHKRivUC8utQTGKMNs2A6hr"
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
