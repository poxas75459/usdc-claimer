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
    "4SGdgkFHNkSaxTPV2VEA41dKrPokmxQCQX1Ai4ytG8rREZQt8Ch5AcBFnBiVm83ae7h6LX1Hdihfz99CcoHbCLZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sBUrQgqhyApM8UCTNuTq7nE2FyB1BxXREG9RXcr5T7yiWmk9Jbbn447geCghZihFLgYJLUkb6cg4her3vdg6Rw1",
  "key1": "2DE26hDoyNzan1kYTWyAXvM6zbvS4vDN97U6qRJBgAWMNo86awgvH1nRVfqPpSYUy8RjQ5HXsozu2RYwc8JvxXX9",
  "key2": "2WhqpVkH6TRzqZrQDbp1RRaGff4Wh7mSkEPRvJhvzTdZtZSiPJNfL1QG8zfcjnzEUMPEW6P5g18tJ9hyFbNoVATK",
  "key3": "5tfQHcWNanGaZu2fVYzt5ybYMk4kp75G98b8ficTVafic4c35yzf9Hr2Fe6A885KRUJmYf3FjeDtihJTEeXynX56",
  "key4": "2vMupHyR5W7MJRYeMb4QyGZXxtheGGEpa6ySVReMcxDHyw1CTLa71EL1H7HyhMgM1iuQKc3UH8jPvSAkU7CgFzfv",
  "key5": "4Xh8CbgZnbDt4itNDe7o1GnThEpYRH5ukywt9HeotDdmonLvyhNT7JdnnxJrR3zNe2pzNsCrxQ729XLkhUjMNciv",
  "key6": "37PbiYYAvdBhizdYPdBfMsPCaf15hCkktUPqk8p4tSmTHwmY4nWgEPyZRTgHxfgpFm2B8tX73Bym1koPB6PTtcoB",
  "key7": "3JL77kZ2TJN9cVY7a6T2LSKKM5nfMXGoLSwnfW3W5v26sj3CYgBkoAdVj4WSPYyVmYqtpqG1a7jxsKxNyW63jWcw",
  "key8": "2gRmvstktwPqEQQnVsjxBmUQL3vWqXW4eNuWTqiCmUL1ZFnSFQcWDKTtVUvqsYFcSvXvqkAZPz5JQ12MuqwKZTic",
  "key9": "5Gx38RvkEAbUvkRM78xx6E3ncS1AEdQq8vHAFbFRJDfAhHWe7dgK9q9r2v496YzRxrn3iJGbJjBcaDXedggNKBd",
  "key10": "5EB8kJR5dCG36E2gqo8JYYRPzSxKL9rkFG24GtYaFn7GEsoyMwRwYFcSBXJawY4hERML6aw57EMz4WrxdNSWRKu5",
  "key11": "5CBmCFMq8sx2b7Rifz71GwBFcypbgowq1jqdrAZDXPGz7XaEFRCj1KBxf5p98ZDmY7cGgCLWqJZ29AspnrBPZ5Ks",
  "key12": "29fhyerU2FeRTphijZAYFLtNghd5H9H8GdqQFszUvPDrDngV5qdrf1yzURws4ABxxWEDTUmsXWR5MHFzHCZN2r1B",
  "key13": "4ebh9rNoe99ACHwJQZ2SisvTvgvVwDSbWfpFCykpXv8ekoKcVvTEEGcnUYF8Z1NNDQbHiWFQCFFzN5XM5GZGJHve",
  "key14": "4ifWsPbssVrXUqhmum9KaQmztstxpXPTDGJJHHUcQr4saPUJC1AWhUYatEZ1Pk7kNFmNJn7Z6J1b3w7nCboR2WTU",
  "key15": "2VXim9DRAeVKmk8v4249cNs3p8AteymRSKtojLErNvmymz3FzXGyzNTuMLMvhmPA5ZcobXELZQJiASwvPWi7SuN3",
  "key16": "4deUwGhHimC9gcK5vnVF5zpoZgdFj4683uWpE8KK6va1KmACoDxKa2DtfYX9KqKz6t2faRkjrJA5c8KQvwebCe2j",
  "key17": "4EYNWsU56UhPbFAXqia8HUx4w1NxVpkKuBRGSHRLmtYCG218RCQvbdTy9A4WVrWyDRLnpA9sXist6YzinroNCSk1",
  "key18": "5Hp9nx4W6R6wP4yX1UYLaXYZnLyBq3NSSi9qhxkdbVrKa3KoMdxrPwxPhALf8AsUkXKb4sTeqnJpU5ff15eFMUcV",
  "key19": "3dPkqhjBv6Uz1zeD9XLjisBGGfPpM36nF97bttnExPBFtXshMdriropPbBpdEpUAU1uJvrWJK3B8x2DX6duQuJdm",
  "key20": "2LsbBbBJEKkbuerGdmNreSb4YnACQtz81B98ZQF64SB5CnZsDrpB2BZ3SNBEwA65hjd8v76VdwwqZ9X3yWNqenS9",
  "key21": "3DojCT4wPh2bBe5ircdQj6cBMRjcNAxhL2rfo5vpvp7NnKByuGa5zzY2GxwNSe6kp59KtZRrGppj65crptSMqaSq",
  "key22": "4LGDViqJbvZrzETASfRyojkz3Fo4VGrXP8kZaXzrt1w182rZAZRf1UDkeWkpZGq3aZZysbxMiZkKSHnZGWD6URcf",
  "key23": "2UPHCRz42zxVsxCC6fkG7EGVxPvPnfWFYuzpN1LgRUmvs9VaUmMUgZnUhmBNPyPaJ8MxMSYftCf2iuKFZEMYCN76",
  "key24": "5yVxHPEwZ71FUVj8EkiUYw4o2TSpW5b2YLvZTyvZEVCy9JSeTctNKYfeqAWsaKRYF3Pe78gCN2gAYwCbAQMYr17Q",
  "key25": "RSQjgfZrXkihziUFvhovkuHDydavLkXryEPuk5SUMvqCmf4sSn6BvFHY9VPZfeFBE2FWgAEfykizzRmXVNkpQt5",
  "key26": "31YNW4uyGHSgcmVfdrWSuXKBXmEDuYC5RLD4ZFDZi5Lg7vWJzvymyqhQBuN989hCBdXzhKDPEVDV82YARbrorMQZ"
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
