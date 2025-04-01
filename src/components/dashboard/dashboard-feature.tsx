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
    "2wAcPPAH8AT45iBvDd5fjuoX4h4cymbLuxenKuCtcio4XtqXZc72G7Mr29zySCJgYyoYikuGUZHZspxmWfH9kyjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZGLTMPapmqV3W7ow896sgQSfn6yarw1CVuWHBKbXUDmxfo6LZbxy7r9wM18AMyFBnGtWh96JWfDvEFfVoDrfCiM",
  "key1": "3z2A9bgAVUvwjPJmhkuBvExSxJdoMNNovjmdAhR79rQ7BaSDrumhhXyHf6YkVgvzFk4E4YKyRQPVpuFRzmkcCJDn",
  "key2": "5C9xMqxg2jZKG3mRGxuSXg7Kd452USRQVXHEnjhC217RGG1GVESG9iDKAvtLtYrbuzDcmt6JdKWy9rYRv9SzYEHX",
  "key3": "pUhzMLorDtbpg7iiFY7b8dUKW35VbRehMUyqhEUdkcQdHbpm7YUJ6SMqREXSNrFdnZFJGopJ8f3ismTU8pzuYgT",
  "key4": "4JcQtMcRQG6DD9f1gFrPmSuMXAMWYwimZJuNsbntbuEL3QtHP7PWz6WPLhPZtVDHGPsXfKobSDvLmLbK1nK3sjfM",
  "key5": "szmzmL1N1ULSLekzQ71WcW47qr5yqK6BHaYqZQ1qgitJzvkXsdugoRevUYGgccrfRSQr7pkiK3AJpZZAoEMQ9Lt",
  "key6": "59xGMenBWaMtfaPWKrfiPDv6QSVAzW6AEdGu56t4WkPCkby9tUFH9vFUfDmk34HBxEDxCXE9PttKswjD7fj21cj3",
  "key7": "3ZL1Ms8banK7a4EaMHsEYHSHbrrK2Yotgx9uXc7EYRMfj4HvrT2MtW43QvC9B8Tyvftt7JwdzcZxdG5KhHgJ8BSH",
  "key8": "28PwmwbLrEcCSagDCQxmGPc2zRWkzH3mktEPmssMU9H9Kkib1ZvJtC1Qt1j9XcZMJewBfnCMR2uEPaNFLe1oQYC2",
  "key9": "2GnF97q3rVYghzzZQiR8Bn2zdRpe4BfN7CTGQhyFegFLC9R1KzXDjBHvP52FWHDE3fn91SE8exzJhTHxFaXXTJ5e",
  "key10": "4kdf6wnGYXFosknFrypf7iPWPFQESzFtNXL3KrfJwA8w5LVVoR38EPwh4TBvNEAS91GDXyBkFkCBzbKtsmKkX3gR",
  "key11": "2kZJfM36iip2UTcoDeu2cY884FbWrJiWCUgVA9RXaFhbgSiwrq69XpCPRpjDnX5AR5iK9wDpiNXdMz2qVJqmifPB",
  "key12": "2cdFmNcrKvxk4Kvsm3ox5FzZx98jKBf8xm7PmEXSGS47pLLAqMtveDpCrN8wzXSCRxcAPDY8g9gwvHT6ZjWzkUt",
  "key13": "42VkKqgyPznxoqJ6taXELeYpJBgv7VfKLPhVHXnxH1XEXFzVt88R87jhSPRBNyLKMtjjCTffJKBnPBpgn89j8GJL",
  "key14": "2jMRmTuYeVmBDgMQZ7ymufYgJGNxQDtPo8Q6ydBN3TnEwMvT4TdT6wr8T3AvRTb1RqyPMmWXrByQGyz7on5sdSEg",
  "key15": "4Qsvcm35iVaPwaXV4wjFGFZAhxWMAFzJB8nMgArUN1iZ53yCSoyxFsuDRjWfHJJRswCsEoHGzCfJECxQb6Nc3tdL",
  "key16": "W8BZkzTQdU93BYfr6y4x1rVeax9uCNr85o6fTtnH5Rx4y9hSesPWZgn3xaZHyuFvTuhd5ZkMwN8kwpV7x4EZp2H",
  "key17": "4z7Y4KGYbJhh8zJNnLVGPU1o6q3UHaC4oN98anDpxP8FGuTeqxPtjgxpvHv8xnaYSBSoWqEYDj6aE8vbsbpkE6mE",
  "key18": "275gyQJPDdUbWSYN2yE2uwvCzLZMQVvN1Qf1Aoere75Z1rQ79o3S8rAP8ax6Kn6UQCZePE1yBBu7xmjvaTk99CuN",
  "key19": "5P5vSMrhzDBc41MtnZ5pH6umjKLK1Lz5xxSr2rqnMPDEM1ooS92twZ3CLs1gkgtEn3Edqu7xyPJqrkgr8aHrrYaM",
  "key20": "43ADYTwWVUPVuqeP8SfbZcnQZ9sxmoPY7xibmG8ZaicX2LzDp9cAA5fj9PKutHqtHgaaBtqvrLLAWzse1dgZubJg",
  "key21": "3WwEePwpt4T43q7j9rEzEoYvC947DXkYazgitRPyah9DTEcYUE5FPzyGfgcyZoWYNxr58P7h3ATggcrNVBBkpJm8",
  "key22": "2JhsHLEmHFbUPzx5743y2pzzHk7VUh5XBCbtA2kVxrg6BKjS6H7MgbFMLYGbwHeA4vNDpEKPMD76Qd3VsLt1Xcgi",
  "key23": "jjeNF2niSGPPxsXZwYdjEzvyW5YShFjcsE35gFFWzGVTe8XXZjMtqWC7rsJ16knzDbSxQKtQVrAjm9RaGyBRctr",
  "key24": "2qatvzNAYA2XCLRuTKEwTQZtrgBU1F57UueqXoYgGgTFPNNVQho1KWXHyzU2ZXjDywgGegjFa6fNfyzDzVnZHw2V",
  "key25": "3sa6AKASxBKZu4quJ3q6KKN1gHqn14YYNgNmMnFQCQCYKV4ESWXNWYex5TAs58aoMywgtp52EbJLaK51UksH2RZW",
  "key26": "2yzZUFAejosoehs5oTRNE3dUsJ7aBQXhm7hwwC92Fp8ex8bJuLTsuWya6kRrzYbmo68SSEYuHT5uko9yKmHXroo2",
  "key27": "5tLwbz2znJcPVZLk1ekhE23TfasC3Kvqp6y1hWu3QayofzDtMjS1peH5UcAHUJeCpkg9dHofYL37f6jMDA88DCcG",
  "key28": "52ZogBxwcMKjeCm4MLYKKSpnWAP9ANTxCtiWcFyLMALkbqFJkJZF9z3U6D33pzpUc7Ua4ypoQKMbM3HdzAFhGUB2",
  "key29": "3w6VYMUQ2fyhScy5VPeFkheaShfzyZ96kSmvwqtYjjZGEikmokgMjUSWV6hS6gA6ggKUG5aocXc1tzNP3r2E3v1V",
  "key30": "2f2NhozAsLCUDrCNYNAF6NgW3jWLWUURWZ1bNNNUYPsimEjFU8MySDiEef1pCtGDV8cx8tsK3MrikTj2vWQvUqro",
  "key31": "3AfSrn7EJpFGaWA2pL5QdUhVfu4kXk2u5PQwRSMkBhTLbxj8rS9ajhTRMQCNh8y3DoUTMTZ6VF1Y1L5mrTu9tLeF",
  "key32": "5ZaHtPDMJmXouEDBzcrWCYALipTkRCYQRsEtsDYTwbLsEs8RTUq7LxCbzdc7wjGsoyA1ptR7HTMgcKwqtKPYqRSY",
  "key33": "49wa3L18e71v5w6ET9hF3RpsduNE1BcdYHuMAn2SX5zQxpo7BvPTwxQJT4ELuht6LEbnYFXSC2cqnKiBdhmbFYZg",
  "key34": "491kPoWGJG8Pm4h4Yv5MQwRy8HdHRLRc1mbDGf5UtekHkXAZWHF2durx2cfruDzmXYu23w3qe5EZUXr7ECzRKPjX",
  "key35": "3hJfFKC5EDNidPo81QGA2NyhZzbrZL7sBbcTQ8BJsmZQ8xqtwNaxZZ6XyEvixAkUgx8yYhS3BQxvzBjv2tiPCtB2",
  "key36": "2AnXfNL4UaksWDRLFETMJdYjRp8tSCCX6Ksnr9H5VZw3dppiTcseKj9Pqh6pRcYg6cXkZYaEqd8WUKUVkXsNgygD",
  "key37": "2T4faojYUBHhSC7Wr42DeDB8rXBFd9KFjdu8yBuWGE26pff3rDd5WTjwmxFMfp83YAe3QPFW3ADeaWq8L2npwAdV",
  "key38": "ipuqXVFWAP6BoWcTjkwCGfkajNzFczH4vcV21c7YnCUWa2LZMv53cohMjigXNoWvfUvPrvx7LfGA367MBAsZ6ih",
  "key39": "2mwK428CKzGrQKd5GADbnUY7wPTNmFsCr5jwRgFqHmDfgaBx84qQgqz7gyiL7mWuxig4SsKE5gj9f2XGefK8mmnk",
  "key40": "56wZNvj22PQZoUSdLNLEcqLUF48Hyb8LJn3PEjeeYG2xdEWDqjFWzQyyqTrns5ZB88f18Hk6UmeTUREDHN7Mc2KT",
  "key41": "b122uFoqMf99jTH3kCkeDaztP5bGrhJD92ncCdQNjJZYC1eTLESkV8aJpo4J4MJPMyqXWe5A6rxNAvCA3xZMMKM",
  "key42": "497JP5joz6goe8gunhUW68HUjuf3C8jNuE6SoGv5FNiHhcsSiFZhLBartPVEnH2ccEip2khdYMvPwVtf2CzK31mo",
  "key43": "5MFUvdNWLKmEKNhhuBTVfTheJEertKB9TvC7eyzZoGkbcaC3rHQF5Cuzi8Jrv1rvkbNjn7Ae9ubfU7wzCKpjasyE",
  "key44": "5vdo9Ku4kZpBNEu8T4b2G4ATHRBgQ2JaC3QocpSYAKCR2enxKQBDU6jLugWqvGrkBsSR7MB2PeNsYDfaFFV5fxzo",
  "key45": "4VfoXTwQhFGHJp89Z8raYwj9TxoUxhzKV97HkVGjpY5qLy6yS9jwEyDxQbhWt7AC1RctKzwSK1LA1ztegHECyLAs",
  "key46": "5QocpZw9yAaeBc5W4JwdoUQxckLMPnTkviF6uCgRHH5FvnhnRNh3mH16M2Ga76pn7Yjr2a82dk8AHn1Stvfpi4TY",
  "key47": "3BCTDGj9GGXqqAPj6YMdMNvv7pZqpi9CE5oeSabNdDYTD23yBmSVaxfD3eztaMmwCArUfumVyFGAwmT6RQqRTwg1",
  "key48": "2sXSi2KSc8qub8yoCGHeUJeDm8ap2qNjbR1Yswpf5RfZveDgEfqZZUFRdx5yki3ntyQNo7ypa1g8uA7CVyx5DkKM",
  "key49": "4VW12FyxxKPph1bjmkpzkBkL2qqMqBPRfC9AMr3V9WzrheVL7NZgCRnki9kG2gnbEZc5qStVuhWC9eTBVcKkwKHf"
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
