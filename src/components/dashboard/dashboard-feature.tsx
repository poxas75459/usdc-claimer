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
    "5HLaS6ddFnAo2jo4Cf8CsnAZ1q79JG2TmgrRa3gD3Ah4CLfCk233sFXm7iLXBNkG29hZ3RzM8Avj2fz7oygCLg91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NoftXNT9Np2RQnicfGfMqLMjvsrnHqBEdnpUdpA9wEhyy2CHFB1dpiBZmVSaETyDyzJCb8hU2knNCaoBQTqFaWF",
  "key1": "2Z8A187ut2mTPX15j74LF7ztp9uTbnPW7k6utzzSbptDgsgGRWFafJvPmQrojxvX6SeXH5hdEz2MNbvB5y5AnApg",
  "key2": "4k3JrtYN8jv7Y4Guxt47WznbuzQHDVgcpXAhq5Gp7yNQQ8oSqxwWCG4GQjVpsS1kfHj512jUL1RbWXRop2desENQ",
  "key3": "3LgYQiLyrY6a9dS3nqup99vxpQVo6m5sNomL1ApWpCADgBLUPmuEVgWpcLDzckckKiH2XkBpjsUhThyTS8MGbmsG",
  "key4": "2EgrhLe4ZueJ6ZUYUxwcgzXfyTdB1cvJB81LbrBYNf4FdaK1pa7oLk2US6ZFQkNxvoJuKPjLFsTuKvE5831S6o2W",
  "key5": "5w1UFTbHXPRgmxXne8SPyWpDtApXUQ2h5f8Jn3PjfGoSs2AfDjBnaxyf4C5myzHkT29yLbWLowR8AWjFzb6wNoLw",
  "key6": "2n9SY9NY1CygmRG74hJCx3SNNLfaC6opoPNHvfW11cB2SK8GDMp1ufV2oKPbYXhkrguuBFbHNCkZXsU3cgn12qin",
  "key7": "2Uk1K6DqnVU8FJsUqjJY6o5PeXvuRQiEGcbDMaKStECAREmnqhBmFBxBRMZtnRgwrPf7RKPztLrePvCsT3Hi9WqB",
  "key8": "3BnS8L3kwitzM8XmTeDR31mjMZUJZgZX8SFnxc3CPqsMS58y4gmM2ToD2ZJbqEWDMMNE9TixKgg2hcdMrsn4DUQ6",
  "key9": "3BG3QXy2Hw2HSyJYQdDrHSv5Vzv8vqvNRn7tLckhZjzrUwxkpDUuGc9dGQakt3D3tF7fDEHgvFJhQHzK7NQ3u2JG",
  "key10": "2kEHUGpkD95HnMD9BM7X6YbvnmLaJoEz4qXR75rkriAcnh6sVJBwNX7Ss9YVoAWuJWhvt65t1bf6xKGd1Krq2uQr",
  "key11": "5c9MC6oiv8rEoPq5vZHDYrZWDpK1BHuagyQM2giVcYhYnfbdRyBGGeUuCzMwcNzm6561SjXFKrffnbzBp2pxtVuR",
  "key12": "4oX11t2HfuZS3KHnEbiKhgsHfr4YKmqABg7mSk4ZAb625FRpY5bVZ2WhVoSDnzGk2pv14G817pkFNAbSGNRoJhKb",
  "key13": "3fynQ3gWwebWe7eqAgJhEmsFPeK3iuL4XVc99mKDvFoFCVdWt5i7wecj8jtnMX1BDji6tLJGC3ccaTRUvGqzynNV",
  "key14": "23Ey6fJzd5u3cwKnzqwPv1cgEy9rVabC5M5rGY4NT3quXf1C2uafHJeUZp2915SV1AST1jqWRazCSjmDFcFmJFvR",
  "key15": "5ebPCrWCLjcRdCMdo332nzvzMTRLpz8qviQP99CxsVVypXmJ8yaKru3rsgqAcETazgcEpcnw5mQWv7UT9SMP5fAw",
  "key16": "3vZwn4H9WsoxkHbemKQ5662MYhcbLFb4JxnhiVjR9pUvbznb8epVxJCdSpNvoDQyiFvLeinTvacNuJyzTMGdk27B",
  "key17": "daFLiJriQgCUmTr1BM5bHVSKjSSW8arEojGBYvm8njoCKR6qfXJL425Z75deMPTZUwXPgEfAiSGaQpbkQdZar1Z",
  "key18": "3fn3SednYGe6SRFW7rFbcagMYCFZn4aEsoWabox1dMyJv37s7CXCFTSYZ9H6Thi9MdCJpefbCvNfKTTxusE8gvST",
  "key19": "4zZCVnKepg9Sv6yDwSoJx4UmLQPxt95KCMQbH1XFFUtZG8pVFNzJLB7YG9sYkiddqYsngReKgTSuUZGES3s7Wqj9",
  "key20": "32ANPDFLCc53qbDguow24iaXJVamT7Ga5YNmc87sJN798iaCA27FWknuXojocYB2pKeqSMQipGL9x88ytXLB3MHe",
  "key21": "3EvVCEdfNaQRwPFYmoiwx16TRGkxkixpoBDZLWLbY9WRcBVgW3X6YPBJHHyonxccnB54TaxExkBs76qrbMA45Ffc",
  "key22": "3b5uBnhKcm4VM1L9mnrwTY8a9zxDeCxR5k4QczUcH8NeD8M27ZBgdqhYPux79DdoVK1ZEk5TtN4wrc8Tx36s3xbH",
  "key23": "3V4qUxqq4BeGByXR35Fs3PRwFWkFUQKJmZiUqQ1FMoqhDGofhwDhc7aMxb9CGqwnMC4yEYzBvDWuZK87GSYXfPba",
  "key24": "3Mux4C4f94fwCqrj9cVHAxCUR5ZiUkqHLt83JymMNrN5aoGp1Sgm8mBmUaHuKLeyMa54ZRuPn9FYuUCw8gdxsL9i",
  "key25": "5rL96GfJbvyB5v1RQdc5CRoDM4Uh5PSxHYZwC1z8rdQEbhqSp47J4pxrxEBBBetc5wjFyScXMo85M1VJ5rSUj9sK",
  "key26": "3SgQypYHtLeoTLxzih4PdytRN8fNrTmZzP2s7Bkc58jxXs4sxkyMHKxtBAqZNkB1ukFStVzJUjWhLhKXMZMDRdr9",
  "key27": "w6VcJjtv7nabdFEaKgn9z8mMKS8jRPufhwVhfrN9e7bgv2JNRMxnQRjrjWsorZKGqiA85JF2bYvqqgigJrfsdFr",
  "key28": "3ahajA1Y4ZSUZ8DPi4UAZQAFMszPVYXZKG5fjrREHRfr3YVY3HKnA4qLEHPYCfgNME8Qqy9zZ71QBPFUjhqw3cz5",
  "key29": "brTGWLTAYDbD4BUs545gY2teeaBWjVbfC7reM8bJhzyuKz5y9yrikbRVn7yEcrhZorWgQTAbyfRAVUKbiX7kJQz",
  "key30": "paGj8CzvmPWRchp1EV7riSmeww9yYTJyoqmZzqc7hgUjG6H5j8txs2UohhFHDDvyXWVA45zR9wyJnzi2RneKJ49",
  "key31": "4Bx7cMSQPrf6ce4cUDq4BwMHhUNcsh9N4L4WoNA9H7MEHDHupSoYaWK2HJLMeVzJ4EPNsXNH8b6wYdm4W1omgEcy",
  "key32": "2STEDnoYLBJN6cCRvZuwF1wWYxjb91C6Ksp9Uw2AmnjFAP11BpC4ByEnXdT6LDpSMZxkY4NA7378fZTCqGNrsoW4",
  "key33": "2hKQnBFQ1veW9E2CeEj3mFjHEBx8D87whF4S2jN9vZPsQYrfSeZ21YzSixVFZ1kAYTeqyrEpuMc4jZdNHxxf1ALn",
  "key34": "hQMHurqa93WBw4kxFzNj6ZHkBEyvcYWSMBpQr2Grkzy5fgBThxdYBPaM6tYQqRmiFaz6z94wsj142CDHS7yRsQ6",
  "key35": "2qd9uvJpueGcg69SEq3CdhcHoK4YQCjySiVY1LEkMvPwPYQFgMNpy8Cw9gH8ZuQmvRX3m8nE8JNN2Xo3VvM8jFR3"
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
