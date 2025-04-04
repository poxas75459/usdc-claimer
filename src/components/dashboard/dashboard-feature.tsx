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
    "sNPiwGvKdxs6m7HMLWStsmsJLTMpopAqEuxjCPYU73Gv38tnvW7hVWHhchgvbRE76UtT3xNB92JZqhynMQT1qZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gkq1CYqEuBVpq9xAr1uqc6u6F6X2Mr1pXY2NeRenWgqqTMuYnCgDnJxxr7cbtX3h7DMdV1MBxmdtVgPNVxNSS8g",
  "key1": "5HqMoxE3VsN6i6AP2rWEqbn5DcVrASVwjf5wFn8RveRraMk1f8RjpeCFNLpbUbwt6SZ4AC6Q85DQgfjhuhLwDFXs",
  "key2": "2N8bWSsiECeKrnHvDPAjSzhpb1bnQkH9nkdWwH6Vr5qp5wVzQh2XFzpraST45sW7XNz59imoyMPLeMuCAdCzhfgK",
  "key3": "24S75TnoHT6ext717FpBmV9yspLpZmq7siari5XFWBffKepYgbPZJ486pPGiRPxHz1Fzu7ANTLGsWFKaQybpveFa",
  "key4": "3SyEosrjSug8UXN8U6ypjkW4ipcEvh3awBxt85pMhnUYH73SVWnxdNFNcCibeTsgNBuHEzVrqXgaEmQRQKzUNe6S",
  "key5": "w5gYN6dNtpEaJQNJwtJg4NfDHVjXDTxawjRXRam8Vm8SVqAT5VUdwML85kfC9fSsJdYSqLw8SQPLfqEMrLQiP12",
  "key6": "3hneczFRjxJ9Ls65LnNsj6bP9D6kw42fLcAgDCqXeWhRQ8VokofW6WApDNfdNxVFLz5Ww2UrEGQvqXUUJWJGbgv1",
  "key7": "YDCho6djNwDBMQSvcpoZaKawKLuiZp6dG1g2dncip1NMMzd9HAWncLmqu2bpQmNwM8YVZLftmkqxDso7ZGcNVdk",
  "key8": "4B3n8GUfxCWzPB41cr5GAN5NfuYzC7tn61VAqe3KHPtakfgMkLTGpdM8FSgohjdmBr6SZ8URWyJDZ1YBf2poFpDv",
  "key9": "vawd8m4JvgnShd9iKuaSGiMfdEEt841TSnfffRbvmgypLfRM2cCAVRgWySytBPxnxhAd5vFVQ4U8yYNtmab97Uy",
  "key10": "5QmXJZasMiuRSYAnmQX8Yjq4BmEiFLsUGhxBnyr9fzQgvRj3kSwUgRvdmJDrv9snkbEwLQNMSN1nLryHzyYrDJei",
  "key11": "2w6zozHeFCoUM7zNNCUDrnshFvKay3VcZLEZGrPMTPfrg6yUDQShNPzb814h7PBvJ2VCjfkHD8aQvKcZbnfM5bzu",
  "key12": "45xRDKNRaKyG3QiP8Wkw3V93vS94eLimW8tjpuk1RAb1Esxanue8Yosv1jcTssNJrvQ4RUa33X23P6SHQPNKswNh",
  "key13": "4czebkoinKDuGVBEZf8TLA1YDAkeCEmuB32UczXs9Wrndh77ckpph2qHeEMA6mxRp7tzXP6m2F58sB3feeNH99Go",
  "key14": "2hE9gLje7qurU3Ek2qkJ5ZuW1qeLCG9fsYkX4GBcUvwCpkxVLkcYA9GgFX5CYJW4X6f14ZZvcLW5Y1EtqFBVcbcZ",
  "key15": "5Mik24y9CbQ4ASLkoxWoH47pWQenfxhQUdavhvQwAZ216LuSuxczT1jyU49bMXRTnkroW31iprD84db4D9cZD4Ta",
  "key16": "32sgySTLTy7B687xWBGTcFqjEx3NvpiDSUT8kRC2Ht5FegkbRaATx8bMBamMCEqdh8YrMQxJweeU7bXFb5Uqpbhj",
  "key17": "34iKnxafd1ovep8ta8xjKD87bGdm3X93kaLUXghmi9bHSfoSgoRgJM63rcimeRHi3hVGeiyZxsgcNfkxK7nNQfey",
  "key18": "FjpDCo4phBe1MkYYvehdeUtQufRaf2kTdW5JdNmfVcVd2NA9HKaA19E5hTBHY1V9PzimbdKaczmpckRwzHoVgWK",
  "key19": "3KTDRwUMzcDwr4qb8i9EAvKg8bq46sHocdDoA9Vmkuagect3NcfooLqomE8brn6LCSmvLHCxEukhogvmbeuyHUGz",
  "key20": "5pru8VnJpNxTPsC7gy1HXjtq74HzvA3i6Em6DLvimrU2ntXZaKnr6QSZfP5aWvnGHMXY2KcFbf5csaG8dse1Zyha",
  "key21": "4LK86HKfEW1HbvwtXpw4URvnWh1vHfcdjgtzy7mGpBk2ZujT5TCwRarFKpvmAjzNVMdaPz5JzCABvgQhB6T28CyR",
  "key22": "2c8xGNtuDXNGBytwVgaoEqXMcbHQYZa5XVDV1NqpKGaHUqfutTAViFZVJc7sSh6p33Kai3789f9Qt8uXiYo6iLxh",
  "key23": "CmjeA8JD4nFmDvr8J2jk1WEaXEPpQwtGJSCgfzDrtFuXUGh7HBveLkcArZZvbyNRLdbhjQgkcAHXjF4nSirhido",
  "key24": "2FHcQzwnTu5bchRmCJmzrpNtUTxT7upAXERds1N9zDooJfB34taP7vRxTrTJfPzukrEQyA1WNNJ5CDzXhMxjtw8G",
  "key25": "jRWPp1TkMM9X4AYdHZ47RqRVKdJKXLAyvA7Rc5RBarRbdfCQGfeBjSVvLaB3LbXAasPoc9FSYTch5WrqxZ7qLea",
  "key26": "2n7DiKFvXVTAqDz2Rriv2gRoTe7Q8gp1PFLyMcuKARz7jPdYovxGjzdF6UoeqwhSW175js8BtXGZkUjcFBUXM4VS",
  "key27": "2Zuo8tU5aKkemiW3LEXBDQniZbfuBE3ePv7DBXj4eBxD4qVUeF3tAY2K8nqhjAF4bF4uX16LYZzn4A5pRzEAMNJL",
  "key28": "4rwprR85hYgwJFjspWgG4B6iChMExmMfueVPQobzHNAF65NbQNzTSZBSnfNdhLyEwkE8yvaR48kdbU4FnQUauvvg",
  "key29": "2MmgekDsPSM7FjcZGQLNexycQKgFHBVfaNdpHKH9TgyASFcXeUkV9KNByzGDN6cKDT3Yq7ysMzEjWbn9xkf3vowK",
  "key30": "3EWQb44LRWTYzUAefPZJcRpGboDn5toUajzuhNJMAC6CCSuQDWRR68BVv98BnwBp34Ys5yJzHULBLhan4AmfBLJr",
  "key31": "31uQRYb9beEHSKgyzsQMMhb6LqJE2S5NPFy3ECTWPdsVvVAGRhbjSVUisaZK7zZ9q8Fr4Tzmdmj46yXPG8HTCxZ",
  "key32": "5kQBXjPSKnLsTHM3RskoJU1Mj41kSRJs3GnhyGVVwESCpYYdM2kTUh8Lor1eQNSLteo51ZeJQtdGydsAykS1JCgN",
  "key33": "4iPriJycEzbZAD6gAFmnhrvXH84BqdiohMx6AGs7jg27FaQKDRghK6rkT116fLVLkKusRm83T2YXuf5MchANSJgw",
  "key34": "3fK8UX2FnTicciwqUNhTKxFLeqUmr56GXgWSoZBeBndgcFmiYs44sgpfUTL8qEzVaBWJd9SedwjDKds93PaQb4v",
  "key35": "3xoKkHdt1NdgY18iVobuLN7yAivVREiJXGAgoc5t39f6u1rszL7rgVnjWbnjoWyjASZg1MXke3LZVpUiprAxNk7a",
  "key36": "4tZTNrnj9yiZykKom6PJZCr2tLUASVQGNc5sidvySHGGJ8BCn7Ckan9YdeHBg4XbhKw9L4z9CWgo84c3M5ySbgQi",
  "key37": "5TBrpCjxfemd3Y8cmvsHVrMKpArvbbKBDspuCWUWg6DPvqzdJSw33JvczHtVsbezomh5hHKXrniNvDzcPiqLgovG"
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
