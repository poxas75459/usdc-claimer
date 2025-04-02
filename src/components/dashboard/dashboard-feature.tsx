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
    "Qtm28CVHZa3no5RuErNr38EZxfDyHfekcbogTeVoRDQ3qge6pvRQ9fpSwgjYDqCMxzFqUnH2p3916tztDhWFoJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n9n1FRMNedsPMjaDgqpwEcyLVjMExRcMy4ACyaHsybs4jPZXj3F5qWce7ubMvYjWdAHLfCdEm3PNPzXUJo6q9kK",
  "key1": "Cz3i7yh8tNpxFUbMBJaVMQTPkKPiyrz3p57gpe5D5urKQorHywcbxStAXJFccnYKud4thBTz5qfENNS1aAat7GM",
  "key2": "61jiEVRb5Z2utTTaEq3Hop4VMWwmdqgBxhfgyaiGmfTSVcbDVWzKrC1NpHWEpgovdyDd5HU4kRgC4xEyAvczyXkh",
  "key3": "4MY6GBTn22rZjANSaD1zgFfZ4KAUTDQQVDt7ywrcQeJcZBJuMDiHE7iNJ8SV4mqMUW5dNa2aaHgrgyKZtPGvhmBj",
  "key4": "5DbNnZNmMtT86iMiJwdDTMfgqacXVjzB1hotzyif6NrLeXdBup4Uqxm6WQmKYLFzLkUdvM43oBmEt5aewqxn29dn",
  "key5": "4HHbpGLAvZzVfPiiPGZoZYWJSw88tjv36hbtUdp3EtLY2dWq6Ln8fh32PvbKFGceYXgkWkLiH7HhFyGy4e5YZXBg",
  "key6": "2KncyKXsBACvUaWtjEQG83akmmEGbNsccRmUTkaWQQDuUeNLWSSP7XUNC9vLu38hRqESeMHVHsBt9hvkVRT9zj2c",
  "key7": "EQCTWU1rNQFNw2bA9HfKzjDUtFmLWYXfF9bV3BkGoSfiFmtVXEtyqYqaR9B91A8KcbcfKR13eJB6o6SCUYWq6Y4",
  "key8": "2CnSeZyBRVyHaLqruDu3P12knAY4cSbspQ4gUWgUbNUkr63ukto9K45HHhMVLiPirUVzhEpDzWJXvwdHDbtxxdV2",
  "key9": "5XNcAite1isk55C7nbejbVtMvrT4RVnZdSVaWCSzKAQxGH28BmykvAZKHy4FBWfw38spMeTxCnCT5CrBPBbMQBty",
  "key10": "4WW89QGmytRdPCA6SFybXQGNVG4bFmRVpVADoRDx7kMZpz8iqoKfrufpXnVrTZcqiAwteMYHmg6osuVHoj8atz4w",
  "key11": "2qGzbEh1k33YjTDycjsspchaCryyguMp48ufRULH8SYxdG1xECBqXGicfas6oJBNLtBn6KxHNSAEKgxv8jtnuwrW",
  "key12": "7JSetxE9ijAd8dg9qezQ3u2LLZmMhGc7tcpSH99rqYb35udbfw6uXVw6TztukY3WDyiT6i5gLByhbNR3emYxiGm",
  "key13": "r8HEh8tvHTksQ6xkPS3LkpckHDEbXn2n2fMAXF3BaxKQdJNYQHmxm1EEznfRFB14RfuDwP553Ph1y2R7Ei6u1Jm",
  "key14": "4rCkCTDNzorFF85mMLnr6BkxKkLFY2PXzvFjWEZf661zA7K8HVTRb3aL9bbKdKUQALjME1c9388gNARJ8Ge6EutZ",
  "key15": "5JBEiJJUjWg8u3xHPviEWhWNvw6TQa9Sh8j52bSnStMfBmpMAEYNP6BzVZY2rss2Td4eMKH12gz8yoa8CAVx4PoT",
  "key16": "5nW28AQMPtycJL3h1YpcmRCTyGxRdvtsGuiTBu3HUN4FCPiQTySM5CeyPS3nCTvkAEwNmdjq8iH12vnmcVjaN248",
  "key17": "2RjqjcSAqg4FAkTjF2RkuoQYDx39UkbfDqpCEZYRv2gjFmP5Jdio3Zzn543JBE6LYW6csqAhAfE1NuiNiEUtF1D9",
  "key18": "81Cjugnt8t7FUiwVW5y2Q5urAUhnNw7EtTyq7ZLSK79qp4RYN6vFQZHXxJpuwuQiz9hq1WfMvxoaw1QNWNUCwZj",
  "key19": "5xVaj8BA3NvEdGDoN1WyN3tnJvqF2GDa115jhyUiQ7bz8YEyq15JEru8RryYAQaU3B5pborwZzrTBipHrzfBSgML",
  "key20": "4vkNvAfdQDkbatA2LbnuCQXD9cTXCHWKHNXLKK6jv8F6yhJYoPPZR9PxeLM4nty5t7Ng3XV7n4UomACE83ZoqMyC",
  "key21": "5EM9B4wGPkW7WqpqXGSkaqhCiPd98G2GSQU2LQSC1avXWrW6MzysrbngautSDkoRo1BCc7ga57aGvkZ7MNU5Pv1f",
  "key22": "r2bEu9aHiUSZtdBxdrBWQkKrhP9423kaaQjf1iDA2xuFZZdHcoicLvrdPnTy9qcAKgFKRn2WWC2zMp2ev85Kcgk",
  "key23": "h5bTt9Y6rffPE9FEueLQjCr7fyrnS9LXs9JdSTqj27gYQEP5JiHcqCKqfimAH4Nink8SWwCzhxyosbB2mB1G4D4",
  "key24": "56QGq6LNZwMzn4ZPszzVQog2YMCNsTrnoVXks4ftL9nS8Vrro5cCqocUx7Qeb7fm5ZF9wHX1RuqXa2vqUfiAivMw",
  "key25": "2cXkVz2SB44HUzTXVXU1fCBqJn9QTuRdxqAuasPXHCLMtwSWpwKQgTawCY7hcRLZeXWvsvXjZFBE12YJfxWH6wH8",
  "key26": "5A6oVHtBHrDcoEwxSb7QxFE8wQ6LPfRxnHr2GuQiEAHFGEMZaf5iTVoSKWyixwLCy7Tku2gqe8vn3USE96kxYCZm",
  "key27": "2oYQrq2hATweQ6fG5Cc9iQ4UiLxqh5WSZzp4b5NtC9sGDBRG1B94ocU8TAZJn8Cus8Y1MTQoafJULtM99Go4uCmy",
  "key28": "64ZJxroBW6QnQLyfNeRDL4xywkGFAyKJY8WwhtCfL2getSqotLXFpkSRofmqwnabByMpZB3XkJRvxau6CTrTFmTC",
  "key29": "5AVEtpKuFYmtyhZ1fgcSuGZibwtBFsfnZiwxpEUXWdzgCTFALky8Fo8box7dTdZK7sFT46zabWxAfxmQiZSVG3tS",
  "key30": "2A2kJsWyDymfDVeicUHuuza3Ghabc1sFGAFgUCU7r9VkLKYXMzuDGsAeYGWr3cSz5K49hpsHzZtSSfP9cX3fR4J1",
  "key31": "2UGgEPumk6mdKWbQ8RRCkcCcSfNsLSUmNskg1owCWStwPc2K6pXDVBcaonLzgZY3FbDETJbAEpjJU4PevGAdbVE8",
  "key32": "5JmJ3ZKyWsuhs8qpWQve9JS4ZpyhYd3hnnVec83zUULh1BPNH98qrYSYBbmyhq6pB2YVeGY2QaLofsJmNYPuZDSW",
  "key33": "3f6GciGPaKT4Li9ABo3HnxX9ghxZZPQgV8kKw7PRQuzipS2YUD38EzDe27zECYpbY3jTP1sWyK3gTrtEvwVwtnvB",
  "key34": "cCCt4jM8dC3FwjVBWhjZcDbY8pZgzFAewr3L82cLo9XpsTMNSV2PGzUkWzRFR97hjrKCvyrj3xc6PfDGkFJP2cX",
  "key35": "3pPE79hc5gCfMH16mRUzzxTcKTKaqpABRzou7ivkg3KPvNFmEtywtGWcERXscdoFGeL3FRSEmTuYXFv7jeJ98MtN",
  "key36": "5FkNKkR84KJQuxPsLQw9y15FMfrcAVTL5tZz5cKy9MobEbuo2FG4irEEjBnQKaCoZCMDpY2F3RKHvyw7um4Agi1Q",
  "key37": "fcUrHkPkRGs4Zddruf7xNYNSrGhnxZcjLwLSda3TarHgdbgm1QRzNPhWJb4rptfjqujzqw7jPXVySBR5QMhMsLj",
  "key38": "uLbKFY8MXhRxzQSk2YKAaoE2CN5A9qfhS1T26baAcf2Qdixtk5Db2Kg96Pruix7fZ9GduTgpNq3rit77fnoj2zy",
  "key39": "EjomNnVZCeiBu6Q18Ng3PVbdZXG64AYy7GhfuoxquSTXC626VH7e7Dz3Wv2LHMeTiLh7KAAnguqDkoRALAujzRP",
  "key40": "5RpT1DHL5vUYcKGdF1YLibMbbwMSbNrkLaDUDAMyvWYPA6y4PycjsZsfdUaap6AEcst8izg21rFvbu2hEYx2ysyT",
  "key41": "614EDhyu6B7gv4iP1ts8zTUjFVV5w6pQPmZGZRKZjb6QnLx3SQjtHBx1KrE3BRP2XRCW8jViSANuZ8Bs1tUhsUTH",
  "key42": "wZb87mUDgJx5nuWSzSwG26NcQ9gc9LS7BQTTZWcmwgsXJJuYShLhnSN4B4nUMXhhU8KH4UvAav79iFNZ7Mq18qb",
  "key43": "62Xx6NJLzWqzkNUJE8QS3UtiXc8DFdmsNDMdTYQVjVrcG9bETUTGf1DeXjbFbB9RdXR5AKRoJGw2hNGmftRM5uBB",
  "key44": "jTZAvW2aPbZD3wdBM7R5bNUxyjytHr1DBj63iBPoZgsSA17AyDZAP1GWC8sKR91ux5sJGb5DNqPxkAybhHzRyXb",
  "key45": "63gmbCh67JskSB7wfpg54xKkJmxwCrBJPBLXDPa1CXDGWCAYvrFM7BeNRJ8KZ8bqjGiJzaX1eFMnhu7Sh1624qkT"
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
