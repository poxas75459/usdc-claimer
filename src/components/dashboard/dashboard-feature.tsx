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
    "5ZpXnebsfcSnEmadgEa7QFvjpG5W8ypUgezsBFirmFsT6oBmKbkPmvbefE6mN9ZR5Wq2dsN9yNtuWwDEYHTRg2YH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jZ29UMYxEsQnKcER1L8h5Fx3FBWNJhK9UrtFfsehEg9THMq7GAWhaAdjMiQCi2EFwE19q9nD6ZBtU8u6AwPe1vK",
  "key1": "2k7vbVQcob1PWwdDhpXTrp1Z8d4jToaS8isy8q3Tu9BHtWEyL34uPPaKmaoBHPyih6fDuHkvKdthBx3pLnYQK5tW",
  "key2": "2LwNzNuTrZfFndr5W8DN2snaCVbEThdDGKStM9j6QLqjhZyYoCvn2DaEom5f7n1biBAfbsC6fUEPBDUtKcV28KAu",
  "key3": "4fw1zDtBHxwkMx2HZExxTLbEoQV85o9GDPmVKqXvdYz88WcMBnjo1tpKBFsymKPXjkVKmvLUkMkjXEbumpfJjmBJ",
  "key4": "4LEsoiiNM7Z11uNUnSpBWXtHKDTPafVmm8aGwt8gKSHFw5BWGk76N3Cx7nfqjZV2SgFuixqcuXyrbEhdcYM5fGdn",
  "key5": "5DF6vLAkAFHg7ioFUdfURibUdAJfW2s3HgtU9Uqnq11Qo5snkxmnzGK4jsC16AtgK6we2f6i2YMd5i9W5BowoQ5W",
  "key6": "5vix2bkfDixm9Tgzi44m1hYk6iDDLwhC151uPQaemmcn5mgtVbxKGLVLBaASar6peuAjWWee4uxPL6KKw6i2A661",
  "key7": "7oNZ8C6CL1ni1NFQP4eHom2NG4SweckeiPyj2F6sufD3PQ3eVmEAEafkURF13xnKKcbLcM8Wq7Kdc1BnmJzgsXY",
  "key8": "ASZz9E1rf45dst5GhqCs2jKUKv3W5TMBtRvpWMzXoviNthRVSMZG8s39xXLpoP4eKx7EtoVZoz5osdByLcavUxP",
  "key9": "4KC3YZrKfHUAnuKWsLpiEqSSKTXK3RkqpxTYF2eNpg2jgstm3i5cKoZ9BTd6a9V8htDdvi3AWTT2H4dCoLMKz3N8",
  "key10": "3MEetH5YCKcbZZaqvGg9cag7bjH7iVE97JUY6CoxAJp8Tnn3EF19MyfqayqmNnADidFsoBtfe7FVBDSZBwXGdon5",
  "key11": "5GoT8CPNBbKFmShEY8DZEn1sApdNTZHXENDMopVSUscvbPX8p7PLYveJKoTdTTy91trePnjJJZxusCr9ZN3rMvVN",
  "key12": "3GkbkP9pDAgfhzm9GWRdAiGAEYzCFZ9ZmRqGK21fJPr9dRVp6y8NnetKinWqiegbnBqN11nsSbB1VafSS84nLc5G",
  "key13": "2QjeZEC3yMHYkxZ2fYH99Y9AUy35pVcWwC4ZhUrP29CicmSyjvxLvcZ2SKgK8uxhQX7P4QDjQxeT8bnXgJ8eWQo",
  "key14": "22TFTbT5MiA7BYkgqLwAvhVnCsH98N9fHchELHkk98Q43uYkFNT1hU2SxaqqMmRiLVwScpUyvoQFYT6VPcbU8y9J",
  "key15": "49wW4vaB3fEWquV9wzRw4o7hz5wPkPnSn3ZM5RhnTuj5gta6XTjKDsZK6QQJ7BtNNpQf4EbgvHkSCFcQaFmC8nPq",
  "key16": "5J9JtTLnaWZRH8cmE1j5n7RbDuVHpff16qd9HdbocERWbAcyJsaZtWur3YprfHGoMXL6SYRTnNbhxnw5m8vLygPG",
  "key17": "3r9sGJqp5yCyTktVjfbv3mAb2XJwph9CoUJY25MhceuzPZDbEF24zLo1SzLmZquFR1NbLRvw6FsJwSFSBN3SR6Du",
  "key18": "2C67GyXxeqTUu8qGrVWHvPrZ2cniQxc2KABdtGxjTajG4p5mRHBwYogjpPJRJUYhTMsAbnxFzQRmvGk7frnn9GSd",
  "key19": "3aeSaAYaNhECefBWXq14gKPibGmKjg5yAbtNmvJRnq6pTsexFwpaTLKgjrTAUMVgchU82bQ6Hm1yQ1Kc7SDPu3zF",
  "key20": "3qfBafEr4Usp2exAZh8oCQXBdDJXWiNCCm5PomnBV4JMYcjQboRsbsTtqAVkzt5GJ9aYdE5ETJaMDTwHqp3LkVSx",
  "key21": "37FRqNbsp9UeLWNMbNFE7LF7oCWmsZSaQMNCmvU8stXckLhX2AudoPipk3kPw3uCKmLJpqJr9QvHHxqYhunRh5sn",
  "key22": "2vv81q3jdpm55Prv3YQ7MbNDFcS63qCqfQfzDpdieFbsAsZLbfrocbWnmvjmHewgoRmdQsE1AVWb7puhtPCtJoit",
  "key23": "2jr15Jid5HhckPhbL8Tr5Vft6XfmD8ELqiDBdbxAzraDcjHRu6P6ovxs8ihBpULkypymEwNs16venpG2mXMiacNG",
  "key24": "518EDEJZfexnVA3XvDe7A3XpJ2dPmiFrzwryt5pXXRdnuRiGsYZ9AVziaT2hzn29KSyxGUqTk9bZpGmryqhY9dtD",
  "key25": "4BYgGYTdh6htMzh1R59SCBTVgjWe3YYt5Ydr4mb7Nh7x4Y8BnStd83tGAsGufm6TyZoUuCYPYhUHGPAU1cDCjibY",
  "key26": "2X7WJSaToNDxiF4C3sNwVtxK76umH6xSHj9k7MHYsT5DDd9rVjtbb2T6BctFudigdAJUUdbdauSukUCdz7CCwP1u",
  "key27": "2iSxEfZxEwpM3xBFmR3qBhHSpJCKSemsXg2HoXTvY2k9mKDyQ8RjiNoF6RZ6oszbn7HLCEftijMZy37QARw12Wci",
  "key28": "2Guq5tqSfA3f11pEQbYtwNevHCvc87EATwEKy989VG1NxBUW26DzqEj4gp2RVKr8vk7e1rFRBvF7krht7KTbZt3F",
  "key29": "4QNsEXDviLdq81rVf3LHaVg2RwSiD7dNCYEbfu8zuChKb7WnNTCiBMHpjbuTe4Nj6vHqiQ881v7GBDZK8AfgwUJc",
  "key30": "3ZzsSVHgob3CKFTvrShtmgEuLAWRLjCmU1zK1VUAz3FkmfgcM1AiYPnekj37xGCBYCXzpqkjveEsYDBfKCrvQrn8",
  "key31": "RB8gAzcYYo34JJbFGunmTay753HJ3YhciQsYQYZsrVjGbY4hZZ3pQbuwdToajdtPD2RPSTh4y7UWEvuAVBgSYG8",
  "key32": "aN6EukCM5sdHMjB81GTB615pzN3ucoYHxMXJdp6pHdEAQF3qkL8sgpW9EpVXeXhztyv9QspRymWKohmd19YNfG8",
  "key33": "5kKDyMzdCVKuhjAZDW4QVJ2ibmK6NWTp3psr45fKfM8zRCYWcym7iuhfDyWE4bXQartAZZeUbaWo184H2KbP8PcK",
  "key34": "3jvcKKDA9bBqzG7AQa25HeZVhxGdM4zSU7kRrLmmLA8LoU27nU9bQJVPY15op7xNoNmaBco8rMD5qAct2cWWjnCm",
  "key35": "MavD68ENy3LEM8PP4CTHwGDDGFdQX7MjAPwuEHHdzgRRnWJSGgRikpkEr5Uyf9XwDT7toxsSK4w9mmqvadQDq89",
  "key36": "67mhFaKEuwzcGVVvCPgRyeSwFvUVKMLCA2krLKn8NoHT5eb2buk5auk6yZEYBpXvBC3wzfuDpmvSueUyvYgh6LSC",
  "key37": "23TXoRyNZr356Ab7zRk1W7m7Buty78AwGVASzs5EREDRSfnjPbVSNq3L4sKS7sXMmKLZBwuKBkUhRawNvVMRgMiK",
  "key38": "34mHuFHJ9hcN3XNFbaGKktfjeZNuqUmN4dmfUcyPthxsBLyvLyjPBzSf4oFhdRHPBtHLgbP8c7GypHH1s9Hrm94b",
  "key39": "48Qrg3BQDQEWy76GYJzwwWjKMCz9M2NrS3g7imnA9pCQXDuFStySzxqJvHddf5D8iM1MkbpR8orhbZ7rCHfNoA2d",
  "key40": "3vqGF5uuNrNspZimxHh1grKa8xV3DoikS4FYA4wjZ35T2Hq3nKVcJCbYuqeZBADoF2Jf7LGrqw1gjX5HAWqdzMCf",
  "key41": "2xg6NqCVibp1XUHEe6hcuB5wpw87jHUNMQb9jhc699sB2YjstmMgT23DPEuBh3EhCFsMZnk9LWvWfgLkKmhxfXkE",
  "key42": "4DYV7oQPATpQvwMbCfbp2L5vTVkQ3hgaUenT92T8GUBH4uYFH83YFGd4eDkk9dkhX1m8U6bK7MTWxrXqRfBQA5yT",
  "key43": "4vRSDNB4hs7t7ANmT5EH8fDHdGH2CnfqXERTTGdat8TXmH6oWngEgTJ1Mv6iMoHrEJTf1McCgmHdfYg9SHXkgAjA",
  "key44": "3Abj6ip6rtjz5btuuZamnjqtzEmREGA5Vmowxj2zBLwVbsCy7f51YbqHG3uXJubz1gLh6L3n1cnYG9ukiRmJmDWS",
  "key45": "2Do4283Zs5g1AiGPQYvYaTAKoQxBE8uYK2sAgFCSQRNMDy6D5gev9yu2gpXT2mqWv1gQTipFUjnc8qRKDWQixKTE",
  "key46": "r3QER77GJyxYTyd7w4pinXzrSwv7aR5TgB3sBGAMUx2Veqjqs4dzVUQA3pAN1FbyjouksK24bmBxLTSKs7pV6oA",
  "key47": "4S2Uw2VGnu8FaHE7FAR3ATzknchfFVG1jSw7q5VXhh4bkdeXcAse5HofFbvmLq2k2xSEMxo49Doc6mLLAD9oQUWL"
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
