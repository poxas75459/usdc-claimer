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
    "3nzjQPeQbycvDuT2VdBZzwCCgMfo1HMwqyint3v6ehgPepLMVroJtpGnoCucoBXamnMuq1sriqWfNYsPbHFCaQKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55mJfdsHVXG8vxDxoKkQSp4qpSht62ag8evQwGxU88SVbLsVZ6WdZeopnjzFBSy1XEgsf9rShG3qHB9uMoczfGwe",
  "key1": "3rW3Mg8fY3ot3uv7qDQqPb9LU4kiQQxBGvGk1h7tV4BDBsHHNUYacssYqyPPRDVXhtUF3qo6pSQX8Jhz9TGYAN4b",
  "key2": "4Ug1rsvLPkm9aoNU8gGCDfGCpfi1qhRdoBjjuaZhwcWs7w11TCJpfyvjxfJAPenMFr9oEZH8icdDPST2vfJkVGGn",
  "key3": "WEprMJudZY1tcoDkUVgygjgUkpPphEswUt3RRLBLtosm165JttBUzEPpZNvB1nafGhx3Yu1DnL7wJVu5sNWa9Lp",
  "key4": "9iBaR28hpzmuEoU5tXf14XwvxQ7qLw2wUVKpmzMeLTmENXXPvsZ8zUEH96ZB7zD4gqtndk9ceKVwtPyuxqSdxdz",
  "key5": "2muuSh7vc3TLHJdRdRe37NAE5PFa81rHVqymn1S5ads4qP3wWik36vxQjYn5CEz9Z7Rai6dfb4TCqWniHXc5Hc3u",
  "key6": "3nVwsoYQH9qbRaEEnJ74Du5GAZdEAicoNLToxQM2t57rXWY5pchf7BMMhttDg25DqosbDdF6NQT8A2KbvYg5uNpK",
  "key7": "3bx3CaxE2BzkyBdD556oh3oDJFwCn9LMKKkvNzXgm6YYhGWDxriSkBhNKz4mNsHfWU5TDDuVg9YrDAwz753wkZxm",
  "key8": "2Jq1JcNktpRLpr9QvoYKDWQSSbZvSTGdwwtQoSN8zKgyd1ZjK9JdhxGbkxg7QnJ5XhMhwgaqW2jVyomanJoDDmDz",
  "key9": "4PaCrJonyGGkHUBmFzGgVxJjqCZ1RVJvgU5A2hF716SHQS4W577nUVhXjovTUgxeX1BXDSwdapqwhV16yow4MVCb",
  "key10": "5EctmeXVcvENwJVBir5BBCurid9T7ysLtcWtZVAaxBmibeehrV7giSAgaAM92FJaeTefxHVsAgneyZZugWuXdP9k",
  "key11": "4VYfETucT3JmeRzuJXfKKybyvnbfx4GwPxDUjDwE3t8MngGVZqEs3bBkA9bf72VoG8b1vYeG1tMrVKFmJNYq993o",
  "key12": "Bf8g2a3hNosRjKoWkrEdBpkvyGm1zYci7uKQECf9kJxBBij5TZ35BCCnvtY3Lj8uGM19hLpzQTs3zihTcyg3Jyi",
  "key13": "3Fq8dSyfWezEvox9uko5qAosVTfUpdd4Fr5fu1CeTZuagj33xveQbT21QVhVW8in3ghjigNKZpSJdzGeJU1T73pS",
  "key14": "2VV6q29DgLdRWELBZAfFGTLTPNc6t5p6gxA2zbcSrTCVzyYJ6DDTiH9ukH99DS3AUTGqfAteVLdPtVP3yFcjvCoV",
  "key15": "5FNGd4p1XCdjbSXuCBRzgLfqkqQgZYeYKTnRWmPML5j2TdvXmBCRpg15iXV3uvhZrBPHSAxSuQfYmAYxruEwzyco",
  "key16": "4so5qNguHseyKoGWZfC8aFkfKQu2utZbwvypGA9TU6rmMvYekDZVKnnTNQ8Jj8ZR9vwAkM79b6KSKg9AFJ34vaFs",
  "key17": "2USahBcTQwNWhtw7f4woq9vsyFpRoKWfR9MnuDtrCenTorrNA37Y7umz21aiojevYbY9WcazZyAHiRa7Krvhfew1",
  "key18": "3qsxNTPeHZrbEFWxDZ3Rqz6xNKQgt3wMJQnt3FQpWE9Tc4vt5jdUZyLoU1kf3f67hFappphdKYzrYSjVBC1Hc5rQ",
  "key19": "qUX68Gq6gZj8evQDMkG2wTNcuY8rHrMrrojFpSg9DLRnRg637Xpt9hFz6P28VMsBU6xB3p5E6sDPZnSh7TkzCuq",
  "key20": "44AFRsPmS7defkgWjiWTPp4L8Y6nDkdAQsTECFSS6kcrTLzEcRu42TbLzumM9arQUq86rSakxNVdwBw45pi3EJE8",
  "key21": "WrvfytW25ZzU3XNZqT2iDMmxxUJA6G1XSc1vMWGvohP9LdCicK2JtYHzYGfEmacoEwFQMpMKf3ZAijaryGgJRMR",
  "key22": "5VJuQ6u5pVGsu6vhjXEdvbXSipmnXj95ngRSmS7Xxb9TP92wWrKdf13F8aaiSb3bAEto1CPHTTYZcgVnzSZkZPvT",
  "key23": "3DLFeurhZKygRyJLUfFNu4RzxkAavo883Dqz47g9ttNHzN7dQS5gY9YWEZzyVu2aapAJqQ2SkVEf5qLFC3nkfJKW",
  "key24": "4cBYcwyUC71UM1wWaa9rZhW15MaT5NtXF88uXRk6gRBUjb8ueNStkwuYvsQPKKVsdvFweAcuUVh5jRmhN8GuCco6",
  "key25": "5CpKj49acvBaW8Dpo4iziVWPZcdtwkdvwRgiwUru49vCs8fe1Fi6k94EXHKP45KpYtcZqiHdBQgmrLk7ixpzR3xV",
  "key26": "4Tu324oX2DKyacseZRKrxDAXyPkkv4NiuEUK99vLTghbhngtYaSQXZGPwGy2G2NMBhbp6u1BnfeFpiB4FZNL7kwb",
  "key27": "3sPMdWR3ifSaZfymxcXfnkQPz5wpNKfhB9SV3e4LXNdjMRy8w7nNkWDAZ5cenSbchZYy2UzFerAszkuKF6VkZjo8",
  "key28": "5pivLAv3fKcbjGiShRyqyrSbekDSA3ELAN3ufwToLg6JqBoPEwKSov8sk6hJ7FEvb8nP7FQPUEeQcCxfiHGsuUVY",
  "key29": "4DKNbshQntLoQ7EW3DdSTa43TAHkNuF4jRMqoDPRtBUpjobUgiMmXgoxPy41i1Q3HjuwqudaczmafgQC3Nxb1QRy",
  "key30": "5t26FikuC8p6So9ciw4mVAdsiyMvtZ8X1Dvr6paKjHNhvRWAXEAJY4N7iHdMjtKTkWhYBou97k2cN5K7nCMmaGfb",
  "key31": "4u1icXYA2VRH7AKuzJRQbA95omLNrmfJKnL76oj6zSFMLdoVZqFQJpCWiMwoChctSdwGBNkBTF2scThaQeffS5dr",
  "key32": "2iS8EV11zKMxeBZrx9S88tWcdLAdBrKqk7ShFt2d5jZPiKe9oCZP48y5hTHxTneVQBeghLACzmKtu3CZvFzX5Utg"
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
