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
    "2WQkhBtprX2KvqdNfKd8gz4qgLw9RmxX4aFxEj5Wkb71PGJjwpqkF3pv2a1DKctCFbXfwLJHP6HynZx8acgNZxtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s833E8m9L7H5gj4hqBpVGdQs4jh44fWF7QTPpgaekdJFhojiPXYX82swJ1rSx3X7hTX1rgWh8muqW7QBS1cZ8LH",
  "key1": "4CzDrNedqhGz5VLMW2tsayBR7SdMJcQkNsnW49f8uxriHuU5zySY8yUzGkoy66pAfJuwaqE3PLLK9cc8aAc5NyZx",
  "key2": "5pj73g784vdniK7dRkuwBvSc6trtB7UrvwZn3Jv2GL929aqvr4rMRtawed8CTRZpeQSceSqBwsoqMPNNTWTD4TBo",
  "key3": "zvwNJXVC77Bkf56fXu4TRQMM2iaVXTbguM5B2BwqZAXRz8GnUkmmBMDgG4FRosryG4c7y7B4Ns7LptV9B4oViWX",
  "key4": "6nZVQrYJv6A7XVHCqATqEzF6aqWBnbb47saHP6VLsHuCF8XWE2eU2fQLBUTbsWU3gwk8ZbAxzarJRivhVSSEZSN",
  "key5": "4BMWuAm3bzueM9KDJ3XzzN7Ru9dGesskEPUHTFXZn3p3vQySDaQLgf49v7ECNHhJbUfVvffSmk7GjRJZwJrJwCex",
  "key6": "3izircmCpTJzfeU5oMKiXhVwGRC25G7pDNWD7aTSCLf9hUJuPfXcPKcJxZegqWPYxttUSrDjkQxXAtB6N52iYB33",
  "key7": "5J1YQVVcqADxyzrypx9wqwxgMC1z9oyrBdgqVsPhAfTXKqcugTFV4KCUNPs7GGKrqK2v9d3i4C4LVq6k1fFodK3C",
  "key8": "3yJ1C9fLi5NUnFhNCADdmwzp8oxyZ25icQhaUJwRw9b9RsUcFB9t4iCHnSRXKNUnaPXE2ZZyFwdVKP8bRwYKeC5v",
  "key9": "mJ4aAotBVfV346n9aAp6tsuiQRNeoUwZqACR7z6eqeqDEhkC9aAKs3LeA5j8QPgFhssVdzdUqTCC1igMMpTZxFs",
  "key10": "HARJVXJjNHAD8HWuEP6KV8gEkCpSD5Nw89FEi2EvsowrbRibCSDQSWcNvfrWLDZUA8GzY5EijEbSjyQPEayrxFQ",
  "key11": "EtkJRWsEmHG5Etbd25iSBmamVyuvn3Wc8RW4FPaygAS1Wdy3qWvbmoPrDNreWyNeAjCofpBqQvkMT6GwK5ZLHCF",
  "key12": "Rp7dSK1sVvfkWatedVsTwZj2s1g1rxC8ngftrtxA7r3RyH4CWugMLWBwzXCmX1jvtmuzmnquHRiKsVY5PB99ZgX",
  "key13": "2R9WKRkn11Kh2ftRpwrqhDXhS7JviZbBBc1D2eVf4NEP4AWNgP98KiWuax5yz34BsppPgi9Hmn9ymk14r68q9na5",
  "key14": "5bMSiJ5WCkYv9nznDwb5E77pkLrEq1pVcBwvorC7rPkAXRtfUHhQMN6N24zzaMFhSazmWaTJGCmksNEWQiJNeXnd",
  "key15": "3NNchFTEtWQoGD4VnT9K9o6xsAsZESDg5sNHQuofGWVwE41DtB2uF9stKRPPp5TcvP9rp9AEkuc2K1Fu3k9SJ4VK",
  "key16": "r2eKNC51srtgr9sXU23Ho1ymrZC3bzoUWY9k1svyikGyyvjabKo6RJNwF73W85DWNj1hzCT3iAtvK9HA1qrd9Bc",
  "key17": "Ak1rvwdWNJa8YnT6fBWUz2jcAcroqbiFchX4Q7599QjyUCW14D6ofhSxjbobhGwjoQNHTtPQv4JMmCVF5TFt7Eq",
  "key18": "4TEypH9kpcaydC7epwRfbDiwBmroLM2UF9umZj2diuhtTWepTidgQCkY3hkXpm5fXaGREiuixYVdJqbYpqYF3v5E",
  "key19": "Fs2Ey37s5SafL6Tvk7jnApEYtFKHWzjTpiLSbkNjnp63i5dYAN5TG6mixEhuHJt6TJgb6nWur72pS6FuVDbmWHk",
  "key20": "2u4ZeYx9YeKPnazVor3kngE5bsSRFgdvygG6V5VNkAjBJjG6iB9eMsxbs3SKgUjSP2tqgq4YtBeLhs5S4brv5cTy",
  "key21": "4Rm8Z1uxX5f1GQmL3asC8znjaP5jYb3xT2dm97cYeT2upcuRJWtxTrHg8eGGDGviYAP2ecadk9F1EskWzFmgguTq",
  "key22": "3mtykjcFPzpWgbBG7b1XULcJK9Q3rFiHjJSNEzZNbJ1RDFk7kuLpTrgQNMRLvxu93tpY8P1CV2Dcix7cmK64TFRo",
  "key23": "4PK5oLS8oSTdwzv115XsMxwNxRxg6seXR5EV4XahMKdWJHBPSDGbAkQDUjqcvCxnqe2fR4ASK3EumvCFrMbS8e7M",
  "key24": "T2dwoGGMnVRWoedvfXN25tLcGFS7MMqizCKGgNkN1sEzNKU95nGBvtSNtBoocf4V7SaneuWkf9WSj8fr6NW2nF9",
  "key25": "2cuGDCothUbd4kVqb6huWtKHgwTm7fHZkHMEGYED3kk2q3HjyTZ3dzyq4hgc4AJWF43WsRXPfjLcWJabUn1mig9m",
  "key26": "3ipojwyYrAXDoxCw1WdZyiLTd6stW14H8p3JcJPppU4u6en3U7Jz1n2r2fKFQK4GAkrmRCACrNvqPienMsmu2xqU"
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
