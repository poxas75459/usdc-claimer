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
    "9pvpPsGhwBrEeu54eerqjYy8ByUTBF4rMA33yseBWdUk67KQp8C4mRXMLXXBowfucThntFSKRPZaFKiLtVRDrW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xTTqZhHrrLAv3xAGrBZPEf6Hmp4CB2zApGgt7nF2xUF5fArzgHgSUd3JQEGpaj1SXhWb37Nfpv11NFcFZ3HNjs6",
  "key1": "99bEoifvWiShDe6qzbxSrtrTpZvkCdtTeb8LqxKuDbofSae6Rg6XghAXR4bxC31nWLqXiMRkW5kytGW6aMDcNaV",
  "key2": "GKPrRygmp8YAxhLavB5v8MH1KcyBap9LEgBetePSFnquN46F3TDugAbDDYBzjFiANaqKPkKVZWL3SbbDsRyzTNF",
  "key3": "81L2NV9gi2cPReeDCtq1LarERBxAZr9n1LZGFXK2vrFRH4QVQinxpdyM5WvMGaqyWZszsPdobUoSxK1qcEvynhn",
  "key4": "2PiK43Mp2bC4DnypsYxDyD6aLS9nkQEtdvfbrcgEhvpaiHQbP1BaPFaYV4hyDCxye6akDYvKmwTo2irdmMc43Uj3",
  "key5": "3Tted2swuDPJtC7ydAGQjgDguVEve3VTgCDfy8M8CCHCFW4Rr9FXQyZFv1L8t3T6n3nMHJjxfgH2SeeJcwAV7GCw",
  "key6": "prcpx1ZKSmdM9gwCrY6ZxuUWu9JRAh1Z21grit2kKFBMknVcHqRU64zDDQEYjwZKYZeuxuqyCVAc1oKxaJt2VTG",
  "key7": "29Q93o8qHPwFQbuctBYx7hY1UmpkfWHJXM5LfYJL7GN9BL4ALJwXwXH6LjjG5Xuh6FsBMRGYYn7Moy9FmfTLexKj",
  "key8": "2ErfNYf9icJLAkhzT38i9GxiciJKHfbxPfqzRgmdYxNAJ79wZyxGTWzbDyGZSEmWxiqhbkchXYELEwb7LXXZnXh5",
  "key9": "2CbpyHDsbS6bKC23BPibDwGQSENZhpFGtmWuS7Mc8iX4pjyXuUEwH5fK1uZqG3nWMZ82YZsUJY8j2fSsdW8JTcaY",
  "key10": "2wUm2f2Qgx8zEi9bWbXxHP2zWQVQ6tKdB7azhJVKFvHr9LMcHKwdS4wbVK5tZ2XTawKUB5kZMRq8RJFpmnTh8k8A",
  "key11": "2DJsqbx8EVCKUUAtERwj1aEehXbqyNGCf7n6xeEkVHDVWeCC99kDa7GWTTkBmxToCHGsmHxYwcLkLD6Y9agJk5tu",
  "key12": "2t3GuF9GcKGm4a7seHdpp2PwLkfsocwGMnHMAX5ztTtMeQwEKsYTZUkszFSP1pWKunyZKvb6kM2fH6zT6JxkZmme",
  "key13": "37Pq9T4CARCWvH264v9mvXjZRg1nJyYaLLJnPSFnxZsugZcU8nCM7CMrNceQSiyAco6otq8bXb7H4gehh8zppNy5",
  "key14": "Y4BRWSfS1eWXYr9YMiiEjQYCzTmgePRpXGQLhed8ZnVPGxKjCWk8CYSRnWXSg5vzrHmd7KoAcgajkLnR7ZUaRZ3",
  "key15": "9v3b1CF6jeWRa3fgFPPAYz6f6P5jCWkKMhT8symJuvy9Bqbocq9NNTaj2Gk8Eh1MyzvNL1UYip1hWVrohXewniG",
  "key16": "5nbHBaG6rxws2swE7Rx41AAhoTi4M8yvjqmDC3zzV9VqjcdTkbU4jhPipk3TjHzNXKwnhyuTg1onP5wHBu3PE3DJ",
  "key17": "2Ga4QFT6JKEySDVmgitTnQWu1P6nA3WNzvDfkNQLsGHmWtRgCD9JgzSsV1CAVD8WBrdYmfaJT3q645bjBUwD3opG",
  "key18": "DuaxmNJWd2e744titXyt7Su3qoXTq3Eosepbu9HzHKhTv5wVd9GZ8jdfR2ry3yVD5cq72vWsyUJwg575E3hnKBp",
  "key19": "4oWTBYBS7Ths9QjNG1VRBQzqHHi2z2NEaVKvEYGwJ5kZJuC3G8RxKt9FWjobbZMcPruVUMNHZTAHawhESvc793YN",
  "key20": "5JTGa5SMt2qhbMgQu7tNEcxwPPuWS3z1kSweSAahzrB4rjJmYRG2NUMJnH5ezMviukFHk7PmbAeP24sXNobhT6a5",
  "key21": "5wqJB41XcEoHCSGEBnx2c1MrWFUuSgG7GF4z7FqMGhLsuEFzdyEDmnQRFoajHrRL9BdGuYUZncJ9KvBggEu3jq64",
  "key22": "BHJECJiWuX2cU1uWtjYsvDkLaZtaaz2uqypJqXBo2vamGq5tXC82MNZkj6KYaQNfyw1RaBPCoaSfSpwbYP2M51Q",
  "key23": "4VRortmwxfc6hUAFtmpeNMW7t4fxnmLjN4RAQBkjXGo2CSEvCH4CV3394vuTumHa42yfXfT55hkBdUZ3U152bEHz",
  "key24": "4i3iYyjrRK1QcjwdRA2Rm3iYtAXMgxgqzithJez8HxF7ddGvqTy2pPsNe9MZXoWXTcUABSTHEoTFQnJCWnT6p6hA",
  "key25": "3sYYAJrKw1gNh57LPE6qqwUAneWFY213dbYBbMuDXBmFQTvpzAqFkLfRtQBkQk4WJpzJ7pQAdPJk4q5tfKNEuEkS",
  "key26": "3MDgyBuZQUyF6iSb2Pmer1ev24n7HdEsDPfmQsMQgfQLDNPMmsUGvr1v1PGG3pLZyrVtSmpWA32fmEuFos5rFbg9",
  "key27": "57xe2MntgjyNZgReicqcj6pt9x8wWuEqoeKr23hgpHDoWubmkD9ptJeg5Cy1C8EyRovJSoSbTpLdiJ31xNkokj6G",
  "key28": "3tnXQrQM8Z6AN1BEJ9Dsd6xn9uzjEBuHn5zVk63WJ2jm7JSFmxcarwdFsmSLaThMYoNcHsDWTKNYKd3Y1wcrgxoU"
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
