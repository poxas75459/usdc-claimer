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
    "23PFbEz3aPGmES4nj6WK8e3opE53QkkoDzccXog6g4PE76waJ1JqtmURb9mHQUqtkWgtdghyZRz7RxVoKCrmHS28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "626mh8pLrLxbiWfJauKTJAbJdSQW514h9FPSFsBhjGLQjQnpdnSMBD8TXcG9h277bkRdg7Vho9Sx5QahqwJMXh2u",
  "key1": "4zQhg8TwBbNPY2GphsCAd6MV8WM8ohJrpw9EEwi9qqqweMrxRh5cDkcQo8r4bmVyQtXiA7GJMYAsHBpZerGNgyo",
  "key2": "459KnziykdZUqxEgQHxjBEFfe6XNmanixg4caPCubd97jDt2Noo2VqjBg5WqQTY97bkTRLqEaUPHQvbzCLZtYWPY",
  "key3": "23AfBBktyvLTUr1Pac4C4HFQEhrDJpUVd9U1ZwS6ueKDidfsWToAgL3WdWQ7hqREaqXbZNDf7w43Y7BEceo2kj9S",
  "key4": "szCUu6unkXFUmuRKZ69BeRC8pDo6HkWw24qnBYJrF2wpLS5VHsMFU2NfieiDP7CJiKToevfcqKAu6MbsfE5z6hv",
  "key5": "27ttMuYxMERTR4NPNoTwBMtkfb7zrB5Ukr1eTiBo1FhGAqCs5AQ4cc2w4tovdEmXmZ7tinqAQAxR71Pv1n5qpS82",
  "key6": "48tgiKx2jyeP7g8Jg5qwRggmwdGpZgyGk9cumn6v1juNzTD6oL6pjxjNnMpseXrcBuAamYn5qpGcXhcZ9fMXVrWk",
  "key7": "5z31N8YVEq5Hnnq3m2jYCgvJuhs3Yf35YwKnMM9kPjioHWXqKDKKgULqQeRCUykU6eTHRiDmjtXwSkai5Hnj4tj5",
  "key8": "4kNFYN7oFDZgYdpz29EpPzcdvPUEWsnNffyupDciqpSfiXo1VNFZKSepFhv8MmzuPg52Y4uci3ogCJ48LnVp2Ubk",
  "key9": "5iMHmg8RC4MhCpAPdKJkVLAUaPdito6GM7jra89D4Tn6SmhZssNhTJWnvZg8sE4jxuGSiMHhtFw67insvX6SQ6tC",
  "key10": "5LGYJ8Z8GSVtfwPVeVb2XiRcfKQ3LFBsdikxhTYjzi2wAseczCuiJ9G3mra1zD5Wm4PgD4Uknq2c2ZJMwcfPnfu4",
  "key11": "rxGBz45ZEHFKwHCZWHCnvcHBGV7H1B4j45dziGcvwsnL5ETuFXWgWeEZHTTrvUXBK7mecMoQJRwfxZkjasBEeeD",
  "key12": "276g74C2S3UaLwS2aD9K8AnxuCX7TnhSEWvGPBPQcqy73btxoG6oQq2rwthTmoBv8ttMdQ7hEbLjxHXAKNUuy8pz",
  "key13": "2b5pPk8EAuHfHisy91dHqGQjpm9pfNhA3Mj9g2GAaxEygkcD9U53vRFfw59LqE9eVfPS2fT8x69ojtA4se1S8pU6",
  "key14": "3pyDpYyboCSAVFxf78gzE6iqTr6MdjzXYgcQbEFdy89qzcZ7nN2RNjJwm99d24oXMPiAQYc14ZmXH43YQw6ZTxBZ",
  "key15": "3BzXTQmmsevcdQWJWmmaUD7i2tkxWeyUZEcQfokks7N1Ub3xvdPMqAczTwXk6tT3cyA96iLxM3BCNEoC9Nmq3568",
  "key16": "ShfoPTEi3pWnTLWn8bmGCg3om4g7CKNZ3ShUQv36UY5AaAy1UHQg6Fnye33dcyVge5JmMvNwccPZdKRCZF7YbvD",
  "key17": "3oAj47zEkDWvy4Gr6ZNkRkxmmJ8pySYZ3UszQYEY7JnH6HtexgEuwkKKSLioR6HSt19h8TMzE2AcTuKp921sCae8",
  "key18": "2KZmPxNKKJcwkg2vgbkSnsknPrvAYeCb283C1UM7TnktGerWrKJDP2GKXDrzaiHE3DUnrgbS7H1ht2tASKDEhUpv",
  "key19": "Gs1cXAyUFZjZcu9CK7y2yUU9LeU8JcJUKvnjSPeNx4gdb7gg8yVpMcqThTELmEZHsFsHEngMn5qRGe4SzgnzNtP",
  "key20": "3eD2jnqBaAe3RZqVckLXbYoWTJQ9g5aZjT7TgKQXnoEPX9WXXTRqn8pH58tRs3pPfXv8RUVrdNj4gJa7UPrFWK3L",
  "key21": "3ZnPtDLuELaHJNXdvTghAcPgzAsRf1diWxexQx6KcnKHYSQjerP4txgZcrUWd5Cmu7wb64HFdMj7rAzSgBHB6J2j",
  "key22": "2q7p7ndh9J81izEyjiEr4X9E8oJjeqD8WZ67ns5kuGHRDNNpZPY7ggUj3QWDQd8mvFqrr9cLvT4CxSvmGGgDCRVB",
  "key23": "54wtwTNF7vWkrCRUDXwqs9T687ctkCGAsubxMh5yyn8G4pB4g38psjKVeDe5vgfq4tR4eitmd917FJD284YJ8AXn",
  "key24": "3VoBncbY9izAedwFmfF5atgt2ecHBym1mWAxMxbXXjcDcEA9Lt9iLTjt9h7WCJQvkwLYbKZDNXBRKvKGLQarok2B",
  "key25": "3Lra1qmvgNAstXcJTUdiEfpwZ92BzxtbaZiw3LWMa83LJXwsmEGEukiuE2Pm65gHqxgBJrqbTyPxQxhxPcdJReQ5",
  "key26": "5atuKW8aui2X7GLEsxLoQuikh6Peq9s75vVHjstFsjnLkXHuEW5oPQY8TjccnGsRHwJipkRwqpgrTHr3gakfjWbF",
  "key27": "483FuWvxysJbSWHJTkraNNqXPBr8QC16Jr5eyrzq9soyzZd6yDJ5zH1yGp5YBQYjFtJ2k1u2LtfsxDtJkhsGTeYh",
  "key28": "3r6K5Yy3rwcLJZyPMzCig9Ag723diG53wYM1Ktctug89srAFZ5ci6jmvdQXQgdMj81eK1fdVUBJrGZvtN5oADy4C",
  "key29": "tf2gvSEnCGbsj3QB7Reomj2D1qAEX5ji1MWhL751mwQD2LbVKMPYpLn3GNR7npXi52LSWSpDxNzncji4e4xC4Xn",
  "key30": "47G999j47kosrTx3nnNC6BGDsbUJ6EKppoLnm1L9k5e8K6F2n4bfUeNXShDPa8zt3bYwr3SfHikmu6pMmLxAUL34",
  "key31": "TF95k8e9jLwwzixT9qgu9Wt6oyktkp9vimnMHK37ANDSGK9eqi2gtbyQwgizNvyATQfHfz1YfYgKGAkdak1JNjL",
  "key32": "QPAyWSwmKN2ueo7rJLNgczxDvYwdumkgfWAg7VY3NfpqfTkqaTGfiHxQtA4WoU9AE8sz67BcwY2w9x6SvGWvgio",
  "key33": "4RgjKCdJ8VoQD5v53KVj4ZR34DKNcKsmXiUinS1cb1RF82ghL7ZfRA32xY1BdkDApTaRRZa9h6dzvzQmRmJ7f3BQ",
  "key34": "dxC1oeZAgV9sagGWezvMmkXnbyQpkKSWEJyGQNbC1woPbhTdeWWqP4JiHsHEvQkPMrvSxWeM9synUuzv35gb4Ah",
  "key35": "5kjT2vScRy7sPfGgZqK5KFgJzrQZCHQX1Dp3dRDx4raNRjNA33cL9HWu7gmaEt1zfuLLtAaHXrqhyFNzjqAxM3Cr",
  "key36": "5STqHxFx1ao1cErz8gMyv4PGGfqYU74a2Xy9N49oVBwraii4eCgF2tHf1vJPTxrb8LXcL2jKH2NUVsS7B8mWVKFi",
  "key37": "2iKNbQend8tYTKRvXEJsisS5wW1U1jGRkRKtLju4MZGaTh4yDVVVd7CYg6p3Hbv3YxknJNiyysDYmxf3VxdRdJBZ",
  "key38": "3Z52aMAGtUwZYM7NqtyWdMrYiSPJg5qKEszLxcCE3EWVJ51Pudt9hGq3nqcbrMTU5T3f8qeK3m6mHvqs6zJ2wnzo",
  "key39": "ciRDwUrLUS3PPdvG6TWCgRG5Fi92LNBgsVWYu2gEZAMLnXftfLMkTnojy1TMRf6HdXwWEhN2ffNbdLm2bn6eBRg",
  "key40": "5oiwzz5bh4rrBTinuoVLwkBnCAGUbUYcLxcVYbEbkojrP3obbfyoFS6vZtxMavDXPrvuKCZnpe2wgH6zwcmK6Yuo",
  "key41": "4gtfdSbpj4cYngasW1TGfCHzHS9xHxWFJh1uYNREXJkPK93eorux2roHtM34zFu56EKbWAuc37PWaaXDuH1BYjmM",
  "key42": "4y2FozSdJAtDuiXSupwPiWgGCsgye2aKBGczRiv9SXXNQaqgYSj5o5SRGEPXkkPi8PcRW2HJ9jX81j6yiBtFaZzU",
  "key43": "3JJ8J1Dt3eJ9SqV6TWivgUQfq5zfY6FqEgx9whX2Lvi8MLTq21t8yT1bMzXP2VHeq3X76uf2PS6Jc6VJ7VzfVM6Z",
  "key44": "4RHoiN6oCKX8riPjdy9EFasptvX4ED9MhunJJxXnS3nSxftywWKPyoxNHBBQruRUiVsTSbfj2ZfAK3JkpVQ7DDQd",
  "key45": "3TDZMGpKbBnzjsQu19QstdN4HXh7bmHkAHbJn6YjYNxiMp2JswggiccKUkXuFi66FSihUvWy8UvbNkzPKFH21GHD"
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
