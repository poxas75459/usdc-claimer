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
    "42yWzYN9PvrovCgtZfr1rbyWCZSJM777hBPiuJh7cvjJoEEZPmR1HzY5DCL66uoAKWQYAQY43XhJriHrMmv9zQJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dVBd1pKMuLWf7RnMVvttBJ5mZRY86TuYBDAgEUKGGo7AH65EZXNrBxBP8KeCTU3qw9KLPf7yA4KUoVwo9B5Zh4r",
  "key1": "2bdMdB2x1bfsru6y5SBjFAJJksDFmyUbU6kMjQfCFssZoVfPXZ93scT8xaimiuHjLLetKU8tcNsVvLmNGZ7gEswY",
  "key2": "3H6J7nVDYhbyj51Ze824hgfTKAMdZdfncYtQ42gFvBERrGKZ44CPBdEuLR74iRp5rqdn7m7QyAUyKr6U92gmDZ9U",
  "key3": "4gKE2GASNxBRCAsm5dpcSuwsAbWkSMhddQkS3KYyKzYMXyvfgNT2dnvnSqFA8cN51JJoACemcPYNaMtsDAoqg1bT",
  "key4": "9xGbsYJYpyxuC8JqWW2z6LoeRYZKJhbXTJeuL6q75FEmTNyQpqonjpuyD7FTDoZghSiZN9bR3zFzAXeuTdxTo9e",
  "key5": "5WZo9j6nw1Ky3f5wbwQfYUQQyWT8RgeGGm2cqKf5p9xXTg3sX9mBF8we47EK5wzsoXeBwJeUXhMo2zdRjPEFQkcb",
  "key6": "47hBk3mY2D8dDUsCLYrk4Ka1RKLpr93v6foJkVobaZ3b8pmx68qKaUhHDbKdCuQG4hb6opfJgJiqS9yNdiTAPBYD",
  "key7": "4qiqgzPKjdxPrxA4o3YgzzL583ShdjL655poePefeo5FRnkw6eQ252cvJFz39qwUrzEvSvHP14kfoFHFt9wSoq7p",
  "key8": "4dgXdK6fw6FPCUi8bNfu6tLMbCGiqETfJiZFTNMd6LgbrJmP3aAp6ft7irNgFMKfxmU66po9zH7ezsqFaKGTGfqV",
  "key9": "3TNfVVRnX7aC7vT3y24daGwZ5S88Pbw2cWWmnS6jWUAc1Z9EBspQBctnpE4PfQPQF1JViqVGXdhNRNvt4e2Cx6ef",
  "key10": "2nJmFE6ahjvHpt5h5zuajM78onc2QrcALubuY1uESnwuxm8xH1fRcKmKHNwVqMQKAjnUnPKreP7H9qeFh2XHLjVH",
  "key11": "2EpgtcowdjfGkkbRwHdiwuMDuwT1xBWZARAw6pS2Jr9nv9XLcdsEAEYXxHU55rWcGqm9cJce9gwCJxUvKUVxLiZC",
  "key12": "3Zv1BqWCMrvLPFMX3mof2QgUc4BXGKm8J9prHQN9sF7m9jmdqFXrfsww9JiKjtpw84zRu8xNpkrBmWCSC25vR9n8",
  "key13": "3d9vE1hEoQ44FuJ4Xu1H4bSLt5Rf6SQHKY1qcYgFRJ6am9rRdQ3GKxm8C4Q7U6g1WS3HpSqA8QrTNkgNjTqWojmx",
  "key14": "3cnQ2zEzPkrrBbhtmoABs7e6jpiiJ78ztpoiwQnn9MFSJLb52Xv1sgccxCHzektRmCAoe5xB5WezzYWq5pnzM5tD",
  "key15": "jraK6Tcq4kaMVRPRE1wm5izgW6aBrhP4SqphRkZL4XTs6NuYrYE3wTmpYhxhikz3xWt2bXFa82RPoV5B4pK3SJU",
  "key16": "2zzHDRGFDaiXoK2HXneMq4VVHC82W4ikqBBZx8oeeH5mYzqqD3Vq2pHDfMnQYoXRgwJCTWF7qFXXQX1dCmeBXP79",
  "key17": "2phHaHi3btYJob5bNejBwJ87hkDPP1mM1c6CPRyd5QJ3fcpcAcni6XvyRT3SEbcm1Ccp6VkAAXx8WztfkGWE6PDH",
  "key18": "atF3J1nXcayHEs17a74ai1kYpm2GdXZzWLja8nDwo6djYstYJQBdyoCjBiV5w86qH1ecbBcfxBsQH7ivrUW9GBu",
  "key19": "5BLeykGbtxmSP3CjSXh7oJJEK1zG6XBRrXmxU3Ctm3VJS9Y2zCQLraHvpk2gmVnsPejphAjW5XpNCUz4WTLios13",
  "key20": "5pGWB6MZMQwjfBpdejGNS1kjtR9yfCqpHJakkkd1TV3dLfXmHKxBvK1H9GoDhBgCzMM6AMbyJQ3h8SemwcjFVUek",
  "key21": "51ANFV7Kt5AZrKnvgtdVbjfW5BsiMgN6sWS7kmuvDD6uwv4ZWY9k4TiDkmWw6FMv2Fvbeygu5mFFvkVPzWsEBxN3",
  "key22": "4XJQm7pdCVxJXkgUGYixpMEyvzfrqoDT4Zyzvyiejyj8JCTfebFZLmTdTnHudt92N87fwTTPxRE3y9w8siVzj2T7",
  "key23": "5NPxhfTRygoxs7BC4PHqGDb4CczkTP7c7Q4o7TiuNvJVjUvjR7uUW5APJux6iu5aTvpySXWQr9KhYmqvTNWQwmem",
  "key24": "5PsqVXu9e6j8rr2ZYhcWkqneuuhySX4YK3QinpJuP4p9mKhQAeSeEgsvzE4js5ksh6QSCsMniHuw5mQExaEq2aHH",
  "key25": "3S4AwNrfvjF6VXYUZK6pbzSWa9aKSFccZoNuwFaBcCyywxbGsHEZEzmRWKGDBQzkQPpb49uVazot1xompdALVHGZ",
  "key26": "2Ugo1Dfi6tRXvCrEHDvzjCYurMRsgg2vzBq6ayyqphpV9nficGc37she59cTmGKY8pkoeMgghVREhufca73f9mSd",
  "key27": "2NJdELQ7gn7hFXEBapCHneVdArk4gaHkYKL16XEZVbn4wTcpxxabhXox2gt445wFfFgVhpH725aVfHmzEdruDXQ5",
  "key28": "5nuoLPQ5DUpCpcxe1PgjK5LF3r3pLJh461P9tEv9fHWxsVj5NKR68ybJFCQqxMEBknVsFpBFRtJBU51LvjE1xxpd",
  "key29": "5UQv7qGZR6NRzw8BKgiSY99xmBd1shNes6RddB7QnGLPhFjQJMAsSG7mpPQFdj1W7WqUeELNdiptimuzyUJXrNY5",
  "key30": "3CJDKzHcZ4AXHsVHpsJoxVo6tTex4yrCuXFTJ2ZPkwCSwmvuvSARtQUNs8HWnPeFBs2d1CjgwpVTaxQEwi8PjcWn",
  "key31": "5mpsisEgbEVgwFkPngQdCyXXz3BA1pyUYqoRJuKxpUyWogwGPJf8yUH8mcAuruzVVAVcNRVFN6p4SYB29pFpH5mL"
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
