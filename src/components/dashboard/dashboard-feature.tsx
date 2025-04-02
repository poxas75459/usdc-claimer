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
    "5tjguPR8f3oP9adQWZwdqEn8gMVvcqoHC9VuNghYWSpngb4vwSjKiX4qL7sWufaTDCJ8KJygFi9DMAKP2Ke5TtAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TBDJcFrg3vUMbKiNcLwGcPttAqr1GrVEKbremyD7oDRuhubNcwhNJM1Eqf96zKjTKtwASvo9rCFcqjs9jqnMeUW",
  "key1": "8rzVqjmzG7G1qDMEhhgL6ZSqT9Rm6oeRb7R9qcRZDbpF17CaQh328SLbRLMNUM9PfriUsHQKErgsqQzm46Fpzff",
  "key2": "VY6Gd9DdTNe7GJiqvisjDPuvxx5Y82TtHmEEkxH7J6WNrJT9fwmYPXS2KrUFkdn8YRcm9FSq3e41hFhi8wLXky1",
  "key3": "2N2R4iG4No9ED1U3RMBNib7G3XYPihroRRHsuetGSWVY3VPPWcrPCjLbHhVStfoa8RCYMrZzPDjBMYPkuPYb6KNn",
  "key4": "59fW9BBvEbTV7386bWokFK8WSW7r2AUgSxRFoaU8RgwD1xX4AjkrZoWLa4KMvqFEF6EZizjmsJKVs7q2qnEmfZcC",
  "key5": "4Xtdn3vMJwqccrJPFutq1XNHX9MWLPejfM9BPCYWxgsytABmMSXqqxNP8iQEj9A2Rt8o9HmqquMvohwETJRCLm8c",
  "key6": "YjNHmaEvSHsfwriwTqueiTNScm5xQbRPs3cdZjGoeTR811GTANHJNn1bMS4sZoBs42QVvN7BP4x6YCLZYQKc41R",
  "key7": "234n8fndcBekmSu2fUwKd78jxVKm7eMnc5RfdbxvCnJiy3X79bkma18wtnyAvCnK6orEpwrytn2oLaYNXUbXYgps",
  "key8": "4p9je4x3xsjtpDJLbRYMe1U1htoi2dxjwjUzQdCrLq32LsMAuZf2ZMrerrREMGSMn7PXBxNno68wjbcynktqukZo",
  "key9": "3k1Z2Vqd5NN2aeTX9ChNbDFeW5SsFtfsFhEhkhsG2aWbLuV6XopRqG6gMpj6qxUKoVgAJZm2gc2EVhMgLsyw6Phb",
  "key10": "5JZ4QkgPTWeCWZMSPE2FJ9MwdwCN4MGziJUHkfs2Lew5nrxp15NmW1nMLtgsUmq4wXEfrucvfqHQuNPdwBmSXkTS",
  "key11": "2s4DEFwgdV6M8anGpjL6mCGmDsHzG7cgx87QZD4sb3EZZxyex5XTWGiAERZkHMFCTveuZY5b816qJUMpNk4Kr8rY",
  "key12": "26zxMT8Bm9sW4TDtFeUDVXvtuKwaHeHfaDUcm6CUAC5VVB8uKcoUM7U4Q8FdtjhqmXPdwkQP71M9jrcD7Xfzd7xH",
  "key13": "2zNDdmbc81tqTMAXu5uu5NY9eVV5kR6rLw2W6DkW89DPrPv2zAW3EajELNS8a1aZYqYWkM3hnqbMvAuVBrr31b5u",
  "key14": "2ma5qpcGFfjnj9PVPtG6anBVJcq38n8R79SSVBbPK6LXjwzXSv2mYnsNBSM73Dt9s6zKvXvNRW9euZ2Y3CwFDkwk",
  "key15": "3Hn2BKRQvAB5BVBdGzstEfLWrPysEwyzwUcEC18T6qVyEu4rGzGpMvih94z73HCSxWqH5Pbg8eSPevBkvYZhpjB",
  "key16": "3bPYqk1EA4S7mWXGFajbXa8MZgbfMPAi7S2mg3YQjTSZ5Y5KnyGYvhYJp5AHkKbSmHaPySf292zodksWMVZYxBUR",
  "key17": "2mzfKj4jmJd7JaKQoeD8Lkc5BdM2oTMd9QiVB8sd3Gj6reRRed6eMqF8j4WigXN7Yn2oTL6J253Q7WHtxocVnRC9",
  "key18": "4gxnvAvzvH8EofVMMVQTmyX2tkujucfh2msSop2Ar1AuYZHiWzjPozst9xg7BHc2GyAvq33ATGm3CQPdRExQewq5",
  "key19": "678xFR4SwjT36eMnyhtESZXijsP8mevAhUvvxv2ez4DFAZ645zSsyJRqM5xD5XV3k9c6ZdJ2Hc2yY3Hea4rRagtq",
  "key20": "2JJHLQMc9Br9YkyKoYbYFq2nCJDSEJNr1421D2H9VFLeQ3kXKb63w8hYLgGDkKSjvf9q7rZEw8scUvRNma56tWnu",
  "key21": "2oTC1Gyiz7FsMn4DjgRGaLRUZpumKg15VhNRc9tU8KH4ykaktvbS4P8EtKZ297FiU4nT8bbo6yFHJgJvh7Zny9zq",
  "key22": "2freeqeRFJi9NPrTUdHzpkSUc13H1XQUSWdSzzkZs8daYiv52mdxHjhwx95LhKnvEU22nePcCak1wGYFFyPQLbhv",
  "key23": "2mqdJzK12GA1wpnuts8ou33RpGk8mpPFkdwtXZjaKgRLFRw9aM1dSypTYNxbQyy8TRY9b5Y2SwVrBXAb9e4aqUrH",
  "key24": "UALKuKJz8aTFRk3k1RRgKZVTRjou6uzGvQ5UqUzjUD3KcqFm9q3xqEv6jRGAwoHLejx2nMfgXnyB8ko3uLxXmS1",
  "key25": "4ZJwp27j4gH2kJTZVowhvdwBqbwpeeWeZp9PMmH7Y5fV4CeeaweoLdW9y8wUfCGNgnhpoPpAYN7KQHC9maK7spZ6",
  "key26": "3ZHUnP7wywpEGTCW7UWTt5Ym9Szbb3sM7rSEng7Ros14hiwPgwqV4tLSGZKo47ZTQuKZ5GWMpSy49MYob9QSC73a",
  "key27": "4QL1ckWnhFEfiYGVuZGVXrLfoxdgqKgYcbh1vsKLMZuy8gGGcint3MvRVsgxtqYkACRvwuGaMvteyqDu385vTxxn",
  "key28": "35Fk4Z82woyTAr15VGCnfYaqERs1FPWq8erCRfiq1oRktbSEnNHRcS1uR44CVwNL6vb3Lxh9o2rVmLSaC9ofexDQ",
  "key29": "Fd2PJNKF6GfDDJ2bUcukc6fRSrMi4hW3D2K4wXBGprEvpLTSdg5QFrYyHfXqL4eRT2iwERRBoMy78L1e5dtG4Yq",
  "key30": "5Wog3N4vyKtGLwox4xCtMPCHkeHWP5Coe1aTZLzUKwWtq1V2QV9aD4qX9oq2c94FXzWFP7U2SMAecuTxVFQiMQkP",
  "key31": "3uTEo3a12rFadBowtHNAC5i8PzVdWZ8MRVRwz4XZuq1EL7x33yNt2aBr5STWbSKPdL3XzJYJu88Bg1HzeZpffCVT",
  "key32": "5FCDMHLHRbp1isZ5VKwB2tM79K3LbcW4NcP47GdZJDiuD4mVepJAYo4DK5PPFMXZDRpvm8G1H5MNZMB9HTbJPUaj",
  "key33": "55R1G8rBsvcGnNNiX3HGfE93de1Pj4f7psjLUUjDg1vBtvLyVVZTdiVQTsYa9vJszNkzZqcf9MdqxEhtB8fJSBXF",
  "key34": "2X8AXz7sbeMm17joyjaosXxm1FdSN4ThzfS7tsbxS76qY6sADfmFMTv7jJDUJ4mMCnsJUzSd1h6Di5uirdL3zzAG",
  "key35": "52WbdA4MCvTdBFqoBKUTmJPdMpcHp9rhV2Z8E3GoTJmXnhQq8Vntd6zVfU3nj9LQXw734RiU9w4ib7wLtA9hguBA",
  "key36": "2nV5ErG4LkxJDy3MBrV8SNvWXaMjqMU7CHbYkmQX5JHRDpuxiLu4dTbws6Y4xrZTKGs6GH6hy4RdkvJpZtFYoegd",
  "key37": "5rNhnxjZ3DrjCoC1bz74UBksjWHm4KAFhKDhbzUig24X4dx2VAe7H3Ac9H7MEbkYLs1cJsBaUboGrbTrpNB3SSZw",
  "key38": "2p5ctSaVMkVo2kgeMkaWLPDag9UBGeDNeiMzHd2TFKZamWRZFZUYsHHWSMs6EoyFcgTe5hiVTGdFcKMxkQ1Es3rh",
  "key39": "64Bf8cq468FiKZm8R5h2Qpv6K5TsvNkvEDAi87PWxuJfi8d9tJ8U4285ez96j6o62UPPftDkrDDSRrMf55sY7qEZ",
  "key40": "4bZTWkRZTQmVod6yXRrnYGaDnh4JK1RhZednvp95U6kHe2PFJ7yhGWTJwDWQP2zkZGhgVvEVV75cjWNPSbJTbGPY",
  "key41": "5WitFn6oFJRS29BWVqZSV3WbpKrj6cS5u4WHBEBRtVSVyEbxKoKgLvJsygYxtBrGUhFLHC7nxWPjJvrEHP3rY4ne",
  "key42": "5dAcyEZbbUxXsimdDUtmC6zrRrJyBjLkkaWiGH5Sqgceh5iPTe5r7o7i1uigvANx5iRDQbbC94d3g85YpaCtLGj1"
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
