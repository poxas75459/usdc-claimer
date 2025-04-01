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
    "51rvC425Ta7rNuNpEHxsmbJ2Bpfi4uUzHSr6ovnXMAPL8NRC8ZZW1kidmGSE3bRkse5t1BiWo8uE2dHeGaYmDet8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3geGoN4spt9ehdKkZrNqB65V3VG2gyKf2xnShvorYw72f43DKdFDZGyo58Yv1Qn4M5eArvvLReQBpHPHSrrMV3w7",
  "key1": "3N71jo8h7G1EduMKoHttYWE4AtQApQgp8eDvxQxWrSP1B7ENrA8nzLTG5fWuQdzSYo2fexab8XMTDoagg56skzGX",
  "key2": "4sYtNC9YGpjUMoqqEHez1n7S4XSVHPjcnV85U5smUyYk7H9VgzCF2XzFAbww8tVYYuPz8ka4Gxajgv4hgfBWbgFX",
  "key3": "2zhLsHezFuZ3m4Y6zHtqTtV4vujatDEouugwjKnNnwRAiKu3FdMCx1XK2r2FFxoEN715hF2g5rC3gwNBWknPANj5",
  "key4": "34XZzBfj7hU6dmkWF7GS3Uc88yakyNSc9yxw1sVvFEz26w6vdwVXjNcEgtKLH8aRoufH9RMrfg1Bf7zMU6uK3K2V",
  "key5": "4GnzqY764CSJaxHHK1A3FPGhvweR6bbNjQR2xBiAv8XEVK7n9sG1X7fV4saJNY6LJpSM1oPxoB1fer3DYqu1tij3",
  "key6": "rPRhEUufg8Fr6Z6rBp3GKhnPzTEvxUQXwqe9esWbmj5jGSoLxfdhpPmKYUNcMDL8cBToB5HsSUb1TiF2aPEicH8",
  "key7": "35Uv83rscQvm2HRDu4Cav7csdGcMT3E3n6kTA3NrJxV9vqR4kEcSDFFuR7A1ZRJwqNt9csG9qpS6UYRYXQ3c1okh",
  "key8": "5WmT7HDHaW6yfwFW8Wc3GarKjpFkDWtAt9WVxEm4zShEt3YAVHafxsYoMFDaemC5NSbcU7LxepEuoYro6BQQTiwy",
  "key9": "3ZMiaMG5KQDeZAxyRMYwSRrydQzVmM8wAktinfYTNkyuad4TiSZtTT1Kyz5EbXZwGw9JCjH9ukUspEsmhRQ2baYN",
  "key10": "cfnsvdXEfu2WC6nswnDfYnGz2Tg8ieaikz4Aqdt8XKdnk4xiJcfEsjt8eZmnfMrgGrswcfTgKtTr5bkc8ChLaRv",
  "key11": "5wC1Z9CZJo3uQgT56DxrjjVyQu38hr4sbNUoC6S6hNy89PQvNDJZUzQ6jZPJobYVGFCxwK7bbGA23jJEp6u1zUgG",
  "key12": "4qtXwgmW9ihv5zrHavCYtzbaCVhwdN5u1TrriR9xDxQ8faHMmjch9iu2WSGa3emxkvzVgTEBxse3G72g8EiUpBBX",
  "key13": "3vm4uqKLMwSybc7iYnmY23qYm9S5mxMaF2pwwrge1zSXpRYAY25GZJvM8hCJ9kSfgEk4wR1uimSFtTbZuNJM3Vim",
  "key14": "5pKzaWkk72yJjdCDBZBEMx78eGVcyra3BYosqmD88jof41WMXKEF4aGxuzaMWyknVNYMnKanSSPHGL8S2bp4DN1Y",
  "key15": "5GW8RtwBCgpR9h2kMRQrcjrMDmHiqA76gq6WThjWXTcZbMaHoT1qL8zT9T3d8qGjZPQpf3A1kD5izpbexCXxxs7c",
  "key16": "5VdQshpM5tcM4XGZUsu9kbFxaH5Wrhe71s4nMLSeWnGu5RXf7EF8jw8xhHpb1J5xK2SvjsvteLVHeJNpdDyrH8sf",
  "key17": "4XcqKVDHV4K92w88HdZnVd2ad4pPAqE4zmDpyCFvm6qm91dHfoPDPfT14hRWEqLimfgboRCAjvMp6SeAFVzepTrP",
  "key18": "4k326ASrb3KLYEKUEQKTJYp4VEQrUrVXdmHP7QSNA9MmRGuJkrRaJ5m8jKD2xSM2dHWJSNyjHoe45uG4Ri4EC6py",
  "key19": "jgKhuAuHfoP2JsfX6hch4DA5rPqU2hGaLQf6Pzbj18H3TEZgMrPTweoTU9gxQz18MSvQZ5x1EfoWv9PUgELtYX8",
  "key20": "3kxZJJvAABXbEcaqSdeX9HFWVPiSiwoWVfLpvAX8Rab1CJwAXBd6fiusk1kEFMSGHXnLa6Eqdrw6LWG2aAwKiGBG",
  "key21": "2xpoiAe4LCieNFobvM9ZzapS22zi4FTcxFM9naPQfMRQtqZRi9QcYRVs8U4RMNNB8LztbekovNwPWiqEqH2dgUmt",
  "key22": "5HULVFxJU1xFXnvtn9EWG9w4PritDqm2XnouQyxZXqUhLWtn7FkLhXJStE3jP6CJKhanYrHztE7Akyd9npoadrp9",
  "key23": "3Er3NYEv3pH4CpJ59Tp2xdA4J3qhGd4TB9zu6wQzTSBoFw4zVrVtFiiNANsoGuCQ2zPd29VWxoA89r6tTuHd63hD",
  "key24": "3mc3Mkt2eCo2WJfyfyQPAtTdKGwgJRh1W4raCYCxddxrUZyiTQms9NhVHWkQzhepbcBef7LDn9gyzJHvAxYrkKHk",
  "key25": "3NS5rFnjZ6fw957Yr5hQjNwyDzDgQuCq2maxoeFQN8bBiz28YATkSzwhXRULbyVo44LbBRcfK1uo6FKX2KmwCs8D",
  "key26": "3Ha2Q7hKG6oB4MLwMhXW1FEFnU9vrpbBXhx9vQFxuvx64FkrvihG2zULXRH5TU4kx43o584TGiXJz6SHGp4rvvfV",
  "key27": "2odV1xbKvaY1a8aZthCyweciMjtQSMSpELHx8MdZhsnypF1K5ToXmnRogPfBGmDbzSoqk3YCgz7G5fE38WjKmPqG",
  "key28": "311Th3eBPJvjwtjYpRN5RfKh5M2LyNWJc6Y1k8ZTGLeug5CBMsajsavZaAp6TLkkBGjgWRjFuo3q7oetcW79kWb8"
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
