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
    "2yvgsZ7ubm5Vs55EyCfAqtERxshKaconZBbyqkJ6u4i7z1wLwphxnqYS83WNU6vPNyqhE78eKjdCjBfyjqV92481"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qkHbAgipsGwZ3GEiFM1oxs8Q77kQX9xeainyidvSLwv7yNEB4yhrEL9xHAmoDQh3F1LW2zTcstT8c1YuqzosPSp",
  "key1": "2qwgaizZ7Pj27T11GAwK7GCSvYqzKehkerjkinR1kPCb3KiSqqUCtLKatHwCG24BEH1wMLkGRPe3aAzgSbCx1W26",
  "key2": "5cSxSdAgNoaUZty5EiCKVpZKTHAwexFjmmv4cRLcsw4exJuDszB9o9pzbYPurbxnbFoAmXk4BrYK2aGZfud1weKw",
  "key3": "57ePzMGhPb3AH5623jV9THvwaybhrA21SFN3Y5EUUiDFXZgaNPwrYEkB7YEWVN53CnKULRksWg1EokxrZR8jxiJN",
  "key4": "ZMkVd7MKnS8edePujtt3CqyPk9fEvmCR4dsr655eEm4ygeY2ieJUzSkxLS6oBecymGTqSjgusFAAF3MeJUH1aYM",
  "key5": "4LkSngQDgFucBuPWv3WqufD4ocQqgpyvGVJGew97VH7v3EKSD93oeoNz1HqgRLeByEZbTFmgrzNEuuZTdHXLThNz",
  "key6": "2papGci44VnY5PoSGkFMnMMRHv2cs9jdYd7dCrGjpoFN5JZ74HPzkuiav25VP5vPNn1aZDQ3w9xTdSBshKB4bTNt",
  "key7": "5Z2gNZearxSQnwdP4FpQSeStJRSY3iVuQrsYuxaY38BXT1cdoME6uDXmoqJUVTDDsJaTzsbqZPhVpqkF2iwazAge",
  "key8": "61cmcUpjoiQZG1WThTCa3rnc4mVF2FP8hweYeNzwFCqKC8b5jN4W8dDNKYsh8eZrh5bDydoWnrPGYPZoQQfCWZbk",
  "key9": "38xJ2WC9E3gFCQBhYctjG2xjbgRC5i3JeNnHKZ79xkid41r35KNo3cqqJysQshhgd6k2QRLamJzHyj1SxnhNmCzV",
  "key10": "aUaZj7CNXaSo8fnsznaUddTMow6DpqobAghkFhwguZQentpUfSmkaj9Rhr6taJ5R8NphfuCFEHEvQxgXnQ8PwgS",
  "key11": "4vhVt7m4Sa5cNR9cbbxtZkWQ5kG3DBstTd3SK5edgjTof3BW3VKhDuGpMnwe5saBBh4n6R6vTzf2s59GJpRy1Mts",
  "key12": "GKdWyCW7fXyHkT1X33RdiGyxFrzA6LTbDeQbEntZDPDpTgL8XKC7eQU4UZuCLRB7JnATntRN2YSZZPhathRrXVw",
  "key13": "aF51Yvpiv3QZuxvYaMbtLJYxbtbjRPxiiYnWWvzo5gFnH2SvHbNxErscTz29YyQgFVZqc1xHhUDDWxT97eoktfR",
  "key14": "3B3Ti8yT6Pfdhhz9QAAiyDiDXDYaoj3jHsDUDkeyY1qMufLZJu3GFSyRnP1M8oy2C7Amd7pZeTQWH4gqt7JzPWnE",
  "key15": "4osDXoGpNMs4vLCiDS6idNuwrANsypRSy1wpwH6hLH6HDTr2DVA4AqXg4HFVUx3onCCegPjcAdYGSgciYCCxv7Mz",
  "key16": "5gHD4befsJVWFYmdeLLHMGXkxzdwMEo7iZ6DhkBKq5MqqxnQ7E9YdEPL6zdjohEUXxkesuVPNjmRsLAch9xsRM4o",
  "key17": "49cMLJCRDBMXeb3vpYp8fLMAuaGCx75oZEC7CrNZdmnnaHZ7fpVXfYDdBkhAmncMEj2X4ZXUcYbvLsrhtYnToSbh",
  "key18": "5jjaFBcKgSwe9djViEYzjZQQEyAN3pE4NPzZWc6Zax5MeR4ZtqeiLVMDU8LdtNEMr9GMC55sY9t8HWCrmNDCYLFY",
  "key19": "TMo4vYZpMht5dbiJ5rnBPBNhDC3CuVg6MCLTGquUsq4MXigYwbrX5ov7GCFv2dojtUhxoAHwCY4BdPahCioViay",
  "key20": "2ygsf18BhKR41gt7vqHcgGoZujTQhqwg7ip4qAQmqGtU7LYcksrvFNovzbJzQ2qh3PVUKFnNhMsZSotfrdzvE1Bf",
  "key21": "61gT7iyyPFFSrBvzbrUTN6pnFAoj2GtJgb5c4ZXb6RtQ2rNPrWSSwW9sdFxFCBvsDnz5rWPddvRCHRkLWVxyBRBN",
  "key22": "qk6PCwXg3RuazdiPo2pKA7LUs4riPZmZKer9HwqbnbQG7CS2JMxSXXmr1gQN5jy3HhnioCZ13KB4j6jGbaguHbi",
  "key23": "2BwF3UAxxP45hanTiuiPh2T2igY4j3i8LkrNyM1vCnwUjp5RSTAdjB2cLfnKH99pGCdui6r9s6BnoytUrnrVqucX",
  "key24": "k79ujPc6tTH8xa2uD5kDm16qnqBQyoGt74EDQKhaapzsxqk6g9t5zSjF1SSvinZg78HEQ3gG8tYHEG1e8KmhPXi",
  "key25": "uiW7eR5BVHnE6vM9zCNK9QUhqRXhzHQ2doZmCJy7QQBw6DmAeGRsHGMfa8VpZAPZJVPBeuYbgXd38jY5u8rEZKZ",
  "key26": "NEUaA1CFTsHh6iLGWozLpLFHqptoHkyZoF4sHeYxd5smSye82fLLUcQit2K9K8RZjZWmrUrwYWfGsFkGDDGd9EW",
  "key27": "4vH3pcDtKyyP7jfw886xeS9dJHZDDd6X38GSGVk1okK3PsRinvwPRokiZVyudZQ9R1wAFsUpz6ykymyFTXT5ExgN",
  "key28": "3qpJiZqBSoxBVSuRBEiKVsDd419KzCkfPKbu2f1h31dhRme6wADM3bpTdpCiaWpeSahnDaBEKKSxBVAn1swT7jaq",
  "key29": "5Ny5DfVdSveKaXg8NspYwitpxYVdbRv7C3mrFjTWE75keavzkCYkvHUJz3JgsDkApuy88AuNfKWsG9iiG97gJa2Z",
  "key30": "4DvhYuYoXfaP3aX9p8pcQzAtG7rEWNXq4p8a3scuZwqET9BW4RkHUhMyna1F78tKzC1WNdgQtG62FvprMf65Weud",
  "key31": "4dxmwqwu2iysnTvaGbBaRucbng7vk4Ry2Q3FrTyncBT5JdetyEpxSFAo5djosobKSPBYLBtBDFDyDr47b9rwguHE",
  "key32": "3UWJmb24kzuwTqnxqGa2rtz3hyiouSPKBeutxEM8p3gENH7mk8oDMgBWJAt6W6SzqNPnuZpXeH1yzUEn9d6PmbJA",
  "key33": "58gkXY3dJoNkHpepQSDK8TrEG74HhZ6eU9P896tKUVJKK1Hb8WhURo3MahWEJssCqLgoeMfXowkabKgLM4qjqyb9",
  "key34": "3fM3e9EdgUEp4NxyQfPAfLyA2cV6Mc9PHU7u2rt8JB6unCkmug4kHggaWjZwrH5Tf6ZELd6iLWR5QMZboUfUopaH"
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
