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
    "4Pvqnu4RvNZkty9ofagNvjN1wixq4wcu8pqXAuJsa9HZhM1KUoNtKXDqw4Mm22YdykByu6Bcrs6NwJt2dhDhKCys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z41iLNToAmpaF4mLarR9CoCsdwM2wWZVtYKjcVMub2EJ1JYphy8jEAanZgVk5rHXXEadvqRDjhD2ccV52UR1TzM",
  "key1": "3JPm1kuEuAaMicYCxQ4C2TB2aYtfaVbHrDpbsmdcyjKmnaouPB4jnfvqbBFxTCuNLvg3Wcy5Eo22SSubPru4mM4C",
  "key2": "JvR2owfgPN3eB6AaKnNm5ufsTp5sgopHHimYGQJ6Cg4TjvyQraczv2fLrTzW15pHW94LYqZB8J6h2aoRQwoxJHC",
  "key3": "4xh8SE32mRfZVDANM8V7o34oxR5L5vVj9YTvbEcLGbNeR2GomZLsjkSSGsWLQCHcLm9aKkbTXeW7gUssAyditMFv",
  "key4": "QxsF26zcciEuuArGj65yzQDt8SM5moeRF76h7gvC7YabQDzVpsx9GRkNpPcpfU4wvwodaAL3ViwEiWWuc51NWis",
  "key5": "wpEUKtTpFHF2639vkuDyXoSvG79mhoU1pxNgWCpGZEGFHMioGYnZmQRsLb1S69GwMvmvSjitdd8FvLCiCbtXhZG",
  "key6": "3MieC6somGvAB4bLukVYgkGLjbUH57zXbbqUZ1fg1WAcEBtq8LdLD9ucGB71Wo9zKUyZoitPEhay9Vw5y7Mc5Gfs",
  "key7": "FmAYotg2oxHYR1hmGbSyErcQEyYVAWG6BUkAB4Kny3wb9dY8RzUu7iA92AWKzTwvTEXzCLASdgiAY21rDAo6e5S",
  "key8": "4KU4C33bMNbiNydjBj3ZsvojbBkdB9nDzM1x6Zy79yC1w8fDckbMspSh9UTCq6va5McY9nvDPN6x9Bpy1S2EqX7M",
  "key9": "5KjTYZUk7UtgLpeg1QTo1hYMDT96gKqZG1zCeDQCophDXBHLZZuATeLRZb3WHQMgJj5HcryAq3s1wkzUXgTpGJiK",
  "key10": "od6GxSWufP6AgD5FD5voLD7sBwraqrCz35HHJBc6zJ76KTpsEsUXAzWdjJMY68bsFyALdDUtVZC5krEzAjcmnuj",
  "key11": "583BaYpFB5BZ91i28a1BXhoT4Pet5mP24iwuMK8p8Mqgxpa3dwmvCmXtMgMjjwdnr3MyBPV7AT9tmrNmYAaqgnSZ",
  "key12": "4kxdT3Cd1aVdYBVgMaDrWYbG1eZ7Z7PYmGMhaAS8qCKzfsJ6At9RqYavapPPDuXEXxDYjrirJFtpNL2Mh1casQHP",
  "key13": "2pjE7PiW5Ki4xMpjBdFhbkdSJsP29VmLC2z1geQaqA2j9P1MjD11hLzGkeDZ5BbukpBzxXizKo5ejwYTnF1aQ4XM",
  "key14": "tsfPchBKkqxbnjr1taRuDspZin9YnPfTYLKJj31FDXcVCVKU9MBht6sG6jxaXjHhYSYzpezUHjtBNduGUfTGTiu",
  "key15": "2iyNgPyWGQRBou48qug6f7nra8veYSdRSgM5X1VK2G6b8ZgDx573aBKTQ9aUSUvFv3jHiby26TpmZyQ7w24SJwzR",
  "key16": "5yVQCYKeTkQSfjGTbnZ4oep3UfALqJZhjVfnJ4B1Tbsfnr8x912oQrubLeUKPcxLaP8srLV8NhvwWUHYg1vGNuAF",
  "key17": "4sXzEisPWPRkt5Ewd8ymQGmqbS7QupuFAebGY5ZPobokByfkLqMiBwbqLPLd1h7DPPMaSnp4QjPB47VW7DSf9kXG",
  "key18": "3ykiMv8kQH94tAmrk9rbpkq4CRdkiiD2rrg1hCYmncbYmGNPMGbN8qod8juw2DfwdLMUkpHFH3zHGf6e3R4SHyiQ",
  "key19": "2eVQzdLhgZu5QDCr4BNYLwpKCAtuGq8Bt1EY95AXx6xHQwZgkSGjDGFiCchbEiFSjeDnAkUQFVHcAaobx5orRvLr",
  "key20": "4QpXrDUM6SjRYL4rnGfPD3u2PGySWZk3cwFGgVeoPq2kTVwmPZ8iPU4DC4GMnomKF4QT8eDVryWRzH9GJXJvZo6x",
  "key21": "2SVFR66DnhSSbvt7fEsG5ud2adL8zLwtVHBTTAwB48AUyrVWDrfzpE2SXPFbRZgRd5v8pB4mjgQqLB2qxwh5kUeZ",
  "key22": "3Y5N1Uj2T17ZSqcLy354wFjS5qRWgbZEaEAgDWXaQxzHnjWK9FHfepfmhsXnMZr2GTEooRQgWX8EM5SwpD6uswX",
  "key23": "3CDwSbgDnbd4inrk77mxHpsUegJ2HjDKtPowxEZNy8BH5RSHWmYogP2fkdUcnGyX2CG3fiAPrKA9oriKNZnGcJE5",
  "key24": "597b9caYdgLxriKnGwdy4eVYxYemGvU61dPQzFeVtetXxrJEQ2v5EV4Y4DWxRZLWv8MF3zrxXibY2YbPrEPh8W34"
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
