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
    "4ZDW336HfdbxH3xRCA6oeHnpnD8RpFy3pNkGpfJ2FkLGqpSXqcKCGAvBZUEmDcqkFg2qqgw3qYyveaqLM6HJKsXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y4v5DZyQdKm5HooYMGrvTYX3PZDHhBiffVKEsWvYz3co46WWjSwyF4P8sEi13zsr5fLgMMWZhRmCEbgUZ5CRKxK",
  "key1": "5iJW5iAAYNPCcWaQJ8k5PCkZQL8CHzXJk84TLpCfgVwruLJs4y5VeM8b3uL4G48MGnta1wMAjj34osfNX9ZehymF",
  "key2": "5PZrqoBWmHRRwZtQjvyMvJVw5g3djdPYzMPaCr8ogYFFjf1A98b6sCnZ1hmB5vGiWAXftZTuRDxk9FC15w5HYriN",
  "key3": "2mLrZzQqU8KnsMmX4EJTSUo2K6wFTtzmkvDNkz4JSTamWZnmDQox898SWrgHgNqvzVJXtnGMvaA9avzSidf33178",
  "key4": "339Kg2sjDDNYViv3yaWkKEWDY97QPBZRMHoQ8qRioC8xEoY9XJfo8m1Q4NdJgxqhY2jAE6Ky4yrkfYjDEf8MRVs5",
  "key5": "3sH9EVRve7ULACvc8SdQqZWaXff7EzSJqaGzwgQ9hJ3uoDryZG8ixBxyABgf8TyNuKZLK2LqfxFftgcpvzgDfyuD",
  "key6": "2pTR2hM9Cg7pNaHehTbB3QkkAd1uJBeJ4KAPBLWdjXcfXS76Ykqa2oohP4Wzgux2LGHTjpk8L5bH9Rw3wPNi6rwz",
  "key7": "34dqMjoXDxFqqCYZAZJv7QzvR4UvhxMGZmy4PFniDY2nCkpoMcCPScCyZtpEQ7LvHFsvmJrNLfsYZ7aa2EsHeD2q",
  "key8": "LJw7GrS7NCrkwWuT5E6YugQWfLCM4BqNvyGdN8WZEEubgqk92EYxgxKTfFwTigX69xCYva8G2FRHiXLXaTdy5fm",
  "key9": "2E3bcx5xFD3XmjM8wkfjeMpcMUgQwbY4GzHEUkLcXtG1zXvAxkU931YK7HizTG2N4TdeR1qeiocwTtUky87VVbSF",
  "key10": "5BtJQhJxkC7YpoA6HUftY45Lvp1jqdyueMDvF7d3vT69poypcg6sJAFHyShzDW6GwuUSy4ZfLHgAAqJGzmQTkXGw",
  "key11": "3ncafdMz8DDgvUTHQqqLRpbSjmPes5WcmYkwQ476HiXJcFChRKvN7oK8xy9HH7LMpsbDvJvzt2MehpiXJrM3ntRv",
  "key12": "Sk1kW5fmHJV4TNjaaHnd3Zsvaox9YxNhWRYNsxvnwq5W2QTwXJLPkKNcyuX4P9iixShHVuYTApHGCALB7orrYTX",
  "key13": "4hnhsW86DBQyLQUeDC7sxoyy4dnkWFQvEK91obTaB3G8zSK5nzAuDaR127vNVomNMpkg3qbUsbegFs2M8EbyLtNP",
  "key14": "ScFxCWQTfwc5X8Yu4mouozT4fCWe59DfDfFv87Vv2zahcemQQWPzsCCZoV1vAoo8rwCobXbgmRFbiBq5qgYf2pP",
  "key15": "5WfoaiKLYutmeQRruZRq6KaKhsuec25wJUB8Eq3N7WLHLFn4zQtoNwJLmuqvxSDxiirFhyWo9jufZUVormNfNFh7",
  "key16": "dTd2bbp96n2SXccmVj8QA3ozTAcitRUEugDtd4RHKgcF6SfCY1eXURfbiG2ziYuCTieAwKzHZ7tukPpKcr3iSUR",
  "key17": "2DPCxe58YsW9x8XgEa1mgVdWxrX3ofjxWEYup1zZABfJW843ApG5HsMyNFxygPrWUpWBzu6mnnxkXoG6Wojj89ow",
  "key18": "2mLECZFYPDMxRPH5MS1m5Tjn5qXsJhFX2JuFRDaSU3tjt2CTaqLqH5BarTHpz4VAbf7D5eQPpqtUhvZ46sDuUKe9",
  "key19": "2EptjB4mojghvJB6kgBuYNkaqeJcwCFu2iwuFhW49L21LZeWeL5REbX4JZUmKXz5s2fsd7V5f49Wt6AT9hKgBeWM",
  "key20": "3ZfkueV3AF43Ly6vLt2id9DhHKizcjX4An5jGWQ4TySD853xqYsx82Ucc5beGTC84LbNRPb3SjZzseS4DqgrCo9M",
  "key21": "5C215kPM4K24wSgWfNAFjggBT5CWYsSYejfkJnSkWCpQrBH86u9DPNWEMpFdtLqBruLZptDAxVcqJvKt5vcgoqjY",
  "key22": "4jc9QcHncxZTCWRNLn8po8H9LHD11Y8gQi1gQzUrFqQkEwtJGa1nFuSR6PJDxLphUtQriD5Bh7tCncnqrv6GghPK",
  "key23": "4eSESb92928UERwahDeL9eNS6wUVgeUNYa1WiYP4LsoABJa1n53pLC5kU5nyhgv3hFgdM6CdRWr9445stbpYUEcg",
  "key24": "2HYdgGTgBAGaP588Bf4ucix6nR6m1yuKHdEdVvj1CT3vLdDWBAfGSsBrV4rDpNYQoVZtP3b8mtbQNRmFmee3GEcf",
  "key25": "5g7beSpjMFVhvcibqVNq8mP8fKpPSt7YT3QdYXfNLDmdAFrXRLqTtR56V3dMGh6Y8s1wR7zQPC92zyhf919855Mq",
  "key26": "4F8455DgPB25Jpc3K1h7mFEeSKE8NyqUsZrMDmAVD3BiRsnuCiWfsjsvyxC6ksB2XV1bcfpZCW4SRFgX1xDG66bc",
  "key27": "3LbSNdc57BypcAsk69gKWeE6yFMztfRKWpY2yjwdESCtQTeNNeMeEC1chzR8cEcZXN2mhv8Ttj8sKsUTX93vBMwS",
  "key28": "4mCQLFcsRS9kETQXWT7ZmvUpvwoVEkSH5cbYeUE5oYnhUxQK6nQ1WoKZZQ6vBgE81NyjU6ZgP86xE9J9JdciVQkf",
  "key29": "3JwowJGhcmZEWxh6TUpom41wdnBEskij9BaM39aVUFQabzdgR3FUXuaLo35WYZZCFYMX6WoJ1xWeFG6uWZvqwXVm",
  "key30": "5ohyVFtRrW3P2M2zHfesbtNNNqueCQa12CK6LRfE38H24jZXdWC8FTeAWogvx7fPVbKUWkGDESfbVqYWXS4U8cR2",
  "key31": "2s3KGBy6SxaH2BkYJEjaEHd9N6SgfKGB6LEMhr9y6U3Hp2kxCReX4dcp7gxn2W9aSJEef2SFwjknwYf4XcQuzJtY",
  "key32": "2mQGWT7e2S72HzSCuuQxenDnRxnvnQb8h2bVDSrNwPQe4U1TmHS1ovXSKSnT6n27BdQuBoQRiKPM6cfXnAB4Dcoq",
  "key33": "2bKHbKbhGwYKAkRHhxwS2XzhfKwq83uRbr3Zscu6pNDpj426oxa17WdJshPnj5aPVxELPKpUr7dK5XNkPnDiRvGH"
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
