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
    "4DAzFFDLLwQvDNVTM6Raf3tdr3KHtmWbA52zo9SRXK9m31xam47VAtKymWoyuT2wX5UTQXp3ybgdX8hyTebrfAkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EsxUTNHF94MCJ4wTdetoVp5Ft1buirHjBPGyFa4vTSJwH5Xng2ee9jRs6o6sRnrPmoG3ZkW4BQs86uR2iwgdTkY",
  "key1": "xHQtW1q8MMa4NakLJHbbLDCMkHEwxgvw9hH1WqVGPGVe446Y5FELXLJisKFusrzpLyWB3snajinPBygiVPdBHwZ",
  "key2": "5iSWYoyMTcrjFx4SMApbx1TXcJLTw5ZKynRV6SNzfHQLDxB6tXDZBxK27QbKC2TAAQkCYyAX4hYQeZLtopBC1z58",
  "key3": "x58GAvABRQXNiS5N19JnSy6KNFmGfv4staCBtS4njjLt6JPWQK7jJwuGqC9YW6zXHbPWUpbLDD1n4Y2SRbCnm6X",
  "key4": "5W9Gzp6rj54UbgRTF2Jzo42DUWjgsNtdbz7FYccPsKr1DPtjKZrS81De9RtmXTUyDaAkYAmTXA5ox2WU7bJ8TNAk",
  "key5": "5GB5swKvE4JFcPmLJmbL6ByYNRBdhM2AosaHSaMxiddf8biWXkepUo3EmBUZj1P4KGJy4qHNm7JGdDasufSzYAsT",
  "key6": "3JFQwRs9t9aVfV4sTjmuYgQkssQBQURFpNLyU6hZ8DnmkwG8vEhUJU7SGS59tkmykLCf6gVvXxXLLnJfudAay5cx",
  "key7": "3dHH1sBkd7ccxpfVMqEZQ722pJLGtgX5bjiLbkVheoMPcUtZZAAC5HpLgtAEAusHEueQJo3DW2KvCSsJrCLQYv6j",
  "key8": "5pUN86x2QdhdpqzjfE1hU6Wbqd9tqVMxgtiKx3dG552mq4zqvSpQSkEjRJjre72af5jXq8i3hkCtphmZeG4eFNUo",
  "key9": "5Fm4XWFsD2m31x4K6UXrQ3evLDCWT8VeQAfpWNEkTS1A96owM9mCLrAUAMrFyX6Fz7VtUNEyphPWyoq2BsPSicGa",
  "key10": "avFamYqAfUadavBNJqprNZDHN3fabNdWzC4n2HaamUP5JfMWwpD93LdakkuG8ziKJzK2jn8LHfKPDJGYoudgRrf",
  "key11": "47PZ4h1FxSp81Whs2gC6w8jropuUzp63RJbCWdUDxvjX3skPo56LSRpVLtrqmHGneHfW4h4ec8pW2ggwYzZ3dFtv",
  "key12": "4rwu4uZiw64Daooi1v9wpmFDnR9rPEHf3qg2vWxkYZcv3ahTuCfs41tscqUBmJwt23yMghgpkEs7WcMvFWNgAyRU",
  "key13": "4Nua4rfhL5Zk9gfJDWcHKtU3JEC8FYsGCV21TtPqhgwbiZmHVkTXaspqy9FPnoH3ZPHgKLHTDq5kZ1yQUiN7dysw",
  "key14": "TFMXR3PN5T2v9C7dh1aoi8BBp1qPiVs8hPJdaYGX7BL5eNehmSX89f52v4TGSD7rVy5gkuJFz7n4E5tRuDdvt4j",
  "key15": "2mWLzo261EL28iv4zNyJrwn5fT5bdSTwakB2y26dzPZfmVgDBTYXSc21fyxPftjiffkH5D7MR5sQJiop2B7eQCBy",
  "key16": "2cJuuEARCRLuMT2uxZpjUdxLZTS2kjAcTAU5M9hXBiC42BjbE7s6f57aEC8S4TQp5t6XNAktuxBDwH4qtK1rkXFt",
  "key17": "4wEuPNNAi8kt6CGBh5GfmLwVibGjSYJ42LLp8aVQvvK2L6SXJ84qti7UX2A7VHYGZXeWL1VM1bxAtkUDkeRJdSFA",
  "key18": "5BRFgpkftVF4asXdLk4kHJhMfTL2nv9jYaAS8LXqhd6t6T6rWEZNJpSaUut5V9niUDaDaVtsogmuYhGxGwimUCMM",
  "key19": "26ecYXC4ck8Ht3xXaEkJW5DABxzevkASP65Giep889M2XRmcWwvN9GAFLcL4HW1faBKysJWQq7FCaqeNYaPWypM8",
  "key20": "KSDPywEPCXa9ehZQyWF95PYY2H5dAqpeuPowxd3xczYSTXbghbgKY7xH9BT5qQjeSfW7rEApMnyngjL3pz1iDgT",
  "key21": "5GR55f2EuBihX1ri1LdAvhW26pNXM4WM3bmNNPG9aGRRtqmwP12w8MD7x3yTVdkdjnvzZYfoGfF69VoaLh5EDokp",
  "key22": "5988kRF3RoUCoWhZAR8ohAc77iKjZNtztPbmM2S3mTmmNkwgbsfaKy1433uMv3smWVSHBbJajgvf8GNqaqwPLyi2",
  "key23": "374NGxdTe4mKgTCZDtM73s9LWqBZ8qEc7UpEno8SyMN6Pu4XXJmDCQCXjiiAUeLuSdn8bsJwwWU9U8H6UvVXuzho",
  "key24": "67e8CvvxR96BeHdDnCtFCrhJSDyj68gzfP7zoEyyeXtjWfsR2HPmbBib4Sp3xtBHBvQtetag1JJN8BaJc8HThvn7",
  "key25": "3ZnzHoDmjvevXpo5qi2tqWUopyQaRE17BUAk6b9zXWqwcFGkTzDM688r5wjhWummSaEc8AHdiP3Y99iHN5QMmhSk",
  "key26": "5y1kfqYwnWbHpoiGq88oDb7cCU1SfSEozDxMEAQygYX9g1UW9PQxrXLj1yr4ygtFSYsai28isH94UNEf5KNCuh9G",
  "key27": "29HMjN2NbzQpAttVKdhQjp5FyGGZLXMLKw43HbGzQNLE2MSQwKA6XQrm38iHK8JfiAH2rRvxeehhA3F8rJhMWY8G",
  "key28": "qrf563bfjpaRwve2Td3oCeFZTpk1nSL8ZDE9YqHW9rh2JBGUA1KzwGrAtAzNoVYEgM96zvWu8u97VUgB9DMPSHx",
  "key29": "2qgqnLCcqoLKRKtwGJGfPyQEBPxprMFvAeyp1PMszPotR9rb9fLywqZfHJK2tSgKSboXGEvqwE9Wfb8GfXjPDAjJ",
  "key30": "5GnsTcvccErwcZZ2mM5rePAbSiTiHE2ya6oWKenvhuGL6qyCsZTEA4mkK8zzNR9xtm5A89ThV35Y3erpgupo8FtN",
  "key31": "3S3tGCMfYHoTDCije36okFFAsW7TUTF9AQveq8fQ2oMGhC13c1pzNQhqe23MiahX5X2aiEQuF5Ap9ULTJcs9bJqw",
  "key32": "4iomYYE5G6qQu7f62e1u9NMoGSjEFaq834XJwUxiYXn6munH61Z7gGwS2rMWPVrqUKdBFWndR4zFTuWjtYhvzcUe",
  "key33": "2ctjnGF3EdTZs7mEDDZqS1FK4ViLDo87figFS6XrodG3ECPmZcYYCQ6nHgTgtHgmqFCug9bT6gzDmUssPovYvp3B",
  "key34": "4JMmasXsRo33sdx9os46T5Tv31wmEe9b1DejXEoWnnuYVgAtzujLzGYqh78J49tTWFBQqsMJtrqgqtQSq4WcQZmv"
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
