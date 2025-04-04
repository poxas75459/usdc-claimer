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
    "5iGxyDwzrBMbwjBgtsDk3CzTHgLLbjhekwS1doujeGGcfe6F9QJBH65vP8EdsHpN18fD8e63w5huP9bZB7bMYMyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bQ7aKDswUQH9F9zWDJGbvuR4nhZko7Z9DU2WA2sRqvm3kHxgrimM5gZAMnJXaG6dLb4oE1LFSdGCa93t2ZgcE5W",
  "key1": "2JFZaoX8UrHTsUQSLnnw8mCLT8FspTPxyHbWD9XY4udy8JeqX5iP2kvVxfyp5jkZj2omRk5wFTSsizZtSHriDY3e",
  "key2": "TgdWdeALbwWoitd65UmfTzkeRBF4fN6eqwg2iZytHSaaNswuAZP35iwLsxv4HADM5EThAGxj2HTSu4mZZsyLU8w",
  "key3": "3KqXDLieRfDVrkzYnqyZumzdzQfoJp484uvWJ7YtAckpZq4zmj3Te6foZFPtYKUf2qwejRvvEm2nqWr5DhoTMN4U",
  "key4": "ghyP4PrBf975TKfreaVQ6vf26C18KZuLi2stUnMXDXAkhvqgK83aayWDzceRfN2iwL5MPqKm5HMZbhyztJg4rjt",
  "key5": "2woAiTxut1EWYGwcWSzEyPsjAaJMeeuGjCw1rBELiEeUnPVgz5f645D1X29XNJsRnEUWcqV8njMnQnKAx9qaw254",
  "key6": "63EQLhLUmjWnrX8gkLpFgvufCuLVrfjMLqTcAhmYP9yQLomdyctFyhrqeRK4c8f4AJwrtxhJ76PC8Zn5DdMnAU7C",
  "key7": "5Hck4PvomGYTkgZTwwHSBzDdxBUbViMbEtDRDDQ8FyjBq99g5NZQvShb66Soifbux13c2Ft6CSGKUJoVL634g9PY",
  "key8": "5PiamdQeqEVHQDD2RP5dqPFQMRm2TwLK6B7Q39mC4b1yegRH53Go1aiBhLdvSrsKACmBwdWw7RnKdwcjELujWizi",
  "key9": "2Eh6atwtPvPpjiKLG5ePDeJd93naVsLwC6Pp8tobrnTLnPKQE3dE2qVWxQDV2TnnLP36UCnWB9qUnVRSMuR2CfrH",
  "key10": "3d8ZdaRmorD54YV7VsMGqJxmsP6w84PWNwcmGkBDRQrwqua4ABxbpxdgtVjzE4YMSAqGfKz6qbTtiG63YCDzkAxT",
  "key11": "2KBkYSP3ezjP73dZgprDZHJimXj1ZKXvefuzVjCBsLkmumEEkbsvnFnmMffEa7EnLxGcH69A7F8CSpaaoauSpMmU",
  "key12": "3951AAKtqDti7tDQaCxBc797vQneMwrquSuZqQqcXAuRHQuNr7rYVudVzkpTZ1BMjht4kLePFkgWsa5evVxwpdQ8",
  "key13": "62DhduqtHhKEgJwCqvRDWS3GULGZVzFk634xxuWCHv5Z21D67Nubg6SeRsH2x5XdikaPVEGPAs6dTp52rCPwRcET",
  "key14": "5wajcroDDDevR6ijhaG7qiPqp3RtnyqYwYoV3yCNSMfF4tCr1S1R8vTLcDWcMh4cgLaRKfjxx6m87W82NFssp7YU",
  "key15": "4Kd8NXshthVsG4tK2qRqXMKLtp3333NB9BoL36aUrk4KU4P5p8a9m43XqxkgyA9WfZbFDaWWLF2wAy9ncu5bjwYG",
  "key16": "3SuwDGEbjRmRq779QC44FtPfJ69UBqDzYPPYbu5SLDu4N7VsRu6rQrVyEgnQdt5Wfe7nDxgKKvYiA3WnUL79Td88",
  "key17": "23MaEu6w3wyeAycxi5VsNHEGcnwa89XHsYRY8SiWLic9M3es1Dutd5fPbnf2QNczUi9JC9w6xVrNCwKiesMYCgh7",
  "key18": "NbQDZmtzJYzPFrJs7JRuz7vKBZUmX2M2e1XQ1riNPhmg5zmor8FRJa94TpEGdkRyiFqd59B8PKR2yCdQnJAFZNz",
  "key19": "5uuhgYwuZAsMsdHgCfepUq5i55W3F8zvTTnxiqPcVgC4FjrQ3t3gpMxuGyu9Xq3k6qdbJ16CZu75aw6tkzdG5oS",
  "key20": "67niMtvZ9RkNCDKHLh6kzH33CraAxstHJPKpVsLkkZ7GqpsDfygeypJ9iWipExswuFo1D2VpFsyHkeVqq3nVY6Rk",
  "key21": "LD7g7QAUZpU7BveArviWUaap2ZNwb49cVzfsPr1LRH3d1gqYLdQFSo6NU96PcewGCZUeizjkJSHGH2ySWP2gGc5",
  "key22": "2R1pwdsXK2JwjDjojtMxjSbJW3Fg3nX3NQARKb8JLafzGM8j6qaeNnvw1pvroBUaExRuSUDbyAEEDxEDexcr9bvP",
  "key23": "4K5on8p7H4Tm5pxPXwpxABeQ7azpENicEWkhjYezC7ZvVtiahFZy5kMDNs6zefhxHNejCp2kcHoA1UHyPDDvKoYj",
  "key24": "26mMZigD5AtTBiSQ3gXSHHvYgGPcmZKf2SZhBfTyshkMSjtVtrprSbT9qKmQSau7hZFoPt2vrgqqRd6eUwTDXiC8",
  "key25": "2c5qQXS1kHKdLoC6gTVBogm9yky3rc6vfTsJk8VmnvVkZ4umC4BUnvGK2eFuzB9pbk47sL4kJ5ncwWeocjE7FZYr",
  "key26": "2CYPgaX6y6iMzRwa5md6Vp9Bv2A4d6EpkFUbbheaq9ro6eohQ2bcgx3Nyu5nzkUUH4trABSbLfsKgMEY2JkrSopq",
  "key27": "2Dv4diFkbSfXSAkKJjYRJWW6N7QMYDyomjXCsBX7aiMiJUNgtWn1p6j6cRWzs6Ue1PoPYp7kZAigvPjbDga7vXcH",
  "key28": "37v4QTRV8CJPGjnvFeYbNXsDPdiFNh6WhkMompzxH77TSfZEmYRpdow3qp22PED6QqVrhaMXrym4uyi3k5Lz2HuE",
  "key29": "4aUuoQZduP892dKyL8XMM5beK1Z991ruxr5f7DoM83ZDsvzCfk1jWiLjhJKrXQF3fWgY8arqNnLZT7ABxNcKzBZ3",
  "key30": "3RHaVr992yq6J6LE2t5DThvbuKcKYjHnuRww6t6yfpEXTi53YDnWzze26zvMMSxUWCCcA2z67KXGb9PiSfwmrKHE",
  "key31": "4iWfftA2XECwYBXaJG4JV8hxvBan24DJxTJ4wwFxZt3p8yWVvyFXrhdPNs65SkJBP7Rz1heifwcacbQ38K8XxGDQ",
  "key32": "4zJ5kiyE4tag488tEHKM7Zy28iNDQovgGPfvp6AN4jgEk4rsfakcoPcVWopeTXkg4i7qsCesgcTxSQFCgdAdXJ54",
  "key33": "3BnofWyoGn1rTsenq6wyYUR2HenbvNAeXVX3jx9ugcFK3HDauehv1NxH1bU67iXj54LDGvfhnLWDnvUQhV3Fj8DU",
  "key34": "5vuy2eajPeQJ69s2rXLetmrRGGczE7XJKeccpCkB2TsUW7e53yTkAzBz7zHYnw2QHxCq3Lm7eekMsVxsi94RQsb6",
  "key35": "2mADPJFFmamjioDygjcNQubaJuZQxNPvu4ZKQtFfCxnRU7n98gzBVq9kwXXhjp7tNg1V6BdCufdbmkFR2Uva1PKR",
  "key36": "WkzPyLTTgdRK93ZvMV9ttQ1SfhEo6pAha1Q5HJzTekTqSxgqUh4vqUpQuRew1AufhppBg5swH6fj4wumz7z4KYH",
  "key37": "24EoRnFEwpXiLvfzJV1MMWW17p36NsfDzyUb8oaHQZRo6GqDdafnfNXQvFHPQKXPFJD2Wn7kKUEyoDzcQst5K4Sw",
  "key38": "3S8JqenygoNEyR5JDNmKs6xVZcXNSJW1GeW7RDdMHnT7WoA33JUqEFkoK6bJJrhHH6XxeUyYEZ8xLbByDxEtzLXp",
  "key39": "3cDDUGDCQL8j2mnt5pYzmyQge8GaRvajjFn6xtN3E3ZqcFzZYW5gTHE3UppnMPJUzt2G8pneSSW6AX67AZr9YBkU",
  "key40": "5xqTbvbBLiwKJzjfvfeUmxC8WfuE5fktrRmBPyToZ67XBRaCzsZVN4s8X9u7Rb6u4z2e9XqDiMXE6794YCHcgLtf",
  "key41": "5TLxxYZ8A7sVaY5FiEubvN7MyeTR6aMM4PDCV5vBuZHquPNc9MNTtADvFLS3XwE4wnoQDZLeVhRGM8qhUQHo6gtF",
  "key42": "uM1L2axqEMedp2bNAVq47fp99aC6tvWokQdo4dVyvRR2xT1xjvjmtKGw4oZDart4yEiR6cXdTXMikQZ2wnw3PX8",
  "key43": "35D7TeN24b9vU369tAYk44Uc5aAnPk95wHVSGn3GBrXWpm42Kvj88EyLU7p54t4623VTdip8K7ERW9KX2PtzXWwV",
  "key44": "51cZAceEv6q5bLuu5y81q5Jm4jF1T1LsVxxkex5rKVdr2NaXh99w4DnHyxeA3zCKyzGcadvCnzsQ68vyiBdJxCCg",
  "key45": "5PSMGBZwYtwjtHLcQwXPfmbQY8N5YUcTm2QBj12xeZ2xSFEgJmfVcvNfBvNjZUJLBRDDsQZoieT5JbRcyuuThuko",
  "key46": "2qirB761vmXoJS4kqJT9AFEWk32XGVNjhHiVNKdnhQkwveSAbWuTSmn1mCMbmamCCZyC9xSNnVwsFy8f89BaB12y"
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
