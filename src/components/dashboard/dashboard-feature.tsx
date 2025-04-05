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
    "5U15dzQ9QWHSGiXgCRg4CqwXZ5rT5bDm49dvVLnrvRP6w2wHnCcK67PhXBzjYcw8TqmCJxZ78epv8sgsUcBWQ4Rz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54hSSCfS6vmMoUJhBqeByY6ryQM4F1LDjkGKUixkUS1pKb9wNmvBmkQLYURm2c4TvvzGLqi5SR3K7XGp7gRS6ieL",
  "key1": "iSwQkBhTeeBnecsTJQGCBKXch98y2kn51nHgyLjztnRTaDaMFffM3E3auLDrDXqwfy1V2SAmsb5MgKKX8Rb5KwJ",
  "key2": "4MwgpRmsMv2eQmr5FxBBETJHqAiMRakL5DdVmLfrymArwDbPMVbVMvMrf2PhqKkc75iGRHJuoHkb8G2CgdAmW4k7",
  "key3": "3y2dv4PeWrmo2UB5fAy4AgEMZ4ShVB4h7kNDLmjxhthABA6Saq59jDkom4UrRQDx6pFBq45BtMqoaK8TKH8PBy5N",
  "key4": "2hpRqjUj9cQRVW6trzGQipcCVJzpbtaexmFjVrNNara9F9L5qoyoVrMYcN2zAHrPdkNkyFvAF85uyReM8pCno3xS",
  "key5": "2dYWxoHXgKAryUEoX5EWzH7cBSoQsWNNG9MRSyHXEJfFJdFFqmHCCfVcTnEPG5ZvZae8jQdvWR4xnSXDNQNAcCtb",
  "key6": "5SATqU8geSUFpVU4zpVQGiKK8Bgh5647ES53jVs2Laodqqqvn5bKSYceWbRRAGuyb4FBqk5HEM93M53fx4nKX8fk",
  "key7": "3fbLbFsAH2TgBVWg6Coi3RKAMJtqWD4iyzLesC4AKF38BojMtSA5o2aMEJQkYJFGrDuNMPMrkv1MWNeLHpY4ewh6",
  "key8": "nmBqV2q9KM6Q7UTihpr92SFDeukj7gKLhWVoBcmYsdDwMJB3Cw4Aqny7tnU8dbnQiQYxuSv8aVjnyddsLue64K1",
  "key9": "56Si68FaFyFeDHvUYVGXAt8jufYEJdFEFqD6ijVHs1MtX7dGGBDVT4sitqMavmKFhzs1XXPzfxUQvpfNAghndMAt",
  "key10": "GWDYsSY8FYuWzZSHjd55vKBZzr6ZjYNUMd6hm9RTDZVDqZEANT7EJoNV5b9qDxEQcPrfF3YDYw75WiVsSHW5pv7",
  "key11": "41WWMdbrRC3b7N5mduHaXCoyBfMHgnb9d4GgKqvbWZjU7j6H2x3TyRvG5bp8QdTdpLFpnbv3gxWNsejNcPmWN23V",
  "key12": "42GvaxEZYW8JtZsJeszsZfbDcrrDQbHhc7DUBgYWZ7oMUwat36L3cX25sXgEPWeVKfdfzxq3RwxzjuA2hqWZAjZX",
  "key13": "PnZ6LxHPDhh1EAPcCcTPvJRzYDAh6fNfqLjcEYtG8yy9GKVaQehYNwq1w8DFoWRR9H4PJmxuT3yCWFQvTHxRCTZ",
  "key14": "DtoaAaV1S848PtFJtoBoBaBi2zagcVbrLBtQEc99ZsvKn8QBbFd8ezs7b1bnZtFn8gQvEgpAS87Pn36nU6aAYDe",
  "key15": "24kpv77V4gywpwkb4Wi5Y9QVx15hv4FDm7Jhj2DvrnwchxEJ99XNeP6gmJzviAZThj8wY97amNcgRc7RCUNoBiUm",
  "key16": "4FqfjxwhR6QHutxQUWnLpnU2Cedf75jomcJ9BcpeeCGk99UBvjo48AbkoyHA4mgYZDjdUc41ifYywe38UsP1PQLG",
  "key17": "5mEERH7tH9HztLuFqe37o38YD8Sc3PbqZKjoSBxqcq5SME4y4HSyQ1shmjkTe33QhFcFWYhwbW3v5w1ViSxhUZ9x",
  "key18": "2X2Wf6hSYvWGvxBgkEpF6Bd55iyUoUHY88in3g87SPdchPZih32quF6SyyfpLmgErqUGemjazU4kGKxz55d9EwXU",
  "key19": "52gyJs7kLT8z8zj1rHbAzJHPWDLtkmU9c8sBT9ivBAKqgStWRo621qBapF7AoiWAPdsj81pZf8irywqmPiGRazi4",
  "key20": "25PJafiUmddABXT4obMp5KDbva2pH463xjzbVhkVJcBjcBfLBbh1vvRAKxLhzi7TG9bnfWLgP71BiaRDUDVyJ4tt",
  "key21": "4ch66Madq2KMxj9MmjtfZWGCxm9YG9NhFE8ix6mwBBCGLz7bXCuD15vCwitu3755FBdoV5BpRRZQy77ZcMRkJmUm",
  "key22": "4z7cLSYcs2LZsafERoTx734MQ5FLjARB3EMQuZSaSMsGtmqE5TLJDthM5wNAHjxuHDP6eXsa5rY9Wysfoz5LyzMb",
  "key23": "5Eqbcy9CSUvL7FKvt8exQwkPz6qoUUBis9yKp1yQPCMLWZfUa5c6icCjyc8sY3qnFLvzD3ZzZGfsPXq5YQGgTofc",
  "key24": "4zdL35kfQjjuSG6feTqMD1sntwAB2ERPgJugkQ2DnLdCGJGvngmeTioWukaG1YTUwuFzaq9D1Y8S92eWBrk754aw",
  "key25": "eF9pNGsdBuKZm2dKtP7v1AGSnsw3CYcem8LCbhJCNUxyLxBFUpUeqi8J6qnGko1oDLF5165DYa4cGUz5ZKy17te",
  "key26": "44yy3ALKGdtDBwwJWDLJunqvg94fzGfEuoCwFjCYtt7hMH2UcGHfbcD39ptdkvKWMSmiTaF6boHSmEZNGLKL1Sgh",
  "key27": "4DBmGRxHtQTsYt8KYRvBPhHoaHc1V9z1kZHHSAGCwwrhiLL6FPAEkPDo1BQAZt8t6UPPfgRbBzcHucpniDEAZJ2W",
  "key28": "2aZv9cPPtf5NxqNhZAqJRG91dygeinBoCtbF2mkiRnzXBmLmapDJwXMeUes2QQNceGyt8VwDHefc26Bpr1nN42HG",
  "key29": "4U1XaWYjiFvgxWhzsmEvXJFTnFGhL9NrtLWi8CqKTrrzaGbW8zmjozT3nwFpzPoy4kJGPa3dziZWMoHsZ1t1ZTCu",
  "key30": "4v1U2mMfXTTiHetDh6dMu4icfGH2qpEX6cLgsmVSheNTGCcygPQWZQVwGtnNNERSQXE91SE3R5p8Yk3r1fRDyKVZ",
  "key31": "2sufSjLPLQi2oiLPQTWAjpTXE94YJJ1EKD6xycEjp4zziigBtFS6jRmBgzrMnT2z1aCVshAN4knxHfushJU5pBnV",
  "key32": "54Wsrhe6TQUshBrei1xKzUsGXyqkqzNPRLtR8cwmhWXkjVv6dKTFS1uwAhfTXVYLFqEUrLcvJZ1fAtYVhNXaFVYi",
  "key33": "48za6fL6WKL3Qaca8RuWTSp62VCfrj6RKERjXYgggkfAJA2WoHQmnDARhUqBLGAphpgC5uT6jCr2XKrLNamx1SGL",
  "key34": "5b2kycu9CFoYU2hLfvG7K88VZUoKmSAfZAhMQHLbekEb67JGRGNDk1SxWQhoabS1C1BEvsiLHvZp7KzQJNdZqKqA",
  "key35": "zH9XmdZxxSEpGthrhKp2d27kD33fkrdBXb9QMkWNZgZV26zuMj4NTwj9MpiDKDciMn3b8ztdmCHfsQwv2NCvCSc",
  "key36": "5e4C9Usb6Lw4Eoeqd4treG5szxAdoBGc5ue2AaLMBXjwEmX5ceniYVTAGPQg5EPSgVPfsfYEoquedDbGMuCKoVh9",
  "key37": "5tfe62EefpBdxkzJdvgqUcwxsBvCVfcUty1URhjpJcJCC4MgVCwRYeRWwqc8Ctkw36Ahmirgn4uJMzk8TZ8p3swq",
  "key38": "3p1XEajjVc7e6kV5We4LECYumNWp4hcbaKwfmDxSCtFqC9hfiM2FqGqokCbU9MW4vjQZFdHuy69KkPArCtMSdPsU",
  "key39": "5bQzj4494JX1nqmrCcavHUDbJ4E7pY6LQMA87oFks35LvG4RcaLytjZ2CjitZbHFTnYpHPPkvg7BNN4NYhuuUYZS",
  "key40": "yKYapGZYvnoKEpzpQAjmRuXx1zdDNRVCp3QZrsPWdFTAvFEE3oQKwmf7NCSjrn5ED8bMnLnhqZ12RH2LVRBq7aZ",
  "key41": "3ouvUHY9GjWqW8WY11KxcTkaWvRcRi7PryNrfvLgfNKo9C5Yx8EgiuwQHuUCgoZtESynBgkoYvMBvbQeeMH9btZo",
  "key42": "3VGCX52qHgM8nz2TYB5ZECfMyCwQHotafeNYYsofje85P8bjzGf2XsxMzdFv8eSfSEGwSeyLsV7CKeByFDdoKUgC",
  "key43": "4DB6jv3MTo2ft9VjL9xF7vrdhhWDB1fyPW9oTsxMryjH3UU9dqE5Qwy4WHiVE2LhSYtd5NBHwrfD2EzxWiKV6UnG",
  "key44": "5cwzFQETUF6QTPhscQDmMUPPb2N3DAUsjyfzHciE2NKhFGqZJcks8FN22KRa6FssbfT4xHhkd2foEiVEpX1vyf2",
  "key45": "28V7MKEYhxPU9uvby2KtbjZTX7CfA2gxUkuscfrnzwa4dBbuEHn6g8QfZym3BFLNhtJwC8A7gZUjmKBxdNSxwS8z",
  "key46": "h46ovw6dALjQ2ESd3qEwrSrvY13dR4GrgHb42us7mRR7wA5EZ4gQbdR1aEKk7npSvDxrgPnLmgAReM8Gpk1fxjK"
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
