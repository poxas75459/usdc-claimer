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
    "4WftHuqrZ6H994NTes2WWMydB41zEm4oDmUE2taQYADKYwnCjCDVNbs21vm9qCp46gVFovHWybEwopwZcuEFJWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pzRT2hGvfcSBEEb8dfdJqJwWWa9PxVCwMgQggG6QkiKp6ooLVRt8k7tSAXavq315Joc9GKsvKM5C18oLQgExUFD",
  "key1": "oU6freXVV3y4wG1ag8QTsMssGxgW8bfxcbMngNebytkZ2oM3zhd4QM8Wa12Mr52jQaKF3hwz1EFuWV2fsi7qEDx",
  "key2": "FRR7azZ2q853iH9twwJjwtfYnFSdf6ZdmQkQUs4VKbnApX3gt3Vjzprb6Jv68Ub4PLRquxG4DmsAxaP7yie7sVs",
  "key3": "4iGCT3KKMxuc9UWRPaofBFxuc9tNEj71TYwSiztPnBuLKpFAFimyL1rehH8oTsnsFLfsVSNqnVHNgHWkxWuyvCsZ",
  "key4": "32rok3NeVum49TDRkJmY3cqDL19JXTAbsgB4XNFMf8WHuRkdNcqzWLzG5UPKSXdf1GUFSAhnVaMREbfRx299Vk5a",
  "key5": "3bkJschLqxSUxHiqRn7vSrFKt3SYJ8EeAd9fM6P8FkFBofkeo3nsDgWRinzsSQoCgYCZPUXMYTE2xvL5EzL3JWiy",
  "key6": "UFx4jqwQEMdFZy9RivfWSiA8TAwnkDVMfndwkwcY7rwj2LZYwM5JK6EyzNaLMaJqVjmTkNqDMKhuYvA9esBtLAe",
  "key7": "4zLY3XfhSdAar9s62FgMB3XNhcTdZ2hiejtw2qpydTa9KcGXCvKqTkEt5n4isBuNBzrNyVKSAN8fkvwqV7Xtc49o",
  "key8": "3fbs4bof7RjzXV6q1ZoDXqsQcQiYxkEtkukL7ViCSmgZ1ba38BNRWkViKMQSeUXdBrzXm2oQTzdhj5hF6SBwH9Gc",
  "key9": "ZzzLPCBdJknvzBEawmiCVsJJSCdD2aAtWDu3m1fn9u1FQhCcmnCbxCQd8QxSBGznmVVk5vGdApNu8SjhNWfVXoK",
  "key10": "J6YTTvmY8qMTVN7FdZMAhnJoYdzjFYoX7EFzGbYgAxaCe6G6p7wW7jp1rAsgqjXCAg5RGmFUUh8a8RaXJ5eVg3r",
  "key11": "46hvoUNr7toJoMha9pW77PDe3kWuswWCAQT7ZR1voR1xz2w4TjNXYDoDQC77otQZM7CLF484sQYsPazyUjctB3Pr",
  "key12": "4qhpVWnLWBDvL9jnZLiGgzaygJK6iPgY8yC558sgvCKnH29ztp3hhnJJJYpK3KT8TAcYQ3zKS765fpx6zEDrjx4n",
  "key13": "2y8tNHntJAwXyQDC3NUBTkn6vU5x6J4iACzHVbpokbtEuhyBKqi5gWhNPQhbLHCeBxag54vu6xgMsvG1Aqzz8dTQ",
  "key14": "fXq8fVqbzdgcGvcVvJvmAhJbFf2ogpG7wqmg1eBGhKoAhUHmM4QuLrmXVbb9vqtL1BxHsGJFAtUiWHVaGYQPsiQ",
  "key15": "2u9fqfkkY3LRQUnbzE69D3XN4K1G8GJwTQZtwJFYYdVNZScQiU83vLqvc17FPFxnYwLxP1vq9c3Zn7X5jz7RBmqs",
  "key16": "4dEMHXLRNjMEstdn7e75vNa2bvUca6ELyKQHXbGCd8dS3eV6U6hZJuWhKWdaG72165Z6cniPAJ5LFcENo1StRMzK",
  "key17": "459zdubLPseo4xupYvvM56vuzAkUKy6vgoeFJ4WvcoFFrtBxjpjL9QjoJ8fH3xQcaUVZ7G2vatBDZswUzDKt5Fvx",
  "key18": "3z9UTJuJ7VRaDEkHXtzgJ5b6MNewNCCpt7iBjhj5qer1Gx5fnn4i77sAtwqBgU5LbkxKVGEZ93V4vDwKE6Jprion",
  "key19": "4oyfbB8SiXMgX2cd6zNJ1S6x74nVrMGYP7y1DN3caTLUAE1P53ePvjnbU1N1seNagb8hXiNyTzDDJ3VgZfBLXaGw",
  "key20": "43qNHiVLuFPKhJLZyuU4Fs9x874eHahHNXTtitHoDn2iVKXWPo1QKSoqyMuE9VyA2tH4rcRofpB6rFsbWpxMVEVW",
  "key21": "5zFyKUD67mbXgG8Vn9nComtd5TqXrtH1kU8vUVQ73z7UqwZjN7ke3LxxHBaAPeG84Rhhw6NU3XT16aYQjeYckZ1A",
  "key22": "5qfMchNixCHyLbqnWMX6QE4Eax7L8m8u2T7pCHp8NcrWTDMSrUFBbaxAhwVuKgMYqwKXbiipcvp8neNVE51qJeh9",
  "key23": "4nza6gw4BQsWYfaxo6fizhYLzNRxBVWZU2gMZL2J7WrF8XyLP2tQtVSmAej85HK9pUjqffmG1QdS7AhQVuPNB5Li",
  "key24": "3cxo11qEtU93m7bxHW4RkCXsuXLDRiFJ3z43VwrBJYENhywHT47oe8DdmqwNAwNmDyKYJZT21wMJuM2EYThqEwQD",
  "key25": "3zSUzk7g31468MjTABUgNPgsWL6mYyjDXTmJi6M1Yx67ZQ2UbFAea5mjDT9da6sq7CW9maVwGzBzSfftirsKb9gu",
  "key26": "2C3CJJgDkmWNJEzahaPuF1TbCVW3nBiVbDFftAVyEDpw4AeMCrEXaVfbyHp3a1jJAqUGbZqnBZbGbr8vWcyxqnUj",
  "key27": "5RKsCX9rmRvtMx3e9XRY1RYyrtC9L72NqYDHTQRuupryG6gXbYMsCTCHiHaupjaCA297A6PGq8yYcHi2zyA2BB5T"
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
