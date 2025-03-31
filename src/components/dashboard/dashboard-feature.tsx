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
    "4TdkYjxkmPoHdBvFajo2BQi9TNwL8JDadKWxi47mg3ftpVwcrxhpGcTPpN5FA9TrP9M91mWk2q6W26MmjoDkT33J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QaoPUkgh9NeeaXgbmTaetP2z6zAEABvVd3KktCBVo33yyC7tVTv1yGxV1cp2UysrAJXBzJkZSJvK7fquqD2hr3K",
  "key1": "5qVM6jUig2XNWmhgGbWX1qhUw4E31artoMSbsPMcy76ahm9mdVayjzmkmttpWpsqc5wNE4z76kVLU8vKjtrfWxkq",
  "key2": "4E1AmsiQiDjHWiRRev4AKmoDA5bpuxKp7MGxGBZaZuZgAv5rJa4FENfouwkT3jyCFyyMpZ4kGfVhJ3EL8KnGd9JM",
  "key3": "4ygbevAL57sMRbwT6A7v8Cv9CaReHxnGrhLzU9T8TqvjmuEKr2Aj8V4Z1JfCSxUBJd4p5KnhJq8KGHSAsuop5ALH",
  "key4": "3DpLh64KsDFX5fZQKbUhHgLcpboX46dKTS2Ew1iPnX884bduaiD3UXKKnoSoirwdJ3yWEm9RonohpKHciWmkhibf",
  "key5": "35NAaBytPM9BcchRAUrzEBXdN5xot2NFQE71c1Wtjg3DSvjCFaKp8FhcFCDWNGJZtk5a7L2zVZ9pNW6ABnnZFjga",
  "key6": "5GZWqqfXAzg4P2SX68ubHJKBxUraJ97bzWnLLzM1C7B4jsY3jHE88WaARd3AzJz57hweMFLmr5A5zivDjGKWCWB5",
  "key7": "41j5j1Cr5LX5Ra5WMUsxAYPWMC5k1Ucrwq6mr6J7UmpneBZF9po5Dt1hMQrhFfhqbwL22UMhvknBepkZBSYK3MxW",
  "key8": "vf5hvC3ymGPw2TP8yhXix2e4cwCbjELCXV7vPZbMy6hLhm7g2MihMF3EwQcEioUfvja7yNaBEzwAfamfyGtS56B",
  "key9": "5qpaeBdqUq6XMf9fiHvfh7FMKaWTortdHvX6H8AxTY73pEeWM8owFj229ngE13q57iA2N2GdNkkozUbr2ZNBh4aq",
  "key10": "3nN4u8jstEhBs41J3vsQGNJNng1U9q3Zw4Zas9jK5PYcXToBJ2Q2Bdjp2Pe5Pz685xuZiNdcNQJoTYEGB3QJd3YY",
  "key11": "3MXzDm1pFkDPieXEA7ZHsjVwAvU3UKY4si4UN2s1o4w5xjKLs9PE14TnowPbsqDevwWqv5mEfNVUrNFxC6TTSt86",
  "key12": "ZjuqjhyYa2yeyPusJwt9Pxsnk5hhBaegXSmUpUsTN8MzAy9NxvDX3FryarAmc2MHy2RcGDvX5pC8BY8zfrCSwxu",
  "key13": "5ZBqRs1M1fyAJ85ZB2bahnxBKaTFpALKSpKTfAoxxiSna5xy6SRYeGqUP4MqKcSmkzDBroD8mzBm1TnTRxkm3xD9",
  "key14": "4QhJPPsW8bTG49NuaXg7rRHpnHysWBwNtXWsKybHwcFikG9SUUVDCwBrA3QMoktYVMShsidZeRFSJ1VLEjdcgwJJ",
  "key15": "5xnEb3eVmCz5A7VurW4Wgwz5C4rFbiK6q8tHZouitsZgS74cp8d6nc5WN4Ga19U5UWXUiRqFWQGWSsRx6abjtKir",
  "key16": "3VkTYs4mm4dHCEY17FLNF7itAKoACPbB2fj9noVqX9QjknZdwg1uDmCmqJMRE291aUFHRe8HhAuE42FA9NXMRHC3",
  "key17": "z2wi1SdJgh3kmhoymwvTqy7fU56FsVamf5tDUXstL5yKhDMSznyiY8ofAytq5txiCS7Z6a1L3d4jzq555dk6JYf",
  "key18": "2hc3FeDCyc15U3QgaWKxp99E1zngKghLYgSPZvS26Z9JphfupJbJAgANsXj9cWDnYkt8nhqgz8ytfw2KdBhmofnE",
  "key19": "5Y4a9HtU1LBUmJwW6NDgSTkShfRbVkBTt5xv3ZTq6SHXLhuBAJCSJtDT9vG4vjRGMt3qTLoaJ4yK6XNAEskZwgz1",
  "key20": "2omFUonqBEMbqjZuXUyiGjKhUK5mEdCkmz64yzWVk1h7EXGJxgGWbc8kgWdEUyzwkoJmkWPqmJvnmZUuvvTP2mwD",
  "key21": "5xNJXQhnqVXFtcRwdUZnU5j39uGPyZ83tQwiAaZiTrj52NmREvsQJd9gFkx4dwQ8KYKe4k8GgspuQseEY5Hcqj8B",
  "key22": "3kx1WvkbvejtdPmxnCV5SGmRVCNU8kdGGarcxcJUK4Tcsjc8Fq14emdexjT1e395zA5TjDmkPW5Noa62muLNn1sU",
  "key23": "geSszqE3iMXUudXGshty4xv37g3ifZN6pYeLprgiv9CBTtvodhdJ22A8sqUJvf4gVMykRcn7q6uxpqkhe8K76tq",
  "key24": "VkioxAthjYd3ExiQgT4bSdHcE3dhHh3ubptpDZPZDhe3HAeJU7e6xRyGqzriC1AoEgWeAEuA7ugu9hvWrT4MnLk"
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
