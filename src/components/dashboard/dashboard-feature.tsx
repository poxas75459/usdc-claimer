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
    "3zbusQu8RAAU9cYx2gecyRY3X4GCSiAfndWwyd44JxqxgNSR5oLrJzcoBtM5eciLTf7JopQpumkoyac39vWEiERw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hj9DqpKjDdYxumSXYCcwvJccHRRDXJjuAj7Fup3W1Y2oZEm3xbH4tpPijDJiZUYM3veMs4iuMRkkp3muiBX3oTD",
  "key1": "2ALXznAdTSfqUPv6e57G2CxiP3GjFjzGiheJG4gSzdEGKMv9zRQpiECJKPFmfAMQCymQF37nQNmmuYj8S5NiDPkB",
  "key2": "JiHzZVwHRCgL1jjLiabveoryMidUKdTPtiS4px44A3LAyLbueydiHCxeyAYqRjsoZiJDAWpUEX7yvzEKpEWVWCB",
  "key3": "4ZVdn5yeVQZAJ8PMAuKkzYYvBpHeLSD2DFP9xXXC15CTzCYrfivVZ3gpaeyfn2BCYnR7tRevxAMdTtS7Cyif8gU7",
  "key4": "2CKx11Ymv3JnQDTtwJ4wyWdAy5vgbkVSzjfVkXou8eSYWjFEUgYxjGM2cvXsTQiPv6zqui3wDY2miW3hMZZnY12L",
  "key5": "4nKNsGYDkFL1GdNLxdv4GB5yRXr8o3PpWvLoNLQjDZhyPEwehSVHLQ3HRPQjEeSPn6gmEZaLJsbjaaFHc8kszDH2",
  "key6": "2c29G7D6FXKXJjBcDD7kHcNCi2JYkTF5oiqjBNpcAqEkvoqJ25tbzjV3g35px6Gbwcty5yEogUyvPQDtSo7U1qXK",
  "key7": "3SXjYY5Ksoj93V5X2SFqSkMy5BPdueJPKV62ZDyfPXUhb7LXnixg67ATj2qzRzfLNLBLZW5pnEEaBS1vWgVRETAc",
  "key8": "5Jw6EjP8XZcZNcpCxofKa89JLfKF8dQaxS63bRS248SiyXKdp76QvKbBKNzrcRvAmFH4tt7jsd9YeXaMKnFMvqgQ",
  "key9": "2NiKeKkBziPovKiLnCnrR1SpSxsGkP6tp7FyGsmgu5ptZA69C3GqYVTRfX8Pg9T2HLLrv99YKzwdFSXrgeoCuENK",
  "key10": "fcVJw2snReVasumXd7qoBPt3sqYzwGZhLJmCXo5U6xe74HDdkLEdVcDMpT3JftT4TjyZADyYUTTjeVzVtMpYnvp",
  "key11": "3Jap4n8eJZEpShDJEh4ut9HQVP8M9ZKi869MSbPmbsjEypwiUMNkfgmAWtVDB8DZdRA9Cj5yN9xC7B55HGbsrXMt",
  "key12": "2t5SSzuRo2uhpMpyLCkyQoGGJGcp3c5v8DrU6VswThAf1bZbp7BUCCYp6KpUi6PGa9dYuvB1mW5kmpYyGRuH2KxF",
  "key13": "2zGkaWnemwNXtqSkfGcsiiesJHEB966azyHGuZDFU9VHdikBCmre2jPgtzkW8BDwvdr6pyujsf8oUgzwFjoBVVzt",
  "key14": "3QPkpu9RsnK9nb5ZY1mz4aJVsAo99xtfvxUFdAXaccH3KN2BycHRVHAuAtnVVEJCU1Ks1XCp3yNY82BGwhzZke3a",
  "key15": "3Vd1H7j8UBcnkan8dA9YHTwty1MwkKu3apRgk9sSwXhnhcvXVL7VKf7TcCv9hWpd5QUyNYA7EP6e4qa38AXQerGv",
  "key16": "4g1BmcxGKuMy6mSXpkoHt6sDf6FHyidBzaUeHkiAeBvSiJU2CXs1uFWNfkgfpJhRPb1D49XMrUsexaYzZ8XsKjPw",
  "key17": "4GKhca37eD18WBHoWKtvtis2Nvo915ZhbjxKARE3mAs5uRHfaZecGSKS4nqr7UwbH9xk8jZACJMNKrjTAFDnkaJh",
  "key18": "z2y7fAEpQVKPeS48NxRoAC3oa3BUyK7KwBmhu3ur4oTEuU5hYKyXUTvVYw8d9sKmamuWSuzykqZMned6kgq4yAp",
  "key19": "C6H4NfXPfkZEziA4G9EREKYPjMxBCBcWFEPasWVZcTfpFZvC1GkKo1bd7P4hG4VCgtaw6T7KvmjssLpu72mQuDA",
  "key20": "2Hp5KN6M9Pge6FSnFEuzF4ezq7hgNMDh9BWyRg2G4tbkERWpjxQQT7J35ARqSh99u7yG4UXSq5BCnrRTrC2MPPgC",
  "key21": "5RHduhQbfR8jEH7N8CHheRbBYDk2W8wUbqE8zPDURSrY17MvwMJLdeAPwHf78eE4Kxq8CM3GbzEWtSHUB1EmukdD",
  "key22": "5bpZEgnow4KVM77yuBiYx6YwEWQaKHyDBTjKxWXH23bZJTxxLkW2s97sQ2D2dJ6Faeuke7kqzjBdfzpDHeFRsCJ3",
  "key23": "4S9FPqWatdxas4hsRWaRD7M8DAa5XNeuAoYWsoCZPLyPXob6P8XNZfF8YWVSnUKcNLyXXscdDKDcpk9yxP1D9N1P",
  "key24": "vg6SSA3mNz7tay12GTvuCEeedZhp4S6xqBRozg6tbbQtY8CxYWDhFaC4pvtuuyTuUU8yGDaCRYD2bHmo2qtJ1CM",
  "key25": "5EwPzEFvjLb261bRU6NCVazaKDXhha63siyroPi4VWJuy71AQQj8qd1AZCwZvBvW4D3PQnUDZxhfaeJtj4RCiAJZ",
  "key26": "4kyqxy19nJxuP5uenifUePUjBEwdykXcB6Fai9JCu1B7JvLFZ5KNrutxuuX5jMB7PSNwNwpsJiJGwyMNiy6EjUXE",
  "key27": "5wkctwH7h1CyKa7iVe2PyC3GW2rNz2UL327Ve5wo2SxGfFnnF4g7RMvAccnEKH5oYduY9jQZt8zvumWTrVZ3jozB",
  "key28": "5ybhz2YjLhx3dzxUkabU73p7KGyyLu7u8V7NBoMELMBDui42UtAhiKLcCCy1PcwEPBhk5X2Dqa8JaRm5pXrrznhz",
  "key29": "4EqYqSVVPb9nXXsD6WTpQzeQdHECGutLYhAoEpbVkty6zS5kMZ8upZSA27Pm2KFLgFXNrNgAxHddYXcxwUANytg8",
  "key30": "2XyV9qzn2NftAtHdWeXEBsmjdCpEBn1g2f3ucS59JEGQZEBSba7JPRpXbhXj9JJfHzVi4panqqopDLxj3RpC2XCm",
  "key31": "RYLTwZfpqfWHoGnpQE79KqCqTnituinhhpqJGkFshJbWZSXCtGC5jfBLFJTsr2tma7eN6BVfCMUuwJQAjW2rYnK",
  "key32": "3zwwhoVKeHK4zGDXULJ9uVVuGa2wV2NY9k2Gizomgyf8S4cLW1q2zZj6azQixzdX9P3LrXjUNug4vxTxeKFgyHVX",
  "key33": "2NZtZj24ejXPmzMFk4t1Ey6yTVWYA8Yyx6NzfXHiiqGcuDqTQkqZCmJVjMKkukgQBPs8RWQF2Tj9cP2yqC9zGM6b",
  "key34": "5sCuEhatMdZyhjkkm1M4EJsgBbdTZFL6Ase4EQirKUKDZK9mu8n1yPr2W4Z3DGw4AGabwCTrbMdjuCGKNbUmuWWf",
  "key35": "7f5Qnj1Z6CTqr2Pprc4ceKBocyERMR6jrrFtga7WvvynWhwBayQK33Gmhc3evraFDnmpgupJvhTM7mNHkQYDFXW",
  "key36": "27hpT3yauCN7Ayo4c5sn9bE2bXweoSxtVRkkCmbyytYJAvz2HTw7eWtHm2NcoaH1VPAuuRWfro7kiSZX9Cq7iXcA",
  "key37": "5gx6G1dBDTC1JJewNttWZgegNBV87evS41aBiSwc8H2sFBaZ7kBTuuXKsSqREfXAddgQqWTzeypw8Re7hmpgc91V",
  "key38": "56pQuHJqD8U1m5t4dz7MVbRm91bSyD4G5gnWAyM9RRUyMwNAPyeMh34UHQRzUULov2QhuXTafsHGxkw3debC5N8L",
  "key39": "3bwKATQcz7kXrU3SixhnMnN3HfJz4xMSZx3m6VSkr579qakvDjaLXqDYWy8wjwtWoaP13acsQ3G9VUEBfDnwUtoJ",
  "key40": "2YDomVfTexkpXTtgg1SxAZu765oxzwbSJzUYrL2aXDGErSTRicuB9oK3DTm4VpKcJVWumMkj2JbBEJsDPTkM97D2",
  "key41": "5d4TpjCFRvWUiChKNRGeyn5dDHavbMc8PRNwux4vjjnKL56ymFcQNapXsCeEnDJ6GSjhJzKuov1CMsMnBhDtmKF3",
  "key42": "4iQKjSdKm6NZZPFyYC22ksivAy75jXdrTiLt6Maj9GETXaCCppWnpQCFXYHAB5h8xoP8TgdBDugnuNydyvEXLXPt",
  "key43": "GGpnEhsBmRL1ZFxe3svhKf31b6nuH36y4ZYqQW9wmdJ57rYHUGVuSRm18UBPESM1BNwmxwY25MAsPe58DP5WLNW",
  "key44": "2BxuL5sEzkatKj7MXjEgtjyJvCjAqH1JtqijTsryZ9MiCEjPozU9ppgW9reGebbsnCpVQvrjoUprMNfGF5DUP7zF",
  "key45": "3wUKGbWVvQvRY4mStHtnTpTzyUCSasG3EQy4ZrRs5K25XQmVBsgvyBpCzPP4PZiKSWNbp3aq6kFn1NMkYENXg1sA",
  "key46": "5BuD4Q8HZX7gUK77NPwxmjbVR8sDq1Rkcydkn8BekLNAZ1iH7f1QeDzbfDNMbej4dM1tSufaobLqywyxsZ1YTtaT"
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
