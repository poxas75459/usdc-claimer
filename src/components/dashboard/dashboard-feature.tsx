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
    "4fcid87vnW5vqCoRYSYRkzfAJ8FV1HKfHoP6q2CZXFVeeDV66Sve7WzMXTGm3TbZqUySgXKHp3BTSRTvnmTKdzsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jXWkQs24Gx6QmhVbApPfxp3v3nA6mgryKXDgaVdiCSFB2rkER6hK6uAprjyh3GePSjPabXVudeHzmvptGUjPMgQ",
  "key1": "2RX7hkJcQ4F5MnQAHeNVoZyJKvrXRF8cnFmCa2ENfHw4r3yjQbDHmrVV41g4eNUsJTx8HFVecsy92S27tPP74P9b",
  "key2": "2WWY13nd7rTvv1KQqszhMXZRCSNCaHgw5Lm4MBoM3HhtqXL1Aebd5hdzuHAKscW5YzPefhKbARmjvxfszPHgzj7z",
  "key3": "3ELrwHUrsa9yrkPSKBfM21z1Ru6pRFFJX5shYSKYRyutrAu3c3jgnSYgGo489nLzHoLLQEsGFa2eVjj8zvoKfXW3",
  "key4": "5uNi5zmTtorGPTJ1czsmXxwnTqG28U6Teic5oD2GDrthoSoUcG6cnGbP27Kr9g5D1XaDMauQd6FNENoF6H1fsMhE",
  "key5": "2K4vNAAtPi3T2LL73uSmv4oL3M6piDN2aKHCA9YYw2HHVsFPtT5a7YkaTHpMHn9opuUvJqwBgHVzQScfwZCRJFhv",
  "key6": "4XENV5oguA719R1kd89dwZfdJUfAdNEfVSF5s6sDqEEUyDCqN5hhhQhHyoMWwFjs2QekEqVgiHEvTJ1mqY4n7CWp",
  "key7": "61Wh2hu1TNV1s6r67dWnG3Rjpp2QjysXKoBUXAsvL3std55fVMraxV3tmpEesyjsxEqrD52fqyq9wQkkE9kKFRVU",
  "key8": "5cFw32Am3KBQK2ArHhf2hSfxEkY6JaP4sdiNsAiyDmCNZxMoMxJn2rvK1VmBA1UQ1gQkV3ws85ZUyTWVJ6k5eQ9Z",
  "key9": "2dJg7ShXmUnXe1VM8Xuksp91aFAD8miafz1Lo76rjuRnzxkHKukEfnJFEQS7xaCUeNVTyMRx1gxcYcZp1nHYxWzQ",
  "key10": "2Kdxaej5Nfbx13PjFU4yzWvKTG2q2Pv3nmCGgNDVm4AByir5DeYUGvJRrwcQYponLnSbbQhCqjkq6DyptLGA8Mui",
  "key11": "2xVhPsHtocQc7e9wXcqKLCad5kLSSctSNaycWhn2MP8XR5m5sBJiTapMEjte9kvv3cj39aAMesgr9sS6nJ8SJJ6v",
  "key12": "2D5YSmLyU8vpaSPCwsiJaThJ1i1QbhGMowph7DDFtEsxuQ89LrManRMggWau9Zms976YQxBa4mZM9S4GhPockYjp",
  "key13": "5eQKN5ruhMApAQ9QbQ2GV4JFtweiuSx1GKX3aA1TZLKX7SGaEE9uD6D4pxLfx2DXD4DBnT1XtdJztJsJfDDUz9JQ",
  "key14": "vaJbQqpEic57rGrBYz4HPsPShmpvjuzxoBu1xtbcfr7QjYJfqR7o9wyg5fyyeckL3GghskEF8y7QPAoZuserrdk",
  "key15": "2NaXGM8V9jVFzUr1FWRRjp3JkRAt9Ybz48KG7t1nAxXi52audz2sUEjib6vv1KHpiixpAV5GQ8gfU1XcN83jS7BY",
  "key16": "3vTJWyAhMSkbMZkm5WC2RKMK47SVtsL9dCTEb8TbYnxmYAJhrijYRjxhizhk1k8dSSbGTEmJmvdtbTiSxtCkFU16",
  "key17": "4aKYPxt8zAdxrAF9s8fHgp9H9h5hEVQsQjuvuSjTzJKpLiWtH3X3tGuu56ZmgsGFzjDM1rwyYotbYxGZ5G7tXPpH",
  "key18": "5WevaoChPZBj2sWucsjhvg2XEUWQEDraKfQjTwPtChdmMWhK9ArpBcxXkDQyjTKm4wf1YjVXo1x1n55Sn4ePXyMq",
  "key19": "56bemFKMhuXokJ7yqEY85ktQSE1rqWw8MD9u9nhg9vkc2Wy6utSqmUBo5huMHwRdF9MGSxp3gXq5zZsBZ6kwzgVe",
  "key20": "32VXPcfDsT5TQBQhrpztu3QfiynDjXwhft3qjQETUPEGHHuRqzbE7GY3qdGXvXvMFYSLL5Kc2Qymv4GndwQwgyNH",
  "key21": "4SbKVyJZ7cARWtkaUzNtRs8cNjVTJ9jYWz2yq8e3xenpyLNqpfHNNwgLX1Sr3tZF2iuKSY6xu4CFnpApg5CDQoDb",
  "key22": "2H3hdaxzHacR9XHMv1hvPuq67T3grUzaZCvYEmjRQNCUAGXneWaqkv2XiCMYFmrHXtZQFk7MqCGh9njWQ5dgbgMC",
  "key23": "654CCzx8YKoE5Rdoqvu7ZhBcsRuxYHXaxRazsmtFGQiLR8V7dAhxpbYBTNYyGVUMXR4ju57rjrxpbKKr3whedLN2",
  "key24": "9d9JrRKkU4ER4Gw1h9pFA7dxJLf2SyYA1bFgzRrrbNJeCatXLfidkn7VkfPyG3WWhTV3Lft1CigAhBcJJUM34xy",
  "key25": "4azuvbYKT1Zgsofbb4DQciCZdZ5zSBGZRGdGxygYwsa2bZfg1D3oFFKghjbVrm6EcTE88pvXq5zZQ1aMTr8mh4Ao",
  "key26": "4bT5sReVU9PyYmECbun2viy5apaUm1LZATTrL9JE5J5PmjD4wMF49NNskkE4v3EySJERqjqtRsyoPwF95cnj181T",
  "key27": "3BnLp8rumZJq69SvkGtUQaTKxfNDbkLUbGYxpvu5us9i2A6zQFgNSho68RAFsZgNA9jULeoZTk9wpUf7uLjfBSjj",
  "key28": "tRt5kkpAn1tszD1wm25EXnfPo55Gw48jANhpTqtGhroSLYttY24rnmy5ZALLQgARyRW6ECvDwuRvrhJ2pNfgYQU",
  "key29": "4D4RJN76d1p5PwtCpnN93gYSzpz2ScfrVjhy4mp4RJ5gP5eYFK8hZHNcm5YEqYHEamnb3cryA48QfTGuSnk3uhuw",
  "key30": "5yZMfBstBUz5zJ6kuHw3E4DUjXDXQWszBV9BtoQUk3RvHb3BHZeMszH3ZPsCovV1W6qoRRWQQRhKKkhD8pmtcccQ",
  "key31": "3xRty3c9cEFVixACsARVu8qiGzwpWDzgfVW2TcL5rkKWqAfF9NLUGUratPro8VPcoBtWTeGcaEaLoQ8sCGMwWHk2",
  "key32": "3JiAL3LgtLG2KzvqE5svmiByHF2q36XfUSEhrRSVoevuZb7rSbZacS73Re6xApy4jaoMb8EEndgru1NVCPhBq3Mj",
  "key33": "GvTqaLwFTepYRgQdbnUQa4fR4AuRbPm94n7ku7Mehq8CFRKj129DtrPFPoRMAGHY6otNUMgidaZLgBobugcMB1z",
  "key34": "3XEkD249RZkoCQXpZgJrqDpGoCfu55AnAfRwKsQss7gvRgtJx7w7F58om9H9a4FSji1WUSfqTXayrpCDroxjiQWP",
  "key35": "4j2SoMRL74HGvskBA2HYRQMQdUsRMCDeyJJREgqjZ9Lci23uvjXdFh5z1eMA4mKMDmLQ2vGgH28CUUv6xmwkRC5Z",
  "key36": "yjUx7MRTKfBKQ199KjFomARg1BH9Q8DRfgouMJjbhNdyDHaPV28rmPeGTJCKFUHccaskdFiUNTJZqRt8zCtwLTS",
  "key37": "4ZR2gjMgiU7iHPcF9FMHAzrGmGnHQ7RPjW6LZsTMWFAYpmz97YwCDLeNdEKQLuwT7cidBywdtsnKFGwb8rqZbNM7",
  "key38": "4YAdprRmjLcDGRBvjqHHA1bjvdw7cEbNbY9CYmTntfyWfVz6wJ2xLGAd6q3nHc43WPPQre369pbytK1yfmLPoMNj",
  "key39": "35811i5PzXJbiqAuhhPLhMXK7cArWqVzCbQJNXFA1TH7C4qwFnrdvjdrdZ6CBcRrusmRnzjhYtZJBMen53NUhgzU",
  "key40": "317n7BDzLM9fdCp5uKXKeatYociULqLWmetC6mhgzEi9hX2BqiSft3ttbTysTbbrUmL2k9xSZUQD4ZsjMsJzVZJr",
  "key41": "4bReTJC5uGoVg4hW1KMwCSBtG763roeZ7Yd3re3RB7DiZp3zWbqgTwbyg47Xs3vNLs6N5dNYmFaANKtkmkyrSyTK",
  "key42": "4bgQu3odfsN3ne22zAZLLnCcTDqDBxBz8XsPhprmotHwPk4JFSvjw2gsJax4cxTWb7LzNeELbCEby72jvMZQL8gY",
  "key43": "3wnqfZFtxw6YFFqrzCRftpEDTWNhNoJap8Rho1ADCB3wRTAWwZF7gcafuFDEevAFRQaaNUPcKVDoCrAeKs2JLMTm",
  "key44": "3kpWd39pYMYVbbHEx9NJjjgZs1jh3QW5xUg5VQbvcgdUEWU4jwhqStfTDNBWzVhLg7vsT6zmb2Y9ySSVscGcjjpf",
  "key45": "FuRNfyHLiGayLHZjKXGN4kVmViTYpt33ykViF8rkVXuiLScvag1TcoZzx7w7x6WbsMcHQSiHLixFUsYw86U45UL",
  "key46": "2z1nXrXoLZ3NfUgMgrgMV4B2SQvLpZJo2mRG8E3CKKQBvHq7LDaYCbDxntuYzEio7wwTqEPJ8csz9wPCXCHu9eLf",
  "key47": "4tRbG9EV25Uqs6zpu6zX6LBB3RK2uYt2A8kN1L4pLHU8VzPcVLNZaMSNqe832sQ6LgcvanDERbdV35CSb3vCo1nC",
  "key48": "5UuBfmMHvTwpJaPrZZr6z8Kt8DoQ9ZK3bbrc113QhbMdwqmsmYK4y4YZPN4wtEqprFZ1VoJSeQbpvu7z1AVm6Nhu"
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
