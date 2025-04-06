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
    "332L1UYoJB2BqRDFxKzgEFAZE1tjTeQU7K4uvUSadBG5hCHdNkGkL63qCQp6a66zvHzEsMgxPzhiJJyAVzYdHvav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rbdsPm5VCx18ZzV7oiXHUPqN1zDW84tq2i4CwuRzEbfhFr4u8t4zjcQqUMcDzjeDZzkqUuZPUhUwGF5RxHRNkPo",
  "key1": "2D3nsLR9PJtP1Nw3dubCovX3HN3nGpF4kSaQAJvnctzQZ9CMTYPqiYHrAXUAYYTpF6m9bmLfzBG2Lo6nxhYeF6PV",
  "key2": "iEqJ4auXvvBJgdR8dJGv3hjBSqLZGnZ4gNjFgiE56DG6MpsNaVt1b6G6JTZHEw6mjfRt8Dn1n9F1HF93kn3P2da",
  "key3": "3ZxdNyCuG8k9LiUtggcVPL7aHx4ghmqt3QBzJyry4w8qmQwMEgZmDS9fUZ3Z5Q1hmDRdUxwPMQ9B8y27rL5e7DUW",
  "key4": "62apVerLK1F6NuCAd35UaeNjsCoz7zGWyUrS73psfxxnNh6XxPcZQwUkdN5yL85foDS2aLE74vqehu6XJ1e65WiE",
  "key5": "2hmeFedzK8pMLZ9acVtFyMCszMSKg9GhZ2MN2yiLWfzikNSnJVa6XqBoWNfshu9sRXJXpHxYm4Gqt8LXs5u24Cg7",
  "key6": "W1DeUhVuaEL3Fr5PQEFF7DzbUNiKBzeWNWQrjUtwc9ehiAYA6cZqF54ZHmUasyGt3agZXXPQfsUh5Cbg1p3R9Fn",
  "key7": "3aixeQfMfAtfrKDixZecL3xnEYHRW9NNP1N7TLRd7EXthrAANwjrLS2C66ckHhqiTWq9J6gUjTrg2PvpBXMxuhBM",
  "key8": "EKd7DqyhSdiHCCSQRiM7ycFrNqxbBC2LueU2tM5GrRDKWbxddhE7joEbRMEjqjwRDbFDQuL6793GnMv7uzei1Zy",
  "key9": "6j6FxaU9Q4zHZBmhcaXwyv9e7jaU2Fodzjkd6DPmfLgrw1sPCEhnZCwyvkg1XXpK4JshocqdvQFNiD2mDP9xKcP",
  "key10": "4frHeRASqajbVmcUraUYijoFqattoExyqNPkGj3sZV4VgWrKaDBCrrHcHdgzfanaaCJRBjmhzsyjHNtqAW6P3tHJ",
  "key11": "27X5syeJTXozM5yTZtGEj37GeoQGfTuThHSRnTgFFzPwBSmuhd9RjzcTfHMfXZpzZAsd8JLwsB5VQhvMypAhWitV",
  "key12": "4grRNA3a2PaUEqcPuvkgHKdVmS553gKPsk6d2L38ZFjwtVW7kF7bXhRaQtqwtrtkaAQCHf3vm46wcuMW2wKiV4a4",
  "key13": "4b7Scski5DkGukRUWzeCzfoDgkJv7d4AyWw6h3SJDKSm8Aemvdut61c8QBwNAVAMTgXo8wFBQXjUVseHyZsK4Bsp",
  "key14": "Z9DQL2Fi52EaNoWS6ZJDaPr2MTWv7YWqRLgUiWiTvgXVxFZhEFtdMoZgTKvJAojko41reyx9sX9y68PAaw7MpjJ",
  "key15": "4iTLm9AQ8BW28Wm44dJQ4vE7sbcnEdye2QNaHLh7BfDStswkqUJboVUSLafekjitM5EsRbzEoEv8pUmEcSvzxra",
  "key16": "PGWafeamiihNSxbAwH2GwBoaDp469TXGEb3QCy7iG623fdBRttDLVPQyib4HaGLHYujndsfbaCQKxufA2gsNXFf",
  "key17": "25Bi2GS8smpuYmjHtYDjse7nwbhk8inCNaQEcRtXYWtghFPbUzNS7LUHWW6uNRA72zfstQrzf5rdKQyXXazP53Ss",
  "key18": "2e3hgNzxHpkAU9nTUtpPRe3s3F6ZEMRn5RFXRLM1eELWB2cCAVPDkHuvHX1ZiRHCJKP6Dw4RtBpGW3nmTfQUhqMY",
  "key19": "2GYsCk7fk1TyEsVK11sbgu9QMaHhKmn1rDDhj24p3onPGMefPP9yi5d2n83ZhRAXzeZ58vekBgJ2eQDv7Aj7EF7h",
  "key20": "5z8fLbLixM34cvRXbKVYNHwFsJFaLHkQoRd7CKFTsSPfzgsuyMNjYhhGe1RSNbUP9WfiywjSjto6pibKrq2ovgew",
  "key21": "5pu9eRd3KLktnKi3eJCjaYteJuM4XLFQzDm9GqVsVwxEpTDRxbngCwaxy6LtSKQn7ZBX7be5LkTA9JfXQe5SfUBJ",
  "key22": "65fcu7g9ZJaoWwMcL12ZNtf9dFFKj6ZMY2n1QVg9v92gBS8XDNMCgUeDaS7FEiqgVoy4JAcW5HXPxmeNvvjPQbee",
  "key23": "5XHoxr3E3sL9vpSup9j6o9JM7aYEdYK1cHBSpPJj7aE4gMH5y7oEHWPDjx925tnoomu6KwAGowUmb9ao2P7286HC",
  "key24": "2c8AqDqnAhFaXU5894YT6NKF2vQYCvHJbixmQaZCVQ2MV3XMTYtG8VEzNn3imReRYdtK4tQBQ7aR5UDi9oTMBtR9",
  "key25": "3Q6SKruKjRUwZ9gK8DSy7z3Uukqup5mXczYg2KQa2WWUoDZY2PCw8bYTcTZfuZiq99heaL8EaHByXYPbxiy5LPf8",
  "key26": "32hRTML95Lz4ox6NvyTJF8UEZYK22zxw9rc8ZvMBM57hE8AgpNSu5ycgpe8iBXvGqVpDfpsTCNT9o1Ek2oSQx8LV",
  "key27": "a7y3VFUNGipBT3vBWdMACrheRPaysAKZdiNnVL4e87HMetWbLEo9tkDPDvBjnzKUqCYoavFLXecAHgsYU6yC5Ct",
  "key28": "4B8n2jRFQbQ3b2fsi6WzpKnUZRtiQ41v2rgDfFhmBbPrSWA16WP5ReobvsoXTszq3kiiLvMmvD382ddjCbuL3Emc",
  "key29": "2BRjNeFYgo2kuXfj4yqkBXbmqhPezjoh1nKCJ6wXghU9M3hXnY9kqyhB4MW6xxEaf4cr7PzAbLhxDL2Ek7r2EQTV",
  "key30": "4dHiAaKU7jCWhsJXe497QZhsEoGyg2WSZV8zUmCVMdKqGpNb9uMaUvpRa3kijrpLtMUvq2qwCozzatYhVLo5dram",
  "key31": "7WhQi59Kinbav4NAV6qLzQPLyA7hqSZTpseKvzk3rQL3WMs62bgWDgKn6bjo574ok3mZiSpLwQ79UYQqjjct7BJ",
  "key32": "4pFddfjrzf41snuA8nGxHN7JqgxbQMBMtc9t9uyRnPJ99ppYYwR48A2KbUp39cQra7r4QBsAqPndwNUtE81uNfze",
  "key33": "4Pr5dcJhaRbAhin9RCuw27XG1xnuHQnwVA7eRyMVR9b7FaxwRYhXyBDx7mYeqnbJdTYvErurRzfbbh8acojNwtWm",
  "key34": "3wW2n13qHxgt1FeQxrv3FZZTg4ELemgQietF6gwcthDkeEbobHSE7D2awgjgohffjggyovXgW5jXk9P8qLtrEYWb",
  "key35": "3CnrYoV1bj88YRFtKbQ1fkifDjkMjuNcSwQmb942kN26Z1KUTPgKjuWtmsDrCCJBoNWp1WENSUikoKdQQHCz3rcv",
  "key36": "4iQHdESSkCk6S6ZVyFZkSjVVkty5uunrApq7EL6dT15wpgGmvaQeeaHRNd3pxyieEuiHmSnAQPzeWeCeMa3Vgu32",
  "key37": "5GTzMn3ru9aG1oRd8dXSw2n5sifmVq6zACBfmQY8XncvtJLyz6rLiGxrjNGYxV2L8nwhj6EYzmnY3f8oV7R7YzT4",
  "key38": "3F1eVeHGR9p9EyRKhVBTz52cTbCUbZzxjWZy49gqdcdxw3x4mNpXWK1YjVXnjjiXjomB5m4D6oVBGsSD8ZnMwWvX",
  "key39": "3aehNJdmb62XSMX7JEyQtbKC7u1ednLo5Ahw51CGHCxPxyUipP2Y3cWhRFC6uwe7KzU7r2dV8cM8qnyGiDW7UB4N",
  "key40": "65NyNTNX1SM1NHN88FWjxAKKWPibjypaw5P6YXMTFPn17XF5AxpotiLVmJxMhaEm74ALwKZ9wxpdMMVuXywV7cKU",
  "key41": "2j1NsXHj6ZaRBCMRCfwEGRP3stx3JG57P6L3wYUP2PNZyd3oSNEn5hhqRnQkb5PuiRv2prFXtWbbfyusQXGMb5s9",
  "key42": "5fSHQ6ZEjq6EnKdgWNMHRMnPkXYEAMSPdbE5z5nj5LGXwNiR1FSnm7ZMz7Dt1xzRffqrUxeDYrn2tXkKeMNK5o61",
  "key43": "2F6oaWHqoddS5dPiNtjwVMwED4CqMyoaDp7gXVf17ZfnAEuhiQLP2oTGKUbDpnb4stjt9njKwLVg5CfRAF1AWXDP",
  "key44": "3dxu1tVEBQEWf32NZSoXA8fTVLtfQVS1w1aVEPrM5C4HCeBpgabyUR9XmpLoVNtXKABH23fPfH82RLz6Y4XefQXK",
  "key45": "3G7K84Hijme2wy2WoUkYSZ3VhaVwcp3kDqjGWf6gHYRvm7RofA9oqmFr35BToyg3J7LpUbTdhuTQWkkZtvFnobmj"
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
