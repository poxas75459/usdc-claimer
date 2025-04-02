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
    "46MwpiktyFSKykvBrNxUYiuU88GL16GMbpqBaUCe6qFstPMVaRAPsBYGGpTqvHqHsTD35G5qKpiNPFuLpFHrtrSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FyNmWmqwPghhZxGJZAqNPwBb1RuNeykZzqcBKdA2rWAdh76mUsy6Q5fXUK41WUm19T9Eccx28jZjiNF13qpEPs7",
  "key1": "4pWB4t9n88hkZatY6XuvTbGBNQ71w6eNps1Zr8wuekxfce7DMcA3PfuG7aw8XtgMe8xa1ukcdULebLUUqcoJWZYN",
  "key2": "3tKCj95mcBZLmtf1JjVQVYtpa4XcWzGQAn8PLtrriqVsCcewQRu4DKs3yKneS89C1Lrs5JBrzekjGnH2efVPo1s5",
  "key3": "32FB8BLJBLtU39YPL4tfZc8FvHQN4k4NFSFqALMyQvUD8ZKNBzAJ6Z1gN6qgQSAiAuRBKFnXg3zcnJoheSU2GpXq",
  "key4": "2823BX4GbCCqNJNC4uRYrQXPEuCfxHxkG5TaEconYiTiU8TNyrZyJjWo6beA85SX3iYbFXBFLGvRGJ91fM2n6iuJ",
  "key5": "5W9Y4D6B2PffkYbbnP4mPVKLcS4xqY7poPN7FF4DyWxmQ1famHNMTZyxcmbBonYXLqnQpPKB7jAHyimA6Wz97WAm",
  "key6": "3jQGmWoVWtpxBNLqDXBv9uQ223rL3cNv48TEJzwcPJexDT1kFeYvY7LQLTos6CVmDeFxmM4uZUPoraJNhmUtVboh",
  "key7": "5iU4kb2yE9P76svbEoK7bipMzew3SXRqUGNGWMm7bse4AZBLDmNjCAwFPX7Kf2N41UhVERy9UGb2zSEUKsG5ishi",
  "key8": "2Aix6gLcVLF1Z7fH2WHrUu4cYwbhzGqQqpoY3QuDfn6UoRzbBiMfgtn7gWD1WapFTEnJ3h767Jr7aCUSNW2KxbT3",
  "key9": "57DsJTzedEc6ZmEpkDmsTna9Smh7KtgJYa6TMuvjQxQrSjdapR9T4vPhAsTT3BAddCgvXff5eFg37WzY4MEmhf6K",
  "key10": "4y4LGd6pzqFpzY4kYiWrcdTtRA6CNBnaTZVyesaNSNscsnSh5Q5uVYxHscgn2fybGXX7B41Jno7zhXEkudHEKZLE",
  "key11": "3pkQUo1raJf6vuWfrmdeSq18WPBv9hnVqcSoPHiCdkoXBvzS9mgGAZq7ummhkMmyAC3YhPbGzp2XQ9aEj6r5jEqd",
  "key12": "3uPNr8Xq8e9MMf9xXxb2JAb4bZjWULyWkbBQVDNhPth6hFPkBcVhsdMyqAB3xkdy5cnPij6WiGsLxvsP6jM8Xsk4",
  "key13": "53GUZAB7xVrhSieqUKCpQmv9ucgDxGC26t7NHh6yDE7Z3oz89XYaHmfbmxHnaSk8aiSL9zpY5Nb1gJK9vszMiPwt",
  "key14": "4DiZSVnnNGoHG5JVLcCX9jBTrSqdrNK7NNVBGW7UJRws6trps6eAsfu54C5dVwquETNWS8F4ZbPUhWTohHnNbV91",
  "key15": "R4qM1Va18utNTGGKXkxPQHYbJQkJdHs5yHZEDM9hf6MUW8B51C8hyZid5sTLVMNNvCX5xTKzsTnUqFBZUHPX5yJ",
  "key16": "3cv7pY2vNhZK8eYQSJyfi7eTbtaqq1ckTKbWYKtMyJeFub88eTVdLoGRnaFTdqc7PmKmzKxeAasMXzVMyouBfXnj",
  "key17": "3xj2fk61bquUVSFio3LNaVtVWPnZsT1yBPYFddjK9cVxieRSez41iFEtJKh96dWY4VSJpNH7ogiCpQoU3VhJkGgY",
  "key18": "5QHxJkZh8cXLvpRDVXAZ8EXpTmQ7gzBuM1RvRZuxa7VSK1oz6eqR6Svk2XfWUMHNvC9bfyhwsaCmnhGxMB3U78iX",
  "key19": "7j9TcKnfg7aJd7N72hgV4hGfriCdKPZEuaZdKvPasWwgy3WRbmBYPWabhKZD4HxaxR7yeJgyEqPYJeXoB1ZNygq",
  "key20": "5fZJCZvN9mX2x4sEo9bDrH6dS6XBjoocXcN7Be8jp711NG7zAtmimZaBeYQLsSDLXzHLY6kVXq8xsfGSyjFGgvNZ",
  "key21": "4SQrsaJWHq7rKadwdTdwVmrLrwH2CkZZCizjBkPvs94eXLnbTFNpgZmD1RHE4Ab6noPtKssEP2rDbhsZYvz3wq2H",
  "key22": "RBHibLDnqqf1UQa3rqkWKkQDVSuiiuo2ouFqtYdWLkefmTFqbm7WdimrUfXBZ9G2KYSGs32i5RwY3A3erpA6GQr",
  "key23": "5mcJVVoDD6tB4n4MUmj6yig3eeMkmNQRbSUBtt2G1ZPvhG5y34zPddEGFPXBRypoYVcEDGsANa4iEeLRhAc5ZMAQ",
  "key24": "VX3FzCcrL3G8h9X6keCMoNZV4VaLnWnGtDmq9unsQgYhaHsNKK4gYb3RFFQhwo8emVoaUhUZEgKpDJ46YsRZ3G3",
  "key25": "5ejtemWx35vUFHf3Hk5eXqmVH3ojux5Aq9Nyz1usBHrDVaovPsjuSrfXp5JaQNwERzFTceNG13KKxm9kz5NMv5wd",
  "key26": "3zHW6USGd5SeZRoyDgLESm23biaorU3ze62zwJ5Kb1nz1oM2G7rTX4z9bdNNVZjUzGp6FrT6M5pFWgx2qdTLAWTT",
  "key27": "3ULvBpyQQSW4KD2PunchSs3khQXdcf7bgA7FYh2sUTewuSirMLQjTZLGMh1VsdJ8Eb4Z5uXfhFMLo1E3odaH1BAm",
  "key28": "5mBV3pATrbZnmVYCQZwjCamzK3yegKs3jQ8bwPoEDqPBJg9b1woZuT8V55yNK6GKPHPhSszG3Dzqb8hAevn3cgJf",
  "key29": "HL4AJsMYqdunzc3oA71D5kd2tmKu2b1md2XBG19qvFgN7yiQwUq1SHJ4pyyiw987SRWpHBKCkQZMjYpb1MtBdRd",
  "key30": "SEVQ7vXpGhefdZUyDTa8CzdvzDSadjVFYuPSW7pFDkRvp4R6qhTqBopLjWanVX1WUHKEWYqwZwDentpfHcJM6zY",
  "key31": "6TDRuJwCzLwnikUiMVntgXzyBwxH99YnR1egidUMQ786hGDhLSjfp1Stj4uT7LTCKbJyoj63gMWMWtSDyPzt3BH",
  "key32": "64T96hiZNffUEkCG8hgrX8Y3rJD47C6Utzmd3GZjDfxY6e1sEpLN1MwkTu9bqiKDPWREiMJ4XjD91f6T4DcPCnVE",
  "key33": "5emdv2XkVcgfjZksPiZYgTFps7PwcpnZpuzhm3ZRHGo8vwgjkDcqrUSziYxzwprqKEEBAS3RAQhyozP6UxTiJ5ob",
  "key34": "3hHpqzUGBCUmnhwJjsEP8sVNnmsqpHjAzfpHwzWMwjYWyTvUaVNyRUTvmHe7dosAT5SDHsbYqMgdvDxfSAvdWhcL",
  "key35": "2gBZowaVtovh7y3fXyKTL8JR7V6D3Y24Enw3eezsejbRKxMDzD9oKaEyjpvgtxAAnFVvaN9PzggWxKB1WuMibiuy",
  "key36": "CTvmorE74zk7RiwjTiak7dyFswY91bBD9jidG7ee1JEMHrmX8VXAhQ3vRTVLWH7ankaKVNXVi6CrJnTidRBdEin",
  "key37": "5bMh9PudGeapbVvvrNjympDX64GfrW5tUU8YnLYo3ZytrkFMMvKcc3naSdui1DsDkbfMwWh7C6fYALHHi3XJowv8"
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
