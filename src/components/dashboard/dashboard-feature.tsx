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
    "4XK1EJdLrEGaLE91b5TZicLTskt5cBqcBavdkEi7hvkJrmnXrGj6EisEyNhpxg2GMcySu9xk53HGSzEyEaGyabuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LieFHgknBivut1QcdjCw1KTFgDeWzKh4Md1sR6YZLjSwXx5UBKpZKu2smAFmWQ26YRdaEyQzp2THxbmvZdBzPZi",
  "key1": "4KdxyjxDBgbqUcex6cyQ36ovhJsExpTv5g2Yh837M5t1rHwtLCKX4k1oXMRNZU4r4VxSWg3qJphUzVtzf99WbdSA",
  "key2": "3zLC9MxdD8xt7h6kfDTBLveJQ4LPtwh1AtZqYh4gSgP59ywTpb3idaF7Xj5rLxjWLzbPWqSJNBJcJXQDGx28Uyg7",
  "key3": "2vPip9uxLD8g4dr7onVe5QS66vran2wDZNmaiixSUaGYRKpdZFSjDYzk79vnAGX1Bpp8HtR7gHS7xY2xJ68GRzCu",
  "key4": "2kqod7omRS6jZkmqr8cKHuuNvxt39JtCJqLXpyzmSKARZVe6oUn4GzT3ajGr3viU4Xj5anx7FJ8TVn3F8cabnw7d",
  "key5": "2u3kn6qmiSTxzdfrvVHeaFNjcF5yoYiFbnMVo1JmWztMsbQE57zK5ECg5RgJHJfo7HgeEPSeuBsrB4r15zsmRmKk",
  "key6": "H4bdqSnmW5XNkivdaVtqpiHqK6XmkrpZfXiuFFDLuBPs25TAyVCnH61mfg8ydZwQAwHitbeqTVMM8hFkREMGqve",
  "key7": "4ct4C2qmTarePtzq4wCRGoS1mPS6WdVBAhL5swRxexpFSVhheTpc7PNzj1gmJqabJGnwBdBHgxgvZnKkMJpdkM5g",
  "key8": "44CFcfb5JwfDcaJ8TNJaCSCpTzJD2p7EdNhy77N1FMUtQjKPwvsCUkLd315TBQS65HPWAMZYZwcNjJyTiaHSJNRm",
  "key9": "2MrAj4zhDgXfohSXtkVCfkuRL4zWi7dcekoZcfd6gm3onWfxphCnjLrqKBAqzmyqkDR3JAv75bFdjJrx92DhqDPX",
  "key10": "43T1jkLc1EhLdDyUJVdtVwqLXzAEYkRYnGb5zaRBpgPUzmBF9ZXgCjAg6ZXX52J19uEEd7Z57TMBVns2MUjdq1N1",
  "key11": "62cmNJ6At7stjWkmgVRomxstu8PPZdqWJgjeKtwnMQffvneCYchnQhwSaiLGU5246aqXw7ufVdUUA1rKuYozWabh",
  "key12": "5M1gosMDC33t9o6KbbhPLC3ShbSbKUGYa77Acy3tDcUFvT5EnMXEJtf5ybNgFJe3P5RTxR1N2uA7YhW8Rpk39xkv",
  "key13": "4mDrWxVHFbgCSu9b1vdvppzzhwb8yMrgKMeDReqWe5JXv7GViMJhHBPMewWXhmxCDAT83ivRiwrrtoavE3XTWna8",
  "key14": "3ocjj17NstVT2yiii4vLVpW3dJzRSPxw3KsS53qzR4nLZxFMDQp1uyq8x9VoDyTaYV7X1QD3gWsS38owohQDL9Yn",
  "key15": "2pVY4Wb1oHYziAazjdrXZ5LkYus2UY7NVx2k9hDnKkdR1a9hVGf81zKucG7FdoKFaYSkCxbB1TziHVnc6XgGwjby",
  "key16": "5U2tSbVd7Goy6jedjM3tyBEFAVtTVDpNyZi75Z8HHtncmVPn8ppUvk2pv8ZjA636pEVZsCK8yCKiDXuP3Ajs5zSk",
  "key17": "5ANHbULQL7GT1VxcSHqdX67tWj5GHp7jJncsZkfmncEYM9n7uKeEfDxBUURRL3YFHnsjzv2Zp9pZbXAkEanVsHwY",
  "key18": "kYVmdtY9EUP8y8hu61ruS4zAW5aCNfj4Hkx3H6mRG3amz2Jznqr9pYdemUZ8HaZ3LxYAgXUBBs8zyaMokHeR8Le",
  "key19": "61jTvDT3GdGQsXeZ7TQUVmQ8tQoJALFxbwctQhR8nprjq4rna8LViwhQPT7XHobBRhChGN67GsvWYwugwUS2KQ2",
  "key20": "4RCeT7Vb6nNPQtTX25JwXPewvpw8Sevj8AaDo7SJheYyMdsix2RsG1ym9e2D8hB9bJgvKL8ti8im3n3B5c1AMWLp",
  "key21": "3Qri88c1exyHMbY8fyLkRFi3kHM1Z3wToT7PeYH76zDufAHLY3EVSaBnRufNxAB83gHJGnq9Rzyr6NRFJoXF9B7t",
  "key22": "4v23VgeCvdVmmXDaazkhDpErfJZw7L6PeBHPkhQSNC4sy5TSZsfX3wYvHRrYM4X7NwiMacG3QUzBmJGU2zsU7af8",
  "key23": "yoBp4KkBrWkmiNGfDBZgYx7WFyVWXYZm2KKGHHH2ngoii8aKRAMHsxiq6feqGb5WXUUJCw5oNLkiGEDG8KD4jcw",
  "key24": "LDjKuaDovVezLTrYW1CdhnkP2yQsRXfv6kZharbbPtzS6DGYKr4GsAquWdNnCB3vWfbFg2a9o6rfhh4aTowuwBb",
  "key25": "24i36qRCcCoTKhZbyw9PzdAgYgE3PPeYPdekFZ2fwTXyCvRHCdLvH7j2k865EcuyEq1BPyUZpaWHd8cnUz7mLsCj",
  "key26": "5BXSsjZzzD11ZYa8iEf98Qahr8VQbzLsyh2Q2HzRohtEdnH1yoUcMHmBjk8ahVi37TCLsQaAfuddYzkeoxcDq3cf",
  "key27": "3UauFwP87Da6ZtXEE2nrf6yykLB2xXtYjhCdQ9zABV8KSp1iR65DHJK24vu3pNwu15MASixuSe4sWrp4CbaLbHxp",
  "key28": "2j3nsYYRUKZhxm9sE5BT5dgtktSwgLc1fFYCkSCFzzpLh3TC8c4rWoxv8Y2XtnGcbCUGCRTRrdmyQcLyy2Tuhrib",
  "key29": "4UfFmD7rNMSesA8CgtNzNvfMPxxgfLfD39EqTYdkR9VgrwpoDUp1Gf5vmDYSSx35ZY8rVu1sXc5PahgH347X4Bwt",
  "key30": "5VEBdGurH29im6qqZivrpqQtGJavDYpg8QQVpGYzcH93beFdReSa9a39xAZYhmSz1t7AvrXgE3MrcfjSkH8Qi42B",
  "key31": "4fKkxFsJBUGhjv55BcUDRzABqTsrYe5UjLkDVRmFUxyCG5J4Ehg2LyALhomDkUPbZ3HYfvFoRwA3PS8qLwbtJE5i",
  "key32": "kSeJQCDTpxGe92ToErBy29ADB4k4QjMfm5bsQMeJpRxxYKtxNdfRcBnPgWzEEdSgB2w2vta7jPMdVCjy3buF4Q2",
  "key33": "qkBJtuRhZ5J4rpoQMVSYtSw8vnVfCLusaw2Dc97KFb7Tbp8h3uYWXLTNSbcQecfWwjsa7UHNeD3fWPjvDfyUDna",
  "key34": "28Kuj6DCHUP9ggeudvpXdU97M3tGQnEH1s6n8XHP3nmjTsigstSk9xqyCKk9UMY8GNCj89LQwWs1BDsgYxvGvess",
  "key35": "3tw5adipzQSp5BdpUVGruBotq8ZCzAm5UpNECsd9dPMAK3sP8SbeGVKG9z6T8pJFsS5yYbkNjQGFjo5wiXwHYYGP",
  "key36": "3zazHJiBS4sDxHFq5Rjy6vbQKshjhQNEkLWAqQrRwWPBpsXToLjyesB4Ds1wUaFU4fNrPk3yQnF6UhZGCd7sNGwf"
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
