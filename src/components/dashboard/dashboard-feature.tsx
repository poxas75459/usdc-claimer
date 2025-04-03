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
    "4HQMJDv2FbLFYhUViP1JT1nCqXLH9niqDJo3Y3n6aGhHvGA8ajx9AHzLLZs1yxtrXTris2WEzqJRAGuFMSNbysBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24qPjspm8NvZggJEZ214LZMRPVvPb9o7syWURs74Xvuo5DPE4Uq4e1UCVb8EAaokvwaDKvhDLppeCjn6MYAdKG6Z",
  "key1": "334hmDnxYg3v1dk1rGZvB26XL2fwuciYTUECvMSwHxuk6Z7mEqTCfXSzAf8QxAgR6YZfepDtdERFt1bP74jRJC9M",
  "key2": "3zGmzXwtKEzip4LuYdWfMQRw7xbiZ1wfiunJ9odWszvPAHket1d1U5WGEzBgKgoN6yfrwj2WA7E4vZmbAnjxuTob",
  "key3": "4FdKQaBPiMF2EwKdN7aCHTn2fJWt7JPY5Nbujxj4FWx8FtSVvRBc1sGEguCceqUWxJ96kgpqQpU73e1kTWW3EsNv",
  "key4": "rHMWA7maxj3MrYnY5oSFieD4qYCwU9uJQVJSKez1KzAZK7RJHHc4fGpyBwRJJFFGemsaAjg5fpAYXb66F4Y5XVj",
  "key5": "3bTSxuUK4x1upti1nnGi33yHc5fLoqzH2WMndo8qZkhKp3gigXMn2inxqDM8vqpKS5Y2EJhqMK2caXLnAHRbLi95",
  "key6": "BxqKQU5AhnVbChg7fgzqmvh9x6HudUMTYpbbgq28qv3qbWkXFGvx6kMhx5zi9jEWhkpEEwVVdXezhLxx2d4NXkk",
  "key7": "2Nh4jV8AknS5WupHQYHYhUQ5tx4pTvNFznHw8ZHcpMfYcXWBZ9eyuxfGapmmThXuHfCv95Y3t6eRbrd8C9uJRoEY",
  "key8": "2rEZLuzkXb4LJ7veAfV8VPxJDX3sRdDFd1QSGYKDYNw3znLCktS5ffoqZ5d5vd9s3nAnCixvdN4ofr9uXYFzZF74",
  "key9": "5PoWuYQ79eTawvxNFj9B3n2bmMHJyKkQaEfjqPHMtnmUU27Hf9wE3FnrqzBkb45LXCHz9hg9fPwmEpDjekN33pbZ",
  "key10": "3vnqhVjfrmJfvjjVMiSKwHXP3ZFDDkAtaNqPAqeqjnRHt1KcVi46RSsd9gpNYS4sxFb39G7P9tCzhNhdZLCEzTdv",
  "key11": "PUa3AaFrNrsVz6E7wpznkWGvd3Hv8kzWu8wWrS8aA6gjPeAnz6dbB1fPqstexesaCVLYP95s5HsCZw6B4eJLH8V",
  "key12": "4UgQgtGxGQXG7g1DvPHz6UHrXM8DECKMn5JpMoiEAgfDKnEkshKEEgiSGQ4dPApGJJusNhKkg3bSXVVauaVHBfdp",
  "key13": "3F45MnJfojak8C8nvx4s7twm7gEhFhg1atfk2CTtzijjbEba4mZFZMV5GrH1PBH6f7LCVkiqt6ve7veeP1MNFd93",
  "key14": "51vPDZ7g7CeP2h4MuqMbGRPcGor44uF6D6qghJwX7rmbqAF3qz5qNASvSuZYkCFmHc7aquYZgWouKiWkZoa6QmFs",
  "key15": "36r23L6fkbTpksYY2uUHbrfLyYuKRKcz8aKv8SnJsrYE6YZrSjd3krPvjGkaTFBBLYvf23bzgexoV3n6oUnDzMGg",
  "key16": "Hrc6vD8jxcU3rBNfGHXbUS9aDb9BXs4icfLkHjXmuQftRVo1kfQwfRJ61Bc1h3Dx4AjmvviNc27qeU2HxrehZ1C",
  "key17": "4AcD4juntyyZnDpUh2x5LUoVKFmBUMaucrN44Jhyy1RWc1zcbFC3gscGvsNe72zgVfjMV4Qf5Cf5P3sxX6awrgRF",
  "key18": "GXhTfofxnYPkTMj2oTGJkjJextBenXcJL5uEwubKNk5u5hpffpAA4QQy7Nv43BLbkbJsUKM2u9k8ojT9Aa5N9Dm",
  "key19": "4Y4EKrEj2b4cL4TzixGGYcyWXTghWw8gQK76pZoK3h682uBXTmFHovy53dTZTJoqdXJePz6Bwu7LpDbNeQBdhNVc",
  "key20": "5yz5s9ZXEzbMZ2o3UYxyXTMkJPHxs6rfMSeGZBwsdLRYAHkSVLv7Jwk7d4oNSkKcEigy2ELVMxLGJNbU4z73eLaQ",
  "key21": "5Q5ty48SeoQRGL8eghkLiugC92e3eqheV3N97fyKJCgCmguYAN1dFwaFpUnV977kgn85VEvWRz6MJqqcujpzxBZn",
  "key22": "2VZCLixCvncN3u9ebi24cdU6UmJDmSVWUcbQ9xfLFaikpV4qVZ5ub8R9mXs3JR87iwQZ2mHsJG2aYbGYfRVPPKQ2",
  "key23": "3ByGGAdbLdamKDupQSFsEqh2C4zhHUWranmwsT8HqRX5cQUDyZw2iLb897rYGYoukMEv9uBzDLcw3XFHXshC1Uu4",
  "key24": "3iLQmVuohBiEPZKAkWbPFa88EuNm9q5Mz54BS8D2nC2dBk4eXAMtXshyzAzQXacMFVMX4FLYS3ons6bvo21CvKn1",
  "key25": "2E9sqBcfzaQvQGgjb4YBuvCFm9YKJxMmCNJ1XbXnd1KzCKKpPddeXD2gmaM7mByQfPSS2W8pEDHmLunJh1rsg7eu",
  "key26": "z1wzHkpHS7uxkqDUfBNHQVeuw9EkDFCcXFXhMRetXpweF75dNFrufNWsdT2mio1M7Zgmk9XBRCeM1pPnPv4JhsZ",
  "key27": "5SeAv7LYqMU8x8zFzAdSoTeVtDpvfABU6savcW3VBx88fGj6Ce74BAy4dva8cctes4KRLp5qfi5BpeBtErHs7xsU",
  "key28": "ZpHwGEt53ieDTUC86p5nLYNtRziaifqVq8kNBaMgzVjkw3oHedBGXpFmDS3b2J73evrJUK8rxdfXUe1Qi9jbGvN",
  "key29": "3URkJeef3ihEJ6s9YF1TrdC3Fxoe9CsWAP1Db4WL9RbdjsT9fTdGTtwSE1fuiv13j5iti1UcRXa3zCCLn3huv9ms",
  "key30": "2S1FhgDLUCGr3iGM8xMA6tcL2xebCj61Mb7fbiwSh9ixmVX5LfkUyoiUminA71txFW8ugXDdc6BTVo3CaWoxWyyM",
  "key31": "65RKFx5MK1z5ms4AivLSGqLV4PncRyjdzC4erq9BH5DAZQWUequR4Cadx2ARrcZyWcL4ytKgpkThHXBCyts2pgnd",
  "key32": "3Q7B1NEDmeQrauXxTDdhpGnoKyumWF8BsTjgJmMxTkeh2KEfxCvGM2ZQVN9P3BRbtp9i2zTDZ1ZyetMCb5E6kS8Q",
  "key33": "55oZPuMA63o8wLHuctrGZNPFW7PSCsQYqdF4dujb3uJkfgdEfAdR5fm1rW6umAYpAP3HvYuQu9aaxmtghjzBgRsj"
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
