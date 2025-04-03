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
    "5nUmnnpP9NVdLtHXVJpnquCgtZ7HRQJUwaNLiStgJbzT3PrqRAhapfQB3vvrKgHBK329fUcyQJg1xvzyiD6gKoDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pdJCSawUGavLfohWCXmstg1bH5bRW1mVjxsw5GN1azr3aiBVYHVEFdWDgvtgD7abrCSi941TNCb59CpjjyD8pyv",
  "key1": "3tW9yMNiVoP4AT3YkbtTxYd5QKGUxTyeRCs9J2zdAnLT2kRYEWBzajsNUQRUX8oaacBf3enoBsw5KJMpxtAUXwSM",
  "key2": "5BeoxQKv1Rn32TgCbxBEpsD31oHATnMJX19vybbGERXuiVGRYRzEndVYcqgz5Z7hcLTKq46s8S3T6gBsHg8zvwbv",
  "key3": "4NaBh4Lph7XQ2g3eXU9ybubQELsPjphqkPnmFtmyAvpK4XDNRXJHDTmo1n96eVKNrjASGbwthLEbWDteNbpgrgRi",
  "key4": "4BEBy8ZSeh5Krwa4HdaX4BhmATugisGTtJFNHqQVKwiVGjSFKU4jC6JMcTHtSwSuLzAGov32X5Dr563oznP5EuN3",
  "key5": "2a2MMCvo6oKj2eimJ8EsxpvmTWHdFAizno9oTq2rjV5bWSmcpBdNrQbXJeSZ3PjtN4k3nGjvBPBPz72RC5o7EyLt",
  "key6": "4ZaUgH3cW2avWskiB6uJ2o3mdSGet3753dbbVs1Q6EyGgtFUL71mT3XKUDR2LhXTVHRcgP9hNcvKSgPpWB4h64p8",
  "key7": "34npQzbcwudht94hTeWEtQfqiR1j9ZBcGLXkEVzdapeu6YzXQJFnyocArhNZvLbXotyJYTE3PxKYoa87NW24dyrZ",
  "key8": "UwJbGTSe3JZ9UvLoqqPu3dFHKK8oJ491oM7LcWvTLGCXCizUvAzqHMobEtwV2BbwSKhhvweWH4d8VZwRVrprGsh",
  "key9": "66n9R9f6BrMZY5YZ4GGwFFNSWP6dQky8Y9fr2cdmBTxQAJsnX7w7ZWa91qBBV6g2syp3KTyyW6qsvpreo5oXjQMM",
  "key10": "4wMQBaVbUpvWnuhir1iyYFVGbyZDLKPwV8Bouo12WLxBnvgSiRqusuFESE6q2gRbsPSsEqzmCeUwSMf36CTrX5kd",
  "key11": "426uCYYsFHaRNwH2LHEyq1B2onAL5jrFm9haMT66asPzzsohJUPcZU5QoUZkzvyPbuH3rnCyYQrUJ4vegJYFhfEL",
  "key12": "23UbcJ3BDo9AdAUyfSah1rvWuzsV1pQ4koJKYdHjWiYx4gMdQVRckWU7TDKDhw5Lnx2RC7n2usVFpV29LFc6Euv7",
  "key13": "LM7aEk8TAD9kqapkQSWtUGZcECPmEQpwBeWvZibnyUG7m6Vde7yBKtyWEFH8H8BWNYYFzyaV5368u3Mc8nmex3m",
  "key14": "59Yzfa8CRUoRbeTqwnEsRFfDoi8oB9arDAaKVPHCUXJ8tZ63cipXZvSwMWyvjRGLuCmFuXmsT97RBMZtW3mwLdML",
  "key15": "4teiRW3ftuyXNkCw5kyFA9viaWJWwXMJ2zoczUdGKMUQ5DJ9gyNdtbGTRKVqVPdZngYBe7upte7SztZEsGJ5TH9",
  "key16": "vUVYFxYg7nLcH6bFDFgQe1pfYi3FL46UySyJ6bF9WtvRRcgJGqmk6hG2XaGU1mxUDTT1Kgk1JPWev6ix5eaAai1",
  "key17": "3UhG3oRNYhBjkR1iiNohCsKstEd2WMipSfQoXM769s5yNgxk9fdUEzE8nZTgAcLREZ6ugnZ2ajYp3fvnWimoJAgo",
  "key18": "233FHdZ1wDNJYq7tyCxg1JxMu9zrW9th4XwQMD49y1Kn3ScnT3R9QL2eJZVbEGMgWenNVDNe4334yXtGNH7vHm1n",
  "key19": "53DhuJ75uBvg286Qq5NDHovibxjALHmNu2vrWd9v3DCRMjtAASBYqm2AAToP9G9nB8eMEMgg1Rz5HiFhgmEyVsus",
  "key20": "53vBh6Ux2YnzHvhvUoacumv2t3pCbMVRHmgVQWeY4dxadqQriMZCkbBfuMk5rXXfaVMsW56AW6N2FJeqoHYDmhQ8",
  "key21": "2rJF7YyvYKEhtFW3ELCptuUwYYFri6fZhdcANm4xr3pQdQBVFFCX9uhCg4T2WVX4kAuXhjnwK7rQvvPJf6VBtCGL",
  "key22": "658qyXaV43LVEpg8n8M9MBpwGJNN5KkchfYQu7MU5VejCfhESUtWGmW2mZ9dNMG66dgi5awpBu8PsjXiGNrw6VSf",
  "key23": "33Uhz2W1x3G8Jm2ggHuBH9rrWovCkcaoPBsPkXzKqmbLjY7rJnznspUtWfKsYHWXMYWBzkwKLq5Ep3wenbG1eqVQ",
  "key24": "eLztFQghCnAN6hHfLkhPcFfigh4TKCyGBUz1HuBPU1Fe2QQ3YTojjur1tUiC2rtUPhnzz11NxvVVDKuXWNFMouY",
  "key25": "yZaVbvNhaktu9vR6FidQGRChvWnEBzmCdnchBN39BGeC9bXj6GRqUTnoZWdfCHneeGfyqGC5qx1v4DjM2484jqf"
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
