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
    "24LLYnLzpujwCfshQv5vpjGe37GBKwXTGkyV6Y7xqJXSGmgappvKVpQ6HhWQhACjna3ShAvP2MitAFLekNzkTaX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vCoMCNjuN6EmVeZAAia5dkNPUMVBt3581NdBHFBpEb8XQvNTZHaMiYWBHF9ZEvi4JCGQvHBoWvkQryV7wgXZREd",
  "key1": "4Swp59Wj19cJ8mS9qyfekKcBzadTcbQTeGVRRdRs4pdE5nciF1fHwU7GELheLQurWcnoD8nqkUKfSZZ7mmUUpaiM",
  "key2": "T5mFmGJgnuQsWDaDox3Kz6rJVWvgmwMxfWMmVtDFbQzpSWqsLgELuLMaV2fYQXtNR2hzDW7aB2ia8s6qLEVMVCE",
  "key3": "5q79Gx8dw4iAapZBBREjXVGQ98e7hz4upRioQznG9R3L1Cp94YcJ3VqEWFgxjCWSkgUBrnwPHfEtkZhUo4soTfBc",
  "key4": "3JkdYi1t2TipVHsjMb9TVE41PW7at9t1Bw7gV8Liwr9qdD2fm8hSGBY1pAJX2DNeo4KZNdxEQjp4sSyZr8t7s5xp",
  "key5": "5X3w5gowYZMQNzFNgJBATTzrzjt14szPdhHHVXyjr2QoiKHkj85kTPkr9CWCWp5CdZFqtf3JWGv8Awc6yFdHPpP3",
  "key6": "4RZfX3pRti8JGJffqNu1ADbocps3jqCndiQqkBx36XvgXnAEm4rB44HrAEaPrNhyWhdPPsvnQiJydeftMm4Xk5ya",
  "key7": "21quxvCugtUPxfvdiay1Ratib7PKnTJpqYC1HT5Q8hGDXkgfbsign4owhkHXS696Ljbec93U2kdx16eYrfcMChK3",
  "key8": "24AZmp3yF2Goekoyt9Jm65V9C8yamhthEmyuC1SHmzRcCPmiXtqPXfUbWzniWKGEZAAaSVMjCv8bfwntm4U3bUDc",
  "key9": "4PPpXN2yjgoUGgdzASYvoxRWodChfK7PZviR5PEieDtjTp8dj3i1LNhm4bKnUZhcz382U1ATZ2qkxJdwejmHrZAN",
  "key10": "4ifmnRE5EeNRiNLX5QD8kGtspRJBwKfFtrKP7V2DeaJ6nAMaH1qd4PqBpeTkiMA681JMVVY15b3kJh8XVZkUEEjN",
  "key11": "43CeSKeb6rLbg6xdZGsji4pkqHzJeSxY3kxoHnokrCTWqDA82Ed5W3ZcYuZ1UQuUzvmaZ13BsBkLX3SxorSKScu9",
  "key12": "5GMHcsDrpdvcE3zY34khZ2FtgngbJyygDogapTrUKB1i3PquR489muyGbCkuNMs84ddnei42zm3wn7mnmhKBMmt9",
  "key13": "MDqtZXmiYJDogiV53hEM9RfTzwpJumxcXqduVWtbYpRW7zfegEG15CmSCAcLY2Qwcv7wHwAjpwD6X68WjWciisS",
  "key14": "mf9qtaFio32jWxM3Z7gBV737zUvk1bfWsNP44U6FvGN16kKZbQxTfXhL2qZAXVSbyHsbgM29mwVxkRQV9NDtwRN",
  "key15": "5e6eF4twciKSDvHeYhCtCS1pcXmzL1cJ2ZgTy3DeD5ZrWStNQsdF7GhBYowjbsJNXoG8XthCfs7j5BGQVDYEshF4",
  "key16": "66pzSPUMg8x6kJ2fGu9jc7pBE7BD99rmgFmagWtvN8zurafdPFWxjjripVFWvBBW2cj9131GpsQ9FW4ViHsjk8XB",
  "key17": "vXAC6B4NVdgw7QShopA8fYLMD5wyjAYKAaaiUpA2EBeuef7YvBpFDuoaJXuYN4mSPBDUJ5viGufEijQ8raFe4hK",
  "key18": "5zChWtGGexfpFREnK9MBsFzqPCFwLzAicvU23UjLvt7EGtzostnCEm9vNHkdnKXHnDLyiDEek37vWFfcMYUWK7Ee",
  "key19": "4gDX4TrLtpWLcWajKRiwH9zZBhLTsRsahFFCjiTqQQBt22mR4NGUU63KZWpew3X8cgfX1pksMNxLJ9zAXqoF6KDu",
  "key20": "36kB1ZzorHCE7kVsvmTbt9kFL3Uzzwb7a7NFTrZBmjddy46X9dipwxFkXrtjcw1hy3wWGne98z92YNBr1hwXqpLh",
  "key21": "RkVp1661b4ccSbxwxWt6EcYN6orz8B58qxJLkpuuidsS6WWcxMSnDV8ARGAwqET2jTrxAaGAx9sGXWSDaQCHgcV",
  "key22": "2zMz4tPnunxLw5hYh1r4MkiCicnVaopBXZRVLfmcEFbdCstt6FFKCECQxvXkXNk1c4ucYhbqSrhXr6gQ2uFKqN3M",
  "key23": "5kavtcD1K2yMixEZ4ArKMKEpzZPmUcCT33fJrpz4LhT7CBUmnPvdcXaYwrSgLdLLjxdfD216sc7UMbgs7VnSauJt",
  "key24": "2hFqoXsf6XtiFsWVzfEYBBwPrb27KGPkaYqwxxdfqyo7Gn1xBH9HLDM8GmUmBnhDsfEAKXBWFjAXH3YMqw63qkbU",
  "key25": "2WM6H4AFxmBvqCsxA44rRQnRjHqL56bsL7SVGBti3Qwv1HbXdJW8QEgpDgBfHPdLx4xesTPogNQ2rdRkjyNx9go8",
  "key26": "2V8J1REXhdagdCUH9kk2dTTjCL1m5JW6y3kfvRNbWXCYT2ymcyGe2hQU6e8ihaDwFMmUNg1LP5tiu7cTLhoFTUKf",
  "key27": "3Kq92fAPumCSJPUFYiYJoWeAiuFvam7tFwTWAXYv6ffSSzNhKzfdgU7rLovnANyn4ayUrxgS5iBfEEGYS8hFyijn",
  "key28": "4WfCkWY9yrpBzUAw7TAGL2ZvGMehSjDmdJPQ7evQsztWybnLa17XbYL6yhqfy33bmAVT81nJjgCvNP1sbDemVyty",
  "key29": "5VYmUJqRr5K1Kkg7DsGecL2k2Xmfbv4ShFxEFQnnSU5NASV7wkBc4y2pcV14Q7uRgjHp1nxHeaWW2xTC5nxsbuxw",
  "key30": "2xmHwhMVLKQWDd4bQhieNE3XpompBB4k6AxhsLieQGwgAh5XyYnFaFtYnCsx54ujRkQ81JU9cJmuDSAEPLE36r9C",
  "key31": "5ig8PTE8wztRqFtN8SddjAkmBTymBnYQh4xQanL7mKCgSYSH8TuoXeZQFBYS8hbovHv79NHXMoWfR4s5DGaEV8j4",
  "key32": "5WDLgwnPAVqMPLFfyoXHDrTAtRFvof5w87NvqS73vrdE63XjNE3jbUfZYWqRbdLz5zHNL98HVBQ5ojgdJfrErDri",
  "key33": "31umNc1A7GHbbJvrLo31APt3WwAXHsEcPBq6W3aE3v1FGFyUSuKkcqhYTjVxp2Nj2ncdmqubvsSRs85x6PqxZdGf",
  "key34": "5qLdJxaZPdNSenJv5jeQCjXyNzcX2DnCp59UcqRfRNVeerMDKJweYKZ4m3Ujbd7QgYpBQaKHES8Nqoa3Lrj8h2PL",
  "key35": "5nAFj8BdkKHUkwXMwformTtYVAfNsYzxhft2fEedvs3Tat4SaRWpm2XQGv4o6J8ZqCzsjBPiAsSWsNvHBizGHiFb"
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
