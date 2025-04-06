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
    "3MgujSG12dqbye9XrpeDtRwGYBDpRCz7wnRjpdBUBzQV6nevbNBrg8DgfdRMKAL6wWARXxvbW9Az9dBrEfdxzFsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c94deL5aURH8phYAiYnhuarspVDr7eRHseQL9TuEfgp1JYQpLbahRKHBVp6sydVYtGMoj22e4KdUpvGWWJsoC4E",
  "key1": "LHW9kYucPRptbGZhET9sHY9e5ZwuAVdvjpobZg4prpbCYvpP1ssTiQkWVJTiUNnzsEnaQeF5ks5P4fkj8eLVBZy",
  "key2": "4yXQ4Dq6WXpSiCYLGiFxK47Q7p8gTQeJZkaGdW5qoAGR3emEorhnZXsgQuVHvJds4KafyDRQtXUrpWrCPnNHpUJq",
  "key3": "3FNx6ViefQgg1sP7FrGoKNUTGwWJsNHUZMKmivJ5dTEu2t6YG4WoG1YMJwT22YdKZJMmAKaFMMfmr8cRMoJrq3aT",
  "key4": "nksryJqKPHZxvVHidSS8z9M1PHiwaMTvCJh2caPTBMJnZ5seKxWoMAb3YeVw3mh5zSWtTDeLwHYbp333cJHjRvE",
  "key5": "3oYCGp65agDjr9mqm2hZ9YDHnJ8FzcGwo8zcke4mpFgtNTA3j4zAHSYbWRLc3U3mfHi2tBxsC9JGR45kBPCojsTm",
  "key6": "nErFNMjwCBy3z919F4xJGxS16Xmd9gAT4WQHvKmsyAAMK12kJQn1yT65ExrQKNm8Mpv5sYZDQSUEC6zb3uGnyVs",
  "key7": "3zxLnJtwHfjELmHFPvFncx5kfcQ6t4KnXZjQMyaiCuaMseFV4stm7X9Hg9Y5J1PcgFUZs2t7dvPGhek7eE4iMyzr",
  "key8": "3YC8N5H8YVAKDsgsXF1KwuU8uXzncaCNGg19Roj8u6JxyRRSirfp6X5hHnGXQhfe1RrLxyppnmB8ZPAZ4WsdN9Se",
  "key9": "2Eac3RiqkMstZrf2nEzmtzXuBTM26wd65Eta7ArXryFjjvf3EGynzYZkrsngtDYgdN5fkLqWovUa3iJ5PB6DnuoD",
  "key10": "3p4AKxeihruUwCQyzbvkowswSAfp9zzGxH2pePExVqmY9fKovsMFzTRB3J21n7WRDreo7bPN94CFfkWTE3rdepA6",
  "key11": "48TPrgdSMGj8YfEAo31P3vKFG6W1MTNmmpirhdnhvs2sdUgEGMtemSt94jMpnSJ2FPQCdhD4PdZsSbTUdtn7tBXy",
  "key12": "533bY4qPcNBiQZgxuerMBFDMuZQN588LsJATk5gL4GmgXc8cG2R94Svi5AxQtphWMhnrdc4wCPM6k93tZ6a5ztrJ",
  "key13": "4HPFRfEvW5JTRChZZjCEKcLr9Vvp8S3kduNtnNHBgsynTecTWKBbuX8bD3t8rrE5ex4M73KeViqfndeVnQ3XCRek",
  "key14": "5K3szMiYqk83hnJrA7mVSS52aD3U9cvrHtD8NJTEC7FvYaucc9fN7RHDf8STmUQwJF2wgT1c4F9T6hVLtFbEq7qw",
  "key15": "5k5mq8rQtawT8D4StQCBNpZGQy14nRipcVu67LHbF4opp6H3xwzG9B25uQxgub9jMi5CUWLDSHCiudytKjQPc3oN",
  "key16": "4Jv76ZHfdWM8gTBAZRs27i1LC35jtmHz2Qm82kc79pBvSd3VutSt8154BZcgz5etjpZ53V9yGsYbDyW2jPzz9mYi",
  "key17": "4hbXdLBNZFEYWRCG3AdAWaSQJ1JzPftqKyHz5KG1Nbpa2ELx1hTr9EkQ6i1QZRmtrQorvCyqJ7j5oAM28MwDJ5eK",
  "key18": "bhTZAx358DV9VDWpRj5rM26RYtSW7rEGLGgu5NqjPCUKeiUR9L9pfMrDpBh5zCuso8tFUgCbwfgrb8CP7zKikhq",
  "key19": "3iEWRQSB1mJqEtCMegZ31q99Ww61Qx8MR1iNnGPruRwy6Ygz8hzx6vzYoczcC1dsP9J6K6u9qZGL2L26AikNSYgm",
  "key20": "3pgkHKcw6DKvryk6LaA6roHTi1oy89Z7UfUepRNYMT2GkCC2NA7Jcm3ogChKemM79hsvkovSgU6cd75V2aYhjXeW",
  "key21": "3SrBiAVJpugJ9B5KzwqtwbH6Z5ou8grnAyi8rGdG653SzQR32wQMYSXEjAYiBmMCzqzhSNBeBEWXNxi5uJj2bs1x",
  "key22": "mUSkb4XojR7kd1rGs954asaYFgnwS5YMA2HvTkKsPHJdhdyFvsG3Rn9kmJGEWyBs5CMd9syzXCdCkAJCpBu4GKt",
  "key23": "PnLQUScf1Y65FQHHqCpTEqfvteLvs8QzsSBSzXFERAsLNjgiTdrg4cYwhhFz9Rxn6yv8VoCLDgsgbzy5nSt21Gj",
  "key24": "58K4ZQru8BGnDiSaMtzniDWaqvsiGCcJ2N62D1xXxc8oukZGQNHPq8J17K78BwUXuGJReS4nwFm5zw2W9A8AYDgn",
  "key25": "5RaeWTUhaQYerusg3byH7pg9kpD3khA23ENhvYDMjNZh2PQTxiCxdB6UPSL82np8byRCdY3n2D7sVg4LpKynnxFh",
  "key26": "62PXYnfhn1Wsg6GzBcdtCeAHnzqDxmuKCkFRnsLX5BmQin6TRYhWJH5cvaHn7jrjYjNh7abCm4mR6cBs24zg4DWx",
  "key27": "7FJEi2uNPRQLEjxHScJJBBytdtn3qWpmaCgwDdLX9LhUDx2zRfcZv9EpCVx1wyEztq1dukJu2WNqPw6ovNgHUfb",
  "key28": "tCHpe3XciUQHrn7Jb6KdRyzSttcVepjmvBumVtrDtRmyuNrrecEEefFRurcUiAYSYsJuconpXfB1U5VsYWGGQEK",
  "key29": "5xTCN4Qz999h9zKY4J6HCZpDEb35jTa626Lzmtm8Bz4jH4Fdah2Xz6dgC3pmpsfiVvu7dX7EKdQZkWD4G8JvTCxV",
  "key30": "3pp76GiC1XRtk9mRThU1ePdgu7fupKJqjwDirh23jNtcSGKVhfgi5HYTotmuKozYVKvkx9yD5mVfCKmyJBXCA8fJ",
  "key31": "5ymW9ig7os2E3KzFbCkfenSW7DhvEBjTYhkppMXgH7oD5whVUCBiHim7DjQcCjNp4HLKT64qEeF4xpbQAz8ePvJY",
  "key32": "2zACcTysooXCFvVmFKmoxEM7wbR9QPAzFLQsR9SEkXKR62VNJ2HkTwV1nbN6qRGn3GFjhVoCJZvoxceukTKarjwg",
  "key33": "feHxzFxZKU7NmwLVAcz5KxatycHCpihR4KtMh1LKixDaJZJRjuzcSdtNCZG4guhQavtcm6X3Hv5Esjp6Tc3Tgpd",
  "key34": "5cqu6XzWPj3ojmPtWufGBwts9XFirKByDUr9DgqBWY8LN9Mpz679ztSeyvnxLbJ3N5pAbnjTtq3SXopDsD2xw2Tq",
  "key35": "51p7KmB5LGkyiYZWiMJEz1BpdawLC8Sb7fiDfgW5AesNQ5YVV9JSh9JX55t4LqAoqpfkzKqa7ZynVchizHgnLz7X",
  "key36": "2wxmcKW1AXbxp4BjKdoi58h4Fy8JVHGzUKkbTobF2WFomZxSYng2UdjeDovxMSnB1defMwK8pSGcVfnd5jbjEyLk",
  "key37": "7j2MGaGPRikXpKFru4EjyXoyiXN47cp86AwPBUSn2ueRhGgHNj3H2LemiCCTTy7JCuPLoHY1Wf9SxcbHVNzD8T3",
  "key38": "5UAbtLM7jxAHXpVeTGqncxY424U5kgHZtzE15UaS3vN5j9CthrW6TaEB44YYdteSvJjvWcneKbqBGs7f7kNXiK34",
  "key39": "34XCS1npWek5SoUN589eKxZwcDe3KiTouE5jJQjmgUi49dy4EypWnBeoNXzEN5sjraNvDKmiXg84jrC7oFQukKhH",
  "key40": "2J5xptNwdH1XvWdHfVGoFXLq1X6Cmt6QGBqystRxJ6byodUVw8XCGtLf61WxVqwcHVq3S9qUC37B9LKdCDppCkg9",
  "key41": "3gQ45PqrAGcEkNWpk5ZquJEAY5U1ERPEGH2tahirzKM5KWonFUkYRep9B9Ly5Ns9G77wzFafsbahjpbh7GGux1Zh",
  "key42": "3XzoqTg6C7TVSJFU9Hb9GFek9aUhmsdRiiHGucxBj8RLciYeRgXTojhRA4PXH99LUSvmGQDFpMzy65LLdHzg92pq",
  "key43": "WqWjxw99cQCCAWb6JcdnLuXPzJXovf4pcruQWgRTL6Lx2NRB38KpHh2pBuwhZxQmUb1kQqP5SWhcW92QHGi932z",
  "key44": "3WEtWRiFLjpocPiAPeazNVuGDsSGeHqcvNqAffGVSPuGfDifPWdYR7SPLmUYqafgxQicTNKxaaLpzgo5bGhjgkA5"
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
