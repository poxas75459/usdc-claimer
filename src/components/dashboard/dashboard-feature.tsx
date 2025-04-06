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
    "4LXubAFMmn2qubSZeLPSEZPzMWfRe1QZyVc5Siaee3MqoUUJWuPBWzTNTXPPXEiCR94t8C3okBL9cRLdMVEyS8gg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uJVfNHaPDu4hj1VQ8R35PaJW94vAn1Lze67k27sgUWA5wUHtwCmznPzHJ54rCx3HiwpEu8hXWfuqrvdE7dyMiwz",
  "key1": "4T8rSuHghSFxj3KvhyJKKwgms8HYFtnTFGmaio1dGuEcKU2uPLo3mCKoAtboDAvSwJNxwBvEdohQtmzacqPd2HAs",
  "key2": "5pa4MDAmrVXB3URLs1C4Jc4bS2UfRrYbueu4ZHnUoQua5FHPQWf6n9ixd3JeCUaUUzrqGFJrt5dUFa7p3FoUyjde",
  "key3": "5a92RyV9EYkNK4RSxSbWdEzvJQ2v86dAwHGvYBqY8WNEf28iDMyGt5yQBFtXnjA4oAyqdtL1bwLsJhmnDV9zMCXW",
  "key4": "21GWyzpThQ33AxotocND1QwXDwHdS9ageXP69AZH9fVEKBEt4uZVPLChroU5a7YM1C1ijzMk6Mgg1rfMzwXmtynD",
  "key5": "2F64d4sFWvuQ7BnfnsEGay9fGRFQvdt6renPjk1kkCEZPYVsoxikHSTrju3wUsVYth2aCTsszTLkYk8UQKtfesNo",
  "key6": "2Ly3UW51Ux4iXAdxYVzVgDihyQ4Gxmk8D1vU2MapcMrU6ziyWf97M3hWtTWNEp7uCNgLHhCL98FXWm6SERXUmF8W",
  "key7": "2v8o8E1cNhkRFLeypVxo7KCHD1btfxPY6ZCCS4ay4AcGSDQEbTyU3UYi8JbHJL6FSqrEboF9oWisuPZkGwVQwA4r",
  "key8": "B2PuhSgMDaoHt9LAnsbrQjgVEukFKEecdBqrTZNZmsY3yVeVC7mXdMdiNFBgi29oDvNibFtQi9yVQQGNhRKarD5",
  "key9": "5n5UpYxWzGZ23KznC5Zg7SMuejWytAVcqSavhi5zp2Tq1bWZHo24uXFDJZ6Gimcmv2KmVizZ8TsDZWL8TfREuXkt",
  "key10": "4YQM7kwKxUZ6nhvWrF6bBJ6Uag9WEdBLCchTMj1R875QVULYHeaw9CrXKHSvTbNC3hM22F16ZbXrYnU6ZLHGtd1K",
  "key11": "5143f2JgSJP1FhbKJrxNa1rLkSrGpdVCRRC9eugFB5DVThD6ujcCqLZQiKpsoPFcjgtXUVoS4EEZBwqz7eFMBbaQ",
  "key12": "5tNXr6Gq5TrgCPBukPWvNe7UXUBsUDcSEShywr3zfTweNwwXqikCwToY259ZHv8ErKZmusirpxfsUh2ffSNXjdjA",
  "key13": "54xpQnk7pPDv23c8jnxgWL92sim2kQozHu8uegBJK3zBZieggMqWBBryGjv86QGaMGFAPSQMHxLaKehmQwcjdMZJ",
  "key14": "5vTrCaaZn2K8NvnmR4DymPJCkhjWALDcMrAJomjybj2fnmAawvkhaqxxwPz1ss432Uz417xi16y91fBet41Y7gi3",
  "key15": "2XomP7vmXSrAyo5b9eH6anNnVMS1DpDNvA2Sr791UgcxHzLqjH4JnUESy3vivWXT2GNmC8dBFyCuDqmryR865Ur4",
  "key16": "2wzA9updYx97uqkZdfXsUPwkqBusmwJ52mY9zpzXfGvBd4aQuUnaPkBVzVeAThu9oMC9san4hnmzctUUEWidGpNB",
  "key17": "3bpgGcdZd9vVqgDmHyMqaC7fUYukrzWZmVFcKMgYCE65XUEMxFNH36qMqNKxB13TGeuHQ3ke5ButKpo6vj44F21M",
  "key18": "2CscvEY4oq8k8aV3pqPaunYCde2jAf1R5nuKArqvPYwPXpgnQoe44R5UbdGW2SjXbyTJMNJ4YYc4iiBwJo7bVZ99",
  "key19": "dhog1iDvrZthX16rPWzBRqTBP9ppsWH6EHqZCQsvveom5UQg1q8Z2xK5hVDJM4YG6NKzSrusDVpcnJLuT5XSfxB",
  "key20": "fEQAvhye5xBes7ReKTZQKKaveoy7cXoNadG38LtQs3AsAwKigWvrk8vEihkHCMm6arKSUi8jrVPBJ6BHSdMUqYZ",
  "key21": "2hMteNsc6BcZkaqhbUZNt9hBDuGGDKuU9CXN66ssSR29Zr7P6BUEtC5vbJ1KTdmzJe2GFthN3KhFmwVAADTt4rrZ",
  "key22": "4WuqubzHB5vQk9fSNejPbTd4MtJRpXbGbTGcjpc34k9pmkT2FDyF2BZfpDNEfanJo7pdvHR1gK5gnWnPuGT8u2gL",
  "key23": "3E7bh5RzjiGkHXo7ranv61HT4iBf4huxqdaqWMG8ZMHwCNcY4HeMCC4A2nTuRB7hwZKxmykiVMixt2Rg7L8EqYmE",
  "key24": "4mRed3E2YFqaxmVprCD74GLZF17WMd7P6me3GwLjGdUjDCRPuTz1ryX9eNKP13xik4tG5dDKrEe1YrQnqMQgQqdZ",
  "key25": "36PKmgxutMmdu9Jsygm57EWGcXYasCtwypmy9WjBEDpgNv6MQA4U8tjsUkkaXngNfR63W9xFerdkNHh55zaCPcnk",
  "key26": "3YaMbsShKKo3AtQpFsYgkWwuNQdezNHNvqebtnX8d9ZQAu2ThXawb5dzVKYbtuGvy2vDW1XqdtbyvGfHCRvkGSWu",
  "key27": "XeNCGiYkvdTy5vatkFwNNRt5vwN72dHyM3gbjCoLY37b5nmAUgDyg9EtWY2ZTboHnZ4uA9Mkbe73KhRgQN2DVJ4",
  "key28": "s3oCyDhkgJRpa4PLwBSFUMZ6XLF7843tEUVGWa7WqZ324D27zeToWEpWfM86gkkLvgErLh357cP4qrRZtpTzjNE",
  "key29": "4pZBgP1oN7kSxJGrNGzuUsngtFWKhU9UuEq3YBew6hXFKJPJpR7iZCLHVKtm24Pdnjbb8mTsDHD3MYNSa3zVYA8D",
  "key30": "3o398fqXz6wjdy5QT2aDtFoswV5dcA68KLPiXz1cNyN4MmsshdCTtVLagYBvdtwKFfG5RGzmkWtM7TeQf1y5n5VF",
  "key31": "4ZKWxnHybeh4y9REgEUoPwUxdWjNG8SdgB19Bc5Ct38VyZhJed8fhZXHARWtAeLC9gqyt4QEwMzFXnE9sF3kKcKc",
  "key32": "2XgUu6rNTrmpUwdDpZkYKceA35zU77BYPYANEerfSmjayit2q8jazJqqjwNRsbooidraBmcyRRv1g1fnBkPABuG",
  "key33": "TJGUUaNV2Gna9vbg9F15TghsmvvhmsRZDYLvHiWPbnYkGdH8mwyTHYMggyeog6bAWuKjLDmFyhzYo9sRAW1B8fY",
  "key34": "3RXjq3oeCqvpN19BN1XbXN2zggGxYnf1FcLq9J5DbJoVaMmYYZ5ci5V5kCAd867RiHwPfpuzvEk3H46tnioT4Bbi",
  "key35": "UE76LyXKpRh1VJDTk7Fgrqv3ye2T1tY6U7ixN8vdZzfyNTbXvUggGx2N96k47DVuPyNTgAZgZbybp3N1819d8KS",
  "key36": "44WdaH8GiP8yFXcJdyJtqG6Ts3zUzFwbuFjxhShEiUKuvkiSAeXpxKqK7XqbiwtDtBfj7S4ph2ab57prM6Uascgk"
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
