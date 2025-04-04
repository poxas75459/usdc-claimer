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
    "2vVjaSLa4jsS5ZpSNbRjmSJHsMVQkNFNxPqTcHdr9dgzAwtTvhgFeTQp3r6QF2Lb1HF47nTvhy5tWY6UAsx1u5uZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X6NQ9psPPXMQjmwM4jjiVUu77xL2Ej6Lnyr5RXXhShxV6BbtuvEfYHPZ7x3yKPtKhgH4p2AxDKvna7WwzKFJ6ZD",
  "key1": "4H9hNaEpfw7NEwFWsiN3unLPhbgHniRrXT1SgrEC8QpkUyVii5nJcsR3DcpR4SdCNoBb8QbLDoo5yFsRyQu96RX",
  "key2": "5UJPUWn22uWUGLmmrBWZPMfd5U9NSzqkw6ZsyGjHjV8ujkykphoYXz9Zg3zbYHbFcVRB8eDSapewW1xBL8EWW3ih",
  "key3": "2rnvLgJUZdShiJqEzh3ipiEHwoUFh9rV9i2SYMXFFvrqthSPvJwAFbecfwyC8mF7SpF8NtzkCgGCmQtK8xx5ZKXM",
  "key4": "5yKBu5qWggobRsPDEkSZNT95XyyNpRT6Kht7xDP7BMnEExWJbhC4oYr2KY8LKga9VBGsdt4J8zpyXvv1GH7nFJNY",
  "key5": "4c1spnqqHJxEAYGe8fH74pTJbRbYQTtqaVuPonXRQsz5kcgKDiuDX5v6GUgNyLn261nts1biJ3fLbfmz3meSoqEH",
  "key6": "5NKpJyyqfrDpe7fmECiwGT8p9UpMDk1G6CzxrPJikZSCuRfvScUs8qi9rqXpySGm7e1fNQ5PCXVEeJtqzEKp6UV1",
  "key7": "ZV5hrdeoQuLgeaUop97YFU5zn7zET9sr8ZKX3PCZWY4v1stMwxFCWpqzpfuGM7Ed6TPzWzSya6pGkZeUGyUeJ1Z",
  "key8": "288HNjqFZUArhTe4PGWDyAR8FVN2G6Aqw9XPqg1A4E7ZY41aEXNxtvJae3i4FYkhtF2jJ1vc36S2uEX1Kdbifgo8",
  "key9": "2TUejhvJxv7DuWBue4ocbxMtDBqB737e91WwQ7uL1sFc14D9cVifTYf77rjmqYkoDhr2ZTMaxUyQg43xyEPZY7CQ",
  "key10": "36HfWN2Fuun6ykwheKqRd2bhjoi41mwE35BSUpFYACTkGgEAK1SVTK1ijA23LfXqGHJNraAa6iNXe4R5QXEYUcfr",
  "key11": "5zdjrb1JceJwmm3q9kHKaNL9XSm3QqHdeEp1gxNe86oNvoqBKEMsfb1rYfZeVDzM286GSK5YfVJSvtMT8hwBeusi",
  "key12": "2iNR8nf5tvWPdFp6st41jHWAw2rUpWkSrsmhmcvEhLEarPj73CpsoG2zn4CPtYTS1TFKXZKggY6sYAeNgovUsop2",
  "key13": "3iNVERpiZpuN1Bs9HxPyKKNMjHEMoRweCNEPCymC3gEp7zWnALsjM9yAx675WvZGCqHdRWnFN4PH5fTUKEmBXKjX",
  "key14": "2Keave73ta2DJV2vjun1F3UbUxy9c3R6xRvcpqHeesT3R91o4Lj5iuyWxe26nmrMfiGsAp7C6JEZzQVLdeDKrnFr",
  "key15": "5hiFR7EzVhJNc3PwkCtCqmoFiq3Dq9D5AmDcsjF6Rzro361XC7Xy5EweuA7dXk8FWFDX2tD5JnNYUuTYwMyQMiuC",
  "key16": "42rrib7JH7w4pyA2LBfnh67MvN7BvDyVriJewTQD65bLCXQCmLGkfbax6nbXUV8gd69XS3DdXwTpCHU3A6ewhhs3",
  "key17": "4zBC5WfF5FMko2ZeML7ocvubsPc4FbdwVVHR6HAH7wXSqSe4pzJL413z6JmcSZzsvVPrUseH6Wab3pGMnmHniEwR",
  "key18": "5AYsKDAtRdnC2N5ENRzyY75aAhDY1NAA5xypYCKBN2WfoT8yCmaowjwPtfHJHKGUGRS6gUJ6dxXG9p1CXi9dKhV",
  "key19": "63dFUaBdkxtkrBRAZVustUURHZhcQM7uCnZrGYVVK4hfA6p2kFB38Q2anffHMRjNFAHVXGGcf5pv3MPyAjkt9T3r",
  "key20": "B2wtQFT2DoLL8JVQ94kREBgZ2RKb31hUhh9mjeRxKk3jwKDm3iWaJ9ubQWinRE2HwBiD8Zgd4XBGHc3qEgw5uGg",
  "key21": "AXX7xitYyYmKmLMj661KATgR3uSN1D2C6oqZpjLours1vNnaMPPnL6Byb3fqoqNGuHZCkXiZ4WazByCu7NbvXqC",
  "key22": "2CWM1vqTcKUXCzfHeCnnecVNzDQ2Wgia9ofhhBUuxHdPWmZkgHGEKttxahm5h2zZnemo5pC6UFBa9nseYhTaqcXz",
  "key23": "3H2tpt34RCSychJ8YYVkZ5ZyJm6j1KhhS2ypE9Wcy5hMgAtXB57trSrvZtpE8rJs2oVLy38khLPZv3Y1xprAGYrr",
  "key24": "CiEi6GRegcTZNSVdTQE38eZP9NsW5MG5LE8kVJXqEJs3ahcP5iPJK5mkAa4Gf3feGd2hgFNokHKDSYz3vWQ66zT",
  "key25": "5rLhSBx184nsZmCzyQu7njkhSBVoC3hP56E68HdKmi2xpxN7oXjeC5JzBGeqphUYZrE6y11U5WrUVSvfVmFMVHf1",
  "key26": "3uh49piM6KyAq1JdSuYpe5Hk2b5pX4q5gVuEwWgDZx4KCtfYLvzv88zhhGDcC8wm7J11e37Ck6Hrmr3qhnqxW1pU",
  "key27": "5Zwg8ezrUticm5kKsCgRYRANeGZJJB87fjpt8kgGpJpUoot2ZkwnN7FpGPoZaoW9ZeQc897ZnfhhKKgb67vsJpxc",
  "key28": "ERfpYmHyoJWStUCTEsvHSmqem7fFLfpkhRZT9eeFw3q1HJ3Wi1TCSeXcCKqjbxyzQUhpU1sGwaMRPGw7bxVn764",
  "key29": "5NSyxUGQB7WPMsyQsWeVwknvBSV48EPZvWgmegAKxzSfGZqRzRVmwLa2S8NxEyUVNvBzQ7bbGwfSWLhdRMKS93iQ"
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
