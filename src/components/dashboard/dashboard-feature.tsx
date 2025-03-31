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
    "3GwkiNfrpHREJEzGcxjEuEwRgdyN8u2Hypu1tyVktSHyDqmpk98UvBk35TKCn4TC6HfFWzQC2exq2CrDXUitMUAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9mebh1NAZM2R1JXW4hcXjPLg9ApyHZHNTXvneBxgWA8bJzz4F2n6jgCdz2TU6RETmJGRaDMjSUCbxRvhZFiCtkS",
  "key1": "PdzbZjCswyBPPicfwjHHVGYkRbVymD8qnzhJoDApe47DMNFXcU4URz6UXMvAWjUfiL9fB8N7MAXRHp5AjLdmk7i",
  "key2": "51kuAZsL1dcF64Dum4eXkntx6FzbmrD2vWjohUu2F6qfMtpPrX3BAFuF7mCCtMKQzti1fmVdqJ6H42uxki466dcn",
  "key3": "5SWPxYV8c4Dn9CRRZoY69gy4on43BniB3hQccFwasYapDEzWJCT1fnfnwEnn9VkJqSE7NtjAV2KuuJr7LZb6URPy",
  "key4": "5y3DAVcsuUgcpVViXiWDH83zHyS25ibkbsj9qZso2D5wq6BvGRxojk3JgshzQUoAP4SY1cG4yHp2juoJrhNdFcbX",
  "key5": "ESe8mQjESQ79C1768j7g7N9W2YCw993JySnqczAgDLjDZJcvThHX7P4zJ9oEcRBtzRv2VXDQxZAEkn1HCCJ8SYw",
  "key6": "52zeBnGr3VdEirNruZLC2o8uG95HZmHWFAybVcS2DSKDVgm5smYjAZW3yM2HRNVD863zijkpTuQakMfjrYsj4PAC",
  "key7": "5DtqS5VKctG18pKMNiajoMRKHj1TDTeAdApPVwptnirT6PiEH92frRphZq4c2j4FpFj6crmxwtcHiSe87qbBYgRb",
  "key8": "5sF8H9e2ahZqmESisf9w46Wt45vVPidmEhV3nve934jb72UaMie9mCf1wG1dQrbvRdcAWBnmFun4ybyDyVamffVC",
  "key9": "451XYnfiY8FkMYsZEqn1dvuu5ANZLVAZ9EoPN2vkECJqFA3D65XQi6QLpMddBhyEHX2zhqYn8KixFyvUcZYbKGwP",
  "key10": "BuPrCaJuJiKeNVqbNHzw9TPyX9yYhNZVNri7Tqap6gqmzKbX6kPEERyHz7zziRUjBUWUuEWmLQfS3AyVkdzQvJN",
  "key11": "3ojg7A6dYUUPK8chRYnnfZ7cB4bEzqMFX2K6eHxLWbKvAmDbD8zP41i2uoNcsCN32BDKQBPAivmpd7sQmez6D58y",
  "key12": "2hiyTyoWvq8aH6MDrWP56SG1SGkmPQznQ8VTZFqv1QfyWDjU9LbncEFye9iajEYekQpxVi7HaRpNwG1Eo43Sz7vc",
  "key13": "2HrgQpmwhwZSTtVZ3q9sGkiDmLLg7aCCnB8tfryVnNsG8rk5EeN9TTHBMnguRACuo8KiFB4Qd4cdMZKuob3Y7czt",
  "key14": "22XygkuFRaihpDosEQRZBNAqaYTJ6jwe1E7smaaMj8jozfuHuMFzdSC9QE6kQa4nM5X8HueHqcxQXBxHzu4u5cEr",
  "key15": "JZjK6YTrngGSQnGr6V5y4C32kN97qVfWgLwYEH3DTkKZFJdn1LB5vR9GwnjJvStKMyqUhjvHaoN4B8UjMGWahhR",
  "key16": "3cpumiwL6gVLmEpVE1Up6F6hJspJZEJ1WmqdW21atHCE5FuKF25npk9yZRzWknefJyZWBBTLKrxQkkL3YfDGMjXC",
  "key17": "3MEo3jiB3NicECgEpCY9CQWE7FQ8k4Ch8MKmLzfrR8r4VU6GYXfoQcHWJ8x1eAFJigCRVLHANeAQ7gcS8o6hUZja",
  "key18": "2KKvcrTUJNEsoPeopcxb68H6F7iBimoyUnKB629cvZDrXMambDGQ7iW1MAj4p5tgqdDm1W88YdBVetE4kAse8hp8",
  "key19": "hrCD1gkfSHQfqSphFfZCiRgfyLmhBKEb2P6XZ4VEejeg1JxubJM5dxc4Sx5yU7jYYh3UJBMseAMR5zkGTVa297T",
  "key20": "5qUYXz9FyTSaVXHttmn7LNsRhTUQJWd3Z36KqJ41XqqCPnWpnwvmhjYx9HxdfTx73cNw7PbS5cqkgqTcBQgZhqwS",
  "key21": "MCux6KKC4uYtDotpHBP81YWLiTCchzfwemg6Ng7Dsh8P5GCH3ZxfxWSQmHHQ3iFWTkHuJHo3XhXsf49z8Yw1MiY",
  "key22": "3taX4zFeq95zvNBz9qkyuVYoL9er1brhvC9cTqmijUQJTDQuz3oMAEHP4jxThy3yYsty4hVm8b6N3qN2m6wwWhTJ",
  "key23": "DN7LwfhUydLaWTZtvvBBfwkBDrC5HCm8saU8HjqYQihHMrs1BmZ3hTufno6H8GjkRuhZibmQh4zsFZcGKP4wMCd",
  "key24": "4cmBcrJ24wZ4ieDeNX7C2ZVEFyhCdVV5VdXNri4cev9PKXaKrqn7SCKeGkAdah8yXZymLxVuGpTVUSYwsjiJ9vMX",
  "key25": "2HHpdh9uLpKPunzbsnFnQGgP428KCeGoXonpvGCMUjxx4WATufy16bKJbDT5foaC8A4Efqh52CCx1SobqttxDoRX",
  "key26": "5HBZSucAZUs7HKQn5ERYkn3EuY45SxtXdGmbG6jmWJRG9cGBQXUVLgXmC7AXwFMsc7i7tDoGFayvfGb61AFcFc6X",
  "key27": "32r4orWBu9pb4VawiGnTaUSG8G6aaWs2bTcWdExLmwrEsTH11Ld2xHnzrWgiFc6dhXz5zNWgCq1zeVoiNpGwQi8A",
  "key28": "4yuUv8RZNsqDCjrJbQx8s17oESNwik7cUiU6rpTpVu1vCmd3J86qeF13hSjZBy5dEfZjV6RjCXWrm7UJUuWLeyrW",
  "key29": "43UufsEGdKDQXHmmghv6snahB8gf343V3YEvK6QpWdFSGh16gDu7kTK5NxnSerUfFM4kHzkpj58WUxpPyPLiXeR3",
  "key30": "5WbHEHV1myBhT6Xds3xgCpCXuWTyFseWoJqDg9NGjim4RRZ7V5bLmD9yeHMHoiWGPByewsrqvnFRKE5ihchFx42C",
  "key31": "7Gmq8WAnbyq5rieWJZa1A3gd88DFXG8Ww1XuFHNB7vKSwchtae8ZEDH3ViND6WVPG6QEng7T6C5VCu7XzgEuMyo",
  "key32": "4NPM9dz1e2pstDq8Hy6f784rTWBZCGhSq58ig6MmCUrF7dJ3QrxM7wvkeJ4n47eFwuWpK4Wk7Gso4mfjdn9Rsn1Z",
  "key33": "3qqeBp6jgfW2mubhqvFYhucbnxVMA1JviohDct1kwwGJ15SVUdJZP3h9UM1ASoGjrbRs88iTRvJb2vBHvUgWoQ7J",
  "key34": "3z6S2wmGeGzLmvNFKrkcQEMBYWgAk8snbtJ8TdT9D8vAaD41scCVHMD67JvecyLzgziqdmo8BFHWYh9h5NXoDo38",
  "key35": "56JFFikf6m7fJ29aBkTqTCqds3bLhsW2HcudcXYQdJjNsWKqexRrpmscdgtadQvExr4F2gYN7VTCkbqGKnyrDD6f",
  "key36": "5DYviwKmg14Ky5d9b13GVherzfW1xQZKuQxskxFzRQN2TNLy7wHU5Y4DdmY83Vyma12YiFJUyQBhmfYMBhUQkdB4",
  "key37": "2EU2usWEaYnHo2FWtrzGMvs3Y7Z1YqD5d1j1XeDKTsW9WtfrnJ2ELXxgAqx2AV2fEm91hgHjfty12Z2pD6xXXoDk",
  "key38": "665NFJnQTDAS99fcKmaNdRiZKJtWLJ5tCLGwAnabHSgbrk82md3Jb6uNof7KTAAyhfkuZDUUZySbEuvGEdq2BxeB",
  "key39": "3gXDvqrBWUTrzU8QgDjLHWJx2qroysbkBnYVfV6pvWsB9qst62xEkWURoE5uq55zyczH6X9wWt3qnRg1YD5niFJH",
  "key40": "4usHyfgVGBmzi6Yruj1V5PVw3mHup7zWzrKFeuEnUo7Q3tydUUa2cqq5NJA6h3SKop713A8Vf5XVHW1ibvkRJYqd",
  "key41": "4eBbsJ9E7cMnebx1kGreSL5hanEUpnZqd2w6df2LCya1XYx1zeKHD6AV1RaL6rdfcS22mCeZoGMCzAbwN5GKyrt5",
  "key42": "3AX3R98MRrMpeEvYDbKTSQjsXjcK5k7xynxBicA9S6ppbMxYuYLEr6VqxMk28bctguw8EZKwGGYmRd9PAro8uGSE",
  "key43": "4wpsweLAwa6GdHzX5d9pZUFPZdiyjx6oZw3sZm1Gpe2vqvePUbnHtLb35sR73jBZdpdvuU6te18AU6pPKfeFbf9P",
  "key44": "4bSsLGbJkhNweEFAWafyZAKYfw77MpVumv2zCGKetu1dtsTJaZMcy8B6fXsjA8NDKsHCpPRQf4MgWG516K7iAEsb"
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
