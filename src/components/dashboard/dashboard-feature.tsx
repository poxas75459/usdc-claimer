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
    "2Pk36XSwcXYz8UjSrXhWeR5KgbKJ9b6JHxZLhoP6YGifRT7pkFtDFjMXqsE7mChfJ5DrrZvafNdwMNXcHTRMXp97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nvCWiea6DuzA4japkuyJe3sTHqD6XACrL4ofShhfTaQViYd5UBUM7W3X3TRrTvHc3Nh2hg1SxB5zDnkKc5kJ62y",
  "key1": "4MEFDRM5LGBqkm2VfGiXJ2vgrvAnXuXMjdDeWueoSgqRZVe4ofyhNFhqnAiC94jb9BPjCrow9mVVj8h6mJeWZPf6",
  "key2": "35HDDji2gAExKFVFx5cuyyTexSxJmdSbS9MKjcZn6BFRUnVamtW47eB14RfdbKc7whJincDnUKUdTHxsKnoosNQY",
  "key3": "55L4k6ikpTrdtbDazQn1AuhwYuSYUPBtWhwXQnrsJsbxVEp3vaKW4sF9uVvNf7pQzyC1jjLe9YYnQgjKDxLTsAnt",
  "key4": "5nfR3S38AB32gkhptetpTvByFtDqTGpYxugqHE2R9hAgfhppF5cNqGGTYq7f3F8vXGH9JLZg86WRE9rpPgE6MbmN",
  "key5": "3ZHjG1nU5iPcuUeD1RoHsAKz98yJGAU7HFSgEtqEjgzPCoDKzXmPu8RpTBpAqqNMUamEFGcg5Qt9Lxr2iu2E4BnV",
  "key6": "59wFXUDbN8fN8td5cP2gj2kfNXQu9hHxeG2P6t4P8NCngLiok2maR76uGaqifj13yj6rM6GnXEKE6iMS2G24yyFr",
  "key7": "2WC7ELFFj43JLaJCfxdLWBiydM5zqxhkuivq9pERazicFjpcMCkLHPcDwrwBXQf3boFfBQofsvYbNM8BRfS6dNYP",
  "key8": "2UtWkfrwyzA7aJpBtW6NYk2SXR3Hroe8qTzNokGiHRBZhMmStMDC47tnVAmScUABuuk63CTBxByzyES7KZwi5vXe",
  "key9": "21uanZiy1HhSX9frkyFguTrSB8ULsvTAomLHY5upRSZpxz15vAwXrJv9DxyETW5pBLV17oxqmpUyQu9JGNfC3i9o",
  "key10": "44j2tVm7ocut5tGwc1jygkp12972VXRhv9qA6dgcZc8cezEwUu7QGZDGEfHDhU7QyDPjmvJh4SywTW7STC6neV15",
  "key11": "3mzGoJ1Mh1wed7cjkGsS9JBxhdcJ8w5Q4iQpADgPoRzCz2njUxPgJCGpDPpes6XKJ82iW4RVNhzP8c61HFWSAbhz",
  "key12": "3Fd7zVEn1qhgPGgAGJvj1gtrEFu84Fz9jRmU9W3yBHHE6dqYEP2Lo5E1upXSLLd8S3mbKgSGgn3NaRVM6onNEtws",
  "key13": "DgoTiv1mP8mW7REqpfZs9ShXg1WyxALptA9DfZQBhXpyZwqTDKnbNRnrQh2Vu1ZQUrs3gVWGkmZ4dPaepvN5DeF",
  "key14": "2T1qEBLHz86UMSKfPGFTzneb65RYjmiWrU5J61A2BMsqAPrKZvMALXyU13VaTkXBuJgDR2Ffoq7YWT61fe7vZze3",
  "key15": "Jx6tKgba9M3YzAVU3vwCwnLDLNao3KRm55r6u1TWfJbdWfxbF9Uoq2je4uhqPGeXmE51aDFZ3HfQ1on73bKa1RV",
  "key16": "gp9ULSuLgBy32WUgwqwRKzyU9oPtTtnBRsUWnXRhdWFuT2VdMF4T4knKkezzDYrgqpnFDffKSKJPR8PfEz94Xkd",
  "key17": "3a14hzNfmXRbuGw8kF2QwBH6dP7NkMdgoyjJm3ynNphv1hydJVPXz15uV3reW2dsXBfELBDLrawKT5zbEbguAnsK",
  "key18": "3JtwDqDMRccUskccU4ti8DgV19Ti7qqhVpRQeG4KA6rrdXTDgysy3h6gPnUDMk8jvF31JLHWM3X1g9GWNkBKUASx",
  "key19": "3fdtoArQ5fHQ4se127Dw5nEH5miiJMUzWkkzmDkUS8R2A36eA1Cjd2Boein878zAgA2qp9JMeae6yjEpQm59K38q",
  "key20": "3aJcAkwgYmAwS3X1wC4hKfdpytdVY4iCUKVQuGLAv12mZMkBsrVbQTD3GsBy2LagmVwp5zArP2uHFHWczk9cWVDw",
  "key21": "2vrxWCK1FdrZ75DLpJcCTgtnaAnnKTgAjguFFrvaTxUCECRLZPGGq52Nvv8CpHtmJc9BbjoBiGjgksb8xdyg7jEz",
  "key22": "58CJNbfT65XEqPwW6z9yvczp4CdrURd9kqWPnXjyBEThoSSYUKkmUCepNJxjLPv6GWYadZaYnVKgLU7C9uGT7Fni",
  "key23": "49LPzbpHukEe2mY6m58CjiYWoX86XLxvamwbmxJY9CXFqV73TS8G6kgwqwHCJe7bDnrzjPkGbpkgQzxmefC2ShZf",
  "key24": "5TT65Pf7m5y5r1Q8BTrVBMs4yyVr4t236LxTJJCNnkQMbWksLJpj6y6igWK8vjbrjGnUinJYvMiBcxv6sJMemLDY",
  "key25": "4gkoaguYUhhtQNpjFdzXBStVXNpYc3yjU1vCnTzbJf95iDf3rhBjvv3qmUB6aoUGqRke2CiKMSPAXBGpZ9cscVfx",
  "key26": "5Y1DbNs6yVjcLfEu5GKFsr9v2guyxCyQ8evvgsjq1NPteh7GEVHcEsCMW7yW88BmCqg12Ukg8EFXpVMtQaz6ZraU",
  "key27": "5BcSKDEDb8Mbpox348hHTrLYPFHGYB4TDnnWpDBdh7syNRKDEmH2HYvuhMVqD9LKcnh85bMb1NadoycCoEVP3uBE",
  "key28": "2uzHN14okJh6mPcmpM6Cm9YTS7r73LxdruEU7MeWNBwVPNDwWmSwcxXLUE3nfMX5syow9oFPxWGXyZLo7WjRWF6t",
  "key29": "4Q2agECeNAtr6BacUKCyx9CQUvH6WqKneJUwWYeJ38ZikjJTtpJKNGdut81EKny1ua2J3yvZpLY9PzLAkDRcG41W",
  "key30": "5aYU2r9kPXTVUempTvmpqhADkAQrXV5gQP7kZkBgK2NDQUiJbMWtgNm3SUrRrcpRP9VqsjsBZS5ycWF3h5TqrkYP",
  "key31": "owECPEHDavyoCk9hZ5NkrMMNYKjGY832Wyq4Fhn2vh9hUd1LUcrbYX6nSMPzyZvuLjADkwgCGeeBBf2uoc2u8NJ",
  "key32": "3WjCSTy8EfgkY5NFQA2kWYX3gAgwUKCVDoQ4anneBahQnK6knXuQmGcsP82ErLw81GLNzAdFmvi4wrSZ1HaYmzFi"
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
