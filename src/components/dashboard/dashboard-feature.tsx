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
    "458nnfFLkW3WxQ1PcTRdVyrpgkDVW8bnnG2huqBp9MoDy8cMGq9K1MEpwEAfkW5SY7jvynPgggQgXZACbvEPcEV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fYYSnsVTdAthMhggAU6eKFYgLZSk9FVbEawKXWLYgkKdvzYYL97EYN3mWeUrEc6EHuYhWtd982UBHdyccpSzxh7",
  "key1": "2Sw8xH53nZLd7rrAHCbEtv6ziX7tfXfKLnaJCVt5gcA3BGPCFgxaJvYNbyUTuFrKBuRG2HDw7dQrSeLQg3HDun8P",
  "key2": "zRmKRbsnQg6tNQce8CoEUSrVFzYv4JN5qXAaqyWmZZiYahuHcLarNQPELC5y4R4bd7Y9M13UnpBDvBQmovpAoFZ",
  "key3": "4wxHiWvKPRWmz8X4Tn6nPZ4GQkAtL2H5oyBEPGN5FvwYUM3NUw7r4J7FTksKFcQJGTqcDwZLTbY7hPnVxFpqQmWM",
  "key4": "4HqkkZUdAxxEs7GwrsTpohcoDgYEP27rMc2t81oSTgWCSZFETkqgmVuP6Zuy8h2VoRABfRa5rsnzKrpDhing4zow",
  "key5": "3zXDgw3apFb47UDPjaawX8icYXb2u3uVhXuMV8hzZWUTs1BhkpkEDxgYKBozchMdcFgeuxGfrVBqmnn9virHQ6Sn",
  "key6": "5pegtAngU4iip516eg32NMEP5JKtnwyyQ6X7pFWDvJihvguPw6Dp96Qg6FRtdxhCwhHiAo77tsgNYqkwERP9L4bZ",
  "key7": "3A4tTfbdhZqFp8XY5WZMDS49pWS9jcKfyfxCR3SJJGCLo6oTc9NquoYezavQQd3vqCLWDXbVJZphZA4cLH6aR15x",
  "key8": "3SUhpx3JqfA5uH7hEaHgzXCcn6AfJ71aK4cGtyLyrRdqifhJja8s1j2HVKVttkpUmHLxMuUN3vGpi79VPoVt46Vv",
  "key9": "5TUk4NtbQsg74q7Z1at4UHCz68wvzMaABDamhwcpXUJhto6kJDRfo6NPkkcFS1W94K6DwaKFhJ7x7bBXWcidZcYJ",
  "key10": "38dJn49TgiYMXTBqEmpvJUgvXBhq2ikvVLTvTwx4E6NRWZYmfaqrYx5byWNRY5Pbd7p7GcfXQHuSGsPaE39iFdo5",
  "key11": "3JSBo4JAvB5WsPvCARrGetPeHjEqAyVXdCKLksUhPvcc1UyHRSwVSo1DkwfkKAgTJhjGGoPpNT2TT3C28vvYyieC",
  "key12": "27Vef6CiModqDM2MS2ti99YBFevJQCUEmt7LhmUcxddbqGoLe4kwRasZmrmyt2f2722XMotaAED8Nx4bHsMTiwDz",
  "key13": "4R5H1VET4L6SRo2nU6ZKYV3mSENgi3paMbbBckBvskZUWRrmHnRw2LxYcpeSzCmXpH5zSAZQv19JsUtxxyGJNptu",
  "key14": "325fy7sYB2352Uh78pzYCUR7V3DEntEmJSBcz2LgEg36ymsP5bkmCZENU6MwiSCWMMcc6h6L5JPu9SgSpV7Ex3HF",
  "key15": "5YqFHJcZ1qsonshQsffKzACCc3XDDTLFahVozvLfj2HQcfWvTz4Gt8Un1x7Ma6xzJXWjATaZ6NYMhn2QePgfXxgU",
  "key16": "3PsZhJTa3c7Q4J18SwovKqqE63xRAyaHczUapmFXQvx3qapYV17E1QzwCE8v8vwwrHBvbhnjGPNBuLmYnVV5aELi",
  "key17": "42FhEpkV8ASoHgX1UG1K6cvaQAQtqXKhHtXPkHtsfoqbfbSZ6c1YFURPm4oDiiHbwybrK4dNTN2rhB3tdMdf7tbP",
  "key18": "tPcFzt1UkjjGbct2ZXDudjNmHiv7KeZrzeuiFTuycRuEdVz6tbWKCLvxJMhk7YRtuM3uMaKLGwS98hjqaGHcakF",
  "key19": "4k2MfgUBHrejWuA8uxGjQXd5MmUFqtKbLcrJMEvBCUPQPbqFQf3hQj9DAPnNzzxso1Je3dUapZQHgDfsvQ8vBJgo",
  "key20": "3waMfhvEgmi92gDhX2gcqi73czSmQvQViHqZ9FdknE9QiMmyaUDXx3dm5kxwALYUT7BdjWq4dcd3VBCdbG6QbCno",
  "key21": "4Jsxva7HCRLtEXgKDyET2YihQM1UvHmm4n2NrNFsJjH7M7SzeYhfM8vNyCnJf663vofPAhnoXK6PoEJEAyaXqVS2",
  "key22": "333jL4DXhAhjMyPyiFpq59B6S4tZLAfC5hu49v2jx172mikoc1RgLccVnocAmi6U9f9pNqGM53CN6DVSukYAf8mY",
  "key23": "5erUQP9fWh4rXUAuSWLSFh1JWxyyvGrPzaZ99rXyjE1edGWpF5T1cPCWYLnjUDvmW8TXLar9jwqbt6iH3SvfGZw8",
  "key24": "n6nxi8SWzseZCS9DecvJAjiMnugDm1oxwdsSeowP5FgKW99CTEqmEpXi4MKoB7hL5uGzqTicPUXSyJQB7TzhjWn",
  "key25": "2U1EgUD81twT6Riaf84TkhXyoQC9GQEYQsmGFKfkCtRdbsMZFmZ5pgGUf5gRgdJ3oPh6GVZHRfJ4NENVVDfPxK9T",
  "key26": "4CyxwU3X6UUe8r4bsvhEUBUPA8BxQwLUCFV5joMixbmrRzzoFkaKvEzEqcEabRMHgcTZKHPekBjafdmWaJVfisyE"
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
