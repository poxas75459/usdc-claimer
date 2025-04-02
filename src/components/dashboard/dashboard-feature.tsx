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
    "3ZZqMWpeWkjNB6XU7JjcHj13etBVFkJztmrSvv1cTy3qHvFHxnSexy89Nt1BG32KB8tz27Wnge2LjLeSAhUtF87S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DqLXwN8z4rqnvS9orreFMGKFQ12VEjxunQRQTpXgiAU5vncBCwCnxQhxm5uvAqtsoauwWtkbgBF8RKV61Ky2Q2",
  "key1": "35pJeZSjpZ1FpFvZjNaF46rPuvJxRb7gp8PD5jyM79tc3BnZMJwEHQTG4iGDSVa6whkyGyGwkE6drMjTZYXmWSzQ",
  "key2": "422wMkUH8uyYvG7e3RZQaB2FGmnYQ1V7BsBaic2vF35fMv9rBL6xMpQTeNW5LGWLdZZZ7RCR5y2PGLGpncqifmDj",
  "key3": "3f6yDAVVbLG4mR3fKjLJssKPHF7L6XQ56F4yniPsZ3chCbUD4C9fdcQtN5Lc7ZVWsTWhHQsSwUaXnuXLJLDDh2q8",
  "key4": "3tZDRFkYBuEjZwCZGC8eWH4VhCv1YSoXnp6nuZYBXqZgUzp3VSXh1xnDVdLvaJdUKJsz8WzdN6p7jB4FH4pTRZVj",
  "key5": "3TkYSMbhK2ikomM3J8EgWwe8mHpjPfJ2fZ5BNLaRvRemdT5JzicgazDBMu5C9tMLkfw7PoNucAv1u5g2zgFyijyw",
  "key6": "2kaR6RWrAdjWQw1WPNcakkj3V7Rim8g6MjKXpsU8gj6yAbNRvBQ86yKZXNYXWxUKDggHQADKRUn41QrR8bHrrQwy",
  "key7": "2KGJ19qU7pMX7p5wdTF3bUi3rwXDmA9auhSzQN9QNNk16a1DrTbDML33YMP4xY9PSWMeMKrNFZWtFjYkbYsMz8r1",
  "key8": "2w1jwx7TnmixmcBdHsLsmQ1C9Pk8qopW5kxgwVYa98xjHCZWayCPjC5HkfqiMbANBH473b2CSfsVFEsAwmjGz8yr",
  "key9": "615du2Xz9tiUCTWcPYmvRT7BHR5J73okTaFfTvHbzVgJ1oWqcRyUmioYgepzj1DtJsQ97geKx31KbkTRz14wcpKn",
  "key10": "2vHjEehfv86xStGGqFkCp4WfXzVi1o3jQuQNQ1ArJc1zrdZ6jeFVfrWEkEfyh93TWmQZFdZHMw5nqNUsXAtEyoQS",
  "key11": "5NB8gzzfNdBHrsejtnFQwDhjbzW7Cg97KUf5Pqb3ADDPGz7NZnr1xaydJt7EbrcJgAuBYY24xQGVLfYWAJx6eDgY",
  "key12": "5TFcznL3bFUTTjjs3bhz8yqGoQAx6ho1ajr3X77o9Qv1stQTskaYzkpApRH19cmrX8KeqGK4PQWMiuW8VmdLdo61",
  "key13": "2TAY3WmUPGQ2XEZT64ef1MxBwPve2ET37wwFGoXDugDUH4mn9rWQDui5Jc27Zt8fqenR4cvBCATKLTFnLdrj35Xo",
  "key14": "4Ws2N8PzexHnhGNw2rgZkfPSvi4UD5rny8RffAaPGkEmHKbLrwmGm1tD3SdpZUS2wKuFfUhZyAZudGfyBRwTpwWV",
  "key15": "4XJEgxzDFr36aVLBsLkRLgpcCSgPZMnrn9hgL8PqybAyto634RJK8MQUjGnxUamUidQuTaiiKvq7M36NJxaUHR1r",
  "key16": "4WMYv9quScwe5RucDdCPHCopfRQ9rbqypqvKzaVFQLBuDumTUxikwwkkiDKj4b4aFaLNjs2gYtRaTJNYNfuX7FA7",
  "key17": "WEKfnofueEqr3wk3j6eyKi5yjrtPC8fBQ5mvG9Ww2W1GC9MojCom399puzLroqNaNr9PXAxkSzsgkmtXPEmbMmu",
  "key18": "1245KiacLbfYMXdmqGZg2KW1U4HnzyEXPUpaxJbjeC2obL9nYwa1XpWDx4CVKFDSWjAkbtNDam7iUqmb8drqeydK",
  "key19": "5p6aNdLuS7qWMWMeqMcUThwReJB5u5CbVnzwjnqHEYXUFgVbZR4uLSHeFqGmvZmQsFsr8wqrip97SPrhpMNx6eA3",
  "key20": "4oi7QLwVpYfDQCB9iDykXkmCbkNxmFpacWimSpuhuy5KEJvTiQm1mUh1CGZMHk1FsUS1qimugixhD3Jpt45cRd1c",
  "key21": "5FsuuGJ51r7TzRTkowLWcPSmyaikzM93zzRe8Hi9SLE4JMPQRArJWc7MSa7NinxonTJ3ZuhE5FP91HuWBHjh3cWf",
  "key22": "2xu8Zk6c7VEfNaDPromhSFQ7JE85KyZyJKumCqzqyxtztEnSavXPr7PqBM23mnHy8F2RsYByA1Ys2fUPZkcKD6wN",
  "key23": "4VyfiqBEhx8sZGtzSwJVhiGSFseU9EnEfhj8RaCMw6fcRHBvWHQfyQ5g4EkjMr3wPQzKWUtxGTPAXvBhTAmi1zis",
  "key24": "66rrn8YVmgYwkZcMQiy42fMVmtjMLsrWkQEZHwXqoux3grsWAmXCnNXe6vMnMxZ4Z7w25eAGFbpEW24LfWAPLtVg",
  "key25": "4xK7tZ3hpqJqDXqDTtxejxVsHwsSVmkw6aHoRrtrR2Zb9U851Nd4857CgLsT4MoFDzh7ESFjarLfofViUgTmQMUs",
  "key26": "3nrpeCgSygoTQGpFMg6Ybc5Tdi53up3QLZw5PQTa2g3dFqFiqt8aZtbApSkU4eSXx6RvHNdfkM6NCioGaQK2Tv3x",
  "key27": "4MW9NVZQrBDwEzA3Yx3kkxaaFk2RzWYEvSXat8cYE2vF4wijzAPi5EEYCK3ZCikAnMd2mDcq5BZorP3QPQ3YBAZL",
  "key28": "29ySXguMuJMAVGPfPt7moCGELB7xN4L9gEVMc35AYb7U8dFiy9bGSxbS88e1iSjsG2cfva1kidwtNYjNHZiVcwXi",
  "key29": "51MzXxUPE58VQ4bJGTxdCdJstiYwDgeqsujeAQti2DWqoGdXNk26jLtCejp5ijEAmjzrVw6Tejx69FYLgKK19PnP",
  "key30": "4MrArhoLFYeZo2wXPo9iJdNAXgM7hTy7jeGyMqjpsL7ueshhw5WLnnie1TZPQKcxCE3ZGReaXxAnGZQ7oqrfiFcF"
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
