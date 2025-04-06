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
    "L6YhjwPzbTjYDa1fTzA7bEEPwitsF2Pe8XVn8jim818a1z36UteaBGcNZfZH69Pdb8EWjdzgyLjSFdYNSNJTQoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PPuZKZWzfM5bztdzrVeEMJ8EWPG8hxDvijvuNDfoFNCRaBzU1KjTCGoAqvaB7rRi9ywaWCKenduUST5KHBq5jFe",
  "key1": "3Z7B8zFYHSw8nze3qjDEZhA82ahy58JKmuoMJE1XHCpQVnNMSwo3g6RkXNNX89EbfWe9XqWkRJ6Ni3J3wVwvgqLv",
  "key2": "3cAv44EZJ34DRbiMiahrFWoL3Hf28jmM4rYZnSr7CpVLQcKFt6HNJBYe3hxVbdq1r7VWJtqvM6cMSJGrsxVQCLP4",
  "key3": "4hzLFY6Gz9VG9LWUKGfuuCwU94AoM5Rqo56DXSjVqGBrhYFP5nZs9CZCYyeGQZaefA6Zy7mCAocYMAUzkUKii1FP",
  "key4": "3YLfzdfcR9LSAyxF1YcUEWh7vGgUUck5ZqucixW7sJSoSf7dNRsYfNHg1j6r1hTu6JyN4o9CRsLgpuznH1mbZPj7",
  "key5": "2BYDMi93tL5Paig59irS4NJU6LTWfhWiKgaapktQVXFTZrM2i5nreBCVN13EkunKDwronA1c7rzbHbJKH5hHiXA7",
  "key6": "t3aoHJ2HD6fz5KZCWpqo1TxafRnP6mrDpwvMVWbfZUbbsC8gAZSfmMutNSM1QnEwpCsCtSdfcBuajq4mRpxeAxe",
  "key7": "38N1W8EwRhYvGa9oirAdhCSVSUiPykh9hMXKbMfJ8W39Mc493CHZPGz5exVS6fcYkq2LhNNPvyFMsXiBhB4rSrrz",
  "key8": "3MpELonaLMqqEFWLBLaUSBad4A8mRRyXNo6Ex8MesPa2Cq4XPh64yBPwimSApZwaWJdSwNX81KqWh4sRc2kwBh24",
  "key9": "3gexzi8tPHC8FQL9fvxrUfVgfSJGXXnNaitWPcb5QKLFCE9xcGr7yX1ema2YASv7wXX3iX8DAgw7LrVXsKwGF47r",
  "key10": "5WhuSPgNQCfL2TMxxUTod1YuZzDRoJhTXHbWdqvrxusjwit3iKML7utiGVVFcbW99nBzM5kmePH4eoftDzan9FBY",
  "key11": "344BcafbLQMEjar6iqc9Knka7XiGcDLbMTKR3agKhXeFtN7yBw1CM6fPgPr2UQwAu5JMKtvoKhAEYenMpTrZYLyU",
  "key12": "4LLdBAk1TAU2RCHsaeuDcDSziGWbcfKeVsZQV678Vd6nAA4zSCyRWo827RPQrK41dFU9Wz1fRFH6c7BPtc2k7cNm",
  "key13": "386YaCKE1chtrJcQK5mipsvaoouiDSTAdhnnECnvK9Ch28jyPRpucrR8m37uoTiLEfvfFkwWNTbKnciFY5zpJ272",
  "key14": "ntgzdTPDwTTYWojugacgC2HE3opdt4U2tH7heH4yiNayDJpMJUstjoxxzjSFW4zYj4SGEiGPXuGXTxsBRD6Dn2t",
  "key15": "5qbGAnJSquAPA2ksWH2QFt4g9HTSpYN9V2KCkeTjiE7HvWDHvYwxhnvnfC6j4PDUFwQ8KPAZG5prYq1AunAiwJwD",
  "key16": "5ArmGN1ncYKjBYTDZx5k4i94VCXRijUWZCKXXW1N49TuNm7WptmDek53VnBJjbms9W1DvNgKyN9qtwmTE2gdQspn",
  "key17": "5qSQBumGojk8MzoCqUWxMLANcvpFfBWzv5WpjyPG7mCNJk5EGqhW7hMLUSEDt4pHkxwUyWtU1LLkDqAsrCBDnufX",
  "key18": "4K2No2cCbjtvb68GyzgqyGiA2Sd1SSbYuMeoq9FkGnCWxbsRLsSGWyq4rudrjy5mB8Lt6LZMBi2V6Cv5D5DoTurR",
  "key19": "4d5zRbyDjiMNqdMjXcVh4rxhYcp45DA3fVZyE2aPZHQ9LgBzYXCumb16YPQ7wYLu2jtS5m1ZWL1jb3cxn2995sy9",
  "key20": "5rn2xPkY5RpkapjFiu4mnkfhcMHWunqywje6dGmE4PMPTtMXHtZbpswrxjycybRQNSuy2vN6pCu6ioVNEp1BMB2C",
  "key21": "3zTGVVGx5G3zzZR6TKL4xGpcJYKFjMtB5HoQ89QuUHfuxV2z69qqUvqmXAGkLJS1fEnF6JNZkg68M3rCZykuxwrG",
  "key22": "4uXNhLEBcXDxiQy1gccHCgRKfMdZxaWRhBiM4UD1y2HuhVmJqdMraZEMeRgD9y4vD2c3RNaG7YJycEwuUgyDxuWc",
  "key23": "2sZDcwQcuHhLCLDFRAsB41MuwMujHMjQTptoEswU8LXUKsrS4bGMwjiVB6iGuK4fW1R41EGUsAx24jxGTVaggNZw",
  "key24": "4xYfjvxRdNv2VcuUtnFRfdss8CDjoN6cxVN3cGDdLEWxfVjHgyZzR9VWpupzBXUTkTarB4B2AoyctzYmQcMrB8DB",
  "key25": "49msFYvJmaZjYfCTgygqQpxt4sDTu6h8e1Bx6iLJY5zSWJqEPczJzcocNKujR6VXej12YKyNMTu2nYQQaAJnTNvG",
  "key26": "yzHHN8P1TGvfACXYFdKGgvv5MiP3kagqzjTkdh5Dyx8DSGwyBCAthSTGWhVjC3SowbhmAvBA6jdK3nMoBN9u2Mu",
  "key27": "4EmzHJRo5sU3p52pe7G8ob6mUuCMnfmd7eJh3Tz6isQbdeoAdB6mn2UtfMbXf6rJepqPmXkQKQwBfgfJLjp56Dq7",
  "key28": "3Hqtde25JNn8XTKo39JeVAMgo8yWAHabQQR5XsT5324rdkZeeaBSiwXvMNJYhSc5W18gfdDYRUCA1NNvQitfRpyH",
  "key29": "4iynE86TwPa23V6kHYoMscpWNHhiHxoSqmF5gn6ePNb5WQjPsepPhnGBkeW2vJ6QHrYPsWhPv9A9QeqkBPqPNoP",
  "key30": "4J7e64v3eghs352YiQNDmbXE3MGLzUfxWzQmvL4A8ruNFez49ptnBx15MYMYgVNNddakr9Lp1n5BaEWRxmqfx5g8",
  "key31": "5MuoDxYNtA2pbq2LsyiRMc5Ctss6G3XschgeaoPfm5oUbaGTbcfBpiE9bf7CK68Nf1zsgZMNJDj5tJhm3AA4jKHC",
  "key32": "4PFTvYGugKCVokn7Vc3ChUewpF49nq3dv1y6WkR9Rb69uEEqyCbwZEHH6KCxvTq56fuzzAeJSH6AFw4vs39HYYpv",
  "key33": "AUQSCQ9BraNPiS7nydqMPDum2NtLGhtdeW18N2BMAEjb49sfRZb4qmuk9icUHbH5FQmh3Y4PYspXtsAULEX8HVX",
  "key34": "48RzZmx5FhRS5a5f51RVN7KBF7kZCJ6n7CQwNZYSUhmxo9aWYpm3XRXDfxK3UAT3A4uq1vagakjkbYfDGZsS4g5y",
  "key35": "2sm5iRznzf3ZRP4bMN88Mx8KdWkpjTJuferHrTn43FP35vYnsocKQvrGGgVjkPF7USQeinMKNiRBtvHrYGzgqdMJ",
  "key36": "2ry1hpeznQBKrTAepaVKpenLCx6h92dWz9f9iQG9Fn7qy2KNZSwHagh6ZXhS4v4UpnvSTombYNtF2DF4wVJecwnW",
  "key37": "ZZAszNdi4HA6PWDDF53Bb7fvkX5GmGT36KJqLSZCfFeJBccDiRhiXUuXqCZ68WqSFdwfyyqELU3oBDpGb3A5h7V",
  "key38": "4VBYWs7KoqDM9mtdW2ApDwcMCHtyTsAHGqxxk1bU8zyrcUu6nWxnHLuaqPuaiaSqRnkXnKek7BraejGz7tAEmGPo",
  "key39": "2SpATmq6fWWqompNGbUG2PeH1Thy7pRYfsJyEGf4G4WXeuEY3T25Cjbpyt7c3oZ8iU84rDt6czsQsJGU3xbnubWe",
  "key40": "AFYeXMdNGJiFoa4r7BESthps7p4WtFaywSu4en6zH8reAFNQkqgjAnAXM2ZFH2zG7rPGMAyacq9paYsacxgtr3d",
  "key41": "3iLYTEFawR4oZFJu84AFNzZERL9FyHVCbuLVx6LVeUyJmwFcqEZ5xjtpDrdtkRseQ6ik5NLg6zvzuiAtqm1Nog8M",
  "key42": "46iJ4iLja7wheRM34GNP7fso8t8vCrVsFdn99S49jrjA7LEzupPapMCrYRDHhcMd13soJbgmwtuBmuPiAHfBUz4j",
  "key43": "4Hthu6p9okYsMGP7bddF2YsRMr5s7wjn5hoLr7azqMmak5WohHvWXumkk2gHpYnQ3GMKaWWC8g2k15yh5NB2Xfgf",
  "key44": "JAUhVjp7GgLkn7vguPppr98uGBeia1c5sYFHobwqEVcwSW4gRimqTVd9YPnZKUVrsB421rTjXK6PKx5nmdTm3Th"
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
