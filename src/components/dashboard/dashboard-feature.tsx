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
    "5wTRvDM4PAbvR92Z3fwczwXst8Hd42Rgfz1AhHWUe9XiYMLzCCLdFzbNNefrL8GPLcdatxbjZQLoQ3Wd6Yd6ZFvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hn7W41uebByqJQsYKko4gTeJKjBLt5Lnnfuf1gTMkBCzhmUPp6SJLfy4cXcwqqptu4rhELz1YmjF712R2xm1PjB",
  "key1": "2mqzPidV1eyRzzz6Tu2JhExThffVwH14okeuJ8FdFH1YUFuqTgxKaBKZQs6Xjw4zWYxgyoqRc8vX3RnbH6AfZuys",
  "key2": "2jhgbh7WCbi38u8iApQyHAULmhDaCADugKqJMWFuK2F3RS8Bpjv4bci7cRDSTo3iwGjLoxnNwSRQW3XpB6cx8mTN",
  "key3": "4YGW3EUVtyRKHpGaL9QrSQQUpDsybtNwmqPZGgCSqmWE1DxdxWaT1oMzYoPHXRWwGLrkBTtkenopKRV5S5QDkw69",
  "key4": "61BViALa6QCYtRPkufYr1iXKLJr6LyoqH9688rM1G9SMZJGLvaPTRDheGSFJbkjN5twmiWjk4WLgdeDWQ9ykHQqf",
  "key5": "551wSKWSswGye7cwUEsfomELpwzuJD2R8XmR2T31AnQFiFdeKC5poTbungchCKyGTgvPrD5kCHEbc9KG2knV3QAS",
  "key6": "4LT13TUTL6MUrawt7QsUuh9Ka8B6Gjjs3v8sycKYxPDPhA7HNJ33W98VRQr6N1VFqTrGrCVucgxcQNhF58F83XXY",
  "key7": "3mhPWCn9ZfpoTS2h3YHVULweR7kDwicNCR87tBcs2Z6MPwp7TDfueXmZzgRKM3Lt4cBfdxHVuUC5e5C4skex1R7r",
  "key8": "2RU448QLZSAabovyg61TbuobEQLMoBVDeCrZd67XJNDMwrZmTFmZ4BVWd1kRWth5voMjFRsnZQFbXqvBYwBxacBU",
  "key9": "57jEUThZKzf8QFRvNAn8wQ3FaGphDvkNvgRmz5AtRGvhCQcNBx3PHq1VEQFwqoq9ZEWcKFmC4iMAjcNnYtTQsto4",
  "key10": "5yXBTFinmkXcf62fyLcArLH6ngAFvCmbCigWZdXFC3cAeJhP4q7dGVimzk8byNNNCUcFAdBVWteugZngszSyLAWo",
  "key11": "bLsd8Wfwq7kdXiaHSbr2Prk2jBw3q5Xwfw32voP1XVPkKTXeRzbqz4KXJXxw71r5t9Gc4GwvjqEonwGvAh27bvZ",
  "key12": "4KTHPwRDsoWyQmQN6YTCBp3ovNG4UQnzcWxkx75yRhh4cgdjdLx2WDqAvySHyXowbtUGDnLzG8ifaFrVbL81Bgb3",
  "key13": "5q55J5fNRc54ZoDdscWFpg2JdJcvAThXEkh6yBt9v9fNPjjH6xkHtsGLoKp2cQFp3Jg6eRvmC35EiLNDDdYqxQGZ",
  "key14": "4FqsPsShfrJ3Y2q5kyQ9JTTr2h9Nxdr49VSFH8Giy3cLTSM2oxUuBbHpizJcjqpgfJyXRW28DjaKpF76Vy6UoeyT",
  "key15": "5zuzyqnhKZc1z5SWjHk3DuwC2fJ62rUjoe2wynMKAB3v8CbNLstnHL6eN8x8cEnMUzp7vFmzGCVrx8roUzZtACR1",
  "key16": "4vpmh6tWaGTvxtE7dTs63SdNFqXyuYX4L2xrTXcCdWMVRwSdrtcKN6LQ6Q7yeNvH7Ze1npcZerxDUz5xNtocjWEH",
  "key17": "sgoJGdPWbphPf6Enmf92AFniThXMcUEBHq639wmtbfNTNRVYsAmLszwFm58t2nVKYrGDSqdQXuNpJesvmjptvSZ",
  "key18": "5B84sJbszhGnRMT8fDv15GcPardSqMwBbuhsncPmt5M4tsSbn2Z8dHvMnybPUk95kDoc4pdG1ZUazd4tZ7PH8C6M",
  "key19": "5LJAJ1R52UNF1DPouhDScVGAd4f28XQvWJmZ9L7DFWc782f7P5m7u4enp65xrvN8sCuXyToMoV8Z3KbmbzpiRjbo",
  "key20": "5nLRfQiSEcZmmYNxhthFCfjPK9zgCiHd3fZq9uwuq9cVuHY1DU6xsBvMKvcXcgg6jpXgQ6WWyqtL3653SRCyMTyQ",
  "key21": "2tXbAWc8V6vd3ANCwZTRgf1yffByah8vQkEYUeNikfGocPnJ5Z93ysq7MVP6T9yS3ErUkVmoVwKmv9ETHLYSrMMg",
  "key22": "2DAGxqT8udkSScz16iwWbqkJmEpBdqvooYb8jjDRQR1otjUtrR2inT8XbgRDJh9LysPu4DcSy5oFqSeu6kogPACM",
  "key23": "2tDNZNKukLtLqdqriosKaHzHRc11PDyCWRG3rfyFeW4yPzYEi5BXEDpHuZXpTf7gLJDr3QSzjVjqggbXgn2pr3jP",
  "key24": "3epYje2FK1FjJdprmntWKudJmRt5agReMFZQS32qwDD1YJCf2Fq2VaLxLRP4DXrcUE4KZfijZ7Dm3LpdGA45uW7S",
  "key25": "2uvHEk43xBTdCpPwrVRpzkBMRvZQ64snUFEAmynzfq5FaSWzz5VVJKWS6LDHLmCX69zjVjAqABquLi2fmgeqnzYj",
  "key26": "2qVFcskcNeEE2oQaNXLkZTq2ForALnZKDRG8ecnc4toQ5LHu83BJrztu7nwkEkV62tedET84XemGNqKJH7G76Anv",
  "key27": "FvCrQcuEn75ow6GHXDnKatEkn6C8FujiceqFTmmtv1enRMJx98sBwckWYDPKMD1oMwRNvRik4obUfgE6enMjy36",
  "key28": "3yjgV8DPSBYbzs3N26PJxVmW1KsnnTf9f543zPpUe52PUuw2rHWSyQQbF4dga9Ph5BfXeqwCdU32x1NozHhmh19D",
  "key29": "514FC5NwYKLJU4fULaKEe5iixri7K19yCaxTsRphe2oAVCssbqpfLUGi2RupwssqYPktmkvpuV1BS3MuTYuSPGX6",
  "key30": "vzJiGY6CArmw6ZpE2A5pEKKDM7kqW4fEV2M6oX96jh1g624qoMrnz4TzmzGYUVFoi82jS5x7Bp29H9CUZMzS6by",
  "key31": "29BZEPmFBMLcLdBdn7m3LButWPKsCd75KQgaNAd6Ab3Mpa8VcCMadJF9wcw4HrUmPWccj8xQQmD2QZFzot9gYroU",
  "key32": "foucnDewJLQgiMArnmG65KCQuycJ89pZYfqJPHVQaKSAbxsM1iq9kmi8yidSHydkgP8WZ53Tj9unttA9zMSdKgZ",
  "key33": "3Mo8PFmjzctABGAZ2tpQhjZBYxRRLVBriTNEZgkhCNReomZfmc1cGJSFNFc88BmU5wNuMp8jt1tSXpFfW2dpty1g",
  "key34": "3ArHtASKdcxptM1o9x5Y4pSXsLbJAh6PZNod1PZjmtPCTrQBNUtBPPfC2oWS9YBjSFE5Q9agffmTWSLhPsXjZ9EP",
  "key35": "3Y1BoY4tgtGubNTrCvk3ru7p1fbGFvrSJ7G1k8Sx18EzTZYiCD2wWqjjo3Zw4o6XboHUXJidcQz3kZgXm7qebX9c",
  "key36": "2dXe8azwAJ1aYZ9G8wQBS64KM3MNSe1FXSQjRD4ajRZRHh8VLzv85GVSd912stPGSU1RXCSFVtXCFXbvnLa3ugjF",
  "key37": "4QML7SJw1JEi69RfqX4Fgwi7sTFnTMvkitdT8KjvZRVjPnWkgYCoxpiwWGoRNJa3Exufjbhj6R7m4ABj8VkbuQea",
  "key38": "3BWneztdKw7Z9XfP1sVq7BQuhWNF9gU7NQMkomFcAdiuwBjiKGEKKBBkvR1HYD6KKLs7YpFKq4eimkdkrp7dawMw",
  "key39": "3sYuQTp2MgjHuL1wr2nH791mExD5RHkZ7vxqAX53fHhW2p7kzEYWhPb663aGgbam98DrfJgAjqQCYTqMs29vB5Lk",
  "key40": "ezYm9N8rxGgeH15bveXbbv5kuXN2FYbZpLaNN9gS4eA77xBZNkTfPU1MYYsijNxg8wN7hxx2t5GL22V913kuutW"
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
