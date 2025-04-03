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
    "5bvBtJ5BiUAWUJ4vnY4dm4arVqHU4HjUL6ymKGAoLxJnTuPgHyG8HJgCNPo4ufeGuyGM5i9Fsa8zBvNU354PKGNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gz6x1CvYVusEtQb8EvnNxSo18T9u7UtxWMxxYut6WDvdGnGYRXQdcYrDYW65f37GTHFS4XuJaWJYKPneet8VoBj",
  "key1": "2KEgsynnGuQupjm6qDB4hsmHgJ5vxmsb31CDMRkD5Hk19s466vJnURKBgZn3JPnwtEvbYD56fn2htKjiLFjADdwq",
  "key2": "5pKLm5HXFbVD3neV8hakgiLvubBjaeqb4vaJfyAJuFp8GZ7gPCaY3HpqDR9wDm4KbaeBtX8esPCWqjTUqq9qgGqe",
  "key3": "4g4YgKazfFxF37KmkoSmrjaWpGKdtNjJksDwsWJctJ6TtpAnNgoa9WF7quieE5y5HTS8qGJgUBhtNxedStj1CKbo",
  "key4": "45sCpTsagB3ocSZMmM7bzsiA1ZC1a7AiRQB8v21Hq51kB5eQJEFyaurm1vKM9B3XwsnHDFfCDydirte4pbEV1TMj",
  "key5": "5u8v8wkcJQEaB272K3Fw3aGNQyBxm8q3Wdz22nNNFvvcAbnTqcKmyVbXmUMVXs7ypM7kf4CjdEp68zjVGXxMF668",
  "key6": "5Paw4RhSrKco5RAWWPck2S9aPz4aFwopVfXxZUR3QTWENGTheA66p1FgEn55L2AK6Q6ToXzWf5HWxZqRuuW9qKWr",
  "key7": "2PBjStdeTQ3Mk9wXCSzhhnQ8MEYn2Teiioup8gu9eSi66JcNSpwdzPF57F8fniHrbqft9pMESBPaWwm7zwSbFBKo",
  "key8": "34LrZ9wA8Z8ZhqrEibCFRp7ToMJhmnnu5u5HHvzs7zyfE2T4AQWLqhkcwoD3kW2nG9sDM97Sq88V8EwTHgy8dkWf",
  "key9": "22HMNMZhYK93zRh28F6hStZ2aGb7LqT4dqKBJWgXNFqhv4JQxw2s4sgmuVisrJLy5vh59YT6fFWGCJP84NnLsisy",
  "key10": "5bdXc6xPdxiHchgwK1K3rZm3XtRSD38PymdavyuaFJivHnzXpqhZJasCFkqsFm3jWzTUhNWXa2qUPnym4Djvwc55",
  "key11": "3C9XodjJw7kPJ4ghbvH1EHV4aEFnddLSbMjC4SqTotLsjA8QR2H75fyWRGHnEi4BCq5jP8TEahZj7eRDLn6RRrud",
  "key12": "5Sx6hq9wssENzoNn9GmxAwub7wmVqUBekaLybZmxVEbywEZBtKdXNu78oYagUnSqdno1xhQR6jzaiiQgY7gyeRvz",
  "key13": "b2MUaDzRzJW7ddK5TdwKvDbGe6CCg7oX1CQMcrcmFFkBfeepWMrhD9BuafybnfzYeDthsMMVCRsd9qvWagejPC3",
  "key14": "2sQVkDaV1Xvn4bW1ky1DLsbVUh2yWT3xn27bJk2JTdNpTvNVHE7QPGMEzfp6NwPEMNLSdrNo2v6zknyEZhMiQKEt",
  "key15": "5oXbrrR1z7jsjfy7o9h3x4aK2emStbNqpLzvKAnSwa7qcvwfGqABpztGjjER1wrT3ne1VgUBYQj8tU6YxiEHV6Cw",
  "key16": "Dw1xCCke8R4xZji6Yms9Rnnyedj6BMneK4JbKx2tSJjbFW227QGdq4iE7NSEskYnTbYHCthWywhfSdJxLgHjhiv",
  "key17": "4SW1GhPpBoZ4AC4zAgTp6HFvzV7TDjCa37xaSzGj9sNKT56voeXSArDFDBC7Y9hRXgvAE15DzoMhhW2CjC2FBngT",
  "key18": "3nnDz27GP9AKSqnbSf5sPATdszwtPbAyVkai6fsew2ezdYutboSz3QD2UT8zCKMFLffouQptqY3nPy2ip2aN7VP7",
  "key19": "2gcM2dJcJ7GGwr4LCXAr2e2xhyQXPuzbJ8x73689ZhuMHUqnTnsu9WZKWt4YYLiQd3uNKnpeRDShSXz7NRb6hxGB",
  "key20": "3Q6dL4t9rwTP9FxokX2YsXCgbrLoQ2k6ZpUKEvcL8hFUKTdcFLLsgKb8NSgQHcr7n8vCPpxAhhtHHbjBt4GwFpVJ",
  "key21": "49Mr68PdzWxr8PL3XNkpZt7F7uPWqf2va2KdkMJWdjKVMpKkHosSdJCW2h6hdUGcvFEtpXq3FFazL7DyptMqZtWA",
  "key22": "4mTPAFri7tXKqk4RTmfTuvC5AzytzqyRJth5v1XHD5oUEoVKHSwnmzJM2jCp1m39qs5WWg34PRJiZcinc4CW9fL9",
  "key23": "3kY5x6hLVBLi7jpqLKQ8UJKHeYQtqMbvWFWLqsdh4oiZs89SYy4vVjo2pcx6TrjQqHRctt7jhZLYDDJTPmaLte2b",
  "key24": "4XHbqDp2BjSVRkQx91aJcAwR8vQgw2zBLYXYizh1A6B6uvUChbgZKLECVgJURzMX3H85dot5yjCqGAQbmSQh1uhD"
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
