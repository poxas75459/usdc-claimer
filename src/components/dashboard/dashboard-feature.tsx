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
    "sitLesjxg519wMKBudsVQRaL6xgbSc9vic2dca6W6yw1yajGgoVX1sGKpvDPmHyHAJTFJnPwVDQsvetM8ytmAMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PFzdkmrWVmsXtHK4nGUzoDKaYAuzhSvAw2qoQXGmecpFp8PmCg4J9G9rPwDnpCpBuuLHWDoksfzLgvTZUSHGHw4",
  "key1": "4gbJSZqJoJ7YaTofUPKEnJJwZN1CrKnfGLv7frbY48CwchZg6412f3rsevFVR8ZSFyhKe4t1JQJ1TfQAw5s7ojRw",
  "key2": "aGFae8F9ZVgyfqostfcTRKzehowjfFL7w4eMb1XHWptQKtasYE59SoJAXC4yQLbuMREcjJ8wufm5Uxh73Vnsd9C",
  "key3": "4VKDPsEchBwJJVJD871tzTLJ4YFRob8wzuMFwrvufrVUEbs49GET3yLStoJgnAF3Es8fAEEhG6VNNqyqMVTtGuUp",
  "key4": "4ytak8amMSXnaCyKanBvNAycoDXxLh1NchfSGVK2amSwGJiUiVgxSgVFWrAfsXoKALAzXZkJ9hQBEgYujNnafGjU",
  "key5": "2MLzJ3fGdaNcLt7BUqZkoWC7JR4GnfEFhBve28EmNeiShiMMspqczAUoCyZ1tKeZ9wkbUJfdYLtWpjc8rb6R8GwJ",
  "key6": "4NzLXFHog8yMpvPLqFg3YwckJSpCTeKNA6maED31vhJ4oRa86RknEfBRUvkj8XbdhHCCGPYFZwZDNe2ho1xhvC2r",
  "key7": "57tBqQoQDgx6EWqeoMPJRkvuvB1gxUDHNKWBdWUjmA2DzwRaSWLt7ZrtTSzgn4zeiwCcfQqq4NNkeDMaHoGCnKAB",
  "key8": "5ENvpQoFq2YjCRaKFFAHmNGe4Ze6S6jJBAGMyYU2x9fEBfhXuvHhmDNLYiLDWeaFe4ViXu7DqrA85Ur9gmnRzmoQ",
  "key9": "2nCNDaPRaytJJQ2uSY1ZsAiD4UytCEimRTnCwiVmEb2huhswK2tAxaP992N3iB1D16o8dQNrAEiiwCfZCWSsvdTw",
  "key10": "5QtvdyhxDJLJKswo9iPqcgSdS7yTkj3zcmwxs8gp8iD8sBViz9a3tH1khw9zi8WwJNkzJSPLHwXCqACas5Jh4fvx",
  "key11": "3R5dszyDBCs8nQNZFZeceZs3BpTPvEEQrHUABpevAsHWhxEDMvY2wrr8hbXj8nx1svLs9pKaSRQPFHQBAmBawbtd",
  "key12": "2YYhr7BgkkrBTm7BPL6Fq7F9tVQ8en9KJRC2bsCAsNGKim3nRgw3wsue3WLitnAkyhWp4XyC2BhVcVpPrT4urytC",
  "key13": "Rt1Ep9QePZzux9NyH7Wou4ZkEa6FcUbo9J2YTDfWDpLa2JndtLkugxmuafRiG9ttYmWMHJ9e4feJJ36ec2fc5AZ",
  "key14": "4AGSopa35C6Pq42gpu2DJWiY5oQfrtNpQXSPSTEpkFhGcaBgYDsMknGXCaBqbv7dY1jz75VidSTAdVi916Bsr1vo",
  "key15": "65CSKcFezgLDt5kkMQPzQ5VQs8J5GVBdLWDVJpij82hcUjRSgWBsgj1p65SR6jHTrjPHen38HGt6JdD7KqaY3xtJ",
  "key16": "5MwT3E663VBVw9mGdvAfzZPG5KsDy6YdkDPSCNZAnjG9a3z88WY2cfWNZuhfqMBZUEXATJJMkdPUwy9tQ8GAMsT8",
  "key17": "4QfF5zUTc5RU8Ldfjrt65PdoNu8psXYRQYsXPWnw9MoEUwXWjGoznvgJJ9DikwTppBiuGFBAxA4YLqf8Dfh3sQpQ",
  "key18": "GvvdU8b3zvg7rEz6KMhVRmw8f3Gf7Q5uv2uv3frbzhuXhVM3xYVDJSbXw9oY88aUG7ytoetXtLZ7UR2Z4A2hPiq",
  "key19": "65vVUGrTaFi9UboSvEjJVTb8igJHueGuisywDJTRejfqYCzTDiN7A839eyGmBJZXe1jDWd2ywGzWoZ5gAdb9eaYS",
  "key20": "hE64BnCdNMhKuQmqYjUyiW3B1kQpo59cKLfikm5fPsvyjbBXoK6cSKeMBjBj9XuGqDMEeGCC5jg1su4F7BmrD2H",
  "key21": "56YXDb8jaxQjou5dgF1B6uSUDf9FQVPds3eSjKmYg58KoStezxvU7G57mA5PVZNFZkD3RVK4ughVeVNkGn7F4nry",
  "key22": "4MnjkraMCzw4HFn77UxPzGR23Dwqyepr8o7QW4dx6J37v5oGvUP76B1iAkaPjhdx1wgSu7DHWUm9kbvuicPYkgom",
  "key23": "3g26iSpEqVuNLUxNiLUJiBTQSn3P7n8bR1j1XEp2sNdboMUPBbd68hyMibBuWL5Z7kK9NjxBAsV4vRpBsjfyGSbA",
  "key24": "4YE8KjFAyFbtwTTzoibhd6Fb6ja2rLjT5bBXe8PeSrsA7ADEfViqNxz4VZzFSY1h44ftwYuMposfA454VyTnXzT1",
  "key25": "5wUmjdGHV3z4VgX61BLpCwe63EASoaa5mm7uQ2ADW43pL1STFjf7FtyF5cYP4YA3iEwbB23nPJF8QbpHjdSa559r",
  "key26": "5siSV8HCrwNrFyWCRgcYKYL1K77WxQmf4V5knU9m3sQ1fZibgPJjJGZynKkndek9qmY9r6f9YmNfC3r3ELFym4NW",
  "key27": "8UioSQotaDE7EMZBVEaaPqP8Jt2QFt7ZQDsENELV8wmopPNszXjoPHWXijsUesAQNUT88cw1wVsU4MKiCFdWr1b",
  "key28": "Vf3v8xxnqZQeFewbZcJABFF3xdAtw1Bt56PBpYzprYXMXRqkAXsYYFYnh39diCUsUgTqir1uRNZye3cNkBdVD3e",
  "key29": "2dacKddKwm5bFwyWf3kngJLrPoDDSWpD2ajsdCrxHpWHPEdyRCYFcNsVRC44tVMMs2sc6fmvAsJH6Y3vKofSLn3y",
  "key30": "5W7Q4YppUra4w2Xni6qM6B41SyCW827V1CUsdZh7jg4HqNcyoygfZMMSnNJToeew178Mizxa8VcqHdTrLCCHah3R",
  "key31": "38KJ1eLbdzmKzvcY6gmeEPN3y26Drm9cB8E4z6J66rG27dgLE8PmNzrVtBirTtBY9FWMC8WgJ6i3ds76njB9sWKn",
  "key32": "4FGQ8aPAuSiLrtFccUDBqfLepBojtDgRksQXDDw9FyBJBLsarq9EmmYLcbsqovJQ4tVSkjrk6w3z3CHUMY6xZETu",
  "key33": "APCXfUegqdGqqsBzXbThZFA7FyXVSnCgH3XgHcqEtgKAb5p88q7L4AZKpoerP7gD3Pr9ZQRwuZAZyYry8snZAPG",
  "key34": "4siKqsdZPczTvZzMRSjatgCc2VKDSHxKdA1ky9qZY1AviLrfJD2ePWCoeeJLnNEpVYMZ7ruUP67YRx2fmTQQ5epk",
  "key35": "4S6v3fovdhcTdsuuzGsi8v4bqq686uaaqZxry8LgHtCjBk3ghLSFXQchKoJbsxdfZXHEZF85nycbzTD5EmjTeP5C",
  "key36": "2wZSt3VCzFVWy7hXhGEaooLuNnpgxGUmUurHfuV8ZAfpgzRKrmaTFznyFcEx8X2a4npbgF3mdPsncHQGJuqGsUY5",
  "key37": "adxfvkdfqqJxqpbkwSVeWYXUXDnU5CgKSLLGTeJhRgdf3mhJk8VJkw2CcAhuyYRXbtpBeohDEM2BXkdZxS2bh4o",
  "key38": "3hqnhtRQCRKwLnWM5VHM8XX6Ro4HvBANgMGMtzJ2ohpVqRo2YuZUEpyEtEkCFp8xTmPF43uDRbHT18wAdRSZxxyH",
  "key39": "zmASS7ZsNA9iRkGAi8rXPPkckBdKTaW9x8sJW1iXqc2PdnBviaWgFSWPgmRkbzuWfYCiEGSkoVZVTjroH8ymcQU",
  "key40": "5uSRub8Zw6WstMfo1EaxvCYgBLaQNddgRUutGf3QpEmCpfKQD7TiGgTJMeqUyoRk4ynxnQBR9o1YX3iJe5rYb1Gp"
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
