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
    "31kSp8rhKQ1MxnZNExDYe2oEBX9Fuv5V6PSMFvoYYVim4ErDeNwHBerijJjPdUoEb3d1d2LvZTnFcnZixVT66Dtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lg6NTEk2rc17KKcdoaWCoyRF7pr1apX8fyQkLkrsgbgveX6Mk4XYsdS1aHenJNf4cgrgTXcbaqZK1iBxhhYi3ww",
  "key1": "2AYyh3a27vqgdymg41gfVcKSEaZ31zBvhwcFQoiLdw4YvDuXLUJPBHe8drUWyupsv16m1VzoQG138mEQwMuwJvY7",
  "key2": "5uszzB4qTzLP9r13hYVU9NprSD6zfmRNAusij7ouxQjYmpMTgonQyTiBy3S7hPEcM3oKFrwUZMx4hMWheoSb8N3H",
  "key3": "7dUmHqPdUhnPSMt9o6vXNTpyRS9Gv4fbNF57949L8Rpsi1E8wg515jwouDTnD6qyEf54jP2XLruUxQXAjjRRE5z",
  "key4": "ar3E4AcbLYeCQipFzWbgfMYVNAdbbCrBffRKBvAcTCavz7tpWYZBxFLPvzXGJPZXXvkvioDZhqEJxjvvHEzE1Qq",
  "key5": "4Grz1fREC5fTR9x4mKSVWsbboDJPr4GCLqq47wgw7mdmbascNvyBtWUDPPc21aw23vAgToyt1kbnoNg8CQm9BNq6",
  "key6": "5nNt7iB9GXSAT2Q8gCzgKoyxFdB9sNTLv6fVi38iyR4tqn2iCrSeA5AYXR4iSjpkPKMJdw8efGakNLdv3seRFszW",
  "key7": "4jj1JotY2GNLaivHSipLiiWq8f1anfS9ZM9chEEv4FNRAcmapZJMv286UsR495NVuHTHa3tHQe66pyPLyxg2Aqfk",
  "key8": "4AhomQ6w6XeJRUR6FuggL6oHPQY4hNRUTKkZDgRfjwr4xzD2frFNyVaktdgvXwAAwuuG4J7HFNeXagECNgjoVdnF",
  "key9": "3osfgkzkp7BXCiVcxR4GTFcMkgcgozuGSNLEbVmzRddygUHZyvPEMWnfvuC2DSSVPJHR9dEK2boHay3Bx4pLVLEw",
  "key10": "2UZsasrgFrwbYapTdhQrYbJLbzwQEUfvFXmRRnUpsqjkgYekRVmKbkXjoLwM5whcms3dR1sqxJ84Gaubzz1qjpQh",
  "key11": "471TmcsaLmT9cu64a4Ui91y57fwcPebTyzEW5dfCcWwE39vE752TDFS6Bo3g67HzVPjYZHVpXDiRsesauL7tbPQJ",
  "key12": "58H4fQVqbrpqpjRxvxhzuns19wHqARtELpcTsC95VqeP5YNPPdnga6HRiArqMQFySXU2DsrgoDJPxgbMxY4rnavP",
  "key13": "35rppNwHJbrBx4c7Voa7CeCpxGW899HT7tgmXbtYcncTrs5bxHMf9NC7F6w33jj9Vb9hTTeaCAhjLQLVU5sbT3br",
  "key14": "4QXoPi3K7C8GS5x6HJkQqUTYDoz3CPauJCoy9zdsa4EAehktbwKyvWcU6KMj2vVuieEBd68UzPLMnKdQrrpNDqdB",
  "key15": "2t8noP4cLShuNWKHPXfxrnYfe7yjz5pq1KFhe7A1a8CgcR1C9PxnoXmXTe6qzCaZZGZeJyLPjBq9TakX74iSbvat",
  "key16": "5jR8hgKn6Zg18D1GFjBzPKfcRZf6rbPQQmUmKwHpaF6BF9oNSpefcLM3TrTEpfj6wuZ5tsW4YYhbVjwT3iAkoqR2",
  "key17": "5Sffr4go56WJxLUSuhhcczSbZuXfkihBX2f6kx33pV6Gj3HHZNfag7SNdv6du8xCbtC8gJfPPD796oiQZZqQEfvs",
  "key18": "2neTuL9P3AQHV595HRE6FX4PDZ4Y7ttZjWEmxSDyPxGMsTtMnf4RnmbKWqrpLCoCnwZwv2bJ4JnmVHHNnJn3qeCo",
  "key19": "5ivfkVijTjKjdTTiW9SD72fzJKJVpNFtz6V3G7pdE9U3N1WgSto7f5HimUhEkRvN26WbNRSdYWT7Hxzk8cJiBkSN",
  "key20": "5wWUN9obyHZ5GpCFhbXVQM5n2Jz22wCiABvEBq9TZPSUrj6qoNwoPTj7Qn6sWJo4CeqfK1siDsRKphtAfKMdjUgH",
  "key21": "129TTRURUjBkUKN8w2wDMGVSSQhP8joZWdCVabF2H5P4RiJvBopxSHMgvnKhLggncyBpiJxK7W3Wi6dtc6aaUQGS",
  "key22": "2Y3qhc8keyS7cTYRWqSvdgE41q9wCKxTTDYJNKuYiRnB1MC6jwcLMgwtuozzicq73rNByZ2Md1U1tpNTK7G8jSFo",
  "key23": "5fnBnj6hooopA2GU8V56dqetiSt4PbkvjYkBpnm3UrVZVmoqs5hTQmLUCuoQpm4C6ydCohYVBpbcVR83jxL4VBX7",
  "key24": "56zczo6Mp13pj6ZnNh2mjuTBEWrVgknfG3fJGbL4khtUvXDmWcBbvGiYks6WxugyD9GaG5XSQBYNN1zaU51tgnN6",
  "key25": "5vhVrCxGeMCUZXJDXs9S75dPzPaZaU6J829T7VMjJJSZycw2bgTCGGnFMox99wNt4gTWTb59RvUyuFLRHXEHTUnv",
  "key26": "cSLJNvgb2zHVSJypHskwBRua11yMsEoNPcSA1AXVBSmfte1aptU5QZ5ahu2g7TFd9TG7DzokFCR1ejhdMmujf6H",
  "key27": "5Wo9FD4i1cwqjLC8n5gyMnyia1Gbgx91UrtxTfUfMvAC5SjurLbY89GTaiFryX7uDdF4doZENqx3A8UGefrQcHLn",
  "key28": "2bFHdbAxbBxVYfvZyQ6qxtmpGuLBYtw3c8fWY84t6Y4iSEDTs2WxJmrwrbVRRQciNQCcAK9uQpskuLnJFApNnEom",
  "key29": "4Km9QBcLLgGukJ76jGqMRVzHKaXihZyUjemQe1iUGYowfqa95yzvot5gwGFAc1KHL31aKAMuDZGpDbRf4jspLMkt",
  "key30": "3nNdhc4wDxXTZ92WKy8cnf7v6djxZf2frMDFJsRav3mzPu6vRcpC1PJCT9BXtAjvea6DcQG4vZJcJctJyKdUEY9M",
  "key31": "2hW8UFFBrW4eHzTbiV1Rr5MoeBnefaLfbZf3MpdkC2yfYYDP9SDfw5JS5UXtvfqKLzZ8Q8hkp9pPM7gZMqk6Gmoa",
  "key32": "28ppvR1uF6bEA2cSU7mGyAeDDrBeYdqpcqMjdFnRYQLK3pKNWVZ5UPWHVXeJyugfDP5zwZejBok5gGApCXVRbpud",
  "key33": "4qnZMCiR31nncJJt6Ek1pNZZtCqdxWHWoVX8XAa72D3cwErGpjAD4gmNbM6v4Bxz8ZcAu4pgBhBfirp7Pb3A9ANP",
  "key34": "32AL16pKvdKusse6hSSqQkj9eatg4ZyfSEQjDqyK4VPrG4vWQH6PgwNi7nYpvGPvNisDaEpDNK1Bi5zApAXAp6hD"
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
