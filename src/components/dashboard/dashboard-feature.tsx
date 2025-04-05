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
    "hp4Vxa3hCEGu7do27XoFUGRVT3rtuwf8A1v1Ev2bWYsyuFai8opBf674EWuU8y2VLVwvfD4ZSoU8osp4rULcNHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hybeeMXYGk8TgCmaEZrmm4jEwtaEjQ3oK4is8svJA5gtEz9Ah7bqWTUKTRsEVCHqyVNLz41dAwi6KGpnQSB84Gg",
  "key1": "47EpmYZZRhfM5M19Yt7demLMDuZWW6PspBhYpBTD674ZabauiSiqT4X7DciLSQ5Xm5MqrWn9BnbV9QVENDYfAV4M",
  "key2": "JwjFrBfXLBSbwd8MnUkowPDo8QwTL4YnxNS9o1tTTBR76zBLmgDHB9xayNWPgYgVvvCWKETz5K8mFFxKLJJDrjg",
  "key3": "4ctfnTiUjc972c2z6DFWerSUNqZhVvTqCkHCiVidimx8pLhifZRT13Cv5WxMLPBiHQLRRJawYnk42BSyAti5Vhaq",
  "key4": "41SeADReqcEzLUppYkzph9RZbxszEnjraQaayi6KpB7KCVpNwnPDpN3rqH9gfrWHqdXRgcYUAyLcwsWWMJungHMB",
  "key5": "PyGcT7i3FDpkvEg4nyH3ECrMJWxS1pyKwEqmm5wTt3D5SDaVvubsg4REcAzYtEazAY1EsDV6yGtXu8SybV2B9St",
  "key6": "5yFAZxn6KvrZLcPTWFqWg7zyHgWLkMj1oaMEjxgp2FSSq7Fqb7rYKcetNedYi7UmTqD9cykK7yChuTau6PeQi2Vq",
  "key7": "5DeBQtU8R5ZRmDvxQVYPmHrrMyNbHAyrg5E6VG5DYgwgdLeNahgzsYHezzAcygB8VAzx6P7sMKYAj8FbHspn96B5",
  "key8": "289pL8WuP6X74BUpT3WjuDCmC3KtoypN3sa9X1SRueh2EJTkT766kDvJHCHG45zRgxt5JJvQzkxtiG3Hk3HT9QrD",
  "key9": "4t4riEwgAG3TjJZjJkDvaVHs59R2MvbXjuUHq4SpsSC3m4hdnFNgVQsTPdFshkmZxrJJNt2DzXkPC5E8dW5uykSA",
  "key10": "22SBsNBydmTH9QDnLq5FAi15avnS4dHcwFXyM6JV9WmYcL2sC94tcfFy8yNZ61rU3wyoijYwj7Vjw4oMM9dVaNCY",
  "key11": "YeLFw2926Wxta7BATS7nXJQb6EyXpGHGz5WwdyTqk1kGUZriHtYzXjyTsZz8VZEHenfwT7sup4E6nYF1v2CFqPT",
  "key12": "cXSNVQhRG2K6LUBJo1DV2PCm8jVvsDfjUV7L2pRaXfgbCYVGxu5YxhpTD9bnqB4Stgk7kC6MpkCv3ktuHwncZ3J",
  "key13": "6uczs5YqhbV6oNmPGEGhFJV73L9YRc1G4taJCzD39RbivuaG8Ux6QwquG9bj7pEPcf8W1SnnUZh8o1zxKpJdyT3",
  "key14": "3bFCsFuZGp2RzQ2i1vkwRvXJG3Ts66jF4gbxNdwpaGjNWjaxDafsAGpqnsfV3WWh3F2uTKEegb2b2EWF6a1B5QBf",
  "key15": "5LSgAGqyWd1KxiBef8EsJaF781AUaaQATA8BeWaDsp2xe9v2zpAsjP21HXZFJuwzsND45tXuYtRea1x6iFUgmxAH",
  "key16": "5KxzHex4jtGMcHEYPXVfK1hCXL4dtEtC4qW7do8vUHqS8DPjfQd1gbmccFvkKiCzZoMciHcSiDTmywdhEX3yXGdP",
  "key17": "662EotEe7KBNGiUqLuo7ayYXhKnogJXffA8Q5GcD8zTFVwKV98vMM4nE47YTkuMaSCQpPy5KPrTrM53KwdCyfqMP",
  "key18": "PAAqix6R3SMaRFubj4Fj5wVJ1wC6Zpod1osEGiTk5Cc3ZC2HdLa1Q1zzbznZBRjoBgg8EXnCTrDupdDPHiMM8dK",
  "key19": "4v8jHDmSzQ9xxC5rJLNJdT2cQrUmenwp3eXU3uJHUN28kPKhNRBHqgncgqfiLErkfptcVYjW5gXGEzXSnQsjq4qx",
  "key20": "4ksye3mmVKbg1eWSLcezVhzRCfa8nDvcGCsuF2wJK2LoBUpehJyQqNHfWvHrm6veJeCmjgARtqybFbX5VJXRxz2J",
  "key21": "2E4vN5B9KWzqiLZzt9ewcDao3JgJPj4FEy2AVauufXfHD5Yg2gDt9eY6e9Tkx594c1JcdKtdhXnx6pSXxi1F4KXD",
  "key22": "3EGjpw8ucT1xg5kxv9avBEe8itsASz4HmzHJ97bjC3gQ7BkvB8ZhkNKFeX6Ji7yeqqctgmHmjxXyDtAUHFsBrkZj",
  "key23": "odpR5uidgaY6srBLATAA2RFrriAm7zbgzGboUEG99QswoU2rAr3WJzfUQX1gZeZMbej2shFQwAKTkAMqH9FRLfb",
  "key24": "5YET7jwuKTHFd8HzKSyVF1SPBcgUMsyDy1cYYUcit2DZtEuxPcUK8fUXmqiENtbxfKyfEoDX55FuwUpqfJq4bi3o",
  "key25": "3LGYpD21pdbfv25CX71tRYMCMUAFVmsko3NodThU8mRBGTLa9qJ7qrFeLbzkt9X65zEi8HQcnxn9xgQZBb7dNtW4"
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
