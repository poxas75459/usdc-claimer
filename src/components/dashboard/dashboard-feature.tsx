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
    "XQAWtRK58pecj7QVa2WodfxdFn3M3LNM9QSAoTocjQPyMGLjuDbLoUGj4TZL27aK5hPYhpZPUDYqEEzEVchAULd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yLp6fVobKdrgPGGoEiiY467rfMzazA5vFTsgAqMTn68yJx7CVBref35yQNFdjaZ9pwKuWtjCmR7NaDC8Sd5Xco3",
  "key1": "2cDzKfmkQzNASome763U4nt4BjqhUma4zdobLdz3hiASMFU96Nmwq1wJZ8jiZZKi7k2P7Kq1SMzy4pHXfCzMUisg",
  "key2": "5SERS1DBNcBC8yY4ekyeM5XSCKpf4kevvgiu5bFHnWjhsBNL8yozcF7huiro3RAYCYUB7BosJrgGBgby5KRZ66Nd",
  "key3": "oyMJotUNKsWESbBjHRdRKHByNFmfQuft6aT9Ff8ZGPn8iSy4cW3m5m5e38cQPcvNfB6kqNYf2Lv2TB1t4anKq13",
  "key4": "3w9UnXEndpSWVeKfV5GzEHWy8kGitZZHBqaSvt1vfhzfVEJLFCSKwJBekJP3SML3bvxXf9XUXbmzAUNceQBJptB5",
  "key5": "2YKD3JE1dPn3uNgZQ1dD7Fomu1E72pKmknnyCtNbLvaoowwbHpSnKPUmveWsVdVMnzbVvLV2NYALxT569yL6m2uR",
  "key6": "4fbv7jyU1qYAidcrS71wfkgngfJ1qGxC4ageksXsQ85rpb4TH6ky7DuAVWzXEgVmwNBcNEk9XkvShsLojvLnM1RW",
  "key7": "3aTZ4Ks5bVPF1FMpXa7AT6eaCGJK7VKSa5fcDfD6CvaRYwH1L6GgpgGJHrESKYXEcqE1psUjZ3Nrjk5h6ZkYFTpo",
  "key8": "4hviF5dPdraUqeuLCD6YzQDNtqz1EVBZKjsA8LQeCHn52ECoHDxuhxoVREQN3xx5KkSJZD6Zoo2MfifPN97eHkVV",
  "key9": "632osadYsxjpJZCno2gRFPZhYQHZkktkz2TWBb1VZdPuo66n2vWpEexjXBHwibjSvWxijP9X8qne59a7LmkH257y",
  "key10": "5KUR9j12TVVd7XC6U1kYtHErFcfy54sHYTcM6jBwGc5c6Y9UXVFHk4sTqXfuxLN7R1EpmNdJjxB1dNG5ffL87z4i",
  "key11": "3KYkZkpWnfDgP3paepAp2xdSkoe3PAKWzm5Wmo3fE6eSuKbsLvQVdt7VyM4pF8GuJD9BTSUtoUjzPHKU9DrPJYaz",
  "key12": "ecBsh4D1yrCCGn2MdHSLnuq3kqzXCC2hSdoGBBJv4aqRFU5svY4FkGKugYp27sw9f8qgxQgj13EgUbJHof2KgVu",
  "key13": "3U4BFRcqzHMNuHsfNHAH6BhFDVRz2KWM7MvmLx3HwBP9XMvyue794CxhJ9vgLkrJQeD8QQVDDhJUBQSwMxAUA9Ns",
  "key14": "22RB7MpnR2dtf4MnxY7DLwACGRH58k5PXNbWtGtVZtNF3FdbAV6abqLnKUBqZt9tznxoCJUJEPH4ftk1cBBHxqoo",
  "key15": "3T8iRameppt47jSKjKbeRwd66AoXqWVBbqHcEhXiLefTEJ6LvSyVD9gthJqYSnE19VBW5YcpFVfof5BiofeHubAN",
  "key16": "Usc5zEi9nJNDrN8mB3788Q2q2VqJjtMpL9aQBvGFcxuCnXqfPF59LSjAtiUjQTDwYtZX1SKnqaQVwX1aCJGQscw",
  "key17": "vud5MtARW5JiZXratrkaJzve2KvuQSEvdPY8ESk1X9sAs7ADgdSM7wYLypxYx5yLss93PgxShYkcvW9kVsJN2dk",
  "key18": "52B3aQEh8vFPGsuSf5uZUAu9P1vSm9TLgFaaRtSouGEkEp9vrn2q79n2qGjh6jBcMutPEDGReu2m9ixCh7aZwNnQ",
  "key19": "4Eb5easN2QEzwkwgAbyiYTqe3ikxHH1h5AVkGiaHyqbXsToAq1U8dectkFsPmRR5dFSdGPLDV3f57QBV3pKdDc8Z",
  "key20": "5BavAQ15viUenMPn1PJwckBaEsFu8mnVWWTW8EzeK73qaeXB9uHJUmZrt9M5ufA2XXSkkzDaM8HLVDCTAGqBhg6o",
  "key21": "2tQu31eCjznMUmfFYUXWdU6NGitoJoysj4GuQyk5iQKuGg2xn2gV8WuSwMZEwMCwPuVH1vHxdHonP8PRRcm9oW5b",
  "key22": "4EjzxtAxrr1yYuaPa9fyvCwd7Eo7cTLKwQSv9Ck7yVL3A9PfAjMKJhjcmkgMP133mpyRyWsvpiinahSkmU2g1FDc",
  "key23": "MwB1pmpA6qQM24q6MgLgGujuLKsD5jd2wDJnYtcoxCa3pX6dJVdy2Rqc8TXYi1CyrGwKrbLEv2BXLSJDF89p5KS",
  "key24": "21BoMRvuzfGFnMipKqb6sqAzns8ggVFPPRVY8VRbbohpHLJPAyw4HWUi8YjPFMvDzUk6zo8dYrzfAHEVCmFPNEf9",
  "key25": "3xk8bVRXU8RES4vywx7F5Ww5Vgpo7djHH8Vkn4JiNYwCwhn6cjdmi3L2FXvuirFwDXmBpEBDthKMC5w5F8E6kc2R",
  "key26": "3UUfPU2ZM37ngjkinPMCiFL1bgVHXqZRyartnHkiGPjorHZZF5m9nbgdZrMRasSbLxn3jLyoNP1AGTAWWT6RZaU8",
  "key27": "63t9RHQPWXLvyX4r4tj53X8zfBCibUmctRAqzaaUPrjLuwzNjzfzCY3gc1pmiMdwgTqn2fCQZWL1FdEp2vYZYucQ",
  "key28": "4H54ER8nwHP7ynKvEodMEwUJya2rNnJvMCcf1oTyqqATmPS29Ez4joNxuAT4DzoMSyrCseHdQKViNwVDZT1q9bsm",
  "key29": "m5htMitjm1imMcWpigUiV2s9Hbc6dXQ6ip3pBJ85YFkEpNr475bsjZi8hCmsKiWJEqUrFFrzZ8MMVUBrZqvPVs2",
  "key30": "3AXznBsmbMJEKZrNQQapWV8NAQnKsYJThFxFC2vZig1Z5ggbXAdfpaQehMu854H64Gpm2QECpiEu7QLBqMwZGA9E",
  "key31": "SmNgnmY3nLEoMJEiRo1pj4aZJmkp9krvFFixUVGZayfXXqF2FL6PrgcHNCCvpZtxizhZm7WsA3tuqdvXSaNh7p9",
  "key32": "AVvANCfJz1jpDc6WK2YLPcrhJJx7EQuWv1hNvKK5qxiCrhuU7a8LRevVc2qJyzBYW1kgJHqB5ejZYcS6X5JenPQ",
  "key33": "39r4q7QQtsRgU2BSKzBzSxLahnoQhbtieSf5vQJaFojAMZV3gFCHVotdB1KDQ1Bt6JEZDmZQEu62RbBKQ6gDqoin",
  "key34": "5LUt7hq1rFV8BWTV5bjutfymkmJRMv1ktTZmwxqr5VHoU9r4aWf5Lendx3hQbANFx7r7DM3E5RFkJNJAsuYmZ4AW",
  "key35": "2jRX8U1854GWU7gq4va2kRXKmVUERZSBy1pdV9jhDnWmdRnYen7DhBYLcCzg7j1HGpom3TGYLyouYJdeoWE3xfJe",
  "key36": "3KZeLamseuq6YtUhVMtVxF9wjCKKmF4CMJ5gxkurZsJyQba4VXickZXxsBsHmMugCXtittnxeg9L7EqEY1JrHLSq",
  "key37": "RoK7QrUjBdkC9e4bZrGc1ihwCDmFkWLz8heZCzXYMD89FCfdPPfRJnJQCauHgbvC6Cey25W5NjDvjhDRZHhZoDr",
  "key38": "238pfwvHYfCQonamHBEH5QZqgD811N1H95RDvpGG1BSLvp1XCRLZVnE6y5BW4qF12HU5GRtgNyZ4q7zJc2F8TqjB"
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
