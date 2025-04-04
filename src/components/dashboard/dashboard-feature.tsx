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
    "2cXMrHGDDVHHx2H7dWGQC11JeQrPJxc38o3Tt2Wp9fKTkKo3uJ2xovDoDJPr1LPpXwiTApQC3c86iTquDPFRS8TA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XvBPxvyqseHoUKXRwk1Jpde13ZscgAuXJTEF2ZdXAoXGV4QWPMz2M6PSkq9q7z3L4yVUtmfPc2zAMrTbaJEy442",
  "key1": "39uB8dU7HmSGDatqeUBuvcQeJQnm2opoRTDiWhawDK49FuAKWNyvfzTRXLjD4b96MDJd3CsX5hxqvQVDHEXtVCeH",
  "key2": "Fj8zRdezEsirf47xT84L4D8y8XGGUDsUqRtkcxggTnyiKgXKJ6CYadf3aYQzTgyHVruuZdS7FPfHnnucguoby9W",
  "key3": "2L4Sp5Y1DJ96CFQ5nioDXMVAEXQEPmb7s6DHUWfa9HsRprT9zmuiHBAQRShJqna3uGgwfnomaRBHyj7iKpXJNFXj",
  "key4": "4sF16RdmdrAmLyNNQyWpCFqttgXMHEKUcCN339rkAm3EvEY226whWd2MNjZW9QppmCNWajuUZdWYyZQjWHdeCvkp",
  "key5": "2Hdr3jyfoS9sNrZhBdP8rJdsiMwuhn2phPTsmKESTTxbVoxvvq2gXhfpd4kVo4XSbLZZbkot7uHUGXki7mXkuMF3",
  "key6": "3dmepjWKt7TVvniDpMpZMwbWqt2pdZxW9vtxoVNxzC6EnqSqgiXbibjU73RpC9gpGqER9eEmo75mGy39Df6VSJVC",
  "key7": "3vGf3HZFrkn8YVtLS67D1eRKse8r4AqMdLGQ1KhiPPP53E7qRgtMwMnjBLm3QeZtGWoaodrRuEu3DqAdVzuEY6xh",
  "key8": "3LtNLGqNicFXFG73jyYtnbEKSHVmF45JMPcHEjMFM1PC16DHVfPpnUseMGG4dt2izwmRPXwMLNPwJDn38zse9juW",
  "key9": "28Z4uDzxzznLNXYfy7SdJY8LXDoogMRXvvQJXG7GbMGL33ZxyaXcKvk8mGfbPaBNTdy8YSEEwCUEULgr4ywkhDD6",
  "key10": "1ZMXm6ZoeW1P7W8gWkyL7y4akdtE9UCu4TUWcomrmjihdpsRBk7hUeXDX7T7LGVRo1ghvujcgZa1VQbYeYxPWYW",
  "key11": "2j9dqdNFb7eBE7XNR1QaFCbB547N4Gc27dKjyUZjD2aYCg6SDXXZyWPfWZ6p2fyMTYXwXePKc4xhZZ2Edz9he7HV",
  "key12": "FQocm4YTcHawyJq9CWQ7HZZyqksCk1LCug4sQ6BSS7TjBjXp7B961gT32vWHA3b5CCsnJ1e2n7Y3KU6JaWx5C3u",
  "key13": "5wDyJ68fSm9JKgf1ay7yGSMT5KedYDsurwzgE6vtJdQ6k4vZsZ6bmeK18zSJ2DUxRi8P8wgwDPFQDtsruYrbpvhP",
  "key14": "2yMzdVM5JAsa4nzG2GCDa9RoPNjJVLD26qN1TaGFRxMWygvUpk53wZfRAoGFZF8oSRvzVCWx5F69exQvonuokftt",
  "key15": "543pLGwDMhMXbZaHbDHZaRdRCWynRERcCWhusA51mXPnWjiNMEWsRvSREWHfXbqoNcMZdeTXdkKbjAq6yt7YSkrM",
  "key16": "5MZSsuFs3ahDDzUSCNyNK1XS5MV2JR5v8rYPeUpBa8uRMvXGu4Qakkg5MuXHfkXXKZVEhRziMy8tmMSFUAVg7Ft2",
  "key17": "4LyKmaLLpbN3E28eCcLk7JCG1pzzWKuYGfVHsSre5qmAXcp3AoujreCU6LBmJDTKheLJE4G8L2RGswgQMeoyhCJ2",
  "key18": "56nWiCQjQGF6zeWRbaeWbcHoWjMvjZDgLE2Uppor1399L5nPdr7HFfMdDnhLTxXEU8MSiSRsmLQ3b78kSnYUTLkP",
  "key19": "5m4GZzFjiRSQTzWgLVJbKCtxBsdnA8jwXyLwcpm7xBa374kF8cmdsXJ99XkUySowzMFb68kWkqvyU2CBxUAyZzpE",
  "key20": "xnkf6fdyryDpAUzkdXHj1sRYuDSDKkbv4QJ6PNqyUxv6csAwsLmZ1amjPTCCPspoMXndZVAkjfhmcMEyXLkTuJ4",
  "key21": "3dTpNBpgHWrPcSQGmWRcFbApZx7j351jsVzWv8ZjdvrMXsoJGmeMuxkQPJNrBQqmW8WroaCZBUMekqfAvmbRmSH4",
  "key22": "GQZLsDiZ9hCbWn8rmTicaVk1Qu8eJs3T6n1HDAwaXH1TH8o4U8eZFvzHV6yXPMChEZtqPDSe5bZLXz4cs7ZXJ17",
  "key23": "3U8FytMGUjVENwo443bzeXfKgTem264Z7qz1JarDQ7RdqyxZN9T2FJHQVkKJSLtEm994vEYCitQXz8RCMr2oZAcd",
  "key24": "4uXAHKtWC3bxgBaUs8Ec2L518jNWQi6ueah6e8fzKB45TJ5Mp5AQJYNsQ9aGnZfGkncnfgmbCWPbqK8nQZtK8nXE",
  "key25": "2ZCpkqBGqHcaFgSCxt95iByvFkbU9Rub3Fyqw8fk3kwMRBVpNdyM3g4Nu6uwmkXH5NZfBFH6L2umwh6rDhe2CXR7",
  "key26": "4au4XytZA14U27zcryWdiS3zVcLVbsxMAtMCfRRX5Zai2sGrB4oTyV5E1R5xWqUjh4ENdYqTaiBb452pUm26BcZa",
  "key27": "q5yFC4mEBnjvzKttYcVxg8vehDu93o9cMA6zDY8Ti7fRYtas5aixN4kNViqoFCvSNDDjkwnhx9iNcm1nxgFQzWg",
  "key28": "eYyVCRqNXn1o1pC5u4V2jk7wGx1CiiKuUUjS2BHTMqC41UL5EwDNLXCk5uDqvdWXUXpK9g6d3tMZadB3fuJiPSD",
  "key29": "2aKQz7gm3jbd3fbqx4AaTakLB7fnjfTwqbhGLckkz2zZUaEankz9K5heEBzuzS5G6EBWVE1jt6S9DS8VhDmsN5CV",
  "key30": "odxVKz9d7tHbwMToJb52SJJr9YpW1ED47h6X8dS285ZrMrk3XMXMg4xrjj7SrU2QA3gX28WWrsisZvEKcZjdStR",
  "key31": "635rz1N3SeBEnUxMQ59RfsjSuG16ma8QMazLuBvdZubVfCCGMNeNMDJkmD6TGFopSqPUDA8rWjowzxaHcfe9Y5Q5",
  "key32": "5xPbpxqMJjHwNTmCFC51Ldvf6Y73iwVVh7vY8Ufez6o8Zc6nrsZbkxScew1hkELDZW6DFYo79x8KTjHbBTfHjRuc",
  "key33": "29ZeTz9qiN2p17DeTyEu7tJW1ECB3SR76aCb5P3zKfDDmMxtW4cDSdKVGvXBB8iKX1y7eQz8TbHvFm8YAoB98oeQ"
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
