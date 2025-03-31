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
    "2UxcPkQCWMX7HPBcwYLhR5ai3kCFzt7mx2MQAv9VE23ydsWgv6B5i26B2s8ASzKe5C7LGGmGTNCix959rCaT8i1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TwBMfpvsMwaGVhF2dPZC3tirsDyMMDJjJ8zZoaZAjBRgtB12JFg97yGtumiuFJhcuwuZCYhAKPPNz75w3FU6VD1",
  "key1": "3cocDDce13mSe8oa89naV4NKqCycW4oPQX7o4mYyDK5QJk1m5abDdAGCRBAyJaM4nsTGJ6HM4p8yk72UhrGoZVPX",
  "key2": "2GzGhqF5s8FUcKpVRvsCwnaXpnw9G8GU5QpvEuiG9CGizR7DPa8SDNGzTLUCUTsZR8eAfC9ifFzBz38bqgM8xHnZ",
  "key3": "3KuEhHEe13e8D3yJzrBdk2xr4PwyNsdmYmaEsvvKaFEAXDG42s69bsxZNuKfYXHpZhev3HSRUae6kF1hFwa5xd4H",
  "key4": "5cGEKnpob77WF9HEzr94ee5Lcrsv8YJShKwMehttPJjc5X3niQEmw9ZkxiLivqh6MnrMRZ2xHwwkBakRwRjxJPSj",
  "key5": "SbHBTxUXuyiDUR2uGAT3LXPkFkH6GfJf6Qd9mFWtyxBUceDnoUjWsmiuQ7c511T5G4BR96Txe9tnA6D4Wi1W9rc",
  "key6": "5tggeBHckBBCkr3Me3PFPgAXspJ6utT7wDveE4F6ZSjrrvrAD7NnD8uLoAAujxtrkGUg1qSeHdCtKQXz7EVtUBsq",
  "key7": "2Hkzih4cgAk6FTt9tf7UFhgKqKHNtDRZNkGreDdzsWhtUw5aAAqbjQjVxVGBjWB5aerJpaXMdh8KtSgyj2pSM9Ba",
  "key8": "4VJ2J4YhLztdHNYKrADzGWiEjuuNrjmAUUQ3wmwPsFmGj1gHeNRcqh2n3rHmiWhn6vAZCeKxC3vyNDDhNzTKS6rZ",
  "key9": "4ZTxxGNuwJbD1uCGUpiAV7jrX3eniuat8GtwybWCYtjWuUPHTyHysZTeENoz89rnR9pJhGDKawQPidwtdU2tzAsC",
  "key10": "3gZqdcA2aZLRLVuxTp5CWVQQeTzCv4QuHKq6ES5tanHw2MKyqAEnk3rVVnBDkPMxAnPBaqWfoBfeaKBT4uY3KptA",
  "key11": "4FqwwVwpRcXQSFfBWWkaWHEj6C8b499Dz3ENc2ByQGstCTC642fTqg6CVbMW5z6HXGCitvNaYGdoT3rx1fUj5ug",
  "key12": "3kewckjKUyNDPyunjrd4rjtdE6tCk8KNJVn2UDZBefEDXBPnqHqcykKmVMfeLBRn8Eh3qRm8MbBZkCSUPNftGCNe",
  "key13": "2rug7wfN3cijzYmbrtSUmtEDTUeT8HRunQnaAsi8mMPBGR2EveahJt7teNCd4VCq3hw8cHDmUXDrJAe31R8qvWoZ",
  "key14": "2TCdZjTsGLdr4XobCEyJmpmUCtKUbDjbcu9F6DSmrdxFr3XWhvZ3iKpmBVMAKwmSmyH4q8CynfaMG2XQs5rBu7Jk",
  "key15": "29SQBjBtXRPV2wSwt4Be39k8E3L3pdDbYuHX41PdyxCzUvMPj1YWLqQNPmvZGVXUnWySQADnASrYTyuHw2Y73ME4",
  "key16": "5sVoe9SREF1cMWGfiDTXsK4hGu4AVfnJhx27Yc81FRrQf7sSoY9hLaTGM55FwsfSdURbKnT5En3dJkYEoLMNf3ap",
  "key17": "4ZEaToWaWvDJigBaCaBFy13WF9B8nkhBRRCBhUMptAtHockaDP7SJE4X3wFa4vgAjoBv468SqmuGVpnNFEenbTTu",
  "key18": "cwWkepHDZxbaqX7XpaxkVjaqWEpNq3DxnzZSfLQS16sJgsanfLZsUbpajBJiTh4CHw4Uvg6WjbmLgJ8q1zwUteq",
  "key19": "4zLCz3AueCurnYLy85ACau1UAkTkLRuhtd1HE8GKc16nSZfvLQF1ipi4UXhCGqSG27qzPDJ34DGg4pavkGZycGXz",
  "key20": "5F9sRS2PJFpoKnjHmjbTtNisRkLnSVk2451YxfrNqSHex81hnR8ZoS32rym79abBTepStUFskMPBxPHKNwRYRPyz",
  "key21": "4tXmoT5sQ6yyShWCL2pK13mzfd3afoVij8fk2PHQ2y3vy6pdTNJrXrGZHkmqqq5J7628v4qtTQTbRAng2CkKunmb",
  "key22": "5hutLPgGG9VvDWADv9iGk8yCuifACT2ErDubvHvbyaEKtvy9XfZ2wc3KhiEpcxzFPcVEgvNQqTgR8dtbCNfMnhPc",
  "key23": "2Sgxwr3SSi5e8i3pDLqLnQSQUg53sQM2xd4VF9JsMwwtrQpmidFp6cvJzeR8b4ATRgJVXLK62S1HEioMezgcxw3e",
  "key24": "rwZ86dCkBKWC1WWstnN9Rcpn2PFwQFsJ3GCYJHPXDwB6amuRxJ8gHxpksARKQ3AEHA4aBR3ww68CuqfuYA7mraS",
  "key25": "3z2YfyUUwRQ9yG1KSUvVMwWTnNxBGw3Zg7CcnPL3Mzkz1J4mXhA8G5s296mnqFFbkNWYNdRidnqPKXAXiwz45wob",
  "key26": "5GRk4SJwULRCPCWM2Hp85AMq9N5SXdy6ZfidCDJDF6cpkN2AdQVDfLDePwWjUjPd8sq8o77SU2pwSLmKenFxw4Ar",
  "key27": "2kNffgAoCQumVZ3m88S5UYGzM8KvH995UXZHxBdd55FiJYBCsXaQz6s6QnnNDB2XUfZZVV3G3ZZEUmjeaUx7bdqP",
  "key28": "58Sxa8phPsdWtVP6eHRYhFpwMu5LhapV84itvYaZJuD84qPrU35n3cU6oyHDpsMm9hM6QLXnJXaTrpAbTgpCaK3W",
  "key29": "4jjmRLr724RPWTy86caDrajom6nXnrWnhhNhSSKrUJSBhu2e5j8eEeoe4kEMoPQdb84zDxL5KVRAhNPevtJzzQC5",
  "key30": "2aQxzfWK1TvXnckUs3VXbY5WqGa8pJHa5ytxnk7Gv12RtKk53HJTCyXUZUCzNC1GarA4qK6cGQhwQysNC5TF5LQs",
  "key31": "2Y2pjndZakBJZYA3Fb3QqcsWT4UmspKUey5D6YFc9GqQVQV4dG8GrZm9d3YsvwiXnsUDB3QSA17PbfR3FnDwczAo",
  "key32": "AsAnVjiLuPk7DESoxyV7NSQ4J7qdNQyKV8RYb8rnyL6VBtJhT1dg48vRew71dMDz2mztMwY9gxDWhaPM3BhC7qh",
  "key33": "4H6B9PWz4bMnE75hbm3uHUhN5gSeMHh62Muhhk3Fq9UAa6dPMmhecJwPUf7F1kFumGLvfvutNtBCYr6tVbVUt8c7",
  "key34": "617sW1XZeZpXMuLQLCYNS3VnmkqT4bbLKk8koDw2mB7GmEbM88dNAZVVgk4wnVzhXUefM47ibguBg4deVdp4Qz5t",
  "key35": "3MCx1VhNhcsPnQRZKn51wzhLynqYaynrg1dVbHTJMGQnFmEDoBZcNQ9BcJbvFcV95gpKZj1dJP6EucqPfoL98GnU",
  "key36": "4JPowwvZniYKiXxmvbGdjQaUbkii2vN5j2yS2WhtQHGZD1o4LCX4w8WDdYb2n511dfSRgXowvXvYKXuGQvTcSzeh",
  "key37": "drwRuBzv3otR8YycJNqzRuuM8prj34tBXALVGxGguUVTZjzier3rusdDJre4Wc2NdbPLfdBfbQHLWGDnxF1ULXF",
  "key38": "5rMLSiyQ2dUf3KEbmVMCCsBTUSkRynvBWtiKc7Y4HjBtynVDbfY9NHRsMDszX6469iJfaLgkCHoAxYqceCPnjypG",
  "key39": "2euSyb5dihBAnWRaGJisvG1sDizUXK2N9biVnCRDJM86Nqou5px5oofqGnMfTuhwYpwDTi5p9pC5K3EXCNanSYrg",
  "key40": "58VfXHzFmct6kqZNHVW5isEHdAWRu1Cy6aNqghK1tk5Lt1dTbHhyapkCrhzsyj69e3uUfZhxB1U75atnyGTzVh8v",
  "key41": "2WtePZzDsYvz1BWTSbr37J7NP1GJbdJbaDQzbG8hX8PVSsNZ1qCrJ4137Ua7wCX16WKMBwc4DqjAe7vmGHG8Wc6F",
  "key42": "5pRRy358Ngh22JXKSF936RmdBHULZnX4sKVvcVmrrSMARqv3LArURvKLRSUbRes4DAD3pUkkpxQ9v4NBoHdWGMSN",
  "key43": "44982TQyAsz5QvJUNLZZLmCR4DD1skKKX2WSezB9cPPQVCPsKikQT27qcAVrX4twBtitXzKYU5mBsoxd9XeDmTCn",
  "key44": "3nispthenr6o51fVhh9Z9R34ReuCcoGTyXSHbDjDD6RvXHaKvhHEKP7vjXo1T2ParxDXSe4qYQk48nX98zCSq4dm",
  "key45": "5cd2xnAH1DZKYvWE8pfLvQX4AMJLqcmYu6QohMKqBsUEn9Kve23NL3VGHsiPWAxP4khohxXtfJavSf72fUiiYWha",
  "key46": "axwxYnr8NDqMfcb3T4EFPL6nUsNxSEbYSEmGrFcbGxKrknzxUNncttugUFZYw3uGXG7uFqGDhBtRZ5MZNj3ardd",
  "key47": "5PFKqUwMw9rpvbCLHJAqMrc45LQkwoc5R13B6VnZkEJ3sDw13QsL1hKBnbvaj2N6ebYomnKCuhDqB91HfGfQvnNU"
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
