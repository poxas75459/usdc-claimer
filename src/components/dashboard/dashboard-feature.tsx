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
    "2BLapiNPNYMBrfuArZYde433fDx2bcNk1s9LSjjYrGUPjE9NGh9yS7ERh9WpVfZtWkCPsAhqm8GTmirp1xhSXvsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3igcxsDBZb4Bx8AXQ8ycxkdj7FrAs3NSKkg6Ep5sQQxcp9HHXv62gwBYyLmEwBJBhNmGz8BFHK5NsmKWFF4xyEaF",
  "key1": "4TguEGo2XnTY8nQunNwUzYpAk5Qkxr9QMNTvdZ6rWXDTF3a5EbYYHUm5jVUZUq81C2wXchbPUJ8K2BArdutMHDfR",
  "key2": "3P9TrybXufD4sbGzK8JtFg9Mb4o2NbUmsxDR9g6VyuEe8i7qud1WrVMcDvVEzPxbBuUCRjS2vn8YuwdcKBfKeCTy",
  "key3": "5mBbbRijqMTmyPEooZXbYSqvq3thscQgJ5z36AAND8i8Petxczy6txEqgfKt9Bcm6NEqegAZztnRGKn6fezPCqVn",
  "key4": "gFtiEPJRLZvgjEUqZQge92t52YyCEjWPGRgqfwfBmGQEBoX8frjZzEsNm9VSPJgNSQRAcBgiT1bsAhGkMWDhGAg",
  "key5": "62o2aHCyPWwzfEESFrn1NPDZ3NWCB2JLBiGza1fJ6gfH9hXUjEcqwcMvCWq5ruWmtBBxM3njGqJfrGBCgtJhZdZv",
  "key6": "3uwuPRAyTYqxYYkjVWzAhdL2QGMH7B1YgAP6RYAVe7JVaatD77JgTZ2vhuKP9oGDEpLHzWUYSfEHdQ2safRpwe2h",
  "key7": "kzpreShAKdJYQLDUzJfuE99EnaWP4ERg7yAeVSdhR5LnjNgjftP8ZsBHas2jHJJn1RRaHvnjRYorMbxnnGXPeju",
  "key8": "24MQeQeSdSTSVidqVLbf5KJFMwyJ7JHkioxZ3UznnjwdN8Ujwhd2gpMj6h9DLNCu1FvLASHS7PbgVnBSM9u5r6GU",
  "key9": "3WqVLP2XQLoUMjwLRphd6tVVaLEKjDjW14o7HgAz2WQB6dSwqWxZwHxfpf1S1sPcWmL3a3JinmjaoEcu812UakEB",
  "key10": "56iWh7WsKHT9vtzBEekG5LbuSZRg2X88NifnTVDxV4QJgHggaKcH5vtXdWMEiC9PdMArcCyi9Nv64724kKyc6m92",
  "key11": "5Mr6FDXd8KANudgKtQFV474gqJzPAY3xknwx57GJ4DJYd2ZghniwigYi1wetWrGPKfxjf2wZqBrcHGiPBN4FdDWZ",
  "key12": "3GajSYuEqgA7K9n6Rn9W82PmJUhf31rVd6NydKEWhPDGkYxsepC7fJ6i6KwNccJPDbG1EtEzGfTyWAGngPvJBWRr",
  "key13": "2xWo2QSRzNMRMKabFCDpQwurzByDfBYytUBLvTyr2gBMRV3quawvoN9AuKNns1sKcj1CjtNQqFQJvtZG8s9zNo9Z",
  "key14": "2mPgcbT8iQ5krDizW7ijUY9jcL4A7kuqVjbe2ygfPEaoCcBLK8kFQ4r2kYzkNzfFxpoQ1JoZZwtegTx3n4bCxNLw",
  "key15": "2fGEfGEEHkhSS4mnMd7bgjbnzg3ZgYR6RtmEUftLLajL9pZXf2xQFssiDiM2AJ5SQKpoWb1wr4T7s2HsVHVNbkGK",
  "key16": "42UM3ckgf2Ar6WbdkSCBvJoWeKcZG9jgQLLCPaBwzcdLq2oApTirekxugz9zPZMGyAVGCAHLQPdEWttW8YBBkv3g",
  "key17": "PWbcuLNKTXBpDYgpsVnFjYuwpF9BSQruYjhdg8GibdqYqpvMJDts6jWgtmH2jjo2hSP7o6VPrDidJnYZGPLc2Q1",
  "key18": "5oMJosezCFETGtMLTR8h4LxxXgZVuyYDFWEoNhkKL872y2U4pRRDC6KeyXit365CGFyv1FzN35FgtGYLm9Tg98n5",
  "key19": "uUDvST3hLVtRYw6F8CTPxCe7jAwU3JD8VVxZo6MjbxVN8HCQPotQG9CPLPtAykD9NMgRKW9p1yTeqjahRTCKTRi",
  "key20": "38Xiv1mukTRKR5NTMu2Zci5fyjXXELwhMgavyKCMdYEeEARM29dGXuWzoqbHMFnVMRmohkMXjNS3Wtzf2v5UgT1y",
  "key21": "V3WfhN5ftKUa8skm5zaQJYsJ1jmsf2BM7q4FwyDeLZpRAXpPkFk9av2MckCt131Rh2Nkmt8NN3aoDrEPGMBLxwN",
  "key22": "4MREVmRDjEVvvi41pAcvDRtwvkGLweUSTPE1mD44G1ZzvwUeqLnBKjfTY5cWsWr1JbrdjrCxwV9adMpxkLvKzAWG",
  "key23": "5Z9hvo2PCVDXtGyHud53PRuA3jA8Dn1qw62fXYK49C1aR2vVee3fhEkK1Qe8f95CbymbBdcoMYTB194TgGrZTe6D",
  "key24": "5KGGT1WrkoWZxZgr1Huiz1vzWLTDxCHRtFcFo7oqSZ63R2mjABk7ywyc6knMgcGHAu2fcfzdDToVw6v5f2VfkMfa",
  "key25": "3QvbCmS8QDYSReWDfvXFdzEXdeBpT9WxMq5muAACM9VRyPoHJbrjUsUe9mZ9gQG6NnxMuY7vdzaYsd7GkXUQRE5j",
  "key26": "wsjfFuLWKUfQJHTWsPzR31uMjrxdsD6NYz3VhEKU2xrBrg9Cae6n8brJbiVhWW9qs2z75GnicPZA7SwgpUatMjV",
  "key27": "3eagaShu1eBmnGoXesdX7DQ6tzo7g7vCJKu1VZJyTAsCsBDg4AfdNxuu8nq1RiTSwgmb4gN6Ui3JxKTmihuW5cKZ",
  "key28": "5EXDBS24TaURxVQvhxyAzgAQun6xGYRAAGbLRzcV8NvP3Qdm5XSD1CugmZrHiSt1Mn3DeXTzSjz2KyvJbkSFkwWv",
  "key29": "GsULSsJmtxwKGZ7g783gRrMLERN1AcrL7EZmwzynYNcM3MSonvDzG9jhzjUmwUhL4aebf8f8wY28GvhrEqtZfUA",
  "key30": "yGwQsMsMLcAafYXtzDrhkSs59MPyjT3hKFhAeza8jMTU3bW1PaeFYGLxEZJgsmS7KNow7MgQewDvsMHW8D9dG1H",
  "key31": "4XTvdgsep2bdPdh3MtkMRUwfgZ9tofG5CXavQ71ynQirFkeZ7QxfX6xWAvTzxQ3Xk9ujnMbVzK9sTiFmvqBku3Tu",
  "key32": "1VSMv2ZtUps7LtEz5LrzL1n8rK44JjmmTPRFWBRpQ6YhkxnBfc7v7JEEwXN2eWQkUNPAoCJsF7KjJeKVjnokmSk",
  "key33": "45BF2iMbckRvfZqfttNhYWHrxgkH8cAo8oqmHF31CEonWFoQiiBEYek3CThaPPxD32QB6YA52iNmG9CXuanatiqy"
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
