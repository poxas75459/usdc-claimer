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
    "FBQCmngecahMyF1aURER8PrTeqdFV3mKVqEU6XGPA8JZE8RF4ohEmUwte4BSCQjFqpt7YNBA4B6Sk9G58UPpAEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kC1aJCXR5Ly42ck3GzDCCLpDRQZyJDitrNAC8Mc8Vq4cCLgz2j8LdkuoPB4vHv4RD4KFC2uGt7ZmcHinAqhXib1",
  "key1": "Aaz2ucU4b6N2eevzn4DXKTtqNfPwQzXBHfS9YmYiPQsPRsJeyEfNfcFrTHLoGmmf8LFSzWyAT1mGBEdrZdcvUME",
  "key2": "2JtefpL9EwLdddR4t5fFKtpQ2MPNzCR1DPFB9w2V1yt5xWveqJvqXVY1k4mExUeYZM3YCHcbYtSVD5ANWzQ18am2",
  "key3": "23HYyGeyBZc6ZtnVt7mnUuYg9i51pxBnCX39KZT9kTHWoy6aMNgf5jojSd1HULXou9sokWHTaY9RGwSBAXMXZ18L",
  "key4": "4aTB9Utz8adZvvWLTzQ6knjhe6aPAAMLaTgB2hcXAXLRwGL6qQBUwCy1MoEGcRD1qLW5z6zEUQirxNVgyVMcyvWt",
  "key5": "2Yk6WWiVZ2vYtARQHDVwNaT7gkLgMHDG6khjSdRsj6L85U5xxxVvf7arndrnKTKtdtPUzXmdsdJEVQFaxE2G4e3w",
  "key6": "vruytqUZU1wDpFcFCq7jAxJswM79MRQij4fNuQmmY7AUHfStMZwDgFCxBqoYMw9ZA5CA6Ad8nhQpcNMqvsWBrtN",
  "key7": "3PUdsuqVGf6rE8XQuoNokkB3X2e28NToTYkL73m3NwfEF2Fh8Z9PcxWDxp2Gsi4GrsnpoDhwgGE5doab9j4qNjhN",
  "key8": "sRkJvZTa74qhBkE33fyRCH57hqYNEiosTigF2e57E58v5q4AtRuLD6J4xFczwm5nQNXtvQN9NYWeTQvaqPfRh8N",
  "key9": "3JaXEQd3EmTK7iDsqDwnuSx1aN9NJveJDnwLoezSaDJeFCwDNqiWaQwKrNWuJa3P5rc2wdtWBSo578dp7hMg3qpa",
  "key10": "4xkvWxezjqSH8hmTdEwu77wqWgSGAQsV6Vk3qc1dvabF6M3LXPR5qdBJNeCrxtqmooJgWE6bte2paMXpWiupvGhq",
  "key11": "FJXAobz6EzGtuDt26qVhHPr41CDrcBztehjJcehyNXDWHNVYF9Gk2zMRD8pPRQ1VVv1XiqkJvuUKPK9FZ6D6QYL",
  "key12": "4QNYfRE5YDd3KPtRsoexaHkN1DPEAoABawM6ThrpKJsggb2jj3cr6jjohT1j3r1RZbCphePLwwR5TsgSMHsV6txP",
  "key13": "5fx9CJgjWqWNMtFhqzXMNXqP6ANUX3RDYw9tqomV7QRi3cJLUzRigrwvceKJaGC4HZqC3awvnkM7Yoms7gv4ceBP",
  "key14": "3N9r6wFtp479jPDcB8vqU7dkPqpYQ9wPjaMN9kGB2fuXSVsh4HmWzgFJHryby5XPgXN8nTvbavYaWbcZ512WCQEB",
  "key15": "M4wURQiZycW5ENurG1PuPxZ7rtKZMGH91F11CtE6at7yBGCpGqrnvSB5gLJatDLJPeMVszQGdga3MWPmpeYPkP3",
  "key16": "2QmEcLgPo66ikFayxMpi3FjHbfSx136FLB5HkBRY3yG6K9hCofzK4j35TFeHD5gmwF7mojsewg5SpnDooKM2CLcx",
  "key17": "rNcdGYCEmvK6ndee3DdEb8vQGiy5w9C4aSJbCZdgYYShhwz8CNQdeFKt1ysHcEiGgTCEokMfN9U9DXwkHWnujxf",
  "key18": "n9WNS5ehZ9zscNzgg4XBGfSg259gkdaQZzDoh96VAxv9tRboC5ZvAdBNyw6PykaKiY4TaLmZXqYazs1Q4eBivNq",
  "key19": "MUFrSgWq64Hr1Z5pTP5CsbiCk6X5mq87ZVBS5Ywiiy1z7Pb3KAYkALGjoGU66Dr2SRdEe5vuMtvi1zNXqToN9wp",
  "key20": "2iTFDTFhaKGezC5CFsiqSta9bxu6XC22rq97pexZtTfLJrmFiPa5wWi9da4uhzJ5cQJNygMpNCxFy8ErWiiMANse",
  "key21": "3es1RPF4Ck5VUEPHuqFjq5szgLrcq61TNJjLacgmnfPFxnr8LhL3bo7kDFXT6P56Dex9VNJudm9C8Pn9y9cmJDT7",
  "key22": "2u8ypAMfnVXiovuGymzMqzbMGkWFYzaGBzPf63VZP231hC3hXHUX7NPx7V29FMf1HmwEDfmbAVzpbXmX49EkmrFX",
  "key23": "55iUL1XqnhY2W4AcMVRuqc9nrZ3ewcm1p7TLYnvTpHPdijpPcEYhug1TerQNVc1qP3Qsohxx5J57rR3Tf8Y8Mugf",
  "key24": "UJV26uTFfZ22SaMqNesApVaDtwv5GLnnaG9wb4VDyymsssaw3SpKoZUtWkze2La5PTuiZHmu4o65tQucwQ9Ywrx"
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
