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
    "5wXyHm2fsdXCEQFAYw35zkkFQTy7Zi8XtQyaSo4dhsMZ62DQxgawwVr6U9wE2D1ibPZBNo8r84JqEGM8BhvyjGvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N1DiwfbffATAmFwaTaWnL3W2KwHm31nr1WSUw2MucCJXsWQ1SZ7UDebXe8e8jaDAiVA58gvm9WuA8r7xpbZfnBw",
  "key1": "m5881p3k6B9gGWRV98czk2FaZzuekrpQAdq6hemh79Tq2C23szGQRsmjR4igkkxDbiDbzf1ju9YDmTPCdz33zUo",
  "key2": "51Xyvs8TCW3jT2VJEC25KGeYBow7Fowo9bfws2M3p6o55EB3FvwWUsaZ6gjRJyTWe6nQViH2tAkhAN986NiuZZn5",
  "key3": "5KiJm18JWoHdzHJVEHPPWejSnirHE6d681v6pwzoU25YEe93fk2277yeLsUusFbx2s9zjJZ81GchAPMhh19vYHhc",
  "key4": "3aqBCjQAvmraGgkUWjwmBKb5Nz5jw4gWc6ZtvUdRsihChuVUU7tKTBJfc531p6Af1JgMU3yZmBPPT96fuQPuYs2w",
  "key5": "CCAC4JhQPbccquCcyuJYJWvLkMBBAnWbL2HrTpnBet4FT76UAFkdFLujRda8eoSRiULxkLYPsNLwqTZ7BD7MSEG",
  "key6": "63n8VSZiBjxLkSiMR7XqN8C1Cdt6y76h1synZtd1Wb49UkqCFiF3ZPCDtNkYGaEQsVrv25u1YRDUqJYhhq7cjor9",
  "key7": "5yjmUZ1PVaUJYTY9kCdkb64CxDG4whQVoQgUzApAbyTJxN313cFhxbB8yavcJLPB7mWcUABtoLzurnXPYk5xANZy",
  "key8": "3TN9Pnp2MUxcmMTwDX9CabLUdVwa1Re55rTh7tZBs2FPoaRbb23gAHPy8GKdgqU1eKBqKSFJYFJ4ofcyXmrjGM5s",
  "key9": "3Da3W7wXo3wyU9LhARUaS5Hz6CtiUs865zrneq5ggnXBpXwAou56yxdCRSJztXHZQwVNzdfxEY6XyjcTRQqaoN2N",
  "key10": "dWk8LMknXvGSug1Pu15QuTTHwoKUFY2JnHLEgXvhqT1KBJgyB2oj3YqQ4pw1ssrWNYExcEW1i5feXhv4GRyW8Qj",
  "key11": "2Lni7W4aVMBG5Ewjj3LWpMpBTZSM6Vd53c81rQu1CJ5moPNtmujy7vs8z39cuQ7NVwUuAi2P4YexKJHQiTJdpNiZ",
  "key12": "JvpfvS48CCRPwWvxmHJaSabnk918yQb4vJb5BvMpjj6UpNe2xmN3iVLJ8NZudjg2ZA194cgFuXCKgDRYaSNmyBE",
  "key13": "31wtMWgUUwcvA8PxumuXjfQ7nuBFwhG1C8QbGjqAoyiUukKn4iR9DRZWscAL5v2B7rocgi6JyFLWS8BuGgLA6Vdr",
  "key14": "39wvWzB8zYSCT5rqXRJaVi8gthSqPEi7p5iWgVzvm7nzrLaLDH5g1gyL7BvfvMJcZ6a9ZSkyFxWZxY1wGi9j6Fie",
  "key15": "L1UyQwjKC9U1Avm4K2M99Ax6tiKUoi6a7uBuZqw6jDhDv7iydPF26v1M9dJxT55KYEy8fjngcrnf9as8QoU21iz",
  "key16": "umxKrLs5o48QwTp9RrM3Vfhax8Vp1nUmuXD6y4Vu7s1jY27JUmZuHjkRHvLdUh2N459dmTthVvFNwnDXsbdkfy3",
  "key17": "4N7wyziPV6Eq7ZX2UTSXE39iTDE64typYyFTmsJ2an5H8MJkR1WmMVhNpN2WqRGMQ4fwkgSHTWPQyhksGi93JQ1B",
  "key18": "3a2VHeqG4rc6w2Q3wN3LheW425w22z99pR3riejGFHwTZ5Lb9b3x1wSxV5LTMTmfjzTTrEm21NLW3c5iUTNUEM2L",
  "key19": "41q3d3ynKghfTWz5Ltw5b9VW4451GfeR1WLkrNHMSvWtDRbFr8JeBj8wk7B5KZPEx15hQFYqPs4ThTy11cR8WCiH",
  "key20": "2iMBzFXDLGvvZnkrD5gfzHMJL1zkyHw2r7rvqZX8wqpTLHpgKbDbwCPqsob9xp1eUsNsKD4xAxGKt7wQ55w1PXrY",
  "key21": "21d4Ex13msGg2jdvu4PszTGzGb7nKsMgRmz23jZ7YUxpHtE16q7TNNGsdTjUnsVUN1suDySeetBrWqto64CCXEoR",
  "key22": "5HtjYUMm3k3H35nKPHKMvzY2T63r3ei5635UKWsw4UFsPQqmigv8v4Fgc254T4jw2dKgrnVWQqab6Rd35u119hai",
  "key23": "wfCF85b2G7fFChM9yCKQeMWgxepvUs3a1XUDmYKpEEznQFTT4eW2kHJGbgs4sxAZJMgJoxXmr2xLESQZunHSrex",
  "key24": "2rJUpJ669oShPY2WN8CkntP1wTKwxFUzSVnKjHesep4KnkXV8ACk9WkuRCiANAf1xyb1F4fnrNTttpwQMxNzjgKx",
  "key25": "4tgEgYxvqxaKFokB7wsmxH9p4ixFinyrJdHE6VC3SKDqukL7ER7dpwEEf2R4GFUfEpgWFoci9cmGi5BNXNmFb6f4",
  "key26": "2jcJJqhoEHNkKAg4LPpdqbDPVrVYrZNaFXtiedyEMw2NvWNGV5kmhDFwRGCgurJ9JUiVrWaZJud3SW6DXcVV3Ko6",
  "key27": "4Td5TiL9AEjCszCjqVgBKuX16j3d5C8xF5MqgNZkezscYo1uYRqCjwBYeUg5BAHZADuG6jZsWAB3byGSUAEKokc2"
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
