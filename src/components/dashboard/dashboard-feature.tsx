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
    "1n6BGWGDurFUtmSx1fZ2DtTe7pVVcYFgfz1s1H2mcR1T232NJkpPGtWqHrJEyP1JMWXqLudzedPH5d1tusp2Rhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2asxnRjdbqvJdPvpBGeTSCNxikjywZAGwLZyAo9ZMmdpwxNRxJxek9r96fzywNTc2Vkb1FckCdKiirNUv1HsmbW1",
  "key1": "43RwgoupbwQneYybGEUQ5ac4GJzDTx6BNxwC4WarbnqUiE8bjAM3EF44yfeuqfnX3fSxRYEboqkbtZdkTEnyGMG1",
  "key2": "5GU9KCP2oMDNq7WwEDNxHnTRHcx48emAL9RsydF9Az4FEJm31hsP4yuLw43acDJ4NornDsaVu5YUQYrevCRPKm8R",
  "key3": "4KVMkw617Ww9izZMJM2LuRxzesc4rUYz6iBwjSS3McpyJ5RPZCZkftVb9CFfg2erA5SjetDM9WGPFpTyh9VmZupY",
  "key4": "9mePXD2743xRne3X4raX7HtRzVrDhYiTY2pmuuTzEqrdJtZM6eSEz18ECDynsQwXWoCBG7KXQAuFm65LZhQ7zuU",
  "key5": "3HpXuEb7ezoN22U44iyiuoZfvX2nkeJgSa6HPAhm45E4PtBM3TBCBTGSjAuxN4oVspj7qtEgpCoq74VxhuguM9fh",
  "key6": "3Ag3BxDjY3LUgp7yGb6CRNJFts8pna3H16hSgkS7CxnobuzNQwHAf3xQfQjV6SaLUmbK4d1mfCi4wfaufV2TCv6D",
  "key7": "5nVVKNVsgPT8D6ecWja7F2ZTf6m13WS89rBoRQuDexMXULa8DUmYhUjnYxAnguPUR9rooZCGysGWznNKsPWHUDWp",
  "key8": "46ejBgs92PY6eNZigB41wXXYfVnYAaVffb62m31SGhMhdYrBGAtGfsYVwJzsh9NeKgvtH4EWBhJgBFM4disSpXgx",
  "key9": "NSMhtJaz4bm8gfsPsyyw2R7PqDmjfVaXLE5CEACqA5q3zfj5tBo8w8eEWwEqPkYqve9F9HcC37usB8sTaud2z4S",
  "key10": "3mirPoHcrB6tV2Jjqwg5UkMNCJDbiu8iaYqcb5QnvYToECXsj5iCw14dZezrocEezKJ4aCoKii5RfX6EzhnpTw94",
  "key11": "SppGkdVguqRJ2iXkxXhkXmxusvJX2Hcds58xH71PLkVsizHMtYEPLVcNPcUyJ5SE3BSq1K6JoUGe3o9xX3nrXTk",
  "key12": "2suXwap6Q1F5wFNDZzk4i8k7y5VULCkkSWwFiG8mUeQy1xeSDL9mm5dPKuyNRpDoDkpMqicHTEUsNKfVHDYCMaQk",
  "key13": "2rF8B9jN6ae5ruva6JJmLGcwRYPcybKazyRweTWJQK7XSsTQ4WGTAF5rrxnSJ4vuRLByBfFfs7ZwugHBXaa52vFe",
  "key14": "3DmoaABNgWvs3N74WCnMN4DruQHP5cXqrHWVJPhP8UuKMAkJcwdREDHPZiExiALoJFg29NAabnzrdUeJ3AGjfe4i",
  "key15": "2skA9rkcbnW4mZr2dGYUn2BTtZAoNasqFsK4ee48j3XptgEDiUcbU1fEseztwJy9NDdp9hgrSZ24vYmqYUYYvKaw",
  "key16": "5urYDn1FW3Fw4AMr6tfAMbYd5bCYtM8pSfp8asQocMEFVv1aNie3bRuvRD2beFSipJY9rsohaDcJpS5dPU9emjco",
  "key17": "2RMLPCiWXwekAZbYWLyMK9JQzjhWXrsk8jnezmYvkr36UwMdWydVVZMe8eewGcJK7jK9h26yhujqNoN12a8XeXeB",
  "key18": "3zjqYGFt6udx1pZbaxLGmytBuCf3tf3adxHg7skBXfutRqE22Amg1Ei4HRQWMXDAiq8hPMoVQsWupFwdDRqhUsAM",
  "key19": "49rvDSWQ4Mw3TnYA9p4n9ZcTdjrsh8jK3eBPhvvX5at2LhxUBVfgcPrWfuUfM57CeTz5Hdhn1jqzJiK9FJPgqghc",
  "key20": "3Tg3oAFgeVjpUiFZGZWcaPcrWFhxv4WGKsDSHymbsByFhetpSDpQTT19zYLz4KtVqRhN8Xt1Jj2PRyj2PQFxJe9a",
  "key21": "5CGkdyj7KMy3kGESkWXFPbNLWgNYhytZ87kmwXHi14TrPfbLqgiDRYrgn3uNUEPWA4jheG7pHAc6jQKjCLwvpaWG",
  "key22": "4ZWWtJhcHFybA4eVbgUUmU6UseTnxDbxq63iLnMxgwqJ6vjteCuRrqy2wq7iZcTye4drW2vCGmD1gyY1aSvcJUdC",
  "key23": "5VxpMzWZA5fySTkyF7Sh2GVmHT4oa7R9eDKbtuwyRvs4csfqNEeW6QNQo5HdpZMbNkXTQV1wTr7zRG7WT4qBLfqT",
  "key24": "2zmgPUtix97izxFLd8kDF7V6bWMp5FCnTsfGWKMYLFuT5YgD7dshXpu44XgoRnWcP4oBYiuR2WTSNmLxz53irgkX",
  "key25": "Sny9tQRD1i9PoTgaNheaWyG4qbyVQA7G33SavCa6avC3oRhWy4tFADguFLnaikEpKuud7zW173nBrcjpATP42x5",
  "key26": "27XLRbFYPz62CeZWxaNtgSxeAMa1mG5HddZ7sgVNUu7uG8egX6b7CecAoHSjreBVWm7x67ex3otBBXCDaotiWtc6",
  "key27": "53XNDwpYBL9EL4SjkWYp8RwvvZJjMfXuAtKyuC3c8epGSXuT3HH9KCojAWJygTQ4BhuFkLcunKupkNw1DzPbgrTJ",
  "key28": "4fRa4qZmViv3nWQ4YtxtPrq1C4yEdeXrbJsb5tMh5DNEfeDGkHYB6J6XzT8Ppn6eEifrteuUSo1XAVdwCPKhTzTR",
  "key29": "2eWiK9fgSh1K1n1YoZPuSjqFm4L21RtmVHMEBcsre6N5gBXR8RP8tBCkd6N2zzow7X6qnoXxfDrkN5oaQ5GVd91Q",
  "key30": "4836WXhTDDpnoN63MepkHZhTgHp1bM44osTsnVrUxBCR6y2LqY2HmgeiGFsfLm61uTE463PpZUXRFe5bizTnTDPf",
  "key31": "2bwjBp1mcarAf9UrLpnxPpgbKWNsQQFWyDHyVmD1jtUPJFg2tL4GW5eh5Gwun3zdvExHrAUc3CeS1ZpsoUbMjLL",
  "key32": "5zeVoGxH41AxqeZhsaZEWDUpV9Xq2UyrFAAT4N6CU9aiAfYJ9wARxuP2A8YJM96EEtgWwwKXhwHvrpdpo27u28Ue",
  "key33": "UVuboJ3v65PdjPJ85zrsy7frrrR1hBEXJFm2SfKfnj52MGTDZVWH7sgXSVDEzVQLxyAuDXRd2MfR2MNvUxkKDnE",
  "key34": "HghLWCwJCz5FgZbsWUjjqJv6LvuXxQ6idvWyhtmp7LuB8vkWisfJyc1rsGL7ZdMicc4dzqRrvUpU3nAzpbQhaF2",
  "key35": "3yoHGLrEkFfa8N2mqs8BnqmhyUprErUn3hEHG7Qg6o9wsnAy3n6SPxNJ8VtxE1dQuzemWozmmCg67qcFuWXZLZBB",
  "key36": "Bme4Nd1YJNCE239Z9ZvLF58RW2h2pREdyfyiiaTnjMXiSTc8MUdNzKcJYW3J2Tmg44LJCgBB9KxpCdk2J7Sqb8x",
  "key37": "4zrNRfWp6i5tYm3pSYjabyc1bfBwe78MVUVkFkGhNJBMkiE4apH48VpoMu4AgsbQC2RBb11yQFXnpYrA3SF9Krem",
  "key38": "5CCD44FQdiL9vYnvMhUR62RipMfaiDtV24mQYWNrTeCx2U3DDZmcfXZskdXshknBzmeAVcCRYGMje9HCAbAo8UWJ",
  "key39": "2GjRhQWG2YQNxXFkgvh4Vh5QznMZKYBvu4QdMKeTnEYcrww35R7RimPEADojsaYcfkgWdh4zgyqqvdowd2yU4N3t",
  "key40": "4RYod4bRm9dXbjnb3D36Gr2nPrXKHirGPR1CqvwmxLwhictTjmTy3R4cdrgKEiCLJEXtXYFDuvAPvXSDEjsQRaXP",
  "key41": "Ro3AUaEHbTK92FWgPE7ytrUTsnF1uFdFTHeZ9At8bKn7u1nM2gcpkQv6QYfUGPquAa93J7gjF1ucgLUNUsro3AX",
  "key42": "48WZvLXfxheFwrKu1xRvAGq6HGALwseAwxD6ggTPDs4Y7hB59CFUw9osi9cEsATQDuqSx8dU6nZiSF4zj8Kd7Vau",
  "key43": "3h6LETXLCWMnauPLfujj2XEn6YSpR6cozrdZ3vyfgq1a6YvJNXhYHiirFraHQM2KRvwyCkJGwmk3erg2Ym33U8sM",
  "key44": "416TNBxWsFDWpBnVwhCHnN6RTCSj6VBoXsHHA7paZckNfcSNFLBuzfrgsMej3Gy9J4PmKdDjLHnTHb5x6qeFmEuf",
  "key45": "2oQNdVfozbVEv4StGGTt1MmDBdWX7vD2vap9vDcY6xzgskbAxjD3PjVM4vLHwXJm2pELePCT3VonuvmA96icoh1Y",
  "key46": "5wKUro17V3h34SRwecNKhHAwRbwqj9AQHVxRRdJh88RrPUv3HELPA33W9CNJPEKG8UbHAJn8WBCh79tzsAZF5dVG",
  "key47": "3WptpfVfkrgS4dULdb4poc1V2muqfNQrXivdR2BchvL3KxdLooq1k4tPBEkecq6nyUGVNo9WomuvVMo7rt1A4acM",
  "key48": "2Fs27NKwY2kxDdmgh4C5X4AUPPEC72KANhXPQ7sZ4wLyFYfu6Medn4WNgXAkWWeH5EczFDDeUYrHNVDw8BjMseEd"
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
