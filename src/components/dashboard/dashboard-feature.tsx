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
    "2JjAgtAsA16PBZtszqguXe23d7TojCa4sXT1cHdFzEL4JgnMfSzuhKiUXEY7CcdLZqwJKbHHyVVXnsVUCCDyoSJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tbzu5TsbbK76CV6r1Le1Q3yN5E7auwB9Mec3pN8BUmxDLACnFD4x5oq4VM5uEGpH8z8VvZ6p6MVNs9DwME2S4B8",
  "key1": "3Rxf2Y5UqPQq6a1MqV2BWeDfSRJfP7eiJTotNBdQQa73UKK4DJXF74FDYr8fxkdffwCBQfnfxe7qATm6AErxiAZ5",
  "key2": "3RNvNHNvannFdraLeN35iCsGWtScaPn7mWeGC2xDfxS6LFnqyiL5Ftm43Yi8Wzs21Ernwy2yQ1JxmVVNz8YmnpDn",
  "key3": "5Yrgo5HDmZ78QwWtXsqAFxu9PDRFXRFUgdN1E4eEx1arhKC6Qwr1BJJCGyoY2PBcdoLBNEq3cHucgVoobAxPWYyK",
  "key4": "aHrvxfp6z8tS1kMq6KrP4eSpzxTDxfVRASC5EKMr8zDcjVXg797sEHdhbcNQ1jmx9Z3WAeYAufoHQxAyqD2ciqA",
  "key5": "3xYPUwMUMtuQXHudwuwwPnjBHVXZqUcj8cMFsdwXKu5WGaiywgCuXZiX5bWPFiB581E5FmHqhj8vvpssasofzSLo",
  "key6": "2njfmHEyNP59omGtZUvBWnxyo1iwjeqWmoDA9X5XYvVRPZvZ9P5rZc2LRxNpruEvTGg9UKsFFnYYqsffCLrBEjJi",
  "key7": "4rMQKG2YQM9y5oRQ1HMtN8yav7v8FSocbncjrJ4XXX3VFrERJSj6fg83AhuscV3UHVasKEgP6LZ1RUrcCutTTYEM",
  "key8": "31f8ZUFGKsFdwBA45dBq4WfGbbgMYd9MnRnUwTpHbgKTZQPAGBrqZTAxCvNsznvTHJEzvJVfSvXhZzcf6mnjRCB",
  "key9": "2185Ck6tmUTLj8uE3Pn9n5fHC9YHcDHcuLLm4iG2su9uewLEYrSZKBqC2wJVizJQY3eF99SepS4VYx9kvQHGvBpk",
  "key10": "3NAG6wKiFCSHmhegKKQNXBNdes1fxQzKtggSjELYmJj4VwbKhRTKgf8U218o8XdqqvDiuvkmtStHTrmZjdfS8Ymt",
  "key11": "4L32qK1B1sPNSEYJNZB7x3PqwsENHG9MV1Tv7RSNMzXyR5XoVsUewufgMqm6nHTQiyGMXtbRGwCna44jjBCRqrgx",
  "key12": "2jG3WBcxSnXMGx8YrbL7W6UL1oqchrWvR4zwD6DEPkWvcqsC6oXBR8RAtT48zqHgnJiNsP1NVgkNEhAZXGT4nska",
  "key13": "3VJ3XmB9QBiefM2RhsBN1TEJ72ZAac51HRTe4VA86wCCmkaUeKCmRVjkPe7Sg5JpkGUSYxkaGHCg326SmFSD6MKc",
  "key14": "2Mozio7xMg28PD94SVMyCP7YozJuXC1DXjagm8tHNpDLrzfuwATqfxhUrY6PU1DeeF13oFksrxCuLB6u4oZqbDHN",
  "key15": "3KveWgiJsor4QhCqHKwZSUNBvZXKru1oSbHoqTXhx7w8ZuuyShBCeEK4wy6p1vNamSutEowAF7vnUn91Q8868hxs",
  "key16": "ymUxcWXz9Wzck1T9K9G8CgQxzaKDyqVKKNY4oqeAybXJM3a7ofzp5yiA9iEis9feskqsZfTHH1YJzBa1VvkK5dz",
  "key17": "5CGFFXA38DmUccurzZPfw5vGjSKkHrJZfKQUX62WEguTGmZGUyz238AXK83s5g37kaSRCv7gPdCNPeFPPSj1Xhbz",
  "key18": "T4Q8bTGPuseUSwBjuMmgynyzikRvst2sW3RUQFR2o6meJX3CDWXrryPorh7qV53pugcXqoB8Rh5zMhtUa363DjX",
  "key19": "33UtyQGTxfZnKWkT5CoyFhJyThCs2tNNP9FfjoBDBeoK96Mh9a1HekD7ykC9EzrPttnEPBk4Vostav43dxTjZDuR",
  "key20": "3pVWU5cbSEdLjfBUfef9DrZEZhnrRHPWq23xbenm395NGTSLCYt3DL5hdgMbxHSVnJRPHLZT7N1Xd4macrxSpCtV",
  "key21": "SSWNeSXqhog7YEi4HeUQfRCcdpnhoXK9toR1dcxQYF6NuMaBHXHE4HmCKVEWQuvHBsyd35rgmPSjtKRe9wDSwV5",
  "key22": "ZvrWBdDeTUFkM1hL6QsmgrRaxKVUsjGLDWGCWqpDpJpBDP92AdGN6txpbYpyVifig8QJNQ9vpNcipmssdUCZLrH",
  "key23": "5qWsLaLx3mdJBe83Sah7cy4Ry1zKiivLYGAH2pUh1KFvzHwRoSgJVPADiE4uogUQyT4MJYUBTyShrYerH46iv8bH",
  "key24": "5N9HKnnaQAmHWqRFi2YYmMX9NAEJRewYMe9vs1QPsCVGNG3eUxm8TUoaKWQuo1nUyubGXHXFmMNAJYdJdEvugowT",
  "key25": "629ZwSmFbTmCwEP6doWbyhmMPbTV46H8XyK52Ep3db8ici2Y8dHd69XzM6bBncN5PTtboTqEWd6RS9q2h8r3t5um",
  "key26": "qaqoCZabeT4FYUe6JmKpJyXbqp1JDKVCseq1426enheYqR5VPSice2Xe9hz9gC3XwGzv6aQPwzAj8dML4eytFKA",
  "key27": "VPYN3yE9rsTm13Tq5jZxSZuvuGfZHgZp9e7zc9rDJCiYADLyG8YUVcAcYPATnoUDaMqFdtyXZKiTDqCjJbyzQoL",
  "key28": "5eq6ewnoDHxR8z3jQ9Cpr1q3swS24HnSasxawcE4jsiWCBvFdFnudhpsktBn1EetXaQPE4erQAReoPBDsreArSRp",
  "key29": "3i6QSRDZc8zJbRZtMjjt6eGyGGxgjMKR58EzxesfkHfKVe32ge6heqCXTJgZTp5ihDyFr6L1g6n8mDhPfaV78Vcx"
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
