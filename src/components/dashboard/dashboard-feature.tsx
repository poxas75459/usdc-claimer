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
    "YQgfZDkzjMAMjTc52W5f8oCJKUGFsu8A3T2uin1bvLBCUt5R48BWyaeAJkq6oHJcj92KpLZnHS9u7gHQKUQM8Ys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41eTP3C5ZTF6Kg5EmyFskF6NKHNAX9zgfeBW8bDmeYq9GFRQq62hKPtmHFxj9LAo8NcqkiuatzbSdHoyf8jDDHof",
  "key1": "57NTob9ecnKgiB2ksBrP17VsRoxUYuTJjmT4KhRoKYqRj1eTi83TTbyJE3Ly26kXR7gPQ9MaYTKtutTxDvEaJFG8",
  "key2": "Dd6rrSRUkgrcJtBTYYenRXXAbbC1tkjmr7kERxXTr6k7gsE7Lca2VaeJc3DsZZdR5svJvhBVnrUdMEn3jds6qLR",
  "key3": "2dtqteTuUgV7SxKYsyPHxTS7UxvSALNmAtoyN6k2mcKES1bPEPX8UcwFmL7hpKtZheSKF17Cm1TczQ5TJDKqiBDq",
  "key4": "3SfEi9rBoxCsCFuPnecZZhgbyzF2uyJN2fS3zY28P6wtzf7UEXoJQzA379mo7bpPXLbJhnhhN5CafJmHDH7x71Nq",
  "key5": "4BrFWoeWC441GrkdJg2xss6GzX4wCNHmQb8Z9KP7jprs1PgbVhbA2YixG9E7rucbu68pzD4UpUwPQh7sZniy5cHH",
  "key6": "2t7QdB36UB42gswvPS3JJtykc997mZsduLHJ2PpCyqPuis14SLcnPhF9aevhwVwyFQ6DvbPRAWo5QRiQMiqyjfy6",
  "key7": "258bM1HSBh5dmo3bLdJumoyFzbq8cWY2KBLMB3g9WfAhiVfgXJD7YZrbj8CBmLntKhUs3MdyX4xYjaCP3qER77YV",
  "key8": "3oxrNULxHLxF3Lt3FePfkpbmWA1wsKsw9diCgcwppwro3rnAxyPZ4yQL6NPtX74onYDX1iKsX1Tb4Mgb5cNamswA",
  "key9": "4Yc7dfFBTFGxEUwfkg4V7ffnpoXkCXfwRou6Vm5XRKmc4BLRPrHFqdAV4zgCgTCg6rP6o8KFyjUPrfUgTjbbScQg",
  "key10": "3WHQ7sqnyzuVLq5YJwiStpAdpWmvrGFWJBUFocCbTJwPcDYKagkpxDbGcCSWW6s9F7Urj6sKTXjc697SNYxfGj1J",
  "key11": "37LfYSRwEFZurnQpdnNK7fqRWfhdrdg9psEKXBP1kcL2y2kyUXKdLigBKB6greJcZEojyrqeWmPmzGCzBQ1k4kcv",
  "key12": "58jKojmZWfFPJBLpuoFYwFT7sE3iYufHVaFLr8odofyz3GNMJUmhFnPQ9ebjYaWsCCPd6bQSGSfqkQu8VvbvXsmu",
  "key13": "5GT6KdQQghwFhnXgkw7s4x5mHedSFMmLU97tYyLTX1MAoeSQ3CeaghFi9pMB9xbunM38Dfq77RNdzVw1oSQB9cm6",
  "key14": "39D6guJEMJzDqooea26Nr6Gz5JT4aT7WH62b88gSLaBnjPHLVYGrJoXw1tm5hKy1DEiujGNPTW1cqxKjACUtkAiY",
  "key15": "4GDdgwpPoVyRcgDkKVRP2N9xDkyy6c4UutHaCW8zhW7s2VVNqZftyiD47RaWdJTHLfvsEgEM3BNCRjBaPX1n8zVx",
  "key16": "5SofPQHgyi3mnYtfyzTGFoFSnMcWMtDKDWs5SXeAVCtsjEHRKHujLEP2BfZVMmkfSB5CR8xzhu38DrFNt2kc2kvK",
  "key17": "4MmVQidqAhcXLWcjxRgvRNto3dyztYPC3gEiyJU9GGndXY88uyWpYPTtzhEbQAnTL7JGQCHShNjTkksbHsrjjU85",
  "key18": "444UaETTviyYMwEXXaGK6yKr3TiUxuFWNAYtYEx5KQm2vaRJYXzZUd7D2YzW2Y2Xa5ZXx6Gsy2S6SYiyiA3q3caW",
  "key19": "3hUcbTo3APJAFntgHUwgSQmpswAdZ1FWXHM5jtdpjABwaV9uidLTX2h2beANAKnjfi3vwenAmZEpKqyCm1uDBNm5",
  "key20": "4JJt6YaeN1vLXwuxMDWC8kt3Dfpjw3WkndASrNZWqYVcoF5sdMwDwwn8Z6LSMtXeUg7RPE2JSDnn9JcrbG8FK1Yn",
  "key21": "4r15jdVxE2HRNty8hRoifpY1TLcEosTLfQQY3JcjBwLjvAXod3BtnvJWFQLASkDEXnifrPjtQtWDWCnb1Le3vgyS",
  "key22": "631yP6knTqNgKg9L8fs69yuqChrxrENpjsWEhVQrnTMRBmQF1pin7Az9SsDyihqT6LweyMQKgrPTXMcninpXD7dV",
  "key23": "2Dwp4MtwA1urmK4534PDuQPUpsJG6LppCGR3yJUu9E1gRfNcAwoWqijKTBHksqhaTo6EkCfpSxFzGJLYhqBKv66g",
  "key24": "3AAv9eEoDC1ff4JxakYfGPLgFmxAbWodGJb6bnLKYWX2jNeVxEGivuDw63bmBopzno1G2twsVfrgoigwig9eMhWV",
  "key25": "3uTiVoPSmSEoqXf9fMpLAEHQwvW4rijukSJ2Nof8EiAF8x2LEYEjXkvsiShgN5MeVM5kby8HbRKXHa8rgB4S19HT",
  "key26": "2Sszes8C3ofEA8mENercDxWNXtHXKWgSPcBse9ADfxib7tZh1CJwb4u8DqKrYFa2iCw4yzS5qALvsK1EpAyWFTMF",
  "key27": "3vaPm6NfGm1nQTtTt64XAiKzVtXM15QaLs3WhqLagbFj7ey2McGABTyWo24kzSGuXXDnvN6AAsuEub1B95iev29C",
  "key28": "2JChyq4W97PNUP7Dcp2SNfqMGB68bpu1CGk2RSZny4umKAajXEDuTGsVTNG7tfy71j3amT1EVwp6kztzXmQEUNLt",
  "key29": "2M7uZQgbAypXFKzRhGLixvkvoWkyHSmnhs1Q57oD5yhnFtT8iNb3zLuqcKv7f4Bi3XXXFUSgYysGtT1uSV4aPzit",
  "key30": "2XSam8dR434N5Zn4EjCqh5o6VXcpeNT3RTZ72YCAXzQ3XopubsmpekXFXqZDAaorZtjWJyDRmLWShbcbzXttP7rN",
  "key31": "5TLy76AELkFbcjWaiGPPnQuphLr5JtVSEmm14yNEp8YpKhfpXii3jE9d9BKU91UYUtBRcU7MXbAwRsYK76GyMYKN",
  "key32": "5PFP6wfTiMZ25NrcgfyBKvVqrRiWAU1QKXoX8A7ZEoUEeWVtkx9uNhA2EnFB1mC9Qw6pPkWZzvrbBJGWBSGwP6wG",
  "key33": "3YJ57Crj9ZcMEkhpbt1Fqcfedb5EcNPiveJd5mSfXL9hqAEPNzuVMMv7zUJFg8JrvGq6M7xSEzTYQw7Xxpq855Hm",
  "key34": "6YHwMemPmyhfXHKhGYpzvbUFSK5rqcqZwUjGpsiy3M4PBiXGEAoSM3GijSJVnw7iwzQxQ712mfhhSfLRytcVuTX",
  "key35": "DyZGnr7Q992VTzQwikN3rhQ3YhQuLffHF8ts5KSJedRVpN9G37Eb6eVauFTwtZddXPLvC8KkvrSPvgRebpgF8NB",
  "key36": "5XUM3bS4D18zZHjRuKEsLJZ63zYczWTnK95jfFxHPA9nMe3VPVLMqNXMY8iYjJnBUh3RjCwNJgoe3xUY6Cwx7Ao3",
  "key37": "3sKnnYE6TT6AdTJKagtxKmmJ8xLdKpdS7VdczaEWL1ps3i4gyY95ETY3sYyN4ftfUdhUgg1iD1bxbUUx1yeWh6UV",
  "key38": "4PTrFTJmsrbKU4K4bnjoDJhoNB6oav5XUvEkmr8voC5xDhETYgsrspt1cBPNBCu4pVLWnZLu4BsBUYHvJ1XyVQEb",
  "key39": "3ej6GxbUdRisNwvc6DtDtRFS4QtHifBFXekeMbGUpKeVXL82uVrv14jVR1YMgDKcTZ5jFGH57qAwH6hcuPJRyvX9",
  "key40": "4jb7KDm6gGNS2RrneTpJry3iFsKGDKQh42GJQRvVWU74ZQeoJeiC21rzGfxA1EkAj57tkBGfsbvLTf9ck5bwCqQb",
  "key41": "JLaKAyr3uFQLmK8mkKdeJQU6jGH6CxH8vpGNnhMFv5Avf5337zBP2s9UcSZ7juLwAh99W5hKtkwaGmeNQMG8HCB",
  "key42": "94kyPXRstkKpLxNN9dk68tW13MsgU9grTnGUs7fhvsM18FhmGQtpkEAS99phx7zMVg3nxnGmzYUMAtTkUhHgGPN",
  "key43": "2YJkyKZwPwuszugHEZ3qBgMbmCtJJssGm47gvye9vozqhM4g1AXoehgGe6Mi782w2xM6a2PZk53W4PEjhkRUWZ8w",
  "key44": "XE7vPpfxMbajNZzqg2uQkzzHotMvpKwtugiX1RA51TSKi1GHwBm2zFzhDpAhdhAFBwXMg9LAbk9myGVU43gMKeX",
  "key45": "2L8Eh2WoJiJz2q6tw5QR1ghyc7LTYZmx6JFLhZHuJFhjnmJeRjz6iPPwMwca8qk7aACkDQgpqHeZ5vrDQznuzUQV",
  "key46": "4MvfkPrAAWwvwKDX4vCqcfENpS6Zz3EQrELCbBuaVYHPDgaHAuZZB2uJ1FtkEwt23Tvm2eNpfGGFuqCxRaZRFuBQ",
  "key47": "42iqz22qvPDyTA3gk3J1DpapuL8XsUJbS2UeAExBHDayeewfK2FVXG7RrJjhzswwQqsX6C3Fx4nxNtyhok5CoeGk",
  "key48": "5ESw71PwfRjUfHz9cjYsSaw99ag1LzdYkWpTyCkMgc4SdtwapG7XKrt2sgQNnHk8QQBjfBKuyvkMBKc3s7KpBCq",
  "key49": "2c3DDjhZ6cfVzdULtZ8RnEEXLuttQRc1Hq8Yr5TDBALxCvHvjYcYaDzpzp7L3H14mTyCGYsT9Gpf1jPNLjKyWdbH"
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
