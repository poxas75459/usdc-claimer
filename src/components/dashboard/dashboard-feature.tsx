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
    "3hXGg5RRrgFSbgw6ph3Rj6jDeCyxhNAYQmb5Uj8K9hggqKwqhUG5upURK8W1ymisBT19ubndmgEftVSw21mEeQ4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z6t1ReQQabKpedAjPTNceBKk6Vg1sRuGVLfvqBa7TrqWT1hGi2ZKEGDRCBeuKcvwqjxxhFvZ6uu9KBXEpDi6r6C",
  "key1": "h33DiadCYbwLfpEsZn8RUg5bqU1bnZnHGnuTo6ak7qDMUJ3yfiBGMkHYzURJai7qi58AYYi2TikSazjtH1fixsN",
  "key2": "2VA43dxXnbv9zd9vDmXSe865rVfAuagacAR53VH1zCpVvh1DmBpTR9QS6LUWB3QQrsPoL4UnVDQ3GzqYRd6VGSF6",
  "key3": "4mzhSeSd96Trv8FudXPpPKzTeqrBGDG2zsiQjmuU18V8J3nVFjYFsbeAssR1wNQiX3LyTEMescTf9KqYRV7K2wxz",
  "key4": "4AWfuCfenajqSHToj2pvQaDYzDqkySSMb51DnzsMM7R6bueSSSBqLMKcZZGjVqnU3gx9wvPj1mTkprnUMTgwPc5f",
  "key5": "3FY2gM42NoaDxwNoHyaGvzwEQJrePiqEQBsBd3pxmWv8TgPGpJqKu9miMP24aETEyyhTeZnUmaFemf4Q1cWhsE7T",
  "key6": "2FVo4JgraT3LpAEuradECZzQNizTdYYUVmuuii3EK1TdDFr7ZF5Ycms52rmwAvqKa3WAfP55oWD9gZvEH7JdrpeK",
  "key7": "3HtiJ8wBPyomvgYrVEB7SRwT2rfrXesw5iHnMSBvmQo1z3M3dvtDKxwE2bgjZmeTVsmR8Wsgjw9F86vbtjVFeYZw",
  "key8": "2Zxe1tekHcATK6zCfeektrt8SsdxQnP9jmpSFsjcse4uny4rCMBA5dv4vuAs2oh8QW87M5Wu3X68m8BubdsgWsMe",
  "key9": "2qMX1gAYKbh8oWhmv5afaBQbgx6ijcpSFsV1zLSLtf6vjJ8CE5UAB1EqTroZQKg6YCzXbdxjasXJCuzgjCMjvH72",
  "key10": "2bf8t5J4CLXXPwZv5x4D8ZqVo2LxXPcYUVWND7sWWYjp83XZp448hcTtSa7rvmX8DkyE7p8SSu887opi1iyJqgSX",
  "key11": "2tCpq4nmxcaTpuiqjMba63rzcbNvgEgTrGFzW2SqFDxeV8ZNbqa9zBhYor7HSb8BD68x5qBW4DVcPKu5tyBSXUDJ",
  "key12": "HDc2VS1zCuUD6cwV6A8e2HWE2wCGCRdrnzxcAkt4nR7ciPSRBfrzpgGdYHySLZFYF5pmm9Aew5qwjvKPKRngjUc",
  "key13": "3cZ3HLHMjrQpsAhahnnF4FxjRmajXxzVDgSzf4KiYuKcTnGGct7SSc7udjJx9hvdHv3Yy1i5k2bNK7puowg8iawM",
  "key14": "4dBSKKziK6oDVyyyPYKMvZBawnP4H4d9fEs7XU2VY2pzwGFvHWsC6RQ5A1GBZT3u8HbhA7G5QXUywoqwYGhUstvT",
  "key15": "3AnFmyqCbeitdB7kP6PkuQ2jqzHYZTRmjJx2xA4rFfkKybhvM9LuxDT956Egm2KuNdzbtDMpYTr2pfuu53JQEFL5",
  "key16": "39ybwAABuiGKrzRMMQJ1L9u8n564j132toDSGmwqicPGauMiP3MKbCEdCYNyuy4dNZ4n5Qhdq1X56H2wwM4BCBYF",
  "key17": "DieLKd5hmq7v5gzV7sQAV3Ao2mXRC579VmJ8eYitnYN1DTjQmPd3URsU5KtEU5cxaetj2hFK8zqhWDS8n7T7ZYP",
  "key18": "iPwp1sn5vgWi87yg8Yyfc62NN2hWycp4JNJh1F14gkz5RbuWqiU8VCvRRVjsefAaZ8ii8e83akLbwVJt1Ko492K",
  "key19": "4vXLwqyqjA4AXkAweRyKFRjq1nZyk1kVMDPEPZA5LrEaHc3t4p93AxDtjFBPCuA81d7ZJaTnnhZo8Nk5cM8dmWqR",
  "key20": "55dXKAy9Bgmpit6XB6erNTjeUivP88XRDHeLdVeFbY8cUt5BJhKYj7CAfWqwrfAgaRuDnskxQkAaZXDrTso4gPjs",
  "key21": "5nu1GVUhACENf6ZoCZHR9prhmsm8PnTZPE2t447KTPTigspS9hDMRtrkEctgDgPYfoPMbUMY3AELTkcEmYW9eGk3",
  "key22": "2ypz1d1LTt9pCdQiQdMKe2PYrArEV6Riua1ka2giPpBxigLCAuxEyxgmdNsFnsyZqKRJ9hZifMnvcLUiS7dBMS87",
  "key23": "3UHpZNFMmAUAMm37fMbiNVm183AofDG8KEW2FnvpLLqQZ6YaqtVrHnoBFmovb6f6zVykNkXqvcXPkoBoGZYhcDVq",
  "key24": "23zvYomqti4keHfKjG6CzPdc6oRMzuiUQhAToRGjcaYaucau2GaqTwsGwHLGgwbWqL2P8VWnuUJGWzM6aHoXuZT6",
  "key25": "4J8rDvPyDoGCy7v8rNwbMNh6fxVUnmkwdLb7R4BKRWETudP6sFft1NHqNS1KGsc1DVV8g8BvnQNFqXQxmrBsStHi",
  "key26": "5eY7Pm9Tbb3BUum2chfoSqNqbFQqj88sSEgsYws86AoLxZbip6qdqaWqZ6jCLqA8UyLg4QVbFfsfd2NPBYAVfeAc",
  "key27": "SJzyypv9pggnpXstX8eCHc8juad9Wy8wbqqoQUCP5CxJbyVyM2QZ5gcqzGd4g4p8BXPtui2KLzp4nhtDT82rzrM",
  "key28": "2UcJwetgWvU6h6HuiaBK6i7Fv8ncAS8EqJXSMPsjxLwPrzf1Tmm38HogyXNJZg5vj13MuT2qVCLZSzruN8jRVz3E",
  "key29": "4qHC9RXiUgNB7YmWuTuTXJQacWuXPdiKFrnGwk14DuhWibfcDgyqcEdLjtmsAYNb7E3W56P6mw3inscQZwDSWAzC",
  "key30": "3bhRQKgrUYaVP2YNvaCQM8b5ogz6RTcRXu1AK3F4eWfCgiNLx169VJGV9DzUUEtkzUfKWHPhMKB7HAfw63xkNQQR",
  "key31": "2brujNMxLXpxWN3njJb5d6f6wLGjnq8GKC7L2fRxJtbizWniRPB4GvEuwzMD8eyw7R9Yzjxg6JmitfpHFLPaWNdp",
  "key32": "2uxsT3zkBi4QLovRPv8Yni5ZjR4BprvvTqW7TZ9DEmNWVtXgf4hczy4kh6kM5xp5qeyauY2WZubkRf2e5CZ1HikW",
  "key33": "4TKCwEVC8Xuc2LHJknkk6bEsyZQojbngE74zVWj1SLRsmAtLPZjwSkkHXiozndUXUW6UjPfWXHxqdeP2kChoxutp",
  "key34": "2h16UbNkx9qG7qHnHoJmKrHDsxcqw6t3vXNf6EwDuwxKteGRzfB6eEsAWuUxtxxzReNBCmimhkGvCH7LBnLYJAQe",
  "key35": "67izJycKDdC6ha4jCXZwQGHxh914AKcPXRTQ6w8UXgzYKWzUEhCWPpm2nbRS6gqXJbkRrkYBMEig3wQCue4yfeVp",
  "key36": "54kPXDEiVyftnDuq3S1qCmaLtYA3oFaPBQtXFDaeSiDcf7mjF1uVjEgj6qUZ9kmMwUUQ66iY2cMFuC36KJ47jPWm",
  "key37": "4RK6JHL7CeftVjnPmLQ8qE4DbsBSRQc7LTcAkh9P3xNdZws4KboyTAsThqBRHAaEaoydZRupTvb2NbetE6WutAXs",
  "key38": "4M4xupp5zMsQBZz6NSkEvxAr61YfeE4NVNcAE2BoPftLSZZyrs9mmoSQeTdeTHwpd2HrXMRiXdUnn6zCSxBsJps5",
  "key39": "4nQxbVboYgvzQ7czu1tmC1bKt1T81sdfCosHAGdGhD7fM5gWLSMpLY11XeagtsK1TZh5ovqUYByX2UmgvX2nREwF",
  "key40": "4LzmSj24CMh1T7GxWiYYHRF4YrW4pqW7URqE6NLbjb1p4P3MdizCWTrGAjUjFAv3cxmcPoekExcnGerW8oU74dAt",
  "key41": "5f4GSaDMUSCLmrPA9j4HiqDzRwxGt836JG3ddMATsUmhYE36TvKfqKLigZJVfAdF5fBpg64Gq78T6rRuWestW7RC",
  "key42": "5Qzwy7pwCpg5bqshCAek2ZwNqdHTGx2D5n3CjC7eLqbqdkVrwVPQhCFYj5bRHdH1t8trXCJnkMjUQHepU5Cqp1Pb"
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
