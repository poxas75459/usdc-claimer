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
    "2Us4Ru2triHyXU94RKsUrDpHaX77QEwCe3JiUyxQqBwmoqDxsapL8CHQ22mmTkAAfjaD6VvNyQAT2cgW2QpFBoPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dzvPRjDirFv1GMbuxC5UhYqkyhYePBBBUjC91xMGEuMroBSxgjRgEpaAPpNr5ND2buuF6ww5CVCBKrjtx9k7Mj4",
  "key1": "8Q1Ba6N33p5sfwqw7XKkS4EWYrN9cAyAdLZajrQSvHSwDVMREPwn5mbB1pUbj8XUGHMNnG7dsPTkLsUx5vR8G1K",
  "key2": "5rc3xE31zPg9MD9PKfozfJnu2mUJX1wSNEFjzQM7yXsQEkvW9qyxJRbKpkcXzNwipEGv7spRaH8JKBqv6HvWXDTm",
  "key3": "5c43bwFkQUCe2kT5x9cuBEWdwxnArRTfdELafFMJcGSvSgasVj814R2LHTXdy7hRuwBf3d8svyXbNTpCgKdoZmsV",
  "key4": "cQV7mbMCJ5kwNxa96ReVR679eS2vVXhBZ7JNoQMHxjSkVGVtvZidkQXYAAghwWkHH5otwvRqfBECFZzftVfXW4n",
  "key5": "5jpKdAB7GyDMy3FNHMnqLjtQpiWkKW9sERsdxiSSV3BVk9Z9xyyt2Mag4FjiW93JxWYbSGThHv165m13usagvJL5",
  "key6": "3PsQEzMS5h61d8tYR8LD3fJ6oFxN7eroE5CtDUpBoYKtRtKEsmANLoGgK5dGbKwYNW6vfdRt2RboUeBs9qzAf4iN",
  "key7": "22RLa4kV51tMMcDFErVPk72Cir3pVT1VFqmxxxPkjQKR7XX85mW1ibyiPShjBRQDsQH1WoZ7aaBofddf2wDSgswx",
  "key8": "4QE6CDxouk2Pxk8H65Yt6JprwxPnv2AZJWkxZsiyuh9A3TzyfZ23TvoU9s6ZD2FUd93gSxAKCx5Z34MkJfGkR2zB",
  "key9": "4rqVwqNfyunzKwNcLx4tm9kRh9UDr9Px4brPDNqeaGB5HLv9avW1zEsBBzq9FegWprk4WoFKAzuSsG83P5jwmDTe",
  "key10": "4BezQ6mAKhTMtBwSZdxTzuNYbcQ13Ye2qAZGQR54hQ3KREJJ2FxUQjRmVHUXMtcTaMxTvE9kFnQEiZTKRsrVTzSo",
  "key11": "5XcKvD7GcMCj8mVB814rbFuRDqm5GAoiuuttABQZqicFgFHf82TLVFjFo8nzGiFC1f7NKr7EzTNwzs9enUcB1eVe",
  "key12": "3qEHkJax3iwwgktb2dDt6fnF7onjJuzdy62NR49yhDw32keZeZeXzgsFnF7UpYuMMZ2jvKoXz3NTSeNEuLtqjZJu",
  "key13": "3ysuRANqcoXAirN4GRb5rZ4cKyqcmYJktiYaGf23LcKqmJTihgcb73VmCedemsNbH3vPWUfDmweUQSDMaRbcA686",
  "key14": "gaYP7Z1zFmeBRnEBbj4obwkt98tDwruaaTuhx1A9L35DVcEBhRWDjepC4LAgP7xsAdobBpA7QYaVbgGWXdXFTLr",
  "key15": "3EakhUys1x2CCnAhfvTgqj9BshaWsWhSHxLJtL1RrUqgwdahuPTW6U5e7citt9JF9aT8fRCw6kyGLtzizq52aA15",
  "key16": "3F18UHzBzBNW7fDw9BYMWVURtB322x6g19AKfdF29pDXhL3hAik4LBaCMLzinPqmwoLToFFgCe6YcWr46yCxhmmg",
  "key17": "u5XwASZYYtEDVcKepZhvV1ts2i7qQ4k9sdp87bBsTbLLpEvY6jWGXYWeWSGs841pXociJiqex3Ehh1ibzDw8HcK",
  "key18": "2A2Tt92H6ujrVitF1uSW9qcsyjskVuB2arqPPvq82pXKCTGRBFUgKQLeKdK7y3YxD5j7NEinSaEjrBMDHzy2wZQw",
  "key19": "2KFzVznXBdHJDFJCRXP3WC4VKqVWZ7yM7trC9aZgA13Mb5LrKEosbv3VZ3T64kxSCEuHs8ttN4rAP6mw6z7n4a4s",
  "key20": "2C41sVZrevYaWsTLMZE345t9y9YJeaUNP2vnT9jAzP9Bc3353eYgfhaEXeLwEwTCddk9Gux22tJmCTepqu8cEoGT",
  "key21": "3yTdqcYyHowcy7WpzEtBvLLg3BasNsBa3wg54Abjmx5PfEPPJNDYf8rp62FBVfqLazEW8ZTve22CHQf71jLSdKWQ",
  "key22": "ENGh1BmLfPvgGPep1dQWKfYuryf2LUcmrSRMLXqvxgDD6yKyY8mkkysianxXZZxBXnsafuWiEbdp99xRVpqox4r",
  "key23": "2cDRh1LpjWpVWuw975tP63Abu1em7rtDaACgeGaW96CAg5uv7inLEHxHFeDRYxpwN9yZa8oe8n65HTV9PKxkTGq4",
  "key24": "55LGW152qMydbF5WoJVUMurRebLCAnS5dyJN1hLCDCbLZx55ons1qBy9y5ASn3zxmqobx3Jy2atcRbkX8bcuBM9N",
  "key25": "2ygNeuzYHaWySiHRsVJWHbyy4sBorFHsTzVkfqvV4855b7KLexHU3U5HkkLqt5wSR28fdHA18durLSHeigM5kder",
  "key26": "3JMwAXQkZLN4dLX8BXKxwaeFAdVZvLAe7jeTFbJE4GxWTNqVu52ZSp6u2S6EwnSVGBU6WL9CyH6MTJKdNmGXoNoJ",
  "key27": "5cFgzsHRDdU5gjuqeP2jdVrbKkdy1yzdsvvJeFSea3xEQsT9UXKd8bgdSyuVraJTHNDR3nGi8U7VVmd3rttY75LL",
  "key28": "3AvSbp1JomL7j5Xan5nnSbZZTN5QZy1KsVXfw36SYzQspEUitzHvSZ4zdeNqvaYXmtU2uRwSXS8surrrE6PUCNSc",
  "key29": "CrzN4jjN2fjmmKkJXifEXEVzsPw3ziSt5apXYWnxBiJexqmWZxi1vfFwnnvC1ncVQMkAbGRofnaZKvQSvyXx3sD",
  "key30": "5B6kHZtveY3cwnSKUWFJrpA6sDed3KZox2JuFvwdsjZSSp5Qwp6aX1pDV48WbhdKDZ7WVuV4V8sP9N97b5V7V5JK",
  "key31": "3JLoD6r8kMfE9jSqDpzB6ezrr6R1yr7TrhBz6gJo2joAYi6MPfmqApg8yAV2Tz38PAnXdN3gxt88GZXZTPXmNRyK",
  "key32": "waZmaZ5r5rQX8L25G8Z2ZP3MwFr7eqcpU2hNrFLedSDtcpB1CLG4Uc9ZkhEm3SULoYXryB6fvLbJXp7tSctnENx",
  "key33": "3RiLnMb2zGxdm2jNKzdqHx7TYrMvgrTgoD36ND5DYqSoXRBhn7nhUfpaxGjgLQsMTbsKDsCYb6bpD9K3N2y1Gv4z"
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
