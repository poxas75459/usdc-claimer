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
    "4JTP8kwMebKcWrAmwL6JdvCtmTZGetUNVPjkLtQLTayDRp9gRhqhR6HL3SLXZHgCGQ5FMPGVmUsCXUCiHBKEX4xH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gbrtAengB6FoX5kXfzTnW3yGJ77Y9hfmQQgudCCA98TLpQP4kQNJUP35QqnAAZfCkjyWPAWbXtHhE2sirCDKqq1",
  "key1": "rHuU5dd8fphr8PhKmN6Cy6AKgbGUyVh3W6ZuFScJMkWxdbwuGRDQkUsZLHXYgBxtfQfmXs3kzkgxdCdQJTH8XV5",
  "key2": "vJ68Ej4ymcTJpN1NkksrKznTxA4nUV5odaAP3C3AoGCYtUfx5d3H2pLUPRcpYs15MFxP7g3kXQPqAdH77iskfQz",
  "key3": "5pANmss9iDUKStQgjtQELjr4k7rHwXHmxNShYkBKKEUNybdotGERguWU7QWwhbiMP4mrEtbMezsoPsbNNvf8awfH",
  "key4": "3PTG8xHAF4uif538oFhv1TJJmNaQAuUnEx5KhPC6iMUhaX6BDwoSs5yS1cBVefnTAUpaRCRMuYz6wRkxgKBzgiDW",
  "key5": "JxgPm2p4ipVY6LTAhVERatNYVCo4mATYHSVaVi2KzXRD7PNJtGrPfJ1kzVyxseXbrdMmpoN97FuwbmibC7YjR9t",
  "key6": "4RPXQPcptkRHCpDK45jwgwTiXAc4MbBwrKYZFpwBkrs7sUW3gqwJU1wRCMq1d61CWiJXFpjpZrLS8ZAVTqKQkDiE",
  "key7": "4zgydUHRRQNVc1yQgwC9gGU5SLAfFtLtCcR7RCgS698jzmb2kWnWvQqWSXRmjrWErZFea5BPqZNhfqjL3NhnjpPW",
  "key8": "2QzQvZC9bZKUPtcSVHHNjqijRRbcGMkAdFxX4XZ3yHVjMDr32C34UGsq9bRvvjcuAoBip7DLGBJZUWQ6AErb7hiy",
  "key9": "2xvGKY58YCD3WJuViqmYuxVQovkTvPcdd8sz6dkDwcheHbsduXX1ns4b2iwCoVeWBuu294ndoeAtKHwvbX9iYUS5",
  "key10": "gjXJvB9hVzrqaKXMnTkfWduQLRgP5NzdKsL24ZzpoLmjwnbkxDXCuk1SYM1FJvZsr6w2sV3g3E1g6azSnkWgfCA",
  "key11": "3FUVkF3e6uMtHRsEjiEcn7hUSyn9GEAnde3tbcxMpZZqdhLhyozMXVXCsNPxZUUy8SivUCgvsW7oVecWwSyxPuQx",
  "key12": "32dMmaVDSXQkvHvwp2ZeW7ygrtumvxGZk19SFKfbo7vs2qsL4rirNLFfUpSK1T3qYpyMpwvun9m15hb4Lhuosatb",
  "key13": "4gtHhMG1Vv7PgZc7RB7MSa63Z6To8jwJxtf2u2KHVkAdMJCmFTDibFRShcRba3vo2T1zegXXMBQY7WCZkh15cJxn",
  "key14": "FtyBe7ThvjLqz319BnCkik9QvBKFQ7ibt3vLzywBYcHR5jqbCY8nsWZ14tM8wqRgmMjzi3StbCqMR5xJJ4ACjCy",
  "key15": "XDwDRjyeYNp8KKM9KvWvPAJ3jCjrG8WyNG6XHerqMda8sgM3TiMFLHPKUTcTznxZuG2yyFTZjSSEzp9WMqYi1PQ",
  "key16": "417qFtLjFd7UewJQxwEMM4PFp6FcfDHDgccPR9P1vPhtZYTwExDwVwk5tANccUBJWFa2CLAT54GsEYnjmt4vsvZW",
  "key17": "33fctYZRg51DjGnuv3ErDzfGq287m7DykTXhj6yvV294f8L9wGhjMBM36dVJaG3KrwyFuZz53XzQVKwgFjtKCa2j",
  "key18": "3kACxExX5pJwBMSjchq7YnhywMx4MzkP5gfptNjBPvH33SeH2T1AY9t64NVMrHUFVK3AmuF85vzqJJVkH3jM5GrW",
  "key19": "3Ej9VRd1puU6XvDQTHNcq56m311thKKo7E18Lt9ZUxeTKDmX3jxHXHJ8kuimTyghTqq9RkJFrVDPbDUVGKXNtTVg",
  "key20": "4k6epLnGSYZtMQQ1JDzxBAHkukQkwuCZHCsX7HKeGukkVDnE6RD2RefXiofvtyaFDNosPmR7XvEbmGp2CDMbnV7h",
  "key21": "4YaH2GDah3nYACqfZqv732bp4UA2wf1jHH3F7hCkFaxqrkNcwnVqa9t6QLFBTKMuSpwXYyRixDMp1jzJ1tkJHSyQ",
  "key22": "4UNAKLyVFDByuxjzVCp3HCTTV69Se5Wb4HAGw6e3MTwEhYADAEF8QKqLqyyGvHB4YAEc4KKT1hpRpaaM6bDKAzcP",
  "key23": "SxFK6n83zET5gxUyEEdBM4txhvDnAdwq2Qa53N9JZszPguMqnbpz7DcKXj1K4yuMGD13xUNpRGqLvzGUhvRmC2S",
  "key24": "3HGjzEba78J769NVoWDQQeE7G7hkFRpvU12Ksd5d11CiJhM4qz88HMcnF7bi53wNHT4neVpxURaPGgfQmT2dUoD6",
  "key25": "4SUy1LQCrR8LawFB5degzvD7kNupc5tUmYFDfi39mXatfWTqweJUX5Em5qvgsUTxnYXP7iWVkGCFaA7Axrfg8ugn",
  "key26": "3jbb37PBFd72w34L2sHM4R1vhf34hppWW4Nbar96bAqbXfUsGHy7fHyCxnZMY8tw7YhUdYUszMysWJLNgPDVigmp"
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
