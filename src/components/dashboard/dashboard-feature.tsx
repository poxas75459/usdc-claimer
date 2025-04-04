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
    "2F5fDJ8BwRSi1WjNYb1pvzXynbbakGGNMSC4s6jpgKPLZmLmqmEfqV4mYyZKAcDkhHXgA7dicjrU4ZquiatQxe4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gty9aGPLAmyg4KEGFXSg6FA77odS2K7Dr5YWj14APXUFf87dZ6xhSWvQg1UGJFCX2EVkTBUz3PUY35qj3N8b3qA",
  "key1": "4CESeqKLhzwSh9RzwGzKAdQuCDuGdmpsKx36GpKbCZKcTXdEgZyMHCfHSzG3zBGC3bpJo4nfoHmpZ3GoRXDTqRqd",
  "key2": "5AVEEodz83r7WKKztxtKdBdNffZrno6iiwKCt48Fs6GDUrmJzmJckLEVZMaC789qzq3CyjLYXRyJLikoaNKY17fQ",
  "key3": "g5dAyu4ZjXHTCy4V8VhN6tBu5DJfY16RL3ZTarPBEAMXwYZCujBsaR68M5SBFRzhTFiXjAkhouE3p2RVXASuEtV",
  "key4": "ed9kaunMK1Uu2ib46RBY9pDK7YzUDRHakHw7F53kwx9AGP417RDEq9R2tuhEER4pAVZectLWiNcirAyomH2Yc5K",
  "key5": "4fG8Uw1bPYLU9EKFAkE7vdSZiv2eeVtyZD7c85BD4qQXUTxB1DYYeZRDhC9S4mSwJnsHzWb4wv5yrcKmYFDDi6D3",
  "key6": "3qh9Z7HqRPuoydSUWHoBEhUoamKpYszq4USGe4GVKEAAkyscThPm3dtoQBaYwCV3jJ6EmZumRUFqM7NLV6HGnEdL",
  "key7": "2yX5BVaVaNZKg2mCMu4n9eR6AwyrqtMeV6WUpU13UUeE155avqxEZhz1WjPPygSMkC5mnBMvxd1WiNzVXNAd4GLt",
  "key8": "5VoQLZriBKESyhrP3ZTvukby89pWvYFvhPjeLGavw5H4ytzMm39aV3tAMZUfFUSqUmARzAUosqYbPnRygvpW86Y9",
  "key9": "V7pDUAVoCU6Z6nfGLwa4vrApxee4M4EwC6DJMkJfRqjKqoBVZuvxwMvjzypSy6Y4sFifaCZRsNkWs4t9p7eh7bt",
  "key10": "2kuaQ1MEXNvpMjFw43p9hTXpuPKzLdd32LJBE1wMvHjeKiVJBzFvwxCJDMyxA59JXrrBGkyYpqjPL3uwTEdiSmZ9",
  "key11": "3V9yweCExLHUYaRvqhMXge3aKJKKP3VpvMKMyCH4aCfXiV2hg2UUR89kyC67DWMKutZ1LBUckEpPZuCxDS46TRmi",
  "key12": "49hBXhmPhCiF4Ncizrh18rEL2wPiTCcptwpN8CY9hZxxtzmumqYy5GamZyaB3sUDm91rofDJcg8Qnmj1pX9r3q32",
  "key13": "4PyU9bCmf5aZSR3ZaGpULMqCEY9hsTCeU7RZzDPWXvdMMeKDH9G5QVKzXpC1ty88pMnPF3LhwqFr6b4L8kvPYv9H",
  "key14": "3UZ2ake8aQUcvj9KUeBSQuBNR16riEAUZzc7Pashbf7Xr1jD9FxiNytorLHRfgKHxgDAaB9Csbqk4EtxEpdw7EmT",
  "key15": "38YMSaf3k9q99PZq5BcbuSPvRbKFPWaaidxWDsWennCKDa4WqifmthvoDKhkqnZe4NksFXWCiXL8BuS7VoDRTHQJ",
  "key16": "Lno5gTBnZi2pZQhXMFx8dpg85NieNHuTfwU5ENkcwcLfbCGWSxtJeYNwVBWm7zRC9meSU2TJwcT2Gi4c37XuWyc",
  "key17": "4ugzugiTczK7kn5qUQtJNpJptMQzQhggnsQr1wsryucYFoL5Y6CTJ2di1aeRC1KknpfgQQsM9eqamTWoE4idZMB4",
  "key18": "3mnPsipTdaBmSp1CZyqWHw3eqPvL1A1iAb1SGAXFFv5R1Qo57FQF7kPjSaR4j9aiBKXVAVrSc9voEejrhmHBpFmj",
  "key19": "49vCGmGXRygsYWcEApTERMdXE3UmS5dzYLVcBDbRbHV4x19TjA2wZNSLX9ceaBALGjUaRkoD3SSHTPSyrii9LcWL",
  "key20": "4kUC9ii4Hy8QcZN2Wwtx1a7Zy2BXQDZC9fNmsyvNW2RMLfE4MwTXSMj4YuD4NucnXXHsyroaGtGawkzbvWR11mmk",
  "key21": "RR9nf6oQcvqLX6Hs82EiSnHY5raDhRCjJjm7eq2o4gosni5Q1qiGA529AGNugW5FoTmhdevn3dfpRQirz8eMTQ6",
  "key22": "2oZfMB5W77uBB3A8KLfbcMVuYG8mEoRQp3CeeCf5DM6DQW4UaQECSc6rfr35GiFnxXCjtM2exS1fsWSYhfdyq3mG",
  "key23": "E6iPaTMWQThe6Ru2dbjbDJ2gmZJY4KmmfJ2eBnK9QVS7tb2oLE7k6vBL9KkczWn71sQSEE1jvGmqTbYMndAM6mV",
  "key24": "2oV3FUTm2eNE8hHxetD3QEJpA8CPrxz3TUwUrvRyxRBhK5FNr2pV9a57nnrENPnZsc1xkKBmRZUeVwotW81kyV1M",
  "key25": "3qHSSMYngrNArgBP5U5EPBSe8fc5YL9Z8g3WAfpSoFsdLgoNtFkwjFEDS4NGXBDR3j5WvSi3UHnL9MDupXkmPDAH",
  "key26": "3MNBbWHSJPEkjH9MhLN1F6NZSJkfmvPxECwCxDarrWuZQLxwACD3YfTBwUqCELkQXECssDB2TZ2ATZuhwhTzXAHa",
  "key27": "2jMwEB5am4achNmVneyYPj4tgAhKm9aCfz1UTBLg7wBs9qbdY3hX1RPfJw6n72JWRN4XqDuBmdMCb5L9tQCW6qTw",
  "key28": "5MPJ162MEQFDkx9dbYVostLUHj7L8pb8ZwQ1jVxThn8rAuVDCjKSxsd7LecERLHDrQFspgQsdFRsB3SPav8DVfWn",
  "key29": "BnG3brqvJp7pyYyAWW6FD5yLH58WkKAwjNsVSRSs8XN4ggbM356T7DPR2CsgesFjfFoQ82ccJ7TyWxtR9kBm5pp",
  "key30": "4iTHXiXTwMpb4f18fHLKNF68SGPg4bJTf47qQzspUhbmf2LeK1go2t3JuGvQieJmFXLrqR2Ft7hkG9E1EKazwmcK",
  "key31": "2AmF5aBSkH1GbyBWKho1W1obms83tUMDXQxnfp5fnQWtkKKkzHXmvnqVPFVGaQKMc2i1J4pUfFqXCPAiDgtuUNGs",
  "key32": "4jmy4vYyzYQ4nekS3o1rGQeM1HBmfjd7L7P6Y2UhjkN7f1MEHds6y1Yf4LXBqNUjXSxmujzpouMLgwrp3d3JWEBY",
  "key33": "5D32S7TtVc1cPsSXErsYMaqdSSiAQX4xvF39gMgK1brNM8q8PF5wLncyZJy2aX5sxHY1p1EKV4frEHqJfUerMQYy",
  "key34": "2bJ8eeSW7mmWeKWF1jofGRsfQg8rJBCt4VJ8bcxtw9jfCWjKuEcMSXnSdApnZb91UexTW3V2yUQ7BXWx3yt936T",
  "key35": "5aZ9GsyHgsvWJo38n6QoaL8mmF1n5N8uboispfc3YU8ATi56ehcQ31gqDnm8jiVMWGRwVkvw8TjrJsighHs59uFy",
  "key36": "32YK5hr9iwHRdGoSDvrsTvJEecfYmUjSeK7C4tfJYq7WPbEAjAHJorVo9sixAEiBuYu9bLRazUNFogPrLQaYyBoo",
  "key37": "3QMtF5FePE5XD2NVfni3oonN9nPaLxomEUSPhTHnQedKbPLgZjWe84y65tws9RjDAz7qtpSwXsWQwPzgCLo3CixU",
  "key38": "XKqGwNBwo3cFfrBkFqkhpu55EFdw7RnvPNoxDptbSgQ2fPRGhLZP2Zd8EqvNA2bgVmiRKK3UBpSaQVMLBGXz5Nc",
  "key39": "5AozqFkCYi6jB2UzNMThuACsUb8Kptk938osCjStQ18wk1vRvZgvsX3NEFYzowi4Aafs83pTAsHB9oSnJcMUAfqH",
  "key40": "3nFQXtztWMTMXcBRCZmR5sDYC2fJgZHnnp6h2t71D1KSLSHhzWe7xaVecf2W6UTQjhQENAkHRTeMUzwbs4fzFsDf",
  "key41": "4q36HKLAztkRUdnEkh4abx9cKAubuU7h6QNe47nJnAgdPLvJXZXBUFxxsfKz4q9KiHgdj53naqjchRkEYeVZiipu",
  "key42": "3wkC2WFwPjvj5z2ntH2VqRjF7Tm8dwqVfH73vvuPAumhBE7yQ4dGtBx7kJ7MFNzQGyecTDRsC644acBo2axZUEFN",
  "key43": "jjHZJrQkqnYyB55Ws8Zm17T8kgnja6np73DS3XnctpUwahbAQvBzLjZpSBKFFVeY4Qm1ReauecNWwGdphrtZRwK",
  "key44": "3qf7nYg4EbUCCr9A6fUvCPH5W7ympzEFYXsVwHzPKXa6gsBaBJUiHQt5fChW59ANpjY1mw5zhhDesE4psEP69voT"
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
