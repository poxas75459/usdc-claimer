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
    "4B9i1SHC2fNB2Adz5rdHTiEdobVh2egseuvL6w8QnvAJHB1P22geRbUnxBQMnDXauRCCFwMUs2kh31qmx7uZRDk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dMXEVRaoNCiZCiGSEHL6cZmA3vMFiYPohGXVzvriziE6UwDvUM22KFoWNWr2PdrqpFkcL6D8ykCEXq3QtbVmPv1",
  "key1": "53kbgb55fvDdcAoJiTL2RNj3SdRtvczkjGkecU7oGhb3ucXxMjVzFdVPubnjto54XT9nosQJpfaw1PxCLb4cSvbo",
  "key2": "5AfrxUYqkBsxQwkC4afJ4zdwFWLu69Sx45fax6dSaop4VRvC5SoyDEyKLEfMpcWBGNxBKxWBum49mFY6ietqRK4v",
  "key3": "5LSaLhkXdnmxLHHQVEV19LZSUhUvCET8uSc4C3DgQGKEPeFSUjG4fEZfeS1SKr4KQ8p9pepzvDdaEdSktf4F7twT",
  "key4": "3umtoGy62zEALvuLHZcqZVho4ukyBSmrCLEwwqL1g8JDMAWzRHEe21jaw9hhncJgZP2fQobvas9YohKHzMK9nuMu",
  "key5": "S5Szy7ejZEuQhNk5PM1UW1rGmYRCF5TUYUCxSgUANkyqP6UDQiNY5cZF8pDv4Zfy1aPsHwfWPcV8yt1nLn85DaA",
  "key6": "rGf3aeNBeghWFN92BkDPsKJEgthE8GnWxtHtU8PFMTEDEgUr2b7KuSaRLZNh124GMkLBLTrrMt5AvNkkhNdq9XW",
  "key7": "61McSM9ZnXut1NL4Uwrnvpbg7ddoo9zfcxHrVKVWPWPz1Jj32NEK3ZeZ9YRqAEFPdY3fjCmbMesxQmRWAGfHWC94",
  "key8": "WjVydkAj7HAXGLE7HrKfA6PTQzRqERNG5S5EjKdLbhPEK2FWeVP45i1ipi1Z9EfYRer6pbjXJwz5jWv4mwN6uDA",
  "key9": "4UozV3JC5yXpF5NBqr7SfLiTu43V3Q92G5HcQLcLFjcKTGPnVPAGjTnG5yBWiaPdDLe6dvzqi5sJwAH1H218NmhZ",
  "key10": "2Y6nwsRUyvHrAxvbmktxg95tR1Wzj9VA6hQLBJVMGREDtXhPX1AMiAHe9QwTNaP1yDvqmxnVoe1ioadZs9qGD4HV",
  "key11": "3ReHLms4g7U6U79gTznZUnkAenD1MfRRcGzszLnZeLTmtzEqY2yJkPXVghZjVcKhBwkhKckstduv3WqNtNUQb3j",
  "key12": "5dtyZm7pxrb1uPz9vEzwKwRGxAbiXJwf85aJvBaVX15cMF6jK2gWxcHDFPGAqPpBZczoNLsEzPQjSJ344xu6VCr2",
  "key13": "3mexUq2avjDHHqvxTcf4wqzCq6vhZmmD6BGHfHnirggS9YtcRAv2xP18Eyp19UVmr8NuMsagmwUhyyHxZ31RGtDH",
  "key14": "tVDEi7cvPYXkf3THYBDPf9B72KGKkXWL35j669PMTmx7WmCxrdZ8WsJYjmpABgiQ6N1DtMkuakunPKdJmvZvJDL",
  "key15": "47fM7roPYcQKDFrjxjgYAnT2PHt8sRBLNeKnyX1MPdEV6xevKQ5vDgdc3NLVGFwqD69AfeYiqvsZbHVgBM1ehEjK",
  "key16": "9Laa8Xi1TVZHAgP83r7Y3NteWu1xJok9Mvxqnkddw81wJnMZBFDgptuuPmUdmDcaquCz7iLsxvATrYZgkV7SjV5",
  "key17": "4VRevFz9C4hRMw1swbnsjLYhDtWXEoxcxwSGgEmbrfcD1ZStrKhY4GVwKRtB2vfSui5t8Dv7NJWoa9cLLeionEYL",
  "key18": "3brtC4JxsvnFSso7i3Y7vXCfCbrgbuKiuVBrS3r2vTmo3tjFHgRgAsnujvi82tBUcfSXrAnopfxNAzseFqueok7t",
  "key19": "41jEHdQeLdJcoK7yaskYvdSaZTuQeTJiGH4qRkHVYZJxnL2nYJbQV42K5izXuXd14wCbyGpgsFE4X1hm3217AZXB",
  "key20": "4dXSY88uAkFsqiqMi9KqzLYg1Mnzgvi1BFjFhz1QLNAhBhh8q6mk6XDEyctV3xNHbY8ZsNYu29oaC9uZk9ZTi8xE",
  "key21": "3trz9im3kJEWFBrzcjFg3UkVFQyzWEEdD5A7HqXqYZheckNpXN5vyDdKa6pwEm8hbTyrRyQMN6HjdXDU58RrFyjx",
  "key22": "63LHVLFy7M7w6NHp3t13ps47cU2kYDbbQu8BpgSc5cTb46zPLoVcMpQfds4MaNPmbsJ8bfxabfw6TBi4Yn1MjDb8",
  "key23": "4TKLWW13SyNY1eMdxFYvZvPJJ6s5ZkoTUkDRgG4BNUyhMWS8jVpDC6L7Ug8xD4rp9ruk4myyczmeEk7AHwVugHr6",
  "key24": "572XExk7pAGbwmoynZYPLGi1earhQwSFUs4KBdVRh5svA4KLczmtWgvWMQ2mJkwhwYRghBF1HYiW2fr8BmsPsnar",
  "key25": "3nPayFvVquLq1Ywbx3SdQtWeqVWxCSsi3F8TPoNrrVJrkiy93xkFQx3Q69MXxC6GSrRzH7jMfARVrKmsfRrAkAc4",
  "key26": "3NzpGB7cBmXRRNFZm5cNyGg81HHcfSgiLwSUy9c5WDXu2UngXvpBwaHRhbgeq3zqiRFZ7Ryqxo2uGJoZFSR4pC6V",
  "key27": "5hfQfLoSfxv4UE8RxfvhNW8ZE35P65wgD7XdyATVjDiqHonJ9BqrSuqPUKqHRxMb3eqKSX1WkHcMLrZmut7S7jNL",
  "key28": "3Us9NFJrKQWC1bCdaMjbMc85yqjvbuZU3MwCt9Ktak5WVPWigBQSM7gdUgkrqgneJ6p36s8FJTC6peqKdfTKPSmZ",
  "key29": "4Ro7YxwygFzkE3g9du8YYD3mz4EbxhEuCnhewAgJNJj7fiYc3kgF37LKg9hHzL9qp8TCBZ5uv7ZcTQKmoQ7mxcm",
  "key30": "4sudauvCK31MvBPM4JJaPJree9Nyhui5Mv7WPr9htfbi1wWFUpbCtmeKaDc38Ws1iRh2YhY7nrZRk5xU9MaEPmEr",
  "key31": "4GiSJwbvbDhuwo1ZoYbj25bHkJ3z7Uo4CW9bcmpUQ3TmNyjJ3y9sSzkXEYuvV1MCgC7yechkv3Qg9iqST4Rvy7Nh",
  "key32": "2BvjAcVoTos978HWXMADecxxKVbrfRRqV8YpkbhwxSZvu1VLPfS85VXirtfz6pfMMtGMPQCcGP4h3bp3F4aQeXWy",
  "key33": "kQ8rEp3cbRZrEfg7qUyPWgiBoAFFih2UJJ6sEJJELADActsJy4Xm2VaXxCZjvPR5vENv9R1H5rXqXN2fBsm3rUc",
  "key34": "3Lczy3botUDxpZC8BCUrLqPRua5cK6UWKG3Zy523CUgLmvMxSCy4x6AcF9aJphzwADLfav4CmvpDM1HKtxyERFno",
  "key35": "2kj3CAckMYyyVmrC4fNdYBfRB1G22F5fqia9qg75qQVyUmQEPUpSVAx6rQFGSRA6sKTBmXRd2cWSmPcKptEv2F5Y",
  "key36": "3QDoRt39tLgJvEZn7GNgfyybEXo5D6JF3WqeAD71Eux38Bf7hZr66wVHcbbUzmHoeajkgwwqJDAdo3pPKxKA2VMw"
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
