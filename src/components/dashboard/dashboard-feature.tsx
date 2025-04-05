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
    "34ykcWt8d7QwjF7RKt5vodQZfiam8DchhXWUq6aMx224Ac9kV9L4rxNsY8y73r28pRh4UP9iosSSxytN1aFQsmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PSe5JwMSmyUSoVLoLY7g38oAZ4k3A3864j2MZ7u5tC7t3dT2G1rDh8ZRBZY94jebGWGhdGyr875P6Lipstw39ia",
  "key1": "WwGHTw2bmobEdFY7qXT4xHB6C4Dt54ihP34fkRHa3rr2JxF7C1bsuojW1xarWG2mPV4kM6iWEwLrUsnPf3GXJZC",
  "key2": "5y51wi8MQs8T3nFWUTEu3GQriz4Y6wCbE5fYDT1vfPbdLqJ6jEqAkfio28mwmnHX5WWFxaZt4J5Qfpb6S4j5fXC4",
  "key3": "4heDDciRwHWoMS9WUm51iPigDMz95BzMV8xaJP95bqWeTMouKCwybVq2QhWvxtUCRBon5kzndnEcEHwvmbwDutyB",
  "key4": "285TMYsCSa75MkRxh8u2Ge8sQ4UfBQZdDqk3QeiZeo97SmM2phrEKe3UrVTYUpQK2kg9sVVasKmuk7umtRvt7Q1U",
  "key5": "66h13nKJZLpDdKL8ZMtxf3qKumfv4unkFeGeTz6ee2Wm5wTs8EmBsPSkkKKxviQG8aBitktDB3tnnYMryEM42HEt",
  "key6": "6LnLRJuvScvSpp7te6jEpGuUrkCGNZze9XGT2KFgD4Sns6sPoydSsMSXoxqE61DYH9T9Hbvj5VZKxKRZQVxtHbc",
  "key7": "Vnve7Dvq6SUBdpKsiTTtF7DDd9WGrcpCwyeTfyDqBs4d7fDskaxTtUJSTV6dTVd57wDJFxNNbVRNByXq1anmDn3",
  "key8": "5eJBpy33jNZXk8R7D8Q9wc7kXbcFxWcddur4Zgr7gb6CSBqkUpnzmurCfffq23dGPBXXqCcc36C1sTp473Hvp3rq",
  "key9": "3DdERxQcvgEF7KxBGKwQN1dWXGn4LhgQ2Fcu2atdpVc3bx1msyzmWwpnbQRw6efQTxMgXhdr1cMN8rpydizLGwGx",
  "key10": "31L3Tc2MsnUXPiB566jrHHwhYg16m559LSoLCR4jrhCDHoC7CN5NXuZWq3ZXfoq4h7uBKJBh2Rh9ezGGd4jn3pg3",
  "key11": "38MWVeDrDuCrtQwz8KFrqBdzptyXXDDjzRtLGy6Ysw8mL8CYXe18EFoiKjJgdM3vyhKCLT3r9WtcebV5rF8fwQcM",
  "key12": "5oxuv4n8u5LFuii6DimQ5bzay82G6moLCpungcEK3LxL2HJihJwf5BJFSRmp5smDvjWPiYqwXJUTZGbzPa4dPYM6",
  "key13": "3vdjzbsEpt8Z1EmDrS5rK4nfREr5Jur9ZeYXNmnioCYHA19Ln7t2dKpipqB8ps8hc3VmathCYuQK5ZB2WLTS94eX",
  "key14": "4HooXgFGbevdZWSqowop2uz9CoAqaN9ipsbbjg11vEh1jZqdmcmTY7V2DZAVwqDxsfKiftkHx5jtJ8hSTpzDyc6j",
  "key15": "3s1cqaLrvNhZmrvSe1CaGrARpZYJBa2wUHYTuPVfoqv8H8YUrzw6ZS1eQMSEWUe9SwXbCoCxiorcVTNGsQ6ZdAXo",
  "key16": "EzJMCsYTCEet7Mr8JeT4kdKbc212ThHAiboANQ1dUBevx4vmXTeNX3ae2kuyxpcdJ6gzHJeDSemvJTTDLTk6rwg",
  "key17": "4Br3P87YwELy5621szAuoscMpVfg56wNxfXLe3tN527xjVMVARRACqHofJ2m2eq9e1b3FN8S6WW1FsLKjQyN4fWj",
  "key18": "4rNLgsq4M5JaWoVNcvTmQACwqr1XkEyqXJLgMzFVsyzTDQS9JxGCkJEjEJMuddF6vJFCPQX1R9imzyax3aV8SDdS",
  "key19": "4xHkEk9TW7s1zndXDKDwP2xxRfqCAuZ3sEcTAyUfvfZEesZ2xUL71tvahE2LEpdKV5YmCWYQikqy3tr4dnQfzx2E",
  "key20": "5wTNvmruvLNxSfuGJzcTK7fdACZPSCfz487XWkajLfinAhjhqMfUg8Qd49NYqWs4UXoh53UjcGdCrUjeeq6bT6Aq",
  "key21": "4xcMgXryiD1jJvnw8VH1Z7cMdEjMeEXNHWZxYiFZXSn5sXYhNrMY8dVxonkfn6iwcxehY1RyEmuMzeoJGAx4VTFX",
  "key22": "rLtiK5dGU5iy255z93LMfucw2RMPnYmvumuXsF9ChA4o9P4qnMbs4ftYonnst1RmGvZTp7dviGfAUGvooBPrKdA",
  "key23": "2oJPgHmxvmiiE7Fe82K8xVUinAeSiXsu74BZb5cRbn1dZnK26162jPdEfCr1EJDiaGoAuUMAybFAfF4erAVinb18",
  "key24": "2o3sFvB3KPafBRMRhAuRegyHDR3UDoCkUebK33KytQyNYUEpDjoByyMJ7g7KRY5bqX5YrgpRuwgwi1rqh6zgwYe7",
  "key25": "4eivD4AGREYuKtigZHxhMfS7WVhdhVeQYtWMD4LuMFrV91bhoFisiaUhshZz4HiwJyvAio3y1Ce3vrumz1t4H9G9",
  "key26": "4kUwuaRD76CzrE4QCB4hdxiHTDjgW3EjfFumPeeHLgR1JxNGJx8xn7dNzkYeurqJKwQFGm7nxA1yjLC8YLq5caRZ",
  "key27": "344nBp3JYs43JZubMmAJ9GYNaSwwrL5NkyBKYBvM7PMMkdaUBJU4NgdpnngcLTsVN7pHPGysmGYwZ4nbMNXLLTFD",
  "key28": "2Zo6XRjRSWjRaQNjWtGZ77iYQMK4rfE4p9TnWF4XGZ86yPLCJEiMTy8vGf85jneToickwEcZpSSMq5xsVxDSbyst",
  "key29": "513dxMyunVKGe3Uz4KNvDfGheM6U9J4gNrPhzAVCNdLnz61KZZtnfZZLFQFKCDAmcSPdQHmyughaXU3BpXWFfy8m",
  "key30": "4HtG7A2q2X3BhU8pNFYFsAT8EvP8SjwRMpnGEoXhffnWevTKDJuQJHAKAusvrpfFkuvJPtxcgq6BWNsjsVAqqrd6",
  "key31": "3idGDy1gXosHCmwPQsJNEfiN16KQ2AUqZdNGjXC3MP8wGtx3s5KTY6K9xGQ5f8bFhrVnPSJLMEMsFMDPQ2herxyF",
  "key32": "5xsDtj6TXaLRcPTQnqwJRoj59ti6tiR28ZMR7xb5sTmtiQM4NN99ZecBjjc3BUGfY11JRjhE7LQaBbySBEskoskK",
  "key33": "5oWimxaN9siEq5Jh7gxrYK77prdyM3KY8Wqqe3fe4nsS9b99CP4tLiSiXqxScsjxHXswgQZy8zzPUa3tyswSdqEk",
  "key34": "5gM3ZquHQvAgj2zEowiQvthDXjoBUxURmqBQpiiXEgqXqomNExczV4Tgw7Kh3bbdDWW7jfKzFN928y6pS68PV5Ld",
  "key35": "3S819FppNDJg1GoKEz5mfNwSotyA69455Nx2jmKcqbpWpUSsmBRTPpgNqSSEr4gVd5ecnSrtgY4o9D3ajvVna4fi",
  "key36": "263X9vaXoEb1yEc9GPEwXjfhXkX92Rc1tpagA4AHsKEmCGuyDnyYMAwd39igvw4PNZiU4rqFiRHKsQ7Bd63b1StH",
  "key37": "64uA5pbbJQTpD4HGy2ekwUphYqgKykFcigz3VsoyozZX8fx8siftvqS1qLYv82DZonon6B6iW4M5hrnu5PdVEmNi",
  "key38": "31hCm7oBPMYTTi87r1PzUnfEgFWGxi9LLn6ALN3QK9dfx6dZMcdbRCTig7AE3dLsxeCzRRErwD3yGnDNy7kGHL6G",
  "key39": "4PmenA4GwcJiDVozbgvoZxbERe4VYzRyt1gS29fncYfK1yB64BrVjxn1e7QCpFfPZbnSWopZjhC6NzYq9Uh4jMZz",
  "key40": "5BysiMHmvXGmDfq1PwVMLLFQ11g4R5rnmBQjUGWor71kQ5nyCLwhfVpUEwtf8TLJh8wft5k9r1PtAL6RqS5nJuFt",
  "key41": "4CfCoHtmHrDqE7mTa47cdc1gBjN6fhg9hdXQmfDxhpsVQkCpN8HV2bbga3H4dJEVd5y4YUNMaVaanLgRcM2sp8Hv",
  "key42": "5EtKZ82UsN6cSkhMX942oUDxXHv12cesK3RzjkBW4rpKYGtcLbcr5vpHLxztksP7LWwpv7GubunWob2Lks5jtdna",
  "key43": "ZjFv3rDD2vXsyR98bzJAuJeahwbP778ER5H5KqKHSkoxwfkFQCreESp8hbjcZ1n1CPCjEfvaxW6LxBg9eT28Uto",
  "key44": "621cQh989kwxWcpSP4sHvS7hAfSzUaNZJKewhSTpQvTcDAmDxAry3wwdHZjoJbp3JxqwXRk39FQoj2ny7eNGvit9",
  "key45": "rYjMyyVNuon246zJWMz3h1k576FQxTMdiipAQWg61CahfAdTRgmT9ZFZmZV2R29khYsRBPA1J4you33uke6jV7v",
  "key46": "2DhXaTUEby43BPXYz16MsVqgpJckYCPhoiGF85eeYTGi6TwqRECLsvxYB5iD5Ehv4ZMWfg4KGouZwrKwWh4kbrEt",
  "key47": "ojFg4qL5ZU1rc63um62sKaz2RY9LQAvMA1KaWxCaPz6kFiK2wkiKQnWxEpbModn4BWCxcsVCdsHUk44qdnpszzW"
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
