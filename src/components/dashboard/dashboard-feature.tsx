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
    "JaQPrHrEUvPavozfAqJb9aGhfTToK9kQzcdNV2By4SuF14ZnBw45pffGKJPXehFnrDC3bND1EQxPQceAQbkDECy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h5N8UBpRwvcHPFPTZJLzYtMyrAKC7yM8Jpp1Mihjomkn7JJDVnx2NLmFqLwhbmrXAAVtY1sQuS87bUUfuMaJVBb",
  "key1": "5nW55m7b7VmSKc34SqGFXB1Bvtuu7odZcsceSNVW5kuMPnzCeSWMJwsj6ZDHz444ad7BZhR4rgBw1jJgFRvdWsK3",
  "key2": "3JHPGD1MKTaWs4mjNy99axi7jRZZv5tmdfMbUiLANXQs2N9r7KUrmMT9D7U5urvtgukp2NDVDKHvFmvKoejwM3cs",
  "key3": "aJaFFzzfEXXaRb38bbFcCDfA69VKiKmJzQAPXZ1gN89FHXWGzJ3icxjxCMAYwou6QTZmmWeL4GsYwnSbR5B9uYU",
  "key4": "3aXiZhngr1XD1gfD7LqVHWSJEdxGrfpaXfrLGUT7EMQ329pEP6L8mLNujYGv1CC4s4h1JGEy5g5wo44oBewhY8Wq",
  "key5": "2zFmTAnDzUfSbWjmXmDg2yJyJnDoyKr6GWMrqcV4TNL9QEqJUeFSKRqBuEE1bhvT5CxidcvpTAh62YmrDtm3Whuh",
  "key6": "qpwG5KXDELddK9YFwnZXjh87BgSWk2V2P5mxUcJHcKPkfubNFp9sYeAQP4CNYjbUkdez36jsQDoB89Ubf2A2TpG",
  "key7": "2DVb6yuT4twf9f9g7wvocWGv4y627XYkyk1Hd9oFbpNeiEeHcSpLWAdJSMvyDMQYtNTgoMsGuZVNVEngWdcXV8iu",
  "key8": "3rMJxPdnuq3ynp13sHbEsS3WtAJd8cUN5sFa6kDaC98VvoZsvDvgxDMkBJgm8YjbLAAgXRcidTq1mPEHVCSJAcvG",
  "key9": "a89EvFqRnzJBNtfTDR6Nfwwj8qCXk9H6oWcTYZxH3FtJtgANQq5geA9sBEu4RweXv2GZFPNjkkrH792RQ25MUtn",
  "key10": "Go5Hmbik9pubkcQnrYm9FLHyveWquYnb12zDnZuq6j6rPF4W4HihCLbNDuAG44pNtfR8vfPE6e8niDxFe2BMpjD",
  "key11": "4rZgEwAtyUQfZSRDTZRkJW9NEThfeLN63QzXbUfhSV4tucv2htMTjt1M4LBBuHhixbpzTFYsJp52nxoqDzL8aCkN",
  "key12": "4jfNrPnTQomTSVeeUSutJVdgECE3Gk8pqSdAw3D9vEX8U7qnXb9s8HHwjj6DFqU6qGsFMeQg8iT8hCjjwmspaLHN",
  "key13": "Nt5J9Hh1PX7msreGaEfSW5gohEHsSkSXR8rMVYY8Bw8k8uUgpTwE7AwsdfiUdTcFLUX1gftZ2sTfhXUrBhAyEds",
  "key14": "uG6KqqpApjr9EYQPfqaVBbVcKJJ3ryNtozU1xfAnZA5VoBSufE6AyBwG1XyfqwhydbDeuHcubvBRNg7qKeobe9F",
  "key15": "3QqKpw1zHfjL2HnxGNeqpzmMtevoHxHzWm7J8P6i1shTKobraQ8MenkGYqyqSPFUpKCv3Kj342iyYV38R6XewqMP",
  "key16": "4oC4eDeWbxC1MmwMSrFTxtbr8nQmUdZUvyZH2FYQZsUk9PX6i1ZNpCqWjPfAGwdhQvQuh4SH7NeYQFhSoJpCfTeF",
  "key17": "LuNi5EDLcweUHgFLyiW3HbQH4CY3sQr1Hrxsksjew5ijDroebcRvtnLkgx1kRko6EPZGnYms991tUXfdw2wTDki",
  "key18": "5bEyWmQG3uCCZ5SUPL3KFELTV3SczX3qAzF5vk4Zbq4qTRrsrCPtxidDrNvzh9aG7zynCTtcpUrTitUm1NsDQ3AM",
  "key19": "2qLhjczkLsv8c4UbfqRNkaSTKHqUcfVS4pRyJ18nWXNdzL7ZaBmkLYuwHaXNco1MKFzSkHwpGTzEVmTVkVyaRNDN",
  "key20": "5o8Fmkk53FYyv8KwxxpPAjhRNDZzu7qQCW71aR65azYHZCjPC3MzcrSsCV8izNV1dJZWorhkqMtEGSfSYw2QWc9x",
  "key21": "sCWYGZNDN7HQpMS1YM5axKwFs1KMvbqMiXimidiy8RmLbZh2Tr9kUQT951XC4WLxLmJoiaB7FiWvjapwXDPsN9o",
  "key22": "2xfaVv3WQZjxqnVubsBR1mswB1iPa89kCbRfyUMfWCsLhD4NDdSWkgZsFqU2Wz3GSQYUPvxRNNYLg2yZzu521JTX",
  "key23": "4pmGEXfgGiz8M1YahbgTxtjyW9V84mwiNN6BU6TsmSTbzqyu2unExBfQqVPzBgcUYQ32xycmwbsjwbvnbnDBBpSj",
  "key24": "5yU1kXj3qRFufVVEBqkTpL3aHHzK8xiXizx9MWniS3J2hZmDoRMh5HaVMHhayMpaPfQce5ADC3djuocu7BdUVe7h"
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
