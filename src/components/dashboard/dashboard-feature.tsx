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
    "4T9iNEboMXt4dNmFqaPxLexcQTUWbzJhT79T1yg6FmMRpogs9VuJTMF31Pn2XdGso3YooSiZdPuNAf3CG7urnRQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yx5gtXFpJ3Zm9WBbLL56rNxghrk1XD1vsSNC9ccXW3dv1GGBUouq72QboGv6uGzcHfVZY5kxRoAc7nJXrB3G6uT",
  "key1": "2V67bgYy2sej9D6yKqtH6AvSFjiKCP2Qjj6t8oqzKSYGVvBTaK3UjQcwzSPz5V3c4DDcmGfakcBQk5mzhKHee9MZ",
  "key2": "2YEW4LxKP8jcF3iUuAcBHHASwjPKYDRzxNN3ixpqau9g8Xxj5R6Ge3E7jGNuaDHPwLcwknapy3H9RCS4ay6nQmMC",
  "key3": "592qXjrrYoXLk5EBaRxi5W9v6JCnb3uhorCWaSih2v6BuTTp9YHwScoAjgqvAcMHLTer8MP1HCErsw1yLcAoggFm",
  "key4": "5UihvXiMFc389mtWKy6oJRyTGCWsGPtrh7fukzuyJ5H27jHaJogw98xi1Q9rJvuH4ZDU52JKapRJWXD2jrpV7nac",
  "key5": "4b5FWR3ooP4n67qeEktZifGTXQVQakieLFFVHrD4WbmzUeRsJGnjG71TquPbySWcnRhB4kvTAZuPgKZKjYcJVMuJ",
  "key6": "5i5pfrH8CJXhgKe52niv1M9neQqtLXaXbRD5WwXkXPxPWH9p3Aq3j2X78JcbrSBYiFwqxPoqQt6R5AGXTN8nPsZB",
  "key7": "GYPLhD3DMfoaYCvgBXhK4zAQ1FVuYy9kHTpv9GuFLoVoPTpiK5HgohuGq9JWDzNPLFptxVZ4RK2wg9RQxSPAyTw",
  "key8": "2iyhqmzA4HmTJ4mPoXxfSCS4cgWwqugrd62hUESeYKUaGFFfLRkWhZmz9Xyks8xLqYGbiruWLWyuwAzf4g4mM23v",
  "key9": "3u8noCmRhSWodFL7NunWZgXjafHzQe9HiwyDh1Q5crHG5TNxjHwCupwuamxvpUy4gm6fVJqgdwAEqafvzyuLdZrx",
  "key10": "3AWmEKqsuqyqZvbLdSP1MQQv1J9QXViUKaGFwSGhJARqofBvFgwr5hCT9vDxT4tPkbJ8QuQ54SPabVyt81hedkGr",
  "key11": "4KXii1HSc589w146e5oyeVhybKzKb9vsmvXfAU8RsYomCBg2w1cgdQoXN1vo1KCrpvDcxYB95vidTK7oA3wPme6Y",
  "key12": "2VpEe6hbssCDJX6JpKSKjnjjr1sCBhkKMP9svcafCLeBizdf5RWT3gcxrdZaNZBHdkZiAbXcumm2ob74MkSeZcga",
  "key13": "5tVivsXsga92gov2nmo3qeBYv29hwqbmDNZ2tQRUYzABidh2M4p3Spwrq2LrEcU9DEikQddYiEyZxcSagHC66JsU",
  "key14": "2dJCPsX6gQjo2t8GwCZSQYY9JHCzeido1jm9DfW6mHXobxefFb5JrWBWX7KEyfcq6wtGwShKVR69JuVS2YgwwkY6",
  "key15": "4vQVek1Sihy3KuoZftoBZEyXcKoK4PMG78nYsauKcbfS5AQoDbvECinr2NfWDcxmW6twy9hyGuRNHxDLZJ8Z1526",
  "key16": "32dE3TidcJSejM7JBBZgmi4hCr4gtAXA9rUaCDBkbYHunmWSzwQBbfbawA9ChRkZJ23xW8Z88jsg2bW7UbPnMBK9",
  "key17": "4P42F1F1BLXvi89M5USxAgjs52tdtdyUhdBnfZDzC9QoGv8gQxS8FPQN1Yah46oxZiWVMLxtYmWudi2xsqfZHqyz",
  "key18": "51TnHAKU14YBmjVusUayhyviHkpeH9PypPuFZz1tHScW1pvQ1yxx7cMvCpwthawkdibXkEeZouiTsPJvwZi7MQTL",
  "key19": "2ywL2xeE2GDXRn22pyGxEprwBj3Lbktve8GHeTNxwC643YM5C8uyeZqCgaJmkBrqux29GSWLCPBEcBpRY1owBDjh",
  "key20": "5vANDG1LAWRvEReec8RyWk7ZNkjHNPLbH6uDYSMGrwhhQZ8xsui8DR6jSjS5SjfvEgyoWkBBNMEGCwWztUpVzgW6",
  "key21": "4AiViZBthmmvLaBqGo12Lq4CvFNUXrzvBoK5fbL7UzTpoty9TkGQZ2pjaULAeqzH3ismzo2dFuybGKFWQhvDRs1V",
  "key22": "2jCXKNnNdswDaPbYbdQB48AUkgAvpHbdpYw7kuugJAHkMe6B4yxoa4nYWAsn1dkhGCsy2S9KhQ96eiZRgTiKq6DF",
  "key23": "2arB8oDxJoXMFFH38yFy86hv7WNjryYFSxdh2FfCUVuyrtc7Nfyqt5Tb5G9WYsEZnazhJWmMkfT9xqYyvUgFzHxs",
  "key24": "5WauUNtJVeNVJmUHNyo5pa2BfSpvnoVd9DSk54MWxpxGuwEJk4EMqM4avSJ8FTqfGuypUr7zw37sn7M2drbKDNx7"
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
