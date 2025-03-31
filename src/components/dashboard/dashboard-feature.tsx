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
    "4V12rzsXnfzKGaBidFqyQ636SLFuXuDPyPMK71XVvam9o9LM5U4yFQkDsqnYobdtwjDdHwbaiXAYgBKqc6iXeFTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LxHATfDwUvtEP4g1mBkFqLQe7MDBv2J99Anx9eQV1UaDUq1uDUXHFr9YhZQDPXZ8eKr3NcBwRattBjJ9AquztiM",
  "key1": "5dLFBjFJAvqXK4Z64nrLbrgfMKuGtCqvoJMaUVU7uKF1GH69qQBJLLV9JB2VnEeTSCYwLJEs264pxak4tdZC9L39",
  "key2": "5aCVonFn5e6QMkCFLDn5jYjE3zfgpVdRiBYnRrHZp6pesN5W6hmvsKxcTfqKppPioWokBHthfSE1ukigSpW6ubEF",
  "key3": "3fmWhfnKZ5oMoc1LZAWSGXsej2jrUDKMN6myUZDPLYgbhRPuRwFPrmN1EvBc7mKymajCdta9nvzNxJM1k69J3uBm",
  "key4": "5dsh2ySZ5MwCwA8ywdiq35WvF9UwEUiobU4empnGpXKeqCWoXCHRC6rphTSVqHN6xXYpD3PQce1h1yPSPgtT6Hoe",
  "key5": "5P4pxLeemybPiMeJECBjCwH1N6e6bmYxakSQNhRZKXzWkKKC8rHbtv2E9xEkpPTkYoCoQin7v6M2mEe9BpSZqhQT",
  "key6": "5MeP33mWXd37csccukvvUmYaPKXUDXfMKhYwtJahdQMs5x6Pe5gtmxFSf5Bp5SB5AMmusk781FrCRCyEpufB2PjE",
  "key7": "3yVQJ8JuVpXFQXwJhBev6eMxn3ppak7YsekL1iFgiXQbrFFrETvtHBSYa5iTA2JWuD1jZoMDjqELVCvsXNSXow6i",
  "key8": "3Y9YDgU613crw31cpaFTSXzErGgRYWoUxas2yGSPPXxyLRHWGZbGKxCNBPnv678hSCpiX34rXq729JWs1xzJXeRy",
  "key9": "2CKwytb1yd3E7aeCMrrFmb8tpZqKqHbHXYru6bV69AXyzJJgWRnUYYnTzNHTiYL3wBaQK5G3bVqfZucbo1w7V4D1",
  "key10": "5iivchTM61Juz3TrfXQydMuM9DcVLDpApvDnu7twXxH7k4izRu8QTYY8Y8ZejkKjToGAMX2HZVNAGBcueJWTmneu",
  "key11": "2v3881V79cL2AY6fQhQaVpm1LxPm8sRtQan7S66VmV1Xm6M6y9pvkynLud8DRkb4B98hJgqrHAYHgegWBP3Uet9q",
  "key12": "3pyERYubJjBunaZcJruaDHcoqxXK9YUcoBJoQcUpC1yBPyPLpwY3YmKcDmgnhJn3jP1h85nGCn3evjcuHu12VpYz",
  "key13": "5TdPEyrkMEyrG6CdjSVSqParkvg27KGYKX4aJDyNyYVoSi18YaGjNVDjgjwXsNeLKrvWQSjyKBfuYNVD5LqMsivA",
  "key14": "33rhci8LiUj32PnvKuQCZecdCifQ5c1E3bhVntXeG6k2wZCYABqVqoZgfw76ssGyVNxNFWvJ528bjx4Mt2FbLD7Z",
  "key15": "59Mqfkw5RsWq3wwG7TfSs2uMhRcWWhgqE2xH82aZpoAtm3Mi5edGQ7h1y6uY8zDaFmFGLikt4L2SpxBFjV2y2PBh",
  "key16": "5KteaFAQH51Fj6QUC3ELV2vxhVPyUShxt73dn6pv8AtpxJzmktGAT1rTkFs2xMW4uGpkocRjRQ9HCwapgoNbMuTa",
  "key17": "3RVaDm6FQ9osaFY643JkMmmmxPrBPW9WDST6tFXqfv3oGtFWJx82ftFVUg4zweVdaHiPRpoF23MS88cabaG3rorQ",
  "key18": "3UUScncFeYutsNYFc295k2CivSBVgfoN7bHEmoS8qxnGULRzRd3DJuUB7qYfdgeCkirHC9vsPZi5M2BJqcax8bJf",
  "key19": "nFfZBiug6VUZtxUn7HaMjeE47g5nx2mkmVx74LjAbJ36w61ouocDY11xK5ndsufvoN6MDN4wqnkfPT38MFWBQ7r",
  "key20": "4N1PSCtc7f66H2HrWPB8gwwmhQAsUXnqTxf9o6K8FkZ3Qdtp3U8XeukhxeRYMkdkmpaSYjvWz2LxoKgbTRK4UgSD",
  "key21": "QYaj5nBG1eUj4wen5HNgDYz2tWge7qj3CFrMbG4DkJrVXGnDUSaYwtFzzNXcwRuLTwMtSZG5geXAjw5df6iFnz8",
  "key22": "2SEMrikgkBo7zP7mRzRDWDcyZ2xBkmvVnoUnUJZ9VW7RWMint6LpcTginDN66DXiz84r2wN9foJp7n9ib8bZCxas",
  "key23": "5voV3dYBZqWEjGqg8y8HhWP9kVirCsU4kZiMnT5XQitLcgbiqvUnkzc1fKR3TozpE58Xz6Nrbgu4n8jdeJBRJqG",
  "key24": "2QiN1rABDVGE6TzAdmibVtZPidNuxykK4kGSv6MBxqV36nNWMgXHUZs8EW56Z8L3VL7DreEaiJhmYZrL9p41i9AP",
  "key25": "sTJo5LVq4tAmsSvU9peQmA9D1H6mTwsvpvRqGRQgLXqdAQ2eEW9rGFwREg6Uwg9hADx6sTvwF2ewipZEhKE6646",
  "key26": "anXDxkry2bmVmk5eMrjQqf9jhfq7VjoqDj8D57bHUAwpAquAHbekWZr7GTAkVgqADZMDeV51W7jpD4YDipjz85N",
  "key27": "vXikYw6CjAoVj2is5oMFHFroJwUHi8MM2snaSLxRjQVW2D6kwQYk7BKAS6Mf5N1EDJuScWsbkeSixf4oJAo3SVY",
  "key28": "5QjRRaenYVsEAmxhgicYETRWsGfbSvyd561FtJY8xezDCn16cq7yyHS8WABCo2pvXDhdKjCKJtMidykCFMjpt8wB",
  "key29": "5kusKHc2m4waVvnvKRJ2bBpy1p6w3tbRKoSHY7sGgWZsB1TPJzRz2kP7LuN5VNAGPaNwYWeFqrpAdUhf72najxAE",
  "key30": "2qvpbUD6zuJGLGfo5uRqECMNedWhUHn7sJixDun15QiAvJfdjd9z8XnKGReMrgpiwuWt13jcQ8LDCTa9uY9Q8ZEi",
  "key31": "mFLezojBGzyE28YxrNBrE9Js64vreTHNeVDgYwHFtDW42AKd5Evp6YBYZwge9y43fqsET3YQaWAzFoFkcqWwkyz",
  "key32": "QD5YaALrC7Vt2mY9WP55k4Vzu9Qokr9sfswfwukxuRaS1DLm9gbC9wMf3FdSAQGeGiATo4chCu8aURVYQmCUnNG",
  "key33": "pJk75f27GpYRt4C5WxkkcL3qaspcfsPZg5TzMKh1k4zX9xjeHVzsVRHFh33Jd2y1LY5TkJjDFsADAr6paKZCqHg",
  "key34": "mStVPvqVFd5wwTNm7zLSr8KoTW8jR4wheyQU6AQMKyPNYVFrEPEnBBErfKQUdVXYVjdB8e17paqJDXg6QXRrXo5",
  "key35": "5NtCVVgxVmB9srNDDZzDx4hrxT2fuxCsefmmdk1VQH2ufHFEi2CF7Ku3B25NcsJ5evqNThKSXbxvSurqXbVfnAiw",
  "key36": "5FerPG2wM2DS62TdBoZ1pxhqQDvvZMjN11ZdBAuK9z8Th1N6sXJKe5KRbiSHw2R8hxK1ZitrX5K1d6ViAMWQ1Cgt",
  "key37": "5VzoGgk3tTrL5enEmEFor3i5Poub9Lzbn6jLzwfEqVfybfVwwGFzBq5qZxAWutT7Uzbzokhwv5iCs8Y6NhyBXihb",
  "key38": "5WRQKnNgCB7UkPz5mPAfH7sLpj92tgVxuUced5MEicR3UF2f4etKd2QTXrcVbzPca7wfPMne9GFBtn8Q3ujD7ZX1",
  "key39": "485sz71d94f12cVK3AgUZPnVSemF9MAfjNq6QccxVM2zCZ8fj9dvZmaXhuGihS15Nh1d2MQD2qYxVuZeWpegRYAy",
  "key40": "4fmV6DAYfRjUp3yEPJ3bxUc4cL6hR46TMSyCDG4uXtCm1mzHoc2626n8KzmjDy2DEYmQPrupw9A4p383DqzmR2eB",
  "key41": "55ALAYWj7juuGcGbPJdyy6FVwCoc3hAiXVzkYgZt6fU4cCYY2yYzzkazTy99R9tk9CBUKqrfA7e8co49vJeNjfNg",
  "key42": "2weYWnvbvn893hzZ9NdQN95icneP44Tke4GgGG3xEtohJ6txqPLewzrfF2Cscav7q7YmQzaorY4Y2oVnDKR28y1P"
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
