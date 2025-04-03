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
    "txs2z2B67oD9sSxskpPpxykfn9YddQPrLjQLLtFKwR724X2mpTcUtCouX7v8MbiosZfXpjnA2CMCX3LUDiLuKrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U6a75sMLrgDACTZLndzRNtgXG3x6Qv1GC3KoCwJVjJqEcsiExe8fugg2XVvo8UNqJBWb41VYZEBZa8G9YLbEmz4",
  "key1": "2kuToML18FvDfC1FoJJobrJLysjqmE7u4gbmbhT3B75u9atwo8UDqNcr9yyf2RKHmYmSXMJVLAVs3NFvyVkSDjUT",
  "key2": "65EAcq13p33endLWz6B4CMmU1ipmMqgnrb1hkCPqMmTeGmiBnsinRcdyDZ9eLtGLtbXaCQPFnaKhJdYMEogjmSYG",
  "key3": "4YkSZJ8aBVPQneRd1c95aoZoFMwEYpppvjxDAHfJD7MxbHLGkpmBcU97kK9zAQemjXe8qmfATz8QPjmzGnPvwv45",
  "key4": "3uiFmPy4QvxaMn3Wm1rR4w8Pv3nMfpFbMcdF4Y7QNMph82bCbTVEGdTuUMxovv1KFbP7LkLQMaECWQ4m7yebK5VN",
  "key5": "2fGSMG1kuHz221J3oKXg7V4VTpZK1D1t9Awk2ddudHFfYRXPNwM6YrC4fX3qyvHi5zQWVZTkrbV3RcgS5GA1fV28",
  "key6": "4sfomUWTFwBFATQb1WL2FgoMhttDhG3boyrsE8G8a9xRDSWukXjUqUDwqXyGWBB9HsCPDH4jLB8d9F4UEQ27xMkg",
  "key7": "36y2NHraBweu4soJqCjLNCHYLMXw8Aa5PN6NfsoyP2hx9pv59WAKWj9SV9RQPt5cmwnk31FDXSaLTUfSuFMFaGM3",
  "key8": "gGZ7RUtRoUQQe8ceVExh38treB3WFbq3t3f69H7p3rrcDfcKJXEN4xdHB1QFBLVmxkG79e4sSFVMWaxz4zaAezY",
  "key9": "2SFn2cuLSfFmfuLgoHFJwQGLABbkA3cCuow7bZov2norgoZpsBKem73s33zJWUNBAyt1WV1d2ki5JiVq1nWBFdH5",
  "key10": "5w8VBF8gr9jZu51RCihZULaaphSFQH3XR2dK546KRDGiaigL684gF5eNDYbfc93rEN33yzmXmds55oGMYtYqV4oX",
  "key11": "4NQvPdbHP9gWNL9ZHAnnkspbbxh88Esq4q8Yamto9hm4SKJ2syoqfTrKsVdAY9pSfbEicUoM85pT8baPSD4evDej",
  "key12": "2Z6Mkh5icjYvx6AT3W1fZHHemVcuF5hN5TtTTxctxhouArL6k6LVWZPUPNwLuc2KQTA8BkhC66CFeH9guMP3LLKc",
  "key13": "3S7GiztWTePemChtgcurURejNQrUfgJt8QbAhF2KNemSwHVnFtpwpTfqAzG1LcBbzGfMkCtMsT6yAoymCNET2ira",
  "key14": "2DzWtrR4DhU1vTauiZw7KhPMhWcAsG1kp1rvegoPStdYByEp1r94e8RSLWXzeCzDQ2eosf4GcsZNUTgZGCf5uEuB",
  "key15": "4SCsUzX5jhWfpoAdvaBacowjLrzGYxitdC6KYdNsxWrYgoRP6aErrmEPJcT3UiDQyCgEnuGsbVe3vZFfi6dXsnCQ",
  "key16": "n4KwazDdP7msXghcjHbgZRR2pH3fTRBATGUaCXdNG29KPkVt7r4uYZ9DadRf9WkZqApCkfEbHMGZ7EAhccJ2qzc",
  "key17": "h32bPwxPkZLTJd2r6J4NYse3QJrYshfzaJdUCnUdsos9dCsMaKzdBxeLT56AwFcxBfryFeQUgw7QUqRe3dTccqq",
  "key18": "3vbxqcHKeZcaeq1esLFm1Nn8gZecr1SGTwH2PzTB2k1qPd8CM2xPhvkwiDQgEjLEFn2tu3HjcrFYPYVgRrx6narm",
  "key19": "4kNaH5n8T6QSnWXTXG4LWn8TXXpeLA9Nt25tbL2cAhj3KL2iZmFXHHfTMU8PS64PhkiU6YtFCAGTb7VLpWA6hBEj",
  "key20": "3jh2M1Yp7FuDtjFjGDSs3QB32dXpHAtFu1qJqxbg4h8EyMZbbdp2RJHntuGTvR2AQgoDRjshxrXkNbPE6snyG7Lo",
  "key21": "3bEPhLQQozCYpsNY5yNF4Jqx5jHGBq41kWeZY8oE1uiwmVvsDmdAaZasJEv8JpEzHgJoMPgCRv1D6A1edgbTRopr",
  "key22": "5TjKQscoQVcyvTtWhCSF76MzXKuAMoz3BTXj5LzzLowvXjNZd6JDXj14K5myNsUVV8DgzLFF6wKvLdj5kQzKpRsM",
  "key23": "5SwBdYAocnQYXxXP7Tvsuk8B2cwJodzr51jsL5GWPL5VkvavyGM77d593mSA8bgUXGwqCeojuV7qGC1qvr2aFfiK",
  "key24": "XoiUV2SH8dBMNZ5q7HD2n38riTnsNUsNVxCMrYY8fg6pERjqDAzwPiS2tuH3eU8gxWCrR26Mja56zKpgVfQzkRe",
  "key25": "CDVhEfMwqrVU7CnaL9nYgMkYTPHgnd8ZvS4JJGFFs8zbb214eZaKuhTdJuDPS9AEZ7SzZmWT5dmwTgRYAZi6axX",
  "key26": "5XPz2iASHqY2qkgKABmvsvDd4YHa6rG5jUuikWP16xsv22WPmC7McR6BiGnaBe11m5TjM7kg8bozYEhcEMtEcuMT",
  "key27": "z6PpvJzN9Ve6nQD4zsAtmV4MYFoTbN5awg66GHTHoLnpNmDiuaU33KriUvqD1Pw8xF5fYye2QFvnqdaDkUWAVJt",
  "key28": "nrAhNZ4faqWrvdMnnygHRHbis6Q6kCyExZ73YiYUXonx3wW3StooJ4Pk9rpNBXHGm2YBZEG6iTe51JNr1h9t6K3",
  "key29": "4V7oYmza6oY87dKyC8QMjDpkFgRKN5UjhuX4eLWWmUhvW2aeRbnAYrMUmjUhtAKBvQKrSP2npj7L8GbsoAANsirr",
  "key30": "5iy4aGxtMvAAZWUFQTafYGrzpUwi8amC4RNXVb2cTaJUiNxUYryZ4UCqbQsoLzmibopJv2jxvfu6vdmsonAW5Hy4"
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
