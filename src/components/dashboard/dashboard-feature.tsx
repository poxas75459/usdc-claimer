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
    "2fokHWa3s3rp6cPKfYSqKLfQEphYx6HtsrZQVziMn79XNYE5oHCm2wStCa4fsPFF1WjCMMjrN4oAPRJEnQMuo5Le"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vd6S7Wy9pY9XEATRWEZVjhkgV8wNm6EcxWf4zVQf5BP7ameBYYyvMDpG7G96RSn8DVKupDbCYZ6jZm1XVsSHVLg",
  "key1": "21V9VV2Yxxyc7tnF9jvwB5y5JHFRxFFpc2T4zqLuBNsWCWtKgdbjDKqUxpv9VXNMLMjgHQQiXGd4fhHDXg3Z1XFH",
  "key2": "NEJVQF2EapAUErLZXQ8FAtrAySpaLdFE7ofYSedZvq5ufQWWXVPUgRox3tKsYw9dKZBPUFB255CL2v1aMHbsrkS",
  "key3": "xBzLJ6PsYoLPdWLxsTLrrgWkQn1VQUko2VNfGaARmYvuhMesWSkQ1WrtNFJLZ3xQuvCkDBh4KRUP6eV7gp8fMoS",
  "key4": "5AWgzCMW6BDkjcVVAFtmBDok8yVpSjBUtjJ8D3whKHoVkHwpbCb1uzm5Wy478CJUAEN8JXkmzv5w532QH1k5QRWP",
  "key5": "3hqYFuNr1ykyEm3LuNnN1Z6p9DXqGJeSF1r1s945zfUgwncn6Uq25x8DmHVQEHKZ2B16Sa5ofx1GCvpJHDzYcVk8",
  "key6": "TjvUJm7R1AZb1a1RhkZjzyhyhfa26zjSDogsPLByg3X6uK7M8ci6oiDkKbEsZQcwq6gXZv2tHLjNpgu1yZk2qDe",
  "key7": "36Bs78w6Hij47ZAgrvNysLuZmzqwfcizXk8PoLUBwC87ux3NyT7bFm4FpCReFFw39XHQFCTWmSW5WoCNKELBHaNS",
  "key8": "2QjmC84jyJtjbeA3pV2kuHKLypf3LYS6ieHNXgqdj4WZ1R7BT9Givyf68DXWeJjzjD4Ao9ipp1YrFRWpVJU5LmJ4",
  "key9": "QkiggN5XLEF6F26F6QCMLQS9H3aVVUGWFNmgPCDiRKtrv1hKkNp3Z682Ce8pvtdcGHtYHimMqCyxbHb5CUeQX7R",
  "key10": "2QF8WoVh3MSvFnSYZ7CWhV3ZW75NszmkGZvPSa6qvSQfdYQXKhESf43EX7iHpu4A7G6a7vbXzVokRQ5kJjejTXUH",
  "key11": "3bgD5PA3BQftzcMCpRESYrvY7EoR6H6Kmi5jZuzd9Fv52d9AgFKdR21qUwMSnhNGTxi2o9L9frCkwojUVMsKngyk",
  "key12": "3j7KMdeT8fNcEvj8xHY5tw8tpAig1Q2tJVtLyjhgvNbBgKThRWvW4Z5PRUGyow99PiUnzgzk8LTT4dtdk1G3ayMo",
  "key13": "2HRxayWdFRbo4HQKPhL5TMVjpLFUq1NJMu1jkow7pka5JWLuSszYzF7GNFKrVPY7dvD2GAGutjZ9vQocULoM8cBv",
  "key14": "2Udh8UuBqr6AwAo8UytFw2oBES8fWT2HAvZzfkjM2Lfkr9Rsa7p7ijPXNoDbWUPyBuuRnPs4Se2uMH59jsKEPvbr",
  "key15": "2M7S9uHT1dyG4xpiJs8atNgzpNJyyooxpKknZa6soedSBJmu5Me8hSU76X77srNumtH6ajjzoRW3m1czcAQr6kRq",
  "key16": "5sDTv3tyTWdQXCGhGYwo7RPrwXR1DPNEhbxxc5fsUbuZCuyNbvLcYENeveoCTLoxFZuMz1QESDgSMXWufx95UMh6",
  "key17": "4QMujXVsCHf93iSEEYvyw4758VLvhqoGVKzLB5r7eKjzL5JWpr8Yip7ZSRLJMgXdXRmgFyFm2B8wKGco6bbKZ5nJ",
  "key18": "2btYBB4CsAYJK2Ct4FsQJX42CKn8W44GuQL5dbFpD2zMub6DWULjytQh7VxuFGa7sAxVpZrEYR7aFKZAwCmU733W",
  "key19": "3PtfRY2HBtcEw32BJifXTFk7jVfWVkLMdhtF6ZeRRcpHbJs3jvxsR4rQwRLJvGUZyBa1ksSMXGVWijaybsJ6yRVC",
  "key20": "2vVPCawYtfAXB5MnWBQhZZPM7HGywDT3fUnsTDLnWCrgBJ6S2WkyKQrHRYrtkwhiWndtzCqfeNxXDwDNiR3Kgk2c",
  "key21": "49KCkRsweSZutCs7B8eGwK186KF5ZfJsgJkg8tzvAjRbJCCJ9ju3ubreRUCfVWHsJ6DzUk6nMW3rDZAtvKwVFhzN",
  "key22": "4GWAZqqE97QXWfyWBaSWq6ek7HYK3eJWEqJhwLtNVf2ZS6UDzu851v1UCmMJWguTxRz7MssojewLG9pYmDx6K3Hp",
  "key23": "531XPGebnWs7EmQ6HBxuDqCiV8tMNLCupwjEoQTn1Q7hP7wVQQsyC9j6bWM8DDrMTq6VRyuQwLvWYko2yz6TcQbh",
  "key24": "5LwuwHeFcedJwsoPPjrWADCReHyXrZHrreD9KUTFY1SrLZ3HgG7enXaHAn2QHF26epCmKnYXc8tMqyHgyuhFrv8o",
  "key25": "3jQ5E1zZt2DaJ1wvA3Gb9TPMmN7uiDpCAKP5bJvqgc4jv552Xnu5k5D9yg6zzmYcz1pULWjHbrLRN33n5LuUoh94",
  "key26": "xAtMPe15mtbYnxMhwG7QQXZgEyyVCrQvwunUKwyDymL1NYbTXKSSD76SdBhX5r98uSxSkMWe2BqjsLNfdKQmbxF",
  "key27": "3N7gL4dsUZPkWNTtdZoouNxNEKyB4Z7HKT6fdDwWRBfWmmb8ahEQcz4iqE2rDvLK2mmHUciRypjQDutJ7DdWDSB7",
  "key28": "47AXrSUgXacmZho9hvDfaN6jBQTinMTGCjiguTADyRQiW5isXyZDWQu8Rbc2aV6JCSJHfnAcmPooYZ6wQ97B89B",
  "key29": "ktJ2rquGZ2tALmFcQA5tgwRT41KMkFvTmyD14jamcBnTbxvohygdmnSew4jG5V712HB3Qv3axZHJ7CCjBoT6ish",
  "key30": "2XDD9QuVrSNmmQjBwvSu6abp59P7BmW9AkwqQJTb1iqwQbWVnnjHWiAbzrBTyxgpHshWY26dHcPZQF1erytUWiNG",
  "key31": "2U9rRcZvzq6KHWzGijxJyEJUtffXvJnnu9N9dKWY3d4GEV7GWye98BgxWx4WFdJvTziBKHL4ZVrKC4xyzu6DmiAW",
  "key32": "42qYJjnDVE26nZ84RxawDCCBdnLWFkpGrF5VStFDJQmfjkgfghPBkx4x5oXWXPivBx6c93XHUyBnGKqNi8mwhpWT",
  "key33": "334kD8R2dBoX9jXxy9Zrna3MhF2Bfi3CNukLvTdPN891jCVj3ZSPK5kjqMeBydbq4GUnuP1K2FLf2gs3VkKq1Cur",
  "key34": "5FPrayjbMZD9zCYbf3ZyWu4mgHYV2uV4o3KcJatQEprTYL1cojUfP8TyCfqbQNeZTnzVQJzhbgLmmSNZrVmoEdrt"
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
