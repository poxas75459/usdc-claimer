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
    "3x8tgjURKNSrqS7zVhPLpq57Du2Y3wYLf69BNjsrPv27dA3WKcSLW9EKJZvEm18WXbYbkBddzzA3b7BR1jFAUVyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sWKkJdFxiz547EbnGCs3WoTpx8gmwUcjgNuquSfaqyJvkVdqBAGBP1iwDCpcCstginQMWmBGTkSut3u8nwDs2CH",
  "key1": "2af8e9rvJdz67FiN9KbxSBS1HusnqpFhswPJAeLPz412r9pUSCeBLXnHyFzhvRw4ekYYkXo6iocdrvsTui4j5WaL",
  "key2": "41aJHwE2uMrSMaD3fAGG2tYPL5zUTWioxvZsip29wfZEyVuFvZ8VVs2BCKAJb6JBDvCFVSM9jdb2gPprdCoHoS6Z",
  "key3": "5n7mVUUuk6kjMLkTVdtTzmtDgBBwBZoC5y8sLC8Lio7c64wYYGWmQ71Rk2VfnN8CRvUPztkEcuLLju4EjG6dEkEj",
  "key4": "4PGXkK7voP5rgmkcGNveVi58e3ERmarc8QdJiSGJBQNt74RDQg3mhq1q2FmHURQeXrHtg3CDcJHYDSnbTTVH3SCR",
  "key5": "2vKuFJ51L4aXBar6CmZf2mBKbPid2Wr6BFvnZMKnariFGwSC6GAbnrsBriGMwytxLM123oC22HwD2yeY4WoyRX2q",
  "key6": "CaLp4nFiJuVYQNG6veyqY8yZbxKd9j5hH7VEN4SkMU6NMzFyufcusAUcgeGtqsvxEWSYeERc8Szzh9Twwg2kbeh",
  "key7": "6Wwu7F9pRqqFw1UZ8MUoxikuZ4SYEPFcqfyNoF2wHFHZQ3DVbFEggZKGSncciES1T4Xp3WcbUyXZxy93Biqhcub",
  "key8": "5MyRzvfSczV1ACiFXhrRcapkzm1kJFUHXTkkaKHUVat1oosrrYba4Vu7xtNbUr5KiobvfzDAaidaQHNDwQqh7WuZ",
  "key9": "2piUHVqzn3s4gkH6JA2SK2BpNJ37ytgzwN4PBNcUQgUppqZVc7kFAMbeSo9g4fTxVAe2EUUus4PvYJvLhqV2a1wH",
  "key10": "71o68yxTxNMC5S5bVtkugMqMZtiAxPEFiPLqVDreaL3RJzweFsGDMbj8aw54b9cqSc78diBmHT2CKj9PGkap1To",
  "key11": "JWXKTJxx4225JfcqeJWXEvC1FiGQU5svPo4RVipZvj9mDS67o8Zr1WwrJfMxtzsPzDahHcf3vXK3vSUK4GitE8C",
  "key12": "3fjxdXRhS9KN8UiAW24Fak7RBJdUwF5vGqc8yrjkF8nqyt91gnUYGmfTkxNHz3YeJ4P7RmSAcfFUSBdVLeNzCu4j",
  "key13": "5NGyNwgHY4aKX25DMeGkNWrZrERgU5QWUpG4YGW4aaCcKcB9XH1auhAeDEHbKcx4apUxaoS9SZ4YpQ4uXudhi8dq",
  "key14": "2vhqj3U9EL73BQ4cURFfUQTDTub5vYt9y5Cc3osUqMhb298uVUVvSJUvVcuqz11iUovxAd2fd4hsy8h7FbTcDerY",
  "key15": "5n4YuYwfpnAzMydMBFFY6EzqnzG8TkxSZ3SRduorfi8ZUXwVvDdUFXdc6n5H54U5HnbZ3sEMyhU84aUfz2a1tfeA",
  "key16": "36amXyoqfM7YsQvAgjtd4GdkkEUehBj7t23QdNHbA56Bm7bdbEr23c74ZgRiH9SGnDdUCXyAYoqUL61uDp1gb1Ds",
  "key17": "4MXaKPznYFF23tAtiaKNGCYDMbxKutdsBFQ8UeyEhKazK4qRESY56SBTxPwmXmR5GKsdJxzco3meS5zKwbqMLTCh",
  "key18": "gFSfAxx4PMtqnFTjdo9BRm9Sfj8r2bHSDTV6vNgXkq9LJn8kZ4i4gW7XMkea6kUf5xyUys7vNFBHcURVFooEjtU",
  "key19": "3NZMNoGPMGm1wnaexwU2P31NcenMQdugCA7q2UnynFzLMikctAE79VVoUjdwT9HmkJ5H8VK7Vj5E11MH88gh9EBH",
  "key20": "3uGgMRvoZDyTymU7Bj7WiPSPynRr6rucBusCbpmNG3mHGkaE5c8crACzJxEQp8dnBTfWkkzFu7ZSQtRt15yGUUNv",
  "key21": "xtbL7Eo4uhguerjmfPh7hX6yPzgutwv29hKWWw2qaUzidEp5X6W1CzJbi48Y4DDBuFgkjGymG5vfozrDuEhcbp1",
  "key22": "3EtF4wwmuxZKbysncFVXUe1Zz7nd1pep73hBtUgaSjYyqo6o7UbGF75oCkZe8skbo7tkmRuiWxbkAbW9AgAiVVqa",
  "key23": "2dzoxTYpK3VAkhQCenpNTPuR5eenLwYHjQTiUkTh81FZYmFam9LWb8wAXgtHZ9SjXdaBqmLxdRQ2ggAX6WYRvfGU",
  "key24": "3C51tGARL2vaczZVFJvVxovVa24ZbxNdEaZU6AzdWMeKWippiHvY5tSeQGUFGNNKwac4Zd1X1MxbMXMfJt5jzzd6",
  "key25": "2JYLKDuWaH2uFrbGVArsibZhpuH5AqFsdrMNqWut4bVePQqcYPFTnRzzbARKbLCgPMU6KRAMPPDC7tv6ACcSqqjy",
  "key26": "3xUd2FGsdLA6ykhpnBwUq3VVeY2iZJrKWfDRuTSM6nihrWkRtLBFyTdaDXy3dMFZnLTGE7DXE67muf1pkUd4fzEy",
  "key27": "3Hsdfd3vDFHJMWv9NZ2fhGZDePBc6ErSmA9Ui3V5yD2Jsc5e1gnGf56p4gfKgi62sFszW4HmZU17Qc5Naxqo6WZa",
  "key28": "2jrJLLyABwzz3pmGi6WCe3VMUQhjyeuSJsDQRezoBP1z1yLowkdA7nwyGrWYCm6tjhVxGe7skJQDa3LjcK6CbR37",
  "key29": "544d4kmjgCHkxSwHLanX72T4BSRsog8Y4noKhNud8XYzsFUWFEArwqgiV4cc28va42NDjuzbrE5hQuChrYLftuYP",
  "key30": "5XZ53E4FnMEbQjy5aTiBUc2HK956TzfQzJBV6iy7GNdSD2fw3TzHNaJet9D2kopJycvNLXD8H2JhJKsqkzu6JoAp",
  "key31": "5ny9Bcegt1uvs9VAP3o28FRWToSyQL2bp4cVAVtobDuKpfXQGMbJebfq6Cx2rRvwADYiqSgbJ52UTeMGWjgqCVuB",
  "key32": "5TrsrEgJ8WxGYH6cRj2HFnJ1BWjphZB2sdTWdvmtYe1o4C3R8SNZpvCQiHYxMfSAd6hfbvrGd2JC7uhWKZkgC46A",
  "key33": "vdKaMkU8MrweVXc25S3ySy1LoP82KDWKwzEMMSorgob1YiJP1F95cyYBPyjeQyzLuANuX3JkRA4oeJdmF9Ay9W7",
  "key34": "25xVbxamEVhnBVQ6d6QrQwmjm78ZguWV93d3JhRQ6yBmYheohpdz94GhavpYRLr3bdjD5eFirtTxESpYDWbxwixb",
  "key35": "3Aq7nGpMtdWFfoLCEnoAA5LxsFmWU9pbZKSiVWdcuRPPgGHH1cSyi17G3AcntZdvbrqdn3Jbm32rsEjattDa2BXb",
  "key36": "2T5LL86ofYKAK4rvcs3f5x8BXF7MJ4FAK6J7vCaqMigzBiQKyP5Q9mUueqD1enpe3dTzEBPcdY7H2VP8BaQo7aW2",
  "key37": "3u3fCDMYubDz9LPpYq9PaEhqBffhLx7YP4vFjdbeC6zN3C76NymcaLQTcW197DCzj7oixmrPftzyuG1rg25Ddvpu",
  "key38": "46ibRcLEehiBCPHpV4MZ8Xt7R99D1jTCybvF1CtdhDE4ZayZPCyjN65xvCcAFMJFycnJzxZZzRDQn9xNZyR6uKKZ",
  "key39": "4ci9A2hFip5GLtZVz9dRbhpVtGgM9kTYCrekHKyuBjuhgUv5FnqLS6hbyHQVguzy9sGHhUmbpiYJdDLkNLESS1Pb",
  "key40": "4kkezEhTkwc2uNeRSD5wHMW45aUwo1qiRFxDLu39ArqKE9W45RrXj333sDvFoTkBCzMiJeL2gQvDN5DJR7CeHiRz",
  "key41": "31wwNWPWkkyKGvvVhLg8cPVcExBinqPaGufYtx8Zx3eMv62AFP4CCT1XtHaV844QALzW9ApMBxEFvmBBxfKF1oYK",
  "key42": "XRfh719ng76L3BZoPQpW8RQrDMryod2TaxmxDpvqxAetag9uSHkozqhR1ZEihczJ4THcyfsdq7uVufGnofD6LCb",
  "key43": "124pWLhE27EEgarnmN8y6SCAXRyAamtqVXhREZEWQgVRp5rsu8KgUMeoMCefd1kPqvJa9kMLcmi6wPp2TVyX4RXr",
  "key44": "3Aseqch3c4rsNiCBLgwrNBtEFyoBYiwkdkcNLv8hQwbR8osnyjtW4AbgkEU7fPuVwqwCvSb8aYreAwN252qfegFq",
  "key45": "Qbc4ZdFMJ1kdTrt9JdX4e6Pxmg4DGvWDZf4iZLvpwjTC5vWQj7qtJFR8aQF9DeJvQ8GCBEFXEv6K1LNh8RRRyw3",
  "key46": "47Q654vkDUXJAKquYazVwf4Em3wNEKrg5DksNPvB7SX7wBrYfYPeDLxntk6cRBcoZwv6FoDLi1yP8gn4m3kgq6pq",
  "key47": "3A9Hf4DF1RxG2t2qmy27x7xe8yUMUJhVr97ir8SSnBE5AWRff8zLG64uYTWY8a4eSYmFFm7Jw3iwoerbEJeekaYU",
  "key48": "5cTHCD2vXLF9fMxMXfuA41uNCVTBehi5p3bj86jTt2NLGFjqkHzSTsbs7riUoHXCwztT83Hns2Q7CBcn48UcXNFH",
  "key49": "5xJ1cdzCXyY6S7HUBMNfR31tV2vYpfyRiwCpsD4PuErVXLe8TxGYEMZiekCjns3787Lcv2yyfr6NCwLjwjxtn4bp"
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
