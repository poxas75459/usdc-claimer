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
    "27qPCPR9QHHTBQK2QCYQsaGwxk1csJb3FMgiaDv7DgumtWcsQcPtX7Dp72KsL6onZEUFLwLAioiKJconjNAKDrZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KqXa2f9sCdQNNVdRaq7qqchXGrHDWWddwf1Eioe8gUbsiRbE1ujY2fDQp988yjdAGpaXpRDyukzw3oW6idbGWkU",
  "key1": "3QHcr6ownJVncUVzkRgboa4ZUeN5dRFF9WDQM3jSqXpQEJiZf6KKgvVFZJXrvob6WXHJBND9NJS5nXeMLwUxHRzX",
  "key2": "5REUkXUFcFSPR57LLyvE6zfiugVAxuGh77GAiZsZ2kNwc1V9UvPMpY8iYu3fefuTtcC4f1ybV8EJfKFKc7nUunfz",
  "key3": "4AC9dKCQ8mrLAJ3e7cggxnM3k4yzJacZdvroDbUrgBEf2oKzR4bXQE5a5imRuUsnFgeWEBEbjf7oPezry93L2eU7",
  "key4": "3MC6fPyhdpv1Wyd4sQSzJ3DgX97h77qvod8sJQui3ciA1KapbS8rPQMmNRN7cSTC2gnJUD272Yi1zK2okYQw6apX",
  "key5": "2HZDZL6eQT9YEQnDnNRALHJtVSA8KsH4VwndsgQ6jkF3K4D1NXsFiGqNKayS3HspYcdaPm2QHDykU3HWbfPDXKHT",
  "key6": "5gGfXC3oiLCXrXEnTNuBCQPkE1xw9qAVdeb4Qxf4vS7zGpfQtJYBnj6V8bnbViqbdodSgw1uhJ5eP62hou3htTAk",
  "key7": "nMw8S8W9TRfBizP2D8hcNss1cDFjy3hYzEckfM3WeVj8j6yu7L7cQHMdXeeG5ftrQeUEt8DXqd9EXGejinkvZt8",
  "key8": "2kEGTC3wii93QvfsXdKb7AemAv7TQe7cGZUhoadDKQxjHYa7QRfs27Z3K4M18rXr35m86b8kWaZbwYPErq8QYTX6",
  "key9": "5WVKdsZYNT1iqYFH7nAV9gkDUzoPVGpxFXXtJVEWoTguYZ78sQGwPsXZ8LpR75JFUdZEdc2vVwUYHmWBrg6ump8c",
  "key10": "2rqgwDGFigM4m9ygJabjeAa29DgUNTJSA5woQdft66AsX7TUPRuTWJSLRDF4EY4fFqWUeLk1bHF1eBe3v3C51oq4",
  "key11": "5x6o7rG8MHgVZCkG5RChk4gu2TPE5ZSTQabZ19MmHJbe7FKQBjWbb7Xh2dLcWJL4dDSLC83ZRsvNFiHiJUGDGWmt",
  "key12": "466ChZWcQ9WB1zxWtJcEvZMaRQqfTqXLqVWQApeibTvg9FLPDeqxWARjFNfy5hasx6d3HsYAnpB5Px4vbw8j3RLr",
  "key13": "F5tbYqs8eTVsC1MYDWEcRJCuNVMR82ycYY4ALD98j2vnfhxc5qP13REibTCNH39cNVSfpyBGsAwwj6E7kEann8w",
  "key14": "2kHiEvsZeUvLXYC7aP6mgDPuvwpxX8hMLihMK77DXMCcuRenLTZc9ZwZ4uvYa6HS6sETzwKYBkQBGM1dHbDJkNmQ",
  "key15": "3TFAEANaeq1PAPaneVasCxkhmgUzumMQwmE41so462WmY6vUeT48zaqeVyo5CGnYRH2ZjpTiYUzZAYdn1FqATKji",
  "key16": "3r6DRjzoL3RU19hzgMfYz2JXXd4FT4BnRG9mCRpqbCbfYqqVmQkY78R7sCe1KZB1hNoqNAtyeLY6RNCMsV4kDB2m",
  "key17": "33VLzW9pEWw6N5NqAtMw6pkSPxUJoYC9sH8Kq3qVYWmqCjwK1X3JEqLZMFfBnhA76SSDYwAfzPxxVyBC3q2SWjau",
  "key18": "3Nzu7dg6sED1146afZ858bJ3T8AMLoG5DbyBC1MEXBL6zFEELfiSkr6VV7auADCN7nEgtAVzXVuwo5cc5rd8KfmZ",
  "key19": "3VaJ4j5a24LBw3VLT8StXrWooKtwjBiWki4Snx4gxWcs9LFQvLtXQo5AmQckPyEXBAxuLLwy2ieAN2vJtjwzyEod",
  "key20": "aSBupkoSu38NCFDJdiZrTk9s4og4gKwdkMvW1KqQM8MWsJHgfUCYKNeF8LeKtqkpd6K8gCogK8FP1vMwvzwcfCi",
  "key21": "3ntm5X7NNb2A4LfG44ViTpnj6wQkYjp3qKm4iDJ1YZf79QywBAXDEkoSUsNRdNBy5bHaRwnZ4rVhLsFxM56qEhRM",
  "key22": "5DRtnwYZddMad9w7ABCoK9udzvs4ugFdyrGy9zpgme4BbucrkgebY27iUnBrAa3F3vs7HbeDi1pDK1mVnjmn4uZY",
  "key23": "56QQGqbSVbG3rJpEoGLCstrZ5M8BJzMEM3dWbMh791NLBxCb7nD1Bnj7Ug7yeLPGMz7mkGP5NTE4m9ASbry6RATc",
  "key24": "4kZMXjKATazsPLmoSPxYKtxdcZg6pK7E24dVmPhJDiZ8ju7Pa4mPMDRWMHcNXCV6JjKvdNVK7cajAnNuxqxotXBP",
  "key25": "4p1z8gsFrkb8AEyzSeG2pVTTnq38vxL8S8EBgWpLGpqVBpwNfongqcmcyBfrXAb59BAi46DZifEphyPLdDKbrwGW",
  "key26": "3rZHhoGjNpDJENp2ui8G8X2UQJUNxQab66WiS4J7nSd14RUiqAnb5YP4BPZnWq5SR7DUn1t92LaWmRZ7f91MPiY7",
  "key27": "2PKw8rzc1TXQnPELqCxsukYyqMcYD4LYK3RHxmiLRU8PjLj9sqXHTTsEsRz3C5g7fToDc8yv4o8tdvKaS9QkDKiq",
  "key28": "2MicgFJQuqcba662bK7GMHrQnVnVPmXXkX4dy5y8bV8j7BNrBSWRCNe6RwFKvbrjLPUvDJ2nQcEX8QQNCiPk8bDi",
  "key29": "5gaPpjJJEsNb1kBRCR6MTJapwNAYxvEYukHBt42Epy4JSVA1ot5RpUgGFNYDvTbc81qCUnPEnyGNTE1xPvTRWqou",
  "key30": "3QT4ZYfvmWY7tZ4URBPth8eGd2e3q17K9XaAuJ7oW8ziLz2K1muUy2XqwbBpo5HqsdiguzjpfUioRhQBT8XJfK6u",
  "key31": "3aPfYEQGpJRty3zXZR2rwQ9PdnBPQXBU6ZpCkxrzCQdQr5nKoDvq2a9RGx3F78LTPBZSAY5komJUrxmukRJVKAgR",
  "key32": "4iV83dYEDujhCgPyj3orDZjenTM1ZcxYhYi41m4ViZRNuyKEWo3gbUrtjg9WHp8rNJJ5JnbbvHXs7rSSLrEp5vLC",
  "key33": "55U5N63rfnjYwFR6EiHSo3nVsM7djZ4BGkJzrq84cqaCEJZFDMrPfiMH9JcAvLKwjDvobhYXtYkzw8CbrpXd94DE",
  "key34": "MsmiCxRhMtSoGoKpeAsjHwT2ccZPvZo93fgYUBzntAP8fyuzVgKmdYsZRaPoKupZa8n4UjmGBG8dgPv6GJdaaa9"
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
