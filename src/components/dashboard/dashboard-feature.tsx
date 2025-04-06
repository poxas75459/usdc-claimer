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
    "5XmNZo9wY46XBmVXeLFq8kHFkmL7t5Zq42tayURcuQh3DVwYuJevk6YgtXQuPsGZUVmCG5hXLZEd5YNr2mM61YsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4So5vbPcQvwpmoRfyixnqbvvewvMnCcfsBmQBVPrKMLA4oL1NkAZXit2Pb3Pn1L9kkkZ8KiDkuvq9rWLrU229RyX",
  "key1": "3KAbY2hrZqWX9WcTFCMYLuLw2LbmuUBZCxrzacLcPh6rs2LVmrQAqhWBpNgUsSBGYKQ8b4QQhBLtdwnDozcFhFLp",
  "key2": "32ECa6spvdcytnFm8dmZxSDXMUUkXAo1rWro2hpVQAEhqqTHNDPmMh8WasnC7uFd3kqVZoCWUExhrfig7FLJ3aML",
  "key3": "Kzt3apm2cTV6gMwsfwy8VwKqBVK4NpS5au85zaeyHMtAarLUCB2aNB933A6UfM7FFFUnBc8eRXuPux5E25zTDPd",
  "key4": "2BbHtQaJZBVgfotDu2baHP2VVeY1Zo9wygiU6XHhqFj3xXrDpwppzKB327PaaS2dKysKJhgNinf6roTBSW6Nk3Me",
  "key5": "2f77nuV6ym5tGmpENSAd3nRuSqdCAMKKVKEeH6Wh6LhVJ7Fp8GbsmC7agNmtq4mdzgPw4goBXSdQFKTZe1DWEa11",
  "key6": "3ndqbQbWeXHdqMWjXM9m1ZWQ6zk1Qx7gcMDxCofuHQjntghMo5iDyGe3bojzFRg4Sj1TB3aNDbzQAM7ks5j2MhXF",
  "key7": "5Vc7g1BS6wQr8jRMBNibXG6TsEuauN57eFYUF9cmpZgQc5omLUpzmumpLEsmEWfRtDiLoEYCNrABr4rpKasneBKA",
  "key8": "2Vph6F5zsjjbXsC2AvMikMLdmmcYUYw3zVge5juqqrc2KHHtSwuVvbdHDhR59afxLoHNrQqhs9LsWtLnovT9NhEz",
  "key9": "38GkcN9F7cC8eCmysQxzonRQDGgCVzZv8FzzF7LRcWyMMxRRvnKSjriHGYddhGwHjfRGwdXoQLCQUPHVLt7cXmWR",
  "key10": "53WhQqi3RiXzAVSXNKfiH55VQj2rgDLQzidWdtuELrtGT87jCRo4GJaeyaoQeqD52n6G4UaVU7Pqays1hwbCkJm",
  "key11": "2YMCvWhTi3cdho8sSdm5ZfrH6GgsWpBvJxYSRqpaKKaRNFbKxdeDMENfrcCntQjb8RSgvsfwNj69vrBnAxy46vvV",
  "key12": "Eah6X7VvXnZofZEYd6jsZBp9itPUXdw4m8XFUEavBzai9jTsP1Kg3LxpycC6XM8z96jZkpSKeL8zxqMiAUeR2e9",
  "key13": "5en6SxVM3AeAVnSkEH1ezKW8ncWp3AvPEME1q68az688rGz4sG2Tgur3f9cJkwJkgGaav84AHJYHytzQTSM4umPL",
  "key14": "5hqZKy8G2UCH4ENLYETweiAPtgYCTk9R7JomfGRxKspnb6GcF9RwhGB6JFWWBQsJJn2y5YxwKTjKYh1dVysH3TqK",
  "key15": "JXB6PqaaiXz9oCbD1orKXKfSNY7ygZSHUKe9uYfXEjDMGibNowFxxQcYQDX62xsyo6phc3JXf2Dizwp8eGi3NRT",
  "key16": "63488kf5McXhwJdFYDWrMgXJeum23axGnYxjyFTfXUcbnsVH5omnhBX88WaEczx7qC7uHRDSBVcmm8Vipm9a98tq",
  "key17": "5ixzSTdpYRpJBeLBRJjQNYf3ndyme4p5pzhFb2r5pAq2QNxSzoR8xz1T2avzf7W9kk61DHwaBicB9empUJGeUbrS",
  "key18": "64YiXqDiffus33SW7Mu8jZ78FozNZ7WoLsGzCDUKfSKHK7w3KecsFDYeKm9oEAxeMVQaQWoDMHZHPoFmAc2b69tB",
  "key19": "2Mji3V6jR5bTUAXJTvnAdykHwebqru5aD1xREogh7XyWJNzSaJwVtVTfBQuP2oYhDQ6noXGAdEA4eJXwiJxGd2Hb",
  "key20": "2QGAQUc1NXo9TNry4C7GygC6sJXU1mZfhjCMz7UXqSCaCm1GvEdXWoqobvdFnqDeqMSS8Ytqo9LwApEF4bVpzSic",
  "key21": "5PdHUJer4hxUWFw3insJsucNe3gM5agFsaEiQ6f1xzGLcZVdSFUfrmWtVkRDV7izMBTqqKSmASGQvVHmtApf4suU",
  "key22": "wv374UK3YVbT4mMjYxFu5RqBUyNTzHFhcequyfGFRXRSfbGYxPK6ZoLQkuzLnBdYrRAa8B7qh4mMcTAtGzF7HZG",
  "key23": "NCeKP78BfQXZmwJR7HBJEXDZhH23wEWaDg5jqnCckcP8rbfc37ZHun5oE7cG4ax3WCaVaqMTjRbfDkUhaBPZZZN",
  "key24": "5LDkfXfPrRMfixpBGFSqKbepvSYCb8LFX556er7L6TisdVKHkYcDaKYaxsbUQJpzcWEY21XePYoPgHix34itu56E",
  "key25": "VtCJaEphCeETM3cjbJX49P52GdByFi1B1uQPd8r1SFczmyPLU8ojGrcdvqHNYnNns1CtYW5pHe6jWW1fyu1SujD",
  "key26": "5UdveVg5jw7iTogA43tNjLNcLnWR1ot2Uwjr2aYxQURCDs9s2PyDoeMeziEkTSskR6Dpgyw7qqKPKeZwwgL5Cd9Q",
  "key27": "24HsF1DgGj8hBczR6SVa3EmEtLFmdvB5HtFzY32TnXESemU2MmbwE5nnPWro3ijBKAVcHqzX7n5ZAtVQv2t7J8t9",
  "key28": "LVmws12AouX1CQMq7oDwFzYhsgQWMQLHTFPtwBeECDobMZE8ENYmGvUH9fCFNf9mk2rfE3qEfbVgC2vKBnYSX1H",
  "key29": "fq7sJq7FAkLBP1YPhu2UBHKx7p8wLdDTtFKtgFFNxEHg6xZRzqQuJKVfmxseDHCL4x8xhidm848M72dehmD9t3q",
  "key30": "49hBZZWZowmtRgqghKybHCTbHRZZPHTmcbH5woAwR2Ub4Zx1YGz3ooQxBSM4cmpx5URfDSurJhFDUU8h6jP5Rs3F",
  "key31": "3DieenKg7uU1josAcn3dG116kvfQxjCS1sZYQRYknk19WkogxzaGDHxNAA2hDEcZmcA5GPNwtGTENJ7vAsQSruF9",
  "key32": "Fe26UMCGzpXNsA1EpkaxqtJ8SLab4LuHZ1tUra1Z3jmuw3PNJYCL3YqyAJwdHXWwt8XU6rFvDoHfd7KQqoipNkh",
  "key33": "ZVdrDgqTWbJUr1SKA6Pdy3EFKGrA7TfPQW7VrVTCPgsyWpmzShfmU21Qp2VG6tQnqAjv95HPVwm3chG9hiVcSqw",
  "key34": "5hGiG26Q92xjqj7qnMmg9xTZZEchZFF9vZCv4VXSLNAciQT3wUrZadExBgDxQPbXGxsBfPj34Kt6qLCX6K4wt8Pu",
  "key35": "445EVtrqAZSNQaHqhRaeo6dYqMH1dtVwa1pR8m1NQCa9c44ik7VhEQQp45o4t7CJ1xaVLHYekRmMjiEB18fmZYbD",
  "key36": "5Bt335YNDwGKn58BvPjH6aR9fufPpvLVK1ZXcCFDHW3BCD3tNvLgEpouMnk7cc9BxVeTJG7PGJ2hae6grhJyH2Ep",
  "key37": "3YXmevkFUB9Mr271VEURXq5ev159gUQjah2NWymspzpvqyoHm1i3rSbSeNTitXmhvUX7gEtJfiRU5rRSAZ2vB8cv",
  "key38": "2eW3sCSoD69aqAPzCCc8JnDAobBZsZAdSkSafMyoJqBP2griMtgN7bpmbHjGgbTbGJiWYGuZE9iQCY8XQfTRQgC7",
  "key39": "3KK1HuSfNTUCukMQUFavzWcxNHNzWAeHomE6PGimBYcZjNcPEux2PxR5mc1ssiz35Zgs4cazRjoTzA1FYySHuQNs",
  "key40": "3ZLFZBq9112tocjrCeyapgR7mzoFcYULnFhmGMXNR3uEAhMeZdC7iPx49WA4ELMdV2E3t1624Whus2Nam2QpqgdX",
  "key41": "2zkmsBQiFJoRm6tGqtPeggqNjygVYDrwcJqXh5s9EHpAgjQSJ1EXoU76wK8oeff1tUbSBpwBUNUAWyK1krf9heE4",
  "key42": "2DhRUqmaAg8XY3MHiWS9bLS4Ns45HCzCgeJqT92rbVxViKeStwMSG5H1YrhD6fEqRtYJPzv57fGRkVy6NUBsgCHZ",
  "key43": "3QE8YHUVyAPiMko9EPmtHefMpQh86G35L2aCqGMbb2c671yXj2sXMwt5LJ361rLVjQ6vUQs2tH3QJjKawCtPNak7",
  "key44": "3hSm2mjsCRpbE7pqTbB51vgAGzDVBEpELpT9emq1Q4uoY55a2BQZtLVctd8umZ8ubpBNBk2FPJ8CMYxhnhYo9dpv",
  "key45": "3ta8sMgKJtZQXuTwraig4NZTrMwrLhR6ks9ZnTbvFf1YzBU4dkTzJ4XtsWJYeS5QivwXZ3iiHNFPRXbDBHv55EAH",
  "key46": "5Ua9rLMN4DLRQaF1A7YL9vLcCZsM5ts33NZV948shXaKvjUPo5bnzH1Qt4CiXJdbRHymxzbhMQTSLn2o6nsLuHEW",
  "key47": "UMeQkPWhs6oaPw7Bg1GZjHRNwLgLirFXtBZkyGt2D1rhQbc9R2tVgBAUvw3fyEnGWrE4enRh53wmFKAxm5GKFz5"
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
