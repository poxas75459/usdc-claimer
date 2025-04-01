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
    "pDgMMduuWLnvwqB1kRQ8Wt5fDcruQe8AHnYx7MDKTYhTGSVgN1xEdWd74AKMVEVtjZLKfwojPGE5EFMBHrJhk71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SVx1LqtJCuY8of1YF5KELA9EBz9MWiXaPmWSf5yQrSggFwBrUSKjbfpYwjqM147QU8ahGNrjwSq6NeLYvsKstMc",
  "key1": "3vpH8pC88VeNnpgpwEyw3ftErHRUzCZF1BWo1dbv9v993fDaJsokj3Zoq8ecD51CiTua9P9DMj9nk4YgH8pbzL8Y",
  "key2": "5tmjQXKBhiMiktEGzkPaL8uksGM6vGb9pSi6RKbbpfbYhRnjBjRyUd8KuRXzj449zN84THb9hP7EwJrd5Ed7n2Gp",
  "key3": "3od3hbFoEGHMJFAfgdBFa6w1YGh1EBvUyYNAmK8Aq7gMgTrDmyB7BYKQr855Wka6Grrks8SUY9UaXuankbXEDR1w",
  "key4": "4xLXiWh7jAU7ttZikYoJdjggpnxNr4BBLCryGKhZZbTPMGMsuriKG2LKmY6rvG2dm9L4AARKSWVFgUwk5Me3CcHK",
  "key5": "3icZYuGC1zLMMELTcJscDv32ExdEfRqFkfBfDjCEBYGn3FmZsmC7uJscHnV94hV6NgkmC3DZMTnHoa8R48gPgxdP",
  "key6": "3xi8Jc49GtFTriaXaEpDh7KFutEnMJWaUP2GaWuz5ZFUPqfkYKCrgNZK5KHTKeZkDkfdHukV85TrHtVB2tr1NGRd",
  "key7": "2Lfd3ZMacpGCeCTRfPKfz2YN2qFF85Jhgvzdmi9urZyhm4qdGakgJuHFxjMUPF55WJzDuJcr4QzKTnHwMquzYqWZ",
  "key8": "3RJtP1Sp9ZdV8Wzs2UTiLJP42EQF4C9f9nqe1jPsY5gzV9HxUknEhwrPz9rjFB9oBrV8TGT6YuKzMDabMQjnU5TE",
  "key9": "6mE7oNpkBdzkHCaEaWUKZaMrAJqKs4SH6BqdJN1WNfN5qaPFuBoUbHuMscbyRug9kcruy4D3NxzEHfcjxtGv1rH",
  "key10": "2vxAo7Wp9KdpXrKiTE6YRDRzcUFUCwDr2ZXjCEJvAWPNgoNTxesLJfySMqmCHn7jgZywYhPVHXwAJFrc8LYf752E",
  "key11": "6475EERCnRj5JKW5KzJVP43S6LLYLf1GMx7DU78eAmxNjANG3HMkrna9owJbAVtvf1vPTqNDjejCMZUyhwLAhVi1",
  "key12": "2DQfm1wbH8LpPhUNxFtgksLuaCPdvaJ6Rvwnu6SLaRPBcYo3XeP29csEvPtopT4k52QNtjLJmo97G4EjQ8SYKJk4",
  "key13": "5peMvLw4y9S7ddso1tWQw4TTeGpkoJd2i5SeUNwzGLE9AApiNHBjEsnsTVBcP127gp2ETtXQKwDWQNdtzfKvx3ML",
  "key14": "2w5RECRF4HYLtVRQn2Sqd7mBiUbdVc7sY8k8zQKUfrwN65T7DB76k2zYi3tLWtTJe8WaJ4D1CH1kdDU88AY3cNBC",
  "key15": "5Q9ukhB4U1VDyoNA6uWtnQ9wWwq1soshP8CtFw3QhEoKDqK9zqfvwJNUqRy7J5YocyYtym5NNzPztxZXs5jthXDo",
  "key16": "2qrZSBbz28XpAJbUZJKUsSqNURxcfMBuxaYgYicG3t1uw8QmsfFHJawsRg2qBEHv3NFGSRpofE4453Twd3a3o3o4",
  "key17": "4uWmvm5CfjTNs5qGqLnkB7d2kHV2tiNgjbgXe6MMUQ4jv8Y9zDZ7NesfqqPJixHyCda9Jf1BzYLRsbyvbdthXRMT",
  "key18": "5giq1bnzx4xXPRLoe8WCcWviGf13HGhJdeM6wAHUApSjTGTCsSQPnm8G1Gp1nKz8NeDtjyisqL2pToNHDCA2QKFy",
  "key19": "5wJk1TdHkaFvgKFv1bzq2hh1vYaUJkHb4cDRRJ6D9YyNEfJiRgWPu9aoCS8k5KYzRTpi52PbzMCmwQaAUsh2boTj",
  "key20": "iTG6rb5sKfuRWpMMfeo4cxE8Rb6HUkavYacUZty1ERDRprxkUscupwNscpgSQ6Vk97QCeqhj3QRAvQve3vU1PGU",
  "key21": "4FA174ZpzH7pETcDmAqJrNRAap6JAwTGVnvS194gxyjhJz9SZQYcp4Eya9WSR8ihxRghko4E222vooZBeN23S2mP",
  "key22": "5dVvhrzPmAjERFi9VoCUMMXw3ztxqcJC1dxwVfc414TAh8C9UJdbqm23k8Fp2uu3REV7Ja26748M2rwG2QMwW6RG",
  "key23": "56ZinrznxFyc9xW8M71uoBGmjzMcmgTjMfvkXSaoyCoA4hmetgc3SyrSDMMk473bpiaRDBcWhRgkyU8tSKBELvpA",
  "key24": "3FJ5GgTPPoMRyHyRrqFEkCDACNGHcyVjvx6cXJB9jtHijFkefDEiatL5GPseTf2ptBCS4RRciRPEHES81tacELwd",
  "key25": "23uMyExqwyp7RKVoq44UAcpPHWk6kKPwvq3SSvbfkBhacpyxiNMmbuxECQV3T3g9TmFVRFSCxaRobTPWhcB1P5Az",
  "key26": "4WuHn8CJKPHNdnxqmTujwRiNAp1Yz61mS8mGf1FAmvDRqgWvQpUBHbvNG9sqt8h4yt5SkryKtyPQJSQA6uTn5UpR",
  "key27": "5syfXHYnpZfHS8sUsFJEXph4Ge5LzJANGoowA5cbhfgMZYSoZZBmVCM3VEJnjDcaw25RWyc5Q2jMYaBWVMpQdgK3",
  "key28": "FQakmg3L7zhHcgme39y5A6uytQhZyyAkHM7wWD9GpuMsEoAeTLCC3cAcMVvaGHmBz1uqYX8YM1kjQY2svGxmhPt"
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
