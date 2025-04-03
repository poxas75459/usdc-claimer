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
    "j4yyGMoPJWLiDqLkaFvf8Ta9RN6B1FWUGY78V2RTsheTY74ACRP2QMDheD72Sb2VwihLJbgJchyxfTKe4jmBSLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jrH6ie2HQmDBYpq5RbLDxhXxGgwHb17pzZCae8VGBKvD3KbapH3dSXhTYqtieRgwv3npvuC8wQbEwARW7H2X6fF",
  "key1": "2rvxcYhtW2D9Zpe9yzJLgPDz3nD1c5x88HUfFihK5WT4dq69dBDmUXpXAWXS9ixSB4C8FMjHtPRBBJPBJHyXunTe",
  "key2": "M3bProDeHvRwW8q8wkHcqMjCgJVvrdgHJSMJe3PnA56wHb2TPQFAAchkMZwHLcfZVws1r3vFHYDUKQTSJLyW1YJ",
  "key3": "2Ar2JHeBkNWDsaez58ySDZ95LQZxVJCuT4N8nQe6sp2mhyvHpwo3pSjgUYKRvcNMNA5ByErSkbrYDnzN1THV2163",
  "key4": "3RjZZKG8SNJ4GZYyPy2gUBNLHzYuA6v5vVAGtuAFSvYAXvcADFESpAnMUX2QKNa5myHvaGNLRi6Jfu8MDbjYX5CS",
  "key5": "RFPQrsXGZN9y7o9FKwkFFGPK22vtLhyVnuNXx8se8dWqWyxsc5tTZvVaskTrDUA6brj2FgfzEQvs6wgCXjBnJ3y",
  "key6": "64tFyfK27cKDZQ6rq818YUdiWasbpwgxKPuG9WMvhjcojWANArCh5qoznjHp3QUJWg5SBquumTfXuPPUyLinebyC",
  "key7": "3ZNDn5kZncS7CFwM3JVrmcJrmN8DVhgiX6PLmrziedR7uSDPaEKJGB9JyoRAcxLZB2J839F79MK5RJNrwWqRJgFV",
  "key8": "2Jf8hpMLB3dgTBFoj6cM87X2asaRCKfy6vpvXgNy1bSH6RFD7tXJqKi8Gyv5XpmALLWwybCCzjyUnKRZqDMeJ4wK",
  "key9": "3yLU4aVeDao4whc4UhiR234sAHujjfJjvQeSuvXjB4Kj3r8zWqo5esjnqFoRe74w4NWiTzjWQvzrKtEnZQ1vKCqG",
  "key10": "4moUa2q1JdZwxFPLYaDgbGHXqow2Fcm2LWgCkmsyADRnYZYdiodzT8aXVgrZDeVzoNy1eyCvAA7f93eihJT3ZNFs",
  "key11": "53PERZwPxmX2EzRZbbjHMTayB2xkQxJGTzNbnfsERGjBySAxuZRozv672zw7ETPnxUStWx6RAyPi7ZmRJDZgjDUd",
  "key12": "3y5fARfmGrs6QaCPSSU73Ggg9ahnkbWNyjL5nk2ZgAUcRVss92hNswhakFxGjYC6ocmLt8Usfukfj4TAoYfTJTpL",
  "key13": "eDZp7kCY44Zkfe5dgFgu3LrWH4CPJmHShyQpHDKzxiA2NjGMkSoteKy2nwHfcAWSJK6GWvhxXR7sv9vxz2xKqee",
  "key14": "4VzGEoaE8TaEbrKsFWQkjFRo99JTT4WSvCeQqB7KtqsUzDsNCDya9i9CoA7qoiuDLQr26uh5pMQhvm9dQvZbr7A",
  "key15": "3jehZaQaZHfkk7fefajBjdtiDNdJve6gVVciemdv8SRhEkzokEDqXg5Akg1AqZbzxGVpCxoxBzsyPmtXL6buMcGN",
  "key16": "FPCfV71wG5XQ8fcarDLqPoH9A6YhtnFFpvG8ehxcZw2SQabdjY6TjMGzsvpJutmW2Bes6s9vdHu83dEuUBjaV5u",
  "key17": "3kSKz22SdG41837CDxkin8dzXzJ4ytGqxLXqpmdhRgS4KoXjkBzBDf7XbUn5jRVi1RbBGey8kDsThPAyCzA4e1za",
  "key18": "52gJvVrMzd4jLq6mrpzjoHm7ny7asko8qQhAUHTKxE5fGif3wegYqg3wwKYjxfYqzkxXipQwVsZ8vZWMrGyWR2kK",
  "key19": "3zjr3HLJo8NsikTBF5M1myrc5gaeZJe7Puw2VnKtCGVZGXoVwtifq6N1wLL7iFJk6iPkJ8t5wzyZmmMp2A641xKA",
  "key20": "3ptQKepPwaixYJPoSHvh9E76Qgzja6vaoVKRvLnMPY4hyhRm8zVMfFdqRXe3zf14hdUvB1MpCYoT38q7zaPF6inu",
  "key21": "5tk1M3sNB6sfKNxDnyTz4TvL6goss3EAxPebZxYB2hAdyVUoPd8MG9QjPB4CeoKtFbZPhnPaZpHaFWm22FfQquYK",
  "key22": "4MMWrQomyPXK2oGA1MaR5wcn5M1hMDkRmbwnBoj25PsrRxVmgtSJXAw5PLAYtZEmepTXf7sWvh53y2kGNyeMvEcc",
  "key23": "5BqfwFazvmQNQFUNACMPeqP4bTq9RAJmuwrTFswvFDH9gzJsJ2CFvCxBFFbL9Joqp1xv3HgCcXh8t9oHUwrQmX9c",
  "key24": "3dGvDxsjZqs8dDAcjkpLbXUMamubo1HArjw5BwzWQTRrnw6gN1F98qdatxmQjiwQ1Ur6MY79V2pSAYJCWR73RDqe",
  "key25": "3ESv5nuN89VdtCiFJa6iaW2hNC8C99XJEhFJn5s8KNuLRKWmJ913qa86V8VMUn9H3byCVdaVbS14o2MdUEbnvBTK",
  "key26": "4RW6AG5t1Qe6gZvLDqPdiRPqn9WhMWzsCnLwUTiPSJGQm4Ywx6fZ8CErzpY9M1pVCxA1wFJJ1Lr6PGebMMbGHyxx",
  "key27": "22FvAKnRKfkAwmgmkCjRAB1eTqaeXULBwbfp6PbSgowrBsbsd9MDsP5KG6FDk85e56SxGf3hVUhXZ7f8sUMgmLN2",
  "key28": "3YLuimveBRraazxyi7b3ijzjT6JaHwNa9sWx7df3Mq7Tvoia8LXtS61asaVcxRJpD7DJ7vjoiyuoW35ucbXb3Jbb",
  "key29": "4Ju4PSVyVfkhbKSDvGSJXQozcktNaijRSsPwbvZgg48kUAYAY9sUCocNQ6hSjxQuLDLdhdtJ3UPrb6wJTG1bmR1V",
  "key30": "35nkAfZSR59FUaqtYpCFHhncdG6NdEHqER6LapgJGjBsJMhWF1EVmtq2QRDiTdWavJAhxqfJPgonc2ZvwNi7TmDS",
  "key31": "56s9bKumj78L6wdWFhZzKpWzccZQ7bab4HvPGaBZXuYzfX6y2yXBh39ZsWAWhP2Y16bbDsPLHfXxK5S3tgLJbJ33",
  "key32": "4JozSzTiRmYwiAv3rochU7tjN5e7F4mFzpmE1i6NBhe4ZNPpDTdvWPRmWY7KQFG7ophoQoJdDqSXEdyVTFRnompF",
  "key33": "2c3e74EkxinX6uVr3DonjYKVVGjQFVk9Mbh5SRFfKGhPP2vEziyYd8wNRccRSXbVs6WydbNr31pn1nHF8Hf979BS"
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
