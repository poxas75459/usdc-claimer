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
    "2KinErdGSitrXazAAuWnpzXrS3odUjxtAaduv5W2CgmMros5YuEt5Ugs7vLPq9bogTSsbi7WvLgro2UY1Qf8jj1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JKViTacdhsPjenxRQbEndfe2rdRGASRABeiA7tkUtdvjCQbLCmQSrVr3PUPmwjrEFoxnrqKsEiohPGAGbj1eKXK",
  "key1": "4zUSReh69HEcaTgZrzvsBn9LHzwq13VDQD4t4TfS71yENbEsxgpWHCE7eZJYuTNryWtWdZ9jUcBYBVv2iP3fjChj",
  "key2": "oziT3cEZgjVHwKmkswF1v69nAXDA9gh2REai7taiCECb5DiDmJvgaJLHZmJg5A721aJFpMWs3pe3BFzRbeJbJxD",
  "key3": "27Yb7mPUDqJwBJyUhiPsVxbw8VEf5e9qegAMgAAKS7KFLpC8kRF5o4ciC7nscnjkUvEagBrhQNfkN1UKCF2tdT5x",
  "key4": "22sL6tAMZE15Gve3cP1Pp9uSAfzbfpMKK9pySMUwAVrxq7ZB9C9i8qc6HDTKHpcHitwtPMm83Doz56A7B6H5nqha",
  "key5": "dtQE7G9Np3FZNCGrbWM2uLtdeBEJ8RW9g1WsxWPVcTmnrHF337W7u9um1Pojgkc7QBRghSCTM24qft5DWBMRZ8R",
  "key6": "fxtYjQoutRBSN6nxBoqMuc1Vo9UEN25xzKKxZwhxFFXJe2JHbsME4qWuBKc8Qn9fV6FzyuV8fc9PqrNJkdtrikL",
  "key7": "4UEsgVG4AMczq88wjaBk3Yomws1RirzdUHScvC6ZUbHGh5fcpvcQ6uzsdgW7pg3t29zDJUUTxUpsYQFhybKssKy3",
  "key8": "53dSEtKG833pft1RtjocVy5tVczUmT5jBjBzTWanEnFn5KHRwogMtQ2F6yqUiu6YnUBhY5X6Fx32UWse9HCiDgf",
  "key9": "2AsSoJfN4JYSu5BXSZFmnDs9Astix2J7pcPrkUbC51hYFpHYMVPSsxU7DByCwvbeYvqCRQQRCxLbRSFY1hgcUS87",
  "key10": "5FjFYrn9Yprn4AbbLYxAWheL85LjiXgS9RXy7koGJLWVUWsQRmyGgqRztiBv6CzkXrMzmQKAebUsU5rzrEuvQ7qf",
  "key11": "272tF2D63YPxXouL1uHHVQfncC8V8Z3hPNDzUTnZ68yzbsHun4jhvFzzY6ZJcaHhU8E4gdB51uLgNfqHc8cpHkjS",
  "key12": "4oYjMd9Rje9VQVsMM5m5QVEQ4XoS6UCFokbpBJ7to2aPgPYJG8doU4xB8DVNWhj9hsWaAGCZWA4iDVZeppEjXXAj",
  "key13": "3dsRaufFEaooBEtmTxcy3v3w8Z4HMfymAMgEHnXTk7ydxwu2CJnWTymuWowMHtcGJMH5pSJ3LNYNKdyFTjp9vj3k",
  "key14": "4G9QB6bqAmKtTM3dY65vdFxHintknMK8vRGGV4Bgwxf3ekEsrzhdsd4C3hXquzKSJndLNyqQeMY68qy4cANj6gDy",
  "key15": "JBbUbTB9EFRVYaby4oZsPssZPwTytf2GyKzfhuFUbdsJu6pFSsgjqva2uuQJ6fsNQqrW5N7hckUv5ca33yaTqK8",
  "key16": "12CoHSpns9ZK1AX3DzKwdoD7hBadjScaqoM2o51VBSzh51FJpG1oVMNykhbfpPTAwGLWAM7Qebz8Br4HQVKDxLi",
  "key17": "2BPJaiEK8eRaJyih5eGknFBkkZeC66KUuDcNSSWTeJ9BTsmAoN3suhkrGuU58xarC5CcsLKvhjaDGSczfr1ofwir",
  "key18": "24LvtYhAPKxmnNSsnNQGrom6nF3NmUdVnWhMqg9SAieLK4RigxQfkerCxWkEoVy84k8G4DJjjmhkH8ZHjsFZS93q",
  "key19": "2JoyWaJ4ZSxBwyifqSmjCswZiCFXxmoxoqw9VmGmv95dkXZeFcKvuhvNZbmWW6VcW66VtpLdbbiUkbZN7hhP9FAa",
  "key20": "3ortKJTuXUuyTiKQPU1WsndsQDrrNeunU765B5DsrMLbLCnLeQNyJ1YwrDH1AGpHdqNPzpcseDM3rVmUVW6TcNPV",
  "key21": "5x2fyPnCuCyW7hrC9nQoiQxnGngUA6kCH9FRYbGd2kCWM9wPhmySkpFHqZykVC17TVNiBKHD4PdPmajQ33wFNsio",
  "key22": "YTtL9LGymKSWT4PRvK36D4x7awLT8cSRQZ5NLnQqg6HbMW41w17LktdcnHqw39UrLkKp1Z4q397TuchBnYVy9td",
  "key23": "5mTPAxayRsupfwrNmZ6653tMBkkpdNw6wam1siVPLtnHo2hKiHzvoLnuxsjizW4Wmqnr8qupRFr2PEDmmvmCj8Le",
  "key24": "2r56AKQ6kBFs854EXscMEkPPPALdw7TbXaRxHzYipCYmqUP4qGDrZR3yAW1Bpq4xGNTieXdt7QGDnRwvhtgXt4bJ",
  "key25": "71544oTkqbJRKRQdXC1sF7Vetqm3xboWhGbA1vvuEmrtkkxjjkVrDRhqixHDimFDaHgsNbDtB73kMcV2J763aoY",
  "key26": "6YENWseQMJpLwVstA8gJF18pUtFbLijeT6azavXppn9hK2aRDdzrmikTNm8vmnmpX6f1LttWejopP2fweZgPyKW",
  "key27": "3RCc2jTB1wTyvNkc12ChwsYfiL2FbZqZKv4Z4pySaosPsJZHpm58HZuHH69Sz6LCMEcKNmxCngPhY81fwNTzkh7a",
  "key28": "4SyFg3ApHJDLdhznRZYUzXxCgPGzFjtS9zGa3y963Y877EZPC5ZiJJRHrXvQS4pvsaGZ59tRKKFoc1dHCqRWgGA6",
  "key29": "AYPmxgyQ8QTTTpSTigXkJbhTUryzntQJogj8USSs4U1isK8eFVMfWrH6rMswEPgunQVm36xbhMgaBQksF62GdUZ",
  "key30": "3Fz98yTbXQAFmePzehpbLcaqBPQufzfk2pqq9JipTbmTTRdwb9qDeEhghnzHqidkiy8txZSrHcWRZEByrQ8NdfPF",
  "key31": "5H9Uivgz5DZhofXeVwcqCWce84tjw9oPqaUXybHU3VKDKWZoGivxjdsta9u19fKGZhgsiHUqMcDXp13yRRnusJFi",
  "key32": "4e9kHEcGQHGHgJyhk9YTkqXLVbauw28kpKMJLrFzFToTaMzQ81wEJ5y5AqZS8EbKGNZ3tmxq5kh2xWe3uiepdTXx",
  "key33": "5TtSnfEJGVxQn6nQZpQJ8kSddvQbspgLBas4J6uxHEhomhxZHPhmr1J6ybgVLei5qgMrmAdUwrFPMqMDNkoCqMxq"
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
