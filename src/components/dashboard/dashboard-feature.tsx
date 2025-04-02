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
    "JzJe2Wxk6BNV2YzZCPRbqViZbkJhet6u969fAAnpg7q4Hpqdp8BmdUNriom6EWFnyx5BYNQ79ZnM6Uim1bbXLBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NUDmyfeCHQJ482USfMiKLvtrLrKpPoMGLCPfjiJUFaYeAsiAsyjfrEF6PpQzRrNCd4pYjWhg5q8iMZsqTvDEFCT",
  "key1": "4HYTZULZgDC11mv8D9hjkc43GUXYWp9bFJ9bur5Pnbv7HeffALw4tMYmfZCa2XEmRKdMPDNnRPTDhduCrtMpe8sR",
  "key2": "5gm14mGDmBGqSnbJJcqfbWnWzbPojK1zkzu7ix2V8gaUg6V8Lvsj4n42hKyyxqVmZyBuJqhAqDhTk2ExBF4gB5B",
  "key3": "5o4kJno2nbH41VczCRz5sHSBhbKLjKGa6z2HiZNsrJuy6EBRYn7aHJkbKBNifd7Sh6D3GLefzi8VQmyTfDnKsKaG",
  "key4": "4PDjtsbqcEBmjNLBgBi1cG7sGAMi4hEYBTjWTLdwJYT5dSrPfzZDEBEiJE83CoRvTTvmsJkjs25TV9dUHEaaphEW",
  "key5": "42j4aCwgHKW1iLKBg3Lx4mUBrzzCESXarnZe6pHMHCLgB9NShYu3X56qT84j2ALy5z2xKJHoE48sXjhjGUSUykpX",
  "key6": "4B2bHzHkihX3cs5yG6bawbrJxjW3k9akCpL8BiroWwZt2mLEDp4CQ9ZEwbJp1PsPaC3yugi1YvkXPvEYSYJwkv1L",
  "key7": "5k9FvAGZxG5NdQc6aST5VFKD6PyZ6uvFkib9UGfF7CWZQcweUBkYNkBdebmyWt8hCDGK7WRkG9wWQATEa3fmNLaa",
  "key8": "QRzfkqdnBgZoKPQhZnmw4XUPd16Sa6fYxkmME6fm2zWTWjoAZcbTBRJxLvuNwqjxHVvc7EdzFhUQ7DzN561aYy9",
  "key9": "2Tk4LdYxBrUMap7BCiQT2RpSk2rLaKFzxbPVwhMn529u9iC2GfhBZ7ECNSP1uNHuWq3tESRhhaaUJxLABz7vJeDi",
  "key10": "GCNEDkQqJzQ7w1g8iGtcrVQgyfX5E9o6xXwAo7EBvQ53UNXQMoc4KH6D3yV277F3nCi2TwfVA5JBjhiP1vNs8r4",
  "key11": "3htoYeHL5BjtTF9MD6CV2Pz642kDRBW9h4QFLeiFj3a8U8jd1cpfkeEn188g1TMMYvMPhDcoFXhUmFYAwxFBWPE3",
  "key12": "4bASAQMk9suufXfwkzTvR3Uh5UhFjVcH5NUbi6tJoEYdZLbVVi4c8fKEeKoq7G1ZEkQADG6oH5EpGiYHaaQnu5Dp",
  "key13": "4w5fk9a3uMLz7y5tDii2m2KH62SN6o24g9G585FG5w4aA8diQpTk3Rjd3UGiQSjZLmwFDzGDQihRRkMfsbyPAqFW",
  "key14": "txHFs8TVvKVDa1A8vedryDG1MDt3uszktG1ovejzFWdrcHq9P5fHp5ewTmgpQPcPxKYaVSu66VeP4YS5DP9nZAG",
  "key15": "2Xeb2F1HKFpQSzA8fWBvLrTBQCbvzsUtsmFyVbmsMUEr5ZV5yn37M7yebwU9JrMCUCFYJyzRjUbyeoUcnWHJHqPa",
  "key16": "4fcXcYPiYvEv85TAYCuJAbTyydjxQyGkitiV3fmoZTMPo4SGvXtcx3QKDqtLjG4Gv5ne3zxshsCSc9fgzBxkbh6b",
  "key17": "4R8dCUz693p94FgyNK16vF6t28Q4ZtyK1Aa6vqqwXi735oa3MzW4UF7yr7KwBsNYJwroJMbq4f3G3gnDt1SNvsEx",
  "key18": "5bwNJn2xmpu4az9r5DqPZAfYu1kGpnti5Wm6e8wYswREbVNxgcj6dXUALp4urzgVz3gHo2ctktFDX5bT5pZhXg6",
  "key19": "4o2uPggHktwKzTJWFVoTNZ3rZJN2BzoyaSkqerSay6KFE8Un4tdoUSDfkiF32enACWcpjyFNYpa6Z4b6ujmk2c1p",
  "key20": "5HcE4dxumMZ97XT91SjDYCyZDMui436YYYy52CKyBiHX1c7Qm3Ny5dcM8k6NQ8kjhTHS85W9Y437CTB9tEYkXwJY",
  "key21": "4N9Q6LurMFb2KD9fqoVz5fydHVYYGgpfmQ3rPW7K4Ao7ZrC6asBKhFrg8mwL14e1bP944Y5uhwZhcQN8gacXk31q",
  "key22": "dboC6JZKxDJ7Qz69qEQbyneiWzjL1Ey7wAwQNWJmSXCXr9PBN1pJwhsPh56fsQmzCfAPjQSum4ooBrebhTzUEQi",
  "key23": "4KujaiC282LqzFcjx9Nf7HRYDPwUDmAvjYfA7mk6x5uq34GVNgFpsHqRjqQJRhSzUrXvJEzeGo81FM4FKXM6bZfC",
  "key24": "3pL5LbXtGC3xfyPWfamqqYhe1LuUtY6ruDeQvs666bLPZZphptwSfESXaRTLQrMyLrhrS9j1VZXjoYvwJveBRna3",
  "key25": "qbwKKPMdAvji8AbMs151QS2jRaHazgK8NWTSniCQnCB1kQtpRwxDaF2bTWuTEnLQJAJbR4yaaw1jwYWYtoDx8v8",
  "key26": "5E5CqDVAd4SsJ1vVGbLcDCmFtZkGeLxGGXHDxVWVwLayBqgSgca3Wony33aFkCc4HD8Wo7gvfBok5HAavkk1gXtF",
  "key27": "2n3TQS2UKQ7f7rUTqtitVwZVuqWuQCv3XCBG1trjkR4VSnyRQwMNL3A2k7bDCVeauFuR6hNTiwuZNDSdd244kbzD",
  "key28": "5SvAPqLeWkD7tQc8vMfVuLWonHRvVnFPe2cjdWFPn77pmfC7E5yRwDXvjdWxDbDRj3wkHhoZp3mdskbwR5ZZBnLN",
  "key29": "2hvzDeUqCH3NrgAX6q1Lkw3YankNZmKHk8kTQYDj9J6Ca6iocdsdmHCnYr6BuJzeKES2popXS816pqQ5sPKEBLMJ",
  "key30": "2m1b1KkhW7ej36dF947xYMYapp9CrgoX9sTRtGreFLKPVmw1D9KrhNNNYF9L83vt3D1b7VsrygpuCQvCFvfCLwiN",
  "key31": "5G9wrGHezWJuuQpu4TMBCRJrwQP6gzawZvzJDNAdUkVZSSKQqPWadAefhByqSZYbwW5yKG8wrXfA3SrzW1VmNnuk",
  "key32": "4EK5ohKCmYTqhSoRT7iRV3dfzAJhMehEdhEvWHAz48SWztwCxt7XcAPn3gf5YHZAb9UZe3Ea7a4wEbEDfc7WUT8W"
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
