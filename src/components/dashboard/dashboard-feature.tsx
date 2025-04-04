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
    "44k2Ep7wYFksvLMdeHEjDpFY2D4FNNqtxei55srYcvgHD11f4AG3MQ51vHr8trHqYJUjCcBze8FZLVkeX1B1CsHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pZyrzdVgZ7rdSgavrzE2W8NFn3EaexR52dU2qr3HJnZKq9PSuKkUc83foEGMgXNPS1ppjrUrNBRGfaJ4euUPPvR",
  "key1": "keUG9QtLEDqUwyYnD4FeKh6D56ivA37bJLBRGagdbnK1j2Na5gWxvWkiHRY1T4vG1BiX8BSHJ6jJcicPSzwSmV4",
  "key2": "2jChwdY2Yvxq3tz6958y2VUi6T8tJ7L8oAimAPV6o5i2eVo1sXL9vocNyjgKfiqQBt7FYTSoJ3VfmqN5kdfvXQa",
  "key3": "2qkXAwofLDbiFmEjW27EzCkB7rk3GdDbnhvaJwY9Ek65cxPPSGV8aYfvjGqVDyCz8GCrgk5eE8VQSPja2aUhLgu",
  "key4": "VxgvPuFn18iXCHoZg9eRS9NWAig676rxsTYZgikE6RDCWMRkNuqCCMaXT27YmJNWdT9TYDhTXvwujYvj5GHM2R3",
  "key5": "49CXgPNpa3MQW1fmCxohg8KeyJmWAHJ4GzGhxxaHmcR2n2nE5kFo8E8G9KACdxWwC6iRdSPR5PHucd2HP7r41GMG",
  "key6": "FfXtmaKbPXJAKEUS8f3ouxDuBqPZDSzW6KH21mCKySCntL4zEmzcNmSbwN12iw7jF7JDU5h4Kmijxq3X4WEoZY7",
  "key7": "35goRbWcuDJgMcQi87UG5YzCYvxgihKWUr1Ypcuz965jTxDCvu85j9WV7W6rDnGkbRPECDSHHD6amKKbE3BKqzMJ",
  "key8": "2LoaJVRSYqh97vj8ZqipP7maC2RNGU2fGaKsoxswZQ5jLgZhS4Sjxw9aWPPMqbrDiHLte8ydJAaLKBumekNJo2xR",
  "key9": "4zaSr3wdEgbxT8eqAknXPTTzPR7bj4Dc3Pbnptfc8ejHZrLkGQu7YPC4qDpBmqJpUj4eycAWEktQhe1AVFwqLuHH",
  "key10": "5fRjr2SrJcEYVvLMSjjxzpAEi2ZSR5VGqyEYpjDzZ3GeFKZbzQ9hraGihZGh9KJurUMzzUuBCsex3kKT6hWAZfTD",
  "key11": "3N3rwVtFPjudhrD1mpbkEQxeRtRisKZiSDqv5QNDD2ocRFH2ASdTKnCCrJs7DQbBhCM4Pg2YNd9VkULkunBPGRDT",
  "key12": "5PAT6ocEdomnAdoHcpKQdi9GhKieJKDJ4of8zvNnxSTwVkTigHjo2RRXypNAw1i3CdmebXfPx5Fd51dFiNLj3N1J",
  "key13": "4YD4vPwZCiKS68Dkkm63oFqppdwea7igkbUn3tEY7aLgWv3rXhyy8wipbziEkFDw3Uk8Q84kSZS17qNVijjSbFZ7",
  "key14": "5ZbE3ZRZTSuujxVt4MvHs1q1vCYvFtdctMEvrHigjSNoWHeNAMTLx3NJZcsCVPUhaUpSnW6DUkjTUSBv1zvRcczc",
  "key15": "2ucMoa5B4L4QtELGmh5CGq6w9GfHcSvE2KmeVak1r3ziA9uonnNDWKehnB3zzhZZ61vkPre2ULKidZ3tBMfk2Zoc",
  "key16": "5CAJcseTs7DhSpDoP94wVcp77AweaZVFHd8koeNhUs7E5eEZk99sin4ZD4aY4vuCqbiRFiodXMYjvWVndj3reA5F",
  "key17": "3wvocx8WbN6AbBcvfZbmPuKPbkkgcfWUBFZGNnrK6xMmUkM7S8BCYL2FwuLCFU7Yspb5b3gZdAzM4Y5Ttc5bUsa1",
  "key18": "3W98Tj4FoeCC4N3nVqRQVhXxijK3zdh67yNu77r1A2yeaiBFgyQhChqz7TGC3ChMFtNgLMFWisCesBNUsixZvNUb",
  "key19": "2kRLhfa7ZEC2XiZb2PUcmZW9LuH8jCQdvDyMaLCAxTECRLTHxdFo6jCmkdnZuxeHFUbDNDvqmFrGxSABFKbyatm1",
  "key20": "47RV3YyTu7UdJJym7br7aovbPWTzxeD6m3WhWKLbhBKQAc5DTKbrEtSTmk7B4Ai5Wq7ehdy1yuEebu242PTHW49o",
  "key21": "3RPSjJzZ3UarV51QtRywabjMD6n1y4hNagW1n8wztRnrTEgLKhDDQXqLYcs1c26hSGFPdfARQWmopdqXAtbt3u2x",
  "key22": "5nohBEYHepAhmHNUBhyJbEQAixww8eJW2F4VDwo548LCSugYNheZuVpuj929oLPn6vY6EGxVRpu2B9xpDURhWXRA",
  "key23": "65ofiYxgn3KAeeV2HY13rHf1j3qtHcEsdFvxhY2cWNGrexjBM8nmnUXVCpYXcc7j1LsGL54euoM52Em6qxcpvJso",
  "key24": "2aqto7E3mBuTPe5gJH1RgwENp16BiDWAMms9Y1sdNwUdckBCJXAFXNHZtMCM9SvDKmiBHFPvdxNPmNXoASdNoDdZ",
  "key25": "XfkZrGFkcV6bF78XCHrjgNZkv9N9wyS3sm4bbBDF6WCsCyeKXpuQ8AXbqe7CZvTg6AukURtQbmszgW3z8ftDQsb",
  "key26": "4xudAX14E7ZHUpFG7KWaqkHKxnfdoF2QBETta56ejb2o4E5ycTHB684939d1PvXx7YfWE4XEx8cavk7w4KHBHJY6",
  "key27": "65hEK16nnf3ckEDBAB4UUAS8ELyLzfQ6rKhuvXSFskWkZw2L2ExjVv2e5LqzPXguhiRXx8TTUZnU9ew1Hriaouxo",
  "key28": "3h5wKS64NzZ5PmMzGki98wKQyvUjxBvv7hVJm8UepCQJd9JZxKuoZP7442Z1HN9yVY6FQBz8Q3dqR9B9YYNfy38t",
  "key29": "22Qrphk5BRjUVbfgCfHNdWgQUxPcYZygkadrqvdto9H3cPzNPMMzL4djRmMrEWjk2LStycGBNG6Nq8pJB5ki4vFo",
  "key30": "3iLG2MhkU2nS3NbkaFRjQp1rmLDdDvw8GSZQPweFhk6952E6ybFpDrqc6HWbtrK6FfTwQTDnL9v5qf8vz2iBW4cq"
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
