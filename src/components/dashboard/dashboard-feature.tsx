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
    "44eaDgY77cpF6bdUc7vyyKAXSVZeCV95cQ1s16zWTUk8ewLgaDf9KPjRKxAz4FsJue8QZAJ1hGxqb1rZHGZvancD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PUrRNrruwUedeS6cW55nSDuexhypHDywyyR1nuyDFPYArZRY2eAuaMCiDtRAb8NeTGfnuAaCEJgV8yie2yWJVRX",
  "key1": "5Vggr4ycHZ81He798fJdwqjjrfAgdUM95icEgTpXWMTKym9Jo27Sf1yQkwLzqVZjMf9mZpSSxis7gJLhjGMQCtej",
  "key2": "52Fz8PGpQBzCwDk1NHhQtb8hejJoK9VBZofayMPfbDqGtCG7EPbCDbbbkjeLvPH49CoeTswAmGeX2WUrXNhncZAp",
  "key3": "3zkwEQ19XbuBNuhBojqFpars5iPuwSPGnvycdBg7WVoQehV6YTqxjHBqMvRf5vTPybk76cZzxRD9TmNLVjaxutW7",
  "key4": "7ahjsyV6GH4771z4By75cyACPqr3C8zR2fNYijsKzeCYgcUAGcFHmaMfNfJUUkAjxubK3CKDfdtPdw398ktzCJs",
  "key5": "SR5bsncKDp7QEtbd9zDNgEYgq2wtJh1iM4bJSwyfPLv8FBvzgi7M4EDu1D9rWhz2zdHTUdCuL1y5KmawPEHFYnw",
  "key6": "5zUsUBHXKigicXJebRodXLVEh1A9Rphp1BKmwudEXvmr776aWFuoD9ji6hUqSRLoid11dEgo7EKKnBw7RhJFnVzz",
  "key7": "3TNwUcha3ZhitTdSCYW3aGX5UCsUizRywAPJoc1JzcYwpM88xwNt9KA6Su8PNhBRkCJy3Kq7U3dMVfSk3g7t976A",
  "key8": "3LopdUHqirV1apHkyaHLHGZNhmahyuMCh48TCCT9bfuCoFnutu4V5Q8heZQ7fg2XNemaCX57oY2sVgWqEvT48Taa",
  "key9": "Hwdi2ECEJUAaxhaw76bN2AxDWB21QxAqPKC63Lji8TtMMYym6GSuajjtVuwkXbRtr7iFeJRrWwBn8A1YhKrePpi",
  "key10": "5E92Z1DebxYsGH5WkvKMUJ8Q4tPbFERpLn7yJYLNbPet4ADaMb8nZkem6SfRdLXtsbj9nMRrUbv3f4GYEHY6g9JL",
  "key11": "322KmhabhFUgFVdUFSyM9hvRo7k6k5AQx1xZ1MnNG78pMoPAuUAg8ZV8v3PNi1BgX3VbvFfDjwVXWe1HnRXHmNzV",
  "key12": "3RiVt5XA2zp8y3FbwmMtrhB6Bm3Ku5tJzmrjoMxCWZhc59bDLsmtWTAzLKG8QtVn6yJcywYfsoUHz7y8yvewTjNf",
  "key13": "2P5iWuD8AHujVWMfqjWok2Jpdxp1iBwCSsMBPfkNooYSy4D8XiBhUX18wZEApiW1S2TKaG43PwFLtKZFb95vaizu",
  "key14": "eAuUQGDweKqqxVNe7EuMdz7gQ2CWDGThzXCBQMMEfU3sCEGhHPPmd3bk9zqaKFLapxcWejJok6kbUD2MKj8TNsG",
  "key15": "2ZYLdSitVdGzYAVyWR88GVc4jGtXJzydeAKqFzLkNqKjTK4iSw9Z8DN3Fdnx2daPiGHUyd2R827T7beBKZmpE8qa",
  "key16": "YQ1cUP5zdFqWh7n3Q4dpEw5MKNDx4Bb1WHFvdWG5YjsgJFz9g6fqC3n8QuiUDtzSnDfDoXH5CJvgTQgntQRpY8K",
  "key17": "21VUSJmX49oWjrhgy7uPE5hkaf8c4iPdw8BTz4niqhBUjhtsKa9NsTVQdVjvN5J6U6g58xd1uoAPTmNdkpvGcj8G",
  "key18": "4QB3xWYkBbc59Dsxdd9LQxNYi3SkiiGs8rg7qCz9ZS5xed9gZySVTy9BhhpXFFKJXpAS2iXq1WYgPNr77vCbhXS",
  "key19": "5RyzstWhdvkvxrRoucUGfArqoqvjsUQTMaDaqrPA5Tvwk7LWpjMwtZy3YS2KMUisDYNPw8y29zk2wjPaVwdkN5gr",
  "key20": "4Ki1ytAtQjZjwAz8pv3AgggtexeCU4DTXLC9HS2VrMg4Jhmj88vRsvNbUbiVgmKRyKsnTB8qcUs37z8PgNwbDAG7",
  "key21": "4oGgSuRteLT6JtRsYUd62F6gKgW5uNEBQm2479pYTkqW5D8Tg1iJujrjvtRusgWXp2KRwZR1BJFgQghsuPJAnBjb",
  "key22": "2WFDQWHCVTPW1bVDVTfPmkAQuRnZgw8KAo8YzQcHgBdqSfWwM6HwaKREG5TC4jUuEKJxRBETeXkejyZo6nt11fmY",
  "key23": "7CTh1rXqw3sSV2AWp2sjEFtkPULFUwcL1cDGUJ7YfybbogstF8iP558raF2oPVxoqJB87tzVXh5MELiswjcCbcA",
  "key24": "2Ut7KrFJGknQgsWbmozQoFfbYWFLm16XsbvVj8aegoZUCLAcJFabjFypTpeJ9grs6nsu2XHEayitmuKYrD3BwfqR"
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
