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
    "5r1b2ZXZ8q6Ns3bojtBXb2L7T64ToSSNduFFNBEabxzVEzRHpQ9AY7YWQjDXokTvS2yJrs8izEPFg2vnJYe38yNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kxu3PRXCKnr1jLunR68LYS9sEr32a5Ld6yo63J96fpCnRuVWtbHhhp1EBHD4TtwAMWJgYjrS5W3vRWn3VKFyXUd",
  "key1": "3gnvF5kvjg5UXVNke6uQEL4Uv724njMbJHajGy7Ju8tJqVjMHoYEhYVjnHLduMimXg2yVYkZws57cbNyEGxb7zaj",
  "key2": "63p1wRSMmucj8gegVbNg9Bbf19BGDYTekbTJuPjSEwN4fS4M3VyU759R8P5cCcg2kgoaUxUfynnJ8iQePT4XXyGN",
  "key3": "2TTGvnRF984vFWCi5urkkXp8GL7BJHKTunqJ6oWBUUeSXrNcSgXXpvT6AUaLkLUjpBhAhKdiZ58hurv3VtFzaWsL",
  "key4": "Vt891YDfmTK1ta5VMj9Nja7tmmr6A8693z5dfN3QP5Y4jgjwamK5wFmCiviefKd2Wwx9QJpENncNDKHwks6vJu4",
  "key5": "3ubnKZsiACDgN93Huxr77wWsoYMfJejLZLSKFSS549bxQ7kcLo4RLvsbiG9ZYhvi5qtjkxTvQGj5qbTnggE3DgvY",
  "key6": "3VVhGBdgdGrfwsUdWnVjkKkNppeShgqj3GfEGJZBnZZW6DzqYNdpMSETxTrY4MW7544aQfo3XghQ8AoPq8kRgdif",
  "key7": "66pryrxRUs8r6MSgJeCycZW4tRkUKiujTw7YHxv68NkHV8nkgRUv8xbQrQjNPdyif4uXeG21W2YLsukTxEJ1Vv53",
  "key8": "2RUErA6oy9qBUuaoeLjwJAEBfE9JNgjFPvck4ocw72ByVAjYUZydFocg8rFY44ZV6w4XnWmD7pLi8exRweSz8A9z",
  "key9": "64TZaxAjLBDMtqNnaEdp8CFABpXPZAAZ9tKk2YrrHHg39vP7VbJ4udyFTwY5d4EUws1VE91eEkQ81miXKMJME4ov",
  "key10": "5T6PB7fCbbMRk5JdDJJJncve57f5AtdFodVW2Tut44C7x2r6VNBM5AkjY2WwcCtS4aeDTWfVwUiDLztwTwYENWQ3",
  "key11": "5iqVaDg9ui9AJN2bg2281BAj6eHa6XHpzngt4zKdt2ch6WaReGEmcha1DeaNQEz84RXG6tFPFHqSh5FRcf6xyYTV",
  "key12": "2aAqxVNdxj5moMxTaLYjVPTU2oxxGMYHmZ4wQBpxtdgTtRisej22kLs6A5Yyy9bE9vpFK2jiBzSjiHqrchWbvVsj",
  "key13": "2M3WP4BSvAniXqGLf1WmZe61gDVJ9JGgMDC1e1UtaMLzKVwF3C1Cu2oWjT99ek2XdnHHPx68tgroJV13p8wefWGg",
  "key14": "5mMAKtpZWHqJ9UWM33fKGhTEg4rXbmwSPHkJwxmakVqwHgEjDS7F27sRiJV7Wu5N1tDGXdTLF6miZTAAr2o6Ehqy",
  "key15": "44HEfxQ1iRR5ugJpEn53DrxTK5A89jDaTq5SyMPcVHtk9kZmv6u8QSp7YBhe4sd8ZkwudpSpQnUYviamxcBBH7nP",
  "key16": "2weZnE4JvqucFgqJgSKfKkjhgm8WL4dTPaBagtwAKKHzrvoVvFwMLmnnMD7Tseg3to3yNWmFVgehriabwrugP81s",
  "key17": "5brkoGNypFBsDMYWyobwbyhX9Gm6qhsWk67ha6gJqFEjc5GaJHaxSvL6XjmnyT77wMXovKZvbMsbhUx94Ve8UpRP",
  "key18": "3HRkjFprr3xRLZ6JRPFciZ4SEcPg8xju5WmxVeTcjUxdzLbsPeod3Je53xaDRiA5iwuwVqKyVCPXwgZ9RwABc8pY",
  "key19": "g1zutAdELAu6T1VpBymoMDCE6xuL9d2FFj3oCgrJYsaKNynDJHKN6g1i1TXtxj9YrjuNDT5X2nQFGQWzXxYNqeR",
  "key20": "5S4fqVbpY4VYnaFRGq1gzskuoBU9B7EBZPww3hpiMt5C4UwyoEtBLM9p4mvNjTCK63X4n6qvDxpZH5a6Jg97CE5L",
  "key21": "3HSs7Gdxps39HhfVWe6oqGdNELN3nv7tigrUmvqoufQAXT7Sfue9VpnYQ3aXtzb6zEQ26QtTWtRKXBqygPB2BQxP",
  "key22": "62UDfc86Ks4jUAvKJdwZnFvCKKNVf3KeESkchbsigV5zMHt3L3Ba9YtcuFfNkd52kn52ybQLMomoAhAEs8uC3c4P",
  "key23": "4hC4NnjeAJZ7tJ6WsWLckZ4hUpPq3HUc9kFNg87KXs1BcYUykHjxzvg87h8f6oXb65ccdDpXo2GUmwGRL3ZGCofb",
  "key24": "3kaFBKYZN2y7iRpVkfcRMAqQm6TDsBgpHABPvDPyAYZhzBXfzSjyKroN4cajcq5kB5c29vVkEVnG8KXgXkk32eHH",
  "key25": "4bCrYnvtjJkZ1iXDpR6Qc4BWcwohzM34L2tNyVSVZVN7kUCdUM3T4ECFKHjGFzsbkQtyWsHJzZgQrCNeYFVPezYK",
  "key26": "37EVN76W33ft2BGL11UYWaYG3EfzeVwQ7YfXk4LdNMfNbz1fr3CSciLGWMs5B9HV8abrGkeGMkpXdXPre674tCbb",
  "key27": "2oUpauDPq7RTFxW5Wv7MCXLMkSyHjJaqd1JGNUKzWjmEf81sTYXpkP71V46wiKDX8hLdk9huzDcrN5X9ijViXq4H",
  "key28": "2YKtCnG2kBJRUUAKJLE2B5pLneRNaAqFFcYrNQ4ZVMuW8ibs9GfqPs1UhpFXaPqdyBt7htdRzX2WopHG6aX684YU",
  "key29": "3FpVsn8gr9WExhpdddMnVSrRYgrwWYoKsvvTWQAzwa1fNRp2nr88Wzq7EgTpo7Hv1J6agPXVMvu92rQvn8ysHeN7",
  "key30": "4siUQFhcRoi3KWdJ6RboBNperm9B12PsuDiwQGQiNd21LGWa7WKjrThi4SGiPXJGqEirs6FjkSWP4ju4WuATyaDG",
  "key31": "5pATtYQ2E5YXEWhP7N9FQ3vR7NEGiUjUkysXyNEQT43NH6g1A1EVQQkdPDc1kruWgEXadJoDRPJHPnAJ8t6jwAnq",
  "key32": "3dJWd7M9Z7gAi7nZwtQRJw7sHYXYX8VAghnGnjx6dYmeKeYd1YpxKcaxendBN2RJSnmTyy8xoWTjURQcAKRAufZc",
  "key33": "5C2GXguiAYNYKYjTjwPxk8nm1i4fweNnPJYFXJYaepJ1CbbnYVYByBCRJJNvg7Bu31hKDCj9P15EiZmUKTHe3sEA",
  "key34": "2AiZeLT2XUotHjaURwwiad9iSY3ikPKLwTrAVZXN6f32mW7hXKvC8dMskru8RZv1GBqXMaC17pHUateoC7vrPnFs",
  "key35": "28ii4RPgGi1aXVgrBqX9Qd8wKUuBVabetbW2UiUbreWrYrCgcPSwAEDrgqXxQmWUQcNwYcLLR5uyH9s6cBobBq37",
  "key36": "B8UBeEkkB5dEqkGjVhUrKKb9Wiykb1zkEsueSJcbKmyLJUTaSAWK4jJ63wpbWvVFE6KCGVLhi9q2njds26TbJ6j",
  "key37": "rJUZomyBC131TeN8syrXr53vYHxTo3z5EfHLEub7WRDSZxXMJjm5ZEoiwhBs9ydbQaYmLsLVixTjhWSSeVcuqxp",
  "key38": "NGaSS8CETSHcrmxotREofA2z8XxZs3JG9rBMJwfLUKUChYiAmHE85Wt6JPCp3bQox4iL29QD8L9khbZQYCRfm6m",
  "key39": "2yEKXruhPKtxMg8XYaF59YcUkqu37hiVLojAUjYg94w34CRdQz5inHJGTB224TzqKdCV7JrMtYdUDeYS8Ry7AmkT",
  "key40": "3N4Ebh89Cs7LDgJHiroA3UKgTo8qpnmQkbYwivfdU1jpQkLayyCXtNVkYrXttuLPyLUXLxJbLJsTxi28hvKmAXhg",
  "key41": "2xQYXiKenAh7jKcZK22ajmDuXkLopV5gxTeeHegCm1uk9MumMuBqN224u6xFsmG495C56CTWFRdftcr2awufSqS6",
  "key42": "fXZrieMEzsDBTW18cJX4zxPbqLJSKhDjns4C5pDurgnPZD8VyFDZ6FhsgJxgcZLebm4SRo1zWbf4Wbkhjm3RpQK"
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
