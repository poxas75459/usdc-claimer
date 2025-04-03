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
    "uVH3su9ZdNFRd4RwTGiZMVDUerUUPPrN3zNTDEdUQEh47ZYqJpNW8rwCVvtFbbUMqDraRXg53QgAio2FffQ3Sdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kQfjsvvJ6aSyxTS4bVoKaa1hFSKzd78BaTPgNiF3omAQHdiDK3TwHSny49KiGP1EzKPiptafwkHzkG2wgMcXfh3",
  "key1": "2YtiwVsmoJdSAB4m2F6ayEnjMqUCARLdesa1NhKnRPLQdZ2H2mEnvSafh6rY4CLtR8kkUsDYWdKvKfhATmdFtawA",
  "key2": "4adPYHT65kcdhdnx4JarPo6B8AirGh9Epspu9E2PV1u6Ckdx6g6hjNteu2Q4vyfqUb7XLKqZRySzckjZvk1LU9mX",
  "key3": "4y8rdqkPFLxPaHipVpw3Rks7u9fJX31T6Wnq2reHC4nD7u5A6poLQ9D2ac6tT4PmgdgfQ6xK6ZjVThFn58Q7Mfne",
  "key4": "4NyJd4TzCaxgefV4UcK1WnRgaUmA3yihRjMCQ7Bed5yyC11LdSHyLxJSSxjKD4LBcoAJ7LmuouuaK76ea92uu7vC",
  "key5": "3rD6Xkmw539pwrrKYoL4ZRd51cgzYLhs4ZFipZhuHLBKHVdrBYbcu8FjkeXZk2djsd4ze2yzwAPbcnC4GAiN3Hq4",
  "key6": "2Eae7JWwdyVnKfPBE7nYgUWZMRBVafEkSCnWS7h6wQqgRfb6isSZUWTGkjzbn59ZkSVGPCxRmhvy2wjXTrhSsQUL",
  "key7": "3DYe4ztC4ouSXh9d6AAG5BYtZAyVcLAKA1Aw5NsPJTVBzsN2xD93kiQPye1S5hgExCEwNkGtNRb7HwsAVAXHD5uu",
  "key8": "4xmeCxvpZivSSE7RKZhPaP55K32cJ8XRhLsDr2YrtM75NTRXxU64aTNtHFPXZQPoNne89nGhUyvbJ5tTTjrHPkSa",
  "key9": "1NGzhdcyz6jXBFXx5NjXht2YA2esncc5PC2UQVA1qd5X66R3jN8ee8gSAcJnL2vkSzizyib526nHKfWws74em3V",
  "key10": "33VqYRZM8Q35Jb8sAzEfzB2DJ8ALBLpRNin8LpwEtM2dtKYR6cg5UumiL6HRic7tviThoi7sn7K1riog7F6A5hsr",
  "key11": "57rVrSoKKhKAeAYLB6ZJUqXmujhaqbF4J4LPGHUdsMH5AAaPSnjExvAnQNaoUE9tmyr24dAGNdfaYp27QtZ2MiJQ",
  "key12": "5ENydYT8T7sVJQLaxr9AjWsufJFVVJNjgHuvFNF4htqxDRf1tvAdG1acRzqR3uuyErNQbVrRLfggbFPZNTajaijL",
  "key13": "EzKchxiMdNTdBkUbG16PuLQGsFYbwygH1FHDBSS3KgZ5KbrJ9RdaJ6W4umhYhyWxHiaeQLbHq7L4BobxYwWrhSF",
  "key14": "5TvouskgpsvBKCeCbt2rhCPJ9QGfMutgpv5yKxTsnKCX4GpnqGxdu9cu9yPg1o5WSMjj1UBBn2MTVCgn5eyr4W3P",
  "key15": "3aDCpHzpPKL1jgq8FzGtsBV2zG5j9znPGraASZSnRBEutZpbwYPBbQT9hTjrSdRpYnwH74DUo5ukeiNjHqHgoQVv",
  "key16": "2qoqW3W9L8xYvjrWri2G64emUCH3Tvk6jZTe5yXdBchMg73YM9yThod5gGesYvguyibARWXMY2UvEuDD7K53cMjH",
  "key17": "4gRuzPKyKQwcpB6iUpHsQrfKuFiEw8KeoigQzj8QBCB9A2pqP79mJSz1k2CcRWzDyPBjcTYh8dAvxsvhzYyxmfTs",
  "key18": "3QBm2ZyDKeYziGqufGrCgnVy1V44Uxk2i9WmKLSyvUZNcmY68tmDB1PET9JehFGwYc5JsfBuhzXehMDuaHUbpBPg",
  "key19": "2qvpU9xLurfNo4q8KBb1J97YSyF4vd5LxyYWeuP2FGmrHymPQmpiixgdYvQTVnKgYej61FfcQKK7zbm6CDjyGHUM",
  "key20": "65Nyxh29cENc7LfVddQGAqHCPmTeSu3Q1fkmerR9BkqT9aQJ5UeDBp1CWcBJ4YMCgqGwYiEudazL9NZbFdi9NxxC",
  "key21": "4BzzR7wdV1eDRth7fSDsdyG9vCeB5Ekaoq1eEqVAHsfxgZTzvKpQUsyog9Rd2TGvDGURYA6Zxc3ujFURWMaW4Eqp",
  "key22": "2CCQZVqFX844CSkzjt2TLyig6qw3nYgjQLD7am9JHy4s4iz43pZXPCvLbwe4r788bqauZsWu3vokwADdDrRsBADP",
  "key23": "5i6ifw3nf5fcdJWZs47aYvwAZqLpgnFop6gLxbbV61a27NGe6K1WFmEXy81MEfRn4RKBZdAeDqGBgdXM2qoce6qk",
  "key24": "QvDHdqm49ou7B6VUEAmEhUjh5yDd3zWivUwymWFaWQbjRDgpzFnMDvm2Boxtz8cC3WLTVMT4XvCttEmNMcLroH9",
  "key25": "y15BaJoec3Yr3Ta9zTjfqobYvf722VL8UfrEVFTLf5C9NVdFT7XCjenm6TYwfQGzYXf9BwXKY2QwNjB98Enoaob",
  "key26": "47pMmufzf7xZ7BMsBXpnZhqJFB3kJLSsyZ2SRp2VwDgTid2LTM23AYGmBrGmEEiR621CEsMbx6k5yJVcJ81u746e",
  "key27": "2qe2dsSx1UwjtTEHqyyA8T3pX2JQSq81gNb757gK9qdKPpbyADUAawXKqYoxdwajfR8fBXhVr6u67NG25a2qByw1",
  "key28": "5NMNdTTqDQpAYzcqnSzS71x9vBeeLFQf5qwigeGghXREivzBwmCPJSEjPY3ZVN2RVXRGZv1fX7Pq78hNrdFJ1HCM",
  "key29": "3tAPiFRPYcgiqVLyZx6Toh1DynGJUFFh3zBfLF53BZ4T4zWZKwkSMsVnBuVDxD5dzSQgngZjjG1t1mVrAA7H1yGv",
  "key30": "5ndH6p9o4EXBSq8LeHJRAUVMkZD4F7mU9RGsMfKgfZ5qrbQcBZfxCZGL2vZBxCbqLHTCAN9kJ2GJ1kVYyF6aUAKb",
  "key31": "2TwhK725eBtKKpQZ7cDU6rm6K8Qf2jpmgDsQRwZYKCdgA9Jei9Ue1wesZ8mkSvsiFtR8HVir5zYA5FEawRCUgnbZ",
  "key32": "4nLr5ANno6mqPndzLaAaynJrcMK77guvidQsxeqUhXRNmBMLHuRqwe4dcLYAcSySntXXrPYWJHxgDiEqcNRytd8t",
  "key33": "45v7yrGZ6qUU4VePaR6ksHL3C2tQ6Zgh2sCdHTW5E7VRoFSpDcm4nq89qqRfGYNe4JkmHe5XtLVWgrqRrFDpP19u",
  "key34": "4wJ81rxBitSsWfVoeKzGaoBYcMu2Ee6moYMAuNXUdm39jVHintwoXJAovC8NLBtfPwAWJnVURgT7xZNVW27B9BUt",
  "key35": "6168od5VpX5zNX5ktT5iV1GKkjegQWGvyETptYTqVoCyWCLYwvwW6DEopaZZzJSP88xWoZJAcqedmbWRqexNJ1Sx",
  "key36": "31NMFFr3feYRKe341hTFWtbGLUdmJT2mDRe9ie2E7LMAVEphyH8tv3ySdGFZpxXyja3t7wZuyZQ3KQSnxuEhRzWc",
  "key37": "2eZaaahDWehR6v66Lp12CkZDMU5ukTyXPcxPinWWR3eHdSMMaQwuTV4GVWGrYLd15ryhKR2xFFu2AenoatRnFB9",
  "key38": "Ro299UoUS3AHcmZvSzPxLAmsWANkLuyQ5AwGXdvFEZeXoFZ9WWG4VggS3DiHe3PdAU64sXLJat2NBfk4Xw2ybgZ",
  "key39": "3b4MV5YhvL9sPhkZq1tUQX3fKTqgPbRcd7BtyZojPA4rGGStavQcQD1SB8uWP55YhYqNjAS5pZAdXNKt27WnkfnA",
  "key40": "4FFoZck1XLDKAreNyUZL1iiWJJqtQzvGUHxKGg397uN2Dmyj4FY1N9xezuLjrSpqVYWq8sxn3oBMKBkaGRigE6pY",
  "key41": "2JJATvaLCFhDvjiPeuoBy4sVqpv65VbgkaTxUEXry9Gn48s91KHBBExWpAUNXhPDRS6cFJcFzkibA54JBaxkPPnu",
  "key42": "5bW6JheLrLtJLyQeq4X6TzeLWnbAmG6GkA797DnQYuATFT4LpuMsnmgaAE27Hv5eeCzSb8fNJD9ZQ6dBrdZMYoBr",
  "key43": "5GBY6ya49ztGjHoVTZjWxuCwmHeKdc5DduWb7AJ5mPjGjuBqUviPviNGt9DZdyXK9kM2A3nnD2Tc1hyvCBHPtu1X",
  "key44": "32r2ZfjNjc4LLQP5jWKeEPNHcFtParwot3UWzScpF86oZXLy2Z27nUtkEXa1ou6xF8yv3Qt6L8XToxircbKzq2vk",
  "key45": "4EMTdEyp3u1bqid8iZtxDYH83VoKJkkQRa5fS2bbACShCn61QgXGQKeeoVUdG6nUJWa83wyQvksuFfwSZ3jrbtBu",
  "key46": "3TJfkCNRvryuNSGgxxdKZkRQkEEFSqaVKtXK4wbsrh4ApQs1AddVPXws1FPTGe4XoBaVb8YgbEut8ASh5qDSvcNr"
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
