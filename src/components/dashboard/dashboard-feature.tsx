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
    "K9DpApjkH8bXPUYTXxS7JKzA6Kz4rFwTSwxW3dynUNVUAq96ucpy6GE1jpuPUvNv4wu3GZ2ytoJKhH3Eccnkwru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36AayqE3QEvnsHgmfArpKHF41dhvjUKMUcFpaC1soSDMhqWC2YjBuHynnr7WeCfM5fswVdZNTvNJzyjT3LjC916W",
  "key1": "5erVg8y6gG82yegWWwv5gWz5BbDEwyyAyZRzgThGVHajdbUoX3rxETEpQv16VAeCubDTfyt8CSAD4TrapoW7kveT",
  "key2": "3N1czZNJAtmxobdA9T8ggetrjdAWemimbhj6vTSYatvvV9foHa8btdU5Z858vykywAs9F1Che4SVTxVS1rhgpJyg",
  "key3": "2ewW2TGhbambbRW6oyaE418YFbMMfYU23wiT4CDx5AwCMiHm6M8Wn96e9yh4obxxGMkjSidnPpbhEMAEJ1x36H1R",
  "key4": "TKiQeDi3Zj6iUuVM1eA5kmDip8fjmP7RWjgBUkPR88jqb2YaRYDumcGk6nj1cTm7Gapb7KRASAV438pBfCXkTa1",
  "key5": "TfStxPztYgLtikAXHJUw4aXHECuzqHTnNFRhtdidyXBm3m2HDtGDLrSCqcnLEYgfCbihKeSjpsRwooVFpAo2qSR",
  "key6": "3UbsAAtv3PrgMZAyB2WroPaxbpdmSizzCDN55g5BfwRmjWVEg4PiF8zLQFXrgppwFCcQC1ejQ47i4ULXwbJpXss5",
  "key7": "64czzNB6DAkEMKEN5omffZAt1tUNZdfFiT72tscp1B3RvCwfL3mtz2hVCHXriSacTr4BAzKdwps8bjTbaopYHwGK",
  "key8": "2zZkc7cBtc67Vj5drFQddDwimJrAzzShBGBg3r1ewMaMZKTSYJ6cvhDH4usAHgSRugiQwSL2tWp3PxDd4rkXGJ9Q",
  "key9": "34xyy261ELK73asS1Cu11aUqJfxVgKfUfHvZdMMthMWGea82HofXuAgPiydYCUzpPDxugpLyptiBMiWKswgyWvkh",
  "key10": "4RPNvHLX5fgx3ZGeM4MDgSEidSCWsp6RC2RmpPggpVyNNUJwh9ze8odfJgVH7HH1WpdFsWMw3STBBxGpDU153H1N",
  "key11": "mkZRzGjR6MsB8YphRNwxoq4dfRp63EyrmcMzSMhpCUz4qRxTx6LB4xrGGqWfzhjehPX6kv7b7MBNpePUiaaTf7v",
  "key12": "5pRNme8WYqxS5BPr28inxXKMbPhB8zfbrqZsqrML231q4BgrjfDMdrZzyTBr71oa8QmdTHgPuQY8cbW3i94hLhhy",
  "key13": "5Rwk1g4bbB2g6qcrXHqEi1jq6YM6KajxG4GcQFY6BBLNhGuv63peFSidyR2aWPB1LcgkPbYer7W1xJ1NgVDG3ZSi",
  "key14": "3aa1CFnt3fi94hJawLCxC4jQh7EPLcp3bGcSLC3F4HcW6NHcfPgvANAFqYKhyZJvFVkiPoiYHTX7R5xyLV7QDmdn",
  "key15": "3JoWRkFUq9ZsfD2Jvrhg8f8Yhs6DmyMiPqcXpWSziPdiQLQnuPSMUGDFZdPsDow4HAFSRQztiiexiaRVBdTx8ibK",
  "key16": "9gJxAMzA8rxGH58vr2Sb2hTCy6evbsgo7B3oNekevQ8oQEXUC7TmZgBgD59tJNgptV7yvBTQ5pAcS5o9qxF21ac",
  "key17": "66NtADGVonq3z5gkcTd1F6kpuZz92kTY55NTVRAiujRH9WZm7jzXtKr3PA6BLVuYGVuZVuCrsV6Amyopip4zsa8L",
  "key18": "5UVC152nnXcKSmuuEojfiZL2FyJ8stELsApGnBbXp6r8ZrsU7Ryk96NTh7HydXhFJuBzqirQ4iEfnphSztqwVaGk",
  "key19": "5nwLt2qiMsf37DURjhWz7opNP9xTu93tq8hUdW3mJWJdJvJUgBdFueN9P7L2U3ayfEH56GB1Aa7nUSs2ezEfctKZ",
  "key20": "ifzcRzKpeK2s9vXmFUeDG3FTUR98GieV66Yrn8F3SN8yZqxW5crPQtoj9jCWUtrz6QL5SYby5hDhNDzkDpTN4cg",
  "key21": "2Gknjkx15Uv8S4AB1LMAR2hsb3uUMatKcrRAFVGTZXnzTY7fHw2RSjTUsiXZcHJy5HuCpcgHYe87RamywswcaZ5U",
  "key22": "3XVB11cwNCosQtdxh4xUQ5WZ6B8zRAfYU34aozp8vVXBogHcLi7o2T9S5xwujSzAqt8Riu4xWDYfQ4NnXNQX8qXX",
  "key23": "2UgFxrVPMsQZcWKdgDoWZCTUnAAP866XeRmzso8wqahYHfjg6tWWsS8WpwzqvPuM4gocV6rRCp5eKPAgww7Xa3ZN",
  "key24": "3g7QGUGbFTwGHLbbfWoyFqwHJP1ncDVjjhA1mibBUToPXFZ5znHxxfSqa4my6hTXL1ssDQe84nRebmDtaZMpiWEQ",
  "key25": "2mXyb5QgWNEXzUY77mx9dhFj4VczUJNJP1S4YAdYDi4h7iqwug1qxVWwjD6vGVZsjmW8v377V179ayuHe2nYGjDk",
  "key26": "63nyAF8xaaE1HVeKBuvNYw5Gy3uzAVa5WnrqB8JYW3f3DnHvUTabbqDB5JULxvHZR3NzPEL4sFFbZawbRJEhGpnr",
  "key27": "5iK31NWRaJDBJio2PD551fJ8NGTvKGbunLdUmKB6sxZc7MBjPMbd6eQFSK3vNMZxMHQi3muT1R4ZvnH1cALTLH3M",
  "key28": "2BHorvX3BbtwiFz3yNgkuEvTP9Scu3X41mFgQ9Gc6cyAiAZiPUi9krp1Zb8RwtotJ6zCQKB1R7N4nU1qC5JHKAi6",
  "key29": "4hpzrsymNkuvb8mprPt19vWQ5c512gv6kBucEqhX12yShDPrjD1dYiM1QvESBpWdAxSjg1SnXwgKAev8CMh6qodL",
  "key30": "nAEWSxxaQEwdUoB8yS7TBTvDcmNAGSE6hoZ1NMnCFguMxep8X9iBaResija9vjjcms9F2r8iJSNXWAsPgR2KmqR",
  "key31": "5NQaXBQDvDpT24Nyb9Nz7m7AasmHjQ4QfmqVqH61qvvBxjr9acSkqnRxQwpM2JYsug6Uiy4xskFVSBHQkVmsqbmn"
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
