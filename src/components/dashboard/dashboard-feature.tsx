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
    "32SN8V6DwCgLRiCkSMSEDiDbm7ztKrgFnVU8xYXs1TiY1MVJbsuqqM1LRnw5eUSdo9pLDnRdMquAjvEeULkdRKvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SUCw4a3GtnY7qwMwBKypTr5jsGCELiUgVkoTwXRbQjFEHm1Bbtnumr1UQ9gUkkZs1GVdiQko8RtXGwQKu6Treva",
  "key1": "2Koibq1pC2UPb1VE1G1wbV6Wfuoes57a4TBHkan8EDvk9fBLWgyvktvuagzktgb7yNXvi2XDyKYAtcVWKJ51cDDD",
  "key2": "5RvXXSas7tAt2sEQPK8wCLEw4FxVfMWQdhKySfKzwWtC5qkwfAkSjzx34RJX8gcUUhYQ3tCZxLKByhPT6EEbuXFX",
  "key3": "59xqiKxEmNJ1GEeR3Bifq2E2yX7UG3BDgd3o8ArbfxmuxTbzZ8kxW1cy5BQ4CakEnyv4JmeHigJ2za6TkbMeWs62",
  "key4": "32vXgnX8RLgKxMk6NNbNAPzRp4cUVqMLffkoWk2XGjC82wxDjM2wEFfa1y2jQYVk5U16KjkMFaZmjJmYPsMdWbvQ",
  "key5": "5Z7yWjV5kwoPzRGRfpt8EqJcN1XgHBorguxb8Jt7q33atTrYkznJqYThManLvm6ronYFWWEVeW7q1XJk8ScLN7AM",
  "key6": "bQLnmHviHVoaAVHsXcXrwe7iEPpft9y4KtEPVb5z2gwxTNyd4iur7ew4Qzw66v6okHoeBADbdWt8tHHLJAcSzqL",
  "key7": "mX3o3TJFQWsrQtY4YnWd9j7KXQAP6ZC6ompcPUfChFHz49aghdp68UibnTa2BttzYrEDLwZpBCJvm4QnWktaAh6",
  "key8": "2NPUTBmAUvDUTQ947f9LSUz7yX9bb6CWxd8fX5uFLAKt7d4kUQoW59fMxBSLfDKaVoSbp5Ajj99JjKkJ1u63qCCU",
  "key9": "3t9VMRMA2aHVHmk5jaxve1e8do2v9zxR9qPoaBqXSaHQRxaoGYrRmB7Qi1HrPu7JPoLZWSdFSCvAjn8nvie4LwU7",
  "key10": "3cVMnWQieHgt6srWXrDB1e1f8g4wWMUmcxxTWSA8kEiV2gXDPPBNEVd9P6BXmGkTe5PyHrtuT3EAL9vFumP4jgA8",
  "key11": "xPbLrfBKq9g38bcaRGRS4e8EaB97XBgQCkL4ZTu452BLUPSDW6L1WAogtfLACjYNvhKNpZcFVwwQrF1SgPJaeUo",
  "key12": "5kBXMo9EUB3GHyerqgAkpDWrS3k97vMQ8wSJLfFnvpZVrDiSFKEYEX8wDymnVYJh5jpHKEQpSU1s1T7yuSH9kwCr",
  "key13": "dEAqHnV5Tk1fTXHwfwR1WG8WcYiXK3NybtNF2h5gPNGe75BXmeyC6iGzc571TAgQ7hEFW7ppFmqp13w1g9sje67",
  "key14": "5Xd8HsWvVXUgGKGHWoQc42DvSkMK9BNN9c8CyX2uBrxJ5ERqSt1gNZyAn7AbNUFXsahqgJGJA17URuyuayEKVG1X",
  "key15": "51rspx2uYEC5QZRRZ5tQfDgtZdCrZUVRjcxAvFbHcexsegZ7Bre1zhzrd4kY8zmtcXrKLTfBswWnotxmmqyJQbeq",
  "key16": "xFfYFZuuPFyoVh2pzeXG1nLcgBX4x5z5QGtraZ9ELuFq2ejRya3PpNAvkLr53rQHQbmKffAQXTFEmSAj3m48X4o",
  "key17": "T8ttzuejjs5iKFLxFMyBtVrx4bRkTM3CAot2VRKWhdXpMhUbrSu2VFE9ops5458S9JHLkocRwyt482L6EqxnoWJ",
  "key18": "2yNbhDLUjdAem9va8cUcBjf3idnnwgrmYp6y4eDjHakbBM1UyWfyjj4zGigefPEg2QMEytGQrF1e6CgwGTaYjUAa",
  "key19": "5SaGNc7FUWwGaNUuBkRPYtP7u5qBAFQzzWgxhvHotEjHKvMVoRUtDmCDtdmJKPFJCGfS6XKFiiDEsiRJuaA1DYoL",
  "key20": "M4ReXcnstgpshhTmJYi3xcds9vLDRYEYGBK7SNvfQZX9nEGuccK6ZXBLnwPUDrBmuTiXFLBEUAkKtzF8y33RKm1",
  "key21": "33bRL9Jzyt5wCHbJFpY73KHrYQqjsP8Xor8Y74HwykqcAcS2Gq6ypqCp6RVt6m3LJkUkBGzpW6gkVzWUe1jfLvFc",
  "key22": "2Xk6tyu64FzWqiorMR8PqShvv9dWK9RjC5LAyaHc8PHJwcTXupyg4qhsaKrThiZXVFTVfjp7S3YbgXVvzHx6vjBn",
  "key23": "PhX4qGxu8nBb7hBPqL4LCvRfFB89EwHvmA4NchDE3QCdVGwSZso8Msk1szJNrTooQjLicAk2tR9nje3P6hBYBpv",
  "key24": "52GFivJAaxV1QXnq4iXwYxKJqAuMsySvVbZ5zcyWMeXeTwcuP1ANtocwmK9yNBJTiSupoJLVy44cogvErSRju4jp",
  "key25": "5sdzcb6aqnpbxjcnNKu6sgEz3kFQRbwu4RUn1XgE4yX339NrAT6Re8Cqfq7aTBVv8u6ZZLk2UWDHFDAYGtJ4qz3p",
  "key26": "24gtwUgPJKu7FvqmXTauGGkiExCt7ECczRSDk1oJL5eQPFnvNSLxQsD4nnuKhkGsxpMG9RhaquJ5FZiDYYKnN3Ai",
  "key27": "5ncxwYv7DAuaDFkN9WLRGM9iEzr98UPe7Q3GENKdKhqbEgdc2ifgEMmtRALN7e1SPHgyHGMiFkmdj2DDFnvMLfqr",
  "key28": "4oQfZaWuJ4KsBQFjGDhrywwiLitHGcExununMsBtEjZJREF7widVFFT8a48MP6HXomSgE3YcqB5Kqapv8TkamKcn"
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
