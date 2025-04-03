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
    "4uYvGUd4TgyUm2eeFdjVMHoZxKZN6w89H9mwXysrMVTXmXVro5NS4byZuTnq1SBiBANkqMxoyvNHodUR9SJFKVNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M7k2mmX5mHdw9dbNAUAvJeNRMQRN6qoybcDb5z2uc5LHC4gPs7SEr8YrzSK53wKLQnp7Js9FHHD7qz7CFYaCCee",
  "key1": "4hAxBsmDjtv2jPgxDfaasPpc8LAgiZtwuQMd5ckpzokBLH4GVo7acPciVku5184baCA6YVLDF21riFgbKSZGbAvp",
  "key2": "3btgsaaZVwzQpXCTLu8tPAFCvPs2SSYayn37HqT4bhAbDi6Bg6Yhng3i59i9rHxbXaGeihUSj1LZvGvxX3YQALgX",
  "key3": "5wfmLquQntZFc54t78emhHrPy5LxevoAVHhK3M84Vb1s2Z6vEHwZenvzvizGFkgD1foQhxwFrwU9yYWgfeMy26pU",
  "key4": "4K1Cy6vdFvVtcQrJMgEHNKmDxQKRfTHJN9XyLDYHeToXenudW4h96MgawdYJagR4XUYaJqhMPepvBn8xz59BNfzq",
  "key5": "26d2vA18sL9iDQwoHmvufWgRwtzJ3yJiAt32G4CTRCktXrmgRMamYUCKsrBk9hEFLWiWYGMkkuA1p5Lcdo97EY6n",
  "key6": "5iH351XwMdtiTh7g8WAud12yYJVbALSwFfKCfqa1upogtq3pu8PmRB98947cmRFj7UVQ7JvoBJ7NUn25RXC3TQrk",
  "key7": "x7MzjvECNkZgdqr88s6YTSoSdSKoexaPUarocXDo4QtURDUaxxiZF2AbXKXeKr6XfraxoJoEr5VFMwysv4Hnym5",
  "key8": "URVrdLPMDaxYHV8dmpJL7LmtK6fmXj97SMzjFvtq4d3G8BKa8A9jvJNzW6kQrbpZQ27J4fi8G2QXSEe44Lt3Vng",
  "key9": "3fhwvZc85KHdj5A4YrZQ1848QCNQLvNGK1MpwRpQJxvzCN8AKUZjzGaovpSoizwXU6kisnSAHUAjhmu173KvRnmE",
  "key10": "3dcUc4uKEoQATfUXEevpFhyJzxyiPYdMwNyez4Y6aqWzm2EyF5gqJt6EsGpZufXTr9MP9N9ikiLPMqyDmk9JyVxg",
  "key11": "523xQtheYTQbv7LkBeorqoF1NhJsYEqiacmScMBBj7yia7SQdy35r5h4TFsr27fRakdKwozjpieS12oKWBxBBhDr",
  "key12": "tGvhwvEBjhbNotovsznBcMQCft5KnwDWzddcFiSnpzgBypKfLNmaGCoQkwuddm2Tw9AufCbB56cxALxeemsizyb",
  "key13": "Af3c7xGGJ1jmndbbLRCKjWFkp9eDWq2GqXG3zKF1XRjr3Wzgy8DFvmxW79V48DsQKkMVt88JZz5NJxy7GGShQuX",
  "key14": "2kfVskabeP6PsYUsyFq3y8hudRt6YoQrE1FBVdCVwGpHJ7AmLzaMHxUm1h2dDyfiygthjMqsvJ2JYVxeLoR3vrjW",
  "key15": "xc2PwLjh1FJHW245AVpwGwJVrFisw6ZXjNZDxMcXAjDdFHpv8ZeEbWMo6h1varp8GgxPBhG3zE8KpiQQUuWL4Ez",
  "key16": "ZdAUB1M8AmeyUUTS5iMcJeazCVv7dcqH4dnVBpsUSTtwiUJxCaS2HdXNmSEtK6nwFpNXw9HCnU8Dq32wPHdkz35",
  "key17": "42xaxq1NHjMARFXBEKBJMuZC7uSzytFEcEF9j4DSuPvnuETvuXD26DsWH6gfKGqKpDom9uEb4M5CmGNEFg6JgwTB",
  "key18": "5k3PdQgHVnxJJ7ZScZ93wHsVaqGAo7rVfkpYkxS7FJLRMQMdkgYLesB7smXXCPRvjbqeBFDphifQDuhyCdagPjdr",
  "key19": "5JoVkgqW5EmVndHoJS2dcnXBFh15wbCHTKNMAE9xhiKczxsent6cEF8C3p2Z9cULSaxC2kCbY7TXMEzK3p4wVoMm",
  "key20": "4xsnVPXLc3pBqKmUSywxeyK3yTNRfpPX34Y2exSkyWnZF12Shtu8np9S2V35Fj9RKur7Ftd4XpABiSb3D4Gc5Whs",
  "key21": "3A13nAXqCaDH7ofkAeW37kzNFbs82BHiYcJZqBLQmmBemuQwetgbWTWPPKgRgfC438k3J3MQRm2dWhiFccXi2a1w",
  "key22": "3hpbaCM3MQgWPqGMB35xb19i8SWhTQW1vaCZGJWdCxzmczzzNc1XJUdCymESbNX5uUzfFHziSJwQPm5ywxKnMfpi",
  "key23": "pRUR2CKtbN1iva5yDz1KF4CGw1wMY2UBhgdBkVmaH1EaX25VYVehvnH3nyRiFVTYnHoHb4kYoo7pzq8t5XMeKaa",
  "key24": "2ztGYuuti8n5evXDpLWPi5s8qee1kSN44YW5LGFkyxMVmshpp1NSiNajoEjBLhVVgJBRkXe7yJc8rqyttayBwjwA",
  "key25": "NEFsmFE93SuzAuYvLmgZ3oYjmWE28twM8fMLju5fsgbSiqjZACxktfkaJ3cAmSJ9Xni4mbvyg1rb3z8iFRPHZFf",
  "key26": "3HgSbdeL1H4uH7NrT87U1LaUgd7iuUBjVs1KteugoNqtfmbDmxdJfH5qTfncRLTwyDUDYmewzbCqPFj4dvdihVJD",
  "key27": "4Cc9H2Ja6mGprYjtjG1EoAySLbuWVcxP4wuN51tdkAkdNhnCs4Hc9tBRitVdMiL178QhWtX7n8wErdRzy5z8EDc4",
  "key28": "piQpvjsyfFoNUSUCXA1VNKyk7ipCAYC4oTFxCHc8GXhGUUNAjRuDPSCfwTeKp3Fx8bui8H1HsP9jnDuGicAknau"
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
