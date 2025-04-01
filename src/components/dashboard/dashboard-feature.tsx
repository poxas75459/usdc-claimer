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
    "2kgfC4tERtb1v38Waf42p6kSv4WTmV7EFpnSF1sCGUfAcFLy3DjfmE2qhAYZZu1haNjskAKyW7mE9dSDHtEWtBdH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nWykDjVfjDS2fUNnm4TBcx72tpiyaK6aLYnkBvyKf39Sf63GDzqpbqqRVzvmiAfgjwoFrd5xERubPX1ezKMWdQr",
  "key1": "4qdDKn9BjwMZ9qWptQDKLMbi1SdKndxhmg51J66HUZXJJioAD6TNXeThbSgRNaBp54Jn5yyDxB5uzMjkpjp5RqwC",
  "key2": "UbmPKBEQ2sH2zLDTYuVz8FAsVffa3YFtpqea7QKFAYq4kS7vFbZi7W7Dsq857h6xav2AAxdZkah4nv1MMKmrf8d",
  "key3": "5EaYJHZ9d9dKZ6Vbv4yPkm7jCCETALqQAKAmqLg2PvzhV6PMzBfrKw1sZdu5d48AJSkZz3NDaMPqJxAEpJkxFqC7",
  "key4": "KHQpeFRuX8uAPanB6aC3eH9Dupc4w7snUfo8kxov9nwqQMx7zCZtGgsYhRzsXcRcFydE8trz2idpYztBuiEqWDm",
  "key5": "2Y5AamW1ZrhmZiJAWNULLxg7zmzsCNnF12cxizKZMcuzaH5yC52GjxD9K9xnu7Fr9Y6hPSCA5KPQnaF9Pq8R6HAC",
  "key6": "tN1kMjDnKZqRgdxWPDtq55BxFXa2sJqCLy4Wjz1YzVKArsytKwqevYdJwohw2ksdekg5UHUGV18iyksRb6KERPw",
  "key7": "37tqZ2MzAWoHAZLUFS9eTFpe9G2WwHiR5azZ7r54rWbKYLuVKn2owqRTeoDKxcjDD3xHd6465ahuKaVg9d9P3sAL",
  "key8": "2MVvrHvV6Eh5BzwstuKXrxd514q5fjmPcc2Bozb8cNfSG38643qnMFJYKYdmTPng3tbWoQDhXdgwZC8EK2oL3vgz",
  "key9": "3XNr1SkQsMnnrzu8r9KeryxviCnvcfqP2YYcaLhFQNbxzjCDyKG99wVQgttyyGfoqVuse69WjuR2GGL1tTb3SzHm",
  "key10": "386f7tDMHenVJa89zz6nu6a8v4GJt2oosLUaxBgcteaV8fkC5uoH2twqGDUD3A15xWmDFXaFjoJBgszrxm6YU87b",
  "key11": "5uxKMULDj1Pik3iRAPHKda9CBTiJhdPEqxkmiKRXpBBBLD3sAyfoRNgA9NTgDXrCkTFHV8uX6vpoco19kaKnHpvi",
  "key12": "4PEZTFRCQyS2ZF7m2Ljh4SGf486tfaGQBXJjCGP5R4qiRehNYxyhVNgrnmp2vyTBbR958g3aixfNqriYfT6S85s3",
  "key13": "5ZG3sEMDmFFP5Ffc7GnmWa7hMFEqFeG29iuuKJEnrxmKTMuR4HywyCoS8papTwBxwycGLxJoT1AEoGjwVCbat5qX",
  "key14": "D9xs5qHmg2SuzBWk8DMYnXAdYXGY4LoyrHLy9uhehttqBjpne4FHsh6mBQvBvdWU2ujub5pLM4A9eMkeYqXZ4FM",
  "key15": "3aJGUprnfpLek289zwqvtbHCNTQdQpCqxrwA1GvwD5Ff7zHgeiBbSL42ew9VzHFkno1WkaTJ2XvGC9G64cioN7ed",
  "key16": "3tGZxNWt4bnSG9vmE8Yq3Dm8vJoG7CGLUq1P2q2sWj7bDwSLYvC8uYjJymRHCk8eNSAszFCpHMkJxsqcAVL9R8km",
  "key17": "1xz98suw3imMd8nEo7go7UovEoYVLKkexUYevrJsPNUZqainXT8fWRDfSML7oY3JbdSmtsBsJzAQuSnF77cxj1k",
  "key18": "5ZbjPUnDr9hX7rQfTzwwMhuwXcgQ5Y45P1crDF9MWf9xyoiAEbWiUkLs42MEuvBWSZttEJaLcW2QM6mmdbDvxNkB",
  "key19": "4q4NsJmuzWvuii9BKfnWazYihSWjja58r7gNJnp2p9rLmnKkYP8xb7NJWWDS1G8uJgQVcvPjtpz5UxYS6PCxAuwL",
  "key20": "2MmW42PGj5mrY3NkeBGqNE6o2Ds7sHrKQogS4QPi8ru3SyjyW8Zxp9aa5mS4KkmqXZ5ewoZ9TahL3wqA5UyUE2ZL",
  "key21": "4wPP9kWB5cMnTBDCGxLRteJerNtnbMJmfLQWxK3yWsTHbVRAxtxzYgmDEjXzs1cYobHEq6ps6iKNugT987GhS8dK",
  "key22": "3Bq7UQ8bHwJPo54QXpAahsGRfKTn1QSbtMxG35FDFaUMa3Bc53SVKYF74ttfkkw6M2L2ZyMujPePxqCe2riXqzyq",
  "key23": "3bnU9V93RZniVdhvUhgMXEkcnPeoq65HviXJVrSKTHTwBQYQRcdqQt8fw93HLSGss2wQxaDBQdBGwZGMGEqcpdax",
  "key24": "gTTaDWMAjTJADT5WKPUMsyEAk3bAKcv5zZH86V1Ne3rpwuqti8YvzhqkPFKq5ZCNnuypKQAm2WzZEoxHJi5nkS2",
  "key25": "54tRtMsw7zHEZUmzdQVDs5GBG4dTzQq9vsSN5ainxJGC6Crik2bXsBkmJC5AqdFrwGUUGkeb6mZeN9wtYSPcaVJU",
  "key26": "2G6A6jtdZSTMNccYRJKbFRMYHHAE27VfYCEPLmh3NwBspAvDPUevywwZVkYP2RSfzMbHYEuy2G6fd9WvZuBpci7C",
  "key27": "3mEJaQA8cnvGZHc6CXLPy2Ehvu71L3rdLdTxrokypXdp7dd4sMXeiLaQfzz2stEkKHq7tVY4ieGJ9AsoyXnyCQCg",
  "key28": "4FdjvRMY1HSSptKRbkR98vpVEK9d7x7ewbKtDkzRAkQgiF4WtDBsQu2bKa8LgsrPYNmwU4dD18xBFbDBUHSSnwnb",
  "key29": "4BZVDdp1eBrpcWd2jpPE15hbNwydkngvEAyymqepL1tpKttpgcMHvrGFwVFLh9epnMXMgdHvvgGu5EMmkWmXHuK",
  "key30": "33Lwe4i9enSokP7JR5o4t3N3C6CXe3YBNWWZmaxeK2FKfQdaR3yuPbeJZWmL9iwbQ6TW2kwZpBjk2A4zg4aCZdZG",
  "key31": "2xPHHCPYdqKUQaS8KsSN7kaPHFPyEmTSJ15xKfEVsQnhJYY8h4qEXSSeviK8Nvjrmcx1HBvebTTWRWbbVuFXHVXR",
  "key32": "3VkfCX7oR19KqZs34SjjZwrhnMaSA21NPZRoM8KrVLfFCUTq1H8F57hvCmcbZ5bTsmuZq2PCndRxWD3KkvN6Mv2f",
  "key33": "53RNxHjXopoFxEhdR1hwaVofH9kXApWZwoWTR7krRhwsGEJptbXWqHuX6ev6jXJ2ByXEsnD7Z1GzcDpJo6dG8R6h",
  "key34": "56WJ4SkonztAjQou4B49eDV1i2ypviDECDNMHJQPdsLMngyMyqmRrCEBsUaSmVwSq6iHYrsLPsVbJMNRRJpjnC7u",
  "key35": "2GJeuFbcuZZdwFTVmKaH6P76CozXHuKhj3bEnhq2XwZWfjmURFTJGzCHNotX77xENbBitqeJ3b9mUa5trDCCH146"
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
