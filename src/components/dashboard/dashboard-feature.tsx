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
    "2coCLdNZ7AWJPVyMmdNGW99KmuNFgwNkJ4K7f3ZYs6eegD8RbDbkjEpbnxrrixunm8xDgxugEPrh9V4d7qHmmSWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K1eDh967VyYbjG5SAoZagaksEUXXUFpbzPtRh5G3tpukvBbdoBHw4xhQpwAfChFhHGpfgk1B1UP38cod7q5eYiV",
  "key1": "4MPdweHCBipZ5FzT4PsWkzJTE6cVpPHyxKRvoTL4QR7WPRuLqpXwV8PpQnUVAhQ9CRCE417m6W4Ezi814Z98ytGw",
  "key2": "5LmvcAUUPvjyVrJN9kejiyiCKLJEzoEYs7yAAEN1A5qsSAvqUsopPciiJqwZbMshQPzPMCksWDoGtLHfbRP2rSCi",
  "key3": "2q7RjJKXtBPNUhefnUyru3axh2qe6ME8gnhjecLig2Y87vDfF4vnH3D42fR1titCqAKwC8tjEe8G3eHcduzG13NB",
  "key4": "233pCLWh7myVSEXjdtaViA6zp6dBUUiNm4SYppxNNJTxCmpR6NiWCS7QGsJ9F7ecU7Uq6HxSHgkwQHVV7odBsiKt",
  "key5": "4uF1X6Du9wGsqTAMvsDYVfhtnDB7qSRxaJCcgLcDRsQkqsbAhxwEkYqozVrC7GU2AwPQ57uqPNrEpE1QciUwbzT6",
  "key6": "48Fhp1r6wpdzKpn7GtPDUFVrpNN9GbK4k54eyHikeHY4mVhYDtxZCaUnFBNCX6e38wFHypGMGFU5r23ycUBppxBR",
  "key7": "48EvL9rygRQadCdxMXiiMVqwAxtMM4vjj1ucJk2nZPZgMkVtjT9haCeX8hkEG9rncKPLwFqbYt4dtgUPTTRoRDH4",
  "key8": "4GNrjQasjBQLtoSRdsCdPg1E6mskn5zgxEbhhpBcnH3n2ZWUYQ3jd6YX9UDZvhi3xPTY5xFp97sewNs41uraqR5g",
  "key9": "5eNuMbUpydHgPdChbrsy15wAtzdBFZP9EzTy8cSeb6b2phFyqyfYs8oLq4KUgiJuXTaqwVZhKDVar3ZbEYRpqnYJ",
  "key10": "3L94BzV8GCQHy2JKwDJL4eHKGge8chfRrREXfpzoVpYt9LwCLDRVTYzvRw77XFoNNLV4hmEFZkVXxbjj9i9jpXyL",
  "key11": "4x2V2xxb8EtD5MXTtXnBmjtCPt5BgzxxXb4EJZoogL64ALFFpZmNkh2v4Ap8G4Udt58knvXzmPHH8qgvuJQKR96i",
  "key12": "3vmkLkhmbrS5gAxJszTLmWh6aiWcaqPtVbvZJS5QKRuPmot7eEga7puH9c7UMj8jVoQbWi4oet7MDgtpBQyN94oN",
  "key13": "5haedJTHTaDNrbwisxuBYLJxjAau6LhHKtA5yTnBkMRxddYG8tBKUEfJQtnbnY2F9PNm9rtxknAUG17Av3Zat1NA",
  "key14": "3NLfDWCftPdw8MQdU8eECs5UvDMUXv52Q2oX5368eWJy4wkrjCTYyZ3CUHMyD2rrSUtAfSC8Dft99CRfKD3wtpcT",
  "key15": "4vsedcYED288UaYQXs97o9Vwrdf4EBRKXpDV3wq24SvaCyhiCTeeRF76jadd9Cx5MLe4oruzfN6VZXx9u9EwMjkG",
  "key16": "vUayw9288937dxHzBJ9NBxEZR93L2dqUikEPY2waimfmgdrcQcazsDnQaAn3ku6Y3MRctnh1R1xnCbJE9JpkFYu",
  "key17": "4r5ckRCj3wGrbrkjKnKZfkoRKuCiVE2B8bjZGXtxnC3MND4B1bzYWbEYotFhCGiQeNU28jyvoDKEbe8wc5QW2M8S",
  "key18": "5ss2YmvYv8Z4QKFVSMyYboozUwihhyiw5bp6FoKLjMamU1FrG4Z7KsXoWVBcD2v12eS211ATuMSUPingypLocowX",
  "key19": "3n9nPhWwmoGwDvyAtj24GP4y5mpz3DPF1ugfLsCuw8tEtnVYbxLTC6rtiiSYBRqGXNwZd1LNjJe9mHEt3c3wEAAn",
  "key20": "3kT1TPGF7B8TLVZfV9rthfskDCksTGJRQswcRbwxB8dczZEwHYEZTfnWCfQGH5HUfGqatSEqgp1VXGYnemHQTaWC",
  "key21": "5Uiyf56mpPdupqMzNM42UZGfFrr3EQxVmELv4gY8arjiLB8rmarTZVcyJkDzECu6Pik9Q8KWT8bdHgRiXLPZ9W39",
  "key22": "Xwt6QHrJVwj5w35hAPUk5XpWZXT6XSPZc7RrZRwdpoNYJcfczFfFk3cq9m6xekdz9UNQG5acQrpPbvxNGs51fCv",
  "key23": "Wt5xewA7mURMNDBwCxcTLiDp81fQPH7wXb42uNk2t2UfWYaS7kiDfRUEzUqNF3tQPGhZCp2FWVBkofqAm2DpcUv",
  "key24": "5WwMBsE4Dy81sxiVT9nNApxTjp7aBM166QDmpZj1UJrDnBgz1jqB7gF9ZJFg9BAfirWG9N4cHt4Ba3MXJZKcyhbG",
  "key25": "4p7fPiA2sX2tBZeyjreg6nT6sgaTF6ZaQtKFH1pVKgswmwrgRDTuwoXPL12reAAP5Rnw7aMyLmo4687Ffatqmcde",
  "key26": "5c2e1eAdUqRKFFW3mBivMhYR5CVsQFGJt6sZEePWfHPBhDXYkTsCL8X4AdCU3xGa2WGqZLh2bAntALeqRJhKpE8e",
  "key27": "CxYVofdfp3KYhwxJjpLHWzHG1W6sxDeNuXvZidxwrJudaMV2XjMDa8VewjCJ8o4npa9PZzgrhR7Su1QsHwCFFpj",
  "key28": "2XQuUc1pacez2xU9UJEQe1QtFaX5XX3Bdcaz9wSHuyqUMdrXpr7hZnMHjJ3QP6djXVtLdqCGebPZGQm4wuKTB2gf",
  "key29": "pY2G9Bb1uBwDP25WgrxUgPZsnnzeWYSFD7xskriNYG6T3VV2kcyuXqw3tSae3a33HG8kxsv2s3t6qVwuQ6qsASD",
  "key30": "5kvewrqMQUFsHFNGNuXBQYSGjFTNs9wtSt7s3vLKfKNieQSMvMCKMwmSoWPyh132W227am6Z2DxrBAGsRZVi8Adi",
  "key31": "XNz2cPFDHEa3dF8yAw1bg3dUy75zVAE71vWHrUXeW12CQjh31wkZyNGFLVNTYP1tBU548JxyLoNPhJcRw93amU1",
  "key32": "5ua8thjTXT4GMrw8oNcNtrwryb2WtKBHzbniRyVqWiVnWbtXpx3PSSvxBSYFVfgUjjG7BATLKZ5vBezHSfJUquZW",
  "key33": "4vvg1bJns9RQAFhDh8xWJoJ6kJBrTfAVvgEFPjVPfdj6FdYUx3PdWd5HqdLj9AqV1jBcXxp2WHYzom1aUfuJTonb",
  "key34": "6SnUL5gmPAQjgYttGpGAFvcAkGMTctbhdNpXSDFz3z315WU4suTJhQwyNt7xYTnDvrF4ZZJTE4D7ZLYwk1U1aXR",
  "key35": "3KATwofDT9npW5cCBuBCHZcA8S5mkqPUAA3MGiq6wteHbq3SranUz9Nb6PbLPzbPMCgp9kDaabq5WYW9VMKFi2xC",
  "key36": "bJtaRNGTBqkxKoSZqPBgVbJhcq655QGozz19SCfLrdcxrpCkwmz9rMfwYjuqHjB2N7KBxhUCkHxixpFe2CY5N6d",
  "key37": "3caRuJ6W9WbtJLxq2X3x8A3rRSd11uw8bubfCscvrNTJurZdetBwyqW1GrUMCK46HX6wjZjDKEFCkWkSbEu4Xz6g",
  "key38": "41Z3th2FixY1Hj2wDuAdeqVXzYMM4ppN3nKgUchnHyfBf5N2MGR83uHAydoQW6hao92vFAKktzMovUy9kaWby9ke",
  "key39": "3ETxHw1oJKvea57uQhb2ABN6FdVxQxdbKjw4yPHvfiSz2s3htKeaDaYSoKjumNXU9uZxYapfCrUVbMFNExjirzVJ",
  "key40": "36KdYy2VYsJQEK9KiGCa38WTr4ngoUE3kwntfYjiU7BYpdDePJVNrF95r2HniKeqwZZKmMqzn13hXTDMmtjbXEen",
  "key41": "3Y1pnuBypDb4CEegDrXbNbxuxQTQQDr1eBpSVPrEvyJ2R1kMFv8HQjNdcuhX9U4rJLbgv9fEjpc3hPgaBKiDZLxH",
  "key42": "5pn97jgtRQVopgK6LMuKRfYmuk9SM5ZXRkMYkyeDE96PP9JCU5LiBRAPwjN38t9AzfwfAweQyCbMha6ZLEXV5dMp",
  "key43": "54xJzD9qbs7DAWucoJkqxyei2qGuyjH3ifpnzhLESfbE2xHMTP8HP4yqNszxJT7hGRphJsXYu7mZxMLmFjXD1mNh",
  "key44": "2zivGGJMSiZ4rMvTimDp8V3BvtUKDKCkGWETgP7q9NW8s1B9wdfnTNy9aENEhsL4qUy4wboPM9omngwQBxiGyEVf",
  "key45": "4QTJRxXHR2wUcgqZ4tpd1nMB753Jn5GEGznKYXuaKbQm34U3PexbeBJW6vVfLBuJnbAgj1qopt13RDDZR8k3fJbV",
  "key46": "4U9tqAUVDdDzCwAzRfuZZRpjrA748EJJfDQMQT4Baw2febXsqCjkoAWiSrKSwh9n4QC9jGXbq5C3AYU8J5dUMDbu",
  "key47": "3EANsbibjcuVEYoji7nwc2sZUGSvtWzXFHTitKbM5cZUp6hmFdungZq6EBwiVDLo5h6oupPRPRQ7qFTEpHNspBU8",
  "key48": "4UrBWaRmTS3JHeRHAqtynj4dz7eduWU9V7N4YfWFFY8UrJAK1qsEpWYRWu4jn8RcduQCj4z6zxeFFjDNUDhpoteY",
  "key49": "454sPycvqfvnzegef9wCRHUNnBfDMdTH7GvqbKkZwPDp38LhreiXGpYKPLsdPG3Eb8byLNbEJmEzRt8n5ybDB9xF"
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
