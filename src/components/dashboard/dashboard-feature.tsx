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
    "unid6r6GqxXb3Fmk8kSzBpVBW7xrFSfPAVtNEzvWYhv7j4gw2cXketkeE5xAPjYisiRK3MsgHnGxhjMWGAsVS6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jKUGaDXRsvumWfYwqD6ynZ4QY38Y4wc235oNqDPjEbcHkKKBVGpNvaq4c36FKBcmrH1ZYe5HLVcTe2ufUAKoNnz",
  "key1": "2vvoWAHUw1neM3eoSXFRzhSzYJhjo3Eh2erBCi6v2FPQgj75TXcajVTp7w6haR6Ncqp4HS6vqZ4tPbKWUBsrnrsR",
  "key2": "46duLK22hJ8vHUiAKUpeZhsbSwiB64ULT3GfxWYGtvcQkxkc6BhL3z1nHsrnQNSRKavBUCK5aHrRmtzxZJuo42EH",
  "key3": "hHADRKoLMuS7UAfCTLm4ACfmaBHJH9b36du775GAh563Mswiujzb91pwMCNawEcn43dUQzfc8FG14z29qiA1QpV",
  "key4": "3WJPxyaqogbUPXYXwha4P35xzGdnAfHNr1vH68SdyZR6oM7riJRvG6h6otiEuyi2Wg3CnjfN4pPy6u9i9PZ7kVT9",
  "key5": "4fmmyvVJc2cCCcK3T2FFYDcPnMSuohjonaR9MA5csj1rutCvie4xjwMyZsx5WzzfnzxswfoQhYsKMLLcYUGJwRXy",
  "key6": "3rx47a7yHK8FN73BFdZwYwfQCEmw2G86Vi3PRNVQ4ckG6JHJMGwQjL4AZqQyEsgMtUzBkSUyxs9RC3L1htZzvFdf",
  "key7": "3bU8FaBbKo9nc5bg5vRMhvRKs1JDqjEMcbdSVZRNYzZZueV27rX9AY9ZFcMq1sUmvGdXgj1ZpP8BQJA5N9WNGHmx",
  "key8": "2ZEAC7XDKL5wRR34wgkxoq8yqLuehEymrPURLTzVuNrqZebTu7uojHJMDxfrRD3GK7CGVCNpCBnagV2FwXCzngT8",
  "key9": "2798eLAJf2yw8fZzdWoj2XSkATXXY1QZ1nFHwpHggJW5TNbsXBzP2woTEn6myDCTzZcSYZqFTcrPR1vaULJQBJGG",
  "key10": "3vA3XNK8wsrr6hauhyY6VTDkXZbfn2ASa67kapsEP75GGpNYMK2GeubVFwyKWcfpfGTQcVrAqg996uAMf6AYPP5b",
  "key11": "mjmZkLEznrWG3pET8KFsMJfZSAb991HQfG4N9EFwUBNAj8bYf3pMR6aQXsq89dr22mPnFnfckBAV7aRYsLCUVnr",
  "key12": "Js4sMkwwHNGziHdHw47YPXeDGVrGmfUeoqh9gP2kJHPwgcK1ExnMCbXAxNS3LL2Ei2NLkExQLBHTx3vDhKgKmjN",
  "key13": "3A5aEbyPPSoyKE58DBnRCjGqHMGb6oZaATasEFremU9uWwY51k6EP474AHb9aeaZWzBmKCWykHaGRq3JF4Vuy3Rc",
  "key14": "5myp9SE5gZovpXnYRudZinzWjnSifxYshcFxiSvazjp1rAaGZWXR4nMMZsYF4KJrUPcTyZ4XEXQUWhvTKMCBe2oK",
  "key15": "BcVH1mEAYDuvwiayf6QiTu7owWd5qBBa5qNjYmMMPxPweQ2QHc8sxrb8KLBxqMoot3tR6TLkHg1FbMNRTbaDiXm",
  "key16": "5wiy4D7f8LuFgBbGd1NUMuT1C5ZACpTgoUe2uXfdiFMpqkYrE9uAuF5dZVvieb7kEjX3az8zQrhPM5q36teQR6Q5",
  "key17": "2PzDgNfRGfMAumSUcesry8i6vjLqPAPi8BiEEJgkvzVvtr7gs1rosiDku1kVLaXCmzqHDB2N3mJSvRBoGPGmRtY1",
  "key18": "ooecSffD2QEQWGbs1YvbTjQ1aVBNB1DTWmANBuHp4mXZed4NpELaAbQfB4u1yo6zx1nWfazGHn7E7ySWzXKwZA8",
  "key19": "U4cBzXFpp9dcqT2Per3hu1VraggkBh1pVMf6AFvEt1qnqbe4d15hREpDHLRy6RQNpz4y4pY3EA8dTvXcFZE6sQz",
  "key20": "4QjAapTJ8UX6kebQmzAWCd1vGSZsjZKrpZTQ6q75LFYPx42vqAAtuegtvsBbYZy17Q9xGnyguSgqHYtfhZWjWuvq",
  "key21": "4vSYNtsFbmoAN8AE5SPhJjLSSgKSJ2Lu7TRSvbVhxaYhjzLStr7sBX5w6JAzqVbvinduYQYE5Bkh2k1E5SJfRpBx",
  "key22": "5sujLPTjj6o4TTj5a9eu6p32n7DaUiyd11gKfs2NKGekn3qYuwD4iRs4cmacSoTtp2ZvspUs8xqAQznJDhoMa9uF",
  "key23": "4v5fZ7dMTzrzXpYYcXpg4b3aeN4DrNBB3wCjN1525S9KBz47ZtaNHxc3oTvF2foQtMXoe5P5kqEAoWG7uzrt1Kqk",
  "key24": "63B9GuZV6dimHwUBc41pSNWG3TS18dZTtPcArK5cpbkFD9hFpb1EsAPqWnek3mH9aBdDpfnH2wr7opMipE4JJzBG",
  "key25": "3hxWziXg1HxMiybVuSuk8qkBcysN2PkrRynEktyhudiUFLoTvxXjwBTaccfShyWzCvEhqyEmksZU66SoAywwDE4p",
  "key26": "4cvev7y5GNk2r9Udaow7GtHPfubSo89Rpcn4e9XrkWWoSFKYu5VLebQXMCxDaaSkB4mRxSXhfx7DEjBVJZLzBvwv",
  "key27": "2uVCq7qfGsKy74WBEAGZGsWr2oaBThchYJk6m3XDwz9zYuu5mCqUydjZ71SFMjEqZ4GuEsvFJFJkSPrT7JcGDT11",
  "key28": "5YoETjgamqXUJ2r5HZ3yJ1WVpjYHPeAMHXW6DsirgjCMCpWdPL6FXp4LiFMaFiAj5JCybqDQTqzw2P36dt1huQTd",
  "key29": "a24ogvdCGyXRi3VWBNpRxt2YbB3y6tU63mT9yn8KJ3jkaV31UiHn5Ap9vw2st1CWVtwEeFP2nqpqo7KXhHDipbq",
  "key30": "5sM8VTAczbskUpqGq3X6PhgnyyMMNv2LqTEmM3K7L5qVRcjA854oaiFm76M12hTAm6AbKBZacXcz5mEkip8XevDC",
  "key31": "3tVjEmQgJdnyQ1jKijrfjAeGFY91mdEzssiNaTnywMpw91D4QtsA5TT8uS8ksthstcpAwbEMJepKTGs6NpGH4hU6",
  "key32": "xGfWvEVja8E1fzjZdN4QhfgEFk7QAcTiypBNDsbHTvFwtbPDq2KiH5DGNYjshNcnoMKmQ9BzMkMzGAZBU3z36Bb",
  "key33": "gtXWE7bKv7YkkG8aiBFozpPeGxy8ghfPiEGqJ4Ry75TH1vmgcny818qkuXHzF5EufQqFwB9An8LLpezM9fM996E",
  "key34": "4porfrE9tFni5iUXRjUxjgSnTr4ZrgoSf1iHuBrGMPjSLF3K8j313y1VGCtmzyDcrij9Nm1CdwxVJ4mEhLty7F1S",
  "key35": "A2oFxQpc3Eupm7Q8rqkcftPU1mkYPerwLWpFafjaJCU4HzhTm9gmjcpiPHcZ9RTUBEvDSWXdxYzxVofgFeBV9AF",
  "key36": "32cobjt1hZCW3em6PT7cvBc7XqvX3HLvZ98LR4HDXx7azHv5Eviwu2fmrEiv6qdtyPhwsJHPZugPVBgAHuYS6Mt4",
  "key37": "SoDKZL76ctJdpWGLyNPkWjg7WekTBZPrYForsetUsP523qgrYBAy3Tt9xPnnmpY3mBQnfqAXbenFP4XZsP41L4m"
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
