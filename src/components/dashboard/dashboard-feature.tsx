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
    "4BA4D9Gbs2Vej6DHmSszvpz4vPAJfNNDDCmrgPH3DW6Rha49ibTqUvZH9gbxw4HBWbxx2ipBXNKvN4TiCzsZEGQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bt7pxTMLvpK3UEa1EbxA8JdMZYGZTw1WYjrdFUCoMo6xVcsM8wu5JASFt3XaNKisosWvcBZQK3pHRLKn3xu1vd8",
  "key1": "2j6TTJDUpbXXcTmi5vuPGur89YBTXYrn8pbuvqwC1H14663GHRnCj1mZUYozYZoXTWcCYQ7UmUP9SZYeccuzBza2",
  "key2": "4n8uKrEswp4ynsusWFt6TmkKjh91nAv4H8ctg1GeqaCGYdGuRCmHFWC9zgnjSM9vgasKgKG9H6djj88BAkeP8hwE",
  "key3": "4sKg6yfWF686ReJkoQ5SoDJNTJigE2qgXrYDdwUxu9EGonpsAS23H6ABZ894tDfDs2piaQuPMEaHcien4KNnScp4",
  "key4": "3Vw9T9xvLFqkRLyqobXhhdGhjgLgLTraa96gjP1jLJTSj3kJSREPwNF77ncC3niVoULgZnPYespP7J3YPssUcCTB",
  "key5": "2srNR9Vr28kCDsNbUZNchKYKXQL2UStSp2JyN1duGTNuicZZr8GGXwS8rfVjzkgZcxFC7haRwB7qmxToQ8ss6vQg",
  "key6": "4t4yb3Qmgbq8nTeG3b7ktWCWevhZQJF8AyMZwNWD14y7mvagQdyGoBeRVAQ6nvpAfRwQXo4tF3BeLPjraLYDcZH",
  "key7": "5H5mWwLUKHxVzRVEiatC8FD9ivRvPzCpzEC4ufG67d1CjD579mMiyV5mzrQPvW1Ns7GEQbZGmvAUCMVk5a4WKuNV",
  "key8": "5mF54hVhBrFzLu21etHgEm4HkJ1ZB5Yc4qBetaeAboyuUX1ApmweBgwiQeFJQhdTVGz84M6iH9uud9HgAoFNyPgJ",
  "key9": "4rhWUfXbN9iprccBfDTcQxhCWDuHNLZAuokYFQZHyP1dPdU57K435Gp48yBzu3b85zb5i95z8FpNn1UpS9CaoSpX",
  "key10": "CUowu4AkEAsJqtzzMMqAdUaYdFddDXMmJcaEg9tbPwNYVbkworUguEcwwnF6ebzhNn62AzjRbU5zCxKDLS461E5",
  "key11": "58sGmHepTUyR8pGnZugVz2f74TTjCNP4v9nobLbh1raxdRjCepvKRds2WTC5HAyJS7n3PRFaV3CskpEmSX9aZry9",
  "key12": "488p4P64C6ZZ9C9MYTYa2rqUNsi6Pb3mkgyLAPeTexWsyqJZ2moSDKP8137JtaHRFsN3LFiE1DPnxGfmCn8P9GVV",
  "key13": "2BPqf5oTt9KisJ6umxSXsrhxPMJoNX55K9wdzTa4Cbd9C6SpH7Y2XAjrTkWBbPSUnLdWCR3UhxpD47tUy9zYo4ZA",
  "key14": "4XbwjatssCZEhyHHxtpNCYHcuqQLuMN63GFApCFufEfTFUDT8HhFSWKsviuXeyR9eme3Lhhjxt8N4d3FDYEiyWN2",
  "key15": "4ABnMBDEG5aJedxgFnb5JJTohioYUUiqg3sXFLqj7ENwgeW82N8tAKM9PGarXwBsqJxrdhHNEYE9vtBo9EeCJgic",
  "key16": "4USo5jViUAjxHd2mPvJ23mrpX3Z1iHUozBTg9v2Pu2ivWQvwmmgMUkqW9rqnkgSMZgK99jBVay2Mqa7fePvYVc37",
  "key17": "aY868AchJ62mUpD3PWp4iD6F6RN3vdk7aZr4FNB2nafLGzYg5Yp5HrsK3opoPx9mmGFUfbLoSXDwF2EbFNWk1wV",
  "key18": "4988rxwEUcckt8X7Dq24Uqvtb7ENsqGwV4foqCMZEToGNAPjFwFLXgmxAJVmo1TtgRs1r7YYg2ooXBzdWy2XVnmi",
  "key19": "4HQoPLJ1SxEcRHngXxsg6NCkXH2ZX9MLhUiMB5qQ3wGf4afvqYZPCJM3mQgKhDiqonGR3mBX6H9ahofivVkEBWq1",
  "key20": "2S4uHjFnqcYgE7yd2rDNLf8Dg9aLXKxe4DwsTT6T2v1X2QJsjf7qXw1zLgWLj1KAYFHLNYMhxFQD6tkrK6UwaQFv",
  "key21": "27rA68DsVs82EPJ47TJoQPnLhtELvqa1KrwpafkaMmrch5AxmAsYsFULPMJzPJHxATrMpoqCuHXkF9LEQQ1ma9Hh",
  "key22": "A5arb8yffxGkUiBvBeE7LMeATUG23fd72UZKKzMdThTL8G2ZV96sLCEyoKyVQhpkQBuXeQStrboBbhLpS6PcZdw",
  "key23": "4xggeEHVKDxt44imAkNQK84Wj1Uvh5Nn5HnDahv521TNeRbqbAcVNdeJpsE5Uw7bJmEM4sRBzmgcr7DiMS9bgsN2",
  "key24": "3PZNDtdUE4HJjTJZ75mKUjZd9tqwUP78vM9vXEAddNkrfMhHFNRQ7oa8fS6az8pnDT5QToDieBpjyH5N9oMUUtTE",
  "key25": "5WuEcUPUiJy8pAXZoYtdc9aQuVJL5GVKAbKn3Gh5WPMEvHgRVToayBNNSZXowa3PUm4HFk31ucTBdg7165hVqXoE",
  "key26": "3J7snzDpPhkQFceEDxZzNuz8wNSeh2UT155Z4pn5DAGuywAreKothjTRtFP4iAbeETdWc58GDc4TTgLnVEp3cWn6",
  "key27": "DVFuxXJb4D1jTZKQxBuCSfD2KWUtmLHCp6Yg5XVXGAQ7smUaEE4MbkViBd1CtTGuHF9jcMqFe13HNo49W98S9VE",
  "key28": "37MvDqAzVWpHtiimfpPqsCyBodfoGvv3xW9C9GUnyPivr67ENxooHkvu989RDPbJAhqzeXGRJ279umiyLWW6QHBY",
  "key29": "5UE9ZrMbh4DFqujnHV2tZgZyq5A4572uFMTFmytUP4SpSxUX7WojktCFC8T6cReqskiUrhvvybrmRbpg5GzzVDzs",
  "key30": "58447RYfhEh4Dkba6uaXSBjV679KtkV6C5gx9jZyQR44GECSmuqHQZhh3LxmkRzL29EiW4cP398fbm2fxZtoCRAF",
  "key31": "2TCVnx7JaNRaybD6KTNhy5Mu4Vp1BRknw8ezySrnru3ksnkHpxDA8bcED8ynZyu7qetsjkMyNr7onY4RdgSd9XtB",
  "key32": "4bHFvyrjm8cxgY2TqcddVFHg1ecSbW1JAPvLyHN7p2cnZCitLBWdscEGGwBZoifDVQi1A8VuyW3LmNdhs3MqPvoS",
  "key33": "2CTeMakktzExuMqvwZUN7MU2KV8sLYLZiNvmsi15PHXGD47Z4PRADrPy9eyZ5ceGtLVY2JgnnFwvQbV6Latv5Yem",
  "key34": "47ADoixrC4yATvzjy9ZdKpvi97YqrtKoAfbqboxFYJpex5kWcVoccdhs8ZiY7SqtFQnjXg1CQFEDi2MwVP3PCqcY",
  "key35": "3eYjm4oNSGMxGSPcf3QW6M2iSDHZZ5psfTAaRGXQFfpRftbKqUbmadvUhCHNqnfpPvUed76fCK1gAz6Cy1zG5sDH",
  "key36": "9GxmTxN76Ren4u8MNCTKYP83f71ZF6FmabRTRU7K3A4PX15Rg6hiypZZ4nzg5BJG2rGqQxAyedg8HzLNCvymSq2"
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
