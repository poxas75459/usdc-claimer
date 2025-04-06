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
    "5qs3V85Bfz5wz1Dn6spmSHA15nsVdoSEYdg4GHJPKWc6wTSXQk6yiTzsCDQxogEHKJFPGY433wv5Z8Z826aYMSeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z1ya14tPFc5KkHhxgA23p64JcvZ4KP9ufi3x6kLpHT3RhT6PM4RfLczqQHhhNRRUeE9S4JHFSN9LVYdpAok6kd8",
  "key1": "LXfZmVPRkwkMwU387xB2azyS8VoHs6YE2pMWE4ch5hN9MURnj3P6hY7wWTdYRyqzM6WQAudr6nhegg21j2DwjKc",
  "key2": "Fzfs45ELnUqLaX7jGAR3oVzsdvRatAHrmXERxeTnPAFGKX4rYy3J6EmcYSN3aTSRzW7X3KGYHix1Pjtan4LCJdF",
  "key3": "2VMPLqRgTEtVQ7qMyHtEjVnhKoiJLaRWLXRHaw1B6brcBgJworc7GcPy5mymu53EicKkNVwYEAGEQ8AHScAvRHqz",
  "key4": "2HRxz6W66nZhiveeEFa3GRRHuXtqhk2RxzSimbtJ3cVv58gpsmXihA7aU1sJYokgEDj512u3Pd1VuJKL1dWhhPr3",
  "key5": "4Wyz95CEHy9cBypVbfubZpiV6q35QCCzJLakajxP2AxqULzdGGJHqQbBNn6FryLagURea7ZCXphGps38642V1ycm",
  "key6": "3AJ2WoJt8yousuE5p42PJwWG87v7JoDJ9vSEzcK2vvYqmWkGP4x8ByFAhS6XZos1z67R375FL1v1NfHVysecrH3B",
  "key7": "4ZxLPKk1KY3H8miUaPzRZiZ2ttH3TsmFWfQYZGQmuyKXk9dL9kcGaZtQXn4ycwH7oavvVfZwQ4oeV74Ye9o3exSM",
  "key8": "2u5N3esHXHyCoc8khVjL8tUGkz6gTtBVBbaLzWi5DWYwT8qfdSMcQYkAaykCgBeSnpoy6DbetTku8XZCotMG4Ms3",
  "key9": "4QprKtfEvGCV53mnZhm2aBrqHMPMVyTVRch2kV9qPxKnD1CC1TihZzSVz2eCbhx7Mz1jtd1DgikYzvNnoTyEFtRx",
  "key10": "5fFZRFtnjxxxHK9Jk42zsFAqeNqUe1uvbQPnekQYmdyank3GQMqeHwhJk7Hrk75iWB8NDdVKmGwQz9WZkD4n8TNC",
  "key11": "5Qcw88fvD1GZ1KcWFcv7yUHRXYiSCgxErCdptEvunWoVQSQKLqcKvv2SfVftXBaLxL1ApFaCMsSfWYYogBcdd4Yh",
  "key12": "5YPoL9X6JjxaYbknr9xLtcAjeh5kNZZYYsUPReS7EdR4PpRdmpkqtxw9WdhvQWJAoLsd7q6g57UrFFGHdVpvrqmZ",
  "key13": "5moFBmsRa2Mn3vZb6UxfwSj24mC4xAijFaLseiMTw47irX7zha8AhwG1h6adZGFdLMy88GvRQhhftEmzkmQh5LYh",
  "key14": "RdYNjKrjb7uTqKq7ubchFTAPo7oiZbNRnsCP94DPVTfsDDKY3UqX7GwRjzM7iips8ThzrtNAKNX8Df4MjEPh2aK",
  "key15": "36SacJMY5LHx2mFeXZrHR8NxDhW5v3sZ8pgJ1NtmptbU1tvuy7hhvb2QA96x5SerV2dgw32EyLPYpqFceKNjfuMB",
  "key16": "TnmNz1pRPwBSx7TsQ6dF7oSzWJDduoUxFVLzM4qMpBStBMcr4qrJm6XrNNkSThw8Ui3qwEAxJHFZvWfVk9DcPbH",
  "key17": "3gCWPP8vKJ4ep4EmpycQVuLYNUMyCyuvSJJTdjGsrRKqgF6WYk4DXmbDEheC5Eexy2wiq2nHo5dajofWQBg1mQSf",
  "key18": "3oBK5hwwP8m1NyeksT4v29Ze3wChNL1T9tkqMYrPwJ5tVQFWeJKLHRWayhPbEwKpqNJyfmyWDRUdBy5LdJ3Ftwbw",
  "key19": "5ZUxmJz3fw8Y4RXW1eaKNEBSdftNuN1EVxpYMu2MZVwx2HumeABU2yx39Ee2WwcTdYE96CCnwgWinj9KSwkbzj31",
  "key20": "z9vyaFwG1wN1Fn8xEimjAqaG7UpffuzkQKbkvVM3NsRxc4n31dpoc6Fw8UY7FHPGezp2rKUJ28Z1qEb98hCoNb5",
  "key21": "2uZRbYdRQNvvjzBJCAuWQzqxtRmU4JBLkxpn2V643W4vWz1GN9b5DvH1vKwf2XS8mUaj3teXLAcYEB1VAxqsmvEM",
  "key22": "25gSBGrhFdwYS8bY153nJEeoz7yRgnPx1zJmEtjiD87Fm9B5JftjMVRZ83BZNdYrQRkPD6dGrMq2MCjod9HoU5ph",
  "key23": "3SPZ11WsNk8nD4JzmRfmBaTuLo3DYZitcYSdeneEcQNWKCNuzufdQsfWeqXTje17YqP1sDhvWWo7Z5xQr9oiNoBL",
  "key24": "2gupxPzmPNGAE94Q4XhxW3wZzyfoX2Brg8t7DS1JU8m34Akiow9GNwesCGmv5JnNUFn28E7hXmgUxqW3q1yWsFvZ",
  "key25": "3owVMtagC6rnA52cv53TaRgJGx54P2xk8Xh7zyky2AKW3rTijAy7rWKMDrSWXwdpmGuSfZLvBtYcPQtQTDjDFaxv",
  "key26": "3x7MVPtJt5zMzjZBPp5CYFySgPrmUbmZrNGYWYCUfstP6FmFixEi5K3sUt7zfTAn2kEe6DuHnD4T4WMeo5YkYnP3",
  "key27": "4pnJE1az4PRmyXFRxZSSUN9Zprm5ZX44e1CQdtrV9xL55QJWdtDuJFFFXp1FXtnL4qujSjk9KpTyRBqdtgqRjY2U",
  "key28": "3ZoddBBHU8wbh84VyA1BmrbweR4UwshReFog7XiSEeTnZLqYqKrutYLNAArwtbGpakiLEayfKQMhqmRJc24aNuUt",
  "key29": "2QsUijshvaNrcNni8yRYciNLsFSw9dvzGgqNCS4bkjNXWtM67kzbfYStXozt6v5aPaWBju93ZVeeY5fuGLHMcDnR",
  "key30": "5EEbTD8TXLM4rGEXkf2vyAa4gdezT6seDzdLDi9vLYgZssb41WEh26k1hxLPzgxVdjdJAZJKPEx8pUYj28qb8AyP",
  "key31": "jbRRZbbaCeHXeE4T7eCfsS6LLCkBAmsQhPeKVeKTqv9WTkSL5TfQDTwst8H2EjMRqb4rsNEVqNYfP8zZCAdAp37",
  "key32": "4znfwTQQev6sFED7PrsB5gKpks6vnXjmsuzvPbCWhChGYfJK7UyK9GkJcL8hLvAL8b7KYFvFmkDQbQ5myTfa7Jxv",
  "key33": "2a8AQjQdjSKnZgAf6LQ9yxem2fd7tePWK1HzrAcKPDh5bta3DezVyWj9UQyZ2FwTJD4AmgtDACbYwGsaxXMX9zaP",
  "key34": "24bPkShNb9cJH4DNFSWLFn9Rn8uiJF7rQK7uZrueQpKNh3hEcevccf3i7EYYA7mdhSS7gshfC3odte5vxmoBeUkP",
  "key35": "2pMPyuh36gQF5gDCULBrSVVh8xNDoBEh1ZhdEMLa8iLY894KAYrQUEGZokkfpdAxGW51JpbAKs1rvpW1sy3APrtV",
  "key36": "2wixvJHn72Y4kJ6JtBqFLF4dfXYUgNZLzRPa4KiTaMk3LJZKPrqN4Ys9AMSo5DwgSMsQDGPgLBXa4ZbFZbeQFCdJ",
  "key37": "3jcsETkJWsrqYUAUHSydi4m4xNRTYwQGruVoPhBSFnBgsVMpJ53pVTgX4W4zHPWD1QYap6Cu73ud1bzXAB75Gcud"
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
