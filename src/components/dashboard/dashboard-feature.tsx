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
    "3VRLGjT3U3rZFe6kdtdmQCe6ZRSGc3nj86i56iffuFsjqUygv19B5QRcJeZ91RcJ4ZYxkuW5dwk7kGGBWZ5JAnCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61UwokSwTv9E7T5bLWqJA2zqRR3izgUx8m13TsaB1RLGbKXQggYLLBckPnfr4TawCgHVq81p6VEBzxvUzjS1Ya6Q",
  "key1": "47nKypbLhKiV2DXL43L65gRW3F1GAbedqtkVyWBFYueiEb8teuV8C6hwGj7azxmUBDutTKoUGed8uSDDHDALdXfP",
  "key2": "5WaHMPFPUCs6suqBYDtASpNU3vCp6rg8Z8Y8rg4dxduD8Uc3CGNLuJbvFabQ9jntzxyEu2BDn8PjGRW7kW1CYFcx",
  "key3": "4oeMdVKhF9QH4X1aLkdGMUskcUWFH1PBg2yx9aaYC4LSoLxMHJQoPJmFev8qzGL7FbnoYy8C2qySSHwq8sfgu73j",
  "key4": "61mYqU4LsriUVm83BaAk27QmLv7tMdXkFhw4wzWfwg85vecGVZb1WY2DnRWSrUj3vd1kcPrTGt36tiQipTj4fBAt",
  "key5": "4ZrPfidmzWpfvFA61s1D5pNUVqEmWktH3Htd5Dvuf2SqtT9DEjFcASfuEY2nK561D8jyFQVt5cBLxXkJe942cGnE",
  "key6": "5UqdvbsxxBASL6F1AhYu1RQ6DNfxPV9jBxJLD5RfoLT9uqXvoxdvxb9uvutjHYBkA7mSihPJUeLqJEL3qyfhTf78",
  "key7": "2WEzPZWYHSp6NqXPDtSipfeo9UK2XEsxVJqoEJ8KacegQJirAkByhdb4t4znW1zL9xS9eqQhBaZwSzZ4ZqfeSU7j",
  "key8": "56gmmF6fMUXbhUiPD4V9zS35Z23ELLnEPSXjHkBCq4j1LKEe2faxvRksCVFkoRKUq3j7G8CAYwpQqReoxr7tesvG",
  "key9": "2mPxtaNj7twJ1j9HmRJKiTA1HKWDMVMKbs9VM7HhWLPaJVTwMWkpvRyBECRq3xmr8k8C7Kaxaav57PCj7AmRdGGV",
  "key10": "453msBzpSzTf41SP5eZm4pweGB3TgPYF7fjqpuDY6Qkrt4SW6PcxmEFfRRZcTrtBLrAUSqCZd6apBPVPy9F8xxK8",
  "key11": "4sp5L2iLfNXDbcNeBiVMyzb2EydMpvgn8CFbRN7i3voJwB3UjVm1Dru3XwLgktruvAJTWTupaBmsPbUpxvnQWNsT",
  "key12": "gnKHMp7ooG9K9Hwx4V61JeiJo2nr3xWQxKxajv6PEWPmLXBs9c6J6ZVSG1NE4iQhhvimVzQx1FgzimzGqG5Kzau",
  "key13": "5zKE8gM3dVmLcniF3dZd1ovT9ipfspatV3fUTXqd7mRCZVWFk8APbcfDEiDMYtQkeYrM29T5gKEBCMKir2pEWu1T",
  "key14": "4x6kn2X8znHTiVQ76pSquN3wfLnCR7QxHAmVAX9BrGg9fGU1Kzy1dmxWqwatZQc7HyzTsKsmb8DwV63ZnfuVS9do",
  "key15": "48fLKjKQb4tvfpCW55ut7CPbm8vPo8gFaCRdw39gxuWuW1PQ3UNApjoHa79yKtndKi5GRjtGrJoV377T2mG25Xvo",
  "key16": "4Hnd8wGbn7yV3w3QAiytq5oV7ThgjVNtDXPLAwG9EzHJBFhTTVVqGbJaHQrTXvwNWAcH5DkMHcYwRdHMgDRbePYP",
  "key17": "2uszQjTF55tkktpN93oFuBiHVkrbzBKaexsYf6fxVUkJjjAue93GKe5psYF4zuN3kXCsNSRbfdNaKJXzcFaB9QFG",
  "key18": "oN4Z9WVTV45PitCkERvPmS3FV7h4mPT8NwBHK96TEgeZfPjX9647Nz3yYMxedwKBkFDD6A1rkHiDN95re4yLpis",
  "key19": "4jUyX95PotQmUbLhr9Pi5a6nuhE85xmd14w8q1ChNePMpRsCkciyH595mDuFLqjzi43pAkfKHwScjg75x1drfKQg",
  "key20": "4V1YsKyvjbz9DhubCK8di2KEzJYAgdWGVGc43BChoF4SXDXA3Yj1nLknUDsbivkyEMTQjjjwW8xB5rdTvPpKu4GX",
  "key21": "2A4hN9jq1eXM4tDAVdN1FRcoTSbakykoFpKwqhA9AeTXU3bNqAhikuraGVCeQ6TZTeHVDr2KjCAsQ3hZvkgGvjG3",
  "key22": "5MhwKqXjt632fnuo7YQ4YkQ7E9yUDiUP8vuApU6xrTwJRSCgHf2Hxyv7Zko1fpSFHEJpfqbFV9QPTygo91jPGW3g",
  "key23": "5nuJJiJ7v2A6GepZPYsF8r9YWqA3n9drVnGyKBo8RzefbU7izM9ptaqPPryEjMunqasTadvpMKxqkMkqofbhaCNW",
  "key24": "3PpsX6qTLD9jveWNaaAAdEGLpEyLn1NqqUqXGdEJRjevaYtaDpEvZZMAETd5tAWGjh1RYE88cWcCp8WTYaHBsWYK",
  "key25": "JyGmgP31ntKb8wU9b3Nz1xuLeoLSeUEPjYwXja9ppe7rSgeR6tNeCh7FMf9em45kSxfP3weaETeTPsS3295nQgW",
  "key26": "HMjZxU64Z27jFLknJaMBQajUgn73hJ7pdiyHzUpdehWXaemxedEJxxh5o9Dn2yE7F5UVs8jF3g3tG3a9j5MLm3m",
  "key27": "634QuCXNq9dvx7Sf72MQHCWU57gVsUpR9TR4Et9UQHL2oZpTivtTFydjuabxQNjuC914MyYYtPTxj4C72Yvjak5n",
  "key28": "3Qm3U6B5J5QroWGMDDFn9SaVqe4tNaFRKYUnxH4Mb953psZs5yNkPzcnurtJDHt14jG8KHZJUK5AKJVyM8KEGnLC",
  "key29": "4m4wUX91m7eF9oqxf55zgqGdFygYLb5w8Rm4XcN883tw5idFHyrkeoqzcRuVsbjYW2DZgD42V8zZ4zyHfFKpti8U",
  "key30": "rKL1PL1KrnSRsFLpGATVCM4Br621s4v1X4FEtYh2hd1txkYnFCyvnKLHEnGxmSVXQzuGqBhvJBosr91SQFoaFJZ",
  "key31": "vLZfdUQaGFqoXTieQW1NgoypvNeKxXEivEu7D4qHg8vv58r6vCJgp6iQYHAYjCii26dfxUyi18MhjC9nVVXvN4R",
  "key32": "2C3MEswT9GVwd9NcWsgbtjq5Tnn3did1fUjdDGuDPwJQPjtX339HaYpX9rhXHaMCMjEL949oZwkU4kkKTfFcd5Mv",
  "key33": "5GvQEY4BEUynvxYeQawxzqzAWuWSMi4kxKqbhXfXYervYXmb4Uqqg3nmaWJyK89eBcmpYsL1FrkMnReEeB3ybC5Q"
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
