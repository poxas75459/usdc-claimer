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
    "45JZrWctFemUA5Kh1cgUfas2BeY1PKKEL2VBbkMxf9f13wHhxWBDMgPrhx7cQ9nyBw6e7W5LLNiEAL6WQFnK1gwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wSPdauey2Hg5yEq7yaRMiDyRg1MTDwcrTMENrYmuZegU4DBesCDj92uU6dVdJA2q3Q9CpN1H8HM2uRqtPPdfUUh",
  "key1": "9iEs5aa6FQSS4p4a9hPf9xmSJ2mtmj9pmMUSGuQ7KNPTSPQDaUjreLzEManciTXaZpgJ767wcMpiqdw6qHRbomN",
  "key2": "2mg3ypMLm64nR9hRvd8RG2MWNF1PcCxLTSEAKyXLHpkmAK5Sa8atzwq4P8pBkuh2VnN9gFGw2t1EuD2eN1HHRvc2",
  "key3": "4gWPPr42q3LDSVS8PnHWhcFf4HC2zt2dFCLYfXbVKxP4xwawUaLhFdX4F8Mf6fHEukx9pPaxnTMh6kKskhgY1vdn",
  "key4": "5tkDHSQG3MKcZtTaMSm4pWG2s6jBeaxWaHpyZwmbL1Qz676HBWnUKVe7CG4n7Tm6qBuyzveM2jQAZMsZSUENMSaG",
  "key5": "2tRLGeJoEYYo58HayPdETrsy4YJL3mtwZmSh28iZ3JTXX6UtSd1XrocFG4qqpPiwNX4RZ83Y4mkEBUNSirjpp78V",
  "key6": "2NN76m7fDiPVd9E6AFKuyV4PhWhSv7wRn398rd2jmVm9K5VPgHMy5s6m88hUkK2d3pCmkdGx7qUT4HayvgWpn6iH",
  "key7": "2WdgJQQRyhFVYJPedYdByUdCUxWFFtzrTU3V6Ce6EeXdr4aGagUYST7Ggs61u12E7rzq7ToTiHrbNJWUy3S75Dgr",
  "key8": "36AXdiPGkMNywzRyUeZSY7ScX3JkRYDwBmHY64gBsnD6U4fWSWmBJYcAKFojAxYCV7hmCTFFZf93E8xw6AThkRGs",
  "key9": "64o66qZiBskEysYDXGHEZPJnM7ppz7b2LN5T3nZyyFinqfbxoQvLBs8Rk52BVu4VVzNKVuQQcsmt1yWKHgU58F9p",
  "key10": "2ad8gbupnib8VFvkGj8UFqkJ5DcgBUAR4tYFBaFH8QECUYLVRCSeh3Gy31mG581RhAJ8UoidbxFx21SpCWgEUAvf",
  "key11": "5Lu5bpCwcwEeRR28GnXd1KUheYmharRt2VKUGPHG4kjLjnCbs9qzk1dsizwh3qkUArDKEj2UUrQFN7a5C7zJCjCa",
  "key12": "31VntdzZuA3iwSeDtiMuyaQpWjkoYm2StBDWSJXVQDqYzWGw8NMyhBG1SUNKbNhiiSWJbqo9bLQCZ1eSoqq2hz7s",
  "key13": "4bwXiPMZGSkfaHM3wSotop2FCoxHj8zPEFDsNWmDPTiT9zfqufFnDACyhgYjtrhhEnGkw1scHCh5MpqRrvCmJqNX",
  "key14": "2pEgTHifbmJth1CkZKC9M8bmbHZ11ee6dDQsbBHBMA4hEgoTmvX7UqVGKoNXHMrTYBcwaJmUTRXHgzLiRJVVXTVN",
  "key15": "42pNvkZwVm67y8ZMfJvrWBzRDuyVB9JHQAkfJpAbNt4sRbJdUvmnv3WXzjHHCj1XXrYNhhukSMDxnvMW2ZeoJ7pd",
  "key16": "5PZPfpC8pw3Hgg1E8WAswrewJFgVbq71MUPmnCecf9UHxEzvAqUjNqQQ2RbbUu2TVQfrVwdvxPSHb2CToP2A3HXb",
  "key17": "eLAUXdou2pFqR4BitMHpvktWNVxZsALTyn3jy5GHCYoykc61otHTMzMy3KouQ9DaBAXzxLGviT8jiB5dSMBKsoQ",
  "key18": "ADpTqQUwuSTf65fqHK2RJyYA1f8vMxrrLvcUBxmYJbZzRyhZwCi2hYJrX6FFbZHLS8VYAqK6CVnGpL8iMEFUJux",
  "key19": "4CZnJywQcxezaMV2BbGXm9wKpuZUhGKSYB4yZKFbUM8taaHbXpLSzaeRYimgvsfyZify1f3TvzkuYaZtTt2BM47J",
  "key20": "3v6pNRAQh8uMvugBGLptwiLY467vkVpNfqr4dpRxNgpdmSeLVqNZyCbwuNfcuZ3HG8V1D4SEoUB9auYz5XkPwo4J",
  "key21": "5iqoZ6u19MTCMZZWjvzANC3SxkLBF9nh29RFnZNpdVV8f1nadSCPiqURYgjaGA2pC5U3FkyEyAebFsY9VbZ1ELRW",
  "key22": "3LpV1upwBm7jNgenBY431Fv6fikbggjWCzjMqpYoiEBviPEHMTGushftEiGU9i4FSiguzKSzNdDP5ufZtQK47PMr",
  "key23": "675zXETMXFZEU7FjdCpU3rHRZJVeKgGasppYF2xyGquLX6LxW2UU5MvYdDpyJ45bZugMHiBZonDbZkik2BCk9vVE",
  "key24": "3XhvqSAtgxn2sc72XP6JtisAuagYePW7F8z19p9NxsVMGFTpkmQEh2UZAcb13AGbdxaB5RgSeFpcWvXdJzBUk3gp",
  "key25": "4A51S1NYWxgBY1iG4QFNEdmdM6MHx22C2Q4EEPktsF7VMwju9efeEcgvKXX1Zk2Q79QiUjdBH37KTLG2dG4rAxoH",
  "key26": "5zApWbWqm8Lc5qKbivpf2GRnp9tHb91zD6uocTG5ZfAq7wfrQEyXuRxKuDgW9iCnTrpQfLmqRqAmxa9TnCR2CRjE",
  "key27": "3Hygv1JTXdDBo1eNin2UKP6Umw4EUntn3Mh5JyYXD3uxoySGKPbvWdHftQK47Q6kWw2Vio6cZ98DpEsBDyHH89FK",
  "key28": "5PiPEGi5TdgtMWmRxGycs16YNCL7uCNVGJLKUSnRHGaWgbmbBomqCH822fq3xsW51PRpnfTEDizxxUECFMDxDXND",
  "key29": "2VQtALR6LsbrBe9BzRtZu1HJSz4eSUj3NHmd5jEH4hFxhXpw723fqwzYTWgpmZXw87dCe6ZfKpD8MDuPpAsZY1Fy",
  "key30": "5dWCCzZLc5qsQNAYgLVHa7KjfLRo5EEmMqxDLJQEWU821mhi8o5Ai6mDNk1ZbmsvLZ4JzYfET6r6yTSo1Y41177T",
  "key31": "24HjBGDaEPNbBsKq142WkinN26GH42qPvAMrGnguEsnPDfU9UTeNN9f8RRJmgoA34umySggSUC5eo9dDvWdfAYoW",
  "key32": "33QmJS7d4ynJP4yYGayy3RVwC1y6Q2jh1tiaBCnxJjmFN8pS5TuHhNAMQHrdfhsQjhBcPuibmzkFrxM3p8VtogZ5",
  "key33": "2gEZqUDPdtzP4UipePbhSv6dUA5kkENN7Dno7JpFJWxhdwnA2MZeoguwq7QEsTxEpdSzvBnxKEHdKZzafPAi6vwf",
  "key34": "5w6cqv2TEfHYmuGmueMuhCbu1ab8gZSnxet8BoMyjDBDmwL85cdRRZkKSoyZhZm2UwafFsrh8mm9yiwCw4PrnE7Y",
  "key35": "LphbL3auAVj8zQbuuEaiELPh1R8TKf7cbhe52B6hacgrW83fgCpEfdJXWeYA7NzkeLCCApvmMJQMESSQAhpRNbH",
  "key36": "JdyH7nZULQJqLHPxKZ9yvSQe2mqSWqiua2Rj6bSW4airF64FXjjA4JaUgmUFTgXVLzYHThhQxgzxKyNK1B7Robj",
  "key37": "62fsUVTWbnrJfTY116Y3yE4nGXUr2e4rqJMEAx55xsYpjiws6wvBZUxwyuQ6HTvegMGoPyg7E4TQA4dyTSLKg5L9",
  "key38": "S6UkTt8xLZ9n6hMStc2LqRpUPvVu5utgTtrZrdShaX1wyNbhPFvYQaXwVkzVxPp75RER9zcedhkQox7KH1GKDer",
  "key39": "AM77tHhq4nTssMnLnH2XDKqsEUD7f8z8HWHZmZfeamfMMqBh2hDrsfCbebcamyEDvaJwc3QZWxhBku4RdccXrPn",
  "key40": "zo48w1Yz4EFW6Fk7dLnpcYaexFrs6PanXQhpemeCyAdUcdc5ch3MPAwj3nb7GsmaffAabpFpgNoAnRK3gXit26X",
  "key41": "5LFBseTP9TygkgZYK8wukpft8w2mgifmjqQhiimkwn2fRj6rbyfuHkc5QbMfHfqV5nHPRMhZGwP1S5LrJ4LdF13u",
  "key42": "5EQSSJkwBMXdvc4J2wj8zgi8Akryw9hH55r9gihqzUq2HT6HC5REiJEQXjhnG7hZf85mjfHpgMfY8X8ogn5vSR7K"
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
