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
    "3n4o5nsW3o9gUmbSV2KG2yALGM1Fy7FZsMokKfzu7X2dXXeyu7CMkNMp1UH4xwcRsALqrsBbktay6DsxqxU9HCK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lpo82uQ9ovBKEyaEmpgYBDwKW5K4b4u2SmUbte8e6xmEvVUqycKg74SpmQorBh6fPgaSaFY2SZAzDDRhkzLfvoq",
  "key1": "2b9Y1RLJfL96fTmqBvQhQU7FjisVshbegcXma1iFNpAsA9sSW4PUmVGUErimsnk9YqAPZJ1eWgaBVwVQJaRfxGfZ",
  "key2": "3BuWnJMosoGwj389FWfnCLLAu66HMMbdoZNhNvbbseJgb2JLFdRHKbeoL6PtaBf3fBFaHhztmeGrYJzMHexkKCDE",
  "key3": "4SXLjKX1nW4UVfzGc8WNPnMdNgAkiMzzczhPzT3YB5F2gtbM1KWJ9ckCje1JBKmUowqZdGx1QF94Rbujr71UJ3Cg",
  "key4": "245StZkpd3K5RUYr9uvCcpJEBnUQMoDsUkFgY6Du1RB2ToRKXuNsxHU6yPddgqFkwk6dq7szHaf8x4CnY86ytYut",
  "key5": "59pQjoBy3ZPdV2AbjTnR3gabo7RUAVHdeavJC18F29FtDPSWbEMh7uhQK7BiDhJ5hhwbNExipDQ4jdpTyFM42HCz",
  "key6": "32vWHCYDA8eUFn4xefa9uK6zxYUe1RnLKiUXDFjhq7Ne1xEz8dsQcHfhTFD4p1rbhFpNAqvBiK89Cqv94GQWQZhn",
  "key7": "2CjQkkdjdf5HcozKogjXJj11qh7cR5i5kpSv3ETSBjsDoDFtqfregR1zntAX8ziQBRpCYZg7uRAucCU742v3JjpS",
  "key8": "2kcww5h9G7HvHKPRWcCbXLQprp48YXhdzdjk3qoEMhK8VhyfyTXVm7Ty5Mw4c6SFzNVfagMduvNjnhbiU72Uigfh",
  "key9": "2iGXAVgLxevPeKy1XBvHgeAG3TBvG9r9PxNC27RuLLVm2U7opR1sMBFEB4R9hXLMM38SUzNqjQzCHBNBVWCWsGos",
  "key10": "2BjbUSg6J9HUgfWtiUmYsBcFvZTgfoqDUHzsz1X6GuM3SeGDjzzQUptmQJPgy5h7PbTeTnkrtR2pBzG6NMPc7m4g",
  "key11": "HHphNfg6PC11z5SJsz2bVYzxMrMkwpjBoqKjq9CD6cznjc75u75RCCe2rLLWFqTGseWrE9FwGrMtaqVE7hufXGr",
  "key12": "P2TobwbwznVibKzE9FZP7fFC8XGPmazqgajhyiLeyh4fbEBnxoqheinBgvyoDyWWuJxcanarqRF96UjYZjBikmo",
  "key13": "2NY1hQmjTbsULeteoSb21Mp9S1CbEEbewcnqxAJTFBzuC6gF4pqQXFANNrQrdASiTqxSnXu9TRirNeoiNE5wentw",
  "key14": "3rTTMBsRzDAJ74udPsRy1gtZJaA4dTs8gSbL6nkeBwZMiYtArxJVhxKHsBubbkGwnTeUDjdWjtTDPMUUJioSEfAK",
  "key15": "4uaU1khuUxLiLWXvTJYTa4Z9nKaBeeZ3zkpX4M6KPBNWGfrL6kCJqAWBEBe6M8sqULrs4joEbZr7g5R6csTPhYs2",
  "key16": "heWSzuiDvrq68XeSGYKzMwMgNvCcyAm7EK2FPREt6QCWeQEoDuJiVXkgUq8X5g2wCzzsdnjdjW6EMSHfKPWG6Tc",
  "key17": "2j3qLmnswMcn81wMt51SfGET23B21DQwjt8ARJ4nb2pRX5CGfGSPnicVd5BZzTHFrXGorb7Jgx22LyX31aKDqu8z",
  "key18": "SjPbHFF6M5bcv4bpV3YFPYXeXjzagdch9X7nfP4k1Lv98CKNMLaTVes6qbkoztapeaH7LdeVGy88TDgKqiHzvaE",
  "key19": "3Q5d8z7NxYiUpG21dM2LfWRmcsMEisB9ftEv7xcKtohMZaiNFLyVgPYest21TFNMhEBAr4GkdvY8ZtsQwCGjGaP2",
  "key20": "2yzZ84f8hgfpCwWU9JUN8GrwyeHPM8TCSc8HWbS9SLyPxisVzAv4z6Tnzfa1dBDrRqESeF1NknprtiZqevV7aWZL",
  "key21": "63xpU55xZtKXU2y5LmAiovcGgVJZXn3GyFQf6fYxXqwn7pD3QBfiwfykKPxUP1D4T8bs1fDkNRceTvm573FZi8Gb",
  "key22": "3HR3UtAz5S14mRqJMxeJyWWG2yueY38Z1NCQuDNkgpVkkK9WNrxWF8tc9WVNPxqsBk4bFyAZrwPBB2zm1nEfRWUE",
  "key23": "jk8v7zwEiKL1N2LCm62eV7hmHMTgHdyXonXJh2uB6tkTcBQbfzQ7w4mRioYoe5RULNPukroabnFr1qvjjsaurnx",
  "key24": "2u6dJZR6KyAaftN4xyMDN1VPNdWTpKxNW6qdnLHYCryiMSaZG6635dkbxgfoV3mgdyKiRbhUVUVVZnzuqhN3hsGu",
  "key25": "2FfLdY2bjVMeVwV83GsjRDxW2uKw7CczGES22PQHSed4miEDqePH5N9ejqGJkYJQQALAmhv4QAumswZ14aVTYBA5",
  "key26": "42bSFiqCWKLfPc2D7afNCtRMLE1gksRLpukS2zJ5kUiWGBcHug4hNv2WVzPfBi1G8BiUxBWzeoJjv5pgpEV3tAKK",
  "key27": "4tgjUwTxTBEmvNDHLnnuQKVHg29cyg9UCPJhmh9bcRC9TooMXjdBujxhLjksctBcE82dowbedZnohySXjpnWxQnP",
  "key28": "3Bt3x5PHVrJmvxBHWWMJJaZsichLL2YQJuotYQ1kvva6WmL7oULziQz6JFYmtC2Pnvdp4u7KSuUQ8SfFwS8SJ2Ga",
  "key29": "3SqwK2bAvEB63zPdtShykwAT7NsdvSv5uXAcBqrJvcFbFyYX85Xvf5VN3JgsRmfvBStx8ihfyXgEmeNAcGh4wDfA",
  "key30": "pEsuB4mN8M8NYCaEvxrZNCtDekRKa3Sb9y9krGEkS5fR5tQj1gxUogAKhYJaUmMk6bwaDxkmdZuFh6b43aQQoRw",
  "key31": "5p4GZKZcacnebFv1UAsgoGDqUeqyeivfRU1AYBjAUW7Z6Hs1u3YWeFFck2yAdQe3Tn3Pwp8ox5MYukswCZf9Bdr7",
  "key32": "3iPai9eBPQsAKEkPe3bLCUU36wStdgJRAJDrL1X1abj61Qp9WsgvxuZZeFowqoQ4UmBq4SdLDRmpDZCLCjTYa9KF",
  "key33": "29cp33E6xPw4QLq3SMd9a9W9HwnyCi2KkdT5WJ3fneL7QVYVC8bPgCA1HwcJ853i6zMFgK3vjgPFs26dgC257v3c",
  "key34": "39gzQfZ6sUrGtqn2go7xPY18RZRku255zhix3QAXu2xTyXcvEn3PKbkJyxG6QHTdfrS7d7JcwYVZrHZjsDeHmoqF",
  "key35": "nU4aAyF3niWgfTSahFXEAvnecgpmLDjj5yagdAKPj9n9nw6ggB1h5ajPVh5v1UpS9sNQojpQSaRstAZQcNoc8F2",
  "key36": "4oTqUBrh3zarkyhHiYB6JpM4i8KJ577ms28zmZE4bSCv27prGpoD76nQy52groG3nGLtUEvCEobHjzbuMJB8DWGo",
  "key37": "irdy5Y7C9xN12YMJQdjAgnFGeJaQ9Hs2FFh2VVqjhm54iszaBPLjAuyJ1X8w5dAVr3soZ78AZhsFnQwvzwSQRjK",
  "key38": "FYmejQ7NTZ2sd9WWyUyq6C3Uqa2giCrnr5dpU71URKLHWxB5jjBgANrtc3462DdUV6j5MouvRDXPhvAThdHumTw",
  "key39": "oWZ2eTcRxw5c1cSmaYDWA59ngdjSrseJYXDD3xdyzrmfx2zU4sdN6AMgW6eszEMcFK4iFHqmdMDov7cDkq1cAj4"
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
