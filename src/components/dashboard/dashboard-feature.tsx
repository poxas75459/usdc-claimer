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
    "HZJkauoLtEg4Vno8QqCX1VWW4V2ESZjhSxYHkEpFFzt9HpVMRRj9VHCWBNyQm1qabpbfqX2qybE54wrHzTR2gpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y3uTDbrwHHNKCwb8d424ENwGZVhW4HovPtEbQuaJQQyTSWrEBgm8U2YnKRUzJyo2NnJeJ9Y8yN1wyd5m8GvChya",
  "key1": "7C6gMuGeXBp6HBjYvetJcphbc7YsRw25eFUz72kNxbiDskH2KEVLkcE51LVsuiXzxvgLGKWMG2wWVQgtiY8rqeQ",
  "key2": "qpJm3N8jqzwDhApyqkMjMtqz6pCdMmsPao1NoYFzKftgvLXfuR5NtZm3Jzbg9h1a9qhGirvLRay99DMBJmksSZN",
  "key3": "Zna1yGGykQFNfpsS7Ftf8J3CEx4YQGip1CjJZtEw36tNWVBsRQwUonSYDNdB5Waf9L3nMEKtYtRP3PP3wE6PG6G",
  "key4": "3xcy47gY8PerBxrzhtTdyGKopUD5pRUrVLGuxFjievjnpiq5QZyiR2zJ71NqQ6aTJr3WQGeCG55LxNoXccYYFPpQ",
  "key5": "5pbF1f3rPhcoQAdunUma4NodpMxrzGyWiqE5paCPdZvrNTUnxm34UpnoEUYtmBLLogjxG7bvAgCzjb2DEumaVzPu",
  "key6": "3GrnWFBgVazWH2SKxzWe3g6JdSYqu6y1S5r2fu4HrSw9ydTA5Ddq16cKhUsjm5cxdwXdFXQ8tUpqDj8FVM8LUHop",
  "key7": "5cr6TY5hMePYgC6jCo6CZoC6TzaLoj78wSxoQzwdXmfQ9oE5HK8grYjxD629z9BprWBC95yYTLb3urtdaBBrMY8q",
  "key8": "5opKdP6ZcBGmeHXwNwdQ6JrQRtZ5XxTu7JhTQKqYB24QUBcEfEzQCXS247KDGJWUez3ykh21YrzWTHCpCFyb7Dyc",
  "key9": "2Y2ZKSfFpmr1HAbriGrC1yGJjSxgA6FeV5DJB19DvdLvvMd9WXb8jL3nFSF5N9QFZstZptyR2fbK95hU1uKMqFJ4",
  "key10": "5w4CWpZRu4Fzkc5ixwcZWjFnM8Aj1wVinYu1YRsSDysKTrKCZ2cyooXoE3WtiEAJp6adA71zuDv9bmYQqwNZ7QuB",
  "key11": "46G7XDmAXN57x8LT67GPYes5db2JjmxcSRFKaasFc9NCfcUpP7PbtRND9UmFQ9JAuHdDgEmK6vr8fPhUFREwNf1W",
  "key12": "4Hz8uc9zKZaxksmbp59wjjA2Ti63s8Y5WdTZz7LGUUo5agfzQXaLvznpXCcCqcaSU7Nn1uc9ScnfRQAvRCFHdP4c",
  "key13": "3tyhTz2JReKMihWzgoZm1JDaLeYsjicA2wzqbJ2JYKT78MssCLs5ZBSHsTCYpWdwxeVD4saxAgckt7arqBRXsSxB",
  "key14": "3RFQMofYux7P9hA2SsR36E1a64gd42MeBY9mSrBf88pXCvyEJYBRYQcCFxEzvdffD69SN7oBDp5B6zNTpNeKqr2d",
  "key15": "2QnoES9VxmmFyh1AQyFvfaSqpPFj9dZq2PkyqV721RJATyuSEp4Ys2HiGd4CziD3tXVfodcMQZvM7fbD1SMHxpLp",
  "key16": "4JC2fjui4KxYEPVDU6ntLzN4EE7S9YnDQ7vU1VAjqojiCsLecLE5P4jo4noE67KqifJTiMu8A2YjSv5GE6CEE38a",
  "key17": "PHPqvxpQ4L6Pzmi5JhpaYgB9q1D6mig9qSS5uknxczxkydBpLR9coPGWW86RT958d3GsK85aw967qWcNZMfnGhB",
  "key18": "Wc63j1sHm7Tset4Pbqmu5wSmP7LaN6LwxN8xsBRzyG6PSbX6vMV7XwQxN9qPbx68f21HCPTznzVBRr1nrJsMTPz",
  "key19": "4UqpTAKDPxpZRhCSidQvRGqYRjmjZq3b9wUWsryxDoheCDBRz1xy3XSLCY3F7WASJkuniYaySgzcCrt8ru8kJ28W",
  "key20": "5Q52SYnKBfaZdHPFvGfq32ijFrotKnCaUQncUnxdM68ffuAqbNDdQBTQrEYngBp2JCJwRmGyLgUpVhUjYkrs3ZcM",
  "key21": "2z3794WLX3gV5qmSGQjxAiyL7f1pbaGV1RRKYRpBHoGJWq6nkMMo8jhrT2rEyG7NpQSVUFqFz5zNoce8u8PXvdLU",
  "key22": "4avDcN4xBHZaAgfp11Q2aJaCxeQvTBxVusmdmzzAXmWWLN75xXg74CiXdoEZsWbK9HbhgoWha6Goaqy9rsxyaxA1",
  "key23": "nwJLWJJkgYX8YynuZyQTVz2F4hBxnqTbZDo2mkJiF4HWxzsWZyWuGF9Gr2xxsJKjX7Xdr9ANwLSDjYWpDunhhiE",
  "key24": "2tyDgtRbdtVeZ6cbCTpKRCnYToAxqF3Lzj6D3zDFxrHutqnM8tEJ7eXoJuQJ4XgcXJi5aMxvDtiHR9mrPMcBXHc5",
  "key25": "4CbbW3BQuHDGTQsBH68ZRHyeqeWTKLt1hquJSkGLoJRVsdsN7hLJvLTiVPNb1EeBD9aeZxEPDcnmnJntBDWNX3s6"
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
