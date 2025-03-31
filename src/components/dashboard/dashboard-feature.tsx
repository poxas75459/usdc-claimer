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
    "2UFLVrB6dnPHhNcvsn3ZzpxScxuZfjaRgwuuNesvQRi9baaMy5bN1GAqBj8Xk5vZuLmLqKZhcDL4YAu8x9WEtqpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53fy3hdPT7LpTauXExGMrQc9ujSB78yx5NPdC5V4yteB7YRHiyv6tNEdo1DpFEHvEgPrw9HmmYqnZdXPo4TMJWzc",
  "key1": "2JbvWnkZPf8v436DTjySbdhQij5yVVukHZEpqt6mLLrwdhGz75rAuuU9kafPL6QHN7vU1z3hcHFBMbAywew1XVuP",
  "key2": "5BP68XPmrp87L8apWwRFdHUbqgcT849XwrPxr9ZZuC2vV4WMVqUBCFEJ16dfnqcQ2gmqmGkk8PjUbq8PpTJeiDjW",
  "key3": "3UB5hktsHnijhoxNEjLPgDCYCZuVUvQA4H8tUwxEG6iEKq9ciT1qwebUrUqcqWK91qMSXwBdeNQoSXckUE3wy6Gh",
  "key4": "55ZYM7cnmGFd6cjBPaHzEEJrqD7cRz29z4U8A5QXgoBwWDpDpu4KHA6PVWFKTRekHDmaFhi8d6iK71GTyag72Dtq",
  "key5": "3bpvvcFjLpLRArVEzsq7Sjw1oqDKZHm3ZrPX7pWBXDegyCwDUfwg4hB6oNbHvaByqrPbjbPCQPvdSmjB4vzH33XE",
  "key6": "4uu4ypCKZkymxAwhcDDWFxwDNGezzgn1ph6ybZdSv4cajxbez4Y11omMT1TugY6Cjfixnex9DKLyeVjbK82ewHcL",
  "key7": "yeWMVT2Y6Cy8f5fgaGcVDdVWThXJpwNzmSuK24K6dWvPfKwE3fXFyu1Z7HzTZRN6oKJGkbXS6asPeSUAsR82Cqs",
  "key8": "3uLBnjmhrxxcmEuPh9kH6PxDzhsSKJxkUyUhUEgcKrV8zHhY7C78HJWPH9xJ7LeEWoYaoUudwVtkPpPjXo2i4fF8",
  "key9": "4kKDUDLVmvy3HDPscxkacAq8X41WuQFXacfuKhQ6LfWYnDnrN45stdU5XrnCGbbjFYcx89SgeCXb7JLw5ArXdMAg",
  "key10": "3bZDjNfzAVjkKiSY3GJ8ExqAMSxndTsgFieUDhYZJX5knmSFCZF2vnPFJQnyAqy27iht3GrYdAbbr7t51QbNvHze",
  "key11": "2Urk1dXeAPBfzUEVRcyEC1Tt5nq2RNzCh4h8TnpyK9gAEXs3aiNkGMwvgqFU1YtQ6P3dCjhJn5i7NSRkYuGzUDST",
  "key12": "4WhZNRrV1whANPnGBGaCkHVPSMBswV1xWQzKSJow3oAR5yjSbWyMNvFYaqnAYgwKUYt9Nu5AWJoQGS547CSgUU15",
  "key13": "4Ue7SqBHnpTU4povawxeXfRynswBMQxq8WTFpdRejjmpDenLWVZxgESsE85j6oRAXcfWbHgo9EfaeJkzyx9KozYG",
  "key14": "2tZtBZqLcR1d5HDMqjbn85zvtQXzoeqr1oXBgUfZEtqRCd1euo4ESHvjZsbPda5oeDybr7XUSeeCzPto5CqgNXrA",
  "key15": "2SCa2snSBjQQCqmwYdnVQUKcY3SRNKHcydbkGjRDwSqA1KJA9QA2nNGmJEHfTp8MTVFki3rETM4UPBs7Jx9TTCfF",
  "key16": "219GcXCjYH9YBYjK4FNHERntoJ2nvq3VjuyNofMnr1SGyFSvzXseJWdpxpYfqQcZeoVkpLDXKuvKKTjKDbkZ6eSK",
  "key17": "vYmgWJzzXaGckSu9ZinisrR4rJcgmSzGwTRSF988yMzcG2AXbxwj1M9pQwafuadJYZppq3y2WwUaR98hrx9PRni",
  "key18": "2L8WyeUGrH17eoNDK7GAik8R4cdR3KKqD2kU41riDDKYoJqCMYFtSh4fwU4zfUxoAzDYnVkMgQ934P97FwwHcXHp",
  "key19": "225LvfrJvxjMhf9Nu5vNhncDTaDo1Jc9FmXnU9tXD2Zr58471aQvSrhFZc9StLW9qzHAzyXsKpJud74mKsbwFm4m",
  "key20": "667SzSKRx8RCpAkVS2gnoBoJGNWjQxDe8yZm9XscVspBNJotX3KzJjFXW59qC96uK1jjMkomu3CWqKVZJzGpf97i",
  "key21": "5ETQjEu3h8LWLnUCQUME76iyZF6jLJCDRif1LM7dwZDe6fhWeD6EmPDXQg4gQKCg4TSasfqKwssBw3FCvBNWVsc7",
  "key22": "39t2vwYwhBo1hivyzAKUQ7ZYVop2X8ixkeZvUqx5yR3wpFqDioQmretMKWEXy56D7x1dGTpRatLKZctcUm8SnJDA",
  "key23": "FCy98qQ9mkWRtu7d2waX8CWdxSFnhB7uRJhSg4CRUET4ZDrFws9QACr4XUihmjui9guhSuJe7rg3ntd6L87DpGy",
  "key24": "5QzpoqiGRy9KS92MQmvwBmac1dnpP1zvzk9c6A4WQFDFUi5V79UqzTWLV9pBEGNzoqbHjsGiZteYVfKkFaeUu8iE",
  "key25": "5X3j8pCij85nfkpWFWv4Z4CXZWZvqzThoVc6fFa5vTx1jJzrk4umBXyAYXjALxV98brCiPAVhKiqDzhxrm63DrYp",
  "key26": "2JTYKZgzLxA97ziHxRFcD4FvNqnNTfTN3En65eNHvVFRTDDLbauAc4ucUE3PqfaPR8gmPokmGKP5YLbKKqsL2Gng",
  "key27": "5wfkU4MBUWTf7AX22m5sXxCUhvRycDLfjjuzhAwRvezbSnS6tP9AMnGpksRKw8XirQdSPhVpJwdeujWqVWKddo6N",
  "key28": "2RVVmvMheukpUX96jC2KgfLichdUYm217sL86TLUhgSTHbfYm6NJks85CYP3EtycGwUSYaAqL6mdceccaTQjTgi",
  "key29": "4RqhPt2KaEjNE6q1QfZ1EewgFBBiPj9XVBy3fNjM7qPVvQXPQWXU9wgwQYZRr1moQcCHY9weZoLv5uDh58PTiU94",
  "key30": "2hFBbag6Bm5PDTJfvfjHf8ykUQGJCr5jSBjDS293HBRrfvdhSAPqbYHY3HjQrHD76zkeUNLK3LS4QNLhf9JBTqkF",
  "key31": "G2mdxck3J4EZCbutFPMGjsJhJZDm2v7nJckTJP1A1qpdY85s9AntEx6R8RtowaYgEtLf51mm462g92DaY6RMBdS",
  "key32": "4fC5UaQwwiteEY8daqkcT4u8mtRSCyAWPumHyuKM8z8h35GPkWemogkvS5znsacfaCTF2uW6baP13GrcFzrTnuMb",
  "key33": "3zXZiB48nrEdkARNrVMPCVL62j2T6vwcqpemW1Bjvtq6pSxpL7bXRthuh7YbhKd85kvamq2YRuRGGfVGPvJCeC8t",
  "key34": "4HF6zqnMiafX9Vz3qHx2YQhTwKP2D5ge88GQHE37m9t9q7dkqiD3td2d21uQDdm5wazMbYV9qWff7zzJyekerGsq",
  "key35": "6FLWSFc8DQkJpQQxrZDmsJYDVmqPPQwrPHeNgShDJcXpJv1EzwQTc2QAdAhExdLvLYmCTcWxmfu6p4EW1TK9AaT",
  "key36": "wi4DbTN6vJKoWYF3SwH722DTYJewmkuAqHtRqNQTaLZcbSFALqzrTNMJfStgFQ6yLDg6erF4kA8qGNrjrPt2S3a",
  "key37": "3uXExjjgZxAcrD3xDrt91EfwvUsYfYTBWcZYxomff5ivUGz7FS6Hp5Nt1YRVZiMrmjt8PEKt5a4FvxVvffjYJfKm",
  "key38": "3pSuEDxrwAKgrTH7hvXf5g8icRb42zH1ScLMTQsSptV6JBXxpzdF78oYe6ceCJE4rzBTJf71HyqGVb9pi9mj3nkc"
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
