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
    "931GZHgtnxvEWzz86g7rM5GkeE9JKAMg7CAAfJq9H6vnjXoyAX7YnWCZQbWxLHFe9x9Ls7vmxC3dt4mJat6JPLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g2WTkwbWwrfsZXTuBkh1c2xww69WY1nLH1mELvczcX7Wh2BQTmK5wRoug3Y2PXks12B2XH4UoQRfsDNJfETgCad",
  "key1": "2X9yFvS1FDdnAPhULRuLnGyrfnugjg8KJxSnCAgsDhioJg6syMihvtyGBFTekbm82B63dRxify3SymB1FTHFzrBe",
  "key2": "2zK9Cct5pnQENYwHyUMEiBL4mM1GNLbGjAa6vdBgZpXP8daPwcaHzBrYD2eH9mgYVJWp5iNv68oxJGq6DVi4RJGU",
  "key3": "2DhXYxxayGVJaTgDH8xSs58diiLQFtrvVkZ2iJ2dXcvCR9m8uiJ4JkrsYg33YKrGoGCSY4XeaRmpwkgBEbJYrWL8",
  "key4": "9Y1aV7TxXKjub6tqKvrSm7bsVZPuM3sdT9wXHjf3S9mqaeGXxA2eAUZbwVXQVbxjeZ5yJjU52omjrmJ5Vs12zrp",
  "key5": "fobzp61JSLBrHSmcB9MVBjjUTxS643G9yQzQwwktKrSKixigNzaihEufr4tz4yBPsuzDUpumUu2UTBPDdo2JMrb",
  "key6": "rFmHfJMA3RybFVjkByjJf5ZMuVybANq64UZHxSuC7JX9WGsrWbDTV4cqKbfqp11AVWXxDEsvoEiLRPF9qrRDeEH",
  "key7": "4GEi85GkW87YiNZXqpXPSs3oYPcVPotLGJcUP1cG5Phxm9RDLPoDoGWQKazk9SNcS3QF9NNAiRwKmXUvtNojM47f",
  "key8": "4nMEBA7CxdCXU6oF6sfnLxaRYDAqoGZv7PbGiAZbanTARYvQsbJ7DPbxha87EbRJR9nnYdEDhhNnsmtD2vJQe5Yb",
  "key9": "3ESkSfEYzctXbbX4mZqa7HdAA9mXqmtiXpRhgvfyDDP96ohXatjPshTVYfThTDwd3XrcRR2wPswJucXGSP1wDzfh",
  "key10": "2QwRo45kvkyE3HEeP6eYiF3knyxt9P7Tf4ZyYMfE4HSByLuenmEQ6Acnp9sm58A65MmPPYzkBSzHyr1dGm7ZL6x7",
  "key11": "4eSvh4Kv1cG4yP24veZfF97yPcT6i3nLWWMwiNwYmjuqwKupUdDybKVRMqMqhSYdQ1cJp7j9WUgHRz6Gri93eMsY",
  "key12": "3KnNFR6WRiMuSueN44xdiN6PEjppHMDnMpVxBdavZZUPVSZuHC9v8Utn1NsQEoJdJdWd2ee3C34mk7CZVNULZpcB",
  "key13": "xMNVM9Pm4UKH5MiW2mqqujMQAVTsojcFkMVcpa3eKZa6zjEsx2Pq29W2ZDhC2QvK4hgbSn2w4tbtU5Qe4CdgNGx",
  "key14": "5w8s5Jao1rwfdKrBpZ7QEzvHafjpBbVX84gbR6yhQEohXpqiVpL4TeTMEvhkfRSAZnDbig9T5TJZGKS2yVoozpuC",
  "key15": "4us18mrFdAkFbiphagpsM5jMQBUxZm6dgA3yUKayQfAyYSLDyuyfTRps9W3KoCUSdsTMwJY3sykUCJmhHqWdPLD2",
  "key16": "5atjFxaYi2hUSZQtsiw5v7Tfetcr293vc8SpcWUTJTuHhV6kH7oyYjvL4QbzEK3bFA1TQQU9XGUN4di6TkbEEg1u",
  "key17": "t1yjV1xcLix3KgndHXkhn715Jc4tJmskP81ZxeQDHHnobw3P6YEUmV4pcdvKkXLMH8U9DEYKLN4tK8wFQthJF19",
  "key18": "5E7nvZXaiUH12oNsDjwpbLAHK69ECVZfkxtaMu9iYe9H5n73WkwyjrrSXE6YfFFZZYTzMGNU6LmacrFA1LQCdzfu",
  "key19": "51TqJCYHRbV8UkVrodYXiRdtG24oz1eAeJg8MsPNAVPRWYL1LCzpr4kbdHcw9vwQ1G3GGwyeZzcMVixPhxMUV7B2",
  "key20": "5L2QGNPBeDTgFeWFRdumZcbHtdFYWNpTcyfJiQJ9ytm4mKgb2MmVMLx24FEjWKBnPwdK36zkgSqkuFCan9SQsf9X",
  "key21": "5DsbMwdp5jXpqpGUtBPg2QqAi8uCGwctLjinzGhrch6622feoCydDjUXxMeNZiQPphKZbgt5hDjWBSag7gBbc3mz",
  "key22": "2FH6HoBYupmRBSCBsNtiKdEELdSpHKybYiaCprEnVuwgFdsqQPQPHDVyimWMpbYCFnKV2c8jNkexoAMDs2iDN7Eo",
  "key23": "5vaFxW8XnJgpG5qSAEgjTBTVySDo9bjs8uWmTShg8Euy14pzur9vpPeNFKEpDorteS2kn3QmzifvRkF5kNSFoCVc",
  "key24": "U2oREXCB8q2LchsuNH4riBfwYWejEKHeaqeL7hGDaYgy6NNxn2zCqsdYoVCNFFU2oxWhtAwzy7NyPHFGGkWaiz7",
  "key25": "5W76f5VAjPTUbBWPtKEgfvWfNp3nUyhvZNFeVEsHuRsSm2uvScJSDdBK2Ha7hV3xzd4HckoZhRoP598TdKzaymuM",
  "key26": "269JKBRPsdYfXNPnU35SSr3NvgzYyqWQPH5A4TTXjFYEumUcjqdvsdvt6o6YQj1J8muy3sLzdhC3HeYiSssgHbMm",
  "key27": "5NvDPvncskgAdLBuXZPLfREXvuZTBtfcAVf9z3XEbwojLKy6jv5f8ZwcAWuzSRmuEfTMWStzdxUQpMHe3iX58Zcs",
  "key28": "5kqcDaT6ChS5r7i3E2uF8sG5qsurWQpYoRjihT5px6tYM7WoUTDFc6mKFWLPb8d3Mv8CHogcdYcv8mZR81PonDYL",
  "key29": "62z7jkEdkYkuAsS5F1Kz2cKg2vjvuDtYK2ygTgbQEKU2HU1WH8BuWbimLcTcy3b9pSKcsEzSEL6yG4hZkaqaXSQ6",
  "key30": "825mEodaEoKYLXsUDfu5atR6gFynmdDSFRbVqepivGodXtfchwx5DjRjVdJf9RFyh6JQdd3kLkQmotwZTp3zbep",
  "key31": "36Nx4FuDzzyGkKRdYaYmWTpRA3nbiSfuiDxZ3WZHGczda4B7ZiBY7LfxN8urAf1bDMMMAnRpFiUMbLFmtPzXqdP5",
  "key32": "8t4EUvz8XiLzHZebPUb5kzYs1F6bFbndcUFhgRiK9atmk1w8zeNwHaCM7ud7vU2AVG43iFtYp5ESexSYKXuaCQL"
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
