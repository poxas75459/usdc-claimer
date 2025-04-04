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
    "38ADwSz8tL9iveobCU3aXu4jj4hQh4X9DJkEr4x9JTXBtU9EHx2ewknn7k1rHkCJ6s9WL1u1Y1uui2nurd639htN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hqZ4paX9CTr5dQxY2wH1hibwTAMcXD4wyszTocxLQS3bGhvhPcJPsHKNpbSv6gb4ZsqP36xuSiGDt8FEXmhVfpi",
  "key1": "3GQbXCiE5RS684iRMwbcMXP6hKF67rGeecZD2fKaMajiSEoqEWA7Xg9ZZwewj4ko67bqMsEPKtcebVgAQhxZTEfq",
  "key2": "2buZYZ9XAeSErRBZ4QnvNCZQaVXerXQ7AuuhTAXWMDYPpWNigpcGoh8Kq9fPTfMuTBdbvjFaLw6xQz3MNQn3mjmK",
  "key3": "2yzCjyFz5bXgG7NEjts1FUZshxLyU5gDgtSwfSxQf65GT3dKxwaUJ5pbLRVcK75oWAdSC1PUiYr4KhsBNfPp1oZ9",
  "key4": "2N3DJE2Hkq36iRszi2JAuf9GiGsegc98PDULcBz6mtdUzjatCDArfZWhPp3EA41h6aRxoigRaiqiMXp7HuMGFNvF",
  "key5": "5abLGQuaayi6kajBr94Y4K1XghP6rjvfqtTKnGLbcHQy5m7qkaikB7AHAX2Eu9wSuaH2t54HzmmXDRPHjiqgCUdX",
  "key6": "4qJNLNmu54ivnNymLF33dXYc8Xbn48fjC49saHMEcBnTMEXFTJ5iQ6nyrNyubjYbL8jiAPTz1xawt4ZgNaJny5Wc",
  "key7": "4R5Qu8YSJg3rAWxE4CXJ5EAuLgHkKide74pEdH1dnWa8p32WW9NTFPoCtzfykJxYp2yxn2w2F4U8U3eeAj4VQCGS",
  "key8": "4c19YjB7Tyg12zX3Wjb5aqYmZNZ49WfXjQcre8G7yRfb8FPpSXxGP6vnkiWHEU7PpRbbVHw2atDyPRZAACDW2Rxr",
  "key9": "2qVwGF68eaSsWnLwJNNDask3VPCwB2ukkVfsufYZR7g6ASQA1RHoW6uKZmmxFs2P7QBa9eEbdqsSUd9WpkfVAUpQ",
  "key10": "CWUUwPvXGsQMVHQ7bXayeTsrXDSHwTgfR3kD2jUUmdhu3bempizyLE37jN982D2AX2AvuiwMGyUs29PaGyBbH6b",
  "key11": "33QksVVpn3KNdKxke4e4HxdwL6JL18i5zHBqmyheztD2XK16fTbzYQC4ipYk2dRfKkMjqYsQM1BNwHQ8PTtrG7LK",
  "key12": "4qVGLA3y9RmZdoyn7C3Yt3dLszKUqq1chbdms37L6piAc1y1536TPBj1mU84LwyFSHcrbqZBbkaWR1j5j3epnGpu",
  "key13": "2msqrjbNrhEmy8ecAHSR1XYvB8vU4qX7mfXHCdYKTwnLoxZALBBgp5fdU3kBXdMLhPHBAYDk4jBo6a85ncbiRZTx",
  "key14": "29SfnfDugGbzqs9wxU4u7N8NsN7KybWGsc6akxUtyCnp2y3xuPi9dqLVeA7LofvHa1NdPHBvaPwbRdEzg7UpxFYr",
  "key15": "3kwADGU4E2faQhmn1YH2geVyfR2d2btwuuGr11Fbp6ZgKdmYB5mn1g9NA7CmEZeQqYUHaSu8TYjRSBm3UhQWhTgc",
  "key16": "4fb2t3mjdkaPkNW6wRs4LAdLifcgkDo2nrqLkYLQwKX1xstN2R37mi6Y4rc2UCXKU9WzD1Pv7nKVg9k1DESRGdvz",
  "key17": "iQbJ3m3CKKA8oWTtEbVuLUTZ9fkcQiiKPU8m34iNbQjsJ9JjJP8t3zkChEGdAQ7bcsQ28vNUs76qLRTHqJnjHQG",
  "key18": "4bkgfo55haQvyZRpjTo6uh9UPwcDeVNjAaXbDgRL3xi7seTZMEi7bebcjhrwcyU1qSoCgxinBatjneNL26q2Mb1v",
  "key19": "bWnLG3NhutwWiNQFuujmjsxQNzsoMmwLVA9YwaKW2S9t4pKfiqkqCZUWrczHLF75nQjXJSyDZwS9oetRRKpmpks",
  "key20": "3oHnb6iQ1GZmA5SsHg9UQAGue4Xkq1T649uczRS8kU7z53Y2ScRdTsPGAWgaM6RANs7BqzRLEy6wAsXGAxCZPMZa",
  "key21": "5jFqsGu4DDpSr2nxaNBrSMVTKNLA9B6Hd7A5rGUvryvV5rc86cMvCpTvMGFAGkFXXoRF35L6LD5vTCubik7Dg7c1",
  "key22": "3xj8gg4zNTUJywt3ySAz4WVdRkVwHR5kB7MMny28VKzt9M8GXKaPnD5hVS7vvgXLpvWpH2KKJxC6nvTvUyDQ3mEA",
  "key23": "4k5JaspFcH3J8hS33KsWwRZmRtgf9GGYfEikbZfrGkZzMw8qYdYLUaUo1W1FpBFnnXvZ4SmzRYarwyXcheAGCKgt",
  "key24": "5mbXLwpJTCxMMYJY7TePX2s3hATSxpwTnPP7ge7VtmwenzuBSJkL1EBVLZ5e6Bn4XgddrmWNyVoKm2YW9xX4Y7tL",
  "key25": "3wAQPGipAXeyi2GgFciL5ivKKtjPuJTQqHGHdERjV1BnN899BXDf17atscGzq1rNi4hkXQXY5pbgBZWCiMWBFeb5"
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
