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
    "52eCAdAydMWvNrT6w3tavPT68BvXaN9rUEhVMQz9r9UaoWmtZRpjqGfSptv4DFcfmcWtsEAmg942veQzcit1rnQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Te6Tht8cz4LDMqhnMy3J4xg9DFZyCpT5A8B7xZ7Bs4i1rhMeH8gzXfTXQAVBt4dNBJxyi1YftsKUzCicyuPfUA",
  "key1": "2dH5gr4vrescewWvtxtnPKLqK1emkmdDJwo7CgoNQY7pcbRm3N67W3StPCbQDmxpD8oFuh8SFDRKUQwXzzrH8ugX",
  "key2": "256ZXNwwL59Bc8VotfNW5sngWzP5SpNky2AGDpzixT1iCq2HfFSn3rmkdhxNxbTC5p5x7NswKVzdpWgJDvHZBx9G",
  "key3": "5PUeK21M5CMSdQptRf3e4GxD35TbUAsvZZ7PA2W28BvW1Y6iCCzqBFdTmSWAp58j56oU21cqP7AuNdUfBk3s7eyx",
  "key4": "298krmbkJaq57pqZKDVj1UQ7WvKyB6m9xikUN3JbpTFtYBcr1xuhV2oggXTf59juZRwaTwPtA7Z5aFPAsDnMrj7J",
  "key5": "gSS66CtzrtZowyX1NY9mEQbycz6BVA7qzCma8mVVRD21HNkvJuNr2Breo94gosjpsJLPyb1ZiAHfiUyhcswJYHt",
  "key6": "4z4cSkaGYF2Z3vWdvMYGKcdijg3QAK8pvK91sq8touc8XB6hkozR7rhwvjaxuHm5MNwPDbrBv8UZbnBiYwruHu4M",
  "key7": "3i5psK9tZdsTRY2EUCFpWLuy9fF1yefjmGUDTn9ErQmEmFC1sM8hXd94biYFQLRMvWnez4xmiBQnS9N6gNsYVLaR",
  "key8": "2pYd3XxSPvAmt6azGurzv6nziGebPTapZNhPFRms4mVu8dbYDJij1BE39Q3cc3BDnzN26oM7Fe6vQYjMrXWqMNeR",
  "key9": "A3eWchrW5qU5a4xrget7ZFGtdPxkoUqrdyP8ce3wvYqHyTLtZDnQ7vF8sK4fCLRQqTZtrsPcAWfBLhnXut54aB8",
  "key10": "5e8ym6EJpPH6s5miAE5t4q5eyF7T5UusLkpbPJRHYsULek2xYjRJV1fYbMsrCRAkUguoJmKRb9tcP1NjptVkhRFd",
  "key11": "57iAq83F4PW84Gow723CEDcoCoY7uzkzUZz1HZy36kRmuAtqBpzcqkY2sFQhvHsVg4MUMchQ4q39HGC2mjKRmZMH",
  "key12": "56GfwNQhCqD8MY89Mxr4qjQDJi4rHefHKS9A9pxtTsZc25YzgmrLrZevqjTUMiU4uAnbRLBbbVwYsAn3fvS3kxBi",
  "key13": "2iVZ1B56jdN1sdu5CeTEpLdvwsyFp1Zqg942nP2fnuHenA6QRZ6xhZvZ48V1ng8L1VRGNWuL91K6oHGwtTkyWfTq",
  "key14": "3Xgt3ZrXfHG9exmhj8znxLcn8BbijMbdYXhHBhceo39moay6yzgD5q5MxZNLvbkz9C5DkhD4HR98Z3z4uYf4x89f",
  "key15": "64EWLW8E8EHz3UtZRU15iJBG5dY7Kx2nLBSTqJD9noLyjXiYpHNGHo2HBxfpQ3jupRnzABLHoGRfEQBKye4n6z5r",
  "key16": "3QFxfBxM9URYRKWiAZw54kTyYGj6L4SkJyiGkdtF3sanafSuyWFQibAn6SrtdbFPcekfRnV1Kr9HELEpqwFbHH72",
  "key17": "2vcwWxsxppFmUrwzdV8Pd2kKk7bsA5MQvRxejXhMdn7GbnxXGd8xUJUx3oGsQgj4sG6JpJgF1vn4DJ8bTdD1wA6z",
  "key18": "2CNb5xXVyiB5TofkBKcyy73aChD31pUjbwZrn7A9LqhFsqS1zkyA9EQYVv6d1bdEfEqLCZxgr2aMmeh6n6iokL28",
  "key19": "3QZEKrXmB4toX4sedUQWGZVe1fvzUZQwgkiC7e42PmisF2aARYL1PNxJwZAdQsoJShy4kUPnPDn9rnvTD8pVuxVB",
  "key20": "3XZ8AmJtPjpvCFFKjvGwct7sYaQwFAhhVCjqBNqNWqXZLpBYNaKJgEXSJ32cm8BBHrLi5ai7akEL9GfsFg8JzS4B",
  "key21": "3wGWfzV4xcQpap2EQRDD7m8B7oq51ZDSD8P6BAUzAAv2C4Jf1uaFRBsS5MdZ4VxBLNLynaJ84dDrF3EP2SQaRzZ3",
  "key22": "CHaAmxLDSkwFqMNyeCs6FdDH8Ky5p6AtD1T25v6pYwJ5tDZPWk6BEsoZ1NzQnn1zjERaCVuP9GmQi2ffhpu1rXi",
  "key23": "EzMYM4wNjD3kWWeDqBGzYBZin8mM5m4FcBphiUFBqSvPNE7mc3A9qc7NuFsEf9eVVNHaxL7p41dtbtqtP5xu3dd",
  "key24": "4XRaa4ZZWhiHsTw829zmXsdVCvZiMzUUDcw7yjmU9a9TLe5cDzuCCrkTf3eXSeXFTrLJaNQC1v3eSmkXovF2nRLC",
  "key25": "269nUHvAYATuLzeJhWYXwsNxPDWdNrktjrYZBoVtAH7fQuo157Wx4zFXYsZwiHpUUaTR9RB8YexV76VERjM5Typm",
  "key26": "75jsQs9VCaJSvncjV6CXJFYx758K67fygHapxqWP3VmJzxzck6B1KenNEdsdzvibeWVD6HuuCKRcpH3qhXwncQ4",
  "key27": "kRwkn9vTRoYWmkJ6qtKa3tPUWbafvCkh3ukz5SH7otkfbxuBUeLERXcqdhXDQanqC9iX6fHQieuXHyhq9KzoFyZ",
  "key28": "2248vyVcLMfSksaLV9phUQgja1p4H1yZs4Lx93eFzLJGdTEAPtSXcARHTH1Fnp8rbY9kLTwQBaWp5gz8GRCZBHZ2",
  "key29": "2xrtAkNreC7tTMpvpjBJYZ3QBjD66XDZzkf7ZB6XG5W6FaYAXotWNZV2UxeS9EUyw31BGJRnWYdRUx8fak5VHQkr",
  "key30": "2aHXPMUWVRDdukERedXtux6cS98DE2MXrKQPKTjQwKoEo4Ty4w5uhwH3Az63mAAwrrA6P3Ytua6H5Z8mup14JyLM",
  "key31": "45Y649BVnWUyiUSF89cc4HPQVZog9np3NUp6M1dgsjP8WVeLMxhAWsdLuNDp6TgZ9XUt3gMRYSRoEGSBBq9dkPw4",
  "key32": "41wVUako5CCJNHfbCdJeGrYUF1Ym34dRXrH5QdWbre411yywdBgkyBkmJuDvDBgiKsAnwCwSqdvrjLnbff3YtEaP",
  "key33": "31aGMQwXD6tBLzsCvVK4wd6RSzxcz9UPH5HSPexbVn1XpTZ6x7JgWFNoG7sdspQRz9rqziNyidf8SEEnJpwx9278",
  "key34": "2JqdjFw9T9qnGxWg1dH3MQGcjCTxwQjwM4pNQMpUsQ8RqWyTbxMVcc7VHnQoYHdhyCEn6y4DWrZhwXm5ZMhSmGeK",
  "key35": "4DsLUCLjo8VzoXX9HHxfdHFPN7g9oFeCb1Fh3aLgCzCFYefh9W1u6iszfH2KqteJTpFBqUP26AWRogMRgYoPVPRA",
  "key36": "2yTehGiDK1GFGJkirzU6FgmwLDRVJgGH8VsXzGjmnhj3uio5v5d3UyRQybN1qN3Qfiv12S2xbWuDs1rnghd2UHSt",
  "key37": "2sii9C51mf5yAoh5giZ7tbKEKj9X4BgK6TkFkS4RLcLaDCDbCefvMMJpXcRaAXGkdm7wo33V69CNU1EXePjevXjQ"
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
