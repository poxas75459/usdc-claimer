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
    "4Tst5AWKoic48CyxyyqjNEfShb3kx6rFTy4AH85H78iHfVt4G54ZAg8gUscc2wP8itUcJh2hNsjHuYJn9gMhZBiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HV137Ute9mjt6wzCcKVqKbtAJCPovqH7VC1PfPCnjRNuov2xm6F7gLZjY5MxAXWojPoi1e273jg9s1mhuR7M3EQ",
  "key1": "2nQDdVjrMY7FfjuxHnHvex1SMmJSuzMUUV3Wnt6eTRsPYZeQfTsmiQRNhpsYKbwhaZzZL3W43xUh457kwao58ZXc",
  "key2": "5n4wkL42q9zVjL32pkH4793vs8pUwHpEenwqCbem5HNJnriYHD52BC1bHywsJ5YEuuxN8huzVfgxNxHNz2CN5FUP",
  "key3": "33EDXsRYsrqtzuCQztHRWCe1VXBMxuKTZpuRvftHtv6oTgLHxJgi6EdSPRokEcP2raFctnDHerM3GZzhi1dF5KsV",
  "key4": "4ew7VR9RAWpuQFwUuQTTEWg5JGpAKA1EtWcgPFtuCiUvsthkXbPtpGxdMBcejBhqjA67j7cswAB8F3jtF2Yg3fp9",
  "key5": "4oH2pQgLomsgo7nGQVY81qEewD94GLXWGDKXayt96meeY1RrcpEAHQJ7RZ2dnxeSx5J2ymTqpHEfLpRiQzm7p239",
  "key6": "2ZW9iLx9jyUhWceHRrkWXrTj5Lv7YXnv794ryDZpspymuyrkZoUENLm4Kw3oXwdUx5fwkvDm5zHm6csXMygE4AEm",
  "key7": "4hwbhfMdFgXRpmcxb93sD216co2PDgsJjznSHaYLqCd8epsAqGPnzqp9xd8xCQqubGghUvwXmhqvAyGbca1yM1SN",
  "key8": "5WZQrucKTghCgVBLMve4oBKNTLakX8jKEJckCMCY1gB6SczHeAsBdwjp28Mxt7pxQhPxHANctpPQfY5TL6JTrFyC",
  "key9": "2iSruhgmPfAuMznnyRN5gmU8HyCw9JACfqoCx66r4ogR27QnJLawB7JqBUZugdXRVQHMs9YaVd651VGZdt82xFgu",
  "key10": "5LhGLhks4W2n5eBhSAeGnk74g2TdswARfSpBDiDUQVCBEtAqu2wwT4yko377u14K6c2QWFhodMPwGg4gg5krSMQw",
  "key11": "395Q8GhbdDNFuKKscDsekuTmQjdYUJ8hKX9WB8oVgrFxD25VxSpszvezUMywRM46QQbgJMqhw4QR9iZjXPndxLPv",
  "key12": "4mhQqbxNFh6wfgzj4cseVCd1ySoRAQjBX347L5oq9FV4PtZkMi12JPifxbV8e5RXqcTPFsRySNVCK8ys6CUxsvLs",
  "key13": "2cwqA6QuaysQkyqodPxPdP9sa7SNv13tKAMTT8fpKHcBUhnNgKiUi4jhLGzykYre5G7ssWdCW2iEgRr7ct3Lhk4r",
  "key14": "2Pik67U8q4QY8PR7chHWaKTo2W4sgLxkd51p7Wxi2m5BjyMQy4Db2rr3CsigmfWsA1GYtB7r9hYuWqaMgJF9tj1Z",
  "key15": "REbzqgVWEHMFPsm2ssk58RaYRfM8ewEQrGeWSkZtbj6Ts3o7UhggfBzSYYk766iyMg5Z25CBmwdPQhau18SfkaF",
  "key16": "4KBHFrpkUc14QbJz6DZSXASV2c4nTps5jT91gKoofHvULGRebWo89ih9evWHZrfky6pygHvXyBJVCReBnBEjLN99",
  "key17": "4zLpTfb1QhWyTHF1RML24BHnBDc6yQZgetL4vDAz8cuu6uJBrakVuvTfuC9wPFUiRehFjtqGdeznCNxtKKCWobxG",
  "key18": "6nvb4i1rowSgjggB3X4KAKssmi3hfWMCC9VXUD87CADvtEgRy4tgo98FdqenrR1MoideyPW5dtVGGNw2B2a7svc",
  "key19": "2y6GeVy3Fh4kYmrNWbA87Xbk7ZtqyA6KNAbHfm3BNw4HK6J2Tbbw7Rjps8AnYf1YjapwWL5iyD9PRwsetEpweUJ1",
  "key20": "46MqSGDC9fTYHoWSJozsPF1eodGstKGV68pukx9PmbsKZPuNJZWHKVfj5Ku1KUALoQVvKL26R1CPFEYQJ4DJPayU",
  "key21": "5D4smzhNEGxYpXX8nuA8QPBuBDYyaLmTkedkqRvqvN3not6L7oxdw33fgyeXmaqeUbVqDgvZiaJa7PiVd1LxksNq",
  "key22": "5nGA9PqTcLDGHF35DnEtDjuD8dQRw9qDcYKpzd9nMkHiLgn8N5VCcDNrZ6BGZoLGzC4atFFGg5RUFceVoo32bxeF",
  "key23": "cFp6miSEwKZE4rfPTAxeeN2J2GY2Eu61QtTFBpt9zQeQDM3Pd2frXVANTZbGZiM8naEy7WqSCRXZqnJL5gzGDv3",
  "key24": "iaRhRTxsgjGpRmUHzmrfng3Ty3Zgp4GK9GRtmN2V1WvvNJWkNx469NA99cBVZPKZeXS2W41rkf1Q5YgCKi3qU7G",
  "key25": "5A93uyLExAv39nMVkitYZHxt8oj3tB1Ahg2hcTDbK2vqMsTmiaNQknHNoAJJbeExfsAP8NhRfkRSoLnCok16aGF3",
  "key26": "2ua24qoioCSiDSHfbtsch2EMXBjFKBbaPq1YeSzWwNtq1gKNsS7ZssQnw94hMCgYrjhCNZZ4sM6b4VL7pNaK5DwC",
  "key27": "3uUU1C42ZZ7XimgvJvMkLiQV17JZrs2bmhwe2MJMLVmLHEA8YkXyUUhHgMbz1p8ofT3DFgJDyLjcXzuqsJYmUnDT",
  "key28": "5aTZhp8BP3c6moVi9q7vzMqd9k1LFnyVc25woJbFJkiu8Yce4Qpy1yG6FAcb9bGX46saaoGZehf8r9acjCXPYmFU",
  "key29": "4khwaeiyP1QmUhB9Cy6RccAomn9RsmWGSNSshYv9EkauUmvTZ251iGPanUBm8pVPZBoKU4EstgYWUjMaWEjY7iEA",
  "key30": "5cvNQbXfFW8vAETJL4aZpFXDUgX3f25hg3Lu63UeSgBGZJ5Ys14dnuFLEaMcPRuhJ7jVtDssupU1z3YACT1gmmA5",
  "key31": "26MBqoPBsbT9m7PQj6QteP7UkePzexvWP49QE7pKWN5to8TSCAubBvey1zMzA5ZHq3ieMsiZW7tMHcYNhsXGdP39",
  "key32": "4mR4GeurDHu9HaCxdfgzmHKMR6oJgLexxdTtTBkidZkQ4oCqjnwP9g9jysd8LMG7nwYVqjHEJ7soPtDsCYZdGced",
  "key33": "57kx9CEe4XTByTCnZfGsWra5wEr7A7E4iq2C9gfcWg6tiQC3gnbZFMgyiNV4YZEf47wPTvXTgBexrGUHuZh8h6yq",
  "key34": "5yFmZ3T7V8YhxkjMePqjFRfjLefksEFSxUqPMatxNs64JkV4srKbNtskNQsYBqLsvxac7rcKQZft1iPGhuRmFUL3",
  "key35": "4T1x3oioxL1XRStqYUhaBoqC8NNdz4ZFYjt9Ew5sWMYd6AjmdFSYTy4noA3Gm1MGGsi4MG2TtgVMBx7pkMAbAdpk",
  "key36": "VXW3iEpJpwSbeM1F7Nwu5bJMAWGNWMmhy78wnH61uPVLfTNuQMFYqYwy81cpmw7GdcLJvQZaNXoC12i1EkaWWEL",
  "key37": "3jPjTkDjQJaTHMbHT3PpieLPZ9hSaWDVhT39ZdvjPC1DM1DC5EZ9yRrcKZLmmmZahhUiKXah7WdAQ6oYrN2Ldpxs",
  "key38": "5WJTGtWuqWRjcjxgXQsg4Lkeeaekqoq4LbR613c6vQcaG8jf4bNLYBXEiyhxkePVuKfRjS6ce2GYSeWbA759nYpR",
  "key39": "5DPnQnZZ9DJtUpX3wj45xseDQE8usbAtFdeHzpek7we59adZMDgNPrxwbfjYc2uKJ65EEqFgcs1u47hoYpXhUE26",
  "key40": "3GZZEMv9ac3a3VcoZLZuz79WWRghCHAS1veEpgwAMhxNsFPgUoNt4ZvmxLL2aXGKxJZZCRjGP7YaQ6nfNh6Q55MU",
  "key41": "5sb57HViwGhbCTo8Z4FH4CXsqmJSmM5gWhtbBULqb5m8H8SsuUmbUUkxcSY13uMr7wML1cCFyKSaas85qQsroH5X",
  "key42": "eaHqsUQeyCnqhyz1suaPTNCxoJptoe8PqXH9ijx7SuyFBJqurita89psiEcuka1RL3F932hb4o8X8Rc1GdBLMYV",
  "key43": "5fdhRV5fGfa79N6Rg9BN5p4dzET8xB4sy5ScVBUpTW8FeuhBhi8nEDR8Zokv2tL1whCmjrPYfJLm1ePgPW3MZt2z",
  "key44": "4Gbh4sVej1H271YVrSTtNVpRR2igXJiwigrumJJpzo8XZcdW632jYKL8UNfyXeGMDodnFEKcnBxeKysMV5c2KAjM",
  "key45": "3uawjFnZDucVZstKRBpGNWDo7iqC5KBDZroNehyzAREqMLwbPR8cWghNM99UW7qsjSk4qnXwnzw35Revnqn4PPMq",
  "key46": "5YXaKtQktovthQoxHPpsSWw72mu5onWooggY8XKNj8A8HkoRaaNWFVbyU5ZiTp3dDjTf74AJhrjvncLWLMuQ3B5n",
  "key47": "49XeENPPT8Mw5mUUj96gzGoLtuN5p2ua6cJGtN92AxoR7yCqJYmNQVcrFGAfYxDjoGVFztZis38sNYpTULiE6jfG",
  "key48": "4Aktxg3SdMU7AUtteDuDtCqFyCnrnf8swrdLeDG4EeYTLDdEZgtvauTQ2vDhD1GsJDYdHVev2p1sHdiinMsnie1o",
  "key49": "3PcbBM8G1KByQmTWSktTXFkKwZybu1xrARbvo6gXtiP7VPHpwGHQN3apmut1v7KYqErT5Sg2wnqZZboBewnZ3BWn"
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
