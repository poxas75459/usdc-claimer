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
    "463cBkm4t3oSLrgBmgV4JK7AmAKw8vXnbcyhYAmTZtZLaYK5nik24yeFufonU663P8BJDB4rfusmtgRuR5LC6T5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52DMbNAn3ftWtHKzbSSa2EvRRWGdYWE4t7gnJh6uJY9ijMNSkwPFQ8MzyzJnsmTkXybcpDoFtxZP3pQgKx5zKd7M",
  "key1": "4qFCv2mBJSAgZxHJBC7XHQ82VPaHC4aqUKo1EEtRz4qDrdMYsAGbjpNJpw58sKQpQEwUzYFY5ZKsZEdg5WyTKpA4",
  "key2": "QHnFEnHCrUysvTNXcsooAw2XxY9Pk9kZHZdSPzb3SniXVynyki9cS6g7SZ8TGjMELH2YtPeXLh2rzNfReRVYxgp",
  "key3": "4UNYwBwrtqx454SCzSNiEvAnsJD4NHu2Gsk4Z85WSJqtwa8bNUj9gKZZhWRkwjGfvLHiz2omTPYasdZoG3kxqYvs",
  "key4": "2fPCwYr4aT2EoK9EWFaFKooKjQSZeX39xFRDx1qb35U8afDN1w2FScPDvEG5gifbKuSDhqXAQ6i5fdTBJeiDJoKi",
  "key5": "4E6gQ3HkT5V6RwCLYcTPv718xVMYZehmPe4WV3vdJpxQiKiDkqrNjCGxr7aCPkn6cHrJRvVeA4gw1feotCmxT9Wi",
  "key6": "547KM3BggBGjuXT4Goadk3ptKGMzwG785oxsQVmV9vyD3BmijsvSeHJwHAE2bYGDWjjKFyyYU4hkyhszxqtBWwrd",
  "key7": "2moYQ42TtZnLQWhyhetpJpXhAY4WU5xu9nrfW7vchYxFvcLzeDAxDB5TN27CxCQSx1tdma2YwSfDTqXJ8EEAa59x",
  "key8": "3VjoCPCMgbnzfYGyHPzaGaEUUnEZ6FGZKVL1uFmuA9YG74CvLEBJWDuX8fXbHdhVXfkihLwDGeXsQaEQp6ryNrig",
  "key9": "52ySCPCZKQnL6tmbwBPzmpVNH7tDeZdtLKqRPu1FXdh9D78AZoHU8kF6HL8NfLfFcQmB2rnuAk9uVeTaMVRJxtZq",
  "key10": "JJgU9VzA1kR4XUBpRkPKqotqusFMWxdTC2EVSvVovnsNzQCFoaznTs2NQgr1pwVJ9HJcqws1iXicNBxT6fWoukF",
  "key11": "uGZ3BB5gJM61cE9SyDuRsoGaG5urAXXohZXovdXFCqnAzzow8q8cmKG8zQ5BVhTduTQ99rnk6qc3GJCe4qTXxXr",
  "key12": "5Fd2y3rjHwiwdNu7UDHzwVNprLMr1vZvqKhWvyu81gPcQ24Tup1QDH1kNtRdpLMLb55FQgVRxjc3BbzdpLd8hBe8",
  "key13": "3xUHhSS8rrTNAkmPuPzYwx4nrQrrC1amunKbwTJvk4oCdVZBRR6T1XHzfKaXW9XKKfXjU4Muru3Qj5VFfeSxUt7i",
  "key14": "5eYH6XY3XUCdovPJ16GST1284GLKhfCrRQqS4otTqdFcLHm37ZuhYHEgU85FkepPtAM5rBGq8aSvugfEvRP1XprM",
  "key15": "3b9F7wght3PBd8VxK1Siv5RAjWVBbT6MwqpbREPfuwYqzQtSoDs41YSuREP9UmTCV8A8T4xP2My6jGWH7nZdPwHu",
  "key16": "5tR9ADjUXxDVLPXxq5WzxxwwYqQyVaknxYG4tWbRQSEK5ca7YFQAqwGV6dHsVCbKMguCxJefUt6ruRJJutgtZMmR",
  "key17": "5bhMsphs2XLKc1SsCK1KN5AVyJJxseYHKC18XmnTfdSBHQGXAqoMwELvnAsGx1RDjG6t7UwjwTcvTLfBYiPGQMCD",
  "key18": "35Wep88DFEEUWrT9ovSkyLZ7799cbmFhvg1mQMDoG2sKphaTKBg7V6uU1MpcsEztJ5cqUwYmGhZHBjuuFPRAcrrA",
  "key19": "32GVjbCiihoXH3DsKZfLc3hD3qPV2yHYvRXMf3kxUqxiMjGWF6z5Ci2Zu1v5zidfVxS4JpEhgduMWa2VUpNoMkem",
  "key20": "3tWY5F477WAaTV7mTAzugw7zP6bJdnkuf9hRKCHritXw6kMWepLXvTVs8Cims7XcvZmayAxVo6Wv3dcZPNhDgj4T",
  "key21": "4Le2Ybg4r3LXSW7TycHbLH3mXxnrtTnpJJd5JdfHbXouAn7EwZ51LH2fucWq2CiqiCV7MKYUYsZTkAjhFk3bBQs5",
  "key22": "46BTqi1FWW8A5GYZ26SaWfyKP2V3iC8y9PMKVERh8iKRMvaJNhu9DgavGrgwt1hyzqpcGqi8Nrmp45q5EzucjLuF",
  "key23": "jrcjsLm1vTbDahWo9nYr2psufCMssnXEdftwadNvJvwRa4uwuwm9a8eLqHVQhm6vZijtGuSFv95dhnDyqtVYkDR",
  "key24": "57BVvdhqw8NPdwuAKViJahtBjgvKfNqKAKvVbijA6MYGMbL5Vf8pKKMyGZmryDSTbPpcB8vsG63bZbh1Ti46ja7t",
  "key25": "3csbHYnXK9xHQ6bTUUwfJ1V32KWiyLzj7WydWq86dXHCU3ayuZ9AMpnzdnMQsztkiG8wyJPDUq85DDSPTuUjCy1X",
  "key26": "3MABxYWfkNhJsPnUkB3EkEtR6k83gK9GzuqFQJ6vxLVMAKCgEJtCBQB8NRK56phz9fNi2oHUHF6DZxYknpMmXgqC",
  "key27": "3BH6SpXrxWTmNXPyTeLr49o9iZGpJ8fed4uVcxFbqRKnbpi4atgPnT7JPsmDMPVcwYifNApygKdeLrEMwxA62Pbt",
  "key28": "mCwoR8t9YBMLGntQNuBNFqCbGvPis8xx5a54ZVk5JDGQXdWUu3dKYfy9XRbMUcUFBrGVDPQcJtArTkCwpAsTSNK",
  "key29": "Y67YBi5XP2Ax39frKtXGxsazngUucGKARDoegGN3Dqf24NCpQXwzf6bkrB3BEUgrpX319KHmmvVMNPV4mHKSQXJ",
  "key30": "2HkoGT65MJsnkqQiPeDooPpMp1zCFawTeaXWgWyeYE7QSZPyNuEzPPAd7hg8dQRKeEfeLQbuvkimh6mbZ8hzxyoY",
  "key31": "9ANMvFmfzvSx8p4miDz4BT8mGUbiAkZSJFziy5aTSE1LhfGu8yeEtzJAFT1gD6aftQpTo8WmqcsDHoEt7ahSXBe",
  "key32": "4ykfLRnghwgfgLZ6s1uTYxyU3MzzVAjz7YvJJLxLsfHHpr6ZFKJSLzkdtvwigUjh8Ad7w568rqTy5jVdYcaMBnWL",
  "key33": "4X7eNjGRwXzjzeA5tsotWRArzBqJrR5TH4SL88MjY74tq2XSb5aqtWECbcAJ9jdpax1gMzhSkn1L6CtKKjAqp2U1",
  "key34": "2Y8Tc5hBz2zZ2fqRydtRPN9P8UTAJSST3Y44TiHhXksegVnfgRwQQ9GtkLbt6UAUsn9HwYVv2BxJNx2oHvs3VtKB",
  "key35": "5LQjA7Xbq387kBMsVVQwUkKd4wmF98XC1Wngz5tVfXQj7dsAZUkXdezJugNx8YuGE3A9U1mY3t9Vk3Q46HKTKP2V",
  "key36": "5ci5gvm6hf4tMgZatNntXkfcoeedYMCVhPPz9seEpkR39zTqs1d9VJgAuzXAzZoLgxYCiyAo4HoHdrAvESECrjME",
  "key37": "3z8ePH5RYTUsPu3cByY9YDPVpN1JLnRWsnjd4rpcrViCXPS2avvnxqVcRW2DRwyMCwptE1CdUUXMHrzCC2Cw1No7",
  "key38": "2Ld4xUryWucNZHmvPEvb6JZmKRj4Jx3zPViNy3CiSUfVzKF82bLpT97Fvd4JQdTyVRz9ep66vaJ5NS2hJE4CxUMW",
  "key39": "5rcunLXiyoNxkQ62Mdkk122NEvxa54bhuxa6MBFbAT1VnxvgMW3xvHuZydffpySqRHm2sg42JVd9tdTwNHTzTm8",
  "key40": "255vvGGsMmp53H1WzwsnKzMLe4R3kCjR2AiftAnAjFhgTTL6ZUirFEEPFEdgwP3jcGU3FvZ9epwzE7CPvnA61jN9",
  "key41": "3ix1kp3sf2EsCHqeEbR7iUbqKoLUqTEpiQCPYgYCHBh19sfqEg7g65Ge3YYNw8XPYh6c5J6M4SCCK9AAtjVk6KcM",
  "key42": "4eYaeZ5G8ZX5J1eEQKSpW6NM75a8q52pS1ihU2KFi25WY74cw4koLAfbSpjpbDAgchxFFySBs7EvBRpbASC6yGn1",
  "key43": "3ukaGiURCFG1cpVqWKyZyezXEbgXXTdZa3o9QkeN7xFiFfaAxMz8MuDgrc3mRwu5tq4xSzbQobWv3tRRm5cJ5GoJ",
  "key44": "fd3ciQ7v2otwTrUvr2vdgNumGMFThbN8WEfQTwZdJ9wEXaiwKVtk1PfD15yN8MDztUaMuPGzv1U2gybxk7e2JQB",
  "key45": "3XVP9R4u38Gxs6EyhZCZDL3EgHnPmhsThATUB7WRz6Gdo2LFPcdKKMTpb43cHAVdfJj4sYe3LunXYyUmVPFxdM4R",
  "key46": "589ij7at9qawUWukDpj9QxddxKiWkRUU5Ha1uU3Xw3xwiYnVJNgFz5J878hGiYP1gpZo3rm8G4p21SdL9nzzBMpu",
  "key47": "6aZeWFyvsaQk68s1jL4njQxMu5c1dN4YzkUSE8L2GmhpqYHL45vLU28kEwjm4vjeFwgyHkmbJh4fmxXH4zbxssQ"
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
