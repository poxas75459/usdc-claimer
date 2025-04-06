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
    "4j3kcpCviiQUsFxV4XvDG8gaKqKgeh86ifPRzhFABCzhQFs5jRVeM9tkLMZagPtKFQVHfT8KioB5qTGkZQgod9U7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PQ8GgLd1GKemS7C97hiBu5F3EcxUByYxsop4DLB65AfD37wou4QRnsHXevu1Vepvk3Z8cfG3y5od7YTUNLAWj9z",
  "key1": "5nrxSgas88xxQ1yjQDhXRLpGLQsHY1Fdz28FuqXyohqG4sQCPV8ARqvu8e4DrwjwihtCCNdXVPzXz41BDv2HHnvU",
  "key2": "2qU5kw5Jq6cw44hCTxhr3TahdJphJyCqWSbPNEHEJa3jDoaa25rkgoKrx1tv57TbKbCr6A6StMxQkicia6nReKBx",
  "key3": "4uw63yVTDfqEQtS68DWdr7mibY9YNosJcRxfuoceGhdExvTetCPn7YxSA6SwSYTzZzdLYR11KXqiDb4ifFSvWCoi",
  "key4": "5wgU6NWgDHL1jnDa8LzKiutDCV1ucGeAbHDtu84T95Fv5GKbFLVGgGdRLccmkuMjT6bRqzn5QNLdZn4VrR4cGVrk",
  "key5": "dyCdXrrpEadkMgS4xjNVkVchbepFtkK4yVKWZdHdqAL1DvRyEGa5yUHcYLZYcsvrjS44ccT8vajQL8DceSsiK6r",
  "key6": "5poo2nmvbB4DgRGssmsetbKwNansw3rJc7kp9QwuR8K1nJ8yKNkMXVQfTRav9Z4Tv1fESUQFDTDgGXRaFSrhuv8b",
  "key7": "2nuf4QKxMfd1gWV8kDVqo9N8ytbuR1MSQwsRs9mXkMLZsN2QWXZedqtkQdMi7vnVHYhG3ExsqJfSyGyQDf3LiyC",
  "key8": "2yMS6KvKfzHutRvaqkMtaq4tTejaL5BgKXhi1TfqWpKrcUcwM4z7TpBKcWDnpWDhqpYjBivWfEnawYVKB3LYAgM1",
  "key9": "TYibF9943Pp8SPtVCobYxM2f7uCDvjfADi144boXbf2YeGsys8b1gUdbJQdEkeAbDrM4JPsP1P791fqzfddiJPi",
  "key10": "4bJKXV4CqhkQME7iXMYgo3WXhTfRopzCr4urK2ynNmnpH8jw6DRYcPjCVAUrEEBACAmXYpjX7vr9FY2YMFqtbSiZ",
  "key11": "uXRvTaPcUHtfmcagVxrZ45AJ9XUhnEmABzfbqrcu9La4E5YVLgeknAy7UAabJ9b2EiFdQqAJEa5ZwrPXSF4mAkh",
  "key12": "wJAqZLyVjxYXsAKKg6LXdgJ4fjhhktT93fzHqJd54w5uXJXSHP9mZfPXWqSN1jTDjSAcRUQGKo97ZSi6ebymM2i",
  "key13": "2wtunEFRpknttJhx4a58JDh9E2Y4DcCPXkz8aczbnWH9VJNB3RBAmXhjLMQSnE4z6b8d8dkjLtLRpadEdAejx1oo",
  "key14": "3mUJ8HbXLSzdaYtuJ79rRuPN5idXgB9WHCyN3qYZTBf6qpsMyXd4Bcm3EaTEgHf4LVy9syJZsLydTxknm2GfZzP3",
  "key15": "3BkdSJq8yWfZ6rE8WbbXW4xezg9tZ2iVwBnEpFAjwxg2vN4Dh1Fn43hUKKVP4Uq3c1YFTHAqDgYZueYLrorYD9jm",
  "key16": "4Bdidi3dVB8MYeWwjDTLEKfpArmWxi2XdN43wFEq8Ng7qse4j5SMQi4JV7T9bfVCEHNZEaYJXxirDia6PxcTchs4",
  "key17": "2NuDpeM7yNBYr7BbqJ9mfXuQDdwMGahWbaAziWuBQnuxwJ5iG4zSfv3P6xcC8rtxzvDJ7bFNcWTfB86BgEv6eVuB",
  "key18": "5vqV4KhZLgLwKAU6ofniYYjCJvekrgdY1iQzCEvWZWWmVzUCrDHaSJ86owoUgtTdcfaqfMF6mq82CnNk76Zwk559",
  "key19": "2CjNhBRH34uotgCv4DGwaw7z9wvm2bP5fiVQRvgWFvgiyrpiWcEdgVu6gk9MYCWfZYKu1AXYEDYwJ5Bnx51HzizW",
  "key20": "3SwmGqkUDqsw8UxTyDpuLppvcpLno6ib7HkrvTrNzz6kPqtFT5f5rdYWN9F7Uhs5ZGFNC2z3cqojo75H6UX7EQ1s",
  "key21": "3HowBf1Ts8szkxzaAtXKbbE6yoTayrW2M9weCxFXU229ercYgmv8Do3CZqyjAerb3hc3i9dKRX45FHgj8NpGfUzQ",
  "key22": "GoYupXoCotZ44FXo7vRSywzq4N4fzQHYoCmdrW1t5CP3XZv7ZFXijvSEYZQ83zG5N4QLphHtD1oGTHykN9Ud5eY",
  "key23": "5sGpsA1foNiikHzf6F86kjW3gDQLdC6SJENZiXRVNUVwm9gd1uATUbdAeRCic3oGwxE3bYNT5wxhozktmMB48ato",
  "key24": "66NsNaqHeFjyikBfHDtmzpRkkiVaLNALXXhWgRJNyG1ANMHAXLkU4tgJY3jmix7QVLntipGc2Tv99Qykzy5ngmT5",
  "key25": "2AER9CFoGhqKJZW3cZGsoeMZRRCBsMaarx5DZzBHQcYruzaPAcGrhDQqvoSX1krnh6a5PT2SKCywUzJMPGm6fE8R",
  "key26": "2xs6LAg2iHin4jKugiEcFwyf6fYJL4yBD8fHf9i8TLTSa968y16Qr9bqD7pTsNLLEvfDSaZGndNF9n3JJ11nyK84",
  "key27": "3cd8SZSuMuDjmNxaaYfAemkMsATi9sE8XcNZtW8DXsFf3Yf9jpdm4ryhJ8hUxa4UUcMzHaGNjKVAQwucAeisCkkZ",
  "key28": "39CZ2auUyKN74rVCURK72YAWK5ceJpvY8yD1XdDxNxoGpN9qwmVoWcfK5T5quBBoCZnoMt5RwtY4Vxra1DUSJdpK",
  "key29": "37iaWUDVXQpjWXqEDmf6s2HgC7rqAt4deiveuMLPd9kRdkrnXNCnCmgcVMQLE5sEeVzgEs55cuAyfexC4y47Xio3",
  "key30": "54oT7wYSEgNsufhDc3S5FTAFirUuLhBEpY4pw1z5AngRzzY7tEPL41uhku5Ljic9rMbBoh6jkkftHsCbwTpUy9TS",
  "key31": "4zSj7kruins4e54QCEDkM8E5jdFymgCeAmiPndPPkDsFWmPrwk686TJacZdG4YXee2vdPYNR2kyfis4D8KBHS47k",
  "key32": "4sG4S2871dUfCDEP3dVg66XCbP9qRcox1itXM4TJXyZ1zwaPfvThecDXYvkPBuPGDqpRu6RpZ6RX6Zf9cwnjXi5a",
  "key33": "4wqkbjbQ3CbaFAf1w2PLs7evwbkFRf75RQbHUTexrebbiMaMPqY6Xcmfp1MgdFKYjqam7mFS4U3taRKg6LMYx7Yy",
  "key34": "2xbCa6QyoeP51tXPDzei9UUnoDogc6NtWDgMMa7FWcGNzEp4KJdfrtBfpuTeP8mZZTJj47pwxYbuHAgMFX4nz9v9",
  "key35": "oVxqag6YjcZs9TH2NMbLTX7NEewxeFcw5F4eA2ME7N5MP1fMmUPKtbCGrZDQTKuqw2aQyg1HqBsQ16Bg4EF2fUe",
  "key36": "289NAGnj9ct1biYHUqLNBavKAHtXXkijt19GDN7ybg3MKBFVXZLZT49LzFc14XN1FA2u16ZQQQ2n28UcTxDGKsZ9",
  "key37": "4bvLSKKLkgmjUpyeTsTs6U5Q6ufBEsXSorA2a8X1G5eoaDvkK723FGwPYy7SwesafnbUgLfso91GV78oJQmgAss2",
  "key38": "zZReNPjowM6tP25pLC9PCht4Xxw2g2iuBuAvCssvok66GhnGVoUfKgn3vSVsMcRp51gPn6NStnsda6u4DQXeKDs",
  "key39": "4YyjZYb3FjWvPC3YpMwRMRt8MHGoEFsmGbgREViQvGhdGsDoob32Kyqiqy5VFyGJ998CmxixQ2kgEo6ejnfc2J7J",
  "key40": "yLTncusVn6Usy75KKnyZiLhYEnDRj8RKEBFBmq31byu7Z1P7JmzqNjNyP1LDH91vjntt54miduB9HtimHTLvm1A",
  "key41": "p5QEeF1852eFMSc3xwSbPZSufpfgpzF1tYpnZs2w11ayKppeuxhoQqHpgxrqNQfwqPgkzEWiNqm3sMVAgqX785Y"
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
