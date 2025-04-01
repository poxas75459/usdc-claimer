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
    "4R58T5Tq4CZKHanRsDuewEvJPqTqRgy6u7H53JoUYNstt2GGEtZYR7ZozNxva4GGJdvVm5y8ZXFoJYDTf33Phrse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gNPa4bcYPQxHX1sfupB4C5U3QYaLSdfDLnm9KBrGQnaxGPdC8ifzVXbUZpmqrT1XWJWW8yhgpLcfXY3y7EmTyvu",
  "key1": "3z2arbvrvBj7tQvmhoEW6vQdnEMJ7CvAtbPqLh59wXVtQqSHPuqmsDYv8wKck2tspo5GYEFumrkNiUAngmUar5ad",
  "key2": "62dk7643eeg5Fj2fMVSXwdQrnHK6eRihfb6RELAtwC3T4AaafxctKFRjyiBHZFc7uyzc86cWaY6vaGN1gzB1jJ3s",
  "key3": "3N1mQDmsK78mfJHsvHAqggr3iskqtZhpwBoTSxhdS4A5GeBsNwMSKHhdmXM8CwppwWvwNYPx96kojVj2fArABKX6",
  "key4": "2Y2GFrCuBJxcFsYiUxtVcYBK1HuGCG3xNoDwwTC6mwZwYgmx6swzoRsy8bUkBPxdaq3eGHAjUoMFGTcMbLWfbmBv",
  "key5": "4V5KQ1HbcahrfrhGCNqTjEU1aq9MbRa5pDCHATmGhNiFpwdcEv5StUvDyY35zgMWJCFgTMeVActWTfWTbQM4yjCg",
  "key6": "2T4pNbt3T5FUafPGyoFfgXmWr4CeqLz91sJWzXSDdqZdE12QpJWJ3zn1sxT1uME4suBaCs1vQf2itasCyWm4ST4m",
  "key7": "3pw2S1cPuspgrXEREqf5u9ENZo9Cu3MuN6ndMgMWLDCixPKKR3f9dFzh54G5pTtvKPfmXTpB8PxniHT562qEC8Rv",
  "key8": "3h7Xtwf8MHAHz4CCTgHP3GQyzuVrWeUBZR7yDpAvRz75pr8AGisipAZWds8KziE1ywkyUnxBXYPJuavUKvwW8TrG",
  "key9": "3RHmwWsgPcUcMyz52frhggEPFbyyrQrT6cjvheHCD2T56ckMKBW7PVZrCrjGFFXnzZ97ABT3K2fxit6Rvt9LoS3c",
  "key10": "4H6ncWtb5Avi3ifH6g7anLUmQuKi2BUCKTJz7rbHyHnaaB4qAPS96kZNEG8XAv8BUL8waYv4zKmHF1KPU31RqYf",
  "key11": "3YiTFQKqTR1tEZ5pBA1CjgTpQPzJv9Se9VmJ7DRHkRRLVLGFZH5pBc3kLLXoo2FGNFk8X7XvGYofs1aqgqBjdLNn",
  "key12": "ck8jNgHWsxn65Pez35oicuDDoNpAZvNZeqoB5nJSZLd7MX2cexW5csvfetoxwCRUrqL4mXyry3q1tdGHEPgHD7P",
  "key13": "4hjUFqTL4GexYqmzmZZ4hXj69emATmPefCyeJav3NVrCg444WTzSfUSD1ZPBnR6iFSDzvAQHqaB7cimFapaEoQ44",
  "key14": "5NLBUwEB5FsUR6nfr4cSpTuwYz7Cj9rUT5eeZ7AmBt8BtEs9aitUrBANCLGDTiLimXbrRdRhX7AgAvZMbRz4FjmN",
  "key15": "3yjozK1KgWyYnqoWzVmm14StLEYPHFa43LBq9ttetRFSxvgmYA9TDXKidCR9tGviqhE5KRFsmFECLaaUj3xrCkYZ",
  "key16": "2xyFNCYGxghwkZE921FVCGw3WFmCZ46zJPwronaWSnotoEQu5BvNr3eN8nYz2tsFKyq6hf5KfKoPNXPCkFS6fsux",
  "key17": "sJ9RYtExpRu1WohHqZ1edeyZLujcZnMJR2HXHEVaRifWCn1sccdjqDzvdugqenDQDs7Vty66omsTckxoxxxNa5Q",
  "key18": "4KKxbYHDoAEutRtYcbukPWYUQD8GqnECMj51Uhr6hEnnwpwDJNQqEAvKz1TrT4hBLNJjGMtLfrDbx41DhX9dApnh",
  "key19": "38M7rKMzeasSjxzXrUkH6CLqSYHxmP46kjVLCB1DGJpiFzETHQ26XSKHfuVc9VSEyDxPLJydtHLjYpM3oRUoWEsa",
  "key20": "3QV3nZGR7WZo2wxNh4UaoVvDeSntWixyUDabpLSqgGt6PmtcgfZ4NZPadiaQHFB6G3kn7MN2CzT68gVyK43Adbkt",
  "key21": "4vnGzAVe48vMeMD93QYVSSmTu4ByrN8EAWw8zD1zSmeeTnDiqMAn7fnuaej2u5tyGGhiQ2azehoA8KQ4hLLjuNrZ",
  "key22": "5ArHvz5dDqvYM632p9SZr1Vh6MMcq2bSSsxTZaZCG2ZzvbZBE94iJdDC93Y2ctaq3kbhLjMiaRVDndpwbtBsayfN",
  "key23": "4BWDJAUK8gfVC46Z2HcC4W9SMtJQP4ZRRW6GCdJBub7U95NKeCtAmuZg44J35SbV6p2p8orhZQuUcxV9yEg8jpzX",
  "key24": "2einNTG9eAuTpSYRpphQr1JGvkdtqRJ2FQatacNKLouSmGiHdp9uD2P6TLrPbkPLE15cn5RZtoo3JaX121PXC4ck",
  "key25": "4Hwf5B6UemgD5ugi8VffetXHPR2hLAppoUtDmpxu3NmbH2QVWEPjMKJBo2AfkAZc6ixXuzhNxeJfejg9V9zAXnji",
  "key26": "4aJpu4XUa5QduqP4JBEbxpGBRGbrTDSFQZc9cd3CZ2KMdvSAEuAQMtgvqVngftcoqoNmdNzekRsdQD9BE45qodQo",
  "key27": "5AqowuAniTGrg6kkoUcmUpjNGSRPJnWCFpj6UEdAHaePD4hSVDnFV5rXdxaFmxZn1awY2biY7Rk3PfRh5m9Qs1rH",
  "key28": "MgSTY8c2d9hGDv4gNqRcn2GWMp8bggNySHVjHYFLDkGWt73P1kK3SYzXALuoVhZ5D19TdxBVuFDeQa2gdqCY76L",
  "key29": "HvvPRUjqsqZb8548hwiQJ8sRAGU1RsbBKunhpbbVxFLDXdCgTrnkDWok53yhNL1C27iXoWYdJjQkiSgd4JQ9XbK",
  "key30": "2LHUoJbyfq2WMxbpqM21gWPm5zVFf9N1XDMQ8KBo5qwo2Yo1dAW5yhRPCuzMCx5uxu3Tom2pDsvJyJJrGLK566pk",
  "key31": "4K7BaMnVm4TtfxkBuWAksuRdYcF5m5z2Wk6jGsovEWtKBwxen8ZooHNcSH7g4M8ZupgwZmbhvjkYbbZEYBKFnDAD",
  "key32": "5y7XSmiHxSjZafAT2h4eo8Z1YytnVTmXMmSNsH1dWBJX9XUKH8uBQtPtF1DEhwnyW83ps16NkgBisMwBUKh9KzYN",
  "key33": "4QK2ACzyRM3vn1HLUWKRESJZTQAoswkJaxoPnCpMHav9uYGEhEcWdGSQ2ixVeMvUA3Y7e87yzdL3K2GZBGNGZQmc",
  "key34": "4yBtkVBqVszqiJ2m7ph7Q5h7f14uGS5KcD7nLm8A77LZGswdyCBjxmYAYMnZQrMFwRU9nd67s1FQ3m4oJ1ErXLuU",
  "key35": "44N5JcXVsSQVkBeQXcnxcdgjPECeoGm6FDKpehEGe9JS933yu7WX1pFNqkZZVz6M4kgSM6TVRP1yHdm6vgzoMZqL",
  "key36": "4GmXhJWQhky7Xpmzgbe65nMxCTkRu4Vdvvt26cxuCSu6FMknTfjz7nskGWptcupgiMWuYLbaJzkanwrwgdPdPmU4"
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
