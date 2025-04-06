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
    "jn5rCXgxYdf9D8X5gGPTuXwfs96DgQvmPSFhYQXuCk8nVBginSWLYqPns3Q3Bk8F11uqUmm8W7eqrnPWPTo2Efa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fTfPiCzA8qrtnLpj7zUj77HBpMZATVn5FAYJahJZcGXaw5uAbAeKVy5iTtDTJ6rVq2xaJdNTr2hUQ81Gtseh2vG",
  "key1": "65HXbr5JaqmQrVVYdGyfyNr234N1BC1d5yQy9zQozfTa36q8RTwz9DFQ6YCbEBuJ9MA11mmJ9KJHyzoUuiZRUW26",
  "key2": "2Tf6xVnJUJMYkoarZ7a6BbT7RFdPzrvaMFC9DnLuwLeKKSMe6NZNuKFeCC8XryyAh9Vunza28RK5f96zyU4rDAnW",
  "key3": "2eNwGXMS7hssDc52dhLPe6keh7AnZpFW8ydvQeAPHkvak7a1BFpg52XD6gkYQhL2R1eEtqu4AUSixufJktUc69sn",
  "key4": "53k9Z68qLGHDamQthHUuASTLCLSoRA27G3rSem9J7QDACPHNhdCo8tK4MRodg5g746NDyBe52SAjesjYWyAxq496",
  "key5": "7vYZ1NcvTCA1V9ESpf498puXw6CBxpteMvsL9T1UR71NHpNpS1tWP13iuRLW1hMP3UVAt4u6oWybvY2zEwpb7cg",
  "key6": "Axmnvjfe9TKNbt1eT7Gc3e52NML6Wpro4zd5W4jn3SCN1KB3mcd8L2W8bDG5J91cs5vFi2UaaQjfTLPd2Me7cfB",
  "key7": "iV4sdBYKrCwmgbZedXs2Hq2gyvYFSLJAQ4VJpfd7cPdrBXcgo5zeU1q1TrwKshAKZV5QLwGgTX7cpqRYmrL9sff",
  "key8": "5rEqCQ4efYbyCNiTM2N3k7ga9iy2CdvaBHgRs8dzg5MGRpk35Aux8AVFrJBsjjHsUrz8Vh78YK1tekbqDga6exfK",
  "key9": "31LGwz4X5kgsGaHM1ksrgJRgCdS8XPMqVDiHxGaGRZB8rBVamzqJarnZzPHF1UmBF28HXjMEqx3ZruSTMmzokcT3",
  "key10": "2GHZDtXbQEovZx9mvTzFcpygTCxKwmw4L2UQtBd7dKncYyuPsZ4CBbfKfUMopmgCpDjPb7FL32drLRCFs6J98jLZ",
  "key11": "3e8mV2guSM5QzBDNeoqRbBh21WMdTytfERjs68rNH7x2LRGQahXEMwyiksuzTaj1MtvfhTMN9KGZHQeFmQPGGqan",
  "key12": "5szXTyQkomon9TZSU89ketmnQXMHLBh6zPdN4SmQu2XbEDuCetuFyZ1MbDatP4rFXUokyP4LinLvsV2GDpAvRapx",
  "key13": "2qSR3TzhSgwpU8ofQtRu4Ecz9kLzNasxwxAeAvPdeWYLdYNBpFRgCSJamURMnP3U8L8TTPLUDkcpxqu5bKVMBU7h",
  "key14": "34vd2KDweJZVS9gXKrRmkcvwx4ASNKSb5CvdGxFMUhcqWP3JxXSqk1fiJ1aWrPCgsctQPR4p52Xm1vJT4HMVt59M",
  "key15": "2P2VSZMQsofoW3a9RjaYTkRJhSEwMq9CbYSvFpTTvNfsZrAkSUW5JUswcL1rx66dgMPbpt4n4CggsdmxfWEumFgr",
  "key16": "7fQurPQfjwpDAr6pp7af1wbVFnwpntZK8vbdBL8WqVKoZet5oP75c6RNQRZPPRfywYRgSadNP3P8PqWtnWB71Mo",
  "key17": "4rUD93bAzhTQdw5RNGRtwPHzF5iZ7KBAG86NXKbeuKexxpzuLjZyX6wCsDnQGS5dB3AopxgHzSqoZPPGaYNEGsrk",
  "key18": "2r1Lw6x5HA2gqCQRaQPoBGVUcaDEiieycmeLn1nCkV2FcqMMbiD1Y5pUH3uLT5QW79hfzm9gaFSmVz9Um1q8Cc5Z",
  "key19": "mxDKjJD7xSUhEn7L6EFKzZoqttYifmfoTT8HPmpaKzKviYi7cCK9BtKKa3eKMjhYDSqtGsPyiLhP8DfjjChG1Dt",
  "key20": "2aGoAUz41qb7p8WMT2SSYMysvPvnCPoxCjSkQ22surNiGvwLxRLvu8rueo7FR4pezg9udLkVwnqZz6xGqiAYKRgu",
  "key21": "26DuM4z2cp6N9RXDfMh5AACv8nNyMT7DFCGzBn9owCPjqtJ4ULZbgr24D9q4RYDztVtxXnRnxS45cFFrSnMt4BAD",
  "key22": "2ipY6De3qU5q15Jd1vLSGohvMMWVbSuuvpWZce7RgHeLJ4PvnY5SmJqgEw6z6LXKQXgHdcqiHTjQySADbmgzzfBv",
  "key23": "X5C7pG8sMCpGvEnsgUYuwi1wjCMLz5bSCcoFu3uyAckXvujMmqyqnJ4naXRteWcYkhFmTvbrbYqj5p87L7EZCgP",
  "key24": "288M4mQJTuwMFfxyE6T9GUYXcNfyEqhb8fropg41AgLWDRUDf3rHx4oQnwS5WzX7XrJUthhj8qDRh5aBUu2oMgkD"
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
