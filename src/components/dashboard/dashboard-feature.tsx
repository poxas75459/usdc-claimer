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
    "5qc65nBi9wJMUCqRqJSz6d5gM6zrqAW9dyxTBtk9QCAyLcaHtdt9rKKgaznz7wWYnaQ4PdCCm5xWtDpxVKpTBYYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XW4qYkde4Mha77wokCG7itN3c7LoXUGPFhs8PMSjTdu2nY9VHmXGgzEt1i5FeWrtteiEs4vFkLpPhjpt9Fceu5q",
  "key1": "ihK7SiitDjNR4aD5PbXPFWXkNvoNmAxdU1UL3RDkqgbbu6NyfLd15e5mU6AbPjYE1ahL6uRyptcoHz4i3VQpDyB",
  "key2": "d1LJjMsZX1exXvZs7Bnpi8UwowQZhFvrihGYACpe2HJRNX16H2YcAk2d2gTDzR5KKhB8TMwQ9G8qsiHfWSBdxCM",
  "key3": "3n2yfoc1kamqR4KPDXvKmDxTW51Erzx1NDb2wXvMg5SLFTRgLkJWmwxK46GjkqwbJuUGH5z1n3sVo28GEKJKq2Cf",
  "key4": "2vkyQWVtMtDWEr84ETvxDKBG64PRD5RN2vJPa6R9r4vjf57UnPhZwzreTEZLV3twRgcgpoopmoHnEqM75HUHRay2",
  "key5": "451HDr3TUooKPFi7L3SwDGTGgrA9XJm58KG6rdZ4rBD5UY1Mw8UgzKten2PNE77nFZ2SYseajn9VcFQMy6oxMiK3",
  "key6": "3UdKsKsupVqAMUewQYguDeJKgK1R3VpRoZdzeruADWUDhqsuqkqDjtk2SgA5KFowM8SAwwenHyTuMKi54xGJGD6o",
  "key7": "4TmSifHzVaN5cHwjZqWvfyp3AWnxkuiNz1rG5P7x9e4SSJnHHMTydTvjsd2rkw6J2k8ZUiRqrNLtjfK884Mrm4f2",
  "key8": "2oy53D7XtT6JkzPZL5QL4QvkSSUCqUanUJW1JUGRYkyR46i483NVBsoTtHfuDFj1aqA2YJdddX19wPpiPrLkKKPV",
  "key9": "2n8LetC4zzW5JKL7GA4Bh8qjwjMWpVNCDQxF9K65rpegxqbENqZvn5rkXkgi36VYtwFETHwtrSmpFFWAKSBsXjfm",
  "key10": "2xEFMPLqgbLMQFhW3j8oHvSKr95E8wyc4qRdRYwVgz1L9urygjvvz98CuRn9o5RQvauaQLSYcH9izZK9YryZ2txv",
  "key11": "32ViKDG4prr54Jdcnd42fM5CgsuyvHEn72QFhJZu6hPVy7M2TvxrpLbyVCm2ScFprwRVZRHmUpAqdMGm27HaBWsc",
  "key12": "2zEbWcV2ESt6yb5PjUtLHcXg5S355XM6CAD6JaAmJ6eMsQ4hhbgYhpboqKwWKaCz1fJW2PuGhA8VfTaEhD5iy7Qa",
  "key13": "3Vs6cCJQzAzN81oSc62hm4yDSZyLd3ro4MhbWhdKj6Q4JRFe7kQn8SaZhJxFvqT6sLWCtedhvotv8ughVB7DpEYN",
  "key14": "ggnHwu1bgrceWsxT5zkqCWHPooa7gXxF7jNB64WxxcsJCxQ1KwMz1XPfhjj3VFiJthxTrL8ZhCeJqqxNuaXVTE7",
  "key15": "4zechYMUcyNmSjfvE5xRb9nZse8qJ1idmhQpU1o6nj1ESBdmXNL7EmaDFdSbnehJ3PFYFtAt4G7eU6yrDkWtt8G2",
  "key16": "qYVQejrnthYXkefiykSwn4D1gzkYpsf95Hu12dMgAYF5nvDCGhy4jBRcs77JB9CaBwbqpQtU8vNwwATTWgY8cpA",
  "key17": "PoYVWHcizYiHBdMvpiUf3z2wKa97tLMXSdQzPoJEXq6ppUszYQs6pNW5sMj85yRpo9A3ftFFpci1oSNHAtoTGJF",
  "key18": "5MqgHEQ4QCktJsx1dA6Uftm5896oNryYVwEudqaNrXwRHbgUDkZyBVVKwKoCja5DFeDdNGyHPnAGbGq5FQEV1HVX",
  "key19": "5QrgQNpRAT1ucgKAMSt78aBhEeAxZrmmbP6j5whKxbuABxxZdnSBNVv5onjTrt8pXWkzPSVEXmWjYxtgSXpv8c45",
  "key20": "WGtd8DASBdzxTASvcLEWviBLUGfsroi119RXBRWWyftoAMr5X6AmX4LJeaE4LAFzhYVEpJipup7xMLKchwCiLDK",
  "key21": "37whSrb3Tz2rMjQdT5fqBLB5S8MQZYdXq9FaYGietXG2yHomvFRQuDaDbJaJh7cnkD9EPygEvEDk9vKUt92vYsUv",
  "key22": "2taqZp7anBuPQP1kxSAuSZ2KarRARUjXiTo33KMoULxMZRWFcziVtyVXNqu3okLpWXmfXzUiJPFRkSTkkh1cVkmr",
  "key23": "MkrTg8yybJeT8tR9hfnsJr1qy9yKK2iL6VF4LVkqgNdGvvjanpCYydA5Wa4L9Gf1tuca4peUEDVXhUVsgABXgBU",
  "key24": "5xQ8pXMQw1DwAzh5jYA27AYyStySQMBsRpeHZyJWLRtmu7onvGgVdMGFssKnf9ErEeGfhsipY9ExyPDVBBSWSgXK",
  "key25": "3BCS8DH2un95QtGLejBkCTLRuq7dduseZSxojU1sXGvNRSb5AgGdtbpgGovQj1xFQibGMDGoBmvR6CcGMaiSfYjx",
  "key26": "2BFBxmPaGyxzmriw6xpPwrBp9uY6z6PSmrFEdm3huKMXHZqJvkje9qwfhaALZDv2W2j5rQ99EymPyoGg9H1w9BU9",
  "key27": "3zhPABSH4LtHENXUE8aVYHWMpeKJBf4KWWdQizx29L7nPcHdsU7doZbJn9EsXkSCKaX22fiKTkNFqjGNxzWjQrd9",
  "key28": "3oHpKsUQQYjmJfS1i6Y5Y8xDHka4hu7hf13P8q7nLWbygT4HDVE2H7SSg4UVnSJrUYgfxowjyt1qbkEorW37K5oe",
  "key29": "SNeNRzC7kegRibAH5MrE9ZResdj65if6nvNwirMVV3me2ScmKhdZd2R46vMVi8mfBuFaRpmS9WwsPrKdYyQhxZj",
  "key30": "hVmPfFjX5Hu4abGoMWCVhhQU1XVa48AXNk1PwfiEikxXKTcdH8zJ2QA4x3pJDiQiG4rzndnETQ75LMtrMgyTQHe",
  "key31": "4xtUgJ9pDXvbAot7Fk1aZB191fLDmwmJSpCQL5xe5cu6sFDEwtF577LBykiHXjSQNYuyTPWdPmvLJWZgxZMJ49QN",
  "key32": "3LCSNKfQjKQAcn8tcXATvz5pxp6QNLLWQexUTseq69pBZyYZ9cgWVX93uTShX74ztP7Mo9GXQSCLhab2xiuQLriw",
  "key33": "2p72L98i6PHJjDpH1JVBRWmat9UXfDnkWUqFu1CfMxz7W5WkDC7x2TLnD5KLydQWXGvNshkKFjPbz8uJYNpcdYKV",
  "key34": "PWbAK8aHsGZFquhBdGsW6nq5EyQYbD1USNq5BfVvsCq11d8vpPsmQnJguqiCU5NjHeSkp4dfB3jpoV5gNFjtomK",
  "key35": "5Lbpu3pvJgB2yZxJLdYu5sgkGqymjdkMg4uNNAFQh5bKGMGFC9WucF1E5zgy7LHbxxSBkmsCC1EknB7kXkASaf6j",
  "key36": "QkAXsESjeCGFKd9897C4dPBqWm6RF68dajibqUeyNkkwGrvYWS3Ky99sFqSxFhtdzj1nNaXKe5V4jSVcnPFud2M",
  "key37": "5rKrFh1V7A7wCW78NRYvU7PokwuxH56q3eWdzjz6X4d4P2wLoA5M5ZKfyQ31KxWk2kXxkVbFoDC4yfyeXTKv9tUW",
  "key38": "54oZ3uVQJsnHH4MBAmaH9nwdWCGUw8ZQGkegkxSYtpgiCguRDNiTp2N6kWhzSiZtRiBd3sjFWAJwrT5Xvcxv6iFM",
  "key39": "62k1Hewr24zdQsLrcteaMvGhahCF8og8oJBtNPrfU3rFipR7e4Sp8o6fLomYN9HGBu4tXJi48KNyxUF1MYt1VedZ"
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
