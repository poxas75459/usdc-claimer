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
    "YTkoX2eQGwCJPeSTvjTfYL2PCQRZ2ZNwxb9iv2YRWUK9v7gSjMhoAJ1DYPfX7xAEo3qZdXioyCMrArwrSrEGd5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oUsNfPvo4gzMMXMGz6cckrpWRmDi4UKRkhYrUwc65rKMb5pCdSQCZK1to6xq2HEz5RQTruis4qe3CkZakYGZVjB",
  "key1": "4U8N7j4vcfdJ64cejbPcPBc6bMcTjzbtjdEKFvEJ3JrJ7vFQeVrM1NpKXZLgxXeAgtMkz9px4gykwjFSvxN3nh1E",
  "key2": "3V57bAcMWCA3ofeqefAA78TbmV84qpFk92xZiYJEin4ZvHbkuyQUCmXuyNTpf5J9Xc3Yj6Sd3MpWeAAvPTaZUrJM",
  "key3": "kDStNYvGE1QuHqTpZrqApvsZNSoTK6WHRjHsZ24dtybQbfpRbgwuL7KTzSSiyBQJky2EBkcyZCgBbpqs5WJNJeH",
  "key4": "3N3kr6W8gSA8FYdBBpNyuZvA6DNKNVkxrcKQzeSnh8htcR9KAb2o73jjYcGi3K8cXe6T6W5PfJjbvuLWw4T2nA5h",
  "key5": "PuFF19MdMW3cxbJvdLuqKT6j44N1x71CLaGBeSheMNniiEmWGYsyBbFydtCD2NyQCF7SeefnXZJGgNmjz6cB6BZ",
  "key6": "2q7bEaNqvVGzGShsR4CjZf73Avqbj7GGVpURUCAvGRLGRZhqPfjLV4ha59qJagLNYMcJFSJxmToGv6G47Loo34hZ",
  "key7": "hjqzrtWKFdCTsosW2h8JuQSknUhn5YF8wV3rdUG7honGy2Az6R4TFgSmkaAAfv9syHnTi3T8yaZtGQufr1mk6TS",
  "key8": "2Aw3wHXxoC9feTtc3HtiRzFLTJ2RJsTcmnx1eJXpuyZuskaAK6eboFXf1qPGNVTtUTPgeVRKvuTzRUKTZ52D5WeF",
  "key9": "5f79VX6PqQqw8da3EBstjj9DHEXVJuj9sXxB5gjawc81fJGk22zgBR4ANDN2NzQna2wRwXvCQsmFUnKZUDQem6o",
  "key10": "5iNm2SYXfr8TW18HwGwajxLapoVnQ5fVuYjyR9EcVhSiTM2apgVMRVEr7G1mcg5JtTvLtEvJg9jra5QqEmRSmY82",
  "key11": "3bbc8cz5R4argiWDpM9KMvkSg9ogtNvHA4XewjEeNzZ3yPxqo7g9QWGzSWSGiCBFNF9xVcTCmMMTSW9SYpxB9hRt",
  "key12": "57t7MyKAV61DkYXo9fq5HeiuCb3UcHDPJoAtYgedCmbsA6YYgFxvr47ERkrRGZKJtvj4a3mPNJwbkFwK188UPMZ5",
  "key13": "66ifZiucttfeP2d8VDahYwsRvnj43LoxUN84Ss6Cj4iauaKn9QgCMBs29CYo5nBYqHZJqzrwnnpEBruuXWTw1E2x",
  "key14": "4ReuyTo9vb59NmZUDAZEdYhnVGCA8XRvtYfGaX7HXq4i2p6EJj3zgPfTQ7kM2zBV3wJW2JkSVbcnXpa4r1Tpt1A7",
  "key15": "2iv3Wb8JmHgCKpUGorooKPUJjWYQdGKg5dCidy8msypND9MmBCJeLXMGZTdDWFpGXmD2vYPSz6q8VRBVoQBk8mbR",
  "key16": "3SiLPrjShwXh2EAYc8Z8NAV3UPbrMuLn5reqUTUMLDzVGq4X6E62TRqKZ6fQdDvzybZrFeHYnE7gJY5t8f4RnZvs",
  "key17": "4dcGpGbktrdAGgoCs6kJJRnZZwtppxuJW23m6kqktszskPJHquXvQhCDXyH6hTavaLyENQEmkS1Qiv2GYiAam8PU",
  "key18": "C9eGdP6LEZtAn68mc3kSaoBNQWr9jMgiYqyzkXtiYPQtqMyYZEQM68qPqBoS4qB7ij6NS9FHXVN5Zkx7ugs1xGu",
  "key19": "4caeGHebkD1UHXfaJzzLybSbkaAsGmUPNY2AFKzsPnhpeGge7rnKWkEq6dVsrUP94soP7AELynBWm3pBmvj7FHqP",
  "key20": "4apK7jSRyYGkcLPQg9cAXz8h2cMtwzZJue6BDmxKTDVVSzMjzauP4RQyoQC8oiemxNQzdgRLc6pfNZP8fgLL2A4A",
  "key21": "4DkB5sCqsUnV9Z1ioxtp6Fbd6yKYkBg19woeXx49RSdUDueYDq5XrneroAQ6AeJFKrwj7w4DspSJUP4zCLZLf8pq",
  "key22": "SDKhBrcmCLebHXa9gxShHNvFu25A7AvzarWr1MHphridDAMgaTVSJTx8gqeW11fxhBoJhrJsWFXkuMzWcJNAVdN",
  "key23": "24AVLr3jfDCezeLdToeqiNyivHQT2eJHbAz2C6mG2UjNgMdo6tDzG38B6ZRpPZa5xAdfEdrJxEoPsabxozmJc6fk",
  "key24": "5RthPDod2WM3YffqtWdwhasdWwqd5SGEyXoCBqhdveg2aT5f1XU86a4ohD3jKLuzPJPatRBSs14uHxWor3rRxiju",
  "key25": "5VsbVjCHKTTAntgkcfWP1dVBa6hTw1rhBGjNxPaR3wpRvUYKy8schLZ3i2MwNUTKUvqg4PTPxde4VHziMbc9XDK7",
  "key26": "4R4Gm2pCaSHXKJhQ3AidmqWp6Aj4uRTLtsjtao13XnAKkSgZDcpBc49ae1CFkBw9NppR1tGB7adJ286qmkoSn2f5",
  "key27": "39EsfT1RcBDzc9SHSHYjBkvei82TLKYgzb5uu7q9UYMpQPLr2Xmg65C3wSpK8JRo4MBjNVDsWTCbURZ1CNAXRyVe",
  "key28": "4Meq6VTxUMbSiVYsEsBtYUAaTvHDyFBB25pjmPmYuykSAJxY5NwecVBrzBUQ7E4Lj4wdy7rCVK9BTwg5AdMs9P2B",
  "key29": "5UtSf5XZeNtRJymPHa9b8JLjyDj6Egk67PtLHUdFK8XfuZLdS9qVZQw1etKzMstAWhAEovUcyYpdXc67e2JHQSd4",
  "key30": "2M5RTkka3gQxhhH6AehY6hdiw7J7BE4qBwD5sEKV1f4wNXft9g3efnXkUfNqXzncfnQuf64H3WiL9qTVLKCiYMKM",
  "key31": "3Hvq38gE9qYSFM6g3xnzEZ9g67C7UJcdJaTPoFDLsuyE9AjFKk9Dkx568fDxsx1yBix4dnLDSVLZZ89kn6ss6tQ",
  "key32": "3ascWincyJVhGKa4E7LLpMDLkfoc9D6TtgKATrRA9yUKERkBBCRfoS2WFsSbVVHeTpBhmxgC73RAhPeyBB8ErZL2",
  "key33": "5dcCFMvQsPVpS1VWkzzfPnosBCEMbGUtaqnPpZu7d9ixbyuza8n4eiyWcJtiyvdkHrYNVxrc5xoZNxPC9DWyFhqM",
  "key34": "2c7jofNHXd1yTrtezo9MGbkLggjvnDPJh8JMjiaMugz3hRz435PHYASbSdybjvUuWLViRvaMraW8ExKCvT88KnBn",
  "key35": "4uovmuJrND21ZWsjwqDfoEauxMGXAesVEewwbxVejGqDQ62ogM61B5RG7RVq7j9dqBCGJWk7XSTJKX5eDZxjxqv",
  "key36": "3cFz2BkjtReeGWnfifPssfUdkD7veCUDcT7Z44ahoMMoM7Gy4nSwMGeqQFSeaXxtBCuEaJY3oiesNcyFdckwd1JU",
  "key37": "3UjSBye8jLwXSSCFhfooVK6fwWU15sUKjAPf7d92vNLLYSoEfPQewWnszrAUgoyDVd9Y7tAZnvzQxZoAafKfrUUd",
  "key38": "2wLLqYiEp37HyzzA4yM3aJ59cLShqyms3kZY7RT4bmQpy3KvSfjYNx6Df7sqsEW839zN5Pxe1NnmHeKecWCkqMVs",
  "key39": "2djnzKu9a1iDFXbzGutt7Hs2sTur5Dn6ZvFbTKt7qST1imz7TSS7tFu3N4Tzi8TU9zoKPz9fWFyjsnhedR57xAg2",
  "key40": "3t7xDG1v1zHdD61QmrTeZiLZDuAUas5TfGvo6STiiTvv368rzjfAq3Zt4wTKGuk89PDrD4m1G5EmEDuFz5adqP5R",
  "key41": "51DaJ384tioLBiE41ftkoTmUe6bwFfoKwwu5wWDAN2agFsKiTXMpgu9ogr94oKP3GwoJUsBCRZuKKvju443mTs9v",
  "key42": "5oDUnfYskyrgJ2kPVaXzqzM7mW3NX2NDoRSzfwCvDCf7voJRaBb9nDSTmr4SuMq958yPmZHkktCdiMUQuaFa2MPj",
  "key43": "p3wX4vt7FgTLEDbLksJ2u6s5BPfxthpxY3bHFMYfcuBwL2s9DLdUaaUsYCd6j6A3ZFjTTHk7DsbyERFFLkmvEgv",
  "key44": "3eEUDG7k6jkSd5CxN9PYdcB9SH7guZ55zn2zEht7D6nka1R3Pt8oe4h3mAHYm7LJ8G9xhDcjbyPerCNpgoDMQ5Fw",
  "key45": "24NSgfgirkNcmJdtfbwq59fJPnfYxEwoAnRfJoyaNdkHnv83kTQKvbkR9KsF9gFCtgEndVivXoFPHh9pWS1TMsZ5",
  "key46": "4Jqm98TTk4RKDAe5mD2Ack4aJzVvPaFvYt9xPxJC97eW7z3ghtV9gacV3Cm1hLDuqhkRg7esyr49x93nYVERFiBT",
  "key47": "5dx4XkKtzd4STwqU6Ew3nvA9H5jhmnYCFtvbxjk3E5VrKsRzbepyGA5G5tSuLhhwsPavdwVNJmTSbPD1b1xTfSSa",
  "key48": "42k6YfeEuk1wFsT48nf6yiczgvSZghfHHDkTNaSMRsMXq5LzCwo9D5PQjSwJvkaqrGmf1DoxBDeJYaRet6Gzt1zA",
  "key49": "BnyUW6FzD29kZcWbXcjVZB6yco5GUpT2dTZbACw1hJUUeVgiaMd2Vq8EZxBDW4P5nCwJQwqHWcweYuz5btMnoaM"
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
