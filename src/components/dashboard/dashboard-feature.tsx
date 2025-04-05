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
    "4zkTeYx496yc17XvcnVAxgrmqrfSKrRHXtJaoZZVKRXq3Tr6R4RWCQGo1kbBUoSFnixCNCJ91j2hfJzJp86rBaoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9pNNZKpn1wBrY8X2dwDCJRLhhdsUvsu1RXhSssEtC5KrDYKoTEW4EfsqTKVmHCngeHcXxnz5z6SuB6GUCcJb7Sn",
  "key1": "5zt2aQV9xrizxP5KsJda5jyqJBWGktXhTVonJrsuzSEVDKH6s1Yb38YdmKgE4a9YcYWF444wVVf3YX264qXV1B9m",
  "key2": "5829iaaBwiPTiqeZeQ2it5bt4G6UCR81eUv4pTE3JYhkSvFbsucfQHZFqSSU3VdgDhawbWWDGQZQWai7xdGdXwT8",
  "key3": "2kAVnLTKa9vKKPhWL2WF7uRok7x7prhTv3S6iHKAc9YKQfiXCF6NdUGKohCUwMoDCMBXmQibxuaPqjnMbB89CeqT",
  "key4": "4RzL3Z47bNtfkyxJzWmPqUKF5UcJuibLwKW1DYiSkbRHS4tUNbUU9tWwB6arGCbzFC6wEhFBQe1pCSZeasdNGSQ3",
  "key5": "24B7o8AEubieEr5mxtyujAYVPRw5UHqSGhtffUTFzJ2BWZcDwrCSJVJjcc9TDzhYf13xQjy4rMbWi8JLesVNnzHw",
  "key6": "3jfuJxn6hC8KxuYcJARUREUKdkMNXRV9F4syUZs5Axd8rCmjJ5ThhA4WJvwfoCFL5b3Qg86f2Hk2kM6sdnW8Thz",
  "key7": "582vP4Scx9Qfkhxy37P6GvVBNBrs9hFecMocd4esangAW56zEvzRMYQyBzGWCYAgXvhx1iWRudSJnRxLQQvExweq",
  "key8": "4kDYGgfLWmabQPAhRDVBJB9P8zeq9AQQe3jn8vdhbzKma3e3tpkRWRepXytyXxiPv7yXQSiXwzNJZmpaQHtvu8k3",
  "key9": "5BAgcdbhAxp5VRyG2HyBgFMHoihQoCeGN928kawM9dJPphTFADj2tTEwS5DUoUabdpMDP6ybNwztjQ9UaWHB4Sf",
  "key10": "51QoT4MPnjgCVuYaNS74gjtXyEKbWkytRDhM5g8LKMgMiNuTNXvqmmFWXYizfRtwB2TjXho1895xHWqucZm49Jjf",
  "key11": "3sTKqWkUqEUiBfa4PpgsCympMHvfAJUXLPsE9rtEM9uvH8vNgyQmKxkU9KFGBJjkqtaJA6TAQrMmj4yCwuQCUc2p",
  "key12": "4sunp5DhFk9XQTePY8MLjtnbZsN8mQjRfcfgNL3z54waBeRo7nnLvRRCKriyzKMFwWeWgNu3zqHoq3KyQBVW8U1L",
  "key13": "2DbBbarhJbvJxhPZJmdNkVLEMGCW7KJjNQdfpZM2qG68yRvf9ey2PYsaXiidrBt9fpZ4Mp5B5LBgbM7Uvin3Tzwu",
  "key14": "2Req5iNxga6QL5w99w6pfoXmYXviR7vtC4WcaWYr9Wk3FFdbibFSE5yHaYBx9KAtGhmrTPoSgVcuUJi8EChamNAh",
  "key15": "44d5HdXUUAtFWD4p8DfM5oGWoxtbcMq4bA5YQVyR77fYUNxRpnNy4fEFg6NaE2R88prGRuuisspgzrgZg9JjX255",
  "key16": "5kSCK6kk98gvmwH2pFCkAHoAa9pqrVpuxjKZBqNX8w4c7CP8XZUd2zCCHcLo7Emcz6SN6nb8k5PWNzPkP1EihR7H",
  "key17": "2TPNm44wg4TXP1fDJEqTqtieJcTkietw1f8q5JufAuTEKo7hRoq7GXkQJ2s7wnkTgcfX6RHCAwUKG2WZ8K32VY4o",
  "key18": "3hhL9zBEA4WnxvFyFMaCKWMxjYaXQM22JnVCW6sjyKC79X5qBaCLT5oA26JaatamqhwaJMAFmsUt9RigLpgvaYha",
  "key19": "4rg3fpLbNH15WnUFYejB8z7qiq6cpr4zXvsFjTAsvLLG7c29gRnL5CZbJos3nUy3TPh7hhtMA4BNMU2X6RU4f8C2",
  "key20": "58zhyS13sqPFWuUQxUhQyqmQbDne6YiCH7Th1AjeNvcTg43K3k6W8gsoXCroYZLh1oqMYUBHdo6t1M9D6o1iEmwQ",
  "key21": "2q3DEFhmGrPqSqjKMonNBfRxfLwmbvAbAdyEsQu7124hvcDhw2WAzB7bXz9mCL5nqqVN3EZ6ien7PjXF1XW62MLw",
  "key22": "oYTGxLp6wG4V37UAx3ofRbJsCthHxEpMY8bS6ohRuqSnuiRy58ThACQTFVTUfVvcG2qTKTkW4FJ4pRghrSmbdbe",
  "key23": "2Bip1BwDr7tmudSLEgXyojMMGwxxXJooXP8XXeFFfxxFdJbzvkpJgq14k7xmV3fNbksfxeCaE7m7q7uw7Dtc42Lf",
  "key24": "3ekpVkq4Njz9fYTayHVZXtJLiU6bpDNzFV9UQV2oGrqpN7KqoH2zxzynHL2D8gYBf21Z2agDCtpThQ3xjVr9TRiv",
  "key25": "3n9zMtdJLDWCBeY57Aqp86uR54di2EYpiahh5CQcjQcQbcWfzYqjn4wtF1pEV1Vq1XijZR1jLRjxKLv3fu2ubEFd",
  "key26": "2R8Sibza4sNxmkLpCoUTrQMcmPwu5676ADA6pxTT8QaB2k65r7wKHDth1grLE78td1nbzJQzPQoHMogqiYNJyJcN",
  "key27": "BNQvZdHmSGz64dftu9a8i9sUvmTRZJfRUKrqATJVvYb5DLmobrWHPG5zD7W7ZtcsJVxGRNGGSD1zbcA9dXHW7kS",
  "key28": "3dZvSTksVitHUcDEgyYK7ToTDDw8kkwXeKxQNy8Q5eUE4SLBbi16ckZNuLUD4KmoNBBQVax8WwfXeMauqEv3odJd",
  "key29": "midg3f4Vb5cRwpXjYSNQzSrxukdpUSVbUMpRGcYKmyB8AP69wovXWiod2DgJAmQRZyfHduXvMrNiAFnFBAdut7W",
  "key30": "3CnGQdAjPj6YxcNHTs29kbeTNy8Q66ktxpoAZi55CmSLPhteVhx6KVDL9z29niKtWroV2owquJFU4Ci9WYB85cgu",
  "key31": "39JTTK5SjjdMcZT7oPVYx2YnGwSKh7w5LR4VZg211pQ6XPakk2o8KuAW2ybZWx8PYX1upeQbctJ7UJvqrYYBsgHJ",
  "key32": "5XdP6x37L6eQHpaXBawzPhsZdFzWvyDEtfXSvuBMBG7DzUUFZ7PPr9qL23wUbysN2VX6w3JAbYip1gCWtwziFy4i",
  "key33": "61iV7oQL4XrT7CiuKrSoEodBTnqsXSUwpxXQbadCVSiwQsEcCxV5PbjoEiiXFVGGcFuuALw1Z8YNDtejkLGe874D",
  "key34": "37hEpiPfvwCQL5xZ2GfhHwgPpFWVbApmoaXsvwSMa6g73woLWLQuiNj7ctHA6y48LrP6VdRXvef7KFyvWARz1xLv",
  "key35": "3kpWFpoNiRizMGpUXjqk1Qe7h7X8YRjaKeuYWrHZSL94vNA8RFcRLAkKMnAdKwVu3v2RM2JNMXvVoFLnc7PB4tzb",
  "key36": "5qsDkms2TC7hVu8N7uChNmsReGUhDxykCnkNU61EcHW2Fh1q9WBqvTxcPNm7oGs5XHZ1vAZuWsvPBo8zAhJQRntc",
  "key37": "3M4BK6JtJ4uLMRF4JrL7pGyfCoUzyDfYhxtHkf6iWx4yddUf8H4K578FeFnZbh94F9kTpGPD3ii6RavVBXncamoK",
  "key38": "22FvBoom3ryFf76Umd5FTKErpnMjwxmUCRJ6JovBeVHbkSPLrxhApn8Rnee7qFor1sCUxzikjfgMT8XM5tcdWNdf",
  "key39": "4kiJ2RYySQzPQiQsr5TP4YCtuRacZaCd9np1V35gvYMCTppy3JqzUk1ctanEqNA6GHxjDQMsZqeffKuyGj7u7jdN",
  "key40": "389SirncqvM7sbvKBgiTyoYUrDSQpBS1QRATUdg3ZH1j5Wg6k5fgvCe9hJFLCVii5Ss7jp4BYyowYwN4Euvi356w",
  "key41": "5aSmS7uJBvvDdFzLDW8Urdt5kCX87GXvztoN6M6vcAMho1Xuo6bAnnsSt5iufiUSM5egvmuAW5qBvLoXQyLcE2qY",
  "key42": "4kQxidFABdVdtZi5HJ1rkUFBnVhYwZ7digVmFDkHQacQNtX4h8pWHVN3RZWeVDSm3c8dadx7UpQVivHbAHt8FzKU",
  "key43": "XCgSFRvuLVHC9LLWTEqn9kKu1shVQGSJ1kvfo4DWfPQf4kypMdTG16hTCXRSKFvc7jno2af124oAEdb1a1Z4ccA",
  "key44": "5kQ6yWkhjUj5kL16Vq1V2qYak9uzwEPPciGQdC3dkjBCHG1sz1drg1rNGABeNeprQQaFTd6Bu4q2VcGmtQTmgEgq",
  "key45": "58A39j4xFD9PDLGeTjKo4DEL5Vt1PETU599ZFH7Xvp9m9LY4vYkQSBwwhfHopG2wRv8iKJskakJKxk8QxqkQEVyL",
  "key46": "55VuUtD5UMmjjhPwvENmantk36BwwZS7No19Dopa6n2u3Zv1mkqa3XJHaHiytKUfAv9ufyV3VG4B14PFVEzpfKNi",
  "key47": "3QERhXKYs7i186ZK3ix2RWbBgMK34aCp3Qr6sGhtniRAzqi56jp4A4JiEfaTAyxuC7E7UCnTvTDCHpayjnSCb7m1",
  "key48": "5gykp91K4er7f9YCSWFTHZg8J519k4L8XA1o1FjGhA38iGov7hDNVqZgFnyYiYPeLxAUfnrr155xVtsUWH5gSxe3",
  "key49": "JvZiAbAqoJeKTXunbJry7KbGxh21Z74Br55HHDFv7QSqwHcCEjTCb4F2HAUS99ZNnK9WYrZnti1jiVKEWwBPwoE"
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
