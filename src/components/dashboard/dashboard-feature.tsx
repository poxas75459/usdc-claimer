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
    "2ZErNkvedAbyPrxiU5btLgtNi6sF88HDReXK2GXcGtdwKrwEbxFDxdt2jWutw1wNRRyg2BoGZGWYx8Txj7sRV58j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fUw4VQseg4N69V76kzNi9RbWV4AJhmsXgS6P8VVRL9y9mVFdNox7KH37Ku3dcVk31XL44GQM3xk52NYKHG9iFsw",
  "key1": "31BNMDfTCkKCPAofr4x9nmkveGhzpgZ7vg3dxDjhJHC7jX56Xc8n86zrpbN2LBSEKaVqe7hXwLeTJJ3gpUv2f5Q5",
  "key2": "3ixtpGHapignHoChekSq6tkj5tNdW44usi2aczJP99CyqVZimMpa4XmqDKgztHSWrFSBfiKeQXzQ3U4zrwxmBVxB",
  "key3": "3MdeLF3GzffgvJHcyrNUrPtwYk8QhW6KSNtLR31ewdc3DckH6w6cFW9TgZ6rwkYoMMuVf2JTQM4TWyH5WyBMPUb7",
  "key4": "2QdB4tnapioqwvKTzeodpQiXEH32yuWTbG2dT4RyRjGj8YTNY8hZRtqTZgrfeDsSrUDRdEygMx7v2XNB3DrdBgoR",
  "key5": "64FE2DeZDehykVRayqMs5he5nhSa9QBXcMd9Uju2bkaSV3SLndaNhG5zKkhLYDVabXGKHPGb3Kh6FuYvYMH7yet2",
  "key6": "39wh9iYs1fJDRmmDyLv3YHVX4L8xTcwshxiSTNtLCToeLJCS31tE6mu9jwyceTrGiaYrEnz88Kvp5y1AXyT4eeCp",
  "key7": "5Trum9RJsHAXQZUaLD1PAh1hJYPysjGnKNP29AwevWe7jzEXdP13CprW67M8UNYnHCPDHA19YgxYANDZt7kdyE36",
  "key8": "4BTfDr2u5yeBKemhC2UzLCZpB47Yvq817bLpb4AMEwdNNUcRMypgbBqxz62JYV1XB81XxqTYjYuqCcwh1SbEe5PZ",
  "key9": "553gVzhRpxxKBTfYMRi6VZA853mtw6BjJmfDAW4wrSb91SKg8yVCBkhvHbehDvPxPvxAFEzVmXJEytTXQeMuTGeA",
  "key10": "45LQyuZxgPf7wcx8wiPNXpX92eD9AsnDDjLJNCpA7yxU9bbyogpcJ2WhssFNcUL7DQuJvSRWrFUHq2xw7EchRorv",
  "key11": "57EiZsTpwoWuFqSj7R1mvKRMW29eWJd6VdoPYDRuxzGFdRbYXUySk8RLLgeiemnXPXKiD13DAAuk45gtGR9sXN5",
  "key12": "2VZGWCjqvLxBk2gWnHSnhJgRoEZifYsAkytrZt8Khny54o2Hv97mG5irDn9c2zgiRDjbjarSoYZMbZnMA3cBHw2K",
  "key13": "5zC8EDzSZcR4kscqxZS8AedgUx47txLMnfyG5V3aAva8FTQdukX6hoV31BQAYyVnc1jdRSsu9civXjVFSyEHzUVS",
  "key14": "3QwTJ66W1KdbiMya1Uz3EdzbZHfRTihanoJWcTcJvNi3i49WjgPWbznmP1jUQwTgAxxs5sYqwA2UXUY5UyveqaSe",
  "key15": "n3B8ju8AD6wX8NDsXRrGzUVi5vsNFHcXH4kW7ZDuKBWbnzt447SMv8TCN7qH9owe48mx6NZYYRaJcftzBNurzTv",
  "key16": "3KZVXqJhpB8w1M7TXWUt8JgkFJx7Xv8z82dCVpLMuiw6yPSNk3mib8dQVPiXV7BS8NgzVRsy5vzCV5ACYFgnvJ8f",
  "key17": "3kjaaNfVRkqr443GCdFwichoF2WyHKmVC1ysy56Y1sRcdNpANRfUG8voo6titbcDDNyZX26BjTRbvq5kbJLau1MH",
  "key18": "6PnJFdYYBufnNcS4JmkWj3uj3EZPi3EDExvLJZZN46cKqCFxoxeB76U2XnCsZ3xQ83EQjokFdRcyPxSbA4JKmu9",
  "key19": "3o2E2Gkr4hpqKL4SXa3TYURvNdaXvrZJgVArdmaDgQkLJ2AJu1qCxM8PKRabRzpTFyv2HDeN1s4yYrrEQGwercih",
  "key20": "2xwjxMLNA7TgSVgNDVvSnMUfQGuyY8SBayiBaYkX3ikAyZmzSLSpGjoiVdsbH8VPP8RrKK5DNrg65gcC4XBizaay",
  "key21": "381H77T8cFxUDxNPkxEW7MHtDqmqBPVKQmto9bzShVnAP3perPuGfWPuSudeATqCQPkt9QZVt3hvNoNqzpvEeyNu",
  "key22": "2evTHBScucKVXBL8HbyJR2dTqoWo7EcTqU8Bzvgdb2amvTnuTUxRhcccKCy6gTtnwz3AAVjcVGJJPaEUtbAyMzKe",
  "key23": "3H7D9eAmRkMNCXPvydinR7UQhfaFzvL252LhCgnuiMS2VBzzzWqvmFzWroj5vNCPpP2UwokDqPKbAD5w1NXZtZ5Q",
  "key24": "Gw7vpa61jUpjUoVYWC7XL9AEszzqYVoxwPGDFhuWZ4g5we4XDmqdNT874qi3b3bcvCf9426wkgwbL5Ekrv8D4RN",
  "key25": "2fu5GrMqxir8mmhgx6EYosAFJWsMQ9B7oYtxDYAs5mSqSdNU1t2FxDHxMxnYk6a9y2bK5mNnSWnkc8EwLtyLd1qg",
  "key26": "4HC5JsugWninrLgmKnyj15FFusbWtfu4XCNerEqLhNcy7J255eakeJNeQTm1P32pkzrGPb2vF6KV24ftmX6TdxQZ",
  "key27": "TCAL2UycWn7M6pgRmCoKePR6J1tmi3EQVt1XfSQpg6667tpAccuWAiU7tv88CpVae4hZW6wUFCQPDHK1oQctZKU",
  "key28": "wv22GBEwjHWAjoqwMJkAv9cL9DPjRn9zQFi68L2nFx5uqnic52hnXqBaXGxZqg33zCJqppBHVuFwGFmPN44YVVF",
  "key29": "4yF6ubFZtf7mP1GCv5S1V9ABLHGNLUEPJiJJztqPKUJEZ8C12mRRpcGxiM2YK2yBUMBggpPD96u5oyu4mRmaQGrc",
  "key30": "63pECNzdVR7bPuVeJkJZ897ss2VENCf2x3CtfgS1DHqhk2YrE5PVYAe54jutkqc4Wt2HaSo3C7Wz8ARpYTEjGoK9",
  "key31": "5CFUZh1X7qCvifSiNVdspND1xe1PdaPnRxqSHMK1cZPw4gzdavcCyZ4PYAGuqVTViBuHN7pyMkFNSGmwsLW8Zj2s",
  "key32": "4eVJEFdY3DbWCqNjQQ2hFQGkVrSqMV6s2PE64tMNahvMbWUh8xHcaK6uQJ1Ax1GZSc9XvCidmZYPHw58tzWNyPcd",
  "key33": "611Zn34vhrRrduxrFDR1PGoTRzrDK1pyqutswMoxpW7WttEuCAVPdb81vXnGv9hEHgxQGzmynY16ixqs9eyV1Vxr",
  "key34": "4orRxV8exWAXFmJyBiiSo3FNndvF1zbznKvHEHL3fV5g3XsNCFh7m2p7qEa9tKg1brc1aqasaSBhPtDQUMr7YgZj",
  "key35": "37MbH1WfV6f21ncn9kgnJcz26jSziuWa47oMtbQxBXdSzwbUzDjEQcvmq4efGPhVjy54JxDqqsTcNqSPpQGvAw4m",
  "key36": "5ihMz28hD4LfNAVQFvYfemHReU6gBntFT5ZhooBsGVfsQ5vvRhjHZnY6jHvycPG48jR5ktEagBNidcBg2k16JnGg",
  "key37": "4iFFatg8HEiBKz6RPEV5TbRiChkuTMKHM2ufqBwuoJ7qUQn5TNVveYBeQ29datib49P3x2A5apeTm2th8iN4xF2"
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
