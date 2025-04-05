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
    "2SEbx2cFeTCxb3idcCSbrXF2hXKtuD1kaHExNh3SkNPpyYaRaFitJ4m4fY1YCSUTBqSzQ7GDW2gTms3DGwfeDk7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vL7uGUZ7Lc6u8vsCeMgKMZFhbLLwJC1RWYDn7F4VXFaugu4BpSvKRYyH1zbkZrgAsoMUUxkohuM5xA1RwVE857N",
  "key1": "5rmzo4sVZnZnpVxW3CgGGFGXX7qYNku9SkEkMyMuNMREn1XzRuvK7apvL9Lca5MTnbZxBxHzt6iP2mjow9dMrs6x",
  "key2": "3pQS9ASRWVDLHzzhydJWBENCfjEWkm8EVJxi8sVVttEf2Txsbbvynnm3PFUKVx8HGFvJ8HkhjPZ1FhoV9rHCbmPk",
  "key3": "5WkS3MFQ5awhpomMJX7jnFqE33ut4L3DcXBQShWGiCuwMXbdTSSE7jHC1UmfdtbvTvSzwrQqnC7o6nMvvp5MboR2",
  "key4": "4CNrZ4h7GNL1bLKFYk2qm2LKL91Npyw5FooXDSXDZekUD4vo2RNignPNqKZZ9bLZguxoFsEogjBguAJVvV8aEE3",
  "key5": "5YvyofE1kvFqbqmtoy3jz2aMB8S1BQmRQq4ja73XasXZUjJ5eeeNGE6rfaGwqFjiXrkT3Bna6parcXMNSNGbUcNA",
  "key6": "5vXmME1fDpQC5D3kYkb1QGgv1WDiCPYK7QR7mEh5Kt6dW776PWPnHbodx2MyDQqvg7zaPZne9uoeXdW5TbMMi5ti",
  "key7": "4mNKkjxZUAirY3guodt37uMg1uRhiHrnndNWcTTydXDz9shiBDZikRvhWfjNbqZZ89K6s2UguSGg9AUpD1DddBhn",
  "key8": "uF3Li5ENw3tjW57nvHRDCTK2NmbS4WX7LD9xN6NHbt7j699y6xhPPSfB9JT3bLdqPpfFA9DzAcMUkmti7QCPRFj",
  "key9": "4BVG7X7yArxoP1tHVuoW2CRiG7ed6mLxRmLxVTtrbYVMr6jh4LWwpvh3Npmn6XRA4RV1BTJvkSuryBRiyAC95Mhu",
  "key10": "2JpBGpNQyycnJ9CpHpakGxSYyQBCDb9mjLBcqXw45V6NU47DH6bjpgtWAeab5Fbpmh9cwhTMnSNiYKTS471zHtXL",
  "key11": "4EXtBh5vUgKiVb5hnUmRZpPpki8y2LyG7JRvdeHN8B1mdpNmaLW2jBQcmAtrcy2xLgoF1P5MdKzZABnr6atGnkTz",
  "key12": "4NCWRmX1f7vqSu6ESPgJzy1z4VAn5KuUZnaFHY2CZzQRkeG2th34QteR7Z9T3S9PEdYuJdMR43G8phSm1nADioh1",
  "key13": "2yhHzFsdeP8ZSkF5dGxePGatMH9rzd4svLARAfut2UGSuCE3zYnJR88LhMujh5XZKBmiARfpitTFcHsPxP9J538Z",
  "key14": "29Hmm9KgSchv9zqpDxu7T3s3LeYx7Zk9oYpg1hx7wgeQ4Pqzt93rpLdWMzEyrcbXwAU8tTYrRZAwgqm58ZnC3mMp",
  "key15": "63JLtcm4jiE1KCF3wkh6dq4ts92xqu6zphtr1HUbESxw1YgdcxFeFTLV1vT1TNX68SJ2Wf19bSMAuPdFbLYQ5R3U",
  "key16": "4oKDYuZJME46iuyUwVirKz57FBRp2y73jitrGcjRZDBtd6xPg3jLi35Fsb63mB4EVrmCkKbRYrwQWoHNE41xthJr",
  "key17": "3BwyjjfFBV5u1cLcmUfEJBQGj7DRTmeKcMebGdcNAJBJsVcYz4n2to1nj35J9bgG4rnC5tbp5Nj5to1JmwjvXDue",
  "key18": "5rwkjwLipvwWuLWHcrutVJXZfUpaauSGDSCBxJ6G97FgcsUV2cDJBntS9stk43vm2yM2XYnne2egeS6gfmdkxCwo",
  "key19": "5nd3mbesvPFQrKfGs1mS3ALChuLg4F89bs1L5z1MT8eajKzG1rHFriRiZaTGXjs5BRDDS78PGPHEgiiS3QFq5isz",
  "key20": "4YXCRnkmwwtfbyhxexpZeJ72VpsXZxoDvdFLDUG78gZCDdwyFFmUxbcRsssACbmyJHmdLQJgJeUha2XYJTXH49Re",
  "key21": "3T4BWuq2gPQzbrXSceYGVgNkJrH2dJY57UNsjyB4mQJzMvWRUEFnfDjPRTp6HBimwUYHfjigBBmGJpeCXGz1dFMZ",
  "key22": "5aDRQ4VWP5t5WGXqC234LDKWAyUc4dnqRpXgtrEJHXpVWLJW5LvK9XPfuhuC8nMixJwd32i2QzRjFmwd3VACHx5g",
  "key23": "4cX8Ndw6VUq27TB3YaV3oyDfoYvWbgTBnLBrCZ9TpDrE1JN5nefy2drcxGAuZqmj5VBYiy4iJaENYjTGaH6EetuW",
  "key24": "jmkL7fCgPmVAkvgs3n9JmZQF53fSz1yocYQq8iKPXp3A61puMUwn2aUaPu76kVnG3B9BE6Eh7CMtyR3U9jPJ8h6"
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
