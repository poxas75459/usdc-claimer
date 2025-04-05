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
    "36ZiarQToDFJL5uopggnsH4uUXYFzZCBXGcSa8LwKwauwMp9FDq7vwFpfgxEqxcsS5SmJ9xkjh6YVtWEv4UHi94P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JtDebH2raJFX1coVcE6b3UH4GgYQ19ieBBWQQatxKp8Kiq1prLXmkwhDuL22xRGgkbr7DoR8YxCkmK7F12Tkwzv",
  "key1": "4x2uPg6niMabpy7n27rdBNryzAoYt3iqeH6ZMQY1cwD6S9XyjtgV1rtrcKGSLUvAYPZ9hN5pWph77c2PGUsZefg8",
  "key2": "tek3K4yeDarz4dHs9o7ujaUuXEV3Bsy1HcWvAW9typTnWCPe14Uz3QCdn8TUvi9Bdumd9RYAzs9qzkHpf8247H6",
  "key3": "52eS1mmZJ3FqzSebG4cUjQChzNCD3eUg6HXaRYgsLNKVeeYjoNxPMnsuxy8g6rvQhegpE79v6TSeQgf39pYiisP4",
  "key4": "3PKPErFmTiuZsNhrxnbBBcAWdTuS7MWf7GyLrwTXP9XwyWxFZkSzJRT2gbCdPrCDQ43G8TETZg3Aryt9DiA1BVno",
  "key5": "3vsPh3fXnDfGPgPNcVyXJBwa7MExEmVr3i2Jfszpb1Tmq4G1YGdNGHwgZ5ReUDAwuR27sXsFpc44kxrJTYiNukXi",
  "key6": "4LopZND5Wu86JwpR6y1jEkKt9Tyy2TzWScxBtmMt7MxxRZSNecQYwRMooyaLf2cY5AsZudwkuLPCs1ZJKZb1Trrd",
  "key7": "3aTpYjxuoGwkAGLPpW2K5ma26cZHQzdm4Ti6wZCdRYBPfnSWmW3CKjRiBrpyZ7e2GD4d2MgnDe9r9tjoFkyHp8E5",
  "key8": "5MwaJtmDYDqnfZ7rpHkdUanCyaiLEhc3C8VEhDkHsBwZ7H9M9Ng3ZD9dhrdSM2Vn4Wt2Atn7VvF7xVwrTDJ2HiMd",
  "key9": "2gUqPgwTEWGtuGK7HPXKrnzx934S2zBwdNbiEbLj4pyGLWHt5BHN35Ah26EBNL24odUUPSEng8QyTwbMfkuKkHm6",
  "key10": "5VH2ZfoVKGWxpYWSzQ4uqruAMjkJizC6szAbKsVzj2bGn4VNihhWi8c8T4yqFF23QaWygeR5hEYtJ5emjm4c4xQS",
  "key11": "3rNzCdn8RnoUzCQcWcsRBHD1bpsLwwp8VhvZkEiczFMPS6hq5rbrkNKi2YHnteb4YUv9nD5qYZxHF2gwDa3m7Pjv",
  "key12": "HsydY3M6XvtnamuCJYq3m1t6E1m2w322QCda1wdUZSbvexurmY31pifUGdZmzoa72i9ZX97gygQWUo6dGtQaYCE",
  "key13": "5UrGbTawFJk9HMVajT8xf3Hzx7WLRd1WM3niW57djKUyvFTBTWQwrPzi8RsHGK1n6m14gy7rfZckBKFS8NR8RrZP",
  "key14": "2bXDJsvpXiPAej7g3G5pPmxNcjtJ9tCNXkCoSvz4JgubF4EuAZnUbHNkxARCfnXw1xcMnLWbpZ8chFdsTpqVPert",
  "key15": "2WELj7nC3H3jqGouBdumx2azFZoVdaz1UKPd4wa97gQCzoQNEe8wydmQSsJriP3cf9nbKfR1d2gL9d2k6ctkdmhL",
  "key16": "2yJSmDaGy5uGyqvkDS1TVbVk15HGZnZ6HzVVjLSVcNjYY6GvzwHe2m1qfWvEn61GtSGWXaUfroPcCB9wKUNwYbjf",
  "key17": "2ZpLP9daEst9TPRMP43YkvwiBnUbpBhMmPeN2AQiUocM3AmRyWnB3T7xkSbW3jN2MNfpGC8qHAQMW2h7QmkfJoNM",
  "key18": "2UZWgMUea6S4GDKAgbZSvL9Dx6TQkCNuRmE2gLs5BkE6qWGoThrcListWdz3VbAPGzjfKjVPRjtqEetrkbCNPnCN",
  "key19": "NsfpTiigW3CGrpo6jTRqc61FqPa2XSvnmRTZkUMP83XJCh9HWy5a6tLxP6mm4mwCzLFjmogbKA7Bo7Yftug26kg",
  "key20": "576rvJGHuDtzp2u41hsdvTMSpP4R62nDysZcP6KxoFvQvbU3Np6EjvQATX1ow4NVcGMr6CKnTDvmRcFWrbURUGfu",
  "key21": "52bYeoxsUUTKHS3y1nKcLLWNJWF9P1ey5HNu6nrYfswLgEYThtxCLJz1FUCNPto1Yc6bCbTLomvvQSm6fddKfaX3",
  "key22": "74bn4FNyrK5yc9pb8zgFiGUu4q5nDMDCC6HX9pHEX2XhqVB2YMgbWH8eLMiar853cjQdwTKyDqmu3bmVCR9hSp3",
  "key23": "2HfbupFznwPnnHzqRikyezsWrrT6hqQ8iJ7mRZW7qnkHWMrVqfzesZiymHZAqseMNKpCDV3hEzu5WJctMrtYbg71",
  "key24": "VTgC6xwwEAQN5CgHEBnWszDeKEy5gtXCVY5j6R9zZWcUusmedmptYxd8r4pihV7jSLWGdoxQAP33ibw4sFQ2kp6",
  "key25": "4RiDoA23YcAYMwz51THxRguzSdkAJNA9mFMH4ePG4ja6WAor6rZEjCK9tGePMzKc2TyNdRnyxEapJzwVKoxc1nvF",
  "key26": "4D5ztyLw15bgtSMv9cSKgb3XpG2fdKAkwuosPoFi9DtvXM853Eiv42T6GjJAMnjHjweB9x57kB1mVXZ8MbV7qA2S",
  "key27": "2arPdXzrr9pEQXF1igRSaegr9YBJVDTE6yY6eyyLcGXf35DURqR7KnqFH6kEEkRGwPVYpZt57XC7NsKnYUA3BEMJ",
  "key28": "3vRMyuxx3XiFX9C913fkzzkdxZUy216B1uar517SEDs5E76pbqaLFf9B2s9hHJ38wj3UbW4P17wPYjvuSSmG8RmG",
  "key29": "4ywQGrTv8y3HkM8VtPpQ9xLoZL2xqv9RWjv81BJsU8uRtVfbGh9CzBsQwf8bpF3Po6TXf79oeSrDAZaFDTmYJWmJ",
  "key30": "4WDETe1wNXvuP9Nb848Gs7R6Db7z4z94vHW5EvmMZyxG27UpBd98zP8i4KfTggfhmRERTEykkabCjRFPXPoHBZAW",
  "key31": "4H52VBNpBuxHCdQjDRsbUp6yYF6kRH3KabLdBLY33jT4AkhhaFvAgcEH5f4kJgxg5AevHWBSswePeyX5P9P4RiKG"
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
