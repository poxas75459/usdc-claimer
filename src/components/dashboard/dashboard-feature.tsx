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
    "z8cteFX8MQgQ1jbBgRGvdGkTLzFMr1VwJkHwKqf8ktDRaGRxk1VU7NYTrtNbzLcif34vAwJVxwF4CFHV3xXXJ8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41CpY5ZSKo334PtaZGBa9kCqcVq9HfkBHiDt8tRQjFaWd4XXFvBW6wQsEYJ8M5eaNdwEtkKn3hW7P66BHEc3AsFY",
  "key1": "NvrX3KMx5m7td2cPm2bHBGAG9tmyrhLSeCEeRLov1QDMmkmxmQMwnMEaP12z1VXk3vQbjEWqYy3ayPdT7NBwBPj",
  "key2": "5zwshxBqm7JfmVKq55QGWsyapfjoQ6NkKHJmNT1TobYyGn7L6doEPorATUuGM3yzVsQGYFGTKndLtN6xARbhVqUg",
  "key3": "5Mf6gkRYWAabMvFmkD6qcVgeaFFySiodZ1VogQTJsfrDuSQguy8dURu1ygziH1EUEVSczaamXv7um2gJjgp3PC9q",
  "key4": "eb2EvedKGZgHjPX78MRAGqDrnjBRJCR8w1mcgmmYeWUH9jDBBBp1SEZJsGxQbyMXzWdXbCaLxfqpiT17ikCJ92j",
  "key5": "4tDzEJ5LeRRioCGQ3HnZndpmMQitpXKmzwMnEJGv1ospauD3Za6LmMDH5gXMUj62QXHuTHhBhv5pwsscUZviwWcB",
  "key6": "61hKsDMhrtX5hq93VEpcanvS8ijVGWDbE7tBKckqZWm4MASSD7qXvTUy4M3FGRALV3XpmTaFJE6bvBv1ZYMLMSbV",
  "key7": "2Uh5sCRV2Fvtq8SxNod4eEc5teN5RzMb2p6AZLqx9bPJQyBvCfH1WRJJx1HbhdwcTshMs5eQSeEaeJ2Xu3wfzdcu",
  "key8": "4v6JQrdLuo27ptvbL29YdzSqFknbj8S2LUB41CY7Ny19fmYtzgVqy3aUgzz7BybcowNsqBir8hx9XCp9gcKUDAsU",
  "key9": "2CunAmripq2SeskoDhNxwzZAPsWENWe91BiLbKhSQozhVr3AWovCwoFoifM5cQVjDcYTPFvVe9nKYqYj49JjL5dE",
  "key10": "2FQWPTELrJXyHsDZGKBWkwnCtVgkmw6oSoWi7Ui4UJNbnD4cwNvVJDnTXhq84AyPNcJZBYXRTtpcW3f5AAnfEy6x",
  "key11": "25G4eyNQnbAHL5U5tXgurHLUtYzZmCrXcaJ5xsjdULNZEgEnXAvDsGEx3MLQB3y4aWsUUw2WWo6g9WmVRa1rLfyP",
  "key12": "4yxQaNNjB1Qjfn9gmJux8mft6f43xYzt5vgNkfr8kvCA9Vyukupdkj1X8rYEjVkL8rhiNJ5c6QpErXVKmi2sHm6Z",
  "key13": "2ShBoJQpAq3qSTBLyvdjYcsyNt2S4DXUPcrmubeB8zr1ZY3VC7wtsdkRzrEAUqzZ7RxL1o7va1gPNDCjFsTx51Yj",
  "key14": "3pkmnosGfdp2BN7pc7Hkni6HqxWqWrVPk1qgTJw3BGktWVxZXTfiwktzt6H9ryUbb6DjZW3r6jQBaz7uUPfPA8vG",
  "key15": "5vZqDzqj51MA8acJK9V1kiox2kiwgJ28Et9YyZaVQyM8LSm41uDFzm5TxYgfxRrmQma8MDzi6CutogQoB397f6ek",
  "key16": "5pBmvvA4QXSZnMwK5ydFBvVkzeMhr16HZ9Qr5cK2H5rF2HawnQPompo7p5fh4ZDGfgdmoRPQUj2U7HFWch2oJdNE",
  "key17": "4fjkft4xPPkK3JdwjqmdWv3vBCFmSjngeFzh73JuGity9iAbXhtVdDVtuYQWqj68hCBbEE3STTwybAZfKDKASJXA",
  "key18": "55jr7Qhi6RhXT4AoeFhnBLCmbWt3Bh3d2ac2Rhq4Nnk6Dt1qfFQ2L8aF1mrZUvdHmn7zZGKzEwwHnZscNJLLVViY",
  "key19": "4xpRnDTaJ1u4AV1cWvU2SjWhwd5trYoP2ZX1XfaA4R19YcTCaAm4PpWWbLihueaii8v6jmecQg9z4yAtu6dh2Xuv",
  "key20": "35wqp2Uhfdyw63539KqSDbj9QoiP8DWsQWjY4DrpHDYBiH5gsBg9ok67px8WUsJP6b3qQQxacnxaG1ZszkXGFXPx",
  "key21": "2pfxsE3inFFovEaQtLunouszJ3vZhuuJQTdysMbE2ojKx315XxfWL7VXGR1WphpYA3tWXbJkbXQYyzcnSoENj4Qf",
  "key22": "2fmDVnjJgFHxWfkvCpNcN9DSmy4RESjeUjWDXYDwgW1fLUX2QiH53Qd1eUyxDocLELttDPxy7XEYPddrViE6U5H6",
  "key23": "2Qj2GdZki7tTfhWifRu7f72weN2oL6qg2VuXJ8KSmR4WZuMUbEcHoSfzsbQHvbR7ZqfVhTYP6oC6UP4KNVpvuJyg",
  "key24": "3xcHyAMm7z4e1R8GPpKc29N3J9XUt1sFHmzoM6zaFQUVVT3WMZ3Jtp9h2nSBT398Eub1srqFBBM28zXzWcB14tNA",
  "key25": "5XNCtiHUQuPgDQArpg3grzf5qqsZdYkSZDxHnzGga4DXQCkKtN7jwXU3TDWHGNwE9voJKMXi6orTt49Dx4fPrn6X",
  "key26": "2sXb6FY18dXtGLJ8VgccN5PAicFvDykWTUqfoK3BmwCTdU73EGAjwAXARo3C49PkweLRPazigTwnLBkVHk9yC9A",
  "key27": "b7WC6gE7EaPv8irsDfJS6Cn1dR7qGMHqnZrqCTprn275Y5tg5CPDH46gSXmhkAqtLjRr3wwti5yMzqN5i6j97G4",
  "key28": "bgRmsqYYfmnc6fHknT6vhXm5gS2RDLYjPQHxorsenVoSBqPFxGvVGUb9d79yW3W3ts5yCkGhGeXxsJ1GXQQDdvz",
  "key29": "36VCwWjpwobWX4rD9mxosUQsPfd5Um1QVw3UwAbU4z1bKoiZe3UyrT6zrREHiybPKcYLQfExTe9YzqYKYgkzTAcE",
  "key30": "2pE3VP64tsJzRyj1RGqJdi6NU16Bsxxsyf8RMdJho7k7M7pNgqtTBomG9rKDWRJEg9J9EvmrvVLUBPpnc9J77NcB",
  "key31": "33pRU2M84ThyMWi687Na6wUqkin4DRSKMMbaQrYEax4XfNo9oRfi1jnQTsGC5yBzp5DH8n6NuoF9EJ84mwTa5WkW",
  "key32": "2Swv6PYYuctp3cP53sqPHHd84NNdpPYkDy1cSyafuH9xQz9xSkrXULYaLh7iPHvhbtZejLjfgoWoGsWtr4z6sh2E",
  "key33": "2y7uhqiAwQoxkV2CqY6jcNvykVLW8JpFpBKJyyvnBDutBhZZGk8vieuG6tV4a5TaV3ipcYXEfGLfntfEQBZcCRQc",
  "key34": "2wLC8VwPCntNRF1i9qjPC48BwjvxZ3tKCTxoz161BuQvSzTwTu86EKHQLu4mcZV6XUPhfFMkg2ztEWYHaVjU8VLi",
  "key35": "54yqE9P2RYDXYLUD9nJHxrSkfcqJ5zV28qHbCKpBm3ZNMdkX5toP2Kk6UY74JtbfgaFUtYmWSUnjFwXM3HAxsLMY",
  "key36": "GcxjZh6p5hnmNdzM1vxYkb3PgBP5e1xRYnnwbuqhmfzeqyE9pjxAzUiErbLhQ1tByDNqySKxLtKHTpC6mW9NDXd",
  "key37": "z8b2kMrouC2sAwtQDzfTa2cZG7NofZWE4danZVZDhg7ryW2YY6Z79vELCyyDwY1qdDjNzxiHJhwo6zBRqhKb2HA",
  "key38": "3CgYSWs5Z3rDBPB1fuYjqhCz34FJ62YcjYumi8qgZdmS9vK3EwFVns8vxrVCH9GfrdcYMdx5YPVxsDXyGqo6RTgc",
  "key39": "B5sK4HbYA4quBRry1A44bd2zHPGHzY4QY1fyD2zvNQWBaBfucnrSHuFn7c8d96rxLNv5UxVzqNx95a6UGXU6aju",
  "key40": "4Fq1GTLjMgYVJASiUChzAZf6XSY1vyz4ThBUhd9JQGpTWy5bVUWm9bLzUSy9CDrazS3wBvAeKT5Cvrs6n8ZNnj2E",
  "key41": "VGNs8SSQ4w8PKYRVakf6Raw8ZvrqnG1RpKhMMKz6DXr53jemKcXAtyWCX4G23daVabJZRrSueVPrABVbwUY4Kyk",
  "key42": "54oXuMRgfwQKvnmN6Am3wNdrJd24r6Jc2vYsQL1GE7AoET41V61fYix7StdQXUBEdyPHWiTLarVv1nCHvtkEBYFE",
  "key43": "QiEkw3BXboLfSidd3898CuXrupBWnzktNX8ucfozsonPDgwkRrgnMhsQeWtcmB1Wv6K8aNCZnSX1PgBJ7HVpVJu",
  "key44": "3cGXq4R9W5RyRHHSSEr87zHX4vXjpTWpvfDn2JuhdSuadBwHV63yfeDXy1S6guGweihh32qwCYTcAXrbMmknEVFX",
  "key45": "2zE11uKo1qQjQnpVRMdGZUFpjkdL8ektTQ2MKHaMxyZSyJAbLsShbafLwa3Yx3xHPWNmDfxnvcGdHF17Vr7TMmzK",
  "key46": "5PU4YWtzU1ReQRqhrbCvc8FQw6JUnUSeN4L2yzRLME9PZeXf1Rix5HqQd3zoMkX1UonxEAFViNYj1koppBx5uWwa",
  "key47": "4pJxvmegMp4TGG4C3oWcbJHbkWcLmYQkeuME899DBVDoKeyuYjBcyphJC2hevuojjPzzZGvegU3vmKiZE9gDRWbn"
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
