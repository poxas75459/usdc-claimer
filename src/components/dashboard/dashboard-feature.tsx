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
    "2Nw2XhHNmf4venK1nAivTAxtuYiMRr91RML3dL75vqdTzxtTn4n3GpFDdj5kbKgQXKscW69rnXfBNHSx4GuHL5XR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kc4GBPQZxBsTdfaEMwexcKM75NnDMGDEve6ZPxn9Q3gWFyNsMhwEgVaMJTrQUnAzTuV56FW6jMeD812dMQ25PYY",
  "key1": "3qN8W2dYbYBfsdzBamxExvwFVgXr9aMikcjh97c7fauLi3Fjo6NDV2U3pFyjYDF2KQffM2EBNoFaj36eGcUc5EQe",
  "key2": "2dgyMFFHvkZV435sgG5pFvpjEFaZ4W52Sao6U2TzaFPZJti4A1hXNZeNrLSagxvx3sCKBUEFfNPZjqzE9os9D6q9",
  "key3": "3hZu8HQ1v2RUZ4FT1QGxBLuFt6Uoae54aA6XQRG5m1wQbnST3BK4hhDGpmkmuxymwcPNscc7YA185LpeSEoSCwra",
  "key4": "23JxAa5WZW42gCggoCwt3sg6K7oK9bjGk5tvDyFWef16Z8YR9V5164XhBLPoWamSMyE5AJrau75n1VTzgqo1cWRt",
  "key5": "8nbsSAqtfUCYc5LMJwWa98NQhzQLbdzSkEb6PNG6aqUMPfGw4L9B6QUGaJ5DU1oxFpA6mQBMBjja9ZM6kJN8N3q",
  "key6": "5bYAQ85Ue4nQHuvJ7z2C1XDJZBhXrrtFg1kUru8AYbXQxp2DPqrB2AEcaaQWkkpkYKpW7PiQYRsPMejNrTS8sVv1",
  "key7": "2SMAETrEncXHfVbfxSmxCNjkLf7AZTx874AraVKBDvJCYM8kpHAru4ZCyJL3o5kuxexwvGTJ2mkdf8fFYGj4HhJB",
  "key8": "2Wf1KSZ7kehZvpwohnCWmqqyqRp9AaLpRoBv5vDEMKfaSfyxWA5wwANeFn7KzqUBdBDs65D4mDAjWKMFwZZQLJVP",
  "key9": "3fhDajnPHD51acFTK2n84vTRLubtLz2ZKgduZ9883QQTdTdAcC6SZ2LUypsHGp1cSpd6kPehz8Z1hxDehRsMHCCk",
  "key10": "EvD1ssCs8cfVUi6APUCx6w2xjgmr3ntrKBSpYrAxvnMpwcYZRMqG611xgFUW8WykZEYVLVCnfTwE5QEdYc2YbSq",
  "key11": "3tPCY2VmrWxxppGCsv24VzKqGoh5zDsEcN3gCedcpwj5zAoensVp1teC5AqRnfKPDyUeq7gTBfLUKKvgvR81XJxj",
  "key12": "3pMFWs8wvPGGspRAWSMydpPUfMbbMYUHkMXE8SceZ7zWAeshc43rYyt2e26ULjTCXmAdCF5Qx2w2pKK5HxrNms1Z",
  "key13": "3Gasy9Lc2UA7u8Y7pV2YnS24DCxiQE7U3D9cQuizMjLYSpPGWWxXyJ7iuAZF84Hn8PtiKVnzSCt8LFqEZcs7ChrA",
  "key14": "3opGPNk7Eqd3YiFcCP5szHCBFmXPNL9i2wzBeXjNvQndjSLStXNxSzmtr6i53c4sXEe9nmFE8uwKrR4bXDd57hw6",
  "key15": "QHheCLjxjeRGPQzvK1NnPHK2wuryHFubUbvB9V3CVtGovRHFB2JbNQJmeTxVbggGv3L2M1WYk2jJ9j1ji1HmpeN",
  "key16": "MR53A62aWyUCq4ugm7JGC3PZ3h3PwfN1g5D3kcZCnRQq4o6PZKy5QVAE734ikLqjhn7VzLcwTWHYp2FKVyGV4ud",
  "key17": "5QQ4J9ukQBXkt4YZ8drP71Ezxs8yVEJYqqYE4MRwTtUTcrwNPAPJTsRvgwiVNXbDi2W5PPR7giWBNqo58dg2TFA1",
  "key18": "Xuq7r9DrjN7YQ3Zk3R49MAxezMUhz1noECiYjAQoCQELFc7CqHLjwnQXYUA2WZ8EumjmSngTxCNs9Mgkt2svvsd",
  "key19": "2tQz3bwV7nvgr3771SYtPenEYmdgPdR5J93WnuZiWQdhUzq47MPCo8xuAAk4JKGixg9ssfT7fFQGyggrwQKdizG3",
  "key20": "4nLToEg2FV5euyKNhsFJnW7iAMB1rSTC5N6smp7gugqH7khAwPoNaGgNZ5CMXWQQjUfjzSYkFMaMxhh8wR2KVL71",
  "key21": "5b8qtFYRdPzMye7f8G3bCGEJVmqVFQznnSeHQ8vFKnGF952gbAixFRuSB3mJiMrqjVmRgkQ1LFMXnVimkNf2wm1V",
  "key22": "2tDuRg5z59DqU72uaXrASnsJ3s7c2tsZufG2RMRc4gHwFk2hSEdz5SKzLTC5PtQ2S44BTN5xc3gmzm9U4uqNERFB",
  "key23": "3SgwYAQXub6H7trBCa1GnhKFwkKSickWPzpNzfqW4mXcLH4CATp3uzjQNTbZ1raP7y5sMtmWmwWfmdnMYA3cf5Ha",
  "key24": "2rFKmNVUoUrBakFbFSQJrsd1zMyb3muaP7aLbNF5JBstjRFanEDaoapJ9GvFL9heo1qfbxCRTuTtg29ZJySnqGdM",
  "key25": "2SWPnJNa6xf4DnSft2pWj1YKqVwoFJ9f93xttjYwzJS9Lbx6pzf1Xs2z54kjfJn3rfsw7ozCtMSMrr39aPXv3vVB",
  "key26": "5yNPRE5cnkzgj8GhJyWphpf5WWaK89EDY6Wg2377f5tYKkb6U5PobjYC7axaYvSzgdGWwSksutkTEqJ8F3Kco818",
  "key27": "3Qow6D5RCjgccoFCxMJRcr2iuTyak54ynjpdqU8UEz9EcEHFY3B8o8nQTWTD2XTgPYMoQKaVm3X3K4hSSVpJf65D",
  "key28": "3ZeFMSYgT6FvnPNszuGpQY6puZzRJRPiMWsPeDor91TLMv73JisbQ2LTb82hxk5hAvUhiHZT2Ntq8U4TRnvfDb39",
  "key29": "2dv22Aons9Bh8iB41soMZq9WZcY6rpANh9ZVfmwEq1vDzGhs3vAefwDfgXP7G85tVrAFPqv2k94ZfCjtSX8mjq4J",
  "key30": "3fxPoHFtMNmTY2dUbu2FwbNYNsgzt2N45Qv8vDhnTCvG8vGeR3jji3YQSbnz2DiyG6SSmG1NgwK6y5Lzh5dnuXmM",
  "key31": "3mA24wpG4czcRFq1ScxDr47uw9qVTEQ3YXW3jTToSNLAhUzXDXr7J1wzLKGfWAo2G7UNvehSJZkoi7ukiBoxVNMb",
  "key32": "Jtvv9uUJHGQJ4q631NvZzcxc4Px38jvkt74q4BX1LaVQw6xGQy99dhBGsBwG1hQWGf2mJNnAjAQgbzcaZVUHEdU",
  "key33": "59iHQJ5hg9SeB1uXiL5tPR7DQe5kmC2aoQqRiwjWShteJgaPDcMnhXQfA7egaqB356QBsq4RTCwUPNAWF6XjUztJ"
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
