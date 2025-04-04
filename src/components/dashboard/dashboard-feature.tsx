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
    "5e2FwzpeiCvhp5LuR7pJroq2174udMgWjNcqy6ro7JPxMjnBEEgoWGcfgVBEiVfEU8k7CQoTVMwfcbwsFGip3EVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HVa1SX1R83vr4NUysSy3URXCgZstkFGrDfpYABjHtoq8ztK1WMDNz8mrgyvViSGsLkKGAMHM8iVPXY6a2tR2hH7",
  "key1": "2Sz4VX4gmjbaNGAfFPWtHGFk7yfZ9w8Mn3s5zmxkkhZs8w1ESZpoAb7xKcDeR7sGSx8hRULZLiMfsAs8fsW3a6M8",
  "key2": "26pZETyXjs9FEjvFaKBo5nkZz8DmQWaDF4bMxYgCV4HqBnB8DXJYnyBYAWXwZxdbH2DGe29Jjht4z2FToHBQPhBH",
  "key3": "4NJw5dRV5NcmLba3wJtWmQ6h3gRHGcpuzjt89vY6R7Mff1SG8g44mJL1p7w1i6VsVfjYp3hwWvD9Znpw64WsdBuP",
  "key4": "3qmEyh62Y8j27F5WMoYhHMYnQuza5T4gMvtZhjJno6pdi7uBJeb4PNzfgN3SxUdyDBDXjnqEsFijLHdyrkDQFQ3g",
  "key5": "4S6z4d1xNprbytZy8ZNi12WN5VQwUutFrC6tMQzB19NMN66K15FYNx4WEjN39aFQre9c7DD9wFNLRqLHN7x6WsVG",
  "key6": "5B46i6D5Dj83sJ8jEsKPsgJjMrTvxqKm5VoBRn1oV7rXnfsn7CXmdmQAVFoLYiSS1Jg3qn3c7T98VSZ2yrLo9u5C",
  "key7": "3om8Dekq7MKhn3VFjAxcoMhYxUiGq26z2M8DZRHH6jh9Q53evxrrLnLdw31U67xyRbQm3WrAgYNWPvUwV4dHLuxZ",
  "key8": "22ovaRfgDestsgc53HkcGKyg6zmWTYntkooqbmR6umkyWVcfGaD3PPg7tpGdQw5QSQqy2pFGqxXrTLzHSRfHqo2y",
  "key9": "5w7nKG155RENqRVUSjbTfbVh7afstDqV76zchx4ExvJncmDY5mXHHJwW8sGka6W5RVTsVTCGEGmGz95mYzKyUaH2",
  "key10": "221QDhPwRmhfA57uaEWHoefiAdPXTehudWtowYBJVnJoNJkigNAKnL3FMM8nciF3YNwAoy9U8WN43PFMxQbijVqw",
  "key11": "eVhZn6h3xzw8M1weTFL27et9ugCneLuvwzwsqrjvy8zWzC8Nz1c9zmRThYvhKwNLyk1TTJgJiZDWoFYZ16F2b3R",
  "key12": "4U5BgXDY6r63C2skr5to4DkscRrdgqoRy2c5bFxXmhgA8ez9WJcEzACUHgnCH1Dc7cesAJg47KUbYJDJSZzBD8uL",
  "key13": "3tk3ia3Lh2N5tAHNzMFEvxTQ8LsGZnQ7ZUekdJYxyQ1XCbohg9XDEfD6Qpsd8jDUPRzdGAEgBesLCMrXhikXtC8A",
  "key14": "zMoajnho5BPDRUFpzi6xX8tGMSmbsu6zhsDUPvLDhpxJaCEJdYLdqjt6MEx8HayEP8FasaMyfuuppwK7bCshj6o",
  "key15": "ECuMRoM285WcyrhHjURKr4uPd4v8ZRRJppFQX9GYKa9mEYXqUD8w26cRegQv5QWSppvb1XjQqkVRhS2eRhhtCm8",
  "key16": "223DpSV3zSBiq2gcrLccX8JcWziBwJxas3uFY8KCYrrE2zXeYaLARJtoDSMByxWYqFFLwQhPLmEu4Jzco3dfGNqz",
  "key17": "5ksuPDZnA5Xgk74H83fUFJXdpodYQqsKWWJagRkaUpnPUr3ZSKSewqm83e6jZM2AdiwceYKBRqxd5QqXKYUvG6Wa",
  "key18": "4wg6b2vrMBECqyhCgLsVxawo9Eru3J6PztqqFsFPRuYvv2tRYqLnJS1dRPJwHy3CCoLALjDc3H8r74nJMZukAXJa",
  "key19": "5mX4LPNQScaR9g4QuKEPdwUYBTQKstcfyjYjHe2F8WQK3HFZ3a4TNKxWxQSpuvwxCYxw1WKwMB1kf3mViTdnX2nt",
  "key20": "3iy1F5s1tJmMjG2hoMtP2HmP55Gk7ogSRjfGMhrv3GzkJQyKkEj7uM2usnM7DHMTvcGfKMNrRdqHT5f542bqT2uN",
  "key21": "67M7jgwUATeURJcJwKXGFN17fPPmqtMNXf4UXK85p2VMyP3xeEorFXcLoQg2UggLTygA51ZRSyotrLEj9NMERh8A",
  "key22": "4GJf6mAiCUSd2dXKHhFoixE4rX9BiYUrHT2NNUjSyHQzSwTyGMWFZH96XKauA9fzgpgQWQLWutbWiwxeKru8skiS",
  "key23": "2NEZVrcBcFoLjJZgdFw3Qe19JyDmJT2NVL6c88e8E797qRffjsaR9stuywSmn5SiTc7dPA2J231ZvrHt3yK9Go61",
  "key24": "hqQ5GtSGzemV59abDumhz6ELdSm6ozBGfz7fYpdHBXgxnBTMC27W45tuY5c3MTPAyw9GNVtVtGsaNDx21PmWKm1",
  "key25": "5psLY6tiYzezhNXaXXtYv5kV33cSmfPVDsytiATtEave8pqBuoBt4EiBpcGFaApHod7Pp9Lboq94pXyM8oPbRcB3",
  "key26": "2EHiKcLQmm3Ai5Z7C1t1Px14AtbBjcuwdFfi8LCLai4CuTu6ngyukd695C32ZuES1tod1hWVN4NVfV4AFM6zUm82",
  "key27": "2pJaeCbWasraQdWp5wEUDeTEeMhp8SkHvwKagz4DRc4PXAeZK6VH9cE6NcWTMpEeTVAfZfrHWbTUJd1kAGZFzmCj",
  "key28": "2pRecXCwMwBaVH4VST3vPnnt4ez7viWnA78FqXMZrfqWYDDUp26bR4j2RuvrEbg1Dsba5BLeDCGUDg9iTbLJFtTg",
  "key29": "3VrqLwzSdHgqqfwR1f2bM3CwEM5fwVRFdtpRRjkrG7fas6eZ5EedRMN59eHKEtXj5NLj2YPdiTu7HpiepxtKcmY8",
  "key30": "4yWXZxkeNjCQ6qAQfhxT7x6t6kktsLAjyYgAjQSnsS6hzyd15ANyaRLYD5h2aF32N2jVsRc19rrF2ujb4KVkDmtW",
  "key31": "4xkE1JCgxYU7iJcxRNrwu7rtnj4nAg9gvAbFuqjNUHK2oSykkYuPnjqaw8ddoZ1Np72NF9so5yYF3eigjv4UUydq",
  "key32": "5SYER6CayvgXLewCDgkqCPYrBRA3rBZpvvg9XB3yDrhT51QqL1JPSbxg7SeWGwoMfFwZXndEcAP2iGw5kkzsZnSj",
  "key33": "52C3LuvPfWHuuUYw1dJcva5ihbfbRoNYFxRGCAzrHEXCMWmTjfBNpxmvCuxZMHh9agX8sECiVDuWLvDFpNvZB6wG",
  "key34": "5oxj2Jj79MzsP3PCWNh2xvsm3ESeEJYhW3KaNaaYvzRSPBUeEzGGoeQwgrtf8KR9ui5Q1MqmXjP5XPdWpX7oHfG"
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
