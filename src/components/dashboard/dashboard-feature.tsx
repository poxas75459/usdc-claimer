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
    "5zPyd9YUU3y4TVLort4tzDYJMa5qENFZpjRTK2n72RC3UW2HEGr98qhvmpRpRnx14tuVouehizZuMSCBq8kQGcmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QimjGS6PQxGMNef87ZpePMtV2rQ3a7p5kpn7Qgwd3VVc8RG94VrsATDzJ6HnUYBhg3yPbLoKsG4fNvZtoct9EQr",
  "key1": "DCpn3Gkxzf1JuRfBFcm2tpdbt5ZcLRxGuHBazjX5qCWSYnYjUqL99A5mM1AzMw9SxmqCrzWSM4dfC9khgT4h6uY",
  "key2": "3KqJAY3amioe8fFtAiofjg5vs21ocTJodGDQBMNGVVrQKQ7eF3YLjHsV8CmbpUQFskgnz2NtjgCnQr8TJEEFqgBs",
  "key3": "5XTAGWcAdzuBLxNSsr6xkVp8T4vojDmRcVFwAhrx77u3bWCaKv4bye1NJnDe6Qxng3mfknanCAxFTu1teGHHNr7r",
  "key4": "skQx68Y8CAkmAY1VmJ3cV9LWeo5E23RejL318g6SRF3tqR6gf37byAifsKCdKefRVx7ahvVVgkJYexy7YM4RVv8",
  "key5": "38X3suxM6spNheJTBRMjbDJnWQbgw33cKutV4xAN6kAG6BXkogzCnMKmYbsVby57RDEh69hFyoNUrVtjKuyhYwRk",
  "key6": "2Nor9MEAUuTFKpQ2cSkLfehPKwRqgPsp4Bur5LJB3X7b3tc7m54uVZhPFhbeye7cX6yxSt7mECp61ZCoNRkXmEBH",
  "key7": "5sqZBxv6zT4rQuyR3deHQ46JLwm38UADU8PxFoDw4CewKt5Wqf2WKf8pUibpc345ZNbMwmG5LXujQGMrfzg9bdf4",
  "key8": "46AZ8ho4QrU8TifixuxV5Fn7opvUjw3F8aNTbfoG4sb6QdFwZxJGLSWigoeYxVgdYbLYMtMn8XBQGhuehC3Mikyq",
  "key9": "4XKzr16iF3eXQ47VXmUztazCa3FZh3QKUZxU15jjEf13CiGJy4fxbVL9GiLuYV8bBmF5TjQTTXb6wRjksosxt3K5",
  "key10": "2SmngbYrQ3o97HWWFwN2AL3DvYCXHg8AAu32TemRrYeBCaZr9Wupjupb1ZG7UhVEXWEyvzWryD9AihFbXph5akU9",
  "key11": "2d79bzciCVhFxWmpgnU4uVkiJ9Gy8rmxz5aa21mhk5HiuXQGYihJcuxmRQHM8CuE37gn13NC6JoMRgtULwxFgQxf",
  "key12": "3BmBApcqGhrnz6CWUj3dN5QKKa87ECuJJJ8SFgpMABWenVXd7WkuCRhid6D2xhyEjzzNL9UUmYtg7yFuRTmSHwCB",
  "key13": "5KAV7zZfxKYbNVXxzzBTijue7AhNkfqbjgPbHvbBkg9JPFWjkas9LZQNox4Af481WwbEGLaWb39cxGju6pxBJ4xV",
  "key14": "5Lemtme3iTBXhRcAXTNBDPhHWzFxzG34H1untBP7jQ3eHoP8T9eHhVtdBPLAAQ84WgUWqLC5CKJu5QnjNAXbANs6",
  "key15": "4Vwq9PeZALgU1gEKQXR1jbbiXyYCRzZnfkb4ryYvinvDw7tt2bPQxppqEtiQnkJWKF8gWgne278PEwQdmAaTThkx",
  "key16": "5CUUAVw3fwfp7Bps17WguJumM8Bpfx6gA5G2x4HPxCJAbHaqP6QBFx7fRupdn3LUed8akNWqwqKGgZgFM38wF4Pn",
  "key17": "2npMNSbnTc5oKzRYkRr54f8rZhW4Rar9NYsS1Da8mw4SZYMmAwCcUmv93dp4EWCvs662NxdS8DKfw4JWS1AwUq2P",
  "key18": "58YMmPQ5aDN27vif4Jx2C4R71SWozyu6GExxd6UmGzRZcnPGUtf1kUa5GKsL8x4oebb55FVbN722TX8dLjzuw6Vp",
  "key19": "DaAMk9Ar7v4yig6BeMf3D6PKs3wQxFyCofbwnt8yxtUWxSU5LDMBsDkTdLZDiFbHfFsCChTHJo22PWwW9sFxKv1",
  "key20": "JLVT2kRy2SC5mWcsyoEQAZtuA1ZPaUDw8xF36ouqSThH4RXBD6ycaT3iTskZDcuvzkwQnqJrqepCKzM4MwQrJN7",
  "key21": "56EbfaZwK2m9emMiiZnUFvi58PJwyp7a33anstrapigpfYpaj8jYqbuY361fk9N5BMTHKwyDLXLzwFTBAsThLjBx",
  "key22": "dozdKop36M3j7nBr6tr1BeVQBiDq7JJuzsjkHfq2EjtB3GKUH86bMFqgPX1Xmc7g449n15gCDFhnPXgs3w5RMwU",
  "key23": "5nTcUeWUSCpfZApMFZ2sHfMzUA37QVs8KTLDYsSZLWeyMPXBHf2tyKDKQoE9AVfQj6wFq2AzF9NsNZ5AU2ZxBX9m",
  "key24": "4Xk13fpuZXuK2BQcpm3zcpoV1dcouiTABuDvLdt9596tr6FcPaA6apbWawYyMRnMCNqmAbNdWjZMf3mECjtRLNhF",
  "key25": "2wNQN5KQyGqcs9ELbxQhsHs1CN1toc6VEUTKL7NukZiFkMP8ePBKN731Dy9mDdDUd34WhU4s7KDvcCwdwEpUuL6p",
  "key26": "si3wEce5eHouoqnxP3xi7stL2e9r11nZqrwRig9eBSfhJBiDQqvj3wHX5GYpAFN9A4FfnVQzs7dFuYZyWmofB2K",
  "key27": "5NARaGwi6e4SZD5q2sbYSyp2BWpNTfN4BYrDTbHD9nig4Yuj4Dk6eTbvYtfCdN3KkBzZ6evG9qAoZy1wdsGyA8EW",
  "key28": "7N49A1w6onr925SrDoegJWLKAsXttaixYoDcgp8U47kjH4m88hivUsf5DmtXhkMQ7oXkHWCaqKczbzKkGuQ6LWr",
  "key29": "5Uv3R6tj83QjdeAGBi73uN6Ha1gg5dn1dXaHznT7CwwcGuj6woRBdZeQ3FTdmfV1Yg6ULwxjtrs8Sr89vG5xqA2Q",
  "key30": "5m7VRVsJmkVZsE8aoXQGb87cUJEiMK8ttEPygtDJKryFECz2v8rbzAMyV8HvwAGAZ3dVEFrEK7jBTBrRqZyLHmyr",
  "key31": "2QU28KR3GGoPR1xmKQgZHvv5Xz1WPNNDXUwEiae14c5drLwFVg8nZtcJbC7PfhfPwrvSe1WFMG1uVyZYutAekgxY",
  "key32": "5iLn2PRtuEn8yjZkqvCcwPBWRupA8owgcMXnb8nDienubU6XTvmTHrGF1FTCqTtUNDiDVD3NbEtQcBPB6JnFnppv",
  "key33": "5ujqyAEWiRioCb7xD9gfNdPkSzCiDkuyT5NwpoGNbxzZmaXrJLkUdwzzRp5iRHguhraBgtZiVk5p5rjq5XZjMVgs"
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
