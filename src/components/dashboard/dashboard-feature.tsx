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
    "22Yec6dwrzaq2p2dU1YLjUrTZ8RRVAjRS9owueFzxZ4p1FbyDfYwKckXcaxiU21yL2KJe4BUwgLMrGAnTCC8N17r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rgxu3Bsc1zWdcM3GATx9PyTBwEUVeHzELbzJian8hjosoJHha3gnqa1QooL2T66eXGmUfbaHDfkYmFEWj6xpkGL",
  "key1": "2mJrpco6WkpvHNzrpjLb6EVCGVcL3ejFxTkHhK5JcnXcS5ovyBDT4J1cvpva58ciRW62DPPBcRteW5okAR3u8orJ",
  "key2": "35CRYr49oPUwcyQstSqFDo17YVE6REszTirP3W6PRgKAsNhtAc9gmNo7tZBJEFYMnV2sjAT4Shgm5dxe3KSFa8PE",
  "key3": "5tbpgYR86TkrBQuMRz4iNtbtVPxWscZ5WvmadLTZZnENFf3yENXm3EAdD5JrerGJ579pNXCKYXAArXMdPdqRiBz5",
  "key4": "3p8FRQnrWhgY5pyMFgz5a2iiYZsAQEkSEuBoq1p1VEg9mpNDyyh4onX9QbZdTb4CZSQ5497AysRGTS6HqAeo95g3",
  "key5": "TmwEehZ9KbGjnR4rZUYrp5a3uFM1CmdS6tYEqcmswPd3yeYpo2zSpqo2HVmzz98PiYeEAoUEAVeWXeJPHkB4sjt",
  "key6": "5AJB1rfbrYma4ZweUVhFdJvoiA1JWcnRfW7ZXyBZf8oEudbJvV1VCoZesb5cQBMG3TCjNPMxNcaiKTRiyLdGHTjy",
  "key7": "2LkjWCtK37ANhBw4S4x9e2hUJurz6aoEYQ8jtgnqcNEoDeQUWQwHPEZgMMoBfLSvyRxkMGTRWa7WCY81j2wLbD94",
  "key8": "2JyHUB1XvLLxQZdESAVpUayUDi3eKWTLf7Z7xt4VrwKhUnrc2zGzJN5rFix9Lss8vEPiS7K8bP45SNGfjizYFZDG",
  "key9": "2TXozD9bQmC3f6UMcMxLMiFwASjoRhLDAzGr9YwdmttBNtjUTEacCzGowLMpAn9GgroD4mdJjPMTJWVmQfYo1YQ2",
  "key10": "4uQAxVdwnnrbcid8AcbB2Q1uwz4K7PhAzFs8vDbjpdjZKG5CT4jZP3oWqJCaNhHgJaDHStAZzA2BpqDU9pd2Q7vS",
  "key11": "2BhFKXks8RRCyMtyTWfo2BzZR2dDZ7xRCitg13NBUStDCkNMKWsacscB5DWDBwiaLC88U5MjZhRHtBXvFwD1VAnk",
  "key12": "4E5C5mSMBWYi1eGCBqYegWfh6XSrCRNtRMTdrJ2jfmxkUJxSQfJjRPtCrXL2NHXjW2k4wGCnEXYBX9RmJsv6sm6h",
  "key13": "54HGzDbvGQFPnfEe5beR8kGvnXW6AybgXQyF2kn3TqQGQDtgZcMxf2soXFAXjku7oAwn5AVxUUsWm2qu6VeLrMbT",
  "key14": "rXTX952MzkV2nQWuSP7d3QFadx9dviqDw8YmFPYsd6Xmfms9krzgJ5Kfx9PUTZAfxbJqHD26Btorvu1Fme8TMMw",
  "key15": "2ZTmfr2S2CR5NeiFoVr3UhQNe53xFaqG53xTh1xMTsMFW4j4fVJ71fZJ6snRTLDQDNfSYR5RfWubzoavMASTWmH7",
  "key16": "CLhaKMKy5oTcQp4gMXPmo3J6Zjmm6qykY5ftgYmqMB4fKy2t6C4DYauHEpUatqPCEsMyy5pfbANHATtRLs1XUjz",
  "key17": "2vMpVRnvNoAB8k4NdRQthvsaGDnTwwgtT658dDiSVtNuKBy7t7NSjMHByQbA26djvjBXgyCbzFARpVWRp8ezk6zd",
  "key18": "4fxtMucqw63J4V8PoU5TELpQ6ex2Th5C7bY4tj1GYBmV91R95ThipRLe7CnEHVA955K9JhGwytnBvys9s5H6ngca",
  "key19": "uZ36YFLJxTXhawVYP5fTD1u8MjTqVjoswscMop68gycysQCdrxvMyhZfXLuxSJdwAmZuKjqR5AMRstP5moGY6Xd",
  "key20": "3UDUzkxVyg72CC3S8UWkLqW8wY9JxcUmV47nEeZhrwZqtkJsvp9w9QUHmSPVUDb8WtcwiyvjpneiYG8b3S7SA6UV",
  "key21": "2yvfFFg3PqF4TMvQD7eWUPapG4XTx5vATqaC5Pj3Xnj2zv58tLRDmJ6AhkKTfKdRyUy8z8CEyukXZ5A5xicERwNW",
  "key22": "4mHajXHnH13WPXpeWeu3Xjn9hdGiJi6qa6iK1rgyt6bQmo71dgQ5qs3yKA8iZ8dHJ5CFKat4FvsQxqoNr5dWq4Sd",
  "key23": "c4EUmTTQYCGZujZavvZ15zs7teoy8oVLisM12LytrhxzhmGmb2NExvoCNxGNzZgp8DoTQRZjjfmrotV8d9j8nFb",
  "key24": "5zL88ou4beWLcdoYgZZEWgoRCgxzF9xgVbmtfhM6KzJdegzHvg6SSoqTdJR4poT1d4qRYzVkKXVjYdp8N1794wjD",
  "key25": "5EahbaHbNrBStGQnGTCXEXYSXnVXYoKFnFoXy3mL5g7cF7XXg98NT6FxkMijHm1vcFtK1ekW3pgk4k2vMkvii4Cx",
  "key26": "4dsomZHMPgrzSQ85XDPGQjLPgGU5jAd1K9ZZhyDuLesm5whUVPtaqAGHzMVHFbRBt7Lk3PjDrWTb2SkSdajGJqN7",
  "key27": "5GAoSyn4E8GvvGU8PaccyS7V4TosrJNkN8rGdhGwt2JJkxoZwXsT2sgSCeAdBwVxgUcCitZKnSdC4rA7fmR43QcE",
  "key28": "4xCR7pnJ16XUCCRVRmmNVRx1VX5F8hwPtL3q57kv9vWkKAGnb6nDhLaneTudgqR5ZNsbqFANvJrFMXfSNx2eg1Kv",
  "key29": "JUYJ9Yri9GxMqeqP5RJUPAFniwcje9wkPY7SKTNAHykYGsvskLbMv9HiUviV4PtwVmNDtV3m3JXx4ZawRxjckij",
  "key30": "2eRneBuX4Q8F5Wj5hhiQ7Bhzza4iyhyviei3zjV1QjSw4NesowFT7VKUYSD1wX7bh5saQCvta39Cg461Ka3Y3s2A",
  "key31": "3zXz36qEMG9bxLmtZuVZoALQDGALBu64ti2tkvSdipgQM2MhLpvtGz88HwJD6L3uUscUMNG5bhqciipxj4NnjFAn",
  "key32": "2MEC55iemtdpHSBv4FhqcgXKkWxZW5zgX8fahHjzSmWp5FtQH8gzftpdkaZBGVZTHam7d1Xxc1XwWCRQHT2wLBo",
  "key33": "2zoLCdwvs2k99qT8twhVV5J9fD9QqpCoJM6dJeg1AMFMvdSaxq5eDfhu2ezhwRA1FBHNmv3fLsgK1JQBFtWjKTnY",
  "key34": "5c4K2oPqtzeneww7ZZtCe3Msf7BcVLktj7UVQcT9MFyxWznwDfFYVRz7BBUyVPhAfEi7LzqUWp5cCzRtW2e6BwKH",
  "key35": "YEG1bJmXtPM6x3imFz7fy2g8iWDaARKckVuPV49BNFGRvx2eacVSwjssB327nUA5wR3yQFb1GpWCrPkgh1SRfrQ",
  "key36": "65rEkW4hahnYXhvJEP3MtN4u3pyQAcKDHhgGKuajkkKTnwUoKgA9W4qirguAfx1DZLeizgFikwKQh3XF9ELZYJHD",
  "key37": "2Rwha772mMR6tnY7kgKofGTTaXDDK3RavCqkoDpwqarkuzPG6ceWUsxm4NuX5Dceirb59kJVT17m3uJ1mJN5X9Pb",
  "key38": "2E4LEBCeqdEVct82ixQUYbLFMR6aXAJyVmtGNNXQVd2kRDt1XraUT5tvqTXuz3Y3BpUKMuJ342FiMudpt67PdKAY",
  "key39": "4imRw63vz1oegjP5iEKCVYfKiNNrLzFBG5WZHHok8GX33zEbHyyHaUNC6P4mYNUNA4ZGEEiFXV5yLma8svNjkFAz",
  "key40": "HDNtBVoc6u4Z58aVntQ5RymmYC6ukQuePwvxeJQenTgu5qvSaiQcJX9y1JPxwSj7uqGddtg8578cSzEWZ1AZbYY",
  "key41": "2LmCRHoiLUkFdwti7QXw4T6ZsryQF4jAkGoFtqwn4BLiBizT4uxU7LzPkPYALgkbFFt3LhzSkDpWxKix1N8PVqCC",
  "key42": "4vvoHX9KnzaNcdXhZPBJYzoLMm4HVKUPAdisDhuR62pgcU4HLChCf1AvSNPUKMrp8iAbygBmN455Lmw3AZcT5ocY",
  "key43": "2QKe64Aic5qdjLhZm7TYqHSuEshpp8TGYQgqWG3Du2pG9GAtoQneKBt6EKwyhzA17Jf9QgiE5vnvaKgNu3RkWU2C",
  "key44": "3wVK8RNSUwKi53QZCAz3T7duJPYHRshyQjm73sejWQ5TbzqTX3qyy1z4CFUVB2VFmPL48rfpDdPWUxCR6YWFccze"
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
