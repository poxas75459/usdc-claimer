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
    "5yhJEkcu7MJpnkHM6i7jtPDQWYX8bxE9NgoGhsGeJr9trigm7bcR4geZco2h3ide4T9YdBzZUPTnxpVwzHqjvAn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WMPn6o4xqhbhKi8mknDb2gtkrRxF4NnybDhccNzZfvLVJW2f2m68oWuFvmDnFGEsGTGjsJmNfT6ZCr7ZKkdEKS5",
  "key1": "4Tdt81CDKjhpqzNbkMWDZCGpKMaGkJV5SEbqheRB7McWEntnsDhaMMx35HYgNfyJ2ctGSr5pf1Lhsc3KXiuctR57",
  "key2": "391FHyDiBe4s9oPkiYPg4L6QseRuJMZv4Yw8YSL2CrNFaekk1a26PztKLCBKwiqg9n7pLn13NYZhAbbMpZxVENG6",
  "key3": "5ip43qqXvGAkecCkmT4BKiHkc97GQHXaN3RJNqYN16MGnF2Rm1iGcniEA3CZAy9jS2xx4CSubz3GqG9XpG7kJrfb",
  "key4": "2pqPLkffT7eRzSogFL7s1MzZnEjuRsveNzzky64pC91mnB5nQZEZ1MB4EVmtbeSHNg2nSogoucF1fREnTJag7ubK",
  "key5": "2xPWoNBigT1gV4ySC95mMapcV59DWc2QU29H5spTUWocaSDeqNesmVEVb3uFbd6esVQ3CvKE1NoBiVMVyh26cVsb",
  "key6": "39HmZYPPrfHP6FaWyNwvNZyTUaUkMgddZQMmmk4sjuEyctyLmq9WjYEqK33YmgevsFeNLLHCdh4Eap8RuZDPJJqy",
  "key7": "4Q3WS2fjgo3Y8FKzsTbJph2WPU32MrKsbuvqZ5uEhiLTtggENzAzBsc17ARenhBcDHx4goMehKasXQfFqx85cFkz",
  "key8": "5sqPKSkHGNSaPqoa1jPHL4jtE49ty364eZb6vHdKFf3X7ZrspVxNizCPzWF9rRgoDUFyZKtqM2cEMygjrBmLGEHW",
  "key9": "qri1g45P1KwVckRQ1BszMiDbePagHmzvTWkAHM92tPx5ADDnHemGpdKQAYAFBRssBevsmYXpdfBPoz3rWMnYMvY",
  "key10": "5dgKtqQArm4Jr27EXbsgTruzJC8q69ss61tCS29wCgmHE2yw2T3XaV1JpH1xnuw1Rfy9TaZi5CtT6aXPXtT2m8MM",
  "key11": "24HSSs3PvCQdAdxxUrkmmYoHrUG4SMKMDafZPgmMvJzyfhnfYM1R6CkemdQDEg1N56BFWcqpG3LsJNqJuCXaJiet",
  "key12": "2JSMRjamaouBCHqvYZiG5K8JFTE4kBfBZrjs66M3m1fwKD4PEcnRdqjKu6GcUghYhhBrid2UXjsmZzKc8ZiJ2j8d",
  "key13": "3X5Ao3JTfp3phvX1R5RVs85X38oJKdc5EMP1r1VSohJWmHepUPVDGteanFMVfu37HcWQL1UQj6td2CFNZWQXrKA8",
  "key14": "3wu2eSLqTKor4cqNH9vmwMG9JqkCEzLVnkTuYo7pz9bW4mFxBPsAC3zySFji7wTiT7vvaxwZEPiNXT2PnWXvGtRT",
  "key15": "5nNQajDg4oncqP78bVwtke5YJL3FtQL9LMcSdm3ySYSCxhwWmBW4gpBQHuEKc1RYyMSCMgfwyz39x6yXbLKnBK4D",
  "key16": "2iyZMGSxCN5pwXc4NuW4wzFNUe7tELcLbhmJhWYhisCJsbD4X8cGiPPHiGNVXvrJumS6bLr4N519PkKpG9BgaPxF",
  "key17": "3ip7iHYYPWAvyYxFd48k4Bdhk2YALKmHdwDvKDrxd2RnjudVBarBNb5sB1s2sHZuSdb53vdhWEJVWphgXZ84PyTs",
  "key18": "2mWdgibxG3uE99N4NMsEAohzoQ81rdXvjDxydcQv4UBBUeiSuoaY1JFkogvGGwHyTDT5JQiUc643KjdC41hSzKCA",
  "key19": "3tFEMXc6c1uiBQ1RhvR3Dw9PmepRnp4MgXURCWKMHhaWBN8ZMU8RbFHybTiGGYaGt4MxDEs6vUhj3ey6qRyLgGYp",
  "key20": "5a7fiwnBaPVvtpedmCtk3bwnEssC4xjhufVtV2fQMiJCagdcA9WtjPfVm7kd9trGYeDY1jW42UZUmM5j5U3H9rdn",
  "key21": "4NqvkVsVrJZCVv22gTZvQrTAsG7R97wuRFhPohTVp6br2UFFvNEFyTreaXe86ayagvqD3hUf98C5p7TKEjaNRJjC",
  "key22": "297GKjQyC9Urh1SZHqjyZd1hFVAeNRW15hy5kXSitHjUdYz1duJxbKnXiVD3NoKzRrKGGLNxfAdbuvubTpCE1zXE",
  "key23": "5M8Apduqz47J7YfGHuMRvkcEQV6LXgaYp6iUZW6gR5zgtzRkDgEtm2wV37wxu4CcNQJaJCfkvhTA2Ur5eoA8YMXs",
  "key24": "48GPFcuZSEzdWo8bknm9oiiqNLVqbeknwBGDEpzBGo1PhY9yJ3zbUxUue7W9GdBtdtrADefnZVcoDWoB9nXAV4je",
  "key25": "4EqSUX3i46Ze7K7Jd35opo8NxJvMsfsKRqjkDjyq7gbpr4jCTZ4xAccVWf4HnVM7Mnc8H9M1T6Ne6fvRPbwpMW2V",
  "key26": "4BjjSHM2TKPsU3eTSTDijqCaGqmkLz3WhJArV2xBAyTbuEfAxAj9swsumjkkZkwh9Kt48784bDr5hTaz19vzCnaq",
  "key27": "37QxMF21pSKTweM77iwPdLy87HQY4UinFKaqL3qcqmu6wtZ7vfk4XrsfjGUfETyKmH7GGo2VcfwA9JAxn3KZt9nE",
  "key28": "5BD8EgSwdd9JUNV1ZtESEmKoqMVnTSXk3LtyDE3zTQzJPqZiyeKDaFhhZoCN4cucTR8F6v7mFSpeR4Gi5MkE1sfA",
  "key29": "xHZyF8eig1KZg3fcU95br5d7G9Q8UjuZ7XQW5u2SoywCF4qmV7stAkAbFf3LYy4XB6QWyajwNWGN4wgYrKR9gk9",
  "key30": "61QidGDiDpL7iQsm9DawKSCwbLXBpkgimdHT3xeww6gDUxEcitczybFWuXhduUbEeK6M2BmXriCYuYCbAZ6PcQJT",
  "key31": "2EQPXoJHbxZ4Bxioi3Dx8NPmV25Tn2KctTSD8WdZMbzVsXCpTNwPV9qc3Y7pdppM5PuKpSdL8t29ZNgCtFmvdjKv",
  "key32": "2txX2uqj4QScfC4SSPsrtoncrcUbp97ExMubcMaYoJncjHUUtNcPHN12sgpPp9ggJBd8VvtowgAmSfo2jMhnCAuP",
  "key33": "5zdsK47QgAwpXFj2MdMgANuGSRz9aHTUxc7WjCx2D3D56TvLDnW1RUmEG8rbikS2YCHk4NSp9mjK66Rrs5snPZs4",
  "key34": "3Yxd9K1D34y7ZjfE9gBHV9xktkyToQScWUTEJJ5MnaPgEKdfYxMDRRGMLFCMaiijfyMVW4GdS3E9FyZxcb2W3efw",
  "key35": "42kKH4GobC9nm2AW7Xupc1v3kKbY4ECe6amFPntQzdWm75oKiK995nYf5Gw6LB7EMui7CV73TVLBzMepo7aX5JWk"
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
