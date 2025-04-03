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
    "2GmUszRK4iJFMxWpgpugYr9x8Dc4PccwvADDgAGwaNXeoqzrqP5sHAxJP2DsDb7R3oRmazkw5xqxCW6b9Csnh2oz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UavNxKoYMynED5wz7KvJ8L9A87i3QqF1GQAosRh5s1K9M6JdL59SmX3XRiGU64SQdu57cdb39Bi42DyDXQmzQ8H",
  "key1": "5ayxTu7Yx6dQYccEDuUsm9JG2CQd3qw6iKBtgVgRJAZJmxtE8hiUXCBwXUc4DUHt6EiUdnA5e86XXZUWvytvUqzy",
  "key2": "4pfxaYousfezT8SfEgYkYXsLZZmEqJuoeaSnGQCnC62SbNfUKZEyFqUAv38beW6LRPTF5x1b2MV3vJHnC7Yk6zp6",
  "key3": "4pYEGFgQFfAhoWdFCYeZr3gzpaYft59MuARscNJs2VxFUyyW1WPKGkcEpsvEMvFPq4nQKQr3widTDrv56rusGDqF",
  "key4": "5jdNphfxmRXPECHk344HGNxLN3AKtYBJ8dY9RmNAstJWBvYfNXSvLfquyHE7uHNyqAh6FPpsH4cHJQF15U3g6f6J",
  "key5": "2ys5zFqZrqHVd6u6X6FsSjtDaVvGPGrSGrGhBVrJk3qVQR6Xy6wAg7W9KpCwD1EHfizHpABRcS22dE4b5FCyUZsH",
  "key6": "4uuD8Lv2qoLvm8YZNiy95nrp96CVd6SDTywWLW1MG7BhkZmPPFXv3JGoddjSWWxen7ajnycyFKZQXrjMtJU2JrNe",
  "key7": "5vzuqpGNnGnx6Fic4c9x2m4AnKaixo4g8fPzPtXasC5Ms9tQjt8SAiAr7fd1UGCYuhR3bwB9yiLmwVRLGMh1xJBe",
  "key8": "5mbZuk34jUbrQqWrm7cj5nL82Rkgt63VEPJS3raGjpdeAKV6mrHQH6VP43ResMC51VDCyziTTrsCwij9P3ZhwNMa",
  "key9": "4uJR9qDJDE5zjdRP4r3x4yG5aPmjDjX2K2ep6rSqudANqLRGhSZ1GjvtkXw3qVWoRV1LTwkp6F59uddkaeobp4rL",
  "key10": "iqvcbtFFjCPgSmr3cbqAShf8ZbKEdwdsMY4LtnttHrUcn9dgtnEL6ruLko8GNQ9q9EL9CYxThmQYVtRpXfMoHeR",
  "key11": "2LMokmpzfWzam4dev7CPvNuNmXvxAJm8upZpm44irccgYonnR4qrpWFSBvjzYsuzoQCmJbn3d9yGyASaWyWrpqRD",
  "key12": "3rdyhHovjb9CYbDeSvpVWdp2dt2ds6y73wbN7KPRgZQtDNhWYgB6e3hu8Gu4uLNgMt8qdaAtd8cVmnnyL11vu5cN",
  "key13": "42pSA8a4bAEMLZvs3VQRzYdnqxX14QQ5Ln4JJ1pTGKbs86oc3YwmeJJhnAYNBwWyhuWvDwNnyW2NouEfqW26SnBa",
  "key14": "5wXnXEcrJe81vgCZGjtLSAwL2TY1SppzBLh6VgrUbc5ho8NiB7vaPRFTr2jF51kJBx6Wx4AYaLrhmid3vpGAZN3p",
  "key15": "2ndrbVn4UJQNkzKYJuEoW2MrPP6mkzfhRvVwsgBGb8aii3GXBAEgAzEUdUXgZsFMHzDiCK5itugwbTVSs9pvu5fV",
  "key16": "3ogLwm5wKEn6cuoxL3BLrPNLA4JoRg4xFV16q4RQGRUjCxj5SRXaPLnzGy248cRrNkWER3zzfAeUM2tJKk1xrUPF",
  "key17": "64dcpdFm9xazjfWCSxooD4xZbG7YBQAL7RS4FZnE2Vc7dp6gGXFvUMDHieMVgTQkUJhTNxoEqzLZYXt6pKFaHYUM",
  "key18": "5BfK1C6nH9U7XvM2K5uSJePBjaGpkf3ygeK9vAX2hjifi6Cg5k84oMHSAXv7L4kzLL45bpxfDWC5KS5gjE3hAABy",
  "key19": "4AmGZXymxp3WG1rghdxnGssSyptg1gTdr6VfDtUWAvhQMSCzsQ2taqDSAuRpJ7VuAhxznZbC6ToSXiMgGGB8p8Hk",
  "key20": "2mCduVNx4tJK3whK3dgkNXWB8P7f9w34PQBAk7XMRRss7M1F7A6pQAKa4zgitJQifirCoSgeqjUCnU1v4fp69BRV",
  "key21": "tFSkKdV2kE16aBDXY6Udsac3LcisPibULJFNfM73a4mwY8swaBqsek9k6JSVUMWEYUcrEByA3aLoKYBZDMU56wb",
  "key22": "2w4MyzwUiVEaA8HGPhfBLxCyzygAbXgEekX6uaEAeX624KERwJ7BBn1Tvx3yuyHzTitT6vU2792BEcN8nNbAHFku",
  "key23": "PDKsKUz7G1fbMKjWv8VbbtymvMtQRMvZQKsjkU84huvLrNi6LqNZhDN4JWMQ74UkGnCybVFvh3EznfZETfmtsYe",
  "key24": "Dz8hUsRhkn9PfDH9ssXfuc4mn3QAyZgpC6ayrD9X1R2KX9ELGWAm9LvxYheqEV3jzVgnZvDHRxadtvdZpUsYWes",
  "key25": "3SUWtM2G2oajyLEhLYgLJMQ5fC5aDBwgeqnfeNb25s28fsGnxegXbWEhA7io72RLcyUc6WTHjQpL3T7nGZMVQWtg",
  "key26": "3cuieTFpUPjvMSspc59M8ws5uebz7jJa2tTmCh5FjrLaKsgzyQ7cj17iu2iwUJMJNQAWQXEuk4VBzHfqFzBf6NnK",
  "key27": "4UiMPA3VbBLNK7q1pbEXfwWK5aUCTP8zaGDfA2fnsEwqHDrfu641poQwJciBctH4Gjo6F69qfSgKLkE7z2hfN4V2",
  "key28": "2JjrCSjKrGpfxfisq8QvKutEydfLv3f4xt7LtiG4t9tKc9icoE5BYCLZDSPfnCniiBR7nGzikLn9vrLFqkUce1uB",
  "key29": "5QeqPWDs2mcJAk5tQVwFvQa6fBAjoFSJQCA7Zzko54nmcxiuBd7GdjwhA3E7gXYERMtMfsaR5jeK7rv4ke7oLViq",
  "key30": "3vPmD6jzg2p4WDKrq7YcV7d99E3mmDnqAMaTkpnrvCQ19ic5jsE2Zy8BFhHAsF5CaqDN1RupSVX3P3iVSorrrTao",
  "key31": "28ukFEd2ACMq92URuZqv3UPEneCMsoSTJrNpEmCHQ7sHoPqL6qJjK2qUD5BnZpr5Qg2QYBwoacn4AmVsKVR9CxQv",
  "key32": "4YBUPbJ7wT8d2xwAmesiGqgsSuJsv59MELsHzgq6QsojycegyY2bD2ybm3v91vaWCESQGEx7kuTCSoQ4xiWXcnJ9",
  "key33": "bVtG7hmU1ZEDtdBWnzNe5ZokPvrzsT7aa3TEg38CJot4shETV5q3Jxr8Vk4Xrv2jQKYiHwZyMpqLeWjpPVBQjUs",
  "key34": "2SGAMgaQQFuXaVC3Rpfju5LR3HtrvRZxm2mZTwNk9BqVq8fmrjsuvEkV4XeKkVTZ3s1LPbwccWVYqcs5WCqBUPgb",
  "key35": "3YBJjeQSoBGDv61zLr3nLygHfsVE2DMYHybcGK4hNBjs4NnDiTsL8nhZv63Lwv1Bn939EtUjJpQrSLg1euhRBB16",
  "key36": "2ePgnKs2gTWmiX8r4C7Bwt8HuPhM9zBrS8Qoa1DPo5XiS4URiFDemdaDVRi5KLeNvh6dMbmCBafnDK3epieZ3c2U"
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
