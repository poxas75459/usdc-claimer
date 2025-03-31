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
    "BPHYb4VHFsJR87uRsgMp4GeBuW1fwNBbyaYpsLU6auJRpVNdq4QpmjaDFdUfp9mKCmHnHAPNtQCminv5UgPqYKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J59VPo4C775L9SHAyLmbNrGGdTjzfdLRepKnjcmD84bRCfnjDMBCxvKL7MZMy2Lv7uy8qcgo4X28k7DoEXsTWvH",
  "key1": "4Z3ASVb8heLqunTNLiaAvAa8fCRaBkTL67J529TNeHT3au11yMXx1GbBqzQWxstK6zKnR5HvhSY3B7cnMtVAKUXC",
  "key2": "5QfaJnqJnV6RQ1befgvHJ2iacHCKhT5Y7Yy6hb48PY2R8GZQjGHuag1HrDrABFxcRYSTT3h3VgiDWa4fsuAGSt3M",
  "key3": "64MkSxu3eGCenNzuwqijANkcMzxzifqdDFgm5nHpxwGCpHd9JeduQVPvnEEfQ2jXU8Cue8BDa2ZmH32r4a4c2uBy",
  "key4": "9tLq4NRvjZd6L1puLvYCRHWHX7qeJuqs8U7oGk3HapeEHx975tcLwEQWhike6YcEXjEWDoPccR66kwiHx7Bp4K2",
  "key5": "61ghFoUZ3JmXheAxiWUvdUG6Q6HBt8QQZoQuJrAUvLXuPH8zQXu4xVap9eD1KmmEsJTb67GqriyQ4CNEb4YC45Mw",
  "key6": "5e9BAh5FBWYMXUuhhWnf8Uc9wQJeGL9EWanPgw8wLf95ZRQvVorEACmgj1jTpmg8NMmC2BRihU6cx3991J73W7c3",
  "key7": "37zo7E4YkMzQ5H7arRkVNQHMB9sCYL8v7uHt4X5hGbRiJRARPJHJaUYH9rvZ8NAEFQRcAqaPr6sBwdeRnfg3vhN8",
  "key8": "5kKzciZ7qnom5DUfZrgjjJniE9nBkNZgZ2cNMgfeABChiirztJ83KMcs5tBnshQzXmNWsX9UKd4XmYBirBxkoMRq",
  "key9": "2G7X9t72j5Mg3naH4R9adhcdjsU2K7DquHWMMvb8iUZiQAPkUwLHFb2qywCh6ULe7maPEBTeYkc985d9d5Puwm6v",
  "key10": "2KkHxJ62dtiKMFUPE323H4gQEQwTLaUHwuRnm4MNUi2kVkfbhtnNVQpXReXfaWFyC4to2vUSp69VpawHfYSuWNbL",
  "key11": "MzZspDgSs4QwSnBVLKWNsYNNs4DoNikgAkC2d2ZiwZYzyMVwh1wzW8SK8NcKa7eXTRmQ7oHwxrMkjcMayfjATcs",
  "key12": "5EA5qeEMYGUuczR9HF5VVQatj5dyLSmMNbMWGvqpZSVyY2V5mMMiQGdmJ2JQLgdVg3gzMqWKy6TjHujyKpxPWBbY",
  "key13": "4Gr1xioRGixCPviE5Kb3SPNeHwsaPd3xmV9SvbRrKzr8Toe3BFTG7iSwkCSfLmW5xh5e7DBxffciuZQVdKpGLnMR",
  "key14": "PfLH59pTbKpfDTh7zydyNefaDL8xwoJusSyLaGZHpFf9yiWzgX4AH3qvwZoLUJrnUaFWYbQw76Pef94pvKsuQ4y",
  "key15": "5eT3Qg7PRHYvXK4vUuHx7b649xKytJsGLXDSS3MBEmeqFiTLgAtVu5dSvCWLxQ88MdYd1xFHk3bdQvt5HCMogRx2",
  "key16": "a8T4M5fVPRy8NQDqWbxaoN4xMsskrAG3kenx48thdjGFsFBom7sKzDE1A25iSXFmcj8Bb38qyAd1oyEJ94nrV3s",
  "key17": "4rAMzPzgzoRNXrdd3rpWtxd3ySv4QiLAZFBhZmJo3PqGuSYYy7JtzVKiq12ir73jyiG5bV7nCUGjCLd2C5BG7xeP",
  "key18": "2gxQahDediuUQE4ctoMVm7ueueLvJ4Ly6mcZ4fLTrEbgtwpjQCmXroC9uVmjAiWfcxGRN3TZhxNMgjWjrTSREosU",
  "key19": "34xGM2qbK1XrQUjp2gYTGtbj9P3x24k7qGiwMVxXiLqwpho6FNVLaS1qBvQXfTs9EPuH8PqUAf6pKoH5N9sMmjAb",
  "key20": "4cTHcT16XD3Z2CFHinScNFBWTz4ghM94z7ofxydsSRMw22ZwdaYWbotWQNB3RgQ1CZQCR1eAei8YNTeQTZc7oUHf",
  "key21": "AUeWWkRn4181LxaVTW2TwuBAps6a5LEos1vn4FRFycvXcKvz7Zub4AGErKT6Zx3JRVSpxBwjUnjoykGtgKXwgCt",
  "key22": "4FTUjkAFoYANoPJU6fm6saV2k5uycw3Nz4qgRJ95HhZU4tdXfpQtuRzmsBoCv1cNy76f7ExTzqcHTxCvDKvZoYG5",
  "key23": "337N9ecubwfjvBPjW4SGvUuBAhcT6x1SsV9BcajQqwqQKbCH8iuH1ReEmNVYEEE8zzmhnAkHD3iQpnaybgQ9vr5U",
  "key24": "3y3UV2Je56wiCaREAhwfkvKZ8cqwkqjTcqZQRuh8xLsTZq1b4ozKr5HURt7GYanf6GRM14YqB9Ezv9zQLxw5BJcN",
  "key25": "5KqYkEhqRPjRvTNLybsxP4JBQWdfH7ypaBnAXXQwsNorPif9yRpaUsi27qA5fMVFwy3R4ghTnT9QmA5uPcRi7paz",
  "key26": "3xrhMJnXYdkpzuu6iMtmFj2x2LDQFyesJGNNHyvwGxTE59X1nTSQZLdgDgSAtCCfVmeK5x62hxgWgFJ6ZazsGexc",
  "key27": "5qwBVLHpah8a486bL3SkamBC1mr2WSjyB9U5PCpSd5dhiC9KPtPPbk51X8xnpv1PhDGgeHHMLgkUv5PmAY4cFeQA",
  "key28": "35tNwof1L62LgyGxRyLgmit7ajUe8pD64STt9wZXVpWgsUR2x5BdqN8Vennshb2VoPSLP3egBGdmMfR9TrSKvkP3",
  "key29": "3bjLr41n1VZemm9nXhQ1aKA6iAfJ8yzDexaGmXomukxSYAm8wVL8M4rnv1mt1nmxrbQcrZdjYsDCG7jkZGgYMXqu",
  "key30": "2d9ZtGC8sQicJxrNFoebxd32EiVVYbm6sUdaU6zAkfW8iVVoD35YxhpSMvVDtt82gXHyXbssvYaF14Y4LicTwhi4",
  "key31": "3azFC467YuukHjKQz9CsQjgPEdEM1E1Kr3bDX946Aek8j62bXL56okqKqMhxL55fMo6AKCRvSfz1L2MxNcTb7f6e",
  "key32": "5Loz5f2o8Y6hmoTgfDk4pyvJr5eKVzXTa1VAopdpAfXKvRGYiK2dyg5sgABZ6dAJgWSEDD8M6kJeWRfYCxwpGR1E",
  "key33": "2zXLUMwFLAfkahptb8uf5rWZxEXTdDDXbLhJpXZZGseoMXkLg1gkForM33HGvgyfthAkPPdHsRta8CBM3tpc46rh",
  "key34": "3B6Y1ZuWkDbZmCteSuev45BmtHeLGtfniY8kGWXrLqUDxmGHPie8jSq4s4rW8dASJsCzzv1URuCdJi8TVq3eEePh",
  "key35": "22SQhgSGpcySpuKXZPtcaXuTEppJ5UWtyUuSC8KBrwJWVAMJ9fNe5hgDdCYRdVrXmri98wJeRjimS3vuGGYE7t4e",
  "key36": "588d84Jf4jwnH7MMUfuGKh3QGgKCTvduEBUuyY3FW7WAufLgUtTvGFygJN1fdbbVdU7nmBuGd11MqT4rBXQk6XsU",
  "key37": "4Vp1zhQd4DUwHhhyX7ja4bYA3Pj7b93QrTjn7UAEAioxNg5jC7jJg5iD7W12w3oijYuUoLrB7MZRVFXAmGyPm3hb"
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
