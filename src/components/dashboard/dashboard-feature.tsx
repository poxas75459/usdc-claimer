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
    "x8G2Jth9ewTqEi9QZmYw1Wu8WaftRN5FxB7mruwst7gTe5AuLWmdb7KPxgYdhNsyJ2uRuxendxBThVcuQkHFRwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tfbr7ZHtnjabzeyxBMxFrvcNAjRhar9gxWGqPm52pAdT7B4iZ8p2ZgfbVAkNpUdRRWdUvP8SepVQh8an1U3Qt5w",
  "key1": "4aqGvqaQ7Cc7K2MrDJgHeztyKw6JbQBK5cXT1HhNWMSjYhhVLuB1WmjdBREHvF2Mw2ybky9yYW6U6oRmdREnHbPD",
  "key2": "5xB9qVSTu6eM2PiHWtM6V3HjGPvrt9fkDW197eGSDEVB72UCTKitKdBDLzoMVY8zsPfcz8v5ULgwPrYjmWQUxqe5",
  "key3": "iNrmpetE2b3pYBDXPG7aUUnW5r6PMbRHLbFe1BQj4odVkhst2kHHGR2Cu3JrFySPnp7Sv1XZoH6GyKH7ZTLAPkY",
  "key4": "5TRw4bPeesXgbSnuxCVmPWUVYYQgwjTNq1z6s27bwneVMb55kmJSnmBu8z15KYgBsAbQpoy1916Q98rwhPX4AhhM",
  "key5": "45LLd1CZxg96HKsZwpaSa4UMxcEHT5Uq7zQmrgZUeoX7djWLt39imV6x77V9jC8mmT91sFtdq4UzoiSGivP1x6Hx",
  "key6": "2Zq7bbM3fDEG6Qpk3trFNa8gjBFEYBLWDdV1xGcWKn7sTYvBj7sNXvFEs9ezZvgNrG86oXxXHZo57TLyefGkGBw",
  "key7": "2DrGhGt3cvW7HrwUpR7sGS8PtM3R4xjxbV1jeHE8aMFktNGTHVyWGjb51CAMMzrnT3i4p6aTgWfiBgBQCK1WUNPJ",
  "key8": "3r7pYJ3XerWfYSZ6KBv8T7kU9spXxvA5iw4vdKRarBVCmr1pyPDH2wzV1gf8ZvCTLffS3PtfF8aK9op3m1L6FXp1",
  "key9": "5KwbHAVmxeVYHSBQ4qauCHuWS7aPAqd38Jaj4WFfV3j2YGgkBdTFzWDxgiyD19wsP8MxaJjZ1UjrmS37LMa4qbiz",
  "key10": "Q4pN4RHEbhNUdpd6nnRdNfHUuTMHKiTCPwvWrWfTpGoAKwmwL69ZKY3Nz7RtZVgKDBVHDQZjyeoidUD9iq8fFRJ",
  "key11": "tsxCAnNhMDoJh7XEqgqBpHWfux28vE6XdEbUognHFydHPHRw2bDDS4mYn4kebLDfGd1iYPFR3QE6suudg2eV1Bb",
  "key12": "jzJBkkAR95q6wkdueJWin7tNgAU4JooFRqXRjgKdKm4mNbRqmjg3xa4VJJFN5bpD97hsVjows4JQLmF6YUad5tb",
  "key13": "5i4zG9GZBvbktoLtHCsWhgFhpoZeuipbw5P83M38MtRCpuDuFWGBEEihAmnheNwRj8itbLBXa7EsoeTtXGvAtyqj",
  "key14": "4nB3ncqF8FtxeRtL3kZSLdFFzSBRZsBafZqbgxKTr5cYcPoyGrEnzn6r6MH6foAC2XtsJSNfYHG8Qxn2mWJckr6d",
  "key15": "3KGqfUtBd6msuuCxTKaeqTsMoHagm4JXBnCNPPgCqB2aAPRd36DDg5SaniPACK5zLnDmnpt383Lzdrftscbc1gQT",
  "key16": "3cLZCYad7kDzFEjfuAsvAYD5C2oUBTQXGFQq6m47zeV9NvdiojGPS6jnTQ1HEjhyXgUQz6vXx1Yr2HEEaUkxtRHL",
  "key17": "iSLG37iRp6UzeJWrRwqYcngfUq9QGa8K7RdEJYawzEN6y86NGZXBXmh3FLE2AsVH3j5yXFmbCgJnRX5a67GHfWk",
  "key18": "kM6wDDbL2hurvFZnHnnbkFPPhKfcYbJd3DhL9y8qPr7tuCfULnF5eSt4ZmZfF98YUhvMDJ9oUXn6r331mq1iLR7",
  "key19": "5Vvd8YUVm648SCpLQ551V496aehU6oagusdVorqvbNzWReiPqsrxjXxJUmNxoZq5zJDtZ7CTh5fsbg5JoHespqNf",
  "key20": "4MwZD23cbkmKsTmp79d7ae7ofq3F2B6oWnL7kTgRpvF4kkYp92DzH8cZ39eLU8UPmYkM5u68GU7GMCkCLxZqFrF",
  "key21": "E2GMGghKRviRpWAtPiKgnaNwSfH9F1GfRM5eXeGT8RNo3YKZ7wh16dHFGoYyThK2yjF74AnJVdTAD4oKBEz3ciz",
  "key22": "3qek8cfouWL3dsKZFTjqJ4U7gmwUdL2PdDmF9wJ5Rvp8mU9pFgA4rvhsf4mre9Yn8faqhGWPGyhhnx67YbDb6FeN",
  "key23": "4SkiKjqerptH2n5Gz1gpAcM4h3V2b5dQhX8DFmbvCcgZ7FLbiHm61ZjiWZBhpT1LeAtAsj7iwbPvHM4UfSZM746w",
  "key24": "cnu1ZAD2WnzsD3ooSDroseeseb8KCCgLicxtsP87u2FSZw1HgCCUqBj2dSyW21FspXwcAe1qBGRPaLxzn8Sv4pY",
  "key25": "3tiL2UiH3yNbXEm91WcaT156zeBpW38fVc5e7UuLY6JCiQwANZx4ZYjzFyJEUYaooihV83vxQcNVjh4JMrFCDnUY",
  "key26": "3Bi3cV9f8cDxtrYCPKCSAiLBaDxPXjnoSqtz27zoQRCxUS2oBK9PR972e5Z7RzVM7jAjT5rVSnQWWrycxExk998w",
  "key27": "2mpehm1gBLo4CKgJy4TyugT7GXV8K3ZmfTJeUoBpyi1GbGWn4Y6GKoa8kznWyo8k3Ji5ZAFX7Q4hBESvYo6xxaNx",
  "key28": "3VUfuiHLcpfRe6xKTjvu7bxgVadyYaJu7WbxbwZZNby6fvRGiXX6tECXwXXUk5UXCWcBryj6N6d7mzDkgEVeBn2v",
  "key29": "4sy9E5Uqjtukct6t4uNWqseRK61CwZDkDYSgPyushTpFEDDnfWtxooF7c5Zas3GDsWeU7SdfbbRybVuyYjcBKBYo",
  "key30": "2wQGt33fsmX57a8NdhCAMBzetjuZ3z1yB9C2i7rV6sBLDtjYF9obkMkyZkYcE4DCcsXdhRSn6pPw1FiLeHtoow2R",
  "key31": "5e9DVurPAGdJ5eDbZTQpeB4Xjaq3YyzoTSfazUF5ddfCKHW2Ch3K8svLc8BSAhS4RV5seT1g9pYCvWAioAT4nsBt",
  "key32": "3gvfWhP3A7N1dsgjw5mhvVdZJDeP48oY4qcE1fttY2Hd2uaAc5R5xxgqsQEbo2F8EpXn3VkSYDV8CwZSSVvg4nNN",
  "key33": "3diaPdusqT5GcdroikjTaomMrvMF5TCxC6Hgjn71jSKTTmQNsiyL76yptf9myGxLV1bpiS6AxiNFRvUnS8f7bM88"
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
