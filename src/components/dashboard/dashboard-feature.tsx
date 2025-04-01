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
    "sy99vm17a4YXMYEZVGGdU2c22DGQgzSqLEZv9pmVp2GzA3mY6JRpRNDBmfo6TsjMRKJ2eeeYhXk2rxy1gorpBZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fH2TKyBVrxmL7fCYBCLFMs1tdWUcdutFUyQLgjCtdbF1WVW9SqAeYQaAQPzGZynHehE4rbK8zaMnaE6cs5Ce87A",
  "key1": "3C3DvfnVZFmo13n2DfmB6KWNoqoMujKuPqEK24LBjxu7xhzZrVLu9Kg4F6rmjszXKpVuGxjfnyZpZYRLPHXG426t",
  "key2": "gubYLo2vW8YqXw1NV3BP2g1ptUrrQ5oJruL793CmhoCMWQKoufek6S95fKebjPGwri6NsCQf39oSSRwF5nmcqQE",
  "key3": "36w6gzXPftnoBJaoh1RJbDevzjz4payt57eV6quSkZepUFgZVBXe6fzHbSR9AbDDwAMordBAfb7rB4ASJKxBdwoN",
  "key4": "5VEnSzZS54PxA7FLv4EdnFa7UpyiD2LuQ3cbWP3GRJdWpep5UiWqoNCYZNb9iG7eYqLS9GUAxhD75UMcrMNQRQwq",
  "key5": "3EFP7qUKHa6gfbCvcunn4bLboxTFseg9nuganZow9GM8cu6HcSswQ7i24sgA9Ur9ZrMKY3n16rWeQRonYpPhcKFe",
  "key6": "3ivXM7eosySmASwZvqgqoynVahsRJH91XxR5cg4sjCNrH6cyEnK6Eup4Zo2wdbFsVR2VaBzZ8kmoVrk5TWBho6Ph",
  "key7": "2Mviq814T8F9yEkF2UiVjmMHduuZiWJ1FvCMX7HTcTipX5atDMBuqTqxyGYy1M6zmLd3MHN5QXsL7nuvj4FW6vJ9",
  "key8": "4aSNTiBtruFmBVbadABFvKCtiVwyq9NCiVnz4zF5XXB6mZqETgE7teqkpgccF5hA1917hnbEtpGDR4byb9iswRym",
  "key9": "uypHYVuWXe8SeDy8EWBTdazFnKEPk3cgRoigUiseVvmp2CQrgjv9tXyXNyzNZhuViMd3qtQKwKLEBAUA4m6CeAK",
  "key10": "2tRS744KRzx2DZzRRNNwJmTHU1t7Hu9RzUXfdxeXhfpQ7Bey1cGu2Khuqp1Av16vAesVyoXjrpXUB3ANGRGrdLRN",
  "key11": "391WAxbTN4UkMFTNFNWLFCsQkHwdmdd65fhHvepvNdRwHKSkXHAGWcvjgvSxtfwyE9rK8opSLCu614vg8BuW5okf",
  "key12": "43FDquQYtvW8ifw9dbWSTjaZMvw81aK9vAYHCZ2nXa57Nt8RDr2tHvw81YW1MkE4MMp8JgWPo9vb8yYC6R6FSUrh",
  "key13": "5MiDnCtpy67QH4m9tyeuZHged21FtdsKdBLzivo2QjYRDDKMQYMaGmLUtuZFAm7EYezEgDSFS8ZMPpyMEVoN7s8D",
  "key14": "3cUf7Ktks63QGzG7LahPy6LV8KMvYXZM4CG3hX2XaFLPs3C4PmVsHcPtRm8dquZBGu4XVD17vbtN1wGYTCyHWjGV",
  "key15": "4W2F88zmj7s4J8TkiftjTAsmYtpWEpgj97C944SsXAepRtQfFqP7HpSBAXqxwRi5a96yHU9gMfLXQuGfyW63Vdxv",
  "key16": "4c91g1kg24zMe18p9Pb6fiiTKv71dzbhtLEovkUvevsRhyqq4DQ7VbXSzPFyDzwa74EY2btf5yERLTVA1RytRUVq",
  "key17": "3VBADiyNb9P6QhpGthcfwAkB17okweLz3JiLFSiUPreNeScQsFMLYGM3VNyDp84ig4KW1SdZAFGkdEbGJZdF3D7F",
  "key18": "5kQhVPxBXEB9PqzT38tsMoiPK1uCXYaBEX4HRCDbW42xRBaJFZsFMmcxvZgTMJ7LJB98Sq6Np2bGC2FQxQ4nasZD",
  "key19": "4MFvUU1ZmF94Met6hecLG5yk8367xtKCCR9vWMt4mYWMJV7M9XBr5Q6CA9pB6mRY9EmNQuvKzAztGi2H7xiE5yFJ",
  "key20": "2LCajsJu71PD9hw9TVVqRg2AJWXjWBhDi4toCjX2sHiFRinuYKnz49T6eLAam5715MmVY6A7Z4uoS9seMb6bdDtD",
  "key21": "4fqJxm5qddqmzbgW5pUrCsKN963ektatgks7Y8BsNnoVh3HLBPfUSyeaqVu6rBkEK5CDCyiNjvSLr53F6YoTcypd",
  "key22": "4L8xuWyw2aoYFrwggD8xCsCCBU8PVKjzftQ2oUT7P1krAAjPhk1SWS3mXzT651c1Zofo69P41r2JnpEvU938pjxf",
  "key23": "62fC2a2Mi6B8vhUQmmoeQbBdvAAvJNT1oasU46kHkZ3xn76hgfHmshCJg1zZrTKwVJoXFb7kJb9i1qfbMUmBHvjD",
  "key24": "5NaUNVA6uV4otmp2Wr6JzzpSoV9wBhHWFFprScd47BpVs8mrRmYJsUDMUBV6H5XASuibvrvPjPhLbVw6cfKYqSsa",
  "key25": "52eaMyaX8gqpAVTWAnrK2aW1x5HnZFakko9t4ngBpGhYJgb6XuTqynJkCZxpDcJHkKFzmEcYhMPup79gSM8XBknS",
  "key26": "5qPpVHCRpj2BNPR4BkBuJDGpMV4fXiBvd5FAHziSN3wUjiTHooxv8j6Z7ehQXHqfERw7tGdRXbmA3tYVrou3nLYv",
  "key27": "25TA5XARqzX6QNiHwhoWThSiXSrgHZFxzDoaFqtTkm4W3PF4JMKExjygm4BerW3rEjw66Pwf7R8Xvb429aQxw9ra",
  "key28": "5k2xsYBHGntPasyjdEHGX8XYeXHsVzEzQfvMSD26G3EuNnoA98PEZMzFoFDo67JCRWQLHV1WV5kPeDdwdBJaVrUL"
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
