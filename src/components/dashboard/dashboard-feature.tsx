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
    "4ty6tHWPzGpMrPKfsMxuE3RDLBzhp7vFULpQEP7uz9bYNkeJFnCwafJPkwY1Lb2QEJ5cokxXqL85wLz8dqEdEthH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uTsrxRmYdT1uYKR4bpKwQuGXCofMCVA9WAe7kwDu3wvk32LZGeX3ov2cP1k3g16w8DrsfLcRCBkFR9P6raqW9kB",
  "key1": "4Y1nwhSrv9ULJfjwEiPkJui8Gs1hf99vwhvcVzsgwS9U6r9v3wkSqp7d8VSsZZuEf81Vacm816b5ffijTuopYFmB",
  "key2": "3QDm9aRn2joUyejazZ1wNxLdJoJuBo5E293DREKFG3ycX2g4pJYU7qb3ofewJvhvxYYwKcLb3p6K7DBd9f2VU1X2",
  "key3": "5yL7wSHEopVMtpyqa86KfUzeABRGkm9xa3WBdh4bGaKD9K9ko2gGACV2CHdhqNqpG3D3e95P7rAFffQq2Mv5x72B",
  "key4": "3DidQQJB6xHgrcXpCG45e7Np5FkCmBZg9hyX3iSmvNpRHUrPQguKDuyWKKa8d7741VrJqZvRp38WCKVrE5td4AqG",
  "key5": "4XLNqd2GJcWHL1eBdUSW3gev3xw1TivFjkpkFrJEwiLPDr1abW3C6HopRM1UknVgiUR2SkZBRsVnhJ1ZMxiubUc9",
  "key6": "2BKd59UtoQ9dMXZLReQdcdHa5Wq3tqgRjbMJKiVMZJvArsaZC2zxpVuEL1t4YGnoMKz28sW2uJa35N4ZbMU6Y8Ud",
  "key7": "31DGxE4npD7Zh9gBpobHVeKWRRaJFacepvqGafcDKZ7QHGeron4DhZjgzvwx2ucPPjWyGd1krGSVChH5KNKFmHRm",
  "key8": "2u1uKUGgnWY4d6KftaeaxQbYsHMiUUvEmKPHJwnEjDGHAemoLfxrDMGRt4Bh77j3u1tftoYSCjwsg2uN7FmVFnYv",
  "key9": "3YAf8VNTqpbijhBWv266TtXipnvFGDz7NoeMxKkUxf7DEsiBYppyJxb74Hs4kJUcPtcgxGQwsQuNee6DTWwH8iA8",
  "key10": "3CyK2bzPFR9YsFLu2R9LxdbgXCq83kUAFwEQVnGZk5tMEoX3tG7YyTCJcvPtoGz9YUAkyLFnmD1cNzgWpsutEihM",
  "key11": "5UagxZx9Stj65biKKz5Xx61hkCEZwizDuJmnsjMs8Gzw1FEamiiWPsTXQ7VieJzc6b266FukeiaamngomFqDuxeE",
  "key12": "beDcQ5dDrugLikHZprEJhVQZEotkpwKPH3TGrQUh4F9DERgoi7ypwXNEXYGF2KDmCwdo8xgEabFJmzrcQSNQTds",
  "key13": "ganMYJuqCMogbzjRSqbZJw6N3otbhDjXz4h5eMnmtxVBwZDbcR9FD9fYN5qGVBTXHUjK6d69sVaBfTuafq8xUbt",
  "key14": "tJVHM8AqyzwhBR1SsdJVvc3dAo15x1Buh3UkDFAFWdmguR1ZtcX74wYmP8U2nvRPQqVjgEbrZ5i9pVUuRc4m9wt",
  "key15": "wMHLECN6qM1URgz3r3Y8xscAYtkSDRPJY632buMoo5vB6V4QPqzwqBfz3BFYCUKqyFMXYz4YgoB769ubPdRYuDq",
  "key16": "2EuigTqjHZQX6Z4jyzAFXX8MLrttriPTJ9pSKjcY1i6XCKbRtkCgrKkBXRZZyAKv98y2mX8dg65DQV3stJM2a6HC",
  "key17": "2pzETfhpTZttHEJxUL8Uhk4HSpXMgbAqMFRUZiTkG9TtjbvdSTh9yP2g3TUVBWCTJZK28KQzVNDzsiBjJsaFS2NG",
  "key18": "3i3PvjzEvJdxPNzwFV3xUcyMS8gqhgRaRwx5BAjYYuLCGnW91QanStmMCvYnQd8hd7nJMuiFiAS8Vua1KhFngUds",
  "key19": "3Zbu3GLfCwtU4ToSUtC2jmKJQ3LehXKAtCcrku6j41BT5A3Y9hsDqts8nsBaXVgZ9nPbRP8UbcmsDM2fBFWGtkm1",
  "key20": "SoeP62vsTGoHbjnGcguXN8ht6VaKprm6NkhZxSLsERmZUpCXowYHbZ7viHVF9576o1Pq8EFLZDaa49iJXT1fSNx",
  "key21": "2zyhUhkkurovMb1QCgz1JiGVNDdsEniJChDZqWEyAYfxCXZuzaFJVp43du7MMZvNfmsV85yinCScuLGsY6sntz32",
  "key22": "y3HQp8z8jyNr5zSGZuQzmhnZkdQ52eKejhQKK9fpCFNiuQLrKMWtqf5qrQTxYg35bnXvRTZQax21LZFJfh1SXtX",
  "key23": "4hWRoZK2Ev1nsHcgqTGCSN3MWH4gczCqVWNEPTLtFj8UrwJJBcbDjx5qoBAg3HisjqqGCs9vLRWkiZqCbYzVDSCT",
  "key24": "36T2g7t1A6wAYzPocZWxb8Gzh1V69iNtBchFe6cmcnHd2VJChQbCxfyVr7qjx8RXeD69Wu1VxrxiAPB6M7PJX4w8",
  "key25": "2pXEpCRhj57o1q4t4yW4WYoNb3sx1vmmJJPL2XDDU3paHt9u7gpQ9UAyeXsrPDETMF38hZUrahZBxC2bwTix8n9p",
  "key26": "5D5vnZcmQCMg1APPq8YDuohwoHLN9WaaVymofRoSWSXiPb7fjnD7BHe8cQ6A1uricRQTpqwT91H1xhdcg2C4NJR5",
  "key27": "2pCwB1pkJyWs8VQTmP32Aie6btXC2NWhNmEz6Vwp1mU6ykaC8aBEfEi3mY1EWbyP6sRbRBPvMkTSf9deXdcGdESU",
  "key28": "2QWqxWkJdZucNG4nuNmsWCSBS84PPT9BrpRXPTBptChPYvfKPJCY5XLrdL9V4z6mAUX3ZdQuy8DpsKLZXe9zqQXc",
  "key29": "5fELVKS9X33MSxtHLJNdthq8deNu4DS8jUAACBmYFDh2LHfjAJnGMt2LL11QiRyaEZtbAjeEjJCLtap3foCMFkW8",
  "key30": "3pN6MXP9wn9bN7RjXnNNWhPoyqfVPj3bvhT5eGJRoWWMb48RL6uaWEPtgz1kbUYgpTLcLDu4bSUqs6Ni4GrcELKH",
  "key31": "5r9VzFN19URsc1teGEZFGrH8C48owZMm1UPeLABoJN6bwPRXriYcMxErhUF9gZHGNVFM3Yyfg9BdSfAZrZ1c4qBp",
  "key32": "5cyyAnH1WqCYCnihhmWo3M3M547RCCtRTZVFhTDhG4myYaBRpd4Jcoy7DfWbqLDhYNtWg9SYGxXfCn6WbEh5BxDM",
  "key33": "3aZC42dbPM2kSv4ZpecNS74gGhy9v9XoNSkxpX8V7ENZ7ShV788iYBqd7Cp969LQwnpG4UxqDRMctriJue4aaakd",
  "key34": "Bn8aCvaDvTiQqFSiJ5zC9coijTcoiNHk3WJfxKrUmz2KsMe5ea88vD2wdXn9sv9TvH342tZNLkGz3r1aCHQoAwF",
  "key35": "3zNSkvq9oeVxWVQnDJPDckxodbmgdF6eHKBTcujcuwffBFEEGfWTKan3PVKuyJJ1bdo55T6CBig6eLWBByXoyUeV",
  "key36": "5KzRD5zHKqHaGCpdPgkoWAsSWPxMHwxFgyLx2kkdUfzdw7cEYqxbuKvuhuzh8Hv8fnJxTRAr1nQDQ2oAr1wUBrrJ",
  "key37": "4tkfrabGQQ4KQbCQt8hzchEJmrtKY7TzkizVXobUfeEN9XGm7KopmqsdxX6Fr2LAioVSdXLG65spJ3efLYRHCFra",
  "key38": "4vsqMJ24NoEesTX311zD8MEEpTRYiMKshmQmxvodVkJD5Gy6Y5EnvXmW2AgAxzJvtDEnaFinEGLQ7yEBqwJM7jro"
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
