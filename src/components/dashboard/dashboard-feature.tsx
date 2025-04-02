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
    "dpuoHDTVvM37QGaNd1VhCffkm8Jq8iftmZxpZ8Sq9GZsBau4WELwbHGwETozxnL2wP463Cz88FFf3U1LEuZPKzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c9igWpmWaP5wpTQTqQEyi52FjRedY5WQxddD7fJeCGEm2N9kcwfQezVuob6NexZErZ4Qc46nhzRx3dSweV55YR8",
  "key1": "MUCejb3a4mUEsPJopPCM1TXy2HjDnMagsMxJkFNMV2w5Byo6BgCNYsDZTMa1pLfqzoURUqvPakMqAzwVUojP4N4",
  "key2": "3UUY1fPGRgkaUJpWTD8fCfQGhtD24J4BXXZUXYCQq84jAqhhKqhrG8t2gXjysyy8bVxWCpJ8itfn3mta7LMceTqG",
  "key3": "44mivoXVRkLrY6wJtA43ZeQM7ahiRA2ymjtqU72fwnmXkPWxb9DLMHmx2qrjnkmS79uxVA9eMQeLKCjsFQsSodi6",
  "key4": "2kCsZ8Ys9smZmzEvVDzpVB12aT7jrCdRiJLcxcwV9pHdZjVuhedBKvdrK9gdXDn59xd4yhh7AbX4phGhQ5DEsouP",
  "key5": "3kANTWw8nDHo2DTDufbJo7Bc7PD9QuHp7BXeNpK6m7j7rabBojMAddQSWwsT93nQPHLyU1qgYreExsTcFTiFmkXg",
  "key6": "wP5B7oBMefwG27mYVKUaYZXsnxwNYBd6qmConivfA9bMwQi3CrnWiFQEoRceKLRudcH6vXNDNmai1LGszR4fJA3",
  "key7": "4gBn3M41ovKEpNXpQGMQbQRGiNCqoTpKGUzdEEtUBJdbAa9srE5CvzveUHaAkatpsMfK2MffQf4NBbMRD5yNLJdA",
  "key8": "4V2y35J2BnKwHYgovtsTAakCRavH7YiqrD19HmmyTpYkSqZ3VcKkfnCFaN1TxG2eYWMkAYQGpeFxWYC9t5YeVU8k",
  "key9": "2y6Zg5KdH6T4XCp8gCeEqmP19CiSgzfLfRheN3BHTZLLVsmfdKb4my1eYSZ5D1ViLgRQcogPm3G4tv8ntFNQnrV1",
  "key10": "3xaaQyF9Se8s6QpcWm7WdiFTBPBCgYiPBWRVj5RWMizL83QjfAN6pNADTjUTJa49njRYLpy5Ka22998DYNCnkQv6",
  "key11": "5UADbpEKoTc8Z2iK1hzAGhV6rMTo1taNBfRtRNcxfUVV17g9mBMGXjugwEwzPRZXLhHyzCKdFLvfE2F3Fjtcs6RL",
  "key12": "37wwhbJL8E2vrFLimxPiwsthfbSXEcprUHNknuN3js8meVt4qBLKtm53tLd8cUoxbsqMqWVE67dzWAnmN8VmwnG",
  "key13": "4S6s8anjaQCR435aBR2qhYmu8uqWHPkw6GLZi1s5keUB4d1vnMpqX7UcVA7TSJCQt4bgo9u4JaFGHUCwx9Gn6E2k",
  "key14": "22hFUrixnUWfhrE6ahmXKSYf1ZhSPkrDVijXqyg83qAKJZsmUyAjL8f9r8dkFv7efNMt3CFYAED5MftEoKF416U7",
  "key15": "4UftLa69JiVLyoq77yfB726PB8qUtJuQXXqBDLvJsogcb1Xf7uEH4uJvg6B6gS1ppgVRwdmPVkDG3Cot2PAGwwUe",
  "key16": "58e6YexytXv3Xd85E6quwZ4XJoJhN8JFwxdYQGxSdQXkhpDiLfoxSCLWwyvU2xNEgrxtkqz98AmuPDo9XD6tLDuw",
  "key17": "VF7K2EZzAzgGcjg9V6Jhx6G3fcPufW9nkvfLz6ubrUHknT5UKrJdLfkK1XywX6N8ep1bXWkVU5N45hrVS2WLkra",
  "key18": "3ksdoUE59f5ZHgHmR14payrZR69oagrp2DKpYfxbMpwZ2WuJvKRikg1bXS5HZHyb11RF3TNfPPk7xnYQ47w49RFb",
  "key19": "xuTP2RT4qcaBAGpG7Jg5cyiH3iPY4ukfG6YJoYwgwo9d8sCwsDfBaZ1Xcguk6d26HcTACpjYAouf2u2uwCggyxW",
  "key20": "NjN6sLBHWwtzUsoCjefgmHeYKKtntY6gLctzJLwNZivYQ4cRPPPKePfevPDc8fAR4eivoFygRE9vNBojQouAsSJ",
  "key21": "2gy76afAH6UPSkAbQ3zikEPDyQLwyw3XyRoJsyfYToCa2Mia5ivEX1uUpUEsA7sZxWCCVZHJrP9jn9tABPWessRu",
  "key22": "MSZQmvDFpCRWwWahUErBUHEoaQjAqHyBf9xggVq8U1DhbpYY1neTYrtjVDb6d4GzPzSTtEnaWM5w9JVRDS8SS8p",
  "key23": "3iEBfeoPg3TAL9Jv8aY2aSB2YifPWm75gsDdZLrEWwyKTUgywk3QFe3dBuKqWGasFqK1tNKZvpwh1uUujXM4FU1o",
  "key24": "35p71eyEetGPPeHvJecZ5rMHF5iyFUmsVaQ8Vpa5rCMVwWsd6AVbT5GEDAR8vCk2JvBFMvyERpsjUEPNatxmYbGR",
  "key25": "3J2sxDRBjMkgngqn9YHn6xsZmna5MtC3YJifEngvnvtNXTbmhVcNN7FkPCdvndrKEqRb8qZiHTU9rVqVVJt1UoZo",
  "key26": "4xrLHxt8t4aTGcdbLwFQjRRD3XbyhjwD8igkfSW6MR4qGRP2NZDXB43eT2NXyEkxchKh5i1c7SLJCdQ7esjcbVZn",
  "key27": "5oecVgAg4GsUkXbAij7UrMtZryftpdk4Z885NCHL9yqtZu9GCZjKj9dM5RMj4A8hos4CdSbRFXiddbaiNEpTSQ7S",
  "key28": "2NugyySVaE3nCqV6zFC1hKKoShCDLf1Zwk17dhTnhmQhCB23RexDsePdmD3USzSdtaekCAttALD9ZjDeauoCigB2",
  "key29": "5PzRowBx6y5GKTaJ4RDc91whdW98mDQojvi6WWM8ewZbPe2gH6ocFktjseLBBCditB4jAATQYe8Je1WBzjgK5pxm",
  "key30": "bwBeHh8Jk2yLLmYn2eHwU8oD8fwxKfgBJv5dt3HawsTnJCKc64sxtg8yjNRcuSkJra2jX5F8Cs4XcNL9ya1JrN7",
  "key31": "5Tjow3YQjCBakgjLAaNWdbNWosZhDfC7c648oArcB1V2r3QE5SdgQ2hKBBobeHTMRATDBpcku1YQEDNYcijzgfBs",
  "key32": "2bgLqTbaRoo5N7Q8etAgmLV7Q81w9UFSKCkK3hhWgZUQnU4mCAt1PSgUQuBhpqWiC15DKePDbE6s7ueeBcKvEgU5",
  "key33": "2h9UUQ5Ecc7hM5JvDgE4du2r91wZAnh16F5tUxwskCrRMXwApxW5ysojNNnzbXNqbfTvphKoXGhQoVt7gQSAFh4L"
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
