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
    "66SUtfuPy6kz3EJMoYSjokqy6oFtTsvbqX8d95WFEdHXjghjYdikGiSkJMXjv4rES8DeG3VZEjwBrxQtS2QE3Pc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fUx6XzztsmAfLGzQfEk7WbBnzTsFxs9LyDw6ZjXUxCutM4rrMrnbJahwW7GY8sakAs5aE29hLB6wf8jQSrJEmmj",
  "key1": "5v4QQ7mwU8yEWw8xA4iTMBkdf8EPC7CT9nBMg1UeG8wrX4yVHkWPK2jnwPrE9qp79FXHShHYJ2x1ESX4uejae8Tg",
  "key2": "NP4UShDCNumx9cv2CmbotXAYKBYuCVsJPmiux4heczax1k4WGc8yKBPzqkQafqFrcN1tfQVVMdyqspc7HwtuEfz",
  "key3": "2nekqMjH4dxZVSKXAgywF4Nw9QayWdEJhwLK31Dc3vwaaUH1WHdSWuiVa4Wn7Lzo8WWC3GTQ7cLdpgM6HnTK2ESk",
  "key4": "81JKfrQXJZ7ggv6EUhJ9yvyuPhRypHdhiqLzq2xWZHJs9oZZtcioguThAYxtGFW3VP9HDEgj3vSa4qx6CZ8LnS8",
  "key5": "5msMLc5wrmNoiSnoKmNgyFfcbd4woL3ZxajLf8qUD33FHuretLW7PXZnYuFEKFogb6sAzTKxkzLXHEEZMt6uBFhw",
  "key6": "46zBTCSr4w5YRAM5ZChFpHyzcf7pS3mt9P8W6efhNAGHbcnUYtDTz24GprmxnbHtxvXLx5bBAvyraWUSdngwkTaf",
  "key7": "5br6zXqt6yvSBKurdKrjxBnfqdEaNgg4qzamDfrJfv5dVgXriP1ndjJ2Zuktj6FWVtb6Yuzq7irNRc243HWzwkHZ",
  "key8": "8ay18XjQJEhp4MYRXvZ2Gj5RCxSCMQepQXmx8VkmabDx2F82jCmcoDLLkZqmvNMPfeno8P7UP4exv3KaBq85jsb",
  "key9": "38pT3qvNQfq88xATiexxLzZfwS7H2YnB9sTW3CJjdPoRUQ1LhyrPLy5LENnrpPqQsxNdnip7J6mt6KXKvZByVs69",
  "key10": "2npkK7HGfb1e86fZL1EQQF6rRkqdvWhWPBKwg31qMVjckovq5wf1G9TAtyMv17RzNSqMCJ9qVoupu4AUvzhhf59J",
  "key11": "3Uq363EQ2yXXaRqyWuKRT2bKY1Pro6DvEKgoaeUmqJud9AZxQrBumcXHZLNWo86C9LsrySf7QPJWFxRP9UDa7xkH",
  "key12": "56ci8obu5yrvXeZC9NVPN4gQJb1Z5vvtjScVXTr7agTL9mBpGK2PuN4osgXA5iLPwMgVazfDYaMeUXfqaYFwLShr",
  "key13": "3xDmnW5Ev24E9CyWMgCqwr8c29t1J3tnHRLeK7ijC2nJ3xfsZU2k2vWtwoRbVqCcowxVvTwLedDMHn1ch7ktMbDo",
  "key14": "4VgPtc9bZivY6eFirr7wv3pniM6GpZD7vurMj54qtqZJNbdj2881vjmyCY7EZ5E7VwLd7Jp2mVqEAtyNtCsrtK78",
  "key15": "3oYKGvfGFXEJGUwihquhsk4G2BATAftPettNkdZ7as9qe55qAfytjTQXq6c8VYZZgeZXGumm7UXZqezJuSTBFaPi",
  "key16": "5pdScFnVz4rhTKMUQoz484BvQmEwX5mRoDqXFc1tbpMnsSomfzJAgev8ArNoW1v42BH2rVneb6W1q9JEXt41RntX",
  "key17": "HQmp86aRtSZEBk1XLpeWX6m3eQtHT1sZ8xUCtTJriReCpdZioTDhB9JUeGGVXxjCn1UCoh3Hhffsd8uS9Tw8CN4",
  "key18": "2uHF4rThBkZp3jKk7WFgafwJFRJzyeLwEVUe13Fz4BMSQm2xXm4GpDCJ2N5cbQQdbomc1TDPrv1qRXzojuHatuMX",
  "key19": "4iU4EVowKYhwobLPcqxQzxpqkrAVyQTmP34PHpFGC6q3xJcX332iD8swZq1Z2P2NsQzXriSmpEawzGtbCaezjaaV",
  "key20": "9AshwdwEczqSTsthvtr1kNZip8zaPwA6iWx1eb7yca8nbzKpna7tUraDkqqoVTD9fhq7ym3pzhirFXY71WfQTx4",
  "key21": "4dvKvixzVDE1LgZZY4drezgVWZVxSEYq2gxxARSJvSBMgYhRrAxck8oRXLH6J7sAf1fUD7STPHNAXagtEcMYUFWN",
  "key22": "2YTywDinbb8DtjSfx4gXGsz285x8wH2QEHrzmqJgFfeg8XBQv89KUWYZPjZzWe4AeseYqmANWssuKZ4c4ymMbvor",
  "key23": "4mk21cNAUA4mssNy51gySNkDBGsSRRWwZDYnYETX2xsapsTSxzetAqzY5DtDacPBufJ6iVSiKjZFjyNoa1jFoLcF",
  "key24": "3VPAfzjWJ1rhgpvx58gVpe7jtAVWqgpXeHD6i7A7oRsURYMxcJ2hxZNCgknQg5fhdZobpmjWzQC2QygqTzvATqLR",
  "key25": "4ifcvbbtvAWpfzAP22SwuaXbtPyNpJ7bcd2xxDT37a3a827GLzwtQFtPgoo245oU82E97qnQP3f4SsdzL4LScBWf",
  "key26": "56gEwGNkpSCBmkPcJYBgy9P2zsadke4YFh8XD7JjYmQNAFhYmT1V5nBjCF5E6wRMd93xBDydjDNyAvZgJEB72875",
  "key27": "4DvFjVv7oXFQzrSEmcdAJJb2YXgdwBcwPmwQukhFbGQoegZLAgwVkmQ45bMZF6wb16dahaBSbKAKaBY5i9zkHyBB",
  "key28": "2DmUjFmtpUk8pRWNzgpPQa6ocKgJ5TY5bC8uxSZje3PrcUsZacd2hwEQr3iRKditHGReMo3TahCN49obfexKKFJk",
  "key29": "5hJKsAoJCPXVkoXaLxSjgBjz4XYCFViWW6ghpB8PwRALsk93qypq9xq9Hkv72JhEgMV1RcvRBe69HPjekf7ismUq",
  "key30": "dmcXhfWHJtwqjBcdGW57whgkoNzq1nep5x6btpQ9GKX5LtMaDUhCxcmgZCxPya1cDucYUX22g9T94qyGzsTz9qR",
  "key31": "5Br5wdmaW6GsKHjzzLre6c13qG1dLFgzcBX8dWLpVvSXRLWFrebZtXZ2b4ZijQsq1EpVmTrfbMu1Kr71GZG9PiW"
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
