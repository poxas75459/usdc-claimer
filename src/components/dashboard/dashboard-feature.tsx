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
    "46AEy5qrn9GfZx9xJ3iXM4vvTNZkcjV3VzkVKQZS6K1T5WQugYqHzqbzPN44KGXnujgXYVokHoqtLFkAW5xwYhaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x1DjzBd4u9pCrtRyMnDok9mkAasN6beTftm4rzGYk15qg5QWb7fNi8CvDQsGiriPJfBiyCqMJHDaQ3GZV9irmxD",
  "key1": "3kV6qvQQCrQWn2v78HBCdrFVJJoWU6ey6wv9hCe23SBjR5g1E4zyu2yUtDFgbMpHJtVQGhMqNoa2gVV5ciA2GFL3",
  "key2": "2qqjVwuDWtuk4G1zPFWHkS6Y19p7s6e9kQZCUwsdpAbYz7oBTpaUmCaHvAPXgE5GVnEV4nHMVg2KKgKrC29vPn8v",
  "key3": "2vKBVcDz39R5pRiEahHAMegPsrmf1PLWndEzKiPMUcreXK4zErFHg9pXvTy3t4EuAuAMhHqc8hyRoVCfSuMsZdmA",
  "key4": "5WUEGQUXKZb6AKmP1ZUqLoR2WJ2vqeb5P5sJAKAjqoJmtFKNo9AeKm6yxiacffgJXLBAQbqnBuXdBkzmwiVU4wm7",
  "key5": "2coTmapekpgAJxJXNZ3YnKzsBAmL1gynDNkGcutKxHJqm2Vq7RRDR8HT8DU3LFTbawpcUiQcyk4s4A2M993tG2Ez",
  "key6": "2ErcxqFm9oNU5mJNErkbJMV7LX3Kfsmu9rmsQ88kcEDVwbPE2Fmro8j7k13yCiqSLyofVwbSV7YYMYQ729tYaVmp",
  "key7": "5Wr1JKBctVMTkStwYoNjKvgV3ZyjZEKBzWsq1GVRFGPsPFgX4HEdd6fpCWw2cxZCmyZgymtXoQ3oTzaETCbdjfTy",
  "key8": "3H3qv5hrMuagEwuZbRUtACALrKYca1g6twYfpr8uD7AszAynTJLVXRLNGqFKRB8t3SAomzZUweWSb8reaU24hVXp",
  "key9": "JidgMxdZ5K7xJzDf2aQTf35Ft3tviFZa6YysanhsbyXhCeei5eFHYhSrH4vsUJjRJsamzFcMhFCPMtAdac2dsgF",
  "key10": "2LGtCzPtSi2TYgRNw59nYsY4FYnmVG6S1Qg7LZTKgj74hHSMdzh3p5PdpxXcqaVD1U9VvkxVNvcz7Y8S7eGScneK",
  "key11": "3wU9vnKA8zKMMWRVHDqEg5E16fwiK4QCmQpz1Dz3ApqpmzNTkbb9moK6PAutFkgzVwYfkrbjAyN6HXqkH49KxYbX",
  "key12": "4gayGJPJtbU95hdt8JMSGKiVw95xBmq89H1xu2pptFJCd62XDyd14eDavuR85QoDnnRKogUAMAPmqMJz6c1U2MwG",
  "key13": "3g3CCDHKCsredgYyMWesuh184MGLG4MUfNWbnU7idaZZiYNxCK2ceMyLCxabXBZSePJdY1ihwmS4W66dvUXGyWEB",
  "key14": "356jz5GoMFcsdtJwvEZXn6s8A5vw4SYC1D2VoJqSkVrmeLBNvxxmPHzau9o8SFkizCvD8xg91mhEFqt3nYXXPase",
  "key15": "59BnYUu13xmk6DktwnFD79oefMxRfm3cNnn8HdpzVDFpcWQM2mqhs8ZjMtBA6ECeUG7PZT1gM2FzJiMfwvbs7a3A",
  "key16": "3P2yw795M6txZMYVMWPLuygz52JE8xzeq1vD7uNaPHaCKGwMhjp6mToNoqLUBDRYLYySWEtnSKnf3rqzUZ29Fztq",
  "key17": "4ocf8qeHYy4sUZaURAue43rPnCUSBURy6dY6nQuzH76P8EoASJkLMF5takRWREgHDdiynMRtSWpQC1LU5mDiCi2s",
  "key18": "Rv83NnxSQ8NbM3Sy78pg9WWRvRBQanZmaYhFPvXajLRbkEK5SyPysdLE7NfsL2cduxvND8zab9jEEPFK1MWppjD",
  "key19": "5GsbZf2jvCyqXFEJopruztzjuMgM3XbFqNUumuAy7fMyLBUV9TnbaD5CZ73xa1ZE9FPKDN8paDYKR581gkRiMcjH",
  "key20": "3D2k5ZjUYNPMP7xU7BzvsoTxEebzMXPMRKxxhqUyXGG9NQTEXx9Auw5aaQ1kMer9Ufzjn3YTvnKbs4tjeGb515PC",
  "key21": "4fNBnHanAHQHg4ytJ51MscuE8d2CXLT7npWLCgzHgn3Y17RSsDUXyVraSi66G4pqghxqCt1M9Rf21bR7mLcmPYEs",
  "key22": "3FBtL6XeRdmABu32RnKBqxPXxDkuPKvB7xXed1ZwSNP4brzivD63XVo9XrgBwySeWp3rFuhHiEY19uKF65jDav7H",
  "key23": "SHH3TMyHMTzAHtcFzhmAqWbsYUCUeotGpZAas4Dkv3bsc1nkGRD9p7tABA3YvwmeSAMKekGcjXrsYm5nKKSABXY",
  "key24": "cpbkiGVXxV2fdaeKDZHBTmAQx5sLhKUppwpMfA6H31UaS8UGBXeMJdcmDGqsz5cs3Mni3Zwn2kWtLbp4u8XDTGi",
  "key25": "2JauWk5Ksr5io9GcCoUNUsZFJoMteKCtne3no4csLsRADsxo7hiSykyPza7pgaD1BEKLHqobuFNdk89Ee2CkZcnf",
  "key26": "xoBDaHNb8NpTp9p1wpxsrbip6DfhLR7LitxZdt8hU3upS9DGep3fWrUTJBeYuwUGNn6pjJs2qTNTXj5YqhxJNh2",
  "key27": "2bakhqhqWd7vxZ9EPHnN6U2GKMDUauN6FeWUFobJ9GY6xFsPr9EiV3n5iDWnkZXf3RiRPwEYY99XyJK1hvah4JzU",
  "key28": "4cJQJHx8CofDvDLb3Vt6i9U9DqmHyQirEZQFnfGaacKysJGQngUy1T8GHB7WMhnxKSSE1NL1mMmHXdUMKeGdg9xE",
  "key29": "3Wq9iPRAMYgL5UcbNKrx6Yyyz5isV4mdngsxVmoz7hwVmnFzXJs5fgcrUPPxDWFL54RTUQMukMkeADL4FUtzvZFq",
  "key30": "2M75gDpDDvgJPQAsswUN3zwgwzBeBpnr17yo4ggFHH6dPdRgeGD7QkgFScid873wcHVUMUkeoNqgzKrqaaAp2noL",
  "key31": "4BgRUmfExEem2YSmBUTrjdWdGmCgqAUxEeHhNW9rTneW4AfpxxEYMRXbJDpXqj4opKr9V2m1Q72iaRQBTRYYW9W5",
  "key32": "2ri9yKFnvGJqoF7xEm1SY1XfnAQyrhEvXxfJjvXRjcPLS4mv9Bg8ndt2UKtGuvqq1GJXME4XRovtm7eBzgskn8Pc",
  "key33": "4n7ztU37kw8BJCsSS8F3ycXvRBhbbxgBP99MtAeuRgmQki58wdWxWVeau8isyqHHKDzknPVDv66j3eWmWWmxBW52",
  "key34": "82NJezTvip76oTXSK7ajHhS8ZatVskqYv4Y9XMHH6G1tGfhmZZLsxurHujKzWkbBea1HvMJ74mWhZJm3Q1CrF6L",
  "key35": "2ryKh1ucmWTgyYCFaBPFDL2XKprsiyvdmYqf5dx14WaqTMseZaRmpsNyhKmKz9KAwaAxGWddh6tcvsygrMDLfcYx"
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
