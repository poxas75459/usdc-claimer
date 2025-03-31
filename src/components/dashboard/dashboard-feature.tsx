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
    "2YNcbZAv6bzVfxcFh7UERKpD3bSXxMfHiYkTthoCq8shEUNWfFza4xgqPUwzuq5ej5j77josekDXSB1vKfYSiEnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZM34NBaTVdNi7dsQTeinuqbT6h9Ucgmqz9uxgWTVoADcMvJtqTgyzuY6P62q69iY6jAmDCv1r8hR3gMEaNfM1NX",
  "key1": "5FytwmyHUTiPubKdS3MhxPVvgpzwQVEwfqd5UVuo6ayXDVeD15CZpHt8uhBX9rq5wfgAkdYVmMAcg8hi5gYjBSgn",
  "key2": "2xv4ZXX3SJG2dQYAjdTKxUKQHBPCVF3VRVFSJMdZnU6rtXLyJgtSfPUjeJ6wmk7ZUYB1z53oea8mj3WgEzsWM61B",
  "key3": "2rVPyw59GJrzrVKkZ8i9LBAw2FzzRRmUAfoLFUpNepCiV6nzNWAdUbix3xVDtVEZwTB1ZTB1j9yqyVev9Z1SiV1N",
  "key4": "277qSnwmobE5EJYbYvNy6QMzvQynMXxwAGy3FMz2tPrM8qqtfkJ5oLS2T3Ee23hrcCpjmadKtzRe7CgieBt7Wzg4",
  "key5": "5Mgufru7DUj7oTiQAe6DYH2NGnxFgfHgZnAJZqi8P2XSETsPDd1AjpiMbf8xLFrPYF4di21Xft6JGdeKLed1Tmrq",
  "key6": "46HZ4FUS2xV5CdFc64sbdoRBZraiWCPmqMdBMPu2iyxrZS475X2zJaVgkD9amzvUkHfBfewVFoLSb1TsUKFPPjxF",
  "key7": "5p6ggz4xGcgspvdi6NxLjCQK6cN8dv4yuNpzBXSsxaUMJaNTJ8PUtjsj4QBRMzbvaSCZ8o9H98FSVSXgTfWfufrw",
  "key8": "4Fa9aFgPvnhQFGHuVFFnxkutfj1Hao8tsSBqpyiM6UUp7nqLZ93ByW6Nbve7uKyekWMu1Lcax83x8PfpEBfWUTna",
  "key9": "EbDPRxLKizU5NTZQbbjESZfzRP2HZBAVg9NmKFkyz2HtVuJvo6ugXYwRiwEmEKffzJ425QgM2QPRYyDTqvRLmoT",
  "key10": "4RJwpgWYZWyKbsYYmUyox7YDXPjHbZZNW2eU6P9mMQ7didFhYfAAmZtQcEj7BbXw8m3TXYvtjtsAZRuRienMCRrM",
  "key11": "4Kxi2EaNRd4J2E4BBdG3FVL6CT75mePW7ZUK8chvTrNodkGz6YyZSrotVs3EiZkE3UoV5sxrzLExRtG2i19e72UM",
  "key12": "mjPCgy8gGJKftYsEBopX2Re11neNUrY24U8N3kX4H1R2A5MBDBcGErWb2KQkX8wMP84aScosEPF7KE91dMAiHa2",
  "key13": "FfVHLE53FzSY2nTYDHbgp2ht3JN9jwbN9jA43VCMbpzst9W7BwGESHGv5RLuD9Z8JQnzEffEJstyWWFut8RKrCB",
  "key14": "3xnPPYC5ca65SRughbZP2WjA6x9gcWgZaAzPfiEZqPkbUV4tdq56H98L5mFVQdqo2Gkp2LhDzqLpbDt8orXeSwCM",
  "key15": "5MWqqArmsW6z6Mb5r53hVbELC5VJa1RoYTwAhnTa4BzRi2NgG6LwuvNw79dgpbpYJrvVuXw4LSmmhgZjhA5WMxbn",
  "key16": "4TfJ7Dxwu2xotGTZCpYsoYX13wHY2F737CzyrbGsmVqkM95dNLHbtkpcjHrrLkMLfb3XhtpScnfWH4wxapVKCPHJ",
  "key17": "5EmugfbwjjeERwWBuG3L1copiV47TmL6RPKaqaihCdojfzarLcMPzQyRNE4wahUmGpBsgk5Yf8Hp7LhftfHtVHMF",
  "key18": "2PARcaHemG68A1Q5hMhMfeMxvujh9s6XhLqwDig8ePg1SgEH5BhNZ6Kh59nh1m4Brxd3GBx3hr7Ya5GSqJr7reGM",
  "key19": "5AqGyLBdvR1isay2uv1zYDaNqkZWAHMLNL3keGZ44vRetBg9KNEShmmrXuht9tQcrLm7YLU8pRuGUtmrHyP3Bd9i",
  "key20": "2Da7HHLQgX52aM22WJsvGc29oQUEZHPaoP6WVoD2y9YRDAFhCickcvZzCat8c8sgkKZL7vANtHheznwNiYyM5wD1",
  "key21": "61s6UtJmS6kzQL9sKCG4b7DfTUYj7LxEu39kCjAvCNy7GyuKLrkWSFzA7btfiNLJCcMmtX9U8KXXkREL1gT5Akka",
  "key22": "67UL2i7xnbfdE6Vv7E6HwLafiReVQocYEhDaP4Vi1MpMLKSFn6s9br1YXtjN1xc7j2vTqW6GBB5TJr1mgQRWiRDM",
  "key23": "5fdFDGiTKohhNDMktmX7WnJvhySrvRSmWTNcDHARTcdTyuoVAoY6Rgd7CgkEj7gtataTSpFqLJ7X7SgW6XHo3Jup",
  "key24": "4JMhwTH2BDysPgY9FJknEK5conRSR49gP7gxgySM9fWKTdmMFT7vZfZFjfo6U5z3cVuACH5G7C1RkdVDxSmKQxDA",
  "key25": "4H4BkyaSbqVhPc7gHTeZLb8V4ypXxKTMYK5iJPXGszfxnF5gZ8D9W2Po7iVsqSCKeYurmuDCRmTpJjBpCi5yMJ5h",
  "key26": "38a7FgMVWG63N3MEagxJRc4BwBg1Ledh17ESjJwquJ6gZyFwv4XRtDQMkaoF9AbF2ecJQVcUkYtTBnHfFCKptVcv",
  "key27": "wqSvrnfkLBHQ9d19iJjxuYoKuWU9Hn2ucw8ynudUsVL76op9W2EtzkMrRy7W3UvHapgeFier5hbhwnZQ6HhLDbL",
  "key28": "3sNKPxR9k57qgDAXKBXNTpytQHsuqtz1SNpD5SMbMwJDrjdXTDB4n5SyNnXZPeANR9qNm9NA45GHgTeBus3WDF33",
  "key29": "3py7aFCvJCMknrw1yiZcKjAhr6FoEUaWGqConM8UFzZ9qir2qdqeDRaqKLecuy7CZVMk2RHVAVQhvXQyucoMFDXJ",
  "key30": "66akPzuDUnS3NcZdjeJzwZASmKpYrNDxpjKctjX3bnGr42Jhcc3vhGLDF9qvr5rq1uNTnunAEJxY4pe7TnX5rgCH",
  "key31": "q26DDtMZLm3dKKjrBEXSdBhB4ekYFkqB3UgE2ZyyEb5BY9bMihkXdfmhvHxLv3u4CcGkiCtqujs585tVmqenSh1",
  "key32": "43Eno6a8jyLvBCmNowR4hELCMev6GsKZQwBAj8T5UtYE5z5rxX6dnvobA5CAHhTWU4QijzicwQ7g7x49DEbiCQtN",
  "key33": "5Gr8ShhCJ7sYbSqvNhiLcZRae8aAYMbdePQ2TasUrC5CGW1kRnYWjKTSSz11w3fc31i9s41nJLanfS4ym14DKpSC",
  "key34": "wtp85VibLT2nv6XELE4TQQRRZbfwzcFLMyn7yCAhmaLTrXH6bbzVLXQCDa9DK8SHGUzvkMtNUXYkYpmGgAp6Fh3",
  "key35": "5XRfejJcvMPh24NqVTB8usbadc7oX6bb7aAPp1uuyTbZGNHaoqJtWs7S62xXA1KXP2qtSDVAWRQTt9LbNw6ud2kW",
  "key36": "5WPeyben2592nYWJmS14JhZhu3WTm8ZrE4ksh1q59v9gyQWXTgAujo123V7zG29CdzNaZDuiB6R6hRsUPAPr4gVg"
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
