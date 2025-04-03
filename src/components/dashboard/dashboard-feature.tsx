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
    "4MFpW5oaSyfR6Vn7pijK6oxXkg1hMrxdGLekiCe16Hq1d2Gybo73r11gDUBsFVSAX3o2SDAMgnqNyEeKw2i5DAd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zztcm4ETmi7ugh7Zyzz9GXd8J9KLhZegDYU1zGXgjeTgA4VR3rp7PLgjyowZQwKTYsZV1YeNxJVrt7X7yzCGXSB",
  "key1": "5rZief8cF85hskUFtxaRWNx3iuB1NZ11Qz52D1YMxL1PsJocPR4zX9gDQkfYrasc6PudvKey8dcZwT9Tbotv4NjX",
  "key2": "BmmHEQhW2Syz2VtUzCBPJCoakr5VYjLCY88PjvAH9TAv5zajaSc74K7ASzqHt71RVyvs986szwd1fvrS8M78ar1",
  "key3": "4jQ3NuiEXzFKtVeiJicBmyDhZQcVeXuJqNiWr2Nx9MMcJoUNENYxsPZ4LyWSTMnsMgRnLSh2roYxknCPTbHmr96K",
  "key4": "rqME9PXHZp6mze8XhUjr8cSKLGLrFShbuwYoXL7grNxNnpG3DBvB1bLtDUtYarPcdH9wGNqitdMVbJo1kYh3fP1",
  "key5": "4YrD2nifCQZJAdVMqwF8y6eQL1iYrE25P3aXmKLo4QtU1CgdFPZkrp8tYTaw3HdKcGdeuFkLRMx9sHajW8LsKUQJ",
  "key6": "5kH8YQ7MoFp1G8Qvfm43ukuxWHxyArVVoLc7SzG1AVT5nWb78jxAmvXe8VMzWHPQ2uPY8chxxudrfAwwv8NjuQku",
  "key7": "2yiSgcmp9xngyQeKSwBFByUxvkECZN3gSqrsDJ5oWuAmLvbpw2DcbNZYJvjJkPLiqPw6s15APjvZTAWYgHHCo3nr",
  "key8": "3w5kKST4Gm9WK21pofQoE2PzPMjpnLR9Tjamibq7XLiLGNWjjm24BTgz9dGbreiNYp3JALL4XQZXjAqEq9r5HWXx",
  "key9": "22bZwjf7y9sHLMZnJe2CnW2556FxApWGmYoHqtkBeGhgKgCyY191GJxUBGEVkmBm1W9wiUETezeVurozwbXQkRaT",
  "key10": "3m48TcEzBa1HC56PM8Zqw9X2KrcovvbLoR9866WLJSwyBHJatq21Y7TiyfZYbSdaWRGxNJMnwWGgwV3cwaFzbj5J",
  "key11": "2tXRgAmDSEqSEoFxSnB7LaYLHupBmp9mJVRcNHEtoFVdBUjpKJ3kP4iizBRHtcR6mFHuJbXRgtpeQpAnBsLFZAZ2",
  "key12": "3ivgQS4rP8KW4B336rN7TLKTmBmRDQQkSDB7PweauiphQb5qre4BnU22qrD6VjA3yQgYF9EQn9NNKdCYWdkRz5o4",
  "key13": "4xsMifFPEkDPxrfbogap8W9CYphrz2FsjAFmc8H6jtiM2kaRhRNSGskTK2kVHTAbRvP2NdZvY1uD3XTYu1xv3yMA",
  "key14": "2KDZCz1ffDhmpVZch2hMASinPteXh9s5WDaQYtuw1atifqHrf9a3L6jLnD6mrTw9NQ3LiHh3cFqFZGLcaopsGRkU",
  "key15": "3wo5VU6KyUG7KJe1Qxz6tn8AEDU4fJQaCAx4Ri4z3zzCnSEAL88DFuVEALvti3KTqjEPSG1pRMdKbVTTFWxA9s7N",
  "key16": "5kWTPmoMHn7NzVvSGCQqj4RzP9vwMms5RXimKtcQF6YFxpGvR7WeLzmDit3W7s2De7yDQmjXPfzXTuTs1kG6bc3V",
  "key17": "5ZTToBg5BXuTyuhLJ4NDfZs5Df6VLwyPVBLrsyUoQjbZas7RJ8CdhkW7WZAwcjnzK31e6tF7rsY39CdwfiG6cYx1",
  "key18": "5dN6txf7BuZWpzCYyPoQW7hs9HiQZrzF8kX4DA78M7qF39XLcVpP1ehKMaF7rLjPiQKphAFyiuomWr5TAyShf8gx",
  "key19": "5Jnd4189nmvok6N47t9MW5RBK1gTUX2rmDK5wNPH8yi4Ms6YKzoByswzjtBRVbhBbu7SFHdBaTHQF7cFkpouJXFi",
  "key20": "TLJoHrBraNAhEXCoLkWNiWeH94VBFaiyPmyQqxCcVg5Nf4n2DX15rAdMQrjFRqf3wog4TcFEPZFfww3oxZU9zjp",
  "key21": "49X3hmj93iUdCgsCJctURaqQHfQmqAkkGHR7hZGBDgfXEzMdEzQG6pPPqHwT96uLm9PMzYHZkKE1bFmRLkfSVRP7",
  "key22": "2V8fzmApjWgRxj9QP3t18uMWzKLuWNaSU3qUE3JdokjJmmLKDx8D1nfz7i2N41a4xi9NFb48nrXvmK6TcDbAu3g1",
  "key23": "4WQZ7rfod3fZaoMzPLmaKKPv4uf9BnK8cvUMx6qUEnDXLppxrc4o6R1fuJAJkgVWgpm3DobYfcGAZf453MfgSZNX",
  "key24": "N9vQzXL8HAZuH3psRLGpvfMhDwxf7eSC1h2HnLZm6dmLuVfSEmnYngmtXQbu5rhV64NtfqPWXYMDNNkorBXLsKX",
  "key25": "3PzLAkj8H5d6A7iQG1aVsHu7c2ZFJV5x52tBQrdVF3JLTukuBGiyMkAcXAjS1sEe66PApgCXxqoxv8SuBniYHQ3C",
  "key26": "59cnTC9rX5f9j4jj9xnGCh4Z14xLW86kNcXRtp7jNSbvc7wXXDJNTXTtKps8mCaGx3p2SvzMPZf1PhWR99oa4jzi",
  "key27": "4Qzo5Th7gGytdqiNAfZnSVafivSLm7tBFSAzT9mrZasui9zcX4Hk2Ncg19kgJLbNoHgFjuS5z82wrBk1CEaU8oD5"
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
