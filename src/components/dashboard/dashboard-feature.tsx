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
    "2wt9V5TW4mPCVC3zVve3YyDRi9J9cdnas3CLRwqsCLpCjo9pZxqv3iuxLfCTY5onzbMKd2sD2qDGX1rtAGDYnCjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n4VzP2XXE2qV5qaBuKutab9UqWkN1EJSPcVL2mAQaxwHJBvUpbF24njKqzfbrx4X1pre4qebx5aQUVzWC6ASQuf",
  "key1": "2Pf9U199Z78N3cfGTeSJ5SgwymvuXUdF2zGXtWWQchtWhu2bLDrMLZFhXwnssQSZYM9c84UCa8ju14NDY4szHXfg",
  "key2": "3KWj22fXSHkU84YZUrAY7cdKxVgq5XU3yWwfBGMZQ2LPapCwFgqNDvABQYtwh1mj6ZdKVC2XrGgqBDQwq48woYhG",
  "key3": "3cvCmFHFPiSZThWYyUb4aFKv4gdc2qG7pofahwemLGXeAfWqKwbQhzz1Sj2LW8RhkGhwssuKQD6yESHBPEKhWUY1",
  "key4": "5Vj7rz6FQKmGy7SyzZL9UYSeoAYgWZehx5geBnUgjhAo2qzZGat9Jmez1LK1ggXGw6B7UFFErdMfp9LG4n9v99GV",
  "key5": "5dr7GrHsW9BjJvVwjRcLXrytCofnfFnZXpLR3Hd53W9ThJeS4GRufPgW2EA6Tjr9sQQU8jZrzse6yxV9X9waE9zM",
  "key6": "49FGAJuVbVopbttuV4z5c63CpFamG83SZw84FrCRFw9BmoZk5FTU5v1aUpi89c2xbkdDxVP4VfSZ2dqw7QzYifwd",
  "key7": "59nmPxxxUZdDPdj5VRjuCgdNbuiKZN95Ht5ij4pSkkkaQzBw1NXEs4TuoN58ira9t2qrsRZw17Rc3yTTZUEZD1F4",
  "key8": "35PugtZYR38Pr9MJ1MeTWFNutHD8mzG7hKXrNkJizaXV7oAqwBywjSuvjpTHUfGcwNf6WwAwy7JboPQ59ZBcvo6w",
  "key9": "SVrGBzi3774cddiEKuDn7rTDqsKz8YVBuLUaP2ue6C88JKskf1ac3B9UFp2wdNX4CSPgXuncs8QkQgKjRNR3nZz",
  "key10": "5N2RGWmF5Kq87kuYyCg3T5oznMRcpRmZE4ckyzd6AB4KH1RgQNy3jYrdAnvA2KbqSLocsVD7ngyyokNPhSE7piZe",
  "key11": "43t4dja5XSYLU7hcAWXYVJ6e47DnyhCh4rP6T554agEa4A7pFx6NaNW94mtzhJGwYUqFFJfSgdHf4wDH9PeNYdNn",
  "key12": "xDBiT96W7etKA4SQAqatB7mfJLrtXa5omdp4CwQ3pVt7QyR8bHL9u95m2nfKCmzCxr5kUrW2wggAt2CTRLCA3sh",
  "key13": "5K36JzLdrzU4txj1pzPhCWeGBQ5VGpQSmDA5kwkn7toiV9M9JZ1p6KwcpHUcUuuvuPv8mHs7fXpvdypLtiazStwJ",
  "key14": "gcSuq2aZuE8YGf35Pj4FMiWHwaySsQy8Ggz6dP3MekxnR1kVAqxVezzw8kz6VDACr1KTWnz1NtPZ12jmn7K2XLY",
  "key15": "33GVKQNByvnjfNA6uhASTSfC7Dbm24DthFrW4nyvwiZnkJvEwJascYJuDvyr2rXgXsXTi525hk8AoKFPqcTNzMDn",
  "key16": "2QqoKVuxvDiD5WSdSvYW5pVk4dFj8zzBnyLBFUA49knqUb7kLQLjL8tXb1vW6iCUsNhhHJffhM3Cd1EE9FtLMWL7",
  "key17": "44KvJ6D5Tn4FBFUizjFqgVgk5EPqi4WNsa2ieUu7L16qacBopRn3tD95tjmhoqVpEGgAeTeu2zQmpGDp5TaftHL6",
  "key18": "29LRFiNznWNmmxspAZ6sASGyEspT4yGyhEbZifTy4NvyD6uQ2dZeY37HqgUmpdtSiUyBrctCm5KcWc7FBi6UzkkS",
  "key19": "2LSrLF8vdek6R7LZswfTPTwdySNPHuH1Ug8c5Z9ZWmxt8RFJ162pr9n6mcqTeWf5kVX3L11BwLCFgUT2FSwTW2NS",
  "key20": "35CDEsrcvmn5jzYa8rt6teT38XCKucQodwBvnjJDpSYbbaqugrMesm2ZMYUyTxAm3M6jS2vGJBUPcR8x6g76zJRT",
  "key21": "4vPzvgNKbMuUhQQY2M2P2vxs3vHbsa1rj6C4EDHhzhmHyAHjVN9mxsdpkv8AE7P6kKdt9DN2xNppTLiAzdxs2FQC",
  "key22": "3egNyDbL7meaDU8hGnBEnRK5XRYYmCxHAj5VEzKZes5YZgTGdAEDhsxNFFZrhxbd9CHiQSL6uPQkCuZ79h3pzJ4w",
  "key23": "234Tbjj9e2M7ZbMMn6krRwuqBFLDtFvttb5crMTC4d83murUqvz32RA1mvPB7kxrgtcPdwrvdPbQSm4Uo3tgkDMg",
  "key24": "3TzzvgQgZ8ykMAQeYYFSSpZgdmdM2qCc7dgzwEzgmgobX4nE4RAfey1VkCHR5gb4o2PJLydZENSaug1D3Yv3bKR9"
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
