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
    "5uKsi3ToKRP8e9BZgqx7dq7jNDeiaUc6EooJ26auDfEsK4wyeaRgxe2bEq2w5SVGn6pEyaXJEg7xcY5UQz784ex5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BSTWH8j6ZqhNLxE5dkemuZedLXdkmcpinJ4w1ymdaVCsDJmVwTSqseMDdZYrp3Fa2ZtqyRn8VEwvf54gjCiRr9t",
  "key1": "4DxuyYaefr79uoZVGczXBfrxDLxBvPh8PriNu4dqPCjWRvurKiCMRUCvRvMMvN357dzB773anrRiGcZfMqs2XNac",
  "key2": "1QvPwe74U8a6D2b7nQZyjcNexD9uDpyePnK1wWyZTHxvT5BmwYSfWAdKj1bKct3jgDEdjEpNcDhNYBwAqmkJqkc",
  "key3": "3BCnSCAi8xL8svskMeGhchpd5nwvAPn6pSRtvi99qX1UAvtKaY7YedbGZnHtFkVZFZxyZmWF1V8Kg8S9RunD2PND",
  "key4": "41E4PxMk19JCoDv3nPnwTd284NrZkuZcGMw3MiuXZb6awq1y5HgxxjcBLZqYMigB8GxoDsuE6xSB4tywRTzZCt9F",
  "key5": "3Pj4dQjE3PD4BMDCDy5xRqK5Q6hhxZtdyZYnswQLLc4BanVzeFxyNM5RTzDjV3VwsdtvBcPQzbqXpCwaTXnGJLdb",
  "key6": "5AHWaP3mTkKf7EiSLUt7Q7XBgBpXmjCeCEha5LySGQFMdJv4H2Lt3rf4wC6SgNqCgX29qUEY7A5oPH6L3raLGAGC",
  "key7": "5n5N1Y1GYMbM2MpQXqsecBktqAMdVwsdu5Xaw5dBXU9fxAbH8jtfaQa3hkJJcxBzZWLyx3RHES5WiGQZnFUfwWC6",
  "key8": "2FX5HTddz35eSsQrLfdGDqKPuPJSh9XbX4DyTxtD2e5SuL6LUBhNmNAmGN53EYx2gzPba14t8SdpK5HMXVUAcYq9",
  "key9": "2H5BEEzjRdPMYyf6NbQYGsEA63kFMDQwjPyWNPmqANaoi9WHG6cxcxSTDCW3U9JjPS8aeoufzsSTVzuk4pg3PGfw",
  "key10": "4jXU73DFiD9Lrt8Wnwyv3ZJHAxi6LJ9gJBSYs9Xz3bmrZcfGqEuEqtgNWLBYxEEkwpnfTHJTqUoRoKu9rzq4YBjV",
  "key11": "2FNEStJ4ogsGNsRj9fZ94ygwva3fYsvNWDqTPbpkj7RY7wzNvzJbmRkAWfTixVVfXAbmxMnRad37jECYLeLGH6hg",
  "key12": "5WtmtFV4ZagMpyGPqvgrF6BMEGyJuXvEhCGmtpGmoWWEqXb27EPakd2CCsbnBPnoZ4UfhdHfat2LdkUxaJyQb7vJ",
  "key13": "eqRvAwgAyy2xFF7GsX68HLKHJkwMs2aKBon3g8drYTeS8GpmfZmCmcAcScwrmm6HsW3CwcKzKiUSzNFfwmaCRjC",
  "key14": "3eWCbJ9SFNnR27g9jNjs84Z5t2v4gjAgYsFUxBeDvazufxeLECMKKFUaot7TaGXW1inLfaRNNwopr5CqYiqZoFAB",
  "key15": "4arqskBb96Q4PhiUHGGkJNuw6eJMzZkhBdNYYnoGMkmVisJm3LLgKQnhUJnmNZRDo94ouxiwsbKjy7NuWNN2KyRF",
  "key16": "Lw7YopV75fNBV4jMtN36UJW6fJ9TdnBgUD2KBH8NyDYfGGaJmzvHyv2DDW9Moy1cifpTdR4CmVq7vuMTqpSSFMd",
  "key17": "2yQaxmPaokqKGhNHwTSA8d2BbtMbezxtFZawopxJJZWY3wpdLB9RNZzadVGVBmryufcB5KPYSMBgCTaTZwmFbfKw",
  "key18": "45SJjjcuuFfzoBjz2nengkxPjcxbNTYfGbyXvY1ikhi3Q3NinkrJ5GBu63i9n2PTjVogMPVmYMiMv2aGgNNPb2hn",
  "key19": "aJYPCFq84eZbWzoN4VqwCcucpmuRLFsqHuBnejZEwfQ3XkpLwsrqkwP6ngspUEuYdNYGRY5hWYChks6KBhL44tT",
  "key20": "5hPPxBQ1vsgeZzZQ3QNZq62JLBE7YsnK2BZX2b6ryVVjidg7fMq5BpaMjtRU43M2rbctZjVpND3qEbMmSTEftuzm",
  "key21": "3WzzNkGDYBcocbdpCZw6aiJXbkrymbwLhpUoekyWdWJx9gtxk19koMMTjKsPb61k8e5279ihxsjpzwt7FU2xZzH1",
  "key22": "2yYeDHEQNwVMBbVx1WQuwWqZzDEtHDE6mwNrg1Xf8G7wF2dWpP4V9bVyrwn3CwWr4x7gQEHDMEubWSjE2miNoNi1",
  "key23": "3D37hohdaHwPxmgQF12vMgyVBX8RueZwS5Nf8n92xrZXqq1HzKHfxsN3KPduDF4zfmdm56XFQGwnH63gAjEEb3me",
  "key24": "5AsLHif6QThktzbkwJNQ4ZBqvoda2kb1JGvSpQkWubUekSJG58yzeHSRc8MbafnmXfJZY6wG8yxxHeazeG9DWAvm",
  "key25": "5K1yCqfMd1sLvy7QPRNW2G7njkgiNTzAPkPsYUL8YgaeEHn7YA3WMLH9nbe9QfXysHnSyEapBBKT5bqzLZE1vtER",
  "key26": "5EahK3mxYFGL7cScrx1J5B2puVLMtYmGXTo1RNpxR46tg3XJPVG1NZ7FmkVuWTihRNUmjRAGv9gne8mtwY2NBUui",
  "key27": "21pzoJLgWdN59QDCSYREvEQVXiNEHGt4jgEEx3EW5TkqnAh3rSGcHzYErdwrRqP1usVGzgGDGwcneFWK4PWzkXHY",
  "key28": "2sAcZvw9zpEj1J14Y3kqkJKrrnmH3LFiDVHDQKQ4amDbuiNdvgs1J3Uve4jk2P9dJVktT3e23pmkibDPYTkAEt9N",
  "key29": "JTP4aU97vbyCBpKU7dxHxpbeRvtLgVj8K5z6pqzKpDZwejgS22bhUQPi4zBDQ1iuQmeidzrapvNJfy8ZnEY8mYk",
  "key30": "4ZcTTcKJrEfksyT9sktS1MqFLEiW2CGimBAy8TfGShJmFRXA6N2WjmpY7P6JbAtgfMnszDdrAQWGR2SJpdon1dQa",
  "key31": "5PD168LQdZnDTYBEdkBsz4bKp9R81n4WriNpKK2cmjgxCoEbdY38miV6fs1R2aYRQ25TX77E8z8iapTTQHPDKtyY",
  "key32": "4PT5GTSVXY5qcLKtXFbZjid3ab3nEUEwpK5eVKSBZimnfuAt6jcSaGgxHTRNWofkxCdVBwo2KNjPyKZ1acu4LEyF",
  "key33": "5pGXAtFbJpz9mzk6xkv6CnrF6fa8XMYarBm6xZbB6Jg5xgAeMpQB8QPLRHffnLu4ksZGiCYgLgDX9f992zpkJTnr",
  "key34": "4aMA3vbYj5QkLaqkn42irWTychwukTtPXJ2LyvgkTviuLVqahmkx5ZKv6CKd5U49XyJtPJUzGAxu9xfPxFoJgkzj",
  "key35": "24CLXXUhKhM81ijjNmhsAh75cHpiDw5taoc1SHcEiaNz4sjrTJR3cxhQQYAQeMYgsBoyHUCvU2pyiizfrGg5RgSb",
  "key36": "5M7wnjSWZJcdfUhYVfcHcQwahBW4f2fWDSjpuxMuoE1umH3YxxeUmQspH4ahZmDZtmoXvYfGaCTpw65pcGGmkFeL",
  "key37": "5qUNNpAARHGg4R2wjWCuprMQ4Yus7CJBWr6xtzHbR1JA3hb1nq7dc3M4mxxTyV46RioF183qoie3fyt92b3EnT9U",
  "key38": "44ZWmFHdX5Yt4YJVkfh9rvCJRGT7ocqWaWeAyf1VQPPZ3qXTw3HEL9bPtoWSVXTTx4oQRd5F2t7mS8kUcwYMnKMJ",
  "key39": "5nWttULATeFFK4FeHLJXTLDRWKH3JLHiBKogvqR2iR6gwsvGrEPn5jJrJVrLLUsqvxWKRovvp8MfDmHxkMLEK3VE",
  "key40": "2EUMkgvFr9ELzdC9g7jtAWoU4qQU9FjPcyP7A6xNgxWoJXPCGiV2fW9s1zW6FkSNBBWGV7TqrXh5uD52kDGRfVXn"
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
