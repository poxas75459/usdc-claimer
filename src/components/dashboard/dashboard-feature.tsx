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
    "4JQteWhsrSnw1RoB4bm5x33PH1DQTUAmBrYgcZnaxwrWWmoYZUkGpNPpEH7jMpiqssSZ7kjxPiJk3MFncC4HMs3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iVpUqX1YzJib1orxy334zZQ6kmwFpUZiPCmVMV8vwr9NaA6wftD2Wx2yL71kYgmufku59qKmCjbq9Fje9bZunkH",
  "key1": "4odSR6oTYXZX7qMoCHsiZDfSeR3XyKHs71Uq1mvdhKYRG7sgMWcmW7TNQZLXM2o2Ha1TUWDMnZXgZBnw5AzRDDkn",
  "key2": "5TP5gQsdMvDje1PDr4Tm1X2oPFXF42cYeitKfk6c1qLSzu1UmMTocwi375YVwHwWRX8TmtjrFc1Vtcqn7yg4ACa6",
  "key3": "2C5yzGkCfWDrmfA4UeFuCsHTKHXuZoAd45srZXwt78za3UbbXPFTcdntTkmKaHHR9CxhyGyBgHjCp1tYCCLKtGAk",
  "key4": "4d2JrX4dErJg6wUYjFEcRjGbCdYhJQwc3kz8e6sbMZJTU7RQgB2xvi1E8n3gjNJonqEVwbjmaJ9yS5A6PEFRGSGz",
  "key5": "58BLyo7oJReJF2Q1ztWsAD6sdLT3nqvSbF7vMZB9BXJcihArMdXUshHWgTbTZPTumEjirMknH9Pb5DA4dg6nYRys",
  "key6": "44vUxzdyc2ip9svfsKbLLfZuhKPau78ZperVXp3VAyKEW7Wx8zMBQPhPddbsve18opyXyxUuPHdUx37NzYLD1CyJ",
  "key7": "4jWuHRJAxgjBCBrrwS7puvZza4UysJGs7A8jjpUTaiHsnzdXWUTnc4eTTNK1ZCaGy4k8D6UgPTyii8EB2JgVcFJc",
  "key8": "2P4PT44sbHDBciFgX53smDfkSDTyhho2i82HAKHJLYzNRB77egyRVNwiH4LF45Y7xqVoxUANJzzgsiT9aKcjsYrS",
  "key9": "2WwEumhn3wTUavtfN1PukGyw9mpW7Bp7N21HvdEVdHgawwwgaCoUXKLh4GRbho1pQU8gxzLpbsso33qdYRJbCstn",
  "key10": "dmbxvqQcrmM3vc8gT4r9wBdFGfVzjU8rCSwnaVf4j5EN5ZjU6Bd8XvA6ZvX9tULKt5rzWL3sHjt3eMtGxmk5pZZ",
  "key11": "TUu3qiKiNp6RRGW2sr6htZvALZVk1Zw94fMoJHxVC8BFVuTvgFFfAbpWnarXWtEV88rzyVNuooPK7R5m56XEjsS",
  "key12": "4yudoDaPWDdwt6hH7DgZDPnhKtbUypmYojU1bfcKr4xNix6XZoAaJE6bdynxTNpBmqypybDLbLYcVKpL37NHMa84",
  "key13": "Lv8gZeMeUzmoprtodC7XuQSyYdRhYCNcUYcGaPctDRiStAXDD1WnwKTSWWifQrPYkTVfpXmzuVKdGXppFjYf9KP",
  "key14": "4vmUftutJSYM6mCGNWZsiwuD8NSVDr4Eda2LnFWk43WCKEfkGHZe1YQGSwyEz4gwcMdtiLWGPepNJBLWi6FonqPx",
  "key15": "2nFX2d5aF7if3NwcfSaepJJAPYz9cAbuVoUVUzGBnABHDmyChT9pBbc3TwJwcqdGtQCiiwybf3APnpVbGvCCQ2Nb",
  "key16": "4HtJoY2SnhdRRAGUP5fCGHu28zTVzVjbXuRdhVWHcTJmeJ4WK213M5br6mDZJrmFNZsoah7B7TPjwkfvY2PJgJqh",
  "key17": "2DmvdP8ZR2SS3MPjqFeANtSEviTexYTsXFC4VAagazWBPtmtNoFSPZkMprR4DAG8ncgCMJuAjdRzzEAQZ1eULqxk",
  "key18": "3KQLiJ9s6evBt2nfQrP49ZGMtEX1NTCBjUes8kzErkzvh5qtUub4dXyMsimPZqivHP4stfgCd6FT5dQNnBaoewUX",
  "key19": "4UQBF8og8CYFqYbDoy2nYtrUmq2vnq7ykfRBbAD3NSg4gB4ApG5WPh2Eor6uB9pfQ1ZvfEXr5B6YPQQ1zJFETq1R",
  "key20": "2j8CGd1t9s7phzeLc1RjwYLrkfhJNytyXiTo2CQmgNMH1k9QmzhY1Pek5zfjs6h8onh6qy1BCQkx7bQdRjsGq5MT",
  "key21": "5zbWUkJATpKDF6pvmHfbR6NVLSoshMKHs2t1qxdLodq9yPsVzwMFmU4j68EBXjknDU94zHLJRexoXuzHMDEjfjJJ",
  "key22": "H9fc71ftcAS8QF4npYmmsqcjEACVVCwsFMoaucneqHJPzetGy2GP8o6Rv5VSgLwaKyAqMJmJc5hhr6DDFNXt9xp",
  "key23": "37nGHg1U66h286k7MTHdVaGVKzhnzsCWW4UoTHkdRqVnad1dGSYVnYnHxAxFa5GVYJZoPNXA6PqgCKo7kacrx88X",
  "key24": "2FvxvbuV2uXDxpn2JAdAkNjnTHj5ugdeEissa4QHoicje3QWuFHmFvMXFKtiwAwcrUwzBSiMASiTxBFcdSgnfG1L",
  "key25": "zExmA3SnPgWiyx6K4BuRho2J1hQ6byTP1a2VZmdtFZnGzAxZXBAkxvpQ5UwyZGz1NwtJoeAhrcmJGjZqYkmAC3k",
  "key26": "3nyezngkLK5k186E5xmK6gYNr7fZBsoyrJgZM4swYhnAb461RU21potLUmVkjFULE8bGSKhrjdU4ne9mR95fzefh",
  "key27": "VQSYaxAfW4h6dJvUj9HoMJA2afPrftgKsvZ799AzxqRR7WrJKNwU2witzZZdrtpv7uvcbSdNkH8MNyLiqYUFFxQ",
  "key28": "5gmhzJgA2qheibU5NvwcYmiEwnScsgqZaFmPDcxyjtAwMkfT89XCNYKWkoFJZA4qvmhCTGy4sbG1ZrnGJeBax7D6",
  "key29": "fx5dnFea9EU5msR12auxmsjx9mYrEYLuDNEnwup9PHw2bz2BAYiR2A2pjekvU3Q9QptxbJJhSoJD7SmNGetrxvJ",
  "key30": "mCd882wJDc6EFVvtqBTPHVZUQX1JPNfU16jwwWuRSnjEWN13CZnaZJZYQedcvYkFauHDQRSfNf9qhAoYoRKTh6v",
  "key31": "2WNSxRyVNHXZpiwv6sdo464Uufc7ut1aaQxCMUgMpfbjwxVbDfjf8vVTwz3b4RNSygEvgHJWtEiizBvskKhL4npf",
  "key32": "4YXw8V4vkrK6BDZNG9LgFsMZ8bQ8Woq89yuxzyHkrNJuGFrkRLeLB9JBZWa5P1N7qDcyBeuuJzyUiqe63V3LNE5j",
  "key33": "36LxJPD8XM7JSRjSJXZvfgMTZ1JNGaJyLZBquLzG5eVeTxPt8qudnrX6KtkbFpYBnCvRHQsEDWbwCYvtrViaEkh9"
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
