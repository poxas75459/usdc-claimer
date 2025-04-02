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
    "k5JpeLfaWZwCQe6H9VXPjtidPGbZe9qDbczU8J6mGF2TEQcoVotWN2q3HQytGq2zHc7vSdGXJeTJ5PHiXPMwYPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VNgx88vUdgnYzNRiXho5c7EeWmShfPS2r8Q7u4M1a1uCmymdtHjk1UwLF9bvbNeYGAEQPp7hhVoyNm3REbVfMAf",
  "key1": "4yCBZngawurpPa9Mp4F3WXYhk371R9vnQLFkWh2N7DmJjp4XbJKo3XSK95mJzPmAwg1eGAZDdFvmEXt5o2UpCK6t",
  "key2": "2kNVUPNvgo92md9xxEtWiVfRnvyzJEXGL8C4v6pV8eyriK7h5VAanSQsDGwAvNJ5AUy2L7YWsN4APwjfiPRhVYVb",
  "key3": "3Rhugo52evRecpWfs7A8fCMP9GMRm8jJCgjYhDLMFXmysTLUc6DUeJ8n3SitmhDxhzRZXFdXDfVRx9FW59o1vZ5D",
  "key4": "4yfhkeVjnkPx4hTCvBqbsdbCnbRGPNkw7dvcMkMoLzjYPbyu2dZGEL5ScjkKotSLkHr5eQeCRe1LZtDz8BYnTeQW",
  "key5": "4UavUtKqyzs5nxHYy3XxCNvpKkWzubjZQs6NY1fP8BANEwmJJaDjtaUNPewgbUyaRBsJvFSX8hX94w1yhRRTRUJB",
  "key6": "Wc5nTzxV3eWkbMF8PsZUHRfZFe9cQwHsBdEVnDbWrDUwGokEGyhJTr17HLo8MxvDzb7LFnwhexiddu2Vyfpriub",
  "key7": "U9RMw2YBSJL9i4iH3rfLmu1A1Rhy9GFoEKbMtrbDur1rfFQFdPsH3c7RWE3sfyGwJo4CzB3rxKksxnwR2wt7MGA",
  "key8": "5CyBE28sWgmDujC3i4qBRtY3FTRLGU9JsqRyTDHE6HxbWkP9mVqFdzE4bXSVvprYY6XL6feGHXNrrSEmM5rTtfTc",
  "key9": "5GUwpM9W7ZGSgS31eFafSQvbFsbPgCK4HaQsnk2HWuAXTziXy8E42ACHmx76kfMnaf6AjcWG9QU43VYTEWjaEgJ4",
  "key10": "4huqHNnyEa53y1ngzNPJ6MLRVc4NuZbb1ohFEwmSd9kLrKfkprrkZUqmJtegLJQsf2cnsBJ7XeDSTpnrNuuXfUCk",
  "key11": "uTJ8vXNKszZRHzmHa1Y8w3Jqnv4DNtH4Ka2njkf1GViLgse8wNbqhS1hi7F67q6gesj6RqDmRrfie2hLN1jrE4X",
  "key12": "5Xifbn4YBY7kwXadx5UPhFQvvYyFxpRu6Qp6pefeGaBoV4tkTpnH2bMhKhYLjEtAx7FkHopHnewzkzhv9jPq7Gju",
  "key13": "VmhkiSrWuxt54dsBfKoqWGHndUVz4E6qH8wpYJDm4s8JWV6yJXEJZDwHnAZiZNp9bcpdH1zPRdW7TseK86P1j62",
  "key14": "4qDsPk3L36DfQgeuPG7Nhx3JpHzfdcEQdLx9bM4Q8tgM7mzS7xHMQ5rtED22YmueznoqQv5vXsds2JjDdd4eNziB",
  "key15": "3BMyYV8m91qzm51aaetaY758XGreJAbM4m7fubcwbQ3BTgRpUWUXQhChD3Tyu5mLmE6DjdWrNXM5vcZ46SwieJti",
  "key16": "5tjEWuA52kwywuQowdciDrWzj4JUuVhMNjRGL8bEMRfKHG62tFqumnsxKF1GTJEhwxwTUPYWZXsnfmVURDWGtpev",
  "key17": "2FSZ2tDhYWxNxpq6D9DCW1jKQuwHfQRUiDcjpEFVhjRgFG776hPdH44R15c9nVJUi8rZeYZMm8QSjckDoqtCQMYk",
  "key18": "3Zjo7FCbLzGgzS7CbGjhUy1m1RA6LjcUXSHe8hj95uW8PguyJfwyhj88EgCj1dngkLSvt5JorGArrXxncGiTTnnb",
  "key19": "62Ye9HrnzFEbAhFXeHQeuU28vxhSDKBy53Df2WoW4vwfgJYunHodCJfEJj1ZQ76DgmGBrZLpKbmhctx5Dud5opsp",
  "key20": "5gGPfgqUTkXd4z7UxBQvQ2tWJBSyTyJLw47oraeub6o7kPtY9epiCynJXvRSuqorEDHhjLJXiFfaLwuMbcfrVUj6",
  "key21": "2r1K1yUgabr9WfaBvxVrc5iUZ9LPDB4MzirYGstvUhobxwTLBEe6JPmkgSrCWNdyFD6a6uEvyHVeyRTR1cgmXHfR",
  "key22": "3PhrYFiurUhRhFsv53iiWcEUiZqBH5QYeMJ23G6cv8BRqqsdAtZPR1iCHqW3qRUGG7BvDhP4MthPf7KSrfkKeiP3",
  "key23": "25Pp259myKVtoA2iVfMcPv4tc3S6Di1QxKPanwQ2yXJ662wKiSRJZD9bgNQEaw6SCNu9FGhosD2LZhMJQX5n9STz",
  "key24": "3AfpEcE87w2FaMWdd5sP4QezvsJuo9XxTsEmUnitDg2DKZQMa2MbXGgz1xA1Gp8WvDH2wx1ZjNHw7CbEV3kjkPBX",
  "key25": "qWZFp6Sc7tp6pzE52cas9JkHfSuwJWfmUCiEBWea9Jn32NAGhpqTJEyGDzaJvrY8Z7FkmuDx8audkJ1JPFzunS1",
  "key26": "2zT8DFgRcrehDv6WAX6TCAYhRYmBvAsi1BWHrVN2AYqpSRxm5zvmP9r8133B1xfLquTZV2kHjyrF6psBU4YkojbW",
  "key27": "22XoaZnHjW9maHtgaUTMQTHa3LCx8dNw6TKnfAxYjczUF3qazrc2ruq5dxGHneUjJ4fAYnGWji7pgpvkioMgURPN",
  "key28": "KhvEGSopBRxansD5eaDdaBEFxxk4aC64GK1Gz8JJ1ZBu2YKdKGz6RfupaQmQ1wgzNRiF6abTEPdjUCfpyLSC8Zp",
  "key29": "5QvN35mQ4kBzEkkXbkukdPgQ2HKnT4YFfcYEEJUDgLVUmjVnTEH468FTNMaHk9ALsGXHUsYAK5riBtuuxEGRoHnb",
  "key30": "mQtTq2BUkx1pRLnrRYr4SYA1MnCuNpv8dxdLMHkvBqrgX3WAJ2NhquWZJn1jRVuagKmHEXty3GraN9TdjUs1DRL",
  "key31": "4FZY1E7PUj5fMWBBrTXnxm7kD3RJv6DSj9Wp5D4wpSj7Fy8ZJpXkfYDCgbxBf8i1Rm3ysWU5iNvcsSp9r9TgGjLF"
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
