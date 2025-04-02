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
    "4Zx48KK5E1PHFMW5BWhABeZgjpLFkMdUndgTw66HTFFCyjbuobATgytr1dL5SPM8hU2U7RWwd5CgNkEYGgjqGHe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RzpZ62PJRhJDGkMjvRoSWsRSyHYaHnF1zpiWm79i9n53URza96GkL9UnLezkD8uMV5DyLmHFurggAr1EZALfH7Z",
  "key1": "3RzPyG4sM3u5tw1Hiq1Qd9gbjAnRyeDtPhZ5u5y6J9pDUgMukH8qFrvdTgAPa91HDWoSGWje4AQhUmexv5E53hXv",
  "key2": "3P2EUAPucwL7X8XBfcNwXvCmgvRPxJMQeA11bEMAawnoR6fntop9LLZYtsbVh3KfMM7fvk9ZSjRYaNNW7XJYHNEW",
  "key3": "5bUS54V5qqpejMon9i58SKRGXVmK9rrNQuiBZ1RZ2dzUQUAFTpyDguWhhFFGgE1LGMo5RrdXX7k9V933KXVnfXXk",
  "key4": "3eyL2zQpjyfSUQFP6w3XDanS3hqUckKf3MarynBmtgyoQnevERJFmDLP39kVpUq2xB2UuNhU7zqYWC9PsPyikMhU",
  "key5": "5qz2ZmV4MVuU24rEsTbAhof3oqihDEMRLqNsQoFYNDeN4mhy8sCJUjp7r8PtRqaJRX7MRSiJJe9PyevrUvofiMgC",
  "key6": "2RL7rxba2sv4N7uZAGiDcg9LkA7L4xi62wL7Hnh9qibSpUrV2D2CkRoAkw33t7oT6YK2uwYxVpebTAVz5fwA9Xep",
  "key7": "244jr6tZffvDbdWRb6eUrNgbARiCUhGtEfvPjnixyuUJJ5JPyeKPLvcnbhUQuZcgujMkb43Sro7XoyincrNd4PpZ",
  "key8": "3v9bbYvWm2tYNcNmZipEtmPcZvQGiq8PJwyax2t5AF5ieUThoLR3CHbSXAYeSVDfRJ467bm5zTtfxkPFC6Y7PBqp",
  "key9": "8FRMHvxvYTdjHDSATqZiiePYDh3bw2Tb3HWkm1p6JEhupfCDKUXMu9N1dU4pwWUmL7q6DCuQnkeYsgpqbS2ZHo3",
  "key10": "j8EAF4PeFQX1tEpDL7T7coc6Q76QEWEGz9QsJneBqYxod2oi6dwjdeewx4aE66tbLpitK65DPqSAAGKYYZNkYck",
  "key11": "2s9WjtR5Y5JwCbFqhDe3tm713a1QY9VwGRodc3fVQKUbtLPUYjg2SV51M2VsKwRTeEregWZ6MbkMbRVdQmtut2B4",
  "key12": "2gu3CdeLEzcE5hvoq6z1jNPK6kLRMnAvvQzyrY2LpW7usVkcLmdPTGKPA3eZ7gDRZx8Ff76kUBbekSGN9d5mWRno",
  "key13": "2vuDrQBkJSJPPTJgju2BeUrsMGgff9DeBUaq25bikqEot2DDQ8oHvXni8dgz6YiGpTWHYGayCXTaigzrcyoFste3",
  "key14": "21zRogEcteQvGJuENdhVmh5wBY76wzxZiWKXmLnGEedeZ6cQMQgrfbDHSC6kJXZhqiC2Kab5NcBmFKnfWBFiBd2T",
  "key15": "281sSPMG9hNfsJsuVerC5QHvKhotGcdRBkM9hD77LSMnswMCNTqJXoEDEd1sFPpmiC9Esjcz9hmdnDHrGUQAWKZg",
  "key16": "cAzUT6XPahnbgc7ZmC2T3TvgMpvSYS9WVfgo2AQE4urFUuZfZKRihKHPNdMyMQCw9RD8nv6E5oFhrZw8DQBZrRF",
  "key17": "4BnQxFHA9phbDvgqJ27V7nk5w5nEmSzYAn9rA4bybw4pPRe1uqNUczY7RNV5iyE4g1UA1rCqWV7d6r1qk1sne9FE",
  "key18": "3heU2tvfuD92B4VpMYHDFtwga7MyS45Uyuo7mcDpV2KxuLJVfpLKm2BbL6nXT1dACrGdSJpGNwP65jnhuWC17oik",
  "key19": "aoLCMdDiZ13aTtjg2uReCrkkBPzvEMkPnaMv4KVj57v6LzZ4FTRdEoqHRhEnh7PzsYktqpv9V6hqk61GQJ946rX",
  "key20": "3yGbBrBaPtVpX97Ae4eksz91WBhuSXFav76td3ttw9VPYSGbd2QtdRt96GUwTCqMtRQp9WV5E1zyEL1EVquLKDHp",
  "key21": "45qYU4PtcwrsajshQhjAzmy2tghXP2KLQkWwC3safSE5szy5Qjo1TYvUaTGrakSwv1j4oSoG5BVmGLNm4qi8bBwi",
  "key22": "24hvxiFKXC9qdfcBoD66fMkYkfmdSsDfw8f1bBTnU3XHPrn12fPYnpZvrn3SRRziUa9DTHDqZJ3Cp9Vdoe1p6r32",
  "key23": "4rARMJGqSGHyCHbuUJGkvXcvAGVtT1e3rq26Z4m179hsg58Y2vgZvTR68i8oTBWsyHBgjFgA28Kzi3beR8twkE6a",
  "key24": "2SxS3zVPFm1PCKmRyqaY1Sw38rmK4j2iry69a5nGAmvsAd3e6tDwWxoaVKiBeTss1MuX86ug4uRPZEYtXmJV1W5v",
  "key25": "5j5FKvtBMZShaMWjfErcywb7F61sVwmme5RLSjg6nk1nYk3qKc9C7aAdLoe9v7Z1tcDZY7ohz28kUe45CeqU6hQB",
  "key26": "2bLoXZDvzsdjWZn1guoM743ogPDZXCtqv8BfrsK8pUwyHpRYmVPr2C9hWoSc6Qeif5zr9aewLqBm1wcF3yLjvaSZ",
  "key27": "2VWtw2FfRUwKBU5cP5HiGkWcpDgs7F8pYfg8hnaxKcuKjcfznYij2CtJuCXz5dpfCAtbUXgCojeUHJKTCKD794tp",
  "key28": "43X38sw2JHNF1k7K2xyBeLMYwUVk2iT19SLXEQ5eq69NME8hVmDHVA2Vffnrk31uATLF3m7BssJsFcFmyACjtTrD",
  "key29": "3Nu7xHAzidR47bju5yfxbimdrzWvTa2CPYoUxARNT3z3aRQ3zRxt7y4RSK72m1xqeCiLmaWdGjqQQcdooqQnJeqt",
  "key30": "EFK5Ag6auuGjd1UN8W1PfkPygxrADK2fiyt85bjyYRQg7N8q9kqVN9GeVex67sBLfPxkukRGzv1VK85mp5PvWr9",
  "key31": "5Ti9euYtwHyNciAcaYrGCq51eHCB3xayuScGGwvGDtpJQaXkRPwaPxSk69fQW61MDXybYuJDADXY5CU6wp6CBkoi",
  "key32": "5gMWbopUfKJDw6tG9z4wHfnh961LxeLDoUYbhzG76a3FU37McdZ6PYmDSjtr9ErezyCP7rBUqbFXTs4pLFNpH4Rk",
  "key33": "2DgyafzSQeSNyiLq8LF9hNYNCo8RLAekcvsqD1o6dQNJiYRC7WAvCMv1nVWDko2TfBCTxKGPoiXiHrUK2bX15ier",
  "key34": "3gr9Ah8bJy3icasv9942hKam26YLCMBLka1rp9FNBHyvXrARJjMxEASK4jdgDhkNU1MqEL2TkhKfkBUCrWcueDhe"
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
