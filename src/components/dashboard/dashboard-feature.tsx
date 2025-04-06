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
    "3JoTpL3Nu7mMYPFmKMYpQGyUuZ5bRS1Lhpo1yDFWWg6wJfRynZ79vLrc8KMG58jGMZxh2Z6kX7NqCpuUw8xUdXxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TVN12twuVtt4rjJfEpPn2kgGK71XaSzMdK8rFB5vrZaiF9aJAeKijGzbeStiaeXHabhAJsiib3E523r6PNMqwfZ",
  "key1": "51T812jCwnfSXbLVQSK2XTCMSxNbhBaDHtTMBpeWmSe7txnWFgSPx3BSgwCzne97WEcSGdR9afUeVzu4oz8EbDsR",
  "key2": "589oFG93djQHfcAR6uEiRFTrLNWF77pGfJUpMmzbuzgQQGfH3qZqvRrjMqbjuk3hyw2aujf4Xj2MCTr864Yrx8Ko",
  "key3": "5ZvWy6NAwmcV4qFZ73AdxSn8tWY1q5Q3xNxraXutirQKbYvdcfngR317VRe2CQe2LeWriF4qhwJDMPn23tENpJY2",
  "key4": "4MwvMv5Z9eKcLXV2X4P5S57YMGjC5gJhnvqG8Saf2U1Mapkasb94rb8nqxA6BZfPbgvJBSbbEptmQ7f7HFwZ8DX2",
  "key5": "2e6YC7RHJsXRJ8Tfdzrd4V62c2GhsxRr9TfTQsw2sdNtSKGVJEDYvzK2Wr79nUgFKxWLcgPj4PtXZdDsJSCUpEJN",
  "key6": "2QiSNjNnAfwmYK1GYkDgbLXiYq3tNZyazCYvCQsNF81fveoR6vMRB5cVFe9cvfsiVA94XZKZ7zCb79AwDyoD5JMk",
  "key7": "8z84myMEiS6Cn9NG1DpNY39NiTzowASN3sevaSqDga6uerdXtiLdQzG14HpnXgsRZwYqRq9ouUetWaQCtV1cdEG",
  "key8": "55TAqk8VHcDWcYdPD8wU7wESNYr8hSdL7sRL7psL26k1qhZe6VYXpFojCes8rsq4ajGe8wVXWLbxXCNnr2nzdPFo",
  "key9": "x1Z2CrSRsMThsTW52gmdSiGXH8PcpTCxGpzqBZxAZKfpCtX3T7SZAXpuAUPic5rxzKMTEnDUuQ8vwhxrJy5VJy4",
  "key10": "39z3HTUZbLXJdZpxY14A6G22qM9wiQRrr7NqCHdNV7AcRmR229J41feLiSndLWvV3B6j2zL1kNiF4Fqcf7b7kem3",
  "key11": "23TVm4aFb7exCUd6fhfkKtMzRSCSGeiJqbFF1Ki5XZpgD6REJtAFSxFw1E4Enw3UtV1XCmkDMGn4hGX2WFvgNAZk",
  "key12": "3jGviJaE8uAkto49WAozMtWXdjX4DsfpdZ6JsfStnTR8ZABXFhMyBqgojoZvmTGNp7UaXo4nLQhHruoRFZzRHtKv",
  "key13": "4UnBH7ag6bEyeeYnYnkikEcbeauZW8AKXqvJKnxD6Vci9EkYQFpqcqRzEnvw8xkwZaz4jP9LPQV55jcraYDp8AHN",
  "key14": "44um3aXnajXtf8Yh24ogXryyxGsq1wHV9g1ouAavmCv6bsiAMWEmY1FeBXNPAkhSSwBtEur9Rr6Pp9DQNWgQt3GN",
  "key15": "67e88NoCSH6ywPNGNSGe8goGgvjKAbrX9FnYGz1d79Vu53p1jxzEBnqAg6NzqanLm7NkscyhGLwjupy9fB2xZq1x",
  "key16": "5joEzLzV47P25arrYfcqExnuiQN2qfRCppTVmd2BUMU44UX2t4WikgRvMw1d3WXvyrc42uJ24ZwmqnVbSSESauMd",
  "key17": "2CibkgGiZ9mjjYGuWKqZUN2yFoskZ4TdmNHpmZRgKaNs37eVL3zNn96ynx9a6JMzjVmFHGEonnpma5nf4K1eddPF",
  "key18": "3FL5ftm239vwKU3e7yr6hPmTJGFr6XmzoYcWZUM1MQsUqY7Pm2ASRJ47vJi1e7LzD5Kan5YzL1NG3ukkoLXvjzhD",
  "key19": "2tmzCADqvTdVhws3BDMfZ7XMbrJsL7WrfGoqJYFRQZGdWm4TCbaFZetUAUZsWEAMrchQFpVWgqayVFid3P2hecVE",
  "key20": "41S4rsPT8Cz9WcSDRsvQQnjFMH9kGVanRMpGm3jBCJaKxTCAWW3GwerMetghhAAdKF6v5WPZst8S4bh2FQjEACmK",
  "key21": "3Ytk4Ct2UgQ7knTMDDngeww9BLopmtuXtnexs6YkhDnrAQHuBoDnyXdBkv2D6EaTvHpCmcm5GwTeq23guEuSZMhY",
  "key22": "33BoaV7pDrB7VemNe9m9bZknQWjzthTDYeqVJESJ8ovuDfg4pVTiVztKGVLx4AEDAxUV6WALCm5fZoRBRcJmLPsD",
  "key23": "hXvsThUq2zDP1qorCyi61pJG6pXfNmZk81tSQk764uzNWTWwqKcSp4dmmpiqCoiwzcQv1N8HHCURVv1yZSVzGmb",
  "key24": "5r4TE1552UsdHtumpJBVe8a4jdCKDQpCjuQx8etMCecG2p6v7yMmba5mHMQr6fUTXc7vuKJhLaUTWrrd9V1vVMq7",
  "key25": "2iWNiaH9jqQkwhahj8kUx9mEbhtLhiXfyykp95gWkDdZTJiMbbv3DduXo7pgTpCiVzDHrDp5pci4UHYEosjjubLV",
  "key26": "5J5ZFCgrhf1XDFV5jtmhJ59ekkxv3zFnGUbWJW7rgV89waAPC3Cw3XrVDKtFGrM2FV4Rvc7u3hgp9rGQtcEFBSw2",
  "key27": "3ktt5KAPk3jg4gh9QRjP3QpBYd7DLqEQ5zwJmb9cwTPURtm2w35131sBTHbhUkwhGoWHNQcGUwM63bh9ChEThEx5",
  "key28": "5hrbWCpSYVBMAJqMuuPQebyFXVZ63L9Q3hY2BbmhyVo4B75sJU6ceaucpFqB8ko8FdEHvgGMkN6mbwbDi94FR47n",
  "key29": "3SLqLmCvzM9p72Fxyr3yC7j3WWG7S4Xiycz9DJi3H18HJs2wyn2hcZinoahJPSrYg2KgBiHXHe2pjozfccCxdjsF",
  "key30": "41WJSJKcGDZhZfrqhYReCMEAhDHShta3EW4hPjvdGef34sV5AteGvHaijdaWsCeYkJNr7vKqRF8ePw8sHznratjm",
  "key31": "3v72crNEsUVyaPGfNtfU4P25E3bSa4VrNZcER5zNJfLGstofybCk83f4FLyUqQ2wgcdv6mAJMsCZiwBhhgukjXoW"
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
