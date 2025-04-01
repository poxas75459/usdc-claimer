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
    "xmnG6rUbFezUGWZkjCqosXVEih3WzVRNoLTQqwXTj2b3nF6YSPn6f9FddJA6qsqAwRS1DU8TWVaKgNdT9cms1xv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27pjHWVZdHv9eswvwgi8aKntTXnPKDxx4sBeFKpdvwUemhEpmNWzuE7bEmAeq6WSzMFW9Nwcppy4Ksb451DP7zvQ",
  "key1": "54eUWUwx19Hrjwz3rw7gQGG5qL89Q2kpXKqF9Ph2sKkSDsbowqhtv324yDsLap1RLtN5qwdadBb8yPeBMQ8RknwU",
  "key2": "5JhuaoXFbxpyQBxnZ6v7LAcQ9QB7iVsHqPdRP77rxVHvnGx2Tx9WKMyWZk54A4Td1cBJkte8sgsDEz2rgE6YwuGU",
  "key3": "3KzBjfwoz6ciomyopNiK431Dy6JriMvv4RuDM7ExR928yfouuMy8hFN6Vex5qJknBPHQc8QudTV2xqGyrpCggdWd",
  "key4": "2GFvEs8rh42oMm5Whex6GFDcdU1Qge3Gh3irzXRY6ho9EHvrSdEz3CBFPzu8iwCt6sMaPrcU6RjiNSHuNtk2igSd",
  "key5": "3jwx4sGXyhDK4VMoYMHjgVfNaU1per7FXz5xVH8YbDGXCrtzsW53Y9JHeWMUxVWH6xAGZaNLhKE1ErrGHGKW8Bt1",
  "key6": "558jiQZgTU7i6BaP3mExvDUYCsxFTF2tFUo7PUd8Vjvx3dwq4pLLgpVQFLMmCs3nhfYV2eMnBjshE6nGT9KiLiJ1",
  "key7": "64N7edGJdCrnMfSeAq4GWzxurKUpaQJBU2eqnwYAtUUDJmfs3MaDpTwLBBTtzukqAAJ9AXcvGK2GD9rnce9H8u6K",
  "key8": "2d5MDXVkZFZUUCe9M4rC5pjiTEYHcqCcdioW5CYjvS168oG5v6X34Mc3ggQyoo1JPd6fvuovENeo5F4HTYkuBkZS",
  "key9": "3MxdXUBh3UVZKunLyMA7y2XQ9bDw3cpYmDbn8vwo7edU27XKcJN1tkzagxxmSj3xA8BDgNZH5nhxPdWdzjp2Vcq8",
  "key10": "4k3nHECYcJoXrp2BJrpj71PyQJCmmVdC5bGoo3xx1y8T3xyTxEh1T539RGi6Vv895MwUL7vnxo1VVjQwVyzaduXg",
  "key11": "4kLJiK33MVgTzaYSHUnSpSjnDP4dDCyBsgU8PnsQ5wQK26SWLRFfzSgP54Gwm9FGubZSqxRQNGhzxqP22rSHcT3k",
  "key12": "3qw9onf2XkhwX69WQcr9gmpbgD8KqMKWUSHWom1n3hkvLE7s2K1nDT3zFv2SWEcAvvhK8qzv16Qx9vLvuyFYfpS4",
  "key13": "53jAUiQ33WDzxWNfMSNWUezY2kX1rEMga57VEp7ndZMVtdLo5NbUiYs4qeKzuk5QEiuZFjYVkoHEEd5XXPBzdnKN",
  "key14": "4jCr7vavaERnmDz9BGQj9qwbFV2sZs81wzComtt4wBY1LCQzmnNtUgzgqpQ7wd9zQNXMdeNVo85a4CZM4TgoHTrN",
  "key15": "3ofKfXX7bmMyALgnj15NNYyRqcdvuY5pXdcK2VNhijACRtDd7J6CK97geMa8AN17CkyaVzCthrbMxe2foJ2N4tvK",
  "key16": "4BN1qJ4hzaDhCSkwjSYRUrPxLaGE2SnGLF5q9xDqDFZVriXejpV2JpX2zoxS8foQvadoGC52sphmESnFLqzyXRdn",
  "key17": "4dnWL4L8riBJ7NV9WAb3QFH7Th6okCXQMmVgs9n2NTBuiBFeLsoFTVEkGAg8U21HWMjut5x9CvgH8XNHAtxc4Z2m",
  "key18": "4MrHFJFT74t3ma9UPGZpP58JyuZvPi1et68rTwp4AfiscvH3BqGmdLAhvScN7VkxTniTtTdeW6F7XH3LNCzLR84R",
  "key19": "3SLMx3fCgCUXzZpjyzNhRhqBogoEJU2QijWuqsGwgW48RrxWDogQidSJ9yWj8fpSGNF672wMUx4X14Hvimaj491f",
  "key20": "4kTyEzDP7Lyi8ESTkTmBQG4fAsaSvKcXsmitx6jrwJZMknJvSWTvNu2WprgBnQrL7ks2Lw87mhEC2zzUGnf5qCWt",
  "key21": "5WLagiPMtgDMqi3kiNJ7tSbS5avqZzqBKcGp3SRHffL6zesfz6GzfH3V4xagHW99hGLLyDrcBM1i9T2csErnxhvr",
  "key22": "2sRCXyjp371yP6eL9JcprznMvDd9gF1XYuvoFzb7skBsHpLL4EQVQskxzUL5ixCk9xtVLsi2DBDGNJcYci3Wsbaw",
  "key23": "ibHc2Ms3XkjMdNoG97vntdvbeAmLX8Ws8r4NwZbMofcq6p4vGdWJT4Ks2w63StodyK872rGYY9jK3qzZyTD6bVH",
  "key24": "1145sMhYFm8SrDzyGydc2nT3Gwqnon7eZfDMvHfyLnRHkSWtuMKvwqJi2f1b6REjfmWVuSEYJyR87gjMB7u4nyX",
  "key25": "5Q6CzRxeM2s18ecRP8MWXKGnfgbbfsiaVbpjsfWeTfRmTdEUsngeowhCbjHy9Vp4r5Mam8Gzuxgvi9VsuGYUJwGx",
  "key26": "54isGN4Q3VorAYTFn9jPTQp3nAMdDrJt9UtTn7cZqoHfVkLAaGSmNT3Yvwr3LnaXbwYjhxsP7pEUnAFnNdnXkwMT",
  "key27": "wnQeXZDJCvn5fR9yjCq5fsZnBCNckuGWBT2ajKMRGa3Qom6jqFFGyxyRiJtazcNFFo2D8u7oV7gHwBpS913xPwv",
  "key28": "22A9LoaSxVEeX6ie1aYGyhy7j9Hx24TWiCNJBq19wicYdpYmED35zsMHWMXFXRDXuB5ucg4r41x5BKKBDq5uyh3d",
  "key29": "25RTx4gKjoTvsDH8VkvUkP3pLGHabZ9Ai7128AFJj4o5RAtkyD9sAwGA1mDBMDdBQQKZivxdwueQXNUBnMDuVXna"
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
