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
    "23a3aBCyAfAiHbzTUCyzajNC44v1whX9inaLjF2EUhFf1Hy31wft9z8qNTpMMmqaWPnPsgJmZq2F6xG7fYrP3uJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XRiSKSbjufoaPvop97dhd6iPH31yhKJ7Lws5BWKaxP5cj3GPQD7AnAbChMeQPc7DPxejMonNL1wPtTSfoFtTs77",
  "key1": "2uuzojPn3qEPRMnUCoXJfR2dM2TzDoPzAW8tiUmt7pHZTmPM6w8W6uMzVcC4TTznAD4QB5Yh7QXw4DRt2Hapfdi9",
  "key2": "5CTDmeKYnmZLjYBfUcRzVkYhfVyRB1GYbQK3NRjf6RS6Bo654PTr9DGnae8PNYM9djGSve58g6eGo5UEMGH9jqMP",
  "key3": "4mLU9qNC1fdkJGAnt85i8Q5RW5dwU3Px8LbFpSZjZmm4GuGKgFVFohiej72fj314Q46uosoXGVWPS1owqWtm32xc",
  "key4": "6621NQzYsHyjX1nSgGpsWvYWHeBbLKg9fdMgFfzEGcK1weFhVFFvnbc7CYtJVyDdE3GE5fPBnu22rgrJYHp7fRX4",
  "key5": "3yeqWju8mHG8gZ4u6AWqA2oHJrP2NmmiVc6njwxUJGzfANTh3jseDs2MojMLS3zPBTpNaCPZYPXzbGi117LWCJBh",
  "key6": "2HgDp8nHfuSpAL1HUgW8BSj9rGc9JdTKoi8QkzTCzwEEN6ve6r1RCYtmUPh3r1nYHrupt1Xx4aEnuurbVbV4NsqV",
  "key7": "2DoD5qKuJF6jvP2sBsjd1x3c8divjQ8isYpMA7RpvRLxvDs7FmejTQav6fhn2NaebUibFpZYbyuWk6aA7CMs28cE",
  "key8": "3pMx1tsNV7aQ9RZcT6Ch2pXCDsNTgobSUT1XjfswcBGxG9VUS1xkboPozmitAUqFn86AS5QWeEtnbnnTDcdDhGcr",
  "key9": "2WtyzJw8hC72YzJRf24GFCgDxJgchZ6t6gykEkpPwQd8RL2SUnyso8uanSH17LvHC8Rg9LJADGUmEz95QNjaSWft",
  "key10": "46RGZMyULSaJwm3kV38UwQTaPKbXJxA1SBFSPTjM7ZwunbZgkHpqYAjGnbPc2QV85n5X4QKav59caswk9dArf5AC",
  "key11": "5j6gj3JgeEnSq7t8Md7f2MJKzti2hiNsCXZXWvQCDjKMJZ5dkU3oBipuNjZvqYLDmqVs3oLnHFVdMfHda5hArrBC",
  "key12": "3q7uhV2z4pm4sKfBZQMnEk7UEmq3563RTCkzEDXYP8K6T7nwTpKS2f7BsqTfUnaUjcCcoivTRAV3FcNtNEoiyt1d",
  "key13": "2ioQzo4mvACoLkkPMywAP7AZWyg2cVyV1k9BJvGXHEtMp6ctobADGm1h8yz3Xj7U9BwqT6sJfcwWURy4dbH4sscu",
  "key14": "3VcMRRDTAu7CFvYRkmfE8K6gkodeb2m63usTAuEPUJiZU3cZBMJuEyxm5y7gM5WGBe8ZHrMBBH9FBS57gZFKDAiX",
  "key15": "5XCGewjF9rFsKzZ3D6t4qB4tXcJMo9suPz1s9wwkrURkUba71FdBrfaAYeaux39V2w1ibvupJTpwJdht3zqyjbjk",
  "key16": "4juZbvtYvqpvUtyBa92tMeUBHwZCUqcyNxf7tJnh2gfK545geL2ghwpzd7Gck2km7MmWg6yq2ZQd2BHeSW7PWbtZ",
  "key17": "4ZaBRtg1nDH95wgwnoTKN54MLbcEKkHQf5F7P2oTvzqLXzqKnzvv4WEJjrdFfYjVqP774GJ7ofCRsw6hLJwk3ThZ",
  "key18": "5HYHCDQJhAznJ4LZES6tRSjGzi6tsq4vqFiSpV1GeNYJwJ7dxDtRNiNQNu1nogzVKY3r3nHRi5GtqHMuLHcsaNu2",
  "key19": "bw2uyYiH2U9tPbPB7CcvZ6oPqgZGqSkArVHhjP36Sd42BsitqHfyxrfBaBb2DWrVcyqUuR46Rkq4NPvRuXYp5hG",
  "key20": "4waMP37zKr9BJ3QT5HLuuQPLkNBADhq55YVQHzQ54ys2h21Ute2wS7QKJSEGJx7HskHH1TkmXCrmGWSe6fqSdB7R",
  "key21": "666z3X2jY1D4mr3QsaVMx7KDy4qdnp2mRm6soX6MhLC9krUCXThotZmPpjiJeULroBLqJ3Jjzd9s2gGSesKxMRSC",
  "key22": "5zoTL63ZGfHogtS2FQZLtdvaGrejbDHVD7Doh568zCGBJGqkQR1UpGPf59W8jmYwWTfTLcP9ZZHQKPa6X8MTj1c4",
  "key23": "4zPA6SD2FMS3UJyQXvJffGjSQXSJbMAH3wZjXvGigG3QEoLCCSwBqxDKbPb1DE1Z544CeyMbkhAAEFLwrMHWY9X",
  "key24": "3dAAVFxgg9u4exdr3cxHb6s6sk8JhWG8nwhxh7dLYXzekRyH9zmEQjWNkJVe5KWyM6kv6C3siAy9fzgnseYRtoxn",
  "key25": "3emr4of5URaNGByJtfKgteaVdbGQt4JKX9qX33Um9k3SRM9VhKuMUAgQ3Ege5VmzvUst79jEYYTYVzWmLdUJpB1V",
  "key26": "4i18MAgSP9iZ7LL9Sm2nyvEqiRTkDqd9CriBmCxpzNFsfzdU55QQdbajrm4d7xYzuJRbuW6jXivJxeAnndYpHu2M",
  "key27": "5Q5gnzvwjkjnijmrmk9MhdZs1LAC4ahUPJRoDNVXKQsobBxEWhX1YwTaQAUvg4uhSrnqvEA3H74gBai1fKZaVJ8L"
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
