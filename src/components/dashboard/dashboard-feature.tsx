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
    "dPnn6QbvaBqFxTNY4ZUX1ThfS5fM4h8u8UTtvwVW8RQR2jJgHXFmpPgra6fTTmdpfyNAdDrRQqrhbg7RjnWVQy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BoZCgbgVMg3exCBot9N6ftRXeGNzx1KeiPbj6WMKQH79UNj4dpLTEPXJVyWdBvp8BJWEf3fQBp1CNZuFXU1887A",
  "key1": "2C8GRXnZJAkQWjzcPxPgwZL24gYcQ5KU6aNSWx5pkuVgqzJUzJRXs39uG8ttJ7PURmmbB4hRSTCSwboPmhkiEySW",
  "key2": "5Cj6C1moTiUo5iSB4ae1cdANeYVs3EssosriPDoyGSN7rTD3f6q1Nw2mZmhGC6TSzN1v5R9noz1WBxT7cDh1RAQG",
  "key3": "xuMf3zp9wrzxS1gFVNKLk6tWQo4Ap2rjpdBR4UBKgza1he2hfE34U571SwJybhK6Zcw9B6FbdS1C44x36hBvo71",
  "key4": "3bv16qm1JkfMPSXhDeKiPXdzu9x1ZAqoNpdFdLPGBDg7moVLj3Ea3GpY65JwhprpMjbLrUBeVVgG4GHBDdF8mfF4",
  "key5": "LmM93yeKUqs8Pwwc441oMHcLM4bFjwiPs8HXZ8TUc4M3Z9tFrpsNNMHZmWy3JtkL6VkmHWJVihfpKPkkTBmdbpT",
  "key6": "4WsMuhaS46sBcn5QUXVfyuj9PHrXhAZBPkAvQJGANCafvnzJkRmnXyPYTFBUFR78LXR6rHJttQrd4QZutAP2wxo9",
  "key7": "3Qs8dPbTCtuYALqXMnRaHEhHE8JPvVKtXfeUooTpnY5rWbXLagPi6cMHDbz8VUsWzUmG3WejRJesLECKTyKoE5Zn",
  "key8": "5yb87pyrVjymXeaY2B6SssChV7Yhd4ZBtg7oozFRxsAv7jAkjviNLcCbfvyvx4CYNUEW3JjTnaptidCMtDzPF1cQ",
  "key9": "doeXbGBojrHKgFkNhe4bqCAGazC5sEs3LigkSUbnajRmA6urjr8micCsAFeq4TBaYHf6FqvBK5tEy1UkNi5Bnrn",
  "key10": "24YjnJELBgtuXLyMoimwxN4FvZmam3wvAzuBJJtEibXd7Cj4RT4V7QjJAmTHC9rBY1oKYhsXMUHpcyouYs7TZJq5",
  "key11": "2FGJAwu1kmmXk4N1BFqns6TazSZbkNmE8eiRcPgi3e9CkE2TyzKtF56FkmT5hYD6Tk2ES7eAhwELYMsmAaDA1gy5",
  "key12": "2caiFdcKVPyAdd9TWFRRqQgUFpSuy3zhdC6a4g5Pq7P2PfHE5kCzwrTzYcNgxjUfTZPivBteofchjrTafRt64xVM",
  "key13": "5JDRY64e5Tx818rU7jNqFXtKZj1aLHm2AnAgyLbAybgg6Xd6LwKd6mGRfNsMjuQMK8JXmi5ksuCP2orGuvSJLKsL",
  "key14": "2Wu6bppSqPQBhHFU81haWfDqxqW1tQHgC8yiyppCaeToXkMhpgzFvdc4u8iqqk5uQQzKew1zoHYDBFsMx2y6dwmK",
  "key15": "2CqMVXJqib4hU7LoAcm5A7hvfYif7ebyt1LY2HM5pfsG6Bd2DiFJEWcmcu6ncqWo4NfvQ4DHb8LZnDqxbvVahYw",
  "key16": "4BXh146PC9qb3eASAZvkTb9fCUXtYW6e8XRBdtWRYQhpRXZhr3XCrMLRoECLoUtmos4W2LNBnEkaLf4K9YJYRg6N",
  "key17": "4bqKSVocpiCf5aNRU3iQrPc3ujJhjcMsgje9aFEGb31ereSZbPdaiLveQunpz4Em8WF3TSdrkv1SyQH1R99J4ZtR",
  "key18": "5BvN9nd6Auboz2VUK95Lbi5ruPmf5DzENsNRkFmymXnuFTyJ9TsJt1dKcGtXuDVPCHDeAWH13Gi3GsFPUTqm7Cjy",
  "key19": "3Xg6Eubqq31YD7yqj7E2BuE82mCzous9dZCotyvBbo81bYC9jLsPHFDke6HSiPgdBBqEen93UaSRR3a1fkNXUM5v",
  "key20": "3NdSCkBxfuER95NTKRn1XvCL7TzsoY8cM9mdRnff3HXSDQx2oSaKntK6nWzVTxgKh99UPrhdmfFWoWNw5aHYHK89",
  "key21": "5TuBvN972ZgDexjq2kYQWPjNwfrMpQpDvkuQDcJTDZfSeWtKH5QMThALL8r24a13ZoRpaBtsNWRzUgqeZDciYqQy",
  "key22": "5cgaAs5wyBM7cLeysDf738P8VDMWEYj1fqJJEZU4KiPxmfeGCwnrEg2HPgrPUTngvM9xcCfU5a6SCCrAPBUttLc6",
  "key23": "M8VCB4RKo1ss1JNx2HWgA5XwLHk3YxPd1UoeZSay1mbRnCBMEjXj2Qjw9PEsSzzhZvELNZuKRbxGTN12YztFDRT",
  "key24": "5uUTYYXoge5xPjKGAaYPYHF7pbpTXuuunH35jLGhbamHbx3EFJEnSiEFLYu62d5iU6qM4kUAS7A67urr1pmakHj1",
  "key25": "3M78LGQpzhPbztZm6U3wK4ybNDjVNMYkPGm6ke22xM86oC5cCpsMY1qBH5CMimWKYRwkEWbbUp21pPsDbcUW4E9h",
  "key26": "3AMtWhBSAieJaqyb2GW3TXEXCyWWB3pDZ4WEbK7t5ieYftGSG57jndJYhLrjpYSsD1aeEphxa7mBVdFCQLuaHWd2",
  "key27": "4a8ML7qzWXzRxD3K1zMQykHBneUSLC7YRxuarYQDKDmnACe2PW28stVZvMDU4wLxWZ7SnYdTg7n6k6ZbLdNrCz7Q",
  "key28": "4RsZEtkGWHnjkP1nJ6jtjyWVrP4raxConswncUjBrA1KuSKW7UUr4Ps1JCaB4u3ujjuudTFQPtVuqqqrXcCLeXMn",
  "key29": "2PKM5oQ7TEAb5E2D36Ljxq86Q3qi8D9eFWNU1rtfWiWwEhbDWLoD9MqbiJ2Bwrj7qCeJPGNqRRDkBSdkACp4TqLH",
  "key30": "3kv4ABnGHbNQeFDhH3LYWoE9SvABWwFvzoD2TAdvGUL8gcn5Enac7nGBdhBjmtjgnkRuiKVf6p9GraMhuGX42ieZ",
  "key31": "3ou7m8jJGtTCFzwLPHBSwkXFWgWiLB7BJetNEvStoiKWWHxPqTzCsNsvuJw7HvnqCEp2j8mK1PHgKNG653PmQez9",
  "key32": "3CppNbqXWdAAsos5WNm4pLS3UEykvU4T2dG2WGuokCa8zP7JHqm6AxBhFrc3cBEWYa1pnYpMpPcCxiXWZtFDssUe",
  "key33": "4Nirpa7b5MZZgmPYt4nZwDpG2CoskGwXf4pUQuoxUE5BDGv7LwC5Ld9NHhLsZkrcVxbvqKj34Nn665NQPpcgLRmG",
  "key34": "rV5BPF2bKtatSoFTgAF788oGLPqCVcBMwz3r2WcNYURfviSeEQGEE9czoCq5UYWzMcYWBvqrkNVNUeAMf23SLdz",
  "key35": "32Y9jjCNTW84e3JkWgjg7SSp9HuXd7CU9Ni8z6uF7gjizbYscJMHaavm2AYCi2aeNT8ad9uxNiSPGf9ob3QGTK4S",
  "key36": "LA7kqdBt6adhYicgyeJxsh4nes2hwwwMSnj1UMNBkkuhyZditeb6v3SkYM1HEBPRPPfa7CGRq2uU1WmSBRmHem6",
  "key37": "2JsVnuxKY9Tufgo5bRck96WL53QAKUzWRTegpuDg2Uv55uEQi3FeGRz9w9nURL5iGBoRkwBAGUCQVb6d7HD73GHG",
  "key38": "3WhyoCYt25taHWcUAvK4A1tPp9rNfQcceRdmc3B8SmsmK4ALkK1TDDdJN2Wev3iQDHEzD5XSkDNmkoSEPDwPMrbd",
  "key39": "41QaY42kG5SAEoQwRqWRYgmRDLeueaNkTBDnxXFW3hAG1opSSHMjYVu3pbHY7yJHGaKfo23ySZjYDDueBpca9tgf",
  "key40": "3mYmL2AFrCZpEZDpNzCxu6x8KKnYn42J2aTMgdnGm2T34fyDyoPCBo3TGZbGG5mt7DiEs2WGryVEiusk5FV33wpm",
  "key41": "5LYbUGdb2kFvAn56s5Y3tmVspeaBVrpEQoKrzB4cTpEshojy5WRhtMSdk4UcLLQRzqNCg1rvG179s5JMP8HBbtph",
  "key42": "3vJKPsVRT7nCZQsn1MSgLvz3WUDKjMVryuDcpZBUpfsKkVegpuc7KseGu7HLG4z28qfWsd8wACQJDJAqxtHFx7xW",
  "key43": "2QFzFibxRoKe4sHV7hGuvcQN66x7J12p57kgouMMreqmNJbGgxmXQUbzWCmyAhZw42PAPcqp6AddR7n2szQUGpEe",
  "key44": "3CdGyGKkMDyDRtNSBCe9v5Q5zBt4oVFNVV2pnBUG54uZcuVjd4FHw5xhCMRCkcFvpVhDDd4RKbFfPPgwV7t297av",
  "key45": "5BiYZGr2k2fX75zZZQwZJLXQPs9BrVXBnoN4YSXZ29jrabg3gBMBpfp8qwybGH2EvzZFvRuF93UXo5XZeVgeNYhf",
  "key46": "3vCUoXQ5BE9wn6hdz5r7kitRCzD8bP9SaXneDieKEKYB4jAq76ccnxM2Md8P6K77oh1JJ2TgqrAFZvBa9ez15RtB",
  "key47": "4s9aNuzwPvxs16GYJixhBZs9gCazToSMFQqoHPUYnXGThpiYQ1cpno8z64kBjorXBiUXaPxSKPW4ZGz1SqBr1T2y",
  "key48": "4xg6hF9aNz4icbNAx3r2ECgGFSaRSCxuKhFBewVezcZGpnJnthVJLMHjdA2GjsLmoeG3uzsUAFStZdee49Sdj9dR",
  "key49": "28mDApSR3i6a1xetXzN8unypN2NqVBDSBM1Qmo4m21iXhmr5o6DLoZLrrVPRTPzn9vGa6MxWdmqNoD2j8u2QxnAV"
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
