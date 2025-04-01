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
    "2xHbcJqA7NqM2bKxQZ6C1AZUP6hz2k6Bexqh46E2GFZxuGjaKkn7Bj7efYgk2dcCnwWjXNUAKkNBKiJuhbL8YvLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SLw5ii2d8XiLgwTVGDVtVT2WJF6wLK55GCTJQfd8YarSq3f41EavxzHuSKVP5jstFh5v7QEfdHvk9TiX6SKTLXh",
  "key1": "24ah6JZgQbRwqDU48iJHBJb3US9KeGQQWxF6qVpV52cmeBT5Hm1ePPuMXL42Jp4ehczp9VCfVdzhsuVd2PeMCWBY",
  "key2": "5LVWmdWBX17BCZMNaS8SznMCYwStCFmYirjPPrVwZFV9knib6T96JmKvkcTCCiTaei5x68jpAtWL2cooRNgQmSx5",
  "key3": "2BNd84rpMw5dpaqph54qAoibxQEKSFtRy2xXetBZMvxXbdACEwZi7sNKnJM8tZYkJMJjPfA5QYzxUfMQJ8jcqvzw",
  "key4": "4SfmQR597qEZgUJ9Uer8ZMrbtZhhpxgAJPjYCkgTq7E1fSATFgS3dSa4GtD7S9r5pCAV8ez2LNmKHJn6cYyAzViF",
  "key5": "T7aBDcrRx8VXptcswNEcYYCuPWQ4VseWXp5unaCFzsKPA1eRZnLoVAn77APd6FcTvvEPKFmDpEYv4uDA96ACveb",
  "key6": "4P6yWimZx5aPDe5u6ZY3ADTiBxuNnvDCrPAuuSyReLhsSHJEcDi1xCKCujrH4uVbtSgrvVZawZmcd15QfkU8Nymt",
  "key7": "5qhVFNoLgiSFWWsTqg2fFw61z4cxMMft4U8SoN8YDnhxfcySCzLTsPwWztHADLYvFEa3dmzMedZ76T6r9DK4fbuQ",
  "key8": "42jaMVsWzw88CTwxSb1EfiGLpX1kLQTiAQ6PT7Nn52yuuxkMop83uSpsRXN7QrUKKjrRkeHreuSFLnrV4LGjbw6Q",
  "key9": "21Mdwnt9f3yCA1BgpA9hNjzSu8w882b4xFfSg6mLDbkXRo9RDGzLM8EiVXybYYLXPjMD6SsQBiUmpY4AfEvZNPSV",
  "key10": "511gyKXwkRARs5hHzZwjaJwHHJyQ8ffsrGsMSM58wYTjAGeN32zXtrEG5M2jfD6Va7ozj2FinkQRJq2VcDxZzSJq",
  "key11": "4PDncpxykUGvHTeH3QhJD4cVUS3ksKFMaV1GhasMeoG6xYvtXgiw3BsiFsU9AXdnfzkERBkJkEMTmgdYyw4auXS5",
  "key12": "51G5wc7AFa92t6mMFcFNqSskmenFjuAJySsq8MncEbZY2FrAH39K5StKqDw5oZZ3nxAUmgL79RAT9v91PRu5kuEt",
  "key13": "2tEi54DjGbjoQxX72uxCFoUyLcvZp4j4zXq9h9AXfRcg4foPp4DANTNbqe9ob3ozG34beMz7FmfMC3L2hPQrEbxp",
  "key14": "2vFA2LAURjrBtwsfqQYoSv48kLfHMsxT86eCYxAqGouyQu8TpJT7Vr4k4BJE2458gm5cAnuQgLDDjMpeihUVKx6U",
  "key15": "9cM6q6mEyGztnbkaA3b8qoGEpQo7v4KmidG9r9z28ZEagEKZtTQVpPwTUS3U8uxARUCNpUfAPoNXLgJPQ1rCKVZ",
  "key16": "3WeGq969J6p4Z7zVy27jiHFeKgen61rX4aMkJJUbPkdg9icT57XqKPQ4ZQkY8LVNeA2zGQzHn1Z18zNwr9UyQYvd",
  "key17": "5Qs2LW9fAMbvkcMdpw9bmW45XbLLsnTcxd6joUGp76KSnuqny49j8MeSqibKbX39twEaHv6SGc4K6izFgsjHEJ8R",
  "key18": "5MzVnmmKdGkKbVA736KKsLvFkuJS5Pwanocdbq4RTZ1wJprpv5Lq1fwpnY34yruutSZhLBeLPbxhi8DbmYR8Eckh",
  "key19": "39n7DbXGSSTV2rvT7sm32uVEDo4kvV4j1m67Zc2UcDym1qJ3hogfVoVwtwSPpw4yVFVDAktHS9tnZb1TUksbAZXT",
  "key20": "2nSmCLuLwtnR4YgkBsVyAQwvdAPfirnQ5iJdjuzMGBFoA87bXdyktT889Ce7fHVi1t8qxYfrm7nFz7LoQ96JUoZz",
  "key21": "41TVP9wFWJ82WGKJTwfXuptrk8u1X8M6nNJqbFAELYZwyH7DLYGzyFs2NTrjtQX7peTRJXfYP3UAUG3cVmfxd7A7",
  "key22": "2kEpJZ1pBtNma6bymj9qE5FLiYoqf8ymsk2YWyZAdi1HnK6EsWFjKLLJp1ZnUZubHviHkyqHeXXusLk63Umk9JZv",
  "key23": "4EP4KZH3de2oLYQCT1BqQGPMnvZWmR2sqpd83wGbL2rvoU31Ls5so6UuNsbuLXbKFPrjPVfpWeECK7d6Ho1vRkge",
  "key24": "3AQJEr4oTwHZDrCR5u7qMbp1zr997EKus6UsxStZHUe6HoptaCSum3wXNoFJM5dEXyHdsaZEYvjr3SHMmH13eFXH"
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
