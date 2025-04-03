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
    "5UisMxp2DtHPdNtUWDRypcLEKZo62CYFbFkpH5THRVzr31zx78jtVXntVcbvvhF1MzFngxJrTAdGBq1M1DX9KTFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36XysQcmrjGh1PJk3MibHdmgcjyNbf4nhHYMmX5j2sNHQfrEQpMhhi3n8da9QzmUVhGU7Wjw8YCerrunFso58uzT",
  "key1": "64KJFLLG7TtYQyvhbZKkWdJF84zsr9pU4nZujp9DjiG7yEcQNLbJbw6E6DQVKEgwCBzDirvbc5KJds3mKfhsBrrA",
  "key2": "5EyHU4GcChVrcaLt4GWoxaanSUtPDmx9xpE8Ryiu4nKss4WBeG5BQ7UmMpNZ4298e88zQDBYXrcm8UGoLfvLPtpC",
  "key3": "4FZzFzsTDTKoJkYvxDC7TvM5Pmpn3Bi9MMr4NFzMs8rbbE2PpBCCXmrrySnekP7gfUKbvaRek9YGNmy89D8QwXhJ",
  "key4": "2XZk76TfoLAuZZPK2x6bcp6TgpCSqHLZ3VB5rDUGFmrK3jybW8Ku6hRe7GuAWjaW1ejoLwNjdWQnqU1NMDfw8pBN",
  "key5": "4sVpgkSVL1zucZAERrNn6Y7dkMvJJgyiYhFpufFQvW34RdQvQqVj39LqMSyK1DVLMsEkt8oxTyM6Ni1UDqhSKojp",
  "key6": "26ek7Zg7VGabNJPs8p4Dd4R8HUwpJMQ7rCWbHqNv6M5d17yvGcvV2Wd1WJRGEQmdGdrCJzJx6HwQkxSF2zSjK6Bf",
  "key7": "AgyrCfDRrZ7tMEmAFhVACvWmjay2YpithdnuWstwWCKToQq3QZEpYGgyaUfY5979VWTRTmPR3G9SUNsRwTtigye",
  "key8": "TnpbonTiXesVo93tFzxvWJa9DnvaHNcHZ9Ne1DqJU9pXjMagxuGkZcJh1MQLVF4AyVVVwJbV8n92Gj5hBMJk1Bs",
  "key9": "3gLWbHU6uZPF2SCM9SFtD5n7F5ruKz16VFt9fMr4ht2y4iUaZC6pBhhZzggcUnj9iPL48LkDA1KeEh3uWCABo7yZ",
  "key10": "fqTSfLn7zajugeNFTtfPXZYzsaoT3AZ8yf1wPj8AwY2jMrFi86kA7Zj4m1ip5qq5kWtFkxSUiaQLkC39wqZRKYC",
  "key11": "2MyDmRhLjyYAPWHGyhGSVrHnuFZ3HCv8XmkWnG6mPqKVcAwLDi3DhxoKSwYNKA3mFNvhDPgjmYU2LEb4LmjPdQns",
  "key12": "2sqQjXU1zWWFYMb2uyDs5A49C4KdhMKU6trm26oKDYNAXBuEe9m5r4Q2RydxcRorsq5vDEvf7kpQUAapXHZjRQH4",
  "key13": "46oWCiofDdtomaiwMeT6ToutNVKXW15AjzzEwSXWPbxAuAuQ2jbfVpiCqVDdwMY35PinHsnbENkpL4A4DjCSQ1LZ",
  "key14": "2agcxnSXHey88THgNLc1n2JDbuGB4goGPAfTEEesSh6MWxA5jMy6sGp1w1WA7MVjCSBjonNrWDN3PoU8re7JPVbV",
  "key15": "2BM26NzpuiQ4YBEWspYPnBhRzs2syZyKcD3Gmz6NKDU2K9RS8bkydnG5uhCDYioNoCYhj5CnmoM9hbNFV5gh9hYT",
  "key16": "3SG4mThAVP3aDh4sAuo9keFahLCXKwm9zCTNa8TpPv46iBC6yGFSrFWvsHp5TXGvRd8Dxhij4MVYNzttx3txArVr",
  "key17": "2PhpPJThPUGwBQ7Jsp4Jh4cSiajSChwb4AGBf3fohqyLEEF6jMNMPbUYD5TFP3tLHheFH3QpXTiANzhFFvyKfLE2",
  "key18": "3pU8itQJZTq17CNKaRJgv45iHiopa8VhE5ZKcsVBt1ze9HXbooqneZh1CE5AEBrgPeaUQoJjH6MenSBRY32MGeiL",
  "key19": "3f4xNVL7tqNG7EHTbZZEe1VxvUU8iWewgxGUuRTLpx5BybYC3911qxQAMXfVXGxFS8nEbhV7SRa4gLFxMNZdckHt",
  "key20": "gW3kGg9P6BdXQoQQLHsPr4rhwzyHmrMBwuUdnVc21jnG9Ms4BGW1nVC9TcLNdYFfD8LiAsnhCXTBjigp75AUFuc",
  "key21": "2S4UDDaHErxH7VaLZVqoejTK4g36io3V2Fm1QgB69tvjhb3KmoqwpuGkdYx4FcreYBfVso6djv4mjrLaLZSb19Xp",
  "key22": "3ivg5v2fUdrqncrVT5rJMmBT2pDGNR54LUJxWf2cgMSLFCchBduVg4ahx4qfdeByvFYTGdFntMuEArXbx7Ei2L3J",
  "key23": "3XG52y7njhCSvCnzGTZovZmy2obUtegq8FFoZB5KKG5KPuY84mwv2zEuHLJnDggetMuCtDoTTUFZw9HFDvgFEy8X",
  "key24": "5kXyG8j3hSEbrB8bLC6QAg3UMSE8yVNndaw5UKxpjZwiB3bTc7CstoWHVHrbr6KuPntEgRcjBerfxWQ6VkeZqmnH",
  "key25": "3pGg2BAHwGvji8nqgDLgjKGX7MXDa3jmbJ3VqkLt2DYj2EeAtCSZJipCzf3szegjcE69kxpFzuCpk3qfGaUcr4LU",
  "key26": "3mcCbtT1H8Edwrzs4mXCXEYJrXJjnxgQ1XCBsN4abnJeiwxnMMnMuJpHyaSdxU4LLTBz7ZT7YH9tKwjaep4XdQU4",
  "key27": "2sXRo78FigEJetfoUeqsKi1zaeczP9imz562JvgkqHQJJ8pX55nWAtPDtPD22k5g4VudgdNB63YR3WKnJjwyJwL8",
  "key28": "33vrCriJJW3MKaUsZjTWrz5WEuzGnDXFxxbGovvYQT1Venh5yjXJwiUbYf4T39xAS3ypNAgFYM1hF3sdfGX6F71w",
  "key29": "2VMwmQMrLnwYwEdkguqEAYec9E9P7gX7iEC78PnuoVbRwLFcBneNL6BhSrV4FHHDKgcyRCyBa5ZmAwGNdZwfpW5c",
  "key30": "3jnPB7Whfg9X22jgXkayfZi2ew6ti1kHGivwqGE6iMEzfu34uo5CzDEt95xVZBGTUVcGVhJKqMNrXSeJxL1EXZda",
  "key31": "2z3Gp4p8yUc5JufXUzenfNMFqY7AvtjmG63rZ1FZWXZPio56jkxrsvS65qEELXN73uCssmNwVSTbDwgMQCeVyvzZ",
  "key32": "ggtSFPbPcWCz7XcwXhvQavuADVNeXfaa7iva8huTEp6kHwv31xwoyvpRo1Mrmk89uKgYz5PuGkvWhkBtUfNG1uE",
  "key33": "4NZauGEpTeLHvLne31DuCFHUK27GWbwZqnuHtGuHbVBU2er8HZmdbJmUDQGGfP4Jvt2DePYMvW3d2Ue9Zkkssgax",
  "key34": "ej5D6ueJWoZ3m3piBi2P18DxkFxik7atpg2ANPmwRWk98wHWQUKNXboceBKEnwf36pQN3uA1qR4B5LeA3TsQE9U",
  "key35": "4frHNruK29uLmDdNG5BKhjxSdGCK7a7nTUxjZDtWQfiWpfQT3pJBcXP1xbco8eP9LDK64eWrvirHJHfqtGvFb5HG",
  "key36": "5Q9LDrKNWdcBpWsgnuShYpYoizCjCmdnwhVRKAExPPjgXLy9CdiYhrmeMMe69zJLTPv1N2uPfHbDaG6MrcNRQgB9",
  "key37": "2BaWb3L3c8727ZXqdtsycagc9ShJSYg8Uj5ajp8tukoQrQ8TjFbVYWMXFoemNTQckN6tXG5PZ71rA6g3ybsF3z1U",
  "key38": "2ptXtxBRLSAZGhkqx2xRXWLneoCRq1n2tddvzsbJfy6ccwe35QbEh1xfA7FVxZGks3ZVi6YzVuEUdse3F4iKBMqC",
  "key39": "4voshc7sy5fSzbadWnvNSMoLjs6VfBe7XqhoPBH7S4fQJ6bySJrZiMymGD8KuxYpesvYCU5oxsqTHUUUUcHwQsuY",
  "key40": "3DuUws1cYmBoayLPwMpLMLztxYFVtaKxeroRv3utgPShH8KMAjLVXxegx3j7axPXch4jn1jQPm6sCd1s9xCpC2Eo",
  "key41": "2sgFBCRDXzsQAKUnjLWN6e76AcgFGgrj8ZJmoZYG5NpiN3mGSibycairJwavGyVF21U5abnMtYgboktA9G8Qy829",
  "key42": "3T5EgHYWYMfQdezbZ2ggoVdNT768uL64D1LV1Y1dx2b45gbp9xcDdE8btBhXxKX5QD8AeSqoGgpN7UDg3wdhpGh1",
  "key43": "2MhLe5dyBQUWoQkvyMpupFuwSyYj43iJaZ2khrLt6cnkjJU4JoMvT6P3HApweXu5bfwEvdT93avhNCDVVT2sdMrP"
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
