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
    "4rZMJaU4jERwAgWeCGfYNTkxqxuvUEmeooL7hM5f7rdUpRiQDBHYnimT9EQZkhtfDpWwa896eXoq8gtag4DBKozz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h8VRdSyvPDHZTAdVRdk69R5QoK6Ls4CXDgDv8JRXbgEVY757rWd2TYjSofrN82YxZxUUnh4sY8HJ1wMvWotVL13",
  "key1": "41sF29PxQPqo1yATGkENgSWLyy27uTRyYg2FVTFifWSS5egpJQrRfEg5FN5VqXNQ7wNch5MwYjncJztWngdycqXt",
  "key2": "vPkP9QBK9RJcacWsQrZyxjrWGwsqqFfvWQ755WJm4wdDBxXHRKxwUGQa2hTEPe63ukAmhJb4g5Zs4LTjLSLuYEm",
  "key3": "48Ds3MqHN5GxT77LouEATa9xmcLuWLAyXGkaJz3PLxPVEjjhfvsdGVVoRsvVf3642tgkvTeyFT6AYZ1QvHbMNrDu",
  "key4": "5o46rotrSF3RKEjj2RPSdCyUxBF5VDctAk6daXd8WEXXTXykjE27KzeZyAyqzfwzhnhrYycbJ31dHSkHqoPkmTGT",
  "key5": "2dpivzf8nbriNV9MNFsn6kM5jsmTABCy8pRBkZ5Y5JvCRo7nFoG3pbazUFAuBT7JewB6eJ9PWXXJ7Zau582aUXND",
  "key6": "2kTpzJd9biACo9TrcanR47sZ3CEqtMftbep2vEiggLKVVNChvLyvfBDry71N4DzbaWNJ9uqSBAAhqVzkaeZ9NXz",
  "key7": "5UMjBZAqMPNuxR1zvxG53P6fgz83KhgqsZiMoDf2ES7csNQSKw8aMQXooYqULQzzxHBgVNpvAV2z4CCrWeAD6zjh",
  "key8": "PiKwHSq2kbwQLRmTGKvNU2SDEWJuThLNiDKNPNHZnvrbU6RwaVmsADECMch3P95Bv9X56n69Dv9MFTWUZsxmHX5",
  "key9": "2xexxYAM5UyWLtb8YB3KtLA3mER86cDhExJDPSk8Cmsr8h7tcatMHEJiRVSAUBfkqQfd1VqSpKEUmmESaeVmeJfa",
  "key10": "8kS21bAhnSxkwd6DWaNsUFytrsHgmth2RsjpwG8i8mSouAAKuw7WSHQ7J2BWJd2VPHtbojpHWBpi3qwyey9Tf98",
  "key11": "3VeyzYtNz9FZ8pzDC4RaTKtiEEGHXt1MLnVoigtNGHSjS2Nyy9y5DxdYFXqvJUuEafwbS9PkhjHUSsMsHPdMxoUE",
  "key12": "2L8RSso15N6QGhzuAX2rqoaJwYMDH9kBuetPq2u9h8PYxZ1Loua8HREgCPPTscRsDdgYj3Xv1i3T4ZxFwWZLyfgr",
  "key13": "3r7BKdKX5uv4Hz4sh1y4YPrPVvXmYvqttsQ5N5Thtu91rbMZtgkVSPSxTg8pU5kqHJUFcSxpbVwVtPej3TJ52nx5",
  "key14": "3n87y1KgZq4yTySLhYtXW8fq37yh83yk7nH9e1NmV2ZcqrP2S7TvenC8mx8XGwbfghw3KFL5o2miW2tJBiuyjJ1d",
  "key15": "5ZjbbNtdFeCc1pyrZwb5au3rbdPhT6WDWWrUEZWpRyY1GmkgN6meocKdURBH2utsfuTvQ5Sj5sHEmStPNGAuag7R",
  "key16": "5Ksszky28L5QqHVe1NUDqDMMg6y49b3sWPsz7QZXUy8gRUtm8RVrdDe7BCoGCECJ1jm3zFeg7MUoixEdygtT1qow",
  "key17": "4GJhKkQyc4T54iTY6AXc8CPd3ar8aemcnmkBes9tm8ujiexBx2cgtXy65jkVVcA2uP6RuznV8vCYRX7pCNuaFz8x",
  "key18": "5ZRnBANTmGnpXFMB55wbdBr4ySoDJTKmy2GcxeyoY7rzF2GUnTLv8kB2gPM7HJdnVQG3ewo9grmdJwS5G8DMLuem",
  "key19": "4kuF9ZobyF7m5swGVfJXhXo1JWEWd5CokJPLhS5HKqEFBnEp8k1DrVt1ZCZnTSoG2Sx4auNSAAkayWL2HAw4c6YP",
  "key20": "5vsNwY1NDt8GiJgFhBs94aRo72TLz8sbSdDvYyEkCJ49QdTqfo8X4RzbaxEhB4VcFM3nHw8bQj1xZE6tKucZKFf1",
  "key21": "2hkiZ5X7mgRa1JCpLwYictt2nnXRi44c2FdMk95LUpWcuqRkCLKv1FmTe8xPfNQCEX8yeSkio1NyyDoaHb9z1fHC",
  "key22": "2tBE8Bo9i5PDKLvkaHvpE2c7TxC4RtR1A5SpmZE9cYNGVP6kboSwz5w7pyWHFTyCEKTq446kyDBHAk65VjMbWEwp",
  "key23": "aiD2v1gVt3hP2u5C4aiq5fwB4iQnkPRtnxw3HCY4xdWZRrwTj1nc3nLxE9wKCuqh6mdeWi3TQQ6W7bdavUEPrZH",
  "key24": "3fEMU2teesyjSzjcWW6LiYVS57F2odAN9vqQdpajmxN5edPNfc3ycA2msLDcsWwZDjtA5nkH8MxT2VSoE5rCHxxp",
  "key25": "2pWJS5D8UFyU8cobpEPau7N8fBaXicjdsCYT3Loz8kveCrjwyJyXZpyRRBeUBQA6HbqZ2zEnioN9Tz1aaLpLmVhR",
  "key26": "2J7frZQTicvek8gajzr5Vrp8eSwMF5ftGMXYDUUPMd2RLe6WrAkSnhCzgKwe1pSGczhe3oz9ZTPyTpBwNBkvigA3",
  "key27": "2KaGstUnR19vpw2rfkhbL1WeMYqm4ivLLd3aVJCRDT2iLZPf735BM2vbksMteonvUvQmVRS1DkQB3kN7sSoVUXwe"
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
