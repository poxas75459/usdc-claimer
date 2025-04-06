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
    "9Bsrvg1dH93LyfEmpDYEcDfnFoywNcfHy2tmLPBiR8kCdFBMPVi757LyudVfQZW6BceckNdTRq1uGVvrkSEyNXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1hdJRwU6tAcmJu82c5QvMTbypCwJ5cbUEZPQVGyz4YuyCtAfYvGMQ686JkNAPRhFamNbfQ7JXBxVDNb7wcDST7s",
  "key1": "PGBxcWaBqxXCiesxdsvoN41nvPRAYJc9mgFkHgWJ3GMeExNBw9PDZjVEkLF2taHG3Hf5DUAHWfkKEQbfxj1iz8g",
  "key2": "3mpBqcgKJU4vDrJrqEDTp6yMeNmeyXoXemnwvcpsTgVJpXNeNDxEs6qnCsMq1bSmk6ex8UqNBq1kNhEkkRgFSk1P",
  "key3": "5LDWjrrAqk6UfkSMk3KNuRMF7cvrwGatEYsT3dVTohm7JQeLqhqVqy5kgvTQD2D5LXz68f3yCpuG1SjQZXvxD7CM",
  "key4": "gHxF56UuNkFLUtf1qh1x1d35KgVTv2SrSu37G65nfZaGnrDrWDeJ6VTV94Ebv7jQ2YfxESuCfDj21fmuWF4UEMV",
  "key5": "44JFq8tmZMgXCCyfYZjRCfDmAoSW58xV9VZhgFdPKEYYGYZvnjZJs2rPHPDzNwtPSJxKxfBkYWP5d3gyicrJ3RaU",
  "key6": "6mrkzdRZuhmMEsEHumCRe63gDkGcTBzi15BfzHs14uBtari3kdFGzCpYWKwzEgdRaG6VH9RMmyYZgvQJen956LV",
  "key7": "3Ft93PBt4gP4QRgzqpomJ4gKNdoWfAt7CRfAqtZusaLfi8RBNY8srRgm9x3rPmzCpaE84DMhm1P66g6gFMbLFQJ6",
  "key8": "V7koN9qjAyhkM2vqpvEdSoSo8JUvGFhtcKuNXcbK3d3y92aKkQsLEP4fRUVQWiMKFSqpm4nQXbQkXz5uxXLf3jd",
  "key9": "5eeaSq8gdLMXQtxYD6SW6gFsZVkvs857RzUSieLDN2pBpZa2F3J3v2j75VaAv4t9jMMuumtAnHxR6nGfkPksdZHL",
  "key10": "53tPbax5M86Lby5W3PJYGcR6Ygah7Mw7j7bcgrtKXfM29gSBsWMKGbaUJcGr4bjFCQq7CaygUz6ZUHPML6ieKvd8",
  "key11": "5aj6ySMkkKxFfjoLvsDejALXJXjvY5rU9kdWb7JcRoF2JfE3cAcZWWqyUg9ohRjy2LsSX9LJhxsQ4GDDRjYCGmoy",
  "key12": "2SNyhquHbJ7dYiw1oDHxMdgGzsx8gBifcUStysB2sCNme26TYXuwXPajoU8YnG5NiWqTnxkqjuHjkcrj8pxLMq1S",
  "key13": "BYiFEExycSYeqGke7v9Z6GGgqEBxAxc4dqFah3JWj8vmbY52Yp93KmSfu7DWSeeBWn6vqAEwyGu6Y8ZDKVNUgFb",
  "key14": "3eHvhp6QEM6r6vu3VsyHjpN56jkN5v2k871B8EnSoSkuh4hVH8H36UeYFLZ3KGAsxRkvhFUwdtMDJBKPneCjc2i5",
  "key15": "5eyA8h8JUa4MLbPFKar8VxJKuyyh3gQawapAVs45FwJEoFZ6P5DKRiv2m9dd6GXK1AK7WS4rgkDMZH2VvmE3HLkf",
  "key16": "58eLQqPRrBkEMXXPfFjmFc4e2XaAFWPbfbSp8zNDQpWMnfByZb8r2PrviXbSEQKueLjmc5FbYB4SjWLRA4rQK6QH",
  "key17": "56kPxan5JrTh4ZB2LKK7oG6K4nDgP7JJPmUcD5mdKf7w4jsd1u87rfdX94mV3ugctxeyvSmAXqFVvrNESog6iqiz",
  "key18": "3j6M84MtdBGK3x8gU9VEi5WYwTnaQcomQ8gm4PB1JZ5kknLsQqYuHMo9dC3cT1uEd5DSkQ9fr2M3WifEssDa3XZ6",
  "key19": "4tU5e9czBn9myK8bDGcYSz5W6Q9sYzRrzRwUpWTGFFVCoiaFQ1s39MebM1zZB6n84niCNaZM2F7YYqVBrQBJ6452",
  "key20": "61jzjN6FuDrBC71ZURsEiZsEv7KJ1yCQ1JhEkpZdf9eVj8NW2NmerFEwBY4eHVk9eNP1YxmpTQQgXgshVA45xgpv",
  "key21": "2MyGAqwQCzJvkjtf7o1kreUREZ8WtZe7hxPrpkp9T628nJdMWDhL4aynu1iL7pinrHHWxwmgqMwdF9ohVrTafU4N",
  "key22": "3T77HS8iUwka16NoxJmU4utu5bik4ArKaUwscH7RouazcPtgpWBXHuZPcu2VG3pBq5We3gsvtVJcSBBxWY5xNdRV",
  "key23": "2v9FpE9c6vrUqFjGYzvXC5SXKWXK6nURX513qwxYGSP6q7bEvK5pwPqHe3RL8R9XmFRSfu5o2JH5sC11Jrs9DGkV",
  "key24": "5DcBTbPPyogauumY3PBmKJu5QZosRSdQCjPe1x7XJx95UjaKkbiQKdzFDM4FV5n3gcv7W9q2Jd23oTUtM9RD8MWF",
  "key25": "4dVww2b7xb5L17cRpJ7iCT69XtFe8fZkrX85kxGN3RJE67Sd7s8M4zzYZ8VD7DSW6wdx14ZAyTeuLQHypoicXw3w",
  "key26": "21HU2VVtuKREW48Qs2hYhNXsicuMsqiTddwXKcpjDEqJvN1yW4pGFuxKzHmGoV5wSxYab1vXWCeBLZpc6kghbcqR",
  "key27": "25NiPuLpxpqM3DbPR4mtz8jgKufaeeriaaZ4C2xiNBnwSC9RjvtPQvmN2AoYoqg32BFRtHSdXdFK3Mi9VCCk2p6t",
  "key28": "JCBmMAcAy1vT8P7abERwiBMfjuXceaE59cPfqaMMi9JTh9YBqMyBsh139hn7t6R3SVXiCNVJGwGCRe6D94vqb9c",
  "key29": "2AvsaWarFA1vTV89CAUGSvPYtrzBcm9cdoJ4TZBMBSvVA5TGq9hqVCeDcihByBJ2RPVDxNyhEJFkarzu5LwEqdmH",
  "key30": "2Z8awVDxSrFNQ2qybZCXrq8jk5oZjotMtx3p3aQM2ujuaNsbKGkBnVpKFmqwpxXzRENY6fzd3Le4HEAMR8RATwF8",
  "key31": "527nyuKQjxZMnex2ST9NTSTTCuyzrvDjaV8BBGyMd5Nj5JWapr8wKX1dfSfxiJtMaAYjAJ4HZPURMWuBNhp1v9oU",
  "key32": "eKSsQjwxdCfo1X2Cg1cofu8XWLLiuATHVymFP7KshpvKBVWy2cqphohtPT1Uojo2ABGSoF28yfTC8GpTHKRqhSp",
  "key33": "38foQkHfjLdg2ft1nPcV1h1odXCFd3SSYgY68ugZBTdb6WeaHgmdzn755nphXAjaDgquJXMxSCjfHTTLvq4xuiNg",
  "key34": "4WPsrK7PRjUTRN24geUV6ZPQBfBm8U3Yg4qF71ZP9VW1MwmqQxSQ5NL7zgPvtaNND8dDYZTcGVutziCPqYR9NE8h",
  "key35": "2NfAEnabfbosg64mWtSyJC4zhGPvFiSyMHb6F5W6ynZ54CpWGeDuJKAciukFMyaNh9idWSRHcAhb3LrsoC5nW1sZ"
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
