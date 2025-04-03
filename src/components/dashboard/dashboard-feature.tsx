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
    "4uYPuerPWukyjkDkZ5AKSL79kenT6Qqk4z9dH9dZTBNo5dGynPxFiFxn7tKM8GVaZrJFvzsauJDKWLzCKDmAFaii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2szfuscZfxdxH5oTrZZ58AFGnCuvzQLkQcNRoEYwzNKLsY9MMJSmtMK61QaUQD4M1phiMmt2WngUzTv8iR8JXBVb",
  "key1": "2UDCEzffLPJuku5i5r3Ts2RbRpGmc7sZreavgHqe729fa8daF4GMmCqSx6xjMCkeqYBJbPiLTW4ze7DJkmDzjKGF",
  "key2": "4xtRzgnsbqvfnagqkmgA5pUfQAaRTtdHx5sEDobhCFcg91xnJRnfTjGDvJL3h8M1uj8XgGnT7ErXMBMKykR1ueu",
  "key3": "3Y9RmW4MGorgfbfEzkmc8ezPD32cSMG7zVdEm5Vff2thEt4eN1axDsfhguKArFiwjTbhDT7a6x3gE7Cv4wPyBuRN",
  "key4": "2YtSNKkSkaGnpFuKhbHGFjHgcNMyxj4Ba7BPdmotrBoddfoFRREcAVsXiLvKggDqeU16zA4TTegYp6MMwmyPtBHd",
  "key5": "64j4PK2omAf5qhMt3U57ywZZPXZaMJ7bYdEz81xV3kucBt42UP3Gs74srg1VXrPhtJYPC134dGBMuQD8EV8YPJG6",
  "key6": "5UMyxqzvdQzV6NKvCsYwDHJJsXAAXXUboRZSnKtetHovEMuwYRYLABwLq5GktT7bo273Yd48iPmqCqGXQcL6Ezkv",
  "key7": "35JuTEk5gvhnozkDQdmwwKCm2s24XafJufxmGy7GWjAx3Xd3GZMisn7Ve6wCTRHPSKTgPQakmX3uaQ3GgigJJoxz",
  "key8": "48hGf4ZyUv3yhjSAXX9sxVqVyTdsEzgfjyWNcEg8bXpbdrs1tf6umZ92NsbradTnNpQdtBLKHaoHC14byYuMUUtT",
  "key9": "124wwLFAyQtXYHH6WW7EqqVifhYNRkJuw49WFAV3kUCihqAZoeV4B4rvrS1smPiTsgZ8QL1rWkWcgCPpRaJBxUaU",
  "key10": "5q8DbRi5EtJk4UxmsY4sUz5DNWiDpGRd5qYZAeieZRJvXLv2bsvVY3kg79ZL3S2w3taRpP85gCubSYd1jqkiMWYG",
  "key11": "7PFFZ2e4fw3Pidp3u4RqZVwUwVGkTm5MBDvtV3K5VTAr15RrHzknyNMUg6WhwBnaaV87YRnCp27i1WnLPJc9Tuv",
  "key12": "4TPbC1YRoigvNZfAk9j84GrDjgqupsAyxRUxxeMFETnH5wpXXKDitZuVdfZ7cqPBuEeufRJnn3jRPbUJTcxbXtft",
  "key13": "LxqRcziQPPp3QRwEKA9s4ojfaapGUoLjgFB1GirWFCAf5C1y1MRnuFqvon1Hyyp2pEXWk9QfL79VGA5bvLghDpk",
  "key14": "3XXaTqko1K98fZGVRoTa1LcxcjtXYo1xL2voqrgwtLDwGebAmPCnCTJ9ETH1NM8YVsruo38TYUsyCHAbr5tn2Du3",
  "key15": "2B6CKgYmi2QgaSsr9aUqBUiyEE4ZBi61zHedfXiS7nDvWZ4KNQL5TBfGx43nHcGgqsDWYawnJHD1veR6H6ze59Vn",
  "key16": "2GguPfWxHWX7anS8fSkwA5tGwBEhyfYquVG5LM8kWAy8fkfJQoVBAqLzBmq2Wi8S9FwuF8xwiobksos2jjpmfcvP",
  "key17": "67nCbZoBSLzHzT8SrwFBSpNRHvMwjH4xHW7bqSWTjdm5bhvsu15acdLBtJngsHEBqGExcpYwexpuoV8vTDsupa32",
  "key18": "64BUuL2XEzuSsAt8dkUsQnsWbcRYJQyfFxswGJwmNuqXhz4MQQ8gJ5WLr2PDduxSdzhdeojRQShUJx9GDjVjRmhq",
  "key19": "5Qm6LNpWtBESTSiq7r6Z5mnGk2vzMBCVc27nJ3HMaPsJXcX3Xs5ttW1wcACoHiSkmEqxhv4aJraNeoX7E5WirvSG",
  "key20": "2VE42iJPH9sq5AfYQb24HXapqfQ1cvPiEHY7XF998mYuy6JquLthFkruGgYgwC3W4LT72kDGsvZxMKmY3R7WFWnq",
  "key21": "3NC37GS24XCiUvo9MQ7fTLSssgpjr7WjDpxEEDXeYgvmkRsdaLqcNFSJaM21Jjh9rCv1N8RjcBgc5AjqyPXuSnM",
  "key22": "5sWScoRaMDrhBpwMCvf9N78cEE8yC1Lth3VqbvqZqb3V1P3wkL7fJ5221cY9h14GSJnn9XaPqS9YP47UNxwMqSQU",
  "key23": "64zxfQiKmzzAY7rijZtYETZG7t9Yd5D4SUnxrDFyNvuhgGaJfbNBHELNWT29yvTtrZcLDSMhD8bVJHuS79qbML55",
  "key24": "53B6xhJt2F3QwnLNhUGyk3P8cyxVhKs7Hr8bsSwrgGLDTWztGNc6uxuQkAwEoEYgtYLuu3VPsqhpp2oatajgFekh",
  "key25": "64Epyyg5vq43rGrGrk1hmhYRYxJmhyTwghXvDP7xJRxkR9hrMVzK56AdQmH4K7A3xRChUGQh36cM7ZW2ukEiBxAt",
  "key26": "43Xpu3P1XkeFj2GtGwWAUSYKtX3JPtMWJ4p2Ja34chaLb4rFbQh7kyzRM4ZQZDmJT7YDrAGfWpPB1KFvgD9KLqFR",
  "key27": "3TQummknMk3KSUqxUwcFNXf1GTrzQ7cgFdMMewiKUbaDhea4CeN8Y5eTFa3ZjDKUwrx7u13uyAw9yuzM5YtASCAu",
  "key28": "4M3kGLS4GNuuSjsAajyJ1axtVPQ7akFBvZaZUfCSPrAyYMYAYkgfmNckVei4NPFNAPb6ocFhH4MHpu8JQBZiEmSz"
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
