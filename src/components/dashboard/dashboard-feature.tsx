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
    "41LJpJHFMCbn1g3jVnDMCvt18iicANNAmHVXWJViWwuXrC17zz2yhSB5VtDmeEW98QU2Wdn9zTthdDvr2iuPKoeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r3mjjumqZDCUSenLbC1jKTMv114Nevn4xRZQDeeY6mP5cofumWGdoAMHCmFa76AX3qCRJETaTYb6nqFhbVWHQkY",
  "key1": "mPkThNqjwjb6PVHD8viCTr9xRQvMNknz3PkFe8KCExPWPC9BAXpcXd2tsb54SBAroGU2wdqsfxhVkdHmHXnKJd6",
  "key2": "FDjgMkZntm9ZcqyLhchFSfUHyqHJziWgf26QaNNCKzSXCzejih3PrUDuLkPjvdXtGFmhQAhT3uDdqGBWH6kMEfV",
  "key3": "3yaMd7QaRegh3iaeDNiv8v7Giok1FQzjLyMWf1ydPKGwc6ezq65hUpB2pZ4Vx3xJ83AHCb6ALWiP1sYS2qmMrpJo",
  "key4": "2chWUiUvmD3sCEqNDE8HGandDySHu5pa27uEBfn6hu4bpG6fhZfMfw6SHHF78ANwWNkJ43JPNQPGQWURimway2z2",
  "key5": "34DocEW1V9ZpeBgFVhhAqDmd4oohDwXYL8BNaEwGCGivDsJ8sqLfmwhZFc9ikgAjtApdpdD7GmbNHg7txQEt7yjo",
  "key6": "3emup5QaWP4SZF55A26Y32XRMSRiVSwnDN9ZwzhwoWTn6YEXZfJ1C72iKf2ybh7LAeAR1g3qoj6qKeBAGcEvpJMs",
  "key7": "Wt8vGjvUMkQ9gdSf7yfS9PnYBbE82BRV8jWyai2Jdwvf9MfN1oiu9YNzAHUUjM9KALpDfpAp2ZMwqXXyMajjsM5",
  "key8": "4AwSe6HXEj9ZpggbvwC7gBYbFNiCXDPmbWGvh8eTwDCWf9pyEiZ4GhSX8tfZ7WPwBpVgoiqgSVzyGcqq1Cak2BAV",
  "key9": "fLC6VgVGKnJwBmekWySgCNcbg855WZQntc1tyjHFhhFYRrbMB2gRuah9kAZnwmrD4VRAt7qdMiicNWYzboyKsp7",
  "key10": "3JaxUk9a8wsULKegh3jaxatbsYesyz2urNByQBbTJnNkzXaVKy9BvGP3TpX9xmRSRFNqWQ6PhLDen9HK5uLdbMgq",
  "key11": "5pcqUcFeJ6xWeiyKfzmwrTXBnCnxZuZQvus7E429uY1FabX9ZqhCdsZE1vtrc4b8HuSux6J9TSw55Fnob648vtKq",
  "key12": "5yH2BX17BMgWAd59UsDVBnRdts7owa72uSZtVcmjoReN6VbC31jGCxk95vqrJzSdCVbbDJhHUisKuJePNz5JKqwR",
  "key13": "4poHbqvrmTjk8Bxeb9iHn4qSwmUPgNDnTxyNensvhH4SuwPxEYbzFmcRGwT7t1QoFFQ7BJs5qv28hf5NEwhBPb4t",
  "key14": "5814TzNUKAATacXQnU4uWZ1ynsXq8PRuohWXPDiCpKsfB6SNc2DZWhqjkcXFEJgCyjxS1PZPp5KS84CZqxkCPE6L",
  "key15": "5Nn8TEMBL8HzZXLBzeUCxc1epJ6tP1yZ2adC4887ipFXyg5CywhDaE98xxBTgLpT9ArVgTv2rS4NaqXyG5BKC3FL",
  "key16": "5ubniaRYUU5HXqGxF7Cq7sT8JK78jMstuExqKoz3qfgjwKbv1xfUahnLVDfcxgPcvSnAEEc3Ff3iEtQCVMJrUPnx",
  "key17": "4FfXW35am812q7KPJ4KEvitLwttbVCizfnAQQpVeY6Jf824UqK8zFfFjSqFDyFJKsMqzAJQkBP8jrfemb54YoezT",
  "key18": "2V9Qazhco9cycztR9kSTCJctmcE3Eo1FRh33P1SWYxpfXbAxTT7XEszN24Awt2eSWvKaxrqVQyn5NKvsMk7Hcrbo",
  "key19": "mg2pomqVY1NtxtxV5UJJ1XGZPyKntk74iN7Jcoa6wNQ36WxPv1pkrv8HE7n5DQmPGgyJu7vSt4Niq6EvN8LwkQF",
  "key20": "24CHMCd9YRZve6PuphZb9MB46d3BFFVVuxgpu3ENxNayGa7bPMo27JNG6dMMiFWx9RxXTCCEPocXDXhyCVdEr3zr",
  "key21": "54kfNa99ui8bKQijqzL9EUvk7eXCXdc2Gh1rvcvkC5Gva6whqDXDhPk5ZDfKXy6Sm1aNwvUYHQWyWyhASKe1cMG9",
  "key22": "4UKi1r4GAJgqDH5a21d6L57kTUzvEJ94dQkukjFSiob81mY7WSdhjTVYiWrbGUCC4C8yH1xGYmqR8yM5XpMRXgJH",
  "key23": "4KzKKa2SbdJDzPAwuwBiHRzvadWWS2G9TF1UBeMun8AtVQcMXvm7RNWuq4ovxy2L8J3VjRebYyzCfDh6AGRWBfNB",
  "key24": "5aNpQLYvdLV9RQbcPxoDLQz71eKhaTS53XUYkUE1ULfXM6jaAN4BWG4U7ziMC9mSeF1GzjrofsAjrGdCZSAdoKex"
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
