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
    "sf5fbrbppE3yJHeH9bHYjA3pUifkrbUruek5HPT9qFpvGoGNDMTrYhMof1nJSEV26d91VmBG17xf5U3Giogp59y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Abkk9mZVQi2VVyzZ8pvXVaFb1anZDNsmXijKrr3y5M5Nsd3xLPxaGTGTNDjsHP4Ms5ZpdPcN4eQo36hL4vbhCLt",
  "key1": "3MjsUftVbXFWiv6jvZ959beazTc8xzvLyea4Szb6uUxwmMA3nFurZtVYY8HcpR1VgWDt43WuLqdsdfd6TPXqqkRA",
  "key2": "XhMbCidvG5zgqPowPku2hD2gDEUcaqTm39AUXwM8fsQK5rhsS8pZbHrHY6B7sC2Cz9no7NQ4Xr5Yht9F21GMLdx",
  "key3": "9MdGgT6eUEvuNod7bQqGs14pAT4c8cFXht5TACTteDzt89EFMbKuGppjsoponDYAMirFF2f5i2TzzgjFNqjR3hV",
  "key4": "3sfFo41VWEunsyzaQXtLLeZ3wmFSMDxFmb6wj2UuwuvtoePZtv2PVqBhcCvVn5h3Hyd4bFmRYa6hDFeR1m1HVmHt",
  "key5": "3vxRfxnCgFJA7s4XUSjgH6B49BekDe169STBuJgPQSW6FnHXf5thK9g4PWsvMDwatkJRthfYg5LjHA2ScSZTEKWY",
  "key6": "5JU6akREag4914yKdk3eXhDdjn7rXP7m3jWC5iuU8EXMbk53VzsGQe54oemPsaRnQQSMq26XFZFeS1KFpJRrdYCd",
  "key7": "NCgYvNZjpaTQXJwv8fPHmBTtToMrhVgD5gt4FfQEkBHmYB5eZx7hTyG2dv13YV6kYqf88DnfaTSWn3xKqtW9Eb2",
  "key8": "2uJixpuVqSCzi3mWhfPw5vLZjgCkmXDnfHdqEurpFibpnv1qGULms6e7ykpbAgSFqLgLk6bnXJNwTepWEExctUUn",
  "key9": "5FXxNR7KH2yhck46EAvsc2VhETSoE1XBF284PLnP87N2crkFtNXUu5xWENSkSejHyg9mzaL5nBeM7UqVAqP1z1EX",
  "key10": "51FoZi5VBaySmdYbCpUji9Y3AmJuZxSDKTUsGCHAA3KtBQXj3pTZrkRsAduTgE5NMSkT4uPiz4RCq6VU7NUSa7o7",
  "key11": "2LTtM9qYrv1fTk6LiQRC1eWLZ3gSiTKUdo2ETaUyE1kLLAjy16wYww6bALAnV6hgcQa15x1RWvX9xXNx4EYjGt6P",
  "key12": "SLJweK3W1RTp1HzUrw2gLvZSB7THPzW7nT99QEhkMwZoo2vAigbBw8Kxz3v4MeTf52fnQgj8D6CubYXM8xzi7TC",
  "key13": "2mQG4LTXZn1W8wHpDXWDyCFAMBi1SyXsG4e9nWVroWa6kZe3EXV7R5QQGaEkvGsNxdXWuQonfGc2R16xahN3Mwo8",
  "key14": "xyk9h8vnQd7DNn4MbUYYn2QtQCoinLpLG9ug7ZJmcCH4n8DU3xUs8pqPY9RM8QVasG5EZp5aYCny2o17nyh7PeE",
  "key15": "66eCEN8Rwmgs9vUr7oRHmKNFufffD9dvz9YkPe8gR1y55Acfze381pt5hmzLgtbXDC9mykUWpXdEcRqFt2Tnzhzm",
  "key16": "3DqPy29BuEcHgWat5frK48wSxpoXbgtnrS9aDVJVWVeD1rxYhTrNLH9mVyEXfauX3GiNR6aZ7tcbqVLeawAntXdX",
  "key17": "2iUvjj5us2muTQa26iqtxpD5qNF4AvyYgejHuKFGp85M2TnvSUpf6t5t1hUqeo3oTa81GFMowDXNeaRPLw1B1xd2",
  "key18": "66eXNsV6QECWKug9iPExkuUhTRKGz3V3A6NxMvtGJTTNFZpH2fgEpnh3EDW3VXRa7Mo6fK3DSnnpxUyUK4Duj942",
  "key19": "48eJZSG4qkDXFadVTFsKmLL7pvzrqgVonVaA9vSzyxxhQMeAzjUsfzYBTkru8S8bhKMu9jm9staTtbt2Y7VkcQWM",
  "key20": "3d7f8FJmmZR9sXLwDsQj9stU3w5Pad1PDeQBVQPpaDhcpvpcPed3NrQkuuAoVSni2iZkLkmhPeuXNs2hJyKDttUB",
  "key21": "4BN5aGhLksACGWjSTLWngYLMsTfoMmTjgQEi6PhFvLwNr4ctLUZUWot59tcbmG3ust7Awk5fP6spzPaB497955p4",
  "key22": "28kubhHfUJv66MnGoEz9viJhsrM2g4SVYm5oMpyMC2LJmKD1VTeqhWQLo9yvsgDPkUyKATFXoTfW1kDXtHihfSeC",
  "key23": "3sRTGL816EQ2WLjfubd6kWkqLqHSUFFsappUJiFAKUM52m7YNSK7meX4NqJdxPZ3jtj6iUdeX2NTby3PFHzt19sR",
  "key24": "48a73QVdjDzqMErDwFQ5RRdpRZEEjFCE4wMoLFkwZMVaT7JVKb13Msk1enRQcVAQdaMrQGC7jNUaqzpCVfMKKQnK",
  "key25": "6zENRr6hsj531hf8tk7PnhwoDBmMsdFZCiKVrPTVYSKDLGqQ8EjVAurddp4gHRY4uQ27wwKcPnEJY3quXBhYNk4",
  "key26": "3rLvDN5bmyNJavHs8ErvR9MCqxF66LPD5GqPup79uQKutBiSUEfJSFj4UiRqUrQsmkEZGEc1XNN9d4tpkAtMNXos",
  "key27": "338AcXmMiEdGjRSZRH2kNBX2mXMz2WJpbgk5WG4uLuscD2maRpPa6LPFbigw1rDSdrZC991vu9wcMWRnhgF9gK1e",
  "key28": "3W4ZPRQfX4h8PRhrU41qKE4ub1g6Age2byuncodGPpwYDg9jLVPu6GHHwcU7RuztgYpYgpAjXDLsAKVTQ1MHG4PP",
  "key29": "4P3wX4zPHtHivXbMHvy8QX42B85EXBFcC1eS4Qb59cNigJfuNRCbKnjRWyjxa2fjusHBwnYabUckkWujziZ5wiTF",
  "key30": "4qjeXfbtSJSHr9StLET1qncUE4BSt9XJZvinjMBtfJp848j8aVP4nquGJp3SYX3eXQmxqDAUJL7DjoLSZCAGTW9B",
  "key31": "3uALsqmwz1gmagP7RCFnqExUHvrsGTRvADxVM2U3oauuK6NE5g1pPcG5nSRdmARkUWayrSJ9ZvJoDCX9xUD1MSpQ",
  "key32": "tWf3fenn9138Papf5StTq9TsiB5y5QW9LKpYoerHNjKdrWpjJEiDqZ5sDWjnSPLoxkXm8fB5A13e2tEabvjLpte",
  "key33": "5rTHvi8NyncR2qbifk4shF8wkk9mdkqmsambL2sf1SRJF9Rn2zTEmFnTNUZiPg3AJ4KegxyQCHcYFF65ZZ2FNAfM",
  "key34": "5a9SuLqy7zmgT6u1ERf2MRp6aU9vtPpczwWd9maZZUtkVDKNLRwaBjdCgKqH2V3GxmksKwGyxk4ME1wgcjrANjQj",
  "key35": "KQLcDZHgAwAJMyNkRtxZEnXTmXBbMJnPseARmZtEKGH3HFcgVXPx4AmMqEFKTDuQCSUP4UoF47V1et2NZvES5Ei",
  "key36": "RWn9krtkJbwGr15FbUfiGHwXKs45TRvWrjybR2Z8Lv96GV5A89mMYWo1A6MGkFPoJEFheKSqJVBdz5jUA3RGP7U",
  "key37": "3UazNH1D95hu3GtWnSP5UVQ5JfFG2z43jLGJPh3daCoror1VXrEQXuArQ42nybiYdNfXKE1Sufgy4yE3ZX8vk34Z",
  "key38": "5Srg3wPLvLQRdCazEP8JomDquzucEzqXCnbUVs7taGWhzZafJgkk4WTM1H8yFeTYa735WHwk263Ub7myRWKb2jdp",
  "key39": "2QwdmTH47qkgFQJ2Cnq2mNrb5JDCzWGqAMuwzkL29nxBbLyz4obXpF6tj699rQuN8rx6VNd63goSBvEbZxTMoe3M",
  "key40": "65P9wo5TVVpzsiab1vig65VsqaJdXuwMgWh4dkZNbtmmqjaj9FiXVHJuv6H7KrQVauQrY5Hkh1Qo1mLH1i7MAG1V",
  "key41": "4B1sKyKKGnLXb6HdQuk89PDq8T8KVewEwdBoNNecAqeVTaEyvpCwC9SGxb4akytaUPrXrRomfXmJHzuX8T2DsjBg",
  "key42": "4yChTzDeVwe9mPnRRrd5peEJ1hgMdCH7dguAyyckYNXMNPWSYyFcTwaKNiTJus1gASU632ZnYF6XpaZFKfmubsE1",
  "key43": "24RFQzzzTy8RHp8B4JQVU4MYSmNWYBZbiwytQpYpE5v4GCAATBTWzUoT17Gy22HBpxQigUP6RXF52p3iTvWY1gWx",
  "key44": "5fc4e9iRpo5jNzn9qgZ3aPpGbSxZFvqjBPN5ehYUt8iR2zqadAWsQuFUUYNZ1hNiCdStYcMaNWnY993VL3xUNgYJ",
  "key45": "2FnSLkSLbeDsRVfXKP57pEAnqS5TwNQR2c9TV7Hcgr5ciFLLK1y3B5t93FfyxCxoJBFY13ZJNnYMDkvwqFEScRGd",
  "key46": "5ufE3TkJdJBRNc6Tz2H2b8byz3YaEQb654Gh1aYjrH9ttMuKfct1tufYqsBmnSMcQCn6pAY9trwqJDApJwX2bPbS",
  "key47": "2jQm4sPDAJxmZAAEsgEm2gFCEzndsqViNxMe93z16Ut18PhL73oHpaP8QyGQ8oFgXHroMKMppHA25awcRTvkCUPY",
  "key48": "3KZawkzWs2TLaZbK7xSt1bzR6tcU531BN3U6AGtGhwkfBrLiqB9Lnoo9eiMPe4oENZMCs9WyMeWNdJrwsFEnxqxd"
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
