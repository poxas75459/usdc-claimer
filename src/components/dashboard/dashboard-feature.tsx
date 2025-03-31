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
    "5mt8xJ7pqbHncaC29sPxt6S7VHVyCLrvF5KJcDYtxQHb3pr695KpahPNUoH1tTBurmgvGKk4cdUxWWrX54CiyXXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xHWipqMpHhYyz6sMDZ6yUj4JHCWPic345WoYqLiLTY4SvjMafdWmFpHnCCRi5H1mo5NBQftYsrJLRR1nWDMTJqx",
  "key1": "eXysc5prybHuH7cjJPryuWc3mgD763d5izwkwoCn1gXEosPkkGaaR7WJ7bhnCcmPSfCArJ2S4yfSpvcwDC4HF2k",
  "key2": "4BDpxvoCs3BjynRurNsn3eRnmu4GsisCJqTfSx12v9iGgFVB5AH7C2dB1mVLevFSmrzmEYKf5g4JFrJvYLLTEw2R",
  "key3": "5u3hQPRBgdMFwTP2CjiMHnRkabZuvouVK6W4w8yQJoWV1bYMjzpg5biRfPu9XbKSNwXYMPNgP3YeZuimAbynvr1Y",
  "key4": "yRrxUj4zRe8NBx3Misf27S6z45RPuLbndzoWsatWymhTiByAFT1jmE6aTWnvbrLjxNaRrAEt1YvoWFCxF3jW6St",
  "key5": "4atYtohPN9bVqPTTy4bczWgyGNYejoiURAWse3ndjcdgTi43FZYYxoaX9yDgN4KnDCh55rKSMJgnaMDTXkgbySTd",
  "key6": "2rzS1QvgepdRxppKK7cffteiCXgDgYNYmjthsgq3sCErhKEYSQ4XmDb1Yg9EMCqVNaBHwMKh5R4jiEqPLtrf8f4w",
  "key7": "56x7dTuCG9E741ffrYjUjzEuzWUandUiNxdrWCYwuGipDmyGmWQyhFMb8goCcfLPYC5S1w5zwEx2y6rRRdoYr6Jy",
  "key8": "4mKD2FvbDeN3JgDUGNmr5TxH89unHxPn3rini9EdFYDRUQdsFe9cofkT9Ex1pVrMdoJctt9W6BCovGiNXt535x5A",
  "key9": "tp3Rwb267Yo1nUY8hDToKi1rbwPcA1HMkZpqPZ72HAFZeqdq6CKMmKKedijyzH3gQTbmsJZtkyP8cuXVxwqbhuA",
  "key10": "tv2D28e8V7f1BPdj9NLCNZLiRZHbvhtoQgNxjLwEW4EMREnpF13EiaKhb64adqwYAcg7z3douLYPwXBF3SWBAU6",
  "key11": "5muqL3cVDaqnQnmKPWDTHnewDT1N2wWv8qMSNiUrqCaeEa6GZsDo7RcniUj63yGN1QwSpZ3DLB8DFMWAUnGSptjp",
  "key12": "3naiWQ5XKWzZT3iCBeZxh73q51mYPXmJAW8PKgfd12DJwcGJBSgffErL5ApAwsAV5P1MB9AadfkRL5J8YV91NBVW",
  "key13": "4PRdv2r95SgRSQ2uh9GEwYwMHLErtciS2QMVyFrsMAuG7MUQtR8XYznfiVN6Vus1CJGoqoqFMmX5MVt2cgMMHTcR",
  "key14": "tyNgTGwWQh5ndCLrTefGaH2prSGSn4T9MR9jyu7xxmfVspGKopEvT56D1zi5JZb6rxEBXfkB9WKrohFCVzuu3eG",
  "key15": "4AY7o1w9uj513QXUpTJnjHjRNa2hkAXtMQ5gk4oCJfqyDb5RH9xMSbrh3vPXeHrBksTudYG8eoR9CGrqUMBJyqPe",
  "key16": "MtXSB1koPcLDT9UrDnjeoidznxKAm4KdmikfrZJ6x1xDKA7kmMyvtZGuetf3TrgiFQGoqf5yWDpwmzpw42vhxMg",
  "key17": "4X5Cp6f4AL2KJiBu4Xtzx7tE9ouRbRvDPjH6wfK2349uPB15SrR3Pt2xtipFamAjKvLUUoytKymbePNhw4Dr91gF",
  "key18": "VceB7GBXbNdUaZeaLGYtDMkrfV4VPWtUFTBUh38KYfXMY4fxnp35TqwhMABt9ZtdjBS3WLNjD6obkYXBePxv6eX",
  "key19": "NE3DeAvPgUfCCoYBJcp5rLkYXLNr2puPcd8wdE9gkjjEGjjoggHmH2iKf9pRPsjZcFFPSkfJw9Vdc6h3o4VYE7B",
  "key20": "3Y1DVcHHHv7temn2zjkG619TaFqarcsTRABBRYqfk2B41h2we2NSbjvrM8mkuDVY7GuXBzV6zKh2VRMkZZfCDn6T",
  "key21": "5Xw58HZ1qNYEkn9zvSNY19Lgoj6RNPKktK58muDshppWgNBv1dVJyPeCKDvjW6pTUUCdeSHA3Zg4iqKv2ecrPXsY",
  "key22": "4jAZKXd6D26eRKr2NXLb6B8gGz7dPWQoqsWcQpTSoNvdbwBAjtTTiBWpR5KKT2yraZzGM5SCL8sGpMqHZbcrW7Vm",
  "key23": "66YcZTL7CaCbKjZY4Z12eTaLq7KoW8MTYN1G9ZRtvKEePfAVKCiqQXCvEhzm1udHZ6D2SqpRRsLgwtEcY76H5PeN",
  "key24": "39xCRss35edJjnRZzZzfpPyd47ZhBu3C3WztnqWRxB5bDcnpH4Dc65Hcnmna6n5oJ773iSW1g1P5KXqikWLhvYpL",
  "key25": "33xFYc8dQALyaibRmMhX2vLeDMkYXStJ19F4vRzwgWrzsDSh6zXebgut4FN2y1fkRAynwjhmNFRWNo2f4nY6XzVX"
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
