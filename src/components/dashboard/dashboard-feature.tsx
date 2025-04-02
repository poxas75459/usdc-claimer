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
    "4ZyCHVU6MYZsP3n8SLc6B95Ef6e8KkmJf8eS4zFRRx32RfFuh63YG3uu8MSA3iMup9AFaJ5BjULZ348QqxbcgxCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n2HrTqEb5WM78PFqyhdWcbgRi1rqLZ28n2GwSpRGKvQ8ebJTCiPRYYCbh7WTbREKMtYmyuC7odQVfuesKJ1Z5if",
  "key1": "54N2bUC5NkeRkDL4nVWHnmmjeHVegDHdgdZmJDsi2cDNAiNU5brF4xFo9o7ACHrdmsDtMDUAt6pBbKbXCQdBB33i",
  "key2": "2W9XFBWqYNf1vXjBikJudGZBJmhnLKitbzt8M7nVUCweWwCyeitsonXTCwndUxob5rvJ9eLrKxjicAf5r16TRTb",
  "key3": "AmAZnUDPTTYYYzqkTGkifMDpfXEMmRctQFYLEXoaRp8hrsRnqbMbVhXuLDg2GX4Xa2SC2eaR9CCdX5N4eW5FmRp",
  "key4": "szyQgLfiXFM7uhdQ5TJ3JbbnzDq9A1sfu6eym2bawpvbmntzXAQW3apKiF8LioJvm842rsTDJErn9rFdkuDgp5e",
  "key5": "66KxAisXEt9bwoFc6qoqiWvJrgtttzk7BrZ4nkXZ61ZJupBoXtdiEinA1GiPWvrZumwaiC72w1Dw7LWDMmaMPj33",
  "key6": "5dczvNFcNpPCXusv52WvSycSRM2M2hfDHhPoR7D9MFDbxEnN96TtF4a24ZUscHPG7FmUR1AKdhMkwFfZoGRvLgPe",
  "key7": "41pTuGW949JAsJKzXKQPfDmBaXdmhEqQC18dcxQu4AB5MUAaMheJihLAe3XUA2BDoqpH6FfvkNPiMQENqhoPZ3h9",
  "key8": "2jajXWGVdaRSZ2rT8UbgPGDt56cfn1gXF6pTKQcN321DzaazdVew4hLZXg1ENtwAkLpKipiYB5uvuqKnVKyUcb5Q",
  "key9": "3DzRLwmrnMQoueFwSmZobqBuuKeyH9H78iujXJMQFiUbtPDWvfU17yccpNKAaRAoRkNE8kCmMFwsNwJxmFYBmZoM",
  "key10": "26GumUVpQVWbfdTyxPHD9zUCCDyc8KChDwLABqUaDvyB7GbcCcmTKuiSj2d885HknqWoDP9dwYrDFNdinT5xvmKM",
  "key11": "2uDQ5Zzgysne87b34CGYJRpjTyb1JxPgh1MbTxuVuBtxtP4mwEoi1qpT9e8aeryC8zZPBwXNwA7rNyeNLvByg83B",
  "key12": "33Q3cQZy3dgebfMvHg2KfQKPjN2CGzHSwsRV77JheRStu8FnH624LP4ep9Pzvhft6YX2XUrA823poDX7Kq6Q7ntv",
  "key13": "4qLotiqsYinjhBGHxBwJ16kyzTLB29wSmekAEKKfgePd6UrGYQNW8goVzGQfSSs5rKh6bq3bvLR3aEwt7NnH1r2T",
  "key14": "3judURYAnk2NpwPucLjFRjA2KSCFX57QkEFGvP1GL7N5TTr1FHWeCioTLFCMoNNqEEMnkzGTW5K4ZKDqnjEYpGYG",
  "key15": "5E69DABpzDReyhmGPoEGh5zaQebKkmLBPg4ahEKKVGgcGe34HFKpKwJmwDpcJZKMBoByTx4fWYevFKQ375mzmNQ4",
  "key16": "pyPKmLJXbpibj4pM2feBpcRFnLKuTMkKF8nu91LWdPc82o56bFexAq32qDAeeBPRc4Df2t65fhtYJEkhDPcKeAD",
  "key17": "2imaV4wgXBkMMA8EfzPg9n9qeAMvwY1wAJDRPXv8hGdRaxVNmz6VTBzeNYfYZCAQgJ56J9iSyY1C1ghdwV4tRyrP",
  "key18": "47YBSgTFgq9EprBicEnxSRM4JBpxuXSbJqo9QXDTZKVY7Zju3CDuRZjFqkmQB5waaytybX8eRpG8aLsaCDEhxZou",
  "key19": "6732Lhd7H1VYpx7BXoBTvi99YNuP3bVZs5HetFqnoySJFFYpjDsYE9yxfqTYcSdkYrfJuAXooENvoBrLxZBzGkxE",
  "key20": "nvZkA7dUVNbMN8Juze3Bj1n4iAeskW43HqwYskDijfu1Nj1Yzd9sDKbEAUaaQRuQqBpk6B5mkMpt7DrCDygTfEZ",
  "key21": "5Xhf8SnR4pJ8anqvxB46YEYjU37vjmir1RS3FGt8iV9qkQeqY6BUdcsXV5nt6r5WKrk6Hacapfkg3khDpHNrmBBW",
  "key22": "2Gw3qZdSKzKQpe5uaJQBegFA68FDjBneYzGExTudXRsvkJ5k66rf3yrDgsxX7VhWs9HNNp2NmqAQXP9FN42gcgHw",
  "key23": "2Ridkh1RdfA92KARfrProS3UJ17mkJh1v4ngL16eRaiNBJ2bpxyRGmFUHA6xEdkbRDz6UAmJAVCd2wbPHPPyN3EJ",
  "key24": "2fEzFzgZnVMGjbbxCvcrXNvkfkCPqMzKQh91ERjmdvsgzioN9sXowkEZcDqkZQQyxkHEUTDdsSawpKDkTob3eupG",
  "key25": "3DZG4AD6MXs21bZfYGwy5FNEqqbAHe6kKsxURqQGMXVtbcGGxLjbvMWojd2yozbyUtCj6kyCNcuX3GbdDW5Mf4CJ",
  "key26": "Tn3P5rxVPCHrfugGWwKgFeD3ttzfKUU8N6uTjV31oCJ9kwEvbRdv6LMXLEgzJjSdRYjHM1rpYYiDivEgAFxDZWB",
  "key27": "4kGJhUashh9hjUJvcKZ2uj3rBs8zgytsrYjrTk6ShywAoKuEWw3oaziNXyTcdBGo4TJN3dxWHJikKYFTvfBB1jvA",
  "key28": "4h8bW8MfD1DYXQfUYFyvj1yHCFcgKJFDVRfVoNbVRPeLBiX3TRZK9GUQ2m5FdJN8HEEDewjaqCeGBhLvZXcyT24w",
  "key29": "3ZLZaZzeG5nrKSpqLps9naXS3copZMi2Vyyu86Eoaf3ZF7BxLgJQdonHCKGvNxbjMdBvRjPA57UWgviTVvLNy7Zg",
  "key30": "4zy7gJafqLsJzYLoWHsdMkMzai2JrmeeARyYu2mugLAFtUvy9J256WMSMpMSxs3dJ2vKhbjp6Csuopacb4fp3BjC",
  "key31": "4MrtewqSwvCVPyJoDE5286T3RKVUkhmGdDJDApnSC9nFsUX1CeQJZPFe4t4b459v16PJQZKSeUZBmBeJNHRmrVsF",
  "key32": "2h7hfgPsWmgGBhMTNbGoUE3QfWEbRTKi8P1ZUQiHcqMvcptcVhunVChvHe8MutRAGxw5M9GB76hATrDvdfNjuGsk",
  "key33": "2G4Gie97UqRK3bKwHcoV1jGEd1a2kcqu3JzsTs7XpBskk2AVaaRLHbxRdiEpwNXfsE9Jdzuyidxjuek9dUZhrCAQ",
  "key34": "3B32orMD2RyGvxKkxVw5DH8FB5oWPVsZhwah73AeuenUFmb14X14r3Eaw3EStKcFVXK1HpZ8VTKNn4mfFDbU1Rnn",
  "key35": "548y4vZ3M4Le8grzigzrmJXBSkSjyHm1pNLkhCBweixGqFgyBWUF4BuTJZoTrr1AoxxtmDikUCh1HWdP4Qm13mCt",
  "key36": "CvF9pdAatyUNjyVvFGofrD6yjXcm2k3Buv8piQkuFDGKaVWQe9tLDiFndA8UgCnrGo3Uukfhntad8bE7bEhMEJu",
  "key37": "3t6D1wf9ER9fooEnoP332mgYPjq1Lzpvsvg6brztHH68XiY6LVuoL7PjYXHGARUCnHz9jm3vvmpDes2bcEVpDmv4",
  "key38": "5GNzPMF4y8dQCp7VjsBz6QJ6zQqhAaGLiSjGb9vHPGS84fXuN2RkVZZupDTmeKdXcWtQyANEZ3DEoVTnkmYjE3Vm",
  "key39": "4YGy65Xq2A3JziXxtHX52JzCJGMfr9Do42YRNErdtuwiTzaJBHzxCAhVVs6yXAaBRCttPp8VDzQKDMua4WVsQRUX",
  "key40": "558xtt5rd8yrfT3LmXbnV939dgAY19r6z48Q1JFhUTjwiKAMj5wg8Yg2MPK1dFuypEJVrrYqSUGGiVqpTX5gQAp3",
  "key41": "5iSQvfyAY2pEVPzJSR2XHw8RighmezbGfbFom1uEvZivfUN4BErccURqgSH7PonEVf8gTf5vgeeTstZhx6ZDTATe",
  "key42": "4YntW7evvJrvAtiUKoV6gRK2c4wYqc8PRcSaWJkTdUqW2Zq38AwgV2RyzCMK1thzAcYe2ov8t1N7tL5nKjSM375y",
  "key43": "5BGgsHjam6hBPdskekdk4vqwAU3NZct5iZ56YJeeivoLTT6CwCDxuwKozzxUW7a6ibvoHFhRPTXikXsNiF2QuGK8",
  "key44": "zCiRGY4JJdvHvRiEMG9nA3LEHUe13MhbWAeyoF5mVaZLU1WpqjPhWjyZ1qFQzLUzB4KEdRhEjErvnuzAMwxjP2g",
  "key45": "3eAsqG8cqwBACE2wc92zrC1jfC3eihE1A6rSfZ8C6FXBYrUvkxXXALr6Bxgyr5xHvywtuvCvMjCrRNbabuek36Xu"
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
