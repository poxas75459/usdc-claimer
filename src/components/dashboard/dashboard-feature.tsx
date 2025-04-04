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
    "48fLQZ8EHxC4nze8tGo2Ayw5zbAGHZuRqwrV7puZTAe2Yiudyhd6SRLrtcns8yx7pLrnRnkQN63rAZ2Bizt8RngL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o4mxutczgpsRbbdwCK7YRBPs7RJqe2Hxrg1meFjADVoN4BWLYcnMNapYzPi3kWd6vswernnHthydrgPWZm93jeF",
  "key1": "3EhgHo2XvwftCeWDi733tMY9t3BE2EidsVxjEgrRQNMvGeahQZTqv3tqmdbMsaVcSt1UhLxDsiUzzyfZWMsicNmW",
  "key2": "JLT4AG6aAKjcPLAnRLDACSJKGndkBzo8ogwuYgGB7Tp9fjaueLo5MGmBqYEMwoHoFWtUyXhgFdhhLPYSvN9wJbA",
  "key3": "48AvwkYMDgLJPiso3YNG4EqhkL8kqyaVBYaNvU6yX9qiHv2zWviT4FDDhKeTiwSmnv6DcedPqmjvbvBm9f9GfAAZ",
  "key4": "2UQYdH99w2MBc8dyrLH2RTBWD1fjtf6edUzxDzkY34itadbobLbuKkvxR7SuvRfkkUyftc5h6WiTUBjJTXZ19cAW",
  "key5": "5Su2mg499RvECR8pkv5Uef31qoCgcQML5uPMee1SW9RhweT7UQ6q9EzqNQENB57r5xvB3tsb141mUWmiHUxFf2bk",
  "key6": "2upo1VQkzUBeSeMh3iifw8ia41weHgcsT5GqnV198catEYmCMbg144KfSvmYE9iWGLvaa4eGooFTjGSjDE2xtUnH",
  "key7": "66JQ1RHzR69bJjVehZrQk1uPVMuZJA1toXPYH3bjZ57EnwpeoSxe28gbjQAChWYZEjdeWpCSKzBM6a7F8JUbiEzM",
  "key8": "4GCsti1GtADgiGTU8h61p8mAgYCNGvMkYEgg3FccuzyfU2TuXqXKN6136AbG1jXLRweT5tATGL5nPAtTgdEusxdB",
  "key9": "4ijwoY2xbyHcJJ8kpYNx1Dtdtg8cbQhW9hDkmMCxqEz92wGLSJ7Q9nRqbKGkQ2VCkRiJcYJj4bEbkHzkDRD25gTw",
  "key10": "WS88AsQTySpdNT8JGsswXFA1xrr6eGn8uqMR6RdbVC7Q8jWfjuCCeJPX5HHC48WXThVoJSyCVXcU4T5BXf4i6c4",
  "key11": "5DUJfjaAaMDHjxKR3rKDcufJRKx4bUq1tzQe7jEfiP4Hg7GR34ibcoThWqtJCd1rjTkJJtWh7bZAYWeXBCu1FzhL",
  "key12": "2HQZJwnUpmMCNPKGyAR4WFtjeTAUcdBV85DSGifKatZe8qLNK4n375nB74zVawseVp3VpBgWWLvhQb69BXgsS2dw",
  "key13": "361uCXGRydnJTfNFt4ZVmkvzoiANL9icwZekCWffLrNYqR5ycmhzNjozWWnRUXJg5GZRqGJN3maYtPDkhMgNG81e",
  "key14": "3Jqhb54aSUgmXbLA5VMf1cgUYK3PZD2oBsw25V5BYK5wEhyxxrCnfy1gWdCY6JKQF6eWog9xkPYxNncdr82eoE2i",
  "key15": "25Zb3jKZbqhnu77bJgzTpejKqLrSsTYExH2Du45GAx4gHhsrjB6LzyNqqxrVDShyHpvFGHn8qu1MZJh821xYVjmQ",
  "key16": "1PR3Tk96p4XA8WFF4aKJCsiLMw8wKzGW7iXZ7Axno1RMJKXxe6xk3KRQJaUt4XBCjU7cQreMJNCv5DcaJhWb9Xo",
  "key17": "3XGAazLzFQQYcgfnZ9A6SEqMBjfDEHnebkCM1PMMvqhjx5tPKpNLhfcK9NrioZEGyj3DsJ2C4K7tU7atJdxm8XwQ",
  "key18": "xhUgFSur4n5chgh8No5VTxA6818FEpZG6bpPc66mmpTs1t34MwH2Ki5GA1iTR3yq7fEMWKPoHgTj254LhXv8b4S",
  "key19": "3rRVo4iLDmgD56t782CmjATwsxcWaMMAJ5Y86UzPhaLwjrrpiV6n3ach7Vt4g3sxFEfrnBm4mNjnYGUFSatFPBmZ",
  "key20": "3mewboWWtT1DyMWF7LhkUwUtJxNnFdF549fxTxrb5jMgZ5EosHxzWCUP77RTGQVrzM51AaoDdRRUCRR57iFieKXY",
  "key21": "3CZKofpFLscnYksyFXoED8A2wM6A4L5zF1LdSh6LhL6Ar2HjhHjVc4B2TV4EjK2eQCLTo4x66Sd7JL3Ko9YWhDfC",
  "key22": "65t42hKdAYvmtv1bDWcZQFzroJgmDpXKpioozMfQsZU5g1GZQuhh9xpt7o5vDwRdzhvLRPsTgYbVsBpKbSGG9ytx",
  "key23": "4aDf61oeAnzBVeDxdohbAum91mfky8TVk1U2yXVyM4vQ82UfyLGQWM3A6vozZz3SWtd8SL1LTzWrFPQfxMWhPaF7",
  "key24": "R4YtiD6eMsx9kS217c4z371Q1AEt7rR1wp8GAmKWSAMnKpGiPqTzLNcecj4xhyTnEDiHmnd9Rb7ratnKwndWfr9",
  "key25": "3mtDH4xsCDGD84pkyadwjE5HRDhxZS7CxukpHMdYSdunqJqFxjt7QG5AShhCKy9VFYEKQRsz6xKvv2XccxVZX4Uj",
  "key26": "4omDv79oFzSvm1z2tnm18De5NUVMiQ8AwcuDXdTPgLqxxThmynYgNtB71WA4RHuedRrPGjk6V71VjtDKy2jyZwYL",
  "key27": "K993BW1GbdVAUGi8fhb4NwhS3pq5bfwaGzQMoNN1Gifn5H19mpiPgyUGMKymTrnnYNW86MQfKxzvU2gU9yvdZeF",
  "key28": "2Sco3ZDktE3ChQ2yRdAN27Co4eaVnSz7Nmr7q4rA2qSBuZqPTTX3VWXXDAA6naD38AzcV7TqhJhEYhqsmwYyebBz",
  "key29": "43S8Jnya5wv1hA42duhKN1qF76G1cWgRs8baoS3NMZeN96Moq6mbUW3KzcebJCLK4TK3Q23mFiUMCKwsbB33jsBq",
  "key30": "5X5ZaYxzf4tnktqc55Fjvj9E4MHtagkMBHQcypnf9WsBpaK3vgfzQfiGCiRKWWSiVm37Qrk3MZVmpKhynB9onJJL",
  "key31": "4Px81oVENrxH3Jbgr1qg64sEJRzxKN9kxBFSQg2A6eRad4AUyNVsJaFMBLNTrhHD9z7cMAVVFn5e1j6gTkeb76pD",
  "key32": "4oAqY4LFFbfPKaEW4pBP4BDFouVwGvVGpsBNsKTrEzZYAX4dapa6crZZL7zvyVMQKaac8NcSzSH3XSvJYg9xhW5T",
  "key33": "7hTDyk9fWBAmyjonzUuRzqQWG6p4ynQmgPxvBkCY9yrGHYscacxXqscJtUutJ45YCp3pwPhAoYwNrDG9fuP1Bgs",
  "key34": "2CzqW1aRAmTv9kHm2Eq3f8SauxasvKStw21YApyEZcezR8egu1s3qRkfWokcmpEJ2FEQgJr3jANj1VHeFVvrUf4",
  "key35": "4KU77o1obEeyvtcC3TydU5kVG7GuvYjRX5DFqA3to1xZ6iNbUf1bpvYJaCHUxxkTW9S98v1fbANCLcX4xdUWvy4s",
  "key36": "3J9YCHwep1HDMZEkD5GhNWQ5DvvnTMgvUVdEJWr9FiYbsmR4kVPue9iLnuGyZCFxsitwcsAJVuS3hqrSEw2164cm",
  "key37": "4igTsRp9fKPt3G8G9Z9zcSctQQUG56MZLYB8QenZbWWZvKfL4NbhgJAMEHUem6hmQJn1KHt9t5YRgrzc5qUBzJsz",
  "key38": "2Y9SRjX5yZRrebrU8ZYft5G7rNP73Byg2M5KxLhW1cgWMXpP9U9XA5GE75eXyCFMPidjXMf2QsiT7Yc96bGgsbVK",
  "key39": "5Jiq1hwvxwhVAPQtm564ChAYgSbsqgA8qqoi3jTRtuh1RvrdGTGWejTMjo1neZF7ZRxJJNtFPKsbEYH4xGWL8ERH",
  "key40": "5Npik6QEpzsLjdmHkVoxPhaAZP16K2PHrwPMVt7JW67b4AEHdMs85WfQ7GZatjFZyR5M7uwL3fZKj8rsoTJmAZaW",
  "key41": "4QXrYj595LzfiuuENZBQ38DTr8exguuKjRvga8znhRQW4SQzcKJE8fcL34hkQqZbqtPcx4jPhzDJ7xJPLdAj1TnY",
  "key42": "2cqcgzNMp1GuHer7WB6fpFKJ6UUu4bs2p9rmP57McLJPk3geZPLVKZDb4Mbt4oANJhJpKXbUqMAXqU8fdYjd99JJ",
  "key43": "5ir7xcaz19mi7UCJYHPVxWQ4NrcfLFPSNqHC2T6eaM9GdtGAk63etGKUcqEEytdh5TtkCVdpCCZq68Yu4QeWSeAe",
  "key44": "CpUANhJVpSBBXcVBiQQoZXHuZKZEiCGLuxNVQeSfhEYg3oYWhk1sFwxup6aZiiNDtGLA5uMxrPDQHd9takaX3um",
  "key45": "2w1xCSLmFPL7tG3bBCznRkfMy98LXfgLAy24uoGpbumwRiPCiSW246SBLqXQLUGtTGJNriMsm4aG4v5NPcGq1AW8",
  "key46": "2XR3HMhWBKC1AHTn3ZhFVavNYsoaQW5k5pGuJcdkDBECsRLopNvAH3CZ8LReDCq8sshewVFRpy7UpQGS7BK488D4",
  "key47": "5ooqcVvreEYKiNnNjRWzF5m2ZhGdsxrBMi51zHbsBvQFGxihuzwEAPQ8Vz62mjfRSNXMjFZRuF3JWXkLy6dKgx4W"
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
