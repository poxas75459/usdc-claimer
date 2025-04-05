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
    "pWgSgCTH4G8FqYJLQACcC4NmXDNpMDT7vmARcrLboKFT79s8Gajnfpt3AFhvEkSQc7pC5vPSx29gwzKCq2qo3eR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y2QjcG359tkvFcoJkpKxZSuapSMSRiUVDQCGeYb23VNYN2N7HZYCRePDPGv84TKt2itbvSun2mWcT5VJreBfHfW",
  "key1": "4ojdRbLEkDkuAfhGTUQSgVHzb5PtMXXCTbwhizEgRCEwebYpWFgCg76ctsrtSSnfGfi8ePLGtgzD9WzHnTUXGNhN",
  "key2": "29MnqUXSy2Z8zGR5esLUfxCQABDEUYhWBRxw2fmgyNvFwmzYQ8Nbejr7qFvgP3oqwuC5tQkMfkzzE858vbCr5wzv",
  "key3": "EtXRA1nDJS8Z8PgMTZvFq4WxbCYyecSp8wAU4FWQGGq6cVKgc8JjvJLVrjvPNKg6FnGuiuESwUdxitA7EcWnnz9",
  "key4": "hZ7fpZn4V9Tfq6DVUSkD3WzPuP285oeCwrPWoDRHsDpXtnptKLNqdwTrQzb9cAXEKSL5VQaELRsX6VD6iuwTcye",
  "key5": "eSDk2DhTseKxEoDt3BaDSnFZ86hc2a7WGuLdPA2Jda8iBJAfGMpy9GFLTgU9t58UDAPdnpGW74UZAfZiH1mcqzu",
  "key6": "3H5CwKUnKuVStkJV2YEnudoQS2PnQPVXdLeQgkXkLDnS9MheZU81vUCxjk6XNQ71Gr7SoTFhipUq88FCXXbtVhww",
  "key7": "4Azg7rbJriajaqsc2WKtKNsnXQhwqQjsmJoV3g5G6J2Q1FGxeJnRZHCAdd4EC4QLjD5QfSEP53HSwbuBLj3QPtZq",
  "key8": "55W9ugxGsScwBt6CBskGx8EFhW6gavCHmoRrqCzFa6oGbVa1BqoSKwEVmGPXNMbZG6wzS3zi8jXphrLVSQrVTTSs",
  "key9": "yLefHcYPix7Z2JaWRbtAdr74uEkYPuiJzvavVpVsNpgCpQL6aaczY2dkeMiZZL1vPvGgyNk3wyAcQgyA9BnL3Jt",
  "key10": "3xkCCfSUVX4tzrGN12kdKj1UH9wrxXPuihC7PuvJtppKzYWBDh9fzJ5A6o6U21sr8aAFpgv3VNnnFc8kwhkZxWqv",
  "key11": "2K5tTaLswxFg7wKxXcMQ6jFzu39tbhFCm3mGFuQuQuFQbdssiz7CB1VVrshuuTJBg8MKb777mZEzprpA7iXLNRcp",
  "key12": "5NvKqGNdVF3suCAk5c7um8zrnpaezEJXSamcHZndF3Lp1JtHyDL8wsDYakphFCrvCRXSZbxv9bhsptR4FR9J61A9",
  "key13": "61PGtuT6CAhURuUiuFAY1x1cGkBsDUzupQUTM7CcgoRiod59y4eBf5rtdhGzKBUBVCQbGvZN9NtEqS9wxUjdhdJo",
  "key14": "5a11T8XPNretsEcwnbAQvHBicZB2FDXdDMNTU6mGv2xHvS5G5t1XEcDnq3nzxgJfXGrEzQoD4YZdvg3WtXRMEDCc",
  "key15": "4dwcUAVZ6tD5iKbFigRc719AXLrSs729gHrqLyygcU3ZxrgynR2TnxBXqFvKRkaYxbG7hWgW4VqAMFzwN9AAqvKx",
  "key16": "3fBK66vAj33yEF71JVZoQZ3wZRakfhgrKawrXA7FWAEW71sS42L36SFs22cY5etgKBUd67XdzdgYAB8rhfEJ9ibW",
  "key17": "2heTccYRutjmwWxMV33stomwFuPaaB2yn1XXM1hCndRupWTdhdRPdkY7napRT4uk3Gw1tLCtpXKHkGDABwCgrQ5J",
  "key18": "3TrK34ehTs3GvWLYws2SCmaxLsuzvAcu4rVnoUcWhnofvcCt7EXFLLMqvbiEpo1cWVbee4KDbz9W9uL5kDWgbQCx",
  "key19": "4y5HQjPYjirXXNs4W4pvEUKQ99vgSc2dEa4HkndA4MtbuiAg4V5UpwZahKQkeBqEZv6gAWD95B1VFpZDMrvR5EB9",
  "key20": "2gkMLFQZUw4FTzJCvd61y5ZWLcNrSUAa3r4DwYJvYJsmxeoZZjrQr3HhYsDU8MxtaeWsXn8orHehxoUcTurrVr5R",
  "key21": "41ndocpcsk2S1DoXrD89yNLF9yfCirk1C2EbUjz9U44LsQTLwDVoJikWB2v2JxV5FP1EbG3TGV9tf4PFqspDGoKS",
  "key22": "3Av5s2RPRupvAAgPq8FAaktSxc9HWVyUHXLMYoMpinCUBnUz6Lhcm2mLnmbxFfTtYgqCFT114eXVimRp8KmxSYCk",
  "key23": "2NJmFFWng5R4XdnRPsMxpNskht8sTSAg4bAjiEdZJHkBEua5wkb7pdd4dN6VPCDekki16YaTZk16LTgPtTUdhJMT",
  "key24": "2m1TSUVwEWNZWSck8vkRYZkdyMtfNQSRmA9Escu7F7xmxzFRBVgB3eynQQCTkqdhuDEYpTJoRTeNahnba9ofcRLM",
  "key25": "s3xqCFXPQvRV8xbwrUYYY29gPEfmjsPYofUyAHEywSq5j18TQTfzX5vk4LEVdaRvTszZcLmVDxH5FXUm49jDZsp",
  "key26": "28N3hsmJAxm5ZXMe3yZzjcTmJvAnEgmeDk58xXAd4xxFvbLMjWtbeKesNq8ZER886ktPXjSya9tLhGixa8FveX2g"
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
