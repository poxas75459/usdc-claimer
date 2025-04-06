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
    "5h1wRZqED5LqU8WUBtDU1j2dBZrsSZbbVkvp4zGqRdfW7867oMJoKjCYZmbETjg4QdY3R3nBgSyBr75XhEwYD4wS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kqHAPPztypqoLAZym4WW1J8g9uNcg3tquMexL67QhWasgDwFhDeJx1XxEptBH3ARchUG9Dq3A7UxGBrr69jqvRK",
  "key1": "ijkb5brJYhjJktwPpc8pWegPzs2fWytLMnMnKm4VmQgaBwb3Ku3eBVrQff3pdrmgwugZj13UCCJLZ64m4CdvKfB",
  "key2": "3HrrkKeEMTMe1MTDEajYgCpD78DXjziN2peUCue4J1sWv6CHtNCUCPL3NfkTCKfCtpuDu32VHUp2zQwi4xjkms9o",
  "key3": "3JAGAR4g8MoBJX6MvVUK8mfu31MUAQVYS7fP6Cnt5FssYYWRo5zpFHKuSuzPX6YrEy5r5wkMkfY5QWdexjpJEryb",
  "key4": "4hMQ6bKoSXTGHmFQCbqo48mhrUcPBtUXYQFxM5V5UZdPuD4RihzHuCBkHB6rUhARdYmPw6mehWGEkMxp7ThzhZ9x",
  "key5": "3sfokCpWjG4xUsiVJ19b7GsYYLu6xR89HLoi26Jqotiq7XKW5cHfQCBfUpU6NtmDtqFeBQzPkXvmP9bZnVSrEDFD",
  "key6": "3DDE2GTkU6pyvYgFs4U6dsqkMx4VuKzVzX9uCaavauVcL2YPGCutDHenFU84X6rQCWHpL4kvG8hBfnUgsWhF7w4w",
  "key7": "5YfRBcz99kVLPgibGEZHtqXa7JtTDw3RmTYaTFUTr2HoeLvKGFguGKbmHb3a93wRUKQQJXfbyk9dVtjkWZdc9Hb6",
  "key8": "Rt39DcRGz3GMLjzueHDXNN9orz9V8VtoREXF1WnvBaFbBDYtLut2pdb3payszWjntgVyHeLgv4UDDmWJkHTaFSr",
  "key9": "3sNYq1bLwKSXdPE7C5nRPoYzMLSx8k4DfqcMb4M916xK4kjjMN26KRmnDs4REwRFAMc2py454eR4dusADpLp4u5G",
  "key10": "3qPwBsBNtjmNCwPPCZUMDCrzLt2ECypfEnu2xeGpuqKVCb55ZSQsXLAv4evsW45wgVt1KpR5DeE8SmjzP6fD53XH",
  "key11": "2P8LLFFDTfaDBfUkbzTHb2wsfGhSdMJCvk34EDnkgQ2jpemc7mRy5xJHRRXZCPF6WjXn3oDf357mH2yBMt2b493z",
  "key12": "5SCytePusjYX9W1sNHr2CEWofVPa2nsN5a5sTxHYQ3LZKF56BrpN9U1BHmi1tDxpN9QbYapjbtvZWQWGWe2MZ1qn",
  "key13": "5wBhNoSL2uheffDRA5zyd8XM4y4ySbiYsiKKNgJAVyH84oXnWpwC4j7GFHXrRDUF3PLPML9mZNwZNP5WRwEAwt2",
  "key14": "3NhkLCMHkVkCMmWb3tDxn4196BH9baKBYgooG75G63FVsihRHWmwC1s9xdgGCJKgQjJevTVRCns5tF6twGk23BUp",
  "key15": "2YwyHisH9T6e9kGJCCX41nLTnMDEFb4GbXjcUReED8m4UZvck5xFzpsuMPfrPTaJ2NTgBoYQJH4S1RxPHXDkC8bK",
  "key16": "2k3ssub5Jdddq7k1vFBCTp5aYcRBuk7JUUMvdapnCiKiMPDhpfCCcpceubdLsf95zfyPufrqKKx2Qt3sfs4Q1KXS",
  "key17": "QWX6AoX5iNe85oStUCbsCFAQEtZJqHkphYREmvAvxJ7iTm5MwpdbxgiWhtDHHbRZVzr6WCHTr3CZNo3Mr2nBksa",
  "key18": "2Zep6tffEp6j2yVmuWSZz2ko7AECm773A2DT1og3tZt2kjBD3t52s8XKCBff936FW1HrKvrLo9m6oyn3eCkBAzFh",
  "key19": "3r7EqCrzk7ciSLfk5dirDzSST9d8YrJ6niZvULAZJvXu9rmKVXLqAheqzsJuB1nN9JTrhBxLjb4NQerHjcWYhbtY",
  "key20": "2AfLVHhbvYr3JZMnUQ6zraXfMVMxczQc7LH4MjvSG2Pa7VC46Sq4735HLyKpcyGwt1ivagc99v5TZwuiUkM9PH9x",
  "key21": "2ESdDCGRhEuJBxfcxkUQNspwuX25CXRRzGyogK8r7namwMb51ff9x68Z8qcLq6ZkR4XhSu4Whn1gBZ3SsZKVC2Y2",
  "key22": "29ncs2fxRmKqPfLog96jp8oxyYLjyYzg3kG91u3MnPi1YjnMxBWFvVFsFTj2KV2cfAKAMHsjJvNSocgkUKVysiin",
  "key23": "3LPbSojiPPsWnz2nZUXGXvCYPu8ZKEggaJGJ57oqf7RHws2QUooXZEssVzL9pgh4DbbaL2H55vEQHtym6ATgo27v",
  "key24": "49cGZUzgEksrjVoqb3TKRBboSw8dSchx9mTeAVKGw1Xhphks5a7uuYNAy8xkj5ANQKCiGyZrBqyH6F5B8YKztbDG",
  "key25": "4XkYiK9m1TDQVZrCSU35DLbfVZAtbVvaV63QsjZF9MTidWip4o1jswPCzurYCTJyb5q8RxM8QsZzhBE8ModZFviW",
  "key26": "2s2yUX3PzAogJ2Z2zmudkU7BkqeDmaDNDBrf8QsfMFhD7hp6oh2v6pGGcjnUDSViPgkUepLxvXiReG3fxAhQoFEo",
  "key27": "o2E7UHFuKQPcdyjQZ7KgfxxkszN5kZxGF1uZm9qqsSsU3fJunkQ6z3FRg97cSaYMFna5kChEBdd144ET6J48Dvh",
  "key28": "5XRoe5Eyn8yGHFk3SKsDasGwBu5W9MFCDsboogzkccUB1pfugQ5VCBwbnsQXqyTUAoiXsFDNNbMiUXkWoW9JZ5wW",
  "key29": "2SZ4qcmg9pjw9YmAs55HDxVb6neFCCme5oJppSvoQvADnff8coURqsJQ51bsVKQDbjykREgBqVrFJJjJS9gJa9yi",
  "key30": "2XW4uREuVhD5917aaA5yrhondWbafLJtV8u6jDk19tenkHjiLXX38BnpM76ofLcQnGC4qXz5XnwjeE29iWapEGL5",
  "key31": "51bL5RNV6CyDrSJSfTjVY4MNcDTjGS79KjSHtcsv6gGQjkHmPRikHg8drQeVrpsaMihfTdmj71eR1sVNPAdULY6m"
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
