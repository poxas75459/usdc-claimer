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
    "22VKFYEq3jmhyVMcwWyCsU8ujf5xXjXBX6M8gYtHay7SjRbQSmJ2SVtsCNVSDFZnVyaWVNAiJJQ31M3jWBom8gSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L8oHfg6Q8AEY6VuPpeA72sto3YpoWUQStzy4qE3SBxB6D9ccy9AoAJxVyntuQN3i2PkxDmp3sXxrSLvtdjzThPG",
  "key1": "3cS9eFGAbnKjkWLCS3qwMPncsBnpWcbo4rqaMD8s9SHmZNYjaWRrfcReq4Px5EpHicdfFZ4VxPe8z5waBTXuAEmB",
  "key2": "3fYuLyf4m4SUV3effpGJGwSqH9o8PuciXyXiztL5VEdNUNUg5z5QcZG5XA31FGEvUWcLN5LwWFfPEhTS9iB95pEf",
  "key3": "2qHQQoUtEJvocx4ajXwZi1yU6NwoBCPazHwVUPg9Ar3xC37Pajs7EnkH4x13SFYMocXdArttdxMbx3LuastMGu1P",
  "key4": "3puZfnYQ8ZwaK8fRX3cjLDeRv1sdfmzSjgP6Pqdy8KQeBS1L9rHEFHekZchZngiLgSKKRNPzMrMDDEjdooNywKb",
  "key5": "5m2jHJcFgFkpCw42XJriwDgMQoecr7LhN9axkdrzM6okC6a4hZ195hGDzu2fCx3RoE84mUSXoE8gZ3typH91zMnm",
  "key6": "3PWeUdPPBM8wFAGudZ5JrEAyN9Ea3kSFnpY5iGRdAWhcpTxDr5sVapGwNaScz3ibEVAwJBpdWpDrhkaeY32JxYZX",
  "key7": "5ss2f7cSghwGgDSd2pSFKSpbHqKrtMCNsQCqkHCjzc4nAHJbUU6jw73uQYW24pYfn8SPTSSaPqSBvES3WGgErreh",
  "key8": "2FnppqC928XunDqQTu48TBvqi5VTZzUL1Lkcvau6JH72eD2vQ1tadC1ogXc33SvAsJR9wF5SicvuxQnzxYh9Vdmw",
  "key9": "5PSUPFBHeUGMhqvMTQSoWXNZudz4sCMTDVnjDMMA1jr8b4tYGpsNQ1njvjhdktWzRbs2P7td8f6abfCjeqVEwYmq",
  "key10": "4PKkyKQ9Pysb5abdk65oc1JxekMT26gq7RiMysPkkipr6XoBBsTJwTN88mP2Ybu5xjTPfqQjhY3sWLicK5b7rwhX",
  "key11": "5MmNREmKnzQbf8zm4KPFBT5jn4gPaYnoum4ReJTTuLKsR4GbjQkCiCqA4UnjQSsC5GAMzXxVZ36cvyP5uWyp5zzu",
  "key12": "5XDwKHQGpZZCfwL6Fn59hP1RWz9RXjCZBePFTYU74vykttGkdFFCVToKD4Qvxo2U7nYrCjCbd8PNGpbfs42msxYY",
  "key13": "26pp6FGS8vAjhqxmoYC9aVXe7PnF5LNcJmJetv4XMhdbJgsscsBqGXPJPndPKEAGbBRWpYKFKyv8rHGyStEbZZg7",
  "key14": "4GEE7W51fVkNxKMQhhwXNoqFeU7DaPhe8zrWC5AaieWhbJesEAp4LGSeCdniHhsEpb7gdmNmBomsfgh6pHY4W4cR",
  "key15": "2vuFF2k2n2Jwye6ojCJfJHuzxPfJxhqiZgsM8wusm7oeyn1ZHKJCmhcaL12wA9uUXdTjUyzRoVbhADs8PUX49Rfo",
  "key16": "3Hixnw2pJ4Dn51roRyAABMmbsoP9MD6Zqp4z7JVe3a6wAaUD3XyKQhGvDAomBw9dtD5LutczW9bzsv6a5i7tmax3",
  "key17": "5sDzBH8vPhirg6GCpYu561nnTE9Lu8Pbty6VNsvvNYT68pZ5eRjt25ThgK7m4hPX7fGN44n89sLhcTSe4CHnWdx",
  "key18": "3AeYKMffL9gQh3pWAGxUSYWnQjRbD2GqcssyTKaa88tEkAdnEK5j3nK6i8RM2f6MZe4rcvtm56xi8wSrQLESvtDQ",
  "key19": "3qXQTRCEtmbrN1XMQvXCKyHZ6bzwouUPnBaGPxYf4UxTYvkmhQJbkKrriD6u9eVLZ1bMsiQoTmcxqpeVCJY1PpAt",
  "key20": "5grBMPXZKwLTjivgNrRfcWsAZN7Q6ZZqTt1pZCvMzyiG9jWcNr7SmNRNK3QbU9gFABQndGLP2SYhf1JVggJh9nXA",
  "key21": "4np3JqZBd14Dz6KBxWDgwadj7KxrKywq1zXFAjbuTvpzcsLWWiXTZJciynKKzNVJmrqDtLdkZPbyAXD8sybGaQHa",
  "key22": "65WVxciLCAHnLWYLi9iZ2XFG8zsZ7mXA8UtaJDznF52ZpBj2SNbCm8XHW3TM97bhfFEmDvCnU2YkAotG4go38e4S",
  "key23": "S12xKchgWF77bxApqsFdJAf5gxZEyykxiwAPSwNdcRMLRrwHXU9AbqaTGiSvUyyokUM3fQ8vYEQV8ugEJWtHK2L",
  "key24": "29523cR8caMy5X6V9jkzYgoCWyjKG1gwr5z2XKAM1y44tkGuXfUqM4gouo6YNFHtnreXqNaqnoaZstbwgNA8XnA4",
  "key25": "2NNbQ6oyfNHfKpLuCHszN2egcuRHuemMSiDHVXPEZJSHjopHgQ8jSCEMNjEZKF7sPx7bkS3YSFLXSVRJyZwLebig",
  "key26": "5cSmM2eSMqrJSdxLwpz3H1BJfx4u1eBp6fBLqFi8azhdMTTVovpCppQnFiNmegtWRK1Lhf1aDHpt5W71Ug6rmH69",
  "key27": "3ugym6jiMGMFoTPpZfTa19SQMRrs3nqieEZpH5BLN4UY2CLeWddAxV1i9onXKdFFr2XzbPVcmgnwEShnFruSNZ6r",
  "key28": "2vWigbjgfpoRnmp2pzm57qEzXa4nE2FxquUSw1GDbNk3hsYyXsTrZSCazqKt3bC3ibz4Hfu8v1A89MwW1KCe17JE",
  "key29": "4mmHahmCccNFMXXqWMY7WGN6JsfQGxBYwqxEkRywZW95y6AiyQswDs8PfpfzSshN758Cwcq5mSrbgk9VFDk6nPUd",
  "key30": "NtCeLAmA1ekcCsRBJjynGjyW8ghqpNtnHEqhhaHnWrUszxhDco9EZmRc7ErjPtq5ZcaESt9GZdCWomUbwK5CWsn",
  "key31": "4i24gcUZGteDjgftXL2h3ccFNU5p9Zoa76k5FEM9VwcqjQpnAjw5T2dGZNQTr1QkJgc1umKaTfeoL26LF1SDxDgH",
  "key32": "34Vg5udKDKwyQ9Z9DhQNtehAPemQNWT1M5YZD44RR9ZFRJNmnyxjQMzxFQZo6oAM4YXjdvyXUweuJoSKHKCEjKWw",
  "key33": "3FmwMqATaxuSPcY2cewbsubybxTJyUca2UdXXk6exsFCvQX7AUsoLuzZmFWVzYJ9htEr8RPfi3937b8AVyFtB8pq",
  "key34": "3zSFxaxvixBQjkapuktQwsciBepeeZohoJWBVdchf5gzEVyrw6MsS6ErhR69SiLmEaPw8sRqLBVRm4y4B92cs8xu",
  "key35": "26epBAfXuWEAHaaWStARzYSit8HtS5bXb47kD4xiacR7re4vEwBKyACUQNNNC41XGgfr1TGKyagf1ZxfNHbpkZ4V",
  "key36": "58UNAPUnQnhtbuXf57NkAFwzo365nkMorNNQFAmX1oksgoKajj2qb34XmydzZeZF5Z6U2jDHKvy51wpiZVx456GA",
  "key37": "2i2otAHsebDcQF4eCDRujfS3rUWFfg732oZ7a3eET4EbQq8QBxPSp1uyhnY7pyz6S3CVBeqMQzx5eSBmToZL5qTF",
  "key38": "59j77MZccbnwda1v1S7YxxHdGz2s91ijTmZsnTwDMv2r8CKNnuHnPsGFLsJ17btmGZM3MU5XZUjUzniEG66dS2nC",
  "key39": "5biTmirwyZBAKtdRUoJVDinxfnt92Be1BPeMjeWjBTbfQ5VbJqU6uowDaWz9FTCjxnfZ3MU3mwJKJMEEPwGokR3W",
  "key40": "4WNVht4Sba5PU7ieMLdaSSV1MwmdDsvGamEzufouUTanh87DjQCxcme4aAs96uoMhNYXLoW4fE4fBPMagMqyvwtc",
  "key41": "3TEJP3bVNwGqtmi9Dg71UZd1rbyQVdstEAuC9wHiYa2cDcXFTCgQrheyKcEh5md7KDSrYLGd2Zs3eJuv9rUxLzW2",
  "key42": "5Pu5MBACZL9Ko66DnMJYTaL98nP27pwB3uxPwu1BnE4v8SZwJHA2kL13LdfQFStrpvuPFVCUvgqxb1GGy7S4eUj4",
  "key43": "3KHCp5q9c4wrduyGTUhqAgLmCvu2donxENDi38Y4RW2ouuWVg9Qt8z8E2GwnSyHWbqSLLWUVmFWc6cwvfn89sD3r",
  "key44": "4QexZKizBp2ttXYe4TevQEwnPAw7rEXuRRPDagSd2bVK5RDyihHCnARP9g7NrCKZFDAqyDJPvpd8zoUshSsVqx8n",
  "key45": "2zxNey3y2nCXFA6CQrRF5gwxUkXtFeLsfxezr5Po64VG8GgjQzYEwts61ZhbqbVktGzwtoLwsT9kB9Gg3GXtLWmL",
  "key46": "4Y1cjs1N9qQD2GNuYY6fQknH3oGSP7hNuXaSHD8GAtrk2tE8bpFgJ3FSTNAqTw6StMYukK6dcEoQdbJ9byeGtbet",
  "key47": "z8aqg5m3DcgcahofH7JC72B3XvQKRCEca9anubZZEqQRwppQGpPx92rNB3biSy7MR4zyMeFKZAp266yXDv4JqF3",
  "key48": "4rZg4XQWMd3YhqLaWjPGwjgrioj4zvFA81KKMDYwWkkYkre54s5PvWbQxLpn82BJJxhrrajbKzZL8uBhJgoJDapa",
  "key49": "5Cj41aw1z2rqgmAezD8p3Byqgwi2mtxmrZGBJz39s4ScbXXe5vKhs2TWiHwAWqt8AAhVHxEzdSfMXCLgJvP6FXV8"
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
