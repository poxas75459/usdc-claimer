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
    "WLnKNhbyApCb3G6W3v327MeR8jsj5oFL5mtoTjdNiM1DzJoWgX1uh6D6NN98yfCaoUMjvnhq8L3sPqrzFhBjt2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S7Af8GmG1Kt6a669DKrbDH3Kqg5oBUhe17DiMqsgFr1dw6DapymBFuhBEwBMuEXSGch3FWfnGRafig3kGndPVba",
  "key1": "kDXjmxAAWLLDKDoakgbB1ZCEM1PU4XxqWfDM1ZfvY2QnmNnpEZ9NM3ByhGCe2e62s8xrCQKXbyGmD9F6tBk942p",
  "key2": "2UmRYBaimu4Z5fvPyCuXBcde9E1rNmudUmKp1AsndkevrAuEJs8qmJ4w27sXw6WDAKGSinimdBfSTs66Hwnk25zs",
  "key3": "wfXWqYPSJG4JW7e7nYY3YLiWTwmQP3DXpdpnMipa1iiXeGGF7HWin46TTrsg9FrGesh5kSVGHaTDXLFE9Psxz7p",
  "key4": "3T8cv8F8xWM3N16pi7GcHB11SgawfCtKVPwnntpvGeVrz1GB7BtJ3cuqTyFVqYESema2CHsQGpmSKSoXD3E2dDFZ",
  "key5": "3bc7HrKZYsW3EAES1cm583ZuWfVZ2dzT3kRD7tTKVNTAtaXH5ecwFqyE5q2HwKv2gJtvm5cNUGVmJ8cWszii39Wg",
  "key6": "2eaR2ALQpzEqpwbZ5tBs4HbYyaMFXfTHGUMJMtcaAwHepGDgbuMoo98uTMd9jG1okrKEepjjwFdHog1cpPiSpvEU",
  "key7": "3Yjxp2zi5TEQfy62Jbb2KKYgVsq4wMRk43nuzYdcntHu8i3xniAayu4smRix7wJ2GjoG53fxWtU9Tb9GHomE8zzF",
  "key8": "XmAHaMPhfffnBSaFzHLkpZy2VfzfPzL4bHnnpEosBEFAPjN8tdXjnyTEKNvnYXsbJ5riiv8Jh6wMDXgLaFR8rjy",
  "key9": "65gncmmy2NNBoBDPJCpQ5MTS4KFJe343YVaDnpjKDzuv9EMZLFCz7saySwW9YUTccmJqLL1ttWgQ86kQmvKEVp1i",
  "key10": "3H3AgPtcFJ2deECCYUegqeWAKSBFmiFipCeXwDsJXDALF2KdiLF4sY1Rgoq8VquaaTXu8iMSTvxuN28rbEFMeLKh",
  "key11": "23FVNxXyqJ1rWvxUVi9dy8MxupPFdVYi6utZrVyi84wr6LWmeNqFCCQrXPkbxbopmu8sUyTPezvkT4ivRgnzN7Cx",
  "key12": "Nw5Dd9PjFfibg3An5Hr18zguwcL52CxJJfrn5ybxU7nj5eX6roMyp9jbLBcWbR1738nFrmy46PEDH87Nsof2Mv2",
  "key13": "5fhaRVoDGJHs4XNuEGtUdJ7mBMyiXnsZhvRgiKhLnaK659Z75esgEokGWMbGzYuN6EUv5zdPPT2ogv9VLxZdQJ8e",
  "key14": "34xbxfNxpfnw4dvvBHSbJoBtszpv9fAVVVRiFV1QjjQXrPjzhgiD8hfQhH8Hq49v7kgmarZ3iTQFB7V5k4KjAkp",
  "key15": "mx5NZ3S2LauX2Zw1igF82m8siEtyK14PrjxpxbK7dPr5HWVpGTJwt9bRvyhyGBxNde7MDkcbzg165yaAzG5erCT",
  "key16": "2MK7TWrZvpQVxzAXivcE3uDV88rWjcHvUDdVbTmSpuDQVC6LrMw4d7A15NKpgConi14P8wKosdcyy3RfZzt5xgm",
  "key17": "2ihBLKKJXPuMRNFf3wdDeWNfHBbmFcRDpJ8uZD8j4KArz9Nw3RZvM3NyUCtf2m36i8bfYaKzUzWfYcNDVn5JxuWK",
  "key18": "36YFW2Fvp1wkeB1WoiuEbwhatbrKpqgigHErXWQog3XY6F68KaMitJWv9Zx8p9ECeNfV3WcPmzwHqUFMDXB1e4be",
  "key19": "3oLQtdhZvh3voiMuVMSvJpGtuUxL54ExGWcdgHNzqd54UUqrieAhw7CZyx4HkZoARLEipG927YjC9dGVepjWzJCo",
  "key20": "3L2amYZLxLufzj3qGf8AhPE8eAeFhdh8vWFUHBPPrDAGWnkrkNEXJ4swyFx7dDUSjM6gFYd6h9Qbc9jMap4SAUGD",
  "key21": "4toTAR21KagEsbxnGQuWhkqHPbh5pHKzzxf3TgYBmwEESYAJu2Ku9pvdJaid3qtrVNxLagcvCgQPa7ZgnfpUwqtU",
  "key22": "yBJdBYUbmKEdNWGgYx1DSsqDBEXqtsabt5RaHzaBjYh7fCHVsDDHra71JRgvFVUq7cMjedc68knLXhEVV81fLdZ",
  "key23": "5kDXyw4Ue7vMC7m4efbevBUpfRZopY6Jk31RVF8YWWxhyWMdiKY8VykE2SMeae9qxfg3iDFuC27BoUftBeRQ5xva",
  "key24": "hcq5bBakbihq7L17EGjoMcBztE5z4KrKMMVSbonDGzNvjiVgd4qNLXcAqDVfXaKYBWQAUwPMorz26pJjZYb8rsf",
  "key25": "3uu9bXSWmak6BQyNWTSqGzatYMguyWYCwXYK1cNyiycW6kmLmZH4Q5fz4m5GZmRy2ny5CmiQRa14NyUAg29xGN4f",
  "key26": "3DWZKJcBjFpNBHQcpjJktJhbragDSM5BnRBDcTCSyppXvyJHcQpwR5nnRFzsjwXxgYAvuFEF4ejGNKnkLcBbpyjF",
  "key27": "2zHKiHZby6pgpq314FvRkUiBLHjEUVemJwmKq8SSoCGeo7hezU7uK7CHcF8DWvHFyJECkonDMzCEPHX6hiWNKfC2",
  "key28": "4yChEc9L8dgAA3kh22RhA71mQDcdDLLSN8CAaFzJAXWK7PJxYJGKDeunMwaSHziDCrgZLLScJGLJ7c6J3wgzaSek",
  "key29": "5Bh4jBpYqkFtYmhF8pEs9zY2ikYW3BShhvzJ7hyKziJKWbEHHEJhNCgWNXnF5oZDXDxvai9dukgiskyELZxmMvBr",
  "key30": "5eRPrTqUARWGyT8pAfKeSzzaptEPZFX5unCWUffQoTWpkSMsR7Q98ZV4U1nWfvTbwT6JL8fPxswrFERG6XhdcbcM",
  "key31": "Rsw2WDoUsHCoCXeNJQdnyQzwKBur8soLEQHz1Mby9eEWr7r7f1pjhzipm5VoQLtiNYWWSpUGPHf2TTqx8qeEhMg",
  "key32": "2NZVAaZKW76deSwFJ6h34HzJa3DafBpWtD1KGq7RgCg16fUod4ZmNYzaZtsPPHkfntXRdxe7BYb8Awts5QxETjfp",
  "key33": "64VcELxXLBrYDM5Qb1MqBLQyLQkzubYd9JVn9SXqfddMwK9FRdxcsXeg6AS7Q4Rum3jngEtbc1jq7y1Zfh3wBdMy",
  "key34": "UDsjUKaEeXb2d86Gjco2TB8rcWaAmjwxuMDWc7vQr1Z5WjMN8JzEjo3Qy7ZCHFv89TQ9fk1j2t4Lurnt8kXbJGi",
  "key35": "25waY9He6ktXbfpNjPs2Pq63jJmVZ4tmFYomfmSDcnboG2ubAcwQpusruwM8gpCGhn14jFvJJwoxCz2Grkk8eB3D",
  "key36": "5CDkp5cL2TMCrpEhSaHT3GRNJL2hZaB94ebKbeW9PkgxXYeE1T9vHy2kkyznZfebZGY4EwFyjkWKtAeVdVy3Ua8s",
  "key37": "568tkYWhBgF7Tm7dTHVzaozHQtYf6QFz6buVJLX8NMSAXYVxPvgzfvpUpChM6JsXXqGcq17YwiBVzjoyv9N1ov1X",
  "key38": "2Ag4oq6JWgMYXkCqbQcpZi5FLQBdWyxMHYx9Gqxv5WQcTcEinpK6UEZNM4x2QjhExKQGPJ4e1PQ8JkZTDt2tizSB",
  "key39": "5nk39b59eNX746HoPCcWk88YnJt7TZu2sAtTEkGirGSht2kZErvHdXkyRwcwyZpxwvam8eneQwGuceQGPBkyxRtG",
  "key40": "3shPNib6qDLLigTZNQXibS66NujXxSHwkT1JKMjU3tgMpkWCQmWWpgBgV3Yb75QL2iEuLVi4vsTtPeLu8waBSYti",
  "key41": "4eqiUf36VJirBJKPPamXuZpHvRz9qnLhUyfbuoj31j3GWfYKHEmVqkacqhSMmqRRq4qrAE2r3VaUn4g9KfbXmxq1",
  "key42": "2qtKZnfKNY8CQf3sXjJpk4pTqDhsNwb92pTcX9gXYLEvd1QTHZUyifVWaqzpBRqWdqwGUhcyD2nUnt9i3Yja8kMy",
  "key43": "v3FG9ZmEDBgNp7TrrziP9BzezCmhc4qSLLeCkJVh6fhTqZjFa2BqbXSPHTdNc9AxWLDxi43mcKeWn7XrFAyzQXP",
  "key44": "18UbHKSwjHXM2FikoGdko9NEppPD91qvhFqxQFm9c4HkV9YagNKAQbs3sqDMNtsUAC3Ya2GEj9HXJRBeHSCHqE9",
  "key45": "61zmpDPVWaWHkLkKTC2MbrfkGcv33sbSd2uhGambBEBH4mPcKmGN7orGuYDBpw9JkkWLNSgJYZPNqhcP9ybV9SFm"
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
