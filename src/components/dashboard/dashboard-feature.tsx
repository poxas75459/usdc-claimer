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
    "2P7VEpv3hZwvogmiTA8tmTuUFW9vXgGQyRsyis3okdNNjC5kaVQY94VUjKYSvR5pZ3AA9n7iVorvmQSjp7oq9WjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nP5bkT7kebwiHmw5CBdmRWGHF8Bs9MJePrQVPDTHZJNAfXZtmH2ax5BnCQrLJRB4D6Qw6CH6c88HnQEPoCF8DGP",
  "key1": "5q3Doa5KavPnE4UCRwM3DnezmUzQV6tcuZQkv8DLmZV6LUDPXwNfxtT9PYBbUUMVDQeibo9tHTC9NSPBkZnGFQPM",
  "key2": "3WUcQB7EME2EfxY6N4eLSUcJotzDCXkF7yMCxLShz2RPgVrGNTDnkJRD5JoBavZvzz7o8fXiyyZ5qotFXuBuWbu7",
  "key3": "23qgRBRbtdwtjN7kxnHd4A5uQWh94UsRfJJCTLAUC75MniW7TeRw3DqZnSez2EUnMQiSfJKN5GbHk4cu9fHmcWcR",
  "key4": "3U2ZcfMDVjdAij3BHNsiBzZBomwPbNiT95nLvxqS1FmeC5C8H8VTU7Er9JJys1f5rfTTvPzGQ8EskfpdbCQAAhw9",
  "key5": "5cwmfyxTEGXKAdckNaMtMHTq3s8H9xfvJWXE9Twk7nkt7QNGydJEC2i4eq82FF3EWemNYaXgzviYeFACLzeniQf",
  "key6": "2ybkfDsPEP6561Yi9c9WgxMZ2mPHeVQvasu22r8WjNsHsJXsu4QAerYAkGKzg96Z2FxmN6iUGQ5YYySnH5qoAmSX",
  "key7": "4tYBj8HMagCaAYZM6zY4qL7xBp6XWmVTnmt2Pab2bbyhC8HPdaBo872C6WjCnGBvaSzwBDjkaCN1tSU53M7az1ho",
  "key8": "3LnGtNcba5L541whnq3fWNawUndfqwZZRhvDHf2YTyCC7ymMN1hUSvx1EKJZiyqd9J4U3azhV7pDKL9iAP4Z9Ru5",
  "key9": "349NzbGySxmEGg5N51ERGAf9dXCqSYdZT3RJcUYRFxep2sfHDb6s8fiBg2YQEUZzKrcXsAayZzEdTq4ahRjoAGfY",
  "key10": "64H5XBzv46yo8htzpcycXZpR8uptqJoHjea54i6kDA4FmvWfmBkGDzaGhSoADfjZTkym8kYb26BEtWVw7R8aLdi7",
  "key11": "2SWp8P2g5uCv7kZ66UysLsZj6hiSQzr781n9jsPN4Har3s5nd3Fetg224wURMZTyXX1LvPM6GCjmGZYcX8EBivdJ",
  "key12": "QXp9hcKA81dRF5spNuRMD52LVxAMmz69yKLweNTr5VpYC1yaLeRSE5HrfBo8eNTYMq8L7By547So3RXUS4AcA4e",
  "key13": "uDGCq5rsPT6VssQQyBiSfSWq2Ap5gGVW4kPkrPuXU2RkecuqVxLcyDtyn3UyaNxpGCWQVeBEfdLNzqic7mCHtkL",
  "key14": "58YVjoyWFPHFCtvdvPaCkNoYDnAHPnbAWyYXntbfCZWNAptwLjirAi1JGj7ZhaCFnbD7Ufs8YyFzxkQHT85kajbP",
  "key15": "2N6UXNTaT3ufSpbEvwFoBQo8jHJyJtULoNG36YmaEJ42XgUL9G2oU5sMhxAsFmifiymG5kquGVzZZxgku4pmynYg",
  "key16": "565ooGMRcwG4dREqV7iQCnV819n2n9ufvaSbwXrMG1sqDTVptNuwRp2YkamN34SzCpgErGzv4j9QA7zE8kCHJFpn",
  "key17": "4NAH5AmZ6nVvCKfq5APfpqp4uTpBhcrafjFMAK4qXaXHq1N1ESB3nPRFfT325v587CgFxRBNH6QP2LZjUfh1VgeD",
  "key18": "4DYcicip8y7L9KXRpT7VkC6ugNFfrsSY2XuyLyXsjQyWtrmRR9BKPmKRZ4vE29BssXfoeSCiV1BGEHJUqeCS8kfi",
  "key19": "32tQYbxWoNycxB6WoL2g98gN9tBCX7i287mq3J6cx1CSXMs3WfZZ1PKNCKmZU6eb16AcsNTrr8vqmZPNDM9mjqAc",
  "key20": "Tw8tfRaZcECHtQKSkMb9mJiKgX8X9ZF3ZQLD5sQrhem7iFfLfprdi9FFExh91Sx7DxMwYxZ9QoDjYbihGmwLNjR",
  "key21": "LQYrN9kWejHnzDGsQrh7QeT4XP9TjeRJzWEQngSGrMp7pFkMLLbUEy4R5kQuLWyHPniABFZZSL4a9eu3BHTK7AJ",
  "key22": "4gcZnJjbKxoddaA3hVvBBhWDfptg9Jc99fgtapCvnNtjmsx15s3coRZWJSDcwL8QiLLAzR1TBMci1AGFH5rhUJiJ",
  "key23": "KbXsJ7R8CYPaX7cjp9MsUwSGRJka9WKrUuogbNwjnKiUV61pjYJte9W359MknsKj4KP7iNpX4LZD9ZyjmnUfCfh",
  "key24": "39aCJs7FrnHv1N3V2HCPxbxgVt5w8pEvLPQHz1MtpVvVr4wfYJsDtUSA18xFXHFiUry9S5iNsvzpZvUrHjPmLHXQ",
  "key25": "2CCHLrpmG4jkcQnNN8ep2LtPwTcidpXqRdc5o1iS5bXFqz1Z6cqUWYBtJqS8QKaRGqwMwqWxpoXoynzLx1zi8VXT",
  "key26": "3hpHVtmuExDn48DSRvkHxpZTAPkgVpfAwTy8TXP8BbXWgqBTdLr2bnZgd9TfvRiCnqnCnqhaum4t8Ze9Nc1aKZQv",
  "key27": "2iLu8SxMyFut3VquW8Xk7b1BJS46asxdQZCokX9rpN6orpPWjH5iZDfE4iES6hTBwWuFg5SQACFqmn4mE98P95aN",
  "key28": "5S5co6Dwz19BVoyaCPHdvS26ButRKPkDPH8jPCPMw9vGzegHRtz7PoMkJbuEz8aSZPV2kxW9vDcwxds5riZxj4cT",
  "key29": "NuBrkWpDk32Fh9AdBW2e86hWRjQuYqaqsJ73dcThb1XsfyqU3Ec47B6dWDGFxYZTE2Aac5PArXF5pDejx2tZSMa",
  "key30": "5AapmejNZbuRShtyNad8UvhDNCFUr1SduKvpLgUiMLQJB4nqHfam9vboH1dcp1n2uE7WoApPFW27PGRKsfdYm7jZ",
  "key31": "3mRjz9xiVgeEEKfy4u7iKb4b52LZNXb3rLNUSFRPoUBU6Dg9gibXPgKD176jHpLKv8Fh2igR7FMg92aMhWSY52bj",
  "key32": "38eK3PdVS2ffiKirEtFm6MKhx6xGSbk8Ndsjut5jU7jydnWbvuB56ThBT9JJ7sBWa2G4qMmZJWbL5mWofjUWV9Cc",
  "key33": "bTmR8z3qjiKeAn835jhqLtmPSokbAh2kisphdD9zWAV4n7oq9ra5w2HracTP53u4HpWx8WB7zwpnKPzzHwM7UKw"
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
