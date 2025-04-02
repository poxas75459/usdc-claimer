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
    "55xcpFhvqvrzsjSewfemYpxWNGKjeKn8s2SD719JMsTWyiqVurDNs6jPjkKVNKJwTnkgT97ZVNcL3yp8z6HTMdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PxFor84CuSDDNu9NCkBFrBtmWPegr64x1uev36Qct5ebsm9gChBhptoFHQPD7QbDHb82wr7f3EPPXSyTEEFsHBJ",
  "key1": "4Nh8Uo7a7UPUbQ79p8xX4nBAHDwCuPN8KbAwPiRt5cZPXK7uha3yCd8VcDFWYZpF1n1ozwtBuNXz4HSa8GKkjagH",
  "key2": "4LNhmE3ftDwQTF4AfJVGNqHHy1TgtJUgZdKimshwKiY9DQjM7FYz6PsHLjzX5VXpHkAAhEWTS4A8SBhnV7e3CsmD",
  "key3": "26GhjtGR8WcajwVAvTaAWNxSJJ8dL87xD96WNEb5cnWExtH9ZaGEAdrFddmRAuuT3QHa6KGmHCfoPWoasMpxzusi",
  "key4": "5KXcCP1jgxXvcHpUAcwHKhva6CA1QGW7KSNzFJjKJ28ZDVmNc2v1CtRbVew6EhWDoajXV8QgR9r3RJhnJjXW3t4D",
  "key5": "5xW57QzzwqaF8NTK75y6Q2Qgvhf4o7UpkmRTc3VXM5hi78BQkvzyWaqxDiE4dQr64KGVHPDJ4W97M35zNvGfC14r",
  "key6": "4pRTZPNZD4Uu5oaQtu83TJNhb98AzqZjuxxR1KDzQ6Mp3MU3VVNCoMRhkQKwq5MJpnUyA4yzrEtsyKYWpWsL6JVM",
  "key7": "4WSaJPwyUL7gpUpRiz5SvkHXSYwk6ERMoy6DCrXqNnySQph5nsKr8WcySJQjBqpvgurGGUJ92ME5zgDQTE4cnWz3",
  "key8": "2ryxpLX9qtYBdQJ6xtXP9ckUa23q3aEjcs2YPcR7GdUMAGbu8zADGsZobovUbMVLaE8YSr4JpMFTQfBeU5Qnp3vk",
  "key9": "4f1WBExE73dc2zXbzbXb96Lb3W6GotntvUKdTXkprxycikJ1836qpJuLy6xCkjDd1zxrgtKW4EsWxitrqoLbMRGD",
  "key10": "2Kk9KCLb7d1qqLeQRpLqi1zRHjdTDkaFWTd31yuxbkwX7HdqhE56bB2h1WqkLMCAsGvfiSfuG5fHUjuc3apYP1Lx",
  "key11": "5ASCQ3RCJAAFCnSp1PptFAcxKDzY1W6r3kv8sDcMdJezWWiq9Rk2455qwqbBjGPtKqP3DTutiVSZ4x5Ag7y37UV3",
  "key12": "5WbjAZ9MxY9xSmSvztm2hrtaXeQA7JDeyxM5Ytqu4ntZncGStzKJD5eVUZk7KCF8z6mYktZuNJuiopw5jwUmRne4",
  "key13": "673WKUoZL8QZT6y5NT5NjRcAg95UsrSNzxP761CLuETecx7DZzXWAoa85K9Hcn743pQ7mw3ji8VJrQpeEH29g9QW",
  "key14": "2MyHJpC3T4DvZozEnb5idoNaFidaiiQtYkpFFzkvnAka137bTXGaRMb4bU9GAJnaVBZif4ZeLCmreHW13tTspKp9",
  "key15": "4wSirFZgDtZwf2rFFriaZVwQTojG8X6sZyy5w3LaqGABd9JC7DH3qMycd2DGqM9LJ5ehqMdK6XYAdpfcF2XYfz3K",
  "key16": "2yKTTzjMuv1ZgcLeSrCiMmCsZYFvPX49uFf7JNKBnP1jdoLUwESgzKfU3qf9CozxQtbSMhDqMhaVop828ebzRpSK",
  "key17": "7WzYg31WTpSSf8o3WweJLaPkkQXTcsbzUf4SZAtMRfe4Qkdkpzvj1b9TiGEfyhncwkmpeqFwiB5vygKhD84TbAi",
  "key18": "2SiTnTZKnxP73SEf9VTV2UGNh7KMLUha3YYxrzt1TzMspa372MypqgqPw6YoYp1mabHK1TKBPGEYMCZftSJgWh5G",
  "key19": "26DbFywTkuBKvP8kQYBzY6NJzDVDKHhrXiTbjvJdVEAaoUVFP5dXDH5cs32dFNFDoAnnMcdhg7ANaFzZ6xvkDzW1",
  "key20": "zRxkk9dcBtCNmdtEeExzrNdH3AMHi8rMUzXsfakpPAoELmp3HAsci471xGQ2iUucCwxvr9TzwjBTLYpRtpepqbT",
  "key21": "4wJZgzsqSBGGiuUmJvGLjBUg9Bu7Q73KXr3agc4GbAsQjTeH2Zzdws8MVRCHRUAepwyQ2D5dFrgXAk5AqpRAEXwG",
  "key22": "y2LL8X5YdH7C4Vu9fvH6jJEiG2utyJMLjCKAhAdLrQbZAaWpEVvivWntojy88CNyArQZGHykUuc72v3beTmrxMJ",
  "key23": "2gxcKLw7Qh8fb4fTE1coFuf7Ti2zDeQ73KLkXyx4JHkPhbjCt3w7ykcsfVsmW171ALd18uB3yuqjtE1jAegfycap",
  "key24": "2kvk6CxWr61YFbebqBRXLdnvWawkqJttXYUwHLbZmAbbpuhDKkpAswwyhcJjvFEwMB47BJXU9qCxMyrQv49TrZCd",
  "key25": "5K41a3Q7KnztyxDVkFjMqyFHmu6aUfiWjxsyVw5n8jKDGaZDUHTfFbj9eyYDXDf3jWwVbBzjU8dRvckBGprsURcc",
  "key26": "4hYUUkT26ZGVM55K65GS4GEtmwEwch8WTCdUafk4BEcry17gExeCq1qbpDnHPfwjTajJjwGY5eqT7rmyvQw1mQPC",
  "key27": "4KsPW4ML2FGQ4C1SHCvn78Dekx6xHRq8zLMeY56u2CuqRWAb7a7o8jXQ3WGSERqFC3mGZ6nBVAwnpFxtAvYHd8py"
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
