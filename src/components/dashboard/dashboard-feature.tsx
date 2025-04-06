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
    "2Wm2Jswt9SEBMytNF1cbghzC3YryeV7uvWcSZsjKfbBYfcepanQ9C79Kj5KfKcRGwUvUx2hfgbrJBafW1FiKm6mP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xpy8vioDgPU9QvpimWHqYDEU6tfbB7ew2Mq5WGdHegeuPKdJA6ugrNG7GqpVwYm2yu4py1gKPJHSJGwq6pgf9A9",
  "key1": "2aFkEh3mDLupBebdp9gddvcHc8KccszAMjYvfPEinnQpmqruTzA4LuzJwx6E5uZgnaUtyknHvT1EWwyUSq1YGPgX",
  "key2": "3Drn7BU68GGHFMKwyG12D16NhwvydB7LNB2cdgseG4zDghzZTfC8XnRD2BZhF97YU6Qsqk5ECcYmNzMonxhUAh3t",
  "key3": "2dTcX6Jm8Makf6Z1wTK4KrtEtLyjjw4MY6x3trYqEwKGat7JnhL9Rhggj4PMBnDKteagm4Uo7sNkhaM7ZgQXnC56",
  "key4": "36dRD7KtMNDqnPT66YgMGrrMDo8Sitb7aZPncSs3XuAiAaUtftKfDs9CBrNsopeMQe48MjPdacRk9hfCAoVkd4t2",
  "key5": "5Jwm92wP51CttoiVCEWTNknZFnbY2jYEahpm9d3c9ArDdx2yeZ5Skgi3hksJby2HinUCFrMEsY5FovZnaPsbZc4z",
  "key6": "43VFRSAmuToXGgMjhPAg3opk2cA3W355yrDjHtBsXd3uPchuGZyEwKTTmcd1uPz2D6SHnQ2fuRZCAoXnNAAnAEfv",
  "key7": "THf2YjJeEqp7L84hg1qnPCFwKoG3m5zLbmj3EdLkoeNz6vKb4eQGGV74hAyvJDGhZronZmck9JBrQWG7uY8dFfi",
  "key8": "66BhR3bvJevgpNajfzyLAEvTTKAinHCa4duAcBsjffscRLrA46xZLqEykhQ48f39qM1Lfxdsv7EyTbC9ZwF16xrc",
  "key9": "4KQRQpQwwGzZrLp6K7fYy4b2jVy2xcxEMEV4gcK8iURchrg7oMN3rFt1P2JXfxw6WmvmV37YXgH7p2ZpGjrfjjLH",
  "key10": "3NNtfKEtKd9D24gPj7FCjFmTE8AE6x2FzssT5uCWsb9XYacMpJzfA7NxPvS7sGqScXYWnaXevE5AZxfJzcRSR1j2",
  "key11": "29ihS8jvMmSZTayQXJAbMr1GaNz1fXUTPFHSjqpFsQWoBBU9f5Y2ZY4K9ykRJq6DzyMSjXTR1zaU1f1ygwUg18JH",
  "key12": "66vfARV1cWZA8iPLCLPBrcjs75dh92UHuD9BqbqzV2g2NmfuLx2FQB8LPbwGdjrbW84hFCStGmbqHmv57X1tnmeo",
  "key13": "5H7ZuwHPwTAVhzTyBkTLuFbHSmuVYtpjNZiKZjABJPRsxGphpn74oYZ2XDmXfmDD9Hctqp62crwabYx7LRKxAJpj",
  "key14": "LxCRobcT6MQxBsT8Ez9m32gdSEM8M6QhfQ5MFrVu4f5r7hmKN7tEqM2SRTbh518Zmi7FEosPHdK5VSqHTsCjR4D",
  "key15": "ACqSarzongFEgTieEAXCQjdkmt2n3DDZ2K7mmrKn9s6E1Dm5D579eJogMcJnUn2ujjmLVUGvUxpqzLFHZtjCX7B",
  "key16": "3nbNqw99b8mmvkBDYi1gEvKgwP1pffMYiD54YXiUXBGyhiJL2y4WCYKccpehx2vnFboi4CtpuLdDcZK6FRXiqbt3",
  "key17": "4PrnDYAYdEr2uy8EGTxXMVcnYowyTEPukRRKNpzTwEBJki4MR93HHkfTtYRgYmPCRiXmeRhrXaozuFAuCUCAGoVQ",
  "key18": "2hfD7GyzerXi7twcwkEmryrzGQVu2gc7R1BXQ2HL9x9ZMKaZiZBgUfV84ZNLYca2mWXBw9Ee1TRzwo3wuJAZhiJ9",
  "key19": "43j38vaYru1Qaj7Lq3GV5vMdhCozyS3HdSvKZaJ5Hi1JWmB6EQYumd7STpqkXqbLewKqR88rPvpnUkqZzECNMfL7",
  "key20": "4PhA7Kq8Hy9JdwryosibQtr5qSLLVkZNXhGvejNb5oY5FP3ZrU6JCCAuMG5SDxitJ3hoVEWt85cEnuqPrNWEjGyC",
  "key21": "3xrSoq35R7Fp4FMmJCvLj7oyobXEj3viam4h3bZ6isbeAKqvXUEfPP5BhGXr4CgGewuXwTnh8xTHYgDupiQ2gHf",
  "key22": "5ouzHdgXVpcND1mdwbG4nNc7me2cMkfRLhQCWEKKmGr1YGmKt8HU2TZUYToFtVcDZRmtgQYJcRup4fk54ebZTnbd",
  "key23": "39SrNAWoJn85s9PQpswdfSiEDsFtccMYZzLMstTq3KTftDbTaS1muqFvMK2eRHkgy4pRRrWktUKu9fKriBMDY672",
  "key24": "2wzMSECCV8h7ufaGv5xcZnRSsCT6XCtyBAxgEawnViF4KBmyU96DLSfx92K7xcZqsA43ZTvoeeAjGy2959fAKB31"
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
