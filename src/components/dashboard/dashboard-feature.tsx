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
    "HQ32Q9RCu2Ct3PejT64bykScmTnT6yeQs46PsaSD117XQdG3GA2yk8dNRrAoiGomsjrsmBmNK8t2Yjhf4dvj66J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B3AD6LGJ8Uug51hZh4vNZi2AfreXuQR8CY71EeHsddFg7WHSTCrRC4bti8NA1F1BvJSxQMZM68U1eL91AvQcRxn",
  "key1": "2ge6v43enzLTZ47fUhNpTRsKjKEqST41BE4xrfBzzUERwwaBSJ7RdJaZsBKd37L3GnFBoxAmJE3ejEwfBcT2oZSo",
  "key2": "kyTf1NUsPzN7Hg1jL1zJhhsqY8yQkpMXD8EPNabxQbQeqeXnSJgP1HTNtHECGmvSTQiZDmXNfFSfmz3EZHNyc1F",
  "key3": "47rJPHRzjMzTdXRqgPV6QjxSk6cwbAfc66hnKjf1Nubczxn3m98FqQeUFT78zTnbVAsRCBR3Qoa69szmQja7vsMb",
  "key4": "3mTddH3KQiz22tBEetaDLHHEAqibRebJEYTcysSv9Pf6HPjX9UoKKeKWvHASDGYs6E2UwhCMpPLvEU1NAHqsrZ9o",
  "key5": "51TkAaoSQ9Yt9SwfUFrfuw23z55ga4C4LENVjnWoNFSN9sboUFVapMxLvcZMiJBCnMyB4XaWCD1cuKRYfERf1Eeh",
  "key6": "5MDzd29o73aAsRjW66ZzWjSeJAJNLnduPaNUD6y9FqESZsqVB61LabSid21oGnmp5mtBxypQkiinjJSZsiMXdd19",
  "key7": "53ha2NMKfm7ytbgF1kJx3MCgzJgNDHTAAYuMVmBJHPF6LvxWpbLAm8sn231qjinAuULopaADSiyky156xkVMDuxj",
  "key8": "4SjjJrC5rGgvGndvkH49qEwFYrVfW7TjfvxioqroRL31enUhyubQLw7Uys7mqemzM3Zj8bUANbbdy89horSnLHTL",
  "key9": "C4uyuCb64g6vFBDG5sAX2c9shRdqeXqkFj1tSXxtesiYJ3Zpp1trewyto1mekLKKfUNTk8n5SF2781nAoMuKR6G",
  "key10": "21AzJY4mH4R1D5BryeRucVMfzDhHKymbDDZMv6Lk3QUJ3WEDB561CBVDmEzYPebKrYFf6iumTu1crAwnwq7KtMMD",
  "key11": "4khiX2FE8KxdFCGQkos61euYxATrgnDM7wtXtTqwXo8eYCHfKhM6tka6tb3WdWjhBwqxo6p7x7QdLXdoUa6Pzw2w",
  "key12": "XAR3RuwkBZoY5dLLt2Nr6PVmME9jHRA3Da4ui5uu3NiYHyxkMePmDpjUoNS2efi9gEuyTgHWzBGkmnWNjArxNv9",
  "key13": "5aNTngdTS7F6mL2wPheyrtErQvuYfqD8sSzG4hVdby3RGcrzHESukAMpAyAZZ5GgNVAmDiAsRpZmKCjQhFkERAHe",
  "key14": "2XhzDMSFoF8TBTLqbeokYy79CuXpAtenDznLX3kdx9kGg8kztkRtrusWTVkLynjstwWwjFAXhkR5FdGxRvHsGD9D",
  "key15": "29HRRSsvmGrE6Nr5efGdjUNqTjn3njUnXZf1Ax36Ay4UBJUHhzGdTonspqx4RQ6FEX6CPE7M6qeyZnTtwnsGWcxG",
  "key16": "3Y4D8tcRBgViLApowfUpL1Vjq4cARrg6WLWbRDetv5u4uNMKy8RW9i1XzJWzZfes57pr1S9rngjSz4y4mYXSDMar",
  "key17": "4YezfBoYAADMb1ARnAuzDz8Es25xerfxYWyKcKQB9xpjkSFdCA8u4XDJBMeW1ThS7HMzLQsBKPWkSTjsufig2wSV",
  "key18": "5h3xYRVVBpUzwmQdTvzqZPwF22zVvdRQ1wwRoJWuDkZVNEnDh7pHAtVpQxM46MsJjg1zsY4B5zQeYFAJ1YspTjrA",
  "key19": "4vjpk3RUrWpVGYp1vjPaxGxwVB81TDtC4LURMxZYG4fQZ9qJZ8WYkNUJhupatUpVvYr5A6gJ6n3MzofVU6Rmv7pP",
  "key20": "2TgMiw3bTVBKsyXUxPQKSP133mkuZrLKhd8aNqTEuZyZx4G4xeSpwVyMAfxP5pX1J4SQvKhH5hwzKabA7wzQatvm",
  "key21": "4PwpH1Mbt5xRzrUFL1ti3aetpBE2B5gAnSu8EporXF28YxgrdYXf6ZXd7S7gcessr9yKFQ4rygG8ux6qoxCjsaeB",
  "key22": "bJhF4jdestYt8QShPVHv9syDNaWLxD4piVjLCyhC7xBWWpjbfSHFLZdkECrCmqxSMP4KmkytyZHX3bPLW3xgwoA",
  "key23": "2sywNFdiN1Wkj9pbB7uC2rHbpptKe1UL9YsN5LYTGpoEtCzNXmtiaDKi9uCY2H6xgLSYF2rWD1LubQ995RAF8oUn",
  "key24": "2NrekFRgJEEzsmAVaUEhCLB5vWooEa8ZQGSQ5SfhSN2WRfH97wfLSMkpzpBrcwaMT9oTqLiQg5ZFcjrJDguwhz3X",
  "key25": "L5pr36NCjj6hswmNAY4u8Vmdz9HNyDgoqHATPE4cbwbRGfi7YED3bxvkV7pDATSF2GnJgJFEHGh59awv4EvcBt5",
  "key26": "28yfBA3PdmG4V2MNbBSx2BnrYpjAj3yYYgwvun32SmyUwR1yW2EJf7aNZ44JkVs1XATSs8EmgFCseU32KMFvYTui"
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
