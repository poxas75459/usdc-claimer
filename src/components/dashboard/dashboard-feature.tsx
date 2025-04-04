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
    "2kckpa7xCPVyqvYveUKuPWmyQ51deknjNfGaAUGjMXHsyKT5NaiwjScoSHHZKVkxJufoq1o35qCcXHGbYQCyQWXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sRRgjGAtaTwShg65ywNBVqtGreEmc5VKwbagYBaBGVqDMWGaZw2wcuf5wnm6cJxQ2kaQPJwBMENJJVTRiYLaATh",
  "key1": "2LLLhBQ814PvH6FkhfrZyZ9mziMgHqvYcLdKdkHNZRD2EixPjNKA3am9LzyzyF5nURmpjvrVgvNXrdXEjC4Xb5ht",
  "key2": "4CUVQiNGnf5JUfzY6p5G1nAGzkzqsXXZBi1E4KbmdjH7HD7TkCohWYr7HcfznB9aoux9mpX4pauqv7uey6zJ6WSc",
  "key3": "4ENRDZPTgGTuy53sNoESSLrJpZP7ejZqDnefBncvmUom4yDPHUePDNrx42bi1BmDWat8H5i8DaBrWnKsuggVfg9o",
  "key4": "3RSU3dRotqDcCP3PkFxA4V5vYNarPN6NBn12kcWFxSmxbX8MXUDZeyxDuJxEG1i4aC9aHBdN5S4YNghhsJrNqkhT",
  "key5": "5XGh1xry2PWoKuTWdmCcdwFwpHfXgfSNq7vGLGjqSK6YyZovAZyiQwBRooQRPS4wFsDhQ5zCoZ3niGNHJmohmkzU",
  "key6": "45qr1peUv9ZfGkjaTTN2bLf9FR77vUZYBxfAefbHZEX8jxKZDS6mZHJi13c6RLDzqBrYeWGdaKtcm5kjzXt6Ywhi",
  "key7": "3uXXxxHyoqzLpM2iC8M2hNJMn3xuymeb1uqmGPHgUmrS6UeEiVVwA81W1HJJt3cfy3tUwCtVgUwt4QcLEeYDtTbL",
  "key8": "4dNvJnDS2Y8RbfxLTX4xUCRiU1cxGzhQEFpzxbcSHdyK1W98b6wfQxuRqQbwjJkAszLqtrEekm7vuHGkCW2uQkKH",
  "key9": "RSv9vft7o39KVVVnbeWGMktktYAzjDwHJTngjvqzc9txbsmuTFJ8idCRbLBtP9ShDKQ11q35YhvKuscKT4e6yeq",
  "key10": "4Vk5rPmBZKqRGLcDBaxQC1nuwkNCz35ghcpPdn3AZXguSyfj9V4GBbaaMPHhmua5MakcfbaNf89chSxVCBN9rHB5",
  "key11": "5RBiVdmAs9LnxxshghuUEisWy8B7mnH2uQM3i2krmHaNCEtNKogTxMr6gsPfVmvs1sWJ6QE5kr9P96qZDigMndrq",
  "key12": "2HLTdZptFXFcAtzmNNhevevkZYtmSrVpm3jsrp3c8dYhd8rNPPkCYiw8YP5cyZzE8U38oL14CtH4uNMVNEW4AuEz",
  "key13": "3Wjnr6QnCwnVoX9hAR7iVzGMBDoMnDqhYjSPrCnhw5YwdVwBLVKn24RMXNLhqyUWrZFxw9ZrTjuUwmW2yiRFE5Db",
  "key14": "37AtUuHMqgDKyrVY9GUQpuRJmGAPdKjEAy3zNwjwmyNkwt8HjwVb4P9cygrkCd8LmjcHhoDLJP4zDrWZ7CPu2RJy",
  "key15": "41uAqodGVz52dfP3pAR23jtKBPsreTZeHKXHS86DYnJC5Y7dxrN9dELzh331WLJrRNFUr1agUrYyMTBSSxQom7k6",
  "key16": "3JqStMxxZoyC4sqYWmaJRUZcassEZcEiHFcBKym6YBoRvY5kFi3r1GwWwvc3DNXid5Bm1BUVvNQjv5Kheg1bdemN",
  "key17": "4bcC8wo1EVwS1QFYgocGmyvGyDNykZxjodNM51wzMsEuFwqm7Eub4kcUwZebpFu1j8v6arpTtizqcjngobr6jdDn",
  "key18": "cyyxUpCQdEJ9HxLTaVNeoWxf2yew4H1UKSzUnRqM8HJL8Swh8bPnvjwipaQ6u1XBrewa2mZn1rd6eQWWaCHEY5A",
  "key19": "4cfm1bahrjtGZxECRBqsiYSxzYCSx1L6CRjnQLiqfR4YLYDxH25JEkmjbUn1ygE1JDxoTxaJRip3L4psAWzs3Jc7",
  "key20": "5YSYSr154XGfGTLFi55tgxmrTQbwhKMmzRfi4e9o5zhnFGtMuLLtrTCvVcLU2ayfZmHHwCcTLYJfeoqHjuB57h63",
  "key21": "3cka89W6MfySzidRnwEVGq5W2Vw2bnVLsAuKFh9iVA7eNo6ssj1TxNJRmERY8f4PWJYoKZF5NpiocL2WCPqGXeuj",
  "key22": "3tPkwhyW1wUNUfYMhN9V4kehVvDBQ2hgoLRAFg9zT33DAjSc7mvSR1kDLTRBzMnHnKKcWNKsuvF5gtRLCucambre",
  "key23": "26sSrTk9Co3yShW6fM1DhH28btaSJcHGTQFuEhsQp3vWNtxzEnSM8s7LCkvhLsJm96XC4j5znGkatPiVpfDEG8EM",
  "key24": "JgWyugTfqg7guzDMK5DjF1xrFy2VfG2RKhcsU5xWChr17a52RUhNQa6iZ4YQLy5TdZWfy4bCqVyChcF9U4ap6YL",
  "key25": "4bBNb7sDohfVBq5UByDE9K6W4drio4F7mMfGrFrWT6ygpeyHiXu3vDzpmjSJjAy3Ca5cmxtfTsUDxeMes88LRTV2",
  "key26": "spYUeY15pVBdfByQxsxtqa4V3MAkAX7q32ekvn54Dch7AP9hn93rBCtRW3N5NFWtPbbdVhDhajv8bx755jhQjdj",
  "key27": "DzeQyqsoytebTPBUhvwQ3otmZwepG64AGFhFBjcNMkFzMxjWRGGbgi2syqHchmAqwdZeQZbPavGdWXGrsNebkR6",
  "key28": "4LkKo27sPqRM69gX44PCMaStgcbYBJEyszJ4zhXAHUcreNtAur6pb3MJXbegyL94uFTb69tTVvCVrJcURC88RLov",
  "key29": "48QABMDHmWw86eKfLSuA79VR5XJzhZPEP6GEmCSQLYi5mV87kMSvNBwN4zJoxnp87w4DZojjyrnCtuSDJjwjtJco",
  "key30": "5rvovsBBfBD7AKr2uHmDsCR7vgLcXBoyGQVnVcExm68vomrhYVA3RjUvoM8rFU5EFHfiVUujrKd8pGasSRJ8JYsG",
  "key31": "2NNdPpYD44BGNi2Gm5FUVnjf5t87kZMEDmNkSUYc7PpNScncQ7uTgdBMVGnK38oNpufEdupPJ3wA4rZzapuZ7qmj",
  "key32": "3SqSaB8BwMJrYFT8ekM7dn1VMCgio7XXezEMg5Gvcn57FxGYSu2dXKkkvnEppe485K6ViGXLA8KNrfd6t1sT4EQ5",
  "key33": "4Ry5XLU7TjMm79WmBYDbS6cwRYm9kAWNzzcigPCh3za2C41ic7tu759aY91DxLzoc5wuLReUsB8uB7mwnBAMmKsW",
  "key34": "5Q5Vkn2mSyNN8XZohrCRkAQ2XPjLAQ2uwRvw3aeVwxcZaztQPEypviv3SZQn4c5GzQckfQmq1iDt9iTgPmJhpRED",
  "key35": "3AopDd6RRxSqnVNNLAqf9BLomuPxsi9MhUomvoQGy5LEGpgjWwe8S3xayzcQbxGNQKxtkN3FXuLivmgHEqbTBr8c",
  "key36": "4Kt9DEJvMWHwJoDjtRTiB1SZxoMaAkmybBcHP14y3in62E4m9vxyCS3TekZ9vkrhCASGoiRueM2pwkRcxPcd4YRE",
  "key37": "61wST644Eyp4KoJRW3qzaCecRph8xrZppHCsmTpGJbi1eZawKtfLsVDMWLPxquNuCL211Fv5fp2Kog7emRTDYpfu",
  "key38": "2JRkN6So42meV7iy7AxzpByZJhSykXzdBT3W4agCxYbGAZqXkF4K1QNVyv2L4Tcsag2dPr8Zdo7bxy9WMbzQdbDj",
  "key39": "2ioogYHAqLpZKFebSni3UPYUFh5AXdDpNZBXotx1MnY7q4C7DdvdcsKPM9Se9QKXFAA3DoKmF66k2q85QNVUyYRw",
  "key40": "5qVyBUcTScjwaS2d1WKZVXg7Z8Ut6AdNyty8wsTJtGaVHNvcjgMZ29N5hzEzkteE5Jb8oGH3eXvaHh1eTH4eEiGJ",
  "key41": "4NinQYemzyqKmJdsCu3whkaa7NVQSuPBikwTy4ovrF7T3ZnJrPeW8rRySNwvhphkbuHg4iWPRzxKdFA1Cr8BRgn1",
  "key42": "2kF1CC6jgLxbmC4MeSfXrHFUbBhHDLrRSayAP3dqTpUv28VYrcDHHshMot6PQLfXiD4MhqTfQxyX8mWrctRVX8uG"
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
