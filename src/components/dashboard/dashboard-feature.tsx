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
    "4YTabguVjRyBkpxya2whP1DWQj8vJPihAiVJ2v8fa988CwvYeyYQ4dySXWCot8kkNJHXE2FsEnAwfTLLJhHoa3dy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "595Bzxha9azw3MvYL4KcroLHKPRFXSNjQv38yBHuwhWQ7stw7p2oaGm7avvwtsn4qZMTkKddc7UcBxuWogtjEVsa",
  "key1": "4WGpnD5MFWgRTRhvs28osra9h9sfcZNFuA4WSAsXcpiygSv1uaajtMBM4RnUDHaX35staUTFbzQTDL8EexpMxBBY",
  "key2": "5EQKAXEuk7r96HZfesfVt1f7fBc5jV3UsbttgAAEoPA6xr1hngf85NRPktGyB1RBKJuj3Tf8jPyPgRohjHyA1mpC",
  "key3": "5BgMpjHfB5KUaobVdtAiMR81UMoRSUVxxKmf4Rvk6rf7k8V2vmfmrSpYs95g9ko28SmUWbgJ3Fx4KF4jbXbaemFe",
  "key4": "46XYKjrjiAGAqWpsuDji1MuVcpsz2wgg9HrH1KoXaVJPDNbKiPyjUtudkNEGHwGLSyz3PyXhch67nDPtzs9EUfdS",
  "key5": "3wT6mPEZsFFz8kkdiJAMxdU9hLGhtk6sPHSU42orQLgeb8DUh935hdim6SfVvFwJrk425brUT7uY5kKUo1koEjYn",
  "key6": "2EKYTTaQPfHUH3hEz87VPSvr6FqArKAGnBL2h7uDJrrjDHTyQsUShjgukhy22NSMH67epFdCaZgAXVjBhPDRLpX",
  "key7": "5a3sFfeCTJhMi75j93LYCimXJMsQqAy9kWhJabgotrdNQumcToEdc9ArDWViPvGyPoqkKSTPKxUHyKNCxbuBy65n",
  "key8": "4RhXrmVb19sSGx1kAHVL27hxXRCKjwwE8jUEVdnHUAERjEoLg854kbHxJMwF2zLWRwfWWezbq5kwhFnD5Fcy9Ee7",
  "key9": "2iqwt4s66KZbESHFHNEjcGVDhCvWr2YVoFPDjbK1eU6q1U9HtUsQn1HfwhZspVTE9cNGuTHeFzbHts8tGTdUyHAL",
  "key10": "21u2ZTGuw1JzMXCxWstrWMHdAMzDA84snpMr7X3hS52r9kQUmJzByHefm3aBgHjLkmVkP5nU9HgbVotL2sBW5dbN",
  "key11": "2aKet32RfHj7xceMxWJZzocZiU8FN9impbULF9UXqQZGPiuy3Fb7i3ZBQfKNLKP87ZqdC3jadmBoS4zkxkp62EcV",
  "key12": "3SNQRp7GzL2RhyU4fVDbuaYUVmgsgj75hYrjmysZctzyuxJCuPxgwiekvpd9AFwXcbdMMWfXJJQeD1yvuuUMJbGo",
  "key13": "5a9uXiAMQeSF21tu7TZConGKdrQ5RLJcRr3wh5mcJVmhqfQoQJo1CVz9yx9Uome96CGNzETcFMy61jUKJjGavFhM",
  "key14": "53Rqz2GqvCrNWjVc4QzEh7qBCFEFzFQmXxvwBsziZAJ4J8PFJfsniUvqdtMZmJk1K3PN2xK6yLabyLeoxy9noXvb",
  "key15": "RbC4arsAuz3QPDYyS3RKsyA7adnr5Es3sSGSZTU1BLcTjpb4k3xYhn791nmXiYs1f1dxJuqBZhauAG8QD5kFfKu",
  "key16": "3VtFEF9u9UyiQzEguXDi5LPYz99nN7rfj4ryXk5gCiMVEi2LRim3KTPpedgPPZWqGakteEzfeG7xNCdd6dyHofvs",
  "key17": "Y9DPReFARXaiYwWrTmg42abUxo4ke1SPBMJ2sR2c1gCEKdUaoXNhePZKrPffYf2z4ioQ2EDNfQqrc7nUhy66VUr",
  "key18": "3RvQAYs5kjsb6cAPkX5aW5qfSE2F2Smbg4nKncHzNE7Qawfe3iKXXYbbK3gBgLnhUsEbdzrx29eLv9Nk8oEE8qY3",
  "key19": "3WE7VmY9mbFFiVhgveVF9z8y9S6MFPp5XXECXWPLgZCwfx7M7xbKh4xPqy9WqTS2SEFEnJiVtXBZscTUkMHgHuRj",
  "key20": "4KnNu8EVGFqgdwpf2y5VTZGxPpmvU3f3xcRz7S1AcLV22z9erND9HEs8VSXhnzQcZBA5fecRfXpd99NqwrJQuLcA",
  "key21": "57LLxCb3oigs2ANn8PAg6eLsBVF1CxecwJomzKtaFdzgtxJ5kGfPhQ1jSs3oKnpjBp8WdriomheMuNsiSUDJyL6w",
  "key22": "3BMpXTfhjViiikEmiUiamjXSRLpgfrasKEAzbDbsw1kyAEhPJyPpaeYCdgsDTvUtE2oRNF1es5JRQCHUKzWXxTkk",
  "key23": "5xEg4ynmHQLQvBWfe5W8ZqVcKuKwSvWQ2w63f1ezsAPHCxUCNhKFLxJRqpUwpG9AtwQfjKpuUj5GfMevyfYWMVJ1",
  "key24": "3oR44kk54mFcba2MMYHj8shLCfLz3ywZ1wKkHBEgTi86uH3UBwRcrRP71tg1pQgEHNAhN21tnAUFtb9ZrYHeNLU7",
  "key25": "5JtDKsdVLunvPd9naDK2Y8vJAqRzpsHDJh1yEu3tMJax4roeQhHiRiQZACXCEw31yVcibzbCUJPXTrFWBkkP1WaZ",
  "key26": "22aQTh7LkYw36xzzoEaE3ZcignWkiBsayVxu4Z2yq3Ysz7WJqaeYCmG8xC2qcXpNnxPSnhCVBUAcgeabHUtBJkXr",
  "key27": "3fS8EJpfurFYPpruE4dCn7hZhpAei8CBZ8jkAanTZHjdHLJpr3gVqCtN68MTpE7NXKLdEM8AWub2YjGU3YJMqhSL",
  "key28": "65N33Lv6Hve8wq6eLRtveZ8L4Jhb3HL1CVWDqYW84Q1VDju3KkWYuCKupYmEG5Cj7dmKcRAzWstN7f71VpVA2dRx",
  "key29": "5w9d9docUQXGUYt6U5gm2g3UqJyAQqD5Cs9pH1J2TKoRZCFgri743ZPsbMNETKfQPxBJyK6UmQB1wKk8vum3RCnd",
  "key30": "2pio6rtFf8cux2LgcQYEmqKcUy7UeS5wvPC1EBoT1HmquMkCNEKMXVB9BB4hq6WtSf8sN1cy5z2J2kiRJCgDxjFv",
  "key31": "4pCCnPYpgprd9U29mNa3vL21QxPcTNbEpT5QWLuFZom8sJErCQfregKf3Uw9iji5zxUgEAru32VHgGFpnywPTgNg",
  "key32": "65nfSukz8QBZKkydZhSVV6uG9TFkPXdBj4PzqnmxBjUSZ6RJmxrZgwFsyQSrABtVAFPmwmAUJ9FE5q7BBjXjS2tg",
  "key33": "4J2qa9QTerYLTMv8HDhJUyThQvazdGrs9nzckKEjk8UgFaxgEEuenpfoYurdeP7hGBG3ewEhQSvJEYvZjUWgoFvu",
  "key34": "g5h48wxTre3AKWK7rprGv9GhkKFp2TkkJ2FsejovLWWd4zbbfNyVAzQXjg3z7NjgtFbMf4gKjdm97HBk62ZXbtc",
  "key35": "4uXePt8f6EuVjW6UuuMVdqqFPM8revqRabp1VPYGCfccMukrQwyLjeLRXnYbCcDYpuF9V6SdscxAMJ44o1V2x8NZ",
  "key36": "5mRsgTYkoABjYqjLmMP9eQRUGZYqg7nneZyUPygM9itcYi2HPyHgmvMpqEXT5udSm75LADjiKA6mUJNMuFhnyU6n",
  "key37": "3gjya1b9qkJieaZ2LxQt5zHEo7bN2RKEUMhPQVuKWpAEw84kjLMatiBaALhzLohaMhHPHvFezqv5MApYdKqtHYK4",
  "key38": "4jaNucyC1t6rwa21e8YQHeonrtMfHyaUA8ebGKzv6wKX9DPZDrU6JUrBkkK2MNH34XWGbi11Y7HuatNStmnCbbek",
  "key39": "ntuKrd9bDFgN3qpSDmTTFWyZ8YVnsRsa7LMqDwrd2hUCRX95wB1BVyTrXzVzbZ5FinSmLb6MGbBuQfz9HEhUJ3k",
  "key40": "kMCaKKSkLfJbFVSCeER5Rpa44uZrM5tdGCcUpDTppoXMGupFEno4YCDmyaNRaNTrYXr3AVoeMZ1m7QJyFbU85gY"
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
