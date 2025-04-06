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
    "48Xf5uLqiKAXXGVUNGDUXYactddRr337vm2AhjTnnrQqKYusZtyenYbUS4S4iWNJgAmEm4XKaYDVRPaZdqyKhT3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SEwbofAZSDdh998y1wjqjayJjSmVdzuEXXPRCuAUS76XQV4wqEAZA164qsonSc1junL5RSKdNGsp8VwMuyHUGNg",
  "key1": "H4Ns6FqMCQV23KhabuR9b1kuqdiSeftFbKmqWDtBs2P84vQCeLAhpY2px3RDzXAjhUYSdeqdzhHdAKaBFdvybpG",
  "key2": "3rY64e2uVB6mDKmpvwQgBoTM1Ad9k3KTV6w1vbo4nP9FQk6s1PfTUrp4cfp6rz2HUZBQeFxTGN9o4LxrE3b6bFMN",
  "key3": "2iWYDMTqFSHmATVyveUBT75mzpyq4epa1VxvP61UN6ANFHr3AyfG7L5oGygG7Fiu1DqfGRDC7CBhcaFbMcV5Rsa9",
  "key4": "4Q5vbhZNPgkAE1NSRph3PZANWkd5LGoFwRM6m9vaqfRy66z5D7Toap7TgFA7sAAcWRUXZ5t9oeTkyGQ36n6ARHDD",
  "key5": "2KGGc79QPpi6vFSAFywBm2TnhJRemNsQikuWPHFagT9NhH7hFKMikjhfk8tMwsQQrAacF8BHv67TzDwovisayDwB",
  "key6": "5VXS6zXiN4AvAjCQHw5sQ7hYiAp6EfjPJK7T7feFCfTk92pTf5NVWLBNm86pEoTXhLmozdoZF63aqocEWFdXRXtB",
  "key7": "3GE8HXLJJ2BhYtLHcwLwL7Uq3au3taNJ46shciyshe8ujAis9Kkjaj6vJbmpwXnNGZhLuKKZM5jy1sgYRQY3LH57",
  "key8": "2WTfWddM2u5BFKwPV5aYC7R9s3cGfqT4NgzNEJGdWPkkLWhogMCtNFiDEXmQZdriNLB3hRWunwMmG2t282oS1VMC",
  "key9": "4cE3EhmWsUtXVtdTZHmQysbhAGC928dFMpJr5VUZQsuo4MhCM15hMAx1HkEfN9PtBiaRfJiJShHSkyvf7YUdsbMv",
  "key10": "WWfGHcwzmnUkiNW1hDbLGjBCAdCqbe1MKgVt2ytQfdYrS5ogUNCL2PHrWa4phjm1mCEaTKH3dybfD5H26KPgMZU",
  "key11": "3SxPLHTLnBEGjJp7omZTzwbMdJjJkYH34osrVJSAWYozCA88QxT58heR5A9M4ZZ5c2nNLdW93ihKH7kwi7tCHJ1w",
  "key12": "4r8FxempetTLCHmBytDfMLZkzJz2Y2P29XagsMRcQqvpX7cLPQKb4G7VHSj7PUVssBxpN9qSnZoNp2tGbF82eaX6",
  "key13": "UKtCkmnNorxwyggysUH5zUWGcHLQaNXp2SpjcMUSYpCtmuGzKCWawqEmAhqpiArUApn2VBKjq74EFmqezyxNPWv",
  "key14": "4EYHVmPVAoioRHGuFqQk1t3wwiwmBvEzsE5mwnkfrBf8dFQQbpTqsJt5nrR2jR96bVGADm1FWiiZaxwV9VtiHvew",
  "key15": "3LymZgV2urujKySGmnQXq9xyaiiJtiKffxzQbZks2JkrfK5VDvjRxgc73nkZSSHTD8RpBPtAvNwTWU4261DSpW3x",
  "key16": "2a1w3bsiAq9ebqtWBZo3eHXNwisK9BkLbszVtgedtMiiZFPov6CLxEuByC2KhiXX9mTkjoL4Wko1MgLHZohdPm9B",
  "key17": "ufoLKVpmaL6bEwrHsBhdNnws8g6WzwxNVn3cLP361z4HYxDpDz5ue2Mema1oxi4AZdFg9LkK7wk1uhFjQULSn89",
  "key18": "22S2yeNtp9hzTd8nH4XkniCSpWU5bvGGvFLVGirVRr3yjmxQZWeuEtQVqfaN4saVjY4W9E22hj3nriA3GvDoEYoz",
  "key19": "5KFWhckMBi12Cq3WTHpcntTXayBsnnuJHhQMSWFUVVeZbD9sbtaHPTdrfTg1BMm5RYzg2WTVvbR2o4tKKraYswww",
  "key20": "qHH4pr2bz4xs1TG9oWw32aHQYg58NAdzDsNih3i6fJqjaTWUpN6HjaqXZRdM6tkqJiiLLJETwtqfkVPx6eBu7qS",
  "key21": "3kHbPK2FSuFKNUEXZVeMqD5ZnSdMyHMSrqcbSXvVQLHWwyYmZVWc5DZuaqA6yx2WS8EtZjN45qvChS1RTjFsif2t",
  "key22": "jx9xWPkZdU3iwLJGxG3k87shhiK5G1Zn6dYyx3rCchtEKpatA4vywmJmai3cCYEwnn8nQAkQpJVmmAmktosw6ED",
  "key23": "3Y5TeoHSpXYxJbyjDHuXTHCkcVSpDWqTrhVhQMjjgesGtYF8t2QonDD5m6mhScb7JzTb9R3SNrxFnRUgHWcYrenq",
  "key24": "4jU2JMweuZE6qn8X7cBcNURetSuZbU8prFXBTqfxwQEdfMJPzUa36UXh7nRwhJn28RYgnpPuRunCEt4e81qbojfu",
  "key25": "5kj7rSNpm3En8b15fpbq7awtGzSiET6mJEC4SdLRT6rwa3ZNBXieDyerwPJwafgovyYbhqyGRwceGG2KVtE8K993",
  "key26": "5ZszTNCVBovn69YgqCP1gT8TyWobAu7e7QdztQLVNL2Mi8QfpeFjCgY6tpVrZzHuDHFPryAouRRuvNCX5DqeiTUu",
  "key27": "5Y42zAYofqGucTWMJQ6rywun5SvyPSmgQU2Gb73uzya3GGRJhpjVM6g1Y1gnRdAUfWgDcQwLdLQroUNrhdszjbQr",
  "key28": "66jyup13CApnSzMNGuvnST7zfDqedMcpfqQ5G6xUgXfb6eqEXSQnXPCGfizGNm3qz18Skhrf7hhziMoUTfCoJZN7",
  "key29": "4ZFFXGHavnyswVoAXKvb82LwvVJ23Qm2QroWyc3i5BVtuL2RWG9TvuC5Tj2iAmAPrKt7QgWPqXJbWdRqWt81v47E",
  "key30": "5nc9pFm8NjucPyKyD6yRq9kiAhnMmEpzJvvgriDCtRm56EajYsHfjfTo9B7xbi5R6BdwATTTfmJnGJV6x3KJM9s"
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
