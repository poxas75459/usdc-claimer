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
    "3zRffKuURKHX1UEAt3p2ZsFbZ1e8mZi8zxeDuMA8sjhEDmXnagUp74TTSWTkR3EVPzkpPrep5HnFwCV94xhxyquq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b95HX8cbxssixoxjJdWEDXQALJ87vvoPqm719TWXZ66vMWvFx3sv5b3Fyz4hXNBQnsGcv3DaNjGbV1qJivqQ6gR",
  "key1": "3fRVFtrKH2WTPiNWpizPQ4z26on1BLDexcJ2VTKjutnj2jZBetsVNGPSx1YmXPb9VJtPAfQyBDa9QdhEVpUi9U5G",
  "key2": "2p7rdk8XAziq7kuDWR8ZTe1fhgP6AVH8pWHyDyRRicSYn7XxAtiQfZxdVqu1V9uZfwDepr7dspctSBUAQtFYNV5W",
  "key3": "668c5z42Ri5QuYpoSqUu3oHKm9XZ8XMLkXhB939UpPUAZc8TfeKsJU7MVKDg2FnUhwbJg67xmcWGc1fSduyWJy2V",
  "key4": "3cc5xZpWm2nrhnS9HXc7Zj7curbwYfqHJfqv2YA8cCrJVk8YgXTPkXmwiGtNybC1WQekawE3sxkHWyzo997TV2mo",
  "key5": "Fp74J9JunyEd8uD58KsxKdFcWofpnTgMybm9sgTiX7zMtHgT4UuLFTmtty3wKZGesk41rMq4SEpFii2ZzrywuSi",
  "key6": "TdghQrcMzwmAmWnohHbAe8F1LpJ6DXpytBpC9SrSKCZiHjkQfoBmmX1eNXcBnW8Eoumj586MUFgChRMCC3QMuzk",
  "key7": "5M4WtLPe3rrD8yhXTRWpHHHuoZgdHJ2ERyJ98hWkohGLciTRN2A2DBaoi1Q1rK1ExwXtrYGjB9NzQ9KipBJufVaP",
  "key8": "4cybZo3r4LWmysyrn3xFranwiPZe3H4QfmJodYyPzCqJBZJ6AobFYqndzh1KAxJW9vFkoNtpMDRERdkmhWWyTCZz",
  "key9": "2oZaYAZXHUg5vMxxnMrBSETTmjJeefY5ZCXJcUfNxqJmMGhDMaQVzAjpEqP2U1ub4jedJ1vxQfQKcpgkkMFrtqNE",
  "key10": "zE9Mq8JDp68NXTjXHDZ2F6AmDgDsK7JLrre5JmWvuBCj8UGU2w2VckjuGcHmGuLdHET9mcSqLwMBW5qDUDDGJD6",
  "key11": "2QqrxNk8aNt1JiZjLZaEV6nHjs7B5rzq4o2nvDpJib4NvKRchUKYEcciCteppStZcZSpwyAsWmw6KLVy9jLWd8MG",
  "key12": "299XUHCHDRCpNQKimiXjdtaGNY3JeNQssnqCvGefD1rHdpNkfb6rsV4vLNRiUHuxi64otqaNprY5dHgPYGC7qDY6",
  "key13": "QsPqFGk6ACuTjEZdAcSHvWgEu4Bo1Qyf1FJU8i5QBpzirR4HpMNapKBUZ2JP78q1bGr4HBeHWz1z3cZD5iheRwE",
  "key14": "4NmdSfnbsA2YJikkkdkdsja7i2B2JXBmqyZ3VG8NPNU7yQ2kENL34GCu2Ny3wPCS5JfS2vRt7k37LLWroJ9dtWdi",
  "key15": "3hYFF6YpgvnC4GfBKx8MUn715hA4jBtihY8p1pF2EdqZ17CQsL4CrrM3GXzGoA6w2s38TKdE3ESyB2Pd35vhTX2o",
  "key16": "3gJEBhpdocJk7h3Lo6yz5SwMEvShvbpUhc3shFD5QyGUDvivsZckRdppu48LgA3aAMbaxx1w7Qq5HftfsswZG7V6",
  "key17": "4jYGLpkexs3CmZugGzj3KMiDuJjWdCT2Y96kacUuCd45TdW2CgVmJwXQcwrJhT5bRgJg8yf48hqQEFez6whSUKyu",
  "key18": "9PTFXmFsnq2yGCLBFi1RpqtinEVyd8S7PL6Eve6MtytduPnV51L86uamJhSNM32LazNknYXg15WCtu8EdqTfqje",
  "key19": "N5DNTobHNDJ6oFR5VH6mHyGrRFkta2wPBM2FMacCLT6pGVcGKaQ6dr7ztKqPYiDwHpy9bsZpM7uFXJUFFauxLcQ",
  "key20": "29Ae2z4gPT3uTeGxKdJjq7stom3cUENCqL1Gmz9wYrV8MJMjSMFRZBmn4Ti9ibAMFgstVkJN3Gqh5feGNJpdwN6q",
  "key21": "2ZtCcvtUEWvxT5n75uUeuQUc2FjCr9eVpPRSFv9bx6nooTNvqoiFrAxkn9dAZhworSK8z89HWWGM1Vomz6LsFbGf",
  "key22": "5p5J5gU4jQcPP3EkVP8q6NM8A854EsjGgztCam2ZGkQNdxXBvCvB1V6LmvEHsTVnXWUtWMzt6YYkZWHXGD8BiYNB",
  "key23": "5oW2LQn4tt8DbZyuPTBktgGYtsHXNN9Hx1Sd6ro5SpKXpvgR4kuFbXdSu2EJ7dWnnVFda8YQJMkUFZHL3ivk3KZk",
  "key24": "2sy9mikbdrqtbMQ3GW3zYj6PbvZpFLtoGh6Yro9GvypgJHBhNFLcB319KCSXHjNRzwoKhgdy2Z1Mj2LRDQH9zFyi",
  "key25": "jEr7fZ2CCWtTriaDN4EoznBi4hqa98234jepjZS4oyw4UmpWs5XtuK74ZhwDekTU7qMG9NDCVsWLon3VsDBXwxu",
  "key26": "2Dz9Vw2iD1LwyQTrWUpVaCbNJSGA5ezzDc21nvXAwYE6q8J27TWmmrQNqCPhQHVraZbiMkwmvJ9GPRWGqosCDdKx",
  "key27": "3kQpVG8b9dPEb1h7sYHuGqLjqTaoiZjsnMAgJPGY9K7tGNCrzfZ8XqkmtkrbGc7yfVNqBpq2B52Nr31izvNX6ucc",
  "key28": "3pe5r7uLqy4ciq6zEJdq8RTfb9QSxy7pn58prM7r8Va56rna5qELqjBB1pbA6veYx9Xab9t6jZqX1YwASsZSAxL9",
  "key29": "5anhbRZBTdQAReCroCsR8ijH9T7HiyQiJ7TMijCVUHkqXhNCbxmbhxyjPe97uD3wZsazz9pU3PceFG5sRLLtLR1o",
  "key30": "3htWS9eHmN83N1a3rziFcmwmGyM1sGAghxrSUBM4tncvY2ymAXzxVRsrCgyeQbCn21tn7dsL3Bw3BcLthzgToXz9",
  "key31": "5ff1CB7UV5bGAbMaMqXsB1qugRYnQJCnbCUeJntmxzBf3Luh5kfMw1tZZNekQT652YycJcJtUG4Dqr9oqiPnjnaG",
  "key32": "b3knBkTRDFdrzojXoaYad1smht2QDLwZd9e8rSnADKjhyEPD3NVvrBiAxQf5kPy1YMHG36aLuRPQuRuLvb7soEy",
  "key33": "bxbgmxX243jwxJPb7TKSnNBRGkQ12JdYrWLrUAGScHq9Qk3YGpi6kQ6YT2A1fmFRAbnLqPvQ8ZVi8b9YVYAR1DM",
  "key34": "3ufgFQR6HFBgT5nf7UxEXhsMeYVsgbW9VefGRCuAESDk4tnWxowRQXLPf82xeR6PMxTntAkXLZfnTn5YPAhQ3qKE",
  "key35": "3pFNe6DcjQT6kT5LLRz8ebY4ucXNo2HeZCdzKMgLmtbWVRhtdMYZsLPXmnSafuXFecDVuaLVFmsaCfSYYje7Jma2"
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
