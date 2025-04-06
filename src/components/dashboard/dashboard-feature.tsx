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
    "2PDm3NeSVVPWKfmCHQKYcDCf6M8VMdCrXn3XgNYZ1YNAjKf5FmF2aLwL7R41ukNfxogvngoACynzfNwHnunibT6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F7xgFj6sxVr6vDkxEVhWDUCWjfBkw5jhWf4yQDTej85QugjoTgPq5P1p2U1F12dWJ5vuZct81qqGvYECEP5oFxe",
  "key1": "Ybw9ZsLKVjD4RSHGEWaKVKyCUHsSRaMH6xhMyvFEyYoSrvfkBLSgUgVXvvcjWtpf6wJ4cnPJ9uY6xHm7ZkGoFKr",
  "key2": "EebSdWUJ6pPPKnq8WBSrKX2SgBUiLTY65vjYCVJzroX3gATew1QZDX951QFoDxQGSvKiAe8fULCAG2GpyKbFvL7",
  "key3": "2NN5EzsVMdWtKRtYqGcwwHz9dck7tmLUURSnKjYfnjcGWDP6f4wi9a8v7MHZJMdEUKxf1mssFHM3JkeeHBAX8qPp",
  "key4": "o3B21g5akrovkB7ndcQ1UCWYcSSHQobb31hgn8hqLYBcPSkUaTHQCf6KKvQtWcEnNGpuSLKNzPF1aVbbasCH433",
  "key5": "2N7RkxJrzbhAuUPBbnyDoDNu8TQ9WCgkbmFPPL9JMWbiB6hhubxrYiN83YsH1VQQWH8SXr2xpCKBwPcFfzRDSG9V",
  "key6": "3kbK41r3GTL8pG4UfrYtLrRHzk77Mej9oL8SdQNZvNgKpTvGhpmuDBEmJH8rhu8WaobHyxw9A2UxFzYV6jvnk56Q",
  "key7": "3QbbNfFFGejvNzgo3jPKsahx8453ejyrfnxGJGTvrUXT3vpTPJ164dPsJev5jiwNiJm8WHFPkG8sZBrsqE7WVX9W",
  "key8": "4gN8hcSADcbvLXCPr266Jeq13PSbyVH2YAeAFiCGyR5jhmeby18nN4dwV2JSTYGNQsdbFhpDLNsUEvdtdRs238qm",
  "key9": "4KH98JgVMqMka1fQMESdBQjuiext92RRcgqMWoTrgUEspFZdw4udbYgeytfMNmhpgDgTtK174QWxhjCyBrVMh788",
  "key10": "5JzevtDsv4n1G3kBysnDHg88ywFzL2pdkz55y9Ycbnm1Ctr9EsehThuDnSSr8Mnz6AThnxAKuanixrAQy1MvYRAg",
  "key11": "4svYLJtU2XDLGCAZSB7fDSuTrgSbxUvJ9pyjEpgnDzHbjswDVSs4h6GDBisM7ygJoY4Jd8C5gPcRsgaAXLto2spk",
  "key12": "2JXqMAxEMmsm7BqJRZk3swzE4FoKDgtGYkWUx5P7mAQXMkRiFSNawDPyXcWrb92JaKwdu3j8hdcba3fbigf9thgB",
  "key13": "BHitTJoMwLP7fEaT2GRPAJa2hrurRLUmM8uVJjkFronC5XyiWTwpMks5kgXDKgC4prhVAJg16oXFptCPqCwY95j",
  "key14": "5BufHXnMp2RiaDrdZtU3yjzxLMaLDyKFHpUD6KQexRTS91SCjLrAC9zeUocikn4QTu4tvMLu2a9HZZRThGtUmUmm",
  "key15": "3ZKS4J9NYgrGHP2gRnZU7oW9gKHL4iZogJ9DbdiNLK2GqCeUAY2So2abxwsbUKo926DNArDdaiRmi1kvqgB832L9",
  "key16": "5vkqHWj6t9CPSg6YzEPdsSyoKT7Suxs5P6zF5QApaQ41EoSLiCTrGpnHoigGua4A2y9hTPZ1rMGoPc8ngL1t9xLM",
  "key17": "e2vCi7k3uE2hVWJUPxEcjJmLYPhLkzDfF4KUFynvgJnHkhFQcoGdr8niXiae7dDEDS1rfWQihoEtWYaEN1cKDvs",
  "key18": "454SKjanYvKwcNnvXCogZqviGAHEhSuWw8NJTBx1d6U3KFPQL3b1D1YFsCYvhsjTE5MDRtC8bjtxZCnbJQUize3R",
  "key19": "3x8YKw2HCfWFvKGDufkjme8Ye9XkSKCXeZuVmN1cPb8MAQFDDpCT6Hy8AWrJyV8nGDeMKorDmEpSEkHqJbdPGReC",
  "key20": "2hcMhauF4uF4zCF5s2mN8B3qVt27KvFLk4Eh5Hp55G787XauH1GpSM7p8Ke9rNcRsyavdDLDkukib8s3ZpeQSeH6",
  "key21": "3qKd2SVSKZQ5JEB6qvG1ZAMdTqyN6ibK9iAvutWCSAiD7yFqyDKFTAZrkAVhFonkjwDT7JE56g4QKR5Vp89E61BS",
  "key22": "3uUi44h7vUcoxmZy31DTzNwW5rbScBFAjG6pAXFFg28F9NcxuLbvwvupJNSt1huSdWFTwHCTor8EWqAFzwsiLGho",
  "key23": "GwFjyCWtD3j9EjZtFGF7yM1Z7GBV7nCk9CqnNoChrwkyj1u2YE45vAxTu5CbWojdBHeoQJmmmQNqwT8znhNPgnn",
  "key24": "37K5na6SAmLazXiVrugT42Vcmt1zQgfSMC4jvzos5DjyUdmaEjRcFcVKK32juaZ89MMuCpT4GrY3DzaCJdmN1sMc",
  "key25": "28obDbHZhL3Y5mvqn6ztxeyP5YsMQ6n4sqvmu4WVariP9hgwXGf4mqK8avpXAU7H2GyZG5Z4d2Q9hYVhQWrx4gR6",
  "key26": "wDR1Uc1g9wgL3nivNdeB1rywyLvPamTW4aorfJMpZ1vttyTWxujJCYdwWC4fFSbted1wNphB9xp8h4Mgrjnfsui",
  "key27": "rTS9YbEZgHS6dN3rUygcRdRWQ4BA72xoX4fyZJFH37BBx7PadykHmDV2xBzz8cZvj3pnmADzGTERTY4DEgJPqY5",
  "key28": "2ky9jCeKdgN2ek3tNHhJNpp4PFxgLPUhmDB6MFc6q2vzS5Q9mB68wwAw7K7dVYXNbtsuTCc3h6uJp4M63534JzX",
  "key29": "DiTNMBqs7ULpfH2FJn1tEnLwF7JTmd9WCBrjdReRnymjUczDJ7bBfeNzCcf8WuYmfWVZ9PZyQR9FLFMkQzmsXB1",
  "key30": "5URoqcVDZdv5TUjj4DahmiVFbV2jAhXZ6tfh7FwyW31jkkNWXcMyJxaegvgV5CgE9j4WcqX5WCUfoc58Wde52W1t",
  "key31": "swzVu7mCNVY6xjZA5m8P8gBJmW8H3siiSoFpu7jHUwbnm2tA53zzWUDqcy2L37P4deqvWY7kcpZzjoonXHhqumT",
  "key32": "4L7WKZH9srJsB7KXFdy2xwojm3QbyFtEFyo3WMs53LJjwavEVLTLmWt7rMLw43e4WqX4hJbDU9oWq5w8ufeinfG",
  "key33": "3UGoGEytYHrdbkvgbv4gUWDZAn1MkZBcfVUZwgxjKyqoWnUX29JbDY8DDvjgSiGVjMqb2DLedXbLT4peGNEPUcF1",
  "key34": "7NAheDpXKBB9oNsDEoKRkKGVhjfwd6ZJ5FQym1juGzZbAfxG2D66XsttUUw6qfnK38Z3JsRQa1f5hGEv7wkqXCa",
  "key35": "48kZgQXcBtierzBUhVw3kDnQDiFPdtZ6gAkokHGYMPigFAspquLkGSWwKLJBPc9n455nKoEzQT6kfSeMu3Q3QbW4",
  "key36": "RjFNSUf4TboLchaY1BgW64q2mK24F31QpboSj8rT54Nskxm6Hr3tQnJF1dn94e7orXMjxu6K6VtMq8edTwT7mbu",
  "key37": "3TUwfa7UFFbqDB9gTZsantS9mUhLQD5SfVdii5PmHiL6M2Mr5KqvBPMAXWLkojwB8EeACLgdA3RwgeWyxk5mkFER",
  "key38": "5gDnNepUFx354bqYPHN365kUkRFVdsHJ1dJE4bVgerC5GsHucp1cR9xuyyue88hLeJrQuNi6ADfHNztDK7zuz8k5",
  "key39": "3auLihdHtcM1crTme7oFz3LmBhnKu2NGQPw7cmmYdFd9hC2CRofH2pC64q1xChGECcrVcU5VUztGo8KmBCvFv9sR",
  "key40": "3jSzAdEus2X3eh6L6JpEB9D5LDhC68SJTmpVe9FGRJbeT16bvV9bknKeeeDRE9gspNkUhsQJiyXFbhmfG2aJ7Nmc",
  "key41": "2BChKNc8FcGBwa5AvyBimarbhaEMjk1G5FKizuWL5cKAoSS5tSDPg3vKqirU8Lf5xnrU4GUrjrke2ByEnJy59QDo",
  "key42": "2EHJ3ExPbE7r6a4aBxPc2W8Vmqj3qvxkqtd2CcGsEsV5ooiQuBvVizap3WSMTLP3H3kT8QEgRQB6fDik8o1M4LQU",
  "key43": "5NmPAunCuccSDoiKYqFUEJTGc4U2Ma2ndAUF1PiyESuxguuSRq3hJ6nk5qCKSZghBgWKJZebRLFanct8kknn1Vor",
  "key44": "3T3N3Tea2Ju4FUP7xNHK73wnkgcsL7nK9s3SxE7Tcu7gFCbFb37xhokXtCn5teXyVZ85jJLmvqkGHg3kWepuXpEK",
  "key45": "5B5djZy1osNwSDtP4zQv8M9DSRVcSHdhZ2mi8rph9ny4NPF71QpseQdMEzYHeJDmSGBrAyDx5oVQcVrPrt346rgB",
  "key46": "5hcnFV3XKCmEj1cPWop3CJJGUwYRdj26a9ukbEnHmPVxkXQhUc5fMntqc682tXtejhrz5adaSPNPEzvc7FKsMqmS",
  "key47": "2s4CAVr39gZaER3m2wr9kW4TvB5gUarwXCwzaLHZnkJW9CyNJGLmuqT5XKQKWy79ek3H6cXLoJRZoEAE5uGkTzYF"
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
