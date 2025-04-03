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
    "3BnmZueUgH7nuqyhX9xAzyKU8sxL61wSGNgWWMN8MwaDs8ovuNGZYdwAf38Ddzp3CyEuRENcKgpgCA6ZZKcbZDx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tCexBuuMqUXpoLXLfdLLMfajuFeTMvX4VnWH91dF4ajqobmjgPugwwSsiiH1HfdThDEuaweMcHM2ESqoR3kNA1Q",
  "key1": "2FPoL6PntjDvPtaJrWgAXGCFmRYJuyaCVQoMCwLYPCWcNJ2by1Ysy3XR3iJWNWatBgpBVio1QVmQcxLpBzF9kRoC",
  "key2": "5MtFKXoZvaQZZSE4dfQBVtwqxSFdNXHHXdBgp67Ez1J9jiZVnz2TPatpAmeeNYXVkTSfYtbr7tZQfYx5UUhhao9G",
  "key3": "2FdMMc2kJBhhQ5VmC6B5msrzLvhRkQhiZqeZrNBUabagwED2DjCT2WHa69cZzZBbykrYWfDvekN55LaWVrBdPUnY",
  "key4": "4YdZDB8obQDwP4mvQ86KNMKCX6dbQCiJABU7cVdoNfSdxUrnZieCdn4ndn161EYbDodpL8mNywRHyRM5PcCA1zAD",
  "key5": "5v562gHty9zGd8i5z5KzEA3TZDFz9yejPz1m7tJB83dDWHyfRiS3gs13Y4mf4kupiqBYFCFjtQTpRBXb6PTyKzbU",
  "key6": "2NDmhxiErTbdhRAEh7nysBGpATGhbWShY39UfRrrvjrhSNmgrVuC7nEZac3S5cnvE3Nmp5zSwuJuHxS3Z9oCGkM7",
  "key7": "4BpykvAtW7dNfkYT1iMtwtPAawegHYNXnLtuAM6bURbtZwGyUDsD6AyD71ECBcJVqgJn7pUJKD24cVU4RJCuEjAr",
  "key8": "52q3gVZLxNNaJ43LJGMCEn3udA9bRYWCpYk7YMREyZTZ1QGjMp4TQMYL34kDhEqRwmxmun2FbDPKUSY6QUQ6mP58",
  "key9": "2gExEc9M7ERXGGwjdiCyGyQ7MSMf9iDRRLii6RgLuRircPEf86iet2t7BEtyVRitZUSfUk5mKmfPkPfF4HsghxmP",
  "key10": "4ycTc7Q13qCFUZvAuwyE66kcec4CDpUsokLA7fRzPySGQbvxqmeABDzDHens1U6qMTtRCf6TocnESaW7xJQ7dVVb",
  "key11": "4JztbuC2uzQtrVUj1FQgNiZTTKRgVXCfo1Vt3tPqDqNM5xix5Lu5uvTv5uwbkQehbEXKgW6powVite19x4yYZZop",
  "key12": "5eY6PyoEMynmsQrQzQkLXh1aqksgEb4ufm9E1XxfJ9ZSSu895j6idCQthbyWkmVteqaAzKFxtLPbudw8WJgBhbq8",
  "key13": "5ue8JYBrRoMirDhLn1mdCVhVj6dXV2yq2Hp74jvxCURfx7qUB4NFxSJq4FG8eff3jSpDwzo79dx93d8egY3sMoeK",
  "key14": "62wRoTwDTf5GD1HhEpSZfhUdcGkx4E6guWHp4bP2g8kENHZu4LSnEpxLYZhePVYv7Mtq67HG91QNEfyHJ9RFnLcA",
  "key15": "hNMo2LQVXJnJ7dGFxn6n8fUAtNee3TFp2S4W4aqSh8m3onbFE28rhDC5wwtYeR8PpAsJUB9Z1G9YsWMuCyv5Hxu",
  "key16": "4F61g5QbT4WUQUkyizuuDB1hazRhPD4WkkZBg9GtL4JKRtR51SZ6hDF8uMHuFx95ZtZwZDr7bVqL8TCuT6J5aNQK",
  "key17": "28jRZk5yx8iR1hnJSJ8f1dDJYqx8eMNfmHVF7J7hXzikRpdeCUspWxXp3jcjvEsZCwgfX3At4P8SCSbiq6cax3c4",
  "key18": "2tcsdqsABrPoHceBtQmduRv2FAaakGHjQq1QTyqRApGxDDQYHQmF8o3SA7URvjUuYJ7T1oTeTj5GbAZXGCpA8LDc",
  "key19": "3abtchuHbBh3dGSBRdwwJcBdEg4s5mhh6T3LGDfpZHXrSky2GXekyYsRAH59Vrhds6579dcN2xMcM9NSR8SeJapg",
  "key20": "4sXQsTjnZWXakvdDJj7WGVRDeGmzkTGdeLdSBcDoW5A4yQUsYQqBiZEuhGbjHUrdFZsDpd5yCgUp9ViEBiFUFdsu",
  "key21": "HDrmGEpe3SC2qjDpFuzx4gCdCkoRwqUZSgfxwSokjKGnvTC2WiZn3nnSHmRHNVQ36FhrrtaAzy8pRpwAYKw7egf",
  "key22": "3kBPcgck9gJYQ1KeWwXEw9L2HtD4b9XspoPGLYFPJMjmnGKWnUzbJJtRZ8rYQpndwUskvb24XDKhYMXQJc7GuaLa",
  "key23": "5p1SiKdrTsDRraegZLD4FtcxZBykY9Msp8RDno6MDqogKVHb9p1DapRyut3CoAHuHbhffV72edWfKM9UfuUeBMYL",
  "key24": "JS9r3ZqXomWaTRfxoAginv4rs2kzstsQ2YhtEVyJ4oUFpLdJE5wAoHQ4S5MGkaMfKzRJ6n4azeCD8TxawUNFdv4",
  "key25": "pCbrCLPxt8cumuVNu1TftpG1FFn2C2CQhW74dqhaBjRUkXLVvpTs3FBmEecPLeMmqTcq2UF3DErA7qqcsFp75y4",
  "key26": "5sUJVdGHsX8e7RwK38GvPFEEvUjUP6ifGLK9ySCprriJS1jZopnNPP1J1dnykUNyhCbRZeRr6d8e9WQ4ZTMhqCp2",
  "key27": "44JbtunLJRNYau5QceGH6wFby7xnTd4Ay63zpuesLRLV5SajZbsowjcajz2pR1jpERRmEfscF3jiZLzeyupUanDU",
  "key28": "59aHuh5KQ93KZZvkFvjWXaRiNsk4QUQ5JTwhUX3XJ78MZv14K6aU48FkcaeHMTunShEXepmKz5PSfnwiecdiANre",
  "key29": "3D1mzoUVRqfBXNjHzCWpDtPVTvrfG8cwoZXZ219TvVrZGTayA6voGGCkRXw1kTXnXNnHPEyLgbMzEywu2mAginQG",
  "key30": "CN7gSnYfdmdiiHG26wC3yyhkLc69EEsZD5SUEtK67he9bz9XomFNKamN6op6v7yxVsp1VZWEmzt5N8TQrPkfDJi",
  "key31": "cTcB4wpN9D7EFCSjGJDCSK7pdpnzN86JY1nsmxt2b8Jco8UFTWRaM385CzHMW6FsLQekrsHxQZLRBkrpbmLy2fw",
  "key32": "4hpw2MecrwX3FdVEhJaUeYdbMqjKHmrCVhTxNsW31h856i8ZPoqXLf2Mynf7M83YHEDTK5bmVpWz7QSJWi5CLDQK",
  "key33": "5L3iC44L9p9WYiyaRva16qmfXtCR427n89Th58eFWxNAYMvqjHCUzDbFXE1LatYjMNAGBCum6PQghwHVBQLChz72",
  "key34": "45HTFASQD37Z3nW5h8VVgpMXzu7CMb7nXCeTiaLrRSLKphbzD1AExdoFs2HtnBwxpNnmX1BJESTx75JST2XTBLfU",
  "key35": "3nXwsNXLn5LydvCY2JG7w4prkG57dDd8LT6Wk1BxeQsQSXWpMntE7PStGsSGx9jtzU91zU9ZBKyE1kVy3TjFQA8V",
  "key36": "JYY5Wuq4h5QyinN5NCoZU41DL4GmvrvS1SvwNshzbRoZLzHj2UAji6ysNheYJTpGEmP4YZsgr4uisHGnuwzNePn",
  "key37": "2TS2V4mAMFQ9MCTKbfcTtJtfeHeWWhdRAzaiAznK9FMtqk1DteX29GoMzbWjo228E7j24reL2LcvwE9ehorUEaVJ",
  "key38": "jxJiggk4KtuzpcrrLFExhSBoQL81r94FpDcqeG7jmJFNXbVjYxGCftugGs6WK2JQAvLRuxZp4KPQpnEC1y14P23"
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
