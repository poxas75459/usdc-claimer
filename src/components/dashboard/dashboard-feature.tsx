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
    "5FTJ7pQoPtfDNJLWs4DER3Bn5LQr97dscrBf2fVp2jywb5gWct2efKNuJa7YcnH8HWVN7zA2a1B396DPMnn61krB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QJWbrV6Xg8Yo8Kzwu2sCNC69bMFPqrmJCkN8bsJnSz6eHzq7w6gGEwaW461Ztf2MiSrfRreAx57aUB4pNZURrDK",
  "key1": "3Za9uE5b5cWrmhYeqVHfic8kPRVVdAjRFufv3kCdNQAKLyEPZkaXcDbtNBqVKTNTQifxpyYWfsyHGCUTSKfMBjUo",
  "key2": "435JFhSr9eT36iVGcWgY3ZqPJBWXU4apydHoyxm6VMC5hY9WifpbXDfMefQNTvRWyhWB9dKbm19eCbj6knZLpon",
  "key3": "5p2pwuStQtXRMCnjM9atwTUSexZ56PRK3vfX9Ax8TuqBu3KHwh7KNyh2wrmCJ5BNKEncUDkfYR7QWH6uYw2jxtgd",
  "key4": "8wVbsKMv5Mcngow2q6DZYQV6Hme7oa3qaBXgKT7m1bjzcXVvV1Zb98ePG527gWCxmYH5TnAna38YaTNJW2PVRm6",
  "key5": "VzAdtb4bBPJzjEeT12iMq7oisD2S19968zKM5DgGbhNmibvaiW38tBmKYdq2JbT5zR5Rz7WviW9RM5fmLEREfkS",
  "key6": "PDXUgxp3BPFf6HCN3T9fjjXXoAsxYUfVYckF5f6BA22oiA74Y6dUrqcStLGBnWW6KNZ3Xwt9d9SkFwevCJ8Mysi",
  "key7": "2cavuX66XRfTy7EeCZ3xQ3mcNRJoG8xrQjS68QHs3SFYQJ1WcyFg9ePTUJaQH826KjH6uJHqi7jc17zUHgYxVmk6",
  "key8": "8CDyPNWWCXxerDKf1sgcW2FyruhAencddiZks3Yg139xtrSa7HXiRVAUNCCHhpRWTTrjoaoXp37n5iEDRWStP9P",
  "key9": "KRU7YtZ2PhfcpBbpEFpcatyzGwcawvuGUAGZZTES2LUf4uNuhUhXJgyLXeU23uHviQSN1GS3qDFfxcf1HNmEwBX",
  "key10": "4MkjG7aKXpMyAUcWjXGvnzjfk8wLLAK3ehP1hUCUcrvbzC4thAGQfMoC7Kkny77tJos28zNgKFn9wYdwS3DdG61m",
  "key11": "Q1bkLbgrBUR5L7br8C8y48t9Di5nPv1xkQ7nkTrNHboKd94kkQPhMhVvEZnn6HPTs9r8LkcGHFfC22GcQqQiD5m",
  "key12": "2JsqR8mQ9gf82CxXh1MJmhj2BbS45bZFbPTU86sncm6McztDzK5SHy8ZJs1VoBu2UkhK3wdbjeivweA9RD3S1uyk",
  "key13": "kcp1Ti5otdWFt51NrY67g8RRHkoahoXQ6DRKyNapWWUG5gsbio6QNotTduoqgfnuqwMgJyTDaX78EofDGMKAXRp",
  "key14": "4eP2McGqUQUnrbASaSSetfwodS48wBPGdg6Z6NYvaX317BnGTBHjWUqqPzeRWMySrc3XCpYUaDYHP1knGYnGjKhu",
  "key15": "252DW3Pv9Zkj3TmB1Y83WaDX2apDCdXASXd5NpFiWbwsvRwYpJNWbXn82Zk6uK7xEdj3hzi978FYHjPK3EiHm31M",
  "key16": "46BjVEMQPAspL7dp1DmtahWA7oe94A93j2RSfjjy4b6jYF4DeyXEEf67GyKRU9RKfqPZgPZwMEKiCTTxqzJkJNKs",
  "key17": "4NMvGnyo1qqwtX5FERJA7Z3q3eCayCqn8DRDbQoAjkScnifqAh6JFAAuFXEsD4ZZyLd9YL7T1UszXbq9RAggwUtF",
  "key18": "5QkzZqYszPnR4UsNeH6sAxJ7MemCJmKh1T8prHvHV9CSfRPMMA7tknPaTeV1uWknk6CwtPw978Bx5K6sSHwyBuz8",
  "key19": "4UZaR6Xh5DbzkoRqqqa2hC46ACycCNdH17ebKxiBCoJJZUhEhm61MvFFM8SagFnL3xJW6bUw1PNcaB1KNisUQCCh",
  "key20": "Y9noYjpXMkViTVjqVZED7CLcsMCCRU8nQSEtSXKDTv3tDmv9Z1rEH2bQ6cK6FC4PWQJJz98vbrs2UUMx2M1Snth",
  "key21": "2oyTZv3vHq9kTmihwEuaXvsANhkzvNQM7Wa7UVe1dgQcsuNYEaB29as1cgnwwtAYVs94UEyuqzU5wqGy1CwySPBc",
  "key22": "29wRGkJzqsPA2jDKsExdc84Uy1D5djjirFjL3fB2Q7w7akiXHw9iJi2MVcZgD2pEHtYpoGJCHrEzBxTEH1C6u2Ej",
  "key23": "3sBTJPsNaKW3598Ug6FBi28Rux8977xjkSkD5nBAYnjzDgpNyL1tKeHT4jo5X6rzUyQyCHZ4QzGr73yRZhSkQZJ4",
  "key24": "F3gsFx9XkGhWujuZD8M5St6fP5yv5oXSgu29r7eDJriGVr2vBzF7Czsjf3gxxNL6w7V7cVYvukURHzWDqrmpMAQ"
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
