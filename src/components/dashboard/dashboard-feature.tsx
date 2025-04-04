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
    "5o1xAF9tqrY9ywajpCKFcLqkccduu6CaFEwCEn4gLjAByFiKrU5fB24VtKMdm9siAEox35yq4sGnEpKfR92GVGdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27byNfHZf1h7dSFnBdgvoqSf9Gzh2imV2tap3KJVjWhWaYeasSUaDWvo3XH7bGuqNwgkYWmUDXbNnjav1JNVRs23",
  "key1": "2gGZHMHzWbBgRHeTQmUKKMbiPpvALsa4oCymTBeP96tor7qYe8RHDgqWnbWcCqVCaYqNLnH2CUjG5cVAXiLw2Cqj",
  "key2": "2697gr84CcrYkgxKekW1FPvymPC7yrR1pn4g1Zkw6TBWW5dGQBAYgVA6Ktci66PpgpmAY91mPvhgsqvCKARYxtSr",
  "key3": "uAhwTRvcBCYB8iPr8ecfYvVhxnJoEKG7rGcDeTzLhojDJQ9eEgNd33jfrfheujLGV4fjotHvctwzrCqJvHFzsb8",
  "key4": "4Hc9czqVDkAyQifBpPHzsLPazXiQizYg3KtyrZU8occ3sgehDcToCY3x79wzHsJ7YbNZWyf5iCPSSM9seb2YiDz7",
  "key5": "dbCYx4WMV9CgYEF6wdwuaGctR8cHtXy5DUn7dDKrar8ain3SFfEnH1X3fSUenw3x1g6CfdxEkRHLCMaWFGopsv5",
  "key6": "46fbb27zHELGZDm6xkxm2ghgHpFy73SXHjqK4vFE59DUJg2wn1sVCTNxFDs86etjke4m3qK2pt73tbVDc46kLjVi",
  "key7": "4AhVK1gPmmteqi9NDViU9GqgS7buHmp1a2tHvC5bR39QbMa8z9mUQvZTZZStvVKuoZKXQc5qdM4V1sA5AVxe1nVc",
  "key8": "4a6EZLSwATAdbsdNMFsrAMwwda18N7NnF2kLdAgaY4fQ6cocZg4bdV1UTx3vuLBjLkEmupUxv4LWMZgL1VTUMdP1",
  "key9": "48RpueXG8vVbFd5y2TEhtS8ZhK3MoEa5Y2DrugMFkjr8Wb2rj2gVtKGTfA3Qs9TNDHsXMxvFNvM62devDVY7hpdj",
  "key10": "5Ccfq614fjmnuMCaz1xah6wkTFjoe3He9bUwzZY1Lkdk8757rue8GyceZU2ZPjbLiNQntdaWZdk9ffAGsqaPQrUD",
  "key11": "3b7okbPcLgi5uzV4FNnJpK9hApwAFVFqGASyxtUqG4Re6QR2y62ATZCRFTSSyctKiTuZJSh1aQ9c6HCgnVMGv6NZ",
  "key12": "eWQSRJGe72DCeiuxzZh7C4VUgjy59geLHRr4HphaaJK74cNNqZL9i6gzY5n4gctUqeFPiCMbRfKit7HfzhWK2VU",
  "key13": "sBK7QXqmckNNQcj1TgkigBnSnPDCBs6NqbvfUgoTyFaL68Vcz3UbjUmN71C1TyDeXR2JeCMEwzgT7Q4SRqvYfvK",
  "key14": "KZMgc891EVFCDc7mHxPWsangeje2XVLMQaa2s6fWfceetx4B1xnuUyU4uXHHwZWoyaXGeMJwUTNd629L9e7ckyj",
  "key15": "2Uf5cu5T6QZt9c3ZkYkgJXJJHAJ1F6J7YZSo9ZfCDR4YdeYabcxiNwddLowewraxvDQwd761fYaRzQe7L4kzPArQ",
  "key16": "5nKEJPGQnKYtfcKfqUbmgx4DhUkePowNeir81N6U6eG7fVCmG8sRDwJwXGFY5wJQV1rikY1F5xwCJXXHxj7GSHMZ",
  "key17": "4jZjuePucdZG4tbkQXtxV6KnwZM8zEbHB2QEUyu2LpRETGY7NwNCGMByKFJepWbj8fwk7fS4roAbhCEEgFfAehRP",
  "key18": "5q1T5KUS6zx9NqV6ZKgF2RG9oyHi5NiGvZDCCHCVZ47cLyVYEvfFZ1FbxRiXvamYnvyASSCxD32GnNzVT2R1rhFn",
  "key19": "4VzW2wH3jVhxauMVK1Un5rFqHDgAMEq1B2dNjq9kN1d7sHHVQiueJqZ2rf76NagguK5CVztwK1g4pcYGwkcq7Vdy",
  "key20": "59pLopwoev1wnvGNGxwyHFfbDn6U8AfA8Frn9ZrJD6wBrnHECfByA413MLXZDKWyFmCm1F55quwfh7dce3GP8HAd",
  "key21": "5ykZR2JC4SCsMWhMpba2AcwPRUWsa86eCQ9huSLAhS8MAmkEfVPnEcjkymYSP4rjS6m3dgMGqZqjfJSo9G4FdULH",
  "key22": "4wMiGYmRbXjKH2vk7q6AnWjTuuLFUWfVJx8U4R6DvCESV85SSfDh98sne5utRxLncbKWfHwqEbVYahFzLVwiVLed",
  "key23": "5nVV4DTpphuresZPsurcYDXLDQEf639AzXD7n1puZ8F9SG73ziFMK9GvBvhbsR9tayMPUFhn7YDbVHcBr1HKmkra",
  "key24": "5D73pVhdLMWxBQJwAsmMYiKs5oqQmwfQX8MCBvRxxXEZgvZNAiowBmZLq8MFSHm32UDWwKApwZkBQR2bHSFBsJw3",
  "key25": "2uEgSLBAAqu2PYirSudXJm89hx1xjPxTGhfcSV6NTfk5LnATCwjqjt5UYTPgoCGHQHEg2XZKrLVNG3veSjktAm2",
  "key26": "EzH35UCEWYPpYecZ4z4RGHyq6mxhWhP3vmCVRdtpCRxRwt2MrdWdp6C9QtWLnF32GB3wA78tA3PnyVMTJBbK2pK",
  "key27": "54zTVWVvb2DLF47KVT11GiSxCozGQehZctYsCZikUmStphpoCBeJzVj4CfwGVcJgPtQMRPEmaKcxPXcmqixvCpXN",
  "key28": "3uFo2AsWNwJvG82SVLf6bZDUcstmdRVtcm5uDBNUWANaQC5j5BHHFCoECjc6N2eVXUMjURWwKKXPyq4D7aVV6C7k",
  "key29": "bhz7pNLRKcKesnJCPCboktqvo6w6aJegWNJHqXxYEfxXPXACXTJz7ruKtuD2k2RTXXJu37N33LoRYm55JEVS12v",
  "key30": "5s9ta3J1DCLWJJZWRMfwTYEAg6JQtJxnoAAE9wvvRDXypksx3DchZtC3D33KvkwxhNEHvRiqynCHzkQePz1mouNa",
  "key31": "2hryEtp6bc9YrsvtMbKfPMdeWWc7AsoWPShmxgmszz77N3cn6KxvbsfCjcb1ySqTHgyUXhuMgULFGAerDe3CUgYo",
  "key32": "3511J6E4wMAUvP7qUCW5qsYgDaq7SAzmYK5T9z6PGLkmaS6YkdEkebQ8bTSjQA4AVuM2Ckb5wQzULPed4FTuioXB",
  "key33": "2QNCqXAYBFuzcrhoQ36R76ckeNTYcMgeH6pZrfPcyd4PSFmnGYH5DeCNuUhjPShxXBT3LydWtjokegvhfAxJ7dui",
  "key34": "5H7PfNxWrDGPwfdGFX6kKk3KBYy58bvFEaFsRBrTG5yCqPF11CiVgZLRSaHq3zoBeUD11uy4DZz8vXEkGqiffmq4",
  "key35": "3HUpmVaFeypes6B1QdPoaWjJ2FmFxSJtfsX8c9R7rwD1XF72KiB7qqxoEg3MKZWvHvWNv1QZYRJ19sJVobHNUVjR",
  "key36": "4adhbGdaeGykLDKzzZWmZPjTL1PUG4LF66idJqZZ9vC9X1jiPAS3cRZ91j4HWWBFRJ2JcmPf73GpShTrt2NDwhpD",
  "key37": "3t6j5ASkYk1cHg15xoSP2wPLwTNBZHi1xUBdeyWbAKZunLfSGdtkGPJbCDHe7td1fzF2NvrQQu2m5QRPuj34n66i",
  "key38": "66swJYMrXwxXSa7d5w92hMT1wcVWDMNqGXgrCSkpgSbi8f3T2nKpLCpx3VP4Qq6kWpcrN1x3Jv1owVc5KDeu7ddp",
  "key39": "5BmoVWei6FNhkZEQGBM5EYbC3T5F8sCK95ZCoy3cADH51jJ3yDPSSrv7NxgbNVsDQDhn2qxsbffa6Lx9NqfiPbuJ",
  "key40": "26Ez5Tnp54RaCEoBd3Hq6f62wgSGbiiYPakyGVrgUjAVqo6uhvHxKx4qQatA2xLYxWe2o8jTKasdanfZ69XkG2Ta",
  "key41": "4knoo49BHGpy2L8M4R8cyWheygayTFhqQCzSYWD74VnfMbcNQaGDk5vh5CBuCvQXWHEmqka51JeAfvtHfFUwX8Ya",
  "key42": "3nrX7sABdZ9C3Vg8FxCjraove8bHdXSdJXPWKLhwu37e1TyZBMSHbZ3MKq9bngxmZtwpVNU5tN28KDdCifMbTzMP",
  "key43": "4GvXcyZGMiLhcYnqEUFi1qivbFwXn8L2gqMkiiqJEE63gxJJiGmXbuz1TVBZ2cc2NrbZSvXbD1d6Km2geYHJwcEa",
  "key44": "2xEfTXn1T2Loydox4MQnMR39grUDya6wWjM7MPaBswNfijZRPyMahgoN97e6XpJpyEmRQQBXu8y6XFhddTj7VmAm",
  "key45": "2QVxKDXmXi4VYWiCYjdUGEZug8XYZcEeu8D5SkEUdnFjpPJiDqHmm296YshTkojokXASnP4fVJnV7z3JQFXStMbd",
  "key46": "37tPr2aaMp5doS5QMyxgPPRam7Pbe5ebkvp2nBeGqWdud8uZaP3aowqgLvjfwpt1PHNBBaUTQmg2gyo3sP9XpyZL",
  "key47": "2LknT8XLJikWz2nxvpAxd2wgaoBcUuB5eB11UCUKHFetqEVbfajKgXBjTM1XepiB2t96LHGzCUCUKYL4Vb86oGDs",
  "key48": "3JZTKhdhwfSkF5xqXAmb4EJxYbsnKKLZpTsHgL4ivoZTqpHBgGWA4qwSrLVBQJZuPADcCQez9Ar13scUHkv76i9Y",
  "key49": "yprf7V9WeGGdng56sMVfBo8tx6LyiqbPZEb4mupeBqQXcFh7cEMrFt5kSJrykDpdoK6bqxPom2TTqFkU8EqJoih"
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
