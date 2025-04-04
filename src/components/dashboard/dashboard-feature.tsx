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
    "3XtKBEM1ohp6ARZUv6adrjeoiKLqxPQPmdkd7rM2Ud4FZQ3zdZXQLDVLAnbGWqJW3E9j97czPr4wfGfR7NKtTxiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q4FD3a2btJ4wGg6p5aCVS3tFreZiECDAAgteZnZq6ghCHeLw82zC3g4UqBoqFDwQJ1fnNDij2hN97iyS5EWy9Zx",
  "key1": "mvMPETQx2HMbBVYtik5Ty2rzoAadXpWMZYEHiwhKYKhNhLsoQApvmjkFbqJ6og55Ubcwqn8HpjfpWL7moCoEq7K",
  "key2": "4qKvvmy3oAVB7kUAoJsans8V82oLbrLNcLCRGgroKVA55VzXszGKAdqmZpTdqi1EQhbTRWbonzoXGuuGX4BwsKvS",
  "key3": "3BPcjsMC9EiHL33u4CpnLhaQCTF73SWuAqBqjq8YfhwLrqdouSPLi1mFmAKgJsLtQBpfS7ez3v6qfWYJWEBaaoTt",
  "key4": "XKj2owTSuTpAzhwGnQfn6A7ZZiudwGkFQxTYtS3tTpEucg2jnLhA7539LX3oMosjvTwidZv5vHq2PUUgk9sU98Y",
  "key5": "2rp1WQDsRjrgHD53ByfuTMwh3TqNWfgsrjjRNATCRGFymx9ChPS72W7io12fx2P6kQ8pGezJfuYW9UFYqhhRuPBR",
  "key6": "3mJBTqDfxi1Ya2LWA8wnKPzsBJPmw3QmxTMJNmjZjnRcHfcA7srixXqPEX6VwEgfSKmio4mmK5PEVNADLT1SpJPN",
  "key7": "3Z5uuYq6fhDYUXjCcudQRLdmeRgrzRchRDFWimMDU5JbFr4ALnhJx2rABH8PXgNerywBSqbuZZDFAA8bjWsKT4J8",
  "key8": "4z2n9vfxHRJMEgQxcnCCqXi4wfv4fBvNJda71E4dg5X49YYkFx5Y222mKeDxfLjsjKT9z6Ym45gKtqQTVyWcjczJ",
  "key9": "3vh62LEPGu2g4hBYy2LwB3AjgxC8Ey1oD3XmcV2hdrd3Z2EoNQiV2Sg1uAAVpo7RvAy8LpVRbbdA5U3wmAyhZkUD",
  "key10": "42J9TqK7VLjJ151ZinAgmJzPbz48e4tu4QUQKxGw4MHEsvueU2EUJ9xAbnqT2A4GLTpjGuQzJcUkj6gzbfDcYP5C",
  "key11": "2iiTh6Ya8C3GBXsEDR3imBWBY5LJxrfwfcSb1qnfAEE8mKaVNnvDb4kXPrJX8sKJHrhfnJdt7DCDVtJmnVmmuBhZ",
  "key12": "38Eu4V4G9vbzvYRCcKy9pWuwi99qSSkXLM9SLufWA5TsQYNH94rGJMhonNeMThRjxoVocAfvzK8QZ6kbDUiYwuK2",
  "key13": "3nRParYcJce6J92F9b9CANU2UdYsVNEnz4D1g8AgneBk5oDNz5MWXKTPJR3Ut2mxHGxLMxtkJinA5qqSMDgVimo5",
  "key14": "62mqM4gDEbPTk1MfFKKhRoxw2S7yXZCS2ngf6izrLGscZjuiuKYi6Xtg6CeHzni7qRESPzgmeMKP22o6bYL4CKKX",
  "key15": "2PX1zYDeDrfVgnXDPXw64uDqZtdeUyXBMegQQC6aCA9njcqUPvp95iTFmt3WsbcZeL4RSkr57nEBNHsmA1jsC6D4",
  "key16": "4wZWLgCvykgJZ3Kti2qHP6QZCqmh7RRVKTAYpJaahd7qiwh2Er2NGvDFnKuJ9afH9FvC8x5v9iqJjCnBjYFMwKZr",
  "key17": "SDpVd3kJ1xkDFf6RyswQ3B7sfLwbiPVDRJrwL6jteyFGBFp4ASqioqt1thhEn22MXyP2s8vaYhduZ8Nk325SYDL",
  "key18": "2xZXtHRsE3vNu1mZ7E4K5YRtz6oPgb3J9fbrFGtsNJxqLAfwv9kdC9Jk82rt6GrFuwfwJyughT9ZXrPuK2Nb6y5L",
  "key19": "67AprjY3i5nT8V13ipgtTEzPnYKtenwFRm7hTAJYZ6fE2zgfyhbr2vSS2q4EQPpTWMyBPBtogPoYi4oH32E9GL5y",
  "key20": "3yszKZsC6CiH2pDA9am8Jz3CVCR1UHRzwhiWqYRqkw7HuWkyatK54LjzuDDESPFuTSvBVqNfo14ASvjyv6Nan926",
  "key21": "4wfz94XDpeNgDTNgkZbXrzz3QbkavsXHbiFVnVy1jKc1WdeduyKrmHUFcN8k4dXzioya6tAZTJFCDFkmkV3mpLaP",
  "key22": "3EvQ4cxmyhmHE1pFYnuhqjuuvKzZyuonuhLcaNaAMyxD1KRqKcYHGKT52dsKzoDKW5nEtQku4Ey5NUcNWENdh37G",
  "key23": "P4eDQJJw9bEEW9sqr9vC5WmyWYKz6HrHjfpm796dBsHdXiAG8byaVdJPSxk2pRbyQjoFhUnUw3Nv7JEdFQ65QRd",
  "key24": "2c8sgoSmRYGmsRyx7Qmyb7XUKXhmwFddvwcK6DowTusPwhG7udkw31cergqdWGgPFXbm7z5mfoahFHfSi2TyiQjG",
  "key25": "5C4BhXW3q9scDjM8EtAeWM5CLvwLp6QmREN459TwEXZx5waZH7X922C1vPDSFbgTcaFpm3wzq7dBF2Mg6u1M1Ha",
  "key26": "3yzG4jyZgUv7esHfXdhLQ2UxYfnEqFHxexmuDVuHm3n1nrukVdYocY9gjT98UZShEagVmath3kh8Lz8av6n5hE1i",
  "key27": "2JSG32FcHmPkz4HQv5Le9Yyjtqv3EwNPtwb8R9w9r4dX6QAFUNzSAAkj7FuBZDCBVtoGbinzg6LZf8fBr1L2sPmm",
  "key28": "311QjpFdg44BzgR3VXeLSwcMyagEqGZz88nwniZX4fhB5iEe8NPZDQ9MjmQCzNiHnQxwwU8zHovo5a6PoUqMSazP",
  "key29": "2Ru7LvjXHqUEQHwkvV7Lb2ScEUTRNTqBH7NnLzQQTrkopNNtaV8bVBedAAKAFtEnf6nKaoWtPid2iq6jCHRkpWj3",
  "key30": "jTmMMuiTyh4PkvhQDpQheu4tTb5tZaKRW7FhMNWyiYfBJCUYVi3dDA4t9pmpyTq4yAR19FsZZB4hz1g9dW64oDu",
  "key31": "5ErW8tMubVD3oz9vtfBHHu5KR2Zg22UZ1ALbNvuaxtyFG4LQG7wFy1RMNZeS4p6FkGsvXkHsDkY83iBQqHN9k9Cs",
  "key32": "36R5kmGn17mZU4EfYLaCSD4SVXA4MDVqbSjrdfxRJnEFF7nwFTVSVTiyBrx1vLAbuxKybxiwH2fwdUDENJyk5Azg",
  "key33": "zhzHcWWPDFqAqG5kYSUPXhHCjWBWX7f4WYp4tKekJLvwBbvVfJxWufbZQcMoZm6prCaxr6waaUV4QuH1pyc4pFL",
  "key34": "2anvUpvKS4RhCHqCSCqExB2otLM36Qrqor4xQvyF87upct1knGZ91nYYg7Raj6ppd6cJDddE6N5kvG6ndCD4rnkM",
  "key35": "5dA47RFCqCLwoRLrWaUBAxpuJaiHHQfPE6nGmBSABPKUhNvf5SZBTijmcX9HPXoYXfPwKr4UvuiT4RJdm7BXkdn9",
  "key36": "3YRTAmMyhgxpM9Pa2KYHFaKdxwFMBw3hfvBN37gVubmZF7HKwDMPewzkBZahR8YXqM82k6cm4pv2a1iYSSY9pseM",
  "key37": "4xYveqkVMi1j849CxqmALWgfAZxCqoKDkHudpxAqTuw4ZjZUfjzBBugRV6bvE343Q8vpCrrQNb6Gft58cdinXnww",
  "key38": "ejm1zTDaHYAjPMd9dJ1WPuna4NeBQZ94VyA2fJ81UxRtXW1KRCDGrRK5yyWLFrQQ9NDzaMDTxRxo8nB9D7y5EdR",
  "key39": "4dRxDQC3is1G9vjvHH7hhwVY2JGhgU9rgd9EyegBGct41Sx5Eg3KY6W3NLneBVTHsiFeY4inDgx1QqVdB2T5UtVj",
  "key40": "2RRu68ed4CsRisgDPvpEVooy3467EFRbaJgzWNfFurFLp7dLvxNFZJEjSdi9UiQJiVhsbUaWMTnVZ3h5kJbdSecj",
  "key41": "5haJJpuXrhYHTvcTGprsF9qx3MVencJoTESHqJnAGkyesF6NZM1m934EMxokC16afWVGNaKupYG5B3KLoCJMoamC",
  "key42": "3Z5NeoVv9EaNmHVgLz14jA1fMbp45ziwFoXHqrq2BsvsS7qSC7pBWf7MB9D4DYbr7NAmGQzkCTBLqf24WJp3VR7z",
  "key43": "66NWVmEkrUu92FNkXjQSgyqg4hGAFiqjQ83Q2XtfdzRLhHUXHF9ywNRef3jeJ6yBdjtdkBo9i1yVwUiFtpoYT8W8",
  "key44": "3V4X2gR9xZoPUiLQvctpGDXTMjXFuho6BdBv24Qa14kPfpGsRDrLBLrBghCjcwxwJ25dtrhsULaeZNB8briJgm4h",
  "key45": "2gZUtPAQon2C55DwRjUadtxmfUKZwWLHL1fyLHwgBWhM2CNmgRJiHNtYBpEaznreBAnCXeM4G1tto9BRCSxfPfmE",
  "key46": "ptAc44UR2P3JkF3eQXwLuzCqegh36uDib8MG98kLfut6omaHqS2sXjJgTWJz3WcKa6Vfhjgj4sNbjWk1Mg1u7zv",
  "key47": "uiQUBhdAT7Z9Sx46GY9uVmHBVWc2vGrAK1GCaprfAu3m5RHWktdYwe6yN3xtHSkpFdTgnjsPHxRzTdBtHmN4ZHh",
  "key48": "3SA39L8hxh44bDDdaZJc1jFTtWv7RhfMRrCNVyfR1HQNq2MdvXHdakeSdDRYmTdRv1xYjvSZkLUoSjBjngL6dwTw",
  "key49": "4v1RmZjMSH3TMaz1aTpiRhffJ3cPN3w4WgpyxcSsson2WiDWMjxuix5KaGGmhjH3bi7D4JX8VX8EZ8Q64kWt9Lqo"
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
