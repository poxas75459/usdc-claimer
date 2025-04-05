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
    "5Lcr6a1i6juPMANm32jpDHi3rrDer4NFTyfZMDb8sRTDzRLNnDtUh81RPu3mKcfuWndk3qT4WZ476dt3ECTm3oET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HquzGuxuma9b97pdFeaS52vbgRF8nuB38u1EYoSjLgKVDjzhpqSdYk1dd8tjX6XvyhthALnS7gS24h5BSVXVzAY",
  "key1": "5mZHhTLK1qoCdMcadzdqH4smwY28oQSs3QrsAuibKFGrmv2NbtRGibt1sA3UD7xixxvV9hqv8i7PhQRP1AhRMUpz",
  "key2": "5UEhkBqi7dQfKa45M564rxD1yGLaYniSCnoEDvcV7j6N5Lfh47nXULCz3HuCjSpPSQga1EbZqSuwe54oCY9ddETF",
  "key3": "4y5DQzPSVNWzi1aQ921jgieWUsC4HBArCSCd1Lsg1XyxwUhet7XVgjQiFkyQA5KwU1BNQLxVU1bc1Q8ghK7Ep5Je",
  "key4": "RNz8iF5JuMueLLPugitGSeBbdG4XE64c3qbDDzP6HPHoFyMHreDPN24fsHx1TSckEReNaHYK1LxB54xFkxrhSNz",
  "key5": "3GFyCaWq5S7bNS964fkS1TzmsskmnEQaioWuP1VPNBnvNLGiTxWNXFWn5imf5oihfJGgYZw7E7R1r48MgLYqbmB",
  "key6": "2r8N8aQgLttdbjuT6LbSKLrDNfthSvww4mmmgv81cRsrUcnUyKBgWfWmbXVt19QT9vBCpZtEnCAFkvG2PzJfPkVx",
  "key7": "3PvatV8a9WHE1QXm2E524TnffryKbyG5bcVCW6y871BqZfZpVFZEQiaGf3sjA6KebXFTcWgE8yutE41TiVeTgTNe",
  "key8": "3rFwEdNeRc3XfudcDvvrbpjkJNYsxBsqd9H88TFHJP2f1zNVVpz79G81er65PRuyizoizcgq4rgZ3eiP3nfnpc8x",
  "key9": "5i33i9AzUQPTzSMdtUFUzXvSoMDWyQC7AesiMjhzExfCGZZ1QhbwYyYvEzUZf5cMhhPEBLPqete2d2mmZUwaWZpK",
  "key10": "45QQYLvJ6nCxCh93BvEd4sjsaJVWsDF4YbdmPxs7FmoSr1giK6DYUsfz3MabYhXvaz9gbheZdP9m7a8wn1QrQEt7",
  "key11": "53oES822PDtyWpQjbd255PbmbjyL65Gc9VFgHvbyYa2kXXKjS8pL95Sbik4z6NSe5wWVUQdVa6uGdLx4kRXtdTbD",
  "key12": "2wpJQzpfjRGCKGAUbQx82ub6CNTHWFXUTRt9VSzwLei4upkZ1PXnfExrbHgyho3stzi2RR16Hyanh3etfdMCAVgm",
  "key13": "2x4719hiMnfTt67hRZk2mYR7RRoo974vUS8Aq5t5Hzwh71GwSaxLDB3rwNfWmHM4XWY23oZxhKW4SpaCJ3DZC8zv",
  "key14": "5gjpNxrtaCSHFpkoRjqE2cpGxsdSiWGBKtLnm5Pd5wPhv7s7z7JtWbypBdYk2EWnKWYBNyH8ThwixL58eeann9vR",
  "key15": "5h9dpkh1iTvkdEDR1pwB9TXbD5DdSB1zTEb6vUQ9GNQcbXDnt9muVyaHrfLYXmQ8tVn3bADxGA5pJ7TQaHRCBiYi",
  "key16": "a6BmjnT2skRb9gfUhtV1NuRbnLeL3PZ5SkDgJry3iMzEVy6UL7UDQDjWCLCHA61q1LMu1gCUPmTDmnV3RXj6MKB",
  "key17": "5U8Z9UYSQCQrmRkaPguGE3SBrAV3gk5btPrEqYLPgadZHksRKx1F8wtmD4MpUYo8eifsFr6Vz5QoxviF28zLHbGu",
  "key18": "2oC1kRVMApUCpEVShmzBHSepigpLqxWGaGsRtGWWaFfLDgF1QDd7SpwL9tf3bPV6nDB8gFaBXdDUFSenKyt5ckMS",
  "key19": "2QWirphvwsKP62yMB9FWhTKAniF4fEpKhifrxSoVb1wuVLzSsBafcBMx89yRquGadsPGji3H6AveiAHHA38ohubd",
  "key20": "4Jdqosv95F33kVPd7mWjg9p4R13AJC2nJSWGPTt3KkCHtdPGff6HUFNqae9RGjpjrgsuvJLzuVJWWGMYsByP8N18",
  "key21": "3Ef9Navhra9WxEaZ4v6z2yhGZMek7ZPAwWysphQNXHiDW5LE7ikoQNs8vXcybvCGHu2FQkdZRbqeahFJRozRab48",
  "key22": "3HPxZuo29RgTmZrwpYFMW2shbS6wmMqjqDDhMFk8b7iRKfhnjuVSidRfMu2Ry37ayZkxoNW3rC8qiypdNuiEUf33",
  "key23": "4ujk4n8W9M1RAmjJFpPKkB1Jt9HDpTsfHevZwL6HGA32vsxoDtisiu6TFECAY6614giE1MvfDqghEYPyAkJVyPdm",
  "key24": "3tzpDE1zy5eK1vEFVwjNuH17X3ZS1CK3oZ6fkiJ8P5NG7XTUMABdPZXfvZ9VXHzNUB4EbQJx7A7tMZVgoeB43aoK",
  "key25": "2pgPvyfma7wueFhxAZcLDc1QaQ4nvou4Ypq9VKBYsCttEDacDbvTyFHfzfoxiDPCLtRQmvtDLggTJ7CxaTUYnTSR",
  "key26": "2zgX4UGs1sU95xkETZ5jKiZTQgQ7EYa6dyoM86aV7hquzT5XDH1mhmnRkpxnBexme9JTu2BSoGiMxL58p7Fvh71o",
  "key27": "4WvjW5BsHXFL5dh3c2U5KYZ1kpa2aC8cZcfxXmBGzvAqon2ga64sVM5CFBgD1PLuRYb4Jp6qRwxLvAjRZbaqnp6e",
  "key28": "2jpnKYBRh7ETBdMAPKu6riKBmq6N4ft9eNeUB1gdHqfdhRAWH3qVxeV1tgCAoTZ9yzTLKjygfGZYui8wJzK4BQfm",
  "key29": "5jRbwttzJ6X4kjaUMubzXQbsd24T4Mez1EKkVvuh1VhLYnzJDvPLpv4Tdi9PWaoSWufn2a8essL8SqwAHoNLqbnf",
  "key30": "XKzK22cAeMUiYVPcLFdefUFgLdcPLAaPZ7m4e3QWGXSjFS7PupKexw7fXVRKcBqE417vr35a1EYCLTLtnqU1rPx",
  "key31": "5jThvjEvnNJYhHtTD1b131S9FKucLkFvwKXkeYqgopiUa5b5z66sWeZoq6WaD1DZLnqHEkWmn6cpZpc85FbAfVEy",
  "key32": "45YWs9mkdjbCJnB3aLJeHztPYvbbWx5YK1sqDHNJhgvWhNZCUqUWea8DDSdz5rBEqLNgzCQTVhEQ9wpJDfUCxxbe",
  "key33": "3hWAiGf7LuJgQCFPuw7Gu4kCt19fjziV79GXVqgCy3NgzGzhmREMMz1mvCyFm4zSxYRyX3SfT466Zngk5LmHGNwk",
  "key34": "4UTNeqXSPumEiU8FoFGyarukaed5fwjHTdUFHh4Eq9fuMcuYJ8fc8PmfB3os1BYawWML4SJnB5EyTGtYApJtp826"
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
