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
    "34nCxnBfZQ2Djp1WByRqJ5BGRC6gXB1hMEHL1ewQ8fzNj3NiSkre3S2Dvw9VRWjbuQ3VvdFqXLLSgFWyug2LUJ5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51pfjJgfwyJo8qZMhf25nkgJDJoESoQadZ5DdPAkzr1e6kmeg7RzuBdUdAKS26sQHCVPcLa32MnmjrKq1VCMGCK8",
  "key1": "4hLEgP2aMigRSfGU7Jxhhg7YSgu3fPRSomiH68KbWnB3ETDxabMnp8wuvNg9vjF2oc4oQWr6bDfQEetPCxPDpdFi",
  "key2": "JYZjnB9FiekCfF6CSwxjf9ERMB7kS1qUHdn67n84ZuLjifsSBHtwyYb6oe7skR9Ta7pqviQcKSY6GSQ1dSNqLTj",
  "key3": "5F3RndsFrVjjUqeVuysd8mp8WLjEH3AUT6iaz7QGVFKbxs7y3TU7EC5PEKa5M7MjNsEX82dZpDHSMykjXSPNbeUN",
  "key4": "5bronjcmZRUaU4iQMa78dsnWa41HtqKBn1tddZWhyx85NTY4XUgZ88MEucQLYceMmfAYNeLtSTbWmjN6kRZaHGZH",
  "key5": "2ioTj8LSFMyxgGtoptPKoSVA2UyPMRhPzPBjEs3StK61H8EFUG6xfUpYGpaYLRYVC3xkLSRYKRJBBJEAkDBSzmKE",
  "key6": "4RfuQaXsYYMKPVpd5RwjQFLdcBUgjskqg81TfCGAMYZJyy7Myq7UGnhJWMP2BMPbZtYfxsMQgFN4F2e1JKhyBohF",
  "key7": "4965fAEZE6dt6Hhdvxo3Pw17Sv3Bat6WKarG8j3VmbhSKmPpJqb5vxLUWweYuoxmBCreqWrGutf6RDw7PTE1skkw",
  "key8": "tbZ5PtqqHmeuEQMFd9yuLqzFpBgqMpd4JNfGqjg47oabCKo8oN1AYHQWMobhtrguRU9fwzNUWX5waarLh5AyTiA",
  "key9": "4WSnCeVWACW28svx7DR6oQVdZAhdMz3LW2UT4G4SHY1Bd6BCHgvdQN5QEZ7H2DhepY4niYM5ocXhRv2jtL5hsHLN",
  "key10": "3Ez6tHr5ew6GgRYN9tQML6Q12WqSdB7fsXtmqvRDmhyBiskf4z7oHRaorN7StNNzJPSuZP8mrqNQWifmz2TgcqFS",
  "key11": "5vuVcaZPkjs7WiQL6hHQsqkPxzBd1Qhjc7uxPhN3kC5T8Jco4hspEYa1MsYAUgGwW6Zn6ZHgpvRmi6BUFZctQUCK",
  "key12": "4VXx4K2k3SvoVAzrNvnJAxohxVXi4XytrcdC6pmjHQhSdymZdR3Sd7bV9Xadd7qsZdTSN5DuKQ7J3Gyct1pqcWxE",
  "key13": "5P8UnskwXmrRH1ojMVWP8gbtpiqZ5D6Ly6RRCmk5Gc985VgGWp8riUscxyLNvBCLsQTDtpfjFRdSpRAnzBSENKEV",
  "key14": "2eNgVHfJZiNUdg75XtxRorhJQPYLYCLfQEjAziSforGvsiPb8PGMhYEJy3bBufVki4xHrosU7Agt267xfyMonorZ",
  "key15": "2Uy6FMGUzTWnStqLvWio4fPLToMBHgtsVcUW2GeKoDb8CJsJEJ73tq2uW52KzQeSumSeYdbKuv568chUWtTVQoEe",
  "key16": "4yRv6HYiA878gh8L7g1bsquJYgfuWM9eJcnnrdZTDB763pZz9ySitPKFb9Rd4zZMiyHiTSsreHRkqve8UWTJ7yFJ",
  "key17": "4jqXCK8NUwhDZ9KrGsXepSJscwnvDWuAcwobrdTwR1Dt7CQJC3FnCAmKQPuZ9KkzcSwfcsRU61hxvKk7P3D2ty6A",
  "key18": "YDpkSYFbfetnwW5WdzFZP8vXdHgaMS2zUbBo25rDFEDr2Zo3NEh9ogVsumx7cS6SUekn9PrBCKqPi8vzY49Cu2P",
  "key19": "23u5SCs2tK57pvKhM1Pd7qV1m2QWDQHr2XzrGNgDMRt1YB9qn8xkGu1swAc3fxxxqWGUvsBMLpY3Np3TKfJyV66m",
  "key20": "37tZjeLvfKXF2o94BVs4Em87WVmE2XKQvBMgs6KYErQF3gYDNSu6jopb1GYrt7XDr7JapoaXz54XygAeiduFhTTD",
  "key21": "LSBemCX2466A5W5y7ShFgPKDG7CJ8cT9pgva9LUS4UGVVD9BYyd4GBCFdC58kJ5LeuUsB3LpBVn7DKqUoxPgv62",
  "key22": "4KpY8bGDX5bztxxo2kk92PjDXxsumxpQ8uC4MrrUdxBr3pNiHXbG5inmVL7mq7Vw1keafypuomqbcteUFshUCWLD",
  "key23": "23ovViJf62TGYwEiNZ64vwS6oygy23VmLHLEHWQUxHUC5Q7qu7iU5SHbVRVdzufFdgcgw31j4gJj1ipWQxtpyRzm",
  "key24": "w9BbEiVhNA6N7F5LpZ8Jw7ctFrYrHWFsEK9ZQ1m1v4fxZw35vcvA7rx9Mzw7bmUrs52GsvxBbKJWvPnf1JLPWGu",
  "key25": "5HSLpNk5H7qp2iLWkJaz7Bv96qj5np5VGfKqYtBCjgjW5jCgQRJ6xqwJZN7tNoopoVDfQQtYBu8jd1U5bMc1RU7d",
  "key26": "3MS4X4kHkW83XyzMmK1sBG763Cc8HvK14APBkDqy5xJDsNJQ8Xhu2jDA4K6ABiPeqt83M51wArhewxqAuEBmzkLV",
  "key27": "BEAseecSaMAomXm6Fr9Wf5APJuHnfMJgLNkxv7UsL675mTnjeVWz9xi29cAszTkumzAzev6EaTzcjPigmLgTvZT",
  "key28": "5Sv49Me9dM1HtRFq5qDELsgffcwf1DSF6DaP4F43s1pN4DDVopjB2uu63tFu99gfobgYPLkX5VpGjwkPsYZR16bW",
  "key29": "2TULbz3YRWJqtzzXdhhPUq6bj8Sis7tQCHHiXy7mvChkWhDGpBq9E8vppi1HJxTf6J8XXmWrKu84zdrzVEPVcchY",
  "key30": "3Vh4xWHfE5t18QrutJycJe2HyvRDfxpYNsWSUFJZfB1uUjmno5AoNhhitLCW5b21uWkU4sKp5oREHcYqFVrRqBtx",
  "key31": "3P1kqfBJB5W87Hyo4VuLAkxWafehSST4XZHnixmTzhoit63jeHoTuS12xvzYB1A8yjvruYh9VkQqZLyKch8P69eb",
  "key32": "5iLgXGmW1LCbW68YqHqQgbWfXGq16w5d2q4gRYXs8jumew53iCkmxdPQR2fem5zHqSNvsPYmp9MyiBGGPU2D3CsJ",
  "key33": "5gzf9zNu5jU1FRGfWnnEeJv4Y4j6TGWFxsqjcNcE9gVA7PwUYoQtHTmmSD7EhTfFfb3PDDG2dpf5myrWrbyAU368",
  "key34": "3ezmsm5Xjr6GmFyK9szjCF3uYqJiup8AJgnSPUrivqCSWET5w6a1hz8fZtWJxQa2r2kMLDL4hEmVWqWi8yXfunSR",
  "key35": "5XWkqFBqhqtYhuCXpck5gmP9FqPesAV4UkMH5RHwMjX2Uz79vuGez1ewisNBojBDBagCJfEPU3coaVdNv3fjGMjY"
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
