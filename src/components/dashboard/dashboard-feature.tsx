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
    "2VEd7Us2JyjurcofnoRSJdyLTem62Pk1LVy9voHWRTCjPoKKGZXUT75hpAZzmcxFqFHLoqPLYimcNEmRAZdXVBUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GjTLgtzKy2XaQtfAFynfwybipCCVUQQ5oiBMi2pCU6J4qeqbQ6pTXN4WzbN2XEgSWppBX2sNdoVn7mbTVgnGkxo",
  "key1": "5KcrJxD1C7wURuWbKxN4TVL87WrZvvqMgfbn2Z8zSRQ8L4LjShjARKap5xAcaWLD3VFEg4CVrSu2Z9ZEe8LFxCAs",
  "key2": "3kHEavhMMJo7sqoJnC5eqhKp9GpkEbWj9Ys6nYb9TpR9CjTGHLd1PE1iYCuUMbYdKzu8fDPBapnFWx97mc9Z8D5E",
  "key3": "3SLrqZZUyUxtMe9jCFhXS4HRQFuHFCpgHpu3F6ZT4vLoduNBnuD8ZJQe7isRhDV2QXbNr21b4grHr1881AMh4CsG",
  "key4": "hhRHkVRgQat9eSheiZSYZzpdVpfS6B7CQTAgxN291yEbRU4S7Mkch96SQaa8sacpzu7zWqV5KM24iLWQ6v2duEN",
  "key5": "nKNv6rGo4T1D7vChtfDjMqTre7bbwojk4m1gT5pPkgqVYC6GAQdYLvGVXgcfTCRA4M8kYeiSYJbkKxoHNGrfQgi",
  "key6": "4SV2SdHZsC8vN4HdwjF3qBWgXxS9SeXpMmAUZtvqYtX2tbGK7M9kVwx3VUDR3q3ZWyqj9CBkTUXC88ivHnXnErn",
  "key7": "5YZdgvRtZ4YJN2wTuhrXzNZ8vb4EqwXYSXa2DTeyiyBHpEuTcUcrYtthktAvWxP6FNk5gw7hqoPRmwsPBDmmgN2f",
  "key8": "3d4aUf2VzuUWDFdcwy6U9EUvYTVzmmLC3zXb6rzXDG1kaceoz5TFPHLKWf76fcx4E6gJ1KhpsweLf7d69n2Hryu4",
  "key9": "64ND1xwxVDNgMi8JTHPCC354YrWZpeEmas3Rjuy98KSkFFg6haud3QGbxdoP32Ru8AHjLDmwPNxvt5Yi2XEMMCwY",
  "key10": "23oTBLWusLt2ULAUW7dhh1TqcAnGDKWLEDtq6Mx63y9abWLE5LaHjs5BcmbQp6K9qCjekcg9UWetoRqaVaGAeVFi",
  "key11": "5uWitxPnmDpTzCM94okWo14sYf1jRZkAd3Y4PvU71peJ2DChVRUWSerb9n21XsW46TGjiKj625HtoT6FXS7sJyxU",
  "key12": "3uPmgHtx8v6J7dqpf6z3enXHS6rHqY4azkhD4V4W8TeXeofgRqWTmKZvzuYrtJ3SQQjDei88Z8Z1rL4gtCnKAYQR",
  "key13": "2Zu9BjJmVxP14UukUwkdunfXBAcgFa5Pxv9KqbFifhkNQpExrUiVsSy1vJGf1Mp34wcqjYLw8yxAzSsBfXrtbMRA",
  "key14": "3DakVwFAbwzMUaupxr9QrZjf7fseLCEWd5jrzQAFvDL9GCu911BkYbBMsWHs9tbPS5VFaHaUtZKjDJ7i2n1Q2qrY",
  "key15": "3JRDFr4evuoBKFxNkBVNkgjcC2m1VBhbTf4igEnisC5JNw1p6gR3o8Ps9iXZgUzm9BHxgkbGNGBGSk7NpM1AYcg8",
  "key16": "3C3fHftNcCKpoySKN1SvnespcsS9SQxrHruDq3R8HbfxccNuhcH5ZswVcUJ5YEZdDz7u6rJLrFzhgVhGHeTL1dSA",
  "key17": "3Bi2p3otrHieEpzE7qZaswqx3jSMypF75j3XGWA8B9E6qQj9dC2EDfn1a5xneCYTVbHmcHkXTHWvuftVB5kqwH2h",
  "key18": "4NGeKbNqWjyszC29gDePSvCwzHUrK1fNE2JEMGnDTJMPZxogpdZok1VjMMy5ySmAkUvx7UPubFn81tzG4ViKDmTh",
  "key19": "5RAYzbL9XDxLGFzgeHd42kdj7i8fdMLgX5MNCwpTgUfWw6XLLCLSyGjrXdKMfXcYCC6bMfu8acZf2E5JQCbjQqsp",
  "key20": "43Urq2ADGK8tdHs14mWVxXR1Bp3h3R3rDrrYCXY7rK6uhCP7praWSf6Tes7PPNehpMUPaqLACme51ERRnHt91qKS",
  "key21": "vHMr3eVQ6XU5JXX5Tu9YnUws6T1v4KSEXRwWjayT25i16h9jjyckenNLqrN7zGf4W3MQ7fxABaexcCs3U5E9i2r",
  "key22": "BtVsZU52VRGtHU1MSM6y87AGgL2VvZRNabz6seWYRFJzrQN5QSEppE4uS8d9zZuNJvpAn5GcEZc47x3uTTBdzXs",
  "key23": "5bTxhYzWa8X9RaSJ5xNbihTmkSBC1DBPwgKdmRx5HwW3U7R9JYEAXEsXYsGCKk3iYZrU5o4zQBW2WwtALV6WWfF7",
  "key24": "3tsaraJUKxBJAjhcPvNVjhGhFEoXSDHnXdhxxJspKQsYuzH69T37kBHneqDFf9mqvE3N3hJBex3pHzJ2hMtFXp7L",
  "key25": "2EzycV7L3MSibqh29GHVvPAycAE8iGcUiqsQgdQMiSFkZv1D5zCUn8JUyPH9mwowhT5cSMmsA9mkjJV9KnyJAhwK",
  "key26": "hF49JmxSs62SSmBiBNSARLfSE27e2zYWGaj2nX27TiRdChe9UftHCYe2iuKFyvPsaCpdSGs2r1ycHk7cUfDrBEb",
  "key27": "3jvgK1e6pu4aPMzLKaqs62QbkLDk12HNLAn2MSmUnt5zqw6nHE5jLS4htt5MXfnnGwTHKaKn2reFDfgdfmTZJxCJ",
  "key28": "2D7gRBtz6mA1CaqVfU3tLPdzrmk4oWWFMf9wHj5NxY6KYz4AMpPj1UhMxGrar9Nz7cqHExaFhjy9vBUbSN7unHup",
  "key29": "65wbcHCSmnRxHaPUW4U1yNme1Qm9Y4FUo88ocQsnWgPMAnxdV4VgRD6HpPYvjX1hF7vt6U484tWrehmDJ6vka5jd"
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
