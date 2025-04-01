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
    "3GxAuxSDYcgdikNFnnMLnsG5pTd5oQT3tF8nyJfLS9EpGeNG2Kg3sbET7SKZLfWJtXyZgR9UKZ1FFarupYgZJCPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m3QgeZc7PCy1GdBYvaRnbLMv98Zq9tn4wZxgTxUcGytjNxjkSF2ztGU2PRPidmoQdRscppn1BLRJcj4XVrBPc1g",
  "key1": "47H3qi5vEwJuYfJ6RTPi1u3txdsBRsHxiHvq7S4WznhTpd25gJ4iBpk4g5PRDpte3wrsqq8hYTx31e66J9H8gs7Y",
  "key2": "4NFsV6X69mVVhjWenPGdAx4hKVBQqv98ZYtAyrtdEkAQWvVn4gfp8ATDHDRep4tMZ7AkSHtrG3vqBrUXdrkFvn1V",
  "key3": "3Kjx6uss2GUGLjxyHUBoF2VsqFTuuDvkuf8sL95huuSjVFRwfmZFwsTkAcd8JoEF83tzMx8mUQE6cCDjN4yWrJiN",
  "key4": "5YBpLEx9ybqcQEZ1zjNf82BGnhPNMKTomrpQpso4PTYaFQQbrrh56D19TobWVDtkoBcPYC122BcHgMM4RiGmqVuE",
  "key5": "2dbm5fbe7Fk7mHfWxB8iJ57EENqZykSYvMK14kvy49xq3AVcwHAenwQJwnynFsYcWMnL4Tp8HnyZ1TvoDMAHRVAU",
  "key6": "4r7FHmX9GhmZUKi2rms59GjuTZrAx2gZyhB6ZjuzZdQvRqr3gawc9cRnkpfzLUwFHC6n6ezacEooDdYjkVRPUUet",
  "key7": "2FU53h79bGyYiNbKXaShFVoqh6dQN4S6Nk18xcuzqU5aqU73b3ff3xpNHgC7HcnmAJwtTnrqe8uSrrHgfBcoL7k4",
  "key8": "22YDNDHLF9whGx2WqJq6rV4MxhMExLnPzMHbcyVJ8irKRup6b5srW1JJgXDvLnWLxQLYqfhCFFg5WccYpjq4VCVc",
  "key9": "S6WXhcEKsSCtPz2ur1PxytVTLZtoENMyd3BMVp51zC6zXr5uJXoT8tpXa5SrsEWPSiHkFhEw7SqxMmK1ELUDsvp",
  "key10": "33bvXsKmscsRcyqbbksP3fW1akgqtbsUTUhow3wVh3G8E4ATPD5mRfZ2RqUo4Cm66K9FVK67dxTBPuVyk1o3vJKG",
  "key11": "5JQx5t9nK2VviLwdzpbub5iUXc6PSwK81WB3aZvT1KhFkwiSVecB9banMF3F2MNbGw6Pakmr2dfHGiBtRPVGVhZg",
  "key12": "5cFmmQYp83nFgtdo9AjmYezVLEve6zR8meYfmyuXYhM9Zn2ttTrZcay23dhrYsqM5r71KVv9Pb14zFX72nZY9Ybw",
  "key13": "vFTiq9faguN5pazCzGt5TAPJsRYNqTG88Cxuy18KJr36X3t64YzuMWUktAWWvHBqzZQ9LsY6BRFxMfPXfqVBGdz",
  "key14": "n2JbyFzQ7cSgs8DNstW5pB7y1sokZ9P2z4qLMMxoNFimj7DBCKVEkDUCu7dKLydWKePbL5CNSKNz3TcKUwCqpPS",
  "key15": "Ar5nnDMG5C4dDHiXMoNnKXy9wZCn7bWm2MyzUbgExh5URwXioa1CEsTmtBp2idCWp3sAL7Bsvi6tTZpx8kJy6GA",
  "key16": "5LpqRRvcrQ1SaZRnqJjqKhe9yTeTPJQ7QaTfLdBYu7r1MdoXBbgSwVFuevrFK4pcX2qGcuHFLTzzt79eGNHHfiNx",
  "key17": "25WpdBAA21PWT4HvsW5NFCDefbr45XvuCd5o2RrkrsjZ6feESYpXP3uGQyiSz4pXT3xdrykcuWnq4Z8zBsDcU6WA",
  "key18": "3RZwtLGxPptHgmFyCSVajs43TCSVYQzA5zDZp2ogyG6tBXSvxb1sfswLfX6zkGEvB1CPvozVCuvA1ordwGWccUSx",
  "key19": "5CKhZdW9wGqwwmWaf8pEkhycrrTLggM5bpwyscE5MeCWX9qddXazgZxwHTRdVZ7vv7N56XwZaURC8Q8RCtDRhBVa",
  "key20": "2Vvevc1gYPmtPUFtSSQFbC9FCxvejQSZ1AnyopHCHZ4vjL1mi5jJ6PckScatqCF5wVYdnpMGbkhCtyManjSmmavu",
  "key21": "5EAt2GzTndta7icQRnwMJip5NX3Ntfcsp8g7z86h9kNZySF1q3L6xLEivW9AjSWtPeZoXNTCaAcWmpnTdTKYVJDc",
  "key22": "5XDC23Sb9M2t2ZjpdAaqmAF1UugPdUEah2KGc6q2i6U367v4mDDY6b43RoEMqL5nTbvZnttjX7kZMRUuPjKJLtHV",
  "key23": "5XPzZC9dvBmNHCMH7oBYgs3Znj4kfkE5HnfEMPSk32BdMZyhqLJryvikhc3mhUReUVyRNBHSQMFkPWc8PtxxycmH",
  "key24": "66KHmnzu4YX6rC7BzVh7fTDN67cd7d7xSU2hMtT6ejxTGikchJtjs9SzCzQoLEhoBwdL1j3MvmzGJEugZ3w8fiqQ",
  "key25": "3yDoSZZMi54S9XW4yS4hJf7qP4K15FsfEp4xBRw5YKQvgv7RDBDBZRHXXdQuhzjQgFJNLuPVTpSMfqtTZnKkDEDx",
  "key26": "66Z39usqLjDhpSRfTLHWsMxHwrShjFvQ23jfQf2VqPse7jnhzEWAon2AVkY8W9UKckArK1625XcaUMfdQPUi9nY2",
  "key27": "2WYzHyjpy5wevAGEgpDncjDJZuHuLat7dmLGkMqaWuQNZoAXNMuFU2LyU28L9G9rtJULSb6qXmwdbyTA6PhZDw7r",
  "key28": "4y4rHaiGBJy5GQXs4B5zS3CqDVEBK1BLBbBqiRd21VDH1yU5pc7ZtEfoTkNhjv1EgZYjbynCaeKFDgtzpitArkX6"
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
