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
    "19ocrBdhgNAQDC9dHKrdHGyeWYrWbu9TBvhNRDePMd86aXUV4VpufM34a5DcnhaXvrQWVxJh9AUzxv2EPDdqfYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wtzsHRnsM6Ym999gRdzzG5LAPmvnmVBzmySjjyXi4UWpjzDyjKrNZ9f7rYPnacU3wPQCTjwLqoFAxVNhBSEpBa2",
  "key1": "5Bjv4ddVbRBvebgsqVBJcJZkLeeH2zpaGQxuaEFHtuZDgXie9y1Fi4wxDQETL8RtpR3HWNSEd3jpTjswHvqoP7Q4",
  "key2": "5zTQ7bMu4F8hEarJCtr84YpMuHCfy2XexZvevxgutCP9QKeGVRxhbVC6P7bREXfiDrF5TYqEX6UvfUG9egEB2xeo",
  "key3": "4UTxWB53i5A1imZhPtvyj586ReyHujg6MhinNCuWNpVG4grPrK1gbF8Ue4WHNUCmy9xLvNngrgqXsasMNHKthmvh",
  "key4": "5q3ku7KYbHV4b9NKYzEZ9WQ9QHQDaNgePvabj3sGyMC44VwJDrAcpJemPFVYy4QVjM3t6jQdkWAXsqZ9HV8UqTK7",
  "key5": "oQFjNrxnVtpJiMfEPAZvQQZB7FzeLZ3VBMWpJRbnqG463Qcx9kaV8sdjZ3TcYxsNSfuzPfcpJ2TZ65tia7opMyC",
  "key6": "3pt31dgdVqi4voPmxbpemr7kuMP5kwsUT9s7NZUedxMb9rzRVHkxVfgQ5uidhSowEpcsBo1gkqZawYo9MXBRNcKc",
  "key7": "4TYX5Yh4uNgCT5tC6Cix7Fg3JwWTFuQNdoMp5k7xRsbnX66RuDaVuQ6NRXCUVMBjLhnSom64nWLeRDt7U57cdUcc",
  "key8": "63ZH5t9huuGda3NtWX3GxdpVh1kXLhxQonNq333Ud9Yuc8iGcni8g6XSV9f5D2T4JLt5sS3QfAZJQXMxA5GxcStA",
  "key9": "wGFBpX8V3oURgqrHptYpwtu6PbejQC4NuvvkeKYuozAchnFRmrpC7RsphYYGbtdVqjtEMcKhup4125HGHLa4ua1",
  "key10": "5WBCKMuPgyeMEWinoSCNMcc6ZwzD3gipqrVDZNsJn8gZpLZ4zUV55FVtfEFsDh58mMmuQCqy85XyEVzvLGaYT9Ss",
  "key11": "43puNvxyMzhns3cZGiQbq5iTszS784kb5t2s2989V5Ko5xLqp7SZXEPdzuYBRh56LkTveuwsoaFvXXyaoRswjCFc",
  "key12": "KHwA9D2uKzYGRQstH3C4uQbENu5atM9yfKSevFkB9R2dupLoFbS4Wdwm7nTCaLEZ6NBydPE7XwD6z8vCjucccnX",
  "key13": "2AxNci6n67RJcbrL5mFvGicqT5pUCBsExefFtYXPAfGJ4Rc9Hq6tgdtsKhRc5CzzGBPWvPGigEGxD4tChKQSD5Lg",
  "key14": "5gX3P2eVhUFHo3cefGVSjP5YWWGdgeq8LQvkjeVHt4abP3FjepfL9daPR5DEZBHEpxaEicQPAR2q6nmf4uiSA62a",
  "key15": "CBeMUNYTJk3s2ipD151ApGRN6vCKHxACRatoHUgxAvcPSdSYF3hoGp7TdcggYxLMc2CV1udpKqFWQMRAWuE4DPm",
  "key16": "2KPJAKsNTP6GF2fUofZKHxAgB49PZzmMiwJi8AUnUCWHrAkZ5CH5ppHdpjMyvVxbXqXuUA2znJJxbEVcYiB3oFx2",
  "key17": "5qYXPYTc3TLywvXMc6gMTnwdy2c66WF19nGp6S2TE6AUdLCmxirX6s3zkJPJ1WBkjTZpkdPxVShLqnJ3xddQTj2g",
  "key18": "3yVxqjHMxSn4vXFusRgLVFXRY7Bz37iLaZBo3aqzLb1d9odweYyhUiVQjK6U9NhNv1spNnF2xDhNLsLgi8sZCuAR",
  "key19": "2zFLqsoeg37yY7syDWVm1eNEkCq8rXr7t1Gys1wuEiAifZvdwTRJCDTKvtu4uarcbPLYZHWGKMZEG2zATgd3ZV88",
  "key20": "56ia7uvMhYZaG6YmWcYHEhxThiHCmybta8oTE4tHP4Z5U8hJRfEAQqapqDyA17tsgjpevx4WR1nSrwnV4RPMbvtg",
  "key21": "5jxb7m7sX7LcEd3KHcSStxGnJgwVsgaPzcKqHEA24muHpmSZiJ217ArFwJkaMUF5TWZySZpeoqbjyoKyTznVPwk5",
  "key22": "2RZat4sMnzL2n3WEPokPyLwWbr4957YWpQ21wPxwzc1M9gpEPgXxUeKpiVU83u1vHoFTzgXC93WEpP9rBx5Li1Dr",
  "key23": "2b77LCsBaCyk6ftCcTxP4j8DDoSLfuotDdBNbYc6UkjFiMZwhDU49rXWeykWepzhjFdXQKvGyVgX6Bwc4HJTZbiX",
  "key24": "3KGZuhR25uWmc7D2tEYMSACSQuumzqcX1FqUZ4nVRTFRzbGjmKC9mLYadfMUrqGv2GLsMjumCLazRf3YDrY1e6DD",
  "key25": "2Q9za8LhtchraExDPNGFDkukLBUjh6izU5xzmTcCqmPhPaFqt7jjEQCPu4W7ZoNRbVxBiwcbBXq2DDimYKMggEqM",
  "key26": "48roKpgF9gpQsyeGhiA2frk89tZw3JNqG2mRfRHYJHGpcKTgRhAcoqvrktpewV8GEj7Y45HW9C9nbKZKbi4Rtj5x"
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
