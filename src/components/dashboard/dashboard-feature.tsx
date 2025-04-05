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
    "3Q6rKFHiUzsdbZBTeYdGyHMynVbwet6gr24THRYW7Z57QkxYR1MwfHp9Pxe2MLqyDtFK64bvjhnUGo29GTpkxksm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32UGq4FNDi3WAERAngh45R7m1kmxFSuZLzRzmkj78NRqmJKEYUDcz59rs8YmuPVWQ6LjKFX1n4CMtgXTi354fiSB",
  "key1": "s87yEVxLeZwW5EbHgVaBR1f6L3ScWyv9JXcNbXwWRERpUaVPepyh6oV3CXAgEUuwvhho7wcJ1Qvfkpqgo1SvQGE",
  "key2": "R94LsEFraHTTED6Gsmw29mnhe52xWnCi6FtViu6M7YU63VWcANEr4dAMVdEd4MCPrmgBm1eRuQd7PMQmZJa4Jhe",
  "key3": "2KSBsQ4HoaEVsMCvq1fvYKFp9x8BQRDwLi6jM9fLrneHpthp16rdBQzSckqPAeu9czcBaH3rGd6Ln4jYPU57eXHn",
  "key4": "3Gp397DeFB5btGpUBPfu8KPmX8sfCnyHoe2WNiHiokgcAJXRwiqCM6MYSjaF8i2KNzZ68CMgmaPmwXg7Xn1jFRuX",
  "key5": "3dj58fqQ8xaQfLR6pxGpdWXFsPMSgUgagVDMZpxDdhaVxcWQY6fDgXPYxSVmtqLKjKTFhhTFst3FFMMYoaaqf3Gs",
  "key6": "CTpVGBLnbQPXMv2Bht6wGPcct7d9RJ3BHysm3sTFKdU3e3mzsVWpGhx1pu4rh2nL1E8WogSrwJymmszSSVkFC62",
  "key7": "5tnkL1YtignPwiNW5LMUWdhVng7soYR8j3Ydah373C3oRzcxkWgxP91TuqQekt3nfVx9AokGfhuZVZASSTyqasNv",
  "key8": "4Zrf1cdLfQhSgRgoELYqzoZ5j546mjvfpf7AokyXgHvDBLwrqcdKzbMbYJUvJSJFcKChLXeefpx15yBnFquz4PtH",
  "key9": "2nSfC2Mpm5qMDaQy5eDRF91D7HWhhbci93Mqv7BYnDbtzczFDgY4iucDff73tqcsgTKSLkoSzZpnpZjLCLvV2HPN",
  "key10": "gM2dJ5ZjUsdhRKi1yf1gGmkk45nETugRURm3dFa6XMJrF4pE1EGMWTUSmCLG7FHuRx88DEa6s3equsN1oUDbrtz",
  "key11": "XUjbvsn7pK8tsywUgbnCYTv76CkmvQYmYncFzZaiexvQpy7mESKqyGotdUQnwD5wWpkkPCtWrCfdim88u1qmGbo",
  "key12": "5AzbgodNLrG6WX2otYntYbF2kmQZvyL2Yy6jcv7dcU9G4bBaUWZfAGkG5iLRVuQkYQbgYNnogoWbjzn6i6Y6fjh6",
  "key13": "DYkrUZycm7yBcsdf4JdB8hggJVLVu4V1YbPTg3dmw1sE89CWs6X5aLvNHAGjZoYK9YGc3YwmMTkUr6Zs8ioEbqK",
  "key14": "3YrbsvpkCMsaJWH7WngtD9r8Tc2Nx6r26dmFeCtHMmy4y2aM3d1ToFKYwGiAhMzBfy94eUYKzRooaMHXkf7PCuYC",
  "key15": "5x3Do66UkbDMvrczAeM7WPiTFq7VdQfF1deaksdPpQGhFcTjKEjfJCCh8QBELd48sY1KfoErv2pDFHuKYd3JEyoV",
  "key16": "34VPhgpLpA8EV8dYBB7L5bWHQyqfLewNXZCjbCb6YzCoLpaCKy5M1P69p5sUC23Gb43DNFo4vcw1w8LcqfzsXjko",
  "key17": "59Bck2WuocmyWLfVhZvTsKG5vqg7uWYpMcZ7q7fRBG5fioeX3vhT2bM9TNXFAmnWor9WUMBQkn4GTd1DgftNkCEc",
  "key18": "5S8CAtV27PVhyiSKUfbV62mSaRXE5nKcVL1YxutDdyZkZdUey67sMo4VdSM5GefwmQhhtjpWiyaNifYMu23vJhSk",
  "key19": "48Xew63Xc9cfmdVXXpeMfZb2AmNVotiQdPDFo9tEouJPq1ve1jKDeKEGn2KRJXUxrGTJTVZ4bBRoELP9k4cpfGkK",
  "key20": "5mizd4K1vLJYC6HwRuVxay8p1ViaSPtBHFPkbPEYDQTVL784y7hP753J1otAo5AWhyGMGNqXJ2YcGGAY1DnFDqkV",
  "key21": "42fkpXKK8zBxs1L1rtQHeQLv4fFHw6JNDHxpCphYrE7o1Cq17DPUJdvvNQNcc518Gr1A1zKkaQZRx3Uh5v2VaThz",
  "key22": "43ksLu8LcnLVVDsDL7bpy2wGwYUZLwNHUPkHSmWX7SupfJjMXymmmJWS5Sqt6FamGBvyELdWhXDV5X1F8JydQGjb",
  "key23": "5vLNLo6G2ENhn3dEnrrCPKKNNfP5uLavbKUuzp4fnuerjPpDL1dYsvJiFF43iuwbKYx6EpSGM2FMtBwdenVTPmTU",
  "key24": "67TsEZLMjq3T6fcqNAWnM4w2LVBHhiGTK5JJYjAVt5gn5EBwhyPA3zDsbS7pwY7jQrMoFR1hCFGFabiDxzMREUbW",
  "key25": "NZPovhcggKVVpEhudkUs9bXhfqxuB85Q4CzePNywz87t22DgVBYkXgS976UnHsLqGj9RhXwDTh1fiQbRXAjhwQd",
  "key26": "5r9L2w1zdasDCts1Vfy3YuZTW43dXVVg9ioSAwVNNvxT8A2mH1dHFbWe3CZQHGYzE1bb1NL7zWZWkNmXrbGdbj2N",
  "key27": "L6AG1CpucdqnB43DxyVME9Pd9KqjFMqKzNRK36Wn2cw5qZUjJzFsGVLX4uHbZtyoCgjDX7fRurFSb6KF1xxGPUU",
  "key28": "Y7psZkzMVeHc9zdp3HTx1VN9aCs7KmKHvjHWoZPSpMT8iN9AMu5XSMbnrfhiofupEhDZZHEdhcjA2Nrp6LDheRt",
  "key29": "45cFh6Txzd8PYtWHe12YZCemniJajb6RjDHF26qgqrJzu5YzGRo34EVcSWsbGxzzQ59ctkNhgBH8JzYtcZaEzHsD",
  "key30": "3VVfohQFRNjVLmACdrty7xrJRGt1GR9eq8T1N45xNVEFrdfD9Q1yHxtYZRHcHj163auR5WqFPG1GuhYQQmBqZSCJ",
  "key31": "4nyKSanCCZ15neAKT3nuCWMtN3t1apbdNdEDjYLjGo1zw3QcVF3WgRimN5PAuGZiNU6AaNihoXQ45vdYHPQUZdbM",
  "key32": "4DNrmD3xrB9VSmccUj3e21Z7AmyDzHe6o4SeyKdZEvXt3CjkjfhHuwsT2bCBwn2VeM3JN2NHUWZvWw6tBVCPSSa8",
  "key33": "4BAm4QWqt9khsSvnjv4pKAogasbi6fZu1Se2EyT8WcBtmrv725byc83E8EY8QWUP93Va8rA2yHu4tvStZe1yur6Z",
  "key34": "do4aTDSi3MVdJAyp8VkYPTkJdQcgX4SiWEALCCRwG7hvCfNxy2SeDWjDLGcVCVJ5vmSovWja7ar17jdULmXz1Pv",
  "key35": "827g9ymxrVMcL6p9pQ74kJAizn3YvKxE3uHpAMwKfECtTPTPvb8gjQvTMrMferTbeuVEKSvJvn84SU96Arbj1CU",
  "key36": "54DVQDkvgbEAZyjH5fvFdM96xkFoXzQTSqUVQNQFzrWx3nH4jLKrFatNPLrfDXCQnesW2aJ9obExE6b4H4M9ZSXq",
  "key37": "3EdDLbmnD7DiPNNkoQJwYUitjrRHjrNoji6iw8YGpz7uWdDy32Dqv4ZZpmWaFhLYRg6wYUUfXFoLVwXibj2dk9kf",
  "key38": "4Ani4kPTiuLyiBgYvPwi2HF8Cag9yAahPWLCSvwqr2isRwq4qCoLXHHrh7vtA87kJc8QzL4DgM65G4kTHZ4f5auM",
  "key39": "4WEnMRQqXWmFuao9MnN8nPqBfrU2iVXinzZfZNaEsq35CTfkkm9xbRdPmVaSV3KUSiyty8HEFXecos3RAjNt2H5G",
  "key40": "Mfy5FeUndNS2HZxmSgwP5HTLYeG4kMMLKNb4eUWRJ4Sr4jrQPLPpgHiMQjhGXNXPrb6ZmDrzo6Gop58kohqCgiR",
  "key41": "347VKuoBiwAM49JowgrAUFv6yYyYKzRAYbGDshKKJtmPvUyLtV3vjArdWa29RRkmGJgGVo3qWvVKTAEboVchaSxy"
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
