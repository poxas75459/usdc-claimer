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
    "5fUcnbohFeuDrQUunvfc4RV9t6CeFa38KyUQDPp3gZ6V3wcCnJ3Vze9ie4CVonR8hwLGAA11sSn9SDwHKy5FKQ5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TJHDBNe3LtKHBSyXzxNiFwtVm6zLBuoRpkGwinXFQjuj6kzcRBpaxpL7GE2okvdftchYec3NJwkyMbPE9qww2Fv",
  "key1": "57HddueXsiGKeE3cYiCEovQyAmuUkDEzVtr9BSuFieSYTxPxABNx9Zpn21oWYmEUQFNGAG15CMkrQg67TGdC2Uqm",
  "key2": "41SWwqgicBk4LeoxtXxZTGTShfAszChtyF9btQXBFQb4QsEvhfsoaHYz1UPGoCKm1tLpnLJA41yGuCzT3YKu6wAF",
  "key3": "3UWxcCxCqSdQ3amGygYN5FJEkRA6A2tSgv23hLabfXU5tHBhcBu4CuRkj8jutaD2zPJaw9BXcZBiSLMEz2jSCoYf",
  "key4": "Sjm5AGbwtwKs7UTcWUWQzUP3Pa91iWoQgFWp5Tqr3PL1gFZQKvptArvVupGC3tqypArtKZerbhrh64M3AtR8CGA",
  "key5": "Mtq4mVCyyUEzwExV4rASuVqNy2o3K5v79dYnDvzaCJmfqkPUfe71W94sfujmWJtcpD4grbuS9NGSyjYZZRRb5Vj",
  "key6": "4qcJngZf82hS6t6oRDxJ5hNDjHK12Maf4mn8FwNqRTR3c6kcnHG3LLVNZwh7PfAQAGJNCyE91NsAvZhWZ58R4VTx",
  "key7": "3yZ2sGozKjvsTP3tzukM4mfdpwLFqeUVmkZpAyNZ2dyuqyCFH61w2mmeLzxiuQdB36ekpdPkVPCMx9MfES4cyHGp",
  "key8": "3DjcDJ3ieFcAsMJPszrcQNYpysQugTxxyJ9YhBBxvUdUoiVZhCsvLBxnYuk65LskobURgyyo1vLYJa8F7Cg3Simr",
  "key9": "49fKukoUSX8AUhwujQgVcKa3h1SizANCzHiXokQE66HvpH5BAxDvCEgThWTLMDp9WZqg9aYHTPy3KMrfeM85FTNL",
  "key10": "5kAXoVVFPtEDVCKxKKGhmZ1FjkAqPT5uQM6rR9JaCSyhHuC62vajmkqTr7UxJuk3e76kko96zCPe8ZxQuRX4nN2R",
  "key11": "a1MopUqhZuj4Q43bt4bUUKrVEqJwwGaitUfMrPWkiQrfQ5M5aAVkHK5G4oD34Z3fMtivncE9z6ERqRajEEmXwrG",
  "key12": "26dfhchcQCDhHkxPN3BC3Yq2md5F17q8zPDPM64yg1ZLvuGDTtVLkCaqM7xjQrrvCK7KXNfmvDftSBQefDJMLifv",
  "key13": "rB798Y6Pf5yB6DnxWL6BiKZXzi8pkWc1ayfUajg4uQ4GVGSFJrQdY4Y6sKL4DijWvYrWTXM5SexMdAVSurJ1sep",
  "key14": "3HYnDogF6NMCP7K6t1uL5451JradCUUpsxqi9TXErDquUNteyes5UVtb2y74fGBQ6EvrhvtGvX8FdHNpNqMmfwSY",
  "key15": "5hfRtrP1jEcofb8GCcxMy3PEA4nBEPbR9tjy1uQxi62hAFLPVX4NBdTiJSP35SeTvWuqSb3NaC3yf5XXhPZUqzdz",
  "key16": "61arrsjdhK7ijuv6rmADuZ1NSTeteK8PDdmi4tNJmUDwNDtmvcTZN2cDuVywUuS9Vvnrk3N44vimo3hJ558GVxrm",
  "key17": "5anC8UCCBCYAFWGin6UdgH2eSAXPV4fDQosQdceDRvN1VEx79acyAynYaVS9nd6qWcFbUmADX9mb3X43Bsyvn7px",
  "key18": "SKs9etPX77S4K2bhx3d3u4Tp1rLFgaxMJTRcxXtuZQLi1S6PfRuCoC4qJXSF58fcoDpHRGgasfg57J8W9DsARcF",
  "key19": "2MpGihS4w6RMsZkCShfFJKXdAs62m4HTWqjyGCALKirHhMqGQrBa2PTqC9hKJyoSSnyfL7rj33X7o69TU68jviWY",
  "key20": "3BmSqzdg6fZrAPzi5iuFdKKD7KhjXc3zoUCp1koxHoGWswhon43tUxrriLF1FU53722ctDFcsAVzAsmduV2VmPNN",
  "key21": "4NH14ira2dN5ai1tHZrZDAWsbCTvFjWhBv7m2M2qftWc4XFHpsW6tUJ5wurWdY8xhBvSHTVzFvkZ1zXUYMWkC9Wg",
  "key22": "2tq44GsRzarEqDuSXrP5R1eVfHTrK4gFC6HTU7A1r1qYXc5QWih159VsWa8z2DZCoFEhFhgRikTmfYTnZJo9b93Z",
  "key23": "4oi9kuiLEZU7tRJ6fgz1JnaZEXhsu1ycRhDS1gAZZuun4d4X1FxMnku4w4AXxJRKcBXd6YEVU7rXYpQ3UvLXu4X3",
  "key24": "4XF5Csn3Du1iw7rUUKF18eaEx5T7hu5U28TgVa7ofFjAUyDU1giyBfMgyKZCiUJjevLmy8wofPzP1gK4zgNgGz8a",
  "key25": "4NcZA7N9nSb5r2qD3wH9hqeSKsYnjAvCwnzL1ncRZMH7Ry9eopVzZDbUcyuPoEWWU1tmzmtvMLpy4zYerbegoX1m",
  "key26": "5SiZWZogn3nvFwAvjr4ECMHQ71Qtx6f6TKc3D4mrekEiE6LSrQqVcrVyCKFC4XjMVjX7Tj5qaRxzByeVtdmtihXc",
  "key27": "3M4vJMM1quEJyRRv713UMMQ3tHBbavCXdy8mm86DSQwV6xETePMxQ4nuNkSz9zVnkVgCq2crCMULNZ1owv6Nm45k",
  "key28": "3w6DPZc66LxbrtWsHCitnoTZsaYAA47w2XEHKAvKkkzFoYbrmqztPui7yVbBKNcQzuEethBNmKoh1ejxHu6t4Po6",
  "key29": "MgAjH2x3Nh55sbbKrBw3wx6gFMFJhy1iNxfCgAk3LFUSNbhr2KbBjKo8VEosVGVwWCUG7jXj3ruYvzAqdRG7wEU",
  "key30": "Y6RkQKHvizRgeKo8HqnqaasSdmXfVnSHQCRRQnErWMs9S1CzBsHXJVaZn2VL1kJfB5VRFQFyC5eJVb6YQjFV7nL"
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
