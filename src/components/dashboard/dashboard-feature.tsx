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
    "4hA9mAFWLk51VyHehVUsevofkgp8qKgcAXpRVPMbe87LgpqjJpJXk4LHangkstJnw52ZBE7HdA5u3tSicNpKg8wg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wXN7bUtRn5MsRPEEdB5mJRrwe7KoyYain8Y9WLJqxQHgDSF3GwKsxmJ8CnqNBHw4Zy47Ughbc6hoQzg5Q3cT1RW",
  "key1": "ToyyRejDZTLBNVBF4Bt9TfxRkbsPaWQKAshaxn5kZWvG7yzriwFBD1cWCL7ZKWno93XpJJXAeU2VN9eH2BdfwqW",
  "key2": "4LB6KWJqgxc6J6aBZJhgT28nasgZePFEQZXokcWo2H1CqxEPa6yGrLyC61zn3njxfyeZ9qES5oeS1fWwjGzwmxHR",
  "key3": "4Ru1eiY2yLxf25WKymrkNkUoySRZJ3boS1iE4HcwT9qvgDrc651v5jf1Cf4ouzkaednD2sHneo6UZ8szHxRkU8ge",
  "key4": "4TENR8P25Ddp6e5YowFxrPE7K6X8ghipA2tALzMdLvkcHsU7buypsFjwyrrqmaGa8kZErkiRTTMhevrDsb2UrEM",
  "key5": "MJwVHutgup8RC6npY661Gr8kDJQXFpc5N47jUeSNuiwNkFUdAmkrtghWVhERXjzaxbSGPmMv3iS1TSPeoEUiNh5",
  "key6": "5TmAQRvADPBht8MYTTRyNnXQM8GCqREto4SbzqTzEWiHGnftompJY2eKuvSAxqrQG3c9mekc25JVyC5qA6UjFhEY",
  "key7": "64KQSPjjDy6dwcFhfZ61PLYYu8mKgVZkLvB5c3FVocDKVveCDoiecizEzgnoDzY8TbXsSCXXwiVdJY3doVkpLFHT",
  "key8": "5ReFGRgBE7W7k8XKhUimUWtZViSGvgwtG77vBwif3Mx5VU1rWMVKbqAgRZB7bg29UaRLbdEjXbQ7GK74FqbEP3Qp",
  "key9": "WebMtpho91HTwgJAPRPzz6JKtdqK8ai9J7gqAAE4YcpnHPVj89xFoH9UAeJ3uFVXJeFp9zmyBg9Dg29cgbHcZNu",
  "key10": "5GMqFnES7FGNa3asKDvzWW1hrqE52sJUCdWT6XXriP9y1Po3VMf1uEHrjshq49p34kHCHbBweEig5izBvURjMSZp",
  "key11": "3tqCe4b7yRnP3YA67taNxwYBHh1Nk7qiGaiSmXUTFsEJjqg23SuJWR8pHW4GvqZMqbtbBNCBMqEjJFkwo9W7tj8h",
  "key12": "4hBG8EsjrzhfXk34aP6dUmkhLqYdBTZjrkNBDok7qa3gyQsrWeEzzqZNxUZU9RvwDpBUYQnuDoRkZwktR1XzSJL",
  "key13": "4nqs5AdwrpjhBGZcwzCzfwmKYAnvqk82ZCQXeo9qHTENWcKGC3sTzTrB47nMVk9CVvdp3ZXe44Xjsah3QqaZ8Yat",
  "key14": "3hbnPJY8szLCdYwUvKFDaKEnbACd769dWsoHjqtP7XFiHUxQj6scDoAtsWfrNa5LBwByY9xvFWyKQV5u1PpeQMzP",
  "key15": "4cxfAERcuFgc8vqhz4xCjKQmJoTFTRngZbNeJQ2odrza1pqgXBD7PMNzWh8krjzn5NMH9EdEntS8h3dVJ5sf18wy",
  "key16": "3m8mkPhsCPFyC878TvWFUjRLSkbLwcbETgeqUHbYRsS61dAti4PdJbfhptWRaBH8c7Hf2S6zuYcjWt6A4msCahiA",
  "key17": "oyayXpDCMpz4KggApTmdQ769eHYzYMwt7DsP5LcYMUDLkadFHuxJtmLxrmY9Xx5Vmk9FPuKy83mBSnSQjm2ZbqN",
  "key18": "2At1ANBNcn1zhYEdUsHuf4bVpRx5ibu8Xeo8sTBh6xEmnJQbk9FukybSEEdNDJj69W3EbnMqQgzRgwGnUiMqLTJH",
  "key19": "3pyS23G3JXpfsRapqosQspFb8Ywcm2u61btf8PWborv83mriwg7WcHeKoEP2mhtU9B8WQwjMP3uE2hXEMSpxcnVg",
  "key20": "5MjmQHaZZpXDm2QRV2nEpqjVNCDXMWaPRocgPsKehSbSnyPinM72jEChVUbta4Z6Fw2FYMYLqm1zjQmJCexWmQad",
  "key21": "2gc4ZfxKjmBaHHzNokYf6y2bpe9LbBGubpJV9jAvjcYXsfKpuBFEniA6YszRQe49HgNZZSgMzgj219gDF4sxQpDP",
  "key22": "3oT1atLZZ6LKVyo3eD1F2qZ8Yx93XyaHdBnL8cFLoLDojgTpPCGarhCWBn1EKh9Vqb129RJSmPvpL6demqeEJMBG",
  "key23": "5svJ2LLnR36SLSxhWrhUDZaHZMjtzVHZn2Ed2a8GVDs2Kz63vLSWTpQtKWTHZrXLs12zkCftdbwJ6xyzKAcrbFp4",
  "key24": "3V1ZX9VRGFJWqr5DejbGTbfZfgCKNX1xCdH3ykVv7B4zhig5FuRm6u7iMuE4pH6HARPH4AHyEHabE6ZUBaWGedDK",
  "key25": "4fuXMk8HjdBsTPjEw6WidXoDfu9AZqz3pB9BMkFK47N9pLiNSMimacgQxRmVLFNCYeju33M4x1dXuurfpqThwb63",
  "key26": "4Artxp5nrBR1h5uY5bcmuqsJfUP7tzZTRc9gHCYj6Xo8NKzEES3ATAWP6eivxakrze6vANje9qAcSCH1RHNmzLP6",
  "key27": "ZHPLosrYYzZ61yo5L535nHVZXA999uSYK7SANLhQ4Ab9vwA4LCDNDoBEjbHDNqrpNzSvjkmXfaznxDZuXb7tLRH"
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
