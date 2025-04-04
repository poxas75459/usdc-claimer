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
    "A5HuJAs9SqG5NmQ4FZGDLh1JBQMShUEA8NBfUVy2YV5B74s1SATLXSdg5wQBfakHPbVyukrG4yzho1J3J5g9Tcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JztpC59hfwXGusk8N67d8Pio8FYtTDQq8ogHFs7eUdYWgWqV6FLKGFkDt1HTSXD46UVR5LvYdrkjrcY8jaSNjab",
  "key1": "4AaaxYib5vEwAykELseSbcLxaX64cBEnGmRDEyPT5vtyPHtS29LHCFpQ7ab9gUkci5XuMUJbQc2qjAUb77W24XiG",
  "key2": "y1vuhUEQHepZfP4meABh4m4WEFW5GGBmaRq7ZkWLxWPnH4tybw9stYNZWocCojqGkMgrWgEDjiNGCphJMVuq9e7",
  "key3": "5itHJ2ni1dG2NwrkqSYw4vA1czNmwNeiHbvmnkxFwXchehLe2nzCJR8vbeVgSqTNPsNFBxmeu1qFyXXo8LeqT7DJ",
  "key4": "3hJzjPMCpHEk7oJS3mdbHX4Tm8cWUXBAFnpwv4Mg28A9f9cM9MTACJYboqRLxYrBczXXXVTm4NqxnNf9VSRuX55v",
  "key5": "3Nc5pSRG5VLJJgjJAzdjeoEnmBV64pPXkque42nWaSyy5s2nyJSxqcokVGQcNu5Y3esAstr9Dcg9AgqHYcKWnC82",
  "key6": "5dD9bfkSbKchK6q8s29hewESJwGHvZxZpeTDMPSNBdVjoosp8pfVovGfsoNFb8nhZeqEZ1Mx3F2ECDwd9GAv7PQQ",
  "key7": "4tXEbWVDtXXYBuB4x6ZMB2cAqYXy9s9sxmvEmW8mrZJkDsSz2rJ7KTGJEvzEtTUTfUDUtxx6PdzsixqwCu8P7qE",
  "key8": "Rmjp3vmUnC8KK9chXfKP5gbom8sWERZW5mQBephi8N8KMGhei8gbSPBWxacZvpyUTDmBnkyYqPZZaFonc5vdRyR",
  "key9": "3JJ1QtnHfNhknky4JKpUgeUvhrx8mPz7SXBvAcCXaUZoXh3DhMZVmnSzrQEtnP85kaoA6VExCm8xCssYo2aL9xbb",
  "key10": "fhAskdjCcCq7BZxh6pvygmMNdtENJ14G3MUFtw3wGDhkGRGUpGm1LcevmJ8yT3rof84f18waAiDWDonBp3bRh7b",
  "key11": "3NdfD1uWhj9quLxJEzGoQp5oAPNmoU3oHQPLQTuZhGiHvQDsUEFMaJ5Y5fmZG2kMTCcyaUH9rVWJK8DmXBLJ3Jxf",
  "key12": "2Tm1sJQ4LCa7EcutTdjGR64aASGHNzFT4kCRjznuRt4Zca55bQiExTizLc6Be9CYKKBrL4PcxZtXHnwzpemrGUQ7",
  "key13": "3HEef9Xu8Y31SrdbUGWtrW4tStZAezg23DsSAvBiyKeoQBuEBWiFmd3QkdTXZbrYvukHF3RmbpZSfm8ZzDcYo2ee",
  "key14": "5LrvscdF5YZBoZWzdQHffL7zuTP8ZCStnDc7zYgsV9dTwhDi1VsCZVeXTZgYp9Z2g9jEJ4Wfj2UYeoKDdTHuu7Dp",
  "key15": "5upVFgnSpgDzbp1N8j7u6JKyFF5kx82FPwDS7fHfs8R5d361PHQ1BVq5W3tRm3kw3zheapm3tW5FWmJhx1ZRJqUE",
  "key16": "3wTqD7swwY3KV8vVX1qHwd1gabzqvnnSxQ1DR7RgPK1KDRJa7JYfhwHpH9egwQKxjGA1X9YMDE5UAEDffxKPyftg",
  "key17": "5sTdyTTYqVwDvs4w5cfDpzpySQ4vfYrsCfVF5C7NgJ8TSyBuEyiDZCo6Cwxj6sNV4RoZBgLKArHoDsbQQ6vipaLf",
  "key18": "3HPVYoJJ133bhQb5AZuptbLc6QbzLycYzkD5EginzEgCmXSyxw4rpK6eRsZvJpmrAdE7zWH2FYdjGyj2hJKyR4Bm",
  "key19": "4bVBcRe21FFRgicqTYhG5rTBSzzz3nYwuWFwAdH1kpnfoPe21R735qpLpcCBmjqY1UztTRYyEAAhJT1kS8qd9uit",
  "key20": "5uNQGrxmPmifvyFLpHkUQSCRALGGaf7KQdYgEfbioD6DRKo6gCS5iB7FiLrdQUWm5rnG4Egf8tic3fjL7aUEJrRY",
  "key21": "49MDRv1hUEJ994F8Yt7bBBvyQspCKvPzVsoCkBUR4F4Y1f5GMZaNsANXznPprvPaPguoX9DFTwSE2CW778JT6o41",
  "key22": "5e9Fm5SKT9KDf3MRxWbLYuxoCs76jLKtBAHbt5fUaaf9tejY3yxa1VpWUjA28Qmhv4F5C7DiqHoqQoPhuYEn5DsT",
  "key23": "2QEd9S5qBUebrDoFNSjw5FsL5U5oXmYKEhEDsBpRHX5eoycnatx4zvvESLKcWUg31TQRBynbL4wrLHUS2eA2rTFN",
  "key24": "4zmZdAbWhdTyvVsguxPGARmtb78WgRxPwnxow1EhLMv3fYcEFqeFfjp18634u6fMYYYGS15yFaqbRhGE4GqYwEL5",
  "key25": "2wekQnS6KbTCamY5pWhsmieEp2sAAXrPztwvnP7ypubEQjP8HjLsziBGskwByLVzu5wQBCxpVwvGANanMuec8un7",
  "key26": "2nNHXFPajsCKVVAEqV9dyeYD4cS2WYFK76vHxYUweF8YD8Ax5pDjTspsgEqwS5TZQd5uDg26XGVUQT3x6u5qT8FX",
  "key27": "4uviT2LK85gt32sx3KQ8MJbWeQizH6rzcxVKVGpePieNGUcEEbMc23g1Bz1k8h5ZZaYLi8dpKgxcHeYTx8ufbWY",
  "key28": "J8NsAY1WGe1dCZY6FJyrRQXDhbKAzAN5DKaoxoGwhqqUJURmA77tpSWxsBkNj49MMF1UexVYo2hEaEfVwRk3mtS"
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
