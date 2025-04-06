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
    "48naEVuUnq1aDZBeNn3hPeMUELihEmkMaCRDghDj2FCaTk6NYq6iYWSpkzfckVqHSBndBBeb9QAc1GzvXJH3NDMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EFtJV45CxPz66zbWEjLXqc72A9YBznRffaaseh4WVqakTZMCEUVu1pNvuuCsgbecFZqFy9ksbiUxqeggwfxjuj8",
  "key1": "4rGCVng66RiJdbaxWNhDN5QsrAH68shGS1rYPZL6dhLAETFSCpr8uE4SWJzKpJ45U24dtzQumWbcERSktVY1cPYi",
  "key2": "2HGGmFgocx8wSExCeRGaX2C8DguaZHo376KKkoHdemqQnmmxQKvBNRFEof2MJXykpTCk2RNFVqyMxcnLLFGAjnxK",
  "key3": "47kq2VBPoe5W3hU9FE9sNvVsbwfRp5rWxbHZ3ivnQCkxTtxN3KipJAk5WmZm3vkXTnM6ioSuNsDDKyvyeQyXAer",
  "key4": "42AWY3Cpaz1BQF68FUNcZq9TgSMHD4HZfFyf4mjBwU5uhhruDWW2nyK5bzUWGVZUE9bU1Bn4mVodrQEKWwBREP1H",
  "key5": "2Fy1kEdcjekrnBSF4jqA2UYKN6s1tkKLNCKJVS8At6gcJWrADZDnHA2gbrctHzfeAuHF91k2KfLGihpQk2X9uLm9",
  "key6": "4tpuRngr44W7SfPBqu6ezbkfTvYqhDhQNDp6FT6N2XuxAXRABxTBp8BeV5QfJCJsNGXtsUFkrF1QV5tf8fzmd68a",
  "key7": "2D5jghixNuTX4Ppgg3JDaXqrM125xjMFU5HZhrDwDz6gA3betxPqCgEcPBQysoPiCYVt8fu7EPANZJcGF8b9e27E",
  "key8": "3gnC6W6DHJFiRCmtEb6gGiCn6jwCvdBin3x3CuvkJ1dPWvf9i6bVmbvvYutLfmw3Z9ds9dqUVxyMoNZsT8nRzkra",
  "key9": "5D5yL8uf2JWsvfSsHJTC1WkjhLtHdxf7n1CNqCA6MnKTXNw6vEt8faqfoSrvZLQswrygUpCSEzo4bXELVYHoz8kS",
  "key10": "28Ep2XGN6JQFBwEpoELBuRjxDBh7gkux5x4TmEMs52amowDpPX2brJczKzoaSybvLioRwJZfgxkKw785yAe4uPRY",
  "key11": "3KVW1Ct7uLccoSzLbcVYdWu7cFKf8QaRbmoyCd9phyx1WdezYQ4K4BLDvTJUMeL9oqB16fr8xRnxxUxTRmjxD3rM",
  "key12": "2oCC8Nebho192YH5TiVJwQwLxd4h58or4xnEyVu3TUh6XBsyd9Q5V2kRb3tNvnKSnQgQaQ1VngSubNC5r9v75gM3",
  "key13": "57EyRBh9KdN6tPHAUAhzZX6k2p1rUBFtX599zr8pWubxfszqgXMagDyDeT2HyLeMMzaoUkBdeFQQf2Nipiasx5ke",
  "key14": "2pwRopWYLVnSYsAgtgz1272Xh4YaVtRpFK3VXdK1GEqFQRYkvKayxaAj67zWEPfnv95sTbr9zVxzPVwQCnQZUkG6",
  "key15": "5ufYL2KkBgL3stVekF1uKm1U4xVGN6worJuZa3E5eQLaSX5X5r8gP8RCpvGjMaSw3RePb3hrRrqkA9RMiLo3QRq4",
  "key16": "2xMEcKUTWbSi1z4fJB5yLsJ3HxyKDSt2tKvw6pM3dKPzCpqcUQeDWY5GkgNDedHvpv5sX2gE6f6ZF5Q6iaigJEDD",
  "key17": "5MCrqyvXU1v2q7QqzX2vKV78e2aM6sXKrp2A6AuTUEnyuWFtMaaornC6WVz7Sw9EQcJUsS2dzZepP62epBJQWK87",
  "key18": "5Z1REp8DUAjnJdnJbj4tUjv3RmKmMcURm8sYBhYU2Y3RMZrGrCVXwaSXDC1vsRTAtq4JvufgK3B14SBc38UwaTK5",
  "key19": "4MNhBKBiwzBEXpJToL9t93V5iiAy9HF3pc7Gg8LvUJZ7Cu9iJdeyADS4uQs5r49h41mfdzfAHbM6nbiLsy1rntr9",
  "key20": "2dhAxZJfrVdsJGZbdZ1QoUfhRZ58x8D2ZXXnpeZF5Cpy2x1oyyhWQKoky3h6csZmJbRkm1dz135cDjH1qTHvTbi6",
  "key21": "2ZALX5Mwo9XmKA4pxchnc94iWKmfdy9HeXoEWx4uZWyb3J3uQ7fgtRmLAqNVPSAUdvX85PwNrDGDRDjUtbk6iKF9",
  "key22": "5fw1ShN9RsRB5pyd9iP77EvPukBnGhkoRurAbHSSouCPuPLa4sccTLnQq3TBkQt61NspkaNkuBtAeZ9Qhim8Ltcf",
  "key23": "4rEsH1YqvJhnrfWmzyPAXYW5dN5B5qst9m8R6rZ1GLMKS4pzwWfDY6MifY6J78vsoe8sBbyuyPPZ5FTi3sjPx6DE",
  "key24": "4JbaswgcZwELQUS2uHKB1boYknEntAbRGqXoMnq2FnrwvevHaqwvYinGmMjNB5sjyFXwzDKJJjirnXC823KTiTLM",
  "key25": "5yYEpnwUrnC8DcnzhNzyqity4ELL6TrbFdcgEQSTQdqA9nsE216QtwkqFpyEp894C8V7S3q3C7ZXTjc2cVA5v2zu",
  "key26": "59vbTYJNrUhb81xmBoMDSk5buCuL4ztY9TurDy2XakP1b21a7rhD3o8mdv38cWxzvAQeYdpJjywuBRxLfTAcgR9k"
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
