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
    "2Vkq1vTCHzG46uaCCp4oBMjPoWuJ7sv7aZVvjpfy2wDg4EqJUcjEThUfjpqFvnhnvdBZffpEfw13tySGKZiuLSLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AjtnyjsaafG9EUp6iciYBrovXmkoNocJoyHjrBSMzb7jxx2dyvZcVuyLu2t77nr5yUTEx2nnBAhm6KXwQiPwrnC",
  "key1": "2pRCNabCCHdLLNxLQ4bV7jVnedPbRnu2p1uVabJixbnkNNRmNn46TekyEaSgPqdmvFzUgURpCBXr6mc5GLTQq8c4",
  "key2": "5cYCaTjcvpGbznXz6orZfNREc3hraMeyvuAjQmbWgMedLmoRBpGNGMz8kf681yzVYUp1LNaYw8Pqx43d4mQhoysF",
  "key3": "46aw5SiX3i3ojFKxEe599p4T5w9KHdKrubdveRWqqzsewWiavgYTSm7MMWwndcBJtu4HHuL3N8ddSw49Cw9MfcrP",
  "key4": "4CmHLhxd3Ay2kwANFezNQsoE15yLFtmUmsNjNaa9QLFBaYM8MaDRQVqyrLFrvZVnLYVnqxQ6QWrCGgNeuYfc7bWZ",
  "key5": "Gw2ZFMtmoNEgaPRBtrePR2mjxp3N87Fdmsvt4Hghmw6LwX1jP8jEJDmpgNiwBpgjBEGmyD3d8Eo2uagWxy5RbMy",
  "key6": "3UjU4iK8Za4UqbvPUX6ejWdUhd9Z8Sqxo3H1TGV9VLx9uqrNi3ePghndahTmGRsMwDSSAiTDi4D8VnApZjedhSGK",
  "key7": "2b4L6oHU2yoxiHvGnxLAvjnbPQz3zc4RzU5k8gXfeBdwYg4aak2zLSPFG4Mb6ucHvPcXjodD96aRnKKPr39DiNxk",
  "key8": "5fakHa23MU3zMRyBTYeTvaFw4F8ZaG9YyhNJp7gPf6my9cSHYzhVc4K3ckv48bqXnM3Y9vHtnM11AR4Mp3pC9RZ7",
  "key9": "2UD8NSFq2eQgCZE71wUNQdiykpW7666rbQ22vvNj6BYLk6Dv6BndB8bDqQKw2JzvUEhy2F7XihmcDyRqYr8saLhx",
  "key10": "3dnY7DScUEbnqc5BCfEPAXtsHaWLuvA33oKxyvGuaJuqs3Aw9vy4FschE5ugm5PPsXmpbMww5ocPyecs7BJopy8Q",
  "key11": "4L3CzFy4PcELnUVfwaR9ot57yUMQ2kaBSzKy1asxMngFuRxip3EYqrpxdmi3RmJFCSy7KNdu9tcCkM183u7CNBLx",
  "key12": "5k78CmuLkmXBUA3Heq83CnGLdLBxbG5q9PPHWCUHmKQ2jp1yRG8cNiCqPtweMECVXvQttqmPRowda7DGFPugAMjN",
  "key13": "UiRmXciE11Mkcjxu2zddHqeD81j9oysJb3Lyc57SgA3VuVESmxQX1tsUFTsLptCW9JWNBLH28xzTq66arJuAcEt",
  "key14": "2P67G5SRNwzCE8SmDYE1eAX4CZmwL7TbsAce2ND9tcZK78JnX28CUTUfQz4XgKTczLRpWquS6W4DGgTHFz5ep6pQ",
  "key15": "4xrxsM4aDEAxhbGMPqVrq5UTgVZS6w7amLsUxKFQFm4JAWUWnXkp1ujZ4Zk17Azp2PSuCz2Apt5JWQKRiPi1eHfX",
  "key16": "NFaBgvKcpMyt5wrSQ3TiF6EVS6LEHT9yocxA6JyXBVTx6W6ZTR5FF6xZT1fn5A4AdD2zhGJouWbGj4AhZZQUbww",
  "key17": "3dBSzfyUW2FRkuiZrMsKLRcrUxqUeSSyvKKRfaG7eB5ThXp9azX1MR8L97PsoQHtBYG8yXdmut3zxUyTa7PJGh6g",
  "key18": "drPxJAKyM7DdknrD6DfEU2gmp5AzMpVhRveFpmLFaEdLrKmgeUjzVNuAbeQ1qFGBith4WLpwcbKt9RDkpyR5kee",
  "key19": "5ihxRqZmDxe2c7zKRequf54CrwhYAhFBWTa643UQBXhxoMnyq6htuPHQ9kJSwbtLJmg5d9k3QSPoRhgbc66WgyUz",
  "key20": "2H8bASLL2TKrttBXrZZpm9euDSjwb2jC19PGrEbEjd66sbfjhD5H5TbP7nzJfSdNUrGUr8rYr1jhSRoDAum6nVAL",
  "key21": "4zAy19Hc1iKmX3oU82jvfNBPPsbNsuqxythzsSqhnZBXcBvtnm4aDzRzSGN3eabTX4tZSiZAX4mb6G2BR4C113Zf",
  "key22": "2UWZ5KAgtJXn9duV7gfv5APurLa9EgFHy63a15V8K45SnVGJwjgjNTx667XFupHscPLCR5A92RoEZEy8SkXtQDEA",
  "key23": "CMj2eSKgxbaurW6tQMBjHsaG5AjjcAoqCxaBjEGLSRv6iajRfTtY3gtR7M3BnhYf9ZCPkTCuBAEK7p4YixDabbr",
  "key24": "29fEB7Qfpf4Fc2RvJHhDUakX8PrwhNNWWufS1EMXUCJM6enFg62KDpqMHtRyqDcik2qMZdygjKGEjgcJ7dMLdx5y",
  "key25": "5c9k3UgygBWAe28fx3UPxf8gV5aW5GrWw9V6uFeUcpNGUXHp5ZkspjHNvXMoJbjUR3AePDHBSXtxHjVqFadD98mD"
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
