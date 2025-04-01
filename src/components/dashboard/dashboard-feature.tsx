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
    "4ktjKihBPzvfJbwHh2uGumCQTkmxg9YPsxTkxxaNMkLG8UpMXGyVdfmqTwk9LaWXYEwTvC7BdQMBFDRf8kXb5Uzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P8hj32J7Cygmtw6iam52RFhMdHKfKxdGkLJaHWvm4NUzqHceFXVyEtsECp3nv2FK7ewBCpexqb89DHmZHom75Dy",
  "key1": "5G4Lxu8Dz9WeVc6zGcuugmjdmxr5UtSCbfRwsEb7rJbsHtW63vzFNJiRBY7FN8wctY8nvJWWm21XaCufkTscE5tD",
  "key2": "26uxQKE2JDuhRdqoW3JzvCdugwMaVTnVbTmtazeGwbnFJwH4muHyu6dveoB8g8me7a9MZZUb3dcsNVytkvppVmn4",
  "key3": "Y2TjW287T2cfwBTxAn8u8qG1GPbBPfjbxeoJvPp9ocMYugJuYTqDP2v8YAPCnUfwEhKTzmRNkn1BrD6dNFWhh11",
  "key4": "5AqmLz1nb3VUB938bB8cCSZqoiFrWhhpGK1hSUZrKGTY8ERycXmfuCv8jwbKPqk1zZNxVDBzaaiKgrxN1dKoZCpj",
  "key5": "5yTrRfVBiCVDMumhfTPcRmrCgQxVBwFimnVmqqWYw4h9uPjKKpLX99yhAuXaLQq1Vb979YLtcANuVhGoScANpeSu",
  "key6": "22gn3UVnXdcKjjLMRNMy8K4yqWTnWvjQy25Nenp4HHfyCps7Np9pyhLtgs1HDbFTEqLoTCZSumSGmK3WYmcYY3Z3",
  "key7": "4tyDHfY5ZhNrWE5XQbVEsk7TJQF2cWQEhwnhG5fmFVdwVMzpBWkKhxDxLYLZcGWaDCESdVdQ6tEkocdPg2n35BUm",
  "key8": "8yLEcdJRZWgQV7ZrcneshPNDidwP2pFZq4j3a6yrVC5zEdwhh2EyrE2cmsVBGQ3Uv2FLBsCpWzoeRyahVAxNoe2",
  "key9": "3VVEUeK7U9MoboPDDZojKkXeVTgdLEo4zCp9GJuxaGLLsWf5kx7u1ifdmRadEXDvDWjeZzo9LHwxLSVMpaBNQ12W",
  "key10": "4ts3Jeva1HpemWtSEPeDjFCQUoj6GX7FkV5ufEy3QsSsVLZendnN9pprh6T7CTm69zrvLo8yGBHgWN85act2gC7L",
  "key11": "2EgzKJdwFvuSvoHeb42dwJxFuqGN5Z367HehK8VhkXjBFGycPHGjybpw2CkBeHW8YZavTZRBeDZzkH7z6c8d6iaT",
  "key12": "59jFr81jUQTLGfBFpqUF9JU5LVUPGFhNAPVqruZwabJNwgLED3dugqK7zNC25MmQnG5T6NaJ9wWdxgNn8kGZHuFp",
  "key13": "5XEnbsyPifjHoPYwDrbp571DmLt4GmsgPy6dUAR5dqyWJiB4bHj2m8taxzksQpQUkRnuh1VjVA6DTL4xbNELuPbz",
  "key14": "5wKPmG2ZEGdFoAkDbW6m7XFoVgf7qb4pQNz3981exGNS9p8SSpeiFCd2i6ta8KGFMpPgSLt6B2D6xvanstJ9Mezo",
  "key15": "2Lb6dSp1dgxyAgumQERkpQsDguhQiPHV517HH5QLuxxB5heWyef127ScSoASdR3511Uwe9GATUNQzHoDez5rLt8",
  "key16": "4oTaTxZKSpZrSFEjmzmkdnT3PcYbNPF2mRRnAoZfW8ppNKR1c5UAUovjoHLEy6nqSvcEbRGxSRjHn21j2KzMeqWL",
  "key17": "TrcUCyCGcNHVUvgaCtimjo4ahVJgf3muysa6LfkBRNwSo8DQRynyzJMPwxL8veQ66qTpcFnbhy6ZkwPfoLpNzGY",
  "key18": "2eTtdACfZQjnUZmKzPTSmznciQR9QNdq3B6RR6SFdd499jBc5qhchp5BQJvf8FuscCVRwrqFsyA2pgzGDjnNkday",
  "key19": "3XvjG1YmW22bZBCp4J3ehqdSFohaJAVvaBVahzjac81wwMfF2FRLHAWDB45h9X8pLb1MYP2zEizwa8DYMbQdN4De",
  "key20": "fLswMqGBdomdJ5teRfGsDAhCQWL2m3ji1wo9yx9HJrbQTmSxKvL2PjUYbPCHPMAwU9UhR5YQcigDPuEd9YX85ye",
  "key21": "4iT5TurKjgzzJrjgcir4rTEbbuxTrdSqsJxyt3HmvxdyK4sPcDSAGuJzpnwpn1d3Ccs1gtJwBeFqJjaMEdKLLJYU",
  "key22": "D3L2gHkks9SfmTyLgb7FphFuwiFQBXJWAzqY57SmuTQrc4nMc6tekUFa751tHA7CgkNMb1ZGiczrgV7CAe6phwM",
  "key23": "5ynBWSUoEbeJ7RdD8ckgGxaBCmJAKRxAL1YKCqAgd4d6Jd6DQoToMMRjmTXKqP6ykfy41df7XwziWSm4vQXzMJAS",
  "key24": "2RSbS8FfdeuTU8zqGiDZn5tFgvY2a7EAn5Aou1xtySH79onmPs1x3vE9hN899DtTTrzwRvue5kPxoxgkyDySAeSu",
  "key25": "3CsaMWYxJwfoyfVoxtDux3ZMmkrUVvb7C5PeG8uN4F3YPx8XSvkF9Na6ixjmxgKND7HAS2XSSsdQvL1DJG1J2fDu",
  "key26": "26PX1HvqASdA2XkqXFL1QkeLG4Lm5T5v2jrZFbS74mSdMNo3qGxMjFugygwtZ5ausrbgKhuFxzjmwuDtZkRDLNok",
  "key27": "3bCnWxi5MjvJdPnxRUfHupz5e9znsDcXCJYFc8sqHvhy57UNUKobHkBPeDoLxFgfRue7bmSkZtyMB7Ajio7784Zd",
  "key28": "4hbUrc8GbGDJofUFu5V1K9RAN9NTTedVrpKRXgzmYnPos6TS2k54jFnv9RJMEx4wP7ePXHPe1brRLz2CY5zVoC32",
  "key29": "2niX1HZkNYDUPY8NnYN98vPD7VZbLtyCwNHjZwntXer8DjjA5fBArz9mdfMaWw2t66pT1vWsgTudjTTkYB6KJDyi",
  "key30": "qqd6eKmozz1eVW48uJ2qJzKdZTvnb9qjqPZxWbt7bQjXpTpYKREZfGcGA5ygaAnKH8Bmxqd4hFeqxexU9GqRQcj",
  "key31": "378vzu9QFBXVq3okKNieC3WSVKA1wDDbijH1L4JbynjzwuixQVnyDGT2Qh6479DmtKVvAv7vgSaZpUEPxCophqbB",
  "key32": "54HxY8YKSJyGxcuGzgkTXyvoNFTKvBhJi7EEeymp9ZqdHpcK2cxVuG9WgJwsAs14wj6z34dFJ66758d3vFijGgTQ",
  "key33": "2q6bVAtofNmr9AhyP2cbhULvtiRZEaej7u1p57TEv2XWQjd3UbVWoF7YjeLGZTNhFjtoKZpSQYysoyLCcTa6NSTJ",
  "key34": "3r3tDwdyTZXZtFhjVq7ZVQ8KZ8g8iGcjCjSzg6kAqge8gkQBpHM2bkJLiThAQEdmFb3Fqh3y8dEzNcPci6N99QrV",
  "key35": "3H43f9TY3QDXu4unyfmPHV1N4N5aFF3hMQ5FmESZ1xknV457psEDpgV8Q7gEs5tKQzXDqdDn2qdw66KHij78Ztbr",
  "key36": "3j7Vq2RAwyjRrHgu4eWCfQfKU2JVJFQbqwcgXLPxzLLWf92UtNoUHETrCRAYQPEuTa5Uini7Ru6WGhRuqaLjYqc5"
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
