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
    "r9WEfa7LzUVAeaPWRRs3WnuqKpTyG5DPs2DBJpChomFgdQDBepZEgfMDAqazLocPmgYbVaeavJnEau46nxXZFAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rd3MhAyLLmHXhd79StnxzLcd5j7vCXfPmQSKzsoe5yg33Ygj3yHAeqSFnk16RwWFh6AMEcomr6X5Wmhr8HCwBF1",
  "key1": "36xhFH3d6n4E6s1BdCegUZU5MHyjD4iYVaE4NFmfVk5yhh39EsogsEv5GEyQGR5PvZJvF2hVTFksxTCDSr7DRtNM",
  "key2": "3hG8tJeirVabiHMukE5sJ5CFMNUmgMfioPak3vxTqfnuFxDYqbwpdoSgffpgtfkwYrneKog5FXFKmAcKjWqi4KrZ",
  "key3": "2UuPVeEywg3p8JpGg3XtVtCEziFe4gCUtp9pY7sbhKN5jqUhd8HqnGrmcUBXgS6aoBbbF1EmXh4eWeeeRuN5hszu",
  "key4": "3VSYTMhbZmzidRBBBCGua6jUPm4fUCg7YXjSYqRzYgyALYrsU3T7xiHG466iFJuSxsS9LyoMNJV5ECJKwTT3iQ8d",
  "key5": "3a9u4fsAP4yJ7e6twfg2gj34EbZdU9urBNzuSeqrN6s5onvEhUpAWs2HT2tUSTuWfWBi7XyX35YBkTNZEp7ZDzqY",
  "key6": "3QZFz18QC2m4KXKPk7kHKjaaAJFKs4V9Ybmmij8oYqryPdMvwa2Zisbcs9CKg3TPozu8jccLP3xVtxJ2gsbavUsR",
  "key7": "58LRRNiHptUPKAQZbW5iaT3ykJ5t2KugbVpHfrRfpqPGNe5oX9jcCsfRgEHCb4m24dj1jSeg85JuYqnmfYpayezf",
  "key8": "4kAKmgYKgZs4z3m33roPm6aJWx8wGB29JUQYmGPrgx3XACDuxLBKT7gg3S9iYEB19xuiVzZMZJo7U5Gd1ucxuCEc",
  "key9": "5CcdiAXzJg2KJbVzRTxDVx5FrZDbXjwZgWtfVkchaZihVoJBYqcJosooYuQsDykPXqzNJxCgSXFrtNCCusb9AA1s",
  "key10": "39acc3EDQydLL421tHWEhYDs4c7kMYsK37hAF2fQavTigk8eg6GfigQvCupdBGrHGY9GHzPcchCRZDZGzceZuVK3",
  "key11": "4mzDxyavPzM8PBcLB9rdPB3XaTfU4GehdbgssJgt8TAT5a5nqVNz5abKPN5TW5FHC7cEPGgDukDt16nTbVPZYNPJ",
  "key12": "4tCkxNiArwW1mhAEhWJbeDah1FkkmvDrUhDoQRW1WtLdUpZ9Diiij587duZoxrDSRkjGpPE3mdUWU5p2WeJ5ibaP",
  "key13": "crD3otaAh8FhooyQ9g9u8UjAzVBxW18RbTdnCCcQxK9Dmnz55vKxjoZN6wWj6gWddbz9TBT4KsivoMJA6aXzuWm",
  "key14": "4HkTThxtNQRZR8Vi97rJDt4Q2MSPaVAtzTrudGPjUsb6Gs2VDSupaLdEz4ZAMizGQmSpoZuov7QwV4br664tvWR4",
  "key15": "3mFn9HgisbDTVhWv3VphtL12u7aFPRtP5Xow5Pzjvvfhqr9kWYWDLSF714wVjc6ZSrsqZBQXHJqWSDTmuumzvGD6",
  "key16": "3kkLLPGkV1WzFA27xa7cqFJAgMwGHXqS6CbihGMboXrrM65JEYg6L5rwSHrQyzVs5krz34yFAikN6Yc7VJxq9fpU",
  "key17": "61XsQaUnrMAbXe6vERY5gezAbB9U9FemUy7687WcPtyD51AGMK3hm7Mv6D9qkenAcazMKKYueRf6fP25f576PXSC",
  "key18": "3kt185d89jL7ocTJezpNLAMZFrS5Wjo1Nge8ZYA8vHMAHw9YY4bgFzg3sCL6Nw8a9DQivhdPry9nATnTagiaLDZT",
  "key19": "46edNJBcABSV1FQsyVjnesXqc3Bh8GombxaBQYAX9HcXLzqZr3bJYpYjvTNBUEqU4ikYJEbPRi9iknVF3evLdXwZ",
  "key20": "5ptB2pi6pawsubjSqNfYVJoXSNV8rvpyZXErEnTG5BFgerHNrcy4e6yryCJT2A1WiHet36o5xipKu93XoZYcVjGo",
  "key21": "5vSyTmdCuYuatksvUcUXt8cPU2kTbA14AimzDxcHKBpnRsNb7cY5MVC1omxDBhiEEs8SB9PYdVBtPftfxM5iHmvA",
  "key22": "Qgn64EL2sgb7yD6sRxMscA4FFfaYThKnNC7rQRyGL83aUFRNmxcG187PmGLKR9qPJH8c4z22dVLoBZCg7Fv1rTh",
  "key23": "5pkVvUkfzb976fUCoXKN2cGPzw5c9nfHxvXNP5wQ2KXnSpxcjgzhMTe3dFmen3ieG3ZKVir7Y2T5B22BeyrWd1Ww",
  "key24": "4tJN9hyBRjSPSqijg2qSb6MYPy56ST6i2gTaydH922QiMDa6gVHm6uxYGBaVHna8w79yLtzS3MHuZrPsrGxJM9Q7",
  "key25": "4JMfNFv73oZseYwpLaCitdF1y2JCs5cAbH27Zi4NHtMREqP89b4dvQe5e6JMkYvMEm9nZffsqEXTRtir83CgNPTe",
  "key26": "gfDKzaw4yziUQr2pEVdbt53rcXeR2fpJ2Ko8RbAvifCBueEaBdQJtBiCAfbWYn4LHRU6voaTzsGZGNzE1KRXTvX",
  "key27": "2QoyYz4AnkXyWwonmHesakzS67pKBNFBpEyGLqMkPjHn5eP8jdrMY5gnuUenJFwC31Ca3jXSzxofHj22ziP7WS4h",
  "key28": "4rTCEiZi4drxzAhrF2r1hiitBKjkb4fS6bBxZPKYuyKHdPbckTbfJZgZGAbpUFa4DjsY1cxvLBXM3qkjJGyg92eR",
  "key29": "3vuD4UPRVSQypKVdrHnyHupjAcs23HbjeXUQL16tCV7a6ZeskaqxCKd2kWu46W6fM4K2JagghyoNCLkWBpUPQa8v",
  "key30": "Bi66VgBMPJEKfqGUqDnCU8Tqrf676AMHvNv1D4Br5aUy1ifbT5oQD2uSzyEEcEqV7469NkT8dRq5499FRk2bMAu",
  "key31": "2UcPgsLGktLpnUmSsQ7BrRSk8LPPSmTZwWLMcWPLwXmEXVutKNc7mfst9dNNbkVSFZnBTJ6r4ucxHT3J96tYgbbm",
  "key32": "2ju8YEW6iqh7FjCTX9bqpmBWtJBPyAobVg5jQa2bmPRFmQmZBGxDrEY8G3KRycSN4STjXyxrizCc3AvKeb2euAjQ",
  "key33": "4wyTBYP3zSZNHRmejQXrcXYUMfTnmkYuVP8H9Xpb5nuCTsFcdZNVVWCcnhnVhJwA268QesBUR8pQkDLDUZi2tyi4",
  "key34": "2YFNEnEg1W4SbzUzwLeHiKVsJKLJNUFYowxfhianXisAmEFGzAQydsm4UseUDfragNVeqEVJB2bzUbD7M2yZEeDr"
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
