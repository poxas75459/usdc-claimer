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
    "32R2Frgz2w7qtNJ5QFd9erzSUFJrev7fK2FQrGsVMw3p4wvabcCpcNPCXqHxsMdkPgD7iXXfgV8yFnaSAwboRM6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lj7USht1qAtHXTm2HQYgPTNGNx9QMLJYDcxLCiBQAa1LkQicJReiEYJFzFbozMWDu7g3FcR6tAzuTjxiSfuDpAG",
  "key1": "4dysMnLn4mCXEwFidU6pp6QLxTDcbVdMTYLrCtpmqCh61d1cTQugwjuXrZsn6LVrJ4oYVmxGDLQAcryyDSbvivmF",
  "key2": "4UNwX2Na7dFnETGF1oYDxzdmU5iaAo3KSxoEVWHv2u9USTe1DqErdM6iTujUQrcCM1wahBKnh3F1UrQ7RSvmeeFs",
  "key3": "EKs6BtHF6BHUS1hLk4HyTawFBwoaJ31wJvsKkERy4odQuUf1BQ1qPJTmr5vnaszc9P2tHjpNKUBf8hMeKNLR5sD",
  "key4": "4nUgfF4pdHb5skgrGmbnmCZ9BnpcKR3NvZZCgEGZ1gSLppKiykCBophH8zdTXcizN1mcFUEz1dZeMiV6y5SeDP1u",
  "key5": "3gH4h51VVAKnY8pQZgnWW7RoiRqRYTewMSX1WmY8xasC86SxAejGcPzkGHNYBJfKTJQCuNq9yYqA6XvVZiwjMWxg",
  "key6": "5VLWUwjmoPpDrzMpF9LEvMsvbjmta4LZBuo6sWT7mZBhWMrmMstWmazWbfUC2z1uzPKFD4f62vGBr5SBVAAaL3ew",
  "key7": "2ZGiBX6bxYebSEy3XwYE3HR4rmdAiqLQGttTCV3B8iLAWuN5RERb9zZ6HaLVHCuN1v4W77SxpcFN8sMjEb6TNVEj",
  "key8": "2AYUog447Th3tGSFi1VqQckyDfomV1DNEX8aPusDikKycHDzKpC3t2ZK4TmZMdsBbFz3wShbze15H8C2xnzPH1uR",
  "key9": "SuJiQ3nVuHT4oonxncQiDJ71qa3NqAPz8gcf6a2EP5yGwpA9sqMuT17kbvBGZ55qUtJRDQ3rq84C9imXaa88ZpE",
  "key10": "4ATxJ5s957CQGJkdfRqYUkuUGCZPEPsw2LDAUVCGTNwDVvyfDXA1sWgUhSwqSrwVDpx2zbTNZre82Jz4EC2t73wi",
  "key11": "2Q4Ee52XoM2dzNDQs6CfxyrmrPVVwvXoHVBcb92YuUnjJ5TxB3kSZEGvGvLeW1aC4rdYkc7y33nF3m9xX67r8aYi",
  "key12": "53TdRaAKvTRDJKruyd5zd98NTRmebqNqeYW7nT1S8Dx87xdTmq93xMouD8M9ugYnc3UPhFBeR4VerfRx2z4YNmgN",
  "key13": "nG9SuksgoBcga8X4VYqd4hzrdc5LGGLR9XR2WtMffVV2aBZC7uCRSPhKx6avjvu9LjvRMeKQf8KAKY1LLL23qfH",
  "key14": "5iUAJtQp5852P8hXZDZFaV2QoVJ5qWZuC6et5Z6d3tKby9H5hBaKtL9GuE74YZcktXiXbrbjVuLenLgYNAZLKEmC",
  "key15": "2KfmbnKG2t4zRUtp5qGTrRRTRXENGZt5dA3KYUMur3W6aytb15hWAEs7ja8bEKEfBjkZ13GY5AjyyMSEymTGAFSQ",
  "key16": "PNdoxoWcpYRSQByvoncA8wpLAi2ZLABcK7uRynEAXd9V94LnD363hGbuEYApU1GEzsKgX9ucrMJ4cz1yCWj8PGQ",
  "key17": "3asudn1qs7J6jbxdxjDcwLVfYyaM3iFPK4MFG7qxpbt5hePEu99WFsCinPDPCLQTVTgRNaW47VvdK3Aca22Ph3MM",
  "key18": "2ApyWcCtYkWUgHyUKv1qPN7mfzBfxLPcediToJZ9higizRCqhkkdS5GRM6uokMkuhpL7ikce9Cot6FpJwmc9toxK",
  "key19": "2E6XPdC6kwuRTh2NaXqhRx61bBHQUgYCvHh8EC6xxq94Bj6ffo79cx35XtodLgZFh8Pd7M3K3zMqrs5JTniuNQwj",
  "key20": "d3gNaXDS4eaPQv89Z1tDJoB287BMexcFhnzHCLyqN6cS994Dab5G8SqLa4czcEqVd66WDCGwEH82JjZ5rrfxYTm",
  "key21": "4NfB6iWgYvEWLLV1XiGjW3fG78QELhEboCHHHN7bLYE6rFoWbqsyvgav81XxCAt2J6i8Ca78QgUvnQTqthSaqBr5",
  "key22": "M5CRpNpWXhDW42rCW3MyhGNt1pSXSGPhEmw7Vbxef3Tnwj5E6ZpWxQB7MvZyu5pvWH257JfWo6Knk5cA5dqVi8V",
  "key23": "23G4gwmmSfC2wsDoPmjpQKnGmKo15b6zma85TfZ3iYe7oZSH11mf1WHokTnH88P45PkKrN6TaFiQpmUEd8jxB18K",
  "key24": "4MVvcucCCZCmkByKxnseVJ3ybGQaiGc2fWCz9kctqdojmBRYQo3kzTsNgp6aTCrJMyc5i8yCu1Rsi6xf3Z1EKpan",
  "key25": "5WAGtNxnTodWEuBgLveLdPxTzuwLf1n2QuQcJw5LSCgeWJix6zvGWE5nufc6fJinXcSZDZ5VunuxGQwCqqktgHpr",
  "key26": "2avwZr3qFYf37L3JgbXyobKZu2K3T4s9kniq2zJCENZ8G4QJDErbuMjLpzYiiWW99hxfBiVUFfZXaUVYiUMSThPR",
  "key27": "3mhwvL7MsyrjsGdJn56pSHYgdTFzLoL74u9Fwq9GZkpzxgq1xSTq2bu9uREWsJ9Tk7kkeNY8m4RaCCGJMh6W8x5L",
  "key28": "25TMiJcU4naAkrcphisg3xWomxd4XpfcufiEXB5Qys65BfDfTNgmwi4SVyouwdrhA5pQC9hXvugrzTBBYQh26SYK",
  "key29": "4fo7dJTC1Yxh1ahymXRYF8XT7Jg1bzuaW8Josj1vCGXa5YkDFT12UDaKrTbrs7GUtsaiK5wUFMmk2wbjHfaXdbzk",
  "key30": "rRNPsWLUD3dBrpsrnQ7PXPmoATqSPHux9qJStD1ajua9reHxkiK3kK2qotog3MXJMoYiZAuV6dDgL558nXeRjQj",
  "key31": "2LntrcEyBZGj5xCvy7NC9FWxBTVsEv9riafKm6ahUq1ptskDHN8MaskhwXEXnd4ad2uthzK9hxNx4fky7bT7EFEJ",
  "key32": "46baFFLGfS6P1YWhrnZGoN6NxP9q1usGHwLfw7gtJ2mcHhKecEu9LNTTow1TmjSKMZ8Vk1CJRcHTVrsodCgweEkF",
  "key33": "3YGrnERxba7M6BY4EtEmkDStGzBAbmXQ6v9AYFaopU94BY9Ss7ZggLz2WhtVWCdpu9RJ2rUjT6ucS8umnSq8KF1r",
  "key34": "2A1nDLoxHXkjbQWGdTjobFUovWb9wba72QzkbFZK2Ngb2ngBU4UbLSuNCrokgbTq85nai3CfjU9HytdNgi7E481Y",
  "key35": "4LdBkchMd1ymKT5uHKnzzT3VDhqCPqhvZCbb8nCZsTeKr5sdZiCZFemJAhhQCkxdqgAWXTinfwCBFiPqQmRCYb5P",
  "key36": "3V8RuiWNMSrDDHYgLhcfavHTdjdQscpk3a2zTBuDLmGm7DoikyyoRKVQwXx6GsDQRVY9wfDn6qU8bnULPS51A7Mc",
  "key37": "RL4cEYWNUo3uBSX885z8FYk3hE3QLvHpyfvUcKRCgmswZJdAt1FJy6yV7BohA2pAt5YxDeaYp6y1rkZ6Y6ZuZWN",
  "key38": "4Tbts7w41YQn3povhzxASMX9hgbcFW8mRzm1JL74WZ15KyRg78TWmN5B8DaQHUFEHgJ43VmHseMPbsh7DDH1T9Cy",
  "key39": "YfTfDNZX3hsJ1GcJrcMKuo4rdbMKMePdsAkyCbFnJh5gS4juyWYLz9LGX4uUWxuQfuZuzwK2TNpLJ3GNccidVHU",
  "key40": "bodHnfNvYcvNdq6KT5UNf4ucXwzSs7wNWL8cqz8VxbzKgZhgDFn9UR3nzv4L8LRZeuXzbVMA9eqGpNMDbcsjiAE",
  "key41": "4DLhTmKUzYcANnYygf2Fzks72V7pTgQmceRKtwq2jgTuiDLNGwxW9w33Lz8oawC2WXqF89E1XF8V63WNtZuDXJB9"
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
