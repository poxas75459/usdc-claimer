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
    "2SYZFZ8Bib2BSmeAfcr4485VpydQ6uyThDjgQe4ZKfgBi1gRvFuCWVNpTVmP1gfwUbTqqmLEiQ9rmZviwgwfZ9e8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oNuanJ2HLRxW1ArRWqt5KUh6oUiR38MeMHNt46a7HenBfxFdrWRUsg4h1TBBL93Tzxp1fannxzWxnHZsZ4B6gU5",
  "key1": "4VAjhQ1KyCeWmA122VM1i12B6byKcVVHPGJ5akYdqWxbMW6ecjbQgJtxLd78NtvxYTma6WS5mu78wjTuoSLUKCo2",
  "key2": "2qixtZQcpsTbWjYRAhHpXcztk5nQxKLEbeVdYSRbAgjuKaNqTqBeBygDW8QgXPnuWYxpyGLod7hJ8zLWqkcfaxak",
  "key3": "qzTvqccEwvTupFd92MgHXpC1U7xZ1KDHERT1g8tcuHd6vLH4EEaoGSqwgeidjipB2Ft5wnqidppZATFMa1G2WZt",
  "key4": "4HHZ7BKRc4VHESvtF6Bj6nfCXG4bRLgpamEMriBuvxSw8KMBNuaVAZeXFfE3oapS4kZDyFn7QP7JNWe9L97jKaBM",
  "key5": "4aVGqT9BzLLkmpbGdJfjEg1iRFpjsHMCLbQQpC7JfHQj1xMyVJevH4nHWT4gyJ7eB8UcWVW1SxRpESwtUWL92byn",
  "key6": "5mfCaUYiXrXXAMTayCDotZYa3gvV2jDeCX9HKQqFMh5nfjDVaTPHDEbmxmuBMZCGzh4rsP5wHvyU3Eqrtdka8mXS",
  "key7": "3XYPmcxV2R6PPP9CV6P7yrUUQxpt3gvH9Wb6teDYbN7T8KhcoRSMtfa7RgnFzfmfuB3FNEnn79SAVN2wFmf7myjm",
  "key8": "3biGyvWeRCPszo9i1cyQc6GMtNrVoK1spYkFDEUyJWtCXaqkzqmQgbfBiFGPuXAckK3BA2xPBX1MpgCaLckNqXh1",
  "key9": "FJQEUhx8s5knLBcBFQPPCpLMEe3aTmbwBJG3D3opHJQZScPNV7vUyF5czUn7eud8iUo7KSbh24yy1prkkpFP2in",
  "key10": "22Qyd2B8kfe92vWQ7QWxC3ught8Tf1DW3th6HJhV8Zs5VHs257zExaBpC8yEdoS7SGvpn3aYFsy9kZCWnQopiYGd",
  "key11": "eqVzEV7xaqVFXx1ME5pwWtMo1BKjLUeaPwvmpPhGGuW4nzHCbqTNTbMU8x5SC5ucKnKEDPngzm5dy6DWoLVwUWS",
  "key12": "59225ga5nJ8JYAJyD5r9aB1E8pFXRJCka9kw4a4fqR9u5iZZUtMEneZffAx3N36Darip3R7GtxAh9kk7qWXyEPo9",
  "key13": "53eYmJEvCBjTBeNM2U8gft967WBwKfDphW5GkzAkkxjHknkwrpKiXNP8cTDWhxhvZP17yYLR5NeVdDcfGxh3hhcu",
  "key14": "43kMFfKqDyem5Aehp7EkNg7mkoMcKWmozTHw34sa1FiyKZvNzBgoPzv4hQLUZo6kB1TympqE6F6qBRcxhi9PYWPD",
  "key15": "563HPQsESWa2ktQyp9fZY6Gb9nfTcqutWFR1BY58V2caiPWphpWJ8wMrAtcnHGWqshERWhpKdqfZ48mdGaPer9ab",
  "key16": "114yXtytc1cHgwVReLcYAJz53uMdRXcrhDCokDdunW6bwDcx2DCrV5zWp8H2gL4nBwdcbUhMTaXTWnyjHEvAoD",
  "key17": "4R8iEehamTrDN54uPeyvByHE4PQii3SzBnVAXdpfHH3FGSG994TX3hciuKZkUMtFZoePWZK1FFQwW7HVCt1sq62v",
  "key18": "2R9QUVWkbxmLKQBmEhQd4f5nRsvUWM21v8JTXCKLJjLgG3X347DaKtbFUaKb1ovCtTVFuJdd7fgq6jKHVqiapW59",
  "key19": "63jhmReBrPmddGisEAaXzf2JkRzqrQ7KqphNPmjikbbRAgonN4AtCZBZERAgfUQsBoMJ27gnnLhsBydJszocBayp",
  "key20": "68pq1mZGqZHKpw3FEcY2Xu2Zvv8Sh3gKGReuKhLkLgYRZ1QQ6ym6M6B3QUHPK5v7ESdKK6yfk2zyAfPspbX2S35",
  "key21": "4C4NKNuNMhiFkkzXMStX1boYpvETGApXUrGaXDtdkuB2LbP4yVaytDVmFSqCs1Xwd3f6TmzwmTy8sqKGtKhZBG7L",
  "key22": "4ijZSUhekFwKbyZhoWFysK8quN4FYk1FT2WBi4E7qudGkAqfzbpAntceKEXTCvCU7qKZBPLWueo66AD53jnE9th",
  "key23": "3rfXnL1P2Qi3dg7DyJcx93ycTkMtK9uprVHqZHtodwys9jXNPZdbAashsJgpaK41XUE7oMejY3sFT8VmdqC7TZsk",
  "key24": "4UskRHPBtLhQ78E5yVCnxtQi6HSUhyDPPdmGX8jvKQakbmtdivTDdfcHBTtvTtLXGxD7EimUmhsVDYj3ZdnQ28BJ",
  "key25": "2YBXg6S2zfbZ4F59VtjmUQeZvi11sHxpTFzXJau276XKPTjvwMWkG4VG3enUMwUmd8Cm3DpEqfNXpcNUuqgHkpC5",
  "key26": "mphaiubZtdSxYaQ3ZmTJKKCwyH4wqwyvdUkksWaEXKWzB1YaSYMxMhfzrNkfXffvBgqjh3PLtAmWgAsCkhjWky3",
  "key27": "65mZduKpzjdGGkY4ttrLGb1v4WwiH8eFnrtVXsbjqiyzhxSjR2gT6czeozEwNhfiDmCpf2RLfbdAXAgjKvFoFcnf",
  "key28": "DMx5PLg7rEJ1VQQopLKdWRTVwKb59ojDzotdPauWJ2waZpHf8EKmAJQPB8PRHgKuoum6ppZ8eoezvjCvka7gs9A",
  "key29": "3o7gBU4d7k7HmhHdKDEodbp3uqs7xKKtsC898HRyVjgH9hZRLHAN61EPFKCdr1679AbAm68qJ8dprebszDgoAKQB",
  "key30": "2xuf58kGM1aT12Xp44fgvgHUFvbua8wYMFEXhYokRhhCKc19J5bKzUUbVTiGAEnMAwPgzhcq1itfpMRgeGzyRBhE"
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
