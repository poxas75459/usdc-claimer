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
    "2AewvkhxFrjt1usn5Pr62riR69SrpQHSQ8Y1jqQeKBM4zt2119pjWSurEmowrhCpidPzFLtx5Mg14uNQ7pT4qf9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45PHGvm3veb9rkTY11P88Cos9VWXh2BRqMiyqvyf42kc1rx1uA9ZnpY6eMrL32cxJaH1aGnLC7mGqcoZ8V64xsde",
  "key1": "4xtWSbzLyNXPv41rq4N2aomAyLMUcZTHjyUQDV26eV4ZomLn5t47HFnLwvF2PkD2B1LEth7rGxeNsd5t4PZGYRh4",
  "key2": "aDENhPt24CgBSND89QK8D6bX6PiWvn1kNuX1GEZb7btdngPyfoNBUFL752MMy96dp6oDHRicmUwZ3NQrBTBFFTs",
  "key3": "Nd2nuKP93bGyLdTfEP3VfgL2GqPZnjPpqH2fGgWtzMn1LuEKjVAxQAxjHauELinugm9dbzgHPPKkr1AzMXtNtj4",
  "key4": "4oaWjEfuUfvaVtwqBmhSXF9gz5kfhZrTGUCK7kKh72qbrN9n48s735UvNiJpQPbCZnzmU32go64obTKaT5FSf2M1",
  "key5": "2pHLFXGGAjUM4vzvr7VpNUr7kuLdBiP58QqyT9Xww4QsSws92Rj9sdT3kqmgJFupsCUbc3NeqtD4S23FNNnT2BdM",
  "key6": "2x3gVi5SxRKTosb7NmhmTghbSMWkudAYZmYWspZcVmtRYARowFFdYUidvY6QNY9LwZhDwUG4JoyHks2LyGNTsda3",
  "key7": "4J3StfCJmKKM5aC3yd757JxEwg5bia1i7MRq3exk9Ah4Li8vEEMiNnLpxuwtvu4Xjr3euH2AsXxikfe2Gu8X77Dg",
  "key8": "2Qw8HScYtcx5ywk1CfifJmJryWjtfsyCbyWszuiNZ2nAi6pQuVX2EC4Th7SB4ed8uhJm97wJUWZjfRfgapzgcGjF",
  "key9": "7he6moijD6iyvqiyKyxDSxW2RFVFjpoMU4YkpzkGbr4sCXH98nTg2iDfTeUxkibwwMqQYK2dEU265FKFFKodEZD",
  "key10": "5AmpTK4RWV1UfnqqMrZEEHDwepKbwS1zqmG6cGryYgiwfdBKpn4YsbwDdWa6g4GczXE5TkqkbvUPSG2LGjyAkZXU",
  "key11": "4xShtbjWJWs3PhHeCvmj16vfBhjS7DYwCCsbLmy7rfjwQSBeB2kRc1BhedSZU3eYiPgdY6UQa43NznwRBkLjhDU1",
  "key12": "39cpaJZpcn1QMiHEsGrQi6HgojyZLEMGRwbMQz9tFaMAgdvtBR3XSsQaCjfUNhhWPsC2AohGEUxVsYdYGRubTpQN",
  "key13": "4mC6La1RbWrz4kPaMJPLwSKaMp5G5Wimdr1CDPACLFsedCfTu8ob2QzjqajWDPbkZVRD7njbh5keSKBjfhtN6kyF",
  "key14": "f8iqAc6Xqubb2m2FF6XbexrVvZA2bTrbjFr1rcV4gixHtpS8Cb9f6sEdHj6xKJHsBjdcQfCRHF5yprN7M7qs3GY",
  "key15": "4pjQaZgnESbsm4YDxv6Dpb63eGCsZKfve84YmCutWyeB34551Hory1fEAsmbM2E4twqtePdGkcUbp4upfCQHgHgH",
  "key16": "5VV9RScQwVMo8QFvYUTAYa2Sq5qbQ99vm8nzagxuT7niWibPeM9bb3GentcvFwFg9vK8mwwPbGqJGo2zCcVwoV9z",
  "key17": "3t8dygPp9zhHdwYGxPniTqoAUZWBstkyU6VzyUxVQ17gqMEnjK9SihYHPCh7WzXa4e2wcj8JLourM7VPQBGNhifV",
  "key18": "NAz7zi8wK1qeE3tS2cW7sc2SzNGK3jK4sVyqk17AkEaFDMic5WQqr8zZPwi3CsPgqYYKivd3yFji91yAyvtxAqR",
  "key19": "5V28LqXHw6WhHqGRoZTwjyCUKXohpbiw4iufN3mP66J84mGSNgRJKk3hFGkFzUkaWfEis8xnn3BnRDe47tGNLn2s",
  "key20": "5BM47xRiGJwY1EARjQ9KXs54KV7aLVwu1eLuZJ8dXjxiiXH7V4754vrSD8Q9NWEU55Nxk7usMJ5sNkzTdW8kN54P",
  "key21": "2yXNANwLi3TDXqeDVcHaQotyDHCo9mCFAGYda6s6oUNTUoTjaH4ozr9h8rJ8JBUaHaLPcW8VXCiRQv7aoBjk7eJK",
  "key22": "4hesvx85mcBeZqmMGibKBkpWeyebzXNHxpC3wSjGaMHCTJWNc2cSU7tCDdXNtfVSaLvH2NXNPMgv8WQ5DYMN5zkL",
  "key23": "4fzEorA32iZHdnkm6iXCmzwgQUj6TB59GyL3pKH31NBqw3mKaeGaMdY49aDaWBs7wQw7ZLWi4WgnoWUG66meizbq",
  "key24": "qNqXixob9XU5GarJQSTG7VTFEtRZCAxdNsfYHZENqUSqEvndKKrhtZuBV5wSdVQYUd76Ydksq6jSU9nH7dUFYMX",
  "key25": "e5nKB4ZaJgr6VcWu5jNAL4VHsM58bnUPGZgWNZvD1joEUD9aTQ8hdTZaCqi1Uuesvyauaxdn3GSTTHnx2Er3mag",
  "key26": "3hywyH83qEzN4dkZAreLHxtycnSnxjpnybVURjWeKW8QoqGKEqhMsi2ziBuQo5LcSZQEa5JCJ8hgbu3nyZbnnNNT",
  "key27": "3qUpNHHRfnoW1h7LXxwrF7K7c2hrpbhUUNofMv9FacgHeiHBU78aUtGR6U2jittZzBhWF6Wn8KtFr8Qky6f4ivEX",
  "key28": "5N3CQtiXSjRLha3v1awtK49grF1Lewhegoj7nxszYy3FVzJdBh2mztMCcCT8evyxJzRwazM8qzF4wnbDYrnDvk5P",
  "key29": "22tDxCUsjbrPint2M6bMu6nZP6PsJ98EsNfF3ppmYpzjTWTgTJxSuuqeN5GUyC7qTezg9RcYEcrjgGDjBrkkf9Tr",
  "key30": "2AmLk2KjuAaCNZKoyDSYp7pqu6vJNrWGPuwdpV1CyvcKu8pJcA6QAQ914zJUP696mffFN96VCHvSM5DKkWMW6Y85",
  "key31": "3USVrR1wEQqmEuWo4wkcqy8TZeSRkekoP6u9bhPF1kPZqv9DAzRJHN8q3GzbH3gaxXbAivGQ8hSP5kxppCwXKtwH",
  "key32": "q57JE1n1KYSfCuKvQXQUMPtpreYrDookn126eqrAZcvWAjciMBgFXVzHXaP8KCnMCFyXL47o8BJ4GLT3xbBd4SA",
  "key33": "3JpuzwtPfaD4WWi5toEpktwvMPWSSMjbgD6jNeYY8kdu1TKiorTAL5RaXovcYGaykqCUPCAEDovRnAzKtNbJNanb",
  "key34": "4vpRqv22UJ6MU77A9ZDNx6MXGeFF5wuMko86ZkFUxJnLpXHRxXYVPxT9obsewipeECn7u8hNgPPoyVpHk1g8z9N9"
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
