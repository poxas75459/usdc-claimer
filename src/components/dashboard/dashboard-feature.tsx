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
    "41Hj8nbBAqLd3dnyde4aQuYFoFygkvDBBh3QDXEPCZieJiH5zKo7qCY5kikvk9QAf3z8rqRp7Vt491yuXykG955A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KgCKywDYot2BVkuVkp9BqJy3LxSGrUcFmuQPQ54fC9urBL5XhZdrFBDJggZC1u4w6FEfRYkMQuV2vj63Sdd5eFk",
  "key1": "554H2spAemXS8xJ8jbHhteEsgW7uGoCmUkCXywnDsMvTEMHZV2LFX9dCbQBkwHKQnnCefkPBppreyPEeqNGgTtCG",
  "key2": "mLjnszZMzU3eKWJrybV1YqYRwGhpei4twaifnwQdak6uwoU59eXnNjrwWKWR8zR7knLh3kePXNRRkM7ecMqhyTM",
  "key3": "4XFhJSU1SCC1KR37gnhKafCtuzcxZ9F5GKUuqgquPKnqS4hGrpHUnsPJXSnbJ5Ch9VqPbnaft8WUFBJFeY9xFz9S",
  "key4": "2P2HtTPSuVvVrrVarHraEpGQQrpUSrdeceERkKet5ttsgJLY5bbeNXc3vi7tD5z3fpY2UAKDQsec62QH1m7kDM4e",
  "key5": "4SRgA1d4F1HsxLfJsaekMXALgaZ9WGUC7mc6QUVazRKpjScig9dBfZCQZGzqziacB5KPvTzMWdHTfxZdSxWZF7dL",
  "key6": "5pi1nqHPChqwU8aAaAzy4nUDVXqWQENK6Ey6GqoDdHvWT6Cfejraj5GGm531MBwr63xFz6RhqGMHVmwDaBvJneMy",
  "key7": "5rJjiFLyPyPVnEABQyrC8q2oEjLCe7B33XDuUnUA8iephhA7pBGv4GY7JyRFGfUbK1UBESDHzwsYJw5EgR5MpDg7",
  "key8": "4K3m4oWitodwnVhKffx2GAjwxfsfepuRHEF2LfqVZK6Y93synPCGNCXDQU3CxJ1Kx7FmEBwECY3nyoBgXdwGKB25",
  "key9": "66swYzXs8AYrpnyuq81gPiapsR86R485LTDH2VLhZLAwtZFZcdESa1KNuUr9Jc4VLknt9qqFSWs5KB56a1XnfxLK",
  "key10": "2CSAZbReGYmZh3g6Ya1wP5dXcEKouW1xSCWgVpcfUaHZfURpTkF6xAdhcQvaGnwLePvBMaPZVqBvJCq167DJ4cc1",
  "key11": "4RPwd5jXzXePWTDw9R1RzCcjiDdoH38uMtARRiCARtVETXXnE5pDFsnieiVPnBPbxMQ4Rb3tmaLxERV13eX5QdNb",
  "key12": "2VavTWNt8SHVrWkh9e4mUGHxuisRR8nkUuC6LfgscECW36et2G3zWaJko94ByecoRdmQCrECWdWyLhWNFYAp8EoC",
  "key13": "582c78wxBsMGcwaAPN4ifyBidNckrPSSa8cbDRz42cDj53kJbL9Jee63ptbvgUSFqEuwzPAf7NxmcELP1wZchjTx",
  "key14": "2LzbGaYatsuZ2pZuPckHwZtk6NpANTCpuYbriVfAfD1fTJBtpEhqHnExqNDHRDQrutKSM2WsazUyaWVMue4xv4tg",
  "key15": "54yksxL5sm4KCy56muqVaNK4A4o1TSt4z52tjnjMcXiaLhSHTKi948mQYD59UYxLUwC6CNJrFTm8qJo1VLfu6tCN",
  "key16": "5H3EdnkzQd6ZFVZ6GPdg9Lm6SY1JyztMYWXeR4yy9ZroZcjhC5AkK3bAYxkEUBpBYBKi3YYt7fTfkmWX2v9GdMHB",
  "key17": "4YCqsRYkQcwUEyPYxkHEE38Wsa9SwvtrY9GhFDRiG1B1mfz62bXpTHgHZiCBzN5F6NP8wJcyNQVn1mgR8nqFQ2f3",
  "key18": "4SE1eXL7ajjj5BPBJmw7gmDFNRNMCPBpQ5wW3x8Yc7ZzVLS6wQ3hZu6ZU93ujFnnfvN5HakjVi8wYkgPMTf8URCG",
  "key19": "3JgyjqrajutaVTuMPqZkspNFuMQXxvZmNBUN1fmkaVupHkrxL98XMd6d4Cb7DXEFZSMvPC6MjYvYKYTxescwdNM4",
  "key20": "2vRN8mLm3t6bp51W86Na5Ke5CmAiUcnntJnKqfb2GNTNaLnSn7Xtg1kEwL84Td97AmMJPrNvGgphgp2fwEXHvuuy",
  "key21": "5hn1vAFhEBEFzgAHvxi3gou889yzNkmbUpvcc26N6G5kpkxyAm3NT7nZUfYkAd3Zhx61tvoD5hykAiDKpPJQ6art",
  "key22": "moPRmS2SvUa3j241LwLBEHU9sdiv7B1V5gCZwcUSmm8Mf18XdEiDBas7f1odSZsQyr8LuT4cu2e6BGqdnsp6erM",
  "key23": "64agTNLeMJFL7VUBgYzJKTSyWsUjEnrHvF1t8C5Vqwp5VAdLAZwumJSJVB1pcbabWyuZXBzK2DwZnZyQuNbnDTmd",
  "key24": "5DkDaPm2MXPPRz582hfZyD184PFN4eyUkx6UZomviEXYvyFnymg5TXTFwmyvVKCURbabJLxT9USbEm6QvjEDVhNe",
  "key25": "52Rh4pvpewqzojpcKh9P16Lbr3iuev7KAZo7Lib9CDg34oYSZaG4P4rkRZYgLtwCqihYFaRWr2dg79sGXzrGER7U",
  "key26": "4M1SYjHAEWFkZ8PWekxB317gTTguyeAKqscbuUPWEXnsSqaZPFpbiV3R6fhDh7F6znfQ4VGGV5iMpp5vmvup6bDs",
  "key27": "sSRrsduzEtMzEGGV8uabQ9iT6mEeQCufNGs5kcYCSTdM5N6Lk3e51ikEhLfNxbHzsLi97oH8Gc7ez67bryqsRm4",
  "key28": "61C4gmgraTx4FtbQkZtFsVP3iCzRo85nxxhNTzPtTNaMY16N4bn7exvXw9RDsq72Xm5CB8quCL9TwVBQ7Lsfw5Jr",
  "key29": "2dxZfjx2vC5aV4f2CRx6bQiGYaBefNrxgVtb6AmXJjagY7efi5ttgcN7y1tNJ51uN5t6ZuawUAJ5s8cSwARzjwcZ",
  "key30": "3sW31QfJSbcfrn2Zh22CoDtZSqsoh8BRUg9aDk8mdZuhMLQPwXuwe9AbWaKsXMd4TGB7BzmWAQB4iWLmtHWBitaM"
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
