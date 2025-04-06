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
    "VsJxrsEaznFeYQXDcfhDkzSVpoNDdtUkjPyudovRmBdSnScuMDgdYMwTuq6b5QQ9f1BYEajwjVTNYe4CYasv8nS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PZEDDy79jCbAcX4QHCEXGt3rzeG6qfVmA17KwiNi5CJczZFJNcNE2WJeeGQjtj23pWAjpSFCGPQk389kqw76A9L",
  "key1": "59GQZeLpudfuQBH9NV4fnQ28K2LzXXYKPLnQWzTAkL7A2MkReW8ZBci5kzkcUtmTWar9sRpVYBr6v6qfoLtJjArA",
  "key2": "31pdDT65hxhDiJRgirBi5Zg4aM5HoHQvPbL3EB8nVTnVWgC9cQcPjFi4MBBMNKb4yar58m82tRv1cjhj5ZcejWDe",
  "key3": "58HL2WXfZNXRimsPiC8MK6KGitU5TcprByBU48BhpyLRMb3qyt5g2JsR4zy6ku4HusJogCMyfd8Fu9iwyTv66W8U",
  "key4": "PRyM4oSKSqkxuZtni8dq9eqRmhLJPW7sUUwVNV6h43Df5wXJKPXbjAGMs5i7yWNfnP8vtajgPRKanKovfStiLgb",
  "key5": "57n1HkgSizPvBDZwkLpzFtaf2y7KZuz4wenhKNfyR6WqJZAAADUoFqRjpJuveWsw5vzSBYYrxUtLqTSXdbR8uw9u",
  "key6": "3ZkGBqWPN52aSVM7rb22ktBYytm2znJGAi8YwohdVUrCPW5coyYkvBoXRdQG7c3MvCGjr9Hgu1Fj2XDQBuEjiwKw",
  "key7": "2p85VRHKPymv1AJnwhV7kuoh3qjqJuueASkdNd95ooYLfimj2Suna3ZfStg6S8x5S3kzF14jDhCF9xSkvDf7MNgo",
  "key8": "4zUT7g8nDmCEghTrQ71vvnTCyDFKtpKQGCDQht4bogaG7K5WFhJffxwmTM1WJv7ttE2BBFT1ySprPYHPMrycQcyP",
  "key9": "2mx6BS6CUZqZMQHsTZe6Jusi5YAtK1VwQ1VEFApKiQ9XXh18b6ovJgtMvfnBMFwvekkqo5a9eYVsLNoKoFSpF6ey",
  "key10": "4eDe4RoVAfserqhxFGnwg2SMMffbSieUg6RTaNiYvtJBbY8i1WbBCjeGC81e9LvNKNDAMitwGVwJk8zMjMyKvqg",
  "key11": "KhzS72fWUEugZ7MtrFU3xBXn4MJWqygpsvmfzgwNmh7j9fyyMAdtGhz83xAFLWc1esTWqvrdvT3ruZtzZRtgapg",
  "key12": "4K3pf1Un2Fa2cYvdxqcruRa12Be1j1QkVVBfN826bX2pg53gk4ud65XdKkxi9Yg3GZCMjxL1mT9VpTuYcDjPfJD3",
  "key13": "3piduSMY3mMc2nUnEwxHwKKeDMf6bBaVRcRDQBXsndk9N8nJQRZtMLJJ14UkfXonLA1sPxoBEED9HTektxY42qTF",
  "key14": "s1u3Rwzstj1VnZvP4JkYQQroKETrMkWtBxhXepJqmEEjUnrSvU6TfqcYFUmgmgxZR6dcMZHEwyfU2Mp2t6wfAC1",
  "key15": "2ouu5PK9stYGiE7tubt5mP95ipNMcDAFVAg1bxSUv24d6QYX6gbBwTWQRPQ25vmptdPQMWs5oxKLP3D8h6FpKgiF",
  "key16": "5fV71nSiHErMadst3ArmvLTGPQopcAi2fycsNSzHArsEThGUx1AmQT6H9XMnNJ3S22Ewh38EqYrmrvo78JF4JLk",
  "key17": "35ELTpEE5981b247cyTeVV43is1DqqyGiNH2773UT1PhAsPhGB8fqwc9iX37LbuVSm8TSewZybRn78qm8ZkHagP3",
  "key18": "5beifj4ozB5bgts79iwGrDF9VpWCW6Sodd792hYjcG6kF5xD2o9BTfphjMfNipX6dY2DWGHKVxcaA4MgNfhjgKMo",
  "key19": "2p7YK5dSou47SDVhRobHnq4nfTBHsFAwqfUCKBScmtisKZywTUtVhuMHdFMcd5To3K2mq5wGUntRFJjaAbunNzkS",
  "key20": "4pHSSCZwKzujp2aaeUHA6JLSh6myA3RjRE3AbtttKGn5uRMa7zaLY1s4PBF6AgV3eQJum7FjWxfDjDiyJWYR8TMP",
  "key21": "4F6C2bWtBnpJzEYBu4zZVXeDRWH9G24V4AavWoGpkj1GhYj9Hyig1wdZsrw1QcEeAQbix3vQeGYffyr7fW9N3qw2",
  "key22": "w3H81zR4tngBceAqo3gHUnkSm4a1yRGmDjCbTs3MApvkkwbCzZ39DWTB5WZ6ecMrCLgbU3SBeHx2k9FKyCmNqdx",
  "key23": "5UCdj7iEvX1Kv4HELYCtTsgtop13dtF76WDgUq1Xe237PkaerrQEopaYNK3kU7xh2sA249WXJnynz2wSeyBgf4Vy",
  "key24": "3k1wvuVeYHJEeBaPUH5tY9Ryhzecc1Gd9gcZXuQYzCLPkNjzNcVTqBTNjHhsoWhQ3C37qE4f6vXFfAcWc8F9pS7B",
  "key25": "3HyMVBB2Vb9afHovgbtyRTx6pGCmXoHfJ5YUodc83vCm539Dfr1h3BL4zi25ko2N34hc4fka6UdeHEX1EGLmjAKP",
  "key26": "HUBPPaSkHAhHCrpQANatWetsiiSjjoyxSwdBUhcKXoobmDDMR2heUXkzghPyYQCodwgvucRpWsnyTV14ZJmDtez",
  "key27": "4F4372SRzaNq6xUAJd6ZkpNHVyAu3ALEQJCWyy3DXhE4KiHmoPJCG43vohgx3QxFJ8gb82fHsQdWXKXfMokCNYzJ",
  "key28": "2JYG41Wyosq45H3jVQBEgPteayHSNhqDDVvj84eGVd718yGjg51GXHNGAiLpb64FqxT5UQxmbnU5A5hTeMz6uEXh"
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
