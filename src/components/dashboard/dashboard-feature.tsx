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
    "SsyNcgmirHabJaK8LEuarjaPhvyU4JpDsP1mCF1Kdv7ga7S5DTxedtk7WBjvZzx4m8zq3AeNm3z2SMR7gHvfWtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kjw4GiYU9KS8ivE2HgHwLZRvWFM72vqxE7hvWzLH9bdbSFPSF7BADEUeCn2tWPfkDYfUAZLiT6zh7ysg8b8vse5",
  "key1": "27ErX4eZfxKKdJwcozLW7R2ETU4KdYyVDASatmTp6QPQnua4XhhEJxtJj6rksza1WybSGYdDGLAnVx7Zts44uk5S",
  "key2": "5kScyNv2CD1BXtfZoz8FH5VyyNYGSki82XBTLndj4NPNpQutsqmCbbRABwC2X19F8mVDYkCwRr8RkcqnxPbtwB54",
  "key3": "3JFSNuyTinFyChqK4ERQibrbQGq3WRZUpPVdiwTodkwNVWtu9mVtKEAcmrBV3VnGR3h7jFKVnQ4qYSLWJiitYadZ",
  "key4": "5bxxoFzvSLUbN8UryxtRwCqLHy9SrRvnHUZKASp4134QMkZd22EwD83SD4Qoy2zu8ofhF4joXizxad5wAYJ8XZao",
  "key5": "5wJUUKUTEDhAB7o1JLPe4P4TwDBT7p8xM2qpajJwfUd8F1nUKaqJ7PxuFjsFAyfq3xDdg7s7akrZDmKtPrECKvsZ",
  "key6": "4pWgrs8wqqS3EcXKfSZ32XBKTmkPsTDfXyLxQbAGMB1f7R4rR5Di3LGmpy5YEvvenwJxWAbKqHqqzc6Ei98Ji5w2",
  "key7": "5ehZR9w8QhcoQ51pEpRYiGGM3Gi76oYiFvjzzBHPxCQWhbDU64f7fwBsCdq1Qx1apEa5BNdr6fa1hFwFFeG4dSqc",
  "key8": "5Ect18doJaCENjPwLE5LTWWDe9Snk8VZqWo5RwTW3sJQvtBB1s2wFjsDWZikMxy3DRBusjEadzV7btNQZiF4E4jN",
  "key9": "ZgjCzFTohbWNb1fFBSrcjiVoAjWLdpq5DKMxfXHTwNyfpwi1Q5QvH2PUjncs2EjCPdf5xK6vLi59QirEbpRHiMU",
  "key10": "3GKGj3AxXY2BJNtpnissi8YS7mf7bnupVhGQLNcej5Ak4SsyoxLjdiJybDhCycnK37rT6P8tfpcC8Ef8xaC2wV5r",
  "key11": "32US3yQg5ruzQVMLqSiGPXByZnqW2je1dp6TsfMQzD4Y4TbLXXCFNuWPpiibV8WmNBR319vLBvGshJhtJ4bMdcAQ",
  "key12": "4fCEecVQFoCFqC9mQh62GXs2QV7B8bqaHVL8FjyEm4R6UhnYFDDRbVqASkFVCn6Fj3L7EKpxxnVDDnet3nQrPm8z",
  "key13": "66SxEmkBDKsr5LEm5xci56AqL9gLuoRzSyTgq1kvynx88YPJwycfGiUs9DTWkPJ2x7AwkAu9P6BQvPKS8CG555vZ",
  "key14": "QB9rYMWTATx9RPwSEu2g3mX1Rf2dfcr5LpjYjFhCqdSHg11k7hq65UHFK1mC3LcYgpYGnHE2LD129T9MMeGQb55",
  "key15": "5jC2v8iswEvGeH8SooRGXeE6q2G9fpEyRQ7SxTMTZRyraUQCJ2ECvrkKbeipgex4km3QD8kenvqKFBqLpLTGZrxa",
  "key16": "51WYqpvCn2VNmxApwsX83fo9Y15L1XYuUvXudJervfh8wHd5kRpGkcxR239Ddq4TcJm5MTLHLXGMPGySnjumFPFW",
  "key17": "2N56Tq7mKLF8MhLwFXTrqdoB1MCZnMY8t8ZLc1vDa8wpQLFGGkmVaCX4jtDR5W15DzTKQp2rY5wWt96a7v9gsJbQ",
  "key18": "5enMaczW4dcUY6c4s7aJrBaerjFhCN6jDzo2rTZ1vqr22FEeGBDHnx9tZmuUJnxbMKwmFVnpwTfdLXRGWKD5QhN4",
  "key19": "4RkTjKEh4P2gNWzHmihXHm6nH3VWcyfZ63dhZnzYYFZD9E7XACc5AMbhVuSG4Ythn2UVCBF7u6SEjPVqBn1ajsyL",
  "key20": "4tHPTNCqzhg6GrcjsZ83mT4uUGRrEsKzokahbdW9CJBpmziNAq1y4VK5D8DBXeDXzNAoNo2hshk3pSRoxcyopsmU",
  "key21": "3puFaSk2MUEcvPeYbWPbc2gcGQXspt8BQwJQJueocfyyqmketANKQLtkP49aFvNmLqzEJh7ukZ4vYPSVP7A13G7R",
  "key22": "39aXcZ7G6czmvVufrNwQC3AbJHB2x5bnPBMsWKNzMWy23X1SNqCfk1PN9BD2Y1vTJFrNEd9Zo6dEbkNRWqicHawv",
  "key23": "5uBaVWaFYwqkHJ8nRzB5Y8YDfWPaRu1t6aoqvrQmbU4abnpJ54CCfibN4p77DZgtG5PEoWQY1NuGkugfLQhTtwHL",
  "key24": "81q4sFZ4kTuWGQi5ZdKwwxV3JZNNJiwZx5WTHXT1iSmiuzip3GRinNktFA165EEapeJmCiEjLNUoGXXzeT3d5AG",
  "key25": "59K53J1RG2ArX7eALDV1SySLiqquEnJ4R4EizYLFRzgm75M4vaC4Yt79yVW6bdCLJtbv4fpATJDbg59kRJSdFwpF"
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
