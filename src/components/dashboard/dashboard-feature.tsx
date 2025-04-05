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
    "59iSLWK5Kfn2EErCPs4ZLV7tbAaRijD639jjbcQaDpoMgyshJSW214Hh1PS7rSeaUCd4ewF49UaYMqkFeecDU6fK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EFHZTXHFTgxVViFMhPkaMa8eNnEqYdHe6t4A1Z4WccK61byFwz4d7hLYrujPhwgbJpb9MPDvVoGcQWYFo8UFXUy",
  "key1": "2jMdGjFKobiZZBLAbm3mK3Y2u4AhJgDCsiPyFHQuMu1v79VrzZHtW175NTUs5N2gyMb418vjVu1vF8CBwaMUsbxv",
  "key2": "3iBo7C45LtgicczHJX4bH5eT87qUDMNnVjHHTQCbUhozPMcUxU7LPkhU3kUEEV93bTCoDp2ymt3wZPQTPYa6v3vs",
  "key3": "5228AUpoB9qdG2MDEugxsXDvSchM5cU7Eaz5bou5W8RGNViztQ8aPsXLZdHiBM5dHJt69c46VPKYNds2tjM3T2BJ",
  "key4": "5xVeWkSsHirUieNx7Fd76yaN53C2cNRrd95jsiPK1KBQqB3qeQBo689RSNNYnNpLjsXqrhmsF5Y3AeSsGqM9emti",
  "key5": "3naac6xQvMsyhxLv8XLccE1ez4cfwdiAKJ6oCNncx6rKtRWvQKuEtAVJ8EW5ZnBRjKX9qnvUJvmZ4L4sosRNEBwK",
  "key6": "3QWgPM3h7UFrhLSehAQWbeVPNBXfdK99a96ynKCB3FgJYwcjhGt4RTPYPZ6ojScwD5a9CQaaEndGnBmP9CxgSdQC",
  "key7": "63aSEQPeXnThyqzQDzYQ8tKFwykXpitFkHy3nstzbkZZJBsFamknfxduUDu38yc5qzTcnpyiADmYEoWLsdEocJG8",
  "key8": "45q5wvr8FsyNGrhLE9bMtyshGT6mwLd9ZscHLVCuxASJJfFKjTJJnxgeXbTVGN3wHGvhnMbJQtVp1QwYUULHAVm3",
  "key9": "57JEf2fRcGdZRhP2FPUSR4bZTtbEP9EcgDk5mKqbpzxrqngUFGcDVdDdNg3VFk5XvuZ2BTYnfkEgwG1hKYiVvAGS",
  "key10": "66E5ixnSSAjmkkzkanKZfQAwrQ8iJRejUk5AWX5jkkoLMfDoHthDffhjQ7RvtbLKNT3RdWgyAzQjXpCFG3AuAP7v",
  "key11": "228PJ8ca34UorCH2rq9EH9tZ8t55VuhMEnQQHTPyj9ficRfuxXjRJ2kT6ecikhGEaUkZ5FrBdygLYX4uCafRjs6W",
  "key12": "4LrubXNwRaNzcnA6rp3NcY3GznNMpsPLbBVxWB9LDa3s4tTXb9RrERQ16RPx9NhhefP5DvQg8KxqCiLLjrPHKRRE",
  "key13": "5QiYSyfn7j7L5MX8p1c86WFzUXdH1vSzPvpxnfgfJLjntfe8q5mngrdS8tZzigZtn36fCVSxjaVGwBwXaozoEHat",
  "key14": "5HvT9euRqvemz7KZW78BvC6uLbUJymoZA2BdPm5dGRnKiSrbzKA2VbnPHBSiLx7ws3LKWjL1oHwXGfHY2viQcgj1",
  "key15": "4EGUAZK14JhNJreAprQU17mHsAoaMapsST5Nb7NV72EwE6cQ87xCgETfMRGffhxpuefST2Kk8TZrRqApoQNBMmBq",
  "key16": "4adpm6muooDCaRTxuR82VZYeW8FecCuR7ZnY6551ngnPAniJZeZJF5V7woykMb9RX3ctSDx5P6BUvbZexev2oSrD",
  "key17": "4NCMzd1fFhFMsMxWGTaMzs1VKqN5Jderuw8P7nwN5aYkgVP2Rdf274DcLwWmpYBtreizDVJ7R7RaQG79jnjQDX7q",
  "key18": "X8guLiwnmr2GfbojiKjF754Kyn4WEgkDJb6cXXDieJiR2bKPQcV94C8LC9kRUYD7wXEdt135XpzrgDXS2Murgbn",
  "key19": "3iQFwtYcWxWLjynWqVtuzUqDr5P2hiUmS8ZEqRa1HkSCzgkY5SjJqUkeaiee6x7iPYvebiq7DJe2xZn5FbQffooK",
  "key20": "4Yk8tRLYHoSwiEGGA9rmGDud358KrSBma5fSsL1mW7LEbBQpDaYLSAfp8z2rkWQASFo6udvWQFxS5nQVHaHHHgHj",
  "key21": "ZqhXzjSxRnDPt6bNcVjootoApofK7Mm9YxAXt7R7T3SBzjVp8CPCTaimnkb7i35ZT13Btqb76CEbeHaQnnTW61P",
  "key22": "41Un1NrZa5snSTtgRa2AC4V8nbuntQYtQ9vGKY5C5VVzRAMYSksyaTXE7QSgYDYu2wCJHaqjuovjUVzRRtSAG3oo",
  "key23": "5NHjpocSZMRzWRUuSih3JefRMN5fQkcsLi8q3qsw6TFS5cS8xnzLVCsfwccT8WKrWUEFpHgnezf4WNxHJ1bRdKJk",
  "key24": "4oJsBgKvgDeZtxZ6vpcsXdRdYagbyeGaP4rbmqUfMt9YfGuoUWsuTJkoTLsePfymKuAWx6pgjFXNBhYD6v1AS5Dw",
  "key25": "2PyEsiLCjcEF3sZ8TvMTug1Lbd4NsRNJahBhnUwV7Ufp4Snt1FL5M3RqxH4mnVAbdqBvVjHnH3DESnSqFR8u6mqe",
  "key26": "5nATGB5MBsswCH6tcFL24V6GMeSmUan9v8i7UDJaafrVx9MT7DAMf37odvs4UDAFTrmBBBW8yKWz1NDqUT1wEoUH",
  "key27": "5C41A6PYiMGbVu3f77q76stHNcAVLN2hKZWqYopAFmCbBir8meKd2mHRR4waT5dLCPWsbiuRhhp6SB81kkdbRhnQ",
  "key28": "48JC1Z1V48DPVwBZH81m5yxmD8L4pmwmF3xSfznBDb9JhCqYfyZkbTRuKmtYDEa9W1TgnTVfeBhtnbRNgTH3Q8zs",
  "key29": "zWpRCh52Q6bELdTipn7xVXPKP4hSPvLubWGhUh2MP5vc4y7dBjcnpbrCBqyHw4raneXEwRzyvxRAxrX2DnqKVij"
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
