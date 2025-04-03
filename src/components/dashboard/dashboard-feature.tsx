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
    "5rG3cyNkC9kAKjbEiAmKTA1L9BDwYe4ovfrWCX9fsPcYLtdaEYajmA1ifbseqZPWsr3kQj1bTPo8bQyKpEg2XCEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VX1ggghG2HUEHZXCz7BhrVM8ejNgiM32gwNWUd8VrG2h6TTy9RAJWNdAiP3ibus7RcwFw8wRPWQnQML99JTc9qh",
  "key1": "646afKbfwpgNg3MhgA5qoNx3BGbMGoAViD9UJJXYQEsZdcXzTGSmL3r2z7cA4bNyE7vXfuwQ2TibiYZCCfzjPHDK",
  "key2": "TteG5L7vkeKGxfAPQ2yAmVb5UpW7K9vP6A4TezKsG6e78YigmhzjwAx7eNYmbuxusK4ZCfFu3qKWs9TBhQaLxtm",
  "key3": "3veHquFsb4rCt67nduBeZP6SGsqCM22NTKVKbXhDXRprrqpq7KJ7vkegYGAJVHWa8Yg167s3YDTU6rGagyLM1eEG",
  "key4": "24RyPq1b2LyrevzGVzdGme8tkzAtNMzLSGR9K6okjuU4pjBVRZC34UpWSq7cRxKbLsVhzXUuesZYmeRVCKZ2gTpt",
  "key5": "5NSPpGFejQRMoU3h9EXmBAkCny8MFDsFSMSzWa76UWUzjoDFZ6cRLqw7n2G5JXAvWdhCu7xKLQDGY3XTXbCyGJ1F",
  "key6": "4AArVz9zNtDTYondCnGp5j2hLWMYydMgdsSL3tbHkRRX8yzyPPc4bHusMd5MqMdFbRgd7bCSx9PgbjSKnQx7GmjA",
  "key7": "2Y3T2g5CZgFbR33gymyRac3ABAeuAJzR4DWEYABGX64an7myuQeps4XoDhXmGLbfnaoM4XegCRmm5EqqBpYHjxiU",
  "key8": "4H9u62oi7t9hLh7tzq2uFuTsLJiQf2UJVYpthCqMAKEwySZsLqepCVLvgakMa4FoaLEd8WHZFvaEu9X7WdjKNPuv",
  "key9": "3rkbuX4nnfHthob8iEigZLd8r1uneputAAJ4nPW7BNswpWEJasmuUD6P1N4g4KxLjwRAfWDuHSSRJx9U5drDnSun",
  "key10": "63FetzgRd5caoVMcbqKZj35GaftcceLv1vqegYyagjvkuvezU2j8mCbVq58m24pXB7kNMUu1ohhnU8ctR8TYrnys",
  "key11": "67gtLJbQZq6PLr5yEM8o1FqiGKeTEmAqYYjnGu5vNg4FVyomqx8BjPDFQkDxLKTafX5fGESsTTBZPNGwNvp8rpsF",
  "key12": "4gdPb6Sbi3sC883qMEHzQt9GnAgQKM7BK9BS2mnk2FubugfPUjJLjFUnWvdyDnQhjMJemxGnUMW6Bbu7RyVMukR2",
  "key13": "3Ewva6CG4GmpvwU9EBAuiVKzaDeDyt5Z3RE3GvTw8KmkCVhBhfHziTbpPhqHeEjU4cAkfx1DVRC1NUUJPrioH8eW",
  "key14": "ycVd5JP4GXp1xAPJ99KKc7WhMDVkAmdKSkR4nHUWuD2WViw7vx1wLCJ8z1zWAmrpn85rUsTWK3koEaAdpZB25Sx",
  "key15": "3E7GqKSc2wvGTRTDS14RWdj6GA75vLBnADktXTwnrxdA8sL1KCGBBy1EG1DcAYEgGpwH1HzPKXK3StqMzh38ybvL",
  "key16": "2ue8CvkBtya8ZXyKeueY1SGjqWVgnrRL4NbpYMi1S65HURspum12yhEyWyJbX1H7p15z1pLRvGG3pF36qXkWhZQv",
  "key17": "48ciNy8vcWwA3zMeHyQKaL1B28j8PrQPrwKqdcHz3kUoLUsTB5qHEirrP14wxzPgFUrhHeyvZKNfYiDcE74aUTdp",
  "key18": "poysnQafiAMdq5DqULZTEQJvgfc6coy5CrdxGA1HzxmcHhvEJc6ySfaaNRdfqqgpLL4Qdi9Y1AKhEwYNxbJkZh5",
  "key19": "YdEgg9s7oSG8NWFR4dXwdMnaAVwowwgB1mpxN9naC6E3vt7pbstGfo5n5LBrtq3REV5vg8LaHPychFFSdkPwoAE",
  "key20": "2JHne4uikKbXM8K9q3HBQoQuAsoGhYcbWzDxRQaY4mwmxvg54uWUty7BKiRuxfDhmZMF3m6EpzYtxyGCPQHUy1yp",
  "key21": "5ak9hNFcTvf5Vnx1Qtsf8kKqX5UDYkRa2Ghauxb2GKLNnpuKSmbWXqeNbWgEwnve5Fh95qM1rhg4jT79T4xfkjoh",
  "key22": "2M4SCecJTGe5YhkhYQVBajXjDqx4uwEUNYSEtto3kfjHVb4fExNVADy39vMFFJGqLxeuPkx3UsHvAdeHBVs5MVfs",
  "key23": "2CQndcU87qf7gSjkt2sj4uKetQDsiuEvmA7HLSbhDxsBDYCYkABLaAFWFbc7nSt2Y6Xbk12f5xseCZg569DP42by",
  "key24": "2V5xsYZtvXh5S1fq3AKHK2DgJJWRytYHv6mqHZmZyPtXz5zp3uLmV3Hj2CSpD6M7AMMHzou9gbVa5vLGMmsuKtDV",
  "key25": "8NAGwHDmpn4VHgxDTySD8R2tv9SNi85PNCDSid6X4ypBKPwkYM9bM2uBYZQ4in1NGgAU4iYXT9LteFcUz38bR5V",
  "key26": "fJRjMQqPyLPGt9RFTLrEfTtTXNvCU3DUzA2wrFiiteYsxjHNu75TooRAG4C69YVvK4j55DmszMGKuyQHk3Mb2vi",
  "key27": "zWagd51NverbrnB2832LyALw92RwqQHwAmJ23uPePZ4Sfeq9yLXcFTcwFSyd55guWqcWKv1gT8J19yWsVjyFkav",
  "key28": "YBxDMXKSCjjtnW9QFfaY1MJyQFYHfPsptdFF3pcqn7Ti6FWd6ti1UhSDZ1gWPocqp4YCLWZN6gk8PDJfreYHwGa",
  "key29": "3V4Ge6XGzDqg4JLiQNEzqk1m5GSH5h6BmZR8xXUKScykmzgdPPioi4jGzCWvmmApzVgD5vEaamg7kuN64oj1XG9R",
  "key30": "2f9eBCHt8gcM56SuxqAjVQ5fAGjZg6PEZJsGb3oczbcKyuvHF4QW1ARVyenEyFPybq9uDce7RryLi7mU1QLk7Zjm",
  "key31": "5NH16X5SukxHYFtciqMsD21a1cd5oEmkb2TDA78ERp3Te8pb93wL8cJduyYAax7xcQLKP9L9cM7W9AtxyBhquxyT",
  "key32": "5DbLuYPqPdrLDvWg7DG8mKmqkhxAP4a3w2iKMtJXE4FZtMdmXZhZGF6ifcRvKGa8D7GboG8xJdNa4gnaXX5WuvJH",
  "key33": "2dv8RNnYtqLbAmZkWP1VCM7X8sGKxqHTEZbxLcohpEexcTZ5N6JiEwAN65Jcb54AdTinJm9YcAfUSjd6m2v4KgMK",
  "key34": "AYgnekyKpYkzQ8RSRZ3r8en6NNtUEYmDTdXuYDUEiTgfkQ9h3QsAgmJERu7dbvdFbLQToYGyB2R3QN3cqDVe4js",
  "key35": "5VoFAKZZX1Z73GoTVBw2QSdp8xzKnEr6YEtVmXMWTpBREEmm31HQp657sy7TWe8BsDVL2A9Phz8sKZ3AQV64q8qf"
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
