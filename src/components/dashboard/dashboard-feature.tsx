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
    "3g2KnRNw9b5uhqTFWaU4BZmQEG3WK5GS26A4SCuT67Pgzfd6tnzR3NL7n873SKNAUGBoZuo7tN5nNpWAhZu1WfQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "382U58eGTNCBigcUREcuz547FAKrVvYL36m4BuhWomDn98xXyza8oncDUWRnBRVPSN7iEUSLbxc4auHk7k9k5r6d",
  "key1": "43VpmDHuNEUJ6ToceN65XxZeQ8dPz9uJtERErCFQKYRdgAsZafrzLeWEg7V8QEsMRhsAiBvFpAjyrAzzjhWmC3zp",
  "key2": "4bsgGomchH91JNDCmFuBPjcL8u2NYS4pn38jy9LYnTfduDAjyVch9YSfrHTcWF9hF2pKPGTvPfMXJrm5MJPkpSVW",
  "key3": "2ZZknjXGdSbdp5YCHcmpzjeseWW1v7zKdukAZgG2fdV1GEgpvUToq6crAqdoQJHXwHXy8TRoQumY9eNR9pzBvSbm",
  "key4": "61EL7x3TMms2SM5nJzcTUew5zYWYn6eLzdGmtrbM1Rb1ku2PoeuuXSfz8jYYyqpB2AxfwZdznk1kyrG2UsyZG4Rp",
  "key5": "53EuVLESVibmhCcmQ22TnZgWat7Zj7K6yKm5UkZhoLPsF6Rrv1fHC6otKRqvHkVyLAyFVfMqHEzusNBXs2S6TQwn",
  "key6": "2k2XGiBBW2qyaMLzCPAXyHiX2rCAMPo6jWdnqM9rUho4khYBgzN8JsbahToPSw37npeCTEm6oyYVnWgr8hof1bze",
  "key7": "4Q9xLqarKyjsmNPEaiimT5xK7XkLFSRFMLECTBpVFfb6urYGMuMiXiGjy5PcUaV1SbDS3zJ4kM8cSYws6sJTv1Nc",
  "key8": "4nCTbSz3cxY3LmqHmRpCcoF2AgxPL1MVdjMFSUJSPEPH2PGPWTgtbXCThC7cNDe54rd1dbgV6bPifEjtC9D6EGKE",
  "key9": "5FZPNNvtuXDkqk5QPW6hx1Vz9Res9PZL7K7QhWeEQBmquwjiHUVULyduajWPGe7Va46JYpgdqTaC6p9B1K2s3c2b",
  "key10": "47zoJdAnwZF4GbSzrcd8DzuJVLrpfjRLXraBwFnKCZjP8pRxVQz1tJHrjUcyK98rgzuhx1hXqbGjBNkQAEPzbFHb",
  "key11": "61jxFxNQejZWdTT4UZYijtLCoANdwHQHKwFE8DrxSwiLCXeM6PacEXNdtsVA6ERz7ZZjCUzgzdnRUsMyqjt44sef",
  "key12": "4BGDXQrHXp6NTdTCZeYNEFiCJQVqvppk8jm4VzsUaNFSbgQmuhxLvNrw4Be46g8aVENMbRt3sfXEQXKuEJiHiSVX",
  "key13": "4wjCQ7WQ3rp1Tz7vYtRAE3ufUeyAW3wDDBT5qcRAChd8bBcFsegwtJoEkr7qFpkdWVicoppV7keRxGKMSihEEZLW",
  "key14": "4uKWYmHWYDTk9k8d7CbjP9ABWii8KEmH2qRH9q8Hc6qbjar9WBfqWExvC5p9Xge7y4zShbr8kEDd9Pe1vzwVnzaz",
  "key15": "5PXMvmqDTungLqf4jyFXy7eTS5NLYFW8nUYD7b5PxMTLxdu4aEcfuebhM4JhqZjbsjwfXe1PrbDz6scLi2PEZGTo",
  "key16": "2KgDEAQXZvdT3YKycDHwM4jdJWjCaDsGNpxMyyMxrc6yne3FFguDjKbFDr6uBaGkt9tVkKM51Ket5xEr68vJEyFJ",
  "key17": "VuGiAauCEe73EemMRXKVfeCnyPt5L76C63a3Q5JeEBzaSoHDuR1WV3WsARt9kK7iM72ssqAJNTSd8XLb6Cc83hu",
  "key18": "3UaYYuqKaShturyeeGN3qwdAeu1KAwHoiuBxBC8XZFYa5spaEzfVggF84mY8C61FKZ9xsaGZsP8aXQg8dAY2QMkT",
  "key19": "5EQu3PAueLHgU2kimh8APMyLqDdVjnfj31A1RWh97vbhKsXLPcp4pj7d7rQV1QDZw3om5vCfadewdQVneDErjDUq",
  "key20": "38WXS2f2tv8f3LfZZfqHpJMqgKv1xbYaFSumtGWL1vaNF5UvTYi3vVfvLvbdoVTWBiENNne3T7hzQLqZ3bf6eu97",
  "key21": "2Kc6iCyge6BbdEk4ntuRMN7KRxrovVBeYKBb8iBUTJpmd9HMjUyhsVX8PJvfEqYxEL2oHTS648Q6pcmUV3tHdye9",
  "key22": "3QSAvoNFk2FhGvZov3EP4xHDZCUjhnk81N149naRGrnMNxLxb8fcP5QeemcWuguk2Qb5uGsCWVGp5tfNxk2stay8",
  "key23": "3mJ21UHxwoBXoeyqDLZV2ckdKRDo46TUpjctDWPj38Y65Sq6eKBBcUHowE74YkYc2uJGH7RDUSaYWoE88tRVjVWT",
  "key24": "55X4nxEkAJAPdHBjmTcTNigxamAHXFBJbHL4BhqhvsDsdjJSWAMjq2qQECDEyeVvfdKeVLTUyvs3wc3r8a7AinNP",
  "key25": "2QHgcCnsG4kX1Q3UDJDxgyRp4JTaPLDE9cyeu6CGZs6Ph4a7JkHWs6uoMzQdzHucd1EMg5AQMW4ck76q69cB6A1b",
  "key26": "2NcFyGxgdSTcCWp5y1bPiNzeF8DvTo4VMUve2NdWBVNXuNAauxN1V2AoRCw6MYGdr4aAtRawW9PkxtBcddHpXk5o",
  "key27": "5D3GQdAuPCSAWXsgNvPdmaiGWeVZALw7T8PhvBTYSNJNBFR6CTNDtYhMkDaHtdedQJXNfkphfc74V72pNd9qc8UP",
  "key28": "456zt83YbSThkE3nkaQTaN8xQBs3qrGp5ovwpGHWRjsGtn9MJEwgAFmsX5FYFHSKAoPysKFALfAYYL3U3chybmUL",
  "key29": "2EA8mNyrNuSaAwc3DjRRZxGJtaymozdEWR2qYV8ekgzi3yyQXQ2rPJNuxwNNmS5Hmkzbhzf9rC8medhG1RuGpW1P",
  "key30": "2qQdwJ4YXxL6jjrxGjPeRvxWSkUEYASq84SatuXfPu2zv9pD197iEcG3ggGCcvWJnW1MoPQ9mYxv9AtonyHp8puh",
  "key31": "qPuYdC47czmPdoVoSyrRxKzKrXgLfeeAAXqM1Ti4c1UxX5X7X6QV6pETwTSAVr3Yq6o9tGYpQQWgiRTdCYhTcSQ",
  "key32": "31E5iDL9SPnNxiTkNTM2MV1M5Zkgd8cegke4EC5YmdqoKoGaECFUX6qiGUmGgj2JJbt1DyDiCqgPvydpBpGNz2fs",
  "key33": "5TZT1GaK2e6XuLVHHWNKawzBhxkLBr6NnEX78XX5Ki9KeocWsD2Z6oERktFVBTgw5zqR6phwBdFjciTTyE9u3sAQ",
  "key34": "A2XMqnfjqJuTFBVwXDGDRPkiMFdVnCsnao2ftJNbEBKCudxdxvqLwE4pM95QJMofGhSwrRLg2GGiiBnFmka5LFP",
  "key35": "2s5YP8dVWQBtk7RFgxkm6T9tnR5WMqc5evWnKDNCMVTmi4Zkw7SpD3YEUPoFQxBTyHpUnuLaGnp2refhrNb6CNit",
  "key36": "3zcqvsJyVftEpUzU58f1h9DJX7L16prphLQU5nMxUzmze4bxh7Zx1LuCKV3b1UaycaB2tHF61WzBBYtUDTySvpKX",
  "key37": "9uZDJN5ynDdiBPiZ1S53qiRNDduKzgvqL8T1AnNbgvhwmDsz44KBqr2xdrTseFoKTZJmTKqyJVNVPhJgdfZeDv8",
  "key38": "4bnc9uqV3HGxvHSvcFL3urckkpyr8AwYnp7PJ3UUQ8EBHcGey9XxeaEgixohibHCk3XfMSPh3hAJJN8Qn3si5rK1",
  "key39": "27vcctyWUYB9UzRy3VZt93wnkNEDwoVdkjgVGLehZQXQ1jDLh1Sj8SZ5KK4rbepLwvNw2jzQHgWf1SExPsWL3unz",
  "key40": "23jzyrrS8k1TZPXVbp4SLFKYvdUZSPnnnCTaZS28QeB9u89aeJN5BL8L6XodKbKRptD9VU5EwypqeeELV9YLsPB7",
  "key41": "5kJmKCa1vihyB87khHcZaHnaKvXw5pcRNJ1ajq4FRiRSk6m8mC6TNMeqUxS5CfExGN5HFD7F1FQeuTenzcDDhVwW",
  "key42": "3CuubCmLrxNZkqzRNVrsrR8o5NbK8eEYj2MmHXHef1mGM8sdFsmq1ub2vHveSk3ehUc9zg26PSLAxLY8naoDJCf5",
  "key43": "Bt6PRmHXfyLkN1FtdeSrSk28VrQGdKLP5Wjza3xRP8j1yxwqWPkYvtMcHNdSyhjqyzMiSwYaEEnK9pmM3dkC2a3",
  "key44": "yg9cQJfnLrFg66s9WnFi7nWdF1J6tvQMPQSqNydFLHtW18xFMV7PKXH6zpSXF2D84FPeAQJqgD68DYR3Qs57qaX",
  "key45": "2bwhzF6eu8cyKBKB2Urf3nkbKtxN4kyrN6nTE3rdBQyRc9TqFZd1A9Pvv7kSkqosApPm6qtRNT7HvUm9U3Cv9Cb7",
  "key46": "5sUpZJzrUpGhxK5aeHyWNWTTxNyRFVgAvocTPmhetk6KxuDSpbS5dCGPuvFyRTAtb2oGrqgPB5h7k7nZ24xSGxfe",
  "key47": "4qrrRj7riwB68D1EyzYus1sXG6p2P8fG9ejSnYjoe4NUb9LSrhDeh5zd9WDHy26cYg6nnhCbwEucMsQ1ve8bHVtd",
  "key48": "j3DLyfXzckobHhZfWmTjyUWD35Wqs5Y3n5AM8WwNvhxS46qrMC2SQb2fGpTtJuFK832Np2jxoTN5ys7Qo7AfYfG"
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
