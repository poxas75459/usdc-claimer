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
    "Qux9fry1WTtnQ411cugYgEcgbiThqy59YHXfoA7wAj8VGppvYXb6DggM6PY87H4229AAxZZnWjPXyUJMegUNdb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aCzs5poKqCaVjhLznm3dL2LnpsqaBAqMeiY6VQMpqEdkzrF57uarkmHqEoZLun8SMUtjR3ooGoWnDHqzpqjbMWE",
  "key1": "51Xs5XbeWput1vUN6fV8DL9rn7DNz4kCJi7LNr1xmkvq9aVG9uDU2UUHPEAdFLvHkvP1zYEPB27ChDhi7Nchzfvu",
  "key2": "5Rofsfh8zK5RkoMxqK3FrRwMLv9Dbthuts84ECazMmNkmkVq3rQfCmhdqwCQSezpuzS8SB9dyXWUTseGBLhfjv4X",
  "key3": "emTgRrKUJJi3QWDVjZYRakKwLEfydxTWTP1k9925372jfedQw6gebuWQWoFYVicA2j3U62usAnmrrb9UM1BuZCS",
  "key4": "4MnG97hAP5wMAgAokTUB8ar2o6QKpaDYKECGtyYRW1jbTEeQPxgXZcu4Qid1rNQwrpHE4T1CCmd9KU8rEVq51Z79",
  "key5": "YDhoB3uZhP2WYXcNSW9FyvYCxH5kupkyQLozKn9foVUE2zm4u3QPKRAYo6hkixP2FunCWwpNSC3QJoEcs9xjte2",
  "key6": "am8kCPDT6irR2X7egehQZK1BKtHc5cyxVTaTVsb1pKKRNWSvajiuHSdjKpv4Gz5e5ZpHfjRZYUaeabTxfDbqjcZ",
  "key7": "2bhTrSp8hEvXtHGU5A9HPGi6mMNpnArVzcV7nxuRLq7Z6ctY5YZvAvxPZEU6RDZj3dLEVoGkqNxsqM34VQUf5N2u",
  "key8": "2crHfyRjiwb3Qw1w4oyDVTtxaG55HX2CWya8ZqUHPTuDparHBcwoDaebA858nKabtihG2UnTXeaovCzEvpUnWTAv",
  "key9": "3bAAPMgpYpz3RdCDkgc6ZXeJoCvwStRytQy3N4dDLm2tQ71Kp5CAQHtXEAAq2y7FXLw7HvsReJWYK5airwEfLDmQ",
  "key10": "vjSwoUdNwK3H56F5thgZuc9kpZpmUYMiAQekFMNAsmKmxNhQuAc1NuhNhfsryKYT53FRJ8EGEsu3SjgsKwSg8Qq",
  "key11": "44ezKn1mH4GrMZTxMDWZsErxQwTz79KAKFqk19SDp13X5x82EYftTBJ6BxdaxXq24ofYUzbJx1UWmnde7MhJPUA",
  "key12": "3i3wUumyVX5JYUaHBq1TqwFMb4qCR4YFsjhaPcNyuBTb8Gxaw5C1DMHdtwVCGFFxFAgGjc2wXnMWRrQ9otrtjqKw",
  "key13": "4NjwGz8QcDMEW7hNeoQ3fCPg8HqNcqaoAYxbhW9aWiUeXwLUDMsGi1NdS1qKDcxV1n89DiMfPJ2TSvB4jtEK1TiY",
  "key14": "2bzjK1DX5dZ51nG2g1mvwP4RDBKmJY9xp3MmcLnzetSCpNJtfsUqAerDknz5LoFuivFr28zaS7v6FxeVqoNbLwUf",
  "key15": "5HzqAWdvRigGX3fzEH4M6eT6G5mH3jcQagtsGUgtX7qmH35dhAFX7PmEfcgnvkMxD7gDmz6fbirC4yjLArDqhUyb",
  "key16": "5SwYqfiZEB5avTjwdKUYcEhXrg6cjd4V2CskcaVbFzp7p9Qtia4CSRT6kj7izGZPBY17ZJcLW8yWhb6TtYR7ukrd",
  "key17": "oCcEHpLUg4WqzGRFKt9n4UjaYCer1DFgN3y8fQgm3aMVy2W4r7sd5U45sRAUStq55L6dNfQ8xEgjwYf1nQ5HNsr",
  "key18": "3eYRKj84ru7yxUP8uqtLfpBfu7uRLQDqfFxCxKg2gyd8JbexLqUasY2xK9Xwigy33Gm9UgYzQ2j4pg3C7UgMT2qP",
  "key19": "3AHsvrbVdKAHnzQMfMqYiNhmWDjhWHhykTQMhtfriZwjDgb9rR3mK9U8pyQmYbWpwGjBHRTenpDkh9q43HXWgp8K",
  "key20": "43f2JoajZAbvxHEdvtExA739JSETGJsjn4DgLnJbyhLWxH41GGhf3Ur8C7Tkh7cp1QjUsDKybbJ6WLV3gH3SCkSa",
  "key21": "CTP1C35AgcDixx3dYHBW4t5XAWLcFjqq8jiPeJogBpyXuDe8qBEctXceEuuJojnccUjofLYuWomyJxJ31w6prZp",
  "key22": "4NJuEbC7SegRDpLbvfuWm3dPTkMZkTJgYJVF4v69mBX1QL7hcMgk8EfS4664UzUokLpKKiAvm1GgBAMDEFVxr1rF",
  "key23": "492bnnyWrmrdpkakiuHMLV5xXSDFaeQxQHjCNyAYwofm5FcSDUMNeBhdjfk1d1iR4nJe2YbxRGnruZoJWYQEcZyN",
  "key24": "4X8wXCVcXoMbRduAV6SydcBZJdm32qaUNv1kB93XgMfAAJpMAe5XSz59krfTH7eS7x7qqPUJZGf19fBMLo8HGV1N",
  "key25": "447sts5R3D3WhuyCeQQ2hrL2jJpFmYnegHGuEr58TDt7EEUaZHf4maJnRiCi7p7MYcvWSuX9i6jqGEyShn6yohnn",
  "key26": "5v95MpowHeshCgeF952bembtxRppBWFwhYK3WSEbwXrMJtYS1sbeWRrE7HSrMxh7XMvYaWG9BZWem3Wc76p2sCkx",
  "key27": "3ngkrwohS58nu2wte2x7G1GAsKRN623uWCkuaJttBpTJe1dcebAbsLThGeBqARY5qBSHZP4WChsLwr3B6QE29eEF",
  "key28": "4ZDnZMr6JpCGemTuwApJmeyASPZQaZfQPtN7QjanabdtRpXsimYXgb7nSdxgtoyZMEoEUQv8RwAF4W9k5RykWxV4",
  "key29": "3ztHdfh889esq1jXk8WMKBHnrgppLrhbHYXafHRwwh8K8CSF95m8wqSugeeiZS5Ehaduv4yFvGQnemRZmsem7aLM",
  "key30": "4ob6aaDmC3Zn7HYaJu6AtCjozY9wqAAv761HfBXLSZBYvkmfMpphMuvvAGcd2WW3TyhiKqBywFPXP4EuSJzJq5yH",
  "key31": "2gzTi22FoSX3ypKob9RviPQPF6gmZx75AYX9Xk6a5AxiDGpvBbMBWaMY556UiQLSVes7q1draKujNZvHtqwJePa",
  "key32": "5Q5ri3prtL5dwviogHbq3d1tkadstc7k74X9kc9BAzuaVZdE5ZEGJAzNPEApxbUpamDrGvBJkT5azU1p8J7KVfrs",
  "key33": "5U8udRsCdMc7gg4EEKsEfP9XzgNWSQwWix84LaLdWfcNu6vZ8WXfhNuNQsRuHVHoJbySNUzsBYFqPr5yp6SRAeVL",
  "key34": "p5D6v1xCQ9LMpgtcfoZzpwE8NMuE2vNGPRjCCvhQ7pyhMqgKDJwWkn2LUsc4HESRNhdY6Zq14sPD37Gp8meFXLP",
  "key35": "3cZtFXtKUu1XnpgE4kdwePyE5by3i1ju7yQwtEbe1DnHWMUAyK2N7TNodjPFMzxQ5HGa7Z24nH4acZD1PEPDmztk",
  "key36": "3EaDyofyXgrpSD11t9VqqGrBWvK9UfP2EPK7GkCwz21KaWgMH7VdL6nehSgckaqFwFZhGahQ3AAAoq2fGfSvheJ5",
  "key37": "2U4fCLYMYAHXPAKUAGheALRjdzAWuvukLgjJokxLim7Sz41k9ii2cdzuZitDenAMaj5jRaxe4UXf8iVRJ2oPDJrk"
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
