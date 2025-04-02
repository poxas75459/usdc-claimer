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
    "2fCBahn51WKT8Ms4bs7cSzwdkj9nF8hNXyKCyUxUCpEAFXrGw53n9F8DKehzerciPyjoUPY7vVPnHjjF8R8YHuxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HrRWLLvKEB5sENPCukDyKVv4Dw7sxRyteXF5x2RgLerHjJY8X2UaZUP4uEYZSYGYrXfDJX9MwHQbRkZesqmzCR5",
  "key1": "3HkcoRKzFdGHJyR5KHDZXUMhcAMoX3MgZ8rx5L2rgpLRCfFSejxcwtsm8TQSZJN3oHradHHN2DMzDLbEaL8PNWxW",
  "key2": "4JqZNHAXjzVtnoe6TaL7F3ygRYguQoYpyGHpmHuQN8eY8DwVh7GbpwujGornsT5yhjssDMTD8qDsBg6pKdQMop4R",
  "key3": "5zscNqyVNm9aBgxXbJupnh86NpixV4n5oqZZ4x6WhTg1TzaCb3g7JmNPsSJnGpT33J3Vydhx3TXnxJmK4Xh1n8Jx",
  "key4": "5E4LHfDtnWn8UcBzFipzRswXjmfX7Mj6ZCmuTHCjDDztHu5aNmYnAui3XWUNdpdgsiuHmHw9ey4VhEBXLpCbjWvn",
  "key5": "z8gNMTjpPYcMvH2iuJSYBUBypWprr94cCyiJtxP4JP5kH6iWg752Sz6dgna4264hUDhju7JNVtXjACbziEJEGoz",
  "key6": "2PwxxqkcJai7mcCjpPR1ibLVwMyXm5p4yqtKpU8XupC9h3yZhFJM4MJVMFNzYN4brGzUM2wpQePupmNTqdH2xhdV",
  "key7": "2czvRXBUzv1PBovTiumQsGwuBfYRVLKGE2JsRzbeGUp8TPXsCF4cUL5sq5TzFioc7qrNMo1TLaCk7zNre1jzgFVf",
  "key8": "NYzWj4g39PQNrD4jYcGsHJNoascptCDUr5Xbe7BRnckJjQ4gdFTqzAm7cou8YfC525VieAHTB5CJtup7Nyqeob4",
  "key9": "nqRudSxn3psRHCjkqigMFUzn8CsV5zmBtgWKtCs925hFew5btFtu4hUi6qL1deYMvAJsbM8Gu9WZVM7ARZ1wsUU",
  "key10": "3VHkjfHRggTQDjhrnP2HNgYbJKGadxmUowW3KKJmdVDBS1mCHidHxUvRu92fpSunqe6Wo6pZKwseedthLmogNASS",
  "key11": "3w6mqA5z2Ji3MAefwQqpEDKDvsSF1RDvPu3rQDyGF2K2iczsM8uVEHURcj97o3ZTTZd2kngzvQfdQvgyH7nDXPQF",
  "key12": "5H7mj5Qsr4uQecY5XVvGCfmSbiurTcpPnbu1yKRGiRy1HSmb2DyDo8Efhj3Q6DAMAxSk2d8fB1udWifUWiLJmeHz",
  "key13": "66DaHED5JfMVWzc2a52z1vdHpUqhjwofY55BQ3NoxEpRZSRWS4gqJmyQ7XRPnYkGPfz6b5XRwMtWGbcmMVKAL9Xf",
  "key14": "2JnzJpG5NBPLDR6hbhM9RSdeigEhK1A6QDgxWW49dGnkXJXJoaHinubqw7HyN9fYX6GwZDxX579imiVtHYGUq1JT",
  "key15": "5XpNnTGABLDvsorWT7FF73R83WxR4VEKKHwQNgVGRsQbgAkJT5Me5XC2RiuBvzxhDBuYRfFzJVosXRez52Hzj1J1",
  "key16": "3ftfhhy1atwXywFhKh9RMVrCD9CxKxSRnWtriqqen1ciwPXVeXdTBpbCCqNGjJpnYT9UweWWtA1BXk6ooY97oeTg",
  "key17": "4xGtjPvaFNBATqKij52BprofybfJCcQxDdSsdX5DXHnDcJhKkxDvtnVY15GtL7oVBMRmz4dQnZfrJQVVJFtYfy8P",
  "key18": "gDFAatRdR4U31EZTXzirwGyadSYhnKt9WawJHDnPsveYQFV54QeNAenn5J2poj9Mwx5dra3EyfdSe2NxSHKJRMP",
  "key19": "2QAVdhWjhE3apaHd27apMJYABNorVb3VpJya9BGdBEYiqCrQEy1C3anFWuN6BtTNPvrYfkk285nZjuBT5BzcJDQq",
  "key20": "v3Aqdus6wXDaxicm9y3xheZEhM7HvBNXiDXBTJbw8MyYHbsEPvt3FNKSumPz8BhhW5YGB1pnR57JVq7JXqUPUmN",
  "key21": "3dYxQMLCEt95PTUG9dPeHow3PFAY9dbjeFX3stzWMMbHUrYonewXZM87g8hNWN9uCSJ2WjTQkjzsNvQrdvp65jvf",
  "key22": "2ACBUUD9H1C8xBwgVcMCqurh61XZC96x9KE2aGkvGn5e6LbzDv1e73aJRSKMss39X633ih6E5UEaYyS7YK6GPeqE",
  "key23": "3JmEmU1QZbo21qAyNNXoBe6omRb4dYhrU4CeZrSa7NrhLVskdmsTZY5GvztjJZfR67wdDz5w3AWueYbx4rLqCKo",
  "key24": "3bxwLe7c3JsEiHKfVNUBPw1QLhYiWDY7fqEKepJZpSMPEPtiAfNYFNcXi4H31d8yJ53BygZ2YxB9gLZqSYGaWchZ",
  "key25": "Cmj7ywGNC4BdgBj1Fje7nZWeg5tzxnsUF1YwVWZct1V3rdfTYivkQBuKBbSghGuRJB84wCA6o5SvU2MPpwTKRYb",
  "key26": "hr3eH3YU98Z1cdpKojXhrv7sJpC1vzLCEXdCEgQTYknL9sCkff9231LxvGeUns6oMPFBp8HKctwvfZMdWrLwhJU",
  "key27": "2tnQHGnuzZ6z3a2jthzzdUGGcDsotHKxj3fdGucc5U6Vytinv9Sj3Wtk1d7CUP8Z2d5S117SK1k53E3edBKUpp5o",
  "key28": "yqf7jWNDLB8pft3imm2FEA7zcQu5t1H6wwFGVVoTYbh8CWNb8Sk5J4UzdYPWUH2bVsip9YiRfBEcTqkojCMJ6VY",
  "key29": "3yiqrmdkMzpY3ruSBoZHPNSft67Ghuee9rZV48vtQmEroNctCkb1kwecPZuAAJbjhT8NkzTxVRbe5z7tFTACFNqq"
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
