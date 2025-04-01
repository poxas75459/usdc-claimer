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
    "n945FhVJRZ9xrsT26KbTZju6qUWiJqtPyqf4ggL79fr2rot4aDyFgffAtu7QmpcYekqaSxyEPUrcyf829ZMoqpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rzMRbMCEqynfCN2a53U1XdrcYbQDaPosySSx2DHXDS2qghu42JGRBdbGC79UmoMd9VPTyLJ9cCoGZ44U4L9sHkN",
  "key1": "3pV15gfaBK9H4iNaNb7nBLKMkzvB8R6AvkNk9KE7hGtqKwAT3s9pWYDTvF1aqZRuaTJv9H3psmcFKPhgcqLJSCDn",
  "key2": "4Vu3HQvCf7LhaksuF1Y8h6Gw3qPThcZjRUupxB7BQYyRg51tQ4zRDXThkmGPde97Y6ARvnqR7N4bKPdxSavwjzGe",
  "key3": "4Po9n9mozM4mVUfriGtTAyvAFrcK5Zm2rkpVhiC6gPPsWwvTDDbRPPeQaqsiyk4WCJawzSPP6bHXM7ZJ5MvgqMj3",
  "key4": "2SqEFLgrqVG8YgwWcmEcQFU8sU6jhxbNNSrMrqQaHwePyZXuNfNh7hvhhACF8tmFgEjLGec462AggHkwCnuspX3A",
  "key5": "2UWgdpJMqrpsyDkpCc7RcrsLU8ja4BwmgPkwSVzVcXGrB3gdHAAxx5VHWJfwaoMX8eEAgzB1tN3hEKnLGbGhkUKW",
  "key6": "4USXxaad8EimFeX1X21BjuzsJqmARa3QNrq6eicqVnMtyG7KQzjVayPhGcSH7yMBDYGiaa5tKnCiXLQkKPCTTLtY",
  "key7": "fgnNFzu2STCWP4po2e7dwkiGaxFsE6qdA1rVzvz4KerkERgi66CZo926KNvsrqDekYUfS2UhytDgsYNj9Kw5u7s",
  "key8": "5FRy8myUWk6d73Wg3FfdTz6V5bAHXjxNBxoTjMTaMHWQ3Kmz5g6cXAzbZcyVWnsfV1HpJEPfzsgN8sYqZAwQHBAW",
  "key9": "3iEbPfAjnxyjkTmAgewWqxVdtZMnwTRDtLatZMxnHmTYGkbeGD8FyvmVzsXCcbRJjWuJkDwe5CimMoQQ28hGHhto",
  "key10": "2swkGPgk7E6F8sYhgBdJwa4Fb6Se5C8uGYHk1PkNMxhXwr9nuz2DFo2G6CKdBeKaRZfFPRcCxhX5ht6fGM8ytyts",
  "key11": "5kT5KxoumRJZ21Gtg9Vr8SCNjDHjyL2m5VKkcrUXYBiizM6jPrpaJAjqDbTBP9apFGCTKXctFdossjfQg2eLyt6D",
  "key12": "4yFR2qjGKMHrYon34L3p2bEjHMz4PqK8aFjf4ZBMNgh8dXVRUcBmQbkUFqNZDq3CQ19XhKiT1Bm37kGBLrMyWJJs",
  "key13": "4QrCacZBRsEDMxbqeyYe8HGP9t8XVApsDTYrRiSxgUjnpvbFnp9n8uCNNSvvJt5gqSh5KBEV24S91bEE5Fak8AK",
  "key14": "5zfhK5xU8LiPRi9fSL96hRJRsQb66gQs52BArPHNYrMpevXfP5caFjEq9UMYrxiLxJ5QZczeRZGmSwFiHHLzTxBS",
  "key15": "3xMC78B84Hj9pBA6mRQEw9zpEsb18heNBEgUy36vqkgyKVc4UuA9W21y4hbX5Cx1rspYNQNTnujBwEFjVEA7fjED",
  "key16": "3d5jc5uXHK2VHpbBgR7R13njAY59aQMCChYgR8JQDNvJ9YBM17sYKGFqPfBT6DicBqdFfeQMUK7XFZa6QV63MtKQ",
  "key17": "G4TG8VAyWzvbbRRabCqCXerEUj8Pn1wEazQQJrePEraDZWLDDUmLcjJSt4P6DbNA8XaoSKL29fV4k79xYQAkmpy",
  "key18": "9FfiQDb3d5yttiBaQPWSybWtpaTW5GZCTicsrSJnfCJsMsRfhBD8sTsicJvGkgZc8iKQyfGVRY845J8wR4qfGte",
  "key19": "663AkXCXgiZX2AZ8dHpkKkuPyhbV42f5cT3pWarrFimtisfcLy7szMmhi8ySFumtVqBQ48vCRyi7wmgqhoyWt8Zm",
  "key20": "5RaXqEAaXX4pqYGxvdu8Yc5VP3ouoWDZoNsS4KhMtgubbPizzxSaLYhV9jhmdstXFXrj8zm1xv39a7oPRSG8TGhS",
  "key21": "3vPyHstbms4eu9i3SrL8aSXJaTwHSpSkXKJgCvKrSHRg4gcZ5MPkaHnehG7QPE5obUoZ8yaawi71eUfPGy3B6DLa",
  "key22": "2WPs3jHEpRsPZy8jZ4QBtWDySAGCw349M9So5iB2fUH5DShD9Se9FVPSN1cxL5MGbpUtS17zKreRyzWgWT2dwHiw",
  "key23": "36KShzXDMi2mFDTvh6gKW9dGfuAYYMJXpQULQFmyeV8hxDafejGnKJMnxLPFLJfFssarkU5DxaysWkQV8QrkQ9ri",
  "key24": "4H7CJZzPEEBQCL32487uLjYc86zweuVRWGyLjK9RxpTBpPhTCQZyh8odx3T7zJCwbhawrVBdjxt2b23JsLsi1PJK",
  "key25": "2caK2kEgK191T2LjcWHRGnUxBDWx7X4BbyYT1W2LzJL9Hune1q68aVdMPvHQeRyWoZqf2LN5k676MkvJkKnzcFqg",
  "key26": "4fGB9yqqzgR9Lq2ZkokmSpcFMiSLxz8rVjeruEoYWRoXMHUEpmRdPbKLgP4XCgvYsAkyPk4BJaQjKvwvKrfT8VWS",
  "key27": "5bsqCo6fwEvvLFEoD3Sc41kXrej9LFKZJ1LvnuFSWc17wmwJzESYV3uMXZGPK1BbeZ5uHYB81gqBtyqVMjkxS86b",
  "key28": "3mAXcrwRXBvgk8g3FGnkC5YSvwMv8rmKCK8LnChYoVsC8U7s3APwRCW7CH9Ui3mbvH71f61EZBuymdF6hHJFQwhP",
  "key29": "5f5SVQRXjvjiBmxuQC91kbBkj8yP6C8vPfgkdrkgV9kmtMbC53JkBbYKqv8MZDXiRpsdPxwgjY3NcpGCs5aTteMA",
  "key30": "3xSvHAjksEJ79bujkDTNdnLP6hac1nDmKFZQfQaByp4vFp3j2Th3BvSz5fzsTAV2f3zqYy8MDa9orgZ44TZaNGSS",
  "key31": "3bxMmcojLBDiwL8fwyUABunubTHFzzxMP3b1T3iF5XKMZJg4hefp8CJ7E7s9WTEdbAV4VCJDs3ALHLtiuJVC79R1",
  "key32": "3AmrH2awZNrmbz5wNL5rP52aPyNwBFGLUiMFjRJ5EShsqfza3AKz71kbnLVRoBV8X4LmonB49smfiXjHgZALTtmo"
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
