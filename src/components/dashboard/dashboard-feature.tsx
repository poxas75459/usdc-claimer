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
    "2n91qxDPZYVZxX9PS3SyjZhQLYHwZsG6JUWkBhS4vSCLiRX8UqmoHgBvSg53Gg58Y3rfwCPissWk64vZr9U53RZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LxJ3iB5LLDgyJJtEBm4yNSbeizbJxWvBvG2nvwPRw7ZPjHfyGi44FWTAaLH1CA18xb4NWnEmXQEQD4U858wVQxS",
  "key1": "2811ZAMpvnucgUHxo32h6sqcmXGCToHPn3H8oo4P8g8pikrL4oDP8yHEFy33Zp9zbWf5byXbsv91mEjKnFmhC8ZD",
  "key2": "3BvPEtujQSPavnVNqm1NWadXJtJSj9VgEyUX2cSgtF7Pfdzt52CzxMDZvzyTxiiKivaBdRXKEfrAY5MfKwYju12G",
  "key3": "5tfGahyZnE2cS7YsMgjmiKPBvs4XVnTPPk7im4mstMu3s1zBtj8tHZ5ozYPNCorT3BHRs9zLPfeNwKTn5ufc7ihZ",
  "key4": "2dK9Hi1SsWkfRFn7xPcen5fygDjij9UnKRHHfGaXdW7Usvirv5CCcqRDQFaevkFrU9661rivyCUUC7qfkQana3cq",
  "key5": "w8QxFjyH6UXFmZwTtXEwiiiaWQrfXFUgBsG8XauXCABTqhZQHW9cxfi5oyxyE9kn3rrPQELdonpCrs2Pb29HyVu",
  "key6": "2CxPM8L351ym3JGFzxFaP37VKagAcUNEvyZdLPCGyfwkT8iLs5JcnyNDscTfy8X8wFQur54n1gzA1fxkyDHVJQMd",
  "key7": "4zzKhCxAGUnB1SfvL2MPoUTo4PYUoEnbiEFYP2kzYrWk5snfKQURbFB5C4qsqKGCTxbtczGWjHYQUxydqU8qKAuM",
  "key8": "2kc82AF7HHZ9jFMLD6smWv8gXhu4hRiLFRvPX6NXpTxpc64S4ULuGM1fPDq8YyHSthiaSuM4XT1VbTA82FXBQVw2",
  "key9": "5kS6GLEcU16pF7SYVRk5hqna4kWrH2yMqsc5xDMTEaB2hayS4pcCHr3EhsMWFZczCJCqbkKwErnuUeH5pin5gLrJ",
  "key10": "2koNEMrTLZjmUe96oFNU4ASKXRFKKHRewrFaJNBPcmsjryh5yZmKbsZrivuPLRysc7ndJs5qKRST6TDcujVz8Wq4",
  "key11": "3cjyCciSgBm4U55aEnzBaeAgzkrWpJsK1P99E8wqtdsBNmCum2wcvkB1YqHF4dW57be7PjXe392hYW3wc1PcJVJh",
  "key12": "4BJ5DHrkhMy1ottA9Q52HaULM4EVYahjV9QPNabJN4P12wpvyVWokfj5K6k3vY4p2KbqScVBWguVoDtwzbqtrovx",
  "key13": "4dWCKDEke42hBQ6oRsUnU28t9S7Q2pNb7M7LBtUAvibHRk5XTrX9sNoJZZ2m4xQ27CFuLYnHgcGTrcbwTkMBVPoc",
  "key14": "4gYyapixRr1M2bcTYjrqCCgBEZB94gXfiJCruiYDbBpvaVS39aeMpnh4j5pSjYyYjFFrU9YGPocAyXvFCMjYh83N",
  "key15": "5o6ghzH4f4dTsFdSdLntLgKgfnq3bS6FLcycbo42oAMPtyq7PEBGnYNT6BTprzHFsoH1EqHKNeHixKab2ifnnba1",
  "key16": "4SkBTPq27P4hfdpFkrMyT8VCkYxPJfEWkF9FpX13FgqKCL5qaGJBkWT1bXwRgsATUQXL1UoxdxfN6T6uW7LNjsxp",
  "key17": "ut3pvMd3H29uQg59pxn3wM5UQ5dnzn9ekFGHL2LrRQGCwNxbcFwosYnNUPSRqHF6XQgFSWiE4c5uHnV7otRq57X",
  "key18": "3LAkQ3NbsecPMzKikALY2adUiYfbhaVGrEyzHDTzAq9ynLfFMJFNyveFfVjiC3R4W1bH788NYhhEPMBsD1rywVhf",
  "key19": "23R77kcHobLoaM68nFArS5tSGd8ECewh2Vstinz282Rbi5zr7tLD9bpoFncfnbD45Ft11qxfXgdfArqwG3S4KAD7",
  "key20": "rT75fJpaihJhRdv6F9SmRzoqXiMHvr3nZ9cWit6q3j9wjb1V73Ebt6ML8hRUNDYwk8xARNdaNicGmunRrM2ngMr",
  "key21": "41RBS7en8B1iPezSpoEQLM4fTyqwS3i5tQXfD8o5rYxFLQPZyewXaJTydEggmEumCCvmFaSXzokwMWtjaHX8fi4P",
  "key22": "5PoGoiTyH2PbvQGxc57A7P82BdTwW5x29nnoYpcd5VS8dnzrQVuLdSovaDyYPAvfoLnxpQxDvobK24mcdGsm8Zyz",
  "key23": "2UJgKkM1BHZydwD1ZgK5KRwaAtrqDUfF28TwqoEv6RgHYzQVdJQPG7JypC1xXpgzzTQnjSaHFxozj7MqDukMWUpb",
  "key24": "2k68WURUEJcHah2GZKQzNuQGR867uJn4urrMJuYPqmxCajzQyuzG9xdBJEedZ8ebeqXfU8AuRiLJzeg3g6PgBqKg",
  "key25": "3qdpmHS8ZtusXYkB1jtWMQp8MVs62rCnJpHamSLCVGvjY51EEsP9ANCBA8JoLRWkBYUtMT5UJ68We8zjLCSDJCZ4",
  "key26": "3BsdDGeyG4L5mRsjeiRT5nPj6L8bs9wBjTvBgZN1vCYKXavGLrLBd8KvJKvPecd3d4A6AUox1rSoF3c1LSseyLLn"
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
