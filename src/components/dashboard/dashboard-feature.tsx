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
    "2eZJTHQ5ddfrwWXWTRRidZuEY9n4isVkbExeAqn9EeVXCPSuEZXzdt7m6dfFBaUWPej6um93bTN4Asd4X9sin1jK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JVSexwhFLb68hJ3ceknEAAe1oATSHQzzK5DBmNb49UG9rj2HozpQfdGwTTUVCe3mM91QwJUgraRCDLNCgdQ4kjz",
  "key1": "4MZZ8tLJLcB1y7dtrXBbjNBwQvDKnmRCwPE2YYZtMnrVZCxVgxX4LXvcyA5Dxcexw9vtsmoPU2TVqvyU4FBGFkq7",
  "key2": "5VhjKPr4tfdZf5bujPzQH7pnPZ9Cpft8sfhaSNiMhswedU7Gk2h6LUy9UYKHw6jNMxL11PifWikSiURYbvrYV7ds",
  "key3": "3aGgkX61kAoQF22e6b6fHVKBDwE2oWLtWGdk9FqTzXS1j2V8A8tpWftbTeHKcHcpnjrVJT9HgybDvktD1VjhDYUD",
  "key4": "49RZZdkp8RAqam6z2KufCQqHbk8NSgU6DmafCuLEGejE6LFaFxYWVuWeVLhcRrsuoq8zLaUdW3yeie2Ghv29NDwm",
  "key5": "3KoRaQT9jxDKAimFiFrBw52RuT9P7syaR3DxA4St4xxt8wMShzycdRAmyqV17JrDrfE8ma1tiSVSiuwRapmJkMM8",
  "key6": "t361NfZxCu9hL9ZookAmarw1UphvjB5hTgSWMrsfk3RCJP2oA7nrZLaBRHHM298sncbRK4ARtDcAgvMLPeT3K2f",
  "key7": "4GBsTqKjSVfQp2ySDTTpfbm9m8LsZdR5qsG7X8wNyhcQDwhYPbhn8DLVDBpHm1vJy57CGHZK7nX1Y43LjSTHaHtc",
  "key8": "3NNENBxU9MLdJ42DmBT3gpc2zSCbPpmt6mVVDN2SpnMdU7d5P1AYscfNG2ML2wKibbB5WDQ8ybcqvggNCfJ3zuaU",
  "key9": "42piSoBoGt21BRXpbJy2rF3Sm9voZ1qCmCSaYARdZtKtZmZREb47vS4WTXPn6pCZ4dWGp1dpxpiVEjqdzzUSY43V",
  "key10": "4v7gKnsg4C8JYkFQADWnZ52fGVMBJpSVFPsJYfjeSei4L2oFMdFzmPXvPnNgpLLxphqxaT4CVkGyyK8D5wtuWXoQ",
  "key11": "5KJXX7LmScB18MRgYGpvNLDMBcpMXL4Nf8Hr5HCXjWjnLNVtgrSpWBS5qirKhoLNDG5GBgnyyHdEaHMniv7vM2qA",
  "key12": "2AG713Ayz7EGUDBjXy6VEfsTKpQmfCyjTASPZbrK1HQNSz8AtkjNCqyd7QS8tszjW6K8wmzQKXdr5oYGAGiNosp4",
  "key13": "x1tQHDefaxJPBA7rwAw8F3xuA6FKhKEEWHtdGcktXnacfQptK8Ky1qC9ZytAeLXpFCBxhXBSkX3b8M2276Tczz1",
  "key14": "4EozzxvFsNwuN8G5jn8FXyEJRh1Jg2xTx2nbwNXGdNqTjCMuw6TfLes6t4Zdsqtr2Y9EpfiHNN8Zh7fkUPsuRCPe",
  "key15": "XUEdRd2oPLdXVhi3VjXgrBywf331LJ71kkD9C66v6X2ZBMniAXUifn4EmdvNr5QjsyftxCBVRyTAAADMHJJaqck",
  "key16": "HMuMheeVhpsumYqhx2MPEpvyR4GjYn2TDwB8Qdd8QEGqwwjeyBJCgpC1R4HwRZ4gt2nS5hpzAGxeeymQzusMxpp",
  "key17": "3vVvxTBAcYx4qAQMGCYC5cdtb7ZWGWVRHWSsHxbxCoR2v9Cio9frVFJCd5UygchLyG2Wp9JgzzHSSCiNfuQDVJYV",
  "key18": "4oo7CsjUDr8oqXZuaT9yecwDuCXKNNeMtbpz7Q4pEBKciUjqC8s6wPkoVfMSAaUWSA3otDSmz6Lx7PHmBHY6p8kp",
  "key19": "4omUKaZ6zPY7HZ77X4BcciPsKqh7BuWwcwqmutK4o2AAxWWsW2KsucXXjXJpv28rruGaPh5rYnc12XHSUosJwiWr",
  "key20": "wH6VNoCTSUZYGu6fTCXRuHfq3ftvDMxBGnBMMm6Tdn4GVcBNAfBdz4T478VKnKQsin1TLoFae6WsTSKnJdZFfrD",
  "key21": "3Vs1bRDGQU8uKmjNd6WBWf1SijWr2qy2EHhTrvJJEC9CqsJy7HfGJ8bCFrrko1jZfwdfcEFomPk3mte2bGA5QHUG",
  "key22": "4V1Y4wmDtPkRfWM6a2kLSB5S5qJgtceM6Jj8RujcewVUToJfnHMDESYDH66YyAU3TJjSn5bFtsCRVzPaSLm1y3L4",
  "key23": "4bhMWKZZY3NgobECg3pTb7KyZt5dGgjZJ8gdPc3iqh13YmN8yPvEe44buSe2QZ23CRMFbRdp8GyzGLs8DUsqwEXi",
  "key24": "2NJqcLBNq89e2jNJdtzp6rQJ8nc6aTkfJGPuATM715st3B1uSpcLKdMzGLVkEmqbV6bfXuPWvkpnphX4Jp2do22C",
  "key25": "3k5CRRipBYTvTvVhXYhmokgaDNvZ5R1H6NdLX1tFNrLwYqST8CtwbJQmwXNiSzca2Q6eW7P7YvBMadwP2snQqShF",
  "key26": "2HW1FNecToC5ie75vL6haGBC52jaJugxjbJ6Gaw8u6aQnERVW4tpTR97HWg9GEGx9HieuUsnDjQuMjpR4eNB6yhj",
  "key27": "4xPf7YEPaA4MTVeFpCXB5nsLnuSRyGYhaH5CpxBCFZuPLD8rUnwqRWwCLBhAYVJx4R8oLYiyGZR9ABH5eqm7XFXa",
  "key28": "wCF11bxXgQLnPHSqFAfKcSmRV6yK4w8rXCNQ6p6667GV2fGzAfXm1bUyec61D9kFJ5mYytZh9uVCipzPCY3mpDq",
  "key29": "3FViCx1iSuzaRp4heEYybRN1pwtfdGfwXcRjAQy2q7gC2S36pwqqWdJdktLiQMfZzaNWChy11aY3XfteaDU8itB",
  "key30": "4RoiVYYp7DHUsBRq6Ped1nVN6jw4BwCsZF2vvSSE8axFrpnT1z14DMrmWEnC6MYPbk9a3zfJSuPJowtKv1HuvEdV",
  "key31": "4vN8q61P1Ff3s6a5dJTsYAyCUFz8cGEDGakS2FqLpAFSZ9jpvoh6orcUEbhRe56n61nrxSGJax5cibwaL1ruStEg",
  "key32": "2pRK6zHQXaZdCnCmwziirs7tEg3NPfqSNuaw7FuZsFoqYrYaWedg5FfdRR4Fp4EevKQZsa8yUPaPcAvFPZFGhqtZ",
  "key33": "4TSFwyQQJmG6DZRhxYBnQKm5Votp2LLugiGNkaxdMk6U8B9jS6pCXE5EdUaE2mF5bjxdqTpFjgaBYx47ZUiNSyyK",
  "key34": "3nBYVmSa7zweTbBdLqYSu4G34aaWTELPoJ3vwpdYUr1S5UgBzoqKJMDPka1CP6vSbyQwqku62QYWFZZa9dU9Yo3",
  "key35": "49o1fyRy92Db9GndWy5SdEcFqg2dtoXSwRBZo9kKu1zH7TasrWXbhrGY328DxBszZ9xGzxxkg9BcDeTZFLfHfvkd",
  "key36": "3Ax8zBQn1hi884jUMT3g4Li69evN5QoMHhHmbGeaXiDe4UtbLZkJd9JzKhNTEyzbwV2vpYxe1pWfGrDDwqMNmjZP",
  "key37": "2UxEttCR7wTXQzcfukyHpunmL9ayp4DaegS1Y1LzadB2n69Nyo5iwpu3FR9va97xk6hRkDFQMMYsDEuyaUfZP55u",
  "key38": "BsCcPhR77ohPNUXXs6s4rvsCqHq4fw2XrFunPiWifeacy4PAnBEU32zLBYZpbyFfNpgfPcCKSPMPt9Bc1Ux3hWZ",
  "key39": "36s3yH2gPS3XvSVzLNoA8inoLQZrnNeDC7PdzqYQfoSPKPRtvXQoCYtijuDcVEwp5hPDZwhDm3rFN7aNrFd2BUHz",
  "key40": "3hfrv4GY5M5pjcJb58EF99XtLTR5kvhDrbnzuQoiWnzufN5ssviLwoCWP2c5rxVk5kv6zayL4jd429jd15dbzdK1",
  "key41": "3Kftv41kQZJGCSAAhAyPFWYgzG2kMVANaJ4pzTN6XoYMhjKo6L7FYfrF8tSXEmZUXg8Hy7dzPGZto5XLJw6oVpxG",
  "key42": "1NaKxTpuajmAf4MSY2MzVdFF22W5BevLpjpWyr3pN3JSpqyEEEDBSCcd1cta93E5sbqFQu5hycx127iT9spiHm7",
  "key43": "69Qroe5DuYqVMESyUah377hLJHGTc3pR8ser3b9hs52VuNTC45VcJHd4qho5ejAQrQZKSDzJnpVM7MwHEcw3uFD",
  "key44": "bvvoyswG8Zmon9RBoFD79PHWWMRoPvAca8QGhqsWXLxe2MxE7Sak21eZoauk6X4DGdrpJjYApbY7wFeHXUvijK2",
  "key45": "5n8RNZ6usFoZY1WpptA6Re8ctiRoWgQQ9C4ggVari1ELsCXyquMqBmZo111YGw2XDYkRKAiVAUJi2QiHBaT8HxWt",
  "key46": "4dE9hKqrgTbXjgrjaspC1Uu9ca8wKkBsPiPjpkSssH6dG4YdUSeTepgiPyXcphK3YoC2b93fHwEAugxJgv98C2qL",
  "key47": "2uxYgKGURtoCjEvetucNTTBudHYYecDnptuTCN2ctLGXoHHnXNYgmqJj7y2Fubd3fRyKJ68rnbC1eJoY4AfxqYn1",
  "key48": "54qtjPyvLKfU9nymNgoowY8E2zr6ez2rNtGMeJH2CpHrobkzj2X2GC34Jb98n9Sb4DPa2aQPfSJE4SA21WRoMgdQ"
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
