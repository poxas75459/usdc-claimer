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
    "2H42ZUKw6u7fsSTx3Fv7dQnkE92rtVzgi65VoLwm1m8vTUyFnqioQunc3xdG6dki2HcyK71WX3MeGk9fgcRvUQm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z7Wp2HoxMJ4CYwq7PpHXxdLdXK5NxSmREv1aC7tN9u1S7vR3VFNc5YWpE7baJvGpDP9wzaXLXdyxwMdTaE7zdR6",
  "key1": "2UM7bPJ6d4RF75xqY4fhUEdGeapaGaDQqkRGhfF3CtcoH4PLyRhrrEdFkiZQkwaugYDfDtycPtQSwW2ULYtDR9wn",
  "key2": "5Ex5y2S9akgQRppV8ZkDDTQLS7iwAGicGdGbHKiRGZXxw2YiD3FRz2hQM8yr7FbtXodFfVFELSFJp83qz2nM53Ae",
  "key3": "2nQ7H6NYh4NQpQmB5cMwajD4gFnK4Tf1ifabLkJgNUmSwWxqRzxeUkkVAyqXZjtjPjNk8g1BSKVdEq4uS7BJJSnq",
  "key4": "oE9bTwDv5sNLvc9a1Pt33pFk7ABrEwxhG7fjPAGvPsrtaFDzhFMghW8uXmc35QyHLTqLGbu6X1BGPpHszgues6E",
  "key5": "DUsyWHQnvTaHxRZGg2YZVe7z26JwYkr6JyVVRquXvnuvU475y4StGdeV7LgafPKbkp8dFijqkkXD1YJY955MyZF",
  "key6": "5RRoAJSFPoyf4AoekiErNQ9P4LLA2oWvR9dwdH6EMT3AdaUVmhP9eboU25YrgHBqbWji9wZscjAeHmq35ARaPv36",
  "key7": "5xAh3q3sJC3V2TEupSj53dEeFX6jFuYH1tkkkor6Lmy545A58u45vPNPSRa5b5MUeyhAz3xEVJ4NpBMZN7HyUz8",
  "key8": "2pEB2kSLS4p6uaTRW5aZvLUVYRoPjG2Mqe6UyGVVw3B6bH6BRgeFpUFK16PrG512JaU9PnpDZQ9LENhbNDqHxEVg",
  "key9": "48yQPmjtEyAvxQo3DA4ChqD197XzNfjC4SXHSYffUYYYXY2ePKXLdnubTUe9wv2GX55k99fjPzTFmjkUNv9r7vkz",
  "key10": "4W4bLZhX2K2aEQa1emPNhZUPQVzwi75x5CorBe5Fa7SF7b7PKg2QkCnEHKAFDZpga7DwuXQR9hBwRXooQXW4R5Py",
  "key11": "56abmoCjiwWfiVix7tmG7oWnFt3nKMSZvJVA7ehnMo5X1F8yYUq5M8tZLWe6ovoTx6rjfSWjHoNm2QPpmskJt3Ju",
  "key12": "5mXe8EJG4NQAYgBXqpMw3hBp7uf8RqDMXqtCbN9RHrZ6ypGuKfynieJFVxMYZ54W3EB35bvYMfcUrm2AZpa2V2e9",
  "key13": "5q1xgPMKqgS9pKkGpdWjAfWYzb6hXTE94vYiJTyDDCPotK12LfynUZtScubP9TvzQYW5ZLEUziYdzXPpvEURsc8M",
  "key14": "5QUs3WF4mMLvWdEcAUN5HnA5rgeJyWcRwCyxREJcE8YTfQq2jWAiGEt852VMLH1ENGQsHEErxwG6CBZ9VgfibH2m",
  "key15": "2RLCyHk2CQF6SgjKPyjTRH8T3VJ7GuC889Ke48dwWF2Cq46tXZgV6EDbWmxDmdGviLJd2ZVZUvJQwBCyiUbnNmvo",
  "key16": "3dsT5e5C3VuEJ1EvQtc9AeEQ19w134jju4FhoAbGs4jBGvF2u3WhhCYnpBKSA1CdrkcZtBqC9TXSYMj6E44ou7NR",
  "key17": "4rdzoEd7gvpPYLvC3Fz7VGvBiJHDJ7BXa6rUVCkzJMVZasuQVTnLPwtRMSBzfv5PFHDsbojXBdxrUrnJkoXPBBZw",
  "key18": "2dbfoNPLK5DA6pVuCSr9WJBCJNibwZ6vnBQ9yBope3F87ABsMzN93szFQ7TasxfJHyR8spPUpAfv6sqW1f4a3iy3",
  "key19": "27Ky5Pj1rNTmAN4UAhc9d9rhjipzQjmbFtppwtMGpeYABHfX6fhpQJrrYP4FT6JmRni4mVp8BD16kPFeUr69M88W",
  "key20": "2NL4mveqyMZyqr3ywTdGrhcah3L6EJd2rpUNQ3Z2QsHHYXBq9f1oahXTEY9swuk38AEGQcsMWMBmopQG3rBkFJ2A",
  "key21": "3HAkiD1n2Gxp7BuZjMitWxTR2W6reteFQoNhV4g7tU99Qtd2okrBQXfjjDDfHQN2kCJN43XPZtzgTHY6CdufC9Fj",
  "key22": "5kV5GyAyQX6b1b9o426zUHHHWyRFsNm8RuZXPfR95YpPAp6rM8xDSKVF69SUkx2aHLKnQpT4T154cSh5tZZy7Nn7",
  "key23": "3ie4ATRoAtmQnJ11hZUev1nEtfVZfChiuKDmcc34pRzpoLhmXWeZ2ySAyp7JjUKfrzu4ERcn3PUFTiZHWN7A9uTJ",
  "key24": "4NEkHBWyRkAVrWZ6pVmkkBxuDxEiudWuncbpbmM5kriUgwcn1bEFrMBPbvv5mQctP67G7Dd9HULTf3RTcAqB3KRh",
  "key25": "3Bpja25k2faE5MG5kVpt2JUryGGviVzD1KQXXDHQhXZ5d4ZSTdbJ72PBsShETXCQ8ddH7GR7DpM91GSbuqDZ5mhu",
  "key26": "5vuCVaY8KY622MetJQFtYLrw9BuD5DKgxko98iCEvwGqqeBShSRZRS2UETCkDaCJsQbVoxFtRcP7hko5NHoLT53N",
  "key27": "4dWsVyBHQuga9uTjuX6D94uCavkGp8TANJ5D7bxBnyk8nemYyDmzmCLAht64NzQAkhVjAgECGnMhzaixH3wyJKLf",
  "key28": "5kYgpdWNLUiPXEHiMPuJn1ShBu2987H2SEiEjx7v88uwScPySmNSmqJUhw6Hg4GNtNNaR45K4YMiKz2LeYdkvGxA",
  "key29": "25tfT47XMpgbQU67kubpanoiSfPPUYxHhcayRmRbidG9X9QGtoq8MQfLfoCg14nFJNXuHw8UbmjH2Nre7V63rGvR",
  "key30": "4H4rcz1oZM4nxsjZfh2RzivedMRhwxfyAhLmmv8pPBtESVB9zTxnFoDgkBfgJS82n8t87JnzV7SbHhYK1uW7EWu6",
  "key31": "4V7zPELYKnZZ3jbggrEKzTRrpSguuKzkfxAaLWaEfCU51zCje4ebMwCdgvtUBNYkCzpxJq9HSLLGnLdkWT1E9Ws",
  "key32": "5bKY6hRoBKNCj1pxpKzAiLYEkG3sQpNRR1MtAK3NazikniCLTxfZQJHmrJB6j1Jv6Mz8GDxWrBRH9XPpRi8FUnZ7",
  "key33": "3oGXoa8gjBqZWCBzBCCPTff7SH2TvRxPDopYGBFiBBGiZgLB6DB4tXDFMngiaNGPj4XWSBphjkfcPJM4gDbJx3qu",
  "key34": "4nLSUwTas4RoUFemTju9BE6hDV9YpC4GMNL5jzPsco9m8BG2kSbfpcDX9ptVYpLPgDVo9ynrSBCJjW7ZaQwDvYVr",
  "key35": "454MyoYsrJaUXadfLNvK3SYY6Uxa7WNi69BSLMFQoWy7SmZ4yHTpzVFH39tPwuH6LRw1hHfUee5vojymQLPP1pN9",
  "key36": "4eiqo2LcsfKmF2b36vJ9dG4W7W4gbd7HAWeKf6AGgrxVhYkVzivMtVdv26YXnY9LqiMPjWHz9XZq2smBV7b7hiU9",
  "key37": "3XXh7oUUwSNuzYUPBChKmXVgABzjdTyp7nieKYwoMWb6dp7kms3s8fqj7G3GdbRidEPnsrqRirp9sHCupiHbVVEQ",
  "key38": "26E1bQCtG2Tcahb6FJTD3tCGFjsTCGdVawteLUGrJve5eZbC7LnLWNzsieSRCNX6qSecW55GPkJiwso8Gw3mfMHc",
  "key39": "2VaXx9P8qqdPafVAC2t9xLiKpUwKSfujUro9SrRDEB5rPBLF9CQjGqK6VGs4TXNFaWjL5SYfEvB7kX5FK9uQaF3n",
  "key40": "7miQLzAxtzXnvQpSShDYPS214rQcafLttPtvgMtWMhah8h5A3jJ71YSV7FcShba25SAJ2GUGwWnSv5xL1rdhbew",
  "key41": "qY64v6xZdi8qU7hJHEmwVrkncUCmP4zsFoRoas6nPYGP5U1BxuchTy9vW7Bc6XsTGoGeMEjsAKJbgLySgACnPJV",
  "key42": "55QEp6Qeot6wEouwuhH1cHpTUUrLVX2hBRYWfa9cWX37Ye6MX1VFRZdm98tdn9q59RtX7R1y2JhjJQnVf32ZNo9D",
  "key43": "2dSZDEPMCAStgJp5W9jz7XgHCz3PfeT5CtJU9PP72WNkxmmMacS7S3vdqbV9Gic9xr5xvSLouXfP3r6uX9nwhQHh",
  "key44": "2zGjx1a1hNMJZgpP1RNDg4Ky2AK7GZN2yDgaLGhUYju8TmusXMkyuH9Lk3NQJshFWW6d4vRzTtJv6ePGNarzb5LG"
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
