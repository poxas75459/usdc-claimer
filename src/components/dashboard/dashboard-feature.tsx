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
    "9Lots5HuRFLtpCNBTzgTtZCJ6c1H6v6pmCuSUoKTUfXAdWEze1imLgLdg1hn9URR1gzQVWugeJFuXnWuaBBKDPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34K9xR9YxHAiQsDx4uoN5XREc3L4Xb9Hg5ZjdCPa9N3bDjfuKKsigsWsv9GLtctnrJUh4yQXJfDGU46BxJTV4UEB",
  "key1": "2BLwowJDCbn8ZEH5EW5cyf2mKhfuGToGfdpYuxLsoVv1Es579Dt1oMRFXWpoLr61SnBULXKwFNw7CeKrcqBtmvFN",
  "key2": "38gWhtyjf1NZrndaV8TvhX9oxTdRaAhzdoUW15xUs5GBTbFCv9Eb3WNe4GggQQq9ePcD3QL6TK3eLJBFDah49n5p",
  "key3": "nPVdvTeiDEG3tE7Be9aumLMyJKPUPZGS3zbeGrwBAFbfF1j3yyAqZxz8LvALK5QvmirZha4asRkKr9sKGQhbzNL",
  "key4": "3QotDkpBVoNBEd8rdz4Q2c5XnTcWCEasHav4thyUF7soU11CwibiMDjuJZcdwFR3DPdGVzuKthJwcDuwrmcz8RkP",
  "key5": "2dQsvWUteuUmCBhe8NscSU2SHsRt9iJ5UoSupxup9sRodKXuV6KViHnn88dj1KJnyhVKXwMh3VUHFGHaySGNd37T",
  "key6": "Fz6rFJYGi14zAh4QwWKVSVU8yiLYLaiGA98CPfujWUgB7ikJcBTvXz9oeHpjdTgJtpuK8mkPhaBMoStw1VYAR1N",
  "key7": "3BrdDZ9iy9FSrBeE9aVcKkaEX3dvr4zhThsisBMow898V4fC2aZaxn4BuAdc1oS9durH24cjPCoY6GfquP2tRrj",
  "key8": "4k6iKud1FhWyEpy4Ff9UyrPPEtSuULGdRfnBLTNPDf8umsvoo9JGZd7bjkpFhT8MD3ymynpHLhFtd9Nu6vYuqvh4",
  "key9": "558A1QGhRwPPHFBFGzJYErAEwiTTjVWgdssueiHhDUzVyBuJiAY5SpHLJAjKsksjsLuFbsWKzsV5A979UALMFng1",
  "key10": "3DZD7Tzgf7SVEmpbZAYHywQAByx6jeTz57yUaT4aKLnKntqPCcUuKZnCWuDZmLNoVoWBfuCLQc3NPPBNWhvYzXqb",
  "key11": "4gPTof4H2skow2wazLHyYtjLGKxiTw1L1sw2y6z9VtyXexrtXQyYt8pTg5AW2VdtpMsKYRsEpiZ2B13EWXxhFhdy",
  "key12": "3Bj7mcgA4f2KwqYPXJd3bFZcmHPXzBnUxH1Dipx1WGKs7PMbyiQDTCFH2D7QWiGNL3L53Hu93ijvyWhRefBwRdiV",
  "key13": "4RjwFX2invnZpacJzRHMjJXKVDKJMZKWrcg4eJR9Xva4oNXqurckfnhPQ9o3hKE5ydUQ7smBHjpL23am2jWzc8L",
  "key14": "2PteaZp6PfviZCN79cwGhFwaan918kkGCjBnaaCGorJu6p8A5AkV2iRCcEjhsEsMxkEQXFP2T53jrCxAo8SxxvSB",
  "key15": "5RY6neC1o7nu6wSHdTxp1tWRsGpRjVQgkLYEZ8ibLadxKFStrsErh5d8HZXB3EThmwKEs5Wmg1tV3ne1o6JvbFG6",
  "key16": "JXEXjeL3s8xyfGZfxTxod3xferYi2TeBubAVBt9uAZwpYey7mMj6W4bZ3CdnAKmzT73xuE6JE4fmrkSjbJAPHxj",
  "key17": "4u3M5qnjGxEDdoW8Mg6JpjE6rVanrih4Dku6YAKLSYYAUYPU8qNgXPNDwGm26f6K7wJd6ykt2Uf9B3MEBKmHMKXL",
  "key18": "22sxLgeRLTuRyptVdGAFtPCr8evZTcqQ37H6czConneZsroePgPnrrVR8zCHfAw1jQR75FMj16vQ7naaUK31BghT",
  "key19": "31qsBeBxcw132gM5wbM1Ay8hmwq65EojyUWrUPPBwWfvyAvB3Q2LKSAQXs67v6eZVmFeo83Yn165ZzZo3FRGNriz",
  "key20": "534q1uJGnPLfVqn6HzHzC1qJZikBjPQqLpMW5THZ7tQZA4XCzAapp9URH2xpk2Vesw13zEsuakm2aa7MCLkmqnRM",
  "key21": "5C53fxDV6kG4fgPh1Gg4yyCD4ywc9SW4kVmfiZwreqasvwTiy1WY3jgV6Ny7gVWEtSnqHcffA3nKP8iyJL3ct8qh",
  "key22": "3SazE57nTjWQ24s4oNsTRis7oPMBAEAJHhqbagY7PnNetzdZJWU5XzGnGxrEtuQZuvY86tGGabUAgfnomg7fqff",
  "key23": "2cQNkBTNUKbrEGvwHX88rxwjHh1pbarCK1MkSi2RuGZbKAvfoCF8C3UA1ZHNs3pCWLCEiqHxa6R8Bb8dwYibghkM",
  "key24": "vy9eiMLhJ2ubtNr1nbFj9UCha4fT3owBFKn3VzyJ3U8Jxfsh1JUNpkSehVMxbp5TKoPCrn4SWcdfUw7gbs3zFxW",
  "key25": "As4MzyyMc8Y8YEHzY77Zz11GLids52eeeWr14mjFm4HfyBJ5mNMLbReGXSpv9ZZ8bdH7Vcdh6wN4Vr4JkmVtycB",
  "key26": "2PGfNHYMn9KgrRoUgd1Z1vp3wXkhkJefreZSSVvhPvjGfDTNpd5DCYenZ9nathwoeTPxDvhnChNiqpgXZcq9jtVf",
  "key27": "2N5H5WswNFQyvxChiXz59AmoHmXnEv9KGf32QwChSAtJZXYWLQSA91ANfv76J1fQBUjZw3HBvrCnTxGt2w9o24SN",
  "key28": "ginGjAu7MnNBkUgQkgeruXxgcxJX3zszXimN7oTdfe9vcXj9tfHzMDQNTL8sfLUtrTpsy2uCh4QYJKALULMrTxW"
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
