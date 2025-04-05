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
    "5WUZW5BYLsdngs671B29nwxC5Locr7i9uGZ3SG8KYgerL2MFVC2Qf4N69Dp7iTfNHcJPoAZXvM25JQhMKQnWUEM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JrHtwwscQbQS63Hb1cuSku1uFxwYTtqDLyrRhHcLgBembTb6eFrQbKo28a6CJ3kY7HxyLp1E9vZTvAbhrhGR6U2",
  "key1": "4DKQ2yVA8wJKmKiCa6YMbsZYTHALPQpF42Hqa89VMw7TRJXMswzYkNkK2Hw675KVkt3UvQv663JWETCeGbezbJKU",
  "key2": "2dLkQ5ggCkQTQMy4iYK58jtJ6eCHCFdX4AUm5CFLd8kfbiv4MmFzcmP93E8kfdtfkERVfvMPomSd7NHwFRcQosVd",
  "key3": "5DZSDXCesQGYwAM4LUvfFss5L33HZXCk1xz14tKNNmZkqDvJDjZXfjpiwk64DwvMELQpSwpbkoXuywuWERWzQ4dV",
  "key4": "5x2VYktrY823S7WwDeGBcFhi8aN8HmVpRxfr52Bf8pCkSNbh1eDMBZYmpDhAL5MtZhfNeE6L2hmcMvd1F7n99ixj",
  "key5": "4V5DdHNaTECdmW8PjtNT957jJeqbbmtKpKvJPZKMfNCfLuB3H9jSXNqwENTHXpwdBVbuxknNFSaWJAmMUx4JnsU8",
  "key6": "5Hhd5vGLq1pFfpX3TDNtL25dLXpfSMz5wr7B37nej7WxFnRjuLof9egkJ1YksU12kzJMHt4atGboXahZ2p2JyQwH",
  "key7": "5z5YMYU6dLNUkjSJcg7xzL9sMQAC5v8o3cX5G33PbgezU4Nuia9SouzSP7NwKjxqqhgu1iYYBe9BK1Q1dfCYuTvo",
  "key8": "4GAw1jLD8YA7KVqHUSTBs1Uq87VKRfy4J9LDUk5VJD8MSSsxQD4hrL2vffTTs6KQU9VDUBzsvc6CERYFnByzosLJ",
  "key9": "2wx5wNWsZdZKPRN5gB12HghPazXZYykRortstk5BPzkbbovNFGXm5z13bietefmrZ3KvfSARmRvBkWRdSYk9Bs4m",
  "key10": "2jzny1CyVZ8Acix6nvfak8DYtxFJg8yz51HaBcDBBrERL9pCCFjxukG9DhSvaNsi8SBY42GL3Wh9jHrp9gQfwSDZ",
  "key11": "4qb4kwxDZEzC3ehiPMbKYv61yVcbpWgqHMpxdFrw49qFq5E3NxzhS4iGhSTqWSLL6eGYDa6SvkqUi6d5o8UujFVw",
  "key12": "27b4jq7YUJiDygL9SceFnAE6Vs6cZMJPathfuaKsgZnPpDyNx5whdmSmacDomHZxNXpW91FRjRhrQriP8JM68VAD",
  "key13": "58QHCATV562v9d9wdbYDB4fTuZwTvxhTmBZddTAdDjqs4SmcLqn1EjD4aFF67UQggrrnmtofMvVWfmdQmgaEdtfn",
  "key14": "cDnh7ZfVPiaLNSPXYGrqpUmG2cRYJwb2HGwywefAWriV7pkKytmq7J1EC19sTKV1vPrJxe9BaVA4tc3iLa56FAQ",
  "key15": "3Bp7HhEAipJSBd5242B3JQizAKajrozB7ZBNWSZvgzNVkqFLjwpfYgxdiWA3mu29x6EB1Y4vuh3du4EHZDKix1fp",
  "key16": "2vsA4ha14UmZvQdwhNVYf2hy8yqnuQe2XBdFhD9NQFw47RvFhHoEoGHyDFTNJ5f1itEi4KRNa3zELfW3LnTssKWr",
  "key17": "2LzvaMmSWGSN2h8VkSexwJaZvMK5BkaUeBkbonSTi9cXXd1iSRyXN2bwkmEMTw9u5rdDxLfaMqkbbJQDGv4SNr4p",
  "key18": "2vK9beoKb7wCNkQSapNsvii8dsjiiFmwiS8eTfw2uodC8m1op1BnBgWVAAqKxkNcsXiCVtNMfaZs4WM39y4sjLNb",
  "key19": "4jugmXFwjibUgrSg3WhCEvKyJ7DX1Frn5Yze1o3bPqrEjUFwYbwrnjEwhfne5nWvspEXJH4gaLvrpDxgeLHP9JkE",
  "key20": "4wHvuyo99Ki9wvRKoV5ij9iTQ9VFLTGfWfYWeF7tijKbrWL8X1F158YDeMYgHbZ4DAtfjkqibjz3H9Lca3Uo5j7Q",
  "key21": "3SibZPQDSTfr36tqfWPQ81uWFp3rN948PdRJWZPAuLMfg7rJNuHiz43gELad7qsLgryVpKZFGn2CyKo2jxrp6skr",
  "key22": "2K2hyaN2bcVcyNsDvBGecziruenHx7C3xdswREt3TwygfA1hYRooKa1Wy9akHYjBfzjcmkgxSYmqipSnCdhfP49J",
  "key23": "2ghJ6CAA3ivVt5ffWL5QW35y4jf6sqcSZzD5mKGD5Y7n3k25Q5mbe2gzaLibhL6HFE7xLwaWkSLXRQm4Kda6HwCF",
  "key24": "4vjtBoQXHEBbp3StpfwaAutY6zVJBL9TEN1jSM5zcSaJQygJsmivUuH8cPJEzEtfYSfQyoy3uNQmkBGtrQZKaCV2",
  "key25": "48pRVDdmW4KQH8UxyU6DYetYRDukc3kxipdNy5Qt3qgLjNmRcKdewhuw19ot2HsBGdnAUKvoBDcwzmUB2RxwGEc9",
  "key26": "qyJXAqZRpJq32mBoEoZmBMdf8gi5UyexUyMZpGfZZMAXxV5xkzeqSnY9xyvKW8VuMH3pg3DoQfpq4UN8TWkYH56",
  "key27": "5NhPcx7CRE24TbEs6PwpqjA3qjLBiWDW1sASTbXcX8RrCSDrv5zbMBHSrZj28GgFVetENnqHXtyC577qkdmTEkU7",
  "key28": "2bQ7LysVZf5WnwvgaMDFXQwnmvgiNVVJsZJJRroEnXxfBbW4Fopug5TkMY5Q6gyDKrkqReFwCe27jSpuphNoYv2C",
  "key29": "2xN1r7sK8A2ZjG97RRiDwmj4Xy3BUXKohid2Zjt7PcuwMBtGrnLAWbeCXCgKcWobafKuALEBgqg3URij5m7Co3WX",
  "key30": "4EKK46EkUjY3dwC2YmYjXHHLCFUq1SkzKUtAfLqdiPzdRWodMfZVLfYiP4keAcb7GbAJKPSxw5M2jeXXddqUfJ85",
  "key31": "2sn6DcmZDYhE2jQcPkempajecEbKAVQNom7QbzDFmqM7RFduFvFC31AzxSQAa19PkTvpR2xKoxEACJBCH5JLmscz",
  "key32": "5jCSEXHRA25U8MrkNCVKQJU1746raGVCd8eGZ6cZCQE1b212UVycpM9ka7CJjSM6TcKwWm2rJhLFTynPY3ccc7vv",
  "key33": "1oMGHtTf5M22TXDEvL4fmqJBWMVXqBHic8hAgrpQC9cYpjHxej2hvy54shxHQa7tkizsZqbunvaQgjLfWYxeA8b",
  "key34": "3N3drjxJHU7gMgHh5YxLrzSQXpmCnzGdvYwd9aVhntMfcM5y7GVsYqXQTqshYDhzEg9xJUz5gXvnvRe2GiugLof7",
  "key35": "TDhufFyH1mx7DXB28czEGgHyNAtmsTZDw78JJXqthDCpW8EbFpmdbBzNuB5RDAUAtkZnMHg7kphDHN4ZWEatoYw"
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
