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
    "29rDM7QgtxMLmJ4yFfejtk1pEVbsmc48xWBfFPPt1bPvaQSHa8unJJ1cknQEZsjh3n81PjyEeKUuYm7o8ZxHj2Rk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ey2kgD2idKLM7NaXsYkwwwePeZmyePZd3MePwPzMeHdfnRHnHzae7SHafSoKfJYU9oVwLPrMgLzqa3zBnp2TuqY",
  "key1": "2KEXitCe6BowDV3HGuWgePkeSHNX2TraLbt7ga4fn13iTU9g7mWrWAgqh5cE4XDTzYHYahn99EHb3tVRoR8Q6gWF",
  "key2": "3qt3WV66mLFMbVK1cK4FvCmcjkqrTeT9ZqCstFrhS92vweNYus4N82RcjkkYezLUBFjxpQm4Ru3bpG1hoqdVDAVq",
  "key3": "5X8vPxyrGo8LhMVofGg6QPtAYSWnuQQKydRk3MHUAvnbbgQtZN9WWh4TGUTthyeq7q5MZUBWQFbUEn7o8fCnT7rk",
  "key4": "2rxUGVpWYtVHNJp84jUpho7zMU818TGLHp6fFuFDZDN7p1PsemUvt3a5FC3vt8XpcFLmASvNejqwgqWjRBHxP3mm",
  "key5": "2BVzoi6awbmM2s7DjJWBpuxJ1rHfgKUs6UVtCXaJfe8GgqFrcWXJNif4E7teXJFg8RhVdiukA3StGwwuHySPsA1h",
  "key6": "NmKiTopKACeSNb2CPyPoF4bKovqXiN4sWjWMBFZfRuN5srXAM7fWqhCv1xni9TyMCzQLkdgpXMhNH2WXgs7xd3T",
  "key7": "64dSWVhaLSv7n9fX3ouExGLYzpbwnfEkoSBRHjDBccapxLYD44BDtMd1fsMiTDypGUeorKrU9YDN15vE1k8DBP1N",
  "key8": "5dwT3N68DGMxeG7x5ZpWG6HGxtwQCvxxkrTKCBjDvFjA38PGY2XUJwqdvxjJPLhPs1PVHSC7m7A959hBLPxq1j2C",
  "key9": "3WszARW8r6Js1kk1Zv6MBhGPJ6qxdvZfc9kCRs9RrBcY2VAuYcvLRUrNjsFWDoBQoTkYmTKEwaQ3hSU3Cy9NCbkh",
  "key10": "CB4RasAdw6rVQrMHbkBsaPR6ugdjdQpsNFdswcbnKLa9G2mDcD4waEeDRvJvthtLLPx3WDa5EaLntypuQZjpajd",
  "key11": "5cMJDZY38pnNaUEAp44Rpm6bEQiNzEH6YcQgKuBVvEN1DmwoTfhbxsz4z7MkwYswmu9nrNygqUFcVnrFQ2VPzeHJ",
  "key12": "4p9284HDwH6mDenRN92aCKoEKCKXteqcmsgPii4LgdJivsu1S6GPRN8kwDpU8Ywfk7ePK2pjJ2EUBPpBTPWJ2f2",
  "key13": "4h7khakRAoPH1NEv1grrhLWuCtAv147p2XaTcjyytK8Av7DLKrat3kEW8HFbtqujt71V179uaomheA42GSzUda7S",
  "key14": "3kPfugp4xn3fxaeH7hKQhGZSpSUsJxw53TVPBBH326kEFiqnz68ZKqtD7SFfmGN62N5z8a8Egix7QAqmXT5a2Yo7",
  "key15": "myiHDXydKq3cdsSKxeFdY5TLrxDn1jeCtMtfoDtSdniGGKAevHf6YrcxxrqvpiByP3k8ovyf8yG4gAGy7uQVFMR",
  "key16": "xw55w7KdJ7ZEh5LAPYEMmHtwo1TvjxcpQtxjUXaczTe26PR7LkoxG1XtfRGfgtDhhRBf9XpmQQ3F6jYiaSEggwW",
  "key17": "4bGRzD5vswaAtd12aSovEVxyNUSDxNhK5woi2WXdaGtJuyrLGCJjbZMkgx2jphjTEsNsAfyx5NSCTNFXctrvRohR",
  "key18": "38qCcCNbPCDNxkKKpSHsptm4Vmt4hqiYap9KuJ3qi5iGjSuPhU4MiyyyKrAgZwYUhYh4ogBjayCczqTKZpWe6nJV",
  "key19": "4iodsk7Sp4vYMieyMQgAdRDo5mBfZXTerYYeAvfMKfW6LcWEe8FuPUyG8v47cvKTGRnCehVqMmUW29UEkQzvZyth",
  "key20": "A8YD6AM2EyfgpkdwwzQ6yab4uj8v5UHQtbsLPTaj1cXYWnKmsgN93fbxCGa2qEsG69MZLMm7QsstxTdppGA1BKF",
  "key21": "5QAp55akEvLqsbZdSACzAN94iG1pqYRAQjh1wuSdULwBVogx3h24AvaqmNVxyrQ6hyhnbgsTQAMdu1SMbaNLmA2G",
  "key22": "3XqcYmHufgUivgX5YRTjs5MdwmTULznFc4q7vRr34XtCtfU88ZZmrv2f2z5zHnLFs3MrwRUr564CsX9HE2mg85ER",
  "key23": "5x5iSyUSB3EK1fQAfoVkT9LMMgSicsKkd5FdwM7xp58yxHJ6rXDv6aoZZ7i7aimPhzJXLPPMyHfpTfTiv21SDh24",
  "key24": "4iX24QiZ22Rh1ZBJK9d7fBoNaDmga7UiBhHsjbg7dfWZZZ7vd7BArpAh2PFmfwKDTGTHPyby5jAaUqdTkcXqPXmW",
  "key25": "5fHxvJarZ7xCsyWac5kzZoJJi6wVC5ZdNbGfWmvwaw1YSrGtzG38hWuvA2nPq3ycXbHfKyRND583CuJV6U5smVhf",
  "key26": "5dNDjUdwfuu4EvriQn6tuv46ECe8nyRzu94KQsr6VwoQkE5gG6RgrFoi2JVfhxf9NeXrttXL2NkSAUpADYenVcbq",
  "key27": "3KojwfFkPHdYAhhHUEd63vuP8myMnyWreYK92khT9K24r1Mr9GRYnDnFExyu1Av4CfLVR69GBjpTvNTdZ6Npa9ie",
  "key28": "2f2AQzFQwWGp1hNDX99NgfpvuZpQ8n7J6qD1nUztKRgB3mdYr9gP8UTXejdJGNfrAJtdfjGz4RCsLmmuEQB4YMFZ",
  "key29": "2V1YnNqYEeEFsxsjMKKuLi9NSp9aDJzrM83eKtQyX6VU6PDypzRS2adLwGydxbeVD6RLXDzEwTDDF93Vix1mNjXX",
  "key30": "2EKfZP1aqXD8vQX9mfzRPp2PnKYQbZjFNPmYvrRiee3BnSpLz5cEgRHyBzcG8VQQ4qxRrjPjMVcmExN8GkeKYoDK",
  "key31": "3bj8uFmhubGb7p3bSkAqK9ohKHAic6TKcNWtR7gQWmdD28pggMPXuiFG8mG1Xg862TMyfAxVip1z1xzLCpQjUGjB",
  "key32": "3oeD83NYcshRd4o4jBHZiwVecr7pJoyaZpSAjqqZs6r4qXWXnTwQBtx3ta9JnfKPjDT7Tv2Jg7dCggo8UBDv3vgU",
  "key33": "4yFxzSqBUqG5VEaqEpfqM6EgPfAnw9aoeuo9NnLsdGki4JEPB378sPS9YyFxvuXD1G4gtHF2L5xLKGP64DX2NRHC"
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
