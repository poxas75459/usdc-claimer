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
    "ZAbHu2G2gjeKGfd6ySXDFuLTKZn1Y7Sc1Sin5DxmHndLFnV2XWCvLekufSHdp2ZkT1srxzpSJrx762BYa5PRsHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ABC9u5EQNE56XQgk9yggcRYMQ2EAqHDFokw2aqWucjxnBGEp6ZtHo8YSbkPHhaQLG3X4pdxKhjDHx2F7NZyXrM",
  "key1": "52jeYfe1XB7WJKmZnx8Vhbrj9ccSCn4Azqo23vNYGYRefiWVWSWwc3eAEGqMtJMPEb2yiuenh2YZQQ5j81amtivn",
  "key2": "33XhofNebDP7H6dFQ324kcZpXMk5kH5iWPtWT38kRJ8ucaGRwaGHMR1sbndaqXWazHiau1mVaBg2qWoFXZz9uEDu",
  "key3": "2WUmnQGDSkDVAG5onrP3rsLM8bsf34dr9rZXqmAscsV6UCNXYU1qfaiPA49K3gMkJHYJQmwwZx4zyf9YG9iFmRRk",
  "key4": "4e5mf1otqAB9SeGHjPPuW4vRQvTVkTEbDnPW2dJjR68baFskURM3uJpiU32HGqTJPU3akaUHkV7UnDuhfpPQUf5e",
  "key5": "57rJxG6HNE9K9BuLUPbXJC3gvBDDMgtWb9hgGa1kRHsykjwniWkJEGWhVbHKo8EZVZ7WZapmEsFsWLs3HFyRzUNU",
  "key6": "52eZpvjdn2jDjgdBosoxvZRJARAhamt6Z9U3ZVrscYxdyqqjAgmfHhcMGqnPZGEsaCHNS5oEhQfA8FiC3qXwQoQv",
  "key7": "DCw72npyjGHg1MTtX1rgB8wzLA3LsrjQbBpLpcW2USnN82YZcrayfoGZZiGM1hxRbXBTc3fqk8PQ9ZVXRLzeM86",
  "key8": "53GZcQQRTEdiv54PmVCmohQXmw4qASko9NrzArQC14sS1cJraXfZv9oEZVQwkJCMHZWxYH4TbqYhMX2mN3WUyR5H",
  "key9": "2SGHn45PF1W5cP5JS4nFHH3ydhx9VHTGnyYLMKryyCSPsXUCMDxHiw1kyVS6eSxpEQR9oM9aea5GC1txH7MBaUXM",
  "key10": "2N4rfz7ZGtx1UZHa3L8DPSsn3xMnW3HUYneBrwACtYMeaKnZy6AZu6HuvEQDcovUyyBQ4esGtr4agUVvAP9T6AUD",
  "key11": "5fpbGkbgch8HHbGVjWhg24Tq6M9NLJUJrNKcXHGbfmGo6b38QZph6zzkWcaEtWX95SdboVcMdia3yUpZvCRSXG5b",
  "key12": "n1xuL7PZuW7EaYTYikHGrnBRTow6Scvi6rZs4b65RwpzLSd9jvHURGo77PVLDnMrhfsJYHQ7HW8RrJtHCfYBWj6",
  "key13": "2TL8TFxDFAEuVeuNE2459retFdFLfnGPj1NTQ6npRJKMzjD7UAbBShx7Rk2USeMrNfZcVQKkdzCQ1asiraXiSrH6",
  "key14": "atxES6GL8MybAB1dbPXo9ohVWpt7r4bkg7CvR1Jq6NmmvJxdSaax7XWzcuVoiZaoHEW8q5LVBXpDFm9oQ291ChS",
  "key15": "QdYyXxkp2x1wp2s5jf15PUkd2YK9iQTNnNexHwVEw55cqGyiPngrNp7tMRwhxQ9bJxURsD5ZuW3dd8ZbAoBPMUC",
  "key16": "5oujfE3wYng5PJZ5xn72TvuJUbm5Y9tjZbZVkJS7p4PGUPutdsXd5c2dm7HbJCoUZ1zZSeiYSDP7U1eA2Yu7MyQA",
  "key17": "3U97UouBYQvcGjsfNJnzmw7VCykYhjTPu17UTPRRc9Y8MUnh17Y7HazB2GyjKujnfK1BDQz1zCNB9S6iajtNgini",
  "key18": "2vB4BjgTGdCoJ21iJCrNHqXexzjc4pueVyABUm58KoSy1b3hECgV4UYCborpKBUhCmq3n67CqFmuUJ7EFE44D1TD",
  "key19": "L5pkHaZAck4QU9hh67bMCPpq9ysCUuQLMsweLXvTJSGTNNgBCgswu3BgWjTPMufY9MJLbusf4UumBPpqhZ6ZgFa",
  "key20": "6Q4pY2tesw3C6v9HXG5rXafY7GwsYkkQk2MeV1trHmvf3DTn8gcagMMjEHkDYkTcFFfjyXpcsRRxxL5avJ7DBBk",
  "key21": "2jPdjSGctj9hwXTxwDjrr3FaJnkXfRfnEkvsuJyvunTJCZ8kooucSndFCnjc35imDX1j9vuXFuEe4vJ3FseZ8HL1",
  "key22": "kMLJrZX6qYJJM1McsSx55qmqr4HXmi5he4RrwznVdQTxQi5s2bgqFjKL7a4NYCr6bH5J35hWnQgUCV6P2SKWo1p",
  "key23": "4sX21qJz7R6iNY1otkKq5XmFQoKBE5H4ysb75E1F93e6nD9LybTpHzwUyy1SXtThK2JjMcBYTFp9jbyCiwZ8gSzP",
  "key24": "3NJLmZRPPHJogFyAaor4RPqFhE5maNTEDCr44dcNVnx1ChC5zhZs3JZfWvrA1NDYZVe8YvceGLTHbQds6TcDyy9k",
  "key25": "5p2jukYvz5J4cb5BbQCjhbAjr1aJnbmKDBPc7n6ntN5chjEUVA4wku333kdAJZaE6rWEjrxR5i8BZP1ehVsgtYhh"
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
