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
    "5S4PQEHPAswD6SJbrjJu6dwX2DuEj5nRopMEBWM8dH3QVM5UJ9AgvwcS7XgQq845Tzz9twNybMBctJXdhoymeq9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66kgRFVc6uzNm34GgQREJmDiejnxk9xC1WtsF4zu3fmuriuEoLnVybyFBZWQF7juZnyDDh89uyrH82HUkkb4skwQ",
  "key1": "7HySJpCSj43JgPwuuycCFnNV58uLkhz8uRFCa5Ncyp5iiv1rjJAU4Vw6PaZvhi5BU4HP8MiZcFGRJjzSjirJWUx",
  "key2": "2WNEgGg6EgJrsus5kiUXbCyqmCsszNsN9EzQrthm78osyxH9FYwSEiaiGsgDT1YXSVnq7DGejAm5Sh8kkTkKjZmv",
  "key3": "5R5vEv489RG5LMnb78jk9pXbPUbsEAcVa6QYo7TtLMCzMUEVxsZ34JjUcvdRo5DQsyYMELLEcnzRDXCPqTx63MA4",
  "key4": "TWKuj1sTYCdyvAEsKjuE324Ks3u9rdhJFEyiMtfNo3wdxzRajy3QeEFDR9QrDPeMdf1UpRvYDptB5zQxPzxyGZg",
  "key5": "5qg8Hm8j3Yz7zRjckHpFHXyrwsMBcxCDd2xuYp9g8qYHF55nFpJCM6Jgcukj51Nu9EmXNvPZKBwX6hCafEmSMnYn",
  "key6": "3Fwpv47Uj6NEKWJC29Re8EWmxDtRC1GEPAfGS1n3p7XMhTH8y2vPp5auPuV4DMy2gefkVAJaqd78xZKoCWLc1hS1",
  "key7": "N8WdpuANmY5mRitxLAwyUcaK4J1sBW9DbNZXDjCsdRYEDGqHefZtTk5gUkm6yLc6gkT7TGjcZvrEcRywHas8aUE",
  "key8": "3z5Xcfv4wvizvdk7ALTfrnABEG5YLBW2y7SwEAezMN5Qz1RZiB5T2MFMLetY7a6XYi5UPrhQbCWqyMe6k7QSeZpN",
  "key9": "588QVqzKBWwYUMk1Tty1tGgZLVJVnyT7GMJjSF75WFWV5bPzARP7bDZGHQt7UDYHEQfEn2MtrdhEEnFGjdUxpFK1",
  "key10": "33bmfNhFcqnt9eXRUk8fdaFzdHEKvrpcBqC65tdHNcSJ5Z82FcmPTbzZutjGgkwjsG1zaq3PZfSazgqJ6SXPAB2q",
  "key11": "5qCG2ssYmZCHHB5nFPQpBJukFJXJLauLdaqzKKe4hsjjL8poRUZxnyas2UcTw1M4F3ADnc9VHqphZUDwFZLMCbzX",
  "key12": "3WJF5FqgXENZAoHA1H65A1Z3RvevTNTEgjMjVTatEkaQTS9sKBTsuLdGWdW3jV29bSvFC47xwtt5So41QkfvRHV1",
  "key13": "4H6rPHTXFpbw75AdYQYs1BWKEDbiT1Hoke1CeZB2jF3q8MwG4CSCjSpqmEQeZnhSkEPNs4sRLq5ajHZpSqHBXsW",
  "key14": "4ksGk4K1n3cZAUuuYDz2T1EVPWddcFRepU2rRMeL6vyCNLHVZSHXDHNSzRhoYtgYGP2aiRyBo5BsK1hNzJr71cqx",
  "key15": "4XrYk2bykFCdLJkTvHEB5ijwd4EbpHbf9jMtP3rm6f3CkHeVKFcH6fPDr6sj2JqVPHuWZ1SJzvPJg2ZUxfCFtFyJ",
  "key16": "5ympRzTqdVtjgDattpPKkiv48oiTZgiYjXUHoGLYjNBWL5YptizuA7Z8k3Xb33SQroZ15Fw7QnbYtVwqeUJpvY7H",
  "key17": "4zr89u1xjnysdbtXnSiJqtFDXt3qbwT4Bhmx7i5wuTShQFiASrHELLXEk3wVmw4yqCw85p6SE1b3WJ3nBRiX79we",
  "key18": "2dCVMr1u8bg8bH8zEsdfK8LsZDVphV6buLvXmufGXFHQfK5Wgc9ppB3KZX8t8mWo6DTs968aGZFV2HwPT2DniCFM",
  "key19": "hhxcyHbb2bukn5VJYFVMYVotu6GPDg2rU18VwT8Xr2vWtWaNNtM4TYhsUXKbifvp5c4fNwCkUAKqGxcfzXr33kn",
  "key20": "3RBfFsjg9YfAV8y2THRRqGiuDxLmnPSntDbUmXAH3ZRuqDq1e5PBWR7KJHWSLARJ5TsALvg4HymRcJY4tgRaHwyP",
  "key21": "4pik9q79o6S8Yjq7Qrd7XHvK2Z8PSpmxvK7oD6Qtf8eAkmy2LkwNzQ9erj1qgQULQkkHk8VKEHsuWxuYrsdGqD9Z",
  "key22": "45JM8cyF1FPLCHKsvWmYhW6JZhtoMgRce8psEZWLsnBf1yj1Xti3KNQyangmQvPjQhaCSwDruFTVCWSZTxVcchZy",
  "key23": "3mbTNdBnGSiNXApme8mdBt71aUqLdCqiVDBSDcREnhKpkjZ4XuNNZfPEzZ4j8e3dd1c65JuHvz2CmmS9Y62UrriS",
  "key24": "4GfJGM5Gb2KhfFfYfRLtQFX1uNTWH7Un8Ju6kWituC9GeJEzDY4EJVH7cTTt3LRJKtHWvEfRt7RaZqYdWabAVfXR",
  "key25": "4cVw55pmsCSGksof54eKfL6i3N2W8vj5DCbNo4mxpnsZgrWwLAZxqM7hUmuKfrw3KK9cS132LLfmheu8LDmzR8or",
  "key26": "2dpQSfU7tzUn4ZESijNvE3atcwHEAVKGYVjD4wQHvb6Bpk8UBn451cSn3jiS6b5oRjfn8qRugj89q6UbGogXpdBQ",
  "key27": "nJrv93FM59xZLeE7pyYiNtAAr3vsgoWSerDdb8RsdBkSNUV7rvaQFb9MhR1jkC4pWvcE9ohbVRrW9niuvx3r7tx",
  "key28": "kG3kmPer4n9z55emMdcFW68dGacRSK5g64xB574bVNacVnsNQGxDmoBNYyANWjWJxxHcLFTWRGJv6JMpvZxuVRD",
  "key29": "agZj3X7v3XhAEesHKSVVNXa1uBLgNww8cufaZ7Hpcs2GTWRE9tE34CkMCGH83JbkKoYnLgqf5hwyA4mKsf4qgAV",
  "key30": "5YVRvhPF1qGVonACdWVmH99Ytx99EevWpPKD8MWSAVkPvNrdCYntN1ize7GG433j3b4fXazqjoDYHNfNFM9Vd9ka",
  "key31": "4fB6P7VuFUpw3hPu4QihH3aSPShfwvfU9nFnjxcvDeoXA6P1TZ7S5URHP29RVaZPMF3T2E5M3jU97UUkzZ1s8tUx",
  "key32": "2mKtRn3mqaxia9bX8MCsCgGyiiJBcQL9vynfFMvsWwYFLSP8toEyBGVv57VXbJy7kCfPBrf5JxaKUeEcZaDtRaQ5",
  "key33": "3FqY2yyBjaaKpSwWK5GHPMYL9suLhYTQWNTX4dumC48qzQZMiNTKK5zK9jVgY8y7Xrx8hPd31gFkck2388ji5Rdt"
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
