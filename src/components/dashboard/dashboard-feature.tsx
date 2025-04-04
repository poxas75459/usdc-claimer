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
    "2vn2tRHwVcCmXgzFHFj2zAh3xpWxQkQ7jAjr2pSbiPWkykQ4PahXkXc4mXrztc2tRz2kubaMtWWsu51bUvqPob5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tvjoY6YtRCrJ25R4t8tTwkAbsz312DdUBC6urHHe6Ebvdi4QDRw6v7XDCa75zLAGgn6UkjYsESTdvnkgEwPuTwk",
  "key1": "59wc9my5Z1N4G6pCWBdXub5yhZPyUhmKxC6ZkyXdj3woEuqrCfnYnRgX1LJgEQDQqngzrnVcybKy25kuvkf26aAF",
  "key2": "5RSMtj2M3F76NG3RBu2KKL8U2DRTtJKgFeRXx4oTr5eRdGERTc4V7WK2LLDdeQxe4MbQ4rn6osrPP2dPgRiGqCqV",
  "key3": "5NhAtVr4YTCSSNJZ3VzXRLTesK6NGnraAbHWA6UB27iooJtx42y4ohtTSCM4eU6LAcDvRLjPUCsSo8YujaUSboYR",
  "key4": "4Bu2ecb2KpYnsfYEs7HnGkaWz8W7cs4dBYi4a7UJp3zjZSZhj2cu1LqwJs3wjXpn9bao2FshwBNdRsxZQwfcnXX",
  "key5": "2tpDCZJqXaLRsGCXY5do5bfM3sexSqsyoDFb7eYAfnkxfo1REpiYqMZzkxE8WYtwmnqZPsJA4Rf5MGYkNUCy9VDr",
  "key6": "22T3ZipqWQB8Hdvu624E4vgKBYsjj2vyRkeAxjXnfksccJmrzsTk7pfJ7Bwi6tB6ap1pWszS8NWjHMsWtKDbZKk6",
  "key7": "29Hg48c4QY4QgRhDb4TmzEexiTK1MjY4UuhdjdKNNEQsoC8iZbrCBknC1KUz86hhww2i9jyvPd9x11a1DkkFqojj",
  "key8": "6BsxFkH93s7w1rsgnRSDy5eSmfeP7hSCz9rFNUG74ysG3vP7RWGT8yEnjJcsXFT22nuTPhJ7Y8E4zfe1YwkipAh",
  "key9": "HcWExUybgKt9KK8pZfYKoP9aeLCkiToD1DDbCmTbwosRbhRXRMkEipRVBpvuWmJ6uLbeVttA2sTzwA8PKGpb5Hf",
  "key10": "3YzoTKbffysQpygeSMKtqchZqEYGryfLhGRp1yX66a31XcfsfChP37jGp9eHapxPux9PcwJC3BWnGQFvouBxdsQJ",
  "key11": "28fhXkVUfKJj6YeUYzy2DgP6RciLU4EnewGKUkfcSwyo25mneSojyTXxoK6dyMr3KVXW9MuTrEXZK9tNzQoGYEKZ",
  "key12": "3YkwQQjs41Tsn85UTHHueBXFjmi8iS5LcYFRthikujThgcDwpFCkdBD9Vp5wTCvswKmd51SSMiPBhdqr7fAJ4vnv",
  "key13": "gDpqMLrCkCJZzMEb5Xi6dXbaNfUJ3rgmmXacGCLroEvDrhA7wMXGvs5WnFMTWnP2RKh8kXUqe1SjH38SwpdnKK2",
  "key14": "4xXcM8cKfR8QjhZgCrtuQn8vyPqoDwbEf5DvoAWH4RPHymDUZQM4YeLhFWzEr42VsGrAMp2zK4LhQBpxwM42dG5i",
  "key15": "9QoAWqhHhm1GrRcegHbx7q4EidZgFr8R3A8Atue7vgbAj7kYfN1GuTc81XD5FsDeNHDDv4EUdMAoUE85CJykXPV",
  "key16": "5k5ZWge8vidAaNQRZWDHu2D3i775y4ZzZvEfbW7BJ1xK4yvGpTrCPvxuqwjWWovcdrzzLEteQGPJ5ZrzGayiB4p3",
  "key17": "hEjpADaVpNtr9JQ6sbn1SmDm117djPX5WTuftWrcdJe9VoKwKoF6jgBgoKeKy1jJwkkSMAezLt6EwXKMEKkMv8v",
  "key18": "5EMkfnwyTP2eiFqJNgbNZEgyv7YBtkEXNU17HEzrhVeFHuGWZeddWKp8nWVUs6zx9B4jHfRYQ5j8Rdx4sEi8NBvm",
  "key19": "2Hd5TteCwBVwvFSaXNSCK53PXc5XgM8xLWsm7wRinGayxuRYRRNZq9MirgstTZYWsUvLLiX7xL86Q89aXuJh6WsB",
  "key20": "4xaSM5kJrVW1ok2PNKYXvi3i72ajv58GD4p3cN5TKViPANtd8U5tpmcrPAnvevdnPf4NEW2krcrcymUyjmxPuAWQ",
  "key21": "2BMrYSfxToRf4ZJQSnHwN485VVG7ftNHWj4TzhHcRSvhuUH3XegcV9E8uBy1N7v6TKs9xG4af2yuamxTnQHwhr3i",
  "key22": "3nrUmtvGAZ5fduxckkAxq85aeX2BvQhixocqEB9Y45zsC8kapSj5b3BqxzwQ3qYAMJumu4kJjcR1YeGt1mEroTuN",
  "key23": "L84rQGFaWvB2PNREzHT5HdFGwsEBNYBnb1ngsBTZbq3WXgwUXHWwAUNKs2NvNMFVaEeWV27fdZNXS29PqSCxWBi",
  "key24": "5mrG5fGqF1cPvQxAPeo8MwpQi9qrxCimtxofY9NWpnBm2ULQ8frN1kJYEog6PE15CwEwCBM4VX8hr8mXJmT45NfB",
  "key25": "2D4jn94kArNfs6q1Qp9gZwKzoFPrno6UAXYs4u6khqiUYYboAMNeaP3dTnimqxBVG1VWMjwZq5SegvpaxNbtmhKb",
  "key26": "2w8aH7o8wyacdnbFmbwWLnD7zzRAw2kaCSmmgyHSfo9rYLeDTXZWyiFRBZRBaSai4uEqhY3TRDCJTuQVK2gsLJG1",
  "key27": "5zaghqBmKpGEQjwcPBnxSPUiRCfPzuWVyPvqGo4JGQ3fBwTifkZJt7pFN8Kd3KivcUAWganwQtxtkezsxRCaRu4x",
  "key28": "4Q8JnYXdGDvUStL23KdqgVLzhRkJhm4cvjrzqq5sx4TZWg8Y2cmuz7ZwbusxVFaiEXaQEN31zUHYx4xLctuhKmt2",
  "key29": "2hREJJpC9MxwSbZHBaNCotbYCetLGsqxa4eBcxcQBc5FDhCYBBspr6uFFCxxvuDQWhnKugPGDuRrFEVfBjHBBtwk",
  "key30": "4LPQrGENtv7MioKQHGQqRVeX5eJASEZdsbkCzVoEHyJ4Kzeah6qjm1KWozrBYZffuomCbXqfaJS4wrnCnAecu8Y5",
  "key31": "4zuLSezJjzG4XxYUcG7TvTEaoSKEZhiXUmQjGARtptm8fQYUi7SyDwgEWteEEYQ3YweqYcAuB3TLvpX2wXZfAavS",
  "key32": "wfqXwvPTKWZXbGUBRcUhVr6fo3ANAPQN2EH9bDCMsgAGmbyh3TACymxZvhf1h4MdLCb5c2AgYtZ5pgdPhegJPDW",
  "key33": "2ozUNCWWCmxSBCtL3p3x1qFsDQT7b5hTCL9XPEgWcVvMBpDT3pHFNbKCGf42nrwTisvvW4mNBqNiX2CFRLFHSbPm",
  "key34": "4EiCBqhwEPfFxbeqz7ySMHWHJs4ucpwvoZtcU7Dg3oxPjts6kHWxCbqJcorboLrioWAaxwc6TCmJf6yL1rgeJCGt",
  "key35": "4dVQRQf765pyubM35oGDmsSkFiZnqihfgqseRRh9Rb8zY44D1NRRqzkkyYjaiepqYNqz6HB6frYzCaQm2PGRSAsp",
  "key36": "31feLj734XHn83YpKFEs2ivmwJi1raU2icHHwfxFsyYoVSK9QWiaap38ktiF5NUGTJF7hE8WTSz5EJxG6JwPxZks",
  "key37": "h2Jq7GvtWSmYaqrqm2rGe6fYcEjWXZz5EURS2KED4e5pLfwkdzt8Wm88MEM27cod9sHQbwgwB2Wh4MaBwQwQ5UQ",
  "key38": "2NYsdUpXjbvSAx4TGsX1gbvpobCmaHgtZoQXeCEZjALYgU34V5BNhWgYJVRHnomaTeoyjheQ85NhTgbXZhVJ3KdR",
  "key39": "vq21SDhQpZgBaNepcgPPJ1epCbMnxxf7sJSkmtEt91KBmpMVdsfteTCopgtDckBYagn9w8sWU2UXQHAUHKnzZAr",
  "key40": "BDzXXX7QC4Keq5GH5gQL6gPZRFb6UF63MciKWotW6JK7siNoAtLvELpJLhJWfuzMsAECNR9cDaCV3XvC3LnXkPk",
  "key41": "Fb1yKvSdBmf4XCKXdYGCYTNRGWpM59LvqoyXFRW6bJK7wmkHZY8wY5wY4FEvDCdCf8dEkiA7nA8udtPKVWj1p6R",
  "key42": "3n9QLiahRuaZn1DKhEjfJ2BwgjRFNsfxWpPFAS8afXLiXm4meaa6qKwg3xQTxVrqJQpmnJ2q1ph2gKFppQkEr5wR",
  "key43": "5JwH59KntedkQhtdVey949yNo1YBU9bHfucsya32NmFkpKa4bJx3ZPRpWyzgdh2nYKCkgomV59fvvyodqPe9cVSj",
  "key44": "313JA1PBxYRySfSSqZSC4dk2uzzvawGixSHTfRvAws3QwBCD1R2fMMRa5R6j1jS7MeuzsKBXjBu6QnaZscixNZZ1",
  "key45": "4aS5buU9YPY5Yu6BKgW3FomurGQukgz3ygmfAQAbWtcbXMvskKnP7L3wGf2vWBvfHEM5D2LJHeSVk9QYJhYpj7Xf",
  "key46": "5rjDwZzb1a3Aiw1JLC8MFyn9PqsVerXJzNaznC6nQRQZv9UGD7D3XpausVfjXMRL6kM86UTpLm5DNPrG1e9qMwG",
  "key47": "2vgcm9QfyvbsK6QgE2Nhu475xAPtPugJPLK4DbEERhYpz8H8upjjBVzdA8myiS5wDN6eo1r4Mj64NNsAuDXESXzd"
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
