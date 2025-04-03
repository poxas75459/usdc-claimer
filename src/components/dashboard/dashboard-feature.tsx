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
    "2FbZeKvQ9nvWvxUCgZxEfSWxDxNQWLMhvE3FnPAcBzrzz9Aus9uAX6HdhKdKgwT3wNhno8heARfifwkUomExdjHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "321t2KWLy5rbavsuE3DY4EEhNVu3EHahSfQzzknP89mKz2rLECQeuUPK2ok9dnycBMZT6d75bssB7dUxJ8mkPsES",
  "key1": "4u4Ug1n8EbpoztbkLT3aBrKeM3AUHbtTm8rwPr9LpjtUsAWXfdL15xmRx7k15NhQKDbvJSdwTAgfcL9na7xWH9G4",
  "key2": "4Kyu9Bin1gbvXGWwvPZyVu4i1xLi4zE1sQzpFH62KF5ZTMxtESrPnyqefBGqixUJJ3JRyihgRirBQ3X5miu3ThKg",
  "key3": "MyHnXe7JDPYTyjwqxJkDFLLY4z2K3yYejg3tcFkfYjuA3XgK3wre7P6Y9HDNB89tLPmz4RzLuiph3m5TP1t1uMW",
  "key4": "3Uc7RiS5aUBDc8j7GC99CQ6Tb2LVD8FrBCKSpEerfd7XREGWzbcHa4uX9BvgxCzzPoVz1apR7dHEZTy5k3Ge3evN",
  "key5": "2mWh8fDnCbS2UNe7FzTeYhhY3pisGjUpFx1HM71G3m1SButZKNFdM16xr9BjTKCTKipxhBxV9XMmEJMtifp93Rj1",
  "key6": "4AJeBbGgSUeCTcdd9WzzfbBxhJLGf41MD719pTExrPcXsWp4DrRUKJ9CeU9vP2JZ2Zg83XkQcKmWnxxsZ1gxMroo",
  "key7": "e1NpMT3WMm1uvepCoeZnBuQEW7dXPgPLWTzDv715imNmdXrDCkhLPST19fJsD1JMTkE4xnPTeYiqvQ9ucy4hVgj",
  "key8": "4FuM8BxynmoPXiZBBnm5UEVDgqyEvmnu3dmn9qmiYsiMHc8b1YftYCSw7oazBJQPb3LxhMhkLmroL4SzCg9EBopG",
  "key9": "2Y8xAJA79k3HmDZMJ1L5Dw3ZbZ58wYLrpdDHh2RAfBJvSg4DX5TEtDvQSLYZp37qAH1jdZj9VdsMG6Q1gv8W3Zmy",
  "key10": "2fpriaTweyCsLMpjxyE7BMiFXgrQRBDnyaUQbHrtN2pL5rFuxHrAhAPRAhNarEt8Wjhnx7CqZhV8ZyWF1qMfHUBZ",
  "key11": "vy8Er6KuJdVYQDiPyesPnHW1yibF93CLqb7sqwTHVtbdJ5kLqrhTTf6kFU1tLNmMqZkZH8ktjbWnaH3ZzHwhfnW",
  "key12": "66BekjPhTx8tUBmTeg7LAYaSmdnpcZU5L2EznaAbB2zaY5yZZnFHyDEE7AkLDM2HpC6gDFATH3bnQi8hp7BUpT9M",
  "key13": "5pz2q3qZgJ9MAbiA4h5Td3VfRx13LP6iYCrJP8KnL4kVZNvQssmNBxQLXV9VG4ZUxrvFTbJA8ShJYY8hpBsQ552Y",
  "key14": "2VDK6BD55MLqJm2BkAqrVwQfeicSYunfcP3cspM3bprFuXbLvASyt7BFcm7eR5aSDQf9Ca4RpYLdXXGCcv7Me4A",
  "key15": "4mcJMusgkrkGd5JGbCdaof8MNXCGvTYCTJdWahbch8ExdDad7fea9ZboqwebeRsD7nr31geaHTZvJBREhGyNJU2a",
  "key16": "3XoTyzxXFjEJJgeRVtFawddgzFkrET9yzxguiJCVsuUKdCzLds88CKMSRhZ3LZEWX65kmVn4dF77Qmd5AthuDweX",
  "key17": "4a1xfHEM5WkPQ4HfRqnSPMHC7SRfSv2oR84DEhgrobX74pV7Prqmz8B3uV6ekj8K9JrmMpGwhL9Se5hhNF1Z5ZbE",
  "key18": "5mi8NQJshH7TfiCwbkfgtzL7yC16QndBCtBhvsSB48aPjq8WbTsgVDESMnUsKuLqoY86PXPXZGGNu4ne2UATEr3Z",
  "key19": "4DrDNni9AtonqWEyM9BhoVM6mXdMw3BPuH9fvQH9sM5WpzA31xdcni9XtrBFDqhH11vgx2caUpkkzpCjTcprTqJ1",
  "key20": "35rg7pcL5mgv9RRV9kGR8SFKpV17wiV18cRFdFQSQf6PKs16sZLMAAp9sVsJzc7HSbJLkEpkvZAV2h4bo22wKcsd",
  "key21": "FE5TZ8Xfv74v4aZWkbQ5thrArUtorhpVUTH2oERd25c6JECS7PcBZksSg46tA8J2XVoCptwHeF4jxLqzeTacE53",
  "key22": "3WdEH6BYsunMb4GXwqzZg1gS4etYUhc3gFYXaaQ3dkhF8SQjQUmAPJRTNhPKpJjM4kVsdt1X9jPPTU12qYgVt8Jm",
  "key23": "jZP1fHnonx35UZdeXCtaCAGE7Uxnb2dmbYJmpabjgVWkLRbdreRT3dy5nbJKMPUmPQ3qC2KJvmVBNbdUPNJiJiA",
  "key24": "45L6CwQx3t4k3d6m581FpoVzLH7AMCBbgbsQ2zypZkZvSbGw9W9z4vMwDxao8vthHLQJVxgrgoTrMDq9ra6D5vd6",
  "key25": "34sUARg1ebzXuG79u3NDqhcyNCG8ykHvDVDfcKswV7BfrriDs5AjkGDFswNmS4QCGhDuR191U5cDxx8suhWaspUs",
  "key26": "3MrudPFuk8MU8gwPYixgzNUatD3soQGecMaA7TWPvqyyzusYFCcaC85P6U26ghsoLQnSFDttEbmSjxTg7F1rZpmt",
  "key27": "4agVR6pVK9Ff8JtnhQeLbV37XPsiP8fy2husXyYFvtvA6ZE3U19Ea8LDW61EP5bAm84hQgZCLMHk3ApHwAWRF3Zb",
  "key28": "5oSVwGEh3yjiaoR75bgwqfC1Va3udP2zi8KQizPVy8tmrLLDmddiqGkJ57q7nFAGaU3TovtKAgZBKSMdX8HEPMyN"
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
