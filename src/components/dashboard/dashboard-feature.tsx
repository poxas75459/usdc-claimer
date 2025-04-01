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
    "388dep6uXMBRqQkuGytKYooDeBPYVTJpFLsymawMzMm5CMzPhp6wF1JWSfCJyQGYNxahDoun2vJ7M9Nz6cfx3zVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rTcD3fxo1Wip18ohodPyDWXr1YhpFGRqjMBr5Pt9djAmemg5nzgW5UqwH2KUdi7G63poM789YEHpTgtcVkuEDeS",
  "key1": "2TeqqfQKudkbWgkJwTTxZD5rCbUHwsTm2pmvkk6awwAk3kcThVx2Gx7q4Yy9CdBzXpky8QfRLWRUwnBi72JZ1t6U",
  "key2": "5kBTEcKRgC2N5pzv4Vkf7UKQv7voWR2zt61GTZyHVCj21zN1i5scqbTxX84zKzhKTsskbJ1CbgciPxG4TF5nPJfg",
  "key3": "4geM4a8GbXHKtTbP4um3wLL2whQWVbGYY7KG1fdfBSgbiM2aGTVx7x8Zg5tDcZ5pFr7drSgHbNWzXnxvFePgw6Gy",
  "key4": "5BC52gi7XcPMXr1xoiP6K7CdAKvhR16aq1MmJfpUJkVSqhw9ro7YsofWj5f9cG7UtcS75WCtosyPU61564QmA6DX",
  "key5": "4t85Ni2miew4ex2HFmxwVT5S6i4bsU3MywdVzPhF2ERtc3NuvmxbY4PvtXB9ffXcix5ymbzjneT1JTTapV5AQ1Tg",
  "key6": "5tKgoTKMTLxTeCMbfyX7ExqboCryancD3Ntob6eXL1eTvHCwCWG4ooR96EB6UC5fPGHQYFAipXyiEjDHeMCMEAwt",
  "key7": "4Qge5WjGnfwRNGwqJ6BHsTfSiV1ryiQeCh7fQii2uydqxyZqeZE2kNyXV7kJmTQejnuXuHSckwzo1n3UaY5UMtqL",
  "key8": "26QTwZ8CFp6Ens2rBS4QWaP91tJfFgX3DzzjQbYYu2S134ZSn7QggWS7PtUP72vFg5uYKZMBZBk8w1q7UT1kNCzs",
  "key9": "CnoQVT9kE36Moe329ETWARHA61Xu7hnEgejyc83v4BQPGzrUsuHGigoqM2xNkiEXc67sonos2WvoTyZsK6Z1eTF",
  "key10": "49CE6D9tTLuweCTHJDUCQbu5wHuFTJv1gMrRY4ExQ4RGJrvojCLQsw5NadZafJ4YkrmGXBqfsA1yk7Gyn9fZZq9t",
  "key11": "5ZZAKP2f5Z7VRAk98acabtSntgk77DJQ4CiDngW9FH8C54D2ti2964JVNeSQfHHnWBVM15JxQgnvu1dLNBeuSSdx",
  "key12": "5oCgd2anmQetbo9dvfuXZf2xnSYiqy6kwaWfFMJdfd7uFeJLdAm8Tnsb67BdCQzSaBvETA9EroBjbNzXMBeFcqMh",
  "key13": "2zCjuC1sbcr1TbGgLVY7q6FwxWGETv54KPe9VifDGnDTDYX19v2Lx5EmcURdChnhCgNVUE1ugNqP5tdc9Lv4NZQN",
  "key14": "4V5sK4hCFMExGUoPwV4W2BDAyKDpqWHbSJxh476RdgWmRyT4ypYGLJyCHLFfgDvKQbkgs7pzZvJeaNAAq6BrmVY",
  "key15": "5sShjf7PenmqztCE6K6zwT5PdAwZ54ZKw8GzPTxWd5Y3vatbc8r1u77eWyy8Cgw1CoU3euux2MKmyoQhPuUi5R1G",
  "key16": "2YBzw9UiHHDo2SuG3t63ar45Rk2e2vGnGJz46YMUkwEWbonAMc5DKMRW8axCR7RFuReKpJCKuArWwmMCABTSJiea",
  "key17": "2in83ezqMQViTiiEDUYLKvQ3TxENiHJn5oy9BbrueEHirGvLELrYPGwNRNWEJTyMpRudsU9BYPQy2UwJWWJ7znt3",
  "key18": "iY1o3zXiFaw6Zxhz1X9h8VnbQdANz8oYWvtFmUGASGKFK9yKm51qCPusT9tiFQ6Mzs584AkFb9RKG7aw3EGZbdD",
  "key19": "3ZtgomXfSCxjWenXEG7rfuhThduHFPKyrmWJDvZ2xtxpFa4aGPscfyGq6ARDDPPC6dSsnGFoB4fp2QX3o2sKHF9Y",
  "key20": "5rW1w8U1mY36H3VrDXnD9XxWkNbVKgPz5kdMPVcg33S1TR3yYknQE2Sfi3LQmj4gc9pNviugDk2L96fDTwZDJ3xy",
  "key21": "67ywqtsPzwiZUJXgjknqoeSHB6MHDAfXnSyYfAdyJTzPKMJuQpNYdJ81yEhpB3kBAh91WnxCL6V8xDNdbXnQHqJ",
  "key22": "3Z85UcPTJ5ir2jxG8RsTi8jxQKRN6e3Y5ERHoD5NtvhmDmkbjF2cH2R6e84bao3ZMDVirAVkVBjrB4hRzarHxd22",
  "key23": "53SooJhC9sQvdb9Kjw8tZPNZ4AfiCeEZw1J9CY575JhYsjr7WKKLo7yZhyt9hY1fEftkegZFnbcot1Mij7eA26TE",
  "key24": "4JtbfD3c13KB31Nb3wL1gqa6sz6LNWbRLrNrk7KU4QhJCqAWJVj26TNWX3c9zSD718GfFQasHbbzy3a1sGjzbnbp",
  "key25": "27eBFPWMk8ah4sxsAWJiwC8nnAg1LacDGeKPGAH4WpgXXTsEQDem8Zsq2gBVgwbtjfQJmUR4VLAQX3W5s5vBb1wa",
  "key26": "4gq9xvEAUFEzFzLcKhQbWDe7JgJHWs2JqwZw84wMXh43ob2UebzF8tWW1AAJWapuRiJRyDKLJKQvc9Y78BTBn9hf",
  "key27": "T8wtSyiLUU6fYBWe7Yqg9rfoJamHoYkaBc6fyUrbzgwNzv1PT2qkrV4Lis6gmNtkmGH4xZAumRNE6BMxMCYYnCz",
  "key28": "4K2qpo8o53VdVd3ZQRzw7BtXPXUAfHjEyKVZd7cLHyB7zLybBg8sGt4YYzLUR2x1EwLY59VDs946fdwSCGBgjw5z",
  "key29": "672wXdXYC7DD6CLVRmc3qujXUDghvw3Q1VqAjn3LobGj9pbYGWV84xmm7ib8r7LkS9c1vXPTEoieB37yCCvGXSkB",
  "key30": "3U2N5sHVVM5cFZdTZWVhy1UFzqwQbT9q5LnxzZRyWq9tuyjZNXJp6C6UK8EQFGcfHz3NnDjC4BtsiKTJBcKfar4x",
  "key31": "5eGqQpktnSauwy7bv8MUec5vR88ad1p7tF3QHweJBJFTL4RXEYp8hy8xxDwccJ5Z1BjfgysGxAoshT1qT8zJhSDr",
  "key32": "3a7EstJKS65jogrE8PnDGVgXgbu55NuhvFJTQFbjxagPs3pJd2nfg6dF3hB6CXpShCRKw6Q3mhENaicMWogyZymh",
  "key33": "3pQGMB45Dmk3ZdT5ZS4iy3cQsc4qpC2B41cU2ngQDfAAmrGnBbyiC8KppTi7yd1BJaJfJpFSotAACpNuEh6DY8vZ"
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
