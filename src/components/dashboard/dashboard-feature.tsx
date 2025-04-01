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
    "5hcger6CvREFYxYCDtD1NBdah2e4oxnR8z2MiamrNdDzsTT8XXKwgBjUn4uh3sVVKhBkS9pjLSZE8qiCX8f5V1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VuSuFYaykxRZUTxfxDkKAxDHKhpAhnsCKgLiRkv3F7cpfb7ctCrfKWnt1dKsEgXofEKX5aCzYoxUiiAgWt3ToN6",
  "key1": "9TbYPY8oTmvGQCCy6rjPGJqJZcb4d6PYwdoRKgqqHZh3ABMWcCJiziJE2wVESXTqBMqQcpdy3emTS3syTBJ4ZK6",
  "key2": "5NTfctXvcmzpw32CDbs9q8xnFPVABuGSPaWEk9WYV1vDekUDiMuE5DYNvVqVPu3USGQ3dP14Ed3kW6p28PoPMksu",
  "key3": "3EaaR1Se2n7mkoZ3nugMij9DML3NEbrkBrsATyM3AzZDXBBpFX3VX4qP3wZzBHnLeStrKPbRSBmAXXPiYGXtLWWG",
  "key4": "5J2e2YLUt1z2cDPtnb6swAsSneGNKA6ttQroBnm5zUpVxGVH2Pjdbia8H9HqW2ybALbbwMRjtmmKndhUtFxu6BUF",
  "key5": "2F1GycogQomrerFiNbukNtRETLgsLz3YDJMKffm2fa5kj8adw7WKJyZkwhkxGMXRm1mmzn4EyS9MgSACLCrGeNHm",
  "key6": "351QwqKYegfhCedoS4VgogjFfVS3rEfTSWKhFeRzri6B4xCqb3PxvoNdznRpYpYvDg3u7ChGbAHvoahMFA1MzTXE",
  "key7": "45JD4JxTaH2j7BRMsU4Rg23m5CQFiBWSofuw23UMddNDm9bmzRV4wjfPdnGuhHYc5qADmuuvmHVuAf15m4QejFxp",
  "key8": "XsGWRkmEtrMHv7x79EgBtSZaTa3tgwCvRebWiiLbTUC19s4gH3s1njB1utrPzyar9vyywoRZX95w2dJCcnSgekZ",
  "key9": "3gRkxmqnw9oQPHYw69FYwf9yYceFuBeefd9HjwYYcg7Qg73YyZxiDjkjUbEveMA4k8cM6DZdcn5PdRL8vExfRWEM",
  "key10": "4NrrxnEq8X1sDnP9iPeBYWMnNvDDr19J3UPk1M1cbnusMdsz9JEpRmukd9MpLtse11zup5tdvYZ57BqLviie4bhh",
  "key11": "3LCfG9d74Ze87nyARRv7T54Rq3T81UEjd471xSTF4A6mKjGEFSDjzvbCPhJ56RgfoqYr6p7LgDXqJGALS4pgqtE2",
  "key12": "24De3KPf5ezJ5DL3cMuwgCBGdTEwmRtVyMk6HGmbhLy4kRz3LzhssHqpc6syWQGErVEttdhz8MPDGgetra6xEqG2",
  "key13": "3s37wgN9R4hipC2goywnbjFREqLeH85uLdZ1rBwBGiZFxybK5amHfsMNqfQhAPfRovJuYm66F6YZQh983RcAe2pf",
  "key14": "4LyJH6Fd8KsbogJPLGbuBk8X7jsuGLjPicrqeHyEx7p8a9X5XGepGweYY4KEhQiVZroReSNzLxGwRfNBUkJtjGPA",
  "key15": "5fW9FMosbAMfTgV93dwsdXWzhTgmg71P6uqhYSEGuQAfk7WwFJy52NarHAFw1SXH9iftJDc6dzijSKu4JUa5139Z",
  "key16": "5yxcAGMu8WfAV4NaWZrWQ7Rvm7JUME4qjCDAYyBBP1aK5n4YvktZoPFqKECeQuHqbfzo3rCtJNY6G8kZEDjFw7A7",
  "key17": "5tAJQHYPdn58wqDfrZ95A3917wMqzo9xZ1S2Na7393DCGPkW1erfF2nkVRqWPzpm2Hc7bPJ1Q32ui6iXH4kzRwUK",
  "key18": "t5Nxt8zHea6nky6ugoJZE2C3hcaFsEvJ6ePxrqWNLjUA37UMBPFLC3mc2MsoULHzTKiKif7EyNZS45PSDPRamBr",
  "key19": "2fA8tmg2Hb97Wpt2DbgeosbJ9fqBsyuzw3FRquPy8uMFgGFqFnQufMsB7ds3i14AZ5nZoE7bE9nzqtwXFkAw6TBu",
  "key20": "1VAVTcvQ8ZYevkq3r3JkUdH1pwtsnPf61sHfnDVtBxcjjzdC5GPJbai3U8ZSpUybwHtVyFArixv7UfCoPmZRow6",
  "key21": "3KELxDMvsFhBCd7g6oaJS47AqKRStgxRVhm5hHVmNP8ccFhhN3fauBP2eZH2XxciZrNLuxNj97Hrehap7tfAwwYh",
  "key22": "9HcS1JRFr6cKB6umFYbHyUvzzFh3D9MK1QwsDTnnKY6xiY9ZBH1LiyhAKfyyn7MtFCq74v6HrCBWRiQuMashJog",
  "key23": "4rEjAgpWTKwrRD8iC97yAK7niJPonVS9pS8honUEys38cUXP8cTSKTjxV2jcTPuGsMCyA7JACmGDbsSGDKw4jLYZ",
  "key24": "iaatrX7GrkeQu2a38jWbiWsYD8r8DRpMw6WV4aGkKUJjFQBchrT3pyWDCXvhsrVVT1ktcUoC1kvJpakW444tAbj",
  "key25": "2P2BxGKhNhh4w8QkdQxPS8NAfCkdSypt3c4UvqTc3tdqayjEdStWnr5wkB5z4SgR3nndN5B3C7QFK3nvCaEjRsRg",
  "key26": "FsVUHFJc1oJg8jNXLTANgLZxhZvrZpQxbGJwaWGAxwQF1fGnz1aHF2hwB2LoemJ9y3eXqwGMFfdzsQSKzPhi7fu",
  "key27": "uE4Z7NXBogDcRmZnFHazkptuhUNGh5dWCYnEqeixL3YpaN6QFoyzT5rkFn87KUWmYE8yXmnUeQxwzdg2ZxwVqQf",
  "key28": "5jE4coZww9WhmvLN8qw7PSHt6Es4bVnPRfUKPXxPP1z5DFSqDjPNmXVCMNdoqUX5WZF5kVDQRHFwR8uBZ71HW9hA",
  "key29": "534fG97WjeG2MoUtAwvZiqp5mDJ3DR5hvfgq8ehkMjrthEnrxE3K9aqkeiD9b52qWB1FntP8wfvKDVpy91ZFdvgy",
  "key30": "2UUXkvHphtRaB9eQjPkvRrDEj5fASv6vcJJSxKEdVqvGSXfvRm4VMCCNnvFk9yCBT2dpwZNLEe4FehdimL2apTt7",
  "key31": "23PWttBaWdzzL6wv6oQVXsFCxTVn7mKEzL4PNWNUanYjn4mV2NANDVDK2bWARqjYT49VWHq27CDrxDiy268mNPDJ",
  "key32": "4EGUvAajnhz9CrPchV1kovY2h44ZnEJnxkLXgcR2jLXrwWBzwKCbqDGS5nNQWdzZWP9z9gW7orCPd3DmbW12SNQU",
  "key33": "4p8QutVqCGr5xhBeEj5WnjPu5iEXCWrysRk81c7G8j65erY3a3PXrG96V8YN2qiBs3ot16abn1oqaQqPExDNgijx",
  "key34": "66ZHikgPUBkLTnu7VUA3Rm5h4oLo2BNywZtapzKaQSP5pUKYSySYdpX1NMZCPHYfpMomVdCdpVRzRhmbktZuKtPD",
  "key35": "5ZTeY8oxqS8JLfQywSNETa358eNWhFNKM19EZ4x3Ht2Zz52xpVLMpbkgxLTYrDBQ4L2RwWm9ro71U6SWJGBQc5SF",
  "key36": "5gwqqpwJjjytpjxxYgtruBuLkY2DZqRFbkZfqJpSP391YL4io35nZNP4avsx1dNSpKTD2w2fKZV89xw6njhCBn9N",
  "key37": "3N9gE7VUt64ritrSHxMyaFwLu1G3qSQ5f6MnEUTGwXNE21u5nu2aXPzr68ErDDnz5TRHphQGQz8AjYEN4k5XrWWe",
  "key38": "2avMwNAfY8Ytk16foWnGyLdfYCcFpcdWbHePjM9Ve5MY5xKR7fxjekYtHqAZtcvincdcdKio6P4y1jSM3pjFzuAB",
  "key39": "5kgmgHcqkq7sNZRUH9C2gpTWU6dE2hs1bPq8QQe5hLF23xj4jcntNhvLiWxBNJQVjPPH7niTVqjAqcCersFpZVTR",
  "key40": "4mbPxpzdtrPxARcbLaS8NhgnQbUoN6Wv92UU9bBycUxpPQPsaxK5YSz1DnnSZ3KfxNK2vV6xPcPBRduJh9V4y6Pp",
  "key41": "29FHQRjAjQPQa1KPwHkAabiCcmdXbsQ9wuUYiZJLEVBFJotd6hPsiUnxM4ssTGDF7meZWh7gGYTbcBAyWpFPLosG",
  "key42": "35yYK2V29apg7zJ2mJG45uGoNRD5Caq5uawA7oMwww6tR9dqjxQ3PjTFMXAvVWWepXALQ8dkEXpSmjJqZG5pyvF5",
  "key43": "c99PFpKsktCdednK4afyVFaFVFrJD3kPZ8b4xJa4GeZgXFJxGFd2JoUka6E7kNB9zdRNTyaaLJJW7NVLvYHHxZj"
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
