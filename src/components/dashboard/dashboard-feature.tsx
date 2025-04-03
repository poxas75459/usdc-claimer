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
    "39Gf8BJLz4TkgFaoGCDm4ipxjgzZ3wWvYwVZkhvHdngSASKAMnXVdX9d39K3dwfmTT46Yq76qG7gimFLjJEseSid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J6btTFNouU4EqbE2Y1H7EXjxcKsxFuRrNtwHPV2gZKmxPtxSUX5Q58aP6EwPQWxkjKBgCcZn5sPZGkdi9c1SkGS",
  "key1": "2DrLDvedyMidEcYy3xBNnh8WvrFhXwuPZC4Y7LUQ1dzT1s2NHM29hQwbR68Y9rgnBicypvFNWbqSLW2amigcC6gw",
  "key2": "Vo9CdSBc9SzCEKrYv2BdkpMXtosomB78oH87uRU1FR9G3mfR83PpMoDWRBRZHu7yenuTjogZmYdhtkjq2PN9eDe",
  "key3": "eRHpfTC6AwMNuRXeAbEar8bsmFZrJ9gtmHJ65BRsJgHEzs7vTCi3p1M2FSkEW7Rhzt5oQoEtrVKC4brT4qmbpRg",
  "key4": "2Eeab3xgGew3yT3P3VJUD4cW6xkt2h48ZFZ61JwTnHHfDvRQX2s6hr4z8Yw7D2nGUFcupXK3sd8xxjU9ogz4Bo59",
  "key5": "4ChT9UQCy1hJq2JhGfZamQqVxz8XPXnVyRdhP6WuaAcBthnbgHrRKbRPGGZAJJGVbR46f2LySAL2FJop9RskK1GM",
  "key6": "4byCvaAuTdz8Q13TaMu1q2eXPUVRre4NhgTdX9N3TZdkHV21zcWVBwzD8pSqqt9Y4FL8tP7pxMg2mUytjwHfdMmr",
  "key7": "2nFGdaafHXxMb5ArDUjJKxehyvYAnGeGzPRprnrEVX23ZAX9auRpwNJ8ZS8AEk4eyNeSRdRFNnVxSbK42wS5wx3e",
  "key8": "4gT3htz916p2WzMpPTjPGiL8hWxeqqV3nVNzUvPLVNpagXjP7ugpk7cyVwPZpABkdknEQPWJtN68XMWfNn2XiyVh",
  "key9": "1kA6TmoM9MBYtsq2v2WhvjgzsMoVp3okemDwL2w18bHYkTUxT6gfMobi3nRBXhcR9WPaRjcSjBsbxwYMdUa4iea",
  "key10": "3TKFdbRNMEPK3zaRnYg3Dm3zUSdnABk5pySt8Um4cWGaFHp4UBfvv6UtdWrGrWjjHUwDLyTdgvQKQ1bnQrsH733u",
  "key11": "2v3gXHFzf1nbJ4SGMA5CRkUuQXnRtifLsjdu5M7Hu1L5WBko2T5KokdwyWLaWj7wgMYEn9UgAhw4RzorAYZNMkGB",
  "key12": "Usv8FZrchNnQNMsFKdyLUyEcqbsFivJDBJtgHeAe2gypamu4o8oFiEePzUbC5pAL5Esm1uoCp6wwraAQXnt8jc5",
  "key13": "4LuMzKME3odFVFdR4Hs19V4fEq7n9C4wa56XVxpmzvSs3qtvfXsd93KizXDstT3Wpxwv3ugmbqZrnDBLKK4rebTP",
  "key14": "5dQq3szXbCsoi2zFfWxyMfSvfJ7jyC8MRtWzcL11swxR1B7DwBjBi7x4sWbtzmXct49sMX5SxkWNozuNJMa6HvKx",
  "key15": "4owVbmJ7hwf65vZRhTskGDHbGC5qKtE5BYLXp6buV4Rnrpj8MoMgKXZ3BoKF7bjd6CwFfurNv3k32fdjTs3caoC2",
  "key16": "34vz7XAgXmEdAP8Rxu5TNAdAZH9YGV7TLCmuEYAvDbv2dsRuyVnNay4kr5XA9S8WiHGMFq6WKwgqs2hcRWoQ1V6W",
  "key17": "3PmcLbZEgF82CfhcuofmWz1qxxey9BFh8LhDpcsKSuXzHePm86d1id6ik6bEex3U2poJqANwvcEAh8HVY5zsSZCt",
  "key18": "4qFLyp46ebNKYTzqV7CStgWoG2k97igV8tioPimcn3215go3dRJ9kACeujT3LevoSpzepN9A5PXuVY1cXmCtBfY6",
  "key19": "jQuTn1KkdohbXHDJsfygf7wogH7nXTLfZcgYDLZ21b9N7WPCVk5MhWK1UrPh2yzZ3TSCQb1FDkxmReCd3Cz1ZHQ",
  "key20": "235x1NPHUvsiv6pT2VSKxMqR7w5jrrrbZc1chEyAut7vQXbCESbYtgs9BEJ8iM4vcoKwE45WykSdGngbxaYDPsKH",
  "key21": "5DYcAobZynnzZhkHTsYPSSeeiMLz87T9iXgbncFnCrcT6CWpxbuZkY5Nw6QHW7eZcqzcK9RSGuLLF1RThjUa7QfZ",
  "key22": "5T3GZ8EnDcBsqhM7SVSRs3VCTtLBz43tEidkJAKutHwYsqJ24eFsAc7poJAxxinXDuFt7Q1gLPpozoDRJeoZc74L",
  "key23": "LZKP2b8KWJYDkKDqZ7xcxLZDTNNBocDPidjrwNyFypJrDu7nX2WLfSvQpmiHjMXroFXrdW4yKiqzKe69tuv1gdL",
  "key24": "2LhxmcETaYUZ4dWZZaMt6gvT9aghFu3m5VgkMv9E6vjv43USSRURGTPd9d3qLX7NjASkSHwWx4eSfrveCg5pqsZM",
  "key25": "3oaSWvBDJuuF4uMikESWzATCWmunA14712sFuFv3UREK7qALXydCN6w1LNN1CurDzXZAUDXQEvCceytwECj1FYjS",
  "key26": "3fxnQreVgFVhMNVeWnDzkN4fdPJerqc6LX6VpQFYxHPRZRuyiytRULKS8ENWUVNGBCvrp31KnpkYS5siDc4wPsa8",
  "key27": "5MVyRKc2VRav2qC1vfXZN9GeN2briqkXv9WosGcSQXHhsHGo5ZovXtmyY8JURxxe4ALmQZCoXufC5dhRpW88r52B",
  "key28": "2Mmu34dfQs5VMwKV4VGB4F3wHS9cwBWDT2d2hECAYmGzQYFpVQ43ja9JC8iT9LoKT8C8FkJMKWhq1FNBGpXH7bkz",
  "key29": "2MwxAVdFM8SqzdhGPXH9aGbZApssGNvDzQHvQp62Lznn6JE3L8cBeZbrRFGciAucbVGKwdz5C3Kztj2Y4UKYTT3n",
  "key30": "2yUT21AqWyQ6SL5ChSPm5usThUZQDi6nMLmnv3kEXGjbw6NUJPWUKUmLVGNuf3j2oYr6VEscwrYPHrZUDSPkqzvC",
  "key31": "3JmWYt7bP1hnSnMZ9QpdDweiT3B1sEccvtWxZfEHPJYQep58KVHakiW82qZsyoPznQxMYYKAF7UzrnxZ23tXMbY8",
  "key32": "4n9VLZA7s3MBEkqah57n3e9AZA9FDN4PVfJuN9myZAEBDLfk73GzWnJtvZaZbHYZcwkjZyvCewJLSToidhapKUyx",
  "key33": "4ECPvWPHar6fxyrpTsx3JGhPXTS3TyMMeJbtn8jQyurR6u2ke5NWNu3s9DMRZkfFj2YqrNWn264hpzcH8SCVNPnq",
  "key34": "5L3RaiSPXjsF3h1QTQaKmFwuWHt5mvMLWXcZrsMjkkRszd6hSejUkuGuZ6zQ8HUbFxCGKd7JSLL7Gaxxduk1XPdB"
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
