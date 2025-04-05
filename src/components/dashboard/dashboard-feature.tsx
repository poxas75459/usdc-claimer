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
    "4S9XESYQzRbFQRH25mqgwP2bZXqMMXbekz3ha9CmHR8sYXJEP7xXpTrEiBaEZ2X2T4nz5W38NehcQ3tmJ6SeGu2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uHGHevrQrFwtJNFdJB4PpenuJDfJyfjaJwNpELbL6mHDCSgZqFizy3D5znWH9nof1i4gaueUAfW3KUY1Usa7ave",
  "key1": "5CUueE8qF2xc8aTq5grSBY2FgJ5CG1cP3EezvbF5ytbQT8bUSV9rk3Le5KYfEotjRnmfZzcKNcb9nKvgsrxoehp2",
  "key2": "4ULMqjHJoRdwWWB22fRJDkrTa8V918jSUsWiAqxpt9Q3nawukrHAwQ5kpQ68hB9LH9pUBvyxtB23ajPvXRavKKxg",
  "key3": "5zTHREyqmCDuZ1Xohvss6phPo7WovPUJLtq1XADLL162MgdHb7592UEbGgWyTXXJctUHm9CUegLuaCryxpX8psCQ",
  "key4": "4pYby2Xg5G3aAt4X1uzUMzYyTx1pazqnhgbVVvS4Np4eh7iNkqwFA8D1NDuS5vFtF1aRnp3XbgAzQCUSaosQdXPM",
  "key5": "4KX78UdMFM2teQA8Bxw4o7KJEmoWkygXnnSgjAMoNrfh49nKP1aenNjaUo3kCzbqHZVRr4qmnLSmYUq4edbu5RKk",
  "key6": "8k6c8wypsH4NZAXdv4JZVw8xFEyo5XqjjuK1Cg4d6ebWTtY52FRAgqyB6jf26f5Qp58427HUZPb8ZoD6ut7F5NR",
  "key7": "5nL2ytjjzDnpziJk2zmjg2t7gXg12Q1wfyo8EZ5qpmJauPvo9NMK2mFKR3PzRX8idqZuLBXc9Qhsfru82HVKxRcJ",
  "key8": "zi1VajhcxowKnMfeSiqsRJ7gC9musjd5XKpov1rcCMxTP88aNY5UtkhDLVVBwHqjSYfmMniRc47HnpNy8cZtJpp",
  "key9": "5iwnqFA179GWHSt6DtUwVYZx5xtc5uzwhwcC59QLE7MFymyayqE2F4f1Bmv91nw8XxNFhGfEUfRLpKuzAJRvsPRZ",
  "key10": "3oYyF87MCWqJ7abwg44u8VyYmEcNXtaR1UtKJkENTwiSGryXQ629Y87xkVFQ7weqGUyo9AENxscFzxUG3GVMeVRm",
  "key11": "2CGo7QVXXaVm2KGF2VNYmpZYggWn3fZSsUk3jJHCZH149ELSqSEduPjGESATRJ6wxDwDa4t4zrxkmP5E5ysX6kL7",
  "key12": "2xqPonD9k87FYWMiuta1Lf19myUCYHQxd65f6CeCuHxFUHc44AoBiFi25oQuCP1KfY657uLFUomiwZdm56eacUyp",
  "key13": "4TeRK5ixwgHdQqgdJzgoiKJoQkmzwb9Jxp5vZb8ifoJxeFrhdGTSJsamQZ1fGRZiha9tJvnbAU2U3H9ptdmtxM3X",
  "key14": "5EuSMoLRgZdFa9TCvcPhskK7jgqLmLDEN5ndtitRnehzHV2Xw39M2JAsaEfwFFBz8PCfwyBemLV4Pr9BwvSLpTUp",
  "key15": "4qiTbmjmKzW2Ua4ZTKgfXwyPMW9o4XJTY6sjjYq7jwGQuTdFG4HrP7YeZjtZmBptDAgiH4ifUkjgEnoaqEKkVXcF",
  "key16": "5jgzx9XFuzJ5MkQ19RAVdUGuc1yJgqSHfG468vsWH99es8vsA5vPTQfgst8oA4E47afZWhyQWYMg6szpyGx6zk4b",
  "key17": "5rVMQdf4AhaYbwLE9fdiyTpydTRLkRNnMfyFbHw5zPmmbcqt5dhPRRjbpeeegyMLsXtaPAAaCXmsSgrupasgHDuG",
  "key18": "8hKh6tFzYyCtoLQWkqCuTN6FH9krc6G86bUbLNFHwichYcSGyuMYazKCdczL8rTB8332fe3Hr7PgMxPTf3j27Jr",
  "key19": "RsK3Ffqk3wFGqvxa9ghTSB3r3JUm8k7NvMZj5VQbj13tQzzBU6Ko8h4j94syAKCBDafTJ8cCa8PrLnE33LYs7vf",
  "key20": "5yyBbpR2xx92dKuu3iJEdiBDR5pn5HJLBPB5fvNWCDboMmBHcEgcSnSsvcqp4LJBnT4aLMaHLk8mfqrVrLk1sSYa",
  "key21": "MYu4AiNSN7g71RCKbJGFdoL646LnzNfjkN3F4KwLzpqoR9wLdfXpuGynVnGieT4KLBtZTMLnbEPFrAUVYfFVrq8",
  "key22": "5ab7HRp1hM7tbhJinyhUehXVZpW6Jpg2qrkqRP1FwpnzqowXJ6Dobqcb6427nEaHV2JwVoHK5QsAG7Eq5mwksDZB",
  "key23": "Ps2incj96Z3i5RKapeh7rSN1a4EXyxVdTyHBJw9gLSgpyM5RhgBBPrG52y6EzfQY9v2WhNhJGFm61BVZaZQUco4",
  "key24": "2oFKLLWoqoN2pmb3bD6kbpLqWWFvTUYKx5NRxrciCbzLwDBo7P7LX9bBaRDh6aqPh8phTwwJDDFjgvGLSxSKxxQN",
  "key25": "ntMJpQazpByZZKUuCbGuYCG22bBTjsB8qpMk5LHuGPLgQRi6GkxPK18Btq73joV2GjpQSLmAXAdZnFmS7edNhma",
  "key26": "3PQzs7FLFoyVy2LCCgBH97MWt581PhMqexHYA8yXv9hELBwfD7KdFLzimVrHBr9mSzZ7DTj6Stc6gWYMJAa7vR5D",
  "key27": "2WgSBJ3i9A4wjBJXRrqXq4tdUNwf4KNK7AS57zYPu8NSwEJ9UQzxkLuuxtFGkDMTc8fL4QaEfiJW25WX5pMLa2BQ",
  "key28": "5h7KPLH6GogD87XfuaEUGNRJdxC649V52BnHVVGMY6A68cRDTQbw4wed6U1uTLPtrzPo19Rk5EbzTZhtoftzjET9",
  "key29": "3UgzGAAuMt3yhVZmJJCzqiDFkU3UZobR5dEDob44PKhEK6G8LrVT2AarVukyMJqyRzYFm98pfViPC1WmS9htynRw",
  "key30": "4BVHR9UVfxeGkcSRSwNena16thawczf5DMkf7VfSQTj9tUsJdxb4uVcaC1Eh2juSL3gFd3ghfRBwKkRsBEpCs3sz",
  "key31": "4WHuAvyhktuXDAjKXu1W5f1avN4FdvgCbGresRAaZdrxrB9KsonWPT59b1ufhMH6ueFoF8uBPyGrPZYcgom78vGj",
  "key32": "54DotogTL9Ep7gc2cBtQk5T8EDWBAqbXTofPDWdqAqAM9d5AWAtyspvAxb34ANMYFaRh2n6TVnSFhwK7tT9X1trQ",
  "key33": "3KxeGVdsuYyNDWKZkKr2t5Q7jn1oqsZ3QET7pF6FV44jK43KcYmhZS2aSi6HbwYCBcwZgnWqoRAmNQzkDXASxc1W",
  "key34": "38468NS9Wj2G4dLAi8otWSmDDF8Vezvgwk3vMg329qR1rXwxW46RwsURCxgQkBngB8B6kFdiFpsH2SQuk9sAF6nv",
  "key35": "66EtZ4pzig9e4KuLd3qFZeqfB1ChD87LbybNfa8o5o1oTWZp5B2UQgsAqygjSJCtN7ZrPbUHWvugJEHsNSnnimzy"
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
