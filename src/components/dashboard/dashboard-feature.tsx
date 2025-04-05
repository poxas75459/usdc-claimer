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
    "5qmmMuBgoqMSK3KsqndJKUVm2CJ2V63Cwb5xkchVhoZzQgeoJbPH24Zq4VCR3exQeJtQKqQ5e5kxkZB9r2HWcG5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wkf4jnVncu9WLJ9TWofRvF1axTGH6BiCfgoLiG1toeGquKDtmet6RKKR9EEftKS57N1DFyvnPjkbqcSvhLjmCLE",
  "key1": "3Y5WSFR8oen43d1cs1g2NJ7svf3dRY5GV6yTdf9qbjqgaxe6XB3q1WiuRGf7SZh5B8c1Ubu6ERHMwbCgx58WYsMJ",
  "key2": "3uDG3yp5uQYcLEmFuaMKiK91RSUoR945CXyeHqhoCN95EFhJFTXRuCL1EYY8YSp2VrgrMionXjPrDYB3hUKytdB6",
  "key3": "3WQ5bhL545QansPBcLzdrwkSrHdkBVgQnCLufBmiCc5LmSLrFCY8wfVrPGdgSUr6ZfaxGvPXTFfGaAfj1TzVoU5w",
  "key4": "wT2q7otmtps2VJGwFCs2bH7FMfRAcpkKZ4BXvYynAetq9uTzNZ2uYhNndjF1cQqgwqZAZBJnN4KzbULTzzdnqdp",
  "key5": "JsZ3AxpLd8aQxamGDLnBofNcSZ82y2XWCmWig7kdQ4RUkaJBoeoiZZM9ggWXbEhazw3s3bRGfpSNgqj6T2qegKr",
  "key6": "4HnMikuZjLuwMbzt1g1FXAk569vjbcosybtrWfHGQKVwqygynepTgZ3HxKsSVG6SgXfkvemRDF8FuQoBwiNicjyb",
  "key7": "4jNYhGams3k5pK6Az2mtH8CByo8P3sAXE8474R6hk5fgo6TEMjMMLHaWQfcG6NG331rUZ9MRjSTRihHte1CSusGB",
  "key8": "52RyzdrUnKm9YumFCoGfSvfA5GiLNM43StQGX5DWTgwqwwYkxAZU69YXpsi2ysDoqrsxzcMBVZcYhrg4FnKFvzSA",
  "key9": "4WkunwG4h4VRgYmFXDcZsvoM5iMyxJzsYDBVSz99ezk7gRwEQ5djRHWULwsEGbneyNq6bhLPAicUrfb9g347efmf",
  "key10": "2e2L8DHZknC6kD9SfV34o5EXaj48LkzKMUjgTX4GmCmmd9V86o64hPUQKiyBaxApHHUZARtdKjUNcSbLkkkFT7NG",
  "key11": "2BRiUZo4FVb91xodUvfUgs7t7tNiDCJ6NFctxYpqKBnEDGtjzsN68Dr3jEjsj6EyD8qVaE5YRYiRVkrEGA9LH2aj",
  "key12": "66WjAu6x4wovMMB9w6A1fJPCpnwfoUvFvpML7agLZju2PA5vPAizQqr6pzzq3TQt7QhQb3LWxnf2imvEZ8135ci",
  "key13": "4Nm6pJLxMrgp3fnrAVKjUkLMkyX2JJNU9KmDdgxE7XF378aHN6u8ArHqYTPNizGoxW14v7RF26YksJRFrpeM5pe2",
  "key14": "3g8vQxKPGevVGUSSgmc4dKuTxKsFfqEtuVSDwDh8GyjaYkePZU1r2eQXeXC2Chp8efdt66wETdn4ARpcLN7VafWQ",
  "key15": "45J3Wr6pFoy82ASsJQTfSSUVTEYdpGd7FbQrgdAkF5kBGcnFUTgbHZcbo2T4fNhCp1pX8wej8GMLtvFZKSHYM8ge",
  "key16": "3QMcunTvajHd86t9Yq7qxs2RcvZb1zDt9AKmgoZ9fNBXUFGtYNJjTYjvwFo6dp9VtC1gKg3wV6uiYi1mZcb28ymE",
  "key17": "2zYcq9LJ3aqGpbg5i6MoYsVkrjNrbB68njNKwELwDYchueL1Cu2FHUcoPUVSCcPJVWUoPdkEvyECBbcNAac81mM3",
  "key18": "4X3svsCG1vwb8SgjpoQxE2n11b8c9wG4h7xMjvnhQwqmQLHGycsBwBUpMAD8wouBvwaYR9MMDFebAHxLC3ptAxCH",
  "key19": "4FwqhBF7FNS5YfXQjDuDrhLqUMhR3gpJjx5PfwhpTdVBtYRNtygi1K7yor4faGpuLGr1UecG1hhxWo81WYbbcePj",
  "key20": "4E8bGo7NG3hmsEy26aHwVDeqQKjDSa9Uzet6fNbeKvXZ4M78yUV8y4274PxXx4JhajsL6P9mjXeaGAjJBFGmEVy4",
  "key21": "fEkZYYzRCcrjCAjYscfbo4sNLgThXPoZhxY1DyYgjLuwZEctVHxRKWHMxzTykrxaFxvrc1vZNhzYNv1o8hTZtKS",
  "key22": "3zNmvtejvCeeKddwX9r81dwrVVukvCvWsfKCoT5HKRrJmLx7F12W4UD44eybimVcK7dLhzYGj5B8DGjsgUh7yXrH",
  "key23": "LVwxQsdvWDeM6aAqATWPtk8pCT4q2SjSUB6FqFfNsmzwK2djq2PT9pv7KXu1otduYE3LHx62SGQbf7CWFsL6Qpt",
  "key24": "3WFfjGheTs5e1RMLFWqa7piEjMo8GEkcSKrhoNmrwMdeUgsFr5SAmrc8Z9Fb39HQEtWEn7xQoXsagQTXzZVUctbz",
  "key25": "56TvF3wTQaYCaMef3dYWgmrfSSbD7fcV1sYT8RDaG6jZBbEZ9gA9eboygqVndiDpmGR89mWCXdDY46zdGdA4vpEV",
  "key26": "4qD9dvTguFLa7GZFM8nvqbctKCiUize7xc9MeWannzhEpL2VhiJsZBepyuxMoedxi9nsHsW98CvcDn6UZvNznWLb",
  "key27": "5LC5y8Pp37z1jfcPhyZVag9YozTfdB7MSovGvtNNo2tqjifYEoMyyN1HGy2b82aBc7F1gKz7PSXyHSVKcj12UeAV",
  "key28": "2WbxYB9DYPkiPooMr3B8DbaoNrkWF9LeC7nHHPidWXxnQmEPyNsHU1UzncgNRofZnBNph2SVTHDBebBCQnG9QBTK",
  "key29": "WuSZvpZPfYB7wQwPxXJ7GU4WrwroGrYariQkNbhuMk8RzgtUT9aBD9YEbvSC5SDminAtMfn7CYSWAyWGNWDoME8",
  "key30": "27pejvzRFJXYLn51ReFk46X9mPLr4ygecAA361s8WDPbpjW39TrE89Eta2m9hEX2TG2XTETKLEWbDRRRSVN9pWZm",
  "key31": "uLVPWeRAehtxbEFZAdF18YqwTZFqKJZaQ5DZpiDkMrajb46YbFdKDDhQ5i8KY8KG2pXjA6xoxVqAJuRsavkG7db",
  "key32": "2BCUKayh2kXMqSN275hB8whQzshCrMo5ssmj6DJ8EyHwkZSN1sYUM47HN6JoNa7Q9KH3apU5SPRKMVSyYy2p7E8p",
  "key33": "5ognd3a8KvaixCYt29uNmNtge7FaeaGx9ma1RmUy6qMKmiUTnch4sUZFyRkpnU7sQuePndKnBLFAxxCBckSrLzVk",
  "key34": "46nKmnrhyHjaQ88nAUwucrWwypmx8mSz8stz1cpDGzQiVnXCRdfECXEZWGhBK5EmVr28gdtSbzeVrVGLKgQKXdyo",
  "key35": "43QiYkzoVgBrYLvWm7s1tfyPNz6TiECpXGsQAj4MQpaCqjoLdnnwpqWVP9K5V3VfSYiN7pZ5VJsxMri6XG51Bw8Z",
  "key36": "2CoQd38UYE6kQsgWj7aw9pWvjAQYcywvroHw4V1rPdH47bJFbPYzKFGhoqQkfUjsV2oGnmDWk7ahJCGzxmx7EYdN",
  "key37": "31VHqPKZoM8xqXj35SNVGd6tARbKw8f49mLzf96o2kgmRCCwh3wJx6Rdh3X7D7BFo4p39GkzbgCEE5hwhzQHZfBu",
  "key38": "5cL96PAQ1MfCv31B9zwkmKJgQgTt7j38G13GqavoFPdgZ1dja7fD4v1FeqadqLx8YF6kvAz2DYD9uZ9CHAQFKxQK"
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
