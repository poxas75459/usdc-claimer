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
    "2x2UwGoHw7NHe4YMTcyWmMoYGfYEU3N5K3DXB8GDVXxxiihhPyYwFNmBVkwnA2oseDZw4DN2U1SgwnAMDNUvTSgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3geWYK3RtxQ6qEbT8Rrh3NWbMt2x9ivkKHrLPbhBvZwKoRExvTAMhANyzCiHCzZddwtXwc8uVLYWE87s7778JJY9",
  "key1": "4VaLpJ2Pemrbw9YKhC4KEaa9fBMznNqPs3hydeJF3oKG6igpZJLEdg46WSW3jREiX6KqZ2Zd6yLzXgMDAsXWXV9M",
  "key2": "2WGJXRyaov7Z1FuB2ZuD1D9FH1i6FZVSAcc57FhuSEaqHrf6cgsYsoyQ6Z1tL5ZNQSUuWcok8ymtnzhQjMUebH4Y",
  "key3": "4yTyybWXrRnKxy5gJu9kwuWQ16RmAPCmiZnMLsyDJuZNe8tPakw6fkG3EkgbHttRPr9qskhVJATYx9EbbWe2dTwt",
  "key4": "2zEUW9k3GivySDNhdBguUrfcdmCNvMR6ocCLVLiwcxuoz4APfACPdarFeCGeqLJXbUoL2xM2rcGbD7xAf8c2z3ui",
  "key5": "26EFvu9CYfEJaeBRmUSdjcgaF11t18zmYyQJioKhsAyFuYXupR6zxFjJ7PhTmqso8dhcajUKpEJGWsNnnKyjtWvj",
  "key6": "3Mgc77SF6nkjwATMrjzWQPTKm7EkGb2J9NYCMoCWcYL3Wqw3LgAETg9RkTuGbnNpS7kdgiQzrxcVCQp93EqKt3W7",
  "key7": "2kmx2Uo1QuuRCjmq23235Y39h1eoxwKV4qpuMDTemkWjixzQ9SpgKrpdtSQgyqesnsrEEoBYNRFoAsipBWqhB1GK",
  "key8": "2MkL4gZ4eDRf7RmGhEJFkxnThzb1vNss3YZz5wM5LgQ4zSSsSoWrQ1VNAN49znMFMgBxG8xa2emwDPvKaXMJvnJs",
  "key9": "fbspqWxSFNin1bueo3JWBdfKU1RhJPmcHA7hWQ18g63F4iRtojdsyyFvBfXA8LCX6XUPPjaia6ucNWnbJwhhLH4",
  "key10": "4ZAuArEn6Hp934uUjPmrC873u2ihWDedP3s2nNDxhMXxooHRGnCG6MtYAnMRkFutMimYijXQajaGrkSCNFvntKSS",
  "key11": "4sNMctXU2ebLLkqAG3867qrHLkZYfJbXtiLsJYj4yN7jDAMmnoNVQiQ96DLmzhKY2F18kW4uwc8jHtGzZzNBLYHN",
  "key12": "2xTtqbyuSmwhpuQT8zyZrbu44RLZ2T8bT2aud485xzaPNi85XfW7uQzV2YrTknNhvXgGrKP72yjwaDH9cvHQQt5C",
  "key13": "662xmiYdXWV4s37cvXyaqWfRqByw283FW9y2n8SEm6SVAaMUzy7wmyMAWAxFAPybXdALskYKC8S8mNX63mNJGPW7",
  "key14": "25bPWVVNRCzNaTQkveRkBrQsjT4UiSCWqY7PkbKvLhGjBmkyVpiCXmsdMBAZ223b8PPZj14nZC3JUEQ3D8ARTS5h",
  "key15": "FE9vfyqtfQGGzb8jsxDMpE2VGqnmzhVHevXNbCknbfRZEBbjh9dGvHoUfWNbBc5N1yNF2Sk28gjWjDkzrXdhmj6",
  "key16": "3EV1jYDqtLw3CX2TpUqM7UQBE1x3WxBPUPeFCyutZFZQhH5y7Dn4wXbSunHXuPWUf4VeiwdUw1JVsYByGNduzJHQ",
  "key17": "2fiMzmcQWkPXTtDLZtK65Etpi5tSCZTVnj1MFJGNHAqQAuzesjafnJdb8PyTz3TEQV6zD234C1MbJSjSqiybKZ3F",
  "key18": "2frdnaNdtc6PMvbv26xabDsJ45FJUjF9tCfnDEYdwGiC1MQa6vHTdbMmYv6LzmsnnyMP21xc8GUoRH9h8n5Ej18b",
  "key19": "53DoWS3AVScVCEwn8HSVe6mUFarCUGSRPYmqpgJvGUz5EbbLwYchgxqqcwuHRQiGimeGgYfsC668XZaKNr33MHxp",
  "key20": "2ZvbQGnKoux6agF3Cb8q8pMpQtvwe1ZmMDtEYqRz2emo5e7Hdnvth8aE8dU8qJLSYRdfqwbVG5ETNeNaHiFDACCy",
  "key21": "4ADwGzKRPYQAw4xAVxpn15NRAAbJgXQnXAEzfis95LDX2mCJMWDdwvZHEad6yWddrJSZnnSGXyGpfZbm1fNH9HJq",
  "key22": "5za4XfrEjFqwufAgSNajXW2bcRufn84Ee2kWSTERKNaMjxXMof6ZkGuE98E2fmWJeckshKVX7HkGsZCfa4wVPTq2",
  "key23": "5CR3g2tuXrfoepBVM5jah2uhxfPzoAp2PHfVhBs7JU3hNasiqePVNHtyRzfgP1ZHxynWFyMpi9MNwFPvce3mZ2ea",
  "key24": "3MvccdSqhNSJG5qiyse5ueuYejYfsS4XD5SpZvdWzzQdQY1eKu1c7dLay7TekmHUU7Zbuiu7ENsnuPhk5sy3aJSE",
  "key25": "2q3XUgBfXMbTAzsiMxJdneToQ3BHUFQGy9YKdSdR4eXWjc2HAWcLR89c5kjEXpPSqbsTqpugpYtiVC9rPuhweUue",
  "key26": "7756F4Y3hzBxZmetKzN7DBcNk7feGAoJYXn1YbdFe711Aimn4BwaMCPq6WCZr25WAkUJFcdDvgYwhWhWQv8ioMt",
  "key27": "4TLKJzNS8tgxkathV87epVL5zC8smA1quhUoPns3ejyaWr9Y4561Te3rT9zGdpmShRepPddm9ZvvHCR6QC7AHmBU",
  "key28": "QNmxF9rhpNDtDx1VWtLK94Gq5h91Do1Rtu1UuWmv2QFnm5ZcerZDm6PMXDRFPGMgv5R3uTooMxhsJhX8gQoiqog",
  "key29": "2qo54MMAmCj9z5iqeJZcKy7tgD1m2rC6pAgYKwvxX12xvSJaLTeppa63bV8F2L6gGX9qXkqzAQckAFVytzrAwagD",
  "key30": "5UJdmFTXzLm5awh3HBCECLcoTTw7LuLWJcANBMj5Z7LvMhAfmLyULdqkksnn32sEUGvKBUPQESkH1yLepbnfANcL",
  "key31": "55UFwmBegTTV94s4tnDeXVjyxK76NSYujKcv16KHCU5GaDCVxengtaSEh6LJ7QtjEFKyeo8YvoUURZeHZXtuqWut",
  "key32": "2w3o4yQrtZ2Xc9zwyhpsi5gUfNJ73HARPTZ3cD1moqg6rnkK8Cn5pPFGa6iPmufYxdqV7wWrgUUk3feb2iPy6eut",
  "key33": "5SEqEt1wqaHNy1PCNqWdqEQEPmoqKY4qbXoh2zjuWqv7YE5kYeRtJgt69iAxyqD5tnF2SVn1WMss4U6REpBWV1xd",
  "key34": "4LtfFYKyFqmAjaBnjBHDCHcS8Hz2qM5zcotgjXxzVYnFTMh9w1eCtrevEm9bo1v7SpEtc28rtT6XET6Kf4LmCyim"
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
