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
    "61CYLC5HDCuRHZwKNZpYemuxMJumUbumNF6rMsxP2pHiSjK1CpcgH63VDLCUWvMWJw8Mm2aK4cgqtjVSMMvJ8Tgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TDSd4ZiivKodQa67YyN3ZqSVeHwcSzkXNcsTjbHsLFd5q8LkJgXvaMPspXtzZFdj1UvsQxvQrpP676Ax81eTaGm",
  "key1": "Nv6Rotpzfv8DPMnGb4nH596wyoQgBFsE48TrgyYWq7RXEATq7k9VWFXYokNKSQQNxBk6e73ViWugaLkfoXY5gZd",
  "key2": "23JNszTUvy8zTNyBEa9VhAStebdTk4y6dnADLi2dUxUkBLShP7wU7kuX11apN1pqxHEUTQbfM9gcy9CbTRkfkZNe",
  "key3": "peAkF3jFzJkqiXZThYK3RU9mAq9jQAD6TzfoxHzYAHPxSD2GkUd2jw5hRan19KS42Wcf2yQEWwJzkHYPzd4tuaV",
  "key4": "5VijZWPMW7T8X7QABgAs3pcMCE4kd4X1z8wE6MZRxLNoP5FSGbc9nbJAPzhfxFg8WtKrhKdsDshYoj2QA3QJBKMF",
  "key5": "314PnDK9fzMdDc4MH4q2UiuKsRg7yEfHaepEzd7E6DJvaCgUfqSuvvLPaBmkEP5uUQi2o5nXxMUk3jGRNHkqFMNV",
  "key6": "xtz1EpD5rD5Jm23qPK8L9HutPQSucHrpQjheiXYt12UERx9YJXR9DfiDmk4UQmofmgeutk1ukGfTdgVkdtjd6gv",
  "key7": "4dvzLT4Tj8fHz5Y2KXv86YrohdQ3nTVU8z5mu6H5BRyQcgP8BMVndR2ti9MX9ugmjKfJzvAHGynjjkd2o19oGQKQ",
  "key8": "627zCDbM4NFo7FJMJQ644REmuCj3ugvmE92JbSFP74dyJ3uaqt2eXhz3DkQnuL2Pf8qb7PuCuAkzmseWcPikepgr",
  "key9": "22vnWqgK8QLmQjbuG5z2v61EKdTDqdhYt21uTdRKcsk4DBXwJMqUBCEFDK5sH1WiQwDqHNCCAyRi68mKUxaWLmRd",
  "key10": "4vmrJxiaMQCfXNXAZQczWzTTakf1j3QsVDWak8Qne1frFw8fWjpK5J8ayvPg9xG5c59t7Kr8wiXFNbDAiePKiR7V",
  "key11": "5dJiszdDHQgXHkCdiieLFDmvrq8tmJhgiw6n4GUn2eDuRKVg7Bjp1gBjVpTboE3UUY64LDni9yNLoNSszXdg9UDY",
  "key12": "eeAM7yMD3dJut6KbhC1fKoeaksQchssBFhYzVk9HeCfM8kfQnPL9Nkc3VDuSkS3eGy2ZjteoD5iLaUopj2jeah7",
  "key13": "aZ4BbyFh8tXe3hou8Mds6wHXY8SPChDy4DNyaxSXUWvY6eXwzkN7fe2ZkEkurwvAyAV1xFBEeaUrPCotVWkMYZ7",
  "key14": "4HcvX6zEFBJ3XQPJz4CCa6ufeeUWrX1UiAnWEz9wGghR7ydAg71nH6FSh8pnGdyhExsGCCkzsWqKM2o1YiEcuz1E",
  "key15": "2pYXXAevXEBM3FfpTA9RwYWGtYKxEeFeVSvYe5c71wKcPehk8QPWiDHSgEVyk8RRGavWvNFYDCZCfjhYVrxeaNDz",
  "key16": "2WCCrDzNGgpMqytaWwgYEWDmCa9XV8n4a6ngdDZWpHPyHQfWT5jA5QrBnu6HutQczCY521Vyi8gY6H67XuGm9VK4",
  "key17": "2ncvhpgs5mfoKdv59vTxKesTZYfFHQfkQ1QaMJX3ha3ioKtCwcA6zyngpBdvfZwNku6QzRS2H7KzMZGC6nsgYXMk",
  "key18": "3WHLdMoe67iDkErx8QR8Q5H6HZ3WCEphF4TNyUajTuJ6a1GgGUAeZ7rT9Qu9gvQ6qYbbnd9DuruJndW1vBBHSuUr",
  "key19": "ekFb3d3K8b1p6nyvMqDGGg1Rz8uDqX2Njv2k1CQoZUwCXKwDD2oT4TdPr6ZZesgx1mNVBsF3gDunD6tJYe7TPi3",
  "key20": "4Tw7Atx8nkB3TDbaGaVoZYsfEc5J2SuBQ4dTp7z3q4tRmxooMMwjJ7uE8NPGvBoi5oLtx8RPGeTM14gx6Hp5CnG1",
  "key21": "kqc3F74pQH3MCYVj2R4odaqmgX4MoaDTYx2aLMhycHNHtnEq2wErgmVXtbJsEm7r61Dp3pFwFxTjcUD2m8eaAuS",
  "key22": "oQA4xeEfwDZ4uV3zH1LBjDe16FVyYmS9RNNBHNzySsSPCsNhRt4Jd5R4XCNvWhVDtPRa9MddNrvrUmYJQLmQLY2",
  "key23": "3qySBGeMkTMDphmsFvrtse5MiSy6Lo2nZXdXFsemPjfCRpJWzZndQpAw4RAF9VtjUnCXHPCsFi27U2RBUTfi66T5",
  "key24": "2JLpYMeMk2nrGhYz7SHM1AGyRqxRdwqp17Kks1M6QfGxM3RoSaFTTWGnPR4Jw6Tkj4FsCfDwgtVsKguC5Q1Eb4qt",
  "key25": "i8z5Wy1uu9dBzL9hTDgTjzd2EmN2NoWi8ca4DaeDNC5kHjppZ4u7c6aDxSgkEy8BoGymip9KoWNAs1DLzPCfQCw",
  "key26": "49dmCmhrFMz9bhdaoK45CEqAV8d1fhUjGjz4qggnRS8F2g1eQ9KnWja7YkSJSWUoDomC98vzh1zp2ZpfiHmRwMsT",
  "key27": "3PSovfuhrJbGcMHXZ5oQGMrypZ1cfwMYkoMx5hk98tAtSZXPDSPrtzUaFdh6tetww78QBpH3a1BtMffJZV4L2Nit",
  "key28": "3BzN1xqfLYPVsb4PEUTvDou36Dhahh6jzTo59gPAAtiEseKxpc1Jop5Z5XV1XjX6oK3yJvf8KxQbBMuCyMihHfVH",
  "key29": "C45br8ifbmkeRwcVrrSEM8GBA4LCkdwhFcPvqesNSsEhPBYunFwB4doJPaerYuWz2ZVx4B6AZitdo6HgqD6tpbh",
  "key30": "6s58Qddin4SWqDukfKcEPw4MsKPMV1ZKzex9LqKY3Z3D36mJiTpPhrmfLgdQziZHJZSauXjSoqgBf4ttQNZQssQ",
  "key31": "2BYN84PS5ycRjkTeZN7FzMd4GMpzAi4ogHkX22RCHpjhUbYFMeZTDdGZyDq3xYMBHxVT8uQTKqUa7CG7V5VWoev3",
  "key32": "459YtB2U9WhWiXQqghYwsCEdVZYE3LKWRgN2uRShPzgjiC5fyjE6s8Hej5L1tDFRckg7KCfm7Gvkz3GRJH1Ek6Be",
  "key33": "2xsVJ4oaGNXsmFGNEGJic8SSRmYDzbfDSxiR8bvhsShce6BYkjpamwKi7h6xuBnKHQsmCepiKUiLyRQpQZByHGr3",
  "key34": "5H28zfYCoxyiSSQKScK5yeVSVdM8MfqAQAW4KDioKj8AcQj7cNzAMskxUTRN9VF4ifDwbRzp4E9X52xuiVsYLGrJ",
  "key35": "EbE8ueJ613jToex4sjDcnKbMWon4J4wXvgaodvne3jLULbceY7PQpq3Nj9evd94UNMBrVau27xa6Y1F8Z4Zrfx1",
  "key36": "41nPtHuhSVrGi8rnzsDQFRBWBgjCww3MGGBgEesNRDWgNZVeKZGa6n2n6QRv3ZvnTosWvfeRpJYC95b3RAWT8mZZ",
  "key37": "4WySjUAmJUTPg45tPahssDe85jj1UeXwAyqbFw2r6bWgM34HrBZ6vPc3zo3pM2szVaGcFpjUhErCiYWxNxtvV6xJ",
  "key38": "4XFFStC9HAEBDeFr7BFsKLCARoBa5xG1Wwfxh6dungeAhyjxANjzhJNSx1pPn1XnihBnEDCfs1Ngyvi8pqy9kXcZ",
  "key39": "2gT4muWWKGmud9qeN5DwTX1G3rf1do9ofPij2TLyjs59oi2iC5kt3idW33dhm7a2VvVexKABqF6LbjHsPfE2851c",
  "key40": "qwi6bcMki5ZMReRDXEuKQm6GNWsEAut3SH9xfBe8pCrQamGnNLRgo9yPwHZEssqgmi7wKUGEYXeVoNW3HSWUZsu",
  "key41": "fNK4agKECRv4XfycJyhHYh45xEurNHMqxZHcKTocycobYi7A7LvwrHDabkZ2RHhrwTTF79AZHXENKZyykwd1D5V",
  "key42": "4rcny3chVqqveWkhcttiEmqDVXxo3TxU337Lznv87QChxCZQ43wqHBtXpnbTFEsK4484AdoeNKAcSTxhggdX5qrV"
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
