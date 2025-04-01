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
    "4dQVacDxtvdP2rFKGiGb3jSkkfDtzS4Tvs6UsbNxT9qbyhoVMLRzTMGST9ui6evnBgQQBU8o1GsMLBpfiuBjTBzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32TR6oqjHFjbkkZCVRWAWnEhqjV3eHHeYe8MrP2W3vRiCQNfPFAyT6swi4886xsiZwnqGuX2QRw8NDQGEXKAiWdq",
  "key1": "3ijsz9c3FrjN2hC7MFHbYk2j7adgdGX8Vf863efj9oBuT6B6yoQXanWviCmrv9aB68dRarEKPsc1SVb8xmPGA9jG",
  "key2": "8LW7oMg91tnc95ro2pmiZeSD85k7bYcwQFm2Crmhu6BvTEqMnQcU8dsV4PLaPbxQnN9vkfQ7ZkSRjWwynBsyNpX",
  "key3": "3692yMKZzknXW6ZzMgnDbxFset4X1dodXcPDnwNoKat8wtgS5R1MBzLNY6GFb78yutk92q8wKuNhqzRhSzqNgY7Y",
  "key4": "7zsxKAkUwTFSkoBMEu4St6tVsnEbvdkp6VmxiC9Eu1XBXLnTt3A1TB7nymEkuqy1CDGPhKNfU8tJJVtZa497Cyy",
  "key5": "56CQa5Mmj7heLZ9e42MVGVmkxcLTjoPH1RRacCkW3GqBTCxXtUd5La7nBN8yFRkBe4xFYQw8pR9NV7M14aW9ZP1z",
  "key6": "2pDNWSHEH4BXozxa8CcbVzryLfmN9VuppYMxo9sMkcrUuMQgngrCg2HNSDuWRotS2LALYHkRLdVMy24guLxsBjpR",
  "key7": "YbLHUK1L64He9izgW17vp2TWvfuf9REQm6jdjxEa8Sha62Xi3gqV9MJ2EDtC9SXTkCBu3Ss5mpqFbbZKck9gTjS",
  "key8": "3DR1JJLFmjtjC1JFeSDxVL2Wcdw7YQN9kTMwbNLG2sVQPTXcfrw4A4UrDsM8hM1VvfCdj34rYj6vkw8vBgUaqxq6",
  "key9": "2MgwQMUVSLpwcrQKAkHaSHnvBqKiGS8RaNU1Lcph2FFGVGj59BrHGToJ8CHVEknJGF2r2hxmEeADYSzuxsccXWmq",
  "key10": "5kodpjaeTPxJYYg3rrurKVXLycn6FV4t8Xg4drFowezdStWVPN3HKw3cuECaNhPCzhrTmYESnqTjVc6sWzswgCBx",
  "key11": "221XQnA6ZBVwQH8TwZjsKAFHEcwmgixP3dWYTCswW37ZJ4QaPN5Vv7y597uoHhkPfZTxqZ3uRH6mpEPnaaQNr2xh",
  "key12": "ySjQfFsiv8DX6CUzmxrxLJ2geSFGigx1D3MYXUYM9Udqq3BGtfCD1A3m9YAnzbAM8nbjT7s5mPaLcDdMWwRMZ3f",
  "key13": "4ciQGKRSVPCRY9G2ka2nBcup64Q6JKosbCLHJx6GnjKVeydzVeremM1kyEPppn9CFEiXhMEztoBr2mAU2cC4QKvU",
  "key14": "QRbvuhWFu5kt5M1hKNrMMQgMy4ew1okzcjTU3KKPwiDkkTGiiCfMAC7vHy5caSEGTaNsWFsQVSr6jNq1y17wCoq",
  "key15": "2fUCi1CWDkMcsgFHizNL3TVvks7v8qFc9RGSKeGyEFyZ8oyURyqgdiHdrbE5hPGB8im5WL5JtnpjBPsz7h8km6pS",
  "key16": "5W2aNRMngDdcHuk1FRML7jUqg8NWZczHRCVusMGNPA445ac6aqJyw4gzz4UuzdFaGJgmuve2TuSbqhkH9UF2mrHc",
  "key17": "5pxsiGTZAJveUCcmNBjkKA5pJdWqs3xpsoUQ4t3ev2j7cWUSuedGGjX2rtTi8Wy4FFmbs78emuaLuGomGAJyyzwX",
  "key18": "2TC1CeEUDGJDwjKn29Da1YrnGNz7V16MGjZs4DkP1wh2pwAx7JyhpJHNmVLT4suBfhkDst6yXagdrCaAKa5DfAwJ",
  "key19": "5LaUYnqM7Ts8sosnrSyiSXEzP5mQyMoZD7L2GeZG1RtpQH6KTX5QM8ZVijgnBK8z8Mij7NePyMggjwPGM8D5QxyR",
  "key20": "5y7N966Q6ZSQsfSGAErFpLoWMBu9rSboFNCCFt7H5CGw87sieBBBH7ze4ETL3y4GG9D62YRiHUNJ3nmoActAUKa9",
  "key21": "1FCEh4aWxzix8JT3UViD5tFc4RfgiHUR8AK36xbHo99tLSwBXgEucSgnqvkLJRLwGMEVBiP4VcqX6RfHNyWmWq8",
  "key22": "5T6UV2zWSSgaymaKfTfGsAaCdAMnHjt9dr1jgQFoMg25GSovQzEZdRhoqhxAiUiHk4JqzJsDvbUfMfWpXDonDBhi",
  "key23": "25GLWNMggARZBnjNqqT2uHTsNQCecf4uRX4jZytrMccvz92Gcp7fQLfKjrEHiebDarmU342Pgyu3wnLn6sZsWdke",
  "key24": "51a1WNqf49JiXDHqkSRZNcGj8GEoxJEcJoUF9e6EXctESHz7VCN42EgwYF4KCSJY3mSNLsupU5aAzNCHF6hmj9kh",
  "key25": "4CAut2MtqgjntjawcEU1xTreEh16XuEBjMvgUYUZ2btysTuJSRXtmmrjsAZ1gbQbuk5cSP5cA8rmGhjsTzxcgsHj",
  "key26": "ua957pDAfxERETLx2WDPKT3nnXdYa8jVrpBAZMkLG7UyHWna2VRRLGZf6BTn6UBrcYRChj7Q6kPtFc1eYmpboTK",
  "key27": "4xSLMcEND8NJLrXGZXXbFSAuR7ZDvkchuedA8bbr7v7baRqfN6EZ41QEPsnVdLqeAFJVoKTyo5oh6o686LhztSTL",
  "key28": "KKn2CrvjktaWcuUdQQUFcWEJygfGdTTbjmV9EGqzvHsSEAdreyrbVxMCqXhqxJfxRyWGhZeKTsPcMcPJGZtpEeK",
  "key29": "3s7Y2bEbg3DThw8ipBweketGh1q84ARhhjdi5CYpDieq25eMXN4nCVVQoDzH1PnkSQyaBu8WjLA2niVwRuKTFsEN",
  "key30": "b5pC9oM6j1evJrjCRr6L6Q51j1tuDUmvHwVkxqxQ2cNUaMcbZco67AWMjZouZQcAZFct6QRogkfD63USebAY9qe",
  "key31": "Wn4vqJj9CVniKTZ4ePAmpvjCLJwgsNrBxtMrHd9njPvebkboDHnsnFjEsE2s8hQvEzqwnU5y1yrDnPCB2JAHKmM",
  "key32": "5aTfpeXTWhrn98uaot1SXJ9dzX8GNeZFQpjFEQSQnK1dDQ4AKcPnxfNUDcmupiyXJm2bPHkrr13L2gJGn7CfmQpm",
  "key33": "2VkM4G7bNYzuvULVZCKkqEVJGapGYhU44CPd7Psye2Xjx5SihwoHJKgH217ABPuDpLKxTJ7sAeqnd1jqAFkgTD9p",
  "key34": "42Ph2Ar9oTZULfuDZ3PNcpW3ZFkLKeKFchrNMKvmxcs7zVsHRkxE7ZfQHPQJyoMLq7V2Q3w26ECW9L1LqsKpR4DF",
  "key35": "4fYwEFXJzL67448mP1L7oy2MR2ZpG5es4vjwP4Hs5wgGoWvKtj9Zy3HCupLRm1deLV9yi9Xhtw3GAbAQzcqG2nNL",
  "key36": "5MkkkkjhJ7T3ius1XKuQyhnhknZPNzm5pg3U1zfQb2DXKyyNth8he8yT2cuK2BZfGQNbmvKnkDYLbVRcDaBytrQa",
  "key37": "2CfgP5hXHUC83by6SsD4361P4jSn85wSabo2RTSVnm82aeHTqTSp2WjD86HGxFgxST35p2tfwnhvy1VREyMFAEaq",
  "key38": "2b8VhTs3oDWQ5BsYFWL5T3kxryd4AgfmuKY6Kpkqh5StufkdEE8ZPvXnwQ376wrFY51a8SCs37LL7QpsA6nhzoX6",
  "key39": "334wot2kXJ8FmytPskJzsL6DXzPpfpNb4qqtPLvWnRMB62jgzQVBh2RZiPL2KVQHfh6GvYTcCurizuCXWLVhgAWr",
  "key40": "41zRGxHtZctZDdgtitMe8sEG3acV31PLQaLbFFvAfvvsUN2xQh7HMRb77YZAuTHn6PJwwPfRmSsK2KNiwxfPrMvN",
  "key41": "3jB1Lz2a6frZG65Qs1PKHAqcAw16QT8vt5ebVTE7eh48ksrhoR2ZgComj4VaDbn7M2gkReR5qKYN9PEXxLczyPXt",
  "key42": "UChv8guzdFfeZ9vMWx3unXQzTdFETHFjqmr2ywNGxcDGCcs4MVGdJGgXPaWH7XKjKJVb9sBeXaqyNB345ptuYkx",
  "key43": "4fFtuM2DWy2NUGXPqgHCdKwJj6xQxdDd964EEvREEBym8HxE9N3HfeGRvj5AEwtemBqoTJcHpPB5qcVV5g5KgdSA",
  "key44": "56SXrbCfAUfjRrnuBbzWv4QUUHWNU2encTzjRKnGzrvb2YpcxmYrbJ5HWQthxWfC2PzTZtpYFTxioqhNLaQif66B",
  "key45": "2befrapCjQ5DtxQB1aDxBN7yo68JYQ958gA6UztXzFdXKoat34j5UQ1K5LSVBnB81zfgDV7PkamEpYEZQ5NxVkG8",
  "key46": "25by8ZZMS3RhCmNhzG9jpurKnhjBwXqqfwxVZk6VV18QsQnF8NwdhRw9be1q13HgGw7e5txWbdpngbAwCdK2Yv1v"
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
