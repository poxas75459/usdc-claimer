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
    "3koHVSdgoUQVMZd7EofnveRj7cohGe2vj1SqeudyKa2az18bYtaf4fAWGhVuXZTx7Xf8a3VMhvhtRc9tQsmnQhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SWowMDufHPpYY3hfxutaYWL3VRogfGBhnQX3VSJAFR81DFXD5JJiZF9sV3aanuAXNXu858wvYb3KQKxzzWaoxu2",
  "key1": "5vKKqbLEwH94HC6vJGNKDXszbVtTbf88p3224aB9LbjLwXLkEmUyqtJonkvJMK4egHffawir18N3GJPcw4bopHxd",
  "key2": "ng5QeJmKNCHoeSZAqcReYKVo6RcbspcKbdVvyzKprTTQN3ygVxrJDqv9c5CA6jm9rR6hj3nDRsjznjbAWJBCXih",
  "key3": "5YGzhxGrejXzSpUNzdJWctUfRzQPGiguwsfhbgGd7tc6Ft7HupSHyvzeDMurJ4EFNyZyymdYqWCAqeCxQDfjgsu2",
  "key4": "5nChZFY5Ugq9tYMjsVA5orLNygwo4REciB1yAYNFPSKjF5btFo1B9W37sHxMsX7WnbckXaKfJ2Swh8MQ34cVdVYt",
  "key5": "4nEzdkt6oDAXKDctBhPmuFin67zfZc61U85be6Lh4NhpHgWU5SLNdLboq1kR1mXL13DeVKD9NnM7U4UcS8GeoN8d",
  "key6": "TzKFLkDXsygep4L5qKrQTHnL6wzr6e4sqae7JrzdA8Vtu2Zhh61KMK8dmF4Uho9CWAVgVBJgxrBsUZPsdvEZce9",
  "key7": "22mfE9dJ5gjEasiHgWhtQohuSFhtepwcpaP1TVgpi9mD1Fg9hfi7MdnG3d7LYP7v42LoAojMCMeHfd7hxVFe533p",
  "key8": "4Ef5qwqQzgSBR5oanPG3SxRH5T1p86dwFjpN2BFgiLrsmy8yQAsutC5XZGVhYZRGp3Rjfid5pCUuBku9y6wZQjr",
  "key9": "5VTRSBFgDR4MdrDz6ct3L7rUGYCoqMsHZDWNQvwpvg496ZgV5kqCzPXVCzzSMEndavoF4P8qWFRaTEtrT2Mp7kPv",
  "key10": "4go674Wodyuo63xrpSV3ndyxx6qJzvtWdwcdoAdTFeCVw14yJRmi3eTwVxTfCGZkHvECJbsQNmuuJDWQm2HvCpoA",
  "key11": "5ggSCD9tirWB556F3H9p5H4anFRCoD1AN7gndoGiQig1MDCDCZNgrPRCNtitksAy7MeJxbN9oQQzdG7WBNyvDBzm",
  "key12": "3jr9jm64AE9PbLGWs8m7LKsUkspWh6kYUbvcrHct1zWYbs1xuSQ3731qGoDUzadR77JRTA2s19jXbZiUGrC5JZ4Q",
  "key13": "3iGyjRpmsiGBx91ybPFPNX9ScgFFxLTw7Zt6Dxp6WdzJNEk4ZzUiHi55htMwHTnCvEpLvfkZm6w1njBojTzjDVqW",
  "key14": "2tMKwxYYDo2efkS2UX3n4RTcEZanFHAEL6BraqkvThx4XJE9q9M51hnHXL8v3S1nGh53QYUGFizRGJWJzo2KzL4i",
  "key15": "4rPfxoUDXCBT3BUUKN8kiLUVHiG8vnBivtaVVjPzmtQzPDD7TTCpSkxFfGW2A2xJvvi7EF39nsX6qwGEbvLirkJo",
  "key16": "3nyozBXd29XEniadDjmVcL9Kq2PmCJM7dbdpw2ECTZ6LPFANtShgkqMpxJHonGfWaZSYzX5cPt2nddUzjRXmaLpD",
  "key17": "2vki6MwvmrDGRcMLauUjV3Cdi6S9gpTYa5dKcjRwA5aJnXNBZfSCEFYqkW4guMhQbh5UFBxsT4kVsQdoKAFt2rKk",
  "key18": "MVcnw83gfukesMkthLmQgeQcK8HbM9sDsqRuQpfD5GhH5gzm792aQpK2LBaFfJHwEwBKjjk7qnhjqLNettxqh3Y",
  "key19": "5xutv3UVVP2edngouh5vw1qUwsYbWyAYNfD3AFmuZBTdZ8DUHivWG5ES42ZwmVu2Jxj573PwudEK96HLfgAKrNga",
  "key20": "3krACwNgyq4rLo4Pqk1JY6ThCqr6A2whgYMfpDYJQDywiKvRqqgzjYWXeumZoWtgKkYDzMgZ4ybBkiibnsJXCjnT",
  "key21": "4TVmGghmUhfBtxPa4Uy35v8d81hBBtVSrfd7BtR2xH455UssQ6QeXNnKeydRs6H3ZYabcyyymv1NWWUtVtMdZoG8",
  "key22": "5aTbY2UVj79QdoHkSQbaJcSrhm1yPmj7Hby1yw2JPkpfMvwY5r46T7fBVBTjRemNvs22aQaGQGadRjC4SoPzpE9U",
  "key23": "5sz5PFZfPCo2mULQhUCYTeqDoJW4qKy5HnzN5YweK8eGVFcHKspXyTDHKsBEkrtV3qaJjqPYSig64mVbUtAYuRA9",
  "key24": "3uq41JedBQn3HuhPot6TN9J6e6s2eXuciGGX44qMwYHF1U3HHBEVZ5MBnXyBCfaYwqsq9f7dy8TdvvFBJetWg7WT",
  "key25": "3MykLbbxH6YhVLbJbJoSiwbvMXSbJCJ4cZPQcQXcUV1oWJVToHivekigQ7kVoFUveWjepZdNWj4RJaYyVaz381mz",
  "key26": "J27U54jHMUtrosjJa1cuF4vjVAJouhPVuC9KE5rrxAAx2VaR8TS3EtKRE8x2b9xLrEQZRoZf3Rc7eQvA4N1re2s",
  "key27": "KXqqVBT34UXnsDqLyk4KrmfadAUyv5yBRrWJ32EkVdpbNCVzXrXxhpRidDRYaR2VautB2EKtuN8k25SzeGztUtU",
  "key28": "5GEiFHXrS7Gryr4kt3YZTM9gpncs2hEYWDVkRAYMQKMQUwPiBT2yug5ShxCBvW4TJtv8HUNwbrrH3nbxgqedEddm"
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
