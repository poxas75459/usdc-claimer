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
    "2BPjPi3ZfujUgxgusB3iPYrwosHU9e25vgmLJnekLdXXhCpGWc6zaSbnPJuTdzF2YoXSQfW3RMDxXhFDRf34dEAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rAVoQnU9pPABoafykWbDEHWbk4t6oFdR6wwKpPCwBcHBt1HxQWKmJQHv5qUHBSwk9QmQcTP1pgV4Db1Hqn2Pu8K",
  "key1": "57w7KSmQDGRv7VSz5NDNuDLL9KGCzoEtPj9udarSi7ngut5BwfK2YfZJTp7vq5ncuXz1VaZr77J4WYaSijHsVggF",
  "key2": "36ziJS5coD2PHHWxVELm1aa3N2kBRiJC16LRVUCQWZeww9D64FDxgvyFqsR2BHuNU6WMoRSPZFNxdcLvRbDQ6cdy",
  "key3": "34XSEDMqDkXvsPguxoT1Fgo6o3oPY77aGYZ6aGE3j1rAeUwfJhi7qh48U2b7wHs8CQxfBpjbReZVF9sibcw4uu3",
  "key4": "2AzmYr7rnABNCj9282BiSShuZ4wjABfwpuRU6yXfVpyEe2fKqPzurYcUWAiR1zYJvicVQ6fvcGtLpB5wfMCKDgbe",
  "key5": "WFNGVU7pbz5mUqbWPFVKy9SbmD321GMaxn6rG4mvWUMtFTm5YgRJPTZzzfbjMBqWS5uJp3VMxEFtkM3axzDAkRQ",
  "key6": "4ZSxzEfNg2tnniYw6CtrEQZVpLHiJz5987Rfhub3zvA3Bgf43gUHWpNfK7Atr22ey4CFCMjtxtJcZmv9Cf1AijPp",
  "key7": "DpLcfN6o9W65K16uK2AUmMxKuyPCERb1sqvq8xvAq6pAVHxw8pjna6eKsT6t7yD2oJQhSXhcpiAEP4RoqjB8dsH",
  "key8": "4BQx6UYxQZqkkZjc4d6fssjZiVcaRphNqTX2Vy76fanFtKTqg54Vic2v3pqMhTduZDDoQQermhY8BwqhMXsnDRFV",
  "key9": "58SJG2WwRijL8mZUmUhqayzSb1wkUASJuX25LPfQBhE9JbjKFfjydajTwTmVuBkYWQN5EyHaEXkXsRmw16L5rqj9",
  "key10": "2CwGeEvK5Mj6NX6iGpryHS3s7SRTWbCmaeyNEdieTPb8z4jnckb5JJaftacLvsz5c34G1R4acUdgci7fUg8uoARR",
  "key11": "3PTGKC5tHD6dzagD4j9AsDaiWpQQMtgHgSbupZEKu2QrNcjgh2xtzTE7jEQjtwzMBhxtD54PPvpRhvTz3K3W94hP",
  "key12": "34r6ihxewxXxUNoMbnWQUZt2S8CEY5ym8u31kZQ7vgpgkusWx5aUg54ZjXEEMLJQ8NcyGetZGpbgQXWZX8HkjFFR",
  "key13": "5pBRruQyupq6uSDjnjDjrB9j66o64ve2wqukAoUZaK8BgqU53TBdZFx51ufpnS94K4BF8e1k2YLj5z8L2nNbushv",
  "key14": "4FhQjN56rUyV7x6cs6S7h1qMDJUpguXLqQuWmpLV9sEkBzfrBVBr2FBHimRKaYH7nNZEX88QsbZtH1SEf4zYMZmV",
  "key15": "CWoosZX5fmXYEPkjuHwYnCzcrxGNVWfzoAC1iPBbLPjpcCc2yZZUuMg2zL4Uw1fiHoobAvGDTPWUPdPjJzE1R2n",
  "key16": "58DVpXaHFCwaaKcFkJrfDn3ExubmbUNCZA3anagWT7riecG8aMPuFDyHrhaDhcQPwkLKEqk5HsBpTpQBHTKEZGSR",
  "key17": "2fjCufLe8TKKMyHKGXpeV1t82SnqVy1MeWAKAkJefYfBRD3gsY9FhHzQRi1hCvVHLJTZzFwa9q1UJtC73Xd6wgEv",
  "key18": "5orHthcQti6Mx8BqASNMDDavF3bFRSEhuAmfFXL9XE9dvg8BrJ3RY6t3cSbAEQChDYorYt6vpwKqpHo5sf33pxd6",
  "key19": "4EJdiKqUixiZs4mNanKSDhYHj2FMaP6qERaMy9phHPbHXG9NMHFfYgpCUBBEZ9huHodzHSBtg8Rnfiy2TXujrBoC",
  "key20": "b38QcAXawM5p8qELBv7TKsftXgX8i4WyRa82n7huF7oLT326zXSnWXqn3rRNgBiSrBdisz4oQXt9AsNeHkq8SdY",
  "key21": "3Y2PBALkev1TfgXS6vKS3HRArKWa4ReAq3PZrJT4saSJm5DoAQpYVhFQUm9W8CTkCJCgE2MThaQGJ7mB87FVjp2",
  "key22": "4Dan9Wc3wLLnVZLppd9gJQsA4a7xu4rMyXC8xdB7yM9t1eoSwLhj5irjyiz121tUEVLoipvLQ66C6KVzVDvBX3H5",
  "key23": "2GewWruXDo5gdueTc8thR6MoGu6NksqD3RzypGtof1gmDBjWDtHeDSkny9sPMmqqjHAFWmya6WG6GHHpG9gnqFbW",
  "key24": "31fqzjoYdKrwjLCBybJpYBFTR2T3pmjsMNUYX3BW1aEHg9tW88DgvmoXQMKx2m5GtVeVrD5g74FmQ7vHEdG7RPx1",
  "key25": "3wEo8N4sJXMfwhuf61xnWmn2gwTdJXTe1iLwioTUtjmxab6rULbSrQEVqPdqBsPsVDonf6efa1zmf87QLvBqrkih",
  "key26": "T7A4XHrfAdoiSdYo6yYHMMpxc2Zzgon3GypZaVB9PQ9YZzZ8nnb8tapXxYvCSmzQmbNfJSsX9PetiZcoLthU7QB",
  "key27": "231MeofS4mNMuktavbytxAKnTm2QCizmLoguY3fn28tJHqpy6uoGTeEQayLyBTVk8z4YRfETt5Vz8vpnAuCBGyfd",
  "key28": "2LdN7SSakYjsXHJ4tFT8TUAux6EdN1jTxNagqnYfh6oKFQUfAD68rRvXK3hijFdB4Tddiqr5Tj7AtXiYVXM7ECMn",
  "key29": "5ezbcxrjg2eiunKBAGnCvfuebPHcQRAE21auHWYJxNpq4qoUbuG9BDV2Ms1SyA4FTuyjBtVpRJga4dNtzg9mj339",
  "key30": "3j5FrfVNeWQrNx69EeF9pwd7KQWafwhPJbAgo9xKXtyiPiRfebos5vaBw6AxrbP5AgGRVT9NDHvN2ZNFsn4H7xxv",
  "key31": "4ujAiuSDboFoUvxcpU5z3vWDX7ZLcdYmxv97N34cevVMQ9RP2ePzqGpsoADxLVV8vW2wHqcCcTEf39AsQjFS7NvG",
  "key32": "3EshYjBHcxujgwDVUVoyk2yfvDLAB3nZmxid1CGHqtkG4K9Vs8xcopM1v5A3VtEQ2sCdXU8UU5LtJokpmCbXtuHL",
  "key33": "4Gj8XuavCe1d6dHSJHJtuMFEdLVPtj44SRTsh842cnK7JhMadmSeUEmZUmMJFfwEbeJpo9F4rR8aufWyHEuSUtDc",
  "key34": "5oJGNJtyrqnzKpwLMAkSePaRqWY4tK4xvwXQgPaFSujdyyw1QLy4anFBKNjHdPegZQnnZ3x39vCMt5yQ6VpBkUdW",
  "key35": "4FeHxNtcij9vmBh2K9irCQq95WpdnwKsNSaMBKFkP32opFyj4W6nagNc7xQo29GaX6Pr7UB2EveNkgJresJ9g9q8",
  "key36": "65vy6bh7RPLZAA2unGdrotLcZKe9LP45iWTJxfUKTmexPNfLTGc7fv8APTu26uajXfqfi6nNmmz4GxBj1u9cShQ2",
  "key37": "Reqv7SmTZvgHF3DCtwVktxFpiDJMyJkp5yZZd5yRS6bbvHFT8QhCTKBvTxmBajGTen3WNnwV4SqSvHWABpnmZ7t",
  "key38": "2imNTVkrDzYBsdTGEJewpTnrpyrhjWracgebgo47JZFWgMZiXunyvsxzTk9TqFXXb9L7uYP3B1KneHxHBkhv6WVU",
  "key39": "2pF8dL38bgxqTXhAxaZErA9aFWcTxDaN7NaNrdL95Xr4ypSKePv3K6aD3a4AXPwqF1KBK7v84Hj3eDKLjA6YLc8S",
  "key40": "3ZYmr7qpdfXDoTiTExzuaip17hKzAHSzMQHFy1nZG6vee4cXTmh3dj1gJibbNPWsuDNcjyBsMkgFD54CwVqRtdeT",
  "key41": "546YLxfx29wn9ZNGegPkrVDH1VyA7eGzquDocJX8pHcMQeYZS1MPp1N1eJTLUP7q5peRnxofrZvxPFPztNRHyRbi",
  "key42": "3BauQ6zD6vvUJGd4oMJcXexJs9h8FnxWFMnUJvKZPyW8NfYdWM7yPmcoytMPm9MKefwFLTAzSFmXGjFZxvNHs3Ct",
  "key43": "5HSw1ab7KFUNvRWP1ewJeiqdvyBuh7HwYTcYWoJCoG2N6a2dY77KiiYXRBnmgfwr4Vx6v3KRWU7Pp2rPT7666dpC",
  "key44": "wkhrHyrMXCX7MbgfG17uUNmeBcYg768HBazKupbgB6qY8kBR6r63yRnBBDDKFpEeH8xMseURNFqbiUiPh3XkRJE",
  "key45": "3cCsWBUG4yfc732h2PSzx4r6aRqhirTCXNmRTaDQf6gEJP1t2adXrgiDsdRQzh3X7C3myXs8kiK5KVFKwzQGUR3b"
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
