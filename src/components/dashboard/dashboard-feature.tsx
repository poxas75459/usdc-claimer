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
    "3jJvx1Lqz39RkTQsakdqzg33JF95wBNYV6Pxzv4JRgSY4ykQgQ6a4M31L31Ve9GgNVXffdSvpyikoyGS2n8GAvAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cU6Dccf9aSdPjhFNCJpm8twy7fXd4tfmy7fMBuGyrACsGQkme5c9fXvNx3YXG2WveF9FVU31E7LVTjVzgg4sKZP",
  "key1": "56MX88P4ZUMdc5YNyx6P48G5xh1G3FiQqiZqLywwBGSUCazDL1bMcXsmYBY8a5MUw3uxwsAg1puxwuAbeNd4kPc2",
  "key2": "2euMtqFXtVSrhKsxLPT8PgPvryZKEyH8Uc2poiGSJuawDP6wuWy3CgV98HxFEA5VQxUNX2kUXQqS4eTzJFN9nEfx",
  "key3": "2jPK3EQECG8bgVihnsSPCPSf3kk7gvcWQxhxYUp7tZc1A5ceWgjcR2yvmeT1wbisuNCqSkTzUVyQedgAq9yeiEGC",
  "key4": "1axATgfsonFsXUv77r7dxn8veBR5LQCJiQJuJAH1Lsz34xJBNDDGNJ1yvtQ49kKekYJ4qQXwRB44svqgCr7QfpX",
  "key5": "3sGANxiMo8X3eDHrKN5eZQrWxVHD1WuL78yKTsHBSFZs7Vi83CbheXCqCW8JyC9CJAk7fr3tKY3VEQiytWGpiAHF",
  "key6": "5rPwcFwEk96GjywPQtmdkc9VmjUBhjajpReFKKgBcXPriPejWkte7Zv9MgW35ukUWygvzkmx2zwmA9xuPMN6tL9z",
  "key7": "3bebbWDUYx6Sq19yX92ssKcFeeNScxzH5dVEt9NkqbF2g7F5emExYbiyydRiQLjnmNjgWQUaYTVDCoocnHPJ3Sum",
  "key8": "qRCqzRPeJN2j1S2BjBehBJKk8Be9xAGkjakMVnPw1JuesvYjxC7ABLqN8qiztecEJoPbwxXvfJd5pM9rhTybVgh",
  "key9": "2JLEfE3BREyR1C3NrEDF2BUV1L2JwECxGSCLGChcoLYVs7SrSkbJptNy8uGu4ALff1MNE5j8xJjKc9Jd7nzJgraA",
  "key10": "2WhfCRLuQNKNPQgydoiYdzmMopi669bt2cb89mjBnkLdvaYAjhsGWJzMFVVkoKaLV1uPWssnqPxxSZFA9Ut3FQTs",
  "key11": "wx6dv5yviYcDt7ettK7kcmDnuSfTD5D3Jhh24yY5TmGAxcuPv6K66RwasdvfWJ99AwE6ZuWYdFsysnxwPsGTYdZ",
  "key12": "2vKMQJ8hAS46S9BFuRbrP4ceJEtpNmRm5cxqrQrD2v7zuGyV61ceogQH7Ne9H743wsU4rNSpq3VqLsBfJ8fx4LSg",
  "key13": "5Zeac78fVD7ji1vBXRfmwxnv5sK1oJ8W7ThH3YVHpw656henNJ1vcCDS4YfAkwnAaQGZ4vN7LXdHpUZeqyRsNB5r",
  "key14": "2WTBgumQHJSiVh7JAiEq7Z3eei9hcW5J2puRU38XYDhgELdiRJnzomReTTar3L5FDg4AS49gF617msy7Trmjk19d",
  "key15": "3ybaNSrsfgmbKqEMiqNCBvUTNAs1cXw6t2EBTfK5gRvQtTkZdEnxsaE5xBT8bEkmcELMWiYE1u2E6SQC7q5nV9W1",
  "key16": "5DEnj2Z28imFWQzFmvs4y1cYnASy6in5HTxWjovEfeYPaKMiFxWtDbUUyVvfpfxDFhfCQoKzEiBAL1KdYwkpQMwo",
  "key17": "4KPJn4XD9LgSLF9uTsR6bL7ks7bttJpLqETGAgsdT9j8pjkdqzvKLUUhzN5xKZyCNkSWjfDq5BUWTyExEjktkXBd",
  "key18": "4RNpwk9YM1KDxzUt3S6yTfFBb9TcqVTBVuP15vXyB25HHEuvpXmECBwbv3SfTKajLkNQugaTKr7198jwWHhQdENf",
  "key19": "3jjuvn5V5ZsgMnTPsrNNG3197v3sZ56sN9jGLvQLYPgqav25eKMkRKrXiVFJ1Ew1RRbpDrwAoYjPtpjSzm6DebHo",
  "key20": "5yGLXKg7KTyUWhD1Ps7MM8V4WNrWRwjhMaAMNLg3cy8k4Z8UK9qVAckaViPj5Eg65PEytpffx617mhBKGvafZWsC",
  "key21": "2cxsPzN7Vd5w2cV2bV9EYeJaKpYcza9c4TkS7Q8N9AA3c7Lo1ZjdquiXqByfKAMJgp5MLEYtPonnfHZB8XBW9qoo",
  "key22": "4E5MueVGWcrPGV3YLUQtaCnWCNtXeHrkUVsgHoYH2Yt3RNfpJKwu15QTYaHwukDpC2gG3ob9idEQDP8ncYJp6Fj4",
  "key23": "2vmjEaTCrRdfdEAtNxfWDZf8Dwi1vy6QVVygdquVyShzyThG84vDa6R16pGsqNUvRrY3FPC2LboLP11Mqv2ompXg",
  "key24": "3u5zoB5EVRXvZjw8VVJsz1CBDnWCKcpZ9uXJvTPAJcjsRoUaqFJmjm2sNg7wSpXMz6YLKgnwG5bHmoxh3h95S3om",
  "key25": "4YoLCgHJBR34yhaohdcRCKfKDCeUyVZXFHYGeDVL4bj4GytCzUfNkfdL8LfH5fE7BgJmUZzNtC89PCtd66JC8NHF",
  "key26": "F2mLUA92B5tYNS9M5Y2KdbGhbVKJpXrrBHYSxCdM7fZkUyyDk9YtcR7DM5WbW2Bvrg5rFqbVDRmoyXFDcQHdtDP",
  "key27": "5cFK91qHEmUDb1qaeF4XXgbNHJKfUUCtTjGUrgHAzeJvu5oCYLrAxCSoHyaTfbEhSHeCAsdJmtcuQ8gre2RxEAcd"
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
