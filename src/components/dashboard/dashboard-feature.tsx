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
    "qYyPJxMxXjF6xuUtUEVjvHpDQ32cGc3U2MuLYerWbyRcwK22PGhdcwbXwWmqd8dbvqoDu3jcL45qzyh2oKaXjST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gRwZSsK9MJ6w4oSLgjges6Lz1bPmgZtTB9XoMQq2agBntCnGbTuKezyGnAhU7JWxfC9zQAW5od1FbUiGKDvAh2c",
  "key1": "4iYuSxQCw5Z4QdPCspj2ZezcYJ78DeCqfdc47brQ7eMy2MmUzwBvfTfgQ23zuM6EkSBRJ5BfBgaxSQxp5GFgsA8T",
  "key2": "2rve4E6SibndGfa2Kf6eaLj6twfi8aCDqbHvSt7w42qZ2gUVYVYGK3X5wE4AQYNN3ExKVdc3PgRc4Mk5FxB7TJDk",
  "key3": "52CxVBn47AFTwTjsovcQBvCqiYdyrStekE2DrmvxsbNwhUmMMnS4Bf3SAJoPL3NxDQiK53YBAfbrXAVYLVx579Ay",
  "key4": "4qheger4uZTRHVKeoLu2m8Um6F2zBXQRUtZu5DuB3vn9oiuHfZC72pR5uoq2ux2Yn9HNzGSxb1nXGocBW4ekJ5rM",
  "key5": "DEc1ydaAz7TeDgqCZ2LaNdGfHWVoDTEdRmjd3ivr5G55puj3DDmLtw2X8V3PGSSo8Cj7VNjQX5L4V5kzvYmUQpR",
  "key6": "4jPKNCLCze9LTPtUkaTe9FFss1dijnPiosMXNR49v2UPXtuMHRys5tJuh1kZ2tjv6cgxvcztvbUFVhESRURBqjdp",
  "key7": "EeF5ZodaakPtsATEEafPJ9uTQ1xECBXVktn6WaSqMNKK7v11FBULeQDQzyahbrsKZ9MaxsoVBgX8oQ1v2GK9aht",
  "key8": "67f9rFTSVjr2mNVGDU7xB9fE8pJBcFcV7Vbj3gkzJFkaYsTHykfKdPFPLzn1uDmg3RdYZCGnb7oKTAnZQFyiYntx",
  "key9": "Lh4FksTQ9X76Wr1UrDbBFeX6qTkbvR9JFcLhWSTqGVMPC1EWscJqRHGhzZVGboBtodxccSXoYD8eQi9LpjzDiwc",
  "key10": "4F8dNSrXpeJ23MB2ypm6Sd82ZAV2pnN1yRvfZkPaAZ993hxKEkAtn2qA33VzQqr3n9FnRiuvw1TsETt4HmDEjrYj",
  "key11": "3nyMzvMbKyKLAvQVVcuTtBiAdLJtdzhHHusRjMjnMSES9nMZHKReyrQHQ9qkGsWfsUMHhMkisf1WBTMPi3wAWWr8",
  "key12": "3AKXj9FmrwYtuF8YhHBuGEh24GALkCREDewDNZWWkRPhLXCCaPLTnHVsiEFCSVkyGwyoX41HaCGhpE2PPeyMovGb",
  "key13": "36wv3QPqPgE1LdJ8mPDywtBaAjGrBzp7Mjym2KsvPNmHaWnwDCLCgCfWr5TegozHrgDKMYWrVDZ37b8fH2Nrjjjy",
  "key14": "xuJNXCRKRGQipZmsfLayuc4YQXY3LDwYTngku3HW86b66yrSq2D5Wyd7uDsWdT9P5hBT9rbBTwEZC55Fb1QuY1m",
  "key15": "5si1vnwho1ZjnUXRbsL2hqL546BZs2QTi6uGdDk4nhAYbc6uPY8Lvj9nxLoBy8aKRZ6uqHvsEY7msfgA6suHUNzY",
  "key16": "31R4RHnxCTU1aiwRsJ3nf82Vvp59rSuCyyhL8ZCcd84toHBdzysBriCKA4wf8XnVwEkUrCTcysFSxhmDwfE2jmNh",
  "key17": "4YmxNaxDWkiFRAZyohYDv2hfCDLAjGYX6gsHUGf1hPnCT1WWGYKtnWunQw6EdfegTY7X2gJLaE98pQr1aWGjBcvA",
  "key18": "4FWC1Xo93MpMuirgMPrqPXXZANjPybJjBet1ux6bCRT8yuFcYwcpBshEggffjmuDDdsa6xtSJ3ZEAMjC7VJxrt8y",
  "key19": "2hfHm9icZiASmKSdXHVjkTMTuM1nJ8bytSMGtS4V9NuDWT5inZ7w6gJa9ErMKgoW9QkkNAMvdEJReyPbdp9R1hoE",
  "key20": "4R1xfKCtN5ntULE7dAMPpBtCj1NfuyVkN1p9eyn8CYSGz9SP9oj2ivgbconS9x5t8QzBRJmmrVSK9CoSNLpBvbET",
  "key21": "2tEzJnLgXgdVn1wtLFao7s3aJ91b41HEMwBppv75Ajtr35nCmpPEAQDSz7D2ERAGTsfbNRsRwywPk2DQ9ZnvGbVN",
  "key22": "tWFyw2HMFcafdNLuRuhJHKqzNGaPxUheifvKoXqLJXAHofL21MH5vLGiYKsfAcuHPRJF8UXXWhkpJwJbbkPUoDD",
  "key23": "3AEQ9x2wwc2NACGqvb9zKktonciNpF7Y75CxbKj9GbR8q97NjewAFwJ2GWdkaEiHmedvTZ2jC4J576h8Ukbj7vqp",
  "key24": "4PsypbFh4UnmLsYuQgbnncWgw1H4mA7B1iARqHu7KrfBkW6S8M43eXLivk1ftHRZL1gFmJMUb3xbhGFaymBhqDNz",
  "key25": "4YxMUTzH6isnnGvQiekr2y2rU5kuCoFqFCXWe7pBWgjH1K8WjsRbhteovGxfFvDzc6MaX1vJNfEGw9vaMo7DHGyM",
  "key26": "FHdzZivp2nR6Lu5tSK6awC1arqm4tbZ5GuGL8s9Q6BtbSm8WW2BGWHUqVTH71x5mas1z2yoVgBmghJUW3eLcegk",
  "key27": "V28HEkca9k5d3DExX75bbFFWoveCUNt8Jevr3JsuqxXAC4TTeFp6vuVLWugF9E3UD1eqzNUv8RFf6bLxeMNCHkd",
  "key28": "5XumgKuSJYUVJ8mcrqMekaFCMKjFP5bfTpw6gF8eB7n8bX3koW2jNmXqKmuQ1Bjv12QhTDyMQkPuAHLm5gdezT2u",
  "key29": "296xyv2YL4x2UPAYsGhXNbxg2dSG7MrzgiL7pWGHEFEVTDUfMXNfZYspPfnNHJrdDEuYB4SNvH7mpChKPXzpA5cs",
  "key30": "2ZPkENuTLKZKyXJKzRArwzQmEspmx9ddo1GJeq2fCrFZ7p7WknMvF5t4Kiz9KGKBpKUrftpsusqFnCgPJnr1Mbo2",
  "key31": "vcgmLayf8CtooeUrWqZvdPR22WY8EteFNRqvM2C8XscskeNQ6FFubTGTAEpX1LJkhc5vpfxykJeZWuVyLcqKarq",
  "key32": "2swmtwvyvxkWVWrKxxYt8pxQ6o1HgdtTARsx28uLjR5J9vH8qnbDhmGNQccyVxKawe1J83CEuroN2K8qoZs4oeP9"
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
