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
    "5HiNVSHiZ3FFZ9zpTQRKMUfeh78FubzzeNW24MHkm5VzQfN2HybXjwV2sfjnMoXbrnWdSqoCh6m97W3XVMbR7nKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fX28xcwMoqohvEkLeynUBENWDBXenyy39ckRjMMKN7Luw9WYw1cc939PTcwsBMBfqGWXrVr8QAL9Yp6hqRFmJDQ",
  "key1": "57rTqTB2nnicpHXyyevvZnH2228EY5EfDERqPxv53VjLRGJXELcuoXud6dDovVBZP7sFwywUXnx9bTcJahm1WDDj",
  "key2": "2B8zLtyffyFx9xxeEvGPAvPoQEQBNhULvDKfNpeyWquuKdJq2sFdWZ9ibiTzvpJQRPQMMJapvFz6Ws9anMJXnQvc",
  "key3": "4M6C5A6v7ZJ8dd5SgUopASVUXLTNxqyE4axBk3cCCrqRS1Xen7js9X3ArrebVV8yCznd9GGMRUhGfSPMA4LMaLwr",
  "key4": "5tKCW5x8urxQMSr4xt3L2Pz1JXLfa35A3qJKuBJ4uxg59GDgtNKLNQafTtu33xbi2sTRb7KREsezGhmLoe26CJY5",
  "key5": "4bzFs65euhxMg9eb7tQUZSu19VubBQFvQ1D7CcZRuCnC4LHd1WRCNwV4hrffZSHqfSQTLLMnFM7TckvEDu8rxS2n",
  "key6": "2pzGzTmtWKRcKa7oZpTbZ1hHPSmiY52w5826Braod7KTPpQr1QZpApfFnqNhNBBdMKphiNDVgK8y143VBTjV2siX",
  "key7": "4sw8mruhozg5JabMuiKxw3gjE2UsenYew7zzNXfzmALosgtxG4W2eieFJ4KLYoZ6vnH7KsQEmuseUusZz8SpyTTR",
  "key8": "4jpSTnc9zU9ebLMurSUYxufXCqQ64hCGUVNM37ruPBjzQiLJfbwRpBKpLdAeLoJsZtG89Yhxp7HE4QdvG1VmcZJK",
  "key9": "4PCSAb4pfA1KZdHtNcLiRvDBXYhke4tYRXBDxEv3H1afvcQZkb8SU4weGeo3UV3Vs9691auy6jXW68qPaMaiMnDN",
  "key10": "4W2RnQNpP271Wwb9mmsTQMwSXyHQA2bgsASvRDQ4ZzDLiKz8QXzsrUtNDWt2mAttywUTv5o4jfZ4HYzSiLvKGoa7",
  "key11": "65YBuCD9Ve29jULG3aGQQKSmSinAmPdQMGmB68HMUb7Txy8DqZXDSJzLhYY5UQ9see2bwCPAeckYK4nyzsqgxen3",
  "key12": "54ztCj2QHjbavAk5QJLz5Nns5exY3cFV6BQyozzTDvM2JcxLTxGhRrszdQYnD76EXAWJqAGhApYRM59tLuTBNw7u",
  "key13": "34Dq33rM33JSHCEoQjonT4ueuuPCs7CWZbsGo1CGAhHJJcgmYJaePch5QJJKBkMhpdZGneX2fNBFc4o6vjuvGVBx",
  "key14": "4p7HYdnERhQbK7FCgNRPiBQLq8hfELZzazV1AV71mQfTt3SmwAJziFjPAVSTYAz1LHR6Q9S2fu2ah1RivLjn8XFB",
  "key15": "234BwqoJywFr98P8FkM9y9UaVrbQfVmYNH2wjVt7wNyZ5MEPJ7C2BhwEAdHj5L6kY6Ti5Yuss2GjSpd9cmf3e3No",
  "key16": "vGJpigY8jvEbk3zVdehAX9Ci7fnHk5vRmcwmiPfy2z1dhs16Y58mBbF9hYoBFFKEvLAhMw7J7TavRtBxcE2z9oQ",
  "key17": "53U93kHyL92rAHT5DtdSUAQAjuR5aTnfkxniPxYPdEKzgpTNGFMTk55yw1k1xmw49w6VCYdXqn1Q1fEsee1LQKMm",
  "key18": "4u2CfRm4yscTZX49NneGDv9nxnF11BRhcozSCEnKnMpX43ZdsNnwVbNe4sHXD5nvF1NLkqmuKbBVyNyNCTM6KT3g",
  "key19": "5Gk1YDfeEBFd9RHqxUWSdb3ZrBXTosC2TzhKmtaRfucLJRf5rcXDCnKAPnF6cgT14NkbMJYrzDCPmf8xKNZPgxu8",
  "key20": "53bDb7uS1tS7xqRJSLWmGqJnDKaqjNuRmCgcYvLyGmKh2Rjra32wEEJGxU933gWG7d6hJXDsVhFbZe91XsU9nWSz",
  "key21": "4TmAf7WLNuGWbT1ec1Y8a6dhg41HVRBzzeKAQWTwiT7kAtwbM2UU24SPzUAUBRSzuDKtPsTQzpv1osssMVX6gtjC",
  "key22": "4XeYZ68fi6AjMVhYCZvKEPMP6UDui9PmzRrRabgQdyzcG7Mmehn9KwY9MfmjUpfoSDYasEWpbqDdMsTcNrFFjVAm",
  "key23": "5bQnLYCriLeoAV1Mev9jvA1GT2hcSctp56Bp6Fmf42Szb2zJDAbLNvzuci2xutQKVLmY7X2WRfUrGSPEsT8o2W8w",
  "key24": "3QjsAFGJLoLK2ULu6GQQUEdq5W5zPyqh3hJMy2APGcn1YnyoT31Pr29snN59y1R1ot5N2Syq3QbKPS9xTtqH6Tsf",
  "key25": "2KGTBL6ARDoEeirvgqqcPCBQRNx8CYVDsxKc6PXdQZX8mP7f6GpanS54jNKQHjxvQh92YCJx7Bg3FueoaSTvPZJB",
  "key26": "5tK8ysKcAK8dTyZQaH5CSoqRgT2PNYBA1FwHgZ5FojK5Z9hcYUF9orPrB4AD8YMPU42z48StJqQazAmLjFAoaQZ5",
  "key27": "5hDpeWficr6qM7uDJWjTkaXE7YDMVwmbZtErAu9sQE5veDNkgz7ZxNPwyTz2xSzZvsrRKhYgzkDCvZ7eqd8eWD8Y",
  "key28": "4NjXddvXC8spoWSzpEJQnhkeQrnWs2hoYawxDoPYHpDueTdqDCy3RavxGf9mkKybpYpdNiK7bmsRVxxPqFotUtvS"
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
