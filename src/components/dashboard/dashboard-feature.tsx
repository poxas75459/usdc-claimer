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
    "5Cp4yLLa2Xmz133WheySF4W1fWED13kqxmFMJqQMYq31dHdoxPSa4M893HzqvF9Vhjpn1XpNqf5B283zPRLeZYfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SgyAck7ewAgPwGcLcywaHYuR7fcDSiFHHc2sPyvz4kx3w3Gymwria4jsgkur82UF57XoQZfsVVmk8B1Za9SbQvM",
  "key1": "5KwVNhkLKG36CupopPxPUgWHu4nDjCW6SnLXqzMaxyR6E4KSbi4zZG73P17UeJMiWhFtuSWU5M4WYZvnL5WXrJio",
  "key2": "XXL4DZuB8dkdBFyRNcSxxM7iwZD6e2sBtjPckcRCkpgMTNQn24E3VK8BFh589Wk9EdqW9KmqRFndB2HhqS4Ag7j",
  "key3": "3QvdenqZQ8vJe24Ss2uATpzS1NtVaxEDuTSvX4LkaRWikUQn5rrBVuFVwtVhxi5NxUvnUA4wcwLqZkb64qnUTD1x",
  "key4": "26AHXD7hEn237UUUrVeLpvy95HmfXpJzBvJJrDTGhvx62Yux6BTnrm2AFp3AKSgzFMoZvL5p4aYp9EgaqsoErLnJ",
  "key5": "m8EgaCYTxKGkkRNRfQe3tP5bkhWrNengeLHv3RqyPCRCxGqEZkcQkTS5Nu4NgUzaqHeXryt16QxDEygz77Xzmap",
  "key6": "3uj1xUt7GPRpSJm3AA4NcF3988oxykCmyYYyUPyPYUbXP4qvUJEHAA1mj6msaYocEYFnw8nm1h7Eehn8YB9mv9uS",
  "key7": "4fudqu6TiJGp4W983Nc7ooSYw3bEURnBsG23NW3dyzQ6jedz458NnEgVmVLLXSEvBMNo68qF6yznYbhKRYKws5Kk",
  "key8": "5SGKz1LW1zyXqLLBBUWpauQrbEzKheYtNA25wEuLTwTcdyDsvNj3oHizZ26srBUP3XxLzVJCLtEh7jockg4xpPjx",
  "key9": "4Tb5s89qGon2gJstEmpE8MC727r98pBskMbh4uq4cySW8P9WfKPWMnzafWtzyc3twn4Krhbth57YepSdss8oGc9a",
  "key10": "3m7GBJMA7UeM2D4XG88BrWw7YnhUvT9tioTym11Kp6vqrgjvKkqhEW2NUGKqntGg5TbJPPVmVfA6gMAC6iHyRfji",
  "key11": "4yA1pZLKwxDs1hFt4nezdBNF9y473ptndoHAuJz7bkniJE2fWWn8fzTLUvfo3LuGt7dsAjQXLnAGZJiPRGHFsRqB",
  "key12": "5mqGKgdbv8MFStJ6DoF2qebQh7XF8RrZdwRKq4nBKopovwqFcSqwWnkabjocAmVQ1GWzTxJCDXj5auawtYh3rURJ",
  "key13": "2zJr9bEETg8qEZnBCu3hqJgNoy9ANFEJzV3Hkt3rSymskJgFa7ndFzALmiZyjkWXdPjxJgQQgzsryJEpmu9iBqB4",
  "key14": "3vzyX9W1vgEfyYT3bfeyVgQf4EmyNMuWqKr9b9mpMkoN9CF8PB5bFmWNKKBSLhGLbm1JwQ7toVfrzUgSB7yGPcoF",
  "key15": "C4YWRQecebgTJmUxk6XjfWxECxnsBgFjnCZc5b4MtPaPrhPpoXKbaTsHDE1FTP4Nv65naSPipxbnfWCDi5mqB5w",
  "key16": "67BKg139y9cBjSoWqex29awDPjJLAAHwZ9hvMvNE2RY3pF34HpWYC3Mp9JDzaJzbe9VHCrdyDMLSFXLbBLuhawPx",
  "key17": "4G3H5QbGsEPXFQeLQFwHVGtfs7vkV7Rrfud23WuUAnw4yAAgk1gVfuwGJvS5gmdq5Lc6QPqYUNEo2HVukovbRo2D",
  "key18": "C48bA74XY5YHD3wYGDj22uqmQxydqPudQmtfiemDpmn6URJd543C3r4yoSCSM5PbiFTVbCM4MKX5D5vVMhrc4bq",
  "key19": "S7H1Jji9YNYPbexKsxQfTcHQ2vPKt3WXj4W59zcS3u7JSnW8782b8dqerjQP8ZNrE1CZSD2pZGAKAper9CKAeWw",
  "key20": "4WZk3ir44mENmRQ5R1QPpMRa3cXCAiuC6D4KU1f1w4erxepKWjK4wWMrggf7zRyM9DVgdX8nPnKhX7jCyxwBxYUz",
  "key21": "5f6coXNzPz3aHzhWYGKKhGFahL8cxdrjyTUsWdTYJsemih8BjSjEUdRzW1o8GLKmUw58y5bax6s6tXnJKSJnL6bm",
  "key22": "2cLrqPWEh59tXdY3FccypnmFBUSgg3ar7x34rb9vTc9Hi66FktbQ6Kzyi52oX1FB4s6qgbxmyws6gnjvqT7mxfHW",
  "key23": "3aqGotKU7Hr1V7WYApVSeXJmGV99DvK8o2zbVGnc2uJihV3si5FPSRkmSbP4jxBzcffu2yHKQ14BtAenxA9Vzyh3",
  "key24": "LHUE6GPqLXUS6cb9h2eW8n641C6ypzpm3TvqU2nv9keJdS1bKmofeaus6sNhQiMdDkQJWaL1dTnCra3SZ9fGYbw",
  "key25": "4RefZJ9Ckh3hJEEcVmXTv7dtEkEm7WffxHb8HrJ4F32Va9K2HCYRxxdzE7PmmRGzpmjPGtkLVFP2Ss6VqSVhqmWa",
  "key26": "4eCSpP71LbyuwfKLGUjgrP46j5CfR3z1oMrLxm4ZfnMfzBt37dgiRkNiVJJHuMq5bnKq5YTB2oromFCxtvQESbP1",
  "key27": "48SzvczHBiQc72pXZvH9JuJd3zsKYqjamTEcR18s1VcaUM4PSwB4eWDH7pgz5maB1QjHQRZV8wSEAzVuWDVCYems"
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
