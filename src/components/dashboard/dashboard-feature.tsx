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
    "33NFyXAmk9sYpf87p35MuNLpykfUmKM7EyBpbvf22Gtovv6ro9v64Hyg9oPDGTygXnB45zFaEPeyg9Sd9KNAUDzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "czPCr54CsNpiwKJyyLHvJkoubuLnLYAAWjyrm37CuKwDUriryLdnkLQEJxAeEXbEaXy9UpJC4sGcNviRmhUrxds",
  "key1": "55acTyMeWhvUV5vZN3Ps6894ZKKchkLjHmoSwNdZofeAhA3cZ6vyBrqiZZ5wDWZiH1j25VWyyyd6Zd5EuoRXr2yh",
  "key2": "eWguhkuXuXVASLWWdGfGHRo48SGWG2FcRZSoiBJ8EVHAKAnzL2jSLrBfpQcm9JrQgqmvUxegHyrCss7ZZxF9wjq",
  "key3": "5DDseHrMbdtEFVKGunWvTRgHPjSo1vW1f8FiXu6f57BY4bct3yaxdQRzKf6mYJjpkabAawHnj6TJbKQJS45bkKi9",
  "key4": "JkmkStQte7NxW8qwDGNtjYRcUY12xvbVPQKpS51wpzDnrutB1xb8k8JzwLG6LrP2iF6DLAhd3TNBixSjV8GF2aw",
  "key5": "3aW1FBdNFFsjk2xyxjVDicYQNRVuaGVyKgVtYf29VvTZUn45nUbCCr33nocvka2rnUs35yAUZAGbCZQ2fY9VC7Qf",
  "key6": "5Kdf4eD9xWAtALrP7o3jCJ1ANGqzABcBnCHYPp9otDx5UudG7zz99NH1qD4Yx8ecZ5gv86iCLgMaVUaudLjz3xGa",
  "key7": "2xPTWFwA1XHysWMBYCVfGNFznCtFho7ZoGBMNoJ1eKz94Fuc57HQBJqHpb1cuTQVhZG1p6ZeQJYn19pSx43r2zRw",
  "key8": "o3JWe7nSy7AC4mUn9NJSzumeeyE6uCUpM3tpKpynooKh6VzxvPJo9S5NSjPvAwkuneqA9BVJEAAJRCSvgWafGkr",
  "key9": "xWBiGUxE2bPio1F1FEovMyXk8aXkR8kbFRfkbWdeMNNcvUozQMGJCjGTNAHwHiyEeFNzoEzFeQqrzCpnwDgNcMk",
  "key10": "269DafzQpDWuX9r2MvdSvLiSbvKSqLKem8BfxuL8phABZ5oBM17d5omwPNM5h1g48eDiULiRWtjHg2xec2811itp",
  "key11": "4PNLF3f6t8UcWVuC83hNLccKRrmdxRdJBuDZfE21wr6W6X93Na5hYztuYHzK8gv6ZaPz7TZLRzHGny22kua3ks5D",
  "key12": "4YViDeFjFF1PRmzoUMHgPG97A7L7UxjaG73dYMLUH8BAXEn7qBH7mTpFDAMdZqmyix1AVeQCS9CuwJEuu4HWAiZ7",
  "key13": "3zU8J64ojS6qRCFyAR9espgd7aZzPdfiAX9tgFQ2vMVF1N1iBHB8x1pnCc55GYkUgCC9QLdonCXPt6zofR3cv1gM",
  "key14": "45wsBhqo8xVUtEFcaKqSY3JP4gsJWwuD7MrKBwTsrTpThi4AT6fodrS2PbNxqxMkUGw2MACLaHvw1cMJTxZZn3n5",
  "key15": "amAXEfaWMZoP2Ntf4EPbSszcYFd8QyHRq3BYr2XyEYBtmXLyaHZjc1oARhwH6eiQFYVWmRyRU6AZq8qTSvTNrQt",
  "key16": "2tKWasPjDao5vnWfminVSkmtAeU8coLHNMUE65EMBp1cHLJUk5BkDfSVnKrKPcPhtUVfXiZep7DGMaAD5Zve7J4J",
  "key17": "3mhWoBEYmCaT3jWY4Ee9mu2NTWSbc6gN91gQMfCsPFBMi1imoxLzqoG3DKNP6v7BRuXHDqZTdhbEK68vk9h8VHXZ",
  "key18": "2FXxAQRi5qcJSYVwDBypDY7LvfXtsQCwFhh2uhxw1jmDiWR6ozqn8UfDKzP7LVUfcn5keRRMaU9c6vGcgfdf8jWn",
  "key19": "qZBoGDkZgie3dCoGKvyPzx3Y2oSDzTsmTtwHc9MZDUUs4xpbmozy2zR8XQFJ9Wev5kuD2VANPiCKYzsipTj5bnF",
  "key20": "2vo3SWyQxFcJL6cUzZmWt53z1GNSQTyRx4vkJm5bJoskkJc6pBZGar4hFttLMqZipZiNxEeuET85HSnYxKS5kVq6",
  "key21": "XhSogyA7sf6sW7nGFy8AT9ZpQjkY7CuY53yCyyvJw4zXDfrSzU1F7YHeSB5UHgPxe4LeCBwP59MSsLJeeDjKCTi",
  "key22": "5qKcMA5HrNtyrhBG9SfmPsmLpPPSUjskgarae1kvQwKWKV7nJ7hYDkQSp8ezGt7TtD6cSYQSjnNnBjk3erXspaB9",
  "key23": "3KjMLdikpsZ55WhGMXCgAQdLkky2fmeGppgRiw3emFtf2wYXoLQsCTFQvNYDNLLBaqSuAfKHCnjvCZ3PhUFCaG9M",
  "key24": "33FDkaf7L45zhinCYRf51gH3jV7G6pfLzs4jJiZQYdi6QUJesGNrWNZAAVi1SbKzobXpPWAmc35FR2CA7FFRLE5f",
  "key25": "5Q2ZbdgoeAhk5EXK2yj47YyJyMs5s8KNrS4qXQxLMvuVBidN8vQd1kyiztUdBvFw1tdk4y6aFp9PpccEYhm1d16h",
  "key26": "5gv9tmsUNyBDLMwr2DhHjivKWxEWWYL8zjpcZLkMVcC4hnpTR5QajkxtzKakTdHC37qbYiyXnhW98avSjETrMTT8",
  "key27": "5KSrxWXg6zj9qPbsJ8QjCsUSmTHVcagNKn9Q9teqGSt8W5iRpKUQDNm94ob7AogtFCnPreJerPbgnvwnzgE59vVU"
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
