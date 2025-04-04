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
    "XJxH8LorZhyXX2uxXXahK11fJBoNSWgNEcTwXN1Fy62sxhdXAqfegMAraxW6nrU184vHihUXRJdWNt88YRyfjQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m79jd8sq5Lnpdbbhr1Uw9wngDptJc13WC1HrvnVD67FSPX3zoitnjJL5LZNP5zVsFjqcmu1fNoKnLhNdGJaqC7k",
  "key1": "WfimXLkUQSFoUuwFaVm2DU5cQHBSAfpQKyLkZhtUS1uMvbzVNoyiwMqhYQYjmvni56ZXYhWBnTU7o6MFZwibLYN",
  "key2": "3DTgkpZngQ1hxhbTDXGWifnH3fzWx31wQQmKsF7wE5EDhesXvzWG9Twu1xnsYvJmzeSkwV4FVvwBPWHHHwuWJTmj",
  "key3": "3o8iZFNcETFLQLxkdvpxpm15Z3Ds7r9JpeUeyyKstGoXaCNdYmCyRywLtt4fFCBLSNWseZYQmcdsmQpgJaG78cma",
  "key4": "5kv8s1gJZKWCuMuvo8Q6zcmSNSqCVPR39j1w6rkjDNLFkWQGug3ruFNQ5RWHoWpa2kca7RCrWR7R4Cesj2e3ayXG",
  "key5": "3AdgzSRrnd1iJGjXfq6kYxwDvwDuo5SsGsQ3JkGj2YD6uvac1mq85YuZLfyTKaA2bG3QzLYcKG9dtg128a6LX3fj",
  "key6": "4moAjXfdR8CC4ZgxhDgXfkGR1gfrtGWYNa24pB8aAYu1ZnokQ65eX6sSsxENRXbMyrh7dsfNG19KQxBJ5GoivV2B",
  "key7": "5MUKAubtiTa98niCTV7YHyhJQCJ9E2ArH2QNUxEiyKbnfZpYbAbVAFHBHBttWJTDkzD8ksk7z5Rttq6PdfWBpDBU",
  "key8": "3PtbHjeCXX4EuytMKi9ZsKyuTrbuGzfcjpcvdbxLJfqZRM4R9dLTrrhuJFnh3L1Pwnev56FpwGFoPJMYUcXLjw4M",
  "key9": "5ASWVBPxqmcUx8TpRkz1T24vEXuKSUj1xY14t58JXuPuYwxm2oLY6nF76Kr9We4qaXcLvxHZuygamvSE59NH52Qs",
  "key10": "357KiCkmSTUfsKk1kArDFM9hLQHQvq3ghJr5MZB9ZxNHeutBr58Xf9Ls8rQ7B8AcXUmrLqpjMaUHvT5DpMPR1Kn2",
  "key11": "32VLTxr36Htt95zWNZZQ2TjyaitSb9Aqxxeh1jqxtb1Nzv7U6d71wUofHbAfSSBN2UV1T6fq8Hb6oUQ2yerj4o2E",
  "key12": "3wW9UzfJCQqyx8mquL7jrLzgDiDoU55CBJVX6BnKX23yYvMDfZEGxcbaWLmvJdYDJ8sQURAbHYnvHZqLco5wiHDH",
  "key13": "5TauPXwcEsmk3hnNAdhJLj11ryAXmeMC6oK8tLw9FMs8Z7pyvSZqXCupB9roLp2xQpdGGxrJnQjCqhgTtXTXjP3C",
  "key14": "4GRFMnoioujUUWuB583xau6Zn7Q9CAHAFPWUexP6fcVfyyoYcVrnsJatQPUXyfJqFtVdzHkx2XqytdLmb9ifmvrQ",
  "key15": "28CTArcKJQj7C5J6R4DgyaKd8FrXPQpCrNg7CfNRH5ZhWjWao6vEL3QaNJ83DtqtRsdjVKgSNoviyybzLTMM95sK",
  "key16": "4Um393P7MwHCx6AU2NK2gLz1y74Go5jeCKmHY13cUEW7BSw9p78AmppK5NUy7ShU6oZhfVjSAmLHL4ozYREgg8Fj",
  "key17": "itLYUhHgAJZdxzkV866tRz9RWaJj4yFSMKjD9e4Tpabhf38pRZeE31zUzFXD5gxMTZ3WhEr8Bw3EVSqEX7aftKW",
  "key18": "5L7pBV2YoN6BYQEmFFgx7B51k8L7Brd3bikBP5TDdiYv6M5ooKKsGThDa7MjgGDEjeswYufNkZDqsYRsp7VNEUxF",
  "key19": "2Uw7cebccMComMV6eksdC4CN9TSDycHypNoK4UbqA96eRs9btbmeRX6itj6ZSuYdEkvmxkGDFEhkp8ymqxdRx1Cv",
  "key20": "2V1CwSxvNDzD2RgVXudsjydbV4SnE1odQk29xMVy9vuohfFKpCUYq5jG9m2ZHXFS5bX3gZrR3vRhLJt75C6zhFoL",
  "key21": "3S5vfeGBTChy5oukyJRLpHqjLyyWg2UDdsgSXMtrsaqDKiBof1HfSXcFmDFu9L4NpFm6S7Xr8epibGVU5wYJwwDm",
  "key22": "3i5iKgdzpPVwLqZhiV4tgKdQJxxCyBvTh7mkq3bhqJbMZMv7dkiJfyqeASUgyGUVgzQDfWaTERr3BYMzQq3Lg1KY",
  "key23": "2DokvgYkMrtaZLeYyz3bSgGjP7YmCyxFuJbzfhsPZ389khtknZXto4tsXJioGkhQ4EgJWu2FzSz2tzKoAeG3BAEN",
  "key24": "4BJiTCyKinFnWoFj4JfQwdAHNtJQZEUxBKpni55egwkiW2HNg7dmqppgR4482SwUmNp6wuAkNzBDBjmJyvsD2Gsv",
  "key25": "4fPBcxpd68jPcaUG9MSanrxPY11gJeq6RbNoRavkMoToHwa2GrdSJaJVXNeAkDXpep8c472AuFaH44YAvLFQ5bFC",
  "key26": "51oDA9FsrjAgUyH1qNF1gEvD2NvRnwshWYaQpFbjaY9Tck1Ni9DJZzWsXWqcgXR9kHW32gTfDVqk7Y1evcMtsbS5"
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
