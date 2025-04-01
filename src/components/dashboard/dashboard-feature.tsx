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
    "4kQTCfHSYtCWZ2DpNKTEDdmogtZMWZW5PMyRwJjr9WdEKnxURJXTNCAoFYsUxMhcQXm574eamV312nSqRzL3tsj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MkgNqmWoEkJg46SaYLfi3H9bpuniSqTQ1ybsckbqjeo448x7CkzGHH1Z9YirG6wb2qHGgPmYePZ3ruYT2XGBepG",
  "key1": "4riz2urdpooAz3T4dsr2kHaQboKtVBVkK8TiKJj14ejzVZjPvAC7Lch3yM6G9Woh7PosiY3iL5VSB9phzfvLzQzx",
  "key2": "57ogfmxy6Z7hZcgF9GwJQNn87tF1H9hdL7nZAVRmJ7eaBqvXrFz6hbddzG7DPo7CNcQsaQqCUoD3jVy91QcY1cbt",
  "key3": "4z9DYG9WPrkCt3WbtraQKbvpYPp3pSP3BkuVfXQ32t4jFvVHkQnixCVrKxPyRebVDuo7wH6k2PfaViw5h9JV9SWq",
  "key4": "yXG3bTADX7qiZmeg3tZYdg8nHoWRLS4HgJBTtcnCGCQw9r5J46wz6BFjdLUpEXtyiptQGbr7UJqKC9qVE2xgsNk",
  "key5": "3XVGkBJJiRc2qx751P7aQ1tyzVJFQdtvCHkHajHQW3MZdZ1oWbvWxfgJ5HJLtoz4ah7VaQeFySfBqE7wWcpYWUwn",
  "key6": "4gbpL5cdTZf9fhvFXNqYf5AJoeZXHgykfY6vH3HFdGHjvLv2hkz6aYwwzRHcJBJBSonuPdqgYAUWKxXBhPXpxX72",
  "key7": "2S5kdfTYd9e3Mp52Xk91rvg9fDmCVPaJM1Vswpy74PB1hZa68BTSUJXN6FyAHn3qbtAeUf7ybxJz5pbdFEh15RVs",
  "key8": "2GTcXB1mhkJnYt3VbhNhVw9XERace7V6TQ7Sb54EVH5dvosNjHA8sMHjkXLAKuhC6VPKU92rRLyEZEnRghS5VLwH",
  "key9": "5Z9KMVCsHA4wrHhgmVBpDDBDHfrCZYqu3XmTPW2BHZz34UL9tgWah49pbJdVps5gDqnwCE4NS3UG4hD5wNPK5gm9",
  "key10": "5xQeMYLJpASyAkxzA7ApkJJ3Tcu1GG51nCGuQeagkvUHsQkqL11D7so7QP7MsUoMahQmEzcsuj44XJxgwUMJdzP6",
  "key11": "5AxG2i1m66tUgmBrDRMyaY7AVU2xHBti7q1fXfZng6VjndQ4yW9rB7KSmW9s5pdmWm7Mcqn283W4gtzHVrSVrpxG",
  "key12": "4eK5skt1qoVGQ4xdCNvkjHbERy7gY8U5sUy55DHJ74nyMCShYb6D7taq1qtyq1qYDypKwvfnX8epDYzyz87M7FEN",
  "key13": "2GfmYikj2M3aJ2ndyMpUTXsXkL4DCoTwCRRiJhmH7ZvLeAJVy5NaVdPLRGn6UjxBkNv67cSVVHULmyPoQ7XfEbsi",
  "key14": "35LWqXyut1CQBe9aa1jpHVK1r2DtDS4FHyHHm3wR7tLT2cH3AaECCkdKMGgAVsW4xzm84JD6Y4AWZx5cVLsJYg8s",
  "key15": "5usawSPVZ58qh2PbMS4H3uYybFGwGQfNmNx8u46nqcX5tVGkrYSUZieK5cVHWxJ4wP5y1aAs9s71buyJvdjoenu2",
  "key16": "5Fv5DFTdsrX8LrTEyntHtTUtgVqrtZeS2pgeZtnjFvKphQ8DKiryeiyGuJkkWVKxGSR2EgwRBzz97XEXpRKc7tMg",
  "key17": "xc3rpgCR1wsdhawjFe5KvBavnPd9hvLfQ3P9u24xSsUjpZYcRQHn2tm69enKUXfHiiN1RQ8VKm9kNxF1Q3xhJMR",
  "key18": "28oBpvxybhfybnBuG8jsV44twFmiFB5P2sP2U1uaF4aDY3SEVaYrcLeSG6ELpVuRf1ymjNpPMXHjPRCiPrTpY3Na",
  "key19": "43XyAFaeJMxRaCge2ugteCxCpMUkhuZn4uCYDTXzjqRp5B14gJCAkj4YpGGqn7Bu5be8HUZHAD3AKGWb99RTYnij",
  "key20": "26JL6b93Jm3NeBAUWHevsY1Tikv39Pz9bHXdiZpZWu4mTmda81ukeYj5fJeGJEYmia19enyMcqNdfodhBQzbRtFy",
  "key21": "3GeA9x7vByvWAWBW6j8VBV4i7LGgPAg5U1ZMQTgTduisZkbxSUk8yadpXdGCXzjzhftnqg9WWgtJYHfrunmVgaC3",
  "key22": "3pyVebt1ijoHjPnk2aC5xf3dNstkpTM4omLCzGd3YbxBA3zmHQe9NmXwJwWzr3P497Dk8pqnhvhffMVauCrQJLcG",
  "key23": "LjFq12yY2pv21ttPz8uEzJT5Ha9jh35AND2iT5ro9rMkEcH5Y13vBLXJk942w5X33jQvvcdYYU5qpfqCoPJpepZ",
  "key24": "24sxDprzbuhP84FYbxNQMot4hEJ3TEXdyydmuAx8zWiqJ1zBdSNscUPsBLwjCgPcdWV3ghr4bJw7CZd8gabJ6hEM",
  "key25": "5hY1MLDMRt9KiSyXWCSGseJfd3tkPcJPNwCHd85pbFRuhPJ3YcKcJfwWBd7ompuZsrCWjwkyn7agkVUMf3UP2H8L",
  "key26": "3wPve21Y3Y5zuu5Xb1TpxFu3DDW3g1Hfh5wuBPWa6WhErLuhbppVuCEo7P3KGu1C7118Bt9DLcmUv34H8kqn1tvy",
  "key27": "324rmJ7i6tQsdqRxhXigQS6VnPVJWYXghERt89jVFMXxPLZwYW97bgb4K4a75WcTVdM6JZbwgtZhDs3kxKANkbbE",
  "key28": "3MNEkGBnihkqbJ2iEwzEnqVhCNsXPhywNedGd2GJLS5UFRDtn9PsDaCm4T3iaYiR11dcKyhZehJJHzX6PnJyR4bd",
  "key29": "2TwqvuAdzZu53Sss5GScFStBL64ncNooKjbQsdtM49LzkCkYzGqLqHFYDybjnTH76YN3H43qarS1r18L9xtCV9j",
  "key30": "2jCKiDXD5wZg2iEnKHTt7y2QFQjFYzhrxorwNEmtW6c61qNQncE3DLGRoDfgGm6WdrcwoZRnMNhGpagbscmRV8i6",
  "key31": "3hp2AigW7c8XKbowxqLL1WW2bxVaKwf1oQXG7deb8BFEqxdWbMCbuXJWqSPBC5UigSk8eh3Kyuj56CFwXYRmt6TW",
  "key32": "5nTjRdmPeZR368wT4TARYAktrCwxaC6HnSbUTEeTQMHBmQhsKpTJQrCNzpu8qvybtxkTMcbSvW8BPhZoHYQuvi1q",
  "key33": "2pZnNh6EU9Xdyj3PtiesRif9Dw1MY16QowERFgQuuJ7Rrng7bsnp94kDVMMBrvDQWp2yC3PCCWJ3UAAPvwc1e8Du",
  "key34": "4KFCELuzLkEji7iUQfs1p1GVNdCu2Bw8reqzZctmNsQq2j9SZFirr9RmHaNacDCSxsAQdWAdd1ZT7tiMrS5dTNaB",
  "key35": "4JfaBZMs3YdXfXWVx44nQhfy3qWipykc9K3RNug3nLfu5wXUK1vgWrY69XtbFwYPYE1tb86ssQG2Wtd3dfYkQARA",
  "key36": "5wUJ9jJ62248swTcsU56NAvhh8jPz1BGfsqS9orTQZAXVYqTQX3MAfgVAVu5JXoXxGA1Lqrsi4mPDYuHCqVLsxwn",
  "key37": "3WQnkEsdEcXjUxkTjJvGCKq8Rvd1JVtE5cae7tUgxzmsPgmmmxVYbkMkJdMXLTWzwEa1iNBFqQCYQkMFg61vL1BB"
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
