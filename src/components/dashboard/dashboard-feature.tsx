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
    "5qMiSMcefpKARv4zRyKKJfxWo8C7ky6Ec8nAvYptok7TXg1sALNBEhvKUvsTdu4VjiJ4Eau7MtaV2bvotqXzSpsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sjUD3pj8mag6Da6ZpXytqLKtAGQqTHyxjXgCZcy8977cgobZTCeHDPbN2UJt8DYDTQrkuZMxReLwnGSNX16WBza",
  "key1": "4DJ9XL9D1J8zArUynmncVmYZvAs98wjMYWEmCvkE34fYxdgdDzeXwB4fPQKqi6jN1YmrfLihUbK6SuyhfkrfiU91",
  "key2": "21ceWFUmN42ErBgVQUEh7DxZhfFAANthSGENwj88rMiQi7iP3bGDiCFkE1jWkQKS7KDq8yPHVTgJfbF1dE9USXmh",
  "key3": "2MWtY3Lh98YfhNKYFFbGfYP2A8ioaDWypaPU1eeBVvBsA7yNxmDmY4KcGWqPYZoqptgopfpPUWyD7hiZFdjDLYYa",
  "key4": "2Wt6C1PVMhw6S5yHR89EqHi3hktmrT17BMKzPL8LJXNbV8G9XSdbZoR211CaeqVNfpdsfs3cPpK3Wr3RAcVFuSm1",
  "key5": "2dFD62jBvg1GfJ7XTjiAvsf4fw9dF9529hfBk8Ev5BFgd8ZZrBeWs8zGR4k64XM8ioLJHiT1rE2NMeVpZv4YLFFa",
  "key6": "4TGntusbpYAbgfYDqFvCRfE5sh8PAYS5dTrnKEaz5w6xFthdFV65MBT1vtWW6LbDUWGRh5w7mCgCZsRWxVE7cQuS",
  "key7": "2LDiYKZoettrktCq5bCgGopTGDdxBdtrLNSSfrpyYnMxUor8SsaeZDEUvYPNU34QMjYD3uMAKSXKsRcsYqazAZjv",
  "key8": "5W9bn7kYYRLrjLAtk8T6VZwjyTn4wdKasmsrfgbPA4XVGpTbWx2FnMVCvhCes8VKJNb63dNoEWKaiQmrKhpFsXxV",
  "key9": "2CUcUAhqLcQzbprES2na2drqtC68PnBTuqfonnrSTkne7aTyZQy8cuNmg258qpen92nMcc1Xm3SfoZcLBC9Ny9vx",
  "key10": "3PDZU3WRHph186tzyVPiynYAT47EUncZ63q2MUH5PATWkZNRLQ1TPGYVC3T9hLDPyuj5AUcyqp37vnZYuhkwPkKo",
  "key11": "3Y8gaRn2VLmBsCMpkw14HnWZmRP5goLbLFA8Te7cP38kVinmhFg3QLwviRyvpYvQAk1zmxTzABxfFUnyzcQy7T1C",
  "key12": "rXF6mqm7cZ8msN3d2GyADm57dTtUAtfyikCNwxbgazK5VSo11X8FfQ3fzg4bky3Zx8yKHBf8tjDnqMUq7MrTnYK",
  "key13": "5MUM5PenrhkWDhcMcNnGAUMBtMv29mjXv1Rdwt1ChquoRb9jzttpfajK53Jwzu2qmbBaLUv5UrpVPXm4URqE7DrG",
  "key14": "XqYWa4QxFhj9Fu7MprdivVPVhqt4ZkiJycaaZgB8gH7F5tsXMftwT6sa2KQ6HnAoExXTUEu6mdseyPFRnoVTHt7",
  "key15": "2WQ8Qisv1BhZeTDjPpaXyoRfP9RchhEZqEzAGL41uhGLvKxxQLqDc6VnhRV2khGVuD27WuptFC1u1ci34Kt81yE5",
  "key16": "28aA5bwu7pCCbj4fNpKBQXC528EHhi4wPEBnHtF6BGgZ2aFJ22b5dDEeVZ6TJ11k1fVhphnGycwAi7b2a2fCo4B7",
  "key17": "5wqdAJZAeemfxoPdEhEeWoHvegi7Mt7y3mUwapeHsQhTLSGBS2NF2gzo4j63VBJF5BUumU2QBnET86T8oG2Svy8S",
  "key18": "48HfjCg7Ux1CNAJ6yXBk39h3zccwUxMJcMECn9vpWeA246CaGZ6DsMoTSBiPnChUkTiUA2GZeue3T5ymVHKBMprM",
  "key19": "5EAGX6RZdPXdx3gahvyqqKeXvNuuojESY7uxC5L7QDiG9TDu6M8phQ47bUvfjazWD1QCXy8ntwGDpTGQ8SW65HyN",
  "key20": "3ANT2ZuPfhqAwfRV31NEfChBN5P2LtTfGxVta8Md4wtCBuKbTCfgZmWxQ5SKweqQ9tZZ6ggvZV4DjqmQcjtqwoaP",
  "key21": "3noLNyZXXjAEzw7YU4WCUAygdrENw72mYaTTrXMUmQf4TG9ETKQK1fw6PRcpCET1bYXLoDBfTgzBpfYXjSQk5TLP",
  "key22": "2LNbwUdZLt1gaYosfCxqAmBGUtqr8pkYpD5L8KrfUepcBztWtQ6gMi6LnK1jjarp9Xs29hidsRe6UPksNurDx2o1",
  "key23": "4E1iitgReQdnaPLZXuTgX4h8ZPXHMyaaGCVQDkuJtLujkUEVUUn9yqbYFemCys5wqx4BJJwx6fMg2GVPbK7c1k4b",
  "key24": "5JpZWgymmq3x7bUoT6d97aGoXzVCTyMnPxaeTDEAYGfr1c2DKyky7QNtv97Cucaj4Rz1Xukq1XGHunaLy8bpycTg",
  "key25": "5S72Kvo1DdAdHUQ5nKi7W1Nu3adpRZJA9RZaTRvZJ8A8UbhVmUL2d3TuznmppxBb9N6Wmt7EqNzaWoCV716iFnLh",
  "key26": "4qJ2N6xrKSQfBrsvRk5AHnChJ7TDHvMvyK7vXoZyk9GjSh8xuNWaquEAbP4KKjWjLnQZVXCaJ3itUFgZB38ZSXfo",
  "key27": "2a1qRVjyVWSJLCLJxPC3DkTG2McQSp7U67JLB6Yz7r2MH6j5YmWMZHWusqjrWpL1uScwV681RywHR1j5HnoEMBbZ",
  "key28": "3uGzDyeYxz7GmEHrAs695hbkoHPyGZSSvX2z5HkbAiCqZZhbYc4wBRDFyLmBNsgyN5SUpq92eTq2sVU9J5Si4N8B"
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
