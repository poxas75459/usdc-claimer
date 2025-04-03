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
    "3az8UU5FD5DokRp93fZoakPspRGWdsC28eTgxQ7g2Vy4fLMhc1TcVsyeSDZmrAMr9j4epGQcKbLCYWhHcAEzLvwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AiNrNsLkGcCyteP4VkwDK6ktXN4ujKbWwy4hCECs4oipYvotvMV5ChJtWWosAYSjK59mUVNoXKJ5mQ61JSMnWEV",
  "key1": "5EuN7oE2p17SVANTp4YD1dsTzPaXoE4URLpqib42DXnN2eiFXU2s13ftqqDnHRRpf8wcHSG2bnk97kfieoyRs5SX",
  "key2": "CAbX5ZMNiWLfwWrqbRJWYmPftTGACahdejArdmBCxVjV1SuXVUsia2aQ1ZPxCSe962Ah8GswULMRSGJjSnw3npD",
  "key3": "5NdYsmLwywMAotL9G4N3Eq91UQEZ8LBRH77VAP47B42pfwgG3yWQP9bBJr16BsTcj2VHc3LU7BybRo1TwR4TKoXD",
  "key4": "5SYi8qRphW4E9R5nwXupeFrzP4kkhEgTPyF4b5U2hqnRPsFSeafK6oCrgv3cst1nrxi5PbUnUJSq6hrnDnTbpnGc",
  "key5": "36mThh9oxowujgUCS38gnAvt9TnM82h4hGA6R9Q5XdR2LmaoVLiKuucBTFhKw3tRSD9LYaPpiZVtxrFfZxfBoryX",
  "key6": "5QiJxq5HSaXqQjRpoLhqKcucYaaQcWcJT2Rcvy7d9gEdttiomP19gc8y9D9WU9Y7BmGHxhPZKRJbVPfcGNtLP7Lt",
  "key7": "2aCJDeGHVrqxeFpH9F16ucbNg9uq9Z91V99RcLinAxsjYfFfHy3bHognjeebMu1ARaiCo4k74w4CtDX5ZEDEM1Lk",
  "key8": "23x2dWqa628usifPwssNbZBBAaj29YPTUUoTMzuJUPMjetRz1FA9ntsepd8iDZ53gfu4H2t2BJvEVj1DsVNjtEeg",
  "key9": "5PA7mBY4HmPoPFhQ7Si9hqg3q6ug7EkhehE4KVwVs67YCENsPbi4xo7bR4T11sjoLCR9FxoHyeGDQMoxnxF3HEmR",
  "key10": "3YDZXMh2wQHviQaTBXm2Vz8JUBjdtvi4jKDnem4r6J276SgnHuEcPygfAa7RTU7XVMN7XArRmJwnccxVMsCfgXeu",
  "key11": "u2R3o4PCWzgTb7LNCCaZbrkXEECAuU5FeE24BnH1NarVnRETY36Nu5FSD4mqthMn3Wr9LuB8H6PJPPYbhjgteE9",
  "key12": "5jyjQCsUXgEtafvWPw7iVd6yUN8f6tGD9kXYmnfR8AxW6LxvLBDzFC3SBmupskNTX5QmuwYJ65VjyQH4XdwLpZd9",
  "key13": "fPoqcY55ALmPyWuZCQpFVCXG5d5UAKRfvqLLfH1zqVPJfXS1NrM5qM9VtM8thPamWPmp6M666opYbBYS4BxguS9",
  "key14": "2q6fGrcNyxFo1vDNV4RQsk7ukdoQmLHDAHX6QZpq5P8WipWX2eyvqarmJYRLBH8dAHHGivsZicFhrTqwabQVkeBp",
  "key15": "44mtbWSF3FPbdTuBhW12R3A7UhNG2FtHoxbuHDwrjpwxunjg9q6NtEPjzKvngLfs2C5vS7BmMEPXTvQSuYBc8dHk",
  "key16": "3PpjC1GJRVc3cZkLr2KdLSeNtFgwZVHJFJ6d1RTk731Bu12CaGiNHmcCriykpgtAzrSvodrBaTXoVUnMgrETLjzG",
  "key17": "4z8wHFnAUhWMwB9uSwa2hK1kNSJ12YEeqwkQJ9zokf371VWMkxUQJ7RRAAWouhKTctBmdP9VVkeGhJC31t2y2yVA",
  "key18": "5sqyn1TAkAcU9iHuCsLAdexpDUWXr375p2xYXN4minw85SmnE4s7rvthRNtkD2BKEXmB92gXR7bWdbbshUSLqW3W",
  "key19": "3g7a1nkgkSEGf7dMj23DX8HP97bBDXAm2L5S5DCZhJyxxsBZEsDKoLtkXQzGKfwT5PT2JyzzA4qwD1uXA4VV78BW",
  "key20": "5JtPcv3tAhTNYdvpH7S6E7nDE8TgrNAsTx2DqpiCNKCEmJPxSakhYT5x6nKjX6R3jxmCChLtdeS3SsJWmxJ45A9m",
  "key21": "3zRrXqYNfKYBCDQPvegzhppqDu7mQu9oYnUYK9VWeDLtHZmiKudoScoZiUVXZN24Dhd5d7J7kZaAYTmT4qRE88To",
  "key22": "2Mc8yecoXeEFSxQBWfQhfE8b7EjREXnrdwEMmRvFPv1HjCFHMwfBQYecsyYnmgaVkPpL28z6r8nPmP5JNUkPaMYK",
  "key23": "3wojPUwZiTVEva4eZ9Ccn9jF8AmYHCsQXKrnkAdNMy5pA8bLphyrm1RymamCJJJF7EvAN2WbyXLSAPmndukm96pm",
  "key24": "4WfFeYrVPCKDLopdTJC8gtRswqWidAtLc29yftdhPMqzPSjrh56cqar3mtYrMr3DXoadfG7wKyEnadA1P9tXTP3Q",
  "key25": "5ptxUe7c4SPMWhQC7urbRjaMtNVQuEpn7sL75HcScBavGVr8NJhFyvmenwPKwjsSxB2LuZ2v24gMXo4buVv4ARUT",
  "key26": "BmCZ1cSpHBWVgqX4xVbYv5ySaTF6pVnJV2n3NKenjDUtnabdrBq6yceXK2H58NM6xjyf9kd19tXA2JZAPcxriMX",
  "key27": "3amg2CUDpKBpVk7nBJHuXtV2hVKVLfvTrigzJZuWzVLDjMDx7HnYVRxyJEeU1rFoYeVjiLVkSCBtviqeqwP7eTsz",
  "key28": "5ffaeV7ohTaeMvzTF62EzBm5KXZDh5Lm9sTWc35bF3uTaW7xWbp3ac92GuKV8tJH5GM73E3K7iEv3RhGkcKBduVF",
  "key29": "4Yz2CTc9h3aa8saWMTbmdE5C5G9D79VWAk6drApo16JxXGjBnZRRrskxpkJU3zb1ZkvGeXZagRaBHY7oBbAztndb",
  "key30": "2VpNSsC8aPxuf16mqbuGDed3Ef4CiUJkxWmcex2kEjxdy81LQi8NkMw9M2tUQmesb5Z6Lkd7yVeggbtTbhTxVS1V",
  "key31": "4TzVaG3du9XoAZ3PWATrZMSf3VSJybQoWtQEuGLgFGTLJapM2jzPDxsrasmr1B2HhV18hTwCZDRX1BwQZGYu7AKT",
  "key32": "3DMmztY52KsGdBiEn2ZP55vVnkJh2GRPaauSc2Pj7FK1RHbijVWogbUdPXLLfzQ61723S4LyZKy4ogEGhA1NKiJr",
  "key33": "5xdLQcg3rtX2tyav3zJdmshdFhEQennsSh94ReLBQD5PdQUqdextXr4nHxLwKLYxf5sY31TAZ5GuxGVDzWmFKTuF",
  "key34": "4pNdvhToWWdjxSpgEbZfxww6TzeNS4Kw9oeVZWayb4W64ZAyKjU1Wftx7xVqnyV5eVrondZfbjkm56ebqxaQ47VN",
  "key35": "3naRiq9yj8KAfsxwR1vi7JznaLMikw3Bdtdm5KrJYomkNvGP33dpo1m1s4qYwcicjFvCx6iF3JGYXbrqHaL3t2R",
  "key36": "5H4GwucJXzjqUnEhVNrVmSKqe11ZVskErwMKGMu7t6JAKqyFY5u57zQukmbgKKWCxVMdgDCUqd397dgxSypYnDRh",
  "key37": "3LJZdfUR8wnHv78UK2FHD8RheCCsDTit4E7WAYvV6AupSsc8zT2GtdRWgZWqQpLi2PeXfVERG7awW2WpsKWyNaG7",
  "key38": "5oP1gUGo5S1hcezCRR4s6RNxtR5pC7MX8qeFTCyFx7VUTTXuVuyww1U2T95VCbnriN7UtNtaoaKYSDnHsH8vZLPA",
  "key39": "4xwxt4JG8mApfesfru6QrD68QCyNvN9cuDa2ewcfmLKkriRqMiogRFArAg3ppk9ktAmUHNPEaHE5Ax8AvytKnMKw",
  "key40": "2hVMEmfyMZWBh1VhVnETNaQ8Fy63xYrSD5M3AASvsuJUy6mePDy1yruhSHc7pR7ic997rUZCvQjRFLku7tgVKG2k",
  "key41": "4ckL6oXtgYzpn6M87joAeMwXEA22UPerFed4511ssAsdKVk3vG4VM97E5gK9Lj7m5rEfPbNziXLW6aNqZQqfetG6",
  "key42": "5sm13WDhJdeSsf1BvjxNQ2FgvBiQiSoMpiaW32VF7eikLgh6QWQvjSDJErN9mdXt9Ly5sofu4tp1KGmmDnSr1TP6",
  "key43": "4c9BzRyDQDvBHnsVioUqBZmFcpx56u13FDkmzQHHqXdcXS59LrMLEgv7RVZDNk1MyJpq5iKkKwbbG4svN5amn5WP",
  "key44": "4iyuFx3w3kbj2w2uy49ScQFux6KzsM5FWioNmdTggtveW1D4XF5n3Xdg1b4tAEpVkCmf9MBRYJMi5BLthmPzhEiz",
  "key45": "5GXppDwffaXozHLzWZNRNaeKLaM2nbkPUccNE5qxs1znM6c1P2dofGcmmango6CGin7rUG1YhaJyBxLw99ETtteg",
  "key46": "34bve6gzaiTRHi66QXVT56owo1RHwTAFEBj1hDJdHj36RV4Svn6cyPZijPFpYx7zzHsAYzYf7YfjkYH4CaCY6KfQ"
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
