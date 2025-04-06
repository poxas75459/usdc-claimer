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
    "JqSMKaXuJQT5VRCg6hSRrZ6acCjnuKpACsqdcG8brTUkkKEBNhbbaUhBNr7kWxNfhPP4t8Haufp6P4wyeFNCBvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39FSVDzctdR7MK9CineEQEHRsmx71YrxCUN8KtKNnPoq3dJEUEjNBnc9oRF3rN1yacwRGaYAN23NZ3wpKA8L6L9i",
  "key1": "xwvgFmvsQkS3qJjSen1m72ZdeJFgKZVTkbkTkKs9raDN49uTD2ajJKveXvnMff8cZbY3GcVynsG9tjuaNj96U2a",
  "key2": "2zyNmn8hnbwVteLsvBXSXWWn5MXMnFKPgNQSAbWmHdymLQdrvR5LHdAvGDaPomJd2nRJeGS8kGhHRxUsNqaYFqPT",
  "key3": "4RK6nmD9nWuoeBnVyexTPn463oYZRGNhuv4xf4UFi1NiRgJ67fXrA6165wmd4yqCm1EVcX99EF8KizAbhXzEHMZd",
  "key4": "3JimSms2fxLidZFUjrXuYyLd2dxJsTmzMTN7bCRTDJGYYnA683L5krrGh2WtBjoy1h7uzjKzfio361nA1ccuHbcH",
  "key5": "51sreaZdkuZXpbU8w2R81U57CVsCvcmdpd3rVPt5j45QkD4PBEMUo6FgXV9MjDNkJHZuNpkorYDGGCLdwtH3KVhU",
  "key6": "9m9HeCrrpmK7UjwVkTD8RCYv7kXpqPim1vmwenSw4ktyBT9T1qo2ymTE5MbtYauxDuxZ1j1iKAdhLQvu19XANJH",
  "key7": "23ZDZgYQENqKbPaHefxVSd2Sai1kR2Be43ssuNLsecLL4WDtRsxWcQJiXshiYcBjCjTxUkHHtMvFKf5Bpj1bnfot",
  "key8": "46JDG6EcBC8rTPB1zcnwpifULLi6Tt69cFygTJTrnHT6KEXfSDoCCXK2dxaskWdXXR7rTQaSYSc7Uw6MgY6D3L2x",
  "key9": "2U9wzxsNcxNirbTiM7x1B2S7NQBXDmURxxhZY2QfbPDPFcNHMw2iJX86krj3otK4gEpewUNyzJNtr4iwq6xzveZx",
  "key10": "2CJB7Lk3XT6yxQjEr3hCKjBaXeni6jhYRdRXzGo6RXxCKa4Vf8JfEZojzXi5gDPhXdwgCtpdeSwnjtFrRUevyAaJ",
  "key11": "2DuZ3vmfsjz6aRE7FYfyH5jtTbeL9WnvLRrTqZuzRCxs1pLK41WQVPbHMk92YuDKsYDMnBS8954P5gCNE5bkVY4T",
  "key12": "4jrcHFjQbU8KApd6vMuMt7R4afqfcWTpSnm2SBdfN746sqRbNk4Upn6fERW6o1VtbCrM4EWR7cmTz2CFAvfkipLe",
  "key13": "5YbruqN8fjovZbgHv63fq9owcLC8UgNmibMdricJK5kqpPdo7DwDcgT5tHLYpGcf38An9H7VVWwj76YuJgiQz3Sk",
  "key14": "3XNNb8VK55WfKpmZS2PeZY6JscwhbNLaq4GnP7BVoQ1i36qvhugySraSAjYdDVWtw9yMPDyWgwq1zvV75qakT7zH",
  "key15": "548WmWdB5S2fC8AV2L51TgMg6LvAq7R33WRFHSo47LRRwdEL85frU1Lex7seb43fdkKhzRJVPG54YDFTwecPBZZQ",
  "key16": "5nAomG1UnhAtsH8BRKqdH7ghhKJ2rPCme99VRHheLhBveWp8LhN4S4xYZp292kGnLyCWTSLTjMwZYY6dBK8HCFaR",
  "key17": "3fUM4EunmLHquSBCK6Hjm11abuARZDLvbyMHD6fLWqrFf6FwVgsteRCeqNK5RqhSNiseKamLrrF9TX6xsdP5xA63",
  "key18": "eZzT83gJSs1v7iXhJUWqwL443SLEQ8Dzk18NxhiXJGwZMLUVVK5r1LvCTx7MoVPAEyAZxHQnT65yJuoFctqBWuE",
  "key19": "4gFQdZfx1Tjy7gVPPPDepseHm7eLP2fxwfqjhgyQv28td8Qe9bQgh7ZbiUe5iXJycQzN9McHF5QqhpZgFMwYgNac",
  "key20": "2CM4inHE3t8zaUcHFL7TW5M57SZENEAgGbm9rxczrLBwx1dThBCdjsR7QTZqDNCesMXNEH13pcjYFZjcQJs6aR5C",
  "key21": "4hf5L2yZXQ3Yk2cbAFnZmKjynrGa9BAczApnder1ce1Wx7HvYcCGRsTLcHrhx9hK6qSCGmRLcmNbfznnEcKvjQUF",
  "key22": "3kk8BGs29B4a4fGb5Jjt3zuB2ghUZ1kQ9Adw2w57UgBmhKbrcX4bqcTvEkiPcM5Rza8qu8HHSGaY7wmbTkaW5gwR",
  "key23": "2yDy1G4Y7HbuyR4Voefg2ZonKAXKnBp3D5jMH4Kz1E2d9xuu31XfKsbQCtNA94Gs2F4jSyDs4LRNyNAPLGDZsFqU",
  "key24": "4PLFE9a5GYjkdAPDNfDxMRJ3QHB8r2yCo1DPvzWm7bMLvrVXyr7NY7he9FFBJFCuYUG9AwBpDUVrU2pdhFBxGKqp",
  "key25": "5MtNDmqJAzVgRN3v6KEFzgWVphxRcA8zojMu39zRqUKZs2R1ZcGMQKX1KzMmPR1FE2ayZABZ7hT1uf3fDaLS7jtL",
  "key26": "4Rcmuy2RU53wkGmTRY82wyLb1R1i6yAQJzahM8wPCJJmT6BWJbvbc3N9SM72so76iLVzDaZxn27auMHKWJeHn5Vt",
  "key27": "2aZLhCiHhBBMtJ9tXJsq241fSyiQdoqop8UWjB8bq3QKQ4qt1DebojNeYcfx813bvFS7mwZm71ebU41UTqXmZsqA"
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
