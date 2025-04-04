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
    "44gRWdcoL5GRJ12AExTUSYNfW7F4f49Fbd8rDad4wfvQXQmonNAbXtNdBSCnwy6PBGNGQFXy7kqmBvYMT2moPnwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L2s29uxPjrR9VN79Tq3dmdrXPF6aTtBS2StRmSB9FGdiX7zVYHThCjCjqw7Cv4qzhWFBZoJLHhg6e8RNgtHoGw1",
  "key1": "5SUPuCNpUEGAMujjYyJRdcZFkbieGZfUXe3mAo86ggVPWjns7BZmQwwGqg6ApbR1VmkyDden4cvZAK5UU4km1Sy1",
  "key2": "hKB9gimB9C1DjSgSA3cCWGAgqdkZtv2GEWoz43x4jScXYjCtVg1Ad6N2hvmaE8VAU5CKT68Z3BcFwZhdbGtNxm5",
  "key3": "2SPDkR5Bg2ZfVriVh66KpDQ8n54hfQgGpna747VVASuPJyWNNZBv52ZmtfZZaE4N6yWBRzqB4XzgHHWPBy3dxcxa",
  "key4": "TU3Tni7xPi5y79MNg1z6B4DNp5v2QE7kpN8sTjfy4dpFqPLq23SrV3mSTSQb8TJdTi83tD3zeK79mYjhK3581pR",
  "key5": "3hTKwFLx9nMsP51t3soGJx9hZPqSgmEffJgM1uwyHmhpi6cDjjTLnXP2XYTkR6XDmBR6bLegsoNSYsSqFSJqnC7Y",
  "key6": "531sokJXwUoH8UGSp9Q3WALvEeQgFTcFGTVU6eEih8hPaJQmVEs3wEZgzfVZgb3KaV1LRci7Vc8tL7hQ2J75zVsA",
  "key7": "63pXHfpNvomvj82tJnkxPf6QwFSRDjD166BtWpr73ZTuMdqszMFvRdZ76Gf1z8Yo3azphrXbNxBNus4douvEQn7g",
  "key8": "3tKomNbR9e7HSecjkZW5xXjk6Bu4481wHPC9F419pxP8iPxq3m5iRRgZj8d6CbhBkyrUEdw51giqjmsoBqEJZ4Ha",
  "key9": "n1kVdNquR5QEtYchVxbpDQrmo6tERKUAR7ku3SHbdFcAGFPBr6DzXEUCyL6sNxK3RvchWyC6Rs7Y6vXzPiLHyQP",
  "key10": "2CiwJrsoVNFZeEGz3xurA7cWGkLqdwStcM2hHPbD447Tc38cfM6StNVwZtedhsqiW6n8i5i3cMgAQMW27p78x2UK",
  "key11": "23HVry9ydYA8DXLiEKwxpfvoJhTJ9PL1op1jAgYPsUNk59wchhUTwp9Ldauaw4eBrMVSdsTdyTKunDVZ37KXk3Kx",
  "key12": "4TZKE1QVLiNubTMEiYjjeTLdmw5QA8zwGcjkhEQrgyWUCPXFVdbLFhLupFdTzRCvjywvd3Zg6oCz1vWrv2kMr6CN",
  "key13": "YKKjZ5rpYAj5w5MVrUM8VaRk6cto6KXKkccAFHFtAyjnHb1MS9iqu19iaVCYVGPbPw8QND3CeQBEgebqUhEwAxy",
  "key14": "3dfbktvuC2VTvGu5ATonqRpdqWfv6rzV47z93gU6teeFMa8GhhTte1Cv35Ngw8UUZS2YrHwNkFMRNxpcKMKG3SdY",
  "key15": "5xqjcEjWTPz1hetzsigXHMtaTbCYEiw9RtbA7Lp1aLj9oKobLMStKNMjkvQBWfJNFqnCzL4wk9DHiKDbVGQyZxwo",
  "key16": "2tJdrmsE89sbQZj2WaCYpbkf6QydXd8BAUud4WkYNwhGiUnwyyrBiJAzod2UzBQh8328An8Tj6sJzzRjpmbZgAdG",
  "key17": "5HoxzLNk9D6fbL8uo61cgHQQdXxae6QdeW4RyfZ7ZaQYoYYREN2pjZvp6EWGiARTPC6S27oHPQYP7L6Rqo7qkKsH",
  "key18": "knmwzFiZiu13yCo1QK3BSyD1YrCXTTWbTPcFhTk89zxnKjx2W1Es3tPbQvDtGhJYgxD2byiKixFErshY6YzZgNt",
  "key19": "HNoX53PaQuMUturMpmPNMtRq6zE7prnNLEF6MDnojSmEqKc1rSsD4V99kNP8737JbB9zVZYXaVp2D5UVuZADaTx",
  "key20": "3oP2BoEC1HjCeLbDiyZsPDt2qxQKBsyfdwahrqK9MSiDYcAoyn4KYUD6EG6exfbGNrxJBfERDJ32Cfm2aiBLhPXw",
  "key21": "2CU6g591FrVwiexFrhoJzCQawA9wSSXQAnWSd1Cs1cB63JU6DYHq7opSFfjfFT2BrcG2wD2ELjg9ZyJFX8bgydBD",
  "key22": "3QrRw6YNqoWnJirtjxUgjoLZShheh2m4LBUUviwWqnGWEhtmpVn8ZowNB4eC9bc1rhDMkzWw17NWQkwvmiRxuqxL",
  "key23": "2RyujJhdJAzaS4dB3kXpFFXbNNn1CsyeH4R7GzCZXVG3zqT2VKt9fDsNPnBG6PLJfGF7hkx87gXx1kvKrj814ztT",
  "key24": "hbJf8sfNfQiz8K6V4yt29SJPZeDRQrj2ckXX21A1mVVCbnJUBxFnpCQrJNVhrft1cB9rdBm1ztVoFDeuhth5iQx",
  "key25": "5g39Mk6kNfBfQjKZor9tFXvsXvW2bPvdppoS4Nhx4wxUScgBkcpcp7ohyjxCEWuRJ6ueaQdj8JD9pWXKLo8VEgsD",
  "key26": "3GwgezN1ptvcny6sG7gGkPK3ivWHBy8SzcouX9n4HEijWwDLxLnp1cHEDMMmvPuQYPKiPYdvcjJkK6cTXYHgBf41",
  "key27": "2128gNeMnEDTYfbSe4UM8rU78U3adw7pGDxNHofZqCuJrY4Ne5n3SbYXFuYx3tSPXNFChpYtKgEJK83NHH5NX556",
  "key28": "25uhUe6fyKTyQctQHmZWNsnqwz9cnqgo5hV1VDRDEpn1usAQcryLXnmimgTkkrzHX9oMzdw5WVPPeT1ukvTEkzFB",
  "key29": "5T52jo96NYpL3m5h2JnC9naH1CkAaBceQZ3ZDiyMeFoMMcvg2riVxQYhZTwsYT1Mb6MZRoRY7zYZ6epEDg23ZzaH",
  "key30": "4jApu3GJBFRJJ3My9t8unScxzJugiSDjGyFQngbW7AhgvKrQe4NrjBEZjj4UP1TkW6obdm2ZLQzpMJZ8dAWncp2U",
  "key31": "3QZ8nYYPgrzKomauKysf5gu8aYZELJmeD7neKeim5kZvGHYwE49fPGLtADBQhhwxmQzWe67MNg71CXcGLbwoABSF",
  "key32": "y3GfwCyJfiQg5wuZyEaD6vKMWtT5bx3iAk9GHJkntwymi1FRJhX2RNCAM71Btf1cAMqb8tB3VzgG1sMH7Xxcoro"
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
