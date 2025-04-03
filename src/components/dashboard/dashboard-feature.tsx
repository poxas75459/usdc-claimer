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
    "59rcPh1HiMFJeBY2tu9f9A1FvzPMLpYdCa35aL2S5CXrMWnL6mbZKJ26VH9UmHqFavKL6vXwMfopiyRM1TGkUaQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b1Mwce5Rd9AToy49cWZC9mM9a93UmcnFqNZjnm2F22GvSH4Xuh2qwDC3ye1Zo32nafJPrueEx49KkqN1WCzx2Xk",
  "key1": "2DRB7scdFR2eC7fcFFEg9CnHDe9NUucW6URyqcdFJjMFHKcAcR6mcvGtPRdVgC5tqKnKP63NW4MPNnjcGh1yKwmx",
  "key2": "5ikp4QkqbJphRs7bun5Pkefy8BVvBzH6cnFx88RSRX5MDeaKKm4tKHdzEh41QDjnkYDkU5KW39PaHkMbTHey81Px",
  "key3": "2qPDWjZbarDH8uXtyUHjfvy4HCuqXa9jVT3FzMMhCFCvcxU3bYyC33BRWGDF1yye5R4aDk7QWw1bPSpGuWipFSoM",
  "key4": "4fxGyz67VG81ePyAQUtmNJG3j5eFmUoBFQJ2QAKXAHjyhyjN13sZ9UsmsixX1de5Rak6ismWBSk1qNo4yTFZUMGn",
  "key5": "5SAHB6xm4fTNWCDwGJnzxHnLzstNmftHTtuSNE5QQ6uCvxL5BkezAk52T6v6zheh4Eg8wnYvLVAcDRX8VztD4ixt",
  "key6": "4nSs7rKvBifLZaSsE35gkAWyhEXbsQBfHesukPm3VM9nisZF8CwbYv5JQVwwjMKjD7S9sWVyy12wQm2jxsS8HN2Y",
  "key7": "3JbLY9oi8dj7zEmVwACQPmaWLx6KdfLJ39xtRCvAMcdogn88frWNQHEUSPjcwbpBP4PZns6We7s9YEMm5fWYGMhP",
  "key8": "3eDXAMptGZH9vqkhZh8zFwLPhrCWBGepoWu5dVBxvQ28s2CBhuXEDw5kSsTGayxawsfwqJrBGrzFqGwkRaLuUAjM",
  "key9": "4phHJyWfDKq2JrcEjxCg3Y3Yp7i9VxgaL7UVb5kqM4jDhPNixPxAiXskorZpfgLVM4NmMX8UcVyMaLSBmcCysxUF",
  "key10": "2dWHDWcRJfsaU7YbKzCCiEu6zJmYkiX5A1R8fcG9Hj2EZvAQX2oegcWxrSfi46cUu7gRvtCAr14LfXFDMwZB9HKB",
  "key11": "2bvRfgGNJzBaeddRfboEGfjwNJtoQrUSZefFK9LAJGxYHSSpvGNxBAuQqmxyhtjoRXF6boYDQVJHspVxcDQe2qL7",
  "key12": "QzRbJYJoeMQQo317s6FKSBvTeSypy9rSCcrmr3GRD5A4yBsxbHN2xotWCby9Bj5WHegVsetFKTAk5hj1BrSHonv",
  "key13": "4GGCWAiSTcMsUNDPCMW5MY7BXrVGQWTyyHZHtrr9Y68d9736WpnxWYkXscqSaAXYLgofxG4cMkVqYcnxUfSLqxvT",
  "key14": "32ijT8HHbGk23zxsM17tYjktyQjUheWjovkq7gzrv8nEEYwF4Bj4gWdVJ8jqPaZqD5JdHaPRJ4MvDAvwFgL5cwwS",
  "key15": "3qvoDESwNofykJductsbu2PNoyMiiz6nSk7iw5mQqep3rp9tvyoUx8oDJeqFEFGiq55QFpTdS723Lhc9SM2UnpgP",
  "key16": "5UGGMzz1yEypbDTK5PgybxQeY7KbvpU5KECwZrpEe5rzTz5oPMU9QALAGJB73211oEHbWJGPexq9hd8Va2erzdY4",
  "key17": "3kyjFqSDjAEWYkYcMQb3yeSBJaH6Qb6Gym35dwT2UiHE47UAUBRdnU47pVpyfaF23TWRR341GMCFSScYn2austuw",
  "key18": "iNkoD3Ez69V7spMw46WYAHj9ejRz2gwFCoRbrSvkqB2M1zuStqXirhUnGDoFpotHEYWDkd5v2xieRng3QNFZJ8k",
  "key19": "2Dz4oaSAWV38rqrGFzWwUkKLvoS37XZVSjfBt3XkyQA2wphpnjk76s9sX6EC9wS76bj6aqEn7RCGxKwd84L2RNhm",
  "key20": "2Y48THd1Fjm5MVcuBqt5Nv9XJpB6WN5jBpZPouatBVtvDDDVP5xQiaBH23qishrJEPay7rHSwKJS2vq8M1sh3aMm",
  "key21": "4Y4K1ZWaGTEsreuV2w3eG6aUTczMWiuwpoSts1uFetArVEPpGUiqhPdFC96fcynLxR9qZkWoLCG2K5zZSUaRA5ua",
  "key22": "5o59sTfhoEfiqS748jVGch6xAibJ9EdufWg67r8JSoxH3tFVfAuB7megAqpn7k7H1ftdmk4ggWdNBmnGg5y7iM8L",
  "key23": "Dh1iUAPFgxEpdB1aPD9vBGiXt1S2D45UeZZTrxj5Cmurui9CyEwr5dTozNz5hANyNEfCnVvgJuXz7L49eKgV2fv",
  "key24": "3qv4qaVCSNFBoJY2v87WF3Y9fDJTqhYWsxZkcMwqsurt1FanA6afqEWKyS2GeBLpzjKEUJCvtJG997sC1Gv19ZrH",
  "key25": "3jKXLKrkMVZcViGfhnsKE8niWmXyJA2S85RrHfU4qgyUZR7Bce6BKBqXytFraJKtYZgAuzNxYhmRv2cmkwMBQRnn",
  "key26": "5ESjfWSiXcUtL5jDLncyZQWEMUTWVZzxu7NUpF7GBmQjZEBq7Hm3cN1ygu4b3gCtmmJpogmEeTjbTjRoXZ9mKLYm",
  "key27": "5kCHYzyKhbHvyGSjjHTDdiUZr8nH2fqi2JQv6gzcmzT62NG8w1c4o1EpqC2yMfn2VY4dbA99xzNtDnPg42ShNknj",
  "key28": "2rAcndzD3jrTkrUmf6exgeZwpiUYW2yfFsV9yeBg7HAfn49qWA68kHtAMWPtWvVE4tvZhPHyZFPSPk8Kpgss99Xi",
  "key29": "55dCMEjbiTYUTWyhN2SrABUojuZWxk7oTvwZvLZrgiiytRrYpXNCtKVW1zaooECHY6iZ9gG6Vjg2uysozTZ2VLx3",
  "key30": "EeuPcGo9UGWZNjRTrXbCGuds15nsBHWDoW62iaMgiBLERxnJR5skL2SFR7jdv5W22deKEcXVJTswwT8xBiPsTRk",
  "key31": "nAivpruf2XieY9oFV1V2xt4wbxtWWpC3T4itPVPCvHumzasM7SCdQiXCVv1GPtoYSDhoq1kxdcKjXEa4EHMNMV4",
  "key32": "3axaC7di69vCVtnRZKnSk6BrM8uVJzPpJyr54Ti4YRQpKd7797k5vyfrp88rMCt3BrpqsdkECGv5HnjQgVg11vn2",
  "key33": "29YJC7r8sE5WpGK2XEGjbJ3gVNnV5e438FwdBkneCGDqCYFqFV9bv7yzsjMuCpzbEEQKU6Mwx2kzmkvbfnBw7JX5"
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
