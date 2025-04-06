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
    "tX7HJ9o1JtyJ3Q9PUgVsfyWcnqFFECj61yUgobWHy4tWDdXFC7yPiAn5QcvL6QzwK1P4s3wSuzGuhTafhJMfdyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31pJdquR9sKgqMqyzAQws2epS8fgx8Pg2B85NsLHbmADAq91BN76MpPf4v5jHnvwbxY9pHVUUYgRrRFEJ2ecvVKV",
  "key1": "4RtLLCxDhTB1ZQdEHCiLvKpdjoBfmKVKi2F4mYhtMuWTBYnQCiAVnDTws3LshR9y4zcBTJuhGUvTDyiAyJA5pMwh",
  "key2": "3rTTfASTQWWkfNcT8h6HViV9iUaEH61ESetqiGyPJAFTmMcwbgUs5dNxm7BwKyAxYsxVE9ErLy4rURH8FBe7bFc3",
  "key3": "3RzqREbLcZL2CFALJnCpePVwv1qCThxN2eiThWyvLRxvSNsUwxccmKQHZL9RbRMpx2JHU7CsYSUcnwn2oXb8pkmK",
  "key4": "2fuJ5fwvFJyhvEKvRdVXNZXQnok8dgS1o3y3mu34UTxCW4x2kzzN9Mfp2NRTWFsLiGNxVdRxQpvgyMGyuGxDouWS",
  "key5": "2Hkipx1H6F7DFfWwiTw6a8RGck5mmMS8hsvem5wDwgSmuzHcy5VC2LGZxdbkmTzCza2PYvhrw9kyzm6cwpiASyAN",
  "key6": "3ox951frKmNNzc9AFENReuF3tAUVUS8BbD8dLNUL1DhAB2FMGSDyBfceg4SZABpMWbsupg5ZxDXE3XSeD5YTqsBw",
  "key7": "4FwVyp2L5tR3iuA9Uwfn5EAaWDMrQovsFzNoMJRecZpU5es1CozyoQSHf9neWnWgUehx6tPXiJC39p7DktTEuBkJ",
  "key8": "5vRRGhM5dhWF4bDjQec2NXvHpsUEqyVt8M4Jf3CLNHFFTf16SMwLuUYU1xikNcA1UHEUtyfz8vEUnLq2yvH4zyMz",
  "key9": "2Y7BwHxZ8ka5rvv9h51PkBXgQHSwHiEH2s747Na5b5dByFPh71NFpomQrkBQ7usnhRCKeqRTWuRf4HxZL9WoNf3s",
  "key10": "4k3jDPRMvbt98Dsv4f7Gzjoa7hpbvPvMgpmJ54dRE4jpRDfSTVmc5MkwYXw9CcCmMfXRr8AtaV5yeVg3L7gXYAGj",
  "key11": "3xa3KdRRam3pTm1Yaus7pTCHUyg8KpUjcivD4uNfSGKqdGBANDuwXWVzPULi6bSnyGknsTh8e254vxT13Z1d1JQy",
  "key12": "5MHdmhxZD6e45zAiMQ9BpfgynWgAfSVbnDnndzf3gcGwDMUVQLAn7wpqmSoYBxiPsrq5wJMmwjrADEu8KBGq42xA",
  "key13": "4dLe4gqPHnpKETNq1kwkg5Cvbn85s3e2JS1bHPEXAHS9AYRgSPaZGUC6otpXjDya1YvB9YT6M16DYxE2uYp74Uoj",
  "key14": "3EkpUsLUeFh19fWhMYm3vEDJDoWLLLCCKLufSFDhzxZe5c92ykp6MjLEj9TanN2EyGJ56JNpx8BYzmhbQdYKWfv1",
  "key15": "4X4SkJdDheJTj3hZv5oeKpRK4jvCn7wErbfK5LKLmoMQUZqwR8CmZSvJeU7ZNdX97nMgrxetW6j9sfa3d7DhCgvW",
  "key16": "5Uk2AcY4W7uEL42GRVtLVRHrnS17PDacvWvhDGnqr8tzca2MuCnkSz1ywuB6dyXhxs7KfMGe4aJ85syNij1rRCbA",
  "key17": "4hRXyx4UJZXV9GUW5EvbDUEWa4tJvADkFQNAa4yx94YykL8NyaMDV5Nn3p9JJE21kQiy57fnhkgiJWiixz8Tr2gE",
  "key18": "3b4z3DTgkDoJATvYHVSyXQfzcQJYygGd4TZr1oTV3EnY4rN7a6p4E9mPyWVLEcq8Fhr2yMacfQTiYd1C9BuPLTH7",
  "key19": "AcjsiCu5b634v7yNJwQSPhpKi4SbbdUsJsMBEEVmsBZAv5y5Fq6hFV4eC1YVdPkbSy6sHMEaKavnQC7nirGhANA",
  "key20": "3iVASrhdxDEok4DKPgTppugz2XcoWsHBV3ydGrWvtARPFxZQfLe7NJeQ2DTh4PraAqyiGpAqw6R3DgHn59knLMXw",
  "key21": "55HW2yJ3pj3P1Dm4AC1MnyrMbnYsyTfR7gLhZuo3yCvN1GeoPBKhyHu8QWTEhrsNz3qPWstzDvdTP5wePw5Vi6h6",
  "key22": "23PX6aHRXqjbYnEgP1q8TLqbAa4ZfgxvDWm2484YKJ7VwABwXeneBbznFGppPYmU923yhzq48EJFWYKY3DJYa7ex",
  "key23": "2TuhsMemt7XaMMZb2ZwNSKNJ8A7YqnvZL5rjDqgvcc2Vf7wQafdMM7wzWyQj8ftNknRafQ69Dbowx4sTq4ZANk1d",
  "key24": "rshkeMJngSc73mv4Mgf5pPHtyoco6gfCqZknbzjHHG6tK2DCQDdytjsZQXHziBSJ9cMJmrmuW6iGiRKzPiWxb8B",
  "key25": "5ZyG51ZMguXibSbuaDdr7HpjdBBTjj7J9Yf2zSdFE4AYtVhndnoGCLy5JfY8mjv4SsrrAshLrNABGeSq5FfKNDZi",
  "key26": "4r89EDBykKkrwt45c1drKbdqrbeDH8aCcUJnY2ocNBvWDqZH1GvrdFQaqu16Pzir9XDijCdxwv4yHRPP9CHZCHvu",
  "key27": "2jQ9fqaqqW3u5HRNcJryPyUM68dbZtEfCThzm6XT99FbhTFbh3L3JeCu7sYSWd3vx8VQPyzAyYZhJonx5mAAWi8M",
  "key28": "27NCVUDRWGRaQ3C2jXQi5TBRFCwQHWXakS91iFEdybjXkNoZnCNsmZDdBBon4ibcdwGM8zHYpfavxkxrDtdCwGQB",
  "key29": "1pPh8hzmiAtpDNnmS9eYGcXfETFNwrNkuh2BbK2rcbvXfxnetJwaSKQKdrYeqi5kQePYpo3oZ6kfgjZDbmEZj8f",
  "key30": "3E9eqsti6weRGWYMjo4GnacKsuM1MHcBuVacwsYeS7hgut9DA5Sm76Ydt9nJwW6Tiaa5NWR1v7k4x3WJjmrEZ1p1",
  "key31": "4VxTnmW9BpB75Lk7W2Ef7rdYqKQYoT2o27menweD4jkZaHmQ4N5qkX7uAuSh8mxadTnK2oT5mN9WrWdFF2AeWAsZ",
  "key32": "3BsN8AbQpubQpjumt7Gkga5z8qZjb5xn7VbnKG8NYGhgYLshr6rAT6gKTCgjoKZKj19exnfdb7o3dK9LucifpzSN",
  "key33": "5912e5ki8tp9KoJZEvefy9rMMYzTX5mTWSRYcywLkva3RaXgksUxq3xzFimQRYkZ1rpn24SA17oZH9mT7XAYzBuY",
  "key34": "3VFkxSFxyKAGH4yYJWGwrLseq4f7w59Y2zQRHFkdouGghEgUwrHmzrS3yrEuMaqGd6kpAuUNCh2Xuvky7xBohtDg",
  "key35": "8eD8XcDVwwYg6ZXAhhFkrn7k28rsTJAQmtURRNG2jVAZi5i1GPK57vwFGtKL3TGJrE1BJFNLjg9aDvh9wreTupk",
  "key36": "2J6ZiExWCbDmAEP2pp4GFLZ4u3M5WxWMgMpfKZs5taxcncjATkECxbN9gQsvR82AWnqM1xWEFmXRFQUXik26Uzaz",
  "key37": "5x1KDvaEWoS31Vinzv8RoPupyw7bjeM4HRaffAtYdRR23uX7fsm4UNptnfkMhYe2CvS688uAFMM4FitGzjF3SHA1",
  "key38": "4z3YFksLNvZdsSCm2XbyJedrodrLtT64WYtFtz49ibiy477ne8bxGGGjjJW6DDxEgNQj8gUMyv9kBj7aqmqXUftP",
  "key39": "3yjeyZar1cs2sqPC3g6pLx1N9ZRNYVgnWWefbmBMjBzGxEsgBET1qRDPtiiQDUs8z5N9wRmKEKDQ2i2MiRuwB28T",
  "key40": "5g5AFtHNLxtSRyRAgNWLbSdCFpugtB7R897LK8Z5wj2RtAyCgDRYShNSPLqytPKNZDmrubQqHoN8gC2ojAZriin3",
  "key41": "qfsxyZ3XhQju32JkTuTgCvFgGVUA51fXHzyAiQiEvfjWVBFSKMx3Z98VbebEpUfUmgAC7F9wZYdTaxn8egm6YLh",
  "key42": "48HS7NLM4shJuJC95H3Yx5koZA26muZ1hLcgk8XBeBqWFr5fscBEDmuKDENNXVmMgnKac3BWz1RVDj49vymTBJXt"
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
