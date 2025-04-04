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
    "3FpR7YFUTSA7bRfZJqF6EfQh97ZAEzZYMJKokVJ24w25aEzaGKioWrRLjyHMCEx1XvhwspNpCRBYW6eFtmr2tyup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hTDMNx1n1xkHjTYvhM1BTxCvaFj2276ybABzWGrpYpn7GCqebK7suc3RDn9tJLJ62AtLQkFzt2yQ4taehdeG2DV",
  "key1": "3AhUXyA5i8ZKZ3rnUymhx9TNNqT3TPSwn4WABj7NLUMMU4LaTMdADtZm1RevPjHAfqYBTvbASinUoSjYq4brXivT",
  "key2": "3JxpDjFCJY8zvxg2f1ouGUGwdKNJJWPn2cJFedX1r9AyXcarniHJzMcdHfqxKGF51dZszbAcd4AExBrywiV6nvqC",
  "key3": "4objcA4hQncdBxSe7P1UG6DJdZtPRCmCbrGi6BzQ75P8QDYrd1Zh92K5C8mUzGkdUWbZfqefkf6hTuSjVnToN6y8",
  "key4": "32NpzHe1e7ffw2Cqj23MfDLdo7FqWPseGT2qg6VMGiquDVxZ5m1mkFPwpDWvJCC3F7hrGw85uNvvFAJ15mX3oqTW",
  "key5": "2jkCaUekCp79i7FPjFhjNdnWmbv5syzkvHV2adN1YvckQYLw7E3WmsjpYhbcGGXpGudXZtcHT5QEXRHuBLmhXYJL",
  "key6": "25moDvuzSHZmCRJkLAPfitKCRbiTpQLuXzbPG56aYPm7h1tiTtobWzCpg9TCS4XT27Z4TC83cx31ZzGfvqzeorgP",
  "key7": "3mcd5NrMaNFL53T8iXYnLaeTXVE9qWbwz78iUGzRxM5mhJAMcCzEYLYp6imBvUgxoSQ6mJfsPeTQ3bbMBbTu14Ua",
  "key8": "2BPjWNJmseXaTWMpD7Ne5uvn4fa5DYAMHbGL4LdEXgegYLci38SkjnuSq41gmsiJ3XUjLmiqPSAduFCignzxU94X",
  "key9": "5aXgoujGnanscZaCfcCNxwYa3ePNwKSMRztjTcCHAhLmmovGX58PHPWy3DWvnFVXxaULxL1zFemvNRM73yxfSVcn",
  "key10": "2NY7232Je6LpZTwaf6ngg47uywpKXMnZQLMW3N9awiKLkj657apZrDZSP3QmADwTzzNRV4ppg4vXkxH2yq1LTxfN",
  "key11": "2eCLkgcmHP9TKdug6ULzBqWiE6fJixidsuLrx9NwuwUa1QLVJUZptp7foGXDyv7X1fYrENUcznKKp5MDKHv96DsS",
  "key12": "YWQCDYepHiXJJnr1gCf2pBE85vvPrAN1NwB4HPi3XfUC2cB8PKCKT2PaQXwAvdujKhcyjmeJEHqnGntWgew6iK9",
  "key13": "rsHBbmNSh7oQPherSxUbxyUy7vafpPtVVgXPrGbJEYhaWRLY9Ws6t8Y85bUzLrq5UAZmRPAAeHKWRPchz23TT54",
  "key14": "bTyNpJPVXXJtqxdD3sNwbDfjq4Jx2YfzSJ3qpCfywJCf1hxj2kZ4GYoR6sdp8fRtfY78zK2gBhsAK9BxLaGmcBh",
  "key15": "RQ3Z6N64npD3ooRyMpxbjMbSFJiqeksUffPDTMyt4SZ7cPRsuoQiEzL9PNfScVCdz1MnsGJHYm9j6NKL4SEnJv5",
  "key16": "4i18BdpFeEuf5pgxr4jGYjQYRcLHtVTjaf3Fh5pUzQn2WD5zqFNytoY7LERbLdCFAUXnTij63YQEpixqPYpZ1qt8",
  "key17": "3egtkEKR1nB4X1JuToEBChUnFMeKNmyAL4jYzp3FwAti5YTNBLtF4ADv9aELSUSATqq4y6y3PaKWizXHU82yG2oH",
  "key18": "QhRPmTC1Uhqj1krXPiFhZQZQUPKY5yX57T3qgS2gXSbvvDhWs3bD5or9SCaNeV9TfSRLnJPGgWAPQ95QpTvPMXb",
  "key19": "awMpFSJK1qbLuzmubfmBmpvWEcTNxNoJ6hzoRNbvThG5SHWSJyuDgxf4VQ1FEr43EY5atXe285Fys5QSzrByStu",
  "key20": "4Z61HRfVp3fmxtQCwU1TqXGE2CZrq5HvZBb8v5871uUmLetAUjzLetBKhtG9rWuWaDyuGzG5q8pSjKwfmYYxAvnE",
  "key21": "pPzr6d6P71i3jwsAugHBHwAzoL6Z2oYvRiJuSYzKVjRKNX1ZyLXziH1sZPMBBoRPU7RnYfmLCL8TCHhuQf9U1Hs",
  "key22": "4VULpZzCvMyJvGmBGP3HYGQQdxeDRrfFxYfCubWFgRonbVnFjXAjfM7H9ZGebwDJYgsimidmVCey9VJTAVosyQrU",
  "key23": "5XF9HViPcE5rjzh8V4pMA7ZyGDjKTjJMeL4SeePHdWpoJLjGoEG9tfVzHm39NABuM8jTAHQkGgE8tyx7qjx9EPLq",
  "key24": "3NKMu11ivmhd4sJ4gvaFJNKLoCKc25BpvSj5E23tbpqMs6MzXQbNX69efAhW3ozYGExW8g3bHpqVLsbAMnMm3JBe",
  "key25": "5YyP4GhvUr2vdLCsoRVGduUMJUvksMXWQLVw81NgS1WYAATdTb2GBqtkD6wrMuVdzGZsm6dEte7o412dPP3CwHR3",
  "key26": "4dh6Lmn2Kw1teEGXyjjYsf6FK3MvKWgaFH31TQgjHC19cTLi5kQWfWu9Rmd2xVTY3PcJ9d78UizfSHViwoMn2TmG",
  "key27": "2LqtdDrs6zyLPe1i83hRNV87gZgNXt8Lw9NjJrhyWWvqEYMyoANAgf3sevGQd8seie5PUW7cvdXyL6PuPN57NaSV",
  "key28": "LbBgYwA4c1fZEmZjaKYknQTcVarBCb8QPV672ETxgs7kzoir8th7uiV3oxBM2eJUMQhEfBYV18HnaWADkreqH7p",
  "key29": "5g722Gev2ihmvVvUgYvHLZbUGo6LwjCJkPiFVQ36idBwCR8K35ftT2hrTpKobXAPixk4MfWGQ1uYikyCWaCDQskT",
  "key30": "5vbq6SodSVyXXwKC3aUzxL78m3PbMBSGdrUSSpTUJm8d5WN1NvJ1jy1SSeaHmxhLzg8KjUnjX2L88c4kBtcXMmjV",
  "key31": "2z6sQ81ZKP6PAhGKp9Tdgk5yJyDYi1FzSj47iCXTcEjhjqDNqaYyxZSRG1iDzrrcea545tMSEpXYvMNfKGMh8PQ3",
  "key32": "t9CWGnZ3hnVo3TarYF4tpw29gJ134bmWs78t2W3J94A5EUsJRJAawWWcSAW4L3HGNuALTAWa1A48fAUPtHZyB6j",
  "key33": "4T4dpNiPSwMvgV5WH81aqgtCRUsoMKwxXcQpetJcah2fcyoXRpAtYMUVpvhrsZF98zx5PJQ8A66JshCivvrsoVJm",
  "key34": "5oL5zRA5fihJMkBwvoiNSA1Bs4nMJD3nypb9grLDs4atzgDwmcmzTLrx2UAekkxJma2iwg52uYQGH5gun4AfhB1x",
  "key35": "2qfKaRQ5DuUtExAmNHHQiWcewmiuVTXbHGRc5GJ96CEkRgU1potVVDgJRB6B1AXkDfDjVqhcZNiv3WeZPuqsDU3B",
  "key36": "2SVpZAtLSsgwdspMwq9eDm5ojeM55ofsdyqJ8ZRBmQAZcXh6bVgY9borcUZUvZEeFK5S7RwaBRdgX44LZWHmdpWb"
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
