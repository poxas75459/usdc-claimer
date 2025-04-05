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
    "41HzGTGcsPbcKwV5JB1Y7hJ35eBqFB1vqNJCtfZiBcHgQ6kwxgGWBf2TyWytHaJXxdARApexnEmGjUnNUT5QnJto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24YFACLWoMbMM5Pm1CdJy6WCGq61sFPvgszUfphJ19avRDSG8RKc8LbBLM1UwSMAEDTkPTVP36QU8DPK1cK79dXV",
  "key1": "2WNVR9MwNNoLJHMdXM67djv9HMXSUkY4xFnd2egXNLPWmBTPopMZeEkzj7qYvqLLcNffcsxMWbUsS7cPVrzfSKVw",
  "key2": "2wiHQR7jphLKjtfBgguLZ4MBE4k1UkKtEe2XmJTtamiWc3BXdK4mBRdysc1snHyGoFQi3utKySSFkm9KuFe4zGu3",
  "key3": "GxbMkzWBgQaCUx1TTKQrkfwwhvYD45p6ubAZndH2u1Mn5izbGDzKZ5yMV74tgWKz5kbs4h7xrSjd4R1jy6JY7Jg",
  "key4": "5QMmRsrjzpDAHX3Rc4ZqtBn8LCcm8phD6LxZjvZ7nPHX4sRV2BEcE5S5r4NYAss85kfYdqvJqqJspGuxkq14Chde",
  "key5": "4p1sBkgtKw8Uyet2VAzhM3CvrcPE4UbaFxqwpSfUxgTP8HrsAuaJbsriULpMSN9DGe8rE98UhNfgbqgb8TprfMoj",
  "key6": "66CZJ9Ga3yYZUBPembhA3xZU5DGfmwL4xk4HnyPvXETpykm2JYRbPhtsRDsp2jPYBaQGGknQ3XmSJXCH1z4fSg5Z",
  "key7": "QWASxXxysC2EkCDdCbkjM56c5KuynaD7wvG4ka5yTiiwVWuhUssLJyoScuRkZHnPi2Ncx6p7iQNoJxV8WeaJS73",
  "key8": "5y6orReu5kW2Sd1bZNSrkvVcmJwbwdA2cAN6aV1kTfE1hja3XzpL18u44ojJqY8WgcWdYkMGqKLAi6cpVPtWardB",
  "key9": "vraGFHZb9aF77hq9zYxdDseRuZzFiddLubnecxyJwkG2JwBwmjB9BvKzD2Crn2PJR6gYAypAdsonEaEK1eqyAXC",
  "key10": "3Wr8SZg4viWxmGnCoWSzf3Z4nydXYqrS9HtjcgiCBhdggK8odSKmxctkP5wBCCKivi6R9J7HYEJLhX7JsMwWcB4Z",
  "key11": "2k7gGMQajc7hhEX2qAFKHimpgnpnv5uBjytZ8oZyaLwxL52MvuVx3dn1hpJ1Q7xGLwAgNdoCb76Rwtgc7VCr4fPR",
  "key12": "2wX4vhAdfD5wynDZZsNNn9u3L14LDt3iskKmF2x3jXDGCPMtbMDiQi7NeuZQnyWhNxVUPJi4grvNXMqUWACJxrGW",
  "key13": "2VxNLVZxUBT64UuH2QpuBx72f6eQC57pdC29cbAPEjx6BbhgdjPqJm4G2nzhRbHc9sRPDaQgco3yJMWXNuxB6Lps",
  "key14": "39XDUNCTacVfXbwkSNQSEZ8HQbq2hcJTFvyELQoeNBLpymMcCuNS4xMn2ATf4q8cmtyxpVhuSZLjzn6gVZM5KC4D",
  "key15": "RJamgBLKS1Gz1MaxtL1VyLN1o7ZToeBGbVE75iW9fDHc97C9p16af6aHc3pUbEaF9XzEyab1qnZKXoLimFo9yQk",
  "key16": "NMzZW4JVYmZZAvdCxXFhcHLqpRUYfg864fvTYZW4bhRtc5czJkfLWKYQ3KTSrJ3jibj7FCtksEExMD7xg38L48R",
  "key17": "5JHEf2Hd28mbvGiRmuUuEwNq8c3V3dFc9JpQEqqKaMnT2tGB8MkhWpZWzm94rbVhBLs4efodetQhU9Rx7SpeKKqz",
  "key18": "3gQhjEEhnERsWb6ZdnW6dwPNhjZiXjVaSaTBNJ6XXD1dW2tQe8ZS7dLuHELDiGkzvP2vwChREh1c9LgzkynMsVCo",
  "key19": "3xako6X3NDrsEqcXvWrLDvuZZ2oZKgbGy3hLDcur1xva42NrqFfXEFTYK9AzmcrguNy9ko7fB6sFkZ3MEGtKNfFb",
  "key20": "5jEudWWE1pnT22xvhW4KhddcYCBn9ochMcdJxEJpr5XZChvcQSbUfhWK3UXNzSaiNoo3qGB69P3TXXrXov9qS4Fn",
  "key21": "3dyCBkyqWtfUR2tufEk6o9gxM1mjneQcM1iACvsWiRYLeeK715rkME2eeseJEm1ccvJZat59sFzFU515TN7UEur6",
  "key22": "5mMK1rQyhBdWdWbcSYAtnuj5mN8FczgYCqCDoQxggV6RnvhdKn5HFmnQWVMvG6rXDf3tD9bbMsxK1UCHRd81Ez3z",
  "key23": "MgrZCVaQayruSUSH3We2JqSkcsq77YFh1rZYnAGJixmsAChcLxQ7Q96jxsoteiN8vXVDEBuD4kWzYPejsjuUHJp",
  "key24": "4ZYD4iZnh2Sm4TXeG613J4uEVfiERuVTBihSMqbVzcF47zSFtDAaimcTR4MieruYWwQauGt5RxCeLNNJ88XzLFnh",
  "key25": "4mSSqRf9fUvoW396QLXYCmaw2H24jujoDzwXbtox7U5yzcBmgN65dWZvpGtcm7VKWEmfm17kSNaQkWgUphMnPkLD",
  "key26": "jh9oVZiG3GHWCigjyTRqm17QVw2b3yGfk7RFGoGfjRMp2FLBwYrujPALCMDEzvyVQJkmamejsVBWqz2gK2Qpx8u",
  "key27": "27xCpz77632h9VX2EP3jU2fdhwCdG7Tjf3QD12zfgBMoxtsm13GTckzBUCCc6im8pw5u9a5zDyzCfxnyaiSQbt9Z",
  "key28": "4cgmiihUKAyRKgd8e74JHPRrrh3PT9Jr616R37m4cpkGdpxmpq3XvgYTahFEjMnekVStb9GwbiERxcXdDVw4HL6V",
  "key29": "2eG1nkC73bwNxy3sFb9U2xmpiWpJsL4mE4sD51ixFVdyKFMSVqe8rSatCdrTmogY5KbNsgAc1v8rYyCg32BMsoHR",
  "key30": "bzsB9amwGGQ5QWNfWSgZDH2uSTc5ejikeionKyBFWXTXQQCMryUWk2qGe65tAPqm1jy9iAfYjs1wcuue4vGRCj2"
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
