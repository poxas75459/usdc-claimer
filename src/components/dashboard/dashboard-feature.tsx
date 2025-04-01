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
    "5ZJPQs2qUMUVQeTNFLfckQtSnNzX1M5uFqmfkV6tdcrMAhoJ3i5ap1Ttxcrysr36jSH7MgNBXsxF8CAjktSCjaLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xwnD2Q83YH7sCMghrUR6z8SkENpt5BCjtKhnEHC7rxTfRez2NntMW3oh4fjUo4VeawtksEN8Guivwq1CMakV4pQ",
  "key1": "5xEYaFKmGK63rtRUUYD67D6fCWqmWGnJrJm4KLQb4jPNxpTDtxyeVaFhC78hBoS252uBbwPxKym2RUBRenyuf2Np",
  "key2": "4nHP2y4JPefCU22VS34sLR3To9bHEU1tKxWsYvfmHhZjJMNdQuJk7nCySxQd79yoxSArjYAn9QhJTmMJcHrwKxoE",
  "key3": "28jYv7A8YU5hsSs93c7GVbQbu7TnQujaMkfwwN5KdvcTU7VFqeeJu784aMtm1RG4jJSzLjkyiVzbMeEwZ264bKKN",
  "key4": "5hwKQBf5LxAQeg4AGHP6KvQWgHvGP9h82BD3Jr3P7xnzue8PTNxnuP2A7VRdNSgRp3xEMrLeoGs3L11aUL748yWF",
  "key5": "Fy4YuDUC8CNiCkfr2Nst1DW61PMddrooeveN26t5wJSbj9WV16K8kk6YqxvREQ5sdXfkm1D3x5VhigpEjU2TbNv",
  "key6": "4k31La5UUEcj8c93Nhu2xxC4KJWWhso51qp1Hh3RxvVHJrxvhPokjLErhuFQMQHQLAQExbyFPN2PgPyKAiLycF9i",
  "key7": "4Ya6Cv8SS6aw32mPHv1XokPTFGkWYGfSVuvZ13jUhBuUkvuP2WU4LbdhANc1hJdJtsz6QFMXqjMsemo2isviJgu4",
  "key8": "PkNfaVWSXhSc2uGbauFWZkJYV9pEjiTLy2dxVJXirhvueAjRcU4wYJKLfCAkemLAHqoHxdBGDNKo2LYSEhUMzoJ",
  "key9": "2YFGABGogbjUFU5bETXghqwHJ7nPtZ1Fk58E14hkkdd16o64w2Ugyua7PhtYrkocz6gpkRLBQmDSvvtyzNKKM2Gb",
  "key10": "3PxA3xhtkAvUpFCud4hX4W43obY4txFkfv6h8NVEUt6d6a8RDMKnsgoyyVfTzacs7iFpc3sE5hjXebJJFL3YC617",
  "key11": "5raXiJUDboczwcgavCTEE6ENRMUq1hvjMjkYEUY63FnTsz3UCRtxijPUCSq34UJwnmLiVyt4yfuJ28ajb3ffhDuH",
  "key12": "5qyn8HhBYVTUniSkzhrWCsrpXjqax27MX9mdkSR1XTCN6EAPWMRrQfa7P7mendZ7sb2Ta6KC8nxzmYtEgXVEFYai",
  "key13": "h2u5qQbd4XLaAu4czKin9Myzsd9bCBB7jbkpPhBAWGC22Kr7wkHxb1VxDBZXmdqdFEFWdxGwZyTQ36QDRf4wCft",
  "key14": "tc7q8b4p6gvjMLMPbJtGwAWU6bNKwFxNKzm54oyyWEds9jMDhW2ynPPrM3ExjLMvJi8ZCcz9ELEEYEMWZrAJsjR",
  "key15": "3ffTGwnxan9TwyRRAXJrP9PhTWx9jXp2aYxkcNMLSRGAuLAVJaNo6JtxLecLC2FgdjNFQusxs7c6ETfUw5i9Yyab",
  "key16": "337w1rSh9S7hodpn19q81Rpu93ZmmoHvQAzJbZmC7Yvu4vsKtFa3mSEnVvVD52JXWqaQrbrVtuS8JZBxvsGtJU9z",
  "key17": "3oWZtWGBzTJUm5VddX3ZEDYucVerHNiK5ERxjQTtA5aiqt5yk2b1HwPU4xRLNJj2YR5DTSbHQMgKRgUnYo6jkCM5",
  "key18": "4x6q41Hs7p5kBF7MhTHq9qhYE1JnhpknqtmpkiWTtKKPkpiqHjBivXCNMv2Q9fkZf5rVPt3gQGU1wMB4Hm9t8g35",
  "key19": "21wvxHwCHsb1JVwJkesi9uaNvk7umPnA96epFU3o3p8Gc1Yk63R2v3CQKzpvXiu9iMwCdpucHyE36sB33wbr1RzM",
  "key20": "2Yp7Go8EQh2pFhmKTZSkDtYF8DUWsif1eoGnDr4VCWjtbm9T5KXi5eU6oXKv7SsAqUtZebyEdxUfSwceNEFSEpxB",
  "key21": "2UZW11FyCc9jveMVLxXk9ZV9BYxDxDbf98AjodZVwKHhVisD6XymYSLs657zq8Cb7Hoh9k5R6YgvfqPgnGV8VZft",
  "key22": "7994HHJcM76kxmJtbtv5xphebuL9UKBieSSi5korriNnF6oz4e8rEMdn5UajoBJip1RhX8Mv81PJ7hory5mbTWb",
  "key23": "3h2YCTYThgt43tqfN62G9i5o8joVGSHTv8voczZTBfBdQ71nFcYHTmAXidTH5dRBAAzbLUXoyMVbo4iGYLb6q3jo",
  "key24": "XK74R4J18dwP8JTbP9HKxS1XycYfVxNDdhCXaHQ4VM1P2idcDbBq9gytCKHzKFCq3vq2TXq1CJtJ9wTUJKJV4jt",
  "key25": "2L72GHJgLQWVJRL9kVgA9xJ971dotxiobpgxpAn8NH7Svaet8prdCjB841cwr8c8FN7jvRuU18XqfrCU4e7iwtgu",
  "key26": "32mCK4Bw8w8f4qzKnbHpgQ3gRGkGQbEw4q9Wqrv2oJhdPSYfQ7Si4Ga4sAM63BXam2KsdhhtSoQd1YmL9eR1koje",
  "key27": "3FWP9CnH8mqKSBf6PBViQwA3ZheQjKpHTKDoEjWEVNrtqLZdnq5WLHKFP3j5zP1YjgZd18CAXSLHb5SVtsQJ6qcd",
  "key28": "42FwPR4jWxjZTuZuLHBuesxqx9m4N9vpVfGy5mv5WDjUmTKneTU9xVWiUzu87YwMrpAgAa6VbDhGRG1zzpvQ5yuT",
  "key29": "48wDL7W1zcEwVgwYwiPNjGfaLyXt9NWAgsmuEjGDcJ2LUk22rKQr9W3ADxYtxKTi4QV8ayB5mLmrLC7mD9Ejuw9y"
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
