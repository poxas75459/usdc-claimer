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
    "5yBfxP5PNRerGtueCjjGXzDq5EXNVdoxy4HzpukAQTcSZRZarEXMVD949v2iQMKdoAa2fzaQRkxgg1PdnVrvMwcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iJ5efhcBZBcVvWfvdqLRC5bTNV9wBCuBjamD6Fgkam7XhcSAStnJVkHSfveXSaBcnzm8bCZNpfouj4suvkW7i4a",
  "key1": "BjV5Z4gF6hhpXfWpt7xZ5eqHTJFtJEUWhaNKJvSRtTrnozgNNsZPFXTAZBG6sysi2dyK5gZSnkMK37eK38V14Z4",
  "key2": "458j8heKJk1fQxxG2h9LXQWzxWfxj7zsGGyiCyV34rBVNohsNJYYWjmtcaZ8hvqudPyU5tCBGZR8Zfsw8xup3ekU",
  "key3": "4uYEXwZSfycGwuwTcX2WDzo8ELZmUibbnzx3o13QLbLn5QDPyMVVfwi2kntSSSVQLW5RwE9LENM5mkeak56pPM5A",
  "key4": "4zqPdZU9aTCXezCRWSTfcCbGae5go2Sh7Rbna8u9uk4HWLnQMWHH8tgr7mW4FTcf2rR65NgshYoSjRoN951pqo35",
  "key5": "3nHkVy1ZYkBBMxpaMftLomJsZWoP9XeMzLL9fUNzpmqoJskTQnBmMK5fNypnPu8L6j9VJLxioRhG6MgNNYunQCxG",
  "key6": "57Us5pHZGZ9Gw3uejyk2BtxkfbN3xiUzfG3G6oz8LgyiVJvCcoBbC4iUDUsUEBVgnaZ8Nkh2uhdFn8MmjMvtH1dS",
  "key7": "3vjo5rYWa95wm7J8uZw6nqXMPhqAMiucGSsnTHpvjTANGfkADNGvVr36sxxw52FmQi9sGa3Mz8xjYZNDYcDE6QX7",
  "key8": "4pd3fbhWmpMYWTYcKptVejpywoij5PRN9nw4qge2umankndwfJEmfB1ok5dgjNLfTXUvCvh9pUHEJ9c1UTUfjGp6",
  "key9": "BNXEKsfzTpw1Tciumj8rPoUMDwJ2WEiDF3fkwHgie7ReNM6VikcxK9zWj1giL8LV1CrkeJxKU8EUk6M3tBGxkzW",
  "key10": "3nXjyVZmJapNBSBHKgwrknKKnyngZc51cupknGtDN4izRFuTy5abbainXe8zq6YekFAT7mP5KrznBQa3AtgbFcYv",
  "key11": "3KfsfTdu5ewnmxJZVKS6uN5ztKhu72E4q9xRNm3emDWdUCHsHTaCbiAXztKH8NbV9ixp1MDJ9WCeXu3Ykr745bRd",
  "key12": "5Rxb4uF3aDDgpGjM27Df4rYvypAHqsbczmDh7QcswTJU1nuPMzQ5r3RBGmZQHpES2KcK8dy2ZNZk9Z9s492DVuDR",
  "key13": "3GdDYdqgi8qGCnUZ8MfNxatq9FhB6Vjzff3eEQZHoisUp9ueMuT4FattwDkneMzNnX8RRgZYXjWEsSBdoQ4eDDwu",
  "key14": "313nXdVPvyLR7e5kJamBBXskBoe4KFsCJ3e5V9JMfFRmyPxrz1k3mJRboiNH2ATee7AoTzakwAkQhHuu9baHCWoL",
  "key15": "pPox1yg7UqntBuxTbdxo3yCpHWAoVQEaNK7pDkZ2j1ZMoTZs8r8zKCcCps4zBUVT1SiR3D1HEwK8ZzSGacYsmJz",
  "key16": "ZyuiyDzRqDpVhytaAYcNj161RVsha4Kd5yuAzYX9jtuCPddmw6joBHA2SNiYBDPabzjBPMCim78vXiu1KMT9osq",
  "key17": "2DSzPxjmbyXLDuxaDNYkGeCEMUguiLfaAMrzhoxhfES82iB3xZhRPXahQKd7bKpSLBg9rhRcUJZsXiCrjbtJb5ur",
  "key18": "5vrNBZ4YnBSPD8G4bQqWSpBqUnvjU4McYr7b2H5n6CjXPeF31bFDthH5LEfBpH4AzLWNEBz2GU89X2XqTV2DfMFc",
  "key19": "4VUmrduSbyGA1RjzoY8pvG3vaH24FRFH2hc5AGKbwyJqcj5egoLo1mfdLHZNjTJLhNNhMtHMLHowKqBB6B2RjX9X",
  "key20": "4h7www8UGTBEE7mBDptU64XX8N9EbbEAJ4KHRPSAc4X8HgGQdTGtYHC4i3nqz7HecJZ7gbmVKFc2KXMZBtdFU1vN",
  "key21": "3776hf9DP1CmQW9sFqQWosFmdMjpp7NEDb738FZSKmreiyhJETksxtj8gT23UuMk96LYs6Bg894AZoeZa7VDpe2N",
  "key22": "2neKFMVgA4PAix4R3nWUoSMGjHRU3WYCf6dnngDpTykLU2HPfi2vWKCPNVAWkj5m7b5CSRzJSHZ3n4bs3Fy1w9Un",
  "key23": "4n9xpF2SqVVegSrRmBzLgzXzytCnZu9tCHZDbRdeHDgoZpZjsL3L4xq2kdFUGzeRPArgugXS54gm86Zqt4nHqfyn",
  "key24": "2KsjVkEmBKnZYi8rAwpD6TGjhoXWAYv7MyTGn9MyJXx5WcxzGymSkz5EYKZkh8zeBimSLrK3r9NMB7paeHG7mXiZ",
  "key25": "WpU87zP8ppcZFiRGyrm4oCX9rU3Y16aZ55SDagWjaQoGh7BbWEntH5o5anxUUaPoqppsSi2hyqtb66YhzRD8vhH",
  "key26": "3FvP84SUPxvAQdytLsq8VWSYA2KQQUEcJY6sJaepb9Hym35FuDSXbvY1a8xgowVtjLSBCWaXfnAg6rspphd9fRm8",
  "key27": "2u17ruu1R8iuKjcWXyZx6TgUJFdQodSbdvsYve3NZFSpN6BZQiAyowZ7WvR7ND91q5Esrp6s4PJwLHUHkL4tksok",
  "key28": "644NTKLAZkvPQPRZYbvVwTEnTWpDjCfUPdw6q9woy4TozURZKCeHjJ8GVTSsmAnHmLT25CX8CVFMJ5xmRKF9iZka",
  "key29": "PakvguWZ9Gv2nT5BVTa5wnpUgNqou885MooRhVxkSvHg6y85f8zzgxyt6MwkoMK6Kj3gMhxyWSiaXK45HdQWn6A",
  "key30": "r2hzieAVHv2r5f2Dcf6pWTu4imX5cT3SF5ctYmGc2rWhi7hW5itXzUi5W4XqMZXR5qjc1tv8Fzzn6hkqohoH5G9",
  "key31": "4ZDQVKJRHdFt5NZ8LzTkbqXadrhuMvY7FXkPouMeXPi46DMibGbAyNqNHqAmUc1eEaphScMpyb3GCxocM2b3TSfB",
  "key32": "2F3yrSDZXAPGEfntyxx7JQtfwJtE2zCfZ1zCyG1bGuHRAgf9SEdCTkFWricP7ymVt52JZ2zWLHMxhkWamQuZcRtt",
  "key33": "LqoVhqXWjj3qnqM1WyWsyXNSJxyEguZLBFDeDa3Fsbiv5VA3FeaKRKrMQ1Tt2kCANxKEqWaCBo8qcxPDjbcF6Zy",
  "key34": "2e64hW3gin9jQjvN9hAEEs4LcgaRXAm3ffv4ysBhiS5qU4hVRn5Tr44cchDhqwsJ1kq7KeMQ3TpDFESvfVKyxEMc",
  "key35": "2djtdusodqWCE5se5jK5UnDwftsLZMzHe45bTVZTkG1Tkm1KGLgqzCRsSKCTpmyV19oKJcUtVWXhbSAJmLvskhyN",
  "key36": "4tGPxRFZqQTKmuByAnAvsRCGhbkymeDFAHhh8pHZfrPs6PKAXKLdKg4KocR87aynizTgCLMdCzY1fEVYDtPHYkSC",
  "key37": "4QDx14NXTYzm6oLBFXPqiTF7x7DUTrQzxEnYbSPzQwdNbo4sjv985XMr1nidUwC9jv3a9cEJrtGB6h7iMH9mx57o",
  "key38": "4RqtK7mbDAqTR95GNVS5R6dGCux3FebxJ4VmavMpQo8sbjMrxhWcrXyJu8GVLHZJFPGHDZA4toEyj4mHagWLUEku",
  "key39": "62GPDf2qFzZhTTdP76ECMgLvEK3qRBcrD7wuGKC99idK6pfqUyxJKcNixLN8QXsqLJDTjpPGoZFcknb3kHW93hED",
  "key40": "5N25YYPBB5cDg8csQfBeBoYpAUFgRGFayBUpBBXE1Mi8PZCqr45AQZ2nurYd2TM5Eo7vPbaCmiUkd9wGSRL77wPo",
  "key41": "5KYP6TresvZk61yE56aN55dkQQKt8mAP7tpEi7Z5sHCWVe2dRBS6Jwwtxc2s7Er6tgiWDHVDNs7JDJ8ekfH7ygux",
  "key42": "4bSy3gtvHKoVALmrwHHqnFHnHxz6vX514zZ4NPxPr7ah5MXH5ffVfpYkawvCYGNrZjor5GoWT2jJjq6oBBsNqoSf",
  "key43": "4kL23YAP4GKetkGX6QqeRa7VEfgigNtw2AJGbr7yXN3qqCZta9iXs4vFxi5cc5KMt68bsqPfJiqDDSUeiwjncFds",
  "key44": "2J1YGTmcK8NU7zgwNRJFfPjcmJb6QxmxB27siGJ6geKEbU6ABDY92r5HAMem28oSvwTVCaHGC625Qo1nfkGMjcU3",
  "key45": "4ZNVpARiQxeDLC3CLLSY1itwT7F6PLDFkgKapxdKg2Y3wyDMyd4VXS42rK2cve3aVxdmzmhyRkXtmSofJkF7M761",
  "key46": "2BXHjbPDvpCpQEGCiVPGk8NLTE1HjY7hdG73dhhJFVsmELSzgePENAoo4mrzvnFxdwKEGxPv78LuYbSgVCYu3eiU",
  "key47": "4QWVJc5jn82gFmeh7yEFnkwXpiheP3JDWx5s9BbGp37ZE2tFeDdw5ZU5ADkbDZvsCPWXddzwuEE4iiCtGWo8E4Yh",
  "key48": "5jiFw3mR8C2jZP5ikzKVaBVUM4ga2iTvResvjAouRdrnRXLD3zooKYcvMRbDhszuyfadqfRxzUn2K99K2jsbBTXE",
  "key49": "4Dueu9Rjihwka4qQ7Ez16aAsTi43VKjbQWXWQxF9SpVD6e6dAQoPkar7SBdnyxpmzzwmT76sc13L8jLBHMNewucw"
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
