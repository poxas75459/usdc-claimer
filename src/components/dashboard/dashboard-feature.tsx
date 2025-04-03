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
    "2Mwihy8t81nnrjbfNSGoa4rEMjuxxbHfHuB2jQsXSeGbjhf5r6bLFVhnsKXh7F5kt8oDF3j4SK2Y9P3xmEaMRwfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aBZ8bwthdrV32zX52xHzW8d3Lw8i2gK8vzXzvJt54U9DkoAHpExiHRn4rYUNEaxU3FhsvaXaKhKuuivWUaVPRnb",
  "key1": "3Bwy7bXc2Vw5cppbDM4kNThJjB9HVZFpvREwXDWH4yXZiqTFof7seP2JvoHUAarL1n1ee1okyBLnxsGfHtRexWyu",
  "key2": "2LpVf7VAReCuxnyB2amJqAqXKL2fa8j92kYLMBtiyGxAyLLjNhdEYNPWej9e4JztU34wHHWCQTD79j2wJBKVj9ZW",
  "key3": "2rmynPM9eg3wBb9E8tFbnBtB2pXnHyx4EG4NxXjsiS5TRX236qD2A7BiPxGedCXY4TtACdVoVNixKv3NtPg6LEHq",
  "key4": "yRBoyrr1xf69WCiW3SBbsHXzDz5m7KhLJXpPadXrQHgZZRndiuCHpfwcwLAPXzM5d2n7ZaAyJqsXGRwCobmxurz",
  "key5": "4YayxVi2t1uuWVDom6A4Fbm4GTVN8ju6FGepa9QiP8HkFnthRGXK1CC2i7ps6myLB4CMtc4TiDuosGDDoNqzi27n",
  "key6": "2WHdAjfpYSmWWzwRTJQsR453hrSQRzzA2sAou2MWT9idXnz77yevq9hbdTcZ3ee15WvEuzBwNUhuWB9FZyCPiMuF",
  "key7": "4TE89gCfSiKhkPD1MuxFHa8gAhWNGKFK8wHHmivDpama5YpMaYi2AR6QGgGWRK8PmpcwpN16PQes473Ro5mZc9TB",
  "key8": "292HRHGPBwcNjpKMjcwsQPASyQgeFJx2HPLFLKuDKfoSPVmbbK85coeKMGKcqDQBYSFbLgkuhGfkyf5hoXyscBTb",
  "key9": "3pPi51x8D2DYPmyyFjeAKF3ayB2kz4G1Udfbqvvsi55FDcms6bjN2yGEr6uKvNtfieXtzbhKFLE9oSwzJKMypoZW",
  "key10": "4jXDEXThDj3aHQJwRLsrFhxwGws2C6ciUKVTAWokSJRewJMTjg8e4aSg9iYmQJRCoGCcRvtXoovAnVK81sLsxAyc",
  "key11": "pZN84LA4WjgNpoEbcQZ3gZNjMd9FAzgXAsYuhV2rTXu3AjhKTk4wanp9xQGB9iW79Hd318cV47zCbb4pLxkFxe3",
  "key12": "D9Xe8SgSiBk4BTBSaGevnZGXhdBHUCyJFvo1cDpmit2kesA5HbPfoFMSVSDjAtvMXcp2weeWSLJNMZAKG2W3Eg3",
  "key13": "4Grxt91jvPMSfjcDhCZvx8mGX7Ss7nizhmNwUNPevHnWSfMqyEa52FYwEukxpCu3izMuxjYQm4D3aq3mGDiKrCsJ",
  "key14": "66kMhZWGF6VfiMYRkW9mqEFt7DjPw9go3LfAAoNrhJJCZS9mnYnF2Uz2LumSHuoh9Hpe9qZwa73rzC4Tc118WzSA",
  "key15": "41dkziU5yVDSavj6bphRHBaCbBvXvBc6uYu8cZ2rpaHsF28nFq5EmhWhz5NSddXx7bXMjHxAwa7wJTRdQKSmsVaL",
  "key16": "3TLSLYnVpANm39jtnxYnT8PCACDSYnP5iPz7NkffmKcox7dy5rDXemSZFJ8JSaZKRZoV3mj5oQFLVAoYWSCeD1kt",
  "key17": "2ibcM5tNKC8y8hZV6F5twYocjdTiLDKBizQSuPEBqXGKGdVKsP7kELxegd28NgMeXhAL3WNAAfP8joRvTjkKraGr",
  "key18": "2KQdjAoeNPnm5Rus3R8hh6YeZCJzzNoT3CJq9mhBfZYXML5uThwbmfgeJa3SHUy6x4qpqhabGHATKMrtejcdHssX",
  "key19": "3vY1ipF36macG9XSLQucLrpord9ndT99wPyzLadzchw9j3vVouij3jNmTWR84TeFdMhYbBWFDNxW5tnnbWHcW6wo",
  "key20": "24YR7FABdikL8mX55UR926LgBDcJVkxKG4gBwvCAs4T92Ppy9oBha14LJgsL5uxWNNd7JeSDL84DXbwR9BEibXUx",
  "key21": "3hQQFLKVoB8TQLfxGLuQvDqE5keRt5ubfRhVC9dYLYa5ADHdZfE9NUgpFrmqB1eZQvn9JXS7kizZU1HScex1oBKE",
  "key22": "LQ9oXxr67spkQgDgH1EvMXwXxji5hLPXmsThpoqFSgKRZ9WyzkD3wdxuR6hBJRqjxeKcvqTQ3vBX7CAqr9LTaDs",
  "key23": "3EE7RVho7LLUX8Ka1yVEwMnsXrQMgpFJNnybFbVL2WAG3cKx5LMsyr2E5Azwq4GC5dM7i1gfccSk6K6WnAQhVGK9",
  "key24": "4nuWTmGLgPidmKTq4h8H6R8mufxCgwynsF73u881ngJuNp7cS1dBDKowjrMKoa9Jqt6bguNZqMRe1haVcpuREACt",
  "key25": "56k1aQagULKXDiqCw8hVr1FQBjEVTdZq79XYA1jTKDiercs6oKN3wLuLQzPTEMWBZhwphG1DepBRDVwtyU9CAsPK",
  "key26": "a4apeCkoJZz6rK85Jf2TqoL2LHXFXnBVeLBJ2R2j1NvkEn1hQv9T9W4NNgydj2wHAwed3gY8ybg6Lc1RZnhJBRo",
  "key27": "45AcZcSDRGvkwFFvrHTms4gMeY219wnWHYxJ1bwsH9VzTKa7rGzkKkqb8qHC9U6akWVUoakG4egEy5ojkYPvrNj",
  "key28": "3eoaJL9TGb6jVpJzQJsBsab793uingyeuEpgwPwDHNEyDo5uiVsaszjQYGQPdvHvc9N31NU3WrDkoM3eCJXvdWA",
  "key29": "528wCXVAT1cwkvkAAix16XQMfHv27AKqMTzKUUTiYLkwsL3LsZ5W7vqKsWBFKCppCntsafFUstDMNAvX8f6h3TiA",
  "key30": "2enhRG6BDFWr9mLT6yKgTEW3nmXgSBg9BWTMqj93aBPnTWsMzErxyeZfrbG2EfgEoLVTDAFEfzemhpVi7R3Sx493",
  "key31": "2SoR15oarzyHDvorqCFsaC7NTUTJrxVgV1wpa2YdcNPhaHxFVdCDFKEKhTxM2UzL7D6hyrSzksvEVrEbEggkhtm8",
  "key32": "5s9TvYnnzX1NfLJ9Y1kgAHMGEyiLKTJPfGCtsZLwwJq81b9YNNGNohtCQdJ2GW66zjYLVQnZv6zwVWHdD1bP4Dau",
  "key33": "mifohmKJAvfGsEYyzbWYvsU66ijokcgXad778zThgyr9wBRtyXZLqJWiLMz8NWVKUnnhgkjCrSTScgMgyPBHG8B",
  "key34": "3KFbvcq4tjGNKogKnfQeY21ipYFiibHjub6Yj5LSkHsqXkbPfUBFBJMy36Ax77ZY4wo7S3gcDE8msfb47hz2om4x",
  "key35": "4WNG5Y8Vqbv8Ff8Qyvbndcz6BRC7a7vpUov12MdWT8o3uhfkLmrB13KMaNMKZLXtWXm2Qqueh6zU72QDz66RPRDc",
  "key36": "3FMZXKVeVnh8NHxSsk2DY2AKN4sv6CYzJATz4miThh121RgBiKM6hAjaAxXyFysVBw4iDffugk1awWFm2qDDQVAt",
  "key37": "4KT23uNcfco4qEAFDNfwCk47ntMTDGBfUCqsZ7WdbDPiGBrFCFtP6gqzTmgtM5PugxwRsk7k9yjWs1uQ6ZUemKsJ",
  "key38": "3VLcny9h1HGkE7Mv4PAh2yDh1T4UAs1zoSK4Aac1v5hi9AyxPXiGVJ7oZs4bHujr8gRMhjsNa8x8hhVVyFJtVfZp",
  "key39": "4P7b34Zvzpc2sgKrNPRfdmQi737PZ8AumKVqh89uGYLPDVZEgGisQKQAqCGu6xstD6QTTX3AZC1szLf4J4Rk1ZuV",
  "key40": "288R5hzKgZm9nFyuqDSFEMPDAypx6gqsS5TKmf6syL11b9cK63294nV1vd8hyAY2NaqNwL7g8ZEbYrpXsmzujeKd",
  "key41": "5yRwyFtWQbJaMhqYMwV4iCVp48PzDrv9jYCMQ2WqJJdduob4rwnEWDaKkustTmLi2De7hWyhLYedWcJkCKu1qaLM",
  "key42": "2cNgtg3wNi8KtTDxfzV567ZMYYwMmpZp6tpNNsAbCq3qo3hRZVqunhuaD5E4uDvqGNkoNZMnqZvEYg9d2zQyiy32",
  "key43": "2tPrM4Du2nAE8PpjVoHCzJXYZJtyiUo7p2cKiWP4qrtwEkb6Y7akkP9yBcKTYcdTGB3cEktq2G43LrQsytPmM9UZ",
  "key44": "4mtbMESEcqA3nkUHPPi9FhC8fs5DGhUndcDHNZnfvc6xcwo3CLwpSri1uizmbHDXrjiGppZn4bD6easFPHU5GkCB",
  "key45": "65wVZuW7f46RMUnpAufovKjoEd9pjhQBtjRS7LdGcskLpXahR2WAdwr3Af8dpK4dj1REKE3D7cRsbzM78gb3vY9K",
  "key46": "AvRxXNPN6euMuxHKQWN3gs2TsfQiht1sqqXbQ5JgUhFLuAcsGq8ry9bEam2p9aSNHt7fyqi5XzUXXcQLZF9W4mp",
  "key47": "5uBSod5J4Hyer3Tb4LQSN4U2ocdQWg1P7URL2WQicGY81ZrCL9psgu9j1SrSxvrUNiaWwZbuA9Z96HYBXL6NN8uR",
  "key48": "3u8PYs67R5M3wGTKUJ4BPYyocF93jBpGrfzpmhR6SVX1J7gyL2SLF4QwNeqSxzHbsqT94MAdpVnmeeLJyNNWTBL3",
  "key49": "j3ExZ4zZPDXWSCaw9mkDR4Ym3nuBLwMgRjk5MiREnGxbp9YSDLSeugVW7nHyh2D9eLwbnX2wwTAsjGtz9RKKPDg"
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
