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
    "oTUNJh24bqQRRs6c6mZogvqJWfmwuuKBsVJcTKcWz49Uz7EveigWQXXkae3XebXbUq4M5zQaDE7GFSoUsc2o9WW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b4ED6cbE4MWTnV4qddSNj54w5Hr9JUQ1T9drLYyivSMFoQW1Vopv1YoBmWiGUq3XBvuWPcHphjNnTqNNhsEKrBh",
  "key1": "49yptiRabTWZX73qjoVqgzPNdAR8mKLikPeypXuvm2YWFsf6RhiyqwMbBPkcvkiYTNeqQep99rP8AnxWDduUMg4E",
  "key2": "2wvy4fwV6cVwQYhHmhTkdmbZ7644bdV8ZpEZ4iiWHHXzVgb3CdyzxC7Zoi9vSwVkBvW1CM3MqGnnzc5sYaS9PLYL",
  "key3": "2pk4WKxExk8A3mAS1EPuYfF8guEYnFGigrqhnG3dEXD47sngFgvuwDcUX6DPtmiBFSp1yVQSw4vxMAtrHe3C8k6A",
  "key4": "4eMeTiLCQn7nENgtU2rGubtxqpp99whYCJPRihB1aet9UModWo2MvdafsEEXbF34E7xhNP22m4GkmdRvmGggWxo",
  "key5": "2W3Pt6rha4T3haXAEXA1EZiK21ADyrTRmodJiqfkhxA8ncFVSaNFMGwKHio54o5vxhevJJXpyibD4QKrAoipmPLK",
  "key6": "4WN6bTzpoPw9JmP2qaQ2CdSurZUaCntQXMFfqapbneCLU1raUjPFesgT6HhfDcand6WSdEut7hZSBTfM9jEufSqH",
  "key7": "2cfgrx58RQesPmdJzHdsxu1AwcRdyBmaAeVeSUeZ6qudRzWWpQCDk187kEU8jgFRb19qmAfVdLBBeuNnaNsJQzY",
  "key8": "4DuB9ULWQs4RhMjf7MmVVezAq7Hfxb7depbyoBqJQyf8PTLrmgEqKjzN7B1JW5Q4LH6QHFPktCMkifpYt6X4VYLy",
  "key9": "4LoMtEzho1dSqwTEniJrEECCm2wZAkPV7B78XYHMJaotyMXvnuuoFd5D3SXaidRgfUqWHF2miumW6WKgccvNNHvF",
  "key10": "Nsa4Mey2RL41c3ZbeJJYdU2irhszbhbGAsYbhYpVdCTdPcGp7U5ShJM8WMPY87rprKrGrzS4i16FfTvrALkM8f8",
  "key11": "4Nxv3vv4AEgG62R7njghpPtPeV3irK5am8WVKS6JF8YszDY3uvZYPe5vc35ubUjQ8oPRRR7ef64KtWvdf2rvQ3bX",
  "key12": "3po9mU5X88A9X22BarmRA6wWVL2qvjk3bnYw48UhtYnfEsxuZMrQEZczR3dYDoPnGnc64rR9TyoAiRsajpb6Evg",
  "key13": "483wh2LbnW5fboTi6yF6h72rFxt5uBjo3fKU565pj2aUXtY5BTvyFYZMkKm9UXmshDEaNjZzo4JLSydXBndcTMXL",
  "key14": "2PzGUMCM9kTCyCUAxMN4UVDEqn2u9AwEjZ4WLUaA7DVfoofxcnfuqpGUsotknSg6cB2r8BV7p4TLn3ozfZPeznrX",
  "key15": "vL3zucvn5hBxKZ56KgMLt8BPmtmxFZnjjzZJrxYrgzCaei1P8s2bkTx2PuoSbkTdJJvJLVUrHXSHYnvQHCcJJtE",
  "key16": "5kR2uHoMkztLXXcf17qE2oFqTGxW9XQRUtom29E6AwKnHf9p787YQrh1TQe39mwrcFbkmZTCPVCBhtPX1GnFDNUB",
  "key17": "4xCYHF7cDRuLzDKjPf63WnzzJrA8LFs2dhLpvbd7VfoC7jp1vgqfHt965oPymZPcP1yuvyFAPBquceBDZAXaPBrr",
  "key18": "2A9og6xzz6XSAhNgYFVoBYqJfGM9ED7tqrkHaeCWEH5NnQ5SdFPSGriFkxLmDzrnSCbFNbvoYujThkqJxq6pfpVm",
  "key19": "5EStDaKB7Z7xKkUF7m2bGuhjyEzoAjLpNAB9EFa8Rs4eFDQo9QungAj4K1DWcRCA8mdCZizjUHJZfuaHQPNpNDwf",
  "key20": "5HvwAxEL4W3fr49wBt2xYHr58WFUQtorZGBk7xtF4yfyqFAvVbdMkHXMvYCvSmXZMQnnmq7QWmwV8uNhobidnCJi",
  "key21": "63Kb4BWDt3uKzcenFBjrmEoXkmN45iVfdohWQWKy2tV3T8rzcrKaqpaEVyGZTKMbdFKLsj5Fp6VzFQ1W7MEWEoHB",
  "key22": "39S7e3HkVJKkWZLVEFZjhjJicHWsB8CqASaJWCgPKoMA6zXei4YmhZSdgrWCgDbTYeBBk1U45kcj3UawKEK76zyU",
  "key23": "411iCGJEUH8bf1JUNtZXeKTjGY6uuZzchKRLiDjz8jdQ2QYMQfAPC6XCrJqRzDdZ9xjaJyMS92pgcYmQ8anYTjxw",
  "key24": "UDCJ3eFDwdYJBc3okuq2mtdCatMv7tsdrrGcSok5rirR69V3UQbnNvAtFGCwXadNJJY5c1N5jzGUq7zqTgcaLBf",
  "key25": "3ko3eBT1a6DwZabc7iU8HwVqksmxUCabuZsBGotjnaG2PPyGfgxXSmGX2YLgCLMj2PpQizu81V2nXjYvksUgkY3o",
  "key26": "5NTipLZzdwdm5D2CCkMcxdD3id8zChWLh23tBbfw9TeN3GjZBpiEBGvdkhAVj5mb7QNoemEcAiv54y4crJAw9GpN",
  "key27": "5daZgaiqvLpPfJrDbzcj9BxLymktMzt16VuPPTGiGmHAudanES91NNnpjqYUXaLyvvgShsRvUiuafJ7WhU3ibhfF"
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
