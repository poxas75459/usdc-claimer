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
    "5yoZNThzbRz2jcJ411btufjwoqvCK6wh1qfoBugHb7FU5D7Gt9f6Ziq18mmhitC4CQ7QvYzGT4EWjWyurmnyvEYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SnroBBJtsdzSMfhGkzMm6TQFn2xkQ8aYzAREBYgYWbnYthatncFnaZ5KwfX7U1DSm584cbH7CxTkCaPY6ARToNr",
  "key1": "4XQJURgH1nNThBiz4X66Rm9iNm6Moh1R1uoP8XGdoz5tKCNEh9uCwK9Cs9jUVZNYmeaJdaE3ZtBgb3Zn33sVobwS",
  "key2": "QB2JCU9kUThBgN4KUhDcmTEBgxbrYZXjtQ7XJRr9FbSkH2Qhk15iS6XhYosuAbzkGa89Xuj8r2UMcJNSYMEdaqg",
  "key3": "5sFFKH8E6G5XvTtLAiodzNQTjSVNv7DCPmV1vC47JEX27y8FRvf4BUBKp4LfW8TomJb6xLUcLN4r4jvVHWxATpRP",
  "key4": "3RxJZYZFEUYRxn9VPhHuXAgB1pVQaDeyg16tzw32dwXv4jPADKCuHxfaoax1XQQL12d5CPqKYqqumYburEuHeBhK",
  "key5": "34MpVt4PB9WSUEQqpirXTstSHwoU7BBNReKjghiVvXLs39JQiyro3EADpfXzs45o1iuaWPVRYW7DdXNwBjAzd1vF",
  "key6": "kPuKQaRSQm9e6EEU1p2mARXZvYyL4f1NHXA4o6tXQeZFexVYjA6MJ38j88u8mwCES53GGxTkZkqtAGQ3q9esZXN",
  "key7": "3QVyJn4wuj3R67CQAgKDDjihf53Dvemgz84YDhCPsZrfQTFTkocPMgKYU5o4WpMiQFcqgNVaMoAE587FanNBFy8G",
  "key8": "3bsZuNaL5vrLtYZPEbztums4f1UrRh1R2B3nLndZEr7uuz7g8ew3JtVZMHHmfenb3CkwSxtJZPvuazzfDLu6kRbr",
  "key9": "HL5DT9Cf7172jGu8Jaxd9fqj6JfkLaKA2ersnfwzvjHVE754s7nAfchAD5fc1D7vkV7XMK4WZq72SkZtNbKGaTu",
  "key10": "4iAtQXxKrxvXFMfajSiiJtZzgioMpW7DT7Xv3Hnfq9uu3dZuzJvSYmBrcCmZooE8TyFWUHftRNMTwTzx5Tk2jwys",
  "key11": "46ySLLkvTEg2yoSiGK77WT1gwnFbcvTMsKDoYbGD8FAjyKdg3qSaGbEtsNPafTSq5RxrbGLdJhsrALWMHYL588ij",
  "key12": "4X3xMxxrgZJDShmJjerqH9jAXNX7X45cLXxxY7HaJpaBQpnLPWhU1xqcPygBywReq8R2hWtUjiCPdF7wqVDE73Fx",
  "key13": "3neAz1jMboN7CdamR3vSu1XFzLr1vURhs5VwA4oYpSzZT71cFFVbbRvWgctk1Sc7J863qj6rioCNb5qaTnV7CGFi",
  "key14": "2P4PbcLp41zqgdi9NETurMH2YU9a4TXbGCUkWr9UsVXwyEfyeyEhYVm3jRZ2DZPrDcC4X7ToJejfYzS851o9hXd4",
  "key15": "YDAnsAvBeo1xBAewtBXFjWj4V1fZHviuw69TkzwD5KtShih1ozkPSVsMpxxZ8gefUsi44g633YGSfj5csdYjcJf",
  "key16": "25qnpNFGwZa45uZHv3qUQqa1irpRactRWHdbScN77Mceixds3NQEkjhdokxsdJ1crL5RsSAt48jLDYHJMNQ5DJsM",
  "key17": "3uWRerifK3YvvqX35L8envYHjSTNU4FcBVWYap83bzPx5FEg52tnruaepccRuwoYDqFKAsSQgDW5ngVf7qFcbham",
  "key18": "3jNWAZFH6EHZmjyp3rycm6RH9vEsYUrdNMFSLaGU4oejRvdy7GnU63ZwMmyEjry4hXXrCBNSXKDFeXToP5Qg2o85",
  "key19": "4SFHofwjnVahEqyvrugKmigbTA2dCZDz1wrq9twpMQHdxH6kmQboazWLGseoJMwKwvcNSttRdogjuFaVt8TnthB1",
  "key20": "4ykCLghzhyHK1rehtJKjqggNf1DSxadHhMq3qe2XsbvcfgBbQpwTsrDDu98j27ugSjaZmaRBjCB2mJfFTaZh8pS8",
  "key21": "4fRuCoZNATwvJa36vamZkaTnCY17W3cT4NGz1mQhsxssskMSEw8dW1AJzFruCWfaerVmTSP3XRQkSbVrcXShkFs",
  "key22": "4SWXMPNAz4N1AjQRJJmYakMZiH4QiaRRxgjhu3sr9778uTLGkyDsH7XZTJ2JXXpSU62PihwEo9cxi5p4Taj38Vj4",
  "key23": "2cHg5y9yPGK5AHCSoC6HQuN5RvJssgWA6Y9p1pW8xMPTfsUQQoPaNYsge3knCs3xziYY2Ca2ihvFa7S1zHjHr3jn",
  "key24": "5YW9VoZBq4Bk6ENkGqZxVFXHKuhjwqS2SRqUZbRR8tB5ZFpuFKBVeJpCCXAxNtB6ZoanPpdJJAgA1H1uCUYTfV8x",
  "key25": "4tnfGB7xZmVrtgcoV3sbDXCGDnW19rbQU9aNM1PHV3KJk7dYWHsBNVSeBkrjNdy3Hzv5FEann6re8RezbULA1JZV",
  "key26": "vfoimQp7SMjUhzRsMbYuVryPoZmA7CKGj9Coc5cFvvoBZefraHn9wz1tYi1xjbzYSV6GuV7DtbFZS3Ua97sxRym",
  "key27": "2WVAGKGHWHV9gMAhocinRKoLHoURZAKpfVmxhQZg7KyJYJogZmHy5Ldsb3mXpRVLzcnKwEqegKu4YXBA78JgAAgY"
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
