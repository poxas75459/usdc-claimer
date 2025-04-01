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
    "3v4MkUDdUmRF5oF1U7U1RJaPDuU4mu6nh89facLX7axfy3v7RMzmGo8JoNrf9YJgcTtCPCcwJPbhWrGrqyNSVb9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NZipTSK8x7uW5AeWKf6rxM8oDjQH9UCAFoXg4HFcX656PpLY6aPdCzR16JwLNrGjD5Aeqw8y1o9Bh6ahaNSZ95F",
  "key1": "4kiSTnUchAcBZakyT1ffu8Zwtm1NkvN8cWe6fYEqyfggBJ5cqEQhy9QtWCAgUSxGhRyA8bbNEzZvErvAJU4BAQUg",
  "key2": "3cxpHtAeTvhQ3hQz1sMBKeo69eMQ47qPANG9a1jwdw7vopxwEE7qH1gPBpsSH9ugHusxT8BajvqPDyTvjsj1XaTG",
  "key3": "5nhZyuT12n9bEqVgCiiPhXqDV4C8mLHnstJekqqrYFHkmqBq7sv2uyGTRCTkHsjU4U9UvTy1Hj5CBNS2L1eHDmGT",
  "key4": "5WXi778n7JXzQCZCEEuuBfX4mRttGDZCs9WThCQFF2ZSSUrP52oDxjS2PX1ai4UNwbMjDvDiJYdyJJt9pvYFh3pY",
  "key5": "5KN13FmA8rfudvcPh4AyGjyZFtMGjTAUY7GkyFu8zUMpT8WugcbQ2J33wTkGvsh64Nzk1gTGAK9N7yrEswQzsdKM",
  "key6": "25da9AhTHDXr33N7HVKPxVfBhwo1KmM2DjM3d3PAWRsRA2WBJnX3tnqx9arjF9Rarh9tj7KicHjwKnrNLatFnc3Q",
  "key7": "5NPx9r2ae4Zwd6Kdz3mJd6fVxFCRp4W8q9vo5yGRorJPpQ44oaZgdC4LhiMFNpbPAjoXBmH2zB5YrzXUgthggF7r",
  "key8": "3xtsp1g3Xs8xYmQBjAN7wMnZtenp2cG7RRUtvEhHC7e1XoXudjdN8ZicYZdf4myXCSPMDQQc3omUr43h1RXJPKCB",
  "key9": "66X83oHocwZsFQNZR1t3DJQgqX4tHJRZfN478wi89xHc7T4auJpedekPtHaHz8B5ENjXgJsbuHTd6nc9HAjE8bXR",
  "key10": "2bT29v5WQ4UGMaM5U8RaX8ooQcAG8uP3mKWA7crDEKEJkE6D82YRUkSXhPfTtBiC1CDCJYdwUzaCFodhjpEnHffs",
  "key11": "2A7eAcCsz6kwWPbFnNmCA49U3HApmhsZEjrFsWFT2Q3WPhAfqmZ75CfVb2GMKot3CftbxYtrF33JKZKzDbATDLrk",
  "key12": "MnkSV568x6jMb3ZVV6EpSuWaoV3zNS7UE5xp3aZoF27pTvpvxfVGhnmZ6SZAdEy3Yh5KLyGxArHTBUkehunYdhe",
  "key13": "5xBG3iZFjVUfQishKuGQ8fs9YG8iQk8ehAc2rxYDDPUwncB1SjLYVQYnvLERnLcARdNmBHTJEaSLgmH5bygRwi4A",
  "key14": "3fp3qnnmB3cAdefhDAWwrwT6m9K1viCpu12hF9fmyU5MjZctceT6RdMdAKbTLYxnAJ8ff26AEjyx7eX541HsSWAA",
  "key15": "67L3AF2URpDGfSpEPRdR4jjKKg6EJ4GSRdQpMGizNBMsNJNX5MKR6uvXB1kfr9Y9uYsPnQmYxKkK1wbgW3RYnFES",
  "key16": "2FvmjkcA3NTiSoHMbDy8mwtDX1Mj98zUkxZSDvFxCKP6jSyT3szp78Nv78ELQ6kGuAUeh8xi3zG9QrGsfNUPLuY3",
  "key17": "3RczF5QdCFsEto8MjB8HXouCr6sqFKYmtu9gvcXTtkQxeseoYWknMDZgwoTCrMnd6MxKAYnXAG1TA5fhwUx8Ac5c",
  "key18": "5gXebMQacQuST3nE3hWga1yvyyK9A2VLJnRELRq87vhur7SetJQ3GnwrhAPtakdCqfhdFkrnzeeDPd2DAW4RKXAm",
  "key19": "2q6Sy2dYuiGHFCwqteBQjd86kVRCGYFysheXSzFYYJooF44z4EqdHgFvuV35fVCvygJigsJupUbxqqbfGSzA9auf",
  "key20": "4H5PNGL1ghGPsVhzbLmq54Ytc9eG2yWxsMCA4SXxvnCzUvAYPKhEb3Bac1Kx6dASCBRXZfFwcVMq9xbwWkwWh1KW",
  "key21": "dv2FhAZRs9GWjPYRp6Ab13qZ3nzdUY4YF3eUKHmWgnFVs8nxFk2uJu8LVuWREokmVpmkbtdB2VtRtoMKUuUzyU9",
  "key22": "YbPh87YtULSeCY1DYYmZ8bB7qnNFukQnKtotrKFyCZBF7ewM4R5DcMsyR3dYR1tTfuhX7AjJJkZ7psWYcmoBf4W",
  "key23": "26aY2xofmz15UPb5BBreWkhY5Sx7CN9JUup3LbfEiYYkoSX3Gu14cQDyQtAXrKm3YFHGwwUYkgY6vtuEN6VCB39r",
  "key24": "2oGzwrunr5KERJZE8xHho2Zb6DNoXAKEk9ZrcpbN4rYfKohxzievDcJKG3znxesmkxpxZNXVmYcgUQ3AeHhkdgep",
  "key25": "5FsD7UhKahGpE3CthTJpWeroDYBT7LtG91UcVFEZqmG4nztm1EDMweicR3xXnHy2VBK93T27BHTC6CNoXzo9xRqV",
  "key26": "26bK2Wjeb33ZWnFNdoz8wiCnEsAVcM5Pkq2y1XKZrpg7KGbLBqdDRWasWu4q5CYg15z5sZic5hE4jjEucU7A9vv4",
  "key27": "3kNgPEcXjPU2KDkXwx1HKPxJCcj61JeV2SK7HWx1QCraCrEV85wHZrfZwKeGxZRm7FmrY6VVpMU1MeaojcqswknJ",
  "key28": "5StQuRZEtEvvxWrSd5Ti8eVJj8FbNKoVBvhvnY4T1tHTXdzHL19WQtEkhEGmS2QW4scS14mJUzjvqs8SLk2s2ie",
  "key29": "GQeAaHCCVhaafq4s7SGKsxitRjCpNHjwWnfn5bYSmT2h7ZyLEDV1BxDgpYGp1o6Vy46X5VP3xwHa9ZFpTt3mjuT",
  "key30": "5FnXtMAZryxfb5UqVhAQPznS5YoSi5Rwc5WqmZZwUgf5hvy7GztZ12beVLRB3RMtQtbAhs7b6NzfaMx1SoVEUwHq",
  "key31": "L7seSAvW9fwLmC6Mv6xApLFGMAaHwPtT6bomdciSmYvDgAxQjZPAuZHMairi6ttADQs2BpghymAbkPpiLthnu4W",
  "key32": "XVQyAKBQ7Fm2ZJxirKp8EWmbA6xB2G5rMRaS88SP8L2sHE4dhir82SwRAP1S7agXNNQebZa5VDWGaBTvHNuuD1E",
  "key33": "5bgPGCEE1pnrSRJ4ZuAiMv65cHUKSgE51miHeRFg2KKjcPzgPHXwM8am22gomaoYHXZmAZGoV59skvMBJ6ocsf4p",
  "key34": "z8s5byKm9JLCgTodm6zLcekrj2rTCz5StD4RRfa2FYhAvhu4SmMssJ5hdcWSFfyj6weAEuBhJZ7mtFp52U9EzUR",
  "key35": "o7LBMjtWfGGfvzGSTAcCZYRt4b9k9mb8nMmf1MiHWznG4W2yFUvkhfFn9TiKc6VkZLy6hvU3YqLyHSd4ua5RBDE",
  "key36": "4LZoCrzFQt3U5zwD525p7DQFLL479YadXiywBkk7DUJd75jCZdX9nEF6pCwsr32s34qw9t7VVoALjLEid1QD4BJ8",
  "key37": "peGPyNsYKKpa6doNbfPBk2gvAbUncaoRToB5ePNPnfzQ3KrhVDjwATWnnncRQy2ifo2aUnGmddgAaBencyySH3J",
  "key38": "3wEGKvm95a3Y6o11EhLPTq3WFeP1tXJwEXkDqAShYMfGe3ioJhq6fBhiSbJHVT3sRc1bhfo4yC6DBUEciMHivYod",
  "key39": "2TRdAcyHRS1bnLxXzuoWHEhwVU3cCYudDaKpEGZ4Mc6yETdC4tDNiFGDFNc2CaFVPC8iee3CLL2if5vhXLZhom5s",
  "key40": "2ykR3XTXBYP1kLUtczdwnouDTsGYZ2kEySGxCPrvNWhk3TiFcT5Lr668QMzFRBsTiAk6AvNvLae42dKpyBVWM7RP",
  "key41": "4jcu11MTWfymotDka6XoTrgnnQtMJf6rbFWud428S1pgaPNHeys6nt7mBK5eEsw2u9q3zh4CMdCGgDTJbKLzKbn4",
  "key42": "5R2YB8Kta4b5SAh7uapYB23Hg7d5tKazH4qjLGvNgsvimQi71CUenfie2rsUv5sMK6vMixxZPf3VWQsqTobDMcdM",
  "key43": "5c2AcL8cgzBkM5coXZFYsSidTUJ23mEGVMAGvdZgjNheqfeTb5uAeC6kYttsshx2xC1QUoryQPQyJYPb1j7gY8Gv",
  "key44": "4edED6mbuWae5mZEzW4PHxybYUwiEG9kt4uKbPvyEBmg8aGuQLY2qHLFTXWqMpoH9UaQi9KpTpPFoNNthPBRKfTh",
  "key45": "212GtmYmT9KsDeSjB1ALDsg2rSgNihYFUdYVQhXD2PsTLwSx381vKQDQngthAZWwT2yZgUDb6bhdENL9cSAdDmwk",
  "key46": "2L12LzWbw6DDAddENHtgtNkYZWoy2LsXhjumpyjAZVQwHR4RnwFc89Cw6txxqTZC1QTfYMmPngpXuzH8QhwtZyqw"
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
