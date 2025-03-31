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
    "3DS49SA7WBmNpmdq4fwpaBD4L1KRF8VRHeANBAewWMEmEseKDxvpd49KyakfQ4u341HRERsDLQfVfEyWUmfAh6n8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E5UcZHs8vksm3mvZt1ve4mhjpD5FjEkbYAKASJJjEKfWMukZnw8Hi4ekDpY8sC1eT8ByiFrt7pq69FytYTf29hx",
  "key1": "2t2xQk3xVuCACkQuM99HLFhi7jUPE9bANd7DkBb8WTcZXD1Leamicz6qQ3EzAvU2HvZov2j3Cs3ZqaqVZGEc1Gyp",
  "key2": "5aSq3hiEcUyfa26fNonVsgWegFgvJvddwfHonsrnScjPd4yNiAWBUENxLr5WyvYtN7cmj8zxaZVcVjyC1hnAPQ2Z",
  "key3": "61tqad4XAQgsBTsNfsSWgSFkeK45PWkdqCbMBXUf1nbyQHbh2z2Lcnf62XLE4GdQ77mLCzMDqXNbof5SeB81FrpS",
  "key4": "2o8nEXw1wxRw9RGGHHdjEk9FQuxEQ5ZZ3De1YAXPTaMobgt2w8sm2gqwkbSaQjFv4t5fuhyvFLNSVucx2c38NmvH",
  "key5": "61BUuEP2ytQcgwc6aTYRDmxpt2ck7Z5jPhKBjuzUsHdjjU6TVjxuaPQQgHbASrBuHLyG5YUhZp748CdfumgVRR3C",
  "key6": "454bnNueXfkuymYreBASjyPPAFzcienR7cVPPHZhKq6PCfCpb5eDFPGQeoGaBpoEscNh1yfBwDtisYw4aquYoDwJ",
  "key7": "2e7qnevgLx4MDs7g98pzDE9VPYJf336NLFNLikbXY7auUgy3cfCjJ81KPgtattpWaF2sDChT9DrwMxWfhHAAZvQp",
  "key8": "2X2xUi4Nkc7UiYASe4HJyjvu5jiZ5v5Fh2Lzp5sYGDZHde5qh16qfmZvVevQhVXEuYudCSDJwgjvudsdH2CFvywn",
  "key9": "4bhAQ2CVMvyjwTNFgctuMcJb8Kh9WfEjTP9m1JcWu4HNt3CnLbs89C3L4FtHJaggnX2fFp5Ch3pWsHf9avKTq2dy",
  "key10": "5Vq97mQ3iVWvWEHniX8onvECCESZyJtJt94cqep5SjTsHbsbnYq33UppCqnETvMV7KQDv288ew2ZRsiSdYfDuQm3",
  "key11": "iqnfEA6UsSA3Zj41s15N51sHHZdbe6WujafAoj9aoqNSA1CZgcLfj377SJ2LvyrxkbB3rFYVJfFPu7tciDv4uMo",
  "key12": "DMq6isUbUFttMTmKSPwihHeinP8ge8wGGoknhHD5UqZsLCwuhCG9rhjF97NFuidgBb33RNtDKXHXadncHRnmxj9",
  "key13": "4GUKuLd5mD8gBZPeDXVMQvzwuNqoPSTuhRpHtZWkZRy27RxKNYuJ8g4NVRCeVbXFB1teZ3Eo1dBNwNeVhKwhSxay",
  "key14": "2Nh6eoPfVyRSdr15PYjLT9Hg7CPmbG1SU7aaLgjHhdbmHL5wDJUd8GN2kjbEN5usDV3pDgPEey5AZMAb7UHWJkEv",
  "key15": "3mSsGMoAFVWQ8eRU7P6NMdCtW4tAVxLkWgkj6GhDFs6ezg9WyopeL7EZJgx6WDvveudPzgx6amEscKwJACrHknxT",
  "key16": "vKjdomG7Kd3fUevoRnH3f5zFuh1JtGvNjNs47FfnGcJgNuTSVhdwXLDMgdY5RBDgATcFQojrv2cyQ1yxMnynHn4",
  "key17": "5ecqRx6BFureKujxbpxeukqMDVqxgLoZi4viuzNgc4B7R1k6tLnSRm9XPsvzUNQxXzH744EY2HvyLtHkHqHT3jFp",
  "key18": "4fbWYKKY54K8TyeEBsqykYG9KrBfR9mRbfAyAVCPpozNPY6vaL5ZMP21ro59dPkcfsaKMhvsAwTcoHnzymXiwUsh",
  "key19": "3U5MPi62SrkMe4md5qqdWve8gMPSN5URE9hngiTZySo1YVcDR2iaxjaNuz7ZDYNFhDfHtmzcHDUcENGVfiNYwyKM",
  "key20": "5T4NpxjfS25TDta4SpbYMHdPMaoQ1pyWyqBW49osJweuqx1iX1qMyHzPg4pChXEx9kLLwPZo8XsLkJ5Vetj8T1Nd",
  "key21": "3FSyZP3HCoNBMM7mgiKtznVBQcj6mXyLqorTRkQnKqYAdanaJ5ZxzSn9NyUsKpkmpZNxoJLGHpHzRvNJi3Nv6gLK",
  "key22": "29VJMu8V8eK4gmFybrnFJLAMZb1fNHyJV9xo492AymhgWGUEWWPrNwk8pfL6NEhv9GqEoJ1kW3YGr2soYqgHwU1z",
  "key23": "2d3Wai8i9MXyuUfwe3d92A5Vkp8NEdwbtQ8NLqh3dp3MnFpMopkdaRYhKt7cNtCH7nXFuXQwhfLoCCkNYVSyNqbZ",
  "key24": "2nnvBXXqDZRDTBKcL3KxjoGjaHmDUaxTUA4zAwjxyv59Gbr7DoqJvtAnZeLhBYY4HCd6nrNJ6a7UXjEvvAVt5dG7",
  "key25": "445cvoPV8ywbEcL9m7ztT5o5V3GbYdhh4FsU8rz6MoozwPua66aAegVL8sHKkzaY5vMbd7TosCFD4oSvn9hHeUKz",
  "key26": "3GRaRcibxeKhnBx9Hgbp9rTjohJuTrTHBcMgTCfhDFDkFC58Wvbj3eL8kyFQU4Ug12qa5GA1M3cGzeTWL4q8jvje",
  "key27": "3sCxU71xgiWkc35QeMsfMXaz4ixo6oPiFiCaXj8JtCjvywXjtun2YJ6LsxbjmsFanhXALqGYQTcgeNytNgcDhvui",
  "key28": "jwzLrhJbHtMKFgXsgqUH2uJriWNjyvPwMNXjDMZKTQE1vWHoDqouyKh5JpdqAuAm4z7A7MAjkegZxtvatWZ8RUd",
  "key29": "5tAN9JR3JyWNdGt8YP6ggagAj9b88J4VB9tXmv8y2zWQosKGGkNV3PeBowk8d33KpKej6PgrpU3xH6rUYUezWCXc",
  "key30": "5qCw2VhMmKtBaVhxpLKKotbftXxwMCy3cXLNTNojdWSLugn2WVz931sxUFJHrznW1bs8xm6g9bYkrLTqzu5GP6Ng"
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
