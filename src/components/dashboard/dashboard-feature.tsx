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
    "UK5z34HfYEJ6pnNRPB6Zn5yAHg62uAZCowF5aAwwRnCBwSPkMvSLFXmRPSDJ4aLLXT2PFihMr26aoZEVh9uRqx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JDN5PxwRmki9SBkjFQwBPmHf5tUbEyLntUqKufq2EXgMT2p3YAHMteHWr6bhf6K3aL8Lk9ELEd3ZAfmBrfdXE5Q",
  "key1": "5qAgbij6cgY6jTBNkgHgroWBdsUCobNKBNANqAiaWP9impiW6g7bon9wAMAUALQxo77fKgUWr6kyPHtQBntDhBsB",
  "key2": "3t6Gaf7QF4wtLW26UtiUH8nN5X2cXcwiXDT27BTHd8jj55j4iAwLjGDxgz2n3vxWKqXPeA26dW8e7XXjnSPEpE7o",
  "key3": "4m4pVPzc6tKR4eGd8GMSEaHTPp7JVeKmnFh2hfes5GaBjEKUoQv3C5xdLDLMqNcmJRK1msh92oL33GdGJagf4QjQ",
  "key4": "3BpUkfFg15jVz3mTpQYhCCaQDvnab5Fuo3KmNxTeMGaANRwSw5u3VgL89dPKnqWHhXNgrb9ZJxCECVW2PPsiKuvi",
  "key5": "3kki53yCyYHVDhpETmcKzmTCzCp1jLb3qu1McERC422C1kZkvrmnB9JCsqFMJahxXCTgzFG94766HBzcrB8fESf8",
  "key6": "JKFdLXzen3wSs7obfBsgLErrk8kJyNUsKHUc7WjmcMzebbmfznSUuPDy6sztHtdGysks3GBM3j18PmVWgcSE2VG",
  "key7": "5zj9w6qxSLgm5gGqjsk9Q29NvEHFGjvZM2DBZP6pdiSkV2wr5V3xsPHorGX9n4eygSRuhLgvSsenNbLERYutcnNT",
  "key8": "XQfdM16iohCpJgxHCMwDREQg436zz2uP79kDEDYkmz22SbTxV4w7NTFRoZaqo1sXK1poiXZ9qkoPeWDkjKxMNTn",
  "key9": "DBcr6vkZA6sqv8TeEwNJTKCb9tQCA2RLBjyLcexyaCtC8gwujEpZzSocbChTAQLwjhGo5Y7dNGDynDsoUeU4NKm",
  "key10": "4nrempNvm55zgT9pb1hinszuTC8eXDG6T9VbiDoGdbsZceXgUxTWeA9oNDEyjupWqQU1Lp7BNNEk9fWQ3vVzX1P6",
  "key11": "2TPGoskspnoocdbyiegtt2EfA7xeEeeAo8gfs92hnXGJMpw6gJzCXw9njbeeaKkzk6HoTbrNzdN9K6q9EWKQM6Wv",
  "key12": "4w3E2uQQ5of8rSvSrz1RAgWCpcEaoYq9g9tqa8z5gK9zvY8oRKZfwVEBMFGktdtdKhBmGd23jpcsYQKqdMERkfSN",
  "key13": "4oPXQBBDWGcNKiwek8SRWAbZqHkyy3fU4DqPpUZKmME75f7KPeX1kSJi5yHV96L4Ke4MvpD1BvyttPJvKC1KGma",
  "key14": "5jbi4isZxTSU1TVTcpSEBgFgawaYMJq6662pb7SLadXprgzU6FkWmQ3vYgRRU6QxGGukeBTdvETPBunjU5Ef4wQ3",
  "key15": "3vU6x3eZL15pgpuar8JJ4pa2j9FdCwzKhi6XG6xzu3j68DyR1fnxXmLGsmAieEm4PbXWYiwCHsWuthUy4TWNydRe",
  "key16": "zhdKCoDhnqcwbpREvbmyJRzyn8zu6GvPouJqEmCGDn9r1LDacDKzHpCPGHTUs4Erv6FXDFFWDHqTuusk8i1SyuP",
  "key17": "27Pha9rQKyPYNDKQuBwHRkDqCakCVtswfu14GovK59xGdK5rG5psuuXt4WJRHBiXn2jxKDs14BCaZwkgzjsRbcpD",
  "key18": "xvLoNScFSgrSikwHsvYQLP1bUnoj3BtyQGWWhP8r16k8YyLCbwWLT8Dwa8sMndZEtL2tyQJE9YMJonpk4623gdM",
  "key19": "5UnNvhpv3qYH43RubfGXueqc53ZT5Ty1yVFJBDVeE79DzLDrV19xXqXDQjp4mvFKL65krnSApXRfLYMbNKStr3aE",
  "key20": "4tnccTw2hUZbTsYF5dgA5S9ghE6ZFNdYjczYbXRc2oFqUnizhxGeBq2RiDcLKQq2J2tedHseYSNZE1fK3jYvKNvN",
  "key21": "3DH64MHhmAViyosZj7xizcTKjkWwg55YN9KFw7s1C8dFafab28WcG5gofY9SgnNiaFhaenyhMrqZrZam19YDaAnF",
  "key22": "3Pw8kNaaxueAKv5maNqx2odYWk4yUs8o3AG41xF4vxGrkXtjnkPGYVR2qTy99roAWJ1sNsGbqL5jDuNAMXoAiuKZ",
  "key23": "3s27c8GojGhqyQkZwmwvDTtAaiqaRiNEBnu654oSVTvucmzgtHCKkVcxTTtPkMkB4dzTCTsXKUkZ1h9rx9USi8so",
  "key24": "5j4qDYpJ5EpiHN1wzKWxCei4iub2BY2nBduPS3wHyDCcMqrJyG5wvgxepfkSHGb6iyqejcEzwJJpov4ury8nuGt3",
  "key25": "67X7ygQjjzkpKygB2d6whN8eZWNkvtvVnx1TtUS1fNbSVMTHTMCFKrKwUMqApqfM3kPVqFDQ4fVJw1HeQtK7D65V",
  "key26": "3RpXD1B2Qg3pXTLkFQxZ1SKhAuKcJ6D6nsmvPvFXW7dwePZF7nh1H5Lwhntyg29jjA1Bki2B8T8nD8GzQh3uJCbx"
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
