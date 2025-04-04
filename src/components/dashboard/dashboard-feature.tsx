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
    "2vaiwKuXNvzyiu1NyBEWuJeMqu8F5TSDMQr7pmdF2SqwNsm9r3g6LMZWWsvCcJbar6KreZdf3Nu8G5RyGUcw7KVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u2E6WBtuDVE8my8n8YocfwMfF8DSSEQr14pUHmRVgUhUbt243sC8uzMwDULkrmzhHjqTP6phzZsdE65gTAHyXxd",
  "key1": "33mukDQUTZAStWXWm8Lq9Ht5ShrCQ8iKn8Go4giqFCLNVBd2LK68ZdrzkxPN5B4WpWA2hKT4vsD4kXLqXxh133AF",
  "key2": "VSFZLYhdEERugCkhMmgKPDwBHdtEhAhMk25LZbh5Qud9JVzLeEBzCzt4taAQJEkY7AGvRnQa9xNtqMnpUsfN5L1",
  "key3": "492pwxmrki53YQmXKHQJssCGadwSnELZhQEPX8XiywEzCuxxkqGZiXjFyMhC8Z5HSpPHkqwAkddMDGKbRaU97F5n",
  "key4": "2x6Xjj67gbfWatsv6xsF1PDFBn9LRfRshxNP9TKp94USvn8bE62WE187Ay6DunCybA3izisjWDKmUEKbHYaJMruq",
  "key5": "XJ3cgJnWvdowvFxJMseV4KuLwqksf9UTMUsQHf5sUccjvsRLDmiXuEDVQqDAPTdeDoqExpMV34tYo8T7WNRL2Kx",
  "key6": "33y3kmPZJCNtrRjNiEF7kKaSwsLrVoEwUeN92z6FHNHpKZEw2Bm8znRDCiE227GEvzS3GMbAGe7bRkqb62QqJU2p",
  "key7": "3Czuz28jZ8Yq6eTUVastaEEJt6wqWPz1K1rFcUhPQo1NZJ8mP66gEjafw7Jy57ZfgaQ5sXHJH5d4ugxmu7DhQ2UT",
  "key8": "4tJkrdSvkqHXnzP2MGUbaMq5ESMsHuf4zi5CuF5gn8vd45MCvpmSVQjBbaLa6paeaMvkmiVSptEp99PuqrCHBKEj",
  "key9": "2nDzPKqacVNmr27QoxxtJ9xB6vnnySDg8UjaNDXzSWrnWnDZh8einBBjjpCVRRPxoBVZJY4H5GbjLXumEcwf97ET",
  "key10": "3naqVQpWsJ5S1FrhSZued4voCWqsxA7SKTLv5SzM4ckT9gnJaySXAEM2oq346ASUuw9EyzK3x6UTWBVjr972ryUM",
  "key11": "22j1KJ8QnFf9P5ZM3ZLiXkMJBLViqCVXKqaCpVmSKbJVMFCMQLwemtfMvJvPTQMoC9WiuSbJp31DRcQZjKqDXbhX",
  "key12": "SsPXD5Bt9yJbr6P8okz6JkWS5dJEPemFFMkt4Tv3k1teaB6jQ9wJd3pAWwY9psXrcoqmEyzGFSTuDZxh4Ztpx94",
  "key13": "2Lh71HnKsfq11JUvF3yuNyNXef2XbTUKck7eYQvgChuuSXEfxVHCxoxxbFmx5ULzwt7UhrJCqRDWvt5pjRzNvy6C",
  "key14": "PdQrG9ANdASr7Dt8dwXJw6w6Laqn3DXAsZgEH1N6dsk4ixKW7Bs9npeW6sADnueCiibSMEmmiHjT2Z5qnU5T9jG",
  "key15": "2odkp1sqn3KGR9uFn8s9rPZ1HmENryzAJFJg6R4XhydxVsp3ogBseoxdihoJamnZcasrqsHnKYwuYrk51cMfrQNZ",
  "key16": "29VLsgAGmmFkpcW9ugvuH6uTdi87hawqDnyBJuRWMDUhFonLF9Du7vfY1nMKs6Sr4bma8b9N6hwAcsU4QP4Aqomj",
  "key17": "49H4rBoCEi5K5PphGFYip1bZNv6yz5jnKSUPAZnneBQP3HDjzUWf3MFaJfBsyU4poE8jpSVabrMQTQRddoJpQBZn",
  "key18": "59JR7mUNrehZSmza7bGhGEW5FtMEcX6J3wAZKPNUHoMZ4T9G25Ac3WXzyWL7nVuFfsGEk39CY3K3cRTtN8qajbNB",
  "key19": "53aPW9b13zChL6W8myk2wXiCTKF4en5EZM6gkaYQ4TZHKYy6HREyjxPHcyrn9eQwMEABx9KxEQuGXh8U4Jwn269T",
  "key20": "4AME18MpLQknuGmLdNUByqE9nfHNba7bUzKTaT1qwkLaDBKWRUghuwf5SkycQwdYR9DiLF68jz3kQMhL4MGJvDDy",
  "key21": "p11ZXeJtZKSf18XHXdzfeyX8xqERUb2asQCKzFMFrcFsFh3AzSCPV7AKmc8irV9VLNGXW2FANZBoVZsoqwQMCiu",
  "key22": "4KaHnRVPx7o9GMSeRg7ej5XMhgaRc95zUPQrGNqn4sPZCoRpc6wVhA2KU9qTfsTbWHckrPp31fPRMT26F3wqY9QC",
  "key23": "4HNz3VwdFpavUHoCtEpUBTcrNimQVgihC3YQWfPUqjKcUZ14zJCjiwqPSzjkFTy7WTqtnkhiFTwqbpSuFGs7UDeR",
  "key24": "4t6hNECAeL5zSQ74f4bj5wAfdxwY1UZ1jkc3fYv1XX3HKBVTdKwXqxJeKGivq1pKr7w9EuyCFEfa3t2zbcuLXrpN",
  "key25": "J12TpE7dEFLfUxn7KrqvKF8Ct1aWtrU2ye5qvbqjiPNgrT3bTEQhmN5iNUekUBcjAw4GuQQuTCMF5js5pTCcFrA",
  "key26": "6L1FmvE9LJzoov2dNdH7Lw5cWsENUNWoz7i2PbzUUeC7Y9hTvXR5aMLqySFzUpygFJ9ZHLASe7tEsfY1zP5WQ8E",
  "key27": "2y53fMfMQn7Wk8bEFAJ43iNzC3uCMkYiibvKHcPX4M3isjWhGdpBoNzridmPdb15PZ1YrwJbGYxhFfLwDmeu1agi",
  "key28": "5evT8xvz2jbWNy5AtXucRvgpwtjj4cmmH2YgY5vdohQqhqvJHsjN4SuQm9BiuQdfixfVrfrPGxBjSKaNm3uCRtfG",
  "key29": "3yxpHMGpa3aHNtXKavqTkBhJRwPWh7rLb4kkHAaf6qxd6yTPiUSTFsrMYd5Utz1AT9cxRmxZmg8X8ANawm7ZE4UZ",
  "key30": "5iJ15ZDWT5iE9YdCDDcA85ok1HgYSQJQZWe3sCSbxiMxdqPYAcrXCX1yNSom3Js6BneC5RL2MW5rgz55PZvPrKd6",
  "key31": "44TEvQt3dDzzWyqkrmmo7hmP2rLt8uuTZc2XNgMNn7aH2nd1z6XmQ86UkBrUKPbFfN6f8ccNSgM7kbzPL5d529Lq",
  "key32": "57bq7txgU9B7AUWhpiSZh4kN12HFZqPZStLTJYQi2peXFWKQxjp7aawAQHgchgoVihPuXUedoL1VmnmdT9QDh4fF",
  "key33": "618EtBMiMwhFwCLFYR4mVGYCrTu2dsK3csHTTvfuDizMXVsDxaNt8kyRL8rztmPp4xZR4xqF9WNqXkmtVED4iq37",
  "key34": "2BeJcvLnCWLZx6rf7CnMZBMnLEVWXGJGf54L1indL6vxdUN3TDZBG9SvSixWjj5icKCtnHedEuvL5fqM3iG5uzLW",
  "key35": "JoCPwpXhSKyJEBuGkdMqtffTKETwjPtiZvh5fz18y9cq2b8gxoHakjrgsYeBHLUakBnJftPKXzt7cJmduJ5zy29"
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
