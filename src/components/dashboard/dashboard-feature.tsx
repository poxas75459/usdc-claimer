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
    "4suT7hJSj5McTdQerENec8Hp1rVv4p7KdG3GiC7T2oFKN8i7uC6MERQiU4vcdSb8uRCjJx36uowUjnegsygWSx4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bgdsPaHqYyEVZU51jF1uWNPkQfJ5HNyzgYM5mPydAhGQy9TTM5kvP87FsNfiJWMqSjeL3yxbWEszkGh6F9hs6Gk",
  "key1": "2Uj3nyFGWyccLxUBbifjuVE5F8EPCu3MzZe84AFGWu6CcGYaVweVSanVWCL2rdaHXeMtVnvoaK6T3a2b3U6hnytm",
  "key2": "3uN7myCjJDezNfT3LAvV68fNAWM3kjuqLLtYYjzeFqK7Fn1nUYvMZFKw4Yae8fcJfN7pvzMvRsF8C66bBAGCtRZK",
  "key3": "5GXAD1GV7Pm3UPoqNYffUEjDYGHBfMhjuKpDGebisFzRg48r1kzfAZwNMp6FtW7njRPMWcY3kF3Ss11vyENg4pAa",
  "key4": "5DReXi6SGpKUhSKdcJDRVMzcHkKXvPajTw2jASSWE2eNFvMLZnsP3DNqsvTdP9MCjbRnUGVk58qfZ3TRA284YXUW",
  "key5": "2qeJ4cAExXH6TDeeL1JyMGHJqQTQMSzsun3KTHtWUuWMXvi6uBAH3b1xrzn4vdkWuYnMuox42jx8YHGNHYrRB9p9",
  "key6": "5n7wEeFQufaPHucEg7UigEzmzae7BTGWBfFQVbGSAvqWN7sDJCgMg5489Yp3G1KriHtpekFWQ7wy96e4KV9bmet5",
  "key7": "3deYKJpuCGDznR4GZDZ9yAMZtiEF9q5fybiyM815mcvGwQSLZ3RZJgWHbv57mHV9tcfwsh8pdnQ7GnggZM5bt5ir",
  "key8": "7P9un16ozQ3VVQeWQvDtKydq3iideTJWhbMqJkqun2qEbS4FhzMEoWaHUqKLdab7HgSAyCVm2p5yvNaR8KJUzgj",
  "key9": "4JBRpacQy927fm5nhLNHmrT4UuGY3FE4J2KRafz6iBfqSTSh4gg3xjsBP6p3MfM7cVtPNuoqBcgAoskn639xtuRb",
  "key10": "2i9qj4RP1f1Z4qo8ruzyWnu8tD2P7FxA7Gfa7N4x1nvhjb4wgXky6fs7DkGPCkaPZJXv9XdYXhqtuX7mHzHfunTH",
  "key11": "2u6b7KYr3zh3negX29yoH2bG9P7Px6ZaWqFQLnGUATmRUFRJwGFGLvWqeHBiyaakswGN3QVvv1y2Ci7EoPf3xwsX",
  "key12": "2ktqwNPKqEiuQgV7PPwoGpNpoptz34eUZx1bAjzFLf3TAPKaCtzjHMFoP1WFapFNVUjxREUXJvpyff1bqEQBw5Es",
  "key13": "2YbXVL8KC2LgTUWYNAqwRQPoTrP3KG2xMki8oEzVZBXYSgNPBjJ9s27siAvpg9iSKgtYVVUvCMLxzoLPKbcWaNip",
  "key14": "F41QwqZuWCBtszcnbuALHp8JUZRpk871RyC8XK1SuKqdHnvKm4mbUFz2ggP9BzhjF7tYpBEYfEviJGPFJnikuRG",
  "key15": "3uVTHuD7ru5VbuJmeRmW9jNoan43sA54DRReLxZfb12g9KTZtRYWydsonJ6rKyJRDeBSxC7M2tfxEMNThmiSkRiw",
  "key16": "2T1E73mtQEvmfN2pofpeE83XWmWqV4fNJJMecaAFTWiQro2vss4BwXcdWJez22qZQJVDcWtkLrBfR6EyhUiHNrm9",
  "key17": "5DZAf36NRas1F1zPPtqRZndRSQD2wo5ETUJMyWnbMfrLggnDfuSc479PrLUHCEj93AwvoM7mAx4a6TtcQ3HNCQsk",
  "key18": "3p8HdKnMoegqnXdfsbqvvBsbuXS6cGugnZ5qqqvQxrBd1tpMdkcW2Te7SbPBDiA7QEQFUJrygtFPg3khtKUZ8RiU",
  "key19": "4vzkLbvYAzb4Qfr1ZEaxDFsuw7Hzyk5FkWKtrA2svqNuNQ75dHGpUQ4fYLmeuxkpqCo7SD15qGBgcEb11XbpZQzj",
  "key20": "588fDKYbY1a5oBATw2xbWTvVLkveVqoUt5fEzinJmHHqpvA5RJJVDUDGePNstoT8eDrRTpmHBwU79bjDMMn18QFD",
  "key21": "4En1ZFfwckpATsAMehzyz19ZD4GH6pV9EsX6paMtfhbLaDhSqDEDZnfGbt58f913ngfJ5i3n5HKi91amPz8xfdMZ",
  "key22": "3Fj9ZB6Yrjd8vamDyMQAbqMujguS7jWJq3zANkujY8Gj3aGq8B5wxfr67bGfBoEpZB2sK7APeu6YHVZupNurqmkr",
  "key23": "5iGwz62Vy8GBZTd6rc6kE7mdcygiCrsUEZ2wL9YD2fJvw6eLTvTLepfZEEGMXsiajEi6vH8Agaf9YQPhCNvgZ4eB",
  "key24": "3vKaQHw4XhyojQNTiZUBfrwD6cPVbzpYfcd9F46nQwSNBAzUuJdV6JZDvZwod8TrS1bwmzzutjkdCE49Ape89yWT",
  "key25": "3kPZVsQdoQ6bBNfGRJNBy8aG1ujEV3kDimDtdeWMtRmK7kcwZ5edBdnFsMMUpvtFVAQzWcfAkppy9TAtALdYLXXg",
  "key26": "2uxenqtsFcELAj2mZMx9JKDpXP7Rk4SFkFzdRgfwvrF9TKjGkVKCsdkhb8c5Bh8ie5v6A7D9k1C16xGEt84CKth2",
  "key27": "5n9GaTAQGnPEhmqSiXpVnk2GiNQsbQmwWCjns2RxDem2T95DoQK4WpoVDTCcoJUcXRobpKvNMNLN4zd9vRQLz4dD",
  "key28": "5FkKmQaCvTGRf1wkqQ12wvktGCmmse2Nt4GK9zDuwGpwiF7hcPzW2GvbTzcNEN21Sa8tRvoZMwZ86Lu6JU3v9amk"
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
