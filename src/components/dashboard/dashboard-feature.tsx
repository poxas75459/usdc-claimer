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
    "2PmDnRimqr1jTHazGmKmfGFTyqimc9MuPugRSi7ueZKhMfkr677ExR8MTjq3KJZgtcXTx7zJJwe4k3Co5x8TbCPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C1nX7N5ZnVSi2J7pZp9uJ3nYTau5U9wKZtw2GVcbzYCWhYNpQdpaz8cMZ4dxT7aDDw7t1ZiiKio9JA9cMnr7UAC",
  "key1": "YiVSuXLEwHVHARajL5R2Wuhni4g2XgLYjcAKf8L3Lr3AGeCigTXMRntYYQDsZQkZ6vzZo8kUCrqvuVA9owMmjUB",
  "key2": "4JPufXh5uzPoyxRxpUj5YkvQfTT1TViHx4sMVnwa8oo7ygcQsRi68Ck87tY71xdCACQG466b9D7UwY9K5PxfmZSc",
  "key3": "5sfeRbV44ftrvSobW9k6Sm8FgmbrX7sihi8gGVa91bPF81WYCDofeKW32aVHTEqDHbh6mXesmeeCFvjub8LBLVTi",
  "key4": "5TpybwREbKf1kyoNpXUtBetWVKpXL4x4imKPCSq8tgtJv5gb9hd1gbGMmj2GPfavFAoo29PwjCt4xaoPUJgGKiwN",
  "key5": "2aLTMLZbQRaPUfufanfXT7kXL1pJgJ2XrbUM4EnMMLhKnX5e31xB4hnY44CfP2c3dwkAd27VVMSVrv76vf367g1T",
  "key6": "5VUYVehmShCiWg5EvD3vvr6LLQYyErQdn7rrtutQrkSiWD33yBZRv1K1qRJKEJ5tpVENB8Gf1D7hjLYHApukPWsP",
  "key7": "4bbrbHd35AMS261WcXC1nUAVzUtwDK7BgnhJ7otuEckzYKvyqCKVG6LYycHuPJfwdzUtFcJEf4bhqgeuNMMZwrw8",
  "key8": "2UykRSx8v2beR5U4k24PYJ4jTysoJzdWNme8tDQRxu73cCJfw7whwohbYcKjEqaSGA5qcSWcXwAUoKrB7EiRQnQA",
  "key9": "2mdwa7FbaVeEjxNsvxSB9L1MTjZMx22MwhTEi6C4yupAkJHto9NyATvC9DozfC2YntjTKSJsDEcHvNBQDuFBJcWk",
  "key10": "3Xw4P1ZAbCMZMBqLfST6Sf9AvujNvdKEw6xkLnge6UyqMpwNW8gAxDHKGtJkDAZHQVbP6pvLW2pUzxmaui5n635Y",
  "key11": "4Dgcf94dYxr5ma3FPfEVXgJPCdCYcszzo2t2XP4Qu42k8z4KcuxtFtKMELzL46F7iogzfRYh9ADdCY9AfCxjouDz",
  "key12": "2dLgY4dUAySmdCN5tov1dSnZ5cTzbzpMXuMDsLapKSGzvTGcgFmyfYum9qTX6xAaKvcq41mvNeJXmc2NxC7QnrRX",
  "key13": "44vpeGYSwNBvrnAGeJ45zoYGBpCa2jANZVRTbDjsJdv1VjAnk34gbXwr5DJdX3TkbypeEveboAjH3xCRy86kL4jL",
  "key14": "28n4m3v8CnuEv8haW6Bg4krZqZYXaPer1gsNi9JnPWZMAHc9UmxVxCKnyjfMSMxrQVNWaSLZknq1vj9df2vkHSzt",
  "key15": "5zKb4k63GZswmW39yknNHgvSTNSFQCfJbJkhZ1tu65yb7RowZ3x2z8WQtXviMbsCeyY3LphrNkW8r5a4V4NWC6xU",
  "key16": "4miatXehzTu8HA7PQka3QjuTVpL5sFoProKGw1oiyhbAkxhnrphGDiEyi2j8T1nqyS2UwCjz7HY5WmTi5xGmU3eQ",
  "key17": "Zv8Uv4sDj3wQUACW3xGkzRk5AB3Jp24eJGQD7Wk4JbKmn7ymMmezgjsfeLxnbXLHYpAhCw6mBTYpum7pMQsUEGu",
  "key18": "4d7UjefMVVA5rWcN2DEaFq5ggu73o9MYvCeMEWRSfugsYbUUK9XGFQsdZZg95gZYG6HpwKRkzcyGY32hyJK53d57",
  "key19": "3kZPv5EkUNMbPpYr8YPtcNwfypsny46V8WUJm69yZRosvZk4dD1jJmDDHYjdZC8z98SRuSo7vbfoRtcno1PYUNcD",
  "key20": "2UthTghRi5ZvdMTG7FJv5mzGsCmjH6S4AoHHMZeVL1ELDFj9aNvy1AWSQqrsSBW3aGebbGqhV9L4Dms9cgkC2Jfi",
  "key21": "34ULcVnSFN7RzQ2ZTTgoLSgib3swDw3SL1huVa5wKVhsJobNNBci5tekjFTEdZnPtMWyqZUMTA8xZMFYPPEGNNTs",
  "key22": "2BKqNwaL3znpqqj2S4BL3RmV756yWeDucknpD3rTjB2LFURfP5vba5SznkeD8uxhaYARRoUgRZdKb2BQo5ByKzj1",
  "key23": "V2FtmFUUqxYmjkX3SNky2n6MJG7h2GmoZ692YxPYdxUsxMeD4tuj6uR6Q4TtzhVdfM8x3ubZci2YeDnSiFXp6HW",
  "key24": "42G3UxzhrbM4qd9uJXpuabey9ZKpd1LG3UTSrBL6YtrJcnfBNqKgV7qYb4WwdFJ18XmynX66zNVRUcJ3W7HPgeZv",
  "key25": "t95DTEVQN7mESEw4MjkdKJRvCaTExPSi3mhcLLbRmUF9E2dy8QTk9s4tcMemLWxYJtTEAKdGrG66B39XGm5PMZ4",
  "key26": "2QnvgwCSamZKH7JS4iRzPed3Rk1tXSjCwL9JjBzQVPJUgdW1kgvdv7Y2brXYyawDWF41RxzYPvoNUth2ixB3ov1g",
  "key27": "3safqfzRMLncMjtVKJGGv5BTCc5W4twRNVJG2Eyx82yB7HHuXaWGee6439DHe2xKjGMhJiCoTBUowihHp4RQmZWu",
  "key28": "2mj64Sp4GFCSLCiE21Pe2Nrryk1yfg1krmVGF9fodxeRJaNAvCKV6LD8m9DHGySSydBFsw8DZuRnRJ2G2Z4HvYWu",
  "key29": "4UwzchEhSciaF4g7gmV5X9uKpkKJH8exChVrcuqA2hHSZ84rZos5mApMjuuJPJi7zgfSVTZe3hmEXCsHh9bTRnwC",
  "key30": "5JqvEBDa7mmVfP72ydnYAykpUBL7N156zfsVfvJwxqFjtd7jWRmdHvdJwWS2CKsRj3MCAeEra4ZPu2TfVrjuezYJ",
  "key31": "5uuwB5XpTQSdNNymiS3ZJqYCqQp8UXUamM4j38r1phYF4EEs6tiswuFhGvStSSdZawNwqmkzkvFesgDtQnj3GpSB",
  "key32": "3Vg1CbZ68FRB5fKhSbcfSzdSmfn2BTCzhNdUNjDas8VS1pjQmJ6U6YnrWguE7G1t5LdbsZiXBUAX11jHJtAFgmy1",
  "key33": "5hb93AsbbU8U4m6LdiQcQRiRyrEAAGdJXwKVpMR21RKJf5vwCJfBH9jRgUPAysgZ7VUhQTTo8CTLxpN3V3CZJXN9",
  "key34": "41SmpNyCHNSu8rFBmzRm4JwBEApeSq4bsrjvoJCBCyqKERj9TR9eT7EZBZJR7vzZJ6qZzdaehv6fv3VP1mhr4ZFN",
  "key35": "4BbLkf9Q8BTuQiUv8fQpkqj8zf26i3WfymKxHnHCd3tz2m9iZNeQT3Un4v93jDKEDpAAsH5mDNxyuPjyjJn7Rp7Q"
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
