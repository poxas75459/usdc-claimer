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
    "26oczFakszVKLWpx3sxQF5RoHkhfNSZWT1nRdTSRgpuoGBuRUXGP15iwurC7kxRWEqVfqcYQFYm8VgKc5uTNWw55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xf5LVGjxDGTmKciQJvpvzsaM1NeTqdp3M4pZrrRgvD9hLq5wpZZHdoXjYpKZStUa67eSy9y3ZW56kk1jpQifct6",
  "key1": "5RGHSAPKPQyRFMxHeU52wMLnTQjf2ghidQ65qUEP9pBu4Lpepq8ZgdGzUf3RwBKk2rCgBKEcTxQcLkCmKuVqxKFf",
  "key2": "32w4U2EdarW9YeufkPKfE4QJoQH3D1cykSx8TUP1aXdNZb5yCfiWASnMepbpcfXuXSfTC3TcqUsZ8qPt4x93w6fJ",
  "key3": "2x4vW887d95innsp58zXFDV6e7y1mYCpWJ7ercNNxfbzcZMBDABDuzkxUvg7USfGNfFLh9CmPhPvAm6Kmv1z4pd2",
  "key4": "4UUDi5VYfB7wN3fqCiaJLP784WzqCT1QSNVKLkikBpmmQe7xNmxUrnQXdiBuwvUpvvbipoa4zdvGE4dEMmMWsuk8",
  "key5": "3g7heT4AeXQKgJbinZWCYBpYmbQW3BJSqArRbmSgZBagYXLRoiXhVHcGoU6nLjeex23hwoWKWZwjkF4ri6Q9CLRh",
  "key6": "3KfKcbvL9tfVzPRJndSq5BRK1Ghu6zJHk7K2rryowo7D8hQfzrrPuHNZEdwu3xatheeQYUnWtCfzqZF1jAcFpeZ4",
  "key7": "2nn8mWXKC9uEV4oMEFXj43ZGaMakvMxnEUz12bKGJJhgGdMyFw5s9fLrgzXgrtb4qw2qGuNTnd2gU1gV6GCUysGq",
  "key8": "2RtEpZ26JAtBmnuEpQxPPGJ8PcbLE1JF3MMqQH2zCiiQLEtCPfEfThppKtPETGhAjUHeZdk9AR9GmujueFREjGEN",
  "key9": "39bAr2swraQ7u8j9yAu3cPy2xzTheWi4LFuhSSDwHpJBbn3bC4tBnBGkgVAMggJF9CeUnhy7gJ3XEPzEK2Li5Zjq",
  "key10": "3cdDkriTCQtvw6KKoS2iszu3yfxaRoGc9LNmHaYad8Jgpcf5dtS5PvBpJT3SCesHXWf8pMAuoiEg7Gtf6jxhGJgN",
  "key11": "J7TVVYCQgZnGoBSP62ZtKyrswNUxJK5RYyrW5nSMSJxV71zfvFXi1dE8STYTTGXngycfUEmn9QoDjjn4L3sRqNX",
  "key12": "62WrTj5DJTNgGBZPCmLwta7tEbu5TPzE9LsJivKqZS4egpSdFucJQiN45XCCj8CBa5rBm6BrQENMxvQ1GQiq3vF7",
  "key13": "3qhrx7mZwCPAidq1yavSj8RL3zD4gbNr24vMjVCqnLeSrYGNKKvdB9k7hQ3MQ3Vb6vm1WokgEKZcrzdrDdy4qwhv",
  "key14": "48JrJeizPetYUEK9G6yQ8pF861KVWgoDDXnm66HHmjD7dqiu4ukvErLBwsKHZcATjbGadebR123uCPJQ31ivgQby",
  "key15": "2QCr5yj8rzX7bLN5eA8xSyPX42nYi5TiEuo9eVovt2TQsFE8fUxsouM983tPobCEeaJ3cndfCJj1DxtAaRStVdMr",
  "key16": "5uH4xLmG9imVsN4F6M1gS6DKtGzE7FJ83oe4k3zCsGaSeEKtmMjsWvQ5k5rZ82eGs3npcdQQanm1vsTuem7uFdF4",
  "key17": "FMmxUGEP74pC8D1APZ958tcg8J5fkKY7vxTC62zHLtJ2iFu7BzaWxvxzAq5J6PpLYexxHTnNSvxnxcjQvKhBpb2",
  "key18": "35gHNhD1TwADhpZTEipYCfe78GNxez8JCjW9yoMiSdZPqLELz78nBpRzW7adtDkeyeKb539f9f6W6tG3Y7nY9DCt",
  "key19": "2zo3N8jLAmYETzxGVnhhCsiAhD78k8GyecDBsZzgS3PorDKJx4C8RT1ii1Kx5xePJEPoxcHTebXnyNUhEsbUbbmQ",
  "key20": "62LrWUxtk86EYogC4o7og9frR5WFakTDSHMa2EXyXizvtUNsozJSpo39EpUb5CMu4QhLty8EwZLsCxmfDC7pNoiL",
  "key21": "5KSHByezVsry4heNGFnJpDRix9E5fqR46bmRCLHLQ9oAwGF7rsy1CmmrafD6RGXU5b9YgYX2yCbBxCNFcU4GfVNX",
  "key22": "3wQFuqmG5T5F4pQZXP2HfXES9BKYHvkmweNDwLcdCdpq4nHvspv89nyvssCZeSdnJ27GqhPkQ5Vtq8PmmYf4JjRE",
  "key23": "4tcz85PnjxxvkSYakiEBGBN5LWu1hsTGvuCsbX4XosJsbjADgLSeAJAcZz1TgzXS6v42vWkkpq32Wjpxb1wPwXzU",
  "key24": "54PKWswyrqqHMk3Kc2RapMCKonNDyMfCszM51cmmyThvQXwp8ihR8JFmSwGqPH3KQvJcTobAZnQ1ZUBjsAp2m1kR",
  "key25": "26JTtPqFxViLAatnBRCxmC5g7fA9xMTBjF386bbFv7waWgUekPpAyUKeep5AzQTVdVLapnNNj49XtnkUXuxZCp4v",
  "key26": "2Wj3umewVsXg5BS3zVc8xcUsPQo1Dad56nb7fu99bgKV32PkruP37xuFiPsW62m6odF9A4EMGo5ZoFYdKBCvYwby",
  "key27": "2Gf2wDQeJdTcRsW1n2pkNGdNNzK1YmzufvUGrHJn271FWhC7vu92p36CkFzgshHvQc3gunvFsmtWLCAVwATGwiAM",
  "key28": "4G4pAzyKauT1x6QAuJkJiXmfQdd3zrskk83ikR5qZaEpNfD3tAFNNfzV7DHtzw5zFtfxxSGGBCuubZXBj5JeeLXx",
  "key29": "52awhEoAdMHrMUGbRx1sa7nN8jYQqRDFxQt3a6eHK7ZXrKNUCADUpJxvgwL8rFL3qj947Jgrv7LrDSTiQCdmYVcC",
  "key30": "2SsJr5JueeJJC16xPHWwTjey6kwpyTRKHLDsXE6SGRwC12sEu3ALLtZwb6Y7gZ1Wbn7ufXTGDm9mipDqRRcK1oUy"
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
