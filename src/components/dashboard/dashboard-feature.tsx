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
    "5WvqRCk3DgVtoQ1nzBJy1VXWRe9snYH1YYJspmUm1cuqiN63LkVubUQn6hvKPe9XQs4i9tvwrMhjChZjVZDENbsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h2PjnFpeRWbrvhXRe1GGV9G1bK5S1Bnh3hfVtW4Kq5QUUM6RujTzR5LRAUetZKLrnNXZbjRg6RWtoT5pk7WCVY6",
  "key1": "3jZTrmuG5aaXwjs1Dvae2pj575f49XM5kg7UKqwQDJRPTEAkgWJt6KLZ3LrXrRke4ErkcpC2HWCKoEhVDA3LMM7F",
  "key2": "46HbuhmW5Es6ZhbPGhJqc9ePwHADoRufMLJHv1mU9VHDyRz2MTufw6hWJ4WGHrH3c4jKguoEG9VQX7DLLHmMDh8X",
  "key3": "3cEJc7qbRWsnwQivFKcMjqAVC1B3qwU3KRjLswqJSaCYmSqDxXnaAwh5baaLLtraqTewpidTFmpGmaFGEcNMKqqg",
  "key4": "3YdkLpvDn25yFsXxRXsd4HYynWJY6QaijJsWzmn54pqHVHzRTQM8iPChPTqJE1VVDCJvxho9NkaKDUdMCYbRmPD9",
  "key5": "5yYBRVhxHiYAzfj9WxQJDUJYya2A2WEpMjuBPWW3LTmySZYVPk2CD6eyKYhup2MBdxxHUb3b85hS4QvjPXNSej7s",
  "key6": "2W5GPWv1cWBg9dVViN6XdsZvXdxJyzkJC5mbw7j7g4wQNrtDXdBJrdMqrnGRKpAvX1x6LjjBKNWguun9CKiqmknm",
  "key7": "3tc5tsUNZ2tbiYPuxLkC7EtdJkmwiedg7LNoDvdRFfzpkWA74xnu5ZXpZsW3UGz58irB4PnFYX19bi3qB8v41urz",
  "key8": "5FfHGe8km727T9cBYbz8hV1N6gpSFVJEsnuXDiJbz7TPmgC2jc4XQmvJQfVvCfwWHVUFG4c77yMg3KKyHivGaBe1",
  "key9": "4dM4QJCNTLxNJdCCwKMhgrMgQYAjTAuNvdvaTqgSmtp7yWQFP69EvD4Qgt2q37oAC4NYk84MWmLYo21o393VWVT1",
  "key10": "4CqTMqHiF4PvrRKnBVgZ1aCPWJQ828orZgZ4Mn9aEwUFnkwNPXy9P6Ck7sR9GjzUUYhYbPnBZ1YssHjysxYLrMaf",
  "key11": "46GeUzdCxVQCScofTUN3vKLsReMG4suywoopgMw17M35cfaxqXm1gd17Hoi8F7i7ceGfTZSR4uBQ3rdXEubLSYcX",
  "key12": "5ufEKqgMb6Ruma9h6apwSjtVsSFNnmQ5PJwH7kjxaofh1MG8b6mbpevWq8KdJua7aVQQpuuxJQ6nS9BjJ9frfHbx",
  "key13": "5d5JN4pjWg6Ew6fT4aXEwoSq3YjdbErD2r21azxpvcVZEcMMwzXDf5KqiLv3Z6cpGnAyQpFTqEKkQW5hQiHJLout",
  "key14": "m8BDEVGxczRxYRPp5t8FeJtoCYE23XuTkxK12cP1aCYsGuGTsMSWQwh1bWzze17ve3t8NUGXU9QprY83b3kkUqP",
  "key15": "2vo27ETMHEiwo64FhFW4X4bEhtCPwRCDnio6mAroDXbU5b6tdrT87ryLpJhbqh55d9PJFa89WGGq2mcmmsDGtujX",
  "key16": "2uLxq3ViGx2GZTZ5ThQ1FS2iJmybvvXf4Zqrx5Poq1yF4L5LEESE6yS7m84GREFsuuzrruZugmynQZi6WCRopjFg",
  "key17": "4TRoy6ym9xBNe4Arovgx5qzi9Ji7nRqyu6gJsXjqypUvngFbCTYbgHhyfJFRGRauNCoN6Bcp5ogWCwc2SFV47qFu",
  "key18": "39ZW1jmbQr7PBmVoKAMW85RYcj8weZGW1XyUKhwnrcvcGfUVbpw9F2LeNDLiWRus5hjH39xvoDM9f4LXBbhWe5DE",
  "key19": "2CTmNNkLYQ5thvipzMoSB8Npz8Nd7Hq5YqdXQYasdMCTYB3t6nTQYaPUihyi5w3y18uzqzc9sCVCBZNZS6cccRU7",
  "key20": "HUfJgeohNojWtLXrJmTJcj9ZWx1mv2JfpjyJg9uDzWVcn12xzrH3xq8NzX5NkUHqmNMGYMR4ddYEYUUSvS6TGBw",
  "key21": "2j633scYvMDEcmJRzJ2c8Hfy1u4hjCYe4twf7sCvc6Urttgf3vwD71tsQytVMNWvXXRU3hfGefk1GD5W5DHMPDdc",
  "key22": "Ze5nswSQ2QocZcHk3KU4R6gCoYeLhVqgqdJyjVTiGGTH6DzHAj2iBTXMnF2Gs2gYg8JmxDRVRuLgwB3kTYzJvcf",
  "key23": "48aruUSSkdDE6FpLgkprnYqVzzQzGcHbJ23yFtGpAzTciE75hQy1CnUhDX84pDEmsd2dRdcdC2FuB9cKDGXaPUVh",
  "key24": "65YDdsnHaEwR2Rm1gmfFHUsxAk2hWv9wt5VGMhFvoH1jRdjXqikppfnnNpzKJhCozgsiZjVoDudDhmU37PZkrVpn",
  "key25": "5R5ByG1eGuRCZ25SCjv41fEiurCwvK2hz3iM6seiQnHfKF6ZdKXShypooce6eZt1rKr7SkxaySnn7TC8bUX9Jz4N"
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
