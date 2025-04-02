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
    "4XAwjGc7EFDojkdaJji4NUDccdwMj1RGsuEsXQm7sRMUjsEkE2u9bRmx26DrA3SrRiMJXTq8ZWFn81aTFHRkDryw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XzBiry3dHXVFcJiBnGawBTLLsLuJ6NDFqqDiHekxuiGnbhybHQRzvDse6nL2sWRdP9E41j25fyNgVFfPMZfSU3j",
  "key1": "jbubZm1d1cSqGTNf44rYSbcHq41kWwcrtTaNhqhXoTimMtJdr7556horJeSQEpQPeqFyFve7jbszTRvWZBPYyPS",
  "key2": "2rifWsPBDFupHSwTJoZ5Ued88dU9DwFsipdTAb2VXzbpq21kaYsxGVJxgWqyrQeu7ZPDzpNawpmBXx1dWqG6bgSw",
  "key3": "2Ysu9VryfACp4hUyTon2iQ4RFdA5QKTteMnFVQwrv8TKX4jqTFZPxyiCtkhWqxS8dojFzQFRYA1TCzmsU3HPbSvC",
  "key4": "2HMdRc7Du4rSQ4bwrfF7ZWL2vTc6xZ2Ntdb2igAT4TCbQn5Pgm5oT3zLijfTTWEb5nKPomXFpKWzTvTeHHpr9KZk",
  "key5": "JyNZVsHcuoZ5dSJwqVMjzQ8Lf1HHRYydMHTUqzTyU8YoAA2ggTDqge1Nnfb6uvXBwnCx3qAK5NzxknSihdiyqrF",
  "key6": "3SMzPeUn6VMYTFvL6hLyP9AobPrrnfRyCuoFYxZSwTmX2hGQLRi2FuRUFjcGm5fKZ4jdsESf1uL7WtwiBU43Tywj",
  "key7": "5MGZTzuDmGutUsc4nE2SAHg2hCG2MpzEHbQQxwdTbiNrY7eqEnqGWAysmgMhATkaTn8cSpWZaqa4nLd3iWWT3Kop",
  "key8": "3J2g3ZXD8xBziiDGxnDkbatSHWemc7cQEruto6fBNTiSnCBJ4dDc7eiJXhEZNLSUvfXTB9SYAzqUKSWkCV4ngHVC",
  "key9": "3Fa2Z4eYD363PLagPgYNqAkDz331qhTnfbVmNtaZPHMadNnZsedsNUAXk5jMbX1VHjGQH9PPoG4eogBpRwLunn6A",
  "key10": "2uj73izHZWtENJY6dzekCTBJBP81TVJrxMFJBRghczByGtgSrQ4AyPsdaV7vbBwTdAXVYQAHQBnsMnzCxZUJbP87",
  "key11": "33ctUfU5RAeqvvmcQFb4NNTKVPi8buEE2kmcBWJpA53ZoPbif4dRxnnUxb8w3VGkK7TyTSkvTBFJhH28rKSRdVdN",
  "key12": "2V2rxh1k1nHmyNMC6UxDjQ2Js8ncRXTZaM6frscpoQATER4bHdTodiEB6138YGeSurMsjGAqxgcfnLEKvWWhvmdP",
  "key13": "2MjCeV69YYH4eZd6n8ZXGi5u4X7AQwBUyeQKnTRqKZyuTsHyYsK6V9WKLqxw5idzXSG8u1n6G5KvvHH9PGXK66bN",
  "key14": "5F46kjzZd6LoeP7dtk3eTQoWpj9qVMidG3mCd2Uv13tDjKzyayhqCgRLpCDFpANsm8bzaYpzEGaYHvqvgEvAXgNQ",
  "key15": "34viHZaPfaVRmnBeuQ5Yt5p1SF9NvsV7aY4B4FXNcPyrnNut87WiMNU2J26xtcAK55Rv7dRPaq4RhmyNS1kyNnTn",
  "key16": "4P7DjrmcUhNLY81RJCtqEW1VFfyUo2sWMRmEK4x5b65kmMQkuKkoRfk2mwZF1SCMfUeeKSx6AkTfku3oMu9qZ9a3",
  "key17": "CQm2JBqn8bSjkwSKEom7zyXTWZs9LtUaZJxmLkrY5S5PhqtUdZxNWJfDGVpJTsUyCwoGZGFf38Ub78fwpsEwcdT",
  "key18": "5236tstikE8AGubWp3AkhAggmTc1PhXBxaZ6nNyYf2Et8fwUhRkMbzWJodzaRWn273c2LEnCYoeM4CFbBfyP2tZv",
  "key19": "4TBJhdje9ndfGvNDn8VoE5aDP7UWB7BPK4R3rH7bBt7S21qBu9PfRiH78TpqRojathykJiqmeWaoJ95ue5W86Tw6",
  "key20": "58wFBTxkdDsji8PNqi12N2y4zupbbBNhaJT1DTtTG6GT1SxNyxiASVGXiTNKnueqW7hnh7hif7H5uC3EEBRKwcmu",
  "key21": "2W2aM9Q6nXFcGPozTScgRX5hY5Mpvpg54G4MV1DCaHCtXLVrEtRBCA7Nm6CEBnxKidGVMeRm329R1xpgss6fwwxL",
  "key22": "2imjLprj9vSF8yCCPmQUG7WCJJWiGv1PBx18C88Jqjk6yWMvrTv3R7NBvKhjDwymBGZVfZDe4XuqVVySyk9oVZSn",
  "key23": "5na56Tr3TS3WNkUvah22u9L5gH6PmM4UQ7ESrBtEytzdgyGiG5Kz2Qzw5BvT8w3wNWcNmQkBfRkhxkvuRMYujFWw",
  "key24": "Nm58gPVhhV6nLznhqqEA9R5ivNmckvR2yVHz9ZwrpJGFLt45jMGqoPJNHYNeUWntaFPCYJKmUMyCHLBsQYyyr3B",
  "key25": "4axsw1JpWqUb6CoL55Mpf1JMah5mZKgNZJ3khcF8fFDsgFQonSaS2CSg7vexMeXt3uhuA3Ht3Z238H2SPGqJHosF",
  "key26": "3gEXfGUgAtWgR4vDr6A5ZuzHXhNXUrg6QnxjdViTaA1rqjjuR4kTgg6hdT4nndnEB6NzV2unj1AKczokuxPu7Wpc",
  "key27": "fx8HZLh3XhRN4t1NTT2dgNkX5pS2Mx94RSjQt4Hieut3aG4QANe9ULP56RTiSH9LhgGzWnDJ3q7cZWiksJ3GiHy",
  "key28": "618NHqAkyETCeh9nqcxerU7MKt9r68PDMGi237a2W88sio2ZexSjSiDvM7ikNmKKonRzursbaSfw2Dh2uV8T2rvz",
  "key29": "2zaHK1WcGr3AP3zi7Hv7Wn24ZJ8DgCwADU4sD2YaFUzT6cxjV544PhnKnSfR43JazJmQiVNBHKtT9DgaSM7bGGuP",
  "key30": "4VL1RoPcQBsmnUevzXHDyLdaqLDtb6Q7owubYp1HYwHou6mBoEvUKgVeNDcrEXNt2qhUN3u6dPxtRMSGtigZWvn7",
  "key31": "9q5VibA8skt6HT9GmgpYhg9fkmqrvjHhW62BrwHhKAB6arJaKwQNfe8raYSU2sSsGWceeuQjyAk8rXXuhbxzJx7",
  "key32": "KtSb7Rc7wY9erJw9wXzMxkg6tDYbJKhNsxSmYEcjfTNbyqKwWfYQpG3kbBm8bm2fv6pUAtX8XSiyhQf6F4CHw7W",
  "key33": "TMKeKR3jz59NdSCRj32oJMmthiBjHqjHmdwntpd9dFe3iVaJt7JwmVb3cBh1Qozf3mX4VKrHXYuUvUyhiP67NRJ",
  "key34": "3i4W9RL4JVhSwohu8fadyeQhpjtZN1GBmCpNd1Cvq5NKhEaFDw9NwJXRppndLgxmU5fTMWpYsAYywAZPCkY4dbTa",
  "key35": "2UqsigR7dUzpPQQgb2zNg741FD9W5kahAbYSMEUwAFamdBAHrUWrW7MTKyP3H8gtWveZt3UjxmJC9DWWpPnrJi7V",
  "key36": "2MU7R3sG3qSuipsaobMkkBrFHYDG65sxLiUQpaaQpdhPs87nkH4ZshcW5GwDRcaTvLdPDS4PDBJJVrViB1hw5Ns9",
  "key37": "4PYmXNGptiYxfEJHGmNz6QrEjYsHyZyKp4EzEy999LX4d5QAcp1vMnc2RcFY5ySLg7vr2pmDVZPXmXq4LtAaun6T",
  "key38": "24tdruxSPG9WQNHJZEcqvH6cURMj4HRCoDtyg2J4UFxYJfFvFctdRC2SAFT4NdPHwvXXodByiPNVoB49ZUsp6tpy",
  "key39": "4nCR31r6dP3dHinF9g7daR28yjdwj2Vkc6htZRoTKvrY6XBKJ8WAeT4qABv4yeoBJ7ZkJXHfTQ7xbzSdQZesk6rC",
  "key40": "5P2Q1ZkgZAkAh8MkyLw6EFD6qqVusmmAcp2JTD6PbqQF3W5zxqXHgu5AtqGYEFHMvg1gZYMbUrsKk53hdcTvjKvF",
  "key41": "4mPTzfJoUQnPAFjmGirEHrsp8eKA8R4ozyN7MHuzFLBfFLwxNzK7uphdrQqaTBxKDB1x3oGjB7487ZfrhgUjDe4i",
  "key42": "2ucLpcPmf3pRzWWL2YXtC3nxxJ5UrP5N1HXZVmMRgpMs17kdkquauXQqm3oG5Zq7PyyA1mVM2ZfThLEBi9wK8YWj",
  "key43": "5b81FiWQKFPmSsF8MKTMgmFy628YjECnT5DGoLJTMXPKgekoopcp19wnwdT1zXPfNUnAxbKC3wdLtbKzj5Xs1a4Y"
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
