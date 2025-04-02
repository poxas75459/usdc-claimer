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
    "35QCnQ4g3cN9vEsUhJsCwxgb14wTtg2Zr4w1cUk72Gkt2fh6jGLQF9Z2C7v2aY7FmYZXDw9ersaYeEnVaygGZr6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65aNr7yGPzxjeaDffrNK5bb4zsrzfqSu3tGzcLFBRgEzYUYiw3yd4J5DNtNfAxY3TeQhy8s8r8TkPdTFr3haoQCp",
  "key1": "4CLLEkeGpxqMrBQK8pWzBdRbLZZZ9roSkdJMPkho9AGFEhU1fjfZKGNNVbD6pYEn2HCVkQGuJKN4Rx6mfBjEHoxU",
  "key2": "oN9nLQCrbH9kZMzddJvqUPxiLWteZ4ntpQGnJudwHRYboU8eRMQmx61msQ8sKYsASoVkxHVswD8AXX2h5dwJDQU",
  "key3": "3FJipeCB9ixhMwojjNZrmuvAkYBCe4WFxtHESCsn38Y8fnvNQrCPfZKw2JUUghM7Yp5Uma11AntpGwotmxV1LPta",
  "key4": "41gyNkdKrGzkTmuYrQtw3TydS85k1njJX6e7eepW7ErEWmgdvgfo6XYRJzqmUqBDpc6gkscGka4eQMLhCyU3qYwd",
  "key5": "5DC84UyzLj7kzXFFgRBzX9iSHQjJf1eJLTscJbarJJUHCKFyj9iqReVrwwnvSSQqattK4wYZMYxey4FUKMqM9Sjw",
  "key6": "LVaKoKTewWGVvEJCSoNVfnRh7pSEJcmDrqwU4Nt3DYhN3h43qUF4igG1XzxUpjwRVXydQjjgeSDJ7n6XUDJFD6k",
  "key7": "3NpC51qdfNrNo8yMoJMiwUemjwggfmZRn1MGQCjHP4oeduKhSYR8KyA81yYadzcSeh5xEBiknof54eDDSHnMM7Tu",
  "key8": "4bdfBWRkH8BoDCrm1BbqTrQxDzw9pGSF2fnqvzxVWgVjXVUceDgSxXQ7GDD7pmtnRNACwDM1NN7WSe5zDpAozmEV",
  "key9": "5CsPt8fE5KzyUsz5zgQiTgr5n5KHgkdUZFFiKwdPhjdDD33rNy47tWoqUxcWPnmAj1jo572au7GeJZyDhXq8pGij",
  "key10": "981spVXgPxG5RKX85NSMXBNNt2ceBFVcFgWaoyRZhEsYj5jdy4kgtXwYKnKr7k5NoCbAafcrR5X5bZcXoGySMtW",
  "key11": "41xN5W6p6HMhM8VkN4fVEe5MhbReZCnCfAUsiE4EyqztAVbzs1i5SMnVmTMEZzPKUmL8vvdRvbYsiWDo63Mj11KC",
  "key12": "2XFsq6mPVdX7zsMJ2zieXcAboRf9rQSUw5qsy23cbkYF2n2xea8v39XPS9xYkQw6giCBQpSpwWecmxpQkFpmogDx",
  "key13": "259agyrU4MuJTX5obuAcQhAzVkQVk4c3gJRbb8ci18VtXck2PFb39kqK6C63Jf1RERAiZ3xxqB1XF5FCmgYapuRy",
  "key14": "32dBat9WhrphJL9cpQyuTg7C6HzsTUy446rbb3oVNnzBecpdrF6R86EkxutPU9KEsnt7SA4JKnbhdi2JJEw6bJEF",
  "key15": "4T8zoVs2BqWbfRBhS6GHG51TBdHkxfBu5bS8QvQ55zvTRSgzMfywRAMHJHxE23dU592kbGUmrFvEV4rG6cVyrF1x",
  "key16": "5sK56cEnTc6qxWNY5ya4sGwExTVPtxv3nT6fZ9A57ae5SEHueBKPWYWUqj5bqd2D6Z9FRgx5fvwJfEVs4gYvEneH",
  "key17": "dLixnfC5YA38RDuz3aKtzwN3Wt9w3ZQ17f3W9trcESUtMjwSZHHb14QA45rUSV86qgFnRRCYcfmUnJsdpx8rXfs",
  "key18": "53QSGdjMCWFYhdJBjeT7Uo4NaCWaCu7C3dzPfwcEAtbWdjK5p5cdXoAGBb8R3WK622oEbdCFZbXoGQhGWQ1d1RzM",
  "key19": "3yFJVjcLKiPguwxJou1e8MXNS5d9EekRrk2WvnEwuKPsuNFBk5i6zyrHTCERRrgbFDDB92gBDmTKVwhTx52c1Zx9",
  "key20": "584nCg7un8LLbs3oSCLAfscFSCJ1GgX1L1FEsaBsbueeh6KTZ7HVNGrgzZxzYxEqYpCdxMLmbhg5u3veAcFWuKv4",
  "key21": "55Wj92Sc2JW12rx7kaVGKUD4qzDiQugkvrsgtuBHHm1XUvjypHa6MFATNwWUon66BGsPvYhZ3QcmG6r9ohjF5hX6",
  "key22": "2zd3NxDTaZxwzcqGVYMYGrThvXtqTzDtNUZFdQJp5vtsLZyssZeNeSArtMVe2MnnctMfoP31xRaZXSbdhhzhRNj1",
  "key23": "4exsKLsq3pwCXWsDvPcdFASe4NDLCuSTDfzt6zPGNeCZZ8khJEiB49KyHy25HRkptpLTp31pKa4Jd5SDyHv9MoeF",
  "key24": "34c9xucmPFAMxvZVJgeKT9KWehPtRbcHP2KmQzRidF6c26DhFaf8vukMGNrLgX1XtHdpVA4xcvBWJD4rTuBnx7uf",
  "key25": "vh8nzMUDMtpzry5MDS4kBSzs7gEs9Z7YRgnDyEQxov6ct664Jimx5pSn7nHpP6xTNntnH17QxxK8Q1nFaRuimR6",
  "key26": "2g7qSuz4AXYGTeL8wYorEHKorbErqDV3CJRQXgCkhj45wcZGbu1FyN46MUsXk3wrmvdVSniS2J9rbLWi9PnEFSST",
  "key27": "4TQm1ZbucULdaB8T9fTKUGgidQVxKZU6cLi6mPPf9YugcA7eGAhnrux6cEb8ZXRZuDAGX1AU93jz2WRkKvhkoQob",
  "key28": "37zPbieSSt2nhuCDWSX2vhmqGhruLmGoDSd8wY6F7Dx2w9qGR25rS9SaUCcfF5W5hCQtBR4G5J7RRjNirbUwCRfL",
  "key29": "KzyxXLKoHU6AezS8otztjiBdWSz7PnKDaiQM5VSHbszzwxPfa4dn4XtfEp3hqRjudsdFKvQX6UKe5Q6fas7UZgt",
  "key30": "3YH2kXSVvtDVxSbiiLC7ahYq29FzgL26iXaBtreZqRf14CjcYCoaYTB7C9hnVMPnmZmoNjyMUmCYsoDRARrMkN23",
  "key31": "27aAT26EQyd1CSsEmCEeDRRoG4TpQGb2eyMtxjcQ691XU2E5N8328vyXK5ZLpaUSA2R5Mjc9D3peYZfKLnGRkZ72",
  "key32": "5t7wmB44xnyraadcFK1rMSCidK9ZsMcEUfHbkMknab3KGotFhoDhxfCSTKj87er2W5nUqQzMf5VgwRt858P2UfSd",
  "key33": "55ovsxPt4KHmVAcpGnJB5sR1QBDgwRpcdbbi8TZnGqXm59zPgN5TNummTWWDCEsbAMgNpHfmj7DquDNdp6iXpewV",
  "key34": "4tA1RZn9vu4i2xBZnnCkvnzYop2k3WYw59SqF15TiX5PV6jssWV2wnZZKhDu7P9tGmW8a5KEBr6QsRLmsjiXr87b",
  "key35": "YjqMD2B4yjAQUTM8y2Bt13Vvwws5hjUJPsV8NiTNLURZECyxVKSFFVezYz7RrkcbuRYdrgtjF2ChKtA7VboeLCW",
  "key36": "4QA7gtmDrFvtjAAWbU7JhbDsHh3mNEM9ydrDQYwCfo93yyEcZgcXQYLhYVDSgYZUb8Qn2UDLScy8Z9F44QeBByam",
  "key37": "4n6VifreaGuP7CwnMCe5zzTDy35s2uGpj2vtbMztmhoUccudB8C14j5Cyxd9ropaDiZt6EXghQkgGMfaxgvSsFxz",
  "key38": "3ka269VhxC2gGXweGxs26h7jHB37oygYPQyHN9Jvjv2NZpn1pU5MBcGsHUYUwfrteSPq7HTzMWhLRP96YT1yzyvo",
  "key39": "5gCu1eR34CsJ9T3VFaXfG2FyUdnfKr3N6MBFQ95PGrC62XqhwjbSeQAiCXUcM7cbNyhAes9upfTett2nhPDYbXjs"
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
