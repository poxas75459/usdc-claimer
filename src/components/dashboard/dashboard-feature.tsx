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
    "4QVcBdzWuFDwXBrS5La6wEUZ1cTXpaLQ7Q29uLNicgBgMQCeijay7L73j8knsjcUeAVt7YEx8DX3VkgJ2CbkQRJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pLKGpg5MJq7fZVrH3poJqucZkwUU27kjYnfH6SfGoeU6fhWvcN3MKnWHUsa6v3ARhmMsmRzzbDXCqtf5u2iidFC",
  "key1": "y7NtprncyJXdaB3EhYmUJfoHRgZGk2faYEdNu1pcegaX5xg2g3LtVQNmECkvf9LW8WC3E4g5zJjd7eXKBYzFK8b",
  "key2": "mufLPjgEGgNCZzXVZs5ZxFwWgEr3ymURGFEyh3BysTe6pTYUoPqTvwGggGtmy7bFAwdBy3dBVnYe4qXeVBNnEFw",
  "key3": "4mdFMC7wZGduNz25WeXGWtMG71m9pBWWmwjSoNJRXpTWz48qGCXXsFXx79mYaXFPYBYF8THuNA2bzA5nKhBKozK5",
  "key4": "sPchaqxLZiHGYwGGsGAoVppL5PJ6FJbCL8JcnGnm7Ts5Zqwxdm1wn29Rjfnu5UXUjYQvpHXXu35xmm35Q9DjdG2",
  "key5": "2NogQTEBLmeNmdFa48MvpV3qunJ4W9sxhcwAQMb32L1RFn2VeZ3sVs2ieRYnvPLRTrCSN4N8WfSfGeVE9hedjXS5",
  "key6": "47QyZRJYEEezScJYJrspkRxgxfR4GrgWYnNr7Jj4uhp31EFQudRjTj3wEP2hwEp4hV6YZatQGwVb5hw6yfRuptix",
  "key7": "5ErmBPcNAYtQ1LLHrMZcNX88eTSpMewnNyuh5eQu27eYYek2zTenrUi9TSggdmrRkHpc11VSUb2ny7EXfHZPyF3W",
  "key8": "4xGcAxpAnGJX4dqTsjXiPMiBiJAgGhocKDfZNDEGuVoNFkj7KuKBKsR4yZK3mJ7y2jkLaGwKDQ3BJSk9ga51VDkt",
  "key9": "2vgqV7RAht7ZYemdz2BfMBVX7eduSu1mFxSpsN56tfaYxotjEadTPQGiS3SbEcYPCucPwmLivY17i8vysPXHJfKX",
  "key10": "2aPCQa7dpM7kL9N3QYMd1CNV5NFGoGXMHwh5YsoXS7H5cPw9HVBLWzzL37sSMqfYGeDm3ApmkNoqBFJYQyEB64bE",
  "key11": "29ViY7nmy8Eq27FPGBXpmkkBk7EWb7kAqFHmU1kcrzTigcMq6fbmo8JNtM7WV44KenzbQ7ef53fZpoR86gEz5X8c",
  "key12": "2mTwnAaStT55aFwmSYwhYQs2bb2kjjDSa6f4vMFsYDpcC1uViPtbYnuZRJnNxNepuTJVGiDHtR8Bp3ChqaG72kax",
  "key13": "sLSGpUkZqphh5NcgjZ5F3LqvXqs67nq7NdQk81H2NFei2dptm41gbDJHRXqQ9BmLx2phFfzTT6VEEVT1AMYUPyp",
  "key14": "4YomJ7UeqrCTTunzhdM6i6Rn4nD7eDP9YPNwPheVbXt52PTeTdi8tgJT8SSpu5dL8HaS8E29cgTWVRCKExSYDQCB",
  "key15": "4tNS9gRhqVPr6RaTu514YKqes4h5veb5xJhi5MsNsUNvK4xYZG7k9NXaH9Y6dTuqBSqJ3vdaHNYt9zMguiZX9u9Z",
  "key16": "3Ha53isWngFeMX6hvECeEZTxtEqVCm3Ddv1uRXJq7n28jqeo3UcaUfm2rCQNUqGvwMJeSgnn3gogSU1LVMfM6U67",
  "key17": "34WWDMXF9cJr1uNK8eCmyWGZhQJSoNyHBFo3QK3MeuyiEDZocZ3xeVUEFdVuAaSKMny6BQPbyjWadaq9zRDSTptA",
  "key18": "5DAEYBvN4PYZLdZ5M6Lkdy2Pjn87j6oGrH1e6wjmPjmDUgm79pfFFtxLMVbFy8mCdUpcgJm6LkxpESXtwabgU2Xs",
  "key19": "34GbwaLiNvEpqXi5h612oLn7k64yrUn39iTWbyQW9WBhMZ4HLBSRxLEpGsd8R33CTBWQgXxsRo9yL3S9Mf2RoJFc",
  "key20": "24CWLBXJY4ui89ghBabmTbv55qE3KjQJGQQAqaqHy9iZdnv9mjJUP2t2rF9cyvoEpuYiUXMzF6mk4oj6bHLVZQYb",
  "key21": "5vThanRLhaJnFwbiiVkWu1KQadxY8TQPhpB9Q7tjCq8FuBEiwBvUrxsXWA5KQdWAzHjtKH73jTGn9WojDW9pNVvJ",
  "key22": "67MkYsETUh4FoSNdVNKpevDgcSS9G1q2grrkE3qv5nQdkzcDB4goULYL648BUKKDfCaeRo6mw3cvsNjxVtAZDVyc",
  "key23": "2MHEUtfUrxwZtQKL48gaH46RuMTpPHKFFTm3vseq7VuQyFRNjRaqGfh5kPYrHcPiy2P3WLD5SXkU3kC1wkqRP3yx",
  "key24": "2rewXAnkTdL7DcSmMCZAPPAY8urCswViETZShem281ojE5Q7TuNx7WHyEPrjgP2xmyRpwDC36RGzzzRFjkGZR43S",
  "key25": "3gvD7HjuX9LFPL9VjRpe2wFGAh4fwcnJdMjTvAYQoP1nYBzcXmhM31Ust6pLyCkdBHEuhoZoX98yHHmrX3eFuLiT",
  "key26": "3fPFHZAjFij2wqPXNKbR4J2WMbtpUpqw2SREmcC9HEFAeHDKQvVyWzadxTEMVwt1xuhuAm5NcTNB1sekya2m9jr1",
  "key27": "5TUvsHu2TXzzB297desotsftgRZePanXUDHWaWHiZRWzhhmD2mxyHDDrF1QtwzfMAVfRDXKj2583GjiTPRZW7JEt",
  "key28": "H2zix365PGCCtGHLUH1nk645w1by3Hok28UaK5HPruPnvZzinfDgSk688ZhATAmzw196PikoVTmCnCkggJMbXZA",
  "key29": "42VLiktQaJoSGvr8EZnztGAYK56F1rubao22gnircoUyPsSXppWQqfKCqJ9Z5J8Dj7zuH9suhpiAufLzo2NDTVwj",
  "key30": "4b7LyXvo9cnDRMa5krfjHwj7Cif2dJJWfBWno259yqP4KPndXrR352m32RparMG9bz27Ge9F8WLHjBPmk5qRBwYp",
  "key31": "2ndM41TG649dFMVGBGcX5GkM6LxST2ypJyb845QwYJL5kH48hYLu4FdJf7HUxMc1cGnd2CgjfYxAMhsH5znQSQ4j",
  "key32": "62kpE3jBZ8MtCnNRVhtkLFHNS6hnASDRT8tQdY49B48Du18rRwzqTuveVNdTMumFHKmjuXeudEct1rFRrT2RcFJd",
  "key33": "3WVnkEDhBpvrH3V1QjnGQpW6orUm3hsQTrt3Wab5JFDPY2KvcHGriQeUH6bhQe59ezaz2nk8YxnNpGFVYUb7nMo3",
  "key34": "2CLcmj7c3haHsDmEyWoYNfaipcBB5v63SzyxSesTyncoExoAhosQwfa4gigfb65JLHYZ2YGgt4AmnA8MSryMvSaM",
  "key35": "PLoprcb3inevCMf4gXXPRACbHYs521FkshKeJJRuokox6oYcfeiAYXfBSThW4BgN6GEWMHPfwNYXmaBx53u9Xxu",
  "key36": "5h6HtHdwugSZD6efXt1CoqwQLfw2AD1A2m97D4DQAnAutcuto17q4sz8K4QUp7QDKqSG7wup9TqiR6PxDU4cH8Ad",
  "key37": "4FSZdyrxSWMVk6vFqLwdY9Xkkt9YnCSLcm2ooi7TiTXjQzdqdQFkYjtmgSg2GCDzN9nYkB3amKNx2kcmpjEjQ4WU",
  "key38": "nL7D28y5t6qeRTkQKEH85VnN1adiABt3RTUzhZzpk5fixxwgZjfc6kgbUkqPGUzCviwsWzrnFnWAvDiFpbz5aTG",
  "key39": "4wYPEQod4jUKsTcfeWxpgdcMg3qo9GESn5XBgieCHgmUthrrWdfA99ePs5r71GC3i9595Cxz3tYBVFcj1UzMnJAV",
  "key40": "5ooXZJWipPLJJRmGuPKZ6N3jT1cQHX4coS9HK6e9Y4aQ4sRFCorEM6UgbrAbeGkXcwbABZasZs3Y7KCKXz8E4GFV",
  "key41": "4ZpHFghSGj7LR82YLU96ULCMc6jJocmfTErPpMGonSg9koN94TVHbQN52cdKtzTL9ksDku25fQKMf7ve5bhi976R",
  "key42": "37t24ajx3HCZAHgYZQxAGohXxDoX7NaaGbiCPdivojg6xpTF24madwdXr58fEnYv912YywUKBPDtXxPqpCkX8WED",
  "key43": "5jriFKdWcyTprNyR2Vx4WhMXD5tzsVgpJkxkJWEp3yMcGJUcwnmrUTNqDXZr7rn4zZ3YL3xPDUHR5R3i86PVGVGk",
  "key44": "2cU2TuZ4J1TEo4f1kC5P7WtsK3gmbmszdLBPNxgSyNLcLhiWFs9mrpg2fVsyuN2syp3u2G8966FjnaGk4yfjHisA",
  "key45": "5PET4zUU4rBzk5WVNBVP3cbnArfkwDPhCFXMgzYSL9255Wpoc71Sij12NqKYWQ6c5rY9s4BN5pfP9j5BfNWfFfPc"
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
