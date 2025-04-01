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
    "3rht7SiY2o3Z8yWfeUCEMEYdfyxJo3XPgQUXddsjbpPAdUYwuQp7RsPugDSHH5d51VFU3q4DkVQpmivLyTDDUVP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oAdJwKeSfAb8b35hNGWqeZVST6dCa6aV9tR2mCLEEYLEYDvb8QubmW7rNy38wpGsyqMuQd7jvCpKBasRhGLxWZp",
  "key1": "4Bvg7J6G91AzCBufjmiZNc9drw3ECMayxmMkHSGSnFLym8evMGG99PSXZ9SyrzFYRZUyUFA9b97quroQRCUTKMBC",
  "key2": "3QEZ9TTzuMuVHDsT89iiPNJewQqH7fcG3KPxUj76oZnmFG8ETMRppzuhogQeRM2WP3BLfQn2xmLhwJJmDsKGeBPo",
  "key3": "4jaqfanuavhcaXQREi6nKADeYPp8CLaxcuYHUEqFxJU5E49uq4dX3HiKYT4XkSqu8kyhPpGLd8tC4hVUQ35ZecWc",
  "key4": "3DZ59T6CSe7e7aQoTw7tvmifvD2J127EvKKzHt9Duv53wbE6K2Kxfyjrfd1QFA9SpGFqUTGeae9ghE9acrsUJ3GC",
  "key5": "fP8RmStPTBjuKDQr1AVF44xGDaF8sC2ecYYcJAeUbjAFJ48G8atrj3bZfV3KpDY3iWshnrMQxWsjYawyix9Rvqr",
  "key6": "5osyBQPkZX9RQ4wGSgt6nBhn3NtWJJM3wXeoAL61AbrykZS77UyxtN4ESZnHrMjCuig4pE67uZpk6paUXMUPZq9N",
  "key7": "41TUUTJbeE1WhNTq7HN78tApwbjd3WeKHySYQZJVjXi6jkQnxuBo55W52xovVPYn7RAVddAViqo1CtyhGr5qdeMY",
  "key8": "3Z32d8WVsnUXJPok7nmuVAm8MthMvVvdn4ZL9e9eQJ4e7MyqEtVnQ68pabgdNuCdtttFkXxWHvmkjy8uaPD6Ej4F",
  "key9": "5E6Xvd5iKpqaWMT4JgHsRgBZk3qBcBBR3h4ZdanMBZ8gowG7fEiiv9ihMWxgUbwuk4cyUm15WoJgyCQs22Dd9muR",
  "key10": "3PjfYW98w54jS52vEsCcntivUrhSVanK1wzEtH7vavWGtFj65bGK46qT5KPsRJ5G6yCSa3pU542ZA8AAZohfaoD3",
  "key11": "4u6JAb6n99rJ4mW9tmFNWAp7HwktWjX2ZtcWhriwJjPcChw4FD9v74gtbBKotYJC23nNcKqC4DVNFWZkbZqtXxP",
  "key12": "2MJ85kkuYT2aS1P7SFdRwj8JYHxM1eLWDHJsoeTNGiQ1rZtLAFTE6WLwrhwj6geZ5oPxw53Vm7aLBYaciUEDPrfz",
  "key13": "QGjFcvWWidz9WJCQWHqZjyMxyJr2sFBAXN3rafqKDVJhJi5tcHGELsToVetVwgrXgKdtxahnqMNK1fDiBKFwWXe",
  "key14": "4pDuBoexMGk19L8hYXTWiHkQksHvs6qodoKzQe2Zw3cMV4wz9AbVa2pMxHqWfLxmBqJXGyJz94S64Ea576E1tbhY",
  "key15": "2Rj37XNr6S79ZwD3Hj96tToUTMx5Hys9AuPHdifmn1UpTKMajYzjHNcpe5c9wbk2xpEbkt7Abb4c4rgQ6AXvo7dr",
  "key16": "27D1CneEXehzfheCPUCkV5ozhMAjLyq2fcJXgfbck8QqWMqGaDjThCKNLSCsH8Tejpp8cQ7whNqBzK71VB5qNKes",
  "key17": "5P2qzGAu1K79JBnapt7YPkBAoVyMLJpz9jcp7Y9qvDKFJCQPMx1f71nPoHmfVNwTU6npDC25epCoDXCxBvctg1eJ",
  "key18": "4jTts5iM6tcbxcQARpg5hzQETm6cWDnBt4sDdSmdDwdNPiUS6QAh1x59dXMRhhPiNSnWmZQVGGryPAmutwH8vnXL",
  "key19": "42DDpTnPQRiano6wZKN6ciADAer1MUAgNfwWgPXLLc9eZ5uoBoiG6fdzj76sMJTSZN7c4ZTk26cPJ69R2SrDcqGM",
  "key20": "4QzvvkRtNqp4tmTLZK2HmXqW1Hn1RiS37S846GVW2KhuDE7ivbgwH7xac13KvAWqDaptKKuM3jtCNCrYN2xdnp64",
  "key21": "29jkR4gFZ5mdmiDEr2dPQVs36fTMZhkXwrHgCxVNrqdB5mUS3RoQNYsmUJqzXFMWGbRQSSEfPpKDjYMVzUecJEce",
  "key22": "53wc9qz8o9sVLA3N3S9DLgom6iaXvqe1tSMGTCJwLuZTgvkr2jGBxBnZHhRH64HuNR2T13czxomNR4unFivjnKmW",
  "key23": "5FMXwYCLaoPmy9Ee1CdwytQUAWvVqY9UoLBm2oYtNVeF8AdTLbijPQfF7LtxHphAbgXtPLt3YUVRBgvQAL5rfLnj",
  "key24": "4hujSShFAifsPM7DsbR5ey9DS8a8beenV3dajfpwszCoLsVPHP9XgiYXaKa5pqfubu3dMxP4WsLNYGKsC2YbKrYQ",
  "key25": "594nG1tuyydNjah3jUvQCnXjapLwT2dCcks61ZkheisHLWw3D5gR8nddX4v5kFyMw4KvfPFrFhkz6J3Gty5J3cJY",
  "key26": "4yKBV4hAGW6nQiANWHrGcbcrr9JzCuEJkkZ6UC2m9eqXF21DJVpGHwK5c5dr8uqa2rznvpAqQsfHG7ZD2majKq8a",
  "key27": "J9XJxMG2JcQRNR1VkPUHphA2zWUp5D8Raxh3UqpzPEnz5Lw2T6FE3MXcgubrm2GGfbqTMHg869u9gk48GjUJJFj",
  "key28": "44uJS32oykU86ZP2QLuqSTSqzTUVpejQNtiPzX25UbAAGecCtwKyqag2DeBsdttGEZUsuiwKoxJxu3aMoEjgNYzi",
  "key29": "3otBsZ1xNryd9r1yZDNH1YMjWLazpzudLpkGbXDY9LtZdxF47rYPtHwZw7QhRt1nr4kqgqVFA3AoCqgNyKygMDJC",
  "key30": "y1NJ4SD4gbGhoJo5u9TTfAf3oBHoiUP7gYy9BsMJGVao3kqTZZ4Gh77Fvo7Mx98E9J9tNwiq8zQDYnjq6cMniHH",
  "key31": "23sFMadMkPS3KfSWiK59kEmRjdVbZyNy9f4M2uExkAr3t9MwpefPQp4uYu4Wg8FtdkfNU5ux66NChZTgPAwdcBi1",
  "key32": "5SfYv4AoGY248wcfLszpEy7v4XovteEikKbiTuskWJFjGNuaAaNXcE4a6PWpiXGZB8fxvFhEoP9ezcV9eu1qhkcS",
  "key33": "4762ZiewdypLU8LnMm8PaYrC8ZxGTRPBfF1zE1zCegeCbp8VsBApAfYNTGG2BqAm8SNWsPYnnaDys5oXLcAzvJSQ",
  "key34": "4K6SuPZdbzq4AHpdGA7GmADanxiAewsYCPEBvd3FBaF7yb7BpARocNMGMRe5cAH1NcHNyQRFyZos8YJJWnaGd8DB",
  "key35": "4SDBRDrKDtMT5f1rcSzQaefkng4p9MNuMwvjxUsqTN7XiuxbEXcbtUDnhXF3v3R5CCXGUtcU3NEimMvxoNPVQMJT",
  "key36": "2d1A9twFVRz4N3yk1Vn4UgAnXsDZXSHzSzWKDMNSH921BNkjyRtZeBckML2qConQGKSZSyuAicTmX29jgkeKJPKc"
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
