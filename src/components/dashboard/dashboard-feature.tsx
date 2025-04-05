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
    "2KyanWdTYcDoEPtbrSMKRsiBLch1cBgKSnSBrBSFFPSENyEARXaPBtWfUCxMQHpyKpwC6WygUjEPpCLxjNxz37Jg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u7JUR2aSY6ygdgbzALh9raB1eqJXYUiq2NAwwn7n2si2xyWiBPs9P5SCcHN3hnwhwbigHi9iBjuSG8G4vuPs3LG",
  "key1": "33ZHwtBMGULdxVezdemrJ3PN1V4aicCAdRHZKXvnSqqbM8eU8g6puBQmU6tDAUE9ct1CBBMuVWjkeJ4o3DTMMUey",
  "key2": "2QmCpdq87iKBBs9PCAGWnnrXnNw1PWBMPZbLSBaASrMgFygqqprW79i4u8aeDNQEa7jziXrLas2vHcYa87v5aDyH",
  "key3": "4AgKopacVrd8NLYVrsPQRX997rJ3b645hc8gWsKXGEMyp8ePLwayk1vjXMCtE5TtTj3NCyqHoXYZqPE2PF2MVvKx",
  "key4": "XF2EpgnUpkPi2S2q9YfFXHL4xigETf458XALaSe4Shgvi85zGsVTQbBDDcfhsEPJ2LHYRu7t5eronkGrv9dB1NQ",
  "key5": "2mxCQfamVWGzsKn7Tk3wF3zdgLy2kDbam8Q16rvS2NyCPEiwTUVM12i9basqpna1BxDChi4KAn8Rh8wRJf8wh3ZQ",
  "key6": "4q9m2zT6DrzomzTVV1oh33dLD4pxdxQVc9wnsno7aDZgNXKeLVbapVXxvA8Jrvk43CgbDRXGmmGU6HArg8Bfsq6p",
  "key7": "5nWfxPaB5vhteRQx1JwrFyXmJcguNcEL7E29b7SYrz5BJVPe5gqYLXq5Q6z3pzK6ryWH1XfuPyGfDVcX5WM7hYv9",
  "key8": "3Pa7LmKJkvTqMb4qb8RLNkjYsJXuS74yhtq4BejzvkNkU27zyxF8Vwf9Jc3eHLWXif2xFny5q1EKdXKSLGew6z6r",
  "key9": "qfrQif3FQzmSid9ozK2XRcC3HqEYWUm9uw1bzJ67GrQx4S7N4uo8uZbWPSrcGX1poFQViF4caJ4L5WJoEnvNBDV",
  "key10": "56zcM1CneK7TTxTyoS5fRagTopQLgbQoM8FP3avQ3wErU8WJ9gPiX8RupevMTUFnuNsUSpvfFyVfwy4hPm9d7G7F",
  "key11": "5WBTjdZnPk6kcbxDkRPKhJ7KpYj1qjfKtYoXpJ79Ss41mBPUCZ7GWcjnz9DmUxrVTn6KgHoajPfFmW2y2BqN5YsB",
  "key12": "3Sg2v494uv9Jz5DoL6K179KhmzuWyXBPwJZbPFayVFAEmZMipmWcbaGHDDZNJ8MpGA98tQttRVKQz3nWZ5Gs3CQf",
  "key13": "5yPpCSVJp5cLtjAp95fRn1Mo7VuxfKUExXC9GVW9zwX2mx6euAmfzfJMMsW1PvCL7sYKTzQr8Ea43Ux52z7tZj6y",
  "key14": "4d7eYC5TjUJcKA6jLXgZYXn73i6zeX1VeCg77sM6RGHjyXexXCmjBagSNL69x38smPUyatzKucmmkj87HvUQczcr",
  "key15": "3rbmKGLb27LCc8W7Z9cCMEwNuoQfemjCQ78ytFDQrypDWpjaS8odDCfeZh5MKRbGh61JM5FnuvDHNXbqDqVbpnpz",
  "key16": "2sgXF4DAapM4tNbju6DaeS8r58yH7vsUyZbhbZWqrHSJxDacjGP9JwMEaf7tJsmXCr4PupRmUZCg3YkqaiakfhY2",
  "key17": "rsV9WEAnF2mVVjX5S547JYNRZ4QdcW7SzRPGue49qqrKkYJEMJejk9gAeh82ZKwvgtjkNLT9PpiKMCHNjGeH4vF",
  "key18": "3baJd9sHbiuN1TkPN4FwztB6huBLZowK4i7RzqYudbU5RNazfwJwsT2vgiXBt3fZfbPG95p8pw3887zbR25kShty",
  "key19": "54vxv2PY9HYYQL3b8c7Eq3dEsNG1cGasGHFkvk4ReBRjNLtNDQpod1qKHtWFdcsKL5nBdZt5rXC8rN3Vfg396Bro",
  "key20": "2VDZ4KysxHZm6REFf5DLb9aWkuW2by58wxaC3BZZSgcUvUwX6VmxJcKUmmEY7uMUdvdGRE4yWo481WQPC9hDoPua",
  "key21": "4Hy3VQiYy6HvjZsJM36WWtF3Z9uM2kKPDab43UcpPaQxWGrwLoShivWZxkB4U94aErKgijnNHCtXwiWixLC91vJW",
  "key22": "5dDpNKrDH3bJaWuPiwQDepHbAKd8toPLNACK2tu4iWCjwKgueU4sVUsDTBa4BAVTYQeDiE65PLoteCy4UuU4Hnib",
  "key23": "5FB9BHzfLZF3jVWzogHQoVD5huU7hbDbhhLN3bZa9UBH9P1ZtDqpEjaMHPn4pHKo4YJXfMH2UBSfXpUuRGDZ6aNv",
  "key24": "3HYR12eiDUpNKmh5McDeKmuaz9WgHttg6xumeYsf6NzH2RTa1sgFd56wJDPbhYHvuv462aPQp3c18ayUSpYvXA57",
  "key25": "4avj4JFD4Rp9xSTE6gCJ2BVWYELM4aTAZSXJXYUtmBYSKs7mAePfvUfx8GDfer35XQJA1cqg5b1pKwKQ3S6nmjiS",
  "key26": "9YxAGHLHL1URxmUtALkJJc1zzUC78CR9raHBZsqGod8PswYDXSmQSDoHPY3BuMuCj34zeTMYB75HJpu2zVD7xQ6",
  "key27": "o2kqT7tmq942uiRZJEzEVkcpKnWoXzSKvXFc7tZZaGCSCy3soKFB8yorXV1pkjWojYSMgrRBgcVtCGBNiYEBWEU",
  "key28": "4C57xjrBkA5cNwg8MRyibnJxwz7Vdc14wV9nmX8V3g39N1p9rSeW2SeT5LmfXvniLYLZcD9a1KVBhimgoySpbXXq",
  "key29": "jNyVJR7ZtL6A1CrWfn9immZsLhfTuvdXxYsdZEaZtVTbi2vb9Gxsm6rFNqbmCH5WKUoh5HWcrtsVatrXjNWZXzR",
  "key30": "5EWGc7p7qnbbxcN1S1o5nYk11GQUYEUDSKSswGYSqkHJPGFzU1Djdd6DvgWae3HHTvtPsUgU3cvFNCoV9imqZfDj",
  "key31": "2pYkBnpBGnQmzfcBSJdGRu6QWXhZpCnp7rxTf93DfGj3n5wj1P6DerPkJiJWEB61vRcC7XrJ2jnSAvsSUdKt3HRW",
  "key32": "2KWd4XyMgtw7Ro2CGDdNVnTdNSGzg1eEcgzkfrTabhZEW2JMCjJ8mkPwf5opD2shQ793VJWxwxE1H7ZaAXNDXHrf",
  "key33": "4C4VSCpmn31Uvqg2xcq7eXWeoo654BdUJYdvedJtanW5R5iPaHJbr7TuZP9qZPnScymbpmYE6AwCqQxUf4k7uYfU",
  "key34": "4rWMbmDrjffyNqSVgG9DxdV8bXxbjkMQ7mZ5GeJLtdaww6bHD16obgacgEC1GzXDQDzFXtqHyvkatG8nd3Ac7HXf",
  "key35": "2rfsmcDA9G6mwsQUZMi8uufyvdyJzSAtcLdVZRxNXD3gJRsieJppwoPKS5sANWSySdkTL3w6rqAmjWNUZFd5Fp9r",
  "key36": "3n5KnFURZaqUYNy35RAX8e48Stj3HkKTcfMuDkmx1sG8oKjUaUfjuFHqoLXb3iUdMiGWcFhVHCTTYxz3DcT4eNc5",
  "key37": "5a2mx2m1HZFgBwYJeWshZdtgyrf3PKXQ9zadRgfDyp2dcJunnennH6oGMCKVvMLWwGzXknEPB9nfPhAYG9LNXxcp",
  "key38": "5qLBQ1Rt4JGswQay4KawCEZnzv5EfNpTTcLQ2erobGBxnm9DKAK6AFpy9tqHVB9WCryKNpopqQ42ADgxnde7hnnG",
  "key39": "2oDoaDvaFX8VcAB3nSi3jEbgEDymSyotKrBRywt1ykh2qDuwmGRpXDzw6m4sxENQfc859cUnFcCyRhRweijZSN31",
  "key40": "kxEhhULxz16ojVewgun6qtu5gdKWdgE1WKPJ8przjmouPaKiHPZNNCFbfc29zrzwxz9mb7mQuu22VPPRXXhDtLx",
  "key41": "1wPqaPYqxrhU6Sx7q5DZxQGmXoRdvAokRLz9bHXaB9jArxSf1dQgFBXKP91zCKH89CkfXC565txeE9YViJbNsg7"
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
