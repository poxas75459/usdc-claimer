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
    "3B8r1boVby4FDmYJCUP6zx5QHJhwCRPhj94beV1mYAkmik8epMyRkSV11AN197hD1ArnAKT4hzTtYna164x9sy5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SmuGEVADwQtU5tLBm4xWp1NW8eVsPGteVvPAkjLjKFL6qdWhUQjgcmwVK2BYm8yp9zW74SkzXeP8CCH42itLwHY",
  "key1": "5kmxfNh9w64VdtGdYpSJu2cgpeNEQrqJWSo3JTWtyW43YHNmKG1LdkvhtmkvfziTRWa3cn9DzCpu51V86n6e5gun",
  "key2": "5nPbf9rVjPQYXTudBjUW7G7MaHiTp4qDZ7sji5XhicAD4isxQi7gNfNrwvukNxHz8UdS81yQhcV74g63LHNuVbHT",
  "key3": "347dQjGt3D9QNuJewbktfqRVZrSSuMQZc7HAcWFBGNYc9Xq9DVvfoN5CfYGmBsnQcakJWAiBe432Mh1RCyj1nNPm",
  "key4": "5QthSFa61VTtkP3N8BUYAMvSUzUaMHqp7RV1g2KuUVTueHkWzPhXAnWaJz8qNMrNJXrqqBkEGLF1hJeqVyXHdZpZ",
  "key5": "4Ns9jtaP9KMY89V6jbFN7hUYx1UYYgoV1zbSzZf6jNKDSSh6Asz1oesgQF6coxncSM6zK81ZzyojLkWov8eHhQg9",
  "key6": "3cYq4LVhWU1sgzcseMuakCDszAoXGnqyZTTucs1a7NaXsa1RHzsc7bqKCF2yy4JrXLtRViqBP1D4opZAnChs17Ti",
  "key7": "45T6Vvb39ZttVzaT3mznRSXt4buW2f9jzRiajz9ZDBM9a97RjEnZqPXFhmKWjH9ZGs5SyWxQexxTL8H31jgL2FrB",
  "key8": "3dkv1HjEHQc1NTz4QcAXhp21EYr6QsQiQMD9QPXjR8ebh5UvY9zirGpcMzGFwAo7YS14kjrNitqhoKBt3kgYjUsm",
  "key9": "3RuRUDyNXckauZYnybLAJw6DG7co5zFpY3RBZtiasVUTzNVsH5KW1cvA6gJLcFTHsNqJP6nxxcY7Er4FP5MmGoH8",
  "key10": "2xJysM8RxDn3LhbjriQRU72P3g44U5NAGbfquiNgUDSf4QqkhqGnXLh489zdqvdKuhvzUXQ9KK6ptGsWx8Fwrm4t",
  "key11": "3WgV4qqDkSDu538odXuKzGqJoYu3AN2ft9JTazFdGKzeWUB5UixeRGzJfTvGJaSs62dyxjfLqPfmXA373Xyfhq1i",
  "key12": "5Qtmfmx88Vxg6L3NeLXxzSRy5Aw8xGdXpMxsUDLTYgzX11cZSVo5SVokgBWhAJyRUaktsTxFibeCGizcACzkL7py",
  "key13": "4oDXAwFPxykHXm8fGX1V5tRgPccSUpwyGZoEqkeJtVgSMSzr3UK2kQCmg91LR7Unu2eeDFTg7LdwKJBU8PubagT1",
  "key14": "3uWRa9E3oWQkMdzrfmHkCqniUxedwg7vYf4ubqpDEw9vTfpFsK52Qgihm3EMRaDu7uUhzXh286cvjGmxa3FFi7K5",
  "key15": "3NLA8WAyV38Ha3mraq9gzLECqi3eozwyHPbA5VdaTQo9n8jJvNHcHK79gegpG3TvDe5WTfVPehgrmsYo2EUPLBat",
  "key16": "mm3iBPa1u7HjBvqnSh4a9LuGxoqyDLPjtc2Jw7juq6QMsKV6P7GrtaQrYYrCneY727kQRuUSRHdkMtJSYWwf2NK",
  "key17": "2FBSrkEkJmTAVQ4yX8z2meb2UrTFRwgv3o7fFLvuyNBvdzthnLimEe4DvtLANbWuGj8QhzjcxuCSqmJ5j8tdUoip",
  "key18": "4rQDSu18b578bRon73HihSP2HAecnnbruPMTcqUg6PSwmX4xTmzpznMtFKZJBi4uX1LiEJ19zfhRCxu7JGNgaQWX",
  "key19": "3SzHCj3BhpwpZjJGygRsTSVcRPHkzSMeAUj8SCUEQKbevrjEPN3wDPhdfAEbEKJD6XAVzbJ8S1zsLTuWJ67vCeKn",
  "key20": "5QoeU5NUWoqF6wo2AuTUctkCnnuTinLZUsjMKB53rtz5knGhnZyQVWRvUP5DbXFXJ9FreZ7pnDWYS9YZyuYSbi5r",
  "key21": "4dqf3QG6ep8op3F8MxhoaGS767pLbdaokFNzH8B9rMirrSVfXrUfgCSkkNA3asmtPMKsqJjona1JfCQhjrnTHp4i",
  "key22": "5nHSB4R6aDQ5aw8N12i76fsRmZda2xCfiYrc5HU7SeEDuTAoU93TK87S6SiP2vyzriDf9UyhTMidbuwFd1HF1omF",
  "key23": "4SLxCbEdLRMq1yJ1C7vbcgBDCSaZkszqU8e3jwg1dFuy63yEu6BPqZsGrRCr24DUPc6VE1cgddtgwS2ywZmWZ8Fr",
  "key24": "2Xm8DCRN8HBdb2CrNimyM18799bj1bDyMj67kyy3sWbAGjHXSyVNsWAuXRDPo8WcGdkT7qtxqJk4j2yBq372TjJw",
  "key25": "5371Wx6Sj4M2ycJMvPE7pTdKbmWy2ymm6HUBPKnvjqoU1pp4f4Zg4z3sD2kFiJsiBmJiE6EoGU4TCEggh5sVVJWh",
  "key26": "2QMUY3HvwCZTD4jx8nWrJ5AZbiiLzee9cX455Tpy2YUcJrsZqsrhejReSvQpQAKkcHYdZHUuMqt6bDQuTWvMfiMe",
  "key27": "3TLAZc454D2eypsRgfHUfx2fUAz5JpJQpUfzb6KMw1U8Zn9JE6Qtyu4vAt5MFXzGfqJKipjhqF2nog9PdiRc8jMZ",
  "key28": "269HznzPhB1wQt9gGSr2VAVUjAv9HVvJqSZ1ot6nbHA8cq5Xn9fPKGWgESmRJbjSZciHhAug2JzZGGS4Eu3oQfux",
  "key29": "32asPGHYVMpDdDiKE1nRA1wXvHh9JrMMxJgSajhJDCHnf6zqxLtbgxsyZ6XrqotqhcbZQudSUwQtLffGiBoxss2Z",
  "key30": "2X9B3nW46e7DAQaoMvYkHY8tcTegzHHFHhH4nCJ9L6kTmGZoUUeKrUKGVkgNsHG4groRk9w5DCWFfZCQaJbNEfPK",
  "key31": "38RAd4qQYPaPvnvw4ckWvAn1FhBfitGL1xPThByqcWXvMY3jm5swGWHRHUQjqWXKYYvmJPACwNG1KfqyMnSQbqP2",
  "key32": "2qzw15VMEu1SrJzTPyGQSdnarXqzaASuGWs3S2LSskLaqZkuBfKBtG313rwum9V6hGLrQhmrZ772JMfRoTk9vQjP",
  "key33": "5gVAAdvy7pZMdCuFenVSNmo9FXCWpHmZsbSnnRaYmABXZHhYVFUTboNepqqgeLPntLYWysYdLTHKPfh5YwnvLHwX",
  "key34": "3sFCPpDbAqhkiUdkHNMkaWzhDGjn1VwFKfprxZ5C2RTu4xY4CEFwYxoXaFqpX615QWePkG9tzkBe3svjqEnpATBi",
  "key35": "5DvAxPM48wJFy1cz93hzK8aJWz6NpvjN38fRpveBGb5eWYYUc1awUdEaARDF9eDbpw2hyGmbwT1Ds1QuNbjdW994",
  "key36": "355fnVXszxhCq6Qx1GSHygMejmn8SdnCyK88Hu1m7aMwqf89LfqiWZWadcMfW8NwnCnuw68jAbBZPaW56AV3LSov",
  "key37": "dZ9sxQ1ruUoEVkFFE5DUmUNi2RKHwesXBzF85BQDMMsx4Cymab4wV3iQZ8cRsa54PUy8aRnDnr9Dzxpd67Tfjsg",
  "key38": "2S5RfBScMMkhMLAGB4PFwVL8fehcggKd55Y7A886xWyG9wRf7DroeRhQvhiupC6JepC8BEi4fwc1nFg5Jb4jSD2V",
  "key39": "5ELPH8cLMEiAE7hFnJ3KeH467aw5n2iX928fMooGNUcFnenoNqNtrHLRNjCZUaNLBjpbt99BPR78mDVEUSEa8EBT",
  "key40": "35mQM6tp29Ge4TsMJjTBxPg7LAhUJBEQAqNS943eF8KckYmdMQCrxbUmmBpFLg7Sxttk471hjJ1xocwramKgE81E",
  "key41": "JHsn2743cbhfw8aikpfPbDMzNdZGckc7aaEQUUp8AAYiCz3yjLZeXP7uGBJrYuxPzNY2jDKYmpWPHXuVKxAPzhY",
  "key42": "59EBqzBbzYfQtVExoLs69dS3YYryXoS32mowWDUQA3GvrFMaH1pm576UBqic1vAfpdhYBBnDKViaU4yLRW4Kjtte",
  "key43": "5SL25myMEw75G7D8tU85JWcj47M7F96A468fba9T3qvycMmcviUBkgXNdHzy6Htw6SG7e36GuCvqTRu9CHSDpEUh",
  "key44": "5sTAtzBj5UFBQtsesHhR5owA8S4eKGcTGxqYffFq5cQnu1Nu9mWdJfueeQseZRMRCgrKDiUA8Bs4s3YbeZwpKegL",
  "key45": "5cFUCA6mQokXq3YzCvMv6FMaLvNerkx9Pg2BD9HjvFTT3grpVfa65o2oS1MZVvEMvnVFxPRhoe48iWTeoKHDrvem",
  "key46": "2KLgxSwz5Txyi9ybLAvk7XdbVfhSG34W7Jro8DZvdCUMn7anGg6WWXoF82Y6EqHjYckZU42n27s2YMHKHD6dDziK",
  "key47": "3Cg51vuBV4oyBNNVTyD5Narhb8nLV7WNkhewR7ak8EPPZJpbmB66PmyGBSXQvKRseP74RB4ZXSfZhbZo4y8SoLX3",
  "key48": "4QgZKassFa9M7FA5ebGS8aybLrsLGHUEGWx9tQo4KU76UuLAiKxH6GLcRvhUENR56GXd3rNQeU4gb9bdZUnu3HX4"
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
