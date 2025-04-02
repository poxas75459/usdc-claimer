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
    "2KtsdBzzkuijbcJG6FvUC2yXGLLqaCWU6yC8APATBCaMAtbcUrufnJsKuhmarJHyfq9SzndVBubrkSAEfp7Q2u3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wvz8dKdbYzEwmbZT1gerPufUvNx5msBZwiUJWLRF3ik8NpMtU7RqqC5M22j6oZ1wbufm3swHHYJYoUdceE4gCFk",
  "key1": "epqYbsasWSCim3u8FQtDhQ6cvEPcBfU1BUKob84BF6GToVSCaqFXStaewNw3DCnKW6sDUtJz88qt3y8V577bqR6",
  "key2": "2dzwstEA2CKByukppPeDHxME75JhBn1yHQLSHwQ4X4khkjZZ21cgsTctfECriuBm5Ynf5o1uSrnofJaVoDRvs4wd",
  "key3": "4AYJUqv69ry8Xtp8LMKFNAGrY4BSPj3QNH4UQGcH96DmchSuXwBuLg72gxwbF5LRi2uWRXHnb6cgANWCNUSfYm7m",
  "key4": "3NoRqdLUYiPLgUG8SM2gbhhbTXnqbUw4ANXPtN8XZJv8hqJeapy1KHoiGcZTa82n3FvB6aMdKJ2vTihHe69jDAXM",
  "key5": "2VDWirtReJALqhd7DnWv8C4aczuzPF2UQS1JNzHb4Bi3vep76acAATgYKfYoJmwSZHtd4tkwRF8fKMHV6rhrqGhJ",
  "key6": "3HQiQj4CMtEpBts16L7r1zVPPXNfL4s5u1QCWVETnyKhjdQia1qCdM9SNVhS29Pb1SyjAeJYXV2G4b1EYbKyPwKL",
  "key7": "5pK2EKdCL7oMyeb83buokxvtE7vMErkdQbCavy1xn8jipZESD9MPyh359v8jDFk9Jcg7tGdjfDuh81LFJn5JAGsR",
  "key8": "4AJuiNvVJffGTNsTPhZegqXNGBFJJ1PDC78ggLqqb1T18p4siTSo9wM131acssyaJCkqfxz6N7y19A1pYB7RZ7w4",
  "key9": "2JEctA12AQcoAmXMkeGsvbUAzhDFHgccYraEXwTVBA77Cvk2PJX2QJtGW5qWTprK535vpREbAUJA6v4eHzuJc5CN",
  "key10": "4n9iHP7zt3fMcnXRAKmD6eYVfHeACppeAVP2Zera7aUa9ff8tjiesG4mvrnsDRQ57ajCeWK9pNz1iVp9eujU5fiQ",
  "key11": "5L88sJr6S2tAdFhi5Vir5MWpbNwwsoSeTJf9d2v8xAKXMrycSUXRx3tkny8ZbMQR78MiFNeVcRHngTqawEeJBpKf",
  "key12": "3ebtgiekSjDCfTyRMpaz5SwKfYcq3ZSZZSh4sxthMhfKH27hG6ntXj1a8UgUE4JSZpsMHojaZfYbnvrCZZzeyaJK",
  "key13": "2AiAVK3MaJver5Te4rf7uR3PcsT12otGKM275otH7LZMkJ8txssyqX5YwgGJvmQq6UAdXbzQYYQNeAFTXENwwFYw",
  "key14": "5bHm3vvayVrpEZ9MjVDtt5hN7y8u5eJVsNsxeiTx7wGKWcTN7HugRfsVrfHUcV3ij2iD7JUtnPuHBQZoCr5Bnwzv",
  "key15": "5w1amNPRwS14Hz2pw3Hux5wFYeifFqeJFn9WYnXzWAPK6u973mGGR2DW6wuvGLF3ap8s9Z89seWmDwy6JY3HGcJA",
  "key16": "rFEZ6nux6V2mna4y2EyhSDTmXjS2vrpREiskkW4B4SUqBAR5bWH6q19qUQ2BnH6bM34o9vA2itTguCUNHVeKtJ7",
  "key17": "3S6333siYmFTfSdP9sNgWgFiEVuUai1aa6Wiv7YGy56tGjBjmQhQec2mQmF2DmMhs6ovB4S8PtSXV1NwWtjsK6m2",
  "key18": "2ENRwaokritV3Aoofp45QnsPHWd3sauMWLycH5UkCFSTmNicTaWtJYhrTnzjXiNy1cm47JaR2qvPd9qa2JXpxqb9",
  "key19": "2oVZbCYSpTyFwr5TGCeCUtqmTUJFARgYEwp9PUMdAR6GAK5MnAFxTgXp5AFDbozLNLwCWtvSNQ98MyE4outvdJyj",
  "key20": "DbefYTRQ2zFoW11xKFC3VF8fXySw5KkPE8CdZ1qFUexbibqdMTZS4vhCxirxARVmoGY5zrv6iYJ6Fbq52Byrydb",
  "key21": "5tpsrHcxQvS12qisaELTDGYJp71TnKeYhrzGfzq6pGeHaiUMUDmQG8QPQ3s2obhTrYTSF6MHngbJsqxsNMB4vUV8",
  "key22": "5PuL3zr2f1Hkzqz7mi4DTqir6C2Bo2b8aMxwxdRMKDj6SVJZydb3DgPsXYGajJ44z1gRyrM3HY1tsmuMGeHndCwE",
  "key23": "3mGxgz93K7a111Dy4zpYT6Mbw8Qu4RYupsLtrQzk83w3E7ajiaswPfBvztKgg9MzzCSNkF3bH1rSWThFDyUYEL4",
  "key24": "32nQaFDx5bEVLBtWeGa49S1UDu6TFz5EcAAJvt6T1tCTcZ8117u2ZgBZYxTcuRdPjU3sW8uayr6szZfqcUCnrmW1",
  "key25": "2vqMZHej7TWAcE7MUzJv4EAs6Ws9Csp8FHMy5rVYKiNrMxSGKwxufj5Nv85kB8rqVvLSPxzjkdFtXm6pq5Kh88d7",
  "key26": "cpDf8Qv6vMYBp73e3RPaNLbMV2nWLBh1A5dyfkJx365CTyFriX3KmxPsXXf4Zd7eFkmUurqnCM1HhdkiRWs9VMV",
  "key27": "5uSTVcKVkXpj7KpkigVrZfE5LzAa3f4CBRDpjor6YBpDbBD9zEvbnh5r6T6mf5xY9breKYLR7m4YrnscAXVdTtL5",
  "key28": "7TEwwxCVzxMxaC9ftQdE1rn5UF5epcsaQ1DNQDeqdZZe6FC2b3jPNiRddUWJBiyDEQ4StfaMXGrPc3kd2E4Zw8g",
  "key29": "4omUy8KtFJjqz6WKadmzKQ7CJgnzHo9pWoJpNQFcj8uR5yTCksQDwpcaxMqotwXobHVxaaNq4o6bZU7fzofo1Bn",
  "key30": "4QRt7Hc6jKYUzeGoaRVag634xhh8LsrtnUa1YTrjXNZiFUCETA4neHYU76iN3UbVaTGj8pwUaFNxmUnoVJZv4mtk",
  "key31": "nhrEG1h9YhkVek8zqPPmtTrh8vVwUe3DjNhvorSutT8L4xix54Lg3zpFhMi8WPVqh9mbrfDr6sabJ1PSNVNfAAH",
  "key32": "2L21u2KpRgzXD7VWvC4eEULmiFjNDcu9SwZFyUr5JXSZXgU2z3rwih9LGp9VFuKzQXJuzCMbPdsWv5is7JySpNKC",
  "key33": "2n6UiC93Lw2VPBWsKhkX8fijBkHZnkou95WaCaNRmbwCGL8t8TNkyQULaVWETKFjbsh8RmAVsDXR5CdjqVXYviFB",
  "key34": "3vMqJtbkHarrjgNEYBh8qkodnas3AQtX2bfsFs8EQMEjp7ip8JoR6AcfJDKxX4uyJPArWCnLZtX5Q5339zinjw83",
  "key35": "vpC6Ybz9HRccvvCTJ2iW4fyBzns4vHZp95hLGpQsbpTfvRCWPqrrTMF1feZ2cwLqnpFJGo6yLURauxMoS9nupdL",
  "key36": "5qTppAD2hdEdWUDaTAxRT7Ryfu3jAxJrZ3SLhinRFvmPxfRYtXc2kVATh6KPPFZK5KSH3JdjUWBNbwScfVjkVDTo",
  "key37": "4atij9qao2xGGX26J8PLnw6L2o96MbrTXyv7nB5pmzoxMuUUwwAHPzmAipsHpeX3xbaNm9QhjBDXpJszE73YM1j8",
  "key38": "7gswFDAbfhZnt4hT1mrcH7HTuzKFcYJgpJTer2hd5B2xa9vBYBdSAsVq3fFUmEG3gCnVs8fyW5NPYcSigQoZxnC",
  "key39": "4c2YQmGw3T9Wq2hcgRmCeruw4Y47jZh2Y2C6Zz74BM9arvNucSzkECnZuZdb29DsXjRtmGBNDVLaS23qQUq6m5JV",
  "key40": "5z8EH81GepTEasyUgkiaC75MbBAcCsRY1ymrKsByp1k2NbGM76vrYXYWSnMyXTi6x2T1XjMynBydCHM42sxZ9io1"
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
