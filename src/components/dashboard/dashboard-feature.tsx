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
    "5JiSQPnidwAVpJ7BEupfQPtdUuaVGPNcmkXzTP51wxA5TQcoBemy1P9rrFRjAefFjnJqxL8suWUpcJL2XPVNTgMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nbx2afzpgjekU4zy3YeW9TXChF9WJQQvHLGGPrVphKWSjKWLE5kvWpdjXrGugqHKLHmeGXiv11HQKymi9a6ZBtY",
  "key1": "i8PVgoNeQRvxe4Z4Gs4CrWvRgoyVuH4jdRAuWGUCoAPECSgErPCTBZEzdZiVfxtwFGmunows4B4T1Rkfro5X6GC",
  "key2": "3aTfn1vFPPKZHmtrJfKYVQFVVeqnPKu6a8gaqixLFpyRJr1TJg5XJ6gruD2taDX5PWHsSaYvKnP6vAa3tc8mcNgn",
  "key3": "FfQFFTbCC2G6B4ZAe1pwDYUbrTVaChmLq7bfYtAAPfiGvgGmuxcpctvHHYYk1NgcgoeLh2xnJe8fjxLmrAjzJWY",
  "key4": "ZzpLzGAEDCQ83UaZZRUwbgpHrpyodUx5MANsXcmpncUoGug2nhF456PxXmBZPHwrF94jNa7qSb8sbUaY5G5taxH",
  "key5": "3WKj7CrFY7ErPZTnWnVoLFSuJFeE2FZyqamEEQR5QC1hiQgbits3ZXN5kbC4UasDeKr3wwVZuUA7rkKE2D7Kzfy7",
  "key6": "2shTdH8g7hivkhXYB8it9EAYJCeujEbRbpVxjWDjwAg18Ue8qvpvh8kcBYt8KvKEmFFAoNUuQAUm8nq7ure3Yq8g",
  "key7": "3mQUhDNDEYgJNBUnQ3JRK9X4AjpHtRHMfX6wQsyZZ62ncMPKfqsNM8oAtG4Ke33QMsA7mhxFF2dmrGWbhs1wyPno",
  "key8": "5khLLZzmCiDVpjQCkJK2dtQwEiwvuYu1Hk9Vct5o1NJ8RsTGL86XKKgSRZry7pvKo2MUXUhswo1by88NfVrMTJBP",
  "key9": "34UztMSt587MqrawntspModQw1UmRatPhKMBi8Tyk6VYXkJdxwNLc2vxHfxDQHbhY9cwyjUF9K2dGcqtcx6Bd7hj",
  "key10": "4Q5wYBxpdAigLCtDQXh3rdJUjbLxb5LS4LrmSiRFwE6yihgERV6KgoZGsyGakjA8SGDWsvHYFLU6cVbuQaFhRiK4",
  "key11": "3uSYqjprGhrDKyr2H7fGzsvQNpUM2oarQ6erMFeCaF1rFWdJJFojJoKAmLbGzsFsLaQpAUvGeefMKKBG3uo89G7s",
  "key12": "QTtp7XuFax7DDp7L2Wu1d2HCG3GSKVPMXhTX4pLGuJ2DRcrCVPbMwNSjMD1urYAKNbSompTMChNLEVc5uphey6s",
  "key13": "2TYNCQKnQumDjhKxXRkZT7eVS9eNqD3uxTDmzCRW65fuuqbYE3Hp5zxgd5AgKLWBrW29odD5JDd5BjrHZWnNS9kq",
  "key14": "3u3V2oHGmWjbA582r39MPpGLrt7dVbQnrhNMbZY1VCFog4tD6s66Ep6Z5Y24fvbEDBCiWbXPYViPJg36kfmdpx8S",
  "key15": "4FWnGNVS3YXio9asvYTDAvaKZkRGohnR9SbKaN6DtwpJcQMEPPz4Kx1n4VPirq5sPyzKxjJfeuCn1kWcGjrNXds1",
  "key16": "4yHSykNKf7Ebk4Af8mDfyGaZHuCpWvC6y6NevpPXcKBBVYcDVWkYZ7UuNFahDkNka2WNkaX9Vi3nAr5axwRTzgrx",
  "key17": "XKf598MUVaHLNNtq1rtbheZTA6tQgn5eGVRCyRDdAcLb5b1WXNsXo7pzjet4iVqwGrvZxnoQxXSCw1FRb2zJ6vA",
  "key18": "5w7YbdAU7WCk8AtmF3kD2qjA7Ssp9vK9ZEapR2sHnCn3s8rJt3TCz89D4bcy82vk3ra2w41mvFz9q4vqBJnRg9YN",
  "key19": "QnnrzpaTVS6VX2bZim7hj8kWVbvr42GMbrhpuCcrxX7YBf2b2Va23GkMCE2Ngybq9ULo4QWFvYkprofE9wqwVio",
  "key20": "bVaGcpYRN34vNYKzbt86ykVuVwyQKLTcbgcyUx89KGfqWWAcUf2ups2DHa9nQd3CyjfxNAteRpUWAgJa25z9oTF",
  "key21": "Wej5i5pHd79SMJv1HXU8hvmLC1MdGWrstJCUxQroqmPfhgBr39DKmMiynNGNHykchje9n11hk323j7pjuDq3umC",
  "key22": "56jgH9zs6TuRtkoDuX1ssLTwNgSP6FRv7oyUkFoc6mSVojJf2Ts3YhnhFDKVr4bjirjGHmHcLzvVof279VRSpcYT",
  "key23": "5Jx7gr6EQP3XVKduci5F6NSNKJmNQtMYZPkqa8hRb2XwDgwXgjgN2isse1teW7SBv2nDzRSvXYDBoxwYLUJm3vYJ",
  "key24": "3H7kHAGFkW6jvZBGmWsauU9RJ5Q7ZVDNYVzEmQzwsTzGB4Qi9iftmQ57waqgbYMioHJ4QWe2Fs7QJX4VpoGri1wp",
  "key25": "xt4ExzHGv4XfnE3n5H2WKTD5dFjHXvHxKDjV2AWdA8Z2YzwcxvLgaNykUjFyB84znyggL7ug82UYs6iPxiftNU8",
  "key26": "5exBye77aBpgu9PP1r2D59jeXcukcAHWaHZQSa4a1igny4TdPChspbUaGp1nq38JtBuVzBXw86XCpeUe4TsMshAv",
  "key27": "53Q1baRxAAD8Rd8FgDyUURUUyCtrnQ7avF8HVhM1kr8Z9pW4iaDU4oUnL6iegmqt49uN2HgX3ABQC1VSmkgDfDNy",
  "key28": "3umMJKcWnEDqyX6BVRrQKG49DvFr7pXggvHFxQBeTw3aUVdDciPzCppKUBa2fit2XXa8Z9qk1tKVFzK2XP4kY1L6",
  "key29": "64t1iFcfv2r3jZuKu7x83iwBsfonVdy2uiWxPK7x3BYDUrqRgfk1Y82AEUqgFyQQMkUTupavCNdTSM6mmWTb442b",
  "key30": "5MuAuC9B2REBAY5A6Y9qrGQi4zoXjSPuT8W5gJuy7dJxdCp64pUvcJEU1zMHR2Q5kw5Pu6tYDCxXpaSG9ToFtFjJ",
  "key31": "2yDRuLSgrfQ3aZXdgZZ36RHeVjSa9itrbxgvhkBpr3Rn5jgEL3BjpYWpH1v26f7BP1kvtss4uUt7gVco7tV4SRLZ",
  "key32": "NxczABm9owWjzrwYiKtRPPARgKfrnCT71E5r5XMYJkdRSThDH27dAdjDXcFVkNGeVi1T1bwsjB3nqhm4ydxG7Gz",
  "key33": "4Upvq8eFXTUbaJRTFUXV8syyRpnvzAqgBB19NNVKzGpk8eKnmAUbsinTJAQkGFx6LLVjeHpKojbJNzjW3qiy2hrF",
  "key34": "ztjRgSvBYTRkvLjXu6KSizC7u6rdYys4JLMHkoU6zF41zbZRQfmnRQsYgd5qLJsharZo4r9gBv6B7uAm7MV3Kxk",
  "key35": "4TTVPMmS2W4iaDtk1Eonj8GiC4DoLeKrSVAcHG44jaTLVYmFC3P27E8LBTMg2F7S5tbRXkQxasjwocKX1SPQmZ2N",
  "key36": "yXnfiD8sWid6skafwMSvUAbyAARJnVWJZzCGPNXL69PPaMmsPjMbfkSS4JVYad1bKy3smmp6wS1iBMHfjdRmNaH",
  "key37": "zkpQde3bwxmKJwifvLJauAdoKjTdRAFUvEZYaFwiyX33VSwhcEb6WkcrNiC8e6EH9yD7a3rUE7maoWKGXdkETgr",
  "key38": "4cgQ26qv9TiWt92wXNGcLhSqdEYzgvvnVuGWYPFqyuzMh7GLYMNNUq8PJnDmsL4Ga4z6EF6KS5pjnzbdaasfTJnY",
  "key39": "5rHrT88GX8rtgAKXzxS1JTXnp8B5AzHqPV4UXGNHtZRyMmKfLanTtyyf4dfJgQXAjbqPiV3J3pjqVTzAuPE7vgFe",
  "key40": "3yf5M3kAYnAdvrbr9ZphSLQ4trLMWqUeAJz4hZ3Q2C3W4JXTP9TypbRR6dnMKkny5t9DJn2egzT7bajHFBTHnkKq",
  "key41": "S7N1bbaYPKmhAfRgoZCg3BFd2aX5Pwhm2bnwQXVPJRAk6EDcejLz2E4RbixAwwaqvkkAsd6jeKRQGeoUHYJ6anQ",
  "key42": "4Zkd2U8EUTeFgp95w568bidmWEDLqhtnTaHE6xgCk4DxR4F9aPGMVdmxavz6otqEY5qCdePh3ng76rnohcvnL1Z8",
  "key43": "3Gp6hh3ucy75TXr9vBcXuS1QUzZsTFt5meKtdoLjEURd9eobxEeNuoKExP3mAHcsf1Pb7anC8ZtNUfoqhJ4Dwvps",
  "key44": "4tiHWusNYevX6zPuxkx9jWhUiPsw82jEGMvmLpR6krr9xRexarscHpjea4eRJdXT7TSTv7ZpFGaYcxKRk34b39gd",
  "key45": "5PZ9tdcGqRkqJE6EtWGTaGNGcWREcWRQcUVtYY24juNnTQXMLScfiz76X3BgT11hdZNyWKGDYc6D5Q7Ndsjhpr9j",
  "key46": "hKPvzEQ8VswvJeq1szqshz9JGKPUi8QGwTCMpekw6vujyP6xwpgJCFoTq62kuxpwdcrx1dyW2kPVbHAHunUVUo8",
  "key47": "5WQDpZ8otaCcaKaQogFLWJVK6AnFEYrcr6LpffBfePKy5oBaLGgw6w5TkZA3KVp9sTxEeCxzR59K3HcJwdUwmdt",
  "key48": "owuTENWgNheYTt3KUaKAfEzRMhZeuz5jEGXHugUzghLnhqPdB5mN3VTfxJa5dJwghZvmfvkNc3vc4zuDRamWFPh",
  "key49": "2CGi8e2gy2ns1TXWea7Ta8EcsxT9n7aLknbs5nWw4tJNiLvvoV9G6F1FmNkN8vZZ8Vcwf4PjLuy9EBMtxAuTBmfP"
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
