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
    "3b1gyLteUkboLDR6mBXtyS9wpy3enZtBn1kPfRusEk96MAcUDoiNzGKgrko99pg7PtN4s5BXem4Rzucm5XQeBaRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yy5HrTTCyqfz4ncYuFPYMEbxSebkSqxY4pmRT77CPrG9uFBo1xAtK8pVGQ1tHBJE3aT2taChdEzYg5MdLRteSui",
  "key1": "3kiTM7N2QhE1NSqFmdz7RTt7f1umgkwPKsvDAjxoqSGsnugYPGenkTBfMxpAm3csNRDEVYHpsmqwhuN7PbACCF57",
  "key2": "4cAHXDA6gjibfJUztT1N1CFWo7xLE5Lcptepv6njuh8Ldq45K4o8ouDkD56zsstiVFwNYvma7HHjMm7P72g2Bc6r",
  "key3": "5DyxRAR8bMMGKiPLnZizpGY5hturYDWZ73w9iXMr5j4HyFUsvKHLJsJV6PMtGyRoL8QapYjTZ6f3VBZvZ2m9o3qY",
  "key4": "3KdSqXJ7qSr9EphgdbEAJj6iQienHv2eU7CXfhQeh6KtNc7gHuaLNcJMh2cAkX262h3Z7DmKkXZcrSHUf6dV9LA2",
  "key5": "4EZM7mWhpFa9QYZUnXw6rXpiSi78LUjJ4Swr4fx3WvBhKs6JJGyvrEbQDBZZ3e28E2CSAsqATn1S7Ln2D6nt6u9R",
  "key6": "4mBfoBBTnweANeHnpgYTKKf7rwY3RdWvEQDJJvTMKSrLdgvgao6HvkUyv5UsXpajGrJjdXJGW9bzu33fTx4H2FMw",
  "key7": "2yRpR8DtfhTbwrBso1bZc7LF9NvHdZTtyH9jmAHyF3YwJAnxBfKvmZTK8xpFEadzYGDRuLJ2hKFEG8xY5uk43esx",
  "key8": "5hieUEE5XWSMEWszL3EKDfojiSxEu63fFZdVxHBTZbeh3U7gk3UH9bqbbcP8BrRQFsgbqsGjH4KCABzeunW2GrDR",
  "key9": "2T1H83x23JMgkQDQPpZ126RXHAUND3NtXYohYuG6Kzrnbmq8uedYezDFSyaff3hUVvyCTiuX7jVCKFANeGrtZ53e",
  "key10": "2Z6Fuf4jQV85iEVKRux3LbYxS7kpW23dUoLZ28sBzhwauSiAKExN2kFXtC2CE1zYAtBdK4zBWVZJYTvRhrfaHhvD",
  "key11": "MXLoko5Bx1RJp7S73satWsuTMMdD9LyV5YXoAJTjR1KdrwV8zpCnG8sECrQ1fduDhSBwseE2CThR94JYm7311CK",
  "key12": "3gAoEiSHLvQp1uSU25Gyt1YqjbKpswEVN3bTNC6gobrPHBCok3e4EkTvLM1S99ctoA7Fe8CfnmSnTdK2XmWtvunR",
  "key13": "3AXDjuVuoVUWwJVi55zd7EtLsCGStXYtY4CjJao65t6y16JkTj9M5J83hF2egruh32GnoXkTgxk7qDRnKg3odUMa",
  "key14": "2kWbNM3Rwt9HpKKy4dxWSPmCDCPF1QJaSb8yVpiHotV2rBrwqNspYtqM5YRgRYxsq2ZzFxL9cDnaMntG1p8jCLhf",
  "key15": "5gCbqEq8tpNdVjSbjHvn89irXQhPefVT9NKsJQpBTKjRf7uTCtRd9YReWT2WNHk9bWWstcN7Jkyco3Js1uRfFTxq",
  "key16": "49CUFnqQAhftbpGvdMRVCTcYyv2MJgJRP7W8SfHkiUg3TAUnat4QVUL41ro4CH6CLfg9WtSh8CUDTQ3CfeeCg5Ns",
  "key17": "3hgXoVvWraoQYrE3Vrwnt9BK42R8Kjwrm7KgHuHJwQf24tKBVXiV6D5YFFA9sxo8draXsKPpmC7P5QfgZyFUDbH8",
  "key18": "2pr4xbASEALygf6ALveHfGmMkp1BGY1oSEF5WRsrLqwWQ2WYNpfkpEZ4qjTPajXB2eZpG2cnCDiCUQ3T12vNyHZe",
  "key19": "2BvZhYPMaP97Lm8NdD5LAYVpHNRsFLZ4uWn6B98dsMo8KREZnADrsfUfscHgYcVoA4NH4ddL49eU8rBK7C5rsS4X",
  "key20": "zxM3XEGR88tDVmMM3F8dy3RjwUqvAYcWRi5iQm13gbhsnvx44uoCNPg7oAih8y1KR2Ps7BosZTHVYnQEY82jSoz",
  "key21": "ydMCLvf5MdyAUKkhgn3HUoLBAYnbVthyue1XwANAibLwLLFtPmqjKHQcELfQvFnCwEVYys4VX52rZKhfXJu97eG",
  "key22": "JtL2Ww61ywNjvcmJknw2FoTYbTvnkxSQGt2NmSQkbwpg1vqstficSY8SrTKqhY9FJow4HEJpfp7VJ7jdhPy7e3A",
  "key23": "52FNN2iM3KSJirQeZcGrcro6c2JyeWEY42wxxW656mcxLTaJeVB7QqzTqmDGhYimQZXriErW31HRLR9ibGYeZK4V",
  "key24": "pb6rTE8DNwkmakbG5DREpEUQM2bkMyBt3iU3GpZBMUXQuHd6R2pFGSdkhxZzNQd5uqMrC8tsHihCkCn2zvRrhkN",
  "key25": "3ihLF88Tdvpe23PBgZhxVZULzX7S3FTum37kVuJAFebkhP4Y5LAWNyWncrbtVbVWWwJqJ7ZSnepjcj1pTH1sgEdE",
  "key26": "MsA6tHaKx28ZWU4YQHxKRnyaG7svAsMo626aodie4p3BvH3x13DsPeQWeeRKcRNJ9bp3tBvjr8T7bA7k9irfwdh",
  "key27": "4LZiRGK4NHk2hmSzPhxgd66tEk7ByQJxGCMats8S9DggysefoQXGV8PsiQiSLrzMyvugbwrF3Zwvri4Xie26PFnK",
  "key28": "52tadYgcxAh5yFMQmd6H9KNN9HWaRJ73w9yiEDGWF1oB5VbDiPLoX9MqdMft2ufhAH3exVqz6qzwbCxjPMdWy6fj",
  "key29": "uAB5YxgeABz4GddpEgrWKzWPsHVrAQWWUKLAv5SCWfU2zqN2EyUtk217r7LoroxD1vcSHcg9x2ZYJQrp1xXYJo2",
  "key30": "BjACZ5nTXuxcM8rNeajeCc9iZkLftWsenzT9usmJqrkSgQxxskAQwQoazvkUqyJ3euKSiEHsGM7nwXVvRm5y6ot",
  "key31": "52WTVuadYkGvUvYbfJTWFkZXsZ8hJR1VoQkdruCWLqnRG7xptxztzviNXPAZHBRrjojiUmtRkPUrpFuFuo8qRZkJ",
  "key32": "2z3hSq79YK5qUK4ddzsXqX4TevXtdb4aVKBt7vx7YdkGjj7dhmMb3oUKr2KtNiqegS77EFRZRdNQX3rKoVxQL75M",
  "key33": "2hQB9jHVvNGuWzwcjgVX39e3oQDVRaRACbMeUcQwr7aami5sdQ1i5jJVm3YgdbNNTk1Nad9fncvrHMfALH9scWwQ",
  "key34": "5LmJQFeoGuw1q9y7P36KC9NA9b7j2FH1Z8WrjJcNcjK6Lu7EoqsBwdQpvdLS5JojFuEeez2a7CRmr94XHdqFfpPM",
  "key35": "42ioFW5k6Q12wFD2TYGKaVaGSfGAfkCWbgaxZCGcHWfx2vZsfYpBj2mJ6u4ZBz74FhpWGVPJhKBVGeQQXJHEYu8Q",
  "key36": "49mo9GjhrMc9uZXbepmM8e1et8zgerBX9ac2s2XMTmrbfiCoubQfQvA7eJzQTxP2FBJfsT6De1jfwPYfZvuUr8Vi",
  "key37": "DNui7KJAvi6v5cu3DYhKFc8VrzXZa4VpwnxWw731kLykzrw1PKXZkuSNEuLo2ieg1oyfSuQZLzSiViT5EVvhCE7",
  "key38": "5HHiaZzawQjjPj3HdU6DX7yfwvGSax1u3roDTmbPKSoexbP9jVqXuxi2kT5LRcqYvKoJhnfEKgbBtBPRv3khYSLt"
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
