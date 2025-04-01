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
    "4wXnXGmCpjWFNPKPdQDKu5nCYxHFAEnRqchZ7P7ZpoDjPGhgykkFjUg6Dd2N5C8qfwD2Dij2xSY9pqm8FbCFrh6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zKCTmveB1abnGs9vQt2PZZHeZj5g8wLYirVhNBbXdG6xQubkcuqYNxJRZtSNy1SXBe5P18nTh1u4ga9ZyLcp2Bg",
  "key1": "5GRQfN1MxjtXwRg2SuoSSBHYexhHnq75PXQxEeZfhLC9UBZfxWEqbae9dMXZBCCpQx32NqRpDnWJBDZfnNwxYYci",
  "key2": "3UaJJhjP84D2ubY9rZEHugZj2ZaqgodsTaREW1YQYpbcZ8ZvuhcHs9FutHYzoN6kPiFkpdfhhGzFaUJ8CzNQZKFU",
  "key3": "2Lhbd44BA2KHy6AaQzMh4kdCwH1wVfvWJAQY81z5zVwvGZhaGX7s134G1cSMTH4pozyWPuU3otaTRHDEUrgy2S4B",
  "key4": "49YpVE5kLxdpsDnj5KwCCrKKPkg3UpRQ8BWcrPs1mc41WR4F1MSYMjoAQ4SU5BFAUHR7pX8cQ9rdKPYACwky155r",
  "key5": "4S3V4Cjx2C7YR8LdKEUv7MRrwV4CkkjpP2hW71zArQHwxyob8LPMwWVSNTKZkxMHxqf3a4ejFTDynkLUsffcwxun",
  "key6": "tBh9JPZfDLSUYDQdBJmDtx7FvJSZSXE3rjqymZ2SYMdeQPH3h9T6RAuDmmJd1Dxhgbd8QwhKRddHDEV2Wfnhb12",
  "key7": "3U8Hs32P8hxC5PpZPrmv3DPYwKNi5aA5r7griE1NPP3DmD2c18EaPRs45YcWoZwyn7wHY2nPcptZMaCydDLF1uvi",
  "key8": "4b4pRavmY1UZAUPDwmHj1QdP3zRZTKeXhcVXbqb7zfuXjUBH8GK1aPy4MwLCupThKMSKZNnJrmtbmcTDWszuZufd",
  "key9": "4SfK2SN3Ssganv6kMW1AEypSRdGwXSzMC4CMoFJ7CUnN9UztWygohjr9AGy45P1z1hDzh5Lz1Tg28HL34UeM6gKb",
  "key10": "5KCzCcjc3eKccJj2yFEw16ZTCcf7Ru8UY27ewZ6Jgb1TVbYGXqSjkNqZRZUnqJKb5JfbQmC6R55qKHYzShm2cw9A",
  "key11": "4ktaGtFwLDUBqPaJfG6EdDGQprDP4tk4FUpHLWcTdxxFrdvtxUKDmF1uggid9HqSr3RjpRNDFGm2C8pYcvLfd5e3",
  "key12": "5GD96AHHZQdd57A7vH8w9wZzDCVjK1tGj16UNC3xkTnBPTUxW7wHJQUJBtk6MLJjbfPsRdQBJcETn7jjJ8XZFwgo",
  "key13": "5r2DytfwQeKii5j215bpmLverSw47CBwVLnfVAybdd7SQ7j2aQfcXTadmrJVkfQBmVtgdNMSCHVv8sMdQMCbYhUp",
  "key14": "58tieXJ5rBA342v6PACXesFhPis6Avk6RLrCsxci8g6f31tAt5JjAoEzpfomGGZTHjmBNwV4ekcPgx7G9Yri2GT4",
  "key15": "4rVFWfWyNCTRuK4CteU6bnLTx9RpfbobDHjVphPobTNUxePZzFeaRARv8aGvzJgx6P3ykUJABHnUuDPAqenuM4PC",
  "key16": "4W2mCaLQUUUBWQX39P7xXRP1QAgUQDYqeWCRv5fH2hmr7YXnpRdoFVTcsJvZ5uL95dKcREJSdxYoXyxeqMRm77Kb",
  "key17": "AAQyfXPiCLHzXuV5yBrRHYJF15FhCTzeAVfoQDVFBzD8nwwL8MyY3ZUtE51YWXxJYdjRHwjS6fnJTgnEnZs7jrS",
  "key18": "X5DjhpcZbtQZBCEnckhxQfhAfppb19AMNbKmhbh16YcJauDxXf2vHaBf4KV2UTyXcoCcr9Frq963Jmn5fAcWovh",
  "key19": "49ejTHXBMpFFp2jEa3DzmLMpfussvjyo61dQNLvPMrs6NFAJT8G9GS2nur9ZAuHRtPubxon3o9Mu8oaNTHoRKyCv",
  "key20": "2Br1pnqHDf4yNwui8hXwatBgTRhFL4vpqimniwTmvcxwVo9DncZ81Cv5ZyiGG1bsFFZ3XE9pbG7a6BkPS4rJ1nWu",
  "key21": "5eXSMU4yBJgiQwPLhSfYntpgqKzZaMa5Ry6sYpCgGrgscB9hMaxvjZuNrD6JwoUxb1A88gZ7GPPt7rpYnx7s1U3o",
  "key22": "9CNxRwy8okL93nigc8Vik5rBeaQTNmBnPvsvkeZzzVekieWNpeQZSZAGRoRLT45uptz2KMsgjxvw6WvmYAX9W26",
  "key23": "5z6r8QwFZUtMiAfh3a6DGJF422V3t8hutvqLSApTgKDW5h7RghCQPKu1xxhjHeH3uDjH9bJCzetazJFbonoxC7c5",
  "key24": "3Ti3V5w2EBhNTYK8V488PBhqYqx6rhDNgcBXK5A16mAXHdJSUEKCTpwnnCLuBhN6H2255oyz2KJN9MJS2Zj81nqW",
  "key25": "5smVguTGFerettiLv9s11ijXRGbg1wTha9riGpscbT2qNxG2Lk5SVDc82KoeNyHDW2pf7DKZtaRpuVXWtpBDarfR",
  "key26": "5QyhNyP1Sx2XDquu3jXaW9LqAD7Fppj7rhEF74vdr7MMKSCiHKhTG6szuxHUYoQvK6aR3XUeM1eDvqYSwmjasVT4",
  "key27": "51sQUZHX1Tk8R86exoGecsd71ZpSEnq1k1kojvhxnEd9TPDaVdesFVM8W1Gufhbuf1BXJH8uJ3TvRcyFqkqy9mRh"
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
