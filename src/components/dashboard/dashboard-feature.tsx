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
    "3GPzAGkmoKDmYEA12D7hBp7sTsrVj13S4Dsp64Mb5bWep223TJj2J8yqGqZFmLpdr2rLf7nCJT2ZAktqEVeF6ESg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49rY5kQ5DnNzxAyRWACqzUfRhu4yqLmkFur9pmLra7NaFhjzdqsJkhC1v3FZFe18gxf8ehUmy3gFiejjtaUseSfF",
  "key1": "2LUPtdoq39iovkQ2TUU7S6UCGEP9oYVY7xCcJfeHwVsrBctdHqmTCJZqbMAWBah8bH6557CBgATA4o5jGu4P3sGX",
  "key2": "2CkoVfn9zg3rmiY49KXFcgjS1g2onPcA2qgsHn2b5TyXm9wQztYAwfeaE82v4LJ2gf3PtYvTyVjnD8ViRs8Nbi3M",
  "key3": "396ek3qJ1TSm57w7CeCvStFjJ938m4qsLo3ccUNHovmKHpbKdZnmVQXyXoCPdNoAkgKiGMjJZ4dbyjvqACr6CUSY",
  "key4": "4VfbU9czf7C2M4j33oy3RPFRLZqrXjLNNgdkqTpHCSvXWKfFN57PE5fWikY9m83pT8SCTfukG7A5hbXB4TEegvty",
  "key5": "3mGr4pVRxFbtCb63yQpD7TSmRVGzSvpL5uk5TjJvi3f7ica5EypXYSbEzDpVn34qvK9TWRQzsCXewRQHSFZuFMbs",
  "key6": "21TDFvKXcHXxKK2cnU9eFzjKhSaiqGPtqUWgAnUccDaz93EMP5jD2tMyY85hJ835WNZPk1Gxawe7mtxKd1Go2WTm",
  "key7": "2ceLvF2HAgr5C7bXKXhswJ8fnRvKF5zenDGkrTKg9zjQNy2iyyBnjbAKhnrfgn5gmRZKCbSoauiXp21Ze6RFhtWU",
  "key8": "3E1D8ouXnTf1TqAx2rBQmoT5ZU6KtjcYxQvBm3hMynYXtVNEVhyWYX8m8pDQGtAKKefHY9sems2cAWoKn14ELw3T",
  "key9": "5MnxUDQGGArV3rea7X1YtBFKidNYaocWAAc8u9MUXxYjPPzEeAnYfScJLXNJD1n1oi1D38CMNSkt9wacDezps81H",
  "key10": "2Kowif9mshVDG4CghtAj4f6hGdDciaq3bxzBhfAVicBooPAZhBRo2X6vrEeFoXoRYpaP4EaBo9qjzBC33H7n2xtm",
  "key11": "23ZWHUqhzbm6Sdyf2cHJQ3opdTmYcah4EPeBEgAYRkJp7n1dqALnhcgQmt9YSTtWyzyGHcnDQzWZHa34SsmSqWjR",
  "key12": "12fhNP56p7S9xH3VHdCsBR2KxV7DAbCGgCMvz7bVc58EpMmZoc2xyJCBKo8GKde8sGiKndxsCb3JSEW47fQnha7",
  "key13": "35VKMgoSNUgRi3GjwPGoFdZk9rveZ8EKfDA6NZw3Eb77ubQW26zfpA3bNSiAdyBbnduqGji68vBFLTqhP5K32FHr",
  "key14": "5jcpLvUZNs7eesnxnuiaTqqR494NEurr692LzCyh1MTJeei9eL853ZKSy5AnUeNckL5HKKmF4D5wf1VERThwbrRn",
  "key15": "4APjDoR6rEhcGPndprzrdagpXdaBxEPJ5NTbazRsuxuuKTeEPKEP9r4Fgu119PDgfgm5ATVt5LWSUP8QnUrGrPG4",
  "key16": "5pVV8ohRKpAtLA6hnZdCR13W8D4yCgwCFibXF3pn8h12jgq772nQmcQsApvmAqN9KUGaF5nL88ZCFdAuPjsXRRfS",
  "key17": "5eJ8eJeS1fUeg5Azh1sFaB2uJbqow1U4rf9AXHz84VT2WKFbr7tZaDmtJTBjxdbyK1f8v3TNKoUoEFxKzoMDhCot",
  "key18": "2wuRVQi1bmXS9vKND3uAGu6YNeFZBoG4NLFh8bYPnKEds4JHiqG2wX7U9L17z5hQzE3RBEeK8FZ4axq99YA8ifXf",
  "key19": "2MUCED7tGsprp4W6zqKkiQ3tDXPWgZ5PvoUHUzepPeU52tqVLfU8mkLto3wggZKSvsjmC3sGzTfdY41X37Av4KXZ",
  "key20": "2Soqo7FiKsgAEfmf5yW351uTFStDPWkSQ1Q4ceqk4raNKMYprGB9hUrzz435VGeJbcNoenULhNUAq8ikTssRjA8e",
  "key21": "3snEMf7ZuMAwQfmRiyminFgsBqUG4pkqmiQnbwsEvnU4SibuA9LifSPhTJEFU142mG1maRPWBzt3E2CvdBKN1FLB",
  "key22": "3BCXohYj3YrzTdpekcbHeRn44LLLTRwN4795H8LMJ8Fjn1Hc2L82yZokpnhUW145Kuy9F8yw7BECtAF3rFYxU6uh",
  "key23": "2DfPfYy9SdNb1QPh8aWhWoF7wfH3cz6YAxLX2JMJUNSmN2KfYE4Z1FMzrsbmaZkk5F21qS392BEFtC27Q8myjxmn",
  "key24": "seNMvrD8f1gVDzKjwacGZrHyKtMgFQn3HfVsEcDMP3iQPuwzNe63GqaYaUKcPSR9uT5Yc5AVo61SfE4H5ACoS4M",
  "key25": "3GtQr5rzZ1M7iZZnmby62D5eeAjGviyHRRVzYEqtVVg9xELSBeSyBFErg4jHgG7ApaXn7dRuKrHobkiPH8uZn8Zm",
  "key26": "ri1mYTUvtuw8GvPhPgQDR3yncxR6EaUWmDQY9VQ2S4MzCJf31rgFhYBkYvnEdfzKcHCxRppSm9JbkqwMD5aNGYQ",
  "key27": "b15aRj6WkNLdtsMQ8ST3TyQLcdUbmWv9zP4aRLxdPvo3SWkMmWkTTwFQ2xsDWxW2Hc7upStCFDchW24U45uEZnc",
  "key28": "5J1Qc9Eg6CtWS1Y1RMyEdbessM6ZMazv7zcmxWrYGuskWnxSsGjuySNFmGHpD11essYCLgrGz9aktmhzoQjLwQN4",
  "key29": "phCouwEDU56GrRDKjacfyQWmtzAxSuhubFqZFzaushuxDRg7T8nnTYDB8McRUAXcLPpgFRrnbzj5HunUQuKVoMa",
  "key30": "6wuAfzWBoWAYUXKeN41996EH1KL9kGuLfzRhUuKbhro6D7C8kiNW9pLqBssJ92UvR5fwCQwhs9vRzhbUa8NRjWZ",
  "key31": "pLhJj6i9aSfG5YwzjwtLiCYNFBdMtgarguzRy9hkvFsFBHvg4Ro5NpXAQsuVnpQvvEEA71YCwxavLXvrpcjqMAP",
  "key32": "5wQaTYoQwcR2jwscfEvk4JxwB2w7FF1JQpnrzYSWudmYQpPX1xzuMRvdQYSqXyvZBe7NhFpLdjMiNtxQwA9RgguP",
  "key33": "23QoPYbkxcRzQxjxjirC4DzMPiPRPt4aVoXHr4YFoQPtWEJPkkwy3MBKvxfYSQUQ483CbTCivosrpGgrGFmPYNQm",
  "key34": "f9ncyyhA4bXY4bNpNcHWhVmLGjRREmbCThTu2NMVSvsYg8zPdmYz73RhSoh1UwkvuiZBVbFKLuE1MSAcLRyWBd5",
  "key35": "3WsbPnjTJDxXfSLh79QCkXhYhKYKinuP6Qc3n54g16sEsEpy5YRu9FG2zpMEdqD1Gkpty3sH8VsjyAP3ZAByvG8b",
  "key36": "2yAQcpm3EEVqLFmsn6PwfhM2CVvPYEdageGQ9cAbQ2cBPaNY2MAH9sj3wu9f5Lud64TMiNFUdhNbKj8LR5SjN27x",
  "key37": "2ozVLTETUS6RPQWsZu3Ck5BfZsycv4EbaMq6moLamrmVShs9C8P8Bk8npUGp2hxysFXga5eY65Hu3akmJ6h1Ns8F"
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
