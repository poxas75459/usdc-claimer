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
    "XP7wF73iLDfLoiSjPbtqds6vPfxAZgSg4BeY3W7d6pAGXHjZ3sc2kHjnBbMmT8JwXp5Cey7DHEuyayMs2FaoBgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vCWh6GGoeY4TFxQZ5Csfxw7gCWoC1GRQWvMPZiBW6qkiP3FGUeRkWeJSPHEaSaZVi1uYvsiK9ZEpVGM7Goim2xt",
  "key1": "3NgVQudwK8WVskL2JzgbtnBG9hmHeFpXbJBH7zqfcCbLTLbDC8eMCREtqcTsiQ33B5cqFiVVjWjLd6cB8jWouNxZ",
  "key2": "4kbe7YqQ5vUyDAdbFoHvY4eXinyXVzJA1Z4Kqa84PedDamuj7DroyuXEh7YRKWuCgW7jFDfbfKRqMqQboFfjMdz9",
  "key3": "E6Dx7svUAhRyVKmDXzbRGs2uopnHpEpjJnQ3BRNSwMm9RudJJJPFoL1e9P7XvBw7QM2gYJzTx7K9zBMee8D7Ce8",
  "key4": "5WyHojtSzAXNgXuTzo9AhmDtvRDL8jceSBjkmw6nwwHReBkdGaLKeiBL3tfBb86oh6hAqedGGpwvqNYGoaomwLbw",
  "key5": "4zHCHT1zVQxYqde6rfH1Xf3b4d1kXA8wZSsa7cM7sPthmFCvu5pEspCKknNRqJ8BF3gUvmv3Ahwq31JicE55T383",
  "key6": "53g6hnGTHLcoFct7xacpq26WEczFBNgjG1QeMNZAg1JU8XdsvSDSS5qUNvRRR5MSW5Ym3E9yzqpoFAVFANQregQD",
  "key7": "623ZPknjgFevcQvdRpF2SkqbxgzmnmkzPryspA8FfF6pXmkoi3XdPm1FP1rVtxZmpSgmiMgNNgjm9euzNFyrmUur",
  "key8": "2EpPg9jsWvbNyqoU8jarHnsXsFLVXEd7fuHyvdiYZEo5NWVjWgmsSWKykM1XwxiqQZRwPUPNELwHjhreEKHEtj6L",
  "key9": "Q8Ykf5fTbXUemhNd8xaa8NnLUewpck6cJDdH4KU72mhciRsP76Jc3TpV5Kbc2G2hxvdAdNRw2MXUhGCebdGkN51",
  "key10": "5u2wzAYbeq3PzgFWvivx8RCFXMPu52mgEWeVXLq5FV2XEwMhirxM4SwxYGYHwWXqwjzcRo2ZnqnwQDNLGtMNCdvV",
  "key11": "UtNmBmysNhwxwPHVh9FHNZUzy6RneVaKGCbk3aE2ivrVP7mMGJdiw7WzKtTgXpTFQCxiNJFhGtLNuSeqMdCDxLQ",
  "key12": "34ijLLquxe4szzo2jjmZeHdpiVXP5hZ7EWiC57PzagHrQ7DAiXfBp1cvUM6KWMUDjxe3eSzmg18FFS32BH6Nsjsd",
  "key13": "5izg8HKojPher65ozMpLhpnQZx7xZjjHgvDuxhwfgQQcK9L3ihZr3XTWYLrRac3jtkAzAAsKEVdjicAdG9TD3LHN",
  "key14": "446u7c7V1o17cKCyDKkC9fPYXdAJxK17Zqzrsa5aaKjFx6gNBC8SiGnhzmZmyvT2FJQ6phdP9j73qDJubVWaN7jg",
  "key15": "7d6Fk8ZZ2pVMKdpbqchP9ghfArARSFavJMegUrJLv8HUcfbfvvqv4VtumMRCVDmJrMdJyW4acJVnfEmfqgjUqdG",
  "key16": "2afdgxXdpG5noKWUQPko8DJfbA52w4umbXKZBgYi8yGNjmfEvyDNGxy7URPduPN1tc4Pa4naDmutXNiHRoLThXUW",
  "key17": "58o34jgCdm9e1x5aN4Qf5KsABNLXqKU9gmA97UWGMH9euhA7xzKhFm82h7DdmffhmzzixRop57EogUFQ2o2kqrbV",
  "key18": "5PUKtsk25ZebdC8Gjx4JgYcjbu8xH3RTR8psoWrfAovwK5S53wsTqJtpvTkUoRwAsxak8TDdoNDWVKWUvHe5C4Gq",
  "key19": "4kPTMEnTjabaYj2dMR5ppJPVH64YtFXJ1F9crCqvrNXUxfR2FRkcnS5QwsD7KYS2PB5MN7hWpkcL3QuyuYqjwVdr",
  "key20": "4coHG5fix8qgJD6DP323ffEz6FSVcrkFSJac3P9UBPBM26SX81ZYiPA4rodRomHtu1fmq7hjMQhvzrgQWKfFEH99",
  "key21": "2MMdcBFUwnryLsXRVhQqFfbydVJMw9iPLAvQByaFpkShm6wbHjUR8LxaAMWUXa2phHnQ2H5EeAPV9JEopw3CLDzm",
  "key22": "59iCexcu7jnAYV48AsWGWfEJEejR7BRqbXUzShAL7yGUmDM5AFjogrRxzURcnjzC5waJNBZCAUYApaAxKz5E81TE",
  "key23": "5nkayGNZZiN6ejHgh675oB31zRZxCpCtc11yCVbwve4D7mCwiDZYLYwwctjJ8ibiAnwbcvH7GBZFd4tM6dQ1joRp",
  "key24": "Khxnck4Za9LPc16NoCu3zD3baCh9pgHjpCCSV2AWoQfU7274nngRtMZMzWq72oewKpggTRKsBRsSKfkR97jFyAr",
  "key25": "63jw9r4cYdSHU9Mci7CEk5SLQZaheSfSXKfc2nSEuQXbV52zCqKJGLpczr8zJQ9tyx3Hnx2jjmZ5cU2zvvhP5siT",
  "key26": "2tkv5Q5r1zhiSkGYK8ZXUd5ZBVXcV6fhcz77o6CxhT9yUGUTF7Ci4G8D1tqWoudTAEZtLAYYQMyKHbp59nZpLbqw",
  "key27": "3nz5owZkoSLzdd8UtE8DSeWHr7fFEH4exuRELdKf57FQ7bJHGz2MRuCYzh49x7zFCQg1U65pKK47xs3ZX6JKeXfW",
  "key28": "X7XngHCRxJVMkxm7Y6JJjASMZtMaKEeTg4TzzTgyeCaeQNXUhjch6nfeNt3XPaofqv4cw9ZojE7e8kFm9wLH5ee",
  "key29": "4dpisCe8y21GPPd6MXEnHPkvrnTTKbR91a9eWEkQBQCZLdCAtCwXXc2wab28k4sUGohwgsQhzQAtph16JR4N3eam",
  "key30": "649samA1HgZiNerx8WeRQkuXhKap5YQqdXK7bSkoz4wV2qeN9VUJzXcD8eHotnNe72XcJQ83c6m98Na8hYZa88sb",
  "key31": "JK6D59apCr4zQgJ6BZMgkBTSoWgus9wvfU14JAx8ExLDe5qob2h2yYbtr8XPsPc7dyQ261NyX7L7p6TuTeDkebp"
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
