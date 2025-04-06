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
    "FXBFDfooLUdesN41qD7qncGtDojkARyjidtTUBLCQtxpMcthnE745HJshq7EdqoMEPy4mpgxFR29XZmJk2PtAxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SVRJ9eafZp2QvGHCKHneaejyED6SoJmuivqZ1Gz54Fc15FZLVU3hqHJxm9QpBWnzxfyNLFoS1QHR9CMStFKQ49v",
  "key1": "3bHignAz3wkWqoNNA9sPwqejdx6kaTFfntcbfsetybTYR47Jugek2mu6dLVDHVfscV5m7FEqehrvDpkg9cNBTQxZ",
  "key2": "4xLP3tzyJEp3tqfao7AyCrtMWtzEa8xMAhsF436nhfdeMmP2VisuEz97L2bGBAJjB3eXpTFY33NE1F8EcQhqupKw",
  "key3": "ChKJiyYpXiiT1JK3kHhjNMtnzB6ccarsVcVp3PnLBjnDJVkCQcsJxNM4KHkbqRgxZQj7okiyp7AzcVGUQj7X3jh",
  "key4": "2xPeKLRdPndNuffvmgNndRsE657RyFtGc84H2CMCw2he7dMttaXZKfTaQhuWajUbpKm5Qsnp2MjTnZnAQmuRdBoY",
  "key5": "4UsevJgaPCbFNzUfey5uJK5y4wMcYPzeN2NtcDA4pTx3S3eQYWattM3LuBafKzSi5SpVQFMATM216pa5aSB7ctr2",
  "key6": "3XZ2wGrJQLR6Xs4Xwr6fYmFUqouAH5Kdj4yDdhL7XAawuPWhS9rMUmw6igPAfiy8EvJnpMnU8ytHWFk9QkBmptfC",
  "key7": "thDZRgqATesCn6kaPwh3MT1qm5LRWMTHbLk4HTAPJtArN1UYnTN9XGoCBELiV42evNBrcZYWnZ6q5Pv7SVURPob",
  "key8": "2Nh2LzWW9d9m4nD6g8vgDHTombdBjWbempAf7EYB93hegWRFxY9JSiNe7DDVfDgnuxH1g9Lp94BprGB6hJXcAH7w",
  "key9": "CG6ft57PxB8KaLuXdXxG3t7VthrwLSGgop4pAN5krhFg8yEfvLqo3Q6dUuyGWdeR6SkDo1BRHBs6nVD3g71XDQS",
  "key10": "MNS42iRYpFrhybDuLy3JMKpfaLeUCw6brU87zqnR4CfiaK1wm55gDt91aAqjCx2VhQp33moLDXAgnLwePQErDma",
  "key11": "2wADDfxE4fYmtbnLm2Mytgwj1kkrRR7xvrv34KxQcc623cDFHv9d78ibieq2KPrU7MbGvZfrEVj4XeFr5eL658qQ",
  "key12": "SKZN5WW337K6pqNdSU9XTRdydPeeNX6BaeSb4r2sUnW9yBrmNhNf8etXMidPgxLmyPHDXNaHi7U3JSRV9pTLe4T",
  "key13": "Axf386QtFcnnoB1nUL2a5crgeyJQryigeSjyLchUf6Y7tsscd7YuB3JU4Ybu6NraD8Jrcmf8nZbQyWe4DZNFUyW",
  "key14": "5mjvw16AAXTXWivGrnhv5Mtdpnq2NGw9YpfozsbV5ZpEZAoMcqterGxRP3oxc4ZrvPaXCnHzyKNjfUYkgCLCWb5w",
  "key15": "3NxxKdkZGwwxx2TtripL3pCytnA7g9s9RmU2DNjDJFrJajEREtkxjHNripGikhv5Nk5zCuEFTKaNqM5WqfRPstUt",
  "key16": "43uEebLSpNfY6nBsJ6MHHTMuLsTg1ECQ7AdeivyEYv1BhY7b1JRUjwn3RMJzYEs11Fp5t1u2gDUigs1gqEoA8XU",
  "key17": "46PpQce1QnLvg29FVkwSbSF6f36B5LNFVhXCwLXWCLA9NGf5G5HPQjy1ZRUWuaLLkzRqsuUJ5jG5nApPVN4df53N",
  "key18": "5V6GEqs4rRRFvQPKampaHQbXDXdLeFRbMDYinYQ1YLSYX7ANwfHjRvHCKSGQQUyksrdVRFTCQ8UydPkeV3EsgimS",
  "key19": "26qH6miP8zXqp3h6hSkrvpbnzwYrhj1Giay7xaupPMF7Y5ZtSmH4zbb8gSTLZJdyBAY5vkAxsTXDWjztJkh4Buzk",
  "key20": "4euwSv5sBKQqqqSn53LHwQxvv1zZyUvhs66UkPzmpHrABvGcc5X3PKVr7ucG3J5Ti7rbbv5waDRe1qp9ExMfCpfd",
  "key21": "59nKeqFF6rB83Ld389sr3RZSWQPSB6yBZepMQxUxFx5f2mS41evHfbgqz769aanMESCm67Zc9pVxpyYgjFuCrE1M",
  "key22": "rtqzeSSTSTcAKX5CwcxmTefwYLs4gQXph43sWuXEtjLeKLRNZuXQR4Vb6sSFT8PaXTuTnyRcrjow43WtRzju2aR",
  "key23": "2oWpigXm3U4nztBo9iuhsvMtxj2fq62hX6yUN5cfwjhaZBnHEznJT4x5wjNHiw64wWbH3mExuucHKgecyoPtdaFz",
  "key24": "2CLc7DtLBR9AHpnFPuXAKhQARqc3hGNz4rnDydan1FwsNvB1AoZhApbSNWsCnU8AmnVf9DtXhttFUKGWECwVxK1k",
  "key25": "2rxwyFTR9NjuMv6HSEoSS8mT2aH8uAmLm9BJL15nn6cbHzHGbcSKCKU3wb8Dc8wFqByBAx4eRoE1EXrX26WKSsqV",
  "key26": "bYgC5ZyGYvJtLVxG7JWwNmyaUZAfKnqWsJGLCUjQF8H8LaRtgQ9NLCfmU633EWNdGZN8T4qrSqxjAaT9KCg9iYc",
  "key27": "2QVggtCGWRMSxuDJSfVAzw3gt3JAgY5dc9roE67AJyVmjvYchQncrsgKL7TvTWDWaGHZ7ZoM76eq4UxCQfU9ruMk",
  "key28": "4Lg8nZXMS6sn6RTXPAFbvyMsUkiGw95YhjWuRciiGBMHRqYoRyCJ5M6ULKhQVUHEgBGTh3FDnWRhvhV5Z9MaKQ8B",
  "key29": "Vv6fugswuSe3ymNtZBGn9e4h9xBj21E835FnDte9Vb8S5jXaz9r3vUKfxVc69gqDkN1WJAAAQbZqbGUorXFUy5J",
  "key30": "5SiDMuEiA43JhshvewNezXeDEUbZnGe4mMTuWw8Fqtmdrc5omDiScbcXPJ7yw4s6vqtWL4LyxPPPBLFxRfaYYzHP",
  "key31": "5vpzwEhp9MZsPqhH3XeWX8pwJt9jHgdNkn2AmuTFdtYbAcMCzassWRnaN2tP1YR2REzBtoH1zQWzTdS7CPCCPmLJ",
  "key32": "4jmARwdVA62gXarm8DyjxsoRC2qkBTtC4tTLx3Fyf8JbhTWTiEcYzvLVXftoZruk3SRP3bTcogsiBQsfu4oKsmtN",
  "key33": "3SaJ8xoTmE3hQTRek8D1pyumKWKbyZzv7ASbccziTCF6Y2P4wSBKa3eKe7vtijyKAygtvWZiWJWCC1LsRRGaApku"
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
