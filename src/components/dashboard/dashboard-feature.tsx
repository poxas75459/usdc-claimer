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
    "5H7kHtuVFwhH4rmVdnQbtzLqgZPWDdc6CQwvMYrxrxHG6JEibpUcfeatfXPVt5K8k9mtud7bxCjQMoikDveTTJxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ytk5ZMCcx2dCFqxMgmxtBzL7xfdog4CXuF4iemNVkpMKn8JhC8jxvoh5BsJ1UZmZ3Em4yGYAtP7U8b2ASCX3hfZ",
  "key1": "4kcU1y7msv24WMdXHMtcSB8amKNgb5bTHWv8vvouZjgtTyejbCJQrmg57gcnAFCz9A7zMbzF7M5dQ5tvLMhmRa2L",
  "key2": "53Vfinhd3AztF18eY4zXXiKXAaPd4YpRetqsTXGfFgK3kujnqWGxhfg4DskbCTt5wq4r57KoYR6yctAGSoW9aJSF",
  "key3": "4TyMD8VtpaEkUKfqwsrhT8gtnJCm7T5xj63fd2Kv8kVTgYxVcdrMMsgqdfeKNMfB8zsUxJgZdSA3yfgjw4RdzZn6",
  "key4": "3mcTQr1J1qVEmdaze68HgF9LqGnSB22HYubXG7nqp86MnbZbkrvVcCxy63djbSsweLRNdpLThf1efivyrcLXwZN7",
  "key5": "2DQxsqmUyWC4GhzsKc4RAtzpzA2ZqbCjUsDmsDoWzVGSEQLBqowXAom7NF9r9AykrE8GVZBcyrmRfjwygf6mKsPx",
  "key6": "4wBy27vub2t1ertBfzmiSZuR2ZBGcxPEfL7h5Heu6VCX5K6KwjMrDSSNXueDTxqznJNkBGXmESkisLMdirRxNG7H",
  "key7": "3ko6Xz6Mk2ntSKwzzaYo4KzEtRUwv92q2N8AMqgd1Q9b6zYFbnhRCKGPXJokbizVREZeGhtNftBkbYyHbxYg3AJh",
  "key8": "fBuR2oTjFPAoBwtYdX22aApuPM34gZcNS8cwTtVsYt4MLpDHw51adaTiVfHEXWxaUFxr3NmkcZuxQHPd78PESyy",
  "key9": "3MiVRgxNbdcK22i6L3i8miyjZWoZHLezfv2yzYY2cZ4br36fBMgM2uob2Bcr9MLEBHTdzHZLNRQ5b9W4XL1U3uyV",
  "key10": "2BnPfHJMJVi2KisouoBxYqqJcx5CioZtMkCasBhmMqP32RcbEpXYGLvFQZ95xnVnG5KghnJJRZZDAjNV3iXbgQNR",
  "key11": "2D31HDZB2Dh2tKHju1S9mNhzJtWd4dH81eV8m5YuAdRruqYDEn9MVQ2ABzT32jgWwhRhLg8ags56Bgi89w2EFxVL",
  "key12": "5LbLDue7yMHtdv8z6BiRkWDamxfsNX8eZ26e7JwibED2qdaa8njRcKJguNNK9ZR7r4dg4Y9KzeyNLWdhLkDNdguk",
  "key13": "2MUzrDbagj3SVqqszr7CBdHVbqMzCvToEUEN5vEHc17JTsF6J1DBgshxDyvKEH9UhSTFpp2Zy41FAyoDSDFydgVX",
  "key14": "BfmMETAxGKKqFaB4mQUgwwv358C53SKb6pDjcNg9aZ2bk81uqewZEKf8cyTy3DLDdX5mds8NX8Mp1zDeaaGX2te",
  "key15": "3qPccioyXqQY5nUiwD1P4HdxVj7VApyQvJMBXVA4kU2Wr6TLCbsZLWuz8r48caK6eqghksrXFbNHds2hD2G9FUcq",
  "key16": "3TgjCzsZN4NPfC3gQX4KZsmpDEKZayq3CDDFjGHEp2KN3QwbuNY6ysP7sptMijbRNWhmd2zx3Vvx1LSqUiobBUdd",
  "key17": "4BG1pCfN61SG9SfMM1Lu6xxqwfTsDuHsXeo8VDxA8Zxjf6E5Yr6G8Ps2BXKod6XXbA7KQzQqy84DUPnqUhhSXFhw",
  "key18": "3xXwB7Qcfp6JH8or1Pb8cErVFnZC3E1VEEBoVyFNJidPeW5TGJg5VqJRcY2JbM66hjnVDeTHADGBiFzCfXBYw7ni",
  "key19": "3ApLigBRSMZKhcZ38yLgQ6NWHUVhuvjXQrFjJY1qCsRj8CJBWJpbv5DQ4NUAqRnUegNFSZ3WwadrqjJmPfuXxDVT",
  "key20": "Yd6ka7QWA74Edym7e3irfYUn3kAv64JB5ctw5TZYAPz2aAde49Yb1cRjCiEsqErWQeZT4bU5dFRZc6syCHWUrA2",
  "key21": "4te5z8dPTMaLNg8SQYBEAJ6HaMv6UxAx4ehkthfYjH4Ci4N96UScgaaCUvbTFSgu3yXTziCXny3SGcqcYuwkG1ja",
  "key22": "HcREkm4u7pn593frDthm1VierZNCXHLJq2nnJjTWBhvdaHxVrx4bJiNZTu1WtByq53ZiXqVZiyEyNoVQkRRKqb4",
  "key23": "5puu6XgfS8PkjJDgGRWnrPUYPS1S3bo3SzBDnQdAF1XxsvVbL7RKRejCsKJrUegXYFuCsWnGgTsSYaWZoEtwrP2U",
  "key24": "384vu5RB7tCXHAGcKB11u1RMGFyksBU31yWEcpC6Ftw1vgeM6VUqDafa3VCjuP4dHaEipfxQMXHRZtTEhiTKnLMa",
  "key25": "2tM9Nk8VqL5Kc9ZeJrfo5ZB6vZfRNonCBBU7BSN9wk4rUC63S7EwspZWRGNe7bAyQpNZZgQyQXRSMAtymdtkeDZm",
  "key26": "3diafZigULcWSH1f263yRCWseK1etiFNvKsjCSRoJdSnCHQtfU1xRP3Gxes9pKKKFL1JBjktpVJLatdFZaHfewmt",
  "key27": "5oYE7My7UHhEoNxzda3fF2ZgpDJ3edtf8HMq2dGjhwSKE9k1HiGrYbVJu8Ccc3sgN3vZK5vEFYhtWa3RWKwELSKb",
  "key28": "t5x8HE91wv8aCFVpwGYoMtvd7C3GyKHMyCbTEtiRokAvFbMb8GvVhQzgaiTQM98euvFxpkCJiLn5zJHUfFpnvsx",
  "key29": "64p5E5qruLuc146KEgwiaixprGXoD6gwrSX1VWZYTV5s1GQBXzk93S8ocYqTTRK8KQXC9weUo8RwvVPeMZ66NSYs",
  "key30": "Udeux8VyvaXwQ3XotqAdX5LBU7zMzD3ncYPdFcDmETRwFTgGx4TeewYiqSwTrn5WSoRqwTpT3w4jQE8CgCgeVC1",
  "key31": "2JFpPpapeneEYae9Lw7z5WkrB6SZa1PrdozHCFZv3wVoMnJ9NmD9iaobvmQDxYYJvnNn7CVTjh4D3BX91Z1JFViP",
  "key32": "2xNtd3tRNbvSukfzXhUXZ6PM8VQjgiiWGrPSjwuH1LxU9j3ks1dezD3wKNWEWHaxe6G8aMQzLHEW2m2h2SpVd7Ch",
  "key33": "35U9BpTTeBXVktoPLA5UAeckH5jUbYJ9GDfAHzouG3pyEABDsdmqibgLmFGxX2YFH4wrRbPJmjVehhZ7B8UjLjXV",
  "key34": "22NUPcbtUbGyW6fC2wuQmAjH3AhN6ziFihvma7iKjfvt3mp5ynFfrGk3qxxUXTpv5mWtffZBNunWE4n5gmScbuQU",
  "key35": "2W7WaVCFFsZVNqnckY3d4FWCqGAivDo5M9tFjwgzRaw8HLAND4f4tWqdbxCBPKiabxE6HMNmkxxBWeivE62fPfkM",
  "key36": "38djt8hAaXVeyWQQ33gsodCWjj6qZFvbsJgypagXnm5zcSib2wExBuk19jx8gVEg79yx3suJpwhkns5yJvzjrZi",
  "key37": "owhceGVWqbN219UtbN3akRqbkHYnPFC7ZjCeRvCeZy526GpdY8pXkCSxNoffH7GApCL1T5eeRxcACxYiUyk1N3g",
  "key38": "22TbkURF3FfVARpA3pwH49NpxKUUifSMyRWvCHtPsDLZ49pRFYnxwDDzLMmgsN4gD896VMFmRv3JtCrzAgdEzZm8",
  "key39": "3kVhAi5Vk5NTmWwmbG5XVQ4EjDW6Rg14kCZ5pckdLpypkTBgArpdMstdYJm9x2hKYk1XeRfvoxgiuxrWB6So6WmM",
  "key40": "56wqTgmQkwxYykW58uBnpdBEqtvbVJ8PArBukysCcsnnD8ru7EfPsUnsPghmj2nvEFmD39uMoo6ddupJ8Y9uKWxx",
  "key41": "o4UZdGmtoqkXSa4XPP9zTj2ZFtYbrLWXm9NH8esV7RezWzMRebTtMjCcaB4dm8TcMCfHN46Noao5GpU94uAWQyW",
  "key42": "5dNzqkWsGDWzVCGm8x5DLmAapoYTTWMtmhiZ6nQzCtM9awjcGEqZTzMNEm1YLhMB4RiNxFkhFJpUjT4hT8UtA82E",
  "key43": "iENCHEFWek3SoF1EAs1z5cPGTTb1NHCf1Daybao6es6Zn8ssS2NcDfaGH7jMpc6wr9DiBJeE89zc68UnB1DvoJs",
  "key44": "4yvzE3ErgxMFVFFAT9Qfpa1ersY84mKExN6eBUGc8v7EhbDoE49GbR3W8dNXknUoxFe5UN6Y7nLNtDmVJCConQmV",
  "key45": "5t93B2PsoZu2epKcueh25tTg4MZgjMHBaxvjEG5P3fBqNQq5o65GQP1FmJJv5dc4WYc4V8Bz3r8D5VQnyB6xNFzZ",
  "key46": "2BbJMWhnQDnteMBHQtT63RVL6XebgFN9B6ZS49A1fEfVMZvEgywgJqX1vjN2zHetCvnwcdNh9TToAJVRLudt7pwz",
  "key47": "4WtJMXyBpkPzVpRYJJskgMaCKyPq2AhSZeguYunC415zetgGgjfL63K8egQaj5NZjbetZnUiAHfC2fwRoQEfRX9E"
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
