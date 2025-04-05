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
    "32VDTER7iGzLhGxXiFzvTGy4meNkNJjueU9A4RWkqFmPhVADiwNAapuv1XKuPuEuCHVE8Fjzs8wknKALfiaqnDBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TfgDGAnJf7kb7ggdSEV1DF5xL6KvimPxeRz2bjxApqJ17MniLyp8pkA7j475WmA4sBy4QCML5yjWTZaV5C1rC8M",
  "key1": "4si1RLpWmeHrprzqjLzizt53QUHnK7T6HcwEXBsGLPc5bf3DpgKxHD1oTaW7xtxWmKkLt6UqQ2AiLkcSg8kctuXf",
  "key2": "ctJcZ1XxA6uyEuBEER7JoHtJwpbJQVKdqd1LcYKZZnazRpkSsBGf94c9NA5VUxZyTsSSjuNE33frFq8nZ6BpgFL",
  "key3": "3AWvjNmixwtX5MEz3X8z5VQsifmFXzbUE5mWu3kjHaVoMUh1z5sDECSzVGJcXfMCcwTUTM4PLec28osyPcyUuRDm",
  "key4": "ekJm78E4eDmik496WJPpaKEDQrVZhniHbcS4vL98VG39tcxFav7YbeGCR6nrxjvot4EFJ5aQ2N82iS9WAqv3k1f",
  "key5": "Kdw7oF8Pp4v6BAYwEZ2zVKUg6Pj5TK7eS6zU4DErd88drYPP8Ew5ArPrbPnTt4dAPEgKVcuwpXaGkPtRzvSxtm8",
  "key6": "brL1HXJ6nTCMzVzn8RwCQXbcxTjp6vPQ9zWbvwcyxwMd9kNwHuurXMYWP89GDnM65ky7YUS2DDsLUgttRczhmU3",
  "key7": "5aiiMg28ryPhMD3hBrivJ9itsC8QjMdVDvngbBr6cpKE5q8vjce6Sw82C4Fz5DLEavYXUuJn6wyrDuSBrWud9ECw",
  "key8": "2jz9S6d1Fty1DjZpfXjfrGrpZGGYPrXqF4p7h16XzaeqHWorGK2kLw9YSCLgsH1hxvoXpoS5HUMzDELBKBYGSxQK",
  "key9": "Nwjf9HShgGZS7PUz8PeB255B9C9GChM5NtUQkbNFYiTfZeuhcCcDouiFDmZ8PRdxbQy7A3FeX4T8hzhuYfydM4f",
  "key10": "643dHYiYLoEum6PTwvj7kaNDeTERm36kc1ZaX36aYGqXDbqmTaaSX2RytahkCkLGvw8CUbwRbAq3i5vCd7fz9y1w",
  "key11": "582C4B8ko4rCFcs5xsz4NrLQewrwCWd18K4F21MRshuG2z4RZ1DVrXnykMcJWRVfiUv1TNa5hJj4DAkufjQncnKD",
  "key12": "4gMrtxnx5Xnm7PuyAasNkJRAytAtFmidZzq2k5awP9eNBu3CyKGm8GJYkcJxkzkNpkfjpqi7bXGuXiPHbLeWWGzE",
  "key13": "zsTn3bw8nTCDF7jmDpRkTapHVMbEfKm7uCchzEFPmrY85gSDZAwjaJJzCwBS3ccV3U4p7M8s6jq5r3SHUfJokU3",
  "key14": "4MNUKP54r9hroSVwtrmFzAqi59G57ZCFEjVLXoWaq9FuoJ4jefpgEF9RPaoMgfC667sF89o5fiAo7hg32MaNrFtX",
  "key15": "64BjXV7HCRsq9jjgkcdeBJFX9nVwsNCNTUSUzVLLZtE2M5vYVyF6WbipyeJxXqag8LyDhu4f5HXdHQKhmwzWSD3u",
  "key16": "oH7Q34aF6rpMdE1H4GLcPPfprFpKCC9okYrBEkjsxur2RX9BXC5hUWj3m8xhizUsyfyBo4CsKTTeAadZu8US5My",
  "key17": "7Kv84TZpBvs1w78HofjLceHKspiczhmFwTHoKjy4EGM9UGc9KRTF1TeF4PEbDkGf87ADtjLa9Gh5z7T7y5ebENC",
  "key18": "5b4nhnsRMY6XL8am24BvorubdGpN6hGw4HPadUQFJB2EZLrSi2YA5EHpG1GKJbHzucSKqWiVmZtZJumgQuLPx3Lt",
  "key19": "mUmg7rry12ZDyZ3g576cxc8PpsXo2VYVfVgng1NS2K2G3GHCF6ViNzhQ8EpMheoQRqaPmpaV2KPmWirTa1CqBFM",
  "key20": "2DyS2amxdBo3Yuqyjpc7Hp3yAmD2bcEQfErwCs8ZgRTydTvVsJFKV1a6bk3E6Band1a1WiVCy5iXcJzH3BURbgRM",
  "key21": "3p92KLYMvBr9EcCzKktFCBnAo7SCyYVfXWkE5UR5dQLFS9FtsAy74zqKrnSEcUyJoVSkprriTUsgTauXFQkgx6e",
  "key22": "jsbtgwTxxpgWRqr4UmepRtzojwsMu548Awpi752RKLN59HURA63ThNDwq6h2L7Jy4W4fpjDHBP8C5V7oATLsAhp",
  "key23": "4q9HuH7ZFG6o9cE5oHTktLpU82UP6E86t2HvjudARpn7UTxyLKkAN485dSt6LGnStWLg2XKCvWuiYZrbrAkkHwLA",
  "key24": "28FNgo7CMh718ChRCqsdQCsm1FHbYdcGyhaFH6dH2sAUZE4E92YZ6Aisv89EmmxAeH8rhVNkrPoqkPx6Y3kfr6TH",
  "key25": "5TxKbH9kFbxXkWBMApCy9upJsS3ERYv7eE9WT28y7X3aXDLvKtfjypT1WuSjPA5nycjAouKzUg2MadFAtXb57xUF",
  "key26": "5oyN8YSeGmfMU28h6kZjSpx8ALpFBsTgiavbq2fhAMS3DbnRTcr3na7skxrELuTAY1EFeky4cupZUGtAqTicfg3f",
  "key27": "4MbWxZm2DGpfFQmTx2dGWhNkJAVGVM4K2DYNEjZiCR3xKDW74qjG8w86k8P7zZyejZiHat99FJPg4xEaynUGwwCp",
  "key28": "56Ey6mb99J8tJ8Y5mkMiG8BFGEwUfPRWdkwHbfEn6gV4K3vQuB7q5BuuK4JVY17udq3cR6JPajEgeozwmAmv9HGT",
  "key29": "2X3V9ij2fpvLoHrTXZuozr9dBdaDuhP3C7awSHRVH38k1PNB2cnn4CTGsWJj4UYUUaT96PeP7GLJ5XhuzwGUAcLw",
  "key30": "FpVRdkE2y5Q2XuU2f3DqAtat3KyGPiRaNoTmmCPuDrA3f76gyxR4USDwXbp7S9buLjcYwAgTGm8qahxphiUZHoS",
  "key31": "3ybsy1Lfti656s6VYTGd2GU1xNCrLkPd1Xn9nj8vhUrZB7cr9m71mha5ai715iE3gz4bRveA64DRF4PVKzaxuUik",
  "key32": "3NZxGveMpdfwvceHaXxFjJfUcuW4SHN6BeTDnKUQMsjfXWNPzjxmVT8tpT7Ra9q5jNvKbTs1fVrAhYGgvyrsAKY1",
  "key33": "4ff3y7hDxpxx3YjDjL1TizHrNFSGHrLoz4amWUt4pS4GJcfmbcWMGcnPqLM55LyeiL8CppDvaaTseLEDpojtouSq",
  "key34": "2NZZKQNjeJnFpGegJ9FUUj9yjWqZpEqPsXkcdn8Mc8JLEyA9ZEQctxBG874axvw1yVFtNZ1rHXRFocpMjYevQVWq",
  "key35": "43KsWFmvFyR3WSYaRGmC3Qxa9oQi8PSeW1HdDMgnDCvPcYsqY3WYBHtt3qNZfQPoB18hYMaUCNq4q7GrkYmjkt49",
  "key36": "67aiikb7UNhHfaL5HbNFL6XutxYEGHGUteMTCfmgWxPQ7xZZN5aJFo6mxR4uf7RhBb3B3aWFXic1zt7RqQB9oBWK",
  "key37": "2M8sQUKBYLSRUHzMi6Via4gNPieSX79PS2rJom44V7hCfVmjcSgJnbNkXbEUnFi7WNqpcgBvk1ZVU7T5wnF3rMPy",
  "key38": "4atDswVwwVDHAW8auogCRQBShyBVcmAyWbFKYHS5uiYhNkSVZHH5r5hyUtK5w5JUiuTimknrSDBL96uNmPP137sj",
  "key39": "2F63dbsNJPQtr16DfkmnPTSLBL8cyti3pwkPw14KW5LJCnPhcX1co8WKfdyyhoupYKNuLyVgcGPMBKVr3ZoWKTzP",
  "key40": "2CvB6EXEfcLzDkGxxwDnkC8nottRgtDwgf8PiiAUngPdMEBC8pZbw3jey8HaSvkC3wTLLCyqeMQ7YgXuza8AVmj6"
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
