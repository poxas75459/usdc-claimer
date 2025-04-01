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
    "39RnBvE8i7dF7Vo3vjyq9Jm28itHmqK6ajcyWprVbASZP3ABeZnEHDFaiVRc6eqhHY15hgwyZgWwLnP31m8RZWQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PmzAMf8qVXDAmqyY3TyFn2iUcMSK2yvWudp1kitJogJQ4znWbPYJLcNTYWi6gGahZC1Rp4GBaVuSsbH8tiTt8NC",
  "key1": "3c2oYP48Y4KyT5qaVcTzMWTnPCJg1dSFC8pD6pLep9vb35cRrz4wWF7NNE9tsPhSPgMbBTQTVbcfrMkeiM4cxmht",
  "key2": "2atDc2W8qqPHGPB73VQFnQAVpfh9FQVGNnyBmaixM3iGQmoQ9eJufRnFyCxxwMvArCiJD2VGbeVX9SBC4jQ12uhq",
  "key3": "5ykWfGpu8hYdTqCzgXVDMTREZS8zzVxABBfawQgZte9nkQsWuzYExe1U41kNdJQWQCDiaksaGNtdtAVxjcWHMD8v",
  "key4": "RaN7WpoMpQsWD5CZSATXqogshsQFfxzLeMKMiMSkhAjjrPLEM97XhHnByhSz3MNZvLgwDCBQKAkGRoxuYSRNp4v",
  "key5": "3YR7LU13b2qJFgrEtvwChxUAhaRtoTXghZ9YrPVHsXH7SX1cszGotpQS4Sb4g6f2UGQgE1WCTV7MgEvHVNNdW73M",
  "key6": "3H4mEuVhSWs1Acyvhr3kSAHH8Yq2RVd3RqyfLvomgN7So2rrNXqBLJoavehXh5aK6zGBrYYxrnrRBnMdNpCPsYeY",
  "key7": "5YnpoGAjLPCojtdRacJNDGKkNooMb3weS3A5Q1hc1NKi2dESD2gDZCEwqKr6sv1SandMqr7r2DgfK8L4BH3rQWq5",
  "key8": "51ok3PWQNeVSXSfYHd9j1o5EvcFdHURfLrsgDqJBvWcmNrWe6JGdcvjBaTGp5xPSEYzsYzio6qAeVX8x2tutALr2",
  "key9": "3cg4xB37hYQsLSwo6eBjfmHYXH8KQsjcBCKA1QKk3VaLzt6icZrgLi73eWHqjua4Lr5wYKd8N4v6nVLUeUpiggNe",
  "key10": "3yfamFKjmpGBpwpvzxuZbCzAU49XtzqxiVNNA531iqC8tHWcvK7vYJQAtwJL4nfc13gRJsEJ3LkGWo7msYrEyUdK",
  "key11": "4EfWJXxC1WvPajh5V2m5CG2nYhK7tbYca5HEqKhmdNcyso7LXXtA6wDBhyMrKGv5DSStKqvoiaNYt6E4evxyiDAM",
  "key12": "3ZXeZ5L9xfC9VprX5xi71saozTQSFBdMf7WeVkZMHmkruggdjogxL7Np681qqkZdnkddgahRZ3n5ytsoHb5meC2U",
  "key13": "Q8L5g3kXn2bdYRDKYoGpAf8Ujz5gv27zn2KgCz5iE4jez5maeBVCRVigQAX1jnkjSpJ4pawpjRQDzFAUCE6sj7x",
  "key14": "5QLxPhzJfJfYCdV3UFYwggntaognHqnQPon9c9v6SBzk2sWxey4jBPfhYWyy5pR271t2WGuPFBWzcduSjYaQoCHq",
  "key15": "2cEDr5jLHKJwSUZDExJK2baepC4DggX4VXZS6X8etgqrgL5X64NbJHdft6cpKt4xK4mVkkScT1PYdcwhAS6tSSny",
  "key16": "41Cze4RKEFeMuA6tdgPX9x1aZPnALbJLBDNWSmxxTL3a2diEabLH4RmAZAi1zJrYVYd4h3gZtuRAMNhFtyAV7uzK",
  "key17": "5VD7Hpzk5bWXJigwH7Nb5k3oVVqQWu2eMLDUjdE4o3gUE3pkmZwL8UeF958fUoaoHngZk9s6SUPk1934iN1PCE7i",
  "key18": "4Ve3tNG9b6XprF3gjXhdqxbRRdvNJDBrevjHCjFT1VN9xNna8ooYLXhFiCXpVrfvGRCwzuS5zKW68mRpxJ7TgcoH",
  "key19": "4nxtu14tSnFzZJ9D2msWvvXfcVYFiXFpu9ZSxMdWi9MJbiWKFoL7P3gmMEsR1PpTk9b7PmUgiVNCyWuXVBMFra68",
  "key20": "2HEyMsov9mfAfe77vCGsHguB1wiS5wU2euSjmVC72FSfSmFExsXaKKzKRM8gHBgRTShfWFzT5H1fgcx97v2Lnqyk",
  "key21": "brCcqj5hfMSWVyS9AiZQPPGRafsw8LsYrqPYu7KpLH5JG8j8SYd1T7idRvmVoC4PkbqnVN3C91wdGjamXrB7Pcp",
  "key22": "XnWns3iCjmhLfNRubQs4k5Y47qiKWgA1xbmRCPx1b9RnLqpkKx7jdF1JEfdgbdHtyYFHvLk4CUF3aWscKpPU3ZY",
  "key23": "5U9XTiv5MPQcCmKovPgrKUFCPBLZxnp4Hb8yVupGnAgzoaR9u2CiG64VRWyTUiyk8fwT55oqUZyac83kdnj2D2Eq",
  "key24": "2yQeZ3QLfckdjnBuFNWoEqP1fjNDpzoQNecrF7uRHrMnVFfDg6ogxDcuFF5FinftXvNJu74eyQQ81GsGurDM4Aec",
  "key25": "gqsy8nr2sfArvdAALFbToedngxKJVth1VpZPMiYVtxXxCi9uo8hKsb3wf6tFooLiTCeP7rWa7mfH9TdMVv2eZxG",
  "key26": "3rMgxFBuoBkEtFSQRu2v8Dhj7m2kPUE3BvHWqnLgBvBvfBnVxjXfqXwE2Ve7k97mM6RkZqNuZB28eLXnQqgrQauV",
  "key27": "mzTrHWBFmvgusow6chFnqLMP1NrXffbpLiyx8ic9a4z6fhwyE1VdWCnWBks486MDmZNEtxdhjiT5arG8rFmMXq4",
  "key28": "5ZvyfoRNSN6pkYxnVVdTYH9YPYrx8v2i4vKRPgXA5fnjiSereG3xvdZuFbUdJ3yVUcmz2bjDU8EwuDxuG6iRybQd",
  "key29": "dwEASYGya8Z3jJszwYYzUPZsrY7znqSiesZnh3RdrSXH8cMRjh6nPJd8EnihSA7mq148hc2p8Zn3ves6Kun1ArS"
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
