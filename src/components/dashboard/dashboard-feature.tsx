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
    "S6Wd9TDnvGdDL4EpLyi38iUngiFEx8aTaaFi8mAD5Mpg3jNiZnw6feuwSeMTLXqrp7Xnphr6gJqdkjuYCxejdWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iN8dEcCP76EGcP2ZHzFaFGGAJ5xXhuag61954f3z53qB3Qq7a9NgnVzPNMZKsXtQeFCbxG4mdjiu92Wingx7Uga",
  "key1": "x7zqKJRhJWiACrLad1rkC99PEjVi2jxKYy3GbEbEcPcVtvyyy1MgmxuYixh6k9qWD2B2UBaZmpKx3wG4oXa41s1",
  "key2": "tpUwHUTyeRPd7BsFZBuUPpfWiPZvv2MHz7ULweEtzk6vnzDKEAvSXXXVKiuUt86bsjGyXBp2FkKbuBqDCGj6zoJ",
  "key3": "pz2gG1PqzaQ2Hk9R5Bf4PAESfHmr1cPgLHERU2uWWSufULqfoPXSxoLfrzxgSVajjMMu6Ak5cEzRkejddcYTaLE",
  "key4": "2CBPisbfEHRFkR7ijyYcezA72MrPN6CoXfQMVktBNzifYt5MDhhKo4RaDbt1qUc4kY8ayVu7XBnNiqVGUPC86cWR",
  "key5": "dJdWANpiftstgVBap5uQQLeBitvDuPv8NV6UKcZWBfRZ2Pt9Y6QxexRUrAjKmjCufjZcPafYRiU5eJRoHJ5YoCd",
  "key6": "5pyPwBed3HyD2T9FtcdtUfsdBN7qGyX14y2d9Qx4bgJh12viHSUafLZWwWTvaN7mDVzsG7MhmetdwS51JbeFtDnu",
  "key7": "2CEsQ5fhpnRwdtaYrivGBNY5zF5ziEspiJLgHQQJngwW8Skvo5nsGH9f9e51c9uBeGZxrkWTjrDzB7Ar23c1RtwU",
  "key8": "43JC4aUwP3dzBSCnYu8gKMYWFNAQPpc1GufTLj95TRWFymcQjNXrXnZW6ACkHsm77mMm7X9jh8edbh49XBxdXMJm",
  "key9": "3hnE9C1VsXsLrVXSqyoWkZFE5bZekdx4rZofWs8FWoQY3XwxJLgeYitnoDmPjCWqH6kwXsDDS6YrYSH1DqE1r9Ku",
  "key10": "4iugiuyqSEoRTc1oNojAY4RrXpTqbhGDksX9rSd798VooyiiAME3ePA3gUeSr1md5CfHgzhZNTqRzzdXN4hm3oS3",
  "key11": "4z5HbkPc2oxHqMhu34BhtX6GQ6BEjrVgacfPwPJr2bYrAgsD6xvZk5YcEoFTstq8ncan7PxvaYn5yYmoDLm2Uv2f",
  "key12": "3qvDWLpU6wUvkvvBYe4qfqVUfWyuW1UegHhMxijdMHW9p62jz52h7bCpJLiU4BS8sTFnF8FJSGJQFcXRREsLXWxe",
  "key13": "4G7umUsr1DwEtUntVHUrCsdA2GumKVpMUEj6Ewik6PxSDH941wchkGe1c2izYpEHSi93B4eqvYC35u29mUjjRnyD",
  "key14": "MWHyY35FsgjrWZwwspw9vCab4q1GZqodh2r6tK9NM6yCAkFaGh7fLyMij1kXM5w1Xd7aVqW5UpAjMELJe4wLuhW",
  "key15": "624w5nLCsipCYHphuKVTY3tp192JfaGegYELx9nhmqpGn4RdAdLCCiTJzpNXNzXgJPWT4dmuLSEXpj6dpQXAS97T",
  "key16": "4iwyX8X8zoEnNVzwMUNJe3FWc2gjJC92CHjHS7cGVFz6A9MUZyJsfQyfm8Lj9LEqv1y3UVX98E3ABpWgqnoPSDPU",
  "key17": "5ESY9pnFZCYYqHLV8Q8hjNR1f8jztVByJeJ4nt9sKKeMymsvNPTDJZ8BJsJHE2DLd7zugx6cEML8892JGrWkgDFw",
  "key18": "hohAcUkhxAkcbkstuR4jGuQMrorW1TATbtMLjcknTanMu7jLN3XNBjS3aZ9bJzKSBD5MHrCyrVZV4eyRRJ3R3C9",
  "key19": "5o1mndTMw8Ho2KiFCJx9BgN7An5ziLZAE6Tu4jtsBo4pW5RetyoPkhrg83mWhpoaM9NjrwaGSKSYAijSTnt7yQSF",
  "key20": "51w9capWc2UV2P2kTp22RfPicykp3Wv41sAzwoMXofSYtan5QzhUHdgRCQ9BHdxsbuhdabWm8b6R28tfv7Cf4J63",
  "key21": "2yWEPsHCoLs3Sc4sjEaSwyRFtV6A5zuAVGM1HNfGVdD5NiXZVKvBy6zZGPN5wA3CqcfcFuUoeWtJjANa8uzSJRE",
  "key22": "4q7ukA5D2fyiV4XGYoUexkUPyfb7yrkTifXDQ6st7TVpBvEu3BubG4QKf951A6T458trATnwmYFsGJsSSbBByjWG",
  "key23": "NZy3QuFQGqheVfNkcSTT2Swz2fprA48BPXzz6yXaGhvtAfU6Ks1GTpvg6QHvpNNTVcBVs3eCPn4Wv38crEPQkBu",
  "key24": "M9nDMegP2E4KhoBByvjBFKyPinEKWaeH7Y4gDdBsggcs36c9vmvqyFmyxYiDuUDVdHbkcyYzeMjYiEZqXsFYQ6x",
  "key25": "5wq5d6ELiEpymEfpRjoGau5zTHL9DhJKDDezZPj31ivnTQmJYyQWAnY7YdLssmLF1a64JoS2tF12pcmgLhuTynoc",
  "key26": "TyHaCCR5yqAG2WjrFTejDzpSa2Ma35yTxJrfsJg1RKyfVkqgTCkr6NEhEsxUaXQnTFep9SxLGKre31z8HpaXfwK",
  "key27": "5ARqz2wXEWcMfGYBPjSmk3joLZ9EC4UCUJrHHeZvjSfKM6naxdFFnztfXARPsKi4BtkVWfbb5ozKdZJuxthJqxYG",
  "key28": "3jvtcvnWLduAS7DTHbXXjRdiVum4rbLkeT62tTZbzt9aaE8x5W2DZW6iVWNbFNNHN38AjMd4h1mp6muwF6xZa4fj",
  "key29": "3VRgnBDQfeJeWwu5hcVFUEKfrwnDfVM9biGixr3VpWRX2J3VGyfAsG38T5RoqWfiQ31DaQeo3AYwZYHFAq5BJqRd",
  "key30": "BNqJfvEDPuuNwTDeJSg6GS3e7MAX6pSsm782hgj1YEkCY7vhrsbwJyRP5JSrmtAQip974tJSiT2ZNKUwTbQJWXj",
  "key31": "3RmDycYmrTJNNZhuDTU4GbrVXbMs3Le3GbBdfeTzmwfDGccaaa4ioBaMtiiwS13nqEYwQ1UcmhFkdtDFuk6njPDs"
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
