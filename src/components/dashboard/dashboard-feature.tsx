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
    "67BNbWVXiVQu4XErUqYACe61FW2HqjCRjniuGSR7v1xkrBG6wzsD8FzyTCVYte5n9RjR6PD46MJvfeexPSGoDSm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MWeUa2p7fzKfytAfBLU2UXpeqPdQMh21q642RSzT9pdvVptRqSUibFQFRoHhPRFvuazbwgo2E2xau5eHekHFjzc",
  "key1": "4ZYxqzaRsVS4wqfcqzbEmrj7pUMCeAYpjbBNVMcpbMaKAjjtBeJGM4xna3osWAtn8VzRi8Y4d2RFF2VNXt5hDvkF",
  "key2": "5GHEFpTZN6XnWZibFRwyn3ojEg3oEG4XhdXG1yEqymSk9yY3YVkWhwXXHxp5WF39yvv9Cejd8wbRbL8ZPLgwVHu",
  "key3": "2K81CuMEJNVMjQrQRQ31E5DCCBMCrWP5KBmEMHV8P9bLApaXHuoWYSMqdDXLM2e1xVRhMDT2nZCTwdhTYJhYXT7n",
  "key4": "23TH2Qa9vAmnjMDHJ5arZcKqYznddMG2imCqFYpM9brrXSFiBPf721VLwrggXP2qkHofzZCT3xpkfqyMX2x9Fww9",
  "key5": "4o9wLHfPqECYb7TphQzDnaogWrxYExqycRSEX5xNBb89gURZ9edL81PBmNoD6MWr14FhZXWEhK6KnKjQ7kNctu7j",
  "key6": "4RdaxRJm9jQgVonmnqfKGvP6UoK9wZSp9Ubwd5S5qgTK7F4zxqe4rr6k2d886HX1dyBMGc7eg6XEBoeE8Gfznq7t",
  "key7": "4Ky43Dwqj3gTuPPD2kwWtn4PBzdnD3QCbqEmcJLjegGYPHtGXV8zPZDJdMD46jf9aNSSXJrwvG1NL5yLDHKUQLWq",
  "key8": "3gwE51BswVzecHBgRz7r8Y5cCPTUyRNF7qWXYMHyRBPAdBsdaMB3L6iXzuNpJKCiHdunKqbt9whmnQbfwqN223jZ",
  "key9": "W9Du5XKQ3h33khXgUd4oWKQmhtuyzLaPBuRXGGex52Lq9PBTWbx2Thm3CwqC9ouj1Bvv11CR55n8RKQ6o3DDBqW",
  "key10": "5RtQkfjJdUq6BzmZNb1d5uNLBccWRs24dWFKHuUNtHCnHK1TB8FucS2fLuEz6o9PaWaN9iBqZojBj63YnESzH8HL",
  "key11": "39gLrkwT4DeLhXpQYzUsVLSZVyWwW9ZPXMyFzQyaNmhpVmKeTPN9ToyzRHdZdGPNDK7faw3vA3Dh26joV4eVSw9e",
  "key12": "5ZmL7uc6jx6RjLvoF41kFV15TWBmXo8f1MMGtPwnfHGYd1iEAjFbopAKPETzLSWY79u86Z43VVXnfDjQofwNFXBt",
  "key13": "qygxXpKV7wyfg5DY63pX3X8mGTLiDZyQtjZa8FLxqqppiz5MvGKHpDFdifJB6KNtBFKCxRYf81ghjNd212ESqGW",
  "key14": "5HQjTGMgsrkbdHcL8PSb9z1Nj75GCCUM63GeoCWHPJ2YTph488h4MbztUA7rrC5pBcw6qia3YiPHeYUk889cFw9J",
  "key15": "3g3UHGow6uXxkwVx2jaDP1pu8raSrdibsZT2ZyBcWoczTyJFA5JQV5js8AyoYjrQXJfMhYnMnRGUkmJh2E5nNkc5",
  "key16": "3pjtW1BPZRJqsXhM1XVGHasr5v4VZRKiKv7JYfZtbvFyx1B7YAYPB4E1U9xLnsmi4SsXpaNGpmW5zxL3gDih6saX",
  "key17": "5fbbA5WK9kegKb5PdkxZWGTh71ypKn9LmXGMtQwVXJCpYwiiV933zhP8JmUNXzpQ9vvZSJCaLDt3a48KAgE2k2CB",
  "key18": "PShaCobsXeXYdw2BzeoePPJ9t23uCjbPzcBVrrQBdnu6zcHxKnJXjGHcVKa1VwyjxY98EYhCa9J4eJVuEChgRcy",
  "key19": "5NsfEtnbURE6nZCbEsd54oWd1uab6VN5uD1eY1uNmUPpDD4YhXYvF6n1STsRabKuQfvi4g8xEvcAF6HokSJTQftT",
  "key20": "3Ajc2M1696QYmVc6sNkQyty8t46XdfUfWoXGjZHqRxCZdWE7f3FhNazougt5StnVXSESiGmJTPEqwSwauQS3jfQU",
  "key21": "38bdwUtkMQJ1euZ2HrGNMefHJv2qEK5PBpfVEspRYBvTeCxfq5bqaEn8ivFV2UtfHptsnPUpHeLYzXXSg9W96ime",
  "key22": "669jw9ezni3ncE6aDtdSCyRJ2cJnD7d4zDLrwLjHy7tqafwSrURBoKra5bxcmLp5nx5pYE361jDLGGWAyUnN55eZ",
  "key23": "65e1mermzaacCm7WzsMJBiavr88WbztXvvBk2LGg44hUuVmPvBXUXkw7NaarD5NEL8ss6LpxiHQcZzq5tLgdNNwf",
  "key24": "2Vq1qpwq8YkVoRxq3wFu1ZpM8gnw9am9RGveSr6kAEK3skfoJUVAEvtbdFfPF9dfvjvaFTtwyDww5jSYCGDRDEqd",
  "key25": "5CtoTJGxTWgy8vWF4QJmpSMXHf5XKktC7wNqYgRTzJYTuRFPeHkovwGFVTDcM6AXdkfs3pWZxhyZYyugvNKyHTXT",
  "key26": "3UeHdMtwDfTufyfScrQpftb6d4kEQYUg2X3x7kAo9NWEdq52cjNb5p1AunxqYvTN5ojPKvYyZjGv67jkWgrTnU6Y",
  "key27": "3Y7S2PGjaWaLfTHJKrRoXN3bCqQ5qYrmtGTFTaawV5xhpyx8D6PahVe9JW9cgtNSV9mjo26xGPvx2q9mTX4kWBJN",
  "key28": "3WPDfasvLe5ogbw2vFRpCDi1DmJWrMZNvBHjXhPh3PJ4BrVjPfRpXukZmQoRg6XhZNQK8XvmGw4TfDuZVpX4Wc7u",
  "key29": "2D3rEMLddpQoeaUJPEsaJZsmV2ULWW2kvtvqv9J9Xz15FgmJg51Z8FVVVbnpJF3tJ7FjgrirNXkpdMwojSYq3TvH",
  "key30": "uC5nYgfNN9raouiGrFYUZuUeiw6ujSb6ozF7tobok4SUeW3pRYMePsDkYQ65SG2n5rtFjkLgZMX9TrgHCHuDihy",
  "key31": "5aoVstYREMhKg11tyg5L8eDUcB5NZ2SUztB29v2ssCvNv4hnE3GCxRX4b6xhK36Y7DthnnnA7wS8yK7MBr5r6FJX",
  "key32": "2RXnFfgmJrcM1huurQnibavGh24RJD4jv4rdt6WsEH2BCddEDUU3UpvjzX72ETqnEsTzfpXtV8Ze7EFzZx4ivfx8",
  "key33": "2Tk3nYGPoiptyFxrt1cPXkUPpe6By2a5YGjie8TKRc5cumZmwRHM7gyNwnAzpgZ3cqAWsHNq4wBYYzP5tZC34yKT",
  "key34": "2dC2gRkNEndwQn1yWoDK4MxM7oQSZJELrfF57T18R4vbtwnvdRK5MyoSBth9XU1kswbDZ3i1qHwQ4VfhT4ra2zzF"
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
