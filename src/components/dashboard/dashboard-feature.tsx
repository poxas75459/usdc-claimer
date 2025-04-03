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
    "2chyBf3nCkTd51gd4oerdZ9gBT5sm6CJzgvE4jFNiZqDGZC54q8GviZVV5H1UghKnquBKtb9ntFUNPMwFm1fipVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VSJJkprDBbeo7JHTqxGYSYqRGDu1bKpHwdVPkYu2qjkFnbQfUbehsrbMMA1e4RRyRMNvr5DdxFDAnwBDNucsiK",
  "key1": "2vpPRaq1Nxs1YHu7oc7wLM5YPqL3yCvivhaM4pWbJPAtYxhWYwohG7QccbWX1bUZnTrVjGKMrXT222xiLZ3qoYmY",
  "key2": "23P6cTGGHCdhDZBmz7v5UkDKyQnShkpZBytDHwdN8NDYUPQFTQ82MYv3DQ6pnft6ZCioa8FrPX2aBrRoGPSsiJ4i",
  "key3": "4GzqBm5cut4amibD3R1Ds6uqvAYbbsi14NQcK2v8A7ML3W9TZrcp7fqNprNJ2iF2YX5mrjDEFhE52sdNMcdtZdJK",
  "key4": "3GLE5Tze8uE3D3Yyj5YnsnUefRGmsYcTqhxwgEVFeQXjAhBWMDojPjjRFHpBX8xrDziB3osjawPTwqhJnYNr6R24",
  "key5": "3M5jkKtbhpyLDM3zmhQb6ie46RotWDPNGbNsSMRKGhdBf72F2NaXTAocqaRpx4AEqzkdK5mK1uuK4XFDRgFmqc5g",
  "key6": "aGe8jncMXrvuKTYFDwhVrokVnoXNATiQ33fGWZDBAL9GumCERzT7qkVW2yUxckvQPniLZXxmM8cDJhQk3ENgasr",
  "key7": "3hNqV78swffmXoAyrJCsVxUwGXwcRhKWqFVdocJr5UwvnMKS55wjkusBNUN3fTDg55ZF8hSHSVpKxAKKSN4VtiDH",
  "key8": "3Fwn2QM9gwSUy9nJ4neYFVa2qqN4xs2SoKNNxZtUgdKHZ2vMkpsqjW4KiTp5XmfHSYmLsg8msWoP83CCHra2Em8i",
  "key9": "5ZHsYqsfPm1L9YHviPsRPUj35319Jhmi8ynPUHtv1ehwfhaWyuDoQ2SNG5yiWYKaKuKBHpxzUwNddBBG1k6b9Bfg",
  "key10": "2MkLX5beqYRwuRd3swGNn4NnQWXxn13vPv4KK33QpyUvgcAGsrnLA3qDr6CJZi7iLUf1bzWQgRrvRubSpGF9vm9W",
  "key11": "kTSBi665574E1pVcZuEpZv8VFcnGgKKknkTAkUiVBvoGoRJC3Tah62MHdbA7LZR5pMdQGLnP4i5i7J1URXoytwi",
  "key12": "2r9E8j55qhEwf1Tr26AyvUatrpihoLDSke8YZqMFW8v2vZgwVtqTMEvcmCnUhP7xVE5czZybYkmtjqhPgWBSKG4v",
  "key13": "2jwnYYErB3ogAt2dvf3zxGCJS3SJD13Xk3ujCpDkckksMmnP6jXZadWEpjThJywtpXcJEiMr3mmz2hphizCuSBiu",
  "key14": "4rV9YgjdN2KB2Y7zo5Z5vRM4JdzFZMGLDkBktTPAFRYaRef2NxzaoyBddHDS8KfGSvEgxQuQ51WyXVPpYfiNeL8d",
  "key15": "5bngvkTBDxPMQDYAV1LcNDp5uvHRoZGKaE7MFQTaV3nVhtVfcd3GuQaccb9sB322eCqaZdcerLx96NVx4yEt44gD",
  "key16": "2Hoa3CXUzwqGPN6pKtQQ9zsszBRU3kZorv2bpME7zHs4kxT2cBABQNmfwkdSs3Y1Acew6epwQ7gYB9JoeFJNHfkW",
  "key17": "5QJee9kac2ZNgWPQ1H4AjmZJa1k5hLZH2iFBpoywXttwAoWUaxLCFrBvXp5YVgVFMLG5vHTsaavTF3eK7atSBfxA",
  "key18": "2K8HFA7H7shvP8U6QQfnbuXxofUGHJNmm4XgPzdD76Jvbvd1LvBxfPh7qMzYwU2aezdve1Kar2crz5Lzt4kt2Qs6",
  "key19": "5bTa6GWfW5SegkUuQkvLsLLekUH4p5PD3Wpejrcqf2by4MpmrmE6qdReUDgwuGi6V6uYghZhoRSK4sTqzTTJGXq2",
  "key20": "2prkSxYBxRGChXPhzkFzFCvK3Y2xGQ7V1r9gmtKiNKQz6fvZdxeEu3dT4jt5q2oYsSq59J5Tfjw3rAk3seMkZoUf",
  "key21": "2XbEDb5cJQfJg2e1U42yyzbRUzPvCgnFDcqaGeATMcj7hSRtcVv2j1gNBDejessSqeAnHqvMsumQSo52wp25kzNT",
  "key22": "28y5sr8rW7WaEJyUPCRgN3dZuckLX94XwPD1vp8reySmYYnDdX3G1BHjtyFUFPqQREf7RUz3kUJECnpSSrUuLNzT",
  "key23": "4rVQfnrr8drayoQ1hnYRjKVtQSM2VZ2kfnooBb4GA8AsVpNoa9k8a7MtGcJoCBYJHXLUNEbj8WCHwi3HDKAoJ2Tf",
  "key24": "371PN4EBTSS7tDtUsRc3jVzce8YD8j86rdy7g6nXStyqpR8otRmVUrqrVJeDbq6ZKwmp8PHKwz7uDQmamQsGjvky",
  "key25": "3bSnEUwiLuJPW2RzkB8YLoqBLfayAWZo9ue4P92pCJoCdoiuqVsEBLVLoyqBTBSgiL9kDhuhUUmnMgFVD4MXKn14",
  "key26": "3j5vH59LVQbLjSAcZermuGcPrGSw9xSYmEdfUD9NC7ogHLcWtiQDu1QendhaoxSbKu3jQ5HLDKihQCRSJFbt9R86",
  "key27": "3xXhFCR3pkzGsMXwhBmTDttYQSHAFHRcytRuPzmCe5mNuC1wXnJ8nsZguhjxMRaJAJyu1amJ1a9SVN8hPS5tdhqd",
  "key28": "6r74P5YaSKSAuTUyrXvhRhYx5YHstxSBQPT1jFxCyVZT2sSMC1kxKzYXUzMZyCpDFz1yfoY8mFEng7Nv5sedhP4",
  "key29": "3jwEJ4B1NmRC2mUX1e4dxnXXAY4dpL9gtyLADviBs7zbLbienFsKM3pEoQBVrJSUgGiU6bm38ZjFYs6MW3GiZeuG",
  "key30": "WEnMq42esiQzH5zocr3RcBTkqt5n2AA5qxT8suF471mVtnQ6czQHFwchtLgRAB4Y71BEiCV4BKpzfMtyUK5KoDa",
  "key31": "Pq7Y76kvMgtpAKM4BKPYJNpEftg6WA1gwZG9cqM3hewNNaynKQo3s4yPrd6z7UUHAc1zxZr5Z4GzdsHeN4NmZJz"
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
