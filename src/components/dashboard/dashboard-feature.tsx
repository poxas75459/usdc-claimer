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
    "2RdQKGaxyTJBnxCgJ3yjfzyr4UkXD86BwmweguY4Fd7pmBJM4deeJx1DVCDA3s6uJTr7WjS6XSBakt74nepQMaev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53kr5cdwvjh4irTNHkx8YpXoJE8EfTiKUwUmcwJSdiwUn1NgcYKxx2Ccx9DVJZJoTV15gkLMx8quKnjpszbM1ku4",
  "key1": "3dCy6BLq52VddXtNr6in1UWeKqm5SL9fRyjS91cLNDsaZbfD5i7tGAqQjZdJxqGwurZtKeDRmVMYT3JXfi2pH18u",
  "key2": "3DsHGfmP2RJnBD6ZjgaFn5KLVsNFbM9vtM95hUg73GbwsRifjMnYZYzEsZXpaBFcoqfAFxJDEs7Eb4foLQqvXwW3",
  "key3": "3eNq19YSAzaRpVS3Ljx5cDxeZHhSqXdChmfhzFeXWX11w4QTpoy97bQaiUpaazikPGyfchFqzGEg8ALESTYWX2fF",
  "key4": "st7nJMtV6p2VczBF4kKY9boYMuE8dXMLZAM68uGmVpDhVMMQ2mvg3fqdHLnyNAjom6sHac4Wgjd7yKKkoycoSTo",
  "key5": "5QdV3tTtdCh1PJY2qmcqLCBSRQa51azD7wiR9bzq1fVPmq1F75JZekrqaWWsfW7f4S1WT1rNcQCYdsyMXHnh9JEi",
  "key6": "3UzmNowooWhafXQCTRpz25sEJWauxJEzrTTLHEtycPvwkAnSLWsnk3SaL7FYSy8M1UeGPEEz8jXgXBzJYDt7vhuf",
  "key7": "xTQbyR7YPrgEE6tTHBT9rD2nNTBesadmho4fxnVAji2ZcG2MQsd3e2gffYK89TBScBsPsqWKkXFnGYAYcM7GKhG",
  "key8": "5qAwYnjpWg8ao38U9o7X6xVuSK6o1SixQMBSjAa33ykUyRCs2YKUxBogNieyadZYyH2NaYNcub1c1rD27G1mvUD8",
  "key9": "dkaGfwhusS7ykNNEue1z9ZUA6JUymEuttcXaPNUc77vJPTm54iYjn1pRtngsQhigMA48rhLRHwYhdKsjtRJ5bb2",
  "key10": "262VVJ9xauR2SN88iBYWYt9nbUYq2vcsjUFUV8msX6Wfi3yQg14oWDTTbN3gghjgBfZV9odyj3xzjW4dQsNywnwj",
  "key11": "63MjLcJStG3niJ9qyx88CDLzXjJNwhwsbnx257NtMArE2b4FJcRyEgF5EJXrif7ssEXjQYb5Wcx4n9ZhQRXcxUr8",
  "key12": "3kCM8sKChXa6kz8PCyxoNT2EZTQf6RSBD9TaKaq8zpQjwBWJmgi2kaf2Nnj5gtPxHoPMWbYFmDPPAEtdvFKQ1cSP",
  "key13": "3WCAybmioTrZ1jnGe7hUjhCjvDzT2sYrjQVAV7GoBqfN7HZGgbmu5RaHfEhWY1dHUsqR4pHwkGXamCXL3Ae4hvgT",
  "key14": "Loo5YYk1xWpXSwtSF4dTqcCfswcgcdqoa6W2gSWiaTGA32Mn1frTxMBajGn2GMF9KseRu5E5iCngGgEYB6ccmYz",
  "key15": "31pTLyKgnw9DcvLfiwu3Vt25iDkLPFCpcpN2DxKPobG8xq6eMbU5NEZy6bRb3YGkd2aFZFRVeb6jjKVT7AJzWwTA",
  "key16": "4WPwibrAGNUGWz9o5NNp8iyJdw22GfsHJ8vULpDkPW8EamY1Npiaczu41gjjkf4tJNmLhNSxC6QQ2g8iYeZyg5TM",
  "key17": "4PvmbYHkvfEzJudfkxuMtc4gTCJ2abbM6KMc2JLDejcdXGjLDyVLioJtDLEeFDEy5JHRqNizC31au6ePAcZgpceh",
  "key18": "4uR9W2N4pTPfTNVyC7GJtzsnevW6m8cWjEYWgw2N8VU84RrTSTjPo4iTsYQjBvc7DPw91SymJ5t96wFeGxLBduqd",
  "key19": "261geqFJxH1xtEUqnXkTadJjSKKy7g9AphRgoyHn3rvuqPs27QoZwK6Z6yNaRke6XFxAZmz3ntSmNU8hWhjUvfCi",
  "key20": "4zjC63ZDFNG1Rf4bsP7wrAuunRCckHAx5h5ZGKSFfBUcoARPxH952Gy8bWAU3VDoZ9Gpfbg2EHQK9gtkxgubt9JP",
  "key21": "4xc2NnimGQ2F6ZD1YR3xyeTPQjJ8G3dB327Vj7fxWtk1C2r31HMGzqqZL8QqgtePa3sgJMMY2PQ2ndVm16quGzrh",
  "key22": "Jv75ukupKo2rs9DZs7p4eygnsCCusxPWYj76neRtfh5ECtQu2TgbZbg4sbQoXX12Y9YvP5fcfHfJYBKM9v3LdAU",
  "key23": "rZCD5fM83tDnVZYwnhARc6YzBwCBUQqXE9FJm3TtpTYCbsQ9qCoC7rAq5pdQV8wrZmpoaTXC3BNK641NbZWkK3E",
  "key24": "Ygu8SD37TnATjykk7f5YrkDN7EJBCZDB7ocHhEqfTZPCGk3GiGCzCYLfyqEkbmtmRN9kCU2NZKFaUdkJhxveNpd",
  "key25": "3ovyLfVpj3HorR658iwJ6BUdmmdVr8aboZqXdgvYqJf4uC6NkjVJcH6xHrENPsWf87jzAM8ztgUvyz79iBfh8vvD",
  "key26": "2rVcbVtLDtNFYrbbqJADuzRxoeZSi1oBTEnksEsKWZKTjnKsuohW8fVBYxTrTuVCnoznDpYxchFQ9U2kJcTc2rsP",
  "key27": "afxk2spMLzVkS4AJxUPnrUZDnkbu75Gd5cwNi2DNoQRm2addjoqcRF8WMhitvCawCGtF9tf9XDHiQu5CTGMh6mv",
  "key28": "34MncyruYYbwCASo85c6rf5AUeJ5Bc53diyauGYiH12wLeX7fBZxR1f6MVy1YnEGYXSPikgLmyZP7tTTkr5baVWJ",
  "key29": "7yKjEeXMU1Vcfuv3ru4VNX2u3414HLpsJjN2MJcQB7Wqs3gziHUzgr8RjNodp5KpA67GQdnNn3srLcpbob67S2N",
  "key30": "4meLMSTLtqCkeVPycpSkZ8tyCjz6iFEzZVDyTLEMownUN25H8SUYQ2GFni66ue58UUuAxb2anbNRsvbH2MHJRtA5",
  "key31": "2Mwry4dpBHqnbcTsPAr9syDtkRVjHxesxPD66UQGGypVpAqEmbKMZzUNfob7BrQ9Dq7p66g1NbYG7Dc35DgNTUgZ",
  "key32": "46Mw297tfH1DSY2eBrRHLQKUbdc9kL9EkSCoE6wn9qPhPUM7vuyg98Fu3rzFE8jmy1G3kpjd7ubVqR184WfhmXCj",
  "key33": "5agVR4PcPcqSxZsPi9XLzri1hScZBETFe9K8g2GhY7djNZtUgYcdvtHCfBx47yhS18FhSHjwrKhYegEjLFEZRH6P",
  "key34": "3rzhjfvz5BohYbzBkG1CFWbWDSqDaRyCCMSGc3arj55pq5CteEZS6PSN2kVyDW326aCPx5fFTyVv2tLgSzwFogzJ",
  "key35": "29euixJyktpEEj5F5HKUChMNwYKSnUJzcjku3MdfaG2vyq6TaRz9xnbPSfF2wNdSSLXfP7fUL17snfXE99GCGeGd",
  "key36": "3msDeqLcHrwpVfYGyKdX4e2iVwf6TX4xa676vQiN8ua6i1WEnPpism76664fXmGNthYr2BL6xwhXs7vjddhQTTYV"
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
