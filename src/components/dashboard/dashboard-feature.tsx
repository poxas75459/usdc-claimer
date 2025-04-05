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
    "RVGBr4F8pwPpv1QKawBusL5mXHWBsCRcikFHUmauePhD5JRxsHNCoixe5YVKrNpRvCLPtqXMyJYFixdMNwqZi2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gQzTN4KNJMX9gmzPHXTrsihW27uyteTdbUJrBgmtKCUo4rCwAguhrSVHmeWkTyjzapq2CNtYhy5ejRgn5Py7snR",
  "key1": "5FD2kWsj4BXXoTf2Zf8ZtDnSXq4eaeFXwrikzu68zh8EPvMtDwEjeziiEuGfvosagRuXQmHb57trSuRv9tfTqBzg",
  "key2": "2sM2z8EbZBgUHbHPVQoGBFweWB8GfAo4thUPvRN2j9BBT3HUKX2e64bvqUcDGwJx7yDZbG1PYK1U4BZdqK9AWtBp",
  "key3": "PZ2QQzVRQweH1LAptWDqvQhqhZ1GDesFwD1o792KuzmYTUvUZJp9SYa61QQSbffj4aFG3zr9X7YcA2V9vnpLkED",
  "key4": "66Bds6vDYvxgSE6VeYSiJAKkn6HKu4zicoSVBHKvyTrj2osvtcX1oit5VHbAY9p6o9E76uAy63iDQaUFRmXgPgT9",
  "key5": "nNPGm7UHJkYbdaQgaTqovbKsiPz7jxu4JrUYvtWuMauG1ntsEYyYAvCTgqRssYXFf8WamCDpd4xm2JTBkzj4AbS",
  "key6": "362UuQ5MbmXEfhwuDKSQmGFr8XBFmc372MoeM8mcScKXDenpm8nTcCRUpg7MSuRmMuffCq4qGvg5svHRCsXzP7kK",
  "key7": "45Ny38TgHnJQaaMGDTxasLiWrv8UX1ssijxR2ULA41PJeXHYy2DsXQRA9yFGnc1MhimKQATRoK7VkP1PxAAMooYF",
  "key8": "4kwvNXbmTBXFmBSgunQ4FukxeffwJJEL3Pq7tiu3PxaKhBP1aR5yWmAQ4FG7FYwyhLZ1GgKBUndLxHebuPppRKf4",
  "key9": "5En8P9uP93hMeeLzbPVhxPdz2sEW11vRAby3GyZLk5Zg36uSp885nor5wNQvFSzKzXqFnpqGdN1n7Gvc5bRHAYJ1",
  "key10": "h6VoYRKeQLNhBtgBp14MiruRVGE63BnJjsUsyTe5k2LQ4croLWDweLVbY314eYiw9VEzgkDckHfrwQUhAEJhfAk",
  "key11": "5UXK8YQ2GRhVtdCmYGQi6tEXaC2eurPNk5hLwadxZggaPQNUixCCSnKWX4RpGd6HQgNcfCw2aoaafiMMvAgGfzJp",
  "key12": "2D7VAyecaCTJA6kAQdVdj243kcCsPyaEgFykTMhAgds4povxSoacJRnSFSRqfsD6pxq7MLwxNZkT417XatBjWcTF",
  "key13": "5Letm6raKECgmVk4zu3ah6xiHFBbR5FD6G9EWmw1GafETgVygNak9nqqoutMWeVLfGav4bTVcifzbKtwDBh2f9pa",
  "key14": "5gYbTKu7BkYn5xmWyiAw9QAUYbFPvQXGuEt1sHvu9qxdiHcnQsKySBLGDqFVEaFocjGyAS3eKPrjCxxLAc3UrgzF",
  "key15": "2EGGNKPKx1987hxFHFV9ezEUjDa3krXz2RkaMJ7Hppe4hS5yto3UKYogeE6VLaDeBGWK8bTyx8hRZGLPSdGunQar",
  "key16": "4zTcWhEHVbs6aXaH3qdSHpRdp5CoUgcKNKqHyKAxdisezPddfxk7MMArKY93Ak6Mi3mKkoUURvNXMBwLbbUcHDf8",
  "key17": "2SkbLVAt1ajAhrzyNQEmEHuTtKjHThP1mrX8LmmGTzZHhwhYPkDxmMc5FMKirLyL5eUfJkh4erR88sGtTK7W4HMP",
  "key18": "3tyUeU3F4vmGFFkaLafzkhAcA8FuYW5Mj6ZDDQCazVNcwiDcdmQ9o4waMnYcxroYacWJvwLefDkotva4SUD3Hw66",
  "key19": "x9JCkfL5UUPFWzNkhqne2m7TTyHSHiJhVBbzXsRFzdXTCgE7t83CvoXc1QPhmVjRgy8BV4GTg9XXvWzLaiTKUGK",
  "key20": "5AkUyMsk55GHFDKdjmcbvACNKZkHRg8fVWcD83ACn3jydh5q32RWSEDqE2D91ZHUXCrdbGFYc3EAEm1xKCKPRiCr",
  "key21": "5ZwbY5BnNPQJQJwsnSQzMkx3vs9hdkEgitEi8fWtRrph2d2AF5SXcy3kYZRANG3TYu8NkYFtWTbeEi2935xowp7",
  "key22": "4TXENJhBd2aGLDXns88Y8qa4hND91QoDvUJJnYD5p6v2A2454fp94rmtu1vf2BSb7ndBBmCfqG4oSac33LabKxFf",
  "key23": "4Fq5hdjgmKxB8z1SFQKwJtx8ouWb8iHzpia6FpLGThsqQGHFWkWDYWE1CoQBTYntKZgKpYeJnhjKxPfbhm4iQMT4",
  "key24": "3xQUminw26sURVqNPJYwqrTQ2xhHT5F6AEzY7GrhDLoQi1qpLfFnyVjokRT4HJpxmtFxWmJcM7LowfKpbWkWhkPn",
  "key25": "2uvpe39EPM6Pm7CAQoG4LXDibcBE7VCqLFxLPAsXbSs4cFS9JA4LVw9BhqREPadwa2udcgxY6pfKwyeBLVFQxQQR"
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
