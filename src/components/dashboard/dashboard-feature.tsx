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
    "3zuWp2etsMAtKw48cYjUjRfRuHRfSAXepcdYobyShP6LAGt7A3aYKJTa21gvTSiqmtnVsMHCEfeEmwARaRJx25Mc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B9arP13BndDJKAB5wVDGCHFJKJ84RTWLkTzrsJiwgq6frfx66nK43oWx7usyM8i3JtqALicz2DNLcHfadPNo257",
  "key1": "2WNft3nSjiJoGrfXmw3Z2Tvpppisrrq4pYDkXhxEXrwLdPPBe83sMDGUqjRkwhonghoVFyonYfjHT29aDpWSU6Ux",
  "key2": "51Si6bCWqCQ3Lcu4gZxQpzYkshgZZj9QgWX4munw6RVT41a16g3BuJ6nP6t8AG9uFeeqTWropFsVre3yaXrPs4a5",
  "key3": "2XwKkodsFXC9igi9eyGL8Kd7EGb1ns7o7W4q67be2qpTwcrer5VpWLnFkoEBViBjJD6NpC13nswNDjkhYGFbFWHt",
  "key4": "4wVpaSFXeq5471D5Fks1GEaYzye6Ymu1TyFGDpVnGFW4CMw3nS2hzhjey3DaRAC8VwoLdbCrXMLVVERmwWVRaB5t",
  "key5": "3am3BkAJu7mDWiF94aqYEgG2ZzK9f1djYNsZCFJi513hzVWRymUtQv5vm2bp1crBLW3ZSNSdBnWphcgvJiFijb4B",
  "key6": "43aAQZgodSpTun1MVjwHRJhqygq2Zc3xWAHemRA7e6sLxnpScb8VeiGLtoScdAuBN6caYbHMQr3oqkPy4533W7NM",
  "key7": "3bBJcQc17bvuWXxaFu38jyvrfdESxxMKbyKtFy5eUsnZqUuf8mcVXYkYir5FU1erA6gjwU3UNrthkENzzXcGGj5r",
  "key8": "5FgnKJiGdt8B41JKpQo4sizfq7wpa86W8V3H9WTj9zWVWamFxHuSKcH3aY612FaUNb9qnTSo2jeKdBCYAw5DL67H",
  "key9": "4J6FgDW1npEFhWT92eT43AwLiAb7eFpiuSdPaJAkpKCYnKU2Q2QMtuy2j8yeHqPNw1jgMADXQjk24ZJDLs7ixWdc",
  "key10": "4ArayTdiLtKNJGCTjkeuckSb6RdxJ6nw5DzctZ7bgV2jLiHX7V1N37voBtCmPPtQayeedBhcaYZnFwCTTYezvwiM",
  "key11": "4yzRJkqR2zz9QurJbmxijc25XQk1tpNdTTYCEQNTHdDSFnTupqz2LNWsAMTHjGFf9SZftRjPpsWEX2GwkvYTQwm8",
  "key12": "m4eTdasLsJydLtPXAqwo5dWrwaALzf2irppqfJNCHC7nWGxrvGoJGLLDqEPSo9m3A8c2r34LzyCEayCxxkAPiWW",
  "key13": "3Lpjrtpm8NAxUsvQeCoo57hXV29WD9PstxsQWVA5w55Gc1yuD48yHagxwMJbb24PR5Cmsn3DuYe4ZiMbLh4h1Tf7",
  "key14": "gHcnJK5zmxb1Kn9SvQd5MYHJSG5BHhEsTwJUr7WuGaMqCFpNbLYH7Cy9zPPt5sFYAohHR92hUSngDmjVFCJtBtP",
  "key15": "64FCnAsuoGrEs6cawyHsehuS2pvqr9eTstSEgSDLquojYZM66H1SAtf7KhThtqEgBYF1TNcTeesEB6PZ1bij3ohA",
  "key16": "3TDT7jDFAjpotk6GZqP1mCkRBJuVQr8Bq711eU1YvtToKyvtjFH6ykLwYypR2pjurm1chWKPXnjAEBsFo1awnrgR",
  "key17": "5dBkqtPewAmva7qz2aZAxLZyJYnbipm3aX3EHyzbcHh14ZjbecFbhxQKUnmvkSecsu1ZiJvvHzWShEvcybpbfduw",
  "key18": "45kQeYdJNHE2BstvzDQGXAkNKHiQKx71QVZ5Bm3j1ZX32Fg1SPqZqrUCGwt3Byo2kcjZFoddzapZjkt7beiqkKWg",
  "key19": "5HSjuCLRkNohxvFd9tXXNWXcNPg5JA9d4wsrHXUNbLtCVom2kLFfPaZNwNLmcRVG37nPj5PWeNQxnXWDyuozJ92s",
  "key20": "4RLCnYXBgzSwT9NhppK25PRZVnoutctFJMSxb3351HAmuoDqaQjDXy2RJc6UMFsdb5JUpr5UkN2M8tYfrNxHFDGR",
  "key21": "K51r9xgWuCQZwFTWfLaAGKoDERXQD3Ac5nY5fakvrYxoomQoTkjwVDN2aEUz5vzNrkHBRqSa37qNE3ux4hG2gSg",
  "key22": "4cXPNMow2urscrwuKdgueHoDK5VRP13ADfM1s8PFyX4R4Tu9PYY2RnMfasQkP9hEfMxJNp1KoQtFoNYFrqmevAtE",
  "key23": "43fFxL1MLxD3MfNrQP2JjjwF4D8Q7kEL1XgC4mP8cv6WndTz8iZDw5Tb6W2Rxkg5FHEdjAzexBRurAQcYcQy7YEe",
  "key24": "5zqL39qShBPbHaDLKhGkvFseLbD1yVs8sBKaFx5YBx2XsHVu9tsLz7uWGJCELuADXRxMDNj5VEHuweC8aXT2gEs",
  "key25": "2aBNJnmaGhXqrzqzwxcLaT34tJ1y9MeN14xNZ7augdKAEHHfds3rBR1pYYjBb6zS9BHJEgAPK58U177MRuA3ZNdi"
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
