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
    "hsqxgViTUzSYAAFz7NynNkJKdeC2o9SS6CkQfk4PiV2Z8DQ87hXGpAFSZDjHMg5BFiGx47WD47pXvUjvthtp6QU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6cnEVZD2W7oapzNJMRfBG7h1WdcnXs64H4WjDEUytCYgSPwxuNKS3yfQ9LeuoBRtmnzsJGH6BfxRVMgWuFxCNzj",
  "key1": "5TErJQKLc6zde7oXpBdE5qxbq6cKmwBhUjs6kYuzE5uRyZYFaqhAqQVzSHrgc72PAUtm2mzMzMum6wvhr8g6JTuD",
  "key2": "3zuHJTJcMVSkngcW4nnAmavz3T7NJL5bVkQZwmb995Tr891kFNjvnHxxqDxNRAMS4ek2hcLhNh2mxpVvb6vZNSjs",
  "key3": "2UDz9kxRXwDxniBefJXfT5AHwNf8xbEGEP5ugVrQFfkhBKze8C6ymDgKerfSKHo5gW17MNujURXhRv428bBSMJe1",
  "key4": "5fp6vmyqB7t1Dtba7d16xu2KipLdd9Eo83G2e3PdV4kbS9mqFBEyvGKCe1nx8Ab8ekKxRmdgJGfYd5UN7Wna56Cz",
  "key5": "5e37R8YKZxZRZEWMApnGyqgqMhRwmeQJz69bXAd9Ln3EBWCSxWxUjJUWjG1bamSNHbGxL7p4RE1MeGT6pV2T7skg",
  "key6": "W4JhZHKMn4VQFTbqvxZFQd3TAj3R2hv5KBNyWmkkUiMoohggoiPi2ArysidSdLfgZyEos2sboJ1R9q3Uvu4wYyf",
  "key7": "38CZapb455PAHKfPyAT31c3Aa3h86CXs7cstzvjC8x8BTRk81Gncz5kCSd9rfNMsmFuoF9PUTmJ1Cov2WhApcf33",
  "key8": "4gihJQFYafbHSPR8o3LUxzayZo8SB6AoA2WtMi3Ni6ax8snM8cDSwnUEqBYBZUGWnVPzRWnFs8iUYaz7KXLbb5Ym",
  "key9": "KhfcKBdYupnvSZR2Vdv5Nrp947eQAyqqK8zw3FZCK7G4xtVMUKtnMxKnmQSa5avL4jqwio19eMDu9B533rfAXJi",
  "key10": "oXFpAZr18BfQ9pQ6VnCT2zReFs3Cpocry7id2vrkh1hZJJUgJg3J51TKsU55c6ZmGf3X84oWXscwBwhdbhdgPLN",
  "key11": "2m56YPWdPSzwtyKAdeYkc6EMmtoMEjri4i1W6gXmTeizAgNfKWivo9ySczKruzdTMCbx2rtQZaoMWzRn6sE8BGG8",
  "key12": "4LMdJ6hmx2otPMsqoDEpbVw8Mk4TvzrLT3v6TBnPj4ESvKJdHKJqqBUjxtSSsHDt5HxLQ9jyyM1QjLa3Joj9eEC4",
  "key13": "2z2bk1egRuXijbaNSnj9Ajz7tdHBFySkcgjXvrx4BVediMQr1dPKhBnVGTQZtgaRNgNhWfwU2sddG9TeB6ESpHnX",
  "key14": "3iiys7eeqTHDu9SX8C1mnTEj1XL8XmJyvbwbdsaYLKUTtR2bjLav5LbhEsNRarSq6YQ4MXRRJcAHQH9NXjJc29gF",
  "key15": "4XzRzvPF3Jx7rdJkypHwifbJVeJ5W2NVVgv98xDpGp6g9SxYHsvQpgnsp8nDdwfhf7Sjcbe7xucJwjwPALnmXsnj",
  "key16": "KdgdZWGFk9brvbc7ksFhsAtfsHaCDk6oCjyrK12wY7TCqe3mz9Kd8u9cGszMzCTgLZ9QT7G4aKneQbdREkRSqSy",
  "key17": "4CijDba9Ek2hGAa8BkaWuNGnYTZPcKidzcQKCXReUvdgdekcMY1gY2x5w1iWWxyYAp4xditZy84hHR6NxdeJFrFs",
  "key18": "422DCX8WWfNmieNj1YP9QbtqMUxXrYNGtiKZ5Ae32tm3jEgdtXU7Gf7WDMS1xE2iX666dBBkZ8cRtgMw9QJ9DjrS",
  "key19": "7pCKnZeEXUA6sxBuvyqXkXK9A83yDGFCe3iMK9D3EE2eyB2wVcR1PE3siW85g5tVoDLeL97BiaGC6hfCMvq11Y9",
  "key20": "5E5FvfXszDNgScvZTYacp7UydJbKR2u98pCwyeirQJSEoosfAV6GarrHYYkLWumfGWHzGoCv1kwuyTZHpm6uZFnq",
  "key21": "2mU4DvNYsmGmjgEWDGF99f33wmPQJuF7jvwUvQy8Cbfkei42jkVsZUjuAfYJNss2UqRkdbtZkyrdJNgD5VoRdtdw",
  "key22": "R7jf6UYXa4ztrZdLcbnwCGD4pFQUJY7ZM2vvqEXjzHoKSgNc1dBUp5CpaaJ9JGDtbqBdy428yHhE3zhyLeokZ4j",
  "key23": "4mUogJKtv29Q4N4ioBxvGCZCmxRQ5QQsyskYQU7uyzQT1NhE93FwTTKjqZCwHGt5LZFviRcwH8afVfmXsTWTwPnR",
  "key24": "5SDYXK6tENAPrXVbjsqDwdGdZiFambQLjdKs7wD7e7dEcTckper3dB9BG3XowvX2J8V8yN2ePhgVaugmytXaXUzc",
  "key25": "9USpE9zShnhBjfrDdptUnev8r8ZG7TLZQXELFta2xAdNmoFG7DZQq5tS293Q9XEizG5ZTzXyNdRgaHCK6rjdJL1",
  "key26": "4k3q47a1756EyXXwXbcCBV7LRNGaWxWBxgGgxEC63ZmzyQ7taxkszwzBn2SJJB6z96J8Ey2wUHXaS6FFNah4cygs",
  "key27": "3beHpBvSkcaCGnjxqcoRf5A6HF98dXT81T5AjxSeGqUva9osxhaiPBNAkDMmVrvMVpAqZnW1bLsTQnndTDGfxQjz",
  "key28": "4gvz7ifMhfWLvEz3gNmSgX5r4ozCYPQidRXnmcXhernQ6LXLfejUKYvS2MeA4BdApjFM19TEA9qziRDXtPgYqwQ",
  "key29": "5zDn9sCi7Qn554Qj3vEMkcB2ACMQHutauw4oWocg5gQHgfkruAxS6jWMeA85UoH6vg1ztEQzNC1aRB9irN1c1Jog",
  "key30": "2jwtUrbmuCeJkxjyWf87L1dWo3RftgcXctE6jTdduM4NT6vZbBPze6KATaLEVKYwph11XHFADndrGbHcFVCEzN21",
  "key31": "2FMff3ocoymrGUHZysZwqSMZB5UWZLb3GoXEHebi2c5Cixc18wQZASVtrqRCTPqkmJcT3yA2mhVa3A2dCLgELmK4",
  "key32": "3fF3B7uoE54CW16hbUTz3gfGtVLziHuCiubkndq36rvdNJZcSUyuQumZRnx6Y8G5rCVmpF9jQdwgjwDia4WKWxFe",
  "key33": "2GYHs1kfmpT7qUA2pwLxFU48mWeCaDac2AoEa3TQ9ypWBow4ZTKjAK3GxAYnRmrY8QiLkJhFSiKwgMP7XykmcNKQ",
  "key34": "26HL3ZxhCh7roUgLGXepjHs89uUhA9PoPQeW74B9WftVKPRyc6H3soNy2gpwoq4sp2LuEhVZTGPZMzSY2BpDfysV",
  "key35": "9XfVFVZGurse9TqC9sXAP9sKMj6FY69PqKQrSjRxLNH2AYh4yEYm9MJY5DdNe9j8taCp6nFQHXzkoa8GRdw1LZC",
  "key36": "ofoWN8m8SAsSENXYnu6gXKyg1vzV7Szd9HDtoeRR5K46NGKGMp91v7JqF4kCkk5hq42GGRtMDQyCAvqGZ8gdHSk",
  "key37": "2WNrcLJAzjQG1AwtmSkx22p66DF1dLxe4fQP8awi4wsrnTwXVt7moc4wjC1PWwtiz6ijbKA8AEucfW6tngfV8uLL",
  "key38": "3qok2yBmM6yuPgea9entjC2RGWAXGGTwh3jB9ZsyUphrn7cwu8BxL92ZMAtMgNrGKf6Buhztrx1Qprz96AAjRN5W",
  "key39": "3vJbhGoaaCV1xCbsS1H2LWLC2g2nYNr77gSrPoYncRhCakvXWKBBnkMuxvf2dixf1GrTCS7juJqofE9nVaCWaLNb",
  "key40": "5K2rZXySAGXJ16xX1gydTvwykqNJu7f6SK9MkSkp1VhpGcqoiRugHfWi9p9BYMWTxCm5pgng7yEcVt4ypauNabJ2",
  "key41": "2jZnx6amR5utP7bnUqH2uVfMpVVHYH5SisCz4dcrBWy8nireedr9WY7ALivQWC5usWE1JLexp6HYhWKN5Eis3Qk1",
  "key42": "YvLiku1nt93L9m3UHcPWAwoq9WZ2rnohBjQsXVJch35VfhbXyuLSps3khyMJ7ag7ihbPPeJ3Un6udb4MzJdXH7Q",
  "key43": "3sBtEzA41HmP5qozKo2hoeghJNDjWisCtN3nnWkLvyf9R8MHAnKQMhFuKgvvt8BAERhfgrcXsV2HPWn737ucZUnj",
  "key44": "juAecDUxUFdn9zL2fNA7iFUYZhiTJ7KCYWvMt3zbndQNv69dY5riJNJGMDWRhKWxBMMHR4x1Ysr7TPNRnnM3R1T",
  "key45": "4J6jyaSYf4ZfBwRHSK5jF7utLJuwcSiNKqRomCMCXRxdH8vVtXgX62i7QMj1EUD62D9D7iKcUuVrtWknVtmHewG3",
  "key46": "2Vkod9xLAcgCgVhXL3UBDG3VGm4ZsiRV6bPuuxj5QvFw3MuFfr9iW8XjDTAk9TLhoYY9U97pooLYoDhmmBcfxWZZ",
  "key47": "4YmWf7qn97RC5yZPc2iynmqBEDL4CJk7YevgQrbYvwhMzhqgUfHQAd38B5WnhEPWgwQVi117NojM5B2GCZYEC4pR",
  "key48": "4niVjK6xSFoJ2RmhaXSZ2bF61BJPkvDAU5X5hW8pGw84dWSi7GGafdbnUqmMPydULnokWG38PcvVkVE4vRNCzYa8"
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
