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
    "2kb1137te1Crwqqpwq59FA14AsJn6665yMWnYe2ywr2vkkMwhHePTs4pRZXDnbC8XT8rLDyx7S1jPD2bp6VxfnqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yy5VLzYaYExByTFYZS2oiK5do71TaZHLbXpknbxnEg3MgPDioXp9oc6XP5jigpSsWDky47iHCgJWjpbuB5X2PUC",
  "key1": "3tu2sKJTRZ27S177t4aYST5DQbcwU48Buwab5vbv8QWkKHfJd7ymXnwxzSYjUBRYsF9vtvu1GGq8oFs1bEhXnxkN",
  "key2": "41Pv2ioQMQbdURj1i1cNeeXw34w8gjYwZedVtsNTUuS9pBGjYYhPEPhmZ5zhuLS2haNDPpJxE1hc57g8eSsrCTJH",
  "key3": "2BEDVWSnx4iiPumoj46ZKP6cfCWw8Rkh1DeGBqvXAu3RCaP1UQtdpv9nGU7oUWYHRx3nwqhcUKdKcfzPSDJBaAc4",
  "key4": "44CHejjAVfnbRpop28Ge4Tt1X7yLH2jcUFE1gNbD32bQb9og5vhsq37LQR5SsvduPJnzMfN2pN7wG3qQbcKCbx8W",
  "key5": "5a5agM9xeuKREeRPhuDPaeqpHV4EJdCUTgyfokh6X8W9tWnd3HTGK5Czud9mS99DFPaHLxxZVCQP9pj69PpXcELm",
  "key6": "2biRqNSR2kndhDHN3XURdzLp4HZ1aKfVusbUBoxbrVjLyUDgm6RDr1pdHTtQNsJ4Y7HMzwNk8JrmF3Df15ginfxG",
  "key7": "Fgnay8fXob2ZUxq2hgmB2PJVm2qKQSsK7BCFxRYQP2XWvSAFFsqZLWHHYikdMxKJB2PwnYDB2atVKmau2JWynzV",
  "key8": "5ekATP8ybHbaNQPAkcj3RWk157DY3zm438aVLKd5Fs6hRygjMbTGv6BPrFpE2QaPSsZYJVoWgQzpre6XVjxdUQZ5",
  "key9": "5xqfZqPTLjxNhm5VMRQvBvdbKcr3A6HGJDD859Y9HeQJY1MdRyp284UDVSmDvLQ11EXFoCYyv2wozUgZy2ti4X8n",
  "key10": "4AV3ftr5mVqmXPN7BuTa1B8T8TLyzoNvjgMKZia5tNvRzL7FC1H5d1hJ2NbG24925DyW3iGjvCKhdzPKFnAv2RL1",
  "key11": "4uqFLVkt4ho3p584eQnuH6QXYR9YY6wK6pSPzSCS9DVX6qBCtm4X9pQCMjS22BTMyUQVMfgZvjF421AGQmowdEXn",
  "key12": "5uUqrGSgynVja14KfG3Do1ZqozP7BitBwVVYLqwrkcJuLfeWdkHNQaCDzZ8HTsKEaikrHKzPbEydxqbGBVWNwzWi",
  "key13": "55o3iX2bdPAMitBeLnEgX82F48L5V7sa795gMDJeAgMv5651umpwgaeLEZS64u2xgrvCT2yeH27jrVu1zuo3T82X",
  "key14": "4pA8MeCPEweGyjzGJLZeH1Eov2uZdMdJPzJYWVA7W5h9DdNKr2f5dMLp56K43ksvm18Rk2pHvZYC7M7mweoYpDay",
  "key15": "5AWNL5HwMwKmk2ZjJDsbHu5iACm6N3XCvALSiZ4EdkuivVa8XGq3YUYQvWfKjiApivxezx35dH6L5Abno727APV",
  "key16": "kQzwyvipyDwo15bX3pYDuj2LAgp59BLvWd4NN2XrDT18z3DYBLqT72Tx4TK39WVKFNutjjzEmZr9ugK8nVtxpkv",
  "key17": "3dYKJjWyRzj6DBAtmDGPjCp5SPhEanZQRJvhxxmUrvmSLf8yqDHNdu95cKTexDAACM5oxf6ixjQAfwC6GA4T6Qsx",
  "key18": "4RyR3hNMvVG7AdDdmUNGrZvbVP6xXZXEbpqX1vx56E5N1DHifzX7gj5jHrJtj4k7paHPFhM2Dymqrtrccc1MdsBD",
  "key19": "3g5KuP6Tsh5dLNJedoga2GU8Jj3QvZGaf6xSht6JT55Lurd6oSzM6o6UXyVLPkQjRypYHjsR7M5CL9fGRnjprxeX",
  "key20": "5LyDLUNJqziDdzJHgfGzG9fSPoc3987Dt591zDtV7gWQ8exXmrpaf1YApQFrEAk788rMbo9RbsQ3GsfKZj6K2fgz",
  "key21": "5oELuRs6KhQ96LiBmw6U6tfg7A5vcwTwyVPfAbsEiMqHx1goGRkvoew668h6rPpjKhgmaPADJfLT28g1L16wueWU",
  "key22": "3PkTqvxXEDVVdGPBssjwzruH8MCoC6ogdkNXY2PeguVLPgZgDznCaBJNyknAAqvb1pFW9WLXYESAd46Btaofm8t2",
  "key23": "5PqebRFTn63QazYUs3MmoUTpzkQa511R2Qv5thupn6L4WmexG3qpYsLaBR4X6vp4ziLAQYbrvzbdNwd5Nwyp9Q9s",
  "key24": "57pqEtQbn9g3ppTB4uzxWHYwFvKpwzQnc9MNg5B3QKBsYGfRRq7AJQxKYwoC1v9Wmm3ez1SSVjwpHbSxdLN1aYUV",
  "key25": "2SFnoeLHi56H5EtehbqYujecXWj14gDptWPH5ggvpE96WhEm6XPpeBRgxHxoubskccTNXeWzw8wCFkQJ8xHkkeH7",
  "key26": "2vK6d5xNNe8P14T3TL1BQnjrRg4DjmVzQCr4fQBGDYh9S2ShFawNsS2Rk5xYq4AMpkjUstQ11HLWx3qPs7ji78rG",
  "key27": "3g5XHTyLeCzBbrGFrzznAbFv6143FQovzzPLonKmPhFHpA7pVb56hdi1USi79xxnknqHgKX3X2VqdDDPHgfUgs9b",
  "key28": "dQ8Fk4Fog3dV8o7WjhBqnXTi9sF2XdRuRdimH1NpgZafPj7mvgVdvDHsjN9d4xmCttDSFH5Yp6Mhb9Zg2oR6Qzy",
  "key29": "y1rrfJkgjYTGx37teNajV3sM3jKDCMKEQQnbxLJU7HDbWra1iVoRGq9i9Ce22JjReeRfjCLc1sdnoJsVW7zEUV6"
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
